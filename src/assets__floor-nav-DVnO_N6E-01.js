// assets__floor-nav-DVnO_N6E 01 — math
// Lines 1-335 of readable/assets__floor-nav-DVnO_N6E.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { N as e, o as t, p as n } from "./sim-CCeMdhLh.js";
var r = 0.3,
  i = n + 0.02,
  a = 0.22,
  o = 1.1,
  s = 0.7,
  c = 8,
  l = 0.9,
  u = 4.5,
  d = 2.5,
  f = 0.7,
  p = 240,
  m = 2,
  h = 75,
  g = new WeakMap(),
  _ = new WeakMap();
function v(e, n, s = !1) {
  let [l, u, d, f] = n.bounds,
    p = n.y,
    m = Math.floor((d - l) / r),
    h = Math.floor((f - u) / r),
    g = m * h,
    _ = new Float32Array(g),
    v = [],
    y = [],
    b = [],
    x = [];
  for (let n of e.map.colliders.values()) {
    if (n.overrideGround) {
      let e = n.aabb;
      e &&
        (s || (e[1] <= p + 0.1 && e[4] >= p - 0.1)) &&
        e[3] > l &&
        e[0] < d &&
        e[5] > u &&
        e[2] < f &&
        n.floorHeight?.((e[0] + e[3]) / 2, (e[2] + e[5]) / 2) < p - 1 &&
        y.push(e);
      continue;
    }
    if (n.noPlayer || n.solid === !1) continue;
    if (n.navDynamic) {
      let e = n.movementIndexBounds ?? n.aabb;
      e &&
        e[3] > l - 2 &&
        e[0] < d + 2 &&
        e[5] > u - 2 &&
        e[2] < f + 2 &&
        x.push(n);
      continue;
    }
    if (!s && n.floorHeight && n.floorThickness > 0) continue;
    let e = n.movementAabb ?? n.aabb;
    !e ||
      e[4] <= p + 0.35 ||
      e[1] >= p + t[0] ||
      e[3] < l - 2 ||
      e[0] > d + 2 ||
      e[5] < u - 2 ||
      e[2] > f + 2 ||
      (s && n.floorHeight ? b.push(n) : v.push(e));
  }
  for (let e of y) v.push(e);
  let C = s ? (n.clear ?? a) : i,
    T = s ? w(n, b, l, u, m, h, p) : null;
  if (T)
    for (let e = 0; e < g; e++) {
      if (!T[e]) continue;
      let t = e % m,
        n = (e - t) / m,
        i = !1;
      for (let e = -1; e <= 1 && !i; e++)
        for (let r = -1; r <= 1; r++) {
          let a = t + r,
            o = n + e;
          if (a >= 0 && o >= 0 && a < m && o < h && !T[o * m + a]) {
            i = !0;
            break;
          }
        }
      if (i) {
        let e = l + t * r,
          i = u + n * r;
        v.push([e, 0, i, e + r, 0, i + r]);
      }
    }
  let E = new Float32Array(g).fill(9);
  for (let e of v) {
    let t = Math.max(0, Math.floor((e[0] - o - l) / r)),
      n = Math.min(m - 1, Math.ceil((e[3] + o - l) / r)),
      i = Math.max(0, Math.floor((e[2] - o - u) / r)),
      a = Math.min(h - 1, Math.ceil((e[5] + o - u) / r));
    for (let o = i; o <= a; o++)
      for (let i = t; i <= n; i++) {
        let t = l + (i + 0.5) * r,
          n = u + (o + 0.5) * r,
          a = Math.max(e[0] - t, 0, t - e[3]),
          s = Math.max(e[2] - n, 0, n - e[5]),
          c = Math.hypot(a, s),
          d = o * m + i;
        c < E[d] && (E[d] = c);
      }
  }
  let D = Math.ceil((m * r) / c),
    O = new Uint16Array(g);
  for (let e = 0; e < g; e++) {
    let t = e % m,
      n = (e - t) / m;
    O[e] = Math.floor((n * r) / c) * D + Math.floor((t * r) / c);
  }
  let k = {
    hw: s ? (n.heuristic ?? 2.2) : 1.25,
    x0: l,
    z0: u,
    nx: m,
    nz: h,
    y: p,
    clear: C,
    cost: _,
    near: E,
    district: O,
    districts: D * Math.ceil((h * r) / c),
    near0: E.slice(),
    off: T,
    dyn: x,
    dynUp: new Uint8Array(x.length),
    dynTick: -1,
    dynGen: 0,
    dynMoves: x.some((e) => e.navMoves),
    dynAt: new Float64Array(x.length * 2),
    dynMoveAt: -1e9,
    gs: new Float32Array(g),
    from: new Int32Array(g),
    seen: new Uint32Array(g),
    shut: new Uint32Array(g),
    gen: 0,
    crowd: new Float32Array(g),
    crowdGen: new Uint32Array(g),
    hk: new Float64Array(g * 4),
    hv: new Int32Array(g * 4),
  };
  return (S(k, !0), k);
}
var y = (e, n) => {
    let r = e.aabb;
    return !!r && r[4] > n + 0.35 && r[1] < n + t[0];
  },
  b = 0.6,
  x = 30;
