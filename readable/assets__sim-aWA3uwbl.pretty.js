/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { Jn as e, Kn as t } from "./graphics-quality-CrL3qbU3.js";
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
function C(e, t, r) {
  if (!n[e.weapon]?.air || e.hp > 0) return !1;
  let i = e.ext.down ?? (e.ext.down = { mode: `burst`, spin: 1.9 }),
    o = i.mode === `spin`,
    s = a(t, e.pos[0], e.pos[2], e.pos[1]);
  if (e.pos[1] <= s + 0.01)
    return (
      i.landed || ((i.landed = !0), (e.ext.impact = Math.hypot(...e.vel))),
      (e.pos[1] = s),
      (e.vel = [0, 0, 0]),
      !1
    );
  let c = Math.max(0, 1 - r * (o ? 0.5 : 0.8));
  e.vel = [
    (e.vel[0] || 0) * c,
    Math.max(o ? -26 : -45, (e.vel[1] || 0) - (o ? 12 : 22) * r),
    (e.vel[2] || 0) * c,
  ];
  let l = [
      e.pos[0] + e.vel[0] * r,
      e.pos[1] + e.vel[1] * r,
      e.pos[2] + e.vel[2] * r,
    ],
    u = h(t, e, [l[0], e.pos[1], l[2]]);
  if (u && u.normal[1] === 0) {
    ((l[0] = e.pos[0]), (l[2] = e.pos[2]));
    let t = e.vel[0] * u.normal[0] + e.vel[2] * u.normal[2];
    t < 0 &&
      ((e.vel[0] -= 1.3 * t * u.normal[0]),
      (e.vel[2] -= 1.3 * t * u.normal[2]));
  } else
    u && ((l[0] = e.pos[0]), (l[2] = e.pos[2]), (e.vel[0] = 0), (e.vel[2] = 0));
  let d = a(t, l[0], l[2], e.pos[1]);
  return (
    l[1] <= d &&
      ((l[1] = d),
      i.landed || ((i.landed = !0), (e.ext.impact = Math.hypot(...e.vel))),
      (e.vel = [0, 0, 0])),
    o && (i.spin = Math.min(7.5, (i.spin ?? 1.5) + 2.4 * r)),
    (e.pos = l),
    (e.yaw += r * (i.spin ?? 1.9) * (i.dir ?? 1)),
    !0
  );
}
function w(e, t, n) {
  let r = (t, n) => e.map.getHeight(t, n);
  if (Math.abs(r(t[0], t[2]) - n) > 0.01) return null;
  let i = (r(t[0] + 1, t[2]) - r(t[0] - 1, t[2])) / 2,
    a = (r(t[0], t[2] + 1) - r(t[0], t[2] - 1)) / 2,
    o = Math.hypot(i, 1, a);
  return 1 / o < 0.8 ? [-i / o, 1 / o, -a / o] : null;
}
function T(e, t, n) {
  if (t.pos[1] - a(e, t.pos[0], t.pos[2], t.pos[1]) <= 0.6) return null;
  let r = h(e, t, [t.pos[0], t.pos[1] - 0.3, t.pos[2]], n);
  if (!(r?.normal[1] > 0)) return null;
  let i = e.map.colliders.get?.(r.id),
    o = i && (i.movementAabb ?? i.aabb),
    s = o ? t.pos[0] - (o[0] + o[3]) / 2 : 0,
    c = o ? t.pos[2] - (o[2] + o[5]) / 2 : 0,
    l = Math.hypot(s, c);
  return (
    l < 0.05 && ((s = -Math.sin(t.yaw)), (c = -Math.cos(t.yaw)), (l = 1)),
    [(s / l) * 3, (c / l) * 3]
  );
}
function E(i, o, s, c, l) {
  let u = n[i.weapon];
  if (!u || i.hp <= 0) return;
  let d = l?.crush
    ? (e) => {
        let t = p(i, e);
        return t
          ? (l.crush(e, t), (i.ext.speed *= t === `medium` ? 0.8 : 0.96), !0)
          : !1;
      }
    : null;
  if (g(s, i, i.pos, d)) {
    let e = _(s, i, i.pos, 0.25, d);
    if (
      ((i.ext.wedged = e ? 0 : (i.ext.wedged ?? 0) + 1),
      !e && u.air && i.ext.wedged > 45)
    ) {
      e = _(s, i, i.pos, 3, d);
      for (let t = 1; !e && t <= 14; t++) {
        let n = [i.pos[0], i.pos[1] + t, i.pos[2]];
        g(s, i, n, d) || (e = { pos: n });
      }
      e && ((i.vel = [0, 0, 0]), (i.ext.wedged = 0));
    }
    e && (i.pos = e.pos);
  } else i.ext.wedged && (i.ext.wedged = 0);
  let f = i.yaw,
    m = r(o?.mx || 0, -1, 1),
    v = r(o?.mz || 0, -1, 1),
    y = o?.buttons || 0;
  if (u.air) {
    let e = Math.hypot(m, v);
    e > 1 && ((m /= e), (v /= e));
  }
  if (u.air) {
    let e = i.ext.spin?.[0] > 0 ? i.ext.spin : null,
      n = e ? Math.min(1, e[0] / 30) : 0;
    e && (e[0]--, e[0] || (i.ext.spin = null));
    let l = Number.isFinite(o?.yaw) ? o.yaw : i.yaw,
      p = Math.atan2(Math.sin(l - i.yaw), Math.cos(l - i.yaw));
    ((i.yaw +=
      r(p, -u.turn * c, u.turn * c) * (1 - n) + (e ? e[1] * n * c : 0)),
      i.yaw !== f && g(s, i, i.pos, d) && (i.yaw = f));
    let h = -Math.sin(i.yaw),
      _ = -Math.cos(i.yaw),
      b = Math.cos(i.yaw),
      x = -Math.sin(i.yaw),
      S = o ? ((y & t.JUMP ? 1 : 0) - (y & t.CROUCH ? 1 : 0)) * 7 : -5;
    if (o && S < 0) {
      let e = i.pos[1] - a(s, i.pos[0], i.pos[2], i.pos[1]);
      S = -Math.min(7, Math.max(1, e));
    }
    n && ((m *= 1 - n), (v *= 1 - n), (S = S * (1 - n) - 4 * n));
    let C = o ? null : T(s, i, d);
    for (let [e, t] of [
      [0, (h * v + b * m) * u.speed + (C?.[0] ?? 0)],
      [2, (_ * v + x * m) * u.speed + (C?.[1] ?? 0)],
      [1, S],
    ])
      i.vel[e] += r(t - i.vel[e], -u.accel * c, u.accel * c);
  } else {
    let e = i.ext.speed ?? 0;
    ((i.ext.speed =
      e + r(v * u.speed * (v < 0 ? 0.45 : 1) - e, -u.accel * c, u.accel * c)),
      y & t.JUMP && (i.ext.speed *= Math.max(0, 1 - c * 8)),
      (i.yaw -=
        m *
        u.turn *
        c *
        (i.ext.speed < -0.1 ? -1 : 1) *
        r(
          Math.abs(i.ext.speed) / 3,
          i.weapon === 2 ? 0.75 : i.weapon === 1 ? 0.5 : 0.15,
          1,
        )),
      i.yaw !== f && g(s, i, i.pos, d) && (i.yaw = f),
      (i.vel = [
        -Math.sin(i.yaw) * i.ext.speed,
        0,
        -Math.cos(i.yaw) * i.ext.speed,
      ]));
  }
  let b = Math.max(1, Math.ceil((Math.hypot(...i.vel) * c) / 0.25));
  for (let e = 0; e < b; e++) {
    let e = i.pos.map((e, t) => e + (i.vel[t] * c) / b),
      t = u.air ? a(s, e[0], e[2], i.pos[1]) : s.map.getHeight(e[0], e[2]),
      n = s.map.bounds;
    if (!u.air) {
      if (Math.abs(t - i.pos[1]) > 0.65) {
        ((i.vel = [0, 0, 0]), (i.ext.speed = 0));
        break;
      }
      e[1] = t;
    }
    if (e[1] < t) {
      let n = u.air ? w(s, e, t) : null,
        r = n ? i.vel.reduce((e, t, r) => e + t * n[r], 0) : 0;
      (n && r < 0
        ? (x(i, u, n, r, l, { id: `terrain` }),
          (i.vel[1] = Math.max(0, i.vel[1])))
        : (i.vel[1] < -4 && (i.hp = Math.max(0, i.hp - (-i.vel[1] - 4) * 65)),
          (i.vel[1] = 0)),
        (e[1] = t));
    }
    e[1] = Math.min(e[1], 220);
    let r = _(s, i, e, 0.5, d);
    if (!r && u.air) {
      let t = h(s, i, e, d),
        n =
          t && !t.normal[1]
            ? i.vel[0] * t.normal[0] + i.vel[2] * t.normal[2]
            : 0;
      if (t && !t.normal[1])
        (n < 0 && x(i, u, t.normal, n, l, { id: t.id }),
          (r = { pos: i.pos.slice(), normals: [], ids: [] }));
      else {
        let t = _(s, i, [e[0], i.pos[1], e[2]], 0.5, d);
        t && ((r = t), (i.vel[1] = 0));
      }
    }
    if (r) {
      e = r.pos;
      for (let t = 0; t < r.normals.length; t++) {
        let n = r.normals[t],
          a = i.vel.reduce((e, t, r) => e + t * n[r], 0);
        if (a < 0) {
          if (u.air && !n[1]) {
            x(i, u, n, a, l, { id: r.ids[t] });
            continue;
          }
          (u.air && -a > 9 && (i.hp = Math.max(0, i.hp - 30)),
            u.air ||
              l?.ram?.(
                [
                  e[0] - (n[0] * u.l) / 2,
                  e[1] + u.h * 0.5,
                  e[2] - (n[2] * u.l) / 2,
                ],
                -a,
                n,
              ),
            (i.vel = i.vel.map((e, t) => e - a * n[t])));
        }
      }
      r.normals.length && Math.hypot(...i.vel) < 0.01 && (i.ext.speed = 0);
    }
    if (
      !r ||
      !Number.isFinite(t) ||
      e[0] < n[0] + 5 ||
      e[0] > n[2] - 5 ||
      e[2] < n[1] + 5 ||
      e[2] > n[3] - 5
    ) {
      ((i.vel = [0, 0, 0]), (i.ext.speed = 0));
      break;
    }
    i.pos = e;
  }
  if (u.air && i.hp > 0) {
    let e = S(s, i, i.pos, u),
      t = e ? i.vel[0] * e.normal[0] + i.vel[2] * e.normal[2] : 0;
    if (e && t < -2.5) {
      let n = Math.hypot(i.vel[0], i.vel[2]);
      g(
        s,
        i,
        [
          i.pos[0] + (i.vel[0] / n) * u.rotor,
          i.pos[1],
          i.pos[2] + (i.vel[2] / n) * u.rotor,
        ],
        d,
      ) || x(i, u, e.normal, t, l, { rotor: !0, id: e.id });
    }
  }
  (Number.isFinite(s.map.waterLevel) &&
    i.pos[1] < s.map.waterLevel - 0.6 &&
    (i.hp = Math.max(0, i.hp - 50 * c)),
    (i.state = i.hp > 0 ? 0 : e.DEAD));
}
var D = [
  { mass: 1.5, floor: 2 },
  { mass: 3, floor: 2 },
  { mass: 8, floor: 0.4 },
  { mass: 2, floor: 3 },
  { mass: 2.5, floor: 3 },
];
function O(e) {
  let t = n[e.weapon],
    r = D[e.weapon];
  if (!t || !r) return 0;
  let i = t.air ? Math.hypot(e.vel[0], e.vel[2]) : Math.abs(e.ext?.speed ?? 0);
  return i < r.floor ? 0 : Math.round(r.mass * i * 12);
}
function k(e, t, r = 0.4, i = 1.8) {
  let a = n[e.weapon];
  if (!a || t.pos[1] + i <= e.pos[1] + 0.1 || t.pos[1] >= e.pos[1] + a.h - 0.1)
    return !1;
  let o = t.pos[0] - e.pos[0],
    s = t.pos[2] - e.pos[2],
    c = Math.cos(e.yaw),
    l = Math.sin(e.yaw);
  return (
    Math.abs(o * c - s * l) < a.w / 2 + r &&
    Math.abs(o * l + s * c) < a.l / 2 + r
  );
}
var A = [
    [-0.45, 0.55, -0.05],
    [0.45, 0.55, -0.05],
    [-0.45, 0.55, 0.85],
    [0.45, 0.55, 0.85],
  ],
  j = {
    "0a": A,
    "0b": A,
    "3a": [
      [0, 1.5, -2.98],
      [0, 1.85, -1.28],
    ],
  };
