// DRYRUN page: tabs, theme, CLEAR ALL, the self-test, the dice / coin / card check, the backup check, the SeedQR view and the
// printable templates. The money code it calls (checkPhrase, mnemonicToSeed, fingerprintFromSeed, watchOnlyFromSeed,
// entropyToMnemonic, rollsToMnemonic, cdParse, cdBits, cdRaw, seedQrMatrix) is in crypto.js (frozen);
// dice and coin flips use the simulator's port of SeedSigner's own code (ssGenerateMnemonicFromDice / ...FromCoinFlips).
// Nothing here is stored: the only browser storage is the THEME choice.
"use strict";
const DR_VERSION = "1.0.2";
const DR_BITS = { 12: 128, 24: 256 };
const $d = (id) => document.getElementById(id);
let drQueue = Promise.resolve();
// every button's work runs in order; drBusy() resolves when all of it is done (the tests wait on it)
function drRun(f) { const p = drQueue.then(f, f); drQueue = p.catch((e) => console.warn("DRYRUN:", e)); return p; }
function drBusy() { return drQueue; }
function drSay(id, text, cls) { const e = $d(id); if (!e) return; e.textContent = text || ""; e.className = "status" + (cls ? " " + cls : ""); }
// Messages of the word reader that name tools DRYRUN does not have: those sentences are left out.
function drMsg(m) {
  return String(m || "").replace(/: Reforge in EXTRA TOOLS can search for it\./g, ".").replace(/\s*[^.()]*\b(Reforge|EXTRA TOOLS|MAKE A SEED|CHECK A BACKUP|Damascus|SLIP39 tab|FORGE SEED)\b[^.]*\.?/g, "").trim();
}

// ---------------------------------------------------------------- tabs and theme
const DR_TABS = ["practice", "check", "print", "guide"];
function showTab(name) {
  if (!DR_TABS.includes(name)) name = "practice";
  for (const t of DR_TABS) {
    const sec = $d(t), b = $d("tab-" + t); if (!sec || !b) continue;
    sec.hidden = t !== name; b.setAttribute("aria-selected", t === name ? "true" : "false"); b.tabIndex = t === name ? 0 : -1;
  }
}
function drTheme(set) {
  const root = document.documentElement;
  if (set !== undefined) {
    if (set === "light") root.setAttribute("data-theme", "light"); else root.removeAttribute("data-theme");
    try { localStorage.setItem("dryrun-theme", set); } catch (e) { /* storage off: the choice lasts this visit */ }
  }
  const light = root.getAttribute("data-theme") === "light";
  const b = $d("themeBtn"); if (b) { b.setAttribute("aria-pressed", light ? "true" : "false"); b.textContent = light ? "THEME: LIGHT" : "THEME: DARK"; }
  return light ? "light" : "dark";
}

