// DRYRUN build test: dryrun.html is exactly the build of its sources; the money code (src/crypto.js, src/pyqr.js) and the device
// (src/sim/*.js) are frozen: their SHA-256 are in tests/fixtures/frozen.json, and a change to them needs a review, a new mutation run
// and a new fingerprint there. Also: the version agrees everywhere, the page loads nothing from outside, and the device's page text
// names no button DRYRUN does not have. Run: node tests/build.test.mjs
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';
import path from 'node:path';
import nc from 'node:crypto';
const require = createRequire(import.meta.url);
const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..'), rd = (f) => fs.readFileSync(path.join(root, f), 'utf8');
let pass = 0; const fails = []; const ok = (c, m) => { console.log((c ? 'PASS ' : 'FAIL ') + m); c ? pass++ : fails.push(m); };
ok(require(path.join(root, 'tools', 'build.js')).build() === rd('dryrun.html'), 'dryrun.html is the build of the sources (run node tools/build.js)');
const fz = JSON.parse(rd('tests/fixtures/frozen.json')), sha = (f) => nc.createHash('sha256').update(fs.readFileSync(path.join(root, f))).digest('hex');
for (const [f, h] of Object.entries(fz)) ok(sha(f) === h, f + ' is frozen (sha256 ' + h.slice(0, 12) + '...)');
ok(fs.readdirSync(path.join(root, 'src/sim')).filter((x) => x.endsWith('.js')).every((x) => fz['src/sim/' + x]), 'every device source file is in the frozen list');
const v = (rd('dryrun.html').match(/DRYRUN v(\d+\.\d+\.\d+)/) || [])[1], pj = JSON.parse(rd('package.json')).version;
ok(v && v === pj && rd('src/app.js').includes('DR_VERSION = "' + v + '"') && rd('sw.js').includes("'dryrun-" + v + "'"), 'the version agrees: page footer, package.json, app.js and the offline cache (' + v + ', ' + pj + ')');
ok(/default-src 'none'/.test(rd('dryrun.html')) && !/<script[^>]+src=|<link[^>]+href="(?!data:)|<img[^>]+src="(?!data:)/i.test(rd('dryrun.html')), 'dryrun.html loads nothing from outside: no script, style sheet or image from a URL (the logo is built in as data)');
{ const lines = ['ss_own.js', 'ss_learn.js', 'ss_page.js'].flatMap((f) => rd('src/sim/' + f).split('\n')).filter((l) => !/^\s*\/\//.test(l) && /LOAD INTO THE PRACTICE SIGNER|YOUR SEED|MAKE A SEED/.test(l.replace(/\/\/.*$/, '')));
  // left only in a one-click load (ssAuto*, vfSignerLoadSeed) and FORGE SEED (ssForgeGo) that nothing in DRYRUN starts
  const unreach = lines.every((l) => /ssAutoEnd\(|SS_AUTO_WENT_ONLINE|is shown in MAKE A SEED/.test(l));
  const html = rd('dryrun.html'), app = rd('src/app.js') + rd('src/page.html') + rd('src/ssbox.html');
  ok(unreach && !/vfSignerLoadSeed|seedToSigner|ssForgeGo/.test(app) && !html.includes('id="ssForgeBtn"'), 'the device\'s page text names no button DRYRUN does not have (' + lines.length + ' lines left, all in paths DRYRUN never starts)'); }
console.log(`\nbuild: ${pass} passed, ${fails.length} failed`); process.exit(fails.length ? 1 : 0);
