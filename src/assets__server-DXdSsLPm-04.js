// assets__server-DXdSsLPm 04 — pos
// Lines 811-1156 of readable/assets__server-DXdSsLPm.pretty.js (statement-aligned).
function ie(t) {
  let r = t.world,
    i = new Map(),
    a = (t) => t?.type === `soldier` && t.hp > 0 && !(t.state & e.DEAD),
    o = (e) => {
      a(r.get(e)) && i.set(e, r.time.tick + 360);
    };
  (t.events.on(`player:damage`, (e) => {
    e?.amount > 0 && (o(e.targetId), o(e.attackerId));
  }),
    t.events.on(`weapon:fire`, (e) => o(e.entityId)),
    t.events.on(`rocket:launch`, (e) => o(e.entityId)),
    t.events.on(`grenade:thrown`, (e) => o(e.entityId)),
    t.events.on(`gadget:used`, (e) => o(e.entityId)),
    t.events.on(`vehicle:fire`, (t) => {
      if (!t?.replay)
        for (let n of r.byType(`soldier`))
          n.seat === t.vehicleId && n.state & e.IN_VEHICLE && o(n.id);
    }),
    t.events.on(`vehicle:damage`, (t) => {
      if (t.amount > 0)
        for (let n of r.byType(`soldier`))
          n.seat === t.vehicleId && n.state & e.IN_VEHICLE && o(n.id);
    }),
    t.events.on(`world:despawn`, (e) => i.delete(e.id)));
  let s = (n) => {
      let i = r.get(n?.entityId);
      return i?.state & e.IN_VEHICLE
        ? t.modules.get(`vehicles`)?.deploymentSeat?.(i.seat, n.team)
        : null;
    },
    l = (t, n) =>
      !t || !n || n.team !== t.team || !c(r, t.id, n.id)
        ? `Not in your squad`
        : a(r.get(n.entityId))
          ? r.time.tick < (i.get(n.entityId) ?? 0)
            ? `In combat`
            : r.get(n.entityId).state & e.IN_VEHICLE && !s(n)
              ? `Vehicle full or unavailable`
              : ``
          : `Deploying`,
    u = (e, t) => l(e, t) === ``;
  return {
    eligible: u,
    reason: l,
    select(e, t) {
      let i = r.players.get(t);
      if (!u(e, i)) return null;
      let o = s(i);
      if (o) return { ...o, anchorId: `teammate:${t}` };
      let c = r.get(i.entityId),
        l = r.byType(`soldier`).filter(a),
        d = l.filter((t) => t.team !== e.team);
      for (let e of [2, 3, 5, 7, 9])
        for (let i = 0; i < 16; i++) {
          let a = (i * Math.PI) / 8,
            o = [
              c.pos[0] + Math.cos(a) * e,
              c.pos[1],
              c.pos[2] + Math.sin(a) * e,
            ],
            s = r.map.raycast([o[0], o[1] + 0.5, o[2]], [0, -1, 0], 2),
            u = r.map.getHeight(o[0], o[2]);
          if (
            ((o[1] = s?.point?.[1] ?? u),
            !o.every(Number.isFinite) ||
              s?.normal?.[1] < 0.65 ||
              Math.abs(o[1] - c.pos[1]) > 1.5)
          )
            continue;
          let f = r.map.bounds;
          if (
            (f &&
              (o[0] < f[0] + 0.5 ||
                o[0] > f[2] - 0.5 ||
                o[2] < f[1] + 0.5 ||
                o[2] > f[3] - 0.5)) ||
            (Number.isFinite(r.map.waterLevel) &&
              o[1] < r.map.waterLevel + 0.15) ||
            l.some((e) => Math.hypot(e.pos[0] - o[0], e.pos[2] - o[2]) < 2.6) ||
            (o[1] - u < 1.5 &&
              r.map.noSpawn?.some(
                (e) =>
                  o[0] > e[0] - 0.5 &&
                  o[0] < e[2] + 0.5 &&
                  o[2] > e[1] - 0.5 &&
                  o[2] < e[3] + 0.5,
              )) ||
            r.map.spawnBlocked?.(o)
          )
            continue;
          let p = [c.pos[0], c.pos[1] + 1, c.pos[2]],
            m = [o[0] - p[0], o[1] + 1 - p[1], o[2] - p[2]],
            _ = Math.hypot(...m),
            v = r.map.raycast(
              p,
              m.map((e) => e / _),
              _,
            );
          if (
            !(v && v.dist < _ - 0.3) &&
            n(r, o) &&
            g(r.map, o, d, 60) &&
            !h(r, o)
          )
            return { pos: o, yaw: c.yaw, anchorId: `teammate:${t}` };
        }
      return null;
    },
    tick() {
      if (r.time.tick % 30) return;
      let e = t.modules.get(`netcode`);
      for (let n of t.clients?.values?.() ?? []) {
        let t = r.players.get(n.playerId);
        t &&
          (a(r.get(t.entityId)) ||
            e?.sendEvent?.(n.id, `deployment:teammates`, {
              team: t.team,
              targets: [...r.players.values()]
                .filter((e) => e.team === t.team && c(r, t.id, e.id))
                .map((e) => {
                  let n = s(e);
                  return {
                    playerId: e.id,
                    entityId: e.entityId,
                    eligible: u(t, e),
                    reason: l(t, e),
                    vehicle: n
                      ? { id: n.vehicleId, name: n.name, free: n.free }
                      : null,
                  };
                }),
            }));
      }
    },
  };
}
var V = (e, t) => Math.hypot(e[0] - t[0], e[2] - t[2]);
function H(e, t) {
  let n = s(e, l(e, t.id));
  if (n) return n.pos;
  let r = e.get(t.entityId)?.pos ?? p(e)[t.team].pos,
    i = e.match.objectives,
    a = i.filter((e) => e.contested),
    o = a.length ? a : i.filter((e) => e.team !== t.team);
  return (
    [...(o.length ? o : i)].sort(
      (e, t) =>
        V(e.pos, r) - V(t.pos, r) || String(e.id).localeCompare(String(t.id)),
    )[0]?.pos ?? r
  );
}
function U(e, t, n) {
  let r = e.world,
    i = r.match.objectives?.find(
      (t) => t.id === e.modules?.get?.(`bots`)?.getBot?.(n.id)?.objectiveId,
    ),
    a =
      (i && (i.team !== n.team || i.contested) && !s(r, l(r, n.id))
        ? i.pos
        : null) ?? H(r, n),
    o = [],
    c = m(r, n, null, t.safeSpawnDistance, a);
  c && o.push(c);
  let u = l(r, n.id),
    f = s(r, u),
    p = u?.order?.kind,
    h = !!f && p !== `regroup` && p !== `hold`,
    g = !!f && !h;
  for (let e of u?.members ?? []) {
    if (e === n.id) continue;
    let i = t.teammates.select(n, e);
    i &&
      ((h && V(i.pos, a) > 70) ||
        (!g && i.pos[1] - r.map.getHeight(i.pos[0], i.pos[2]) > 1.5) ||
        d(r, i.pos, 0.5) ||
        o.push(i));
  }
  for (let e = o.length - 1; e >= 0; e--)
    r.map.spawnBlocked?.(o[e].pos) && o.splice(e, 1);
  return (
    o.sort(
      (e, t) =>
        V(e.pos, a) - V(t.pos, a) ||
        String(e.anchorId).localeCompare(String(t.anchorId)),
    ),
    o[0] ?? null
  );
}
function W(t) {
  let n = new Map(),
    r = () => t.modules.get(`netcode`);
  function i(i) {
    if (!i || o(t.world)) return !1;
    let a = t.world.time.tick;
    if (a < (n.get(i.playerId) ?? 0)) return !1;
    let s = i.entityId > 0 ? t.world.get(i.entityId) : null;
    if (
      !s ||
      s.type !== `soldier` ||
      s.hp <= 0 ||
      s.state & e.DEAD ||
      s.team < 0
    )
      return !1;
    n.set(i.playerId, a + 360);
    let c = {
      entityId: s.id,
      playerId: i.playerId,
      team: s.team,
      durationTicks: 480,
    };
    t.events.emit(`medic:call`, c);
    for (let e of t.clients?.values?.() ?? [])
      t.world.players.get(e.playerId)?.team === s.team &&
        r()?.sendEvent?.(e.id, `medic:call`, c);
    return !0;
  }
  return {
    request: i,
    forget(e) {
      n.delete(e);
    },
    dispose() {
      n.clear();
    },
  };
}
var G = new WeakMap(),
  K = (e) => typeof e == `string` && e.startsWith(`tower:`);
