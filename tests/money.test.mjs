// DRYRUN fast money test (grid items 1-5, no browser): the money code taken from the built page (tests/money.mjs) run in a
// sandbox and checked against independent code and published vectors. tests/core.test.mjs checks the same through the page in a
// real browser; this one is quick, so the mutation run (tests/mutation.test.mjs) can run it once for every change.
// Run: node tests/money.test.mjs          export: moneyCheck(M) -> list of failed checks
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';
import path from 'node:path';
import nc from 'node:crypto';
import { moneyScript, loadMoney, readPage } from './money.mjs';
const require = createRequire(import.meta.url);
const bip39 = require('@scure/bip39');
const { wordlist } = require('@scure/bip39/wordlists/english');
const { HDKey } = require('@scure/bip32');
const btc = require('@scure/btc-signer');
const jsQR = require('jsqr');
const here = path.dirname(fileURLToPath(import.meta.url));
const sha = (s) => nc.createHash('sha256').update(s, 'utf8').digest();
const AB = 'abandon '.repeat(11) + 'about';
const VERS = { 84: { private: 0x04b2430c, public: 0x04b24746 }, 49: { private: 0x049d7878, public: 0x049d7cb2 }, 86: { private: 0x0488ade4, public: 0x0488b21e } };
const ADDR = { 84: (k) => btc.p2wpkh(k).address, 49: (k) => btc.p2sh(btc.p2wpkh(k)).address, 86: (k) => btc.p2tr(k.slice(1)).address };
const diceWords = (r, n) => bip39.entropyToMnemonic(new Uint8Array(sha(r).subarray(0, n === 12 ? 16 : 32)), wordlist);
// fixed inputs (no randomness, so every run of the mutation test checks the same things)
const det = (tag, n, k) => { let s = '', i = 0; while (s.length < n) { for (const b of sha(tag + ' ' + i++)) if (s.length < n && (k === 2 || b < 252)) s += k === 2 ? String(b & 1) : String(1 + (b % 6)); } return s; };
const SQ = JSON.parse(fs.readFileSync(path.join(here, 'fixtures', 'seedqr.json'), 'utf8'));
const V = JSON.parse(fs.readFileSync(path.join(here, 'fixtures', 'bip39-vectors-english.json'), 'utf8')).english;
const mn = (tag, n) => bip39.entropyToMnemonic(new Uint8Array(sha(tag).subarray(0, n * 4 / 3)), wordlist);
const KEYS = [[AB, ''], [AB, 'TREZOR'], [V[3][1], ''], [V[17][1], 'Ab1 x'], [mn('dr k24', 24), 'pässwörd'], [mn('dr k12', 12), '']].map(([m, p]) => {
  const r = HDKey.fromMasterSeed(bip39.mnemonicToSeedSync(m, p)), o = { m, p, fp: r.fingerprint.toString(16).padStart(8, '0') };
  for (const pu of [84, 49, 86]) { o['xpub' + pu] = HDKey.fromMasterSeed(bip39.mnemonicToSeedSync(m, p), VERS[pu]).derive(`m/${pu}'/0'/0'`).publicExtendedKey; o['addr' + pu] = ADDR[pu](r.derive(`m/${pu}'/0'/0'/0/0`).publicKey); }
  return o; });
const qrRead = (rows) => { const n = rows.length, q = 4, px = 4, W = (n + 2 * q) * px, d = new Uint8ClampedArray(W * W * 4).fill(255);
  for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) if (rows[y][x]) for (let dy = 0; dy < px; dy++) for (let dx = 0; dx < px; dx++) { const o = (((y + q) * px + dy) * W + (x + q) * px + dx) * 4; d[o] = d[o + 1] = d[o + 2] = 0; }
  const r = jsQR(d, W, W); return r ? { text: r.data, hex: Buffer.from(r.binaryData).toString('hex'), version: r.version } : null; };
