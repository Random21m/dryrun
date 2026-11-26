# Releasing DRYRUN

## Current build

- **Version:** 1.0.2, frozen Thu Nov 26, 2026 on branch `dev-1.0.2` (a fresh repository history; the page is 1.0.1 with the version number changed)
- **dryrun.html SHA-256:** `97137db2f32c501316183b4b1cb4dc6854d55a304676c29e50f2806ffcb6592f` (1,468,933 bytes)
- **Content ID:** `bafkreiexcn63f4zmkajrmgb3jmoljxdiktkvumcgo3bj4uhsqbx7znszf4`
- **Offline cache name:** `dryrun-1.0.2`
- **Tests at freeze:** build 15/15, core 202/202, screens 18/18, simulator 274/274, offline 7/7, money (fast) all pass

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
