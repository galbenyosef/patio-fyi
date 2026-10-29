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
function Dt(t, n) {
  if (!n?.array) return null;
  let r = t.world,
    i = () => t.modules.get(`netcode`),
    a = (e, t, n) => {
      let r = i()?.getClientByEntity?.(e);
      r && i()?.sendEvent?.(r.id, t, n);
    },
    o = (n, r, i, o = -1) => {
      if (!(n.hp > 0) || n.state & e.DEAD) return;
      n.hp = Math.max(0, n.hp - r);
      let s = n.hp <= 0;
      s && (n.state |= e.DEAD);
      let c = {
        targetId: n.id,
        attackerId: o,
        amount: r,
        part: `torso`,
        weapon: i,
        pos: n.pos.slice(),
        headshot: !1,
        fatal: s,
      };
      (t.events.emit(`player:damage`, c),
        a(n.id, `player:damage`, c),
        o >= 0 && o !== n.id && a(o, `player:damage`, c));
    },
    s = new Map();
  t.events.on(`player:damage`, (e) => {
    e?.attackerId != null &&
      e.attackerId >= 0 &&
      e.attackerId !== e.targetId &&
      e.weapon !== `Tractor beam` &&
      s.set(e.targetId, { attackerId: e.attackerId, tick: r.time.tick });
  });
  let c = (e) => {
    let t = s.get(e.id);
    return t && r.time.tick - t.tick < 600 ? t.attackerId : -1;
  };
  return {
    tick() {
      let t = r.time.tick;
      if (!(t % 15 || r.match?.phase !== `live`))
        for (let i of r.byType(`soldier`))
          !(i.hp > 0) ||
            i.state & e.DEAD ||
            (i.seat ?? -1) >= 0 ||
            i.pos[1] > n.y + 6 ||
            !ct(n, t, i.pos[0], i.pos[2]) ||
            o(i, W.DMG, `Tractor beam`, i.hp <= W.DMG ? c(i) : -1);
    },
  };
}
var Ot = 60,
  kt = 2.5,
  At = (e) => ({
    epoch: e.epoch,
    ignite: { ...e.ignite },
    car: e.car,
    engine: e.engine,
    propane: e.propane,
    hits: { ...e.hits },
  });
