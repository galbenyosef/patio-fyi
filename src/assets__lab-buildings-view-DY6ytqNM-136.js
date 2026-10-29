// assets__lab-buildings-view-DY6ytqNM 136 — box
// Lines 44932-45104 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function fp() {
  let e = {
      w: 1.1,
      h: 2,
      sill: 0.6,
      type: `sash`,
      lites: [3, 2],
      frame: `trimWhite`,
      header: `euBrickVict`,
      headerH: 0.28,
      sillMat: `euSandstone`,
      rec: 0.12,
      curtains: 0.6,
    },
    t = (e, t) => (e === 0 && t % 2 == 0 ? `door` : `window`),
    n = (e, t, n) => {
      for (let r = 0; r < n.nb; r += 2) {
        let i = n.grid[0][r],
          a = (r + 0.5) * n.bw;
        for (let n = 1; n < 6; n++) {
          let r = (n / 6) * Math.PI;
          k(
            e,
            `trimWhite`,
            t,
            i,
            [a, 2.37, -0.2],
            [a + Math.cos(r) * 0.5, 2.38 + Math.sin(r) * 0.5, -0.2],
            0.025,
          );
        }
        for (let n of [-1, 1])
          (Sf(
            e,
            `trimWhite`,
            t,
            i,
            a + n * 0.85,
            0.35,
            0.16,
            2.95,
            0.13,
            0.11,
            10,
          ),
            e.box(
              `trimWhite`,
              t,
              i,
              a + n * 0.85 - 0.17,
              a + n * 0.85 + 0.17,
              0.16,
              0.36,
              0.18,
              0.52,
            ));
        (e.box(`trimWhite`, t, i, a - 1.1, a + 1.1, 2.95, 3.25, -0.02, 0.6),
          e.box(`trimWhite`, t, i, a - 1.2, a + 1.2, 3.25, 3.32, -0.02, 0.68),
          e.box(U, t, i, a + 0.8, a + 0.95, 0.6, 1.05, 0, 0.03));
      }
      for (let r = 0; r < n.nb; r++) {
        let i = n.grid[0][r],
          a = r * n.bw,
          o = a + n.bw,
          s =
            r % 2 == 0
              ? [(r + 0.5) * n.bw - 0.7, (r + 0.5) * n.bw + 0.7]
              : null,
          c = s
            ? [
                [a, s[0]],
                [s[1], o],
              ]
            : [[a, o]];
        for (let [n, r] of c) {
          (e.box(U, t, i, n, r, 0.85, 0.9, 1.68, 1.72),
            e.box(U, t, i, n, r, 0.15, 0.2, 1.68, 1.72));
          for (let a = n + 0.06; a < r - 0.03; a += 0.13)
            (e.box(U, t, i, a - 0.012, a + 0.012, 0, 1.05, 1.688, 1.712),
              e.add(U, new d(0.03, 0.1, 4).translate(a, 1.1, 1.7), t, i));
        }
        (s &&
          (e.box(`euSandstone`, t, i, s[0], s[1], 0, 0.15, 0.3, 1.75),
          e.box(`euLead`, t, i, s[0] - 0.5, s[1] + 0.5, 0.01, 0.03, 1.8, 2.7)),
          e.box(`euHole`, t, i, a, o, -0.3, 0.01, 0.35, 1.65));
      }
    };
  return {
    key: `euGeorgian`,
    name: `Kestrel Row`,
    plain: 13018218,
    desc: `Georgian terrace of three houses: yellow stock brick over a channelled stucco ground floor, six-over-six sashes, fanlit doors in Doric door cases, iron balconettes, area railings, parapet, slate roof with dormers and party-wall stacks.`,
    W: 18,
    D: 11,
    style: {
      wall: `euBrickStock`,
      floorMat: [`euStuccoRust`],
      t: 0.35,
      bay: 3,
      floors: [3.3, 3.8, 3.2, 2.7],
      parapet: 0.9,
      win: e,
      win0: { ...e, header: null, sillMat: null, h: 1.9, sill: 0.8 },
      door: {
        w: 1.05,
        h: 2.35,
        transom: 0.55,
        frame: `trimWhite`,
        mat: `euDoorBlack`,
        rec: 0.25,
        step: `euSandstone`,
      },
      belt: { mat: `euStuccoCream`, h: 0.2, out: 0.05 },
      cornice: { type: `classic`, mat: `euStuccoCream`, h: 0.25, out: 0.18 },
      roof: Df,
    },
    front: {
      kinds: t,
      extra: A(n, Qf({ floors: [1], w: 1.4, d: 0.35, h: 0.8, dy: 0.25 })),
    },
    back: { kinds: (e, t) => (e === 0 && t % 2 == 1 ? `door` : `window`) },
    right: { kinds: () => `solid` },
    left: { kinds: () => `solid` },
    extra: (e, t, n) => {
      let r = n.H + 0.1,
        i = n.W / 2 - 0.4,
        a = n.D / 2 - 0.4,
        o = Math.tan(62 * H),
        s = 2.3;
      (Tf(e, t, 0, `euSlate`, i, a, r, i - s / o, a - s / o, r + s),
        Tf(
          e,
          t,
          0,
          `euLead`,
          i - s / o,
          a - s / o,
          r + s,
          i - s / o - 1.5,
          a - s / o - 1.5,
          r + s + 0.5,
        ));
      for (let n of [-6, 0, 6])
        Bf(e, t, {
          x: n,
          w: 1.2,
          h: 1.1,
          H: r,
          span: 2 * a,
          pitch: 62 * H,
          rt: 0,
          zf: a - 0.45,
          mat: `euLead`,
          roof: `euLead`,
          trim: `trimWhite`,
          type: `shed`,
        });
      for (let i of [-8.5, -3, 3, 8.5])
        zf(
          e,
          t,
          `euBrickStock`,
          i,
          0,
          n.H,
          r + s + 1.4,
          Math.abs(i) > 8 ? 1 : 0.8,
          3,
          5,
        );
    },
  };
}
