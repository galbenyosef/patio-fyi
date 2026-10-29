// assets__lab-buildings-view-DY6ytqNM 96 — rough
// Lines 29235-29556 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function ul() {
  if (O.asKawara) return;
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
      pat: `planks`,
      p: { base: e, n: t, seed: n },
      scale: r.scale ?? 1.2,
      rough: r.rough ?? 0.8,
      bump: 1.2,
      grime: r.grime ?? 0.2,
      swap: r.swap,
    }),
    r = (e, t, n = {}) => ({
      pat: `lap`,
      p: { base: e, seed: t, rows: n.rows },
      scale: n.scale ?? 1.2,
      rough: n.rough ?? 0.7,
      bump: n.bump ?? 2,
      grime: n.grime ?? 0.15,
      metal: n.metal,
    }),
    i = (e, t, n = {}) => ({
      pat: `corrugated`,
      p: { base: e, seed: t },
      scale: n.scale ?? 0.9,
      rough: n.rough ?? 0.5,
      metal: n.metal ?? 0.4,
      bump: 2.5,
      swap: n.swap,
    }),
    a = (e, t, n, r = {}) => ({
      pat: `brick`,
      p: {
        base: e,
        mortar: t,
        vary: r.vary ?? 0.14,
        burnt: r.burnt ?? 0.04,
        seed: n,
      },
      scale: r.scale ?? 1.2,
      rough: 0.92,
      bump: 1.4,
      grime: r.grime ?? 0.3,
    }),
    o = (e, t, n = {}) => ({
      pat: `ashlar`,
      p: {
        base: e,
        rows: n.rows ?? 4,
        joint: n.joint ?? 5,
        rustic: n.rustic,
        jointK: n.jointK,
        seed: t,
      },
      scale: n.scale ?? 1.6,
      rough: 0.92,
      bump: n.bump ?? 1.4,
      grime: 0.3,
    });
  (Object.assign(O, {
    asCharWood: n(3024416, 8, 401, { scale: 1.4 }),
    asCedar: n(9659454, 8, 402, { scale: 1.4 }),
    asWoodBrown: n(7031344, 7, 403),
    asTimber: n(4862498, 3, 404, { scale: 1 }),
    asWoodPale: n(12095582, 6, 405),
    asPlankBlue: n(5210016, 10, 406, { scale: 1.6 }),
    asPlasterWhite: t(15789282, 407, { blotch: 10, grime: 0.26 }),
    asPlasterEarth: t(12165241, 408, { blotch: 30, grime: 0.34 }),
    asStuccoYellow: t(15123294, 409),
    asStuccoMint: t(10474684, 410, { blotch: 14 }),
    asStuccoPink: t(14853038, 411, { blotch: 14 }),
    asStuccoCream: t(15655100, 412),
    asStuccoSky: t(9421016, 413, { blotch: 18 }),
    asConcreteStain: t(10328722, 414, { blotch: 70, grime: 0.45, lines: 3 }),
    asConcreteOld: t(12168334, 415, { blotch: 60, grime: 0.42, scale: 2.8 }),
    asConcreteLight: t(13289406, 416, { blotch: 24, grime: 0.32, lines: 2 }),
    asBrickGrey: a(7106676, 10263960, 417, { vary: 0.1, burnt: 0.02 }),
    asBrickBrown: a(8800559, 10129280, 418, { vary: 0.2, burnt: 0.08 }),
    asGranite: o(9407622, 419, { rows: 3, joint: 4 }),
    asFieldstone: o(8222572, 420, {
      rows: 5,
      joint: 12,
      rustic: !0,
      jointK: 0.45,
      scale: 1.3,
      bump: 2.4,
    }),
    asTuff: o(11048306, 421, { rows: 4, joint: 5, scale: 1.8 }),
    asZinc: i(10133667, 422, { swap: !0 }),
    asTinRed: i(9321258, 423, { swap: !0 }),
    asTinBlue: i(4157344, 424),
    asTinRust: i(8215108, 425, { metal: 0.3, rough: 0.7 }),
    asSteelGreen: r(4160858, 426, {
      rows: 5,
      scale: 1.2,
      rough: 0.45,
      metal: 0.3,
      bump: 1,
    }),
    asLouvreGreen: r(3894098, 427, { rows: 18, scale: 1, bump: 1.2 }),
    asLouvreBlue: r(4157338, 428, { rows: 18, scale: 1, bump: 1.2 }),
    asLouvreBrown: r(6965806, 429, { rows: 18, scale: 1, bump: 1.2 }),
    asPanelWhite: r(15526628, 430, {
      rows: 3,
      scale: 1.8,
      rough: 0.35,
      bump: 0.6,
    }),
    asVermilion: e(12861482, { rough: 0.55 }),
    asRedLacquer: e(9314074, { rough: 0.35 }),
    asBlackLacquer: e(1841688, { rough: 0.35 }),
    asGold: e(13673020, { rough: 0.3, metal: 0.9 }),
    asJade: e(3045980, { rough: 0.4 }),
    asTeal: e(2916230, { rough: 0.4 }),
    asWhite: e(15658730, { rough: 0.45 }),
    asStainless: e(13225682, { rough: 0.25, metal: 0.85 }),
    asBronze: e(6967856, { rough: 0.35, metal: 0.85 }),
    asIndigo: e(2043210, { rough: 0.9 }),
    asOchre: e(13144110, { rough: 0.6 }),
    asCharcoal: e(3354926, { rough: 0.7 }),
    asPlasticRed: e(13642276, { rough: 0.4 }),
    asPlasticBlue: e(2776776, { rough: 0.4 }),
    asPlasticYellow: e(15253536, { rough: 0.4 }),
    asPlasticGreen: e(3842122, { rough: 0.4 }),
    asOnggi: e(5911584, { rough: 0.25, metal: 0.05 }),
    asPineGreen: e(3033642, { rough: 0.9 }),
    asLeaf: e(5212730, { rough: 0.9 }),
    asLanternRed: e(14696490, { rough: 0.7, emissive: 9443336 }),
    asLanternWhite: e(16051416, { rough: 0.7, emissive: 6969912 }),
    asBulb: e(16773312, { rough: 0.4, emissive: 16762976 }),
    asLampRed: e(16728112, { rough: 0.3, emissive: 14686216 }),
    asNeonPink: e(16743096, { rough: 0.4, emissive: 16727190 }),
    asNeonCyan: e(8448255, { rough: 0.4, emissive: 2144511 }),
    asNeonGreen: e(9306024, { rough: 0.4, emissive: 2817898 }),
    asNeonYellow: e(16769146, { rough: 0.4, emissive: 16756768 }),
  }),
    (O.asKawara = {
      tex: Jc(5988196, 431),
      scale: 1.6,
      rough: 0.55,
      metal: 0.15,
    }),
    (O.asTileGrey = { tex: Jc(8093052, 432), scale: 1.4, rough: 0.8 }),
    (O.asGiwa = { tex: Jc(4145734, 433), scale: 1.5, rough: 0.7, metal: 0.05 }),
    (O.asTileGreen = {
      tex: Jc(3111498, 434),
      scale: 1.2,
      rough: 0.35,
      metal: 0.1,
    }),
    (O.asTileTerra = { tex: Jc(11556142, 435), scale: 1.2, rough: 0.75 }),
    (O.asTileOrange = { tex: Jc(13660202, 436), scale: 1.2, rough: 0.45 }),
    (O.asThatch = { tex: Yc(), scale: 1.6, rough: 1 }),
    (O.asKoshi = {
      tex: Xc(3811868, 4, 0.55),
      rough: 0.8,
      cutout: !0,
      noShadow: !0,
    }),
    (O.asSlatScreen = {
      tex: Xc(6965804, 4, 0.62),
      scale: 0.6,
      rough: 0.85,
      cutout: !0,
      noShadow: !0,
    }),
    (O.asBambooFence = {
      tex: Xc(10123842, 8, 0.8),
      rough: 0.8,
      cutout: !0,
      noShadow: !0,
    }),
    (O.asShoji = { tex: Zc(), rough: 0.9, glow: 0.12 }),
    (O.asNamako = { tex: Qc(), scale: 0.9, rough: 0.6 }),
    (O.asCapiz = { tex: $c(), rough: 0.5, glow: 0.1 }),
    (O.asFretRed = {
      tex: el(`#8e1f1a`),
      rough: 0.5,
      cutout: !0,
      noShadow: !0,
    }),
    (O.asFretBrown = {
      tex: el(`#4a3020`),
      rough: 0.6,
      cutout: !0,
      noShadow: !0,
    }),
    (O.asGrille = {
      tex: tl(`#2e3438`),
      rough: 0.5,
      metal: 0.4,
      cutout: !0,
      noShadow: !0,
    }),
    (O.asGrilleRust = {
      tex: tl(`#6e4630`),
      rough: 0.7,
      metal: 0.3,
      cutout: !0,
      noShadow: !0,
    }),
    (O.asTebar = { tex: nl(`#e8dcc0`), rough: 0.7, cutout: !0, noShadow: !0 }),
    (O.asBaluster = {
      tex: rl(`#5a3a22`),
      rough: 0.7,
      cutout: !0,
      noShadow: !0,
    }),
    (O.asBalusterWhite = {
      tex: rl(`#ece6d8`),
      rough: 0.6,
      cutout: !0,
      noShadow: !0,
    }),
    (O.asMosaicWhite = {
      tex: il(15131610, 441),
      scale: 0.8,
      rough: 0.35,
      grime: 0.3,
    }),
    (O.asMosaicMint = {
      tex: il(10931131, 442),
      scale: 0.8,
      rough: 0.35,
      grime: 0.3,
    }),
    (O.asMosaicBeige = {
      tex: il(13613462, 443, 12),
      scale: 1,
      rough: 0.4,
      grime: 0.3,
    }),
    (O.asMosaicBrown = {
      tex: il(9067070, 444, 10),
      scale: 1.2,
      rough: 0.4,
      grime: 0.25,
    }),
    (O.asPeraTile = { tex: al(), scale: 0.3, rough: 0.2 }),
    (O.asBeam = { tex: ol(), rough: 0.6 }),
    (O.asSudare = { tex: sl(), scale: 0.6, rough: 0.9 }),
    (O.asAccordion = {
      tex: cl(),
      rough: 0.5,
      metal: 0.4,
      cutout: !0,
      noShadow: !0,
    }),
    (O.asStraw = { tex: ll(451), scale: 0.6, rough: 0.95 }));
}
var dl = `"Yu Gothic", "Meiryo", "Microsoft YaHei", "Malgun Gothic", "Noto Sans CJK JP", sans-serif`,
  fl = `"Yu Mincho", "MS Mincho", "SimSun", "Noto Serif CJK JP", serif`,
  pl = { font: `"Arial Black", Impact, sans-serif`, weight: 900 };
