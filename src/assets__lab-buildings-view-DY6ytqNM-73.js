// assets__lab-buildings-view-DY6ytqNM 73 — rough
// Lines 22424-22773 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function rs() {
  if (O.amBarnRed) return;
  let e = (e, t, n = {}) => ({
      pat: `lap`,
      p: { base: e, seed: t, rows: n.rows },
      scale: n.scale ?? 1.2,
      rough: 0.7,
      bump: n.bump ?? 2.5,
      grime: n.grime ?? 0.15,
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
      p: {
        base: e,
        seed: t,
        blotch: n.blotch,
        lines: n.lines,
        joints: n.joints,
      },
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
      grime: n.grime,
    }),
    i = (e, t, n, r = {}) => ({
      pat: `planks`,
      p: { base: e, n: t, seed: n },
      scale: r.scale ?? 1.2,
      rough: r.rough ?? 0.75,
      bump: 1.2,
      grime: r.grime ?? 0.2,
    }),
    a = (e, t, n, r = {}) => ({
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
      grime: r.grime ?? 0.3,
    }),
    o = (e, t, n = {}) => ({
      pat: `shingle`,
      p: { base: e, seed: t },
      scale: n.scale ?? 1.4,
      rough: n.rough ?? 0.95,
      bump: n.bump ?? 3,
      grime: n.grime,
    }),
    s = (e, t) => ({
      pat: `batten`,
      p: { base: e, seed: t },
      scale: 1.4,
      rough: 0.85,
      bump: 2.2,
      grime: 0.3,
    }),
    c = (t, n) => e(t, n, { rows: 16, scale: 1, bump: 1.2, grime: 0 });
  (Object.assign(O, {
    amBarnRed: s(9317152, 401),
    amBattenGrey: s(9143418, 402),
    amBattenWhite: s(14999764, 403),
    amLapWhite: e(15723747, 404),
    amLapOxblood: e(7220260, 405),
    amLapOlive: e(9145964, 406),
    amShingleSilver: o(9801606, 407, {
      scale: 1,
      bump: 2.5,
      grime: 0.18,
      rough: 0.9,
    }),
    amShingleButter: o(14205050, 408, {
      scale: 1,
      bump: 2.5,
      grime: 0.18,
      rough: 0.9,
    }),
    amRoofDark: o(4012599, 409),
    amRoofBrown: o(5916214, 410),
    amSlate: o(4870746, 412, { scale: 0.9, rough: 0.7, bump: 2 }),
    amTinRed: r(9386796, 413),
    amTinGreen: r(4025163, 414),
    amTinGalv: r(10988976, 415, { metal: 0.7, rough: 0.4 }),
    amRibWhite: r(15131868, 416, {
      scale: 1.1,
      metal: 0.2,
      rough: 0.5,
      grime: 0.2,
    }),
    amRibRed: r(10103330, 417, { scale: 1.1, metal: 0.2 }),
    amTileRed: r(11095855, 418, { scale: 0.45, rough: 0.8, metal: 0 }),
    amBrickFlemish: a(10108714, 13155496, 419),
    amBrickGeorgian: a(8861226, 11905171, 420, { burnt: 0.2 }),
    amBrickRoman: a(11041362, 10260604, 421, { vary: 0.14 }),
    amBrickClinker: a(7027248, 9076852, 422, { vary: 0.42, burnt: 0.25 }),
    amBrickOrange: a(11097914, 12629152, 423),
    amBrickRust: a(8272422, 5919306, 424, { burnt: 0.18 }),
    amCMUWhite: {
      pat: `brick`,
      p: { base: 14605008, mortar: 12762802, vary: 0.05, burnt: 0, seed: 425 },
      scale: 3.2,
      rough: 0.95,
      bump: 1.2,
      grime: 0.3,
    },
    amCMUCream: {
      pat: `brick`,
      p: { base: 15391932, mortar: 13615780, vary: 0.05, burnt: 0, seed: 426 },
      scale: 3.2,
      rough: 0.95,
      bump: 1.2,
      grime: 0.28,
    },
    amStuccoTudor: n(15327436, 427, { blotch: 14 }),
    amStuccoSand: n(13481358, 428),
    amStuccoWhite: n(15723490, 429, { blotch: 10, grime: 0.22 }),
    amStuccoTeal: n(8370352, 430, { grime: 0.25 }),
    amStuccoYellow: n(15255648, 431, { grime: 0.25 }),
    amFieldstone: {
      pat: `ashlar`,
      p: {
        base: 9340538,
        rows: 5,
        joint: 12,
        rustic: !0,
        jointK: 0.45,
        seed: 432,
      },
      scale: 1.3,
      rough: 0.95,
      bump: 2.6,
      grime: 0.3,
    },
    amMarble: {
      pat: `ashlar`,
      p: { base: 15000284, rows: 3, joint: 3, seed: 433 },
      scale: 1.8,
      rough: 0.5,
      bump: 0.5,
      grime: 0.2,
    },
    amStave: n(12104358, 434, {
      lines: 8,
      joints: !0,
      scale: 2.4,
      bump: 1,
      grime: 0.35,
    }),
    amCoral: t(15233882),
    amTurq: t(3122080, { rough: 0.35 }),
    amMint: t(10475716),
    amYellow: t(15251498, { rough: 0.35 }),
    amGreenTrim: t(2972221),
    amBlack: t(1974049),
    amWhiteEnamel: t(15790056, { rough: 0.3 }),
    amHaint: t(10473679, { rough: 0.6 }),
    amEnamelRed: t(11740702, { rough: 0.3, metal: 0.1 }),
    amEnamelOrange: t(14706730, { rough: 0.3, metal: 0.1 }),
    amEnamelBrown: t(5911064, { rough: 0.3 }),
    amChrome: t(14870250, { rough: 0.15, metal: 0.95 }),
    amCopper: t(6265990, { rough: 0.55, metal: 0.3 }),
    amGilt: t(13608261, { rough: 0.3, metal: 0.9 }),
    amVitrolite: t(1381656, { rough: 0.08, metal: 0.35 }),
    amVitroMaroon: t(5904930, { rough: 0.08, metal: 0.3 }),
    amRubber: t(1842204, { rough: 0.9 }),
    amRootBeer: t(4858898, { rough: 0.2, metal: 0.1 }),
    amFoam: t(16183260, { rough: 0.8 }),
    amPumpkin: t(14181918, { rough: 0.6 }),
    amSteelDoor: t(7304828, { rough: 0.5, metal: 0.3 }),
    amSteelBlue: t(2903674, { rough: 0.4, metal: 0.2 }),
    amGlobe: t(16774880, { rough: 0.3, emissive: 16767120 }),
    amNeonRed: t(16734792, { rough: 0.4, emissive: 16722458 }),
    amNeonBlue: t(8445183, { rough: 0.4, emissive: 2799359 }),
    amDoorRed: i(9316898, 5, 435),
    amDoorBlack: i(2237222, 5, 436),
    amDoorGreen: i(2968122, 5, 437),
    amDoorTeal: i(3115660, 5, 438),
    amDoorOak: i(6965802, 5, 439),
    amDoorWalnut: i(4861468, 5, 440),
    amShutterBlack: c(2303015, 441),
    amShutterRed: c(8006180, 442),
    amShutterBlue: c(3955322, 443),
    amHedge: n(4482094, 444, { blotch: 40, bump: 2.5, grime: 0 }),
    amGlassBlock: {
      pat: `brick`,
      p: { base: 13623523, mortar: 10923952, vary: 0.06, burnt: 0, seed: 445 },
      scale: 0.9,
      rough: 0.15,
      metal: 0.1,
      emissive: 1976878,
    },
    amHewn: e(7164468, 446, { rows: 5, bump: 3.5, grime: 0.25, scale: 1.5 }),
    amOD: t(4936480, { rough: 0.6 }),
    amBrickPaleYellow: a(13218426, 12103064, 447, { vary: 0.12 }),
    amDinoGreen: t(6261306, { rough: 0.55 }),
    amDinoBelly: t(13156474, { rough: 0.6 }),
    amEnamelCream: t(15918788, { rough: 0.3, metal: 0.1 }),
    amEnamelTeal: t(3115660, { rough: 0.3, metal: 0.1 }),
    amNeonPink: t(16743096, { rough: 0.4, emissive: 16727190 }),
    amNeonYellow: t(16769146, { rough: 0.4, emissive: 16756768 }),
  }),
    (O.amQuilt = { tex: qo(), rough: 0.7 }),
    (O.amApples = {
      tex: Jo(
        `#3a1a10`,
        [12069406, 13123614, 9313816, 14200880],
        7,
        11,
        150,
        71,
      ),
      scale: 0.5,
      rough: 0.6,
    }),
    (O.amTomatoes = {
      tex: Jo(`#2a3a1a`, [14168606, 14699040, 12069406], 8, 13, 110, 72),
      scale: 0.5,
      rough: 0.5,
    }),
    (O.amPeaches = {
      tex: Jo(`#4a2a14`, [15769680, 15238208, 15908976], 8, 12, 130, 73),
      scale: 0.5,
      rough: 0.7,
    }),
    (O.amSquash = {
      tex: Jo(
        `#3a2a10`,
        [14721056, 4880938, 14181918, 15257696],
        12,
        20,
        60,
        74,
      ),
      scale: 0.6,
      rough: 0.6,
    }),
    (O.amCorn = { tex: Yo(), scale: 0.6, rough: 0.8 }),
    (O.amHay = { tex: Xo(), scale: 1.2, rough: 1 }),
    (O.amFlag = { tex: Zo(), rough: 0.8 }),
    (O.amEmblem = { tex: Qo(), rough: 0.5 }),
    (O.amGranite = { tex: $o(2903690), scale: 1.4, rough: 0.25 }),
    (O.amClock = { tex: es(), rough: 0.4, glow: 0.15 }),
    (O.amLattice = {
      tex: ts(`#ece8dc`),
      rough: 0.8,
      cutout: !0,
      noShadow: !0,
    }),
    (O.amHydrangea = { tex: ns(4086314, 8035032), scale: 0.6, rough: 0.9 }),
    (O.amBoxwood = { tex: ns(3428394, null), scale: 0.6, rough: 0.9 }));
}
function is(e, t, n) {
  if (n >= e.H - 0.001 && e.gableCell) return e.gableCell;
  let r = 0;
  for (; r < e.top && e.ys[r + 1] <= n;) r++;
  return e.grid[r][Ro(e, t)];
}
function as(e, t, n, r, i, a, o, s, c, l, u) {
  let d = o;
  for (let f of [...r.ys.slice(1), r.H]
    .filter((e) => e > o + 0.001 && e < s - 0.001)
    .concat([s]))
    (f > d + 0.001 &&
      e.box(t, n, is(r, (i + a) / 2, (d + f) / 2), i, a, d, f, c, l, u),
      (d = f));
}
function os(e, t, n) {
  let r = [];
  for (let i = 0; i < e.nb; i++) {
    let a = i === 0 ? t : Math.max(t, i * e.bw),
      o = i === e.nb - 1 ? n : Math.min(n, (i + 1) * e.bw);
    o - a > 0.001 && r.push([a, o, i]);
  }
  return r;
}
function ss(e, t, n, r, i, a, o, s, c, l) {
  for (let [u, d] of os(n, i, a))
    e.box(r, t, is(n, (u + d) / 2, (o + s) / 2), u, d, o, s, c, l, {
      planar: (e, t) => [(e - i) / (a - i), (t - o) / (s - o)],
    });
}
function cs(e, t, n, r, i, a, o, s, c, l = 0.12, u = null) {
  let d = (e) => ({
    planar: (t, n) => [
      e ? (a - t) / (a - i) : (t - i) / (a - i),
      (n - o) / (s - o),
    ],
  });
  (e.box(r, t, n, i, a, o, s, c + l / 2, c + l / 2 + 0.02, d(!1)),
    e.box(r, t, n, i, a, o, s, c - l / 2 - 0.02, c - l / 2, d(!0)),
    u &&
      e.box(u, t, n, i - 0.1, a + 0.1, o - 0.1, s + 0.1, c - l / 2, c + l / 2));
}
function ls(e, t, n, r, i, a, o, s = [], c) {
  let l = new T(i.map(([e, t]) => new y(e, t)));
  for (let e of s) l.holes.push(new ne(e.map(([e, t]) => new y(e, t))));
  e.add(
    r,
    new w(l, { depth: o - a, bevelEnabled: !1 }).translate(0, 0, a),
    t,
    n,
    c,
  );
}
function us(e, t, n, r, i, a, o) {
  let s = new T(i.map(([e, t]) => new y(e, t)));
  e.add(
    r,
    new w(s, { depth: o - a, bevelEnabled: !1 })
      .rotateY(-Math.PI / 2)
      .translate(o, 0, 0),
    t,
    n,
  );
}
function ds(e, t, n, r, i, a, o) {
  let s = new T(i.map(([e, t]) => new y(e, t)));
  e.add(
    r,
    new w(s, { depth: o - a, bevelEnabled: !1 })
      .rotateX(Math.PI / 2)
      .translate(0, o, 0),
    t,
    n,
  );
}
