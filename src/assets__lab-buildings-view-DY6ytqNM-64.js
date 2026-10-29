// assets__lab-buildings-view-DY6ytqNM 64 — math
// Lines 19869-20176 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function co() {
  let e = [2, 8, 13],
    t = (t, n) => t > 0 && (n % 4 == 1 || n === 11) && !e.includes(n),
    n = (n, r) =>
      n === 0 && e.includes(r) ? `door` : t(n, r) ? `balcony` : `window`,
    r = (e, t) => (e > 0 && t % 3 == 0 ? `balcony` : `window`);
  return {
    key: `alKhrush`,
    name: `Block 17, Ulitsa Lesnaya`,
    plain: 13222578,
    desc: `Soviet khrushchyovka: five storeys of tiled precast panels with dark joints, white-framed windows, ribbed balcony parapets (some glazed in by residents, some with washing), concrete entrance canopies with benches, flat roof bristling with TV aerials.`,
    W: 43.2,
    D: 12,
    style: {
      wall: `alPanel`,
      t: 0.35,
      bay: 2.7,
      floors: wi(5, 2.7),
      parapet: 0.45,
      parapetMat: `alConcrete`,
      win: {
        w: 1.4,
        h: 1.45,
        sill: 0.8,
        type: `grid`,
        lites: [2, 1],
        frame: `alWhite`,
        rec: 0.12,
        curtains: 0.85,
      },
      balcony: {
        w: 0.8,
        h: 2.15,
        depth: 1,
        slab: `alConcrete`,
        railMat: `alSteel`,
      },
      door: {
        w: 1.2,
        h: 2.1,
        transom: 0.3,
        frame: `alSteel`,
        mat: `alBoardBrown`,
        rec: 0.15,
        step: `alConcrete`,
      },
      base: { mat: `alConcrete`, h: 0.6, out: 0.03 },
    },
    front: { kinds: n, extra: A((t, n, r) => oo(t, n, r, e), so(n)) },
    back: { kinds: r, extra: so(r) },
    right: { kinds: (e, t) => (t === 2 ? `window` : `solid`) },
    left: { kinds: (e, t) => (t === 2 ? `window` : `solid`) },
    extra: (e, t, n) => {
      for (let r of [-14.8, 1.35, 14.85])
        e.box(`alConcrete`, t, 0, r - 1.2, r + 1.2, n.H, n.H + 2.2, -1.5, 1.5);
      let r = ki(77);
      for (let i = 0; i < 12; i++) {
        let a = -19 + i * 3.4 + r() * 1.5,
          o = -4 + r() * 8,
          s = 2.2 + r() * 1.8,
          c = n.H;
        e.add(
          `aluminum`,
          new C(0.025, 0.035, s, 5).translate(a, c + s / 2, o),
          t,
          0,
        );
        for (let n = 0; n < 4; n++)
          e.box(
            `aluminum`,
            t,
            0,
            a - 0.02,
            a + 0.02,
            c + s - 0.6 + n * 0.15,
            c + s - 0.58 + n * 0.15,
            o - 0.55 + n * 0.08,
            o + 0.55 - n * 0.08,
          );
        e.box(
          `aluminum`,
          t,
          0,
          a - 0.6,
          a + 0.6,
          c + s - 0.62,
          c + s - 0.58,
          o - 0.02,
          o + 0.02,
        );
      }
    },
  };
}
Ai.push(co);
function lo(e, t, n, r, i, o, s, c = 1.6) {
  (e.box(r, t, n, i - 0.05, i + 0.05, o, o + c, s - 0.05, s + 0.05),
    e.box(
      r,
      t,
      n,
      i - c * 0.3,
      i + c * 0.3,
      o + c * 0.66,
      o + c * 0.73,
      s - 0.05,
      s + 0.05,
    ),
    e.box(
      r,
      t,
      n,
      i - c * 0.16,
      i + c * 0.16,
      o + c * 0.84,
      o + c * 0.89,
      s - 0.05,
      s + 0.05,
    ),
    e.add(
      r,
      new a(c * 0.4, c * 0.06, 0.1)
        .rotateZ(-0.35)
        .translate(i, o + c * 0.32, s),
      t,
      n,
    ));
}
function uo(e, t, n) {
  let r = 1.4,
    o = 6.6,
    s = 4.4,
    c = 3.8000000000000003 / 2,
    l = n.gableCell,
    u = n.grid[0][0];
  Xi(e, `alLogsGrey`, t, n, r, o, 0, 7.2, -0.6, s);
  for (let [i, a] of [
    [r, -1],
    [o, 1],
  ])
    for (let r = 0.2, o = 0; r < 7.1000000000000005; r += 0.34, o++) {
      let s = Yi(n, i, r);
      o % 2
        ? e.add(
            `alLogsGrey`,
            new C(0.16, 0.16, 0.7, 7)
              .rotateX(Math.PI / 2)
              .translate(i + a * 0.02, r, 4.550000000000001),
            t,
            s,
          )
        : e.add(
            `alLogsGrey`,
            new C(0.16, 0.16, 0.7, 7)
              .rotateZ(Math.PI / 2)
              .translate(i + a * 0.25, r, 4.2),
            t,
            s,
          );
    }
  (e.add(
    `alAspen`,
    Di(new d(3.9, 1.2, 4).rotateY(Math.PI / 4).translate(4, 7.7, c)),
    t,
    l,
  ),
    e.add(
      `alLogsGrey`,
      new C(2.1, 2.1, 3.6, 8).rotateY(Math.PI / 8).translate(4, 9.4, c),
      t,
      l,
    ));
  for (let n = 0; n < 8; n += 2) {
    let r = (n / 8) * Math.PI * 2;
    e.box(
      `glassGrey`,
      t
        .clone()
        .multiply(new E().makeTranslation(4, 0, c))
        .multiply(new E().makeRotationY(r)),
      l,
      -0.3,
      0.3,
      8.8,
      9.8,
      1.9,
      1.98,
    );
  }
  (e.add(
    `alAspen`,
    new C(2.25, 2.45, 0.5, 8)
      .rotateY(Math.PI / 8)
      .translate(4, 11.350000000000001, c),
    t,
    l,
  ),
    e.add(
      `alAspen`,
      Di(
        new d(2.3, 7, 8)
          .rotateY(Math.PI / 8)
          .translate(4, 15.100000000000001, c),
      ),
      t,
      l,
    ),
    e.add(`alBoardGrey`, new C(0.35, 0.4, 0.9, 8).translate(4, 18.65, c), t, l),
    ua(e, t, l, `alAspen`, da(1.4, 1.6), 4, 19.099999999999998, c, 12),
    lo(e, t, l, `alGilt`, 4, 20.65, c, 1.7),
    e.box(`alBoardBrown`, t, u, 3.4, 4.6, 0, 2.3, s, 4.46));
  let f = 2.6,
    p = Math.tan(42 * Si),
    m = 1.4 * p;
  for (let n of [-1, 1]) {
    e.box(
      `alBoardBrown`,
      t,
      u,
      4 + n * 1.15 - 0.09,
      4 + n * 1.15 + 0.09,
      0.3,
      f,
      6.6000000000000005,
      6.780000000000001,
    );
    for (let r of [0.9, 1.7])
      e.add(
        `alBoardBrown`,
        new i(0.12, 8, 6).translate(4 + n * 1.15, r, 6.69),
        t,
        u,
      );
    e.add(
      `alAspen`,
      new a(
        Math.hypot(1.5999999999999999, 1.5999999999999999 * p),
        0.08,
        2.6999999999999997,
      )
        .rotateZ(-n * Math.atan(p))
        .translate(4 + (n * 1.5999999999999999) / 2, f + m / 2 - 0.05, 5.75),
      t,
      u,
    );
  }
  (e.add(
    `alBoardBrown`,
    new w(
      new T(
        [
          [2.6, f],
          [5.4, f],
          [4, f + m - 0.15],
        ].map(([e, t]) => new y(e, t)),
      ),
      { depth: 0.05, bevelEnabled: !1 },
    ).translate(0, 0, 6.740000000000001),
    t,
    u,
  ),
    e.box(`alBoardGrey`, t, u, 2.7, 5.3, 0, 0.3, s, 6.800000000000001));
  for (let n = 1; n <= 2; n++)
    e.box(
      `alBoardGrey`,
      t,
      u,
      3.2,
      4.8,
      0,
      0.3 - n * 0.1,
      6.800000000000001 + (n - 1) * 0.3,
      6.800000000000001 + n * 0.3,
    );
  let h = Yi(n, 4, 5);
  (e.box(`alBoardBrown`, t, h, 3.55, 4.45, 3.4, 4.5, s, 4.48),
    e.box(`alGilt`, t, h, 3.7, 4.3, 3.55, 4.35, 4.48, 4.5));
}
function fo(e, t, n) {
  let r = n.L / 2,
    i = 2.8,
    a = 4.4,
    o = n.grid[0][0];
  (e.add(
    `alLogsGrey`,
    new C(i, i, a, 4, 1, !1, -Math.PI / 2, Math.PI).translate(r, a / 2, 0),
    t,
    o,
  ),
    e.add(
      `alAspen`,
      Di(new d(3.3, 2.6, 4, 1, !1, -Math.PI / 2, Math.PI).translate(r, 5.7, 0)),
      t,
      o,
    ),
    e.add(`alBoardGrey`, new C(0.3, 0.3, 0.9, 8).translate(r, 7.2, 0.5), t, o),
    ua(e, t, o, `alAspen`, da(0.9, 1), r, 7.6000000000000005, 0.5, 10),
    lo(e, t, o, `alGilt`, r, 8.600000000000001, 0.5, 1));
  let s = i * Math.cos(Math.PI / 8);
  for (let n of [-Math.PI / 8, Math.PI / 8]) {
    let i = t
      .clone()
      .multiply(new E().makeTranslation(r, 0, 0))
      .multiply(new E().makeRotationY(n));
    (e.box(`glassGrey`, i, o, -0.3, 0.3, 2, 3, s - 0.01, s + 0.02),
      e.box(`alWhite`, i, o, -0.4, 0.4, 3, 3.2, s - 0.02, s + 0.08));
  }
}
