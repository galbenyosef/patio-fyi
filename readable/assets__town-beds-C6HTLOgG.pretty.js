/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { u as e } from "./index-D8RniaPa.js";
import { a as t, i as n, o as r, r as i, t as a } from "./sim-CY547Hbc.js";
var o = Object.freeze([
    Object.freeze({ name: `pine`, radius: 0.34, height: 8.2 }),
    Object.freeze({ name: `oak`, radius: 0.48, height: 4.2 }),
    Object.freeze({ name: `birch`, radius: 0.25, height: 7.2 }),
  ]),
  s = new WeakMap();
function c(e, t, n, r, i, a) {
  let o = i - n,
    s = a - r,
    c = o * o + s * s,
    l = c > 0 ? ((e - n) * o + (t - r) * s) / c : 0;
  return (
    (l = l < 0 ? 0 : l > 1 ? 1 : l),
    Math.hypot(e - (n + o * l), t - (r + s * l))
  );
}
function l(o) {
  let l = o?.opts?.forest;
  if (!l) return [];
  let u = s.get(o);
  if (u) return u;
  let d = o.seed | 0,
    f = o.half,
    p = o.waterLevel,
    m = e(o.seed).fork(`terrain:forest`),
    h = l.target ?? 6e3,
    g = l.spacing ?? 3.4,
    _ = i(l.cover ?? 0.8, 0.05, 1),
    [v, y] = l.roadClear ?? [9, 17],
    b = l.treeLine ?? 150,
    x = l.mix ?? [0.74, 0.06, 0.2],
    S = x[0] + x[1] + x[2],
    C = l.clearings ?? [],
    w = l.sparse ?? [],
    T = l.lanes ?? [],
    E = i(l.beach ?? 0, 0, 1),
    D = l.fringe ?? null,
    O = [0, 1, 0],
    k = Math.ceil(o.size / 4) + 1,
    A = new Int32Array(k * k).fill(-1),
    j = [],
    M = [],
    N = [],
    P = (e) => i(((e + f) / 4) | 0, 0, k - 1),
    F = (e, t) => {
      let n = P(e),
        r = P(t),
        i = g * g;
      for (let a = r - 1; a <= r + 1; a++)
        if (!(a < 0 || a >= k)) {
          for (let r = n - 1; r <= n + 1; r++)
            if (!(r < 0 || r >= k))
              for (let n = A[a * k + r]; n !== -1; n = j[n]) {
                let r = M[n] - e,
                  a = N[n] - t;
                if (r * r + a * a < i) return !1;
              }
        }
      return !0;
    },
    I = (e, t) => {
      let n = P(t) * k + P(e);
      (j.push(A[n]), M.push(e), N.push(t), (A[n] = M.length - 1));
    },
    L = [];
  for (let e of [5, 7, 11])
    for (let s = -f + 14; s < f - 14; s += e) {
      let l = (r(Math.round((s + f) / e), 23, d + 191) - 0.5) * e;
      for (let u = -f + 14; u < f - 14; u += e) {
        let h = u + l + m.range(-0.9, 0.9) * e,
          g = s + m.range(-0.9, 0.9) * e,
          k = m.next(),
          A = m.next();
        if (h < -f + 10 || h > f - 10 || g < -f + 10 || g > f - 10) continue;
        let j = o.cellIndex(h, g),
          M = o.material[j];
        if (
          o.noScatter[j] ||
          M === a.WATER ||
          M === a.ROAD ||
          (M === a.SAND && !E)
        )
          continue;
        let N = o.getHeight(h, g);
        if (N < p + 0.9 || N > b || (o.getNormal(h, g, O), O[1] < 0.74))
          continue;
        let P = o.roadDist[j];
        if (
          (P < y &&
            P < v + (y - v) * (0.5 + 0.5 * t(h / 37, g / 37, d + 703))) ||
          C.some(
            (e) =>
              Math.hypot(h - e.x, g - e.z) <
              e.r * (1 + 0.16 * t(h / 9, g / 9, d + 711)),
          ) ||
          w.some(
            (e) =>
              Math.hypot(h - e.x, g - e.z) < e.r &&
              r(Math.round(h * 8), Math.round(g * 8), d + 731) > e.keep,
          ) ||
          T.some(
            (e) =>
              c(h, g, e[0], e[1], e[2], e[3]) <
              ((e[4] ?? 14) / 2) * (1 + 0.22 * t(h / 13, g / 13, d + 717)),
          )
        )
          continue;
        let R = D?.spare?.some((e) => {
          let n = 5 * t(h / 11, g / 11, d + 727);
          return h > e[0] - n && h < e[2] + n && g > e[1] - n && g < e[3] + n;
        });
        if (D && !R) {
          let e = Math.hypot(
              Math.max(0, Math.abs(h) - D.box[0]),
              Math.max(0, Math.abs(g) - D.box[1]),
            ),
            n = Math.max(0.1, f - Math.max(Math.abs(h), Math.abs(g))),
            [i, a] = D.keep,
            o = e / (e + n) + 0.07 * t(h / 21, g / 21, d + 721);
          if (
            o > a ||
            (o > i &&
              r(Math.round(h * 8), Math.round(g * 8), d + 723) <
                (o - i) / (a - i))
          )
            continue;
        }
        let z =
            0.5 +
            0.5 * n(h / 150, g / 150, 3, d + 701) +
            0.22 * n(h / 41, g / 41, 2, d + 702),
          B = i((z - (1 - _) * 0.92) * 3.2, 0, 1),
          V =
            B *
            (0.35 + 0.65 * k) *
            (M === a.ROCK ? 0.35 : M === a.SAND ? E : 1);
        if (V <= 0.05 || !F(h, g)) continue;
        I(h, g);
        let H = A * S,
          U = N > 58 + 14 * t(h / 170, g / 170, d + 9),
          W = M === a.SAND ? 2 : U || H < x[0] ? 0 : H < x[0] + x[1] ? 1 : 2,
          G = 1 - B,
          K =
            m.next() < 0.04
              ? m.range(1.3, 1.62)
              : 0.62 + m.range(0, 0.58) * (0.85 + 0.6 * G);
        L.push({
          x: h,
          z: g,
          sp: W,
          w: V,
          v: m.int(0, 2),
          s: K * (W === 0 ? 1.08 : 1),
          sxz: m.range(0.85, 1.2),
          sy: m.range(0.9, 1.22),
          rot: m.range(0, 6.2831),
          tiltA: m.range(0, 6.2831),
          tilt: m.range(0.015, 0.08),
          tint: 0.86 + 0.26 * m.next(),
        });
      }
    }
  L.sort((e, t) => t.w - e.w || e.x - t.x || e.z - t.z);
  let R = L.slice(0, h);
  for (let [e, [t, n, i, a]] of (l.planted ?? []).entries()) {
    let o = (t) => r(e, t, d + 761);
    R.push({
      x: t,
      z: n,
      sp: i,
      planted: !0,
      w: 1,
      v: Math.min(2, (o(1) * 3) | 0),
      s: a,
      sxz: 0.86 + 0.14 * o(2),
      sy: 0.95 + 0.25 * o(3),
      rot: o(4) * 6.2831,
      tiltA: o(5) * 6.2831,
      tilt: 0.01 + 0.04 * o(6),
      tint: 0.86 + 0.26 * o(7),
    });
  }
  let z = Object.freeze(R);
  return (s.set(o, z), z);
}
var u = Object.freeze([
  { h: 3.2, rb: 0.35, rt: 0.24 },
  { h: 3.6, rb: 0.48, rt: 0.3 },
  { h: 7.2, rb: 0.25, rt: 0.13 },
]);
function d(e) {
  return l(e).map((t, n) => {
    let r = o[t.sp],
      i = Math.max(0.2, r.radius * t.s * t.sxz * 0.9),
      a = e.getHeight(t.x, t.z) - 0.3,
      s = u[t.sp],
      c = a + 0.3;
    return {
      id: `forest-trunk-${n}`,
      aabb: [t.x - i, a, t.z - i, t.x + i, a + r.height * t.s * t.sy, t.z + i],
      surface: `wood`,
      trunk: {
        x: t.x,
        z: t.z,
        y0: c - 0.3,
        h: s.h * t.s * t.sy + 0.3,
        rb: s.rb * t.s * t.sxz,
        rt: s.rt * t.s * t.sxz,
      },
    };
  });
}
var f = { wall: 0.28, height: 0.15, top: 0.15 };
function p(e) {
  return /^(avenue|cross)-(walk)-/.test(e)
    ? `walk`
    : /^(avenue|cross)-kerb-/.test(e)
      ? `kerb`
      : /^avenue-median-/.test(e)
        ? `median`
        : /^cross-strip-/.test(e)
          ? `strip`
          : /^avenue--?\d+(-[we])?$/.test(e) || /^cross-street-/.test(e)
            ? `asphalt`
            : null;
}
var m = new WeakMap();
function h(e, t) {
  if (!e || e.opts?.foliage !== `autumn` || !e.opts?.paving || !t) return [];
  if (m.has(t)) return m.get(t);
  let n = [];
  for (let e of t.buildings ?? [])
    n.push([
      e.x - e.w / 2 - 0.6,
      e.z - e.d / 2 - 0.6,
      e.x + e.w / 2 + 0.6,
      e.z + e.d / 2 + 0.6,
    ]);
  for (let e of t.objects ?? [])
    p(e.id) &&
      n.push([e.x - e.sx / 2, e.z - e.sz / 2, e.x + e.sx / 2, e.z + e.sz / 2]);
  let i = (t.colliderDefs ?? []).filter(
      (e) =>
        e.aabb && !String(e.id).startsWith(`forest-trunk-`) && e.solid !== !1,
    ),
    a = (e, t) =>
      t.some((t) => e[0] < t[2] && e[2] > t[0] && e[1] < t[3] && e[3] > t[1]),
    o = [],
    s = [];
  return (
    l(e).forEach((t, c) => {
      if (!t.planted) return;
      let l = e.getHeight(t.x, t.z),
        u = Math.min(2.1, Math.max(1.3, 1 + 0.9 * t.s)),
        d = 0.75 + 0.25 * r(c, 1, 977),
        [f, p] = r(c, 2, 977) < 0.5 ? [u, u * d] : [u * d, u],
        m = [t.x - f, t.z - p, t.x + f, t.z + p];
      a(m, n) ||
        a([m[0] - 0.4, m[1] - 0.4, m[2] + 0.4, m[3] + 0.4], s) ||
        i.some((e) => {
          let t = e.aabb;
          return (
            t[1] < l + 1.2 &&
            t[4] > l &&
            m[0] < t[3] &&
            m[2] > t[0] &&
            m[1] < t[5] &&
            m[3] > t[2]
          );
        }) ||
        (o.push({ i: c, x: t.x, z: t.z, y: l, hw: f, hd: p }), s.push(m));
    }),
    m.set(t, o),
    o
  );
}
function g(e, t) {
  return h(e, t).map((e) => {
    let t = e.x - e.hw,
      n = e.x + e.hw,
      r = e.z - e.hd,
      i = e.z + e.hd,
      a = f.wall,
      o = e.y - 0.3,
      s = e.y + f.top;
    return {
      id: `town-bed-${e.i}`,
      aabb: [t, o, r, n, s, i],
      surface: `concrete`,
      shotBoxes: [
        [t, o, r, t + a, s, i],
        [n - a, o, r, n, s, i],
        [t + a, o, r, n - a, s, r + a],
        [t + a, o, i - a, n - a, s, i],
        [t + a, o, r + a, n - a, e.y + 0.02, i - a],
      ],
    };
  });
}
export { d as a, h as i, p as n, l as o, g as r, f as t };
//# sourceMappingURL=town-beds-C6HTLOgG.js.map
