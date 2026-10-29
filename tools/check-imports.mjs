// check-imports.mjs — does every relative import the derived layer makes
// resolve to a chunk THIS LAYER carries?
//
// THE CLASS THIS GATE GUARDS
//   A served chunk names its neighbours by RELATIVE SPECIFIER (`import { a }
//   from "./zipline.js"`, `import("./x.js")`), and a specifier resolves
//   against the importing chunk's own directory in the capture tree — exactly
//   as a browser resolves it. So an import names a chunk by a path, and the
//   layer either CARRIES that path or it does not.
//
//   When the layer does not carry it, the import cannot resolve at runtime:
//   the browser asks the server for a file the mirror never fetched.
//
//   The mirror's own audit.js already guards the OTHER half of this class —
//   it resolves every relative specifier in src/ against the CAPTURE and
//   fails when the capture carries no such file, accepting the capture's
//   recorded 404 gaps. What it does NOT ask is whether the LAYER carries the
//   target: a chunk the capture holds but the layer never cut would satisfy
//   the audit and still leave the import dangling in the layer. That is the
//   half this gate covers.
//
// WHAT IT CHECKS
//   1. LAYER COVERAGE — every relative import of every slice the layer
//      carries resolves to a chunk the layer carries. The inventory is the
//      mirror's own record: the `sources[]` of split-spec.json, whose
//      `capture` field is the path the chunk is served under. The specifier
//      is resolved the way a bundler resolves it: relative to the importing
//      chunk's own directory in the capture tree.
//   2. THE RECORDED GAPS — an import that resolves to nothing is only
//      acceptable when the capture itself records it as a 404: the shipped
//      raw player-sim source (assets/sim-dCf7ngvf.js) imports sibling paths
//      of the SERVER's source tree (./zipline.js, ./ladder.js,
//      ../core/world.js, ../demo/*-sim.js) that upstream never serves, and
//      the capture recorded every one of them in _mirror-report.json's
//      `unresolved` list. Those are accepted, reported, and never invented
//      around. An UNRECORDED dangling import fails the gate.
//
// WHAT IT DOES NOT COVER
//   - A bare specifier (`import "three"`) is a package, not a file of the
//     site; it is not this gate's business.
//   - Whether the imported chunk EXPORTS the name asked for: that is
//     audit.js's business.
//   - The capture is never edited by this gate, and never read as authority
//     for what the layer carries: the mirror's own record is.
//
// Usage: node tools/check-imports.mjs [--quiet]
// Exits 1 if the layer carries an import it cannot resolve to a chunk it
// carries, or one the capture never recorded as a gap.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const PROJ = path.resolve(HERE, "..");
const SRC = path.join(PROJ, "src");
const QUIET = process.argv.includes("--quiet");

const read = (p) => {
  try {
    return fs.readFileSync(p, "utf8");
  } catch {
    return null;
  }
};

const ID_START = /[A-Za-z_$]/;
const ID_PART = /[\w$]/;

/** Tokenize a whole source text. Every token carries its span (`s`..`e`). */
function tokens(text) {
  const st = { i: 0, text, out: [] };
  scan(st);
  return st.out;
}
function emit(st, t, v, s, e) {
  st.out.push({ t, v, s, e: e === undefined ? s + v.length : e });
}
function scan(st) {
  const { text } = st;
  const n = text.length;
  while (st.i < n) {
    const c = text[st.i];
    const start = st.i;
    if (c === " " || c === "\t" || c === "\n" || c === "\r") {
      st.i++;
      continue;
    }
    if (c === "/" && text[st.i + 1] === "/") {
      while (st.i < n && text[st.i] !== "\n") st.i++;
      continue;
    }
    if (c === "/" && text[st.i + 1] === "*") {
      st.i += 2;
      while (st.i < n && !(text[st.i] === "*" && text[st.i + 1] === "/")) st.i++;
      st.i += 2;
      continue;
    }
    if (c === '"' || c === "'") {
      let j = st.i + 1;
      while (j < n) {
        if (text[j] === "\\") {
          j += 2;
          continue;
        }
        if (text[j] === c) {
          j++;
          break;
        }
        j++;
      }
      emit(st, "lit", text.slice(st.i, j), start);
      st.i = j;
      continue;
    }
    if (c === "`") {
      // a template literal is scanned as ONE token: an interpolation may hold
      // braces and quotes, and the gate has no business inside it.
      let j = st.i + 1;
      let depth = 0;
      while (j < n) {
        if (text[j] === "\\") {
          j += 2;
          continue;
        }
        if (text[j] === "$" && text[j + 1] === "{") {
          depth++;
          j += 2;
          continue;
        }
        if (depth > 0) {
          if (text[j] === "}") depth--;
          j++;
          continue;
        }
        if (text[j] === "`") {
          j++;
          break;
        }
        j++;
      }
      emit(st, "lit", text.slice(st.i, j), start);
      st.i = j;
      continue;
    }
    if (c === "/" && isRegexStart(st)) {
      let j = st.i + 1;
      let inClass = !1;
      while (j < n && !(text[j] === "/" && !inClass)) {
        if (text[j] === "\n") break;
        if (text[j] === "[") inClass = !0;
        else if (text[j] === "]") inClass = !1;
        else if (text[j] === "\\") j++;
        j++;
      }
      if (text[j] === "/") {
        j++;
        while (j < n && /[a-z]/.test(text[j])) j++;
        emit(st, "re", text.slice(st.i, j), start);
        st.i = j;
        continue;
      }
    }
    if (ID_START.test(c)) {
      let j = st.i + 1;
      while (j < n && ID_PART.test(text[j])) j++;
      emit(st, "id", text.slice(st.i, j), start);
      st.i = j;
      continue;
    }
    if (/[0-9]/.test(c)) {
      let j = st.i + 1;
      while (j < n && /[\w.]/.test(text[j])) j++;
      emit(st, "num", text.slice(st.i, j), start);
      st.i = j;
      continue;
    }
    emit(st, "pun", c, start);
    st.i++;
  }
}
function isRegexStart(st) {
  const prev = st.out[st.out.length - 1];
  if (!prev) return !0;
  if (prev.t === "pun") return !(")]}".includes(prev.v)) || prev.v === "++" || prev.v === "--";
  if (prev.t === "id")
    return /^(?:return|typeof|instanceof|in|of|new|delete|void|case|do|else|yield|await|throw)$/.test(prev.v);
  return !1;
}

