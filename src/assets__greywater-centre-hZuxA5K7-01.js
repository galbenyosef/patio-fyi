// assets__greywater-centre-hZuxA5K7 01 — math
// Lines 1-263 of readable/assets__greywater-centre-hZuxA5K7.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
var e = [
    [-236, -230],
    [-159.3, -164.9],
    [-81.4, -113],
    [-44.1, -54.6],
    [-20.8, -33.2],
    [-17.1, -29.8],
    [27.1, 10.8],
    [30.8, 14.2],
    [58, 86],
    [97.8, 125.7],
    [182.9, 173.8],
    [230, 236],
  ],
  t = 0.29,
  n = 2.5,
  r = 1.45,
  i = {
    centre: [5, -9.5],
    length: 44,
    stairs: [
      { side: -1, dir: -1 },
      { side: 1, dir: 1 },
    ],
  },
  a = {
    y0: 24,
    y1: 23.2,
    y2: 22.4,
    poly: [
      [-32, -17],
      [27, -17],
      [27, -10],
      [32, -10],
      [32, 17],
      [-27, 17],
      [-27, 10],
      [-32, 10],
    ],
    outer: [-14, -10, 14, 10],
    inner: [-8, -5, 8, 5],
    outerGaps: [
      [-14, -6, -14, -1],
      [14, 1, 14, 6],
      [-7, -10, -2, -10],
      [2, 10, 7, 10],
    ],
    innerGaps: [
      [-8, 0.5, -8, 2.5],
      [8, -2.5, 8, -0.5],
      [1, -5, 4, -5],
      [-4, 5, -1, 5],
    ],
    pad: [-16, -12, 16, 12],
  },
  o = {
    main_w: [
      [-185, 0],
      [-145, 0],
      [-95, -3],
      [-50, 3],
    ],
    main_e: [
      [50, -3],
      [95, 3],
      [145, 0],
      [185, 0],
    ],
  },
  s = null;
