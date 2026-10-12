// assets__server-CoHTvJjy 05 — world
// Lines 1392-1595 of readable/assets__server-CoHTvJjy.pretty.js (statement-aligned).
var ce = {
  name: `gamemodes`,
  deps: [`netcode`],
  init(e) {
    let n = e.config ?? {},
      r = new _({
        tickets: W(n.tickets, b.tickets, 1),
        warmupSeconds: W(n.warmupSeconds, b.warmupSeconds),
        matchSeconds: W(n.matchSeconds, b.matchSeconds, 1),
        captureSeconds: W(n.captureSeconds, b.captureSeconds, 1),
        bleedSeconds: W(n.bleedSeconds, b.bleedSeconds, 0.25),
        objectiveRadius: W(n.objectiveRadius, b.objectiveRadius, 1),
      }),
      i = {
        rules: r,
        respawns: new Map(),
        spawnPrefs: new Map(),
        countedDeaths: new Set(),
        pendingSpawn: null,
        recovery: ne(e.world),
        squads: l(e),
        chat: ee(e),
        teammates: re(e),
        spotting: null,
        medicCalls: null,
        respawnDelay: y(W(n.respawnSeconds, b.respawnSeconds, 0)),
        safeSpawnDistance: W(n.safeSpawnDistance, b.safeSpawnDistance, 1),
        stats: { deaths: 0, spawns: 0, objectiveChanges: 0 },
      };
    ((i.spotting = C(e)),
      (i.medicCalls = V(e)),
      H.set(e.world, i),
      r.init(e.world, n.objectives),
      e.modules.get(`netcode`)?.setSpawnProvider?.((t, n) => {
        if (!t.isBot && !i.spawnPrefs.has(t.id)) return null;
        let r = i.spawnPrefs.get(t.id) ?? null;
        return i.rules.spawnFor
          ? i.rules.spawnFor(n, t)
          : t.isBot
            ? B(e, i, t)
            : U(r)
              ? null
              : m(n, t, r, i.safeSpawnDistance);
      }),
      e.events.on(`net:hello`, (t) => X(e, t)),
      e.events.on(`net:claimed`, (t) => X(e, t)),
      e.events.on(`net:released`, ({ player: t }) => {
        let n = H.get(e.world);
        (t && n?.spawnPrefs.delete(t.id),
          n?.squads.reconcile(),
          n?.squads.sync());
      }),
      e.events.on(`net:rpc`, (t) => oe(e, t)),
      e.events.on(`net:clientLeft`, ({ client: e } = {}) => {
        (i.chat.forget(e?.playerId),
          i.spotting.forget(e?.playerId),
          i.medicCalls.forget(e?.playerId),
          i.squads.reconcile(),
          i.squads.sync());
      }),
      e.events.on(`player:damage`, (t) => ie(e, t)),
      e.events.on(`net:input`, ({ entity: n, input: r } = {}) =>
        i.rules.input?.(e.world, n, !!(r?.buttons & t.INTERACT)),
      ),
      e.events.on(`player:damage`, (e) => i.recovery.damage(e)),
      Object.assign(this.api, le(e, i)),
      e.log(
        `16v16 Conquest ready: 3 objectives, 1000 tickets, authoritative scoring and spawns`,
      ));
  },
  tick(e, t) {
    let n = H.get(e.world);
    if (!n) return;
    n.squads.tick();
    let r = n.rules.tick(e.world, t);
    ((n.stats.objectiveChanges += r.filter(
      (e) => e.name === `objective:changed`,
    ).length),
      J(e, r),
      se(e, n),
      n.recovery.tick(),
      n.teammates.tick());
  },
  dispose(e) {
    (e.modules.get(`netcode`)?.setSpawnProvider?.(null),
      H.get(e.world)?.spotting.dispose(),
      H.get(e.world)?.medicCalls.dispose(),
      H.delete(e.world));
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
function le(e, t) {
  return {
    Conquest: _,
    selectSpawn: m,
    getState() {
      return t.rules.snapshot(e.world);
    },
    useRush(n) {
      let r = e.config ?? {};
      return (
        (t.rules = new A(n, {
          tickets: W(r.rushTickets, T.tickets, 1),
          warmupSeconds: W(r.warmupSeconds, T.warmupSeconds),
          ...((r.rushSeconds ?? r.rotationRound)
            ? {
                matchSeconds: W(
                  r.rushSeconds ?? r.matchSeconds,
                  T.matchSeconds,
                  1,
                ),
              }
            : {}),
        })),
        t.rules.init(e.world),
        G(e, `match:state`, t.rules.snapshot(e.world)),
        !0
      );
    },
    useFfa(n) {
      let r = e.config ?? {};
      return (
        (t.rules = new P(n, {
          warmupSeconds: W(r.warmupSeconds, j.warmupSeconds),
          ...((r.ffaSeconds ?? r.rotationRound)
            ? {
                matchSeconds: W(
                  r.ffaSeconds ?? r.matchSeconds,
                  j.matchSeconds,
                  1,
                ),
              }
            : {}),
          ...(r.killLimit ? { killLimit: W(r.killLimit, j.killLimit, 1) } : {}),
        })),
        t.rules.init(e.world),
        Number.isFinite(n.respawnSeconds) &&
          (t.respawnDelay = y(Math.max(0, n.respawnSeconds))),
        t.squads.reconcile?.(),
        t.squads.sync?.(),
        G(e, `match:state`, t.rules.snapshot(e.world)),
        !0
      );
    },
    useTdm(n) {
      let r = e.config ?? {};
      return (
        (t.rules = new te(n, {
          warmupSeconds: W(r.warmupSeconds, F.warmupSeconds),
          ...(r.killLimit ? { killLimit: W(r.killLimit, F.killLimit, 1) } : {}),
        })),
        t.rules.init(e.world),
        Number.isFinite(n.respawnSeconds) &&
          (t.respawnDelay = y(Math.max(0, n.respawnSeconds))),
        t.squads.reconcile?.(),
        t.squads.sync?.(),
        G(e, `match:state`, t.rules.snapshot(e.world)),
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
      return U(r)
        ? (t.spawnPrefs.delete(n), null)
        : (t.spawnPrefs.set(n, r), $(e, t, n, r));
    },
    revivePlayer(n, r) {
      return ae(e, t, n, r);
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
