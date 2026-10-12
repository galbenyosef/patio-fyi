// assets__front-desk-DGPHybWS 01 — math
// Lines 1-121 of readable/assets__front-desk-DGPHybWS.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  $t as e,
  E as t,
  F as n,
  K as r,
  Mn as i,
  R as a,
  Rn as o,
  Rt as s,
  S as c,
  Tn as l,
  U as u,
  Ut as d,
  V as f,
  Yt as p,
  at as m,
  dt as h,
  en as g,
  gn as _,
  lt as v,
  m as y,
  mn as ee,
  s as te,
  tn as ne,
  un as b,
  v as re,
  wn as ie,
  zn as x,
} from "./graphics-quality-BsjABS0s.js";
import { Et as ae, g as S } from "./cube-soldier-BRpW8Tqo.js";
import {
  a as C,
  n as oe,
  o as w,
  r as T,
  s as E,
  t as D,
} from "./continental-kit-cMnzi5gd.js";
var O = `salient.frontDesk`,
  k = `salient.lobbySound`;
function A() {
  try {
    let e = new URLSearchParams(location.search).get(`desk`);
    return (
      (e === `1` || e === `0`) && localStorage.setItem(O, e),
      (e ?? localStorage.getItem(O)) !== `0`
    );
  } catch {
    return !0;
  }
}
function se(e) {
  try {
    let t = e.getExtension(`WEBGL_debug_renderer_info`);
    return String(
      e.getParameter(t ? t.UNMASKED_RENDERER_WEBGL : e.RENDERER) ?? ``,
    );
  } catch {
    return ``;
  }
}
var j = () => new Promise((e) => setTimeout(e, 0)),
  M = { x0: -5.4, x1: 5.4, z0: -2.7, z1: 5, h: 4.2 },
  N = { w: 3.4, d: 0.72, h: 1.08 },
  P = N.h,
  F = { x: -0.18, z: 0.06, w: 0.9, d: 0.6 },
  I = { x: 0.3, z: -0.66 },
  L = { x: 0.35, y: 2.5, size: 2 },
  R = [
    [-1.7, 0.3],
    [0.3, 0.3],
    [2.3, 0.3],
    [-1.7, 2.6],
    [0.3, 2.6],
    [2.3, 2.6],
  ],
  ce = 1,
  le = 5,
  ue = new x(0.02, P, -0.31),
  z = new x(0.62, P, -0.24),
  B = [`#1c2745`, `#221a12`, `#3a2616`, `#14223a`, `#2a1d2e`],
  V = `'Segoe Script','Snell Roundhand','Brush Script MT','URW Chancery L',cursive`,
  H = `Georgia,'Times New Roman',serif`,
  de = (e) => (e <= 0 ? 0 : e >= 1 ? 1 : e * e * (3 - 2 * e)),
  U = (e, t, n) => de((e - t) / (n - t));
function fe(e, t) {
  let n = t / 2,
    r = e.createRadialGradient(n * 0.8, n * 0.7, n * 0.1, n, n, n);
  (r.addColorStop(0, `#f6dc8c`),
    r.addColorStop(0.7, `#c99a3c`),
    r.addColorStop(1, `#8c6420`),
    (e.fillStyle = r),
    e.fillRect(0, 0, t, t),
    (e.strokeStyle = `#7a5518`),
    (e.lineWidth = t * 0.03),
    e.beginPath(),
    e.arc(n, n, n * 0.84, 0, Math.PI * 2),
    e.stroke());
  for (let r = 0; r < 48; r++) {
    let i = (r / 48) * Math.PI * 2;
    ((e.fillStyle = `#8c6420`),
      e.beginPath(),
      e.arc(
        n + Math.cos(i) * n * 0.93,
        n + Math.sin(i) * n * 0.93,
        t * 0.012,
        0,
        Math.PI * 2,
      ),
      e.fill());
  }
  ((e.fillStyle = `#6e4c14`),
    (e.font = `700 ${t * 0.5}px ${H}`),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    e.fillText(`C`, n, n * 1.04));
}
var W = 1600,
  G = 1066,
  K = 78;
