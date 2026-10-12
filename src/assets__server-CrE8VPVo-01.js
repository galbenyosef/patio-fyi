// assets__server-CrE8VPVo 01 — clients
// Lines 1-350 of readable/assets__server-CrE8VPVo.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  Gn as e,
  Kn as t,
  Un as n,
  Yn as r,
} from "./graphics-quality-BsjABS0s.js";
import {
  _ as i,
  a,
  b as o,
  c as s,
  g as c,
  h as l,
  m as u,
  n as d,
  p as f,
  y as p,
} from "./sim-loader-D7voNPuy.js";
import "./shared-DPd8kRBt.js";
var m = 64,
  h = 60,
  g = 7,
  _ = 24,
  v = 30,
  y = 1.01,
  b = 8,
  x = 24,
  S = 128,
  C = 2,
  w = 6,
  T = 24,
  E = 8e3,
  D = 250,
  O = 600,
  k = 400,
  ee = 860,
  A = 12e3,
  te = 240,
  ne = 255,
  j = 600,
  M = 150,
  re = 8,
  N = 22,
  ie = {
    name: `netcode`,
    deps: [],
    async init(e) {
      let t = (this._st = {
        sim: null,
        spawnProvider: null,
        nextPlayerId: 1,
        snapId: 0,
        walkersSpawned: !1,
        walkerArea: e.config.walkerArea ?? M,
        walkers: new Map(),
        history: new Map(),
        rewound: null,
        recCache: new Map(),
        recTick: -1,
        writer: new a(8192),
        measure: new a(256),
        rng: e.rng.fork(`netcode`),
        cand: [],
        eventsSent: 0,
        snapshotsSent: 0,
        bytesSnapshots: 0,
        fullSnapshots: 0,
        deferred: 0,
        inputsProcessed: 0,
        inputsDropped: 0,
        inputsOverflow: 0,
        entitiesSent: 0,
        fullSkipped: 0,
        privConfirmed: 0,
        privFull: 0,
        leakedRewinds: 0,
        inputGaps: 0,
        squadSize: e.config.squadSize ?? re,
      });
      ((t.sim = await d(e)),
        e.log(
          `sim source: ${t.sim.source}${t.sim.reason ? ` (${t.sim.reason})` : ``}`,
        ),
        e.events.on(`world:despawn`, ({ id: e }) => {
          (t.history.delete(e), t.walkers.delete(e));
        }),
        Object.assign(this.api, ae(e, t)));
    },
    onConnect(e, t) {
      t.ext.net = {
        helloed: !1,
        inputQueue: [],
        tokens: v,
        lastProcessedTick: 0,
        views: new Map(),
        sendTicks: new Map(),
        prio: new Map(),
        pendingEvents: [],
        eventSeq: 0,
        lastEventSend: -1e3,
        lastRpcSeq: 0,
        rttTicks: 0,
        rttInit: !1,
        snapshots: 0,
        fullSent: 0,
        fullBudget: A,
        clientChk: 0,
        postHash: 0,
        gapHold: 0,
        eventBudget: E,
        eventBudgetTick: e.world.time.tick,
        eventSentSeq: 0,
      };
    },
    onDisconnect(e, t) {
      (t.entityId > 0 && e.world.get(t.entityId) && e.world.despawn(t.entityId),
        t.playerId > 0 &&
          (e.world.players.delete(t.playerId),
          G(e, `net:playerLeft`, { id: t.playerId }, t.id)),
        e.events.emit(`net:disconnected`, { client: t }),
        (t.ext.net = null));
    },
    onMessage(e, t, n) {
      if (!t.ext.net || i(n) === 8) return;
      let r;
      try {
        r = s(n);
      } catch (r) {
        e.warn(`bad packet from client ${t.id} (type ${i(n)}): ${r.message}`);
        return;
      }
      switch (r.t) {
        case `hello`:
          oe.call(this, e, t, r);
          break;
        case `input`:
          B.call(this, e, t, r);
          break;
        case `rpc`:
          H.call(this, e, t, r);
          break;
        default:
          e.warn(`unexpected message '${r.t}' from client ${t.id}`);
      }
    },
    tick(e, t) {
      let n = this._st,
        r = e.world,
        i = r.time.tick;
      (n.rewound && (n.leakedRewinds++, Q(n)),
        n.walkersSpawned ||
          ((n.walkersSpawned = !0),
          !e.modules.get(`bots`) &&
            (e.config.bots | 0) > 0 &&
            he(e, n, e.config.bots | 0)));
      for (let r of e.clients.values()) V(e, n, r, t);
      n.walkers.size && ge(e, n, t);
      for (let e of r.sorted()) e.type === `soldier` && J(n, e, i);
      if (i % 3 != 0)
        for (let t of e.clients.values()) {
          let r = t.ext.net;
          r && r.helloed && r.urgent && ((r.urgent = !1), K(e, n, t, i));
        }
      if (i % 3 == 0) {
        (n.snapId++, U(n, r, i));
        for (let t of e.clients.values()) {
          let r = t.ext.net;
          r && r.helloed && (pe(e, n, t, i), K(e, n, t, i));
        }
      }
      if (
        (i % O === 0 && e.clients.size && me(e, r, i),
        i % j === 0 && e.clients.size)
      ) {
        let t = n.snapshotsSent
          ? Math.round(n.bytesSnapshots / n.snapshotsSent)
          : 0;
        e.log(
          `diag tick=${i} clients=${e.clients.size} entities=${r.entities.size} snapshots=${n.snapshotsSent} avgBytes=${t} full=${n.fullSnapshots} fullSkipped=${n.fullSkipped} entSent=${n.entitiesSent} deferred=${n.deferred} inputs=${n.inputsProcessed} dropped=${n.inputsDropped} overflow=${n.inputsOverflow} privOk=${n.privConfirmed} privFull=${n.privFull} leaked=${n.leakedRewinds} gaps=${n.inputGaps || 0}`,
        );
      }
    },
    dispose() {
      this._st = null;
    },
    api: {
      setSpawnProvider() {},
      getSpawnProvider() {
        return null;
      },
      spawnSoldierFor() {
        return null;
      },
      getHistory() {
        return null;
      },
      rewindTo() {
        return 0;
      },
      restore() {
        return !1;
      },
      isRewound() {
        return !1;
      },
      withRewind(e, t) {
        return typeof t == `function` ? t(e) : null;
      },
      sendEvent() {},
      broadcastEvent() {},
      getClientByEntity() {
        return null;
      },
      getClientByPlayer() {
        return null;
      },
      getRtt() {
        return 0;
      },
      setWalkerArea() {},
      setSquadSize() {},
      getSimSource() {
        return `fallback`;
      },
      claimPlayer() {
        return null;
      },
      releasePlayer() {
        return !1;
      },
      stats() {
        return {};
      },
    },
  };
