// assets__decor-kit-DYJAmRWC 15 — build
// Lines 4256-4602 of readable/assets__decor-kit-DYJAmRWC.pretty.js (statement-aligned).
function St(e) {
  let t = x(e),
    n = new f(),
    r = t.range(0.13, 0.18),
    i = t.pick([U(t.pick(I), 0.3), U(R.walnut, 0.5), T(13624298, 0.4), O()]);
  D(
    n,
    [
      [0, 0],
      [r * 0.4, 0],
      [r * 0.45, 0.01],
      [r, 0.07],
      [r * 1.02, 0.075],
    ],
    i,
    0,
    0,
    0,
    32,
  );
  let a = [
    [12597547, 0.038],
    [8367674, 0.038],
    [15965202, 0.04],
    [15122985, 0.035],
    [5909066, 0.012],
  ];
  for (let e = 0; e < t.int(4, 8); e++) {
    let [i, o] = t.pick(a),
      s = t() * 7,
      c = t() * r * 0.55;
    if (o < 0.02) {
      for (let e = 0; e < 8; e++)
        b(
          n,
          o,
          U(i, 0.3),
          Math.cos(s) * c + t.range(-0.02, 0.02),
          0.03 + e * 0.004 + o,
          Math.sin(s) * c + t.range(-0.02, 0.02),
          6,
        );
      continue;
    }
    let l = b(
      n,
      o,
      U(i, 0.45),
      Math.cos(s) * c,
      0.035 + o * 0.8 + (e > 4 ? o : 0),
      Math.sin(s) * c,
      14,
    );
    i === 15122985 && l.scale.set(2.2, 0.8, 0.8);
  }
  return F(n);
}
var Ct = [
    {
      key: `sofa`,
      name: `Sofa`,
      desc: `2- or 3-seat, fabric or leather, 5 leg styles, throw pillows, blanket`,
      build: Qe,
    },
    {
      key: `sectional`,
      name: `Sectional`,
      desc: `L-shaped with a chaise on either side`,
      build: $e,
    },
    {
      key: `armchair`,
      name: `Armchair`,
      desc: `Club, wingback, mid-century or slipper chair`,
      build: et,
    },
    {
      key: `recliner`,
      name: `Recliner`,
      desc: `Leather or fabric, footrest up or down`,
      build: tt,
    },
    {
      key: `dining`,
      name: `Dining chair`,
      desc: `Spindle, ladder, shaker, parsons, bentwood or metal café`,
      build: nt,
    },
    {
      key: `coffeetable`,
      name: `Coffee table`,
      desc: `Wood, glass, round, marble or trunk, styled`,
      build: rt,
    },
    {
      key: `sidetable`,
      name: `Side table`,
      desc: `Nightstand, ceramic drum, C-table or tripod`,
      build: it,
    },
    {
      key: `bookcase`,
      name: `Bookcase`,
      desc: `Full of books, bins and ornaments`,
      build: at,
    },
    {
      key: `tv`,
      name: `TV on a stand`,
      desc: `Flat screen (on or off) with soundbar and console, or an old CRT`,
      build: ot,
    },
    {
      key: `dresser`,
      name: `Dresser`,
      desc: `Chest of drawers with styling on top`,
      build: st,
    },
  ].map((e) => ({ ...e, cat: `furniture` })),
  wt = [
    {
      key: `floorlamp`,
      name: `Floor lamp`,
      desc: `Drum shade, arc, tripod, torchiere or reading lamp`,
      build: ut,
    },
    {
      key: `desklamp`,
      name: `Desk lamp`,
      desc: `Anglepoise, banker's, LED bar or dome`,
      build: dt,
    },
    {
      key: `tablelamp`,
      name: `Table lamp`,
      desc: `Ginger jar, column, gourd, glass or metal base`,
      build: ft,
    },
    {
      key: `fan`,
      name: `Ceiling fan`,
      desc: `3-5 blades, with or without a light kit; spins`,
      build: pt,
    },
    {
      key: `pendant`,
      name: `Pendant light`,
      desc: `Dome, globe, cage, drum or office LED bar`,
      build: mt,
    },
  ].map((e) => ({ ...e, cat: `lighting` })),
  Tt = [
    {
      key: `door`,
      name: `Interior door`,
      desc: `Six-panel, shaker, flush, two-panel, louvered, French, barn or glass office door; closed or ajar`,
      build: gt,
    },
  ].map((e) => ({ ...e, cat: `doors` })),
  Et = [
    {
      key: `rug`,
      name: `Rug`,
      desc: `Persian, kilim, stripe, modern, jute, shag, round, runner or office carpet`,
      build: yt,
    },
  ].map((e) => ({ ...e, cat: `rugs` })),
  Dt = [
    {
      key: `vase`,
      name: `Vases`,
      desc: `Ceramic or glass, 1-3, with dried grass, branches or flowers`,
      build: bt,
    },
    {
      key: `candles`,
      name: `Candles`,
      desc: `Pillars and jars, on a tray or not`,
      build: xt,
    },
    {
      key: `fruit`,
      name: `Fruit bowl`,
      desc: `Apples, oranges, lemons, bananas and grapes`,
      build: St,
    },
  ].map((e) => ({ ...e, cat: `decor` }));
