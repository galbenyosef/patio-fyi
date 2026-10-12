// assets__lab-buildings-view-DJVr8phc 62 — box
// Lines 19242-19551 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function to() {
  let e = {
    ridge: `z`,
    pitch: 26 * Ci,
    over: 0.7,
    mat: `alTinBlack`,
    fascia: `alBoardGrey`,
  };
  return {
    key: `alSauna`,
    name: `Rantasauna`,
    plain: 8024680,
    desc: `Finnish lakeside smoke sauna: silver-grey weathered logs with crossed corners, black tin roof under snow with a steel chimney and spark guard, boarded deck with a bench and bucket, jetty out to the lake with a swim ladder.`,
    W: 5,
    D: 4.5,
    style: {
      wall: `alLogsGrey`,
      t: 0.25,
      bay: 2.5,
      floors: [2.3],
      win: {
        w: 0.6,
        h: 0.45,
        sill: 1.25,
        type: `grid`,
        lites: [2, 1],
        frame: `alBoardGrey`,
        rec: 0.15,
        curtains: 0,
      },
      door: {
        w: 0.75,
        h: 1.85,
        transom: 0,
        frame: `alBoardGrey`,
        mat: `alBoardGrey`,
        rec: 0.15,
      },
      base: { mat: `alRubble`, h: 0.3, out: 0.04 },
      roof: e,
    },
    front: {
      kinds: (e, t) => (t === 0 ? `door` : `window`),
      extra: k($a, wa(`alLogsGrey`, 0.13, 0.26)),
    },
    back: { kinds: () => `solid`, extra: wa(`alLogsGrey`, 0.13, 0.26) },
    right: { kinds: (e, t) => (t === 0 ? `window` : `solid`) },
    left: { kinds: () => `solid`, extra: eo },
    extra: (t, n, r) => {
      sa(t, n, r, e, `alSnow`, 0, 0.2);
      let a = -0.8;
      (t.add(
        `aluminum`,
        new s(0.13, 0.13, 2.2, 10).translate(1, r.H + 1.2, a),
        n,
        0,
      ),
        t.add(
          `aluminum`,
          new i(0.3, 0.25, 10).translate(1, r.H + 2.45, a),
          n,
          0,
        ),
        t.add(
          `alBlack`,
          new s(0.18, 0.18, 0.35, 8, 1, !0).translate(1, r.H + 2.17, a),
          n,
          0,
        ));
    },
  };
}
ji.push(to);
var no = (e) => (t, n, i) => {
  let a = i.gableCell,
    o = i.L,
    s = i.H,
    c = Math.tan(e),
    u = o / 2 + 0.55,
    d = u * c,
    f = o / 2,
    p = Math.hypot(u, d);
  for (let e of [-1, 1]) {
    let i = Math.atan2(d, u),
      o = [-e * Math.sin(i), -Math.cos(i)],
      m = n
        .clone()
        .multiply(
          new l().makeTranslation(
            f + (e * u) / 2 + o[0] * 0.28,
            s - 0.55 * c + d / 2 + o[1] * 0.28 + 0.08,
            0.63,
          ),
        )
        .multiply(new l().makeRotationZ(-e * i));
    t.add(`alFretWhite`, new r(p, 0.45, 0.02), m, a, {
      planar: (e, t) => [e / 0.6, t / 0.45 + 0.5],
    });
  }
  let m = s + (o / 2) * c;
  (t.box(`alWhite`, n, a, f - 0.15, f + 0.15, m - 1.3, m - 0.1, 0.6, 0.64),
    t.box(`alBlue`, n, a, f - 0.1, f + 0.1, m - 1.2, m - 0.3, 0.64, 0.66));
  let h = s + 0.35,
    g = h + 0.8,
    _ = f - 0.55,
    v = f + 0.55,
    y = h - 0.42,
    b = g + 0.52;
  (t.box(`glass`, n, a, f - 0.33, f + 0.33, h, g, 0.01, 0.02),
    t.box(`alWhite`, n, a, f - 0.02, f + 0.02, h, g, 0.02, 0.04),
    t.box(`alNalich`, n, a, _, v, y, b, 0.02, 0.03, {
      planar: (e, t) => [(e - _) / (v - _), (t - y) / (b - y)],
    }));
};
function ro(e, t, n) {
  let i = n.ys[1],
    a = 1.7,
    o = 0.15,
    s = 2.25,
    c = n.grid[1][0],
    l = n.grid[0][0];
  e.box(`alBoardGrey`, t, l, o, s, i - 0.12, i, 0, a);
  for (let n of [0.25, 2.15])
    e.box(`alBoardBrown`, t, l, n - 0.1, n + 0.1, 0, i, 1.5, a);
  for (let n of [0.25, 2.15]) {
    e.box(`alBoardBrown`, t, c, n - 0.08, n + 0.08, i, i + 2.3, 1.52, 1.68);
    for (let r of [0.6, 1.4])
      e.add(
        `alBoardBrown`,
        new w(0.11, 8, 6).translate(n, i + r, 1.5999999999999999),
        t,
        c,
      );
  }
  e.box(
    `alFretWhite`,
    t,
    c,
    o,
    s,
    i + 0.05,
    i + 0.95,
    1.58,
    1.5999999999999999,
    { planar: (e, t) => [e / 0.6, (t - i) / 0.9] },
  );
  let u = i + 2.3,
    d = 1.3,
    f = 2.4 / 2,
    p = Math.tan(40 * Ci),
    m = d * p;
  for (let n of [-1, 1])
    e.add(
      `alBoardGrey`,
      new r(Math.hypot(d, m) + 0.1, 0.08, 2.2)
        .rotateZ(-n * Math.atan(p))
        .translate(f + (n * d) / 2, u + m / 2 + 0.04, 2.2 / 2),
      t,
      c,
    );
  for (let n of [-1, 1])
    e.add(
      `alSnow`,
      new r(Math.hypot(d, m) - 0.2, 0.1, 2)
        .rotateZ(-n * Math.atan(p))
        .translate(f + (n * d) / 2 - n * 0.05, u + m / 2 + 0.14, 2.2 / 2),
      t,
      c,
    );
  e.add(
    `alBoardBrown`,
    new S(
      new C(
        [
          [0.1499999999999999, u],
          [2.25, u],
          [f, u + m - 0.3],
        ].map(([e, t]) => new h(e, t)),
      ),
      { depth: 0.05, bevelEnabled: !1 },
    ).translate(0, 0, 1.6199999999999999),
    t,
    c,
  );
  let g = 0.3;
  for (let r = 1; r <= 7; r++)
    e.box(
      `alBoardGrey`,
      t,
      n.grid[0][Di(n, s + r * g)],
      s + (r - 1) * g,
      s + r * g,
      i - (r * i) / 8 - 0.05,
      i - (r * i) / 8,
      0.3,
      1.4,
    );
  for (let r of [0.3, 1.35])
    D(e, `alBoardBrown`, t, n.grid[0][1], [s, i, r], [4.65, 0, r], 0.08);
  D(
    e,
    `alBoardBrown`,
    t,
    n.grid[0][1],
    [s, i + 0.95, 1.4],
    [4.35, i * 0.15 + 0.9, 1.4],
    0.06,
  );
}
function io() {
  let e = 38 * Ci,
    t = {
      ridge: `z`,
      pitch: e,
      over: 0.7,
      mat: `alBoardGrey`,
      fascia: `alBoardBrown`,
    },
    n = {
      win0: {
        w: 0.45,
        h: 0.3,
        sill: 0.55,
        type: `grid`,
        lites: [1, 1],
        frame: `alBoardBrown`,
        rec: 0.2,
        curtains: 0,
      },
      win: {
        w: 0.9,
        h: 1.3,
        sill: 0.7,
        type: `grid`,
        lites: [2, 3],
        frame: `alWhite`,
        rec: 0.16,
        curtains: 0.9,
      },
    },
    r = () => `window`,
    i = (e, t) =>
      e === 1 && t === 0 ? `door` : e === 1 && t === 1 ? `solid` : `window`,
    a = ea(r, n, `alNalich`, [0.3, 0.68, 0.85], { floors: [1] }),
    o = ea(i, n, `alNalich`, [0.3, 0.68, 0.85], { floors: [1] });
  return {
    key: `alIzba`,
    name: `Izba on Rechnaya Street`,
    plain: 3811352,
    desc: `Russian village izba: dark log walls with crossed corners over a storage podklet, three street windows in white-and-blue carved nalichniki with blue shutters, fretted barge boards and towel pendant, attic svetyolka, covered side kryltso and stair.`,
    W: 7.5,
    D: 10,
    style: {
      wall: `alLogsDark`,
      t: 0.3,
      bay: 2.5,
      floors: [1.3, 3],
      ...n,
      door: {
        w: 0.95,
        h: 2,
        transom: 0,
        frame: `alBoardBrown`,
        mat: `alBoardBrown`,
        rec: 0.2,
      },
      roof: t,
    },
    front: {
      kinds: r,
      extra: k(
        a,
        ta(r, n, { mat: `alBlue`, floors: [1] }),
        wa(`alLogsDark`, 0.15, 0.29),
        no(e),
      ),
    },
    back: {
      kinds: (e, t) => (t === 1 ? `window` : `solid`),
      extra: k(wa(`alLogsDark`, 0.15, 0.29), no(e)),
    },
    right: { kinds: i, extra: k(o, ro) },
    left: {
      kinds: (e, t) =>
        (e === 1 && t % 2) || (e === 0 && t === 2) ? `window` : `solid`,
      extra: ea(
        (e, t) => (e === 1 && t % 2 ? `window` : `solid`),
        n,
        `alNalich`,
        [0.3, 0.68, 0.85],
        { floors: [1] },
      ),
    },
    extra: (e, n, r) => {
      (sa(e, n, r, t, `alSnow`, 0, 0.2),
        A(
          e,
          n,
          `alStuccoWhite`,
          -1.2,
          -1,
          r.H - 0.5,
          r.roofTop + 0.3,
          0.7,
          0.7,
        ));
    },
  };
}
ji.push(io);
