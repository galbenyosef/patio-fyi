// assets__greywater-centre-view-Cf3_SbRw 01 — rough
// Lines 1-304 of readable/assets__greywater-centre-view-Cf3_SbRw.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  D as e,
  F as t,
  I as n,
  K as r,
  L as i,
  Lt as a,
  Mn as o,
  Qt as s,
  R as c,
  Rn as l,
  Rt as u,
  U as d,
  Ut as f,
  an as p,
  bn as m,
  en as h,
  fn as g,
  ft as _,
  gt as v,
  lt as y,
  m as b,
  mn as x,
  p as S,
  rt as C,
  tt as w,
  v as T,
  vn as E,
  wn as D,
  yn as O,
  zn as k,
  zt as ee,
} from "./graphics-quality-BsjABS0s.js";
import { i as te, l as ne, n as re } from "./map-collider-Bdq_bUeN.js";
import {
  n as A,
  p as j,
  s as M,
  t as N,
  u as ie,
} from "./facade-kit-DGwo5rab.js";
import { i as ae, t as oe } from "./facade-id-storage-BLzjEjZ9.js";
import { i as se } from "./static-bake-DEfkgcUk.js";
import { a as ce, r as le, t as ue } from "./greywater-centre-hZuxA5K7.js";
import {
  RAIL_Y as P,
  TRAIN_SIM as de,
  lineAt as F,
  trainsAt as fe,
} from "./trains-sim-BhrrY_Za.js";
(Object.assign(N, {
  precast: {
    pat: `stucco`,
    p: { base: 11841445, seed: 41, blotch: 34 },
    scale: 3.2,
    rough: 0.92,
    bump: 0.6,
    grime: 0.22,
  },
  precastDark: {
    pat: `stucco`,
    p: { base: 9275778, seed: 42, joints: !0, blotch: 20 },
    scale: 1.8,
    rough: 0.95,
    bump: 0.7,
  },
  pierConcrete: {
    pat: `boardform`,
    p: { base: 11117721, n: 8, seed: 43 },
    scale: 2.4,
    rough: 0.95,
    bump: 1,
    grime: 0.4,
    swap: !0,
  },
  railHead: {
    pat: `paint`,
    p: { base: 11843771, seed: 44 },
    size: 64,
    scale: 1,
    rough: 0.22,
    metal: 0.95,
  },
  railRust: {
    pat: `paint`,
    p: { base: 5915444, seed: 45 },
    size: 128,
    scale: 1,
    rough: 0.85,
    metal: 0.35,
  },
  galv: {
    pat: `paint`,
    p: { base: 10002596, seed: 46 },
    size: 128,
    scale: 1,
    rough: 0.45,
    metal: 0.8,
  },
  wire: {
    pat: `paint`,
    p: { base: 6966584, seed: 47 },
    size: 32,
    scale: 1,
    rough: 0.35,
    metal: 0.9,
  },
  lineAmber: {
    pat: `paint`,
    p: { base: 14260764, seed: 48 },
    size: 128,
    scale: 1,
    rough: 0.5,
    metal: 0.2,
  },
  signBlue: {
    pat: `paint`,
    p: { base: 1979728, seed: 49 },
    size: 128,
    scale: 1,
    rough: 0.5,
    metal: 0.2,
  },
  lampGlow: {
    pat: `paint`,
    p: { base: 16774108 },
    size: 32,
    scale: 1,
    rough: 0.5,
    emissive: 16771522,
  },
  platformPave: {
    pat: `stucco`,
    p: { base: 10328463, seed: 50, joints: !0, blotch: 24 },
    scale: 1.2,
    rough: 0.9,
    bump: 0.8,
  },
  rubberPad: {
    pat: `paint`,
    p: { base: 2368548, seed: 51 },
    size: 32,
    scale: 1,
    rough: 0.95,
  },
}),
  (N.tactile = {
    tex: ((e) => {
      let t = document.createElement(`canvas`);
      t.width = t.height = 128;
      let n = t.getContext(`2d`);
      ((n.fillStyle = e ? `#303030` : `#d6ad2a`), n.fillRect(0, 0, 128, 128));
      for (let t = 0; t < 4; t++)
        for (let r = 0; r < 4; r++) {
          let i = ((t + 0.5) * 128) / 4,
            a = ((r + 0.5) * 128) / 4,
            o = n.createRadialGradient(i, a, 0, i, a, 128 / 10);
          (o.addColorStop(0, e ? `#ffffff` : `#e8c24a`),
            o.addColorStop(1, e ? `#303030` : `#c99d20`),
            (n.fillStyle = o),
            n.beginPath(),
            n.arc(i, a, 128 / 10, 0, Math.PI * 2),
            n.fill());
        }
      let r = new c(t);
      return (
        (r.wrapS = r.wrapT = g),
        (r.anisotropy = 8),
        (r.colorSpace = e ? `` : x),
        r
      );
    })(!1),
    rough: 0.7,
    scale: 0.25,
  }));
