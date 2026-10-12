// assets__player-vyh7zp35 01 — math
// Lines 1-277 of readable/assets__player-vyh7zp35.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  Ct as e,
  D as t,
  F as n,
  Gn as r,
  I as i,
  K as a,
  L as o,
  Qt as s,
  Rn as c,
  Rt as l,
  U as u,
  Un as d,
  Ut as f,
  Wn as p,
  Yn as m,
  _ as h,
  en as g,
  lt as _,
  tt as v,
  v as y,
  vn as b,
  wn as x,
  yn as S,
  zn as C,
} from "./graphics-quality-BsjABS0s.js";
import {
  A as w,
  D as T,
  S as E,
  T as D,
  _ as O,
  b as k,
  f as A,
  k as j,
  l as M,
  m as N,
  n as P,
  u as ee,
  v as te,
  w as ne,
  x as F,
} from "./sim-D8F3HPJq.js";
import { t as re } from "./sim-DQ2nevDc.js";
import { i as ie } from "./sim-CbSN8jt0.js";
import {
  i as ae,
  n as oe,
  r as se,
  t as ce,
} from "./pointer-lock-policy-DsB7e7Fn.js";
import { f as le, i as ue, o as de } from "./input-glyphs-CoM_yJmy.js";
import { n as fe, r as pe, t as me } from "./gamepad-C2J19Zis.js";
var I = {
    concrete: 10130826,
    concreteDark: 8025709,
    concreteLight: 11775650,
    wood: 11041605,
    woodDark: 8806458,
    steel: 6254460,
    steelDark: 4543068,
    amber: 14263361,
    charcoal: 3356475,
    crate: 7766106,
    crateDark: 5660226,
    crateTan: 11573866,
    sandbag: 11903093,
    sandbagDark: 9929316,
    water: 4160134,
    waterShallow: 7183008,
    tile: 8037293,
    tileDark: 6129553,
    poolFloor: 5074808,
    tileWet: 4614770,
    finish: 14209992,
    post: 4935508,
    flagA: 14195258,
    flagB: 3895248,
    target: 13222578,
    targetRing: 13065020,
    asphalt: 5197388,
    cone: 14246958,
  },
  L = new u();
