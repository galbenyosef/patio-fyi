// assets__server-DXdSsLPm 03 — pos
// Lines 524-810 of readable/assets__server-DXdSsLPm.pretty.js (statement-aligned).
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
