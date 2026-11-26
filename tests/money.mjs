// The DRYRUN money code as one script, for the fast money test and the mutation run (grid items 1-5, 10).
// It is taken from the built page itself (dryrun.html), so it is exactly what ships: the money code (crypto.js), SeedSigner's dice
// and coin-flip functions from the simulator, and the page's own money functions (app.js). Only the declarations reachable from
// ROOTS are kept, in page order. moneyParts() also says where each declaration is, so the mutation run can change one at a time.
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import nc from 'node:crypto';
const require = createRequire(import.meta.url);
const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const { topDecls } = require(path.join(root, 'tools', 'deps.js'));
export const ROOTS = ['entropyToMnemonic', 'mnemonicToSeed', 'fingerprintFromSeed', 'watchOnlyFromSeed', 'checkPhrase', 'rollsToMnemonic', 'cdParse', 'cdBits', 'cdRaw',
  'seedQrData', 'seedQrMatrix', 'phraseEntropyHex', 'WORDLIST', 'ssGenerateMnemonicFromDice', 'ssGenerateMnemonicFromCoinFlips',
  'drEntropyRead', 'drEntropyWords', 'drJoin', 'drBackup', 'ssPySeedQrMatrix', 'drBip39', 'drSeedQrDecode', 'drMsg', 'DR_BITS', 'DR_TYPES'];
// the page's script blocks (as tools/build.js writes them), by the name in their first comment
export function pageScripts(html) {
  const out = []; for (const m of html.matchAll(/<script>\n"use strict";\n\/\/ DRYRUN: ([^\n]*)\n([\s\S]*?)\n<\/script>/g)) out.push({ name: m[1], code: m[2] }); return out;
}
// the money declarations: [{name, block, start, end, text}] in page order, and the script that defines them
export function moneyParts(html) {
  const blocks = pageScripts(html), decls = [];
  blocks.forEach((b, bi) => { for (const d of topDecls(b.code, true).decls) decls.push({ ...d, block: bi }); });
  const byName = new Map(); for (const d of decls) for (const n of d.names) if (!byName.has(n)) byName.set(n, d);
  const seen = new Set(), q = [...ROOTS];
  while (q.length) { const n = q.pop(), d = byName.get(n); if (!d || seen.has(d)) continue; seen.add(d); for (const r of d.refs) if (byName.has(r) && !seen.has(byName.get(r))) q.push(r); }
  // table-filling statements (no names) whose names are all money names
  const have = new Set([...seen].flatMap((d) => d.names));
  for (const d of decls) if (!d.names.length && [...d.refs].some((r) => have.has(r)) && [...d.refs].every((r) => have.has(r) || !byName.has(r))) seen.add(d);
  const list = decls.filter((d) => seen.has(d)).map((d) => ({ name: d.names[0] || '(statement)', names: d.names, block: d.block, start: d.start, end: d.end, text: blocks[d.block].code.slice(d.start, d.end), blockName: blocks[d.block].name }));
  return { blocks, list };
}
export function moneyScript(html, change) {   // change: optional {index, text}: declaration number index replaced by a changed copy
  const { list } = moneyParts(html);
  return list.map((p, i) => (change && change.index === i ? change.text : p.text)).join('\n') + '\n;globalThis.M = {' + ROOTS.map((n) => n + ': typeof ' + n + ' === "undefined" ? undefined : ' + n).join(', ') + '};';
}
export function loadMoney(code, timeout = 20000) {
  const ctx = { console: { log() {}, warn() {}, error() {} }, TextEncoder, TextDecoder, crypto: nc.webcrypto, Uint8Array, setTimeout, clearTimeout, performance };
  vm.createContext(ctx); vm.runInContext(code, ctx, { timeout });
  return ctx.M;
}
export const readPage = () => fs.readFileSync(process.env.DR_FILE || path.join(root, 'dryrun.html'), 'utf8');
