// assets__lab-buildings-view-DY6ytqNM 180 — math
// Lines 56757-57016 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function qg(e, t, n) {
  let r = n.H + 0.35,
    i = 5.3,
    a = 5.6,
    s = r + a;
  e.add(
    `lmBrickRed`,
    new C(5.3999999999999995, 4.2, 0.9, 32).translate(0, r - 0.45, 0),
    t,
    0,
  );
  for (let n = 0; n < 12; n++) {
    let i = (n / 12) * Math.PI * 2 + Math.PI / 12,
      a = 3.7;
    k(
      e,
      `lmSteel`,
      t,
      0,
      [Math.sin(i) * a, r - 2.6, Math.cos(i) * a],
      [Math.sin(i) * 5.2, r - 0.05, Math.cos(i) * 5.2],
      0.16,
    );
  }
  let l = Fg(e, t, {
    x: 0,
    z: 0,
    y0: r,
    y1: s,
    r0: i,
    mat: `lmRivet`,
    seg: 32,
    band: 2.8,
    q: 4,
  });
  e.add(
    `lmSteel`,
    new c(i, 32).rotateX(Math.PI / 2).translate(0, r + 0.01, 0),
    t,
    0,
  );
  for (let n of [r + 0.1, r + a / 2, s - 0.1])
    e.add(
      `lmSteel`,
      new o(5.33, 0.07, 5, 40).rotateX(Math.PI / 2).translate(0, n, 0),
      t,
      l.at(0, n),
    );
  (yg(e, `lmTimberGrey`, t, 0, 0, 0, r - 0.1, r, 6.3, 6.3, 32),
    e.add(
      J,
      new o(6.25, 0.035, 4, 48).rotateX(Math.PI / 2).translate(0, r + 1, 0),
      t,
      0,
    ));
  for (let n = 0; n < 20; n++) {
    let i = (n / 20) * Math.PI * 2;
    yg(
      e,
      J,
      t,
      0,
      Math.sin(i) * 6.25,
      Math.cos(i) * 6.25,
      r,
      r + 1,
      0.03,
      0.03,
      4,
    );
  }
  (e.add(
    `lmLead`,
    new d(5.6499999999999995, 1.9, 32).translate(0, s + 0.95, 0),
    t,
    0,
  ),
    yg(e, `louver`, t, 0, 0, 0, s + 1.5, s + 2.3, 0.55, 0.55, 12),
    e.add(`lmLead`, new d(0.8, 0.6, 12).translate(0, s + 2.6, 0), t, 0));
  let u = l.at(0, r + 2);
  for (let n of [0.25, 0.75])
    yg(e, J, t, u, n + 1.2, 5.52, r, s + 0.4, 0.03, 0.03, 4);
  for (let n = r + 0.3; n < s + 0.3; n += 0.3)
    e.box(J, t, u, 1.45, 1.95, n - 0.015, n + 0.015, 5.5, 5.54);
  (e.box(
    `lmGauge`,
    t,
    u,
    -0.9,
    -0.3,
    r + 0.6,
    s - 0.6,
    5.359999999999999,
    5.3999999999999995,
    { planar: (e, t) => [(e + 0.9) / 0.6, (t - r - 0.6) / 4.3999999999999995] },
  ),
    e.box(
      `lmMastRed`,
      t,
      u,
      -1,
      -0.2,
      r + a * 0.7 - 0.06,
      r + a * 0.7 + 0.06,
      5.38,
      5.46,
    ),
    mg(n, s + 2.9));
}
function Jg() {
  return {
    key: `lmWaterTower`,
    name: `Wendover Water Tower`,
    plain: 12886118,
    desc: `Victorian railway water tower: yellow-brick shaft with red pilasters, arched windows and corbel table, riveted steel tank on radial brackets, walkway, ladder, level gauge.`,
    W: 7.2,
    D: 7.2,
    style: {
      wall: `lmBrickYellow`,
      t: 0.45,
      bay: 2.4,
      floors: [4.5, 4, 4, 4],
      win0: {
        w: 0.9,
        h: 1.8,
        sill: 1.6,
        type: `grid`,
        lites: [2, 3],
        frame: `lmRailGreen`,
        arch: 0.45,
        archMat: `lmBrickRed`,
        rec: 0.25,
        curtains: 0,
      },
      win: {
        w: 0.75,
        h: 2.1,
        sill: 1.1,
        type: `grid`,
        lites: [2, 4],
        frame: `lmRailGreen`,
        arch: 0.375,
        archMat: `lmBrickRed`,
        sillMat: `lmBathStone`,
        rec: 0.25,
        curtains: 0,
      },
      door: {
        w: 1.4,
        h: 2.5,
        transom: 0.6,
        frame: `lmBathStone`,
        mat: `lmRailGreen`,
        rec: 0.3,
        hood: `lmBathStone`,
      },
      base: { mat: `lmBrickBlue`, h: 0.8, out: 0.05 },
      belt: { mat: `lmBrickRed`, h: 0.3, out: 0.06 },
      pilaster: { mat: `lmBrickRed`, w: 0.45, out: 0.1 },
      cornice: {
        type: `corbel`,
        mat: `lmBrickRed`,
        h: 0.6,
        cap: `lmBathStone`,
      },
    },
    front: { kinds: (e, t) => (e === 0 && t === 1 ? `door` : `window`) },
    back: { kinds: (e, t) => (t === 1 ? `solid` : `window`), extra: Kg },
    right: { kinds: () => `window` },
    left: { kinds: (e, t) => (e === 0 ? `solid` : `window`) },
    extra: qg,
  };
}
var Yg = (e) => (t, n, r) => {
    for (let i of e) {
      let e = fg(r, i, 0.5),
        o = 0.55;
      t.add(
        `lmSteel`,
        new a(1.1, 0.08, 3)
          .translate(0, 0, 3 / 2)
          .rotateX(o)
          .translate(i, 0.2, 0),
        n,
        e,
      );
      for (let r of [-1, 1])
        t.add(
          `lmSteel`,
          new a(0.06, 0.45, 3)
            .translate(0, 0.2, 3 / 2)
            .rotateX(o)
            .translate(i + r * 0.55, 0.2, 0),
          n,
          e,
        );
      let s = Math.cos(o) * 3,
        c = 0.2 - Math.sin(o) * 3;
      (t.add(
        `lmSteel`,
        new a(1, 1.2, 0.06)
          .translate(0, -0.6, 0)
          .rotateX(0.25)
          .translate(i, c + 0.1, s),
        n,
        e,
      ),
        k(t, J, n, e, [i, 1.8, 0.1], [i, 1.3, 2.4], 0.1),
        t.box(J, n, e, i - 0.3, i + 0.3, 1, 1.5, 2.3, 2.8),
        k(t, J, n, e, [i, 1.3, 2.3], [i, c + 0.2, s - 0.2], 0.04));
    }
  },
  Xg = (e, t, n, r) => (i, a, o) => {
    for (let s of e)
      k(i, `lmConcrete`, a, fg(o, s, t + 0.5), [s, t, 0.1], [s, n, r], 0.5);
  };
