// assets__lab-buildings-view-DJVr8phc 168 — box
// Lines 53105-53359 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function dh(e, t, n) {
  let r = n.grid[0][1],
    i = 4.2,
    a = 7.8,
    o = 2.2,
    s = 3.2,
    c = `pnLapWhite`,
    l = `pnTrimGreen`;
  (e.box(c, t, r, i, 4.4, 0, s, 0, o),
    e.box(c, t, r, 7.6, a, 0, s, 0, o),
    e.box(c, t, r, i, 5.2, 0, s, 2, o),
    e.box(c, t, r, 6.8, a, 0, s, 2, o),
    e.box(c, t, r, 5.2, 6.8, 2.55, s, 2, o));
  for (let [n, i] of [
    [5.25, 5.98],
    [6.02, 6.75],
  ])
    (e.box(`pnDoorGreen`, t, r, n, i, 0.15, 2.5, 2.08, 2.14),
      e.box(
        `glass`,
        t,
        r,
        n + 0.12,
        i - 0.12,
        1.5,
        2.3,
        2.14,
        2.1500000000000004,
      ));
  for (let [n, i, a, o] of [
    [5.1, 5.2, 0.15, 2.65],
    [6.8, 6.9, 0.15, 2.65],
    [5.1, 6.9, 2.55, 2.65],
  ])
    e.box(l, t, r, n, i, a, o, 2.18, 2.24);
  for (let n of [4.19, 7.79])
    e.box(`glass`, t, r, n, n + 0.02, 1.2, 2.3, 0.6, 1.4);
  for (let [n, i] of [
    [4.15, 4.25],
    [7.75, 7.85],
  ])
    e.box(l, t, r, n, i, 0, s, 2.1, 2.23);
  let u = Math.tan(35 * Np);
  (im(e, t, {
    along: `z`,
    cx: 6,
    cz: o / 2,
    len: o,
    over: 0.3,
    pts: [
      [-2.1, s - 0.3 * u],
      [0, s + 1.8 * u],
      [2.1, s - 0.3 * u],
    ],
    mat: `pnShingleRed`,
    rake: `pnTrimWhite`,
    fascia: `pnTrimWhite`,
    fill: c,
    fillPts: [
      [-1.8, s],
      [0, s + 1.8 * u],
      [1.8, s],
    ],
    cell: r,
  }),
    e.box(`concrete`, t, r, 4.9, 7.1, 0.1, 0.25, o, 3.1),
    bm(e, t, r, 4.75, 2.9),
    bm(e, t, r, 7.25, 2.9),
    mm(
      e,
      t,
      n.grid[0][0],
      `pnSignDance`,
      `pnTrimGreen`,
      2.95,
      3.95,
      1.05,
      2.25,
      0.06,
    ));
}
function fh(e, t, n) {
  let r = 3.2,
    i = 2.6,
    a = `pnLapWhite`;
  for (let [o, s] of Qp(n, 3, 10)) {
    let c = n.grid[0][G(n, (o + s) / 2)];
    (e.box(a, t, c, o, s, 0, i, 3, r),
      tm(
        e,
        `pnShingleRed`,
        t,
        c,
        o - (o === 3 ? 0.3 : 0),
        s + (s === 10 ? 0.3 : 0),
        [0, 3.75],
        [3.5500000000000003, 2.42],
        0.1,
      ),
      e.box(
        `pnTrimWhite`,
        t,
        c,
        o,
        s,
        2.3000000000000003,
        2.52,
        r,
        3.5700000000000003,
      ));
  }
  for (let [o, s] of [
    [3, 3.2],
    [9.8, 10],
  ])
    nm(
      e,
      a,
      t,
      n.grid[0][G(n, (o + s) / 2)],
      [
        [0, 0],
        [r, 0],
        [r, i],
        [0, 3.6],
      ],
      o,
      s,
    );
  let o = n.grid[0][G(n, 5.4)];
  (e.box(`pnDoorGreen`, t, o, 5, 5.9, 0.05, 2.15, r, 3.24),
    e.box(`pnTrimGreen`, t, o, 4.92, 5.98, 0.05, 2.22, r, 3.22));
  let s = n.grid[0][G(n, 8)];
  (e.box(`glass`, t, s, 7.5, 8.5, 1, 1.9, 3.205, 3.2150000000000003),
    e.box(`pnTrimGreen`, t, s, 7.42, 8.58, 0.92, 1.98, r, 3.21),
    K(e, `pnSteel`, t, o, 3.8, 1.2, 3.1, 4.6, 0.09, 0.09, 8));
}
function ph(e, t, n) {
  let r = n.H,
    i = Math.tan(60 * Np),
    a = 4.5,
    o = r + 1.5 * i,
    s = o + a * Math.tan(20.7 * Np),
    c = n.W / 2;
  im(e, t, {
    along: `z`,
    len: n.D,
    over: 0.45,
    pts: [
      [-c - 0.4, r - 0.4 * i],
      [-4.5, o],
      [0, s],
      [a, o],
      [c + 0.4, r - 0.4 * i],
    ],
    mat: `pnShingleRed`,
    rake: `pnTrimWhite`,
    fascia: `pnTrimWhite`,
    cap: `pnShingleRed`,
    fill: `pnLapWhite`,
    fillPts: [
      [-c, r],
      [-4.5, o],
      [0, s],
      [a, o],
      [c, r],
    ],
  });
  let l = n.D / 2;
  (e.box(`pnTrimGreen`, t, 0, -3.66, 3.66, r + 0.3, r + 1.21, l, l + 0.04),
    e.box(
      `pnSignGrange`,
      t,
      0,
      -3.6,
      3.6,
      r + 0.36,
      r + 1.15,
      l + 0.04,
      l + 0.05,
      { planar: (e, t) => [(e + 3.6) / 7.2, (t - r - 0.36) / 0.79] },
    ));
  for (let n of [-2, 2]) {
    e.box(`glass`, t, 0, n - 0.42, n + 0.42, r + 1.65, r + 2.85, l, l + 0.01);
    for (let [i, a, o, s] of [
      [n - 0.52, n - 0.42, r + 1.55, r + 2.95],
      [n + 0.42, n + 0.52, r + 1.55, r + 2.95],
      [n - 0.52, n + 0.52, r + 2.85, r + 3],
      [n - 0.58, n + 0.58, r + 1.5, r + 1.6],
      [n - 0.42, n + 0.42, r + 2.23, r + 2.27],
    ])
      e.box(`pnTrimGreen`, t, 0, i, a, o, s, l, l + 0.06);
  }
  let u = new C();
  for (let e = 0; e < 10; e++) {
    let t = Math.PI / 2 + (e * Math.PI) / 5,
      n = e % 2 ? 0.16 : 0.4,
      i = [Math.cos(t) * n, r + 3.55 + Math.sin(t) * n];
    e ? u.lineTo(...i) : u.moveTo(...i);
  }
  (e.add(
    `pnTrimGreen`,
    new S(u, { depth: 0.05, bevelEnabled: !1 }).translate(0, 0, l),
    t,
    0,
  ),
    A(e, t, `pnBrickRed`, 2.4, -n.D / 2 + 1.5, r, s + 0.4, 0.8, 0.6));
}
function mh() {
  return {
    key: `pnGrange`,
    name: `Skookum Grange No. 214`,
    plain: 15328730,
    desc: `White clapboard grange hall under a red gambrel roof: lettered sign board, twin windows and a star in the front gambrel, gabled entry vestibule with lamps, tall side sashes, kitchen lean-to, notice board.`,
    W: 12,
    D: 22,
    style: {
      wall: `pnLapWhite`,
      t: 0.2,
      bay: 4,
      floors: [4.4],
      win: {
        w: 1.1,
        h: 2.6,
        sill: 0.9,
        type: `sash`,
        lites: [2, 2],
        frame: `pnTrimWhite`,
        casing: `pnTrimGreen`,
        rec: 0.08,
        curtains: 0.5,
      },
      door: {
        w: 1,
        h: 2.2,
        transom: 0,
        frame: `pnTrimWhite`,
        mat: `pnDoorGreen`,
        rec: 0.12,
      },
      base: { mat: `concrete`, h: 0.45, out: 0.03 },
      corners: `pnTrimGreen`,
      roof: sm,
    },
    front: { kinds: (e, t) => (t === 1 ? `solid` : `window`), extra: dh },
    left: {
      bay: 2.7,
      kinds: (e, t) => (t >= 1 && t <= 3 ? `solid` : `window`),
      extra: fh,
    },
    right: { bay: 2.7, kinds: (e, t) => (t === 6 ? `door` : `window`) },
    back: { kinds: (e, t) => (t === 1 ? `door` : `window`) },
    extra: ph,
  };
}
