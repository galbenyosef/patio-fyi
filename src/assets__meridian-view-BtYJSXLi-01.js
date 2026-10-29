// assets__meridian-view-BtYJSXLi 01 — attributes
// Lines 1-89 of readable/assets__meridian-view-BtYJSXLi.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  $ as e,
  Bt as t,
  Dn as n,
  F as r,
  Gt as i,
  H as a,
  Hn as o,
  I as s,
  L as c,
  V as l,
  Vt as u,
  W as d,
  _n as f,
  at as p,
  bn as m,
  cn as h,
  dt as g,
  gt as _,
  jt as v,
  nn as y,
  nt as ee,
  q as b,
  rn as x,
  tt as S,
  v as C,
  vt as w,
  z as T,
  zt as te,
} from "./graphics-quality-CrL3qbU3.js";
import { t as E } from "./static-bake-DFe1Gx40.js";
import { t as D } from "./decor-kit-DYJAmRWC.js";
import {
  PANE_HP as O,
  craneAt as ne,
  craneBrokeAt as re,
  fabricDown as k,
  jamAt as A,
  jibSegment as j,
  paneBox as M,
  paneFracture as N,
  paneShards as ie,
  paneTorn as P,
  powerAt as F,
} from "./meridian-sim-Cefyo3f2.js";
var I = 2048,
  L = 4,
  R = 220,
  z = 24,
  ae = 512,
  B = (e, t) =>
    Math.max(0, Math.min(3, Math.floor((e + 40) / 20))) + 4 * (t < 0 ? 0 : 1);
function oe(e) {
  return e.map
    ? `tex`
    : e.transparent && e.opacity < 0.95
      ? `glass`
      : e.side === 2
        ? `double`
        : e.metalness > 0.5 && e.roughness < 0.5
          ? `shiny`
          : `matte`;
}
function se(e, t, n) {
  let r = e.attributes.position.count,
    i = new Float32Array(r * 4);
  for (let e = 0; e < r; e++)
    ((i[e * 4] = t.r),
      (i[e * 4 + 1] = t.g),
      (i[e * 4 + 2] = t.b),
      (i[e * 4 + 3] = n));
  e.setAttribute(`color`, new s(i, 4));
}
function V(e) {
  let t = e.index ? e.toNonIndexed() : e.clone();
  for (let e of Object.keys(t.attributes))
    [`position`, `normal`, `uv`, `color`].includes(e) || t.deleteAttribute(e);
  return (
    t.attributes.normal || t.computeVertexNormals(),
    t.attributes.uv ||
      t.setAttribute(
        `uv`,
        new s(new Float32Array(t.attributes.position.count * 2), 2),
      ),
    t.clearGroups(),
    t
  );
}
