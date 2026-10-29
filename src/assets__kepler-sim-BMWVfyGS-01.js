// assets__kepler-sim-BMWVfyGS 01 — math
// Lines 1-254 of readable/assets__kepler-sim-BMWVfyGS.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { i as e, r as t, t as n } from "./kepler-CGq3Tp1E.js";
var r = 60,
  i = 180,
  a = 40,
  o = 80,
  s = 60,
  c = (e) => {
    let t = Math.hypot(e[0], e[1], e[2]) || 1;
    return [e[0] / t, e[1] / t, e[2] / t];
  },
  l = (e, t) => [
    e[1] * t[2] - e[2] * t[1],
    e[2] * t[0] - e[0] * t[2],
    e[0] * t[1] - e[1] * t[0],
  ],
  u = Object.freeze(
    c([0.05, -Math.sin((10 * Math.PI) / 180), -Math.cos((10 * Math.PI) / 180)]),
  ),
  d = Math.asin(6371 / 9371),
  f = Math.cos(d) / Math.cos((Math.PI * 40) / 180),
  p = Math.sqrt(1 - f * f),
  m = Math.acos(f),
  h = c(l(u, [0, 1, 0])),
  g = l(h, u),
  _ = (30 * Math.PI) / 180,
  v = Object.freeze(
    c([
      h[0] * Math.cos(_) + g[0] * Math.sin(_),
      h[1] * Math.cos(_) + g[1] * Math.sin(_),
      h[2] * Math.cos(_) + g[2] * Math.sin(_),
    ]),
  ),
  y = Object.freeze(c(l(v, u).map((e) => -e))),
  b = Object.freeze({ day: 170, shadow: 45 }),
  x = (e, t, n) => {
    let r = Math.min(1, Math.max(0, (n - e) / (t - e)));
    return r * r * (3 - 2 * r);
  };
