// assets__observatory-sim-BDUGU5NF 01 — math
// Lines 1-319 of readable/assets__observatory-sim-BDUGU5NF.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { d as e, f as t, t as n } from "./map-collider-0Gc3D4Vs.js";
var r = Object.freeze({
    ENABLED: !0,
    FIRST: 20,
    EVERY: 240,
    PACE: 0.6,
    SIZE: 2,
    DISTANCE: 2500,
    LIFT: 0,
    REACH: 7e3,
    CLOSE: 0.6,
    SHADOW: 0.85,
    BEAMS: !1,
    TRACK: !0,
  }),
  i = Object.freeze({
    RISE: 1,
    WARP: 2,
    STOP: 30,
    BEAM_ON: 32,
    BEAM_OFF: 158,
    LEAVE: 160,
    JUMP: 170,
    GONE: 172,
    END: 176,
  }),
  a = Object.freeze(
    (() => {
      let e = [0.961, 0.227, 0.159],
        t = Math.hypot(...e);
      return e.map((e) => e / t);
    })(),
  ),
  o = (e, t, n) => Math.max(t, Math.min(n, e)),
  s = (e, t, n) => {
    let r = o((n - e) / (t - e), 0, 1);
    return r * r * (3 - 2 * r);
  },
  c = 60,
  l = Math.hypot(a[0], a[2]),
  u = [-a[2] / l, 0, a[0] / l],
  d = Object.freeze(u);
function f(e = null) {
  if (!e) return r;
  let t = { ...r };
  for (let n of [`SIZE`, `DISTANCE`, `LIFT`, `SHADOW`])
    Number.isFinite(e[n]) && (t[n] = e[n]);
  return (e.BEAMS != null && (t.BEAMS = !!e.BEAMS), t);
}
function p(e, t, n = r) {
  if (!n.ENABLED || e.epoch == null || t < e.epoch) return null;
  let a = (t - e.epoch) / c - n.FIRST;
  if (a < 0) return null;
  let o = Math.floor(a / n.EVERY),
    s = (a - o * n.EVERY) / n.PACE;
  return s < i.END
    ? { k: o, T: s, start: e.epoch + Math.round((n.FIRST + o * n.EVERY) * c) }
    : null;
}
var m = 2e4;
function h(e, t = r, n = t.DISTANCE, c = [0, 0, 0]) {
  let d = i,
    f = n / r.DISTANCE,
    p = n / l,
    h = a[1] * p + t.LIFT * f,
    g = t.REACH * f * 0.5,
    _ = [a[0] * p - u[0] * g, h + 1600 * f, a[2] * p - u[2] * g],
    v = [a[0] * p * t.CLOSE, h * t.CLOSE + 180 * f, a[2] * p * t.CLOSE],
    y = [_[0] - v[0], _[1] - v[1], _[2] - v[2]],
    b = Math.hypot(...y);
  for (let e = 0; e < 3; e++) y[e] /= b;
  if (e < d.WARP) {
    let t = 1 - (1 - o(e / d.WARP, 0, 1)) ** 4;
    for (let e = 0; e < 3; e++) c[e] = _[e] + y[e] * m * f * (1 - t);
    return c;
  }
  if (e < d.STOP) {
    let t = s(d.WARP, d.STOP, e);
    for (let e = 0; e < 3; e++) c[e] = _[e] + (v[e] - _[e]) * t;
    return c;
  }
  for (let e = 0; e < 3; e++) c[e] = v[e];
  if (
    ((c[1] += Math.sin(e * 0.35) * 6 * f),
    e < d.LEAVE || ((c[1] += s(d.LEAVE, d.JUMP, e) * 200 * f), e < d.JUMP))
  )
    return c;
  let x = [-y[0], y[1], -y[2]],
    S = o((e - d.JUMP) / (d.GONE - d.JUMP), 0, 1);
  for (let e = 0; e < 3; e++) c[e] += x[e] * m * f * S ** 4;
  return c;
}
function g(e, t = r) {
  let n = i;
  if (e >= 0 && e < n.WARP)
    return { dir: _(t).map((e) => -e), k: 1 - e / n.WARP };
  if (e >= n.JUMP && e < n.GONE) {
    let r = _(t);
    return { dir: [-r[0], r[1], -r[2]], k: (e - n.JUMP) / (n.GONE - n.JUMP) };
  }
  return null;
}
function _(e) {
  let t = h(v, e),
    n = h(i.STOP, e),
    r = [t[0] - n[0], t[1] - n[1], t[2] - n[2]],
    a = Math.hypot(...r);
  return r.map((e) => e / a);
}
var v = i.WARP,
  y = (e) => e >= 0 && e < i.GONE;
