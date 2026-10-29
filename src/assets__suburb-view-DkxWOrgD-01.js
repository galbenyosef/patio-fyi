// assets__suburb-view-DkxWOrgD 01 — base
// Lines 1-140 of readable/assets__suburb-view-DkxWOrgD.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  Bt as e,
  F as t,
  Gt as n,
  Hn as r,
  I as i,
  L as a,
  Vn as o,
  Vt as s,
  W as c,
  Zt as l,
  _n as u,
  at as d,
  cn as f,
  dt as p,
  hn as m,
  jt as h,
  nn as g,
  nt as _,
  rt as v,
  v as y,
  vt as b,
  xn as x,
  z as S,
  zt as C,
} from "./graphics-quality-CrL3qbU3.js";
import { p as w, t as T } from "./facade-kit-DPPNwSDt.js";
import { t as E } from "./homes-styles-VxExOKpz.js";
import { a as D, i as O, n as k, o as A } from "./suburb-plan-Bou2JYbm.js";
import { i as j, l as M, o as N, u as P } from "./autumn-trees-Dw11AS6l.js";
import { t as ee } from "./models-Df-1HzmN.js";
Object.assign(T, {
  pavers: {
    pat: `brick`,
    p: { base: 9341312, mortar: 6249300, vary: 0.16, burnt: 0.03, seed: 31 },
    scale: 3,
    rough: 0.9,
    bump: 0.8,
  },
  plazaStone: {
    pat: `ashlar`,
    p: { base: 11709600, rows: 3, joint: 5, seed: 32 },
    scale: 3.6,
    rough: 0.85,
    bump: 0.6,
  },
  setts: {
    pat: `ashlar`,
    p: { base: 7828075, rows: 7, joint: 6, jointK: 0.55, seed: 33 },
    scale: 1.6,
    rough: 0.9,
    bump: 1.2,
  },
  kerbStone: {
    pat: `ashlar`,
    p: { base: 10722964, rows: 1, joint: 5, seed: 34 },
    scale: 1.8,
    rough: 0.9,
    bump: 0.6,
  },
  mulch: {
    pat: `stucco`,
    p: { base: 3811871, seed: 35, blotch: 60 },
    scale: 1.2,
    rough: 1,
    bump: 2,
  },
  lawn: {
    pat: `stucco`,
    p: { base: 7043642, seed: 36, blotch: 80 },
    scale: 3.2,
    rough: 1,
    bump: 0.5,
  },
  gravel: {
    pat: `stucco`,
    p: { base: 9208951, seed: 37, blotch: 40 },
    scale: 1.1,
    rough: 1,
    bump: 2,
  },
  grate: {
    pat: `corrugated`,
    p: { base: 2828840, seed: 38 },
    scale: 0.35,
    rough: 0.6,
    metal: 0.6,
    bump: 2,
  },
});
var F = {
  uTime: { value: 0 },
  uSunDirW: { value: new r(0, 1, 0) },
  uGust: { value: new o(0, 0) },
};
function I(e, t, n = {}) {
  let r = e.onBeforeCompile;
  return (
    (e.onBeforeCompile = (e, t) => {
      (r && r(e, t),
        (e.uniforms.uTime = F.uTime),
        (e.uniforms.uSunDirW = F.uSunDirW),
        (e.uniforms.uGust = F.uGust),
        (e.vertexShader = e.vertexShader
          .replace(
            `#include <common>`,
            `#include <common>
varying vec3 vTerWPos;
uniform float uTime;
uniform vec2 uGust;`,
          )
          .replace(
            `#include <begin_vertex>`,
            `#include <begin_vertex>\n${n.extraVertex || ``}`,
          )
          .replace(
            `#include <project_vertex>`,
            `#include <project_vertex>
        #ifdef USE_INSTANCING
          vTerWPos = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz;
        #else
          vTerWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
        #endif`,
          )),
        (e.fragmentShader = e.fragmentShader.replace(
          `#include <common>`,
          `#include <common>
varying vec3 vTerWPos;
uniform vec3 uSunDirW;
float terSunVis() { return 1.0; }`,
        )));
    }),
    (e.customProgramCacheKey = () => `townlab-` + (n.key || `x`)),
    e
  );
}
var L = N(F, (e) => I(e, F, { key: `wood` })),
  R = j(F, I, { key: `leaf` }),
  te = j(F, I, { wind: !1, glow: 0.15, key: `litter`, vertexColors: !1 });
