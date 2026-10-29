// assets__server-DjKK0Hoa 23 — world
// Lines 6831-7164 of readable/assets__server-DjKK0Hoa.pretty.js (statement-aligned).
function Ta(e, t, n) {
  let r = Math.floor(Number(e.config?.teamSize) || 0);
  if (r <= 0 || (n !== 0 && n !== 1)) return;
  let i = e.modules.get(`netcode`),
    a = wa(e.world, n);
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
    let s = Ca(e, t, n, o, t.nextIndex++),
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
function Ea(e, t, n) {
  let r = t.bots.get(n?.playerId),
    i = n?.entityId > 0 ? e.world.get(n.entityId) : null;
  if ((i && Ot.set(i, e.world.time.tick), !r || !i)) return;
  r.spawnSerial > 0 && t.stats.respawns++;
  let a = e.world.players.get(r.playerId)?.loadout;
  (a?.weapons?.length &&
    ((r.slot = a.weapons[0]), (r.sidearmId = a.weapons[1] ?? null)),
    xa(r, i, e.world.time.tick),
    (r.airCheck = !0));
}
var Da = 1200,
  Oa = 1,
  ka = [3, 1, 1],
  Aa = 200;
function ja(t, n, r, i, a, o) {
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
      !p && a - l.get(e.v.id) >= Da && (p = e));
  }
  if (p && m > Oa && f(p)) return !0;
  if (
    !o ||
    Math.hypot(o.pos[0] - i.pos[0], o.pos[2] - i.pos[2]) < Aa ||
    !Lt(t.world, o.pos)
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
    let n = t.find((e) => a - l.get(e.v.id) >= Da);
    if (n && t.length > ka[e] && f(n)) return !0;
  }
  return !1;
}
function Ma(e, t, n) {
  let r = n?.targetId > 0 ? e.world.get(n.targetId) : null,
    i = r?.owner > 0 ? t.bots.get(r.owner) : null;
  if (i) {
    ((i.underFireUntil =
      e.world.time.tick + R.damageMemoryTicks + i.rng.int(0, 70)),
      (i.lastHitTick = e.world.time.tick),
      (i.threatId = n.attackerId ?? -1),
      (i.coverGoal = null),
      dt(i),
      t.stats.damageReactions++);
    let a = n.attackerId > 0 ? e.world.get(n.attackerId) : null;
    if (B(a) && w(e.world, r, a)) {
      let n = e.world.time.tick,
        r = xn(i, a.pos, n, a.id, 7);
      (_n(i, { id: a.id, pos: r, source: `damage` }, n),
        C(e.world) ||
          t.contacts.set(Ja(e, i), {
            entityId: a.id,
            pos: r,
            observedTick: n,
            source: `damage`,
            expires: n + R.contactMemoryTicks,
          }));
    }
  }
  let a = n?.attackerId > 0 ? e.world.get(n.attackerId) : null;
  if (r && B(a) && w(e.world, r, a) && !C(e.world)) {
    let i = e.world.time.tick,
      o = ki(t, e.world, r, a, !!n.fatal, i);
    o && n.fatal && Mi(t, r.team, o, i) && Pa(e, t, r.team, o, i);
  }
  let o = n?.attackerId > 0 ? e.world.get(n.attackerId) : null;
  n?.fatal && o?.owner > 0 && t.bots.has(o.owner) && t.stats.kills++;
  let s = o?.owner > 0 ? t.bots.get(o.owner) : null;
  if (s && r && !n?.fatal && r.id !== o.id) {
    let t = e.world.time.tick,
      n = s.pressing;
    s.pressing =
      n && n.id === r.id && t - n.tick < $a
        ? { id: r.id, hits: n.hits + 1, tick: t }
        : { id: r.id, hits: 1, tick: t };
  }
}
function Na(e, t, n) {
  let r = n?.victimId > 0 ? e.world.get(n.victimId) : null;
  (r?.owner > 0 &&
    t.bots.has(r.owner) &&
    (t.stats.deaths++, Pi(t, r.owner, e.world.time.tick)),
    n?.victimId > 0 && ji(t, n.victimId));
}
function Pa(t, n, r, i, a) {
  if (t.config.botFlank === !1 || t.world.match.phase !== `live`) return;
  let o = [];
  for (let a of n.bots.values()) {
    let n = t.world.get(a.entityId);
    if (
      a.team !== r ||
      !B(n) ||
      n.state & e.IN_VEHICLE ||
      a.flank ||
      a.nest ||
      a.perch ||
      a.elevation ||
      a.liftDuty ||
      a.insertion ||
      a.roof ||
      (a.classId !== `assault` && a.classId !== `support`)
    )
      continue;
    let s = Math.hypot(n.pos[0] - i.pos[0], n.pos[2] - i.pos[2]);
    s > 12 && s < Ei.huntReach && o.push({ b: a, e: n, d: s });
  }
  o.sort((e, t) => e.d - t.d || e.b.index - t.b.index);
  for (let { b: e, e: s } of o.slice(0, Ei.huntTries))
    if (ci(t.world, e, s, i.id, i.pos, a)) {
      ((e.hunting = i.id),
        Ni(n, r, i, e.playerId, a, !0),
        (n.stats.perchHunts = (n.stats.perchHunts ?? 0) + 1),
        n.trace?.(`hunt`, e, {
          tg: i.id,
          pos: i.pos.map((e) => Math.round(e * 10) / 10),
        }));
      return;
    }
  Ni(n, r, i, -1, a, !1);
}
function Fa(e, t) {
  let n = e.modules.get(`weapons`)?.weaponDefs,
    r = t.sidearm && t.sidearmId != null ? t.sidearmId : t.slot;
  return Array.isArray(n)
    ? (n.find((e) => e.id === r) ?? n[0])
    : {
        id: t.slot,
        mode: `AUTO`,
        velocity: 760,
        gravity: 9.81,
        range: 180,
        rpm: 650,
      };
}
function Ia(e) {
  return x(e) ? 300 : e.class === `carbine` || e.class === `smg` ? 150 : 190;
}
function La(e) {
  return x(e) ? 220 : e.class === `carbine` || e.class === `smg` ? 60 : 85;
}
function Ra(e) {
  return x(e)
    ? 220
    : e.class === `smg`
      ? 90
      : e.class === `carbine`
        ? 100
        : 130;
}
var za = (e, t) => !x(t) && t.class !== `lmg` && e.role !== `sentinel`;
function Ba(e, t) {
  let n = x(t) ? 150 : t.class === `carbine` || t.class === `smg` ? 14 : 24;
  return e.role === `flanker` ? n * 0.8 : n;
}
function Va(e) {
  return e === 2 || e === 3 ? `north` : e === 5 || e === 6 ? `south` : `main`;
}
var Ha = (e, t) => Math.hypot(e[0] - t[0], e[1] - t[2]),
  Ua = (e, t) =>
    e.length > 2 && Number.isFinite(t[1])
      ? 8 * Math.max(0, Math.abs(e[2] - t[1]) - 2)
      : 0;
