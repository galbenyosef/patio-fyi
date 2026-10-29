// assets__lab-buildings-view-DY6ytqNM 201 — box
// Lines 63119-63468 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function sy() {
  let e = 30 * C_;
  return {
    key: `miBrickFactory`,
    name: `Hollis Brick & Tile Works`,
    plain: 9322028,
    desc: `Victorian brickworks: red brick with segmental-arched steel windows and a faded painted name band, slate roof with ridge cowls, barn doors and a loft hoist, beehive kiln and a 34 m round chimney behind, brick pallets in the yard.`,
    W: 30,
    D: 14,
    style: {
      wall: `miBrickRed`,
      t: 0.4,
      bay: 3.75,
      floors: [4.4, 4],
      win: {
        w: 1.6,
        h: 2.2,
        sill: 1,
        type: `grid`,
        lites: [3, 3],
        frame: w_,
        arch: 0.35,
        archMat: `miBrickBrown`,
        ringW: 0.2,
        sillMat: `miConcrete`,
        rec: 0.18,
        curtains: 0,
      },
      loading: {
        type: `barn`,
        mat: `miDoorGreen`,
        trim: `woodDark`,
        w: 3,
        h: 3.6,
      },
      door: {
        w: 1.1,
        h: 2.2,
        transom: 0.4,
        frame: w_,
        mat: `miDoorGreen`,
        rec: 0.2,
      },
      base: { mat: `miBrickBrown`, h: 0.8, out: 0.06 },
      belt: { mat: `miBrickBrown`, h: 0.2, out: 0.05 },
      roof: {
        ridge: `x`,
        pitch: e,
        over: 0.45,
        mat: `miSlate`,
        fascia: w_,
        gutter: !0,
      },
    },
    front: {
      kinds: (e, t) =>
        e === 0
          ? t === 2
            ? `loading`
            : t === 6
              ? `door`
              : `window`
          : t === 7
            ? `loading`
            : `window`,
      signs: [
        {
          mat: `miSgBrick`,
          rect: [1.2, 25.6, 3.75, 5.15],
          z0: 0.07,
          z1: 0.075,
        },
      ],
      extra: (e, t, n) => {
        let r = 28.125,
          i = Y(n, r, 7.5);
        (e.box(`timber`, t, i, 27.985, 28.265, 7.93, 8.13, -0.2, 1.7),
          k(e, `timber`, t, i, [r, 6.9, 0.02], [r, 7.93, 1.1], 0.12),
          e.add(
            `miSteelDark`,
            new C(0.2, 0.2, 0.08, 12)
              .rotateZ(Math.PI / 2)
              .translate(r, 7.75, 1.5),
            t,
            i,
          ),
          e.box(`miRubber`, t, i, 28.11, 28.14, 5.6, 7.75, 1.68, 1.71),
          e.add(
            `miSteelDark`,
            new o(0.1, 0.025, 4, 10, Math.PI * 1.4).translate(r, 5.55, 1.7),
            t,
            i,
          ));
      },
    },
    back: { kinds: (e, t) => (e === 0 && t === 4 ? `loading` : `window`) },
    left: {
      kinds: (e, t) => (e === 0 && t === 1 ? `door` : `window`),
      extra: (e, t, n) => {
        for (let [r, i] of [
          [2, 1.2],
          [3.3, 1.2],
          [2, 2.5],
        ]) {
          let a = Y(n, r, 1);
          (e.box(`wood`, t, a, r - 0.55, r + 0.55, 0, 0.14, i - 0.55, i + 0.55),
            e.box(
              `miBrickRed`,
              t,
              a,
              r - 0.5,
              r + 0.5,
              0.14,
              1,
              i - 0.5,
              i + 0.5,
            ));
        }
      },
    },
    right: { kinds: () => `window` },
    extra: (t, n, r) => {
      let a = r.H + (r.D / 2) * Math.tan(e);
      for (let e of [-10, -5, 0, 5, 10])
        (X(t, `miSteel`, n, 0, e, 0, a - 0.2, a + 0.9, 0.3, 0.3, 10),
          t.add(
            `miSteelDark`,
            new i(0.5, 12, 6, 0, Math.PI * 2, 0, Math.PI / 2)
              .scale(1, 0.6, 1)
              .translate(e, a + 0.95, 0),
            n,
            0,
          ));
      let s = -r.D / 2 - 4,
        c = t.cell(n, [9, 16, s], `miBrickRed`);
      (t.box(`miBrickBrown`, n, c, 7, 11, 0, 4, s - 2, s + 2),
        t.box(`miConcrete`, n, c, 6.85, 11.15, 4, 4.3, s - 2.15, s + 2.15),
        X(t, `miBrickRed`, n, c, 9, s, 4.3, 34, 1.6, 0.95, 20));
      for (let e of [12, 20, 28])
        X(
          t,
          w_,
          n,
          c,
          9,
          s,
          e,
          e + 0.15,
          1.6 - (0.65 * (e - 4.3)) / 29.7 + 0.04,
          1.6 - (0.65 * (e - 4.3)) / 29.7 + 0.04,
          20,
          !0,
        );
      for (let e = 0; e < 3; e++)
        X(
          t,
          `miBrickBrown`,
          n,
          c,
          9,
          s,
          33 + e * 0.3,
          33.3 + e * 0.3,
          1.05 + e * 0.08,
          1.05 + e * 0.08,
          20,
        );
      let l = -r.D / 2 - 5.5,
        u = t.cell(n, [-8, 3, l], `miBrickRed`);
      (X(t, `miBrickRed`, n, u, -8, l, 0, 2.6, 4.2, 4.2, 24),
        t.add(
          `miBrickRed`,
          new i(4.2, 24, 8, 0, Math.PI * 2, 0, Math.PI / 2)
            .scale(1, 0.75, 1)
            .translate(-8, 2.6, l),
          n,
          u,
        ));
      for (let e of [0.9, 2])
        t.add(
          w_,
          new o(4.24, 0.05, 4, 32).rotateX(Math.PI / 2).translate(-8, e, l),
          n,
          u,
        );
      (X(t, `miBrickBrown`, n, u, -8, l, 5.3, 6.6, 0.6, 0.5, 12),
        t.box(`miSlit`, n, u, -8.6, -7.4, 0, 1.8, l + 4.05, l + 4.25),
        O_(r, 34.3));
    },
  };
}
function cy(e, t, n) {
  let r = 3.4;
  for (let [i, a] of H_(n, 7.8, 12.200000000000001))
    e.box(`miRib`, t, Y(n, (i + a) / 2, 1), i, a, 0, r, 0, 3);
  U_(
    e,
    `miConcrete`,
    t,
    n,
    7.6,
    12.4,
    r,
    3.6999999999999997,
    -0.1,
    3.3,
    void 0,
    2,
  );
  let i = Y(n, 10, 1);
  e.box(`miDoorOrange`, t, i, 9.4, 10.6, 0.02, 2.3, 3, 3.05);
  for (let [n, r, a, o] of [
    [9.3, 9.4, 0, 2.4],
    [10.6, 10.7, 0, 2.4],
    [9.3, 10.7, 2.3, 2.4],
  ])
    e.box(`miSteelDark`, t, i, n, r, a, o, 3, 3.08);
  (e.box(`glassGrey`, t, i, 9.75, 10.25, 1.4, 1.9, 3.05, 3.06),
    e.box(`miSteelDark`, t, i, 9.2, 10.8, 2.55, 2.7, 3, 3.6),
    e.box(`miLamp`, t, i, 9.85, 10.15, 2.4, 2.55, 3.2, 3.45));
  for (let r of [7.9, 12.1, 2.2, 17.8])
    cv(e, t, Y(n, r, 1), r, r > 7 && r < 13 ? 3.6 : 0.8);
  let a = 19.3,
    o = Y(n, a, 1);
  (X(e, `miGreen`, t, o, a, 1.2, 0, 2.5, 0.05, 0.05, 8),
    k(e, `miGreen`, t, o, [a, 2.45, 1.2], [18.75, 2.45, 1.2], 0.05),
    e.add(`miGreen`, new d(0.2, 0.15, 10).translate(18.75, 2.3, 1.2), t, o),
    e.add(`miYellow`, new C(0.16, 0.1, 0.1, 10).translate(19.05, 1, 1.2), t, o),
    e.box(`miGreen`, t, o, 19.05, 19.55, 2.6, 2.9, 1.18, 1.22));
}
function ly() {
  return {
    key: `miRefineryControl`,
    name: `Refinery Central Control`,
    plain: 11709857,
    desc: `Blast-resistant refinery control building: windowless ribbed precast walls, orange-doored airlock vestibule with bollards, elevated HVAC intake stack and packaged units on the roof, pipe bridge alongside and an emergency shower.`,
    W: 20,
    D: 14,
    style: {
      wall: `miRib`,
      t: 0.5,
      bay: 4,
      floors: [5],
      parapet: 1,
      parapetMat: `miConcrete`,
      win: {
        w: 0.9,
        h: 0.6,
        sill: 1.7,
        type: `grid`,
        lites: [1, 1],
        frame: `miOrange`,
        rec: 0.3,
        curtains: 0,
      },
      door: {
        w: 1.2,
        h: 2.3,
        transom: 0,
        frame: `miOrange`,
        mat: `miDoorOrange`,
        rec: 0.2,
      },
      base: { mat: `miConcreteDark`, h: 0.6, out: 0.04 },
    },
    front: {
      kinds: (e, t) => (t === 2 ? `door` : t === 0 ? `window` : `solid`),
      signs: [
        {
          mat: `miSgControl`,
          rect: [0.8, 19.2, 5.25, 5.8],
          z0: 0.01,
          z1: 0.02,
        },
      ],
      extra: cy,
    },
    back: { kinds: (e, t) => (t === 3 ? `door` : `solid`) },
    left: { kinds: () => `solid` },
    right: { kinds: (e, t) => (t === 1 ? `window` : `solid`) },
    extra: (e, t, n) => {
      let r = n.H;
      for (let [n, i] of [
        [-5, -3],
        [0, -3.5],
      ]) {
        e.box(`miSilver`, t, 0, n - 1.4, n + 1.4, r, r + 1.4, i - 1, i + 1);
        for (let a of [-0.7, 0.7])
          X(e, `miSteelDark`, t, 0, n + a, i, r + 1.4, r + 1.5, 0.55, 0.55, 14);
      }
      (e.box(`miConcrete`, t, 0, 5.4, 6.8, r, r + 6, -2.7, -1.3),
        e.box(`louver`, t, 0, 5.3, 6.9, r + 6, r + 7.2, -2.8, -1.2),
        e.box(`miConcrete`, t, 0, 5.1, 7.1, r + 7.2, r + 7.45, -3, -1),
        e.box(`miYellow`, t, 0, 5.1, 5.4, r + 3.5, r + 3.9, -2.2, -1.8));
      let i = -n.W / 2 - 2.6,
        a = -n.W / 2 - 0.5;
      for (let n of [5.5, 0, -5.5]) {
        for (let r of [i, a])
          e.box(
            `miSteel`,
            t,
            0,
            r - 0.12,
            r + 0.12,
            0,
            6.3,
            n - 0.12,
            n + 0.12,
          );
        e.box(`miSteel`, t, 0, i - 0.2, a + 0.2, 6.1, 6.35, n - 0.14, n + 0.14);
      }
      for (let [r, a, o] of [
        [`miYellow`, 0.2, i + 0.3],
        [`miSilver`, 0.28, i + 0.9],
        [`miGreen`, 0.15, i + 1.5],
        [`miRed`, 0.12, i + 1.9],
      ])
        e.add(
          r,
          new C(a, a, n.D + 4, 10, 1, !0)
            .rotateX(Math.PI / 2)
            .translate(o, 6.35 + a, -1),
          t,
          0,
        );
      (X(
        e,
        `miSteel`,
        t,
        0,
        n.W / 2 - 1,
        n.D / 2 - 1,
        r + 1,
        r + 5,
        0.05,
        0.04,
        6,
      ),
        e.add(
          `miOrange`,
          new C(0.22, 0.1, 1.2, 10, 1, !0)
            .rotateZ(Math.PI / 2)
            .translate(n.W / 2 - 0.35, r + 4.7, n.D / 2 - 1),
          t,
          0,
        ),
        O_(n, r + 7.5));
    },
  };
}