// ---------------------------------------------------------------- dice, coin flips, cards -> words
function drEntropyRead(kind, wc, text) {
  const t = String(text || "");
  if (kind === "dice") {
    const s = t.replace(/[\s,;]+/g, ""), need = wc === 12 ? 50 : 99, bad = s.match(/[^1-6]/);
    if (bad) return { msg: "Dice rolls are the numbers 1 to 6 only: “" + bad[0] + "” is not one. (SeedSigner has no 0: a 6 is a 6.)" };
    if (s.length !== need) return { count: s.length, need, msg: "SeedSigner takes exactly " + need + " rolls for " + wc + " words. You have " + s.length + "." };
    return { ok: true, kind, data: s, count: s.length, need };
  }
  if (kind === "coin") {
    const s = t.replace(/[\s,;]+/g, "").toUpperCase(), need = wc === 12 ? 128 : 256, bad = s.match(/[^HT01]/);
    if (bad) return { msg: "Coin flips are H and T (Heads and Tails), or 1 and 0 (Heads = 1, Tails = 0): “" + bad[0] + "” is neither." };
    if (/[HT]/.test(s) && /[01]/.test(s)) return { msg: "Use H and T, or 1 and 0, not both in one list." };
    const bits = s.replace(/H/g, "1").replace(/T/g, "0");
    if (bits.length !== need) return { count: bits.length, need, msg: "SeedSigner takes exactly " + need + " coin flips for " + wc + " words. You have " + bits.length + "." };
    return { ok: true, kind, data: bits, count: bits.length, need };
  }
  if (kind === "cards" || kind === "cardsraw") {
    const pr = cdParse(t);
    if (pr.bad.length) return { msg: "“" + pr.bad[0].trim() + "” is not a card. Write each card as its rank (A, 2 to 10, J, Q, K) and then its suit (C, D, H or S), such as 10H." };
    if (kind === "cards") {
      const b = cdBits(pr.cards), need = DR_BITS[wc];
      if (b.bits < need) { let left = 0, bb = b.bits, run = new Set(); for (const c of pr.cards) { if (run.has(c)) run = new Set(); run.add(c); } let size = run.size % 52; while (bb < need) { bb += Math.log2(52 - size); size = (size + 1) % 52; left++; }
        return { count: pr.cards.length, msg: pr.cards.length + " card" + (pr.cards.length === 1 ? "" : "s") + " so far: " + left + " more to go for " + wc + " words." }; }
      return { ok: true, kind, data: pr.cards, count: pr.cards.length };
    }
    const rw = cdRaw(pr.cards);
    if (rw.words !== wc) return { count: pr.cards.length, msg: rw.words < wc ? pr.cards.length + " cards give " + rw.all + " bits; raw entropy needs " + DR_BITS[wc] + " for " + wc + " words. Keep dealing." : pr.cards.length + " cards give " + rw.words + " words with raw entropy, more than " + wc + ". Remove cards." };
    return { ok: true, kind, data: pr.cards, count: pr.cards.length, raw: rw };
  }
  return { msg: "Choose what the seed was made from." };
}
const drJoin = (m) => Array.isArray(m) ? m.join(" ") : m;   // the simulator's port gives a word list, as SeedSigner's code does
async function drEntropyWords(r, wc) {
  if (r.kind === "dice") return drJoin(await ssGenerateMnemonicFromDice(r.data));
  if (r.kind === "coin") return drJoin(await ssGenerateMnemonicFromCoinFlips(r.data));
  if (r.kind === "cards") return rollsToMnemonic(r.data.join(" "), wc);
  return entropyToMnemonic(r.raw.bytes);
}
const DR_HELP = {
  dice: "Type the rolls in the order you gave them to the device: 50 rolls for 12 words, 99 for 24. Spaces are fine.",
  coin: "SeedSigner's coin-flip method (its code; the 0.8.7 device menus make new seeds from dice or the camera): the flips in order, H or 1 for Heads, T or 0 for Tails. 128 flips for 12 words, 256 for 24.",
  cards: "Type the cards in the order they lay, such as AS 10H KD 2C. Hashed like Ian Coleman's BIP39 tool (Cards).",
  cardsraw: "Type the cards in the order they lay. Raw entropy, like Ian Coleman's BIP39 tool with Use Raw Entropy.",
};
function drEnUpdate() {
  const kind = $d("enKind").value, wc = +$d("enWc").value;
  $d("enHelp").textContent = DR_HELP[kind] || "";
  $d("enWords").textContent = "";
  const t = $d("enIn").value; if (!t.trim()) { $d("enCount").textContent = ""; drSay("enMsg", ""); return; }
  const r = drEntropyRead(kind, wc, t);
  $d("enCount").textContent = r.ok ? "Ready: press SHOW THE WORDS." : (r.msg || "");
  drSay("enMsg", "");
}
async function drEnGo() {
  const kind = $d("enKind").value, wc = +$d("enWc").value, r = drEntropyRead(kind, wc, $d("enIn").value);
  $d("enWords").textContent = "";
  if (!drSelfOk()) { drSay("enMsg", "The self-test did not pass, so this page shows no words.", "bad"); return; }
  if (!r.ok) { drSay("enMsg", r.msg, "bad"); return; }
  const m = await drEntropyWords(r, wc);
  $d("enWords").textContent = m;
  drSay("enMsg", "These are the words for these " + (kind === "dice" ? "rolls" : kind === "coin" ? "flips" : "cards") + ". Compare them with the device, word by word.", "ok");
}