function b(e, t, n) {
  if (!r.TRACK) return n;
  let a = p(e, t);
  if (!a) return n;
  let o = i,
    c = a.T,
    l = s(o.RISE, o.RISE + 12, c) * (1 - s(o.JUMP - 6, o.JUMP, c));
  if (l <= 0) return n;
  let u = h(c),
    d = Math.hypot(...u),
    f = Math.atan2(u[0], u[2]),
    m = Math.max(0.26, Math.asin(u[1] / d)),
    g = Math.atan2(Math.sin(f - n.az), Math.cos(f - n.az));
  return {
    ...n,
    az: n.az + g * l,
    el: n.el + (m - n.el) * l,
    slewing: l < 1 || n.slewing,
    source: l > 0.5 ? `Unidentified object` : n.source,
    ufo: l,
  };
}
function x(e, t, n, a) {
  if (!r.TRACK) return a;
  let o = p(e, n);
  if (!o) return a;
  let c = i,
    l = o.T,
    u = s(c.RISE, c.RISE + 15, l) * (1 - s(c.JUMP - 6, c.JUMP, l));
  if (u <= 0) return a;
  let d = h(l),
    f = Math.hypot(...d),
    m = Math.atan2(d[0], d[2]),
    g = Math.max(0.3, Math.asin(d[1] / f)),
    _ = Math.atan2(Math.sin(m - a.az), Math.cos(m - a.az));
  return {
    ...a,
    az: a.az + _ * u,
    alt: a.alt + (g - a.alt) * u,
    open: a.open + (1 - a.open) * s(0.3, 0.8, u),
    slewing: u < 1 || a.slewing,
  };
}
function S(e, t = r) {
  return e.start + Math.round(i.RISE * t.PACE * c);
}
var C = Object.freeze({
    FROM: i.STOP + 8,
    DWELL: 37,
    MOVE: 3,
    N: 3,
    R: 6,
    DMG: 8,
  }),
  ee = Object.freeze([
    [
      [-12, 4],
      [44, 32],
    ],
    [
      [54, -6],
      [-6, 28],
    ],
    [
      [36, 36],
      [0, -8],
    ],
  ]),
  te = (e, t, n) => {
    let r = n.x - t.x,
      i = n.z - t.z,
      a = r * r + i * i,
      o = a
        ? Math.max(0, Math.min(1, ((e.x - t.x) * r + (e.z - t.z) * i) / a))
        : 0;
    return Math.hypot(t.x + r * o - e.x, t.z + i * o - e.z);
  };
