// assets__lab-buildings-view-DY6ytqNM 140 — kinds
// Lines 45668-45838 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function gp() {
  return {
    key: `euPlazaMayor`,
    name: `Casa del Gremio`,
    plain: 10702906,
    desc: `Spanish plaza-mayor block: shops behind a granite arcade of round arches with hanging lamps, three floors of almagre-red render with an iron balcony at every window, slate roof with dormers and a corner slate spire.`,
    W: 20,
    D: 14,
    style: {
      wall: `euStuccoAlmagre`,
      t: 0.4,
      bay: 20 / 6,
      floors: [4.8],
      win: {
        w: 1.1,
        h: 2.4,
        sill: 0.05,
        type: `grid`,
        lites: [2, 4],
        frame: `trimWhite`,
        casing: `euGranite`,
        rec: 0.15,
        curtains: 0.6,
      },
      store: { frame: `euPaintGreen`, fascia: `euPaintGreen` },
      door: {
        w: 1.2,
        h: 2.4,
        transom: 0.4,
        frame: `euGranite`,
        mat: `euDoorGreen`,
        rec: 0.3,
      },
      base: { mat: `euGranite`, h: 0.4, out: 0.03 },
    },
    tiers: [
      {
        D: 10.8,
        dz: -3.2 / 2,
        floors: [4.8],
        style: { wall: `euGranite` },
        front: {
          kinds: () => `store`,
          extra: Yf({
            d: 3.2,
            pier: 1.1,
            mat: `euGranite`,
            pave: `euGranite`,
            ceil: `euPlaster`,
            ends: !0,
            lamps: !0,
          }),
        },
        back: { kinds: (e, t) => (t === 2 ? `door` : `window`) },
        left: { kinds: () => `window` },
        right: { kinds: () => `window` },
      },
      {
        floors: [3.5, 3.3, 3.1],
        style: {
          cornice: {
            type: `classic`,
            mat: `euGranite`,
            h: 0.35,
            out: 0.35,
            dentils: !0,
          },
          belt: { mat: `euGranite`, h: 0.18, out: 0.05 },
          roof: {
            ridge: `x`,
            pitch: 38 * H,
            over: 0.4,
            mat: `euSlate`,
            fascia: `euGranite`,
          },
        },
        front: {
          kinds: () => `window`,
          extra: Qf({
            floors: [0, 1, 2],
            w: 1.6,
            d: 0.6,
            slab: `euGranite`,
            flowers: `euFlowersPink`,
          }),
        },
        back: {
          kinds: () => `window`,
          extra: Qf({ floors: [0], w: 1.6, d: 0.6, slab: `euGranite` }),
        },
        left: { kinds: () => `window` },
        right: { kinds: () => `window` },
      },
    ],
    extra: (e, t, n) => {
      Vf(e, t, n, [-8.3, -5, -1.7, 1.7, 5], {
        pitch: 38 * H,
        w: 1.1,
        h: 1.2,
        inset: 1.2,
        mat: `euSlate`,
        roof: `euSlate`,
        trim: `trimWhite`,
        dp: 55 * H,
        sides: [1],
      });
      let r = 8.1,
        a = 5.1,
        o = 1.9,
        s = n.H - 0.5,
        c = n.roofTop + 1.2;
      (e.box(
        `euStuccoAlmagre`,
        t,
        0,
        6.199999999999999,
        10,
        s,
        c,
        3.1999999999999997,
        7,
      ),
        e.box(
          `euGranite`,
          t,
          0,
          6.049999999999999,
          10.15,
          c,
          c + 0.3,
          3.05,
          7.15,
        ));
      for (let [n, i, s] of [
        [0, o, 0],
        [o, 0, Math.PI / 2],
        [0, -1.9, Math.PI],
        [-1.9, 0, -Math.PI / 2],
      ]) {
        let o = af(t, r + n, a + i, s);
        e.box(`glass`, o, 0, -0.45, 0.45, c - 2.4, c - 0.6, 0, 0.02);
        for (let [t, n, r, i] of [
          [-0.55, -0.45, c - 2.4, c - 0.6],
          [0.45, 0.55, c - 2.4, c - 0.6],
          [-0.55, 0.55, c - 0.6, c - 0.45],
          [-0.03, 0.03, c - 2.4, c - 0.6],
        ])
          e.box(`trimWhite`, o, 0, t, n, r, i, 0, 0.06);
      }
      (e.add(
        `euSlate`,
        tf(
          new d(2.1 * Math.SQRT2, 7.5, 4)
            .rotateY(Math.PI / 4)
            .translate(r, c + 0.3 + 3.75, a),
        ),
        t,
        0,
      ),
        e.add(
          `euLead`,
          new C(0.06, 0.1, 1.6, 6).translate(r, c + 8.4, a),
          t,
          0,
        ),
        e.add(`euGilt`, new i(0.18, 10, 8).translate(r, c + 8.1, a), t, 0),
        e.box(U, t, 0, 8.08, 8.7, c + 8.9, c + 9.2, 5.09, 5.109999999999999),
        j(e, t, `euStuccoAlmagre`, -5, -2, n.H, n.roofTop + 0.3, 0.9, 0.7));
    },
  };
}
