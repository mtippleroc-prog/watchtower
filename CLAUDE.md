# WatchTower — standing rules for every Claude session

WatchTower is Matt's research app on Upstate New York: Money in Motion (deal flow), news, politics and officials,
business, faith communities and history. It is the companion to SeaRover (nonprofits and foundations) and uses
SeaRover's regions.

## The one canonical copy: this GitHub repo
- Master copy: private repo **`mtippleroc-prog/watchtower`**, branch `main`. Scheduled runs work from it, so they never need Matt's computer.
- **Start of any session:** attach the repo with `add_repo` (owner `mtippleroc-prog`, repo `watchtower`, access `push`),
  clone it (`git clone --depth 50 https://github.com/mtippleroc-prog/watchtower`), then
  `git config user.name "mtippleroc-prog"` and `git config user.email "mtippleroc-prog@users.noreply.github.com"`.
- **End of any session that changed files:** commit with a short message and `git push origin main`
  (if rejected: `git pull --rebase origin main`, then push). **Push BEFORE republishing the app.**
- `C:\New Files\Upstate` on Matt's laptop is a backup and working copy only, refreshed by the scheduled task
  "WatchTower laptop backup". It may lag behind GitHub; never treat it as newer than the repo, and never copy files
  from it into the repo without asking Matt.
- Never commit passcodes, keys or tokens.

## The live app
- Published at **https://claude.ai/artifact/KH8bkJabzjnkJnCVFALYfr**. Always republish to this same link
  (Artifact tool, `url` = that link, `file_path` = `dist/watchtower.html`). Read it first if this session hasn't.
- Build: `python3 build.py` → `dist/watchtower.html` (inlines `app/data.js` into `app/app_template.html` and syntax-checks it).
- Content lives in `app/data.js`; layout and logic in `app/app_template.html`. Edit with targeted edits, never by retyping
  content from tool output. After editing, confirm `data.js` still parses (the build does this).

## Content rules (never break)
1. **Public information only**: reputable news, government and court sites, SEC/EDGAR, election results, the organization's own site, IRS filings.
2. **Never invent facts.** Every dated item and every deal gets a `src` URL. If something can't be confirmed, leave it out
   or label it ("Not re-verified this pass", "Not named in the report").
3. **Money in Motion — names are required.** Every deal carries a `who` field naming the people selling the business or
   property (likely receiving proceeds) or the people/foundations giving the money:
   `"who": {"l": "Sellers"|"Seller"|"Donors"|"Funding", "t": "...", "src": optional}`.
   If reports don't name them, say so plainly; never guess. Public-company deals: say proceeds go to shareholders/the company.
4. Election results are unofficial until certified; mark races still being counted as pending (`"p": "?"`).
5. Political content stays factual and even-handed: who holds office, party, results, what they've said and done.
6. Nothing about Matt's own meetings, contacts, outreach or relationships goes into the app.

## Scope
- **Regions (by ZIP3, same as SeaRover):** `buf` Buffalo/Niagara & West 140–143,147 · `roc` Rochester & Area 144–146,148
  (incl. Ithaca, Elmira, Corning) · `cny` Central NY 130–139,149 (incl. Seneca Falls, Auburn, Utica, Binghamton, Watertown) ·
  `alb` Albany & North 120–123,128,129. Everything else (Hudson Valley, NYC, ZIP3 127) is out.
- Tabs, left to right: Money in Motion, General Briefings (default view), Business, Faith, Culture, History, Politics, Officials, Sources.

## Where things live
| What | Where |
|---|---|
| All content (news, deals, officials, donors, business, faith, culture, history, research queue) | `app/data.js` |
| Layout, styles, logic | `app/app_template.html` |
| Build | `build.py` → `dist/watchtower.html` (not committed) |
| Logo | `assets/logo.svg`, `assets/logo.png` |
| Refresh procedure | `REFRESH_INSTRUCTIONS.md`, run by the scheduled task "WatchTower refresh" (Mon + Thu, about 3:42 am ET, cloud only) |
| Laptop backups | `C:\New Files\Upstate`: repo files, `WatchTower_offline.html`, and `_backups\` (8 rotating zip slots, `BACKUPS.md`), made by `tools/make_local_backup.py` via the task "WatchTower laptop backup" (Mon + Thu evenings) |
| History of changes | `CHANGELOG.md` |
| Open research queue | `DATA.nextUp` in `app/data.js` |
