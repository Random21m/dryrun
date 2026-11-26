// DRYRUN screens test (grid item 6, second part): the device screens look exactly as recorded for the first release.
// The same device keys are pressed and, after each press, the device's screen (the canvas pixels) must match the fingerprint
// in tests/fixtures/screens.json. Also: every main menu entry opens a screen and the back button returns to the menu it came from.
// Run: node tests/screens.test.mjs
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import nc from 'node:crypto';
import fs from 'node:fs';
const require = createRequire(import.meta.url);
const pw = require('playwright-core');
const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const NEW = 'file://' + (process.env.DR_FILE || path.join(root, 'dryrun.html'));
let pass = 0; const fails = []; const ok = (c, m) => { console.log((c ? 'PASS ' : 'FAIL ') + m); c ? pass++ : fails.push(m); };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const b = await pw.chromium.launch();
async function open(url) {
  const ctx = await b.newContext({ viewport: { width: 1100, height: 900 }, deviceScaleFactor: 1 }); await ctx.setOffline(true);
  const p = await ctx.newPage(), errs = []; p.on('pageerror', (e) => errs.push(e.message)); p.on('dialog', (d) => d.accept());
  await p.goto(url); await p.waitForFunction(() => window.selfTestDone !== undefined, null, { timeout: 90000 }); await p.evaluate(() => window.selfTestDone);
  await p.waitForFunction(() => { const c = SSController._instance; return c && c.current_destination && c.current_destination.View_cls && c.current_destination.View_cls.name === 'SSMainMenuView'; }, null, { timeout: 90000 });
  return { p, errs };
}
// the device's state: its view, and the screen's pixels once they have stopped changing
async function shot(p) {
  let last = '', same = 0;
  for (let i = 0; i < 80; i++) {
    const s = await p.evaluate(() => { const c = document.getElementById('ssScreen'), d = c.getContext('2d').getImageData(0, 0, c.width, c.height).data; const v = SSController._instance.current_destination; return { v: v && v.View_cls ? v.View_cls.name : '', px: Array.from(d.subarray(0, d.length)).join(',').length + ':' + d.reduce((a, x, k) => (a * 31 + x * (k % 7 + 1)) >>> 0, 7), w: c.width }; });
    const key = s.v + '|' + s.w + '|' + s.px;
    if (key === last) { if (++same >= 3) return { view: s.v, hash: nc.createHash('sha256').update(key).digest('hex').slice(0, 16) }; } else { same = 0; last = key; }
    await sleep(120);
  }
  return { view: 'unsettled', hash: last };
}
const press = (p, k) => p.evaluate((k) => { const h = SSHardwareButtons._instance; h.key_down(k); setTimeout(() => h.key_up(k), 60); }, k);
const PATHS = [
  ['Home', []],
  ['Home after down and up', ['KEY_DOWN', 'KEY_UP']],
  ['Seeds', ['KEY_RIGHT', 'KEY_PRESS']],
  ['Seeds > Enter 12-word seed', ['KEY_RIGHT', 'KEY_PRESS', 'KEY_DOWN', 'KEY_DOWN', 'KEY_PRESS']],
  ['Tools', ['KEY_DOWN', 'KEY_PRESS']],
  ['Tools > New seed (image)', ['KEY_DOWN', 'KEY_PRESS', 'KEY_PRESS']],
  ['Tools > New seed with dice', ['KEY_DOWN', 'KEY_PRESS', 'KEY_DOWN', 'KEY_PRESS']],
  ['Tools > dice, 12 words', ['KEY_DOWN', 'KEY_PRESS', 'KEY_DOWN', 'KEY_PRESS', 'KEY_PRESS']],
  ['Tools > Calc 12th word', ['KEY_DOWN', 'KEY_PRESS', 'KEY_DOWN', 'KEY_DOWN', 'KEY_PRESS']],
  ['Tools > Address explorer', ['KEY_DOWN', 'KEY_PRESS', 'KEY_DOWN', 'KEY_DOWN', 'KEY_DOWN', 'KEY_PRESS']],
  ['Settings', ['KEY_DOWN', 'KEY_RIGHT', 'KEY_PRESS']],
  ['Settings > second entry', ['KEY_DOWN', 'KEY_RIGHT', 'KEY_PRESS', 'KEY_DOWN', 'KEY_PRESS']],
  ['Settings > Advanced', ['KEY_DOWN', 'KEY_RIGHT', 'KEY_PRESS', 'KEY_DOWN', 'KEY_DOWN', 'KEY_DOWN', 'KEY_PRESS']],
  ['Home, then KEY3', ['KEY3']],
];
const FIX = path.join(root, 'tests', 'fixtures', 'screens.json');
const B = await open(NEW), saved = JSON.parse(fs.readFileSync(FIX, 'utf8'));
for (const [name, keys] of PATHS) {
  const r = [];
  for (const x of [B]) {
    await x.p.evaluate(() => { document.getElementById('ssBox').open = false; }); await x.p.waitForFunction(() => !ssPageOn && !SSController._instance, null, { timeout: 30000 });
    await x.p.evaluate(() => { document.getElementById('ssBox').open = true; });
    await x.p.waitForFunction(() => { const c = SSController._instance; return c && c.current_destination && c.current_destination.View_cls && c.current_destination.View_cls.name === 'SSMainMenuView'; }, null, { timeout: 90000 });
    await shot(x.p);
    for (const k of keys) { await press(x.p, k); await sleep(250); await shot(x.p); }
    r.push(await shot(x.p));
  }
  r.unshift(saved[name] || { view: 'none', hash: 'none' });
  ok(r[0].view !== 'unsettled' && r[0].view === r[1].view && r[0].hash === r[1].hash, 'screen "' + name + '": the same view (' + r[1].view + ') and the same pixels as recorded (' + r[0].hash + ' / ' + r[1].hash + ')');
}
// the back button: from each main menu entry, back returns to Home
for (const [name, keys] of [['Seeds', ['KEY_RIGHT', 'KEY_PRESS']], ['Tools', ['KEY_DOWN', 'KEY_PRESS']], ['Settings', ['KEY_DOWN', 'KEY_RIGHT', 'KEY_PRESS']]]) {
  const x = B; await x.p.evaluate(() => { document.getElementById('ssBox').open = false; }); await x.p.waitForFunction(() => !SSController._instance, null, { timeout: 30000 });
  await x.p.evaluate(() => { document.getElementById('ssBox').open = true; });
  await x.p.waitForFunction(() => { const c = SSController._instance; return c && c.current_destination && c.current_destination.View_cls && c.current_destination.View_cls.name === 'SSMainMenuView'; }, null, { timeout: 90000 });
  for (const k of keys) { await press(x.p, k); await sleep(300); }
  const inside = (await shot(x.p)).view;
  await press(x.p, 'KEY_LEFT'); await sleep(300); await press(x.p, 'KEY_PRESS'); await sleep(300);   // the back arrow is on top-left: LEFT selects it (from a list, UP; try both)
  let v = (await shot(x.p)).view;
  if (v !== 'SSMainMenuView') { await press(x.p, 'KEY_UP'); await sleep(300); await press(x.p, 'KEY_PRESS'); await sleep(300); v = (await shot(x.p)).view; }
  ok(inside !== 'SSMainMenuView' && v === 'SSMainMenuView', 'back: ' + name + ' (' + inside + ') goes back to Home');
}
ok(!B.errs.length, 'no page error in either page (' + B.errs.slice(0, 2).join(' | ') + ')');
await b.close();
console.log(`\nscreens: ${pass} passed, ${fails.length} failed`); process.exit(fails.length ? 1 : 0);