function S(e, t) {
  return ((((e?.epoch == null ? t : t - e.epoch) / r + s) % 180) + 180) % 180;
}
function C(e, t = [0, 0, 0]) {
  let n = (2 * Math.PI * (e - 160)) / 180,
    r = Math.cos(n),
    i = Math.sin(n);
  for (let e = 0; e < 3; e++) t[e] = v[e] * p + (u[e] * r + y[e] * i) * f;
  return t;
}
function w(e, t) {
  let n = S(e, t),
    r = (2 * Math.PI * (n - 160)) / 180,
    i = Math.acos(Math.max(-1, Math.min(1, f * Math.cos(r)))),
    a = n >= 140;
  return {
    t: n,
    ang: i,
    lit: x(d - 0.012, d + 0.03, i),
    red: 1 - x(d + 0.01, d + 0.09, i),
    shadow: a,
    next: a ? 180 - n : 140 - n,
  };
}
function T(e, t) {
  let n = Math.floor(((e?.epoch == null ? t : t - e.epoch) / r + s) / 180),
    i = Math.imul(n + 12345, 2654435761) >>> 0;
  return (
    (i ^= i >>> 15),
    (i = Math.imul(i, 2246822519) >>> 0),
    (i ^= i >>> 13),
    (i >>> 0) % 4 == 1
  );
}
function E(e, t) {
  let n = w(e, t);
  return b.shadow + (b.day - b.shadow) * n.lit;
}
var D = t.find((e) => e.letter === `B`);
function O(t) {
  let n = t[0] - D.x,
    r = t[2] - D.z,
    i = t[1] - 12;
  return n * n + r * r <= D.radius * D.radius && i > -1 && i < e.inner + 2.5;
}
var k = Object.freeze({
  amp: 22,
  wx: 0.06,
  cz: (n.z0 + n.z1) / 2,
  tz: 12,
  wz: 0.08,
  drop: 26,
  dropA: 3,
  wd: 0.12,
  spin: 0.15,
  ws: 0.2,
});
function A(e) {
  return {
    x: k.amp * Math.sin(e * k.wx),
    z: k.cz + k.tz * Math.sin(e * k.wz),
    y: k.drop + k.dropA * Math.sin(e * k.wd),
    yaw: k.spin * Math.sin(e * k.ws),
  };
}
function j(e, t) {
  let n = t * 0.35 + e.phase;
  return {
    ya: e.yaw + 0.35 * Math.sin(n * 0.7),
    sh: (e.floor ? -0.1 : 0.35) + 0.25 * Math.sin(n),
    el: -0.9 + 0.3 * Math.sin(n * 1.3 + 1),
    wr: -0.4 + 0.3 * Math.sin(n * 2.1),
    on: Math.sin(n * 1.9) > 0.1,
  };
}
function M(e, t) {
  let n = j(e, t),
    r = Math.cos(n.ya),
    i = Math.sin(n.ya),
    a = (e) => [Math.cos(e) * r, Math.sin(e), -Math.cos(e) * i],
    o = [e.x, e.y + 0.3, e.z],
    s = a(n.sh),
    c = [o[0] + s[0] * 3.2, o[1] + s[1] * 3.2, o[2] + s[2] * 3.2],
    l = a(n.sh + n.el),
    u = [c[0] + l[0] * 2.6, c[1] + l[1] * 2.6, c[2] + l[2] * 2.6],
    d = a(n.sh + n.el + n.wr);
  return [o, c, u, [u[0] + d[0] * 0.7, u[1] + d[1] * 0.7, u[2] + d[2] * 0.7]];
}
function N(e, t, n, r) {
  let i = 0,
    a = r,
    o = null;
  for (let r = 0; r < 3; r++) {
    let s = 1 / (t[r] || 1e-12),
      c = (n[r] - e[r]) * s,
      l = (n[r + 3] - e[r]) * s,
      u = -1;
    if (
      (c > l && (([c, l] = [l, c]), (u = 1)),
      c > i && ((i = c), (o = [0, 0, 0]), (o[r] = u)),
      l < a && (a = l),
      a < i)
    )
      return null;
  }
  return o ? { t: i, normal: o } : null;
}
var P = (e, t, n, r) => {
  let i = null;
  for (let a of n) {
    let n = N(e, t, a, r);
    n && (!i || n.t < i.t) && (i = n);
  }
  return i
    ? {
        distance: i.t,
        point: [e[0] + t[0] * i.t, e[1] + t[1] * i.t, e[2] + t[2] * i.t],
        normal: i.normal,
        surface: `metal`,
      }
    : null;
};
function F(e, t) {
  let n = A(t),
    r = e.y,
    i = e.bay.z0 + 2,
    a = e.bay.z1 - 2,
    o = 4.5 * Math.abs(Math.cos(n.yaw)) + 2.75 * Math.abs(Math.sin(n.yaw)),
    s = 4.5 * Math.abs(Math.sin(n.yaw)) + 2.75 * Math.abs(Math.cos(n.yaw));
  return [
    [n.x - 1, r + 39, i, n.x + 1, r + 41, a],
    [n.x - 2, r + 37.8, n.z - 2, n.x + 2, r + 39.4, n.z + 2],
    [n.x - o, r + n.y - 0.18, n.z - s, n.x + o, r + n.y + 0.18, n.z + s],
  ];
}
function I(e, t) {
  let n = M(e, t),
    r = [],
    i = 0.32;
  for (let e = 0; e < 3; e++) {
    let t = n[e],
      a = n[e + 1],
      o = e < 2 ? 3 : 1;
    for (let e = 0; e < o; e++) {
      let n = e / o,
        s = (e + 1) / o,
        c = [0, 1, 2].map((e) => t[e] + (a[e] - t[e]) * n),
        l = [0, 1, 2].map((e) => t[e] + (a[e] - t[e]) * s);
      r.push([
        Math.min(c[0], l[0]) - i,
        Math.min(c[1], l[1]) - i,
        Math.min(c[2], l[2]) - i,
        Math.max(c[0], l[0]) + i,
        Math.max(c[1], l[1]) + i,
        Math.max(c[2], l[2]) + i,
      ]);
    }
  }
  return r;
}
function L(e, t, n = () => e.time.tick) {
  if (!t) return (delete e.map.kepler, delete e.map.captureIn, () => {});
  ((e.map.kepler = t),
    t.epoch === void 0 && (t.epoch = null),
    (e.map.captureIn = (e, n) => (e.id === t.flagB ? O(n.pos) : void 0)));
  let i = [],
    a = () => n() / r,
    o = (t, n, r) => {
      let o = NaN,
        s = null,
        c = [0, 0, 0, 0, 0, 0],
        l = () => {
          let e = a();
          if (e !== o) {
            ((o = e),
              (s = r(e)),
              (c[0] = c[1] = c[2] = 1 / 0),
              (c[3] = c[4] = c[5] = -1 / 0));
            for (let e of s)
              for (let t = 0; t < 3; t++)
                (e[t] < c[t] && (c[t] = e[t]),
                  e[t + 3] > c[t + 3] && (c[t + 3] = e[t + 3]));
          }
          return s;
        };
      (e.map.addCollider({
        id: t,
        mask: `static`,
        solid: !1,
        rayIndexBounds: n,
        get aabb() {
          return (l(), c);
        },
        raycast(e, t, n) {
          return P(e, t, l(), n);
        },
      }),
        i.push(t));
    };
  if (t.bay) {
    let e = t.y,
      n = t.bay;
    o(`kepler-crane`, [n.x0, e + 20, n.z0, n.x1, e + 42, n.z1], (e) => F(t, e));
  }
  for (let [e, n] of (t.arms ?? []).entries())
    o(
      `kepler-arm-${e}`,
      [n.x - 7, n.y - 7, n.z - 7, n.x + 7, n.y + 7, n.z + 7],
      (e) => I(n, e),
    );
  return () => {
    for (let t of i) e.map.removeCollider(t);
    (delete e.map.kepler, delete e.map.captureIn);
  };
}
