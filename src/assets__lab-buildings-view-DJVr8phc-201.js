// assets__lab-buildings-view-DJVr8phc 201 — box
// Lines 63459-63776 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function uy() {
  return {
    key: `miCementWorks`,
    name: `Granite Bay Cement Works`,
    plain: 11776424,
    desc: `Cement works: dust-grey clad mill house with a five-storey preheater tower, three 24 m slip-formed silos behind joined by a roof gallery and a sloping bridge, and a tall bucket-elevator casing with its head house.`,
    W: 16,
    D: 12,
    style: {
      wall: `miDustCorr`,
      t: 0.3,
      bay: 4,
      floors: [5.5, 5],
      parapet: 0.6,
      parapetMat: `miDust`,
      win: {
        w: 2,
        h: 1,
        sill: 2.2,
        type: `grid`,
        lites: [2, 1],
        frame: `miSteelDark`,
        rec: 0.08,
        curtains: 0,
      },
      loading: { type: `rollup`, dock: !1, w: 3.4, h: 4.2 },
      door: {
        w: 1.1,
        h: 2.2,
        transom: 0,
        frame: `miSteelDark`,
        mat: `miDoorSteel`,
        rec: 0.12,
      },
      base: { mat: `miDust`, h: 1, out: 0.04 },
    },
    tiers: [
      {},
      {
        W: 9,
        D: 8,
        dz: -1,
        floors: [5, 5, 5],
        style: { parapet: 0.8 },
        front: {
          signs: [
            {
              mat: `miSgCement`,
              rect: [0.4, 8.6, 13.3, 14.6],
              z0: 0.01,
              z1: 0.02,
            },
          ],
        },
      },
    ],
    front: {
      kinds: (e, t) =>
        e === 0
          ? t === 1
            ? `loading`
            : t === 3
              ? `door`
              : `window`
          : `window`,
    },
    back: { kinds: () => `window` },
    left: { kinds: () => `window` },
    right: { kinds: () => `window` },
    extra: (e, t, n) => {
      let a = -9.4;
      for (let n of [-6.6, 0, 6.6]) {
        let r = e.cell(t, [n, 12, -6.2], `miDust`);
        (X(e, `miDust`, t, r, n, a, 0, 24, 3.2, 3.2, 24),
          e.add(`miDust`, new i(3.25, 1.2, 24).translate(n, 24.6, a), t, r));
        for (let i of [8, 16])
          X(e, `miConcrete`, t, r, n, a, i, i + 0.15, 3.24, 3.24, 24, !0);
      }
      (e.box(`miDustCorr`, t, 0, -10.2, 10.2, 24.8, 27.2, -10.8, -8),
        e.box(`miSteelDark`, t, 0, -10.3, 10.3, 27.2, 27.4, -10.9, -7.9));
      let o = Math.hypot(-3, 2.8),
        s = Math.atan2(2.8, 3);
      (e.add(
        `miDustCorr`,
        new r(2.2, 2.2, o).rotateX(-s).translate(0, 25, -13 / 2),
        t,
        0,
      ),
        n.W,
        e.box(`miDustCorr`, t, 0, 8.3, 9.5, 0, 26, 1.4000000000000001, 3),
        e.box(
          `miDustCorr`,
          t,
          0,
          7.9,
          9.9,
          26,
          28,
          1.0000000000000002,
          3.4000000000000004,
        ),
        e.box(
          `miSteelDark`,
          t,
          0,
          7.800000000000001,
          10,
          28,
          28.2,
          0.9000000000000001,
          3.5,
        ),
        e.box(
          `miDustCorr`,
          t,
          0,
          4.4,
          8,
          22.8,
          24.6,
          1.5000000000000002,
          2.9000000000000004,
        ),
        iv(e, t, 0, 9.75, 2.2, 10.5, 26, 0, 1));
      for (let n of [10.5, 18])
        e.box(
          `miSteel`,
          t,
          0,
          8.3,
          10.200000000000001,
          n - 0.08,
          n,
          1.4000000000000001,
          3,
        );
      (X(e, `miSteelDark`, t, 0, -2.5, -3, 25.5, 30, 0.35, 0.35, 10),
        O_(n, 30.2));
    },
  };
}
function dy(e, t, n) {
  for (let r = 2; r < 8; r++) {
    let i = (r + 0.5) * n.bw,
      a = n.grid[0][r];
    for (let n of [-1, 1])
      e.box(
        `miRubber`,
        t,
        a,
        i + n * 1.7 - 0.2,
        i + n * 1.7 + 0.2,
        0.9,
        4.2,
        0,
        0.6,
      );
    (e.box(`miRubber`, t, a, i - 1.9, i + 1.9, 3.7, 4.2, 0, 0.6),
      e.box(`miSteel`, t, a, i - 1.4, i + 1.4, 0.88, 0.92, 1.3, 1.65),
      e.box(w_, t, a, i + 2.1, i + 2.16, 3.1, 3.2, 0, 0.9),
      e.box(`miLamp`, t, a, i + 2, i + 2.26, 2.95, 3.1, 0.75, 0.95),
      cv(e, t, a, i - 2.4, 2));
  }
  (U_(e, `miSteel`, t, n, 11.6, n.L + 0.2, 5.2, 5.45, 0, 3.6),
    U_(e, `miBlue`, t, n, 11.6, n.L + 0.2, 5, 5.5, 3.5, 3.62));
  for (let r = 12.5; r < n.L; r += 6)
    D(e, `miSteel`, t, Y(n, r, 6), [r, 5.45, 3.3], [r, 7.6, 0], 0.05);
  U_(e, `miBlue`, t, n, -0.05, n.L + 0.05, 8.1, 8.45, 0, 0.03);
  for (let [r, i] of H_(n, 0.6, 11.4)) {
    let a = Y(n, (r + i) / 2, 6.3);
    e.box(`glassBlue`, t, a, r, i, 5.6, 7.1, 0, 0.03);
    for (let n = Math.ceil(r / 1.35) * 1.35; n < i; n += 1.35)
      e.box(`aluminum`, t, a, n - 0.04, n + 0.04, 5.6, 7.1, 0, 0.07);
    for (let n of [5.6, 7.1])
      e.box(`aluminum`, t, a, r, i, n - 0.04, n + 0.04, 0, 0.08);
  }
}
function fy() {
  return {
    key: `miWarehouse`,
    name: `Halden Logistics DC 4`,
    plain: 14078404,
    desc: `Tilt-up concrete distribution warehouse: six dock doors with black dock shelters, levellers, lights and bollards under a hung steel canopy, glazed office corner with ribbon windows, blue stripe and big parapet lettering, rooftop skylights and units.`,
    W: 48,
    D: 26,
    style: {
      wall: `miTiltUp`,
      t: 0.3,
      bay: 6,
      floors: [9],
      parapet: 1.2,
      win: {
        w: 2.4,
        h: 1,
        sill: 6,
        type: `grid`,
        lites: [3, 1],
        frame: `aluminum`,
        rec: 0.08,
        curtains: 0,
      },
      loading: { type: `rollup`, dock: !0, w: 3, h: 3.2 },
      door: {
        w: 1,
        h: 2.2,
        transom: 0,
        frame: `aluminum`,
        mat: `miDoorSteel`,
        rec: 0.12,
      },
      lobby: {
        glass: `glassBlue`,
        frame: `aluminum`,
        column: `miTiltUp`,
        head: 4.6,
        rec: 0.8,
        headMat: `miTiltUp`,
      },
      base: { mat: `miConcreteDark`, h: 0.3, out: 0.02 },
    },
    front: {
      kinds: (e, t) => (t === 0 ? `lobbyDoor` : t === 1 ? `lobby` : `loading`),
      signs: [
        { mat: `miSgHalden`, rect: [1, 44, 9.15, 10.05], z0: 0.01, z1: 0.02 },
      ],
      extra: dy,
    },
    back: {
      kinds: (e, t) =>
        t === 3 || t === 5 ? `loading` : t === 1 ? `door` : `solid`,
    },
    left: { kinds: (e, t) => (t === 2 ? `door` : `window`) },
    right: { kinds: (e, t) => (t % 2 ? `window` : `solid`) },
    extra: (e, t, n) => {
      for (let r = 0; r < 4; r++)
        for (let i = 0; i < 2; i++) {
          let a = -15 + r * 10,
            o = -5 + i * 8;
          (e.box(
            `miWhite`,
            t,
            0,
            a - 1.2,
            a + 1.2,
            n.H,
            n.H + 0.5,
            o - 0.8,
            o + 0.8,
          ),
            e.box(
              `glassGrey`,
              t,
              0,
              a - 1.1,
              a + 1.1,
              n.H + 0.5,
              n.H + 0.55,
              o - 0.7,
              o + 0.7,
            ));
        }
      for (let [r, i] of [
        [-18, 8],
        [-12, 8],
        [16, -9],
      ])
        uv(e, t, 0, r, n.H, i, 1.2);
    },
  };
}
function py(e, t, n) {
  let r = 3.2,
    i = 1.45;
  U_(e, `miCorrGrey`, t, n, 0, n.L, 0.02, 0.55, 0, 0.06, void 0, 0.3);
  for (let [a, o, s] of H_(n, -0.1, n.L + 1.6)) {
    let c = n.grid[1][s];
    (e.box(`miSteelDark`, t, c, a, o, 3.1, r, 0, i),
      e.box(
        `miSteelDark`,
        t,
        c,
        a,
        o,
        2.9000000000000004,
        r,
        1.3699999999999999,
        i,
      ));
  }
  (G_(e, `miSgAdmin`, t, Y(n, 5, 3.7), 2.2, 8.2, 2.92, 3.18, i, 1.47),
    Q_(e, t, Y(n, 5, 3.7), [-0.1, 1.4], [n.L + 1.6, 1.4], r, `miSteelDark`),
    Q_(e, t, Y(n, 0, 3.7), [-0.08, 0], [-0.08, 1.4], r, `miSteelDark`));
  for (let r = 0.1; r <= n.L + 1.55; r += (n.L + 1.4) / 8) {
    let i = Y(n, r, 1);
    e.box(
      `miSteelDark`,
      t,
      i,
      r - 0.06,
      r + 0.06,
      0,
      3.1,
      1.25,
      1.3699999999999999,
    );
  }
  for (let r of [2, 5]) {
    let i = (r + 0.5) * n.bw,
      a = n.grid[1][r];
    (e.box(`miWhite`, t, a, i - 0.4, i + 0.4, 4.2, 4.7, 0, 0.55),
      e.box(`louver`, t, a, i - 0.35, i + 0.35, 4.25, 4.65, 0.55, 0.56));
  }
}
function my(e, t, n) {
  (ev(e, t, n, -1.7, 1.4, 3.2, 0, 1.6),
    Q_(e, t, Y(n, 0, 3.5), [-1.7, 1.55], [1.4, 1.55], 3.2, `miSteelDark`),
    $_(e, t, n, 5.82, -1, 0, 3.2, 0.1, 1.2, `miSteelDark`, `miSteelDark`));
}
