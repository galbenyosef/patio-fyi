// assets__lab-buildings-view-DJVr8phc 09 — base
// Lines 3930-4278 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
var Vt = Math.PI / 180,
  M = `ironDark`,
  Ht = (e, t) => Array(e).fill(t);
Object.assign(E, {
  cSlate: {
    pat: `shingle`,
    p: { base: 4608090, seed: 101 },
    scale: 1.2,
    rough: 0.8,
    bump: 2.5,
  },
  cCopper: {
    pat: `stucco`,
    p: { base: 6264447, seed: 102, blotch: 30 },
    scale: 1.5,
    rough: 0.6,
    metal: 0.25,
    bump: 0.4,
  },
  cBrickSchool: {
    pat: `brick`,
    p: { base: 9059115, mortar: 12760738, vary: 0.26, burnt: 0.12, seed: 103 },
    scale: 1.2,
    rough: 0.92,
    bump: 1.6,
    grime: 0.3,
  },
  cBrickTanHosp: {
    pat: `brick`,
    p: { base: 12163700, mortar: 10721412, vary: 0.12, burnt: 0.03, seed: 104 },
    scale: 1.2,
    rough: 0.9,
    bump: 1.4,
    grime: 0.25,
  },
  cStuccoYellow: {
    pat: `stucco`,
    p: { base: 15189882, seed: 105 },
    scale: 2.2,
    rough: 0.93,
    bump: 0.8,
    grime: 0.3,
  },
  cStuccoAqua: {
    pat: `stucco`,
    p: { base: 10473672, seed: 106 },
    scale: 2.2,
    rough: 0.93,
    bump: 0.8,
    grime: 0.28,
  },
  cStuccoWhite: {
    pat: `stucco`,
    p: { base: 15789540, seed: 107, blotch: 12 },
    scale: 2.2,
    rough: 0.9,
    bump: 0.6,
    grime: 0.2,
  },
  cAdobe: {
    pat: `stucco`,
    p: { base: 12159586, seed: 108, blotch: 40 },
    scale: 2.6,
    rough: 1,
    bump: 1.6,
    grime: 0.35,
  },
  cAdobeLight: {
    pat: `stucco`,
    p: { base: 13741446, seed: 109, blotch: 30 },
    scale: 2.6,
    rough: 1,
    bump: 1.4,
    grime: 0.3,
  },
  cRoofTileRed: {
    pat: `shingle`,
    p: { base: 10765614, seed: 110 },
    scale: 1,
    rough: 0.85,
    bump: 3,
  },
  cRoofRed: {
    pat: `corrugated`,
    p: { base: 10103844, seed: 111 },
    scale: 0.8,
    rough: 0.5,
    metal: 0.3,
    bump: 2,
  },
  cCorrRust: {
    pat: `corrugated`,
    p: { base: 8019530, seed: 112 },
    scale: 0.9,
    rough: 0.7,
    metal: 0.35,
    bump: 2.5,
    grime: 0.35,
  },
  cCorrGalv: {
    pat: `corrugated`,
    p: { base: 11054248, seed: 113 },
    scale: 0.7,
    rough: 0.45,
    metal: 0.6,
    bump: 2.5,
    grime: 0.3,
  },
  cCorrWhite: {
    pat: `corrugated`,
    p: { base: 14276816, seed: 114 },
    scale: 0.9,
    rough: 0.5,
    metal: 0.3,
    bump: 2.2,
    grime: 0.3,
  },
  cSilo: {
    pat: `stucco`,
    p: { base: 12762544, seed: 115, lines: 6, blotch: 40 },
    scale: 3.2,
    rough: 0.95,
    bump: 0.8,
    grime: 0.4,
  },
  cBunker: {
    pat: `boardform`,
    p: { base: 9342084, n: 6, seed: 116 },
    scale: 2.4,
    rough: 0.97,
    bump: 1.2,
    grime: 0.45,
    swap: !0,
  },
  cPaintCream: {
    pat: `stucco`,
    p: { base: 15655620, seed: 117, blotch: 14 },
    scale: 2.2,
    rough: 0.9,
    bump: 0.6,
    grime: 0.22,
  },
  cPaintRed: {
    pat: `paint`,
    p: { base: 11545122 },
    size: 128,
    scale: 1,
    rough: 0.5,
  },
  cPaintGreen: {
    pat: `paint`,
    p: { base: 3100474 },
    size: 128,
    scale: 1,
    rough: 0.55,
  },
  cWoodGrey: {
    pat: `planks`,
    p: { base: 8024678, n: 6, seed: 118 },
    scale: 1.2,
    rough: 0.9,
    bump: 1.2,
  },
  cLog: {
    pat: `planks`,
    p: { base: 7229235, n: 3, seed: 119 },
    scale: 1.4,
    rough: 0.9,
    bump: 1.5,
  },
  cLogEnd: {
    pat: `paint`,
    p: { base: 12884582 },
    size: 64,
    scale: 1,
    rough: 0.9,
  },
  cLantern: { glass: !0, color: 16181168, lit: 16769184 },
  cLamp: {
    pat: `paint`,
    p: { base: 16774348 },
    size: 64,
    scale: 1,
    rough: 0.3,
    emissive: 16765040,
  },
  cDarkGlass: { glass: !0, color: 3817800 },
  cGreenGlass: { glass: !0, color: 8366246 },
  cAnodized: {
    pat: `paint`,
    p: { base: 2829616 },
    size: 128,
    scale: 1,
    rough: 0.35,
    metal: 0.8,
  },
  cAluLight: {
    pat: `paint`,
    p: { base: 11120049 },
    size: 128,
    scale: 1,
    rough: 0.35,
    metal: 0.8,
  },
  cSpandrelDark: {
    pat: `paint`,
    p: { base: 2303787 },
    size: 128,
    scale: 1,
    rough: 0.2,
    metal: 0.7,
  },
  cDecoStone: {
    pat: `ashlar`,
    p: { base: 14208178, rows: 3, joint: 2, jointK: 0.82, seed: 120 },
    scale: 2.4,
    rough: 0.85,
    bump: 0.6,
    grime: 0.25,
  },
  cRustSteel: {
    pat: `corrugated`,
    p: { base: 7031350, seed: 121 },
    scale: 3,
    rough: 0.8,
    metal: 0.4,
    bump: 1,
  },
  cStripe: {
    pat: `stripes`,
    p: { base: 13149738, alt: 1907999 },
    size: 256,
    scale: 1.2,
    rough: 0.7,
  },
  cCorrHut: {
    pat: `corrugated`,
    p: { base: 10725020, seed: 124 },
    scale: 0.7,
    rough: 0.6,
    metal: 0.25,
    bump: 2.5,
    grime: 0.2,
  },
  cWater: {
    pat: `stucco`,
    p: { base: 3099218, seed: 122, blotch: 30 },
    scale: 4,
    rough: 0.2,
    metal: 0.3,
  },
});
var Ut = (e) => {
    let t = e.toNonIndexed();
    return (t.computeVertexNormals(), t);
  },
  Wt = (e, t) => (t < e.top ? e.ys[t + 1] : e.H) - e.ys[t],
  Gt = (e, t) => Math.min(e.nb - 1, Math.max(0, Math.floor(t / e.bw))),
  Kt = (e, t) => {
    let n = 0;
    for (; n < e.top && e.ys[n + 1] <= t + 1e-6;) n++;
    return n;
  },
  qt = (e, t, n) => e.grid[Kt(e, n)][Gt(e, t)],
  Jt = (e, t, n, r) =>
    e
      .clone()
      .multiply(new l().makeTranslation(t, 0, n))
      .multiply(new l().makeRotationY(r));
