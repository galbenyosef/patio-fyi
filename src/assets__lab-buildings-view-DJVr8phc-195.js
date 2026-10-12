// assets__lab-buildings-view-DJVr8phc 195 — box
// Lines 61630-61973 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function Wv() {
  let e = { para: 1.1 },
    t = yv(e.para, vv(`miBrickBrown`, `limestone`));
  return {
    key: `miArmory`,
    name: `State Armory`,
    plain: 6961704,
    desc: `Castellated brick armory: crenellated parapet with limestone coping, square corner towers with arrow slits and battlements, round-arched sally port with an iron-grilled tympanum and steel doors, flag on the tower.`,
    W: 24,
    D: 16,
    style: {
      wall: `miBrickBrown`,
      t: 0.45,
      bay: 24 / 7,
      floors: [4.2, 3.8],
      parapet: e.para,
      win0: {
        w: 0.5,
        h: 1.8,
        sill: 1.4,
        type: `grid`,
        lites: [1, 2],
        frame: w_,
        header: `limestone`,
        headerH: 0.25,
        sillMat: `limestone`,
        rec: 0.25,
        curtains: 0,
      },
      win: {
        w: 0.95,
        h: 2.2,
        sill: 1,
        type: `grid`,
        lites: [2, 4],
        frame: w_,
        header: `limestone`,
        headerH: 0.3,
        sillMat: `limestone`,
        rec: 0.2,
        curtains: 0.2,
      },
      door: {
        w: 2.6,
        h: 3,
        transom: 0,
        frame: w_,
        mat: `miDoorGreen`,
        rec: 0.3,
      },
      base: { mat: `limestone`, h: 0.9, out: 0.06 },
      belt: { mat: `limestone`, h: 0.2, out: 0.05 },
    },
    front: {
      kinds: (e, t) => (t === 3 ? (e === 0 ? `door` : `solid`) : `window`),
      extra: k(t, Uv, (e, t, n) => {
        let r = n.L / 2,
          i = n.grid[0][3],
          a = n.grid[1][3];
        (e.add(
          `limestone`,
          new S(
            (() => {
              let e = new C();
              return (
                e.moveTo(r + 1.3, 3),
                e.absarc(r, 3, 1.3, 0, Math.PI, !1),
                e.lineTo(r - 1.7, 3),
                e.absarc(r, 3, 1.7, Math.PI, 0, !0),
                e.closePath(),
                e
              );
            })(),
            { depth: 0.2, bevelEnabled: !1, curveSegments: 14 },
          ).translate(0, 0, -0.02),
          t,
          i,
        ),
          e.add(
            `miSteelDark`,
            new y(1.3, 20, 0, Math.PI).translate(r, 3, 0.01),
            t,
            i,
          ));
        for (let n = -3; n <= 3; n++)
          e.box(
            w_,
            t,
            i,
            r + n * 0.36 - 0.03,
            r + n * 0.36 + 0.03,
            3,
            3 + Math.sqrt(Math.max(0, 1.69 - (n * 0.36) ** 2)),
            0.01,
            0.05,
          );
        for (let n of [-1, 1])
          e.box(
            `limestone`,
            t,
            i,
            r + n * 1.5 - 0.2,
            r + n * 1.5 + 0.2,
            0,
            3,
            -0.02,
            0.18,
          );
        G_(e, `miSgArmory`, t, a, r - 1.6, r + 1.6, 5, 5.8, 0.01, 0.04);
        for (let n of [-1, 1])
          (e.box(
            w_,
            t,
            i,
            r + n * 2.1 - 0.08,
            r + n * 2.1 + 0.08,
            2.3,
            2.6,
            0,
            0.2,
          ),
            e.box(
              `miLamp`,
              t,
              i,
              r + n * 2.1 - 0.12,
              r + n * 2.1 + 0.12,
              2,
              2.3,
              0.05,
              0.3,
            ));
      }),
    },
    back: {
      kinds: (e, t) => (e === 0 && t === 3 ? `door` : `window`),
      extra: k(t, Uv),
    },
    left: { kinds: () => `window`, extra: t },
    right: { kinds: () => `window`, extra: t },
    extra: (e, t, n) => {
      (sv(e, t, 0, -n.W / 2 + 0.5, n.H + 3.12, n.D / 2 - 0.3, 5),
        O_(n, n.H + 8.3));
    },
  };
}
function Gv(e, t, n) {
  let i = 0.7,
    a = 2.4,
    o = 3.3;
  for (let [r, s, c] of H_(n, -0.2, 20.2)) {
    let l = n.grid[0][c];
    (e.box(`wood`, t, l, r, s, 0.6, i, 0, a),
      e.box(`miConcreteDark`, t, l, r, s, 0, 0.6, 2.28, 2.35));
    let u = n.grid[1][c];
    (e.box(`miRoofGreen`, t, u, r, s, o, 3.4, 0, 2.6),
      e.box(`trimWhite`, t, u, r, s, 3.0999999999999996, 3.42, 2.54, 2.62));
  }
  for (let r = -0.1; r <= 20.15; r += 20.2 / 7)
    e.box(
      `trimWhite`,
      t,
      Y(n, r, 1.5),
      r - 0.07,
      r + 0.07,
      i,
      o,
      2.35,
      2.4899999999999998,
    );
  G_(
    e,
    `miSgHosp`,
    t,
    Y(n, 10, 3.2),
    5,
    15,
    3.1199999999999997,
    3.4,
    2.62,
    2.6399999999999997,
  );
  let s = Y(n, 23, 1),
    c = Math.hypot(6.3, 0.6499999999999999),
    l = Math.atan2(0.6499999999999999, 6.3);
  (e.add(
    `miConcrete`,
    new r(c, 0.12, 2).rotateZ(-l).translate(20.2 + 3.15, 0.75 / 2 - 0.06, 1.2),
    t,
    s,
  ),
    D(e, `miSteel`, t, s, [20.2, 1.6, 2.2], [26.5, 0.95, 2.2], 0.05));
  for (let n of [21.5, 24, 26.4])
    e.box(
      `miSteel`,
      t,
      s,
      n - 0.03,
      n + 0.03,
      0,
      1.6 - ((n - 20.2) / 6.3) * 0.6499999999999999,
      2.17,
      2.23,
    );
  for (let r = 0; r < 3; r++)
    e.box(
      `miConcrete`,
      t,
      Y(n, 4, 1),
      3.2,
      4.8,
      0,
      i - (r + 1) * (i / 4),
      a + r * 0.3,
      a + (r + 1) * 0.3,
    );
  let u = (r, a) =>
    Q_(e, t, Y(n, (r + a) / 2, 1.5), [r, 2.3], [a, 2.3], i, `trimWhite`, 0.9);
  (u(-0.1, 3.1), u(4.9, 20.1));
}
function Kv() {
  let e = 20 * C_;
  return {
    key: `miFieldHospital`,
    name: `Field Hospital Ward 12`,
    plain: 15328988,
    desc: `Prefabricated field-hospital ward: white clapboard raised on a block plinth, full-length covered deck with a stretcher ramp and steps, red crosses on both roof slopes and the gable, generator set alongside.`,
    W: 26,
    D: 10,
    style: {
      wall: `miLapWhite`,
      floorMat: [`miConcreteDark`],
      t: 0.22,
      bay: 2.6,
      floors: [0.7, 3.1],
      win: {
        w: 1.2,
        h: 1.2,
        sill: 0.9,
        type: `sash`,
        lites: [2, 2],
        frame: `trimWhite`,
        rec: 0.08,
        curtains: 0.8,
      },
      door: {
        w: 1.6,
        h: 2.2,
        transom: 0.3,
        frame: `trimWhite`,
        glazed: !0,
        mat: `miDoorSteel`,
        rec: 0.12,
      },
      corners: `trimWhite`,
      eaveTrim: `trimWhite`,
      roof: {
        ridge: `x`,
        pitch: e,
        over: 0.6,
        mat: `miRoofGreen`,
        fascia: `trimWhite`,
        gutter: !0,
      },
    },
    front: {
      kinds: (e, t) => (e === 0 ? `solid` : t === 5 ? `door` : `window`),
      extra: Gv,
    },
    back: {
      kinds: (e, t) => (e === 0 ? `solid` : t === 2 ? `door` : `window`),
      extra: (e, t, n) => {
        for (let r = 0; r < 4; r++)
          e.box(
            `miConcrete`,
            t,
            Y(n, 6.5, 0.3),
            5.7,
            7.3,
            0,
            0.7 - r * 0.175,
            r * 0.3,
            (r + 1) * 0.3,
          );
      },
    },
    right: {
      kinds: (e, t) => (e === 0 || t === 1 || t === 2 ? `solid` : `window`),
      signs: [
        { mat: `miSgCross`, rect: [3.28, 6.28, 0.9, 3.9], z0: 0.01, z1: 0.02 },
      ],
    },
    left: { kinds: (e, t) => (e === 0 ? `solid` : `window`) },
    extra: (t, n, r) => {
      let i = { pitch: e },
        a = r.H + (r.D / 2) * Math.tan(e),
        o = e;
      for (let e of [1, -1]) {
        let r = new fe(
            0,
            a - Math.sin(o) * 3 + Math.cos(o) * 0.16,
            e * (Math.cos(o) * 3 + Math.sin(o) * 0.16),
          ),
          i = n
            .clone()
            .multiply(new l().makeTranslation(r.x, r.y, r.z))
            .multiply(new l().makeRotationX(e * o));
        t.box(`miSgCrossDisc`, i, 0, -1.7, 1.7, 0, 0.02, -1.7, 1.7, {
          planar: (e, t, n) => [(e + 1.7) / 3.4, (n + 1.7) / 3.4],
        });
      }
      let s = -r.W / 2 - 1.3;
      (t.box(`miOlive`, n, 0, s - 0.8, s + 0.8, 0, 1.5, -2, 0.6),
        t.box(`louver`, n, 0, s - 0.6, s + 0.6, 0.3, 1.2, 0.6, 0.62),
        X(t, w_, n, 0, s + 0.3, -1.6, 1.5, 2.6, 0.08, 0.08, 8),
        X_(
          t,
          `miRubber`,
          n,
          0,
          [s + 0.8, 0.1, -1],
          [-r.W / 2, 0.1, -1],
          0.04,
          6,
        ));
      for (let e of [-4, 5])
        X(
          t,
          w_,
          n,
          0,
          e,
          -2.2,
          wv(r, i, 2.2) - 0.3,
          wv(r, i, 2.2) + 0.6,
          0.08,
          0.08,
          8,
        );
      for (let e of [-10, 10])
        A(t, n, `miCmuGrey`, e, -1.8, r.H - 0.5, r.roofTop + 0.4, 0.6, 0.5);
    },
  };
}
