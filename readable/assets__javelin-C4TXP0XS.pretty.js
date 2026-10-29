/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { Jn as e, Zn as t } from "./graphics-quality-CrL3qbU3.js";
import { w as n } from "./sim-CCeMdhLh.js";
import { t as r } from "./sim-aWA3uwbl.js";
var i = Object.freeze({
    id: 10,
    lockTicks: 120,
    cone: 0.06,
    holdCone: 0.11,
    range: 600,
    minRange: 15,
    ejectSpeed: 14,
    ejectTicks: 21,
    loft: 0.35,
    cruise: 72,
    accel: 90,
    climb: 1,
    turn: 2.4,
    terminalTurn: 6,
    minApex: 25,
    maxApex: 130,
    apexRatio: 0.45,
    directRange: 45,
    airTurn: 2,
    seekerCone: 0.62,
    seekerSettle: 24,
    losGrace: 30,
    flareMin: 18,
    flareMax: 170,
    flareTicks: 150,
    flareCharges: 2,
    flareRecharge: 1200,
    airLockTicks: 120,
    airDirectRange: 170,
    airGround: 1.5,
  }),
  a = (e, t, n) => (e < t ? t : e > n ? n : e),
  o = (e) => e?.type === `prop` && e.weapon === 220,
  s = (e) => o(e) || (e?.type === `vehicle` && !!r[e.weapon]?.air),
  c = (e) => (s(e) && !o(e) ? i.airLockTicks : i.lockTicks),
  l = () => ({ targetId: null, ticks: 0 }),
  u = (e, t = 0) =>
    e.targetId != null && e.ticks >= (e.need ?? i.lockTicks) + t;
