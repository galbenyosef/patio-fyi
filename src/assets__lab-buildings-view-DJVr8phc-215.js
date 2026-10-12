// assets__lab-buildings-view-DJVr8phc 215 — box
// Lines 67730-67982 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function Qb() {
  return {
    key: `trBale`,
    name: `Bale Banjar Tirta`,
    plain: 11818042,
    desc: `Balinese pavilion: red-brick plinth with carved padas stone panels and cornice, steps between stepped wing walls guarded by statues in poleng cloth under yellow umbrellas, teak posts carrying a two-tier alang-alang thatch roof with a lattice clerestory and terracotta finial.`,
    W: 10,
    D: 10,
    style: {
      wall: `trBrickBali`,
      t: 0.4,
      bay: 3.3,
      floors: [1.2],
      base: { mat: `trPadas`, h: 0.35, out: 0.08 },
      cornice: {
        type: `classic`,
        mat: `trPadas`,
        h: 0.18,
        out: 0.14,
        cap: `trPadas`,
      },
      roof: lb(0.4, `trPadas`),
    },
    front: { kinds: () => `solid`, extra: Xb },
    back: { kinds: () => `solid`, extra: Zb },
    left: { kinds: () => `solid`, extra: Zb },
    right: { kinds: () => `solid`, extra: Zb },
    extra: (e, t, n) => {
      let r = 1.34,
        a = [-4, -1.33, 1.33, 4];
      for (let n of a)
        for (let i of a) {
          let a = Math.abs(n) < 2 && Math.abs(i) < 2;
          (!a || Math.abs(n) < 2) &&
            (e.box(
              `trPadas`,
              t,
              0,
              n - 0.22,
              n + 0.22,
              r,
              1.6400000000000001,
              i - 0.22,
              i + 0.22,
            ),
            $(
              e,
              `trTeak`,
              t,
              0,
              n,
              1.6400000000000001,
              a ? 6.05 : 3.7,
              i,
              0.13,
              8,
            ));
        }
      for (let n of [-1, 1])
        (e.box(
          `trTeak`,
          t,
          0,
          -4.15,
          4.15,
          3.6,
          3.85,
          n * 4 - 0.12,
          n * 4 + 0.12,
        ),
          e.box(
            `trTeak`,
            t,
            0,
            n * 4 - 0.12,
            n * 4 + 0.12,
            3.6,
            3.85,
            -4.15,
            4.15,
          ));
      for (let n of [-1, 1])
        (e.box(
          `trTeak`,
          t,
          0,
          -1.45,
          1.45,
          5.9,
          6.1,
          n * 1.33 - 0.1,
          n * 1.33 + 0.1,
        ),
          e.box(
            `trTeak`,
            t,
            0,
            n * 1.33 - 0.1,
            n * 1.33 + 0.1,
            5.9,
            6.1,
            -1.45,
            1.45,
          ));
      (sb(e, t, 0, `trThatchDbl`, 5.8, 5.8, 3.55, 2, 2, 5.45, !1),
        sb(e, t, 0, `trThatch`, 5.8, 5.8, 3.3, 5.8, 5.8, 3.55, !1),
        sb(e, t, 0, `trLatticeWood`, 1.72, 1.72, 5.4, 1.72, 1.72, 6.05, !1),
        sb(e, t, 0, `trThatchDbl`, 3.2, 3.2, 5.95, 0.12, 0.12, 8.4, !1),
        sb(e, t, 0, `trThatch`, 3.2, 3.2, 5.75, 3.2, 3.2, 5.95, !1),
        e.add(
          `trTerracotta`,
          Xy(
            [
              [0.3, 0],
              [0.34, 0.12],
              [0.18, 0.3],
              [0.24, 0.5],
              [0.1, 0.75],
              [0.12, 0.85],
              [0.001, 1.15],
            ],
            10,
          ).translate(0, 8.25, 0),
          t,
          0,
        ));
      for (let n of [-1, 1])
        for (let r of [-1, 1])
          e.add(
            `trTerracotta`,
            new i(0.12, 0.45, 6).translate(n * 2.05, 5.6, r * 2.05),
            t,
            0,
          );
      for (let [n, i] of [
        [-3.4, 3.4],
        [3.3, -3.3],
      ])
        (e.box(
          `trBambooWeave`,
          t,
          0,
          n - 0.2,
          n + 0.2,
          r,
          1.4200000000000002,
          i - 0.2,
          i + 0.2,
        ),
          e.add(
            `trPaintOrange`,
            new w(0.06, 6, 4).translate(n, 1.46, i),
            t,
            0,
          ));
    },
  };
}
var $b = (e, t) => (n, r, i) => {
  let a = i.gableCell,
    o = i.L / 2,
    s = i.H + (i.L / 2 + i.t) * Math.tan(e);
  for (let i of [-1, 1]) {
    let c = o - i * 0.35,
      l = s - 0.35 * Math.tan(e) + 0.05,
      u = o + i * 0.75,
      d = s + 1.25;
    (n.add(
      `woodDark`,
      new ue(
        new C([
          Dy(c - 0.12, l),
          Dy(c + 0.12, l),
          Dy(u + i * 0.25, d - 0.2),
          Dy(u + i * 0.08, d + 0.05),
          Dy(u - i * 0.05, d - 0.25),
        ]),
      ).translate(0, 0, t + 0.02),
      r,
      a,
    ),
      O(n, `woodDark`, r, a, c, l, u, d - 0.12, 0.2, t - 0.08, t + 0.01));
  }
};
function ex(e, t, n) {
  let r = 2.4 / 12,
    i = 0.27,
    a = n.L + 0.3;
  ob({
    noRoof: !0,
    a0: -0.3,
    a1: n.L + 0.3,
    d: 3.2,
    y: 0.02,
    trim: `woodDark`,
    deck: `trDeck`,
    col: `post`,
    colW: 0.06,
    rail: !0,
    railH: 0.75,
    baluster: 0.2,
    gap: 2.4,
    noStairs: !0,
  })(e, t, n);
  for (let r of [-0.15, 3.1, 6.1, n.L + 0.15])
    $(e, `timber`, t, n.grid[0][Q(n, r)], r, -2.4, -0.1, 2.95, 0.13, 8, 0.12);
  let o = n.grid[0][n.nb - 1];
  for (let n = 1; n <= 12; n++)
    e.box(
      `trDeck`,
      t,
      o,
      a + (n - 1) * i,
      a + n * i,
      -n * r - 0.05,
      -n * r,
      2.1,
      3.1,
    );
  for (let n of [2.08, 3.12])
    D(e, `woodDark`, t, o, [a, -0.05, n], [a + 12 * i, -2.4, n], 0.08);
  for (let [r, i, a] of [
    [0.6, 2.6, 1],
    [n.L - 0.3, 1.2, 0.8],
    [1.6, 2.7, 0.7],
  ]) {
    let o = n.grid[0][Q(n, r)];
    (e.add(
      `trTerracotta`,
      Xy(
        [
          [0.001, 0],
          [0.22, 0],
          [0.34, 0.25],
          [0.3, 0.5],
          [0.2, 0.58],
          [0.001, 0.58],
        ],
        10,
      )
        .scale(a, a, a)
        .translate(r, 0.02, i),
      t,
      o,
    ),
      e.add(
        `trPaintGreen`,
        new w(0.34 * a, 8, 6).scale(1, 1.3, 1).translate(r, 0.02 + 0.8 * a, i),
        t,
        o,
      ));
  }
}