function jt(t, n) {
  let r = n.housefire;
  if (!r) return null;
  Ee(r);
  let i = t.world,
    a = () => t.modules.get(`netcode`),
    o = () => At(V(r)),
    s = () => {
      let e = o();
      (a()?.broadcastEvent?.(`demo:houseFire`, e),
        t.events.emit(`demo:houseFire`, e));
    };
  t.events.on(`net:hello`, ({ client: e }) => {
    e && a()?.sendEvent?.(e.id, `demo:houseFire`, o());
  });
  let c = new Map();
  (t.events.on(`net:rpc`, ({ client: e, rpc: t }) => {
    t?.name !== `demo:houseFireSync` ||
      !e ||
      i.time.tick < (c.get(e.id) ?? -1) ||
      (c.set(e.id, i.time.tick + 60),
      a()?.sendEvent?.(e.id, `demo:houseFire`, o()));
  }),
    t.events.on(`net:clientLeft`, ({ client: e }) => c.delete(e?.id)));
  let l = (e, t, n) => {
      let r = a()?.getClientByEntity?.(e);
      r && a()?.sendEvent?.(r.id, t, n);
    },
    u = (n, r, i, a = -1, o = null) => {
      if (!(n.hp > 0) || n.state & e.DEAD) return;
      n.hp = Math.max(0, n.hp - r);
      let s = n.hp <= 0;
      s && (n.state |= e.DEAD);
      let c = {
        targetId: n.id,
        attackerId: a,
        amount: r,
        part: `torso`,
        weapon: i,
        pos: (o ?? n.pos).slice(),
        headshot: !1,
        fatal: s,
      };
      (t.events.emit(`player:damage`, c),
        l(n.id, `player:damage`, c),
        a >= 0 && a !== n.id && l(a, `player:damage`, c));
    },
    d = new Map();
  t.events.on(`player:damage`, (e) => {
    e?.attackerId != null &&
      e.attackerId >= 0 &&
      e.attackerId !== e.targetId &&
      !/^(Fire|Smoke)$/.test(e.weapon) &&
      d.set(e.targetId, { attackerId: e.attackerId, tick: i.time.tick });
  });
  let f = (e) => {
      let t = d.get(e.id);
      return t && i.time.tick - t.tick < 600 ? t.attackerId : -1;
    },
    p = {};
  V(r).hitAt = p;
  let m = (e, t) => {
      let n = V(r),
        a = n.hits[e.id] ?? 0;
      return a >= 3
        ? !1
        : ((n.hits[e.id] = Math.min(3, a + t)),
          n.hits[e.id] >= 3 && (p[e.id] = i.time.tick),
          !0);
    },
    h = 0,
    _ = -1;
  (t.events.on(`weapon:fire`, (e) => {
    if (!e?.origin || !e?.dir) return;
    let t = i.time.tick,
      n = !1;
    for (let { pane: i } of Te(r, e.origin, e.dir, e.dist ?? 300, t))
      n = m(i, 3) || n;
    if (!B(r, t)) {
      let t = De(r, e.origin, e.dir, (e.dist ?? 300) + 0.3);
      t != null &&
        t <= (e.dist ?? 300) + 0.3 &&
        (h++, (_ = e.entityId ?? -1), h >= r.propane.hits && v(_));
    }
    n && s();
  }),
    t.events.on(`explosion`, (e) => {
      if (!Array.isArray(e?.pos) || e.kind === `propane`) return;
      let t = Math.max(2.5, Math.min(6, (e.radius ?? 4) * 0.8)),
        n = !1;
      for (let a of z(r, e.pos, t, i.time.tick)) n = m(a, 3) || n;
      let a = r.propane;
      (!B(r, i.time.tick) &&
        Math.hypot(e.pos[0] - a.x, e.pos[1] - a.y, e.pos[2] - a.z) < 3 &&
        v(e.attackerId ?? -1),
        n && s());
    }));
  function v(e) {
    let n = V(r),
      o = i.time.tick;
    if (n.propane != null && n.propane <= o) return;
    n.propane = o;
    let c = r.propane,
      l = [c.x, c.y + 0.4, c.z];
    for (let t of i.byType(`soldier`)) {
      let n = g(i, l, t, c.blast);
      n > 0 && u(t, n, `Propane tank`, e >= 0 && e !== t.id ? e : f(t), l);
    }
    for (let e of z(r, l, 6, o)) m(e, 3);
    let d = {
      pos: l,
      scale: 2.2,
      kind: `propane`,
      radius: c.blast.blastRadius,
      attackerId: e >= 0 ? e : null,
      weapon: `Propane tank`,
    };
    (t.events.emit(`explosion`, d), a()?.broadcastEvent?.(`explosion`, d), s());
  }
  let y = null,
    b = 0,
    x = 0,
    S = () => {
      let e = n.tdm?.killLimit ?? 100,
        t = i.teams ?? [];
      return t.length >= 2
        ? Math.max(0, e - Math.min(t[0]?.tickets ?? e, t[1]?.tickets ?? e))
        : 0;
    },
    C = (e) => {
      let t = V(r);
      Object.assign(t, Se(), { epoch: e, hitAt: p });
      for (let e of Object.keys(p)) delete p[e];
      ((b = 0),
        (x = i.time.tick),
        (h = 0),
        (_ = -1),
        e != null && (t.ignite.kitchen = e),
        s());
    },
    w = new Set();
  return {
    H: r,
    forceKills(e) {
      this.forced = e;
    },
    tick() {
      let t = i.time.tick,
        n = i.match?.phase ?? null;
      n !== y && ((y = n), n === `live` ? C(t) : n === `warmup` && C(null));
      let a = V(r);
      if (a.epoch == null) return;
      if (t % 30 == 0 && y === `live`) {
        let e = Math.max(S(), this.forced ?? 0);
        b < e && t - x >= kt * Ot && ((b = Math.min(e, b + 1)), (x = t));
        let n = !1;
        for (let e of r.rooms)
          a.ignite[e.id] == null &&
            b >= e.kills &&
            ((a.ignite[e.id] = t), (n = !0));
        (a.car == null && b >= r.car.kills && ((a.car = t), (n = !0)),
          a.engine == null && b >= 60 && ((a.engine = t), (n = !0)),
          n && s(),
          a.propane == null && b >= r.propane.kills && v(-1));
      }
      if (t % 15 == 0)
        for (let n of i.byType(`soldier`)) {
          if (!(n.hp > 0) || n.state & e.DEAD || (n.seat ?? -1) >= 0) continue;
          let i = Ce(r, n.pos, t);
          if (i < 0.3) continue;
          let a = Math.max(1, Math.round((30 * i) / 4));
          u(n, a, `Fire`, n.hp <= a ? f(n) : -1);
        }
      let o = xe(r, t);
      if (o?.moving)
        for (let t of i.byType(`soldier`)) {
          if (!(t.hp > 0) || t.state & e.DEAD || w.has(t.id + `:` + a.engine))
            continue;
          let n = o.chassis,
            r = o.cab,
            i = t.pos[0],
            s = t.pos[2],
            c = 0.35;
          i + c > n[0] &&
            i - c < n[3] &&
            s + c > r[2] - 0.6 &&
            s - c < n[5] &&
            t.pos[1] < 2.8 &&
            (w.add(t.id + `:` + a.engine), u(t, 999, `Fire engine`, f(t)));
        }
    },
    state: () => V(r),
    front: () => b,
    engine: () => be(r, i.time.tick),
  };
}
var Mt = 12,
  Nt = [5, 9];
