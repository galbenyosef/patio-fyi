// assets__lab-buildings-view-DJVr8phc 50 — rough
// Lines 15598-15902 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function qi() {
  if (E.alSnow) return;
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
      rough: r.rough ?? 0.8,
      bump: 1.2,
      grime: r.grime ?? 0.2,
    });
  (Object.assign(E, {
    alSnow: n(16054008, 301, { blotch: 6, scale: 3, bump: 0.4, grime: 0 }),
    alStuccoWhite: n(15789282, 302, { blotch: 12, grime: 0.24 }),
    alStuccoOchre: n(14266974, 303),
    alStuccoCream: n(15260864, 304),
    alStuccoPink: n(14860200, 305),
    alConcrete: n(12104874, 306, { scale: 2.6, grime: 0.34 }),
    alStuccoGrey: n(13618372, 307),
    alRubble: {
      pat: `ashlar`,
      p: {
        base: 9077880,
        rows: 6,
        joint: 14,
        rustic: !0,
        jointK: 0.45,
        seed: 308,
      },
      scale: 2.3,
      rough: 0.95,
      bump: 2.6,
      grime: 0.3,
    },
    alRubbleWarm: {
      pat: `ashlar`,
      p: {
        base: 10259572,
        rows: 5,
        joint: 14,
        rustic: !0,
        jointK: 0.5,
        seed: 309,
      },
      scale: 1.5,
      rough: 0.95,
      bump: 2.8,
      grime: 0.3,
    },
    alGranite: {
      pat: `ashlar`,
      p: { base: 8223348, rows: 3, joint: 5, jointK: 0.6, seed: 310 },
      scale: 2,
      rough: 0.8,
      bump: 1,
      grime: 0.25,
    },
    alFalu: {
      pat: `batten`,
      p: { base: 8398878, seed: 311 },
      scale: 1.3,
      rough: 0.9,
      bump: 2.2,
      grime: 0.2,
    },
    alRorbu: i(9316896, 8, 312, { scale: 1.6 }),
    alTarWood: i(3022870, 8, 313, { scale: 1.8, rough: 0.7 }),
    alBoardGrey: i(8024680, 7, 314, { scale: 1.6, grime: 0.3 }),
    alBoardBrown: i(6965806, 7, 315, { scale: 1.6 }),
    alBoardGreen: e(6130282, 316),
    alBoardYellow: e(14200904, 317),
    alLapWhite: e(15657954, 318),
    alLapBlue: e(7311280, 319),
    alT111: i(11044448, 10, 320, { scale: 2.4, grime: 0.3 }),
    alPine: i(11830094, 6, 321),
    alTileBlack: r(2894894, 322, { scale: 0.42, rough: 0.7, metal: 0.05 }),
    alTileRed: r(10504236, 323, { scale: 0.42, rough: 0.8, metal: 0 }),
    alTinRed: r(9055780, 324),
    alTinGreen: r(3563077, 325),
    alTinGrey: r(9080464, 326, { metal: 0.55 }),
    alTinBlack: r(3026994, 327),
    alCladOrange: r(14180906, 328, {
      scale: 0.7,
      rough: 0.45,
      metal: 0.25,
      swap: !0,
    }),
    alCladRed: e(11022378, 329, { rows: 5, scale: 1.4, bump: 1.5 }),
    alCladWhite: e(15263972, 330, { rows: 5, scale: 1.4, bump: 1.5 }),
    alShingle: {
      pat: `shingle`,
      p: { base: 6969414, seed: 331 },
      scale: 1.2,
      rough: 0.95,
      bump: 3,
    },
    alShingleGrey: {
      pat: `shingle`,
      p: { base: 5921368, seed: 332 },
      scale: 1.4,
      rough: 0.95,
      bump: 3,
    },
    alAspen: {
      pat: `shingle`,
      p: { base: 11118236, seed: 333 },
      scale: 0.8,
      rough: 0.85,
      bump: 2.5,
    },
    alSlate: {
      pat: `shingle`,
      p: { base: 4475990, seed: 334 },
      scale: 0.9,
      rough: 0.7,
      bump: 2,
    },
    alZinc: t(8160652, { rough: 0.45, metal: 0.6 }),
    alCopper: t(5939338, { rough: 0.55, metal: 0.25 }),
    alGilt: t(13937224, { rough: 0.3, metal: 0.9 }),
    alGreen: t(3103292),
    alRed: t(11022378),
    alBlue: t(3104666),
    alOchre: t(13146682),
    alYellow: t(15251498, { rough: 0.35 }),
    alOrange: t(14706730, { rough: 0.35 }),
    alBlack: t(1974049, { rough: 0.6 }),
    alWhite: t(15921386),
    alRubber: t(1842204, { rough: 0.9 }),
    alSteel: t(6120552, { rough: 0.4, metal: 0.7 }),
    alLamp: t(16773320, { rough: 0.3, emissive: 16762976 }),
    alRedLight: t(16730672, { rough: 0.4, emissive: 16722448 }),
    alAmber: t(16756784, { rough: 0.4, emissive: 16748560 }),
    alPanelRib: e(12104356, 335, { rows: 10, scale: 1.1, bump: 1.4 }),
    alRadome: n(15921902, 336, { blotch: 4, scale: 2, grime: 0.1 }),
    alStripeRW: {
      pat: `stripes`,
      p: { base: 13117986, alt: 15921128 },
      size: 256,
      scale: 1.2,
      rough: 0.5,
    },
    alAwningBlue: {
      pat: `stripes`,
      p: { base: 2775712, alt: 15921128 },
      size: 256,
      scale: 1,
      rough: 0.9,
    },
    alCanvas: t(14208432, { rough: 0.95 }),
    alHay: t(12098136, { rough: 1 }),
    alFur: t(6965808, { rough: 1 }),
    alPlankWhite: i(15262936, 8, 345, { scale: 1.6, grime: 0.15 }),
    alPlankBlack: i(2368032, 8, 346, { scale: 1.6 }),
    alPolycarb: { clear: !0 },
    alPlastic: t(2779824, { rough: 0.4 }),
    alTinSilver: r(11843772, 347, { scale: 0.55, metal: 0.7, rough: 0.35 }),
    alTinBlue: r(3103370, 348),
    alDish: {
      pat: `paint`,
      p: { base: 15658730 },
      size: 128,
      scale: 1,
      rough: 0.5,
      side: 2,
    },
    alOrange2: {
      pat: `paint`,
      p: { base: 14706730 },
      size: 128,
      scale: 1,
      rough: 0.35,
      side: 2,
    },
  }),
    (E.alLogsHoney = {
      tex: Ni(8015402, 12092496, `#d6c8a8`, 341),
      scale: 1.2,
      rough: 0.85,
      grime: 0.2,
    }),
    (E.alLogsGrey = {
      tex: Ni(5920336, 10130570, null, 342),
      scale: 1.1,
      rough: 0.9,
      grime: 0.2,
    }),
    (E.alLogsDark = {
      tex: Ni(3811352, 7229492, `#b8a888`, 343),
      scale: 1.2,
      rough: 0.85,
      grime: 0.2,
    }),
    (E.alThatch = { tex: Pi(), scale: 1.6, rough: 1 }),
    (E.alTurf = { tex: Fi(), scale: 1.4, rough: 1 }),
    (E.alTurfWall = { tex: Ii(), scale: 1.6, rough: 1, grime: 0.15 }),
    (E.alStaveShingle = {
      tex: Li(2760212, 5914664, 344),
      scale: 0.9,
      rough: 0.85,
    }),
    (E.alPanel = { tex: Ui(), scale: 2.7, rough: 0.8, grime: 0.3 }),
    (E.alMural = { tex: zi(), rough: 0.9 }),
    (E.alPaintFrame = {
      tex: Ri(0.18, 0.82, 0.3, 0.8, `#e0c890`, `#8c6a3a`),
      rough: 0.9,
      cutout: !0,
      noShadow: !0,
    }),
    (E.alPaintFrameRed = {
      tex: Ri(0.18, 0.82, 0.3, 0.8, `#d8a898`, `#8a3226`),
      rough: 0.9,
      cutout: !0,
      noShadow: !0,
    }),
    (E.alNalich = {
      tex: Bi(0.2, 0.8, 0.3, 0.76),
      rough: 0.7,
      cutout: !0,
      noShadow: !0,
    }),
    (E.alChevron = { tex: Vi(`#b8322a`, `#f0ece2`), rough: 0.7 }),
    (E.alChevronGreen = { tex: Vi(`#2f5a3c`, `#f0ece2`), rough: 0.7 }),
    (E.alClock = { tex: Hi(), rough: 0.5 }),
    (E.alFretWhite = {
      tex: Wi(`#f2f0ea`),
      rough: 0.7,
      cutout: !0,
      noShadow: !0,
    }),
    (E.alGeranium = { tex: Gi(), scale: 0.5, rough: 0.9 }),
    (E.alBirch = { tex: Ki(), scale: 0.6, rough: 0.9 }));
}
var Ji = (e, t, n) => E[e] || T(e, t, n),
  Yi = { font: `"Arial Black", Impact, sans-serif`, weight: 900 };
