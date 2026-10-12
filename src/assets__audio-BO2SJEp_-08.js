// assets__audio-BO2SJEp_ 08 — math
// Lines 2142-2485 of readable/assets__audio-BO2SJEp_.pretty.js (statement-aligned).
function Pe(e, t, n) {
  let r = e.ui ?? document.body,
    i = 1e3,
    a = document.createElement(`div`);
  ((a.id = `audio-showcase-panel`),
    (a.style.cssText = `position:absolute;left:24px;bottom:24px;width:${i}px;height:262px;pointer-events:none;border-radius:8px;
    background:rgba(9,13,18,0.84);border:1px solid rgba(240,160,48,0.5);box-shadow:0 8px 30px rgba(0,0,0,0.45);overflow:hidden`));
  let o = document.createElement(`canvas`),
    s = Math.min(window.devicePixelRatio || 1, 2);
  ((o.width = i * s),
    (o.height = 262 * s),
    (o.style.cssText = `width:${i}px;height:262px;display:block`),
    a.appendChild(o),
    r.appendChild(a));
  let c = o.getContext(`2d`);
  c.scale(s, s);
  let l = t.analyser,
    u = new Float32Array(l ? l.fftSize : 2048),
    d = new Uint8Array(l ? l.frequencyBinCount : 1024),
    f = new Float32Array(u.length),
    p = 0,
    m = 99,
    h = ``,
    g = 0,
    _ = [],
    v = `"Segoe UI", system-ui, -apple-system, sans-serif`,
    y = `"Cascadia Mono", Consolas, monospace`,
    b = 0,
    x = 1024,
    S = new Float32Array(x),
    C = new Float32Array(x),
    w = new Uint8Array(x / 2),
    T = new Float32Array(x);
  for (let e = 0; e < x; e++)
    T[e] = 0.5 - 0.5 * Math.cos((2 * Math.PI * e) / 1023);
  let E = 0,
    D = new Float32Array(64),
    O = (e) => 20 * Math.log10(e + 1e-6);
  function k(e) {
    let n = t.offlineBuffer,
      r = t.offlineRate;
    b = (b + e * r) % n.length;
    let i = Math.floor(b);
    for (let e = 0; e < u.length; e++) u[e] = n[(i + e) % n.length];
    for (let e = 0; e < x; e++) ((S[e] = u[e] * T[e]), (C[e] = 0));
    Fe(S, C);
    for (let e = 0; e < x / 2; e++) {
      let t = Math.hypot(S[e], C[e]) / (x / 4);
      w[e] = Math.max(0, Math.min(255, ((O(t) + 90) / 80) * 255));
    }
    return { rate: r, freq: w, bins: x / 2 };
  }
  function A(r) {
    E += r;
    let a = t.ok && t.health === `running`,
      o = null;
    a
      ? (l.getFloatTimeDomainData(u),
        l.getByteFrequencyData(d),
        (o = { rate: t.ac.sampleRate, freq: d, bins: d.length }))
      : t.offlineBuffer
        ? (o = k(r))
        : u.fill(0);
    let s = 0,
      b = 0;
    for (let e = 0; e < u.length; e++) {
      let t = u[e];
      s += t * t;
      let n = t < 0 ? -t : t;
      n > b && (b = n);
    }
    for (
      s = Math.sqrt(s / u.length), _.push({ t: E, rms: s });
      _.length && _[0].t < E - 12;
    )
      _.shift();
    g = Math.max(b, g * Math.exp(-r * 0.9));
    let x = R(0.85 / (g + 0.002), 1, 40);
    if (((m += r), b > 0.06 && (b > p * 0.85 || m > 2.5))) {
      (f.set(u), (p = b), (m = 0));
      let e = t.recent;
      h = e.length ? e[e.length - 1].id : ``;
    }
    (c.clearRect(0, 0, i, 262),
      (c.font = `600 13px ${v}`),
      (c.fillStyle = `#f0a030`),
      (c.textBaseline = `middle`),
      c.fillText(`CALL OF CUBIE AUDIO`, 16, 16),
      (c.font = `12px ${v}`),
      (c.fillStyle = `#9aa4ae`),
      c.fillText(`procedural synthesis · equalpower · 48 voices`, 122, 16));
    let S = t.ok ? t.health : `unavailable`,
      C = a ? `live` : t.offlineBuffer ? `offline render` : `starting`,
      w = e.world.time.tod ?? 14,
      T = n?.w ?? {},
      A = `ctx ${S} · ${C} · ${t.ac ? Math.round(t.ac.sampleRate / 100) / 10 : 0} kHz · voices ${t.activeVoices()}/48 · played ${t.played} · stolen ${t.stolen} · tod ${F(w)}`;
    ((c.font = `12px ${y}`),
      (c.fillStyle = `#c8d0d8`),
      (c.textAlign = `right`),
      c.fillText(A, 984, 16),
      (c.textAlign = `left`),
      ee(16, 34, 520, 118),
      (c.strokeStyle = `rgba(255,255,255,0.08)`),
      c.beginPath(),
      c.moveTo(16, 93),
      c.lineTo(536, 93),
      c.stroke());
    let N = Math.max(1, Math.floor(u.length / 520));
    if (p > 0) {
      ((c.strokeStyle = `rgba(240,160,48,0.42)`),
        (c.lineWidth = 1),
        c.beginPath());
      let e = 0.92 / p;
      for (let t = 0, n = 0; t < f.length; t += N, n++) {
        let r = 93 - R(f[t] * e, -1, 1) * 56;
        n === 0 ? c.moveTo(16 + n, r) : c.lineTo(16 + n, r);
      }
      c.stroke();
    }
    ((c.strokeStyle = a ? `#7fe0c0` : `#e0c27f`),
      (c.lineWidth = 1.4),
      c.beginPath());
    for (let e = 0, t = 0; e < u.length; e += N, t++) {
      let n = 93 - R(u[e] * x, -1, 1) * 56;
      t === 0 ? c.moveTo(16 + t, n) : c.lineTo(16 + t, n);
    }
    (c.stroke(),
      (c.lineWidth = 1),
      j(
        `master waveform  ·  rms ${O(s).toFixed(1)} dBFS  ·  peak ${O(b).toFixed(1)} dBFS  ·  view ×${x.toFixed(1)}`,
        24,
        44,
      ),
      p > 0 &&
        ((c.font = `11px ${v}`),
        (c.fillStyle = `rgba(240,160,48,0.85)`),
        c.fillText(
          `held: last transient  ${h}  ${O(p).toFixed(1)} dBFS  ${m.toFixed(1)} s ago`,
          24,
          142,
        )));
    let ne = R((O(s) + 60) / 60, 0, 1);
    if (
      ((c.fillStyle = `rgba(127,224,192,0.25)`),
      c.fillRect(526, 148 - ne * 110, 6, ne * 110),
      ee(548, 34, 436, 118),
      o)
    )
      for (let e = 0; e < 64; e++) {
        let t = 30 * (16e3 / 30) ** (e / 64),
          n = 30 * (16e3 / 30) ** ((e + 1) / 64),
          i = Math.floor((t / (o.rate / 2)) * o.bins),
          a = Math.max(i + 1, Math.floor((n / (o.rate / 2)) * o.bins)),
          s = 0;
        for (let e = i; e < a && e < o.bins; e++) s = Math.max(s, o.freq[e]);
        let l = s / 255;
        D[e] = Math.max(l, D[e] - r * 1.8);
        let u = D[e] ** 1.2 * 96;
        ((c.fillStyle = M(e / 64, 0.9)),
          c.fillRect(548 + e * 6.8125 + 1, 148 - u, 4.8125, u));
      }
    (j(`spectrum 30 Hz – 16 kHz (log)`, 556, 44),
      (c.font = `10px ${y}`),
      (c.fillStyle = `#6f7a86`));
    for (let [e, t] of [
      [60, `60`],
      [250, `250`],
      [1e3, `1k`],
      [4e3, `4k`],
      [12e3, `12k`],
    ]) {
      let n = (Math.log(e / 30) / Math.log(16e3 / 30)) * 436;
      c.fillText(t, 548 + n - 6, 160);
    }
    (ee(16, 170, 968, 38), c.beginPath(), c.moveTo(16, 208));
    for (let e of _) {
      let t = 16 + ((e.t - (E - 12)) / 12) * 968;
      c.lineTo(t, 208 - R((O(e.rms) + 60) / 60, 0, 1) * 34);
    }
    (c.lineTo(984, 208),
      c.closePath(),
      (c.fillStyle = `rgba(127,224,192,0.22)`),
      c.fill());
    for (let e of t.recent) {
      let t = e.t - (performance.now() / 1e3 - E);
      if (t < E - 12) continue;
      let n = 16 + ((t - (E - 12)) / 12) * 968;
      ((c.fillStyle = te(e)),
        c.fillRect(n - 1, 172, 2, e.kind === `ambience` ? 6 : 12));
    }
    j(`level (-60..0 dBFS) · last 12 s · events by type`, 24, 178);
    let I = [
        [`gun`, `gunshot near`],
        [`gunfar`, `gunshot far`],
        [`foot`, `footsteps`],
        [`explosion`, `explosion`],
        [`impact`, `impact / reload`],
        [`ui`, `ui / feedback`],
        [`ambience`, `ambience`],
      ],
      L = 16;
    c.font = `11px ${v}`;
    for (let [e, t] of I)
      ((c.fillStyle = K[e]),
        c.beginPath(),
        c.arc(L + 5, 224, 4.5, 0, 6.283),
        c.fill(),
        (c.fillStyle = `#c8d0d8`),
        c.fillText(t, L + 14, 224),
        (L += 14 + c.measureText(t).width + 18));
    let z = `ambience  wind ${P(T.wind)}  birds ${P(T.birds)}  crickets ${P(T.crickets)}  rumble ${P(T.rumble)}     busses  master ${t.getBus(`master`).toFixed(2)}  sfx ${t.getBus(`sfx`).toFixed(2)}  ambience ${t.getBus(`ambience`).toFixed(2)}  ui ${t.getBus(`ui`).toFixed(2)}`;
    ((c.font = `11px ${y}`), (c.fillStyle = `#8f9aa6`), c.fillText(z, 16, 245));
  }
  function ee(e, t, n, r) {
    ((c.fillStyle = `rgba(0,0,0,0.35)`),
      c.fillRect(e, t, n, r),
      (c.strokeStyle = `rgba(255,255,255,0.09)`),
      c.strokeRect(e + 0.5, t + 0.5, n - 1, r - 1));
  }
  function j(e, t, n) {
    ((c.font = `11px ${v}`), (c.fillStyle = `#8f9aa6`), c.fillText(e, t, n));
  }
  function te(e) {
    return K[e.kind === `gun` && e.d > 60 ? `gunfar` : e.kind] ?? `#aaa`;
  }
  function M(e, t) {
    let n = [240, 160, 48],
      r = [127, 224, 192],
      i = e < 0.5 ? N(n, r, e * 2) : N(r, [176, 106, 224], (e - 0.5) * 2);
    return `rgba(${i[0] | 0},${i[1] | 0},${i[2] | 0},${t})`;
  }
  function N(e, t, n) {
    return [
      e[0] + (t[0] - e[0]) * n,
      e[1] + (t[1] - e[1]) * n,
      e[2] + (t[2] - e[2]) * n,
    ];
  }
  function P(e) {
    return `${Math.round((e ?? 0) * 100)}%`;
  }
  function F(e) {
    let t = Math.floor(e),
      n = Math.floor((e - t) * 60);
    return `${String(t).padStart(2, `0`)}:${String(n).padStart(2, `0`)}`;
  }
  return {
    draw: A,
    dispose() {
      a.remove();
    },
  };
}
function Fe(e, t) {
  let n = e.length;
  for (let r = 1, i = 0; r < n; r++) {
    let a = n >> 1;
    for (; i & a; a >>= 1) i ^= a;
    if (((i ^= a), r < i)) {
      let n = e[r];
      ((e[r] = e[i]), (e[i] = n), (n = t[r]), (t[r] = t[i]), (t[i] = n));
    }
  }
  for (let r = 2; r <= n; r <<= 1) {
    let i = (-2 * Math.PI) / r,
      a = Math.cos(i),
      o = Math.sin(i);
    for (let i = 0; i < n; i += r) {
      let n = 1,
        s = 0;
      for (let c = 0; c < r / 2; c++) {
        let l = i + c,
          u = l + r / 2,
          d = e[u] * n - t[u] * s,
          f = e[u] * s + t[u] * n;
        ((e[u] = e[l] - d), (t[u] = t[l] - f), (e[l] += d), (t[l] += f));
        let p = n * a - s * o;
        ((s = n * o + s * a), (n = p));
      }
    }
  }
}
function Ie(e) {
  if (e === 2) return `tank_cannon`;
  let t = j[e]?.gun;
  return t === 2 ? `rocket_launch` : t === 1 ? `gun_lmg` : null;
}
function Le() {
  let e = null,
    t = -1 / 0,
    n = (e, n, r) => (e - t < 3 ? null : ((t = e), { id: n, volume: r }));
  return {
    message(e, t) {
      return e?.kind === `error` ? n(t, `ui_error`, 0.3) : null;
    },
    objective() {
      return null;
    },
    phase(t, r) {
      let i = t?.phase;
      if (!i || i === e) return null;
      let a = e;
      return (
        (e = i),
        a === null
          ? null
          : n(r, i === `live` ? `ui_confirm` : `ui_message`, 0.3)
      );
    },
  };
}
function Re(e, t, n, r) {
  if (
    ![e, t, r].every(
      (e) => Array.isArray(e) && e.length === 3 && e.every(Number.isFinite),
    ) ||
    !Number.isFinite(n) ||
    n <= 0
  )
    return null;
  let i = Math.hypot(...t);
  if (i < 0.001) return null;
  let a = t.map((e) => e / i),
    o = r.reduce((t, n, r) => t + (n - e[r]) * a[r], 0);
  if (o <= 3 || o >= n) return null;
  let s = e.map((e, t) => e + a[t] * o),
    c = Math.hypot(...r.map((e, t) => e - s[t]));
  return c < 0.35 || c >= 4
    ? null
    : { pos: s, volume: 0.75 * (1 - c / 5), delay: o / 850 };
}
var ze = [
    `launcher`,
    `suppressed`,
    `shotgun`,
    `sniper`,
    `dmr`,
    `lmg`,
    `smg`,
    `pistol`,
    `carbine`,
    `ar`,
  ],
  Be = [`ar`, `carbine`, `dmr`, `sniper`, `lmg`, `smg`, `pistol`];
