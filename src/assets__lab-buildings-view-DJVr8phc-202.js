// assets__lab-buildings-view-DJVr8phc 202 — kinds
// Lines 63777-64056 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function hy() {
  return {
    key: `miPrefabOffice`,
    name: `Building 214 Administration`,
    plain: 12175272,
    desc: `Cold-war prefab office: pale-green modular panels with continuous aluminium ribbon windows, steel access gallery and outside stair to the upper floor, window air-conditioners, corrugated skirt and a stencilled building number.`,
    W: 20,
    D: 9,
    style: {
      wall: `miPrefab`,
      t: 0.2,
      bay: 2.5,
      floors: [3.2, 3],
      eaveTrim: `miSilver`,
      ribbon: {
        glass: `glassGrey`,
        spandrel: `miPrefab`,
        mullion: `aluminum`,
        module: 1.25,
        sill: 0.95,
        head: 0.6,
        fin: 0.03,
      },
      win: {
        w: 1.2,
        h: 1.1,
        sill: 1,
        type: `grid`,
        lites: [2, 1],
        frame: `aluminum`,
        rec: 0.06,
        curtains: 0.6,
      },
      door: {
        w: 1,
        h: 2.1,
        transom: 0,
        frame: `aluminum`,
        glazed: !0,
        mat: `miDoorBlue`,
        rec: 0.08,
      },
    },
    front: {
      kinds: (e, t) =>
        e === 0
          ? t === 1 || t === 6
            ? `door`
            : `ribbon`
          : t === 6
            ? `door`
            : `ribbon`,
      extra: py,
    },
    back: { kinds: (e, t) => (t === 3 && e === 0 ? `door` : `ribbon`) },
    right: { kinds: (e, t) => (t === 2 ? `window` : `solid`), extra: my },
    left: {
      kinds: (e, t) => (e === 0 && t === 1 ? `window` : `solid`),
      signs: [{ mat: `miSg214`, rect: [1.2, 7.4, 3.8, 6], z0: 0.01, z1: 0.02 }],
    },
    extra: (e, t, n) => {
      (uv(e, t, 0, -5, n.H, -1.5, 1),
        uv(e, t, 0, 4, n.H, -2, 1),
        X(e, `miSteel`, t, 0, 8, -2.8, n.H, n.H + 6, 0.05, 0.04, 6));
      for (let r of [3.8, 4.8, 5.6])
        e.box(
          `miSteel`,
          t,
          0,
          7.1 + (r - 3.8) * 0.3,
          8.9 - (r - 3.8) * 0.3,
          n.H + r,
          n.H + r + 0.04,
          -2.82,
          -2.78,
        );
      O_(n, n.H + 6.1);
    },
  };
}
var gy = (e) => (t, n, r) => {
  for (let i = 0; i < r.nb; i++)
    if (e(0, i) === `solid`) {
      let e = (i + 0.5) * r.bw;
      (Ev(t, n, r.grid[0][i], e - 0.9, e + 0.9, 3.2, 4.6),
        i % 2 && Ev(t, n, r.grid[0][i], e - 0.6, e + 0.6, 0.4, 1.2));
    }
};
function _y(e, t, n, r, i, a, o, c = !1) {
  for (let l = 0; l < o; l++) {
    let o = c ? i - l * 0.14 : i + l * 0.14;
    e.add(`miWhite`, new s(0.13, 0.13, 0.04, 10).translate(r, o, a), t, n);
  }
  X(
    e,
    `miSteel`,
    t,
    n,
    r,
    a,
    c ? i - o * 0.14 : i,
    c ? i : i + o * 0.14,
    0.035,
    0.035,
    6,
  );
}
function vy() {
  let e = (e, t) => (t === 1 ? `door` : `solid`);
  return {
    key: `miSubstation`,
    name: `Relay Substation 6`,
    plain: 11118497,
    desc: `Electrical relay substation: grey block hall with big louvred vents and steel double doors, a finned transformer with bushings and conservator tank alongside, lattice gantries behind stringing insulators and lines down to roof bushings.`,
    W: 14,
    D: 9,
    style: {
      wall: `miCmuGrey`,
      t: 0.3,
      bay: 3.5,
      floors: [5.6],
      parapet: 0.5,
      parapetMat: `miConcrete`,
      door: {
        w: 2,
        h: 2.6,
        transom: 0,
        frame: `miSteelDark`,
        mat: `miDoorSteel`,
        rec: 0.15,
      },
      base: { mat: `miConcreteDark`, h: 0.4, out: 0.03 },
    },
    front: {
      kinds: e,
      signs: [
        { mat: `miSgSubst`, rect: [2.2, 13.2, 5.66, 6.04], z0: 0.01, z1: 0.02 },
      ],
      extra: k(gy(e), (e, t, n) =>
        G_(e, `miSgDanger`, t, n.grid[0][1], 4.9, 5.6, 1.35, 2.05, -0.1, -0.08),
      ),
    },
    back: { kinds: () => `solid`, extra: gy(() => `solid`) },
    left: { kinds: () => `solid`, extra: gy(() => `solid`) },
    right: { kinds: () => `solid` },
    extra: (e, t, n) => {
      let r = n.W / 2 + 1.6,
        i = 0.4;
      (e.box(
        `miConcrete`,
        t,
        0,
        r - 1.2,
        r + 1.5,
        0,
        0.3,
        -1.2000000000000002,
        2.2,
      ),
        e.box(
          `miBlueGrey`,
          t,
          0,
          r - 0.7,
          r + 0.7,
          0.3,
          2.4,
          -0.7000000000000001,
          1.7000000000000002,
        ));
      for (let n = 0; n < 6; n++) {
        let i = -0.5499999999999999 + n * 0.4;
        e.box(
          `miBlueGrey`,
          t,
          0,
          r + 0.7,
          r + 1.3,
          0.5,
          2.2,
          i - 0.03,
          i + 0.03,
        );
      }
      av(e, t, 0, r - 0.3, 3, i, 0.3, 1.8, `miBlueGrey`, !0);
      for (let n of [-0.6, 0.2, 1])
        (X(e, `miSteelDark`, t, 0, r + 0.2, i + n, 2.4, 2.55, 0.12, 0.12, 8),
          _y(e, t, 0, r + 0.2, 2.55, i + n, 7));
      G_(
        e,
        `miSgDanger`,
        t,
        0,
        r - 0.35,
        r + 0.35,
        1,
        1.7,
        1.7000000000000002,
        1.7200000000000002,
      );
      let a = n.H + 0.5;
      for (let r of [-3, 0, 3])
        (X(
          e,
          `miSteelDark`,
          t,
          0,
          r,
          -n.D / 2 + 0.5,
          a,
          a + 0.25,
          0.14,
          0.14,
          8,
        ),
          _y(e, t, 0, r, a + 0.25, -n.D / 2 + 0.5, 8));
      for (let r of [-n.D / 2 - 3.5, -n.D / 2 - 10]) {
        let n = e.cell(t, [0, 6, r], `miSteel`);
        for (let i of [-5.5, 5.5])
          ov(e, t, n, i, r, 0, 11, 1.2, 0.6, `miSteel`, 6, 0.08);
        for (let [i, a] of [
          [10.4, r - 0.3],
          [10.4, r + 0.3],
          [11, r - 0.3],
          [11, r + 0.3],
        ])
          D(e, `miSteel`, t, n, [-5.5, i, a], [5.5, i, a], 0.08);
        for (let i = -5; i <= 5; i += 1.25)
          (D(
            e,
            `miSteel`,
            t,
            n,
            [i, 10.4, r - 0.3],
            [i + 0.62, 11, r - 0.3],
            0.04,
          ),
            D(
              e,
              `miSteel`,
              t,
              n,
              [i, 10.4, r + 0.3],
              [i + 0.62, 11, r + 0.3],
              0.04,
            ));
        for (let i of [-3, 0, 3]) _y(e, t, n, i, 10.35, r, 6, !0);
      }
      for (let r of [-3, 0, 3])
        (D(
          e,
          `miSteelDark`,
          t,
          0,
          [r, 9.5, -n.D / 2 - 3.5],
          [r, a + 1.4, -n.D / 2 + 0.5],
          0.03,
        ),
          D(
            e,
            `miSteelDark`,
            t,
            0,
            [r, 9.5, -n.D / 2 - 3.5],
            [r, 9.3, -n.D / 2 - 10],
            0.03,
          ));
      O_(n, 11.8);
    },
  };
}
var yy = (e, t, n) => {
  for (let r = 0; r <= n.nb; r++) {
    let i = Math.min(n.L - 0.25, Math.max(0.25, r * n.bw)),
      a = Y(n, i, n.H - 0.5),
      o = n.H + 1.4;
    (e.box(`miDeco`, t, a, i - 0.25, i + 0.25, o, o + 0.6, -n.t, 0.3),
      e.box(`miDeco`, t, a, i - 0.15, i + 0.15, o + 0.6, o + 0.9, -n.t, 0.2));
  }
};
