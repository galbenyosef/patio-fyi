// assets__lab-buildings-view-DY6ytqNM 220 — box
// Lines 68867-69200 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function mx() {
  return {
    key: `trBeachBar`,
    name: `Coconut Jack’s`,
    plain: 11833944,
    desc: `Thatched beach bar: bamboo-skirted deck under a shaggy palm-thatch hip roof on bamboo posts, U-shaped bamboo bar with stools and a bottle-lined back shelf, glowing hanging sign, festoon lights, tiki torches and a leaning surfboard.`,
    W: 9,
    D: 7,
    style: {
      wall: `trBambooPoles`,
      t: 0.2,
      bay: 3,
      floors: [0.5],
      roof: lb(0.2, `trDeck`),
      cornice: { type: `classic`, mat: `trTeak`, h: 0.1, out: 0.08 },
    },
    front: {
      kinds: () => `solid`,
      extra: A(px, (e, t, n) =>
        ib(e, t, n.grid[0][0], 1.2, 0, 0.62, 0, 1.3, `trDeck`, {
          solid: !0,
          rise: 0.2,
          run: 0.32,
        }),
      ),
    },
    back: { kinds: () => `solid` },
    left: { kinds: () => `solid` },
    right: { kinds: () => `solid` },
    extra: (e, t, n) => {
      let r = 2.95,
        a = [-4.2, -1.4, 1.4, 4.2],
        o = [-3.2, 0, 3.2];
      for (let n of a)
        for (let i of o)
          (Math.abs(n) > 4 || Math.abs(i) > 3) &&
            $(e, `trBambooPoles`, t, 0, n, 0.62, r, i, 0.1, 8);
      for (let n of [-1, 1])
        (Yy(
          e,
          `trBambooPoles`,
          t,
          0,
          [-4.3, r, n * 3.2],
          [4.3, r, n * 3.2],
          0.1,
          8,
        ),
          Yy(
            e,
            `trBambooPoles`,
            t,
            0,
            [n * 4.2, r, -3.3],
            [n * 4.2, r, 3.3],
            0.1,
            8,
          ));
      (sb(e, t, 0, `trThatchDbl`, 5.3, 4.3, 2.85, 1.2, 0.2, 5.3, !1),
        sb(e, t, 0, `trThatch`, 5.45, 4.45, 2.45, 5.3, 4.3, 2.9, !1),
        e.box(`trThatch`, t, 0, -1.3, 1.3, 5.2, 5.45, -0.3, 0.3));
      let s = 3.25;
      for (let n of [-1.4, 1.4])
        Yy(e, Z, t, 0, [n, 2.9000000000000004, s], [n, 2.5, s], 0.01, 4);
      e.box(`trSignBar`, t, 0, -1.6, 1.6, 1.6, 2.5, 3.23, 3.27, {
        planar: (e, t) => [(e + 1.6) / 3.2, (t - r + 1.35) / 0.9],
      });
      for (let n = -4; n <= 4.01; n += 0.5)
        e.add(
          `bulb`,
          new i(0.06, 6, 4).translate(
            n,
            2.75 - Math.sin(((n + 4) / 2.8) * Math.PI) ** 2 * 0.25,
            3.35,
          ),
          t,
          0,
        );
      for (let [n, r] of [
        [-4.9, 3.9],
        [4.9, 3.9],
        [4.9, -3.6],
      ])
        ($(e, `trBambooPoles`, t, 0, n, 0, 1.9, r, 0.05, 6),
          e.add(
            `trBambooWeave`,
            new C(0.1, 0.06, 0.22, 8).translate(n, 1.95, r),
            t,
            0,
          ),
          e.add(`trFlame`, new d(0.07, 0.25, 6).translate(n, 2.18, r), t, 0));
      (e.add(
        `trPaintOrange`,
        new i(1, 12, 6)
          .scale(0.28, 1.05, 0.05)
          .rotateX(-0.25)
          .translate(3.3, 1.15, 3.75),
        t,
        0,
      ),
        e.box(`trPaintWhite`, t, 0, 3.28, 3.32, 0.2, 2, 3.63, 3.69));
    },
  };
}
function hx(e, t, n) {
  let r = n.grid[0][0];
  (e.box(Z, t, r, 0.3, 2.3, 0.02, 0.08, 0.2, 0.9),
    e.box(Z, t, r, 0.3, 2.3, 0.7, 0.76, 0.2, 0.9));
  for (let n = 0.45; n < 2.2; n += 0.26)
    (e.add(
      n % 0.52 < 0.26 ? `trPaintYellow` : `aluminum`,
      Xy(
        [
          [0.001, 0],
          [0.09, 0.02],
          [0.09, 0.78],
          [0.05, 0.86],
          [0.001, 0.86],
        ],
        8,
      ).translate(n, 0.08, 0.55),
      t,
      r,
    ),
      e.box(Z, t, r, n - 0.02, n + 0.02, 0.94, 1, 0.53, 0.57));
  let i = n.grid[0][n.nb - 1],
    a = n.L - 1.4;
  e.box(Z, t, i, a - 0.8, a + 0.8, 1.9, 1.94, 0.35, 0.39);
  for (let [n, r] of [
    [0, a - 0.6],
    [1, a - 0.1],
    [0, a + 0.45],
  ])
    (e.box(Z, t, i, r - 0.01, r + 0.01, 1.75, 1.92, 0.36, 0.38),
      e.box(
        n ? `trPaintBlue` : `trDark`,
        t,
        i,
        r - 0.22,
        r + 0.22,
        0.85,
        1.75,
        0.34,
        0.4,
      ),
      e.box(
        n ? `trPaintBlue` : `trDark`,
        t,
        i,
        r - 0.08,
        r + 0.08,
        0.3,
        0.85,
        0.35,
        0.39,
      ));
  for (let n of [-1, 1]) $(e, Z, t, i, a + n * 0.8, 0, 1.94, 0.37, 0.025, 5);
  ($(e, Z, t, n.grid[0][n.nb - 1], n.L - 0.15, 0, 5.8, 0.6, 0.04, 6),
    e.box(
      `trFlagDive`,
      t,
      n.grid[0][n.nb - 1],
      n.L - 0.13,
      n.L + 0.95,
      4.9,
      5.65,
      0.59,
      0.61,
      { planar: (e, t) => [(e - n.L + 0.13) / 1.08, (t - 4.9) / 0.75] },
    ));
}
function gx(e, t, n) {
  let r = n.grid[0][Q(n, n.L / 2)];
  (e.box(Z, t, r, 0.5, 5.8, 0.9, 0.95, 0.05, 0.6),
    e.box(Z, t, r, 0.5, 5.8, 1.6, 1.65, 0.05, 0.6));
  for (let [n, a] of [
    [1.12, `trPaintOrange`],
    [1.82, `trPaintYellow`],
  ])
    e.add(
      a,
      new i(1, 14, 6).scale(2.3, 0.17, 0.3).translate(3.15, n, 0.35),
      t,
      r,
    );
}
function _x() {
  return {
    key: `trDive`,
    name: `Blue Hole Divers`,
    plain: 4176054,
    desc: `Dive shop: turquoise painted block building with a reef-and-turtle mural down one side, striped awnings over the shop windows, big yellow-on-blue name parapet, scuba cylinder rack, wetsuits drying on a rail, kayaks on wall racks, dive flag, rooftop shade sail and tank.`,
    W: 10,
    D: 8,
    style: {
      wall: `trBlockTurq`,
      t: 0.25,
      bay: 3.3,
      floors: [3.8],
      parapet: 0.9,
      win: {
        w: 1.6,
        h: 1.4,
        sill: 0.9,
        type: `grid`,
        lites: [2, 1],
        frame: `trPaintWhite`,
        rec: 0.1,
        curtains: 0.4,
      },
      door: {
        w: 1.1,
        h: 2.2,
        transom: 0.4,
        frame: `trPaintWhite`,
        glazed: !0,
        mat: `trPaintBlue`,
        rec: 0.12,
      },
      store: { frame: `trPaintWhite`, fascia: `trPaintBlue` },
      awning: { mat: `trAwningBlue`, depth: 1.2, drop: 0.6 },
      base: { mat: `trPaintBlue`, h: 0.35, out: 0.02 },
      cornice: { type: `classic`, mat: `trPaintWhite`, h: 0.12, out: 0.08 },
    },
    front: {
      kinds: (e, t) => (t === 1 ? `door` : `store`),
      signs: [
        { mat: `trSignDive`, rect: [0.4, 9.6, 3.85, 4.55], z0: 0, z1: 0.06 },
      ],
      extra: hx,
    },
    right: {
      kinds: () => `solid`,
      signs: [
        { mat: `trMural`, rect: [0.2, 7.3, 0.75, 2.53], z0: 0, z1: 0.01 },
      ],
    },
    left: { kinds: (e, t) => (t === 1 ? `window` : `solid`), extra: gx },
    back: { kinds: (e, t) => (t === 2 ? `door` : `window`) },
    extra: (e, t, n) => {
      let r = n.H;
      for (let [n, i] of [
        [-4.2, 3.2],
        [2.5, 3.3],
        [-4.2, -2.2],
      ])
        $(e, Z, t, 0, n, r, r + 2.6, i, 0.04, 6);
      let i = new f().setAttribute(
        `position`,
        new S(
          [
            -4.2,
            r + 2.55,
            3.2,
            2.5,
            r + 2.3,
            3.3,
            -4.2,
            r + 2.45,
            -2.2,
            -4.2,
            r + 2.45,
            -2.2,
            2.5,
            r + 2.3,
            3.3,
            -4.2,
            r + 2.55,
            3.2,
          ],
          3,
        ),
      );
      (i.computeVertexNormals(),
        e.add(`trCanvas`, i, t, 0),
        $(e, `trTankBlack`, t, 0, 3, r, r + 1.5, -2.2, 0.65, 12),
        e.box(`aluminum`, t, 0, 0.5, 1.6, r, r + 0.9, -2.8, -2));
    },
  };
}
function vx(e, t, n) {
  let r = n.grid[0][0];
  (e.box(`trPaintWhite`, t, r, 0.4, 2.8, 0, 0.9, 1.2, 2),
    e.box(`aluminum`, t, r, 0.35, 2.85, 0.9, 0.95, 1.15, 2.05),
    $(e, Z, t, r, 1.6, 0.95, 1.5, 1.25, 0.025, 5),
    e.box(Z, t, r, 1.58, 1.62, 1.46, 1.5, 1.25, 1.45));
  let i = n.grid[0][n.nb - 1];
  for (let r = 0; r < 9; r++) {
    let a = n.L - 3.4 + (r % 3) * 0.72,
      o = Math.floor(r / 3) * 0.3;
    e.box(
      r % 2 ? `trPaintBlue` : `trPaintRed`,
      t,
      i,
      a - 0.33,
      a + 0.33,
      o,
      o + 0.28,
      1,
      1.5,
    );
  }
  (e.box(Z, t, n.grid[0][2], n.L / 2 - 4.5, n.L / 2 + 4.5, 3.25, 3.35, 0, 0.8),
    e.box(
      `trTinSilver`,
      t,
      n.grid[0][2],
      n.L / 2 - 4.6,
      n.L / 2 + 4.6,
      3.35,
      3.42,
      -0.05,
      1.3,
    ));
  for (let r of [n.L / 2 - 4.3, n.L / 2 + 4.3])
    k(e, Z, t, n.grid[0][Q(n, r)], [r, 3.3, 1.25], [r, 4.1, 0.02], 0.05);
}
function yx(e, t, n) {
  for (let [r, a] of [
    [1, 4.4],
    [5.2, 8.6],
  ]) {
    let o = n.grid[0][Q(n, (r + a) / 2)];
    for (let n of [r, a]) $(e, `timber`, t, o, n, 0, 2.6, 1.6, 0.07, 6);
    (e.box(`timber`, t, o, r, a, 2.5, 2.6, 1.55, 1.65),
      e.box(`trNet`, t, o, r + 0.1, a - 0.1, 0.4, 2.48, 1.6, 1.6, {
        planar: (e, t) => [e / 0.9, t / 0.9],
      }));
    for (let n = r + 0.3; n < a; n += 0.7)
      e.add(`trPaintOrange`, new i(0.13, 8, 6).translate(n, 2.35, 1.66), t, o);
  }
  let r = n.grid[0][0];
  e.box(`trPaintWhite`, t, r, 0.2, 1.4, 0, 1, 0.1, 0.8);
}
