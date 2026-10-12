// assets__greywater-centre-view-Cf3_SbRw 06 — math
// Lines 1369-1671 of readable/assets__greywater-centre-view-Cf3_SbRw.pretty.js (statement-aligned).
function Ke(e, t) {
  (K(e, `ironDark`, t, 0, 0, 0.5, 0, 0.2, 0.15, 10),
    K(e, `ironDark`, t, 0, 0.5, 3.9, 0, 0.09, 0.06, 10),
    K(e, `ironDark`, t, 0, 3.9, 4, 0, 0.14, 0.14, 10),
    K(e, `lampGlow`, t, 0, 4, 4.55, 0, 0.17, 0.24, 8),
    K(e, `ironDark`, t, 0, 4.55, 4.66, 0, 0.3, 0.3, 8),
    K(e, `ironDark`, t, 0, 4.66, 4.86, 0, 0.26, 0.03, 8));
  for (let n of [0, 1, 2, 3])
    G(
      e,
      `ironDark`,
      new a().multiplyMatrices(t, Ue(0, 0, 0, (n * Math.PI) / 2)),
      -0.015,
      0.015,
      4,
      4.55,
      0.2,
      0.235,
    );
}
function qe(e, t, n = 2.4, r = !1) {
  for (let r of [-n / 2 + 0.3, n / 2 - 0.3])
    G(e, `granite`, t, r - 0.2, r + 0.2, 0, 0.4, -0.25, 0.25);
  for (let r = 0; r < 4; r++)
    G(
      e,
      `wood`,
      t,
      -n / 2,
      n / 2,
      0.4,
      0.46,
      -0.24 + r * 0.125,
      -0.24 + r * 0.125 + 0.105,
    );
  if (r) {
    for (let r of [-n / 2 + 0.3, n / 2 - 0.3])
      G(e, `ironDark`, t, r - 0.03, r + 0.03, 0.46, 0.9, 0.2, 0.25);
    for (let r = 0; r < 3; r++)
      G(
        e,
        `wood`,
        t,
        -n / 2,
        n / 2,
        0.55 + r * 0.12,
        0.64 + r * 0.12,
        0.25,
        0.29,
      );
  }
}
function Je(e, t) {
  (K(e, `kioskGreen`, t, 0, 0, 0.9, 0, 0.26, 0.28, 14),
    K(e, `ironDark`, t, 0, 0.9, 0.98, 0, 0.3, 0.26, 14),
    K(e, `ironDark`, t, 0, 0.3, 0.34, 0, 0.285, 0.285, 14));
}
function Ye(e, t, n, r, i = 1, a = 1) {
  (G(e, `precast`, t, -n / 2, n / 2, 0, i - 0.08, -r / 2, r / 2),
    G(
      e,
      `coping`,
      t,
      -n / 2 - 0.05,
      n / 2 + 0.05,
      i - 0.08,
      i,
      -r / 2 - 0.05,
      r / 2 + 0.05,
    ),
    G(
      e,
      `soil`,
      t,
      -n / 2 + 0.12,
      n / 2 - 0.12,
      i - 0.14,
      i - 0.06,
      -r / 2 + 0.12,
      r / 2 - 0.12,
    ),
    G(
      e,
      `precastDark`,
      t,
      -n / 2 + 0.03,
      n / 2 - 0.03,
      0,
      0.08,
      -r / 2 + 0.03,
      r / 2 - 0.03,
    ));
  let o = a * 9301 + 49297,
    s = () => (o = (o * 9301 + 49297) % 233280) / 233280,
    c = Math.max(1, Math.round((n * r) / 1.1));
  for (let a = 0; a < c; a++) {
    let a = (s() - 0.5) * (n - 0.6),
      o = (s() - 0.5) * (r - 0.6),
      c = 0.34 + s() * 0.16;
    e.add(
      `boxwood`,
      new _(1, 1).scale(c, c * 0.8, c).translate(a, i + c * 0.45, o),
      t,
      0,
    );
  }
}
function Xe(e, t, n, i = `news`) {
  let o = 3.2,
    s = 2.4,
    c = i === `news` ? `kioskGreen` : `kioskCream`,
    l = i === `news` ? `brass` : `ironDark`;
  (G(
    e,
    `granite`,
    t,
    -3.2 / 2 - 0.05,
    1.6500000000000001,
    0,
    0.14,
    -2.4 / 2 - 0.05,
    1.25,
  ),
    G(e, c, t, -3.2 / 2, o / 2, 0.14, 1, -2.4 / 2, s / 2));
  for (let [n, r] of [
    [-3.2 / 2 + 0.15, -0.1],
    [0.1, o / 2 - 0.15],
  ])
    for (let i of [-2.4 / 2 - 0.02, s / 2])
      G(e, l, t, n, r, 0.3, 0.84, i, i + 0.02);
  for (let n of [-1, 1])
    for (let [r, i] of [
      [-1.05, -0.1],
      [0.1, s / 2 - 0.15],
    ])
      G(e, l, t, n * 1.61, n * (o / 2 - 0.01), 0.3, 0.84, r, i);
  (G(e, c, t, -3.2 / 2, o / 2, 1, 1.08, -2.4 / 2 - 0.04, 1.44),
    G(e, `glass`, t, -1.55, o / 2 - 0.05, 1.08, 2.1, -1.18, -1.14));
  for (let n of [-1, 1])
    G(
      e,
      `glass`,
      t,
      n * (o / 2 - 0.02),
      n * (o / 2 - 0.06),
      1.08,
      2.1,
      -1.15,
      s / 2 - 0.05,
    );
  for (let n of [-3.2 / 2, -3.2 / 6, o / 6, o / 2])
    for (let r of [-2.4 / 2, s / 2])
      G(e, c, t, n - 0.05, n + 0.05, 1.08, 2.1, r - 0.05, r + 0.05);
  for (let n of [-0.6, 0, s / 2 - 0.6])
    for (let r of [-1, 1])
      G(
        e,
        c,
        t,
        (r * o) / 2 - 0.05,
        (r * o) / 2 + 0.05,
        1.08,
        2.1,
        n - 0.04,
        n + 0.04,
      );
  G(
    e,
    `woodDoor`,
    t,
    -1.5,
    o / 2 - 0.1,
    1.08,
    2.1,
    -2.4 / 2 + 0.1,
    -2.4 / 2 + 0.3,
  );
  let u = new a().multiplyMatrices(
    t,
    new a().makeRotationX(-1.1).setPosition(0, 2.1, s / 2),
  );
  G(
    e,
    i === `news` ? c : `awningRed`,
    u,
    -1.55,
    o / 2 - 0.05,
    0,
    0.04,
    0,
    0.95,
  );
  for (let n of [-3.2 / 2 + 0.2, o / 2 - 0.2])
    q(
      e,
      `ironDark`,
      t,
      [n, 1.1, 1.4],
      [n, 2.1 + Math.sin(1.1) * 0.9 - 0.02, s / 2 + Math.cos(1.1) * 0.9],
      0.03,
      0.03,
    );
  G(
    e,
    c,
    t,
    -3.2 / 2 - 0.05,
    1.6500000000000001,
    2.1,
    2.55,
    -2.4 / 2 - 0.05,
    1.25,
  );
  let d = i === `news` ? Le : Re;
  if (
    (J(n, t, d, 3, 0.36, 0, 2.325, 1.256, 0),
    J(n, t, d, 3, 0.36, 0, 2.325, -2.4 / 2 - 0.056, Math.PI),
    G(
      e,
      l,
      t,
      -3.2 / 2 - 0.08,
      1.6800000000000002,
      2.55,
      2.6,
      -2.4 / 2 - 0.08,
      1.28,
    ),
    G(
      e,
      `ironDark`,
      t,
      -3.2 / 2 - 0.3,
      1.9000000000000001,
      2.6,
      2.72,
      -2.4 / 2 - 0.3,
      1.5,
    ),
    e.add(
      `ironDark`,
      new r(0.02, Math.hypot(o, s) / 2 + 0.2, 0.55, 4, 1)
        .rotateY(Math.PI / 4)
        .scale(1, 1, s / o)
        .translate(0, 2.995, 0),
      t,
      0,
    ),
    K(e, l, t, 0, 3.27, 3.45, 0, 0.05, 0.02, 8),
    i === `news`)
  ) {
    let n = 7,
      r = () => (n = (n * 9301 + 49297) % 233280) / 233280,
      i = [
        `trimCream`,
        `awningRed`,
        `signBlue`,
        `lineAmber`,
        `trimWhite`,
        `shutterGreen`,
      ];
    for (let n of [-1, 1])
      for (let o = 0; o < 3; o++) {
        let c = 0.55 + o * 0.42,
          l = new a().multiplyMatrices(
            t,
            new a().makeRotationZ(n * 0.35).setPosition(n * 1.76, c, 0),
          );
        G(e, `ironDark`, l, -0.14, 0.14, 0, 0.02, -2.4 / 2 + 0.1, s / 2 - 0.1);
        for (let t = 0; t < 5; t++) {
          let n = -2.4 / 2 + 0.3 + t * 0.44;
          G(
            e,
            i[Math.floor(r() * i.length)],
            l,
            -0.12,
            0.12,
            0.02,
            0.32,
            n - 0.15,
            n + 0.15,
          );
        }
      }
  } else {
    (G(
      e,
      `ironDark`,
      t,
      1.6500000000000001,
      1.7000000000000002,
      1.1,
      1.95,
      -0.5,
      0.5,
    ),
      J(n, t, ze, 0.95, 0.6, 1.705, 1.55, 0, Math.PI / 2),
      G(e, `wood`, t, -1.5, o / 2 - 0.1, 1.06, 1.1, s / 2, 1.5));
    for (let n of [-0.7, 0.7])
      (K(e, `ironDark`, t, n, 0, 0.72, 1.9, 0.03, 0.03, 6),
        K(e, `wood`, t, n, 0.72, 0.77, 1.9, 0.18, 0.18, 12));
  }
}
