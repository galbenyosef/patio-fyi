// assets__greywater-centre-view-Z6VrK8o- 01 — rough
// Lines 1-304 of readable/assets__greywater-centre-view-Z6VrK8o-.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  Bt as e,
  Cn as t,
  D as n,
  Dn as r,
  F as i,
  Fn as a,
  Gt as o,
  Hn as s,
  I as c,
  L as l,
  Sn as u,
  Vn as d,
  Vt as f,
  W as p,
  _n as m,
  at as h,
  cn as g,
  dt as _,
  en as v,
  hn as y,
  m as b,
  mt as x,
  nn as S,
  p as C,
  q as w,
  rt as T,
  v as E,
  vt as D,
  xn as O,
  z as k,
  zt as A,
} from "./graphics-quality-CrL3qbU3.js";
import { i as ee, l as te, n as ne } from "./map-collider-0Gc3D4Vs.js";
import {
  n as j,
  p as M,
  s as N,
  t as P,
  u as re,
} from "./facade-kit-DPPNwSDt.js";
import { i as ie, t as ae } from "./facade-id-storage-BdFBZdZb.js";
import { i as oe } from "./static-bake-DFe1Gx40.js";
import { a as se, r as ce, t as le } from "./greywater-centre-hZuxA5K7.js";
import {
  RAIL_Y as F,
  TRAIN_SIM as ue,
  lineAt as I,
  trainsAt as de,
} from "./trains-sim-BhrrY_Za.js";
(Object.assign(P, {
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
  (P.tactile = {
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
      let r = new k(t);
      return (
        (r.wrapS = r.wrapT = y),
        (r.anisotropy = 8),
        (r.colorSpace = e ? `` : m),
        r
      );
    })(!1),
    rough: 0.7,
    scale: 0.25,
  }));
var fe = N(`railSignPlaza`, `CENTRAL PLAZA`, {
    bg: 1979728,
    fg: 16052712,
    aspect: 0.17,
    font: `"Barlow Condensed", "Arial Narrow", Arial, sans-serif`,
    weight: 600,
    spacing: 0.1,
    size: 0.58,
  }),
  pe = N(
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
  me = N(
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
  L = {
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
  he = [
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
  ge = [
    [5.18, 0],
    [5.5, 0],
    [5.5, 1.1],
    [5.56, 1.1],
    [5.56, 1.24],
    [5.12, 1.24],
    [5.12, 1.13],
    [5.18, 1.1],
  ],
  _e = [
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
  ve = (e) => e.map(([e, t]) => [-e, t]).reverse(),
  R = (e, t, n = 0) => e.map(([e, r]) => [e + t, r + n]),
  z = (e, t, n, r) => [
    [e, n],
    [t, n],
    [t, r],
    [e, r],
  ],
  ye = new s(0, 1, 0);
function B(e, t, n = L.deckY) {
  let r = e.getLength(),
    i = Math.min(1, Math.max(0, t / r)),
    a = e.getPointAt(i),
    o = e.getTangentAt(i),
    c = new s(o.x, 0, o.z).normalize(),
    l = new s(c.z, 0, -c.x),
    u = new s(a.x, n, a.z);
  return {
    s: t,
    pos: u,
    tan: c,
    side: l,
    M: new A().makeBasis(l, ye, c).setPosition(u),
  };
}
function be(e, t, n, r = 2, i) {
  let a = Math.max(1, Math.ceil((n - t) / r)),
    o = [];
  for (let r = 0; r <= a; r++) o.push(B(e, t + ((n - t) * r) / a, i));
  return o;
}
var xe = new s(),
  Se = new s();
