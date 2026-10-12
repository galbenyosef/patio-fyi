// assets__lab-buildings-view-DJVr8phc 67 — math
// Lines 20789-21129 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function xo(e, t, n) {
  let i = n.L / 2,
    a = i - 1.1,
    o = i + 1.1,
    s = 1.7,
    c = 2.7,
    l = n.grid[0][Di(n, i)];
  e.box(`alPlankWhite`, t, l, a, o, 0.2, c, 1.6199999999999999, s);
  for (let n of [a, o - 0.08])
    e.box(`alPlankWhite`, t, l, n, n + 0.08, 0.2, c, 0, s);
  (e.box(`alRed`, t, l, i - 0.45, i + 0.45, 0.2, 2.25, s, 1.75),
    e.box(`glass`, t, l, i - 0.3, i + 0.3, 1.4, 2, 1.75, 1.76));
  for (let n of [a - 0.01, o - 0.01])
    e.box(`glass`, t, l, n, n + 0.1, 1.3, 2, 0.5, 1.2);
  (e.box(`alGranite`, t, l, a - 0.1, o + 0.1, 0, 0.2, 0, 2.2),
    e.add(
      `alTinSilver`,
      new r(o - a + 0.3, 0.06, Math.hypot(2, 0.6))
        .rotateX(Math.atan2(0.6, 2))
        .translate(i, 3.0300000000000002, 1),
      t,
      l,
    ),
    e.add(
      `alSnow`,
      new r(o - a + 0.1, 0.1, Math.hypot(2, 0.6) - 0.3)
        .rotateX(Math.atan2(0.6, 2))
        .translate(i, 3.12, 1),
      t,
      l,
    ));
  for (let n of [a, o])
    e.add(
      `alPlankWhite`,
      new S(
        new C(
          [
            [0, c],
            [s, c],
            [0, 3.3000000000000003],
          ].map(([e, t]) => new h(e, t)),
        ),
        { depth: 0.08, bevelEnabled: !1 },
      )
        .rotateY(-Math.PI / 2)
        .translate(n + (n === a ? 0.08 : 0), 0, 0),
      t,
      l,
    );
}
function So() {
  let e = 50 * Ci,
    t = {
      ridge: `x`,
      pitch: e,
      over: 0.05,
      mat: `alTinSilver`,
      fascia: `alWhite`,
    },
    n = {
      win: {
        w: 1,
        h: 1.7,
        sill: 0.8,
        type: `grid`,
        lites: [2, 4],
        frame: `alWhite`,
        rec: 0.38,
        curtains: 0.6,
      },
    },
    i = (e, t) => (t === 2 ? `door` : `window`);
  return {
    key: `alQuebec`,
    name: `Maison Bélanger`,
    plain: 10259572,
    desc: `Québec stone house: thick fieldstone walls with deep white casements and green shutters, steep silver tin roof flaring into bellcast eaves, three dormers, firewall gables carried above the roof with corbels and massive stacks, plank tambour storm porch.`,
    W: 13,
    D: 9.5,
    style: {
      wall: `alRubbleWarm`,
      t: 0.6,
      bay: 2.6,
      floors: [3.4],
      ...n,
      door: {
        w: 1.1,
        h: 2.3,
        transom: 0.4,
        frame: `alWhite`,
        mat: `alRed`,
        rec: 0.4,
      },
      base: { mat: `alGranite`, h: 0.3, out: 0.04 },
      roof: t,
    },
    front: { kinds: i, extra: k(ta(i, n, { mat: `alChevronGreen` }), xo) },
    back: {
      kinds: (e, t) => (t === 3 ? `door` : `window`),
      extra: ta((e, t) => (t === 3 ? `door` : `window`), n, {
        mat: `alChevronGreen`,
      }),
    },
    right: {
      kinds: (e, t) => (t === 1 ? `window` : `solid`),
      bay: 2.8,
      extra: bo(e),
    },
    left: {
      kinds: (e, t) => (t === 1 ? `window` : `solid`),
      bay: 2.8,
      extra: bo(e),
    },
    extra: (n, i, a) => {
      let o = Math.tan(e),
        s = 18 * Ci;
      for (let e of [1, -1]) {
        let t = e * (a.D / 2 + 0.05),
          c = a.H - 0.05 * o,
          l = Math.hypot(1, 1 * Math.tan(s));
        (n.add(
          `alTinSilver`,
          new r(a.W + 0.1, 0.1, l)
            .rotateX(e * s)
            .translate(0, c - (1 * Math.tan(s)) / 2 + 0.1, t + (e * 1) / 2),
          i,
          0,
        ),
          n.add(
            `alSnow`,
            new r(a.W - 0.3, 0.12, l - 0.2)
              .rotateX(e * s)
              .translate(
                0,
                c - (1 * Math.tan(s)) / 2 + 0.22,
                t + (e * 1) / 2 - e * 0.1,
              ),
            i,
            0,
          ),
          n.box(
            `alWhite`,
            i,
            0,
            -a.W / 2 - 0.05,
            a.W / 2 + 0.05,
            c - 1 * Math.tan(s) - 0.12,
            c - 1 * Math.tan(s) + 0.1,
            t + e * 1 - 0.04,
            t + e * 1 + 0.04,
          ));
      }
      sa(n, i, a, t, `alSnow`, 0, 0.15, 0.3, 0.75);
      for (let e of [-3.9, 0, 3.9]) {
        let t = a.D / 2 - 1.2,
          s = a.H + 1.2 * o,
          c = 0.75,
          l = s + 1.5;
        (n.box(
          `alPlankWhite`,
          i,
          0,
          e - c,
          e + c,
          s - 0.3,
          l,
          t - (l - s + 0.6) / o - 0.3,
          t,
        ),
          n.box(
            `glass`,
            i,
            0,
            e - 0.4,
            e + 0.4,
            s + 0.15,
            l - 0.2,
            t,
            t + 0.01,
          ));
        for (let [r, a, o, c] of [
          [e - 0.5, e - 0.4, s + 0.1, l - 0.15],
          [e + 0.4, e + 0.5, s + 0.1, l - 0.15],
          [e - 0.5, e + 0.5, l - 0.2, l - 0.1],
          [e - 0.5, e + 0.5, s + 0.1, s + 0.18],
          [e - 0.02, e + 0.02, s + 0.15, l - 0.2],
        ])
          n.box(`alWhite`, i, 0, r, a, o, c, t, t + 0.05);
        let u = Math.tan(48 * Ci),
          d = 0.9 * u,
          f = (l - s + 0.6) / o + 0.6;
        for (let a of [-1, 1])
          (n.add(
            `alTinSilver`,
            new r(Math.hypot(0.9, d) + 0.05, 0.07, f)
              .rotateZ(-a * Math.atan(u))
              .translate(e + (a * 0.9) / 2, l + d / 2 + 0.03, t - f / 2 + 0.25),
            i,
            0,
          ),
            n.add(
              `alSnow`,
              new r(Math.hypot(0.9, d) - 0.2, 0.08, f - 0.2)
                .rotateZ(-a * Math.atan(u))
                .translate(
                  e + (a * 0.9) / 2 - a * 0.05,
                  l + d / 2 + 0.1,
                  t - f / 2 + 0.2,
                ),
              i,
              0,
            ));
        n.add(
          `alPlankWhite`,
          new S(
            new C(
              [
                [e - c, l],
                [e + c, l],
                [e, l + d - 0.1],
              ].map(([e, t]) => new h(e, t)),
            ),
            { depth: 0.05, bevelEnabled: !1 },
          ).translate(0, 0, t - 0.05),
          i,
          0,
        );
      }
    },
  };
}
ji.push(So);
var Co = (e, t) => (n, i, a) => {
  let o = e - 1.1,
    s = e + 1.1,
    c = 2.9,
    l = 0.7,
    u = a.grid[0][Di(a, e)],
    d = Math.tan(32 * Ci),
    f = 1.1 * d;
  (n.box(`timber`, i, u, o, s, 0, l, 0, 2),
    n.box(`alT111`, i, u, o, s, l, c, 1.88, 2));
  for (let e of [o, s - 0.12]) n.box(`alT111`, i, u, e, e + 0.12, l, c, 0, 2);
  n.add(
    `alT111`,
    new S(
      new C(
        [
          [o, c],
          [s, c],
          [e, c + f],
        ].map(([e, t]) => new h(e, t)),
      ),
      { depth: 0.12, bevelEnabled: !1 },
    ).translate(0, 0, 1.88),
    i,
    u,
  );
  for (let t of [-1, 1])
    (n.add(
      `corrugated`,
      new r(Math.hypot(1.3, 1.3 * d), 0.06, 2.4)
        .rotateZ(-t * Math.atan(d))
        .translate(e + t * 0.65, c + f / 2 + 0.02, 2.4 / 2),
      i,
      u,
    ),
      n.add(
        `alSnow`,
        new r(Math.hypot(1.3, 1.3 * d) - 0.1, 0.25, 2.3)
          .rotateZ(-t * Math.atan(d))
          .translate(e + t * 0.6, c + f / 2 + 0.17, 2.4 / 2),
        i,
        u,
      ));
  (n.box(`alSteel`, i, u, e - 0.45, e + 0.45, l, 2.7, 2, 2.05),
    n.box(wi, i, u, e + 0.28, e + 0.36, 1.65, 1.75, 2.05, 2.1));
  for (let t = 1; t <= 3; t++)
    n.box(
      `alBoardGrey`,
      i,
      u,
      e - 0.7,
      e + 0.7,
      0,
      l - (t - 1) * 0.23,
      2 + (t - 1) * 0.3,
      2 + t * 0.3,
    );
  if ((n.add(`alLamp`, new w(0.11, 8, 6).translate(e, 2.95, 2.12), i, u), t)) {
    let t = 2.08;
    n.box(
      `alBoardBrown`,
      i,
      u,
      e - 0.15,
      e + 0.15,
      2.5,
      2.8000000000000003,
      2,
      t,
    );
    for (let r of [-1, 1])
      (D(
        n,
        `alCanvas`,
        i,
        u,
        [e + r * 0.1, 2.65, t],
        [e + r * 0.6, 3.35, 2.23],
        0.05,
      ),
        D(
          n,
          `alCanvas`,
          i,
          u,
          [e + r * 0.6, 3.35, 2.23],
          [e + r * 0.5, 3.85, t],
          0.04,
        ),
        D(
          n,
          `alCanvas`,
          i,
          u,
          [e + r * 0.35, 3.0500000000000003, 2.16],
          [e + r * 0.3, 3.4000000000000004, 2.38],
          0.035,
        ),
        D(
          n,
          `alCanvas`,
          i,
          u,
          [e + r * 0.55, 3.6500000000000004, 2.13],
          [e + r * 0.8, 3.85, 2.13],
          0.03,
        ));
  }
};
