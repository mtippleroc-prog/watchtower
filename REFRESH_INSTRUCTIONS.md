# WatchTower refresh procedure

Run this for every scheduled or manual refresh. Follow CLAUDE.md's rules throughout.

## 1. Set up
1. Attach and clone the repo, set the git identity (see CLAUDE.md).
2. Read `app/data.js`. Note `asOf` (the last refresh) — research covers everything since then.
3. Read the live app once with the Artifact tool (`action: "read"`, url in CLAUDE.md) so the later publish is allowed.

## 2. Research (since `asOf`), region by region: buf, roc, cny, alb
Search each region separately; a combined query returns thin results.

**Money in Motion (`DATA.deals`) — the priority section.**
- M&A (`ma`): companies bought or sold, private-equity add-ons, founder/family exits, wealth and accounting firm roll-ups.
- Capital & expansion (`cap`): new plants, fabs, HQ moves, large incentive-backed investments.
- Philanthropy (`phil`): gifts and pledges of about $1M+ and notable foundation grant rounds.
- Real estate (`cre`): commercial and multifamily sales of about $5M+; big listings get `"listing": true`.
- For every deal fill `who` (sellers or donors by name, or say they're not named), and where they are named add `bg`:
  public professional background (companies, roles, boards, prior gifts) with a source. Never add personal contact details. Amounts in $ millions; `null` if undisclosed.

**Public companies (`DATA.pubcos`, `DATA.filings`) — shown in General Briefings.**
- Watchlist = public companies headquartered in the four regions (`pubcos`: `n`, `tk`, `ex`, `hq`, `r`, `ind`, `src` = a recent filing
  showing the HQ address). Add a company only after a filing or release confirms the HQ is in-region; drop one that moves out
  (e.g. Columbus McKinnon moved to Charlotte in 2022). Candidates waiting for confirmation are listed in `nextUp`.
- For each watchlist company, search `"<company> 8-K <month year>"` and open the sec.gov filing (or the company's IR release).
  Add a `filings` entry for material items only: quarterly/annual results (`k: "results"`, two or three key numbers),
  acquisitions, sales, spin-offs, big financings (`deal`), CEO/CFO/COO/director changes (`people`), major plants or
  capital plans (`capital`), and proxy statements (`gov`: annual meeting date, director changes, and directors' local
  nonprofit/board roles as stated in the proxy). Skip routine items (dividend-only notices, Form 4s, 13G/A, note programs).
- `filings` fields: `d`, `tk`, `form` ("8-K", "10-Q", "DEF 14A", "Release"), `k`, `r`, `h`, `s`, `src`. Numbers exactly as filed.
  Keep about 12 months; when a deal also has named sellers or donors in-region, add it to Money in Motion as well.

**Early signals (`DATA.signals`) — shown in General Briefings. Significant items only.**
- `warn`: NY WARN notices for in-region sites (closures, or layoffs of about 25+). Check the NYS DOL WARN page and trackers
  (warnact.io, layoffnext.com, kadoa.com) plus local news; prefer the DOL listing as `src` when it opens. Note any link to a
  sale, merger or transfer.
- `ida`: IDA agendas and approvals with real projects (inducement/incentive resolutions about $5M+ of investment, or
  notable housing/downtown projects): ECIDA (ecidany.com board agendas/packages), COMIDA/Imagine Monroe, Onondaga CIDA,
  Albany County and Saratoga County IDAs, Tompkins County IDA. Projects only: never add notices of upcoming board meetings.
- `honor`: only the major lists (RBJ Icon Honors and Forty Under 40, Buffalo Business First Power 250, City & State Upstate
  Power 100, Albany Business Review and CNY Business Journal equivalents). One item per list, not every honoree.
- Fields: `d`, `t`, `r`, `h`, `s`, `src`. Keep about 6 months.

**Briefing (`DATA.news`)**: government/political (`gov`), business (`biz`), faith (`faith`) and culture (`culture`) items worth knowing.

**Officials (`DATA.officials`)**: resolve pending races (`"p": "?"`), record resignations, appointments, new judges,
leadership changes. Update `res`/`note`, never delete history silently.

**Service Providers (`DATA.providers`)**: law and CPA firms by region (`k`: "Law firms", "CPA firms",
"M&A and corporate attorneys", "Trusts & estates attorneys", "Nonprofit CPAs"). Update managing partners and office leaders
when they change, firm mergers, and each August's Best Lawyers "Lawyer of the Year" for M&A and Trusts and Estates in
Buffalo, Rochester, Syracuse and Albany. Fill entries marked "not confirmed this pass" when a public source names them.
For thin cities, check the local offices of the multi-office firms (office leader, and their lawyers listed by city in
each firm's Best Lawyers release). Refresh `providers.chambers` when Chambers USA publishes (around June).
"Leading individuals" come only from Chambers rankings, Best Lawyers Lawyer of the Year or long Best Lawyers tenure;
"Next generation" only from Best Lawyers: Ones to Watch and Chambers "Up and Coming". Every firm card carries `web`.
Rankings only from named sources (Best Lawyers, Chambers USA, Cause IQ nonprofit client counts); never call a firm "top"
on your own judgment.

**Business (`DATA.business[r].who` and `.data`)**: refresh "Who to know" leaders (chambers, economic development,
community foundations, United Ways, major foundations) when they change; fill missing websites once confirmed.

**Faith (`DATA.faith`)**: leadership changes, settlements, closures/mergers, new temples or congregations.
Every Faith card carries `web` (official site, opened to confirm) or a `webNote` saying why not ("Community profile; no
single website", "No public website found", "Website not confirmed this pass"). Fill in unconfirmed ones when you can.

**Culture (`DATA.culture`, plus `culture` items in `DATA.news`)**: music and arts institutions of substance (orchestras,
major museums, professional theaters, major festivals): leadership changes, big gifts or campaigns, building projects,
season announcements of note, closures or mergers. Update the institution's `lead` line when its leaders change. Major gifts and campaigns go in the card's `rel` list (`{n, note, web?, src}`, shown as "Backers").
Also cover private schools (new heads of school, campaigns, mergers or closures, enrollment news) and private golf, city
and yacht clubs (major championships hosted, new clubhouses or renovations, sales or closures). No membership lists.
Every Culture card carries `web` (official site, opened to confirm) and, where available, `size` + `sizeSrc`:
students for schools, seats for venues, latest Form 990 revenue for clubs. Refresh these when newer figures appear.

Good sources: Rochester Business Journal, Rochester Beacon, WXXI, Buffalo News, Buffalo Business First, Buffalo Niagara
Partnership, WKBW/WIVB/WGRZ, Investigative Post, CNY Central, Syracuse.com, CNY Business Journal, Central Current, WRVO,
Times Union, Albany Business Review, WAMC, Spectrum News, Ithaca Voice, FingerLakes1, governor.ny.gov, ESD, SEC EDGAR,
university and hospital newsrooms, diocesan sites.

**History (`DATA.history[r].legacy`)**: `[name, description, src]` for the families and fortunes behind each region; update when
leadership or ownership changes (sales, mergers). Sourced facts only.

## 3. Edit
- Add new items at the top of their arrays with `d` (YYYY-MM-DD, or YYYY-MM if only the month is known), `r` (regions), `src`.
- Skip duplicates (same deal or story already present). Update an existing entry rather than adding a second one.
- Keep Briefing to roughly the last 120 days: remove older `news` items (git history keeps them). Keep all deals for the current year.
- Update `asOf` to today and adjust `nextUp`.

## 4. Build, save, publish
1. `python3 build.py` — stop and fix if it fails.
2. Add a dated entry to `CHANGELOG.md` (counts of new deals/news, races resolved, anything notable).
3. `git add -A && git commit -m "Refresh YYYY-MM-DD" && git push origin main`.
4. Publish `dist/watchtower.html` to the live app URL with the Artifact tool (`url` set; no `icon`).
5. Report in two or three sentences: what's new, the biggest deals, and anything that couldn't be confirmed.
