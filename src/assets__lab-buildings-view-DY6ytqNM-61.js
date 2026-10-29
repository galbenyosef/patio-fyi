// assets__lab-buildings-view-DY6ytqNM 61 — box
// Lines 18892-19241 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function Ja() {
  let e = {
      ridge: `x`,
      pitch: 48 * Si,
      over: 0.7,
      mat: `alThatch`,
      fascia: `alThatch`,
    },
    t = {
      win: {
        w: 0.9,
        h: 1.2,
        sill: 0.9,
        type: `grid`,
        lites: [2, 3],
        frame: `trimWhite`,
        rec: 0.1,
        curtains: 0.7,
      },
      door: {
        w: 1.1,
        h: 2.1,
        transom: 0.3,
        frame: `alGreen`,
        mat: `alGreen`,
        rec: 0.15,
      },
    },
    n = (e, t) => (t === 4 ? `door` : `window`),
    r = (e, t) => (t === 1 ? `window` : `solid`);
  return (
    qi(`alSignKro`, `KRO`, {
      bg: 15921386,
      fg: 1974049,
      border: 1974049,
      aspect: 0.32 / 1.1,
      width: 512,
      size: 0.66,
      spacing: 0.4,
    }),
    qi(
      `alSignHjort`,
      `DEN HVIDE
HJORT`,
      { bg: 3103292, fg: 15921386, aspect: 0.75 / 0.8, width: 512, size: 0.5 },
    ),
    {
      key: `alKro`,
      name: `Den Hvide Hjort Kro`,
      plain: 14266974,
      desc: `Danish country inn: one long storey of ochre render in black half-timbering, deep thatched roof with crossed ridge riders and a snow cap, thatched entrance porch with a KRO board, hanging sign, beer benches.`,
      W: 21.6,
      D: 9,
      style: {
        wall: `alStuccoOchre`,
        t: 0.35,
        bay: 2.4,
        floors: [3],
        ...t,
        base: { mat: `alBlack`, h: 0.4, out: 0.03 },
        roof: e,
      },
      front: { kinds: n, extra: A(Ka(n, t), qa) },
      back: {
        kinds: (e, t) => (t === 2 ? `door` : `window`),
        extra: Ka((e, t) => (t === 2 ? `door` : `window`), t),
      },
      right: { kinds: r, extra: Ka(r, t) },
      left: { kinds: r, extra: Ka(r, t) },
      extra: (t, n, r) => {
        let i = oa(t, n, r, e, `alThatch`, 0.02, 0.38, -0.15);
        oa(t, n, r, e, `alSnow`, 0.42, 0.1, 0.1, 0.55);
        let a = i + 1.2;
        for (let e = -r.W / 2; e <= r.W / 2 + 0.01; e += 1.35)
          for (let r of [-1, 1])
            k(
              t,
              `timber`,
              n,
              0,
              [e, a - 0.5, r * 0.75],
              [e, a + 0.45, -r * 0.2],
              0.09,
            );
        t.add(
          `timber`,
          new C(0.08, 0.08, r.W + 1.2, 6)
            .rotateZ(Math.PI / 2)
            .translate(0, a - 0.02, 0),
          n,
          0,
        );
        for (let e of [-5.5, 5.5])
          j(t, n, `alStuccoWhite`, e, 0, r.H - 0.5, a + 0.6, 0.8, 0.6);
      },
    }
  );
}
Ai.push(Ja);
var Ya = 45 * Si;
function Xa(e, t, n) {
  let r = Math.tan(Ya),
    i = n.H;
  for (let o = 0; o < n.nb; o++) {
    let s = n.grid[0][o],
      c = o * n.bw + 0.35,
      l = (o + 1) * n.bw - 0.35,
      u = (c + l) / 2,
      d = (l - c) / 2,
      f = o === 1 ? `alPlankBlack` : `alPlankWhite`,
      p = o === 1 ? `alWhite` : `alRed`,
      m = (n.bw / 2) * r - 0.35;
    (e.box(f, t, s, c, l, 0.25, i, 0, 0.06),
      e.add(
        f,
        new w(
          new T(
            [
              [c, i],
              [l, i],
              [u, i + m],
            ].map(([e, t]) => new y(e, t)),
          ),
          { depth: 0.06, bevelEnabled: !1 },
        ),
        t,
        s,
      ));
    for (let n of [c, l - 0.12])
      e.box(p, t, s, n, n + 0.12, 0.25, i, 0.06, 0.09);
    for (let n of [-1, 1]) {
      let r = Math.hypot(d, m) + 0.1,
        o = Math.atan2(m, d) * -n;
      e.add(
        p,
        new a(r, 0.18, 0.05)
          .rotateZ(o)
          .translate(u + (n * d) / 2, i + m / 2 - 0.05, 0.1),
        t,
        s,
      );
    }
    e.box(`alRubble`, t, s, c - 0.1, l + 0.1, 0, 0.25, -0.1, 0.12);
    let h = i + m * 0.3;
    e.box(`glass`, t, s, u - 0.3, u + 0.3, h, h + 0.55, 0.06, 0.07);
    for (let [n, r, i, a] of [
      [u - 0.36, u - 0.3, h, h + 0.55],
      [u + 0.3, u + 0.36, h, h + 0.55],
      [u - 0.36, u + 0.36, h - 0.06, h],
      [u - 0.36, u + 0.36, h + 0.55, h + 0.61],
      [u - 0.02, u + 0.02, h, h + 0.55],
    ])
      e.box(p, t, s, n, r, i, a, 0.06, 0.1);
    if (o === 1) {
      e.box(`alRed`, t, s, u - 0.5, u + 0.5, 0.25, 2.2, 0.06, 0.1);
      for (let n of [0.9, 1.6])
        e.box(`alWhite`, t, s, u - 0.4, u + 0.4, n, n + 0.06, 0.1, 0.12);
      (e.box(`brass`, t, s, u + 0.3, u + 0.36, 1.2, 1.28, 0.1, 0.15),
        e.box(`alRubble`, t, s, u - 0.8, u + 0.8, 0, 0.18, 0.1, 0.6));
    } else
      for (let n of [u - 0.9, u + 0.9]) {
        let r = 0.95,
          i = 1.75;
        e.box(`glass`, t, s, n - 0.35, n + 0.35, r, i, 0.02, 0.03);
        for (let [a, o, c, l] of [
          [n - 0.42, n - 0.35, r, i],
          [n + 0.35, n + 0.42, r, i],
          [n - 0.42, n + 0.42, 0.8799999999999999, r],
          [n - 0.42, n + 0.42, i, 1.82],
          [n - 0.02, n + 0.02, r, i],
          [n - 0.35, n + 0.35, 2.7 / 2 - 0.02, 1.37],
        ])
          e.box(p, t, s, a, o, c, l, 0.02, 0.1);
        e.box(`curtain`, t, s, n - 0.33, n + 0.33, 1.5, 1.73, 0, 0.01);
      }
  }
}
function Za() {
  let e = 16 / 3;
  return {
    key: `alTurf`,
    name: `Hólakot Turf Farm`,
    plain: 6119986,
    desc: `Icelandic turf farmhouse: three painted timber gable fronts (white, black, white with red and white trim) set in metre-thick herringbone turf walls, each under its own grassed gable with snow on the crests.`,
    W: 16,
    D: 10,
    style: {
      wall: `alTurfWall`,
      t: 1,
      bay: e,
      floors: [2.4],
      win: {
        w: 0.6,
        h: 0.6,
        sill: 1.1,
        type: `grid`,
        lites: [2, 2],
        frame: `alWhite`,
        rec: 0.5,
        curtains: 0.6,
      },
      roof: la,
    },
    front: { kinds: () => `solid`, extra: Xa },
    back: { kinds: (e, t) => (t === 1 ? `window` : `solid`) },
    right: { kinds: (e, t) => (t === 1 ? `window` : `solid`) },
    left: { kinds: () => `solid` },
    extra: (t, n, r) => {
      let i = Math.tan(Ya),
        a = -r.D / 2 - 0.3,
        o = r.D / 2 + 0.04,
        s = e / 2;
      for (let c = 0; c < 3; c++) {
        let l = -r.W / 2 + (c + 0.5) * e,
          u = s * i,
          d = (e, t, n) =>
            new w(
              new T(
                [
                  [l - e, t],
                  [l + e, t],
                  [l, n],
                ].map(([e, t]) => new y(e, t)),
              ),
              { depth: o - a, bevelEnabled: !1 },
            ).translate(0, 0, a);
        (t.add(
          `alTurf`,
          d(2.9166666666666665, r.H - 0.25, r.H + u + 0.1),
          n,
          0,
        ),
          t.add(
            `alSnow`,
            d(s * 0.55, r.H + u * 0.45 + 0.08, r.H + u + 0.18),
            n,
            0,
          ));
      }
      for (let [e, i, s, c] of [
        [-r.W / 2 - 0.25, -r.W / 2 + 0.05, a, o],
        [r.W / 2 - 0.05, r.W / 2 + 0.25, a, o],
      ])
        t.box(`alTurf`, n, 0, e, i, r.H - 0.25, r.H + 0.35, s, c);
      j(
        t,
        n,
        `alRubble`,
        0.9,
        -1.5,
        r.H,
        r.H + 1.7666666666666666 * i + 0.9,
        0.6,
        0.6,
      );
    },
  };
}
Ai.push(Za);
function Qa(e, t, n) {
  let r = 2.2,
    i = 0.3;
  ia({
    noRoof: !0,
    a0: -0.2,
    a1: n.L + 0.2,
    d: r,
    y: i,
    trim: `alBoardGrey`,
    deck: `alBoardGrey`,
  })(e, t, n);
  let a = n.grid[0][0],
    o = n.grid[0][n.nb - 1];
  e.box(`alBoardGrey`, t, o, n.L - 1.9, n.L - 0.2, 0.72, 0.78, 0.2, 0.6);
  for (let r of [n.L - 1.8, n.L - 0.3])
    e.box(`alBoardGrey`, t, o, r - 0.04, r + 0.04, i, 0.72, 0.25, 0.55);
  (e.add(
    `woodDark`,
    new C(0.15, 0.12, 0.25, 10).translate(n.L - 1.4, 0.9, 0.4),
    t,
    o,
  ),
    k(
      e,
      `woodDark`,
      t,
      o,
      [n.L - 1.4, 0.95, 0.4],
      [n.L - 1.05, 1.02, 0.55],
      0.03,
    ));
  let s = 1.3;
  for (let n = r; n < 9.69; n += 0.25)
    e.box(`alBoardGrey`, t, a, 0.5, 2.1, 0.24, i, n + 0.01, n + 0.24);
  for (let n of [4.6, 7.1000000000000005, 9.6])
    for (let r of [-1, 1])
      e.add(
        `timber`,
        new C(0.08, 0.09, 0.7, 8).translate(
          s + r * 0.7200000000000001,
          -0.10000000000000003 / 2,
          n,
        ),
        t,
        a,
      );
  for (let n of [-0.25, 0.25])
    k(e, `alSteel`, t, a, [s + n, 1.1, 9.7 - 0.05], [s + n, -0.4, 9.95], 0.04);
  for (let n = 0; n < 4; n++) {
    let r = 0.19999999999999998 - n * 0.22,
      i = 9.7 + 0.02 + (0.3 * (1.1 - r)) / 1.2;
    e.box(`alSteel`, t, a, 1.05, 1.55, r - 0.02, r + 0.02, i - 0.02, i + 0.02);
  }
  let c = n.gableCell,
    l = n.L / 2,
    u = n.H + 0.35;
  (e.box(`alBoardGrey`, t, c, l - 0.3, l + 0.3, u, u + 0.4, 0, 0.05),
    e.box(
      `woodDark`,
      t,
      c,
      l - 0.34,
      l + 0.34,
      u - 0.04,
      u + 0.44,
      -0.01,
      0.03,
    ));
}
function $a(e, t, n) {
  let r = n.grid[0][0];
  for (let n = 0; n < 14; n++)
    for (let i = 0; i < 7; i++) {
      let a = 0.4 + n * 0.22 + (i % 2) * 0.11,
        o = 0.12 + i * 0.2;
      a < 3.6 &&
        e.add(
          `alBirch`,
          new C(0.1, 0.1, 0.45, 6).rotateX(Math.PI / 2).translate(a, o, 0.3),
          t,
          r,
        );
    }
  e.add(
    `woodDark`,
    new C(0.26, 0.28, 0.5, 10).translate(n.L - 0.8, 0.25, 0.9),
    t,
    n.grid[0][n.nb - 1],
  );
}
