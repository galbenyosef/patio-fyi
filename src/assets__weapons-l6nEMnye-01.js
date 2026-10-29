// assets__weapons-l6nEMnye 01 — fillstyle
// Lines 1-161 of readable/assets__weapons-l6nEMnye.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  An as e,
  Bt as t,
  Dn as n,
  F as r,
  Gt as i,
  Hn as a,
  Jn as o,
  K as s,
  Kn as c,
  P as l,
  Vt as u,
  Zn as d,
  _ as f,
  _n as p,
  at as m,
  dt as h,
  et as g,
  kn as _,
  nn as v,
  q as y,
  rn as b,
  tt as x,
  v as S,
  vt as C,
  z as w,
  zt as T,
} from "./graphics-quality-CrL3qbU3.js";
import { _t as E, gt as D, rt as O } from "./cube-soldier-DMHrHkZL.js";
import { v as k, w as A } from "./sim-CCeMdhLh.js";
import { n as j, t as M } from "./knife-pose-sWCbR3uv.js";
import {
  _ as N,
  d as ee,
  f as P,
  g as F,
  l as I,
  m as te,
  p as ne,
  v as re,
} from "./attachments-BlZum_KH.js";
import {
  D as ie,
  E as ae,
  I as oe,
  J as se,
  K as ce,
  P as le,
  T as ue,
  V as de,
  W as fe,
  g as pe,
  k as me,
  m as he,
  w as ge,
} from "./grenade-model-r0cg2Gb_.js";
import { t as _e } from "./load-backoff-Cpa3_Evg.js";
import { t as ve } from "./hostility-BAA0I7XB.js";
import "./gadget-defs-C7GNMdw7.js";
import { i as ye, t as be } from "./medic-server-CPDVPsRv.js";
import {
  _ as xe,
  c as Se,
  g as Ce,
  h as we,
  l as Te,
  m as Ee,
  n as De,
  o as Oe,
  p as ke,
  r as Ae,
  s as je,
  t as Me,
  u as Ne,
  v as Pe,
} from "./sim-Dl_3Wa5P.js";
import {
  a as Fe,
  n as Ie,
  o as Le,
  s as Re,
  t as L,
} from "./javelin-C4TXP0XS.js";
import { l as ze, n as Be, r as Ve } from "./ammo-box-LgYJGM2c.js";
import { n as He } from "./static-bake-DFe1Gx40.js";
import { a as Ue, i as We } from "./muzzle-flash-CzpsoHq7.js";
import {
  a as Ge,
  l as Ke,
  o as qe,
  r as Je,
  t as Ye,
} from "./beacon-nTTDa8yz.js";
import { t as Xe } from "./melee-B7zsK4jg.js";
import { n as Ze, t as Qe } from "./pointer-lock-policy-DsB7e7Fn.js";
import { i as $e } from "./input-glyphs-CoM_yJmy.js";
import { a as et, i as tt, n as nt, t as rt } from "./gain-pop-BO3NCiqK.js";
import {
  a as it,
  d as at,
  i as ot,
  p as st,
  r as ct,
  s as R,
  t as lt,
  u as ut,
} from "./weapon-drops-CfAMmlxp.js";
function z(e, t = 0.85, n = 0.05) {
  return new i({ color: e, roughness: t, metalness: n, flatShading: !0 });
}
function B(e, n, r, i, a) {
  let o = new t(n, r);
  return (
    o.position.set(...i),
    (o.name = a || ``),
    (o.castShadow = o.receiveShadow = !0),
    e.add(o),
    o
  );
}
function dt(e, t, n, r) {
  let i = 0,
    a = r,
    o = 1,
    s = 1;
  for (let r = 0; r < 3; r++) {
    let c = 1 / (t[r] || 1e-12),
      l = (n[r] - e[r]) * c,
      u = (n[r + 3] - e[r]) * c,
      d = -Math.sign(t[r]);
    if (l > u) {
      let e = l;
      ((l = u), (u = e), (d = -d));
    }
    if ((l > i && ((i = l), (o = r), (s = d)), (a = Math.min(a, u)), a < i))
      return null;
  }
  let c = [e[0] + t[0] * i, e[1] + t[1] * i, e[2] + t[2] * i],
    l = [0, 0, 0];
  return ((l[o] = s), { point: c, normal: l, dist: i });
}
function ft(t) {
  let n = document.createElement(`canvas`);
  ((n.width = 512), (n.height = 128));
  let r = n.getContext(`2d`);
  ((r.fillStyle = `#101518`),
    r.fillRect(0, 0, 512, 128),
    (r.strokeStyle = `#d89528`),
    (r.lineWidth = 6),
    r.strokeRect(5, 5, 502, 118),
    (r.fillStyle = `#f4efe3`),
    (r.font = `700 54px Arial`),
    (r.textAlign = `center`),
    (r.textBaseline = `middle`),
    r.fillText(t, 256, 66));
  let i = new w(n);
  i.colorSpace = p;
  let a = new _(new e({ map: i, transparent: !0 }));
  return (a.scale.set(5.2, 1.3, 1), (a.userData.texture = i), a);
}
