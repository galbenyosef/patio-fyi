// assets__lab-buildings-view-DY6ytqNM 197 — box
// Lines 61984-62306 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function qv(e, t, n) {
  let r = 2.6,
    o = -0.3,
    s = n.L + 0.3;
  for (let [i, c, l] of H_(n, o, s)) {
    let o = n.grid[0][l],
      s = n.grid[1][l];
    (e.box(`miBrickRed`, t, o, i, c, 0, 0.2, 0, 2.8000000000000003),
      e.box(`woodDark`, t, s, i, c, 3.4, 3.65, 0, r),
      e.box(`trimWhite`, t, s, i, c, 3.25, 3.65, 2.54, 2.62),
      e.box(`trimWhite`, t, s, i, c, 4.6, 4.68, 2.48, 2.58));
    for (let n = i + 0.07; n < c - 0.03; n += 0.15)
      e.box(
        `trimWhite`,
        t,
        s,
        n - 0.02,
        n + 0.02,
        3.65,
        4.6,
        2.5100000000000002,
        2.5500000000000003,
      );
    let u = 2.9,
      d = 0.55;
    (e.add(
      `miTile`,
      new a(c - i, 0.1, Math.hypot(u, d))
        .rotateX(Math.atan2(d, u))
        .translate((i + c) / 2, 6.75 - d / 2, u / 2),
      t,
      s,
    ),
      e.box(
        `trimWhite`,
        t,
        s,
        i,
        c,
        6,
        6.22,
        2.3000000000000003,
        2.5500000000000003,
      ));
  }
  for (let a = 0; a <= 7; a++) {
    let c = -0.15 + (a * (s - o - 0.3)) / 7;
    if (
      (V_(
        e,
        `trimWhite`,
        t,
        n,
        c - 0.14,
        c + 0.14,
        0.2,
        6,
        2.2800000000000002,
        2.56,
      ),
      a % 2 && a < 7)
    ) {
      let a = Y(n, c + 1.4, 3);
      (e.box(w_, t, a, c + 1.38, c + 1.42, 2.8, 3.4, r / 2 - 0.02, 1.32),
        e.add(
          `miLamp`,
          new i(0.14, 10, 8).translate(c + 1.4, 2.7, r / 2),
          t,
          a,
        ));
    }
  }
  G_(
    e,
    `miSgClub`,
    t,
    Y(n, n.L / 2, 4.1),
    n.L / 2 - 2.1,
    n.L / 2 + 2.1,
    3.75,
    4.4,
    r,
    2.63,
  );
}
function Jv() {
  return {
    key: `miOfficersClub`,
    name: `Officers' Club`,
    plain: 15657696,
    desc: `Colonial officers' club: white stucco under a red-tiled hip roof, two-storey gallery of square columns with a balustraded upper verandah, French doors, green shutters, hanging lanterns and a gilt-lettered club board.`,
    W: 20,
    D: 12,
    style: {
      wall: `miStuccoWhite`,
      t: 0.3,
      bay: 20 / 7,
      floors: [3.6, 3.4],
      win: {
        w: 1.2,
        h: 2,
        sill: 0.7,
        type: `sash`,
        lites: [2, 3],
        frame: `trimWhite`,
        shutter: `shutterGreen`,
        rec: 0.1,
        curtains: 0.5,
      },
      door: {
        w: 1.25,
        h: 2.4,
        transom: 0.4,
        frame: `trimWhite`,
        glazed: !0,
        mat: `woodDoor`,
        rec: 0.15,
      },
      base: { mat: `miConcrete`, h: 0.4, out: 0.04 },
      eaveTrim: `trimWhite`,
      roof: Sv,
    },
    front: {
      kinds: (e, t) => (e === 1 || t === 3 ? `door` : `window`),
      extra: qv,
    },
    back: { kinds: (e, t) => (e === 0 && t === 3 ? `door` : `window`) },
    left: { kinds: () => `window` },
    right: { kinds: () => `window` },
    extra: (e, t, n) => {
      let r = xv(e, t, n, `miTile`, 26 * C_, 0.6, `trimWhite`);
      for (let i of [-5.5, 5.5])
        j(e, t, `miStuccoWhite`, i, -1.5, n.H - 0.5, r + 0.6, 1, 0.7);
      O_(n, r + 1.2);
    },
  };
}
function Yv(e, t, n) {
  let r = 3.3;
  (U_(e, `miConcrete`, t, n, 11, 19, r, 3.52, 0, 2.4, void 0, 2),
    U_(
      e,
      `miSteelDark`,
      t,
      n,
      11,
      19,
      3.1799999999999997,
      3.6399999999999997,
      2.3,
      2.42,
      void 0,
      2,
    ),
    G_(
      e,
      `miSgMess`,
      t,
      Y(n, 15, 2),
      12.2,
      17.8,
      3.2199999999999998,
      3.5999999999999996,
      2.42,
      2.44,
    ));
  for (let i of [11.4, 18.6])
    X(
      e,
      `miSteelDark`,
      t,
      Y(n, i, 1),
      i,
      2.1999999999999997,
      0,
      r,
      0.08,
      0.08,
      8,
    );
  for (let i of [11.8, 18.2])
    e.box(
      `miLamp`,
      t,
      Y(n, i, 2),
      i - 0.1,
      i + 0.1,
      3.0999999999999996,
      r,
      1.1,
      1.3,
    );
}
function Xv() {
  let e = 20 * C_;
  return {
    key: `miMessHall`,
    name: `Dining Facility 4`,
    plain: 12890250,
    desc: `Base mess hall: tan block walls with big steel windows, red tin roof crowned by a louvred ridge monitor, twin entries under a steel canopy, kitchen dock, dumpster and stainless exhaust stacks.`,
    W: 30,
    D: 14,
    style: {
      wall: `miCmuTan`,
      t: 0.3,
      bay: 3.75,
      floors: [4.6],
      win: {
        w: 2.2,
        h: 2,
        sill: 1.2,
        type: `grid`,
        lites: [3, 3],
        frame: `miSteelDark`,
        rec: 0.12,
        sillMat: `miConcrete`,
        curtains: 0.3,
      },
      door: {
        w: 1.8,
        h: 2.3,
        transom: 0.4,
        frame: w_,
        glazed: !0,
        mat: `miDoorSteel`,
        rec: 0.15,
      },
      loading: { type: `rollup`, dock: !0, w: 2.6, h: 2.8 },
      base: { mat: `miConcreteDark`, h: 0.5, out: 0.04 },
      roof: {
        ridge: `x`,
        pitch: e,
        over: 0.5,
        mat: `miRoofRed`,
        fascia: `trimWhite`,
        gutter: !0,
      },
    },
    front: {
      kinds: (e, t) => (t === 3 || t === 4 ? `door` : `window`),
      extra: A(Yv, _v([0.25, 29.75])),
    },
    back: {
      kinds: (e, t) => (t === 6 ? `door` : `window`),
      extra: _v([0.25, 29.75]),
    },
    right: {
      kinds: (e, t) => [`window`, `loading`, `solid`, `door`][t],
      extra: (e, t, n) => {
        let r = n.grid[0][2];
        (e.box(`miGreen`, t, r, 7.2, 9.2, 0.25, 1.4, 0.3, 1.5),
          e.add(
            `miGreen`,
            new a(2.05, 0.06, 1.3).rotateX(0.18).translate(8.2, 1.52, 0.9),
            t,
            r,
          ));
        for (let n of [7.4, 9])
          e.add(
            `miRubber`,
            new C(0.12, 0.12, 0.1, 10)
              .rotateX(Math.PI / 2)
              .translate(n, 0.12, 1.3),
            t,
            r,
          );
      },
    },
    left: { kinds: () => `window` },
    extra: (t, n, r) => {
      let i = r.H + 7 * Math.tan(e),
        a = i - 0.55,
        o = a + 1.3;
      t.box(`louver`, n, 0, -10.5, 10.5, a, o, -1.3, 1.3);
      for (let r of [-10.5, 10.5])
        K_(
          t,
          `miCmuTan`,
          D_(n, r, 0, Math.PI / 2),
          0,
          -1.55,
          1.55,
          o,
          1.55 * Math.tan(e),
          -0.1,
          0.1,
        );
      Cv(t, `miRoofRed`, n, 0, -10.9, 10.9, -1.8, 1.8, o, e, !1, `trimWhite`);
      for (let a of [9, 12])
        (t.box(
          `miSilver`,
          n,
          0,
          a - 0.6,
          a + 0.6,
          wv(r, { pitch: e }, 4) - 0.3,
          wv(r, { pitch: e }, 4) + 0.6,
          -4.6,
          -3.4,
        ),
          X(
            t,
            `miSilver`,
            n,
            0,
            a,
            -4,
            wv(r, { pitch: e }, 4) + 0.6,
            i + 1.8,
            0.22,
            0.22,
            10,
          ),
          t.add(
            `miSilver`,
            new d(0.4, 0.3, 10).translate(a, i + 2.05, -4),
            n,
            0,
          ));
      O_(r, o + 1.2);
    },
  };
}
