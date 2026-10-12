// assets__lab-buildings-view-DJVr8phc 170 — box
// Lines 53620-53953 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function yh(e, t, n) {
  let r = n.roofTop,
    i = n.D / 2 - 0.7,
    a = 0.55;
  (e.box(`pnBattenBrown`, t, 0, -0.55, a, r - 0.9, r + 0.5, i - 0.45, i + 0.45),
    e.box(
      `pnTrimCream`,
      t,
      0,
      -0.63,
      0.63,
      r + 0.5,
      r + 0.6,
      i - 0.53,
      i + 0.53,
    ));
  for (let [n, a] of [
    [-0.55 + 0.06, i - 0.39],
    [0.49000000000000005, i - 0.39],
    [-0.55 + 0.06, i + 0.39],
    [0.49000000000000005, i + 0.39],
  ])
    e.box(
      `timber`,
      t,
      0,
      n - 0.06,
      n + 0.06,
      r + 0.6,
      r + 1.85,
      a - 0.06,
      a + 0.06,
    );
  (e.box(`timber`, t, 0, -0.55, a, r + 1.72, r + 1.85, i - 0.08, i + 0.08),
    e.add(
      `pnBrass`,
      new s(0.12, 0.24, 0.36, 12).translate(0, r + 1.46, i),
      t,
      0,
    ),
    e.add(
      `pnBrass`,
      new w(0.12, 10, 5, 0, Math.PI * 2, 0, Math.PI / 2).translate(
        0,
        r + 1.64,
        i,
      ),
      t,
      0,
    ),
    im(e, t, {
      along: `z`,
      cz: i,
      len: 0.9,
      over: 0.15,
      th: 0.1,
      pts: [
        [-0.85, r + 1.75],
        [0, r + 2.45],
        [0.85, r + 1.75],
      ],
      mat: `pnShingleMoss`,
      rake: `pnTrimCream`,
    }),
    e.box(
      `pnTrimCream`,
      t,
      0,
      -0.04,
      0.04,
      r + 2.5,
      r + 3.4,
      i - 0.04,
      i + 0.04,
    ),
    e.box(
      `pnTrimCream`,
      t,
      0,
      -0.25,
      0.25,
      r + 3,
      r + 3.08,
      i - 0.04,
      i + 0.04,
    ),
    e.box(
      `pnTrimCream`,
      t,
      0,
      -0.05,
      0.05,
      r + 0.1,
      r + 1.1,
      -n.D / 2 - 0.2,
      -n.D / 2 - 0.1,
    ),
    e.box(
      `pnTrimCream`,
      t,
      0,
      -0.3,
      0.3,
      r + 0.62,
      r + 0.72,
      -n.D / 2 - 0.2,
      -n.D / 2 - 0.1,
    ),
    K(e, W, t, 0, 1.6, -n.D / 2 + 2.5, n.H + 1, n.H + 3.6, 0.1, 0.1, 8));
}
function bh() {
  return {
    key: `pnChurch`,
    name: `St. Brendan by the Sea`,
    plain: 5915442,
    desc: `Small timber-frame church in dark board-and-batten: steep moss-green roof, open braced entry porch with a cross, rose window in the gable, round-headed lancets, raking timber buttresses, open bell-cote.`,
    W: 9,
    D: 17,
    style: {
      wall: `pnBattenBrown`,
      t: 0.2,
      bay: 3,
      floors: [5],
      win: {
        w: 0.75,
        h: 3,
        sill: 1.1,
        type: `grid`,
        lites: [1, 4],
        frame: `pnTrimCream`,
        arch: 0.375,
        archMat: `pnTrimCream`,
        ringW: 0.12,
        sillMat: `pnTrimCream`,
        rec: 0.1,
        curtains: 0,
      },
      door: {
        w: 1.5,
        h: 2.4,
        transom: 0.5,
        frame: `pnTrimCream`,
        mat: `pnDoorRed`,
        rec: 0.15,
      },
      base: { mat: `pnRubble`, h: 0.45, out: 0.04 },
      corners: `pnTrimCream`,
      roof: {
        ridge: `z`,
        pitch: 55 * Np,
        over: 0.35,
        mat: `pnShingleMoss`,
        fascia: `pnTrimCream`,
      },
    },
    front: { kinds: (e, t) => (t === 1 ? `door` : `window`), extra: _h },
    right: {
      bay: 2.77,
      kinds: (e, t, n) => (t === n - 1 ? `door` : `window`),
      extra: vh,
    },
    left: { bay: 2.77, kinds: () => `window`, extra: vh },
    back: { kinds: (e, t) => (t === 1 ? `window` : `solid`) },
    extra: yh,
  };
}
function xh(e, t, n) {
  let r = 5.6,
    i = 8.2,
    a = `pnTarPlank`,
    o = Math.tan(35 * Np),
    s = 6.6 / 2;
  (Zp(e, a, t, n, 1, r, 0, i, 3.8, 4),
    Zp(e, a, t, n, 1, 1.2, 0, i, 0, 3.8),
    Zp(e, a, t, n, 5.3999999999999995, r, 0, i, 0, 3.8));
  let c = n.gableCell;
  im(e, t, {
    along: `z`,
    cx: s,
    cz: 2,
    len: 4,
    over: 0.3,
    pts: [
      [-2.7, i - 0.4 * o],
      [0, i + 2.3 * o],
      [2.7, i - 0.4 * o],
    ],
    mat: `pnCorrRust`,
    rake: a,
    fill: a,
    fillPts: [
      [-2.3, i],
      [0, i + 2.3 * o],
      [2.3, i],
    ],
    cell: c,
  });
  let l = i + 2.3 * o;
  (e.box(`louver`, t, c, 2.9499999999999997, 3.65, l - 0.1, l + 0.5, 0.3, 3.7),
    im(e, t, {
      along: `z`,
      cx: s,
      cz: 2,
      len: 3.4,
      over: 0.2,
      th: 0.08,
      pts: [
        [-0.7, l + 0.42],
        [0, l + 0.75],
        [0.7, l + 0.42],
      ],
      mat: `pnCorrRust`,
      cell: c,
    }));
  let u = Xp(n, s, 0.5);
  (e.box(W, t, u, 2.8, 3.8, 0.15, 1.25, 4, 4.05),
    e.box(
      W,
      t,
      u,
      3.5999999999999996,
      3.6599999999999997,
      0.6,
      0.8,
      4.05,
      4.12,
    ));
  for (let r of [1.7, 4.9])
    e.box(`louver`, t, Xp(n, r, 6.5), r - 0.3, r + 0.3, 6.2, 6.6, 4, 4.03);
  (Om(e, t, u, 1.2, 5.3999999999999995, 0.15, 4, 4.1, 4.95),
    Om(e, t, Xp(n, 6.6, 0.5), 5.8, 7.5, 0.15, 5, 0.1, 1));
}
function Sh(e, t, n) {
  dm({
    a0: 0.3,
    a1: 7.3,
    y: 2.85,
    d: 2.8,
    drop: 0.55,
    mat: `pnCorrRust`,
    fascia: `woodDark`,
    posts: [0.4, 3.8, 7.2],
    postMat: `timber`,
  })(e, t, n);
  for (let r of [0.95, 1.9]) {
    for (let [i, a] of Qp(n, 0.8, 6.8)) {
      let o = n.grid[0][G(n, (i + a) / 2)];
      for (let n of [2.05, 1.25])
        (e.box(`timber`, t, o, i, a, n, n + 0.05, r - 0.03, r + 0.03),
          e.box(`pnFishRack`, t, o, i, a, n - 0.62, n, r - 0.005, r + 0.005, {
            planar: (e, t) => [e / 1.1, (t - n + 0.62) / 0.62],
          }));
    }
    for (let i of [0.75, 6.85])
      e.box(
        `timber`,
        t,
        n.grid[0][G(n, i)],
        i - 0.05,
        i + 0.05,
        0.15,
        2.15,
        r - 0.05,
        r + 0.05,
      );
  }
}
function Ch() {
  return {
    key: `pnSmokehouse`,
    name: `Kettle Point Smokehouse`,
    plain: 4019782,
    desc: `Green board-and-batten salmon shop with a tall tarred-plank smoke kiln up its gable end: rust roof with a louvred ridge vent, iron fire door, stacked alder cordwood, fish drying racks under a lean-to.`,
    W: 10,
    D: 8,
    style: {
      wall: `pnBattenGreen`,
      t: 0.18,
      bay: 2.5,
      floors: [3.2],
      win: {
        w: 1.1,
        h: 1.2,
        sill: 0.95,
        type: `grid`,
        lites: [2, 2],
        frame: `pnTrimCream`,
        rec: 0.06,
        curtains: 0.4,
      },
      store: { frame: `pnTrimCream`, fascia: `pnTrimCream` },
      awning: { mat: `awningGreen`, depth: 1.1, drop: 0.5 },
      door: {
        w: 1,
        h: 2.2,
        transom: 0,
        frame: `pnTrimCream`,
        glazed: !0,
        mat: `pnDoorRed`,
        rec: 0.1,
      },
      base: { mat: `concrete`, h: 0.25, out: 0.02 },
      corners: `pnTrimCream`,
      roof: {
        ridge: `x`,
        pitch: 28 * Np,
        over: 0.5,
        mat: `pnShingleDark`,
        fascia: `pnTrimCream`,
      },
    },
    front: {
      kinds: (e, t) => [`store`, `door`, `store`, `solid`][t],
      extra: (e, t, n) =>
        mm(
          e,
          t,
          n.grid[0][3],
          `pnSignSmoke`,
          `pnTrimCream`,
          7.75,
          9.75,
          0.7,
          2.6,
          0.06,
        ),
    },
    left: { kinds: () => `solid`, extra: xh },
    right: { kinds: (e, t) => (t === 1 ? `window` : `solid`), extra: Sh },
    back: { kinds: (e, t) => (t === 1 ? `door` : `window`) },
    extra: (e, t, n) =>
      A(e, t, `pnBrickRed`, 2.5, -1.2, n.H - 0.3, n.roofTop + 0.5, 0.7, 0.5),
  };
}
