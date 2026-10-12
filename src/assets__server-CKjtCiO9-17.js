// assets__server-CKjtCiO9 17 — pos
// Lines 5124-5462 of readable/assets__server-CKjtCiO9.pretty.js (statement-aligned).
function Wr(e, t, n, r) {
  if (e.world.map.floorNav) return r;
  let i = e.world.map.routes?.[t.lane];
  if (!i || i.length < 2) return r;
  let a = Math.hypot(r[0] - n.pos[0], r[2] - n.pos[2]);
  if (
    a < (e.world.map.laneDirect ?? 70) &&
    (e.world.map.laneDirect == null ||
      !Number.isFinite(r[1]) ||
      Math.abs(r[1] - n.pos[1]) < 3)
  )
    return r;
  let o = Hr(i, n.pos),
    s = Hr(i, [r[0], r[1], r[2]]);
  if (o === s) return r;
  let c = s > o ? 1 : -1,
    l = o + c,
    u = (e, t) => e.length > 2 && t?.length > 2 && Math.abs(e[2] - t[2]) > 2.5,
    d = (e) => (e[3] ? [e[0] + ((t.index % 3) - 1) * e[3], e[1]] : e);
  for (
    ;
    l !== s && Br(i[l], n.pos) < 14 && !Vr(i[l], n.pos) && !u(i[l], i[l + c]);
  )
    l += c;
  if (Vr(i[l], n.pos) && !Vr(i[o], n.pos) && Br(d(i[o]), n.pos) > 3) {
    l = o;
    let e = i[o - c];
    if (e && !Vr(e, n.pos)) {
      let [t, r] = d(e),
        [a, s] = d(i[o]),
        u = a - t,
        f = s - r,
        p = Math.hypot(u, f) || 1;
      Math.abs((n.pos[0] - t) * f - (n.pos[2] - r) * u) / p > 2 && (l = o - c);
    }
  }
  if (e.world.map.laneDirect == null && Br(i[l], n.pos) > a) return r;
  let f = i[l][3] ?? 0;
  return [i[l][0] + (f ? ((t.index % 3) - 1) * f : 0), r[1], i[l][1]];
}
function Gr(t, n, r, i, a, o) {
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
      (d.team === r.team && !w(t.world))
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
var Kr = (e, t) => {
    if (w(e.world)) return `solo-${t.playerId}`;
    let n = C(e.world, t.playerId);
    return n ? `squad-${n.id}` : t.squadId;
  },
  qr = 90,
  Jr = 300;
function Yr(e, t, n) {
  if (n.role === `sentinel`) return null;
  let r = C(e.world, n.playerId);
  if (!r || r.leaderId === n.playerId) return null;
  let i = e.world.players.get(r.leaderId);
  if (!i) return null;
  let a = (e.world.match.objectives || []).filter(
    (e) => e.state !== `destroyed`,
  );
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
function Xr(e, t, n, r, i, a) {
  let o = Gr(e, t, n, r, i, a);
  if (o > 0) return o;
  let s = Kr(e, n),
    c = t.contacts.get(s);
  return !c || c.expires < i ? (c && t.contacts.delete(s), -1) : c.entityId;
}
var Zr = 18;
function Qr(e, t, n, r, i, a) {
  let o = Xr(e, t, n, r, i, a),
    s = qe(e.world, r, { range: a, sharedId: o }),
    c = n.targetId;
  s
    ? (c === s.id &&
        !n.visible &&
        i - n.lastSeenTick > Zr &&
        ((n.acquireTick = i),
        (n.burstLeft = 0),
        Ze(n),
        (n.reactionTicks = Math.max(
          6,
          Math.round(n.rng.int(R.reactionMinTicks, R.reactionMaxTicks) * 0.7),
        ))),
      (n.visible = !0),
      (n.lastSeenTick = i),
      (n.chase = null),
      (n.observedContact = {
        pos: s.pos.slice(),
        expires: i + R.contactMemoryTicks,
      }),
      c !== s.id &&
        ((n.targetId = s.id),
        (n.acquireTick = i),
        (n.reactionTicks = n.rng.int(R.reactionMinTicks, R.reactionMaxTicks)),
        (n.burstLeft = 0),
        Ze(n),
        (n.hipPref = n.rng.chance(0.55)),
        (n.pushDue = i + n.rng.int(30, 120)),
        t.stats.acquisitions++),
      t.contacts.set(Kr(e, n), {
        entityId: s.id,
        pos: s.pos.slice(),
        expires: i + R.contactMemoryTicks,
      }))
    : (n.visible &&
        n.targetId > 0 &&
        n.observedContact &&
        (n.chase = {
          id: n.targetId,
          pos: n.observedContact.pos.slice(),
          until: i + 420,
        }),
      (n.visible = !1),
      i - n.lastSeenTick > R.contactMemoryTicks &&
        ((n.targetId = -1), (n.acquireTick = -1), (n.burstLeft = 0)));
}
function $r(e, t, r, i, a) {
  let o = e.world.match;
  o.mode === `rush` &&
    r?.kind === `mcom` &&
    r.state !== `destroyed` &&
    (Math.hypot(r.pos[0] - t.pos[0], r.pos[2] - t.pos[2]) > r.radius - 0.3 ||
      Math.abs(r.pos[1] - t.pos[1]) > 2.5 ||
      (t.team === o.attackers ? r.state !== `idle` : r.state !== `armed`) ||
      ((a.buttons |= n.INTERACT), (a.mx = 0), (a.mz = 0)));
}
function ei(e, t, n) {
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
            n.some((e) => Math.abs(e[2] - a.pos[1]) < 5.5 && Br(e, a.pos) < 30);
    };
  if (t.laneObjective === n.id && i.includes(t.lane) && o(t.lane))
    return t.lane;
  t.laneObjective = n.id;
  for (let e = 0; e < i.length; e++) {
    let n = i[(Math.floor(t.index / 2) + e) % i.length];
    if (o(n)) return n;
  }
  return r;
}
function ti(e, t, n, r) {
  if (w(e.world) || e.world.match.mode === `tdm`) {
    let i = e.world.match.roam?.find((e) => e.id === n.objectiveId);
    i &&
      (Math.hypot(i.pos[0] - n.lastPos[0], i.pos[2] - n.lastPos[2]) < 4 ||
        r - (n.roamSince ?? r) > 3600 ||
        (e.world.map.roamOk && !e.world.map.roamOk(n.lastPos, i))) &&
      (n.roamStep = (n.roamStep | 0) + 1);
    let a = e.modules.get(`gamemodes`)?.roamFor?.(n);
    (a && a.id !== n.objectiveId && (n.roamSince = r),
      a && !n.perch && (n.lane = a.lane ?? `main`),
      a &&
        a.id !== n.objectiveId &&
        ((n.objectiveId = a.id),
        (n.lane = a.lane ?? `main`),
        t.stats.objectiveAssignments++));
    return;
  }
  let i = C(e.world, n.playerId);
  if (i?.order) {
    let t = S(e.world, i);
    if (t) {
      ((n.objectiveId = t.id), (n.lane = ei(e.world, n, t)));
      return;
    }
  }
  if (n.rejoin) {
    let t =
      r < n.rejoin.until &&
      e.world.match.objectives.find(
        (e) => e.id === n.rejoin.id && e.state !== `destroyed`,
      );
    if (t) {
      ((n.objectiveId = t.id), (n.lane = ei(e.world, n, t)));
      return;
    }
    ((n.rejoin = null), (n.objectiveDue = r));
  }
  if (r < n.objectiveDue && n.objectiveId) return;
  n.objectiveDue = r + R.objectiveThinkEvery + (n.index % 13);
  let a = Ve(e.world, n),
    o =
      (!(
        a?.contested &&
        Math.hypot(a.pos[0] - n.lastPos[0], a.pos[2] - n.lastPos[2]) < 55
      ) &&
        Yr(e, t, n)) ||
      a;
  (o && (n.lane = ei(e.world, n, o)),
    o?.id !== n.objectiveId &&
      ((n.objectiveId = o?.id ?? null), t.stats.objectiveAssignments++));
}
function ni(e, t) {
  if (w(e.world) || e.world.match.mode === `tdm`) {
    let n =
      e.world.match.roam?.find((e) => e.id === t.objectiveId) ??
      e.modules.get(`gamemodes`)?.roamFor?.(t) ??
      null;
    return { objective: n, goal: He(n, t, [0, 0, 0]) };
  }
  let n = C(e.world, t.playerId),
    r =
      S(e.world, n) ??
      e.world.match.objectives.find((e) => e.id === t.objectiveId) ??
      Ve(e.world, t);
  if (n?.order && r) {
    let i =
        (n.members.indexOf(t.playerId) * Math.PI * 2) /
        (e.world.match.squadSize ?? 5),
      a = Math.min(7, r.radius * 0.5);
    return {
      objective: r,
      goal: [r.pos[0] + Math.cos(i) * a, r.pos[1], r.pos[2] + Math.sin(i) * a],
    };
  }
  return { objective: r, goal: He(r, t, [0, 0, 0]) };
}
function ri(e, t, n, r, i, a) {
  if (a % 60 == n.index % 60) {
    let t = (n.trail ??= []),
      i = t[t.length - 1],
      a = r.pos;
    if (a[1] < e.world.map.getHeight(a[0], a[2]) + 0.5)
      ((t.length = 0), t.push(a.slice()));
    else if (!i || Math.hypot(a[0] - i[0], a[2] - i[2]) > 1) {
      let e = t.findIndex(
        (e) =>
          Math.hypot(a[0] - e[0], a[2] - e[2]) < 1.5 &&
          Math.abs(a[1] - e[1]) < 1,
      );
      e >= 0
        ? (t.length = e + 1)
        : (t.push(a.slice()), t.length > 120 && t.shift());
    }
  }
  if ((a % 10 == n.index % 10 && he(e.world, n, r), a - n.progressTick < 90))
    return;
  let o = r.pos[0] - n.progressPos[0],
    s = r.pos[2] - n.progressPos[2];
  (i &&
    o * o + s * s + (r.pos[1] - n.progressPos[1]) ** 2 < 0.7 * 0.7 &&
    ((n.unstuckUntil = a + 75),
    (n.travelSteer = null),
    (n.unstuckJump = a >= (n.noHopUntil ?? -1) ? a + 4 : -1),
    ye(n, !0),
    (n.avoidSign *= -1),
    t.stats.stuckRecoveries++,
    a - (n.stuckStreakTick ?? -1e9) > 900 && (n.stuckStreak = 0),
    (n.stuckStreakTick = a),
    ++n.stuckStreak >= 3 &&
      ((n.stuckStreak = 0),
      ii(e, t, n, r, a),
      (t.stats.dutyAbandons = (t.stats.dutyAbandons ?? 0) + 1))),
    (n.progressPos[0] = r.pos[0]),
    (n.progressPos[1] = r.pos[1]),
    (n.progressPos[2] = r.pos[2]),
    (n.progressTick = a));
}
function ii(e, t, n, r, i) {
  if (n.elevation) {
    let t = n.elevation;
    r.pos[1] > t.room.floor - 0.5 &&
    ![`exit`, `exitRoom`, `descend`].includes(t.stage)
      ? ((t.stage = t.room.urban ? `exitRoom` : `exit`),
        (t.since = i),
        (t.floorRoute = null))
      : r.pos[1] > e.world.map.getHeight(r.pos[0], r.pos[2]) + 1.1
        ? (t.since = -1e9)
        : ((n.elevation = null), (n.elevationDue = i + 600));
  }
  if (n.liftDuty) {
    let e = n.liftDuty;
    r.pos[1] >= e.lift.top[1] - 0.5
      ? ((e.returning = !0),
        (e.stage = `order-corner`),
        (e.returnCorner = [e.exit[0], e.lift.top[1], r.pos[2]]))
      : ((n.failedLift = e.lift.id),
        (n.failedLiftUntil = i + 1800),
        (n.liftDuty = null),
        (n.liftDue = i + 120));
  }
  (n.vehicleGoal && ((n.vehicleGoal = null), (n.vehicleCooldown = i + 600)),
    n.perch && ((n.perch = null), (n.perchDue = i + 1200)),
    n.flank &&
      ((n.flank = null), (n.flankDue = i + 2400), (n.flankLast = `abandoned`)),
    !n.elevation &&
      r.pos[1] > e.world.map.getHeight(r.pos[0], r.pos[2]) + 1.1 &&
      n.trail?.length > 1 &&
      ((n.retreat = { pts: n.trail.slice().reverse(), until: i + 2400 }),
      (t.stats.retreats = (t.stats.retreats ?? 0) + 1)));
}