// ---------------------------------------------------------------- backup check
const DR_TYPES = [["wpkh", 84], ["sh-wpkh", 49], ["tr", 86]];
let drBkWords = "";
async function drBip39(m) {   // the words only if they are a valid BIP39 phrase (checksum), as SeedSigner reads them
  const w = String(m || "").trim().split(/\s+/), hex = phraseEntropyHex(w.join(" "));
  if (!hex || ![12, 24].includes(w.length)) return "";
  const back = await entropyToMnemonic(Uint8Array.from(hex.match(/../g).map((x) => parseInt(x, 16))));
  return back === w.join(" ") ? back : "";
}
// Review fix: the copied reader also takes a SeedQR digit string or CompactSeedQR hex as a whole. Word numbers typed from a list
// that counts from 1 would be read as SeedQR digits (counted from 0): a different seed that is valid 1 time in 16. This box takes
// words only, and says how it read any word it did not get letter for letter.
async function drBackup(text, pass) {
  if (await phraseFromCode(text)) return { msg: "These are numbers or hex, not words. This box takes your words only: word numbers can count from 0 or from 1, and the wrong count gives a different seed. Type the words." };
  const r = await checkPhrase(text);
  if (!r.ok) return { msg: drMsg(r.msg) || "These words cannot be read." };
  const m = await drBip39(r.mnemonic);
  if (!m) { const n = String(r.mnemonic || "").trim().split(/\s+/).length; return { msg: "SeedSigner makes and reads 12 or 24 words. This list has " + n + "." }; }
  const typed = wordsClean(text).text.trim().toLowerCase().split(/\s+/), words = m.split(" ");
  const readAs = words.map((w, i) => typed[i] && typed[i] !== w ? "word " + (i + 1) + ": \u201c" + typed[i] + "\u201d read as \u201c" + w + "\u201d" : null).filter(Boolean);
  const seed = await mnemonicToSeed(m, pass);
  try {
    const out = { ok: true, mnemonic: m, fp: await fingerprintFromSeed(seed), note: drMsg(r.msg), readAs };
    for (const [type, pu] of DR_TYPES) { const w = await watchOnlyFromSeed(seed, type, 0, "main"); out["xpub" + pu] = w.key; out["addr" + pu] = w.first; }
    return out;
  } finally { seed.fill(0); }
}
function drBkHide() {
  $d("bkOut").hidden = true; for (const id of ["bkFp", "bkXpub84", "bkAddr84", "bkXpub49", "bkAddr49", "bkXpub86", "bkAddr86"]) $d(id).textContent = "";
  drQrHide(); drBkWords = ""; $d("bkQrGo").disabled = true;
}
async function drBkGo() {
  drBkHide();
  if (!drSelfOk()) { drSay("bkMsg", "The self-test did not pass, so this page checks nothing.", "bad"); return; }
  const text = $d("bkIn").value, pass = $d("bkPass").value;
  if (!text.trim()) { drSay("bkMsg", "Type your words first.", "bad"); return; }
  const r = await drBackup(text, pass);
  if (!r.ok) { drSay("bkMsg", r.msg, "bad"); return; }
  for (const k of ["Fp", "Xpub84", "Addr84", "Xpub49", "Addr49", "Xpub86", "Addr86"]) $d("bk" + k).textContent = r[k[0].toLowerCase() + k.slice(1)];
  $d("bkOut").hidden = false; drBkWords = r.mnemonic; $d("bkQrGo").disabled = false;
  const sp = pass && pass !== pass.trim() ? " Note: your passphrase starts or ends with a space; that space counts." : "";
  const ra = r.readAs.length ? " Read from the first letters, so check them on your paper: " + r.readAs.join("; ") + "." : "";
  drSay("bkMsg", "Valid " + r.mnemonic.split(" ").length + "-word seed" + (pass ? " with a passphrase" : ", no passphrase") + ". The fingerprint must match the device." + sp + ra, ra ? "warn" : "ok");
}
// SeedQR: the digits of a Standard SeedQR (4 per word) or the bytes of a Compact SeedQR -> the words, or "" if not a valid seed
async function drSeedQrDecode(x) {
  if (x instanceof Uint8Array) return x.length === 16 || x.length === 32 ? entropyToMnemonic(x) : "";
  const s = String(x || "");
  if (!/^(\d{48}|\d{96})$/.test(s)) return "";
  const n = s.match(/\d{4}/g).map(Number); if (n.some((v) => v > 2047)) return "";
  return drBip39(n.map((v) => WORDLIST[v]).join(" "));
}
function drQrDraw(id, q) {
  const c = $d(id), n = q.rows.length, quiet = 4, px = 8; c.width = c.height = (n + 2 * quiet) * px;
  const g = c.getContext("2d"); g.fillStyle = "#fff"; g.fillRect(0, 0, c.width, c.height); g.fillStyle = "#000";
  for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) if (q.rows[y][x]) g.fillRect((x + quiet) * px, (y + quiet) * px, px, px);
}
function drQrHide() { for (const id of ["bkQrStd", "bkQrCompact"]) { const c = $d(id); c.width = 0; c.height = 0; } $d("bkQr").hidden = true; $d("bkQrNote").hidden = true; }
function drQrShow() {
  if (!drBkWords) return;
  const w = drBkWords.split(" ");
  drQrDraw("bkQrStd", ssPySeedQrMatrix(w, "std")); drQrDraw("bkQrCompact", ssPySeedQrMatrix(w, "compact"));   // SeedSigner's mask
  $d("bkQr").hidden = false; $d("bkQrNote").hidden = false;
}

