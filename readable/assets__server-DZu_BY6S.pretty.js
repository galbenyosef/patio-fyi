/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  Jn as e,
  Kn as t,
  Qn as n,
  Yn as r,
} from "./graphics-quality-CrL3qbU3.js";
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
} from "./sim-loader-D1vnmwSZ.js";
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
function F(e, t) {
  for (let n of e.clients.values()) if (n.playerId === t) return n;
  return null;
}
function oe(e, t, n) {
  let r = this._st,
    i = t.ext.net;
  if (
    (n.version !== 57 && e.warn(`client ${t.id} protocol ${n.version} != 57`),
    !i.helloed)
  ) {
    i.helloed = !0;
    let a = e.world,
      o = r.nextPlayerId++,
      s = se(a, n.team),
      c = {
        id: o,
        name: P(n.name) || `Player${o}`,
        team: s,
        entityId: -1,
        isBot: !1,
        ping: 0,
        kills: 0,
        deaths: 0,
        score: 0,
      };
    (t.reserve && (c.reserve = !0),
      a.players.set(o, c),
      (t.playerId = o),
      (t.name = c.name));
    let l = L(e, r, c, { client: t });
    ((t.entityId = l ? l.id : -1),
      e.events.emit(`net:hello`, { client: t, player: c }),
      W(t, `net:players`, Array.from(a.players.values()).map(I)),
      G(e, `net:playerJoined`, I(c), t.id));
  }
  e.send(
    t.id,
    u({
      t: `welcome`,
      playerId: t.playerId,
      entityId: t.entityId,
      seed: e.world.seed,
      mapId: e.world.mapId,
      mode: e.world.match.mode,
      serverTick: e.world.time.tick,
      tickrate: 60,
      snapshotEvery: 3,
      team: e.world.players.get(t.playerId)?.team ?? -1,
      sim: r.sim.id,
    }),
  );
}
function I(e) {
  let t = { id: e.id, name: e.name, team: e.team, entityId: e.entityId };
  return (e.isBot && (t.isBot = !0), e.reserve && (t.reserve = !0), t);
}
function se(e, t) {
  let n = 0,
    r = 0;
  for (let t of e.players.values())
    !t.isBot && !t.reserve && (t.team === 0 ? n++ : t.team === 1 && r++);
  return t === 0 && n <= r ? 0 : t === 1 && r <= n ? 1 : n <= r ? 0 : 1;
}
function L(t, n, r, i = {}) {
  if (!r) return null;
  let a = t.world,
    o = i.spawn ?? null;
  if (!o && n.spawnProvider) {
    try {
      o = n.spawnProvider(r, a, i.client ?? null);
    } catch (e) {
      t.error(`spawn provider threw: ${e?.message ?? e}`);
    }
    if (!o) return null;
  }
  ((o ||= le(a, r)),
    r.entityId > 0 && a.get(r.entityId) && a.despawn(r.entityId));
  let s = a.spawn(`soldier`, {
    pos: o.pos,
    yaw: o.yaw ?? 0,
    team: r.team,
    owner: r.id,
    hp: 200,
    maxHp: 200,
    state: e.GROUNDED,
    ammo: i.ammo ?? 30,
    weapon: i.weapon ?? 0,
  });
  return (
    (r.entityId = s.id),
    i.client && (i.client.entityId = s.id),
    t.events.emit(`player:spawn`, {
      entityId: s.id,
      pos: s.pos.slice(),
      playerId: r.id,
      anchorId: o.anchorId ?? null,
    }),
    s
  );
}
var R = [30, 38, 46],
  z = 20,
  ce = 2.6 * 2.6;
