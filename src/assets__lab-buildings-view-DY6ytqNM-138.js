// assets__lab-buildings-view-DY6ytqNM 138 — box
// Lines 45284-45457 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function mp() {
  let e = {
      w: 1,
      h: 1.3,
      sill: 2.3,
      type: `grid`,
      lites: [1, 2],
      frame: `woodDark`,
      rec: 0.35,
      curtains: 0.3,
    },
    t = (e, t) => (e === 0 && t === 3 ? `door` : `window`),
    n = (t, n, r) => {
      let a = r.grid[0][3];
      ep(t, n, a, 3.5 * r.bw, 3.7, 1.45, 0.75, `euRustica`, `euPietra`);
      for (let i = 0; i < r.nb; i++) {
        if (i === 3) continue;
        let a = r.grid[0][i],
          { a0: o, a1: s, b0: c, b1: l } = Of(r, e, 0, i);
        for (let e = o + 0.1; e < s; e += 0.18)
          t.box(U, n, a, e - 0.02, e + 0.02, c - 0.05, l + 0.05, 0.05, 0.09);
        for (let e of [c + 0.4, l - 0.4])
          t.box(U, n, a, o - 0.05, s + 0.05, e - 0.02, e + 0.02, 0.09, 0.12);
        t.box(`euPietra`, n, a, i * r.bw, (i + 1) * r.bw, 0, 0.45, 0, 0.55);
        for (let e = 0; e < 2; e++)
          t.box(
            `euPietra`,
            n,
            a,
            i * r.bw + 0.8 + e * 1.6,
            i * r.bw + 1 + e * 1.6,
            0,
            0.42,
            0.1,
            0.5,
          );
      }
      for (let e of [0.9, r.L - 0.9]) {
        let i = r.grid[0][W(r, e)];
        (t.box(U, n, i, e - 0.05, e + 0.05, 4.2, 4.3, 0, 0.8),
          k(t, U, n, i, [e, 3.6, 0.02], [e, 4.25, 0.6], 0.05),
          Sf(t, U, n, i, e, 0.8, 3.6, 4.4, 0.22, 0.32, 8),
          Sf(t, `euLamp`, n, i, e, 0.8, 3.7, 4.3, 0.16, 0.24, 8),
          t.add(U, new d(0.34, 0.45, 8).translate(e, 4.62, 0.8), n, i));
        for (let i of [e - 1.3, e + 1.3])
          i > 0 &&
            i < r.L &&
            t.add(
              U,
              new o(0.12, 0.025, 4, 10)
                .rotateX(Math.PI / 2)
                .translate(i, 2.4, 0.16),
              n,
              r.grid[0][W(r, i)],
            );
      }
      let s = r.grid[1][0];
      (bf(
        t,
        `euPietra`,
        n,
        s,
        [
          [0.5, 6.9],
          [1.5, 6.9],
          [1.5, 7.9],
          [1, 8.4],
          [0.5, 7.9],
        ].map(([e, t]) => [e, t]),
        0,
        0.12,
      ),
        t.box(`euGilt`, n, s, 0.7, 1.3, 7.3, 7.5, 0.12, 0.15),
        t.add(`euGilt`, new i(0.1, 8, 6).translate(1, 7.75, 0.14), n, s));
    },
    r = (e, t, n) => {
      for (let r = 0.3; r < n.L; r += 0.6)
        e.box(
          `euPietra`,
          t,
          n.grid[n.top][W(n, r)],
          r - 0.1,
          r + 0.1,
          n.H - 0.95,
          n.H - 0.55,
          0,
          1.05,
        );
    };
  return {
    key: `euPalazzo`,
    name: `Palazzo Vannucci`,
    plain: 12168596,
    desc: `Florentine Renaissance palazzo: heavy rusticated ground floor with barred high windows, great arched portal and stone bench, two storeys of arched biforate windows, iron lanterns, deep modillion cornice, low pantile hip roof and a rooftop altana loggia.`,
    W: 24,
    D: 20,
    style: {
      wall: `euPietra`,
      floorMat: [`euRustica`],
      t: 0.6,
      bay: 3.4285714285714284,
      floors: [5.6, 5, 4.6],
      win: {
        w: 1.6,
        h: 2.8,
        sill: 0.9,
        type: `grid`,
        lites: [2, 3],
        frame: `woodDark`,
        arch: 0.8,
        archMat: `euPietra`,
        ringW: 0.34,
        keystone: !1,
        rec: 0.25,
        curtains: 0.5,
      },
      win0: e,
      door: {
        w: 2.9,
        h: 3.7,
        transom: 0,
        frame: `euRustica`,
        mat: `euDoorOak`,
        rec: 0.6,
        step: `euPietra`,
      },
      belt: { mat: `euPietra`, h: 0.28, out: 0.14 },
      cornice: {
        type: `classic`,
        mat: `euPietra`,
        h: 0.55,
        out: 1.2,
        dentils: !0,
      },
      roof: Df,
    },
    front: { kinds: t, extra: A(n, r) },
    back: { kinds: t, extra: r },
    right: { kinds: () => `window`, extra: r },
    left: { kinds: () => `window`, extra: r },
    extra: (e, t, n) => {
      Ef(e, t, n, `euPantile`, 20 * H, 1.25, null);
      let r = n.H - 0.3,
        i = n.H + 2.9;
      e.box(`euPietra`, t, 0, -3.6, 3.6, r, i, -8.4, -3.6);
      for (let n of [-3.4, -1.2, 1.2, 3.4])
        for (let r of [-8.200000000000001, -6, -3.8000000000000003])
          (Math.abs(n) < 1.3 && Math.abs(r - -6) < 0.1) ||
            (Sf(e, `euPietra`, t, 0, n, r, i, i + 2.6, 0.17, 0.15, 10),
            e.box(
              `euPietra`,
              t,
              0,
              n - 0.24,
              n + 0.24,
              i + 2.6,
              i + 2.8,
              r - 0.24,
              r + 0.24,
            ));
      (e.box(`euPietra`, t, 0, -3.7, 3.7, i + 2.8, i + 3.2, -8.5, -3.5),
        Ef(
          e,
          t.clone().multiply(new E().makeTranslation(0, 0, -6)),
          { W: 7.2, D: 4.800000000000001, H: i + 3.2 },
          `euPantile`,
          22 * H,
          0.5,
          null,
        ),
        j(e, t, `euPietra`, 7, 4, n.H, n.H + 4.4, 0.9, 0.9));
    },
  };
}