// ---------------------------------------------------------------- printable templates
function drPrint(kind, n) {
  const a = $d("printArea"); a.textContent = "";
  const h = document.createElement("h1"), p = document.createElement("p"); p.className = "pr-note";
  const g = document.createElement("div");
  if (kind === "words") {
    h.textContent = "Seed words: " + n + " words";
    p.textContent = "Write each word next to its number, in pencil or ink, never in a computer or a photo. Keep this sheet private and offline. Fingerprint: ____________";
    g.className = "wsheet n" + n; g.style.gridAutoFlow = "column"; g.style.gridTemplateRows = "repeat(" + n / 2 + ", auto)";
    for (let i = 1; i <= n; i++) { const c = document.createElement("div"), b = document.createElement("b"); c.className = "cell"; b.textContent = i + "."; c.appendChild(b); g.appendChild(c); }
  } else {
    h.textContent = "Blank SeedQR grid: " + n + " x " + n;
    p.textContent = { 21: "Compact SeedQR, 12 words.", 25: "Standard SeedQR, 12 words, or Compact SeedQR, 24 words.", 29: "Standard SeedQR, 24 words." }[n] + " Fill in the squares the device shows (Backup seed > Export as SeedQR). Keep it private: it is your seed.";
    const mm = Math.floor(176 / (n + 1) * 10) / 10;
    g.className = "qgrid"; g.style.gridTemplateColumns = "repeat(" + (n + 1) + ", " + mm + "mm)"; g.style.gridAutoRows = mm + "mm"; g.style.width = ((n + 1) * mm) + "mm";
    for (let r = 0; r <= n; r++) for (let c = 0; c <= n; c++) {
      const e = document.createElement("div");
      if (r === 0 || c === 0) { e.className = "lab"; e.textContent = r === 0 && c === 0 ? "" : String(r === 0 ? c : r); } else e.className = "cell";
      g.appendChild(e);
    }
  }
  a.append(h, p, g);
  window.print();
}

