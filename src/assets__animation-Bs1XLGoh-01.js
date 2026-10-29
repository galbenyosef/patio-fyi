// assets__animation-Bs1XLGoh 01 — state
// Lines 1-339 of readable/assets__animation-Bs1XLGoh.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  An as e,
  At as t,
  Bt as n,
  Dn as r,
  En as i,
  F as a,
  Gt as o,
  Hn as s,
  Ht as c,
  I as l,
  Jn as u,
  L as d,
  P as f,
  V as p,
  Vt as m,
  W as h,
  X as g,
  _n as _,
  _t as v,
  at as y,
  cn as b,
  dn as x,
  dt as S,
  gt as C,
  kn as w,
  lt as T,
  nn as E,
  nt as D,
  ot as O,
  q as k,
  qn as A,
  qt as ee,
  sn as te,
  tt as ne,
  un as j,
  v as re,
  vt as ie,
  y as ae,
  z as oe,
  zt as M,
} from "./graphics-quality-CrL3qbU3.js";
import { m as se, r as ce } from "./index-D8RniaPa.js";
import {
  A as le,
  B as ue,
  Ct as de,
  D as fe,
  Dt as pe,
  E as me,
  Et as he,
  F as ge,
  G as _e,
  H as ve,
  I as ye,
  J as be,
  K as xe,
  L as Se,
  M as Ce,
  Nt as we,
  O as Te,
  Ot as Ee,
  P as De,
  Pt as Oe,
  Q as ke,
  R as Ae,
  S as je,
  St as Me,
  T as Ne,
  Tt as Pe,
  U as Fe,
  V as Ie,
  W as N,
  X as Le,
  Y as Re,
  Z as ze,
  _ as Be,
  a as Ve,
  at as He,
  b as Ue,
  bt as We,
  c as Ge,
  ct as Ke,
  d as qe,
  f as Je,
  ft as Ye,
  g as Xe,
  gt as Ze,
  h as Qe,
  ht as $e,
  i as et,
  it as tt,
  j as nt,
  jt as rt,
  k as it,
  kt as at,
  l as ot,
  lt as st,
  m as ct,
  mt as lt,
  n as ut,
  ot as dt,
  p as ft,
  pt,
  q as mt,
  rt as ht,
  s as gt,
  st as _t,
  t as vt,
  tt as yt,
  u as bt,
  ut as xt,
  v as St,
  vt as Ct,
  w as wt,
  wt as Tt,
  x as Et,
  y as Dt,
  yt as Ot,
  z as kt,
} from "./cube-soldier-DMHrHkZL.js";
import {
  g as P,
  k as At,
  o as jt,
  s as Mt,
  v as Nt,
  w as Pt,
  x as Ft,
} from "./sim-CCeMdhLh.js";
import { r as It } from "./knife-pose-sWCbR3uv.js";
import { d as Lt, t as Rt, u as zt } from "./sim-aWA3uwbl.js";
import {
  c as Bt,
  d as Vt,
  g as Ht,
  h as Ut,
  o as Wt,
  y as Gt,
} from "./attachments-BlZum_KH.js";
import { n as Kt } from "./wear-levels-C35ZGfVS.js";
import {
  $ as qt,
  A as Jt,
  B as Yt,
  C as Xt,
  F as Zt,
  G as Qt,
  H as $t,
  L as en,
  M as tn,
  N as nn,
  O as rn,
  P as an,
  S as on,
  Y as sn,
  Z as cn,
  _ as ln,
  a as un,
  b as dn,
  c as fn,
  d as pn,
  f as mn,
  h as hn,
  i as gn,
  j as _n,
  n as F,
  o as vn,
  q as yn,
  r as bn,
  s as xn,
  t as Sn,
  u as Cn,
  v as wn,
  x as Tn,
} from "./grenade-model-r0cg2Gb_.js";
import { t as En } from "./load-backoff-Cpa3_Evg.js";
import { t as Dn } from "./medic-server-CPDVPsRv.js";
import { r as On } from "./squads-7-3V4T83.js";
import { n as kn } from "./smoke-sriNWeMQ.js";
var I = u.GROUNDED,
  L = Math.PI;
