// session 01 — the
// Lines 1-1146 of readable/session.pretty.js (statement-aligned).
// Served only by the dedicated host. Keep every browser on the same origin/server.
{
  const url = new URL(location.href);
  const ruleset = document.currentScript?.dataset.ruleset ?? "";
  // One screen (owner 2026-10-05; host oneScreen): this page is also the sign-in. The game boots behind the form and
  // waits at window.__joinGate (main.js) until /join accepts the callsign; then it connects as normal.
  const lobbyData =
    document.currentScript?.dataset.lobby === "1"
      ? { ...document.currentScript.dataset }
      : null;
  // Merged deploy screen (owner 2026-10-09): with no session code there is no separate sign-in at all. The game loads
  // and connects at once as a reserve (watching, holding no slot); the callsign sits on the deploy screen and the
  // first Deploy (or Enter in the callsign) claims the slot through /join. A server that asks for a code keeps the
  // sign-in form over the loading game, as before.
  const merged = !!lobbyData && lobbyData.code !== "1";
  let joinResolve = null,
    joined = !lobbyData || merged;
  if (lobbyData && !merged)
    window.__joinGate = new Promise((r) => {
      joinResolve = r;
    });
  let savedName = "";
  try {
    savedName = localStorage.getItem("salient.callsign") || "";
  } catch {}
  if (merged)
    url.searchParams.set("name", lobbyData.owner || savedName || "Recruit");
  const socketQuery = [
    ruleset && "ruleset=" + encodeURIComponent(ruleset),
    merged && "reserve=1",
  ]
    .filter(Boolean)
    .join("&");
  url.searchParams.set(
    "server",
    `${location.protocol === "https:" ? "wss" : "ws"}://${location.host}/socket${socketQuery ? "?" + socketQuery : ""}`,
  );
  // No WebGL 2, or software graphics: a plain page says so before anything heavy loads (main.js waits on __bootHold).
  let gpuProblem = "";
  if (merged)
    try {
      const c = document.createElement("canvas"),
        gl = c.getContext("webgl2", { failIfMajorPerformanceCaveat: true });
      if (gl) {
        const e = gl.getExtension("WEBGL_debug_renderer_info"),
          n = String(e ? gl.getParameter(e.UNMASKED_RENDERER_WEBGL) : "");
        if (/SwiftShader|Basic Render|llvmpipe|Software/i.test(n))
          gpuProblem = "slow";
        gl.getExtension("WEBGL_lose_context")?.loseContext();
      } else {
        const any = document.createElement("canvas").getContext("webgl2");
        gpuProblem = any ? "slow" : "none";
        any?.getExtension("WEBGL_lose_context")?.loseContext();
      }
    } catch {}
  let bootRelease = null;
  if (gpuProblem)
    window.__bootHold = new Promise((r) => {
      bootRelease = r;
    });
  // Served as a plain script, so the map table is inlined here rather than imported: keep it in step with
  // src/demo/map-list.js (key -> ruleset). Old running hosts omit the attribute: keep their14-panel collision
  // rather than guessing.
  const maps = {
    mesa: "r18-mesa-v1",
    compact: "r3-compact-v1",
    frost: "r4-frost-v1",
    marabas: "r5-marabas-v1",
    cay: "r6-cay-v1",
    ironwood: "r7-ironwood-v1",
    metro: "r8-metro-v1",
    deadweight: "r9-deadweight-v1",
    meridian: "r11-meridian-v1",
    housefire: "r12-housefire-v1",
    barranco: "r13-barranco-v1",
    linden: "r14-linden-v1",
    hangar: "r15-hangar-v1",
    kepler: "r16-kepler-v1",
    observatory: "r19-observatory-v1",
    bascule: "r17-bascule-v1",
  };
  const modern = [
    "r2-urban-v1",
    "r2-urban-v2",
    "r2-urban-v3",
    "r2-urban-v4",
    ...Object.values(maps),
  ].includes(ruleset);
  url.searchParams.set(
    "demolition",
    modern || ruleset === "r1-wide-v2" ? "1" : "0",
  );
  url.searchParams.set("urban", modern ? "1" : "0");
  url.searchParams.set("vehicles", modern ? "1" : "0");
  for (const [key, rs] of Object.entries(maps))
    url.searchParams.set(key, ruleset === rs ? "1" : "0");
  url.searchParams.set("offline", "0");
  url.searchParams.set("bots", "0");
  history.replaceState(null, "", url);
  let connected = false,
    lostSince = 0,
    healthySince = 0;
  const retryKey = "salient-rejoin-budget";
  let retries = { since: Date.now(), count: 0 };
  try {
    const old = JSON.parse(sessionStorage.getItem(retryKey));
    if (
      old &&
      Number.isFinite(old.since) &&
      Number.isInteger(old.count) &&
      old.count >= 0 &&
      Date.now() - old.since < 120000
    )
      retries = old;
  } catch {}
  const started = Date.now();
  // AbortSignal.timeout is missing before Safari 16 / Firefox 100: without it every /health check threw.
  const timeout = (ms) =>
    typeof AbortSignal.timeout === "function"
      ? AbortSignal.timeout(ms)
      : undefined;
  // Join funnel report (host /diag/boot -> out/client-boot.jsonl): how far this page got before it spawned, failed
  // or was closed, with the first page errors. Failures before the socket opens never reach the leaderboard.
  const funnel = { stage: "loading", at: {}, errors: [], ruleset };
  // A tab the browser kills (an iPhone out of memory: "can't open this page") never reports. Each stage is also
  // written to localStorage; a marker still there on the next load is reported as a crash at that stage.
  const crashKey = "salient-boot-pending";
  const mark = () => {
    try {
      localStorage.setItem(
        crashKey,
        JSON.stringify({
          stage: funnel.stage,
          at: funnel.at,
          t: Date.now(),
          ruleset,
        }),
      );
    } catch {}
  };
  try {
    const prev = JSON.parse(localStorage.getItem(crashKey) || "null");
    localStorage.removeItem(crashKey);
    if (prev && Date.now() - prev.t < 3600000) {
      const body = JSON.stringify({
        ...prev,
        end: "crashed",
        ua: navigator.userAgent,
        size: [innerWidth, innerHeight, devicePixelRatio],
        mem: navigator.deviceMemory ?? null,
        ms: Date.now() - prev.t,
      });
      if (
        !navigator.sendBeacon?.(
          "/diag/boot",
          new Blob([body], { type: "text/plain" }),
        )
      )
        fetch("/diag/boot", { method: "POST", body, keepalive: true }).catch(
          () => {},
        );
    }
  } catch {}
  const reach = (stage) => {
    if (funnel.at[stage] == null) {
      funnel.at[stage] = Date.now() - started;
      funnel.stage = stage;
      mark();
    }
  };
  mark();
  let reported = false;
  const report = (end, extra) => {
    if (reported) return;
    reported = true;
    try {
      localStorage.removeItem(crashKey);
    } catch {}
    try {
      const body = JSON.stringify({
        ...funnel,
        ua: navigator.userAgent,
        size: [innerWidth, innerHeight, devicePixelRatio],
        end,
        ms: Date.now() - started,
        ...extra,
      }).slice(0, 8000);
      if (
        !navigator.sendBeacon?.(
          "/diag/boot",
          new Blob([body], { type: "text/plain" }),
        )
      )
        fetch("/diag/boot", { method: "POST", body, keepalive: true }).catch(
          () => {},
        );
    } catch {}
  };
  const noteError = (msg) => {
    if (funnel.errors.length < 6) funnel.errors.push(String(msg).slice(0, 300));
  };
  window.addEventListener(
    "error",
    (e) => noteError(e.message || e.target?.src || "resource error"),
    true,
  );
  window.addEventListener("unhandledrejection", (e) =>
    noteError(e.reason?.message ?? e.reason),
  );
  window.addEventListener("pagehide", () => report("left"));
  // The sign-in form over the loading game (one screen). Same fields and checks as lobby.html: callsign, session code,
  // admin, the touch and graphics warnings, server status and the microphone; plus a loading bar for the battlefield.
  function buildSignin(panel) {
    const st = document.createElement("style");
    st.textContent = `
#sl-signin{position:fixed;left:clamp(16px,4vw,64px);top:50%;transform:translateY(-50%);z-index:99995;width:min(420px,calc(100vw - 32px));max-height:calc(100vh - 32px);overflow:auto;box-sizing:border-box;
 background:#0b0c0de0;border:1px solid #ffffff1f;border-top:3px solid #c3ef4a;padding:26px 26px 20px;color:#e8e9ea;font:15px/1.4 system-ui,'Segoe UI',sans-serif;box-shadow:0 20px 60px #0009;transition:opacity .5s}
#sl-signin.gone{opacity:0;pointer-events:none}
#sl-signin .si-kicker{margin:0;font:700 11px/1 system-ui;letter-spacing:.2em;text-transform:uppercase;color:#9a9c9e}
#sl-signin h1{margin:10px 0 6px;font:700 34px/1.05 'Barlow Condensed','Arial Narrow',Arial,sans-serif;letter-spacing:.04em;text-transform:uppercase}
#sl-signin .si-blurb{margin:0 0 14px;color:#b4b6b8;font-size:14px}
#sl-signin .si-status{display:flex;gap:8px;align-items:center;margin:0 0 16px;color:#c9cbcd;font:600 12px/1 system-ui;letter-spacing:.1em;text-transform:uppercase}
#sl-signin .si-status i{width:8px;height:8px;border-radius:50%;background:#6c6f72}#sl-signin .si-status.up i{background:#c3ef4a;box-shadow:0 0 8px #c3ef4a88}
#sl-signin label{display:block;margin:0 0 12px;font:700 11px/1 system-ui;letter-spacing:.16em;text-transform:uppercase;color:#9a9c9e}
#sl-signin input:not([type=checkbox]){display:block;width:100%;box-sizing:border-box;margin-top:7px;padding:11px 12px;background:#ffffff0d;border:1px solid #ffffff2e;border-radius:2px;color:#fff;font:600 18px/1.2 system-ui;letter-spacing:.02em;text-transform:none}
#sl-signin input:focus{outline:none;border-color:#c3ef4a}
#sl-signin details{margin:2px 0 12px;color:#9a9c9e;font-size:12px}#sl-signin summary{cursor:pointer;letter-spacing:.12em;text-transform:uppercase;font-weight:700;font-size:11px}
#sl-signin .si-check{display:flex;gap:8px;align-items:center;margin:10px 0;text-transform:none;letter-spacing:0;font:500 13px system-ui;color:#c9cbcd}
#sl-signin button.si-join{width:100%;min-height:52px;margin-top:4px;border:0;border-radius:2px;background:#c3ef4a;color:#101112;font:800 20px/1 'Barlow Condensed','Arial Narrow',Arial,sans-serif;letter-spacing:.24em;text-transform:uppercase;cursor:pointer}
#sl-signin button.si-join:disabled{background:#3b3e40;color:#8d9092;cursor:default}
#sl-signin .si-msg{min-height:1.2em;margin:10px 0 0;color:#f0b43c;font-size:13px}
#sl-signin .si-load{margin:16px 0 0}
#sl-signin .si-load-row{display:flex;justify-content:space-between;align-items:baseline;font:700 12px/1 system-ui;letter-spacing:.12em;text-transform:uppercase;color:#d9dbdc}
#sl-signin .si-load-row em{font-style:normal;color:#c3ef4a;font-variant-numeric:tabular-nums;letter-spacing:.04em}
#sl-signin .si-bar{display:block;position:relative;overflow:hidden;height:4px;margin-top:9px;background:#ffffff1a;border-radius:2px}#sl-signin .si-bar b{display:block;height:4px;width:0;background:#c3ef4a;border-radius:2px;transition:width .3s linear}
#sl-signin .si-bar:after{content:'';position:absolute;inset:0;width:30%;background:linear-gradient(90deg,#0000,#ffffff55,#0000);animation:si-sweep 1.4s linear infinite}#sl-signin .si-load.done .si-bar:after{display:none}
@keyframes si-sweep{from{transform:translateX(-100%)}to{transform:translateX(340%)}}
#sl-signin .si-load-note{margin:8px 0 0;color:#9a9c9e;font-size:12px}
#sl-signin .si-warn{margin:0 0 14px;padding:10px 12px;border-left:3px solid #f0b43c;background:#2a200dd0;color:#f6dfb0;font-size:13px;font-weight:600}
#sl-signin .si-foot{margin:16px 0 0;padding-top:12px;border-top:1px solid #ffffff14;color:#8d9092;font-size:12px}
#sl-signin .si-foot button{background:none;border:1px solid #ffffff33;color:#c9cbcd;border-radius:2px;padding:4px 8px;font:600 11px system-ui;cursor:pointer;margin-left:6px}
#sl-signin-bg{position:fixed;inset:0;z-index:99993;pointer-events:none;background:#07090b center/cover no-repeat;transition:opacity 1.2s ease}
#sl-signin-bg.gone{opacity:0}
#sl-signin-shade{position:fixed;inset:0;z-index:99994;pointer-events:none;background:linear-gradient(90deg,#000000b8,#00000055 38%,#0000 62%);transition:opacity .6s}
#sl-signin-shade.gone{opacity:0}
@media (max-width:700px){#sl-signin{top:auto;bottom:16px;transform:none;padding:18px}#sl-signin h1{font-size:26px}#sl-signin .si-blurb{display:none}}`;
    document.head.append(st);
    const esc = (v) =>
      String(v ?? "").replace(/[&<>"']/g, (c) => "&#" + c.charCodeAt(0) + ";");
    let saved = "";
    try {
      saved = localStorage.getItem("salient.callsign") || "";
    } catch {}
    const bg = document.createElement("div");
    bg.id = "sl-signin-bg";
    if (/^\/assets\/maps\/[\w.-]+$/.test(lobbyData.backdrop || ""))
      bg.style.backgroundImage = `url('${lobbyData.backdrop}')`;
    const shade = document.createElement("div");
    shade.id = "sl-signin-shade";
    const box = document.createElement("section");
    box.id = "sl-signin";
    box.setAttribute("aria-label", "Join game");
    box.innerHTML = `<p class="si-kicker">Now playing</p><h1>${esc(lobbyData.mapName)}</h1><p class="si-blurb">${esc(lobbyData.mapBlurb)}</p>
<p class="si-status" role="status"><i></i><span>Checking server</span></p><p class="si-warn" data-w="touch" hidden>On a phone? You can jump in with basic touch controls. Hold it sideways. The full game is made for keyboard and mouse on a PC.</p><p class="si-warn" data-w="gpu" hidden></p>
<form autocomplete="on"><label>Callsign<input name="name" maxlength="24" required autocomplete="nickname" placeholder="Enter callsign" value="${esc(lobbyData.owner || saved)}"></label>
${lobbyData.code === "1" ? '<label>Session code<input name="code" type="password" required autocomplete="off" placeholder="From whoever invited you"></label>' : ""}
<details><summary>Admin</summary><label class="si-check"><input type="checkbox" name="admin" value="1"> Join as admin</label><label data-admin hidden>Admin password<input name="adminPassword" type="password" autocomplete="current-password" disabled></label></details>
<button class="si-join" type="submit">Join game</button><p class="si-msg" role="alert"></p></form>
<div class="si-load"><div class="si-load-row"><span>Loading the battlefield</span><em>0%</em></div><span class="si-bar"><b></b></span><p class="si-load-note">First load usually takes about 15 seconds. You can join now: you go in as soon as it is ready.</p></div>
<p class="si-foot">No account or install. Voice chat is on in game (N mutes).<button type="button" data-mic>Allow microphone</button></p>`;
    // keys and clicks in the form stay out of the game's input
    for (const ev of [
      "keydown",
      "keyup",
      "keypress",
      "mousedown",
      "pointerdown",
      "click",
      "wheel",
      "contextmenu",
    ])
      box.addEventListener(ev, (e) => e.stopPropagation());
    document.body.append(bg, shade, box);
    const form = box.querySelector("form"),
      btn = box.querySelector(".si-join"),
      msg = box.querySelector(".si-msg"),
      statusEl = box.querySelector(".si-status");
    const admin = form.querySelector("[name=admin]"),
      adminField = form.querySelector("[data-admin]"),
      adminPw = form.querySelector("[name=adminPassword]");
    admin.addEventListener("change", () => {
      adminField.hidden = !admin.checked;
      adminPw.disabled = !admin.checked;
      adminPw.required = admin.checked;
      if (admin.checked) adminPw.focus();
    });
    if (
      matchMedia("(pointer:coarse)").matches &&
      !matchMedia("(any-pointer:fine)").matches
    )
      box.querySelector("[data-w=touch]").hidden = false;
    try {
      const c = document.createElement("canvas"),
        gl = c.getContext("webgl2", { failIfMajorPerformanceCaveat: true });
      let w = "";
      if (gl) {
        const e = gl.getExtension("WEBGL_debug_renderer_info"),
          n = String(e ? gl.getParameter(e.UNMASKED_RENDERER_WEBGL) : "");
        if (/SwiftShader|Basic Render|llvmpipe|Software/i.test(n)) w = "slow";
        gl.getExtension("WEBGL_lose_context")?.loseContext();
      } else {
        const any = document.createElement("canvas").getContext("webgl2");
        w = any ? "slow" : "none";
        any?.getExtension("WEBGL_lose_context")?.loseContext();
      }
      if (w) {
        const el = box.querySelector("[data-w=gpu]");
        el.hidden = false;
        el.textContent =
          w === "none"
            ? "Your browser has 3D graphics (WebGL 2) turned off, so the game cannot start. Try Chrome, Edge or Firefox with graphics acceleration on."
            : 'Your browser is not using your graphics card, so the game will freeze. In Chrome or Edge: Settings, System, turn on "Use graphics acceleration when available", then relaunch the browser.';
      }
    } catch {}
    box.querySelector("[data-mic]").onclick = async (e) => {
      const b = e.currentTarget;
      try {
        const m = await navigator.mediaDevices.getUserMedia({ audio: true });
        m.getTracks().forEach((t) => t.stop());
        b.textContent = "Microphone allowed";
        b.disabled = true;
      } catch {
        b.textContent = "Microphone blocked";
      }
    };
    const health = async () => {
      if (joined) return;
      try {
        const r = await fetch("/health", {
            cache: "no-store",
            signal: timeout(4000),
          }),
          h = await r.json();
        statusEl.classList.toggle("up", !!h.ok);
        statusEl.querySelector("span").textContent = h.ok
          ? `Server online · ${h.humans ?? 0} ${h.humans === 1 ? "player" : "players"} in game`
          : "Server is preparing the next round";
      } catch {
        statusEl.classList.remove("up");
        statusEl.querySelector("span").textContent = "Server unreachable";
      } finally {
        if (!joined) setTimeout(health, 5000);
      }
    };
    health();
    const load = box.querySelector(".si-load"),
      loadText = load.querySelector(".si-load-row span"),
      loadPct = load.querySelector("em"),
      bar = load.querySelector(".si-bar b"),
      note = load.querySelector(".si-load-note");
    // [from %, to %, typical seconds, label]: within a stage the bar eases toward the next stage's start, so it keeps moving
    const LOAD = {
      loading: [0, 8, 2, "Loading the game"],
      download: [8, 18, 2, "Downloading the game"],
      build: [18, 78, 10, "Building the battlefield"],
      graphics: [78, 97, 3, "Preparing graphics"],
      signin: [100, 100, 1, "Battlefield ready"],
    };
    let stageNow = "",
      stageAt = 0,
      shown = 0;
    // The map picture goes first, before the early-out: joining before the battlefield was ready removes the form, and
    // returning here first left the picture (z 99993) over the game for good (owner bug 2026-10-05).
    const tick = () => {
      const g = window.__game;
      if (g?.signinReady && !bg.classList.contains("gone")) {
        bg.classList.add("gone");
        setTimeout(() => bg.remove(), 1300);
      }
      if (!box.isConnected && joined && g?.signinReady) return;
      const stage = g?.bootStage ?? "loading",
        [a, b, typ, label] = LOAD[stage] ?? LOAD.signin;
      if (stage !== stageNow) {
        stageNow = stage;
        stageAt = performance.now();
      }
      const k = 1 - Math.exp(-(performance.now() - stageAt) / 1000 / typ),
        pct = Math.max(shown, a + (b - a) * k * 0.92);
      shown = pct;
      bar.style.width = pct.toFixed(1) + "%";
      loadPct.textContent = Math.floor(pct) + "%";
      loadText.textContent = label;
      if (stage === "signin") {
        load.classList.add("done");
        note.textContent = "Ready. Pick a callsign and join.";
      }
      setTimeout(tick, 120);
    };
    tick();
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (btn.disabled) return;
      btn.disabled = true;
      btn.textContent = "Joining…";
      msg.textContent = "";
      try {
        const r = await fetch("/join", {
            method: "POST",
            body: new URLSearchParams(new FormData(form)),
            credentials: "same-origin",
          }),
          to = new URL(r.url);
        if (!r.ok || to.pathname !== "/play") {
          msg.textContent =
            (await r.text()).trim().slice(0, 240) ||
            "The server did not accept the join. Try again.";
          btn.disabled = false;
          btn.textContent = "Join game";
          return;
        }
        const name = to.searchParams.get("name") || "Player";
        try {
          localStorage.setItem(
            "salient.callsign",
            form.elements.name.value.trim(),
          );
        } catch {}
        joined = true;
        const u = new URL(location.href);
        u.pathname = "/play";
        u.searchParams.set("name", name);
        history.replaceState(null, "", u);
        box.classList.add("gone");
        shade.classList.add("gone");
        setTimeout(() => {
          box.remove();
          shade.remove();
        }, 700);
        if (!window.__game?.signinReady)
          panel.querySelector("p").textContent =
            `Joining as ${name} as soon as the battlefield is ready…`;
        panel.style.background = "#0b0c0d99";
        panel.style.display = "grid";
        const back = panel.querySelector("a");
        if (back) back.hidden = true;
        joinResolve?.({ name });
      } catch {
        msg.textContent =
          "Could not reach the server. Check your connection and try again.";
        btn.disabled = false;
        btn.textContent = "Join game";
      }
    });
    if (!form.elements.name.value) form.elements.name.focus();
  }
  // The plain page for a browser without usable graphics: what is wrong, how to fix it, and a way in anyway.
  function buildGpuPage(panel) {
    panel.style.display = "none";
    const page = document.createElement("section");
    page.id = "sl-gpu-page";
    page.style.cssText =
      'position:fixed;inset:0;z-index:100001;background:#0b0c0d;color:#e8e9ea;display:grid;place-content:center;padding:24px;font:16px/1.5 system-ui,"Segoe UI",sans-serif;text-align:left';
    const box = document.createElement("div");
    box.style.cssText = "max-width:560px";
    const h = document.createElement("h1");
    h.textContent =
      gpuProblem === "none"
        ? "3D graphics are turned off"
        : "Your graphics card is not being used";
    h.style.cssText =
      'font:700 32px/1.1 "Barlow Condensed","Arial Narrow",Arial,sans-serif;letter-spacing:.04em;text-transform:uppercase;margin:0 0 14px';
    const p = document.createElement("p");
    p.style.cssText = "margin:0 0 12px;color:#c9cbcd";
    p.textContent =
      gpuProblem === "none"
        ? "Your browser has 3D graphics (WebGL 2) turned off, so the game cannot start. Try Chrome, Edge or Firefox with graphics acceleration on."
        : 'Your browser is drawing 3D in software, so the game will freeze for seconds at a time. In Chrome or Edge: Settings, System, turn on "Use graphics acceleration when available", then relaunch the browser.';
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = "Try anyway";
    btn.style.cssText =
      'margin-top:10px;padding:12px 28px;border:0;border-radius:2px;background:#c3ef4a;color:#101112;font:800 18px/1 "Barlow Condensed","Arial Narrow",Arial,sans-serif;letter-spacing:.2em;text-transform:uppercase;cursor:pointer';
    btn.onclick = () => {
      page.remove();
      panel.style.display = "grid";
      bootRelease?.();
    };
    box.append(h, p, btn);
    page.append(box);
    document.body.append(page);
  }
  // The callsign on the deploy screen. Unclaimed: a name box (prefilled from last time) with host options; Deploy or
  // Enter claims the slot: /join (code-free: name, admin password, rate limit, session cookie) answers with a one-use
  // ticket that this page's open socket hands the host ('claim' rpc). Claimed: "Playing as NAME" with Change, shown
  // only while the deploy screen is up. An idle slot released by the host turns the box back on.
  function buildCallsign() {
    const st = document.createElement("style");
    st.textContent = `
#sl-callsign{position:fixed;left:50%;top:14px;transform:translateX(-50%);z-index:100000;display:none;align-items:center;gap:8px 10px;flex-wrap:wrap;justify-content:center;max-width:calc(100vw - 24px);box-sizing:border-box;
 padding:10px 12px;background:#0b0c0de6;border:1px solid #ffffff24;border-top:2px solid #c3ef4a;color:#e8e9ea;font:600 13px/1.2 system-ui,'Segoe UI',sans-serif;box-shadow:0 10px 30px #0008}
#sl-callsign.show{display:flex}
#sl-callsign.docked{transform:none;justify-content:flex-start}#sl-callsign.docked input[name=name]{flex:1 1 100%;width:auto}#sl-callsign.docked .cs-opts{justify-content:flex-start}#sl-callsign.docked .cs-opts input[type=password]{flex:1 1 100%;width:auto}#sl-callsign.docked .cs-msg{text-align:left}
#sl-callsign .cs-label{font:700 11px/1 system-ui;letter-spacing:.16em;text-transform:uppercase;color:#9a9c9e}
#sl-callsign input{width:190px;padding:8px 10px;background:#ffffff0d;border:1px solid #ffffff2e;border-radius:2px;color:#fff;font:600 16px/1.2 system-ui}
#sl-callsign input:focus{outline:none;border-color:#c3ef4a}#sl-callsign.need input[name=name]{border-color:#f0b43c;box-shadow:0 0 0 2px #f0b43c55}
#sl-callsign button{background:none;border:1px solid #ffffff33;color:#c9cbcd;border-radius:2px;padding:6px 9px;font:600 11px system-ui;letter-spacing:.06em;cursor:pointer}
#sl-callsign .cs-name{font:700 15px/1 system-ui;color:#fff}
#sl-callsign .cs-msg{flex-basis:100%;margin:0;color:#f0b43c;font-size:12px;text-align:center}#sl-callsign .cs-msg:empty{display:none}
#sl-callsign .cs-opts{flex-basis:100%;display:flex;gap:10px;align-items:center;justify-content:center;flex-wrap:wrap;color:#c9cbcd;font-weight:500}
#sl-callsign [hidden]{display:none!important}#sl-callsign .cs-opts input[type=password]{width:150px;font-size:14px}`;
    document.head.append(st);
    const box = document.createElement("section");
    box.id = "sl-callsign";
    box.setAttribute("aria-label", "Callsign");
    box.innerHTML = `<form class="cs-edit" style="display:contents" autocomplete="on"><span class="cs-label">Callsign</span><input name="name" maxlength="24" required autocomplete="nickname" placeholder="Enter callsign"><button type="button" class="cs-more">Host options</button>
<div class="cs-opts" hidden><label><input type="checkbox" name="admin" value="1"> Join as admin</label><input name="adminPassword" type="password" autocomplete="current-password" placeholder="Admin password" disabled><button type="button" data-mic>Allow microphone</button></div></form>
<span class="cs-done" style="display:contents" hidden><span class="cs-label">Playing as</span><span class="cs-name"></span><button type="button" class="cs-change">Change</button></span><p class="cs-msg" role="alert"></p>`;
    for (const ev of [
      "keydown",
      "keyup",
      "keypress",
      "mousedown",
      "pointerdown",
      "click",
      "wheel",
      "contextmenu",
    ])
      box.addEventListener(ev, (e) => e.stopPropagation());
    document.body.append(box);
    const form = box.querySelector("form"),
      input = form.elements.name,
      msg = box.querySelector(".cs-msg"),
      opts = box.querySelector(".cs-opts"),
      done = box.querySelector(".cs-done"),
      nameEl = box.querySelector(".cs-name");
    const admin = form.elements.admin,
      adminPw = form.elements.adminPassword;
    input.value = lobbyData.owner || savedName;
    box.querySelector(".cs-more").onclick = () => {
      opts.hidden = !opts.hidden;
    };
    admin.addEventListener("change", () => {
      adminPw.disabled = !admin.checked;
      adminPw.required = admin.checked;
      if (admin.checked) adminPw.focus();
    });
    box.querySelector("[data-mic]").onclick = async (e) => {
      const b = e.currentTarget;
      try {
        const m = await navigator.mediaDevices.getUserMedia({ audio: true });
        m.getTracks().forEach((t) => t.stop());
        b.textContent = "Microphone allowed";
        b.disabled = true;
      } catch {
        b.textContent = "Microphone blocked";
      }
    };
    let claimed = false,
      busy = null;
    const net = () => window.__game?.ctx?.modules.get("netcode");
    const show = (edit, text = "") => {
      form.style.display = edit ? "contents" : "none";
      done.hidden = edit;
      msg.textContent = text;
      if (!edit) box.classList.remove("need");
    };
    const claim = async () => {
      if (busy) return busy;
      busy = (async () => {
        const name = input.value.trim();
        if (!name) {
          claim.check();
          return false;
        }
        msg.textContent = "";
        try {
          const r = await fetch("/join", {
            method: "POST",
            headers: { "x-claim": "1" },
            body: new URLSearchParams(new FormData(form)),
            credentials: "same-origin",
            signal: timeout(10000),
          });
          if (!r.ok) {
            show(
              true,
              (await r.text()).trim().slice(0, 240) ||
                "The server did not accept the callsign. Try again.",
            );
            return false;
          }
          const { name: accepted, ticket } = await r.json();
          const n = net(),
            evs = window.__game?.ctx?.events;
          if (!n?.sendRpc || !evs || !ticket) throw new Error("not connected");
          const ok = await new Promise((res) => {
            let t = 0;
            const off = () => {
              clearTimeout(t);
              evs.off?.("net:event", on);
            };
            const on = (ev) => {
              if (ev?.name === "net:claimed") {
                off();
                res(true);
              }
            };
            evs.on("net:event", on);
            t = setTimeout(() => {
              off();
              res(false);
            }, 8000);
            n.sendRpc("claim", { ticket });
          });
          if (!ok) {
            show(true, "The server did not answer. Press Deploy to try again.");
            return false;
          }
          try {
            localStorage.setItem("salient.callsign", name);
          } catch {}
          claimed = true;
          claim.claimed = true;
          reach("signin");
          nameEl.textContent = accepted || name;
          show(false);
          const u = new URL(location.href);
          u.searchParams.set("name", accepted || name);
          history.replaceState(null, "", u);
          return true;
        } catch {
          show(
            true,
            "Could not reach the server. Check your connection and press Deploy again.",
          );
          return false;
        }
      })();
      try {
        return await busy;
      } finally {
        busy = null;
      }
    };
    // Synchronous: is there a callsign to claim with? If not, point at the box (hud.js asks before capturing the mouse).
    claim.check = () => {
      if (input.value.trim()) return true;
      show(true, "Enter a callsign to deploy.");
      box.classList.add("need");
      input.focus();
      return false;
    };
    claim.claimed = false;
    window.__cubieClaim = claim;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (claimed && input.value.trim() === nameEl.textContent) {
        show(false);
        return;
      }
      claimed = false;
      claim.claimed = false;
      claim();
    });
    input.addEventListener("input", () => box.classList.remove("need"));
    box.querySelector(".cs-change").onclick = () => {
      show(true);
      input.focus();
      input.select();
    };
    // Activity on the deploy screen keeps a claimed slot (and a watching reserve) from idling out on the host.
    let lastActive = 0;
    const active = () => {
      const now = Date.now();
      if (now - lastActive < 15000) return;
      lastActive = now;
      net()?.sendRpc?.("active", {});
    };
    for (const ev of ["pointermove", "keydown", "pointerdown", "wheel"])
      addEventListener(
        ev,
        () => {
          if (!claimed || document.querySelector(".sl-spawn:not([hidden])"))
            active();
        },
        { passive: true, capture: true },
      );
    let hooked = false;
    const tick = () => {
      const g = window.__game,
        spawn = document.querySelector(".sl-spawn"),
        deploying = !!spawn && !spawn.hidden,
        loading =
          document.getElementById("sl-join-panel")?.style.display !== "none";
      if (g?.ctx?.events && !hooked) {
        hooked = true;
        g.ctx.events.on("net:event", (ev) => {
          if (ev?.name === "net:released" && claimed) {
            claimed = false;
            claim.claimed = false;
            show(
              true,
              "You were idle, so a bot took your place. Deploy to jump back in.",
            );
          }
        });
      }
      const shown =
        !document.getElementById("sl-gpu-page") &&
        (deploying || (!claimed && loading));
      box.classList.toggle("show", shown);
      // On the deploy screen it sits under the map/rank card at the top left, at that card's width; while loading
      // (or on a narrow screen) it is a bar at the top centre.
      const card =
        deploying &&
        innerWidth >= 760 &&
        document
          .querySelector(".sl-spawn .deployment-identity")
          ?.getBoundingClientRect();
      if (shown && card && card.width > 0) {
        box.classList.add("docked");
        Object.assign(box.style, {
          left: card.left + "px",
          top: card.bottom + 12 + "px",
          width: card.width + "px",
        });
      } else if (box.classList.contains("docked")) {
        box.classList.remove("docked");
        box.style.left = box.style.top = box.style.width = "";
      }
      setTimeout(tick, 200);
    };
    tick();
  }
  window.addEventListener("DOMContentLoaded", () => {
    const panel = document.createElement("div");
    panel.id = "sl-join-panel";
    panel.style.cssText =
      "position:fixed;inset:0;z-index:99999;background:#111b23ee;color:white;display:grid;place-content:center;text-align:center;font:20px system-ui;padding:24px";
    const text = document.createElement("p");
    text.textContent = "Joining the shared battlefield…";
    panel.append(text);
    const button = document.createElement("button");
    button.id = "sl-join-reload";
    button.textContent = "Reload";
    button.hidden = true;
    button.style.cssText =
      "font:inherit;padding:8px 24px;justify-self:center;cursor:pointer;margin-bottom:12px";
    panel.append(button);
    const link = document.createElement("a");
    link.href = "/";
    link.target = "_top";
    link.textContent = "Return to session lobby";
    link.style.color = "#e1ae55";
    panel.append(link);
    document.body.append(panel);
    // First-load progress (main.js sets __game.bootStage) and tips, so a 20-60 s first load reads as progress, not a hang.
    const steps = [
      ["download", "Downloading the game"],
      ["build", "Building the battlefield"],
      ["connect", "Joining the server"],
      ["graphics", "Preparing graphics"],
    ];
    const list = document.createElement("div");
    list.style.cssText =
      "font-size:15px;text-align:left;justify-self:center;margin:2px 0 16px;line-height:1.75;color:#d8e2e6";
    const stepEls = steps.map(([, label]) => {
      const d = document.createElement("div");
      d.textContent = "○ " + label;
      list.append(d);
      return d;
    });
    panel.insertBefore?.(list, button);
    const tip = document.createElement("p");
    tip.style.cssText =
      "font-size:15px;color:#b8c9d4;max-width:560px;justify-self:center;margin:22px 0 0;line-height:1.45";
    panel.append(tip);
    const tips = [
      "First load takes 20–60 seconds. The next maps load faster.",
      "Pressing Deploy captures your mouse. Esc frees it again.",
      "Press F1 in game to see the controls. Hold Tab for the scores.",
      "Stuttering? Settings → Graphics → Low. Auto picks it for most laptops.",
      "This game is a work in progress. The Feedback button (top right, Esc to free the mouse) goes straight to the developer.",
      "Capture the lettered flags. Holding more flags drains the enemy\u2019s tickets.",
      "F enters vehicles. Engineers repair them with the class tool (3).",
    ];
    let stageSince = Date.now(),
      lastStage = "";
    const showStages = (stage) => {
      const at = steps.findIndex(([k]) => k === stage);
      if (stage !== lastStage) {
        lastStage = stage;
        stageSince = Date.now();
      }
      stepEls.forEach((el, i) => {
        const label = steps[i][1];
        el.textContent =
          i < at
            ? "✓ " + label
            : i === at
              ? `● ${label} · ${Math.round((Date.now() - stageSince) / 1000)} s`
              : "○ " + label;
        el.style.opacity = i > at ? ".55" : "1";
      });
      tip.textContent =
        tips[Math.floor((Date.now() - started) / 7000) % tips.length];
    };
    const hideStages = () => {
      list.hidden = true;
      tip.hidden = true;
    };
    button.onclick = () => location.reload();
    if (lobbyData && !merged) {
      panel.style.display = "none";
      buildSignin(panel);
    }
    if (merged) {
      if (gpuProblem) buildGpuPage(panel);
      buildCallsign();
    }
    // Phones suspend a backgrounded tab and the socket dies with it. Never burn the rejoin budget while hidden; on
    // return with a dead socket, reload straight away (a free rejoin, not one of the 3 automatic attempts).
    let hiddenAt = 0;
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        hiddenAt = Date.now();
        return;
      }
      const g = window.__game,
        live =
          g?.ctx?.transport?.isOpen() &&
          g.ctx.modules.get("netcode")?.isConnected?.();
      if (hiddenAt && connected && !live) {
        panel.style.display = "grid";
        hideStages();
        text.textContent = "Welcome back. Rejoining…";
        location.reload();
      }
      hiddenAt = 0;
      lostSince = 0;
    });
    async function check() {
      try {
        const g = window.__game,
          transport = g?.ctx?.transport;
        // before sign-in only a boot failure shows the panel (over the form)
        if (!joined && !g?.bootFailed) return;
        if (!joined) panel.style.display = "grid";
        if (g?.bootFailed && !connected) {
          // Boot threw before play (no WebGL2, a refused socket, a chunk that failed to load). Say so instead of an
          // endless "Still loading"; a socket refused because the map rotated mid-load reloads onto the new map.
          const msg = String(g.bootError ?? "unknown error");
          hideStages();
          if (!reported) {
            noteError(msg);
            reach("failed");
            report("failed");
          }
          if (/webgl|context/i.test(msg)) {
            text.textContent =
              "Your browser could not start 3D graphics (WebGL 2). Turn on hardware acceleration in the browser settings, update your graphics driver, or try the latest Chrome, Edge or Firefox.";
            button.hidden = false;
            return;
          }
          if (retries.count < 3) {
            try {
              const res = await fetch("/health", {
                  signal: timeout(4000),
                  cache: "no-store",
                }),
                h = res.ok ? await res.json() : null;
              if (h?.ok) {
                if (h.ruleset && h.ruleset !== ruleset && h.map?.name)
                  text.textContent = `Next map: ${h.map.name}. Loading…`;
                else text.textContent = "Retrying…";
                retries.count++;
                try {
                  sessionStorage.setItem(retryKey, JSON.stringify(retries));
                } catch {}
                location.reload();
                return;
              }
            } catch {}
          }
          text.textContent = `The game could not start (${msg.slice(0, 160)}). Reload to try again, or return to the lobby.`;
          button.hidden = false;
          return;
        }
        if (
          transport?.isOpen() &&
          g?.ctx?.modules.get("netcode")?.isConnected?.()
        ) {
          connected = true;
          lostSince = 0;
          reach("connected");
          // Keep the panel until the first frames are drawn: before that the canvas shows nothing useful.
          if (!g.ready) {
            text.textContent = "Preparing graphics…";
            reach("graphics");
            showStages("graphics");
            return;
          }
          healthySince ||= Date.now();
          panel.style.display = "none";
          hideStages();
          reach("ready");
          const spawnEl = document.querySelector?.(".sl-spawn");
          if (spawnEl && !spawnEl.hidden) reach("deploy");
          const e = g.ctx.modules.get("player")?.getLocalEntity?.();
          if (e) {
            reach("spawned");
            report("spawned");
          }
          if (Date.now() - healthySince > 15000) {
            retries = { since: Date.now(), count: 0 };
            try {
              sessionStorage.removeItem(retryKey);
            } catch {}
          }
          return;
        }
        healthySince = 0;
        if (connected || (transport && !transport.isOpen())) {
          if (document.hidden) return;
          lostSince ||= Date.now();
          if (Date.now() - lostSince < 3000) return;
          panel.style.display = "grid";
          hideStages();
          text.textContent =
            "Connection lost or next round starting. Rejoining…";
          g?.ctx?.modules.get("player")?.setPointerLock?.(false);
          if (retries.count >= 3) {
            text.textContent =
              "Automatic rejoin paused after 3 attempts. Return to the lobby to check the session and join again.";
            return;
          }
          try {
            const res = await fetch("/health", {
                signal: timeout(4000),
                cache: "no-store",
              }),
              h = res.ok ? await res.json() : null;
            // Map rotation: the host moved on to another map. Show it while the page reloads onto it.
            if (h?.ruleset && h.ruleset !== ruleset && h.map?.name) {
              text.textContent = `Next map: ${h.map.name}. Loading…`;
              if (
                String(h.map.image).startsWith("/assets/maps/") &&
                !String(h.map.image).includes("'")
              )
                panel.style.background = `linear-gradient(#111b23cc,#111b23ee),url('${h.map.image}') center/cover`;
            }
            if (h?.ok) {
              retries.count++;
              try {
                sessionStorage.setItem(retryKey, JSON.stringify(retries));
              } catch {
                text.textContent =
                  "Automatic rejoin unavailable because browser storage is disabled. Return to the lobby to join again.";
                return;
              }
              location.reload();
            } else {
              text.textContent = "Server is preparing the next round. Waiting…";
            }
          } catch {
            text.textContent =
              "Server is unreachable. Waiting for the host or internet connection…";
          }
        } else {
          const status = g?.ctx?.connectionStatus,
            stage = g?.bootStage ?? "download";
          reach(stage);
          showStages(stage);
          text.textContent =
            status?.phase === "failed"
              ? "Could not reach the multiplayer server after 3 attempts. Return to the lobby and try again."
              : status?.phase === "connecting"
                ? `Connecting to the shared battlefield (attempt ${status.attempt}/3)…`
                : Date.now() - started > 12000
                  ? "Still loading the battlefield… Please keep this tab open."
                  : "Joining the shared battlefield…";
          if (Date.now() - started > 90000) button.hidden = false;
        }
      } finally {
        setTimeout(check, 1500);
      }
    }
    check();
    solo();
  });
  // Solo map switch (owner decision 2026-09-27): the only human in the game gets a button to move the server to
  // another map (host /api/maps, /api/switch-map). The page then follows the host like a map rotation.
  let soloBox = null,
    soloOpen = false,
    soloHidden = "",
    soloTimer = 0,
    soloShownFor = "";
  const soloEsc = (v) =>
    String(v).replace(/[&<>"']/g, (c) => "&#" + c.charCodeAt(0) + ";");
  const soloUi = () => {
    if (soloBox) return soloBox;
    const st = document.createElement("style");
    st.textContent = `
#sl-solo{position:fixed;bottom:6px;left:50%;transform:translateX(-50%);z-index:99990;font:13px system-ui,sans-serif;color:#fff;max-width:calc(100vw - 32px);width:max-content;display:flex;flex-direction:column-reverse;align-items:center;transition:opacity .6s}
#sl-solo.solo-fade{opacity:0}
#sl-solo .solo-cta{display:flex;gap:8px;align-items:center;background:#0b1217a6;color:#e3ebef;border:1px solid #ffffff1f;border-radius:999px;padding:4px 6px 4px 14px;cursor:pointer;font:500 13px system-ui,sans-serif;line-height:1.3;opacity:.8}
#sl-solo .solo-cta:hover{opacity:1;border-color:#f0b43c88}
#sl-solo .solo-cta u{text-decoration:none;color:#f0b43c}
#sl-solo .solo-x{background:none;border:0;color:inherit;opacity:.6;border-radius:50%;width:20px;height:20px;font:600 13px system-ui;cursor:pointer;flex:none;padding:0}
#sl-solo .solo-x:hover{opacity:1;background:#fff2}
#sl-solo .solo-list{margin-bottom:8px;background:#111b23f2;border:1px solid #ffffff26;border-radius:12px;padding:12px;box-shadow:0 8px 30px #000a;display:grid;gap:8px;max-height:calc(100vh - 120px);overflow:auto;width:min(520px,calc(100vw - 32px))}
#sl-solo .solo-map{display:grid;grid-template-columns:96px 1fr;gap:12px;align-items:center;background:#ffffff0d;border:1px solid #ffffff1a;border-radius:10px;padding:6px;color:#fff;cursor:pointer;text-align:left;font:inherit}
#sl-solo .solo-map:hover{background:#f0b43c33;border-color:#f0b43c}
#sl-solo .solo-map img{width:96px;height:56px;object-fit:cover;border-radius:6px;background:#0004}
#sl-solo .solo-map b{display:block;font-size:15px}
#sl-solo .solo-map span{display:block;font-size:12px;color:#b8c9d4;margin-top:2px}
#sl-solo .solo-note{font-size:13px;color:#d8e2e6;margin:0 2px 2px}
@media (max-width:600px){#sl-solo .solo-cta{font-size:12px}}`;
    document.head.append(st);
    soloBox = document.createElement("div");
    soloBox.id = "sl-solo";
    soloBox.hidden = true;
    document.body.append(soloBox);
    // Keep clicks in the dialog from reaching the game (which would grab the mouse again).
    for (const ev of ["mousedown", "pointerdown", "click", "wheel"])
      soloBox.addEventListener(ev, (e) => e.stopPropagation());
    return soloBox;
  };
  let soloData = null;
  const soloRender = () => {
    const box = soloUi(),
      d = soloData;
    if (!d?.solo || soloHidden === d.current) {
      box.hidden = true;
      soloOpen = false;
      return;
    }
    box.hidden = false;
    const maps = d.maps.filter((m) => m.key !== d.current);
    // Subtle note on the bottom edge; it hides itself after 15 s unless the player opens it.
    if (soloShownFor !== d.current) {
      soloShownFor = d.current;
      box.classList.remove("solo-fade");
      clearTimeout(soloTimer);
      soloTimer = setTimeout(() => {
        if (soloOpen) return;
        box.classList.add("solo-fade");
        setTimeout(() => {
          if (!soloOpen) {
            soloHidden = d.current;
            soloRender();
          }
        }, 600);
      }, 15000);
    }
    box.innerHTML =
      '<div class="solo-cta" role="button" tabindex="0" title="Esc frees the mouse">You’re the only one here. <u>Try another map?</u><button class="solo-x" title="Hide">×</button></div>' +
      (soloOpen
        ? '<div class="solo-list"><p class="solo-note">Pick a map. The server switches over and your game reloads onto it.</p>' +
          maps
            .map(
              (m) =>
                '<button class="solo-map" data-map="' +
                soloEsc(m.key) +
                '"><img alt="" src="' +
                soloEsc(m.image) +
                '"><div><b>' +
                soloEsc(m.name) +
                "</b><span>" +
                soloEsc(m.blurb) +
                "</span></div></button>",
            )
            .join("") +
          "</div>"
        : "");
    box.querySelector(".solo-x").onclick = (e) => {
      e.stopPropagation();
      soloHidden = d.current;
      soloRender();
    };
    const cta = box.querySelector(".solo-cta");
    cta.onclick = () => {
      soloOpen = !soloOpen;
      clearTimeout(soloTimer);
      box.classList.remove("solo-fade");
      if (soloOpen)
        window.__game?.ctx?.modules.get("player")?.setPointerLock?.(false);
      soloRender();
    };
    for (const b of box.querySelectorAll(".solo-map"))
      b.onclick = async () => {
        const name = b.querySelector("b").textContent;
        box.querySelector(".solo-note").textContent =
          "Switching to " + name + "…";
        for (const x of box.querySelectorAll(".solo-map")) x.disabled = true;
        try {
          const res = await fetch("/api/switch-map", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ map: b.dataset.map }),
          });
          if (res.ok) {
            box.querySelector(".solo-note").textContent =
              "Switching to " + name + ". Loading…";
            return;
          }
          box.querySelector(".solo-note").textContent =
            (await res.text()).slice(0, 160) || "Could not switch the map.";
        } catch {
          box.querySelector(".solo-note").textContent =
            "Could not reach the server.";
        }
        for (const x of box.querySelectorAll(".solo-map")) x.disabled = false;
      };
  };
  async function solo() {
    try {
      const g = window.__game;
      if (
        !document.hidden &&
        connected &&
        g?.ready &&
        g.ctx?.transport?.isOpen()
      ) {
        const res = await fetch("/api/maps", {
          signal: timeout(4000),
          cache: "no-store",
        });
        const d = res.ok ? await res.json() : null;
        const was = JSON.stringify(soloData?.solo) + soloData?.current;
        soloData = d;
        if (
          !soloBox ||
          was !== JSON.stringify(d?.solo) + d?.current ||
          soloBox.hidden !== !(d?.solo && soloHidden !== d.current)
        )
          soloRender();
      } else if (soloBox && !soloBox.hidden && !g?.ctx?.transport?.isOpen()) {
        soloBox.hidden = true;
      }
    } catch {
    } finally {
      setTimeout(solo, 8000);
    }
  }
}
