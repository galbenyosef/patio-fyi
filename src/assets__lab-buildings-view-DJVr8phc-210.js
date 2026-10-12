// assets__lab-buildings-view-DJVr8phc 210 — box
// Lines 66213-66532 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function Db() {
  return {
    key: `trHavana`,
    name: `Edificio Obispo`,
    plain: 9091286,
    desc: `Havana colonnaded block: sky-blue stucco over a deep arcade of round arches, tall french windows with iron balconies and stained-glass medio punto lunettes, corniced parapet, rooftop tanks.`,
    W: 16,
    D: 12,
    style: {
      wall: `trStuccoBlue`,
      t: 0.4,
      bay: 3.2,
      floors: [3.8, 3.8],
      balcony: {
        w: 1.3,
        h: 2.75,
        depth: 0.9,
        slab: `trimWhite`,
        rail: `iron`,
        railMat: Z,
      },
      win0: {
        w: 1.3,
        h: 3,
        sill: 0.05,
        type: `grid`,
        lites: [2, 5],
        frame: `trPaintGreen`,
        rec: 0.22,
        curtains: 0.3,
      },
      win: {
        w: 1.2,
        h: 2.6,
        sill: 0.35,
        type: `grid`,
        lites: [2, 4],
        frame: `trimWhite`,
        casing: `trimWhite`,
        rec: 0.15,
        curtains: 0.6,
      },
      door: {
        w: 1.8,
        h: 3.1,
        transom: 0.9,
        frame: `trimWhite`,
        mat: `trDoorGreen`,
        rec: 0.3,
        step: `stone`,
      },
      belt: { mat: `trimWhite`, h: 0.2, out: 0.06 },
      corners: `trimWhite`,
    },
    tiers: [
      {
        D: 9,
        dz: -1.5,
        floors: [5],
        front: {
          kinds: (e, t) => (t === 2 ? `door` : `window`),
          signs: [
            {
              mat: `trSignBodega`,
              rect: [0.3, 6.1, 3.35, 3.85],
              z0: 0,
              z1: 0.04,
            },
            {
              mat: `trSignCafe`,
              rect: [9.9, 15.7, 3.35, 3.85],
              z0: 0,
              z1: 0.04,
            },
          ],
          extra: wb({ d: 3, top: 4.4, mat: `trStuccoBlue`, trim: `trimWhite` }),
        },
        right: { kinds: () => `window` },
        left: { kinds: () => `solid` },
        back: { kinds: (e, t) => (t === 1 ? `door` : `solid`) },
      },
      {
        soffit: !0,
        style: {
          parapet: 1,
          cornice: {
            type: `classic`,
            mat: `trimWhite`,
            h: 0.4,
            out: 0.35,
            cap: `trimWhite`,
            brackets: !0,
          },
        },
        front: {
          kinds: (e) => (e === 1 ? `balcony` : `window`),
          extra: k(
            Tb([
              [0, 2.78, 0.62],
              [1, 2.95, 0.55],
            ]),
            Eb,
          ),
        },
        right: {
          kinds: () => `window`,
          extra: Tb([
            [0, 2.95, 0.55],
            [1, 2.95, 0.55],
          ]),
        },
        left: { kinds: () => `solid` },
        back: { kinds: () => `window` },
      },
    ],
    extra: (e, t, n) => {
      for (let r of [-4.5, -2.8])
        (e.box(Z, t, 0, r - 0.6, r + 0.6, n.H, n.H + 0.6, -3.6, -2.4),
          $(e, `trTankBlack`, t, 0, r, n.H + 0.6, n.H + 1.8, -3, 0.58, 14));
      (e.box(`trStuccoBlue`, t, 0, 3, 5.6, n.H, n.H + 2.5, -4.5, -2.2),
        e.box(`trimWhite`, t, 0, 2.9, 5.7, n.H + 2.5, n.H + 2.65, -4.6, -2.1),
        e.box(`trDoorGreen`, t, 0, 3.8, 4.8, n.H, n.H + 2.1, -2.2, -2.15));
      for (let r of [-6.5, 1.5]) $(e, Z, t, 0, r, n.H, n.H + 2.2, 1.5, 0.04, 6);
      (Yy(
        e,
        `trCanvas`,
        t,
        0,
        [-6.5, n.H + 2, 1.5],
        [1.5, n.H + 2, 1.5],
        0.01,
        4,
      ),
        [
          [-5.5, `trPaintRed`],
          [-4.2, `trPaintWhite`],
          [-2.8, `trPaintYellow`],
          [-0.9, `trPaintBlue`],
        ].forEach(([r, i]) =>
          e.box(i, t, 0, r - 0.4, r + 0.4, n.H + 1.2, n.H + 1.98, 1.49, 1.51),
        ));
    },
  };
}
function Ob(e, t, n, r, i, a, o = `x`, c = `woodDark`) {
  let l = () =>
      Xy(
        [
          [0.001, -0.45],
          [0.27, -0.45],
          [0.33, -0.2],
          [0.35, 0],
          [0.33, 0.2],
          [0.27, 0.45],
          [0.001, 0.45],
        ],
        10,
      ),
    u = (s, c) =>
      e.add(
        s,
        (o === `x` ? c.rotateZ(Math.PI / 2) : c.rotateX(Math.PI / 2)).translate(
          r,
          i + 0.35,
          a,
        ),
        t,
        n,
      );
  u(c, l());
  for (let e of [-0.3, 0.3])
    u(Z, new s(0.335, 0.335, 0.05, 10).translate(0, e, 0));
}
function kb(e, t, n, r, i, a = 0) {
  e.box(
    `woodDark`,
    t,
    n,
    r - 0.35,
    r + 0.35,
    a + 0.2,
    a + 0.55,
    i - 0.7,
    i + 0.5,
  );
  for (let o of [-1, 1])
    for (let c of [-0.5, 0.35])
      e.add(
        `woodDark`,
        new s(0.22, 0.22, 0.1, 10)
          .rotateZ(Math.PI / 2)
          .translate(r + o * 0.4, a + 0.22, i + c),
        t,
        n,
      );
  e.add(
    Z,
    Xy(
      [
        [0.001, -1],
        [0.2, -1],
        [0.22, -0.8],
        [0.18, -0.6],
        [0.13, 0.9],
        [0.16, 0.95],
        [0.16, 1.05],
        [0.09, 1.05],
        [0.001, 1],
      ],
      10,
    )
      .rotateX(Math.PI / 2 - 0.08)
      .translate(r, a + 0.72, i + 0.2),
    t,
    n,
  );
}
var Ab =
  (e, t, n = 0.8, r = 0.6, i = 0.8) =>
  (a, o, s) => {
    let c = s.H + t;
    for (let t = 0; t < s.L - 0.3; t += n + r)
      a.box(
        e,
        o,
        s.grid[s.top][Q(s, t + n / 2)],
        t,
        Math.min(s.L, t + n),
        c,
        c + i,
        -s.t,
        0,
      );
  };