function R(
  e,
  t,
  { aoBase: n = null, aoHeight: r = 0.6, aoStrength: a = 0.25 } = {},
) {
  let o = e.attributes.position,
    s = o.count,
    c = new Float32Array(s * 3);
  L.set(t);
  for (let e = 0; e < s; e++) {
    let t = 1;
    (n != null &&
      (t = 1 - a * (1 - Math.min(1, Math.max(0, (o.getY(e) - n) / r)))),
      (c[e * 3] = L.r * t),
      (c[e * 3 + 1] = L.g * t),
      (c[e * 3 + 2] = L.b * t));
  }
  return (e.setAttribute(`color`, new i(c, 3)), e);
}
function he(e, t, n, r, i) {
  let a = 0,
    o = r,
    s = -1,
    c = 0;
  for (let r = 0; r < 3; r++) {
    let i = 1 / (t[r] || 1e-12),
      l = (n[r] - e[r]) * i,
      u = (n[r + 3] - e[r]) * i,
      d = -1;
    if (i < 0) {
      let e = l;
      ((l = u), (u = e), (d = 1));
    }
    if ((l > a && ((a = l), (s = r), (c = d)), u < o && (o = u), o < a))
      return null;
  }
  if (s < 0) return null;
  let l = [0, 0, 0];
  return (
    (l[s] = c),
    {
      point: [e[0] + t[0] * a, e[1] + t[1] * a, e[2] + t[2] * a],
      normal: l,
      dist: a,
      surface: i,
    }
  );
}
function z(e, t, n = `concrete`, r = {}) {
  return {
    id: e,
    mask: `static`,
    aabb: t,
    solid: !0,
    surface: n,
    raycast: (e, r, i) => he(e, r, t, i, n),
    ...r,
  };
}
function ge(e, t, n, r, i, a, o, s, c = `concrete`) {
  let l = [
      t,
      Math.min(s, a),
      Math.min(r, i),
      n,
      Math.max(a, o),
      Math.max(r, i),
    ],
    u = r - i,
    d = (e, t) => {
      let n = Math.min(1, Math.max(0, (r - t) / u));
      return a + (o - a) * n;
    },
    f = (o - a) / u,
    p = 1 / Math.hypot(1, f),
    m = f * p,
    h = p;
  return {
    id: e,
    mask: `static`,
    aabb: l,
    solid: !0,
    surface: c,
    floorHeight: d,
    floorNormal: (e, t, n = [0, 1, 0]) => (
      (n[0] = 0),
      (n[1] = h),
      (n[2] = m),
      n
    ),
    raycast: (e, r, i) => {
      let a = r[1] * h + r[2] * m;
      if (Math.abs(a) > 1e-9) {
        let o = ((d(e[0], e[2]) - e[1]) * h) / a;
        if (o > 0 && o <= i) {
          let i = e[0] + r[0] * o,
            s = e[2] + r[2] * o,
            u = e[1] + r[1] * o;
          if (
            i >= t &&
            i <= n &&
            s >= l[2] &&
            s <= l[5] &&
            Math.abs(u - d(i, s)) < 0.05 &&
            a < 0
          )
            return { point: [i, u, s], normal: [0, h, m], dist: o, surface: c };
        }
      }
      let o = he(e, r, l, i, c);
      return o && o.point[1] > d(o.point[0], o.point[2]) + 0.02 ? null : o;
    },
  };
}
function _e(e, t, n, r, i, a, o, s, c, l = `concrete`) {
  let u = r - i * a,
    d = s + i * o,
    f = [t, Math.min(c, s), u, n, d, r],
    p = (e, t) => {
      let n = Math.floor((r - t) / a) + 1;
      return s + o * Math.min(i, Math.max(1, n));
    };
  return {
    id: e,
    mask: `static`,
    aabb: f,
    solid: !0,
    surface: l,
    floorHeight: p,
    floorNormal: (e, t, n = [0, 1, 0]) => (
      (n[0] = 0),
      (n[1] = 1),
      (n[2] = 0),
      n
    ),
    raycast: (e, i, a) => {
      let o = he(e, i, f, a, l);
      if (!o) return null;
      if (o.point[1] > p(o.point[0], o.point[2]) + 0.02) {
        let s = o.dist;
        for (; s < a;) {
          let a = e[0] + i[0] * s,
            o = e[1] + i[1] * s,
            d = e[2] + i[2] * s;
          if (a < t || a > n || d < u || d > r || o < c) return null;
          if (o <= p(a, d))
            return { point: [a, o, d], normal: [0, 1, 0], dist: s, surface: l };
          s += 0.05;
        }
        return null;
      }
      return o;
    },
  };
}
function ve(e, t, n, r = `tile`) {
  return {
    id: e,
    mask: `static`,
    aabb: t,
    solid: !1,
    overrideGround: !0,
    surface: r,
    floorHeight: () => n,
    raycast: (e, i, a) => {
      if (i[1] >= 0 || e[1] < n) return null;
      let o = (n - e[1]) / i[1];
      if (o > a) return null;
      let s = e[0] + i[0] * o,
        c = e[2] + i[2] * o;
      return s < t[0] || s > t[3] || c < t[2] || c > t[5]
        ? null
        : { point: [s, n, c], normal: [0, 1, 0], dist: o, surface: r };
    },
  };
}
function B(e, t, n) {
  let r = new b();
  r.moveTo(-e[0][0], e[0][1]);
  for (let t = 1; t < e.length; t++) r.lineTo(-e[t][0], e[t][1]);
  r.closePath();
  let i = new v(r, { depth: t, bevelEnabled: !1 });
  return (i.rotateY(Math.PI / 2), i.translate(n - t / 2, 0, 0), i);
}
function ye(e, t, n) {
  let r = new b();
  r.moveTo(e[0][0], e[0][1]);
  for (let t = 1; t < e.length; t++) r.lineTo(e[t][0], e[t][1]);
  r.closePath();
  let i = new v(r, { depth: t, bevelEnabled: !1 });
  return (i.translate(0, 0, n - t), i);
}
