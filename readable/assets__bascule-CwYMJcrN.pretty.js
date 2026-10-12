/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { Zn as e } from "./graphics-quality-BsjABS0s.js";
import { q as t } from "./sim-D8F3HPJq.js";
import { n } from "./streetlife-Ce2BEs1X.js";
import { t as r } from "./prop-collision-1B5nWLcW.js";
var i = e({
    BANK: () => 8,
    BASCULE_CLIMATE: () => s,
    BASCULE_CONFIG: () => z,
    BASCULE_ID: () => a,
    BASCULE_NAME: () => o,
    BASCULE_ROUTES: () => P,
    BASCULE_ROUTES_UP: () => F,
    BASCULE_RUSH: () => ee,
    BED: () => -5,
    GALLERY: () => d,
    HINGE: () => 15,
    HW: () => 7,
    LEAF: () => 15,
    PLAY: () => c,
    QUAY: () => 58,
    S: () => 12,
    TOWER: () => l,
    WALK: () => u,
    buildBascule: () => B,
  }),
  a = `bascule-v1`,
  o = `Bascule`,
  s = Object.freeze({
    fog: 0.8,
    nearHaze: 0.24,
    nearHazeFalloff: 0.011,
    heightFalloff: 0.008,
    overcast: 0.2,
    rain: 0,
    snow: 0,
    clouds: 0.35,
    exposure: 1.15,
    tod: 20.67,
    visibility: 105,
    grade: Object.freeze({
      key: Object.freeze({ color: 10466008, intensity: 0.55 }),
      hemi: Object.freeze({ sky: 7308472, ground: 4868178, intensity: 1.5 }),
      exposure: 1.18,
    }),
  }),
  c = Object.freeze([-118, -35, 118, 35]),
  l = Object.freeze({
    x: 26,
    hx: 9,
    hz: 12,
    top: 40,
    arch: 6,
    pierHx: 11,
    pierHz: 15,
  }),
  u = Object.freeze({ y: 32, z: 5.2, hw: 1.8, roof: 35.8, chord: 28.8 }),
  d = Object.freeze({ floor: 32, ceil: 36 }),
  f = 0.6,
  p = 2.7,
  m = 4,
  h = Object.freeze({
    in0: 6.4,
    in1: 8.4,
    out0: -6.4,
    out1: -8.4,
    zA: 8.5,
    zB: 10.5,
    z0: 7.6,
    z1: 11.4,
  }),
  g = (e, t) => [-e, -t],
  _ = -l.x,
  v = (e) => _ + e;
function y(e) {
  let t = [
    [v(-7.4), e * 4.6, 12],
    [v(-7.4), e * 6.6, 12],
    [v(-7.4), e * 8, 12],
  ];
  for (let n = 0; n < 5; n++) {
    let r = n % 2 ? h.zB : h.zA,
      i = n % 2 == 0,
      a = i ? h.out0 : h.in0,
      o = i ? h.in0 : h.out0,
      s = 12 + n * m;
    for (let i of n ? [0.7] : [0.1, 0.75])
      t.push([v(a + (o - a) * i), e * r, +(s + m * i).toFixed(2)]);
    (t.push([v(i ? 7.9 : -7.9), e * 9.5, s + m]),
      n < 4 && t.push([v(i ? 7.9 : -7.9), e * (i ? h.zB : h.zA), s + m]));
  }
  return (t.push([v(7.4), e * 5.2, d.floor], [v(9.4), e * u.z, u.y]), t);
}
var b = (e) => [
    [-10, e * u.z, u.y],
    [-3, e * u.z, u.y],
    [4, e * u.z, u.y],
    [11, e * u.z, u.y],
  ],
  x = (e) => e.map(([e, t, n, ...r]) => [-e, -t, n, ...r]),
  S = Object.freeze([
    { x: -90, z: 0 },
    { x: 90, z: 0 },
  ]),
  C = [
    [S[0].x, S[0].z, 12],
    [-80, 0, 12],
    [-68, 0, 12],
    [-58, 0, 12],
    [-48, 0, 12],
  ],
  w = (e) =>
    e < 0
      ? [
          [-58, 0.4, 12],
          [-48, 0.4, 12],
          [-39, -0.4, 12],
        ]
      : [
          [-58, 2, 12],
          [-48, 3.2, 12],
          [-40, 3.6, 12],
        ],
  T = [
    [S[0].x, S[0].z, 12],
    [-91, -4.8, 12],
    [-91.6, -8, 12],
    [-88, -8, 10],
    [-83, -8, 8],
    [-80.5, -14, 8],
    [-80.5, -18.5, 8],
    [-80.5, -25.5, 8],
    [-77, -25.5, 8],
    [-72, -24, 8],
    [-62, -12, 8],
    [-55, -1, 8],
    [-46, 0, 8],
    [-38, 0, 8],
    [-31, -6, 8],
    [-23.2, -10, 8],
    [-23.2, -14.2, 8],
    [-27, -14.2, 9.5],
    [-31, -14.2, 11.5],
    [-34, -13.3, 12],
    [-36, -11, 12],
  ],
  E = [...T, [-36, -5, 12], [-37, 0, 12]],
  D = [
    [-37, 0, 12],
    [-26, 0, 12],
    [-16, 0, 12],
    [-8, 0, 12],
  ],
  O = [...D, [0, 0, 12], ...x(D).reverse()],
  k = (e) => [...y(e), ...b(e), ...x(y(-e)).reverse()],
  A = (e, t, n) => [...e, ...t, ...x(n).reverse()],
  j = {
    deck: A(C, O, C),
    walkn: A([...C.slice(0, 4), ...w(1)], k(1), [...C.slice(0, 4), ...w(-1)]),
    walks: A([...C.slice(0, 4), ...w(-1)], k(-1), [...C.slice(0, 4), ...w(1)]),
    engine: A(E, O, E),
  },
  M = {
    ...j,
    deck: A([...C.slice(0, 4), ...w(1)], k(1), [...C.slice(0, 4), ...w(-1)]),
    engine: A(T, k(-1), T),
  },
  N = (e) =>
    Object.fromEntries(
      Object.entries(e).map(([e, t]) => [
        e,
        Object.freeze(t.map((e) => Object.freeze(e.slice()))),
      ]),
    ),
  P = N(j),
  F = N(M),
  I = (e, t, n, r, i, a, o = {}) => ({
    id: `mcom-${e}`,
    letter: t,
    name: n,
    pos: [r, i, a],
    ...o,
  }),
  L = [
    { pos: [-90, 12, 2.5], yaw: -Math.PI / 2 },
    { pos: [-88, 12, -2.5], yaw: -Math.PI / 2 },
    { pos: [-l.x - 4, 12, 0], yaw: -Math.PI / 2 },
    { pos: [l.x + 4, 12, 0], yaw: -Math.PI / 2 },
  ],
  R = [
    { pos: [-58, 8, -26], yaw: Math.PI / 2 },
    { pos: [58, 8, 26], yaw: Math.PI / 2 },
    { pos: [90, 12, 2.5], yaw: Math.PI / 2 },
    { pos: [110, 12, 0], yaw: Math.PI / 2 },
  ],
  ee = Object.freeze({
    attackers: 0,
    zones: [
      {
        name: `South Embankment`,
        stations: [
          I(`1a`, `A`, `South gatehouse, downstream`, -62, 8, -10.6, {
            lane: `engine`,
            lanes: [`engine`],
          }),
          I(`1b`, `B`, `South gatehouse, upstream`, -62, 8, 10.6, {
            lane: `deck`,
            lanes: [`deck`, `walkn`],
          }),
        ],
        bases: [L[0], R[0]],
      },
      {
        name: `South Tower`,
        tickets: 200,
        stations: [
          I(`2a`, `A`, `South stair hall`, v(-7.6), 12, -9.6, {
            lane: `walks`,
            lanes: [`walks`],
          }),
          I(`2b`, `B`, `South gallery`, v(-1), d.floor, 0, {
            lane: `walkn`,
            lanes: [`walkn`, `walks`],
          }),
        ],
        bases: [L[1], R[1]],
      },
      {
        name: `The Walkways`,
        tickets: 200,
        stations: [
          I(`3a`, `A`, `East walkway`, 4, u.y, -u.z, {
            lane: `walks`,
            lanes: [`walks`],
          }),
          I(`3b`, `B`, `North tower arch`, l.x + 2, 12, 0, {
            lane: `deck`,
            lanes: [`deck`, `walkn`, `engine`],
          }),
        ],
        bases: [L[2], R[2]],
      },
      {
        name: `North Embankment`,
        tickets: 220,
        stations: [
          I(`4a`, `A`, `North gatehouse, downstream`, 62, 8, 10.6, {
            lane: `engine`,
            lanes: [`engine`],
          }),
          I(`4b`, `B`, `North gatehouse, upstream`, 62, 8, -10.6, {
            lane: `deck`,
            lanes: [`deck`, `walks`],
          }),
        ],
        bases: [L[3], R[3]],
      },
    ],
  }),
  z = Object.freeze({
    size: 1600,
    res: 4,
    waterLevel: 0,
    erosion: !1,
    droplets: 0,
    rim: [1500, 1700],
    relief: 0,
    padReach: 30,
    surroundScale: 0.2,
    biome: `storm`,
    river: { x0: 9e3, rot: 0, flip: !1, lake: { x: 9e3, z: 9e3, r: 100 } },
    plateau: { x: 9e3, z: 9e3, r: 10, top: 9 },
    roads: [],
    flatten: [],
    platforms: [
      { x: 0, z: 0, bounds: [-700, -700, 700, 700], height: 12, blend: 2 },
      { x: 0, z: 0, bounds: [-95.2, -35, -54, 35], height: 8, blend: 1 },
      { x: 0, z: 0, bounds: [54, -35, 95.2, 35], height: 8, blend: 1 },
      ...[
        [-96.01, 8.01, -90, 35],
        [-96.01, -35, -90, -8.01],
      ].flatMap(([e, t, n, r]) => [
        { x: 0, z: 0, bounds: [e, t, n, r], height: 8, blend: 1 },
        { x: 0, z: 0, bounds: [-n, -r, -e, -t], height: 8, blend: 1 },
      ]),
      { x: 0, z: 0, bounds: [-54, -900, 54, 900], height: -5, blend: 1 },
    ],
    forest: {
      target: 0,
      spacing: 3.2,
      cover: 0.9,
      roadClear: [0, 0],
      treeLine: 200,
      mix: [0.45, 0.4, 0.15],
      clearings: [],
      lanes: [],
      planted: [],
    },
  });
