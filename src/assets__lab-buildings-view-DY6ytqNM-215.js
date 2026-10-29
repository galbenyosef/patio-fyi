// assets__lab-buildings-view-DY6ytqNM 215 — kinds
// Lines 67401-67739 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function Gb() {
  return {
    key: `trFort`,
    name: `San Felipe Guardhouse`,
    plain: 12563091,
    desc: `Fort guardhouse: thick coral-rubble block on a battered stone plinth, crenellated parapet, corbelled domed sentry turrets on two corners, relieving arch over a plank gate with a carved date plaque, gun slits and a pair of iron cannon.`,
    W: 11,
    D: 8,
    style: {
      wall: `trCoralRubble`,
      t: 0.9,
      bay: 3.6,
      floors: [4.4],
      parapet: 0.5,
      win: {
        w: 0.32,
        h: 1.3,
        sill: 1.7,
        type: `grid`,
        lites: [1, 1],
        frame: `trCoral`,
        rec: 0.6,
        curtains: 0,
      },
      door: {
        w: 2.4,
        h: 3,
        transom: 0,
        frame: `trCoral`,
        mat: `trPlankDark`,
        rec: 0.55,
        step: `trCoral`,
      },
      base: { mat: `trCoral`, h: 1, out: 0.3 },
      belt: null,
    },
    front: {
      kinds: (e, t) => (t === 1 ? `door` : `window`),
      signs: [
        { mat: `trSignFort`, rect: [4.9, 6.1, 3.25, 3.85], z0: 0.14, z1: 0.16 },
      ],
      extra: A(Ub, Wb, Ab(`trCoralRubble`, 0.5)),
    },
    back: { kinds: () => `window`, extra: A(Wb, Ab(`trCoralRubble`, 0.5)) },
    left: { kinds: () => `window`, extra: Ab(`trCoralRubble`, 0.5) },
    right: {
      kinds: (e, t) => (t === 1 ? `solid` : `window`),
      extra: Ab(`trCoralRubble`, 0.5),
    },
    extra: (e, t, n) => {
      (Hb(e, t, n.W / 2 + 0.2, n.D / 2 + 0.2, n.H + 0.5),
        Hb(e, t, -n.W / 2 - 0.2, -n.D / 2 - 0.2, n.H + 0.5),
        tb(e, t, 0, -1.5, n.H, -1, 5),
        e.box(`trCoral`, t, 0, 1.5, 3.3, n.H, n.H + 1, -2.5, -1.2),
        e.box(`trPlankDark`, t, 0, 1.9, 2.9, n.H, n.H + 0.85, -1.21, -1.18));
    },
  };
}
var Kb = {
  front: { kinds: () => `solid`, extra: null },
  back: { kinds: () => `solid`, extra: null },
  left: { kinds: () => `solid`, extra: null },
  right: { kinds: () => `solid`, extra: null },
};
function qb(e, t, n, r, i, o, s, c = 0.03) {
  let l = i[0] - r[0],
    u = i[1] - r[1],
    d = Math.hypot(l, u);
  e.add(
    n,
    new a(d, s - o, c)
      .rotateY(-Math.atan2(u, l))
      .translate((r[0] + i[0]) / 2, (o + s) / 2, (r[1] + i[1]) / 2),
    t,
    0,
  );
}
function Jb() {
  return {
    key: `trFale`,
    name: `Fale Tele`,
    plain: 9072720,
    desc: `Samoan fale tele: open-sided meeting house on a raised coral-rubble platform, ring of timber posts under a great oval dome of deep thatch, rolled and lowered pandanus blinds, woven floor mats, stone steps and a carved kava bowl.`,
    W: 12,
    D: 8,
    style: {
      wall: `trCoralRubble`,
      t: 0.5,
      bay: 3,
      floors: [0.7],
      cornice: { type: `classic`, mat: `trCoral`, h: 0.14, out: 0.1 },
      roof: lb(0.5, `trMatting`),
    },
    front: {
      kinds: () => `solid`,
      extra: (e, t, n) =>
        ib(
          e,
          t,
          n.grid[0][Q(n, n.L / 2)],
          n.L / 2,
          0.1,
          0.84,
          0,
          1.8,
          `trCoral`,
          { solid: !0, rise: 0.21, run: 0.34 },
        ),
    },
    back: { kinds: () => `solid` },
    left: { kinds: () => `solid` },
    right: { kinds: () => `solid` },
    extra: (e, t, n) => {
      let r = 0.84,
        i = 2.95,
        a = Array.from({ length: 18 }, (e, t) => {
          let n = (t / 18) * Math.PI * 2;
          return [Math.cos(n) * 5.3, Math.sin(n) * 3.3];
        });
      a.forEach(([n, o], s) => {
        $(e, `woodDark`, t, 0, n, r, i, o, 0.12, 8, 0.1);
        let [c, l] = a[(s + 1) % 18];
        (k(
          e,
          `woodDark`,
          t,
          0,
          [n, 2.9000000000000004, o],
          [c, 2.9000000000000004, l],
          0.14,
        ),
          s % 3 == 1
            ? qb(
                e,
                t,
                `trMatting`,
                [n + 0.05 * Math.sign(n), o],
                [c, l],
                1.2,
                2.8000000000000003,
              )
            : s % 3 == 0 &&
              s !== 4 &&
              Yy(
                e,
                `trMatting`,
                t,
                0,
                [n, 2.6500000000000004, o],
                [c, 2.6500000000000004, l],
                0.1,
                6,
              ));
      });
      for (let n of [-1.6, 1.6])
        $(e, `woodDark`, t, 0, n, r, 6.1, 0, 0.17, 8, 0.14);
      e.box(`woodDark`, t, 0, -2.4, 2.4, 5.85, 6.05, -0.1, 0.1);
      for (let [n, r] of a.filter((e, t) => t % 2 == 0))
        k(
          e,
          `woodDark`,
          t,
          0,
          [n * 0.97, i, r * 0.97],
          [n * 0.3, 5.9, 0],
          0.08,
        );
      let s = Xy(
        [
          [5.05, -0.3],
          [4.7, 0],
          [4.05, 0.85],
          [3.2, 1.75],
          [2.25, 2.55],
          [1.25, 3.1],
          [0.45, 3.35],
          [0.001, 3.4],
        ],
        24,
      )
        .scale(1.3, 1, 0.92)
        .translate(0, i, 0);
      (e.add(`trThatchDbl`, s, t, 0),
        e.add(
          `trThatch`,
          new o(5, 0.14, 6, 28)
            .rotateX(Math.PI / 2)
            .scale(1.3, 1, 0.92)
            .translate(0, 2.6500000000000004, 0),
          t,
          0,
        ),
        $(e, `trThatch`, t, 0, 0, 6.15, 6.5, 0, 0.5, 10, 0.2));
      for (let [n, i, a, o] of [
        [-2.6, -1, 2, 1.4],
        [2.4, 0.6, 1.8, 1.4],
        [0, -1.8, 1.6, 1],
      ])
        e.box(
          `trMatting`,
          t,
          0,
          n - a / 2,
          n + a / 2,
          r,
          0.86,
          i - o / 2,
          i + o / 2,
        );
      e.add(
        `trTeak`,
        Xy(
          [
            [0.001, 0.12],
            [0.3, 0.14],
            [0.42, 0.3],
            [0.45, 0.42],
            [0.38, 0.42],
            [0.36, 0.3],
            [0.001, 0.28],
          ],
          14,
        ).translate(0.4, r, 0.9),
        t,
        0,
      );
      for (let n = 0; n < 6; n++) {
        let i = (n / 6) * Math.PI * 2;
        $(
          e,
          `trTeak`,
          t,
          0,
          0.4 + Math.cos(i) * 0.3,
          r,
          0.98,
          0.9 + Math.sin(i) * 0.3,
          0.03,
          5,
        );
      }
    },
  };
}
function Yb(e, t, n, r, i, a) {
  (e.box(`trPadas`, t, n, r - 0.3, r + 0.3, a, a + 0.7, i - 0.3, i + 0.3),
    e.box(
      `trPadas`,
      t,
      n,
      r - 0.36,
      r + 0.36,
      a + 0.7,
      a + 0.8,
      i - 0.36,
      i + 0.36,
    ),
    e.add(
      `trPoleng`,
      new C(0.2, 0.26, 0.55, 10).translate(r, a + 1.08, i),
      t,
      n,
    ),
    e.add(
      `trPadas`,
      Xy(
        [
          [0.001, 0],
          [0.2, 0.05],
          [0.24, 0.3],
          [0.17, 0.45],
          [0.2, 0.62],
          [0.001, 0.72],
        ],
        10,
      ).translate(r, a + 1.35, i),
      t,
      n,
    ),
    $(e, `woodDark`, t, n, r + 0.34, a + 0.8, a + 3.3, i - 0.1, 0.025, 5),
    e.add(
      `trPaintYellow`,
      new d(0.62, 0.3, 12, 1, !0).translate(r + 0.34, a + 3.2, i - 0.1),
      t,
      n,
    ),
    e.add(
      `trPaintYellow`,
      new C(0.62, 0.62, 0.22, 12, 1, !0).translate(r + 0.34, a + 2.95, i - 0.1),
      t,
      n,
    ));
}
function Xb(e, t, n) {
  let r = n.L / 2,
    a = n.grid[0][Q(n, r)];
  ib(e, t, a, r, 0, 1.2, 0, 1.6, `trPadas`, {
    solid: !0,
    rise: 0.17,
    run: 0.3,
  });
  for (let i of [-1, 1]) {
    let o = r + i * 0.8 + (i > 0 ? 0 : -0.35);
    (Qy(
      e,
      `trBrickBali`,
      t,
      a,
      new T([
        Dy(0, 0),
        Dy(2.3000000000000003, 0),
        Dy(2.3000000000000003, 0.7),
        Dy(0.1, 1.75),
        Dy(0, 1.75),
      ]),
      o,
      0.35,
    ),
      e.box(`trPadas`, t, a, o - 0.04, o + 0.39, 0, 0.3, 0, 2.4),
      Yb(e, t, n.grid[0][Q(n, r + i * 2.2)], r + i * 2.2, 1, 0));
  }
  for (let r of [1.2, n.L - 1.2]) {
    let a = n.grid[0][Q(n, r)];
    e.box(`trPadas`, t, a, r - 0.9, r + 0.9, 0.45, 1, 0, 0.06);
    for (let n = 0; n < 5; n++)
      e.add(
        `trPadas`,
        new i(0.09, 6, 4).translate(r - 0.64 + n * 0.32, 0.72, 0.07),
        t,
        a,
      );
  }
}
var Zb = (e, t, n) => {
  for (let r = 1; r < n.L - 0.5; r += 2.2) {
    let i = n.grid[0][Q(n, r)];
    e.box(`trPadas`, t, i, r - 0.7, r + 0.7, 0.45, 0.95, 0, 0.05);
  }
};
