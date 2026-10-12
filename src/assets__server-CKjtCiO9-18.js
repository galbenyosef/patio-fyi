// assets__server-CKjtCiO9 18 — pos
// Lines 5463-5652 of readable/assets__server-CKjtCiO9.pretty.js (statement-aligned).
function ai(e, t, n, r, i, a) {
  let o = r.ext?.pl,
    s = o?.lad > 0 ? e.world.map.ladders?.[o.lad - 1] : null,
    c =
      (n.nest && (n.nest.stage === `climb` || n.nest.stage === `down`)) ||
      n.flank ||
      n.roof ||
      n.insertion ||
      n.liftDuty ||
      n.elevation;
  if ((r.ext && (r.ext.noLadder = !c), !s)) return ((n.ladderAt = null), !1);
  let l = (n.ladderAt ??= { y: r.pos[1], tick: a, down: !1 });
  return (
    Math.abs(r.pos[1] - l.y) > 0.3 && ((l.y = r.pos[1]), (l.tick = a)),
    !l.down &&
      (!c || a - l.tick > 180) &&
      ((l.down = !0),
      (l.tick = a),
      (t.stats.ladderDescents = (t.stats.ladderDescents ?? 0) + 1),
      c &&
        n.flank &&
        ((n.flank = null),
        (n.flankDue = a + 2400),
        (n.flankLast = `ladder-stuck`)),
      c &&
        n.nest &&
        ((n.nestAvoid ??= new Map()).set(n.nest.r.nest, a + 3600),
        (n.nestLeft = `ladder-stuck`),
        (n.nest = null),
        (n.nestDue = a + 900))),
    l.down
      ? ((i.yaw = s.facing + Math.PI),
        (i.pitch = 0),
        (i.mx = 0),
        (i.mz = -1),
        (i.buttons = 0),
        !0)
      : !1
  );
}
var oi = 540,
  si = 1800;
function ci(t, n, r, i, a, o) {
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
      !O(t.world, c.pos, 0.5) &&
      (c.path.push(c.pos), c.path.length > 6 && c.path.shift()),
      (c.pos = s.slice()),
      (c.tick = a),
      (c.hunted = !1),
      i.state & e.IN_VEHICLE || (c.fires = 0));
    return;
  }
  if (a - c.tick < oi || a - r.lastSeenTick < oi || a < r.underFireUntil)
    return;
  let u = (t.world.match.objectives ?? []).filter(
      (e) => e.state !== `destroyed` && e.kind !== `roam`,
    ),
    d = u.find((e) => e.id === r.objectiveId),
    f = (e) => e.team !== r.team || e.contested,
    p = (e, t) =>
      Math.hypot(e.pos[0] - t[0], e.pos[2] - t[2]) < e.radius &&
      Math.abs(e.pos[1] - t[1]) < 4;
  if (d && f(d) && p(d, s) && !(d.contested && c.hunted)) {
    if (((c.tick = a), !d.contested)) return;
    c.hunted = !0;
    let e = null,
      o = 1 / 0;
    for (let n of t.world.byType(`soldier`)) {
      if (
        !B(n) ||
        !T(t.world, i, n) ||
        !p(d, n.pos) ||
        Math.abs(n.pos[1] - s[1]) > 1.2
      )
        continue;
      let r = Math.hypot(n.pos[0] - s[0], n.pos[2] - s[2]);
      r < o && ((o = r), (e = n));
    }
    e &&
      o > 2.5 &&
      ((r.chase = { id: e.id, pos: e.pos.slice(), until: a + 600, any: !0 }),
      (n.stats.watchdogHunts = (n.stats.watchdogHunts ?? 0) + 1));
    return;
  }
  ((c.tick = a),
    c.fires++,
    (n.stats.watchdogDrops = (n.stats.watchdogDrops ?? 0) + 1));
  let m = s[1] > t.world.map.getHeight(s[0], s[2]) + 1.1,
    h = (e) => e && e[1] < t.world.map.getHeight(e[0], e[2]) + 0.6,
    g = m ? r.trail?.[0] : c.path[0];
  if (
    m &&
    c.fires >= 2 &&
    !(h(g) && Math.hypot(g[0] - s[0], g[1] - s[1], g[2] - s[2]) > 1.5)
  ) {
    let e = t.world.players.get(r.playerId),
      n = e && de(t.world, e, null, 30, s);
    n && (g = n.pos);
  }
  (c.fires >= (m ? 2 : 3) &&
    g &&
    Math.hypot(g[0] - s[0], g[1] - s[1], g[2] - s[2]) > 1.5 &&
    !r.elevation &&
    !r.liftDuty &&
    ((i.pos[0] = g[0]),
    (i.pos[1] = g[1]),
    (i.pos[2] = g[2]),
    (i.vel[0] = i.vel[1] = i.vel[2] = 0),
    (r.trail = [g.slice()]),
    (r.retreat = null),
    (c.pos = g.slice()),
    (c.path = []),
    (c.fires = 0),
    (n.stats.watchdogUnwedges = (n.stats.watchdogUnwedges ?? 0) + 1)),
    r.nest &&
      ((r.nestAvoid ??= new Map()).set(r.nest.r.nest, a + 3600),
      (r.nest = null),
      (r.nestDue = a + 1800),
      (r.nestLeft = `watchdog`)),
    ii(t, n, r, i, a),
    c.fires >= 2 && (r.retreat = null),
    (r.chase = null),
    (r.coverGoal = null),
    (r.proneUntil = 0),
    (r.crouchUntil = 0),
    (r.travelSteer = null));
  let _ = (e) => Math.hypot(e.pos[0] - s[0], e.pos[2] - s[2]),
    v = u.filter((e) => f(e) && (e !== d || c.fires < 2)),
    y = (v.length ? v : u.filter((e) => e !== d)).sort(
      (e, t) => _(e) - _(t),
    )[0];
  y &&
    ((r.rejoin = { id: y.id, until: a + si }),
    (r.objectiveId = y.id),
    (r.lane = ei(t.world, r, y)),
    ye(r, !0));
}
function li(e, t, n, r, i) {
  let a = [r[0] - n[0], r[1] - n[1], r[2] - n[2]],
    o = Math.hypot(...a);
  return (
    o < 1 ||
    !e.map.isOccluded?.(
      n,
      a.map((e) => e / o),
      o,
      0.4,
      !0,
    ) ||
    (i >= (t.aimHeadUntil ?? 0) && (t.aimHeadUntil = i + 120), !1)
  );
}
function ui(e, t, n, r) {
  t < e.nextBurstTick ||
    e.burstLeft > 0 ||
    ((e.burstLeft =
      n.class === `lmg`
        ? r < 22
          ? e.rng.int(10, 22)
          : r < 60
            ? e.rng.int(7, 14)
            : e.rng.int(4, 9)
        : n.mode === `AUTO`
          ? r < 22
            ? e.rng.int(6, 15)
            : r < 50
              ? e.rng.int(4, 9)
              : e.rng.int(2, 5)
          : 1),
    (e.nextBurstTick =
      t + e.rng.int(n.mode === `AUTO` ? 20 : 10, n.mode === `AUTO` ? 48 : 24)),
    (e.missOffset = e.rng.chance(0.11)
      ? e.rng.range(0.008, 0.019) * (e.rng.chance(0.5) ? 1 : -1)
      : 0));
}
