# WatchTower changelog

## 2026-11-12 — Culture backers, family fortunes
- Culture: "Backers" lines on the BPO (Kleinhans $18M campaign and its $1M+ funders), Buffalo AKG (Gundlach $42.5M, 2016),
  RPO (RPO 100, $50M goal), Everson (Phillips and Sullivan $4.8M) and SPAC (Four Seasons $17.5M, Dake family $1M lead).
- Leaders: BPO President & Executive Director Jennifer Barbee (from Sept 1, 2026); SPAC CEO Elizabeth Sobol and President
  Christopher Shiley; Ralph C. Wilson Jr. Foundation President & CEO David Egner.
- History: new "Families & fortunes" per region (Rich, Knox, Wegman, Sands, Byrne, Congel, Golub, Dake), each sourced.

## 2026-11-12 — Money in Motion: seller and donor background
- 13 deals now carry a "Background" line on the named sellers or donors: public professional background (companies,
  roles, boards, prior gifts), with the source and, where confirmed, the company or firm website. Personal contact
  details (home addresses, personal phones or emails) are deliberately not collected.

## 2026-11-12 — Who to know, public data, faith connections
- Business tab: "Who to know" per region (chamber, economic development agency, community foundation, United Way, major
  foundations, business paper) with current leaders, websites and sources; "Public data & records" per region (NYS DOL
  regional labor statistics, Census QuickFacts, county IDA).
- Sources tab: statewide public data sites (ABO IDA project data, Comptroller local government data, REDC/CFA awards,
  Open NY, campaign finance, corporation search, DOL labor briefings).
- Faith tab: "Related" lines on 11 cards (charities, foundations, owners) with named benefactors where public records name
  them (e.g., Benderson and Holland Cohn at the Buffalo JCC; the Adams family at OLV; Chautauqua's Promise Campaign).
- MMB+CO managing partner: Mark Kovaleski.

## 2026-11-12 — Service Providers: leading individuals, next generation, websites
- New "Leading individuals" per region: Chambers USA 2026 Upstate NY Corporate/M&A ranked lawyers (with bands) and Best
  Lawyers 2027 Lawyers of the Year, plus long-listed practitioners such as Gordon E. Forth (Best Lawyers since 2001) and
  Gerry Stack (since 1997). Brian Bocketti is Chambers Band 2.
- New "Next generation": Best Lawyers: Ones to Watch 2027 (M&A, corporate, trusts & estates, tax) and Chambers "Up and Coming".
- Added Insero (Rochester CPA firm; CEO Nancy Catarisano) and Couch White (Albany law firm); Dannible & McKee noted as CNY's
  No. 1 CPA firm by CPAs (CNYBJ 2025 Book of Lists).
- Every firm card now links the firm's website (opened or found on the firm's own domain).
  98 entries in all.

## 2026-11-12 — Service Providers tab
- New tab after Business: law firms and CPA firms in each region with their current leaders, M&A/corporate and trusts &
  estates attorneys (Best Lawyers 2027 Lawyers of the Year and listed lawyers, Chambers USA 2026 Upstate NY), and nonprofit
  CPA practices with Cause IQ nonprofit client counts. 44 entries, each with a source.
- Not yet found: Albany-area M&A and trusts & estates Lawyers of the Year, Syracuse M&A Lawyer of the Year, and the
  managing partners of Lumsden McCormick, MMB+CO, Grossman St. Amour, Teal Becker & Chiaramonte and Whiteman Osterman & Hanna.
- Tabs tightened slightly so all ten fit on a laptop screen.
- Same day, second pass: added office leaders of multi-office firms in each city (Barclay Damon, Bond, Hodgson Russ,
  Phillips Lytle, Lippes Mathias, Harris Beach Murtha), their Albany/Syracuse/Rochester/Buffalo corporate and trusts &
  estates lawyers from Best Lawyers 2027, UHY (largest Capital Region CPA firm by CPAs), and Chambers USA's Upstate NY
  Corporate/M&A firm bands. 69 entries in all.

## 2026-11-12 — Websites on Faith cards
- Official website on 23 of 36 Faith cards (faith bodies and historic sites): 18 opened and confirmed, 5 found through a directory, redirect or newspaper but not opened (marked on the card).
- 13 cards have no link: 5 are community profiles (no single website), 5 have no public site found, 3 not confirmed this pass (Jewish Federation of Greater Rochester, Islamic Center of Rochester, Our Lady of Martyrs Shrine).

## 2026-11-12 — Sizes and websites in Culture
- Students per school (NCES private school data or the school's own figures), seats per theater and hall, and annual revenue from IRS Form 990 for clubs (member counts are not published).
- Official website on 57 of 63 cards; 52 opened and confirmed, 5 taken from a directory listing. 6 clubs have no public website.
- Corrected heads: Canisius (Fr. David Ciancimino, S.J.), Aquinas (David Eustis); added George Eastman Museum director Bruce Barnes.

## 2026-11-12 — Private schools and clubs in Culture
- Added 19 private schools (heads of school, type, founding) and 21 golf, city and yacht clubs across the four regions, plus 3 news items.

## 2026-11-12 — Culture tab and new tab order
- New Culture tab: 25 music and arts institutions across the four regions (orchestras, museums, theaters, festivals) with current leaders, plus 9 culture news items.
- Tab order: Money in Motion, General Briefings, Business, Faith, Culture, History, Politics, Officials, Sources. Tabs restyled as folder tabs.

## 2026-11-12 — Schedules and laptop backup
- Scheduled task "WatchTower refresh" (Mon + Thu, about 3:42 am ET, cloud only).
- Added tools/make_local_backup.py and the task "WatchTower laptop backup" (Mon + Thu evenings) into C:\New Files\Upstate.

## 2026-11-12 — Repo created
- Moved WatchTower into `mtippleroc-prog/watchtower` as the master copy (previously only in the Claude Project "Upstate New York Insights").
- Added CLAUDE.md (standing rules), REFRESH_INSTRUCTIONS.md (weekly procedure) and build.py.

## 2026-11-12 — First build (same day, before the repo)
- Built as "Upstate NY Insights" with SeaRover's four regions: Briefing, Politics, Officials, Business, Faith, History, Sources.
- Added Indian/Hindu and other Asian communities to Faith (15 entries across the four regions).
- Added Money in Motion (33 deals: M&A, capital & expansion, philanthropy, real estate), consolidating the earlier weekly digest.
- Renamed to WatchTower, added the logo, moved Money in Motion to the first tab.
- Every deal now names its sellers or donors (`who` field), or says when reports don't.
