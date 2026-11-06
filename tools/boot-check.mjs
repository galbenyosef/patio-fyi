#!/usr/bin/env node
// boot-check.mjs — offline boot assertion + screenshot for the PATIO mirror.
//
// Launches a real Chrome with every hostname mapped to 127.0.0.1
// (`--host-resolver-rules=MAP * 127.0.0.1`), so the only reachable server is
// the mirror's own static one. The page is driven over the DevTools protocol:
// no `--virtual-time-budget`, because it does not advance an app's rAF loop;
// this waits on the page's own state and polls with a real clock instead.
//
// PATIO's own signals are the evidence: the page either paints a canvas and
// gameplay, or the deploy/lobby panel prints "The game could not start (…)".
// Both are read back, and every same-origin response status is collected so
// each 404 can be classified (capture gap vs documented external vs upstream
// 404) rather than guessed at.
//
// usage:
//   node tools/serve.mjs 4740 . &
//   node tools/boot-check.mjs --url http://127.0.0.1:4740/ --out docs/boot.png
//
// Exit 0 only when the document loaded, the app reached a settled state, and
// there were no same-origin 4xx/5xx other than the documented live-backend
// endpoints (see LIVE_BACKEND). Cross-origin requests are expected to fail —
// the backend is external by design — and are reported, not failed on.
import fs from "node:fs";
import path from "node:path";
import { spawn, spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const proj = path.resolve(here, "..");
const arg = (name, dflt) => {
  const i = process.argv.indexOf(name);
  return i > 0 ? process.argv[i + 1] : dflt;
};

const URL_ = arg("--url", "http://127.0.0.1:4740/");
const OUT = path.resolve(proj, arg("--out", "docs/boot.png"));
const SETTLE = Number(arg("--settle", "8000"));
const CDP_PORT = Number(arg("--cdp", "9345"));
const WAIT_MS = Number(arg("--wait", "90000"));
// DIAGNOSTIC ONLY. The shipped `session.js` forces `offline=0`, so the hosted
// build always needs the live host. `--force-offline` rewrites that one
// literal in the RESPONSE the browser receives (the capture on disk is never
// touched) to exercise the app's own dev offline path; it answers "is the
// capture complete enough to play, or only to reach the gate?". A run with
// this flag is not evidence about the shipped URL — keep it separate from the
// byte-exact boot result.
const FORCE_OFFLINE = process.argv.includes("--force-offline");
const PROFILE = path.join(proj, "tmp", "chrome-profile-boot");

const CHROME_CANDIDATES = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
];
const chrome = CHROME_CANDIDATES.find((p) => fs.existsSync(p));
if (!chrome) {
  console.error("boot-check: no Chrome/Edge executable found");
  process.exit(2);
}

fs.rmSync(PROFILE, { recursive: true, force: true });
fs.mkdirSync(PROFILE, { recursive: true });

const child = spawn(
  chrome,
  [
    "--headless=new",
    `--remote-debugging-port=${CDP_PORT}`,
    `--user-data-dir=${PROFILE}`,
    "--host-resolver-rules=MAP * 127.0.0.1",
    "--no-first-run",
    "--no-default-browser-check",
    "--disable-background-networking",
    "--disable-component-update",
    "--enable-unsafe-swiftshader",
    "--use-angle=swiftshader",
    "--ignore-gpu-blocklist",
    "--autoplay-policy=no-user-gesture-required",
    "--window-size=1280,720",
    "--hide-scrollbars",
    "about:blank",
  ],
  { stdio: "ignore", windowsHide: true },
);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function endpoint() {
  for (let i = 0; i < 150; i++) {
    try {
      const r = await fetch(`http://127.0.0.1:${CDP_PORT}/json/version`);
      if (r.ok) return (await r.json()).webSocketDebuggerUrl;
    } catch {}
    await sleep(100);
  }
  throw new Error("DevTools endpoint did not come up");
}

class CDP {
  constructor(ws) { this.ws = ws; this.id = 0; this.pending = new Map(); this.handlers = []; }
  static async connect(url) {
    const ws = new WebSocket(url);
    await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });
    const c = new CDP(ws);
    ws.onmessage = (ev) => {
      const msg = JSON.parse(ev.data);
      if (msg.id && c.pending.has(msg.id)) {
        const { res, rej } = c.pending.get(msg.id);
        c.pending.delete(msg.id);
        msg.error ? rej(new Error(msg.error.message)) : res(msg.result);
      } else if (msg.method) for (const h of c.handlers) h(msg);
    };
    return c;
  }
  send(method, params = {}, sessionId) {
    const id = ++this.id;
    this.ws.send(JSON.stringify({ id, method, params, sessionId }));
    return new Promise((res, rej) => this.pending.set(id, { res, rej }));
  }
  on(fn) { this.handlers.push(fn); }
}

