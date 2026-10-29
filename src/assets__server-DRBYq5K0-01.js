// assets__server-DRBYq5K0 01 — build
// Lines 1-314 of readable/assets__server-DRBYq5K0.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { Jn as e, Kn as t } from "./graphics-quality-CrL3qbU3.js";
import { n, r, t as i } from "./index-D8RniaPa.js";
import { t as a } from "./map-collider-0Gc3D4Vs.js";
import {
  H as o,
  U as s,
  Y as c,
  Z as l,
  et as u,
  in as d,
  nt as f,
  rn as p,
  sn as m,
  z as h,
} from "./sim-CCeMdhLh.js";
import { n as g } from "./grenade-sim-CyMT7Itf.js";
import { t as _ } from "./floor-nav-DVnO_N6E.js";
import "./javelin-C4TXP0XS.js";
import { o as v } from "./sim-B3m5a-qv.js";
import {
  c as y,
  d as b,
  l as x,
  n as S,
  p as C,
  r as w,
  t as ee,
  u as T,
} from "./combat-tuning-B4WclXDv.js";
import { i as E, n as D, t as O } from "./barranco-BQ4S2QU4.js";
import {
  bridgeAt as te,
  installBascule as ne,
  shipDeckAt as re,
} from "./bascule-sim-Cbk5CbGU.js";
import { i as k, n as A, t as j } from "./bascule-BirGDQmn.js";
import { n as M, r as N, t as P } from "./cay-DYxqQzdE.js";
import { a as ie, o as F, r as ae } from "./town-beds-C6HTLOgG.js";
import { n as I, r as L, t as oe } from "./deadweight-CNacoM7d.js";
import { n as se, r as ce, t as le } from "./frostline-CICGaJkz.js";
import {
  installTrains as ue,
  trainVictims as de,
} from "./trains-sim-BhrrY_Za.js";
import {
  a as fe,
  i as pe,
  n as R,
  r as me,
  s as he,
  t as ge,
} from "./greywater-map-Q51CbCv-.js";
import "./map-palette-DiMDf2if.js";
import { n as _e, r as ve, t as ye } from "./hangar-CpyGKx4O.js";
import {
  engineAt as be,
  engineBoxes as xe,
  freshState as Se,
  heatAt as Ce,
  installHouseFire as we,
  panesAlong as Te,
  panesNear as z,
  prepare as Ee,
  propaneGone as B,
  rayProp as De,
  stateOf as V,
} from "./housefire-sim-D_OSgDgj.js";
import { n as Oe, r as ke, t as Ae } from "./housefire-DmbxPFSE.js";
import { n as je, r as Me, t as Ne } from "./ironwood-B15Gq5AD.js";
import { a as Pe, l as Fe, o as Ie } from "./kepler-CGq3Tp1E.js";
import {
  installKepler as Le,
  visibilityAt as Re,
} from "./kepler-sim-BMWVfyGS.js";
import {
  fenceState as ze,
  installLindenFences as Be,
  panelAlong as Ve,
  panelsNear as H,
} from "./linden-sim-Cv4sTY8p.js";
import { n as He, r as Ue, t as We } from "./linden-CHUFmF_x.js";
import { n as Ge, r as Ke, t as qe } from "./marabas-CC6xgCBv.js";
import {
  PANE_HP as U,
  craneVictims as Je,
  installMeridian as Ye,
  paneBroken as Xe,
  panesAlong as Ze,
  panesNear as Qe,
} from "./meridian-sim-Cefyo3f2.js";
import { n as $e, r as et, t as tt } from "./meridian-D04s7Lgf.js";
import { l as nt, u as rt, w as it } from "./mesa-BFOvFgtV.js";
import { n as at, r as ot, t as st } from "./metro-lfflje4Q.js";
import {
  _ as ct,
  b as lt,
  c as ut,
  f as W,
  h as dt,
  installObservatory as ft,
  panesAlong as pt,
  panesNear as mt,
  s as ht,
  t as G,
  u as gt,
} from "./observatory-sim-BDUGU5NF.js";
import { i as _t, n as vt, t as yt } from "./observatory-rXFc5NOP.js";
import { t as K } from "./chat-wULIZG4-.js";
var bt = {
    frost: { config: se, climate: le, build: ce },
    marabas: { config: Ge, climate: qe, build: Ke },
    cay: { config: M, climate: P, build: N },
    ironwood: { config: je, climate: Ne, build: Me },
    metro: { config: at, climate: st, build: ot },
    deadweight: { config: I, climate: oe, build: L },
    meridian: { config: $e, climate: tt, build: et },
    housefire: { config: Oe, climate: Ae, build: ke },
    barranco: { config: D, climate: O, build: E },
    linden: { config: He, climate: We, build: Ue },
    hangar: { config: _e, climate: ye, build: ve },
    bascule: { config: A, climate: j, build: k },
    mesa: { config: rt, climate: nt, build: it },
    kepler: { config: Ie, climate: Pe, build: Fe },
    observatory: { config: vt, climate: yt, build: _t },
    compact: { config: he, climate: ge, build: pe },
  },
  xt = Object.freeze(
    Object.fromEntries(
      n.map((e) => [e.key, Object.freeze({ ...e, ...bt[e.key] })]),
    ),
  );
