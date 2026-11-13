// WatchTower — data file. Public information only; every dated item carries a source.
// Regions mirror SeaRover (by ZIP3). Last research pass: 2026-11-12.
const DATA = {
  asOf: "2026-11-12",
  regions: {
    buf: { name: "Buffalo/Niagara & West", short: "Buffalo", zip3: "140–143 · 147", places: "Buffalo, Niagara Falls, Lockport, Batavia, Jamestown, Olean, Chautauqua" },
    roc: { name: "Rochester & Area", short: "Rochester", zip3: "144–146 · 148", places: "Rochester, Canandaigua, Geneva, Ithaca, Elmira, Corning, Hornell" },
    cny: { name: "Central NY", short: "Central NY", zip3: "130–139 · 149", places: "Syracuse, Auburn, Seneca Falls, Utica, Rome, Binghamton, Watertown, Cooperstown" },
    alb: { name: "Albany & North", short: "Albany", zip3: "120–123 · 128 · 129", places: "Albany, Troy, Schenectady, Saratoga Springs, Glens Falls, Lake Placid, Plattsburgh" }
  },

  // ---------------- NEWS (dated, sourced) ----------------
  news: [
    // politics
    { d: "2026-11-04", cat: "gov", r: ["buf","roc","cny","alb"], h: "Hochul wins a second full term by about 20 points", s: "Gov. Kathy Hochul, a Buffalo-area native, beat Republican Bruce Blakeman by roughly 20 points with about 90% counted, versus a 6-point margin in 2022. AG Letitia James and Comptroller Thomas DiNapoli were also re-elected.", src: "https://www.gtlaw.com/-/media/files/insights/alerts/2026/11/gt-alert_new-york-state-2026-election-update.pdf" },
    { d: "2026-11-04", cat: "gov", r: ["buf","roc","cny","alb"], h: "Democrats regain a two-thirds State Senate supermajority", s: "Senate Democrats grew from 41 to at least 47 of 63 seats; the Assembly stands at 111–39. Assembly Majority Leader Crystal Peoples-Stokes (Buffalo) and former Minority Leader Will Barclay (Pulaski) are retiring, and 51 new legislators take office in January.", src: "https://www.gtlaw.com/-/media/files/insights/alerts/2026/11/gt-alert_new-york-state-2026-election-update.pdf" },
    { d: "2026-11-06", cat: "gov", r: ["alb","cny"], h: "Constantino wins NY-21; Gendebien concedes", s: "Republican Anthony Constantino, CEO of Amsterdam-based Sticker Mule, won Elise Stefanik's North Country seat by about 2 points over Lisbon dairy farmer Blake Gendebien (D). Stefanik did not seek re-election.", src: "https://www.wamc.org/news/2026-11-06/gendebien-concedes-in-ny-21" },
    { d: "2026-11-04", cat: "gov", r: ["alb"], h: "Rogerson flips Tedisco's Saratoga Senate seat; SD-43 too close to call", s: "Democrat Sarah Rogerson, a law professor, beat Sen. Jim Tedisco in SD-44. In SD-43, state historian Devin Lander (D) narrowly leads Sen. Jake Ashby (R) in unofficial results. Chloe Pierce (D) flipped AD-107 and Carrie Woerner (D) held AD-113.", src: "https://www.cityandstateny.com/politics/2026/11/where-do-all-key-new-york-state-legislative-races-stand/417054/" },
    { d: "2026-11-04", cat: "gov", r: ["cny"], h: "CNY Assembly shifts: Gentile flips Utica seat, Lemondes trails", s: "Michael Gentile (R) won the open AD-119 seat. In AD-126, Ian Phillips (D) leads Assemblyman John Lemondes (R) by 223 votes with absentees outstanding. Maurice \"Mo\" Brown (D) won AD-129, succeeding Bill Magnarelli.", src: "https://www.cityandstateny.com/politics/2026/11/where-do-all-key-new-york-state-legislative-races-stand/417054/" },
    { d: "2026-11-04", cat: "gov", r: ["cny"], h: "Democrats win a supermajority on the Onondaga County Legislature", s: "County Executive Ryan McMahon (R) now faces a Democratic supermajority on the legislature.", src: "https://cnycentral.com/news/2026-election/onondaga-county-legislature-now-with-super-majority-of-democrats" },
    { d: "2026-11-04", cat: "gov", r: ["buf"], h: "WNY: incumbents hold in Congress; Erie County Clerk race tight", s: "Langworthy, Tenney and Kennedy were re-elected. Steven Meyer (D) led Erie County Clerk Michael Kearns (R) 51.6–48.4; AD-143 (Cheektowaga) is within about 300 votes. Republicans widened Niagara County Legislature control to 12–3.", src: "https://www.thepartnership.org/2026/11/04/advocacy-alert-2026-election-analysis/" },
    { d: "2026-11-04", cat: "gov", r: ["roc"], h: "Cooney claims a fourth Senate term", s: "Sen. Jeremy Cooney (D, SD-56) outlined Rochester priorities after re-election; Samra Brouk (D) and Pam Helming (R) also held their seats.", src: "https://www.fingerlakes1.com/2026/11/04/cooney-claims-fourth-senate-term-outlines-rochester-priorities/" },
    { d: "2026-07-17", cat: "gov", r: ["buf"], h: "Bills owners give to Hochul after stadium support", s: "Terry Pegula gave $138,600 to the Democratic State Committee and $18,000 to Hochul's campaign; Kim Pegula gave $18,000. They were their first gifts to Hochul since the 2022 stadium deal; Hochul attended the new stadium's ribbon-cutting in June.", src: "https://www.wamc.org/2026-07-17/buffalo-bills-owners-stuff-hochul-campaign-coffers-after-stadium-support" },
    { d: "2026-02-16", cat: "gov", r: ["roc"], h: "Moehle ends Brighton re-election bid", s: "Supervisor Bill Moehle (D), in office since 2012, suspended his campaign after Town Board member Nate Salzman won the Brighton Democratic designation. Moehle serves out his term.", src: "https://rochesterbeacon.com/2026/02/16/moehle-drops-out-of-brighton-supervisor-race/" },
    { d: "2026-01-08", cat: "gov", r: ["alb","cny"], h: "Judge rules John Sarcone is not lawfully serving as U.S. Attorney", s: "A federal judge disqualified the acting U.S. Attorney for the Northern District of New York and tossed his subpoenas in an investigation of AG Letitia James.", src: "https://spectrumlocalnews.com/nys/capital-region/politics/2026/01/08/judge-rules-john-sarcone-not-lawfully-u-s--attorney" },
    { d: "2026-01-01", cat: "gov", r: ["buf","roc","cny","alb"], h: "New mayors in Buffalo, Syracuse and Albany", s: "Sean Ryan became Buffalo's first new mayor in 20 years; Sharon Owens became Syracuse's first Black mayor; Dorcey Applyrs became Albany's first Black mayor. Malik Evans began a second term in Rochester.", src: "https://spectrumlocalnews.com/nys/central-ny/news/2025/12/31/new-year-brings-new-leadership-across-major-upstate-n-y--cities-" },
    // business
    { d: "2026-11-10", cat: "biz", r: ["roc"], h: "New partnership targets Rochester's $10B food industry", s: "Greater Rochester groups launched an effort to grow the region's food and beverage sector.", src: "https://rbj.net/2026/11/10/greater-rochester-partnership-grow-10-billion-food-industry/" },
    { d: "2026-11-04", cat: "biz", r: ["roc"], h: "Kodak's Rochester operations help fuel Q3 growth", s: "Eastman Kodak credited its Rochester-based operations for third-quarter growth.", src: "https://rbj.net/2026/11/04/kodak-rochester-operations-drive-growth-q3/" },
    { d: "2026-11-04", cat: "biz", r: ["roc"], h: "Commercial construction lending stays strong despite costs", s: "Rochester lenders report steady commercial construction lending even as costs rise.", src: "https://rbj.net/2026/11/04/commercial-construction-lending-strong-rochester-rising-costs/" },
    { d: "2026-10-25", cat: "biz", r: ["buf"], h: "Niagara Power Transformer adds $71M Buffalo expansion", s: "A 96,000 sq ft addition will lift transformer capacity 50% and add about 73 jobs in Erie County.", src: "https://www.areadevelopment.com/newsItems/10-25-2026/niagara-power-transformer-buffalo-new-york.shtml" },
    { d: "2026-10-20", cat: "biz", r: ["roc"], h: "Phoenix Tailings picks Eastman Business Park for $375M rare-earth plant", s: "A 500,000 sq ft separation facility: 90+ jobs at start, 200+ eventually. Up to $3M in Excelsior credits, a conditional $500M federal loan and a $66M DOE grant. Operations start 2027, full production 2028.", src: "https://www.governor.ny.gov/news/governor-hochul-announces-phoenix-tailings-establish-375-million-commercial-scale-rare-earth" },
    { d: "2026-10-16", cat: "biz", r: ["buf"], h: "M&T Bank beats Q3 estimates on loan growth", s: "Adjusted EPS $5.08 vs. $4.93 expected; net income $775M; average loans up $2.6B to $143.3B; $323M of buybacks.", src: "https://finviz.com/news/403487/mt-bank-shares-rise-153-as-third-quarter-earnings-beat-estimates-on-loan-growth" },
    { d: "2026-10-14", cat: "biz", r: ["alb"], h: "GlobalFoundries to build two more Malta fabs with $21B from Japan", s: "Two 300mm fabs under a U.S.–Japan investment deal: 27,000 construction and planning jobs and 1,000+ manufacturing jobs. First fab breaks ground in 2026 and opens in 2029.", src: "https://spectrumlocalnews.com/nys/central-ny/news/2026/10/14/japan-taps-globalfoundries-to-build-2-chip-fabs-in-malta-in--21-billion-project-" },
    { d: "2026-09-11", cat: "biz", r: ["buf"], h: "Copart to buy ACV Auctions for $1.9B", s: "All-cash, $10.50 per share (about a 45% premium) for Buffalo's best-known startup; expected to close by year-end 2026.", src: "https://www.irishtimes.com/business/2026/09/11/online-auto-auctioneer-copart-to-buy-acv-auctions-in-19-billion-deal/" },
    { d: "2026-07-09", cat: "biz", r: ["cny"], h: "Micron pours first foundations in Clay", s: "After a January 2026 groundbreaking, concrete work began on the first fab at White Pine Commerce Park; Bechtel is EPC contractor. The plan is up to $100B over four fabs and 4,500+ peak construction jobs.", src: "https://www.enr.com/articles/63307-foundation-work-begins-on-microns-100b-new-york-semiconductor-megafab" },
    { d: "2026-01-14", cat: "biz", r: ["roc"], h: "Cornell restores federal funding, keeps cutting costs", s: "A settlement restored frozen research funding, but President Michael Kotlikoff warned of continuing headwinds; the \"Resilient Cornell\" plan includes layoffs where attrition falls short.", src: "https://www.fingerlakes1.com/2026/01/14/cornell-faces-financial-and-political-strain/" },
    // culture
    { d: "2026-07-07", cat: "culture", r: ["alb"], h: "Glens Falls Country Club hosts the NYS Men's Amateur", s: "The 103rd championship ran July 7–9 on the Donald Ross course.", src: "https://nysga.org/communications-news/preview-2026-nys-mens-amateur-championship-at-glens-falls" },
    { d: "2026-07-01", cat: "culture", r: ["alb"], h: "Michael Turner takes over at Albany Academy", s: "Turner, formerly at The Shipley School near Philadelphia, succeeds Chris Lauricella as head of school.", src: "https://www.albanyacademy.org/p/~board/general-news/post/welcome-mr-turner-albany-academys-new-head-of-school" },
    { d: "2026-03-04", cat: "culture", r: ["buf"], h: "Nichols School mourns Head of School Chris Burner", s: "Burner led Nichols for seven years. Rochester native Scott Reisinger, formerly head of Trevor Day School in New York City, became interim head on July 1.", src: "https://www.btpm.org/local/2026-03-04/nichols-school-in-mourning-following-passing-of-its-head-of-school" },
    { d: "2026-11-11", cat: "culture", r: ["roc"], h: "Geva's artistic director leaves; Mark Cuddy returns as interim", s: "Elizabeth Williamson departs in January for the American Conservatory Theater in San Francisco. Artistic director emeritus Mark Cuddy, who led Geva from 1995 to 2022, steps in alongside Executive Director James Haskins while a search runs.", src: "https://rochesterbeacon.com/2026/11/11/cuddy-to-return-as-geva-interim-artistic-director" },
    { d: "2026-11-09", cat: "culture", r: ["buf"], h: "Shea's $34.5M expansion hits a milestone", s: "President and CEO Brian Higgins laid the final block of the new elevator and stair tower. The four-story, 25,000 sq ft addition on Pearl Street is due at the end of 2027, in the theater's centennial era.", src: "https://www.buffalorising.com/2026/11/sheas-expansion-hits-milestone/" },
    { d: "2026-11-05", cat: "culture", r: ["alb"], h: "Proctors CEO Philip Morris to retire; Jean Leonard named successor", s: "Morris, CEO since 2002, retires March 29, 2027. President Jean Leonard takes over the Collaborative, which runs Proctors, Capital Rep, Universal Preservation Hall and the American Theatre in Troy, now under construction.", src: "https://berkshireonstage.blog/2026/11/05/philip-morris-to-retire-as-ceo-of-proctors-collaborative-jean-leonard-to-become-president-and-ceo/" },
    { d: "2026-09-23", cat: "culture", r: ["roc"], h: "RPO names a new president and extends Andreas Delfs", s: "Tonya McBride-Robles is the Rochester Philharmonic's new president; Music Director Andreas Delfs received a three-year extension.", src: "https://www.whec.com/top-news/rpo-announces-2026-27-season-new-president-and-contract-extension-for-music-director/" },
    { d: "2026-07-24", cat: "culture", r: ["buf"], h: "Buffalo AKG splits leadership between two directors", s: "Deputy Director Jillian Jones becomes executive director and Chief Curator Cathleen Chaffee artistic director on Nov. 1, succeeding Janne Sirén, who led the museum from 2013 and its $230M expansion campaign.", src: "https://www.btpm.org/local/2026-07-24/akg-announces-new-leadership-names-co-directors-for-first-time" },
    { d: "2026-07-06", cat: "culture", r: ["cny"], h: "Syracuse Stage's Robert Hupp to step down in 2027", s: "Artistic director since 2016, Hupp leaves after the 2026-27 season, ending with Les Misérables. A national search is underway.", src: "https://news.syr.edu/2026/07/06/robert-hupp-to-step-down-as-syracuse-stage-artistic-director-in-summer-2027/" },
    { d: "2026-05-14", cat: "culture", r: ["alb"], h: "SPAC marks 60 years and a decade under Elizabeth Sobol", s: "Home to New York City Ballet and The Philadelphia Orchestra in summer, SPAC draws about 500,000 visitors a year and runs a $17.5M Four Seasons Campaign.", src: "https://spac.org/press/press-release-saratoga-performing-arts-center-reflects-on-spacs-evolution-as-it-celebrates-its-60th-anniversary-and-a-decade-of-leadership-from-ceo-elizabeth-sobol/" },
    { d: "2026-02-10", cat: "culture", r: ["buf"], h: "BPO's 2026-27 season: Lang Lang and a world premiere", s: "JoAnn Falletta's orchestra opened with Lang Lang and premiered Richard Danielpour's oratorio Francis in October.", src: "https://bpo.org/wp-content/uploads/2026/02/BPO-Announces-2026-27-Concert-Season.pdf" },
    { d: "2026-02", cat: "culture", r: ["roc"], h: "Corning Museum of Glass gets a new president in its 75th year", s: "Jessica Levin Martinez, formerly director of Cornell's Johnson Museum of Art, succeeded Karol Wright.", src: "https://pureoldies941.com/news/258852-cornell-director-to-become-cmog-president-in-february" },
    // faith
    { d: "2026-11-03", cat: "faith", r: ["buf"], h: "Episcopal Diocese of WNY opens nominations for its 12th bishop", s: "The diocesan profile \"Called Together\" was released; an electing convention is planned for May 1, 2027, with consecration targeted for September 2027.", src: "https://episcopalwny.org/bishop-search/" },
    { d: "2026-04-15", cat: "faith", r: ["buf"], h: "Buffalo diocese revises parish share of $150M abuse settlement", s: "Bishop Michael Fisher dropped the 80% ask for merging parishes and raised the diocese's own contribution from $30M to $40M. The settlement resolves 800+ claims.", src: "https://www.bishop-accountability.org/2026/04/diocese-revises-parish-contributions/" },
    { d: "2026-03-27", cat: "faith", r: ["alb"], h: "Albany diocese reaches $148M settlement with survivors", s: "Bishop Mark O'Connell, appointed in October 2025, apologized to survivors. The deal still needs court approval and a survivor vote.", src: "https://spectrumlocalnews.com/nys/capital-region/public-safety/2026/03/27/albany-diocese-clergy-abuse-settlement" },
    { d: "2026-03-23", cat: "faith", r: ["buf"], h: "Buffalo's Burmese community counts about 10,000", s: "Burmese Community Services founder Steven Sanyu says at least eight ethnic groups, including Karen, Karenni, Chin, Mon and Shan, are now well established in the city.", src: "https://www.btpm.org/2026-03-23/diversity-a-strength-among-buffalos-burmese" },
    { d: "2026-02-25", cat: "faith", r: ["cny"], h: "Syracuse diocese closes bankruptcy with a $176M trust", s: "The final decree ended a case begun in June 2020 over 411 claims: $76.1M from insurers, $45M from parishes, $50M from the diocese.", src: "https://catholicreview.org/diocese-of-syracuse-wraps-176-million-bankruptcy-settlement-in-journey-of-reparation/" },
    { d: "2026-01-07", cat: "faith", r: ["roc"], h: "John Bonnici named Bishop of Rochester", s: "Pope Leo XIV accepted the resignation of Bishop Salvatore Matano, 79, and named New York auxiliary bishop John S. Bonnici as his successor.", src: "https://www.usccb.org/news/2026/pope-leo-xiv-accepts-resignation-bishop-salvatore-matano-diocese-rochester-appoints" }
  ],

  // ---------------- MONEY IN MOTION ----------------
  // t: ma = M&A, cap = capital & expansion, phil = philanthropy, cre = real estate. amt in $ millions (null = undisclosed).
  deals: [
    {"d": "2026-10-16", "t": "ma", "r": ["buf"], "amt": 1900, "who": {"l": "Sellers", "t": "ACV's public shareholders, at $10.50 a share, including CEO George Chamoun and the management team staying on. The largest individual holders are not named in deal reports."}, "h": "Copart closes $1.9B purchase of ACV Auctions", "p": "Copart (buyer) · ACV Auctions, Buffalo (target)", "s": "All-cash, $10.50/share. ACV stays an independent subsidiary under current leadership; pay protections run 12 months, with no headquarters or headcount commitment in the filings.", "src": "https://buffalochronicle.com/2026/10/19/copart-acv-acquisition-buffalo-jobs-filings/"},
    {"d": "2026-10-01", "t": "ma", "r": ["buf"], "amt": 2620, "who": {"l": "Seller", "t": "CenterPoint Energy, a public company in Houston. It's a corporate divestiture, with no individual sellers."}, "h": "National Fuel buys CenterPoint's Ohio gas utility", "p": "National Fuel Gas, Williamsville (buyer) · CenterPoint Energy Ohio (seller)", "s": "$2.62B, about 1.6x rate base; set to close Oct 1, 2026 with all approvals received. Roughly doubles National Fuel's utility rate base.", "src": "https://www.sec.gov/Archives/edgar/data/0000070145/000119312526324137/d42172dex99.htm"},
    {"d": "2026-10-12", "t": "ma", "r": ["roc"], "amt": null, "who": {"l": "Sellers", "t": "ApHinity's owners, Christopher Bellizzi, Stephen Mosher and Joshua Curt.", "src": "https://pulse2.com/rochester-midland-corporation-acquires-aphinity-technologies-to-expand-water-and-air-quality-capabilities/"}, "h": "Rochester Midland acquires ApHinity Technologies", "p": "Rochester Midland Corp. (buyer) · ApHinity Technologies, CA (target)", "s": "A Rochester family-owned company buys a water-optimization and air-emissions treatment firm. Terms not disclosed.", "src": "https://www.thedailybuyout.com/deals/rochester-midland-acquires-environmental-firm-aphinity-technologies-20261012-2qy4"},
    {"d": "2026-09-16", "t": "ma", "r": ["cny"], "amt": null, "who": {"l": "Sellers", "t": "Syracuse Thermal's owners are not named. Jack Koenig is president, and staff join the buyer's employee stock ownership plan (ESOP)."}, "h": "Cummins-Wagner acquires Syracuse Thermal Products", "p": "Cummins-Wagner, MD (buyer) · Syracuse Thermal Products (target)", "s": "An out-of-state distributor buys a CNY hydronic heating and plumbing rep firm to enter the market.", "src": "https://www.cummins-wagner.com/cummins-wagner-acquires-syracuse-thermal-products/"},
    {"d": "2026-09-04", "t": "ma", "r": ["roc"], "amt": null, "who": {"l": "Sellers", "t": "Kenneth Burke and Jennifer Vogler, who bought the firm from its founders in 2020.", "src": "https://www.wealthmanagement.com/ria-news/allworth-acquires-in-rochester-and-indianapolis-pushing-to-over-40b-in-aum"}, "h": "Allworth Financial acquires High Falls Advisors", "p": "Allworth Financial (buyer) · High Falls Advisors, Rochester (target)", "s": "A national wealth consolidator adds a Rochester wealth and tax advisory firm with about $665M in assets under management.", "src": "https://rbj.net/2026/09/04/allworth-financial-acquires-rochester-wealth-management-firm/"},
    {"d": "2026-06-04", "t": "ma", "r": ["buf", "cny"], "amt": null, "who": {"l": "Sellers", "t": "John Wilde, part-owner. His father Richard Wilde founded the company in 1969 with Wyman Caruthers.", "src": "https://www.thepackagingportal.com/industry-news/jamestown-container-companies-acquires-syracuse-corrugated-box-corp/"}, "h": "Jamestown Container buys Syracuse Corrugated Box", "p": "Jamestown Container Cos., Falconer (buyer) · Syracuse Corrugated Box Corp. (target)", "s": "A family-owned WNY packaging maker with 500+ employees and seven plants adds a CNY competitor.", "src": "https://www.post-journal.com/news/top-stories/2026/06/jamestown-container-acquires-syracuse-company/"},
    {"d": "2026-05-01", "t": "ma", "r": ["roc", "buf"], "amt": null, "who": {"l": "Sellers", "t": "Transwave's owners are not named in reports. Rich Schickler is president of Patriot Towers, the buyer."}, "h": "Patriot Towers acquires Transwave Communications", "p": "Patriot Towers, Scottsville (buyer) · Transwave Communications, Buffalo (target)", "s": "A Rochester-area cell-tower services firm buys a Buffalo telecom company. Terms not disclosed.", "src": "https://rbj.net/2026/06/02/patriot-towers-acquires-buffalo-firm-transwave/"},
    {"d": "2026-03-19", "t": "ma", "r": ["roc"], "amt": null, "who": {"l": "Seller", "t": "Tim Confer, founder (1998) and president, who moves to an advisory role."}, "h": "Gryphon-backed AirX buys Northern Air Systems", "p": "AirX Climate Solutions / Gryphon Investors (buyer) · Northern Air Systems, Rochester (target)", "s": "Private equity add-on: a founder-owned HVAC maker (founded 1998 by Tim Confer) becomes AirX's fifth acquisition. The founder moves to an advisory role.", "src": "https://rbj.net/2026/03/20/airx-expands-acquires-northern-air-systems-rochester/"},
    {"d": "2026-03-26", "t": "ma", "r": ["buf"], "amt": 132.5, "who": {"l": "Seller", "t": "Plug Power, a public company. Proceeds go to its liquidity plan; there are no individual sellers."}, "h": "Plug Power sells STAMP \"Project Gateway\" stake to Stream Data Centers", "p": "Plug Power (seller) · Stream Data Centers (buyer)", "s": "At least $132.5M (up to $142M) for land, infrastructure and substation assets at the STAMP park, turning a hydrogen site toward data centers.", "src": "https://www.h2-tech.com/news/2026/03-26/plug-power-executes-132-5-mm-definitive-agreement-with-stream-data-centers/"},
    {"d": "2026-01-20", "t": "ma", "r": ["roc"], "amt": null, "who": {"l": "Sellers", "t": "1RDG founders John Rizzo and Brian DiGiacco, plus the partners of Bailey Carr CPAs and Bahgat & Laurito-Bahgat CPAs."}, "h": "Doeren Mayhew enters NY by acquiring 1RDG", "p": "Doeren Mayhew, MI (buyer) · 1RDG, Rochester, plus Bailey Carr and Bahgat & Laurito-Bahgat CPAs", "s": "Accounting roll-up: the deal brings 100+ employees and seven partners. 1RDG was founded in 2005 by John Rizzo and Brian DiGiacco.", "src": "https://rbj.net/2026/02/03/doeren-mayhew-enters-new-york-market-with-1rdg-acquisition/"},
    {"d": "2026-10-14", "t": "cap", "r": ["alb"], "amt": 21000, "who": {"l": "Funding", "t": "Japan, under the U.S.–Japan investment deal. GlobalFoundries receives it; there is no seller."}, "h": "GlobalFoundries: two new Malta fabs, $21B from Japan", "p": "GlobalFoundries · U.S.–Japan investment deal", "s": "1,000+ manufacturing jobs and 27,000 construction and planning jobs; first fab opens 2029.", "src": "https://spectrumlocalnews.com/nys/central-ny/news/2026/10/14/japan-taps-globalfoundries-to-build-2-chip-fabs-in-malta-in--21-billion-project-"},
    {"d": "2026-10-25", "t": "cap", "r": ["buf"], "amt": 71, "who": {"l": "Funding", "t": "A company-funded expansion; the owners are not named in the report."}, "h": "Niagara Power Transformer expands in Buffalo", "p": "Niagara Power Transformer", "s": "A 96,000 sq ft addition, 50% more capacity and about 73 jobs.", "src": "https://www.areadevelopment.com/newsItems/10-25-2026/niagara-power-transformer-buffalo-new-york.shtml"},
    {"d": "2026-10-20", "t": "cap", "r": ["roc"], "amt": 375, "who": {"l": "Funding", "t": "DOE (a $66M grant and a conditional $500M loan) and ESD (up to $3M in Excelsior credits)."}, "h": "Phoenix Tailings rare-earth plant at Eastman Business Park", "p": "Phoenix Tailings · ESD, DOE", "s": "500,000 sq ft; 90 to 200+ jobs; conditional $500M federal loan and $66M DOE grant; operations start 2027.", "src": "https://www.governor.ny.gov/news/governor-hochul-announces-phoenix-tailings-establish-375-million-commercial-scale-rare-earth"},
    {"d": "2026-08-03", "t": "cap", "r": ["roc"], "amt": 47, "who": {"l": "Sellers", "t": "The winery's owners, the Doyle family; individual family members are not named. Paul Hillen is CEO of Vine Enterprises, the buyer, and ESD adds up to $12M.", "src": "https://secretnyc.co/pleasant-valley-winery-finger-lakes-restoration-2026/"}, "h": "Vine Enterprises buys and revives Pleasant Valley Winery", "p": "Vine Enterprises (buyer) · Pleasant Valley Winery, Hammondsport", "s": "At least $47M to acquire and redevelop the historic winery; 69 jobs; up to $12M in ESD grants.", "src": "https://www.areadevelopment.com/newsItems/8-3-2026/vine-enterprises-hammondsport-new-york.shtml"},
    {"d": "2026-07-09", "t": "cap", "r": ["cny"], "amt": 100000, "who": {"l": "Funding", "t": "Micron's own capital plus federal CHIPS and state incentives; there is no seller."}, "h": "Micron starts foundations in Clay", "p": "Micron · Bechtel (EPC)", "s": "Up to $100B over four fabs; groundbreaking January 2026; 4,500+ peak construction jobs.", "src": "https://www.enr.com/articles/63307-foundation-work-begins-on-microns-100b-new-york-semiconductor-megafab"},
    {"d": "2026-01-22", "t": "phil", "r": ["roc"], "amt": 371.5, "who": {"l": "Donor", "t": "David A. Duffield '62, MBA '64, co-founder of PeopleSoft and Workday."}, "h": "Duffield pledge names Cornell's engineering college", "p": "David A. Duffield '62 · Cornell University", "s": "A new $371.5M pledge, part of more than $520M in gifts, the largest in Cornell history. It includes a $250M Duffield Legacy Fund; his lifetime giving is $550M.", "src": "https://www.news.cornell.edu/stories/2026/01/largest-gift-university-history-names-cornell-david-duffield-college-engineering"},
    {"d": "2026-06-18", "t": "phil", "r": ["roc"], "amt": 24, "who": {"l": "Donors", "t": "Jeff Harris and Joyce Pratt."}, "h": "Harris and Pratt commit $24M to RIT's AI Institute", "p": "Jeff Harris & Joyce Pratt · RIT", "s": "$5M endowed directorship, three $6M professorships and $1M for City Scholars; the institute launches in early 2027.", "src": "https://rochesterbeacon.com/2026/06/18/harris-pratt-commit-24-million-to-rit/"},
    {"d": "2026-10-13", "t": "phil", "r": ["roc"], "amt": 10, "who": {"l": "Donors", "t": "Mark Davitt (founder of ConServe in Fairport, now president of Davitt Holdings) and Maureen Davitt (retired RN).", "src": "https://www.rochester.edu/newscenter/mark-maureen-davitt-gift-urochester-medicine-722032/"}, "h": "Davitt family gives $10M to UR Medicine", "p": "Davitt family · University of Rochester Medicine", "s": "$9M creates the Davitt Family Pediatric Emergency Department at Strong (Strong Expansion Project); $1M goes to Golisano Children's Davitt Family Integrated Care Center.", "src": "https://www.rochester.edu/newscenter/mark-maureen-davitt-gift-urochester-medicine-722032/"},
    {"d": "2026-01-14", "t": "phil", "r": ["roc"], "amt": 10, "who": {"l": "Donors", "t": "John Bruning (UR trustee emeritus) and Barbara Bruning."}, "h": "Brunings endow the Hajim School deanship", "p": "John & Barbara Bruning · University of Rochester", "s": "Permanent funding for the engineering dean; Wendi Heinzelman named the inaugural Bruning Dean.", "src": "https://www.rochester.edu/newscenter/john-and-barbara-bruning-establish-hajim-school-deanship-691532/"},
    {"d": "2026-03-12", "t": "phil", "r": ["roc"], "amt": 2, "who": {"l": "Donor", "t": "Mary Ellen Burris."}, "h": "$2M to keep the Memorial Art Gallery free", "p": "Mary Ellen Burris · Memorial Art Gallery", "s": "For the Free for All Endowment, which aims to end general admission fees.", "src": "https://rbj.net/2026/03/12/memorial-art-gallery-2m-free-admission-gift/"},
    {"d": "2026-06-22", "t": "phil", "r": ["roc"], "amt": 2, "who": {"l": "Donor", "t": "Not named in available reporting."}, "h": "$2M endowment for UR Medicine physician recruitment", "p": "UR Medicine", "s": "Supports physician recruitment and research.", "src": "https://rbj.net/2026/06/22/2-million-endowment-physician-recruitment-urochester-medicine/"},
    {"d": "2026-10-28", "t": "phil", "r": ["buf"], "amt": 166, "who": {"l": "Donors (largest)", "t": "William R. Kenan Jr. Charitable Trust ($2M), Bedford Falls Foundation DAF for the Joanne and William Conway Nursing Scholarships ($1.35M), and Scott and Coleen Stevens ($1M)."}, "h": "UB posts a record $166M fundraising year", "p": "University at Buffalo donors", "s": "Best year on record for fiscal 2026. The largest gifts were $2M from the Kenan Charitable Trust for nursing scholars, $1.35M for Conway nursing scholarships and $1M from Scott and Coleen Stevens for engineering.", "src": "https://pulse2.com/university-at-buffalo-raises-record-166-million-in-fiscal-2026/"},
    {"d": "2026-06", "t": "phil", "r": ["buf"], "amt": 6.3, "who": {"l": "Donors", "t": "Thousands of riders, sponsors and individual donors; no single lead donor."}, "h": "Ride for Roswell sets a $6.3M record", "p": "Roswell Park Comprehensive Cancer Center", "s": "The largest total in the event's history.", "src": "https://www.roswellpark.org/newsroom/202606-ride-roswell-breaks-new-fundraising-record-63-million"},
    {"d": "2026-05-11", "t": "phil", "r": ["buf"], "amt": 1.26, "who": {"l": "Donor", "t": "The Ralph C. Wilson Jr. Legacy Funds, built from the Bills founder's estate."}, "h": "Wilson Legacy Funds grant $1.26M to 77 WNY groups", "p": "Community Foundation for Greater Buffalo · Ralph C. Wilson Jr. Legacy Funds", "s": "Grants for design and access, youth sports, caregivers and community assets; the largest were $50K each.", "src": "https://www.cfgb.org/press-release/community-foundation-for-greater-buffalo-announces-2026-grant-awards-to-78-organizations-from-ralph-c-wilson-jr-legacy-funds/"},
    {"d": "2026-09-16", "t": "phil", "r": ["buf"], "amt": 1, "who": {"l": "Donors", "t": "James E. Miller (ILR '88) and James C. Shah of Miller Shah LLP.", "src": "https://www.fingerlakes1.com/2026/09/16/1-million-gift-will-fund-cornells-high-road-buffalo-fellowship-for-five-years/"}, "h": "$1M funds Cornell's High Road Buffalo fellowship", "p": "Cornell ILR · Buffalo", "s": "Five years of funding for the Buffalo fellowship program.", "src": "https://www.fingerlakes1.com/2026/09/16/1-million-gift-will-fund-cornells-high-road-buffalo-fellowship-for-five-years/"},
    {"d": "2026-01-08", "t": "phil", "r": ["cny"], "amt": 1.8, "who": {"l": "Donors", "t": "Anonymous, per Syracuse University."}, "h": "Historic $1.8M gift to SU's Genovese Scholars", "p": "Syracuse University School of Social Work", "s": "The largest gift in the program's history.", "src": "https://news.syr.edu/2026/01/08/school-of-social-works-genovese-scholars-program-receives-historic-1-8m-gift/"},
    {"d": "2026-01-01", "t": "phil", "r": ["cny"], "amt": 5, "who": {"l": "Funder", "t": "NYS Department of Health (public grant)."}, "h": "$5M state grant to Le Moyne's Purcell School", "p": "NYS Department of Health (HELP) · Le Moyne College", "s": "Five years of support for nursing, PA, counseling and OT graduate students.", "src": "https://www.cnybj.com/le-moyne-to-use-5m-grant-for-grad-students-seeking-health-degrees/"},
    {"d": "2026-11-04", "t": "cre", "r": ["buf"], "amt": 6.05, "who": {"l": "Seller", "t": "Not named in the report."}, "h": "Downing Apartments trades above asking", "p": "70 units, 30 Latona Ct., Buffalo · private investor", "s": "About $86K per unit for a 1951 garden-style complex on 3.8 acres.", "src": "https://www.costar.com/article/19985347/buffalo-apartment-complex-trades-to-private-investor"},
    {"d": "2026-10-21", "t": "cre", "r": ["buf"], "amt": 20.25, "who": {"l": "Seller", "t": "Colonie Funding Co. LLC of Miami; its principals are not named."}, "h": "Colonie Apartments in Amherst sell to Dallas buyer", "p": "184 units, 2051 Sweet Home Rd. · Colonie YP Holdings (buyer) · Colonie Funding Co., Miami (seller)", "s": "Same day: a Springville dealership property sold for $4.65M and an Orchard Park bank building for $1.8M.", "src": "https://www.audacy.com/wben/news/local/colonie-apartments-sold-in-a-busy-cre-day"},
    {"d": "2026-06-29", "t": "cre", "r": ["buf"], "amt": 19.4, "who": {"l": "Seller", "t": "Buffalo Bailey LLC; its principals are not named."}, "h": "Uniland buys the 500 Bailey Ave. warehouse complex", "p": "205,000 sq ft on 7 acres · Uniland Development (buyer)", "s": "An East Side industrial and distribution site goes to one of Buffalo's largest developers.", "src": "https://www.audacy.com/wben/news/local/buffalo-warehouse-complex-sold-for-19-4-million"},
    {"d": "2026-11-06", "t": "cre", "r": ["buf"], "amt": 50, "who": {"l": "Seller", "t": "Douglas Jemal (Douglas Development), the owner since 2022."}, "h": "HSBC Atrium listed; owner seeks about $50M", "p": "95 Washington St., 270,000 sq ft · Douglas Jemal (owner)", "s": "Listed with CBRE for sale or lease after a 2022 purchase at $9M; the owner is also fighting the tax assessment.", "src": "https://www.yahoo.com/news/articles/future-ideas-interest-hsbc-atrium-002303123.html", "listing": true},
    {"d": "2026-08-06", "t": "cre", "r": ["roc"], "amt": 16.25, "who": {"l": "Seller", "t": "Home Leasing LLC, through its Charlotte Square affiliate; individuals are not named."}, "h": "Charlotte Square apartments sell to Florida investor", "p": "72 units, East End · Brent Zartler (buyer) · Home Leasing affiliate (seller)", "s": "One of the larger downtown multifamily trades of the year.", "src": "https://rbj.net/2026/08/06/florida-investor-buys-downtown-rochester-apartments/"},
    {"d": "2026-07-07", "t": "cre", "r": ["roc"], "amt": 8, "who": {"l": "Seller", "t": "Flaum Management Co. (1180 Jeff Road LLC); individuals are not named in the report."}, "h": "Flaum sells most of the 1180 Jefferson Rd. plaza", "p": "105,000 sq ft, Henrietta · David Pelusio entity (buyer) · Flaum Management (seller)", "s": "Local investor takes over a large suburban retail plaza.", "src": "https://nydailyrecord.com/2026/07/07/bulk-of-henrietta-commercial-plaza-sells-for-8m/"}
  ],

  // ---------------- OFFICIALS ----------------
  // level: Federal | Statewide | State Senate | Assembly | County | City | Town | Judiciary
  // res = 2026 result line (blank if not up in 2026)
  officials: [
    { n: "Chuck Schumer", o: "U.S. Senator", lv: "Federal", p: "D", r: ["buf","roc","cny","alb"], since: "1999", note: "Senate Democratic leader; Democrats won the Senate in 2026.", src: "https://www.thepartnership.org/2026/11/04/advocacy-alert-2026-election-analysis/" },
    { n: "Kirsten Gillibrand", o: "U.S. Senator", lv: "Federal", p: "D", r: ["buf","roc","cny","alb"], since: "2009" },
    { n: "Josh Riley", o: "U.S. House, NY-19", lv: "Federal", p: "D", r: ["roc","cny"], since: "2025", res: "Won 2026 over Peter Oberacker (R), about +15", note: "Ithaca, Binghamton and the Southern Tier/Catskills.", src: "https://news.ballotpedia.org/2026/11/06/incumbent-josh-riley-d-working-families-party-defeated-peter-oberacker-r-conservative-party-in-the-general-election-for-new-yorks-19th-congressional-district/" },
    { n: "Paul Tonko", o: "U.S. House, NY-20", lv: "Federal", p: "D", r: ["alb"], since: "2009", res: "Won 2026, about +27", src: "https://www.wamc.org/news/2026-11-04/election-2026-new-york-paul-tonko-wins-reelection-20th-congressional-district" },
    { n: "Anthony Constantino", o: "U.S. House, NY-21 (elect)", lv: "Federal", p: "R", r: ["alb","cny"], since: "Jan 2027", res: "Won 2026 open seat over Blake Gendebien (D), about +2", note: "CEO of Sticker Mule (Amsterdam). Trump-endorsed. Succeeds Elise Stefanik (R), who held the seat from 2015.", src: "https://www.wamc.org/news/2026-11-06/gendebien-concedes-in-ny-21" },
    { n: "John Mannion", o: "U.S. House, NY-22", lv: "Federal", p: "D", r: ["cny"], since: "2025", res: "Won 2026 over Kailee Buller (R), about +17", note: "Former state senator; flipped the seat in 2024.", src: "https://cnycentral.com/news/2026-election/ap-projects-john-mannion-to-win-second-term-in-ny-22-congressional-district" },
    { n: "Nick Langworthy", o: "U.S. House, NY-23", lv: "Federal", p: "R", r: ["buf","roc"], since: "2023", res: "Won 2026 over Aaron Gies (D), about +20", note: "Former NY GOP chair.", src: "https://www.thepartnership.org/2026/11/04/advocacy-alert-2026-election-analysis/" },
    { n: "Claudia Tenney", o: "U.S. House, NY-24", lv: "Federal", p: "R", r: ["buf","roc","cny"], since: "2023 (this seat)", res: "Won 2026 over Alissa Ellman (D), about +21", src: "https://www.thepartnership.org/2026/11/04/advocacy-alert-2026-election-analysis/" },
    { n: "Joe Morelle", o: "U.S. House, NY-25", lv: "Federal", p: "D", r: ["roc"], since: "2018", res: "Won 2026, about +26", src: "https://votes.decisiondeskhq.com/elections/2026-11-03/new-york" },
    { n: "Tim Kennedy", o: "U.S. House, NY-26", lv: "Federal", p: "D", r: ["buf"], since: "2024", res: "Won 2026 over Dennis Hannon (R), about +32", src: "https://www.thepartnership.org/2026/11/04/advocacy-alert-2026-election-analysis/" },

    { n: "Kathy Hochul", o: "Governor", lv: "Statewide", p: "D", r: ["buf","roc","cny","alb"], since: "2021", res: "Won 2026 over Bruce Blakeman (R), about +20", note: "From the Buffalo area (Hamburg).", src: "https://www.gtlaw.com/-/media/files/insights/alerts/2026/11/gt-alert_new-york-state-2026-election-update.pdf" },
    { n: "Letitia James", o: "Attorney General", lv: "Statewide", p: "D", r: ["buf","roc","cny","alb"], since: "2019", res: "Won 2026 over Saritha Komatireddy (R)", src: "https://www.fox5ny.com/news/ny-election-results-2026-new-york" },
    { n: "Thomas DiNapoli", o: "Comptroller", lv: "Statewide", p: "D", r: ["buf","roc","cny","alb"], since: "2007", res: "Won 2026", src: "https://www.fox5ny.com/news/ny-election-results-2026-new-york" },

    { n: "George Borrello", o: "State Senate, SD-57", lv: "State Senate", p: "R", r: ["buf"], res: "Won 2026, about +39", src: "https://www.thepartnership.org/2026/11/04/advocacy-alert-2026-election-analysis/" },
    { n: "Patrick Gallivan", o: "State Senate, SD-60", lv: "State Senate", p: "R", r: ["buf"], res: "Unopposed 2026", src: "https://www.thepartnership.org/2026/11/04/advocacy-alert-2026-election-analysis/" },
    { n: "Jonathan Rivera", o: "State Senate, SD-61", lv: "State Senate", p: "D", r: ["buf"], res: "Unopposed in November after beating Sen. Jeremy Zellner in the June primary", note: "Seat formerly held by Sean Ryan.", src: "https://www.thepartnership.org/2026/11/04/advocacy-alert-2026-election-analysis/" },
    { n: "Rob Ortt", o: "State Senate, SD-62", lv: "State Senate", p: "R", r: ["buf"], res: "Won 2026, about +24", note: "Senate Minority Leader.", src: "https://www.thepartnership.org/2026/11/04/advocacy-alert-2026-election-analysis/" },
    { n: "April Baskin", o: "State Senate, SD-63", lv: "State Senate", p: "D", r: ["buf"], res: "Won 2026, about +41", src: "https://www.thepartnership.org/2026/11/04/advocacy-alert-2026-election-analysis/" },
    { n: "Pam Helming", o: "State Senate, SD-54", lv: "State Senate", p: "R", r: ["roc"], res: "Won 2026, about +17", src: "https://votes.decisiondeskhq.com/elections/2026-11-03/new-york" },
    { n: "Samra Brouk", o: "State Senate, SD-55", lv: "State Senate", p: "D", r: ["roc"], res: "Won 2026, about +33", src: "https://votes.decisiondeskhq.com/elections/2026-11-03/new-york" },
    { n: "Jeremy Cooney", o: "State Senate, SD-56", lv: "State Senate", p: "D", r: ["roc"], res: "Won a fourth term in 2026", src: "https://www.fingerlakes1.com/2026/11/04/cooney-claims-fourth-senate-term-outlines-rochester-priorities/" },
    { n: "Tom O'Mara", o: "State Senate, SD-58", lv: "State Senate", p: "R", r: ["roc"], res: "Won 2026, about +30", src: "https://votes.decisiondeskhq.com/elections/2026-11-03/new-york" },
    { n: "Lea Webb", o: "State Senate, SD-52", lv: "State Senate", p: "D", r: ["roc","cny"], res: "Won 2026, about +21", note: "Ithaca and Binghamton.", src: "https://votes.decisiondeskhq.com/elections/2026-11-03/new-york" },
    { n: "Rachel May", o: "State Senate, SD-48", lv: "State Senate", p: "D", r: ["cny"], res: "Won 2026 over Julie Abbott (R), about +16", src: "https://centralcurrent.org/48th-state-senate-democrat-rachel-may-fends-off-challenge-by-republican-julie-abbott/" },
    { n: "Mark Walczyk", o: "State Senate, SD-49", lv: "State Senate", p: "R", r: ["cny","alb"], res: "Won 2026, about +39", src: "https://votes.decisiondeskhq.com/elections/2026-11-03/new-york" },
    { n: "Christopher Ryan", o: "State Senate, SD-50", lv: "State Senate", p: "D", r: ["cny"], res: "Won 2026, about +14", src: "https://votes.decisiondeskhq.com/elections/2026-11-03/new-york" },
    { n: "Chris Tague", o: "State Senate, SD-51", lv: "State Senate", p: "R", r: ["cny","alb"], res: "Won 2026, about +8", note: "Seat vacated by Peter Oberacker, who ran for Congress.", src: "https://votes.decisiondeskhq.com/elections/2026-11-03/new-york" },
    { n: "Joseph Griffo", o: "State Senate, SD-53", lv: "State Senate", p: "R", r: ["cny"], res: "Won 2026, about +34", src: "https://votes.decisiondeskhq.com/elections/2026-11-03/new-york" },
    { n: "Jake Ashby / Devin Lander", o: "State Senate, SD-43", lv: "State Senate", p: "?", r: ["alb"], res: "Too close to call: Lander (D) narrowly leads Sen. Ashby (R) in unofficial results", src: "https://www.cityandstateny.com/politics/2026/11/where-do-all-key-new-york-state-legislative-races-stand/417054/" },
    { n: "Sarah Rogerson", o: "State Senate, SD-44 (elect)", lv: "State Senate", p: "D", r: ["alb"], res: "Flipped the seat; Sen. Jim Tedisco (R) conceded", note: "Law school professor.", src: "https://www.cityandstateny.com/politics/2026/11/where-do-all-key-new-york-state-legislative-races-stand/417054/" },
    { n: "Dan Stec", o: "State Senate, SD-45", lv: "State Senate", p: "R", r: ["alb"], res: "Won 2026, about +11", src: "https://votes.decisiondeskhq.com/elections/2026-11-03/new-york" },
    { n: "Pat Fahy", o: "State Senate, SD-46", lv: "State Senate", p: "D", r: ["alb"], res: "Won 2026, about +26", src: "https://votes.decisiondeskhq.com/elections/2026-11-03/new-york" },

    { n: "Stephen Hawley", o: "Assembly, AD-139", lv: "Assembly", p: "R", r: ["buf"], res: "Won 2026, 69.7–30.3", src: "https://www.thepartnership.org/2026/11/04/advocacy-alert-2026-election-analysis/" },
    { n: "William Conrad", o: "Assembly, AD-140", lv: "Assembly", p: "D", r: ["buf"], res: "Won 2026, 76–24", src: "https://www.thepartnership.org/2026/11/04/advocacy-alert-2026-election-analysis/" },
    { n: "Leah Halton-Pope", o: "Assembly, AD-141 (elect)", lv: "Assembly", p: "D", r: ["buf"], res: "Unopposed 2026", note: "Succeeds Majority Leader Crystal Peoples-Stokes, who is retiring.", src: "https://www.thepartnership.org/2026/11/04/advocacy-alert-2026-election-analysis/" },
    { n: "Patrick Burke", o: "Assembly, AD-142", lv: "Assembly", p: "D", r: ["buf"], res: "Won 2026 over Gary Dickson (R)", src: "https://www.thepartnership.org/2026/11/04/advocacy-alert-2026-election-analysis/" },
    { n: "Patrick Chludzinski / Ryan Taughrin", o: "Assembly, AD-143", lv: "Assembly", p: "?", r: ["buf"], res: "Too close to call, about 300 votes apart", src: "https://www.cityandstateny.com/politics/2026/11/where-do-all-key-new-york-state-legislative-races-stand/417054/" },
    { n: "Paul Bologna", o: "Assembly, AD-144", lv: "Assembly", p: "R", r: ["buf"], res: "Won 2026 over Donna Dye Sholk (D)", src: "https://www.thepartnership.org/2026/11/04/advocacy-alert-2026-election-analysis/" },
    { n: "Becky Wydysh", o: "Assembly, AD-145 (elect)", lv: "Assembly", p: "R", r: ["buf"], res: "Won open seat over Nate McMurray (D)", src: "https://www.thepartnership.org/2026/11/04/advocacy-alert-2026-election-analysis/" },
    { n: "Karen McMahon", o: "Assembly, AD-146", lv: "Assembly", p: "D", r: ["buf"], res: "Won 2026, 61.6–38.3", src: "https://www.thepartnership.org/2026/11/04/advocacy-alert-2026-election-analysis/" },
    { n: "David DiPietro", o: "Assembly, AD-147", lv: "Assembly", p: "R", r: ["buf"], res: "Unopposed 2026", src: "https://www.thepartnership.org/2026/11/04/advocacy-alert-2026-election-analysis/" },
    { n: "Joseph Sempolinski", o: "Assembly, AD-148", lv: "Assembly", p: "R", r: ["buf"], res: "Unopposed 2026", src: "https://www.thepartnership.org/2026/11/04/advocacy-alert-2026-election-analysis/" },
    { n: "Adam Bojak", o: "Assembly, AD-149 (elect)", lv: "Assembly", p: "D", r: ["buf"], res: "Won 2026", note: "Ran on the Democratic and socialist lines.", src: "https://www.gtlaw.com/-/media/files/insights/alerts/2026/11/gt-alert_new-york-state-2026-election-update.pdf" },
    { n: "Andrew Molitor", o: "Assembly, AD-150", lv: "Assembly", p: "R", r: ["buf"], res: "Won 2026, 62.9–37.1", src: "https://www.thepartnership.org/2026/11/04/advocacy-alert-2026-election-analysis/" },
    { n: "Chloe Pierce", o: "Assembly, AD-107 (elect)", lv: "Assembly", p: "D", r: ["alb"], res: "Flipped the seat from Scott Bendett (R), 52–48", src: "https://www.cityandstateny.com/politics/2026/11/where-do-all-key-new-york-state-legislative-races-stand/417054/" },
    { n: "Carrie Woerner", o: "Assembly, AD-113", lv: "Assembly", p: "D", r: ["alb"], res: "Held seat over Allen Caruso (R)", note: "Saratoga Springs.", src: "https://www.cityandstateny.com/politics/2026/11/where-do-all-key-new-york-state-legislative-races-stand/417054/" },
    { n: "Michael Gentile", o: "Assembly, AD-119 (elect)", lv: "Assembly", p: "R", r: ["cny"], res: "Flipped open seat, about 53% over Jon Lipe (D)", note: "Utica and Rome.", src: "https://www.cityandstateny.com/politics/2026/11/where-do-all-key-new-york-state-legislative-races-stand/417054/" },
    { n: "Will Barclay", o: "Assembly, AD-120", lv: "Assembly", p: "R", r: ["cny"], res: "Retiring", note: "Former Assembly Minority Leader.", src: "https://www.gtlaw.com/-/media/files/insights/alerts/2026/11/gt-alert_new-york-state-2026-election-update.pdf" },
    { n: "Dan Norton", o: "Assembly, AD-123 (elect)", lv: "Assembly", p: "D", r: ["cny"], res: "New member, 2026", src: "https://www.gtlaw.com/-/media/files/insights/alerts/2026/11/gt-alert_new-york-state-2026-election-update.pdf" },
    { n: "Ian Phillips / John Lemondes", o: "Assembly, AD-126", lv: "Assembly", p: "?", r: ["cny"], res: "Phillips (D) leads Assemblyman Lemondes (R) by 223 with absentees outstanding", src: "https://www.cityandstateny.com/politics/2026/11/where-do-all-key-new-york-state-legislative-races-stand/417054/" },
    { n: "Albert Stirpe", o: "Assembly, AD-127", lv: "Assembly", p: "D", r: ["cny"], src: "https://my.lwv.org/sites/default/files/leagues/wysiwyg/%5Bcurrent-user%3Aog-user-node%3A1%3Atitle%5D/2026_who_who_lwv_0.pdf" },
    { n: "Pamela Hunter", o: "Assembly, AD-128", lv: "Assembly", p: "D", r: ["cny"], src: "https://my.lwv.org/sites/default/files/leagues/wysiwyg/%5Bcurrent-user%3Aog-user-node%3A1%3Atitle%5D/2026_who_who_lwv_0.pdf" },
    { n: "Maurice \"Mo\" Brown", o: "Assembly, AD-129 (elect)", lv: "Assembly", p: "D", r: ["cny"], res: "Won 2026; succeeds Bill Magnarelli", note: "Also an Onondaga County legislator.", src: "https://www.wrvo.org/2026-06-30/mo-brown-wins-assembly-primary-after-absentee-ballots-stretch-lead" },

    { n: "Sean Ryan", o: "Mayor of Buffalo", lv: "City", p: "D", r: ["buf"], since: "Jan 2026", note: "Former state senator; first new mayor in 20 years.", src: "https://spectrumlocalnews.com/nys/central-ny/news/2025/12/31/new-year-brings-new-leadership-across-major-upstate-n-y--cities-" },
    { n: "Malik Evans", o: "Mayor of Rochester", lv: "City", p: "D", r: ["roc"], since: "2022", note: "Second term began Jan 2026.", src: "https://spectrumlocalnews.com/nys/central-ny/news/2025/12/31/new-year-brings-new-leadership-across-major-upstate-n-y--cities-" },
    { n: "Robert Cantelmo", o: "Mayor of Ithaca", lv: "City", p: "D", r: ["roc"], note: "2026 priorities: housing, zoning reform, completing city audits.", src: "https://1037qcountry.com/news/258852-ithaca-mayor-outlines-plans-to-restore-public-trust" },
    { n: "Sharon Owens", o: "Mayor of Syracuse", lv: "City", p: "D", r: ["cny"], since: "Jan 2026", note: "Deputy mayor for all of Ben Walsh's tenure; first Black mayor.", src: "https://spectrumlocalnews.com/nys/central-ny/news/2025/12/31/new-year-brings-new-leadership-across-major-upstate-n-y--cities-" },
    { n: "Dorcey Applyrs", o: "Mayor of Albany", lv: "City", p: "D", r: ["alb"], since: "Jan 2026", note: "Former city chief auditor; first Black mayor. Succeeded Kathy Sheehan.", src: "https://spectrumlocalnews.com/nys/central-ny/news/2025/12/31/new-year-brings-new-leadership-across-major-upstate-n-y--cities-" },

    { n: "Mark Poloncarz", o: "Erie County Executive", lv: "County", p: "D", r: ["buf"], since: "2012", src: "https://ballotpedia.org/Mark_Poloncarz" },
    { n: "Kevin Hardwick", o: "Erie County Comptroller", lv: "County", p: "D", r: ["buf"], res: "Elected 2025", src: "https://www.thepartnership.org/2025/11/05/election-night-wrap-up-who-won-and-what-it-means-for-buffalo-niagara/page/19/" },
    { n: "Steven Meyer / Michael Kearns", o: "Erie County Clerk", lv: "County", p: "?", r: ["buf"], res: "Meyer (D) led incumbent Kearns (R) 51.6–48.4", src: "https://www.thepartnership.org/2026/11/04/advocacy-alert-2026-election-analysis/" },
    { n: "John Garcia", o: "Erie County Sheriff", lv: "County", p: "R", r: ["buf"], res: "Re-elected unopposed 2025", src: "https://www.thepartnership.org/2025/11/05/election-night-wrap-up-who-won-and-what-it-means-for-buffalo-niagara/page/19/" },
    { n: "Adam Bello", o: "Monroe County Executive", lv: "County", p: "D", r: ["roc"], since: "2020", note: "Not re-verified this pass." },
    { n: "Ryan McMahon", o: "Onondaga County Executive", lv: "County", p: "R", r: ["cny"], since: "2018", note: "Legislature now has a Democratic supermajority.", src: "https://my.lwv.org/sites/default/files/leagues/wysiwyg/%5Bcurrent-user%3Aog-user-node%3A1%3Atitle%5D/2026_who_who_lwv_0.pdf" },
    { n: "William Fitzpatrick", o: "Onondaga County District Attorney", lv: "County", p: "R", r: ["cny"], src: "https://my.lwv.org/sites/default/files/leagues/wysiwyg/%5Bcurrent-user%3Aog-user-node%3A1%3Atitle%5D/2026_who_who_lwv_0.pdf" },
    { n: "Tobias Shelley", o: "Onondaga County Sheriff", lv: "County", p: "D", r: ["cny"], src: "https://my.lwv.org/sites/default/files/leagues/wysiwyg/%5Bcurrent-user%3Aog-user-node%3A1%3Atitle%5D/2026_who_who_lwv_0.pdf" },
    { n: "Nodesia Hernandez", o: "Onondaga County Legislature Majority Leader", lv: "County", p: "D", r: ["cny"], src: "https://my.lwv.org/sites/default/files/leagues/wysiwyg/%5Bcurrent-user%3Aog-user-node%3A1%3Atitle%5D/2026_who_who_lwv_0.pdf" },
    { n: "Daniel McCoy", o: "Albany County Executive", lv: "County", p: "D", r: ["alb"], since: "2012", note: "Not re-verified this pass." },

    { n: "Shawn Lavin", o: "Supervisor, Amherst", lv: "Town", p: "D", r: ["buf"], res: "Elected 2025", src: "https://www.thepartnership.org/2025/11/05/election-night-wrap-up-who-won-and-what-it-means-for-buffalo-niagara/page/19/" },
    { n: "Beth Farrell Lorentz", o: "Supervisor, Hamburg", lv: "Town", p: "R", r: ["buf"], res: "Elected 2025 by a narrow margin", src: "https://www.thepartnership.org/2025/11/05/election-night-wrap-up-who-won-and-what-it-means-for-buffalo-niagara/page/19/" },
    { n: "Joseph Liberti", o: "Supervisor, Orchard Park", lv: "Town", p: "R", r: ["buf"], res: "Elected 2025", src: "https://www.thepartnership.org/2025/11/05/election-night-wrap-up-who-won-and-what-it-means-for-buffalo-niagara/page/19/" },
    { n: "Steve Broderick", o: "Supervisor, Lewiston", lv: "Town", p: "?", r: ["buf"], res: "Re-elected 2025", src: "https://www.thepartnership.org/2025/11/05/election-night-wrap-up-who-won-and-what-it-means-for-buffalo-niagara/page/19/" },
    { n: "Bill Moehle", o: "Supervisor, Brighton", lv: "Town", p: "D", r: ["roc"], since: "2012", note: "Not seeking re-election; Nate Salzman (D) won the party designation for the 2026 race.", src: "https://rochesterbeacon.com/2026/02/16/moehle-drops-out-of-brighton-supervisor-race/" },
    { n: "Jennifer Townsend", o: "Supervisor, Perinton", lv: "Town", p: "D", r: ["roc"], res: "Flipped seat in 2025 from Ciaran Hanna (R)", note: "First woman elected to the post.", src: "https://www.wxxinews.org/local-news/2025-11-05/democrats-flip-monroe-county-suburbs-as-voters-upend-status-quo" },
    { n: "Jeff McCann", o: "Supervisor, Greece", lv: "Town", p: "D", r: ["roc"], res: "Flipped seat in 2025, about 58%", note: "Former Republican; also on the Conservative line.", src: "https://www.wxxinews.org/local-news/2025-11-05/democrats-flip-monroe-county-suburbs-as-voters-upend-status-quo" },
    { n: "Kevin Berry", o: "Supervisor, Penfield", lv: "Town", p: "D", r: ["roc"], res: "Won 2025", note: "First Democrat to lead the town in four decades.", src: "https://www.wxxinews.org/local-news/2025-11-05/democrats-flip-monroe-county-suburbs-as-voters-upend-status-quo" },
    { n: "John Perticone", o: "Supervisor, Irondequoit", lv: "Town", p: "D", r: ["roc"], res: "Held seat 2025", src: "https://www.wxxinews.org/local-news/2025-11-05/democrats-flip-monroe-county-suburbs-as-voters-upend-status-quo" },
    { n: "Onondaga County town supervisors", o: "19 towns: Camillus (John Fatcheric), Cicero (Rob Santucci), Clay (Damian Ulatowski), DeWitt (Max Ruckdeschel), Manlius (John Deer), Skaneateles (Chris Legg), Salina (Raul Huerta), Lysander (Kevin Rode), Geddes (Susan LaFex), Onondaga (John Mahar) and others", lv: "Town", p: "?", r: ["cny"], note: "Party not listed in source.", src: "https://my.lwv.org/sites/default/files/leagues/wysiwyg/%5Bcurrent-user%3Aog-user-node%3A1%3Atitle%5D/2026_who_who_lwv_0.pdf" },

    { n: "Elizabeth Wolford", o: "Chief Judge, U.S. District Court WDNY", lv: "Judiciary", p: "", r: ["buf","roc"], since: "2013", note: "Rochester. Appointed by Obama.", src: "https://wiki.krisyotam.com/content/wikipedia_en_all_nopic_2026-03/Western_District_of_New_York" },
    { n: "Lawrence Vilardo", o: "U.S. District Judge, WDNY", lv: "Judiciary", p: "", r: ["buf"], since: "2015", note: "Buffalo. Obama appointee.", src: "https://wiki.krisyotam.com/content/wikipedia_en_all_nopic_2026-03/Western_District_of_New_York" },
    { n: "John Sinatra Jr.", o: "U.S. District Judge, WDNY", lv: "Judiciary", p: "", r: ["buf"], since: "2019", note: "Buffalo. Trump appointee.", src: "https://wiki.krisyotam.com/content/wikipedia_en_all_nopic_2026-03/Western_District_of_New_York" },
    { n: "Meredith Vacca", o: "U.S. District Judge, WDNY", lv: "Judiciary", p: "", r: ["roc"], since: "2024", note: "Rochester. Biden appointee.", src: "https://federalbarcouncilquarterly.org/judge-meredith-anne-vacca-doing-it-her-way/" },
    { n: "William Skretny", o: "U.S. District Judge, WDNY (retired)", lv: "Judiciary", p: "", r: ["buf"], note: "Retired in 2026 after 35 years on the bench.", src: "https://federalbarcouncilquarterly.org/judge-william-m-skretny-retires-after-35-years-on-the-western-district-of-new-york-bench/" },
    { n: "Brenda Sannes", o: "Chief Judge, U.S. District Court NDNY", lv: "Judiciary", p: "", r: ["cny","alb"], since: "2014", note: "Syracuse. Obama appointee.", src: "https://ballotpedia.org/Brenda_K._Sannes" },
    { n: "Anthony Brindisi", o: "U.S. District Judge, NDNY", lv: "Judiciary", p: "", r: ["cny"], since: "2024", note: "Utica. Former congressman for NY-22. Biden appointee.", src: "https://wiki.krisyotam.com/content/wikipedia_en_all_nopic_2026-03/N.D.N.Y." },
    { n: "Mae D'Agostino · Anne Nardacci · Elizabeth Coombe", o: "U.S. District Judges, NDNY", lv: "Judiciary", p: "", r: ["cny","alb"], note: "D'Agostino (Albany, 2011), Nardacci (Albany, 2022), Coombe (Syracuse, 2024).", src: "https://wiki.krisyotam.com/content/wikipedia_en_all_nopic_2026-03/N.D.N.Y." },
    { n: "Wendy Kinsella", o: "Chief Judge, U.S. Bankruptcy Court NDNY", lv: "Judiciary", p: "", r: ["cny","alb"], note: "Approved the Syracuse diocese final decree, Feb 2026.", src: "https://catholicreview.org/diocese-of-syracuse-wraps-176-million-bankruptcy-settlement-in-journey-of-reparation/" },
    { n: "Christina Ryba", o: "Associate Justice, Appellate Division, Third Dept.", lv: "Judiciary", p: "", r: ["alb"], since: "Mar 2026", note: "Appointed by Gov. Hochul in January 2026.", src: "https://www.wbasny.org/wp-content/uploads/2026/03/2026-03-17-Ryba_SwearingInAdvisoryThirdDept2.pdf" }
  ],

  // ---------------- POLITICAL MONEY & INFLUENCE ----------------
  donors: [
    { n: "Terry & Kim Pegula", r: ["buf"], lean: "Gave to Democrats in 2026", t: "Owners of the Bills and Sabres. In January 2026 Terry Pegula gave $138,600 to the Democratic State Committee (one of 16 max donors after Blakeman entered) and $18,000 to Hochul; Kim Pegula gave $18,000.", src: "https://www.wamc.org/2026-07-17/buffalo-bills-owners-stuff-hochul-campaign-coffers-after-stadium-support" },
    { n: "Anthony Constantino", r: ["alb"], lean: "Republican", t: "Sticker Mule CEO from Amsterdam; won the 2026 GOP primary and the NY-21 seat with Trump's endorsement.", src: "https://www.wamc.org/news/2026-11-06/gendebien-concedes-in-ny-21" },
    { n: "Tom Golisano", r: ["roc","buf"], lean: "Independent", t: "Paychex founder and former Sabres owner. Ran for governor three times (1994, 1998, 2002) on the Independence Party line. Pledged $360M to upstate nonprofits in 2024.", src: "https://wskg.org/2024-09-17/tom-golisano-gives-360-million-to-nonprofits-across-upstate-ny" },
    { n: "Carl Paladino", r: ["buf"], lean: "Republican", t: "Buffalo developer (Ellicott Development); 2010 Republican nominee for governor and a longtime GOP fundraiser in WNY." }
  ],

  // ---------------- BUSINESS ----------------
  business: {
    buf: {
      summary: "Health systems, banking and insurance anchor the economy, with advanced manufacturing (Moog, GM Tonawanda, Tesla), cross-border logistics and tourism around Niagara Falls. M&T Bank is the region's flagship public company; Delaware North, Rich Products and West Herr are major private ones.",
      industries: ["Health care", "Banking & insurance", "Advanced manufacturing", "Life sciences (Roswell Park, BNMC)", "Tourism & gaming", "Logistics & cross-border trade"],
      employers: [["Kaleida Health",9553,"Health system"],["Catholic Health System",7949,"Health system"],["M&T Bank",7938,"Bank · public"],["Tops Friendly Markets",4497,"Grocery"],["Walmart",4200,"Retail"],["People Inc.",4200,"Human services"],["Roswell Park",3945,"Cancer center"],["Moog Inc.",3500,"Aerospace · public"],["Wegmans",3500,"Grocery · private"],["Seneca Gaming",3100,"Gaming"],["GEICO",3100,"Insurance"],["General Motors",2713,"Auto mfg"],["Citigroup",2400,"Financial services"],["West Herr Automotive",2352,"Auto retail · private"],["Amazon",2200,"Fulfillment"],["Tesla",2064,"Manufacturing"]],
      empNote: "Full-time private employees; excludes government and universities.",
      empSrc: "https://buffaloniagara.org/wp-content/uploads/2026/01/major-employer_one4dko7s.idlk_.pdf"
    },
    roc: {
      summary: "Eds and meds dominate: the University of Rochester is the region's largest employer by far. The old imaging trio (Kodak, Xerox, Bausch + Lomb) spun off an optics-photonics-imaging cluster. Food is a $10B industry led by Wegmans and Constellation Brands. Paychex and L3Harris are major tech and defense anchors; Corning Inc. and Cornell anchor the southern tier of the region.",
      industries: ["Health care & research", "Higher education", "Optics, photonics & imaging", "Food & beverage", "Defense electronics", "HR & business software", "Specialty glass (Corning)"],
      employers: [["University of Rochester",38565,"Education & health"],["Rochester Regional Health",19815,"Health system"],["Wegmans Food Markets",12768,"Grocery · private"],["RIT",4321,"Education"],["Paychex",4321,"HR software · public"],["L3Harris",3800,"Defense · public"],["Amazon (Rochester)",2670,"Fulfillment"],["Heritage Christian Services",2644,"Human services"],["Lifetime Healthcare (Excellus)",2242,"Health insurance"],["Tops Markets",2077,"Grocery"],["YMCA of Greater Rochester",2031,"Nonprofit"],["CooperVision",1686,"Contact lenses"],["Eastman Kodak",1300,"Imaging · public"],["Xerox (Webster)",1227,"Document tech · public"]],
      empNote: "Greater Rochester (GRE), updated Nov 2025. Ithaca/Elmira/Corning employers (Cornell, Corning Inc.) are not in this list.",
      empSrc: "https://rochesterbiz.com/wp-content/uploads/2025/11/Top-Employers-2025.pdf"
    },
    cny: {
      summary: "SUNY Upstate and Syracuse University lead a classic eds-and-meds economy, with defense electronics (Lockheed Martin, RTX) and specialty manufacturing (Tessy Plastics, Stickley). Micron's planned four-fab campus in Clay is the largest private investment in state history and is reshaping housing, workforce and infrastructure plans.",
      industries: ["Health care", "Higher education", "Defense & radar", "Semiconductors (Micron)", "Specialty manufacturing", "Utilities (National Grid)"],
      employers: [["SUNY Upstate Medical University",11725,"Health & education"],["Syracuse University",5999,"Education"],["St. Joseph's Health",3977,"Health system"],["Crouse Health",3500,"Health system"],["Diocese of Syracuse",3493,"Religious"],["Wegmans",3320,"Grocery · private"],["Lockheed Martin",2700,"Defense · public"],["National Grid",2634,"Utility"],["Loretto",2500,"Senior care"],["Tessy Plastics",1900,"Manufacturing · private"],["Syracuse VA",1700,"Federal health"],["RTX (Raytheon)",1300,"Defense · public"]],
      empNote: "Onondaga County only.",
      empSrc: "https://onondaga.gov/about/major-employers/"
    },
    alb: {
      summary: "State government is the largest employer, with health care (Albany Med, St. Peter's) close behind. A tech corridor runs from Albany NanoTech to GlobalFoundries in Malta, now set for two more fabs. GE's Schenectady roots continue in GE Vernova, and Regeneron, Plug Power and Stewart's Shops round out the private side. Region of 1.12M people with 3.3% unemployment (2025).",
      industries: ["State government", "Health care", "Semiconductors", "Life sciences (12,500 jobs)", "Software & gaming (9,000)", "Clean energy (8,300)", "Tourism (Saratoga, Lake George, Adirondacks)"],
      employers: [["New York State government",null,"Public"],["Albany Med Health System",null,"Health system"],["St. Peter's Health Partners",null,"Health system"],["GlobalFoundries",null,"Semiconductors · public"],["GE Vernova / GE Aerospace",null,"Energy & aerospace · public"],["Regeneron",null,"Biotech · public"],["Knolls Atomic Power Lab",null,"Naval reactors"],["CDPHP",null,"Health insurance"],["Hannaford",null,"Grocery"],["Stewart's Shops",null,"Convenience · private"],["Plug Power",null,"Hydrogen · public"]],
      empNote: "CEG lists major employers without headcounts.",
      empSrc: "https://www.ceg.org/wp-content/uploads/2026/04/Capital-Region-Economic-Profile-2026-Albany_NY.pdf"
    }
  },

  // ---------------- FAITH ----------------
  faith: {
    buf: [
      {"g": "asian", "n": "Asian American Buffalo", webNote: "Community profile; no single website", "lead": "Community profile", "t": "23,387 Asian residents in 2020 (8.4% of the city), up 141% since 2010. Indian, Burmese, Bangladeshi and Chinese communities drove the growth.", "src": "https://www.aafederation.org/research/buffalo-city-demographic-brief/"},
      {"g": "asian", "n": "Hindu Cultural Society of Western New York", webNote: "No public website found", "lead": "Getzville (Amherst)", "t": "Hindu religious, cultural and educational programs, including the region's large Diwali celebrations. About $1.07M in assets (FY2025 IRS filing).", "src": "https://www.causeiq.com/organizations/hindu-cultural-society-of-western-new-york,161133684/"},
      {"g": "asian", "n": "Burmese community", web: "https://burmese-community-services-inc.mailchimpsites.com/", webNote: "Burmese Community Services; listed by a directory; not opened", "lead": "West Side · Burmese Community Services (Steven Sanyu)", "t": "About 10,000 people from at least eight ethnic groups, including Karen, Karenni, Chin, Mon and Shan. Most are Christian or Buddhist; Rohingya Muslims worship at East Side mosques.", "src": "https://www.btpm.org/2026-03-23/diversity-a-strength-among-buffalos-burmese"},
      {"g": "asian", "n": "Bangladeshi community", webNote: "Community profile; no single website", "lead": "Broadway-Fillmore", "t": "A fast-growing, largely Muslim community on the East Side. It has built its own groceries, banquet halls and mosques, often in former churches and stores, such as the market and hall at 841 Broadway.", "src": "https://www.wkbw.com/news/local-news/buffalo/we-are-building-buffalo-growing-bangladeshi-community-shares-plans-for-future"},
      { n: "Catholic Diocese of Buffalo", web: "https://www.buffalodiocese.org", lead: "Bishop Michael Fisher", t: "Eight WNY counties. In Chapter 11 since 2020; a $150M settlement covers 800+ abuse claims and is paired with parish mergers.", src: "https://www.bishop-accountability.org/2026/04/diocese-revises-parish-contributions/" },
      { n: "Our Lady of Victory Basilica, Lackawanna", web: "https://www.fatherbaker.org", webNote: "Basilica and Father Baker shrine site", lead: "Legacy of Fr. Nelson Baker", t: "Built by Father Baker, whose orphanage and charities made him WNY's best-known priest; his canonization cause is open." },
      { n: "Episcopal Diocese of Western New York", web: "https://episcopalwny.org", lead: "Bishop search underway", t: "Electing its 12th bishop on May 1, 2027. St. Paul's Cathedral downtown dates to 1851.", src: "https://episcopalwny.org/bishop-search/" },
      { n: "Buffalo Jewish Federation", web: "https://buffalojewishfederation.org", lead: "CEO Robert M. Goldberg", t: "Central fundraising and planning body for Jewish Buffalo.", src: "https://www.jewishfederations.org/fedworld/buffalos-jewish-federation-announces-robert-m-goldberg-as-its-next-ceo" },
      { n: "Chautauqua Institution", web: "https://chq.org", lead: "Chautauqua County", t: "Founded 1874 as a Methodist training camp for Sunday school teachers; now a summer center for religion, arts and public affairs." },
      { n: "Lily Dale Assembly", web: "https://www.lilydaleassembly.org", webNote: "Listed by a directory; not opened", lead: "Chautauqua County", t: "World's largest Spiritualist community, organized in 1879." }
    ],
    roc: [
      {"g": "asian", "n": "Hindu Temple of Rochester", web: "https://hindutempleofrochester.com", webNote: "Listed by a directory; not opened", "lead": "Founded 1975", "t": "Started in homes, the UR Interfaith Chapel and the India Community Center. Its own building opened in 1993, with shrines to Krishna, Rama and Ganesha, and has kept expanding.", "src": "https://digrocreligions.org/classroom/hindu-temple/"},
      {"g": "asian", "n": "Gurdwara of Rochester", webNote: "No public website found", "lead": "Sikh · c. 1974", "t": "The first gurdwara in upstate New York and the second in the state after NYC. It began with Sunday services in members' homes, grew to hundreds of families and marked 50 years in 2024.", "src": "https://spectrumlocalnews.com/nys/rochester/news/2024/06/02/gurdwara-of-rochester-celebrate-its-50th-year-"},
      {"g": "asian", "n": "Rochester Zen Center", web: "https://rzc.org", "lead": "Founded 1966 by Philip Kapleau", "t": "One of the oldest and most influential Zen centers in the U.S. Its founder wrote The Three Pillars of Zen. It runs a rural retreat at Chapin Mill in Batavia.", "src": "https://www.britannica.com/topic/Rochester-Zen-Center"},
      {"g": "asian", "n": "Namgyal Monastery Institute of Buddhist Studies", web: "https://namgyal.org", "lead": "Ithaca · founded 1992", "t": "The North American branch of the Dalai Lama's personal monastery, founded on his advice, with monks rotating in from Dharamsala. Its Tibetan-style temple is Dü Khor Choe Ling. Ithaca also has a Tibetan resettlement community.", "src": "https://en.wikipedia.org/wiki/Namgyal_Monastery_Institute_of_Buddhist_Studies"},
      { n: "Catholic Diocese of Rochester", web: "https://www.dor.org", lead: "Bishop John S. Bonnici (named Jan 2026)", t: "Twelve counties over 7,107 sq mi. Succeeded Bishop Salvatore Matano, who led from 2014.", src: "https://www.usccb.org/news/2026/pope-leo-xiv-accepts-resignation-bishop-salvatore-matano-diocese-rochester-appoints" },
      { n: "Jewish Federation of Greater Rochester", webNote: "Website not confirmed this pass", lead: "Brighton/Pittsford core", t: "Temple B'rith Kodesh (founded 1848) is among the oldest Reform congregations in the U.S." },
      { n: "Islamic Center of Rochester", webNote: "Website not confirmed this pass", lead: "West Henrietta", t: "A principal mosque and community center for the Rochester area.", src: "https://archnet.org/sites/10607" },
      { n: "Hill Cumorah & Sacred Grove", web: "https://churchofjesuschrist.org/learn/locations/hill-cumorah-visitors-center", webNote: "Church of Jesus Christ visitors' center page", lead: "Palmyra / Manchester", t: "Where Joseph Smith said he received the Book of Mormon in the 1820s; birthplace of the Latter-day Saint movement." },
      { n: "Hydesville (Fox sisters)", webNote: "Historic site; no website of its own", lead: "Wayne County", t: "The 1848 \"rappings\" of Kate and Margaret Fox launched American Spiritualism." },
      { n: "First Unitarian Church", web: "https://rochesterunitarian.org", lead: "Rochester", t: "Louis Kahn's 1962 building; the congregation traces to abolitionist and suffragist circles of the 1800s." }
    ],
    cny: [
      {"g": "asian", "n": "Hindu Mandir of Central New York", webNote: "No public website found", "lead": "Liverpool · since mid-1990s", "t": "On the northwest shore of Onondaga Lake. Dedicated to Sri Lakshmi, with a full-time priest. A Jain community also gathers in Liverpool.", "src": "https://pluralismarchive.hsites.harvard.edu/city-profile-syracuse-ny"},
      {"g": "asian", "n": "Sikh Foundation of Syracuse", webNote: "No public website found", "lead": "Sikh", "t": "The Syracuse Sikh community runs Khanda Camp, a summer camp for Sikh youth that uses the nearby Adirondacks.", "src": "https://pluralismarchive.hsites.harvard.edu/sikh-foundation-syracuse.md"},
      {"g": "asian", "n": "Chua Di Lac", webNote: "No public website found", "lead": "Vietnamese Buddhist · Syracuse", "t": "At the southeastern tip of Onondaga Lake; draws hundreds from across the Northeast each July for Vu Lan (Parents' Day). Syracuse also resettled refugees from Burma, Cambodia and Vietnam.", "src": "https://pluralismarchive.hsites.harvard.edu/city-profile-syracuse-ny"},
      {"g": "asian", "n": "Utica's refugee faith communities", webNote: "Community profile; no single website", "lead": "Utica", "t": "Seventy-five Cambodian families built Wat Satheatak Uticaram, with metalwork shipped from Cambodia; Vietnamese refugees built their own temple. About 2,000 Burmese, mostly Karen Christians, settled through The Center (formerly the Mohawk Valley Resource Center for Refugees).", "src": "https://tricycle.org/magazine/rustbelt-dharma/"},
      { n: "Catholic Diocese of Syracuse", web: "https://syrdio.org", webNote: "Named by the diocesan newspaper; not opened", lead: "Bishop Douglas J. Lucia", t: "Seven counties. Exited bankruptcy Feb 2026 with a $176M survivor trust. The diocese is Onondaga County's fifth-largest employer.", src: "https://catholicreview.org/diocese-of-syracuse-wraps-176-million-bankruptcy-settlement-in-journey-of-reparation/" },
      { n: "Islamic Society of Central New York", web: "https://iscnyonline.org", webNote: "Found by redirect; not opened", lead: "Comstock Ave, Syracuse", t: "Founded 1981; serves an estimated 15,000–20,000 Muslims and runs a full-time school and cemetery.", src: "https://wiki.krisyotam.com/content/wikipedia_en_all_nopic_2026-03/Islamic_Society_of_Central_New_York" },
      { n: "Onondaga Nation", web: "https://www.onondaganation.org", lead: "Council of Chiefs", t: "Keepers of the Central Fire of the Haudenosaunee Confederacy; the Longhouse tradition continues south of Syracuse." },
      { n: "Wesleyan Chapel, Seneca Falls", web: "https://www.nps.gov/wori/learn/historyculture/wesleyan-chapel.htm", webNote: "Women's Rights National Historical Park (NPS)", lead: "Women's Rights NHP", t: "Site of the 1848 Seneca Falls Convention." },
      { n: "Oneida Community", web: "https://www.oneidacommunity.org", webNote: "Oneida Community Mansion House", lead: "Oneida", t: "John Humphrey Noyes's perfectionist commune (1848–1881), which became Oneida Ltd. silverware." }
    ],
    alb: [
      {"g": "asian", "n": "Albany Hindu Temple", web: "https://www.hindutemplealbany.org", "lead": "Loudonville · founded 1976", "t": "The Hindu Temple Society of the Capital District, with a Cultural Center added in 2007. One temple serves many traditions, with shrines to Ganesha, Shiva, Lakshmi Narayana, Shrinathji, Swaminarayan, Iyyappa and Mahavira.", "src": "https://www.hindutemplealbany.org/about-us/"},
      {"g": "asian", "n": "Chinese community", web: "https://cccalbany.wildapricot.org", webNote: "Chinese Community Center", "lead": "Since 1877", "t": "Albany's first Chinese laundry opened in 1877. Today's anchors are the Chinese Community Center (1973, about 400 families, Chinese school), the Taiwanese American Association (1971), the Chinese American Alliance (1980s) and the Chinese Christian Church of Greater Albany.", "src": "https://considerthesourceny.org/using-primary-sources/legacies/chinese-legacies/capital-district/capital-district-chinese-history"},
      {"g": "asian", "n": "New Americans in the Capital Region", webNote: "Community profile; no single website", "lead": "Community profile", "t": "85,903 foreign-born residents (8% of the region) in 2023, up about 29% since 2010. India and China are among the leading countries of birth, along with Guyana, the Philippines and Pakistan.", "src": "https://dos.ny.gov/snapshot-new-americans-communities-2025-capital-region"},
      { n: "Catholic Diocese of Albany", web: "https://www.rcda.org", lead: "Bishop Mark O'Connell (since late 2025)", t: "Fourteen counties. Reached a $148M survivor settlement in March 2026; succeeded Bishop Edward Scharfenberger.", src: "https://spectrumlocalnews.com/nys/capital-region/public-safety/2026/03/27/albany-diocese-clergy-abuse-settlement" },
      { n: "Cathedral of the Immaculate Conception", web: "https://cathedralic.com", lead: "Albany", t: "Gothic Revival cathedral dedicated in 1852, beside the Empire State Plaza." },
      { n: "National Shrine of Our Lady of Martyrs", webNote: "Website not confirmed this pass", lead: "Auriesville", t: "Honors Jesuit martyrs Isaac Jogues, René Goupil and Jean de Lalande, killed at Ossernenon in the 1640s." },
      { n: "Watervliet Shaker Historic District", web: "https://home.shakerheritage.org", webNote: "Shaker Heritage Society", lead: "Colonie", t: "First American Shaker settlement (1776) and burial place of founder Mother Ann Lee." }
    ]
  },

  // ---------------- CULTURE (arts institutions, private schools, clubs) ----------------
  // k: Music | Festivals & summer | Theater & performing arts | Museums & visual arts | Private schools | Clubs: golf, city & yacht
  culture: {
    buf: [
      {"k": "Music", "n": "Buffalo Philharmonic Orchestra", "lead": "Music Director JoAnn Falletta (contract through 2029)", "t": "Plays at Kleinhans Music Hall, the 1940 Saarinen-designed hall. The 2026-27 season opened with Lang Lang and a Danielpour world premiere.", "src": "https://www.opus3artists.com/buffalo-philharmonic-orchestra-extends-joann-fallettas-contract-as-music-director-through-2029/", "web": "https://bpo.org", "size": "Home hall: Kleinhans, 2,400 seats", "sizeSrc": "https://kleinhansbuffalo.org/?p=52"},
      {"k": "Museums & visual arts", "n": "Buffalo AKG Art Museum", "lead": "Jillian Jones, executive director · Cathleen Chaffee, artistic director (from Nov 1, 2026)", "t": "One of the country's leading modern and contemporary collections. Janne Sirén led it 2013–2026, through the $230M campaign behind the 2023 expansion.", "src": "https://www.btpm.org/local/2026-07-24/akg-announces-new-leadership-names-co-directors-for-first-time", "web": "https://buffaloakg.org"},
      {"k": "Museums & visual arts", "n": "Burchfield Penney Art Center", "lead": "Buffalo State", "t": "Devoted to the art of Western New York and painter Charles Burchfield.", "web": "https://burchfieldpenney.org"},
      {"k": "Theater & performing arts", "n": "Shea's Performing Arts Center", "lead": "President & CEO Brian Higgins", "t": "The 1926 movie palace hosts Broadway tours. A $34.5M addition is due at the end of 2027.", "src": "https://www.buffalorising.com/2026/11/sheas-expansion-hits-milestone/", "web": "https://www.sheas.org", "size": "3,019 seats", "sizeSrc": "https://en.wikipedia.org/wiki/Shea%27s_Performing_Arts_Center"},
      {"k": "Festivals & summer", "n": "Chautauqua Institution", "lead": "Chautauqua County", "t": "A nine-week summer season of orchestra, opera, theater, dance and lectures since 1874.", "web": "https://chq.org", "size": "Amphitheater: about 4,400 seats", "sizeSrc": "https://chqdaily.com/2017/06/new-amp-welcomes-chautauquas-2017-season/"},
      {"k": "Private schools", "n": "Nichols School", "lead": "Interim Head Scott Reisinger (from July 2026)", "t": "Coed day school founded in 1892. Head of School Chris Burner died in March 2026 after seven years; a search for a permanent head runs over the next one to two years.", "src": "https://www.nicholsschool.org/news-detail?pk=1627010", "web": "https://www.nicholsschool.org", "size": "596 students (NCES, 2021–22)", "sizeSrc": "https://projects.propublica.org/private-school-demographics/schools/nichols-school-00937745"},
      {"k": "Private schools", "n": "Buffalo Seminary", "lead": "Head of School Blair Parker (since 2024)", "t": "Girls' day school founded in 1851.", "src": "https://www.audacy.com/wben/news/local/buffalo-seminary-names-new-head-of-school", "web": "https://www.buffaloseminary.org", "size": "162 students (NCES, 2021–22)", "sizeSrc": "https://projects.propublica.org/private-school-demographics/schools/buffalo-seminary-00939414"},
      {"k": "Private schools", "n": "Elmwood Franklin School", "lead": "Head of School Johnathan Letcher (16th head, 2026)", "t": "Coed elementary and middle school in North Buffalo.", "src": "https://www.elmwoodfranklin.org/school-leadership.html", "web": "https://www.elmwoodfranklin.org", "size": "342 students (NCES via Private School Review)", "sizeSrc": "https://privateschoolreview.com/elmwood-franklin-school-profile"},
      {"k": "Private schools", "n": "Canisius High School", "lead": "President Fr. David Ciancimino, S.J.", "t": "Jesuit college-prep school for boys, founded in 1870.", "web": "https://www.canisiushigh.org", "size": "878 students (NCES via Private School Review)", "sizeSrc": "https://privateschoolreview.com/canisius-high-school-profile"},
      {"k": "Private schools", "n": "St. Joseph's Collegiate Institute", "lead": "Christian Brothers · Tonawanda", "t": "Catholic college-prep school for boys.", "web": "https://www.sjci.com", "size": "650 students (school's Fast Facts)", "sizeSrc": "https://www.sjci.com/apps/pages/fastfacts"},
      {"k": "Private schools", "n": "Nardin Academy", "lead": "Catholic · Buffalo", "t": "Catholic school with a coed elementary program and a girls' high school.", "web": "https://nardin.org", "size": "492 students in the high school listing (Private School Review)", "sizeSrc": "https://www.privateschoolreview.com/nardin-academy-profile"},
      {"k": "Clubs: golf, city & yacht", "n": "The Buffalo Club", "lead": "Delaware Avenue", "t": "The city's oldest private club, founded in 1867; Millard Fillmore was its first president.", "web": "https://www.thebuffaloclub.org", "size": "$9.4M annual revenue (IRS Form 990, FY Dec 2024)", "sizeSrc": "https://projects.propublica.org/nonprofits/organizations/160365760"},
      {"k": "Clubs: golf, city & yacht", "n": "Saturn Club", "lead": "Delaware Avenue", "t": "Social club founded in 1885.", "web": "https://saturnclub.org", "size": "$1.9M annual revenue (Form 990, FY Oct 2025)", "sizeSrc": "https://projects.propublica.org/nonprofits/organizations/160623120"},
      {"k": "Clubs: golf, city & yacht", "n": "The Park Country Club", "lead": "Amherst", "t": "Founded 1903, with a Colt & Alison course; hosted the 1934 PGA Championship.", "src": "https://en.wikipedia.org/wiki/The_Park_Country_Club", "web": "https://parkclub.org", "size": "$6.4M annual revenue (Form 990, FY Jan 2025)", "sizeSrc": "https://projects.propublica.org/nonprofits/organizations/160582510"},
      {"k": "Clubs: golf, city & yacht", "n": "Country Club of Buffalo", "lead": "Williamsville", "t": "Founded 1889; hosted the 1912 U.S. Open at its earlier site. Its Donald Ross course in Williamsville opened in 1926–27.", "web": "https://ccofbuffalo.org", "size": "$11.8M annual revenue (Form 990, FY Apr 2025)", "sizeSrc": "https://projects.propublica.org/nonprofits/organizations/160394390"},
      {"k": "Clubs: golf, city & yacht", "n": "Buffalo Yacht Club", "lead": "Buffalo waterfront", "t": "One of the oldest yacht clubs in the U.S.", "size": "$2.3M annual revenue (Form 990, FY Sep 2025)", "sizeSrc": "https://projects.propublica.org/nonprofits/organizations/160368750"}
    ],
    roc: [
      {"k": "Music", "n": "Eastman School of Music", "lead": "University of Rochester", "t": "Founded by George Eastman in 1921 and one of the leading U.S. conservatories; Kodak Hall at Eastman Theatre is the region's main concert hall.", "web": "https://www.esm.rochester.edu", "size": "Kodak Hall: 2,250 seats", "sizeSrc": "https://www.fisherdachs.com/portfolio/university-of-rochester-eastman-school-of-music-kodak-theater-renovation/"},
      {"k": "Music", "n": "Rochester Philharmonic Orchestra", "lead": "Music Director Andreas Delfs · President Tonya McBride-Robles", "t": "Delfs received a three-year extension in September 2026.", "src": "https://www.whec.com/top-news/rpo-announces-2026-27-season-new-president-and-contract-extension-for-music-director/", "web": "https://rpo.org", "size": "Home hall: Kodak Hall at Eastman Theatre, 2,250 seats", "sizeSrc": "https://www.fisherdachs.com/portfolio/university-of-rochester-eastman-school-of-music-kodak-theater-renovation/"},
      {"k": "Festivals & summer", "n": "Rochester International Jazz Festival", "lead": "Downtown Rochester, June", "t": "Nine days of ticketed and free shows; one of the largest jazz festivals in North America.", "src": "https://rochesterbeacon.com/2026/06/20/a-borderless-start-to-the-2026-jazz-fest/", "web": "https://rochesterjazz.com", "webNote": "listed by a directory; not opened"},
      {"k": "Museums & visual arts", "n": "Memorial Art Gallery", "lead": "University of Rochester", "t": "Rochester's art museum, now building an endowment to make admission free, helped by a $2M gift in 2026.", "src": "https://rbj.net/2026/03/12/memorial-art-gallery-2m-free-admission-gift/", "web": "https://mag.rochester.edu"},
      {"k": "Museums & visual arts", "n": "George Eastman Museum", "lead": "Director Bruce Barnes · East Avenue", "t": "The world's oldest photography museum and a major film archive, in George Eastman's mansion.", "web": "https://www.eastman.org"},
      {"k": "Museums & visual arts", "n": "Strong National Museum of Play", "lead": "President & CEO Steve Dubnik", "t": "Home of the National Toy Hall of Fame and the World Video Game Hall of Fame; opened a bigger play area at the airport in August 2026.", "src": "https://www.monroecounty.gov/news-2026-08-31-play", "web": "https://www.museumofplay.org"},
      {"k": "Museums & visual arts", "n": "Corning Museum of Glass", "lead": "President Jessica Levin Martinez (since Feb 2026)", "t": "The world's leading glass museum, marking its 75th year in 2026.", "src": "https://www.craftinamerica.org/blog/corning-museum-of-glass-celebrates-75-years-with-events-throughout-2026/", "web": "https://www.cmog.org", "webNote": "listed by a directory; not opened"},
      {"k": "Theater & performing arts", "n": "Geva Theatre", "lead": "Executive Director James Haskins · interim Artistic Director Mark Cuddy (from Jan 2027)", "t": "Rochester's largest professional theater; searching for a new artistic director.", "src": "https://rochesterbeacon.com/2026/11/11/cuddy-to-return-as-geva-interim-artistic-director", "web": "https://gevatheatre.org", "size": "Wilson Stage 519 seats · Fielding Stage 180", "sizeSrc": "https://gevatheatre.org/space-rentals/"},
      {"k": "Private schools", "n": "McQuaid Jesuit", "lead": "President Stephen Salluzzo", "t": "Jesuit school for boys, grades 6–12, founded 1954 in Brighton. 745 students; 2025–26 tuition $18,265.", "src": "https://mcquaid.org/wp-content/uploads/2025/09/2025-2026-profile-E-Version.pdf", "web": "https://mcquaid.org", "size": "745 students (school profile, 2025–26)", "sizeSrc": "https://mcquaid.org/wp-content/uploads/2025/09/2025-2026-profile-E-Version.pdf"},
      {"k": "Private schools", "n": "Allendale Columbia School", "lead": "Head of School Shannon Baudo", "t": "Coed independent day school, PreK–12, in Pittsford.", "src": "https://www.allendalecolumbia.org/about/school-leadership", "web": "https://www.allendalecolumbia.org", "size": "323 students (NCES via MySchoolScout)", "sizeSrc": "https://myschoolscout.com/schools/ny/allendale-columbia-school-pss-00939356/"},
      {"k": "Private schools", "n": "The Harley School", "lead": "Head of School Ryan Kimmet (Harley '95)", "t": "Coed independent day school, nursery–12, in Brighton.", "src": "https://www.harleyschool.org/?p=61682", "web": "https://www.harleyschool.org", "size": "463 students (NCES via MySchoolScout)", "sizeSrc": "https://myschoolscout.com/schools/ny/the-harley-school-pss-00939403/"},
      {"k": "Private schools", "n": "Aquinas Institute", "lead": "President David Eustis", "t": "Catholic coed school, grades 6–12, founded 1902.", "src": "https://www.wxxinews.org/post/aquinas-institute-names-new-president", "web": "https://aquinasinstitute.com", "size": "775 students (NCES, 2021–22)", "sizeSrc": "https://projects.propublica.org/private-school-demographics/districts/rochester-city-school-district-3624750"},
      {"k": "Private schools", "n": "Our Lady of Mercy School for Young Women", "lead": "Brighton", "t": "Catholic girls' school, grades 6–12.", "web": "https://www.mercyhs.com", "size": "540 students (school website)", "sizeSrc": "https://www.mercyhs.com/admissions"},
      {"k": "Private schools", "n": "Bishop Kearney", "lead": "Irondequoit", "t": "Catholic coed school, grades 6–12.", "web": "https://bkhs.org", "size": "390 students (NCES, 2021–22)", "sizeSrc": "https://projects.propublica.org/private-school-demographics/schools/bishop-kearney-high-school-00929483"},
      {"k": "Clubs: golf, city & yacht", "n": "Oak Hill Country Club", "lead": "President Ron Billitier · Pittsford · founded 1901", "t": "Host of four PGA Championships, most recently in 2023, and named host of a fifth in 2035.", "src": "https://rochesterbiz.com/oak-hill-country-club-will-host-a-fifth-pga-championship-in-2035/", "web": "https://oakhillcc.com", "size": "$20.5M annual revenue (Form 990, FY Dec 2024)", "sizeSrc": "https://projects.propublica.org/nonprofits/organizations/160574660"},
      {"k": "Clubs: golf, city & yacht", "n": "Country Club of Rochester", "lead": "Brighton/Pittsford", "t": "Founded by Genesee Valley Club members; Donald Ross course. Hosted the first USGA Women's Open (1953) and the 1973 Women's Open.", "src": "https://en.wikipedia.org/wiki/Country_Club_of_Rochester", "web": "http://www.ccrochester.org", "webNote": "listed by a directory; not opened", "size": "$11.3M annual revenue (Form 990, FY Mar 2025)", "sizeSrc": "https://projects.propublica.org/nonprofits/organizations/160394400"},
      {"k": "Clubs: golf, city & yacht", "n": "Monroe Golf Club", "lead": "Pittsford", "t": "Donald Ross course opened 1924; home of the Monroe Invitational amateur since 1937, where a 17-year-old Tiger Woods reached the 1993 semifinals.", "src": "https://en.wikipedia.org/wiki/Monroe_Golf_Club", "web": "http://www.monroegolfclub.com", "webNote": "listed by a directory; not opened", "size": "$9.9M annual revenue (Form 990, FY Dec 2025)", "sizeSrc": "https://projects.propublica.org/nonprofits/organizations/160557750"},
      {"k": "Clubs: golf, city & yacht", "n": "Genesee Valley Club", "lead": "East Avenue", "t": "Rochester's leading downtown social club, founded in 1885.", "web": "https://www.gvalleyclub.org", "size": "$1.9M annual revenue (Form 990, FY Feb 2025)", "sizeSrc": "https://projects.propublica.org/nonprofits/organizations/160446600"},
      {"k": "Clubs: golf, city & yacht", "n": "Rochester Yacht Club", "lead": "Charlotte", "t": "Lake Ontario yacht club founded in 1877; hosts major regattas.", "web": "https://rochesteryc.com", "size": "$3.5M annual revenue (Form 990, FY Nov 2025)", "sizeSrc": "https://projects.propublica.org/nonprofits/organizations/160613575"}
    ],
    cny: [
      {"k": "Music", "n": "The Syracuse Orchestra (formerly Symphoria)", "lead": "Music director search", "t": "Lawrence Loh, its first music director (2014–2025), left for the Waco Symphony. No successor was confirmed in the sources found.", "src": "https://www.cnybj.com/syracuse-orchestra-music-director-to-conclude-his-tenure-following-2024-25-season/", "web": "https://experiencesymphoria.org"},
      {"k": "Festivals & summer", "n": "The Glimmerglass Festival", "lead": "Cooperstown", "t": "One of the country's leading summer opera festivals, now in its second half-century.", "src": "https://glimmerglass.org/festivals/2026-festival/", "web": "https://glimmerglass.org", "size": "Alice Busch Opera Theater: 914 seats", "sizeSrc": "https://en.wikipedia.org/wiki/Glimmerglass_Festival"},
      {"k": "Museums & visual arts", "n": "Everson Museum of Art", "lead": "Syracuse", "t": "I.M. Pei's first museum building (1968), known for its American ceramics collection.", "web": "https://everson.org"},
      {"k": "Museums & visual arts", "n": "Munson", "lead": "Utica", "t": "The Munson-Williams-Proctor Arts Institute combines an art museum, an art school and a performing arts series.", "web": "https://www.munson.art"},
      {"k": "Theater & performing arts", "n": "Syracuse Stage", "lead": "Artistic Director Robert Hupp (to summer 2027) · Managing Director Carly DiFulvio Allen", "t": "Central New York's professional theater, run with Syracuse University's drama department.", "src": "https://news.syr.edu/2026/07/06/robert-hupp-to-step-down-as-syracuse-stage-artistic-director-in-summer-2027/", "web": "https://www.syracusestage.org", "size": "Archbold Theatre 499 seats · Storch Theatre about 200–250", "sizeSrc": "https://en.wikipedia.org/wiki/Syracuse_Stage"},
      {"k": "Theater & performing arts", "n": "Landmark Theatre", "lead": "Syracuse", "t": "A restored 1928 movie palace hosting Broadway tours and concerts.", "web": "https://landmarktheatre.org", "size": "2,908 seats", "sizeSrc": "https://en.wikipedia.org/wiki/Landmark_Theatre_(Syracuse,_New_York)"},
      {"k": "Private schools", "n": "Manlius Pebble Hill School", "lead": "Head of School David McCusker Jr. (since 2019; not re-verified this pass)", "t": "Coed independent day school, PreK–12, in DeWitt.", "src": "https://www.mphschool.org/?p=8252", "web": "https://www.mphschool.org", "size": "315 students (NCES, 2021–22)", "sizeSrc": "https://projects.propublica.org/private-school-demographics/schools/manlius-pebble-hill-school-00938997"},
      {"k": "Private schools", "n": "Christian Brothers Academy", "lead": "President Matt Keough (first lay president, since 2020)", "t": "Catholic coed school, grades 7–12, in DeWitt.", "src": "https://cbasyracuse.org/cba-announces-new-president", "web": "https://cbasyracuse.org", "size": "774 students (NCES, 2019–20)", "sizeSrc": "https://projects.propublica.org/private-school-demographics/schools/christian-brothers-academy-00932372"},
      {"k": "Clubs: golf, city & yacht", "n": "Onondaga Golf & Country Club", "lead": "Fayetteville", "t": "Syracuse's best-known private golf club.", "size": "$6.0M annual revenue (Form 990, FY Oct 2025)", "sizeSrc": "https://projects.propublica.org/nonprofits/organizations/150406690"},
      {"k": "Clubs: golf, city & yacht", "n": "Century Club of Syracuse", "lead": "James Street", "t": "Downtown social club.", "web": "https://centuryclubofsyracuse.com", "size": "$1.3M annual revenue (Form 990, FY Dec 2025)", "sizeSrc": "https://projects.propublica.org/nonprofits/organizations/150265840"},
      {"k": "Clubs: golf, city & yacht", "n": "Skaneateles Country Club", "lead": "Skaneateles", "t": "Private lakeside golf club on Skaneateles Lake.", "size": "$8.6M annual revenue (Form 990, FY Dec 2025)", "sizeSrc": "https://projects.propublica.org/nonprofits/organizations/150449780"},
      {"k": "Clubs: golf, city & yacht", "n": "Yahnundasis Golf Club", "lead": "New Hartford (Utica)", "t": "Private club with a Donald Ross-designed course.", "web": "http://www.yahnundasis.com", "webNote": "listed by a directory; not opened", "size": "$2.9M annual revenue (Form 990, FY Aug 2025)", "sizeSrc": "https://projects.propublica.org/nonprofits/organizations/150498240"}
    ],
    alb: [
      {"k": "Music", "n": "Albany Symphony", "lead": "Music Director David Alan Miller", "t": "Nationally known for new American music. The 2026-27 season has premieres by Viet Cuong and others, with Emanuel Ax, at the Palace, Troy Music Hall and EMPAC.", "src": "https://www.dailygazette.com/thespot518/music/albany-symphony-orchestra-ready-to-travel-across-time-and-space-with-2026-2027-season/article_2165bff3-5c51-4567-904a-b6c4e34cf9d9.html", "web": "https://www.albanysymphony.com"},
      {"k": "Music", "n": "Troy Savings Bank Music Hall", "lead": "Troy", "t": "An 1875 concert hall prized for its acoustics.", "web": "https://www.troymusichall.org", "size": "Up to 1,175 seats", "sizeSrc": "https://www.troymusichall.org/rent_the_hall/"},
      {"k": "Festivals & summer", "n": "Saratoga Performing Arts Center (SPAC)", "lead": "President & CEO Elizabeth Sobol (since 2016)", "t": "Founded 1966; summer home of New York City Ballet, The Philadelphia Orchestra and the Chamber Music Society of Lincoln Center. About 500,000 visitors a year.", "src": "https://spac.org/press/press-release-saratoga-performing-arts-center-reflects-on-spacs-evolution-as-it-celebrates-its-60th-anniversary-and-a-decade-of-leadership-from-ceo-elizabeth-sobol/", "web": "https://spac.org", "size": "Amphitheater: 5,200 seats; 25,000 with the lawn", "sizeSrc": "https://spac.org/locations"},
      {"k": "Theater & performing arts", "n": "Proctors Collaborative", "lead": "CEO Philip Morris (to Mar 2027) · President Jean Leonard (CEO from Mar 2027)", "t": "Runs Proctors in Schenectady, Capital Rep in Albany, Universal Preservation Hall in Saratoga Springs and the American Theatre in Troy (under construction).", "src": "https://berkshireonstage.blog/2026/11/05/philip-morris-to-retire-as-ceo-of-proctors-collaborative-jean-leonard-to-become-president-and-ceo/", "web": "https://www.atproctors.org", "size": "Proctors main stage: about 2,700 seats (2,594 fixed)", "sizeSrc": "https://en.wikipedia.org/wiki/Proctor%27s_Theatre_(Schenectady,_New_York)"},
      {"k": "Museums & visual arts", "n": "The Hyde Collection", "lead": "Glens Falls", "t": "Old Masters and modern art in a 1912 Florentine-style villa.", "web": "https://www.hydecollection.org"},
      {"k": "Museums & visual arts", "n": "Tang Teaching Museum", "lead": "Skidmore College, Saratoga Springs", "t": "A teaching museum known for interdisciplinary contemporary exhibitions.", "web": "https://tang.skidmore.edu"},
      {"k": "Private schools", "n": "Emma Willard School", "lead": "Head of School Karen Lassey", "t": "Girls' boarding and day school in Troy, founded by Emma Willard in 1814.", "src": "https://www.emmawillard.org/about/leadership", "web": "https://www.emmawillard.org", "size": "365 students (NCES, 2021–22)", "sizeSrc": "https://projects.propublica.org/private-school-demographics/schools/emma-willard-school-00939731"},
      {"k": "Private schools", "n": "Albany Academy", "lead": "Head of School Michael G. Turner (from July 2026)", "t": "Founded 1813. Turner, formerly at The Shipley School, succeeded Chris Lauricella.", "src": "https://www.albanyacademy.org/p/~board/general-news/post/welcome-mr-turner-albany-academys-new-head-of-school", "web": "https://www.albanyacademy.org", "size": "671 students across the Albany Academies (NCES, 2021–22)", "sizeSrc": "https://projects.propublica.org/private-school-demographics/schools/albany-academies-A1902953"},
      {"k": "Private schools", "n": "Doane Stuart School", "lead": "Rensselaer", "t": "Coed day school formed in 1975 from an Episcopal and a Catholic school, the first such merger in the U.S.", "web": "https://www.doanestuart.org", "size": "168 students (NCES, 2021–22)", "sizeSrc": "https://projects.propublica.org/private-school-demographics/schools/doane-stuart-school-02045414"},
      {"k": "Private schools", "n": "Christian Brothers Academy", "lead": "Colonie", "t": "Catholic school for boys.", "web": "https://cbaalbany.org", "webNote": "listed by a directory; not opened", "size": "540 students (NCES, 2019–20)", "sizeSrc": "https://projects.propublica.org/private-school-demographics/schools/christian-brothers-academy-00924022"},
      {"k": "Private schools", "n": "Northwood School", "lead": "Head of School Gino Riffle · Lake Placid", "t": "Coed boarding school known for hockey and skiing programs.", "src": "https://northwoodschool.org/about/head-of-school-welcome/", "web": "https://northwoodschool.org", "size": "193 students, 82% boarding (2018)", "sizeSrc": "https://en.wikipedia.org/wiki/Northwood_School_(Lake_Placid,_New_York)"},
      {"k": "Clubs: golf, city & yacht", "n": "Fort Orange Club", "lead": "Washington Avenue, Albany", "t": "The capital's leading private club, founded in 1880.", "size": "$3.6M annual revenue (Form 990, FY Dec 2025)", "sizeSrc": "https://projects.propublica.org/nonprofits/organizations/140669680"},
      {"k": "Clubs: golf, city & yacht", "n": "Schuyler Meadows Club", "lead": "Loudonville", "t": "Private golf club north of Albany.", "src": "https://www.schuylermeadows.com/golf", "web": "https://www.schuylermeadows.com", "size": "$4.5M annual revenue (Form 990, FY Dec 2025)", "sizeSrc": "https://projects.propublica.org/nonprofits/organizations/141048370"},
      {"k": "Clubs: golf, city & yacht", "n": "Mohawk Golf Club", "lead": "Schenectady", "t": "Private golf club.", "size": "$3.0M annual revenue (Form 990, FY Dec 2018, latest available)", "sizeSrc": "https://projects.propublica.org/nonprofits/organizations/140895440"},
      {"k": "Clubs: golf, city & yacht", "n": "Saratoga Golf & Polo Club", "lead": "Saratoga Springs", "t": "Member-owned private club with a nine-hole course dating to 1896.", "src": "https://www.saratoga.com/business/saratoga-golf-and-polo-club-5928/", "web": "https://saratogagolfpoloclub.clubhouseonline-e3.com/About_Our_Club", "size": "$3.1M annual revenue (Form 990, FY Dec 2025)", "sizeSrc": "https://projects.propublica.org/nonprofits/organizations/141034870"},
      {"k": "Clubs: golf, city & yacht", "n": "Glens Falls Country Club", "lead": "Queensbury", "t": "Donald Ross course begun in 1912; host of the 103rd NYS Men's Amateur in July 2026.", "src": "https://nysga.org/communications-news/preview-2026-nys-mens-amateur-championship-at-glens-falls", "size": "$5.3M annual revenue (Form 990, FY Dec 2024)", "sizeSrc": "https://projects.propublica.org/nonprofits/organizations/140696490"}
    ]
  },

  // ---------------- HISTORY ----------------
  history: {
    buf: {
      thesis: "A canal-end boomtown that became America's grain, steel and hydropower capital, then rebuilt around health care and banking.",
      eras: [
        ["Before 1800", "Seneca homeland, westernmost nation of the Haudenosaunee. The Holland Land Company surveys the region; Joseph Ellicott lays out New Amsterdam (Buffalo) on a radial plan in 1804."],
        ["1825–1900", "The Erie Canal makes Buffalo its western terminus. Joseph Dart's steam grain elevator (1842) makes it the world's largest grain port. Underground Railroad routes converge on the Niagara crossing to Canada."],
        ["1895–1929", "AC power from Niagara Falls (Adams plant, 1895, using Tesla's system) lights Buffalo first. The 1901 Pan-American Exposition is followed by McKinley's assassination and Theodore Roosevelt's inauguration at the Wilcox Mansion. Larkin Co. and Bethlehem Steel drive a wealthy era (Darwin Martin House, Olmsted parks)."],
        ["1950–2000", "St. Lawrence Seaway (1959) bypasses the port; steel closes at Lackawanna (1983). Love Canal (1978) becomes a national environmental scandal. Population falls by half from its 1950 peak."],
        ["2000–today", "Medical Campus, Canalside and the Buffalo Billion; Pegulas buy the Bills (2014) and open a new stadium in 2026. The 2022 Tops shooting shapes politics on the East Side."]
      ],
      figures: [["Millard Fillmore","13th President; first chancellor of the University at Buffalo"],["Grover Cleveland","Mayor of Buffalo, Governor, 22nd and 24th President"],["Father Nelson Baker","Built the Lackawanna charities and basilica"],["Darwin Martin","Larkin executive, Frank Lloyd Wright patron"],["Wilson Greatbatch","Invented the implantable pacemaker in Clarence"],["Bob Wilmers","Led M&T Bank from 1983 to 2017"]],
      stories: ["The 1901 Exposition's Temple of Music, where McKinley was shot, used electricity sent from the Falls 26 miles away.", "Lucille Ball grew up in Jamestown; the National Comedy Center opened there in 2018."]
    },
    roc: {
      thesis: "Flour City, Flower City, then the world capital of imaging: a reform-minded city that birthed social movements and big-company paternalism.",
      eras: [
        ["1788–1840", "Phelps and Gorham Purchase opens Seneca lands. Nathaniel Rochester's mill village grows on the Genesee falls; the Erie Canal aqueduct (1823) makes it America's first boomtown and \"Flour City.\""],
        ["1830–1900", "The Burned-over District: Charles Finney's 1830–31 revival, the Latter-day Saints at Palmyra, Spiritualism at Hydesville. Frederick Douglass prints The North Star (1847); Susan B. Anthony is arrested for voting (1872). Ellwanger & Barry nurseries make it the \"Flower City.\""],
        ["1880–1970", "George Eastman's Kodak, Bausch & Lomb (1853) and Haloid/Xerox (the 914 copier, 1959) build a company town with Eastman School, URMC and generous philanthropy. Corning Glass Works moves to Corning (1868); Cornell is founded in Ithaca (1865)."],
        ["1964–2012", "The July 1964 uprising leads to FIGHT and Kodak hiring battles. Kodak peaks near 60,000 local jobs in the 1980s, then shrinks through bankruptcy (2012)."],
        ["Today", "University of Rochester, Rochester Regional and Wegmans lead; an optics-photonics cluster and Eastman Business Park reuse (Phoenix Tailings, 2026) carry the imaging legacy forward."]
      ],
      figures: [["George Eastman","Kodak founder and philanthropist"],["Frederick Douglass","Abolitionist publisher, buried at Mount Hope"],["Susan B. Anthony","Suffrage leader, buried at Mount Hope"],["Joseph C. Wilson","Built Xerox from Haloid"],["Robert Wegman","Grew Wegmans into a regional icon"],["Tom Golisano","Founded Paychex (1971); three-time governor candidate"]],
      stories: ["Mark Twain wrote much of Huckleberry Finn in his Quarry Farm study in Elmira.", "Glenn Curtiss's Hammondsport workshop made the Finger Lakes a cradle of early aviation."]
    },
    cny: {
      thesis: "The Haudenosaunee heartland and the Salt City, where reform movements, canals and big manufacturers met.",
      eras: [
        ["Before 1790", "Onondaga Lake is where the Peacemaker and Hiawatha founded the Haudenosaunee Confederacy; the Onondaga keep its Central Fire. Revolutionary-era campaigns and treaties push most nations off their lands."],
        ["1790–1860", "Salt springs make Syracuse the \"Salt City\"; the Erie Canal runs down Erie Boulevard. The 1851 Jerry Rescue frees a fugitive from federal custody. Seneca Falls (1848) and Auburn (Harriet Tubman, William Seward) make the region a reform center."],
        ["1860–1960", "Utica textiles, Endicott-Johnson shoes, IBM's start in Endicott, Carrier air conditioning (to Syracuse in 1937), GE's Electronics Park and Smith-Corona build an industrial base. The Baseball Hall of Fame opens in Cooperstown in 1939."],
        ["1960–2020", "Deindustrialization: Carrier, GM and others leave. I-81 splits Syracuse's 15th Ward, a decision the city is now undoing. Upstate Medical and SU become the anchors."],
        ["Today", "Micron's Clay campus (groundbreaking January 2026) and the I-81 community grid set the region's direction."]
      ],
      figures: [["Harriet Tubman","Lived and is buried in Auburn"],["William H. Seward","Governor, senator, Secretary of State; Auburn"],["Elizabeth Cady Stanton","Organized the Seneca Falls Convention"],["Willis Carrier","Inventor of modern air conditioning"],["Thomas J. Watson Sr.","Built IBM from its Endicott base"],["Jermain Loguen","Syracuse's Underground Railroad leader"]],
      stories: ["Salt production funded the early Erie Canal through the state salt duty.", "The Oneida Community's silverware business outlasted its communal experiment by a century."]
    },
    alb: {
      thesis: "Dutch trading post, Revolutionary turning point and seat of state power, with industrial cities and the Adirondack wilderness to the north.",
      eras: [
        ["1609–1775", "Fort Orange (1624) and Beverwyck make Albany a Dutch fur-trading hub; the Dongan Charter (1686) is among the oldest municipal charters in the U.S. Franklin proposes the Albany Plan of Union in 1754."],
        ["1775–1850", "Battle of Saratoga (1777) turns the Revolution. Albany becomes capital (1797). The Erie Canal opens at Albany; Troy gets RPI (1824) and its \"Uncle Sam\" (Samuel Wilson). Martin Van Buren's Albany Regency invents the modern party machine."],
        ["1850–1950", "Schenectady becomes \"the city that lights and hauls the world\" (GE, 1892, and ALCO). Saratoga racing begins (1863). The Adirondack Park (1892) and \"Forever Wild\" clause (1894) protect the North Country. Dan O'Connell's Democratic machine runs Albany from 1921."],
        ["1950–2000", "Mayor Erastus Corning 2nd serves 1942–1983. Gov. Nelson Rockefeller builds the Empire State Plaza, razing a neighborhood. Lake Placid hosts the 1980 \"Miracle on Ice.\""],
        ["Today", "Albany NanoTech and GlobalFoundries (Malta, 2009 onward) make the region a chip center; Saratoga Springs and Lake George anchor tourism."]
      ],
      figures: [["Philip Schuyler","General and Albany patriarch"],["Martin Van Buren","8th President, from Kinderhook"],["Erastus Corning 2nd","Albany mayor for 41 years"],["Nelson Rockefeller","Governor; built the Empire State Plaza"],["Charles Steinmetz","GE engineer who shaped AC power"],["Mother Ann Lee","Founded the American Shakers"]],
      stories: ["Henry Hudson's Half Moon reached the Albany area in 1609, starting Dutch claims.", "Stewart's Shops, founded by the Dake family, is mostly employee-owned."]
    }
  },

  providers: {
   "note": "Leaders as named by each firm or local business press in 2026. Individual attorneys are drawn from Best Lawyers 2027 (released Aug. 2026), where \"Lawyer of the Year\" goes to one lawyer per practice per metro, and from Chambers USA 2026 Upstate New York. Nonprofit client counts are Cause IQ's tallies from IRS filings that name the auditor.",
   "buf": [
    {
     "k": "Law firms",
     "n": "Hodgson Russ LLP",
     "lead": "Nathan W. G. Berti, Managing Partner (since Feb. 1, 2026)",
     "t": "Buffalo-founded firm with U.S. and Canadian offices. Berti, a trusts and estates lawyer, succeeded Benjamin M. Zuffranieri Jr., who stays on as co-chair through 2026. 97 attorneys ranked in Best Lawyers 2027.",
     "web": "https://www.hodgsonruss.com",
     "src": "https://www.hodgsonruss.com/newsroom/news/hodgson-russ-llp-appoints-nathan-w-g-berti-as-managing-partner-to-lead-continued-growth-in-the-u-s-and-canada"
    },
    {
     "k": "Law firms",
     "n": "Phillips Lytle LLP",
     "lead": "Douglas W. Dimitroff, Managing Partner",
     "t": "Buffalo-based firm expanding into Chicago in 2026; Chad W. Flansburg leads the Rochester office (named May 2026). 84 attorneys recognized by Best Lawyers 2027.",
     "web": "https://phillipslytle.com",
     "src": "https://phillipslytle.com/news-events/buffalo-business-first-2026-power-250-douglas-dimitroff/"
    },
    {
     "k": "Law firms",
     "n": "Lippes Mathias LLP",
     "lead": "Kevin J. Cross, Chairman and Managing Partner",
     "t": "Buffalo-based; entered the 200 largest U.S. firms by attorney headcount in the 2026 NLJ 500, having grown through a series of law-firm mergers. 115 attorneys in Best Lawyers 2027.",
     "web": "https://www.lippes.com",
     "src": "https://www.lippes.com/insights/lippes-mathias-managing-partner-and-chairman-kevin-j-cross-named-to-city-state-new-york-s-2026-upstate-power-100-3178.pdf"
    },
    {
     "k": "CPA firms",
     "n": "Withum (formerly Freed Maxick)",
     "lead": "Rich Wright, Partner-in-Charge, Buffalo, Rochester and Batavia",
     "t": "Buffalo's Freed Maxick combined its practice with national firm Withum in August 2025.",
     "web": "https://www.withum.com",
     "src": "https://www.withum.com/resources/rich-wright-named-to-western-new-york-business-leader-power-lists/"
    },
    {
     "k": "CPA firms",
     "n": "Lumsden McCormick",
     "lead": "Managing partner not confirmed this pass",
     "t": "Buffalo CPA firm. Cause IQ lists 308 nonprofit clients, including Olean General Hospital, St. Bonaventure University, Niagara Falls Memorial Medical Center and D'Youville University.",
     "src": "https://www.causeiq.com/vendors/lumsden-and-mccormick-llp,4471154511294728674"
    },
    {
     "k": "M&A and corporate attorneys",
     "n": "David J. Murray",
     "lead": "Phillips Lytle",
     "t": "Best Lawyers 2027 Lawyer of the Year, Buffalo, for Mergers and Acquisitions Law (also Health Care Law).",
     "src": "https://phillipslytle.com/news-events/eighty-four-phillips-lytle-attorneys-earn-national-recognition-from-best-lawyers/press-releases-best-lawyers-2027-desktop/"
    },
    {
     "k": "M&A and corporate attorneys",
     "n": "Phillip A. Delmont",
     "lead": "Harter Secrest & Emery (Buffalo)",
     "t": "Best Lawyers 2027 Lawyer of the Year, Buffalo, Business Organizations; ranked in Chambers USA 2026 Upstate NY Corporate/M&A.",
     "src": "https://hselaw.com/news-and-information/press-releases/eleven-harter-secrest-emery-attorneys-recognized-as-2027-lawyer-of-the-year-by-best-lawyers/"
    },
    {
     "k": "M&A and corporate attorneys",
     "n": "Christopher J. Milne · Edmund J. Russell III",
     "lead": "Hodgson Russ",
     "t": "Listed in Best Lawyers 2027 for Mergers and Acquisitions Law. Firm colleague Paul J. Vallone was named 2027 Lawyer of the Year for Corporate Law.",
     "src": "https://www.hodgsonruss.com/newsroom/news/97-hodgson-russ-llp-attorneys-ranked-in-2027-edition-of-best-lawyers-in-america"
    },
    {
     "k": "M&A and corporate attorneys",
     "n": "Brian J. Bocketti · John J. Koeppel · Paul A. Mitchell · Brendan J. Rich · Paul J. Schulz",
     "lead": "Lippes Mathias (Buffalo)",
     "t": "Listed in Best Lawyers 2027 for Mergers and Acquisitions Law.",
     "src": "https://www.lippes.com/insights/115-lippes-mathias-attorneys-recognized-in-the-2027-edition-of-the-best-lawyers-in-america-3193"
    },
    {
     "k": "Trusts & estates attorneys",
     "n": "Sharon L. Wick",
     "lead": "Phillips Lytle",
     "t": "Best Lawyers 2027 Lawyer of the Year, Buffalo, for Trusts and Estates and for Litigation - Trusts and Estates.",
     "src": "https://phillipslytle.com/news-events/eighty-four-phillips-lytle-attorneys-earn-national-recognition-from-best-lawyers/press-releases-best-lawyers-2027-desktop/"
    },
    {
     "k": "Trusts & estates attorneys",
     "n": "Nathan W. G. Berti",
     "lead": "Hodgson Russ (Managing Partner)",
     "t": "Trusts and estates lawyer advising high-net-worth clients on multi-jurisdictional estate planning and administration.",
     "src": "https://www.hodgsonruss.com/newsroom/news/hodgson-russ-llp-appoints-nathan-w-g-berti-as-managing-partner-to-lead-continued-growth-in-the-u-s-and-canada"
    },
    {
     "k": "Trusts & estates attorneys",
     "n": "Courtney Donahue Tasner · Charles E. Telford III",
     "lead": "Lippes Mathias (Buffalo)",
     "t": "Listed in Best Lawyers 2027 for Trusts and Estates (Tasner also for Trusts and Estates litigation).",
     "src": "https://www.lippes.com/insights/115-lippes-mathias-attorneys-recognized-in-the-2027-edition-of-the-best-lawyers-in-america-3193"
    },
    {
     "k": "Nonprofit CPAs",
     "n": "Lumsden McCormick",
     "lead": "308 nonprofit clients (Cause IQ)",
     "t": "Largest nonprofit client count found for a Buffalo-based firm this pass; clients include hospitals and colleges across Western New York.",
     "src": "https://www.causeiq.com/vendors/lumsden-and-mccormick-llp,4471154511294728674"
    }
   ],
   "roc": [
    {
     "k": "Law firms",
     "n": "Harter Secrest & Emery LLP",
     "lead": "Craig S. Wittlin, Managing Partner (since 2016)",
     "t": "Rochester-based; led Upstate New York firms in the Chambers USA 2026 rankings, with 27 attorneys ranked. Eleven of its attorneys were 2027 Best Lawyers Lawyers of the Year.",
     "web": "https://hselaw.com",
     "src": "https://hselaw.com/news-and-information/press-releases/harter-secrest-emery-leads-in-chambers-usa-2026-ranking-among-upstate-new-york-law-firms/"
    },
    {
     "k": "Law firms",
     "n": "Nixon Peabody LLP (Rochester office)",
     "lead": "Matthew V. Carrigg, Rochester Office Managing Partner (since Feb. 2026)",
     "t": "Carrigg, an affordable housing and real estate lawyer, succeeded Jared Lusk, who led the office for nine years. Six Rochester lawyers were 2027 Lawyers of the Year.",
     "web": "https://www.nixonpeabody.com",
     "src": "https://www.nixonpeabody.com/about/media/2026/02/04/nixon-peabody-selects-matthew-carrigg-to-lead-firms-rochester-office"
    },
    {
     "k": "Law firms",
     "n": "Woods Oviatt Gilman LLP",
     "lead": "Mitchell S. Nusbaum, Managing Partner",
     "t": "Rochester-based firm; Nusbaum has led it for eight years per RBJ's 2026 Power 100.",
     "src": "https://rbj.net/2026/07/17/mitchell-s-nusbaum-10/"
    },
    {
     "k": "Law firms",
     "n": "Harris Beach Murtha",
     "lead": "Chris Jagel, CEO; Thomas Garry, Management Committee Chair (July 2026)",
     "t": "Formed in 2025 from Harris Beach PLLC and Murtha Cullina LLP; has since added Boston's Peabody & Arnold.",
     "web": "https://www.harrisbeachmurtha.com",
     "src": "https://www.harrisbeachmurtha.com/news/harris-beach-murtha-names-thomas-garry-new-leader-of-firms-management-committee/"
    },
    {
     "k": "CPA firms",
     "n": "The Bonadio Group",
     "lead": "Bruce Zicari, CEO and Managing Partner; Aimee Jozic, Rochester Regional Managing Partner (2026)",
     "t": "Rochester-based Accounting Today Top 100 firm, planning a new headquarters in Perinton. Jozic succeeds Nancy Snyder, who retires in May 2026.",
     "web": "https://www.bonadio.com",
     "src": "https://www.bonadio.com/news/the-bonadio-group-announces-key-leadership-changes/"
    },
    {
     "k": "CPA firms",
     "n": "EFPR Group (a Springline company)",
     "lead": "Jim Marasco, Managing Partner",
     "t": "Rochester CPA firm that partnered with Texas-based Springline Advisory in 2025. Cause IQ lists 223 nonprofit clients, including Keuka College and Arnot Ogden Medical Center.",
     "web": "https://efpradvisory.com",
     "src": "https://efpradvisory.com/news/efpr-a-springline-company-announces-promotion-of-three-new-partners/"
    },
    {
     "k": "CPA firms",
     "n": "MMB+CO (Mengel Metzger Barr)",
     "lead": "Managing partner not confirmed this pass",
     "t": "Rochester CPA firm. Cause IQ lists 512 nonprofit clients, many of them New York City charter schools.",
     "src": "https://www.causeiq.com:443/vendors/mengel-metzger-barr-and-co-llp,4470345261686715505"
    },
    {
     "k": "M&A and corporate attorneys",
     "n": "Tyler J. Savage",
     "lead": "Nixon Peabody",
     "t": "Best Lawyers 2027 Lawyer of the Year, Rochester, for Mergers and Acquisitions Law. Colleague Richard A. McGuirk was named for Mergers and Acquisitions litigation.",
     "src": "https://www.nixonpeabody.com/about/media/2026/08/20/the-best-lawyers-in-america-recognizes-285-nixon-peabody-attorneys-12-as-lawyer-of-the-year"
    },
    {
     "k": "M&A and corporate attorneys",
     "n": "Craig S. Wittlin",
     "lead": "Harter Secrest & Emery (Managing Partner)",
     "t": "Best Lawyers 2027 Lawyer of the Year, Rochester, Business Organizations; Chambers USA 2026 Eminent Practitioner, Upstate NY Corporate/M&A.",
     "src": "https://hselaw.com/news-and-information/press-releases/eleven-harter-secrest-emery-attorneys-recognized-as-2027-lawyer-of-the-year-by-best-lawyers/"
    },
    {
     "k": "M&A and corporate attorneys",
     "n": "Steven Y. Solomon",
     "lead": "Harter Secrest & Emery",
     "t": "Best Lawyers 2027 Lawyer of the Year, Rochester, for Corporate Law.",
     "src": "https://hselaw.com/news-and-information/press-releases/eleven-harter-secrest-emery-attorneys-recognized-as-2027-lawyer-of-the-year-by-best-lawyers/"
    },
    {
     "k": "M&A and corporate attorneys",
     "n": "Thomas R. Anderson · Joseph G. Casion · Matthew A. Eldred · Alexander R. McClean",
     "lead": "Harter Secrest & Emery",
     "t": "Ranked in Chambers USA 2026, Upstate New York Corporate/M&A.",
     "src": "https://hselaw.com/news-and-information/press-releases/harter-secrest-emery-leads-in-chambers-usa-2026-ranking-among-upstate-new-york-law-firms/"
    },
    {
     "k": "M&A and corporate attorneys",
     "n": "Jeremy J. Wolk",
     "lead": "Lippes Mathias (Rochester)",
     "t": "Listed in Best Lawyers 2027 for Mergers and Acquisitions Law.",
     "src": "https://www.lippes.com/insights/115-lippes-mathias-attorneys-recognized-in-the-2027-edition-of-the-best-lawyers-in-america-3193"
    },
    {
     "k": "Trusts & estates attorneys",
     "n": "Stephanie T. Seiffert",
     "lead": "Nixon Peabody",
     "t": "Best Lawyers 2027 Lawyer of the Year, Rochester, for Trusts and Estates.",
     "src": "https://www.nixonpeabody.com/about/media/2026/08/20/the-best-lawyers-in-america-recognizes-285-nixon-peabody-attorneys-12-as-lawyer-of-the-year"
    },
    {
     "k": "Trusts & estates attorneys",
     "n": "Rachelle Nuhfer · Lisa Arrington",
     "lead": "Barclay Damon (Rochester)",
     "t": "Both listed for Trusts and Estates in Best Lawyers 2027; Nuhfer was Lawyer of the Year for Closely Held Companies and Family Businesses Law, Arrington for Elder Law.",
     "src": "https://www.barclaydamon.com/press-releases/184-barclay-damon-attorneys-listed-in-2027-editions-of-the-best-lawyers-in-america-and-the-best-lawyers-ones-to-watch-in-america"
    },
    {
     "k": "Nonprofit CPAs",
     "n": "The Bonadio Group",
     "lead": "Not-for-profit contacts: Thomas Gianatasio (Regional Managing Partner, Capital Region) and Jeffrey Paille",
     "t": "Cause IQ lists 1,601 nonprofit clients under Bonadio & Co..",
     "src": "https://causeiq.com/vendors/bonadio-and-co-llp,4470344930181886080"
    },
    {
     "k": "Nonprofit CPAs",
     "n": "MMB+CO · EFPR Group",
     "lead": "512 and 223 nonprofit clients (Cause IQ)",
     "t": "Rochester's other large nonprofit audit practices by client count.",
     "src": "https://causeiq.com/vendors/efpr-group-cpas-pllc,4480984402521025685"
    }
   ],
   "cny": [
    {
     "k": "Law firms",
     "n": "Bond, Schoeneck & King PLLC",
     "lead": "Brian J. Butler, Chair (since 2024)",
     "t": "Syracuse-based. Butler, a litigator, succeeded Kevin M. Bernstein and was named to City & State's 2026 Upstate Power 100.",
     "web": "https://www.bsk.com",
     "src": "https://www.bsk.com/news-events-videos/brian-j-butler-named-to-2026-upstate-power-100-by-city-and-state-new-york"
    },
    {
     "k": "Law firms",
     "n": "Barclay Damon LLP",
     "lead": "M. Cornelia (Connie) Cahill, Managing Partner; David Burch, Deputy Managing Partner",
     "t": "Syracuse-rooted firm with offices including Boston and New Haven. 184 attorneys listed in Best Lawyers 2027.",
     "web": "https://www.barclaydamon.com",
     "src": "https://www.barclaydamon.com/press-releases/barclay-damon-announces-2026-changes-to-leadership-teams"
    },
    {
     "k": "Law firms",
     "n": "Hancock Estabrook, LLP",
     "lead": "Timothy P. Murphy, Managing Partner (since 2018)",
     "t": "Syracuse firm; 32 attorneys in Best Lawyers 2027. Added Ithaca's Barney, Grossman & Dubow.",
     "web": "https://www.hancocklaw.com",
     "src": "https://www.hancocklaw.com/people/timothy-p-murphy/"
    },
    {
     "k": "CPA firms",
     "n": "Dannible & McKee, LLP",
     "lead": "Victor W. Vaccaro Jr., Managing Partner (from July 1, 2026)",
     "t": "Syracuse CPA firm with 140+ professionals in Syracuse, Auburn, Binghamton, Schenectady and Tampa. Vaccaro succeeded the retiring Christopher Didio.",
     "src": "https://capitalregionchamber.com/news/dannible-mckee-names-victor-w-vaccaro-jr-managing-partner-to-lead-firms-next-chapter-of-growth/"
    },
    {
     "k": "CPA firms",
     "n": "Grossman St. Amour CPAs",
     "lead": "Managing partner not confirmed this pass",
     "t": "Syracuse CPA firm. Cause IQ lists 142 nonprofit clients, including Munson-Williams-Proctor Arts Institute and ProLiteracy Worldwide.",
     "src": "https://www.causeiq.com/vendors/grossman-st-amour-cpas-pllc,4470347585330333886/"
    },
    {
     "k": "M&A and corporate attorneys",
     "n": "Philip S. Bousquet",
     "lead": "Bousquet Holstein PLLC",
     "t": "Carries a Best Lawyers 2027 Lawyer of the Year badge in Syracuse; listed for Corporate Law.",
     "src": "https://www.bestlawyers.com/united-states/new-york/syracuse"
    },
    {
     "k": "M&A and corporate attorneys",
     "n": "Zachary R. Benjamin",
     "lead": "Costello, Cooney & Fearon",
     "t": "Listed in Best Lawyers 2027 for Mergers and Acquisitions Law, Syracuse.",
     "src": "https://www.ccf-law.com/costello-cooney-fearon-proudly-announces-attorneys-named-2027-best-lawyers/"
    },
    {
     "k": "Trusts & estates attorneys",
     "n": "Cora A. Alsante",
     "lead": "Hancock Estabrook",
     "t": "Best Lawyers 2027 Lawyer of the Year, Syracuse, for Trusts and Estates.",
     "src": "https://www.hancocklaw.com/news/32-hancock-estabrook-attorneys-recognized-by-the-best-lawyers-in-america-2027/"
    },
    {
     "k": "Trusts & estates attorneys",
     "n": "Robert W. Connolly",
     "lead": "Costello, Cooney & Fearon",
     "t": "Listed in Best Lawyers 2027 for Trusts and Estates litigation, Syracuse.",
     "src": "https://www.ccf-law.com/costello-cooney-fearon-proudly-announces-attorneys-named-2027-best-lawyers/"
    },
    {
     "k": "Nonprofit CPAs",
     "n": "Grossman St. Amour CPAs",
     "lead": "142 nonprofit clients (Cause IQ)",
     "t": "Largest nonprofit client count found for a Central New York firm this pass; Dannible & McKee's count wasn't available.",
     "src": "https://www.causeiq.com/vendors/grossman-st-amour-cpas-pllc,4470347585330333886/"
    }
   ],
   "alb": [
    {
     "k": "Law firms",
     "n": "Whiteman Osterman & Hanna LLP",
     "lead": "Managing partner not confirmed this pass",
     "t": "Albany firm; 23 attorneys across 17 practice areas named to Best Lawyers 2027.",
     "web": "https://woh.com",
     "src": "https://www.woh.com/news/3400/23-Whiteman-Osterman-Hanna-Attorneys-Named-to-Best-Lawyers-Lists-for-2027/"
    },
    {
     "k": "CPA firms",
     "n": "BST Gallagher Flynn",
     "lead": "Ron Guzior (BST & Co.) and Jason Hamilton (Gallagher, Flynn & Co.), managing partners of the merging firms",
     "t": "Latham's BST & Co. CPAs, which turned 50 in 2026, merged with South Burlington, Vt.-based Gallagher, Flynn & Co. in August 2026. Leadership of the combined firm wasn't stated.",
     "src": "https://www.cpapracticeadvisor.com/2026/08/19/bst-co-and-gallagher-flynn-merge-to-form-bst-gallagher-flynn/188762/"
    },
    {
     "k": "CPA firms",
     "n": "Teal Becker & Chiaramonte, CPAs",
     "lead": "Managing partner not confirmed this pass",
     "t": "Albany CPA firm. Cause IQ lists 167 nonprofit clients, including the New York State Sheriffs' Association.",
     "src": "https://www.causeiq.com/vendors/teal-becker-and-chiaramonte-cpas-pc,4471153040164304194"
    },
    {
     "k": "CPA firms",
     "n": "The Bonadio Group (Capital Region)",
     "lead": "Thomas Gianatasio, Regional Managing Partner, Capital Region",
     "t": "Gianatasio is also a named contact for Bonadio's not-for-profit practice.",
     "web": "https://www.bonadio.com",
     "src": "https://www.bonadio.com/industries/public-sector-not-for-profit/not-for-profit/"
    },
    {
     "k": "Nonprofit CPAs",
     "n": "Teal Becker & Chiaramonte · Bonadio (Capital Region)",
     "lead": "167 nonprofit clients (Teal Becker, Cause IQ)",
     "t": "Bonadio's statewide nonprofit book (1,601 clients) is led in part from its Capital Region office.",
     "src": "https://www.causeiq.com/vendors/teal-becker-and-chiaramonte-cpas-pc,4471153040164304194"
    }
   ]
  },
  nextUp: [
    "Service Providers: Albany M&A and trusts & estates attorneys; managing partners at Lumsden McCormick, MMB+CO, Grossman St. Amour, Teal Becker and Whiteman Osterman & Hanna; Dannible & McKee and BST nonprofit client counts",
    "Rochester-area and Capital Region Assembly results (2026) and Monroe County Legislature",
    "Pending calls: SD-43, AD-126, AD-143, Erie County Clerk, Webster supervisor",
    "Political donors from NYS Board of Elections and FEC filings, by region",
    "Episcopal, Methodist and Black church communities with current leaders",
    "Asian communities, second layer: Korean, Filipino and Pakistani congregations; Jain and Sikh detail in Buffalo and Albany",
    "Utica, Binghamton, Watertown and North Country business detail",
    "Money in Motion: Capital Region real estate and M&A (thin in public sources), and merge deals from the earlier PDF digests",
    "Culture: confirm the Syracuse Orchestra's next music director; add Buffalo and Albany theater companies, Everson and Munson leadership; confirm heads at Canisius, St. Joe's, MPH and Aquinas; add club presidents and founding dates where clubs publish them",
    "Book list per region (histories and biographies)"
  ]
};
