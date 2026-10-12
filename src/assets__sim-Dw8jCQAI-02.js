// assets__sim-Dw8jCQAI 02 — match
// Lines 228-558 of readable/assets__sim-Dw8jCQAI.pretty.js (statement-aligned).
var C = class {
  constructor(e = {}) {
    ((this.cfg = { ...p, ...e }),
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
    ((e.match.objectives = x(e, t, this.cfg.objectiveRadius)),
      this.capture.clear());
    for (let t of e.match.objectives) {
      let e = `${t.team}|${t.progressTeam}|${Math.round(t.progress * 20)}|0`;
      this.capture.set(t.id, { sentKey: e, occupants: [0, 0] });
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
      objectives: e.match.objectives.map(y),
    };
  }
  tick(e, t) {
    let n = [];
    if (e.match.phase === `warmup`)
      ((e.match.timeLeft = Math.max(0, e.match.timeLeft - t)),
        e.match.timeLeft <= 0 &&
          ((e.match.phase = `live`),
          (e.match.timeLeft = Math.min(d, this.cfg.matchSeconds)),
          n.push({
            name: `match:phase`,
            data: { phase: `live`, timeLeft: e.match.timeLeft },
          })));
    else if (e.match.phase === `live`) {
      for (
        f(this.cfg.matchSeconds)
          ? (e.match.timeLeft = d)
          : (e.match.timeLeft = Math.max(0, e.match.timeLeft - t)),
          this.stepObjectives(e, t, n),
          this.bleedClock += t;
        this.bleedClock >= this.cfg.bleedSeconds && e.match.phase === `live`;
      )
        ((this.bleedClock -= this.cfg.bleedSeconds), this.applyBleed(e, n));
      e.match.timeLeft <= 0 && this.end(e, T(e), n, `time`);
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
      let a = this.capture.get(i.id) ?? { sentKey: ``, occupants: [0, 0] };
      ((a.occupants[0] = 0), (a.occupants[1] = 0));
      let o = i.radius * i.radius,
        s = e.map.captureIn;
      for (let e of r) {
        if (!v(e)) continue;
        let t = s?.(i, e);
        t === !1 ||
          (t !== !0 &&
            (Math.abs(e.pos[1] - i.pos[1]) > 8 || _(e.pos, i.pos) > o)) ||
          a.occupants[e.team]++;
      }
      let c = a.occupants[0],
        l = a.occupants[1],
        u = `${i.team}|${i.progressTeam}|${Math.round(i.progress * 20)}|${+!!i.contested}`;
      if (((i.contested = c > 0 && l > 0), !i.contested)) {
        let e = c > 0 ? 0 : l > 0 ? 1 : -1;
        e >= 0
          ? this.applyCapture(i, e, a.occupants[e], t)
          : i.team >= 0 &&
            i.progress < 1 &&
            (i.progress = Math.min(
              1,
              i.progress + t / (this.cfg.captureSeconds * 2),
            ));
      }
      i.spawnable =
        !i.noSpawn && i.team >= 0 && !i.contested && i.progress >= 0.999;
      let d = `${i.team}|${i.progressTeam}|${Math.round(i.progress * 20)}|${+!!i.contested}`;
      ((d !== u || a.sentKey !== d) &&
        ((a.sentKey = d),
        n.push({ name: `objective:changed`, data: w(i, a.occupants) })),
        this.capture.set(i.id, a));
    }
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
function w(e, t) {
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
function T(e) {
  let t = e.teams[0]?.tickets ?? 0,
    n = e.teams[1]?.tickets ?? 0;
  if (t !== n) return t > n ? 0 : 1;
  let r = [0, 0];
  for (let t of e.match.objectives) t.team >= 0 && r[t.team]++;
  return r[0] === r[1] ? -1 : r[0] > r[1] ? 0 : 1;
}
function E(e) {
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
    let s = g(o * 0.24, 80, 130);
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
function D(e, n, r = null, i = p.safeSpawnDistance, a = null) {
  if (!n || (n.team !== 0 && n.team !== 1)) return null;
  let o = E(e),
    s = e.match.objectives.find(
      (e) => e.id === r && e.team === n.team && e.spawnable && !e.contested,
    ),
    c = e.match.objectives.filter(
      (e) => e.team === n.team && e.spawnable && !e.contested,
    ),
    l =
      r === o[n.team].id
        ? [o[n.team]]
        : s
          ? [s, ...c.filter((e) => e !== s), o[n.team]]
          : [...c, o[n.team]],
    d = e.byType(`soldier`).filter((e) => v(e) && e.id !== n.entityId),
    f = d.filter((e) => e.team !== n.team),
    m = i * i,
    h = p.spawnSeparation * p.spawnSeparation,
    g = l.flatMap((t) =>
      j(t.pos, n.id, e.map.spawnRadius).map((e) => ({ anchor: t, p: e })),
    ),
    y = Number.isFinite(e.map.hqSafeDistance)
      ? Math.min(m, e.map.hqSafeDistance ** 2)
      : m;
  a && g.sort((e, t) => _(e.p, a) - _(t.p, a));
  for (let { anchor: r, p: i } of g) {
    if (
      ((i[1] = k(e.map, i[0], i[2])),
      !A(e.map, i) ||
        (Number.isFinite(e.map.spawnLevel) &&
          Math.abs(i[1] - r.pos[1]) > e.map.spawnLevel))
    )
      continue;
    let a = e.map.spawnBounds;
    if (
      (a && (i[0] < a[0] || i[2] < a[1] || i[0] > a[2] || i[2] > a[3])) ||
      e.map.noSpawn?.some(
        (e) =>
          i[0] > e[0] - 1 &&
          i[0] < e[2] + 1 &&
          i[2] > e[1] - 1 &&
          i[2] < e[3] + 1,
      ) ||
      d.some((e) => _(e.pos, i) < h) ||
      !t(e, i)
    )
      continue;
    let s = r === o[n.team] ? y : m;
    if (f.every((e) => _(e.pos, i) >= s) && O(e.map, i, f) && !u(e, i))
      return { pos: i, yaw: r.yaw ?? M(i), anchorId: r.id };
  }
  return null;
}
function O(e, t, o, s = 150) {
  for (let c of o) {
    if (_(c.pos, t) > s * s) continue;
    let o = n(),
      l = [c.pos[0], c.pos[1] + a(c), c.pos[2]];
    for (let n of [0.9 * o, (r[0] - i) * o]) {
      let r = [t[0] - l[0], t[1] + n - l[1], t[2] - l[2]],
        i = Math.hypot(...r);
      if (i < 0.01) return !1;
      let a = e.raycast(
        l,
        r.map((e) => e / i),
        i,
      );
      if (!a || a.dist >= i - 0.45) return !1;
    }
  }
  return !0;
}
var k = (e, t, n) => e.spawnGround?.(t, n) ?? e.getHeight(t, n);
function A(e, t) {
  let n = e.bounds,
    r = e.waterBounds;
  for (let [i, a] of [
    [0, 0],
    [0.4, 0],
    [-0.4, 0],
    [0, 0.4],
    [0, -0.4],
  ]) {
    let o = t[0] + i,
      s = t[2] + a,
      c = k(e, o, s);
    if (
      ![o, c, s].every(Number.isFinite) ||
      (n && (o < n[0] || s < n[1] || o > n[2] || s > n[3])) ||
      ((!r || (o >= r[0] && s >= r[1] && o <= r[2] && s <= r[3])) &&
        Number.isFinite(e.waterLevel) &&
        c < e.waterLevel + 0.15)
    )
      return !1;
  }
  return !0;
}
