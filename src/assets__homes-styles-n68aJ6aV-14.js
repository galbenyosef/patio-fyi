// assets__homes-styles-n68aJ6aV 14 — add
// Lines 4454-4802 of readable/assets__homes-styles-n68aJ6aV.pretty.js (statement-aligned).
function ct(e, t, n) {
  let i = 2.2,
    a = 7.8;
  G({
    noRoof: !0,
    a0: -0.3,
    a1: n.L + 0.3,
    d: i,
    y: 0.02,
    trim: `wood`,
    deck: `wood`,
    col: `post`,
    colW: 0.07,
    rail: !0,
    railH: 0.85,
    gap: 2.3,
    steps: [a],
    stepW: 1,
  })(e, t, n);
  for (let i of [-0.2, 3, 6, n.L + 0.2])
    e.add(
      `timber`,
      new r(0.12, 0.14, 2.3, 8).translate(i, -1.12, 2),
      t,
      n.grid[0][L(n, i)],
    );
  let o = n.grid[0][L(n, a)],
    s = 2.2 / 11,
    c = 0.26;
  for (let n of [-0.5, 0.5])
    (O(
      e,
      `wood`,
      t,
      o,
      [a + n, -0.05, i],
      [a + n, -2.2, 5.0600000000000005],
      0.08,
    ),
      O(
        e,
        `wood`,
        t,
        o,
        [a + n, 0.85, i],
        [a + n, -1.3, 5.0600000000000005],
        0.05,
      ),
      e.box(
        `wood`,
        t,
        o,
        a + n - 0.04,
        a + n + 0.04,
        -2.2,
        -1.3,
        5.010000000000001,
        5.090000000000001,
      ));
  for (let n = 1; n <= 11; n++)
    e.box(
      `wood`,
      t,
      o,
      7.34,
      8.26,
      -n * s - 0.04,
      -n * s,
      i + (n - 1) * c,
      i + n * c,
    );
}
function lt(e, t, n) {
  for (let n of [-4.3, -2.2, 2.2, 4.3])
    for (let i of [-3.8, 0, 3.8])
      e.add(`timber`, new r(0.14, 0.17, 2.3, 8).translate(n, 1.1, i), t, 0);
  for (let n of [-3.8, 3.8])
    for (let [r, i] of [
      [-4.3, -2.2],
      [2.2, 4.3],
    ])
      O(e, `wood`, t, 0, [r, 0.3, n], [i, 1.95, n], 0.08);
  for (let n of [-4.3, 4.3])
    O(e, `wood`, t, 0, [n, 0.3, -3.8], [n, 1.95, 0], 0.08);
  e.add(`tank`, new r(0.35, 0.28, 0.7, 12).translate(-3.2, 0.35, 5.2), t, 0);
}
function ut() {
  let e = {
      ridge: `x`,
      pitch: 42 * F,
      over: 0.75,
      mat: `hThatch`,
      fascia: `wood`,
    },
    t = { kinds: () => `solid`, extra: null };
  return {
    key: `hStilt`,
    name: `River Stilt House`,
    plain: 10125400,
    desc: `Jungle river house: woven bamboo walls on a plank floor two metres up on timber piles, steep deep thatch, open shuttered windows, stair to a deck.`,
    W: 9,
    D: 8,
    style: {
      wall: `hBamboo`,
      t: 0.15,
      bay: 3,
      floors: [2.2],
      win: {
        w: 1.3,
        h: 1,
        sill: 0.9,
        type: `grid`,
        lites: [1, 1],
        frame: `wood`,
        shutter: `wood`,
        open: !0,
        rec: 0.05,
      },
      door: { w: 1, h: 2, transom: 0, frame: `wood`, mat: `wood`, rec: 0.08 },
      corners: `timber`,
    },
    tiers: [
      {
        W: 2.6,
        D: 2.6,
        floors: [2.2],
        style: { wall: `woodDark`, corners: null },
        front: t,
        back: t,
        left: t,
        right: t,
      },
      { floors: [3.1], soffit: !0, style: { roof: e } },
    ],
    front: { kinds: (e, t) => (t === 1 ? `door` : `window`), extra: ct },
    back: { kinds: () => `window` },
    right: { kinds: () => `window` },
    left: { kinds: () => `window` },
    extra: (t, n, r) => {
      (lt(t, n, r), Z(t, n, r, e, `hThatch`, 0.02, 0.32, -0.2));
    },
  };
}
var Q =
  (e = {}) =>
  (t, n, i) => {
    let a = i.t,
      o = i.H + 0.6,
      s = `hStuccoAdobe`;
    for (let e = 0; e < i.nb; e++) {
      let c = e * i.bw,
        l = c + i.bw;
      t.add(
        s,
        new r(a / 2, a / 2, l - c, 10)
          .rotateZ(Math.PI / 2)
          .translate((c + l) / 2, o, -a / 2),
        n,
        i.grid[i.top][e],
      );
    }
    if (e.corners)
      for (let e of [0, i.L])
        t.add(
          s,
          new g(a / 2 + 0.01, 10, 8).translate(e, o, -a / 2),
          n,
          i.grid[i.top][L(i, e)],
        );
    if (e.vigas)
      for (let e = 0.6; e < i.L - 0.3; e += 0.85)
        t.add(
          `woodDark`,
          new r(0.1, 0.11, 0.6, 8)
            .rotateX(Math.PI / 2)
            .translate(e, i.H - 0.25, 0.2),
          n,
          i.grid[i.top][L(i, e)],
        );
    for (let r of e.canales || []) {
      let e = i.grid[i.top][L(i, r)];
      t.box(
        `wood`,
        n,
        e,
        r - 0.14,
        r + 0.14,
        i.H + 0.02,
        i.H + 0.08,
        -0.2,
        0.85,
      );
      for (let a of [-1, 1])
        t.box(
          `wood`,
          n,
          e,
          r + a * 0.14 - 0.03,
          r + a * 0.14 + 0.03,
          i.H + 0.02,
          i.H + 0.24,
          -0.2,
          0.85,
        );
    }
    if (e.hump) {
      let e = i.L / 2,
        o = i.grid[i.top][L(i, e)];
      (t.box(s, n, o, e - 1.3, e + 1.3, i.H + 0.6, i.H + 1.15, -a, 0),
        t.add(
          s,
          new r(a / 2, a / 2, 2.6, 10)
            .rotateZ(Math.PI / 2)
            .translate(e, i.H + 1.15, -a / 2),
          n,
          o,
        ));
      for (let r of [-1, 1])
        t.add(
          s,
          new g(a / 2 + 0.01, 10, 8).translate(e + r * 1.3, i.H + 1.15, -a / 2),
          n,
          o,
        );
    }
  };
