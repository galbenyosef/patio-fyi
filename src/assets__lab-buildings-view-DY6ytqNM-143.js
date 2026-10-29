// assets__lab-buildings-view-DY6ytqNM 143 — mat
// Lines 46422-46584 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function bp() {
  return {
    key: `euTenement`,
    name: `Balgray Terrace`,
    plain: 10114118,
    desc: `Glasgow tenement: four storeys of red sandstone ashlar, two full-height canted bay windows capped in lead, plate-glass sashes, a round-arched close entrance between black shopfronts, cornice, slate roof with gabled dormers and massive chimney stacks.`,
    W: 18,
    D: 13,
    style: {
      wall: `euSandRed`,
      t: 0.5,
      bay: 3,
      floors: [4, 3.4, 3.4, 3.4],
      win: {
        w: 1.3,
        h: 1.95,
        sill: 0.8,
        type: `sash`,
        lites: [1, 1],
        frame: `trimWhite`,
        sillMat: `euSandRed`,
        header: `euSandRed`,
        headerH: 0.2,
        rec: 0.18,
        curtains: 0.7,
      },
      win0: {
        w: 1.6,
        h: 1.5,
        sill: 1.1,
        type: `sash`,
        lites: [2, 1],
        frame: `trimWhite`,
        rec: 0.18,
        curtains: 0.5,
      },
      store: { frame: `euPaintBlack`, fascia: `euPaintBlack` },
      door: {
        w: 1.2,
        h: 2.5,
        transom: 0.7,
        frame: `euSandRed`,
        glazed: !0,
        mat: `euDoorBottle`,
        rec: 0.5,
        step: `euSandstone`,
      },
      base: { mat: `euGranite`, h: 0.35, out: 0.03 },
      belt: { mat: `euSandRed`, h: 0.22, out: 0.07 },
      cornice: {
        type: `classic`,
        mat: `euSandRed`,
        h: 0.4,
        out: 0.4,
        brackets: !0,
      },
      roof: {
        ridge: `x`,
        pitch: 42 * H,
        over: 0.45,
        mat: `euSlate`,
        fascia: `euSandRed`,
        gutter: !0,
      },
    },
    front: {
      kinds: (e, t) =>
        e === 0
          ? t === 2
            ? `door`
            : t === 5
              ? `window`
              : `store`
          : t === 1 || t === 4
            ? `solid`
            : `window`,
      signs: [
        {
          mat: `euSignDrysdale`,
          rect: [0.2, 5.8, 3.14, 3.62],
          z0: 0.1,
          z1: 0.12,
        },
        {
          mat: `euSignMcvey`,
          rect: [9.2, 14.8, 3.14, 3.62],
          z0: 0.1,
          z1: 0.12,
        },
      ],
      extra: A(
        (e, t, n) => {
          let r = n.grid[0][2],
            i = 2.5 * n.bw;
          (ep(e, t, r, i, 3.25, 0.6, 0.3, `euSandRed`, `euSandRed`),
            e.box(
              `euSandstone`,
              t,
              r,
              i - 0.35,
              i + 0.35,
              3.6,
              3.8,
              0.03,
              0.06,
            ));
          for (let r of [0, 1, 3, 4]) {
            let i = n.grid[0][r];
            e.box(
              `euPaintBlack`,
              t,
              i,
              r * n.bw,
              (r + 1) * n.bw,
              3.1,
              3.65,
              0,
              0.1,
            );
          }
        },
        Xf({
          bays: [1, 4],
          floors: [1, 2, 3],
          d: 0.85,
          mat: `euSandRed`,
          trim: `euSandRed`,
          frame: `trimWhite`,
          cap: `euLead`,
        }),
      ),
    },
    back: { kinds: (e, t) => (e === 0 && t === 2 ? `door` : `window`) },
    right: { kinds: () => `solid` },
    left: { kinds: () => `solid` },
    extra: (e, t, n) => {
      Vf(e, t, n, [-4.5, 4.5], {
        pitch: 42 * H,
        w: 2.2,
        h: 1.4,
        inset: 0.6,
        mat: `euSandRed`,
        roof: `euSlate`,
        trim: `trimWhite`,
        dp: 55 * H,
        sides: [1],
      });
      for (let r of [-8.4, 0, 8.4])
        zf(
          e,
          t,
          `euSandRed`,
          r,
          -0.3,
          n.H,
          n.roofTop + 1.2,
          Math.abs(r) > 1 ? 1.1 : 2.2,
          3.4,
          Math.abs(r) > 1 ? 4 : 8,
        );
    },
  };
}
