// assets__grenade-sim-BPkr3Qs6 01 — pos
// Lines 1-113 of readable/assets__grenade-sim-BPkr3Qs6.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { Gn as e, Jn as t } from "./graphics-quality-BsjABS0s.js";
import { S as n, _ as r, g as i } from "./sim-D8F3HPJq.js";
var a = Object.freeze({
    id: 7,
    throwTicks: 18,
    pickupTicks: 14,
    recoverTicks: 20,
    fuseTicks: 240,
    groundTicks: 66,
    radius: 0.08,
    blastRadius: 12,
    core: 3,
    damage: 320,
    speed: 19,
    gravity: 9.81,
    reach: 2.3,
    impactShare: 0.25,
    impactSpeed: 4,
  }),
  o = (e) => Math.round((e.maxHp || 200) * a.impactShare),
  s = (e) => Math.max(1, Math.ceil(e / 6));
function c(e, r, o) {
  let s = o.pos[0] - r.pos[0],
    c = o.pos[2] - r.pos[2],
    l = o.pos[1] - r.pos[1],
    u = Math.hypot(s, c);
  if (u > a.reach || l < -0.9 || l > 1.4 * i() || Math.hypot(...o.vel) > 7)
    return !1;
  let d = t(r.yaw, 0);
  if (u > 1.1 && (s * d[0] + c * d[2]) / u < 0.15) return !1;
  let f = n(r, [0, 0, 0]),
    p = o.pos.map((e, t) => e - f[t]),
    m = Math.hypot(...p);
  return (
    m < 0.05 ||
    !e.map.raycast(
      f,
      p.map((e) => e / m),
      Math.max(0, m - a.radius - 0.05),
    )
  );
}
function l(e, r) {
  let i = n(e, [0, 0, 0]),
    o = t(e.yaw, e.pitch),
    s = r.map.raycast(i, o, 0.4),
    c = s
      ? s.point.map((e, t) => e + s.normal[t] * a.radius)
      : i.map((e, t) => e + o[t] * 0.35),
    l = o.map(
      (t, n) => t * a.speed + Math.max(-8, Math.min(8, e.vel[n])) * 0.35,
    );
  return ((l[1] += 3), { pos: c, vel: l });
}
function u(e, t, n) {
  let r = n / 4,
    i = !1;
  for (let n = 0; n < 4; n++) {
    e.vel[1] -= a.gravity * r;
    let n = Math.hypot(...e.vel);
    if (n < 1e-8) continue;
    let o = e.vel.map((e) => e / n),
      s = n * r,
      c = t.map.raycast(e.pos, o, s + a.radius);
    if (c) {
      (c.normal[1] > 0.6 && (i = !0),
        (e.pos = c.point.map((e, t) => e + c.normal[t] * (a.radius + 0.002))));
      let t = e.vel.reduce((e, t, n) => e + t * c.normal[n], 0);
      (t < 0 &&
        (e.vel = e.vel.map(
          (e, n) => (e - t * c.normal[n]) * 0.72 - t * 0.38 * c.normal[n],
        )),
        c.normal[1] > 0.6 && Math.hypot(...e.vel) < 0.6 && (e.vel = [0, 0, 0]));
    } else e.pos = e.pos.map((t, n) => t + e.vel[n] * r);
    let l = t.map.getHeight(e.pos[0], e.pos[2]) + a.radius;
    e.pos[1] < l &&
      ((i = !0),
      (e.pos[1] = l + 0.002),
      e.vel[1] < 0 &&
        ((e.vel[0] *= 0.72), (e.vel[2] *= 0.72), (e.vel[1] *= -0.38)));
  }
  return i;
}
function d(t, n, i, o = a, s = n) {
  if (i.hp <= 0 || i.state & e.DEAD) return 0;
  let c = r(i),
    l = [i.pos[0], i.pos[1] + c * 0.5, i.pos[2]],
    u = Math.hypot(...l.map((e, t) => e - n[t]));
  if (u >= o.blastRadius) return 0;
  let d = 0;
  for (let e of Array.isArray(s[0]) ? s : [s]) {
    let n = 0;
    for (let r of [0.2, 0.5, 0.9]) {
      let a = [i.pos[0], i.pos[1] + c * r, i.pos[2]].map((t, n) => t - e[n]),
        o = Math.hypot(...a);
      (o < 0.01 ||
        !t.map.raycast(
          e,
          a.map((e) => e / o),
          Math.max(0, o - 0.05),
        )) &&
        n++;
    }
    if (((d = Math.max(d, n)), d === 3)) break;
  }
  let f = Math.min(o.core ?? 2, o.blastRadius - 0.01);
  return Math.round(
    o.damage *
      (1 - Math.max(0, u - f) / (o.blastRadius - f)) *
      (o.cover?.[d] ?? d / 3),
  );
}
