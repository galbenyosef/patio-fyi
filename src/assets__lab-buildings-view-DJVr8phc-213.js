// assets__lab-buildings-view-DJVr8phc 213 — translate
// Lines 67071-67390 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function Bb(e, t, n) {
  let i = n.L / 2,
    a = n.H,
    o = 2.6,
    s = 2.95,
    c = n.ys[1];
  for (let [r, a, o] of Gy(n, i - 4.6, i + 4.6)) {
    let i = n.grid[0][o];
    (e.box(`limestone`, t, i, r, a, 0, 0.6, 0, 3.2),
      ib(e, t, i, (r + a) / 2, 3.2, 0.6, 0, a - r, `limestone`, {
        solid: !0,
        rise: 0.2,
        run: 0.34,
      }));
  }
  for (let r of [-3.9, -1.3, 1.3, 3.9]) {
    let s = i + r,
      l = Q(n, s),
      u = n.grid[0][l],
      d = n.grid[1][l];
    (e.box(`trimWhite`, t, u, s - 0.36, s + 0.36, 0.6, 0.9, 2.24, 2.96),
      $(e, `trimWhite`, t, u, s, 0.9, c, o, 0.3, 14, 0.285),
      $(e, `trimWhite`, t, d, s, c, a - 1, o, 0.285, 14, 0.25),
      e.box(`trimWhite`, t, d, s - 0.36, s + 0.36, a - 1, a - 0.8, 2.24, 2.96),
      e.box(
        `trimWhite`,
        t,
        d,
        s - 0.3,
        s + 0.3,
        3.6,
        3.62,
        2.3000000000000003,
        2.9,
      ));
  }
  for (let [r, o, c] of Gy(n, i - 4.3, i + 4.3)) {
    let l = n.grid[1][c];
    (e.box(`trimWhite`, t, l, r, o, a - 0.8, a, -0.05, s),
      e.box(
        `trimWhite`,
        t,
        l,
        r - (r <= i - 4.3 ? 0.1 : 0),
        o + (o >= i + 4.3 ? 0.1 : 0),
        a - 0.12,
        a + 0.1,
        -0.05,
        3.0700000000000003,
      ));
  }
  let l = n.grid[1][Q(n, i)],
    d = 4.4,
    f = Math.atan2(2, d);
  Zy(
    e,
    `trStuccoYellow`,
    t,
    l,
    new C([Dy(i - d, a + 0.1), Dy(i + d, a + 0.1), Dy(i, a + 0.1 + 2)]),
    -0.3,
    s,
  );
  for (let n of [-1, 1])
    (e.add(
      `trimWhite`,
      new r(Math.hypot(d, 2) + 0.25, 0.22, 0.2)
        .rotateZ(-n * f)
        .translate(i + (n * d) / 2, a + 0.1 + 1 + 0.05, 3.0100000000000002),
      t,
      l,
    ),
      e.add(
        `trTileDark`,
        new r(Math.hypot(d, 2) + 0.3, 0.1, 3.5500000000000003)
          .rotateZ(-n * f)
          .translate(i + (n * d) / 2, a + 0.1 + 1 + 0.2, 1.5250000000000001),
        t,
        l,
      ));
  (vb(e, `trClock`, t, l, i, a + 0.85, 0.55, 2.96),
    e.add(
      `trGold`,
      new u(0.58, 0.05, 6, 20).translate(i, a + 0.85, 2.97),
      t,
      l,
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
      ).translate(i + n * d, a + 0.2, 2.85),
      t,
      l,
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
      extra: k(t, Bb),
    },
    back: {
      kinds: (e, t) => (e === 0 && t === 1 ? `door` : `window`),
      extra: t,
    },
    left: { kinds: () => `window`, extra: t },
    right: { kinds: () => `window`, extra: t },
    extra: (e, t, n) => {
      let i = cb(e, t, n, `trTileDark`, 26 * Ey, 0.5, `trimWhite`).yr - 0.3;
      ($(e, `trimWhite`, t, 0, 0, i, i + 0.4, 0, 1.2, 8, 1.2),
        $(e, `trJalWhite`, t, 0, 0, i + 0.4, i + 1.8, 0, 0.9, 8));
      for (let n = 0; n < 8; n++) {
        let a = (n / 8) * Math.PI * 2 + Math.PI / 8;
        e.add(
          `trimWhite`,
          new r(0.14, 1.4, 0.14).translate(
            Math.cos(a) * 0.86,
            i + 1.1,
            Math.sin(a) * 0.86,
          ),
          t,
          0,
        );
      }
      ($(e, `trimWhite`, t, 0, 0, i + 1.8, i + 1.95, 0, 1.05, 8),
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
          ).translate(0, i + 1.95, 0),
          t,
          0,
        ),
        $(e, Z, t, 0, 0, i + 3.1, i + 4, 0, 0.03, 6),
        e.box(Z, t, 0, -0.02, 0.02, i + 3.7, i + 3.95, 0, 0.55),
        tb(e, t, 0, 0, n.H + 2.1, n.D / 2 + 1.4, 3.6));
    },
  };
}
function Hb(e, t, n, i, a) {
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
    ).translate(n, a - 1.2, i),
    t,
    0,
  ),
    $(e, `trCoralRubble`, t, 0, n, a, a + 2.1, i, 0.85, 14),
    $(e, `trWhiteStone`, t, 0, n, a + 2.1, a + 2.25, i, 0.95, 14),
    e.add(
      `trWhiteStone`,
      new w(0.88, 14, 6, 0, Math.PI * 2, 0, Math.PI / 2).translate(
        n,
        a + 2.25,
        i,
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
      ).translate(n, a + 3.1, i),
      t,
      0,
    ));
  for (let o = 0; o < 4; o++) {
    let s = (o / 4) * Math.PI * 2 + Math.PI / 4;
    e.add(
      `trDark`,
      new r(0.12, 0.75, 0.1)
        .translate(0, 0, 0.83)
        .rotateY(s)
        .translate(n, a + 1.25, i),
      t,
      0,
    );
  }
}
function Ub(e, t, n) {
  let i = n.L / 2,
    a = n.grid[0][1];
  (gb(e, `trWhiteStone`, t, a, i, 3, 1.25, 1.65, -0.02, 0.14),
    e.box(`trWhiteStone`, t, a, i - 1.65, i - 1.2, 0, 3, -0.02, 0.14),
    e.box(`trWhiteStone`, t, a, i + 1.2, i + 1.65, 0, 3, -0.02, 0.14),
    e.box(`trWhiteStone`, t, a, i - 1.25, i + 1.25, 2.98, 3.1, -0.02, 0.1),
    e.add(`trWhiteStone`, new r(0.34, 0.5, 0.2).translate(i, 4.5, 0.08), t, a),
    kb(e, t, n.grid[0][0], 1.4, 2.2),
    kb(e, t, n.grid[0][2], n.L - 1.4, 2.2));
  for (let r of [0.9, n.L - 0.9]) {
    let i = n.grid[0][Q(n, r)];
    for (let n = 0; n < 4; n++)
      e.add(
        Z,
        new w(0.12, 8, 6).translate(
          r + (n % 2) * 0.24 - 0.12,
          0.12 + (n > 1 ? 0.2 : 0),
          1 + (n === 3 ? 0.12 : 0),
        ),
        t,
        i,
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
