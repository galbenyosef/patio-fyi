// derive.mjs — rebuild the derived layers (readable/ + src/ + split-spec.json)
// from the patio-fyi capture (PLAN §3/§5). PATIO (https://play.patio.fyi/) is
// capture-class: a Vite production build of a session-based 8v8 three.js
// shooter ("Friends session", ruleset r15-hangar-v1, map Hangar Nine), served at
// the origin root by Cloudflare. §0.4 fork-over-mirror was checked on
// 2026-10-12 — the page and its JS reference no public source repo, so the
// mirror stands. The capture is untouched; every source file is re-hashed
// against .upstream/manifest.json before it is rendered, so a drifted capture
// fails loudly instead of being silently re-derived.
//
// Pipeline:
//   each capture *.js -> pinned prettier 3.9.6 (module API — the CLI respects
//                        .gitignore and can silently echo its input), single
//                        pass, verified idempotent -> readable/<name>.pretty.js
//                        (capture-root-relative name, nested dirs flattened
//                        with __; the capture sits at the repo root).
//   the capture *.css -> readable/<name>.pretty.css, wholeFile section
//                        (stylesheet rule: stylesheets are never sliced).
//   vendor bundle      -> readable/ + wholeFile section (vendor rule): the
//                        bundled three.js r185 graphics engine chunk
//                        (assets/graphics-quality-CrL3qbU3.js) is indexed
//                        whole, never sliced. The wholeFile record's `file`
//                        IS the readable pretty (the derived text) and its
//                        `origin` the captured chunk (the pristine): the
//                        pretty is the chunk's only derived form, so the
//                        pair is what lets the frozen export gate compare
//                        the chunk's public export table with the layer's.
//   app chunks         -> statement-aligned slices src/<name>-NN.js at
//                        top-level declaration boundaries, ~250-350 line
//                        windows (oversized single declarations stay whole),
//                        exact 2-line provenance header; every slice is
//                        parse-checked with `node --input-type=module
//                        --check -` and round-trips byte-exact to its
//                        readable line range.
//   entry document     -> inline <script>/<style> scan (byte ranges + sha256):
//                        index.html references external chunks and carries one
//                        inline <style> block, which gets a wholeFile twin
//                        readable/index-inline-1.pretty.css + an entry in
//                        readable/index-inline-map.json (exact range + sha256).
//   binary payloads    -> hashed notRendered records (bytes + sha256, no
//                        pretty pass) for every captured image/model/audio/
//                        font file.
//
// Non-standalone parts are indexed but never sliced (skipped sections): every
// app chunk's final `export {…}` table (the bindings live in the earlier
// slices, so a slice carrying the table could not parse standalone). The
// section records the SERVED chunk's own export statement as its text, so the
// frozen export gate compares two genuinely different files — the reading
// copy's rendered table and the served chunk's statement — instead of the
// reading copy with itself: without it the table is named but never compared,
// and the chunk's public API goes unverified.
//
// Identifiers in src/ are the bundle's own minified names — the rename
// campaign (PLAN §5) is recorded as an open task in README.md. usage:
//   node tools/derive.mjs
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { spawnSync } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const proj = path.resolve(here, "..");
// ── --check: the reproducibility gate ───────────────────────────────────
// `node tools/derive.mjs --check` re-derives the derived layers IN MEMORY
// and compares them against the committed ones. It writes NOTHING: every
// derived file is compared against the committed file, and every difference
// (a file that would change, a file that would be created, a file whose
// committed copy would be superseded into legacy/, an orphan left in
// readable/ or src/) is reported and makes the tool exit non-zero. A plain
// run re-cuts exactly as before.
const CHECK = process.argv.includes("--check");
let checkProblems = 0;
// The re-derivation, in memory: resolved path -> the content this run
// produced. The self-check below reads it back instead of the committed
// file, so a stale committed layer is never mistaken for the fresh one.
const derivedText = new Map();
// Files already counted as a problem (one problem per affected file).
const counted = new Set();
const keyOf = (abs) => path.resolve(abs);
const relOf = (abs) => path.relative(proj, abs).split(path.sep).join("/");
// Report a difference: one message and one problem per affected file, so a
// file that would both change and be superseded is reported once.
const noteProblem = (key, message) => {
  if (counted.has(key)) return;
  counted.add(key);
  checkProblems++;
  console.error(message);
};

// Write one derived file. Under --check the content is only COMPARED with
// the committed file and a difference is reported; nothing is written.
function writeDerived(abs, text, encoding) {
  const key = keyOf(abs);
  derivedText.set(key, text);
  if (!CHECK) {
    fs.mkdirSync(path.dirname(abs), { recursive: true });
    fs.writeFileSync(abs, text, encoding);
    return text;
  }
  const rel = relOf(abs);
  if (!fs.existsSync(abs)) {
    noteProblem(key, `derive --check: would create ${rel}`);
  } else if (fs.readFileSync(abs, "utf8") !== text) {
    noteProblem(key, `derive --check: would change ${rel}`);
  }
  return text;
}

// Read a derived file back: the fresh derivation when there is one, the
// committed file otherwise.
function readDerived(abs) {
  const key = keyOf(abs);
  if (derivedText.has(key)) return derivedText.get(key);
  return fs.readFileSync(abs, "utf8");
}
const PINNED = "3.9.6";
const MIN_WINDOW = 250;
const MAX_WINDOW = 350;
const TODAY = "2026-10-12";
const ROOT = ""; // capture root (the served site root — capture sits at the repo root)

