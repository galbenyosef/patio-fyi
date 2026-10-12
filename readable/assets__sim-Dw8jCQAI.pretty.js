/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { Gn as e } from "./graphics-quality-BsjABS0s.js";
import { E as t, g as n, o as r, r as i, x as a } from "./sim-D8F3HPJq.js";
var o = 0.45,
  s = 1.7;
function c(
  e,
  t,
  { reach: n = 20, cell: r = 0.5, radius: i = 0.3, maxCells: a = 2500 } = {},
) {
  let c = t[0],
    l = t[2],
    u = n + 1,
    d = new Map();
  for (let n of e.colliders.query(c - u, l - u, c + u, l + u)) {
    if (n.solid === !1 || n.noPlayer || n.id.startsWith?.(`vehicle-`)) continue;
    let e = n.movementAabb ?? n.aabb;
    if (!(!e || e[4] < t[1] - 6 || e[1] > t[1] + 8))
      for (
        let t = Math.max(Math.floor(e[0]), Math.floor(c - u));
        t <= Math.min(Math.floor(e[3]), Math.floor(c + u));
        t++
      )
        for (
          let r = Math.max(Math.floor(e[2]), Math.floor(l - u));
          r <= Math.min(Math.floor(e[5]), Math.floor(l + u));
          r++
        ) {
          let e = t * 65536 + r,
            i = d.get(e);
          (i || d.set(e, (i = [])), i.push(n));
        }
  }
  let f = (e, t, n, r) => {
      let i = new Set();
      for (let a = Math.floor(e); a <= Math.floor(n); a++)
        for (let e = Math.floor(t); e <= Math.floor(r); e++)
          for (let t of d.get(a * 65536 + e) ?? []) i.add(t);
      return i;
    },
    p = (t, n, a) => {
      let u = c + t * r,
        d = l + n * r,
        p = Math.max(i, r / 2),
        m = e.getHeight(u, d);
      if (!(m <= a + o)) return null;
      let h = [];
      for (let e of f(u - p, d - p, u + p, d + p)) {
        let t = e.movementAabb ?? e.aabb;
        if (t && t[3] > u - p && t[0] < u + p && t[5] > d - p && t[2] < d + p) {
          if (e.floorHeight || e.obb?.ramp) {
            if (t[0] <= u && t[3] >= u && t[2] <= d && t[5] >= d) {
              let n = e.floorHeight
                ? e.floorHeight(u, d)
                : Math.min(t[4], a + o);
              Number.isFinite(n) && n <= a + o && n > m && (m = n);
            }
            continue;
          }
          (h.push(t),
            t[4] <= a + o &&
              t[4] > m &&
              t[0] <= u &&
              t[3] >= u &&
              t[2] <= d &&
              t[5] >= d &&
              (m = t[4]));
        }
      }
      for (let e of h) if (e[4] > m + o && e[1] < m + s) return null;
      return m;
    },
    m = new Set([`0,0`]),
    h = [[0, 0, 0, t[1]]],
    g = n / r,
    _ = g * g,
    v = (e, t, n) => {
      let r = e + `,` + t;
      if (m.has(r)) return;
      m.add(r);
      let i = p(e, t, n);
      if (i == null) return;
      let a = e * e + t * t;
      h.push([a, e, t, i]);
      let o = h.length - 1;
      for (; o > 0;) {
        let e = (o - 1) >> 1;
        if (h[e][0] >= a) break;
        (([h[e], h[o]] = [h[o], h[e]]), (o = e));
      }
    },
    y = () => {
      let e = h[0],
        t = h.pop();
      if (h.length) {
        h[0] = t;
        let e = 0;
        for (;;) {
          let t = 2 * e + 1,
            n = t + 1,
            r = e;
          if (
            (t < h.length && h[t][0] > h[r][0] && (r = t),
            n < h.length && h[n][0] > h[r][0] && (r = n),
            r === e)
          )
            break;
          (([h[r], h[e]] = [h[e], h[r]]), (e = r));
        }
      }
      return e;
    },
    b = 0;
  for (; h.length;) {
    let [e, t, n, r] = y();
    if (e >= _ || ++b > a) return !1;
    (v(t + 1, n, r), v(t - 1, n, r), v(t, n + 1, r), v(t, n - 1, r));
  }
  return !0;
}
var l = new WeakMap();
function u(e, t, n = 300) {
  let r = l.get(e.map);
  r || l.set(e.map, (r = new Map()));
  let i = Math.round(t[0]) + `,` + Math.round(t[1]) + `,` + Math.round(t[2]),
    a = e.time?.tick ?? 0,
    o = r.get(i);
  if (o && a - o.at < n) return o.sealed;
  r.size > 4096 && r.clear();
  let s = c(e.map, t);
  return (r.set(i, { at: a, sealed: s }), s);
}
var d = 65535,
  f = (e) => +e >= d,
  p = Object.freeze({
    teamSize: 16,
    tickets: 1e3,
    objectiveRadius: 12,
    captureSeconds: 24,
    warmupSeconds: 10,
    matchSeconds: d,
    bleedSeconds: 5,
    respawnSeconds: 10,
    safeSpawnDistance: 40,
    spawnSeparation: 2.6,
  }),
  m = [`A`, `B`, `C`],
  h = [`West Ridge`, `Crossroads`, `East Farm`];