// ---------------------------------------------------------------- copy (the device's COPY buttons call these)
async function safeCopy(t) {
  try { await navigator.clipboard.writeText(t); return; } catch (e) { /* file:// or no permission: the old way below */ }
  const a = document.createElement("textarea"); a.value = t; a.setAttribute("readonly", ""); a.style.position = "fixed"; a.style.left = "-9999px";
  document.body.appendChild(a); a.select();
  try { if (!document.execCommand("copy")) throw new Error("copy refused"); } finally { a.value = ""; a.remove(); }
}
function showCopied(btn) {
  if (!btn) return; const was = btn.dataset.label || btn.textContent; btn.dataset.label = was; btn.textContent = "COPIED";
  setTimeout(() => { btn.textContent = btn.dataset.label; delete btn.dataset.label; }, 1500);
}

// ---------------------------------------------------------------- CLEAR ALL
function clearAll() {
  for (const id of ["enIn", "bkIn", "bkPass"]) $d(id).value = "";
  $d("enWords").textContent = ""; $d("enCount").textContent = ""; drSay("enMsg", ""); drSay("bkMsg", "");
  drBkHide();
  try { if (typeof ssPageWipe === "function") ssPageWipe(); } catch (e) { console.warn("DRYRUN: device wipe", e); }
}

// ---------------------------------------------------------------- self-test: known answers from published vectors
let drSelf = "running";
function drSelfOk() { return drSelf === "pass"; }
async function drSelfTest() {
  const AB = "abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about";
  const T = [
    ["BIP39 entropy to words (trezor vector 1)", async () => await entropyToMnemonic(new Uint8Array(16)) === AB],
    ["BIP39 entropy to words (trezor vector, 24 words of 0x7f)", async () => await entropyToMnemonic(new Uint8Array(32).fill(0x7f)) === "legal winner thank year wave sausage worth useful legal winner thank year wave sausage worth useful legal winner thank year wave sausage worth title"],
    ["fingerprint of abandon ... about", async () => await fingerprintFromSeed(await mnemonicToSeed(AB, "")) === "73c5da0a"],
    ["BIP39 seed with passphrase TREZOR (trezor vector 1)", async () => Array.from(await mnemonicToSeed(AB, "TREZOR")).map((b) => b.toString(16).padStart(2, "0")).join("").startsWith("c55257c360c07c72029aebc1b53c05ed0362ada38ead3e3e9efa3708e5349553")],
    ["SeedSigner's dice example (50 rolls)", async () => drJoin(await ssGenerateMnemonicFromDice("65515223131652132161133154444123616466443112153441")) === "hole luggage safe present express tragic orbit shed switch metal identify path"],
    ["cards, Ian Coleman (A♠ 2♣ T♦)", async () => await rollsToMnemonic("A♠ 2♣ T♦", 12) === "embody only exact pride episode winter estate perfect security often scout tiger"],
    ["BIP84 zpub and first address", async () => { const w = await watchOnlyFromSeed(await mnemonicToSeed(AB, ""), "wpkh", 0, "main"); return w.key === "zpub6rFR7y4Q2AijBEqTUquhVz398htDFrtymD9xYYfG1m4wAcvPhXNfE3EfH1r1ADqtfSdVCToUG868RvUUkgDKf31mGDtKsAYz2oz2AGutZYs" && w.first === "bc1qcr8te4kr609gcawutmrza0j4xv80jy8z306fyu"; }],
    ["BIP86 taproot first address", async () => (await watchOnlyFromSeed(await mnemonicToSeed(AB, ""), "tr", 0, "main")).first === "bc1p5cyxnuxmeuwuvkwfem96lqzszd02n6xdcjrs20cac6yqjjwudpxqkedrcr"],
    ["SeedQR digits", async () => seedQrData(AB.split(" ")).digits === "000000000000000000000000000000000000000000000003"],
    ["SeedQR decode", async () => await drSeedQrDecode("000000000000000000000000000000000000000000000003") === AB && await drSeedQrDecode("0".repeat(48)) === ""],
    ["word list: a number on the wrong word is refused", async () => !(await checkPhrase("1. abandon abandon 2. abandon abandon abandon abandon abandon abandon abandon abandon abandon about")).ok],
  ];
  let pass = 0; const failed = [];
  for (const [name, f] of T) { let r = false; try { r = await f(); } catch (e) { r = false; } if (r) pass++; else failed.push(name); }
  drSelf = failed.length ? "fail" : "pass";
  const b = $d("selfTestBadge");
  if (b) { b.textContent = (failed.length ? "SELF-TEST FAILED" : "SELF-TEST PASSED") + " (" + pass + "/" + T.length + ")"; b.className = "badge " + (failed.length ? "bad" : "ok"); b.title = failed.length ? "Failed: " + failed.join("; ") : "Known answers from published test vectors"; }
  if (failed.length) console.warn("DRYRUN self-test failed:", failed);
  return { pass, total: T.length, failed };
}

