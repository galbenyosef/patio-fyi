// assets__suburb-view-rGO8_xlp 01 — base
// Lines 1-133 of readable/assets__suburb-view-rGO8_xlp.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  F as e,
  I as t,
  L as n,
  Lt as r,
  R as i,
  Rt as a,
  U as o,
  Ut as s,
  Yt as c,
  an as l,
  en as u,
  et as d,
  fn as f,
  gt as p,
  kt as m,
  lt as h,
  mn as g,
  rt as _,
  tt as v,
  v as y,
  vn as b,
  zn as x,
  zt as S,
} from "./graphics-quality-BsjABS0s.js";
import { p as C, t as w } from "./facade-kit-DGwo5rab.js";
import { t as T } from "./homes-styles-n68aJ6aV.js";
import { a as E, i as D, n as O, o as k } from "./suburb-plan-Bou2JYbm.js";
import { i as A, l as j, o as M, u as N } from "./autumn-trees-B3HPNfpi.js";
import { t as ee } from "./models-CPhSKjCU.js";
Object.assign(w, {
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
var P = { uTime: { value: 0 }, uSunDirW: { value: new x(0, 1, 0) } };
function F(e, t, n = {}) {
  let r = e.onBeforeCompile;
  return (
    (e.onBeforeCompile = (e, t) => {
      (r && r(e, t),
        (e.uniforms.uTime = P.uTime),
        (e.uniforms.uSunDirW = P.uSunDirW),
        (e.vertexShader = e.vertexShader
          .replace(
            `#include <common>`,
            `#include <common>
varying vec3 vTerWPos;
uniform float uTime;`,
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
var I = M(P, (e) => F(e, P, { key: `wood` })),
  L = A(P, F, { key: `leaf` }),
  R = A(P, F, { wind: !1, glow: 0.15, key: `litter`, vertexColors: !1 });
