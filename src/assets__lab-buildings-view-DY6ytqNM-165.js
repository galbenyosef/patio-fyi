// assets__lab-buildings-view-DY6ytqNM 165 — mat
// Lines 52155-52495 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function Ym(e, t, n) {
  let r = n.grid[0][0],
    i = 2.22;
  e.add(
    `pnBattenGrey`,
    new a(2.5, 1.25, 0.06)
      .translate(0, -0.62, 0)
      .rotateX(-110 * Mp)
      .translate(1.75, i, 0.04),
    t,
    r,
  );
  let o = [i + 1.2 * Math.sin(20 * Mp), 1.2 * Math.cos(20 * Mp)];
  for (let n of [0.75, 2.75])
    k(e, `wood`, t, r, [n, 1.1, 0.42], [n, o[0] - 0.05, o[1] - 0.05], 0.05);
  e.box(`wood`, t, r, 0.5, 3, 1, 1.08, -0.05, 0.5);
  for (let n of [0.8, 2.7]) Ve(e, `wood`, t, r, n, 0.6, n, 1, 0.06, 0.05, 0.1);
  for (let n of [0.8, 2.7])
    k(e, `wood`, t, r, [n, 0.6, 0.03], [n, 0.99, 0.45], 0.05);
  pm(e, t, n.grid[0][1], `pnSignMenu`, `wood`, 4.4, 6.2, 0.7, 2.1, 0.05);
  let s = n.grid[0][1],
    c = 2.4;
  e.box(`pnDeck`, t, s, 4.25, 6.15, 0.75, 0.8, 2, 2.8);
  for (let n of [-1, 1])
    e.box(
      `pnDeck`,
      t,
      s,
      4.25,
      6.15,
      0.45,
      0.5,
      c + n * 0.68 - 0.14,
      c + n * 0.68 + 0.14,
    );
  for (let n of [4.5, 5.9]) {
    for (let r of [-1, 1])
      k(e, `wood`, t, s, [n, 0.15, c + r * 0.8], [n, 0.78, c], 0.06);
    e.box(
      `wood`,
      t,
      s,
      n - 0.04,
      n + 0.04,
      0.4,
      0.46,
      1.5499999999999998,
      3.25,
    );
  }
}
function Xm(e, t, n) {
  let r = n.H,
    i = 1.2 / n.D;
  rm(e, t, {
    along: `x`,
    len: n.W,
    over: 0.35,
    pts: [
      [-n.D / 2 - 0.4, r - 0.4 * i],
      [n.D / 2 + 0.6, r + 1.2 + 0.6 * i],
    ],
    mat: `pnCorrRust`,
    rake: `pnTrimWhite`,
    fascia: `pnTrimWhite`,
    fill: `pnBattenGrey`,
    fillPts: [
      [-n.D / 2, r],
      [n.D / 2, r],
      [n.D / 2, r + 1.2],
    ],
  });
  let a = n.D / 2 - 0.3,
    o = r + 1.25;
  for (let n of [-1.9, 1.9])
    e.box(`wood`, t, 0, n - 0.06, n + 0.06, o - 0.2, o + 1.15, a - 0.12, a);
  (e.box(
    `pnTrimWhite`,
    t,
    0,
    -2.3,
    2.3,
    o + 0.12,
    o + 1.12,
    a - 0.03,
    a + 0.01,
  ),
    e.box(
      `pnSignOyster`,
      t,
      0,
      -2.2,
      2.2,
      o + 0.15,
      o + 1.1,
      a + 0.01,
      a + 0.02,
      { planar: (e, t) => [(e + 2.2) / 4.4, (t - o - 0.15) / 0.95] },
    ),
    q(e, `pnSteel`, t, 0, 2.3, -1.4, r + 0.2, r + 2, 0.1, 0.1, 8),
    e.add(G, new d(0.2, 0.18, 8).translate(2.3, r + 2.1, -1.4), t, 0));
}
function Zm() {
  return {
    key: `pnOysterShack`,
    name: `Pickett’s Oyster Bar`,
    plain: 8748916,
    desc: `Weathered board-and-batten oyster shack: rusty shed roof rising to the street with a board sign on top, propped-open serving hatch and ledge, chalk menu, picnic table, shell middens and pot buoys.`,
    W: 7,
    D: 6,
    style: {
      wall: `pnBattenGrey`,
      t: 0.15,
      bay: 3.5,
      floors: [2.9],
      win: {
        w: 2.3,
        h: 1.1,
        sill: 1.08,
        open: !0,
        frame: `pnTrimWhite`,
        rec: 0.06,
      },
      door: {
        w: 0.95,
        h: 2.1,
        transom: 0,
        frame: `pnTrimWhite`,
        mat: `pnDoorRed`,
        rec: 0.08,
      },
      base: { mat: `concrete`, h: 0.2, out: 0.02 },
      corners: `pnTrimWhite`,
      roof: om,
    },
    front: { kinds: (e, t) => (t === 0 ? `window` : `solid`), extra: Ym },
    right: {
      kinds: (e, t) => (t === 1 ? `door` : `solid`),
      extra: (e, t, n) =>
        [`pnBuoyOrange`, `pnBuoyWhite`, `pnBuoyYellow`].forEach((r, i) =>
          vm(e, t, n.grid[0][0], 0.9 + i * 0.7, 2.4, 0.2, r),
        ),
    },
    left: {
      kinds: () => `solid`,
      extra: (e, t, n) => {
        for (let [r, a, o] of [
          [1.9, 1.2, 1],
          [4, 0.9, 0.7],
        ])
          e.add(
            `pnShell`,
            new i(1, 12, 5, 0, Math.PI * 2, 0, Math.PI / 2)
              .scale(1.4 * o, 0.55 * o, 1 * o)
              .translate(r, 0.1, a),
            t,
            n.grid[0][K(n, r)],
          );
      },
    },
    back: { kinds: (e, t) => (t === 0 ? `window` : `solid`) },
    extra: Xm,
  };
}
function Qm(e, t, n) {
  let r = n.grid[n.top][0],
    o = n.L,
    s = n.H + 1.1 + 0.1,
    c = 1.3;
  nm(
    e,
    `pnBrickSoot`,
    t,
    r,
    [
      [0.15, s],
      [o - 0.15, s],
      [o / 2, s + c],
    ],
    -0.35,
    0.05,
  );
  let l = Math.atan2(c, o / 2 - 0.15),
    u = Math.hypot(c, o / 2 - 0.15) + 0.25;
  for (let n of [-1, 1])
    e.add(
      `pnStone`,
      new a(u, 0.2, 0.55)
        .rotateZ(-n * l)
        .translate(o / 2 + (n * (o / 2 - 0.15)) / 2, s + c / 2 + 0.08, -0.12),
      t,
      r,
    );
  (e.add(
    `pnStone`,
    new i(0.18, 10, 6).translate(o / 2, s + c + 0.25, -0.12),
    t,
    r,
  ),
    e.box(
      `pnSignChandlerDate`,
      t,
      r,
      o / 2 - 0.7,
      o / 2 + 0.7,
      s + 0.15,
      s + 0.6,
      0.05,
      0.06,
      { planar: (e, t) => [(e - o / 2 + 0.7) / 1.4, (t - s - 0.15) / 0.45] },
    ));
  let d = n.grid[0][0],
    f = o - 0.55;
  (e.box(G, t, d, f - 0.03, f + 0.03, 3.35, 3.42, 0, 0.62),
    e.add(`pnBrass`, new C(0.1, 0.19, 0.3, 12).translate(f, 3.1, 0.52), t, d),
    e.add(
      `pnBrass`,
      new i(0.1, 10, 5, 0, Math.PI * 2, 0, Math.PI / 2).translate(
        f,
        3.25,
        0.52,
      ),
      t,
      d,
    ),
    k(e, `pnRope`, t, d, [f, 2.95, 0.52], [f, 2.2, 0.55], 0.02));
}
function $m(e, t, n) {
  let r = n.grid[0][0];
  for (let n = 0; n < 3; n++)
    e.add(
      `pnRope`,
      new o(0.33, 0.1, 6, 14)
        .rotateX(Math.PI / 2)
        .translate(0.9, 0.25 + n * 0.19, 0.75),
      t,
      r,
    );
  (gm(e, t, r, 2.1, 0.7, 0.15), gm(e, t, n.grid[0][1], 3.4, 0.6, 0.15));
}
function eh() {
  return {
    key: `pnChandlery`,
    name: `Hesketh & Sons Ship Chandlers`,
    plain: 5913136,
    desc: `Sooty-brick corner chandlery: cut corner entrance under a two-storey oriel and dated pediment, green cast-iron shopfronts and awnings on two streets, corbelled cornice, ghost sign, ship’s bell and rope coils.`,
    W: 15,
    D: 14,
    chamfer: { l: 3 },
    style: {
      wall: `pnBrickSoot`,
      t: 0.35,
      bay: 3,
      floors: [4.4, 3.5, 3.5],
      parapet: 1.1,
      win: {
        w: 1.1,
        h: 2,
        sill: 0.8,
        type: `sash`,
        lites: [2, 2],
        frame: `pnTrimCream`,
        header: `pnStone`,
        headerH: 0.25,
        keystone: !0,
        sillMat: `pnStone`,
        rec: 0.15,
        curtains: 0.5,
      },
      store: { frame: `pnIronGreen`, fascia: `pnIronGreen` },
      awning: { mat: `awningGreen`, depth: 1.4, drop: 0.6 },
      door: {
        w: 1.3,
        h: 2.5,
        transom: 0.6,
        frame: `pnIronGreen`,
        glazed: !0,
        mat: `pnDoorGreen`,
        rec: 0.25,
      },
      base: { mat: `granite`, h: 0.5, out: 0.03 },
      belt: { mat: `pnStone`, h: 0.2, out: 0.06 },
      cornice: { type: `corbel`, mat: `pnBrickSoot`, h: 0.5, cap: `pnStone` },
      pilaster: { mat: `pnIronGreen`, w: 0.3, out: 0.1, floors: [0] },
    },
    front: {
      kinds: (e, t) => (e === 0 ? (t === 3 ? `door` : `store`) : `window`),
      signs: [
        {
          mat: `pnSignChandler`,
          rect: [0.35, 8.65, 3.6, 4.08],
          z0: 0.075,
          z1: 0.085,
        },
      ],
      extra: $m,
    },
    corner: {
      kinds: (e) => (e === 0 ? `door` : `solid`),
      extra: A(
        Le({
          bays: [0],
          floors: [1, 2],
          mat: `pnBrickSoot`,
          trim: `pnIronGreen`,
          depth: 0.75,
          cap: `pnStone`,
        }),
        Qm,
      ),
    },
    left: {
      kinds: (e, t) => (e === 0 ? (t === 0 ? `door` : `store`) : `window`),
      signs: [
        {
          mat: `pnSignChandler2`,
          rect: [2.96, 10.35, 3.6, 4.08],
          z0: 0.075,
          z1: 0.085,
        },
      ],
    },
    right: {
      kinds: (e) => (e === 0 ? `window` : `solid`),
      signs: [
        {
          mat: `pnSignChandlerGhost`,
          rect: [1, 12.3, 5, 10.6],
          z0: 0,
          z1: 0.005,
        },
      ],
    },
    back: { kinds: (e, t) => (e === 0 && t === 2 ? `door` : `window`) },
    extra: (e, t, n) => {
      (j(e, t, `pnBrickSoot`, 4.5, -4.5, n.H, n.H + 2.6, 1.2, 0.7),
        e.box(`glassGrey`, t, 0, -1.5, 1.5, n.H, n.H + 0.5, -2.5, -0.5),
        e.box(G, t, 0, -1.6, 1.6, n.H - 0.2, n.H + 0.1, -2.6, -0.4));
    },
  };
}
