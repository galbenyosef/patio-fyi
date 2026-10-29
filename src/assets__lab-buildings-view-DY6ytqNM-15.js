// assets__lab-buildings-view-DY6ytqNM 15 — box
// Lines 5719-6021 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function Cn(e, t, n, r, i, a, o) {
  (Zt(e, t, n, r, i, a, o),
    Zt(
      e,
      t
        .clone()
        .multiply(new E().makeTranslation(r, 0, o))
        .multiply(new E().makeRotationY(Math.PI))
        .multiply(new E().makeTranslation(-r, 0, -o)),
      n,
      r,
      i,
      a,
      o,
    ));
}
var wn = (e, t, n) => (r, i, o) => {
  let s = t - n,
    c = Math.hypot(e, s),
    l = Math.atan2(s, e),
    u = (n) => t - (s * n) / e,
    d = e - 0.5,
    f = u(d) - 0.12;
  ze(o, 0, 0, o.L, (n, o, p) => {
    (r.add(
      `corrugated`,
      new a(p - o, 0.07, c + 0.3)
        .rotateX(l)
        .translate((o + p) / 2, t - s / 2 + 0.02, e / 2 + 0.1),
      i,
      n,
    ),
      r.box(`trimBrown`, i, n, o, p, t - 0.3, t, 0, 0.14),
      r.box(`trimBrown`, i, n, o, p, f - 0.3, f, d - 0.12, d + 0.12));
    for (let t = Math.ceil(o / 0.2) * 0.2 + 0.1; t < p; t += 0.2) {
      let a = Math.round(t / 0.2) % 2;
      r.box(
        `trimBrown`,
        i,
        n,
        t - 0.07,
        t + 0.07,
        u(e) - (a ? 0.5 : 0.36),
        u(e) + 0.02,
        e + 0.12,
        e + 0.15,
      );
    }
    (r.box(`concrete`, i, n, o, p, 0, 0.32, 0, e + 0.7),
      r.box(`cStripe`, i, n, o, p, 0.32, 0.33, e + 0.35, e + 0.6, {
        planar: (e, t, n) => [e * 0.8, n],
      }));
  });
  for (let e = 0; e < 6; e++) {
    let n = (o.L * (e + 0.5)) / 6,
      a = Kt(o, n, 1);
    (P(r, N, i, a, n, d, 0.32, 0.8, 0.2, 0.13, 10),
      P(r, N, i, a, n, d, 0.8, f - 0.3, 0.1, 0.09, 10),
      P(r, N, i, a, n, d, f - 0.55, f - 0.3, 0.1, 0.2, 10),
      k(r, N, i, a, [n, f - 1.3, d], [n, f - 0.3, d - 1.4], 0.07),
      k(r, N, i, a, [n, f - 1, d], [n, f - 0.3, d + 0.45], 0.07),
      k(r, N, i, a, [n, t - 1.3, 0.05], [n, t - 0.3, 1.1], 0.08));
  }
  let p = o.L / 2 - 1.5,
    m = Kt(o, p, 1),
    h = f - 1.05;
  for (let e of [p - 3, p + 3])
    r.box(N, i, m, e - 0.02, e + 0.02, h + 0.7, f - 0.3, d - 0.02, d + 0.02);
  (r.box(`trimBrown`, i, m, p - 3.6, p + 3.6, h, h + 0.72, d - 0.05, d + 0.05),
    r.box(
      `signCvIronwood`,
      i,
      m,
      p - 3.5,
      p + 3.5,
      h + 0.06,
      h + 0.66,
      d + 0.05,
      d + 0.07,
      { planar: (e, t) => [(e - p + 3.5) / 7, (t - h - 0.06) / 0.6] },
    ));
  let g = o.L / 2 + 4.2,
    _ = Kt(o, g, 1);
  (r.box(N, i, _, g - 0.03, g + 0.03, f - 0.95, f - 0.3, d - 0.03, d + 0.03),
    Cn(r, i, _, g, f - 1.45, 0.48, d));
  let v = o.grid[0][2];
  for (let e of [2.5, 18.5]) {
    let t = Kt(o, e, 1);
    (r.box(`wood`, i, t, e - 1, e + 1, 0.75, 0.81, 0.6, 1.05),
      r.box(`wood`, i, t, e - 1, e + 1, 1, 1.35, 0.5, 0.56));
    for (let n of [-0.85, 0.85])
      r.box(N, i, t, e + n - 0.03, e + n + 0.03, 0.32, 1.35, 0.5, 1.02);
  }
  (r.box(`woodDark`, i, v, 7.6, 8.6, 1.2, 2.3, 0, 0.06),
    r.box(`trimWhite`, i, v, 7.7, 8.5, 1.3, 2.2, 0.06, 0.07));
  let y = Kt(o, 12.2, 1);
  r.box(`wood`, i, y, 11.1, 13.299999999999999, 0.95, 1.05, 2.5, 3.5);
  for (let e of [-0.75, 0.75])
    r.add(
      N,
      new C(0.3, 0.3, 1.1, 14)
        .rotateX(Math.PI / 2)
        .translate(12.2 + e, 0.62, 3),
      i,
      y,
    );
  (r.box(`woodDoor`, i, y, 11.299999999999999, 12.1, 1.05, 1.6, 2.65, 3.3),
    r.box(`redPaint`, i, y, 12.25, 13, 1.05, 1.45, 2.7, 3.35));
};
function Tn(e, t, n) {
  let r = n.L,
    a = r / 2,
    o = n.H,
    s = n.grid[n.top][Wt(n, a)],
    c = new T();
  (c.moveTo(0.4, o),
    c.lineTo(0.4, o + 1.4),
    c.quadraticCurveTo(0.4, o + 2.5, 2.3, o + 2.6),
    c.lineTo(3, o + 2.7),
    c.quadraticCurveTo(3.3, o + 5.4, a - 1, o + 5.8),
    c.quadraticCurveTo(a, o + 6.5, a + 1, o + 5.8),
    c.quadraticCurveTo(r - 3.3, o + 5.4, r - 3, o + 2.7),
    c.lineTo(r - 2.3, o + 2.6),
    c.quadraticCurveTo(r - 0.4, o + 2.5, r - 0.4, o + 1.4),
    c.lineTo(r - 0.4, o),
    c.closePath());
  let l = [
    [a - 1.45, o + 2.9, 0.55, o + 3.6],
    [a + 1.45, o + 2.9, 0.55, o + 3.6],
    [a, o + 4.2, 0.45, o + 4.75],
  ];
  for (let [e, t, n, r] of l) {
    let i = new ne();
    (i.moveTo(e - n, t),
      i.lineTo(e + n, t),
      i.lineTo(e + n, r),
      i.absarc(e, r, n, 0, Math.PI, !1),
      i.closePath(),
      c.holes.push(i));
  }
  e.add(
    `cAdobe`,
    new w(c, {
      depth: n.t + 0.1,
      bevelEnabled: !1,
      curveSegments: 10,
    }).translate(0, 0, -n.t),
    t,
    s,
  );
  for (let [r, , a, o] of l)
    (e.box(
      `woodDark`,
      t,
      s,
      r - a - 0.1,
      r + a + 0.1,
      o - 0.05,
      o + 0.12,
      -n.t / 2 - 0.1,
      -n.t / 2 + 0.1,
    ),
      P(
        e,
        `bronze`,
        t,
        s,
        r,
        -n.t / 2,
        o - 0.62,
        o - 0.05,
        a * 0.62,
        a * 0.25,
        14,
      ),
      e.add(
        `bronze`,
        new i(0.07, 8, 6).translate(r, o - 0.66, -n.t / 2),
        t,
        s,
      ));
  let u = o + 6.1;
  (e.box(
    `woodDark`,
    t,
    s,
    a - 0.07,
    a + 0.07,
    u,
    u + 1.3,
    -n.t / 2 - 0.07,
    -n.t / 2 + 0.07,
  ),
    e.box(
      `woodDark`,
      t,
      s,
      a - 0.45,
      a + 0.45,
      u + 0.75,
      u + 0.9,
      -n.t / 2 - 0.07,
      -n.t / 2 + 0.07,
    ));
  let d = n.grid[0][Wt(n, a)];
  (e.box(`cAdobeLight`, t, d, a - 1.35, a - 1, 0, 3.4, 0, 0.1),
    e.box(`cAdobeLight`, t, d, a + 1, a + 1.35, 0, 3.4, 0, 0.1),
    e.box(`cAdobeLight`, t, d, a - 1.35, a + 1.35, 3.1, 3.5, 0, 0.12));
  let f = Kt(n, a, 4.8);
  (e.box(`cAdobeLight`, t, f, a - 0.65, a + 0.65, 4.6, 6, 0, 0.06),
    e.box(`woodDark`, t, f, a - 0.45, a + 0.45, 4.75, 5.85, 0.06, 0.1));
  for (let n = -1; n <= 1; n++)
    e.box(
      N,
      t,
      f,
      a + n * 0.22 - 0.02,
      a + n * 0.22 + 0.02,
      4.75,
      5.85,
      0.1,
      0.14,
    );
}
var En = (e) => (t, n, r) => {
  let i = r.H,
    a = new T(
      [
        [0, 0],
        [1.2, 0],
        [1.2, 1.6],
        [0.35, i - 1],
        [0, i - 1],
      ].map(([e, t]) => new y(e, t)),
    );
  for (let e = 1; e < r.nb; e++) {
    let i = e * r.bw;
    t.add(
      `cAdobe`,
      new w(a, { depth: 0.9, bevelEnabled: !1 })
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
        new C(0.11, 0.12, 0.7, 8)
          .rotateX(Math.PI / 2)
          .translate(e, i - 0.35, 0.3),
        n,
        r.grid[r.top][Wt(r, e)],
      );
    for (let e of [r.L * 0.3, r.L * 0.7])
      t.box(
        `woodDark`,
        n,
        r.grid[r.top][Wt(r, e)],
        e - 0.14,
        e + 0.14,
        i + 0.3,
        i + 0.5,
        0,
        0.9,
      );
  }
};
function Dn(e, t, n) {
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
    rn(n, n.H + 8));
}
