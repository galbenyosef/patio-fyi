// assets__lab-buildings-view-DY6ytqNM 142 — box
// Lines 46105-46421 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function vp() {
  let e = {
      w: 1.1,
      h: 1.9,
      sill: 0.8,
      type: `grid`,
      lites: [2, 3],
      frame: `trimWhite`,
      casing: `euStuccoCream`,
      rec: 0.12,
      curtains: 0.5,
    },
    t = (e, t) => (n, r, a) => {
      let o = a.H,
        s = o + e;
      for (let e = 0; e < a.nb; e++) {
        let t = a.grid[a.top][e],
          i = e * a.bw,
          c = i + a.bw;
        (n.box(`euStuccoSage`, r, t, i, c, o, s, -a.t, 0),
          n.box(`euStuccoCream`, r, t, i, c, s, s + 0.22, -a.t - 0.05, 0.12));
        for (let e = 0; e < 2; e++) {
          let c = i + 0.25 + e * (a.bw / 2),
            l = c + a.bw / 2 - 0.5,
            u = (c + l) / 2,
            d = (l - c) / 2,
            f = new T();
          (f.moveTo(c, o + 0.4),
            f.lineTo(l, o + 0.4),
            f.lineTo(l, s - 0.45 - d),
            f.absarc(u, s - 0.45 - d, d, 0, Math.PI, !1),
            f.lineTo(c, o + 0.4),
            yf(n, `euSgraffito`, r, t, f, 0, 0.02),
            n.box(
              `euStuccoCream`,
              r,
              t,
              c - 0.12,
              c,
              o + 0.4,
              s - 0.45 - d,
              0,
              0.08,
            ),
            n.box(
              `euStuccoCream`,
              r,
              t,
              l,
              l + 0.12,
              o + 0.4,
              s - 0.45 - d,
              0,
              0.08,
            ));
        }
      }
      if (!t) return;
      for (let e = 0; e <= a.nb; e++) {
        let t = Math.min(a.L - 0.25, Math.max(0.25, e * a.bw)),
          o = a.grid[a.top][W(a, t)];
        (n.add(
          `euStuccoCream`,
          tf(
            new C(0.08, 0.26, 1.6, 4)
              .rotateY(Math.PI / 4)
              .translate(t, s + 1.02, 0),
          ),
          r,
          o,
        ),
          n.add(`euGilt`, new i(0.16, 10, 8).translate(t, s + 1.95, 0), r, o));
      }
      let c = a.grid[a.top][W(a, a.L / 2)],
        l = a.L / 2;
      (bf(
        n,
        `euStuccoSage`,
        r,
        c,
        [
          [l - 1.2, s + 0.22],
          [l + 1.2, s + 0.22],
          [l + 0.8, s + 1.2],
          [l - 0.8, s + 1.2],
        ],
        -0.3,
        0,
      ),
        n.box(
          `euStuccoCream`,
          r,
          c,
          l - 0.9,
          l + 0.9,
          s + 1.2,
          s + 1.35,
          -0.35,
          0.08,
        ),
        n.add(`euGilt`, new i(0.22, 10, 8).translate(l, s + 1.6, -0.1), r, c),
        n.add(`euGilt`, new d(0.05, 0.6, 6).translate(l, s + 2, -0.1), r, c));
    };
  return {
    key: `euPolish`,
    name: `Kamienica Zielona`,
    plain: 10007958,
    desc: `Polish market-square house: shop floor behind a plastered arcade, sage render with cream window surrounds and black-and-white sgraffito friezes, crowned by a tall Renaissance attic parapet with blind arches, pinnacles and gilt balls hiding the roof.`,
    W: 9,
    D: 14,
    style: {
      wall: `euStuccoSage`,
      t: 0.4,
      bay: 3,
      floors: [4.4],
      win: e,
      store: { frame: `euPaintRed`, fascia: `euPaintRed` },
      door: {
        w: 1.2,
        h: 2.4,
        transom: 0.4,
        frame: `euStuccoCream`,
        mat: `euDoorRed`,
        rec: 0.3,
      },
      base: { mat: `euGranite`, h: 0.4, out: 0.03 },
    },
    tiers: [
      {
        D: 11,
        dz: -3 / 2,
        floors: [4.2],
        front: {
          kinds: (e, t) => (t === 1 ? `door` : `store`),
          extra: Yf({
            d: 3,
            pier: 0.8,
            mat: `euStuccoCream`,
            trim: `euStuccoSage`,
            pave: `euGranite`,
            ends: !0,
            head: 0.5,
          }),
        },
        back: { kinds: (e, t) => (t === 1 ? `door` : `window`) },
        left: { kinds: () => `solid` },
        right: { kinds: () => `solid` },
      },
      {
        floors: [3.6, 3.4],
        style: {
          cornice: { type: `classic`, mat: `euStuccoCream`, h: 0.3, out: 0.3 },
          belt: { mat: `euStuccoCream`, h: 0.2, out: 0.06 },
          roof: Df,
        },
        front: {
          kinds: () => `window`,
          extra: A(
            (e, t, n) => {
              for (let r = 0; r < n.nb; r++)
                e.box(
                  `euSgraffito`,
                  t,
                  n.grid[n.top][r],
                  r * n.bw,
                  (r + 1) * n.bw,
                  n.H - 0.75,
                  n.H - 0.2,
                  0,
                  0.02,
                );
            },
            t(3.2, !0),
          ),
        },
        back: { kinds: () => `window`, extra: t(2.2, !1) },
        left: { kinds: () => `solid`, extra: t(1.2, !1) },
        right: { kinds: () => `solid`, extra: t(1.2, !1) },
      },
    ],
    extra: (e, t, n) => {
      (j(e, t, `euStuccoSage`, -2, 0, n.H, n.H + 2.3, 0.8, 0.8),
        j(e, t, `euStuccoSage`, 2, -4, n.H, n.H + 2.3, 0.8, 0.8));
    },
  };
}
function yp() {
  return {
    key: `euIrishPub`,
    name: `Fennelly’s`,
    plain: 15123020,
    desc: `Irish corner pub: deep green painted shopfront with fluted pilasters, a heavy fascia in gilt lettering and café screens, yellow-rendered upper floor with sashes, slate roof with end stacks, lanterns, flower baskets and a barrel table.`,
    W: 10,
    D: 11,
    style: {
      wall: `euRenderYellow`,
      floorMat: [`euRenderWhite`],
      t: 0.35,
      bay: 2.5,
      floors: [3.9, 3],
      win: {
        w: 1,
        h: 1.6,
        sill: 0.8,
        type: `sash`,
        lites: [2, 2],
        frame: `trimWhite`,
        sillMat: `euPaintCream`,
        rec: 0.12,
        curtains: 0.6,
      },
      store: { frame: `euPaintGreen`, fascia: `euPaintGreen` },
      door: {
        w: 1.1,
        h: 2.2,
        transom: 0.4,
        frame: `euPaintGreen`,
        mat: `euDoorRed`,
        glazed: !0,
        rec: 0.2,
      },
      roof: {
        ridge: `x`,
        pitch: 38 * H,
        over: 0.3,
        mat: `euSlate`,
        fascia: `euPaintCream`,
        gutter: !0,
      },
    },
    front: {
      kinds: (e, t) => (e === 0 ? (t === 2 ? `door` : `store`) : `window`),
      signs: [
        {
          mat: `euSignFennelly`,
          rect: [-0.1, 10.1, 3, 3.7],
          z0: 0.22,
          z1: 0.24,
        },
      ],
      extra: (e, t, n) => {
        for (let r = 0; r < n.nb; r++) {
          let i = n.grid[0][r],
            a = r * n.bw,
            o = a + n.bw;
          (e.box(
            `euPaintGreen`,
            t,
            i,
            r === 0 ? -0.15 : a,
            r === n.nb - 1 ? o + 0.15 : o,
            2.95,
            3.75,
            0,
            0.22,
          ),
            e.box(
              `euPaintGreen`,
              t,
              i,
              r === 0 ? -0.25 : a,
              r === n.nb - 1 ? o + 0.25 : o,
              3.75,
              3.92,
              -0.02,
              0.36,
            ),
            e.box(
              `euGilt`,
              t,
              i,
              r === 0 ? -0.15 : a,
              r === n.nb - 1 ? o + 0.15 : o,
              2.92,
              2.97,
              0.18,
              0.24,
            ));
        }
        for (let r of [0.02, 5, 9.98]) {
          let i = n.grid[0][W(n, r)],
            a = Math.max(-0.15, r - 0.22),
            o = Math.min(10.15, r + 0.22);
          (e.box(`euPaintGreen`, t, i, a, o, 0, 2.95, 0, 0.2),
            e.box(`euPaintGreen`, t, i, a - 0.04, o + 0.04, 0, 0.5, 0, 0.24),
            e.box(`euPaintGreen`, t, i, a - 0.03, o + 0.03, 2.95, 3.9, 0, 0.3),
            e.box(`euGilt`, t, i, r - 0.06, r + 0.06, 1.4, 2.6, 0.2, 0.22));
        }
        for (let r of [0.02, 9.98]) Ff(e, t, n.grid[0][W(n, r)], r, 3.3, 0.7);
        for (let r of [4.3, 7.7]) Pf(e, t, n.grid[0][W(n, r)], r, 2.75, 0.4);
        (If(e, t, n.grid[0][1], 3, 0.7), If(e, t, n.grid[0][2], 6.9, 0.7));
        let r = n.grid[0][2];
        e.add(
          `euOak`,
          new C(0.4, 0.4, 0.05, 12).translate(6.9, 0.87, 0.7),
          t,
          r,
        );
        for (let r = 0; r < n.nb; r++) {
          if (r === 2) continue;
          let { a0: i, a1: a } = {
            a0: r * n.bw + 0.4,
            a1: (r + 1) * n.bw - 0.4,
          };
          e.box(`euPaintCream`, t, n.grid[0][r], i, a, 0.6, 1.5, -0.26, -0.25);
        }
      },
    },
    back: { kinds: (e, t) => (e === 0 && t === 1 ? `door` : `window`) },
    right: { kinds: (e, t) => (t === 1 ? `solid` : `window`) },
    left: { kinds: (e, t) => (t === 1 ? `solid` : `window`) },
    extra: (e, t, n) => {
      for (let r of [-4.6, 4.6])
        zf(e, t, `euRenderWhite`, r, 0, n.H, n.roofTop + 0.9, 0.7, 1.4, 3);
    },
  };
}
