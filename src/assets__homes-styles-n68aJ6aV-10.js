// assets__homes-styles-n68aJ6aV 10 — box
// Lines 3285-3577 of readable/assets__homes-styles-n68aJ6aV.pretty.js (statement-aligned).
var Ve = (e) => (t, n, r) => {
    let i = r.gableCell,
      a = r.L,
      o = r.H,
      s = Math.tan(e),
      l = (a / 2) * s,
      u = o + 0.25,
      d = a / 2 - 0.4 / s,
      f = new h(
        [
          [a / 2 - d, u],
          [a / 2 + d, u],
          [a / 2, o + l - 0.2],
        ].map(([e, t]) => new c(e, t)),
      );
    (t.add(
      `hFishScale`,
      new m(f, { depth: 0.02, bevelEnabled: !1 }).translate(0, 0, 0.005),
      n,
      i,
    ),
      t.box(`trimCream`, n, i, 0, a, o, o + 0.25, 0, 0.07));
    let p = a / 2 - 0.42,
      g = a / 2 + 0.42,
      _ = o + 1.4,
      v = o + 2.6;
    t.box(`glass`, n, i, p, g, _, v, 0.03, 0.04);
    for (let [e, r, o, s] of [
      [p - 0.1, p, _, v],
      [g, g + 0.1, _, v],
      [p - 0.1, g + 0.1, v, v + 0.12],
      [p - 0.14, g + 0.14, _ - 0.1, _],
      [a / 2 - 0.03, a / 2 + 0.03, _, v],
    ])
      t.box(`hTrimWine`, n, i, e, r, o, s, 0.02, 0.1);
    for (let e of [-1, 1])
      k(
        t,
        `hTrimWine`,
        n,
        i,
        a / 2 + e * 0.52,
        v + 0.12,
        a / 2,
        v + 0.55,
        0.1,
        0.02,
        0.1,
      );
  },
  He = (n) => (i, a, o) => {
    let { u: s, z: c, r: l } = n,
      u = o.H + (n.lift ?? 1),
      d = l * Math.cos(Math.PI / 16),
      f = (e, t, n, r, o) =>
        i.add(e, t.translate(0, 0, r).rotateY(n).translate(s, 0, c), a, o);
    for (let t = 0; t <= o.top; t++) {
      let p = o.ys[t],
        m = t === o.top ? u : o.ys[t + 1],
        h = o.grid[t][L(o, s)];
      (i.add(n.wall, new r(l, l, m - p, 16).translate(s, (p + m) / 2, c), a, h),
        t === 0
          ? i.add(
              n.base,
              new r(l + 0.04, l + 0.04, 0.6, 16).translate(s, 0.3, c),
              a,
              h,
            )
          : i.add(
              n.trim,
              new r(l + 0.05, l + 0.05, 0.24, 16).translate(s, p, c),
              a,
              h,
            ));
      for (let r of n.angles) {
        let i = p + (t === 0 ? 0.95 : 0.8),
          a = i + 1.75,
          o = (i + a) / 2;
        f(`glass`, new e(0.5, a - i, 0.02).translate(0, o, 0), r, d + 0.01, h);
        for (let t of [-1, 1])
          f(
            n.trim,
            new e(0.08, a - i + 0.1, 0.08).translate(t * 0.28, o, 0),
            r,
            d + 0.02,
            h,
          );
        (f(
          n.trim,
          new e(0.64, 0.1, 0.12).translate(0, i - 0.05, 0),
          r,
          d + 0.03,
          h,
        ),
          f(
            n.frame,
            new e(0.64, 0.16, 0.1).translate(0, a + 0.07, 0),
            r,
            d + 0.03,
            h,
          ),
          f(
            n.trim,
            new e(0.5, 0.05, 0.05).translate(0, i + (a - i) * 0.55, 0),
            r,
            d + 0.02,
            h,
          ));
      }
    }
    let p = o.grid[o.top][L(o, s)],
      m = n.capH ?? 4.2;
    (i.add(
      n.trim,
      new r(l + 0.3, l + 0.3, 0.16, 16).translate(s, u + 0.08, c),
      a,
      p,
    ),
      i.add(
        n.cap,
        new t(l + 0.32, m, 16).translate(s, u + 0.16 + m / 2, c),
        a,
        p,
      ),
      i.add(I, new r(0.03, 0.06, 1.1, 6).translate(s, u + m + 0.6, c), a, p),
      i.add(`brass`, new g(0.1, 8, 6).translate(s, u + m + 0.4, c), a, p));
  };
