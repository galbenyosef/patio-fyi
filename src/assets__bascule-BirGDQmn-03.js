// assets__bascule-BirGDQmn 03 — freeze
// Lines 10172-10488 of readable/assets__bascule-BirGDQmn.pretty.js (statement-aligned).
function se(e, t, n) {
  let r = [];
  for (let i = 0; i < e.length; i++) {
    let a = e[i],
      o = e[(i + 1) % e.length],
      s = n ? a[1] >= t : a[1] <= t,
      c = n ? o[1] >= t : o[1] <= t;
    if ((s && r.push(a), s !== c)) {
      let e = (t - a[1]) / (o[1] - a[1]);
      r.push([a[0] + e * (o[0] - a[0]), t]);
    }
  }
  return r;
}
function C(e, t, n = !1) {
  let r = e.scale ?? 1,
    i = e.y ?? 0,
    a = [
      [t[0], t[2]],
      [t[3], t[2]],
      [t[3], t[5]],
      [t[0], t[5]],
    ].map(([t, n]) => oe(e, t, n)),
    o = Math.min(...a.map((e) => e[1])),
    s = Math.max(...a.map((e) => e[1])),
    c =
      n && Math.abs(Math.sin((e.yaw ?? 0) * 2)) > 1e-6
        ? Math.max(1, Math.ceil((s - o) / 0.1))
        : 1,
    l = [];
  for (let e = 0; e < c; e++) {
    let n = o + ((s - o) * e) / c,
      u = o + ((s - o) * (e + 1)) / c,
      d = c === 1 ? a : se(se(a, n, !0), u, !1);
    d.length &&
      l.push([
        Math.min(...d.map((e) => e[0])),
        i + t[1] * r,
        n,
        Math.max(...d.map((e) => e[0])),
        i + t[4] * r,
        u,
      ]);
  }
  return l;
}
function ce(e, t) {
  let n = x[e.kind];
  if (!n) throw Error(`Unknown street vehicle ${e.kind}`);
  let r = e.scale ?? 1;
  if (!(r > 0 && Number.isFinite(r)))
    throw Error(`Street vehicle scale must be positive`);
  let i = {
      key: S(e.kind, r),
      pos: [e.x, e.y ?? 0, e.z],
      yaw: e.yaw ?? 0,
      build: { kind: `streetVehicle`, model: e.kind, scale: r },
    },
    a = C(e, n.bounds)[0].map((e, t) => e + (t < 3 ? -0.002 : 0.002));
  return [
    { id: `${t}-shots`, aabb: a, shotOnly: !0, surface: `metal`, shotMesh: i },
    ...n.movement.flatMap(({ box: n }, r) =>
      C(e, n, !0).map((e, n) => ({
        id: `${t}-part-${r}-${n}`,
        aabb: e,
        surface: `metal`,
        pen: `metal`,
        shotMesh: i,
        noRay: !0,
      })),
    ),
  ];
}
var w = e({
    BANK: () => 8,
    BASCULE_CLIMATE: () => de,
    BASCULE_CONFIG: () => G,
    BASCULE_DAY: () => !0,
    BASCULE_ID: () => le,
    BASCULE_NAME: () => ue,
    BASCULE_ROUTES: () => ye,
    BED: () => -5,
    F1: () => 20,
    GALLERY: () => A,
    HALF: () => 26,
    HINGE: () => 15,
    HW: () => ne,
    LEAF: () => 15,
    QUAY: () => 58,
    S: () => 12,
    buildBascule: () => K,
  }),
  le = `bascule-v1`,
  ue = `Bascule`,
  de = Object.freeze({
    fog: 0.28,
    nearHaze: 0.07,
    nearHazeFalloff: 0.004,
    heightFalloff: 0.008,
    overcast: 0.08,
    rain: 0,
    snow: 0,
    clouds: 0.3,
    exposure: 1,
    tod: 10.5,
    visibility: 240,
  }),
  T = Object.freeze([-118, -35, 118, 35]),
  E = Object.freeze([-118, -68, 118, 35]),
  D = Object.freeze({
    x: 26,
    hx: 9,
    hz: 12,
    top: 40,
    arch: 6,
    pierHx: 11,
    pierHz: 15,
  }),
  O = 7,
  k = Object.freeze({ y: 32, z: 5.2, hw: 1.8, roof: 35.8, chord: 28.8 }),
  A = Object.freeze({ floor: 32, ceil: 36 }),
  j = 0.6,
  fe = 2.7,
  M = Object.freeze({
    in0: 6.4,
    in1: 8.4,
    out0: -6.4,
    out1: -8.4,
    zA: 8.5,
    zB: 10.5,
    z0: 7.6,
    z1: 11.4,
  }),
  N = Object.freeze({
    hallFoot: -6,
    hallTop: 6.8,
    grandX: 5.4,
    grandHalf: 3,
    sideZ: Object.freeze([3.6, 7.6]),
    spine: 7.6,
  }),
  pe = (e, t) => [-e, -t];
