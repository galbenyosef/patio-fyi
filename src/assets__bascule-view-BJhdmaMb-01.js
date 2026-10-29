// assets__bascule-view-BJhdmaMb 01 — attributes
// Lines 1-150 of readable/assets__bascule-view-BJhdmaMb.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  Bt as e,
  D as t,
  Dn as n,
  Dt as r,
  F as i,
  Fn as a,
  Gt as o,
  Hn as s,
  I as c,
  In as l,
  K as u,
  L as d,
  P as f,
  Tt as p,
  V as m,
  Vn as h,
  Vt as g,
  W as _,
  _n as v,
  an as y,
  at as b,
  cn as x,
  dt as S,
  hn as C,
  in as w,
  kt as T,
  mt as E,
  nn as D,
  nt as O,
  q as k,
  rt as A,
  v as ee,
  vt as te,
  xn as j,
  z as ne,
  zt as M,
} from "./graphics-quality-CrL3qbU3.js";
import { l as re } from "./map-collider-0Gc3D4Vs.js";
import {
  CRASH as N,
  FORE_BREAK as ie,
  SHIP as ae,
  bridgeAt as oe,
  d as P,
  f as F,
  h as I,
  i as L,
  leafRailBoxes as R,
  m as z,
  n as B,
  p as V,
  r as se,
  shipLocal as H,
  shipZAt as ce,
  t as le,
  u as ue,
} from "./bascule-sim-Cbk5CbGU.js";
import { a as U } from "./bascule-length-_yBxttEI.js";
var de = Object.freeze({
    tugBow: 103,
    bow: 51.6,
    stern: -30.6,
    beam: 10.4,
    truck: 27.6,
    halfSpan: 8.8,
  }),
  W = {
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
  fe = 16765066,
  pe = [
    [14165547, 16052712],
    [1986480, 16052712],
    [15909403, 1986480],
    [14165547, 15909403],
    [1118481, 15909403],
    [16052712, 14165547],
    [1986480, 14165547],
    [15909403, 1118481],
  ],
  G = new _();
function me(e, t) {
  let n = e.attributes.position.count,
    r = new Float32Array(n * 3);
  G.set(t);
  for (let e = 0; e < n; e++)
    ((r[e * 3] = G.r), (r[e * 3 + 1] = G.g), (r[e * 3 + 2] = G.b));
  return (e.setAttribute(`color`, new c(r, 3)), e);
}
var he = (e) => {
    ((e = e.index ? e.toNonIndexed() : e),
      e.attributes.normal || e.computeVertexNormals());
    for (let t of Object.keys(e.attributes))
      [`position`, `normal`, `color`].includes(t) || e.deleteAttribute(t);
    return e;
  },
  ge = (e) => {
    let t = ee(e.map(he));
    return (e.forEach((e) => e.dispose()), t);
  };
function _e(e, t, n, r, i, a = 0.93) {
  let o = [],
    s = [],
    c = [];
  for (let c = 0; c <= n; c++)
    for (let l = 0; l <= t; l++)
      (o.push(...e[c * (t + 1) + l]),
        G.set(l % 2 ? r : i),
        (c === n || l === 0 || l === t) && G.multiplyScalar(a),
        s.push(G.r, G.g, G.b));
  for (let e = 0; e < n; e++)
    for (let n = 0; n < t; n++) {
      let r = e * (t + 1) + n,
        i = r + 1,
        a = r + t + 2,
        o = r + t + 1;
      c.push(r, i, a, r, a, o);
    }
  let l = new d();
  return (
    l.setAttribute(`position`, new b(o, 3)),
    l.setAttribute(`color`, new b(s, 3)),
    l.setIndex(c),
    l.computeVertexNormals(),
    l
  );
}
var ve = new s(0, 1, 0),
  ye = new s(),
  be = new x();
