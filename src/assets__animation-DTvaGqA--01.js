// assets__animation-DTvaGqA- 01 — state
// Lines 1-312 of readable/assets__animation-DTvaGqA-.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  $ as e,
  Bt as t,
  Cn as n,
  Dn as r,
  En as i,
  F as a,
  Gn as o,
  Gt as s,
  I as c,
  J as l,
  K as u,
  Lt as d,
  Ot as f,
  P as p,
  R as m,
  Rt as h,
  U as g,
  Ut as _,
  Wn as v,
  an as y,
  cn as b,
  en as x,
  et as S,
  gt as C,
  ht as ee,
  it as w,
  lt as T,
  mn as E,
  mt as te,
  sn as ne,
  st as D,
  v as re,
  wn as O,
  y as ie,
  zn as k,
  zt as ae,
} from "./graphics-quality-BsjABS0s.js";
import { m as A, r as j } from "./index-CBqjwezZ.js";
import {
  A as oe,
  B as se,
  C as ce,
  Ct as le,
  D as ue,
  E as de,
  F as fe,
  G as pe,
  H as me,
  I as he,
  J as ge,
  K as _e,
  L as ve,
  N as ye,
  O as be,
  P as xe,
  R as Se,
  T as Ce,
  Tt as we,
  U as M,
  V as Te,
  W as Ee,
  X as De,
  Y as Oe,
  Z as ke,
  _ as Ae,
  _t as je,
  a as Me,
  at as Ne,
  b as Pe,
  bt as Fe,
  c as Ie,
  ct as Le,
  d as Re,
  dt as ze,
  et as Be,
  f as Ve,
  ft as He,
  g as Ue,
  gt as We,
  h as Ge,
  ht as Ke,
  i as qe,
  it as Je,
  j as Ye,
  k as Xe,
  l as Ze,
  lt as Qe,
  m as N,
  mt as $e,
  n as et,
  nt as tt,
  o as nt,
  p as rt,
  q as it,
  rt as at,
  s as ot,
  st,
  t as ct,
  u as lt,
  ut,
  v as dt,
  vt as ft,
  w as pt,
  x as mt,
  xt as ht,
  y as gt,
  yt as P,
  z as _t,
} from "./cube-soldier-BRpW8Tqo.js";
import {
  D as vt,
  S as yt,
  g as bt,
  m as F,
  o as xt,
  s as St,
  y as Ct,
} from "./sim-D8F3HPJq.js";
import { r as wt } from "./knife-pose-sWCbR3uv.js";
import { d as Tt, t as Et, u as Dt } from "./sim-DQ2nevDc.js";
import { i as Ot, o as kt, u as At } from "./defs-BsSJWPNa.js";
import { s as jt, u as Mt } from "./attachments-DZaUzy_Q.js";
import { n as Nt } from "./wear-levels-C35ZGfVS.js";
import {
  A as Pt,
  B as Ft,
  D as It,
  F as Lt,
  H as Rt,
  K as zt,
  N as Bt,
  O as Vt,
  R as Ht,
  T as Ut,
  W as Wt,
  _ as Gt,
  a as Kt,
  c as qt,
  h as Jt,
  i as Yt,
  l as Xt,
  n as Zt,
  o as Qt,
  p as $t,
  r as en,
  t as tn,
  u as nn,
  v as rn,
  y as an,
} from "./rifle-pose-CdM47EZt.js";
import { t as on } from "./load-backoff-Cpa3_Evg.js";
import { r as sn } from "./squads-3RTK34-j.js";
var I = o.GROUNDED,
  L = Math.PI;
function cn(e, t) {
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
      stance: v.STAND,
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
        weapon: [0, 3, 4, 1][e % 4],
        ext: {
          loadout: {
            classId: [`assault`, `sniper`, `support`, `engineer`][e % 4],
          },
        },
      },
    );
  let s = [
    (e) => {
      e.state = I;
    },
    (e) => {
      ((e.state = I), (e.stance = v.CROUCH));
    },
    (e) => {
      ((e.state = I | o.ADS), (e.stance = v.PRONE), (e.pitch = 0.04));
    },
    (e) => {
      ((e.state = I | o.ADS), (e.pitch = 0.08));
    },
    (e, t) => {
      e.state = I | o.ADS | (t % 1.6 < 0.7 ? o.FIRING : 0);
    },
    (e, t) => {
      e.state = I | (t % 3.2 < 1.8 ? o.RELOADING : 0);
    },
    (e, t, n) => {
      ((e.state = I),
        t - n.lastHit > 1.1 &&
          ((n.lastHit = t), (e.hp = e.hp <= 20 ? 100 : e.hp - 12)));
    },
    (e, t) => {
      let n = t % 7 >= 1.5 && t % 7 < 5.5;
      ((e.state = I | (n ? o.DEAD : 0)), (e.hp = n ? 0 : 100));
    },
    (e) => {
      e.state = I | o.ADS | o.LEAN_L;
    },
    (e) => {
      e.state = I | o.ADS | o.LEAN_R;
    },
    (e, t, n, r) => {
      (!n.air &&
        t % 2.2 < 0.05 &&
        n.armed &&
        ((n.vy = St), (n.air = !0), (n.armed = !1)),
        t % 2.2 > 1 && (n.armed = !0),
        n.air &&
          ((n.vy -= 20 * r),
          (n.y += n.vy * r),
          n.y <= 0 && ((n.y = 0), (n.air = !1))),
        (e.pos[1] = n.y),
        (e.vel[1] = n.air ? n.vy : 0),
        (e.state = n.air ? o.JUMPING : I));
    },
    (e, t) => {
      ((e.state = I | o.ADS | (t % 2.4 < 0.5 ? o.FIRING : 0)),
        (e.stance = v.CROUCH),
        (e.pitch = 0.05));
    },
  ];
  s.forEach((e, t) => {
    a([(t - (s.length - 1) / 2) * 2.2, 0, -3], L, t & 1, e);
  });
  let c =
    (e, t, n = 0, r = v.STAND) =>
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
      [F.ads, `camera`, o.ADS],
      [F.walk, `face`],
      [F.sprint, `face`, o.SPRINT],
      [F.walk, `camera`],
      [3.4, `away`],
      [F.crouch, `face`, 0, v.CROUCH],
      [F.prone, `face`, 0, v.PRONE],
      [F.walk, `diag`],
    ].forEach(([e, n, i, o], s) => {
      let l = a([t.range(-18, 18), 0, -14 - s * 4], L, s & 1, c(e, n, i, o));
      ((r[r.length - 1].st.x = l.pos[0]),
        (r[r.length - 1].st.dir = t.next() < 0.5 ? -1 : 1));
    }),
    a([-10, 0, -90], L, 0, (e) => {
      e.state = I;
    }),
    a([0, 0, -90], L, 1, c(F.walk, `face`)),
    a([10, 0, -90], L, 0, c(F.sprint, `face`, o.SPRINT)),
    a([-8, 0, -160], L, 1, (e) => {
      ((e.state = I), (e.stance = v.CROUCH));
    }),
    a([8, 0, -160], L, 0, (e) => {
      e.state = I | o.ADS;
    }),
    a([0, 0, -240], L, 1, c(F.sprint, `face`, o.SPRINT)),
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
