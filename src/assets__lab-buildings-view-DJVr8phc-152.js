// assets__lab-buildings-view-DJVr8phc 152 — mat
// Lines 48386-48591 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function jp() {
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
      roof: Of,
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
      extra: k(
        (e, n, r) => {
          let a = r.L - 0.2,
            o = 0.5,
            c = 1.35,
            l = r.H + 1.4,
            u = r.grid[1][r.nb - 1];
          e.add(
            `euSandstone`,
            new i(c, 1.8, 16).rotateX(Math.PI).translate(a, r.ys[1] - 0.9, o),
            n,
            u,
          );
          for (let t = 1; t <= r.top; t++) {
            let i = r.ys[t],
              u = t === r.top ? l : r.ys[t + 1],
              d = r.grid[t][r.nb - 1];
            (e.add(
              `euStuccoOchre`,
              new s(c, c, u - i, 16).translate(a, (i + u) / 2, o),
              n,
              d,
            ),
              e.add(
                `euStuccoCream`,
                new s(
                  1.4100000000000001,
                  1.4100000000000001,
                  0.2,
                  16,
                ).translate(a, i + 0.1, o),
                n,
                d,
              ));
            for (let t of [-0.1, 0.75, 1.6]) {
              let r = of(n, a + Math.sin(t) * c, o + Math.cos(t) * c, t);
              e.box(`glass`, r, d, -0.35, 0.35, i + 0.8, i + 2.5, -0.02, 0.01);
              for (let [t, n, a, o] of [
                [-0.45, -0.35, i + 0.8, i + 2.5],
                [0.35, 0.45, i + 0.8, i + 2.5],
                [-0.45, 0.45, i + 2.5, i + 2.62],
                [-0.5, 0.5, i + 0.7, i + 0.8],
                [-0.025, 0.025, i + 0.8, i + 2.5],
              ])
                e.box(`trimWhite`, r, d, t, n, a, o, -0.02, 0.06);
            }
          }
          let d = r.grid[r.top][r.nb - 1];
          (e.add(
            `euStuccoCream`,
            new s(1.55, 1.55, 0.2, 16).translate(a, l + 0.1, o),
            n,
            d,
          ),
            e.add(
              `euCopper`,
              new t(
                [
                  [1, 0],
                  [1.2, 0.35],
                  [1.18, 0.8],
                  [0.85, 1.35],
                  [0.4, 1.85],
                  [0.14, 2.3],
                  [0.08, 2.8],
                  [0, 2.95],
                ].map(([e, t]) => new h(e * 1.4000000000000001, t * 1.25)),
                16,
              ).translate(a, l + 0.2, o),
              n,
              d,
            ),
            e.add(
              `euGilt`,
              new w(0.14, 8, 6).translate(a, l + 0.2 + 3.2, o),
              n,
              d,
            ),
            e.add(
              `euGilt`,
              new i(0.04, 0.8, 6).translate(a, l + 3.7, o),
              n,
              d,
            ));
        },
        (e, t, n) => {
          let r = n.grid[1][0];
          e.box(H, t, r, 0.36, 0.44, 5.35, 5.45, 0, 0.6);
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
          xf(e, `euGilt`, t, i, o, 0, 0.06);
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
      let r = Df(e, t, n, `euTileRed`, 48 * V, 0.5, `euTileRed`);
      for (let r of [-3, 1])
        Vf(e, t, {
          x: r,
          w: 1.2,
          h: 1,
          H: n.H,
          span: n.D,
          pitch: 48 * V,
          rt: 0,
          zf: n.D / 2 - 0.9,
          mat: `euStuccoOchre`,
          roof: `euTileRed`,
          trim: `trimWhite`,
        });
      A(e, t, `euStuccoOchre`, -2, -1.5, n.H, r + 0.3, 0.8, 0.7);
    },
  };
}
