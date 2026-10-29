// assets__mesa-view-C_BUKLKD 01 — math
// Lines 1-199 of readable/assets__mesa-view-C_BUKLKD.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  Bt as e,
  Dn as t,
  Dt as n,
  Et as r,
  F as i,
  Gt as a,
  Hn as o,
  In as s,
  K as c,
  L as l,
  Sn as u,
  V as d,
  Vt as f,
  W as p,
  _n as m,
  at as h,
  cn as g,
  dt as _,
  hn as v,
  mt as y,
  nn as b,
  nt as x,
  q as S,
  rt as C,
  v as w,
  vt as T,
  xn as E,
  z as D,
  zt as O,
} from "./graphics-quality-CrL3qbU3.js";
import { I as k, L as A, R as j, V as M } from "./sim-CCeMdhLh.js";
import { n as ee, r as te } from "./static-bake-DFe1Gx40.js";
import {
  A as ne,
  C as N,
  E as re,
  O as ie,
  S as P,
  T as F,
  _ as I,
  a as ae,
  b as oe,
  c as L,
  d as R,
  f as se,
  g as z,
  h as ce,
  i as le,
  j as ue,
  k as B,
  m as de,
  n as fe,
  o as pe,
  p as me,
  r as V,
  s as H,
  t as he,
  v as U,
  x as W,
  y as ge,
} from "./mesa-BFOvFgtV.js";
var G = (e) => () => {
    ((e |= 0), (e = (e + 1831565813) | 0));
    let t = Math.imul(e ^ (e >>> 15), 1 | e);
    return (
      (t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t),
      ((t ^ (t >>> 14)) >>> 0) / 4294967296
    );
  },
  K = Object.freeze({ x0: H.x0 - 4.6, z: H.z + 6.6, x1: V.skin + 0.5 }),
  _e = (e, t) => e > K.x0 - 1 && e < K.x1 && Math.abs(t) < K.z + 1;
function ve() {
  let e = new S(0.2, 0.34, 9, 8, 9, !1);
  {
    let t = e.attributes.position;
    for (let e = 0; e < t.count; e++) {
      let n = t.getY(e) + 4.5,
        r = n / 9,
        i = 1 + 0.07 * Math.max(0, Math.sin(n * 5.2));
      (t.setX(e, t.getX(e) * i + 0.35 * r * r),
        t.setZ(e, t.getZ(e) * i),
        t.setY(e, n));
    }
    e.computeVertexNormals();
  }
  let t = [];
  for (let e = 0; e < 14; e++) {
    let n = 3.6 + (e % 3) * 0.5,
      r = [],
      i = [];
    for (let e = 0; e <= 6; e++) {
      let t = e / 6,
        a = 0.75 * Math.sin(Math.PI * Math.min(1, t * 1.15 + 0.05)) * 0.5,
        o = t * n,
        s = 1.1 * Math.sin(t * Math.PI * 0.55) - 1.9 * t * t,
        c = 0.18 * a;
      if ((r.push(o, s, -a, o, s + c, 0, o, s, a), e < 6)) {
        let t = e * 3;
        i.push(
          t,
          t + 3,
          t + 1,
          t + 1,
          t + 3,
          t + 4,
          t + 1,
          t + 4,
          t + 2,
          t + 2,
          t + 4,
          t + 5,
        );
      }
    }
    let a = new l();
    (a.setAttribute(`position`, new h(r, 3)),
      a.setIndex(i),
      a.computeVertexNormals());
    let o = (e / 14) * Math.PI * 2 + (e % 2) * 0.2,
      s = e % 2 ? 0.15 : -0.25;
    (a.rotateZ(s), a.rotateY(o), a.translate(0.35, 9, 0), t.push(a));
  }
  let n = new c(0.75, 1.4, 8, 1, !0).translate(0.35, 8.3, 0);
  n.deleteAttribute(`uv`);
  let r = w(t);
  return (t.forEach((e) => e.dispose()), { trunk: e, crown: r, skirt: n });
}
function q() {
  let e = [
      new S(0.13, 0.2, 2, 6).translate(0, 1, 0),
      new S(0.08, 0.11, 1.6, 5).rotateZ(0.5).translate(-0.35, 2.4, 0),
      new S(0.08, 0.11, 1.6, 5)
        .rotateZ(-0.45)
        .rotateY(1.9)
        .translate(0.2, 2.4, 0.3),
    ],
    t = [
      [0, 3.3, 0, 1.5],
      [-0.9, 3, 0.3, 1.1],
      [0.8, 3.1, 0.5, 1.15],
      [0.1, 3, -0.9, 1.05],
      [-0.2, 3.9, 0.2, 0.95],
    ].map(([e, t, n, r]) => new y(r, 1).scale(1, 0.72, 1).translate(e, t, n)),
    n = w(e),
    r = w(t);
  [...e, ...t].forEach((e) => e.dispose());
  {
    let e = r.attributes.position,
      t = G(91);
    for (let n = 0; n < e.count; n++) {
      let r = 1 + (t() - 0.5) * 0.16;
      e.setXYZ(
        n,
        e.getX(n) * r,
        e.getY(n) * (1 + (t() - 0.5) * 0.1),
        e.getZ(n) * r,
      );
    }
    r.computeVertexNormals();
  }
  return { wood: n, crown: r };
}
function ye() {
  let e = [];
  for (let t = 0; t < 16; t++) {
    let n = (t / 16) * Math.PI * 2 + (t % 2) * 0.2,
      r = t < 8 ? 0.55 : 1.05,
      i = t < 8 ? 1 : 0.8;
    e.push(
      new c(0.11, i, 4)
        .scale(1, 1, 0.45)
        .translate(0, i / 2, 0)
        .rotateX(r)
        .rotateY(n),
    );
  }
  let t = w(e);
  return (e.forEach((e) => e.dispose()), t);
}
function J(e, t, n, r = !0) {
  let i = document.createElement(`canvas`);
  ((i.width = e), (i.height = t), n(i.getContext(`2d`), e, t));
  let a = new D(i);
  return (
    r && (a.wrapS = a.wrapT = v),
    (a.colorSpace = m),
    (a.anisotropy = 4),
    a
  );
}
var be = (e, t, n, r, i, a) => {
  for (let o = 0; o < r; o++) {
    let r = (i + (a() - 0.5) * 28) | 0;
    ((e.fillStyle = `rgba(${r},${r},${r - 4},.35)`),
      e.fillRect(a() * t, a() * n, 2, 2));
  }
};