function Wa(e, t) {
  let n = 0,
    r = 1 / 0;
  for (let i = 0; i < e.length; i++) {
    let a = Ha(e[i], t) + Ua(e[i], t);
    a < r && ((r = a), (n = i));
  }
  return n;
}
function Ga(e, n, r, i, a, s, c, l) {
  if (i.ext?.pl?.zip) {
    ((s.mx = 0),
      (s.mz = 0),
      (s.buttons &= ~(t.JUMP | t.INTERACT | t.SPRINT | t.CROUCH | t.PRONE)));
    return;
  }
  if (
    c ||
    !e.world.map.ziplines?.length ||
    l < (r.zipUntil ?? 0) ||
    (l + r.index) % 10
  )
    return;
  let u = o(e.world, i.pos);
  if (!u) return;
  let d = e.world.map.ziplines[u.index],
    f = u.dir > 0 ? d.b : d.a,
    p = Math.hypot(a[0] - i.pos[0], a[2] - i.pos[2]);
  Math.hypot(a[0] - f[0], a[2] - f[2]) + 20 < p &&
    ((s.buttons |= t.INTERACT),
    (r.zipUntil = l + 600),
    (n.stats.ziplineRides = (n.stats.ziplineRides | 0) + 1));
}
function Ka(e, t, n, r) {
  let i = e.world.map.floorNav,
    a = i ? e.world.map.floorLanes : null;
  if (
    i &&
    !(
      a > 0 &&
      t.lane !== `main` &&
      Number.isFinite(r[1]) &&
      Math.abs(r[1] - n.pos[1]) < 1.5 &&
      M(i, n.pos[0], n.pos[1], n.pos[2])?.id === `ground`
    )
  )
    return r;
  let o = e.world.map.routes?.[t.lane];
  if (!o || o.length < 2) return r;
  let s = Math.hypot(r[0] - n.pos[0], r[2] - n.pos[2]);
  if (i && s < a) return r;
  let c = e.world.map.laneDirect ?? 70;
  if (
    !i &&
    s < c &&
    (e.world.map.laneDirect == null ||
      !Number.isFinite(r[1]) ||
      Math.abs(r[1] - n.pos[1]) < 3)
  )
    return r;
  let l = Wa(o, n.pos),
    u = Wa(o, [r[0], r[1], r[2]]);
  if (l === u) return r;
  let d = u > l ? 1 : -1,
    f = l + d,
    p = (e, t) => e.length > 2 && t?.length > 2 && Math.abs(e[2] - t[2]) > 2.5,
    m = (e) => (e[3] ? [e[0] + ((t.index % 3) - 1) * e[3], e[1]] : e);
  for (
    ;
    f !== u && Ha(o[f], n.pos) < 14 && !Ua(o[f], n.pos) && !p(o[f], o[f + d]);
  )
    f += d;
  if (Ua(o[f], n.pos) && !Ua(o[l], n.pos) && Ha(m(o[l]), n.pos) > 3) {
    f = l;
    let e = o[l - d];
    if (e && !Ua(e, n.pos)) {
      let [t, r] = m(e),
        [i, a] = m(o[l]),
        s = i - t,
        c = a - r,
        u = Math.hypot(s, c) || 1;
      Math.abs((n.pos[0] - t) * c - (n.pos[2] - r) * s) / u > 2 && (f = l - d);
    }
  }
  if (e.world.map.laneDirect == null && Ha(o[f], n.pos) > s) return r;
  let h = o[f][3] ?? 0;
  return [o[f][0] + (h ? ((t.index % 3) - 1) * h : 0), r[1], o[f][1]];
}