function S(e, t = !1, n = 0) {
  let { dyn: i, dynUp: a, y: c } = e,
    l = t;
  for (let e = 0; e < i.length; e++) {
    let t = +!!y(i[e], c);
    t !== a[e] && ((a[e] = t), (l = !0));
  }
  if (!l && e.dynMoves && n - e.dynMoveAt >= x) {
    let t = e.dynAt;
    for (let e = 0; e < i.length; e++) {
      if (!a[e]) continue;
      let n = i[e].aabb;
      if (Math.abs(n[0] - t[e * 2]) > b || Math.abs(n[2] - t[e * 2 + 1]) > b) {
        l = !0;
        break;
      }
    }
  }
  if (!l) return;
  if (e.dynMoves) {
    e.dynMoveAt = n;
    for (let t = 0; t < i.length; t++) {
      let n = i[t].aabb;
      ((e.dynAt[t * 2] = n?.[0] ?? 0), (e.dynAt[t * 2 + 1] = n?.[2] ?? 0));
    }
  }
  let {
      near: u,
      near0: d,
      cost: f,
      off: p,
      nx: m,
      nz: h,
      x0: g,
      z0: _,
      clear: v,
    } = e,
    S = m * h;
  u.set(d);
  for (let e = 0; e < i.length; e++) {
    if (!a[e]) continue;
    let t = i[e].aabb,
      n = Math.max(0, Math.floor((t[0] - o - g) / r)),
      s = Math.min(m - 1, Math.ceil((t[3] + o - g) / r)),
      c = Math.max(0, Math.floor((t[2] - o - _) / r)),
      l = Math.min(h - 1, Math.ceil((t[5] + o - _) / r));
    for (let e = c; e <= l; e++)
      for (let i = n; i <= s; i++) {
        let n = g + (i + 0.5) * r,
          a = _ + (e + 0.5) * r,
          o = Math.max(t[0] - n, 0, n - t[3]),
          s = Math.max(t[2] - a, 0, a - t[5]),
          c = Math.hypot(o, s),
          l = e * m + i;
        c < u[l] && (u[l] = c);
      }
  }
  for (let e = 0; e < S; e++)
    f[e] =
      u[e] >= v && !(p && p[e])
        ? 1 + (u[e] < o ? s * (1 - (u[e] - v) / (o - v)) : 0)
        : 0;
  t || e.dynGen++;
}
var C = (e, t) => {
  if (!t.dyn.length) return t;
  let n = e.time?.tick ?? 0;
  return (t.dynTick !== n && ((t.dynTick = n), S(t, !1, n)), t);
};
function w(e, n, i, a, o, s, c) {
  let l = new Uint8Array(o * s),
    u = (e, t, n) => t >= e[0] && t <= e[2] && n >= e[1] && n <= e[3],
    d = (e, t, n) => {
      let r = Math.hypot(t - e[0], n - e[1]);
      return r >= e[2] && r <= e[3];
    };
  for (let t = 0; t < l.length; t++) {
    let n = t % o,
      s = (t - n) / o,
      c = i + (n + 0.5) * r,
      f = a + (s + 0.5) * r;
    (((e.floors || e.rings) &&
      !(
        e.floors?.some((e) => u(e, c, f)) || e.rings?.some((e) => d(e, c, f))
      )) ||
      e.holes?.some((e) => u(e, c, f))) &&
      (l[t] = 1);
  }
  for (let e of n) {
    let n = e.movementAabb ?? e.aabb,
      u = Math.max(0, Math.floor((n[0] - i) / r)),
      d = Math.min(o - 1, Math.floor((n[3] - i) / r)),
      f = Math.max(0, Math.floor((n[2] - a) / r)),
      p = Math.min(s - 1, Math.floor((n[5] - a) / r));
    for (let s = f; s <= p; s++)
      for (let f = u; f <= d; f++) {
        let u = i + (f + 0.5) * r,
          d = a + (s + 0.5) * r;
        if (u < n[0] || u > n[3] || d < n[2] || d > n[5]) continue;
        let p = e.floorHeight(u, d);
        if (!(p > -1e5)) continue;
        let m = e.floorThickness > 0 ? p - e.floorThickness : n[1];
        p > c + 0.35 && m < c + t[0] && (l[s * o + f] = 1);
      }
  }
  return l;
}
function T(e, t = null, n = null, r = null) {
  let i = e.map.floorNav;
  if (!i) return null;
  if (i.levels) {
    let n = t == null ? i.levels[0] : i.levels.find((e) => e.id === t);
    return n ? E(e, n) : null;
  }
  let a = t,
    o = a != null && n != null ? (i.levelAt?.(n, a, r) ?? null) : null;
  if (o == null && ((o = i.y), a != null)) {
    for (let e of i.stacked ?? []) Math.abs(e - a) < Math.abs(o - a) && (o = e);
    if (Math.abs(o - a) > 1.5) return null;
  }
  let s = g.get(i);
  s || ((s = new Map()), g.set(i, s));
  let c = o + `:` + (i.version?.() ?? 0),
    l = s.get(c);
  return (l || ((l = v(e, { ...i, y: o })), s.set(c, l)), C(e, l));
}
function E(e, t) {
  let n = g.get(t);
  return (n || ((n = v(e, t, !0)), (n.level = t), g.set(t, n)), C(e, n));
}
var D = (e, t, n) => {
    let i = Math.floor((t - e.x0) / r),
      a = Math.floor((n - e.z0) / r);
    return i < 0 || a < 0 || i >= e.nx || a >= e.nz ? -1 : a * e.nx + i;
  },
  O = (e, t) => [
    e.x0 + ((t % e.nx) + 0.5) * r,
    e.z0 + (Math.floor(t / e.nx) + 0.5) * r,
  ];
