// assets__lab-buildings-view-DY6ytqNM 211 — box
// Lines 66223-66542 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
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
          extra: A(
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
function Ob(e, t, n, r, i, a, o = `x`, s = `woodDark`) {
  let c = () =>
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
    l = (s, c) =>
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
  l(s, c());
  for (let e of [-0.3, 0.3])
    l(Z, new C(0.335, 0.335, 0.05, 10).translate(0, e, 0));
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
    for (let s of [-0.5, 0.35])
      e.add(
        `woodDark`,
        new C(0.22, 0.22, 0.1, 10)
          .rotateZ(Math.PI / 2)
          .translate(r + o * 0.4, a + 0.22, i + s),
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
    a = n.L / 2,
    o = n.H,
    s = n.t,
    c = 0.5,
    l = new T();
  (l.moveTo(a - 3.6, o),
    l.lineTo(a + 3.6, o),
    l.lineTo(a + 3.6, o + 1.8),
    l.quadraticCurveTo(a + 2.3, o + 1.9, a + 2.3, o + 3.4),
    l.lineTo(a + 2.3, o + 5),
    l.quadraticCurveTo(a + 1.2, o + 5, a + 1.2, o + 5.8),
    l.lineTo(a + 1.2, o + 6.6),
    l.quadraticCurveTo(a, o + 8, a - 1.2, o + 6.6),
    l.lineTo(a - 1.2, o + 5.8),
    l.quadraticCurveTo(a - 1.2, o + 5, a - 2.3, o + 5),
    l.lineTo(a - 2.3, o + 3.4),
    l.quadraticCurveTo(a - 2.3, o + 1.9, a - 3.6, o + 1.8),
    l.closePath());
  let u = [
    [a - 1.15, o + 3, 0.45, o + 4.1],
    [a + 1.15, o + 3, 0.45, o + 4.1],
    [a, o + 5.55, 0.42, o + 6.3],
  ];
  for (let [e, t, n, r] of u) l.holes.push($y(new ne(), e, t, n, r));
  Zy(e, `trStuccoWhite`, t, r, l, -s - 0.01, c, 10);
  for (let [n, i, a, o] of u)
    (e.box(
      `trWhiteStone`,
      t,
      r,
      n - a - 0.12,
      n + a + 0.12,
      i - 0.12,
      i,
      -s - 0.03,
      0.56,
    ),
      gb(e, `trWhiteStone`, t, r, n, o, a, a + 0.14, 0.49, 0.55),
      eb(e, t, r, n, o + a * 0.6, (c - s) / 2, a > 0.44 ? 0.85 : 0.7));
  for (let [n, i] of [
    [o + 1.8, 3.72],
    [o + 5, 2.42],
  ])
    e.box(
      `trWhiteStone`,
      t,
      r,
      a - i,
      a + i,
      n - 0.1,
      n + 0.08,
      -s - 0.02,
      0.6,
    );
  (e.box(
    `trWhiteStone`,
    t,
    r,
    a - 0.06,
    a + 0.06,
    o + 7.25,
    o + 8.5,
    (c - s) / 2 - 0.06,
    (c - s) / 2 + 0.06,
  ),
    e.box(
      `trWhiteStone`,
      t,
      r,
      a - 0.36,
      a + 0.36,
      o + 8,
      o + 8.12,
      (c - s) / 2 - 0.06,
      (c - s) / 2 + 0.06,
    ));
  for (let n of [-1, 1])
    e.add(
      `trWhiteStone`,
      new i(0.2, 8, 6).translate(a + n * 3.35, o + 2.1, 0.2),
      t,
      r,
    );
}
