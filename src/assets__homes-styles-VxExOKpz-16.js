// assets__homes-styles-VxExOKpz 16 — box
// Lines 5122-5433 of readable/assets__homes-styles-VxExOKpz.pretty.js (statement-aligned).
function yt() {
  return {
    key: `hVilla`,
    name: `Villa Serena`,
    plain: 15855076,
    desc: `Mediterranean villa: white stucco, terracotta hip roof, three-arched loggia with a balustraded terrace above, arched windows with sage shutters.`,
    W: 14,
    D: 11,
    style: {
      wall: `hStuccoWhite`,
      t: 0.35,
      bay: 2.8,
      floors: [3.6, 3.2],
      win: {
        w: 1.1,
        h: 1.9,
        sill: 0.7,
        type: `grid`,
        lites: [2, 3],
        frame: `woodDark`,
        arch: 0.55,
        shutter: `hShutterSage`,
        sillMat: `stone`,
        rec: 0.15,
        curtains: 0.5,
      },
      door: {
        w: 1.4,
        h: 2.5,
        transom: 0,
        frame: `stone`,
        mat: `woodDoor`,
        rec: 0.3,
        step: `stone`,
      },
      base: { mat: `stone`, h: 0.35, out: 0.03 },
      roof: X,
    },
    front: {
      kinds: (e, t) => (e === 0 && t === 2 ? `door` : `window`),
      extra: vt({ b0: 1, b1: 3, d: 2.4, mat: `hStuccoWhite`, trim: `stone` }),
    },
    back: { kinds: (e, t) => (e === 0 && t === 2 ? `door` : `window`) },
    right: { kinds: () => `window` },
    left: { kinds: (e, t) => (e === 0 && t === 1 ? `solid` : `window`) },
    extra: (e, t, n) => {
      (Le(e, t, n, `hTerraTile`, 26 * F, 0.7, `hTerraTile`),
        N(e, t, `hStuccoWhite`, 4, -1.5, n.H, n.H + 3.6, 0.9, 0.7),
        e.add(
          `hTerraTile`,
          R(
            new a(0.75, 0.45, 4)
              .rotateY(Math.PI / 4)
              .translate(4, n.H + 4.1, -1.5),
          ),
          t,
          0,
        ));
    },
  };
}
function bt(e, t, n) {
  let r = n.grid[0][0],
    i = n.bw / 2;
  for (let n = 0; n < 3; n++)
    e.box(
      `concrete`,
      t,
      r,
      i - 0.8,
      i + 0.8,
      0.14 * n,
      0.14 * (n + 1),
      0.4 + (2 - n) * 0.35 - 0.35,
      0.4 + (2 - n) * 0.35,
    );
  (e.box(`hCladCedar`, t, r, 0.25, 0.75, 0, 0.5, 0.2, 2.6),
    e.box(`hGeranium`, t, r, 0.3, 0.7, 0.5, 0.62, 0.25, 2.55),
    e.box(`aluminum`, t, r, i + 0.75, i + 0.95, 1.4, 1.62, 0, 0.03));
  for (let [r, i] of [
    [1.2, 0],
    [5.6, 1],
  ])
    e.box(`bulb`, t, n.grid[1][i], r - 0.12, r + 0.12, 5.66, 5.7, 0.5, 0.74);
}
function xt() {
  return {
    key: `hGlassTown`,
    name: `Harbor Row Townhouse`,
    plain: 3026996,
    desc: `Modern townhouse: charcoal board cladding, full-height glazing, a cedar-clad top floor cantilevered over the entry, flat roof.`,
    W: 7.5,
    D: 12,
    style: {
      wall: `hCladDark`,
      t: 0.25,
      bay: 3.75,
      floors: [3.2, 3.1],
      parapet: 0,
      curtain: {
        glass: `glassGrey`,
        spandrel: `hCladDark`,
        mullion: I,
        module: 1.25,
        sill: 0.1,
        head: 0.35,
        fin: 0.03,
      },
      win: {
        w: 0.7,
        h: 2.3,
        sill: 0.4,
        type: `grid`,
        lites: [1, 1],
        frame: I,
        rec: 0.05,
        curtains: 0.3,
      },
      door: {
        w: 1.1,
        h: 2.4,
        transom: 0,
        frame: I,
        mat: `hCladCedar`,
        rec: 0.6,
        step: `concrete`,
      },
      loading: { type: `rollup`, dock: !1, w: 2.8, h: 2.5 },
      roof: {
        ridge: `x`,
        pitch: 0.01,
        over: 0,
        mat: `floorSlab`,
        fascia: `hCladDark`,
      },
    },
    tiers: [
      {},
      {
        D: 13.5,
        dz: 0.75,
        floors: [3.2],
        soffit: !0,
        style: { wall: `hCladCedar`, parapet: 0.35, roof: null },
        front: {
          extra: (e, t, n) => {
            for (let r of [0.1, n.L - 0.3])
              e.box(
                `hCladDark`,
                t,
                n.grid[0][L(n, r)],
                r,
                r + 0.2,
                0,
                n.H + 0.35,
                0,
                0.3,
              );
          },
        },
      },
    ],
    front: {
      kinds: (e, t) => (e === 0 ? (t === 0 ? `door` : `loading`) : `curtain`),
      extra: bt,
    },
    back: { kinds: (e) => (e === 1 ? `solid` : `curtain`) },
    right: { kinds: (e, t) => (t === 1 ? `window` : `solid`) },
    left: { kinds: () => `solid` },
  };
}
function St(e, t, n) {
  for (let r = 1; r <= n.top; r++)
    for (let i of [1, 2, 5, 6]) {
      let a = n.grid[r][i],
        o = n.ys[r],
        s = i * n.bw + 0.12,
        c = (i + 1) * n.bw - 0.12;
      e.box(`hConcreteWhite`, t, a, s, c, o - 0.2, o + 1.1, 1.2, 1.3);
      for (let n of [s, c - 0.1])
        e.box(`hConcreteWhite`, t, a, n, n + 0.1, o, o + 1.1, 0, 1.2);
      e.box(
        `aluminum`,
        t,
        a,
        s,
        c,
        o + 1.1,
        o + 1.14,
        1.1800000000000002,
        1.32,
      );
    }
}
function Ct() {
  let e = [3.6, 6.5, 9.4, 12.3],
    t = (t) =>
      M(
        e.map((e) => [`hConcreteWhite`, e - 0.12, e + 0.12, 0.04]),
        t,
      );
  return {
    key: `hSeventies`,
    name: `Parkview Apartments`,
    plain: 7095857,
    desc: `1970s apartment block: brown brick, stacked concrete balconies with solid fronts, exposed slab edges, bronze-glazed lobby, rooftop stair house.`,
    W: 20,
    D: 13,
    style: {
      wall: `hBrick70s`,
      t: 0.35,
      bay: 2.5,
      floors: [3.6, ...ve(4, 2.9)],
      parapet: 0.8,
      parapetMat: `hConcreteWhite`,
      win: {
        w: 1.5,
        h: 1.4,
        sill: 0.9,
        type: `grid`,
        lites: [2, 1],
        frame: `aluminum`,
        sillMat: `hConcreteWhite`,
        rec: 0.1,
        curtains: 0.7,
      },
      win0: {
        w: 1.4,
        h: 1.2,
        sill: 1.6,
        type: `grid`,
        lites: [2, 1],
        frame: `aluminum`,
        rec: 0.1,
        curtains: 0.5,
      },
      balcony: {
        w: 1.8,
        h: 2.3,
        depth: 1.3,
        slab: `hConcreteWhite`,
        rail: `glass`,
      },
      lobby: {
        rec: 0.8,
        frame: `bronze`,
        glass: `glassBronze`,
        head: 0.8,
        headMat: `hConcreteWhite`,
        column: `hConcreteWhite`,
      },
      door: { w: 1, h: 2.2, transom: 0, frame: `aluminum`, glazed: !0 },
      base: { mat: `hConcreteWhite`, h: 0.5, out: 0.03 },
    },
    front: {
      kinds: (e, t) =>
        e === 0
          ? t === 3
            ? `lobbyDoor`
            : t === 4
              ? `lobby`
              : `window`
          : t % 4 == 1 || t % 4 == 2
            ? `balcony`
            : `window`,
      extra: T(St, t(!1)),
    },
    back: {
      kinds: (e, t) => (e === 0 && t === 4 ? `door` : `window`),
      extra: t(!1),
    },
    right: { kinds: (e, t) => (t === 2 ? `window` : `solid`), extra: t(!0) },
    left: { kinds: (e, t) => (t === 2 ? `window` : `solid`), extra: t(!0) },
    extra: (e, t, n) => {
      (e.box(`hBrick70s`, t, 0, -7, -4, n.H, n.H + 2.8, -3, 0.5),
        e.box(
          `hConcreteWhite`,
          t,
          0,
          -7.1,
          -3.9,
          n.H + 2.8,
          n.H + 2.95,
          -3.1,
          0.6,
        ));
      for (let [r, i] of [
        [3, -2],
        [6, 1.5],
      ]) {
        e.add(
          `aluminum`,
          new p(0.03, 0.04, 3, 6).translate(r, n.H + 1.5, i),
          t,
          0,
        );
        for (let a = 0; a < 4; a++)
          e.box(
            `aluminum`,
            t,
            0,
            r - 0.5 + a * 0.08,
            r + 0.5 - a * 0.08,
            n.H + 2.2 + a * 0.22,
            n.H + 2.23 + a * 0.22,
            i - 0.015,
            i + 0.015,
          );
      }
    },
  };
}
