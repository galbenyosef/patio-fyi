// assets__lab-buildings-view-DY6ytqNM 58 — math
// Lines 17978-18327 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
var Fa = (e, t, n) => (r, i, s) => {
    let c = 0.8,
      l = 2.1999999999999997;
    for (let [u, d, f] of Zi(s, e, t)) {
      let e = s.grid[0][f],
        t = Math.hypot(l, c),
        p = Math.atan2(c, l);
      (r.add(
        `alStaveShingle`,
        new a(d - u, 0.1, t).rotateX(p).translate((u + d) / 2, 2.65, l / 2),
        i,
        e,
      ),
        r.add(
          `alSnow`,
          new a(d - u, 0.08, t - 0.5)
            .rotateX(p)
            .translate((u + d) / 2, 2.8000000000000003, l / 2 - 0.1),
          i,
          e,
        ));
      let m = n
        ? [
            [u, Math.min(d, n[0])],
            [Math.max(u, n[1]), d],
          ].filter(([e, t]) => t - e > 0.05)
        : [[u, d]];
      for (let [t, n] of m) {
        (r.box(`alTarWood`, i, e, t, n, 0, 1, 1.69, 1.81),
          r.box(`alTarWood`, i, e, t, n, 2.05, 2.3, 1.67, 1.83));
        for (let a = t + 0.05; a < n; a += 0.9)
          (r.box(`woodDark`, i, e, a - 0.06, a + 0.06, 1, 2.05, 1.69, 1.81),
            a + 0.9 < n &&
              r.add(
                `woodDark`,
                new o(0.39, 0.04, 4, 8, Math.PI).translate(
                  a + 0.45,
                  1.66,
                  1.75,
                ),
                i,
                e,
              ));
      }
      if (n)
        for (let t of n)
          t > u &&
            t < d &&
            r.box(`woodDark`, i, e, t - 0.08, t + 0.08, 0, 2.05, 1.67, 1.83);
    }
  },
  Ia = (e, t) => (n, r, i) => {
    let a = i.gableCell,
      o = i.L / 2,
      s = i.H + (i.L / 2) * Math.tan(e) + 0.15,
      c = `alTarWood`,
      l = [
        [o, s, t - 0.1],
        [o, s + 0.8, t + 0.35],
        [o, s + 1.35, t + 0.95],
        [o, s + 1.3, t + 1.6],
      ];
    for (let e = 0; e < 3; e++) k(n, c, r, a, l[e], l[e + 1], 0.22 - e * 0.03);
    k(n, c, r, a, l[2], [o, s + 1.02, t + 1.5], 0.09);
    for (let e of [0.3, 0.6])
      k(
        n,
        c,
        r,
        a,
        [o, s + 0.8 + e * 0.6, t + 0.35 + e * 0.6],
        [o, s + 1.25 + e * 0.6, t + 0.2 + e * 0.6],
        0.06,
      );
    k(n, c, r, a, [o, s + 1.4, t + 1], [o, s + 1.75, t + 0.85], 0.05);
  };