function k(e, t, n, i = e.clear) {
  let a = D(e, t, n);
  if (a >= 0 && e.cost[a] && e.near[a] >= i) return a;
  let o = Math.floor((t - e.x0) / r),
    s = Math.floor((n - e.z0) / r);
  for (let r = 1; r <= 8; r++) {
    let a = -1,
      c = 1 / 0;
    for (let l = s - r; l <= s + r; l++)
      for (let u = o - r; u <= o + r; u++) {
        if (
          u < 0 ||
          l < 0 ||
          u >= e.nx ||
          l >= e.nz ||
          Math.max(Math.abs(u - o), Math.abs(l - s)) !== r
        )
          continue;
        let d = l * e.nx + u;
        if (!e.cost[d] || e.near[d] < i) continue;
        let [f, p] = O(e, d),
          m = Math.hypot(f - t, p - n);
        m < c && ((c = m), (a = d));
      }
    if (a >= 0) return a;
  }
  return -1;
}
function A(e, t, n, i, a, o = e.clear) {
  let s = Math.hypot(i - t, a - n),
    c = Math.ceil(s / (r * 0.5));
  for (let r = 0; r <= c; r++) {
    let s = c ? r / c : 0,
      l = D(e, t + (i - t) * s, n + (a - n) * s);
    if (l < 0 || !e.cost[l] || e.near[l] < o) return !1;
  }
  return !0;
}
var j = (e, t) => {
    let n = (e * 374761393 + t * 668265263) | 0;
    return (
      (n = Math.imul(n ^ (n >>> 13), 1274126177)),
      ((n ^ (n >>> 16)) >>> 0) / 4294967296
    );
  },
  M = { plans: 0, fails: 0, pops: 0 };
