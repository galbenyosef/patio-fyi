// assets__server-DjKK0Hoa 25 — pos
// Lines 7496-7843 of readable/assets__server-DjKK0Hoa.pretty.js (statement-aligned).
function co(e, t) {
  if (C(e.world) || e.world.match.mode === `tdm`) {
    let n =
      e.world.match.roam?.find((e) => e.id === t.objectiveId) ??
      e.modules.get(`gamemodes`)?.roamFor?.(t) ??
      null;
    return { objective: n, goal: Xe(n, t, [0, 0, 0]) };
  }
  let n = O(e.world, t.playerId),
    r =
      D(e.world, n) ??
      e.world.match.objectives.find((e) => e.id === t.objectiveId) ??
      Ye(e.world, t);
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
  return { objective: r, goal: Xe(r, t, [0, 0, 0]) };
}
function lo(e, t, n, r, i, a) {
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
  if ((a % 10 == n.index % 10 && be(e.world, n, r), a - n.progressTick < 90))
    return;
  let o = r.pos[0] - n.progressPos[0],
    s = r.pos[2] - n.progressPos[2];
  (i &&
    o * o + s * s + (r.pos[1] - n.progressPos[1]) ** 2 < 0.7 * 0.7 &&
    ((n.unstuckUntil = a + 75),
    (n.travelSteer = null),
    (n.unstuckJump = a >= (n.noHopUntil ?? -1) ? a + 4 : -1),
    we(n, !0),
    (n.avoidSign *= -1),
    t.stats.stuckRecoveries++,
    t.trace?.(`stuck`, n, {
      streak:
        (a - (n.stuckStreakTick ?? -1e9) > 900 ? 0 : (n.stuckStreak ?? 0)) + 1,
    }),
    a - (n.stuckStreakTick ?? -1e9) > 900 && (n.stuckStreak = 0),
    (n.stuckStreakTick = a),
    ++n.stuckStreak >= 3 &&
      ((n.stuckStreak = 0),
      uo(e, t, n, r, a),
      (t.stats.dutyAbandons = (t.stats.dutyAbandons ?? 0) + 1),
      t.trace?.(`abandon`, n, null))),
    (n.progressPos[0] = r.pos[0]),
    (n.progressPos[1] = r.pos[1]),
    (n.progressPos[2] = r.pos[2]),
    (n.progressTick = a));
}
function uo(e, t, n, r, i) {
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
      ((n.flank = null), (n.flankDue = i + 2400), (n.flankLast = `abandoned`)));
  let a = e.world.map.floorNav,
    o = a?.levels && M(a, ...r.pos);
  (o && ((n.floorRoute = null), (n.floorHold = 0), (n.retreat = null)),
    !o &&
      !n.elevation &&
      r.pos[1] > e.world.map.getHeight(r.pos[0], r.pos[2]) + 1.1 &&
      n.trail?.length > 1 &&
      ((n.retreat = { pts: n.trail.slice().reverse(), until: i + 2400 }),
      (t.stats.retreats = (t.stats.retreats ?? 0) + 1)));
}
function fo(e, n, r, i, a, o) {
  let s = i.ext?.pl,
    c = s?.lad > 0 ? e.world.map.ladders?.[s.lad - 1] : null,
    l = r.floorRoute,
    u = l?.mode === `link` && l.link?.length ? l.link[l.link.length - 1] : null,
    d =
      (r.nest && (r.nest.stage === `climb` || r.nest.stage === `down`)) ||
      r.flank ||
      r.roof ||
      r.insertion ||
      r.liftDuty ||
      r.elevation ||
      !!u;
  if ((i.ext && (i.ext.noLadder = !d), !c))
    return (
      (r.ladderAt = null),
      !!u && o - (l.markAt ?? o) < 120 && po(e.world, i, u, a)
    );
  let f = (r.ladderAt ??= { y: i.pos[1], tick: o, down: !1 });
  return (
    Math.abs(i.pos[1] - f.y) > 0.3 && ((f.y = i.pos[1]), (f.tick = o)),
    !f.down &&
      (!d || o - f.tick > 180) &&
      ((f.down = !0),
      (f.tick = o),
      (n.stats.ladderDescents = (n.stats.ladderDescents ?? 0) + 1),
      d &&
        r.flank &&
        ((r.flank = null),
        (r.flankDue = o + 2400),
        (r.flankLast = `ladder-stuck`)),
      d &&
        r.nest &&
        ((r.nestAvoid ??= new Map()).set(r.nest.r.nest, o + 3600),
        (r.nestLeft = `ladder-stuck`),
        (r.nest = null),
        (r.nestDue = o + 900))),
    f.down
      ? ((a.yaw = c.facing + Math.PI),
        (a.pitch = 0),
        (a.mx = 0),
        (a.mz = -1),
        (a.buttons = 0),
        !0)
      : u
        ? ((l.mark = [i.pos[0], i.pos[2]]),
          (l.markAt = o),
          (a.yaw = c.facing + Math.PI),
          (a.pitch = 0),
          (a.mx = 0),
          (a.mz = u[1] > i.pos[1] ? 1 : -1),
          (a.buttons = t.SPRINT),
          !0)
        : !1
  );
}
function po(e, t, n, r) {
  let i = t.pos,
    a = e.map.ladders;
  for (let e of a ?? []) {
    let t = Math.sin(e.facing),
      a = Math.cos(e.facing),
      o = n[1] > i[1] + 1.5;
    if (
      o
        ? !(n[1] > e.y1 - 1 && i[1] >= e.y0 - 0.4 && i[1] <= e.y1 - 0.6)
        : !(
            n[1] < i[1] - 1.5 &&
            n[1] < e.y0 + 1 &&
            Math.abs(i[1] - e.y1) <= 0.3
          )
    )
      continue;
    let s = e.x - t * 0.42,
      c = e.z - a * 0.42,
      l = Math.hypot(s - i[0], c - i[2]);
    if (l > 1.5) continue;
    let u = i[0] - e.x,
      d = i[2] - e.z,
      f = u * t + d * a;
    return (
      Math.abs(u * a - d * t) <= 0.4 &&
      (o ? f <= 0.05 && f >= -0.7 : f >= -0.6 && f <= 0.85)
        ? ((r.yaw = e.facing + Math.PI), (r.mz = o ? 1 : -1))
        : ((r.yaw = Math.atan2(i[0] - s, i[2] - c)),
          (r.mz = Math.min(1, l / 0.5))),
      (r.pitch = 0),
      (r.mx = 0),
      (r.buttons = 0),
      !0
    );
  }
  return !1;
}
var mo = 540,
  ho = 1800;
