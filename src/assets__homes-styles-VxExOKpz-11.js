// assets__homes-styles-VxExOKpz 11 — kinds
// Lines 3578-3898 of readable/assets__homes-styles-VxExOKpz.pretty.js (statement-aligned).
function Ke() {
  return {
    key: `hRanch`,
    name: `Sunset Ranch House`,
    plain: 9067072,
    desc: `Mid-century ranch: long low roof with deep eaves, floor-to-ceiling picture window, roman-brick wall and planter, carport on thin steel posts.`,
    W: 18,
    D: 10,
    style: {
      wall: `hRedwood`,
      t: 0.25,
      bay: 3,
      floors: [3],
      win: {
        w: 1.9,
        h: 1,
        sill: 1.3,
        type: `grid`,
        lites: [2, 1],
        frame: `aluminum`,
        rec: 0.06,
        curtains: 0.6,
      },
      curtain: {
        glass: `glassGrey`,
        spandrel: `hRedwood`,
        mullion: `aluminum`,
        module: 1.5,
        sill: 0.35,
        head: 0.35,
        fin: 0.03,
      },
      door: {
        w: 1,
        h: 2.2,
        transom: 0,
        frame: `aluminum`,
        mat: `hDoorOrange`,
        rec: 0.15,
      },
      base: { mat: `concrete`, h: 0.25, out: 0.02 },
      roof: {
        ridge: `x`,
        pitch: 12 * F,
        over: 1.4,
        mat: `hShingleGrey`,
        fascia: `trimWhite`,
        gutter: !0,
      },
    },
    front: {
      kinds: (e, t) =>
        [`window`, `curtain`, `curtain`, `door`, `solid`, `solid`][t],
      extra: We,
    },
    right: {
      kinds: (e, t) => (t === 0 ? `window` : t === 1 ? `door` : `solid`),
      extra: Ge,
    },
    left: { kinds: () => `window` },
    back: {
      kinds: (e, t) => (t === 2 ? `door` : t === 4 ? `curtain` : `window`),
    },
    extra: (e, t, n) =>
      N(e, t, `brickTan`, 2.5, -1.2, n.H - 0.5, n.roofTop + 0.9, 1.6, 0.8),
  };
}
function qe(t, n, r) {
  U(t, `brickRed`, n, r, r.L / 2 - 0.12, r.L / 2 + 0.12, 0, r.H, 0, 0.1);
  for (let [i, a] of [
    [4.05, 2],
    [7.95, 3],
  ]) {
    let o = r.grid[0][a];
    (t.box(I, n, o, i - 0.1, i + 0.1, 1.9, 2.3, 0, 0.12),
      t.add(`bulb`, new e(0.1, 10, 8).translate(i, 2.1, 0.2), n, o),
      t.box(
        I,
        n,
        o,
        i - 0.18 + (a === 2 ? -0.35 : 0.35),
        i + 0.18 + (a === 2 ? -0.35 : 0.35),
        1.2,
        1.5,
        0,
        0.14,
      ));
  }
}
function Je(e, n, r) {
  let i = Math.tan(35 * F),
    a = r.H,
    o = r.roofTop,
    s = a - 0.4 * i + 0.55,
    l = r.D / 2,
    u = new h(
      [
        [-l, a - 0.6],
        [l, a - 0.6],
        [l + 0.4, s],
        [0, o + 0.7],
        [-l - 0.4, s],
      ].map(([e, t]) => new c(e, t)),
    );
  e.add(
    `brickRed`,
    new m(u, { depth: 0.4, bevelEnabled: !1 })
      .rotateY(-Math.PI / 2)
      .translate(0.2, 0, 0),
    n,
    0,
  );
  let d = l + 0.4,
    f = o + 0.7 - s,
    p = Math.hypot(d, f),
    g = Math.atan2(f, d);
  for (let r of [1, -1])
    e.add(
      `stone`,
      new t(0.52, 0.1, p + 0.1)
        .rotateX(r * g)
        .translate(0, (s + o + 0.7) / 2 + 0.05, (r * d) / 2),
      n,
      0,
    );
  N(e, n, `brickRed`, 0, -1.4, a, o + 1.3, 1.4, 0.7);
}
function Ye() {
  return {
    key: `hDuplex`,
    name: `Maple Court Duplex`,
    plain: 9325112,
    desc: `Red-brick side-by-side double house: mirrored front doors under white hoods, stone lintels, party-wall firebreak and shared chimney.`,
    W: 12,
    D: 10,
    style: {
      wall: `brickRed`,
      t: 0.3,
      bay: 2,
      floors: [3.2, 3],
      win: {
        w: 1,
        h: 1.7,
        sill: 0.8,
        type: `sash`,
        lites: [2, 2],
        frame: `trimWhite`,
        header: `stone`,
        headerH: 0.2,
        sillMat: `stone`,
        rec: 0.12,
        curtains: 0.6,
      },
      door: {
        w: 1,
        h: 2.2,
        transom: 0.35,
        frame: `trimWhite`,
        mat: `hDoorGreen`,
        hood: `trimWhite`,
        rec: 0.2,
      },
      base: { mat: `concrete`, h: 0.4, out: 0.03 },
      belt: { mat: `stone`, h: 0.18, out: 0.05 },
      roof: {
        ridge: `x`,
        pitch: 35 * F,
        over: 0.4,
        mat: `shingle`,
        fascia: `trimWhite`,
        gutter: !0,
      },
    },
    front: {
      kinds: (e, t) => (e === 0 && (t === 2 || t === 3) ? `door` : `window`),
      extra: qe,
    },
    back: {
      kinds: (e, t) => (e === 0 && (t === 1 || t === 4) ? `door` : `window`),
    },
    right: { kinds: (e, t) => (t === 1 ? `solid` : `window`) },
    left: { kinds: (e, t) => (t === 1 ? `solid` : `window`) },
    extra: Je,
  };
}
function Xe(e, t, n) {
  let r = n.L / 2;
  (U(e, `hPine`, t, n, r - 1, r - 0.9, 0, 2.35, 0, 0.12),
    U(e, `hPine`, t, n, r + 0.9, r + 1, 0, 2.35, 0, 0.12),
    U(e, `hPine`, t, n, r - 1, r + 1, 2.3, 2.42, 0, 0.12),
    G({
      noRoof: !0,
      a0: -1,
      a1: n.L + 1,
      d: 3,
      y: 0.35,
      trim: `hPine`,
      deck: `wood`,
      col: `post`,
      colW: 0.07,
      rail: !0,
      steps: [r],
      stepW: 1.4,
      gap: 2.2,
    })(e, t, n));
}
function Ze() {
  let e = 60 * F;
  return {
    key: `hAframe`,
    name: `Cedar Hollow A-Frame`,
    plain: 7035464,
    desc: `A-frame cabin: 60° shingle roof sweeping almost to the ground, fully glazed pine-framed gable, deck with railings and a stovepipe.`,
    W: 9,
    D: 10,
    style: {
      wall: `hPine`,
      t: 0.2,
      bay: 3,
      floors: [1],
      roof: {
        ridge: `z`,
        pitch: e,
        over: 0.45,
        mat: `hShingleBrown`,
        fascia: `hPine`,
      },
    },
    front: {
      kinds: () => `solid`,
      gableDoor: { w: 1.8, h: 2.3 },
      extra: T(Re(e, { rows: [2.6, 4.6, 6.3], door: { w: 1.8, h: 2.3 } }), Xe),
    },
    back: {
      kinds: () => `solid`,
      gableDoor: { w: 1.6, h: 2.3 },
      extra: (e, t, n) => {
        let r = n.gableCell,
          i = n.L / 2,
          a = n.H + 2.3,
          o = a + 1.1;
        e.box(`glassGrey`, t, r, i - 0.6, i + 0.6, a, o, 0.01, 0.03);
        for (let [n, s, c, l] of [
          [i - 0.7, i - 0.6, a, o],
          [i + 0.6, i + 0.7, a, o],
          [i - 0.7, i + 0.7, a - 0.1, a],
          [i - 0.7, i + 0.7, o, o + 0.1],
          [i - 0.03, i + 0.03, a, o],
        ])
          e.box(`hPine`, t, r, n, s, c, l, 0, 0.1);
      },
    },
    right: { kinds: () => `solid` },
    left: { kinds: () => `solid` },
    extra: (e, t, n) => {
      (e.add(`hZinc`, new p(0.12, 0.12, 2.6, 10).translate(2, 6.3, -1.5), t, 0),
        e.add(`hZinc`, new a(0.26, 0.3, 10).translate(2, 7.75, -1.5), t, 0));
    },
  };
}
var Qe = (e) => (n, r, i) => {
  let a = i.L / 2,
    o = i.H,
    s = e.hw,
    l = e.gh,
    u = e.depth,
    d = i.grid[i.top][L(i, a)],
    f = 0.3,
    p = Math.atan2(l, s),
    g = new h(
      [
        [a - s, o],
        [a + s, o],
        [a, o + l],
      ].map(([e, t]) => new c(e, t)),
    );
  n.add(
    e.wall,
    new m(g, { depth: u, bevelEnabled: !1 }).translate(0, 0, -u),
    r,
    d,
  );
  for (let i of [-1, 1]) {
    let c = [a + i * (s + f), o - f * Math.tan(p)],
      m = [a, o + l],
      h = Math.hypot(m[0] - c[0], m[1] - c[1]) + 0.08,
      g = Math.atan2(m[1] - c[1], m[0] - c[0]),
      _ = [-Math.sin(g), Math.cos(g)],
      v = [(c[0] + m[0]) / 2, (c[1] + m[1]) / 2],
      y = i < 0 ? _ : [-_[0], -_[1]];
    (n.add(
      e.roof,
      new t(h, 0.1, u + 0.35)
        .rotateZ(g)
        .translate(v[0] + y[0] * 0.06, v[1] + y[1] * 0.06, (0.35 - u) / 2),
      r,
      d,
    ),
      n.add(
        e.trim,
        new t(h, 0.24, 0.06)
          .rotateZ(g)
          .translate(v[0] - y[0] * 0.05, v[1] - y[1] * 0.05, 0.36),
        r,
        d,
      ));
  }
  let _ = o + 0.35,
    v = o + 1.35;
  n.box(`glass`, r, d, a - 0.34, a + 0.34, _, v, 0.01, 0.02);
  for (let [t, i, o, s] of [
    [a - 0.44, a - 0.34, _, v],
    [a + 0.34, a + 0.44, _, v],
    [a - 0.5, a + 0.5, _ - 0.1, _],
    [a - 0.03, a + 0.03, _, v],
    [a - 0.34, a + 0.34, v - 0.03, v + 0.03],
  ])
    n.box(e.trim, r, d, t, i, o, s, 0, 0.07);
  for (let t of [-1, 1])
    k(n, e.trim, r, d, a + t * 0.44, v, a, v + 0.5, 0.1, 0, 0.07);
};
