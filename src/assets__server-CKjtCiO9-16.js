// assets__server-CKjtCiO9 16 — world
// Lines 4805-5123 of readable/assets__server-CKjtCiO9.pretty.js (statement-aligned).
function xr(e, t, n) {
  ((e.entityId = t.id),
    (e.targetId = -1),
    (e.visible = !1),
    (e.acquireTick = -1),
    (e.lastSeenTick = -1e4),
    (e.coverGoal = null),
    (e.coverUntil = -1),
    (e.underFireUntil = -1),
    (e.threatId = -1),
    (e.burstLeft = 0),
    (e.nextBurstTick = n + e.rng.int(5, 30)),
    (e.lastFire = !1),
    (e.hand = null),
    (e.objectiveDue = n + (e.index % R.objectiveThinkEvery)),
    (e.lastPos[0] = t.pos[0]),
    (e.lastPos[1] = t.pos[1]),
    (e.lastPos[2] = t.pos[2]),
    (e.progressPos[0] = t.pos[0]),
    (e.progressPos[1] = t.pos[1]),
    (e.progressPos[2] = t.pos[2]),
    (e.progressTick = n),
    (e.unstuckUntil = -1),
    e.spawnSerial++,
    ye(e),
    (e.trail = []),
    (e.retreat = null),
    (e.crumbs = null),
    (e.shellLeave = null),
    (e.shellStill = null),
    (e.elevation = null),
    (e.elevationDue = n + 600),
    (e.observedContact = null),
    (e.vehicleGoal = null),
    (e.driveRoute = null),
    (e.liftDuty = null),
    (e.liftDue = n + 600 + e.index * 7),
    (e.perch = null),
    (e.nest = null),
    (e.insertion = null),
    (e.roof = null),
    (e.hold = null),
    (e.wd = null),
    (e.rejoin = null),
    e.flank && (e.flankLast = `died`),
    (e.flank = null));
}
function Sr(e, t, n) {
  let r = [0, 0];
  for (let i = 0; i < n; i++) Cr(e, t, i & 1, r[i & 1]++, i);
  t.nextIndex = n;
}
function Cr(e, t, n, r, i) {
  let a = e.modules.get(`netcode`);
  if (!a?.spawnSoldierFor) throw Error(`bots requires netcode.spawnSoldierFor`);
  let o = yr(e.world, i),
    s = {
      id: o,
      name: vr(n, r),
      team: n,
      entityId: -1,
      isBot: !0,
      ping: 0,
      kills: 0,
      deaths: 0,
      score: 0,
    };
  e.world.players.set(o, s);
  let c = br(e, o, n, r, i);
  {
    let e = ne(r);
    s.loadout = k({
      classId: e,
      weapons: e === `engineer` ? [void 0, 8] : void 0,
    });
  }
  ((c.classId = s.loadout.classId),
    c.classId === `sniper` && (c.skill = 0.85 + 0.15 * c.skill),
    (c.kiteHunter = c.classId === `assault` && Math.floor(r / 4) % 4 == 2),
    (c.role =
      c.classId === `sniper`
        ? `sentinel`
        : c.classId === `engineer`
          ? `flanker`
          : `assault`),
    (c.slot = s.loadout.weapons[0]),
    t.bots.set(o, c));
  let l =
    a.spawnSoldierFor(o, { weapon: c.slot, ammo: 30 }) ??
    a.spawnSoldierFor(o, {
      weapon: c.slot,
      ammo: 30,
      spawn: {
        pos: [0, e.world.map.getHeight(0, 0), 0],
        yaw: 0,
        anchorId: `staging`,
      },
    });
  if (!l) throw Error(`failed to spawn bot player ${o}`);
  return (
    c.entityId !== l.id && xr(c, l, e.world.time.tick),
    t.stats.spawned++,
    c
  );
}
function wr(e, t) {
  let n = 0;
  for (let r of e.players.values()) r.team === t && !r.reserve && n++;
  return n;
}
function Tr(e, t, n) {
  let r = Math.floor(Number(e.config?.teamSize) || 0);
  if (r <= 0 || (n !== 0 && n !== 1)) return;
  let i = e.modules.get(`netcode`),
    a = wr(e.world, n);
  for (; a > r;) {
    let r = null,
      o = -1 / 0;
    for (let i of t.bots.values()) {
      if (i.team !== n) continue;
      let t =
        (B(e.world.get(e.world.players.get(i.playerId)?.entityId)) ? 0 : 1e3) +
        i.teamRank;
      t > o && ((r = i), (o = t));
    }
    if (!r) break;
    let s = e.world.players.get(r.playerId);
    (s?.entityId > 0 && e.world.get(s.entityId) && e.world.despawn(s.entityId),
      e.world.players.delete(r.playerId),
      t.bots.delete(r.playerId),
      i?.broadcastEvent?.(`net:playerLeft`, { id: r.playerId }),
      a--);
  }
  for (; a < r;) {
    let r = new Set();
    for (let e of t.bots.values()) e.team === n && r.add(e.teamRank);
    let o = 0;
    for (; r.has(o);) o++;
    let s = Cr(e, t, n, o, t.nextIndex++),
      c = e.world.players.get(s.playerId);
    (i?.broadcastEvent?.(`net:playerJoined`, {
      id: c.id,
      name: c.name,
      team: n,
      entityId: c.entityId,
      isBot: !0,
    }),
      a++);
  }
}
function Er(e, t, n) {
  let r = t.bots.get(n?.playerId),
    i = n?.entityId > 0 ? e.world.get(n.entityId) : null;
  (i && gt.set(i, e.world.time.tick),
    r &&
      i &&
      (r.spawnSerial > 0 && t.stats.respawns++,
      xr(r, i, e.world.time.tick),
      (r.airCheck = !0)));
}
var Dr = 1200,
  Or = 1,
  kr = [3, 1, 1],
  Ar = 200;