function Ue() {
  let e = 50 * F,
    t = (22.5 * Math.PI) / 180,
    n = {
      d: 2.4,
      y: 0.6,
      top: 2.8,
      beam: 0.25,
      rise: 0.5,
      roof: `hShingleRed`,
      trim: `trimCream`,
      col: `turned`,
      rail: !0,
      fret: !0,
      brackets: !0,
      skirt: `hLattice`,
    };
  return {
    key: `hQueenAnne`,
    name: `Holloway House`,
    plain: 7310468,
    desc: `Queen Anne Victorian: teal clapboard with wine and cream trim, fish-scale gable, corner turret with a witch’s-hat roof, wraparound spindle porch.`,
    W: 11,
    D: 12,
    style: {
      wall: `hLapTeal`,
      t: 0.22,
      bay: 2.75,
      floors: [3.4, 3.2],
      win: {
        w: 0.95,
        h: 2,
        sill: 0.8,
        type: `sash`,
        lites: [1, 1],
        frame: `trimCream`,
        casing: `hTrimWine`,
        rec: 0.08,
        curtains: 0.6,
      },
      door: {
        w: 1.1,
        h: 2.3,
        transom: 0.45,
        frame: `trimCream`,
        glazed: !0,
        mat: `hDoorRed`,
        rec: 0.12,
      },
      base: { mat: `brickRed`, h: 0.6, out: 0.03 },
      belt: { mat: `trimCream`, h: 0.25, out: 0.05 },
      corners: `hTrimWine`,
      eaveTrim: `trimCream`,
      roof: {
        ridge: `z`,
        pitch: e,
        over: 0.4,
        mat: `hShingleRed`,
        fascia: `trimCream`,
      },
    },
    front: {
      kinds: (e, t) =>
        t === 0 ? `solid` : e === 0 && t === 2 ? `door` : `window`,
      extra: T(
        G({
          ...n,
          a0: 2.3,
          a1: 11,
          cols: [2.5, 5.6, 8.3, 10.8],
          steps: [6.875],
          railExtra: [13.4 - 0.2],
        }),
        Ve(e),
        He({
          u: 0.4,
          z: 0.4,
          r: 1.6,
          wall: `hLapTeal`,
          trim: `trimCream`,
          frame: `hTrimWine`,
          base: `brickRed`,
          cap: `hShingleRed`,
          capH: 4.4,
          angles: [-5.5, -3.5, -1.5, 0.5, 2.5].map(
            (e) => (e + 0.5) * t - t / 2,
          ),
        }),
      ),
    },
    right: {
      kinds: () => `window`,
      extra: G({ ...n, a0: -2.62, a1: 5.8, cols: [-2.42, 1, 3.4, 5.6] }),
    },
    left: { kinds: (e, t, n) => (t === n - 1 ? `solid` : `window`) },
    back: { kinds: (e, t) => (e === 0 && t === 1 ? `door` : `window`) },
    extra: (e, t, n) =>
      N(e, t, `brickRed`, -2.4, -3.5, n.H - 0.5, n.roofTop + 0.8, 0.8, 0.6),
  };
}
function We(e, t, n) {
  for (let r of [4, 5])
    e.box(
      `brickTan`,
      t,
      n.grid[0][r],
      r * n.bw,
      (r + 1) * n.bw + (r === 5 ? 0.12 : 0),
      0,
      n.H,
      0,
      0.12,
    );
  let r = 0.3,
    i = 9.3;
  for (let [a, o, s] of W(n, r, i)) {
    let c = n.grid[0][s];
    (e.box(`brickTan`, t, c, a, o, 0, 0.62, 0.95, 1.25),
      e.box(
        `concrete`,
        t,
        c,
        a - (a === r ? 0.03 : 0),
        o + (o === i ? 0.03 : 0),
        0.62,
        0.68,
        0.92,
        1.28,
      ),
      e.box(`hGeranium`, t, c, a, o, 0.1, 0.62, 0.02, 0.95));
  }
  for (let i of [r, 9])
    e.box(`brickTan`, t, n.grid[0][L(n, i)], i, i + 0.3, 0, 0.62, 0, 0.95);
  let a = n.grid[0][3];
  (e.box(`glassGrey`, t, a, 11.25, 11.6, 0.15, 2.2, 0.01, 0.03),
    e.box(`aluminum`, t, a, 11.2, 11.65, 0.1, 2.25, -0.01, 0.02),
    e.add(`bulb`, new g(0.14, 10, 8).translate(9.6, 2.1, 0.22), t, a),
    e.box(`aluminum`, t, a, 9.57, 9.63, 2.1, 2.14, 0, 0.2));
}
function Ge(e, t, n) {
  let r = 5.8,
    i = 2.6;
  for (let [a, o, s] of W(n, -0.45, n.L + 0.45)) {
    let c = n.grid[0][s];
    (e.box(`trimWhite`, t, c, a, o, i, 2.74, 0, r),
      e.box(`trimWhite`, t, c, a, o, 2.48, 2.8200000000000003, 5.74, r),
      e.box(`concrete`, t, c, a, o, 0, 0.05, 0, r));
  }
  for (let [i, a] of [
    [-0.45, 0.06],
    [n.L + 0.39, 0.06],
  ])
    e.box(
      `trimWhite`,
      t,
      n.grid[0][L(n, i)],
      i,
      i + a,
      2.48,
      2.8200000000000003,
      0,
      r,
    );
  for (let r of [-0.2, n.L / 2, n.L + 0.2])
    e.box(I, t, n.grid[0][L(n, r)], r - 0.05, r + 0.05, 0.05, i, 5.45, 5.55);
}
