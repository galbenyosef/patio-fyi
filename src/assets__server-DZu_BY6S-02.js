// assets__server-DZu_BY6S 02 — entityid
// Lines 351-587 of readable/assets__server-DZu_BY6S.pretty.js (statement-aligned).
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
