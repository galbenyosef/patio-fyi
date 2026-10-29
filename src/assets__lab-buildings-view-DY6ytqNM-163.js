// assets__lab-buildings-view-DY6ytqNM 163 — box
// Lines 51468-51806 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function Vm() {
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
        pitch: 22 * Mp,
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
      extra: A(
        um({
          y: 4.35,
          d: 3,
          drop: 0.7,
          mat: `awningRed`,
          stripe: !0,
          valance: 0.3,
          posts: [0.25, 6, 14, 19.75],
          postMat: `pnTrimWhite`,
        }),
        zm,
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
    extra: Bm,
  };
}
function Hm(e, t, n) {
  let r = n.H,
    i = n.L,
    a = n.gableCell,
    o = 0.27,
    s = new T();
  (s.moveTo(0, r),
    s.lineTo(i, r),
    s.lineTo(i, r + 1.9),
    s.lineTo(i - 2.2, r + 1.9),
    s.quadraticCurveTo(i / 2, r + 4.1, 2.2, r + 1.9),
    s.lineTo(0, r + 1.9),
    s.closePath(),
    nm(e, `pnLapOchre`, t, a, s, o, 0.4, 12));
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
    Ve(
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
    k(e, `wood`, t, a, [n, r + 1.8, o], [n, r + 0.9, -1.8], 0.12);
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
  for (let [r, a] of Zp(n, -0.3, i + 0.3)) {
    let i = n.grid[0][K(n, (r + a) / 2)];
    (e.box(`pnDeck`, t, i, r, a, 0.12, 0.22, 0, 2.7),
      e.box(`pnPile`, t, i, r, a, 0.05, 0.22, 2.6, 2.75));
  }
  for (let r of [0.1, i / 2, i - 0.1])
    cm(
      e,
      t,
      n.grid[0][K(n, r)],
      { trim: `pnTrimCream`, col: `turned` },
      r,
      2.45,
      0.22,
      3.62,
    );
  let l = n.grid[0][2];
  pm(e, t, l, `pnSignBeer`, `pnTrimCream`, 6.3, 8.2, 2.62, 3.07, 2.2, !0);
  for (let n of [6.5, 8])
    e.box(G, t, l, n - 0.012, n + 0.012, 3.1, 3.6, 2.17, 2.19);
  (gm(e, t, n.grid[0][0], 2.5, 0.55, 0.22),
    gm(e, t, n.grid[0][2], 6.5, 0.55, 0.22),
    ym(e, t, n.grid[0][1], 3.45, 3),
    ym(e, t, n.grid[0][1], 5.55, 3));
}
function Um() {
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
        pitch: 32 * Mp,
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
      extra: A(
        lm({
          y: 3.8,
          a0: -0.2,
          a1: 9.2,
          d: 2.6,
          rail: `pnRailWhite`,
          trim: `pnTrimCream`,
          under: `none`,
        }),
        Hm,
      ),
    },
    back: { kinds: (e, t) => (e === 0 && t === 1 ? `door` : `window`) },
    right: { kinds: (e, t) => (t === 2 && e === 0 ? `door` : `window`) },
    left: { kinds: (e, t) => (e === 0 && t % 2 ? `solid` : `window`) },
    extra: (e, t, n) =>
      j(e, t, `pnBrickRed`, -2.5, -4, n.H - 0.5, n.roofTop + 0.4, 0.8, 0.6),
  };
}
function Wm(e, t, n) {
  let r = am(e, t, n, `pnShingleDark`, 32 * Mp, 0.5, `pnTrimWhite`);
  (q(e, `pnLapWhite`, t, 0, 0, 0, r - 1.2, r + 0.1, 1, 1, 8),
    q(e, `pnTrimWhite`, t, 0, 0, 0, r + 0.1, r + 0.24, 1.55, 1.55, 16));
  for (let n = 0; n < 16; n++) {
    let i = (n / 16) * Math.PI * 2;
    q(
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
    new o(1.48, 0.035, 4, 24).rotateX(Math.PI / 2).translate(0, r + 1.1, 0),
    t,
    0,
  ),
    q(e, `glassGrey`, t, 0, 0, 0, r + 0.24, r + 1.6, 0.88, 0.88, 8));
  for (let n = 0; n < 8; n++) {
    let i = (n / 8) * Math.PI * 2 + Math.PI / 8;
    q(
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
  (q(e, `pnTrimWhite`, t, 0, 0, 0, r + 1.6, r + 1.78, 1.12, 1.12, 8),
    e.add(`pnCopper`, new d(1.15, 1.1, 8).translate(0, r + 2.33, 0), t, 0),
    q(e, G, t, 0, 0, 0, r + 2.8, r + 3.8, 0.03, 0.02, 6),
    e.box(G, t, 0, -0.5, 0.5, r + 3.5, r + 3.55, -0.015, 0.015),
    e.add(
      G,
      Np(
        new d(0.1, 0.25, 3).rotateZ(-Math.PI / 2).translate(0.6, r + 3.525, 0),
      ),
      t,
      0,
    ),
    j(e, t, `pnBrickRed`, 2.2, -1.8, n.H - 0.3, r - 0.4, 0.8, 0.6));
  let i = n.W / 2 + 2,
    a = n.D / 2 - 1.5;
  (e.box(`concrete`, t, 0, i - 0.4, i + 0.4, 0, 0.4, a - 0.4, a + 0.4),
    Sm(e, t, i, a, 0.4, 12.5, 0.13),
    e.box(
      `pnTrimWhite`,
      t,
      0,
      i - 1.9,
      i + 1.9,
      9.8,
      9.92,
      a - 0.05,
      a + 0.05,
    ));
  for (let n of [-1, 1]) {
    let r = i + n * 1.7;
    (e.box(`pnFlags`, t, 0, r - 0.26, r + 0.26, 7.2, 9.75, a - 0.01, a + 0.01, {
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
        a - 0.008,
        a + 0.008,
      ),
      k(e, `pnRope`, t, 0, [r, 7.2, a], [i + n * 0.12, 1.4, a], 0.012));
  }
  for (let n of [-2.6, 2.6])
    k(e, `pnRope`, t, 0, [i, 10.5, a], [i + 0.6, 0.4, a + n], 0.02);
}