const sha256 = (buf) => crypto.createHash("sha256").update(buf).digest("hex");
const readLines = (abs) => {
  const t = readDerived(abs);
  const l = t.split("\n");
  if (l.length && l[l.length - 1] === "") l.pop();
  return l;
};
const linesOf = (text) => text.replace(/\n$/, "").split("\n");
const lineOf = (text, offset) => text.slice(0, offset).split("\n").length;

// capture-relative name -> readable twin name (capture root stripped, dirs flattened)
const tagOf = (capRel) => {
  const rel = capRel.startsWith(ROOT) ? capRel.slice(ROOT.length) : capRel;
  return rel.replace(/\.(js|css)$/i, "").split("/").join("__");
};
const prettyRelFor = (capRel) =>
  "readable/" + tagOf(capRel) + (/\.css$/i.test(capRel) ? ".pretty.css" : ".pretty.js");

// ── pinned prettier (module API, exactly 3.9.6) ─────────────────────────
// The renderer is VENDORED IN THIS MIRROR at tools/vendor/prettier/ (the
// published npm tarball prettier-3.9.6.tgz, byte for byte — see that
// directory's VENDOR-README.md). The derive used to fall back to a path in
// ANOTHER mirror's node_modules: gitignored, committed nowhere, so the
// derivation only worked on whichever machine happened to install it, and its
// failure looked like a broken tool rather than a missing dependency. The
// vendored copy is committed, so a clean checkout can always re-derive.
async function loadPrettier() {
  const candidates = [
    process.env.PRETTIER_MJS,
    path.join(proj, "tools", "vendor", "prettier", "index.mjs"),
    path.join(proj, "node_modules", "prettier", "index.mjs"),
  ].filter(Boolean);
  const tried = [];
  for (const c of candidates) {
    tried.push(c);
    if (!fs.existsSync(c)) continue;
    try {
      const pkg = JSON.parse(fs.readFileSync(path.join(path.dirname(c), "package.json"), "utf8"));
      if (pkg.version !== PINNED) continue;
      const mod = (await import(pathToFileURL(c).href)).default;
      if (mod.version === PINNED) return { mod, at: c };
    } catch {
      /* try next */
    }
  }
  // The message names EVERY path it looked for, and the exact command that
  // puts the vendored copy back: a missing dependency, said plainly.
  throw new Error(
    `pinned prettier ${PINNED} not found. Tried:\n` +
      tried.map((c) => `  - ${c}`).join("\n") +
      `\nRestore the committed copy:  git checkout -- tools/vendor/prettier/\n` +
      `or install the same version locally:  npm install --no-save prettier@${PINNED}\n` +
      `or point $PRETTIER_MJS at a prettier ${PINNED} index.mjs.`,
  );
}

// single pass + idempotency proof: prettier output must be a fixed point of
// the same call, so audit's one-pass re-render is byte-exact by construction
// layout fixed point: prettier 3.9.6's member-chain layout is not idempotent on
// some optional-chain argument patterns (pass 1 breaks `t.modules\n  .get(...)`,
// pass 2 keeps it joined and splits the arguments), so the recorded method is
// "format to a fixed point (1 or 2 passes)" — the returned text is always a
// layout fixed point of the pinned version, and audit re-renders with the same
// method and requires byte-equality.
async function formatFix(prettier, text, parser) {
  const p1 = await prettier.format(text, { parser });
  const p2 = await prettier.format(p1, { parser });
  if (p2 === p1) return { text: p1, passes: 1 };
  const p3 = await prettier.format(p2, { parser });
  if (p3 !== p2) throw new Error(`prettier ${parser} has no layout fixed point in 3 passes`);
  return { text: p2, passes: 2 };
}

