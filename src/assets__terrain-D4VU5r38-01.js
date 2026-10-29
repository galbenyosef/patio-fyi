// assets__terrain-D4VU5r38 01 — math
// Lines 1-240 of readable/assets__terrain-D4VU5r38.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = ["assets/index-D8RniaPa.js", "assets/graphics-quality-CrL3qbU3.js"]),
) => i.map((i) => d[i]);
import {
  $ as e,
  At as t,
  Bt as n,
  Dn as r,
  En as i,
  F as a,
  Gt as o,
  Hn as s,
  I as c,
  L as l,
  Lt as u,
  M as d,
  P as f,
  U as p,
  Un as m,
  Vn as h,
  Vt as g,
  W as _,
  X as v,
  Zt as y,
  _n as b,
  at as x,
  bn as S,
  cn as C,
  ct as w,
  dt as T,
  gt as E,
  lt as D,
  mn as O,
  mt as k,
  nn as ee,
  nt as A,
  p as j,
  pt as M,
  q as te,
  tt as N,
  v as ne,
  vt as re,
  z as ie,
  zn as ae,
  zt as oe,
} from "./graphics-quality-CrL3qbU3.js";
import { c as se, u as ce } from "./index-D8RniaPa.js";
import {
  a as le,
  c as P,
  i as F,
  n as ue,
  o as I,
  r as L,
  s as de,
  t as fe,
} from "./sim-CY547Hbc.js";
import { o as pe, t as me } from "./town-beds-C6HTLOgG.js";
import { i as he, n as ge, r as R, t as _e } from "./shaders-Sr63fOMj.js";
import { r as ve, t as ye } from "./harbor-land-d1AqIq2I.js";
import {
  i as be,
  n as xe,
  r as Se,
  t as Ce,
} from "./ground-textures-Chd0kE89.js";
import {
  _ as z,
  a as we,
  b as Te,
  c as Ee,
  d as De,
  f as Oe,
  g as B,
  h as ke,
  i as Ae,
  m as je,
  o as Me,
  p as Ne,
  r as V,
  s as Pe,
  t as H,
  u as Fe,
  v as Ie,
  y as Le,
} from "./autumn-trees-Dw11AS6l.js";
import { n as Re, r as ze, t as Be } from "./models-Df-1HzmN.js";
import { t as Ve } from "./defaultmap-BVQrOy1s.js";
var He = (e, t, n) => {
    let r = (e * 374761393 + t * 668265263 + n * 2246822519) | 0;
    return (
      (r = Math.imul(r ^ (r >>> 13), 1274126177)),
      ((r ^ (r >>> 16)) >>> 0) / 4294967296
    );
  },
  Ue = (e) => e * e * (3 - 2 * e);
function We(e, t, n) {
  let r = Math.floor(e),
    i = Math.floor(t),
    a = Ue(e - r),
    o = Ue(t - i),
    s = He(r, i, n),
    c = He(r + 1, i, n),
    l = He(r, i + 1, n),
    u = He(r + 1, i + 1, n);
  return (s + (c - s) * a + (l - s) * o + (s - c - l + u) * a * o) * 2 - 1;
}
function Ge(e, t, n = 4, r = 1) {
  let i = 0,
    a = 1,
    o = 0.5,
    s = 0;
  for (let c = 0; c < n; c++)
    ((i += o * We(e * a, t * a, r + c * 17)),
      (s += o),
      (a *= 2.03),
      (o *= 0.5));
  return i / s;
}
var U = (e, t, n) => {
    let r = Math.max(0, Math.min(1, (n - e) / (t - e)));
    return r * r * (3 - 2 * r);
  },
  Ke = 8e3,
  qe = (e) => 40 * Math.sin(e / 500);
function Je(e) {
  return e < 550
    ? 70 + 300 * (1 - U(100, 500, e))
    : e < 800
      ? 62
      : 62 + 650 * U(800, 1350, e) * (1 - U(1750, 2150, e));
}
var Ye = (e) => qe(e) + 330 * U(330, 30, e) ** 1.4,
  Xe = (e, t) => t * Math.log1p(Math.exp(e / t));