// ---------------------------------------------------------------- start
function drInit() {
  try { const t = localStorage.getItem("dryrun-theme"); if (t === "light") document.documentElement.setAttribute("data-theme", "light"); } catch (e) { /* storage off */ }
  drTheme();
  $d("themeBtn").addEventListener("click", () => drTheme(drTheme() === "light" ? "dark" : "light"));
  $d("clearBtn").addEventListener("click", clearAll);
  for (const t of DR_TABS) $d("tab-" + t).addEventListener("click", () => showTab(t));
  $d("tab-practice").parentElement.addEventListener("keydown", (e) => {
    const i = DR_TABS.findIndex((t) => $d("tab-" + t).getAttribute("aria-selected") === "true");
    const j = e.key === "ArrowRight" ? (i + 1) % DR_TABS.length : e.key === "ArrowLeft" ? (i + DR_TABS.length - 1) % DR_TABS.length : -1;
    if (j < 0) return; e.preventDefault(); showTab(DR_TABS[j]); $d("tab-" + DR_TABS[j]).focus();
  });
  for (const id of ["enKind", "enWc", "enIn"]) $d(id).addEventListener("input", drEnUpdate);
  for (const id of ["enKind", "enWc"]) $d(id).addEventListener("change", drEnUpdate);
  $d("enGo").addEventListener("click", () => drRun(drEnGo));
  $d("enClear").addEventListener("click", () => { $d("enIn").value = ""; drEnUpdate(); });
  for (const id of ["bkIn", "bkPass"]) $d(id).addEventListener("input", () => { drBkHide(); drSay("bkMsg", ""); });
  $d("bkGo").addEventListener("click", () => drRun(drBkGo));
  $d("bkQrGo").addEventListener("click", () => drRun(drQrShow));
  $d("bkClear").addEventListener("click", () => { $d("bkIn").value = ""; $d("bkPass").value = ""; drBkHide(); drSay("bkMsg", ""); });
  for (const n of [12, 24]) $d("prWords" + n).addEventListener("click", () => drPrint("words", n));
  for (const n of [21, 25, 29]) $d("prQr" + n).addEventListener("click", () => drPrint("grid", n));
  drEnUpdate(); showTab("practice");
  // the device is the main screen: on at load (a box open in the page as parsed fires no toggle the device part hears)
  { const box = $d("ssBox"); if (box && box.open && typeof ssPageStart === "function" && !ssPageOn) ssPageStart(); }
  if (/^https?:$/.test(location.protocol) && "serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(() => { /* offline copy not kept */ });
}
window.selfTestDone = new Promise((res) => {
  const go = () => { drInit(); drSelfTest().then(res, res); };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", go); else go();
});