function q(e, t, n = 0) {
  return Number.isFinite(+e) ? Math.max(n, +e) : t;
}
function J(e, t, n, r = -1) {
  (e.events.emit(t, n), e.modules.get(`netcode`)?.broadcastEvent?.(t, n, r));
}
function ae(e, t) {
  let n = G.get(e.world),
    r = e.modules.get(`netcode`);
  n && r && r.sendEvent?.(t, `match:state`, n.rules.snapshot(e.world));
}
var oe = 1 << 24;
function Y(e, t) {
  for (let n of t) {
    if (n.name === `objective:score`) {
      se(e, n.data);
      continue;
    }
    (J(e, n.name, n.data),
      n.name === `rush:destroyed` &&
        J(e, `explosion`, {
          pos: n.data.pos,
          radius: 9,
          strength: 3.5,
          scale: 2.2,
          kind: `c4`,
          projectileId: oe++,
          weaponId: 0,
          sourceTeam: -1,
          attackerId: -1,
          weapon: `M-COM`,
        }));
  }
}
function se(e, t) {
  let n = new Map();
  for (let t of e.world.players.values())
    t.entityId != null && n.set(t.entityId, t);
  let r = e.modules.get(`netcode`);
  for (let [i, a, o] of t?.awards ?? []) {
    let t = n.get(i);
    if (t && a > 0 && ((t.score = (t.score | 0) + a), !t.isBot))
      for (let n of e.clients?.values?.() ?? [])
        n.playerId === t.id &&
          r?.sendEvent?.(n.id, `score:award`, { points: a, reason: o });
  }
  e.events.emit(`objective:score`, t);
}
function ce(e, t) {
  if (!t) return -1;
  let n = v(e.world, t.team, t.id);
  if (n !== t.team) {
    t.team = n;
    let r = e.world.get(t.entityId);
    r && (r.team = n);
  }
  return n;
}
function X(e, t) {
  let n =
      t?.player ??
      (t?.client?.playerId > 0 ? e.world.players.get(t.client.playerId) : null),
    r = n?.team,
    i = ce(e, n);
  (n && i !== r && e.modules.get(`netcode`)?.spawnSoldierFor?.(n.id),
    n &&
      !e.world.get(n.entityId) &&
      G.get(e.world)?.respawns.set(n.id, e.world.time.tick + 60),
    t?.client?.id > 0 && ae(e, t.client.id));
  let a = G.get(e.world);
  (a?.squads.reconcile(), a?.squads.sync());
}
function Z(e, t) {
  let n = e.get(t);
  if (n?.owner > 0) return e.players.get(n.owner) ?? null;
  for (let n of e.players.values()) if (n.entityId === t) return n;
  return null;
}
function le(e, t) {
  if (!t?.fatal) return;
  let n = G.get(e.world);
  if (!n) return;
  let r = e.world.get(t.targetId);
  if (!r || r.type !== `soldier` || n.countedDeaths.has(r.id)) return;
  n.countedDeaths.add(r.id);
  let i = Z(e.world, r.id),
    a = Z(e.world, t.attackerId);
  if (!i) return;
  i.deaths = (i.deaths | 0) + 1;
  let o = 0,
    s = e.world.match.mode === `ffa`;
  (a &&
    a.id !== i.id &&
    (s || a.team !== i.team) &&
    ((a.kills = (a.kills | 0) + 1),
    (a.score = (a.score | 0) + (t.headshot ? 125 : 100)),
    (o = s ? 0 : (n.squads?.orderBonus?.(a.id, r.pos) ?? 0))),
    Y(e, n.rules.onDeath(e.world, i.team)),
    J(e, `player:death`, {
      victimId: r.id,
      killerId: t.attackerId ?? -1,
      victimPlayerId: i.id,
      killerPlayerId: a?.id ?? -1,
      weapon: t.weapon,
      headshot: !!t.headshot,
      orderBonus: o,
      ...(t.dir ? { dir: t.dir } : {}),
    }),
    s && a && a.id !== i.id && Y(e, n.rules.onKill?.(e.world, a) ?? []),
    e.world.match.phase !== `ended` &&
      n.respawns.set(
        i.id,
        Math.max(n.respawns.get(i.id) ?? 0, e.world.time.tick + n.respawnDelay),
      ),
    n.stats.deaths++);
}
