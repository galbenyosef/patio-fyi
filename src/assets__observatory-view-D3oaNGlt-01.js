// assets__observatory-view-D3oaNGlt 01 — all
// Lines 1-54 of readable/assets__observatory-view-D3oaNGlt.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  B as e,
  Dn as t,
  En as n,
  F as r,
  G as i,
  H as a,
  K as o,
  L as s,
  Lt as c,
  Mn as l,
  R as u,
  Rt as d,
  Tt as f,
  Ut as p,
  V as ee,
  Yt as m,
  _n as te,
  an as h,
  en as g,
  fn as _,
  ft as ne,
  gt as v,
  lt as y,
  mn as b,
  nn as x,
  pn as S,
  rn as re,
  rt as C,
  tn as w,
  v as ie,
  wn as T,
  wt as ae,
  zn as E,
  zt as oe,
} from "./graphics-quality-BsjABS0s.js";
import {
  domeState as se,
  laserOn as ce,
  paneBroken as le,
} from "./observatory-sim-BYYrPAWg.js";
var D = (e, t, n, r = [1, 1]) => {
  let i = document.createElement(`canvas`);
  ((i.width = e), (i.height = t), n(i.getContext(`2d`), e, t));
  let a = new u(i);
  return (
    (a.wrapS = a.wrapT = _),
    a.repeat.set(...r),
    (a.colorSpace = b),
    (a.anisotropy = 8),
    a
  );
};
