# Security

## Status

DRYRUN is a **practice tool** and is **not independently audited**. It is one HTML file you can read, with automated tests (published test vectors, comparisons with independent libraries, and a mutation run that breaks the money code on purpose to prove the tests notice). Its money code is frozen: `tests/build.test.mjs` checks it has not changed.

DRYRUN is an unofficial practice tool, not made by or connected to SeedSigner.

## Rules it keeps

- **No network.** The page's own Content-Security-Policy blocks every connection (`connect-src 'none'`), and the tests check that no request is made. On its web page a small offline copy (`sw.js`) keeps the page for use without a network; it fetches only the page's own files.
- **No tracking, no analytics.**
- **Nothing secret is stored.** Only the THEME choice is kept in the browser. Words, passphrases, rolls and keys are never stored; CLEAR ALL empties every box and switches the practice device off, wiping its memory.

## Known limits (not vulnerabilities)

- A browser is not a hardware signer. Anything typed into this page could be seen by malware, a browser extension or a screen recorder on the same computer. Use it offline, and never put money on a seed you made or typed here.
- The practice device signs only made-up practice transactions and messages. Since 1.1.0 there is no way to paste your own PSBT: DRYRUN is for practice only. Never load a seed that holds real coins.
- The self-test runs inside the same file it checks, so a tampered file could fake a pass. Check the SHA-256 with a tool that is not the page (see below).
- The secp256k1 code is not constant-time. That is acceptable offline only.

## Reporting a problem

Use the repository's **Security** tab, **Report a vulnerability**, so only the maintainer sees it. If that is not available, open an issue that says only "security report, please contact me", with no details.

In scope: wrong words, fingerprint, xpub or address for given inputs; any network request; anything stored beyond the theme; a mistake in the backup check that reads a paste as a different seed.

## Release signing key

Releases are signed with this OpenPGP key (ed25519, created 2026-11-06):

`2509 D115 03B7 2CBF BCB5  408F 4B72 9F05 6A52 9340`

The public key is [`dryrun-signing-key.asc`](dryrun-signing-key.asc). It carries no email address.

```
gpg --import dryrun-signing-key.asc
gpg --verify SHA256SUMS.asc SHA256SUMS
sha256sum -c SHA256SUMS
```

A good signature names the fingerprint above; compare all 40 characters.

## Supported versions

Only the latest release is supported.