const wsUrl = await endpoint();
const cdp = await CDP.connect(wsUrl);

const { targetId } = await cdp.send("Target.createTarget", { url: "about:blank" });
const { sessionId } = await cdp.send("Target.attachToTarget", { targetId, flatten: true });
const S = (m, p) => cdp.send(m, p, sessionId);

const consoleErrors = [];
const failed = [];
const requests = new Map(); // requestId -> {url, status, mime, resourceType}
const responses = [];
// The live multiplayer backend is external by design (README "What this is"):
// the client needs the host's /health, /socket and /diag/boot. A local static
// serve cannot answer them; they are documented, not capture gaps.
const LIVE_BACKEND = [/^\/health($|\?)/, /^\/socket($|\?)/, /^\/diag\/boot($|\?)/, /^\/join($|\?)/];
const isLiveBackend = (p) => LIVE_BACKEND.some((re) => re.test(p));

cdp.on((msg) => {
  if (msg.sessionId !== sessionId) return;
  if (msg.method === "Fetch.requestPaused") {
    const { requestId, request } = msg.params;
    (async () => {
      try {
        const { body, base64Encoded } = await S("Fetch.getResponseBody", { requestId });
        let text = base64Encoded ? Buffer.from(body, "base64").toString("utf8") : body;
        const before = text;
        text = text.replace("url.searchParams.set('offline','0')", "url.searchParams.set('offline','1')");
        if (before === text) console.log(`WARN: offline rewrite did not match in ${request.url}`);
        await S("Fetch.fulfillRequest", {
          requestId,
          responseCode: 200,
          responseHeaders: [
            { name: "Content-Type", value: "text/javascript; charset=utf-8" },
            { name: "Cache-Control", value: "no-store" },
          ],
          body: Buffer.from(text, "utf8").toString("base64"),
        });
      } catch (e) {
        console.log(`Fetch intercept failed for ${request.url}: ${e.message}`);
        S("Fetch.continueRequest", { requestId }).catch(() => {});
      }
    })();
    return;
  }
  if (msg.method === "Runtime.exceptionThrown") consoleErrors.push(msg.params.exceptionDetails?.text || "exception");
  if (msg.method === "Runtime.consoleAPICalled" && msg.params.type === "error")
    consoleErrors.push(msg.params.args.map((a) => a.value ?? a.description ?? a.type).join(" "));
  if (msg.method === "Log.entryAdded" && msg.params.entry.level === "error")
    consoleErrors.push(`${msg.params.entry.source}: ${msg.params.entry.text}`);
  if (msg.method === "Network.requestWillBeSent") {
    const r = msg.params.request;
    requests.set(msg.params.requestId, { url: r.url, method: r.method, type: msg.params.type });
  }
  if (msg.method === "Network.responseReceived") {
    const r = msg.params.response;
    responses.push({
      url: r.url,
      status: r.status,
      mime: r.mimeType,
      type: msg.params.type,
      fromDiskCache: r.fromDiskCache,
    });
  }
  if (msg.method === "Network.loadingFailed") {
    const req = requests.get(msg.params.requestId);
    failed.push({ url: req?.url || msg.params.requestId, error: msg.params.errorText, canceled: msg.params.canceled });
  }
});

await S("Page.enable");
await S("Runtime.enable");
await S("Log.enable");
await S("Network.enable");
if (FORCE_OFFLINE) {
  console.log("--force-offline: rewriting session.js's offline=0 to offline=1 in the response (diagnostic only)");
  await S("Fetch.enable", { patterns: [{ urlPattern: "*session.js*", requestStage: "Response" }] });
}
await S("Page.addScriptToEvaluateOnNewDocument", {
  // Make the mirror's own requests observable in the page timeline and record
  // the first fatal page error for the report (read-only; not a page patch).
  source: `window.__bootErrors = []; addEventListener('error', e => window.__bootErrors.push(String(e.message||e.error||'error'))); addEventListener('unhandledrejection', e => window.__bootErrors.push('rejection: '+String(e.reason&&e.reason.message||e.reason)));`,
});

await S("Page.navigate", { url: URL_ });
const loaded = new Promise((res) => cdp.on((m) => m.method === "Page.loadEventFired" && res()));
await Promise.race([loaded, sleep(25000)]);

async function evaluate(expr) {
  const r = await S("Runtime.evaluate", { expression: expr, returnByValue: true, awaitPromise: true });
  return r.result?.value;
}

