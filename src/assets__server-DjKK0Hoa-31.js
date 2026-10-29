// assets__server-DjKK0Hoa 31 — world
// Lines 9610-9747 of readable/assets__server-DjKK0Hoa.pretty.js (statement-aligned).
var Lo = {
  name: `bots`,
  deps: [`terrain`, `netcode`, `gamemodes`],
  init(t) {
    let n = {
      bots: new Map(),
      contacts: new Map(),
      teamSpots: [new Map(), new Map()],
      trace: null,
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
    (ma.set(t.world, n),
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
      t.events.on(`player:spawn`, (e) => Ea(t, n, e)),
      t.events.on(`net:hello`, ({ player: e }) => {
        e && !e.isBot && Ta(t, n, e.team);
      }),
      t.events.on(`net:claimed`, ({ player: e }) => {
        e && Ta(t, n, e.team);
      }),
      t.events.on(`net:released`, ({ player: e }) => {
        e && Ta(t, n, e.team);
      }),
      t.events.on(`net:disconnected`, ({ client: e }) => {
        e?.playerId > 0 && (Ta(t, n, 0), Ta(t, n, 1));
      }),
      t.events.on(`player:damage`, (e) => Ma(t, n, e)),
      t.events.on(`player:death`, (e) => Na(t, n, e)),
      t.events.on(`spot:target`, ({ targetId: e, team: t, expiresTick: r }) => {
        Number.isInteger(e) &&
          (t === 0 || t === 1) &&
          Number.isFinite(r) &&
          n.teamSpots[t].set(e, r);
      }),
      t.events.on(
        `weapon:fire`,
        ({
          entityId: r,
          weaponId: i,
          report: a,
          origin: o,
          dir: s,
          dist: c,
        }) => {
          let l = t.world.get(r),
            u = n.bots.get(l?.owner),
            d = u?.elevation;
          (d?.stage === `hold` && d.shots++,
            u && !(l.state & e.IN_VEHICLE) && ut(u, Fa(t, u)),
            kr(t.world, n.bots, l, { origin: o, dir: s, dist: c }),
            Or(
              t.world,
              n.bots,
              l,
              t.modules.get(`weapons`)?.weaponDefs?.find?.((e) => e.id === i),
              a,
            ));
        },
      ),
      t.events.on(`weapon:hit`, ({ point: e, entityId: r }) =>
        jr(t.world, n.bots, e, r),
      ),
      Object.assign(this.api, Io(t, n)));
    let r = ha(t.config);
    r > 0 && Sa(t, n, r);
    let i =
      Math.ceil(Math.ceil(r / 2) / R.squadSize) +
      Math.ceil(Math.floor(r / 2) / R.squadSize);
    t.log(`${r} authoritative bots ready in ${i} fireteams`);
  },
  tick(e, n) {
    let r = ma.get(e.world);
    if (!r) return;
    let i = Array.from(r.bots.values()).sort(
      (t, n) =>
        (e.world.players.get(t.playerId)?.entityId ?? 65536) -
          (e.world.players.get(n.playerId)?.entityId ?? 65536) ||
        t.playerId - n.playerId,
    );
    (Ar(e.world, i), la(e.world, i, e.world.time.tick));
    for (let a of i) {
      let i = e.world.players.get(a.playerId),
        o = i?.entityId > 0 ? e.world.get(i.entityId) : null;
      o &&
        (a.entityId !== o.id && xa(a, o, e.world.time.tick),
        jo(e, r, a, o, n),
        (a.lastFire = !!(a.input.buttons & t.FIRE)),
        (a.lastPos[0] = o.pos[0]),
        (a.lastPos[1] = o.pos[1]),
        (a.lastPos[2] = o.pos[2]));
    }
  },
  dispose(e) {
    ma.delete(e.world);
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
