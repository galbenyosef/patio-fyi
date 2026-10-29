// assets__lab-buildings-view-DY6ytqNM 169 — box
// Lines 53360-53619 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function mh(e, t, n) {
  let r = 4.6,
    i = Math.tan(35 * Mp);
  for (let i of [5.1, 12.9])
    (e.box(
      `pnRubble`,
      t,
      n.grid[0][K(n, i)],
      i - 0.45,
      i + 0.45,
      0,
      1.1,
      4.1499999999999995,
      5.05,
    ),
      e.box(
        `concrete`,
        t,
        n.grid[0][K(n, i)],
        i - 0.5,
        i + 0.5,
        1.1,
        1.2,
        4.1,
        5.1,
      ),
      q(e, `wood`, t, n.grid[0][K(n, i)], i, r, 1.2, n.ys[1], 0.3, 0.29, 10),
      q(e, `wood`, t, n.grid[1][K(n, i)], i, r, n.ys[1], 7, 0.29, 0.27, 10),
      $p(
        e,
        `wood`,
        t,
        n.grid[1][K(n, i)],
        i,
        6.95,
        -0.2,
        4.949999999999999,
        0.2,
        8,
      ),
      k(
        e,
        `wood`,
        t,
        n.grid[1][K(n, i)],
        [i, 5.7, 4.5],
        [i, 6.85, 3.1999999999999997],
        0.16,
      ));
  let a = n.grid[1][2],
    o = 3.9 * i;
  (Qp(
    e,
    `wood`,
    t,
    a,
    4.699999999999999,
    13.3,
    7.15,
    4.6499999999999995,
    0.22,
    8,
  ),
    e.box(`wood`, t, a, 8.84, 9.16, 7.3, 7 + o - 0.1, 4.5, 4.8));
  for (let n of [-1, 1])
    k(
      e,
      `wood`,
      t,
      a,
      [9 + n * 2.6, 7.35, 4.6499999999999995],
      [9, 7 + o - 0.4, 4.6499999999999995],
      0.2,
    );
  (rm(e, t, {
    along: `z`,
    cx: 9,
    cz: 2.55,
    len: 5.1,
    over: 0.35,
    pts: [
      [-4.4, 6.65],
      [0, 7.15 + 4.2 * i - 0.12],
      [4.4, 6.65],
    ],
    mat: `pnShakeRoof`,
    rake: `woodDark`,
    cap: `pnShakeRoof`,
    cell: a,
  }),
    pm(
      e,
      t,
      a,
      `pnSignLodge`,
      `woodDark`,
      6.6,
      11.4,
      5.85,
      6.5,
      4.6499999999999995,
      !0,
    ));
  for (let n of [6.9, 11.1])
    e.box(G, t, a, n - 0.015, n + 0.015, 6.55, 7, 4.619999999999999, 4.64);
  (ym(e, t, n.grid[0][2], 7.6, 3), ym(e, t, n.grid[0][2], 10.4, 3));
}
function hh() {
  let e = 32 * Mp,
    t = 1.2;
  return {
    key: `pnCedarLodge`,
    name: `Salmonberry Lodge`,
    plain: 9067058,
    desc: `Big-log fraternal lodge: saddle-notched cedar log walls on a rubble base, deep shake gable, two-storey log porte-cochère with a king-post truss and hung name board, rafter tails, massive stone chimney.`,
    W: 18,
    D: 14,
    style: {
      wall: `pnLogs`,
      t: 0.35,
      bay: 3.6,
      floors: [3.6, 3.2],
      win: {
        w: 1.5,
        h: 1.5,
        sill: 0.9,
        type: `grid`,
        lites: [3, 2],
        frame: `woodDark`,
        rec: 0.22,
        curtains: 0.6,
      },
      door: {
        w: 1.8,
        h: 2.5,
        transom: 0.4,
        frame: `woodDark`,
        mat: `woodDoor`,
        rec: 0.3,
      },
      base: { mat: `pnRubble`, h: 0.9, out: 0.06 },
      roof: {
        ridge: `z`,
        pitch: e,
        over: t,
        mat: `pnShakeRoof`,
        fascia: `woodDark`,
      },
    },
    front: {
      kinds: (e, t) => (e === 0 && t === 2 ? `door` : `window`),
      extra: A(mh, Em),
    },
    back: {
      kinds: (e, t) => (e === 0 && t === 2 ? `door` : `window`),
      extra: Em,
    },
    right: {
      kinds: (e, t) => (t === 1 && e === 0 ? `door` : `window`),
      extra: Cm(e, t, `woodDark`, 0.9),
    },
    left: {
      kinds: (e, t) => (t === 1 || t === 2 ? `solid` : `window`),
      extra: A(Cm(e, t, `woodDark`, 0.9), wm(6.65, 2.2, `pnRubble`, 9.4, 0.95)),
    },
  };
}
function gh(e, t, n) {
  let r = n.grid[0][1],
    i = 2.75,
    a = 6.25,
    s = 2.6,
    c = 2.9,
    l = Math.tan(50 * Mp);
  for (let n of [i, a])
    for (let i of [0.25, 2.45])
      e.box(`timber`, t, r, n - 0.1, n + 0.1, 0.15, c, i - 0.1, i + 0.1);
  for (let n of [i, a])
    (e.box(`timber`, t, r, n - 0.1, n + 0.1, 2.7199999999999998, c, 0, s),
      k(e, `timber`, t, r, [n, 0.9, 0.3], [n, 2.6999999999999997, 2.4], 0.08),
      k(e, `timber`, t, r, [n, 0.9, 2.4], [n, 2.6999999999999997, 0.3], 0.08),
      e.box(`timber`, t, r, n - 0.07, n + 0.07, 0.85, 0.95, 0.25, 2.45));
  rm(e, t, {
    along: `z`,
    cx: 4.5,
    cz: s / 2,
    len: s,
    over: 0.3,
    pts: [
      [-2.1, c - 0.3 * l],
      [0, c + 1.75 * l],
      [2.1, c - 0.3 * l],
    ],
    mat: `pnShingleMoss`,
    rake: `pnTrimCream`,
    fascia: `pnTrimCream`,
    fill: `pnBattenBrown`,
    fillPts: [
      [-1.85, c],
      [0, c + 1.75 * l],
      [1.85, c],
    ],
    cell: r,
  });
  let u = c + 1.75 * l + 0.2;
  (e.box(
    `pnTrimCream`,
    t,
    r,
    4.47,
    4.53,
    u,
    u + 0.9,
    2.8000000000000003,
    2.8600000000000003,
  ),
    e.box(
      `pnTrimCream`,
      t,
      r,
      4.25,
      4.75,
      u + 0.5,
      u + 0.56,
      2.8000000000000003,
      2.8600000000000003,
    ),
    e.box(`concrete`, t, r, 2.45, 6.55, 0.1, 0.18, 0, 3));
  let d = n.gableCell,
    f = n.H + 2.3,
    p = n.L / 2;
  (mm(e, t, d, `glassBlue`, p, f, 0.01, 0.78, 20),
    e.add(`pnTrimCream`, new o(0.8, 0.08, 4, 24).translate(p, f, 0.04), t, d),
    e.add(`pnTrimCream`, new o(0.28, 0.04, 4, 16).translate(p, f, 0.04), t, d));
  for (let n = 0; n < 8; n++) {
    let r = (n / 8) * Math.PI * 2;
    k(
      e,
      `pnTrimCream`,
      t,
      d,
      [p + Math.cos(r) * 0.28, f + Math.sin(r) * 0.28, 0.04],
      [p + Math.cos(r) * 0.78, f + Math.sin(r) * 0.78, 0.04],
      0.04,
    );
  }
  let m = n.grid[0][0];
  for (let n of [0.2, 1.4])
    e.box(`timber`, t, m, n - 0.05, n + 0.05, 0.15, 2, 3.6, 3.7);
  (pm(e, t, m, `pnSignChurch`, `timber`, 0.25, 1.35, 0.85, 1.85, 3.72),
    em(e, `pnShingleMoss`, t, m, 0.05, 1.55, [3.35, 2.1], [4.05, 2.1], 0.06));
}
function _h(e, t, n) {
  for (let r = 1; r < n.nb; r++) {
    let i = r * n.bw,
      a = n.grid[0][K(n, i - 0.01)];
    (k(e, `timber`, t, a, [i, 0.15, 1.05], [i, 3.3, 0.06], 0.18),
      e.box(`concrete`, t, a, i - 0.18, i + 0.18, 0, 0.25, 0.85, 1.25));
  }
}
