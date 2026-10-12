// assets__lab-buildings-view-DJVr8phc 172 — box
// Lines 54275-54610 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function Ah(e, t, n) {
  fm({
    a0: -1.2,
    a1: n.L + 1.2,
    d: 4.2,
    y: 0.45,
    step: 2,
    cleats: [2, 10],
    ladders: [6],
  })(e, t, n);
  let r = n.gableCell,
    i = n.L / 2,
    a = n.H + 3.3;
  (e.box(`woodDark`, t, r, i - 0.15, i + 0.15, a - 0.15, a + 0.15, -0.4, 1.8),
    im(e, t, {
      along: `z`,
      cx: i,
      cz: 0.75,
      len: 1.5,
      over: 0.15,
      th: 0.08,
      pts: [
        [-0.5, a + 0.2],
        [0, a + 0.6],
        [0.5, a + 0.2],
      ],
      mat: `pnShingleDark`,
      rake: `pnTrimWhite`,
      cell: r,
    }),
    e.add(
      W,
      new s(0.2, 0.2, 0.1, 14)
        .rotateZ(Math.PI / 2)
        .translate(i, a - 0.36, 1.55),
      t,
      r,
    ),
    e.box(
      `pnRope`,
      t,
      n.grid[1][1],
      i - 0.012,
      i + 0.012,
      n.ys[1] + 2.1,
      a - 0.4,
      1.54,
      1.56,
    ),
    e.add(
      W,
      new u(0.1, 0.025, 4, 8, Math.PI * 1.4).translate(i, n.ys[1] + 2, 1.55),
      t,
      n.grid[1][1],
    ));
  let o = n.grid[0][2];
  for (let [n, r, i] of [
    [9.2, 0.45, 1.6],
    [10.1, 0.45, 1.6],
    [9.65, 0.87, 1.6],
    [9.6, 0.45, 2.5],
  ])
    vm(e, t, o, n, r, i, 0.85, 0.42);
  let c = n.grid[0][0];
  for (let [n, r] of [
    [1.5, 2],
    [1.9, 2.3],
    [1.3, 2.45],
  ])
    e.add(`pnGlassFloat`, new w(0.2, 10, 8).translate(n, 0.65, r), t, c);
  e.box(`pnNet`, t, c, 1, 2.3, 0.45, 0.9, 1.7, 2.8);
}
function jh(e, t, n) {
  let r = 1.3,
    i = n.L - 1.1;
  for (let a of [1.7, 3.1]) {
    for (let o = r; o <= i + 0.01; o += (i - r) / 4)
      e.box(
        `timber`,
        t,
        n.grid[0][G(n, o)],
        o - 0.07,
        o + 0.07,
        0,
        3.35,
        a - 0.07,
        a + 0.07,
      );
    for (let [o, c] of Qp(n, r, i)) {
      let r = n.grid[0][G(n, (o + c) / 2)];
      (e.box(`timber`, t, r, o, c, 3.2, 3.32, a - 0.05, a + 0.05),
        e.box(`pnNet`, t, r, o, c, 0.45, 3.2, a - 0.005, a + 0.005, {
          planar: (e, t) => [e / 0.8, t / 0.8],
        }),
        e.box(`pnRubber`, t, r, o, c, 0.42, 0.47, a - 0.02, a + 0.02));
      for (let n = Math.ceil(o / 0.45) * 0.45; n < c; n += 0.45)
        e.add(
          `pnCork`,
          new s(0.05, 0.05, 0.14, 6).rotateZ(Math.PI / 2).translate(n, 3.12, a),
          t,
          r,
        );
    }
  }
}
function Mh() {
  return {
    key: `pnNetLoft`,
    name: `Norland Net Loft`,
    plain: 9186338,
    desc: `Norwegian-red board-and-batten net loft on a timber wharf: steep dark roof, stacked braced loft doors under a hooded hoist beam, nets hung to dry on pole racks with cork floats, glass floats and crab pots.`,
    W: 12,
    D: 18,
    style: {
      wall: `pnBattenRed`,
      t: 0.2,
      bay: 4,
      floors: [3.4, 3],
      win: {
        w: 1,
        h: 1.2,
        sill: 1,
        type: `grid`,
        lites: [2, 2],
        frame: `pnTrimWhite`,
        casing: `pnTrimWhite`,
        rec: 0.08,
        curtains: 0.2,
      },
      door: {
        w: 1,
        h: 2.2,
        transom: 0,
        frame: `pnTrimWhite`,
        mat: `woodDoor`,
        rec: 0.1,
      },
      loading: {
        type: `barn`,
        mat: `pnBattenRed`,
        trim: `pnTrimWhite`,
        w: 2.6,
        h: 2.9,
      },
      base: { mat: `concrete`, h: 0.3, out: 0.02 },
      corners: `pnTrimWhite`,
      roof: {
        ridge: `z`,
        pitch: 45 * Np,
        over: 0.45,
        mat: `pnShingleDark`,
        fascia: `pnTrimWhite`,
      },
    },
    front: {
      kinds: (e, t) =>
        t === 1 ? `loading` : e === 0 && t === 0 ? `door` : `window`,
      signs: [
        {
          mat: `pnSignNetLoft`,
          rect: [2.8, 9.2, 6.9, 7.6],
          z0: 0.02,
          z1: 0.05,
        },
      ],
      extra: Ah,
    },
    left: {
      bay: 3.5,
      kinds: (e, t) => (e === 0 && t === 2 ? `door` : `window`),
      extra: jh,
    },
    right: {
      bay: 3.5,
      kinds: (e, t) => (e === 0 && t % 2 ? `loading` : `window`),
    },
    back: { kinds: (e, t) => (t === 1 ? `loading` : `window`) },
    extra: (e, t, n) =>
      pm(e, t, -n.W / 2 - 2.2, n.W / 2 + 2.2, n.D / 2 + 3.6, n.D / 2 + 11),
  };
}
function Nh(e, t, n) {
  fm({
    a0: -1,
    a1: n.L + 1,
    d: 6,
    y: 0.45,
    step: 2.6,
    cleats: [4, 16, 28, 38],
    bollards: [10, 22, 34],
  })(e, t, n);
  let r = n.grid[0][G(n, 33.8)],
    i = [0.1, 4.7],
    a = [5.4, 1.1];
  (tm(
    e,
    `pnCorrGalv`,
    t,
    r,
    33.15,
    34.449999999999996,
    [i[0], i[1] + 1.3],
    [a[0], a[1] + 1.3],
    1.3,
  ),
    tm(
      e,
      `pnCorrRed`,
      t,
      r,
      33,
      34.599999999999994,
      [i[0], i[1] + 1.4],
      [a[0] + 0.1, a[1] + 1.4],
      0.08,
    ));
  for (let n of [2.4, 4.2]) {
    let o = i[1] + ((a[1] - i[1]) * (n - i[0])) / (a[0] - i[0]);
    for (let i of [33.199999999999996, 34.4])
      e.box(W, t, r, i - 0.06, i + 0.06, 0.45, o, n - 0.06, n + 0.06);
    e.box(W, t, r, 33.14, 34.459999999999994, o - 0.12, o, n - 0.07, n + 0.07);
  }
  e.box(`pnCorrGalv`, t, r, 32.9, 34.699999999999996, 0.45, 1.8, 5, 5.9);
  let o = n.grid[0][3];
  for (let n = 0; n < 6; n++) {
    let r = 12.3 + (n % 3) * 0.75,
      i = 0.45 + Math.floor(n / 3) * 0.4;
    e.box(
      n % 2 ? `pnTrimNavy` : `pnHullRed`,
      t,
      o,
      r - 0.35,
      r + 0.35,
      i,
      i + 0.38,
      2,
      2.55,
    );
  }
}
function Ph(e, t, n) {
  let i = 18 * Np,
    a = Math.tan(i),
    o = n.H,
    s = n.D / 2,
    c = 0.14 / Math.cos(i) + 0.02,
    l = s - 0.8,
    u = s - 6.8,
    d = o + (s - l) * a + c,
    f = o + (s - u) * a + c,
    p = Math.hypot(l - u, f - d);
  e.add(
    `pnSignCannery`,
    new r(32, 0.02, p).rotateX(i).translate(0, (d + f) / 2, (l + u) / 2),
    t,
    0,
    { planar: (e, t) => [(e + 16) / 32, (t - d) / (f - d)] },
  );
  for (let n of [-12, -4, 14]) {
    let r = -3.2,
      i = o + (s - 3.2) * a - 0.5,
      c = 17.5;
    (K(e, W, t, 0, n, r, i, c, 0.45, 0.4, 12),
      K(e, W, t, 0, n, r, 17.2, c, 0.52, 0.52, 12));
    for (let [i, c] of [
      [-3, -1.5],
      [3, -1.5],
      [0, 2.5],
    ])
      D(
        e,
        W,
        t,
        0,
        [n, 14.5, r],
        [n + i, o + (s - Math.abs(r + c)) * a, r + c],
        0.03,
      );
  }
  pm(e, t, -n.W / 2 - 2, n.W / 2 + 2, n.D / 2 + 5.2, n.D / 2 + 13);
}
function Fh() {
  return {
    key: `pnCannery`,
    name: `Squall Bay Packing Co.`,
    plain: 14605266,
    desc: `Forty-metre white clapboard salmon cannery on a piled wharf: red tin roof painted with the company name, three retort boiler stacks on guy wires, roll-up doors, conveyor gallery from a receiving hopper, totes, cleats.`,
    W: 40,
    D: 22,
    style: {
      wall: `pnLapWhite`,
      t: 0.25,
      bay: 4,
      floors: [5.6],
      win: {
        w: 2,
        h: 1.6,
        sill: 1.8,
        type: `grid`,
        lites: [4, 3],
        frame: `pnTrimRed`,
        rec: 0.08,
        curtains: 0,
      },
      door: {
        w: 1.2,
        h: 2.3,
        transom: 0.4,
        frame: `pnTrimRed`,
        mat: `pnDoorRed`,
        rec: 0.12,
      },
      loading: { type: `rollup`, dock: !1, w: 3.2, h: 3.6 },
      base: { mat: `concrete`, h: 0.4, out: 0.03 },
      corners: `pnTrimRed`,
      eaveTrim: `pnTrimRed`,
      roof: {
        ridge: `x`,
        pitch: 18 * Np,
        over: 0.6,
        mat: `pnCorrRed`,
        fascia: `pnTrimWhite`,
        gutter: !0,
      },
    },
    front: {
      kinds: (e, t) =>
        t === 1 || t === 4 || t === 7 ? `loading` : t === 9 ? `door` : `window`,
      extra: Nh,
    },
    back: { kinds: (e, t) => (t === 2 || t === 6 ? `loading` : `window`) },
    right: { bay: 4.3, kinds: (e, t) => (t === 2 ? `door` : `window`) },
    left: { bay: 4.3, kinds: (e, t) => (t === 2 ? `loading` : `window`) },
    extra: Ph,
  };
}
