// assets__homes-styles-VxExOKpz 19 — box
// Lines 6074-6392 of readable/assets__homes-styles-VxExOKpz.pretty.js (statement-aligned).
function Ft() {
  return {
    key: `hFalseFront`,
    name: `Greywater Hardware & Feed`,
    plain: 8874058,
    desc: `Western false-front store: board-and-batten barn behind a tall square false front with a bracketed cornice and painted sign, covered plank boardwalk.`,
    W: 10,
    D: 16,
    style: {
      wall: `hBattenBrown`,
      t: 0.2,
      bay: 3.33,
      floors: [4.2],
      win: {
        w: 1.1,
        h: 1.6,
        sill: 1,
        type: `sash`,
        lites: [2, 2],
        frame: `trimWhite`,
        casing: `trimWhite`,
        rec: 0.08,
        curtains: 0.2,
      },
      store: { frame: `woodDark`, fascia: `woodDark` },
      door: {
        w: 1.3,
        h: 2.4,
        transom: 0.5,
        frame: `woodDark`,
        glazed: !0,
        mat: `woodDoor`,
        rec: 0.2,
      },
      loading: { type: `barn`, mat: `wood`, trim: `trimWhite`, w: 2.6, h: 3.2 },
      base: { mat: `wood`, h: 0.3, out: 0.02 },
      roof: {
        ridge: `z`,
        pitch: 28 * F,
        over: 0.25,
        mat: `corrugated`,
        fascia: `woodDark`,
      },
    },
    front: {
      kinds: (e, t) => (t === 1 ? `door` : `store`),
      extra: T(
        G({
          d: 2.6,
          y: 0.3,
          top: 3.3,
          beam: 0.24,
          rise: 0.3,
          roof: `corrugated`,
          trim: `woodDark`,
          deck: `wood`,
          col: `post`,
          colW: 0.09,
          cols: [0.2, 3.1, 6.9, 9.8],
          brackets: !0,
        }),
        Pt,
      ),
    },
    right: { kinds: (e, t) => (t === 3 ? `loading` : `window`) },
    left: { kinds: (e, t) => (t % 2 ? `window` : `solid`) },
    back: { kinds: (e, t) => (t === 1 ? `loading` : `solid`) },
  };
}
function It(e, t, n) {
  let r = 2.66,
    i = 3.2,
    a = 1.5;
  for (let [o, s, c] of W(n, a, 12.5)) {
    let l = n.grid[0][c];
    (e.box(`wood`, t, l, o, s, i, 4.1, 2.6, r),
      e.box(`signHTrading`, t, l, o, s, 3.2600000000000002, 4.04, r, 2.68, {
        planar: (e, t) => [(e - a) / 11, (t - i - 0.06) / 0.7799999999999995],
      }));
  }
  for (let r of [3, 7, 11])
    O(
      e,
      `wood`,
      t,
      n.grid[0][L(n, r)],
      [r, 3.8999999999999995, 2.58],
      [r, 3.3, 0.6],
      0.07,
    );
  for (let [r, i, a] of [
    [3.2, 5.4, `signHIce`],
    [8.6, 10.8, `signHBait`],
  ]) {
    let o = n.grid[0][L(n, (r + i) / 2)],
      s = 2.34;
    e.box(a, t, o, r, i, 2.3, 2.8, s, 2.3699999999999997, {
      planar: (e, t) => [(e - r) / (i - r), (t - 2.3) / 0.5],
    });
    for (let n of [r + 0.2, i - 0.2])
      e.box(I, t, o, n - 0.01, n + 0.01, 2.8, 2.9, s, 2.36);
  }
  let o = n.grid[0][0],
    s = n.grid[0][4];
  for (let [n, r, i] of [
    [0.6, 0.3, 1.2],
    [1.3, 0.3, 1.3],
    [0.9, 0.85, 1.25],
  ])
    e.box(`wood`, t, o, n - 0.28, n + 0.28, r, r + 0.55, i - 0.28, i + 0.28);
  for (let [n, r] of [
    [12.6, `hEnamelRed`],
    [13.3, `hTrimBlue`],
  ])
    e.add(r, new p(0.3, 0.3, 0.9, 12).translate(n, 0.75, 1.2), t, s);
  e.box(`wood`, t, s, 11, 12.2, 0.72, 0.78, 0.3, 0.7);
  for (let n of [11.1, 12.1])
    e.box(`wood`, t, s, n - 0.04, n + 0.04, 0.3, 0.72, 0.35, 0.65);
}
function Lt() {
  let e = {
      d: 2.4,
      y: 0.3,
      top: 2.9,
      beam: 0.2,
      rise: 0.35,
      roof: `hTinRust`,
      trim: `trimWhite`,
      deck: `wood`,
      col: `post`,
      colW: 0.08,
    },
    t = 0.22;
  return {
    key: `hTradingPost`,
    name: `Pelican Bay Trading Post`,
    plain: 7317439,
    desc: `Island trading post: sky-blue clapboard, rusty tin roof, verandah on posts round three sides, hand-painted signboards, louvred shutters, crates and drums.`,
    W: 14,
    D: 11,
    style: {
      wall: `hLapBlue`,
      t,
      bay: 2.8,
      floors: [3.8],
      win: {
        w: 1.1,
        h: 1.5,
        sill: 0.9,
        type: `grid`,
        lites: [2, 2],
        frame: `trimWhite`,
        shutter: `hShutterYellow`,
        rec: 0.08,
        curtains: 0.3,
      },
      store: { frame: `trimWhite`, fascia: `trimWhite` },
      door: {
        w: 1.4,
        h: 2.4,
        transom: 0.4,
        frame: `trimWhite`,
        mat: `hDoorRed`,
        rec: 0.12,
      },
      base: { mat: `concrete`, h: 0.3, out: 0.02 },
      corners: `trimWhite`,
      roof: {
        ridge: `x`,
        pitch: 22 * F,
        over: 0.5,
        mat: `hTinRust`,
        fascia: `trimWhite`,
      },
    },
    front: {
      kinds: (e, t) => [`window`, `store`, `door`, `store`, `window`][t],
      extra: T(G({ ...e, a0: 0, a1: 14, steps: [7], gap: 2.8 }), It),
    },
    right: {
      kinds: (e, t) => (t === 1 ? `door` : `window`),
      extra: G({ ...e, a0: -2.62, a1: 4 }),
    },
    left: {
      kinds: () => `window`,
      extra: (n, r, i) => G({ ...e, a0: i.L - 4, a1: i.L + t + 2.4 })(n, r, i),
    },
    back: { kinds: (e, t) => (t === 2 ? `door` : `window`) },
    extra: (e, t, n) => {
      let r = -n.W / 2 + 1.2,
        i = -n.D / 2 - 1.2;
      (e.add(`corrugated`, new p(1, 1, 2.2, 16).translate(r, 1.1, i), t, 0),
        e.add(
          `corrugated`,
          R(new a(1.05, 0.3, 16)).translate(r, 2.35, i),
          t,
          0,
        ));
    },
  };
}
function Rt(t, n, r) {
  for (let [e, i, a] of W(r, 0, r.L)) {
    let o = r.grid[0][a];
    (t.box(`aluminum`, n, o, e, i, 3.55, 3.69, 0, 1.4),
      t.box(
        `hEnamelTeal`,
        n,
        o,
        e - (a === 0 ? 0.05 : 0),
        i + (a === r.nb - 1 ? 0.05 : 0),
        3.4499999999999997,
        3.8499999999999996,
        1.3499999999999999,
        1.43,
      ));
  }
  for (let [e, i, a] of [
    [0.4, 7.6, `signHLaundry`],
    [8.4, 15.6, `signHBarberShop`],
  ])
    for (let [o, s, c] of W(r, e, i)) {
      let l = r.grid[0][c];
      (t.box(I, n, l, o, s, 4.55, 5.55, 0, 0.2),
        t.box(a, n, l, o, s, 4.6, 5.5, 0.2, 0.22, {
          planar: (t, n) => [(t - e) / (i - e), (n - 4.6) / 0.9],
        }));
    }
  for (let e of [0, 1])
    for (let i = 0; i < 4; i++) {
      let a = r.grid[0][e],
        o = e * r.bw + 0.75 + i * 0.83;
      for (let [e, r] of [
        [0, -1.5],
        [1, -1.5],
      ])
        (t.box(
          `whiteSpandrel`,
          n,
          a,
          o - 0.36,
          o + 0.36,
          e,
          e + 0.92,
          r - 0.35,
          r + 0.35,
        ),
          t.add(
            `hChrome`,
            new p(0.24, 0.24, 0.03, 16)
              .rotateX(Math.PI / 2)
              .translate(o, e + 0.5, r + 0.36),
            n,
            a,
          ),
          t.add(
            `glass`,
            new p(0.19, 0.19, 0.03, 16)
              .rotateX(Math.PI / 2)
              .translate(o, e + 0.5, r + 0.38),
            n,
            a,
          ));
    }
  let i = r.grid[0][2],
    a = 8.38,
    o = 0.26;
  t.add(`hPole`, new p(0.1, 0.1, 1.3, 16).translate(a, 2.2, o), n, i, {
    planar: (e, t, n) => [
      Math.atan2(e - a, n - o) / (Math.PI * 2) + 0.5,
      t / 0.6,
    ],
  });
  for (let e of [1.5, 2.9])
    t.add(`hChrome`, new p(0.13, 0.13, 0.12, 16).translate(a, e, o), n, i);
  (t.add(`bulb`, new e(0.13, 12, 8).translate(a, 3.05, o), n, i),
    t.box(I, n, i, 8.350000000000001, 8.41, 1.8, 2.6, 0, 0.18));
}
function zt() {
  return {
    key: `hLaundromat`,
    name: `Suds & Shears`,
    plain: 13481100,
    desc: `1960s two-unit shop: cream roman brick, big plate windows, a coin laundry full of washers under blue neon, a barber with a striped pole and red neon.`,
    W: 16,
    D: 12,
    style: {
      wall: `hBrickCream`,
      t: 0.3,
      bay: 4,
      floors: [4.4],
      parapet: 1.4,
      store: { frame: `aluminum`, fascia: `hEnamelTeal` },
      door: {
        w: 1.1,
        h: 2.3,
        transom: 0.4,
        frame: `aluminum`,
        glazed: !0,
        rec: 0.3,
      },
      base: { mat: `granite`, h: 0.45, out: 0.03 },
      cornice: { type: `classic`, mat: `aluminum`, h: 0.15, out: 0.1 },
    },
    front: { kinds: (e, t) => (t === 2 ? `door` : `store`), extra: Rt },
    back: { kinds: (e, t) => (t === 1 || t === 2 ? `door` : `solid`) },
    right: { kinds: () => `solid` },
    left: { kinds: () => `solid` },
    extra: (e, t, n) => {
      (e.box(`aluminum`, t, 0, -4, -2.4, n.H, n.H + 0.9, -2, -0.8),
        e.add(
          `aluminum`,
          new p(0.3, 0.3, 1.2, 12).translate(3, n.H + 0.6, -3),
          t,
          0,
        ));
    },
  };
}
