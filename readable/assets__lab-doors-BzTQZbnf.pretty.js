/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { r as e } from "./greywater-nests-5ECPKgjn.js";
import { t } from "./lab-footprints-Bots4mYb.js";
var n = [
  [-92, -123],
  [-78, -109],
  [-66, -92],
  [-57, -75],
  [-47, -58],
  [-33, -43],
  [-18, -30],
  [-3, -17],
  [12, -3],
  [27, 10],
  [36, 27],
  [42, 47],
  [48, 65],
  [57, 84],
  [68, 100],
  [83, 114],
];
function r(e, t) {
  let r = 1e9;
  for (let i = 1; i < n.length; i++) {
    let [a, o] = n[i - 1],
      [s, c] = n[i],
      l = s - a,
      u = c - o,
      d = Math.max(
        0,
        Math.min(1, ((e - a) * l + (t - o) * u) / (l * l + u * u)),
      );
    r = Math.min(r, Math.hypot(e - a - l * d, t - o - u * d));
  }
  return r;
}
var i = [-33, -18, 33, 18],
  a = Object.freeze([
    { id: `north-avenue`, rect: [-146, -108, 146, -96], walk: 4.5 },
    { id: `south-avenue`, rect: [-146, 96, 146, 108], walk: 4.5 },
    { id: `west-cross`, rect: [-146, -108, -134, 108], walk: 4.5 },
    { id: `east-cross`, rect: [134, -108, 146, 108], walk: 4.5 },
    { id: `central-west`, rect: [-134, -6, -33, 6], walk: 4.5 },
    { id: `central-east`, rect: [33, -6, 134, 6], walk: 4.5 },
    ...[-70, 70].flatMap((e) => [
      { id: `street-${e}-n`, rect: [e - 4, -96, e + 4, -6], walk: 3 },
      { id: `street-${e}-s`, rect: [e - 4, 6, e + 4, 96], walk: 3 },
    ]),
    { id: `street-0-n`, rect: [-4, -96, 4, -18], walk: 3 },
    { id: `street-0-s`, rect: [-4, 18, 4, 96], walk: 3 },
  ]),
  o = Object.freeze([
    { id: `alley-n-1`, rect: [-63, -55, -7, -49] },
    { id: `alley-n-2`, rect: [7, -55, 63, -49] },
    { id: `alley-n-3`, rect: [77, -55, 129.5, -49] },
    { id: `alley-s-0`, rect: [-129.5, 49, -77, 55] },
    { id: `alley-s-2`, rect: [7, 49, 63, 55] },
  ]),
  s = [
    [-129.5, -77],
    [-63, -7],
    [7, 63],
    [77, 129.5],
  ],
  c = [
    [-91.5, -55],
    [-49, -10.5],
    [10.5, 49],
    [55, 91.5],
  ],
  l = Object.freeze([
    {
      key: `cathedral`,
      letter: `A`,
      x: -103,
      z: -51.5,
      q: 0,
      block: [-129.5, -91.5, -77, -10.5],
      flag: [-103, -18],
      parvis: [-121, -26, -85, -10.5],
      lawn: [-129.5, -91.5, -77, -26],
      fence: !0,
    },
    {
      key: `parkade`,
      letter: `D`,
      x: 103,
      z: 52,
      q: 2,
      block: [77, 10.5, 129.5, 91.5],
      flag: [103, 22],
      forecourt: [79, 10.5, 127, 33],
      driveway: [109, 6, 121, 33],
    },
    {
      key: `crane`,
      letter: `C`,
      x: 35,
      z: -44,
      q: 2,
      block: [7, -91.5, 63, -10.5],
      flag: [35, -40],
      hoarding: [9, -64, 61, -12],
      gate: [7, -38, 9, -30],
    },
    {
      key: `arcade`,
      letter: `B`,
      x: -35,
      z: 56.5,
      q: 0,
      block: [-63, 10.5, -7, 91.5],
      flag: [-35, 40],
      forecourt: [-49, 10.5, -21, 21.5],
    },
  ]),
  u = Object.freeze([
    [`A`, `Cathedral Square`, -103, -18],
    [`B`, `Market Arcade`, -35, 40],
    [`E`, `Central Plaza`, 0, 0],
    [`C`, `Northgate Tower`, 35, -40],
    [`D`, `Car Park`, 103, 22],
  ]),
  d = [
    `mercantile`,
    `drugstore`,
    `tenement`,
    `cannery`,
    `hotel`,
    `brownstones`,
    `galleries`,
    `postoffice`,
    `hSeventies`,
    `coffee`,
    `bank`,
    `netloft`,
    `firehouse`,
    `precinct`,
    `library`,
    `delacroix`,
    `hHaussmann`,
    `moBank`,
    `canalshops`,
  ].filter((e) => t[e] && t[e].D <= 18 && t[e].W >= 11 && t[e].W <= 24),
  f = [`trust`, `sugar`, `bellweather`, `civic`, `exchange`, `herald`].filter(
    (e) => t[e] && t[e].D <= 20,
  ),
  p = (e) => {
    let t = 2166136261;
    for (let n = 0; n < e.length; n++)
      t = Math.imul(t ^ e.charCodeAt(n), 16777619);
    return (t >>> 0) / 4294967296;
  },
  m = (e, t, n = 0) =>
    e[0] < t[2] + n && t[0] < e[2] + n && e[1] < t[3] + n && t[1] < e[3] + n,
  h = (e, t, n) => t > e[0] && t < e[2] && n > e[1] && n < e[3],
  g = { n: [0, -1], s: [0, 1], w: [-1, 0], e: [1, 0] };