function go(t, n, r, i, a, o) {
  if ((a + r.index) % 30) return;
  let s = i.pos,
    c = (r.wd ??= { pos: s.slice(), tick: a, fires: 0, path: [] }),
    l = Math.hypot(s[0] - c.pos[0], s[1] - c.pos[1], s[2] - c.pos[2]) > 2.5;
  if (
    l ||
    i.state & e.IN_VEHICLE ||
    r.insertion?.stage === `fall` ||
    o ||
    (r.nest && r.nest.stage !== `travel`) ||
    r.roof ||
    (r.flank && !r.flank.travel)
  ) {
    (l &&
      !(i.state & e.IN_VEHICLE) &&
      c.pos[1] < t.world.map.getHeight(c.pos[0], c.pos[2]) + 0.5 &&
      !te(t.world, c.pos, 0.5) &&
      (c.path.push(c.pos), c.path.length > 6 && c.path.shift()),
      (c.pos = s.slice()),
      (c.tick = a),
      (c.hunted = !1),
      i.state & e.IN_VEHICLE || (c.fires = 0));
    return;
  }
  if (a - c.tick < mo || a - r.lastSeenTick < mo || a < r.underFireUntil)
    return;
  let u = (t.world.match.objectives ?? []).filter(
      (e) => qe(t.world, e) && e.kind !== `roam`,
    ),
    d = u.find((e) => e.id === r.objectiveId),
    f = (e) => e.team !== r.team || e.contested,
    p = (e, t) =>
      Math.hypot(e.pos[0] - t[0], e.pos[2] - t[2]) < e.radius &&
      Math.abs(e.pos[1] - t[1]) < 4;
  if (d && f(d) && p(d, s) && !(d.contested && c.hunted)) {
    if (((c.tick = a), !d.contested)) return;
    c.hunted = !0;
    let e = yn(r, a, s, d.radius * 2),
      t = (r.index + Math.floor(a / 540)) * 2.39996,
      i = d.radius * 0.65,
      o =
        e && p(d, e.pos)
          ? e.pos
          : [d.pos[0] + Math.cos(t) * i, s[1], d.pos[2] + Math.sin(t) * i];
    Math.hypot(o[0] - s[0], o[2] - s[2]) > 2.5 &&
      ((r.chase = { id: e?.id ?? -1, pos: o.slice(), until: a + 600, any: !0 }),
      (n.stats.watchdogHunts = (n.stats.watchdogHunts ?? 0) + 1),
      n.trace?.(`watchdog`, r, { act: `hunt`, obj: d.id }));
    return;
  }
  ((c.tick = a),
    c.fires++,
    (n.stats.watchdogDrops = (n.stats.watchdogDrops ?? 0) + 1));
  let m = s[1] > t.world.map.getHeight(s[0], s[2]) + 1.1,
    h = (e) => e && e[1] < t.world.map.getHeight(e[0], e[2]) + 0.6,
    _ = m ? r.trail?.[0] : c.path[0];
  if (
    m &&
    c.fires >= 2 &&
    !(h(_) && Math.hypot(_[0] - s[0], _[1] - s[1], _[2] - s[2]) > 1.5)
  ) {
    let e = t.world.players.get(r.playerId),
      n = e && ge(t.world, e, null, 30, s);
    n && (_ = n.pos);
  }
  (!t.world
    .byType(`soldier`)
    .some(
      (e) =>
        e.owner !== i.owner &&
        B(e) &&
        !t.world.players.get(e.owner)?.isBot &&
        Math.hypot(e.pos[0] - s[0], e.pos[2] - s[2]) < 120 &&
        Ge(t.world, g(e, [0, 0, 0]), i, 130),
    ) &&
    c.fires >= (m ? 2 : 3) &&
    _ &&
    Math.hypot(_[0] - s[0], _[1] - s[1], _[2] - s[2]) > 1.5 &&
    !r.elevation &&
    !r.liftDuty &&
    ((i.pos[0] = _[0]),
    (i.pos[1] = _[1]),
    (i.pos[2] = _[2]),
    (i.vel[0] = i.vel[1] = i.vel[2] = 0),
    (r.trail = [_.slice()]),
    (r.retreat = null),
    (c.pos = _.slice()),
    (c.path = []),
    (c.fires = 0),
    (n.stats.watchdogUnwedges = (n.stats.watchdogUnwedges ?? 0) + 1),
    n.trace?.(`watchdog`, r, { act: `unwedge`, aloft: m, fires: c.fires })),
    r.nest &&
      ((r.nestAvoid ??= new Map()).set(r.nest.r.nest, a + 3600),
      (r.nest = null),
      (r.nestDue = a + 1800),
      (r.nestLeft = `watchdog`)),
    uo(t, n, r, i, a),
    c.fires >= 2 && (r.retreat = null),
    (r.chase = null),
    (r.coverGoal = null),
    (r.proneUntil = 0),
    (r.crouchUntil = 0),
    (r.travelSteer = null));
  let v = (e) => Math.hypot(e.pos[0] - s[0], e.pos[2] - s[2]),
    y = u.filter((e) => f(e) && (e !== d || c.fires < 2)),
    b = (y.length ? y : u.filter((e) => e !== d)).sort(
      (e, t) => v(e) - v(t),
    )[0];
  b &&
    ((r.rejoin = { id: b.id, until: a + ho }),
    n.trace?.(`watchdog`, r, {
      act: `drop`,
      fires: c.fires,
      aloft: m,
      from: d?.id ?? null,
      to: b.id,
    }),
    (r.objectiveId = b.id),
    (r.lane = ao(t.world, r, b)),
    we(r, !0));
}
function _o(e, t, n, r, i) {
  return We(e, n, r)
    ? !0
    : (i >= (t.aimHeadUntil ?? 0) && (t.aimHeadUntil = i + 120), !1);
}
function vo(e, t, n, r) {
  if (t < e.nextBurstTick || e.burstLeft > 0) return;
  let i = at(e.rng, n, r);
  ((e.burstLeft = i.count),
    (e.nextBurstTick = t + i.pause),
    x(n) &&
      (e.nextBurstTick =
        t +
        (n.mode === `BOLT`
          ? e.rng.int(51, 81)
          : n.class === `sniper`
            ? e.rng.int(36, 60)
            : e.rng.int(21, 36))),
    (e.missOffset = e.rng.chance(0.11)
      ? e.rng.range(0.008, 0.019) * (e.rng.chance(0.5) ? 1 : -1)
      : 0));
}
