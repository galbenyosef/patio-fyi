// assets__lab-buildings-view-DJVr8phc 161 — box
// Lines 50775-51124 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function Am(e, t, n) {
  let r = 12.25,
    i = 10.75,
    a = n.grid[0][G(n, r)],
    o = 0.6;
  e.box(`pnDeck`, t, a, i, 13.75, 0.44999999999999996, o, 0, 10);
  for (let n = 0.3; n <= 10; n += 2.45)
    for (let r of [10.85, 13.65])
      (K(e, `pnPile`, t, a, r, n, -0.2, 0.44999999999999996, 0.14, 0.13, 8),
        e.box(
          `pnTrimGreen`,
          t,
          a,
          r - 0.06,
          r + 0.06,
          o,
          2.85,
          n - 0.06,
          n + 0.06,
        ));
  for (let n of [i, 13.63])
    (e.box(`pnLapBuff`, t, a, n, n + 0.12, o, 1.5499999999999998, 0, 10),
      e.box(
        `pnTrimGreen`,
        t,
        a,
        n - 0.03,
        n + 0.15,
        1.5499999999999998,
        1.62,
        0,
        10,
      ));
  for (let n of [10.77, 13.65])
    e.box(`glassGrey`, t, a, n, n + 0.08, 1.7999999999999998, 2.6, 0.2, 9.8);
  (im(e, t, {
    along: `z`,
    cx: r,
    cz: 5,
    len: 10,
    over: 0.25,
    pts: [
      [-1.85, 2.72],
      [0, 3.55],
      [1.85, 2.72],
    ],
    mat: `pnTinGreen`,
    rake: `pnTrimGreen`,
    fascia: `pnTrimGreen`,
    cell: a,
  }),
    tm(e, `pnSteel`, t, a, 11.05, 13.45, [10, o], [12.6, 0.25], 0.08));
  for (let n of [11.05, 13.45])
    D(e, `pnTrimGreen`, t, a, [n, 1.6, 10], [n, 1.1, 12.5], 0.05);
  for (let n of [9.55, 14.95])
    for (let [r, i] of [
      [0, 0],
      [0.3, 0.1],
      [0.12, -0.26],
    ])
      K(e, `pnPile`, t, a, n + r, 12.2 + i, -0.2, 2.2 + r, 0.16, 0.15, 8);
}
function jm(e, t, n) {
  let r = n.roofTop,
    a = 1.1,
    o = 0.95;
  (e.box(`pnLapBuff`, t, 0, -1.1, a, r - 1.2, r + 0.9, -1.1, a),
    e.box(
      `pnTrimGreen`,
      t,
      0,
      -1.1 - 0.12,
      1.2200000000000002,
      r + 0.9,
      r + 1.05,
      -1.1 - 0.12,
      1.2200000000000002,
    ),
    e.box(`pnLapBuff`, t, 0, -0.95, o, r + 1.05, r + 2.6, -0.95, o));
  for (let [n, i] of [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]) {
    let a = i,
      o = -n,
      s = r + 1.82,
      c = new y(0.6, 24)
        .rotateY(Math.atan2(n, i))
        .translate(n * 0.96, s, i * 0.96);
    (e.add(`pnClock`, c, t, 0, {
      planar: (e, t, n) => [(e * a + n * o) / 1.2 + 0.5, (t - s) / 1.2 + 0.5],
    }),
      e.add(
        `pnTrimGreen`,
        new u(0.62, 0.05, 4, 20)
          .rotateY(Math.atan2(n, i))
          .translate(n * 0.97, s, i * 0.97),
        t,
        0,
      ));
  }
  for (let [n, i] of [
    [-0.95, -0.95],
    [o, -0.95],
    [-0.95, o],
    [o, o],
  ])
    e.box(
      `pnTrimGreen`,
      t,
      0,
      n - 0.08,
      n + 0.08,
      r + 1.05,
      r + 2.6,
      i - 0.08,
      i + 0.08,
    );
  (e.box(`pnTrimGreen`, t, 0, -1.15, 1.15, r + 2.6, r + 2.8, -1.15, 1.15),
    e.add(
      `pnTinGreen`,
      Pp(
        new i(1.25 * Math.SQRT2, 1.7, 4)
          .rotateY(Math.PI / 4)
          .translate(0, r + 2.8 + 0.85, 0),
      ),
      t,
      0,
    ),
    K(e, W, t, 0, 0, 0, r + 4.4, r + 5.6, 0.035, 0.025, 6),
    e.add(`pnBrass`, new w(0.1, 8, 6).translate(0, r + 4.6, 0), t, 0),
    e.box(W, t, 0, -0.6, 0.6, r + 5.2, r + 5.26, -0.02, 0.02),
    e.add(
      W,
      Pp(
        new i(0.12, 0.3, 3).rotateZ(-Math.PI / 2).translate(0.72, r + 5.23, 0),
      ),
      t,
      0,
    ),
    e.box(W, t, 0, -0.75, -0.5, r + 5.12, r + 5.34, -0.01, 0.01));
  for (let a of [-9, 9])
    (K(e, `pnCorrGalv`, t, 0, a, -1.6, n.H + 0.6, r - 0.1, 0.22, 0.22, 10),
      e.add(
        `pnCorrGalv`,
        new i(0.4, 0.35, 10).translate(a, r + 0.1, -1.6),
        t,
        0,
      ));
  pm(e, t, -n.W / 2 - 2, n.W / 2 + 2, -n.D / 2 - 14, -n.D / 2 - 0.4);
}
function Mm() {
  return {
    key: `pnFerry`,
    name: `Kittle Sound Ferry Terminal`,
    plain: 14075034,
    desc: `Clapboard ferry terminal: long green tin roof with a four-faced clock cupola, full-length bracketed waiting canopy with ticket boards and benches, covered gangway out to the slip.`,
    W: 28,
    D: 12,
    style: {
      wall: `pnLapBuff`,
      t: 0.22,
      bay: 3.5,
      floors: [4.4],
      win: {
        w: 1.6,
        h: 2.3,
        sill: 0.8,
        type: `grid`,
        lites: [3, 3],
        frame: `pnTrimGreen`,
        casing: `pnTrimGreen`,
        rec: 0.08,
        curtains: 0.3,
      },
      door: {
        w: 2,
        h: 2.5,
        transom: 0.55,
        frame: `pnTrimGreen`,
        glazed: !0,
        mat: `pnDoorGreen`,
        rec: 0.15,
      },
      base: { mat: `pnStone`, h: 0.5, out: 0.04 },
      corners: `pnTrimGreen`,
      eaveTrim: `pnTrimGreen`,
      roof: {
        ridge: `x`,
        pitch: 26 * Np,
        over: 0.7,
        mat: `pnTinGreen`,
        fascia: `pnTrimGreen`,
        gutter: !0,
      },
    },
    front: {
      kinds: (e, t) => (t === 3 || t === 4 ? `door` : `window`),
      signs: [
        { mat: `pnSignFerry`, rect: [7, 21, 3.62, 4.24], z0: 3.38, z1: 3.42 },
      ],
      extra: k(
        cm({
          d: 3.3,
          y: 0.2,
          top: 3.2,
          beam: 0.3,
          rise: 0.45,
          roof: `pnTinGreen`,
          trim: `pnTrimGreen`,
          deck: `concrete`,
          col: `post`,
          colW: 0.1,
          brackets: !0,
          gap: 3.45,
        }),
        km,
      ),
    },
    back: { kinds: (e, t) => (t === 3 ? `door` : `window`), extra: Am },
    left: { kinds: (e, t) => (t === 1 ? `door` : `window`) },
    right: { kinds: () => `window` },
    extra: jm,
  };
}
function Nm(e, t, n) {
  let r = n.H,
    a = n.L,
    o = n.gableCell,
    s = 0.14,
    c = 2.6;
  rm(
    e,
    `pnLapBuff`,
    t,
    o,
    [
      [0, r],
      [a, r],
      [a, r + 2.4],
      [a - c, r + 2.4],
      [a - c, r + 3.1],
      [c, r + 3.1],
      [c, r + 2.4],
      [0, r + 2.4],
    ],
    s,
    0.28,
  );
  for (let [n, i, s, l] of [
    [-0.06, c, r + 2.4, r + 2.55],
    [2.54, a - c + 0.06, r + 3.1, r + 3.25],
    [a - c, a + 0.06, r + 2.4, r + 2.55],
    [2.54, 2.66, r + 2.4, r + 3.1],
    [a - c - 0.06, a - c + 0.06, r + 2.4, r + 3.1],
  ])
    e.box(`pnTrimNavy`, t, o, n, i, s, l, 0.12000000000000001, 0.32);
  for (let n of [3.2, a - 3.2])
    D(e, `wood`, t, o, [n, r + 2.2, s], [n, r + 1.05, -2], 0.12);
  for (let i = 0; i < n.nb; i++)
    e.box(
      `pnTrimNavy`,
      t,
      n.grid[n.top][i],
      i * n.bw - (i === 0 ? 0.08 : 0),
      (i + 1) * n.bw + (i === n.nb - 1 ? 0.08 : 0),
      r - 0.28,
      r + 0.1,
      -0.05,
      0.4,
    );
  let l = n.grid[0][0];
  (e.box(`concrete`, t, l, 0.55, 1.25, 0.1, 0.34, 0.6, 1.2),
    K(e, W, t, l, 0.9, 0.9, 0.34, 2.3, 0.07, 0.06, 8),
    e.box(W, t, l, 0.84, 0.96, 2, 2.1, 0.25, 1.55),
    e.add(W, new u(0.12, 0.03, 4, 10).translate(0.9, 2.42, 0.9), t, l),
    e.add(
      W,
      new u(0.6, 0.07, 6, 12, Math.PI)
        .rotateZ(Math.PI)
        .translate(0.9, 1.05, 0.9),
      t,
      l,
    ));
  for (let n of [-1, 1])
    e.add(
      W,
      Pp(new i(0.16, 0.42, 4).translate(0.9 + n * 0.6, 1.18, 0.9)),
      t,
      l,
    );
  for (let n = 0; n < 9; n++)
    e.add(
      W,
      new u(0.09, 0.025, 4, 8)
        .rotateY(n % 2 ? Math.PI / 2 : 0)
        .rotateX(n % 2 ? 0 : Math.PI / 2)
        .translate(1.35 + n * 0.15, 0.2, 1.05),
      t,
      l,
    );
  Re(
    e,
    t,
    n.grid[1][3],
    `pnSignMarineBlade`,
    13.65,
    4.9,
    7.1,
    0.25,
    1.1,
    `pnTrimNavy`,
  );
}
function Pm(e, t, n) {
  let r = n.grid[0][0];
  for (let [n, i, a] of [
    [0.7, 0.15, 0.6],
    [1.65, 0.15, 0.6],
    [1.15, 0.57, 0.6],
  ])
    vm(e, t, r, n, i, a, 0.85, 0.42);
  let i = n.grid[0][1],
    a = 4.2,
    o = 5.8;
  for (let n of [a, o])
    for (let r of [0.05, 0.75])
      e.box(W, t, i, n - 0.03, n + 0.03, 0.15, 1.75, r - 0.03, r + 0.03);
  for (let n of [0.15, 1.72])
    (e.box(W, t, i, a, o, n, n + 0.03, 0.72, 0.78),
      e.box(W, t, i, a, o, n, n + 0.03, 0.02, 0.08));
  for (let n = 4.3; n < 5.75; n += 0.1)
    e.box(W, t, i, n - 0.008, n + 0.008, 0.18, 1.72, 0.74, 0.76);
  for (let n = 0; n < 5; n++) {
    let r = 4.48 + n * 0.3;
    (K(e, `pnBuoyWhite`, t, i, r, 0.4, 0.18, 1.2, 0.13, 0.13, 10),
      e.add(
        `pnBuoyWhite`,
        new w(0.13, 10, 5, 0, Math.PI * 2, 0, Math.PI / 2).translate(
          r,
          1.2,
          0.4,
        ),
        t,
        i,
      ));
  }
}
