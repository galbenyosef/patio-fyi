// assets__models-CPhSKjCU 01 — count
// Lines 1-101 of readable/assets__models-CPhSKjCU.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  F as e,
  Ft as t,
  G as n,
  I as r,
  K as i,
  L as a,
  U as o,
  ft as s,
  rt as c,
  v as l,
} from "./graphics-quality-BsjABS0s.js";
import { o as u } from "./sim-Baa4KD2R.js";
var d = (e) => new o(e);
function f(e, t) {
  let n = e.attributes.position,
    i = new Float32Array(n.count * 3),
    a = new o();
  for (let e = 0; e < n.count; e++)
    (t(a, n.getX(e), n.getY(e), n.getZ(e), e),
      (i[e * 3] = a.r),
      (i[e * 3 + 1] = a.g),
      (i[e * 3 + 2] = a.b));
  return (e.setAttribute(`color`, new r(i, 3)), e);
}
function p(e, t, n) {
  let r = e.attributes.position;
  for (let e = 0; e < r.count; e++) {
    let i = r.getX(e),
      a = r.getY(e),
      o = r.getZ(e),
      s = Math.round(i * 100),
      c = Math.round(o * 100 + a * 37);
    r.setXYZ(
      e,
      i + (u(s, c, n) - 0.5) * t,
      a + (u(s + 7, c, n) - 0.5) * t,
      o + (u(s, c + 7, n) - 0.5) * t,
    );
  }
  return e;
}
function m(e) {
  let t = l(
    e.map((e) => (e.index ? e.toNonIndexed() : e)),
    !1,
  );
  for (let t of e) t.dispose();
  return (t.computeBoundingSphere(), t);
}
function h(e, t, n, r, a, o) {
  let s = new i(e, t, n, r, 1, !1);
  return (s.translate(0, a, 0), f(s, o));
}
function g(e, t, r, i, a) {
  let o = new n(e, t, r, 1, !1);
  return (o.translate(0, i, 0), f(o, a));
}
function _(e, t, n, r, i, a, o, c, l) {
  let u = new s(1, 0);
  return (c && p(u, c, l), u.scale(e, t, n), u.translate(r, i, a), f(u, o));
}
var v = d(4996915),
  y = d(6772298),
  b = d(12104354),
  x = d(7301726),
  S = d(3748652),
  C = d(2573103),
  w = d(3891520),
  T = d(4021296),
  E = d(6589244),
  D = d(8229190),
  O = d(10395730),
  k = d(15002610),
  A = {
    BARK: d(4536876),
    BARK_LIGHT: d(6180928),
    PINE_DARK: d(1915425),
    PINE_LIGHT: d(3104300),
    OAK_DARK: d(2576671),
    OAK_LIGHT: d(5214503),
    BIRCH_BARK: d(9077863),
    BIRCH_BASE: d(5130806),
    BIRCH_DARK: d(3814950),
    BIRCH_LEAF: d(3963434),
    BIRCH_LEAF_HI: d(6793274),
  },
  j = {
    BARK: d(5917242),
    BARK_LIGHT: d(7693135),
    PINE_DARK: d(3889725),
    PINE_LIGHT: d(7113566),
    OAK_DARK: d(2906658),
    OAK_LIGHT: d(6265388),
    BIRCH_BARK: d(10720634),
    BIRCH_BASE: d(7628879),
    BIRCH_DARK: d(5195318),
    BIRCH_LEAF: d(5213226),
    BIRCH_LEAF_HI: d(10207304),
  };
