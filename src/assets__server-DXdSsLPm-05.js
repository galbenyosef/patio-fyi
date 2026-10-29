// assets__server-DXdSsLPm 05 — world
// Lines 1157-1443 of readable/assets__server-DXdSsLPm.pretty.js (statement-aligned).
function Q(t, n, r, i) {
  if (!r || (i !== 0 && i !== 1)) return !1;
  let a = t.world.get(r.entityId);
  if (a && a.hp > 0 && !(a.state & e.DEAD)) return !1;
  let o = v(t.world, i, r.id);
  if (o !== i) return !1;
  r.team = o;
  let s = t.world.get(r.entityId);
  return (
    s && (s.team = o),
    n.spawnPrefs.delete(r.id),
    n.squads.reconcile(),
    n.squads.sync(),
    !0
  );
}
function $(e, t, n, o = null) {
  let s = e.world.players.get(n),
    c = e.modules.get(`netcode`);
  if (!s || !c || e.world.match.phase === `ended` || K(o)) return null;
  let l = w(o)
    ? (T(e.world)?.select(s, o) ?? null)
    : t.rules.spawnFor
      ? t.rules.spawnFor(e.world, s)
      : s.isBot
        ? U(e, t, s)
        : typeof o == `string` && o.startsWith(`teammate:`)
          ? t.teammates.select(s, Number(o.slice(9)))
          : m(e.world, s, o, t.safeSpawnDistance);
  if (!l) return null;
  if (s.isBot)
    s.loadout = e.modules.get(`bots`)?.nextLoadout?.(s.id) ?? s.loadout;
  else {
    let t = [...(e.clients?.values?.() ?? [])].find((e) => e.playerId === s.id),
      n = e.config?.career,
      o = n?.row?.(s.name) ?? null,
      l = a(o?.score ?? 0).level,
      u = !!(t && n?.isAdmin?.(t)),
      d = s.loadout?.weapons;
    ((s.loadout = f(s.loadout, {
      canEquip: (e) => r(e, l, u),
      canAttach: i(o, u),
    })),
      d?.some((e, t) => e !== s.loadout.weapons[t]) &&
        t &&
        c.sendEvent?.(t.id, `ui:message`, {
          kind: `info`,
          text: `A locked weapon was replaced with your class starter. Earn career XP to unlock it.`,
          ttl: 5,
        }));
  }
  let u = c.spawnSoldierFor?.(s.id, { spawn: l });
  return (
    (t.pendingSpawn = null),
    u
      ? (w(l.anchorId) && T(e.world)?.spawned(s, l.anchorId),
        l.vehicleId != null &&
          e.modules.get(`vehicles`)?.deployInto?.(u, l.vehicleId),
        t.countedDeaths.delete(u.id),
        t.respawns.delete(s.id),
        t.spawnPrefs.delete(s.id),
        c.broadcastEvent?.(`player:spawn`, {
          entityId: u.id,
          playerId: s.id,
          pos: u.pos.slice(),
          anchorId: l.anchorId,
        }),
        t.stats.spawns++,
        u)
      : null
  );
}
function ue(t, n, r, { pos: i, yaw: a = 0 } = {}) {
  let o = t.world.players.get(r),
    s = t.modules.get(`netcode`),
    c = o && t.world.get(o.entityId);
  if (
    !o ||
    !s ||
    !c ||
    !(c.state & e.DEAD) ||
    t.world.match.phase === `ended` ||
    !i?.every?.(Number.isFinite)
  )
    return null;
  let l = s.spawnSoldierFor?.(o.id, {
    spawn: { pos: i, yaw: a, anchorId: `revive` },
  });
  if (!l) return null;
  (n.countedDeaths.delete(l.id),
    n.respawns.delete(o.id),
    n.spawnPrefs.delete(o.id),
    (o.deaths = Math.max(0, (o.deaths | 0) - 1)));
  let u = t.world.teams[o.team];
  return (
    u &&
      u.tickets > 0 &&
      t.world.match.phase === `live` &&
      (u.tickets++,
      Y(t, [
        {
          name: `match:tickets`,
          data: {
            team: o.team,
            amount: 1,
            reason: `revive`,
            tickets: u.tickets,
          },
        },
      ])),
    s.broadcastEvent?.(`player:spawn`, {
      entityId: l.id,
      playerId: o.id,
      pos: l.pos.slice(),
      anchorId: `revive`,
    }),
    (n.stats.revives = (n.stats.revives | 0) + 1),
    l
  );
}
function de(t, n) {
  let r = G.get(t.world);
  if (!r) return;
  let i = n?.client,
    a = n?.rpc;
  if (!i || !a) return;
  let o = t.world.players.get(i.playerId);
  if (!o) return;
  let s = t.modules.get(`netcode`);
  if (o.reserve && a.name !== `perf`) return;
  if (a.name === `spot`) {
    r.spotting.request(i, a.data);
    return;
  }
  if (a.name === `medic`) {
    r.medicCalls.request(i);
    return;
  }
  if (a.name === `squad`) {
    r.squads.action(o.id, a.data);
    return;
  }
  if (a.name === `chat`) {
    r.chat.say(i, o, a.data);
    return;
  }
  if (a.name === `perf`) {
    D(o, a.data, t.world.time.tick);
    return;
  }
  if (a.name === `team`) {
    let e = Q(t, r, o, a.data?.team);
    s?.sendEvent?.(i.id, `ui:message`, {
      kind: e ? `info` : `warn`,
      text: e
        ? `Joined ${t.world.teams[o.team].name}`
        : `Team change would unbalance the match`,
      ttl: 3,
    });
    return;
  }
  if (a.name === `redeploy`) {
    let n = t.world.get(o.entityId);
    if (
      !n ||
      n.hp <= 0 ||
      n.state & (e.DEAD | e.IN_VEHICLE) ||
      t.world.match.phase === `ended`
    )
      return;
    ((n.hp = 0), (n.state |= e.DEAD));
    let r = {
      targetId: n.id,
      attackerId: -1,
      amount: 100,
      part: `torso`,
      weapon: `Redeploy`,
      pos: n.pos.slice(),
      headshot: !1,
      fatal: !0,
    };
    (t.events.emit(`player:damage`, r),
      s?.sendEvent?.(i.id, `player:damage`, r));
    return;
  }
  if (a.name !== `spawn`) return;
  let c = t.world.get(o.entityId),
    l = !c || c.hp <= 0 || !!(c.state & e.DEAD);
  if (!l) return;
  (a.data?.team === 0 || a.data?.team === 1) && Q(t, r, o, a.data.team);
  let u = typeof a.data?.objectiveId == `string` ? a.data.objectiveId : null;
  if (u === `beacon`) {
    let e = T(t.world)?.of(o.id);
    e && (u = C(e));
  }
  if (K(u)) {
    (r.spawnPrefs.delete(o.id),
      s?.sendEvent?.(i.id, `ui:message`, {
        kind: `warn`,
        text: `Towers are not deployment points. Choose your HQ, a captured base, or a squadmate.`,
        ttl: 3,
      }));
    return;
  }
  if (
    u?.startsWith(`teammate:`) &&
    !r.squads.squadFor(o.id)?.members.includes(Number(u.slice(9)))
  ) {
    s?.sendEvent?.(i.id, `ui:message`, {
      kind: `warn`,
      text: `You can only deploy on your current squadmates`,
      ttl: 3,
    });
    return;
  }
  if (w(u)) {
    let e = T(t.world)?.reason(o, u) ?? `No beacon`;
    if (e) {
      (r.spawnPrefs.delete(o.id),
        s?.sendEvent?.(i.id, `ui:message`, {
          kind: `warn`,
          text:
            e === `No beacon`
              ? `That beacon is gone · choose another spawn`
              : `Beacon unavailable · ${e.toLowerCase()}`,
          ttl: 3,
        }));
      return;
    }
  }
  r.spawnPrefs.set(o.id, u);
  let d = r.respawns.get(o.id) ?? t.world.time.tick;
  if (
    ((o.loadout = f(a.data?.loadout)),
    l && t.world.time.tick >= d && !$(t, r, o.id, u))
  ) {
    let e = u?.startsWith(`teammate:`)
        ? t.world.players.get(Number(u.slice(9)))
        : null,
      n = e ? r.teammates.reason(o, e) : ``;
    if (w(u)) {
      s?.sendEvent?.(i.id, `ui:message`, {
        kind: `warn`,
        text: `Beacon blocked · deploying when there is room beside it`,
        ttl: 3,
      });
      return;
    }
    s?.sendEvent?.(i.id, `ui:message`, {
      kind: `warn`,
      text:
        e && n
          ? `${e.name ?? `Squadmate`} · ${n.toLowerCase()} · deploying when clear`
          : `Selected spawn is unsafe; waiting for a clear point`,
      ttl: 3,
    });
  }
}
function fe(e, t) {
  if (e.world.match.phase !== `ended`)
    for (let [n, r] of t.respawns) {
      if (e.world.time.tick < r) continue;
      let i = e.world.players.get(n);
      if (!i) {
        t.respawns.delete(n);
        continue;
      }
      if (!i.isBot && !t.spawnPrefs.has(n)) continue;
      let a = t.spawnPrefs.get(n) ?? null;
      if (K(a)) {
        t.spawnPrefs.delete(n);
        continue;
      }
      if (
        a?.startsWith(`teammate:`) &&
        !t.squads.squadFor(n)?.members.includes(Number(a.slice(9)))
      ) {
        t.spawnPrefs.delete(n);
        continue;
      }
      if (w(a) && (!T(e.world) || T(e.world).accessReason(i, a))) {
        t.spawnPrefs.delete(n);
        continue;
      }
      $(e, t, n, a) || t.respawns.set(n, e.world.time.tick + 60);
    }
}