(Object.freeze({ ...D, hz: D.hz + m, pierHz: D.pierHz + m }),
  Object.freeze({ ...k, z: u(k.z) }),
  Object.freeze({
    ...N,
    sideZ: Object.freeze(N.sideZ.map(u)),
    spine: u(N.spine),
  }),
  Object.freeze([v(E[0]), E[1] - m, v(E[2]), E[3] + m]),
  Object.freeze([v(T[0]), T[1] - m, v(T[2]), T[3] + m]));
var P = -D.x,
  F = (e) => P + e;
function me(e) {
  let t = e * 9.5,
    n = N.hallTop - N.hallFoot,
    r = [
      [F(-7.4), e * 4.6, 12],
      [F(-7.4), e * 6.6, 12],
      [F(-7.2), e * 8.6, 12],
      [F(N.hallFoot + 0.4), t, 12],
    ];
  for (let e of [-3, 0, 3])
    r.push([F(e), t, +(12 + (8 * (e - N.hallFoot)) / n).toFixed(2)]);
  return (r.push([F(N.hallTop + 0.6), t, 20]), r);
}
function he(e) {
  let t = N.grandX,
    n = e * 1.6,
    r = (e * (N.sideZ[0] + N.sideZ[1])) / 2,
    i = [
      [F(N.hallTop + 0.6), e * 6.4, 20],
      [F(t + 1.2), n, 20],
    ];
  for (let e of [3, 0, -3])
    i.push([F(e), n, +(20 + (6 * (t - e)) / (2 * t)).toFixed(2)]);
  i.push([F(-t - 1.5), n, 26], [F(-t - 1.5), r, 26]);
  for (let e of [-3, 0, 3])
    i.push([F(e), r, +(26 + ((A.floor - 26) * (e + t)) / (2 * t)).toFixed(2)]);
  return (i.push([F(t + 1.4), r, A.floor]), i);
}
function ge(e) {
  return [
    ...me(e),
    ...he(e).slice(1),
    [F(7.6), e * k.z, A.floor],
    [F(9.4), e * k.z, k.y],
  ];
}
var I = (e) => [
    [-10, e * k.z, k.y],
    [-3, e * k.z, k.y],
    [4, e * k.z, k.y],
    [11, e * k.z, k.y],
  ],
  L = (e) => e.map(([e, t, n, ...r]) => [-e, -t, n, ...r]),
  R = Object.freeze([
    { x: -90, z: 0 },
    { x: 90, z: 0 },
  ]),
  z = [
    [R[0].x, R[0].z, 12],
    [-80, 0, 12],
    [-68, 0, 12],
    [-58, 0, 12],
    [-48, 0, 12],
  ],
  _e = (e) =>
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
  B = [
    [R[0].x, R[0].z, 12],
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
    [-36, -5, 12],
    [-37, 0, 12],
  ],
  V = [
    [-37, 0, 12],
    [-26, 0, 12],
    [-16, 0, 12],
    [-8, 0, 12],
  ],
  H = [...V, [0, 0, 12], ...L(V).reverse()],
  U = (e) => [...ge(e), ...I(e), ...L(ge(-e)).reverse()],
  W = (e, t, n) => [...e, ...t, ...L(n).reverse()],
  ve = {
    deck: W(z, H, z),
    walkn: W([...z.slice(0, 4), ..._e(1)], U(1), [...z.slice(0, 4), ..._e(-1)]),
    walks: W([...z.slice(0, 4), ..._e(-1)], U(-1), [
      ...z.slice(0, 4),
      ..._e(1),
    ]),
    engine: W(B, H, B),
  },
  ye = ((e) =>
    Object.fromEntries(
      Object.entries(e).map(([e, t]) => [
        e,
        Object.freeze(t.map((e) => Object.freeze(e.slice()))),
      ]),
    ))(Object.fromEntries(Object.entries(ve).map(([e, t]) => [e, b(h(t))]))),
  be = [
    { pos: [-90, 12, 2.5], yaw: -Math.PI / 2 },
    { pos: [90, 12, -2.5], yaw: Math.PI / 2 },
  ],
  G = Object.freeze(
    y(
      s({
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
      }),
    ),
  );