function g(e, t, n) {
  return e < t ? t : e > n ? n : e;
}
function _(e, t) {
  let n = e[0] - t[0],
    r = e[2] - t[2];
  return n * n + r * r;
}
function v(t) {
  return (
    t?.type === `soldier` &&
    t.hp > 0 &&
    !(t.state & e.DEAD) &&
    (t.team === 0 || t.team === 1)
  );
}
function y(e) {
  return {
    id: e.id,
    letter: e.letter,
    name: e.name,
    pos: [e.pos[0], e.pos[1], e.pos[2]],
    radius: e.radius,
    team: e.team,
    progress: e.progress,
    progressTeam: e.progressTeam,
    contested: e.contested,
    spawnable: e.spawnable,
  };
}
function b(e, t = p.objectiveRadius) {
  let n = e?.map?.size || 800,
    r = n <= 1e3 ? g(n * 0.22, 150, 190) : 180;
  return m.map((n, i) => {
    let a = (i - 1) * r;
    return {
      id: `conquest-${n.toLowerCase()}`,
      letter: n,
      name: h[i],
      pos: [a, e.map.getHeight(a, 0), 0],
      radius: t,
    };
  });
}
function x(e, t, n = p.objectiveRadius) {
  return (Array.isArray(t) && t.length >= 3 && t.length <= 5 ? t : b(e, n)).map(
    (t, r) => {
      let i = Number.isFinite(t?.pos?.[0]) ? +t.pos[0] : (r - 1) * 180,
        a = Number.isFinite(t?.pos?.[2]) ? +t.pos[2] : 0,
        o = Number.isFinite(t?.pos?.[1]) ? +t.pos[1] : e.map.getHeight(i, a),
        s = t?.team === 0 || t?.team === 1 ? t.team : -1;
      return {
        id: t?.id ?? `conquest-${String.fromCharCode(97 + r)}`,
        letter: t?.letter ?? String.fromCharCode(65 + r),
        name: t?.name ?? h[r] ?? `Base ${r + 1}`,
        pos: [i, o, a],
        radius: +t?.radius > 0 ? +t.radius : n,
        team: s,
        progress: s >= 0 ? 1 : g(+t?.progress || 0, 0, 1),
        progressTeam: s >= 0 ? s : +(t?.progressTeam === 1),
        contested: !1,
        spawnable: s >= 0 && !t?.noSpawn,
        ...(t?.noSpawn ? { noSpawn: !0 } : {}),
        ...(typeof t?.lane == `string` ? { lane: t.lane } : {}),
        ...(Array.isArray(t?.lanes) ? { lanes: t.lanes.slice() } : {}),
      };
    },
  );
}
function S(e, t = -1, n = -1) {
  let r = [0, 0];
  for (let t of e.players.values())
    t.id === n || t.reserve || (t.team !== 0 && t.team !== 1) || r[t.team]++;
  return (t === 0 || t === 1) && r[t] + 1 - r[1 - t] <= 1
    ? t
    : r[0] <= r[1]
      ? 0
      : 1;
}
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
function j(e, t, n = null) {
  let r = [],
    i = (t * 2.399963229728653) % (Math.PI * 2);
  if (Number.isFinite(n)) {
    r.push([e[0], e[1], e[2]]);
    for (let t = 4; t <= n + 1e-6; t += 4) {
      let n = Math.max(8, Math.round((Math.PI * 2 * t) / 3));
      for (let a = 0; a < n; a++) {
        let o = i + (a * Math.PI * 2) / n;
        r.push([e[0] + Math.cos(o) * t, e[1], e[2] + Math.sin(o) * t]);
      }
    }
    return r;
  }
  for (let t = 0; t < 11; t++) {
    let n = t === 0 ? 0 : 5 + t * 10,
      a = t === 0 ? 1 : 20;
    for (let t = 0; t < a; t++) {
      let o = i + (t * Math.PI * 2) / a;
      r.push([e[0] + Math.cos(o) * n, e[1], e[2] + Math.sin(o) * n]);
    }
  }
  return r;
}
function M(e) {
  return Math.atan2(e[0], e[2]) + Math.PI;
}
function N(e = p.respawnSeconds) {
  return Math.max(1, Math.ceil(e * 60));
}
export {
  E as a,
  D as c,
  f as d,
  u as f,
  b as i,
  O as l,
  C as n,
  x as o,
  S as r,
  N as s,
  p as t,
  A as u,
};
//# sourceMappingURL=sim-Dw8jCQAI.js.map
