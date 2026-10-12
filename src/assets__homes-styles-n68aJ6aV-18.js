// assets__homes-styles-n68aJ6aV 18 — box
// Lines 5752-6073 of readable/assets__homes-styles-n68aJ6aV.pretty.js (statement-aligned).
function kt(e, t, n) {
  let r = 3.95;
  for (let [i, a, o] of W(n, 0, n.L)) {
    let s = n.grid[0][o],
      c = (o + 0.5) * n.bw,
      l = o === 2 ? 0.5 : 0,
      u = i + 0.6,
      d = a - 0.6;
    (e.box(`whiteSpandrel`, t, s, i, a, r, 4.15, 0, 3),
      e.box(
        `hEnamelTeal`,
        t,
        s,
        i - (o === 0 ? 0.1 : 0),
        a + (o === n.nb - 1 ? 0.1 : 0),
        3.75,
        4.3500000000000005,
        2.92,
        3.06,
      ));
    for (let n = i + 0.7; n < a - 0.3; n += 1.4)
      e.box(`bulb`, t, s, n - 0.2, n + 0.2, 3.91, r, 1.4, 1.6);
    (e.box(I, t, s, u, d, 4.75 + l * 0.5, 5.75 + l * 0.5, l, l + 0.22),
      e.box(
        `signHMall${o}`,
        t,
        s,
        u + 0.05,
        d - 0.05,
        4.8 + l * 0.5,
        5.7 + l * 0.5,
        l + 0.22,
        l + 0.24,
        {
          planar: (e, t) => [
            (e - u - 0.05) / (d - u - 0.1),
            (t - 4.8 - l * 0.5) / 0.9,
          ],
        },
      ));
    for (let [n, r, i, a] of [
      [c - 0.58, c - 0.5, 0.05, 2.35],
      [c + 0.5, c + 0.58, 0.05, 2.35],
      [c - 0.58, c + 0.58, 2.28, 2.36],
    ])
      e.box(`aluminum`, t, s, n, r, i, a, -0.2, -0.15);
    e.box(`aluminum`, t, s, c - 0.4, c + 0.4, 1.05, 1.1, -0.15, -0.1);
  }
  for (let i = 0; i <= n.nb; i++) {
    let a = Math.min(n.L - 0.15, Math.max(0.15, i * n.bw));
    e.box(
      `aluminum`,
      t,
      n.grid[0][L(n, a)],
      a - 0.1,
      a + 0.1,
      0,
      r,
      2.65,
      2.85,
    );
  }
  let i = n.grid[0][2],
    a = 11.6;
  (e.box(`hStuccoBeige`, t, i, a, 16.4, n.H, 8.6, -0.3, 0.5),
    e.box(`hEnamelTeal`, t, i, 11.5, 16.5, 8.6, 8.75, -0.4, 0.6));
  let o = new h(
    [
      [11.299999999999999, 8.75],
      [16.7, 8.75],
      [14, 10.1],
    ].map(([e, t]) => new c(e, t)),
  );
  (e.add(
    `hTerraTile`,
    new m(o, { depth: 1.4, bevelEnabled: !1 }).translate(0, 0, -0.7),
    t,
    i,
  ),
    e.box(`signHPlaza`, t, i, 11.9, 16.099999999999998, 7.3, 8.3, 0.5, 0.52, {
      planar: (e, t) => [(e - a - 0.3) / 4.199999999999999, (t - 7.3) / 1],
    }));
}
function At() {
  return {
    key: `hStripMall`,
    name: `Greywater Plaza`,
    plain: 14075040,
    desc: `Strip mall: five storefronts under one continuous flat canopy on steel columns, lit box signs on a tall parapet, centre tower with a tiled cap.`,
    W: 28,
    D: 14,
    style: {
      wall: `hStuccoBeige`,
      t: 0.3,
      bay: 5.6,
      floors: [4.6],
      parapet: 1.6,
      store: { frame: `aluminum`, fascia: `hStuccoBeige` },
      door: { w: 1, h: 2.2, transom: 0, frame: `aluminum` },
      loading: { type: `rollup`, dock: !1, w: 3, h: 3.2 },
      base: { mat: `granite`, h: 0.4, out: 0.03 },
      cornice: { type: `classic`, mat: `hEnamelTeal`, h: 0.2, out: 0.12 },
    },
    front: { kinds: () => `store`, extra: kt },
    back: { kinds: (e, t) => (t % 2 ? `loading` : `door`) },
    right: { kinds: () => `solid` },
    left: { kinds: () => `solid` },
    extra: (e, t, n) => {
      for (let r of [-9, 0, 9])
        (e.box(`aluminum`, t, 0, r - 1, r + 1, n.H, n.H + 1.1, -3, -1.6),
          e.box(
            `louver`,
            t,
            0,
            r - 0.95,
            r + 0.95,
            n.H + 0.3,
            n.H + 1,
            -1.6,
            -1.58,
          ));
    },
  };
}
var jt = (e, t) => (n, r, i) => {
  let a = t ?? i.L,
    o = 3.2,
    s = 3.95;
  for (let [t, c, l] of W(i, 0, a)) {
    let u = i.grid[0][l];
    (n.box(`hShopBlue`, r, u, t, c, o, s, 0, 0.25),
      n.box(`hGilt`, r, u, t, c, s, 4.01, -0.02, 0.32),
      n.box(`hShopBlue`, r, u, t, c, 4.01, 4.11, -0.02, 0.27),
      n.box(e, r, u, t, c, 3.3000000000000003, 3.85, 0.25, 0.27, {
        planar: (e, t) => [e / a, (t - o - 0.1) / 0.55],
      }));
    for (let e of [l * i.bw, Math.min(a, (l + 1) * i.bw) - 0.3])
      (n.box(`hShopBlue`, r, u, e, e + 0.3, 0, o, 0, 0.16),
        n.box(`hGilt`, r, u, e - 0.02, e + 0.32, 3.04, o, 0, 0.19),
        n.box(
          `hShopBlue`,
          r,
          u,
          e + 0.06,
          e + 0.24,
          0.5,
          2.8000000000000003,
          0.16,
          0.19,
        ));
  }
};
function Mt(e, t, n) {
  for (let [i, a] of [
    [1.3, 0],
    [5.9, 2],
  ]) {
    let o = n.grid[0][a],
      s = 2.1;
    (e.add(I, new r(0.03, 0.03, 0.72, 6).translate(i, 0.36, s), t, o),
      e.add(I, new r(0.22, 0.24, 0.03, 12).translate(i, 0.015, s), t, o),
      e.add(
        `trimWhite`,
        new r(0.32, 0.32, 0.03, 16).translate(i, 0.74, s),
        t,
        o,
      ));
    for (let n of [-1, 1]) {
      let r = i + n * 0.58;
      (e.box(
        `wood`,
        t,
        o,
        r - 0.2,
        r + 0.2,
        0.44,
        0.48,
        1.9000000000000001,
        2.3000000000000003,
      ),
        e.box(
          `wood`,
          t,
          o,
          n > 0 ? r + 0.16 : r - 0.2,
          n > 0 ? r + 0.2 : r - 0.16,
          0.48,
          0.9,
          1.9000000000000001,
          2.3000000000000003,
        ));
      for (let n of [-0.17, 0.17])
        for (let i of [-0.17, 0.17])
          e.box(
            I,
            t,
            o,
            r + n - 0.015,
            r + n + 0.015,
            0,
            0.44,
            s + i - 0.015,
            s + i + 0.015,
          );
    }
  }
}
function Nt() {
  return {
    key: `hBoulangerie`,
    name: `Boulangerie Lebrun`,
    plain: 14274748,
    desc: `Paris corner bakery: cut-corner entrance, painted blue wooden shopfront with gilded lettering, striped awnings, iron balconettes, café tables.`,
    W: 10,
    D: 10,
    chamfer: { r: 2.4 },
    style: {
      wall: `limestone`,
      t: 0.4,
      bay: 2.6,
      floors: [4, 3.3],
      parapet: 0.5,
      win: {
        w: 1.1,
        h: 2.3,
        sill: 0.05,
        type: `grid`,
        lites: [2, 4],
        frame: `trimWhite`,
        header: `limestone`,
        keystone: !0,
        rec: 0.18,
        curtains: 0.6,
      },
      store: { frame: `hShopBlue`, fascia: `hShopBlue` },
      awning: { mat: `hAwningBlue`, depth: 1.3, drop: 0.6 },
      door: {
        w: 1.3,
        h: 2.5,
        transom: 0.5,
        frame: `hShopBlue`,
        glazed: !0,
        mat: `hShopBlue`,
        rec: 0.3,
        step: `granite`,
      },
      base: { mat: `granite`, h: 0.4, out: 0.04 },
      belt: { mat: `limestone`, h: 0.22, out: 0.08 },
      cornice: {
        type: `classic`,
        mat: `limestone`,
        h: 0.45,
        out: 0.4,
        dentils: !0,
        cap: `hZinc`,
      },
    },
    front: {
      kinds: (e) => (e === 0 ? `store` : `window`),
      extra: T(jt(`signHBoulangerie`), Y([1], 1.1), Mt),
    },
    corner: {
      kinds: (e) => (e === 0 ? `door` : `window`),
      extra: T(jt(`signHPain`), Y([1], 1.1)),
    },
    right: {
      kinds: (e, t) =>
        e === 0 ? (t === 0 ? `store` : t === 2 ? `door` : `solid`) : `window`,
      extra: T(jt(`signHVienn`, 2.4), Y([1], 1.1)),
    },
    left: { kinds: (e) => (e === 0 ? `solid` : `window`) },
    back: {
      kinds: (e, t) => (e === 0 ? (t === 1 ? `door` : `solid`) : `window`),
    },
    extra: (e, t, n) =>
      N(e, t, `limestone`, -3, -2.5, n.H, n.H + 2.2, 1.6, 0.6),
  };
}
function Pt(e, t, n) {
  let i = 7.7,
    a = 0.32,
    o = 0.44,
    s = n.L;
  for (let [r, c] of W(n, -0.12, s + 0.12))
    U(e, `hLapWhite`, t, n, r, c, n.H - 0.35, i, a, o);
  for (let r of [-0.12, s]) U(e, `hLapWhite`, t, n, r, r + 0.12, n.H, i, 0, a);
  let c = n.gableCell;
  (e.box(`signHHardware`, t, c, 0.5, s - 0.5, 4.75, 7, o, 0.46, {
    planar: (e, t) => [(e - 0.5) / (s - 1), (t - 4.75) / 2.25],
  }),
    e.box(`woodDark`, t, c, -0.3, s + 0.3, i, 7.92, 0.1, 0.79),
    e.box(`woodDark`, t, c, -0.2, s + 0.2, 7.5, i, a, 0.64));
  for (let n = 0.2; n <= s; n += (s - 0.4) / 5)
    e.box(`woodDark`, t, c, n - 0.07, n + 0.07, 7.15, 7.5, o, 0.72);
  let l = n.grid[0][2];
  for (let [n, i] of [
    [8.6, 0],
    [9.3, 1],
  ])
    e.add(
      `tank`,
      new r(0.3, 0.28, 0.85, 12).translate(n, 0.73, 1.6 + i * 0.2),
      t,
      l,
    );
  (e.box(`wood`, t, l, 7.4, 8.1, 0.3, 0.95, 1.7, 2.3),
    e.box(`wood`, t, n.grid[0][0], 0.6, 1.3, 0.3, 0.8, 1.9, 2.35));
  for (let r of [0.8, 3.2])
    e.box(
      `wood`,
      t,
      n.grid[0][L(n, r)],
      r - 0.07,
      r + 0.07,
      0,
      1.05,
      3.25,
      3.39,
    );
  (e.box(`wood`, t, n.grid[0][0], 0.7, 3.3, 0.95, 1.05, 3.27, 3.37),
    e.box(`wood`, t, n.grid[0][0], 1, 3, 0, 0.55, 3.55, 4.05));
}
