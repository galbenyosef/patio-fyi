// assets__lab-buildings-view-DJVr8phc 162 — mat
// Lines 51125-51467 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function Fm(e, t, n) {
  let r = n.L;
  (e.box(
    `wood`,
    t,
    n.grid[0][G(n, r - 4)],
    r - 6.2,
    r - 1.8,
    2.35,
    2.45,
    0.02,
    0.35,
  ),
    [
      `pnBuoyOrange`,
      `pnBuoyWhite`,
      `pnBuoyYellow`,
      `pnHullRed`,
      `pnBuoyOrange`,
      `pnTrimNavy`,
    ].forEach((i, a) =>
      ym(
        e,
        t,
        n.grid[0][G(n, r - 5.9 + a * 0.8)],
        r - 5.9 + a * 0.8,
        2.35,
        0.25,
        i,
      ),
    ));
}
function Im() {
  return {
    key: `pnMarineSupply`,
    name: `Pullman Marine Supply`,
    plain: 10922662,
    desc: `Galvanised-iron marine supply store behind a stepped clapboard false front: navy storefronts and striped awnings, roll-up bay, blade sign, anchor and chain, crab pots and a propane cage.`,
    W: 14,
    D: 20,
    style: {
      wall: `pnCorrGalv`,
      t: 0.2,
      bay: 3.5,
      floors: [4.4, 3.4],
      win: {
        w: 1.3,
        h: 1.6,
        sill: 0.9,
        type: `grid`,
        lites: [2, 2],
        frame: `pnTrimNavy`,
        rec: 0.06,
        curtains: 0.3,
      },
      store: { frame: `pnTrimNavy`, fascia: `pnTrimNavy` },
      awning: { mat: `pnAwningNavy`, depth: 1.3, drop: 0.6 },
      door: {
        w: 1.2,
        h: 2.3,
        transom: 0.4,
        frame: `pnTrimNavy`,
        glazed: !0,
        mat: `pnDoorNavy`,
        rec: 0.15,
      },
      loading: { type: `rollup`, dock: !1, w: 2.8, h: 3.3 },
      base: { mat: `concrete`, h: 0.3, out: 0.03 },
      corners: `pnTrimNavy`,
      roof: {
        ridge: `z`,
        pitch: 16 * Np,
        over: 0.12,
        mat: `pnCorrRust`,
        fascia: `pnTrimNavy`,
      },
    },
    front: {
      kinds: (e, t) =>
        e === 0 ? [`store`, `door`, `store`, `loading`][t] : `window`,
      signs: [
        {
          mat: `pnSignMarine`,
          rect: [0.7, 13.3, 8.2, 9.7],
          z0: 0.285,
          z1: 0.29,
        },
        {
          mat: `pnSignMarineEst`,
          rect: [4.2, 9.8, 10.3, 10.8],
          z0: 0.285,
          z1: 0.29,
        },
      ],
      extra: Nm,
    },
    right: {
      kinds: (e, t) => (e === 0 && t === 1 ? `solid` : `window`),
      extra: Pm,
    },
    left: { kinds: (e, t) => (t === 2 ? `door` : `window`), extra: Fm },
    back: { kinds: (e, t) => (e === 0 && t === 1 ? `loading` : `window`) },
  };
}
function Lm(e, t, n) {
  let r = n.gableCell,
    i = n.H,
    a = n.L / 2;
  (hm(e, t, r, `pnCrest`, a, i + 1.75, 0.05, 0.75),
    e.add(
      `pnTrimCream`,
      new u(0.78, 0.06, 4, 24).translate(a, i + 1.75, 0.05),
      t,
      r,
    ),
    e.box(`louver`, t, r, a - 0.45, a + 0.45, i + 3, i + 3.55, 0, 0.05),
    e.box(
      `pnTrimCream`,
      t,
      r,
      a - 0.53,
      a + 0.53,
      i + 2.92,
      i + 3.63,
      -0.01,
      0.03,
    ));
  for (let [r, i] of Qp(n, 0, n.L)) {
    let a = n.grid[0][G(n, (r + i) / 2)];
    tm(e, `concrete`, t, a, r, i, [0, 0.28], [8, 0.1], 0.25);
  }
  let o = n.grid[0][1];
  for (let n of [3.2, 8.8]) {
    for (let r of [2.6, 3.4])
      D(e, `wood`, t, o, [n, 0.2, r], [n, 0.95, 3], 0.06);
    e.box(`wood`, t, o, n - 0.05, n + 0.05, 0.92, 0.98, 2.6, 3.4);
  }
  e.add(
    `pnBuoyYellow`,
    new w(1, 14, 6).scale(4.2, 0.17, 0.26).translate(6, 1.08, 3),
    t,
    o,
  );
}
function Rm(e, t, n) {
  for (let r of [2.2, 7.4, 12.6, 17.8]) {
    let i = n.grid[0][G(n, r)];
    e.box(`wood`, t, i, r - 0.07, r + 0.07, 0, 2.5, 0.02, 0.16);
    for (let n of [1, 1.9])
      D(e, `wood`, t, i, [r, n, 0.1], [r, n + 0.05, 1.3], 0.07);
  }
  [
    [`pnHullWhite`, 4.8, 1.12],
    [`pnHullRed`, 15.2, 1.12],
    [`pnBuoyYellow`, 4.8, 2.02],
    [`pnHullWhite`, 15.2, 2.02],
  ].forEach(([r, i, a]) =>
    e.add(
      r,
      new w(1, 14, 6).scale(4.3, 0.16, 0.26).translate(i, a, 0.75),
      t,
      n.grid[0][G(n, i)],
    ),
  );
}
function zm() {
  let e = 40 * Np,
    t = 0.5;
  return {
    key: `pnBoathouse`,
    name: `Tolmie Rowing Club Boathouse`,
    plain: 9398338,
    desc: `Cedar-shingled rowing club boathouse: three braced boat doors onto a concrete slipway, full-width upper balcony with club-room doors, crest in the steep gable, shells racked down the side.`,
    W: 12,
    D: 24,
    style: {
      wall: `pnShakeCedar`,
      t: 0.22,
      bay: 4,
      floors: [4, 3],
      win: {
        w: 1,
        h: 1.5,
        sill: 0.9,
        type: `grid`,
        lites: [2, 3],
        frame: `pnTrimCream`,
        casing: `pnTrimCream`,
        rec: 0.08,
        curtains: 0.4,
      },
      door: {
        w: 1.1,
        h: 2.2,
        transom: 0.3,
        frame: `pnTrimCream`,
        glazed: !0,
        mat: `pnDoorGreen`,
        rec: 0.12,
      },
      loading: {
        type: `barn`,
        mat: `pnTrimGreen`,
        trim: `pnTrimCream`,
        w: 3.2,
        h: 3,
      },
      base: { mat: `concrete`, h: 0.25, out: 0.03 },
      belt: { mat: `pnTrimCream`, h: 0.22, out: 0.05 },
      corners: `pnTrimCream`,
      roof: {
        ridge: `z`,
        pitch: e,
        over: t,
        mat: `pnShingleDark`,
        fascia: `pnTrimCream`,
        gutter: !0,
      },
    },
    front: {
      kinds: (e) => (e === 0 ? `loading` : `door`),
      signs: [
        {
          mat: `pnSignRowing`,
          rect: [2.2, 9.8, 7.25, 7.72],
          z0: 0.02,
          z1: 0.05,
        },
      ],
      extra: k(
        um({
          y: 4,
          a0: -0.25,
          a1: 12.25,
          d: 1.7,
          rail: `pnRailWhite`,
          trim: `pnTrimCream`,
          under: `console`,
        }),
        Lm,
      ),
    },
    right: {
      kinds: (e, t) => (e === 0 && t % 2 ? `solid` : `window`),
      extra: k(Rm, wm(e, t, `pnTrimCream`, 0.8)),
    },
    left: {
      kinds: (e, t) => (e === 0 && t === 2 ? `door` : `window`),
      extra: wm(e, t, `pnTrimCream`, 0.8),
    },
    back: { kinds: (e, t) => (e === 0 && t === 1 ? `door` : `window`) },
    extra: (e, t, n) => {
      (Cm(e, t, 0, n.D / 2 + 0.1, n.roofTop - 0.3, 3.6, 0.06),
        Sm(
          e,
          t,
          0,
          `pnFlagRed`,
          0.05,
          n.roofTop + 3.2,
          n.D / 2 + 0.1,
          1.3,
          0.5,
        ),
        pm(e, t, -n.W / 2 - 2, n.W / 2 + 2, n.D / 2 + 5.5, n.D / 2 + 12));
    },
  };
}
function Bm(e, t, n) {
  let r = Ip(9);
  for (let i of [0, 1, 3, 4]) {
    let a = n.grid[0][i],
      o = i * n.bw + 0.4,
      s = (i + 1) * n.bw - 0.4;
    (e.box(`pnSteel`, t, a, o, s, 0, 0.92, 0.05, 1),
      tm(e, `pnIce`, t, a, o + 0.05, s - 0.05, [0.1, 1.18], [0.98, 0.96], 0.1));
    for (let n of [0.35, 0.72])
      for (let c = o + 0.25; c < s - 0.2; c += 0.3) {
        let o = 1.18 - (n - 0.1) * 0.25 + 0.02,
          s = r();
        i === 1
          ? e.box(
              `pnSalmon`,
              t,
              a,
              c - 0.1,
              c + 0.1,
              o,
              o + 0.06,
              n - 0.08,
              n + 0.08,
            )
          : i === 3
            ? e.add(
                `pnSalmon`,
                new w(0.13, 8, 4).scale(1, 0.35, 0.8).translate(c, o + 0.02, n),
                t,
                a,
              )
            : e.add(
                s < 0.2 ? `pnSalmon` : `pnFish`,
                new w(1, 6, 4).scale(0.07, 0.05, 0.2).translate(c, o + 0.03, n),
                t,
                a,
              );
      }
    e.box(`pnTrimNavy`, t, a, o, s, 0.92, 0.98, 0.98, 1.04);
  }
  let i = n.grid[0][2],
    a = 8.7;
  (e.box(W, t, i, 8.69, 8.709999999999999, 2.9, 3.7, 2.2, 2.22),
    e.add(
      `pnBuoyWhite`,
      new s(0.2, 0.2, 0.08, 14).rotateX(Math.PI / 2).translate(a, 2.75, 2.21),
      t,
      i,
    ),
    e.add(`pnSteel`, new s(0.28, 0.2, 0.08, 12).translate(a, 2.2, 2.21), t, i));
  for (let n of [-1, 1])
    D(e, W, t, i, [a, 2.55, 2.21], [a + n * 0.26, 2.24, 2.21], 0.012);
}
function Vm(e, t, n) {
  let r = n.roofTop;
  (e.box(`louver`, t, 0, -1, 1, r - 0.6, r + 0.8, -5, 5),
    im(e, t, {
      along: `z`,
      len: 10,
      over: 0.25,
      pts: [
        [-1.5, r + 0.62],
        [0, r + 1.22],
        [1.5, r + 0.62],
      ],
      mat: `pnCorrGalv`,
      fascia: `pnTrimWhite`,
      fill: `pnLapBlueGrey`,
      fillPts: [
        [-1, r + 0.8],
        [0, r + 1.2],
        [1, r + 0.8],
      ],
    }));
}