function N(e, t, n, r, i, a, o, c, l, u = l, d = 16, f = !1) {
  e.add(t, new s(u, l, c - o, d, 1, f).translate(i, (o + c) / 2, a), n, r);
}
function Yt(e, t, n, r, i, a, o, s, c, l) {
  let u = new C([new h(i, o), new h(a, o), new h((i + a) / 2, o + s)]);
  e.add(
    t,
    new S(u, { depth: l - c, bevelEnabled: !1 }).translate(0, 0, c),
    n,
    r,
  );
}
function Xt(e, t, n, r, i, a, o, s, c, l) {
  Yt(e, t, n, r, i, a, o, s, c, l);
  let u = (i + a) / 2;
  for (let c of [i - 0.2, a + 0.2])
    D(e, t, n, r, [c, o + 0.06, l + 0.08], [u, o + s + 0.16, l + 0.08], 0.26);
  e.box(t, n, r, i - 0.25, a + 0.25, o - 0.12, o + 0.06, c, l + 0.2);
}
function Zt(e, t, n, r, i, a, o, s, c, l = 16) {
  (e.box(
    t,
    n,
    r,
    i - c * 1.35,
    i + c * 1.35,
    o,
    o + 0.3,
    a - c * 1.35,
    a + c * 1.35,
  ),
    N(e, t, n, r, i, a, o + 0.3, s - 0.4, c * 1.05, c * 0.88, l),
    N(e, t, n, r, i, a, s - 0.4, s - 0.16, c * 0.9, c * 1.3, l),
    e.box(
      t,
      n,
      r,
      i - c * 1.4,
      i + c * 1.4,
      s - 0.16,
      s,
      a - c * 1.4,
      a + c * 1.4,
    ));
}
function Qt(e, t, n, i, a, o, c) {
  (e.add(`cClockFace`, new y(o, 36).translate(i, a, c + 0.06), t, n, {
    planar: (e, t) => [(e - i) / (2 * o) + 0.5, (t - a) / (2 * o) + 0.5],
  }),
    e.add(
      `bronze`,
      new s(o + 0.12, o + 0.12, 0.1, 36)
        .rotateX(Math.PI / 2)
        .translate(i, a, c),
      t,
      n,
    ),
    e.add(
      M,
      new r(0.07, o * 0.55, 0.03)
        .translate(0, o * 0.26, 0)
        .rotateZ(-0.9)
        .translate(i, a, c + 0.09),
      t,
      n,
    ),
    e.add(
      M,
      new r(0.05, o * 0.8, 0.03)
        .translate(0, o * 0.38, 0)
        .rotateZ(-4.3)
        .translate(i, a, c + 0.11),
      t,
      n,
    ));
}
function $t(e, t, n, r, i, a, o) {
  for (let s = 0; s < 4; s++)
    Qt(e, Jt(t, n, r, (s * Math.PI) / 2), 0, 0, a, o, i);
}