/** The value of a string-literal token, without its quotes. */
function litValue(v) {
  const s = String(v);
  return s.slice(1, -1).replace(/\\(["'`\\])/g, "$1");
}

/**
 * Every module specifier of a text, in source order.
 *
 *   import { a } from "./x.js"  -> "./x.js"
 *   import "./x.js"             -> "./x.js"
 *   import("./x.js")            -> "./x.js"
 *   export * from "./x.js"      -> "./x.js"
 *
 * The scanner is the tokenizer's, so a specifier inside a string or a comment
 * is never mistaken for one.
 */
function moduleSpecifiers(text) {
  const ts = tokens(text);
  const out = [];
  for (let i = 0; i < ts.length; i++) {
    const t = ts[i];
    if (t.t !== "id") continue;
    if (t.v === "from") {
      const lit = ts[i + 1];
      if (lit && lit.t === "lit") out.push(litValue(lit.v));
      continue;
    }
    if (t.v === "import") {
      const lit = ts[i + 1];
      if (lit && lit.t === "lit") {
        out.push(litValue(lit.v));
        continue;
      }
      if (lit && lit.t === "pun" && lit.v === "(") {
        const arg = ts[i + 2];
        if (arg && arg.t === "lit") out.push(litValue(arg.v));
      }
    }
  }
  return out;
}

// ── the mirror's own record ────────────────────────────────────────────────
const specPath = path.join(PROJ, "split-spec.json");
if (!fs.existsSync(specPath)) {
  console.log("check-imports: no split-spec.json - this mirror has no derived layer to check");
  process.exit(0);
}
const spec = JSON.parse(fs.readFileSync(specPath, "utf8"));

// the inventory: every chunk the layer carries, keyed by the path it is
// served under
const carried = new Set();
const captureByPretty = new Map();
for (const src of spec.sources || []) {
  if (!src.capture) continue;
  const cap = src.capture.replace(/\\/g, "/");
  carried.add(cap);
  if (src.sourceFile) captureByPretty.set(src.sourceFile.replace(/\\/g, "/"), cap);
}

// the capture's own record of the paths upstream never served
const recordedGaps = new Set();
try {
  const report = JSON.parse(fs.readFileSync(path.join(PROJ, "_mirror-report.json"), "utf8"));
  for (const u of report.unresolved ?? []) recordedGaps.add(String(u.path).replace(/\\/g, "/"));
} catch {
  /* no report: no gap allowance */
}

const problems = [];
const gaps = new Set();
let importsChecked = 0;

for (const sec of spec.sections || []) {
  if (sec.wholeFile === true || sec.skipped === true) continue;
  if (!sec.file || typeof sec.sourceFile !== "string") continue;
  const sliceAbs = path.join(SRC, path.basename(String(sec.file)));
  const code = read(sliceAbs);
  if (code === null) continue;
  const capRel = captureByPretty.get(sec.sourceFile.replace(/\\/g, "/"));
  const baseDir = capRel ? path.posix.dirname(capRel) : null;
  for (const specifier of moduleSpecifiers(code)) {
    if (!specifier.startsWith(".") && !specifier.startsWith("/")) continue; // a package
    const clean = specifier.split(/[?#]/)[0];
    if (!clean) continue;
    if (!baseDir) {
      problems.push(`src/${sec.file}: imports "${specifier}" but no capture provenance is known`);
      continue;
    }
    const resolved = clean.startsWith("/")
      ? path.posix.normalize(clean.slice(1))
      : path.posix.normalize(path.posix.join(baseDir, clean));
    importsChecked++;
    if (carried.has(resolved)) continue;
    if (recordedGaps.has(resolved)) {
      gaps.add(resolved);
      continue;
    }
    const onDisk = fs.existsSync(path.join(PROJ, resolved));
    problems.push(
      onDisk
        ? `src/${sec.file}: imports "${specifier}" and the capture carries ${resolved}, but the layer does not - the import cannot resolve`
        : `src/${sec.file}: imports "${specifier}" but nothing carries ${resolved} and the capture records no 404 gap for it`,
    );
  }
}

if (!QUIET) {
  console.log(
    `check-imports: ${carried.size} chunk(s) carried by the layer, ${importsChecked} relative import(s) checked`,
  );
  if (gaps.size) {
    console.log(
      `  RECORDED capture gaps (the capture's own 404 list, upstream never served them): ${gaps.size}`,
    );
    for (const g of [...gaps].sort()) console.log(`    ${g}`);
  }
  if (problems.length) {
    console.log(`  PROBLEMS: ${problems.length}`);
    for (const p of problems) console.log(`    ${p}`);
  } else {
    console.log("  every relative import resolves to a chunk the layer carries: YES");
  }
}
if (problems.length) process.exit(1);
