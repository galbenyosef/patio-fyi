// assets__lab-buildings-view-DY6ytqNM 133 — math
// Lines 44304-44464 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function lp() {
  let e = 60 * H,
    t = Math.tan(e),
    n = 7.8,
    r = n / 2,
    i = r * t;
  return {
    key: `euCanalBell`,
    name: `Brouwerssteeg Bell House`,
    plain: 5712159,
    desc: `Dutch canal house with a bell gable: near-black brick, sandstone-rimmed bell outline with a crown and oculus, raised front door reached by a double stoop with iron railings, sunken basement windows, hoist beam.`,
    W: n,
    D: 13,
    style: {
      wall: `euBrickDutchDark`,
      floorMat: [`euSandstone`],
      t: 0.3,
      bay: n / 3,
      floors: [1.3, 3.6, 3.2, 3],
      win: {
        w: 1.2,
        h: 2.05,
        sill: 0.65,
        type: `sash`,
        lites: [2, 3],
        frame: `trimWhite`,
        sillMat: `euSandstone`,
        header: `euSandstone`,
        headerH: 0.18,
        rec: 0.1,
        curtains: 0.5,
      },
      win0: {
        w: 1.1,
        h: 0.55,
        sill: 0.4,
        type: `grid`,
        lites: [3, 1],
        frame: U,
        rec: 0.15,
        curtains: 0,
      },
      door: {
        w: 1.2,
        h: 2.4,
        transom: 0.55,
        frame: `trimWhite`,
        mat: `euDoorBlack`,
        rec: 0.25,
      },
      belt: { mat: `euSandstone`, h: 0.14, out: 0.04 },
      roof: {
        ridge: `z`,
        pitch: e,
        over: 0.1,
        mat: `euTileBrown`,
        fascia: `euBrickDutchDark`,
      },
    },
    front: {
      kinds: (e, t) => (e === 1 && t === 1 ? `door` : `window`),
      extra: A(
        Wf({
          pitch: e,
          prof: qf(1.45, 1.45 * t + 0.7, 1.45 * t + 1.9, i + 0.9, 0.7),
          mat: `euBrickDutchDark`,
          rim: `euSandstone`,
          rimW: 0.16,
          z: 0.16,
          finials: [r],
          finS: 1.3,
        }),
        sp(11.1 + i + 0.2, n),
        (e, t, n) => {
          let r = n.L / 2,
            i = n.grid[0][1],
            a = 1.2,
            o = 1.3;
          e.box(`euSandstone`, t, i, r - 1, r + 1, 0, a, 0, o);
          for (let i = 1; i <= 6; i++)
            for (let s of [-1, 1]) {
              let c = r + s * (1 + (i - 1) * 0.28),
                l = c + s * 0.28,
                u = n.grid[0][W(n, (c + l) / 2)];
              e.box(
                `euSandstone`,
                t,
                u,
                Math.min(c, l),
                Math.max(c, l),
                0,
                a - i * 0.2,
                0.2,
                o,
              );
            }
          for (let i of [-1, 1]) {
            let o = n.grid[0][W(n, r + i * 1.8)];
            k(
              e,
              U,
              t,
              o,
              [r + i * 1, 2.15, 1.25],
              [r + i * 2.7, 0.95, 1.25],
              0.04,
            );
            for (let o = 0; o <= 6; o++) {
              let s = r + i * (1 + o * 0.28);
              e.box(
                U,
                t,
                n.grid[0][W(n, s)],
                s - 0.015,
                s + 0.015,
                Math.max(0, a - o * 0.2),
                2.15 - o * 0.2,
                1.23,
                1.27,
              );
            }
          }
          e.box(U, t, i, r - 1, r + 1, 2.13, 2.17, 1.22, 1.28);
          for (let n = r - 0.95; n <= r + 0.96; n += 0.19)
            e.box(U, t, i, n - 0.015, n + 0.015, a, 2.15, 1.23, 1.27);
        },
        (e, t, n) => {
          let a = n.gableCell;
          Af(e, t, a, r, n.H + i * 0.55, 0.42, `trimWhite`, 0.1);
          for (let r of [2.8, 5])
            kf(e, t, a, r, n.H + 0.6, 0.9, 1.5, `trimWhite`, { cross: !0 });
          for (let r of [-1, 1])
            e.add(
              `euSandstone`,
              new C(0.38, 0.38, 0.2, 12, 1, !1, 0, Math.PI)
                .rotateX(Math.PI / 2)
                .rotateZ(r > 0 ? 0 : Math.PI)
                .translate(r > 0 ? 7.78 : 0.02, n.H + 0.05, 0.14),
              t,
              a,
            );
        },
        op([4.9, 8.1], [0.35, 7.45]),
      ),
    },
    back: {
      kinds: (e, t) => (e === 1 && t === 1 ? `door` : `window`),
      extra: Wf({
        pitch: e,
        prof: qf(1.45, 1.45 * t + 0.7, 1.45 * t + 1.9, i + 0.9, 0.7),
        mat: `euBrickDutchDark`,
        rim: `euSandstone`,
        z: 0.16,
      }),
    },
    right: { kinds: () => `solid` },
    left: { kinds: () => `solid` },
    extra: (e, t, n) =>
      j(e, t, `euBrickDutchDark`, -1.2, -3, n.H, n.roofTop - 1.6, 0.8, 0.6),
  };
}