function R(e, t, n, r, i = {}) {
  return (
    O[e] ||
      D(e, t, {
        aspect: r / n,
        width: n < r ? 256 : n / r > 5 ? 2048 : 1024,
        ...i,
      }),
    e
  );
}
function ml(e, t, n) {
  if (n >= e.H - 0.001 && e.gableCell) return e.gableCell;
  let r = 0;
  for (; r < e.top && e.ys[r + 1] <= n;) r++;
  return e.grid[r][Hc(e, t)];
}
function hl(e, t, n) {
  let r = [];
  for (let i = 0; i < e.nb; i++) {
    let a = i === 0 ? t : Math.max(t, i * e.bw),
      o = i === e.nb - 1 ? n : Math.min(n, (i + 1) * e.bw);
    o - a > 0.001 && r.push([a, o, i]);
  }
  return r;
}
function gl(e, t, n, r, i, a, o, s, c, l, u = !1, d = !0, p = !0) {
  let m = [
      [-i, o, a],
      [i, o, a],
      [i, o, -a],
      [-i, o, -a],
    ],
    h = [
      [-s, l, c],
      [s, l, c],
      [s, l, -c],
      [-s, l, -c],
    ],
    g = (i, a) => {
      let o = new f();
      (o.setAttribute(`position`, new S(i.flat(), 3)),
        o.computeVertexNormals(),
        e.add(r, o, t, n, { swap: a }));
    };
  for (let e = 0; e < 4; e++) {
    let t = (e + 1) % 4;
    g([m[e], m[t], h[t], m[e], h[t], h[e]], (e % 2 == 1) !== u);
  }
  (p && s > 0.001 && c > 0.001 && g([h[0], h[1], h[2], h[0], h[2], h[3]], u),
    d && g([m[0], m[3], m[2], m[0], m[2], m[1]], u));
}
