// assets__lab-buildings-view-DY6ytqNM 29 — box
// Lines 9754-10011 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function zr(e, t, n, r, i, a, o = 3.6, s = 1.3) {
  (e.add(
    `woodDark`,
    new C(0.08, 0.13, o * 0.6, 6).translate(r, i + o * 0.3, a),
    t,
    n,
  ),
    e.add(
      `moFoliage`,
      new oe(s, 0).scale(1, 0.9, 1).translate(r, i + o - s * 0.6, a),
      t,
      n,
    ));
}
function Br(e, t, n, r, i, a, o, s, c = `moConcLight`, l = 0.55) {
  (e.box(c, t, n, r, i, a, a + l, o, s),
    e.box(
      `moFoliage`,
      t,
      n,
      r + 0.06,
      i - 0.06,
      a + l - 0.05,
      a + l + 0.25,
      o + 0.06,
      s - 0.06,
    ));
}
function Vr(e, t, n, r, i, a, o, s) {
  let c = t
    .clone()
    .multiply(new E().makeTranslation(r, i, a))
    .multiply(new E().makeRotationY(o));
  (e.box(s, c, n, -2.2, 2.2, 0.28, 0.88, -0.86, 0.86),
    e.box(s, c, n, -1.25, 0.72, 0.88, 1.38, -0.76, 0.76),
    e.box(`moGlassDark`, c, n, -1.4, 0.92, 0.9, 1.32, -0.79, 0.79));
  for (let t of [-1.38, 1.36])
    for (let r of [-0.74, 0.74])
      e.add(
        `moRubber`,
        new C(0.32, 0.32, 0.22, 7).rotateX(Math.PI / 2).translate(t, 0.32, r),
        c,
        n,
      );
  (e.box(`moLedWarm`, c, n, 2.19, 2.23, 0.6, 0.72, -0.74, 0.74),
    e.box(`moLedRed`, c, n, -2.23, -2.19, 0.62, 0.72, -0.74, 0.74));
}
var Hr = [
  `moRed`,
  `moWhite`,
  `moCharcoal`,
  `moBlue`,
  `moSilver`,
  `moNavy`,
  `moWhite`,
  `moYellow`,
  `moSilver`,
];
function Ur(e, t, n, r, i, a, o, s, c = 1.05) {
  Math.abs(o - i) < 0.001
    ? (e.box(`railGlass`, t, n, r, a, s, s + c - 0.05, i - 0.015, i + 0.015),
      e.box(`aluminum`, t, n, r, a, s + c - 0.06, s + c, i - 0.03, i + 0.03))
    : (e.box(`railGlass`, t, n, r - 0.015, r + 0.015, s, s + c - 0.05, i, o),
      e.box(`aluminum`, t, n, r - 0.03, r + 0.03, s + c - 0.06, s + c, i, o));
}
function Wr(e, t, n, r, i, a, o, s = 1.5) {
  (e.box(
    `moSilver`,
    t,
    0,
    n - i / 2,
    n + i / 2,
    o,
    o + s,
    r - a / 2,
    r + a / 2,
  ),
    e.box(
      `louver`,
      t,
      0,
      n - i / 2 + 0.15,
      n + i / 2 - 0.15,
      o + 0.25,
      o + s - 0.25,
      r - a / 2 - 0.02,
      r + a / 2 + 0.02,
    ));
  let c = Math.max(1, Math.round(i / 1.8));
  for (let l = 0; l < c; l++) {
    let u = n - i / 2 + ((l + 0.5) * i) / c;
    e.add(
      `moCharcoal`,
      new C(
        Math.min(0.7, a * 0.36),
        Math.min(0.7, a * 0.36),
        0.25,
        12,
      ).translate(u, o + s + 0.12, r),
      t,
      0,
    );
  }
  e.box(
    `moSilver`,
    t,
    0,
    n - i / 2 - 0.1,
    n + i / 2 + 0.1,
    o - 0.02,
    o + 0.12,
    r - a / 2 - 0.1,
    r + a / 2 + 0.1,
  );
}
function Gr(e, t, n, r, i, o, s, c = 0.25) {
  for (let l = i + 0.6; l < o - 0.4; l += 1.9) {
    e.add(
      `moSolar`,
      new a(r - n, 0.05, 1.1).rotateX(-c).translate((n + r) / 2, s + 0.55, l),
      t,
      0,
      vr(-(r - n) / 2, (r - n) / 2, -0.03, 0.03) && {
        planar: (e, t, i) => [(e + (r - n) / 2) / 1.7, (i + 0.55) / 1.1],
      },
    );
    for (let i = n + 0.3; i < r; i += 2.5)
      (e.box(
        `aluminum`,
        t,
        0,
        i - 0.03,
        i + 0.03,
        s,
        s + 0.72,
        l - 0.45,
        l - 0.39,
      ),
        e.box(
          `aluminum`,
          t,
          0,
          i - 0.03,
          i + 0.03,
          s,
          s + 0.4,
          l + 0.39,
          l + 0.45,
        ));
  }
}
function Kr(e, t, n, r, a, o, s = {}) {
  let c = 0.55;
  for (let [i, s] of [
    [-0.55, -0.55],
    [c, -0.55],
    [0, c],
  ])
    e.box(
      `moSilver`,
      t,
      0,
      n + i - 0.04,
      n + i + 0.04,
      a,
      a + o,
      r + s - 0.04,
      r + s + 0.04,
    );
  for (let i = 0; i < o - 0.5; i += 1.4)
    (k(
      e,
      `moSilver`,
      t,
      0,
      [n - c, a + i, r - c],
      [n + c, a + i + 1.4, r - c],
      0.03,
    ),
      k(
        e,
        `moSilver`,
        t,
        0,
        [n + c, a + i, r - c],
        [n, a + i + 1.4, r + c],
        0.03,
      ),
      k(
        e,
        `moSilver`,
        t,
        0,
        [n, a + i, r + c],
        [n - c, a + i + 1.4, r - c],
        0.03,
      ));
  for (let [i, s] of [
    [0.4, 0.55],
    [2.4, 0.72],
  ]) {
    let c = Math.sin(i) * 0.9,
      l = Math.cos(i) * 0.9;
    e.add(
      `moWhite`,
      new C(0.55, 0.1, 0.35, 12)
        .rotateX(Math.PI / 2)
        .rotateY(i)
        .translate(n + c, a + o * s, r + l),
      t,
      0,
    );
  }
  for (let i of [-0.3, 0.3])
    e.box(
      `moWhite`,
      t,
      0,
      n + i - 0.08,
      n + i + 0.08,
      a + o - 2.4,
      a + o - 0.6,
      r - 0.7,
      r - 0.55,
    );
  (e.add(
    `moSilver`,
    new C(0.025, 0.04, 3, 6).translate(n, a + o + 1.5, r),
    t,
    0,
  ),
    e.add(`beacon`, new i(0.12, 8, 6).translate(n, a + o + 3.05, r), t, 0));
}
function qr(e, t, n, r, i, a, o, s = 3, c = `moConcLight`) {
  (e.box(c, t, 0, n, r, o, o + s, i, a),
    e.box(
      `moCharcoal`,
      t,
      0,
      n - 0.1,
      r + 0.1,
      o + s,
      o + s + 0.15,
      i - 0.1,
      a + 0.1,
    ),
    e.box(
      `moCharcoal`,
      t,
      0,
      (n + r) / 2 - 0.5,
      (n + r) / 2 + 0.5,
      o,
      o + 2.2,
      a,
      a + 0.05,
    ));
}
