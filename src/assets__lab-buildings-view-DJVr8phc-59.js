// assets__lab-buildings-view-DJVr8phc 59 — box
// Lines 18328-18621 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function Ha(e, t, n) {
  let r = -1.4,
    i = n.grid[0][0],
    a = 2.6;
  for (let n of [0.6, 3.4, 6.2])
    for (let o of [-1, 1])
      D(e, `timber`, t, i, [n, r, a + o * 0.9], [n, 1.6, a], 0.1);
  for (let n of [1.2, 2.2])
    e.add(
      `timber`,
      new s(0.05, 0.05, 6.2, 6)
        .rotateZ(Math.PI / 2)
        .translate(3.4, r + n + (n > 2 ? 0.5 : 0), a + (n > 2 ? 0 : 0.35)),
      t,
      i,
    );
  for (let n = 0.9; n < 6; n += 0.26)
    for (let [o, s] of [
      [1.2, 0.35],
      [2.7, 0],
    ])
      (e.box(
        `alCanvas`,
        t,
        i,
        n - 0.06,
        n + 0.06,
        r + o - 0.75,
        r + o - 0.02,
        a + s - 0.02,
        a + s + 0.02,
      ),
        e.box(
          `alCanvas`,
          t,
          i,
          n - 0.07,
          n + 0.07,
          r + o - 0.75,
          r + o - 0.02,
          a + s + 0.05,
          a + s + 0.08,
        ));
}
function Ua() {
  let e = {
      ridge: `z`,
      pitch: 38 * Ci,
      over: 0.45,
      mat: `alTileBlack`,
      fascia: `trimWhite`,
    },
    t = { kinds: () => `solid`, extra: null };
  return {
    key: `alRorbu`,
    name: `Rorbu No. 14`,
    plain: 9316896,
    desc: `Norwegian rorbu: red-planked fisherman’s cabin with white trim on timber piles over the shore, black tile roof under snow, plank brygge deck with bollards and steps, loft hatch, stockfish drying rack.`,
    W: 7,
    D: 10,
    style: {
      wall: `alRorbu`,
      t: 0.2,
      bay: 2.33,
      floors: [3],
      win: {
        w: 0.9,
        h: 1.1,
        sill: 0.95,
        type: `grid`,
        lites: [2, 3],
        frame: `trimWhite`,
        casing: `trimWhite`,
        rec: 0.08,
        curtains: 0.7,
      },
      door: {
        w: 0.95,
        h: 2.05,
        transom: 0,
        frame: `trimWhite`,
        mat: `alWhite`,
        rec: 0.1,
      },
      corners: `trimWhite`,
      eaveTrim: `trimWhite`,
    },
    tiers: [
      {
        W: 3,
        D: 3,
        floors: [1.4],
        style: { wall: `alRubble`, corners: null, eaveTrim: null },
        front: t,
        back: t,
        left: t,
        right: t,
      },
      { floors: [3], soffit: !0, style: { roof: e } },
    ],
    front: { kinds: (e, t) => (t === 1 ? `door` : `window`), extra: Va },
    back: { kinds: () => `window` },
    right: { kinds: (e, t) => (t === 2 ? `solid` : `window`) },
    left: { kinds: (e, t) => (t === 1 ? `solid` : `window`), extra: Ha },
    extra: (t, n, r) => {
      for (let e of [-3.3, 0, 3.3])
        for (let r of [-4.6, -1.5, 1.5, 4.6])
          t.add(
            `timber`,
            new s(0.13, 0.16, 1.45, 8).translate(e, 0.72, r),
            n,
            0,
          );
      for (let e of [-3.3, 3.3])
        for (let [r, i] of [
          [-4.6, -1.5],
          [1.5, 4.6],
        ])
          D(t, `timber`, n, 0, [e, 0.15, r], [e, 1.3, i], 0.07);
      (sa(t, n, r, e, `alSnow`, 0, 0.16),
        A(
          t,
          n,
          `alStuccoWhite`,
          1.4,
          -2.5,
          r.H - 0.5,
          r.roofTop + 0.3,
          0.6,
          0.6,
        ));
    },
  };
}
ji.push(Ua);
function Wa(e, t, n) {
  let i = n.L / 2,
    a = i - 1.3,
    o = i + 1.3,
    s = 2.2,
    c = 2.7,
    l = n.grid[0][Di(n, i)],
    u = 0.45;
  e.box(`alStuccoWhite`, t, l, a - 0.1, o + 0.1, 0, u, 0, 2.3000000000000003);
  for (let [n, r, i, d] of [
    [a, o, 2.1, s],
    [a, a + 0.1, 0, s],
    [o - 0.1, o, 0, s],
  ])
    (e.box(`trimWhite`, t, l, n, r, u, 1.25, i, d),
      e.box(`trimWhite`, t, l, n, r, 2.58, c, i, d));
  for (let [n, r] of [
    [a + 0.05, i - 0.55],
    [i + 0.55, o - 0.05],
  ]) {
    e.box(`glass`, t, l, n, r, 1.25, 2.58, 2.14, 2.1500000000000004);
    for (let i = n; i <= r + 0.01; i += (r - n) / 2)
      e.box(
        `trimWhite`,
        t,
        l,
        i - 0.03,
        i + 0.03,
        1.25,
        2.58,
        2.1100000000000003,
        2.18,
      );
    for (let i of [0.33, 0.66]) {
      let a = 1.25 + 1.3300000000000003 * i;
      e.box(
        `trimWhite`,
        t,
        l,
        n,
        r,
        a - 0.02,
        a + 0.02,
        2.1100000000000003,
        2.18,
      );
    }
  }
  for (let n of [a + 0.03, o - 0.05]) {
    e.box(`glass`, t, l, n, n + 0.02, 1.25, 2.58, 0.1, 2.1);
    for (let r of [0.7, 1.4])
      e.box(
        `trimWhite`,
        t,
        l,
        n - 0.02,
        n + 0.04,
        1.25,
        2.58,
        r - 0.03,
        r + 0.03,
      );
  }
  (e.box(`alGreen`, t, l, i - 0.5, i + 0.5, u, 2.5, 2.12, 2.16),
    e.box(
      `glass`,
      t,
      l,
      i - 0.35,
      i + 0.35,
      1.55,
      2.35,
      2.16,
      2.1700000000000004,
    ));
  for (let n of [-1, 1])
    e.box(
      `trimWhite`,
      t,
      l,
      i + n * 0.55 - 0.05,
      i + n * 0.55 + 0.05,
      u,
      c,
      2.1,
      s,
    );
  for (let n = 1; n <= 2; n++)
    e.box(
      `alStuccoWhite`,
      t,
      l,
      i - 0.7,
      i + 0.7,
      0,
      u - n * 0.15,
      2.3000000000000003 + (n - 1) * 0.3,
      2.3000000000000003 + n * 0.3,
    );
  let d = 30 * Ci,
    f = 1.5,
    p = f * Math.tan(d);
  for (let n of [-1, 1])
    e.add(
      `alTileBlack`,
      new r(Math.hypot(f, p) + 0.1, 0.08, 2.6)
        .rotateZ(-n * d)
        .translate(i + (n * f) / 2, c + p / 2 + 0.05, 2.6 / 2),
      t,
      l,
    );
  (e.add(
    `trimWhite`,
    new S(
      new C(
        [
          [a, c],
          [o, c],
          [i, c + p - 0.1],
        ].map(([e, t]) => new h(e, t)),
      ),
      { depth: 0.06, bevelEnabled: !1 },
    ).translate(0, 0, 2.14),
    t,
    l,
  ),
    e.box(`alFretWhite`, t, l, a + 0.1, o - 0.1, 2.35, c, 2.22, 2.23, {
      planar: (e, t) => [e / 0.65, (t - c + 0.35) / 0.35],
    }));
  let m = n.grid[n.top][Di(n, i)],
    g = n.H + 0.3,
    _ = g + 0.9;
  e.box(`glass`, t, m, i - 0.4, i + 0.4, g, _, 0.01, 0.02);
  for (let [n, r, a, o] of [
    [i - 0.5, i - 0.4, g, _],
    [i + 0.4, i + 0.5, g, _],
    [i - 0.5, i + 0.5, _, _ + 0.1],
    [i - 0.55, i + 0.55, g - 0.1, g],
    [i - 0.03, i + 0.03, g, _],
  ])
    e.box(`trimWhite`, t, m, n, r, a, o, 0, 0.07);
}
var Ga =
  (e, t = 0.8, n = 1) =>
  (r, i, a) => {
    let o = a.gableCell,
      s = a.L / 2,
      c = a.H + e,
      l = c + n;
    r.box(`glass`, i, o, s - t / 2, s + t / 2, c, l, 0.01, 0.02);
    for (let [e, n, a, u] of [
      [s - t / 2 - 0.1, s - t / 2, c, l],
      [s + t / 2, s + t / 2 + 0.1, c, l],
      [s - t / 2 - 0.1, s + t / 2 + 0.1, l, l + 0.1],
      [s - t / 2 - 0.15, s + t / 2 + 0.15, c - 0.1, c],
      [s - 0.03, s + 0.03, c, l],
    ])
      r.box(`trimWhite`, i, o, e, n, a, u, 0, 0.06);
  };
