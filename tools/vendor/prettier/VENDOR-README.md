# Vendored prettier 3.9.6 (module API)

The pinned renderer this mirror's `readable/`, `src/` and `split-spec.json` were
produced with, vendored INTO THIS MIRROR so the derivation never has to reach
into a sibling mirror's tree.

- **version**: 3.9.6, exact. `tools/derive.mjs` and `tools/audit.js` both
  refuse any other version — the loader reads `package.json` beside the
  candidate `index.mjs` and skips anything whose `version` is not `3.9.6`.
- **source**: the published npm tarball `prettier-3.9.6.tgz`
  (`sha512-OpN0zzVdiaiAhxpuuj5efpIS4sY9j7bY6uR5mnj5yPzGkdkjNKSJeUThPb60Jw29QuAZgA4o+/iB49kFiaBX6g==`).
- **files**: 19 — `index.mjs` + `doc.mjs` + `plugins/*.mjs` (all 13 language
  plugins) + `LICENSE` + `THIRD-PARTY-NOTICES.md` (all four byte-identical to
  the published tarball), plus this file and a minimal `package.json` stub.
- `index.mjs` is the MODULE API entry point, never the CLI: the CLI respects
  `.gitignore` and can silently echo its input instead of formatting.
- the `package.json` here is a MINIMAL stub carrying `name`/`version`/`license`
  so the loaders' version check works. It is NOT the published `package.json`,
  whose `exports` map would point at files that are not vendored here.

The bytes are identical to the published 3.9.6 tarball, so the derived layers
re-render byte-for-byte: `node tools/audit.js` re-renders all 163 pretties
(and the inline twin) from the capture bytes under THIS copy and compares them
byte for byte with the committed layer.

## Why this is vendored rather than resolved at runtime

`tools/derive.mjs` and `tools/audit.js` used to resolve prettier from
`node_modules/prettier/index.mjs` in ANOTHER mirror's tree. That directory is
gitignored and committed nowhere, so it existed only on whichever machine
happened to install it: a clean checkout, a disk cleanup or a different
machine broke this mirror's derive tools, and the failure looked like a broken
tool rather than a missing dependency.

Both tools now resolve, in order:

1. `$PRETTIER_MJS` — an explicit override, when set;
2. `tools/vendor/prettier/index.mjs` — this vendored copy, the normal case;
3. `node_modules/prettier/index.mjs` — a local `npm install prettier@3.9.6`
   still works.

If none of them resolves, the tool fails with a message naming EVERY path it
tried and the exact command that restores the vendored copy
(`git checkout -- tools/vendor/prettier/`). The failure is a missing
dependency, and it says so.
