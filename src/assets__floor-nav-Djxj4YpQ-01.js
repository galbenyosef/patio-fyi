// assets__floor-nav-Djxj4YpQ 01 — math
// Lines 1-328 of readable/assets__floor-nav-Djxj4YpQ.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { o as e, p as t } from "./sim-D8F3HPJq.js";
var n = 0.3,
  r = t + 0.02,
  i = 0.22,
  a = 1.1,
  o = 0.7,
  s = 8,
  c = 0.9,
  l = 4.5,
  u = 2.5,
  d = 0.7,
  f = 240,
  p = 2,
  m = 75,
  h = new WeakMap(),
  g = new WeakMap();
function _(t, o, c = !1) {
  let [l, u, d, f] = o.bounds,
    p = o.y,
    m = Math.floor((d - l) / n),
    h = Math.floor((f - u) / n),
    g = m * h,
    _ = new Float32Array(g),
    v = [],
    y = [],
    b = [],
    S = [];
  for (let n of t.map.colliders.values()) {
    if (n.overrideGround) {
      let e = n.aabb;
      e &&
        (c || (e[1] <= p + 0.1 && e[4] >= p - 0.1)) &&
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
        S.push(n);
      continue;
    }
    if (!c && n.floorHeight && n.floorThickness > 0) continue;
    let t = n.movementAabb ?? n.aabb;
    !t ||
      t[4] <= p + 0.35 ||
      t[1] >= p + e[0] ||
      t[3] < l - 2 ||
      t[0] > d + 2 ||
      t[5] < u - 2 ||
      t[2] > f + 2 ||
      (c && n.floorHeight ? b.push(n) : v.push(t));
  }
  for (let e of y) v.push(e);
  let w = c ? (o.clear ?? i) : r,
    T = c ? C(o, b, l, u, m, h, p) : null;
  if (T)
    for (let e = 0; e < g; e++) {
      if (!T[e]) continue;
      let t = e % m,
        r = (e - t) / m,
        i = !1;
      for (let e = -1; e <= 1 && !i; e++)
        for (let n = -1; n <= 1; n++) {
          let a = t + n,
            o = r + e;
          if (a >= 0 && o >= 0 && a < m && o < h && !T[o * m + a]) {
            i = !0;
            break;
          }
        }
      if (i) {
        let e = l + t * n,
          i = u + r * n;
        v.push([e, 0, i, e + n, 0, i + n]);
      }
    }
  let E = new Float32Array(g).fill(9);
  for (let e of v) {
    let t = Math.max(0, Math.floor((e[0] - a - l) / n)),
      r = Math.min(m - 1, Math.ceil((e[3] + a - l) / n)),
      i = Math.max(0, Math.floor((e[2] - a - u) / n)),
      o = Math.min(h - 1, Math.ceil((e[5] + a - u) / n));
    for (let a = i; a <= o; a++)
      for (let i = t; i <= r; i++) {
        let t = l + (i + 0.5) * n,
          r = u + (a + 0.5) * n,
          o = Math.max(e[0] - t, 0, t - e[3]),
          s = Math.max(e[2] - r, 0, r - e[5]),
          c = Math.hypot(o, s),
          d = a * m + i;
        c < E[d] && (E[d] = c);
      }
  }
  let D = Math.ceil((m * n) / s),
    O = new Uint16Array(g);
  for (let e = 0; e < g; e++) {
    let t = e % m,
      r = (e - t) / m;
    O[e] = Math.floor((r * n) / s) * D + Math.floor((t * n) / s);
  }
  let k = {
    hw: c ? (o.heuristic ?? 2.2) : 1.25,
    x0: l,
    z0: u,
    nx: m,
    nz: h,
    y: p,
    clear: w,
    cost: _,
    near: E,
    district: O,
    districts: D * Math.ceil((h * n) / s),
    near0: E.slice(),
    off: T,
    dyn: S,
    dynUp: new Uint8Array(S.length),
    dynTick: -1,
    dynGen: 0,
    dynMoves: S.some((e) => e.navMoves),
    dynAt: new Float64Array(S.length * 2),
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
  return (x(k, !0), k);
}
var v = (t, n) => {
    let r = t.aabb;
    return !!r && r[4] > n + 0.35 && r[1] < n + e[0];
  },
  y = 0.6,
  b = 30;
function x(e, t = !1, r = 0) {
  let { dyn: i, dynUp: s, y: c } = e,
    l = t;
  for (let e = 0; e < i.length; e++) {
    let t = +!!v(i[e], c);
    t !== s[e] && ((s[e] = t), (l = !0));
  }
  if (!l && e.dynMoves && r - e.dynMoveAt >= b) {
    let t = e.dynAt;
    for (let e = 0; e < i.length; e++) {
      if (!s[e]) continue;
      let n = i[e].aabb;
      if (Math.abs(n[0] - t[e * 2]) > y || Math.abs(n[2] - t[e * 2 + 1]) > y) {
        l = !0;
        break;
      }
    }
  }
  if (!l) return;
  if (e.dynMoves) {
    e.dynMoveAt = r;
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
      clear: x,
    } = e,
    S = m * h;
  u.set(d);
  for (let e = 0; e < i.length; e++) {
    if (!s[e]) continue;
    let t = i[e].aabb,
      r = Math.max(0, Math.floor((t[0] - a - g) / n)),
      o = Math.min(m - 1, Math.ceil((t[3] + a - g) / n)),
      c = Math.max(0, Math.floor((t[2] - a - _) / n)),
      l = Math.min(h - 1, Math.ceil((t[5] + a - _) / n));
    for (let e = c; e <= l; e++)
      for (let i = r; i <= o; i++) {
        let r = g + (i + 0.5) * n,
          a = _ + (e + 0.5) * n,
          o = Math.max(t[0] - r, 0, r - t[3]),
          s = Math.max(t[2] - a, 0, a - t[5]),
          c = Math.hypot(o, s),
          l = e * m + i;
        c < u[l] && (u[l] = c);
      }
  }
  for (let e = 0; e < S; e++)
    f[e] =
      u[e] >= x && !(p && p[e])
        ? 1 + (u[e] < a ? o * (1 - (u[e] - x) / (a - x)) : 0)
        : 0;
  t || e.dynGen++;
}
var S = (e, t) => {
  if (!t.dyn.length) return t;
  let n = e.time?.tick ?? 0;
  return (t.dynTick !== n && ((t.dynTick = n), x(t, !1, n)), t);
};
function C(t, r, i, a, o, s, c) {
  let l = new Uint8Array(o * s),
    u = (e, t, n) => t >= e[0] && t <= e[2] && n >= e[1] && n <= e[3];
  for (let e = 0; e < l.length; e++) {
    let r = e % o,
      s = (e - r) / o,
      c = i + (r + 0.5) * n,
      d = a + (s + 0.5) * n;
    ((t.floors && !t.floors.some((e) => u(e, c, d))) ||
      t.holes?.some((e) => u(e, c, d))) &&
      (l[e] = 1);
  }
  for (let t of r) {
    let r = t.movementAabb ?? t.aabb,
      u = Math.max(0, Math.floor((r[0] - i) / n)),
      d = Math.min(o - 1, Math.floor((r[3] - i) / n)),
      f = Math.max(0, Math.floor((r[2] - a) / n)),
      p = Math.min(s - 1, Math.floor((r[5] - a) / n));
    for (let s = f; s <= p; s++)
      for (let f = u; f <= d; f++) {
        let u = i + (f + 0.5) * n,
          d = a + (s + 0.5) * n;
        if (u < r[0] || u > r[3] || d < r[2] || d > r[5]) continue;
        let p = t.floorHeight(u, d);
        if (!(p > -1e5)) continue;
        let m = t.floorThickness > 0 ? p - t.floorThickness : r[1];
        p > c + 0.35 && m < c + e[0] && (l[s * o + f] = 1);
      }
  }
  return l;
}
function w(e, t = null, n = null, r = null) {
  let i = e.map.floorNav;
  if (!i) return null;
  if (i.levels) {
    let n = t == null ? i.levels[0] : i.levels.find((e) => e.id === t);
    return n ? T(e, n) : null;
  }
  let a = t,
    o = a != null && n != null ? (i.levelAt?.(n, a, r) ?? null) : null;
  if (o == null && ((o = i.y), a != null)) {
    for (let e of i.stacked ?? []) Math.abs(e - a) < Math.abs(o - a) && (o = e);
    if (Math.abs(o - a) > 1.5) return null;
  }
  let s = h.get(i);
  s || ((s = new Map()), h.set(i, s));
  let c = o + `:` + (i.version?.() ?? 0),
    l = s.get(c);
  return (l || ((l = _(e, { ...i, y: o })), s.set(c, l)), S(e, l));
}
function T(e, t) {
  let n = h.get(t);
  return (n || ((n = _(e, t, !0)), (n.level = t), h.set(t, n)), S(e, n));
}
var E = (e, t, r) => {
    let i = Math.floor((t - e.x0) / n),
      a = Math.floor((r - e.z0) / n);
    return i < 0 || a < 0 || i >= e.nx || a >= e.nz ? -1 : a * e.nx + i;
  },
  D = (e, t) => [
    e.x0 + ((t % e.nx) + 0.5) * n,
    e.z0 + (Math.floor(t / e.nx) + 0.5) * n,
  ];
function O(e, t, r, i = e.clear) {
  let a = E(e, t, r);
  if (a >= 0 && e.cost[a] && e.near[a] >= i) return a;
  let o = Math.floor((t - e.x0) / n),
    s = Math.floor((r - e.z0) / n);
  for (let n = 1; n <= 8; n++) {
    let a = -1,
      c = 1 / 0;
    for (let l = s - n; l <= s + n; l++)
      for (let u = o - n; u <= o + n; u++) {
        if (
          u < 0 ||
          l < 0 ||
          u >= e.nx ||
          l >= e.nz ||
          Math.max(Math.abs(u - o), Math.abs(l - s)) !== n
        )
          continue;
        let d = l * e.nx + u;
        if (!e.cost[d] || e.near[d] < i) continue;
        let [f, p] = D(e, d),
          m = Math.hypot(f - t, p - r);
        m < c && ((c = m), (a = d));
      }
    if (a >= 0) return a;
  }
  return -1;
}
function k(e, t, r, i, a, o = e.clear) {
  let s = Math.hypot(i - t, a - r),
    c = Math.ceil(s / (n * 0.5));
  for (let n = 0; n <= c; n++) {
    let s = c ? n / c : 0,
      l = E(e, t + (i - t) * s, r + (a - r) * s);
    if (l < 0 || !e.cost[l] || e.near[l] < o) return !1;
  }
  return !0;
}
var ee = (e, t) => {
    let n = (e * 374761393 + t * 668265263) | 0;
    return (
      (n = Math.imul(n ^ (n >>> 13), 1274126177)),
      ((n ^ (n >>> 16)) >>> 0) / 4294967296
    );
  },
  A = { plans: 0, fails: 0, pops: 0 };
