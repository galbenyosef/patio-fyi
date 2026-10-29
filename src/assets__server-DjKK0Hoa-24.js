// assets__server-DjKK0Hoa 24 — pos
// Lines 7165-7495 of readable/assets__server-DjKK0Hoa.pretty.js (statement-aligned).
function qa(t, n, r, i, a, o) {
  let s = n.teamSpots?.[r.team];
  if (!s) return -1;
  let c = null,
    l = 1 / 0;
  for (let [n, u] of s) {
    let d = t.world.get(n);
    if (
      u < a ||
      !d ||
      d.hp <= 0 ||
      d.state & e.DEAD ||
      (d.team === r.team && !C(t.world))
    ) {
      s.delete(n);
      continue;
    }
    if (d.type !== `soldier` || d.state & e.IN_VEHICLE) continue;
    let f = Math.hypot(d.pos[0] - i.pos[0], d.pos[2] - i.pos[2]);
    f <= o && f < l && ((c = d), (l = f));
  }
  return c?.id ?? -1;
}
var Ja = (e, t) => {
    if (C(e.world)) return `solo-${t.playerId}`;
    let n = O(e.world, t.playerId);
    return n ? `squad-${n.id}` : t.squadId;
  },
  Ya = 90;
function Xa(e, t, n) {
  if (n.role === `sentinel`) return null;
  let r = O(e.world, n.playerId);
  if (!r || r.leaderId === n.playerId) return null;
  let i = e.world.players.get(r.leaderId);
  if (!i) return null;
  let a = (e.world.match.objectives || []).filter((t) => qe(e.world, t));
  if (!i.isBot) {
    let t = e.world.get(i.entityId);
    if (!B(t)) return null;
    let n = null,
      r = 1 / 0;
    for (let e of a) {
      let i = Math.hypot(e.pos[0] - t.pos[0], e.pos[2] - t.pos[2]);
      i < r && ((n = e), (r = i));
    }
    return n;
  }
  if (n.role === `flanker`) return null;
  let o = t.bots.get(i.id);
  return o?.objectiveId
    ? (a.find((e) => e.id === o.objectiveId) ?? null)
    : null;
}
function Za(e, t, n, r, i, a) {
  let o = qa(e, t, n, r, i, a);
  if (o > 0) return o;
  let s = Ja(e, n),
    c = t.contacts.get(s);
  return !c || c.expires < i ? (c && t.contacts.delete(s), -1) : c.entityId;
}
var Qa = 18,
  $a = 240,
  eo = (e, t, n) =>
    e.pressing?.id === t && e.pressing.hits >= 2 && n - e.pressing.tick < $a,
  to = 60,
  no = 180;