function An(e, t) {
  let n = e.world,
    r = [],
    i = new Set();
  function a(e, t, a, o, s = {}) {
    let c = n.spawn(`soldier`, {
      pos: e,
      yaw: t,
      team: a,
      hp: 100,
      maxHp: 100,
      state: I,
      stance: A.STAND,
      ...s,
    });
    c.ext.showcase = !0;
    let l = {
      e: c,
      script: o,
      st: { x: e[0], dir: 1, y: 0, vy: 0, air: !1, lastHit: 0, armed: !0 },
    };
    return (r.push(l), i.add(c.id), c);
  }
  for (let e = 0; e < 20; e++)
    a(
      [40 + e * 0.8, 0, 0],
      L,
      e % 2,
      (e) => {
        e.state = I;
      },
      {
        owner: 4e4 + e,
        hp: 200,
        maxHp: 200,
        weapon: [0, 3, 4, 58][e % 4],
        ext: {
          loadout: {
            classId: [`assault`, `sniper`, `support`, `medic`][e % 4],
          },
        },
      },
    );
  let o = [
    (e) => {
      e.state = I;
    },
    (e) => {
      ((e.state = I), (e.stance = A.CROUCH));
    },
    (e) => {
      ((e.state = I | u.ADS), (e.stance = A.PRONE), (e.pitch = 0.04));
    },
    (e) => {
      ((e.state = I | u.ADS), (e.pitch = 0.08));
    },
    (e, t) => {
      e.state = I | u.ADS | (t % 1.6 < 0.7 ? u.FIRING : 0);
    },
    (e, t) => {
      e.state = I | (t % 3.2 < 1.8 ? u.RELOADING : 0);
    },
    (e, t, n) => {
      ((e.state = I),
        t - n.lastHit > 1.1 &&
          ((n.lastHit = t), (e.hp = e.hp <= 20 ? 100 : e.hp - 12)));
    },
    (e, t) => {
      let n = t % 7 >= 1.5 && t % 7 < 5.5;
      ((e.state = I | (n ? u.DEAD : 0)), (e.hp = n ? 0 : 100));
    },
    (e) => {
      e.state = I | u.ADS | u.LEAN_L;
    },
    (e) => {
      e.state = I | u.ADS | u.LEAN_R;
    },
    (e, t, n, r) => {
      (!n.air &&
        t % 2.2 < 0.05 &&
        n.armed &&
        ((n.vy = Mt), (n.air = !0), (n.armed = !1)),
        t % 2.2 > 1 && (n.armed = !0),
        n.air &&
          ((n.vy -= 20 * r),
          (n.y += n.vy * r),
          n.y <= 0 && ((n.y = 0), (n.air = !1))),
        (e.pos[1] = n.y),
        (e.vel[1] = n.air ? n.vy : 0),
        (e.state = n.air ? u.JUMPING : I));
    },
    (e, t) => {
      ((e.state = I | u.ADS | (t % 2.4 < 0.5 ? u.FIRING : 0)),
        (e.stance = A.CROUCH),
        (e.pitch = 0.05));
    },
  ];
  o.forEach((e, t) => {
    a([(t - (o.length - 1) / 2) * 2.2, 0, -3], L, t & 1, e);
  });
  let s =
    (e, t, n = 0, r = A.STAND) =>
    (i, a, o, s) => {
      ((o.x += o.dir * e * s),
        o.x > 18
          ? ((o.x = 18), (o.dir = -1))
          : o.x < -18 && ((o.x = -18), (o.dir = 1)),
        (i.pos[0] = o.x),
        (i.vel[0] = o.dir * e),
        (i.vel[2] = 0));
      let c = o.dir > 0 ? -L / 2 : L / 2;
      ((i.yaw =
        t === `face` ? c : t === `away` ? c + L : t === `diag` ? c + 0.75 : L),
        (i.state = I | n),
        (i.stance = r));
    };
  return (
    [
      [P.ads, `camera`, u.ADS],
      [P.walk, `face`],
      [P.sprint, `face`, u.SPRINT],
      [P.walk, `camera`],
      [3.4, `away`],
      [P.crouch, `face`, 0, A.CROUCH],
      [P.prone, `face`, 0, A.PRONE],
      [P.walk, `diag`],
    ].forEach(([e, n, i, o], c) => {
      let l = a([t.range(-18, 18), 0, -14 - c * 4], L, c & 1, s(e, n, i, o));
      ((r[r.length - 1].st.x = l.pos[0]),
        (r[r.length - 1].st.dir = t.next() < 0.5 ? -1 : 1));
    }),
    a([-10, 0, -90], L, 0, (e) => {
      e.state = I;
    }),
    a([0, 0, -90], L, 1, s(P.walk, `face`)),
    a([10, 0, -90], L, 0, s(P.sprint, `face`, u.SPRINT)),
    a([-8, 0, -160], L, 1, (e) => {
      ((e.state = I), (e.stance = A.CROUCH));
    }),
    a([8, 0, -160], L, 0, (e) => {
      e.state = I | u.ADS;
    }),
    a([0, 0, -240], L, 1, s(P.sprint, `face`, u.SPRINT)),
    {
      count: r.length,
      isScripted: (e) => i.has(e),
      tick(e, t) {
        for (let n of r) n.script(n.e, t, n.st, e);
      },
      dispose() {
        for (let e of r) n.get(e.e.id) && n.despawn(e.e.id);
        ((r.length = 0), i.clear());
      },
    }
  );
}