function jr(t, n, r, i, a, o) {
  r.airCheck = !1;
  let s = t.modules.get(`vehicles`),
    c = s?.getFleet?.();
  if (
    !c ||
    !s.deployInto ||
    t.world.match.phase !== `live` ||
    i.state & e.IN_VEHICLE
  )
    return !1;
  let l = (n.airIdle ??= new Map()),
    u = (e) =>
      e.v.hp >= e.v.maxHp * 0.9 &&
      !e.respawn &&
      Math.hypot(e.v.pos[0] - e.home[0], e.v.pos[2] - e.home[2]) < 3,
    d = [...c.values()].filter(
      (e) =>
        e.v.team === r.team &&
        (e.homeTeam ?? e.v.team) === r.team &&
        !e.neutral,
    ),
    f = (e) =>
      s.deployInto(i, e.v.id)
        ? (l.delete(e.v.id), (r.vehicleGoal = e.v.id), (r.vehicleSince = a), !0)
        : !1,
    p = null,
    m = 0;
  for (let e of d.filter((e) => y[e.v.weapon]?.air)) {
    if (!u(e) || e.seats.some((e) => e != null)) {
      l.delete(e.v.id);
      continue;
    }
    (m++,
      l.has(e.v.id) || l.set(e.v.id, a),
      !p && a - l.get(e.v.id) >= Dr && (p = e));
  }
  if (p && m > Or && f(p)) return !0;
  if (
    !o ||
    Math.hypot(o.pos[0] - i.pos[0], o.pos[2] - i.pos[2]) < Ar ||
    !Tt(t.world, o.pos)
  )
    return !1;
  let h = d.filter((e) => !y[e.v.weapon]?.air && u(e)),
    g = h.find(
      (e) =>
        e.seats[0] != null &&
        e.seats.includes(null) &&
        Math.abs(e.v.ext?.speed ?? 0) < 1,
    );
  if (g && f(g)) return !0;
  for (let e of [0, 1, 2]) {
    let t = h.filter(
      (t) => t.v.weapon === e && t.seats.every((e) => e == null),
    );
    for (let e of t) l.has(e.v.id) || l.set(e.v.id, a);
    let n = t.find((e) => a - l.get(e.v.id) >= Dr);
    if (n && t.length > kr[e] && f(n)) return !0;
  }
  return !1;
}
function Mr(e, t, n) {
  let r = n?.targetId > 0 ? e.world.get(n.targetId) : null,
    i = r?.owner > 0 ? t.bots.get(r.owner) : null;
  if (i) {
    ((i.underFireUntil =
      e.world.time.tick + R.damageMemoryTicks + i.rng.int(0, 70)),
      (i.lastHitTick = e.world.time.tick),
      (i.threatId = n.attackerId ?? -1),
      (i.coverGoal = null),
      $e(i),
      t.stats.damageReactions++);
    let a = n.attackerId > 0 ? e.world.get(n.attackerId) : null;
    B(a) &&
      a.team !== r.team &&
      !w(e.world) &&
      t.contacts.set(Kr(e, i), {
        entityId: a.id,
        pos: a.pos.slice(),
        expires: e.world.time.tick + R.contactMemoryTicks,
      });
  }
  let a = n?.attackerId > 0 ? e.world.get(n.attackerId) : null;
  n?.fatal && a?.owner > 0 && t.bots.has(a.owner) && t.stats.kills++;
}
function Nr(e, t, n) {
  let r = n?.victimId > 0 ? e.world.get(n.victimId) : null;
  r?.owner > 0 && t.bots.has(r.owner) && t.stats.deaths++;
}
function Pr(e, t) {
  let n = e.modules.get(`weapons`)?.weaponDefs;
  return Array.isArray(n)
    ? (n.find((e) => e.id === t.slot) ?? n[0])
    : {
        id: t.slot,
        mode: `AUTO`,
        velocity: 760,
        gravity: 9.81,
        range: 180,
        rpm: 650,
      };
}
function Fr(e) {
  return b(e) ? 300 : e.class === `carbine` || e.class === `smg` ? 150 : 190;
}
function Ir(e) {
  return b(e) ? 220 : e.class === `carbine` || e.class === `smg` ? 60 : 85;
}
var Lr = (e, t) => !b(t) && t.class !== `lmg` && e.role !== `sentinel`;
function Rr(e, t) {
  let n = b(t) ? 150 : t.class === `carbine` || t.class === `smg` ? 14 : 24;
  return e.role === `flanker` ? n * 0.8 : n;
}
function zr(e) {
  return e === 2 || e === 3 ? `north` : e === 5 || e === 6 ? `south` : `main`;
}
var Br = (e, t) => Math.hypot(e[0] - t[0], e[1] - t[2]),
  Vr = (e, t) =>
    e.length > 2 && Number.isFinite(t[1])
      ? 8 * Math.max(0, Math.abs(e[2] - t[1]) - 2)
      : 0;
function Hr(e, t) {
  let n = 0,
    r = 1 / 0;
  for (let i = 0; i < e.length; i++) {
    let a = Br(e[i], t) + Vr(e[i], t);
    a < r && ((r = a), (n = i));
  }
  return n;
}
function Ur(e, t, r, i, a, o, s, l) {
  if (i.ext?.pl?.zip) {
    ((o.mx = 0),
      (o.mz = 0),
      (o.buttons &= ~(n.JUMP | n.INTERACT | n.SPRINT | n.CROUCH | n.PRONE)));
    return;
  }
  if (
    s ||
    !e.world.map.ziplines?.length ||
    l < (r.zipUntil ?? 0) ||
    (l + r.index) % 10
  )
    return;
  let u = c(e.world, i.pos);
  if (!u) return;
  let d = e.world.map.ziplines[u.index],
    f = u.dir > 0 ? d.b : d.a,
    p = Math.hypot(a[0] - i.pos[0], a[2] - i.pos[2]);
  Math.hypot(a[0] - f[0], a[2] - f[2]) + 20 < p &&
    ((o.buttons |= n.INTERACT),
    (r.zipUntil = l + 600),
    (t.stats.ziplineRides = (t.stats.ziplineRides | 0) + 1));
}
