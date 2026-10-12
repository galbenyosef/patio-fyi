// assets__lab-buildings-view-DJVr8phc 199 — kinds
// Lines 62849-63108 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function ay() {
  return {
    key: `miChemPlant`,
    name: `Vantrex Chemical Unit 2`,
    plain: 14211022,
    desc: `Chemical process building: three storeys of white cladding on blue steel columns, colour-coded pipe rack across the front, yellow switchback stair tower up the side, 26 m distillation column with platforms and a vapour line, flare stack and roof scrubber.`,
    W: 18,
    D: 12,
    style: {
      wall: `miCorrWhite`,
      t: 0.3,
      bay: 3,
      floors: [4.5, 4, 4],
      parapet: 0.6,
      win: {
        w: 2.2,
        h: 1.2,
        sill: 1.4,
        type: `grid`,
        lites: [3, 1],
        frame: `miSteelDark`,
        rec: 0.08,
        curtains: 0,
      },
      door: {
        w: 1.1,
        h: 2.2,
        transom: 0,
        frame: `miBlue`,
        mat: `miDoorSteel`,
        rec: 0.12,
      },
      loading: { type: `rollup`, dock: !1, w: 2.6, h: 3.8 },
      pilaster: { mat: `miBlue`, w: 0.3, out: 0.2 },
      corners: `miBlue`,
      base: { mat: `miConcrete`, h: 0.8, out: 0.04 },
    },
    front: {
      kinds: (e, t) =>
        e === 0
          ? t === 1
            ? `door`
            : t === 4
              ? `loading`
              : `window`
          : `window`,
      signs: [
        {
          mat: `miSgChem`,
          rect: [1.5, 16.5, 12.55, 13.05],
          z0: 0.01,
          z1: 0.02,
        },
      ],
      extra: ry,
    },
    back: { kinds: (e, t) => (e === 0 && t === 2 ? `door` : `window`) },
    right: {
      kinds: (e, t) => (t === 0 ? (e === 0 ? `solid` : `door`) : `window`),
      extra: iy,
    },
    left: { kinds: () => `window` },
    extra: (e, t, n) => {
      let r = -n.W / 2 - 1.7,
        i = -1.5,
        a = e.cell(t, [r, 12, i], `miSilver`);
      (X(e, `miConcrete`, t, a, r, i, 0, 2.5, 1.3, 1.3, 20),
        rv(e, t, a, r, i, 2.5, 23.5, 1, `miSilver`, {
          bands: [0.2, 0.4, 0.6, 0.8],
          dome: 0.5,
        }));
      for (let n of [9, 15, 21])
        (e.add(`miSteel`, new s(1.9, 1.9, 0.1, 20).translate(r, n, i), t, a),
          e.add(
            `miYellow`,
            new u(1.85, 0.04, 4, 20)
              .rotateX(Math.PI / 2)
              .translate(r, n + 1, i),
            t,
            a,
          ));
      (iv(e, t, a, r - 1.25, i, 2.5, 22, 0, 1, `miYellow`),
        Z_(
          e,
          `miSilver`,
          t,
          a,
          [
            [r, 26.4, i],
            [r, 27.2, i],
            [-n.W / 2 + 1.2, 27.2, i],
            [-n.W / 2 + 1.2, n.H + 0.6, i],
          ],
          0.22,
        ),
        av(e, t, a, r - 0.2, 1.4, 1.4, 0.7, 2.6, `miSilver`, !0),
        X(
          e,
          `miSteel`,
          t,
          0,
          n.W / 2 - 1.2,
          -n.D / 2 + 1.2,
          n.H,
          22,
          0.22,
          0.2,
          8,
        ),
        e.add(
          `miSteelDark`,
          new s(0.34, 0.26, 0.8, 10).translate(
            n.W / 2 - 1.2,
            22.3,
            -n.D / 2 + 1.2,
          ),
          t,
          0,
        ));
      for (let r = 0; r < 3; r++) {
        let i = (r / 3) * Math.PI * 2 + 0.4;
        D(
          e,
          `miSteelDark`,
          t,
          0,
          [n.W / 2 - 1.2, 20, -n.D / 2 + 1.2],
          [
            n.W / 2 - 1.2 + Math.cos(i) * 4.5,
            n.H + 0.1,
            -n.D / 2 + 1.2 + Math.sin(i) * 4.5 * 0.5,
          ],
          0.02,
        );
      }
      rv(e, t, 0, 4.5, -1, n.H, 3.2, 0.9, `miBlueGrey`, { bands: [0.5] });
      for (let r of [-4, -1])
        (X(e, `miSteel`, t, 0, r, 2, n.H, n.H + 0.9, 0.7, 0.6, 14),
          X(e, `miSteelDark`, t, 0, r, 2, n.H + 0.9, n.H + 1, 0.62, 0.62, 14));
      O_(n, 27.6);
    },
  };
}
function oy() {
  let e = 16 * C_;
  return {
    key: `miSteelMill`,
    name: `Calder Rolling Mill No 2`,
    plain: 8214594,
    desc: `Rolling-mill shed: 56 m of rust-streaked corrugated walls on steel columns, high steel-sash clerestory, twin 8 m doors with rail tracks, louvred ridge monitor, three 33 m stacks and a lower office aisle along the front.`,
    W: 56,
    D: 24,
    style: {
      wall: `miCorrRust`,
      t: 0.35,
      bay: 7,
      floors: [14],
      win: {
        w: 5.4,
        h: 2.6,
        sill: 10.4,
        type: `grid`,
        lites: [6, 2],
        frame: `miSteelDark`,
        rec: 0.08,
        curtains: 0,
      },
      loading: { type: `rollup`, dock: !1, w: 6.2, h: 8.2 },
      pilaster: { mat: `miSteelDark`, w: 0.45, out: 0.25 },
      base: { mat: `miConcreteDark`, h: 1.5, out: 0.08 },
      roof: {
        ridge: `x`,
        pitch: e,
        over: 0.6,
        mat: `miRoofTin`,
        fascia: w_,
        gutter: !0,
      },
    },
    front: {
      kinds: (e, t) => (t === 3 || t === 4 ? `loading` : `window`),
      signs: [
        { mat: `miSgMill`, rect: [3.5, 53, 8.85, 10.15], z0: 0.01, z1: 0.02 },
      ],
      extra: k(
        (e, t, n) => {
          for (let r of [3, 4]) {
            let i = (r + 0.5) * n.bw,
              a = n.grid[0][r];
            for (let n of [-1, 1])
              e.box(
                `miSteel`,
                t,
                a,
                i + n * 0.72 - 0.04,
                i + n * 0.72 + 0.04,
                0.12,
                0.22,
                -0.3,
                8,
              );
            for (let n = 0.3; n < 8; n += 0.65)
              e.box(
                `timber`,
                t,
                a,
                i - 1.1,
                i + 1.1,
                0.06,
                0.14,
                n - 0.12,
                n + 0.12,
              );
          }
        },
        hv({
          a0: 42.3,
          a1: 56,
          d: 6,
          h: 5.5,
          hb: 7.6,
          wall: `miCorrGrey`,
          roof: `miRoofTin`,
          wins: [44.3, 46.8, 52.8],
          door: 49.8,
        }),
      ),
    },
    back: { kinds: (e, t) => (t === 2 ? `loading` : `window`) },
    left: { kinds: (e, t) => (t === 1 ? `loading` : `window`) },
    right: { kinds: () => `window` },
    extra: (t, n, r) => {
      let i = r.H + (r.D / 2) * Math.tan(e) - 0.7,
        a = i + 2.6;
      t.box(`louver`, n, 0, -24, 24, i, a, -2.2, 2.2);
      for (let r of [-24, 24])
        K_(
          t,
          `miCorrRust`,
          D_(n, r, 0, Math.PI / 2),
          0,
          -2.8,
          2.8,
          a,
          2.8 * Math.tan(e),
          -0.1,
          0.1,
        );
      Cv(t, `miRoofTin`, n, 0, -24.4, 24.4, -2.8, 2.8, a, e, !1, w_);
      for (let e of [-20, -6, 8]) {
        let i = t.cell(n, [e, 24, -8], `miSteel`);
        X(t, `miSteelDark`, n, i, e, -8, r.H, 33, 1.1, 1, 18);
        for (let r of [20, 26, 32])
          X(t, `miSteel`, n, i, e, -8, r, r + 0.25, 1.12, 1.12, 18, !0);
        X(t, `miSteel`, n, i, e, -8, 33, 33.4, 1.25, 1.25, 18, !0);
      }
      O_(r, 33.5);
    },
  };
}
