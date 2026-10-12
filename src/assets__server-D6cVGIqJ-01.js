// assets__server-D6cVGIqJ 01 — build
// Lines 1-230 of readable/assets__server-D6cVGIqJ.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { Gn as e, Un as t } from "./graphics-quality-BsjABS0s.js";
import { n, r, t as i } from "./index-CBqjwezZ.js";
import { t as a } from "./map-collider-Bdq_bUeN.js";
import {
  B as o,
  Q as s,
  U as c,
  W as l,
  X as u,
  dt as d,
  fn as f,
  gn as p,
  it as m,
  lt as h,
  ot as g,
  pn as _,
} from "./sim-D8F3HPJq.js";
import { n as v } from "./grenade-sim-BPkr3Qs6.js";
import { t as y } from "./floor-nav-Djxj4YpQ.js";
import "./javelin-BUaEG5R2.js";
import { o as b } from "./sim-Dw8jCQAI.js";
import {
  c as x,
  d as S,
  l as C,
  n as w,
  p as T,
  r as E,
  t as ee,
  u as D,
} from "./combat-tuning--WnQFiKN.js";
import { i as O, n as k, t as A } from "./barranco-BULGw4rd.js";
import { i as j, n as M, t as N } from "./bascule-CwYMJcrN.js";
import { n as P, r as F, t as I } from "./cay-qp9Dahfv.js";
import { a as te, o as L, r as ne } from "./town-beds-r2XtrPD_.js";
import { n as R, r as re, t as ie } from "./deadweight-Db5xFjvu.js";
import { n as ae, r as oe, t as se } from "./frostline-DC8_Sipw.js";
import {
  installTrains as ce,
  trainVictims as le,
} from "./trains-sim-BhrrY_Za.js";
import {
  a as ue,
  i as de,
  n as z,
  r as fe,
  s as pe,
  t as me,
} from "./greywater-map-CJ8kbtVA.js";
import "./map-palette-DooGSDy-.js";
import { n as he, r as ge, t as _e } from "./hangar-Do5KStz2.js";
import {
  engineAt as ve,
  engineBoxes as ye,
  freshState as be,
  heatAt as xe,
  installHouseFire as Se,
  panesAlong as Ce,
  panesNear as B,
  prepare as we,
  propaneGone as V,
  rayProp as Te,
  stateOf as H,
} from "./housefire-sim-D_OSgDgj.js";
import { n as Ee, r as De, t as Oe } from "./housefire-Qhc_Y3R0.js";
import { n as ke, r as Ae, t as je } from "./ironwood-BHbdGmuz.js";
import { a as Me, l as Ne, o as Pe } from "./kepler-BUDn6dZs.js";
import {
  installKepler as Fe,
  visibilityAt as Ie,
} from "./kepler-sim-CZsZKMi2.js";
import {
  fenceState as Le,
  installLindenFences as Re,
  panelAlong as ze,
  panelsNear as U,
} from "./linden-sim-lCb_uLzG.js";
import { n as Be, r as Ve, t as He } from "./linden-4qafj8hA.js";
import { n as Ue, r as We, t as Ge } from "./marabas-BxjXwomw.js";
import {
  PANE_HP as W,
  craneVictims as Ke,
  installMeridian as qe,
  paneBroken as Je,
  panesAlong as Ye,
  panesNear as Xe,
} from "./meridian-sim-Cefyo3f2.js";
import { n as Ze, r as Qe, t as $e } from "./meridian-Ce1pZotr.js";
import { a as et, g as tt, i as nt } from "./mesa-Cnng6RGj.js";
import { n as rt, r as it, t as at } from "./metro-BEjF4eDq.js";
import {
  installObservatory as ot,
  panesAlong as st,
  panesNear as ct,
} from "./observatory-sim-BYYrPAWg.js";
import { n as lt, r as ut, t as dt } from "./observatory-Cfe5jL1q.js";
import { t as G } from "./chat-B5rOvjz0.js";
var ft = {
    frost: { config: ae, climate: se, build: oe },
    marabas: { config: Ue, climate: Ge, build: We },
    cay: { config: P, climate: I, build: F },
    ironwood: { config: ke, climate: je, build: Ae },
    metro: { config: rt, climate: at, build: it },
    deadweight: { config: R, climate: ie, build: re },
    meridian: { config: Ze, climate: $e, build: Qe },
    housefire: { config: Ee, climate: Oe, build: De },
    barranco: { config: k, climate: A, build: O },
    linden: { config: Be, climate: He, build: Ve },
    hangar: { config: he, climate: _e, build: ge },
    bascule: { config: M, climate: N, build: j },
    mesa: { config: et, climate: nt, build: tt },
    kepler: { config: Pe, climate: Me, build: Ne },
    observatory: { config: lt, climate: dt, build: ut },
    compact: { config: pe, climate: me, build: de },
  },
  pt = Object.freeze(
    Object.fromEntries(
      n.map((e) => [e.key, Object.freeze({ ...e, ...ft[e.key] })]),
    ),
  );
