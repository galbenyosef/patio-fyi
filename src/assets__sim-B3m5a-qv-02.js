// assets__sim-B3m5a-qv 02 — match
// Lines 231-533 of readable/assets__sim-B3m5a-qv.pretty.js (statement-aligned).
var E = class {
  constructor(e = {}) {
    ((this.cfg = { ...g, ...e }),
      (this.capture = new Map()),
      (this.bleedClock = 0),
      (this.lastPhase = null),
      (this.lastSecond = -1),
      (this.winner = -1));
  }
  init(e, t = null) {
    ((e.match.mode = `conquest`),
      (e.match.phase = `warmup`),
      (e.match.timeLeft = this.cfg.warmupSeconds),
      (e.match.winner = -1));
    for (let t of e.teams) t.tickets = this.cfg.tickets;
    ((e.match.objectives = w(e, t, this.cfg.objectiveRadius)),
      this.capture.clear());
    for (let t of e.match.objectives) {
      let e = `${t.team}|${t.progressTeam}|${Math.round(t.progress * 20)}|0`;
      this.capture.set(t.id, {
        sentKey: e,
        occupants: [0, 0],
        earned: new Map(),
        workTeam: -1,
        kind: null,
        next: 0,
      });
    }
    return (
      (this.bleedClock = 0),
      (this.lastPhase = null),
      (this.lastSecond = Math.ceil(e.match.timeLeft)),
      (this.winner = -1),
      this.snapshot(e)
    );
  }
  snapshot(e) {
    return {
      mode: `conquest`,
      phase: e.match.phase,
      timeLeft: Math.max(0, e.match.timeLeft),
      winner: e.match.winner ?? -1,
      ticketCapacity: this.cfg.tickets,
      tickets: [e.teams[0]?.tickets ?? 0, e.teams[1]?.tickets ?? 0],
      objectives: e.match.objectives.map(S),
    };
  }
  tick(e, t) {
    let n = [];
    if (e.match.phase === `warmup`)
      ((e.match.timeLeft = Math.max(0, e.match.timeLeft - t)),
        e.match.timeLeft <= 0 &&
          ((e.match.phase = `live`),
          (e.match.timeLeft = Math.min(m, this.cfg.matchSeconds)),
          n.push({
            name: `match:phase`,
            data: { phase: `live`, timeLeft: e.match.timeLeft },
          })));
    else if (e.match.phase === `live`) {
      for (
        h(this.cfg.matchSeconds)
          ? (e.match.timeLeft = m)
          : (e.match.timeLeft = Math.max(0, e.match.timeLeft - t)),
          this.stepObjectives(e, t, n),
          this.bleedClock += t;
        this.bleedClock >= this.cfg.bleedSeconds && e.match.phase === `live`;
      )
        ((this.bleedClock -= this.cfg.bleedSeconds), this.applyBleed(e, n));
      e.match.timeLeft <= 0 && this.end(e, k(e), n, `time`);
    }
    let r = Math.ceil(e.match.timeLeft);
    return (
      r !== this.lastSecond &&
        ((this.lastSecond = r),
        n.push({ name: `match:clock`, data: { timeLeft: r } })),
      n
    );
  }
  stepObjectives(e, t, n) {
    let r = e.byType(`soldier`);
    for (let i of e.match.objectives) {
      let a = this.capture.get(i.id) ?? {
        sentKey: ``,
        occupants: [0, 0],
        earned: new Map(),
        workTeam: -1,
        kind: null,
        next: 0,
      };
      ((a.occupants[0] = 0), (a.occupants[1] = 0));
      let o = [[], []];
      ((a.earned ??= new Map()), (a.workTeam ??= -1));
      let s = i.radius * i.radius,
        c = e.map.captureIn;
      for (let e of r) {
        if (!x(e)) continue;
        let t = c?.(i, e);
        t === !1 ||
          (t !== !0 &&
            (Math.abs(e.pos[1] - i.pos[1]) > 8 || b(e.pos, i.pos) > s)) ||
          (a.occupants[e.team]++, o[e.team].push(e.id));
      }
      let l = a.occupants[0],
        u = a.occupants[1],
        d = `${i.team}|${i.progressTeam}|${Math.round(i.progress * 20)}|${+!!i.contested}`;
      if (((i.contested = l > 0 && u > 0), !i.contested)) {
        let e = l > 0 ? 0 : u > 0 ? 1 : -1;
        if (e >= 0) {
          i.team !== e &&
            a.workTeam !== e &&
            (a.earned.clear(), (a.workTeam = e), (a.kind = null));
          let r = i.team;
          (this.applyCapture(i, e, a.occupants[e], t),
            i.team === r && i.team !== e && this.paySecuring(i, a, e, o[e], n),
            i.team !== r &&
              this.payCapture(
                i,
                a,
                o[e],
                i.team === -1 ? `neutralize` : `capture`,
                n,
              ));
        } else
          i.team >= 0 &&
            i.progress < 1 &&
            (i.progress = Math.min(
              1,
              i.progress + t / (this.cfg.captureSeconds * 2),
            ));
      }
      i.spawnable =
        !i.noSpawn && i.team >= 0 && !i.contested && i.progress >= 0.999;
      let f = `${i.team}|${i.progressTeam}|${Math.round(i.progress * 20)}|${+!!i.contested}`;
      ((f !== d || a.sentKey !== f) &&
        ((a.sentKey = f),
        n.push({ name: `objective:changed`, data: O(i, a.occupants) })),
        this.capture.set(i.id, a));
    }
  }
  paySecuring(e, t, n, r, i) {
    let a = e.team >= 0 || e.progressTeam !== n ? `neutralize` : `capture`,
      o = a === `capture` ? e.progress : -e.progress,
      s = f.step;
    if (t.kind !== a) {
      ((t.kind = a), (t.next = o + s), t.earned.clear());
      return;
    }
    let c = 0;
    for (; o >= t.next - 1e-9;) (c++, (t.next += s));
    if (!c || !r.length) return;
    let l = c * p(a),
      u = [];
    for (let n of r)
      (t.earned.set(n, (t.earned.get(n) ?? 0) + l),
        u.push([n, l, `Securing ${D(e)}`]));
    i.push({
      name: `objective:score`,
      data: { objectiveId: e.id, kind: `securing`, awards: u },
    });
  }
  payCapture(e, t, n, r, i) {
    let a = d[r],
      o = [],
      s = r === `capture` ? `Captured ${D(e)}` : `Neutralized ${D(e)}`;
    for (let e of n) {
      let n = t.kind === r ? a - (t.earned.get(e) ?? 0) : a;
      n > 0 && o.push([e, n, s]);
    }
    (t.earned.clear(),
      (t.kind = null),
      o.length &&
        i.push({
          name: `objective:score`,
          data: { objectiveId: e.id, kind: r, awards: o },
        }));
  }
  applyCapture(e, t, n, r) {
    let i =
      (r / this.cfg.captureSeconds) *
      Math.min(3.2, 1 + Math.max(0, n - 1) * 0.55);
    if (e.team === t) {
      ((e.progressTeam = t), (e.progress = Math.min(1, e.progress + i * 0.65)));
      return;
    }
    if (e.team >= 0) {
      ((e.progressTeam = t),
        (e.progress = Math.max(0, e.progress - i)),
        e.progress <= 0 &&
          ((e.team = -1), (e.progress = 0), (e.spawnable = !1)));
      return;
    }
    if (e.progress > 0 && e.progressTeam !== t) {
      ((e.progress = Math.max(0, e.progress - i)),
        e.progress <= 0 && (e.progressTeam = t));
      return;
    }
    ((e.progressTeam = t),
      (e.progress = Math.min(1, e.progress + i)),
      e.progress >= 1 &&
        ((e.team = t), (e.progress = 1), (e.spawnable = !e.noSpawn)));
  }
  applyBleed(e, t) {
    let n = [0, 0];
    for (let t of e.match.objectives)
      (t.team === 0 || t.team === 1) && n[t.team]++;
    if (n[0] === n[1]) return;
    let r = +(n[0] > n[1]),
      i = Math.abs(n[0] - n[1]);
    ((e.teams[r].tickets = Math.max(0, e.teams[r].tickets - i)),
      t.push({
        name: `match:tickets`,
        data: {
          team: r,
          amount: -i,
          reason: `bleed`,
          tickets: e.teams[r].tickets,
        },
      }),
      e.teams[r].tickets <= 0 && this.end(e, 1 - r, t, `tickets`));
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
    return (e.teams[t].tickets <= 0 && this.end(e, 1 - t, n, `tickets`), n);
  }
  end(e, t, n, r) {
    e.match.phase !== `ended` &&
      ((e.match.phase = `ended`),
      (e.match.timeLeft = 0),
      (e.match.winner = t),
      (this.winner = t),
      n.push({
        name: `match:phase`,
        data: { phase: `ended`, timeLeft: 0, winner: t, reason: r },
      }));
  }
};
function D(e) {
  return e.letter ?? String(e.id).split(`-`).pop().toUpperCase();
}
function O(e, t) {
  return {
    objectiveId: e.id,
    team: e.team,
    progress: e.progress,
    progressTeam: e.progressTeam,
    contested: e.contested,
    spawnable: e.spawnable,
    occupants: [t[0], t[1]],
  };
}
function k(e) {
  let t = e.teams[0]?.tickets ?? 0,
    n = e.teams[1]?.tickets ?? 0;
  if (t !== n) return t > n ? 0 : 1;
  let r = [0, 0];
  for (let t of e.match.objectives) t.team >= 0 && r[t.team]++;
  return r[0] === r[1] ? -1 : r[0] > r[1] ? 0 : 1;
}
function A(e) {
  if (e.map.homeBases?.length === 2)
    return e.map.homeBases.map((e) => ({ ...e, pos: e.pos.slice() }));
  let t = e.match.objectives;
  if (t.length >= 2) {
    let n = t[0].pos,
      r = t[t.length - 1].pos,
      i = r[0] - n[0],
      a = r[2] - n[2],
      o = Math.hypot(i, a) || 1;
    ((i /= o), (a /= o));
    let s = y(o * 0.24, 80, 130);
    return [
      {
        id: `hq-0`,
        pos: [n[0] - i * s, 0, n[2] - a * s],
        yaw: Math.atan2(-i, -a),
      },
      {
        id: `hq-1`,
        pos: [r[0] + i * s, 0, r[2] + a * s],
        yaw: Math.atan2(i, a),
      },
    ].map((t) => ({
      ...t,
      pos: [t.pos[0], e.map.getHeight(t.pos[0], t.pos[2]), t.pos[2]],
    }));
  }
  return [
    { id: `hq-0`, pos: [-300, e.map.getHeight(-300, 0), 0], yaw: -Math.PI / 2 },
    { id: `hq-1`, pos: [300, e.map.getHeight(300, 0), 0], yaw: Math.PI / 2 },
  ];
}