const state = `(() => {
  const c = document.querySelector('canvas');
  const txt = (document.body.innerText || '').trim();
  const gl = c && (c.getContext('webgl2') || c.getContext('webgl'));
  return {
    url: location.href,
    title: document.title,
    canvas: c ? { w: c.width, h: c.height, cw: c.clientWidth, ch: c.clientHeight } : null,
    webgl: !!gl,
    bodyChars: txt.length,
    text: txt.slice(0, 500),
    bootErrors: window.__bootErrors || [],
    hasTryAnyway: [...document.querySelectorAll('button')].some(b => /try anyway/i.test(b.textContent)),
    hasReload: [...document.querySelectorAll('button')].some(b => /reload/i.test(b.textContent)),
  };
})()`;

// Poll with a real clock until the app settles: a canvas with a real size,
// the fatal banner, or the GPU interstitial's "Try anyway" (a shipped control).
let st = null, settled = false, sawTryAnyway = false;
const deadline = Date.now() + WAIT_MS;
while (Date.now() < deadline) {
  st = await evaluate(state);
  if (st?.hasTryAnyway && !sawTryAnyway) {
    console.log("GPU interstitial shown — clicking the shipped 'Try anyway' control");
    await evaluate(`(() => { const b=[...document.querySelectorAll('button')].find(b=>/try anyway/i.test(b.textContent)); b && b.click(); return true; })()`);
    sawTryAnyway = true;
    await sleep(1500);
    continue;
  }
  if (st && (st.canvas && st.canvas.cw >= 200 || /could not start|could not load/i.test(st.text) || st.hasReload)) {
    settled = true;
    break;
  }
  await sleep(500);
}

await sleep(SETTLE);

const facts = await evaluate(state);
const shot = await S("Page.captureScreenshot", { format: "png" });
fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, Buffer.from(shot.data, "base64"));

// Request accounting: the page may retry /health, so collapse by path.
const local = responses.filter((r) => r.url.startsWith("http://127.0.0.1"));
const origin = new URL(URL_).origin;
const sameOrigin = local.filter((r) => r.url.startsWith(origin));
const external = [...new Set([...requests.values()].map((r) => r.url).filter((u) => !u.startsWith(origin) && !u.startsWith("about:") && !u.startsWith("data:") && !u.startsWith("blob:")))];

const byPath = new Map();
for (const r of sameOrigin) {
  const p = new URL(r.url).pathname;
  if (!byPath.has(p)) byPath.set(p, { status: r.status, count: 0, type: r.type, mime: r.mime });
  byPath.get(p).count++;
}
const ok = [...byPath.values()].filter((v) => v.status === 200).length;
const notOk = [...byPath.entries()].filter(([, v]) => v.status !== 200);
const unexpected = notOk.filter(([p]) => !isLiveBackend(p));

console.log("BOOT FACTS", JSON.stringify(facts, null, 2));
console.log(`settled: ${settled}, gpu 'Try anyway' clicked: ${sawTryAnyway}`);
console.log(`requests: ${requests.size} total, ${sameOrigin.length} same-origin responses (${ok} distinct 200), ${external.length} cross-origin attempted, ${failed.length} failed`);
for (const u of external.slice(0, 10)) console.log(`  cross-origin (blocked by MAP *): ${u}`);
for (const f of failed.slice(0, 12)) console.log(`  failed: ${f.error} ${f.url}${f.canceled ? " (canceled)" : ""}`);
console.log("same-origin non-200:");
for (const [p, v] of notOk) console.log(`  ${v.status} ${p} x${v.count} [${v.type}] ${isLiveBackend(p) ? "documented live backend" : "UNEXPECTED"}`);
console.log(`console errors: ${consoleErrors.length}`);
for (const e of consoleErrors.slice(0, 12)) console.log(`  console: ${e.slice(0, 300)}`);
console.log(`screenshot: ${path.relative(proj, OUT).split(path.sep).join("/")} (${fs.statSync(OUT).size} B)`);

const problems = [];
if (!facts?.title) problems.push("no document title");
if (!settled) problems.push(`app did not settle within ${WAIT_MS} ms`);
if (!facts?.canvas || facts.canvas.cw < 200 || facts.canvas.ch < 200) problems.push("no rendered canvas (boot did not reach gameplay)");
if (unexpected.length) problems.push(`${unexpected.length} unexpected same-origin non-200 path(s): ${unexpected.map(([p, v]) => `${v.status} ${p}`).join(", ")}`);

cdp.ws.close();
child.kill();
if (process.platform === "win32") spawnSync("taskkill", ["/pid", String(child.pid), "/t", "/f"], { stdio: "ignore" });
try { fs.rmSync(PROFILE, { recursive: true, force: true }); } catch {}

console.log(problems.length ? `BOOT BLOCKED/FAIL\n  ${problems.join("\n  ")}` : "BOOT PASS — rendered offline");
process.exit(problems.length ? 1 : 0);
