// assets__lab-buildings-view-DJVr8phc 82 — box
// Lines 25171-25493 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function nc(e, t, n) {
  let {
    x0: r,
    x1: i,
    zf: a,
    y0: o,
    yt: s,
    zb: c,
    yb: l,
    wall: u,
    roof: d,
    trim: f,
  } = n;
  e.box(u, t, 0, r, i, o, s, a - 0.22, a);
  for (let [n, d] of [
    [r - 0.12, r],
    [i, i + 0.12],
  ])
    ds(
      e,
      t,
      0,
      u,
      [
        [a, o],
        [a, s],
        [c, l],
        [c, o],
      ],
      n,
      d,
    );
  for (let [n, c] of [
    [r - 0.14, r + 0.04],
    [i - 0.04, i + 0.14],
  ])
    e.box(f, t, 0, n, c, o + 0.2, s, a - 0.1, a + 0.04);
  (ms(
    e,
    t,
    0,
    d,
    i - r + 0.6,
    (r + i) / 2,
    [a + 0.35, s - 0.35 * ((l - s) / (a - c))],
    [c, l],
    0.12,
  ),
    e.box(f, t, 0, r - 0.3, i + 0.3, s - 0.32, s - 0.02, a + 0.33, a + 0.39));
  for (let r of n.wins)
    Zs(e, t, 0, r, o + 0.75, n.ww, n.wh, a + 0.05, {
      frame: f,
      lites: [2, 3],
      shutter: n.shutter,
    });
}
function rc() {
  let e = 3.1,
    t = gs(9 / 2, e, {
      lo: 62 * Fo,
      up: 22 * Fo,
      knee: 2.4,
      over: 0.45,
      flare: 20 * Fo,
    }),
    n = {
      wall: `amLapOlive`,
      t: 0.2,
      bay: 1.35,
      floors: [2.9],
      win: {
        w: 0.95,
        h: 1.7,
        sill: 0.6,
        type: `grid`,
        lites: [2, 3],
        frame: F,
        rec: 0.08,
        curtains: 0.3,
      },
      door: {
        w: 0.9,
        h: 2.1,
        transom: 0,
        frame: F,
        glazed: !0,
        mat: `amDoorGreen`,
        rec: 0.1,
      },
      base: { mat: `amBrickGeorgian`, h: 0.4, out: 0.03 },
      corners: F,
      eaveTrim: F,
    },
    r = (e, t, n) => {
      let r = n.H,
        i = n.w,
        a = n.d,
        o = n.faces.front.grid[0][0],
        s = (n, i, a, s) => {
          let c = Math.hypot(a - n, s - i),
            l = Math.max(1, Math.round(c / 0.16));
          (D(e, F, t, o, [n, r + 0.95, i], [a, r + 0.95, s], 0.1),
            D(e, F, t, o, [n, r + 0.12, i], [a, r + 0.12, s], 0.07));
          for (let c = 1; c < l; c++) {
            let u = c / l;
            e.box(
              F,
              t,
              o,
              n + (a - n) * u - 0.02,
              n + (a - n) * u + 0.02,
              r + 0.12,
              r + 0.9,
              i + (s - i) * u - 0.02,
              i + (s - i) * u + 0.02,
            );
          }
        };
      (s(-i / 2 + 0.1, a / 2 - 0.1, i / 2 - 0.1, a / 2 - 0.1),
        s(-i / 2 + 0.1, -a / 2, -i / 2 + 0.1, a / 2 - 0.1),
        s(i / 2 - 0.1, -a / 2, i / 2 - 0.1, a / 2 - 0.1));
      for (let [n, s] of [
        [-i / 2 + 0.1, a / 2 - 0.1],
        [i / 2 - 0.1, a / 2 - 0.1],
        [-i / 2 + 0.1, -a / 2 + 0.1],
        [i / 2 - 0.1, -a / 2 + 0.1],
      ])
        e.box(F, t, o, n - 0.1, n + 0.1, r, r + 1.1, s - 0.1, s + 0.1);
    },
    i = Math.tan(62 * Fo),
    a = Math.tan(22 * Fo),
    o = 3.75,
    s = (n) => (n > t.knee ? e + (9 / 2 - n) * i : t.yk + (t.knee - n) * a);
  return {
    key: `amDutchColonial`,
    name: `Van Wyck Dutch Colonial`,
    plain: 9145964,
    desc: `Dutch Colonial Revival: side-gambrel roof with flared eaves, full-width shed dormer across the front slope, sage clapboard and black shutters, bracketed entry hood, sunroom wing with a balustraded roof deck.`,
    W: 12,
    D: 9,
    style: {
      wall: `amLapOlive`,
      t: 0.22,
      bay: 2.4,
      floors: [e],
      win: {
        w: 0.9,
        h: 1.55,
        sill: 0.75,
        type: `sash`,
        lites: [3, 2],
        frame: F,
        casing: F,
        shutter: `amShutterBlack`,
        rec: 0.08,
        curtains: 0.55,
      },
      door: {
        w: 1,
        h: 2.1,
        transom: 0.3,
        frame: F,
        mat: `amDoorRed`,
        rec: 0.12,
      },
      base: { mat: `amBrickGeorgian`, h: 0.45, out: 0.03 },
      corners: F,
      roof: Ko(`x`),
    },
    front: {
      kinds: (e, t) => (t === 2 ? `door` : `window`),
      extra: (e, t, n) => {
        let r = n.grid[0][2];
        (e.box(F, t, r, 5.05, 6.95, 2.6, 2.76, -0.02, 0.95),
          e.box(`amRoofBrown`, t, r, 5, 7, 2.76, 2.84, -0.02, 1));
        for (let n of [-1, 1])
          ds(
            e,
            t,
            r,
            F,
            [
              [0, 2.6],
              [0.85, 2.6],
              [0.6, 2.35],
              [0.1, 1.95],
              [0, 1.95],
            ],
            6 + n * 0.8 - 0.05,
            6 + n * 0.8 + 0.05,
          );
        for (let r of [1.3, 10.7])
          Ms(e, t, n.grid[0][zo(n, r)], r, 0.6, 0.55, `amHydrangea`);
      },
    },
    back: { kinds: (e, t) => (t === 1 ? `door` : `window`) },
    right: {
      kinds: (e, t) => (t === 1 ? `solid` : `window`),
      bay: 2.9,
      extra: k(
        _s(t, {
          wall: `amLapOlive`,
          trim: F,
          side: !0,
          extra: (e, t, n, r, i) => {
            for (let n of [-1, 1])
              Zs(e, t, r, i + n * 1, 4.5, 0.7, 1.2, 0.05, { lites: [2, 3] });
          },
        }),
        Ts(4.3, 1.3, `amBrickGeorgian`, t.yr + 0.9, 0.7),
      ),
    },
    left: {
      kinds: (e, t) => `window`,
      bay: 2.9,
      extra: k(
        _s(t, {
          wall: `amLapOlive`,
          trim: F,
          side: !0,
          extra: (e, t, n, r, i) =>
            Zs(e, t, r, i, 6.300000000000001, 0.7, 0.9, 0.05, {
              lites: [2, 2],
            }),
        }),
        xs({
          u: 3.9,
          w: 5.4,
          d: 3.6,
          S: n,
          front: { kinds: () => `window` },
          right: { kinds: (e, t) => (t === 1 ? `door` : `window`) },
          left: { kinds: () => `window` },
          then: r,
        }),
      ),
    },
    extra: (e, n) => {
      (hs(e, n, {
        ridge: `x`,
        len: 12,
        over: 0.35,
        prof: t.prof,
        mat: `amRoofBrown`,
        fascia: F,
        gutter: !0,
      }),
        nc(e, n, {
          x0: -4.4,
          x1: 4.4,
          zf: o,
          y0: s(o) - 0.2,
          yt: 6.75,
          zb: 1,
          yb: s(1) - 0.05,
          wall: `amLapOlive`,
          roof: `amRoofBrown`,
          trim: F,
          wins: [-3, 0, 3],
          ww: 1.05,
          wh: 1.15,
        }));
    },
  };
}
function ic(e, t, n) {
  let r = 3.4,
    i = 10.2;
  for (let [a, o, s] of ss(n, -0.6, i)) {
    let i = n.grid[0][s];
    (e.box(`concrete`, t, i, a, o, 0, 0.15, 0, r),
      e.box(`amBrickRoman`, t, i, a, o, 0.15, 0.95, 3.05, r),
      e.box(
        `limestone`,
        t,
        i,
        a - 0.05,
        o + 0.05,
        0.95,
        1.05,
        2.98,
        3.4699999999999998,
      ));
  }
  let a = n.grid[0][0];
  (e.box(`amBrickRoman`, t, a, -0.6, -0.25, 0.15, 0.95, 0, 3.05),
    e.box(`limestone`, t, a, -0.67, -0.18, 0.95, 1.05, 0, 3.05));
  for (let [r, o] of [
    [-0.42, a],
    [9.899999999999999, n.grid[0][zo(n, i)]],
  ])
    (e.box(`amBrickRoman`, t, o, r - 0.4, r + 0.4, 0.15, 1.15, 2.8, 3.6),
      e.box(
        `limestone`,
        t,
        o,
        r - 0.46,
        r + 0.46,
        1.15,
        1.25,
        2.7399999999999998,
        3.66,
      ),
      e.add(
        `concrete`,
        new s(0.55, 0.22, 0.45, 12).translate(r, 1.5, 3.1999999999999997),
        t,
        o,
      ),
      e.add(
        `concrete`,
        new s(0.2, 0.28, 0.12, 12).translate(r, 1.31, 3.1999999999999997),
        t,
        o,
      ),
      Ms(e, t, o, r, 3.1999999999999997, 0.5, `amHydrangea`));
  for (let [r, i] of [
    [1.5, 0],
    [4.5, 1],
    [7.5, 2],
  ])
    Ms(e, t, n.grid[0][i], r, 2.6, 0.45);
}