var pe = M(`railSignPlaza`, `CENTRAL PLAZA`, {
    bg: 1979728,
    fg: 16052712,
    aspect: 0.17,
    font: `"Barlow Condensed", "Arial Narrow", Arial, sans-serif`,
    weight: 600,
    spacing: 0.1,
    size: 0.58,
  }),
  me = M(
    `railTotemPlaza`,
    `CENTRAL
PLAZA`,
    {
      bg: 1979728,
      fg: 16052712,
      aspect: 0.62,
      width: 1024,
      font: `"Barlow Condensed", "Arial Narrow", Arial, sans-serif`,
      weight: 600,
      spacing: 0.08,
      size: 0.62,
    },
  ),
  he = M(
    `railTimesPlaza`,
    `NORTHWEST  2 min
SOUTHEAST  5 min`,
    {
      bg: 855825,
      fg: 16757306,
      aspect: 0.3,
      width: 1024,
      font: `"JetBrains Mono", Consolas, monospace`,
      weight: 500,
      spacing: 0.04,
      size: 0.5,
      glow: 0.9,
    },
  ),
  I = {
    deckY: 9,
    halfW: 5.5,
    girderD: 1.8,
    span: 24,
    track: 2.25,
    gauge: 1.435,
    slabTop: 0.24,
    railTop: 0.424,
    walkIn: 4.35,
    parapetIn: 5.18,
    parapetH: 1.24,
    wireY: 5.724,
    messY: 6.924,
    platTop: 1.45,
    platEdge: 3.85,
    platOut: 8.8,
    stairW: 2.5,
  },
  ge = [
    [-5.5, 0],
    [-5.5, -0.3],
    [-5.38, -0.34],
    [-3.7, -0.55],
    [-2.5, -1.8],
    [2.5, -1.8],
    [3.7, -0.55],
    [5.38, -0.34],
    [5.5, -0.3],
    [5.5, 0],
  ],
  _e = [
    [5.18, 0],
    [5.5, 0],
    [5.5, 1.1],
    [5.56, 1.1],
    [5.56, 1.24],
    [5.12, 1.24],
    [5.12, 1.13],
    [5.18, 1.1],
  ],
  ve = [
    [-0.075, 0],
    [0.075, 0],
    [0.075, 0.012],
    [0.012, 0.03],
    [0.009, 0.12],
    [0.035, 0.13],
    [0.035, 0.172],
    [-0.035, 0.172],
    [-0.035, 0.13],
    [-0.009, 0.12],
    [-0.012, 0.03],
    [-0.075, 0.012],
  ],
  ye = (e) => e.map(([e, t]) => [-e, t]).reverse(),
  L = (e, t, n = 0) => e.map(([e, r]) => [e + t, r + n]),
  R = (e, t, n, r) => [
    [e, n],
    [t, n],
    [t, r],
    [e, r],
  ],
  z = new k(0, 1, 0);
function B(e, t, n = I.deckY) {
  let r = e.getLength(),
    i = Math.min(1, Math.max(0, t / r)),
    o = e.getPointAt(i),
    s = e.getTangentAt(i),
    c = new k(s.x, 0, s.z).normalize(),
    l = new k(c.z, 0, -c.x),
    u = new k(o.x, n, o.z);
  return {
    s: t,
    pos: u,
    tan: c,
    side: l,
    M: new a().makeBasis(l, z, c).setPosition(u),
  };
}
function be(e, t, n, r = 2, i) {
  let a = Math.max(1, Math.ceil((n - t) / r)),
    o = [];
  for (let r = 0; r <= a; r++) o.push(B(e, t + ((n - t) * r) / a, i));
  return o;
}
var xe = new k(),
  Se = new k();