function dt(e, n, i) {
  let a = i.grid[0][1];
  for (let i of [3.25, 5])
    (e.add(
      `hTrimRed`,
      new r(0.07, 0.11, 0.95, 7).translate(i, 1.95, 0.14),
      n,
      a,
    ),
      e.add(`hTrimOlive`, new t(0.08, 0.16, 6).translate(i, 2.5, 0.14), n, a));
}
function ft(e, t, n) {
  let r = n.grid[0][1],
    i = n.H + 0.9;
  for (let n of [-0.25, 0.25])
    O(e, `wood`, t, r, [4 + n, 0, 1], [4 + n, i, 0.08], 0.07);
  for (let n = 0.35; n < i - 0.1; n += 0.35) {
    let a = 1 * (1 - n / i) + (n / i) * 0.08;
    e.box(`wood`, t, r, 3.75, 4.25, n - 0.025, n + 0.025, a - 0.03, a + 0.03);
  }
}
function pt(e, t, n) {
  let i = -n.W / 2 - 1.8;
  (e.box(`hStuccoAdobe`, t, 0, i - 0.8, i + 0.8, 0, 0.6, 0.3999999999999999, 2),
    e.add(
      `hStuccoAdobe`,
      new g(0.78, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2).translate(i, 0.6, 1.2),
      t,
      0,
    ),
    e.box(
      `hRubber`,
      t,
      0,
      i - 0.22,
      i + 0.22,
      0.62,
      1,
      1.7999999999999998,
      1.98,
    ),
    e.add(
      `hStuccoAdobe`,
      new r(0.1, 0.12, 0.3, 8).translate(i + 0.25, 1.4, 1),
      t,
      0,
    ));
}
function mt() {
  return {
    key: `hAdobe`,
    name: `Casa del Sol`,
    plain: 12158045,
    desc: `Desert adobe: thick earth walls with rounded parapets, protruding vigas and canales, deep small windows, blue door, portal, horno oven, ladder.`,
    W: 11,
    D: 9,
    style: {
      wall: `hStuccoAdobe`,
      t: 0.5,
      bay: 2.75,
      floors: [3.2],
      parapet: 0.6,
      win: {
        w: 0.8,
        h: 1,
        sill: 1.1,
        type: `grid`,
        lites: [2, 2],
        frame: `hTrimBlue`,
        header: `woodDark`,
        headerH: 0.18,
        rec: 0.38,
        curtains: 0.5,
      },
      door: {
        w: 1,
        h: 2.1,
        transom: 0,
        frame: `woodDark`,
        mat: `hDoorBlue`,
        rec: 0.35,
        step: `hStuccoAdobe`,
      },
    },
    front: {
      kinds: (e, t) => (t === 1 ? `door` : `window`),
      extra: T(
        Q({ corners: !0, hump: !0, canales: [0.7] }),
        G({
          a0: 2.3,
          a1: 11.3,
          d: 2.4,
          y: 0.12,
          top: 2.55,
          beam: 0.3,
          rise: 0.05,
          roof: `hStuccoAdobe`,
          trim: `woodDark`,
          ceil: `wood`,
          deck: `stone`,
          col: `post`,
          colW: 0.12,
          brackets: !0,
          gap: 2.8,
        }),
        dt,
      ),
    },
    back: {
      kinds: (e, t) => (t === 2 ? `door` : `window`),
      extra: Q({ corners: !0, vigas: !0, canales: [2, 9] }),
    },
    right: {
      kinds: (e, t) => (t === 1 ? `solid` : `window`),
      extra: Q({ vigas: !0 }),
    },
    left: {
      kinds: (e, t) => (t === 1 ? `solid` : `window`),
      extra: T(Q({ canales: [6.5] }), ft),
    },
    extra: pt,
  };
}
