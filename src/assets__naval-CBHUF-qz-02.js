// assets__naval-CBHUF-qz 02 — box
// Lines 269-552 of readable/assets__naval-CBHUF-qz.pretty.js (statement-aligned).
function se(
  e,
  { L: t, B: n, k: r, funnels: i = 2, cruiser: a = !1, frigate: o = !1 },
) {
  let s = t / 150,
    c = n / 17,
    l = (e) => e * s,
    u = (e) => e * c,
    d = (e) => e * r;
  (e.hull(
    [
      [-75, 7.2, 6.6, 5.6, -4.5],
      [-55, 8.2, 7.6, 5.6, -5.2],
      [-20, 8.5, 8, 5.8, -5.5],
      [20, 8.4, 7.8, 6, -5.5],
      [42, 7.4, 6.2, 6.6, -5.2],
      [58, 5.2, 3.4, 7.6, -4.6],
      [68, 3, 1.2, 8.3, -3.5],
      [75, 0.4, 0, 8.8, -1.5],
    ].map(([e, t, n, r, i]) => [l(e), u(t), u(n), d(r), d(i)]),
  ),
    e.cyl(l(74.5), d(8.8), 0, 0.08, d(3.2), `y`, w.dark));
  for (let t of [-1, 1])
    e.box(
      l(62.5),
      d(5.4),
      t * u(4.1) - 0.3,
      l(64.5),
      d(6.6),
      t * u(4.1) + 0.3,
      w.dark,
    );
  (T(e, l(47), d(2.8), d(4.8), u(5.6), l(1.5)),
    e
      .tbox(
        l(46.5),
        l(53),
        d(6.6),
        d(9.2),
        u(4.2),
        u(2.6),
        w.sup,
        l(0.6),
        l(2.6),
      )
      .cyl(l(53), d(8.2), 0, 0.26 * r, l(9), `x`, w.dark),
    e.box(l(37), d(6.2), -u(3.4), l(45), d(6.75), u(3.4), w.dark));
  for (let t = 0; t < 4; t++)
    for (let n of [-1, 1])
      e.box(
        l(37.3 + t * 1.95),
        d(6.75),
        n * u(0.2),
        l(38.9 + t * 1.95),
        d(6.82),
        n * u(3.1),
        w.spy,
      );
  let f = l(a ? 6 : 10),
    p = l(34),
    m = d(o ? 12.5 : 14),
    h = d(5.6),
    g = m - h;
  e.tbox(f, p, h, m, u(15), u(12), w.sup, 0, l(3));
  let _ = (e) => p - (l(3) * (e - h)) / g,
    v = (e) => u(7.5) - (u(1.5) * (e - h)) / g,
    y = d(8),
    b = m - d(1);
  if (!o) {
    e.q(
      [_(y) + 0.15, y, -u(3.3)],
      [_(y) + 0.15, y, u(3.3)],
      [_(b) + 0.15, b, u(3.3)],
      [_(b) + 0.15, b, -u(3.3)],
      w.spy,
    );
    for (let t of [-1, 1])
      e.q(
        [f + l(4), y, t * (v(y) + 0.15)],
        [f + l(11), y, t * (v(y) + 0.15)],
        [f + l(11), b, t * (v(b) + 0.15)],
        [f + l(4), b, t * (v(b) + 0.15)],
        w.spy,
      );
  }
  for (let t of [-1, 1])
    e.q(
      [f + l(1), h + d(1.2), t * (v(h + d(1.2)) + 0.12)],
      [p - l(1), h + d(1.2), t * (v(h + d(1.2)) + 0.12)],
      [p - l(1), h + d(1.7), t * (v(h + d(1.7)) + 0.12)],
      [f + l(1), h + d(1.7), t * (v(h + d(1.7)) + 0.12)],
      w.dark,
    );
  let x = _(m) - l(0.5);
  (e.tbox(f + l(8), x, m, m + d(3), u(12), u(11), w.sup, 0, l(1)),
    e.box(
      x - l(1.35),
      m + d(1.2),
      -u(5.4),
      x - l(0.85),
      m + d(2.3),
      u(5.4),
      w.glass,
    ),
    e.box(x - l(4), m, -u(8.3), x - l(1.2), m + d(0.4), u(8.3), w.sup));
  let ee = x - l(2.6),
    te = m + d(3);
  e.cyl(ee, te, 0, 0.9 * r, d(1.6), `y`, w.sup).cyl(
    ee,
    te + d(1.6),
    0,
    0.6 * r,
    d(1.1),
    `y`,
    w.white,
  );
  let S = f + l(o ? 9 : 11),
    C = m + d(3);
  o
    ? (e.tbox(
        S - l(4),
        S + l(4),
        m,
        C + d(10),
        u(7),
        u(3.4),
        w.sup,
        l(1.6),
        l(1.6),
      ),
      e.q(
        [S + l(3.6), C + d(3), -u(2.4)],
        [S + l(3.6), C + d(3), u(2.4)],
        [S + l(2.7), C + d(7.5), u(2)],
        [S + l(2.7), C + d(7.5), -u(2)],
        w.spy,
      ),
      e
        .cyl(S, C + d(10), 0, 0.2, d(6), `y`, w.dark)
        .cyl(S, C + d(15.5), 0, 0.7, d(0.9), `y`, w.white))
    : (e.tbox(
        S - l(3.2),
        S + l(3.2),
        C,
        C + d(11),
        u(5.2),
        u(1.4),
        w.dark,
        l(2.2),
        l(2.6),
      ),
      e.box(
        S - l(0.4),
        C + d(7.6),
        -u(5.4),
        S + l(0.4),
        C + d(8),
        u(5.4),
        w.dark,
      ),
      e.box(
        S - l(1.3),
        C + d(9.2),
        -u(1.7),
        S + l(1.3),
        C + d(10.1),
        u(1.7),
        w.dark,
      ),
      e
        .cyl(S, C + d(11), 0, 0.18, d(7), `y`, w.dark)
        .cyl(S, C + d(17.4), 0, 0.55, d(0.8), `y`, w.white));
  for (let t = 0; t < i; t++) {
    let n = l(2 - t * (a ? 11 : 16));
    e.tbox(
      n - l(4.2),
      n + l(4.2),
      d(5.6),
      d(16.5),
      u(7.4),
      u(5.4),
      w.sup,
      l(1.4),
      l(1),
    );
    for (let t of [-1, 1])
      e.box(
        n - l(1.9),
        d(16.5),
        t * u(1.3) - u(1),
        n + l(2.3),
        d(17.4),
        t * u(1.3) + u(1),
        w.dark,
      );
  }
  for (let t of [-1, 1])
    if (
      (e
        .box(l(-3.5), d(7.3), t * u(6.1), l(3.5), d(8.3), t * u(7.9), w.orange)
        .box(l(-3), d(8.3), t * u(6.3), l(3), d(8.6), t * u(7.7), w.white),
      !a)
    )
      for (let n = 0; n < 2; n++)
        e.box(
          l(-9),
          d(6) + n * d(0.9),
          t * u(1),
          l(-3.2),
          d(6.8) + n * d(0.9),
          t * u(4.2),
          w.green,
        );
  if (a) {
    let t = l(-40),
      n = l(-14),
      i = d(14),
      a = (e) => t + (l(2.5) * (e - h)) / (i - h);
    (e.tbox(t, n, h, i, u(14), u(11.5), w.sup, l(2.5), 0),
      e.q(
        [a(y) - 0.15, y, -u(3.2)],
        [a(y) - 0.15, y, u(3.2)],
        [a(b) - 0.15, b, u(3.2)],
        [a(b) - 0.15, b, -u(3.2)],
        w.spy,
      ),
      e
        .tbox(l(-24), l(-17), i, i + d(9), u(4.2), u(1.2), w.dark, l(2), l(2))
        .cyl(l(-20.5), i + d(9), 0, 0.16, d(5), `y`, w.dark),
      e
        .cyl(l(-30), i, 0, 1 * r, d(1.6), `y`, w.sup)
        .cyl(l(-30), i + d(1.6), 0, 0.6 * r, d(1.1), `y`, w.white),
      e.box(l(-54), d(5.3), -u(3.4), l(-44), d(5.85), u(3.4), w.dark),
      e
        .tbox(
          l(-66),
          l(-59.5),
          d(5.4),
          d(7.8),
          u(4.2),
          u(2.6),
          w.sup,
          l(2.6),
          l(0.6),
        )
        .cyl(l(-66), d(7), 0, 0.26 * r, -l(9), `x`, w.dark));
    for (let t of [-1, 1])
      e.box(l(-73), d(5.5), t * u(1.5), l(-68), d(6.4), t * u(4.5), w.green);
  } else {
    e.tbox(l(-44), l(-8), d(5.5), d(12.5), u(14), u(12.5), w.sup, 0, l(1.5));
    for (let t of [-1, 1])
      e.box(
        l(-44.12),
        d(5.7),
        t * u(3.4) - u(2.6),
        l(-43.9),
        d(11.2),
        t * u(3.4) + u(2.6),
        w.dark,
      );
    (e
      .cyl(l(-14), d(12.5), 0, 1 * r, d(1.6), `y`, w.sup)
      .cyl(l(-14), d(14.1), 0, 0.6 * r, d(1.1), `y`, w.white),
      e.box(l(-56), d(5.4), -u(3.4), l(-47), d(5.85), u(3.4), w.dark));
    let t = d(5.6) + 0.04,
      n = l(-66),
      i = u(4.5);
    e.box(l(-74), t, -0.15, l(-57), t + 0.04, 0.15, w.white);
    for (let [r, a] of [
      [-1, 0],
      [1, 0],
    ])
      e.box(
        n + r * i - 0.15,
        t,
        -i,
        n + r * i + 0.15,
        t + 0.04,
        i,
        w.white,
      ).box(n - i, t, r * i - 0.15, n + i, t + 0.04, r * i + 0.15, w.white);
  }
  e.cyl(l(-74.5), d(5.6), 0, 0.08, d(3.4), `y`, w.dark);
}
