// Sorts the survivors of the last mutation run (tests/fixtures/mutation-result.json) by whether the fast money test ever runs the
// code that was changed (V8 block coverage of the money script). A survivor in code that never runs cannot change any answer the
// money paths give; the others are listed for a person to judge. Run: node tests/mutation-coverage.mjs
import inspector from 'node:inspector';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import nc from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { moneyParts, moneyScript, readPage } from './money.mjs';
import { moneyCheck } from './money.test.mjs';
const here = path.dirname(fileURLToPath(import.meta.url));
const html = readPage(), { list } = moneyParts(html), code = moneyScript(html);
const res = JSON.parse(fs.readFileSync(path.join(here, 'fixtures', 'mutation-result.json'), 'utf8'));
const s = new inspector.Session(); s.connect();
const post = (m, p) => new Promise((ok, no) => s.post(m, p || {}, (e, r) => (e ? no(e) : ok(r))));
await post('Profiler.enable'); await post('Profiler.startPreciseCoverage', { callCount: true, detailed: true });
const ctx = { console: { log() {}, warn() {}, error() {} }, TextEncoder, TextDecoder, crypto: nc.webcrypto, Uint8Array, setTimeout, clearTimeout, performance };
vm.createContext(ctx); vm.runInContext(code, ctx, { filename: 'dryrun-money-under-test.js' });
const bad = await moneyCheck(ctx.M);
const cov = (await post('Profiler.takePreciseCoverage')).result.find((x) => x.url.endsWith('dryrun-money-under-test.js'));
if (bad.length || !cov) { console.log('the money test must pass and be measured first', bad, !!cov); process.exit(1); }
const ranges = cov.functions.flatMap((f) => f.ranges);
const count = (off) => { let best = null; for (const r of ranges) if (r.startOffset <= off && off < r.endOffset && (!best || r.endOffset - r.startOffset < best.endOffset - best.startOffset)) best = r; return best ? best.count : 0; };
const start = []; let o = 0; for (const p of list) { start.push(o); o += p.text.length + 1; }
const ran = [], never = [];
for (const v of res.survived) {
  const cands = list.map((p, i) => i).filter((i) => list[i].name === v.name);
  const off = cands.length ? start[cands[0]] + v.at : -1;
  (off >= 0 && count(off) > 0 ? ran : never).push(v);
}
const by = (a) => Object.entries(a.reduce((m, v) => ((m[v.name] = (m[v.name] || 0) + 1), m), {})).sort((x, y) => y[1] - x[1]).map(([k, n]) => k + ' ' + n).join(', ');
console.log(`survivors: ${res.survived.length}; in code the money test never runs: ${never.length}; in code it runs: ${ran.length}`);
console.log('never run, by declaration: ' + by(never));
console.log('run, by declaration: ' + by(ran));
fs.writeFileSync(path.join(here, 'fixtures', 'mutation-survivors-run.json'), JSON.stringify(ran, null, 1) + '\n');
