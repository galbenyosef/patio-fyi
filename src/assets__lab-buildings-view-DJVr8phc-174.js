// assets__lab-buildings-view-DJVr8phc 174 — box
// Lines 54861-55182 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function zh(e, t, n) {
  let r = n.H + 0.02,
    i = n.W / 2 + 0.1,
    a = n.D / 2 + 0.1,
    o = 1.1,
    s = 2.9;
  (am(e, t, 0, `pnSlate`, i, a, r, i - o, a - o, r + s),
    am(
      e,
      t,
      0,
      `pnCopper`,
      i - o + 0.05,
      a - o + 0.05,
      r + s,
      i - 3.2,
      a - 3.2,
      r + s + 0.5,
    ));
  for (let n of [-1, 1])
    (e.box(
      `pnTrimCream`,
      t,
      0,
      -(i - o) - 0.1,
      i - o + 0.1,
      r + s - 0.08,
      r + s + 0.06,
      n * (a - o) - 0.1,
      n * (a - o) + 0.1,
    ),
      e.box(
        `pnTrimCream`,
        t,
        0,
        n * (i - o) - 0.1,
        n * (i - o) + 0.1,
        r + s - 0.08,
        r + s + 0.06,
        -(a - o),
        a - o,
      ));
  let c = [
    [[0, 0, n.D / 2], 0, [-4.5, 0, 4.5]],
    [[0, 0, -n.D / 2], Math.PI, [-4.5, 0, 4.5]],
    [[n.W / 2, 0, 0], Math.PI / 2, [-3.2, 3.2]],
    [[-n.W / 2, 0, 0], -Math.PI / 2, [-3.2, 3.2]],
  ];
  for (let [n, i, a] of c) {
    let o = t
      .clone()
      .multiply(new l().makeTranslation(...n))
      .multiply(new l().makeRotationY(i));
    for (let t of a) {
      (e.box(
        `pnTrimCream`,
        o,
        0,
        t - 0.68,
        t + 0.68,
        r + 0.25,
        r + 2.2,
        -1.5,
        0.02,
      ),
        e.box(
          `glass`,
          o,
          0,
          t - 0.42,
          t + 0.42,
          r + 0.5,
          r + 1.95,
          0.02,
          0.03,
        ));
      for (let [n, i, a, s] of [
        [t - 0.03, t + 0.03, r + 0.5, r + 1.95],
        [t - 0.42, t + 0.42, r + 1.2, r + 1.25],
        [t - 0.78, t + 0.78, r + 0.2, r + 0.32],
      ])
        e.box(`pnTrimWine`, o, 0, n, i, a, s, 0.02, 0.08);
      im(e, o, {
        along: `z`,
        cx: t,
        cz: -0.7,
        len: 1.5,
        over: 0.12,
        th: 0.1,
        pts: [
          [-0.85, r + 2.12],
          [0, r + 2.72],
          [0.85, r + 2.12],
        ],
        mat: `pnSlate`,
        rake: `pnTrimCream`,
        fill: `pnTrimCream`,
        fillPts: [
          [-0.68, r + 2.2],
          [0, r + 2.68],
          [0.68, r + 2.2],
        ],
      });
    }
  }
  for (let n of [-3.5, 3.5])
    A(e, t, `pnBrickBuff`, n, 0, r + s, r + s + 1.6, 1.2, 0.7);
}
function Bh() {
  let e = {
    a0: -0.2,
    a1: 15.2,
    d: 2.6,
    trim: `pnTrimCream`,
    col: `turned`,
    cols: [0.1, 3.8, 7.5, 11.2, 14.9],
    brackets: !0,
  };
  return {
    key: `pnGaffHotel`,
    name: `The Gaff Hotel`,
    plain: 13018490,
    desc: `Buff-brick waterfront hotel: two-storey turned-post gallery with spindle rail and name board, wine storefronts, bracketed cornice, slate mansard with pedimented dormers and copper deck, bulb-lit blade sign.`,
    W: 15,
    D: 14,
    style: {
      wall: `pnBrickBuff`,
      t: 0.3,
      bay: 3,
      floors: [3.8, 3.3, 3.3],
      win: {
        w: 1.1,
        h: 2,
        sill: 0.8,
        type: `sash`,
        lites: [2, 2],
        frame: `pnTrimCream`,
        header: `pnStone`,
        headerH: 0.22,
        sillMat: `pnStone`,
        rec: 0.15,
        curtains: 0.6,
      },
      store: { frame: `pnTrimWine`, fascia: `pnTrimWine` },
      door: {
        w: 1.2,
        h: 2.4,
        transom: 0.4,
        frame: `pnTrimWine`,
        glazed: !0,
        mat: `pnDoorRed`,
        rec: 0.15,
      },
      base: { mat: `granite`, h: 0.4, out: 0.03 },
      belt: { mat: `pnStone`, h: 0.18, out: 0.05 },
      cornice: {
        type: `classic`,
        mat: `pnTrimCream`,
        h: 0.45,
        out: 0.5,
        brackets: !0,
      },
      roof: sm,
    },
    front: {
      kinds: (e, t) =>
        e === 0
          ? t === 2
            ? `door`
            : `store`
          : e === 1 && t % 2
            ? `door`
            : `window`,
      signs: [
        { mat: `pnSignGaff`, rect: [3.2, 11.8, 7.2, 7.8], z0: 2.72, z1: 2.76 },
      ],
      extra: k(
        cm({
          ...e,
          y: 0.2,
          top: 3.52,
          beam: 0.28,
          flatTop: !0,
          ceil: `pnDeck`,
        }),
        cm({
          ...e,
          y: 3.95,
          top: 6.75,
          beam: 0.25,
          rise: 0.35,
          roof: `pnSlate`,
          rail: !0,
          noSkirt: !0,
        }),
        (e, t, n) =>
          Re(
            e,
            t,
            n.grid[2][4],
            `pnSignHotel`,
            14.55,
            7.6,
            10.1,
            0.15,
            1.05,
            `pnTrimWine`,
            { bulbs: !0 },
          ),
      ),
    },
    right: { kinds: (e, t) => (e === 0 && t === 2 ? `door` : `window`) },
    left: { kinds: (e, t) => (e === 0 ? `solid` : `window`) },
    back: { kinds: (e, t) => (e === 0 && t === 2 ? `door` : `window`) },
    extra: zh,
  };
}
function Vh(e, t, n) {
  fm({
    a0: -2.5,
    a1: n.L + 2.5,
    d: 7,
    y: 0.45,
    step: 2.4,
    cleats: [-1.5, 8.5],
    bull: !1,
  })(e, t, n);
  let r = n.grid[0][0],
    i = n.grid[0][1];
  for (let [n, a] of [
    [1.6, r],
    [5.4, i],
  ])
    (e.box(`concrete`, t, a, n - 0.5, n + 0.5, 0.45, 0.62, 4.1, 5),
      e.box(`pnPanelWhite`, t, a, n - 0.35, n + 0.35, 0.62, 2, 4.3, 4.8),
      e.box(`pnTrimOrange`, t, a, n - 0.38, n + 0.38, 1.9, 2.25, 4.27, 4.83),
      e.box(`pnRubber`, t, a, n - 0.22, n + 0.22, 1.25, 1.65, 4.8, 4.82),
      e.add(
        `pnRubber`,
        new u(0.35, 0.03, 4, 12, Math.PI * 1.3).translate(n + 0.3, 1.25, 4.85),
        t,
        a,
      ));
  let a = 3.6,
    o = 6.3;
  for (let [r, i, s] of Qp(n, -0.6, n.L + 0.6)) {
    let c = n.grid[0][s];
    (e.box(`pnPanelWhite`, t, c, r, i, a, 3.8000000000000003, 2.9, o),
      e.box(`pnTrimOrange`, t, c, r, i, 3.5500000000000003, 4.05, o, 6.38));
  }
  xe(
    e,
    t,
    n,
    { floors: [3] },
    {
      mat: `pnSignFuel`,
      rect: [-0.2, n.L + 0.2, 3.6, 4.0200000000000005],
      z0: 6.38,
      z1: 6.39,
    },
  );
  for (let r of [0.2, n.L - 0.2])
    e.box(
      `pnTrimOrange`,
      t,
      n.grid[0][G(n, r)],
      r - 0.09,
      r + 0.09,
      0.45,
      a,
      4.5,
      4.68,
    );
  let s = n.grid[0][0];
  (K(e, `pnSteel`, t, s, -1.6, 5.8, 0.45, 4.2, 0.07, 0.06, 8),
    mm(e, t, s, `pnSignPrice`, `pnTrimOrange`, -2.2, -1, 3, 4, 5.92, !0));
  for (let n = 0; n < 4; n++)
    K(
      e,
      `pnTrimNavy`,
      t,
      i,
      7.7 + (n % 2) * 0.62,
      1 + (n >> 1) * 0.62,
      0.45,
      1.33,
      0.29,
      0.29,
      10,
    );
  for (let r = -1.5; r < n.L + 2; r += 2.2)
    K(e, `pnRubber`, t, n.grid[0][G(n, r)], r, 7.15, -0.2, 0.35, 0.12, 0.12, 8);
  gm(e, t, i, 5.6, 1.6, 0.02);
}
function Hh(e, t, n) {
  om(e, t, n, `pnCorrGalv`, 25 * Np, 0.5, `pnTrimOrange`);
  let r = -n.D / 2 - 2.4;
  for (let [n, i, a, o] of [
    [-4.2, 4.2, r - 1.7, r - 1.5],
    [-4.2, 4.2, r + 1.5, r + 1.7],
    [-4.2, -4, r - 1.7, r + 1.7],
    [4, 4.2, r - 1.7, r + 1.7],
  ])
    e.box(`concrete`, t, 0, n, i, 0, 0.6, a, o);
  for (let n of [r - 0.7, r + 0.7]) {
    $p(e, `pnBuoyWhite`, t, 0, -3.2, 3.2, 1.25, n, 0.62, 14);
    for (let r of [-3.2, 3.2])
      e.add(
        `pnBuoyWhite`,
        new w(0.62, 14, 6, 0, Math.PI)
          .rotateY(r < 0 ? Math.PI / 2 : -Math.PI / 2)
          .translate(r, 1.25, n),
        t,
        0,
      );
    $p(e, `pnTrimOrange`, t, 0, -0.6, 0.6, 1.25, n, 0.63, 14);
    for (let r of [-2, 2])
      e.box(`concrete`, t, 0, r - 0.2, r + 0.2, 0, 0.75, n - 0.5, n + 0.5);
  }
  em(e, `pnSteel`, t, 0, 1, 0.4, r + 0.7, -n.D / 2, 0.06);
}