function ae(e, t) {
  return {
    setSpawnProvider(e) {
      t.spawnProvider = typeof e == `function` ? e : null;
    },
    getSpawnProvider() {
      return t.spawnProvider;
    },
    spawnSoldierFor(n, r = {}) {
      let i = e.world.players.get(n),
        a = i ? F(e, n) : null;
      return L(e, t, i, { ...r, client: a ?? r.client ?? null });
    },
    getHistory(e, n) {
      return X(t, e, n);
    },
    rewindTo(n) {
      return Z(e, t, n);
    },
    restore() {
      return Q(t);
    },
    isRewound() {
      return !!t.rewound;
    },
    withRewind(n, r) {
      let i = Z(e, t, n);
      try {
        return r(i);
      } finally {
        Q(t);
      }
    },
    sendEvent(t, n, r) {
      let i = e.clients.get(t);
      i && i.ext.net && W(i, n, r);
    },
    broadcastEvent(t, n, r = -1) {
      G(e, t, n, r);
    },
    getClientByEntity(t) {
      for (let n of e.clients.values()) if (n.entityId === t) return n;
      return null;
    },
    getClientByPlayer(t) {
      return F(e, t);
    },
    getRtt(t) {
      return e.clients.get(t)?.rtt ?? 0;
    },
    setWalkerArea(e) {
      t.walkerArea = Math.max(5, +e || M);
    },
    setSquadSize(e) {
      t.squadSize = Math.max(1, e | 0);
    },
    claimPlayer(t, n) {
      let r = e.clients.get(t),
        i = r && e.world.players.get(r.playerId);
      if (!i) return null;
      let a = P(n);
      a && ((i.name = a), (r.name = a));
      let o = !!i.reserve;
      return (
        (i.reserve = !1),
        o && e.events.emit(`net:claimed`, { client: r, player: i }),
        G(e, `net:playerJoined`, { ...I(i), reserve: !1 }),
        W(r, `net:claimed`, { name: i.name, team: i.team }),
        i
      );
    },
    releasePlayer(t) {
      let n = e.clients.get(t),
        r = n && e.world.players.get(n.playerId);
      return !r || r.reserve || (r.entityId > 0 && e.world.get(r.entityId))
        ? !1
        : ((r.reserve = !0),
          G(e, `net:playerJoined`, I(r)),
          e.events.emit(`net:released`, { client: n, player: r }),
          W(n, `net:released`, {}),
          !0);
    },
    getSimSource() {
      return t.sim?.source ?? `fallback`;
    },
    stats() {
      return {
        snapshotsSent: t.snapshotsSent,
        snapshotBytes: t.bytesSnapshots,
        fullSnapshots: t.fullSnapshots,
        fullSkipped: t.fullSkipped,
        entitiesSent: t.entitiesSent,
        deferred: t.deferred,
        eventsSent: t.eventsSent,
        inputsProcessed: t.inputsProcessed,
        inputsDropped: t.inputsDropped,
        inputsOverflow: t.inputsOverflow,
        privConfirmed: t.privConfirmed,
        privFull: t.privFull,
        leakedRewinds: t.leakedRewinds,
        walkers: t.walkers.size,
        snapId: t.snapId,
      };
    },
  };
}
var P = (e) =>
  typeof e == `string`
    ? e
        .replace(/[\p{Cc}\p{Cf}\p{Zl}\p{Zp}<>]/gu, ` `)
        .replace(/\s+/g, ` `)
        .trim()
        .slice(0, 24)
    : ``;