function La(e, t, n) {
  let r = n.L / 2,
    i = 1.7,
    a = 3.1,
    o = n.grid[0][0];
  (e.add(
    `alTarWood`,
    new C(i, i, a, 12, 1, !1, -Math.PI / 2, Math.PI).translate(r, a / 2, 0),
    t,
    o,
  ),
    e.add(
      `alStaveShingle`,
      new d(2.05, 2.4, 12, 1, !1, -Math.PI / 2, Math.PI).translate(r, 4.3, 0),
      t,
      o,
    ),
    e.add(
      `alTarWood`,
      new C(0.32, 0.32, 1.3, 8).translate(r, 5.300000000000001, 0.4),
      t,
      o,
    ),
    e.add(`alStaveShingle`, new d(0.45, 1.6, 8).translate(r, 6.7, 0.4), t, o),
    Fa(-1.9, r - 1.9)(e, t, n),
    Fa(r + 1.9, n.L + 1.9)(e, t, n));
}
function Ra(e, t, n) {
  let r = n.L / 2,
    i = n.grid[0][0];
  for (let n of [-1, 1])
    e.box(
      `alStaveShingle`,
      t,
      i,
      r + n * 0.6 - (n < 0 ? 0.4 : 0),
      r + n * 0.6 + (n > 0 ? 0.4 : 0),
      0,
      2.9,
      0,
      0.16,
      { planar: (e, t) => [e / 0.4, t / 0.9] },
    );
  e.box(`alTarWood`, t, i, r - 1, r + 1, 2.9, 3.15, 0, 0.18);
  let o = 1.35;
  for (let n of [-1, 1])
    e.add(
      `alStaveShingle`,
      new a(Math.hypot(o, 1), 0.1, 2.4)
        .rotateZ(n * Math.atan2(-1, o))
        .translate(r + (n * o) / 2, 3.5, 1.1),
      t,
      i,
    );
  e.add(
    `alTarWood`,
    new w(
      new T(
        [
          [r - 1.25, 2.95],
          [r + 1.25, 2.95],
          [r, 3.9],
        ].map(([e, t]) => new y(e, t)),
      ),
      { depth: 0.08, bevelEnabled: !1 },
    ).translate(0, 0, 2.15),
    t,
    i,
  );
  for (let n of [-1, 1])
    e.box(
      `woodDark`,
      t,
      i,
      r + n * 1 - 0.08,
      r + n * 1 + 0.08,
      0,
      2.95,
      2.1,
      2.26,
    );
}
function za() {
  let e = 56 * Si,
    t = 0.4,
    n = {
      ridge: `z`,
      pitch: e,
      over: t,
      mat: `alStaveShingle`,
      fascia: `alTarWood`,
    },
    r = (e, t) => (t % 2 ? `window` : `solid`);
  return {
    key: `alStave`,
    name: `Solvik Stave Church`,
    plain: 3022870,
    desc: `Norwegian stave church: tarred black timber, steep scale-shingled roofs stacked in tiers, arcaded svalgang gallery all round, carved dragon heads on the gables, ridge turret with a needle spire, round apse.`,
    W: 8,
    D: 12,
    style: {
      wall: `alTarWood`,
      t: 0.3,
      bay: 2.85,
      floors: [4.4],
      win: {
        w: 0.45,
        h: 0.45,
        sill: 3.4,
        type: `grid`,
        lites: [1, 1],
        frame: `woodDark`,
        rec: 0.15,
        curtains: 0,
      },
      door: {
        w: 1.2,
        h: 2.5,
        transom: 0,
        frame: `woodDark`,
        mat: `alTarWood`,
        rec: 0.35,
        step: `alGranite`,
      },
      base: { mat: `alRubble`, h: 0.35, out: 0.05 },
      roof: n,
    },
    front: {
      kinds: () => `door`,
      bay: 8,
      extra: A(Fa(-1.9, 9.9, [2.9, 5.1]), Ra, Ia(e, t)),
    },
    back: { kinds: () => `solid`, bay: 8, extra: A(La, Ia(e, t)) },
    right: { kinds: r, extra: Fa(-2.1, 13.5) },
    left: { kinds: r, extra: Fa(-2.1, 13.5) },
    extra: (e, t, n) => {
      let r = n.roofTop,
        i = 0.85;
      e.box(`alTarWood`, t, 0, -0.85, i, r - 1.2, r + 1.3, -0.85, i);
      for (let n of [1, -1])
        (e.box(
          `louver`,
          t,
          0,
          -0.7,
          0.7,
          r + 0.4,
          r + 1.1,
          n * i - 0.01,
          n * i + 0.03 * n,
        ),
          e.box(
            `louver`,
            t,
            0,
            n * i - 0.01,
            n * i + 0.03 * n,
            r + 0.4,
            r + 1.1,
            -0.7,
            0.7,
          ));
      (e.add(
        `alStaveShingle`,
        Di(
          new d(1.3 * Math.SQRT2, 1.1, 4)
            .rotateY(Math.PI / 4)
            .translate(0, r + 1.85, 0),
        ),
        t,
        0,
      ),
        e.box(`alTarWood`, t, 0, -0.55, 0.55, r + 2.1, r + 3, -0.55, 0.55),
        e.add(
          `alStaveShingle`,
          Di(
            new d(0.8 * Math.SQRT2, 4.6, 4)
              .rotateY(Math.PI / 4)
              .translate(0, r + 5.3, 0),
          ),
          t,
          0,
        ),
        fa(e, t, 0, `alBlack`, 0, r + 7.55, 0, 1));
    },
  };
}
Ai.push(za);
function Ba(e, t, n) {
  let r = 3.2,
    a = (e) => n.grid[0][Ei(n, e)];
  for (let [i, a, o] of Zi(n, -1, n.L + 1))
    (e.box(`alBoardGrey`, t, n.grid[0][o], i, a, -0.12, 0, 0, r),
      e.box(
        `alBoardGrey`,
        t,
        n.grid[0][o],
        i,
        a,
        -0.45,
        -0.12,
        3.0500000000000003,
        r,
      ));
  for (let r of [-0.8, 2.2, 4.8, n.L + 0.8])
    e.add(
      `timber`,
      new C(0.13, 0.15, 1.4, 8).translate(r, -0.75, 2.9000000000000004),
      t,
      a(r),
    );
  for (let r of [-0.6, n.L + 0.6])
    e.add(
      `alBlack`,
      new C(0.12, 0.15, 0.5, 8).translate(r, 0.25, 2.85),
      t,
      a(r),
    );
  let s = n.L / 2,
    c = a(s);
  for (let n = 1; n <= 7; n++)
    e.box(
      `alBoardGrey`,
      t,
      c,
      s - 0.6,
      s + 0.6,
      -n * 0.2 - 0.04,
      -n * 0.2,
      r + (n - 1) * 0.26,
      r + n * 0.26,
    );
  for (let n of [-0.62, 0.62])
    k(
      e,
      `alBoardGrey`,
      t,
      c,
      [s + n, 0, r],
      [s + n, -1.4, 5.050000000000001],
      0.07,
    );
  let l = n.grid[0][0];
  e.add(`alRed`, new o(0.32, 0.07, 6, 16).translate(1, 1.6, 0.1), t, l);
  for (let n = 0; n < 4; n++)
    e.add(
      `alWhite`,
      new o(0.32, 0.075, 6, 3, 0.35)
        .rotateZ((n * Math.PI) / 2)
        .translate(1, 1.6, 0.1),
      t,
      l,
    );
  e.add(
    `alLamp`,
    new i(0.1, 8, 6).translate(n.L / 2 + 0.75, 2.3, 0.2),
    t,
    a(n.L / 2),
  );
  let u = n.gableCell,
    d = n.L / 2,
    f = n.H + 0.4,
    p = f + 0.9;
  e.box(`glass`, t, u, d - 0.35, d + 0.35, f, p, 0.01, 0.02);
  for (let [n, r, i, a] of [
    [d - 0.45, d - 0.35, f, p],
    [d + 0.35, d + 0.45, f, p],
    [d - 0.45, d + 0.45, p, p + 0.1],
    [d - 0.5, d + 0.5, f - 0.1, f],
    [d - 0.03, d + 0.03, f, p],
  ])
    e.box(`trimWhite`, t, u, n, r, i, a, 0, 0.06);
  k(e, `timber`, t, u, [d, p + 0.4, -0.1], [d, p + 0.4, 0.9], 0.14);
}
