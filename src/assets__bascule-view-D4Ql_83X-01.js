// assets__bascule-view-D4Ql_83X 01 — attributes
// Lines 1-129 of readable/assets__bascule-view-D4Ql_83X.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  B as e,
  Dn as t,
  Dt as n,
  En as r,
  F as i,
  Ft as a,
  G as o,
  I as s,
  K as c,
  L as l,
  Lt as u,
  Mn as d,
  Nn as f,
  P as p,
  R as m,
  Rt as h,
  Tt as g,
  U as _,
  Ut as v,
  V as y,
  an as b,
  en as x,
  et as S,
  fn as ee,
  ft as te,
  gt as C,
  lt as ne,
  mn as re,
  nn as ie,
  rn as ae,
  rt as w,
  v as oe,
  wn as se,
  zn as T,
  zt as E,
} from "./graphics-quality-BsjABS0s.js";
import { J as D, Z as O } from "./sim-D8F3HPJq.js";
var ce = Object.freeze({
    tugBow: 103,
    bow: 51.6,
    stern: -30.6,
    beam: 10.4,
    truck: 27.6,
    halfSpan: 8.8,
  }),
  k = {
    bottom: 8008230,
    boot: 1118741,
    hull: 1447707,
    band: 15525590,
    port: 2105895,
    deck: 10847840,
    bulwark: 14933451,
    rail: 7228461,
    mast: 14208173,
    yard: 2039585,
    house: 15262418,
    teak: 9202758,
    hatch: 6047796,
    iron: 2763823,
    boat: 15921386,
    gold: 13214282,
    canvas: 15787724,
    canvas2: 15260864,
    furl: 15129792,
  },
  A = 16765066,
  j = [
    [14165547, 16052712],
    [1986480, 16052712],
    [15909403, 1986480],
    [14165547, 15909403],
    [1118481, 15909403],
    [16052712, 14165547],
    [1986480, 14165547],
    [15909403, 1118481],
  ],
  M = new _();
function N(e, t) {
  let n = e.attributes.position.count,
    r = new Float32Array(n * 3);
  M.set(t);
  for (let e = 0; e < n; e++)
    ((r[e * 3] = M.r), (r[e * 3 + 1] = M.g), (r[e * 3 + 2] = M.b));
  return (e.setAttribute(`color`, new s(r, 3)), e);
}
var le = (e) => {
    ((e = e.index ? e.toNonIndexed() : e),
      e.attributes.normal || e.computeVertexNormals());
    for (let t of Object.keys(e.attributes))
      [`position`, `normal`, `color`].includes(t) || e.deleteAttribute(t);
    return e;
  },
  P = (e) => {
    let t = oe(e.map(le));
    return (e.forEach((e) => e.dispose()), t);
  };
function F(e, t, n, r, i, a = 0.93) {
  let o = [],
    s = [],
    c = [];
  for (let c = 0; c <= n; c++)
    for (let l = 0; l <= t; l++)
      (o.push(...e[c * (t + 1) + l]),
        M.set(l % 2 ? r : i),
        (c === n || l === 0 || l === t) && M.multiplyScalar(a),
        s.push(M.r, M.g, M.b));
  for (let e = 0; e < n; e++)
    for (let n = 0; n < t; n++) {
      let r = e * (t + 1) + n,
        i = r + 1,
        a = r + t + 2,
        o = r + t + 1;
      c.push(r, i, a, r, a, o);
    }
  let u = new l();
  return (
    u.setAttribute(`position`, new w(o, 3)),
    u.setAttribute(`color`, new w(s, 3)),
    u.setIndex(c),
    u.computeVertexNormals(),
    u
  );
}
var I = new T(0, 1, 0),
  ue = new T(),
  L = new b();
