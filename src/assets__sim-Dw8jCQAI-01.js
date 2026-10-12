// assets__sim-Dw8jCQAI 01 — math
// Lines 1-227 of readable/assets__sim-Dw8jCQAI.pretty.js (statement-aligned).
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
