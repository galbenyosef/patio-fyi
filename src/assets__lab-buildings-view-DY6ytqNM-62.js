// assets__lab-buildings-view-DY6ytqNM 62 — box
// Lines 19242-19551 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function eo() {
  let e = {
    ridge: `z`,
    pitch: 26 * Si,
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
      extra: A(Qa, Ca(`alLogsGrey`, 0.13, 0.26)),
    },
    back: { kinds: () => `solid`, extra: Ca(`alLogsGrey`, 0.13, 0.26) },
    right: { kinds: (e, t) => (t === 0 ? `window` : `solid`) },
    left: { kinds: () => `solid`, extra: $a },
    extra: (t, n, r) => {
      oa(t, n, r, e, `alSnow`, 0, 0.2);
      let i = -0.8;
      (t.add(
        `aluminum`,
        new C(0.13, 0.13, 2.2, 10).translate(1, r.H + 1.2, i),
        n,
        0,
      ),
        t.add(
          `aluminum`,
          new d(0.3, 0.25, 10).translate(1, r.H + 2.45, i),
          n,
          0,
        ),
        t.add(
          `alBlack`,
          new C(0.18, 0.18, 0.35, 8, 1, !0).translate(1, r.H + 2.17, i),
          n,
          0,
        ));
    },
  };
}
Ai.push(eo);
var to = (e) => (t, n, r) => {
  let i = r.gableCell,
    o = r.L,
    s = r.H,
    c = Math.tan(e),
    l = o / 2 + 0.55,
    u = l * c,
    d = o / 2,
    f = Math.hypot(l, u);
  for (let e of [-1, 1]) {
    let r = Math.atan2(u, l),
      o = [-e * Math.sin(r), -Math.cos(r)],
      p = n
        .clone()
        .multiply(
          new E().makeTranslation(
            d + (e * l) / 2 + o[0] * 0.28,
            s - 0.55 * c + u / 2 + o[1] * 0.28 + 0.08,
            0.63,
          ),
        )
        .multiply(new E().makeRotationZ(-e * r));
    t.add(`alFretWhite`, new a(f, 0.45, 0.02), p, i, {
      planar: (e, t) => [e / 0.6, t / 0.45 + 0.5],
    });
  }
  let p = s + (o / 2) * c;
  (t.box(`alWhite`, n, i, d - 0.15, d + 0.15, p - 1.3, p - 0.1, 0.6, 0.64),
    t.box(`alBlue`, n, i, d - 0.1, d + 0.1, p - 1.2, p - 0.3, 0.64, 0.66));
  let m = s + 0.35,
    h = m + 0.8,
    g = d - 0.55,
    _ = d + 0.55,
    v = m - 0.42,
    y = h + 0.52;
  (t.box(`glass`, n, i, d - 0.33, d + 0.33, m, h, 0.01, 0.02),
    t.box(`alWhite`, n, i, d - 0.02, d + 0.02, m, h, 0.02, 0.04),
    t.box(`alNalich`, n, i, g, _, v, y, 0.02, 0.03, {
      planar: (e, t) => [(e - g) / (_ - g), (t - v) / (y - v)],
    }));
};
function no(e, t, n) {
  let r = n.ys[1],
    o = 1.7,
    s = 0.15,
    c = 2.25,
    l = n.grid[1][0],
    u = n.grid[0][0];
  e.box(`alBoardGrey`, t, u, s, c, r - 0.12, r, 0, o);
  for (let n of [0.25, 2.15])
    e.box(`alBoardBrown`, t, u, n - 0.1, n + 0.1, 0, r, 1.5, o);
  for (let n of [0.25, 2.15]) {
    e.box(`alBoardBrown`, t, l, n - 0.08, n + 0.08, r, r + 2.3, 1.52, 1.68);
    for (let a of [0.6, 1.4])
      e.add(
        `alBoardBrown`,
        new i(0.11, 8, 6).translate(n, r + a, 1.5999999999999999),
        t,
        l,
      );
  }
  e.box(
    `alFretWhite`,
    t,
    l,
    s,
    c,
    r + 0.05,
    r + 0.95,
    1.58,
    1.5999999999999999,
    { planar: (e, t) => [e / 0.6, (t - r) / 0.9] },
  );
  let d = r + 2.3,
    f = 1.3,
    p = 2.4 / 2,
    m = Math.tan(40 * Si),
    h = f * m;
  for (let n of [-1, 1])
    e.add(
      `alBoardGrey`,
      new a(Math.hypot(f, h) + 0.1, 0.08, 2.2)
        .rotateZ(-n * Math.atan(m))
        .translate(p + (n * f) / 2, d + h / 2 + 0.04, 2.2 / 2),
      t,
      l,
    );
  for (let n of [-1, 1])
    e.add(
      `alSnow`,
      new a(Math.hypot(f, h) - 0.2, 0.1, 2)
        .rotateZ(-n * Math.atan(m))
        .translate(p + (n * f) / 2 - n * 0.05, d + h / 2 + 0.14, 2.2 / 2),
      t,
      l,
    );
  e.add(
    `alBoardBrown`,
    new w(
      new T(
        [
          [0.1499999999999999, d],
          [2.25, d],
          [p, d + h - 0.3],
        ].map(([e, t]) => new y(e, t)),
      ),
      { depth: 0.05, bevelEnabled: !1 },
    ).translate(0, 0, 1.6199999999999999),
    t,
    l,
  );
  let g = 0.3;
  for (let i = 1; i <= 7; i++)
    e.box(
      `alBoardGrey`,
      t,
      n.grid[0][Ei(n, c + i * g)],
      c + (i - 1) * g,
      c + i * g,
      r - (i * r) / 8 - 0.05,
      r - (i * r) / 8,
      0.3,
      1.4,
    );
  for (let i of [0.3, 1.35])
    k(e, `alBoardBrown`, t, n.grid[0][1], [c, r, i], [4.65, 0, i], 0.08);
  k(
    e,
    `alBoardBrown`,
    t,
    n.grid[0][1],
    [c, r + 0.95, 1.4],
    [4.35, r * 0.15 + 0.9, 1.4],
    0.06,
  );
}
function ro() {
  let e = 38 * Si,
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
    a = $i(r, n, `alNalich`, [0.3, 0.68, 0.85], { floors: [1] }),
    o = $i(i, n, `alNalich`, [0.3, 0.68, 0.85], { floors: [1] });
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
      extra: A(
        a,
        ea(r, n, { mat: `alBlue`, floors: [1] }),
        Ca(`alLogsDark`, 0.15, 0.29),
        to(e),
      ),
    },
    back: {
      kinds: (e, t) => (t === 1 ? `window` : `solid`),
      extra: A(Ca(`alLogsDark`, 0.15, 0.29), to(e)),
    },
    right: { kinds: i, extra: A(o, no) },
    left: {
      kinds: (e, t) =>
        (e === 1 && t % 2) || (e === 0 && t === 2) ? `window` : `solid`,
      extra: $i(
        (e, t) => (e === 1 && t % 2 ? `window` : `solid`),
        n,
        `alNalich`,
        [0.3, 0.68, 0.85],
        { floors: [1] },
      ),
    },
    extra: (e, n, r) => {
      (oa(e, n, r, t, `alSnow`, 0, 0.2),
        j(
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
Ai.push(ro);