function Ze(e) {
  return e < 650
    ? Math.max(0, e) * 0.004
    : 6 + (e - 650) * 0.004 + 200 * U(1800, 2300, e);
}
var Qe = (e, t) => U(0.15, 0.65, -e / Math.max(Math.abs(e), Math.abs(t), 1));
function $e(e, t, n, r) {
  let i = Qe(e, t),
    a = -t,
    o = e,
    s = -o - r,
    c = 0,
    l = 0;
  if (i > 0) {
    let e =
      (380 +
        300 * Ge(a / 1400, o / 1400, 4, 3) +
        140 * Ge(a / 400, o / 400, 3, 7)) *
      U(150, 600, n);
    e = Math.max(e, 360 * U(450, 650, n), 12);
    let t = qe(s),
      r = Je(s),
      i = Math.abs(a - t),
      u =
        Ze(s) +
        Xe(i - r, 18) *
          (s < 800 ? 2.3 : 1.2) *
          (0.85 + 0.3 * Ge(a / 180, o / 180, 3, 9));
    (s < 650
      ? ((u +=
          0.05 * Math.min(i, r) +
          2.5 * Ge(a / 120, o / 120, 2, 4) * U(20, 60, Math.abs(a - Ye(s)))),
        (l = 4.5 * U(42, 12, Math.abs(a - Ye(s)))))
      : (u -= 30 * U(r, r * 0.4, i) * (1 - U(1750, 2150, s))),
      (c = Math.min(e, u) - l),
      (c = Math.max(
        c,
        270 * U(r + 30, r + 120, i) * U(220, 80, Math.abs(s - 650 + 70)),
      )));
  }
  let u =
    1.5 +
    3 * Ge(e / 300, t / 300, 3, 3) +
    40 * Ge(e / 2600, t / 2600, 3, 5) * U(400, 2500, n) +
    170 * U(4200, 7200, n) * (0.5 + 0.5 * Ge(e / 4e3, t / 4e3, 2, 9));
  return i * c + (1 - i) * u;
}
var et = new _(8222058),
  tt = new _(6117199),
  nt = new _(6257210),
  rt = new _(5660730),
  it = new _(15265266),
  at = [6261302, 7904324, 4878384, 8679503, 10259046, 7305792].map(
    (e) => new _(e),
  ),
  ot = new _(4018728),
  st = new _(7109208),
  ct = new _(),
  lt = new _(),
  ut = new _(5796922),
  dt = new _(7110468),
  ft = new _(7035461);
function pt(e, t, n, r, i, a) {
  let o = t / 140 + 0.3 * We(n / 400, 1, 7),
    s = n / 110,
    c = Math.abs((Math.floor(o) * 7 + Math.floor(s) * 13) % at.length);
  e.copy(at[c]).multiplyScalar(0.9 + 0.15 * We(t / 60, n / 60, 2));
  let l = o - Math.floor(o),
    u = s - Math.floor(s),
    d = Math.min(l, 1 - l, u, 1 - u);
  e.lerp(ot, 1 - U(0, 0.04, d)).lerp(st, U(1500, 4e3, a));
  let f = Qe(t, n);
  if (f > 0) {
    let r = Math.max(Math.abs(t), Math.abs(n)) - a,
      i = -n,
      o = -t - r,
      s = Math.abs(i - Ye(o));
    (ct
      .copy(ut)
      .lerp(dt, 0.5 + 0.5 * Ge(t / 70, n / 70, 2, 12))
      .lerp(ft, o < 650 ? U(26, 12, s) * 0.8 : 0),
      e.lerp(ct, f));
  }
  return (
    lt.copy(et).lerp(tt, U(-0.15, 0.35, Ge(t / 260, n / 260, 2, 5))),
    ct
      .copy(nt)
      .lerp(rt, U(20, 120, r))
      .lerp(lt, U(0.6, 1.4, i)),
    ct.lerp(
      it,
      U(560, 680, r + 60 * Ge(t / 200, n / 200, 2, 6)) * (1 - U(1.2, 1.8, i)),
    ),
    e.lerp(ct, U(15, 60, r) * Qe(t, n) + (1 - Qe(t, n)) * U(0.35, 0.9, i))
  );
}
var mt = 512,
  ht = [65, 65, 129],
  gt = [600, 210],
  _t = 8,
  vt = 26,
  yt = 0.118;
