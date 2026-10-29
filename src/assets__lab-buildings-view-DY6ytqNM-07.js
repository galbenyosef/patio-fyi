// assets__lab-buildings-view-DY6ytqNM 07 — box
// Lines 1846-2005 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
var Nt = (e, t, n) =>
  bt(e, t, n.grid[0][Math.floor(n.nb / 2)], n.L / 2, 2.3, 1.3, 0.05);
function Pt(e, t, n) {
  (e.add(
    `copperGreen`,
    new d(6.2 * Math.SQRT1_2 * 1.02, 3.2, 4)
      .rotateY(Math.PI / 4)
      .translate(0, n.roofTop + 1.6, 0),
    t,
    0,
  ),
    e.add(
      `aluminum`,
      new C(0.06, 0.14, 6, 8).translate(0, n.roofTop + 6, 0),
      t,
      0,
    ),
    e.add(`beacon`, new i(0.2, 10, 8).translate(0, n.roofTop + 9.1, 0), t, 0),
    De(e, t, { H: 31.5 }, `signHerald`, 13, 2.4, 5.8, 0.4));
}
function Ft(e, t, n) {
  let r = n.H + 0.6;
  for (let [n, i] of [
    [8.2, 3.4],
    [6, 3],
    [3.8, 2.6],
  ]) {
    e.box(`limestone`, t, 0, -n / 2, n / 2, r, r + i, -n / 2, n / 2);
    for (let a = -n / 2 + 0.5; a <= n / 2 - 0.45; a += 0.9)
      for (let o of [1, -1])
        (e.box(
          `neonGold`,
          t,
          0,
          a - 0.05,
          a + 0.05,
          r + 0.25,
          r + i - 0.35,
          o > 0 ? n / 2 : -n / 2 - 0.06,
          o > 0 ? n / 2 + 0.06 : -n / 2,
        ),
          e.box(
            `neonGold`,
            t,
            0,
            o > 0 ? n / 2 : -n / 2 - 0.06,
            o > 0 ? n / 2 + 0.06 : -n / 2,
            r + 0.25,
            r + i - 0.35,
            a - 0.05,
            a + 0.05,
          ));
    (e.box(
      `bronze`,
      t,
      0,
      -n / 2 - 0.15,
      n / 2 + 0.15,
      r + i - 0.25,
      r + i,
      -n / 2 - 0.15,
      n / 2 + 0.15,
    ),
      (r += i));
  }
  (e.add(`aluminum`, new C(0.06, 0.7, 12, 12).translate(0, r + 6, 0), t, 0),
    e.add(`beacon`, new i(0.2, 10, 8).translate(0, r + 12.1, 0), t, 0));
}
function It(e, t, n) {
  let r = n.roofTop,
    i = n.W / 2 - 3;
  e.box(`glassGrey`, t, 0, -i, i, r - 0.6, r + 1.3, -1.7, 1.7);
  for (let n = -i; n <= i + 0.01; n += 2)
    e.box(`ironGreen`, t, 0, n - 0.06, n + 0.06, r - 0.6, r + 1.3, -1.75, 1.75);
  e.box(`corrugated`, t, 0, -i - 0.4, i + 0.4, r + 1.3, r + 1.42, -2.3, 2.3);
  let a = n.D / 2 + 2.3;
  [
    `redPaint`,
    `sidingMustard`,
    `neonGreen`,
    `redPaint`,
    `sidingMustard`,
  ].forEach((r, i) => {
    let o = -n.W / 2 + 5 + i * 1.15;
    (e.box(`wood`, t, 0, o - 0.5, o + 0.5, 0, 0.55, a - 0.35, a + 0.35),
      e.box(
        r === `neonGreen` ? `awningGreen` : r,
        t,
        0,
        o - 0.42,
        o + 0.42,
        0.55,
        0.68,
        a - 0.28,
        a + 0.28,
      ));
  });
}
function Lt(e, t, n) {
  for (let [r, i] of [
    [0, `signBeer`],
    [2, `signPool`],
  ]) {
    let a = (r + 0.5) * n.bw;
    e.box(i, t, n.grid[0][r], a - 0.9, a + 0.9, 1.65, 2.5, -0.15, -0.14, {
      planar: (e, t) => [(e - a + 0.9) / 1.8, (t - 1.65) / 0.85],
    });
  }
  gt(
    e,
    t,
    n.grid[1][2],
    `signBilliards`,
    n.L - 0.4,
    4.5,
    9.8,
    0.3,
    1.5,
    0.34,
    `lacquer`,
    { tube: `neonGreen`, bulbs: !0 },
  );
}
function Rt(e, t, n) {
  [`awningRed`, `awningBlue`, `awningMustard`, `awningBlack`].forEach(
    (r, i) => {
      xe(
        { K: e, M: t, S: { awning: { mat: r, depth: 1.6, drop: 0.75 } } },
        n.grid[0][i],
        i * n.bw + 0.3,
        (i + 1) * n.bw - 0.3,
        4.35,
      );
    },
  );
  let r = n.grid[0][0],
    a = n.bw - 0.02,
    o = 0.28;
  e.add(`barberPole`, new C(0.1, 0.1, 1.3, 16).translate(a, 2.2, o), t, r, {
    planar: (e, t, n) => [
      Math.atan2(e - a, n - o) / (Math.PI * 2) + 0.5,
      t / 0.6,
    ],
  });
  for (let n of [1.5, 2.9])
    e.add(`aluminum`, new C(0.13, 0.13, 0.12, 16).translate(a, n, o), t, r);
  (e.add(`bulb`, new i(0.13, 12, 8).translate(a, 3.05, o), t, r),
    e.box(M, t, r, a - 0.03, a + 0.03, 1.8, 2.6, 0, 0.2),
    _t(
      e,
      t,
      n.grid[0][2],
      `neonPink`,
      2 * n.bw + 0.5,
      3 * n.bw - 0.5,
      5.25,
      6.55,
      0.08,
    ));
}
