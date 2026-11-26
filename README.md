<img src="logo.png" alt="DRYRUN" width="96">

# DRYRUN

Practise SeedSigner safely: a simulator to rehearse every step, plus a helper to check your backup.

DRYRUN is one HTML file. Open `dryrun.html` in a browser, on a computer that is offline. It makes no network request, tracks nothing and stores no seed.

> **DRYRUN is an unofficial practice tool, not made by or connected to SeedSigner.** The real project is at [seedsigner.com](https://seedsigner.com) ([code](https://github.com/SeedSigner/seedsigner)).

## What it has

- **PRACTICE: a pretend SeedSigner.** A faithful port of SeedSigner 0.8.7 (commit e0a80d4b) on the 320 x 240 screen: the same screens, menus, words and buttons. Click the buttons on the case, or click the device and use the keyboard (arrow keys, Enter or Space, and 1, 2, 3 for KEY1 to KEY3).
  - **Lessons** below the device walk you through making a seed from dice, backing it up as words or as a SeedQR (the device checks your drawing), exporting the xpub, checking an address, adding a passphrase, signing a transaction, spotting a bad transaction, a 2-of-3 multisig and signing a message, one press at a time.
  - **Practice wallet:** sample transactions with made-up coins: normal payments, a send to yourself, a multisig, and two with a problem to spot (a stranger gets your change; a fee far larger than the payment). The page checks every signature.
- **CHECK: dice, coin and card check.** Type the same rolls or flips you gave the device and see the same words. This is the independent check that catches a fake or tampered device. Dice and coin flips give the same words as SeedSigner (Heads = 1, Tails = 0); cards use Ian Coleman's method (hashed, or raw entropy), as the original page did.
- **CHECK: backup check.** Type your words back in to see the fingerprint, the xpubs and the first receive address of each script type (native SegWit, nested SegWit, taproot). A list number must sit on the word at its place, and the page never reorders words, so a sheet copied in the wrong order is refused instead of read as another seed. It can also show the seed's SeedQR (standard and compact) to compare with the one you drew.
- **PRINT: templates.** A word sheet (12 or 24 words) and a blank SeedQR grid (21 x 21, 25 x 25, 29 x 29). They print on A4 and Letter.
- **GUIDE.** The order of steps, what never to do, and testing a backup before putting money on it.
- **THEME:** BLOCKHORIZON's colours, dark by default, light on THEME. The device screen keeps SeedSigner's own colours.

## Check the file before you use it

```
gpg --import dryrun-signing-key.asc
gpg --verify SHA256SUMS.asc SHA256SUMS
sha256sum -c SHA256SUMS
```

The signature must be by `2509 D115 03B7 2CBF BCB5  408F 4B72 9F05 6A52 9340` (see [SECURITY.md](SECURITY.md)). `CID.txt` is the file's IPFS content ID.

## Testing

`npm ci`, then `npm test`. Every expected value comes from independent code (`@scure/bip39`, `@scure/bip32`, `@scure/btc-signer`, `jsqr`, Node's crypto) or published vectors, never from the page itself.

| Test | What it checks |
|---|---|
| `tests/build.test.mjs` | `dryrun.html` is the build of its sources; the money code and the device code are frozen (their SHA-256 are recorded) |
| `tests/core.test.mjs` | dice and coins (SeedSigner's example and random rolls), cards (Ian Coleman's vectors), SeedQR encode and decode, fingerprints, xpubs and first addresses, the backup check's refusals (the 2.18.1 review layouts), no network, nothing stored, no stray links, the theme, printing on A4 and Letter |
| `tests/screens.test.mjs` | the device screens match the recorded fingerprints pixel for pixel; the menus and back button work |
| `tests/sim.test.mjs` | the simulator test: the device driven by its own buttons through seeds, SeedQR, xpubs, addresses, PSBTs, multisig, messages, settings, lessons and wipes |
| `tests/offline.test.mjs` | served like GitHub Pages, the page keeps an offline copy and opens with the network off |
| `tests/money.test.mjs` | the money code from the built page, in a sandbox, against the same independent values (fast) |
| `tests/mutation.test.mjs` | the money code is broken on purpose, one change at a time; the fast money test must notice each change (results and notes in `tests/fixtures/`) |

## Changelog

- **1.1.0**: three new lessons (back up and check a SeedQR, spot a bad transaction, add a passphrase); the practice wallet has five sample transactions; signing your own real PSBTs and messages (Use it for real) is removed: DRYRUN is for practice only. SeedSigner 0.8.7 is still the newest release, so the device is unchanged.
- **1.0.2**: a fresh start of the repository: one history, the logo, nothing else changed in the page.
- **1.0.1**: the DRYRUN logo, a coral 3D die, as the header and tab icon.
- **1.0.0** (Thu Nov 26, 2026): first release. The SeedSigner practice device with lessons (coral keys), the dice / coin / card check, the backup check (words only; a list number must sit on its word; words read from their first letters are named) with the seed's SeedQR drawn with the same mask as SeedSigner, printable templates, short guides, BLOCKHORIZON's colours, an offline copy that leaves other pages' copies alone. Tests: build 13, core 201, screens 18, simulator 274, offline 7, the money test, and a mutation run on the money code.

## License

MIT ([LICENSE](LICENSE)). The practice device carries SeedSigner's MIT-licensed design and its fonts: see [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