function _(n, a, o, s, c, { towers: l = !1, pool: u = d } = {}) {
  let h = o === `n` || o === `s`,
    _ = h ? a[0] : a[1],
    v = h ? a[2] : a[3],
    y = [],
    b = _ + 0.3,
    x = 0;
  for (; b < v - 10.5;) {
    let d = v - b - 0.3,
      _ = (l && (x === 0 || d < 26) && p(s + x) < 0.4 ? f : u).filter(
        (e) => t[e].W <= d && t[e].D <= c,
      );
    if (!_.length) break;
    let S = Math.min(...u.map((e) => t[e].W)),
      C = (e) => {
        let n = d - t[e].W - 0.4;
        return n <= 1.5 || n >= S + 0.4;
      },
      w = _.some(C) ? _.filter(C) : _,
      T = w[Math.floor(p(s + `:` + x) * w.length)],
      E = t[T],
      D = b + E.W / 2,
      O = E.D / 2,
      [k, A] =
        o === `n`
          ? [D, a[1] + O]
          : o === `s`
            ? [D, a[3] - O]
            : o === `w`
              ? [a[0] + O, D]
              : [a[2] - O, D],
      j = h
        ? [D - E.W / 2, A - E.D / 2, D + E.W / 2, A + E.D / 2]
        : [k - E.D / 2, D - E.W / 2, k + E.D / 2, D + E.W / 2];
    if (r(k, A) < Math.hypot(E.W, E.D) / 2 + 6 || m(j, i, 1) || e(j)) {
      (y.push(
        h
          ? [b, a[1], Math.min(v, b + 6), a[3]]
          : [a[0], b, a[2], Math.min(v, b + 6)],
      ),
        (b += 6),
        x++);
      continue;
    }
    (n.push({
      id: `plan-${s}-${x}`,
      key: T,
      x: +k.toFixed(2),
      z: +A.toFixed(2),
      rotY: Math.atan2(...g[o]),
      rect: j,
    }),
      (b += E.W + 0.4),
      x++);
  }
  return y;
}
function v() {
  let e = [],
    f = [],
    p = [],
    g = [],
    v = [],
    y = [],
    b = [],
    x = l.map((e) => e.block),
    S = (e, t) =>
      [-140, -70, 0, 70, 140].some((t) => Math.abs(e - t) < 12) &&
      [-102, 0, 102].some((e) => Math.abs(t - e) < 12);
  for (let e of [-70, 70, 0])
    for (let t of [-1, 1])
      for (let n = -88; n <= 88; n += 11) {
        let a = e + t * 4.9;
        !S(a, n) &&
          !h(i, a, n) &&
          Math.abs(n) > 12 &&
          r(a, n) > 8 &&
          y.push([a, n]);
      }
  for (let e of [-1, 1])
    for (let t = -128; t <= 128; t += 11) {
      let n = e * 6.9;
      !S(t, n) && Math.abs(t) > 36 && r(t, n) > 8 && y.push([t, n]);
    }
  for (let [t, n] of s)
    for (let [i, a] of c) {
      let o = [t, i, n, a];
      if ((b.push(o), x.some((e) => m(e, o)))) continue;
      let s = Math.abs(i - 55) < 0.1 || Math.abs(i + 49) < 0.1,
        c = Math.abs(a - 49) < 0.1 || Math.abs(a + 55) < 0.1,
        l = `${t}:${i}`,
        u = [];
      (s ||
        u.push(
          ..._(e, [t, i, n, i + 16 + 2], `n`, l + `n`, 18, { towers: !0 }),
        ),
        c ||
          u.push(
            ..._(e, [t, a - 16 - 2, n, a], `s`, l + `s`, 18, { towers: !0 }),
          ));
      let d = s ? i : i + 16 + 2.4,
        h = c ? a : a - 16 - 2.4;
      (u.push(..._(e, [t, d, t + 16, h], `w`, l + `w`, 16)),
        u.push(..._(e, [n - 16, d, n, h], `e`, l + `e`, 16)));
      let g = [t + 16 + 1, d + 0.5, n - 16 - 1, h - 0.5];
      g[2] - g[0] > 8 &&
        g[3] - g[1] > 6 &&
        (r((g[0] + g[2]) / 2, (g[1] + g[3]) / 2) > 10 ? f : p).push({
          rect: g,
        });
      for (let e of u) p.push({ rect: e, kind: `pocket` });
    }
  for (let e of l) {
    if ((e.parvis && g.push({ rect: e.parvis, kind: `parvis` }), e.lawn)) {
      p.push({ rect: e.lawn, kind: `churchyard` });
      for (let t = 0; t < 12; t++) {
        let n = e.lawn[0] + 4 + (t % 2) * (e.lawn[2] - e.lawn[0] - 8),
          r = e.lawn[1] + 5 + Math.floor(t / 2) * 11;
        r < e.lawn[3] - 3 && y.push([n, r, `yard`]);
      }
    }
    (e.fence &&
      v.push({
        rect: e.block,
        gates: [
          [-103, -10.5, 14],
          [-129.5, -60, 6],
          [-77, -60, 6],
        ],
      }),
      e.forecourt && g.push({ rect: e.forecourt, kind: `forecourt` }),
      e.driveway && f.push({ rect: e.driveway, kind: `driveway` }),
      e.hoarding &&
        v.push({ rect: e.hoarding, hoarding: !0, gates: [[9, -34, 8]] }));
  }
  (_(e, [77, 72, 129.5, 91.5], `s`, `D-s`, 19.5),
    p.push(
      { rect: [77, 33, 82.5, 72], kind: `path` },
      { rect: [123.5, 33, 129.5, 72], kind: `path` },
    ),
    _(e, [7, -91.5, 63, -73], `n`, `C-n`, 18.5, { towers: !0 }),
    f.push({ rect: [9, -72, 61, -65], kind: `site` }),
    _(e, [-63, 21.5, -49, 91.5], `w`, `B-w`, 14, {
      pool: d.filter((e) => t[e].D <= 14),
    }),
    _(e, [-21, 21.5, -7, 91.5], `e`, `B-e`, 14, {
      pool: d.filter((e) => t[e].D <= 14),
    }));
  for (let t of e) {
    let e = t.id.startsWith(`plan-B-w-`)
      ? -49 - t.rect[2]
      : t.id.startsWith(`plan-B-e-`)
        ? -21 - t.rect[0]
        : 0;
    Math.abs(e) > 0.001 &&
      Math.abs(e) < 3 &&
      ((t.x = +(t.x + e).toFixed(2)),
      (t.rect = [t.rect[0] + e, t.rect[1], t.rect[2] + e, t.rect[3]]));
  }
  return (
    p.push({
      line: n.filter(([e, t]) => Math.abs(e) < 134 && Math.abs(t) < 96),
      width: 22,
      kind: `linear`,
    }),
    {
      streets: a,
      alleys: o,
      blocks: b,
      buildings: e,
      parking: f,
      greens: p,
      plazas: g,
      fences: v,
      trees: y,
      setpieces: l,
      flags: u,
      square: i,
      rail: n,
    }
  );
}
var y = Object.freeze({
  mercantile: [[-6.45, 6.45]],
  cedar: [[-3.75, 1]],
  millworks: [[-3.3, 3.3]],
  bank: [[-3.1, 3.1]],
  cannery: [
    [-9, -3.8],
    [-2.6, 2.6],
  ],
  firehouse: [[-8, 8]],
  chapel: [[-2.5, 2.5]],
  rialto: [
    [-5.2, -0.4],
    [0.4, 5.2],
  ],
  garage: [[-7.45, 6]],
  hotel: [[-8.45, 8.45]],
  postoffice: [[-4.33, 4.33]],
  anchor: [[-4, 1]],
  coldstore: [[-9, 5]],
  netloft: [[-7.2, 7.5]],
  depot: [
    [-9.57, -4.14],
    [4.14, 13],
  ],
  meridian: [
    [-11.45, -9.55],
    [-8.45, -6.55],
    [-5.45, 5.45],
    [6.55, 8.45],
    [9.55, 11.45],
  ],
  sound: [[-6.5, 6.5]],
  harborview: [
    [-9.45, -7.69],
    [-6.59, -4.84],
    [-3.74, 3.74],
    [4.84, 6.59],
    [7.69, 9.45],
  ],
  civic: [[-12, 12]],
  trust: [
    [-10.45, -8.41],
    [-7.31, -5.26],
    [-4.16, 4.16],
    [5.26, 7.31],
    [8.41, 10.45],
  ],
  sugar: [[-5.71, -0.57]],
  delacroix: [
    [-7.45, -5.35],
    [-4.25, -2.15],
    [-1.05, 1.05],
    [2.15, 4.25],
    [5.35, 7.45],
  ],
  harborking: [
    [-5.45, 2.45],
    [3.55, 5.45],
  ],
  majestic: [
    [-9.45, -7.69],
    [-6.59, -4.84],
    [-3.74, 3.74],
    [4.84, 6.59],
    [7.69, 9.45],
  ],
  galleries: [
    [-8.45, -6.55],
    [-5.45, 2.45],
    [3.55, 5.45],
    [6.55, 8.45],
  ],
  bellweather: [
    [-10.45, -8.41],
    [-7.31, -5.26],
    [-4.16, 4.16],
    [5.26, 7.31],
    [8.41, 10.45],
  ],
  orchid: [[-6.1, 6.1]],
  brownstones: [],
  tenement: [[-8, 8]],
  busdepot: [
    [-10.45, -8.41],
    [-7.31, 7.31],
    [8.41, 10.45],
  ],
  exchange: [[-4.67, 4.67]],
  coffee: [
    [-11, -1],
    [1, 7],
  ],
  drugstore: [[-7.8, 6.45]],
  precinct: [[-2.8, 2.8]],
  creole: [[-7, -2]],
  herald: [[-8, 8]],
  castellane: [[-4.5, 4.5]],
  market: [
    [-10.45, -7.88],
    [-6.78, 6.78],
    [7.88, 10.45],
  ],
  eightball: [[-5.7, 5.7]],
  canalshops: [[-11.45, 11.45]],
});
export { a, l as i, o as n, v as o, u as r, r as s, y as t };
//# sourceMappingURL=lab-doors-BzTQZbnf.js.map
