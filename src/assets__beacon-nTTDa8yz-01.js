// assets__beacon-nTTDa8yz 01 — pos
// Lines 1-131 of readable/assets__beacon-nTTDa8yz.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import "./graphics-quality-CrL3qbU3.js";
import "./gadget-defs-C7GNMdw7.js";
import { a as e, r as t } from "./squads-7-3V4T83.js";
var n = Object.freeze({
    tool: 66,
    prop: 215,
    hp: 1080,
    reach: 3.5,
    plantCooldown: 1800,
    armTicks: 300,
    spawnCooldown: 600,
    enemyRadius: 12,
    enemyRise: 4,
    spacing: 8,
    enemyHQRadius: 20,
    half: 0.16,
    height: 0.46,
    explosionReach: 4,
    score: 25,
  }),
  r = (e) => e?.type === `prop` && e.weapon === 215 && e.hp > 0,
  i = (e, t) => {
    for (let n of e.entities.values()) if (r(n) && n.owner === t) return n;
    return null;
  },
  a = (e) => `beacon:${e.id}:${e.beaconGeneration ?? 0}`,
  o = (e) =>
    e === `beacon` || (typeof e == `string` && e.startsWith(`beacon:`));
function s(n, i, a) {
  if (!r(a)) return `No beacon`;
  let o = n.players.get(i?.id),
    s = n.players.get(a.owner);
  if (!o || o.reserve || !s || s.reserve) return `Beacon owner unavailable`;
  if (o.team !== a.team || s.team !== a.team) return `Other team`;
  if (o.id === a.owner) return ``;
  if (e(n)) return `Owner only in this match`;
  let c = t(n, o.id);
  return c?.team === o.team && c.members.includes(a.owner)
    ? ``
    : `Not in your squad`;
}
var c = (e, t) =>
    [...e.entities.values()]
      .filter((n) => r(n) && !s(e, t, n))
      .sort(
        (e, n) =>
          (n.owner === t?.id) - (e.owner === t?.id) ||
          e.owner - n.owner ||
          e.id - n.id,
      ),
  l = (e) => [
    e.pos[0] - n.half,
    e.pos[1],
    e.pos[2] - n.half,
    e.pos[0] + n.half,
    e.pos[1] + n.height,
    e.pos[2] + n.half,
  ];
function u(e, t, n, r) {
  let i = 0,
    a = r,
    o = -1,
    s = 0;
  for (let r = 0; r < 3; r++) {
    if (Math.abs(t[r]) < 1e-9) {
      if (e[r] < n[r] || e[r] > n[r + 3]) return null;
      continue;
    }
    let c = (n[r] - e[r]) / t[r],
      l = (n[r + 3] - e[r]) / t[r],
      u = -1;
    if (
      (c > l && (([c, l] = [l, c]), (u = 1)),
      c > i && ((i = c), (o = r), (s = u)),
      l < a && (a = l),
      i > a)
    )
      return null;
  }
  if (o < 0) return null;
  let c = [0, 0, 0];
  return (
    (c[o] = s),
    {
      dist: i,
      point: [e[0] + t[0] * i, e[1] + t[1] * i, e[2] + t[2] * i],
      normal: c,
    }
  );
}
function d(e) {
  let t = l(e),
    n = `beacon-` + e.id,
    r = e.id;
  return {
    id: n,
    mask: `static`,
    solid: !1,
    noPlayer: !0,
    surface: `metal`,
    aabb: t,
    beaconId: r,
    raycast(e, i, a) {
      let o = u(e, i, t, a);
      return o
        ? { ...o, surface: `metal`, pen: `armor`, beaconId: r, colliderId: n }
        : null;
    },
  };
}
function f(e, t) {
  let i = new Set();
  for (let a of e.entities.values()) {
    if (!r(a)) continue;
    let o = `beacon-` + a.id;
    i.add(o);
    let s = e.map.colliders.get(o);
    (!s ||
      s.beaconId !== a.id ||
      s.aabb[0] !== a.pos[0] - n.half ||
      s.aabb[1] !== a.pos[1] ||
      s.aabb[2] !== a.pos[2] - n.half) &&
      (e.map.addCollider(d(a)), t.add(o));
  }
  for (let n of [...t]) i.has(n) || (e.map.removeCollider(n), t.delete(n));
}
function p(e, t) {
  for (let n of t) e.map.removeCollider(n);
  t.clear();
}
