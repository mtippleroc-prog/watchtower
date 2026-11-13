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
- For every deal fill `who` (sellers or donors by name, or say they're not named). Amounts in $ millions; `null` if undisclosed.

**Briefing (`DATA.news`)**: government/political (`gov`), business (`biz`), faith (`faith`) and culture (`culture`) items worth knowing.

**Officials (`DATA.officials`)**: resolve pending races (`"p": "?"`), record resignations, appointments, new judges,
leadership changes. Update `res`/`note`, never delete history silently.

**Faith (`DATA.faith`)**: leadership changes, settlements, closures/mergers, new temples or congregations.

**Culture (`DATA.culture`, plus `culture` items in `DATA.news`)**: music and arts institutions of substance (orchestras,
major museums, professional theaters, major festivals): leadership changes, big gifts or campaigns, building projects,
season announcements of note, closures or mergers. Update the institution's `lead` line when its leaders change.

Good sources: Rochester Business Journal, Rochester Beacon, WXXI, Buffalo News, Buffalo Business First, Buffalo Niagara
Partnership, WKBW/WIVB/WGRZ, Investigative Post, CNY Central, Syracuse.com, CNY Business Journal, Central Current, WRVO,
Times Union, Albany Business Review, WAMC, Spectrum News, Ithaca Voice, FingerLakes1, governor.ny.gov, ESD, SEC EDGAR,
university and hospital newsrooms, diocesan sites.

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