function d(t, n) {
  return o(t)
    ? t.hp > 0
    : !t || t.hp <= 0 || t.state & e.DEAD || t.team === n
      ? !1
      : t.type === `vehicle`;
}
function f(e, t = [0, 0, 0]) {
  return (
    (t[0] = e.pos[0]),
    (t[2] = e.pos[2]),
    (t[1] =
      e.pos[1] +
      (o(e) ? 0 : e.type === `vehicle` ? (r[e.weapon]?.h ?? 2) * 0.5 : 1)),
    t
  );
}
var p = [0, 0, 0];
function m(e, r, s, l) {
  if (!l) return ((e.targetId = null), (e.ticks = 0), e);
  let u = n(s, [0, 0, 0]),
    m = t(s.yaw, s.pitch),
    h = null,
    g = 1 / 0,
    _ = 0;
  for (let t of r.sorted()) {
    if ((t.type !== `vehicle` && !o(t)) || !d(t, s.team)) continue;
    f(t, p);
    let n = p[0] - u[0],
      r = p[1] - u[1],
      c = p[2] - u[2],
      l = Math.hypot(n, r, c);
    if (l < i.minRange || l > i.range) continue;
    let v = Math.acos(a((n * m[0] + r * m[1] + c * m[2]) / l, -1, 1)),
      y = t.id === e.targetId;
    if (v > (y ? i.holdCone : i.cone)) continue;
    let b = v - (y ? 0.06 : 0);
    b < g && ((h = t), (g = b), (_ = l));
  }
  if (h) {
    f(h, p);
    let e = p.map((e, t) => (e - u[t]) / _),
      t = r.map.raycast(u, e, _);
    t && t.entityId !== h.id && t.dist < _ - 1.5 && (h = null);
  }
  return h
    ? (h.id !== e.targetId && ((e.targetId = h.id), (e.ticks = 0)),
      (e.need = c(h)),
      (e.ticks = Math.min(e.need + 30, e.ticks + 1)),
      e)
    : ((e.targetId = null), (e.ticks = 0), e);
}
function h(e, t) {
  return !e.map.raycast(
    [t.pos[0], t.pos[1] + 0.3, t.pos[2]],
    [0, -1, 0],
    i.airGround + 0.3,
    null,
    `vehicle-` + t.id,
  );
}
function g(e, t, n) {
  let r = a(e[0] * t[0] + e[1] * t[1] + e[2] * t[2], -1, 1),
    i = Math.acos(r);
  if (i <= n || i < 1e-5) return t;
  let o = Math.sin(i);
  if (o < 1e-4)
    return [e[0], e[1] + 0.05, e[2]].map((e, t, n) => e / Math.hypot(...n));
  let s = n / i,
    c = Math.sin((1 - s) * i) / o,
    l = Math.sin(s * i) / o;
  return e.map((e, n) => e * c + t[n] * l);
}
function _(t, n, r, c) {
  if (((n.age = (n.age ?? 0) + 1), n.age <= i.ejectTicks)) {
    t.vel[1] -= 3 * c;
    return;
  }
  let l = Math.hypot(...t.vel),
    u = t.vel.map((e) => e / l);
  l = Math.min(i.cruise, l + i.accel * c);
  let d = n.targetId == null ? null : r.get(n.targetId);
  if (
    !d ||
    (d.type !== `vehicle` && d.type !== `soldier` && !o(d)) ||
    d.hp <= 0 ||
    d.state & e.DEAD
  ) {
    n.targetId = null;
    for (let e = 0; e < 3; e++) t.vel[e] = u[e] * l;
    t.vel[1] -= 2 * c;
    return;
  }
  n.air ??= o(d) || (s(d) && h(r, d));
  let p = n.air,
    m = () => {
      ((n.targetId = null), (n.lost = !0));
      for (let e = 0; e < 3; e++) t.vel[e] = u[e] * l;
      t.vel[1] -= 2 * c;
    };
  if (n.decoy) {
    if (--n.decoy.ticks <= 0) return m();
    let e = n.decoy;
    e.vel[1] -= 6 * c;
    for (let t = 0; t < 3; t++)
      ((e.vel[t] *= 0.985), (e.pos[t] += e.vel[t] * c));
    let r = e.pos.map((e, n) => e - t.pos[n]),
      a = Math.hypot(...r) || 1,
      o = g(
        u,
        r.map((e) => e / a),
        i.terminalTurn * c,
      );
    for (let e = 0; e < 3; e++) t.vel[e] = o[e] * l;
    return;
  }
  let _ = f(d, [0, 0, 0]),
    v = _[0] - t.pos[0],
    y = _[2] - t.pos[2],
    b = Math.hypot(v, y) || 1e-6,
    x = t.pos[1] - _[1];
  ((n.phase ??=
    ((n.apex = a(b * i.apexRatio, i.minApex, i.maxApex)),
    b < i.directRange || o(d) || (p && b < i.airDirectRange) ? 2 : 0)),
    n.phase === 0 && x >= n.apex && (n.phase = 1),
    n.phase < 2 &&
      b <=
        Math.max(0, x) * 0.8 +
          6 +
          (0.6 * l) / (p ? i.airTurn : i.terminalTurn) &&
      (n.phase = 2));
  let S;
  if (n.phase === 0) {
    let e = Math.cos(i.climb);
    S = [(v / b) * e, Math.sin(i.climb), (y / b) * e];
  } else {
    let e = n.phase === 2 ? Math.hypot(b, x) / l : 0,
      t = [
        v + (d.vel?.[0] ?? 0) * e,
        (n.phase === 1 ? n.apex : 0) - x + (d.vel?.[1] ?? 0) * e,
        y + (d.vel?.[2] ?? 0) * e,
      ],
      r = Math.hypot(...t) || 1;
    S = t.map((e) => e / r);
  }
  if (p) {
    let e = _.map((e, n) => e - t.pos[n]),
      o = Math.hypot(...e) || 1;
    if (n.phase === 2) {
      let t = Math.acos(
        a((e[0] * u[0] + e[1] * u[1] + e[2] * u[2]) / o, -1, 1),
      );
      if (((n.settle = (n.settle ?? 0) + 1), t < i.seekerCone * 0.7))
        n.acquired = !0;
      else if (n.acquired && n.settle > i.seekerSettle && t > i.seekerCone)
        return m();
    }
    if (n.age % 6 == 0) {
      let a = r.map.raycast(
        t.pos,
        e.map((e) => e / o),
        o,
      );
      if (
        ((n.blind =
          a && a.entityId !== d.id && a.dist < o - 2 ? (n.blind ?? 0) + 6 : 0),
        n.blind > i.losGrace)
      )
        return m();
    }
  }
  let C = g(
    u,
    S,
    (n.phase === 2 ? (p ? i.airTurn : i.terminalTurn) : i.turn) * c,
  );
  for (let e = 0; e < 3; e++) t.vel[e] = C[e] * l;
}
function v(e, t, n, r, a) {
  if (t.targetId !== n.id || t.decoy || t.lost || (t.age ?? 0) <= i.ejectTicks)
    return !1;
  let o = Math.hypot(...f(n).map((t, n) => t - e.pos[n]));
  return o < i.flareMin || o > i.flareMax
    ? !1
    : ((t.decoy = { pos: r.slice(), vel: a.slice(), ticks: i.flareTicks }), !0);
}
export { f as a, v as c, o as i, l as n, u as o, _ as r, m as s, i as t };
//# sourceMappingURL=javelin-C4TXP0XS.js.map
