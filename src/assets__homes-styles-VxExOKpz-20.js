// assets__homes-styles-VxExOKpz 20 — box
// Lines 6393-6667 of readable/assets__homes-styles-VxExOKpz.pretty.js (statement-aligned).
function Bt() {
  let n = 0.3,
    r = Math.atan2(2.9499999999999993, 16.7),
    i = (e) =>
      4.25 + ((e - -6.7) * 2.9499999999999993) / 16.7 - n / 2 / Math.cos(r),
    a = (e, t) => (n, r, a) => {
      for (let o = 0; o < a.nb; o++) {
        let s = o * a.bw,
          l = s + a.bw,
          u = a.grid[0][o],
          d = new h(
            [
              [s, a.H],
              [l, a.H],
              [l, i(e(l)) + 0.03],
              [s, i(e(s)) + 0.03],
            ].map(([e, t]) => new c(e, t)),
          );
        (n.add(
          t,
          new m(d, { depth: 0.06, bevelEnabled: !1 }).translate(0, 0, -0.12),
          r,
          u,
        ),
          n.box(`hChrome`, r, u, s, l, a.H - 0.04, a.H + 0.06, -0.14, 0.02),
          t !== `hEnamelTeal` &&
            n.box(`hChrome`, r, u, s, s + 0.06, a.H, i(e(s)), -0.13, -0.03));
      }
    };
  function o(t, n, r) {
    let i = -2.9,
      a = 2.4,
      o = r.grid[0][0];
    (t.box(`hFieldstone`, n, o, -4.1, -1.7, 0, 0.6, 1.5999999999999999, 3.2),
      t.box(`hEnamelTeal`, n, o, -3.4, -2.4, 0.6, 12, 2.1999999999999997, 2.6),
      t.box(`signHStarlite`, n, o, -3.32, -2.48, 3.2, 11.6, 2.6, 2.62, {
        planar: (e, t) => [(e - i + 0.42) / 0.84, (t - 3.2) / 8.4],
      }),
      t.box(
        `signHStarlite`,
        n,
        o,
        -3.32,
        -2.48,
        3.2,
        11.6,
        2.1799999999999997,
        2.1999999999999997,
        { planar: (e, t) => [(-2.48 - e) / 0.84, (t - 3.2) / 8.4] },
      ),
      t.box(I, n, o, -4.7, -1.0999999999999999, 1.4, 2.6, 2.15, 2.65),
      t.box(`signHDriveIn`, n, o, -4.6, -1.2, 1.5, 2.5, 2.65, 2.67, {
        planar: (e, t) => [(e - i + 1.7) / 3.4, t - 1.5],
      }),
      t.add(`hChrome`, new p(0.05, 0.05, 1, 8).translate(i, 12.5, a), n, o),
      t.add(`hNeonYellow`, new e(0.34, 14, 10).translate(i, 13.1, a), n, o));
    for (let e = 0; e < 12; e++) {
      let r = (e / 12) * Math.PI * 2,
        s = e % 2 ? 0.9 : 1.5;
      O(
        t,
        `hNeonYellow`,
        n,
        o,
        [i, 13.1, a],
        [i + Math.cos(r) * s, 13.1 + Math.sin(r) * s, a],
        0.06,
      );
    }
    (O(
      t,
      `hEnamelOrange`,
      n,
      o,
      [-2.4, 9.8, a],
      [0.10000000000000009, 7, a],
      0.32,
    ),
      O(
        t,
        `hEnamelOrange`,
        n,
        o,
        [0.10000000000000009, 7, a],
        [-0.6999999999999997, 6.2, a],
        0.32,
      ));
    for (let e = 0.1; e < 1; e += 0.12)
      t.box(
        `bulb`,
        n,
        o,
        -2.4 + 2.5 * e - 0.06,
        -2.4 + 2.5 * e + 0.06,
        9.8 - 2.8 * e + 0.12,
        9.8 - 2.8 * e + 0.24,
        2.34,
        2.46,
      );
  }
  function s(e, a) {
    let o = Math.hypot(16.7, 2.9499999999999993),
      s = 3.3 / 2,
      c = 11.45 / 2;
    e.add(`hStuccoWhite`, new t(19, n, o).rotateX(-r).translate(0, c, s), a, 0);
    for (let n of [-1, 1])
      e.add(
        `hEnamelOrange`,
        new t(0.12, 0.42, o + 0.1).rotateX(-r).translate(n * 9.56, c, s),
        a,
        0,
      );
    e.add(
      `hEnamelOrange`,
      new t(19.240000000000002, 0.42, 0.12)
        .rotateX(-r)
        .translate(0, 7.199999999999999, 10),
      a,
      0,
    );
    let l = 8.1;
    for (let t of [-5, 0, 5])
      for (let n of [-1, 1])
        O(
          e,
          `hEnamelOrange`,
          a,
          0,
          [t + n * 1, 0, l],
          [t, i(l) - 0.02, l],
          0.16,
        );
    for (let t = 6.1; t < 9.5; t += 1.3)
      for (let n = -7; n < 8; n += 2)
        e.box(
          `bulb`,
          a,
          0,
          n - 0.15,
          n + 0.15,
          i(t) - 0.05,
          i(t) + 0.02,
          t - 0.15,
          t + 0.15,
        );
  }
  return {
    key: `hGoogie`,
    name: `Starlite Drive-In`,
    plain: 3115660,
    desc: `Googie drive-in: glass walls under a dramatic upswept roof on raked orange legs, glazed clerestory, teal enamel and a starburst pylon sign.`,
    W: 16,
    D: 11,
    style: {
      wall: `hEnamelTeal`,
      t: 0.25,
      bay: 3.2,
      floors: [3.8],
      curtain: {
        glass: `glassBlue`,
        spandrel: `hEnamelTeal`,
        mullion: `hChrome`,
        module: 1.6,
        sill: 0.8,
        head: 0.2,
        fin: 0.05,
      },
      door: {
        w: 1.6,
        h: 2.4,
        transom: 0.4,
        frame: `hChrome`,
        glazed: !0,
        rec: 0.3,
      },
      base: { mat: `hFieldstone`, h: 0.8, out: 0.04 },
      roof: X,
    },
    front: {
      kinds: (e, t) => (t === 2 ? `door` : `curtain`),
      extra: T(
        a(() => 11 / 2, `glassBlue`),
        o,
      ),
    },
    right: {
      kinds: () => `curtain`,
      extra: a((e) => 11 / 2 - 0.25 - e, `glassBlue`),
    },
    left: { kinds: () => `curtain`, extra: a((e) => -5.25 + e, `glassBlue`) },
    back: {
      kinds: (e, t) => (t === 1 ? `door` : `solid`),
      extra: a(() => -11 / 2, `hEnamelTeal`),
    },
    extra: s,
  };
}
function Vt(e, n, r) {
  let i = [
    `redPaint`,
    `hEnamelYellow`,
    `hTrimBlue`,
    `trimWhite`,
    I,
    `hEnamelOrange`,
  ];
  for (let [a, o] of [
    [0.4, 0],
    [8.4, 2],
  ]) {
    let s = r.grid[0][o],
      c = a + 3.2;
    for (let t of [a, c])
      e.box(
        `woodDark`,
        n,
        s,
        t - 0.06,
        t + 0.06,
        0,
        1.3,
        2.14,
        2.2600000000000002,
      );
    (e.box(`woodDark`, n, s, a, c, 1.2, 1.3, 1.9000000000000001, 2),
      e.box(`woodDark`, n, s, a, c, 0.15, 0.25, 2.35, 2.5));
    for (let r = 0; r < 12; r++) {
      let c = a + 0.2 + r * 0.24 + (r % 2) * 0.05,
        l = i[(r + o) % i.length];
      e.add(
        l,
        new t(0.08, 1.75, 0.03).rotateX(-0.2).translate(c, 0.95, 2.2),
        n,
        s,
      );
    }
    for (let t = 0; t < 4; t++)
      O(
        e,
        `aluminum`,
        n,
        s,
        [a + 0.5 + t * 0.7, 0, 2.5500000000000003],
        [a + 0.6 + t * 0.7, 1.25, 2.1],
        0.025,
      );
  }
  for (let [i, a] of [
    [4.3, `hEnamelOrange`],
    [4.7, `hTrimBlue`],
    [7.3, `redPaint`],
  ])
    e.add(
      a,
      new t(0.28, 1.5, 0.04).rotateX(-0.12).translate(i, 0.78, 0.18),
      n,
      r.grid[0][L(r, i)],
    );
}
function Ht(e, t, n) {
  let r = n.gableCell,
    i = n.L / 2,
    a = n.H + 1.45,
    o = n.H + 2.9;
  e.box(`glass`, t, r, i - 1.1, i + 1.1, a, o, 0.01, 0.02);
  for (let [n, s, c, l] of [
    [i - 1.2, i - 1.1, a, o],
    [i + 1.1, i + 1.2, a, o],
    [i - 1.2, i + 1.2, o, o + 0.1],
    [i - 1.25, i + 1.25, a - 0.1, a],
    [i - 0.4, i - 0.34, a, o],
    [i + 0.34, i + 0.4, a, o],
  ])
    e.box(`redPaint`, t, r, n, s, c, l, 0, 0.07);
}
