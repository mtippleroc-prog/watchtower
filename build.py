"""Build WatchTower: inline app/data.js into app/app_template.html -> dist/watchtower.html.
Usage: python3 build.py   (then publish dist/watchtower.html to the WatchTower artifact URL)"""
import pathlib, re, subprocess, sys
root = pathlib.Path(__file__).parent
data = (root/'app'/'data.js').read_text()
tpl = (root/'app'/'app_template.html').read_text()
assert '/*DATA*/' in tpl, 'template is missing the /*DATA*/ placeholder'
html = tpl.replace('/*DATA*/', data)
out = root/'dist'/'watchtower.html'
out.parent.mkdir(exist_ok=True)
out.write_text(html)
# syntax-check the page's scripts with node, if available
js = '\n'.join(re.findall(r'<script>(.*?)</script>', html, re.S))
chk = root/'dist'/'_check.js'; chk.write_text(js)
try:
    r = subprocess.run(['node', '--check', str(chk)], capture_output=True, text=True)
    if r.returncode: print(r.stderr); sys.exit('BUILD FAILED: script syntax error')
except FileNotFoundError:
    print('node not found; skipped syntax check')
finally:
    chk.unlink(missing_ok=True)
print(f'built {out} ({len(html):,} bytes)')
