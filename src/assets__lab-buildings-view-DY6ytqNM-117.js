// assets__lab-buildings-view-DY6ytqNM 117 — mat
// Lines 39161-39500 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function bd() {
  return {
    key: `deMarket`,
    name: `Souq al-Nour Market Hall`,
    plain: 13219994,
    desc: `Flat-roofed concrete market hall: glazed stalls and roll-up shutters under a long cantilevered canopy with a painted name fascia, fruit crates on the pavement, finned ribbon windows, rooftop tanks and dishes.`,
    W: 22,
    D: 14,
    style: {
      wall: `deConcSand`,
      t: 0.3,
      bay: 2.75,
      floors: [4.2, 3.4],
      parapet: 1,
      win: ql({
        w: 2,
        h: 1.5,
        sill: 0.95,
        lites: [3, 1],
        frame: `aluminum`,
        rec: 0.12,
        curtains: 0.6,
      }),
      store: { frame: `aluminum`, fascia: `deConcSand` },
      loading: { type: `rollup`, w: 2.2, h: 3, dock: !1 },
      door: {
        w: 1.1,
        h: 2.3,
        transom: 0.4,
        frame: `aluminum`,
        mat: `deIronShut`,
        rec: 0.15,
      },
      base: { mat: `deConcGrey`, h: 0.3, out: 0.03 },
    },
    front: {
      kinds: (e, t) => (e === 0 ? (t % 2 ? `loading` : `store`) : `window`),
      signs: [
        {
          mat: `deMarketSign`,
          rect: [1.3, 20.7, 3.12, 3.82],
          z0: 2.4,
          z1: 2.43,
        },
      ],
      extra: A(
        (e, t, n) => {
          let r = 2.4,
            i = Kl(311);
          for (let [a, o, s] of pu(n, -0.3, n.L + 0.3)) {
            let c = n.grid[0][s];
            (e.box(`deConcGrey`, t, c, a, o, 3.35, 3.5700000000000003, 0, r),
              e.box(`deConcSand`, t, c, a, o, 3.1, 3.85, 2.3, r),
              s % 2 == 0 && yd(e, t, c, a + 0.4, o - 0.2, 0.7, i));
          }
          for (let i of [-0.3, n.L + 0.2])
            e.box(
              `deConcSand`,
              t,
              n.grid[0][B(n, i)],
              i,
              i + 0.1,
              3.1,
              3.85,
              0,
              r,
            );
          for (let r = 0; r < n.nb; r++) {
            let i = (r + 0.5) * n.bw;
            k(
              e,
              z,
              t,
              n.grid[1][r],
              [i, 5, 0.02],
              [i, 3.65, 2.1999999999999997],
              0.05,
            );
          }
          for (let r = 0; r <= n.nb; r++) {
            let i = Math.min(n.L - 0.1, Math.max(0.1, r * n.bw));
            fu(
              e,
              `deConcSand`,
              t,
              n,
              i - 0.08,
              i + 0.08,
              n.ys[1] + 0.1,
              n.H,
              0,
              0.55,
            );
          }
          for (let r of [1, 5])
            Bu(e, t, n.grid[1][r], (r + 0.5) * n.bw, n.ys[1] + 0.3);
        },
        qu({ mat: `deConcGrey`, para: 1, h: 0.1, out: 0.05 }),
      ),
    },
    back: {
      kinds: (e, t) =>
        e === 0
          ? t === 2 || t === 5
            ? `loading`
            : t === 3
              ? `door`
              : `solid`
          : `window`,
      extra: qu({ mat: `deConcGrey`, para: 1, h: 0.1, out: 0.05 }),
    },
    right: {
      kinds: (e, t) => (e === 0 ? (t === 1 ? `door` : `solid`) : `window`),
      extra: qu({ mat: `deConcGrey`, para: 1, h: 0.1, out: 0.05, side: !0 }),
    },
    left: {
      kinds: (e) => (e === 0 ? `solid` : `window`),
      extra: qu({ mat: `deConcGrey`, para: 1, h: 0.1, out: 0.05, side: !0 }),
    },
    extra: (e, t, n) => {
      for (let [r, i] of [
        [-8, -4],
        [-6.4, -4],
        [-4.8, -4],
        [6, 3.5],
      ])
        zu(e, t, r, i, n.H, 0.6, 1.3, r < 0 ? `deTankBlack` : `aluminum`);
      (Ru(e, t, 2, 4.5, n.H, 0.4),
        Ru(e, t, 3.4, 4.6, n.H, -0.2),
        Ru(e, t, -1, -5, n.H, 2.8));
      for (let r of [-2, 0])
        (e.box(`trimWhite`, t, 0, r - 0.5, r + 0.5, n.H, n.H + 0.8, 1.2, 1.9),
          e.add(
            z,
            V(0.28, 0.28, 0.03, 12).translate(r, n.H + 0.81, 1.55),
            t,
            0,
          ));
      let r = 8.5,
        i = -4.5;
      for (let [a, o] of [
        [-0.3, -0.3],
        [0.3, -0.3],
        [0.3, 0.3],
        [-0.3, 0.3],
      ])
        k(
          e,
          `aluminum`,
          t,
          0,
          [r + a * 2, n.H, i + o * 2],
          [r + a * 0.6, n.H + 7, i + o * 0.6],
          0.07,
        );
      for (let a = 1; a < 6; a++) {
        let o = n.H + a * 1.2,
          s = 0.6 - a * 0.06;
        e.box(`aluminum`, t, 0, r - s, r + s, o, o + 0.05, i - s, i + s);
      }
      for (let a of [0, 2.1, 4.2])
        e.box(
          `trimWhite`,
          t,
          0,
          r + Math.cos(a) * 0.35 - 0.12,
          r + Math.cos(a) * 0.35 + 0.12,
          n.H + 6.2,
          n.H + 7.4,
          i + Math.sin(a) * 0.35 - 0.05,
          i + Math.sin(a) * 0.35 + 0.05,
        );
    },
  };
}
function xd() {
  let e = {
      wall: `deLimeWash`,
      t: 0.6,
      bay: 3,
      floors: [5.6],
      parapet: 0.5,
      win: ql({ w: 0.5, h: 0.6, sill: 3.6, frame: `deGreen`, rec: 0.45 }),
      door: {
        w: 1.5,
        h: 2.4,
        transom: 0,
        frame: `deCedar`,
        mat: `deStudBlue`,
        rec: 0.45,
        step: `deFlag`,
      },
      base: { mat: `deRubble`, h: 0.9, out: 0.05 },
    },
    t = (e, t) => (t === 2 ? `door` : `window`);
  return {
    key: `deHammam`,
    name: `Hammam el-Nour`,
    plain: 15196626,
    desc: `Bathhouse: thick limewashed walls on a rubble plinth, a cluster of low domes studded with glass oculi, horseshoe portal in a zellige frame under a green-tiled hood, high grilled windows, furnace chimney and woodpile.`,
    W: 15,
    D: 14,
    style: e,
    front: {
      kinds: t,
      signs: [
        { mat: `deHammamSign`, rect: [6.1, 8.9, 4.9, 5.5], z0: 0.02, z1: 0.05 },
      ],
      extra: A(
        Hu({
          b: 2,
          hw: 0.8,
          sp: 2.4,
          rw: 0.2,
          kind: `horse`,
          ring: `deGypsum`,
          tymp: `deZellige`,
          alfiz: `deTunisTile`,
          dado: 1,
          frame: `deGypsum`,
          pent: `deTileGreen`,
          pentTrim: `deCedar`,
          lamps: !0,
        }),
        Su({ kinds: t, S: e, mat: `deReja`, d: 0.08 }),
        qu({ mat: `deTileGreen`, para: 0.5, h: 0.12, out: 0.08 }),
      ),
    },
    back: {
      kinds: (e, t) => (t === 3 ? `door` : `solid`),
      extra: qu({ mat: `deTileGreen`, para: 0.5, h: 0.12, out: 0.08 }),
    },
    right: {
      kinds: (e, t) => (t % 2 ? `window` : `solid`),
      extra: qu({
        mat: `deTileGreen`,
        para: 0.5,
        h: 0.12,
        out: 0.08,
        side: !0,
      }),
    },
    left: {
      kinds: (e, t) => (t % 2 ? `window` : `solid`),
      extra: qu({
        mat: `deTileGreen`,
        para: 0.5,
        h: 0.12,
        out: 0.08,
        side: !0,
      }),
    },
    extra: (e, t, n) => {
      (ju(e, t, n.W, n.D, n.H, n.t, `deLimeWash`),
        Lu(e, t, 0, -1.5, n.H, 3.6, `deLimeWash`, {
          drum: 0.9,
          squash: 0.85,
          seg: 24,
          oculi: [
            [0.35, 6],
            [0.7, 12],
            [1.05, 16],
          ],
          finial: `brass`,
        }),
        Lu(e, t, -4.4, 3.3, n.H, 1.9, `deLimeWash`, {
          drum: 0.5,
          squash: 0.9,
          seg: 18,
          oculi: [
            [0.5, 6],
            [1, 9],
          ],
        }),
        Lu(e, t, 4.4, 3.3, n.H, 1.9, `deLimeWash`, {
          drum: 0.5,
          squash: 0.9,
          seg: 18,
          oculi: [
            [0.5, 6],
            [1, 9],
          ],
        }),
        Lu(e, t, 4.8, -4.6, n.H, 1.3, `deLimeWash`, {
          drum: 0.4,
          seg: 16,
          oculi: [[0.7, 6]],
        }));
      let r = -n.D / 2 - 0.6;
      (e.box(
        `deMud`,
        t,
        0,
        -5.8,
        -4.6000000000000005,
        0,
        n.H + 4.2,
        r - 0.6,
        r + 0.6,
      ),
        e.box(
          `deDark`,
          t,
          0,
          -5.65,
          -4.75,
          n.H + 3.2,
          n.H + 4.22,
          r - 0.45,
          r + 0.45,
        ),
        e.box(
          `deDark`,
          t,
          0,
          -5.6000000000000005,
          -4.8,
          0.3,
          1,
          r - 0.61,
          r - 0.5,
        ));
      for (let r = 0; r < 4; r++)
        for (let i = 0; i < 7 - r; i++)
          e.add(
            `dePalm`,
            V(0.12, 0.12, 1.4, 7)
              .rotateX(Math.PI / 2)
              .translate(
                -1.2 + i * 0.26 + r * 0.13,
                0.13 + r * 0.22,
                -n.D / 2 - 1,
              ),
            t,
            0,
          );
      zu(e, t, 2.5, -5.4, n.H, 0.6, 1.2);
    },
  };
}