function c() {
  if (s) return s;
  let t = e,
    n = t.length,
    r = [
      [2 * t[0][0] - t[1][0], 2 * t[0][1] - t[1][1]],
      ...t,
      [2 * t[n - 1][0] - t[n - 2][0], 2 * t[n - 1][1] - t[n - 2][1]],
    ],
    a = [],
    o = (e, t) => Math.sqrt(Math.hypot(t[0] - e[0], t[1] - e[1])) || 1e-4;
  for (let e = 1; e < r.length - 2; e++) {
    let [t, n, i, s] = [r[e - 1], r[e], r[e + 1], r[e + 2]],
      c = 0 + o(t, n),
      l = c + o(n, i),
      u = l + o(i, s);
    for (let e = 0; e < 60; e++) {
      let r = c + ((l - c) * e) / 60,
        o = (e, t, n, i) =>
          [0, 1].map((a) => ((i - r) * e[a] + (r - n) * t[a]) / (i - n)),
        d = o(t, n, 0, c),
        f = o(n, i, c, l),
        p = o(i, s, l, u),
        m = o(d, f, 0, l),
        h = o(f, p, c, u);
      a.push(o(m, h, c, l));
    }
  }
  a.push(t[n - 1].slice());
  let c = [0];
  for (let e = 1; e < a.length; e++)
    c.push(c[e - 1] + Math.hypot(a[e][0] - a[e - 1][0], a[e][1] - a[e - 1][1]));
  let l = c[c.length - 1],
    u = (e) => {
      e = Math.max(0, Math.min(l, e));
      let t = 0,
        n = c.length - 1;
      for (; n - t > 1;) {
        let r = (t + n) >> 1;
        c[r] <= e ? (t = r) : (n = r);
      }
      let r = (e - c[t]) / (c[n] - c[t] || 1),
        i = a[t],
        o = a[n],
        s = o[0] - i[0],
        u = o[1] - i[1],
        d = Math.hypot(s, u) || 1;
      return { x: i[0] + s * r, z: i[1] + u * r, tx: s / d, tz: u / d };
    },
    d = 0,
    f = 1 / 0;
  for (let e = 0; e < a.length; e++) {
    let t = Math.hypot(a[e][0] - i.centre[0], a[e][1] - i.centre[1]);
    t < f && ((f = t), (d = c[e]));
  }
  return ((s = { length: l, at: u, stationAt: d }), s);
}
function l([e, t, n, r]) {
  let o = c(),
    s = o.at(o.stationAt);
  for (let i = 0; i < o.length; i += 1) {
    let a = o.at(i),
      s = Math.max(e - a.x, 0, a.x - n),
      c = Math.max(t - a.z, 0, a.z - r);
    if (Math.hypot(s, c) < 6.1) return !0;
  }
  let l = i.stairs.map(({ side: e, dir: t }) => ({
    l0: e > 0 ? 8.4 : -12.700000000000001,
    l1: e > 0 ? 11.3 + 1.4 : -8.4,
    z0: t < 0 ? -17.6 : -7.8,
    z1: t < 0 ? 7.8 : 17.6,
  }));
  for (let o = e; o <= n + 1e-6; o += Math.max(0.5, (n - e) / Math.ceil(n - e)))
    for (
      let e = t;
      e <= r + 1e-6;
      e += Math.max(0.5, (r - t) / Math.ceil(r - t))
    ) {
      let t = o - s.x,
        n = e - s.z,
        r = t * s.tz - n * s.tx,
        c = t * s.tx + n * s.tz;
      if (
        (Math.abs(c) <= i.length / 2 + 2 && Math.abs(r) <= 10.4) ||
        l.some((e) => r >= e.l0 && r <= e.l1 && c >= e.z0 && c <= e.z1) ||
        m(a.poly, o, e)
      )
        return !0;
    }
  return !1;
}
var u = (e) => Math.round(e * 1e3) / 1e3;
function d(e, t, n, r, i, a, o, s, c = {}) {
  e.push({ id: t, aabb: [n, r, i, a, o, s].map(u), surface: `concrete`, ...c });
}
function f(e, t, n, r = {}) {
  let i = Math.cos(n.yaw),
    a = Math.sin(n.yaw),
    o = n.ramp ? Math.max(n.ramp.y, n.ramp.y + n.ramp.rise) : n.y1,
    s = [1 / 0, n.y0, 1 / 0, -1 / 0, o, -1 / 0];
  for (let [e, t] of [
    [-n.hx, -n.hz],
    [n.hx, -n.hz],
    [n.hx, n.hz],
    [-n.hx, n.hz],
  ]) {
    let r = n.x + i * e + a * t,
      o = n.z - a * e + i * t;
    ((s[0] = Math.min(s[0], r)),
      (s[3] = Math.max(s[3], r)),
      (s[2] = Math.min(s[2], o)),
      (s[5] = Math.max(s[5], o)));
  }
  e.push({ id: t, aabb: s.map(u), obb: n, surface: `concrete`, ...r });
}
function p(e, t, n, r, i, a, o, s, c, l, u = 0.4) {
  let f = [],
    p = -a,
    m = i;
  for (let [e, t, c] of [
    [o - u, s - u, 0],
    [-o + u, s - u, 0.5],
    [-o + u, -s + u, 1],
    [o - u, -s + u, 1.5],
  ])
    for (let o = 0; o <= 4; o++) {
      let s = (c + o / 8) * Math.PI,
        l = e + Math.cos(s) * u,
        d = t + Math.sin(s) * u;
      f.push([n + i * l + p * d, r + a * l + m * d]);
    }
  let h = Math.min(...f.map((e) => e[1])),
    g = Math.max(...f.map((e) => e[1])),
    _ = Math.max(1, Math.round((g - h) / 0.2)),
    v = (g - h) / _;
  for (let n = 0; n < _; n++) {
    let r = h + (n + 0.5) * v,
      i = 1 / 0,
      a = -1 / 0;
    for (let e = 0; e < f.length; e++) {
      let [t, n] = f[e],
        [o, s] = f[(e + 1) % f.length];
      if ((n - r) * (s - r) > 0 || n === s) continue;
      let c = t + ((o - t) * (r - n)) / (s - n);
      ((i = Math.min(i, c)), (a = Math.max(a, c)));
    }
    a > i && d(e, `${t}-${n}`, i, c, h + n * v, a, l, h + (n + 1) * v);
  }
}
var m = (e, t, n) => {
    let r = !1;
    for (let i = 0, a = e.length - 1; i < e.length; a = i++) {
      let [o, s] = e[i],
        [c, l] = e[a];
      s > n != l > n && t < ((c - o) * (n - s)) / (l - s) + o && (r = !r);
    }
    return r;
  },
  h = [-102, 0, 102],
  g = [-140, 140],
  _ = 12.1,
  v = (e, t) =>
    h.some(
      (n) =>
        Math.abs(t - n) < _ &&
        Math.abs(e) < 152 &&
        (n !== 0 || Math.abs(e) > 30),
    ) || g.some((n) => Math.abs(e - n) < _ && Math.abs(t) < 108),
  y = null;
function b() {
  if (y) return y;
  let e = c(),
    t = e.length,
    n = Math.max(1, Math.round(t / 24)),
    r = t / n,
    i = [0];
  for (let t = 1; t < n; t++) {
    let n = t * r;
    for (let a = 0; a <= 11; a += 0.5) {
      let o = [t * r + a, t * r - a].find(
        (t) => t - i[i.length - 1] > 12 && !v(e.at(t).x, e.at(t).z),
      );
      if (o != null) {
        n = o;
        break;
      }
    }
    i.push(n);
  }
  return (i.push(t), (y = i));
}
var x = (e, t) => Math.abs(e) < 212 && Math.abs(t) < 212;
