// assets__server-CoHTvJjy 02 — pos
// Lines 23-756 of readable/assets__server-CoHTvJjy.pretty.js (statement-aligned).
var T = Object.freeze({
    tickets: 150,
    armSeconds: 3,
    disarmSeconds: 4,
    fuseSeconds: 30,
    stationRadius: 3,
    warmupSeconds: 10,
    matchSeconds: 2400,
    holdTicks: 3,
  }),
  E = (t) =>
    t?.type === `soldier` &&
    t.hp > 0 &&
    !(t.state & e.DEAD) &&
    !(t.state & e.IN_VEHICLE) &&
    (t.team === 0 || t.team === 1),
  D = (e) => ({
    id: e.id,
    letter: e.letter,
    name: e.name,
    pos: e.pos.slice(),
    radius: e.radius,
    team: e.team,
    progress: e.progress,
    progressTeam: e.progressTeam,
    contested: e.contested,
    spawnable: !1,
    kind: `mcom`,
    stage: e.stage,
    state: e.state,
    ...(e.lane ? { lane: e.lane } : {}),
    ...(e.lanes ? { lanes: e.lanes.slice() } : {}),
  }),
  O = (e) => ({
    objectiveId: e.id,
    team: e.team,
    progress: e.progress,
    progressTeam: e.progressTeam,
    contested: e.contested,
    spawnable: !1,
    state: e.state,
    occupants: [0, 0],
  }),
  k = (e, t, n) => ({
    id: t,
    pos: [e.pos[0], e.pos[1] ?? n.map.getHeight(e.pos[0], e.pos[2]), e.pos[2]],
    yaw: e.yaw ?? 0,
  }),
  A = class {
    constructor(e, t = {}) {
      if (!e?.zones?.length) throw Error(`Rush needs at least one zone`);
      ((this.plan = e),
        (this.cfg = { ...T, ...t }),
        (this.attackers = +(e.attackers === 1)),
        (this.defenders = 1 - this.attackers),
        (this.holding = new Map()),
        (this.lastSecond = -1),
        (this.work = new Map()));
    }
    input(e, t, n) {
      n && t && this.holding.set(t.id, e.time.tick);
    }
    init(e) {
      ((e.match.mode = `rush`),
        (e.match.phase = `warmup`),
        (e.match.timeLeft = this.cfg.warmupSeconds),
        (e.match.winner = -1),
        (e.match.attackers = this.attackers));
      for (let t of e.teams) t.tickets = this.cfg.tickets;
      return (
        this.enterZone(e, 0),
        (this.lastSecond = Math.ceil(e.match.timeLeft)),
        this.snapshot(e)
      );
    }
    enterZone(e, t) {
      let n = this.plan.zones[t];
      ((e.teams[this.attackers].tickets = this.zoneTickets(t)),
        (e.match.zone = t),
        (e.match.zones = this.plan.zones.length),
        (e.match.zoneName = n.name),
        (e.match.objectives = n.stations.map((n) => ({
          id: n.id,
          letter: n.letter,
          name: n.name,
          pos: [
            n.pos[0],
            n.pos[1] ?? e.map.getHeight(n.pos[0], n.pos[2]),
            n.pos[2],
          ],
          radius: this.cfg.stationRadius,
          team: this.defenders,
          progress: 0,
          progressTeam: this.attackers,
          contested: !1,
          spawnable: !1,
          kind: `mcom`,
          stage: t,
          state: `idle`,
          ...(n.lane ? { lane: n.lane } : {}),
          ...(n.lanes ? { lanes: n.lanes.slice() } : {}),
        }))));
      let [r, i] = n.bases,
        a = [];
      ((a[this.attackers] = k(r, `hq-${this.attackers}`, e)),
        (a[this.defenders] = k(i, `hq-${this.defenders}`, e)),
        (e.map.homeBases = a),
        this.work.clear());
    }
    snapshot(e) {
      return {
        mode: `rush`,
        phase: e.match.phase,
        timeLeft: Math.max(0, e.match.timeLeft),
        winner: e.match.winner ?? -1,
        ticketCapacity: this.zoneTickets(e.match.zone ?? 0),
        tickets: [e.teams[0]?.tickets ?? 0, e.teams[1]?.tickets ?? 0],
        objectives: e.match.objectives.map(D),
        attackers: this.attackers,
        zone: e.match.zone,
        zones: e.match.zones,
        zoneName: e.match.zoneName,
        homeBases: e.map.homeBases.map((e) => ({ ...e, pos: e.pos.slice() })),
      };
    }
    tick(e, t) {
      let n = [];
      e.match.phase === `warmup`
        ? ((e.match.timeLeft = Math.max(0, e.match.timeLeft - t)),
          e.match.timeLeft <= 0 &&
            ((e.match.phase = `live`),
            (e.match.timeLeft = this.cfg.matchSeconds),
            n.push({
              name: `match:phase`,
              data: { phase: `live`, timeLeft: e.match.timeLeft },
            }),
            n.push(
              this.message(
                `ZONE 1 · ${this.plan.zones[0].name}`,
                `Attack the M-COM stations`,
                `Defend the M-COM stations`,
              ),
            )))
        : e.match.phase === `live` &&
          ((e.match.timeLeft = Math.max(0, e.match.timeLeft - t)),
          this.stepStations(e, t, n),
          e.match.phase === `live` &&
            e.teams[this.attackers].tickets <= 0 &&
            !e.match.objectives.some((e) => e.state === `armed`) &&
            this.end(e, this.defenders, n, `tickets`),
          e.match.phase === `live` &&
            e.match.timeLeft <= 0 &&
            this.end(e, this.defenders, n, `time`));
      let r = Math.ceil(e.match.timeLeft);
      return (
        r !== this.lastSecond &&
          ((this.lastSecond = r),
          n.push({ name: `match:clock`, data: { timeLeft: r } })),
        n
      );
    }
    stepStations(e, t, n) {
      let r = e.time.tick,
        i = e.byType(`soldier`);
      for (let a of e.match.objectives) {
        if (a.state === `destroyed`) continue;
        let e = `${a.state}|${a.progressTeam}|${Math.round(a.progress * 40)}`,
          o = [0, 0];
        for (let e of i)
          !E(e) ||
            Math.abs(e.pos[1] - a.pos[1]) > 2.5 ||
            Math.hypot(e.pos[0] - a.pos[0], e.pos[2] - a.pos[2]) > a.radius ||
            (r - (this.holding.get(e.id) ?? -1e9) <= this.cfg.holdTicks &&
              o[e.team]++);
        let s = this.work.get(a.id) ?? 0;
        if (a.state === `idle`) {
          let e =
            o[this.attackers] > 0
              ? s + t / this.cfg.armSeconds
              : Math.max(0, s - t / this.cfg.armSeconds);
          (this.work.set(a.id, e),
            (a.progress = Math.min(1, e)),
            (a.progressTeam = this.attackers),
            e >= 1 &&
              ((a.state = `armed`),
              (a.progress = 1),
              (a.contested = !0),
              this.work.set(a.id, 0),
              n.push(
                this.message(
                  `M-COM ${a.letter} ARMED`,
                  `Defend the charge`,
                  `Disarm it!`,
                ),
              )));
        } else {
          let e =
            o[this.defenders] > 0
              ? s + t / this.cfg.disarmSeconds
              : Math.max(0, s - t / this.cfg.disarmSeconds);
          (this.work.set(a.id, e),
            (a.fuse = (a.fuse ?? this.cfg.fuseSeconds) - t),
            e >= 1
              ? ((a.state = `idle`),
                (a.progress = 0),
                (a.contested = !1),
                (a.fuse = void 0),
                this.work.set(a.id, 0),
                n.push(
                  this.message(
                    `M-COM ${a.letter} DISARMED`,
                    `Re-arm it`,
                    `Charge disarmed`,
                  ),
                ))
              : a.fuse <= 0
                ? ((a.state = `destroyed`),
                  (a.team = -1),
                  (a.progress = 0),
                  (a.contested = !1),
                  n.push({
                    name: `rush:destroyed`,
                    data: { objectiveId: a.id, pos: a.pos.slice() },
                  }),
                  n.push(
                    this.message(
                      `M-COM ${a.letter} DESTROYED`,
                      `Station destroyed`,
                      `Station lost`,
                    ),
                  ))
                : ((a.progress = Math.max(0, a.fuse / this.cfg.fuseSeconds)),
                  (a.progressTeam = e > 0 ? this.defenders : this.attackers)));
        }
        `${a.state}|${a.progressTeam}|${Math.round(a.progress * 40)}` !== e &&
          n.push({ name: `objective:changed`, data: O(a) });
      }
      e.match.objectives.every((e) => e.state === `destroyed`) &&
        this.advance(e, n);
    }
    advance(e, t) {
      let n = e.match.zone + 1;
      if (n >= this.plan.zones.length) {
        this.end(e, this.attackers, t, `objectives`);
        return;
      }
      (this.enterZone(e, n),
        t.push({
          name: `match:tickets`,
          data: {
            team: this.attackers,
            amount: 0,
            reason: `zone`,
            tickets: e.teams[this.attackers].tickets,
          },
        }),
        t.push({ name: `match:state`, data: this.snapshot(e) }),
        t.push(
          this.message(
            `ZONE ${n + 1} · ${this.plan.zones[n].name}`,
            `Push forward: new M-COM stations`,
            `Fall back to the next stations`,
          ),
        ));
    }
    zoneTickets(e) {
      let t = +this.plan.zones[e]?.tickets;
      return t > 0
        ? Math.round((t * this.cfg.tickets) / T.tickets)
        : this.cfg.tickets;
    }
    onDeath(e, t) {
      if (e.match.phase !== `live` || t !== this.attackers) return [];
      let n = e.teams[this.attackers];
      return (
        (n.tickets = Math.max(0, n.tickets - 1)),
        [
          {
            name: `match:tickets`,
            data: {
              team: this.attackers,
              amount: -1,
              reason: `death`,
              tickets: n.tickets,
            },
          },
        ]
      );
    }
    end(e, t, n, r) {
      e.match.phase !== `ended` &&
        ((e.match.phase = `ended`),
        (e.match.timeLeft = 0),
        (e.match.winner = t),
        n.push({
          name: `match:phase`,
          data: { phase: `ended`, timeLeft: 0, winner: t, reason: r },
        }));
    }
    message(e, t, n) {
      return {
        name: `rush:message`,
        data: { title: e, attackers: this.attackers, attack: t, defend: n },
      };
    }
  },
  j = Object.freeze({
    killLimit: 30,
    warmupSeconds: 10,
    matchSeconds: 600,
    minSpawnDistance: 14,
  }),
  M = (t) => t?.type === `soldier` && t.hp > 0 && !(t.state & e.DEAD),
  N = (e, t) => (e[0] - t[0]) ** 2 + (e[2] - t[2]) ** 2,
  P = class {
    constructor(e, t = {}) {
      if (!e?.spawns?.length) throw Error(`Free-for-all needs spawn points`);
      ((this.plan = e),
        (this.cfg = {
          ...j,
          ...(e.killLimit ? { killLimit: e.killLimit } : {}),
          ...(e.matchSeconds ? { matchSeconds: e.matchSeconds } : {}),
          ...t,
        }),
        (this.lastSecond = -1));
    }
    init(e) {
      let t = e.match;
      ((t.mode = `ffa`),
        (t.phase = `warmup`),
        (t.timeLeft = this.cfg.warmupSeconds),
        (t.winner = -1),
        (t.winnerPlayer = -1),
        (t.killLimit = this.cfg.killLimit),
        (t.objectives = []),
        (t.roam = (this.plan.roam ?? []).map((t, n) => ({
          id: t.id ?? `roam-${n}`,
          name: t.name ?? ``,
          kind: `roam`,
          team: -1,
          contested: !1,
          radius: t.radius ?? 6,
          lane: t.lane,
          ...(t.lower ? { lower: !0 } : {}),
          pos: [
            t.pos[0],
            t.pos[1] ?? e.map.getHeight(t.pos[0], t.pos[2]),
            t.pos[2],
          ],
        }))));
      for (let t of e.teams) t.tickets = 0;
      return ((this.lastSecond = Math.ceil(t.timeLeft)), this.snapshot(e));
    }
    leader(e) {
      let t = null;
      for (let n of e.players.values())
        (!t ||
          (n.kills | 0) > (t.kills | 0) ||
          ((n.kills | 0) == (t.kills | 0) &&
            (n.deaths | 0) < (t.deaths | 0))) &&
          (t = n);
      return t;
    }
    snapshot(e) {
      let t = e.match,
        n = this.leader(e);
      return {
        mode: `ffa`,
        phase: t.phase,
        timeLeft: Math.max(0, t.timeLeft),
        winner: -1,
        winnerPlayer: t.winnerPlayer ?? -1,
        killLimit: this.cfg.killLimit,
        leader: n ? { id: n.id, name: n.name, kills: n.kills | 0 } : null,
        tickets: [0, 0],
        ticketCapacity: null,
        objectives: [],
      };
    }
    tick(e, t) {
      let n = [],
        r = e.match;
      if (r.phase === `warmup`) {
        if (((r.timeLeft = Math.max(0, r.timeLeft - t)), r.timeLeft <= 0)) {
          ((r.phase = `live`), (r.timeLeft = this.cfg.matchSeconds));
          for (let t of e.players.values())
            ((t.kills = 0), (t.deaths = 0), (t.score = 0));
          (n.push({
            name: `match:phase`,
            data: { phase: `live`, timeLeft: r.timeLeft },
          }),
            n.push({
              name: `ffa:message`,
              data: {
                title: `FREE-FOR-ALL`,
                text: `Every man for himself · first to ${this.cfg.killLimit} kills`,
              },
            }));
        }
      } else
        r.phase === `live` &&
          ((r.timeLeft = Math.max(0, r.timeLeft - t)),
          r.timeLeft <= 0 && this.end(e, n, `time`));
      let i = Math.ceil(r.timeLeft);
      return (
        i !== this.lastSecond &&
          ((this.lastSecond = i),
          n.push({ name: `match:clock`, data: { timeLeft: i } })),
        n
      );
    }
    onDeath() {
      return [];
    }
    onKill(e, t) {
      let n = [];
      return e.match.phase !== `live` || !t
        ? n
        : (n.push({ name: `ffa:leader`, data: this.snapshot(e).leader }),
          (t.kills | 0) >= this.cfg.killLimit && this.end(e, n, `kills`),
          n);
    }
    end(e, t, n) {
      let r = e.match;
      if (r.phase === `ended`) return;
      let i = this.leader(e);
      ((r.phase = `ended`),
        (r.timeLeft = 0),
        (r.winner = -1),
        (r.winnerPlayer = i?.id ?? -1),
        t.push({
          name: `match:phase`,
          data: {
            phase: `ended`,
            timeLeft: 0,
            winner: -1,
            winnerPlayer: r.winnerPlayer,
            winnerName: i?.name ?? ``,
            winnerKills: i?.kills | 0,
            reason: n,
          },
        }),
        t.push({ name: `match:state`, data: this.snapshot(e) }));
    }
    spawnFor(e, t) {
      let r = e.byType(`soldier`).filter((e) => M(e) && e.owner !== t.id),
        i = e.time.tick | 0,
        a = this.plan.spawns
          .map((n, a) => {
            let o = [
                n.pos[0],
                n.pos[1] ?? e.map.getHeight(n.pos[0], n.pos[2]),
                n.pos[2],
              ],
              s = r.reduce(
                (e, t) =>
                  Math.min(
                    e,
                    Math.sqrt(N(t.pos, o)) + Math.abs(t.pos[1] - o[1]) * 0.5,
                  ),
                400,
              ),
              c =
                ((((a + 1) * 2654435761) ^
                  (t.id * 40503) ^
                  ((i >> 6) * 69069)) >>>
                  0) /
                4294967296;
            return { s: n, pos: o, near: s, score: Math.min(s, 90) + c * 18 };
          })
          .sort((e, t) => t.score - e.score);
      for (let t of [!0, !1])
        for (let i of a)
          if (
            !(i.near < this.cfg.minSpawnDistance) &&
            x(e.map, i.pos) &&
            n(e, i.pos) &&
            (!t || g(e.map, i.pos, r, 120))
          )
            return { pos: i.pos, yaw: i.s.yaw ?? 0, anchorId: `ffa` };
      return null;
    }
    roamFor(e, t) {
      let n = e.match.roam ?? [],
        r = e.map.roamOk ? n.filter((n) => e.map.roamOk(t.lastPos, n)) : n;
      if (!r.length) return null;
      let i = (t.roamStep | 0) + (t.spawnSerial | 0);
      return r[(t.index * 7 + i * [5, 7, 11][t.index % 3]) % r.length];
    }
  },
  F = Object.freeze({
    killLimit: 100,
    warmupSeconds: 10,
    matchSeconds: 1200,
    minSpawnDistance: 14,
    safeDistance: 26,
    crowdRadius: 10,
    reuseTicks: 1200,
  }),
  I = (t) => t?.type === `soldier` && t.hp > 0 && !(t.state & e.DEAD),
  L = (e, t) =>
    Math.hypot(e[0] - t[0], e[2] - t[2]) + Math.abs(e[1] - t[1]) * 0.5,
  te = class extends P {
    constructor(e, t = {}) {
      super(e, {
        ...F,
        ...(e.killLimit ? { killLimit: e.killLimit } : {}),
        ...(e.matchSeconds ? { matchSeconds: e.matchSeconds } : {}),
        ...t,
      });
    }
    init(e) {
      super.init(e);
      let t = e.match;
      t.mode = `tdm`;
      for (let t of e.teams) t.tickets = this.cfg.killLimit;
      return this.snapshot(e);
    }
    snapshot(e) {
      let t = e.match;
      return {
        mode: `tdm`,
        phase: t.phase,
        timeLeft: Math.max(0, t.timeLeft),
        winner: t.winner ?? -1,
        killLimit: this.cfg.killLimit,
        tickets: [e.teams[0]?.tickets ?? 0, e.teams[1]?.tickets ?? 0],
        ticketCapacity: this.cfg.killLimit,
        objectives: [],
      };
    }
    tick(e, t) {
      let n = e.match,
        r = n.phase === `warmup`,
        i = super.tick(e, t).filter((e) => e.name !== `ffa:message`);
      if (r && n.phase === `live`) {
        for (let t of e.teams) t.tickets = this.cfg.killLimit;
        (i.push({ name: `match:state`, data: this.snapshot(e) }),
          i.push({
            name: `ffa:message`,
            data: {
              title: `TEAM DEATHMATCH`,
              text: `First team to ${this.cfg.killLimit} kills`,
            },
          }));
      }
      return i;
    }
    onDeath(e, t) {
      if (e.match.phase !== `live` || (t !== 0 && t !== 1)) return [];
      e.teams[t].tickets = Math.max(0, e.teams[t].tickets - 1);
      let n = [
        {
          name: `match:tickets`,
          data: {
            team: t,
            amount: -1,
            reason: `death`,
            tickets: e.teams[t].tickets,
          },
        },
      ];
      return (e.teams[t].tickets <= 0 && this.endTeam(e, n, 1 - t, `kills`), n);
    }
    onKill() {
      return [];
    }
    end(e, t, n) {
      let r = e.teams[0]?.tickets ?? 0,
        i = e.teams[1]?.tickets ?? 0;
      this.endTeam(e, t, r === i ? -1 : r > i ? 0 : 1, n);
    }
    endTeam(e, t, n, r) {
      let i = e.match;
      i.phase !== `ended` &&
        ((i.phase = `ended`),
        (i.timeLeft = 0),
        (i.winner = n),
        (i.winnerPlayer = -1),
        t.push({
          name: `match:phase`,
          data: { phase: `ended`, timeLeft: 0, winner: n, reason: r },
        }),
        t.push({ name: `match:state`, data: this.snapshot(e) }));
    }
    roamFor(e, t) {
      let n = e.match.roam ?? [],
        r = e.map.roamOk ? n.filter((n) => e.map.roamOk(t.lastPos, n)) : n;
      if (!r.length) return null;
      let i = (t.roamStep | 0) + (t.spawnSerial | 0);
      if (t.tdmRoam?.step === i) {
        let e = r.find((e) => e.id === t.tdmRoam.id);
        if (e) return e;
      }
      let a = (this.roamClaims ??= new Map()),
        o = e
          .byType(`soldier`)
          .filter((e) => I(e) && e.team === t.team && e.owner !== t.playerId),
        s = [...a]
          .filter(([e, n]) => e !== t.playerId && n.team === t.team)
          .map(([, e]) => e.pos),
        c = [5, 7, 11][t.index % 3],
        l = t.lastPos,
        u = null,
        d = -1 / 0;
      for (let n = 0; n < 4; n++) {
        let a = r[(t.index * 7 + (i * 4 + n) * c) % r.length];
        if (
          e.map.roamBlocked?.(a.pos) ||
          (a.id === t.objectiveId && r.length > 1)
        )
          continue;
        let f = 30;
        for (let e of o)
          f = Math.min(f, Math.hypot(e.pos[0] - a.pos[0], e.pos[2] - a.pos[2]));
        for (let e of s)
          f = Math.min(f, Math.hypot(e[0] - a.pos[0], e[2] - a.pos[2]) + 4);
        let p =
          f - (l ? Math.hypot(l[0] - a.pos[0], l[2] - a.pos[2]) * 0.12 : 0);
        p > d && ((d = p), (u = a));
      }
      return (
        (u ||=
          r.find(
            (n) => n.id !== t.objectiveId && !e.map.roamBlocked?.(n.pos),
          ) ?? r[0]),
        (t.tdmRoam = { step: i, id: u.id }),
        a.set(t.playerId, { team: t.team, pos: u.pos }),
        u
      );
    }
    spawnFor(e, t) {
      if (this.plan.buddy) return this.buddySpawn(e, t);
      let r = e.byType(`soldier`).filter((e) => I(e) && e.owner !== t.id),
        i = r.filter((e) => e.team !== t.team),
        a = e.time.tick | 0,
        o = (this.spawnUsed ??= new Map()),
        s = this.plan.spawns
          .map((n, s) => {
            let c = [
                n.pos[0],
                n.pos[1] ?? e.map.getHeight(n.pos[0], n.pos[2]),
                n.pos[2],
              ],
              l = i.reduce((e, t) => Math.min(e, L(t.pos, c)), 400),
              u = r.reduce((e, t) => e + +(L(t.pos, c) < F.crowdRadius), 0),
              d = a - (o.get(s) ?? -1e9),
              f = Math.max(0, 1 - d / F.reuseTicks),
              p =
                ((((s + 1) * 2654435761) ^
                  (t.id * 40503) ^
                  ((a >> 6) * 69069)) >>>
                  0) /
                4294967296;
            return {
              i: s,
              s: n,
              pos: c,
              near: l,
              score: Math.min(l, F.safeDistance) - u * 5 - f * 30 + p * 20,
            };
          })
          .sort((e, t) => t.score - e.score);
      for (let t of [!0, !1])
        for (let r of s)
          if (
            !(r.near < this.cfg.minSpawnDistance) &&
            x(e.map, r.pos) &&
            (!r.s.lower || e.map.lowerOpen?.()) &&
            !e.map.spawnBlocked?.(r.pos) &&
            n(e, r.pos) &&
            (!t || g(e.map, r.pos, i, 120))
          )
            return (
              o.set(r.i, a),
              { pos: r.pos, yaw: r.s.yaw ?? 0, anchorId: `tdm` }
            );
      return null;
    }
    buddySpawn(e, t) {
      let r = e.byType(`soldier`).filter((e) => I(e) && e.owner !== t.id),
        i = r.filter((e) => e.team !== t.team),
        a = r.filter((e) => e.team === t.team),
        o = e.map.homeBases?.[t.team]?.pos ?? null,
        s = e.time.tick | 0,
        c = (this.spawnUsed ??= new Map()),
        l = this.plan.spawns
          .map((n, l) => {
            let u = [
                n.pos[0],
                n.pos[1] ?? e.map.getHeight(n.pos[0], n.pos[2]),
                n.pos[2],
              ],
              d = i.reduce((e, t) => Math.min(e, L(t.pos, u)), 400),
              f = a.reduce((e, t) => Math.min(e, L(t.pos, u)), 400),
              p = r.reduce((e, t) => e + +(L(t.pos, u) < 4), 0),
              m = s - (c.get(l) ?? -1e9),
              h = Math.max(0, 1 - m / F.reuseTicks),
              g =
                ((((l + 1) * 2654435761) ^
                  (t.id * 40503) ^
                  ((s >> 6) * 69069)) >>>
                  0) /
                4294967296;
            return {
              i: l,
              s: n,
              pos: u,
              near: d,
              score:
                (a.length ? -Math.abs(f - 10) * 1.2 : o ? -L(o, u) : 0) +
                Math.min(d, 40) * 0.15 -
                p * 4 -
                h * 12 +
                g * 5,
            };
          })
          .sort((e, t) => t.score - e.score);
      for (let t of [!0, !1])
        for (let r of l)
          if (
            !(r.near < this.cfg.minSpawnDistance) &&
            x(e.map, r.pos) &&
            !e.map.spawnBlocked?.(r.pos) &&
            n(e, r.pos) &&
            (!t || g(e.map, r.pos, i, 120))
          )
            return (
              c.set(r.i, s),
              { pos: r.pos, yaw: r.s.yaw ?? 0, anchorId: `tdm` }
            );
      return null;
    }
  };
