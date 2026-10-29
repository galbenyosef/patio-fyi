// assets__lab-buildings-view-DY6ytqNM 66 — box
// Lines 20478-20788 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function go(e, t, n) {
  ia({
    d: 2.6,
    y: 0.45,
    top: 3,
    rise: 0.4,
    roof: `alTinRed`,
    trim: `trimWhite`,
    deck: `alBoardGrey`,
    rail: !0,
    steps: [7],
    stepW: 2,
    gap: 2.8,
    snow: !0,
  })(e, t, n);
  let r = 3.3;
  for (let [i, a, o] of Zi(n, 1, n.L - 1))
    (e.box(`alRed`, t, n.grid[0][o], i, a, 3.25, 4.1, 2.34, 2.38),
      e.box(`alSignFur`, t, n.grid[0][o], i, a, r, 4.05, 2.38, 2.4, {
        planar: (e, t) => [(e - 1) / (n.L - 2), (t - r) / 0.75],
      }));
  for (let r of [1.2, 4.7, 9.3, 12.8])
    k(e, `alRed`, t, n.grid[0][Ei(n, r)], [r, 3.8, 2.32], [r, 3.55, 0.6], 0.06);
  let i = n.grid[0][0];
  for (let [n, r, a] of [
    [0.6, 0.45, 0.6],
    [1.5, 0.45, 0.6],
    [1.05, 0.95, 0.6],
    [0.6, 0.45, 1.3],
  ]) {
    e.box(`alFur`, t, i, n - 0.42, n + 0.42, r, r + 0.5, a - 0.3, a + 0.3);
    for (let o of [-0.2, 0.2])
      e.box(
        `alCanvas`,
        t,
        i,
        n + o - 0.03,
        n + o + 0.03,
        r - 0.01,
        r + 0.51,
        a - 0.31,
        a + 0.31,
      );
  }
  let a = n.grid[0][n.nb - 1];
  for (let [n, r] of [
    [12.4, 0.6],
    [13.1, 0.6],
    [12.75, 1.3],
  ])
    (e.add(`tank`, new C(0.3, 0.3, 0.85, 12).translate(n, 0.87, r), t, a),
      e.add(
        Ci,
        new o(0.3, 0.02, 4, 12).rotateX(Math.PI / 2).translate(n, 1.05, r),
        t,
        a,
      ));
  let s = 4.2,
    c = n.grid[0][3];
  for (let n of [-0.3, 0.3])
    (e.box(
      `woodDark`,
      t,
      c,
      7.999999999999999,
      10.2,
      0.02,
      0.07,
      s + n - 0.03,
      s + n + 0.03,
    ),
      k(
        e,
        `woodDark`,
        t,
        c,
        [7.999999999999999, 0.05, s + n],
        [7.6499999999999995, 0.35, s + n],
        0.05,
      ),
      k(e, `woodDark`, t, c, [10.1, 0.07, s + n], [10.2, 1, s + n], 0.04));
  for (let n = 8.1; n < 10.1; n += 0.2)
    e.box(
      `alBoardBrown`,
      t,
      c,
      n,
      n + 0.14,
      0.3,
      0.34,
      3.8600000000000003,
      4.54,
    );
  for (let n of [-0.3, 0.3])
    e.box(
      `woodDark`,
      t,
      c,
      8.2,
      8.239999999999998,
      0.07,
      0.3,
      s + n - 0.02,
      s + n + 0.02,
    );
  e.box(`woodDark`, t, c, 10.16, 10.239999999999998, 0.95, 1, 3.87, 4.53);
}
function _o(e, t, n) {
  let r = n.grid[0][1],
    i = 1.2;
  for (let n of [1.6, 6.2])
    for (let a of [-0.6, 0.6])
      k(e, `timber`, t, r, [n, 0, i + a], [n, 1.3, i + a * 0.9], 0.1);
  for (let n of [1.6, 6.2])
    e.box(`timber`, t, r, n - 0.07, n + 0.07, 1.2, 1.32, 0.3999999999999999, 2);
  for (let [n, a] of [
    [1.32, `alGreen`],
    [1.75, `alRed`],
  ]) {
    let o = [];
    for (let e = 0; e <= 10; e++) {
      let t = e / 10;
      o.push([0.42 * Math.sin(Math.PI * t) ** 0.7, t * 5.2]);
    }
    e.add(
      a,
      new g(
        o.map(([e, t]) => new y(Math.max(e, 0.01), t)),
        12,
        Math.PI,
        Math.PI,
      )
        .rotateZ(-Math.PI / 2)
        .scale(1, 0.75, 1)
        .translate(1.3, n, i),
      t,
      r,
    );
  }
}
function vo() {
  let e = {
    ridge: `x`,
    pitch: 38 * Si,
    over: 0.5,
    mat: `alTinRed`,
    fascia: `alRed`,
    gutter: !0,
  };
  return (
    qi(`alSignFur`, `NORTHERN FUR & SUPPLY CO.   ·   EST. 1868`, {
      bg: 15921386,
      fg: 11022378,
      aspect: 0.75 / 12,
      size: 0.66,
      spacing: 0.12,
    }),
    {
      key: `alFurPost`,
      name: `Northern Fur & Supply Co.`,
      plain: 15657954,
      desc: `Canadian trading post: white clapboard with red corners, trim and tin roof, twin display windows under a snowy porch with a big name board, fur bales, barrels and a dog sled out front, canoes racked on the side.`,
      W: 14,
      D: 10,
      style: {
        wall: `alLapWhite`,
        t: 0.22,
        bay: 2.8,
        floors: [3.4, 2.6],
        win: {
          w: 1.1,
          h: 1.6,
          sill: 0.9,
          type: `grid`,
          lites: [2, 3],
          frame: `alRed`,
          casing: `trimWhite`,
          rec: 0.08,
          curtains: 0.5,
        },
        store: { frame: `alRed`, fascia: `alRed` },
        door: {
          w: 1.6,
          h: 2.3,
          transom: 0.4,
          frame: `alRed`,
          glazed: !0,
          mat: `alRed`,
          rec: 0.15,
        },
        base: { mat: `alRubble`, h: 0.45, out: 0.04 },
        corners: `alRed`,
        eaveTrim: `alRed`,
        loading: {
          type: `barn`,
          mat: `alBoardGrey`,
          trim: `alRed`,
          w: 2.2,
          h: 2.6,
        },
        roof: e,
      },
      front: {
        kinds: (e, t) =>
          e === 0
            ? t === 2
              ? `door`
              : t === 1 || t === 3
                ? `store`
                : `window`
            : `window`,
        extra: go,
      },
      back: { kinds: (e, t) => (e === 0 && t === 3 ? `loading` : `window`) },
      right: { kinds: (e, t) => (e === 0 && t === 1 ? `solid` : `window`) },
      left: { kinds: (e, t) => (e === 0 ? `solid` : `window`), extra: _o },
      extra: (t, n, r) => {
        (oa(t, n, r, e, `alSnow`, 0, 0.18),
          j(t, n, `brickRed`, 3.5, 0, r.H - 0.5, r.roofTop + 0.8, 0.8, 0.6),
          pa(t, n, -r.W / 2 - 1.5, r.D / 2 + 3.5, 9, `alRed`, `alWhite`));
      },
    }
  );
}
Ai.push(vo);
var yo = (e) => (t, n, r) => {
  let i = r.gableCell,
    a = Math.tan(e),
    o = r.L / 2 + r.t,
    s = r.H + r.t * a,
    c = r.H + (r.L / 2 + r.t) * a;
  for (let e of [-1, 1]) {
    let l = Math.hypot(o, o * a) + 0.3,
      u = Math.atan(a),
      d = r.L / 2 + (e * o) / 2,
      f = (s + c) / 2 - (r.t * a) / 2,
      p = n
        .clone()
        .multiply(new E().makeTranslation(d, f + 0.45, -r.t / 2))
        .multiply(new E().makeRotationZ(-e * u));
    (t.box(
      `alRubbleWarm`,
      p,
      i,
      -l / 2,
      l / 2,
      -0.8,
      0.35,
      -r.t / 2 - 0.02,
      r.t / 2 + 0.08,
    ),
      t.box(
        `alGranite`,
        p,
        i,
        -l / 2,
        l / 2,
        0.35,
        0.47,
        -r.t / 2 - 0.08,
        r.t / 2 + 0.14,
      ));
  }
  for (let e of [-1, 1]) {
    let i = e < 0 ? -r.t : r.L + r.t,
      a = Yi(r, e < 0 ? 0.1 : r.L - 0.1, r.H - 0.3);
    for (let o = 0; o < 3; o++) {
      let s = 0.1 + o * 0.12;
      t.box(
        `alGranite`,
        n,
        a,
        e < 0 ? i - s : i - 0.3,
        e < 0 ? i + 0.3 : i + s,
        r.H - 0.7 + o * 0.2,
        r.H - 0.5 + o * 0.2,
        -r.t,
        0.12,
      );
    }
  }
  (t.box(
    `alRubbleWarm`,
    n,
    i,
    r.L / 2 - 0.9,
    r.L / 2 + 0.9,
    c - 1.2,
    c + 1.5,
    -r.t - 0.1,
    0.12,
  ),
    t.box(
      `alGranite`,
      n,
      i,
      r.L / 2 - 1,
      r.L / 2 + 1,
      c + 1.5,
      c + 1.65,
      -r.t - 0.2,
      0.22,
    ));
  for (let e of [-0.45, 0.45])
    t.add(
      `brickRed`,
      new C(0.12, 0.15, 0.45, 8).translate(r.L / 2 + e, c + 1.85, -r.t / 2),
      n,
      i,
    );
};
