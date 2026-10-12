// assets__lab-buildings-view-DJVr8phc 171 — box
// Lines 53954-54274 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function wh(e, t, n) {
  cm({
    noRoof: !0,
    a0: -0.2,
    a1: n.L,
    d: 2.2,
    y: 0.02,
    trim: `pnTrimWhite`,
    deck: `pnDeck`,
    col: `post`,
    colW: 0.06,
    rail: !0,
    gap: 2.2,
    railExtra: [n.L + 2],
  })(e, t, n);
  let r = n.grid[0][0];
  for (let n = 0; n < 5; n++)
    D(
      e,
      n % 2 ? `pnTrimNavy` : `pnBuoyYellow`,
      t,
      r,
      [0.1 + n * 0.12, 0.05, 0.55],
      [0.08 + n * 0.12, 2.5, 0.1],
      0.025,
    );
  let i = n.grid[0][1];
  (e.box(`pnTrimWhite`, t, i, 4.2, 5.1, 0.03, 0.5, 1, 1.5),
    e.box(`pnTrimNavy`, t, i, 4.18, 5.12, 0.5, 0.56, 0.98, 1.52),
    gm(e, t, i, 3.95, 1.5, 0.02));
}
function Th(e, t, n) {
  let r = 2.2,
    i = n.L - 1.1;
  cm({
    noRoof: !0,
    a0: -n.t - r,
    a1: n.L,
    d: r,
    y: 0.02,
    trim: `pnTrimWhite`,
    deck: `pnDeck`,
    col: `post`,
    colW: 0.06,
    rail: !0,
    gap: 2.2,
    steps: [i],
    stepW: 1,
  })(e, t, n);
  let a = n.grid[0][G(n, i)],
    o = 2.4 / 12,
    s = 0.26;
  for (let n of [-0.5, 0.5])
    (D(e, `pnDeck`, t, a, [i + n, -0.05, r], [i + n, -2.5, 5.32], 0.08),
      D(
        e,
        `pnTrimWhite`,
        t,
        a,
        [i + n, 0.9, r],
        [i + n, -2.4 + 0.8, 5.32],
        0.05,
      ),
      e.box(
        `pnTrimWhite`,
        t,
        a,
        i + n - 0.04,
        i + n + 0.04,
        -2.4,
        -2.4 + 0.85,
        5.32 - 0.05,
        5.32 + 0.03,
      ));
  for (let n = 1; n <= 12; n++)
    e.box(
      `pnDeck`,
      t,
      a,
      i - 0.46,
      i + 0.46,
      -n * o - 0.04,
      -n * o,
      r + (n - 1) * s,
      r + n * s,
    );
  (vm(e, t, n.grid[0][0], -1.2, 0.02, 1, 0.8, 0.4),
    vm(e, t, n.grid[0][0], -1.2, 0.42, 1, 0.8, 0.4));
}
function Eh(e, t, n) {
  let r = n.H,
    i = n.D / 2,
    a = 1 / n.D;
  (im(e, t, {
    along: `x`,
    len: n.W,
    over: 0.3,
    pts: [
      [-i - 0.4, r - 0.4 * a],
      [i + 0.35, r + 1 + 0.35 * a],
    ],
    mat: `pnCorrGalv`,
    rake: `pnTrimWhite`,
    fascia: `pnTrimWhite`,
    fill: `pnCorrTeal`,
    fillPts: [
      [-i, r],
      [i, r],
      [i, r + 1],
    ],
  }),
    e.box(
      `pnSignBait`,
      t,
      0,
      -3.1,
      3.1,
      r + 0.08,
      r + 0.92,
      i + 0.01,
      i + 0.025,
      { planar: (e, t) => [(e + 3.1) / 6.2, (t - r - 0.08) / 0.84] },
    ));
  let o = [-3.3, 0, 3.3, 5.6],
    s = [-3, 0, 3, 5.4];
  for (let n of o)
    for (let r of s)
      (n !== 0 || r !== 0) &&
        (K(e, `pnPile`, t, 0, n, r, -0.2, 2.3, 0.15, 0.14, 8),
        e.add(
          `pnShell`,
          new u(0.17, 0.035, 4, 10).rotateX(Math.PI / 2).translate(n, 0.45, r),
          t,
          0,
        ));
  for (let n of [-3, 3, 5.4])
    D(e, `pnPile`, t, 0, [-3.3, 0.35, n], [5.6, 2.15, n], 0.1);
  for (let n of [-3.3, 5.6])
    D(e, `pnPile`, t, 0, [n, 0.35, -3], [n, 2.15, 5.4], 0.1);
  pm(e, t, -n.W / 2 - 1.6, n.W / 2 + 3.8, -n.D / 2 - 1.2, n.D / 2 + 3.6);
}
function Dh() {
  let e = { kinds: () => `solid`, extra: null };
  return {
    key: `pnBaitShop`,
    name: `Crabpot Bait & Tackle`,
    plain: 4160116,
    desc: `Teal corrugated bait shack up on braced timber stilts over the water: shed roof with a yellow sign rising to the street, wraparound plank deck with railings, stair down to the float, rods, cooler, crab pots.`,
    W: 7,
    D: 6.5,
    style: {
      wall: `pnCorrTeal`,
      t: 0.15,
      bay: 3.5,
      floors: [2.8],
      win: {
        w: 1.2,
        h: 1,
        sill: 1,
        type: `grid`,
        lites: [2, 1],
        frame: `pnTrimWhite`,
        rec: 0.06,
        curtains: 0.2,
      },
      store: { frame: `pnTrimWhite`, fascia: `pnTrimWhite` },
      door: {
        w: 0.95,
        h: 2.1,
        transom: 0,
        frame: `pnTrimWhite`,
        glazed: !0,
        mat: `pnDoorRed`,
        rec: 0.08,
      },
      corners: `pnTrimWhite`,
      roof: sm,
    },
    tiers: [
      {
        W: 2,
        D: 2,
        floors: [2.4],
        style: { wall: `pnPile`, corners: null },
        front: e,
        back: e,
        left: e,
        right: e,
      },
      { floors: [2.8], soffit: !0 },
    ],
    front: { kinds: (e, t) => (t === 0 ? `store` : `door`), extra: wh },
    right: { kinds: (e, t) => (t === 0 ? `window` : `solid`), extra: Th },
    left: { kinds: () => `window` },
    back: { kinds: () => `solid` },
    extra: Eh,
  };
}
function Oh(e, t, n) {
  for (let r = 1.5; r < n.L - 1; r += 6) {
    let i = n.grid[0][G(n, r)];
    (e.box(`timber`, t, i, r - 0.07, r + 0.07, 0.1, 1.1, 2.15, 2.29),
      e.box(`timber`, t, i, r - 0.07, r + 0.07, 1.02, 1.1, 1.85, 2.6));
  }
  for (let [r, i] of Qp(n, 1.5, n.L - 4)) {
    let a = n.grid[0][G(n, (r + i) / 2)];
    for (let n of [1.95, 2.22, 2.5])
      $p(e, `pnRope`, t, a, r, i, 1.14, n, 0.03, 5);
  }
  let r = n.grid[0][n.nb - 1];
  for (let i of [n.L - 3.3, n.L - 2.2])
    $p(e, `wood`, t, r, i - 0.06, i + 0.06, 1, 3.2, 0.95, 14);
  ($p(e, `pnRope`, t, r, n.L - 3.24, n.L - 2.26, 1, 3.2, 0.65, 14),
    e.box(`wood`, t, r, n.L - 3.5, n.L - 2, 0.1, 0.2, 2.6, 3.8));
  let i = n.grid[0][0];
  (e.box(`pnBrickSoot`, t, i, 1.6, 3, 0.1, 0.8, 2.8, 3.8),
    e.add(
      W,
      new w(0.55, 12, 6, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2).translate(
        2.3,
        1.2,
        3.3,
      ),
      t,
      i,
    ),
    e.add(
      W,
      new u(0.55, 0.04, 4, 16).rotateX(Math.PI / 2).translate(2.3, 1.2, 3.3),
      t,
      i,
    ),
    K(e, W, t, i, 2.85, 3.65, 0.8, 2.8, 0.09, 0.09, 8));
}
function kh() {
  return {
    key: `pnRopewalk`,
    name: `Chinook Ropewalk`,
    plain: 5913136,
    desc: `Sixty-four-metre brick ropewalk: one long low storey of small high windows under a rust tin roof with a continuous ridge ventilator, end barn door, strands laid out on stake heads, cable reel and tar kettle.`,
    W: 64,
    D: 8,
    style: {
      wall: `pnBrickSoot`,
      t: 0.3,
      bay: 4,
      floors: [3.4],
      win: {
        w: 1.8,
        h: 1.1,
        sill: 1.6,
        type: `grid`,
        lites: [4, 2],
        frame: `pnTrimWhite`,
        header: `pnStone`,
        sillMat: `pnStone`,
        rec: 0.15,
        curtains: 0,
      },
      door: {
        w: 1.4,
        h: 2.4,
        transom: 0.3,
        frame: `pnTrimWhite`,
        mat: `woodDoor`,
        rec: 0.2,
      },
      loading: {
        type: `barn`,
        mat: `pnTrimRed`,
        trim: `pnTrimWhite`,
        w: 2.6,
        h: 2.8,
      },
      base: { mat: `pnStone`, h: 0.4, out: 0.04 },
      roof: {
        ridge: `x`,
        pitch: 24 * Np,
        over: 0.45,
        mat: `pnCorrRust`,
        fascia: `pnTrimWhite`,
      },
    },
    front: {
      kinds: (e, t) => (t === 3 || t === 12 ? `door` : `window`),
      extra: Oh,
    },
    back: { kinds: (e, t) => (t === 8 ? `door` : `window`) },
    right: { bay: 7.4, kinds: () => `loading` },
    left: {
      bay: 7.4,
      kinds: () => `solid`,
      signs: [{ mat: `pnSignRope`, rect: [0.4, 7, 0.9, 3], z0: 0, z1: 0.005 }],
    },
    extra: (e, t, n) => {
      let r = n.roofTop;
      (e.box(`louver`, t, 0, -29, 29, r - 0.3, r + 0.45, -0.5, 0.5),
        im(e, t, {
          along: `x`,
          len: 58,
          over: 0.2,
          th: 0.08,
          pts: [
            [-1, r + 0.36],
            [0, r + 0.72],
            [1, r + 0.36],
          ],
          mat: `pnCorrRust`,
          fascia: `pnTrimWhite`,
          fill: `pnTrimWhite`,
          fillPts: [
            [-0.5, r + 0.45],
            [0, r + 0.7],
            [0.5, r + 0.45],
          ],
        }));
      for (let i of [-20, 14])
        A(e, t, `pnBrickSoot`, i, -1.6, n.H - 0.3, r + 0.6, 0.9, 0.6);
    },
  };
}