function jb(e, t, n) {
  let r = n.gableCell,
    i = n.L / 2,
    a = n.H,
    o = n.t,
    s = 0.5,
    c = new C();
  (c.moveTo(i - 3.6, a),
    c.lineTo(i + 3.6, a),
    c.lineTo(i + 3.6, a + 1.8),
    c.quadraticCurveTo(i + 2.3, a + 1.9, i + 2.3, a + 3.4),
    c.lineTo(i + 2.3, a + 5),
    c.quadraticCurveTo(i + 1.2, a + 5, i + 1.2, a + 5.8),
    c.lineTo(i + 1.2, a + 6.6),
    c.quadraticCurveTo(i, a + 8, i - 1.2, a + 6.6),
    c.lineTo(i - 1.2, a + 5.8),
    c.quadraticCurveTo(i - 1.2, a + 5, i - 2.3, a + 5),
    c.lineTo(i - 2.3, a + 3.4),
    c.quadraticCurveTo(i - 2.3, a + 1.9, i - 3.6, a + 1.8),
    c.closePath());
  let l = [
    [i - 1.15, a + 3, 0.45, a + 4.1],
    [i + 1.15, a + 3, 0.45, a + 4.1],
    [i, a + 5.55, 0.42, a + 6.3],
  ];
  for (let [e, t, n, r] of l) c.holes.push($y(new p(), e, t, n, r));
  Zy(e, `trStuccoWhite`, t, r, c, -o - 0.01, s, 10);
  for (let [n, i, a, c] of l)
    (e.box(
      `trWhiteStone`,
      t,
      r,
      n - a - 0.12,
      n + a + 0.12,
      i - 0.12,
      i,
      -o - 0.03,
      0.56,
    ),
      gb(e, `trWhiteStone`, t, r, n, c, a, a + 0.14, 0.49, 0.55),
      eb(e, t, r, n, c + a * 0.6, (s - o) / 2, a > 0.44 ? 0.85 : 0.7));
  for (let [n, s] of [
    [a + 1.8, 3.72],
    [a + 5, 2.42],
  ])
    e.box(
      `trWhiteStone`,
      t,
      r,
      i - s,
      i + s,
      n - 0.1,
      n + 0.08,
      -o - 0.02,
      0.6,
    );
  (e.box(
    `trWhiteStone`,
    t,
    r,
    i - 0.06,
    i + 0.06,
    a + 7.25,
    a + 8.5,
    (s - o) / 2 - 0.06,
    (s - o) / 2 + 0.06,
  ),
    e.box(
      `trWhiteStone`,
      t,
      r,
      i - 0.36,
      i + 0.36,
      a + 8,
      a + 8.12,
      (s - o) / 2 - 0.06,
      (s - o) / 2 + 0.06,
    ));
  for (let n of [-1, 1])
    e.add(
      `trWhiteStone`,
      new w(0.2, 8, 6).translate(i + n * 3.35, a + 2.1, 0.2),
      t,
      r,
    );
}
