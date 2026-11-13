#!/usr/bin/env python3
"""Daily SEC EDGAR check for WatchTower's public-company watchlist. Runs in GitHub Actions (.github/workflows/sec.yml).

- Watchlist: every `tk` in DATA.pubcos (app/data.js) plus candidates in tools/sec_candidates.txt.
- For each ticker: CIK from SEC's company_tickers.json, then the company's submissions feed
  (business address -> region check, recent filings).
- Writes tools/sec_feed.json: company list (with HQ city/ZIP, region, in-region flag) and material filings from the
  last 120 days (8-K with item codes, 10-K, 10-Q, proxies, S-1/S-4, merger and tender filings, 13D).
The Mon/Thu WatchTower refresh reads this file first and writes up what matters (see REFRESH_INSTRUCTIONS.md).
"""
import datetime, json, os, re, time, urllib.request

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
UA = {"User-Agent": "WatchTower research mtippleroc-prog@users.noreply.github.com"}
TODAY = datetime.date.today()
SINCE = (TODAY - datetime.timedelta(days=120)).isoformat()
FORMS = {"8-K", "8-K/A", "10-K", "10-Q", "DEF 14A", "DEFA14A", "PRE 14A", "DEFM14A", "S-1", "S-4", "425",
         "SC 13D", "SC 13D/A", "SC TO-T", "SC TO-I", "SC 14D9", "15-12B", "25-NSE", "8-K12B"}
ITEMS = {"1.01": "Material agreement", "1.02": "Agreement ended", "1.03": "Bankruptcy", "2.01": "Acquisition/disposition completed",
         "2.02": "Results", "2.03": "New debt", "2.05": "Exit/restructuring costs", "2.06": "Impairment", "3.01": "Delisting notice",
         "3.02": "Unregistered equity sale", "4.01": "Auditor change", "5.01": "Change in control", "5.02": "Officer/director change",
         "5.03": "Bylaws/charter change", "5.07": "Shareholder vote", "7.01": "Reg FD", "8.01": "Other events", "9.01": "Exhibits"}

def region(z):
    try: z3 = int(str(z)[:3])
    except ValueError: return None
    if z3 in (140, 141, 142, 143, 147): return "buf"
    if z3 in (144, 145, 146, 148): return "roc"
    if 130 <= z3 <= 139 or z3 == 149: return "cny"
    if z3 in (120, 121, 122, 123, 128, 129): return "alb"
    return None

def get(url):
    for i in range(3):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=60) as r:
                return json.loads(r.read())
        except Exception:
            if i == 2: raise
            time.sleep(2 * (i + 1))

src = open(os.path.join(ROOT, "app", "data.js"), encoding="utf-8").read()
block = src[src.index("pubcos:"):src.index("filings:")]
watch = re.findall(r'tk:\s*"([^"]+)"', block)
cand_file = os.path.join(HERE, "sec_candidates.txt")
cands = [l.split("#")[0].strip() for l in open(cand_file)] if os.path.exists(cand_file) else []
cands = [c for c in cands if c and c not in watch]

tick = get("https://www.sec.gov/files/company_tickers.json")
cik_of = {v["ticker"].upper(): str(v["cik_str"]).zfill(10) for v in tick.values()}
def lookup(tk):
    t = tk.upper()
    return cik_of.get(t) or cik_of.get(t.replace(".", "-")) or cik_of.get(t.split(".")[0])

companies, filings = {}, []
for tk, kind in [(t, "watch") for t in watch] + [(t, "candidate") for t in cands]:
    cik = lookup(tk)
    if not cik:
        companies[tk] = {"status": kind, "error": "ticker not found at SEC"}; continue
    s = get(f"https://data.sec.gov/submissions/CIK{cik}.json")
    biz = (s.get("addresses") or {}).get("business") or {}
    z = (biz.get("zipCode") or "")[:5]
    rg = region(z) if (biz.get("stateOrCountry") == "NY") else None
    companies[tk] = {"status": kind, "cik": cik, "name": s.get("name"), "city": biz.get("city"), "state": biz.get("stateOrCountry"),
                     "zip": z, "region": rg, "inRegion": bool(rg)}
    r = s.get("filings", {}).get("recent", {})
    for i, form in enumerate(r.get("form", [])):
        d = r["filingDate"][i]
        if d < SINCE or form not in FORMS: continue
        items = [x.strip() for x in (r.get("items", [""] * len(r["form"]))[i] or "").split(",") if x.strip()]
        if form.startswith("8-K") and items and set(items) <= {"7.01", "9.01"}: continue   # Reg FD decks only
        acc = r["accessionNumber"][i].replace("-", "")
        filings.append({"d": d, "tk": tk, "form": form, "items": [f"{x} {ITEMS.get(x, '')}".strip() for x in items],
                        "desc": r.get("primaryDocDescription", [""] * len(r["form"]))[i],
                        "url": f"https://www.sec.gov/Archives/edgar/data/{int(cik)}/{acc}/{r['primaryDocument'][i]}"})
    time.sleep(0.25)   # SEC asks for no more than 10 requests a second

filings.sort(key=lambda f: (f["d"], f["tk"]), reverse=True)
out = {"updated": TODAY.isoformat(), "since": SINCE, "companies": companies, "filings": filings}
json.dump(out, open(os.path.join(HERE, "sec_feed.json"), "w"), indent=1)
print(f"companies {len(companies)}  filings {len(filings)}  candidates in region: "
      f"{[t for t, c in companies.items() if c.get('status') == 'candidate' and c.get('inRegion')]}")