function Zg(e, t, n) {
  let r = n.H;
  for (let n = 0; n < r + 2; n += 4)
    Ig(e, t, `lmCorrGrey`, -6, -3.9, n, Math.min(n + 4, r + 2), -1.05, 1.05);
  (e.box(
    `lmCorrGrey`,
    t,
    0,
    -6.3,
    -3.6,
    r + 2,
    r + 4.4,
    -1.4500000000000002,
    1.4500000000000002,
  ),
    e.add(
      `lmCorrGrey`,
      Zh(
        new C(0.01, 2, 1.2, 4, 1)
          .rotateY(Math.PI / 4)
          .scale(1, 1, 0.9)
          .translate(-9.9 / 2, r + 5, 0),
      ),
      t,
      0,
    ));
  for (let n = 1; n < r + 2; n += 3.2)
    e.box(
      `lmSteel`,
      t,
      0,
      -6.08,
      -3.82,
      n,
      n + 0.16,
      -1.1300000000000001,
      1.1300000000000001,
    );
  for (let r of [-5.6, 0, 5.6]) zg(e, t, r, n.D / 2 + 4, r, -n.D / 2 - 4);
  for (let n of [5.8, 6.4]) yg(e, J, t, 0, n, 4.4, 0, 15, 0.035, 0.035, 5);
  for (let n = 0.4; n < 15; n += 0.35)
    e.box(J, t, 0, 5.8, 6.4, n - 0.015, n + 0.015, 4.38, 4.42);
  mg(n, r + 5.6);
}
