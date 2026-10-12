// assets__lab-buildings-view-DJVr8phc 134 — mat
// Lines 44465-44663 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function dp() {
  let e = 55 * V,
    t = Math.tan(e),
    n = 5 * t;
  return {
    key: `euGuildHall`,
    name: `Guild House of the Boatmen`,
    plain: 14471086,
    desc: `Flemish guild house: warm limestone with a pilaster on every bay, great arched shop windows, full-width balustraded balcony, tall scrolled gable edged in gold with an oculus, gilded finials and a statue.`,
    W: 10,
    D: 15,
    style: {
      wall: `euLimeWarm`,
      t: 0.4,
      bay: 10 / 3,
      floors: [5, 4, 3.8, 3.5],
      win: {
        w: 1.6,
        h: 2.5,
        sill: 0.45,
        type: `grid`,
        lites: [3, 4],
        frame: `euPaintBlack`,
        header: `euSandstone`,
        headerH: 0.3,
        keystone: !0,
        rec: 0.15,
        curtains: 0.5,
      },
      win0: {
        w: 2.3,
        h: 3.3,
        sill: 0.55,
        type: `grid`,
        lites: [3, 3],
        frame: `euPaintBlack`,
        arch: 0.95,
        archMat: `euSandstone`,
        keystone: !0,
        rec: 0.18,
        curtains: 0.3,
      },
      door: {
        w: 1.7,
        h: 2.8,
        transom: 0.9,
        frame: `euSandstone`,
        mat: `euDoorOak`,
        rec: 0.4,
        step: `euGranite`,
      },
      base: { mat: `euGranite`, h: 0.5, out: 0.05 },
      belt: { mat: `euSandstone`, h: 0.3, out: 0.1 },
      pilaster: { mat: `euSandstone`, w: 0.45, out: 0.12 },
      cornice: {
        type: `classic`,
        mat: `euSandstone`,
        h: 0.35,
        out: 0.35,
        dentils: !0,
      },
      roof: {
        ridge: `z`,
        pitch: e,
        over: 0.1,
        mat: `euSlate`,
        fascia: `euLimeWarm`,
      },
    },
    front: {
      kinds: (e, t) => (e === 0 && t === 1 ? `door` : `window`),
      extra: k(
        (e, t, n) => {
          let r = n.ys[1];
          for (let i = 0; i < n.nb; i++) {
            let a = n.grid[1][i],
              o = i * n.bw,
              s = o + n.bw;
            e.box(
              `euSandstone`,
              t,
              a,
              i === 0 ? -0.1 : o,
              i === n.nb - 1 ? s + 0.1 : s,
              r - 0.2,
              r + 0.06,
              0,
              1,
            );
            for (let n of [o + 0.5, s - 0.5])
              e.box(
                `euSandstone`,
                t,
                a,
                n - 0.14,
                n + 0.14,
                r - 0.75,
                r - 0.2,
                0,
                0.8,
              );
            zf(
              e,
              t,
              a,
              i === 0 ? -0.05 : o,
              i === n.nb - 1 ? s + 0.05 : s,
              r + 0.06,
              0.88,
              `euSandstone`,
              1,
            );
          }
          for (let [i, a] of [
            [-0.05, 1],
            [n.L + 0.05, -1],
          ])
            zf(
              e,
              t,
              n.grid[1][U(n, i)],
              0,
              0.75,
              r + 0.06,
              0,
              `euSandstone`,
              1,
            );
        },
        (r, i, a) => {
          let o = Gf({
              pitch: e,
              prof: qf(
                [
                  [0, 0],
                  [1.6, 1.6 * t + 1.1],
                  [3.1, 3.1 * t + 1.3],
                  [5, n + 1],
                ],
                0.9,
              ),
              mat: `euLimeWarm`,
              rim: `euGilt`,
              rimW: 0.1,
              z: 0.14,
              finials: [1.6, 3.1, 6.9, 8.4],
              finMat: `euGilt`,
            })(r, i, a),
            s = a.gableCell,
            c = a.H;
          (Pf(r, i, s, 5, o(5), 0.05, 1, `euGilt`),
            jf(r, i, s, 5, c + 4.6, 0.55, `euGilt`, 0.14));
          for (let e of [3.6, 6.4])
            Af(r, i, s, e, c + 0.7, 0.9, 2.1, `euPaintBlack`, { cross: !0 });
          for (let e of [2.6, 4.5, 5.5, 7.4])
            r.box(
              `euSandstone`,
              i,
              s,
              e - 0.16,
              e + 0.16,
              c,
              c + (Math.abs(e - 5) > 2 ? 2.9 : 3.3),
              0.14,
              0.24,
            );
          (r.box(`euSandstone`, i, s, 2, 8, c + 3.3, c + 3.55, 0.14, 0.34),
            r.box(`euGilt`, i, s, 3.8, 6.2, c + 5.6, c + 6.2, 0.14, 0.2),
            xf(
              r,
              `euGilt`,
              i,
              s,
              [
                [3.7, c + 5.2],
                [6.3, c + 5.2],
                [5.9, c + 5.55],
                [4.1, c + 5.55],
              ],
              0.14,
              0.26,
            ));
        },
      ),
    },
    back: {
      kinds: () => `window`,
      extra: Gf({
        pitch: e,
        prof: Kf(3, t),
        mat: `euLimeWarm`,
        rim: `euSandstone`,
        z: 0.1,
      }),
    },
    right: { kinds: () => `solid`, noPilaster: !0 },
    left: { kinds: () => `solid`, noPilaster: !0 },
  };
}
