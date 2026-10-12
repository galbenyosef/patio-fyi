// assets__lab-buildings-view-DJVr8phc 64 — math
// Lines 19869-20176 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function lo() {
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
      floors: Ti(5, 2.7),
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
    front: { kinds: n, extra: k((t, n, r) => so(t, n, r, e), co(n)) },
    back: { kinds: r, extra: co(r) },
    right: { kinds: (e, t) => (t === 2 ? `window` : `solid`) },
    left: { kinds: (e, t) => (t === 2 ? `window` : `solid`) },
    extra: (e, t, n) => {
      for (let r of [-14.8, 1.35, 14.85])
        e.box(`alConcrete`, t, 0, r - 1.2, r + 1.2, n.H, n.H + 2.2, -1.5, 1.5);
      let r = Ai(77);
      for (let i = 0; i < 12; i++) {
        let a = -19 + i * 3.4 + r() * 1.5,
          o = -4 + r() * 8,
          c = 2.2 + r() * 1.8,
          l = n.H;
        e.add(
          `aluminum`,
          new s(0.025, 0.035, c, 5).translate(a, l + c / 2, o),
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
            l + c - 0.6 + n * 0.15,
            l + c - 0.58 + n * 0.15,
            o - 0.55 + n * 0.08,
            o + 0.55 - n * 0.08,
          );
        e.box(
          `aluminum`,
          t,
          0,
          a - 0.6,
          a + 0.6,
          l + c - 0.62,
          l + c - 0.58,
          o - 0.02,
          o + 0.02,
        );
      }
    },
  };
}
ji.push(lo);
function uo(e, t, n, i, a, o, s, c = 1.6) {
  (e.box(i, t, n, a - 0.05, a + 0.05, o, o + c, s - 0.05, s + 0.05),
    e.box(
      i,
      t,
      n,
      a - c * 0.3,
      a + c * 0.3,
      o + c * 0.66,
      o + c * 0.73,
      s - 0.05,
      s + 0.05,
    ),
    e.box(
      i,
      t,
      n,
      a - c * 0.16,
      a + c * 0.16,
      o + c * 0.84,
      o + c * 0.89,
      s - 0.05,
      s + 0.05,
    ),
    e.add(
      i,
      new r(c * 0.4, c * 0.06, 0.1)
        .rotateZ(-0.35)
        .translate(a, o + c * 0.32, s),
      t,
      n,
    ));
}
function fo(e, t, n) {
  let a = 1.4,
    o = 6.6,
    c = 4.4,
    u = 3.8000000000000003 / 2,
    d = n.gableCell,
    f = n.grid[0][0];
  Zi(e, `alLogsGrey`, t, n, a, o, 0, 7.2, -0.6, c);
  for (let [r, i] of [
    [a, -1],
    [o, 1],
  ])
    for (let a = 0.2, o = 0; a < 7.1000000000000005; a += 0.34, o++) {
      let c = Xi(n, r, a);
      o % 2
        ? e.add(
            `alLogsGrey`,
            new s(0.16, 0.16, 0.7, 7)
              .rotateX(Math.PI / 2)
              .translate(r + i * 0.02, a, 4.550000000000001),
            t,
            c,
          )
        : e.add(
            `alLogsGrey`,
            new s(0.16, 0.16, 0.7, 7)
              .rotateZ(Math.PI / 2)
              .translate(r + i * 0.25, a, 4.2),
            t,
            c,
          );
    }
  (e.add(
    `alAspen`,
    Oi(new i(3.9, 1.2, 4).rotateY(Math.PI / 4).translate(4, 7.7, u)),
    t,
    d,
  ),
    e.add(
      `alLogsGrey`,
      new s(2.1, 2.1, 3.6, 8).rotateY(Math.PI / 8).translate(4, 9.4, u),
      t,
      d,
    ));
  for (let n = 0; n < 8; n += 2) {
    let r = (n / 8) * Math.PI * 2;
    e.box(
      `glassGrey`,
      t
        .clone()
        .multiply(new l().makeTranslation(4, 0, u))
        .multiply(new l().makeRotationY(r)),
      d,
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
    new s(2.25, 2.45, 0.5, 8)
      .rotateY(Math.PI / 8)
      .translate(4, 11.350000000000001, u),
    t,
    d,
  ),
    e.add(
      `alAspen`,
      Oi(
        new i(2.3, 7, 8)
          .rotateY(Math.PI / 8)
          .translate(4, 15.100000000000001, u),
      ),
      t,
      d,
    ),
    e.add(`alBoardGrey`, new s(0.35, 0.4, 0.9, 8).translate(4, 18.65, u), t, d),
    da(e, t, d, `alAspen`, fa(1.4, 1.6), 4, 19.099999999999998, u, 12),
    uo(e, t, d, `alGilt`, 4, 20.65, u, 1.7),
    e.box(`alBoardBrown`, t, f, 3.4, 4.6, 0, 2.3, c, 4.46));
  let p = 2.6,
    m = Math.tan(42 * Ci),
    g = 1.4 * m;
  for (let n of [-1, 1]) {
    e.box(
      `alBoardBrown`,
      t,
      f,
      4 + n * 1.15 - 0.09,
      4 + n * 1.15 + 0.09,
      0.3,
      p,
      6.6000000000000005,
      6.780000000000001,
    );
    for (let r of [0.9, 1.7])
      e.add(
        `alBoardBrown`,
        new w(0.12, 8, 6).translate(4 + n * 1.15, r, 6.69),
        t,
        f,
      );
    e.add(
      `alAspen`,
      new r(
        Math.hypot(1.5999999999999999, 1.5999999999999999 * m),
        0.08,
        2.6999999999999997,
      )
        .rotateZ(-n * Math.atan(m))
        .translate(4 + (n * 1.5999999999999999) / 2, p + g / 2 - 0.05, 5.75),
      t,
      f,
    );
  }
  (e.add(
    `alBoardBrown`,
    new S(
      new C(
        [
          [2.6, p],
          [5.4, p],
          [4, p + g - 0.15],
        ].map(([e, t]) => new h(e, t)),
      ),
      { depth: 0.05, bevelEnabled: !1 },
    ).translate(0, 0, 6.740000000000001),
    t,
    f,
  ),
    e.box(`alBoardGrey`, t, f, 2.7, 5.3, 0, 0.3, c, 6.800000000000001));
  for (let n = 1; n <= 2; n++)
    e.box(
      `alBoardGrey`,
      t,
      f,
      3.2,
      4.8,
      0,
      0.3 - n * 0.1,
      6.800000000000001 + (n - 1) * 0.3,
      6.800000000000001 + n * 0.3,
    );
  let _ = Xi(n, 4, 5);
  (e.box(`alBoardBrown`, t, _, 3.55, 4.45, 3.4, 4.5, c, 4.48),
    e.box(`alGilt`, t, _, 3.7, 4.3, 3.55, 4.35, 4.48, 4.5));
}
function po(e, t, n) {
  let r = n.L / 2,
    a = 2.8,
    o = 4.4,
    c = n.grid[0][0];
  (e.add(
    `alLogsGrey`,
    new s(a, a, o, 4, 1, !1, -Math.PI / 2, Math.PI).translate(r, o / 2, 0),
    t,
    c,
  ),
    e.add(
      `alAspen`,
      Oi(new i(3.3, 2.6, 4, 1, !1, -Math.PI / 2, Math.PI).translate(r, 5.7, 0)),
      t,
      c,
    ),
    e.add(`alBoardGrey`, new s(0.3, 0.3, 0.9, 8).translate(r, 7.2, 0.5), t, c),
    da(e, t, c, `alAspen`, fa(0.9, 1), r, 7.6000000000000005, 0.5, 10),
    uo(e, t, c, `alGilt`, r, 8.600000000000001, 0.5, 1));
  let u = a * Math.cos(Math.PI / 8);
  for (let n of [-Math.PI / 8, Math.PI / 8]) {
    let i = t
      .clone()
      .multiply(new l().makeTranslation(r, 0, 0))
      .multiply(new l().makeRotationY(n));
    (e.box(`glassGrey`, i, c, -0.3, 0.3, 2, 3, u - 0.01, u + 0.02),
      e.box(`alWhite`, i, c, -0.4, 0.4, 3, 3.2, u - 0.02, u + 0.08));
  }
}
