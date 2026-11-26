// DRYRUN mutation run (grid item 10): the money code only (items 1-5). Every money declaration of the built page (tests/money.mjs:
// crypto.js from the original page, SeedSigner's dice and coin functions, the page's own money functions) is changed one small step at a
// time (a comparison, an operator, a number, a condition), and the fast money test (tests/money.test.mjs) must fail for each
// change. A change it does not notice "survives" and is listed for a person to judge (some changes do the same thing).
// Each change runs in its own worker with a time limit (a change that hangs counts as caught).
// Run: node tests/mutation.test.mjs [--jobs 4] [--only name,name] [--limit N]     results: tests/fixtures/mutation-result.json
import { Worker, isMainThread, parentPort, workerData } from 'node:worker_threads';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import nc from 'node:crypto';
const require = createRequire(import.meta.url);
const here = path.dirname(fileURLToPath(import.meta.url));
const acorn = require('acorn'), walk = require('acorn-walk');

if (!isMainThread) {
  const { moneyScript, loadMoney } = await import('./money.mjs');
  const { moneyCheck } = await import('./money.test.mjs');
  parentPort.on('message', async ({ html, part, text }) => {
    let r;
    try { const M = loadMoney(moneyScript(html, part === null ? null : { index: part, text })); const bad = await moneyCheck(M, true); r = bad.length ? { caught: true, by: bad[0] } : { caught: false }; }
    catch (e) { r = { caught: true, by: 'error: ' + String(e && e.message || e).slice(0, 80) }; }
    parentPort.postMessage(r);
  });
} else {
  const { moneyParts, readPage } = await import('./money.mjs');
  const arg = (k, d) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : d; };
  const JOBS = +arg('--jobs', Math.max(1, Math.min(4, os.cpus().length))), ONLY = arg('--only', ''), LIMIT = +arg('--limit', 0), TMO = +arg('--timeout', 60000);
  const html = readPage(), { list } = moneyParts(html);
  const SWAP = { '===': ['!=='], '!==': ['==='], '==': ['!='], '!=': ['=='], '<': ['<=', '>='], '<=': ['<', '>'], '>': ['>=', '<='], '>=': ['>', '<'],
    '+': ['-'], '-': ['+'], '*': ['/'], '/': ['*'], '%': ['*'], '&': ['|'], '|': ['&'], '^': ['|'], '<<': ['>>'], '>>': ['<<'], '>>>': ['>>'], '&&': ['||'], '||': ['&&'], '??': ['||'] };
  const stringy = (x) => x && (x.type === 'Literal' && typeof x.value === 'string' || x.type === 'TemplateLiteral' || (x.type === 'BinaryExpression' && x.operator === '+' && (stringy(x.left) || stringy(x.right))) || (x.type === 'ConditionalExpression' && (stringy(x.consequent) || stringy(x.alternate))));
  const mutants = [];
  list.forEach((p, pi) => {
    if (ONLY && !ONLY.split(',').some((n) => p.names.includes(n))) return;
    if (/^ss_seeds\.js/.test(p.blockName)) return;   // the simulator's own seed class, reached only for its word list: the simulator test covers it
    let ast; try { ast = acorn.parse(p.text, { ecmaVersion: 2022 }); } catch (e) { return; }
    const add = (s, e, txt, what) => mutants.push({ part: pi, name: p.name, text: p.text.slice(0, s) + txt + p.text.slice(e), what, at: s });
    walk.full(ast, (n) => {
      if ((n.type === 'BinaryExpression' || n.type === 'LogicalExpression') && SWAP[n.operator]) {
        const opAt = p.text.indexOf(n.operator, n.left.end); if (opAt < 0 || opAt >= n.right.start) return;
        for (const o of SWAP[n.operator]) { if (n.operator === '+' && (stringy(n.left) || stringy(n.right))) continue;   // building a message, not money
          add(opAt, opAt + n.operator.length, o, n.operator + ' -> ' + o); }
      } else if (n.type === 'Literal' && typeof n.value === 'number') {
        add(n.start, n.end, String(n.value === 0 ? 1 : n.value + 1), n.raw + ' -> ' + (n.value === 0 ? 1 : n.value + 1));
      } else if (n.type === 'UnaryExpression' && n.operator === '!') {
        add(n.start, n.argument.start, '', 'drop !');
      } else if (n.type === 'IfStatement') {
        add(n.test.start, n.test.end, 'false', 'if (...) -> if (false)');
      } else if (n.type === 'ConditionalExpression') {
        add(n.test.start, n.test.end, '(false)', '?: -> always the second');
      }
    });
  });
  // the plan: every change, in a fixed order; with --limit, an even sample of it
  let plan = mutants; if (LIMIT && plan.length > LIMIT) { const step = plan.length / LIMIT; plan = Array.from({ length: LIMIT }, (_, i) => plan[Math.floor(i * step)]); }
  console.log(`mutation: ${list.length} money declarations, ${mutants.length} changes${plan !== mutants ? ', running ' + plan.length : ''}, ${JOBS} at a time`);
  const mk = () => new Worker(fileURLToPath(import.meta.url), { workerData: {}, resourceLimits: { maxOldGenerationSizeMb: 1024 } });
  const run1 = (w, m) => new Promise((res) => {
    const t = setTimeout(() => { w.removeAllListeners('message'); w.removeAllListeners('error'); w.terminate(); res({ caught: true, by: 'timeout', dead: true }); }, TMO);
    const done = (r) => { clearTimeout(t); w.removeAllListeners('message'); w.removeAllListeners('error'); res(r); };
    w.once('message', done); w.once('error', (e) => done({ caught: true, by: 'worker error: ' + e.message, dead: true }));
    w.postMessage({ html, part: m ? m.part : null, text: m ? m.text : null });
  });
  // the unchanged code must pass first
  { const w = mk(), r = await run1(w, null); await w.terminate(); if (r.caught) { console.log('FAIL the unchanged money code does not pass the money test: ' + r.by); process.exit(1); } console.log('PASS the unchanged money code passes the money test'); }
  const t0 = Date.now(); let done = 0, caught = 0; const survived = [], timeouts = [];
  const queue = plan.map((m, i) => ({ m, i }));
  await Promise.all(Array.from({ length: JOBS }, async () => {
    let w = mk();
    while (queue.length) {
      const { m } = queue.shift(); const r = await run1(w, m);
      if (r.dead) w = mk();
      done++; if (r.caught) { caught++; if (r.by === 'timeout') timeouts.push(m.name + ': ' + m.what); } else survived.push({ name: m.name, what: m.what, at: m.at, line: m.text.slice(0, m.at).split('\n').length, snippet: m.text.slice(Math.max(0, m.at - 50), m.at + 50).replace(/\s+/g, ' ') });
      if (done % 100 === 0) console.log(`  ${done}/${plan.length} done, ${caught} caught, ${survived.length} survived (${Math.round((Date.now() - t0) / 1000)} s)`);
    }
    await w.terminate();
  }));
  const score = plan.length ? caught / plan.length : 1;
  const out = { page: nc.createHash('sha256').update(html).digest('hex'), changes: plan.length, caught, survived, timeouts: timeouts.length, seconds: Math.round((Date.now() - t0) / 1000) };
  fs.writeFileSync(path.join(here, 'fixtures', 'mutation-result.json'), JSON.stringify(out, null, 1) + '\n');
  for (const s of survived) console.log(`SURVIVED ${s.name} line ${s.line}: ${s.what}   ...${s.snippet}...`);
  console.log(`\nmutation: ${caught} of ${plan.length} changes caught (${(score * 100).toFixed(1)}%), ${survived.length} survived, ${timeouts.length} by timeout, ${out.seconds} s`);
}
