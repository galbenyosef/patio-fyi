// assets__lab-buildings-view-DJVr8phc 221 — box
// Lines 69527-69817 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function Tx(e, t, n) {
  let r = n.L,
    i = n.H,
    a = (e) => n.grid[n.top][Q(n, e)],
    o = new C();
  (o.moveTo(0, i),
    o.lineTo(r, i),
    o.lineTo(r, i + 1.1),
    o.lineTo(r - 0.8, i + 1.1),
    o.lineTo(r - 0.8, i + 1.7),
    o.lineTo(r - 2, i + 1.7),
    o.lineTo(r - 2, i + 2.1),
    o.lineTo(2, i + 2.1),
    o.lineTo(2, i + 1.7),
    o.lineTo(0.8, i + 1.7),
    o.lineTo(0.8, i + 1.1),
    o.lineTo(0, i + 1.1),
    o.closePath(),
    Zy(e, `trLapBlue`, t, n.gableCell || a(r / 2), o, -n.t - 0.02, 0.32));
  for (let [o, s, c] of [
    [-0.05, 0.85, i + 1.1],
    [r - 0.85, r + 0.05, i + 1.1],
    [0.75, 2.05, i + 1.7],
    [r - 2.05, r - 0.75, i + 1.7],
    [1.95, r - 1.95, i + 2.1],
  ])
    e.box(
      `trimWhite`,
      t,
      n.gableCell || a(r / 2),
      o,
      s,
      c,
      c + 0.1,
      -n.t - 0.04,
      0.38,
    );
  e.box(
    `trSignRum`,
    t,
    n.gableCell || a(r / 2),
    r / 2 - 2.55,
    r / 2 + 2.55,
    i + 0.3,
    i + 1.2,
    0.32,
    0.35,
    { planar: (e, t) => [(e - r / 2 + 2.55) / 5.1, (t - i - 0.3) / 0.9] },
  );
}
function Ex(e, t, n) {
  ob({
    d: 1.9,
    y: 0.25,
    top: 2.75,
    beam: 0.18,
    rise: 0.3,
    roof: `trTinRust`,
    trim: `trimWhite`,
    deck: `concrete`,
    col: `post`,
    colW: 0.07,
    gap: 3.4,
    noSkirt: !0,
  })(e, t, n);
  let r = n.grid[0][0],
    i = n.grid[0][n.nb - 1];
  e.box(`woodDark`, t, r, 0.3, 2.4, 0.25, 0.7, 0.35, 0.7);
  for (let n of [0.45, 2.25])
    e.box(`woodDark`, t, r, n - 0.05, n + 0.05, 0.25, 0.65, 0.4, 0.65);
  let a = n.L - 1.3,
    o = 2.9;
  (e.box(
    `trTeak`,
    t,
    i,
    a - 0.45,
    a + 0.45,
    0.72,
    0.78,
    2.4499999999999997,
    3.35,
  ),
    $(e, `woodDark`, t, i, a, 0, 0.72, o, 0.06, 6));
  for (let [n, r] of [
    [-0.7, 0],
    [0.7, 0],
    [0, -0.7],
    [0, 0.7],
  ])
    e.box(
      n ? `trPaintRed` : `trPaintYellow`,
      t,
      i,
      a + n - 0.18,
      a + n + 0.18,
      0.42,
      0.46,
      o + r - 0.18,
      o + r + 0.18,
    );
  for (let n = 0; n < 6; n++)
    e.box(
      `trPaintWhite`,
      t,
      i,
      a - 0.3 + n * 0.1,
      a - 0.25 + n * 0.1,
      0.78,
      0.79,
      2.85 + (n % 2) * 0.1,
      2.9499999999999997 + (n % 2) * 0.1,
    );
  for (let n = 0; n < 3; n++)
    rb(e, t, r, 0.5 + n * 0.5, 0.25, 1.45, 0.42, `trPaintRed`);
  for (let n = 0; n < 4; n++) {
    let i = 1.6 + (n % 2) * 0.45,
      a = 0.25 + Math.floor(n / 2) * 0.3;
    e.box(`trPaintGreen`, t, r, i - 0.2, i + 0.2, a, a + 0.28, 1, 1.3);
    for (let n = 0; n < 6; n++)
      $(
        e,
        `glassBronze`,
        t,
        r,
        i - 0.13 + (n % 3) * 0.13,
        a + 0.28,
        a + 0.42,
        1.08 + Math.floor(n / 3) * 0.14,
        0.03,
        5,
      );
  }
  let s = n.grid[0][n.nb - 1];
  (e.box(`trSignRumAd`, t, s, n.L - 1.3, n.L - 0.3, 1.3, 1.62, 0.01, 0.03, {
    planar: (e, t) => [e - n.L + 1.3, (t - 1.3) / 0.32],
  }),
    $(e, Z, t, n.grid[0][1], n.L / 2, 2.2, 2.93, 1, 0.01, 4),
    e.add(
      `bulb`,
      new w(0.09, 8, 6).translate(n.L / 2, 2.15, 1),
      t,
      n.grid[0][1],
    ));
}
function Dx() {
  let e = {
      win: {
        w: 1.4,
        h: 1.2,
        sill: 1,
        type: `grid`,
        lites: [1, 1],
        frame: `trimWhite`,
        open: !0,
        rec: 0.06,
      },
    },
    t = (e, t) => (t === 0 ? `window` : `door`);
  return {
    key: `trRumShop`,
    name: `King Pelican Rum Shop`,
    plain: 3835584,
    desc: `Clapboard rum shop: sky-blue weatherboard with a stepped false front carrying the red name board, propped serving hatch, rusty tin porch on white posts, painted beer ad down the side, bench, crates and a dominoes table.`,
    W: 7,
    D: 9,
    style: {
      wall: `trLapBlue`,
      t: 0.14,
      bay: 3.5,
      floors: [3.2],
      ...e,
      door: {
        w: 1.4,
        h: 2.2,
        transom: 0.25,
        frame: `trimWhite`,
        mat: `trJalWhite`,
        rec: 0.08,
      },
      base: { mat: `concrete`, h: 0.25, out: 0.02 },
      corners: `trimWhite`,
      roof: {
        ridge: `z`,
        pitch: 25 * Ey,
        over: 0.25,
        mat: `trTinRust`,
        fascia: `trimWhite`,
      },
    },
    front: {
      kinds: t,
      extra: k(db(t, e, `trJalWhite`, { angle: 55, len: 1 }), Tx, Ex),
    },
    left: {
      kinds: (e, t) => (t === 2 ? `window` : `solid`),
      signs: [
        { mat: `trSignRumAd`, rect: [0.4, 6.6, 0.7, 2.54], z0: 0, z1: 0.02 },
      ],
    },
    right: { kinds: (e, t) => (t === 1 ? `door` : `window`) },
    back: {
      kinds: () => `solid`,
      extra: mb({
        a0: 0.6,
        a1: 4.6,
        d: 1.8,
        h: 2.6,
        mat: `trLapGrey`,
        roof: `trTinRust`,
        door: 2.6,
      }),
    },
  };
}
function Ox(e, t, n, r) {
  ($(e, `trStuccoWhite`, t, 0, n, 0, 8.4, r, 1.3, 16, 1),
    $(e, `trPaintRed`, t, 0, n, 5.2, 6, r, 1.11, 16, 1.07),
    $(e, `trCoral`, t, 0, n, 0, 0.6, r, 1.38, 16, 1.35),
    $(e, `trWhiteStone`, t, 0, n, 8.4, 8.6, r, 1.35, 16));
  for (let i = 0; i < 16; i++) {
    let a = (i / 16) * Math.PI * 2;
    $(
      e,
      Z,
      t,
      0,
      n + Math.cos(a) * 1.28,
      8.6,
      9.5,
      r + Math.sin(a) * 1.28,
      0.02,
      4,
    );
  }
  (e.add(
    Z,
    new u(1.28, 0.03, 4, 24).rotateX(Math.PI / 2).translate(n, 9.5, r),
    t,
    0,
  ),
    $(e, `trPaintRed`, t, 0, n, 8.6, 9, r, 0.72, 12),
    $(e, `glass`, t, 0, n, 9, 10.2, r, 0.7, 12),
    e.add(`bulb`, new w(0.28, 10, 8).translate(n, 9.6, r), t, 0));
  for (let i = 0; i < 6; i++) {
    let a = (i / 6) * Math.PI * 2;
    $(
      e,
      Z,
      t,
      0,
      n + Math.cos(a) * 0.71,
      9,
      10.2,
      r + Math.sin(a) * 0.71,
      0.025,
      4,
    );
  }
  (e.add(
    `trPaintRed`,
    new w(0.8, 12, 6, 0, Math.PI * 2, 0, Math.PI / 2).translate(n, 10.2, r),
    t,
    0,
  ),
    $(e, Z, t, 0, n, 10.9, 11.5, r, 0.03, 5),
    e.add(Z, new w(0.08, 6, 4).translate(n, 11, r), t, 0),
    e.box(
      `trPaintRed`,
      t,
      0,
      n + 1.18,
      n + 1.36,
      0.3,
      2.3,
      r - 0.45,
      r + 0.45,
    ));
  for (let i of [3.4, 6.6])
    e.box(
      `glass`,
      t,
      0,
      n - 0.2,
      n + 0.2,
      i,
      i + 0.7,
      r + 1.1 - (i - 3.4) * 0.05,
      r + 1.26 - (i - 3.4) * 0.05,
    );
}