function le(t, n) {
  let r = n.id | 0,
    i = n.team === 1 ? Math.PI : 0,
    a = R.length * z,
    o = t.byType(`soldier`);
  for (let n = 0; n < a; n++) {
    let s = (r * 7 + n) % a,
      c = R[s % R.length],
      l =
        i +
        (Math.floor(s / R.length) / z) * Math.PI -
        Math.PI / 2 +
        Math.PI / 40,
      u = Math.sin(l) * c,
      d = Math.cos(l) * c,
      f = !0;
    for (let t = 0; t < o.length; t++) {
      let n = o[t];
      if (n.state & e.DEAD) continue;
      let r = n.pos[0] - u,
        i = n.pos[2] - d;
      if (r * r + i * i < ce) {
        f = !1;
        break;
      }
    }
    if (f || n === a - 1)
      return {
        pos: [u, t.map.getHeight(u, d), d],
        yaw: Math.atan2(u, d) + Math.PI,
      };
  }
  return { pos: [0, t.map.getHeight(0, 0), 0], yaw: 0 };
}
function B(e, t, n) {
  let i = t.ext.net;
  if (i.helloed) {
    for (let e of n.inputs) {
      if (e.seq <= t.lastInputSeq) continue;
      let n = i.inputQueue,
        r = n.length;
      for (; r > 0 && n[r - 1].seq > e.seq;) r--;
      (r > 0 && n[r - 1].seq === e.seq) ||
        (n.length >= S && (n.shift(), this._st.inputsOverflow++, r > 0 && r--),
        n.splice(r, 0, e));
    }
    if (n.ackSnap > t.lastAckSnap) {
      t.lastAckSnap = n.ackSnap;
      let a = i.sendTicks.get(n.ackSnap);
      if (a != null) {
        let n = e.world.time.tick - a;
        (i.rttInit
          ? (i.rttTicks += (n - i.rttTicks) * 0.1)
          : ((i.rttTicks = n), (i.rttInit = !0)),
          (t.rtt = Math.round(i.rttTicks * r * 1e3)));
        let o = e.world.players.get(t.playerId);
        o && (o.ping = t.rtt);
      }
    }
    if (n.ackEvent > 0 && i.pendingEvents.length)
      for (; i.pendingEvents.length && i.pendingEvents[0].seq <= n.ackEvent;)
        i.pendingEvents.shift();
  }
}
function V(t, n, r, i) {
  let a = r.ext.net;
  if (!a || !a.helloed) return;
  a.tokens = Math.min(v, a.tokens + y);
  let o = a.inputQueue;
  if (!o.length) return;
  let s = r.entityId > 0 ? t.world.get(r.entityId) : null,
    l = 0,
    u = !1;
  for (; o.length && l < b && !(a.tokens < 1);) {
    if (r.lastInputSeq && o[0].seq > r.lastInputSeq + 1) {
      if (a.gapHold < C) {
        a.gapHold++;
        break;
      }
      n.inputGaps++;
    }
    a.gapHold = 0;
    let c = o.shift();
    if ((l++, a.tokens--, n.inputsProcessed++, s && !(s.state & e.IN_VEHICLE)))
      try {
        n.sim.stepPlayer(s, c, t.world, i);
      } catch (e) {
        t.error(`sim step threw for client ${r.id}: ${e?.message ?? e}`);
      }
    ((r.lastInputSeq = c.seq),
      (a.lastProcessedTick = t.world.time.tick),
      (a.clientChk = c.chk >>> 0),
      (u = !0),
      t.events.emit(`net:input`, { client: r, input: c, entity: s }));
  }
  (o.length > x &&
    ((n.inputsDropped += o.length - x), o.splice(0, o.length - x)),
    u && (a.postHash = s ? c(s) : 0));
}
function H(e, t, n) {
  let r = t.ext.net;
  r.helloed &&
    (n.seq <= r.lastRpcSeq ||
      ((r.lastRpcSeq = n.seq),
      e.events.emit(`net:rpc`, {
        client: t,
        rpc: { name: n.name, data: n.data, seq: n.seq },
      })));
}
function U(e, t, n) {
  let r = e.recCache,
    i = new Set();
  for (let e of t.sorted()) {
    i.add(e.id);
    let t = p(e),
      n = r.get(e.id);
    (!n || !ue(n, t)) && r.set(e.id, t);
  }
  if (r.size !== i.size) for (let e of r.keys()) i.has(e) || r.delete(e);
  e.recTick = n;
}
function ue(e, t) {
  for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
function de(e) {
  let t = l(e);
  return { keyHash: t.keyHash, values: t.values.slice() };
}
function fe(e, t) {
  let n = e * e + t * t;
  return n <= 22500 ? 1 : n <= k * k ? 2 : 4;
}
function pe(t, n, r, i) {
  let a = r.ext.net,
    s = t.world,
    l = n.snapId,
    d = r.lastAckSnap,
    p = d > 0 ? a.views.get(d) : null,
    h = p ? i - a.sendTicks.get(d) : 0;
  if (
    ((!p || h > ne || h < 0) && ((d = 0), (p = null), (h = 0)),
    (a.fullBudget = Math.min(A, a.fullBudget + te)),
    !p)
  ) {
    if (a.fullBudget <= 0) {
      n.fullSkipped++;
      return;
    }
    ((a.fullSent = l), n.fullSnapshots++);
  }
  let g = r.entityId > 0 ? s.get(r.entityId) : null,
    _ = g ? g.pos[0] : 0,
    v = g ? g.pos[2] : 0,
    y = new Map(),
    b = [],
    x = n.cand;
  x.length = 0;
  let S = a.prio,
    C = s.sorted(),
    w = new Set();
  for (let t of C)
    t.type === `soldier` &&
      t.state & e.IN_VEHICLE &&
      s.get(t.seat)?.type === `vehicle` &&
      (w.add(t.id), w.add(t.seat));
  let T = n.measure,
    E = 0;
  for (let e = 0; e < C.length; e++) {
    let t = C[e],
      i = n.recCache.get(t.id),
      a = p ? p.get(t.id) : void 0;
    if (!a) {
      (b.push({ id: t.id, isNew: !0, rec: i }), y.set(t.id, i));
      continue;
    }
    if (i === a) {
      y.set(t.id, a);
      continue;
    }
    if (t.id === r.entityId || w.has(t.id)) {
      let e = f(i, a);
      if (e) {
        let n = { id: t.id, isNew: !1, mask: e, rec: i, base: a };
        (b.push(n),
          y.set(t.id, i),
          S.delete(t.id),
          w.has(t.id) && (T.reset(), o(T, n, t.id - 1, h), (E += T.pos)));
      } else y.set(t.id, a);
      continue;
    }
    let s = fe(t.pos[0] - _, t.pos[2] - v),
      c = (S.get(t.id) ?? 0) + 4 / s;
    if (s > 1 && (l + t.id) % s !== 0) {
      (S.set(t.id, c), y.set(t.id, a));
      continue;
    }
    let u = f(i, a);
    if (u === 0) {
      y.set(t.id, a);
      continue;
    }
    x.push({ id: t.id, isNew: !1, mask: u, rec: i, base: a, p: c });
  }
  if (x.length) {
    x.sort((e, t) => t.p - e.p);
    for (let e = 0; e < x.length; e++) {
      let t = x[e];
      (T.reset(), o(T, t, t.id - 1, h));
      let r = T.pos;
      if (E + r > ee && E > 0) {
        (S.set(t.id, t.p), y.set(t.id, t.base), n.deferred++);
        continue;
      }
      ((E += r), b.push(t), y.set(t.id, t.rec), S.delete(t.id));
    }
    b.sort((e, t) => e.id - t.id);
  }
  let D = [];
  if (p) {
    for (let e of p.keys()) s.entities.has(e) || D.push(e);
    D.length > 1 && D.sort((e, t) => e - t);
  }
  let O = null;
  if (g) {
    let e = t.modules.get(`vehicles`)?.getMotion?.(g.id) ?? null,
      r =
        !e &&
        a.postHash !== 0 &&
        a.clientChk === a.postHash &&
        c(g) === a.postHash;
    ((O = {
      confirmed: r,
      hp: g.hp,
      ammo: g.ammo,
      weapon: g.weapon,
      seat: g.seat,
      pos: g.pos,
      vel: g.vel,
      yaw: g.yaw,
      pitch: g.pitch,
      state: g.state,
      stance: g.stance,
      ext: r ? null : de(g.ext),
      motion: e,
    }),
      r ? n.privConfirmed++ : n.privFull++);
  }
  let k = Math.min(255, Math.max(0, i - a.lastProcessedTick)),
    j = {
      t: `snapshot`,
      snapId: l,
      tick: i,
      baselineId: d,
      baseAge: h,
      lastInputSeq: r.lastInputSeq,
      inputAge: k,
      ackRpc: a.lastRpcSeq,
      localEntityId: r.entityId > 0 ? r.entityId : 0,
      removed: D,
      entities: b,
      priv: O,
    },
    M;
  try {
    M = u(j, n.writer.reset());
  } catch (e) {
    t.error(`snapshot encode failed for client ${r.id}: ${e?.message ?? e}`);
    return;
  }
  for (a.views.set(l, y), a.sendTicks.set(l, i); a.views.size > m;) {
    let e = a.views.keys().next().value;
    (a.views.delete(e), a.sendTicks.delete(e));
  }
  (p || (a.fullBudget -= M.byteLength),
    t.send(r.id, M) &&
      (n.snapshotsSent++,
      (n.bytesSnapshots += M.byteLength),
      (n.entitiesSent += b.length),
      a.snapshots++));
}
function W(e, t, n) {
  let r = e.ext.net;
  r &&
    (r.pendingEvents.push({ seq: ++r.eventSeq, name: t, data: n }),
    r.pendingEvents.length > 256 &&
      r.pendingEvents.splice(0, r.pendingEvents.length - 256),
    (r.lastEventSend = -1),
    t === `player:damage` && (r.urgent = !0));
}
function G(e, t, n, r = -1) {
  for (let i of e.clients.values())
    i.id !== r && i.ext.net && i.ext.net.helloed && W(i, t, n);
}
function K(e, t, n, r) {
  let i = n.ext.net;
  if (
    ((i.eventBudget = Math.min(
      E,
      i.eventBudget + Math.max(0, r - i.eventBudgetTick) * D,
    )),
    (i.eventBudgetTick = r),
    !i.pendingEvents.length)
  )
    return;
  let a = Math.max(w, i.rttInit ? Math.ceil(i.rttTicks * 1.25) + 3 : T),
    o = i.lastRepeatSend == null || r - i.lastRepeatSend >= a,
    s = i.pendingEvents.findIndex((e) => e.seq > i.eventSentSeq);
  if (
    (s < 0 && (s = i.pendingEvents.length),
    (s === i.pendingEvents.length && !o) ||
      (s < i.pendingEvents.length && i.eventBudget < 6))
  )
    return;
  let c = (o ? i.pendingEvents : i.pendingEvents.slice(s)).slice(0, 48),
    l = c.filter((e) => e.seq > i.eventSentSeq).length;
  try {
    let a = u({ t: `event`, events: c });
    if (a.byteLength > i.eventBudget && c.length > 1) {
      let e = 1,
        t = c.length - 1,
        n = 1,
        r;
      for (; e <= t;) {
        let a = (e + t) >>> 1,
          o = u({ t: `event`, events: c.slice(0, a) });
        o.byteLength <= i.eventBudget
          ? ((n = a), (r = o), (e = a + 1))
          : (t = a - 1);
      }
      ((c.length = n), (a = r ?? u({ t: `event`, events: c })));
    }
    let o = c.filter((e) => e.seq > i.eventSentSeq).length,
      s = l ? Math.round((a.byteLength * o) / c.length) : 0;
    if (s > i.eventBudget && i.eventBudget < E) return;
    ((i.lastEventSend = r),
      c.length > o && (i.lastRepeatSend = r),
      e.send(n.id, a) &&
        ((i.eventBudget -= s),
        (t.eventsSent += c.length),
        o && (i.eventSentSeq = c[c.length - 1].seq)));
  } catch (t) {
    (e.error(`event encode failed: ${t?.message ?? t}`),
      i.pendingEvents.splice(0, c.length));
  }
}
function me(e, t, n) {
  let r = [];
  for (let e of t.players.values())
    r.push({
      id: e.id,
      kills: e.kills | 0,
      deaths: e.deaths | 0,
      score: e.score | 0,
      ping: e.ping | 0,
      team: e.team,
      entityId: e.entityId > 0 ? e.entityId : 0,
    });
  let i = [`warmup`, `live`, `ended`].indexOf(t.match.phase),
    a;
  try {
    a = u({
      t: `scores`,
      tick: n,
      tickets: [t.teams[0]?.tickets ?? 0, t.teams[1]?.tickets ?? 0],
      phase: i < 0 ? 0 : i,
      timeLeft: Math.max(0, Math.min(65535, Math.round(t.match.timeLeft || 0))),
      players: r,
    });
  } catch (t) {
    e.error(`scores encode failed: ${t?.message ?? t}`);
    return;
  }
  for (let t of e.clients.values())
    t.ext.net && t.ext.net.helloed && e.send(t.id, a);
}
function q(e) {
  return (((e % h) + h) % h) * g;
}
function J(e, t, n) {
  let r = e.history.get(t.id);
  (r ||
    ((r = { buf: new Float64Array(420), oldest: n, newest: n - 1 }),
    e.history.set(t.id, r)),
    n !== r.newest + 1 && (r.oldest = n));
  let i = q(n),
    a = r.buf;
  ((a[i] = n),
    (a[i + 1] = t.pos[0]),
    (a[i + 2] = t.pos[1]),
    (a[i + 3] = t.pos[2]),
    (a[i + 4] = t.yaw),
    (a[i + 5] = t.pitch),
    (a[i + 6] = t.stance),
    (r.newest = n),
    r.newest - r.oldest >= h && (r.oldest = r.newest - h + 1));
}
function Y(e, t) {
  return {
    tick: e.buf[t],
    pos: [e.buf[t + 1], e.buf[t + 2], e.buf[t + 3]],
    yaw: e.buf[t + 4],
    pitch: e.buf[t + 5],
    stance: e.buf[t + 6],
  };
}
function X(e, t, n) {
  let r = e.history.get(t);
  if (!r || r.newest < r.oldest) return null;
  let i = n < r.oldest ? r.oldest : n > r.newest ? r.newest : +n,
    a = Math.floor(i),
    o = i - a,
    s = q(a);
  if (r.buf[s] !== a) return null;
  if (o < 1e-9 || a + 1 > r.newest) return Y(r, s);
  let c = q(a + 1);
  if (r.buf[c] !== a + 1) return Y(r, s);
  let l = r.buf,
    u = l[c + 4] - l[s + 4];
  for (; u > Math.PI;) u -= Math.PI * 2;
  for (; u < -Math.PI;) u += Math.PI * 2;
  return {
    tick: i,
    pos: [
      l[s + 1] + (l[c + 1] - l[s + 1]) * o,
      l[s + 2] + (l[c + 2] - l[s + 2]) * o,
      l[s + 3] + (l[c + 3] - l[s + 3]) * o,
    ],
    yaw: l[s + 4] + u * o,
    pitch: l[s + 5] + (l[c + 5] - l[s + 5]) * o,
    stance: o < 0.5 ? l[s + 6] : l[c + 6],
  };
}
function Z(e, t, n) {
  t.rewound && Q(t);
  let r = e.world.time.tick,
    i = Math.max(r - _, Math.min(r, Number.isFinite(+n) ? +n : r)),
    a = [];
  for (let n of e.world.sorted()) {
    if (n.type !== `soldier`) continue;
    let e = X(t, n.id, i);
    e &&
      (a.push({
        e: n,
        pos: [n.pos[0], n.pos[1], n.pos[2]],
        yaw: n.yaw,
        pitch: n.pitch,
        stance: n.stance,
      }),
      (n.pos[0] = e.pos[0]),
      (n.pos[1] = e.pos[1]),
      (n.pos[2] = e.pos[2]),
      (n.yaw = e.yaw),
      (n.pitch = e.pitch),
      (n.stance = e.stance));
  }
  return ((t.rewound = { tick: i, saved: a }), i);
}
function Q(e) {
  let t = e.rewound;
  if (!t) return !1;
  for (let e of t.saved) {
    let t = e.e;
    ((t.pos[0] = e.pos[0]),
      (t.pos[1] = e.pos[1]),
      (t.pos[2] = e.pos[2]),
      (t.yaw = e.yaw),
      (t.pitch = e.pitch),
      (t.stance = e.stance));
  }
  return ((e.rewound = null), !0);
}
function he(t, r, i) {
  let a = t.world,
    o = r.rng.fork(`walkers`),
    s = r.walkerArea,
    c = Math.max(1, r.squadSize | 0),
    l = Math.max(1, Math.ceil(i / c)),
    u = Math.PI * (3 - Math.sqrt(5));
  for (let t = 0; t < i; t++) {
    let i = r.nextPlayerId++,
      d = t % 2,
      f = Math.floor(t / c),
      p = {
        id: i,
        name: `Walker ${String(t + 1).padStart(3, `0`)}`,
        team: d,
        entityId: -1,
        isBot: !0,
        ping: 0,
        kills: 0,
        deaths: 0,
        score: 0,
      };
    a.players.set(i, p);
    let m = Math.sqrt(f / Math.max(1, l - 1)) * Math.max(10, s - N * 0.6),
      h = f * u,
      g = [Math.cos(h) * m, Math.sin(h) * m],
      _ = {
        rng: o.fork(`w${t}`),
        anchor: g,
        target: [0, 0],
        pause: 0,
        sprint: !1,
        input: n(),
        yaw: 0,
      };
    _.pause = _.rng.int(0, 90);
    let v = g[0] + _.rng.range(-11, N * 0.5),
      y = g[1] + _.rng.range(-11, N * 0.5),
      b = a.spawn(`soldier`, {
        pos: [v, a.map.getHeight(v, y), y],
        yaw: _.rng.range(-Math.PI, Math.PI),
        team: d,
        owner: i,
        hp: 200,
        maxHp: 200,
        state: e.GROUNDED,
        ammo: 30,
      });
    ((p.entityId = b.id), (_.yaw = b.yaw), $(_, s), r.walkers.set(b.id, _));
  }
  t.log(
    `spawned ${i} walker soldiers (bots module absent) in ${l} squads, area +/-${s} m`,
  );
}
function $(e, t) {
  let n = e.rng.range(2, N),
    r = e.rng.range(-Math.PI, Math.PI),
    i = (e) => (e < -t ? -t : e > t ? t : e);
  ((e.target[0] = i(e.anchor[0] + Math.cos(r) * n)),
    (e.target[1] = i(e.anchor[1] + Math.sin(r) * n)),
    (e.sprint = e.rng.chance(0.25)));
}
function ge(n, r, i) {
  let a = n.world,
    o = r.walkerArea;
  for (let [s, c] of r.walkers) {
    let l = a.get(s);
    if (!l) {
      r.walkers.delete(s);
      continue;
    }
    let u = c.input;
    if ((u.seq++, (u.tick = a.time.tick), l.state & e.DEAD)) {
      ((u.mx = 0), (u.mz = 0), (u.buttons = 0), r.sim.stepPlayer(l, u, a, i));
      continue;
    }
    let d = c.target[0] - l.pos[0],
      f = c.target[1] - l.pos[2],
      p = Math.sqrt(d * d + f * f);
    if (c.pause > 0)
      (c.pause--,
        (u.mz = 0),
        (u.mx = 0),
        (u.buttons = 0),
        c.pause === 1 && (c.yaw += c.rng.range(-0.6, 0.6)));
    else if (p < 1.5)
      ($(c, o),
        (c.pause = c.rng.int(30, 240)),
        (u.mz = 0),
        (u.mx = 0),
        (u.buttons = 0));
    else {
      let e = Math.atan2(-d, -f) - c.yaw;
      for (; e > Math.PI;) e -= Math.PI * 2;
      for (; e < -Math.PI;) e += Math.PI * 2;
      let n = 2.5 * i;
      ((c.yaw += e > n ? n : e < -n ? -n : e),
        (u.mz = Math.abs(e) < 1.2 ? 1 : 0.3),
        (u.mx = 0),
        (u.buttons = c.sprint ? t.SPRINT : 0),
        c.rng.chance(0.002) && (u.buttons |= t.JUMP));
    }
    ((u.yaw = c.yaw), (u.pitch = 0));
    try {
      r.sim.stepPlayer(l, u, a, i);
    } catch (e) {
      (n.error(`walker sim threw: ${e?.message ?? e}`), r.walkers.delete(s));
    }
  }
}
export { ie as default };
//# sourceMappingURL=server-DZu_BY6S.js.map
