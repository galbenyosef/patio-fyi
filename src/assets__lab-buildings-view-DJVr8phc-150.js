// assets__lab-buildings-view-DJVr8phc 150 — box
// Lines 47975-48171 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function kp() {
  return {
    key: `euBrasserie`,
    name: `Brasserie des Trois Tilleuls`,
    plain: 14469536,
    desc: `Northern-French Belle-Époque brasserie: cream brick with red banding and limestone keystones, a black iron-and-glass winter garden across the pavement with gilt cresting, lettered frieze and tables inside, iron balconies, slate roof with round dormers and a lit rooftop sign.`,
    W: 16,
    D: 14,
    style: {
      wall: `euBrickCream`,
      t: 0.35,
      bay: 16 / 5,
      floors: [4.6, 3.4, 3.2, 3],
      win: {
        w: 1.2,
        h: 2.1,
        sill: 0.15,
        type: `grid`,
        lites: [2, 4],
        frame: `trimWhite`,
        header: `euLimeWarm`,
        headerH: 0.25,
        keystone: !0,
        rec: 0.15,
        curtains: 0.6,
      },
      store: { frame: `euPaintBlack`, fascia: `euPaintBlack` },
      door: {
        w: 1.2,
        h: 2.5,
        transom: 0.6,
        frame: `euLimeWarm`,
        mat: `euDoorGreen`,
        rec: 0.3,
        step: `euGranite`,
      },
      base: { mat: `euGranite`, h: 0.4, out: 0.03 },
      belt: { mat: `euLimeWarm`, h: 0.25, out: 0.08 },
      cornice: {
        type: `classic`,
        mat: `euLimeWarm`,
        h: 0.35,
        out: 0.4,
        brackets: !0,
      },
      roof: {
        ridge: `x`,
        pitch: 48 * V,
        over: 0.35,
        mat: `euSlate`,
        fascia: `euLimeWarm`,
        gutter: !0,
      },
    },
    front: {
      kinds: (e, t) => (e === 0 ? (t === 0 ? `door` : `store`) : `window`),
      signs: [
        {
          mat: `euSignTilleuls`,
          rect: [3.3, 15.8, 3.72, 4.06],
          z0: 2.52,
          z1: 2.54,
        },
      ],
      extra: k(
        (e, t, n) => {
          let a = n.bw + 0.1,
            o = n.L - 0.1,
            s = 2.6,
            c = 3.3,
            l = `euPaintBlack`;
          for (let u = 1; u < n.nb; u++) {
            let d = n.grid[0][u],
              f = Math.max(a, u * n.bw),
              p = Math.min(o, (u + 1) * n.bw);
            (e.box(`woodDark`, t, d, f, p, 0, 0.7, 2.52, s),
              e.box(
                `railGlass`,
                t,
                d,
                f,
                p,
                0.7,
                c,
                2.5500000000000003,
                2.5700000000000003,
              ),
              e.box(l, t, d, f, p, c, 3.65, 2.5, 2.62));
            for (let n = f; n < p - 0.05; n += (p - f) / 2)
              e.box(l, t, d, n, n + 0.07, 0.7, c, 2.5100000000000002, s);
            (e.box(l, t, d, f, p, 0.66, 0.72, 2.5, 2.61),
              e.box(`euGranite`, t, d, f, p, 0, 0.08, 0, s));
            let m = Math.hypot(2.4, 0.5500000000000004),
              h = Math.atan2(0.5500000000000004, 2.4);
            e.add(
              `railGlass`,
              new r(p - f, 0.03, m)
                .rotateX(h)
                .translate((f + p) / 2, 7.85 / 2, 2.4 / 2),
              t,
              d,
            );
            for (let n = f + 0.05; n < p; n += 0.75)
              e.add(
                l,
                new r(0.05, 0.06, m)
                  .rotateX(h)
                  .translate(n, 7.85 / 2 + 0.03, 2.4 / 2),
                t,
                d,
              );
            e.box(`euGilt`, t, d, f, p, 3.65, 3.6999999999999997, 2.52, 2.64);
            for (let n = f + 0.2; n < p; n += 0.4)
              e.add(
                `euGilt`,
                new i(0.05, 0.22, 4).translate(n, 3.8, 2.58),
                t,
                d,
              );
            u === 3
              ? e.box(
                  `euDoorGreen`,
                  t,
                  d,
                  (f + p) / 2 - 0.6,
                  (f + p) / 2 + 0.6,
                  0.08,
                  2.5,
                  2.56,
                  2.58,
                )
              : Rf(e, t, d, (f + p) / 2, 1.3);
          }
          for (let r of [a, o - 0.07]) {
            let i = n.grid[0][U(n, r)];
            (e.box(`woodDark`, t, i, r, r + 0.07, 0, 0.7, 0, s),
              e.box(
                `railGlass`,
                t,
                i,
                r + 0.02,
                r + 0.05,
                0.7,
                c,
                0,
                2.5500000000000003,
              ),
              e.box(l, t, i, r, r + 0.07, 0.7, 3.65, 2.5, s),
              e.box(l, t, i, r, r + 0.07, c, 3.65, 0, s));
          }
          for (let r of [a + 0.4, o - 0.4]) {
            let i = n.grid[0][U(n, r)];
            (e.add(`euCabbage`, new w(0.4, 8, 6).translate(r, 1.1, 2.1), t, i),
              e.box(
                `euPaintBlack`,
                t,
                i,
                r - 0.25,
                r + 0.25,
                0.08,
                0.65,
                1.85,
                2.35,
              ));
          }
        },
        Be(
          [
            [`euBrickVict`, 5.9, 6.2, 0.01],
            [`euBrickVict`, 9.3, 9.6, 0.01],
          ],
          !1,
        ),
        $f({ floors: [1, 2], w: 1.6, d: 0.6, slab: `euLimeWarm` }),
      ),
    },
    back: { kinds: (e, t) => (e === 0 && t === 2 ? `door` : `window`) },
    right: { kinds: (e, t) => (t === 1 ? `window` : `solid`) },
    left: { kinds: () => `solid` },
    extra: (e, t, n) => {
      (Hf(e, t, n, [-4.8, 0, 4.8], {
        pitch: 48 * V,
        w: 1.3,
        h: 1,
        inset: 0.9,
        mat: `euLimeWarm`,
        roof: `euZinc`,
        trim: `trimWhite`,
        type: `round`,
        sides: [1],
      }),
        ke(e, t, n, `euSignBieres`, 7, 1.3, -2.5, 1.4));
      for (let r of [-7.4, 7.4])
        A(e, t, `euBrickCream`, r, 0, n.H, n.roofTop + 0.8, 0.9, 0.9);
    },
  };
}
