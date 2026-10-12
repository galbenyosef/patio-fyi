// assets__lab-buildings-view-DJVr8phc 163 — box
// Lines 51468-51806 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function Hm() {
  return {
    key: `pnFishMarket`,
    name: `Pier 9 Fish Market`,
    plain: 7440282,
    desc: `Blue-grey clapboard fish market: wide gable front with a louvred ridge monitor, open stall hatches over iced counters of fish, crab and salmon, striped canopy on posts, hanging scale.`,
    W: 20,
    D: 14,
    style: {
      wall: `pnLapBlueGrey`,
      t: 0.22,
      bay: 4,
      floors: [5.2],
      win: {
        w: 3,
        h: 2.3,
        sill: 1.05,
        open: !0,
        frame: `pnTrimWhite`,
        rec: 0.08,
      },
      door: {
        w: 2.2,
        h: 2.6,
        transom: 0,
        frame: `pnTrimWhite`,
        open: !0,
        rec: 0.1,
      },
      loading: { type: `rollup`, dock: !1, w: 3, h: 3.4 },
      base: { mat: `concrete`, h: 0.3, out: 0.03 },
      corners: `pnTrimWhite`,
      eaveTrim: `pnTrimWhite`,
      roof: {
        ridge: `z`,
        pitch: 22 * Np,
        over: 0.6,
        mat: `pnCorrGalv`,
        fascia: `pnTrimWhite`,
        gutter: !0,
      },
    },
    front: {
      kinds: (e, t) => (t === 2 ? `door` : `window`),
      signs: [
        { mat: `pnSignFishMkt`, rect: [4, 16, 5.55, 6.55], z0: 0.02, z1: 0.06 },
      ],
      extra: k(
        dm({
          y: 4.35,
          d: 3,
          drop: 0.7,
          mat: `awningRed`,
          stripe: !0,
          valance: 0.3,
          posts: [0.25, 6, 14, 19.75],
          postMat: `pnTrimWhite`,
        }),
        Bm,
      ),
    },
    right: {
      kinds: (e, t) => (t === 0 ? `solid` : `window`),
      signs: [
        { mat: `pnSignFresh`, rect: [0.6, 13, 3.7, 4.9], z0: 0, z1: 0.005 },
      ],
    },
    left: {
      kinds: (e, t) => (t === 1 ? `door` : t === 0 ? `solid` : `window`),
    },
    back: { kinds: (e, t) => (t === 1 || t === 3 ? `loading` : `solid`) },
    extra: Vm,
  };
}
function Um(e, t, n) {
  let r = n.H,
    i = n.L,
    a = n.gableCell,
    o = 0.27,
    s = new C();
  (s.moveTo(0, r),
    s.lineTo(i, r),
    s.lineTo(i, r + 1.9),
    s.lineTo(i - 2.2, r + 1.9),
    s.quadraticCurveTo(i / 2, r + 4.1, 2.2, r + 1.9),
    s.lineTo(0, r + 1.9),
    s.closePath(),
    rm(e, `pnLapOchre`, t, a, s, o, 0.4, 12));
  let c = [
    [-0.05, r + 1.9],
    [2.2, r + 1.9],
  ];
  for (let e = 0; e <= 10; e++) {
    let t = e / 10,
      n =
        (1 - t) * (1 - t) * 2.2 + 2 * t * (1 - t) * (i / 2) + t * t * (i - 2.2),
      a =
        (1 - t) * (1 - t) * (r + 1.9) +
        2 * t * (1 - t) * (r + 4.1) +
        t * t * (r + 1.9);
    c.push([n, a]);
  }
  c.push([i + 0.05, r + 1.9]);
  for (let n = 0; n < c.length - 1; n++)
    O(
      e,
      `pnTrimCream`,
      t,
      a,
      c[n][0],
      c[n][1] + 0.06,
      c[n + 1][0],
      c[n + 1][1] + 0.06,
      0.16,
      0.25,
      0.45,
    );
  for (let n of [3.3, i - 3.3])
    D(e, `wood`, t, a, [n, r + 1.8, o], [n, r + 0.9, -1.8], 0.12);
  for (let i = 0; i < n.nb; i++) {
    let a = n.grid[n.top][i],
      o = i * n.bw,
      s = (i + 1) * n.bw;
    e.box(
      `pnTrimCream`,
      t,
      a,
      o - (i === 0 ? 0.1 : 0),
      s + (i === n.nb - 1 ? 0.1 : 0),
      r - 0.3,
      r + 0.1,
      -0.05,
      0.5,
    );
    for (let n of [o + 0.4, s - 0.4])
      e.box(
        `pnTrimCream`,
        t,
        a,
        n - 0.07,
        n + 0.07,
        r - 0.75,
        r - 0.3,
        0,
        0.36,
      );
  }
  for (let [r, a] of Qp(n, -0.3, i + 0.3)) {
    let i = n.grid[0][G(n, (r + a) / 2)];
    (e.box(`pnDeck`, t, i, r, a, 0.12, 0.22, 0, 2.7),
      e.box(`pnPile`, t, i, r, a, 0.05, 0.22, 2.6, 2.75));
  }
  for (let r of [0.1, i / 2, i - 0.1])
    lm(
      e,
      t,
      n.grid[0][G(n, r)],
      { trim: `pnTrimCream`, col: `turned` },
      r,
      2.45,
      0.22,
      3.62,
    );
  let l = n.grid[0][2];
  mm(e, t, l, `pnSignBeer`, `pnTrimCream`, 6.3, 8.2, 2.62, 3.07, 2.2, !0);
  for (let n of [6.5, 8])
    e.box(W, t, l, n - 0.012, n + 0.012, 3.1, 3.6, 2.17, 2.19);
  (_m(e, t, n.grid[0][0], 2.5, 0.55, 0.22),
    _m(e, t, n.grid[0][2], 6.5, 0.55, 0.22),
    bm(e, t, n.grid[0][1], 3.45, 3),
    bm(e, t, n.grid[0][1], 5.55, 3));
}
function Wm() {
  return {
    key: `pnSaloon`,
    name: `The Drowned Gull`,
    plain: 13081150,
    desc: `Ochre clapboard waterfront saloon: tall false front with a raised arched parapet and painted name, gallery on turned posts over a plank boardwalk, red-framed saloon windows, barrels and lamps.`,
    W: 9,
    D: 16,
    style: {
      wall: `pnLapOchre`,
      t: 0.2,
      bay: 3,
      floors: [3.8, 3.2],
      win: {
        w: 1,
        h: 1.8,
        sill: 0.8,
        type: `sash`,
        lites: [2, 2],
        frame: `pnTrimCream`,
        casing: `pnTrimCream`,
        rec: 0.08,
        curtains: 0.6,
      },
      store: { frame: `pnTrimRed`, fascia: `pnTrimRed` },
      door: {
        w: 1.3,
        h: 2.3,
        transom: 0.5,
        frame: `pnTrimCream`,
        glazed: !0,
        mat: `pnDoorRed`,
        rec: 0.15,
      },
      base: { mat: `concrete`, h: 0.25, out: 0.02 },
      corners: `pnTrimCream`,
      roof: {
        ridge: `z`,
        pitch: 32 * Np,
        over: 0.25,
        mat: `pnShingleDark`,
        fascia: `pnTrimCream`,
      },
    },
    front: {
      kinds: (e, t) => (t === 1 ? `door` : e === 0 ? `store` : `window`),
      signs: [
        {
          mat: `pnSignGull`,
          rect: [0.8, 8.2, 7.35, 8.65],
          z0: 0.405,
          z1: 0.41,
        },
        { mat: `pnSignSaloon`, rect: [3, 6, 8.95, 9.65], z0: 0.405, z1: 0.41 },
      ],
      extra: k(
        um({
          y: 3.8,
          a0: -0.2,
          a1: 9.2,
          d: 2.6,
          rail: `pnRailWhite`,
          trim: `pnTrimCream`,
          under: `none`,
        }),
        Um,
      ),
    },
    back: { kinds: (e, t) => (e === 0 && t === 1 ? `door` : `window`) },
    right: { kinds: (e, t) => (t === 2 && e === 0 ? `door` : `window`) },
    left: { kinds: (e, t) => (e === 0 && t % 2 ? `solid` : `window`) },
    extra: (e, t, n) =>
      A(e, t, `pnBrickRed`, -2.5, -4, n.H - 0.5, n.roofTop + 0.4, 0.8, 0.6),
  };
}
function Gm(e, t, n) {
  let r = om(e, t, n, `pnShingleDark`, 32 * Np, 0.5, `pnTrimWhite`);
  (K(e, `pnLapWhite`, t, 0, 0, 0, r - 1.2, r + 0.1, 1, 1, 8),
    K(e, `pnTrimWhite`, t, 0, 0, 0, r + 0.1, r + 0.24, 1.55, 1.55, 16));
  for (let n = 0; n < 16; n++) {
    let i = (n / 16) * Math.PI * 2;
    K(
      e,
      `pnTrimWhite`,
      t,
      0,
      Math.cos(i) * 1.48,
      Math.sin(i) * 1.48,
      r + 0.24,
      r + 1.1,
      0.025,
      0.025,
      4,
    );
  }
  (e.add(
    `pnTrimWhite`,
    new u(1.48, 0.035, 4, 24).rotateX(Math.PI / 2).translate(0, r + 1.1, 0),
    t,
    0,
  ),
    K(e, `glassGrey`, t, 0, 0, 0, r + 0.24, r + 1.6, 0.88, 0.88, 8));
  for (let n = 0; n < 8; n++) {
    let i = (n / 8) * Math.PI * 2 + Math.PI / 8;
    K(
      e,
      `pnTrimNavy`,
      t,
      0,
      Math.cos(i) * 0.88,
      Math.sin(i) * 0.88,
      r + 0.24,
      r + 1.6,
      0.05,
      0.05,
      4,
    );
  }
  (K(e, `pnTrimWhite`, t, 0, 0, 0, r + 1.6, r + 1.78, 1.12, 1.12, 8),
    e.add(`pnCopper`, new i(1.15, 1.1, 8).translate(0, r + 2.33, 0), t, 0),
    K(e, W, t, 0, 0, 0, r + 2.8, r + 3.8, 0.03, 0.02, 6),
    e.box(W, t, 0, -0.5, 0.5, r + 3.5, r + 3.55, -0.015, 0.015),
    e.add(
      W,
      Pp(
        new i(0.1, 0.25, 3).rotateZ(-Math.PI / 2).translate(0.6, r + 3.525, 0),
      ),
      t,
      0,
    ),
    A(e, t, `pnBrickRed`, 2.2, -1.8, n.H - 0.3, r - 0.4, 0.8, 0.6));
  let a = n.W / 2 + 2,
    o = n.D / 2 - 1.5;
  (e.box(`concrete`, t, 0, a - 0.4, a + 0.4, 0, 0.4, o - 0.4, o + 0.4),
    Cm(e, t, a, o, 0.4, 12.5, 0.13),
    e.box(
      `pnTrimWhite`,
      t,
      0,
      a - 1.9,
      a + 1.9,
      9.8,
      9.92,
      o - 0.05,
      o + 0.05,
    ));
  for (let n of [-1, 1]) {
    let r = a + n * 1.7;
    (e.box(`pnFlags`, t, 0, r - 0.26, r + 0.26, 7.2, 9.75, o - 0.01, o + 0.01, {
      planar: (e, t) => [(e - r + 0.26) / 0.52, (t - 7.2) / 2.55],
    }),
      e.box(
        `pnRope`,
        t,
        0,
        r - 0.008,
        r + 0.008,
        9.75,
        9.8,
        o - 0.008,
        o + 0.008,
      ),
      D(e, `pnRope`, t, 0, [r, 7.2, o], [a + n * 0.12, 1.4, o], 0.012));
  }
  for (let n of [-2.6, 2.6])
    D(e, `pnRope`, t, 0, [a, 10.5, o], [a + 0.6, 0.4, o + n], 0.02);
}