// ── parse check: the exact standalone gate (ESM stdin) ──────────────────
function parses(text) {
  const r = spawnSync(process.execPath, ["--input-type=module", "--check", "-"], {
    input: text,
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
  return { ok: r.status === 0, why: (r.stderr || "").trim().split("\n").slice(-3).join(" | ") };
}

// ── markers for titles (top tokens, lowercase; fleet convention) ────────
const STOP = new Set(
  ("function return typeof undefined object string number boolean prototype length value default " +
    "exports import this that with from then else case break continue delete instanceof constructor " +
    "arguments void null true false call apply name type text target window document globalthis self " +
    "require module async await yield static class const let var new for while switch throw try catch " +
    "finally extends super using debugger of in do if has own hasown get set")
    .split(" ")
    .filter(Boolean),
);
function markers(text, n = 2) {
  // URLs/identifiers living inside string literals (import paths, asset names)
  // are not code tokens — strip quoted strings before counting
  const code = text.replace(/`[^`]*`|"[^"\n]*"|'[^'\n]*'/g, " ");
  const counts = new Map();
  for (const m of code.matchAll(/[A-Za-z][A-Za-z0-9_]{2,}/g)) {
    const w = m[0].toLowerCase();
    if (STOP.has(w)) continue;
    counts.set(w, (counts.get(w) || 0) + 1);
  }
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).slice(0, n);
}
const markerText = (ms) => ms.map(([w, c]) => `${w}(${c})`).join(", ");

// ── the SERVED chunk's own export statement ─────────────────────────────
// An app chunk's final `export { … }` table is an index-only tail: the table
// re-exports bindings that live in the EARLIER slices, so it cannot parse
// standalone and no src slice carries it. The public export names of every
// served chunk were therefore enumerated by the export gate and compared with
// NOTHING.
//
// The served capture DOES carry the table — in its own minified rendering.
// That rendering is the text the reading copy's table must still match, and
// it is a DIFFERENT text from the reading copy's lines, so the gate's
// comparison is real and not a tautology.
//
// The statement is matched by its PUBLIC NAMES, so a fragment of a string
// that happens to contain `export {` is never mistaken for it, and nothing
// is invented: when the capture carries no statement with the tail's names,
// the tail stays a plain skipped record and the gate keeps reporting it
// unchecked.
function exportListNames(text) {
  const out = new Set();
  for (const m of text.matchAll(/export\s*\{([^}]*)\}/g)) {
    for (const part of m[1].split(",")) {
      const seg = part.trim();
      if (!seg) continue;
      const as = seg.split(/\s+as\s+/);
      out.add((as.length === 2 ? as[1] : seg).trim());
    }
  }
  return out;
}

// the served capture's own export statement, matched by PUBLIC NAMES
function captureExportStatement(captureText, tailText) {
  const want = exportListNames(tailText);
  if (!want.size) return null;
  let found = null;
  for (const m of captureText.matchAll(/export\s*\{[^}]*\}\s*;?/g)) {
    const names = exportListNames(m[0]);
    if (names.size !== want.size) continue;
    if (![...want].every((n) => names.has(n))) continue;
    found = m[0];
  }
  return found;
}

// ── windowize: cut only at statement starts; ≤350 lines, a single ───────
// ── oversized declaration is a window of its own ────────────────────────
function windowize(stmts) {
  const out = [];
  let cur = null;
  for (const s of stmts) {
    if (!cur) {
      cur = { first: s, last: s, count: 1, startLine: s.startLine, endLine: s.endLine };
      continue;
    }
    const projected = s.endLine - cur.startLine + 1;
    if (projected > MAX_WINDOW) {
      out.push(cur);
      cur = { first: s, last: s, count: 1, startLine: s.startLine, endLine: s.endLine };
    } else {
      cur.last = s;
      cur.count++;
      cur.endLine = s.endLine;
    }
  }
  if (cur) out.push(cur);
  return out;
}

// ── inline block scan (byte-exact, over the raw entry buffer) ───────────
function scanBlocks(buf) {
  const blocks = [];
  for (const [open, close, kind] of [
    ["<script", "</script", "script"],
    ["<style", "</style", "style"],
  ]) {
    let p = 0;
    let n = 0;
    while (true) {
      const i = buf.indexOf(open, p);
      if (i < 0) break;
      const after = buf[i + open.length];
      const boundary =
        after === 0x3e || after === 0x2f || after === 0x20 || after === 0x09 || after === 0x0a || after === 0x0d;
      if (!boundary) {
        p = i + open.length;
        continue;
      }
      const tagEnd = buf.indexOf(">", i);
      if (tagEnd < 0) break;
      const j = buf.indexOf(close, tagEnd + 1);
      if (j < 0) throw new Error(`unterminated <${kind}> opened at byte ${i}`);
      const tag = buf.subarray(i, tagEnd + 1).toString("utf8");
      const external = /\bsrc\s*=\s*["']/i.test(tag);
      if (external) {
        blocks.push({ kind, external: true, tag, openStart: i, contentStart: tagEnd + 1, contentEnd: j });
      } else {
        n++;
        const content = buf.subarray(tagEnd + 1, j);
        blocks.push({
          kind: /\btype\s*=\s*["']importmap["']/i.test(tag) ? "importmap" : kind,
          external: false,
          block: n,
          tag,
          openStart: i,
          contentStart: tagEnd + 1,
          contentEnd: j,
          bytes: content.length,
          sha256: sha256(content),
          text: content.toString("utf8"),
        });
      }
      p = j + close.length;
    }
  }
  return blocks.sort((a, b) => a.openStart - b.openStart);
}

// ── curated content-anchored classification (guards fail loudly) ────────
const WHOLE_FILE = {
  "assets__graphics-quality-CrL3qbU3": {
    title:
      "assets__graphics-quality-CrL3qbU3 — bundled three.js r185 graphics engine (vendor, whole-file, never sliced)",
    desc:
      "the bundled three.js r185 graphics engine — the vendored `__THREE__` revision registration, WebGLRenderer, math/geometry/material/texture/renderer machinery and the app's graphics-quality kit layered on top — third-party engine code, not app logic. Vendor rule — indexed whole-file in readable/, never sliced or rewritten.",
    guard: (t) => t.includes("WebGLRenderer") && t.includes("__THREE__") && /REVISION\s*:\s*\(\)\s*=>\s*[`"']185[`"']/.test(t),
    what: "bundled three.js r185 graphics engine",
  },
};

async function main() {
  const { mod: prettier, at } = await loadPrettier();
  console.log(`pinned prettier ${PINNED} (${at})`);

  const manifest = JSON.parse(fs.readFileSync(path.join(proj, ".upstream", "manifest.json"), "utf8"));
  const captured = Object.keys(manifest.files).map((r) => r.split(path.sep).join("/")).sort();
  const captureBytes = (rel) => {
    const abs = path.join(proj, rel);
    if (!fs.existsSync(abs)) throw new Error(`capture file missing: ${rel}`);
    const buf = fs.readFileSync(abs);
    if (sha256(buf) !== manifest.files[rel].sha256)
      throw new Error(`${rel} on disk does not match .upstream/manifest.json — re-verify the capture first`);
    return buf;
  };

  const readableDir = path.join(proj, "readable");
  const srcDir = path.join(proj, "src");
  if (!CHECK) {
    fs.mkdirSync(readableDir, { recursive: true });
    fs.mkdirSync(srcDir, { recursive: true });
  }
  const written = { readable: new Set(), src: new Set() };

  const sources = [];
  const sections = [];
  const notRendered = [];
  let inlineFiles = [];
  let slicedTotal = 0;
  let skippedTotal = 0;

  const jsRelsAll = captured.filter((r) => /\.js$/i.test(r));
  const cssRels = captured.filter((r) => /\.css$/i.test(r));
  const htmlRels = captured.filter((r) => /\.html$/i.test(r));
  // entry chunk first (it is the game's entry point), then the module chunks,
  // then the vendored decoder — a reading order, not a build order
  const rank = (rel) => (/\/graphics-quality/.test(rel) ? 2 : /\/index-/.test(rel) ? 0 : 1);
  const jsRels = jsRelsAll.slice().sort((a, b) => rank(a) - rank(b) || a.localeCompare(b));
  const vendorJs = jsRelsAll.filter((r) => WHOLE_FILE[tagOf(r)]);

  // ── 1) JS: vendor -> wholeFile; app -> statement-aligned slices ─────────
  for (const rel of jsRels) {
    const buf = captureBytes(rel);
    const text = buf.toString("utf8");
    if (!Buffer.from(text, "utf8").equals(buf)) throw new Error(`${rel} does not round-trip through utf8`);
    const { text: pretty, passes: prettyPasses } = await formatFix(prettier, text, "babel");
    if (pretty === text)
      throw new Error(`${rel}: prettier output is byte-identical to the capture — nothing to derive`);
    const sourceFile = prettyRelFor(rel);
    writeDerived(path.join(proj, sourceFile), pretty);
    written.readable.add(path.basename(sourceFile));
    const lines = linesOf(pretty);
    const tag = tagOf(rel);
    const cls = WHOLE_FILE[tag];

    if (cls) {
      const region = pretty;
      if (cls.guard && !cls.guard(region))
        throw new Error(`${rel}: whole-file guard failed — readable changed shape`);
      sections.push({
        // `file` is the DERIVED TEXT and it must exist: the vendor rule never
        // slices or renames the chunk, so the readable pretty is the chunk's
        // only derived form. `origin` records the PRISTINE it was rendered
        // from (the captured chunk) — the file that still carries the
        // chunk's public export table. The frozen export gate reads that
        // pair; a `file` that names a path nothing holds (the old
        // `<tag>-vendor.js`) leaves the table invisible.
        file: sourceFile,
        wholeFile: true,
        origin: rel,
        title: cls.title,
        desc: `Lines 1-${lines.length} of ${sourceFile}: ${cls.desc}`,
        note: "whole-file (vendor rule): indexed in readable/, never sliced; `file` is the readable pretty (the derived text), `origin` the captured chunk (the pristine)",
        startLine: 1,
        endLine: lines.length,
        sourceFile,
      });
      sources.push({
        sourceFile,
        capture: rel,
        captureKind: "file",
        captureSha256: manifest.files[rel].sha256,
        captureBytes: buf.length,
        prettyLines: lines.length,
        prettyBytes: Buffer.byteLength(pretty, "utf8"),
        tag,
        slices: 0,
        derived: "readable only (vendor bundle, wholeFile)",
        what: cls.what,
      });
      console.log(`derive: ${rel} -> ${sourceFile} (${lines.length} lines, wholeFile vendor)`);
      continue;
    }

    // ── app chunk: statement-aligned slicing ────────────────────────────
    const dbg = await prettier.__debug.parse(pretty, { parser: "babel" });
    const top = (dbg.ast.program || dbg.ast).body;
    const stmts = top.map((n) => ({
      node: n,
      startLine: lineOf(pretty, n.start),
      endLine: lineOf(pretty, n.end),
      text: pretty.slice(n.start, n.end),
    }));
    for (let i = 1; i < stmts.length; i++)
      if (stmts[i].startLine <= stmts[i - 1].endLine)
        throw new Error(`${rel}: statements ${i - 1}/${i} share a line — cannot slice at line boundaries`);

    const specials = [];
    const covered = new Array(stmts.length).fill(false);
    const claim = (a, b, block) => {
      if (a < 0 || b < a || b >= stmts.length) throw new Error(`${rel}: bad ${block.file} range ${a}-${b}`);
      for (let i = a; i <= b; i++) {
        if (covered[i]) throw new Error(`${rel}: ${block.file} overlaps another block at statement ${i}`);
        covered[i] = true;
      }
      specials.push({ ...block, A: stmts[a].startLine, B: stmts[b].endLine });
    };

    let exportSkip = null;
    const lastStmt = stmts[stmts.length - 1];
    if (
      lastStmt &&
      lastStmt.node.type === "ExportNamedDeclaration" &&
      !covered[stmts.length - 1] &&
      /^export\s*\{[\s\S]*\}\s*;?$/.test(lastStmt.text.trim()) &&
      !/\bfrom\b/.test(lastStmt.text)
    ) {
      // the SERVED chunk's own export statement: the tail records it as its
      // text, so the export gate compares the reading copy's rendered table
      // against the served chunk — two different files, never a self-compare
      const served = captureExportStatement(text, lastStmt.text);
      if (!served)
        throw new Error(`${rel}: the served capture carries no export statement with the reading copy's public names`);
      claim(stmts.length - 1, stmts.length - 1, {
        kind: "skip",
        file: `${tag}-tail-export.js`,
        title: `${tag} — final export table (not sliced)`,
        desc: `Lines ${lastStmt.startLine}-${lastStmt.endLine}. The chunk's final export {…} table — the exported bindings live in the earlier slices, so a slice carrying the table could not parse standalone; the region is indexed here, and its recorded text is the served chunk's own export statement — the statement the reading copy's table must still match.`,
        text: served,
      });
    }

    // runs of uncovered statements -> windows
    const runs = [];
    for (let i = 0; i < stmts.length; i++) {
      if (covered[i]) continue;
      const run = [stmts[i]];
      while (i + 1 < stmts.length && !covered[i + 1]) run.push(stmts[++i]);
      runs.push(run);
    }
    const slices = [];
    for (const run of runs) for (const w of windowize(run)) slices.push(w);

    // blocks in line order, then re-tile so every line of the pretty is owned
    const blocks = [...specials, ...slices.map((w) => ({ kind: "slice", A: w.startLine, B: w.endLine, count: w.count }))];
    blocks.sort((a, b) => a.A - b.A);
    for (let i = 0; i < blocks.length; i++) {
      if (i === 0) blocks[i].A = 1;
      if (i + 1 < blocks.length) blocks[i].B = blocks[i + 1].A - 1;
      else blocks[i].B = lines.length;
    }

    let nn = 0;
    let perFileSkipped = 0;
    let perFileVendor = 0;
    for (const b of blocks) {
      if (b.kind === "slice") {
        nn++;
        const num = String(nn).padStart(2, "0");
        const body = lines.slice(b.A - 1, b.B).join("\n") + "\n";
        const ms = markers(body);
        const topWord = ms.length ? ms[0][0] : /^\s*import\b/.test(body) ? "imports" : tag.toLowerCase();
        const oversized = b.count === 1 && b.B - b.A + 1 > MAX_WINDOW;
        const file = `${tag}-${num}.js`;
        const sliceText =
          `// ${tag} ${num} — ${topWord}\n` +
          `// Lines ${b.A}-${b.B} of ${sourceFile} (statement-aligned).\n` +
          body;
        const chk = parses(sliceText);
        if (!chk.ok) throw new Error(`generated src/${file} does not parse standalone: ${chk.why}`);
        writeDerived(path.join(srcDir, file), sliceText);
        written.src.add(file);
        sections.push({
          file,
          title: `${tag} ${num} — ${topWord}`,
          desc: `${oversized ? "Oversized single declaration (kept whole). " : ""}Lines ${b.A}-${b.B}. Markers: ${markerText(ms)}.`,
          startLine: b.A,
          endLine: b.B,
          sourceFile,
        });
      } else if (b.kind === "whole") {
        perFileVendor++;
        sections.push({
          file: b.file,
          wholeFile: true,
          title: b.title,
          desc: `Lines ${b.A}-${b.B} of ${sourceFile}: ${b.body}`,
          note: "whole-file region (build machinery/vendor rule): indexed in readable/, never sliced",
          startLine: b.A,
          endLine: b.B,
          sourceFile,
        });
      } else {
        perFileSkipped++;
        sections.push({
          file: b.file,
          skipped: true,
          title: b.title,
          desc: b.desc,
          startLine: b.A,
          endLine: b.B,
          sourceFile,
          firstLine: lines[b.A - 1],
          lastLine: lines[b.B - 1],
          // the SERVED chunk's own export statement — the text the reading
          // copy's table must still match (the export gate compares them).
          // It is a DIFFERENT text from the reading copy's lines, so the
          // comparison is real: a public name the served chunk exports and
          // the reading copy does not is caught, which a comparison of the
          // reading copy with itself could never do.
          ...(b.text ? { text: b.text } : {}),
          // the served chunk this tail's statement came from
          ...(b.text ? { capture: rel } : {}),
        });
      }
    }
    slicedTotal += nn;
    skippedTotal += perFileSkipped;
    sources.push({
      sourceFile,
      capture: rel,
      captureKind: "file",
      captureSha256: manifest.files[rel].sha256,
      captureBytes: buf.length,
      prettyLines: lines.length,
      prettyBytes: Buffer.byteLength(pretty, "utf8"),
      prettyPasses,
      idempotent: true,
      tag,
      slices: nn,
      derived:
        `readable + ${nn} statement-aligned slice(s)` +
        (perFileVendor ? ` + ${perFileVendor} wholeFile region(s)` : "") +
        (perFileSkipped ? ` + ${perFileSkipped} skipped section(s)` : ""),
    });
    console.log(
      `derive: ${rel} -> ${sourceFile} (${lines.length} lines, ${nn} slices, ${perFileVendor} wholeFile, ${perFileSkipped} skipped)`,
    );
  }

  // ── 2) CSS: readable pretty, wholeFile section (stylesheet rule) ────────
  for (const rel of cssRels) {
    const buf = captureBytes(rel);
    const text = buf.toString("utf8");
    const { text: pretty, passes: prettyPasses } = await formatFix(prettier, text, "css");
    if (pretty === text) throw new Error(`${rel}: prettier output is byte-identical to the capture`);
    const sourceFile = prettyRelFor(rel);
    writeDerived(path.join(proj, sourceFile), pretty);
    written.readable.add(path.basename(sourceFile));
    const lines = linesOf(pretty);
    const tag = tagOf(rel);
    sections.push({
      file: `${tag}.css`,
      wholeFile: true,
      title: `${tag} — stylesheet (whole-file, never sliced)`,
      desc: `Lines 1-${lines.length} of ${sourceFile}. Whole-file (stylesheet rule): the capture stylesheet is indexed whole in readable/, never sliced.`,
      note: "whole-file (stylesheet, not sliced): CSS is indexed whole in readable/",
      startLine: 1,
      endLine: lines.length,
      sourceFile,
    });
    sources.push({
      sourceFile,
      capture: rel,
      captureKind: "file",
      captureSha256: manifest.files[rel].sha256,
      captureBytes: buf.length,
      prettyLines: lines.length,
      prettyBytes: Buffer.byteLength(pretty, "utf8"),
      prettyPasses,
      idempotent: true,
      tag,
      slices: 0,
      derived: "readable only (stylesheet, wholeFile)",
    });
    console.log(`derive: ${rel} -> ${sourceFile} (${lines.length} lines, wholeFile stylesheet)`);
  }

  // ── 3) HTML entry document: inline <script>/<style> scan + twins ───────
  const inlineMapBlocks = [];
  for (const rel of htmlRels) {
    const buf = captureBytes(rel);
    const blocks = scanBlocks(buf);
    const inline = blocks.filter((b) => !b.external);
    const external = blocks.filter((b) => b.external);
    inlineFiles.push(rel);
    for (const b of external)
      console.log(`derive: ${rel}: external ${b.kind} (not derived): ${b.tag.slice(0, 90)}`);
    if (!inline.length) {
      console.log(`derive: ${rel}: no inline <script>/<style> content blocks — no inline twins`);
      continue;
    }
    const entryTag = rel.replace(/\.html$/i, "").split("/").join("__");
    for (const b of inline) {
      const isImportmap = b.kind === "importmap";
      const parser = isImportmap ? "json" : b.kind === "style" ? "css" : b.kind;
      const DATA_TYPES = new Set(["application/ld+json", "application/json", "importmap", "speculationrules"]);
      const type = (/\btype\s*=\s*["']?([^"'\s>]+)/i.exec(b.tag)?.[1] ?? "").toLowerCase();
      if (parser === "script" && DATA_TYPES.has(type)) {
        notRendered.push({
          capture: rel,
          kind: "inline-data",
          type,
          byteStart: b.contentStart,
          byteEnd: b.contentEnd,
          bytes: b.bytes,
          sha256: b.sha256,
          rendered: false,
          reason: `typed data block (<script type="${type}">) — data, not JS/CSS; recorded with range + sha256, no pretty pass`,
        });
        continue;
      }
      const tag = `${entryTag}-inline-${b.block}`;
      const prettyFile = `${tag}.pretty.${isImportmap ? "json" : b.kind === "style" ? "css" : "js"}`;
      const pretty = (await formatFix(prettier, b.text, parser)).text;
      if (pretty === b.text)
        throw new Error(`readable/${prettyFile} would be byte-identical to its capture source`);
      writeDerived(path.join(readableDir, prettyFile), pretty);
      written.readable.add(prettyFile);
      const lines = linesOf(pretty);
      const prettyBuf = Buffer.from(pretty, "utf8");
      inlineMapBlocks.push({
        file: `readable/${prettyFile}`,
        source: rel,
        kind: b.kind,
        byteStart: b.contentStart,
        byteEnd: b.contentEnd,
        bytes: b.bytes,
        sha256: b.sha256,
        prettyFile: `readable/${prettyFile}`,
        prettyBytes: prettyBuf.length,
      });
      sections.push({
        file: `${tag}.${isImportmap ? "json" : b.kind === "style" ? "css" : "js"}`,
        wholeFile: true,
        title: `${tag} — inline ${b.kind} block (whole-file, never sliced)`,
        desc: `Lines 1-${lines.length} of readable/${prettyFile}. Whole-file: the entry document's inline ${b.kind} block (${b.bytes} B at bytes ${b.contentStart}-${b.contentEnd} of ${rel}) is indexed whole and never sliced.`,
        note: `whole-file (entry inline ${b.kind} block, not sliced)`,
        startLine: 1,
        endLine: lines.length,
        sourceFile: `readable/${prettyFile}`,
      });
      sources.push({
        sourceFile: `readable/${prettyFile}`,
        capture: rel,
        captureKind: `inline-${b.kind}`,
        captureByteStart: b.contentStart,
        captureByteEnd: b.contentEnd,
        captureSha256: b.sha256,
        captureBytes: b.bytes,
        prettyLines: lines.length,
        prettyBytes: prettyBuf.length,
        prettySha256: sha256(prettyBuf),
        tag,
        slices: 0,
        derived: "readable only (inline block, wholeFile)",
      });
    }
  }
  if (inlineMapBlocks.length) {
    writeDerived(
      path.join(readableDir, "index-inline-map.json"),
      JSON.stringify(
        {
          note:
            "byte ranges (into the captured entry document) + sha256 for every inline <script>/<style> content block, " +
            "with its readable twin; generated by tools/derive.mjs",
          blocks: inlineMapBlocks,
        },
        null,
        2,
      ) + "\n",
    );
    console.log(`derive: wrote readable/index-inline-map.json (${inlineMapBlocks.length} inline block(s))`);
  }

  // ── 3.5) non-code payloads: hashed notRendered records (no pretty pass) ─
  const KIND_OF = [
    [/\.(png|jpe?g|webp|gif|svg|avif|ico)$/i, "image"],
    [/\.(mp4|webm)$/i, "video"],
    [/\.(mp3|ogg|wav|m4a)$/i, "audio"],
    [/\.(woff2?|ttf|otf)$/i, "font"],
    [/\.(glb|gltf)$/i, "model"],
  ];
  for (const rel of captured) {
    const kind = KIND_OF.find(([re]) => re.test(rel))?.[1];
    if (!kind) continue;
    const buf = captureBytes(rel);
    notRendered.push({
      capture: rel,
      kind,
      bytes: buf.length,
      sha256: manifest.files[rel].sha256,
      rendered: false,
      reason: `${kind} payload — binary capture stays byte-exact under .upstream/manifest.json; recorded here hashed, no pretty pass`,
    });
  }

  // ── 4) prune orphan derived files (capture untouched) ──────────────────
  let pruned = 0;
  for (const [dir, keep, exts] of [
    [readableDir, written.readable, /\.(pretty\.js|pretty\.css)$/],
    [srcDir, written.src, /\.js$/],
  ]) {
    for (const f of fs.existsSync(dir) ? fs.readdirSync(dir) : []) {
      if (exts.test(f) && !keep.has(f)) {
        if (CHECK) {
          noteProblem(
            keyOf(path.join(dir, f)),
            `derive --check: orphan derived file ${path.join(path.basename(dir), f)}`,
          );
        } else {
          fs.rmSync(path.join(dir, f));
          pruned++;
          console.log(`derive: pruned orphan derived file ${path.join(path.basename(dir), f)}`);
        }
      }
    }
  }

  // ── 5) split-spec.json (2-space indent + trailing newline) ─────────────
  const appJs = sources.filter((s) => s.derived.startsWith("readable +"));
  const vendorJsS = sources.filter((s) => /wholeFile\)$/.test(s.derived) && s.capture.endsWith(".js"));
  const cssSources = sources.filter((s) => s.sourceFile.endsWith(".pretty.css"));
  const spec = {
    project: "patio-fyi",
    kind: "statement-aligned-slices",
    defaultFile: `src/${sections.find((s) => !s.wholeFile && !s.skipped).file}`,
    note:
      "PATIO (https://play.patio.fyi/) is capture-class: a Vite production build of a session-based 8v8 " +
      "three.js shooter ('Friends session', ruleset r15-hangar-v1, map Hangar Nine) served at the origin root " +
      "by Cloudflare. §0.4 fork-over-mirror was checked on 2026-10-12 — the page and its JS reference no " +
      "public source repo (see README), so the mirror stands. Derived pipeline: capture → pinned prettier " +
      "3.9.6 (module API, default options, formatted to a layout fixed point, 1-2 passes — never the CLI: it respects " +
      ".gitignore and can silently echo its input) → readable/<name>.pretty.js|css per captured JS/CSS file " +
      "(capture-root-relative name, nested dirs flattened with __; every pretty provably NOT byte-identical " +
      "to its capture source) → statement-aligned slices src/<name>-NN.js of every APP chunk (top-level " +
      "declaration boundaries only, ~250-350 line windows; oversized single declarations stay whole) with an " +
      "exact 2-line provenance header. Every slice parses standalone under `node --input-type=module " +
      "--check -` and round-trips byte-exact to its recorded readable line range. Vendor rule — wholeFile " +
      "section, never sliced: assets/graphics-quality-CrL3qbU3.js is the bundled three.js r185 graphics " +
      "engine (the vendored WebGLRenderer + __THREE__ revision registration + renderer machinery with the " +
      "app's graphics-quality kit on top), content-anchored and guarded. Stylesheet rule — " +
      "assets/ui-DCgfuisD.css is wholeFile. Non-standalone parts are skipped sections, indexed but never " +
      "sliced: every app chunk's final export {…} table (the bindings live in the earlier slices). Each such " +
      "tail records the SERVED chunk's own export statement as its text — the capture's minified export{…}, " +
      "matched by public names — so the public-export gate compares two genuinely different files (the " +
      "reading copy's rendered table and the served chunk's statement) instead of the reading copy with itself. " +
      "Inline " +
      "<script>/<style> scan: index.html references external chunks (the /session.js bootstrap and the " +
      "module entry) and carries one inline <style> block (the rotate-hint/UI CSS), which gets a wholeFile " +
      "twin readable/index-inline-1.pretty.css + a readable/index-inline-map.json entry with its exact byte " +
      "range and sha256. Binary payloads (images, models, audio, fonts) are hashed notRendered records " +
      "(bytes + sha256), never prettified. Identifiers in src/ are the bundle's own minified names — the " +
      "rename campaign (PLAN §5) is recorded as an open task in README.md, not claimed here. Capture bytes " +
      "are untouched by everything above; re-cut with `node tools/derive.mjs` after any capture refresh. " +
      "`node tools/audit.js` is the gate.",
    renderOptions: {
      _default:
        "prettier 3.9.6, module API, default options, formatted to a layout fixed point (1 or 2 passes; prettier 3.9.6 member-chain layout is not idempotent on some optional-chain argument patterns — the recorded method is format-to-fixed-point, and audit re-renders with it) — never the CLI: it respects .gitignore and can silently echo its input",
      js: "parser babel, no plugins",
      css: "parser css, no plugins",
      json: "parser json, no plugins (inline importmap blocks, if any)",
    },
    source:
      `readable/: ${sources.filter((s) => s.sourceFile?.endsWith(".pretty.js")).length} JS pretties ` +
      `(${appJs.length} app chunk(s) sliced, ${vendorJsS.length} vendor wholeFile) + ` +
      `${cssSources.length} CSS pretties ` +
      `(incl. ${inlineMapBlocks.length} inline twin(s)); ` +
      `src/: ${appJs.reduce((n, s) => n + s.slices, 0)} statement-aligned slices across ${appJs.length} app chunk(s); ` +
      `${sections.filter((s) => s.skipped).length} skipped section(s); ` +
      `${sections.filter((s) => s.wholeFile).length} wholeFile section(s); ` +
      `capture: ${captured.length} files under .upstream/manifest.json; inline scan: ${inlineFiles.join(", ")} ` +
      `(${inlineMapBlocks.length} inline content block(s)).`,
    inline: {
      scanned: inlineFiles,
      contentBlocks: inlineMapBlocks.length,
      notRendered: notRendered.length,
      note:
        inlineMapBlocks.length
          ? `${inlineMapBlocks.length} inline content block(s) in the captured entry document — readable twins + ` +
            `readable/index-inline-map.json with exact byte ranges and sha256; the rest of the entry references ` +
            `external chunks`
          : "no inline <script>/<style> content blocks in the captured entry document — external chunk references " +
            "only, so there are no *-inline-N twins and no readable/index-inline-map.json",
    },
    sources,
    sections,
    notRendered,
  };
  writeDerived(path.join(proj, "split-spec.json"), JSON.stringify(spec, null, 2) + "\n");

  // ── 6) self-check (tools/audit.js is the authoritative gate) ────────────
  let bad = 0;
  const bySource = new Map();
  for (const s of sections) {
    if (!bySource.has(s.sourceFile)) bySource.set(s.sourceFile, []);
    bySource.get(s.sourceFile).push(s);
  }
  for (const [sourceFile, list] of bySource) {
    const lines = readLines(path.join(proj, sourceFile));
    const sorted = [...list].sort((a, b) => a.startLine - b.startLine);
    if (sorted[0].startLine !== 1) {
      console.error(`TILING FAIL ${sourceFile}: starts at line ${sorted[0].startLine}`);
      bad++;
    }
    for (let i = 1; i < sorted.length; i++)
      if (sorted[i].startLine !== sorted[i - 1].endLine + 1) {
        console.error(`TILING FAIL ${sourceFile}: gap/overlap at ${sorted[i].file}`);
        bad++;
      }
    if (sorted[sorted.length - 1].endLine !== lines.length) {
      console.error(`TILING FAIL ${sourceFile}: does not reach EOF (${lines.length})`);
      bad++;
    }
  }
  let parsed = 0;
  let ranged = 0;
  let roundOK = 0;
  for (const s of sections) {
    if (s.wholeFile || s.skipped) continue;
    ranged++;
    const abs = path.join(srcDir, s.file);
    const text = readDerived(abs);
    const nl2 = text.indexOf("\n", text.indexOf("\n") + 1);
    const body = text.slice(nl2 + 1);
    const expected = readLines(path.join(proj, s.sourceFile)).slice(s.startLine - 1, s.endLine).join("\n") + "\n";
    if (body !== expected) {
      console.error(`ROUND-TRIP FAIL ${s.file}`);
      bad++;
    } else roundOK++;
    if (!parses(text).ok) {
      console.error(`PARSE FAIL src/${s.file}`);
      bad++;
    } else parsed++;
  }
  let prettyParsed = 0;
  for (const s of sources) {
    if (!s.sourceFile?.endsWith(".pretty.js")) continue;
    if (!parses(readDerived(path.join(proj, s.sourceFile))).ok) {
      console.error(`PARSE FAIL ${s.sourceFile}`);
      bad++;
    } else prettyParsed++;
  }
  console.log(
    `derive: ${written.readable.size} readable file(s), ${written.src.size} src slices ` +
      `(${parsed}/${ranged} parse standalone, ${roundOK}/${ranged} round-trip byte-exact), ` +
      `${skippedTotal} skipped, ${sections.filter((s) => s.wholeFile).length} wholeFile, ` +
      `${prettyParsed} pretty js parse clean, ${notRendered.length} notRendered, ${pruned} orphan(s) pruned — ` +
      `self-check ${bad ? bad + " FAILURE(S)" : "clean"}`,
  );
  if (CHECK) {
    if (checkProblems || bad) {
      console.error(
        `derive --check: ${checkProblems} difference(s) between the committed derived layers and a fresh re-derivation` +
          (bad ? ` (self-check: ${bad} failure(s))` : ""),
      );
      process.exit(1);
    }
    console.log("derive --check: the committed derived layers match a fresh re-derivation exactly (nothing written)");
    process.exit(0);
  }
  if (bad) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
