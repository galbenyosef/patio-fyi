// assets__lab-buildings-view-DJVr8phc 15 — box
// Lines 5719-6021 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function wn(e, t, n, r, i, a, o) {
  (Qt(e, t, n, r, i, a, o),
    Qt(
      e,
      t
        .clone()
        .multiply(new l().makeTranslation(r, 0, o))
        .multiply(new l().makeRotationY(Math.PI))
        .multiply(new l().makeTranslation(-r, 0, -o)),
      n,
      r,
      i,
      a,
      o,
    ));
}
var Tn = (e, t, n) => (i, a, o) => {
  let c = t - n,
    l = Math.hypot(e, c),
    u = Math.atan2(c, e),
    d = (n) => t - (c * n) / e,
    f = e - 0.5,
    p = d(f) - 0.12;
  Ve(o, 0, 0, o.L, (n, o, s) => {
    (i.add(
      `corrugated`,
      new r(s - o, 0.07, l + 0.3)
        .rotateX(u)
        .translate((o + s) / 2, t - c / 2 + 0.02, e / 2 + 0.1),
      a,
      n,
    ),
      i.box(`trimBrown`, a, n, o, s, t - 0.3, t, 0, 0.14),
      i.box(`trimBrown`, a, n, o, s, p - 0.3, p, f - 0.12, f + 0.12));
    for (let t = Math.ceil(o / 0.2) * 0.2 + 0.1; t < s; t += 0.2) {
      let r = Math.round(t / 0.2) % 2;
      i.box(
        `trimBrown`,
        a,
        n,
        t - 0.07,
        t + 0.07,
        d(e) - (r ? 0.5 : 0.36),
        d(e) + 0.02,
        e + 0.12,
        e + 0.15,
      );
    }
    (i.box(`concrete`, a, n, o, s, 0, 0.32, 0, e + 0.7),
      i.box(`cStripe`, a, n, o, s, 0.32, 0.33, e + 0.35, e + 0.6, {
        planar: (e, t, n) => [e * 0.8, n],
      }));
  });
  for (let e = 0; e < 6; e++) {
    let n = (o.L * (e + 0.5)) / 6,
      r = qt(o, n, 1);
    (N(i, M, a, r, n, f, 0.32, 0.8, 0.2, 0.13, 10),
      N(i, M, a, r, n, f, 0.8, p - 0.3, 0.1, 0.09, 10),
      N(i, M, a, r, n, f, p - 0.55, p - 0.3, 0.1, 0.2, 10),
      D(i, M, a, r, [n, p - 1.3, f], [n, p - 0.3, f - 1.4], 0.07),
      D(i, M, a, r, [n, p - 1, f], [n, p - 0.3, f + 0.45], 0.07),
      D(i, M, a, r, [n, t - 1.3, 0.05], [n, t - 0.3, 1.1], 0.08));
  }
  let m = o.L / 2 - 1.5,
    h = qt(o, m, 1),
    g = p - 1.05;
  for (let e of [m - 3, m + 3])
    i.box(M, a, h, e - 0.02, e + 0.02, g + 0.7, p - 0.3, f - 0.02, f + 0.02);
  (i.box(`trimBrown`, a, h, m - 3.6, m + 3.6, g, g + 0.72, f - 0.05, f + 0.05),
    i.box(
      `signCvIronwood`,
      a,
      h,
      m - 3.5,
      m + 3.5,
      g + 0.06,
      g + 0.66,
      f + 0.05,
      f + 0.07,
      { planar: (e, t) => [(e - m + 3.5) / 7, (t - g - 0.06) / 0.6] },
    ));
  let _ = o.L / 2 + 4.2,
    v = qt(o, _, 1);
  (i.box(M, a, v, _ - 0.03, _ + 0.03, p - 0.95, p - 0.3, f - 0.03, f + 0.03),
    wn(i, a, v, _, p - 1.45, 0.48, f));
  let y = o.grid[0][2];
  for (let e of [2.5, 18.5]) {
    let t = qt(o, e, 1);
    (i.box(`wood`, a, t, e - 1, e + 1, 0.75, 0.81, 0.6, 1.05),
      i.box(`wood`, a, t, e - 1, e + 1, 1, 1.35, 0.5, 0.56));
    for (let n of [-0.85, 0.85])
      i.box(M, a, t, e + n - 0.03, e + n + 0.03, 0.32, 1.35, 0.5, 1.02);
  }
  (i.box(`woodDark`, a, y, 7.6, 8.6, 1.2, 2.3, 0, 0.06),
    i.box(`trimWhite`, a, y, 7.7, 8.5, 1.3, 2.2, 0.06, 0.07));
  let b = qt(o, 12.2, 1);
  i.box(`wood`, a, b, 11.1, 13.299999999999999, 0.95, 1.05, 2.5, 3.5);
  for (let e of [-0.75, 0.75])
    i.add(
      M,
      new s(0.3, 0.3, 1.1, 14)
        .rotateX(Math.PI / 2)
        .translate(12.2 + e, 0.62, 3),
      a,
      b,
    );
  (i.box(`woodDoor`, a, b, 11.299999999999999, 12.1, 1.05, 1.6, 2.65, 3.3),
    i.box(`redPaint`, a, b, 12.25, 13, 1.05, 1.45, 2.7, 3.35));
};
function En(e, t, n) {
  let r = n.L,
    i = r / 2,
    a = n.H,
    o = n.grid[n.top][Gt(n, i)],
    s = new C();
  (s.moveTo(0.4, a),
    s.lineTo(0.4, a + 1.4),
    s.quadraticCurveTo(0.4, a + 2.5, 2.3, a + 2.6),
    s.lineTo(3, a + 2.7),
    s.quadraticCurveTo(3.3, a + 5.4, i - 1, a + 5.8),
    s.quadraticCurveTo(i, a + 6.5, i + 1, a + 5.8),
    s.quadraticCurveTo(r - 3.3, a + 5.4, r - 3, a + 2.7),
    s.lineTo(r - 2.3, a + 2.6),
    s.quadraticCurveTo(r - 0.4, a + 2.5, r - 0.4, a + 1.4),
    s.lineTo(r - 0.4, a),
    s.closePath());
  let c = [
    [i - 1.45, a + 2.9, 0.55, a + 3.6],
    [i + 1.45, a + 2.9, 0.55, a + 3.6],
    [i, a + 4.2, 0.45, a + 4.75],
  ];
  for (let [e, t, n, r] of c) {
    let i = new p();
    (i.moveTo(e - n, t),
      i.lineTo(e + n, t),
      i.lineTo(e + n, r),
      i.absarc(e, r, n, 0, Math.PI, !1),
      i.closePath(),
      s.holes.push(i));
  }
  e.add(
    `cAdobe`,
    new S(s, {
      depth: n.t + 0.1,
      bevelEnabled: !1,
      curveSegments: 10,
    }).translate(0, 0, -n.t),
    t,
    o,
  );
  for (let [r, , i, a] of c)
    (e.box(
      `woodDark`,
      t,
      o,
      r - i - 0.1,
      r + i + 0.1,
      a - 0.05,
      a + 0.12,
      -n.t / 2 - 0.1,
      -n.t / 2 + 0.1,
    ),
      N(
        e,
        `bronze`,
        t,
        o,
        r,
        -n.t / 2,
        a - 0.62,
        a - 0.05,
        i * 0.62,
        i * 0.25,
        14,
      ),
      e.add(
        `bronze`,
        new w(0.07, 8, 6).translate(r, a - 0.66, -n.t / 2),
        t,
        o,
      ));
  let l = a + 6.1;
  (e.box(
    `woodDark`,
    t,
    o,
    i - 0.07,
    i + 0.07,
    l,
    l + 1.3,
    -n.t / 2 - 0.07,
    -n.t / 2 + 0.07,
  ),
    e.box(
      `woodDark`,
      t,
      o,
      i - 0.45,
      i + 0.45,
      l + 0.75,
      l + 0.9,
      -n.t / 2 - 0.07,
      -n.t / 2 + 0.07,
    ));
  let u = n.grid[0][Gt(n, i)];
  (e.box(`cAdobeLight`, t, u, i - 1.35, i - 1, 0, 3.4, 0, 0.1),
    e.box(`cAdobeLight`, t, u, i + 1, i + 1.35, 0, 3.4, 0, 0.1),
    e.box(`cAdobeLight`, t, u, i - 1.35, i + 1.35, 3.1, 3.5, 0, 0.12));
  let d = qt(n, i, 4.8);
  (e.box(`cAdobeLight`, t, d, i - 0.65, i + 0.65, 4.6, 6, 0, 0.06),
    e.box(`woodDark`, t, d, i - 0.45, i + 0.45, 4.75, 5.85, 0.06, 0.1));
  for (let n = -1; n <= 1; n++)
    e.box(
      M,
      t,
      d,
      i + n * 0.22 - 0.02,
      i + n * 0.22 + 0.02,
      4.75,
      5.85,
      0.1,
      0.14,
    );
}
var Dn = (e) => (t, n, r) => {
  let i = r.H,
    a = new C(
      [
        [0, 0],
        [1.2, 0],
        [1.2, 1.6],
        [0.35, i - 1],
        [0, i - 1],
      ].map(([e, t]) => new h(e, t)),
    );
  for (let e = 1; e < r.nb; e++) {
    let i = e * r.bw;
    t.add(
      `cAdobe`,
      new S(a, { depth: 0.9, bevelEnabled: !1 })
        .rotateY(-Math.PI / 2)
        .translate(i + 0.45, 0, 0),
      n,
      r.grid[0][e],
    );
  }
  if (e) {
    for (let e = 0.6; e < r.L - 0.4; e += 0.9)
      t.add(
        `cLog`,
        new s(0.11, 0.12, 0.7, 8)
          .rotateX(Math.PI / 2)
          .translate(e, i - 0.35, 0.3),
        n,
        r.grid[r.top][Gt(r, e)],
      );
    for (let e of [r.L * 0.3, r.L * 0.7])
      t.box(
        `woodDark`,
        n,
        r.grid[r.top][Gt(r, e)],
        e - 0.14,
        e + 0.14,
        i + 0.3,
        i + 0.5,
        0,
        0.9,
      );
  }
};
function On(e, t, n) {
  for (let r of [-1, 1]) {
    let i = r * (n.W / 2 + 0.3);
    (e.box(
      `cAdobe`,
      t,
      0,
      i - 0.6,
      i + 0.6,
      0,
      4.4,
      n.D / 2 - 1.6,
      n.D / 2 + 0.6,
    ),
      e.box(
        `cAdobeLight`,
        t,
        0,
        i - 0.65,
        i + 0.65,
        4.4,
        4.6,
        n.D / 2 - 1.65,
        n.D / 2 + 0.65,
      ));
  }
  let r = -n.W / 2 + 1.2,
    i = n.D / 2 + 3.2;
  (e.box(`cAdobe`, t, 0, r - 0.5, r + 0.5, 0, 0.6, i - 0.5, i + 0.5),
    e.box(`woodDark`, t, 0, r - 0.1, r + 0.1, 0.6, 3.6, i - 0.1, i + 0.1),
    e.box(`woodDark`, t, 0, r - 0.8, r + 0.8, 2.6, 2.8, i - 0.1, i + 0.1),
    an(n, n.H + 8));
}
