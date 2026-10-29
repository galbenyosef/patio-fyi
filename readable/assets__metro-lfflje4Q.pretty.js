/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { er as e } from "./graphics-quality-CrL3qbU3.js";
import { n as t, r as n } from "./streetlife-KYkvhSFp.js";
import { t as r } from "./prop-collision-BF7s3ofu.js";
import { t as i } from "./round-collider-CyTIuJfx.js";
var a = e({
    METRO_CLIMATE: () => c,
    METRO_CONFIG: () => W,
    METRO_DRIVE: () => U,
    METRO_ID: () => o,
    METRO_NAME: () => s,
    METRO_ROUTES: () => V,
    METRO_RUSH: () => j,
    buildMetro: () => G,
  }),
  o = `station-lafayette-v1`,
  s = `Station Lafayette`,
  c = Object.freeze({
    fog: 0.95,
    nearHaze: 0.22,
    nearHazeFalloff: 0.012,
    heightFalloff: 0.004,
    overcast: 0.62,
    rain: 0,
    snow: 0,
    exposure: 1.2,
    tod: 23.6,
    visibility: 180,
  }),
  l = 20,
  u = 11,
  d = 17.8;
Object.freeze({ street: l, floor: u, ceiling: d });
var f = ([e, t, n, r]) => [-n, -r, -e, -t],
  p = [
    [-70, -26, 70, 26],
    ...((e) => [...e, ...e.map(f)])([
      [-124, 8, -70, 16],
      [-124, -16, -70, -8],
      [-120, 26, -40, 44],
      [-120, 16, -112, 26],
      [-112, -38, -40, -30],
      [-112, -30, -104, -16],
      [-65, -30, -57, -26],
      [-49, -30, -41, -26],
      [-90, -42, -82, -38],
      [-72, -42, -66, -38],
    ]),
  ],
  m = [
    [-65, -57],
    [-49, -41],
    [40, 70],
  ],
  h = (e, t, n) =>
    !(e < 0 ? m : m.map(([e, t]) => [-t, -e])).some(
      ([e, r]) => n > e - 0.3 && t < r + 0.3,
    ),
  g = [
    [`escalator-w`, [-86, 44, -74, 64], 44, 64],
    [`stair-w`, [-106, -56, -98, -38], -38, -56],
  ],
  _ = [
    ...g,
    ...g.map(([e, t, n, r]) => [e.replace(/-w$/, `-e`), f(t), -n, -r]),
  ],
  v = (e, t, [n, r, i, a], o = 0) =>
    e >= n - o && e <= i + o && t >= r - o && t <= a + o,
  y = 3,
  b = ([e, , t, n]) => {
    let r = Math.sign(n - t),
      i = Math.abs(n - t);
    if (!/^escalator/.test(e)) return [[t, n, u, l]];
    let a = t + r * ((i - y) / 2),
      o = a + r * y,
      s = 31 / 2;
    return [
      [t, a, u, s],
      [a, o, s, s],
      [o, n, s, l],
    ];
  },
  x = (e, t) => {
    let [, , n, r] = e;
    if ((t - n) * Math.sign(r - n) <= 0) return u;
    for (let [n, r, i, a] of b(e)) {
      let e = (t - n) / (r - n);
      if (e >= 0 && e <= 1) return i + (a - i) * e;
    }
    return l;
  },
  S = [-126, -46, 126, 46],
  C = [-12, 12],
  w = 8,
  T = ([e, t, n, r], [i, a, o, s]) => [
    Math.max(e, i),
    Math.max(t, a),
    Math.min(n, o),
    Math.min(r, s),
  ],
  E = p.map(([e, t, n, r]) => T([e - w, t - w, n + w, r + w], S)),
  D = _.map((e) => {
    let [t, [n, r, i, a], o, s] = e;
    return { id: t, rect: [n - 2, r, i + 2, a], foot: o, top: s, segs: b(e) };
  }),
  ee = [...E, ...D.map((e) => e.rect)],
  O = [
    [S[0] - 14, S[1] - 14, S[2] + 14, S[3] + 14],
    ..._.map(([, [e, t, n, r]]) => [e - 14, t - 14, n + 14, r + 14]),
  ],
  k = [
    { x: -215, z: 45 },
    { x: 215, z: -45 },
  ],
  te = [
    { letter: `A`, name: `Parc Monceau`, x: -80, z: 70, radius: 14 },
    { letter: `B`, name: `Quais Lafayette`, x: 0, z: 0, radius: 14 },
    { letter: `C`, name: `Place Cadet`, x: 80, z: -70, radius: 14 },
  ],
  A = (e, t, n, r, i) => ({
    id: `mcom-${e}`,
    letter: t,
    name: n,
    pos: [r, null, i],
  }),
  j = Object.freeze({
    attackers: 0,
    zones: [
      {
        name: `Parc Monceau`,
        stations: [
          A(`1a`, `A`, `Bandstand lawn`, -118, 86),
          A(`1b`, `B`, `Park drive`, -54, 92),
        ],
        bases: [
          { pos: [-190, null, 70], yaw: -Math.PI / 2 },
          { pos: [-6, null, 64], yaw: Math.PI / 2 },
        ],
      },
      {
        name: `Salle des billets`,
        tickets: 250,
        stations: [
          {
            ...A(`2a`, `A`, `Ticket hall`, -112, 32),
            lanes: [`south`, `main`],
          },
          {
            ...A(`2b`, `B`, `North platform, west end`, -68, -18),
            lane: `north`,
            lanes: [`hall`, `north`, `ntunnel`],
          },
        ],
        bases: [
          { pos: [-80, null, 82], yaw: Math.PI },
          { pos: [100, null, -36], yaw: Math.PI / 2 },
        ],
      },
      {
        name: `Les quais`,
        stations: [
          {
            ...A(`3a`, `A`, `Island platform`, -12, 0),
            lanes: [`main`, `hall`, `south`],
          },
          {
            ...A(`3b`, `B`, `North platform`, 24, -19),
            lanes: [`hall`, `main`],
          },
        ],
        bases: [
          { pos: [-100, null, 36], yaw: -Math.PI / 2 },
          { pos: [100, null, -36], yaw: Math.PI / 2 },
        ],
      },
      {
        name: `Place Cadet`,
        stations: [
          {
            ...A(`4a`, `A`, `East ticket hall`, 108, -30),
            lanes: [`north`, `main`, `hall`],
          },
          {
            ...A(`4b`, `B`, `Place Cadet`, 96, -96),
            lanes: [`north`, `main`, `hall`],
          },
        ],
        bases: [
          { pos: [-40, null, 0], yaw: -Math.PI / 2 },
          { pos: [215, null, -45], yaw: Math.PI / 2 },
        ],
      },
    ],
  }),
  M = (e) => [-e[0], -e[1]],
  N = [
    [-215, 45],
    [-150, 70],
    [-80, 72],
    [-80, 64],
    [-80, 46],
    [-80, 36],
    [-116, 36],
    [-116, 20],
    [-116, 12],
    [-66, 12],
    [-66, 0],
    [-20, 0],
  ],
  P = [
    [-215, 45],
    [-150, 76],
    [-80, 76],
    [-80, 64],
    [-80, 46],
    [-80, 36],
    [-53, 34],
    [-53, 18.5],
    [-10, 18.5],
    [50, 18.5],
    [61, 19],
    [61, 34],
    [102, 34],
    [102, 40],
    [102, 56],
    [102, 66],
    [140, 70],
    [150, -40],
    [150, -70],
    [215, -45],
  ],
  F = (e) => [...e, [0, 0], ...e.slice().reverse().map(M)],
  I = [
    [-215, 45],
    [-150, 70],
    [-150, 40],
    [-140, -70],
    [-102, -66],
    [-102, -56],
    [-102, -40],
    [-102, -34],
    [-108, -34],
    [-108, -22],
    [-108, -9],
    [-72, -9],
    [-66, -9],
    [-66, 0],
    [-20, 0],
  ],
  L = [
    [-215, 45],
    [-150, 70],
    [-80, 72],
    [-80, 64],
    [-80, 46],
    [-80, 36],
    [-62, 34],
    [-62, 21],
    [-65, 12],
    [-65, -12],
    [-62, -19],
    [-30, -19],
    [40, -19],
    [62, -17],
    ...N.slice(0, -2).reverse().map(M),
  ],
  R = ([e, t]) => {
    let n = _.find(([, n]) => v(e, t, n));
    return n ? x(n, t) : p.some((n) => v(e, t, n)) ? u : l;
  },
  z = ([e, t]) => {
    let n = _.find(
      ([, [n, r, i, a]]) => e >= n && e <= i && t >= r - 13 && t <= a + 13,
    );
    return n ? (/^escalator/.test(n[0]) ? 4 : 2) : 0;
  },
  B = (e) =>
    e.map((e) => {
      let t = [e[0], e[1], +R(e).toFixed(2)],
        n = z(e);
      return n ? [...t, n] : t;
    }),
  V = {
    main: B(F(N)),
    south: B(P),
    north: B(P.slice().reverse().map(M)),
    ntunnel: B(F(I)),
    hall: B(L),
  },
  H = [
    [-215, 45],
    [-205, -10],
    [-170, -92],
    [-60, -98],
    [40, -98],
    [110, -100],
    [170, -92],
    [205, -60],
    [215, -45],
  ],
  U = { north: H, south: H.slice().reverse().map(M) },
  ne = 20,
  re = 3,
  W = {
    size: 600,
    res: 2,
    waterLevel: 4,
    erosion: !1,
    relief: 0.25,
    padReach: 30,
    roads: Object.values(U),
    padRoads: !0,
    roadGrade: 0.1,
    platforms: [
      { x: 0, z: 0, bounds: [-300, -300, 300, 300], height: l, blend: 1 },
      ...[
        [-262, -142, -126, 142],
        [-126, 46, 0, 142],
      ].map(([e, t, n, r]) => ({
        x: 0,
        z: 0,
        bounds: [e, t, n, r],
        height: l,
        blend: 1,
        natural: !0,
      })),
      ...O.map(([e, t, n, r]) => ({
        x: 0,
        z: 0,
        bounds: [e, t, n, r],
        height: l,
        blend: 1,
      })),
      ...E.map(([e, t, n, r]) => ({
        x: 0,
        z: 0,
        bounds: [e, t, n, r],
        height: u,
        blend: 1,
      })),
      ...D.flatMap(({ rect: [e, , t], segs: n }) =>
        n.map(([n, r, i, a], o) => ({
          x: 0,
          z: 0,
          bounds: [e, Math.min(n, r), t, Math.max(n, r)],
          height: i - 0.3 * (o > 0),
          blend: 1,
          slope: { z0: n, z1: r, y0: i - (o ? 0.3 : 0), y1: a - 0.3 },
        })),
      ),
    ],
    forest: {
      target: 800,
      spacing: 5.2,
      cover: 0.86,
      roadClear: [7, 11],
      treeLine: 200,
      mix: [0.05, 0.62, 0.33],
      clearings: [
        ...k.map((e) => ({ x: e.x, z: e.z, r: 46 })),
        ...j.zones.flatMap((e) =>
          e.stations.map((e) => ({ x: e.pos[0], z: e.pos[2], r: 9 })),
        ),
        { x: -246, z: 70, r: 26 },
        { x: -50, z: 108, r: 9 },
        { x: -80, z: 74, r: 28 },
        { x: -160, z: 10, r: 22 },
        { x: -100, z: -62, r: 10 },
        { x: -126, z: 0, r: 10 },
      ],
      lanes: [
        ...Object.values(V).flatMap((e) =>
          e.slice(1).map((t, n) => [e[n][0], e[n][1], t[0], t[1], 9]),
        ),
        [-262, 46, 0, 46, 10],
        [-126, -142, -126, 142, 10],
      ],
    },
  };
