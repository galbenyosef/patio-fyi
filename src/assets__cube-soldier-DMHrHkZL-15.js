// assets__cube-soldier-DMHrHkZL 15 — bevel
// Lines 4310-4643 of readable/assets__cube-soldier-DMHrHkZL.pretty.js (statement-aligned).
var Y = (e, t, n, r, i, a, o, s = {}) =>
    U(e, t, n, r, i, a, o, { ...s, bevel: 0 }),
  Zi = [`assault`, `sniper`, `support`, `engineer`, `medic`],
  Qi = [Yn, Yn],
  $i = [
    `none`,
    `scarf`,
    `radio`,
    `bandolier`,
    `bedroll`,
    `knife`,
    `admin`,
    `heavy`,
    `grenades`,
    `holster`,
    `canteen`,
  ],
  ea = [
    {
      name: `Amber`,
      team: 14850092,
      cloth: 12035452,
      gear: 4936516,
      helmet: 10259046,
      rim: 7299401,
    },
    {
      name: `Crimson`,
      team: 13777458,
      cloth: 3552827,
      gear: 8137258,
      helmet: 2894896,
      rim: 1579034,
    },
  ],
  ta = [4012851, 2368551],
  na = Object.freeze({
    kepler: Object.freeze([
      { cloth: 11843772, gear: 13136938, helmet: 14080212, rim: 7106676 },
      { cloth: 3094084, gear: 8137258, helmet: 2896186, rim: 1579809 },
    ]),
    hangar: Object.freeze([
      { cloth: 8357480, gear: 4409913, helmet: 7041115, rim: 4935489 },
      { cloth: 3883600, gear: 8137258, helmet: 3159358, rim: 1842981 },
    ]),
    mesa: Object.freeze([
      { cloth: 12087356, gear: 2060139, helmet: 2785146, rim: 6962466 },
      { cloth: 2240597, gear: 9053734, helmet: 1845063, rim: 1054244 },
    ]),
  }),
  ra = [
    { cloth: 13226708, gear: 5596767, helmet: 13950173, rim: 8030860 },
    { cloth: 11843258, gear: 7220268, helmet: 12632773, rim: 3815998 },
  ],
  X = {
    boot: 2236187,
    sole: 1315602,
    glove: 8022607,
    metal: 2960683,
    dark: 1974046,
    wood: 5916210,
    white: 15658728,
    red: 13115434,
    lens: 1845806,
  },
  ia = (e) => ({ tag: On.cloth, shade: e }),
  Z = (e = 1) => ({ tag: On.gear, shade: e }),
  aa = { tag: On.team },
  Q = 16777215;