function K(e = {}) {
  let t = r(e);
  return t ? pt[t.key] : null;
}
function mt(e, t = {}) {
  let n = K(t);
  return n ? E(n.build(e), n.key, n.config, t) : w(ue(e, t), z);
}
var q = 8,
  J = 0.75,
  ht = 1.5,
  Y = 0.6,
  X = { y0: 2.8, y1: 10.6, r: 2.35 },
  gt = [null, { y: 5.4, ry: 2.5, r: 3.1 }, { y: 7.1, ry: 2.7, r: 1.8 }],
  Z = new WeakMap();
function _t(e) {
  if (!e) return null;
  if (Z.has(e)) return Z.get(e);
  let t = L(e);
  if (!t.length) return (Z.set(e, null), null);
  let n = t.length,
    r = new Uint8Array(n),
    i = new Float32Array(n),
    a = new Float32Array(n),
    o = new Float32Array(n),
    s = new Float32Array(n),
    c = new Float32Array(n),
    l = new Float32Array(n),
    u = new Float32Array(n);
  for (let d = 0; d < n; d++) {
    let n = t[d],
      f = e.getHeight(n.x, n.z) - 0.25,
      p = n.s * n.sy,
      m = n.s * n.sxz;
    if (((i[d] = n.x), (a[d] = n.z), (r[d] = n.sp), n.sp === 0))
      ((o[d] = f + X.y0 * p), (s[d] = f + X.y1 * p), (c[d] = X.r * m));
    else {
      let e = gt[n.sp];
      ((l[d] = f + e.y * p),
        (u[d] = e.ry * p),
        (c[d] = e.r * m),
        (o[d] = l[d] - u[d]),
        (s[d] = l[d] + u[d]));
    }
  }
  let d = e.half,
    f = Math.ceil(e.size / q) + 1,
    p = f * f,
    m = (e) => Math.max(0, Math.min(f - 1, Math.floor((e + d) / q))),
    h = new Int32Array(p + 1),
    g = new Float32Array(p).fill(1 / 0),
    _ = new Float32Array(p).fill(-1 / 0),
    v = (e, t) => {
      for (let n = m(a[e] - c[e]); n <= m(a[e] + c[e]); n++)
        for (let r = m(i[e] - c[e]); r <= m(i[e] + c[e]); r++) t(n * f + r);
    };
  for (let e = 0; e < n; e++)
    v(e, (t) => {
      (h[t + 1]++, o[e] < g[t] && (g[t] = o[e]), s[e] > _[t] && (_[t] = s[e]));
    });
  for (let e = 0; e < p; e++) h[e + 1] += h[e];
  let y = new Int32Array(h[p]),
    b = h.slice(0, p);
  for (let e = 0; e < n; e++)
    v(e, (t) => {
      y[b[t]++] = e;
    });
  let x = (e, t, n, d) => {
      let f = t - i[e],
        p = d - a[e],
        m = f * f + p * p,
        h = c[e];
      if (m > h * h || n < o[e] || n > s[e]) return !1;
      if (r[e] === 0) {
        let t = (h * (s[e] - n)) / (s[e] - o[e]);
        return m < t * t;
      }
      let g = (n - l[e]) / u[e];
      return g * g + m / (h * h) < 1;
    },
    S = (e, t, n) => {
      let r = 0;
      for (let i = Y; i < n - Y; i += J) {
        let n = e[0] + t[0] * i,
          a = e[1] + t[1] * i,
          o = e[2] + t[2] * i,
          s = m(o) * f + m(n);
        if (!(a < g[s] || a > _[s])) {
          for (let e = h[s]; e < h[s + 1]; e++)
            if (x(y[e], n, a, o)) {
              if (((r += J), r >= ht)) return !0;
              break;
            }
        }
      }
      return !1;
    };
  return (Z.set(e, S), S);
}
var vt = 60,
  yt = 2.5,
  bt = (e) => ({
    epoch: e.epoch,
    ignite: { ...e.ignite },
    car: e.car,
    engine: e.engine,
    propane: e.propane,
    hits: { ...e.hits },
  });