function Xi(e, t, n) {
  if (n >= e.H - 0.001 && e.gableCell) return e.gableCell;
  let r = 0;
  for (; r < e.top && e.ys[r + 1] <= n;) r++;
  return e.grid[r][Di(e, t)];
}
function Zi(e, t, n, r, i, a, o, s, c, l, u) {
  let d = o;
  for (let f of [...r.ys.slice(1), r.H]
    .filter((e) => e > o + 0.001 && e < s - 0.001)
    .concat([s]))
    (f > d + 0.001 &&
      e.box(t, n, Xi(r, (i + a) / 2, (d + f) / 2), i, a, d, f, c, l, u),
      (d = f));
}
function Qi(e, t, n) {
  let r = [];
  for (let i = 0; i < e.nb; i++) {
    let a = i === 0 ? t : Math.max(t, i * e.bw),
      o = i === e.nb - 1 ? n : Math.min(n, (i + 1) * e.bw);
    o - a > 0.001 && r.push([a, o, i]);
  }
  return r;
}
function $i(e, t, n, r, i = `window`) {
  for (let a = 0; a <= e.top; a++)
    for (let o = 0; o < e.nb; o++) {
      if (t(a, o, e.nb) !== i) continue;
      let s = (a === 0 && n.win0) || n.win,
        c = Ei(e, a),
        l = (o + 0.5) * e.bw,
        u = Math.min(s.w, e.bw - 0.5),
        d = Math.min(s.h, c - s.sill - 0.35),
        f = e.ys[a] + s.sill;
      r(e.grid[a][o], l - u / 2, l + u / 2, f, f + d, a, o);
    }
}