// the backup-check layouts (v2.18.1 review M1 and round 4)
const vm = (m) => bip39.validateMnemonic(m, wordlist);
const pick = (n, tag) => { for (let i = 0; ; i++) { const m = mn(tag + ' ' + n + ' ' + i, n).split(' '), h = n / 2, rows = []; for (let r = 0; r < h; r++) rows.push(m[r], m[r + h]); if (vm(rows.join(' '))) return m; } };
const P12 = pick(12, 'm1 twocol'), P24 = pick(24, 'm1 twocol');
const two = (m, f = (i, x) => (i + 1) + '. ' + x, gap = '    ') => { const h = m.length / 2, rows = []; for (let r = 0; r < h; r++) rows.push(f(r, m[r]) + gap + f(r + h, m[r + h])); return rows.join('\n'); };
const half = (m, f = (k) => k + '.') => { const h = m.length / 2, L = []; for (let r = 0; r < h; r++) L.push(f(r + 1) + ' ' + m[r] + '    ' + m[r + h]); return L.join('\n'); };
const rows = (m, k, f = (n) => n + '.') => { const L = []; for (let i = 0; i < m.length; i += k) L.push(f(i + 1) + ' ' + m.slice(i, i + k).join(' ')); return L.join('\n'); };
const R12 = mn('f2 row 12', 12).split(' ');
const fpOf = (m, p = '') => HDKey.fromMasterSeed(bip39.mnemonicToSeedSync(m, p)).fingerprint.toString(16).padStart(8, '0');