function Pt(e) {
  let t = [];
  for (let n of e?.highrises ?? []) {
    let r = Math.max(n.width, n.depth) / 2,
      i = [];
    for (let e of Nt)
      for (let t = 0; t < Mt; t++) {
        let a = (t * Math.PI * 2) / Mt,
          o = r + e;
        i.push([n.x + Math.cos(a) * o, 0, n.z + Math.sin(a) * o]);
      }
    let a = (e.towerRooms ?? [])
      .filter((e) => e.buildingId === n.id)
      .flatMap((e) =>
        e.stations.map((t) => ({
          pos: t.pos.slice(),
          yaw: t.yaw,
          floorIndex: e.floorIndex,
        })),
      );
    t.push({
      id: n.id,
      name: `Tower ${+n.id.split(`-`)[1] + 1}`,
      pos: [n.x, n.base, n.z],
      floors: n.floors,
      ground: i,
      upper: a,
    });
  }
  return t;
}
var $ = new WeakMap(),
  Ft = {
    name: `demo`,
    deps: [`terrain`, `gamemodes`, `bots`],
    terrainDefinition(e) {
      return q(e)?.config ?? (e.urban ? C(R) : R);
    },
    api: {
      getDefinition() {
        return null;
      },
      getRoutes() {
        return me;
      },
      stats() {
        return {};
      },
    },
    init(n) {
      let r = n.modules.get(`terrain`);
      if (!r?.generate) {
        n.warn(`terrain.generate unavailable; demo map skipped`);
        return;
      }
      let p = n.config.initialTerrain ?? this.terrainDefinition(n.config);
      r.usesDefinition?.(n.world.seed, p) || r.generate(n.world.seed, p);
      let g = St(r.getHeight, {
        roofLinks: n.config.roofLinks !== !1,
        release: !!n.config.expandedDemolition,
        urban: !!n.config.urban,
        ...Object.fromEntries(i.map((e) => [e, !!n.config[e]])),
      });
      (g.colliderDefs.push(...ie(r.getHeightfield?.())),
        g.colliderDefs.push(...ae(r.getHeightfield?.(), g)),
        (n.world.map.visibility = g.climate?.visibility ?? null),
        (n.world.map.canopy =
          g.climate?.canopy || g.canopy ? Tt(r.getHeightfield?.()) : null),
        (n.world.map.roadDriving = !!(g.roadDriving ?? g.frost)),
        (n.world.mapId = g.id),
        (n.world.map.routes = g.routes),
        g.playBounds?.length === 4 &&
          (n.world.map.bounds = g.playBounds.slice()),
        (n.world.map.boundsCuts = g.playCuts?.map((e) => e.slice()) ?? null),
        g.floorNav
          ? (n.world.map.floorNav = g.floorNav)
          : delete n.world.map.floorNav,
        g.driveRoutes
          ? (n.world.map.driveRoutes = g.driveRoutes)
          : delete n.world.map.driveRoutes,
        Number.isFinite(g.laneDirect)
          ? (n.world.map.laneDirect = g.laneDirect)
          : delete n.world.map.laneDirect,
        Number.isFinite(g.floorLanes)
          ? (n.world.map.floorLanes = g.floorLanes)
          : delete n.world.map.floorLanes,
        delete n.world.map.spawnLevel,
        delete n.world.map.spawnBounds,
        Number.isFinite(g.spawnLevel)
          ? (n.world.map.spawnLevel = g.spawnLevel)
          : delete n.world.map.spawnLevel,
        g.spawnBounds?.length === 4
          ? (n.world.map.spawnBounds = g.spawnBounds.slice())
          : delete n.world.map.spawnBounds,
        g.noSpawn?.length
          ? (n.world.map.noSpawn = g.noSpawn.map((e) => e.slice()))
          : delete n.world.map.noSpawn,
        Number.isFinite(g.spawnRadius)
          ? (n.world.map.spawnRadius = g.spawnRadius)
          : delete n.world.map.spawnRadius,
        Number.isFinite(g.hqSafeDistance)
          ? (n.world.map.hqSafeDistance = g.hqSafeDistance)
          : delete n.world.map.hqSafeDistance,
        g.ziplines?.length
          ? (n.world.map.ziplines = g.ziplines)
          : delete n.world.map.ziplines,
        g.ladders?.length
          ? (n.world.map.ladders = g.ladders)
          : delete n.world.map.ladders,
        g.roofLinks?.length
          ? (n.world.map.roofLinks = g.roofLinks)
          : delete n.world.map.roofLinks,
        (n.world.map.homeBases = g.homeBases),
        (n.world.map.towerSpawns = Pt(g)));
      let S = [];
      for (let e of g.colliderDefs) {
        let t = a(e);
        (n.world.map.addCollider(t), S.push(t.id));
      }
      let C = g.rush ?? (n.config.mode === `rush` ? g.rushPlan : null);
      if (
        (C &&
          Number.isFinite(C.spawnRadius) &&
          (n.world.map.spawnRadius = C.spawnRadius),
        C)
      )
        n.modules.get(`gamemodes`)?.useRush?.(C);
      else if (g.ffa) n.modules.get(`gamemodes`)?.useFfa?.(g.ffa);
      else if (g.tdm) n.modules.get(`gamemodes`)?.useTdm?.(g.tdm);
      else {
        let e = new Map((n.world.match.objectives ?? []).map((e) => [e.id, e]));
        n.world.match.objectives = v(n.world, g.objectives).map((t) =>
          Object.assign(e.get(t.id) ?? {}, t),
        );
      }
      let w = n.modules.get(`gamemodes`);
      for (let e of n.world.players.values())
        e.isBot && w?.requestSpawn?.(e.id, null);
      let E = {
        layout: g,
        ids: S,
        liftSent: new Map(),
        liftSync: new Map(),
        disposeLifts: d(n.world, g.lifts),
        sky: y(x(n.config.sky)),
        planes: [],
        skyCursor: 0,
      };
      $.set(n.world, E);
      let D = () => ({ settings: E.sky, planes: E.planes });
      ((E.banner = K(n.config.banner)),
        n.events.on(`net:hello`, ({ client: e }) => {
          e &&
            E.banner &&
            n.modules
              .get(`netcode`)
              ?.sendEvent?.(e.id, `ui:banner`, { text: E.banner });
        }),
        n.events.on(`net:hello`, ({ client: e }) => {
          e &&
            E.sky.messages.length &&
            n.modules.get(`netcode`)?.sendEvent?.(e.id, `demo:sky`, D());
        }));
      let O = new WeakMap(),
        k = (e) => {
          let t = e && O.get(e);
          t && (n.world.despawn(t.id), O.delete(e));
        };
      ((E.flySky = () => {
        let e = n.world.time.tick;
        for (let t of E.planes) {
          if (!t || t.down != null) continue;
          let r = O.get(t);
          if (!r || n.world.get(r.id) !== r.entity) {
            let e = E.sky,
              i = T(e, e.messages[t.message], e.spots[t.spot]),
              a = n.world.spawn(`prop`, {
                weapon: 220,
                pos: b(i, 0),
                team: -1,
                owner: -1,
                hp: 1,
                maxHp: 1,
              });
            ((r = { id: a.id, entity: a, plan: i }), O.set(t, r));
          }
          let i = (e - t.start) / 60,
            a = b(r.plan, i),
            o = b(r.plan, i - 1),
            s = b(r.plan, i + 1);
          ((r.entity.pos = a),
            (r.entity.vel = s.map((e, t) => (e - o[t]) / 2)),
            (r.entity.yaw = Math.atan2(-r.entity.vel[0], -r.entity.vel[2])));
        }
      }),
        n.events.on(`explosion`, (e) => {
          if (e?.weaponId === 10 && Array.isArray(e.pos))
            for (let t of E.planes) {
              let r = t && O.get(t);
              if (
                !r ||
                t.down != null ||
                (e.targetId !== r.id &&
                  Math.hypot(...r.entity.pos.map((t, n) => t - e.pos[n])) > 12)
              )
                continue;
              ((t.down = n.world.time.tick), k(t));
              let i = e.attackerId == null ? null : n.world.get(e.attackerId),
                a = i ? n.world.players.get(i.owner) : null;
              a && (a.score = (a.score | 0) + 200);
              let o = n.modules.get(`netcode`);
              (o?.broadcastEvent?.(`demo:sky`, D()),
                o?.broadcastEvent?.(`demo:skyDown`, {
                  name: a?.name ?? null,
                  pos: e.pos,
                }),
                n.events.emit(`demo:skyDown`, {
                  name: a?.name ?? null,
                  pos: e.pos,
                }));
            }
        }),
        (E.scheduleSky = (e) => {
          let t = E.sky,
            r = n.world.time.tick,
            i = t.messages.length && t.spots.length ? t.concurrent : 0,
            a = !1;
          (e && (E.planes.forEach(k), (E.planes = []), (a = !0)),
            E.planes.slice(i).forEach(k),
            (E.planes.length = Math.min(E.planes.length, i)));
          for (let e = 0; e < i; e++) {
            let i = E.planes[e];
            if (
              i &&
              (i.down == null ? r < i.start + i.total * 60 : r < i.down + 2700)
            )
              continue;
            k(i);
            let o = new Set(
                E.planes.filter((t, n) => t && n !== e).map((e) => e.message),
              ),
              s = new Set(
                E.planes.filter((t, n) => t && n !== e).map((e) => e.spot),
              ),
              c,
              l;
            if (t.shuffle) {
              let e = t.messages.map((e, t) => t).filter((e) => !o.has(e)),
                r = t.spots.map((e, t) => t).filter((e) => !s.has(e)),
                a = e.length ? e : t.messages.map((e, t) => t),
                u = r.length ? r : t.spots.map((e, t) => t),
                d = () => n.rng?.next?.() ?? Math.random();
              ((c = a[Math.floor(d() * a.length)]),
                (l = u[Math.floor(d() * u.length)]),
                i &&
                  a.length > 1 &&
                  c === i.message &&
                  (c = a[(a.indexOf(c) + 1) % a.length]));
            } else
              ((c = E.skyCursor % t.messages.length),
                (l = E.skyCursor % t.spots.length),
                E.skyCursor++);
            ((E.planes[e] = {
              message: c,
              spot: l,
              start: r,
              total: T(t, t.messages[c], t.spots[l]).total,
            }),
              (a = !0));
          }
          a && n.modules.get(`netcode`)?.broadcastEvent?.(`demo:sky`, D());
        }),
        E.scheduleSky(!1),
        n.events.on(`net:rpc`, ({ client: e, rpc: t }) => {
          t?.name !== `demo:liftSync` ||
            !e ||
            !g.lifts?.length ||
            n.world.time.tick < (E.liftSync.get(e.id) ?? -1) ||
            (E.liftSync.set(e.id, n.world.time.tick + 60),
            n.modules.get(`netcode`)?.sendEvent?.(e.id, `demo:lifts`, {
              states: g.lifts.map((e) => ({
                id: e.id,
                motion: e.motion ?? null,
              })),
            }));
        }),
        g.greywaterCentre &&
          ((E.disposeTrains = ue(n.world)),
          (E.trainStrike = () => {
            for (let t of de(n.world, n.world.time.tick)) {
              if (t.state & e.IN_VEHICLE) continue;
              ((t.hp = 0), (t.state |= e.DEAD));
              let r = {
                targetId: t.id,
                attackerId: -1,
                amount: 100,
                part: `torso`,
                weapon: `Train`,
                pos: t.pos.slice(),
                headshot: !1,
                fatal: !0,
              };
              n.events.emit(`player:damage`, r);
              for (let e of n.clients?.values?.() ?? [])
                e.entityId === t.id &&
                  n.modules
                    .get(`netcode`)
                    ?.sendEvent?.(e.id, `player:damage`, r);
            }
          })));
      let A = g.meridian ?? null;
      if (((E.meridian = A), (E.disposeMeridian = Ye(n.world, A)), A)) {
        let t = () => n.modules.get(`netcode`),
          r = (e, r, i) => {
            for (let a of n.clients?.values?.() ?? [])
              a.entityId === e && t()?.sendEvent?.(a.id, r, i);
          },
          i = () => ({
            epoch: A.epoch,
            crash: A.crash,
            dark: A.dark,
            hits: [...A.hits],
            breaks: [...A.breaks],
          });
        n.events.on(`net:hello`, ({ client: e }) => {
          e && t()?.sendEvent?.(e.id, `demo:meridian`, i());
        });
        let a = new Map();
        (n.events.on(`net:rpc`, ({ client: e, rpc: r }) => {
          r?.name !== `demo:meridianSync` ||
            !e ||
            n.world.time.tick < (a.get(e.id) ?? -1) ||
            (a.set(e.id, n.world.time.tick + 60),
            t()?.sendEvent?.(e.id, `demo:meridian`, i()));
        }),
          n.events.on(`net:clientLeft`, ({ client: e }) => a.delete(e?.id)));
        let o = (e) => Math.round(e * 100) / 100,
          s = (e, r, i, a = null) => {
            let s = e.ext ? U.ext : U.int,
              c = A.hits.get(e.id) ?? 0,
              l = Math.min(99, c + r);
            A.hits.set(e.id, l);
            let u = A.breaks.get(e.id);
            (a || l >= s) &&
              (u || A.breaks.set(e.id, (u = [])),
              u.length < 30 &&
                u.push(
                  a ?? [
                    o(i.u),
                    o(i.y),
                    o(
                      u.length
                        ? 0.38 + Math.random() * 0.22
                        : (e.ext ? 1.35 : 1.1) + Math.random() * 0.5,
                    ),
                    0,
                  ],
                ));
            let d = {
              id: e.id,
              hits: l,
              point: i?.point ?? null,
              breaks: u ? u.slice() : null,
            };
            (t()?.broadcastEvent?.(`demo:meridianGlass`, d),
              n.events.emit(`demo:meridianGlass`, d));
          };
        (n.events.on(`weapon:fire`, (e) => {
          if (e?.origin && e?.dir)
            for (let t of Ze(
              A,
              e.origin,
              e.dir,
              e.dist ?? 300,
              n.world.time.tick,
            ))
              s(t.pane, t.pane.ext ? U.ext : U.int, t);
        }),
          n.events.on(`explosion`, (e) => {
            if (!Array.isArray(e?.pos)) return;
            let t = Math.max(2.5, Math.min(6, (e.radius ?? 4) * 0.8));
            for (let { pane: r, u: i, y: a, d: c } of Qe(
              A,
              e.pos,
              t,
              n.world.time.tick,
            ))
              Xe(A, r, n.world.time.tick) ||
                s(r, 0, null, [
                  o(i),
                  o(a),
                  o(Math.max(0.7, Math.min(3.4, (t - c) * 1.2 + 0.6))),
                  1,
                ]);
          }),
          (E.lastHurt = new Map()),
          n.events.on(`player:damage`, (e) => {
            e?.attackerId != null &&
              e.attackerId >= 0 &&
              e.attackerId !== e.targetId &&
              e.weapon !== `Fell` &&
              E.lastHurt.set(e.targetId, {
                attackerId: e.attackerId,
                tick: n.world.time.tick,
              });
          }));
        let c = (t, i, a = -1) => {
            ((t.hp = 0), (t.state |= e.DEAD));
            let o = {
              targetId: t.id,
              attackerId: a,
              amount: 100,
              part: `torso`,
              weapon: i,
              pos: t.pos.slice(),
              headshot: !1,
              fatal: !0,
            };
            (n.events.emit(`player:damage`, o), r(t.id, `player:damage`, o));
          },
          l = (e) => {
            let t = E.lastHurt.get(e.id);
            return t && n.world.time.tick - t.tick < 600 ? t.attackerId : -1;
          };
        E.meridianTick = () => {
          let r = n.world.time.tick,
            a = n.world.match?.phase;
          if (a !== E.meridianPhase) {
            E.meridianPhase = a;
            let e = a === `live` ? r : null;
            e !== A.epoch &&
              ((A.epoch = e),
              (A.crash = null),
              (A.dark = null),
              (a === `live` || a === `warmup`) &&
                (A.hits.clear(), A.breaks.clear()),
              t()?.broadcastEvent?.(`demo:meridian`, i()),
              n.events.emit(`demo:meridian`, i()));
          }
          if (
            A.epoch != null &&
            (A.crash == null || A.dark == null) &&
            r % 15 == 0
          ) {
            let e = n.world.match?.killLimit ?? 100,
              a = (n.world.teams ?? []).reduce(
                (t, n) => t + Math.max(0, e - (n.tickets ?? e)),
                0,
              ),
              o = !1;
            (A.crash == null && a >= A.crane.kills && ((A.crash = r), (o = !0)),
              A.dark == null &&
                a >= (A.power?.kills ?? 0) &&
                ((A.dark = r), (o = !0)),
              o &&
                (t()?.broadcastEvent?.(`demo:meridian`, i()),
                n.events.emit(`demo:meridian`, i())));
          }
          for (let { entity: t, push: i } of Je(n.world, A, r))
            t.state & e.DEAD ||
              E.swept?.has(t.id) ||
              ((E.swept ??= new Map()).set(t.id, r),
              E.lastHurt.set(t.id, { attackerId: l(t), tick: r, crane: !0 }),
              (t.vel = [i[0] * 16, 5.5, i[1] * 16]),
              (t.onGround = !1));
          if (E.swept)
            for (let [t, i] of E.swept) {
              let a = n.world.get(t);
              a &&
                a.hp > 0 &&
                !(a.state & e.DEAD) &&
                r - i === 72 &&
                a.pos[0] < A.plate.x1 &&
                a.pos[1] > A.floor - 1 &&
                c(a, `Crane`, l(a));
            }
          if (r % 3 == 0) {
            for (let t of n.world.byType(`soldier`))
              if (
                !(!(t.hp > 0) || t.state & e.DEAD || (t.seat ?? -1) >= 0) &&
                t.pos[1] < A.fallKill
              ) {
                let e = E.swept?.get(t.id);
                (c(t, e != null && r - e < 600 ? `Crane` : `Fell`, l(t)),
                  E.swept?.delete(t.id));
              }
          }
          if (r % 600 == 0 && E.swept)
            for (let [e, t] of E.swept) r - t > 900 && E.swept.delete(e);
        };
      }
      ee(n.config);
      let j = g.lindenFences ?? null;
      if (((E.disposeFences = Be(n.world, j)), j?.panels?.length)) {
        let e = ze(j),
          t = () => n.modules.get(`netcode`),
          r = () => ({ broken: [...e.broken] });
        n.events.on(`net:hello`, ({ client: e }) => {
          e && t()?.sendEvent?.(e.id, `demo:lindenFences`, r());
        });
        let i = new Map();
        (n.events.on(`net:rpc`, ({ client: e, rpc: a }) => {
          a?.name !== `demo:lindenFencesSync` ||
            !e ||
            n.world.time.tick < (i.get(e.id) ?? -1) ||
            (i.set(e.id, n.world.time.tick + 60),
            t()?.sendEvent?.(e.id, `demo:lindenFences`, r()));
        }),
          n.events.on(`net:clientLeft`, ({ client: e }) => i.delete(e?.id)));
        let a = (r, i) => {
          if (e.broken.has(r.id)) return;
          e.broken.add(r.id);
          let a = { id: r.id, why: i };
          (t()?.broadcastEvent?.(`demo:lindenFence`, a),
            n.events.emit(`demo:lindenFence`, a));
        };
        (n.events.on(`weapon:fire`, (t) => {
          if (!t?.origin || !t?.dir) return;
          let n = Ve(j, t.origin, t.dir, (t.dist ?? 300) + 0.3);
          if (!n) return;
          let r = (e.hits.get(n.id) ?? 0) + 1;
          (e.hits.set(n.id, r), r >= n.hp && a(n, `shot`));
        }),
          n.events.on(`explosion`, (e) => {
            if (Array.isArray(e?.pos))
              for (let t of H(
                j,
                e.pos,
                Math.max(2.5, Math.min(6, (e.radius ?? 4) * 0.9)),
              ))
                a(t, `blast`);
          }));
        let o = new Map();
        E.fenceTick = () => {
          let i = n.world.time.tick,
            s = n.world.match?.phase;
          if (
            (s !== E.fencePhase &&
              ((E.fencePhase = s),
              (s === `live` || s === `warmup`) &&
                (e.broken.clear(),
                e.hits.clear(),
                t()?.broadcastEvent?.(`demo:lindenFences`, r()),
                n.events.emit(`demo:lindenFences`, r()))),
            !(i % 15))
          )
            for (let e of n.world.players.values()) {
              if (!e.isBot) continue;
              let t = n.world.get(e.entityId);
              if (!t || !(t.hp > 0) || (t.seat ?? -1) >= 0) {
                o.delete(e.id);
                continue;
              }
              let r = o.get(e.id);
              if (!r || Math.hypot(t.pos[0] - r.x, t.pos[2] - r.z) > 0.35) {
                o.set(e.id, { x: t.pos[0], z: t.pos[2], n: 0 });
                continue;
              }
              if (++r.n < 2) continue;
              let i = H(j, [t.pos[0], t.pos[1] + 0.9, t.pos[2]], 0.9).find(
                (e) => !e.nest,
              );
              i && (a(i, `kick`), (r.n = 0));
            }
        };
      }
      let M = g.hangar ?? null;
      if (((E.disposeHangar = l(n.world, M)), M)) {
        let e = () => n.modules.get(`netcode`),
          t = () => ({ epoch: M.epoch, broken: [...M.broken] });
        n.events.on(`net:hello`, ({ client: n }) => {
          n && e()?.sendEvent?.(n.id, `demo:hangar`, t());
        });
        let r = new Map();
        (n.events.on(`net:rpc`, ({ client: i, rpc: a }) => {
          a?.name !== `demo:hangarSync` ||
            !i ||
            n.world.time.tick < (r.get(i.id) ?? -1) ||
            (r.set(i.id, n.world.time.tick + 60),
            e()?.sendEvent?.(i.id, `demo:hangar`, t()));
        }),
          n.events.on(`net:clientLeft`, ({ client: e }) => r.delete(e?.id)));
        let i = (t, r) => {
          if (M.broken.has(t)) return;
          M.broken.add(t);
          let i = { id: t, why: r };
          (e()?.broadcastEvent?.(`demo:hangarGlass`, i),
            n.events.emit(`demo:hangarGlass`, i));
        };
        (n.events.on(`weapon:fire`, (e) => {
          if (e?.origin && e?.dir)
            for (let t of u(
              M,
              e.origin,
              e.dir,
              e.dist ?? 300,
              n.world.time.tick,
            ))
              i(t.id, `shot`);
        }),
          n.events.on(`explosion`, (e) => {
            if (Array.isArray(e?.pos))
              for (let t of f(
                M,
                e.pos,
                Math.max(2.5, Math.min(7, (e.radius ?? 4) * 0.9)),
                n.world.time.tick,
              ))
                i(t, `blast`);
          }));
        let a = () => n.world.match?.objectives?.find((e) => e.id === M.flagB);
        E.hangarTick = () => {
          let r = n.world.time.tick,
            i = n.world.match?.phase;
          if (i !== E.hangarPhase) {
            E.hangarPhase = i;
            let a = i === `live` ? r : null;
            a !== M.epoch &&
              ((M.epoch = a),
              (i === `live` || i === `warmup`) && M.broken.clear(),
              e()?.broadcastEvent?.(`demo:hangar`, t()),
              n.events.emit(`demo:hangar`, t()));
          }
          let o = a();
          if (o) {
            let e = c(M, r);
            ((o.pos[0] = e[0]), (o.pos[1] = e[1]), (o.pos[2] = e[2]));
          }
        };
      }
      let N = g.bascule ?? null;
      if (((E.disposeBascule = ne(n.world, N, void 0, a)), N)) {
        for (let e of n.world.map.floorNav?.levels ?? []) _(n.world, e.id);
        let t = () => n.modules.get(`netcode`),
          r = () => ({ epoch: N.epoch });
        n.events.on(`net:hello`, ({ client: e }) => {
          e && t()?.sendEvent?.(e.id, `demo:bascule`, r());
        });
        let i = new Map();
        (n.events.on(`net:rpc`, ({ client: e, rpc: a }) => {
          a?.name !== `demo:basculeSync` ||
            !e ||
            n.world.time.tick < (i.get(e.id) ?? -1) ||
            (i.set(e.id, n.world.time.tick + 60),
            t()?.sendEvent?.(e.id, `demo:bascule`, r()));
        }),
          n.events.on(`net:clientLeft`, ({ client: e }) => i.delete(e?.id)));
        let a = (e, r, i) => {
            for (let a of n.clients?.values?.() ?? [])
              a.entityId === e && t()?.sendEvent?.(a.id, r, i);
          },
          o = new Map();
        n.events.on(`player:damage`, (e) => {
          e?.attackerId != null &&
            e.attackerId >= 0 &&
            e.attackerId !== e.targetId &&
            e.weapon !== `Fell` &&
            o.set(e.targetId, {
              attackerId: e.attackerId,
              tick: n.world.time.tick,
            });
        });
        let s = (t, r) => {
          ((t.hp = 0), (t.state |= e.DEAD));
          let i = {
            targetId: t.id,
            attackerId: r,
            amount: 100,
            part: `torso`,
            weapon: `Fell`,
            pos: t.pos.slice(),
            headshot: !1,
            fatal: !0,
          };
          (n.events.emit(`player:damage`, i), a(t.id, `player:damage`, i));
        };
        E.basculeTick = () => {
          let i = n.world.time.tick,
            a = n.world.match?.phase;
          if (a !== E.basculePhase) {
            E.basculePhase = a;
            let e = a === `live` ? i : null;
            e !== N.epoch &&
              ((N.epoch = e),
              t()?.broadcastEvent?.(`demo:bascule`, r()),
              n.events.emit(`demo:bascule`, r()));
          }
          if (i % 15 == 0) {
            let e = n.world.match?.objectives?.find(
              (e) => e.id === `conquest-b`,
            );
            if (e) {
              let t = te(N, i).rest;
              ((e.pos[0] = 0),
                (e.pos[2] = t ? -1.4 : 0),
                (e.pos[1] = t ? re(-1.4) : N.leaves[0].y));
            }
          }
          if (i % 3 == 0)
            for (let t of n.world.byType(`soldier`)) {
              if (
                !(t.hp > 0) ||
                t.state & e.DEAD ||
                (t.seat ?? -1) >= 0 ||
                t.pos[1] > N.fallKill
              )
                continue;
              let n = o.get(t.id);
              s(t, n && i - n.tick < 600 ? n.attackerId : -1);
            }
        };
      }
      let P = g.mesa ?? null;
      if (((E.disposeMesa = h(n.world, P)), P)) {
        let e = () => n.modules.get(`netcode`),
          t = () => ({ epoch: P.epoch, broken: [...P.broken] }),
          r = (t, r) => {
            if (P.broken.has(t)) return;
            P.broken.add(t);
            let i = { id: t, why: r };
            (e()?.broadcastEvent?.(`demo:mesaGlass`, i),
              n.events.emit(`demo:mesaGlass`, i));
          };
        (n.events.on(`weapon:fire`, (e) => {
          if (e?.origin && e?.dir)
            for (let t of o(P, e.origin, e.dir, e.dist ?? 300)) r(t.id, `shot`);
        }),
          n.events.on(`explosion`, (e) => {
            if (Array.isArray(e?.pos))
              for (let t of s(
                P,
                e.pos,
                Math.max(2.5, Math.min(7, (e.radius ?? 4) * 0.9)),
              ))
                r(t, `blast`);
          }),
          n.events.on(`net:hello`, ({ client: n }) => {
            n && e()?.sendEvent?.(n.id, `demo:mesa`, t());
          }));
        let i = new Map();
        (n.events.on(`net:rpc`, ({ client: r, rpc: a }) => {
          a?.name !== `demo:mesaSync` ||
            !r ||
            n.world.time.tick < (i.get(r.id) ?? -1) ||
            (i.set(r.id, n.world.time.tick + 60),
            e()?.sendEvent?.(r.id, `demo:mesa`, t()));
        }),
          n.events.on(`net:clientLeft`, ({ client: e }) => i.delete(e?.id)),
          (E.mesaTick = () => {
            let r = n.world.time.tick,
              i = n.world.match?.phase;
            if (i !== E.mesaPhase) {
              E.mesaPhase = i;
              let a = i === `live` ? r : null;
              a !== P.epoch &&
                ((P.epoch = a),
                (i === `live` || i === `warmup`) && P.broken.clear(),
                e()?.broadcastEvent?.(`demo:mesa`, t()),
                n.events.emit(`demo:mesa`, t()));
            }
          }));
      }
      let F = g.kepler ?? null;
      if (((E.disposeKepler = Le(n.world, F)), F)) {
        let e = () => n.modules.get(`netcode`),
          t = () => ({ epoch: F.epoch });
        n.events.on(`net:hello`, ({ client: n }) => {
          n && e()?.sendEvent?.(n.id, `demo:kepler`, t());
        });
        let r = new Map();
        (n.events.on(`net:rpc`, ({ client: i, rpc: a }) => {
          a?.name !== `demo:keplerSync` ||
            !i ||
            n.world.time.tick < (r.get(i.id) ?? -1) ||
            (r.set(i.id, n.world.time.tick + 60),
            e()?.sendEvent?.(i.id, `demo:kepler`, t()));
        }),
          n.events.on(`net:clientLeft`, ({ client: e }) => r.delete(e?.id)),
          (E.keplerTick = () => {
            let r = n.world.time.tick,
              i = n.world.match?.phase;
            if (i !== E.keplerPhase) {
              E.keplerPhase = i;
              let a = i === `live` ? r : null;
              a !== F.epoch &&
                ((F.epoch = a),
                e()?.broadcastEvent?.(`demo:kepler`, t()),
                n.events.emit(`demo:kepler`, t()));
            }
            r % 15 == 0 && (n.world.map.visibility = Math.round(Re(F, r)));
          }));
      }
      let I = g.observatory ?? null;
      if (
        ((E.disposeObservatory = ft(n.world, I)),
        (E.meteor = Et(n, I)),
        (E.ufo = gt.ENABLED ? Dt(n, I) : null),
        I)
      ) {
        let e = () => n.modules.get(`netcode`),
          t = () => ({ epoch: I.epoch, broken: [...I.broken] });
        n.events.on(`net:hello`, ({ client: n }) => {
          n && e()?.sendEvent?.(n.id, `demo:observatory`, t());
        });
        let r = new Map();
        (n.events.on(`net:rpc`, ({ client: i, rpc: a }) => {
          a?.name !== `demo:observatorySync` ||
            !i ||
            n.world.time.tick < (r.get(i.id) ?? -1) ||
            (r.set(i.id, n.world.time.tick + 60),
            e()?.sendEvent?.(i.id, `demo:observatory`, t()));
        }),
          n.events.on(`net:clientLeft`, ({ client: e }) => r.delete(e?.id)));
        let i = (t, r) => {
          if (I.broken.has(t)) return;
          I.broken.add(t);
          let i = { id: t, why: r };
          (e()?.broadcastEvent?.(`demo:observatoryGlass`, i),
            n.events.emit(`demo:observatoryGlass`, i));
        };
        (n.events.on(`weapon:fire`, (e) => {
          if (e?.origin && e?.dir)
            for (let t of pt(I, e.origin, e.dir, e.dist ?? 300))
              i(t.id, `shot`);
        }),
          n.events.on(`explosion`, (e) => {
            if (Array.isArray(e?.pos))
              for (let t of mt(
                I,
                e.pos,
                Math.max(2.5, Math.min(7, (e.radius ?? 4) * 0.9)),
              ))
                i(t, `blast`);
          }),
          (E.observatoryTick = () => {
            let r = n.world.time.tick,
              a = n.world.match?.phase;
            if (a === `live` && I.panes.length) {
              let e = lt(I, r),
                t = e ? dt(e) : null;
              if (e && r >= t && r < t + 300) {
                let e = 5 + ((r - t) / 60) * 55;
                for (let t of I.panes) {
                  let n = t.box;
                  Math.hypot((n[0] + n[3]) / 2, (n[2] + n[5]) / 2) < e &&
                    i(t.id, `ufo`);
                }
              }
            }
            if (a !== E.observatoryPhase) {
              E.observatoryPhase = a;
              let i = a === `live` ? r : null;
              i !== I.epoch &&
                ((I.epoch = i),
                (a === `live` || a === `warmup`) && I.broken.clear(),
                e()?.broadcastEvent?.(`demo:observatory`, t()),
                n.events.emit(`demo:observatory`, t()));
            }
          }));
      }
      ((E.disposeHouseFire = we(
        n.world,
        g.housefire ?? null,
        () => n.world.time.tick,
        { obbCollider: a },
      )),
        (E.houseFire = g.housefire ? jt(n, g) : null));
      let L = new Set();
      (n.events.on(`net:input`, ({ entity: e, input: r }) => {
        e &&
          (r.buttons & t.INTERACT
            ? (L.has(e.id) || m(n.world, e), L.add(e.id))
            : L.delete(e.id));
      }),
        Object.assign(this.api, {
          getDefinition() {
            return g;
          },
          getRoutes() {
            return g.routes;
          },
          getHouseFire() {
            return E.houseFire;
          },
          getSky() {
            return E.sky;
          },
          getSkyPlanes() {
            return E.planes;
          },
          getBanner() {
            return E.banner;
          },
          setBanner(e) {
            return (
              (E.banner = K(e)),
              n.modules
                .get(`netcode`)
                ?.broadcastEvent?.(`ui:banner`, { text: E.banner }),
              E.banner
            );
          },
          setSky(e) {
            return ((E.sky = y(e)), E.scheduleSky(!0), E.sky);
          },
          stats() {
            return {
              name: g.name,
              size: g.size,
              colliders: S.length,
              objects: g.objects.length,
            };
          },
        }),
        n.log(
          `${g.name} authoritative map ready: ${g.size} m, ${S.length} colliders`,
        ));
    },
    tick(e) {
      {
        let t = $.get(e.world);
        (t?.scheduleSky && e.world.time.tick % 30 == 0 && t.scheduleSky(!1),
          t?.flySky?.());
      }
      {
        let t = $.get(e.world);
        t?.trainStrike && e.world.time.tick % 2 == 0 && t.trainStrike();
      }
      if (
        ($.get(e.world)?.meridianTick?.(),
        $.get(e.world)?.fenceTick?.(),
        $.get(e.world)?.hangarTick?.(),
        $.get(e.world)?.basculeTick?.(),
        $.get(e.world)?.mesaTick?.(),
        $.get(e.world)?.keplerTick?.(),
        $.get(e.world)?.observatoryTick?.(),
        $.get(e.world)?.meteor?.tick(),
        $.get(e.world)?.ufo?.tick(),
        $.get(e.world)?.houseFire?.tick(),
        e.world.map.lifts?.length)
      ) {
        for (let t of e.world.byType(`soldier`)) p(t, e.world);
        let t = $.get(e.world),
          n = [];
        for (let r of e.world.map.lifts)
          r.motion &&
            t.liftSent.get(r.id) !== r.motion &&
            (n.push({ id: r.id, motion: r.motion }),
            t.liftSent.set(r.id, r.motion));
        n.length &&
          e.modules
            .get(`netcode`)
            ?.broadcastEvent?.(`demo:lifts`, { states: n });
      }
    },
    dispose(e) {
      let t = $.get(e.world);
      if (t) {
        (t.disposeLifts(),
          t.disposeTrains?.(),
          t.disposeMeridian?.(),
          t.disposeFences?.(),
          t.disposeHouseFire?.(),
          t.disposeHangar?.(),
          t.disposeMesa?.(),
          t.disposeKepler?.(),
          t.disposeObservatory?.(),
          t.disposeBascule?.());
        for (let n of t.ids) e.world.map.removeCollider(n);
        (delete e.world.map.routes,
          delete e.world.map.floorNav,
          delete e.world.map.driveRoutes,
          delete e.world.map.laneDirect,
          delete e.world.map.floorLanes,
          delete e.world.map.homeBases,
          delete e.world.map.noSpawn,
          delete e.world.map.ziplines,
          delete e.world.map.ladders,
          delete e.world.map.roofLinks,
          $.delete(e.world));
      }
    },
  };
export { Ft as default };
//# sourceMappingURL=server-DRBYq5K0.js.map
