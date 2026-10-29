// assets__lab-buildings-view-DY6ytqNM 141 — mat
// Lines 45839-46104 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function _p() {
  let e = 50 * H,
    t = Math.tan(e),
    n = 5 * t,
    r = {
      w: 1.2,
      h: 2.05,
      sill: 0.7,
      type: `grid`,
      lites: [2, 3],
      frame: `trimWhite`,
      casing: `euStuccoCream`,
      rec: 0.12,
      curtains: 0.6,
    };
  return {
    key: `euPrague`,
    name: `House at the Silver Stag`,
    plain: 14263200,
    desc: `Prague baroque townhouse: rose render with cream stucco pilasters, alternating window pediments, a portal carrying a gilt stag house sign, and a tall volute gable with oculi, a statue in a niche and urn finials.`,
    W: 10,
    D: 14,
    style: {
      wall: `euStuccoRose`,
      floorMat: [`euStuccoCream`],
      t: 0.4,
      bay: 10 / 3,
      floors: [4.4, 3.6, 3.4, 3.2],
      win: r,
      win0: {
        w: 1.3,
        h: 2,
        sill: 0.9,
        type: `grid`,
        lites: [2, 3],
        frame: `trimWhite`,
        arch: 0.3,
        archMat: `euStuccoRose`,
        keystone: !0,
        rec: 0.2,
        curtains: 0.5,
      },
      door: {
        w: 1.5,
        h: 2.6,
        transom: 0.5,
        frame: `euStuccoCream`,
        mat: `euDoorOak`,
        rec: 0.35,
        step: `euGranite`,
      },
      base: { mat: `euGranite`, h: 0.45, out: 0.04 },
      belt: { mat: `euStuccoCream`, h: 0.28, out: 0.08 },
      pilaster: { mat: `euStuccoCream`, w: 0.42, out: 0.08, floors: [1, 2, 3] },
      cornice: { type: `classic`, mat: `euStuccoCream`, h: 0.35, out: 0.35 },
      roof: {
        ridge: `z`,
        pitch: e,
        over: 0.1,
        mat: `euTileRed`,
        fascia: `euStuccoRose`,
      },
    },
    front: {
      kinds: (e, t) => (e === 0 && t === 1 ? `door` : `window`),
      extra: A(
        (e, t, n) => {
          for (let i = 0; i < n.nb; i++) {
            let a = n.grid[1][i],
              { cu: o, a0: s, a1: c, b1: l } = Of(n, r, 1, i),
              u = l + 0.22;
            if (
              (e.box(
                `euStuccoCream`,
                t,
                a,
                s - 0.25,
                c + 0.25,
                u,
                u + 0.12,
                0,
                0.18,
              ),
              i % 2 == 0)
            )
              bf(
                e,
                `euStuccoCream`,
                t,
                a,
                [
                  [s - 0.25, u + 0.12],
                  [c + 0.25, u + 0.12],
                  [o, u + 0.62],
                ],
                0,
                0.16,
              );
            else {
              let n = new T();
              (n.moveTo(s - 0.25, u + 0.12),
                n.absarc(
                  o,
                  u - 0.5,
                  Math.hypot(c + 0.25 - o, 0.62),
                  Math.atan2(0.62, -(o - s + 0.25)),
                  Math.atan2(0.62, c + 0.25 - o),
                  !0,
                ),
                n.lineTo(s - 0.25, u + 0.12),
                yf(e, `euStuccoCream`, t, a, n, 0, 0.16));
            }
          }
          let i = n.grid[0][1],
            a = 1.5 * n.bw;
          for (let n of [-1, 1])
            e.box(
              `euStuccoCream`,
              t,
              i,
              a + n * 1 - 0.2,
              a + n * 1 + 0.2,
              0,
              3.4,
              0,
              0.14,
            );
          (e.box(`euStuccoCream`, t, i, a - 1.35, a + 1.35, 3.4, 3.6, 0, 0.24),
            e.add(
              `euStuccoCream`,
              new C(0.62, 0.62, 0.1, 18)
                .rotateX(Math.PI / 2)
                .scale(1, 0.72, 1)
                .translate(a, 3.98, 0.08),
              t,
              i,
            ),
            bf(
              e,
              `euGilt`,
              t,
              i,
              [
                [-0.3, -0.2],
                [0.25, -0.2],
                [0.25, -0.05],
                [0.33, 0.12],
                [0.3, 0.2],
                [0.18, 0.08],
                [-0.25, 0.08],
                [-0.33, -0.05],
              ].map(([e, t]) => [a + e, 3.98 + t]),
              0.13,
              0.17,
            ));
          for (let n of [-0.22, -0.1, 0.12, 0.22])
            e.box(
              `euGilt`,
              t,
              i,
              a + n - 0.02,
              a + n + 0.02,
              3.66,
              3.8,
              0.13,
              0.17,
            );
          for (let n of [-1, 1])
            k(
              e,
              `euGilt`,
              t,
              i,
              [a + 0.3, 4.16, 0.15],
              [a + 0.3 + n * 0.14, 4.36, 0.15],
              0.025,
            );
        },
        (r, i, a) => {
          let o = Wf({
              pitch: e,
              prof: Kf(
                [
                  [0, 0],
                  [1.4, 1.4 * t + 0.9],
                  [3, 3 * t + 1.2],
                  [5, n + 1.1],
                ],
                0.9,
              ),
              mat: `euStuccoRose`,
              rim: `euStuccoCream`,
              rimW: 0.14,
              z: 0.12,
              finials: [1.4, 3, 7, 8.6],
              finS: 1.1,
            })(r, i, a),
            s = a.gableCell,
            c = a.H,
            l = new T();
          (l.moveTo(4.45, c + 2),
            l.lineTo(5.55, c + 2),
            l.lineTo(5.55, c + 3.4),
            l.absarc(5, c + 3.4, 0.55, 0, Math.PI, !1),
            l.lineTo(4.45, c + 2),
            yf(r, `euHole`, i, s, l, 0.12, 0.13),
            Nf(r, i, s, 5, c + 2.02, 0.35, 0.72, `euStuccoCream`));
          for (let e of [2.7, 7.3])
            Af(r, i, s, e, c + 1.1, 0.38, `trimWhite`, 0.12);
          for (let e of [4, 6])
            r.box(
              `euStuccoCream`,
              i,
              s,
              e - 0.16,
              e + 0.16,
              c,
              c + 4.1,
              0.12,
              0.22,
            );
          return (
            r.box(
              `euStuccoCream`,
              i,
              s,
              3.7,
              6.3,
              c + 4.1,
              c + 4.35,
              0.12,
              0.3,
            ),
            o
          );
        },
      ),
    },
    back: {
      kinds: () => `window`,
      extra: Wf({
        pitch: e,
        prof: Gf(2, t, 0.4),
        mat: `euStuccoRose`,
        rim: `euStuccoCream`,
        z: 0.1,
      }),
    },
    right: { kinds: () => `solid`, noPilaster: !0 },
    left: { kinds: () => `solid`, noPilaster: !0 },
    extra: (t, n, r) => {
      (Vf(t, n, r, [-3], {
        ridge: `z`,
        pitch: e,
        w: 1.2,
        h: 1,
        inset: 1.5,
        mat: `euStuccoRose`,
        roof: `euTileRed`,
        trim: `trimWhite`,
        type: `round`,
      }),
        j(t, n, `euStuccoRose`, 1.6, -3.5, r.H, r.roofTop - 1.2, 0.8, 0.8));
    },
  };
}
