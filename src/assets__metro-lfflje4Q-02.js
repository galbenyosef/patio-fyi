// assets__metro-lfflje4Q 02 — map
// Lines 34-379 of readable/assets__metro-lfflje4Q.pretty.js (statement-aligned).
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