function Y(
  t,
  r,
  i,
  a,
  o = r.pick([
    `terracotta`,
    `glazed`,
    `glazed`,
    `concrete`,
    `basket`,
    `metal`,
    `cylinder`,
  ]),
) {
  let s = {
      terracotta: U(11887934, 0.85),
      glazed: U(r.pick(I), 0.3),
      concrete: U(10328724, 0.95),
      basket: U(12755050, 0.95),
      metal: r.pick([O(), U(12095807, 0.3, 0.9), U(2039586, 0.4, 0.6)]),
      cylinder: U(r.pick([15855593, 2039586, 10467240]), 0.5),
    }[o],
    c =
      o === `terracotta`
        ? [
            [0, 0],
            [i * 0.72, 0],
            [i * 0.95, a * 0.82],
            [i, a * 0.82],
            [i, a],
            [i * 0.93, a],
          ]
        : o === `cylinder` || o === `metal`
          ? [
              [0, 0],
              [i * 0.95, 0],
              [i, 0.01],
              [i, a],
              [i * 0.94, a],
            ]
          : o === `basket`
            ? [
                [0, 0],
                [i * 0.8, 0],
                [i, a * 0.9],
                [i * 1.02, a],
                [i * 0.95, a],
              ]
            : o === `concrete`
              ? [
                  [0, 0],
                  [i * 0.85, 0],
                  [i, a * 0.3],
                  [i, a],
                  [i * 0.88, a],
                ]
              : [
                  [0, 0],
                  [i * 0.55, 0],
                  [i * 0.9, a * 0.35],
                  [i, a * 0.8],
                  [i * 0.9, a],
                  [i * 0.84, a],
                ];
  if ((D(t, c, s, 0, 0, 0, 28), o === `basket`))
    for (let r = 1; r < 6; r++) {
      let o = new e(
        new n(i * (0.8 + (0.2 * r) / 6) + 0.003, 0.004, 4, 32),
        U(10255434, 0.95),
      );
      ((o.rotation.x = Math.PI / 2), (o.position.y = (a * r) / 6), t.add(o));
    }
  return (
    L(t, i * 0.9, i * 0.9, 0.01, U(3877406, 1), 0, a * 0.88, 0),
    o === `terracotta` &&
      r.chance(0.5) &&
      L(t, i * 1.05, i * 0.9, 0.025, U(11887934, 0.85), 0, 0, 0),
    a * 0.9
  );
}
function Ot(e, t, n, r) {
  let i = U(t.pick([6176555, 11897432, 2039586]), 0.55);
  for (let t = 0; t < 4; t++) {
    let a = (t / 4) * Math.PI * 2 + Math.PI / 4;
    L(
      e,
      0.012,
      0.009,
      r,
      i,
      Math.cos(a) * n * 0.8,
      0,
      Math.sin(a) * n * 0.8,
      8,
    ).rotation.set(Math.sin(a) * 0.12, 0, -Math.cos(a) * 0.12);
  }
  return (L(e, n, n, 0.02, i, 0, r - 0.02, 0, 20), r);
}
var kt = {
    fig: (e) => {
      (e.moveTo(0, 0),
        e.bezierCurveTo(0.55, 0.15, 0.6, 0.85, 0.08, 1),
        e.lineTo(-0.08, 1),
        e.bezierCurveTo(-0.6, 0.85, -0.55, 0.15, 0, 0));
    },
    oval: (e) => {
      (e.moveTo(0, 0),
        e.bezierCurveTo(0.45, 0.2, 0.4, 0.8, 0, 1),
        e.bezierCurveTo(-0.4, 0.8, -0.45, 0.2, 0, 0));
    },
    heart: (e) => {
      (e.moveTo(0, 1),
        e.bezierCurveTo(0.35, 0.7, 0.6, 0.35, 0.3, 0.05),
        e.quadraticCurveTo(0.15, -0.05, 0, 0.08),
        e.quadraticCurveTo(-0.15, -0.05, -0.3, 0.05),
        e.bezierCurveTo(-0.6, 0.35, -0.35, 0.7, 0, 1));
    },
    blade: (e) => {
      (e.moveTo(-0.5, 0),
        e.lineTo(0.5, 0),
        e.bezierCurveTo(0.6, 0.5, 0.4, 0.85, 0, 1),
        e.bezierCurveTo(-0.4, 0.85, -0.6, 0.5, -0.5, 0));
    },
    lance: (e) => {
      (e.moveTo(0, 0),
        e.bezierCurveTo(0.3, 0.2, 0.3, 0.7, 0, 1),
        e.bezierCurveTo(-0.3, 0.7, -0.3, 0.2, 0, 0));
    },
    monstera: (e) => {
      let t = [];
      for (let e = 0; e <= 28; e++) {
        let n = e / 28,
          r = Math.PI * (0.5 - n) * 1.9,
          i = 0.55 * (1 - 0.25 * Math.abs(Math.cos(r)));
        (Math.abs(Math.sin(n * Math.PI * 7)) < 0.25 &&
          n > 0.08 &&
          n < 0.92 &&
          (i *= 0.45),
          t.push([Math.cos(r) * i, 0.5 + Math.sin(r) * i * 0.9]));
      }
      e.moveTo(0, 0.05);
      for (let [n, r] of t) e.lineTo(n, r);
      e.lineTo(0, 0.05);
    },
  },
  At = {};
function jt(e) {
  let t = `f_` + e;
  if (!At[t]) {
    let n = new y();
    kt[e](n);
    let r = new s(n, 8);
    (r.applyMatrix4(
      new ee().set(0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1),
    ),
      (At[t] = r));
  }
  return At[t];
}