class Stop extends Error {}
export async function moneyCheck(M, failFast = false) {
  const bad = []; const t = (c, m) => { if (!c) { bad.push(m); if (failFast) throw new Stop(m); } };
  try { await checks(M, t); } catch (e) { if (!(e instanceof Stop)) bad.push('stopped: ' + String(e && e.message || e).slice(0, 100)); }
  return bad;
}
async function checks(M, t) {
  const W = async (k, wc, x) => { const r = M.drEntropyRead(k, wc, x); return r.ok ? await M.drEntropyWords(r, wc) : 'REFUSED: ' + r.msg; };
  // 1. dice and coins
  t(await W('dice', 12, '65515223131652132161133154444123616466443112153441') === 'hole luggage safe present express tragic orbit shed switch metal identify path', 'dice: SeedSigner example');
  for (let i = 0; i < 3; i++) { const R = det('d12', 50 + i * 0, 6) + ''; const r = det('d12 ' + i, 50, 6); t(await W('dice', 12, r) === diceWords(r, 12), 'dice: 50 rolls ' + i); }
  for (let i = 0; i < 2; i++) { const r = det('d24 ' + i, 99, 6); t(await W('dice', 24, r) === diceWords(r, 24), 'dice: 99 rolls ' + i); }
  for (const [n, wc] of [[128, 12], [256, 24]]) { const b = det('c' + n, n, 2); t(await W('coin', wc, b) === diceWords(b, wc), 'coins: ' + n + ' bits'); t(await W('coin', wc, b.replace(/1/g, 'h').replace(/0/g, 't')) === diceWords(b, wc), 'coins: ' + n + ' h/t'); }
  t(/^REFUSED/.test(await W('dice', 12, det('x', 49, 6))) && /^REFUSED/.test(await W('dice', 12, det('x', 51, 6))) && /^REFUSED/.test(await W('dice', 24, det('x', 98, 6))), 'dice: wrong counts refused');
  t(/^REFUSED/.test(await W('dice', 12, det('x', 49, 6) + '7')) && /^REFUSED/.test(await W('dice', 12, det('x', 49, 6) + '0')), 'dice: 7 and 0 refused');
  t(/^REFUSED/.test(await W('coin', 12, det('x', 127, 2))) && /^REFUSED/.test(await W('coin', 12, det('x', 127, 2) + '2')) && /^REFUSED/.test(await W('coin', 12, 'HT'.repeat(63) + 'H1')), 'coins: wrong count, a 2, and mixed refused');
  // 2. cards
  const SU = { C: '♣', D: '♦', H: '♥', S: '♠' }, cs = (x) => x.split(' ').map((y) => y[0] + SU[y[1]]).join(' ');
  const expC = (x, n) => bip39.entropyToMnemonic(new Uint8Array(sha(cs(x)).subarray(0, n === 24 ? 32 : 16)), wordlist);
  const C25 = 'KS 3D 9H AC TC 5S JD 2H 8C QS 4D 7H 6C AH TS 9D 3C KH 5D JS 2S 8H QC 4H 7S';
  t(await W('cards', 12, C25) === expC(C25, 12), 'cards: hashed, 25 cards');
  t(await W('cards', 12, C25.toLowerCase().replace(/t/g, '10')) === expC(C25, 12), 'cards: lower case and 10');
  t(/^REFUSED/.test(await W('cards', 12, C25.split(' ').slice(0, 24).join(' '))) && /^REFUSED/.test(await W('cards', 12, C25 + ' ZZ')), 'cards: too few and a bad card refused');
  t(await W('cardsraw', 12, C25 + ' AD 2D 3H 4C 5C') === 'velvet beach salute key actual earn charge fix quick stove swing silk', 'cards: raw entropy, Ian Coleman');
  { const deck = []; for (const s of 'CDHS') for (const r of 'A23456789TJQK') deck.push(r + s); const D = deck.map((x, i) => [sha('deck' + i).readUInt32BE(0), x]).sort((a, b) => a[0] - b[0]).map((x) => x[1]).join(' ');
    t(/^REFUSED/.test(await W('cards', 24, D)), 'cards: one deck is too few for 24 words'); const D2 = D + ' ' + deck.slice(0, 7).join(' '); t(await W('cards', 24, D2) === expC(D2, 24), 'cards: a deck and 7 cards, 24 words'); }
  // 3. SeedQR
  for (const v of SQ.slice(0, 9)) {
    const w = v.words.split(' '), s = qrRead(M.seedQrMatrix(w, 'std').rows), c = qrRead(M.seedQrMatrix(w, 'compact').rows);
    t(s && s.text === v.digits && s.version === v.formats.seedqr.version, 'SeedQR: standard ' + v.digits.slice(0, 12));
    t(c && c.hex === v.entropy && c.version === v.formats.compact.version, 'SeedQR: compact ' + v.entropy.slice(0, 12));
    const H = (q) => nc.createHash('sha256').update(q.rows.map((r) => r.map((x) => (x ? 1 : 0)).join('')).join('')).digest('hex');
    t(H(M.ssPySeedQrMatrix(w, 'std')) === v.formats.seedqr.auto && H(M.ssPySeedQrMatrix(w, 'compact')) === v.formats.compact.auto, 'SeedQR: SeedSigner\'s mask ' + v.digits.slice(0, 12));
    t(await M.drSeedQrDecode(v.digits) === v.words && await M.drSeedQrDecode(Uint8Array.from(Buffer.from(v.entropy, 'hex'))) === v.words, 'SeedQR: decode ' + v.digits.slice(0, 12));
  }
  t(await M.drSeedQrDecode('1'.repeat(47)) === '' && await M.drSeedQrDecode('2048' + '0'.repeat(44)) === '' && await M.drSeedQrDecode('0'.repeat(48)) === '' && await M.drSeedQrDecode(new Uint8Array(15)) === '', 'SeedQR: bad input decodes to nothing');
  // 4. fingerprint, xpubs, first addresses (through the backup check)
  for (const k of KEYS) { const r = await M.drBackup(k.m, k.p); t(r.ok && r.fp === k.fp && [84, 49, 86].every((pu) => r['xpub' + pu] === k['xpub' + pu] && r['addr' + pu] === k['addr' + pu]), 'keys: ' + k.fp); }
  { const r = await M.drBackup(SQ[0].digits, ''), h = await M.drBackup('0'.repeat(32), ''); t(!r.ok && !h.ok, 'backup check: SeedQR digits and hex are refused'); }
  { const r = await M.drBackup('twenty lion wast logic giant now spare doll blame hint prevent theme', ''); t(r.ok && r.readAs.length === 1 && /wast.*waste/.test(r.readAs[0]), 'backup check: a word read from its first letters is named'); }
  // 5. backup check refusals
  const no = async (x, re, m) => { const r = await M.drBackup(x, ''); t(!r.ok && (!re || re.test(r.msg)), m + ' (' + String(r.msg).slice(0, 60) + ')'); };
  const yes = async (x, m, want) => { const r = await M.drBackup(x, ''); t(r.ok && r.fp === fpOf(want), m); };
  const m12 = mn('dr m12', 12).split(' ');
  { const w = [...m12]; w[5] = w[5] === 'zoo' ? 'abandon' : 'zoo'; if (vm(w.join(' '))) w[5] = 'wrong'; await no(w.join(' '), null, 'one wrong word'); }
  await no(m12.slice(0, 11).join(' '), /11/, 'a missing word'); await no(m12.slice(0, 11).join(' ') + ' qwerty', /Unknown word: qwerty/, 'an unknown word');
  await no(mn('dr 15', 15), /12 or 24/, 'a 15-word phrase (SeedSigner reads 12 or 24)');
  for (const [P, n] of [[P12, 12], [P24, 24]]) {
    await no(two(P), new RegExp('out of order \\(' + (n / 2 + 1) + ' comes before 2\\)'), 'M1: two columns, ' + n);
    await no(n + ' words:\n' + two(P), /out of order/, 'M1: two columns with a count line, ' + n);
    await no(two(P, (i, x) => (i + 1) + '.' + x), /out of order/, 'M1: "1.word", ' + n);
    await yes(P.map((x, i) => (i + 1) + '. ' + x).join('\n'), 'M1: in number order, ' + n, P.join(' '));
    await yes(P.join(' '), 'M1: plain, ' + n, P.join(' '));
    await no(half(P), /number 2 is on word 3/, 'F3: half-numbered two columns, ' + n);
  }
  await no(P12.map((x, i) => (i < 3 ? i + 1 : i + 2) + '. ' + x).join('\n'), /number 4 is not in it/, 'M1: number 4 left out');
  await no(P12.map((x, i) => (i === 2 ? 2 : i + 1) + '. ' + x).join('\n'), /number 2 comes twice/, 'M1: number twice');
  await yes(rows(R12, 4), 'F2: rows labelled 1. 5. 9.', R12.join(' ')); await yes(rows(R12, 4, (n) => n - 1 + '.'), 'F2: rows from 0', R12.join(' '));
  await no(R12.slice(0, 4).join(' ') + ' 7. ' + R12.slice(4).join(' '), /number 7 is on word 5/, 'F3: lone 7. on word 5');
  // more layouts (as tests/core.test.mjs and the original page's v2.18.1 review): every form of a two-column copy is refused with the
  // number that is out of place; every form in number order reads as the true seed
  for (const [P, n] of [[P12, 12], [P24, 24]]) {
    const h = n / 2 + 1;
    for (const [name, x] of [['Windows line ends', two(P).replace(/\n/g, '\r\n')], ['"1)"', two(P, (i, w) => (i + 1) + ') ' + w)], ['numbers on their own lines', two(P, (i, w) => (i + 1) + '.\n' + w, '\n')],
      ['count line "N"', n + '\n' + two(P)], ['one line', two(P, undefined, ' ').replace(/\n/g, ' ')]])
      await no(x, new RegExp('out of order \\(' + h + ' comes before 2\\)'), 'M1: ' + n + ' ' + name);
    for (const [name, x] of [['"1) w"', P.map((w, i) => (i + 1) + ') ' + w).join(' ')], ['"#1 w"', P.map((w, i) => '#' + (i + 1) + ' ' + w).join('\n')], ['"1: w"', P.map((w, i) => (i + 1) + ': ' + w).join('\n')],
      ['"1.w"', P.map((w, i) => (i + 1) + '.' + w).join(' ')], ['numbers on own lines', P.map((w, i) => (i + 1) + '\n' + w).join('\n')], ['count first', n + ' ' + P.join(' ')], ['count line', n + ' words:\n' + P.map((w, i) => (i + 1) + '. ' + w).join('\n')],
      ['from 0', P.map((w, i) => i + '. ' + w).join('\n')]])
      await yes(x, 'M1: ' + n + ' in number order, ' + name, P.join(' '));
    for (const f of [(k) => k + ')', (k) => '#' + k, (k) => '' + k]) await no(half(P, f), /number 2 is on word 3/, 'F3: ' + n + ' half-numbered, ' + f(1));
  }
  await no(P12.map((x, i) => i + 2 + '. ' + x).join('\n'), /number 1 is not in it/, 'M1: a list from 2 to 13');
  await no('12 words:\n' + rows(R12.slice(0, 11), 4), /The list says 12 words, but it has 11/, 'F2: a count line with a word too few');
  await no(rows(R12, 3, (k) => (k + 2) / 3 + '.'), /number 2 is on word 4/, 'F3: lines 1. 2. 3. of three words');
  await no(R12[0] + ' ' + R12.slice(1).map((x, i) => (i + 1) + '. ' + x).join(' '), /number 1 is on word 2/, 'F3: numbers one place off');
  { const t2 = R12.map((x, i) => (i < 3 ? i + 1 : i + 2) + '. ' + x).slice(0, 3).join(' ') + ' ' + R12.slice(3, 5).join(' ') + ' 7. ' + R12.slice(5).join(' '); await no(t2, /number 7 is on word 6/, 'F3: a word left out between numbered rows'); }
  await yes(R12.slice(0, 4).join(' ') + ' 5. ' + R12.slice(4).join(' '), 'F2: a lone 5. on word 5', R12.join(' '));
  await yes(rows(R12, 6, (k) => k + ')'), 'F2: rows of 6 labelled 1) 7)', R12.join(' '));
  await yes('1. ' + R12.slice(0, 6).join(' ') + ' 7. ' + R12.slice(6).join(' '), 'F2: only 1 and 7 numbered', R12.join(' '));
  // no numbered list of the true seed's words ever reads as another seed, whatever the order (a plain list in another order can be
  // a valid seed 1 time in 16: with no numbers nothing can tell; that is why the guide says to keep the numbers)
  { const truth = fpOf(P12.join(' ')); let other = 0;
    for (let i = 0; i < 40; i++) { const order = P12.map((w, k) => [sha('sh' + i + ' ' + k).readUInt32BE(0), w, k]).sort((x, y) => x[0] - y[0]);
      for (const x of [order.map(([, w, k]) => (k + 1) + '. ' + w).join(' '), order.map(([, w, k]) => '#' + (k + 1) + ' ' + w).join('\n')]) { const r = await M.drBackup(x, ''); if (r.ok && r.fp !== truth) other++; } }
    t(other === 0, 'no shuffle of the words reads as another seed with a numbered list (' + other + ')'); }
  // exact page messages
  { const r = M.drEntropyRead('cards', 12, C25.split(' ').slice(0, 24).join(' ')); t(/^24 cards so far: 1 more to go for 12 words\.$/.test(r.msg), 'cards: "1 more to go" counted as the bits count (' + r.msg + ')'); }
  { const r = M.drEntropyRead('cards', 12, 'AS'); t(/^1 card so far: \d+ more to go/.test(r.msg), 'cards: "1 card" in the singular'); }
  { let k = 1; const deck = []; for (const s of 'CDHS') for (const x of 'A23456789TJQK') deck.push(x + s);
    while (!M.drEntropyRead('cards', 12, deck.slice(0, k).join(' ')).ok) k++;
    const b = M.cdBits(M.cdParse(deck.slice(0, k).join(' ')).cards).bits; t(b >= 128 && M.cdBits(M.cdParse(deck.slice(0, k - 1).join(' ')).cards).bits < 128, 'cards: the fewest cards for 12 words give at least 128 bits, one fewer does not (' + k + ' cards)'); }
  { const r = await M.drBackup('twenty lion wast logic giant now spare doll blame hint prevent theme', ''); t(r.ok && /^word 3: /.test(r.readAs[0]), 'backup check: the word read from its first letters is named by its place (word 3)'); }
  { const r = M.drEntropyRead('dice', 12, '1234567'); t(/\u201c7\u201d is not one/.test(r.msg), 'dice: the bad roll is named'); }
  { const r = M.drEntropyRead('coin', 12, 'HTX'); t(/\u201cX\u201d is neither/.test(r.msg), 'coins: the bad flip is named'); }
}
if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  const t0 = Date.now(), M = loadMoney(moneyScript(readPage())), bad = await moneyCheck(M);
  for (const b of bad) console.log('FAIL ' + b);
  console.log(`money: ${bad.length ? 'FAILED ' + bad.length : 'all checks pass'} (${Date.now() - t0} ms)`); process.exit(bad.length ? 1 : 0);
}
