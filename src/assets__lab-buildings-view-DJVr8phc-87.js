// assets__lab-buildings-view-DJVr8phc 87 — mat
// Lines 26640-26952 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function gc() {
  return {
    key: `amDecoTheatre`,
    name: `The Sunburst Theatre`,
    plain: 15723490,
    desc: `Small-town Art Deco movie house: white stucco with fluted pilasters, black Vitrolite base, maroon marquee with bulb-studded readerboard, neon edges and chaser lights, a tall lit blade sign, stepped crown with a gilt sunburst, chrome ticket booth.`,
    W: 15,
    D: 26,
    style: {
      wall: `amStuccoWhite`,
      t: 0.3,
      bay: 3,
      floors: [4.9, 3.8],
      parapet: 1.6,
      parapetMat: `amStuccoWhite`,
      win: {
        w: 1.3,
        h: 2.5,
        sill: 0.6,
        type: `grid`,
        lites: [1, 4],
        frame: `amChrome`,
        panel: `amVitroMaroon`,
        rec: 0.12,
        curtains: 0.3,
      },
      store: { frame: `amChrome`, fascia: `amVitrolite` },
      door: {
        w: 1.8,
        h: 2.4,
        transom: 0.4,
        frame: `amChrome`,
        glazed: !0,
        mat: `amVitroMaroon`,
        rec: 0.35,
      },
      base: { mat: `amVitrolite`, h: 0.6, out: 0.04 },
      pilaster: { mat: `amStuccoWhite`, w: 0.45, out: 0.22, through: !0 },
      cornice: { type: `classic`, mat: `amChrome`, h: 0.12, out: 0.08 },
    },
    front: {
      kinds: (e, t) =>
        e === 0
          ? t === 0 || t === 4
            ? `store`
            : t === 2
              ? `solid`
              : `door`
          : t === 0 || t === 4
            ? `solid`
            : `window`,
      extra: hc,
    },
    back: { kinds: (e, t) => (e === 0 && t === 1 ? `door` : `solid`) },
    right: {
      kinds: (e, t) => (e === 0 && t === 6 ? `door` : `solid`),
      bay: 3.6,
      noPilaster: !0,
    },
    left: {
      kinds: (e, t) => (e === 0 && t === 6 ? `door` : `solid`),
      bay: 3.6,
      noPilaster: !0,
    },
    extra: (e, t, n) => {
      (e.box(`amStuccoWhite`, t, 0, -3, 3, n.H, n.H + 2.4, -11, -7),
        e.box(`louver`, t, 0, -2.6, 2.6, n.H + 0.8, n.H + 1.8, -7.02, -6.98));
    },
  };
}
var _c = (e, t, n) => {
  let r = n.ys[2],
    i = n.L / 2;
  for (let i = 0; i < n.nb; i++) {
    let a = n.grid[2][i],
      o = (i + 0.5) * n.bw;
    if (i === 2) {
      let n = r + 2.4;
      (e.add(`amEmblem`, new y(1.05, 28).translate(o, n, 0.07), t, a, {
        planar: (e, t) => [(e - o + 1.05) / 2.1, (t - n + 1.05) / 2.1],
      }),
        e.add(
          `limestone`,
          new u(1.12, 0.1, 6, 28).translate(o, n, 0.06),
          t,
          a,
        ));
      continue;
    }
    let s = 1.1,
      c = r + 0.7,
      l = r + 3.4,
      d = s / 2;
    (Zs(e, t, a, o, c, s, l - c, 0.06, { frame: F, lites: [2, 4] }),
      e.add(
        `glass`,
        new y(d, 12, 0, Math.PI).translate(o, l + 0.08, 0.03),
        t,
        a,
      ),
      us(
        e,
        t,
        a,
        `limestone`,
        [
          ...ps(o, l + 0.08, 0.8500000000000001, 0, Math.PI, 10),
          ...ps(o, l + 0.08, 0.5700000000000001, Math.PI, 0, 10),
        ],
        0,
        0.1,
      ),
      e.box(
        `limestone`,
        t,
        a,
        o - 0.12,
        o + 0.12,
        l + d - 0.05,
        l + d + 0.42,
        0,
        0.14,
      ));
  }
  let a = n.H + 1.2,
    o = n.grid[n.top][2];
  us(
    e,
    t,
    o,
    `amBrickRust`,
    [
      [i - 3.2, a],
      [i + 3.2, a],
      [i, a + 1.5],
    ],
    -n.t,
    0,
  );
  for (let n of [-1, 1])
    O(
      e,
      `limestone`,
      t,
      o,
      i + n * 3.35,
      a - 0.05,
      i,
      a + 1.6,
      0.25,
      -0.05,
      0.12,
    );
  e.box(`signAmLodgeDate`, t, o, i - 0.9, i + 0.9, a + 0.2, a + 0.75, 0, 0.04, {
    planar: (e, t) => [(e - i + 0.9) / 1.8, (t - a - 0.2) / 0.55],
  });
};
function vc() {
  return {
    key: `amLodge`,
    name: `Evergreen Lodge No. 212`,
    plain: 8272422,
    desc: `Three-storey fraternal lodge: shops with green awnings below, sash windows on the office floor, tall round-headed hall windows and a square-and-compasses medallion up top, bracketed metal cornice, pediment with a date stone, ghost sign on the side.`,
    W: 14,
    D: 22,
    style: {
      wall: `amBrickRust`,
      t: 0.35,
      bay: 2.8,
      floors: [4.3, 3.6, 5],
      parapet: 1.2,
      win: {
        w: 1.1,
        h: 2,
        sill: 0.8,
        type: `sash`,
        lites: [1, 1],
        frame: F,
        header: `limestone`,
        headerH: 0.3,
        sillMat: `limestone`,
        rec: 0.14,
        curtains: 0.6,
      },
      store: { frame: `amGreenTrim`, fascia: `amGreenTrim` },
      awning: { mat: `awningGreen`, depth: 1.5, drop: 0.7 },
      door: {
        w: 1.3,
        h: 2.5,
        transom: 0.6,
        frame: `amGreenTrim`,
        glazed: !0,
        mat: `amDoorOak`,
        rec: 0.35,
      },
      belt: { mat: `limestone`, h: 0.22, out: 0.06 },
      base: { mat: `granite`, h: 0.4, out: 0.03 },
      cornice: {
        type: `classic`,
        mat: `amGreenTrim`,
        h: 0.55,
        out: 0.55,
        cap: `amGreenTrim`,
      },
    },
    front: {
      kinds: (e, t) =>
        e === 0 ? (t === 2 ? `door` : `store`) : e === 1 ? `window` : `solid`,
      signs: [
        { mat: `signAmDrug`, rect: [0.25, 5.35, 3.5, 4], z0: 0.08, z1: 0.1 },
        {
          mat: `signAmDryGoods`,
          rect: [8.65, 13.75, 3.5, 4],
          z0: 0.08,
          z1: 0.1,
        },
        { mat: `signAmLodge`, rect: [1.4, 12.6, 13, 13.5], z0: 0.01, z1: 0.04 },
      ],
      extra: _c,
    },
    back: {
      kinds: (e, t) =>
        e === 0 && t === 1 ? `door` : e === 1 ? `window` : `solid`,
    },
    left: {
      kinds: (e, t) => (e === 0 && t === 6 ? `door` : `solid`),
      signs: [
        { mat: `signAmGhost`, rect: [2, 18, 6.2, 11.6], z0: 0.005, z1: 0.01 },
      ],
    },
    right: { kinds: (e, t) => (e === 1 && t % 2 ? `window` : `solid`) },
  };
}
function yc(e, t, n, r) {
  e.box(`concrete`, t, 0, n - 1.3, n + 1.3, 0, 0.4, r - 1.8, r + 1.6);
  for (let i of [-1, 1])
    (e.add(
      `amOD`,
      new s(0.55, 0.55, 0.14, 16)
        .rotateZ(Math.PI / 2)
        .translate(n + i * 0.8, 0.9500000000000001, r),
      t,
      0,
    ),
      e.add(
        `amRubber`,
        new u(0.55, 0.07, 6, 16)
          .rotateY(Math.PI / 2)
          .translate(n + i * 0.8, 0.9500000000000001, r),
        t,
        0,
      ),
      D(
        e,
        `amOD`,
        t,
        0,
        [n + i * 0.3, 0.9500000000000001, r],
        [n + i * 0.12, 0.48000000000000004, r - 1.7],
        0.14,
      ));
  (e.add(
    `amOD`,
    new s(0.06, 0.06, 1.8, 8)
      .rotateZ(Math.PI / 2)
      .translate(n, 0.9500000000000001, r),
    t,
    0,
  ),
    e.box(
      `amOD`,
      t,
      0,
      n - 0.62,
      n + 0.62,
      0.8500000000000001,
      1.4500000000000002,
      r - 0.1,
      r + 0.05,
    ),
    e.box(`amOD`, t, 0, n - 0.22, n + 0.22, 1, 1.3, r - 0.8, r + 0.3),
    e.add(
      `amOD`,
      new s(0.07, 0.1, 2.4, 10)
        .rotateX(Math.PI / 2 - 0.2)
        .translate(n, 1.35, r + 1.2),
      t,
      0,
    ),
    e.box(`bronze`, t, 0, n - 0.35, n + 0.35, 0.1, 0.38, r + 1.6, r + 1.63));
}
function bc(e, t, n, r, i) {
  (e.add(`concrete`, new s(0.5, 0.6, 0.3, 12).translate(n, 0.15, r), t, 0),
    e.add(
      `aluminum`,
      new s(0.05, 0.09, i, 10).translate(n, i / 2 + 0.3, r),
      t,
      0,
    ),
    e.add(`amGilt`, new w(0.13, 10, 8).translate(n, i + 0.42, r), t, 0),
    e.box(
      `amFlag`,
      t,
      0,
      n + 0.08,
      n + 2.08,
      i - 0.85,
      i + 0.2,
      r - 0.015,
      r + 0.015,
      { planar: (e, t) => [(e - n - 0.08) / 2, (t - i + 0.85) / 1.05] },
    ));
}