function oa(e, t) {
  let n = e.hair,
    r = [];
  if (e.hairStyle === 2) return r;
  let i = [0.014, 0.034, 0, 0.04][e.hairStyle];
  (t ||
    r.push(
      Y(G.w + 0.012, i, G.d + 0.012, 0, Wn + i / 2 - 0.004, 0, n, {
        bevel: 0.006,
      }),
    ),
    r.push(
      Y(
        G.w + 0.008,
        t ? 0.1 : 0.2,
        0.02,
        0,
        t ? Wn - 0.2 : Wn - 0.1,
        G.d / 2 + 0.006,
        n,
        { bevel: 0.005 },
      ),
    ));
  for (let e of [-1, 1])
    r.push(
      Y(
        0.016,
        t ? 0.06 : 0.1,
        G.d * 0.55,
        e * (G.w / 2 + 0.004),
        Wn - (t ? 0.13 : 0.06),
        0.05,
        n,
        { bevel: 0.004 },
      ),
    );
  return (
    e.hairStyle === 3 &&
      r.push(
        Y(0.07, 0.12, 0.06, 0, Wn - 0.16, G.d / 2 + 0.035, n),
        Y(0.075, 0.025, 0.065, 0, Wn - 0.1, G.d / 2 + 0.035, X.dark),
      ),
    r
  );
}
function sa(e, t, n, r, i) {
  let a = e.skin,
    o = [
      Y(G.w, G.h, G.d, 0, G.y, 0, a, { bevel: 0.022 }),
      Y(0.13, 0.08, 0.12, 0, 0.03, 0.01, a, { shade: 0.86 }),
      ...[-1, 1].map((e) =>
        Y(0.03, 0.075, 0.06, e * (G.w / 2 + 0.01), Kn(12), 0.02, a, {
          shade: 0.93,
          bevel: 0.008,
        }),
      ),
    ];
  if (r === `sniper`) return { hard: Nn(o), soft: null, shell: null };
  o.push(...oa(e, !0), ...Br(t, n, e.index, i));
  let s = o.find((e) => e.userData.shell),
    c = o.filter((e) => e.userData.smooth && !e.userData.shell);
  return {
    hard: Nn(o.filter((e) => !e.userData.smooth)),
    soft: c.length ? Nn(c) : null,
    shell: s,
  };
}
function ca(e) {
  let t = e
    ? []
    : [
        Y(0.36, 0.2, 0.225, 0, 0.02, 0, Q, ia(0.8)),
        Y(0.38, 0.055, 0.245, 0, 0.12, 0, X.dark, { bevel: 0.01 }),
        Y(0.05, 0.04, 0.012, 0, 0.12, -0.127, 9144954, { bevel: 0.004 }),
        Y(0.37, 0.14, 0.225, 0, 0.21, 0, Q, ia(0.95)),
      ];
  if (
    (e || t.push(Y(0.42, 0.32, 0.25, 0, 0.42, 0, Q, ia(1))),
    t.push(
      Y(0.22, 0.05, 0.17, 0, 0.6, 0, Q, ia(0.75)),
      Y(0.012, 0.3, 0.008, 0.03, 0.4, -0.127, Q, ia(0.7)),
    ),
    !e)
  )
    for (let e of [-1, 1])
      for (let n = 0; n < 9; n++) {
        let r = ((n * 7) % 13) / 13 - 0.5,
          i = ((n * 5) % 11) / 11 - 0.5;
        t.push(
          Y(0.07, 0.035, 0.004, r * 0.36, 0.38 + i * 0.36, e * 0.126, Q, {
            ...ia(n % 2 ? 0.72 : 1.16),
            bevel: 0,
          }),
        );
      }
  return t;
}
function la(e = 0.42, t = 0.32, n = 0.25, r = 0.42, i = 0.07) {
  let a = e / 2,
    o = r - t / 2,
    c = r + t / 2,
    u = [[-a, o]];
  for (let e = 0; e <= 8; e++) {
    let t = Math.PI - ((e / 8) * Math.PI) / 2;
    u.push([-a + i + i * Math.cos(t), c - i + i * Math.sin(t)]);
  }
  for (let e = 0; e <= 8; e++) {
    let t = Math.PI / 2 - ((e / 8) * Math.PI) / 2;
    u.push([a - i + i * Math.cos(t), c - i + i * Math.sin(t)]);
  }
  u.push([a, o]);
  let d = [],
    f = [],
    p = [],
    m = (e) => 0.02 + (0.96 * (e - o)) / t;
  u.forEach(([e, t], r) => {
    let i = 0.68 + (0.31 * r) / (u.length - 1);
    (d.push(e, t, -n / 2, e, t, n / 2), p.push(i, 0.02, i, 0.98));
  });
  for (let e = 0; e < u.length - 1; e++) {
    let t = e * 2,
      n = t + 1,
      r = t + 3,
      i = t + 2;
    f.push(t, r, i, t, n, r);
  }
  for (let [t, r] of [
    [-1, -n / 2],
    [1, n / 2],
  ]) {
    let n = d.length / 3;
    for (let [n, i] of u)
      (d.push(n, i, r),
        p.push(
          t < 0 ? 0.005 + (0.32 * (n + a)) / e : 0.345 + (0.31 * (a - n)) / e,
          m(i),
        ));
    for (let e = 1; e < u.length - 1; e++)
      t < 0 ? f.push(n, n + e, n + e + 1) : f.push(n, n + e + 1, n + e);
  }
  let h = d.length / 3,
    _ = new Float32Array(h * 3),
    v = new Float32Array(h).fill(On.cloth);
  for (let e = 0; e < h; e++) _.set([1, 1, 1], e * 3);
  let y = new l();
  return (
    y.setAttribute(`position`, new g(d, 3)),
    y.setAttribute(`color`, new s(_, 3)),
    y.setAttribute(`aTag`, new s(v, 1)),
    y.setAttribute(`uv`, new g(p, 2)),
    y.setIndex(f),
    y.computeVertexNormals(),
    (y.userData.smoothLimb = !0),
    y
  );
}
var ua = (e) => [
  Y(0.065, 0.045, 0.012, 0.11, 0.5, -e, Q, aa),
  Y(0.15, 0.03, 0.012, 0, 0.5, e, Q, aa),
];
function da(e, t, n, r = 1) {
  return Y(e, t, n, 0, 0.41, 0, Q, { ...Z(r), bevel: 0.025 });
}
function fa() {
  return [
    Y(0.32, 0.36, 0.15, 0, 0.36, 0.23, Q, Z(1.08)),
    Y(0.3, 0.07, 0.16, 0, 0.56, 0.235, Q, Z(0.9)),
    ...[-1, 1].map((e) => Y(0.07, 0.18, 0.1, e * 0.19, 0.3, 0.22, Q, Z(0.95))),
    ...[0.28, 0.44].map((e) =>
      Y(0.33, 0.022, 0.155, 0, e, 0.232, X.dark, { bevel: 0 }),
    ),
    Y(0.018, 0.018, 0.3, 0.12, 0.6, 0.02, X.dark, {
      rot: [0.3, 0, 0],
      bevel: 0,
    }),
    Y(0.022, 0.2, 0.02, 0.13, 0.48, -0.14, X.dark, { bevel: 0 }),
    Y(0.009, 0.62, 0.009, -0.12, 0.86, 0.26, X.dark, {
      rot: [-0.08, 0, 0.12],
      bevel: 0,
    }),
  ];
}
var pa = () => [
  Y(0.05, 0.06, 0.03, -0.14, 0.55, -0.17, X.dark, { bevel: 0.01 }),
  Y(0.012, 0.16, 0.012, -0.15, 0.62, -0.08, X.dark, {
    rot: [0.9, 0, 0],
    bevel: 0,
  }),
];
function ma(e, t) {
  let n = [];
  return (
    e === `assault` &&
      n.push(
        da(0.45, 0.3, 0.3),
        ...[-0.12, 0, 0.12].map((e) =>
          Y(0.09, 0.11, 0.05, e, 0.33, -0.17, Q, Z(0.85)),
        ),
        ...[-0.12, 0, 0.12].map((e) =>
          Y(0.07, 0.02, 0.052, e, 0.39, -0.17, Q, Z(0.65)),
        ),
        Y(0.1, 0.16, 0.1, 0.24, 0.2, 0.02, Q, Z(0.9)),
        ...fa(),
        ...[-0.13, 0.13].map((e) =>
          Y(0.04, 0.24, 0.03, e, 0.52, -0.155, Q, Z(0.7)),
        ),
        ...ua(0.155),
      ),
    e === `support` &&
      n.push(
        da(0.47, 0.34, 0.32, 0.95),
        Y(0.4, 0.4, 0.22, 0, 0.36, 0.26, Q, Z(1.1)),
        Y(0.34, 0.06, 0.24, 0, 0.58, 0.26, Q, Z(0.8)),
        ...[-0.17, 0.17].map((e) =>
          Y(0.1, 0.22, 0.12, e, 0.3, 0.36, Q, Z(0.95)),
        ),
        Y(0.3, 0.14, 0.06, 0, 0.12, -0.16, Q, Z(0.8)),
        ...Array.from({ length: 9 }, (e, t) =>
          Y(
            0.05,
            0.028,
            0.03,
            -0.17 + t * 0.042,
            0.52 - t * 0.034,
            -0.18,
            11574366,
            { rot: [0, 0, 0.4], bevel: 0.006 },
          ),
        ),
        ...ua(0.18),
      ),
    e === `engineer` &&
      n.push(
        da(0.44, 0.3, 0.29, 0.9),
        ...[-1, 1].map((e) =>
          Y(0.06, 0.44, 0.03, e * 0.11, 0.36, -0.155, 9992535, {
            rot: [0, 0, e * 0.25],
            bevel: 0.01,
          }),
        ),
        Y(0.38, 0.09, 0.3, 0, 0.1, 0, 6902075, { bevel: 0.015 }),
        Y(0.26, 0.3, 0.14, 0, 0.36, 0.2, 7691846),
        ...[-0.15, 0, 0.15].map((e) =>
          Y(0.1, 0.1, 0.08, e, 0.07, -0.17, 8875084),
        ),
        Y(0.025, 0.4, 0.03, -0.1, 0.62, 0.24, X.metal, { bevel: 0.006 }),
        Y(0.12, 0.03, 0.05, -0.1, 0.82, 0.24, 9210485),
        ...ua(0.16),
      ),
    e === `medic` &&
      n.push(
        da(0.43, 0.28, 0.28, 1.05),
        Y(0.32, 0.3, 0.16, 0, 0.36, 0.22, Q, Z(1.15)),
        Y(0.18, 0.18, 0.01, 0, 0.37, 0.305, X.white, { bevel: 0.004 }),
        Y(0.13, 0.04, 0.012, 0, 0.37, 0.31, X.red, { bevel: 0 }),
        Y(0.04, 0.13, 0.012, 0, 0.37, 0.31, X.red, { bevel: 0 }),
        ...[-0.1, 0.1].map((e) =>
          Y(0.1, 0.12, 0.07, e, 0.22, -0.18, Q, Z(0.9)),
        ),
        ...ua(0.15),
      ),
    e !== `sniper` && n.push(...pa()),
    n
  );
}
