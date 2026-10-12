// assets__lab-buildings-view-DJVr8phc 127 — rough
// Lines 42326-42660 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function vf() {
  if (E.euOak) return;
  let e = (e, t = {}) => ({
      pat: `paint`,
      p: { base: e },
      size: 128,
      scale: 1,
      rough: t.rough ?? 0.5,
      metal: t.metal ?? 0,
      emissive: t.emissive,
      grime: t.grime,
    }),
    t = (e, t, n = {}) => ({
      pat: `stucco`,
      p: { base: e, seed: t, blotch: n.blotch, lines: n.lines },
      scale: n.scale ?? 2.2,
      rough: 0.94,
      bump: n.bump ?? 0.8,
      grime: n.grime ?? 0.3,
    }),
    n = (e, t, n, r = {}) => ({
      pat: `brick`,
      p: {
        base: e,
        mortar: t,
        vary: r.vary ?? 0.22,
        burnt: r.burnt ?? 0.08,
        seed: n,
      },
      scale: r.scale ?? 1.2,
      rough: 0.92,
      bump: 1.6,
      grime: r.grime ?? 0.32,
    }),
    r = (e, t, n = {}) => ({
      pat: `ashlar`,
      p: {
        base: e,
        rows: n.rows ?? 4,
        joint: n.joint ?? 4,
        rustic: n.rustic,
        jointK: n.jointK,
        seed: t,
      },
      scale: n.scale ?? 1.8,
      rough: 0.9,
      bump: n.bump ?? 1.2,
      grime: n.grime ?? 0.3,
    }),
    i = (e, t, n = {}) => ({
      pat: `shingle`,
      p: { base: e, seed: t },
      scale: n.scale ?? 1,
      rough: n.rough ?? 0.9,
      bump: n.bump ?? 2.5,
      metal: n.metal,
    }),
    a = (e, t, n, r = {}) => ({
      pat: `planks`,
      p: { base: e, n: t, seed: n },
      scale: r.scale ?? 1.2,
      rough: r.rough ?? 0.75,
      bump: 1.2,
      grime: r.grime ?? 0.15,
    }),
    o = (e, t) => ({
      pat: `lap`,
      p: { base: e, seed: t, rows: 16 },
      scale: 1,
      rough: 0.7,
      bump: 1.2,
    });
  (Object.assign(E, {
    euInfillWhite: t(15657176, 501, { blotch: 10, grime: 0.2 }),
    euInfillOchre: t(14463850, 502, { grime: 0.25 }),
    euOak: a(3810838, 3, 503, { scale: 1, rough: 0.8 }),
    euTimberRed: a(8006688, 3, 504, { scale: 1, rough: 0.7 }),
    euTimberBlack: a(1973016, 3, 505, { scale: 1, rough: 0.6 }),
    euBoards: a(5914664, 10, 506, { scale: 2.4 }),
    euTileRed: i(10242608, 507, { scale: 0.8 }),
    euTileBrown: i(7224104, 508, { scale: 0.9 }),
    euTileClay: i(9064504, 509, { scale: 0.9 }),
    euPantile: {
      pat: `corrugated`,
      p: { base: 11821370, seed: 510 },
      scale: 0.45,
      rough: 0.85,
      metal: 0,
      bump: 2.5,
    },
    euSlate: i(4146768, 511, { scale: 0.75, rough: 0.7, bump: 2 }),
    euGlazedTile: i(2763822, 512, {
      scale: 0.8,
      rough: 0.35,
      metal: 0.2,
      bump: 2,
    }),
    euBrickDutch: n(8272424, 12365980, 513, { scale: 1 }),
    euBrickDutchDark: n(5712159, 11050122, 514, { scale: 1, burnt: 0.14 }),
    euBrickStock: n(13018218, 13879731, 515, { vary: 0.18, burnt: 0.12 }),
    euBrickVict: n(11223852, 14077632, 516, { vary: 0.14, burnt: 0.03 }),
    euBrickGothic: n(7089184, 9340020, 517, {
      scale: 1.5,
      burnt: 0.22,
      vary: 0.3,
    }),
    euBrickCream: n(14469536, 14735558, 518, { vary: 0.1, burnt: 0.02 }),
    euBrickSoft: n(10115646, 13155496, 519, { vary: 0.25 }),
    euBrickSalmon: n(12745306, 14866630, 520, { vary: 0.12, burnt: 0.02 }),
    euBrickGlazed: n(2374192, 4868676, 521, { vary: 0.2, burnt: 0.3 }),
    euSandstone: r(14075040, 522, { rows: 3, joint: 3, scale: 2.2 }),
    euLimeWarm: r(14471086, 523, { rows: 3, joint: 3, scale: 2.4, bump: 0.8 }),
    euLimeRust: r(13812898, 524, {
      rows: 3,
      joint: 14,
      rustic: !0,
      jointK: 0.6,
      scale: 2.2,
      bump: 2.5,
    }),
    euRustica: r(10129274, 525, {
      rows: 3,
      joint: 18,
      rustic: !0,
      jointK: 0.5,
      scale: 2.4,
      bump: 3.5,
      grime: 0.4,
    }),
    euPietra: r(12168596, 526, { rows: 3, joint: 3, scale: 2.6, bump: 0.8 }),
    euTuscan: r(10455920, 527, {
      rows: 7,
      joint: 7,
      rustic: !0,
      jointK: 0.6,
      scale: 1.8,
      bump: 2,
    }),
    euGranite: r(9999498, 528, { rows: 3, joint: 4, scale: 2.2 }),
    euSandRed: r(10114118, 529, { rows: 4, joint: 3, scale: 2 }),
    euGateStone: r(9209724, 530, {
      rows: 5,
      joint: 9,
      rustic: !0,
      jointK: 0.55,
      scale: 2,
      bump: 2.5,
      grime: 0.4,
    }),
    euRubble: r(8747626, 531, {
      rows: 6,
      joint: 12,
      rustic: !0,
      jointK: 0.45,
      scale: 1.4,
      bump: 2.8,
    }),
    euLioz: r(15525590, 532, {
      rows: 2,
      joint: 2,
      scale: 1.6,
      bump: 0.4,
      grime: 0.2,
    }),
    euStuccoRose: t(14263200, 533),
    euStuccoYellow: t(14860130, 534),
    euStuccoAlmagre: t(10702906, 535, { grime: 0.35 }),
    euStuccoSage: t(10007958, 536),
    euStuccoParis: t(14997695, 537, { blotch: 16 }),
    euStuccoOchre: t(14263891, 538),
    euStuccoCream: t(15524552, 539, { blotch: 8, grime: 0.2 }),
    euStuccoRust: t(15129796, 540, { lines: 6, bump: 1.4 }),
    euRenderYellow: t(15123020, 541, { grime: 0.25 }),
    euRenderWhite: t(15789282, 542, { blotch: 10 }),
    euPlaster: t(15920868, 543, { blotch: 6, grime: 0.15 }),
    euPaintGreen: e(1918513, { rough: 0.35 }),
    euPaintOxblood: e(6167068, { rough: 0.35 }),
    euPaintNavy: e(1845828, { rough: 0.35 }),
    euPaintBlack: e(1513498, { rough: 0.3 }),
    euPaintBottle: e(2177326, { rough: 0.35 }),
    euPaintTeal: e(3107430, { rough: 0.35, metal: 0.2 }),
    euPaintCream: e(15261640, { rough: 0.5 }),
    euPaintRed: e(10103332, { rough: 0.4 }),
    euHole: e(1315344, { rough: 1 }),
    euGilt: e(13937228, { rough: 0.28, metal: 0.9 }),
    euCopper: e(6265478, { rough: 0.6, metal: 0.3 }),
    euLead: e(6975090, { rough: 0.5, metal: 0.5 }),
    euZinc: e(9080981, { rough: 0.45, metal: 0.6 }),
    euLamp: e(16773320, { rough: 0.3, emissive: 16762992 }),
    euNeonGreen: e(7012234, { rough: 0.4, emissive: 2162512 }),
    euCanvas: e(14735036, { rough: 0.95 }),
    euApple: e(11545122, { rough: 0.6 }),
    euOrange: e(14715434, { rough: 0.6 }),
    euCabbage: e(6986298, { rough: 0.7 }),
    euShutterGreen: o(3037756, 544),
    euShutterGrey: o(9082782, 545),
    euShutterRed: o(8006178, 546),
    euShutterBlue: o(3825546, 547),
    euDoorOak: a(4861466, 5, 548),
    euDoorGreen: a(2377786, 5, 549),
    euDoorBlue: a(2047850, 5, 550),
    euDoorRed: a(8003354, 5, 551),
    euDoorBlack: a(1710620, 5, 552, { rough: 0.35 }),
    euDoorBottle: a(2177326, 5, 553, { rough: 0.4 }),
    euAwnRed: {
      pat: `stripes`,
      p: { base: 10101284, alt: 15787728 },
      size: 256,
      scale: 1,
      rough: 0.95,
    },
    euAwnGreen: {
      pat: `stripes`,
      p: { base: 2907198, alt: 15787728 },
      size: 256,
      scale: 1,
      rough: 0.95,
    },
    euAwnOchre: {
      pat: `stripes`,
      p: { base: 13144110, alt: 15919832 },
      size: 256,
      scale: 1,
      rough: 0.95,
    },
  }),
    (E.euFlowers = { tex: cf([350, 355, 10]), scale: 0.5, rough: 0.9 }),
    (E.euFlowersPink = { tex: cf([320, 290, 45]), scale: 0.5, rough: 0.9 }),
    (E.euClockFace = { tex: lf(), rough: 0.5, glow: 0.35 }),
    (E.euAzulejo = {
      tex: uf(),
      scale: 0.6,
      rough: 0.25,
      metal: 0.1,
      grime: 0.18,
    }),
    (E.euHerring = { tex: df(), scale: 1.2, rough: 0.9, grime: 0.3 }),
    (E.euIronBal = {
      tex: ff(!1),
      rough: 0.5,
      metal: 0.4,
      cutout: !0,
      noShadow: !0,
    }),
    (E.euIronWhip = {
      tex: ff(!0),
      rough: 0.5,
      metal: 0.4,
      cutout: !0,
      noShadow: !0,
    }),
    (E.euLeaded = {
      tex: pf(),
      rough: 0.5,
      metal: 0.3,
      cutout: !0,
      noShadow: !0,
    }),
    (E.euSgraffito = { tex: mf(), scale: 1.6, rough: 0.9, grime: 0.2 }),
    (E.euArtPanel = { tex: hf(), rough: 0.7 }),
    (E.euBooks = { tex: gf(), rough: 0.85 }),
    (E.euFlagFR = { tex: _f([`#20398a`, `#f2f2ee`, `#c8202a`]), rough: 0.9 }),
    (E.euFlagCity = { tex: _f([`#c8202a`, `#f2f2ee`]), rough: 0.9 }));
}
var yf = (e) => e.map(([e, t]) => new h(e, t));
function bf(e, t, n, r, i, a, o) {
  e.add(
    t,
    new S(i, { depth: o - a, bevelEnabled: !1, curveSegments: 10 }).translate(
      0,
      0,
      a,
    ),
    n,
    r,
  );
}
var xf = (e, t, n, r, i, a, o) => bf(e, t, n, r, new C(yf(i)), a, o);
function Sf(e, t, n) {
  if (n >= e.H - 0.001 && e.gableCell) return e.gableCell;
  let r = 0;
  for (; r < e.top && e.ys[r + 1] <= n;) r++;
  return e.grid[r][U(e, t)];
}
function Cf(e, t, n, r, i, a, o, c, l, u = l, d = 12) {
  e.add(t, new s(u, l, c - o, d).translate(i, (o + c) / 2, a), n, r);
}
function wf(e, t, n, i, a, o, s, c, l, u, d) {
  let f = Math.hypot(s - a, c - o),
    p = Math.atan2(-(c - o), s - a);
  e.add(
    t,
    new r(f, u - l, d)
      .rotateY(p)
      .translate((a + s) / 2, (l + u) / 2, (o + c) / 2),
    n,
    i,
  );
}
function Tf(e, t, n, r, i, a, o) {
  let s = new C(yf(i.map(([e, t]) => [e, -t])));
  e.add(
    t,
    new S(s, { depth: o - a, bevelEnabled: !1 })
      .rotateX(-Math.PI / 2)
      .translate(0, a, 0),
    n,
    r,
  );
}
function Ef(e, t, n, r, i, a, o, s, l, u) {
  let d = [
      [-i, o, a],
      [i, o, a],
      [i, o, -a],
      [-i, o, -a],
    ],
    f = [
      [-s, u, l],
      [s, u, l],
      [s, u, -l],
      [-s, u, -l],
    ],
    p = [],
    m = (e, t, n, r) => p.push(e, t, n, e, n, r);
  for (let e = 0; e < 4; e++) {
    let t = (e + 1) % 4;
    m(d[e], d[t], f[t], f[e]);
  }
  (m(f[0], f[1], f[2], f[3]), m(d[0], d[3], d[2], d[1]));
  let h = new c();
  (h.setAttribute(`position`, new ce(p.flat(), 3)),
    h.computeVertexNormals(),
    e.add(r, h, t, n));
}
