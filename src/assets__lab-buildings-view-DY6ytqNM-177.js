// assets__lab-buildings-view-DY6ytqNM 177 — scale
// Lines 55838-56181 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function cg() {
  if (O.lmBrickRed) return;
  let e = (e, t, n, r = {}) => ({
      pat: `brick`,
      p: {
        base: e,
        mortar: t,
        vary: r.vary ?? 0.24,
        burnt: r.burnt ?? 0.08,
        seed: n,
      },
      scale: r.scale ?? 1.2,
      rough: 0.92,
      bump: 1.6,
      grime: r.grime ?? 0.32,
    }),
    t = (e, t, n = {}) => ({
      pat: `ashlar`,
      p: {
        base: e,
        rows: n.rows ?? 3,
        joint: n.joint ?? 4,
        rustic: n.rustic,
        jointK: n.jointK,
        seed: t,
      },
      scale: n.scale ?? 2,
      rough: n.rough ?? 0.9,
      bump: n.bump ?? 1.2,
      grime: n.grime ?? 0.3,
    }),
    n = (e, t, n = {}) => ({
      pat: `stucco`,
      p: {
        base: e,
        seed: t,
        blotch: n.blotch,
        lines: n.lines,
        joints: n.joints,
      },
      scale: n.scale ?? 2.2,
      rough: n.rough ?? 0.93,
      metal: n.metal ?? 0,
      bump: n.bump ?? 0.8,
      grime: n.grime ?? 0.3,
    }),
    r = (e, t = {}) => ({
      pat: `paint`,
      p: { base: e },
      size: 128,
      scale: 1,
      rough: t.rough ?? 0.5,
      metal: t.metal ?? 0,
      emissive: t.emissive,
    }),
    i = (e, t, n = {}) => ({
      pat: `lap`,
      p: { base: e, seed: t, rows: n.rows },
      scale: n.scale ?? 1.3,
      rough: 0.75,
      bump: n.bump ?? 2.4,
      grime: n.grime ?? 0.2,
    }),
    a = (e, t, n = {}) => ({
      pat: `corrugated`,
      p: { base: e, seed: t },
      scale: n.scale ?? 0.9,
      rough: n.rough ?? 0.5,
      metal: n.metal ?? 0.4,
      bump: 2.5,
      swap: n.swap,
      grime: n.grime ?? 0.25,
    }),
    o = (e, t, n, r = {}) => ({
      pat: `planks`,
      p: { base: e, n: t, seed: n },
      scale: r.scale ?? 1.2,
      rough: 0.8,
      bump: 1.2,
      grime: r.grime ?? 0.2,
    });
  (Object.assign(O, {
    lmBrickRed: e(9189928, 11839636, 201),
    lmBrickBlue: e(3948875, 8223606, 202, { vary: 0.14, burnt: 0.02 }),
    lmBrickYellow: e(12886118, 10326912, 203),
    lmBrickDark: e(6173478, 8418661, 204, { burnt: 0.14 }),
    lmBrickRaw: e(8014390, 5919304, 205, {
      vary: 0.45,
      burnt: 0.25,
      scale: 0.9,
    }),
    lmBathStone: t(14075812, 206, { rows: 3, joint: 3 }),
    lmSandstone: t(12558970, 207, { rows: 4, joint: 3, scale: 2.2 }),
    lmLimeWhite: t(15130832, 208, {
      rows: 2,
      joint: 2,
      jointK: 0.85,
      scale: 2.4,
    }),
    lmRusticLime: t(14472384, 209, {
      rows: 2,
      joint: 14,
      rustic: !0,
      jointK: 0.6,
      scale: 2.4,
      bump: 2.5,
    }),
    lmCastle: t(9144189, 210, {
      rows: 4,
      joint: 8,
      rustic: !0,
      jointK: 0.5,
      scale: 1.8,
      bump: 2.5,
      grime: 0.35,
    }),
    lmRuin: t(11051148, 211, {
      rows: 5,
      joint: 9,
      rustic: !0,
      jointK: 0.5,
      scale: 1.6,
      bump: 2.5,
      grime: 0.4,
    }),
    lmStoneWarm: t(10128500, 234, {
      rows: 4,
      joint: 8,
      rustic: !0,
      jointK: 0.5,
      scale: 1.7,
      bump: 2.5,
      grime: 0.35,
    }),
    lmRubble: t(9077362, 212, {
      rows: 6,
      joint: 12,
      rustic: !0,
      jointK: 0.4,
      scale: 1.2,
      bump: 2.8,
      grime: 0.35,
    }),
    lmGranite: t(7302248, 213, { rows: 2, joint: 4, jointK: 0.6, scale: 1.6 }),
    lmConcrete: {
      pat: `boardform`,
      p: { base: 10262670, n: 8, seed: 214 },
      scale: 2.4,
      rough: 0.95,
      bump: 1,
      grime: 0.4,
      swap: !0,
    },
    lmConcreteSmooth: n(12368046, 215, { lines: 3, scale: 2.4 }),
    lmRenderWhite: n(15262936, 216, { blotch: 16, grime: 0.24 }),
    lmRenderCream: n(14865325, 217),
    lmRenderGrey: n(11117203, 218, { blotch: 40, grime: 0.45 }),
    lmRenderOchre: n(12884574, 219, { blotch: 44, grime: 0.45 }),
    lmPanelWhite: n(15001318, 220, {
      joints: !0,
      blotch: 4,
      scale: 1.5,
      rough: 0.45,
      metal: 0.15,
      bump: 0.5,
      grime: 0.1,
    }),
    lmCorrMaroon: a(6957606, 221),
    lmCorrGrey: a(9146254, 222),
    lmCorrBlue: a(3104650, 223, { swap: !0 }),
    lmBoardCream: i(14931632, 224),
    lmBoardTar: i(2762790, 225, { bump: 1.5 }),
    lmBoardWhite: i(15526626, 226),
    lmSlate: {
      pat: `shingle`,
      p: { base: 4147024, seed: 227 },
      scale: 0.9,
      rough: 0.7,
      bump: 2,
    },
    lmPantile: a(10834222, 228, { scale: 0.4, rough: 0.8, metal: 0 }),
    lmCopper: n(6199938, 229, {
      blotch: 30,
      scale: 1.6,
      rough: 0.55,
      metal: 0.3,
      bump: 0.4,
      grime: 0,
    }),
    lmLead: r(7172984, { rough: 0.6, metal: 0.4 }),
    lmCreamPaint: r(15129012),
    lmRailGreen: r(2970168),
    lmMaroon: r(6168351),
    lmBlack: r(1907998, { rough: 0.6 }),
    lmNavy: r(2043466),
    lmSteel: r(6120552, { rough: 0.45, metal: 0.6 }),
    lmSteelBlue: r(3104650, { rough: 0.4, metal: 0.3 }),
    lmYellow: r(14726442, { rough: 0.45 }),
    lmOrange: r(14705194),
    lmMastRed: r(13120031),
    lmMastWhite: r(15658730),
    lmGilt: r(13608261, { rough: 0.3, metal: 0.9 }),
    lmSlot: r(1184274, { rough: 1 }),
    lmBronzeBell: r(8018474, { rough: 0.35, metal: 0.85 }),
    lmTimber: o(7031344, 6, 230),
    lmTimberGrey: o(8222056, 6, 231),
    lmSandbag: n(11048560, 235, { blotch: 30, scale: 0.6, bump: 1.5 }),
    lmWater: n(3033680, 232, {
      blotch: 30,
      scale: 4,
      rough: 0.12,
      metal: 0.3,
      grime: 0,
    }),
    lmGrass: n(5663036, 233, { blotch: 50, scale: 2, bump: 1.2, grime: 0 }),
    lmGravel: {
      pat: `asphalt`,
      p: { base: 7235162, seed: 236 },
      scale: 2,
      rough: 0.95,
      bump: 1,
    },
    lmGlassRoof: { glass: !0, color: 9415088 },
    lmBarrier: {
      pat: `stripes`,
      p: { base: 13116958, alt: 15921386 },
      size: 256,
      scale: 2,
      rough: 0.5,
    },
    lmHazard: {
      pat: `stripes`,
      p: { base: 14726442, alt: 1907998 },
      size: 256,
      scale: 2,
      rough: 0.6,
    },
    lmRedLamp: r(16732224, { rough: 0.4, emissive: 16719888 }),
    lmGreenLamp: r(6356864, { rough: 0.4, emissive: 2162496 }),
    lmLampWhite: r(16774360, { rough: 0.3, emissive: 16767120 }),
    lmInsulator: r(6961698, { rough: 0.25 }),
    lmIronShutter: i(3819072, 237, { rows: 10, scale: 1, bump: 1.2 }),
    lmShutterBlue: i(3103362, 238, { rows: 16, scale: 1, bump: 1.2 }),
    lmCtrBlue: a(2051974, 239, { scale: 0.7 }),
    lmCtrOrange: a(12604959, 240, { scale: 0.7 }),
    lmCtrGreen: a(3107390, 241, { scale: 0.7 }),
    lmCtrRed: a(9053216, 242, { scale: 0.7 }),
    lmRoofRed: {
      pat: `shingle`,
      p: { base: 9058858, seed: 243 },
      scale: 0.8,
      rough: 0.8,
      bump: 2,
    },
  }),
    (O.lmNone = { tex: eg(8, 8, () => {}), cutout: !0, noShadow: !0 }),
    (O.lmClockFace = { tex: tg(), rough: 0.5, glow: 0.35 }),
    (O.lmRose = { tex: ng(), rough: 0.25, glow: 0.25 }),
    (O.lmSail = { tex: rg(), rough: 0.8, cutout: !0 }),
    (O.lmIvy = { tex: ig(), rough: 0.9, cutout: !0, noShadow: !0 }),
    (O.lmScorch = { tex: ag(), rough: 1, transparent: !0, noShadow: !0 }),
    (O.lmRivet = {
      tex: og(5597290),
      scale: 1.6,
      rough: 0.5,
      metal: 0.5,
      grime: 0.2,
    }),
    (O.lmGauge = { tex: sg(), rough: 0.6 }),
    (O.lmThatch = {
      tex: eg(256, 256, (e, t) => {
        let n = $h(111);
        ((e.fillStyle = `#5e4a2a`), e.fillRect(0, 0, t, t));
        for (let r = 0; r < 2600; r++) {
          let r = n() * t,
            i = n() * t,
            a = 10 + n() * 30;
          ((e.strokeStyle = Qh(11045458, 0.55 + n() * 0.6)),
            (e.lineWidth = 1 + n()),
            e.beginPath(),
            e.moveTo(r, i),
            e.lineTo(r + (n() - 0.5) * 4, i + a),
            e.stroke());
        }
        for (let n = 0; n < t; n += 64) {
          let r = e.createLinearGradient(0, n + 44, 0, n + 64);
          (r.addColorStop(0, `rgba(0,0,0,0)`),
            r.addColorStop(1, `rgba(30,18,4,.55)`),
            (e.fillStyle = r),
            e.fillRect(0, n + 44, t, 20));
        }
      }),
      scale: 1.4,
      rough: 1,
    }));
}
var lg = (e, t) => (t < e.top ? e.ys[t + 1] : e.H) - e.ys[t],
  ug = (e, t) => Math.min(e.nb - 1, Math.max(0, Math.floor(t / e.bw))),
  dg = (e, t) => {
    let n = 0;
    for (; n < e.top && e.ys[n + 1] <= t + 1e-6;) n++;
    return n;
  };
