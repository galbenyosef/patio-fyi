// assets__server-DXdSsLPm 06 — world
// Lines 1444-1649 of readable/assets__server-DXdSsLPm.pretty.js (statement-aligned).
var pe = {
  name: `gamemodes`,
  deps: [`netcode`],
  init(e) {
    let n = e.config ?? {},
      r = new _({
        tickets: q(n.tickets, b.tickets, 1),
        warmupSeconds: q(n.warmupSeconds, b.warmupSeconds),
        matchSeconds: q(n.matchSeconds, b.matchSeconds, 1),
        captureSeconds: q(n.captureSeconds, b.captureSeconds, 1),
        bleedSeconds: q(n.bleedSeconds, b.bleedSeconds, 0.25),
        objectiveRadius: q(n.objectiveRadius, b.objectiveRadius, 1),
      }),
      i = {
        rules: r,
        respawns: new Map(),
        spawnPrefs: new Map(),
        countedDeaths: new Set(),
        pendingSpawn: null,
        recovery: re(e.world),
        squads: u(e),
        chat: S(e),
        teammates: ie(e),
        spotting: null,
        medicCalls: null,
        respawnDelay: y(q(n.respawnSeconds, b.respawnSeconds, 0)),
        safeSpawnDistance: q(n.safeSpawnDistance, b.safeSpawnDistance, 1),
        stats: { deaths: 0, spawns: 0, objectiveChanges: 0 },
      };
    ((i.spotting = E(e)),
      (i.medicCalls = W(e)),
      G.set(e.world, i),
      r.init(e.world, n.objectives),
      e.modules.get(`netcode`)?.setSpawnProvider?.((t, n) => {
        if (!t.isBot && !i.spawnPrefs.has(t.id)) return null;
        let r = i.spawnPrefs.get(t.id) ?? null;
        return w(r)
          ? (T(n)?.select(t, r) ?? null)
          : i.rules.spawnFor
            ? i.rules.spawnFor(n, t)
            : t.isBot
              ? U(e, i, t)
              : K(r)
                ? null
                : m(n, t, r, i.safeSpawnDistance);
      }),
      e.events.on(`net:hello`, (t) => X(e, t)),
      e.events.on(`net:claimed`, (t) => X(e, t)),
      e.events.on(`net:released`, ({ player: t }) => {
        let n = G.get(e.world);
        (t && n?.spawnPrefs.delete(t.id),
          n?.squads.reconcile(),
          n?.squads.sync());
      }),
      e.events.on(`net:rpc`, (t) => de(e, t)),
      e.events.on(`net:clientLeft`, ({ client: e } = {}) => {
        (i.chat.forget(e?.playerId),
          i.spotting.forget(e?.playerId),
          i.medicCalls.forget(e?.playerId),
          i.squads.reconcile(),
          i.squads.sync());
      }),
      e.events.on(`player:damage`, (t) => le(e, t)),
      e.events.on(`net:input`, ({ entity: n, input: r } = {}) =>
        i.rules.input?.(e.world, n, !!(r?.buttons & t.INTERACT)),
      ),
      e.events.on(`player:damage`, (e) => i.recovery.damage(e)),
      Object.assign(this.api, me(e, i)),
      e.log(
        `16v16 Conquest ready: 3 objectives, 1000 tickets, authoritative scoring and spawns`,
      ));
  },
  tick(e, t) {
    let n = G.get(e.world);
    if (!n) return;
    n.squads.tick();
    let r = n.rules.tick(e.world, t);
    ((n.stats.objectiveChanges += r.filter(
      (e) => e.name === `objective:changed`,
    ).length),
      Y(e, r),
      fe(e, n),
      n.recovery.tick(),
      n.teammates.tick());
  },
  dispose(e) {
    (e.modules.get(`netcode`)?.setSpawnProvider?.(null),
      G.get(e.world)?.spotting.dispose(),
      G.get(e.world)?.medicCalls.dispose(),
      G.delete(e.world));
  },
  api: {
    Conquest: _,
    selectSpawn: m,
    getState() {
      return null;
    },
    assignTeam() {
      return -1;
    },
    requestSpawn() {
      return null;
    },
    stats() {
      return {};
    },
  },
};
function me(e, t) {
  return {
    Conquest: _,
    selectSpawn: m,
    getState() {
      return t.rules.snapshot(e.world);
    },
    useRush(n) {
      let r = e.config ?? {};
      return (
        (t.rules = new M(n, {
          tickets: q(r.rushTickets, O.tickets, 1),
          warmupSeconds: q(r.warmupSeconds, O.warmupSeconds),
          ...((r.rushSeconds ?? r.rotationRound)
            ? {
                matchSeconds: q(
                  r.rushSeconds ?? r.matchSeconds,
                  O.matchSeconds,
                  1,
                ),
              }
            : {}),
        })),
        t.rules.init(e.world),
        J(e, `match:state`, t.rules.snapshot(e.world)),
        !0
      );
    },
    useFfa(n) {
      let r = e.config ?? {};
      return (
        (t.rules = new F(n, {
          warmupSeconds: q(r.warmupSeconds, N.warmupSeconds),
          ...((r.ffaSeconds ?? r.rotationRound)
            ? {
                matchSeconds: q(
                  r.ffaSeconds ?? r.matchSeconds,
                  N.matchSeconds,
                  1,
                ),
              }
            : {}),
          ...(r.killLimit ? { killLimit: q(r.killLimit, N.killLimit, 1) } : {}),
        })),
        t.rules.init(e.world),
        Number.isFinite(n.respawnSeconds) &&
          (t.respawnDelay = y(Math.max(0, n.respawnSeconds))),
        t.squads.reconcile?.(),
        t.squads.sync?.(),
        J(e, `match:state`, t.rules.snapshot(e.world)),
        !0
      );
    },
    useTdm(n) {
      let r = e.config ?? {};
      return (
        (t.rules = new ne(n, {
          warmupSeconds: q(r.warmupSeconds, I.warmupSeconds),
          ...(r.killLimit ? { killLimit: q(r.killLimit, I.killLimit, 1) } : {}),
        })),
        t.rules.init(e.world),
        Number.isFinite(n.respawnSeconds) &&
          (t.respawnDelay = y(Math.max(0, n.respawnSeconds))),
        t.squads.reconcile?.(),
        t.squads.sync?.(),
        J(e, `match:state`, t.rules.snapshot(e.world)),
        !0
      );
    },
    roamFor(n) {
      return t.rules.roamFor?.(e.world, n) ?? null;
    },
    assignTeam(n, r) {
      let i = e.world.players.get(n);
      return i && Q(e, t, i, r) ? i.team : -1;
    },
    requestSpawn(n, r = null) {
      return K(r)
        ? (t.spawnPrefs.delete(n), null)
        : (t.spawnPrefs.set(n, r), $(e, t, n, r));
    },
    revivePlayer(n, r) {
      return ue(e, t, n, r);
    },
    holdRespawn(n, r) {
      let i = t.respawns.get(n);
      e.world.match.phase !== `ended` && !(i >= r) && t.respawns.set(n, r);
    },
    stats() {
      return {
        ...t.stats,
        tickets: e.world.teams.map((e) => e.tickets),
        phase: e.world.match.phase,
        timeLeft: e.world.match.timeLeft,
      };
    },
  };
}
