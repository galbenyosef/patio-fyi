// assets__facade-kit-DPPNwSDt 01 — tofixed
// Lines 1-120 of readable/assets__facade-kit-DPPNwSDt.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  Bt as e,
  F as t,
  Gt as n,
  Hn as r,
  Ht as i,
  I as a,
  L as o,
  P as s,
  U as c,
  Vn as l,
  X as u,
  _n as d,
  dn as f,
  dt as p,
  hn as m,
  p as h,
  qt as g,
  rt as _,
  un as v,
  xn as y,
  z as b,
  zt as x,
} from "./graphics-quality-CrL3qbU3.js";
var S = new Uint8Array(65536).fill(255),
  C = new u(S, 128, 128, f);
((C.magFilter = C.minFilter = g), (C.needsUpdate = !0));
var w = [null],
  T = { lit: 0, allWindows: !1, minDetail: 0 },
  E = { w: 1.6, h: 2.6 },
  D = { w: 1.2, h: 2.4, transom: 0.3, mat: `woodDoor` },
  O = null,
  k = new s(),
  A = new r(),
  ee = new Set([
    `window`,
    `curtain`,
    `ribbon`,
    `lobby`,
    `lobbyDoor`,
    `recess`,
    `balcony`,
    `store`,
    `door`,
    `loading`,
  ]),
  j = (e, t) =>
    T.lit
      ? t
        ? `glassShop`
        : P(e * 5 + 3)() < T.lit
          ? `glassLit`
          : `glass`
      : `glass`,
  M = (e) => e === 0 || S[e * 4] > 0;
function N(e, t) {
  e > 0 && ((S[e * 4] = t ? 255 : 0), (C.needsUpdate = !0));
}
function te() {
  (S.fill(255), (C.needsUpdate = !0));
}
function ne(e, t, n, i, a, o) {
  let s = new r(t, n, 0).applyMatrix4(e).applyMatrix4(O.inv),
    c = new r(0, 0, 1).transformDirection(e).transformDirection(O.inv);
  O.doors.push({
    x: +s.x.toFixed(3),
    y: +s.y.toFixed(3),
    z: +s.z.toFixed(3),
    nx: Math.round(c.x),
    nz: Math.round(c.z),
    w: +i.toFixed(3),
    h: +a.toFixed(3),
    t: +o.toFixed(3),
  });
}
function re(e, t, n, r, i, a) {
  O && ne(e, t, n, r, i, a);
}
function P(e) {
  let t = e >>> 0;
  return () => {
    t = (t + 1831565813) >>> 0;
    let e = t;
    return (
      (e = Math.imul(e ^ (e >>> 15), e | 1)),
      (e ^= e + Math.imul(e ^ (e >>> 7), e | 61)),
      ((e ^ (e >>> 14)) >>> 0) / 4294967296
    );
  };
}
var F = (e) => [(e >> 16) & 255, (e >> 8) & 255, e & 255],
  I = (e, t = 1, n = 1) =>
    `rgba(${e.map((e) => Math.max(0, Math.min(255, Math.round(e * t)))).join(`,`)},${n})`,
  L = (e) => `rgb(${e | 0},${e | 0},${e | 0})`;
function R(e, t, n, r, i = 0.12, a = t) {
  for (let o = 0; o < t * a * r; o++) {
    let r = n() * i;
    ((e.fillStyle =
      n() < 0.5 ? `rgba(0,0,0,${r})` : `rgba(255,255,255,${r * 0.6})`),
      e.fillRect(n() * t, n() * a, 1 + n() * 2, 1 + n() * 2));
  }
}
function z(e, t, n, r, i) {
  for (let a = 0; a < r; a++) {
    let r = n() * t,
      a = n() * t,
      o = t * (0.04 + n() * 0.14),
      s = n() * i,
      c = n() < 0.7;
    for (let n of [-t, 0, t])
      for (let i of [-t, 0, t]) {
        let t = e.createRadialGradient(r + n, a + i, 0, r + n, a + i, o);
        (t.addColorStop(0, c ? `rgba(0,0,0,${s})` : `rgba(255,255,255,${s})`),
          t.addColorStop(1, `rgba(0,0,0,0)`),
          (e.fillStyle = t),
          e.fillRect(r + n - o, a + i - o, 2 * o, 2 * o));
      }
  }
}