function G(e, { collision: a = !0 } = {}) {
  let f = {
      id: o,
      name: s,
      size: 600,
      bounds: [-262, -142, 262, 142],
      objects: [],
      colliderDefs: [],
      buildings: [],
      observationRooms: [],
      towerRooms: [],
      rush: {
        ...j,
        zones: j.zones.map((t) => ({
          ...t,
          stations: t.stations.map((t) => ({
            ...t,
            pos: [t.pos[0], e(t.pos[0], t.pos[2]), t.pos[2]],
          })),
          bases: t.bases.map((t) => ({
            ...t,
            pos: [t.pos[0], e(t.pos[0], t.pos[2]), t.pos[2]],
          })),
        })),
      },
      routes: V,
      driveRoutes: U,
      laneDirect: ne,
      spawnLevel: re,
      spawnBounds: [-256, -136, 256, 136],
      focus: [0, 14, 0],
      metro: !0,
      roadDriving: !0,
      climate: c,
      yards: [],
      boards: [],
      lifts: [],
      vehicleSpawns: [],
      landmarks: [],
      lights: [],
      fixtureSpills: [],
      signs: [],
      urbanBuildings: [],
      homeBases: k.map((t, n) => ({
        id: `hq-` + n,
        pos: [t.x, e(t.x, t.z), t.z],
        yaw: ((n ? 1 : -1) * Math.PI) / 2,
      })),
      objectives: te.map((t) => ({
        id: `conquest-` + t.letter.toLowerCase(),
        letter: t.letter,
        name: t.name,
        pos: [t.x, e(t.x, t.z), t.z],
        radius: t.radius,
      })),
    },
    m = (t, n) => +e(t, n) || 0,
    g = (e) =>
      /timber|crate|bench|wood/.test(e)
        ? `wood`
        : /metal|rail|train|green|zinc|glass/.test(e)
          ? `metal`
          : `concrete`,
    y = (e, t, n, r, i, a, o, s = `concrete`, c = !0, l = !0) => {
      (f.objects.push({
        id: e,
        kind: `box`,
        x: t,
        y: n,
        z: r,
        sx: i,
        sy: a,
        sz: o,
        material: s,
        cast: l,
      }),
        c &&
          f.colliderDefs.push({
            id: `demo-` + e,
            aabb: [t - i / 2, n, r - o / 2, t + i / 2, n + a, r + o / 2],
            surface: g(s),
          }));
    },
    w = (e, t, n, r, i, a, o = `concrete`, s = 0, c = !0, l = !0) =>
      y(e, t, m(t, n) + s, n, r, i, a, o, c, l),
    T = (e, t, n, r, i, a, o, s, c) =>
      f.objects.push({
        id: e,
        kind: `box`,
        x: t,
        y: n - a / 2,
        z: r,
        sx: i,
        sy: a,
        sz: o,
        rotX: s,
        material: c,
        cast: !0,
      }),
    E = (e, t, n, r, i, a, o, s = `concrete`) =>
      f.colliderDefs.push({
        id: `demo-` + e,
        aabb: [t, n, r, i, a, o],
        surface: s,
      }),
    D = (e, t, n, r, a, o, { y: s = null, solid: c = !1 } = {}) => {
      let l = s ?? m(t, n);
      (f.objects.push({
        id: e,
        kind: `cylinder`,
        x: t,
        y: l,
        z: n,
        sx: r,
        sy: a,
        sz: r,
        material: o,
        cast: !0,
      }),
        c && f.colliderDefs.push(...i(e, t, l, n, r, a, g(o))));
    },
    A = (e, t, n, r, i, a, o, s) =>
      f.objects.push({
        id: e,
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
    M = (e, t, n, r, i, a, o, s = `concrete`) => {
      let c = i - r,
        l = o - a,
        u = -Math.atan(l / c),
        d = 0.18;
      (f.objects.push({
        id: e,
        kind: `box`,
        x: t,
        y: a + l / 2 - (d * Math.cos(u)) / 2 - d / 2,
        z: (r + i) / 2,
        sx: n,
        sy: d,
        sz: Math.hypot(c, l),
        rotX: u,
        material: s,
        cast: !0,
      }),
        f.colliderDefs.push({
          id: `demo-` + e,
          aabb: [
            t - n / 2,
            Math.min(a, o) - d,
            Math.min(r, i),
            t + n / 2,
            Math.max(a, o),
            Math.max(r, i),
          ],
          ramp: { y: a, start: r, end: i, rise: l, thickness: d },
          surface: g(s),
        }));
    },
    N = t(f, e),
    P = n(f, e, 4094477),
    F = (e, t, n, r, i) => N.sandbags(e, t, n, r, i),
    I = f.lights,
    L = (e, t, n, r, i, a, o = {}) =>
      I.push({
        kind: `quad`,
        x: e,
        y: t,
        z: n,
        w: r,
        h: i,
        col: a,
        ry: o.ry ?? 0,
        rx: o.rx ?? 0,
        gain: o.gain ?? 2,
        mode: o.mode ?? `steady`,
        phase: o.phase ?? (((e * 7.3 + n * 3.1) % 7) + 7) % 7,
        group: o.group ?? null,
      }),
    R = (e, t, n, r, i, a = 1) =>
      I.push({
        kind: `pool`,
        x: e,
        y: t,
        z: n,
        r,
        col: i,
        gain: a,
        group: null,
      }),
    z = 15267071,
    B = 16752704,
    H = 16767392,
    W = 16773590,
    G = (e, t) => [-e, -t],
    ie = (e, t) => p.some((n) => v(e, t, n)) || _.some(([, n]) => v(e, t, n)),
    K = (e, t) => ie(e + 0.5, t + 0.5),
    ae = (e, t, n = 0) => ee.some((r) => v(e, t, r, n)),
    oe = (e, t) => (v(e, t, S, -0.01) ? d : 19.97),
    q = -140,
    se = [];
  for (let e = -72; e < 72; e++) {
    let t = null;
    for (let n = q; n <= 140; n++) {
      let r = n + 0.5,
        i = e + 0.5,
        a = n < 140 && ae(r, i, 2) && !ie(r, i),
        o = a ? oe(r, i) : 0;
      (t && (!a || t.top !== o) && (se.push(t), (t = null)),
        a &&
          (t
            ? (t.x1 = n + 1)
            : (t = { x0: n, x1: n + 1, z0: e, z1: e + 1, top: o })));
    }
  }
  let J = [];
  for (let e of se) {
    let t = J.find(
      (t) => t.x0 === e.x0 && t.x1 === e.x1 && t.top === e.top && t.z1 === e.z0,
    );
    t ? (t.z1 = e.z1) : J.push({ ...e });
  }
  for (let [e, t] of J.entries())
    y(
      `rock-${e}`,
      (t.x0 + t.x1) / 2,
      10.7,
      (t.z0 + t.z1) / 2,
      t.x1 - t.x0,
      t.top - u + 0.3,
      t.z1 - t.z0,
      `tile`,
    );
  {
    let e = (e, t, n, r, i, a) => {
        let o = i - r,
          s = (r + i) / 2,
          c = n - a * 0.02,
          [l, d] = t === `x` ? [s, c] : [c, s],
          [f, p] = t === `x` ? [o, 0.03] : [0.03, o];
        (y(`dado-${e}`, l, u, d, f, 1.15, p, `tileGreen`, !1, !1),
          y(`band-${e}`, l, 13.6, d, f, 0.22, p, `tileCream`, !1, !1));
      },
      t = 0,
      n = (e, t) =>
        _.some(
          ([, n, , r]) => e >= n[0] && e <= n[2] && Math.abs(t - r) < 0.01,
        );
    for (let r = -72; r <= 72; r++) {
      let i = null;
      for (let a = q; a <= 141; a++) {
        let o = K(a, r - 1),
          s = o !== K(a, r) && !n(a + 0.5, r),
          c = s ? (o ? 1 : -1) : 0;
        (i &&
          (i.side !== c || !s) &&
          (e(t++, `x`, r, i.from, i.to, i.side), (i = null)),
          s && !i
            ? (i = { from: a, to: a + 1, side: c })
            : i && (i.to = a + 1));
      }
    }
    for (let n = q; n <= 140; n++) {
      let r = null;
      for (let i = -72; i <= 73; i++) {
        let a = K(n - 1, i),
          o = a !== K(n, i),
          s = o ? (a ? 1 : -1) : 0;
        (r &&
          (r.side !== s || !o) &&
          (e(t++, `z`, n, r.from, r.to, r.side), (r = null)),
          o && !r
            ? (r = { from: n, to: n + 1, side: s })
            : r && (r.to = n + 1));
      }
    }
  }
  let ce = (e, t) => {
      let n = [e];
      for (let e of t) {
        let t = [];
        for (let r of n) {
          let [n, i, a, o] = r,
            [s, c, l, u] = e;
          if (s >= a || l <= n || c >= o || u <= i) {
            t.push(r);
            continue;
          }
          (s > n && t.push([n, i, s, o]), l < a && t.push([l, i, a, o]));
          let d = Math.max(n, s),
            f = Math.min(a, l);
          (c > i && t.push([d, i, f, c]), u < o && t.push([d, u, f, o]));
        }
        n = t;
      }
      return n;
    },
    le = _.map((e) => e[1]),
    Y = x,
    X = [-126, -102, -78, -52, -26, 0, 26, 52, 78, 102, 126],
    ue = (e) => [22, 25, 21, 24, 26, 23, 25, 21, 24, 22][e];
  for (let e = 0; e < X.length - 1; e++) {
    for (let [t, n] of ce([X[e], S[1], X[e + 1], S[3]], le).entries()) {
      let [r, i, a, o] = n,
        s = 2.1999999999999993 + ue(e);
      a - r < 0.5 ||
        o - i < 0.5 ||
        y(
          `block-${e}-${t}`,
          (r + a) / 2,
          d,
          (i + o) / 2,
          a - r,
          s,
          o - i,
          e % 3 == 1 ? `limestoneWarm` : `limestone`,
        );
    }
    let t = X[e],
      n = X[e + 1],
      r = n - t,
      i = (t + n) / 2,
      a = l + ue(e);
    (A(`block-${e}-mansard`, i, a, 0, r - 0.6, 4.2, S[3] - S[1] - 2, `zinc`),
      y(
        `block-${e}-cornice`,
        i,
        a - 0.5,
        0,
        r + 0.2,
        0.5,
        S[3] - S[1] + 0.6,
        `limestoneWarm`,
        !1,
        !1,
      ));
    for (let a of [-1, 1]) {
      let o = a * (S[3] + 0.03);
      for (let s = 0; s < 6; s++) {
        let c = 21 + s * 3.4;
        for (let r = t + 2.4; r < n - 1.8; r += 3.6)
          le.some(
            (e) =>
              r > e[0] - 1 &&
              r < e[2] + 1 &&
              Math.abs(o) - 1 < Math.max(Math.abs(e[1]), Math.abs(e[3])) &&
              Math.sign(e[1] + e[3]) === a,
          ) ||
            (y(
              `win-${e}-${a}-${s}-${r.toFixed(1)}`,
              r,
              c + (s ? 0 : 0.6),
              o,
              1.3,
              s ? 2.3 : 2.9,
              0.06,
              s ? `glassDark` : `shopfront`,
              !1,
              !1,
            ),
            (e * 7 + s * 5 + Math.round(r) * 3 + a) % 9 < 2 &&
              s > 0 &&
              L(r, c + 1.15, o + a * 0.05, 1.1, 2, s % 2 ? H : W, {
                gain: 0.9,
                mode: (e + s) % 5 ? `steady` : `tv`,
              }));
        (s === 1 || s === 4) &&
          y(
            `balcony-${e}-${a}-${s}`,
            i,
            c - 0.15,
            o + a * 0.35,
            r - 2,
            0.9,
            0.12,
            `ironBlack`,
            !1,
            !1,
          );
      }
    }
  }
  for (let e of [-1, 1])
    for (let t = 0; t < 6; t++)
      for (let n = -40; n <= 40; n += 4.2)
        y(
          `win-end-${e}-${t}-${n}`,
          e * 126.03,
          21 + t * 3.4,
          n,
          0.06,
          2.3,
          1.3,
          `glassDark`,
          !1,
          !1,
        );
  for (let e of _) {
    let [t, [n, , r], i, a] = e,
      o = Math.sign(a - i);
    for (let s = 0; s < Math.abs(a - i); s += 2) {
      let a = i + o * s,
        c = i + o * (s + 2),
        u = Math.max(Y(e, a), Y(e, c)),
        f = Math.max(d, u + 3.1);
      if (f >= 23.8 - 0.4) continue;
      let p = v((n + r) / 2, (a + c) / 2, S) ? 22 : f >= l ? 23.8 : 20.3,
        m = Math.min(a, c);
      p <= f ||
        y(
          `${t}-ceiling-${s}`,
          (n + r) / 2,
          f,
          m + 1,
          r - n + 1,
          p - f,
          2,
          `tileCream`,
        );
    }
  }
  for (let [e, [t, n, r, i]] of p.entries())
    y(
      `floor-${e}`,
      (t + r) / 2,
      u,
      (n + i) / 2,
      r - t,
      0.04,
      i - n,
      `terrazzo`,
      !1,
      !1,
    );
  for (let e of C) {
    y(`trackbed-${e}`, 0, 11.045, e, 248, 0.03, 5.6, `ballast`, !1, !1);
    for (let t of [-1, 1])
      y(
        `rail-${e}-${t}`,
        0,
        11.08,
        e + t * 0.72,
        248,
        0.14,
        0.09,
        `rail`,
        !1,
        !1,
      );
    y(
      `third-rail-${e}`,
      0,
      11.08,
      e + Math.sign(e) * 1.9,
      248,
      0.2,
      0.12,
      `rail`,
      !1,
      !1,
    );
    for (let t = -123; t <= 123; t += 1.4)
      y(
        `tie-${e}-${Math.round(t * 10)}`,
        t,
        11.06,
        e,
        0.24,
        0.04,
        2.5,
        `timberDark`,
        !1,
        !1,
      );
    for (let t of [-1, 1]) {
      let n = e + t * 4;
      (y(
        `edge-${e}-${t}`,
        0,
        11.045,
        n - t * 0.3,
        140,
        0.05,
        0.6,
        `coping`,
        !1,
        !1,
      ),
        y(
          `edge-line-${e}-${t}`,
          0,
          11.075,
          n - t * 0.8,
          140,
          0.02,
          0.2,
          `hazard`,
          !1,
          !1,
        ));
    }
  }
  let Z = (e, t, n, r = 1) => y(e, t, u, n, r, 6.800000000000001, r, `tile`);
  for (let e = -62; e <= 62; e += 12)
    (Z(`island-pillar-n-${e}`, e, -4.5),
      Z(`island-pillar-s-${e}`, e, 4.5),
      Z(`north-pillar-${e}`, e + 6, -21),
      Z(`south-pillar-${e}`, e - 6, 21));
  for (let e of [-66, -58, -50, -42])
    for (let [t, n] of [[e, 26], G(e, 26)]) Z(`colonnade-${t}-${n}`, t, n, 0.9);
  let de = (e, t, n, r = 14) => {
    let i = 2.8,
      a = 11.35;
    (y(`${e}-under`, t, u, n, r - 2, 0.35, 2.2, `metalDark`, !1, !0),
      E(
        `${e}-under`,
        t - r / 2 + 1,
        u,
        n - 1.1,
        t + r / 2 - 1,
        11.35,
        n + 1.1,
        `metal`,
      ),
      y(`${e}-floor`, t, a, n, r, 0.2, i, `metalDark`),
      y(`${e}-roof`, t, 14.25, n, r, 0.25, i, `trainWhite`));
    for (let o of [-1, 1])
      y(
        `${e}-end-${o}`,
        t + o * (r / 2 - 0.1),
        a,
        n,
        0.2,
        2.9,
        i,
        `trainWhite`,
      );
    let o = [-4.5, -1.5, 1.5, 4.5].map((e) => (e * r) / 14);
    for (let a of [-1, 1]) {
      let s = n + a * (i / 2 - 0.1),
        c = t - r / 2 + 0.2;
      for (let n of [...o.map((e) => t + e), t + r / 2 - 0.2]) {
        let i = c,
          o = n - (n < t + r / 2 - 0.3 ? 0.65 : 0);
        (o - i > 0.1 &&
          (y(
            `${e}-side-${a}-${i.toFixed(1)}`,
            (i + o) / 2,
            11.549999999999999,
            s,
            o - i,
            2.65,
            0.2,
            `trainWhite`,
          ),
          y(
            `${e}-band-${a}-${i.toFixed(1)}`,
            (i + o) / 2,
            12.4,
            s + a * 0.11,
            o - i,
            0.35,
            0.02,
            `trainTeal`,
            !1,
            !1,
          ),
          y(
            `${e}-glass-${a}-${i.toFixed(1)}`,
            (i + o) / 2,
            12.9,
            s + a * 0.11,
            o - i - 0.3,
            0.95,
            0.02,
            `glassDark`,
            !1,
            !1,
          )),
          (c = n + 0.65));
      }
      for (let n of o)
        y(
          `${e}-door-head-${a}-${n}`,
          t + n,
          13.6,
          s,
          1.3,
          0.65,
          0.2,
          `trainWhite`,
          !1,
          !1,
        );
    }
    (y(`${e}-seats`, t, 11.549999999999999, n, r - 3, 0.95, 0.5, `seatBlue`),
      L(t, 14.45 - 0.3, n, r - 2, 0.25, z, {
        rx: Math.PI / 2,
        gain: 1.1,
        mode: Math.round(t) & 3 ? `steady` : `tv`,
      }),
      f.buildings.push({ id: e, x: t, y: u, z: n, w: r, d: i, h: 3.45 }));
  };
  for (let e of [1, 18, 35]) de(`train-n-${e}`, e, -12);
  for (let e of [-1, -18, -35]) de(`train-s-${e}`, e, 12);
  for (let [e, [t, n]] of [
    [-100, -12],
    [100, 12],
  ].entries())
    de(`train-tunnel-${e}`, t, n, 12);
  for (let [e, [t, n]] of [
    [-122, 12],
    [-122, -12],
    [122, -12],
    [122, 12],
  ].entries()) {
    let r = Math.sign(t);
    for (let i = 0; i < 4; i++)
      y(
        `rooffall-${e}-${i}`,
        t - r * i * 0.9,
        u,
        n + (i % 2 ? 1 : -1) * 0.8,
        3.2 - i * 0.4,
        3.2 - i * 0.65,
        7 - i * 0.8,
        i % 2 ? `rubble` : `limestone`,
      );
    E(`rooffall-${e}`, t - 4, u, n - 4, t + 2, 14.2, n + 4);
  }
  for (let [e, [t, n]] of [
    [-58, 11.5],
    [-58, -12.5],
  ].entries())
    for (let [r, i] of [[t, n], G(t, n)]) {
      let t = `slab-${e}-${r > 0 ? `e` : `w`}`;
      (y(t, r, u, i, 2.6, 1.3, 1.4, `rubble`),
        y(`${t}-chunk`, r + 0.4, 12.3, i - 0.1, 1.2, 0.45, 0.9, `limestone`),
        y(`${t}-scar`, r, 17.77, i, 3.4, 0.03, 2.4, `charcoal`, !1, !1));
    }
  for (let [e, t] of [[-38, -23.2], G(-38, -23.2)]) {
    let n = `platform-fall-${e > 0 ? `e` : `w`}`;
    (y(n, e, u, t, 3, 1.4, 1.2, `rubble`),
      y(`${n}-chunk`, e - 0.5, 12.4, t, 1.4, 0.4, 0.8, `limestone`),
      y(`${n}-scar`, e, 17.77, t, 3.6, 0.03, 2.2, `charcoal`, !1, !1));
  }
  let fe = (e, t, n) => {
    (y(e, t, u, n, 3.2, 2.4, 2.2, `metroGreen`),
      y(`${e}-top`, t, 13.4, n, 3.6, 0.3, 2.6, `metroGreen`, !1));
    for (let r of [-1, 1])
      y(
        `${e}-papers-${r}`,
        t,
        11.9,
        n + r * 1.12,
        2.8,
        1,
        0.05,
        `posters`,
        !1,
        !1,
      );
  };
  for (let [e, [t, n]] of [
    [-30, 6.2],
    [30, -6.2],
  ].entries())
    fe(`island-kiosk-${e}`, t, n);
  let Q = (e, t, n) => {
    (y(e, t, u, n, 2.6, 0.45, 0.6, `seatOrange`),
      y(
        `${e}-back`,
        t,
        11.45,
        n + (n > 0 ? 0.25 : -0.25) * 0,
        2.6,
        0.5,
        0.1,
        `seatOrange`,
        !1,
        !1,
      ));
  };
  for (let e = -54; e <= 54; e += 24)
    (Q(`island-bench-n-${e}`, e + 6, -2),
      Q(`island-bench-s-${e}`, e - 6, 2),
      Q(`north-bench-${e}`, e, -24),
      Q(`south-bench-${e}`, e, 24));
  for (let e = -60; e <= 60; e += 20)
    for (let t of [-1, 1]) {
      let n = e + t * 4,
        r = e - t * 6;
      (h(t, n - 2, n + 2) &&
        y(
          `poster-${t}-${e}`,
          n,
          12.4,
          t * 25.72,
          4,
          2.8,
          0.05,
          (e / 20 + t) & 1 ? `posters` : `postersRed`,
          !1,
          !1,
        ),
        h(t, r - 1.8, r + 1.8) &&
          (y(
            `nameplate-${t}-${e}`,
            r,
            14.3,
            t * 25.72,
            3.6,
            0.8,
            0.05,
            `enamelBlue`,
            !1,
            !1,
          ),
          f.signs.push({
            id: `name-${t}-${e}`,
            text: `LAFAYETTE`,
            x: r,
            y: 14.7,
            z: t * 25.66,
            ry: t > 0 ? Math.PI : 0,
            w: 3.3,
            h: 0.55,
            col: 16052712,
            style: `fascia`,
            font: 0,
          })));
    }
  for (let [e, [t, n, r]] of [
    [-40, -20, `DIRECTION  PORTE DE LA VILLETTE`],
    [20, -20, `DIRECTION  PORTE DE LA VILLETTE`],
    [-20, 20, `DIRECTION  MAIRIE D'IVRY`],
    [40, 20, `DIRECTION  MAIRIE D'IVRY`],
    [-45, 0, `CORRESPONDANCES  ·  SORTIE`],
    [45, 0, `CORRESPONDANCES  ·  SORTIE`],
  ].entries()) {
    y(`hanging-board-${e}`, t, 14.6, n, 6.2, 0.7, 0.08, `enamelBlue`, !1, !1);
    for (let r of [-1, 1])
      y(
        `hanging-rod-${e}-${r}`,
        t + r * 2.6,
        15.3,
        n,
        0.05,
        2.500000000000001,
        0.05,
        `ironBlack`,
        !1,
        !1,
      );
    for (let i of [0, Math.PI])
      f.signs.push({
        id: `hanging-sign-${e}-${+!!i}`,
        text: r,
        x: t,
        y: 14.95,
        z: n + (i ? -0.05 : 0.05),
        ry: i,
        w: 5.8,
        h: 0.42,
        col: 16052712,
        style: `fascia`,
        font: 0,
      });
  }
  for (let [e, t] of [-56, 56].entries())
    (y(`island-clock-${e}`, t, 15.05, 0, 0.9, 0.9, 0.1, `enamelBlue`, !1, !1),
      L(t, 15.5, 0.07, 0.7, 0.7, W, { gain: 0.8 }),
      L(t, 15.5, -0.07, 0.7, 0.7, W, { gain: 0.8, ry: Math.PI }),
      y(
        `island-clock-rod-${e}`,
        t,
        15.95,
        0,
        0.05,
        1.8500000000000005,
        0.05,
        `ironBlack`,
        !1,
        !1,
      ));
  for (let e of [-68, -36, -12, 12, 36, 68])
    for (let [t, n] of [[e, -24.9], G(e, -24.9)])
      D(`bin-${t}-${n}`, t, n, 0.3, 0.8, `metroGreen`, { y: u, solid: !0 });
  for (let [e, [t, n]] of [
    [-10, -25.8],
    [10, 25.8],
    [-38, -3.93],
    [38, 3.93],
  ].entries())
    y(`fire-point-${e}`, t, 12.1, n, 0.7, 0.9, 0.14, `hazard`, !1, !1);
  for (let e of [-1, 1]) {
    let t = (t, n) => (e < 0 ? [t, n] : G(t, n)),
      n = e < 0 ? `w` : `e`;
    for (let e = 0; e < 7; e++) {
      let [r, i] = t(-102 + e * 3, 33);
      y(`barrier-${n}-${e}`, r, u, i, 0.5, 1.05, 2.4, `metalDark`);
    }
    {
      let [r, i] = t(-108, 40);
      (y(`ticket-office-${n}`, r, u, i, 10, 2.9, 4, `metroGreen`),
        y(
          `ticket-glass-${n}`,
          r,
          12.2,
          i - e * 2.02,
          8,
          1.3,
          0.05,
          `glassDark`,
          !1,
          !1,
        ));
    }
    for (let e = 0; e < 3; e++) {
      let [r, i] = t(-62 + e * 4, 41.5);
      y(`machine-${n}-${e}`, r, u, i, 1.1, 1.8, 0.8, `enamelBlue`);
    }
    {
      let [e, r] = t(-90, 27);
      y(`map-board-${n}`, e, u, r, 4.5, 2.4, 0.3, `enamelBlue`);
    }
    {
      let [e, r] = t(-80, 29.5);
      fe(`foot-kiosk-${n}`, e, r);
    }
    for (let e of [-1, 1]) {
      let [r, i] = t(-80 + e * 10, 40);
      (D(`foot-column-${n}-${e}`, r, i, 0.8, 3, `metroGreen`, {
        solid: !0,
        y: u,
      }),
        D(`foot-column-${n}-${e}-posters`, r, i, 0.83, 2, `postersRed`, {
          y: 11.5,
        }));
    }
    for (let e = 0; e < 5; e++) {
      let [r, i] = t(-104 + e * 14, -37.3);
      y(`cable-tray-${n}-${e}`, r, 14.6, i, 12, 0.12, 0.8, `metalDark`, !1, !1);
    }
    for (let [e, [r, i]] of [
      [-90, -33],
      [-70, -35],
      [-52, -33],
    ].entries()) {
      let [a, o] = t(r, i);
      (D(`drum-${n}-${e}`, a, o, 0.45, 1, `rust`, { solid: !0, y: u }),
        D(`drum-${n}-${e}b`, a + 0.95, o, 0.45, 1, `metroGreen`, {
          solid: !0,
          y: u,
        }));
    }
    {
      let [e, r] = t(-80, -31);
      y(`trolley-${n}`, e, u, r, 3, 1.2, 1.4, `hazard`);
    }
    for (let [r, [i, a]] of [
      [-96, -30.55],
      [-74, -30.55],
      [-78, -37.45],
      [-56, -37.45],
      [-46, -37.45],
    ].entries()) {
      let [o, s] = t(i, a);
      (y(`relay-${n}-${r}`, o, u, s, 2.4, 1.25, 1.1, `metalDark`),
        y(
          `relay-${n}-${r}-plate`,
          o,
          11.7,
          s + (a > -34 ? -1 : 1) * -e * 0.56,
          1.6,
          0.35,
          0.02,
          `hazard`,
          !1,
          !1,
        ));
    }
    for (let [e, [r, i]] of [
      [-86, 3],
      [-69, 2.4],
    ].entries()) {
      let [a, o] = t(r, -41.6);
      y(`switchboard-${n}-${e}`, a, u, o, i, 2.2, 0.7, `metroGreen`);
      let [s, c] = t(r, -40);
      L(s, 14.2, c, 0.5, 0.25, H, {
        rx: Math.PI / 2,
        gain: 1.2,
        mode: e ? `tv` : `steady`,
      });
    }
    for (let e = -118; e <= -76; e += 12)
      for (let n of [15.95, -15.95]) {
        let [r, i] = t(e, n);
        L(r, 13.4, i, 0.3, 0.16, 16726564, { gain: 1.8 });
      }
    {
      let [e, r] = t(-116, -2);
      F(`tunnel-bags-${n}`, e, r, 6.5, 1.6);
    }
  }
  for (let e of _) {
    let [t, [n, r, i, a], o, s] = e,
      c = i - n,
      p = (n + i) / 2,
      m = Math.sign(s - o),
      h = /^escalator/.test(t);
    for (let [r, [i, a, o, s]] of b(e).entries())
      if (o !== s)
        M(
          `${t}-flight${h ? `-` + r : ``}`,
          p,
          c,
          i,
          a,
          o,
          s,
          h ? `metalDark` : `coping`,
        );
      else {
        y(
          `${t}-mid-landing`,
          p,
          o - 0.3,
          (i + a) / 2,
          c,
          0.3,
          Math.abs(a - i),
          `coping`,
        );
        for (let [e, r] of [n, n + c / 3, n + (2 * c) / 3].entries()) {
          let n = e === 1 ? r + 0.72 : e === 0 ? r + 0.55 : r + c / 3 - 0.55;
          y(
            `${t}-landing-cover-${e}`,
            n,
            o,
            (i + a) / 2 - m * 0.2,
            1.1,
            1.1,
            0.8,
            `metroGreen`,
          );
        }
      }
    if (
      (y(`${t}-landing`, p, 19.6, s + m * 1.25, c + 4, 0.37, 2.5, `coping`), h)
    ) {
      for (let r of [n + c / 3, n + (2 * c) / 3]) {
        let n = Math.abs(s - o);
        for (let [n, [i, a, o, s]] of b(e).entries()) {
          let e = -Math.atan((s - o) / (a - i)),
            c = Math.hypot(a - i, s - o);
          T(
            `${t}-balustrade-${r}-${n}`,
            r,
            (o + s) / 2 + 0.55,
            (i + a) / 2,
            0.34,
            1.1,
            c,
            e,
            `metroGreen`,
          );
          for (let l of [-1, 1])
            T(
              `${t}-handrail-${r}-${n}-${l}`,
              r + l * 0.22,
              (o + s) / 2 + 1.12,
              (i + a) / 2,
              0.09,
              0.09,
              c,
              e,
              `ironBlack`,
            );
        }
        for (let i = 0; i < n; i += 1.5) {
          let a = o + m * i,
            s = o + m * Math.min(n, i + 1.5),
            c = Y(e, a),
            l = Y(e, s);
          E(
            `${t}-balustrade-${r}-${i}`,
            r - 0.17,
            Math.min(c, l),
            Math.min(a, s),
            r + 0.17,
            Math.max(c, l) + 1.05,
            Math.max(a, s),
            `metal`,
          );
        }
      }
      for (let r = 1; r < Math.abs(s - o); r += 0.8) {
        let a = o + m * r;
        for (let o of [n + c / 6, p, i - c / 6])
          y(
            `${t}-tread-${o}-${r.toFixed(1)}`,
            o,
            Y(e, a) + 0.005,
            a,
            3.2,
            0.02,
            0.1,
            `ironBlack`,
            !1,
            !1,
          );
      }
      for (let t = 3; t < Math.abs(s - o); t += 5) {
        let n = o + m * t;
        (L(p, Math.max(d, Y(e, n) + 3.1) - 0.05, n, c - 2, 0.3, z, {
          rx: Math.PI / 2,
          gain: 1.4,
        }),
          f.fixtureSpills.push({
            pos: [p, Math.max(d, Y(e, n) + 3.1) - 0.3, n],
            intensity: 5,
            distance: 14,
            group: null,
          }));
      }
    } else
      for (let t = 3; t < Math.abs(s - o); t += 6) {
        let n = o + m * t;
        L(p, Math.max(d, Y(e, n) + 3.1) - 0.05, n, c - 1, 0.25, z, {
          rx: Math.PI / 2,
          gain: 1.2,
          mode: t === 9 ? `tv` : `steady`,
        });
      }
    let g = [Math.min(o, s), Math.max(o, s)].map((e) => Math.max(e, -999)),
      _ = Math.abs(S[3]) + 0,
      v = m > 0 ? Math.max(g[0], _) : Math.min(g[1], -_),
      x = s,
      C = Math.min(v, x),
      w = Math.max(v, x);
    for (let e of [-1, 1]) {
      let r = e < 0 ? n - 0.25 : i + 0.25;
      y(`${t}-parapet-${e}`, r, l, (C + w) / 2, 0.5, 1.1, w - C, `metroGreen`);
      for (let n = C; n <= w + 0.01; n += 4)
        y(
          `${t}-post-${e}-${n.toFixed(0)}`,
          r,
          21.1,
          n,
          0.14,
          2.6999999999999997,
          0.14,
          `ironBlack`,
          !1,
        );
    }
    y(
      `${t}-canopy`,
      p,
      23.8,
      (C + w) / 2 + m * 1,
      c + 1.4,
      0.18,
      w - C + 2,
      `glassGreen`,
      !1,
    );
    for (let e of [-1, 1]) {
      let r = e < 0 ? n - 0.25 : i + 0.25;
      (D(`${t}-standard-${e}`, r, s + m * 2.3, 0.12, 4.6, `metroGreen`, {
        y: l,
        solid: !0,
      }),
        y(
          `${t}-globe-${e}`,
          r,
          24.6,
          s + m * 2.3,
          0.36,
          0.5,
          0.36,
          `amberGlass`,
          !1,
          !1,
        ),
        L(r, 24.85, s + m * 2.3, 0.36, 0.5, 16756832, { gain: 2.6 }),
        L(r, 24.85, s + m * 2.3, 0.36, 0.5, 16756832, {
          ry: Math.PI / 2,
          gain: 2.6,
        }),
        R(r, 20.13, s + m * 3, 6, B, 0.9));
    }
    (y(
      `${t}-arch-sign`,
      p,
      24.1,
      s + m * 2.3,
      c - 1,
      0.6,
      0.12,
      `metroGreen`,
      !1,
      !1,
    ),
      f.signs.push({
        id: `${t}-sign`,
        text: h ? `METROPOLITAIN` : `SORTIE`,
        x: p,
        y: 23.8 + 0.6,
        z: s + m * 2.38,
        ry: m > 0 ? 0 : Math.PI,
        w: c - 1.8,
        h: 0.42,
        col: 15913594,
        style: `fascia`,
        font: 0,
      }),
      f.buildings.push({
        id: t,
        x: p,
        y: u,
        z: (r + a) / 2,
        w: c,
        d: a - r,
        h: 12.8,
      }));
  }
  for (let [e, [t, n, r, i]] of p.entries()) {
    let a = r - t,
      o = i - n,
      s = a >= o,
      c = Math.max(1, Math.round((s ? a : o) / 9)),
      l = s
        ? o > 20
          ? [
              n + 5,
              (n + i) / 2 - 12,
              (n + i) / 2,
              (n + i) / 2 + 12,
              i - 5,
            ].filter((e) => !C.some((t) => Math.abs(t - e) < 3))
          : [(n + i) / 2]
        : [(t + r) / 2];
    for (let r = 0; r < c; r++) {
      let i = (r + 0.5) / c;
      for (let c of l) {
        let u = s ? t + a * i : c,
          d = s ? c : n + o * i,
          p = (e * 13 + r * 7) % 23 == 0;
        (L(u, 17.740000000000002, d, s ? 2.6 : 0.3, s ? 0.3 : 2.6, z, {
          rx: Math.PI / 2,
          gain: 1.6,
          mode: p ? `tv` : `steady`,
        }),
          R(u, 11.1, d, 6.5, z, 0.55),
          r % 2 == 0 &&
            l.indexOf(c) % 2 == 0 &&
            f.fixtureSpills.push({
              pos: [u, 17.400000000000002, d],
              intensity: 6,
              distance: 15,
              group: null,
            }));
      }
    }
  }
  {
    let e = _.map((e) => e[1]),
      t = 0;
    for (let n of O)
      for (let r of ce(n, [S, ...e, ...O.slice(0, O.indexOf(n))]))
        y(
          `paving-${t++}`,
          (r[0] + r[2]) / 2,
          19.98,
          (r[1] + r[3]) / 2,
          r[2] - r[0],
          0.05,
          r[3] - r[1],
          `pavement`,
          !1,
          !1,
        );
  }
  let $ = (e, t, n, r, i, a, o) => {
    let s = (t + r) / 2,
      c = (n + i) / 2,
      u = r - t,
      d = i - n;
    (y(e, s, 19, c, u, a + 1, d, `limestone`),
      A(`${e}-mansard`, s, l + a, c, u - 0.4, 4, d - 0.4, `zinc`));
    let f = Math.abs(o[0]) < 0.5,
      p = f ? u : d,
      m = o[0] ? s + o[0] * (u / 2 + 0.03) : 0,
      h = o[1] ? c + o[1] * (d / 2 + 0.03) : 0;
    for (let r = 0; r < 6; r++)
      for (let i = 3; i < p - 2; i += 3.6) {
        let a = f ? t + i : m,
          l = f ? h : n + i,
          u = 21 + r * 3.4;
        (y(
          `${e}-w-${r}-${i.toFixed(0)}`,
          a,
          u,
          l,
          f ? 1.3 : 0.06,
          r ? 2.3 : 2.9,
          f ? 0.06 : 1.3,
          r ? `glassDark` : `shopfront`,
          !1,
          !1,
        ),
          (r * 5 + Math.round(i) * 3 + Math.round(s + c)) % 10 < 2 &&
            r > 0 &&
            L(a, u + 1.15, l + (f ? o[1] * 0.05 : 0), 1.1, 2, r % 2 ? H : W, {
              gain: 0.8,
              ry: f ? 0 : Math.PI / 2,
            }));
      }
  };
  ($(`edge-n`, -262, -150, 262, -142, 24, [0, 1]),
    $(`edge-s`, -262, 142, 262, 150, 24, [0, -1]),
    $(`edge-w`, -270, -142, -262, 142, 22, [1, 0]),
    $(`edge-e`, 262, -142, 270, 142, 22, [-1, 0]));
  let pe = (e, t, n) => {
    (P.prop(e, `cp_light`, t, n, 0, { solid: !1 }),
      E(`${e}-pole`, t - 0.15, l, n - 0.15, t + 0.15, 25.6, n + 0.15, `metal`));
    for (let e of [0, Math.PI / 2])
      L(t, 25.55, n, 0.5, 0.32, B, { ry: e, gain: 1.9 });
    R(t, 20.13, n, 8, B, 0.85);
  };
  {
    let e = 0;
    for (let t of Object.values(U))
      for (let n = 1; n < t.length; n++) {
        let [r, i] = t[n - 1],
          [a, o] = t[n],
          s = Math.hypot(a - r, o - i);
        for (let t = 14; t < s - 8; t += 28) {
          let n = (a - r) / s,
            c = (o - i) / s,
            l = e % 2 ? 1 : -1,
            u = r + n * t - c * l * 7,
            d = i + c * t + n * l * 7;
          v(u, d, S, 4) ||
            _.some((e) => v(u, d, e[1], 4)) ||
            k.some((e) => Math.hypot(e.x - u, e.z - d) < 20) ||
            te.some((e) => Math.hypot(e.x - u, e.z - d) < 12) ||
            pe(`lamp-${e++}`, u, d);
        }
      }
    for (let e = -120; e <= 120; e += 20)
      for (let t of [-1, 1]) {
        let n = t * 52;
        _.some((t) => v(e, n, t[1], 5)) || pe(`lamp-front-${t}-${e}`, e, n);
      }
  }
  P.prop(`bandstand`, `mh_gazebo`, -112, 122, 0);
  for (let e = 0; e < 8; e++)
    D(`folly-col-${e}`, -120 + e * 4, 108, 0.45, 6, `limestone`, { solid: !0 });
  y(`folly-entablature`, -106, 26, 108, 30, 0.8, 1.4, `limestone`, !1);
  for (let [e, [t, n, r, i]] of [
    [-60, 76, 1.4, 8],
    [-104, 88, 1.4, 8],
    [-66, 110, 12, 1.4],
    [-40, 86, 1.4, 8],
  ].entries())
    w(`hedge-${e}`, t, n, r, 1.2, i, `hedge`);
  for (let [e, [t, n, r]] of [
    [-72, 108, !0],
    [-94, 90, !1],
    [-58, 86, !1],
    [-88, 110, !0],
  ].entries())
    P.prop(`park-bench-${e}`, `mh_bench`, t, n, r ? 0 : Math.PI / 2);
  for (let [e, [t, n]] of [
    [-70, 92],
    [-96, 88],
    [-52, 78],
    [-140, 60],
  ].entries()) {
    y(`crater-${e}`, t, 20.012, n, 4.2, 0.012, 3.6, `charcoal`, !1, !1);
    for (let r = 0; r < 5; r++) {
      let i = r * 1.26;
      y(
        `crater-${e}-lip-${r}`,
        t + Math.cos(i) * 2.3,
        l,
        n + Math.sin(i) * 2.1,
        1.4,
        0.35,
        0.9,
        `mud`,
        !1,
        !0,
      );
    }
  }
  (F(`a-bags-e`, -50, 70, 1.6, 8),
    F(`a-bags-w`, -112, 66, 8, 1.6),
    F(`a-bags-s`, -80, 112, 10, 1.6),
    N.crates(`a-crates`, -64, 62));
  for (let [e, [t, n]] of [
    [-104, 88],
    [-58, 90],
    [-66, 70],
    [-94, 64],
  ].entries())
    P.prop(
      `park-lamp-${e}`,
      e % 2 ? `mh_parklight4` : `mh_parklight1`,
      t,
      n,
      0,
    );
  for (let [e, t] of [
    [-104, 88],
    [-58, 90],
    [-66, 70],
    [-94, 64],
  ])
    R(e, 20.13, t, 4.5, H, 0.7);
  (N.car(`a-ambulance`, -176, 112, !0, `car_van`),
    N.car(`a-police`, -40, 118, !0, `car_police`, `fire`));
  for (let [e, t] of [56, 80, 104].entries()) {
    y(
      `cafe-awning-${e}`,
      t,
      22.8,
      -121,
      14,
      0.14,
      4,
      e % 2 ? `canvasRed` : `canvasGreen`,
      !1,
    );
    for (let n = 0; n < 3; n++)
      P.prop(
        `cafe-table-${e}-${n}`,
        `mh_coffeetable`,
        t - 4.5 + n * 4.5,
        -118,
        0,
        { solid: !1 },
      );
    y(`cafe-rail-${e}`, t, l, -116.5, 13, 0.9, 0.12, `ironBlack`);
    for (let n of [-1, 1])
      y(
        `cafe-post-${e}-${n}`,
        t + n * 6.8,
        l,
        -119.2,
        0.1,
        2.8,
        0.1,
        `ironBlack`,
        !1,
      );
  }
  (D(`morris-column`, 96, -88, 1.1, 4.2, `metroGreen`, { solid: !0 }),
    D(`morris-posters`, 96, -88, 1.13, 3, `postersRed`, { y: 20.6 }),
    D(`morris-cap`, 96, -88, 1.3, 0.8, `metroGreen`, { y: 24.2 }),
    P.prop(`c-bus-shelter`, `cp_busstop`, 64, -104, 0),
    y(`bus-body`, 60, 20.45, -72, 11.5, 2.9, 2.6, `busGreen`),
    E(`bus`, 54.25, l, -73.3, 65.75, 23.35, -70.7, `metal`),
    y(`bus-glass-n`, 60, 21.7, -73.32, 10.5, 1.1, 0.04, `glassDark`, !1, !1),
    y(`bus-glass-s`, 60, 21.7, -70.68, 10.5, 1.1, 0.04, `glassDark`, !1, !1));
  for (let e of [-1, 1])
    for (let t of [-1, 1])
      D(`bus-wheel-${e}-${t}`, 60 + e * 3.8, -72 + t * 1.2, 0.5, 0.3, `rail`, {
        y: l,
      });
  (N.car(`c-car-a`, 110, -60, !1),
    N.car(`c-car-b`, 110, -92, !1, null, !0),
    F(`c-bags-a`, 104, -66, 1.6, 8),
    F(`c-bags-w`, 56, -86, 1.6, 8),
    F(`c-bags-n`, 80, -108, 10, 1.6),
    N.crates(`c-crates`, 96, -66));
  for (let [e, [t, n]] of [
    [60, -70],
    [100, -110],
    [112, -70],
  ].entries())
    P.prop(`c-post-${e}`, `mh_post`, t, n, 0);
  (P.prop(`c-postbox`, `cp_postbox`, 88, -104, 0),
    P.prop(`c-hydrant`, `cp_hydrant`, 64, -92, 0),
    L(96, 23.5, -86.85, 1.8, 2, W, { gain: 0.7 }));
  for (let e of [-1, 1]) {
    let t = (t, n) => (e < 0 ? [t, n] : G(t, n)),
      n = e < 0 ? `nw` : `se`;
    for (let [e, [r, i]] of [
      [-116, -62],
      [-60, -70],
      [-24, -60],
      [12, -62],
    ].entries()) {
      let [a, o] = t(r, i);
      N.car(`${n}-car-${e}`, a, o, !0, null, e === 2 ? `fire` : e === 1);
    }
    {
      let [e, r] = t(-40, -110);
      P.prop(`${n}-shelter`, `cp_busstop`, e, r, 0);
    }
    {
      let [e, r] = t(-80, -60);
      (y(`${n}-kiosk`, e, l, r, 3, 2.6, 2.2, `metroGreen`),
        y(`${n}-kiosk-roof`, e, 22.6, r, 3.6, 0.4, 2.8, `metroGreen`, !1));
    }
    for (let [e, [r, i]] of [
      [-100, -120],
      [-20, -122],
      [30, -80],
    ].entries()) {
      let [a, o] = t(r, i);
      F(`${n}-bags-${e}`, a, o, 8, 1.6);
    }
    {
      let [e, r] = t(-150, -116);
      N.van(`${n}-van`, e, r, !0);
    }
    for (let [e, [r, i]] of [
      [-60, -126],
      [0, -112],
      [-140, -128],
    ].entries()) {
      let [a, o] = t(r, i);
      P.prop(`${n}-tree-${e}`, e % 2 ? `mh_tree2` : `mh_tree1`, a, o, e);
    }
  }
  for (let [e, [t, n]] of [
    [150, -110],
    [176, 10],
    [150, 110],
    [196, -110],
  ].entries())
    N.car(`east-car-${e}`, t, n, e % 2 == 0);
  for (let [e, [t, n]] of [
    [160, -20],
    [136, 118],
    [186, 90],
  ].entries())
    F(`east-bags-${e}`, t, n, 1.6, 8);
  (w(`park-basin`, -228, -80, 16, 0.6, 10, `coping`),
    y(`park-basin-bed`, -228, 20.05, -80, 15, 0.05, 9, `mud`, !1, !1));
  for (let [e, [t, n]] of [
    [-160, -30],
    [-200, 100],
    [-170, -110],
  ].entries())
    P.prop(`park-bench-w-${e}`, `mh_bench`, t, n, e);
  for (let [e, [t, n]] of [
    [-172, 4],
    [-228, -40],
    [-240, 100],
  ].entries())
    F(`park-bags-${e}`, t, n, 8, 1.6);
  let me = (e, t, n) => {
    let r = m(t, n),
      i = 3.2,
      a = 2.4,
      o = r + i * 4,
      s = [t - 2.3, t - 0.7],
      c = (t, n, r, i, a, o, s, c) => y(`${e}-${t}`, n, r, i, a, o, s, c),
      l = [];
    for (let o = 0; o < 4; o++) {
      let u = s[o % 2],
        d = o % 2 ? -1 : 1,
        f = r + o * i,
        p = f + i;
      (M(`${e}-flight-${o}`, u, 1.5, n - d * a, n + d * a, f, p, `timber`),
        l.push([u, f, n - d * a], [u, p, n + d * a]),
        o < 3 &&
          c(
            `landing-${o}`,
            t - 1.5,
            p - 0.2,
            n + d * 3.0999999999999996,
            3.1,
            0.2,
            1.4,
            `timber`,
          ));
    }
    for (let e of [-1, 1])
      for (let i of [-1, 1])
        c(
          `column-${e}${i}`,
          t + e * 3.78,
          r - 0.4,
          n + i * 3.78,
          0.45,
          o - r + 0.2,
          0.45,
          `metalDark`,
        );
    for (let e = 1; e < 4; e++) {
      let a = r + e * i - 0.25;
      for (let r of [-1, 1])
        (c(`ring-${e}-x${r}`, t + r * 3.78, a, n, 0.25, 0.25, 7.1, `metalDark`),
          c(
            `ring-${e}-z${r}`,
            t,
            a,
            n + r * 3.78,
            7.1,
            0.25,
            0.25,
            `metalDark`,
          ));
    }
    (c(`deck-w`, t - 2.725, o - 0.2, n, 2.55, 0.2, 8, `timber`),
      c(`deck-e`, t + 2.025, o - 0.2, n, 3.95, 0.2, 8, `timber`),
      c(`deck-arrive`, t - 0.7, o - 0.2, n - 3.2, 1.5, 0.2, 1.6, `timber`),
      c(`deck-n`, t - 0.7, o - 0.2, n + 3.2, 1.5, 0.2, 1.6, `timber`),
      c(`well-rail-w`, t - 1.51, o, n, 0.12, 0.95, 4.8, `metalDark`),
      c(`well-rail-e`, t + 0.11, o, n, 0.12, 0.95, 4.8, `metalDark`),
      c(`well-rail-n`, t - 0.7, o, n + 2.46, 1.5, 0.95, 0.12, `metalDark`));
    for (let e of [-1, 1])
      (c(`parapet-x${e}`, t + e * 3.875, o, n, 0.25, 1.1, 8, `timber`),
        c(`parapet-z${e}`, t, o, n + e * 3.875, 7.5, 1.1, 0.25, `timber`));
    for (let e of [-1, 1])
      for (let r of [-1, 1])
        c(
          `post-${e}${r}`,
          t + e * 3.7,
          o + 1.1,
          n + r * 3.7,
          0.25,
          1.5,
          0.25,
          `metalDark`,
        );
    (c(`roof`, t, o + 2.6, n, 8.6, 0.25, 8.6, `zinc`),
      l.push([t + 2.2, o, n - 2.8]),
      f.buildings.push({ id: e, x: t, y: r, z: n, w: 8, d: 8, h: o - r + 3 }),
      f.towerRooms.push({
        id: `${e}-nest`,
        buildingId: e,
        floorIndex: 4,
        urban: !0,
        tower: !0,
        x: t,
        z: n,
        floor: o,
        stairRoute: l,
        entry: l.at(-1),
        door: l.at(-1).slice(),
        stairStart: [s[0], m(s[0], n - a - 2), n - a - 2],
        stations: [
          { id: `east`, pos: [t + 3.1, o, n + 0.5], yaw: -Math.PI / 2 },
          { id: `west`, pos: [t - 3.1, o, n + 1.5], yaw: Math.PI / 2 },
          { id: `north`, pos: [t + 2.3, o, n - 3.1], yaw: 0 },
          { id: `south`, pos: [t - 2.4, o, n + 3.1], yaw: Math.PI },
        ],
      }));
  };
  for (let e = 0; e < 2; e++) {
    let t = (t, n) => (e ? G(t, n) : [t, n]),
      n = `hq` + e;
    {
      let [r, i] = t(-236, 22);
      (y(`${n}-tent`, r, l, i, 10, 3, 7, e ? `canvasBlue` : `canvasGreen`),
        A(
          `${n}-tent-roof`,
          r,
          23,
          i,
          10.6,
          1.6,
          7.6,
          e ? `canvasBlue` : `canvasGreen`,
        ));
    }
    {
      let [e, r] = t(-226, 88);
      N.crates(`${n}-crates`, e, r);
    }
    {
      let [e, r] = t(-196, 22);
      N.generator(`${n}-gen`, e, r);
    }
    for (let [n, r] of [50, 60, 70, 80, 90].entries()) {
      let [n, i] = t(-246, r);
      f.vehicleSpawns.push({ team: e, type: 0, x: n, z: i });
    }
    for (let [e, r] of [14, -12].entries()) {
      let [i, a] = t(-196, r);
      F(`${n}-bags-${e}`, i, a, 1.6, 10);
    }
    {
      let [e, r] = t(-232, 10);
      me(`${n}-tower`, e, r);
    }
    {
      let [r, i] = t(-228, 76);
      (P.prop(`${n}-mast`, `mh_post2`, r, i, 0),
        y(
          `${n}-banner`,
          r,
          24.2,
          i + 0.1,
          2.4,
          1.3,
          0.08,
          e ? `cobalt` : `amber`,
          !1,
          !1,
        ));
    }
  }
  for (let [e, [t, n]] of [
    [-50, 108],
    [50, -108],
  ].entries())
    f.vehicleSpawns.push({
      team: -1,
      type: 0,
      id: `field-jeep-${e}`,
      x: t,
      z: n,
      yaw: e ? -Math.PI / 2 : Math.PI / 2,
    });
  return (
    (f.landmarks = [
      { id: `lm-block`, label: `ÎLOT LAFAYETTE`, x: 0, z: 0, w: 252, d: 92 },
      { id: `lm-park`, label: `PARC MONCEAU`, x: -190, z: 0, w: 120, d: 260 },
      { id: `lm-bd-n`, label: `BD HAUSSMANN`, x: -60, z: -100, w: 130, d: 40 },
      { id: `lm-bd-s`, label: `RUE LAFAYETTE`, x: 60, z: 100, w: 130, d: 40 },
      { id: `lm-place`, label: `PLACE CADET`, x: 190, z: 0, w: 120, d: 260 },
    ]),
    a ? r(f) : f
  );
}
export { a as i, W as n, G as r, c as t };
//# sourceMappingURL=metro-lfflje4Q.js.map
