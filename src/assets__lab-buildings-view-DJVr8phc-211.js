// assets__lab-buildings-view-DJVr8phc 211 — box
// Lines 66533-66771 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function Mb(e, t, n) {
  let i = n.L / 2,
    a = n.grid[0][1];
  n.H;
  for (let n of [-1, 1])
    for (let r of [1.3, 1.75])
      e.box(
        `trWhiteStone`,
        t,
        a,
        i + n * r - 0.18,
        i + n * r + 0.18,
        0.2,
        4.2,
        -0.02,
        0.22,
      );
  e.box(`trWhiteStone`, t, a, i - 2.05, i + 2.05, 4.2, 4.55, -0.02, 0.3);
  for (let n of [-1, 1])
    e.add(
      `trWhiteStone`,
      new r(1.2, 0.18, 0.34)
        .rotateZ(-n * 0.4)
        .translate(i + n * 1.35, 4.82, 0.13),
      t,
      a,
    );
  (e.box(`trWhiteStone`, t, a, i - 0.22, i + 0.22, 4.55, 4.75, 0, 0.3),
    e.add(
      `trWhiteStone`,
      Xy(
        [
          [0.001, 0],
          [0.16, 0],
          [0.13, 0.4],
          [0.1, 0.7],
          [0.08, 0.8],
          [0.09, 0.9],
          [0.001, 0.98],
        ],
        8,
      ).translate(i, 4.75, 0.15),
      t,
      a,
    ));
  let o = n.grid[0][1],
    s = 6.15;
  (vb(e, `glass`, t, o, i, s, 0.62, 0.012),
    e.add(`trWhiteStone`, new u(0.7, 0.12, 6, 20).translate(i, s, 0.05), t, o));
  for (let n of [0, Math.PI / 2])
    e.add(
      `trWhiteStone`,
      new r(1.24, 0.06, 0.04).rotateZ(n).translate(i, s, 0.03),
      t,
      o,
    );
}
var Nb = (e, t, n) => {
  for (let r = 0; r <= n.nb; r++) {
    let i = Math.min(n.L - 0.35, Math.max(0.35, r * n.bw)),
      a = n.grid[0][Q(n, i)];
    (e.box(`trStuccoWhite`, t, a, i - 0.35, i + 0.35, 0, 4.6, 0, 1),
      e.box(`trWhiteStone`, t, a, i - 0.4, i + 0.4, 0, 0.6, 0, 1.08),
      Qy(
        e,
        `trWhiteStone`,
        t,
        a,
        new C([Dy(0, 4.6), Dy(1.06, 4.6), Dy(1.06, 4.72), Dy(0, 6.3)]),
        i - 0.38,
        0.76,
      ));
  }
};
function Pb() {
  let e = pb(`trWhiteStone`, 7.4, 0.6);
  return {
    key: `trChurch`,
    name: `Iglesia de San Telmo`,
    plain: 15986662,
    desc: `Spanish colonial church: whitewashed nave with a scrolled espadaña bell gable carrying three bronze bells, stone door surround with a saint in a niche, oculus, buttressed flanks and a clay tile roof.`,
    W: 11,
    D: 22,
    style: {
      wall: `trStuccoWhite`,
      t: 0.6,
      bay: 3.6,
      floors: [7.5],
      win: {
        w: 1,
        h: 2.2,
        sill: 4,
        type: `grid`,
        lites: [1, 3],
        frame: `trimWhite`,
        arch: 0.5,
        archMat: `trWhiteStone`,
        rec: 0.35,
        curtains: 0,
      },
      door: {
        w: 2,
        h: 3,
        transom: 0.7,
        frame: `trWhiteStone`,
        mat: `trPlankDark`,
        rec: 0.4,
        step: `trWhiteStone`,
      },
      base: { mat: `trCoral`, h: 0.6, out: 0.05 },
      cornice: { type: `classic`, mat: `trimWhite`, h: 0.3, out: 0.25 },
      roof: {
        ridge: `z`,
        pitch: 30 * Ey,
        over: 0.4,
        mat: `trTile`,
        fascia: `trimWhite`,
        ridgeMat: `trTileDark`,
      },
    },
    front: {
      kinds: (e, t) => (t === 1 ? `door` : `solid`),
      extra: k(e, jb, Mb),
    },
    back: { kinds: () => `solid`, extra: e },
    left: { kinds: (e, t) => (t === 3 ? `door` : `window`), extra: k(Nb, e) },
    right: {
      kinds: (e, t) => (t >= 4 ? `solid` : `window`),
      extra: k(
        Nb,
        mb({
          a0: 14.2,
          a1: 20.2,
          d: 3.6,
          h: 4.2,
          fall: 0.6,
          mat: `trStuccoWhite`,
          roof: `trTile`,
          door: 17.2,
          doorMat: `trPlankDark`,
          win: 15.4,
        }),
        e,
      ),
    },
  };
}
function Fb(e, t, n) {
  let r = n.L / 2,
    i = 3.42,
    a = 2.62,
    o = i / 18,
    s = 0.28;
  (e.box(`trCoral`, t, n.grid[0][Q(n, r - 0.1)], r - 1.3, r, 0, i, a, 4.05),
    e.box(`trCoral`, t, n.grid[0][Q(n, r + 0.1)], r, r + 1.3, 0, i, a, 4.05),
    e.box(
      `trWhiteStone`,
      t,
      n.grid[0][Q(n, r)],
      r - 1.36,
      r + 1.36,
      3.36,
      3.46,
      a,
      4.11,
    ));
  for (let c of [-1, 1]) {
    for (let l = 1; l < 18; l++) {
      let u = r + c * (1.3 + (l - 1) * s),
        d = r + c * (1.3 + l * s);
      e.box(
        `trCoral`,
        t,
        n.grid[0][Q(n, (u + d) / 2)],
        Math.min(u, d),
        Math.max(u, d),
        0,
        i - l * o,
        a,
        3.95,
      );
    }
    let l = r + c * 6.0600000000000005,
      u = n.grid[0][Q(n, l)],
      d = n.grid[0][Q(n, r + c * 1.2)];
    D(
      e,
      Z,
      t,
      d,
      [r + c * 1.3, 4.37, 3.9000000000000004],
      [l, 1.14, 3.9000000000000004],
      0.05,
    );
    for (let a = 2; a < 18; a += 2) {
      let l = r + c * (1.3 + a * s);
      e.box(
        Z,
        t,
        n.grid[0][Q(n, l)],
        l - 0.015,
        l + 0.015,
        i - a * o,
        i - a * o + 0.95,
        3.8800000000000003,
        3.9200000000000004,
      );
    }
    (e.box(
      `trWhiteStone`,
      t,
      u,
      l - 0.2,
      l + 0.2,
      0,
      1.1,
      3.7,
      4.1000000000000005,
    ),
      e.add(
        `trTerracotta`,
        Xy(
          [
            [0.15, 0],
            [0.3, 0.25],
            [0.32, 0.5],
            [0.24, 0.62],
            [0.001, 0.62],
          ],
          10,
        ).translate(l, 1.1, 3.9000000000000004),
        t,
        u,
      ));
  }
  for (let a = r - 1.25; a <= r + 1.26; a += 0.14)
    e.box(Z, t, n.grid[0][Q(n, a)], a - 0.015, a + 0.015, i, 4.37, 4, 4.03);
  e.box(Z, t, n.grid[0][Q(n, r)], r - 1.3, r + 1.3, 4.34, 4.39, 3.97, 4.05);
}
