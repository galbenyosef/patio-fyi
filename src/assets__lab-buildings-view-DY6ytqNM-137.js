// assets__lab-buildings-view-DY6ytqNM 137 — mat
// Lines 45105-45283 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function pp() {
  return {
    key: `euVictorianRow`,
    name: `Albion Parade`,
    plain: 11223852,
    desc: `Victorian red-brick shop parade: three painted shopfronts with fascia signs, console pilasters and striped awnings, two-storey canted bay windows under pointed gablets, cream-brick bands, slate roof and stacks.`,
    W: 16.5,
    D: 12,
    style: {
      wall: `euBrickVict`,
      t: 0.3,
      bay: 2.75,
      floors: [4.3, 3.4, 3.2],
      win: {
        w: 1.2,
        h: 1.8,
        sill: 0.8,
        type: `sash`,
        lites: [2, 1],
        frame: `trimWhite`,
        header: `euBrickCream`,
        headerH: 0.25,
        keystone: !0,
        sillMat: `euSandstone`,
        rec: 0.12,
        curtains: 0.6,
      },
      store: { frame: `euPaintNavy`, fascia: `euPaintNavy` },
      door: {
        w: 1,
        h: 2.3,
        transom: 0.5,
        frame: `euPaintNavy`,
        glazed: !0,
        mat: `euDoorBottle`,
        rec: 0.8,
        step: `euGranite`,
      },
      base: { mat: `euGranite`, h: 0.3, out: 0.03 },
      roof: {
        ridge: `x`,
        pitch: 40 * H,
        over: 0.3,
        mat: `euSlate`,
        fascia: `euPaintCream`,
        gutter: !0,
      },
    },
    front: {
      kinds: (e, t) =>
        e === 0
          ? t % 2 == 0
            ? `store`
            : `door`
          : t % 2 == 0
            ? `solid`
            : `window`,
      signs: [
        {
          mat: `euSignHobbs`,
          rect: [0.35, 5.15, 3.38, 3.92],
          z0: 0.12,
          z1: 0.14,
        },
        {
          mat: `euSignGrocer`,
          rect: [5.85, 10.65, 3.38, 3.92],
          z0: 0.12,
          z1: 0.14,
        },
        {
          mat: `euSignTobacco`,
          rect: [11.35, 16.15, 3.38, 3.92],
          z0: 0.12,
          z1: 0.14,
        },
      ],
      extra: A(
        (e, t, n) => {
          for (let r = 0; r < n.nb; r++) {
            let i = n.grid[0][r],
              a = r * n.bw,
              o = a + n.bw;
            (e.box(`euPaintNavy`, t, i, a, o, 3.3, 4, 0, 0.12),
              e.box(
                `euPaintNavy`,
                t,
                i,
                a - 0.02,
                o + 0.02,
                4,
                4.12,
                -0.02,
                0.22,
              ));
          }
          for (let r = 0; r <= 3; r++) {
            let i = Math.min(n.L - 0.2, Math.max(0.2, r * 5.5)),
              a = n.grid[0][W(n, i)];
            (e.box(`euPaintNavy`, t, a, i - 0.2, i + 0.2, 0, 3.3, 0, 0.16),
              e.box(`euPaintNavy`, t, a, i - 0.24, i + 0.24, 3.3, 4.1, 0, 0.32),
              e.box(`euGilt`, t, a, i - 0.12, i + 0.12, 3.6, 3.75, 0.32, 0.34));
          }
          for (let [r, i] of [
            [`euAwnGreen`, 0],
            [`euAwnOchre`, 2],
            [`euAwnRed`, 4],
          ])
            xe(
              { K: e, M: t, S: { awning: { mat: r, depth: 1.6, drop: 0.7 } } },
              n.grid[0][i],
              i * n.bw + 0.3,
              (i + 1) * n.bw + 1.9,
              3.28,
            );
        },
        Xf({
          bays: [0, 2, 4],
          floors: [1, 2],
          d: 0.75,
          mat: `euBrickVict`,
          trim: `euSandstone`,
          frame: `trimWhite`,
          cap: `euLead`,
        }),
        Re(
          [
            [`euBrickCream`, 5.2, 5.45, 0.02],
            [`euBrickCream`, 8.6, 8.85, 0.02],
          ],
          !1,
        ),
        Jf({
          a0: 0.1,
          a1: 2.65,
          pitch: 58 * H,
          depth: 2.2,
          over: 0.3,
          wall: `euBrickVict`,
          roof: `euSlate`,
          trim: `euPaintCream`,
          wins: [[0, 0.45, 0.6, 0.9]],
          frame: `trimWhite`,
        }),
        Jf({
          a0: 5.6,
          a1: 8.15,
          pitch: 58 * H,
          depth: 2.2,
          over: 0.3,
          wall: `euBrickVict`,
          roof: `euSlate`,
          trim: `euPaintCream`,
          wins: [[0, 0.45, 0.6, 0.9]],
          frame: `trimWhite`,
        }),
        Jf({
          a0: 11.1,
          a1: 13.65,
          pitch: 58 * H,
          depth: 2.2,
          over: 0.3,
          wall: `euBrickVict`,
          roof: `euSlate`,
          trim: `euPaintCream`,
          wins: [[0, 0.45, 0.6, 0.9]],
          frame: `trimWhite`,
        }),
      ),
    },
    back: { kinds: (e, t) => (e === 0 && t % 2 == 1 ? `door` : `window`) },
    right: { kinds: () => `solid` },
    left: { kinds: () => `solid` },
    extra: (e, t, n) => {
      for (let r of [-7.85, -2.75, 2.75, 7.85])
        zf(e, t, `euBrickVict`, r, -0.6, n.H, n.roofTop + 0.9, 0.8, 1.8, 4);
    },
  };
}
