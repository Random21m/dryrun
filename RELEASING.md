# Releasing DRYRUN

## Current build

- **Version:** 1.1.0, frozen Thu Nov 26, 2026 on branch `dev-1.1.0`
- **dryrun.html SHA-256:** `bbd4e41b582445403476eaae6d592d92e32d02b6de163018fafa2a6c1922ba8b` (1,474,553 bytes)
- **Content ID:** `bafkreif32tsbwwbeivadi5xkvzwvslms4mwqfnw6cyybr6x2fjwbsiv2rm`
- **Offline cache name:** `dryrun-1.1.0`
- **Changes:** three new lessons, a practice wallet with five sample transactions, no real signing (a seed that is not public signs only practice), 40 px touch buttons. SeedSigner 0.8.7 is still the newest release.
- **Review:** one fresh review of the 1.1.0 changes; its 7 findings fixed in one round (commit ca31a56)
- **Tests at freeze:** build 15/15, core 206/206, screens 18/18, simulator 244/244, offline 7/7, money (fast) all pass. The money code did not change, so the mutation run of 1.0.0 still applies.

## Steps

1. **Build and test** (Claude): `npm ci`, `npm run build`, `npm test`, then the mutation run on the money code (`npm run mutation`). Every test passes; every surviving change is looked at.
2. **Freeze** (Claude): `SHA256SUMS` (`sha256sum dryrun.html > SHA256SUMS`), `CID.txt`, this file's "Current build", the README changelog, and the `sw.js` cache name (`dryrun-<version>`) all name the same build. Pushed to the release branch.
3. **Sign** (the owner, on his own computer): `VF_BRANCH=<branch> bash tools/release.sh sign <version>`. The script checks the files, shows the SHA-256 to compare, signs `SHA256SUMS` with the release key and pushes `SHA256SUMS.asc`.
4. **Check and merge** (Claude): verifies the signature, and pushes `main` only with the owner's OK.
5. **Tag** (the owner): pushes the tag `v<version>`.
6. **Publish** (the owner): `bash tools/release.sh publish <version>` makes the GitHub release with `dryrun.html`, `SHA256SUMS`, `SHA256SUMS.asc`, `CID.txt`, and stamps it with OpenTimestamps. Later: `bash tools/release.sh stamp <version>`.
7. **GitHub Pages** (the owner, once): Settings > Pages > Deploy from a branch > `main`, folder `/` (root). The page is then at `https://random21m.github.io/dryrun/`.

## The CID

```
python3 -c "import hashlib,base64,sys; h=hashlib.sha256(open(sys.argv[1],'rb').read()).digest(); print('b'+base64.b32encode(bytes([1,0x55,0x12,0x20])+h).decode().lower().rstrip('='))" dryrun.html
```