function ne(e, t) {
  let n = 1 / 0;
  for (let r = 0; r + 1 < e.length; r++) n = Math.min(n, te(t, e[r], e[r + 1]));
  return (e.length === 1 && (n = Math.hypot(e[0].x - t.x, e[0].z - t.z)), n);
}
function w(e, t) {
  let n = e.array;
  if (!n) return [];
  if (((n._sweep ??= new Map()), n._sweep.has(t))) return n._sweep.get(t);
  let r = new Set();
  for (let n = 0; n < t; n++) for (let t of w(e, n)) r.add(t);
  let i = n.antennas.filter((e) => !e.fixed && !r.has(e)),
    a = e.flagB ?? { x: 24, z: 14 },
    [o, s] = ee[t % ee.length],
    c = (e) =>
      i.reduce(
        (t, n) =>
          !t ||
          Math.hypot(n.x - e[0], n.z - e[1]) <
            Math.hypot(t.x - e[0], t.z - e[1])
            ? n
            : t,
        null,
      ),
    l = [],
    u = c(o);
  u && (l.push(u), (i = i.filter((e) => e !== u)));
  let d = c(s);
  d && (i = i.filter((e) => e !== d));
  let f = null,
    p = 1 / 0;
  for (let e of i) {
    let t =
      (u && d ? ne([u, e, d], a) : Math.hypot(e.x - a.x, e.z - a.z)) +
      0.25 * Math.hypot(e.x - a.x, e.z - a.z);
    t < p && ((p = t), (f = e));
  }
  return (f && l.push(f), d && l.push(d), n._sweep.set(t, l), l);
}
function T(e, t, n) {
  let r = w(e, t);
  if (!r.length) return null;
  let i = C,
    a = i.DWELL + i.MOVE,
    o = n - i.FROM;
  if (o < -3 || o > r.length * a - i.MOVE + 2) return null;
  let c =
      s(-3, 0, o) *
      (1 - s(r.length * a - i.MOVE - 1, r.length * a - i.MOVE + 2, o)),
    l = Math.max(0, Math.min(r.length - 1, Math.floor(o / a))),
    u = o - l * a,
    d = r[l],
    f = r[l + 1];
  if (u <= i.DWELL || !f) return { x: d.x, z: d.z, on: c, i: l };
  let p = s(i.DWELL, a, u);
  return { x: d.x + (f.x - d.x) * p, z: d.z + (f.z - d.z) * p, on: c, i: l };
}
function E(e, t, n, i = r) {
  if (t.fixed || e.epoch == null || n < e.epoch) return 0;
  let a = (n - e.epoch) / c - i.FIRST;
  if (a < 0) return 0;
  let s = Math.floor(a / i.EVERY),
    l = (a - s * i.EVERY) / i.PACE;
  for (let n = 0; n < s; n++) if (w(e, n).includes(t)) return 1;
  let u = w(e, s).indexOf(t);
  return u < 0
    ? 0
    : o((l - (C.FROM + u * (C.DWELL + C.MOVE) + 2)) / (C.DWELL - 3), 0, 1);
}
function D(e, t, n, i, a = 0, o = r) {
  let s = p(e, t, o);
  if (!s) return !1;
  let c = T(e, s.k, s.T);
  return !!c && c.on > 0.5 && Math.hypot(n - c.x, i - c.z) < C.R + a;
}
var re = 60,
  O = Object.freeze({
    ON: !1,
    EVERY: 60,
    MAX_STRIKES: 20,
    INBOUND: 20,
    SPEED: 300,
    WARN: 20,
    TRACK_IN: 7,
    TRACK_OUT: [3, 13],
    ALARM: 18,
    FALL: 1.8,
    BURN: 40,
    EMBER: 15,
    SMOKE: 55,
    FIRE_R: 2.6,
    FIRE_DMG: 8,
    BLAST: Object.freeze({
      blastRadius: 16,
      damage: 400,
      core: 6,
      cover: Object.freeze([0.45, 0.7, 0.85, 1]),
    }),
    SPAWN_CLEAR: 24,
    RIM_R: 3.1,
    RIM_H: 0.46,
    DISH_REACH: 8,
    TILT: 0.836,
    DROP: 4.71,
    SHIFT: 4,
    APART: 12,
  }),
  k = Object.freeze(
    [
      [15, 2.4, [0.5, 0.7, -0.5], [-0.1, 0.45, -0.89]],
      [11.5, 2.2, [-0.2, 0.62, 0.76], [-0.78, 0.4, 0.48]],
    ].map(([e, t, n, r]) =>
      Object.freeze({ t: e, d: t, a: Object.freeze(n), b: Object.freeze(r) }),
    ),
  ),
  A = Object.freeze(
    (() => {
      let e = [0.85, 0.4, 0.33],
        t = Math.hypot(...e);
      return e.map((e) => e / t);
    })(),
  ),
  ie = (e) => {
    e = (e + 1831565813) | 0;
    let t = Math.imul(e ^ (e >>> 15), 1 | e);
    return (
      (t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t),
      ((t ^ (t >>> 14)) >>> 0) / 4294967296
    );
  };
