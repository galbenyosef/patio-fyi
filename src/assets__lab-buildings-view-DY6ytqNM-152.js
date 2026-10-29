// assets__lab-buildings-view-DY6ytqNM 152 — mat
// Lines 48386-48591 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function Ap() {
  return {
    key: `euApotheke`,
    name: `Stern-Apotheke am Markt`,
    plain: 14263891,
    desc: `German corner pharmacy: sandstone shop floor with APOTHEKE lettering, a lit green cross and gilt star, warm ochre upper floors with green shutters, a round corner oriel on a corbel rising into a copper onion cap, red tiled hip roof with dormers.`,
    W: 12,
    D: 11,
    style: {
      wall: `euStuccoOchre`,
      floorMat: [`euSandstone`],
      t: 0.4,
      bay: 3,
      floors: [4.4, 3.6, 3.4, 3.2],
      win: {
        w: 1.1,
        h: 1.85,
        sill: 0.8,
        type: `grid`,
        lites: [2, 3],
        frame: `trimWhite`,
        casing: `euStuccoCream`,
        shutter: `euShutterGreen`,
        rec: 0.12,
        curtains: 0.6,
      },
      store: { frame: `woodDark`, fascia: `euPaintBlack` },
      door: {
        w: 1.2,
        h: 2.5,
        transom: 0.5,
        frame: `euSandstone`,
        mat: `euDoorOak`,
        glazed: !0,
        rec: 0.3,
        step: `euSandstone`,
      },
      base: { mat: `euGranite`, h: 0.4, out: 0.04 },
      belt: { mat: `euStuccoCream`, h: 0.25, out: 0.07 },
      cornice: { type: `classic`, mat: `euStuccoCream`, h: 0.3, out: 0.35 },
      roof: Df,
    },
    front: {
      kinds: (e, t) => (e === 0 ? (t === 1 ? `door` : `store`) : `window`),
      signs: [
        {
          mat: `euSignApotheke`,
          rect: [0.2, 2.8, 3.6, 4.05],
          z0: 0.08,
          z1: 0.1,
        },
        {
          mat: `euSignApotheke`,
          rect: [6.2, 11.8, 3.6, 4.05],
          z0: 0.08,
          z1: 0.1,
        },
      ],
      extra: A(
        (e, t, n) => {
          let r = n.L - 0.2,
            a = 0.5,
            o = 1.35,
            s = n.H + 1.4,
            c = n.grid[1][n.nb - 1];
          e.add(
            `euSandstone`,
            new d(o, 1.8, 16).rotateX(Math.PI).translate(r, n.ys[1] - 0.9, a),
            t,
            c,
          );
          for (let i = 1; i <= n.top; i++) {
            let c = n.ys[i],
              l = i === n.top ? s : n.ys[i + 1],
              u = n.grid[i][n.nb - 1];
            (e.add(
              `euStuccoOchre`,
              new C(o, o, l - c, 16).translate(r, (c + l) / 2, a),
              t,
              u,
            ),
              e.add(
                `euStuccoCream`,
                new C(
                  1.4100000000000001,
                  1.4100000000000001,
                  0.2,
                  16,
                ).translate(r, c + 0.1, a),
                t,
                u,
              ));
            for (let n of [-0.1, 0.75, 1.6]) {
              let i = af(t, r + Math.sin(n) * o, a + Math.cos(n) * o, n);
              e.box(`glass`, i, u, -0.35, 0.35, c + 0.8, c + 2.5, -0.02, 0.01);
              for (let [t, n, r, a] of [
                [-0.45, -0.35, c + 0.8, c + 2.5],
                [0.35, 0.45, c + 0.8, c + 2.5],
                [-0.45, 0.45, c + 2.5, c + 2.62],
                [-0.5, 0.5, c + 0.7, c + 0.8],
                [-0.025, 0.025, c + 0.8, c + 2.5],
              ])
                e.box(`trimWhite`, i, u, t, n, r, a, -0.02, 0.06);
            }
          }
          let l = n.grid[n.top][n.nb - 1];
          (e.add(
            `euStuccoCream`,
            new C(1.55, 1.55, 0.2, 16).translate(r, s + 0.1, a),
            t,
            l,
          ),
            e.add(
              `euCopper`,
              new g(
                [
                  [1, 0],
                  [1.2, 0.35],
                  [1.18, 0.8],
                  [0.85, 1.35],
                  [0.4, 1.85],
                  [0.14, 2.3],
                  [0.08, 2.8],
                  [0, 2.95],
                ].map(([e, t]) => new y(e * 1.4000000000000001, t * 1.25)),
                16,
              ).translate(r, s + 0.2, a),
              t,
              l,
            ),
            e.add(
              `euGilt`,
              new i(0.14, 8, 6).translate(r, s + 0.2 + 3.2, a),
              t,
              l,
            ),
            e.add(
              `euGilt`,
              new d(0.04, 0.8, 6).translate(r, s + 3.7, a),
              t,
              l,
            ));
        },
        (e, t, n) => {
          let r = n.grid[1][0];
          e.box(U, t, r, 0.36, 0.44, 5.35, 5.45, 0, 0.6);
          for (let [n, i] of [
            [0.9, 0.3],
            [0.3, 0.9],
          ])
            e.box(
              `euNeonGreen`,
              t,
              r,
              0.34,
              0.46,
              5.4 - i / 2,
              5.4 + i / 2,
              0.6 - n / 2 + 0.05,
              0.6 + n / 2 + 0.05,
            );
          let i = n.grid[0][1],
            a = 1.5 * n.bw,
            o = [];
          for (let e = 0; e < 10; e++) {
            let t = Math.PI / 2 + (e * Math.PI) / 5,
              n = e % 2 ? 0.14 : 0.34;
            o.push([a + Math.cos(t) * n, 3.95 + Math.sin(t) * n]);
          }
          bf(e, `euGilt`, t, i, o, 0, 0.06);
        },
      ),
    },
    right: {
      kinds: (e, t) => (e === 0 && t === 0 ? `store` : `window`),
      signs: [
        {
          mat: `euSignApotheke`,
          rect: [0.2, 2.7, 3.6, 4.05],
          z0: 0.08,
          z1: 0.1,
        },
      ],
    },
    back: { kinds: (e, t) => (e === 0 && t === 2 ? `door` : `window`) },
    left: { kinds: () => `solid` },
    extra: (e, t, n) => {
      let r = Ef(e, t, n, `euTileRed`, 48 * H, 0.5, `euTileRed`);
      for (let r of [-3, 1])
        Bf(e, t, {
          x: r,
          w: 1.2,
          h: 1,
          H: n.H,
          span: n.D,
          pitch: 48 * H,
          rt: 0,
          zf: n.D / 2 - 0.9,
          mat: `euStuccoOchre`,
          roof: `euTileRed`,
          trim: `trimWhite`,
        });
      j(e, t, `euStuccoOchre`, -2, -1.5, n.H, r + 0.3, 0.8, 0.7);
    },
  };
}
