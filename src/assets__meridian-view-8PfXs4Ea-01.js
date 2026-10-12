// assets__meridian-view-8PfXs4Ea 01 — attributes
// Lines 1-89 of readable/assets__meridian-view-8PfXs4Ea.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  $ as e,
  B as t,
  F as n,
  I as r,
  K as i,
  L as a,
  Lt as o,
  R as s,
  Rt as c,
  U as l,
  Ut as u,
  V as d,
  Z as f,
  _n as p,
  an as m,
  en as h,
  et as g,
  gt as _,
  kt as v,
  lt as y,
  mn as b,
  mt as ee,
  rt as te,
  tn as ne,
  v as x,
  wn as S,
  zn as C,
  zt as w,
} from "./graphics-quality-BsjABS0s.js";
import { t as T } from "./static-bake-DEfkgcUk.js";
import { t as E } from "./decor-kit-DeQwKaKF.js";
import {
  PANE_HP as D,
  craneAt as re,
  craneBrokeAt as ie,
  fabricDown as O,
  jamAt as k,
  jibSegment as A,
  paneBox as j,
  paneFracture as M,
  paneShards as ae,
  paneTorn as N,
  powerAt as P,
} from "./meridian-sim-Cefyo3f2.js";
var F = 2048,
  I = 4,
  L = 220,
  R = 24,
  oe = 512,
  z = (e, t) =>
    Math.max(0, Math.min(3, Math.floor((e + 40) / 20))) + 4 * (t < 0 ? 0 : 1);
function se(e) {
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
function ce(e, t, n) {
  let i = e.attributes.position.count,
    a = new Float32Array(i * 4);
  for (let e = 0; e < i; e++)
    ((a[e * 4] = t.r),
      (a[e * 4 + 1] = t.g),
      (a[e * 4 + 2] = t.b),
      (a[e * 4 + 3] = n));
  e.setAttribute(`color`, new r(a, 4));
}
function B(e) {
  let t = e.index ? e.toNonIndexed() : e.clone();
  for (let e of Object.keys(t.attributes))
    [`position`, `normal`, `uv`, `color`].includes(e) || t.deleteAttribute(e);
  return (
    t.attributes.normal || t.computeVertexNormals(),
    t.attributes.uv ||
      t.setAttribute(
        `uv`,
        new r(new Float32Array(t.attributes.position.count * 2), 2),
      ),
    t.clearGroups(),
    t
  );
}
