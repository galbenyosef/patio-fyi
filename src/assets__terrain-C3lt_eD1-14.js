// assets__terrain-C3lt_eD1 14 — push
// Lines 4873-4913 of readable/assets__terrain-C3lt_eD1.pretty.js (statement-aligned).
function Jn(e) {
  let { wood: t } = e;
  (t.push(wn(2.6, 3813408, 4866088)),
    Nn(
      e,
      {
        n: 12,
        len: 5.2,
        w: 1.35,
        tile: q.PINNATE,
        eTop: 1.45,
        eBot: 0.85,
        droop: 0.4,
        keel: 0.55,
        petiole: 0.9,
        petR: 0.06,
        petCol: 8030778,
        stops: [6982190, 5141032, 5929514],
        dead: 0.1,
        drop: 0,
      },
      new K(0, 0.05, 0),
      0.25,
    ),
    t.push(
      z(new K(0.15, 0, 0.1), new K(0.35, 0.55, 0.2), 0.05, 0.04, 6, J(6974e3)),
    ),
    t.push(xn(new K(0.38, 0.8, 0.22), 0.3, 5913118, 1, 1)));
}
function Yn(e, t, n, r, i, a) {
  let { r: o } = e;
  for (let s = 0; s < n; s++) {
    let n = s * 2.39996 + o() * 0.4,
      c = s ? r * (0.4 + 0.6 * o()) : 0;
    Mn(e, t, Y(n).multiplyScalar(c), {
      h: i[0] + (i[1] - i[0]) * o(),
      lean: a[0] + (a[1] - a[0]) * (c / r),
      leanA: n,
    });
  }
}
