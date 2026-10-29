// assets__lab-buildings-view-DY6ytqNM 63 — box
// Lines 19552-19868 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function io(e, t, n) {
  let r = -0.25,
    i = 4.7,
    s = 2.6,
    l = 2.6,
    u = 0.45;
  for (let [o, c, d] of Zi(n, r, i)) {
    let r = n.grid[0][d];
    (e.box(`alBoardGreen`, t, r, o, c, 0, 1.15, 2.48, s),
      e.box(`alBoardGrey`, t, r, o, c, 0.37, u, 0, 2.48),
      e.box(`glass`, t, r, o, c, 1.15, l, 2.52, 2.5300000000000002));
    let f = Math.max(1, Math.round((c - o) / 0.55));
    for (let n = 0; n <= f; n++) {
      let i = o + ((c - o) * n) / f;
      e.box(
        `trimWhite`,
        t,
        r,
        i - 0.03,
        i + 0.03,
        1.15,
        l,
        2.5,
        2.5700000000000003,
      );
    }
    for (let n of [1.15, 1.75, 2.25, 2.54])
      e.box(`trimWhite`, t, r, o, c, n, n + 0.06, 2.5, 2.5700000000000003);
    (e.add(
      `alTinGrey`,
      new a(c - o + (c === i ? 0.2 : 0), 0.06, Math.hypot(3, 0.35))
        .rotateX(Math.atan2(0.35, 3))
        .translate(
          (o + c) / 2 + (c === i ? 0.1 : 0),
          2.8000000000000003,
          3 / 2,
        ),
      t,
      r,
    ),
      e.add(
        `alSnow`,
        new a(c - o, 0.1, Math.hypot(3, 0.35) - 0.5)
          .rotateX(Math.atan2(0.35, 3))
          .translate((o + c) / 2, 2.89, 1.6),
        t,
        r,
      ));
  }
  for (let i of [r, 4.62]) {
    let r = n.grid[0][Ei(n, i)];
    (e.box(`alBoardGreen`, t, r, i, i + 0.08, 0, 1.15, 0, s),
      e.box(`glass`, t, r, i + 0.03, i + 0.05, 1.15, l, 0, 2.5));
    for (let n of [0.6, 1.3, 2])
      e.box(`trimWhite`, t, r, i, i + 0.08, 1.15, l, n - 0.03, n + 0.03);
    e.box(`trimWhite`, t, r, i, i + 0.08, 2.54, 2.62, 0, s);
  }
  let d = n.grid[0][1];
  (e.box(`trimWhite`, t, d, 2.75, 3.65, u, 2.5, 2.5, 2.56),
    e.box(
      `glass`,
      t,
      d,
      2.9,
      3.5,
      1.55,
      2.3000000000000003,
      2.56,
      2.5700000000000003,
    ));
  for (let n = 1; n <= 2; n++)
    e.box(
      `alBoardGrey`,
      t,
      d,
      2.6,
      3.8,
      0,
      u - n * 0.17,
      s + (n - 1) * 0.3,
      s + n * 0.3,
    );
  let f = n.grid[0][n.nb - 1],
    p = n.L - 1.2,
    m = 5.2,
    h = 3.6;
  e.add(
    `alPolycarb`,
    new C(1.2, 1.2, h, 14, 1, !0, -Math.PI / 2, Math.PI)
      .rotateX(-Math.PI / 2)
      .translate(p, 0, m),
    t,
    f,
  );
  for (let n of [m - h / 2, 7])
    e.add(`alPolycarb`, new c(1.2, 14, 0, Math.PI).translate(p, 0, n), t, f);
  for (let n = 0; n <= 4; n++)
    e.add(
      `aluminum`,
      new o(1.2, 0.03, 4, 14, Math.PI).translate(p, 0, m - h / 2 + (n * h) / 4),
      t,
      f,
    );
  (e.box(`aluminum`, t, f, p - 0.03, p + 0.03, 1.17, 1.23, m - h / 2, 7),
    e.add(
      `alPlastic`,
      new C(0.35, 0.32, 0.9, 12).translate(n.L + 0.6, 0.45, 0.6),
      t,
      f,
    ));
  for (let r = -0.5; r < n.L + 1; r += 2)
    e.box(
      `alBoardGrey`,
      t,
      n.grid[0][Ei(n, r)],
      r - 0.05,
      r + 0.05,
      0,
      1.3,
      7.3,
      7.4,
    );
  for (let r of [0.4, 1.1])
    for (let [i, a, o] of Zi(n, -0.5, n.L + 0.5))
      e.box(`alBoardGrey`, t, n.grid[0][o], i, a, r, r + 0.08, 7.4, 7.45);
  let g = n.grid[n.top][Ei(n, 6.1)],
    _ = n.H + 0.15,
    v = _ + 0.8;
  e.box(`glass`, t, g, 5.75, 6.449999999999999, _, v, 0.01, 0.02);
  for (let [n, r, i, a] of [
    [5.6499999999999995, 5.75, _, v],
    [6.449999999999999, 6.55, _, v],
    [5.6499999999999995, 6.55, v, v + 0.1],
    [6.069999999999999, 6.13, _, v],
  ])
    e.box(`trimWhite`, t, g, n, r, i, a, 0, 0.06);
  e.box(`alBoardGrey`, t, g, 5.199999999999999, 7, _ - 0.12, _, 0, 0.7);
  for (let n = 5.25; n <= 6.96; n += 0.17)
    e.box(`trimWhite`, t, g, n - 0.02, n + 0.02, _, _ + 0.8, 0.64, 0.68);
  e.box(`trimWhite`, t, g, 5.199999999999999, 7, _ + 0.8, _ + 0.86, 0.62, 0.7);
}
function ao() {
  let e = {
    ridge: `x`,
    pitch: 42 * Si,
    over: 0.3,
    mat: `alTinGrey`,
    fascia: `trimWhite`,
  };
  return {
    key: `alDacha`,
    name: `Dacha Rodnik`,
    plain: 6130282,
    desc: `Russian dacha: green-painted clapboard cottage with white trim, glazed many-paned veranda under a shed roof, mezzanine gable with a toy balcony, corrugated slate roof and TV mast, polytunnel greenhouse and rain barrel in the fenced garden.`,
    W: 9,
    D: 8,
    style: {
      wall: `alBoardGreen`,
      t: 0.2,
      bay: 2.25,
      floors: [3.4],
      win: {
        w: 0.9,
        h: 1.3,
        sill: 0.85,
        type: `grid`,
        lites: [2, 3],
        frame: `trimWhite`,
        casing: `trimWhite`,
        rec: 0.08,
        curtains: 0.8,
      },
      door: {
        w: 0.9,
        h: 2,
        transom: 0,
        frame: `trimWhite`,
        mat: `alBoardYellow`,
        rec: 0.1,
      },
      base: { mat: `alConcrete`, h: 0.5, out: 0.03 },
      corners: `trimWhite`,
      eaveTrim: `trimWhite`,
      roof: e,
    },
    front: {
      kinds: (e, t) => (t === 1 ? `door` : `window`),
      extra: A(
        io,
        Sa({
          u: 6.1,
          hw: 1.6,
          pitch: 45 * Si,
          depth: 2.4,
          wall: `alBoardGreen`,
          roof: `alTinGrey`,
          trim: `trimWhite`,
          snow: !0,
          over: 0.35,
        }),
      ),
    },
    back: { kinds: (e, t) => (t === 2 ? `door` : `window`) },
    right: { kinds: () => `window` },
    left: { kinds: (e, t) => (t === 1 ? `solid` : `window`) },
    extra: (t, n, r) => {
      (oa(t, n, r, e, `alSnow`, 0, 0.14, 0.12, 0.85),
        j(t, n, `brickRed`, 1.6, -0.6, r.H - 0.5, r.roofTop + 0.5, 0.6, 0.6));
      let i = r.roofTop;
      t.add(
        `aluminum`,
        new C(0.03, 0.04, 3.2, 6).translate(-2.8, i + 1.4, 0),
        n,
        0,
      );
      for (let e = 0; e < 5; e++)
        t.box(
          `aluminum`,
          n,
          0,
          -3.4 + e * 0.1,
          -2.1999999999999997 - e * 0.1,
          i + 2.3 + e * 0.18,
          i + 2.33 + e * 0.18,
          -0.02,
          0.02,
        );
      t.box(`aluminum`, n, 0, -2.82, -2.78, i + 2.3, i + 3.05, -0.6, 0.6);
    },
  };
}
Ai.push(ao);
function oo(e, t, n, r) {
  for (let i of r) {
    let r = n.grid[0][i],
      a = (i + 0.5) * n.bw;
    (e.box(`alConcrete`, t, r, a - 1.1, a + 1.1, 2.75, 2.95, 0, 1.4),
      e.box(`alConcrete`, t, r, a - 1.1, a + 1.1, 0, 0.3, 0, 1.6),
      e.box(`alConcrete`, t, r, a - 0.9, a + 0.9, 0.3, 0.45, 0, 1));
    for (let n of [-1, 1]) {
      e.box(
        `alBoardBrown`,
        t,
        r,
        a + n * 1.9 - 0.7,
        a + n * 1.9 + 0.7,
        0.42,
        0.47,
        1.5,
        1.85,
      );
      for (let i of [-0.55, 0.55])
        e.box(
          Ci,
          t,
          r,
          a + n * 1.9 + i - 0.03,
          a + n * 1.9 + i + 0.03,
          0,
          0.42,
          1.55,
          1.8,
        );
    }
    (e.box(Ci, t, r, a + 0.7, a + 0.9, 1.3, 1.6, 0, 0.05),
      e.box(`alBlue`, t, r, a - 0.25, a + 0.25, 2.45, 2.7, 0, 0.03));
  }
  for (let i = 0; i < n.nb; i++)
    if (!r.includes(i)) {
      let r = (i + 0.5) * n.bw;
      e.box(Ci, t, n.grid[0][i], r - 0.3, r + 0.3, 0.3, 0.55, 0.02, 0.04);
    }
}
var so = (e) => (t, n, r) => {
  let i = 0;
  for (let a = 1; a <= r.top; a++)
    for (let o = 0; o < r.nb; o++) {
      if (e(a, o) !== `balcony`) continue;
      let s = r.grid[a][o],
        c = r.ys[a],
        l = o * r.bw + 0.12,
        u = (o + 1) * r.bw - 0.12;
      t.box(`alPanelRib`, n, s, l, u, c + 0.04, c + 1, 1, 1.06);
      for (let e of [l, u - 0.06])
        t.box(`alPanelRib`, n, s, e, e + 0.06, c + 0.04, c + 1, 0, 1);
      if ((o * 7 + a * 3 + i++) % 3 == 0) {
        t.box(`glassGrey`, n, s, l, u, c + 1, c + 2.45, 0.98, 1);
        for (let e = l; e <= u + 0.01; e += (u - l) / 3)
          t.box(
            `alWhite`,
            n,
            s,
            e - 0.03,
            e + 0.03,
            c + 1,
            c + 2.5,
            0.96,
            1.02,
          );
        t.box(`alWhite`, n, s, l, u, c + 2.45, c + 2.55, 0, 1.02);
        for (let e of [l, u - 0.02])
          t.box(`glassGrey`, n, s, e, e + 0.02, c + 1, c + 2.45, 0, 0.98);
      } else if ((o + a) % 2)
        for (let e = l + 0.3; e < u - 0.2; e += 0.4)
          t.box(
            `alCanvas`,
            n,
            s,
            e - 0.1,
            e + 0.1,
            c + 1.2,
            c + 1.7,
            0.7,
            0.72,
          );
    }
};
