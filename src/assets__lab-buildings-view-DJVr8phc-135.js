// assets__lab-buildings-view-DJVr8phc 135 — kinds
// Lines 44664-44931 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function fp() {
  let e = 50 * V,
    t = {
      w: 1.7,
      h: 1.2,
      sill: 0.95,
      type: `grid`,
      lites: [4, 3],
      frame: `euTimberBlack`,
      rec: 0.1,
      curtains: 0.7,
    },
    n = {
      w: 1.7,
      h: 1.1,
      sill: 0.8,
      type: `grid`,
      lites: [4, 2],
      frame: `euTimberBlack`,
      rec: 0.08,
      curtains: 0.5,
    },
    r = (e, t) => (t === 2 ? `door` : `window`),
    i = (e, t) => (t % 2 == 0 ? `window` : `solid`),
    a = (e, t) => (n, a, o) => {
      for (let s = 0; s <= o.top; s++)
        for (let c = 0; c < o.nb; c++) {
          if ((t ? i : r)(s + t, c) !== `window`) continue;
          let { a0: l, a1: u, b0: d, b1: f } = kf(o, e, s, c),
            p = -(e.rec + 0.03);
          n.box(
            `euLeaded`,
            a,
            o.grid[s][c],
            l + 0.07,
            u - 0.07,
            d + 0.07,
            f - 0.07,
            p,
            p + 0.005,
            { planar: (e, t) => [(e - l) / 0.36, (t - d) / 0.36] },
          );
        }
    },
    o = (e, t, n) => {
      let r = n.grid[0][2];
      (e.box(H, t, r, 5.95, 6.05, 2.85, 2.95, 0, 1.6),
        D(e, H, t, r, [6, 2.2, 0.02], [6, 2.9, 1.2], 0.05),
        Re(e, t, r, `euSignBadger`, 6, 1.7, 2.8, 0.55, 1.55, `euTimberBlack`, {
          hang: !0,
        }));
      for (let r of [1.4, 12.6]) If(e, t, n.grid[0][U(n, r)], r, 2.9, 0.75);
      Ff(e, t, r, 7.9, 2.7, 0.45);
      for (let r of [2, 12]) {
        let i = n.grid[0][U(n, r)];
        e.box(`euOak`, t, i, r - 0.9, r + 0.9, 0.72, 0.8, 1.2, 1.9);
        for (let n of [-1, 1])
          (e.box(
            `euOak`,
            t,
            i,
            r + n * 0.7 - 0.05,
            r + n * 0.7 + 0.05,
            0,
            0.72,
            1.3,
            1.8,
          ),
            e.box(
              `euOak`,
              t,
              i,
              r - 0.9,
              r + 0.9,
              0.42,
              0.47,
              1.55 + n * 0.6,
              1.55 + n * 0.6 + 0.3,
            ));
      }
      Lf(e, t, n.grid[0][3], 9.1, 0.6);
    },
    c = (e, t) =>
      Yf({
        a0: e,
        a1: t,
        pitch: 55 * V,
        depth: 3.2,
        over: 0.4,
        wall: `euInfillWhite`,
        roof: `euTileClay`,
        trim: `euTimberBlack`,
        timber: `euTimberBlack`,
        frame: `euTimberBlack`,
        wins: [[0, 0.5, 1.3, 0.9]],
      });
  return {
    key: `euTudorPub`,
    name: `The Drowsy Badger`,
    plain: 15657176,
    desc: `English Tudor pub: herringbone-brick nogging below, a jettied black-and-white storey with two timbered cross gables above, leaded diamond-pane windows, painted hanging sign, baskets, benches and clustered chimneys.`,
    W: 14,
    D: 10.8,
    style: {
      wall: `euHerring`,
      t: 0.25,
      bay: 2.8,
      floors: [3],
      win: t,
      win0: t,
      door: {
        w: 1.1,
        h: 2.1,
        transom: 0,
        frame: `euTimberBlack`,
        mat: `euDoorOak`,
        rec: 0.2,
        step: `euRubble`,
      },
      base: { mat: `euRubble`, h: 0.35, out: 0.03 },
    },
    tiers: [
      {
        D: 10,
        dz: -0.4,
        floors: [3],
        front: {
          kinds: r,
          extra: k(
            Uf({ mat: `euTimberBlack`, kinds: r, win: t, ends: 0.05 }),
            a(t, 0),
            o,
          ),
        },
        back: {
          kinds: (e, t) => (t === 3 ? `door` : `window`),
          extra: Uf({
            mat: `euTimberBlack`,
            kinds: (e, t) => (t === 3 ? `door` : `window`),
            win: t,
            ends: 0.05,
          }),
        },
        left: {
          kinds: () => `window`,
          extra: Uf({
            mat: `euTimberBlack`,
            kinds: () => `window`,
            win: t,
            ends: 0.05,
          }),
        },
        right: {
          kinds: () => `window`,
          extra: Uf({
            mat: `euTimberBlack`,
            kinds: () => `window`,
            win: t,
            ends: 0.05,
          }),
        },
      },
      {
        D: 10.8,
        dz: 0,
        floors: [2.9],
        style: {
          wall: `euInfillWhite`,
          win: n,
          roof: {
            ridge: `x`,
            pitch: e,
            over: 0.4,
            mat: `euTileClay`,
            fascia: `euTimberBlack`,
          },
        },
        front: {
          kinds: i,
          extra: k(
            Uf({
              mat: `euTimberBlack`,
              kinds: i,
              win: n,
              fo: 1,
              studs: 0.45,
              ends: 0.3,
            }),
            a(n, 1),
            Wf({ jet: 0.8, mat: `euTimberBlack`, ceil: `euPlaster` }),
            c(0, 4.2),
            c(9.8, 14),
          ),
        },
        back: {
          kinds: i,
          extra: Uf({
            mat: `euTimberBlack`,
            kinds: i,
            win: n,
            fo: 1,
            studs: 0.45,
            ends: 0.3,
          }),
        },
        left: {
          kinds: () => `window`,
          extra: Uf({
            mat: `euTimberBlack`,
            kinds: () => `window`,
            win: n,
            fo: 1,
            studs: 0.45,
            gable: e,
            gOff: 0.25,
            ends: 0.05,
          }),
        },
        right: {
          kinds: () => `window`,
          extra: Uf({
            mat: `euTimberBlack`,
            kinds: () => `window`,
            win: n,
            fo: 1,
            studs: 0.45,
            gable: e,
            gOff: 0.25,
            ends: 0.05,
          }),
        },
      },
    ],
    extra: (e, t, n) => {
      let r = n.H,
        i = n.roofTop + 1.4;
      e.box(
        `euBrickSoft`,
        t,
        0,
        1.2000000000000002,
        3.2,
        r,
        n.roofTop + 0.3,
        -1.45,
        -0.55,
      );
      for (let r = 0; r < 3; r++) {
        let a = 1.6 + r * 0.6;
        (e.add(
          `euBrickSoft`,
          new s(0.24, 0.24, i - n.roofTop - 0.3, 8)
            .rotateY(r * 0.4)
            .translate(a, (n.roofTop + 0.3 + i) / 2, -1),
          t,
          0,
        ),
          e.add(
            `euBrickSoft`,
            new s(0.32, 0.26, 0.25, 8).translate(a, i + 0.12, -1),
            t,
            0,
          ));
      }
      A(e, t, `euBrickSoft`, -5.2, 0.8, n.H, n.roofTop - 0.6, 0.8, 0.6);
    },
  };
}
