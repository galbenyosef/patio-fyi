// assets__ui-hhE6L1u7 28 — math
// Lines 11298-11505 of readable/assets__ui-hhE6L1u7.pretty.js (statement-aligned).
function pa(e = ua) {
  let t = { roll: 0, vel: 0, push: 0 };
  return (
    (t.reset = () => {
      t.roll = t.vel = t.push = 0;
    }),
    (t.kick = (n, r) => {
      ((t.vel += n * e.omega), (t.push = Math.min(e.pushMax, t.push + r)));
    }),
    (t.step = (n) => {
      n = da(+n || 0, 0, 0.1);
      let r = e.omega * e.omega,
        i = 2 * e.zeta * e.omega;
      for (let e = n; e > 1e-6; e -= 1 / 240) {
        let n = Math.min(e, 1 / 240);
        ((t.vel += (-r * t.roll - i * t.vel) * n), (t.roll += t.vel * n));
      }
      return (
        (t.roll = da(t.roll, -e.rollMax * e.headRoll, e.rollMax * e.headRoll)),
        (t.push *= Math.exp(-n / e.pushFade)),
        Math.abs(t.roll) < 0.004 &&
          Math.abs(t.vel) < 0.05 &&
          (t.roll = t.vel = 0),
        t.push < 2e-4 && (t.push = 0),
        t
      );
    }),
    t
  );
}
function ma(e, t) {
  let n = Math.abs(e) * fa,
    r = Math.max(t, 1 / t);
  return Math.cos(n) + r * Math.sin(n);
}
function ha(e, t, n, r = ua) {
  let i =
      da(r.rollMin + e * r.rollPerFrac, r.rollMin, r.rollMax) *
      (n ? r.headRoll : 1),
    a = Number.isFinite(t) ? Math.sin(t * fa) : 0;
  return {
    roll:
      (Math.abs(a) > 0.25 ? Math.sign(a) : Math.random() < 0.5 ? -1 : 1) *
      i *
      (0.45 + 0.55 * Math.abs(a)),
    push:
      da(r.pushMin + e * r.pushPerFrac, 0, r.pushMax) * (1 - 0.5 * Math.abs(a)),
  };
}
function ga(e, t, n = ua) {
  let r = pa(n),
    i = { flash: 0, bearing: NaN, out: { flash: ``, canvas: `` } },
    a = () => e.renderer?.domElement;
  function o(e, t, a, o, s = !1, c = !0) {
    let l = da((+e || 0) / Math.max(1, +t || 200), 0, 1);
    if (
      ((i.flash = Math.min(
        1,
        i.flash + Math.max(n.flashMin, l * n.flashPerFrac),
      )),
      Number.isFinite(a) && (i.bearing = a),
      !c)
    )
      return;
    let { roll: u, push: d } = ha(l, Number.isFinite(a) ? a - o : NaN, s, n);
    r.kick(u, d);
  }
  function s(e) {
    let t = a();
    t && i.out.canvas !== e && ((i.out.canvas = e), (t.style.transform = e));
  }
  function c(e, o, c, l = c) {
    ((i.flash = Math.max(0, i.flash - e * n.flashFade)),
      l || (i.flash = 0),
      c || r.reset());
    let u = i.flash > 0.003 ? Math.min(1, i.flash ** 0.8) : 0,
      d = ``;
    if (u) {
      let e = (i.bearing - o) * fa,
        r = Number.isFinite(e) ? n.bias * Math.min(1, i.flash * 1.6) : 0,
        a = r ? -Math.sin(e) * r : 0,
        s = r ? Math.cos(e) * r : 0;
      ((d = `${u.toFixed(2)}|${a.toFixed(1)}|${s.toFixed(1)}`),
        d !== i.out.flash &&
          ((t.style.opacity = u.toFixed(2)),
          (t.style.transform = `translate(${a.toFixed(1)}%,${s.toFixed(1)}%)`)));
    } else
      i.out.flash &&
        ((t.style.opacity = `0`), (t.style.transform = ``), (i.bearing = NaN));
    if (((i.out.flash = d), r.step(e), !r.roll && !r.push)) {
      s(``);
      return;
    }
    let f = a(),
      p = f ? (f.clientWidth || 16) / (f.clientHeight || 9) : 16 / 9,
      m = Math.round(r.roll * 100) / 100,
      h = ma(m, p) + r.push;
    s(`rotate(${m.toFixed(2)}deg) scale(${h.toFixed(4)})`);
  }
  function l() {
    ((i.flash = 0),
      (i.bearing = NaN),
      r.reset(),
      (i.out.flash = ``),
      (t.style.opacity = `0`),
      (t.style.transform = ``),
      s(``));
  }
  return { hit: o, update: c, clear: l, dispose: l, flinch: r, state: i };
}
var _a = `salient.hipCrosshair`;
function va() {
  try {
    return localStorage.getItem(_a) !== `0`;
  } catch {
    return !0;
  }
}
function ya(e, t) {
  try {
    localStorage.setItem(_a, t ? `1` : `0`);
  } catch {}
  e.events?.emit(`ui:hipCrosshair`, { on: !!t });
}
var ba = b(),
  xa = 64,
  Sa = 2,
  Ca = 1,
  wa = 4,
  Ta = 8,
  Ea = 620,
  Da = {
    0: `AUTO`,
    1: `SEMI`,
    2: `BURST`,
    auto: `AUTO`,
    semi: `SEMI`,
    burst: `BURST`,
    single: `SEMI`,
    bolt: `BOLT`,
  },
  Oa = [
    `crosshair`,
    `health`,
    `ammo`,
    `compass`,
    `match`,
    `minimap`,
    `markers`,
    `killfeed`,
    `players`,
    `messages`,
    `scoreboard`,
    `spawn`,
    `netstats`,
    `modules`,
    `vignette`,
  ],
  ka = [
    3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 22, 24, 26, 28,
    30, 32, 34, 36, 38, 39, 44, 46, 48, 54, 56, 64, 66, 70, 72, 76, 78, 92, 96,
    104, 110, 150, 158, 184, 238, 268, 600, 690, 1240,
  ],
  Aa = {
    safe: 28,
    map: 232,
    ammoW: 300,
    ammoH: 88,
    msgY: 236,
    laneY: 92,
    dbgW: 238,
  },
  Q = (e, t, n) => {
    let r = document.createElement(e);
    return (t && (r.className = t), n != null && (r.textContent = n), r);
  },
  ja = (e, t = [`tl`, `tr`, `bl`, `br`]) => {
    for (let n of t) e.appendChild(Q(`i`, `sl-c ${n}`));
    return e;
  },
  Ma = (e, t, n) => (e < t ? t : e > n ? n : e),
  Na = (e, t, n) => e + (t - e) * n,
  Pa = (e) =>
    _t(e)
      ? `—`
      : ((e = Math.max(0, Math.floor(+e || 0))),
        `${Math.floor(e / 60)}:${String(e % 60).padStart(2, `0`)}`),
  Fa = (e) => (e === 0 ? `t0` : e === 1 ? `t1` : ``);
function Ia(e) {
  let t = /^#?([0-9a-f]{6})$/i.exec(String(e || ``));
  if (!t) return `#ECEAE3`;
  let n = parseInt(t[1], 16),
    r = (n >> 16) & 255,
    i = (n >> 8) & 255,
    a = n & 255,
    o = (e) => (
      (e /= 255),
      e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4
    ),
    s = () => 0.2126 * o(r) + 0.7152 * o(i) + 0.0722 * o(a);
  for (let e = 0; e < 24 && s() < 0.31156; e++)
    ((r += (255 - r) * 0.12), (i += (255 - i) * 0.12), (a += (255 - a) * 0.12));
  let c = (e) =>
    Math.round(Ma(e, 0, 255))
      .toString(16)
      .padStart(2, `0`);
  return `#${c(r)}${c(i)}${c(a)}`;
}
