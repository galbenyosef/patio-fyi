// assets__homes-styles-VxExOKpz 07 — rough
// Lines 2261-2582 of readable/assets__homes-styles-VxExOKpz.pretty.js (statement-aligned).
function je() {
  if (y.hLogs) return;
  let e = (e, t, n = {}) => ({
      pat: `lap`,
      p: { base: e, seed: t, rows: n.rows },
      scale: n.scale ?? 1.2,
      rough: 0.7,
      bump: n.bump ?? 2.5,
      grime: 0.15,
    }),
    t = (e, t = {}) => ({
      pat: `paint`,
      p: { base: e },
      size: 128,
      scale: 1,
      rough: t.rough ?? 0.5,
      metal: t.metal ?? 0,
      emissive: t.emissive,
    }),
    n = (e, t, n = {}) => ({
      pat: `stucco`,
      p: { base: e, seed: t, blotch: n.blotch },
      scale: n.scale ?? 2.2,
      rough: 0.94,
      bump: n.bump ?? 0.8,
      grime: n.grime ?? 0.3,
    }),
    r = (e, t, n = {}) => ({
      pat: `corrugated`,
      p: { base: e, seed: t },
      scale: n.scale ?? 0.9,
      rough: n.rough ?? 0.5,
      metal: n.metal ?? 0.4,
      bump: 2.5,
      swap: n.swap,
    }),
    i = (e, t, n, r = {}) => ({
      pat: `planks`,
      p: { base: e, n: t, seed: n },
      scale: r.scale ?? 1.2,
      rough: r.rough ?? 0.75,
      bump: 1.2,
      grime: r.grime ?? 0.2,
    });
  (Object.assign(y, {
    hShingleCedar: {
      pat: `shingle`,
      p: { base: 9069632, seed: 101 },
      scale: 1.1,
      rough: 0.9,
      bump: 2.5,
      grime: 0.18,
    },
    hShingleBrown: {
      pat: `shingle`,
      p: { base: 5061424, seed: 102 },
      scale: 1.4,
      rough: 0.95,
      bump: 3,
    },
    hShingleGrey: {
      pat: `shingle`,
      p: { base: 6118232, seed: 103 },
      scale: 1.4,
      rough: 0.95,
      bump: 3,
    },
    hShingleRed: {
      pat: `shingle`,
      p: { base: 8010288, seed: 104 },
      scale: 1.2,
      rough: 0.95,
      bump: 3,
    },
    hSlate: {
      pat: `shingle`,
      p: { base: 4608090, seed: 105 },
      scale: 0.9,
      rough: 0.7,
      bump: 2,
    },
    hLapTeal: e(6261892, 106),
    hLapWhite: e(15723747, 107),
    hLapYellow: e(14729050, 108),
    hLapBlue: e(7317439, 109),
    hBattenBrown: {
      pat: `batten`,
      p: { base: 8874058, seed: 110 },
      scale: 1.6,
      rough: 0.9,
      bump: 2.2,
      grime: 0.3,
    },
    hRedwood: i(8145456, 8, 111, { scale: 1.6 }),
    hCladDark: i(2895410, 12, 112, { scale: 2.4, rough: 0.55 }),
    hCladCedar: i(11105354, 12, 113, { scale: 2.4 }),
    hPine: i(11830094, 6, 114),
    hStuccoAdobe: n(12158045, 115, {
      blotch: 40,
      scale: 2.6,
      bump: 1.4,
      grime: 0.42,
    }),
    hStuccoAqua: n(9228226, 116),
    hStuccoWhite: n(15855076, 117, { blotch: 12, grime: 0.24 }),
    hStuccoBeige: n(14075040, 118),
    hStuccoPeach: n(15250574, 136),
    hBrick70s: {
      pat: `brick`,
      p: { base: 7095857, mortar: 8747885, vary: 0.2, burnt: 0.1, seed: 119 },
      scale: 1.2,
      rough: 0.92,
      bump: 1.6,
      grime: 0.3,
    },
    hBrickCream: {
      pat: `brick`,
      p: {
        base: 13481100,
        mortar: 14472388,
        vary: 0.12,
        burnt: 0.02,
        seed: 120,
      },
      scale: 1.2,
      rough: 0.9,
      bump: 1.4,
      grime: 0.3,
    },
    hFieldstone: {
      pat: `ashlar`,
      p: {
        base: 9340538,
        rows: 5,
        joint: 12,
        rustic: !0,
        jointK: 0.45,
        seed: 121,
      },
      scale: 1.3,
      rough: 0.95,
      bump: 2.6,
      grime: 0.3,
    },
    hTerraTile: r(11885107, 122, { scale: 0.45, rough: 0.8, metal: 0 }),
    hTinRed: r(9386796, 123),
    hTinGreen: r(4025163, 124),
    hTinRust: r(8215108, 125, { metal: 0.3, rough: 0.7 }),
    hStainless: r(13094096, 126, {
      scale: 0.35,
      rough: 0.28,
      metal: 0.85,
      swap: !0,
    }),
    hConcreteWhite: n(13881544, 127, { scale: 2.4, grime: 0.3 }),
    hSnow: n(16054008, 128, { blotch: 6, scale: 3, bump: 0.4, grime: 0 }),
    hChrome: t(14870250, { rough: 0.15, metal: 0.95 }),
    hZinc: t(8160652, { rough: 0.45, metal: 0.6 }),
    hGilt: t(13608261, { rough: 0.3, metal: 0.9 }),
    hTrimWine: t(7218227),
    hTrimBlue: t(2907542),
    hTrimOlive: t(5595194),
    hTrimRed: t(10695210),
    hShopBlue: t(1913942, { rough: 0.35 }),
    hEnamelGreen: t(2783822, { rough: 0.3, metal: 0.1 }),
    hEnamelTeal: t(3115660, { rough: 0.3, metal: 0.1 }),
    hEnamelOrange: t(14706730, { rough: 0.3, metal: 0.1 }),
    hEnamelYellow: t(15251498, { rough: 0.3, metal: 0.1 }),
    hEnamelRed: t(11740702, { rough: 0.3, metal: 0.1 }),
    hRubber: t(1842204, { rough: 0.9 }),
    hDoorBlue: i(3041960, 5, 129),
    hDoorRed: i(9316898, 5, 130),
    hDoorGreen: i(2968122, 5, 131),
    hDoorOrange: i(13657642, 5, 132),
    hShutterBlue: e(4163240, 133, { rows: 16, scale: 1, bump: 1.2 }),
    hShutterBlack: e(2303015, 134, { rows: 16, scale: 1, bump: 1.2 }),
    hShutterSage: e(7178858, 135, { rows: 16, scale: 1, bump: 1.2 }),
    hNeonRed: t(16734792, { rough: 0.4, emissive: 16722458 }),
    hNeonBlue: t(8445183, { rough: 0.4, emissive: 2799359 }),
    hNeonPink: t(16743096, { rough: 0.4, emissive: 16727190 }),
    hNeonYellow: t(16769146, { rough: 0.4, emissive: 16756768 }),
    hGlobe: t(16774880, { rough: 0.3, emissive: 16767120 }),
    hNeonGreen: t(9306024, { rough: 0.4, emissive: 2817898 }),
    hShutterYellow: e(14264636, 137, { rows: 16, scale: 1, bump: 1.2 }),
    hAwningBlue: {
      pat: `stripes`,
      p: { base: 2047866, alt: 15788760 },
      size: 256,
      scale: 1,
      rough: 0.95,
    },
    hGlassBlock: {
      pat: `brick`,
      p: { base: 13623523, mortar: 10923952, vary: 0.06, burnt: 0, seed: 138 },
      scale: 0.9,
      rough: 0.15,
      metal: 0.1,
      emissive: 1976878,
    },
  }),
    (y.hFishScale = { tex: be(), scale: 0.9, rough: 0.85 }),
    (y.hLogs = { tex: xe(), scale: 1.2, rough: 0.85, grime: 0.2 }),
    (y.hThatch = { tex: Se(), scale: 1.6, rough: 1 }),
    (y.hBamboo = { tex: Ce(), scale: 1, rough: 0.9, grime: 0.2 }),
    (y.hFret = { tex: we(`#f4f1ea`), rough: 0.6, cutout: !0, noShadow: !0 }),
    (y.hLattice = { tex: Te(`#e9e4d6`), rough: 0.8, cutout: !0, noShadow: !0 }),
    (y.hCarvedRail = {
      tex: Ee(5913122),
      rough: 0.8,
      cutout: !0,
      noShadow: !0,
    }),
    (y.hCarvedPine = {
      tex: Ee(11039806),
      rough: 0.8,
      cutout: !0,
      noShadow: !0,
    }),
    (y.hIronLace = {
      tex: De(),
      rough: 0.5,
      metal: 0.4,
      cutout: !0,
      noShadow: !0,
    }),
    (y.hHeartShutter = { tex: Oe(3103290), rough: 0.7 }),
    (y.hGeranium = { tex: ke(), scale: 0.5, rough: 0.9 }),
    (y.hPole = { tex: Ae(), rough: 0.3 }));
}
function H(e, t, n) {
  if (n >= e.H - 0.001 && e.gableCell) return e.gableCell;
  let r = 0;
  for (; r < e.top && e.ys[r + 1] <= n;) r++;
  return e.grid[r][L(e, t)];
}
function U(e, t, n, r, i, a, o, s, c, l, u) {
  let d = o;
  for (let f of [...r.ys.slice(1), r.H]
    .filter((e) => e > o + 0.001 && e < s - 0.001)
    .concat([s]))
    (f > d + 0.001 &&
      e.box(t, n, H(r, (i + a) / 2, (d + f) / 2), i, a, d, f, c, l, u),
      (d = f));
}
function W(e, t, n) {
  let r = [];
  for (let i = 0; i < e.nb; i++) {
    let a = i === 0 ? t : Math.max(t, i * e.bw),
      o = i === e.nb - 1 ? n : Math.min(n, (i + 1) * e.bw);
    o - a > 0.001 && r.push([a, o, i]);
  }
  return r;
}
function Me(t, n, r, i, a, o, s, c) {
  let l = i.trim || `trimWhite`,
    u = i.col || `post`;
  if (u === `craft`) {
    let e = 0.3,
      u = s + 0.95;
    (t.box(i.pier || `hFieldstone`, n, r, a - e, a + e, 0, u, o - e, o + e),
      t.box(
        `concrete`,
        n,
        r,
        a - e - 0.05,
        a + e + 0.05,
        u,
        u + 0.1,
        o - e - 0.05,
        o + e + 0.05,
      ),
      t.add(
        l,
        R(
          new p(0.17, 0.27, c - u - 0.1, 4)
            .rotateY(Math.PI / 4)
            .translate(a, (u + 0.1 + c) / 2, o),
        ),
        n,
        r,
      ),
      t.box(l, n, r, a - 0.16, a + 0.16, c - 0.12, c, o - 0.16, o + 0.16));
  } else if (u === `turned`) {
    (t.box(l, n, r, a - 0.09, a + 0.09, s, s + 0.45, o - 0.09, o + 0.09),
      t.add(
        l,
        new p(0.055, 0.075, c - s - 0.8, 8).translate(
          a,
          (s + 0.45 + c - 0.35) / 2,
          o,
        ),
        n,
        r,
      ));
    for (let i of [s + 0.9, c - 0.6])
      t.add(l, new e(0.085, 8, 6).translate(a, i, o), n, r);
    t.box(l, n, r, a - 0.09, a + 0.09, c - 0.35, c, o - 0.09, o + 0.09);
  } else if (u === `log`)
    t.add(
      i.colMat || `wood`,
      new p(0.12, 0.14, c - s, 8).translate(a, (s + c) / 2, o),
      n,
      r,
    );
  else {
    let e = i.colW || 0.08;
    if (
      (t.box(i.colMat || l, n, r, a - e, a + e, s, c, o - e, o + e),
      i.col === `timber`)
    )
      for (let e of [-1, 1])
        O(
          t,
          i.colMat || l,
          n,
          r,
          [a, c - 0.8, o],
          [a + e * 0.7, c - 0.08, o],
          0.1,
        );
  }
}
