// assets__lab-buildings-view-DY6ytqNM 195 — box
// Lines 61348-61639 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function Bv() {
  return {
    key: `miRadar`,
    name: `Radar Site 2`,
    plain: 13223092,
    desc: `Early-warning radar station: precast-panel equipment block, geodesic radome on a drum plinth, lattice mast carrying a tilted antenna array, cable tray up the facade, generator enclosure and restricted-area sign.`,
    W: 16,
    D: 10,
    style: {
      wall: `miTiltUp`,
      t: 0.3,
      bay: 4,
      floors: [3.8],
      parapet: 0.5,
      parapetMat: `miConcrete`,
      win: {
        w: 1.6,
        h: 0.8,
        sill: 2.2,
        type: `grid`,
        lites: [2, 1],
        frame: `miSteelDark`,
        rec: 0.1,
        curtains: 0.3,
      },
      door: {
        w: 1.2,
        h: 2.2,
        transom: 0,
        frame: `miSteelDark`,
        mat: `miDoorSteel`,
        rec: 0.15,
        hood: `miConcrete`,
      },
      base: { mat: `miConcreteDark`, h: 0.4, out: 0.03 },
    },
    front: {
      kinds: (e, t) => (t === 1 ? `door` : `window`),
      signs: [
        { mat: `miSgRadar`, rect: [12.6, 15.4, 0.8, 1.8], z0: 0.01, z1: 0.03 },
      ],
      extra: (e, t, n) => {
        V_(e, `miSteel`, t, n, 0.5, 0.9, 0.4, n.H + 0.7, 0.02, 0.12);
        for (let r = 0.8; r < n.H + 0.5; r += 0.4)
          e.box(
            `miSteelDark`,
            t,
            Y(n, 0.7, r),
            0.5,
            0.9,
            r,
            r + 0.05,
            0.12,
            0.16,
          );
      },
    },
    back: { kinds: (e, t) => (t === 2 ? `door` : `solid`) },
    left: { kinds: () => `window` },
    right: {
      kinds: () => `solid`,
      extra: (e, t, n) => Ev(e, t, n.grid[0][1], 5, 7, 1, 2.4),
    },
    extra: (e, t, n) => {
      let r = n.H,
        i = 3.6,
        a = -0.3;
      (X(e, `miConcrete`, t, 0, i, a, r, r + 2.2, 2.8, 2.8, 24),
        X(e, `miSteelDark`, t, 0, i, a, r + 2.2, r + 2.35, 3.1, 3.1, 24),
        e.add(
          `miWhite`,
          k_(new oe(3.3, 2)).translate(i, r + 2.35 + 2.3, a),
          t,
          0,
        ),
        iv(e, t, 0, i, 2.6500000000000004, r, r + 2.3, 1, 0));
      let o = -4.8,
        s = -1.2;
      (ov(e, t, 0, o, s, r, 8, 1.8, 0.9, `miSteel`, 5, 0.1),
        X(e, `miSteelDark`, t, 0, o, s, r + 8, r + 8 + 0.6, 0.5, 0.5, 14));
      let c = t
        .clone()
        .multiply(new E().makeTranslation(o, r + 8 + 1.6, s))
        .multiply(new E().makeRotationY(0.5))
        .multiply(new E().makeRotationX(-0.26));
      e.box(`miNet`, c, 0, -2.8, 2.8, -0.9, 0.9, -0.02, 0.02);
      for (let t = 0; t <= 8; t++) {
        let n = -2.8 + t * 0.7;
        e.box(`miSteel`, c, 0, n - 0.03, n + 0.03, -0.9, 0.9, -0.06, 0.06);
      }
      for (let t of [-0.9, -0.3, 0.3, 0.9])
        e.box(`miSteel`, c, 0, -2.8, 2.8, t - 0.03, t + 0.03, -0.06, 0.06);
      (e.box(`miSteelDark`, c, 0, -0.4, 0.4, -1.1, 0.2, -0.5, -0.06),
        uv(e, t, 0, -0.5, r, -3.2, 0.9),
        uv(e, t, 0, 6.4, r, -3.6, 0.7));
      let l = n.W / 2 + 0.3;
      (e.box(`miOlive`, t, 0, l, l + 1.6, 0, 1.8, -1.8, 1.6),
        e.box(`louver`, t, 0, l + 0.2, l + 1.4, 0.3, 1.5, 1.6, 1.63),
        e.box(`louver`, t, 0, l + 1.6, l + 1.63, 0.3, 1.5, -1.4, 1.2),
        X(e, w_, t, 0, l + 0.8, -1.3, 1.8, 3, 0.1, 0.1, 8),
        O_(n, r + 8 + 2.6));
    },
  };
}
function Vv(e, t, n) {
  for (let r = 0; r < n.nb; r++) {
    let i = (r + 0.5) * n.bw,
      a = n.grid[0][r];
    G_(e, `miSgBay${r + 1}`, t, a, i - 0.5, i + 0.5, 4.72, 5.12, 0.01, 0.04);
    for (let n of [-1, 1])
      e.box(
        `miHazard`,
        t,
        a,
        i + n * 2.4 - 0.12,
        i + n * 2.4 + 0.12,
        0,
        1.6,
        0,
        0.04,
      );
  }
  for (let r = 0; r <= n.nb; r++) {
    let i = Math.min(n.L - 0.3, Math.max(0.3, r * n.bw));
    cv(e, t, Y(n, i, 1), i, 0.6);
  }
}
function Hv() {
  return {
    key: `miMotorPool`,
    name: `Motor Pool Vehicle Shed`,
    plain: 11904124,
    desc: `Motor-pool maintenance shed: six numbered bays alternating roll-up doors and open bays with trucks inside, hazard-striped jambs and bollards, turbine vents on a low tin roof, open parts lean-to with oil drums.`,
    W: 36,
    D: 14,
    style: {
      wall: `miCorrSand`,
      t: 0.25,
      bay: 6,
      floors: [5.2],
      win0: {
        w: 4.6,
        h: 4.2,
        sill: 0,
        type: `grid`,
        lites: [1, 1],
        frame: `miYellow`,
        frameW: 0.15,
        rec: 0.05,
        open: !0,
      },
      win: {
        w: 2.4,
        h: 0.9,
        sill: 3.6,
        type: `grid`,
        lites: [3, 1],
        frame: `miSteelDark`,
        rec: 0.06,
        curtains: 0,
      },
      loading: { type: `rollup`, dock: !1, w: 4.6, h: 4.2 },
      door: {
        w: 1,
        h: 2.1,
        transom: 0,
        frame: `miSteelDark`,
        mat: `miDoorSteel`,
        rec: 0.1,
      },
      base: { mat: `miConcrete`, h: 0.6, out: 0.04 },
      roof: {
        ridge: `x`,
        pitch: 12 * C_,
        over: 0.6,
        mat: `miRoofTin`,
        fascia: w_,
        gutter: !0,
      },
    },
    front: { kinds: (e, t) => (t % 2 ? `window` : `loading`), extra: Vv },
    back: { kinds: (e, t) => (t === 2 ? `door` : `solid`) },
    right: {
      kinds: () => `solid`,
      extra: A(
        hv({
          a0: 1.2,
          a1: 10.8,
          d: 3,
          h: 2.6,
          hb: 3.6,
          wall: `miCorrOlive`,
          roof: `miRoofTin`,
          open: !0,
        }),
        (e, t, n) => {
          let r = j_(5);
          for (let i = 0; i < 9; i++) {
            let a = 2 + (i % 5) * 0.65 + (i > 4 ? 4.5 : 0),
              o = 0.6 + (i % 2) * 0.7;
            lv(e, t, Y(n, a, 1), a, o, r() < 0.5 ? `miOlive` : `miRed`, 0.08);
          }
          for (let r of [0.1, 0.9, 1.7])
            e.box(`wood`, t, Y(n, 7.5, 1), 6.2, 9.9, r, r + 0.05, 0.1, 0.8);
          for (let r of [6.25, 9.85])
            e.box(
              `miSteel`,
              t,
              Y(n, r, 1),
              r - 0.04,
              r + 0.04,
              0,
              2.3,
              0.1,
              0.8,
            );
        },
      ),
    },
    left: { kinds: (e, t) => (t === 1 ? `door` : `solid`) },
    extra: (e, t, n) => {
      (e.box(
        `miConcrete`,
        t,
        0,
        -n.W / 2 + 0.3,
        n.W / 2 - 0.3,
        0.02,
        0.07,
        -n.D / 2 + 0.3,
        n.D / 2 - 0.3,
      ),
        pv(e, t, 0, -9, 1.3, 0),
        pv(e, t, 0, 15, 0.6, 0, { canvas: !1 }),
        e.box(`miSteel`, t, 0, 3.2, 5.6, 0.07, 0.95, 3, 3.8),
        X(e, `miOlive`, t, 0, 4.4, 3.4, 0.95, 1.6, 0.5, 0.45, 12));
      let r = n.roofTop;
      for (let n of [-13.5, -4.5, 4.5, 13.5]) Tv(e, t, 0, n, r, 0);
      O_(n, r + 1.2);
    },
  };
}
var Uv = (e, t, n) => {
  let r = n.H + 3;
  for (let [i, a] of [
    [-1.3, 2.3],
    [n.L - 2.3, n.L + 1.3],
  ]) {
    let o = -2.1,
      s = 1.5,
      c = (i + a) / 2;
    V_(e, `miBrickBrown`, t, n, i, a, 0, r, o, s);
    for (let r of [0.9, 4.2, n.H])
      V_(e, `limestone`, t, n, i - 0.06, a + 0.06, r - 0.18, r, -2.16, 1.56);
    let l = Y(n, c, n.H - 0.5);
    e.box(`limestone`, t, l, i - 0.12, a + 0.12, r, r + 0.12, -2.22, 1.62);
    for (let n = 0; n < 3; n++) {
      let c = i + 0.3 + n * 1.2;
      (e.box(`miBrickBrown`, t, l, c, c + 0.6, r + 0.12, r + 0.8, 1.1, s),
        e.box(
          `miBrickBrown`,
          t,
          l,
          c,
          c + 0.6,
          r + 0.12,
          r + 0.8,
          o,
          -1.7000000000000002,
        ));
      let u = -1.8 + n * 1.2;
      (e.box(`miBrickBrown`, t, l, i, i + 0.4, r + 0.12, r + 0.8, u, u + 0.6),
        e.box(`miBrickBrown`, t, l, a - 0.4, a, r + 0.12, r + 0.8, u, u + 0.6));
    }
    for (let r of [2, 5.6, 9]) {
      let o = Y(n, c, r);
      e.box(`miSlit`, t, o, c - 0.09, c + 0.09, r, r + 1.1, s, 1.52);
      let l = i < 0 ? i : a;
      e.box(
        `miSlit`,
        t,
        o,
        l - 0.02,
        l + 0.02,
        r,
        r + 1.1,
        -0.6000000000000001 / 2 - 0.09,
        -0.21000000000000005,
      );
    }
  }
};
