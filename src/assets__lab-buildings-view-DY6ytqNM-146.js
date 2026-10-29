// assets__lab-buildings-view-DY6ytqNM 146 — grid
// Lines 47026-47367 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function Cp() {
  return {
    key: `euArtNouveau`,
    name: `Maison Verlaine`,
    plain: 12745306,
    desc: `Brussels art-nouveau shop house: teal ironwork florist front with whiplash brackets, salmon brick with limestone bands, a two-storey curved iron-and-glass bow window, whiplash balconettes, a great round top window, a painted poppy frieze and a deep bracketed eave.`,
    W: 8,
    D: 12,
    style: {
      wall: `euBrickSalmon`,
      floorMat: [`euLimeWarm`],
      t: 0.35,
      bay: 8 / 3,
      floors: [4.4, 3.6, 3.4, 4.3],
      win: {
        w: 1,
        h: 2.2,
        sill: 0.2,
        type: `grid`,
        lites: [2, 3],
        frame: `euPaintTeal`,
        sillMat: `euLimeWarm`,
        rec: 0.12,
        curtains: 0.5,
      },
      store: { frame: `euPaintTeal`, fascia: `euPaintTeal` },
      door: {
        w: 1.1,
        h: 2.4,
        transom: 0.6,
        frame: `euPaintTeal`,
        glazed: !0,
        mat: `euDoorGreen`,
        rec: 0.3,
      },
      base: { mat: `euGranite`, h: 0.35, out: 0.03 },
      belt: { mat: `euLimeWarm`, h: 0.24, out: 0.05 },
      roof: Df,
    },
    front: {
      kinds: (e, t) =>
        e === 0
          ? t === 2
            ? `door`
            : `store`
          : (e < 3 && t === 1) || e === 3
            ? `solid`
            : `window`,
      signs: [
        {
          mat: `euSignVerlaine`,
          rect: [0.2, 5.1, 3.55, 4.02],
          z0: 0.08,
          z1: 0.1,
        },
      ],
      extra: A(
        (e, t, n) => {
          for (let r of [0.05, n.L - 0.05, 2 * n.bw]) {
            let i = n.grid[0][W(n, r)];
            (e.box(`euPaintTeal`, t, i, r - 0.12, r + 0.12, 0, 4, 0, 0.12),
              k(
                e,
                `euPaintTeal`,
                t,
                i,
                [r, 2.9, 0.1],
                [r + (r < 1 ? 0.6 : -0.6), 3.9, 0.1],
                0.07,
              ));
          }
          let r = n.grid[0][1];
          for (let r of [-1, 1])
            e.add(
              `euPaintTeal`,
              new o(0.55, 0.05, 4, 16, Math.PI / 2)
                .rotateZ(r > 0 ? 0 : Math.PI / 2)
                .translate(n.bw * (r > 0 ? 2 : 1) - r * 0.55, 2.95, 0.1),
              t,
              n.grid[0][+(r > 0)],
            );
          (e.box(`euFlowers`, t, r, 0.4, 5, 0, 0.4, 0.3, 0.8),
            e.box(`woodDark`, t, r, 0.35, 5.05, 0, 0.3, 0.25, 0.85));
        },
        (e, t, n) => {
          let r = n.ys[3],
            i = n.grid[3][1],
            s = n.L / 2,
            l = r + 1.85,
            u = 1.35,
            d = new T();
          d.absarc(s, l, 1.6500000000000001, 0, Math.PI * 2, !1);
          let f = new ne();
          (f.absarc(s, l, u, 0, Math.PI * 2, !0),
            d.holes.push(f),
            yf(e, `euLimeWarm`, t, i, d, 0, 0.14),
            e.add(`glass`, new c(u, 24).translate(s, l, 0.03), t, i));
          for (let n = 0; n < 6; n++)
            e.add(
              `euPaintTeal`,
              new a(0.05, 2 * u, 0.05)
                .rotateZ((n * Math.PI) / 6)
                .translate(s, l, 0.06),
              t,
              i,
            );
          e.add(
            `euPaintTeal`,
            new o(u * 0.45, 0.04, 4, 20).translate(s, l, 0.07),
            t,
            i,
          );
          for (let r = 0; r < n.nb; r++)
            e.box(
              `euArtPanel`,
              t,
              n.grid[3][r],
              r * n.bw,
              (r + 1) * n.bw,
              n.H - 0.95,
              n.H - 0.12,
              0,
              0.02,
              { planar: (e, t) => [e / n.L, (t - n.H + 0.95) / 0.83] },
            );
          for (let r = 0.4; r < n.L; r += 1.2) {
            let i = n.grid[3][W(n, r)];
            (k(
              e,
              `euPaintTeal`,
              t,
              i,
              [r, n.H - 1.6, 0.02],
              [r, n.H + 0.1, 0.95],
              0.07,
            ),
              e.add(
                `euPaintTeal`,
                new o(0.18, 0.03, 4, 10, Math.PI * 1.5)
                  .rotateY(Math.PI / 2)
                  .translate(r, n.H - 1, 0.35),
                t,
                i,
              ));
          }
          for (let r = 0; r < n.nb; r++)
            e.box(
              `woodDark`,
              t,
              n.grid[3][r],
              r === 0 ? -0.3 : r * n.bw,
              r === n.nb - 1 ? n.L + 0.3 : (r + 1) * n.bw,
              n.H + 0.1,
              n.H + 0.34,
              -0.3,
              1.1,
            );
        },
        Zf({
          cu: 4,
          w: 2.6,
          d: 0.85,
          n: 7,
          floors: [1, 2],
          apron: `euLimeWarm`,
          frame: `euPaintTeal`,
          cap: `euCopper`,
          dome: !0,
          sill: 0.8,
          head: 0.35,
        }),
        Qf({
          floors: [1, 2],
          w: 1.3,
          d: 0.35,
          h: 0.9,
          dy: 0.2,
          rail: `euIronWhip`,
          pick: (e, t) => t !== 1,
        }),
      ),
    },
    back: { kinds: (e, t) => (e === 0 && t === 1 ? `door` : `window`) },
    right: { kinds: () => `solid` },
    left: { kinds: () => `solid` },
  };
}
function wp() {
  let e = {
      w: 1,
      h: 2.3,
      sill: 0.05,
      type: `grid`,
      lites: [2, 4],
      frame: `euPaintGreen`,
      casing: `euLioz`,
      rec: 0.12,
      curtains: 0.6,
    },
    t = {
      w: 1,
      h: 2.1,
      sill: 0.4,
      type: `grid`,
      lites: [2, 3],
      frame: `euPaintGreen`,
      casing: `euLioz`,
      rec: 0.15,
      curtains: 0.5,
    };
  return {
    key: `euAzulejo`,
    name: `Casa Azul do Largo`,
    plain: 6127544,
    desc: `Lisbon town house clad in blue-and-white azulejo tiles: white lioz stone surrounds, pilasters and cornice, green French windows with an iron balconette each, barred ground-floor windows, pantile roof with upturned beiral eaves and a tall chimney.`,
    W: 8,
    D: 12,
    style: {
      wall: `euAzulejo`,
      t: 0.35,
      bay: 8 / 3,
      floors: [3.8, 3.3, 3.2, 3],
      win: e,
      win0: t,
      door: {
        w: 1.2,
        h: 2.5,
        transom: 0.4,
        frame: `euLioz`,
        mat: `euDoorGreen`,
        rec: 0.3,
        step: `euLioz`,
      },
      base: { mat: `euLioz`, h: 0.6, out: 0.05 },
      belt: { mat: `euLioz`, h: 0.18, out: 0.06 },
      corners: `euLioz`,
      pilaster: { mat: `euLioz`, w: 0.4, out: 0.06 },
      cornice: { type: `classic`, mat: `euLioz`, h: 0.3, out: 0.3 },
      roof: {
        ridge: `x`,
        pitch: 28 * H,
        over: 0.6,
        mat: `euPantile`,
        fascia: `euLioz`,
      },
    },
    front: {
      kinds: (e, t) => (e === 0 && t === 1 ? `door` : `window`),
      extra: A(
        Qf({
          floors: [1, 2, 3],
          w: 1.45,
          d: 0.55,
          slab: `euLioz`,
          flowers: `euFlowers`,
        }),
        (e, t, n) => {
          for (let r = 0; r < n.nb; r++) {
            let i = n.grid[n.top][r],
              o = r * n.bw,
              s = o + n.bw,
              c = r === 0 ? -0.35 : o,
              l = r === n.nb - 1 ? n.L + 0.35 : s,
              u = n.H;
            for (let [n, r, o] of [
              [u + 0.05, 0.35, 0],
              [u + 0.2, 0.6, 1],
            ])
              e.add(
                `euPantile`,
                new a(l - c, 0.07, 0.4)
                  .rotateX(-0.35)
                  .translate((c + l) / 2, n + o * 0.05, r),
                t,
                i,
              );
          }
          let r = n.grid[0][1];
          (e.box(
            `euLioz`,
            t,
            r,
            n.L / 2 - 0.35,
            n.L / 2 + 0.35,
            3.2,
            3.5,
            0,
            0.04,
          ),
            e.box(
              `euDoorBlue`,
              t,
              r,
              n.L / 2 - 0.25,
              n.L / 2 + 0.25,
              3.25,
              3.45,
              0.04,
              0.05,
            ));
        },
        (e, n, r) => {
          for (let i of [0, 2]) {
            let a = r.grid[0][i],
              { a0: s, a1: c, b0: l, b1: u } = Of(r, t, 0, i);
            for (let t = s + 0.12; t < c; t += 0.16)
              e.box(U, n, a, t - 0.015, t + 0.015, l, u, 0.05, 0.08);
            e.add(
              U,
              new o((c - s) / 2, 0.02, 4, 12, Math.PI).translate(
                (s + c) / 2,
                u,
                0.07,
              ),
              n,
              a,
            );
          }
        },
      ),
    },
    back: {
      kinds: () => `window`,
      extra: Qf({ floors: [1, 2], w: 1.45, d: 0.45, slab: `euLioz` }),
    },
    right: { kinds: () => `solid`, noPilaster: !0 },
    left: { kinds: () => `solid`, noPilaster: !0 },
    extra: (e, t, n) => {
      (e.box(`euRenderWhite`, t, 0, 1.8, 2.6, n.H, n.roofTop + 1.8, -3.4, -2.6),
        e.add(
          `euPantile`,
          tf(
            new d(0.75, 0.4, 4)
              .rotateY(Math.PI / 4)
              .translate(2.2, n.roofTop + 2.05, -3),
          ),
          t,
          0,
        ));
    },
  };
}