function ro(e, t, n, r, i, a) {
  let o = Za(e, t, n, r, i, a),
    s = t.contacts.get(Ja(e, n));
  s &&
    s.expires >= i &&
    n.reportSeen !== s &&
    Math.hypot(s.pos[0] - r.pos[0], s.pos[2] - r.pos[2]) <= Ya &&
    (_n(
      n,
      { id: s.entityId, pos: s.pos, source: `report`, ttl: s.expires - i },
      i,
    ),
    (n.reportSeen = s));
  for (let [a, o] of t.teamSpots[n.team] ?? []) {
    let t = e.world.get(a);
    o > i &&
      B(t) &&
      w(e.world, r, t) &&
      _n(n, { id: a, pos: t.pos, source: `spot`, ttl: o - i }, i);
  }
  let c =
      !n.visible && n.targetId > 0 && i - n.lastSeenTick < $.holdTicks
        ? n.targetId
        : -1,
    l = C(e.world) ? null : Ai(t, n.team, i),
    u = $i(e.world, n, r, {
      range: a,
      preferId: o,
      currentId: n.visible ? n.targetId : -1,
      holdId: c,
      danger: l,
    }),
    d = n.targetId;
  if (u) {
    if (d === u.id && !n.visible && i - n.lastSeenTick > Qa) {
      ((n.acquireTick = i), (n.burstLeft = 0), lt(n));
      let e = i - n.lastSeenTick < no ? 0.45 : 0.7;
      n.reactionTicks = Math.max(
        5,
        Math.round(n.rng.int(R.reactionMinTicks, R.reactionMaxTicks) * e),
      );
    }
    if (
      ((n.visible = !0),
      (n.lastSeenTick = i),
      (n.chase = null),
      (n.observedContact = {
        pos: u.pos.slice(),
        expires: i + R.contactMemoryTicks,
      }),
      (n.sightedPose = {
        pos: u.pos.slice(),
        vel: u.vel.slice(),
        yaw: u.yaw,
        pitch: u.pitch,
        stance: u.stance,
        bs: u.bs,
      }),
      _n(n, { id: u.id, ...n.sightedPose, source: `sight` }, i),
      (n.searchedContact = null),
      (n.searchStep = 0),
      d !== u.id)
    ) {
      let e = d > 0 && i - n.lastSeenTick < to;
      ((n.targetId = u.id),
        (n.acquireTick = i),
        (n.reactionTicks = Math.max(
          5,
          Math.round(
            n.rng.int(R.reactionMinTicks, R.reactionMaxTicks) * (e ? 0.65 : 1),
          ),
        )),
        (n.burstLeft = 0),
        lt(n),
        (n.hipPref = n.rng.chance(0.55)),
        (n.pushDue = i + n.rng.int(30, 120)),
        t.stats.acquisitions++);
    }
    t.contacts.set(Ja(e, n), {
      entityId: u.id,
      pos: u.pos.slice(),
      observedTick: i,
      source: `sight`,
      expires: i + R.contactMemoryTicks,
    });
  } else {
    if (n.visible && n.targetId > 0 && n.observedContact) {
      let e = eo(n, n.targetId, i);
      ((n.chase = {
        id: n.targetId,
        pos: n.observedContact.pos.slice(),
        until: i + (e ? 600 : 420),
        any: e,
      }),
        e && (t.stats.presses = (t.stats.presses ?? 0) + 1));
    }
    ((n.visible = !1),
      i - n.lastSeenTick > R.contactMemoryTicks &&
        ((n.targetId = -1), (n.acquireTick = -1), (n.burstLeft = 0)));
  }
}
function io(e, n, r, i, a) {
  let o = e.world.match;
  o.mode === `rush` &&
    r?.kind === `mcom` &&
    r.state !== `destroyed` &&
    (Math.hypot(r.pos[0] - n.pos[0], r.pos[2] - n.pos[2]) > r.radius - 0.3 ||
      Math.abs(r.pos[1] - n.pos[1]) > 2.5 ||
      (n.team === o.attackers ? r.state !== `idle` : r.state !== `armed`) ||
      ((a.buttons |= t.INTERACT), (a.mx = 0), (a.mz = 0)));
}
function ao(e, t, n) {
  let r =
      n.lane ??
      (Math.abs(n.pos[2]) < 25 ? `main` : n.pos[2] < 0 ? `north` : `south`),
    i = n.lanes;
  if (!i?.length || (e.match.mode === `rush` && t.team !== e.match.attackers))
    return r;
  let a = e.get(e.players.get(t.playerId)?.entityId),
    o = (t) => {
      let n = e.map.routes?.[t];
      return !n || n.length < 2
        ? !1
        : !a ||
            n[0].length < 3 ||
            a.pos[1] >= n[0][2] - 3 ||
            n.some((e) => Math.abs(e[2] - a.pos[1]) < 5.5 && Ha(e, a.pos) < 30);
    };
  if (t.laneObjective === n.id && i.includes(t.lane) && o(t.lane))
    return t.lane;
  t.laneObjective = n.id;
  for (let e = 0; e < i.length; e++) {
    let n = i[(Math.floor(t.index / 2) + (t.spawnSerial | 0) + e) % i.length];
    if (o(n)) return n;
  }
  return r;
}
function oo(e, t, n, r) {
  if (C(e.world) || e.world.match.mode === `tdm`) {
    let i = e.world.match.roam?.find((e) => e.id === n.objectiveId);
    i &&
      ((Math.hypot(i.pos[0] - n.lastPos[0], i.pos[2] - n.lastPos[2]) < 4 &&
        (!i.level || Math.abs(i.pos[1] - n.lastPos[1]) < 1.6)) ||
        r - (n.roamSince ?? r) > (i.level ? 9e3 : 3600) ||
        (e.world.map.roamOk && !e.world.map.roamOk(n.lastPos, i))) &&
      (n.roamStep = (n.roamStep | 0) + 1);
    let a = e.modules.get(`gamemodes`)?.roamFor?.(n);
    (a && a.id !== n.objectiveId && (n.roamSince = r),
      a && !n.perch && (n.lane = a.lane ?? `main`),
      a &&
        a.id !== n.objectiveId &&
        (t.trace?.(`objective`, n, {
          from: n.objectiveId,
          to: a.id,
          why: `roam`,
        }),
        (n.objectiveId = a.id),
        (n.lane = a.lane ?? `main`),
        t.stats.objectiveAssignments++));
    return;
  }
  let i = O(e.world, n.playerId),
    a = i?.order;
  if (a) {
    let r = D(e.world, i);
    if (r) {
      (r.id !== n.objectiveId &&
        t.trace?.(`objective`, n, {
          from: n.objectiveId,
          to: r.id,
          why: `order:` + a.kind,
        }),
        (n.objectiveId = r.id),
        (n.lane = ao(e.world, n, r)));
      return;
    }
  }
  if (n.rejoin) {
    let i =
      r < n.rejoin.until &&
      e.world.match.objectives.find(
        (t) => t.id === n.rejoin.id && qe(e.world, t),
      );
    if (i) {
      (i.id !== n.objectiveId &&
        t.trace?.(`objective`, n, {
          from: n.objectiveId,
          to: i.id,
          why: `rejoin`,
        }),
        (n.objectiveId = i.id),
        (n.lane = ao(e.world, n, i)));
      return;
    }
    ((n.rejoin = null), (n.objectiveDue = r));
  }
  if ((r + n.index) % 30 == 0) {
    let t = e.world.match.objectives.find((e) => e.id === n.objectiveId);
    if (
      t &&
      Math.hypot(t.pos[0] - n.lastPos[0], t.pos[2] - n.lastPos[2]) < 20
    ) {
      let r = Xe(t, n, [0, 0, 0]),
        i = e.world.get(n.entityId);
      e.world
        .byType(`soldier`)
        .some(
          (e) =>
            e !== i &&
            e.team === n.team &&
            B(e) &&
            Math.hypot(e.pos[0] - r[0], e.pos[2] - r[2]) < 2.4,
        ) && (n.ringShift = ((n.ringShift ?? 0) + 0.17) % 1);
    }
  }
  if (
    r < n.objectiveDue &&
    e.world.match.objectives.some(
      (t) => t.id === n.objectiveId && qe(e.world, t),
    )
  )
    return;
  n.objectiveDue = r + R.objectiveThinkEvery + (n.index % 13);
  let o = t.trace ? {} : void 0,
    s = Ye(e.world, n, so(e, t, n), o),
    c =
      (!(
        s?.contested &&
        Math.hypot(s.pos[0] - n.lastPos[0], s.pos[2] - n.lastPos[2]) < 55
      ) &&
        Xa(e, t, n)) ||
      s;
  (c && (n.lane = ao(e.world, n, c)),
    c?.id !== n.objectiveId &&
      (t.trace?.(`objective`, n, {
        from: n.objectiveId,
        to: c?.id ?? null,
        why: c === s ? (o?.reason ?? `score`) : `squad`,
        scores: o?.scores,
      }),
      (n.objectiveId = c?.id ?? null),
      (n.objectiveSince = r),
      t.stats.objectiveAssignments++));
}
function so(e, t, n) {
  let r = new Map(),
    i = 0;
  for (let a of t.bots.values())
    a.team === n.team &&
      (i++,
      a !== n &&
        a.objectiveId &&
        B(e.world.get(a.entityId)) &&
        r.set(a.objectiveId, (r.get(a.objectiveId) ?? 0) + 1));
  for (let t of e.world.players.values()) {
    if (t.isBot || t.team !== n.team) continue;
    i++;
    let a = e.world.get(t.entityId);
    if (B(a))
      for (let t of e.world.match.objectives ?? [])
        Math.hypot(t.pos[0] - a.pos[0], t.pos[2] - a.pos[2]) <
          (t.radius ?? 10) && r.set(t.id, (r.get(t.id) ?? 0) + 1);
  }
  return { count: r, total: i };
}