function q(e = {}) {
  let t = r(e);
  return t ? xt[t.key] : null;
}
function St(e, t = {}) {
  let n = q(t);
  return n ? w(n.build(e), n.key, n.config, t) : S(fe(e, t), R);
}
var J = 8,
  Y = 0.75,
  Ct = 1.5,
  X = 0.6,
  Z = { y0: 2.8, y1: 10.6, r: 2.35 },
  wt = [null, { y: 5.4, ry: 2.5, r: 3.1 }, { y: 7.1, ry: 2.7, r: 1.8 }],
  Q = new WeakMap();
function Tt(e) {
  if (!e) return null;
  if (Q.has(e)) return Q.get(e);
  let t = F(e);
  if (!t.length) return (Q.set(e, null), null);
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
      ((o[d] = f + Z.y0 * p), (s[d] = f + Z.y1 * p), (c[d] = Z.r * m));
    else {
      let e = wt[n.sp];
      ((l[d] = f + e.y * p),
        (u[d] = e.ry * p),
        (c[d] = e.r * m),
        (o[d] = l[d] - u[d]),
        (s[d] = l[d] + u[d]));
    }
  }
  let d = e.half,
    f = Math.ceil(e.size / J) + 1,
    p = f * f,
    m = (e) => Math.max(0, Math.min(f - 1, Math.floor((e + d) / J))),
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
      for (let i = X; i < n - X; i += Y) {
        let n = e[0] + t[0] * i,
          a = e[1] + t[1] * i,
          o = e[2] + t[2] * i,
          s = m(o) * f + m(n);
        if (!(a < g[s] || a > _[s])) {
          for (let e = h[s]; e < h[s + 1]; e++)
            if (x(y[e], n, a, o)) {
              if (((r += Y), r >= Ct)) return !0;
              break;
            }
        }
      }
      return !1;
    };
  return (Q.set(e, S), S);
}
function Et(t, n) {
  if (!n?.meteor) return null;
  let r = t.world,
    i = () => t.modules.get(`netcode`),
    a = (e, t, n) => {
      let r = i()?.getClientByEntity?.(e);
      r && i()?.sendEvent?.(r.id, t, n);
    },
    o = (n, r, i, o = -1, s = null) => {
      if (!(n.hp > 0) || n.state & e.DEAD) return;
      n.hp = Math.max(0, n.hp - r);
      let c = n.hp <= 0;
      c && (n.state |= e.DEAD);
      let l = {
        targetId: n.id,
        attackerId: o,
        amount: r,
        part: `torso`,
        weapon: i,
        pos: (s ?? n.pos).slice(),
        headshot: !1,
        fatal: c,
      };
      (t.events.emit(`player:damage`, l),
        a(n.id, `player:damage`, l),
        o >= 0 && o !== n.id && a(o, `player:damage`, l));
    },
    s = new Map();
  t.events.on(`player:damage`, (e) => {
    e?.attackerId != null &&
      e.attackerId >= 0 &&
      e.attackerId !== e.targetId &&
      !/^(Fire|Meteor)$/.test(e.weapon) &&
      s.set(e.targetId, { attackerId: e.attackerId, tick: r.time.tick });
  });
  let c = (e) => {
      let t = s.get(e.id);
      return t && r.time.tick - t.tick < 600 ? t.attackerId : -1;
    },
    l = new Set(),
    u = null;
  return {
    tick() {
      let a = r.time.tick;
      if (r.match?.phase === `live`) {
        n.epoch !== u && ((u = n.epoch), l.clear());
        for (let s of ht(n)) {
          if (a >= s.impact && !l.has(s.k)) {
            l.add(s.k);
            let e = [s.x, s.y + 1, s.z],
              n = [
                [s.x, s.y + 0.6, s.z],
                [s.x, s.y + 4, s.z],
              ];
            for (let t of r.byType(`soldier`)) {
              if ((t.seat ?? -1) >= 0) continue;
              let i = g(r, e, t, G.BLAST, n);
              i > 0 && o(t, i, `Meteor`, -1, e);
            }
            let a = {
              pos: e,
              scale: 4,
              kind: `meteor`,
              radius: G.BLAST.blastRadius,
              attackerId: null,
              weapon: `Meteor`,
            };
            (t.events.emit(`explosion`, a),
              i()?.broadcastEvent?.(`explosion`, a));
          }
          if (a % 15 == 0 && ut(s, a) > 0.3)
            for (let t of r.byType(`soldier`))
              !(t.hp > 0) ||
                t.state & e.DEAD ||
                (t.seat ?? -1) >= 0 ||
                t.pos[1] > s.y + 1.5 ||
                Math.hypot(t.pos[0] - s.x, t.pos[2] - s.z) > G.FIRE_R ||
                o(t, G.FIRE_DMG, `Fire`, t.hp <= G.FIRE_DMG ? c(t) : -1);
        }
      }
    },
  };
}
