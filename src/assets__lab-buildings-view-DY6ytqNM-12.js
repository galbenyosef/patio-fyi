// assets__lab-buildings-view-DY6ytqNM 12 — box
// Lines 4893-4963 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function pn(e, t, n) {
  let r = 12.95,
    i = 4.2;
  ze(n, 0, r, 22.25, (n, a, o) => {
    (e.box(`whiteSpandrel`, t, n, a, o, i, 4.55, 0, 7.5),
      e.box(`cPaintRed`, t, n, a, o, 4.55, 5.15, 7.4, 7.54),
      e.box(
        `signCvEmergency`,
        t,
        n,
        Math.max(a, 13.95),
        Math.min(o, 21.25),
        4.62,
        5.08,
        7.54,
        7.56,
        { planar: (e, t) => [(e - r - 1) / (9.3 - 2), (t - i - 0.42) / 0.46] },
      ),
      e.box(`cPaintRed`, t, n, a, o, 4.55, 5.15, 0.02, 0.1));
    for (
      let s = Math.ceil((a - r - 0.8) / 1.6) * 1.6 + r + 0.8;
      s < o;
      s += 1.6
    )
      e.box(`cLamp`, t, n, s - 0.3, s + 0.3, 4.16, i, 3.5, 4.1);
  });
  for (let r of [13.549999999999999, 21.65]) {
    let a = Kt(n, r, 1);
    for (let n of [6.9, 3.2]) P(e, `aluminum`, t, a, r, n, 0, i, 0.2, 0.2, 12);
  }
  for (let r of [13.549999999999999, 21.65]) {
    let i = Kt(n, r, 0);
    e.box(`concrete`, t, i, r - 0.4, r + 0.4, 0, 0.15, 3, 7.2);
  }
  let a = n.grid[n.top][0],
    o = n.bw / 2,
    s = n.ys[n.top] + 1.9;
  (e.box(`whiteSpandrel`, t, a, o - 1.25, o + 1.25, s - 1.25, s + 1.25, 0, 0.1),
    e.box(`cPaintRed`, t, a, o - 0.3, o + 0.3, s - 0.95, s + 0.95, 0.1, 0.14),
    e.box(`cPaintRed`, t, a, o - 0.95, o + 0.95, s - 0.3, s + 0.3, 0.1, 0.14));
}
function mn(e, t, n) {
  let r = n.H;
  (e.box(`cBrickTanHosp`, t, 0, -6, 6, r, r + 3.8, -5, 1),
    e.box(`louver`, t, 0, -5.8, 5.8, r + 1.2, r + 3.2, 1, 1.06),
    e.box(
      `aluminum`,
      t,
      0,
      -6.2,
      6.2,
      r + 3.8,
      r + 4,
      -5.2,
      1.2000000000000002,
    ));
  for (let n of [8.5, 12])
    (P(e, `cCorrGalv`, t, 0, n, -4, r, r + 3, 1.4, 1.4, 20),
      P(e, N, t, 0, n, -4, r + 3, r + 3.5, 1.5, 1.2, 20, !0));
  for (let n of [-10, -8.6])
    P(e, `aluminum`, t, 0, n, -5.5, r, r + 5, 0.3, 0.3, 10);
  for (let n of [-6, -4.4])
    (P(e, `aluminum`, t, 0, 0, n, r + 1, r + 1.25, 0.12, 0.12, 8),
      e.add(
        `aluminum`,
        new C(0.12, 0.12, 12, 8).rotateZ(Math.PI / 2).translate(2, r + 0.5, n),
        t,
        0,
      ));
  De(e, t, n, `signCvHospital`, 16, 1.7, n.D / 2 - 1.4, 1.2);
}
