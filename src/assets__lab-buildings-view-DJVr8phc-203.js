// assets__lab-buildings-view-DJVr8phc 203 — box
// Lines 64057-64403 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function by(e, t, n) {
  for (let [r, i] of [
    [0, 0.35],
    [1, 0.5],
  ]) {
    let a = 5.9 + r * 0.3,
      o = 10.1 - r * 0.3;
    (V_(e, `miDeco`, t, n, a, a + 0.35, 0, 5.4 - r * 0.3, 0, i),
      V_(e, `miDeco`, t, n, o - 0.35, o, 0, 5.4 - r * 0.3, 0, i),
      V_(e, `miDeco`, t, n, a, o, 4.1, 5.4 - r * 0.3, 0, i));
  }
  G_(e, `miSgPump`, t, Y(n, 8, 4.5), 6.4, 9.6, 4.25, 4.95, 0.5, 0.52);
  let r = [-1, 3.2],
    i = 15.5;
  (V_(e, `miDeco`, t, n, r[0], r[1], 0, i, -3.2, 1),
    V_(
      e,
      `miConcreteDark`,
      t,
      n,
      r[0] - 0.06,
      r[1] + 0.06,
      0,
      0.9,
      -3.2600000000000002,
      1.06,
    ));
  let a = Y(n, 1, n.H - 0.5);
  (e.box(
    `miDeco`,
    t,
    a,
    r[0] + 0.3,
    r[1] - 0.3,
    i,
    16.3,
    -2.9000000000000004,
    0.7,
  ),
    e.box(
      `miDeco`,
      t,
      a,
      r[0] + 0.7,
      r[1] - 0.7,
      16.3,
      16.9,
      -2.5,
      0.30000000000000004,
    ));
  for (let [i, a] of [
    [1.1, `f`],
    [-1.1, `s`],
  ])
    for (let o = 2.5; o < 13; o += 1) {
      let s = Y(n, 1.1, o);
      a === `f`
        ? (e.box(`glassGrey`, t, s, i - 0.35, i + 0.35, o, o + 0.9, 1, 1.02),
          e.box(`miGreen`, t, s, i - 0.4, i + 0.4, o + 0.9, o + 1, 1, 1.05))
        : (e.box(
            `glassGrey`,
            t,
            s,
            r[0] - 0.02,
            r[0],
            o,
            o + 0.9,
            -1.45,
            -0.75,
          ),
          e.box(
            `miGreen`,
            t,
            s,
            r[0] - 0.05,
            r[0],
            o + 0.9,
            o + 1,
            -1.5,
            -0.7,
          ));
    }
  sv(e, t, a, 1.1, 16.9, -1.1, 4);
}
function xy(e, t, n) {
  for (let r of [2.8, 7.8]) {
    let i = Y(n, r, 1.6);
    Z_(
      e,
      `miGreen`,
      t,
      i,
      [
        [r, 1.6, -0.1],
        [r, 1.6, 1.8],
        [r, -0.3, 1.8],
      ],
      0.6,
      14,
    );
    for (let n of [0.15, 1.1])
      e.add(
        `miGreen`,
        new s(0.72, 0.72, 0.12, 14).rotateX(Math.PI / 2).translate(r, 1.6, n),
        t,
        i,
      );
    e.add(`miGreen`, new s(0.72, 0.72, 0.12, 14).translate(r, 0.6, 1.8), t, i);
  }
  let r = Y(n, 2.8, 2);
  (e.box(`miSteelDark`, t, r, 2.6, 3, 2.2, 3, 0.5, 0.8),
    e.add(
      `miRed`,
      new u(0.35, 0.035, 4, 14).rotateX(Math.PI / 2).translate(2.8, 3.1, 0.65),
      t,
      r,
    ));
}
function Sy() {
  return {
    key: `miPumpingStation`,
    name: `Canal Pumping Station 2`,
    plain: 14800831,
    desc: `Art-deco pumping station: cream concrete with full-height fins and stepped parapet caps, tall green-framed windows, stepped entrance surround, a corner tower with a glazed slot and ziggurat top, and giant flanged intake pipes plunging from the side wall.`,
    W: 16,
    D: 12,
    style: {
      wall: `miDeco`,
      t: 0.35,
      bay: 3.2,
      floors: [7],
      parapet: 1.4,
      win: {
        w: 1.5,
        h: 4.4,
        sill: 1.3,
        type: `grid`,
        lites: [2, 6],
        frame: `miGreen`,
        sillMat: `miConcrete`,
        rec: 0.2,
        curtains: 0,
      },
      door: {
        w: 1.8,
        h: 2.6,
        transom: 1.2,
        frame: `miGreen`,
        glazed: !0,
        mat: `miDoorGreen`,
        rec: 0.3,
      },
      pilaster: { mat: `miDeco`, w: 0.5, out: 0.3, through: !0 },
      base: { mat: `miConcreteDark`, h: 0.9, out: 0.06 },
    },
    front: {
      kinds: (e, t) => (t === 0 ? `solid` : t === 2 ? `door` : `window`),
      extra: k(yy, by),
    },
    back: { kinds: () => `window`, extra: yy },
    left: { kinds: (e, t) => (t === 3 ? `solid` : `window`), extra: yy },
    right: { kinds: (e, t) => (t === 1 ? `door` : `window`), extra: k(yy, xy) },
    extra: (e, t, n) => {
      (rv(e, t, 0, 4.5, -n.D / 2 - 2.6, 0, 12, 1.6, `miGreen`, {
        bands: [0.25, 0.5, 0.75],
        ladder: 0,
      }),
        O_(n, 18.2));
    },
  };
}
function Cy(e, t, n) {
  let r = 1.2,
    i = 5.6;
  for (let [a, o, s] of H_(n, -0.5, n.L + 0.5)) {
    let c = n.grid[0][s];
    (e.box(`miConcrete`, t, c, a, o, 0, r, 0, 4),
      e.box(
        `timber`,
        t,
        c,
        a,
        o,
        0.3999999999999999,
        1.0999999999999999,
        4,
        4.15,
      ),
      e.box(`miSteel`, t, c, a, o, 1.14, r, 3.9, 4.02),
      e.box(`miCorrGrey`, t, c, a, o, i, 5.8, 0, 5.2),
      e.box(`miWhite`, t, c, a, o, 5.35, 5.949999999999999, 5.12, 5.24));
  }
  G_(
    e,
    `miSgPortage`,
    t,
    Y(n, 18, i),
    8,
    28,
    5.3999999999999995,
    5.8999999999999995,
    5.24,
    5.26,
  );
  for (let r = 0.3; r < n.L; r += 5.9) {
    let i = Y(n, r, 5);
    (D(e, `miSteelDark`, t, i, [r, 4.95, 0.1], [r, 5.55, 3.4], 0.12),
      D(e, `miSteelDark`, t, i, [r, 5.8, 5], [r, 6.4, 0.05], 0.04));
  }
  for (let i = 0; i < 4; i++)
    e.box(
      `miConcrete`,
      t,
      Y(n, -1, 1),
      -0.5 - (i + 1) * 0.32,
      -0.5 - i * 0.32,
      0,
      r - (i + 1) * 0.24,
      0.8,
      2.8,
    );
  let a = j_(9);
  for (let i of [7.5, 8.7, 20.2, 31.5]) {
    let o = Y(n, i, 1),
      s = 0.6 + a() * 0.7;
    (e.box(`wood`, t, o, i - 0.5, i + 0.5, r, 1.3399999999999999, 0.4, 1.4),
      e.box(
        a() < 0.5 ? `woodDoor` : `miCanvas`,
        t,
        o,
        i - 0.45,
        i + 0.45,
        1.3399999999999999,
        1.3399999999999999 + s,
        0.45,
        1.35,
      ));
  }
}
function wy() {
  return {
    key: `miShippingDepot`,
    name: `Portage Freight Transfer`,
    plain: 3957380,
    desc: `Freight transfer depot: blue corrugated shed with five roll-up doors on a raised concrete platform with rubbing strip, long cantilevered canopy on raking brackets and tie rods, crated freight and a stack of shipping containers at the end.`,
    W: 36,
    D: 14,
    style: {
      wall: `miCorrBlue`,
      t: 0.25,
      bay: 6,
      floors: [6.5],
      win: {
        w: 2.4,
        h: 1,
        sill: 3.8,
        type: `grid`,
        lites: [3, 1],
        frame: `miSteelDark`,
        rec: 0.06,
        curtains: 0,
      },
      loading: { type: `rollup`, dock: !1, w: 3.8, h: 4.4 },
      door: {
        w: 1,
        h: 2.1,
        transom: 0,
        frame: `miSteelDark`,
        mat: `miDoorSteel`,
        rec: 0.1,
      },
      roof: {
        ridge: `x`,
        pitch: 8 * C_,
        over: 0.4,
        mat: `miRoofTin`,
        fascia: `miWhite`,
        gutter: !0,
      },
    },
    front: { kinds: (e, t) => (t === 0 ? `window` : `loading`), extra: Cy },
    back: {
      kinds: (e, t) => (t === 2 ? `loading` : t === 4 ? `door` : `window`),
    },
    left: { kinds: () => `solid` },
    right: { kinds: (e, t) => (t === 1 ? `door` : `window`) },
    extra: (e, t, n) => {
      let r = -n.W / 2 - 1.45;
      (mv(e, t, 0, r, 0, 3.3, `miBoxRed`),
        mv(e, t, 0, r, 0, -3.3, `miBoxBlue`),
        mv(e, t, 0, r, 2.59, 0.4, `miBoxGreen`));
      for (let r of [-4, 3]) {
        let i = n.roofTop - 0.3;
        Tv(e, t, 0, r * 3, i, 0);
      }
    },
  };
}
function Ty() {
  return (
    B_(),
    [
      Dv(),
      kv(),
      jv(),
      Pv(),
      Rv(),
      zv(),
      Bv(),
      Hv(),
      Wv(),
      Kv(),
      Jv(),
      Xv(),
      Qv(),
      ey(),
      ny(),
      ay(),
      oy(),
      sy(),
      ly(),
      uy(),
      fy(),
      hy(),
      vy(),
      Sy(),
      wy(),
    ]
  );
}
var Ey = Math.PI / 180,
  Z = `ironDark`,
  Dy = (e, t) => new h(e, t),
  Q = (e, t) => Math.min(e.nb - 1, Math.max(0, Math.floor(t / e.bw))),
  Oy = (e, t) => (t < e.top ? e.ys[t + 1] : e.H) - e.ys[t],
  ky = (e, t = 1) =>
    `rgb(${[(e >> 16) & 255, (e >> 8) & 255, e & 255].map((e) => Math.max(0, Math.min(255, Math.round(e * t)))).join(`,`)})`;
function Ay(e) {
  let t = e >>> 0;
  return () => (
    (t = (Math.imul(t, 1664525) + 1013904223) >>> 0),
    t / 4294967296
  );
}
function jy(e, t, n) {
  return He(e, t, n);
}
