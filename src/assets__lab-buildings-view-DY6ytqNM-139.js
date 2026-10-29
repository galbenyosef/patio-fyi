// assets__lab-buildings-view-DY6ytqNM 139 — box
// Lines 45458-45667 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function hp() {
  let e = (e, t) =>
      e === 0
        ? t === 0
          ? `door`
          : `store`
        : e === 3 && t === 0
          ? `door`
          : (e + t) % 2 == 0
            ? `window`
            : `solid`,
    t = (e, t, n) => {
      for (let r = 0; r <= n.top; r++)
        for (let i of [0.35, 2.4])
          for (let a = 0.5; a < n.L - 0.3; a += 1.1) {
            let o = n.ys[r] + i;
            o > 1.5 &&
              e.box(
                `euHole`,
                t,
                n.grid[r][W(n, a)],
                a - 0.09,
                a + 0.09,
                o - 0.09,
                o + 0.09,
                0,
                0.01,
              );
          }
    },
    n = (e, t, n) => {
      for (let r = 0.2; r < n.L - 0.1; r += 0.6)
        e.box(
          `euTuscan`,
          t,
          n.grid[n.top][W(n, r)],
          r - 0.14,
          r + 0.14,
          n.H - 0.5,
          n.H - 0.1,
          0,
          0.3,
        );
      for (let r = 0; r < n.nb; r++)
        e.box(
          `euTuscan`,
          t,
          n.grid[n.top][r],
          r * n.bw,
          (r + 1) * n.bw,
          n.H - 0.1,
          n.H + 1,
          -n.t,
          0.32,
        );
      for (let r = 0.35; r < n.L; r += 1.05)
        e.box(
          `euTuscan`,
          t,
          n.grid[n.top][W(n, r)],
          r - 0.3,
          r + 0.3,
          n.H + 1,
          n.H + 1.8,
          -n.t,
          0.32,
        );
    };
  return {
    key: `euTowerHouse`,
    name: `Torre Lanfredi`,
    plain: 10455920,
    desc: `Tuscan medieval tower house: 29 m of rough brown stone with putlog holes and few round-headed windows, a timber gallery on corbels at a high door, a pentice over the bottega, machicolated crenellated crown and banner.`,
    W: 7,
    D: 7,
    style: {
      wall: `euTuscan`,
      t: 0.6,
      bay: 3.5,
      floors: [4.8, 4, 3.8, 3.6, 3.6, 3.6, 3.6],
      win: {
        w: 0.75,
        h: 1.4,
        sill: 1.1,
        type: `grid`,
        lites: [1, 2],
        frame: `woodDark`,
        arch: 0.375,
        archMat: `euPietra`,
        ringW: 0.2,
        rec: 0.4,
        curtains: 0.3,
      },
      store: { frame: `woodDark`, fascia: `woodDark` },
      door: {
        w: 1.1,
        h: 2.6,
        transom: 0,
        frame: `euPietra`,
        mat: `euDoorOak`,
        rec: 0.45,
        step: `euPietra`,
      },
      base: { mat: `euPietra`, h: 0.6, out: 0.06 },
    },
    front: {
      kinds: e,
      extra: A(t, n, (e, t, n) => {
        let r = n.ys[3],
          i = n.grid[3][0],
          o = 1.1;
        for (let i = 0; i < n.nb; i++) {
          let s = n.grid[3][i],
            c = i * n.bw + 0.3,
            l = (i + 1) * n.bw - 0.3;
          (e.box(`wood`, t, s, c, l, r - 0.1, r, 0, o),
            e.box(`woodDark`, t, s, c, l, r + 0.95, r + 1.02, 1.02, o));
          for (let n = c + 0.1; n < l; n += 0.16)
            e.box(`wood`, t, s, n - 0.05, n + 0.05, r, r + 0.95, 1.04, 1.08);
          for (let n of [c + 0.3, l - 0.3])
            (e.box(
              `euPietra`,
              t,
              s,
              n - 0.13,
              n + 0.13,
              r - 0.55,
              r - 0.1,
              0,
              0.8,
            ),
              k(
                e,
                `woodDark`,
                t,
                s,
                [n, r - 1.3, 0.02],
                [n, r - 0.12, 1],
                0.1,
              ));
          e.add(
            `euPantile`,
            new a(l - c + 0.3, 0.08, Math.hypot(1.4000000000000001, 0.6))
              .rotateX(Math.atan2(0.6, 1.4000000000000001))
              .translate((c + l) / 2, r + 2.9, 1.4000000000000001 / 2),
            t,
            s,
          );
        }
        for (let a of [0.3, n.L - 0.3])
          e.box(`wood`, t, i, a - 0.02, a + 0.02, r, r + 1, 0, o);
        let s = n.grid[0][1];
        e.add(
          `euPantile`,
          new a(3.6, 0.08, 1.5)
            .rotateX(Math.atan2(0.5, 1.4))
            .translate(5.25, 3.85, 0.7),
          t,
          s,
        );
        for (let n of [3.8, 6.7])
          k(e, `woodDark`, t, s, [n, 3, 0.02], [n, 3.72, 1.2], 0.08);
        (e.box(`euPietra`, t, n.grid[0][0], 0.2, 1.4, 0, 0.45, 0, 0.45),
          ep(
            e,
            t,
            n.grid[0][0],
            1.75,
            2.6,
            0.55,
            0.28,
            `euPietra`,
            `euTuscan`,
          ));
      }),
    },
    back: {
      kinds: (e, t) => (e > 0 && (e + t) % 2 == 1 ? `window` : `solid`),
      extra: A(t, n),
    },
    right: {
      kinds: (e, t) => (e > 1 && (e + t) % 3 == 0 ? `window` : `solid`),
      extra: A(t, n),
    },
    left: {
      kinds: (e, t) => (e > 1 && (e + t) % 3 == 1 ? `window` : `solid`),
      extra: A(t, n),
    },
    extra: (e, t, n) => {
      (e.add(
        `aluminum`,
        new C(0.04, 0.06, 5, 6).translate(2.2, n.H + 2.5, -2.2),
        t,
        0,
      ),
        e.box(
          `euFlagCity`,
          t,
          0,
          2.25,
          3.9,
          n.H + 3.9,
          n.H + 4.9,
          -2.21,
          -2.19,
          { planar: (e, t) => [(e - 2.25) / 1.65, t - n.H - 3.9] },
        ));
    },
  };
}
