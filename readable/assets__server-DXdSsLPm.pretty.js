/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { Jn as e, Kn as t } from "./graphics-quality-CrL3qbU3.js";
import { O as n } from "./sim-CCeMdhLh.js";
import { l as r, n as i, s as a } from "./catalog-D58c7iOM.js";
import { r as o } from "./hostility-BAA0I7XB.js";
import { i as s, n as c, r as l, t as u } from "./squads-7-3V4T83.js";
import { t as d } from "./shells-CPYGRlwG.js";
import { c as f } from "./classes-CVJSEMDb.js";
import {
  a as p,
  c as m,
  f as h,
  l as g,
  n as _,
  r as v,
  s as y,
  t as b,
  u as x,
} from "./sim-B3m5a-qv.js";
import { n as S } from "./chat-wULIZG4-.js";
import { i as C, s as w } from "./beacon-nTTDa8yz.js";
import { t as T } from "./beacon-server-DYQB2vWa.js";
import { i as E, t as D } from "./perf-report-BkPTOfAw.js";
var O = Object.freeze({
    tickets: 150,
    armSeconds: 3,
    disarmSeconds: 4,
    fuseSeconds: 30,
    stationRadius: 3,
    warmupSeconds: 10,
    matchSeconds: 2400,
    holdTicks: 3,
  }),
  k = (t) =>
    t?.type === `soldier` &&
    t.hp > 0 &&
    !(t.state & e.DEAD) &&
    !(t.state & e.IN_VEHICLE) &&
    (t.team === 0 || t.team === 1),
  A = (e) => ({
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
  ee = (e) => ({
    objectiveId: e.id,
    team: e.team,
    progress: e.progress,
    progressTeam: e.progressTeam,
    contested: e.contested,
    spawnable: !1,
    state: e.state,
    occupants: [0, 0],
  }),
  j = (e, t, n) => ({
    id: t,
    pos: [e.pos[0], e.pos[1] ?? n.map.getHeight(e.pos[0], e.pos[2]), e.pos[2]],
    yaw: e.yaw ?? 0,
  }),
  M = class {
    constructor(e, t = {}) {
      if (!e?.zones?.length) throw Error(`Rush needs at least one zone`);
      ((this.plan = e),
        (this.cfg = { ...O, ...t }),
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
      ((a[this.attackers] = j(r, `hq-${this.attackers}`, e)),
        (a[this.defenders] = j(i, `hq-${this.defenders}`, e)),
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
        objectives: e.match.objectives.map(A),
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
          !k(e) ||
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
          n.push({ name: `objective:changed`, data: ee(a) });
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
        ? Math.round((t * this.cfg.tickets) / O.tickets)
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
  N = Object.freeze({
    killLimit: 30,
    warmupSeconds: 10,
    matchSeconds: 600,
    minSpawnDistance: 14,
  }),
  P = (t) => t?.type === `soldier` && t.hp > 0 && !(t.state & e.DEAD),
  te = (e, t) => (e[0] - t[0]) ** 2 + (e[2] - t[2]) ** 2,
  F = class {
    constructor(e, t = {}) {
      if (!e?.spawns?.length) throw Error(`Free-for-all needs spawn points`);
      ((this.plan = e),
        (this.cfg = {
          ...N,
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
          ...(t.level ? { level: !0 } : {}),
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
      let r = e.byType(`soldier`).filter((e) => P(e) && e.owner !== t.id),
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
                    Math.sqrt(te(t.pos, o)) + Math.abs(t.pos[1] - o[1]) * 0.5,
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
  I = Object.freeze({
    killLimit: 100,
    warmupSeconds: 10,
    matchSeconds: 1200,
    minSpawnDistance: 14,
    safeDistance: 26,
    crowdRadius: 10,
    reuseTicks: 1200,
  });
function L(e, t, n, r, i) {
  let a = (t) => {
    let r = e.map.homeBases?.[t]?.pos;
    return r ? Math.hypot(r[0] - n[0], r[2] - n[2]) : 400;
  };
  return (r ?? a(t)) < (i ?? a(1 - t));
}
var R = Object.freeze([
    { own: !0, unseen: !0 },
    { own: !1, unseen: !0 },
    { own: !1, unseen: !1 },
  ]),
  z = (t) => t?.type === `soldier` && t.hp > 0 && !(t.state & e.DEAD),
  B = (e, t) =>
    Math.hypot(e[0] - t[0], e[2] - t[2]) + Math.abs(e[1] - t[1]) * 0.5,
  ne = class extends F {
    constructor(e, t = {}) {
      super(e, {
        ...I,
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
          .filter((e) => z(e) && e.team === t.team && e.owner !== t.playerId),
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
      let r = e.byType(`soldier`).filter((e) => z(e) && e.owner !== t.id),
        i = r.filter((e) => e.team !== t.team),
        a = r.filter((e) => e.team === t.team),
        o = e.time.tick | 0,
        s = (this.spawnUsed ??= new Map()),
        c = this.plan.spawns
          .map((n, c) => {
            let l = [
                n.pos[0],
                n.pos[1] ?? e.map.getHeight(n.pos[0], n.pos[2]),
                n.pos[2],
              ],
              u = i.reduce((e, t) => Math.min(e, B(t.pos, l)), 400),
              d = a.reduce((e, t) => Math.min(e, B(t.pos, l)), 400),
              f = L(e, t.team, l, a.length ? d : null, i.length ? u : null),
              p = r.reduce((e, t) => e + +(B(t.pos, l) < I.crowdRadius), 0),
              m = o - (s.get(c) ?? -1e9),
              h = Math.max(0, 1 - m / I.reuseTicks),
              g =
                ((((c + 1) * 2654435761) ^
                  (t.id * 40503) ^
                  ((o >> 6) * 69069)) >>>
                  0) /
                4294967296,
              _ = a.length ? -Math.min(d, 60) * 0.2 : 0;
            return {
              i: c,
              s: n,
              pos: l,
              near: u,
              friendly: f,
              score: Math.min(u, I.safeDistance) - p * 5 - h * 30 + g * 12 + _,
            };
          })
          .sort((e, t) => t.score - e.score);
      for (let t of R)
        for (let r of c)
          if (
            !(r.near < this.cfg.minSpawnDistance) &&
            (!t.own || r.friendly) &&
            x(e.map, r.pos) &&
            (!r.s.lower || e.map.lowerOpen?.()) &&
            !e.map.spawnBlocked?.(r.pos) &&
            n(e, r.pos) &&
            (!t.unseen || g(e.map, r.pos, i, 120))
          )
            return (
              s.set(r.i, o),
              { pos: r.pos, yaw: r.s.yaw ?? 0, anchorId: `tdm` }
            );
      return null;
    }
    buddySpawn(e, t) {
      let r = e.byType(`soldier`).filter((e) => z(e) && e.owner !== t.id),
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
              d = i.reduce((e, t) => Math.min(e, B(t.pos, u)), 400),
              f = a.reduce((e, t) => Math.min(e, B(t.pos, u)), 400),
              p = L(e, t.team, u, a.length ? f : null, i.length ? d : null),
              m = r.reduce((e, t) => e + +(B(t.pos, u) < 4), 0),
              h = s - (c.get(l) ?? -1e9),
              g = Math.max(0, 1 - h / I.reuseTicks),
              _ =
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
              friendly: p,
              score:
                (a.length ? -Math.abs(f - 10) * 1.2 : o ? -B(o, u) : 0) +
                Math.min(d, 40) * 0.15 -
                m * 4 -
                g * 12 +
                _ * 5,
            };
          })
          .sort((e, t) => t.score - e.score);
      for (let t of R)
        for (let r of l)
          if (
            !(r.near < this.cfg.minSpawnDistance) &&
            (!t.own || r.friendly) &&
            x(e.map, r.pos) &&
            !e.map.spawnBlocked?.(r.pos) &&
            n(e, r.pos) &&
            (!t.unseen || g(e.map, r.pos, i, 120))
          )
            return (
              c.set(r.i, s),
              { pos: r.pos, yaw: r.s.yaw ?? 0, anchorId: `tdm` }
            );
      return null;
    }
  };
function re(t) {
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
export { pe as default };
//# sourceMappingURL=server-DXdSsLPm.js.map
