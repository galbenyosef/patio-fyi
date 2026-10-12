// assets__linden-4qafj8hA 01 — math
// Lines 1-265 of readable/assets__linden-4qafj8hA.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { Zn as e } from "./graphics-quality-BsjABS0s.js";
import { t } from "./lab-footprints-Bots4mYb.js";
import { a as n } from "./lab-city-7bAu2SXh.js";
import { FENCE_HP as r } from "./linden-sim-lCb_uLzG.js";
import {
  a as i,
  i as a,
  n as o,
  o as s,
  r as c,
  t as l,
} from "./suburb-plan-Bou2JYbm.js";
var u = e({
    EDGE: () => 75,
    GRIDS: () => S,
    LINDEN_CLIMATE: () => p,
    LINDEN_CONFIG: () => q,
    LINDEN_ID: () => d,
    LINDEN_NAME: () => f,
    LINDEN_ROUTES: () => z,
    PLAN: () => N,
    buildLinden: () => Q,
  }),
  d = `linden-hollow-v2`,
  f = `Linden Hollow`,
  p = Object.freeze({
    fog: 0.62,
    nearHaze: 0.16,
    nearHazeFalloff: 0.012,
    heightFalloff: 0.03,
    overcast: 0.32,
    snow: 0,
    rain: 0,
    clouds: 0.55,
    exposure: 0.96,
    tod: 9.25,
    visibility: 320,
  }),
  m = 24,
  h = { edge: `strip`, walk: 3.55, walkMat: `sidewalk`, room: 10, centre: !1 },
  g = { axis: `x`, c: -40, w: 9, ...h, kinds: [`maple`, `linden`] },
  _ = { axis: `x`, c: 30, w: 9, ...h, kinds: [`linden`, `beech`] },
  v = (e, t, n, r = {}) => ({
    axis: `z`,
    c: e,
    w: 9,
    ...h,
    kinds: t,
    ...(n ? { span: n } : {}),
    ...r,
  }),
  y = [`sedan`, `suv`, `wagon`, `hatch`, `pickup`, `coupe`, `van`, `sedan`],
  b = 41,
  x = { main: [[-66, -44, -75, -44.5]] },
  S = [
    {
      id: `main`,
      name: `Linden Hollow`,
      inner: `lawn`,
      spec: {
        bounds: [-75, 75, -75, b],
        seed: 201,
        cross: `lines`,
        roads: [
          g,
          _,
          v(-69.5, [`maple`, `birch`], [-75, _.c + _.w / 2]),
          v(69.5, [`birch`, `maple`], [-75, _.c + _.w / 2]),
          v(0, [`linden`, `maple`], [g.c + g.w / 2, _.c - _.w / 2], {
            s: 1.1,
            w: 8,
          }),
          {
            axis: `z`,
            c: 0,
            w: 9,
            edge: `none`,
            centre: !1,
            walk: 1.75,
            walkMat: `sidewalk`,
            span: [_.c + _.w / 2, b],
            bulb: { r: 9, f: 5, yard: 30 },
          },
        ],
      },
      lots: (e) => {
        let t = e.bulbs[0];
        return [
          a(t, -0.2, `hFarmhouse`, { drive: 1, car: `wagon`, set: 7 }),
          a(t, 0.62, `hAframe`, { drive: 1, car: `hatch`, set: 5 }),
          a(t, Math.PI - 0.62, `hDuplex`, { drive: -1, car: null, set: 5 }),
          a(t, Math.PI + 0.2, `hQueenAnne`, {
            drive: 1,
            car: `pickup`,
            set: 7,
          }),
        ];
      },
    },
  ];
function C(e, t, n, r) {
  let i = 7.2,
    a = l + (r ? r / 2 : 0.55),
    o = [];
  return (
    n.includes(`w`) &&
      o.push({ kind: `stop`, x: t.lo - i, z: e.hi + a, dx: 1, dz: 0 }),
    n.includes(`e`) &&
      o.push({ kind: `stop`, x: t.hi + i, z: e.lo - a, dx: -1, dz: 0 }),
    n.includes(`n`) &&
      o.push({ kind: `stop`, x: t.lo - a, z: e.lo - i, dx: 0, dz: 1 }),
    n.includes(`s`) &&
      o.push({ kind: `stop`, x: t.hi + a, z: e.hi + i, dx: 0, dz: -1 }),
    o
  );
}
var w = (e, t, n = 0) =>
    e[0] < t[2] + n && e[2] > t[0] - n && e[1] < t[3] + n && e[3] > t[1] - n,
  T = (e) => {
    let t = e >>> 0 || 1,
      n = () => (t = (t * 1664525 + 1013904223) >>> 0) / 4294967296;
    return (
      (n.pick = (e) => e[Math.floor(n() * e.length)]),
      (n.chance = (e) => n() < e),
      (n.range = (e, t) => e + n() * (t - e)),
      n
    );
  };
