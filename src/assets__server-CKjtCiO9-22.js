// assets__server-CKjtCiO9 22 — world
// Lines 6538-6757 of readable/assets__server-CKjtCiO9.pretty.js (statement-aligned).
function bi(e, t) {
  let n = (e) =>
    e
      ? {
          playerId: e.playerId,
          entityId: e.entityId,
          team: e.team,
          role: e.role,
          squadId: e.squadId,
          objectiveId: e.objectiveId,
          lane: e.lane,
          targetId: e.targetId,
          elevation: e.elevation
            ? {
                roomId: e.elevation.room.id,
                stage: e.elevation.stage,
                windowId: e.elevation.windowId,
              }
            : null,
          perch: e.perch ? { id: e.perch.id, stage: e.perch.stage } : null,
        }
      : null;
  return {
    debugBots() {
      return t.bots;
    },
    stats() {
      let n = {},
        r = 0,
        i = 0;
      for (let a of t.bots.values())
        (B(e.world.get(e.world.players.get(a.playerId)?.entityId)) && r++,
          a.targetId > 0 && a.visible && i++,
          (n[a.objectiveId ?? `none`] = (n[a.objectiveId ?? `none`] ?? 0) + 1));
      return {
        ...t.stats,
        count: t.bots.size,
        alive: r,
        engaged: i,
        objectives: n,
      };
    },
    getBot(e) {
      return n(t.bots.get(e));
    },
    peers() {
      return t.bots.values();
    },
    combatState(e) {
      let n = t.bots.get(e);
      return n
        ? {
            entityId: n.entityId,
            targetId: n.targetId,
            acquireTick: n.acquireTick,
            reactionTicks: n.reactionTicks,
            visible: n.visible,
            burstLeft: n.burstLeft,
          }
        : null;
    },
    list() {
      return Array.from(t.bots.values(), (e) => ({
        ...n(e),
        classId: e.classId,
        nest: e.nest
          ? {
              stage: e.nest.stage,
              id: e.nest.r.id,
              entry: e.nest.r.entry,
              step: e.nest.route?.i ?? -1,
            }
          : null,
        insertion: e.insertion
          ? { stage: e.insertion.stage, roof: e.insertion.roof?.id ?? null }
          : null,
        roof: e.roof
          ? {
              stage: e.roof.stage,
              id: e.roof.roof.id,
              spot: e.roof.spot.pos,
              stance: e.roof.spot.stance,
            }
          : null,
        lift: e.liftDuty
          ? { stage: e.liftDuty.stage, id: e.liftDuty.lift.id }
          : null,
      }));
    },
  };
}
var xi = {
  name: `bots`,
  deps: [`terrain`, `netcode`, `gamemodes`],
  init(t) {
    let n = {
      bots: new Map(),
      contacts: new Map(),
      teamSpots: [new Map(), new Map()],
      stats: {
        spawned: 0,
        respawns: 0,
        deaths: 0,
        kills: 0,
        inputs: 0,
        acquisitions: 0,
        fireInputs: 0,
        damageReactions: 0,
        coverRuns: 0,
        stuckRecoveries: 0,
        objectiveAssignments: 0,
        elevationTrips: 0,
        elevationOccupations: 0,
        elevationReturns: 0,
        elevationFireInputs: 0,
        elevationWindowChanges: 0,
      },
    };
    (mr.set(t.world, n),
      t.events.on(`rocket:launch`, ({ entityId: e }) => {
        let r = t.world.get(e),
          i = n.bots.get(r?.owner);
        if (!i) return;
        let a = t.world.get(i.rocketTarget),
          o = t.world.time.tick,
          s = a?.type === `vehicle` && !!y[a.weapon]?.air;
        ((i.rocketDue = o + (s ? 1500 : 1200)),
          (i.rocketTarget = null),
          (n.rocketTeams ??= [0, 0]),
          (n.rocketInfantry ??= [0, 0]),
          (n.rocketTeams[r.team] =
            o + (s ? (r.weapon === 10 ? 1200 : 600) : 360)),
          a?.type !== `vehicle` && (n.rocketInfantry[r.team] = o + 2700));
      }),
      t.events.on(`player:spawn`, (e) => Er(t, n, e)),
      t.events.on(`net:hello`, ({ player: e }) => {
        e && !e.isBot && Tr(t, n, e.team);
      }),
      t.events.on(`net:claimed`, ({ player: e }) => {
        e && Tr(t, n, e.team);
      }),
      t.events.on(`net:released`, ({ player: e }) => {
        e && Tr(t, n, e.team);
      }),
      t.events.on(`net:disconnected`, ({ client: e }) => {
        e?.playerId > 0 && (Tr(t, n, 0), Tr(t, n, 1));
      }),
      t.events.on(`player:damage`, (e) => Mr(t, n, e)),
      t.events.on(`player:death`, (e) => Nr(t, n, e)),
      t.events.on(`spot:target`, ({ targetId: e, team: t, expiresTick: r }) => {
        Number.isInteger(e) &&
          (t === 0 || t === 1) &&
          Number.isFinite(r) &&
          n.teamSpots[t].set(e, r);
      }),
      t.events.on(`weapon:fire`, ({ entityId: r, weaponId: i, report: a }) => {
        let o = t.world.get(r),
          s = n.bots.get(o?.owner),
          c = s?.elevation;
        if (
          (c?.stage === `hold` && c.shots++,
          s && !(o.state & e.IN_VEHICLE) && Qe(s, Pr(t, s)),
          B(o) &&
            (a ?? 1) >= 1 &&
            b(t.modules.get(`weapons`)?.weaponDefs?.find?.((e) => e.id === i)))
        ) {
          let e = t.world.time.tick;
          for (let r of n.bots.values()) {
            let n = t.world.players.get(r.playerId),
              i = n?.entityId > 0 ? t.world.get(n.entityId) : null;
            B(i) &&
              T(t.world, i, o) &&
              !r.visible &&
              (Math.hypot(i.pos[0] - o.pos[0], i.pos[2] - o.pos[2]) > Jr ||
                (r.observedContact = {
                  pos: o.pos.slice(),
                  expires: e + R.contactMemoryTicks,
                }));
          }
        }
      }),
      Object.assign(this.api, bi(t, n)));
    let r = hr(t.config);
    r > 0 && Sr(t, n, r);
    let i =
      Math.ceil(Math.ceil(r / 2) / R.squadSize) +
      Math.ceil(Math.floor(r / 2) / R.squadSize);
    t.log(`${r} authoritative bots ready in ${i} fireteams`);
  },
  tick(e, t) {
    let n = mr.get(e.world);
    if (!n) return;
    let r = Array.from(n.bots.values()).sort(
      (t, n) =>
        (e.world.players.get(t.playerId)?.entityId ?? 65536) -
          (e.world.players.get(n.playerId)?.entityId ?? 65536) ||
        t.playerId - n.playerId,
    );
    for (let i of r) {
      let r = e.world.players.get(i.playerId),
        a = r?.entityId > 0 ? e.world.get(r.entityId) : null;
      a &&
        (i.entityId !== a.id && xr(i, a, e.world.time.tick), yi(e, n, i, a, t));
    }
  },
  dispose(e) {
    mr.delete(e.world);
  },
  api: {
    stats() {
      return {};
    },
    getBot() {
      return null;
    },
    list() {
      return [];
    },
  },
};
