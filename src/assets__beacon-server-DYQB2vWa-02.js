// assets__beacon-server-DYQB2vWa 02 — pos
// Lines 21-372 of readable/assets__beacon-server-DYQB2vWa.pretty.js (statement-aligned).
function y(_) {
  let y = _.world,
    b = new Set(),
    x = new Map(),
    S = new Map(),
    C = 0,
    w = () => _.modules?.get?.(`netcode`),
    T = (e) => {
      for (let t of _.clients?.values?.() ?? []) if (t.playerId === e) return t;
      return null;
    },
    E = (e, t, n) => {
      let r = T(e);
      r && w()?.sendEvent?.(r.id, t, n);
    },
    D = (e, t) => {
      (_.events.emit(e, t), w()?.broadcastEvent?.(e, t));
    },
    O = (e) => {
      (y.despawn(e.id), S.delete(e.id), u(y, b));
    },
    k = (e, t = `beacon`) => {
      if (t === `beacon`) return p(y, e?.id);
      let n = /^beacon:([1-9]\d*):([1-9]\d*)$/.exec(t ?? ``);
      if (!n) return null;
      let r = y.get(Number(n[1]));
      return r?.beaconGeneration === Number(n[2]) ? r : null;
    },
    A = (t) =>
      y
        .byType(`soldier`)
        .some(
          (n) =>
            n.hp > 0 &&
            !(n.state & e.DEAD) &&
            a(y, n, t) &&
            Math.abs(n.pos[1] - t.pos[1]) <= m.enemyRise &&
            Math.hypot(n.pos[0] - t.pos[0], n.pos[2] - t.pos[2]) <
              m.enemyRadius,
        ),
    j = (e) => Math.max(0, (S.get(e.id) ?? 0) - y.time.tick);
  function M(e) {
    if (!e?.every(Number.isFinite)) return `Invalid beacon position`;
    for (let t of [y.map.bounds, y.map.spawnBounds])
      if (
        t &&
        (e[0] - 0.4 < t[0] ||
          e[2] - 0.4 < t[1] ||
          e[0] + 0.4 > t[2] ||
          e[2] + 0.4 > t[3])
      )
        return `Outside the deployment area`;
    if (
      y.map.noSpawn?.some(
        (t) =>
          e[0] > t[0] - 1 &&
          e[0] < t[2] + 1 &&
          e[2] > t[1] - 1 &&
          e[2] < t[3] + 1,
      )
    )
      return `No deployment in this area`;
    let t = y.map.waterBounds;
    return (!t ||
      (e[0] >= t[0] && e[0] <= t[2] && e[2] >= t[1] && e[2] <= t[3])) &&
      Number.isFinite(y.map.waterLevel) &&
      e[1] < y.map.waterLevel + 0.05
      ? `Beacons cannot go in water`
      : ``;
  }
  function N(e, t, n) {
    if (e?.type !== `prop` || e.weapon !== m.prop || y.get(e.id) !== e)
      return !1;
    let r = [e.pos[0], e.pos[1] + 0.25, e.pos[2]],
      i = e.owner,
      a = t ? y.players.get(t.owner) : null;
    return (
      (e.hp = 0),
      O(e),
      x.set(i, y.time.tick + m.plantCooldown),
      D(`beacon:destroyed`, {
        id: e.id,
        pos: r,
        owner: i,
        team: e.team,
        attackerId: t?.id ?? null,
        cause: n,
      }),
      E(i, `beacon:status`, { reason: `destroyed`, cause: n }),
      a &&
        a.id !== i &&
        ((a.score = (a.score | 0) + m.score),
        E(a.id, `score:award`, {
          points: m.score,
          reason: `Beacon destroyed`,
        })),
      !0
    );
  }
  function P(e) {
    let i = r(e, [0, 0, 0]),
      s = t(e.yaw, e.pitch ?? 0),
      c = y.map.raycast(i, s, m.reach);
    if (!c || !(c.normal?.[1] >= 0.6) || c.beaconId != null) {
      let n = t(e.yaw, 0),
        r = y.map.raycast(i, n, 1.2),
        a = r ? Math.max(0, r.dist - 0.35) : 1;
      c = y.map.raycast(
        [e.pos[0] + n[0] * a, e.pos[1] + 1.2, e.pos[2] + n[2] * a],
        [0, -1, 0],
        3.5,
      );
    }
    if (!c?.point?.every(Number.isFinite) || !(c.normal?.[1] >= 0.6))
      return { reason: `Beacons need level ground` };
    if (c.entityId != null || String(c.colliderId ?? ``).startsWith(`vehicle-`))
      return { reason: `Beacons cannot go on vehicles` };
    if (c.beaconId != null) return { reason: `Beacons need level ground` };
    if (Math.abs(c.point[1] - e.pos[1]) > 2.5)
      return { reason: `Too far to reach` };
    let l = [c.point[0], c.point[1] + 0.01, c.point[2]],
      u = M(l);
    return u
      ? { reason: u }
      : y.match.mode !== `ffa` &&
          o(y).some(
            (t, n) =>
              n !== e.team &&
              Math.hypot(t.pos[0] - l[0], t.pos[2] - l[2]) < m.enemyHQRadius,
          )
        ? { reason: `Too close to enemy headquarters` }
        : y
              .byType(`prop`)
              .some(
                (t) =>
                  f(t) &&
                  t.owner !== e.owner &&
                  !a(y, e, t) &&
                  Math.abs(t.pos[1] - l[1]) < m.enemyRise &&
                  Math.hypot(t.pos[0] - l[0], t.pos[2] - l[2]) < m.spacing,
              )
          ? { reason: `Keep beacons ${m.spacing} m apart` }
          : n(y, l)
            ? { pos: l }
            : { reason: `Beacon needs room to deploy` };
  }
  let F = {
    of: (e) => p(y, e),
    use(e) {
      let t = y.time.tick,
        n = y.players.get(e?.owner);
      if (
        !v(e) ||
        y.match.phase === `ended` ||
        n?.entityId !== e.id ||
        n?.team !== e.team ||
        n?.loadout?.classId !== `sniper`
      )
        return `unavailable`;
      if (t < (x.get(e.owner) ?? 0)) {
        let n = `Beacon ready in ${Math.ceil((x.get(e.owner) - t) / 60)} s`;
        return (E(e.owner, `beacon:status`, { reason: n }), n);
      }
      let r = P(e);
      if (!r.pos)
        return (E(e.owner, `beacon:status`, { reason: r.reason }), r.reason);
      let i = p(y, e.owner);
      i && O(i);
      let a = y.spawn(`prop`, {
        weapon: m.prop,
        pos: r.pos,
        yaw: e.yaw,
        owner: e.owner,
        team: e.team,
        hp: m.hp,
        maxHp: m.hp,
        beaconGeneration: ++C,
      });
      return (
        x.set(e.owner, t + m.plantCooldown),
        S.set(a.id, t + m.armTicks),
        u(y, b),
        _.events.emit(`gadget:used`, { entityId: e.id }),
        D(`beacon:planted`, {
          id: a.id,
          pos: a.pos.slice(),
          owner: e.owner,
          moved: !!i,
        }),
        E(e.owner, `beacon:status`, { reason: `planted`, moved: !!i }),
        `planted`
      );
    },
    damage(e, t, n) {
      return !f(e) || !n || !a(y, n, e) || !(t > 0)
        ? !1
        : ((e.hp = Math.max(0, e.hp - t)), e.hp <= 0 && N(e, n, `bullets`), !0);
    },
    melee(e) {
      let t = -Math.sin(e.yaw),
        n = -Math.cos(e.yaw),
        r = null,
        i = 1 / 0;
      for (let o of y.entities.values()) {
        if (!f(o) || !a(y, e, o)) continue;
        let s = o.pos[0] - e.pos[0],
          c = o.pos[2] - e.pos[2],
          l = Math.hypot(s, c);
        l > h.reach ||
          Math.abs(o.pos[1] - e.pos[1]) > h.rise ||
          l >= i ||
          (l > 0.35 && (s * t + c * n) / l < h.cone) ||
          ((r = o), (i = l));
      }
      return r ? N(r, e, `knife`) : !1;
    },
    explosion(e) {
      if (!e?.pos?.every?.(Number.isFinite)) return;
      let t = e.attackerId == null ? null : y.get(e.attackerId);
      for (let n of [...y.entities.values()])
        f(n) &&
          ((t?.type === `soldier`
            ? !a(y, t, n)
            : !(e.sourceTeam >= 0 && i(y, e.sourceTeam, -1, n))) ||
            (Math.hypot(
              n.pos[0] - e.pos[0],
              n.pos[1] + 0.2 - e.pos[1],
              n.pos[2] - e.pos[2],
            ) <=
              Math.min(
                m.explosionReach,
                (e.radius ?? m.explosionReach) * 0.75,
              ) &&
              N(n, t?.type === `soldier` ? t : null, e.kind ?? `explosion`)));
    },
    select(e, t = `beacon`) {
      let r = k(e, t);
      if (F.reason(e, t)) return null;
      let i = y.byType(`soldier`).filter(v);
      for (let e of [0.8, 1.3, 1.9, 2.6])
        for (let t = 0; t < 8; t++) {
          let a = (t * Math.PI) / 4 + e,
            o = [
              r.pos[0] + Math.cos(a) * e,
              r.pos[1],
              r.pos[2] + Math.sin(a) * e,
            ],
            s = y.map.raycast([o[0], r.pos[1] + 0.9, o[2]], [0, -1, 0], 2);
          if (
            !s?.point ||
            !(s.normal?.[1] >= 0.6) ||
            s.entityId != null ||
            Math.abs(s.point[1] - r.pos[1]) > 0.6 ||
            ((o[1] = s.point[1]), M(o))
          )
            continue;
          let c = [r.pos[0], r.pos[1] + 0.4, r.pos[2]],
            u = [o[0] - c[0], o[1] + 0.4 - c[1], o[2] - c[2]],
            d = Math.hypot(...u),
            f = y.map.raycast(
              c,
              u.map((e) => e / d),
              d,
              null,
              `beacon-` + r.id,
            );
          if (
            !(f && f.dist < d - 0.05) &&
            !i.some(
              (e) =>
                Math.hypot(e.pos[0] - o[0], e.pos[2] - o[2]) < 0.9 &&
                Math.abs(e.pos[1] - o[1]) < 1.8,
            ) &&
            n(y, o)
          )
            return { pos: o, yaw: r.yaw ?? 0, anchorId: l(r) };
        }
      return null;
    },
    accessReason: (e, t = `beacon`) => d(y, e, k(e, t)),
    reason(e, t = `beacon`) {
      let n = k(e, t),
        r = d(y, e, n);
      if (r) return r;
      if (y.match.phase === `ended`) return `Round ended`;
      let i = M(n.pos);
      if (i) return i;
      if (A(n)) return `Enemies nearby`;
      let a = j(n);
      return a ? `Beacon ready in ${Math.ceil(a / 60)} s` : ``;
    },
    spawned(e, t) {
      let n = k(e, t);
      return !d(y, e, n) && (S.set(n.id, y.time.tick + m.spawnCooldown), !0);
    },
    targets(e, t = new Map()) {
      return c(y, e).map((n) => {
        if (t.has(n.id)) return t.get(n.id);
        let r = l(n),
          i = F.reason(e, r) || (F.select(e, r) ? `` : `No room beside beacon`),
          a = {
            id: n.id,
            beaconGeneration: n.beaconGeneration,
            spawnId: r,
            owner: n.owner,
            name: y.players.get(n.owner)?.name ?? `Squadmate`,
            pos: n.pos.slice(),
            team: n.team,
            reason: i,
          };
        return (t.set(n.id, a), a);
      });
    },
    tick() {
      u(y, b);
      let e = y.match?.phase === `ended`;
      for (let t of [...y.entities.values()]) {
        if (!f(t)) continue;
        let n = y.players.get(t.owner);
        (e || !n || n.team !== t.team) && O(t);
      }
      if (y.time.tick % 60 != 0) return;
      let t = new Map();
      for (let e of _.clients?.values?.() ?? []) {
        let n = y.players.get(e.playerId);
        if (!n) continue;
        let r = F.targets(n, t),
          i = r.find((e) => e.owner === n.id);
        w()?.sendEvent?.(e.id, `beacon:spawn`, {
          id: i?.id ?? null,
          pos: i?.pos ?? null,
          team: n.team,
          reason: i?.reason ?? `No beacon`,
          targets: r,
        });
      }
    },
    dispose() {
      for (let e of [...y.entities.values()]) f(e) && y.despawn(e.id);
      (s(y, b), x.clear(), S.clear(), g.delete(y));
    },
  };
  return (
    _.events.on(`net:clientLeft`, ({ client: e } = {}) => {
      let t = e && p(y, e.playerId);
      (t && O(t), x.delete(e?.playerId));
    }),
    _.events.on(`explosion`, (e) => F.explosion(e)),
    g.set(y, F),
    F
  );
}
