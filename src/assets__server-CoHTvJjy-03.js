// assets__server-CoHTvJjy 03 — pos
// Lines 757-1073 of readable/assets__server-CoHTvJjy.pretty.js (statement-aligned).
function ne(t) {
  let n = new Map();
  return {
    damage({ targetId: r, amount: i }) {
      let a = t.get(r);
      a?.type === `soldier` &&
        i > 0 &&
        (a.hp <= 0 || a.state & e.DEAD
          ? n.delete(r)
          : n.set(r, { entity: a, tick: t.time.tick + 240 }));
    },
    tick() {
      for (let [r, i] of n) {
        let a = t.get(r);
        if (
          a !== i.entity ||
          a.hp <= 0 ||
          a.state & e.DEAD ||
          a.hp >= a.maxHp
        ) {
          n.delete(r);
          continue;
        }
        t.time.tick < i.tick ||
          ((a.hp = Math.min(a.maxHp, a.hp + a.maxHp * 0.25)),
          (i.tick = t.time.tick + 100),
          a.hp >= a.maxHp && n.delete(r));
      }
    },
  };
}
function re(t) {
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
  let c = (n) => {
      let i = r.get(n?.entityId);
      return i?.state & e.IN_VEHICLE
        ? t.modules.get(`vehicles`)?.deploymentSeat?.(i.seat, n.team)
        : null;
    },
    l = (t, n) =>
      !t || !n || n.team !== t.team || !s(r, t.id, n.id)
        ? `Not in your squad`
        : a(r.get(n.entityId))
          ? r.time.tick < (i.get(n.entityId) ?? 0)
            ? `In combat`
            : r.get(n.entityId).state & e.IN_VEHICLE && !c(n)
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
      let o = c(i);
      if (o) return { ...o, anchorId: `teammate:${t}` };
      let s = r.get(i.entityId),
        l = r.byType(`soldier`).filter(a),
        d = l.filter((t) => t.team !== e.team);
      for (let e of [2, 3, 5, 7, 9])
        for (let i = 0; i < 16; i++) {
          let a = (i * Math.PI) / 8,
            o = [
              s.pos[0] + Math.cos(a) * e,
              s.pos[1],
              s.pos[2] + Math.sin(a) * e,
            ],
            c = r.map.raycast([o[0], o[1] + 0.5, o[2]], [0, -1, 0], 2),
            u = r.map.getHeight(o[0], o[2]);
          if (
            ((o[1] = c?.point?.[1] ?? u),
            !o.every(Number.isFinite) ||
              c?.normal?.[1] < 0.65 ||
              Math.abs(o[1] - s.pos[1]) > 1.5)
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
              ))
          )
            continue;
          let p = [s.pos[0], s.pos[1] + 1, s.pos[2]],
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
            return { pos: o, yaw: s.yaw, anchorId: `teammate:${t}` };
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
                .filter((e) => e.team === t.team && s(r, t.id, e.id))
                .map((e) => {
                  let n = c(e);
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
var R = (e, t) => Math.hypot(e[0] - t[0], e[2] - t[2]);
function z(e, t) {
  let n = o(e, c(e, t.id));
  if (n) return n.pos;
  let r = e.get(t.entityId)?.pos ?? p(e)[t.team].pos,
    i = e.match.objectives,
    a = i.filter((e) => e.contested),
    s = a.length ? a : i.filter((e) => e.team !== t.team);
  return (
    [...(s.length ? s : i)].sort(
      (e, t) =>
        R(e.pos, r) - R(t.pos, r) || String(e.id).localeCompare(String(t.id)),
    )[0]?.pos ?? r
  );
}
function B(e, t, n) {
  let r = e.world,
    i = r.match.objectives?.find(
      (t) => t.id === e.modules?.get?.(`bots`)?.getBot?.(n.id)?.objectiveId,
    ),
    a =
      (i && (i.team !== n.team || i.contested) && !o(r, c(r, n.id))
        ? i.pos
        : null) ?? z(r, n),
    s = [],
    l = m(r, n, null, t.safeSpawnDistance, a);
  l && s.push(l);
  let u = c(r, n.id),
    f = o(r, u),
    p = u?.order?.kind,
    h = !!f && p !== `regroup` && p !== `hold`,
    g = !!f && !h;
  for (let e of u?.members ?? []) {
    if (e === n.id) continue;
    let i = t.teammates.select(n, e);
    i &&
      ((h && R(i.pos, a) > 70) ||
        (!g && i.pos[1] - r.map.getHeight(i.pos[0], i.pos[2]) > 1.5) ||
        d(r, i.pos, 0.5) ||
        s.push(i));
  }
  return (
    s.sort(
      (e, t) =>
        R(e.pos, a) - R(t.pos, a) ||
        String(e.anchorId).localeCompare(String(t.anchorId)),
    ),
    s[0] ?? null
  );
}
function V(t) {
  let n = new Map(),
    r = () => t.modules.get(`netcode`);
  function i(i) {
    if (!i || u(t.world)) return !1;
    let a = t.world.time.tick;
    if (a < (n.get(i.playerId) ?? 0)) return !1;
    let o = i.entityId > 0 ? t.world.get(i.entityId) : null;
    if (
      !o ||
      o.type !== `soldier` ||
      o.hp <= 0 ||
      o.state & e.DEAD ||
      o.team < 0
    )
      return !1;
    n.set(i.playerId, a + 360);
    let s = {
      entityId: o.id,
      playerId: i.playerId,
      team: o.team,
      durationTicks: 480,
    };
    t.events.emit(`medic:call`, s);
    for (let e of t.clients?.values?.() ?? [])
      t.world.players.get(e.playerId)?.team === o.team &&
        r()?.sendEvent?.(e.id, `medic:call`, s);
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
var H = new WeakMap(),
  U = (e) => typeof e == `string` && e.startsWith(`tower:`);
function W(e, t, n = 0) {
  return Number.isFinite(+e) ? Math.max(n, +e) : t;
}
function G(e, t, n, r = -1) {
  (e.events.emit(t, n), e.modules.get(`netcode`)?.broadcastEvent?.(t, n, r));
}
function K(e, t) {
  let n = H.get(e.world),
    r = e.modules.get(`netcode`);
  n && r && r.sendEvent?.(t, `match:state`, n.rules.snapshot(e.world));
}
var q = 1 << 24;
function J(e, t) {
  for (let n of t)
    (G(e, n.name, n.data),
      n.name === `rush:destroyed` &&
        G(e, `explosion`, {
          pos: n.data.pos,
          radius: 9,
          strength: 3.5,
          scale: 2.2,
          kind: `c4`,
          projectileId: q++,
          weaponId: 0,
          sourceTeam: -1,
          attackerId: -1,
          weapon: `M-COM`,
        }));
}
function Y(e, t) {
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
    i = Y(e, n);
  (n && i !== r && e.modules.get(`netcode`)?.spawnSoldierFor?.(n.id),
    n &&
      !e.world.get(n.entityId) &&
      H.get(e.world)?.respawns.set(n.id, e.world.time.tick + 60),
    t?.client?.id > 0 && K(e, t.client.id));
  let a = H.get(e.world);
  (a?.squads.reconcile(), a?.squads.sync());
}
function Z(e, t) {
  let n = e.get(t);
  if (n?.owner > 0) return e.players.get(n.owner) ?? null;
  for (let n of e.players.values()) if (n.entityId === t) return n;
  return null;
}