((j[`3b`] = j[`3a`]),
  (j[`4a`] = j[`4b`] =
    [
      [-0.57, 1.43, -2.45],
      [0.57, 1.43, -2.45],
      [-0.64, 1.53, -0.88],
      [0.64, 1.53, -0.88],
      [-0.64, 1.53, -0.07],
      [0.64, 1.53, -0.07],
    ]));
function M(e, t) {
  let r = j[e.weapon + i(e)];
  if (r?.[t]) return r[t];
  let a = n[e.weapon];
  return [
    (t % 2 ? 1 : -1) * 0.48,
    a.h * (a.air ? 0.33 : 0.45),
    t < 2 ? -0.4 : 1 + (Math.floor(t / 2) - 1) * 0.8,
  ];
}
function N(e, t) {
  let [n, r, i] = M(e, t),
    a = Math.cos(e.yaw),
    o = Math.sin(e.yaw);
  return [e.pos[0] + a * n + o * i, e.pos[1] + r, e.pos[2] - o * n + a * i];
}
function P(e, t) {
  return e.yaw + (M(e, t)[3] ?? 0);
}
function F(e, t) {
  let r = 0,
    i = 1 / 0;
  for (let a = 0; a < (n[e.weapon]?.seats ?? 0); a++) {
    let n = N(e, a),
      o = (n[0] - t[0]) ** 2 + (n[2] - t[2]) ** 2;
    o < i && ((i = o), (r = a));
  }
  return r;
}
function I(e, t) {
  let [, n, r] = M(e, t);
  return [0, n, r + 0.4];
}
export {
  I as a,
  k as c,
  P as d,
  N as f,
  i as g,
  o as h,
  g as i,
  O as l,
  a as m,
  y as n,
  C as o,
  E as p,
  b as r,
  m as s,
  n as t,
  F as u,
};
//# sourceMappingURL=sim-aWA3uwbl.js.map
