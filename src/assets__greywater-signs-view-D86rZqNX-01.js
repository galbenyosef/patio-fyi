// assets__greywater-signs-view-D86rZqNX 01 — accent
// Lines 1-71 of readable/assets__greywater-signs-view-D86rZqNX.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  At as e,
  Bt as t,
  Cn as n,
  D as r,
  Dn as i,
  F as a,
  Gt as o,
  Hn as s,
  I as c,
  Lt as l,
  P as u,
  Vn as d,
  W as f,
  _n as p,
  cn as m,
  dt as h,
  jt as g,
  nn as _,
  nt as v,
  q as y,
  rt as b,
  v as x,
  xn as S,
  z as C,
  zt as w,
} from "./graphics-quality-CrL3qbU3.js";
import { i as ee, l as T } from "./map-collider-0Gc3D4Vs.js";
import { n as E } from "./static-bake-DFe1Gx40.js";
import { n as D, t as O } from "./placement-build-C0quzNjY.js";
var k = (e, t, n, r, i) => ({
    bg: e,
    ink: t,
    accent: n,
    secondary: r,
    metal: i,
  }),
  A = {
    motel: k(`#14372f`, `#fff1bd`, `#fa5268`, `#55e8bd`, `#426b60`),
    space: k(`#162b45`, `#f3edda`, `#f0753d`, `#6bdded`, `#60768a`),
    rose: k(`#3e173d`, `#fff1cd`, `#fc6bbe`, `#6de8d3`, `#805976`),
    red: k(`#6d242a`, `#fff0d2`, `#ff6851`, `#eab354`, `#583b3c`),
    teal: k(`#0e464e`, `#fff4d8`, `#56d9d0`, `#f4a952`, `#547c80`),
    gold: k(`#2c2922`, `#ffebc2`, `#ffd064`, `#ed7650`, `#706556`),
    blue: k(`#203c70`, `#edf8ea`, `#58c4ff`, `#f1b455`, `#607993`),
    cream: k(`#f0e5c4`, `#233d47`, `#e06845`, `#48a69a`, `#526970`),
    green: k(`#244c32`, `#fff2c9`, `#bacd5c`, `#dc8951`, `#5c6653`),
    black: k(`#1d292d`, `#f1e5c8`, `#d85b41`, `#a9bdbe`, `#586366`),
  };
function j(e, t, n, r, i, a, o, s, c = {}) {
  return {
    key: e,
    name: t,
    description: ``,
    lighting: o,
    family: `street`,
    mount: `ground`,
    shape: `rectangle`,
    width: r,
    height: i,
    elevation: a,
    palette: { ...s },
    brand: t.toUpperCase(),
    icon: `star`,
    defaultMessageId: 1,
    faceStyle: `poster`,
    construction: n,
    ...c,
  };
}
