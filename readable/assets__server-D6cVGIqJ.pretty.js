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
function xt(t, n) {
  let r = n.housefire;
  if (!r) return null;
  we(r);
  let i = t.world,
    a = () => t.modules.get(`netcode`),
    o = () => bt(H(r)),
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
  H(r).hitAt = p;
  let m = (e, t) => {
      let n = H(r),
        a = n.hits[e.id] ?? 0;
      return a >= 3
        ? !1
        : ((n.hits[e.id] = Math.min(3, a + t)),
          n.hits[e.id] >= 3 && (p[e.id] = i.time.tick),
          !0);
    },
    h = 0,
    g = -1;
  (t.events.on(`weapon:fire`, (e) => {
    if (!e?.origin || !e?.dir) return;
    let t = i.time.tick,
      n = !1;
    for (let { pane: i } of Ce(r, e.origin, e.dir, e.dist ?? 300, t))
      n = m(i, 3) || n;
    if (!V(r, t)) {
      let t = Te(r, e.origin, e.dir, (e.dist ?? 300) + 0.3);
      t != null &&
        t <= (e.dist ?? 300) + 0.3 &&
        (h++, (g = e.entityId ?? -1), h >= r.propane.hits && _(g));
    }
    n && s();
  }),
    t.events.on(`explosion`, (e) => {
      if (!Array.isArray(e?.pos) || e.kind === `propane`) return;
      let t = Math.max(2.5, Math.min(6, (e.radius ?? 4) * 0.8)),
        n = !1;
      for (let a of B(r, e.pos, t, i.time.tick)) n = m(a, 3) || n;
      let a = r.propane;
      (!V(r, i.time.tick) &&
        Math.hypot(e.pos[0] - a.x, e.pos[1] - a.y, e.pos[2] - a.z) < 3 &&
        _(e.attackerId ?? -1),
        n && s());
    }));
  function _(e) {
    let n = H(r),
      o = i.time.tick;
    if (n.propane != null && n.propane <= o) return;
    n.propane = o;
    let c = r.propane,
      l = [c.x, c.y + 0.4, c.z];
    for (let t of i.byType(`soldier`)) {
      let n = v(i, l, t, c.blast);
      n > 0 && u(t, n, `Propane tank`, e >= 0 && e !== t.id ? e : f(t), l);
    }
    for (let e of B(r, l, 6, o)) m(e, 3);
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
      let t = H(r);
      Object.assign(t, be(), { epoch: e, hitAt: p });
      for (let e of Object.keys(p)) delete p[e];
      ((b = 0),
        (x = i.time.tick),
        (h = 0),
        (g = -1),
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
      let a = H(r);
      if (a.epoch == null) return;
      if (t % 30 == 0 && y === `live`) {
        let e = Math.max(S(), this.forced ?? 0);
        b < e && t - x >= yt * vt && ((b = Math.min(e, b + 1)), (x = t));
        let n = !1;
        for (let e of r.rooms)
          a.ignite[e.id] == null &&
            b >= e.kills &&
            ((a.ignite[e.id] = t), (n = !0));
        (a.car == null && b >= r.car.kills && ((a.car = t), (n = !0)),
          a.engine == null && b >= 60 && ((a.engine = t), (n = !0)),
          n && s(),
          a.propane == null && b >= r.propane.kills && _(-1));
      }
      if (t % 15 == 0)
        for (let n of i.byType(`soldier`)) {
          if (!(n.hp > 0) || n.state & e.DEAD || (n.seat ?? -1) >= 0) continue;
          let i = xe(r, n.pos, t);
          if (i < 0.3) continue;
          let a = Math.max(1, Math.round((30 * i) / 4));
          u(n, a, `Fire`, n.hp <= a ? f(n) : -1);
        }
      let o = ye(r, t);
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
    state: () => H(r),
    front: () => b,
    engine: () => ve(r, i.time.tick),
  };
}
var Q = 12,
  St = [5, 9];
function Ct(e) {
  let t = [];
  for (let n of e?.highrises ?? []) {
    let r = Math.max(n.width, n.depth) / 2,
      i = [];
    for (let e of St)
      for (let t = 0; t < Q; t++) {
        let a = (t * Math.PI * 2) / Q,
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
  wt = {
    name: `demo`,
    deps: [`terrain`, `gamemodes`, `bots`],
    terrainDefinition(e) {
      return K(e)?.config ?? (e.urban ? T(z) : z);
    },
    api: {
      getDefinition() {
        return null;
      },
      getRoutes() {
        return fe;
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
      let f = n.config.initialTerrain ?? this.terrainDefinition(n.config);
      r.usesDefinition?.(n.world.seed, f) || r.generate(n.world.seed, f);
      let v = mt(r.getHeight, {
        roofLinks: n.config.roofLinks !== !1,
        release: !!n.config.expandedDemolition,
        urban: !!n.config.urban,
        ...Object.fromEntries(i.map((e) => [e, !!n.config[e]])),
      });
      (v.colliderDefs.push(...te(r.getHeightfield?.())),
        v.colliderDefs.push(...ne(r.getHeightfield?.(), v)),
        (n.world.map.visibility = v.climate?.visibility ?? null),
        (n.world.map.canopy =
          v.climate?.canopy || v.canopy ? _t(r.getHeightfield?.()) : null),
        (n.world.map.roadDriving = !!(v.roadDriving ?? v.frost)),
        (n.world.mapId = v.id),
        (n.world.map.routes = v.routes),
        v.playBounds?.length === 4 &&
          (n.world.map.bounds = v.playBounds.slice()),
        v.floorNav
          ? (n.world.map.floorNav = v.floorNav)
          : delete n.world.map.floorNav,
        v.driveRoutes
          ? (n.world.map.driveRoutes = v.driveRoutes)
          : delete n.world.map.driveRoutes,
        Number.isFinite(v.laneDirect)
          ? (n.world.map.laneDirect = v.laneDirect)
          : delete n.world.map.laneDirect,
        delete n.world.map.spawnLevel,
        delete n.world.map.spawnBounds,
        Number.isFinite(v.spawnLevel)
          ? (n.world.map.spawnLevel = v.spawnLevel)
          : delete n.world.map.spawnLevel,
        v.spawnBounds?.length === 4
          ? (n.world.map.spawnBounds = v.spawnBounds.slice())
          : delete n.world.map.spawnBounds,
        v.noSpawn?.length
          ? (n.world.map.noSpawn = v.noSpawn.map((e) => e.slice()))
          : delete n.world.map.noSpawn,
        Number.isFinite(v.spawnRadius)
          ? (n.world.map.spawnRadius = v.spawnRadius)
          : delete n.world.map.spawnRadius,
        Number.isFinite(v.hqSafeDistance)
          ? (n.world.map.hqSafeDistance = v.hqSafeDistance)
          : delete n.world.map.hqSafeDistance,
        v.ziplines?.length
          ? (n.world.map.ziplines = v.ziplines)
          : delete n.world.map.ziplines,
        v.ladders?.length
          ? (n.world.map.ladders = v.ladders)
          : delete n.world.map.ladders,
        v.roofLinks?.length
          ? (n.world.map.roofLinks = v.roofLinks)
          : delete n.world.map.roofLinks,
        (n.world.map.homeBases = v.homeBases),
        (n.world.map.towerSpawns = Ct(v)));
      let w = [];
      for (let e of v.colliderDefs) {
        let t = a(e);
        (n.world.map.addCollider(t), w.push(t.id));
      }
      if (v.rush) n.modules.get(`gamemodes`)?.useRush?.(v.rush);
      else if (v.ffa) n.modules.get(`gamemodes`)?.useFfa?.(v.ffa);
      else if (v.tdm) n.modules.get(`gamemodes`)?.useTdm?.(v.tdm);
      else {
        let e = new Map((n.world.match.objectives ?? []).map((e) => [e.id, e]));
        n.world.match.objectives = b(n.world, v.objectives).map((t) =>
          Object.assign(e.get(t.id) ?? {}, t),
        );
      }
      let T = n.modules.get(`gamemodes`);
      for (let e of n.world.players.values())
        e.isBot && T?.requestSpawn?.(e.id, null);
      let E = {
        layout: v,
        ids: w,
        liftSent: new Map(),
        liftSync: new Map(),
        disposeLifts: _(n.world, v.lifts),
        sky: x(C(n.config.sky)),
        planes: [],
        skyCursor: 0,
      };
      $.set(n.world, E);
      let O = () => ({ settings: E.sky, planes: E.planes });
      ((E.banner = G(n.config.banner)),
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
            n.modules.get(`netcode`)?.sendEvent?.(e.id, `demo:sky`, O());
        }));
      let k = new WeakMap(),
        A = (e) => {
          let t = e && k.get(e);
          t && (n.world.despawn(t.id), k.delete(e));
        };
      ((E.flySky = () => {
        let e = n.world.time.tick;
        for (let t of E.planes) {
          if (!t || t.down != null) continue;
          let r = k.get(t);
          if (!r || n.world.get(r.id) !== r.entity) {
            let e = E.sky,
              i = D(e, e.messages[t.message], e.spots[t.spot]),
              a = n.world.spawn(`prop`, {
                weapon: 220,
                pos: S(i, 0),
                team: -1,
                owner: -1,
                hp: 1,
                maxHp: 1,
              });
            ((r = { id: a.id, entity: a, plan: i }), k.set(t, r));
          }
          let i = (e - t.start) / 60,
            a = S(r.plan, i),
            o = S(r.plan, i - 1),
            s = S(r.plan, i + 1);
          ((r.entity.pos = a),
            (r.entity.vel = s.map((e, t) => (e - o[t]) / 2)),
            (r.entity.yaw = Math.atan2(-r.entity.vel[0], -r.entity.vel[2])));
        }
      }),
        n.events.on(`explosion`, (e) => {
          if (e?.weaponId === 10 && Array.isArray(e.pos))
            for (let t of E.planes) {
              let r = t && k.get(t);
              if (
                !r ||
                t.down != null ||
                (e.targetId !== r.id &&
                  Math.hypot(...r.entity.pos.map((t, n) => t - e.pos[n])) > 12)
              )
                continue;
              ((t.down = n.world.time.tick), A(t));
              let i = e.attackerId == null ? null : n.world.get(e.attackerId),
                a = i ? n.world.players.get(i.owner) : null;
              a && (a.score = (a.score | 0) + 200);
              let o = n.modules.get(`netcode`);
              (o?.broadcastEvent?.(`demo:sky`, O()),
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
          (e && (E.planes.forEach(A), (E.planes = []), (a = !0)),
            E.planes.slice(i).forEach(A),
            (E.planes.length = Math.min(E.planes.length, i)));
          for (let e = 0; e < i; e++) {
            let i = E.planes[e];
            if (
              i &&
              (i.down == null ? r < i.start + i.total * 60 : r < i.down + 2700)
            )
              continue;
            A(i);
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
              total: D(t, t.messages[c], t.spots[l]).total,
            }),
              (a = !0));
          }
          a && n.modules.get(`netcode`)?.broadcastEvent?.(`demo:sky`, O());
        }),
        E.scheduleSky(!1),
        n.events.on(`net:rpc`, ({ client: e, rpc: t }) => {
          t?.name !== `demo:liftSync` ||
            !e ||
            !v.lifts?.length ||
            n.world.time.tick < (E.liftSync.get(e.id) ?? -1) ||
            (E.liftSync.set(e.id, n.world.time.tick + 60),
            n.modules.get(`netcode`)?.sendEvent?.(e.id, `demo:lifts`, {
              states: v.lifts.map((e) => ({
                id: e.id,
                motion: e.motion ?? null,
              })),
            }));
        }),
        v.greywaterCentre &&
          ((E.disposeTrains = ce(n.world)),
          (E.trainStrike = () => {
            for (let t of le(n.world, n.world.time.tick)) {
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
      let j = v.meridian ?? null;
      if (((E.meridian = j), (E.disposeMeridian = qe(n.world, j)), j)) {
        let t = () => n.modules.get(`netcode`),
          r = (e, r, i) => {
            for (let a of n.clients?.values?.() ?? [])
              a.entityId === e && t()?.sendEvent?.(a.id, r, i);
          },
          i = () => ({
            epoch: j.epoch,
            crash: j.crash,
            dark: j.dark,
            hits: [...j.hits],
            breaks: [...j.breaks],
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
            let s = e.ext ? W.ext : W.int,
              c = j.hits.get(e.id) ?? 0,
              l = Math.min(99, c + r);
            j.hits.set(e.id, l);
            let u = j.breaks.get(e.id);
            (a || l >= s) &&
              (u || j.breaks.set(e.id, (u = [])),
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
            for (let t of Ye(
              j,
              e.origin,
              e.dir,
              e.dist ?? 300,
              n.world.time.tick,
            ))
              s(t.pane, t.pane.ext ? W.ext : W.int, t);
        }),
          n.events.on(`explosion`, (e) => {
            if (!Array.isArray(e?.pos)) return;
            let t = Math.max(2.5, Math.min(6, (e.radius ?? 4) * 0.8));
            for (let { pane: r, u: i, y: a, d: c } of Xe(
              j,
              e.pos,
              t,
              n.world.time.tick,
            ))
              Je(j, r, n.world.time.tick) ||
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
            e !== j.epoch &&
              ((j.epoch = e),
              (j.crash = null),
              (j.dark = null),
              (a === `live` || a === `warmup`) &&
                (j.hits.clear(), j.breaks.clear()),
              t()?.broadcastEvent?.(`demo:meridian`, i()),
              n.events.emit(`demo:meridian`, i()));
          }
          if (
            j.epoch != null &&
            (j.crash == null || j.dark == null) &&
            r % 15 == 0
          ) {
            let e = n.world.match?.killLimit ?? 100,
              a = (n.world.teams ?? []).reduce(
                (t, n) => t + Math.max(0, e - (n.tickets ?? e)),
                0,
              ),
              o = !1;
            (j.crash == null && a >= j.crane.kills && ((j.crash = r), (o = !0)),
              j.dark == null &&
                a >= (j.power?.kills ?? 0) &&
                ((j.dark = r), (o = !0)),
              o &&
                (t()?.broadcastEvent?.(`demo:meridian`, i()),
                n.events.emit(`demo:meridian`, i())));
          }
          for (let { entity: t, push: i } of Ke(n.world, j, r))
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
                a.pos[0] < j.plate.x1 &&
                a.pos[1] > j.floor - 1 &&
                c(a, `Crane`, l(a));
            }
          if (r % 3 == 0) {
            for (let t of n.world.byType(`soldier`))
              if (
                !(!(t.hp > 0) || t.state & e.DEAD || (t.seat ?? -1) >= 0) &&
                t.pos[1] < j.fallKill
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
      let M = v.lindenFences ?? null;
      if (((E.disposeFences = Re(n.world, M)), M?.panels?.length)) {
        let e = Le(M),
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
          let n = ze(M, t.origin, t.dir, (t.dist ?? 300) + 0.3);
          if (!n) return;
          let r = (e.hits.get(n.id) ?? 0) + 1;
          (e.hits.set(n.id, r), r >= n.hp && a(n, `shot`));
        }),
          n.events.on(`explosion`, (e) => {
            if (Array.isArray(e?.pos))
              for (let t of U(
                M,
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
              let i = U(M, [t.pos[0], t.pos[1] + 0.9, t.pos[2]], 0.9).find(
                (e) => !e.nest,
              );
              i && (a(i, `kick`), (r.n = 0));
            }
        };
      }
      let N = v.hangar ?? null;
      if (((E.disposeHangar = g(n.world, N)), N)) {
        let e = () => n.modules.get(`netcode`),
          t = () => ({ epoch: N.epoch, broken: [...N.broken] });
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
          if (N.broken.has(t)) return;
          N.broken.add(t);
          let i = { id: t, why: r };
          (e()?.broadcastEvent?.(`demo:hangarGlass`, i),
            n.events.emit(`demo:hangarGlass`, i));
        };
        (n.events.on(`weapon:fire`, (e) => {
          if (e?.origin && e?.dir)
            for (let t of h(
              N,
              e.origin,
              e.dir,
              e.dist ?? 300,
              n.world.time.tick,
            ))
              i(t.id, `shot`);
        }),
          n.events.on(`explosion`, (e) => {
            if (Array.isArray(e?.pos))
              for (let t of d(
                N,
                e.pos,
                Math.max(2.5, Math.min(7, (e.radius ?? 4) * 0.9)),
                n.world.time.tick,
              ))
                i(t, `blast`);
          }));
        let a = () => n.world.match?.objectives?.find((e) => e.id === N.flagB);
        E.hangarTick = () => {
          let r = n.world.time.tick,
            i = n.world.match?.phase;
          if (i !== E.hangarPhase) {
            E.hangarPhase = i;
            let a = i === `live` ? r : null;
            a !== N.epoch &&
              ((N.epoch = a),
              (i === `live` || i === `warmup`) && N.broken.clear(),
              e()?.broadcastEvent?.(`demo:hangar`, t()),
              n.events.emit(`demo:hangar`, t()));
          }
          let o = a();
          if (o) {
            let e = m(N, r);
            ((o.pos[0] = e[0]), (o.pos[1] = e[1]), (o.pos[2] = e[2]));
          }
        };
      }
      let P = v.bascule ?? null;
      if (((E.disposeBascule = u(n.world, P)), P)) {
        for (let e of n.world.map.floorNav?.levels ?? []) y(n.world, e.id);
        let t = () => n.modules.get(`netcode`),
          r = () => ({ epoch: P.epoch });
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
        let c = (t, r) => {
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
            e !== P.epoch &&
              ((P.epoch = e),
              t()?.broadcastEvent?.(`demo:bascule`, r()),
              n.events.emit(`demo:bascule`, r()));
          }
          if ((i % 15 == 0 && (n.world.map.routes = s(P, i)), i % 3 == 0))
            for (let t of n.world.byType(`soldier`)) {
              if (
                !(t.hp > 0) ||
                t.state & e.DEAD ||
                (t.seat ?? -1) >= 0 ||
                t.pos[1] > P.fallKill
              )
                continue;
              let n = o.get(t.id);
              c(t, n && i - n.tick < 600 ? n.attackerId : -1);
            }
        };
      }
      let F = v.mesa ?? null;
      if (((E.disposeMesa = o(n.world, F)), F)) {
        let e = () => n.modules.get(`netcode`),
          t = () => ({ epoch: F.epoch, broken: [...F.broken] }),
          r = (t, r) => {
            if (F.broken.has(t)) return;
            F.broken.add(t);
            let i = { id: t, why: r };
            (e()?.broadcastEvent?.(`demo:mesaGlass`, i),
              n.events.emit(`demo:mesaGlass`, i));
          };
        (n.events.on(`weapon:fire`, (e) => {
          if (e?.origin && e?.dir)
            for (let t of c(F, e.origin, e.dir, e.dist ?? 300)) r(t.id, `shot`);
        }),
          n.events.on(`explosion`, (e) => {
            if (Array.isArray(e?.pos))
              for (let t of l(
                F,
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
              a !== F.epoch &&
                ((F.epoch = a),
                (i === `live` || i === `warmup`) && F.broken.clear(),
                e()?.broadcastEvent?.(`demo:mesa`, t()),
                n.events.emit(`demo:mesa`, t()));
            }
          }));
      }
      let I = v.kepler ?? null;
      if (((E.disposeKepler = Fe(n.world, I)), I)) {
        let e = () => n.modules.get(`netcode`),
          t = () => ({ epoch: I.epoch });
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
              a !== I.epoch &&
                ((I.epoch = a),
                e()?.broadcastEvent?.(`demo:kepler`, t()),
                n.events.emit(`demo:kepler`, t()));
            }
            r % 15 == 0 && (n.world.map.visibility = Math.round(Ie(I, r)));
          }));
      }
      let L = v.observatory ?? null;
      if (((E.disposeObservatory = ot(n.world, L)), L)) {
        let e = () => n.modules.get(`netcode`),
          t = () => ({ epoch: L.epoch, broken: [...L.broken] });
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
          if (L.broken.has(t)) return;
          L.broken.add(t);
          let i = { id: t, why: r };
          (e()?.broadcastEvent?.(`demo:observatoryGlass`, i),
            n.events.emit(`demo:observatoryGlass`, i));
        };
        (n.events.on(`weapon:fire`, (e) => {
          if (e?.origin && e?.dir)
            for (let t of st(L, e.origin, e.dir, e.dist ?? 300))
              i(t.id, `shot`);
        }),
          n.events.on(`explosion`, (e) => {
            if (Array.isArray(e?.pos))
              for (let t of ct(
                L,
                e.pos,
                Math.max(2.5, Math.min(7, (e.radius ?? 4) * 0.9)),
              ))
                i(t, `blast`);
          }),
          (E.observatoryTick = () => {
            let r = n.world.time.tick,
              i = n.world.match?.phase;
            if (i !== E.observatoryPhase) {
              E.observatoryPhase = i;
              let a = i === `live` ? r : null;
              a !== L.epoch &&
                ((L.epoch = a),
                (i === `live` || i === `warmup`) && L.broken.clear(),
                e()?.broadcastEvent?.(`demo:observatory`, t()),
                n.events.emit(`demo:observatory`, t()));
            }
          }));
      }
      ((E.disposeHouseFire = Se(
        n.world,
        v.housefire ?? null,
        () => n.world.time.tick,
        { obbCollider: a },
      )),
        (E.houseFire = v.housefire ? xt(n, v) : null));
      let R = new Set();
      (n.events.on(`net:input`, ({ entity: e, input: r }) => {
        e &&
          (r.buttons & t.INTERACT
            ? (R.has(e.id) || p(n.world, e), R.add(e.id))
            : R.delete(e.id));
      }),
        Object.assign(this.api, {
          getDefinition() {
            return v;
          },
          getRoutes() {
            return v.routes;
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
              (E.banner = G(e)),
              n.modules
                .get(`netcode`)
                ?.broadcastEvent?.(`ui:banner`, { text: E.banner }),
              E.banner
            );
          },
          setSky(e) {
            return ((E.sky = x(e)), E.scheduleSky(!0), E.sky);
          },
          stats() {
            return {
              name: v.name,
              size: v.size,
              colliders: w.length,
              objects: v.objects.length,
            };
          },
        }),
        n.log(
          `${v.name} authoritative map ready: ${v.size} m, ${w.length} colliders`,
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
        $.get(e.world)?.houseFire?.tick(),
        e.world.map.lifts?.length)
      ) {
        for (let t of e.world.byType(`soldier`)) f(t, e.world);
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
          delete e.world.map.homeBases,
          delete e.world.map.noSpawn,
          delete e.world.map.ziplines,
          delete e.world.map.ladders,
          delete e.world.map.roofLinks,
          $.delete(e.world));
      }
    },
  };
export { wt as default };
//# sourceMappingURL=server-D6cVGIqJ.js.map
