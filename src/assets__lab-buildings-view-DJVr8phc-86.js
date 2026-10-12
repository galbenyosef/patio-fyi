// assets__lab-buildings-view-DJVr8phc 86 — box
// Lines 26357-26639 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function mc() {
  let e = 6.5,
    t = 0.3,
    n = 32 * Fo,
    r = Math.tan(n),
    i = 3 + (e / 2) * r,
    a = {
      wall: `amHewn`,
      t,
      bay: 5,
      floors: [3],
      door: {
        w: 1,
        h: 2.1,
        transom: 0,
        frame: `woodDark`,
        mat: `amDoorOak`,
        rec: 0.15,
      },
    },
    o = (e) => [
      [-0.3, 3],
      [e.L + t, 3],
      [e.L / 2, 3 + (e.L / 2 + t) * r],
    ];
  return {
    key: `amDogtrot`,
    name: `Pine Hollow Dogtrot`,
    plain: 7164468,
    desc: `Southern dogtrot house: two hewn-log pens under one tin roof with an open breezeway between, the roof breaking to a shallower pitch over a full-width porch, fieldstone end chimneys, benches and a wash tub.`,
    W: 15,
    D: e,
    style: {
      wall: `amHewn`,
      t,
      bay: 5,
      floors: [3],
      win: {
        w: 0.9,
        h: 1.1,
        sill: 0.9,
        type: `grid`,
        lites: [2, 2],
        frame: `woodDark`,
        rec: 0.18,
        curtains: 0.5,
      },
      door: { w: 4.4, h: 2.6, transom: 0, frame: `wood`, open: !0, rec: 0.1 },
      base: { mat: `amFieldstone`, h: 0.35, out: 0.04 },
      roof: Ko(`x`),
    },
    front: {
      kinds: (e, t) => (t === 1 ? `door` : `window`),
      extra: (e, t, n) => {
        for (let [r, i, a] of ss(n, -0.3, n.L + 0.3)) {
          let o = n.grid[0][a];
          (e.box(`wood`, t, o, r, i, 0.25, 0.35, 0, 2.55),
            e.box(`amFieldstone`, t, o, r, i, 0, 0.25, 2.3, 2.5),
            e.box(`wood`, t, o, r, i, 2.3, 2.5, 2.33, 2.5));
        }
        for (let r of [-0.2, 3.6, 5.2, 9.8, 11.4, n.L + 0.2])
          e.box(
            `wood`,
            t,
            n.grid[0][zo(n, r)],
            r - 0.08,
            r + 0.08,
            0.35,
            2.3,
            2.34,
            2.5,
          );
        (ks(e, t, n.grid[0][0], 1.2, 3.2, 0.5),
          ks(e, t, n.grid[0][2], 11.8, 13.8, 0.5));
        let r = n.grid[0][2];
        (e.add(
          `amTinGalv`,
          new s(0.4, 0.34, 0.25, 12)
            .rotateX(Math.PI / 2)
            .translate(10.6, 1.9, 0.14),
          t,
          r,
        ),
          e.add(
            `amTinGalv`,
            new s(0.16, 0.13, 0.3, 10).translate(10.6, 0.5, 0.35),
            t,
            r,
          ));
        let i = n.grid[0][1];
        (e.box(`amHewn`, t, i, 5, 10, 0.02, 2.98, -6.12, -6.08),
          e.box(`wood`, t, i, 5, 10, 2.9, 2.96, -6.15, -0.02),
          e.box(`amFieldstone`, t, i, 6.8, 8.2, 0.02, 0.25, 0.5, 2.3));
      },
    },
    back: { kinds: (e, t) => (t === 1 ? `solid` : `window`) },
    right: {
      kinds: (e, t) => `solid`,
      bay: 3,
      extra: k(
        Fs(`amHewn`, o, `wood`),
        Ts(2.95, 1.5, `amFieldstone`, i + 0.7, 0.85),
      ),
    },
    left: {
      kinds: (e, t) => `solid`,
      bay: 3,
      extra: k(
        Fs(`amHewn`, o, `wood`),
        Ts(2.95, 1.5, `amFieldstone`, i + 0.7, 0.85),
      ),
    },
    extra: (n, o) => {
      (Ps(n, o, {
        pts: [
          [6, 2.5],
          [e / 2, 2.95],
          [0, i],
          [-6.5 / 2 - 0.5, 3 - 0.5 * r],
        ],
        len: 15.9,
        mat: `amTinGalv`,
        fascia: `wood`,
      }),
        ve(n, De(o, -2.5, e / 2 - t, Math.PI / 2), e - 2 * t, a, {
          kinds: () => `door`,
        }),
        ve(n, De(o, 2.5, -2.95, -Math.PI / 2), e - 2 * t, a, {
          kinds: () => `door`,
        }));
    },
  };
}
function hc(e, t, n) {
  let i = n.L / 2,
    a = 3.55,
    o = 4.9,
    s = 2.8,
    c = (e) => n.grid[0][zo(n, e)];
  for (let [r, l] of ss(n, i - 4, i + 4)) {
    let n = c((r + l) / 2);
    (e.box(`amVitroMaroon`, t, n, r, l, 4.75, o, 0, 2.8499999999999996),
      e.box(`amWhiteEnamel`, t, n, r, l, a, 3.63, 0, s),
      e.box(`amChrome`, t, n, r, l, o, 4.98, 0, 2.9));
    for (let o = Math.ceil((r - i) / 0.8) * 0.8 + i + 0.4; o < l; o += 0.8)
      for (let r of [0.7, 1.5, 2.3])
        e.box(
          `bulb`,
          t,
          n,
          o - 0.08,
          o + 0.08,
          3.4899999999999998,
          a,
          r - 0.08,
          r + 0.08,
        );
    for (let a = Math.ceil((r - i) / 0.35) * 0.35 + i; a < l; a += 0.35)
      for (let r of [3.67, 4.680000000000001])
        e.box(
          `bulb`,
          t,
          n,
          a - 0.05,
          a + 0.05,
          r - 0.05,
          r + 0.05,
          2.8299999999999996,
          2.88,
        );
  }
  cs(
    e,
    t,
    n,
    `signAmMarquee`,
    i - 4 + 0.1,
    i + 4 - 0.1,
    3.8,
    4.6000000000000005,
    2.78,
    2.82,
  );
  for (let n of [-1, 1]) {
    let l = c(i + (n * 9.2) / 2),
      u = [i + n * 4, s],
      d = [i + n * 5.2, 0];
    fs(
      e,
      t,
      l,
      `amVitroMaroon`,
      [
        [i + n * 4, 0],
        [u[0], u[1]],
        [d[0], d[1]],
      ],
      a,
      o,
    );
    let f = Math.hypot(d[0] - u[0], d[1] - u[1]),
      p = Math.atan2(d[1] - u[1], d[0] - u[0]);
    (e.add(
      `amNeonYellow`,
      new r(f, 0.08, 0.08)
        .rotateY(-p)
        .translate((u[0] + d[0]) / 2, 4.800000000000001, (u[1] + d[1]) / 2),
      t,
      l,
    ),
      e.add(
        `amNeonYellow`,
        new r(f, 0.08, 0.08)
          .rotateY(-p)
          .translate((u[0] + d[0]) / 2, 3.5999999999999996, (u[1] + d[1]) / 2),
        t,
        l,
      ));
  }
  let l = c(i);
  (e.box(`amVitroMaroon`, t, l, i - 0.8, i + 0.8, 0, 1, 0.3, 1.5),
    e.box(`glassGrey`, t, l, i - 0.75, i + 0.75, 1, 2.2, 0.35, 1.45));
  for (let n of [i - 0.8, i + 0.76])
    e.box(`amChrome`, t, l, n, n + 0.04, 1, 2.2, 0.3, 1.5);
  (e.box(`amChrome`, t, l, i - 0.85, i + 0.85, 2.2, 2.45, 0.25, 1.55),
    e.box(`amChrome`, t, l, i - 0.3, i + 0.3, 1, 1.05, 1.45, 1.6));
  for (let r of [1, 3]) {
    let i = (r + 0.5) * n.bw + (r === 1 ? -1.05 : 1.05),
      a = n.grid[0][r];
    (e.box(`amChrome`, t, a, i - 0.48, i + 0.48, 0.75, 2.45, 0, 0.06),
      e.box(
        r === 1 ? `signAmPoster0` : `signAmPoster1`,
        t,
        a,
        i - 0.4,
        i + 0.4,
        0.83,
        2.37,
        0.06,
        0.07,
        { planar: (e, t) => [(e - i + 0.4) / 0.8, (t - 0.83) / 1.54] },
      ));
  }
  let u = n.H + 1.6,
    d = n.grid[n.top][zo(n, i)];
  for (let [r, a] of [
    [4.6, 1.3],
    [3, 2.6],
  ])
    e.box(`amStuccoWhite`, t, d, i - r / 2, i + r / 2, n.H, u + a, -n.t, 0.02);
  e.box(`amChrome`, t, d, i - 1.55, i + 1.55, u + 2.6, u + 2.7, -n.t, 0.1);
  for (let n = 0; n <= 8; n++) {
    let r = (n / 8) * Math.PI;
    D(
      e,
      `amGilt`,
      t,
      d,
      [i + Math.cos(r) * 0.4, u + 0.4 + Math.sin(r) * 0.4, 0.07],
      [i + Math.cos(r) * 1.3, u + 0.4 + Math.sin(r) * 1.3, 0.07],
      0.09,
    );
  }
  (e.add(
    `amGilt`,
    new y(0.42, 16, 0, Math.PI).translate(i, u + 0.4, 0.08),
    t,
    d,
  ),
    Re(
      e,
      t,
      n.grid[n.top][zo(n, i)],
      `signAmSunburst`,
      i,
      5.25,
      u + 3.6,
      0.4,
      2,
      `amVitroMaroon`,
      { bulbs: !0 },
    ));
}
