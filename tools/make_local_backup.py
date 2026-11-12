"""Make WatchTower's laptop backup bundle.

Usage: python3 tools/make_local_backup.py <repo> <outdir>
Writes into <outdir>:
  watchtower_backup.zip   - every tracked file at HEAD (git archive) plus the built app
  WatchTower_offline.html - the built app, which opens in any browser without Claude
  mirror/                 - every tracked file at HEAD, laid out as in the repo
  manifest.json           - commit, date and counts for BACKUPS.md
Prints "BACKUP NOT MADE: <reason>" and exits 1 if a check fails.
"""
import json, pathlib, re, shutil, subprocess, sys, zipfile, datetime

def fail(msg):
    print("BACKUP NOT MADE:", msg); sys.exit(1)

if len(sys.argv) != 3: fail("usage: make_local_backup.py <repo> <outdir>")
repo, out = pathlib.Path(sys.argv[1]).resolve(), pathlib.Path(sys.argv[2]).resolve()
out.mkdir(parents=True, exist_ok=True)

r = subprocess.run([sys.executable, str(repo/'build.py')], capture_output=True, text=True)
if r.returncode: fail("build failed: " + (r.stdout + r.stderr).strip()[-400:])
built = repo/'dist'/'watchtower.html'
html = built.read_text()
if '<title>WatchTower' not in html or len(html) < 50_000: fail("built page looks wrong (title or size)")

head = subprocess.run(['git', '-C', str(repo), 'rev-parse', 'HEAD'], capture_output=True, text=True).stdout.strip()
if not head: fail("not a git repo")
files = subprocess.run(['git', '-C', str(repo), 'ls-files'], capture_output=True, text=True).stdout.split()

# offline copy, marked so it is recognisable
stamp = datetime.date.today().isoformat()
offline = html.replace('<title>WatchTower</title>', f'<title>WatchTower</title>\n<!-- WatchTower offline copy, built {stamp} from commit {head[:7]} -->', 1)
(out/'WatchTower_offline.html').write_text(offline)

mirror = out/'mirror'
if mirror.exists(): shutil.rmtree(mirror)
for f in files:
    dst = mirror/f; dst.parent.mkdir(parents=True, exist_ok=True); shutil.copy2(repo/f, dst)

zp = out/'watchtower_backup.zip'
with zipfile.ZipFile(zp, 'w', zipfile.ZIP_DEFLATED) as z:
    for f in files: z.write(repo/f, f)
    z.writestr('WatchTower_offline.html', offline)
with zipfile.ZipFile(zp) as z:
    if z.testzip() is not None: fail("zip failed its integrity test")

data = (repo/'app'/'data.js').read_text()
count = lambda key: len(re.findall(r'^\s*\{\s*"?d"?\s*:', data.split(key + ':', 1)[1].split('\n  ],', 1)[0], re.M)) if key + ':' in data else 0
manifest = {"date": stamp, "commit": head, "short": head[:7], "files": len(files),
            "deals": count('deals'), "news": count('news'), "zip_bytes": zp.stat().st_size,
            "offline_bytes": (out/'WatchTower_offline.html').stat().st_size}
(out/'manifest.json').write_text(json.dumps(manifest, indent=2))
print(json.dumps(manifest))