function fg(e, t, n) {
  return n >= e.H - 0.001 && e.gableCell
    ? e.gableCell
    : e.grid[dg(e, n)][ug(e, t)];
}
var pg = (e, t, n, r) =>
    e
      .clone()
      .multiply(new E().makeTranslation(t, 0, n))
      .multiply(new E().makeRotationY(r)),
  mg = (e, t) => {
    e.roofTop = Math.max(e.roofTop, t);
  };
function hg(e, t, n) {
  let r = [t];
  for (let i = 1; i < e.nb; i++) {
    let a = i * e.bw;
    a > t + 0.001 && a < n - 0.001 && r.push(a);
  }
  return (r.push(n), r.slice(0, -1).map((e, t) => [e, r[t + 1]]));
}
function gg(e, t, n, r, i, a, o, s, c, l, u) {
  let d = [o];
  for (let e of [...r.ys.slice(1), r.H])
    e > o + 0.001 && e < s - 0.001 && d.push(e);
  d.push(s);
  for (let [o, s] of hg(r, i, a))
    for (let i = 0; i < d.length - 1; i++)
      e.box(
        t,
        n,
        fg(r, (o + s) / 2, (d[i] + d[i + 1]) / 2),
        o,
        s,
        d[i],
        d[i + 1],
        c,
        l,
        u,
      );
}
