// assets__lab-buildings-view-DY6ytqNM 213 — box
// Lines 66782-67080 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function Ib() {
  let e = {
      win0: {
        w: 1.4,
        h: 2.1,
        sill: 0.3,
        type: `grid`,
        lites: [2, 3],
        frame: `trimWhite`,
        arch: 0.7,
        archMat: `trWhiteStone`,
        rec: 0.25,
        curtains: 0.3,
      },
      win: {
        w: 1.2,
        h: 2.1,
        sill: 0.45,
        type: `sash`,
        lites: [2, 2],
        frame: `trimWhite`,
        casing: `trimWhite`,
        rec: 0.1,
        curtains: 0.5,
      },
    },
    t = (e, t) => (e === 1 || t === 2 || t === 3 ? `door` : `window`),
    n = (e) => `window`,
    r = db((e) => (e === 1 ? `window` : `solid`), e, `trJalGreen`);
  return {
    key: `trGreatHouse`,
    name: `Mount Clement Great House`,
    plain: 15855334,
    desc: `Plantation great house: arched coral-stone undercroft, white clapboard piano nobile with french doors behind a full-width gallery on stone piers, sweeping double stair with urns, shingle hip roof with a louvred cupola.`,
    W: 18,
    D: 12,
    style: {
      wall: `trLapWhite`,
      floorMat: [`trCoral`],
      t: 0.3,
      bay: 3,
      floors: [3.4, 3.6],
      ...e,
      door: {
        w: 1.3,
        h: 2.2,
        transom: 0.35,
        frame: `trimWhite`,
        glazed: !0,
        mat: `trDoorGreen`,
        rec: 0.12,
      },
      base: { mat: `trWhiteStone`, h: 0.35, out: 0.04 },
      belt: { mat: `trimWhite`, h: 0.26, out: 0.08 },
      corners: `trimWhite`,
      roof: ub(0.3),
    },
    front: {
      kinds: t,
      extra: A(
        ob({
          f: 1,
          y: 3.42,
          top: 6,
          beam: 0.2,
          rise: 0.35,
          d: 2.6,
          roof: `trTinGreen`,
          trim: `trimWhite`,
          col: `post`,
          colW: 0.09,
          rail: !0,
          fret: !0,
          piers: `trCoral`,
          pierW: 0.32,
          gap: 3,
          steps: [9],
          stepW: 2.4,
          noStairs: !0,
        }),
        Fb,
      ),
    },
    back: {
      kinds: (e, t) => (e === 0 && t === 3 ? `door` : `window`),
      extra: r,
    },
    left: { kinds: n, extra: r },
    right: { kinds: n, extra: r },
    extra: (e, t, n) => {
      let r = cb(e, t, n, `trShingle`, 38 * Ey, 0.6, `trimWhite`),
        a = r.yr - 0.3;
      e.box(`trJalWhite`, t, 0, -0.8, 0.8, a, a + 1.5, -0.8, 0.8);
      for (let n of [-1, 1])
        for (let r of [-1, 1])
          e.box(
            `trimWhite`,
            t,
            0,
            n * 0.8 - 0.07,
            n * 0.8 + 0.07,
            a,
            a + 1.5,
            r * 0.8 - 0.07,
            r * 0.8 + 0.07,
          );
      (e.box(`trimWhite`, t, 0, -0.95, 0.95, a + 1.5, a + 1.65, -0.95, 0.95),
        sb(e, t, 0, `trShingle`, 1, 1, a + 1.65, 0.02, 0.02, a + 2.5),
        $(e, `trGold`, t, 0, 0, a + 2.45, a + 3.1, 0, 0.03, 6),
        e.add(`trGold`, new i(0.1, 8, 6).translate(0, a + 2.6, 0), t, 0));
      for (let i of [-5.2, 5.2])
        j(e, t, `trCoral`, i, -1.2, n.H, r.yr - 1, 0.9, 0.7);
    },
  };
}
function Lb(e, t, n) {
  let r = 3.6,
    i = 2.1,
    a = n.grid[0][Q(n, r)],
    o = n.grid[0][Q(n, 7.8)];
  (e.box(`trBrickOld`, t, a, 2.6, 4.6, 0.05, 1.1, 1.1, 3.1),
    e.box(Z, t, a, 3.25, 3.95, 0.15, 0.6, 3.09, 3.12),
    e.add(
      `trCopper`,
      Xy(
        [
          [0.001, 0],
          [0.7, 0.05],
          [0.92, 0.45],
          [0.95, 0.8],
          [0.7, 1.25],
          [0.3, 1.55],
          [0.22, 1.9],
          [0.001, 1.95],
        ],
        16,
      ).translate(r, 1.1, i),
      t,
      a,
    ),
    Yy(e, `trCopper`, t, a, [r, 3, i], [4.8, 3.3, i], 0.12, 8),
    Yy(e, `trCopper`, t, o, [4.8, 3.3, i], [7.4, 2, i], 0.09, 8),
    e.add(`tank`, new C(0.75, 0.8, 1.9, 14).translate(7.8, 1, i), t, o));
  for (let n of [0.4, 1.5])
    e.add(Z, new C(0.79, 0.81, 0.06, 14).translate(7.8, n, i), t, o);
  (Yy(
    e,
    `trCopper`,
    t,
    o,
    [7.8, 0.35, 2.88],
    [7.8, 0.35, 3.4000000000000004],
    0.05,
    6,
  ),
    e.box(`trCopper`, t, o, 7.6, 8, 0.05, 0.35, 3.3, 3.7));
}
function Rb(e, t, n) {
  for (let [r, i] of [
    [14.6, 5],
    [20.5, 4],
  ]) {
    for (let a = 0; a < i; a++) {
      let i = r + a * 0.72;
      Ob(e, t, n.grid[0][Q(n, i)], i, 0.02, 0.9, `z`);
    }
    for (let a = 0; a < i - 1; a++) {
      let i = r + 0.36 + a * 0.72;
      Ob(e, t, n.grid[0][Q(n, i)], i, 0.62, 0.9, `z`);
    }
    for (let a of [-1, i]) {
      let i = r + a * 0.72 * (a < 0 ? 0.6 : 1) - (a < 0 ? 0 : 0.3);
      e.box(
        `woodDark`,
        t,
        n.grid[0][Q(n, i)],
        i - 0.06,
        i + 0.06,
        0,
        0.3,
        0.4,
        1.4,
      );
    }
  }
}
function zb() {
  return {
    key: `trDistillery`,
    name: `Cane Hill Distillery`,
    plain: 12563091,
    desc: `Rum distillery: long coral-rubble boiling house with brick-arched windows, red barn loading doors and a faded painted name band, rusty tin roof with a louvred ridge monitor, tall round brick chimney, copper pot still under an open side shed, cask stacks.`,
    W: 26,
    D: 12,
    style: {
      wall: `trCoralRubble`,
      t: 0.5,
      bay: 6.5,
      floors: [6],
      win: {
        w: 1.6,
        h: 2.6,
        sill: 1.2,
        type: `grid`,
        lites: [3, 4],
        frame: `woodDark`,
        arch: 0.8,
        archMat: `trBrickOld`,
        rec: 0.3,
        curtains: 0,
      },
      door: {
        w: 1.4,
        h: 2.4,
        transom: 0.3,
        frame: `woodDark`,
        mat: `trPlankRed`,
        rec: 0.3,
      },
      loading: { w: 3.4, h: 4.2, mat: `trPlankRed`, trim: `woodDark` },
      base: { mat: `trCoral`, h: 0.5, out: 0.05 },
      roof: {
        ridge: `x`,
        pitch: 24 * Ey,
        over: 0.45,
        mat: `trTinRust`,
        fascia: `woodDark`,
      },
    },
    front: {
      kinds: (e, t) => (t === 1 ? `loading` : `window`),
      signs: [
        { mat: `trSignDistil`, rect: [4, 22, 4.75, 5.6], z0: 0, z1: 0.02 },
      ],
      extra: A(pb(`trCoral`, 6, 0.5), Rb),
    },
    back: {
      kinds: (e, t) => (t === 2 ? `door` : `window`),
      extra: pb(`trCoral`, 6, 0.5),
    },
    left: {
      kinds: (e, t) => (t === 0 ? `door` : `solid`),
      extra: A(
        ob({
          d: 4.2,
          y: 0.08,
          top: 3.8,
          beam: 0.22,
          rise: 0.7,
          roof: `trTinRust`,
          trim: `timber`,
          deck: `concrete`,
          col: `post`,
          colW: 0.1,
          noSkirt: !0,
          brackets: !0,
          gap: 3.6,
        }),
        Lb,
      ),
    },
    right: { kinds: () => `window` },
    extra: (e, t, n) => {
      let r = n.roofTop - 0.2;
      e.box(`louver`, t, 0, -8, 8, r, r + 1.1, -0.9, 0.9);
      for (let n of [-8, -4, 0, 4, 8])
        e.box(`woodDark`, t, 0, n - 0.08, n + 0.08, r, r + 1.1, -0.95, 0.95);
      for (let n of [-1, 1])
        e.add(
          `trTinRust`,
          new a(16.8, 0.07, 1.35)
            .rotateX(n * 0.35)
            .translate(0, r + 1.35, n * 0.6),
          t,
          0,
        );
      let i = -10.4,
        o = -3.2;
      (e.box(`trBrickOld`, t, 0, -11.4, -9.4, n.H - 0.5, n.H + 3.2, -4.2, -2.2),
        e.box(
          `trCoral`,
          t,
          0,
          -11.48,
          -9.32,
          n.H + 3.2,
          n.H + 3.45,
          -4.28,
          -2.12,
        ),
        $(e, `trBrickOld`, t, 0, i, n.H + 3.45, 21, o, 0.85, 14, 0.55));
      for (let r of [12, 16, 20]) {
        let a = 0.85 - ((r - n.H - 3.45) / (21 - n.H - 3.45)) * 0.3 + 0.03;
        $(e, Z, t, 0, i, r, r + 0.12, o, a, 14);
      }
      $(e, `trBrickOld`, t, 0, i, 21, 21.5, o, 0.68, 14, 0.66);
    },
  };
}
