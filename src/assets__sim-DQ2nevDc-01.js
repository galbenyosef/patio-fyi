// assets__sim-DQ2nevDc 01 — math
// Lines 1-319 of readable/assets__sim-DQ2nevDc.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { Gn as e, Un as t } from "./graphics-quality-BsjABS0s.js";
var n = [
    {
      id: 0,
      name: `SCOUT · Light jeep`,
      hp: 350,
      seats: 4,
      speed: 20,
      accel: 7,
      turn: 1.3,
      w: 2.1,
      h: 1.8,
      l: 3.8,
    },
    {
      id: 1,
      name: `WARDEN · APC`,
      hp: 1e3,
      seats: 6,
      speed: 14,
      accel: 4,
      turn: 0.85,
      w: 3,
      h: 2.5,
      l: 5.6,
      gun: 1,
      cooldown: 20,
    },
    {
      id: 2,
      name: `BASTION · Tank`,
      hp: 1800,
      seats: 3,
      speed: 11,
      accel: 3,
      turn: 0.7,
      w: 3.5,
      h: 2.6,
      l: 6.2,
      gun: 2,
      cooldown: 180,
    },
    {
      id: 3,
      name: `APACHE · Attack helicopter`,
      hp: 550,
      seats: 2,
      speed: 26,
      accel: 7,
      turn: 1.8,
      w: 5.4,
      h: 4.4,
      l: 10.7,
      rotor: 7.3,
      rotorY: 3.95,
      air: !0,
      gun: 1,
      cooldown: 12,
    },
    {
      id: 4,
      name: `BLACK HAWK · Transport helicopter`,
      hp: 900,
      seats: 6,
      transport: !0,
      speed: 30,
      accel: 6,
      turn: 1.3,
      w: 3.4,
      h: 4.3,
      l: 9.8,
      rotor: 8.18,
      rotorY: 4.15,
      air: !0,
      gun: 2,
      cooldown: 75,
    },
  ],
  r = (e, t, n) => Math.max(t, Math.min(n, e));
function i(e) {
  return e.seat === 0
    ? `a`
    : e.seat === 1 || (Math.imul((e.id | 0) + 40503, 2246822507) >>> 15) & 1
      ? `b`
      : `a`;
}
function a(e, t, n, r) {
  let i = e.map.getHeight(t, n),
    a = e.map.colliders,
    o = (e) => {
      let i = e.movementAabb ?? e.aabb;
      return (
        !!i &&
        e.solid !== !1 &&
        t > i[0] &&
        t < i[3] &&
        n > i[2] &&
        n < i[5] &&
        i[4] <= r + 0.08
      );
    };
  for (let e of a.queryMovement
    ? a.queryMovement(t, 0, n, t, r, n, o)
    : a.query
      ? a.query(t, n, t, n, o)
      : a.values()) {
    if (!o(e) || String(e.id).startsWith(`vehicle-`)) continue;
    let t = e.movementAabb ?? e.aabb;
    t[4] > i && (i = t[4]);
  }
  return i;
}
function o(e) {
  let t = n[e.weapon],
    r = Math.abs(Math.cos(e.yaw)),
    i = Math.abs(Math.sin(e.yaw)),
    a = (t.w * r + t.l * i) / 2,
    o = (t.l * r + t.w * i) / 2;
  return [
    e.pos[0] - a,
    e.pos[1],
    e.pos[2] - o,
    e.pos[0] + a,
    e.pos[1] + t.h,
    e.pos[2] + o,
  ];
}
var s = [1.5, 3, 8, 0, 0],
  c = { light: 1, medium: 12 },
  l =
    /facade|ramp|roof|equipment|tower|lift|nest|hq-|conquest|capture|canopy|flight|balcony|guard-post|landing|breach/,
  u =
    /(^|-)(lamp|post|bench|bin|hydrant|sign|signal|bollard|meter|mailbox|cone|barrel|crate|trunk|tree|shrub|bed|leg)(-|$)/,
  d =
    /(^|-)(car|van|truck|wreck|pallet|planter|dumpster|shelter|rail|fence|barrier|desk|meeting|files|stock|kiosk|bike|table)(-|$)/;
