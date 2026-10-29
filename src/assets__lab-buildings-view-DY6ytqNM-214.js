// assets__lab-buildings-view-DY6ytqNM 214 — translate
// Lines 67081-67400 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function Bb(e, t, n) {
  let r = n.L / 2,
    i = n.H,
    s = 2.6,
    c = 2.95,
    l = n.ys[1];
  for (let [i, a, o] of Gy(n, r - 4.6, r + 4.6)) {
    let r = n.grid[0][o];
    (e.box(`limestone`, t, r, i, a, 0, 0.6, 0, 3.2),
      ib(e, t, r, (i + a) / 2, 3.2, 0.6, 0, a - i, `limestone`, {
        solid: !0,
        rise: 0.2,
        run: 0.34,
      }));
  }
  for (let a of [-3.9, -1.3, 1.3, 3.9]) {
    let o = r + a,
      c = Q(n, o),
      u = n.grid[0][c],
      d = n.grid[1][c];
    (e.box(`trimWhite`, t, u, o - 0.36, o + 0.36, 0.6, 0.9, 2.24, 2.96),
      $(e, `trimWhite`, t, u, o, 0.9, l, s, 0.3, 14, 0.285),
      $(e, `trimWhite`, t, d, o, l, i - 1, s, 0.285, 14, 0.25),
      e.box(`trimWhite`, t, d, o - 0.36, o + 0.36, i - 1, i - 0.8, 2.24, 2.96),
      e.box(
        `trimWhite`,
        t,
        d,
        o - 0.3,
        o + 0.3,
        3.6,
        3.62,
        2.3000000000000003,
        2.9,
      ));
  }
  for (let [a, o, s] of Gy(n, r - 4.3, r + 4.3)) {
    let l = n.grid[1][s];
    (e.box(`trimWhite`, t, l, a, o, i - 0.8, i, -0.05, c),
      e.box(
        `trimWhite`,
        t,
        l,
        a - (a <= r - 4.3 ? 0.1 : 0),
        o + (o >= r + 4.3 ? 0.1 : 0),
        i - 0.12,
        i + 0.1,
        -0.05,
        3.0700000000000003,
      ));
  }
  let u = n.grid[1][Q(n, r)],
    d = 4.4,
    f = Math.atan2(2, d);
  Zy(
    e,
    `trStuccoYellow`,
    t,
    u,
    new T([Dy(r - d, i + 0.1), Dy(r + d, i + 0.1), Dy(r, i + 0.1 + 2)]),
    -0.3,
    c,
  );
  for (let n of [-1, 1])
    (e.add(
      `trimWhite`,
      new a(Math.hypot(d, 2) + 0.25, 0.22, 0.2)
        .rotateZ(-n * f)
        .translate(r + (n * d) / 2, i + 0.1 + 1 + 0.05, 3.0100000000000002),
      t,
      u,
    ),
      e.add(
        `trTileDark`,
        new a(Math.hypot(d, 2) + 0.3, 0.1, 3.5500000000000003)
          .rotateZ(-n * f)
          .translate(r + (n * d) / 2, i + 0.1 + 1 + 0.2, 1.5250000000000001),
        t,
        u,
      ));
  (vb(e, `trClock`, t, u, r, i + 0.85, 0.55, 2.96),
    e.add(
      `trGold`,
      new o(0.58, 0.05, 6, 20).translate(r, i + 0.85, 2.97),
      t,
      u,
    ));
  for (let n of [-1, 1])
    e.add(
      `trimWhite`,
      Xy(
        [
          [0.001, 0],
          [0.18, 0],
          [0.12, 0.22],
          [0.14, 0.34],
          [0.001, 0.5],
        ],
        8,
      ).translate(r + n * d, i + 0.2, 2.85),
      t,
      u,
    );
}
function Vb() {
  let e = {
      win0: {
        w: 1.3,
        h: 2.4,
        sill: 0.9,
        type: `sash`,
        lites: [3, 3],
        frame: `trimWhite`,
        shutter: `trJalBlue`,
        header: `trimWhite`,
        keystone: !0,
        rec: 0.15,
        curtains: 0.5,
        sillMat: `limestone`,
      },
      win: {
        w: 1.3,
        h: 2.2,
        sill: 0.7,
        type: `sash`,
        lites: [3, 3],
        frame: `trimWhite`,
        shutter: `trJalBlue`,
        casing: `trimWhite`,
        rec: 0.15,
        curtains: 0.5,
      },
    },
    t = pb(`limestone`, 8.1, 0.5);
  return {
    key: `trCustoms`,
    name: `Sentinel Cay Customs House`,
    plain: 15254122,
    desc: `Customs house: ochre-yellow stucco with limestone quoins and blue jalousies, giant-order Tuscan portico with a clock in its tiled pediment and a lettered frieze, dark tile hip roof crowned by an octagonal copper cupola and the island flag.`,
    W: 20,
    D: 12,
    style: {
      wall: `trStuccoYellow`,
      t: 0.4,
      bay: 4,
      floors: [4.2, 4],
      ...e,
      door: {
        w: 1.8,
        h: 2.6,
        transom: 0.8,
        frame: `trimWhite`,
        mat: `trDoorGreen`,
        rec: 0.3,
        hood: `trimWhite`,
      },
      base: { mat: `limestone`, h: 0.55, out: 0.05 },
      belt: { mat: `trimWhite`, h: 0.24, out: 0.07 },
      cornice: {
        type: `classic`,
        mat: `trimWhite`,
        h: 0.3,
        out: 0.28,
        dentils: !0,
      },
      roof: ub(0.4),
    },
    front: {
      kinds: (e, t) => (e === 0 && t === 2 ? `door` : `window`),
      signs: [
        {
          mat: `trSignCustoms`,
          rect: [6.2, 13.8, 7.48, 8.02],
          z0: 2.96,
          z1: 2.98,
        },
      ],
      extra: A(t, Bb),
    },
    back: {
      kinds: (e, t) => (e === 0 && t === 1 ? `door` : `window`),
      extra: t,
    },
    left: { kinds: () => `window`, extra: t },
    right: { kinds: () => `window`, extra: t },
    extra: (e, t, n) => {
      let r = cb(e, t, n, `trTileDark`, 26 * Ey, 0.5, `trimWhite`).yr - 0.3;
      ($(e, `trimWhite`, t, 0, 0, r, r + 0.4, 0, 1.2, 8, 1.2),
        $(e, `trJalWhite`, t, 0, 0, r + 0.4, r + 1.8, 0, 0.9, 8));
      for (let n = 0; n < 8; n++) {
        let i = (n / 8) * Math.PI * 2 + Math.PI / 8;
        e.add(
          `trimWhite`,
          new a(0.14, 1.4, 0.14).translate(
            Math.cos(i) * 0.86,
            r + 1.1,
            Math.sin(i) * 0.86,
          ),
          t,
          0,
        );
      }
      ($(e, `trimWhite`, t, 0, 0, r + 1.8, r + 1.95, 0, 1.05, 8),
        e.add(
          `trCopper`,
          Xy(
            [
              [1, 0],
              [0.9, 0.4],
              [0.6, 0.85],
              [0.2, 1.15],
              [0.001, 1.25],
            ],
            8,
          ).translate(0, r + 1.95, 0),
          t,
          0,
        ),
        $(e, Z, t, 0, 0, r + 3.1, r + 4, 0, 0.03, 6),
        e.box(Z, t, 0, -0.02, 0.02, r + 3.7, r + 3.95, 0, 0.55),
        tb(e, t, 0, 0, n.H + 2.1, n.D / 2 + 1.4, 3.6));
    },
  };
}
function Hb(e, t, n, r, o) {
  (e.add(
    `trCoral`,
    Xy(
      [
        [0.2, 0],
        [0.45, 0.35],
        [0.75, 0.8],
        [0.88, 1.05],
        [0.92, 1.2],
      ],
      14,
    ).translate(n, o - 1.2, r),
    t,
    0,
  ),
    $(e, `trCoralRubble`, t, 0, n, o, o + 2.1, r, 0.85, 14),
    $(e, `trWhiteStone`, t, 0, n, o + 2.1, o + 2.25, r, 0.95, 14),
    e.add(
      `trWhiteStone`,
      new i(0.88, 14, 6, 0, Math.PI * 2, 0, Math.PI / 2).translate(
        n,
        o + 2.25,
        r,
      ),
      t,
      0,
    ),
    e.add(
      `trWhiteStone`,
      Xy(
        [
          [0.001, 0],
          [0.12, 0],
          [0.12, 0.1],
          [0.06, 0.2],
          [0.1, 0.35],
          [0.001, 0.55],
        ],
        8,
      ).translate(n, o + 3.1, r),
      t,
      0,
    ));
  for (let i = 0; i < 4; i++) {
    let s = (i / 4) * Math.PI * 2 + Math.PI / 4;
    e.add(
      `trDark`,
      new a(0.12, 0.75, 0.1)
        .translate(0, 0, 0.83)
        .rotateY(s)
        .translate(n, o + 1.25, r),
      t,
      0,
    );
  }
}
function Ub(e, t, n) {
  let r = n.L / 2,
    o = n.grid[0][1];
  (gb(e, `trWhiteStone`, t, o, r, 3, 1.25, 1.65, -0.02, 0.14),
    e.box(`trWhiteStone`, t, o, r - 1.65, r - 1.2, 0, 3, -0.02, 0.14),
    e.box(`trWhiteStone`, t, o, r + 1.2, r + 1.65, 0, 3, -0.02, 0.14),
    e.box(`trWhiteStone`, t, o, r - 1.25, r + 1.25, 2.98, 3.1, -0.02, 0.1),
    e.add(`trWhiteStone`, new a(0.34, 0.5, 0.2).translate(r, 4.5, 0.08), t, o),
    kb(e, t, n.grid[0][0], 1.4, 2.2),
    kb(e, t, n.grid[0][2], n.L - 1.4, 2.2));
  for (let r of [0.9, n.L - 0.9]) {
    let a = n.grid[0][Q(n, r)];
    for (let n = 0; n < 4; n++)
      e.add(
        Z,
        new i(0.12, 8, 6).translate(
          r + (n % 2) * 0.24 - 0.12,
          0.12 + (n > 1 ? 0.2 : 0),
          1 + (n === 3 ? 0.12 : 0),
        ),
        t,
        a,
      );
  }
}
var Wb = (e, t, n) => {
  for (let r of [0.8, n.L - 0.8])
    e.box(
      `trWhiteStone`,
      t,
      n.grid[n.top][Q(n, r)],
      r - 0.1,
      r + 0.1,
      n.H - 0.1,
      n.H + 0.08,
      0,
      0.7,
    );
};
