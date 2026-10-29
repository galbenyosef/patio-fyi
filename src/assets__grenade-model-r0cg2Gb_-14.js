// assets__grenade-model-r0cg2Gb_ 14 — math
// Lines 27147-27456 of readable/assets__grenade-model-r0cg2Gb_.pretty.js (statement-aligned).
function Er(e, t, n, r, i, a, o = 0.004, s = 0.009) {
  e.slab(
    t,
    [
      [n, i],
      [r, i],
      [r, i - a + 0.006],
      [r - 0.006, i - a],
      [n + 0.004, i - a],
      [n, i - a + 0.008],
    ],
    s,
    0,
    0.0012,
    [
      [
        [n + o, i - 0.001],
        [r - o, i - 0.001],
        [r - o, i - a + o + 0.004],
        [r - 0.006 - o * 0.5, i - a + o],
        [n + 0.004 + o * 0.5, i - a + o],
        [n + o, i - a + o + 0.006],
      ],
    ],
  );
  let c = n + (r - n) * 0.42,
    l = e.slab(
      `satin`,
      [
        [c, i],
        [c - 0.005, i],
        [c - 0.004, i - 0.011],
        [c + 0.001, i - 0.018],
        [c + 0.003, i - 0.016],
        [c, i - 0.009],
      ],
      0.005,
      0,
      8e-4,
    );
  l.userData.familyTrigger = { pivot: c, tip: c + 0.001, forward: 1 };
}
var Dr = (e, t, n, r) => {
  let { tube: i, rbox: a, side: o } = e;
  o((e) => {
    (i(`satin`, t, n, e * (r / 2 + 5e-4), 0.004, 0.002, `z`, 0.004, 14),
      a(
        `satin`,
        t + 0.006,
        n - 0.002,
        e * (r / 2 + 0.0014),
        0.014,
        0.0035,
        0.0018,
        5e-4,
      ));
  });
  for (let [e, i] of [
    [-0.006, `mark`],
    [0.007, `markred`],
    [0.014, `markred`],
  ])
    a(i, t + e, n + 0.008, -r / 2 - 6e-4, 0.0024, 0.0017, 5e-4, 0);
};
function Or(e) {
  function t(t, n) {
    t.familyStyle = n;
    let r = e.kit(t),
      { run: i, rr: a, rbox: o, slab: s, tube: c, side: l, S: u } = r;
    (Sr(r.M),
      _r(r),
      r.railAt(0.248, 0.344, -0.034, 0, `down`),
      i(
        `polyg`,
        0.144,
        0.203,
        (e) => a(-0.062 + e, -0.028, 0.029 - 2 * e, 0.003, 0.003),
        0.002,
      ),
      s(
        `poly`,
        [
          [0.145, -0.059],
          [0.203, -0.059],
          [0.198, -0.068],
          [0.146, -0.067],
        ],
        0.031,
        0,
        0.001,
      ),
      r.pgrip(
        `poly`,
        [
          [0.074, -0.033],
          [0.041, -0.033],
          [0.029, -0.047],
          [0.014, -0.119],
          [0.023, -0.131],
          [0.049, -0.126],
          [0.058, -0.079],
          [0.065, -0.051],
        ],
        0.028,
      ),
      Er(r, `polyg`, 0.068, 0.139, -0.037, 0.033, 0.0045, 0.011),
      o(`satin`, 0.137, -0.055, 0, 0.007, 0.016, 0.02, 0.001),
      Dr(r, 0.055, -0.035, 0.03),
      (u.magwell = { pos: [0.174, -0.063, 0], kind: `sm-otter-family` }),
      (u.hands = {
        trigger: [0.04, -0.078, 0.016],
        support: [...u.familySupport],
      }),
      wr(r),
      vr(r),
      (u.authoredHands = !0),
      (u.barrel = {
        pos: [0.359, 0, 0],
        radius: 0.009,
        length: 0.05,
        straight: !0,
      }),
      (u.underbarrel = { pos: [0.292, -0.0398, 0], span: [0.249, 0.342] }),
      Cr(t.root));
  }
  return {
    "sm-ump9-classic": (e) => t(e, `forward`),
    "sm-apc9": (e) => t(e, `folding`),
    "sm-stribog": (e) => t(e, `rear`),
  };
}
var kr = (e, t, n, r, i = 0.002) => [
  [e + i, n],
  [t - i, n],
  [t, n + i],
  [t, r - i],
  [t - i, r],
  [e + i, r],
  [e, r - i],
  [e, n + i],
];
function Ar(e, t, n, r, i) {
  let a = e / 2,
    o = t - n,
    s;
  return (
    (s =
      i === `round`
        ? Array.from({ length: 5 }, (e, t) => {
            let i = (t * Math.PI) / 8;
            return [n + o * Math.sin(i), r + (a - r) * Math.cos(i)];
          })
        : i === `step`
          ? [
              [n, a],
              [n + o * 0.15, a],
              [t - o * 0.4, a - 0.001],
              [t - o * 0.4, r + 0.001],
              [t, r],
            ]
          : [
              [n, a],
              [n + 0.001, a],
              [t - 0.0015, r + 0.0015],
              [t - 4e-4, r + 4e-4],
              [t, r],
            ]),
    [
      ...s,
      ...s
        .slice()
        .reverse()
        .map(([e, t]) => [e, -t]),
    ]
  );
}
var jr = (e, t, n, r, i) => [
  ...Ar(e, t, n, r, i),
  [n - 0.0015, -e / 2],
  [n - 0.0015, e / 2],
];
function Mr(
  e,
  {
    end: t,
    width: n,
    top: r,
    bottom: i,
    mat: a,
    port: o,
    roof: s,
    style: c = `facet`,
  },
) {
  let { run: l, loft: u, rr: d, slab: f, rbox: p, side: m } = e;
  (u(
    a,
    s.map(([e, t, i]) => [e, jr(n, r, t, i, c)]),
  ),
    l(a, 0, t, (e) => d(i + e, i + 0.006, n - 2 * e, 0.002, 0.003), 0.0015));
  let h = [
    [0.001, i + 0.004],
    [t - 0.001, i + 0.004],
    ...s
      .slice()
      .reverse()
      .map(([e, n]) => [Math.max(0.001, Math.min(t - 0.001, e)), n + 8e-4]),
  ];
  m((e) => f(a, h, 0.0034, e * (n / 2 - 0.0017), 5e-4, e > 0 ? [o] : []));
  let g = o.map((e) => e[0]),
    _ = o.map((e) => e[1]);
  p(
    `satin`,
    (Math.min(...g) + Math.max(...g)) / 2,
    (Math.min(..._) + Math.max(..._)) / 2,
    n / 2 - 0.005,
    Math.max(...g) - Math.min(...g),
    Math.max(..._) - Math.min(..._),
    0.001,
    3e-4,
  );
  let [, v, y] = s[0],
    b = [
      ...Ar(n, r, v, y, c),
      [i + 0.003, -n / 2],
      [i, -n / 2 + 0.003],
      [i, n / 2 - 0.003],
      [i + 0.003, n / 2],
    ];
  u(a, [
    [0, b],
    [0.003, b],
  ]);
}
function Nr(
  e,
  {
    x0: t,
    x1: n,
    width: r,
    top: i,
    bottom: a,
    mat: o,
    holes: s,
    outline: c,
    style: l = `facet`,
  },
) {
  let { run: u, loft: d, rr: f, slab: p, side: m, tube: h, plate: g } = e,
    _ = i - 0.005,
    v = l === `step` ? 0.009 : 0.007,
    y = jr(r, i, _, v, l);
  (d(o, [
    [t, y],
    [n, y],
  ]),
    u(o, t, n, (e) => f(a + e, a + 0.004, r - 2 * e, 0.001, 0.0015), 8e-4));
  let b = (c ?? kr(t, n, a + 0.001, _ + 8e-4, 0.004)).map(([e, t]) => [
    e,
    Math.min(t, _ + 8e-4),
  ]);
  m((e) => p(o, b, 0.003, e * (r / 2 - 0.0015), 4e-4, s));
  let x = (e, t, n) => f(e, t, n, 0.003, 0.003, 2).map(([e, t]) => [t, e]),
    S = [
      ...Ar(r, i, _, v, l),
      [a + 0.003, -r / 2],
      [a, -r / 2 + 0.003],
      [a, r / 2 - 0.003],
      [a + 0.003, r / 2],
    ].map(([e, t]) => [t, e]);
  for (let i of [t + 0.0015, n - 0.0015])
    g(e, o, i, S, 0.003, [x(a + 0.004, _ - 0.0015, r - 0.006)], 2e-4);
  h(`barrel`, (t + n) / 2, 0, 0, 0.0068, n - t, `x`, 0.0068, 14);
}
function Pr(e, t, n, r = `satin`) {
  e.side((i) => {
    for (let [a, o, s = 0.0021] of n) e.pin(a, o, i * (t / 2 + 4e-4), s, r);
  });
}
function Fr(e, t, n, r, i = `satin`, a = -0.25) {
  let o = -r / 2 - 0.001;
  (e.tube(i, t, n, o, 0.0038, 0.0024, `z`, 0.0038, 12),
    (e.rbox(
      i,
      t + 0.005,
      n - 0.001,
      o - 0.001,
      0.013,
      0.0034,
      0.002,
      7e-4,
    ).rotation.z = a),
    e.rbox(`mark`, t - 0.003, n + 0.007, o, 0.0018, 0.0015, 5e-4, 0),
    e.rbox(`markred`, t + 0.006, n + 0.006, o, 0.0016, 0.0015, 5e-4, 0),
    e.pin(t, n, -o, 0.003, i));
}
function Ir(e, t, n, r, i = `satin`) {
  let a = e.group(`bolt`);
  (a.tube(i, t, n, -r / 2 - 0.004, 0.0026, 0.012, `z`, 0.0026, 12),
    a.rbox(i, t, n, -r / 2 - 0.011, 0.012, 0.008, 0.007, 0.0015),
    (e.S.charging = [t, n, -r / 2 - 0.008]),
    (e.S.authoredBolt = !0));
}
function Lr(e, t, n, r, i = `satin`) {
  (e.railAt(t, n, r, 0, `down`, i),
    (e.S.underbarrel = {
      pos: [(t + n) / 2 - 0.0034, r - 0.0058, 0],
      span: [t, n],
    }));
}