function f(e) {
  let t = e.movementAabb ?? e.aabb,
    n = String(e.id);
  if (!t || e.solid === !1 || !n.startsWith(`demo-`) || l.test(n)) return null;
  let r = t[3] - t[0],
    i = t[5] - t[2],
    a = t[4] - t[1],
    o = Math.max(r, i),
    s = n.slice(5);
  return u.test(s) && o <= 2.2 && a <= 9
    ? `light`
    : (u.test(s) || d.test(s)) && o <= 6.5 && a <= 3.2
      ? `medium`
      : null;
}
function p(e, t) {
  let n = s[e.weapon] ?? 0;
  if (!n) return null;
  let r = f(t);
  return r && n * Math.abs(e.ext?.speed ?? 0) >= c[r] ? r : null;
}
function m(e) {
  return s[e.weapon] ?? 0;
}
function h(e, t, r, i) {
  let a = o({ ...t, pos: r }),
    s = e.map.colliders,
    c = n[t.weapon],
    l = Math.cos(t.yaw),
    u = Math.sin(t.yaw);
  for (let e of s.queryMovement
    ? s.queryMovement(a[0], a[1], a[2], a[3], a[4], a[5])
    : s.query
      ? s.query(a[0], a[2], a[3], a[5])
      : s.values()) {
    if (
      e.id === `vehicle-` + t.id ||
      e.solid === !1 ||
      !(e.movementAabb ?? e.aabb)
    )
      continue;
    let n = e.movementAabb ?? e.aabb;
    if (!(
      a[0] < n[3] &&
      a[3] > n[0] &&
      a[2] < n[5] &&
      a[5] > n[2] &&
      a[1] + 0.45 < n[4] &&
      a[4] > n[1] + 0.08
    ))
      continue;
    let o = r[0] - (n[0] + n[3]) / 2,
      s = r[2] - (n[2] + n[5]) / 2,
      d = (n[3] - n[0]) / 2,
      f = (n[5] - n[2]) / 2,
      p = 1 / 0,
      m = null,
      h = !1;
    for (let [e, t] of [
      [1, 0],
      [0, 1],
      [l, -u],
      [u, l],
    ]) {
      let n = o * e + s * t,
        r =
          (c.w / 2) * Math.abs(l * e - u * t) +
          (c.l / 2) * Math.abs(u * e + l * t) +
          d * Math.abs(e) +
          f * Math.abs(t) -
          Math.abs(n);
      if (r <= 1e-6) {
        h = !0;
        break;
      }
      if (r < p) {
        p = r;
        let i = n < 0 ? -1 : 1;
        m = [e * i, 0, t * i];
      }
    }
    if (!h && !(i && i(e))) {
      if (c.air) {
        let e = n[4] - r[1],
          t = r[1] + c.h - n[1];
        Math.min(e, t) < p &&
          ((p = Math.min(e, t)), (m = [0, e < t ? 1 : -1, 0]));
      }
      return { depth: p, normal: m, id: e.id };
    }
  }
  return null;
}
function g(e, t, n, r) {
  return !!h(e, t, n, r);
}
function _(e, t, n, r = 0.5, i) {
  let a = n.slice(),
    o = [],
    s = [];
  for (let n = 0; n < 6; n++) {
    let n = h(e, t, a, i);
    if (!n) return { pos: a, normals: o, ids: s };
    if (n.depth > r) return null;
    for (let e = 0; e < 3; e++) a[e] += n.normal[e] * (n.depth + 1e-4);
    (o.push(n.normal), s.push(n.id));
  }
  return g(e, t, a, i) ? null : { pos: a, normals: o, ids: s };
}
var v = {
  soft: 5,
  hard: 14,
  bounce: 0.35,
  min: 0.08,
  max: 0.42,
  rotorMul: 2,
  spinTicks: [55, 90],
  spinRate: [2.4, 4.8],
  rotorClear: 0.5,
};
function y(e, t, n = !1) {
  let r = v;
  return t < r.soft
    ? 0
    : t >= r.hard
      ? 1 / 0
      : e *
        (r.min + ((r.max - r.min) * (t - r.soft)) / (r.hard - r.soft)) *
        (n ? r.rotorMul : 1);
}
function b(e, t, n) {
  let r = v,
    i = Math.max(0, Math.min(1, (t - r.soft) / (r.hard - r.soft))),
    a = n[0] * (e.vel[2] || 0) - n[2] * (e.vel[0] || 0),
    o = Math.round(r.spinTicks[0] + (r.spinTicks[1] - r.spinTicks[0]) * i),
    s =
      (a < 0 ? -1 : 1) * (r.spinRate[0] + (r.spinRate[1] - r.spinRate[0]) * i);
  e.ext.spin?.[0] > o || (e.ext.spin = [o, s]);
}
function x(e, t, n, r, i, { rotor: a = !1, id: o = null } = {}) {
  let s = -r;
  if (!(s > 0)) return;
  let c = typeof o == `string` && o.startsWith(`vehicle-`),
    l = s > 1 ? v.bounce : 0;
  if (((e.vel = e.vel.map((e, t) => e - (1 + l) * r * n[t])), s < v.soft)) {
    s > 2 &&
      i?.impact?.({ speed: s, normal: n, rotor: a, id: o, pos: e.pos.slice() });
    return;
  }
  if (!c) {
    let n = y(t.hp, s, a);
    e.hp = Math.max(0, e.hp - n);
  }
  (e.hp > 0 && b(e, s, n),
    i?.impact?.({ speed: s, normal: n, rotor: a, id: o, pos: e.pos.slice() }));
}
function S(e, t, n, r) {
  let i = r.rotor ?? 0;
  if (!i) return null;
  let a = n[1] + (r.rotorY ?? r.h),
    o = e.map.colliders,
    s = n[0] - i,
    c = n[0] + i,
    l = n[2] - i,
    u = n[2] + i;
  for (let e of o.queryMovement
    ? o.queryMovement(s, a - 0.2, l, c, a + 0.2, u)
    : o.query
      ? o.query(s, l, c, u)
      : o.values()) {
    if (String(e.id).startsWith(`vehicle-`) || e.solid === !1) continue;
    let t = e.movementAabb ?? e.aabb;
    if (!t || t[1] > a + 0.15 || t[4] < a - 0.15) continue;
    let r = Math.max(t[0], Math.min(n[0], t[3])),
      o = Math.max(t[2], Math.min(n[2], t[5])),
      s = n[0] - r,
      c = n[2] - o,
      l = Math.hypot(s, c);
    if (!(l >= i || l < 1e-4))
      return { normal: [s / l, 0, c / l], id: e.id, depth: i - l };
  }
  return null;
}
