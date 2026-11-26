# Mutation run on the money code (DRYRUN 1.0.0)

Run: `node tests/mutation.test.mjs` (every money declaration of the built page changed one small step at a time; the fast money
test `tests/money.test.mjs` must fail). Then `node tests/mutation-coverage.mjs` sorts the survivors by whether the money test runs
the changed code at all (V8 block coverage).

## Full run (dev-1.0.0 after review round 1)
- 3,129 changes, 1,574 caught (50%), 9 by timeout. Kept as `mutation-result-full.json`.
- 494 survivors are in code the money test never runs: multisig and BIP-85 helpers, Electrum and old-Electrum readers, error branches.
- Survivors in code that runs, by kind (judged by hand):
  - QR tables and branches for versions above 3 or level M (`QR_M`, `QR_ALIGN`, parts of `qrBuild`): a SeedQR is version 1 to 3, level L.
  - `ripemd160` table entries that only pick message words that are zero for its one input size here (32 bytes).
  - Output DRYRUN never shows: descriptors and their checksums, the zpub field for other types, testnet values in `NETS`, address five.
  - Guards for an invalid master or child key (a 1 in 2^128 event) and for account numbers DRYRUN never passes.
  - Message wording: "did you mean" suggestions (`wordDistance`, `closestWords`, `unknownWordsMsg`), Electrum notes (`ELECTRUM_CJK`).
  - Equivalent changes (for example `>>> 0` against `>> 0` on values below 2^31, a constant added to every mask's score).

## After adding tests (layouts, card boundary, exact messages, numbered-shuffle property)
- The backup-check and page functions again: 435 changes, 269 caught; survivors 217 -> 166 (49 in code never run).
- What is left changes which number a refusal names, or how a gap is marked; the property "no numbered list of a seed's words, in
  any order, reads as another seed" is checked directly (80 orders).

## Known limit
- SeedSigner's QR mask (`src/pyqr.js`) is checked against the 13 phrases (26 codes) made by Python `qrcode` in `seedqr.json`. A
  wider set could not be generated here (installing Python packages was not allowed in this session). Two tie and constant
  changes in `ssPyQrBuild` / `ssPyQrLostPoint` survive for that reason.