function E(e, n, r = [], i = []) {
  let a = T(n),
    o = [],
    c = [
      `hCraftsman`,
      `hFarmhouse`,
      `hQueenAnne`,
      `hRanch`,
      `hDuplex`,
      `hFarmhouse`,
      `hQueenAnne`,
      `hAframe`,
      `hFarmhouse`,
    ],
    l = r
      .filter((e) => e.kind === `lot`)
      .map((e) => {
        let t = Math.min(e.u - e.W / 2, e.drive?.a ?? 1e9) - 1,
          n = Math.max(e.u + e.W / 2, e.drive?.b ?? -1e9) + 1,
          [r, i] = e.w(t, e.road.walk),
          [a, o] = e.w(n, e.d + e.D + 2);
        return [Math.min(r, a), Math.min(i, o), Math.max(r, a), Math.max(i, o)];
      });
  for (let e of r)
    if (e.kind === `bulb`) {
      let t = Math.hypot(e.W, e.D) / 2 + 1;
      l.push([e.cx - t, e.cz - t, e.cx + t, e.cz + t]);
    }
  for (let n of e.blocks
    .flatMap((e) => Object.values(e.edges))
    .sort((e, t) => t.u1 - t.u0 - (e.u1 - e.u0))) {
    let r = n.b,
      u = n.road,
      d = n.alongX ? (n.n[1] > 0 ? 1 : -1) : n.n[0] > 0 ? 1 : -1,
      f = n.alongX ? r.z1 - r.z0 : r.x1 - r.x0,
      [p, m] = n.alongX ? [r.side.w, r.side.e] : [r.side.n, r.side.s],
      h = n.u0 + (p ? p.walk + 0.8 : 0.8),
      g = n.u1 - (m ? m.walk + 0.8 : 0.8);
    for (let n = 0; n < 30 && h < g; n++) {
      let n = 6 + Math.floor(a() * 2),
        r = c.filter((e) => u.walk + n + t[e].D + 3 <= f);
      if (!r.length) break;
      let p = a.pick(r),
        m = t[p].W,
        _ = t[p].D,
        v = a.chance(0.5) ? 1 : -1,
        b = v < 0 ? 4.1 : 0.5,
        x = v > 0 ? 4.1 : 0.5,
        S = h + m / 2 + b;
      if (S + m / 2 + x > g) {
        h += 2;
        continue;
      }
      let C = s(e, u, d, S, p, {
          drive: v,
          gap: 0.7,
          car: a.chance(0.75) ? a.pick(y) : null,
          set: n,
          mail: !0,
          tree: a.chance(0.5)
            ? {
                kind: a.pick([`maple`, `linden`, `birch`, `beech`]),
                s: a.range(0.62, 0.8),
              }
            : null,
        }),
        [T, E] = C.w(S - m / 2 - b, u.walk),
        [D, O] = C.w(S + m / 2 + x, C.d + _ + 2),
        k = [Math.min(T, D), Math.min(E, O), Math.max(T, D), Math.max(E, O)];
      !l.some((e) => w(e, k, 0.3)) && !i.some((e) => w(e, k))
        ? (l.push(k), o.push(C), (h = S + m / 2 + x + a.range(0.6, 1.4)))
        : (h += 1.5);
    }
  }
  return o;
}
var D = S.map((e) => i({ ...e.spec })),
  O = S.map((e, t) => (e.lots ? e.lots(D[t]) : [])),
  k = O.flat(),
  A = S.flatMap((e) => (x[e.id] ?? []).map(([e, t, n, r]) => [e, n, t, r])),
  j = [44, 42, 75, 75];
function M(e, n, r) {
  let i = e.roads.find((e) => e.axis === `x` && e.c === _.c),
    a = T(n),
    o = [],
    c = r.map((e) => {
      let t = Math.hypot(e.W, e.D) / 2 + 1;
      return [e.cx - t, e.cz - t, e.cx + t, e.cz + t];
    }),
    l = [
      `hFarmhouse`,
      `hQueenAnne`,
      `hCraftsman`,
      `hDuplex`,
      `hAframe`,
      `hRanch`,
    ];
  for (let [n, r] of [
    [-73, -20],
    [20, j[0]],
  ]) {
    let u = n;
    for (let n = 0; n < 20 && u < r; n++) {
      let n = a.pick(l),
        d = t[n].W,
        f = t[n].D,
        p = a.chance(0.5) ? 1 : -1,
        m = p < 0 ? 4.1 : 0.5,
        h = p > 0 ? 4.1 : 0.5,
        g = u + d / 2 + m;
      if (g + d / 2 + h > r) break;
      let v = s(e, i, 1, g, n, {
          drive: p,
          gap: 0.7,
          car: a.chance(0.75) ? a.pick(y) : null,
          set: 6,
          mail: !0,
          tree: a.chance(0.5)
            ? {
                kind: a.pick([`maple`, `linden`, `birch`, `beech`]),
                s: a.range(0.62, 0.8),
              }
            : null,
        }),
        [b, x] = v.w(g - d / 2 - m, _.walk),
        [S, C] = v.w(g + d / 2 + h, v.d + f + 2),
        T = [Math.min(b, S), Math.min(x, C), Math.max(b, S), Math.max(x, C)];
      if (C > 69 || c.some((e) => w(e, T, 0.3))) {
        u += 1.5;
        continue;
      }
      (c.push(T), o.push(v), (u = g + d / 2 + h + a.range(0.6, 1.4)));
    }
  }
  return o;
}
