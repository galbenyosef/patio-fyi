// assets__lab-buildings-view-DY6ytqNM 151 — box
// Lines 48172-48385 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function kp() {
  return {
    key: `euBookshop`,
    name: `Wren & Quire`,
    plain: 10115646,
    desc: `English bookshop: bottle-green Georgian shopfront with two curved multi-pane bow windows full of books, a lettered fascia and a hanging sign on an iron bracket, soft red brick above with six-over-six sashes, slate roof and dormer, a bargain barrow outside.`,
    W: 9,
    D: 10,
    style: {
      wall: `euBrickSoft`,
      t: 0.3,
      bay: 3,
      floors: [3.6, 3, 2.8],
      win: {
        w: 1.05,
        h: 1.7,
        sill: 0.7,
        type: `sash`,
        lites: [3, 2],
        frame: `trimWhite`,
        header: `euBrickVict`,
        headerH: 0.25,
        sillMat: `euSandstone`,
        rec: 0.12,
        curtains: 0.5,
      },
      door: {
        w: 1,
        h: 2.2,
        transom: 0.4,
        frame: `euPaintBottle`,
        mat: `euDoorBottle`,
        glazed: !0,
        rec: 0.3,
        step: `euSandstone`,
      },
      base: { mat: `euPaintBottle`, h: 0.25, out: 0.05 },
      roof: {
        ridge: `x`,
        pitch: 42 * H,
        over: 0.3,
        mat: `euSlate`,
        fascia: `trimWhite`,
        gutter: !0,
      },
    },
    front: {
      kinds: (e, t) => (e === 0 ? (t === 1 ? `door` : `solid`) : `window`),
      signs: [
        { mat: `euSignWren`, rect: [0.1, 8.9, 2.95, 3.4], z0: 0.18, z1: 0.2 },
      ],
      extra: A(
        (e, t, n) => {
          for (let r = 0; r < n.nb; r++) {
            let i = n.grid[0][r],
              a = r * n.bw,
              o = a + n.bw;
            if (
              (e.box(
                `euPaintBottle`,
                t,
                i,
                r === 0 ? -0.12 : a,
                r === n.nb - 1 ? o + 0.12 : o,
                2.9,
                3.45,
                0,
                0.18,
              ),
              e.box(
                `euPaintBottle`,
                t,
                i,
                r === 0 ? -0.2 : a,
                r === n.nb - 1 ? o + 0.2 : o,
                3.45,
                3.6,
                -0.02,
                0.3,
              ),
              r !== 1)
            ) {
              e.box(`euBooks`, t, i, a + 0.35, o - 0.35, 0.75, 2.6, -0.02, 0, {
                planar: (e, t) => [(e - a) / 1.3, (t - 0.75) / 1.85],
              });
              for (let n = 0; n < 5; n++)
                e.box(
                  [
                    `euPaintRed`,
                    `euPaintNavy`,
                    `euPaintCream`,
                    `euPaintGreen`,
                    `euGilt`,
                  ][(n + r) % 5],
                  t,
                  i,
                  a + 0.7 + n * 0.33,
                  a + 0.95 + n * 0.33,
                  0.75,
                  0.85 + ((n * 7) % 4) * 0.06,
                  0.2,
                  0.55,
                );
            }
          }
          for (let r of [0.02, 3, 6, 8.98]) {
            let i = n.grid[0][W(n, r)],
              a = Math.max(-0.12, r - 0.18),
              o = Math.min(9.12, r + 0.18);
            (e.box(`euPaintBottle`, t, i, a, o, 0, 2.9, 0, 0.14),
              e.box(
                `euPaintBottle`,
                t,
                i,
                a - 0.04,
                o + 0.04,
                2.6,
                2.9,
                0,
                0.3,
              ));
          }
          let r = n.grid[1][0];
          (e.box(U, t, r, 0.28, 0.34, 4.6, 4.66, 0, 1.3),
            k(e, U, t, r, [0.31, 4.1, 0.02], [0.31, 4.63, 0.95], 0.04),
            Ie(
              e,
              t,
              r,
              `euSignBooks`,
              0.31,
              3.75,
              4.55,
              0.45,
              1.25,
              `euPaintBottle`,
              { hang: !0 },
            ));
          let i = n.grid[0][2];
          e.box(`wood`, t, i, 6.9, 8.5, 0.55, 0.85, 1.2, 1.9);
          for (let n = 0; n < 6; n++)
            e.box(
              [`euPaintRed`, `euPaintNavy`, `euPaintCream`, `euPaintGreen`][
                n % 4
              ],
              t,
              i,
              7 + n * 0.24,
              7.2 + n * 0.24,
              0.85,
              1.1,
              1.3,
              1.8,
            );
          for (let n of [7, 8.4])
            e.add(
              `woodDark`,
              new C(0.3, 0.3, 0.06, 12)
                .rotateZ(Math.PI / 2)
                .translate(n, 0.3, 1.95),
              t,
              i,
            );
          (e.box(`wood`, t, i, 6.95, 7.05, 0, 0.55, 1.25, 1.35),
            Pf(e, t, n.grid[0][1], 3.3, 2.75, 0.4));
        },
        Zf({
          cu: 1.5,
          w: 2.4,
          d: 0.7,
          n: 6,
          floors: [0],
          apron: `euPaintBottle`,
          frame: `euPaintBottle`,
          cap: `euLead`,
          glass: `railGlass`,
          sill: 0.7,
          head: 0.7,
          panes: !0,
        }),
        Zf({
          cu: 7.5,
          w: 2.4,
          d: 0.7,
          n: 6,
          floors: [0],
          apron: `euPaintBottle`,
          frame: `euPaintBottle`,
          cap: `euLead`,
          glass: `railGlass`,
          sill: 0.7,
          head: 0.7,
          panes: !0,
        }),
      ),
    },
    back: { kinds: (e, t) => (e === 0 && t === 1 ? `door` : `window`) },
    right: { kinds: () => `solid` },
    left: { kinds: () => `solid` },
    extra: (e, t, n) => {
      (Vf(e, t, n, [0], {
        pitch: 42 * H,
        w: 1.3,
        h: 1,
        inset: 1,
        mat: `euLead`,
        roof: `euLead`,
        trim: `trimWhite`,
        sides: [1],
      }),
        j(e, t, `euBrickSoft`, -3.6, -1.2, n.H, n.roofTop + 0.7, 0.9, 0.7));
    },
  };
}