function B(e, { collision: i = !0 } = {}) {
  let _ = {
      id: a,
      name: o,
      size: 600,
      bounds: [-300, -300, 300, 300],
      objects: [],
      colliderDefs: [],
      buildings: [],
      observationRooms: [],
      towerRooms: [],
      routes: P,
      laneDirect: 14,
      spawnLevel: 3,
      spawnRadius: 28,
      hqSafeDistance: 18,
      focus: [0, 18, 0],
      climate: s,
      roadDriving: !1,
      yards: [],
      boards: [],
      lifts: [],
      vehicleSpawns: [],
      landmarks: [],
      lights: [],
      fixtureSpills: [],
      signs: [],
      urbanBuildings: [],
      ladders: [],
      practicals: 1,
      staticShadows: !0,
      playBounds: [...c],
      viewBounds: [c[0] - 6, c[1] - 12, c[2] + 6, c[3] + 12],
      spawnBounds: [c[0] + 2, c[1] + 2, c[2] - 2, c[3] - 2],
      scatterExclude: [[c[0] - 60, c[1] - 60, c[2] + 60, c[3] + 60]],
      rush: ee,
      homeBases: [
        { id: `hq-0`, pos: L[0].pos.slice(), yaw: -Math.PI / 2 },
        { id: `hq-1`, pos: R[0].pos.slice(), yaw: Math.PI / 2 },
      ],
      objectives: [
        {
          id: `conquest-a`,
          letter: `A`,
          name: `South Gatehouse`,
          pos: [-62, 8, 10.6],
          radius: 8,
        },
        {
          id: `conquest-b`,
          letter: `B`,
          name: `The Walkways`,
          pos: [0, u.y, 0],
          radius: 8,
        },
        {
          id: `conquest-c`,
          letter: `C`,
          name: `North Gatehouse`,
          pos: [62, 8, -10.6],
          radius: 8,
        },
      ],
      noSpawn: [
        [-58.8, -40, -15, -7.6],
        [-58.8, 7.6, -15, 40],
        [-15, -40, 15, 40],
        [15, -40, 58.8, -7.6],
        [15, 7.6, 58.8, 40],
      ],
    },
    b = {
      epoch: null,
      fallKill: 3,
      bankY: 8,
      routes: P,
      routesUp: F,
      leaves: [
        { id: `leaf-s`, hinge: -15, dir: 1, len: 15, hw: 7, y: 12, t: 0.85 },
        { id: `leaf-n`, hinge: 15, dir: -1, len: 15, hw: 7, y: 12, t: 0.85 },
      ],
      flights: [],
      slabs: [],
      glows: [],
      spawnFloors: [
        [-95.2, -7, -58, 7],
        [58, -7, 95.2, 7],
        [-37, -15, -15, 15],
        [15, -15, 37, 15],
        [-58, -7, -37, 7],
        [37, -7, 58, 7],
      ],
      cars: [],
      barriers: [],
      chains: [],
      towers: [-l.x, l.x],
      engineHouses: [],
      quay: 58,
      walk: u,
      gallery: d,
      lift: t,
    };
  _.bascule = b;
  let x = (e, t, n, r, i, a) => {
      b.slabs.push(
        [Math.min(e, r), t, Math.min(n, a), Math.max(e, r), i, Math.max(n, a)],
        [
          -Math.max(e, r),
          t,
          -Math.max(n, a),
          -Math.min(e, r),
          i,
          -Math.min(n, a),
        ],
      );
    },
    S = _.objects,
    C = _.colliderDefs,
    w = _.lights,
    T = (e) =>
      /timber|wood|crate/.test(e)
        ? `wood`
        : /iron|metal|enamel|rail|zinc|glass|mullion|hazard|superWhite|grating/.test(
              e,
            )
          ? `metal`
          : `concrete`,
    E = (
      e,
      t,
      n,
      r,
      i,
      a,
      o,
      s,
      {
        solid: c = !0,
        cast: l = !0,
        surface: u = null,
        pen: d = null,
        mirror: f = !0,
        ry: p = 0,
        draw: m = !0,
      } = {},
    ) => {
      let h = (e, t, r, i, o) => {
        (m &&
          S.push({
            id: e,
            kind: `box`,
            x: (t + i) / 2,
            y: n,
            z: (r + o) / 2,
            sx: i - t,
            sy: a - n,
            sz: o - r,
            material: s,
            cast: l,
            ...(p ? { ry: p } : {}),
          }),
          c &&
            C.push({
              id: `demo-` + e,
              aabb: [t, n, r, i, a, o],
              surface: u ?? T(s),
              ...(d ? { pen: d } : {}),
            }));
      };
      (h(f ? e + `-s` : e, t, r, i, o), f && h(e + `-n`, -i, -o, -t, -r));
    },
    D = (e, t, n, r, i, a, o, s, c = {}) =>
      E(e, t, n, r, i, a, o, s, { ...c, solid: !1, cast: !1 }),
    O = (e, t, n, r, i, a, o, { solid: s = !0, mirror: c = !0 } = {}) => {
      for (let [l, [u, d]] of c
        ? [
            [e + `-s`, [t, r]],
            [e + `-n`, g(t, r)],
          ]
        : [[e, [t, r]]])
        (S.push({
          id: l,
          kind: `cylinder`,
          x: u,
          y: n,
          z: d,
          sx: i,
          sy: a,
          sz: i,
          material: o,
          cast: !0,
        }),
          s &&
            C.push({
              id: `demo-` + l,
              aabb: [
                u - i * 0.75,
                n,
                d - i * 0.75,
                u + i * 0.75,
                n + a,
                d + i * 0.75,
              ],
              surface: T(o),
            }));
    },
    k = (e, t, n, r, i, a, o, s, c = !0) => {
      (S.push({
        id: c ? e + `-s` : e,
        kind: `gable`,
        x: t,
        y: n,
        z: r,
        sx: i,
        sy: a,
        sz: o,
        material: s,
        cast: !0,
      }),
        c &&
          S.push({
            id: e + `-n`,
            kind: `gable`,
            x: -t,
            y: n,
            z: -r,
            sx: i,
            sy: a,
            sz: o,
            material: s,
            cast: !0,
          }));
    },
    A = (
      e,
      t,
      n,
      r,
      i,
      a,
      o,
      {
        material: s = `coping`,
        thick: c = 0.3,
        base: l = null,
        view: u = !1,
      } = {},
    ) => {
      if (u)
        for (let e of [1, -1])
          b.flights.push(
            e > 0 ? [t, n, r, i, a, o, l] : [-n, -t, -r, -i, a, o, l],
          );
      let d = o - a,
        f = Math.abs(i - r),
        p = Math.hypot(d, f),
        m = (r + i) / 2,
        h = (t + n) / 2,
        g = (e, t, n, r, i, m, h, g) => {
          if (
            (C.push({
              id: `demo-` + e,
              surface: `concrete`,
              obb: {
                x: t,
                z: n,
                yaw: (r * Math.PI) / 2,
                hx: (m - i) / 2,
                hz: f / 2,
                y0: l ?? a - (c > 0 ? c : d),
                y1: o,
                ramp: { z0: -f / 2, z1: f / 2, y: a, rise: d },
                ...(c > 0 && l == null ? { thickness: c } : {}),
              },
            }),
            u)
          )
            return;
          if (
            (S.push({
              id: e,
              kind: `box`,
              x: t,
              y: a + d / 2 - 0.15,
              z: n,
              sx: m - i,
              sy: 0.3,
              sz: p,
              material: s,
              cast: !0,
              rotX: -Math.atan(d / f),
              ry: (r * Math.PI) / 2,
            }),
            l != null)
          ) {
            let t = Math.max(2, Math.round(d / 0.33));
            for (let r = 0; r < t; r++) {
              let o = h + ((g - h) * r) / t,
                c = h + ((g - h) * (r + 1)) / t,
                u = a + (d * (r + 0.5)) / t;
              u - l < 0.05 ||
                S.push({
                  id: `${e}-mass-${r}`,
                  kind: `box`,
                  x: (o + c) / 2,
                  y: l,
                  z: n,
                  sx: Math.abs(c - o) + 0.01,
                  sy: u - l,
                  sz: m - i,
                  material: s,
                  cast: !1,
                });
            }
          }
          let _ = Math.round(d / 0.25);
          for (let t = 1; t < _; t++) {
            let r = h + ((g - h) * t) / _,
              o = a + (d * t) / _;
            S.push({
              id: `${e}-tread-${t}`,
              kind: `box`,
              x: r,
              y: o - 0.02,
              z: n,
              sx: 0.06,
              sy: 0.05,
              sz: m - i,
              material: `ironBlack`,
              cast: !1,
            });
          }
        },
        _ = Math.sign(i - r);
      (g(e + `-s`, m, h, _, t, n, r, i),
        g(e + `-n`, -m, -h, -_, -n, -t, -r, -i));
    },
    j = (e, t, n, r, i, a, o = `ironBlack`, s = !0, c = p) => {
      let l = Math.abs(r - t) >= Math.abs(i - n),
        u = (e, t, n, r, i) => {
          let s = l ? r - t : i - n,
            u = [],
            d = (t, n, r, i, a, s, c) => {
              (S.push({
                id: `${e}-${t}`,
                kind: `box`,
                x: (n + a) / 2,
                y: r,
                z: (i + c) / 2,
                sx: Math.abs(a - n),
                sy: s - r,
                sz: Math.abs(c - i),
                material: o,
                cast: !1,
              }),
                u.push([
                  Math.min(n, a),
                  r,
                  Math.min(i, c),
                  Math.max(n, a),
                  s,
                  Math.max(i, c),
                ]));
            };
          (d(
            `top`,
            l ? t : t - 0.04,
            a + 1.02,
            l ? n - 0.04 : n,
            l ? r : t + 0.04,
            a + 1.1,
            l ? n + 0.04 : i,
          ),
            d(
              `mid`,
              l ? t : t - 0.02,
              a + 0.5,
              l ? n - 0.02 : n,
              l ? r : t + 0.02,
              a + 0.54,
              l ? n + 0.02 : i,
            ));
          let f = Math.max(1, Math.round(Math.abs(s) / 1.6));
          for (let e = 0; e <= f; e++) {
            let o = e / f,
              s = l ? t + (r - t) * o : t,
              c = l ? n : n + (i - n) * o;
            d(
              `post-${e}`,
              s - 0.035,
              a,
              c - 0.035,
              s + 0.035,
              a + 1.02,
              c + 0.035,
            );
          }
          C.push({
            id: `demo-` + e,
            aabb: l
              ? [Math.min(t, r), a, n - 0.05, Math.max(t, r), a + c, n + 0.05]
              : [t - 0.05, a, Math.min(n, i), t + 0.05, a + c, Math.max(n, i)],
            surface: `metal`,
            pen: `bars`,
            shotBoxes: u,
            shotPen: `metal`,
          });
        };
      if ((u(s ? e + `-s` : e, t, n, r, i), s)) {
        let [a, o] = g(t, n),
          [s, c] = g(r, i);
        u(
          e + `-n`,
          Math.min(a, s),
          l ? o : Math.min(o, c),
          Math.max(a, s),
          l ? o : Math.max(o, c),
        );
      }
    },
    M = (e, t, n, r, i, a, o, s, c = [], l = {}) => {
      let u = Math.abs(r - t) >= Math.abs(i - n),
        d = u ? t : n,
        f = u ? r : i,
        m = u ? n : t,
        h = u ? i : r,
        g = [...new Set([d, f, ...c.flatMap((e) => [e[0], e[1]])])]
          .filter((e) => e >= d && e <= f)
          .sort((e, t) => e - t),
        _ = 0;
      for (let [o, s, d, f, m] of c)
        if (d > a + 0.05 && l.fence !== !1 && !m) {
          let a = Math.abs(u ? i - n : r - t) / 2,
            c = u ? (n + i) / 2 : (t + r) / 2,
            f = (e, t) =>
              C.push({
                id: `demo-` + e,
                aabb: t,
                surface: `concrete`,
                shotBoxes: [
                  [t[0], -990, t[2], t[0] + 0.01, -989.99, t[2] + 0.01],
                ],
                shotPen: `concrete`,
              }),
            m = u
              ? [o, d, c - a, s, d + p + 0.2, c + a]
              : [c - a, d, o, c + a, d + p + 0.2, s];
          (f(`${e}-sill-${o.toFixed(1)}-${d.toFixed(1)}-s`, m),
            l.mirror !== !1 &&
              f(`${e}-sill-${o.toFixed(1)}-${d.toFixed(1)}-n`, [
                -m[3],
                m[1],
                -m[5],
                -m[0],
                m[4],
                -m[2],
              ]));
        }
      for (let t = 0; t < g.length - 1; t++) {
        let n = g[t],
          r = g[t + 1],
          i = (n + r) / 2;
        if (r - n < 0.02) continue;
        let d = c
            .filter((e) => i > e[0] && i < e[1])
            .map((e) => [e[2], e[3]])
            .sort((e, t) => e[0] - t[0]),
          f = a;
        for (let [t, i] of [...d, [o, o]])
          (t - f > 0.02 &&
            (u
              ? E(`${e}-${_++}`, n, f, m, r, t, h, s, l)
              : E(`${e}-${_++}`, m, f, n, h, t, r, s, l)),
            (f = Math.max(f, i)));
      }
    },
    N = (e, t, n, r, i, a, o = {}) => {
      for (let [s, c, l] of o.mirror === !1
        ? [[e, n, o.ry ?? 0]]
        : [
            [e, n, o.ry ?? 0],
            [-e, -n, (o.ry ?? 0) + Math.PI],
          ])
        w.push({
          kind: `quad`,
          x: s,
          y: t,
          z: c,
          w: r,
          h: i,
          col: a,
          ry: l,
          rx: o.rx ?? 0,
          gain: o.gain ?? 1.6,
          mode: o.mode ?? `steady`,
          phase: o.phase ?? (((s * 7.3 + c * 3.1) % 7) + 7) % 7,
          group: null,
        });
    },
    I = (e, t, n, r, i, a = 0.9, o = !0) => {
      for (let [s, c] of o ? [[e, n], g(e, n)] : [[e, n]])
        w.push({
          kind: `pool`,
          x: s,
          y: t,
          z: c,
          r,
          col: i,
          gain: a,
          group: null,
        });
    },
    z = (e, t, n, r = 5, i = 14) => {
      for (let [a, o] of [[e, n], g(e, n)])
        _.fixtureSpills.push({
          pos: [a, t, o],
          intensity: r,
          distance: i,
          group: null,
        });
    },
    B = 16754250,
    V = 16766624,
    H = 16773336,
    U = n(_, (e, t) =>
      Math.abs(e) > 58 && Math.abs(e) < 96 && Math.abs(t) > 7 ? 8 : 12,
    );
  for (let [e, t, n] of [
    [-400, -35, 12],
    [-35, 35, 8],
    [35, 400, 12],
  ])
    E(`quay-wall-${e}`, -61, -5, e, -53.8, n, t, `stone`, {
      cast: !1,
      solid: !1,
    });
  for (let e = -35; e < 35; e += 7)
    E(`quay-top-${e}`, -61, 7.2, e, -53.8, 8, e + 7, `stone`, {
      cast: !1,
      solid: !0,
      draw: !1,
    });
  for (let [e, t, n] of [
    [-400, -35, 12],
    [-35, 35, 8],
    [35, 400, 12],
  ])
    E(`quay-coping-${e}`, -54.8, n, e, -53.7, n + 0.12, t, `coping`, {
      solid: !1,
      cast: !1,
    });
  for (let [e, t, n] of [
    [-400, -35, 12],
    [-35, -2.2, 8],
    [2.2, 35, 8],
    [35, 400, 12],
  ]) {
    if (
      (E(
        `quay-balustrade-${e}`,
        n === 8 ? -54.6 : -58.6,
        n,
        e,
        n === 8 ? -53.8 : -57.8,
        n + 1.05,
        t,
        `limestone`,
        { solid: !1 },
      ),
      n !== 8)
    )
      continue;
    let r = e,
      i = t;
    for (let e = r; e < i - 0.01; e += 6) {
      let t = Math.min(i, e + 6);
      for (let [n, [r, i, a, o]] of [
        [`quay-balustrade-${e}-s`, [-54.6, e, -53.8, t]],
        [`quay-balustrade-${e}-n`, [53.8, -t, 54.6, -e]],
      ])
        C.push({
          id: `demo-` + n,
          aabb: [r, 8, i, a, 10.7, o],
          surface: `concrete`,
          shotBoxes: [[r, 8, i, a, 9.05, o]],
          shotPen: `concrete`,
        });
    }
  }
  for (let e = 0; e < 8; e++)
    E(
      `quay-steps-${e}`,
      -53.8,
      12 - 1.5 * e - 1.5,
      60 + e * 1.6,
      -52.3,
      12 - 1.5 * e,
      62 + e * 1.6,
      `stone`,
      { solid: !1 },
    );
  let W = -l.x,
    G = W - l.hx,
    K = W + l.hx,
    q = l.hz;
  for (let e of [-1, 1])
    S.push(
      {
        id: `pier-cutwater-${e}-s`,
        kind: `box`,
        x: W,
        y: -5,
        z: e * l.pierHz,
        sx: 15.6,
        sy: 16.6,
        sz: 15.6,
        material: `limestone`,
        cast: !1,
        ry: Math.PI / 4,
      },
      {
        id: `pier-cutwater-${e}-n`,
        kind: `box`,
        x: -W,
        y: -5,
        z: -e * l.pierHz,
        sx: 15.6,
        sy: 16.6,
        sz: 15.6,
        material: `limestone`,
        cast: !1,
        ry: Math.PI / 4,
      },
    );
  for (let e of [-1, 1])
    (j(
      `ledge-rail-z${e}`,
      W - l.pierHx,
      e * l.pierHz,
      W + l.pierHx,
      e * l.pierHz,
      12,
    ),
      j(
        `ledge-rail-out${e}`,
        W - l.pierHx,
        e < 0 ? -l.pierHz : 7,
        W - l.pierHx,
        e < 0 ? -7 : l.pierHz,
        12,
      ),
      j(
        `ledge-rail-in${e}`,
        W + l.pierHx,
        e < 0 ? -l.pierHz : 7,
        W + l.pierHx,
        e < 0 ? -7 : l.pierHz,
        12,
      ));
  let J = 12 + l.arch,
    Y = 14.5,
    X = d.floor + 1.1,
    Z = d.floor + 3.2,
    te = [
      [h.z0 + 0.2, h.z0 + 2.3],
      [-h.z0 - 2.3, -h.z0 - 0.2],
    ],
    Q = [
      [-99, 99, d.floor, d.floor, !0],
      [-99, 99, d.ceil, d.ceil, !0],
    ];
  (M(`tower-out`, G, -q, G + f, q, 12, l.top, `limestone`, [
    ...Q,
    [-7, 7, 12, J],
    ...te.map(([e, t]) => [e, t, 12, Y]),
    ...[-9.5, -3.2, 3.2, 9.5].map((e) => [e - 0.7, e + 0.7, X, Z]),
    ...[-9.5, 9.5].flatMap((e) => [
      [e - 0.6, e + 0.6, 17, 20],
      [e - 0.6, e + 0.6, 23, 26.5],
    ]),
  ]),
    M(`tower-in`, K - f, -q, K, q, 12, l.top, `limestone`, [
      ...Q,
      [-7, 7, 12, J],
      [-7, -u.z + u.hw, u.y, u.y + 3.2, !0],
      [u.z - u.hw, 7, u.y, u.y + 3.2, !0],
      ...[-9.5, 9.5].map((e) => [e - 0.7, e + 0.7, X, Z]),
      ...[-9.5, 9.5].flatMap((e) => [
        [e - 0.6, e + 0.6, 17, 20],
        [e - 0.6, e + 0.6, 23, 26.5],
      ]),
    ]));
  for (let e of [-1, 1])
    M(
      `tower-side${e}`,
      G + f,
      e < 0 ? -q : q - f,
      K - f,
      e < 0 ? -q + f : q,
      12,
      l.top,
      `limestone`,
      [
        ...Q,
        ...[W - 4, W + 4].map((e) => [e - 0.7, e + 0.7, X, Z]),
        ...[W - 5, W, W + 5].flatMap((e) => [
          [e - 0.6, e + 0.6, 17, 20],
          [e - 0.6, e + 0.6, 23, 26.5],
          [e - 0.6, e + 0.6, 28, 30.5],
        ]),
      ],
      { mirror: !0 },
    );
  for (let e of [-1, 1])
    M(
      `hall-wall${e}`,
      G + f,
      e < 0 ? -h.z0 : 7,
      K - f,
      e < 0 ? -7 : h.z0,
      12,
      d.floor,
      `limestoneWarm`,
      [[v(h.out1), v(h.out1) + 1.8, 12, Y]],
    );
  (E(`arch-vault`, G + f, J, -7, K - f, d.floor, 7, `limestoneWarm`, {
    solid: !1,
  }),
    E(`arch-ceiling`, G + f, J, -7, K - f, J + 0.8, 7, `limestoneWarm`, {
      draw: !1,
    }),
    E(
      `gallery-slab`,
      G + f,
      d.floor - 0.8,
      -7,
      K - f,
      d.floor,
      7,
      `limestoneWarm`,
      { draw: !1 },
    ),
    E(
      `gallery-ceiling`,
      G + f,
      d.ceil,
      -q + f,
      K - f,
      d.ceil + 0.4,
      q - f,
      `limestoneWarm`,
    ),
    E(`tower-crown`, G, d.ceil + 0.4, -q, K, l.top, q, `limestone`),
    E(
      `tower-cornice`,
      G - 0.4,
      l.top - 0.6,
      -q - 0.4,
      K + 0.4,
      l.top,
      q + 0.4,
      `limestoneWarm`,
      { solid: !1 },
    ));
  for (let [e, t] of [
    [G + 0.3, -q + 0.3],
    [G + 0.3, q - 0.3],
    [K - 0.3, -q + 0.3],
    [K - 0.3, q - 0.3],
  ])
    O(`turret-${e}-${t}`, e, 12, t, 1.5, l.top + 6 - 12, `limestone`);
  for (let e of [J + 0.25, 27.4, d.floor + 0.2, d.ceil + 0.6]) {
    let t = (t, n, r, i, a) =>
      E(`course-${e}-${t}`, n, e, r, i, e + 0.32, a, `limestoneWarm`, {
        solid: !1,
      });
    (t(`o`, G - 0.18, -q - 0.18, G + 0.1, q + 0.18),
      t(`i`, K - 0.1, -q - 0.18, K + 0.18, q + 0.18),
      t(`s`, G, -q - 0.18, K, -q + 0.1),
      t(`n`, G, q - 0.1, K, q + 0.18));
  }
  {
    let e = (e, t, n, r, i = 0.9, a = 2.2, o = !0) => {
      if (
        (r
          ? D(
              `lancet-${e}-${t}-${n}`,
              e - 0.04,
              t,
              n - i / 2,
              e + 0.04,
              t + a,
              n + i / 2,
              `glassDark`,
            )
          : D(
              `lancet-${e}-${t}-${n}`,
              e - i / 2,
              t,
              n - 0.04,
              e + i / 2,
              t + a,
              n + 0.04,
              `glassDark`,
            ),
        o)
      ) {
        let o = r ? e + (e < W ? -0.06 : 0.06) : e,
          s = r ? n : n + (n < 0 ? -0.06 : 0.06),
          c = r ? Math.PI / 2 : 0;
        b.glows.push(
          [o, t + a / 2, s, i * 0.86, a * 0.9, c],
          [-o, t + a / 2, -s, i * 0.86, a * 0.9, c],
        );
      }
    };
    for (let t of [G - 0.03, K + 0.03])
      for (let n of [-4.2, -1.4, 1.4, 4.2])
        for (let r of [21, 26.2])
          e(t, r, n, !0, 0.8, 2.4, ((Math.round(n * 10) + r) | 0) % 3 != 0);
    for (let t of [G - 0.03, K + 0.03])
      for (let n of [-9.5, -3.2, 3.2, 9.5]) e(t, d.ceil + 1.3, n, !0, 0.9, 1.8);
    for (let t of [-q - 0.03, q + 0.03])
      for (let n of [W - 6, W - 2, W + 2, W + 6])
        e(n, d.ceil + 1.3, t, !1, 0.9, 1.8);
  }
  for (let [e, t] of [
    [G + 0.3, -q + 0.3],
    [G + 0.3, q - 0.3],
    [K - 0.3, -q + 0.3],
    [K - 0.3, q - 0.3],
  ])
    for (let n of [J + 0.2, d.floor + 0.1, l.top - 0.6])
      O(`turret-band-${e}-${t}-${n}`, e, n, t, 1.68, 0.4, `limestoneWarm`, {
        solid: !1,
      });
  for (let e of [-1, 1]) {
    let t = (t, n = 0.9) => (e > 0 ? [t - n, t + n] : [-t - n, -t + n]),
      n = h,
      r = t(n.zA),
      i = t(n.zB),
      a = e > 0 ? [n.z0, n.z1] : [-n.z1, -n.z0];
    for (let t = 0; t < 5; t++) {
      let a = t % 2 ? i : r,
        o = t % 2 == 0,
        s = 12 + t * m;
      A(
        `hall${e}-flight${t}`,
        a[0],
        a[1],
        v(o ? n.out0 : n.in0),
        v(o ? n.in0 : n.out0),
        s,
        s + m,
        { thick: t === 0 ? 0 : 0.3, base: t === 1 ? 12 : null, view: !0 },
      );
    }
    E(
      `hall${e}-spine`,
      v(n.out0),
      12,
      e * 9.5 - 0.1,
      v(n.in0),
      d.floor,
      e * 9.5 + 0.1,
      `limestoneWarm`,
    );
    for (let t = 0; t < 5; t++) {
      let n = t % 2 == 0,
        r = 12 + t * m,
        i = Math.hypot(h.in0 - h.out0, m),
        a = Math.atan2(m, h.in0 - h.out0) * (n ? 1 : -1),
        o = t % 2 ? 1 : -1;
      S.push(
        {
          id: `hall${e}-handrail-${t}-s`,
          kind: `box`,
          x: v(0),
          y: r + m / 2 + 0.95,
          z: e * (9.5 + o * 0.16),
          sx: i,
          sy: 0.06,
          sz: 0.06,
          material: `ironBlack`,
          cast: !1,
          rotZ: a,
        },
        {
          id: `hall${e}-handrail-${t}-n`,
          kind: `box`,
          x: -v(0),
          y: r + m / 2 + 0.95,
          z: -e * (9.5 + o * 0.16),
          sx: i,
          sy: 0.06,
          sz: 0.06,
          material: `ironBlack`,
          cast: !1,
          rotZ: a,
        },
      );
    }
    for (let t of [16, 24, 32])
      (E(
        `hall${e}-landing-in-${t}`,
        v(n.in0),
        t - 0.3,
        a[0],
        v(n.in1),
        t,
        a[1],
        `coping`,
        { draw: !1 },
      ),
        x(v(n.in0), t - 0.3, a[0], v(n.in1), t, a[1]));
    for (let t of [20, 28])
      (E(
        `hall${e}-landing-out-${t}`,
        v(n.out1),
        t - 0.3,
        a[0],
        v(n.out0),
        t,
        a[1],
        `coping`,
        { draw: !1 },
      ),
        x(v(n.out1), t - 0.3, a[0], v(n.out0), t, a[1]));
    (j(
      `hall${e}-well-rail`,
      v(n.out1),
      e * h.z0,
      v(n.in0),
      e * h.z0,
      d.floor,
      `ironBlack`,
      !0,
      1.1,
    ),
      j(
        `hall${e}-well-end`,
        v(n.in0),
        i[0],
        v(n.in0),
        i[1],
        d.floor,
        `ironBlack`,
        !0,
        1.1,
      ));
    for (let [t, n] of [
      [15.6, h.zA],
      [19.6, h.zB],
      [23.6, h.zA],
      [27.6, h.zB],
      [31.6, h.zA],
    ])
      N(v(0), t, e * n, 0.8, 0.25, V, { rx: Math.PI / 2, gain: 1.6 });
  }
  for (let e of [-1, 1])
    for (let t of [15.4, 23.4, 31.4]) z(v(-3), t, e * h.zA, 45, 13);
  (E(
    `gallery-case-w`,
    v(-6.4),
    d.floor,
    -2.4,
    v(-4.2),
    d.floor + 1.15,
    2.4,
    `walnut`,
  ),
    E(
      `gallery-case-e`,
      v(0.6),
      d.floor,
      -1.1,
      v(2.8),
      d.floor + 1.15,
      1.1,
      `walnut`,
    ),
    E(
      `gallery-glass-w`,
      v(-6.3),
      d.floor + 1.15,
      -2.3,
      v(-4.3),
      d.floor + 1.6,
      2.3,
      `glassDark`,
    ),
    E(
      `gallery-bench`,
      v(-1.6),
      d.floor,
      -6.1,
      v(1.6),
      d.floor + 0.5,
      -5.5,
      `walnut`,
    ),
    D(
      `gallery-model-boiler`,
      v(1),
      d.floor + 1.15,
      -0.5,
      v(2.4),
      d.floor + 1.75,
      0.5,
      `amber`,
    ),
    D(
      `gallery-model-stack`,
      v(2),
      d.floor + 1.75,
      -0.15,
      v(2.3),
      d.floor + 2.3,
      0.15,
      `rust`,
    ));
  for (let e of [-11.35, 11.35])
    for (let t of [-5, 0, 5])
      (D(
        `gallery-board-${e}-${t}`,
        v(t) - 1.4,
        d.floor + 1.2,
        e - 0.04,
        v(t) + 1.4,
        d.floor + 2.8,
        e + 0.04,
        `enamelBlue`,
      ),
        N(v(t), d.floor + 2, e + (e < 0 ? 0.06 : -0.06), 2.6, 1.4, H, {
          gain: 0.45,
        }));
  for (let e of [-4, 4])
    N(v(0), d.ceil - 0.05, e, 6, 0.3, H, { rx: Math.PI / 2, gain: 1.4 });
  for (let e of [-5, 5]) z(v(e), d.ceil - 0.5, 0, 55, 15);
  for (let e of [v(-6), v(0), v(6)])
    N(e, J - 0.05, 0, 2.2, 0.4, B, { rx: Math.PI / 2, gain: 1.6 });
  (z(v(0), J - 0.5, 0, 40, 15),
    D(`lin-road`, G, 12.05, -4.6, K, 12.06, 4.6, `lamplitRoad`));
  for (let e of [v(-5), v(1), v(7)])
    for (let t of [-1, 1])
      (N(e, 15.7, t * 6.93, 0.34, 0.5, V, {
        ry: t > 0 ? Math.PI : 0,
        gain: 1.5,
      }),
        D(
          `arch-sconce-${e}-${t}`,
          e - 0.12,
          15.35,
          t > 0 ? 6.94 : -7,
          e + 0.12,
          15.45,
          t > 0 ? 7 : -6.94,
          `ironBlack`,
        ));
  {
    let e = (e, t, n, r, i, a, o, s = []) =>
        M(e, t, n, r, i, a, o, `lamplit`, s, {
          solid: !1,
          cast: !1,
          fence: !1,
        }),
      t = 0.03,
      n = G + f,
      r = K - f,
      i = q - f,
      a = d.floor,
      o = [Math.min(v(h.out0), v(h.in0)), Math.max(v(h.out0), v(h.in0))],
      s = [v(h.out1), v(h.out1) + 1.8, 12, Y];
    for (let c of [-1, 1]) {
      let l = c > 0 ? h.z0 : -i,
        u = c > 0 ? i : -h.z0,
        d = [
          [c * 9.5 - 0.6, c * 9.5 + 0.6, 17, 20],
          [c * 9.5 - 0.6, c * 9.5 + 0.6, 23, 26.5],
        ];
      (e(`lin-hall${c}-out`, n, l, n + t, u, 12, a, [
        [c * (h.z0 + 1.25) - 1.05, c * (h.z0 + 1.25) + 1.05, 12, Y],
        ...d,
      ]),
        e(`lin-hall${c}-in`, r - t, l, r, u, 12, a, d),
        e(
          `lin-hall${c}-side`,
          n,
          c > 0 ? i - t : -i,
          r,
          c > 0 ? i : -i + t,
          12,
          a,
          [W - 5, W, W + 5].flatMap((e) => [
            [e - 0.6, e + 0.6, 17, 20],
            [e - 0.6, e + 0.6, 23, 26.5],
            [e - 0.6, e + 0.6, 28, 30.5],
          ]),
        ),
        e(
          `lin-hall${c}-part`,
          n,
          c > 0 ? h.z0 : -h.z0 - t,
          r,
          c > 0 ? h.z0 + t : -h.z0,
          12,
          a,
          [s],
        ));
      for (let n of [-1, 1])
        e(
          `lin-hall${c}-spine${n}`,
          o[0],
          c * 9.5 + n * 0.1 + (n < 0 ? -0.03 : 0),
          o[1],
          c * 9.5 + n * 0.1 + (n > 0 ? t : 0),
          12,
          a,
        );
      (e(`lin-arch${c}`, n, c > 0 ? 6.97 : -7, r, c > 0 ? 7 : -6.97, 12, 15.2, [
        s,
      ]),
        M(
          `lin-arch${c}-up`,
          n,
          c > 0 ? 6.97 : -7,
          r,
          c > 0 ? 7 : -6.97,
          15.2,
          J,
          `lamplitStone`,
          [],
          { solid: !1, cast: !1, fence: !1 },
        ));
    }
    let c = (e, t, n, r, i, a) => D(e, t, a, n, r, a + 0.01, i, `lamplitFloor`),
      l = (e, t, n, r, i, a) => D(e, t, a - 0.01, n, r, a, i, `lamplitCeil`);
    for (let e of [-1, 1])
      c(
        `lin-hall${e}-floor`,
        n,
        e > 0 ? h.z0 : -i,
        r,
        e > 0 ? i : -h.z0,
        12.08,
      );
    (c(`lin-gal-floor`, n, -7, r, 7, a + 0.02),
      l(`lin-gal-ceil`, n, -i, r, i, d.ceil - 0.02),
      l(`lin-arch-ceil`, n, -7, r, 7, J - 0.02),
      e(
        `lin-gal-out`,
        n,
        -i,
        n + t,
        i,
        a,
        d.ceil,
        [-9.5, -3.2, 3.2, 9.5].map((e) => [e - 0.7, e + 0.7, X, Z]),
      ),
      e(`lin-gal-in`, r - t, -i, r, i, a, d.ceil, [
        [-7, -u.z + u.hw, u.y, u.y + 3.2],
        [u.z - u.hw, 7, u.y, u.y + 3.2],
        ...[-9.5, 9.5].map((e) => [e - 0.7, e + 0.7, X, Z]),
      ]));
    for (let o of [-1, 1])
      e(
        `lin-gal-side${o}`,
        n,
        o < 0 ? -i : i - t,
        r,
        o < 0 ? -i + t : i,
        a,
        d.ceil,
        [W - 4, W + 4].map((e) => [e - 0.7, e + 0.7, X, Z]),
      );
  }
  _.buildings.push(
    {
      id: `tower-s`,
      x: W,
      y: 12,
      z: 0,
      w: l.hx * 2,
      d: l.hz * 2,
      h: d.ceil - 12,
    },
    {
      id: `tower-n`,
      x: -W,
      y: 12,
      z: 0,
      w: l.hx * 2,
      d: l.hz * 2,
      h: d.ceil - 12,
    },
  );
  for (let e of [-1, 1]) {
    let t = e * u.z - u.hw,
      n = e * u.z + u.hw;
    for (let [r, i] of [
      [-17, -6],
      [6, 17],
    ])
      E(`walk${e}-floor-${r}`, r, u.y - 0.3, t, i, u.y, n, `pavement`, {
        mirror: !1,
      });
    (E(`walk${e}-glass`, -6, u.y - 0.3, t, 6, u.y, n, `glassGreen`, {
      mirror: !1,
      surface: `glass`,
    }),
      E(
        `walk${e}-roof`,
        -17,
        u.roof,
        t - 0.2,
        17,
        u.roof + 0.25,
        n + 0.2,
        `enamelBlue`,
        { mirror: !1 },
      ));
    for (let r of [t, n]) {
      j(
        `walk${e}-parapet-${r}`,
        -17,
        r,
        17,
        r,
        u.y,
        `enamelBlue`,
        !1,
        u.roof - u.y,
      );
      for (let t = -17; t <= 17.009999999999998; t += 2.4)
        D(
          `walk${e}-post-${r}-${t.toFixed(1)}`,
          t - 0.08,
          u.y + 1.1,
          r - 0.08,
          t + 0.08,
          u.roof,
          r + 0.08,
          `superWhite`,
          { mirror: !1 },
        );
      (E(
        `walk${e}-chord-${r}`,
        -17,
        u.chord,
        r - 0.2,
        17,
        u.chord + 0.4,
        r + 0.2,
        `enamelBlue`,
        { mirror: !1 },
      ),
        E(
          `walk${e}-chord-top-${r}`,
          -17,
          u.y - 0.7,
          r - 0.2,
          17,
          u.y - 0.3,
          r + 0.2,
          `enamelBlue`,
          { mirror: !1 },
        ));
      for (let t of [-1, 1])
        C.push({
          id: `demo-walk${e}-chord-stop-${r}-${t < 0 ? `s` : `n`}`,
          aabb: [
            t < 0 ? -17.6 : 16.2,
            u.y - 0.7,
            r - 0.3,
            t < 0 ? -16.2 : 17.6,
            u.roof,
            r + 0.3,
          ],
          surface: `metal`,
          shotBoxes: [[0, -990, 0, 0.01, -989.99, 0.01]],
          shotPen: `metal`,
        });
      for (let t = -17, n = 0; t < 17; t += 2.6, n++)
        S.push({
          id: `walk${e}-diag-${r}-${n}`,
          kind: `box`,
          x: t + 1.3,
          y: u.chord + 0.2,
          z: r,
          sx: 0.18,
          sy: Math.hypot(2.6, 2.8),
          sz: 0.18,
          material: n % 2 ? `superWhite` : `enamelBlue`,
          cast: !0,
          rotZ: (n % 2 ? 1 : -1) * Math.atan2(2.6, 2.8),
        });
    }
    for (let t = -12; t <= 12; t += 8)
      N(t, u.roof - 0.05, e * u.z, 1.2, 0.25, V, {
        rx: Math.PI / 2,
        gain: 1.3,
        mirror: !1,
      });
    for (let [r, i] of [
      [-17, -6],
      [6, 17],
    ])
      D(
        `lin-walk${e}-floor-${r}`,
        r,
        u.y + 0.03,
        t + 0.06,
        i,
        u.y + 0.04,
        n - 0.06,
        `lamplitFloor`,
        { mirror: !1 },
      );
    D(
      `lin-walk${e}-ceil`,
      -17,
      u.roof - 0.02,
      t,
      17,
      u.roof - 0.01,
      n,
      `lamplitCeil`,
      { mirror: !1 },
    );
  }
  let $ = W - l.pierHx;
  (E(`span-deck`, -58, 10.4, -7, $, 12, 7, `stone`, { solid: !1 }),
    E(`span-deck-top`, -58, 11.2, -7, $, 12, 7, `stone`, { draw: !1 }),
    D(`span-road`, -58, 12, -4.6, $ + l.pierHx * 2, 12.03, 4.6, `asphalt`));
  for (let e of [-1, 1])
    (D(
      `span-pave-${e}`,
      -58,
      12,
      e < 0 ? -7 : 4.6,
      $,
      12.05,
      e < 0 ? -4.6 : 7,
      `sidewalk`,
    ),
      D(
        `span-kerb-${e}`,
        -58,
        12,
        e * 4.6 - 0.15,
        $ + l.pierHx * 2,
        12.12,
        e * 4.6 + 0.15,
        `curb`,
      ),
      j(`span-rail-${e}`, -58, e * 7, $, e * 7, 12),
      E(
        `span-girder-${e}`,
        -58,
        8,
        e * 5 - 0.3,
        $,
        10.4,
        e * 5 + 0.3,
        `enamelBlue`,
        { solid: !1 },
      ));
  for (let e = -52, t = 0; e < $; e += 11, t++)
    for (let n of [-1, 1])
      (O(`span-lamp-${t}-${n}`, e, 12, n * 6.65, 0.12, 5.4, `ironBlack`),
        N(e, 17.5, n * 6.65, 0.45, 0.6, B, { gain: 2.4 }),
        N(e, 17.5, n * 6.65, 0.45, 0.6, B, { gain: 2.4, ry: Math.PI / 2 }),
        I(e, 12.14, n * 5.5, 6.5, B, 0.85));
  z(-41, 17, 0, 5, 16);
  for (let e of [-1, 1])
    b.chains.push({
      z: e * 7.6,
      pts: [
        [G, l.top - 3],
        [(G + -58) / 2 - 2, 14],
        [-64, 21],
      ],
    });
  for (let e of [-1, 1])
    (E(
      `barrier-post-${e}`,
      $ - 1.2,
      12,
      e * 4.4 - 0.3,
      $ - 0.6,
      13.2,
      e * 4.4 + 0.3,
      `superWhite`,
    ),
      b.barriers.push(
        { x: $ - 0.9, z: e * 4.4, side: e, len: 4.1 },
        { x: -($ - 0.9), z: -e * 4.4, side: -e, len: 4.1 },
      ));
  (b.cars.push({
    id: `queue-0`,
    x: -40.2,
    z: -2.3,
    alongX: !0,
    model: `car_taxi`,
  }),
    b.cars.push({ id: `stalled-van`, x: -76, z: 3.4, alongX: !0, van: !0 }),
    E(`arch-bus`, -27.6, 12.35, 1.15, -17.4, 16.5, 3.65, `fireRed`),
    E(`arch-bus-glass-lo`, -27.5, 13.5, 1.1, -17.5, 14.4, 3.7, `glassDark`, {
      solid: !1,
    }),
    E(`arch-bus-glass-hi`, -27.5, 15.1, 1.1, -17.5, 16, 3.7, `glassDark`, {
      solid: !1,
    }));
  for (let [e, t] of [
    [1.08, Math.PI],
    [3.72, 0],
  ])
    for (let n of [13.95, 15.55])
      N(-22.5, n, e, 9.4, 0.75, V, { ry: t, gain: 0.75 });
  E(`arch-bus-cream`, -27.65, 14.55, 1.1, -17.35, 14.85, 3.7, `superWhite`, {
    solid: !1,
  });
  for (let e of [-25.4, -19.6])
    for (let t of [1.1, 3.7])
      O(`arch-bus-wheel-${e}-${t}`, e, 12, t, 0.55, 0.35, `tyre`, {
        solid: !1,
      });
  b.cars.push({ id: `queue-1`, x: -46.6, z: -2.3, alongX: !0 });
  for (let [e, t] of [-21.2, -18.8].entries())
    E(`jersey-${e}`, t - 1, 12, -6.55, t + 1, 12.82, -5.15, `concrete`);
  E(`causeway-deck`, -95.2, 11.2, -7, -58, 12, 7, `limestone`);
  for (let e of [-88, -68.6, -62.4])
    E(`causeway-wall-${e}`, e - 0.6, 8, -7, e + 0.6, 11.2, 7, `limestone`);
  for (let e of [-1, 1]) {
    (E(
      `causeway-fascia-${e}`,
      -95.2,
      11.2,
      e < 0 ? -7.25 : 7,
      -58,
      11.9,
      e < 0 ? -7 : 7.25,
      `limestoneWarm`,
      { solid: !1 },
    ),
      j(`causeway-rail-${e}`, -91, e * 7, -67.6, e * 7, 12),
      j(`causeway-rail-river-${e}`, -65.6, e * 7, -58, e * 7, 12),
      A(
        `causeway-stair-river-${e}`,
        e < 0 ? -8.9 : 7.1,
        e < 0 ? -7.1 : 8.9,
        -75,
        -67,
        8,
        12,
        { material: `limestoneWarm`, base: 8 },
      ),
      A(
        `causeway-stair-${e}`,
        e < 0 ? -8.9 : 7.1,
        e < 0 ? -7.1 : 8.9,
        -84,
        -92,
        8,
        12,
        { material: `limestoneWarm`, base: 8 },
      ));
    for (let t = 0; t < 3; t++)
      N(-91 + t * 8, 11.14, e * 4, 0.9, 0.25, V, {
        rx: Math.PI / 2,
        gain: 1.2,
      });
  }
  {
    let e = W - l.pierHx,
      t = W + l.pierHx,
      n = l.pierHz,
      r = n - 0.3,
      i = -32.6,
      a = r;
    E(`catwalk`, -58.6, 7.75, -2, e, 8, 2, `metalDark`);
    for (let t of [-2, 2]) j(`catwalk-rail-${t}`, -58, t, e, t, 8);
    D(`lin-catwalk`, -58.6, 8.02, -1.9, e, 8.03, 1.9, `lamplitFloor`);
    for (let t = -54; t < e; t += 6)
      N(t, 10.35, 0, 0.8, 0.25, V, { rx: Math.PI / 2, gain: 1.3 });
    (E(`chamber-floor`, e + 0.5, 7.7, -r, t - 0.5, 8, r, `limestoneWarm`),
      M(`chamber-west`, e, -n, e + 0.5, n, 7.7, 11.2, `limestone`, [
        [-2, 2, 7.7, 10.6],
      ]),
      M(`chamber-east`, t - 0.5, -n, t, n, 7.7, 11.2, `limestone`));
    for (let i of [-1, 1])
      E(
        `chamber-side-${i}`,
        e + 0.5,
        7.7,
        i < 0 ? -n : r,
        t - 0.5,
        11.2,
        i < 0 ? -r : n,
        `limestone`,
      );
    E(`pier-base`, e, -5, -n, t, 7.7, n, `limestone`, { cast: !1, solid: !1 });
    for (let [r, [o, s, c, l]] of [
      [e, -n, t, -a],
      [e, -a, i, -13],
      [-24, -a, t, -13],
      [e, -13, t, 13],
      [e, 13, i, a],
      [-24, 13, t, a],
      [e, a, t, n],
    ].entries())
      (E(`pier-cap-${r}`, o, 11.2, s, c, 12, l, `limestone`),
        D(`pier-paving-${r}`, o, 12, s, c, 12.02, l, `pavement`));
    for (let e of [-1, 1])
      (A(
        `chamber-stair-${e}`,
        e < 0 ? -a : 13.05,
        e < 0 ? -13.05 : a,
        -24,
        -32,
        8,
        12,
        { material: `limestoneWarm`, base: 8 },
      ),
        j(`hatch-rail-${e}`, i, e * 13, -24, e * 13, 12, `ironBlack`, !0, 1.1),
        j(
          `hatch-end-${e}`,
          -24,
          e < 0 ? -a : 13,
          -24,
          e < 0 ? -13 : a,
          12,
          `ironBlack`,
          !0,
          1.1,
        ));
    E(`counterweight`, t - 5.2, 8, -5, t - 1.4, 10.3, 5, `ironBlack`);
    for (let [e, [t, n]] of [
      [-31, -7],
      [-29, 6.5],
      [-26, -1],
    ].entries())
      E(
        `chamber-crate-${e}`,
        t - 0.7,
        8,
        n - 0.7,
        t + 0.7,
        9.2,
        n + 0.7,
        `timberDark`,
      );
    for (let e of [-33, -26, -19])
      for (let t of [-8, 0, 8])
        N(e, 11.14, t, 0.9, 0.25, V, { rx: Math.PI / 2, gain: 1.3 });
    (D(
      `lin-chamber-floor`,
      e + 0.5,
      8.02,
      -r,
      t - 0.5,
      8.03,
      r,
      `lamplitFloor`,
    ),
      D(
        `lin-chamber-ceil`,
        e + 0.5,
        11.18,
        -r,
        t - 0.5,
        11.19,
        r,
        `lamplitCeil`,
      ));
    for (let [n, i, a, o, s, c] of [
      [`w`, e + 0.5, -r, e + 0.53, r, [[-2, 2, 8, 10.6]]],
      [`e`, t - 0.53, -r, t - 0.5, r, []],
      [`s`, e + 0.5, -r, t - 0.5, -r + 0.03, []],
      [`n`, e + 0.5, r - 0.03, t - 0.5, r, []],
    ])
      M(`lin-chamber-${n}`, i, a, o, s, 8, 11.2, `lamplitStone`, c, {
        solid: !1,
        cast: !1,
        fence: !1,
      });
  }
  for (let e of [-1, 1])
    (E(
      `retain-${e}`,
      -95.2,
      7.6,
      e < 0 ? -35.6 : 35,
      -53.8,
      12.4,
      e < 0 ? -35 : 35.6,
      `limestone`,
    ),
      E(
        `retain-coping-${e}`,
        -95.2,
        12.4,
        e < 0 ? -35.75 : 34.85,
        -53.8,
        12.6,
        e < 0 ? -34.85 : 35.75,
        `coping`,
        { solid: !1 },
      ));
  for (let e of [-1, 1])
    (E(
      `sandbag-gate-${e}`,
      -69.4,
      8,
      e < 0 ? -13.6 : 9.3,
      -68.4,
      9.15,
      e < 0 ? -9.3 : 13.6,
      `sandbag`,
    ),
      E(
        `sandbag-quay-${e}`,
        -57.6,
        8,
        e < 0 ? -24 : 18,
        -56.6,
        9.15,
        e < 0 ? -18 : 24,
        `sandbag`,
      ));
  for (let [e, [t, n, r, i]] of [
    [-73.5, -13, -72.7, -9],
    [-87, 10, -86.2, 14],
    [-64, -28, -60, -27.2],
    [-80, 28.2, -76, 29],
  ].entries())
    E(`plaza-barrier-${e}`, t, 8, n, r, 8.95, i, `concrete`);
  (E(`lorry-trailer`, -54.5, 12.3, -4.1, -46.2, 15.9, -1.6, `superWhite`),
    E(
      `lorry-trailer-band`,
      -54.55,
      13.1,
      -4.15,
      -46.15,
      13.5,
      -1.55,
      `fireRed`,
      { solid: !1 },
    ),
    E(`lorry-cab`, -46, 12.3, -2.2, -43.4, 15.3, 2.6, `enamelBlue`),
    E(`lorry-cab-glass`, -43.45, 13.9, -1.9, -43.35, 14.9, 2.3, `glassDark`, {
      solid: !1,
    }));
  for (let e of [-53, -50, -47.5])
    for (let t of [-4.2, -1.5])
      E(
        `lorry-wheel-${e}-${t}`,
        e - 0.5,
        12,
        t - 0.15,
        e + 0.5,
        13,
        t + 0.15,
        `tyre`,
        { solid: !1 },
      );
  (E(`arch-booth`, G + 0.6, 12, -1.3, G + 3.6, 15.1, 1.3, `enamelBlue`),
    E(
      `arch-booth-roof`,
      G + 0.4,
      15.1,
      -1.5,
      G + 3.8,
      15.35,
      1.5,
      `superWhite`,
    ));
  for (let e of [-1.32, 1.32])
    D(
      `arch-booth-win-${e}`,
      G + 1,
      13.4,
      e - 0.02,
      G + 3.2,
      14.6,
      e + 0.02,
      `glassDark`,
    );
  N(G + 0.57, 14.2, 0, 1.6, 0.9, V, { ry: -Math.PI / 2, gain: 0.9 });
  for (let [e, t, n, r, i, a] of [
    [G + 0.55, 14.85, 0, -Math.PI / 2, 2.4, `BRIDGE CONTROL`],
    [W - l.pierHx - 0.06, 11.05, 0, -Math.PI / 2, 3.2, `BASCULE CHAMBER`],
  ])
    for (let [o, s, c] of [
      [e, n, r],
      [-e, -n, r + Math.PI],
    ])
      _.signs.push({
        id: `ov-sign-${a}-${o}`,
        text: a,
        x: o,
        y: t,
        z: s,
        ry: c,
        w: i,
        h: 0.4,
        col: 16774364,
        style: `fascia`,
        font: 0,
      });
  E(`arch-screen-b`, K - 6.2, 12, -1.2, K - 4.8, 14.6, 1.15, `metalDark`);
  for (let [e, t, n, r, i] of [[`b`, K - 6.25, -1.2, K - 4.75, 1.15]])
    D(`arch-screen-${e}-stripe`, t, 14.2, n, r, 14.45, i, `hazard`);
  for (let e of [-1, 1]) {
    let t = e < 0 ? -14 : 7,
      n = e < 0 ? -7 : 14;
    for (let [r, i] of [
      [-66, t],
      [-66, n - 1.3],
    ])
      E(`gate${e}-pier-${r}-${i}`, r, 8, i, r + 1.3, 13, i + 1.3, `limestone`);
    for (let r of [t, n - 0.4])
      E(`gate${e}-column-${r}`, -58.55, 8, r, -58.15, 13, r + 0.4, `ironBlack`);
    for (let [r, [i, a, o, s]] of [
      [`gate${e}-quayfence-s`, [-58.15, t, -57.85, n]],
      [`gate${e}-quayfence-n`, [57.85, -n, 58.15, -t]],
    ])
      C.push({
        id: `demo-` + r,
        aabb: [i, 8, a, o, 10.7, s],
        surface: `concrete`,
        shotBoxes: [[i, 8, a, o, 9.05, s]],
        shotPen: `concrete`,
      });
    (E(`gate${e}-quaybal`, -58.6, 8, t + 1.3, -58, 9.05, n - 1.3, `limestone`, {
      solid: !1,
    }),
      E(`gate${e}-upper`, -66, 13, t, -58, 24, n, `limestone`),
      E(
        `gate${e}-string`,
        -66.2,
        13,
        t - 0.2,
        -57.8,
        13.5,
        n + 0.2,
        `limestoneWarm`,
        { solid: !1 },
      ),
      E(
        `gate${e}-bench`,
        -63.4,
        8,
        (t + n) / 2 - 0.3,
        -60.6,
        8.5,
        (t + n) / 2 + 0.3,
        `walnut`,
      ),
      N(-62, 12.9, (t + n) / 2, 1, 0.3, V, { rx: Math.PI / 2, gain: 1.2 }));
    for (let r of [15, 18.5])
      D(
        `gate${e}-win-${r}`,
        -63.4,
        r,
        e < 0 ? t - 0.03 : n - 0.01,
        -60.6,
        r + 2.2,
        e < 0 ? t + 0.01 : n + 0.03,
        `glassDark`,
      );
    for (let e of [15, 18.5])
      for (let r of [t, n])
        N(-62, e + 1.1, r + (r === t ? -0.06 : 0.06), 1.1, 1.9, V, {
          gain: 0.75,
        });
    E(
      `gate${e}-course`,
      -66.15,
      17.6,
      t - 0.15,
      -57.85,
      17.9,
      n + 0.15,
      `limestoneWarm`,
      { solid: !1 },
    );
    for (let r of [t, n])
      E(
        `gate${e}-lintel-${r}`,
        -64.7,
        12.3,
        r - 0.08,
        -58.55,
        13,
        r + 0.08,
        `limestoneWarm`,
        { solid: !1 },
      );
  }
  (D(`approach-road`, -118, 12, -4.6, -58, 12.03, 4.6, `asphalt`),
    E(`street-end`, -126, 12, -7.2, -118, 33, 7.2, `limestoneWarm`, {
      cast: !1,
    }));
  for (let e = 0; e < 5; e++)
    for (let t = -5.6; t < 5; t += 2.8)
      D(
        `street-end-w-${e}-${t.toFixed(1)}`,
        -118.06,
        14 + e * 3.6,
        t,
        -117.98,
        16.2 + e * 3.6,
        t + 1.3,
        `glassDark`,
      );
  D(`embankment-road`, -82, 8, -35, -70, 8.025, 35, `asphalt`);
  for (let e of [-1, 1])
    D(
      `approach-pave-${e}`,
      -118,
      12,
      e < 0 ? -7.2 : 4.6,
      -58,
      12.05,
      e < 0 ? -4.6 : 7.2,
      `sidewalk`,
    );
  (D(`promenade`, -70, 8, -35, -59.2, 8.04, 35, `sidewalk`),
    D(`inland-pave`, -95, 8, -35, -82, 8.04, 35, `sidewalk`));
  for (let e = -34; e <= 34; e += 6)
    D(`emb-line-${e}`, -76.1, 8.03, e, -75.9, 8.04, e + 3, `superWhite`);
  (M(`eng-north`, -93, -18.6, -77, -18, 8, 16, `brick`, [
    [-82, -79, 8, 11],
    [-91, -89.5, 11.5, 14],
    [-86, -84.5, 11.5, 14],
  ]),
    M(`eng-south`, -93, -32, -77, -31.4, 8, 16, `brick`, [
      [-90, -88.5, 11.5, 14],
      [-82, -80.5, 11.5, 14],
    ]),
    M(`eng-west`, -93, -32, -92.4, -18, 8, 16, `brick`, [[-27, -25, 11.5, 14]]),
    M(`eng-east`, -77.6, -32, -77, -18, 8, 16, `brick`, [
      [-27, -24, 8, 11],
      [-21.5, -20, 11.5, 14],
    ]),
    E(`eng-roof-slab`, -93, 16, -32, -77, 16.3, -18, `brick`));
  for (let [e, [t, n, r, i]] of [
    [-92.4, -31.4, -77.6, -31.4 + 0.03],
    [-92.4, -18.6 - 0.03, -77.6, -18.6],
    [-92.4, -31.4, -92.37, -18.6],
    [-77.63, -31.4, -77.6, -18.6],
  ].entries())
    for (let [a, o] of e < 2
      ? [
          [t, -82.2],
          [-78.8, r],
        ]
      : e === 3
        ? [
            [n, -27.2],
            [-23.8, i],
          ]
        : [[n, i]])
      D(
        `eng-dado-${e}-${a}`,
        e < 2 ? a : t,
        8,
        e < 2 ? n : a,
        e < 2 ? o : r,
        11.2,
        e < 2 ? i : o,
        `lamplit`,
      );
  k(`eng-roof`, -85, 16.3, -25, 16.6, 3.4, 14.6, `zinc`);
  for (let [e, t] of [-29.2, -21.6].entries())
    (E(`eng-bed-${e}`, -91.4, 8, t - 0.8, -84.6, 9.2, t + 0.8, `metalDark`),
      O(`eng-cyl-${e}`, -90.2, 9.2, t, 0.55, 0.9, `locoGreen`, { solid: !1 }),
      E(`eng-crank-${e}`, -84.2, 8, t - 0.5, -82.8, 9.6, t + 0.5, `ironBlack`));
  (j(`eng-pit-rail`, -89, -25.5, -86, -25.5, 8, `ironBlack`, !0, 1.1),
    E(`eng-accumulator`, -80.4, 8, -31.2, -78.2, 14.5, -29, `locoGreen`),
    E(`eng-bunker`, -92.2, 8, -24.6, -90.6, 9.4, -22.4, `charcoal`),
    E(`eng-bench`, -91.8, 8, -19.4, -89.2, 8.95, -18.7, `timberDark`));
  for (let [e, t] of [
    [-88, -25.5],
    [-82, -25.5],
  ])
    N(e, 15.9, t, 0.9, 0.35, V, { rx: Math.PI / 2, gain: 1.5 });
  (z(-88, 15.4, -25.5, 170, 15), z(-81, 15.4, -25.5, 170, 15));
  for (let [e, t] of [-29.2, -21.6].entries())
    (D(
      `eng-flywheel-${e}`,
      -83.6,
      8.2,
      t + (e ? -1.25 : 1.25) - 0.15,
      -83.4,
      11.4,
      t + (e ? -1.25 : 1.25) + 0.15,
      `ironBlack`,
    ),
      D(
        `eng-flywheel-hub-${e}`,
        -84.2,
        9.6,
        t + (e ? -1.25 : 1.25) - 0.3,
        -82.8,
        10,
        t + (e ? -1.25 : 1.25) + 0.3,
        `metalDark`,
      ));
  for (let [e, t] of [-31.2, -19.2].entries())
    D(
      `eng-pipe-${e}`,
      -92.2,
      13.2,
      t - 0.18,
      -77.8,
      13.559999999999999,
      t + 0.18,
      `rust`,
    );
  (D(`eng-gauges`, -92.35, 10.2, -27.4, -92.3, 11.6, -24.6, `enamelBlue`),
    N(-92.25, 10.9, -26, 2.6, 1.2, H, { ry: Math.PI / 2, gain: 0.7 }));
  for (let e = 0; e < 3; e++)
    E(
      `eng-sack-${e}`,
      -91.9 + e * 0.55,
      8,
      -21.9,
      -91.45 + e * 0.55,
      8.55,
      -21.2,
      `mud`,
    );
  for (let [e, t] of [
    [-88, -25.5],
    [-81, -25.5],
  ])
    I(e, 8.15, t, 7.5, V, 2.1);
  (b.engineHouses.push(
    { chimney: [-93.6, 8, -33.4] },
    { chimney: [93.6, 8, 33.4] },
  ),
    O(`eng-chimney`, -93.6, 8, -33.4, 1.1, 26, `brick`),
    _.buildings.push(
      { id: `engine-house-s`, x: -85, y: 8, z: -25, w: 16, d: 14, h: 8 },
      { id: `engine-house-n`, x: 85, y: 8, z: 25, w: 16, d: 14, h: 8 },
    ),
    E(`kiosk`, -92, 8, 14, -88.4, 10.6, 17.4, `locoGreen`),
    E(`kiosk-roof`, -92.4, 10.6, 13.6, -88, 10.9, 17.8, `zinc`, { solid: !1 }),
    N(-88.35, 9.6, 15.7, 0.05, 1.4, V, { ry: Math.PI / 2, gain: 1.2 }),
    E(`bus`, -79.2, 8.35, 16, -73.2, 12.5, 27, `fireRed`),
    E(`bus-glass-lo`, -79.25, 9.5, 16.5, -73.15, 10.4, 26.5, `glassDark`, {
      solid: !1,
    }),
    E(`bus-glass-hi`, -79.25, 11.1, 16.5, -73.15, 12, 26.5, `glassDark`, {
      solid: !1,
    }),
    O(`bus-wheel-a`, -76.2, 8, 18, 0.55, 0.35, `tyre`, { solid: !1 }),
    O(`bus-wheel-b`, -76.2, 8, 25, 0.55, 0.35, `tyre`, { solid: !1 }),
    b.cars.push(
      { id: `cab-0`, x: -86, z: 24, alongX: !1, model: `car_taxi` },
      { id: `cab-1`, x: -86, z: 30.5, alongX: !1, model: `car_taxi` },
      { id: `rank-car`, x: -79, z: -10, alongX: !1 },
    ));
  for (let [e, [t, n, r, i]] of [
    [-69, 14, -63, 15.2],
    [-69, 21, -63, 22.2],
    [-69, 28, -63, 29.2],
  ].entries())
    E(`garden-hedge-${e}`, t, 8, n, r, 9.05, i, `hedge`);
  for (let [e, t] of [18, 25, 32].entries())
    E(`garden-bench-${e}`, -62.8, 8, t - 1.2, -62.2, 8.5, t + 1.2, `walnut`);
  for (let [e, [t, n]] of [
    [-66.5, -30],
    [-66.5, -20],
    [-66.5, 24.5],
  ].entries())
    O(`plane-tree-${e}`, t, 8, n, 0.35, 5, `bark`);
  ((b.trees = [
    [-66.5, -30],
    [-66.5, -20],
    [-66.5, 24.5],
  ]),
    E(`phone-box`, -83.6, 8, 8.4, -82.6, 10.5, 9.4, `fireRed`),
    O(`pillar-box`, -83.1, 8, -8.6, 0.3, 1.5, `fireRed`));
  for (let e of [-1, 1])
    for (let t = 0; t < 4; t++)
      E(
        `cordon-${e}-${t}`,
        -81 + t * 3,
        8,
        e * 34.2 - 0.2,
        -79 + t * 3,
        9.1,
        e * 34.2 + 0.2,
        `hazard`,
      );
  for (let e of [-1, 1])
    E(
      `cordon-promenade-${e}`,
      -69,
      8,
      e * 34.2 - 0.2,
      -59,
      9.1,
      e * 34.2 + 0.2,
      `hazard`,
    );
  for (let e = -31, t = 0; e <= 31; e += 12, t++)
    Math.abs(e) < 15 ||
      (O(`emb-lamp-${t}`, -59.6, 8, e, 0.14, 4.6, `ironBlack`),
      N(-59.6, 12.8, e, 0.5, 0.6, B, { gain: 2.2 }),
      I(-60, 8.14, e, 6, B, 0.8));
  for (let [e, t] of [-22, 22].entries())
    (O(`road-lamp-${e}`, -82.6, 8, t, 0.14, 5.4, `ironBlack`),
      N(-82.6, 13.6, t, 0.5, 0.6, B, { gain: 2.2 }),
      I(-81.5, 8.14, t, 7, B, 0.85));
  for (let [e, [t, n, r]] of [
    [-60, -7.2, 22],
    [7.2, 60, 25],
  ].entries()) {
    (E(`front-${e}`, -140, 8, t, -95.2, 8 + r, n, `limestoneWarm`, {
      cast: !1,
    }),
      k(
        `front-${e}-roof`,
        -117,
        8 + r,
        (t + n) / 2,
        44,
        4,
        n - t - 0.6,
        `zinc`,
      ));
    for (let i = 0; i < 6 && i * 3.6 + 4 < r; i++)
      for (let r = t + 2; r < n - 1.5; r += 3.4) {
        let t = 9 + i * 3.6;
        (D(
          `front-${e}-w-${i}-${r.toFixed(1)}`,
          -95.25,
          t,
          r,
          -95.18,
          t + (i ? 2.2 : 2.9),
          r + 1.3,
          i ? `glassDark` : `shopfront`,
        ),
          (i * 5 + Math.round(r) * 3 + e) % 9 < 3 &&
            i > 0 &&
            N(-95.12, t + 1.1, r + 0.65, 1.1, 1.9, i % 2 ? V : H, {
              ry: Math.PI / 2,
              gain: 0.85,
            }));
      }
  }
  (U.van(`cordon-van-a`, -93.5, -3.5, !1),
    U.van(`cordon-van-b`, -93.5, 3.6, !1));
  for (let e of b.cars) {
    let t = (t, n, r, i) =>
      e.van ? U.van(t, n, r, i) : U.car(t, n, r, i, e.model ?? null);
    (t(e.id + `-s`, e.x, e.z, e.alongX), t(e.id + `-n`, -e.x, -e.z, e.alongX));
  }
  {
    let e = [];
    for (let t of [-1, 1])
      for (let n of [-1, 1]) {
        let r = n < 0 ? v(h.out1) : -v(h.in0),
          i = n < 0 ? v(h.in0) : -v(h.out1),
          a = t * h.z0,
          o = t * h.z1;
        e.push([
          Math.min(r, i),
          Math.min(a, o),
          Math.max(r, i),
          Math.max(a, o),
        ]);
      }
    let t = [
      [G + f, -7, K - f, 7],
      [-(K - f), -7, -(G + f), 7],
      [-17, u.z - u.hw, 17, u.z + u.hw],
      [-17, -u.z - u.hw, 17, -u.z + u.hw],
    ];
    for (let e of [-1, 1])
      for (let n of [-1, 1]) {
        let r = e * (l.x - l.hx);
        t.push([
          Math.min(r - e * 0.8, r + e * 0.8),
          n * u.z - u.hw,
          Math.max(r - e * 0.8, r + e * 0.8),
          n * u.z + u.hw,
        ]);
      }
    for (let e of [-1, 1]) {
      let n = [e * h.z0, e * h.z1];
      t.push(
        [v(h.in0), Math.min(...n), v(h.in1), Math.max(...n)],
        [-v(h.in1), Math.min(-n[0], -n[1]), -v(h.in0), Math.max(-n[0], -n[1])],
      );
    }
    let n = [];
    for (let e of [-1, 1])
      for (let t of [-1, 1]) {
        let r = y(t)
          .slice(1, -1)
          .map(([t, n, r]) => (e < 0 ? [t, r, n] : [-t, r, -n]));
        n.push({
          id: `stair-${e < 0 ? `s` : `n`}${t < 0 ? `d` : `u`}`,
          from: `deck`,
          to: `gallery`,
          pts: r,
        });
      }
    for (let e of [-1, 1])
      for (let t of [-1, 1]) {
        let r = ([t, n, r]) => (e < 0 ? [t, n, r] : [-t, n, -r]);
        (n.push({
          id: `causeway-${e < 0 ? `s` : `n`}${t < 0 ? `d` : `u`}`,
          from: `low`,
          to: `deck`,
          pts: [
            [-82.5, 8, t * 8],
            [-84, 8, t * 8],
            [-88, 10, t * 8],
            [-92, 12, t * 8],
            [-92.2, 12, t * 5.6],
          ].map(r),
        }),
          n.push({
            id: `riverstair-${e < 0 ? `s` : `n`}${t < 0 ? `d` : `u`}`,
            from: `low`,
            to: `deck`,
            pts: [
              [-76.5, 8, t * 8],
              [-75, 8, t * 8],
              [-71, 10, t * 8],
              [-67, 12, t * 8],
              [-66.6, 12, t * 5.6],
            ].map(r),
          }),
          n.push({
            id: `hatch-${e < 0 ? `s` : `n`}${t < 0 ? `d` : `u`}`,
            from: `low`,
            to: `deck`,
            pts: [
              [-22.6, 8, t * 12.2],
              [-23.3, 8, t * 13.92],
              [-28, 10, t * 13.92],
              [-31.9, 12, t * 13.92],
              [-33.6, 12, t * 13.92],
              [-34.6, 12, t * 12.9],
            ].map(r),
          }));
      }
    _.floorNav = {
      levels: [
        {
          id: `low`,
          bounds: [...c],
          y: 8,
          floors: [
            [c[0], c[1], -53.8, c[3]],
            [53.8, c[1], c[2], c[3]],
            [-58.6, -2, -37, 2],
            [37, -2, 58.6, 2],
            [-36.5, -14.5, -15.5, 14.5],
            [15.5, -14.5, 36.5, 14.5],
          ],
        },
        {
          id: `deck`,
          bounds: [...c],
          y: 12,
          floors: [
            [-118, -7.2, -58, 7.2],
            [58, -7.2, 118, 7.2],
            [-58, -7, 58, 7],
            [W - l.pierHx, -l.pierHz, W + l.pierHx, l.pierHz],
            [-W - l.pierHx, -l.pierHz, -W + l.pierHx, l.pierHz],
          ],
        },
        {
          id: `gallery`,
          bounds: [G, -q, -G, q],
          y: d.floor,
          floors: t,
          holes: e,
        },
      ],
      links: n,
    };
  }
  let ne = 15918792;
  for (let [e, t, n] of [
    [G - 0.42, -Math.PI / 2, `KINGSGATE BRIDGE`],
    [K + 0.42, Math.PI / 2, `MDCCCXCIV`],
  ])
    for (let [r, i, a] of [
      [e, 0, t],
      [-e, 0, t + Math.PI],
    ]) {
      (_.signs.push({
        id: `arch-name-${r}`,
        text: n,
        x: r + (r < 0 ? -0.06 : 0.06) * (Math.abs(r) > l.x ? 1 : -1),
        y: J + 0.5,
        z: i,
        ry: a,
        w: 8.6,
        h: 0.75,
        col: 16774364,
        style: `fascia`,
        font: 0,
      }),
        D(
          `arch-board-${r}`,
          r - 0.05,
          J + 0.05,
          -4.6,
          r + 0.05,
          J + 0.95,
          4.6,
          `enamelBlue`,
          { mirror: !1 },
        ));
      let e = Math.sign(Math.sign(r) * l.x - r);
      for (let t of [-3.8, 3.8])
        D(
          `arch-bracket-${r}-${t}`,
          Math.min(r, r + e * 0.42),
          J + 0.85,
          t - 0.05,
          Math.max(r, r + e * 0.42),
          J + 0.95,
          t + 0.05,
          `ironBlack`,
          { mirror: !1 },
        );
    }
  for (let [e, t, n] of [
    [$ - 3, -6.88, 0],
    [-($ - 3), 6.88, Math.PI],
  ])
    (D(
      `lift-notice-${e}`,
      e - 1.3,
      14,
      t - 0.05,
      e + 1.3,
      14.9,
      t + 0.05,
      `enamelBlue`,
      { mirror: !1 },
    ),
      _.signs.push({
        id: `lift-notice-${e}`,
        text: `BRIDGE LIFTS - STOP ON RED`,
        x: e,
        y: 14.45,
        z: t + (n ? -0.08 : 0.08),
        ry: n,
        w: 2.4,
        h: 0.32,
        col: 16777215,
        style: `fascia`,
        font: 0,
      }));
  for (let [e, t, n, r] of [
    [-95.25, -12, Math.PI / 2, `KINGS EMBANKMENT`],
    [-95.25, 12, Math.PI / 2, `BRIDGE APPROACH`],
  ])
    _.signs.push(
      {
        id: `street-${r}`,
        text: r,
        x: e,
        y: 15.1,
        z: t,
        ry: n,
        w: 4.2,
        h: 0.4,
        col: ne,
        style: `fascia`,
        font: 0,
      },
      {
        id: `street-${r}-n`,
        text: r,
        x: -e,
        y: 15.1,
        z: -t,
        ry: n + Math.PI,
        w: 4.2,
        h: 0.4,
        col: ne,
        style: `fascia`,
        font: 0,
      },
    );
  for (let e of [-1, 1]) {
    let t = $ - 2.2,
      n = e * 6.5;
    (O(`signal-post-${e}`, t, 12, n, 0.1, 3.4, `ironBlack`),
      E(
        `signal-head-${e}`,
        t - 0.2,
        14.6,
        n - 0.2,
        t + 0.2,
        15.5,
        n + 0.2,
        `ironBlack`,
        { solid: !1 },
      ),
      (b.signals = (b.signals ?? []).concat([
        [t, 15.25, n],
        [-t, 15.25, -n],
      ])));
  }
  for (let e = -69; e <= -60; e += 1.8)
    for (let t of [-1, 1])
      O(
        `bollard-${e.toFixed(1)}-${t}`,
        e,
        12,
        t * 4.85,
        0.16,
        0.95,
        `ironBlack`,
      );
  for (let [e, t] of [-28, -20, 20, 28].entries())
    (E(`planter-${e}`, -64.6, 12, t - 1.1, -63.2, 12.8, t + 1.1, `stone`),
      D(
        `planter-${e}-shrub`,
        -64.4,
        12.8,
        t - 0.9,
        -63.4,
        13.4,
        t + 0.9,
        `hedge`,
      ));
  for (let [e, t] of [-31, -24, 24, 31].entries())
    E(`prom-bench-${e}`, -60.6, 12, t - 1, -60, 12.48, t + 1, `walnut`);
  {
    let e = {
        lamplit: `plaster`,
        lamplitRoad: `road`,
        lamplitFloor: `floor`,
        lamplitCeil: `ceil`,
        lamplitStone: `stone`,
      },
      t = [];
    for (let n = S.length - 1; n >= 0; n--)
      e[S[n].material] && (t.push(S[n]), S.splice(n, 1));
    b.linings = t.map((t) => [
      t.x - t.sx / 2,
      t.y,
      t.z - t.sz / 2,
      t.x + t.sx / 2,
      t.y + t.sy,
      t.z + t.sz / 2,
      e[t.material],
    ]);
  }
  {
    let e =
        /^(tower-(out|in|side-?1)|hall-wall-?1|hall-?1-spine|eng-(north|south|east|west))-/,
      t = new Set(C.map((e) => e.id)),
      n = (e) => [
        e.x - e.sx / 2,
        e.y,
        e.z - e.sz / 2,
        e.x + e.sx / 2,
        e.y + e.sy,
        e.z + e.sz / 2,
      ],
      r = S.filter(
        (n) =>
          n.kind === `box` &&
          !n.ry &&
          !n.rotX &&
          !n.rotZ &&
          e.test(n.id) &&
          n.y < d.ceil - 0.05 &&
          n.sy >= 0.4 &&
          Math.min(n.sx, n.sz) >= 0.15 &&
          t.has(`demo-` + n.id),
      ),
      i = S.filter(
        (e) =>
          e.kind === `box` &&
          !e.ry &&
          !t.has(`demo-` + e.id) &&
          Math.min(e.sx, e.sy, e.sz) < 0.3,
      ),
      a = (e, t, n) => {
        let r = 2 - n;
        return (
          e[n] >= t[n] - 0.3 &&
          e[n + 3] <= t[n + 3] + 0.3 &&
          e[1] >= t[1] - 0.01 &&
          e[4] <= t[4] + 0.01 &&
          e[r] >= t[r] - 0.01 &&
          e[r + 3] <= t[r + 3] + 0.01
        );
      };
    for (let e of _.buildings) {
      let t = r.filter(
        (t) =>
          Math.abs(t.x - e.x) <= e.w / 2 + 1 &&
          Math.abs(t.z - e.z) <= e.d / 2 + 1,
      );
      if (t.length) {
        ((e.infillInterior = !0),
          (e.demolitionPanels = t.map((e) => e.id)),
          (e.demolitionAttachments = {}));
        for (let r of t) {
          let t = n(r),
            o = r.sx < r.sz ? 0 : 2,
            s = i.filter((e) => a(n(e), t, o)).map((e) => e.id);
          s.length && (e.demolitionAttachments[r.id] = s);
        }
      }
    }
    ((b.breakable = r.length),
      (b.panelBoxes = Object.fromEntries(r.map((e) => [e.id, n(e)]))),
      (b.liningOwners = b.linings.map((e) => {
        let t = [e[3] - e[0], e[4] - e[1], e[5] - e[2]],
          i = t.indexOf(Math.min(...t));
        if (i === 1) return [];
        let a = (e[i] + e[i + 3]) / 2,
          o = 2 - i;
        return r
          .filter((t) => {
            let r = n(t);
            return (
              (t.sx < t.sz ? 0 : 2) === i &&
              (Math.abs(a - r[i]) < 0.12 || Math.abs(a - r[i + 3]) < 0.12) &&
              Math.min(e[4], r[4]) - Math.max(e[1], r[1]) > 0.05 &&
              Math.min(e[o + 3], r[o + 3]) - Math.max(e[o], r[o]) > 0.05
            );
          })
          .map((e) => e.id);
      })));
  }
  return (
    (_.plan = [
      ...[[-95, -35, -58, 35, 1.2]].flatMap(([e, t, n, r, i]) => [
        { x: (e + n) / 2, z: (t + r) / 2, w: n - e, d: r - t, h: i },
        { x: -(e + n) / 2, z: -(t + r) / 2, w: n - e, d: r - t, h: i },
      ]),
      { x: 0, z: 0, w: 116, d: 14, h: 2.4 },
      ...[-1, 1].map((e) => ({
        x: e * l.x,
        z: 0,
        w: l.pierHx * 2,
        d: l.pierHz * 2,
        h: 2.4,
      })),
      ...[-1, 1].map((e) => ({
        x: e * l.x,
        z: 0,
        w: l.hx * 2,
        d: l.hz * 2,
        h: 9,
      })),
      ...[-1, 1].map((e) => ({ x: 0, z: e * u.z, w: 34, d: u.hw * 2, h: 6 })),
      ...[
        [-62, 10.5],
        [-62, -10.5],
        [62, 10.5],
        [62, -10.5],
      ].map(([e, t]) => ({ x: e, z: t, w: 8, d: 7, h: 7 })),
      { x: -85, z: -25, w: 16, d: 14, h: 6 },
      { x: 85, z: 25, w: 16, d: 14, h: 6 },
      { x: -76.2, z: 21.5, w: 6, d: 11, h: 3.5 },
      { x: 76.2, z: -21.5, w: 6, d: 11, h: 3.5 },
      { x: -117, z: -33.6, w: 44, d: 52.8, h: 8 },
      { x: -117, z: 33.6, w: 44, d: 52.8, h: 8 },
      { x: 117, z: 33.6, w: 44, d: 52.8, h: 8 },
      { x: 117, z: -33.6, w: 44, d: 52.8, h: 8 },
    ]),
    (_.landmarks = [
      { id: `lm-span`, label: `KINGSGATE BRIDGE`, x: 0, z: 0, w: 120, d: 30 },
      { id: `lm-south`, label: `SOUTH EMBANKMENT`, x: -76, z: 0, w: 36, d: 70 },
      { id: `lm-north`, label: `NORTH EMBANKMENT`, x: 76, z: 0, w: 36, d: 70 },
    ]),
    i ? r(_) : _
  );
}
export { B as i, z as n, i as r, s as t };
//# sourceMappingURL=bascule-CwYMJcrN.js.map
