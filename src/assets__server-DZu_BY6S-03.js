// assets__server-DZu_BY6S 03 — pos
// Lines 588-926 of readable/assets__server-DZu_BY6S.pretty.js (statement-aligned).
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
