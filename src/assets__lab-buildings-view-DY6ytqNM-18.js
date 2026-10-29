// assets__lab-buildings-view-DY6ytqNM 18 — box
// Lines 6617-6923 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
Object.assign(O, {
  cEarth: {
    pat: `stucco`,
    p: { base: 7170634, seed: 123, blotch: 50 },
    scale: 3,
    rough: 1,
    bump: 1.5,
  },
});
function Mn(e, t, n, r, i, a, o, s) {
  (e.box(
    `stone`,
    t,
    0,
    n - a - 0.5,
    n + a + 0.5,
    0,
    3,
    r - a - 0.5,
    r + a + 0.5,
  ),
    e.box(
      `stone`,
      t,
      0,
      n - a - 0.65,
      n + a + 0.65,
      3,
      3.3,
      r - a - 0.65,
      r + a + 0.65,
    ));
  let c = e.cell(t, [n, i / 2, r + a], s);
  P(e, s, t, c, n, r, 3.3, i, a, o, 24);
  let l = (e) => a + ((o - a) * (e - 3.3)) / (i - 3.3);
  for (let a of [0.3, 0.55, 0.8]) {
    let o = 3.3 + (i - 3.3) * a;
    P(e, N, t, c, n, r, o, o + 0.18, l(o) + 0.06, l(o) + 0.06, 24, !0);
  }
  for (let a = 0; a < 3; a++)
    P(
      e,
      s,
      t,
      0,
      n,
      r,
      i - 1.2 + a * 0.35,
      i - 0.85 + a * 0.35,
      o + 0.1 + a * 0.1,
      o + 0.1 + a * 0.1,
      24,
    );
  P(e, N, t, 0, n, r, i - 0.15 + 0.9, i + 1, o + 0.3, o + 0.3, 24, !0);
  for (let a of [i * 0.4, i * 0.7])
    P(e, N, t, 0, n, r, a, a + 0.2, l(a) + 0.08, l(a) + 0.08, 24, !0);
}
function Nn(e, t, n, r, i, a, o, s, c, l) {
  let u = new T();
  (u.moveTo(i + o, a),
    u.absarc(i, a, o, 0, Math.PI, !1),
    u.lineTo(i - o - s, a),
    u.absarc(i, a, o + s, Math.PI, 0, !0),
    u.closePath(),
    e.add(
      t,
      new w(u, { depth: l - c, bevelEnabled: !1, curveSegments: 14 }).translate(
        0,
        0,
        c,
      ),
      n,
      r,
    ));
}
function Pn(e, t, n, r, i, o, s, c, l, u, d, f) {
  let p = d ? c - s : o - i,
    m = d ? o - i : c - s,
    h = (i + o) / 2,
    g = (s + c) / 2,
    _ = (m / 2) * Math.tan(u),
    v = m / 2 / Math.cos(u) + 0.1;
  for (let i of [-1, 1]) {
    let o = new a(p, 0.12, v)
      .rotateX(i * u)
      .translate(0, l + _ / 2 + 0.06, (i * m) / 4);
    (d && o.rotateY(Math.PI / 2), e.add(t, o.translate(h, 0, g), n, r));
  }
  if (f) {
    let t = new a(p + 0.1, 0.16, 0.24).translate(0, l + _ + 0.1, 0);
    (d && t.rotateY(Math.PI / 2), e.add(f, t.translate(h, 0, g), n, r));
  }
  return l + _;
}
function Fn(e, t, n) {
  let r = 5.5;
  ze(n, 0, 0, n.L, (n, i, o) => {
    (e.add(
      `cCorrGalv`,
      new a(o - i, 0.08, 5.7).rotateX(0.12).translate((i + o) / 2, 4.9, r / 2),
      t,
      n,
    ),
      e.box(N, t, n, i, o, 4.2, 4.5, 5.35, r),
      e.box(`concrete`, t, n, i, o, 0, 0.12, 0, 6.5),
      e.box(`steel`, t, n, i + 0.3, o - 0.3, 0.12, 0.16, 1.2, 3.6));
  });
  for (let r of [0.25, n.L - 0.25]) {
    let i = Kt(n, r, 1);
    (e.box(N, t, i, r - 0.12, r + 0.12, 0, 4.5, 5.2, 5.44),
      k(e, N, t, i, [r, 3, 5.32], [r, 4.3, 3.9], 0.08));
  }
}
function In(e, t, n) {
  let r = [];
  for (let i = 0; i < 4; i++) {
    let a = -n.D / 2 - 3 - 0.4 - i * 6.1;
    r.push(a);
    let o = e.cell(t, [0, 7.5, a + 3], `cSilo`),
      s = e.cell(t, [0, 22.5, a + 3], `cSilo`);
    (P(e, `concrete`, t, o, 0, a, -0.2, 0.8, 3.3, 3.3, 32),
      P(e, `cSilo`, t, o, 0, a, 0.8, 15, 3, 3, 32),
      P(e, `cSilo`, t, s, 0, a, 15, 30, 3, 3, 32),
      P(e, `concrete`, t, 0, 0, a, 30, 30.35, 3.18, 3.18, 32),
      i && e.box(`cSilo`, t, o, -1, 1, 0.8, 30, a + 3 - 0.6, a + 3 + 0.7));
    let c = qt(t, 0, a, Math.PI / 4);
    e.box(`steel`, c, o, -0.5, 0.5, 0.8, 2.2, 2.9, 3.5);
  }
  let i = qt(t, 0, r[0], Math.PI / 2 - 0.35);
  for (let t of [-0.25, 0.25])
    e.box(N, i, 0, t - 0.03, t + 0.03, 2.5, 31.2, 3.08, 3.14);
  for (let t = 2.8; t < 31; t += 0.9)
    e.add(
      N,
      new o(0.42, 0.025, 4, 12, Math.PI)
        .translate(0, 0, 3.12)
        .rotateX(Math.PI / 2)
        .translate(0, t, 0),
      i,
      0,
    );
  let a = -n.D / 2 + 0.8,
    s = n.D / 2 - 4,
    c = n.roofTop - 1.5,
    l = n.roofTop + 5.8;
  e.box(`cCorrGalv`, t, 0, -2.6, 2.6, c, l, a, s);
  for (let n = a + 1.2; n < s - 0.8; n += 2.2)
    for (let r of [-1, 1])
      (e.box(
        `trimWhite`,
        t,
        0,
        r * 2.6 - 0.05,
        r * 2.6 + 0.05,
        l - 2.4,
        l - 1.2,
        n - 0.55,
        n + 0.55,
      ),
        e.box(
          `glass`,
          t,
          0,
          r * 2.6 - 0.07,
          r * 2.6 + 0.07,
          l - 2.3,
          l - 1.3,
          n - 0.45,
          n + 0.45,
        ));
  let u = Pn(
    e,
    `corrugated`,
    t,
    0,
    -2.8,
    2.8,
    a - 0.2,
    s + 0.2,
    l,
    30 * Bt,
    !0,
    N,
  );
  for (let n of [a, s])
    Jt(
      e,
      `cCorrGalv`,
      qt(t, 0, n, 0),
      0,
      -2.6,
      2.6,
      l,
      2.6 * Math.tan(30 * Bt),
      -0.05,
      0,
    );
  let f = r[3] - 1.5;
  (e.box(`cCorrGalv`, t, 0, -1.6, 1.6, 30.35, 33.15, f, a + 0.5),
    e.box(
      `corrugated`,
      t,
      0,
      -1.75,
      1.75,
      33.15,
      33.300000000000004,
      f - 0.15,
      a + 0.5,
    ));
  for (let n = f + 1; n < a - 0.5; n += 1.8)
    e.box(
      `glass`,
      t,
      0,
      1.6,
      1.64,
      31.650000000000002,
      32.45,
      n - 0.6,
      n + 0.6,
    );
  for (let n of r)
    k(e, `steel`, t, 0, [1.9, l - 0.5, a + 0.4], [0.8, 30.55, n], 0.28);
  (P(e, N, t, 0, 0, (a + s) / 2, u, u + 2.2, 0.35, 0.25, 12),
    e.add(
      `steel`,
      new d(0.9, 1.2, 14).rotateX(Math.PI).translate(0, u + 2.8, (a + s) / 2),
      t,
      0,
    ),
    rn(n, u + 3.5));
}
var Ln = (e) => (t, n, r) => {
  let i = r.t,
    o = -r.W / 2 + i,
    s = r.W / 2 - i,
    c = (r.D - 1.2) / 4,
    l = r.H + 0.05,
    u = 2.6,
    d = Math.atan2(u, c);
  for (let f = 0; f < 4; f++) {
    let p = r.D / 2 - 0.6 - f * c;
    (t.add(
      `corrugated`,
      new a(s - o, 0.12, Math.hypot(c, u) + 0.1)
        .rotateX(-d)
        .translate(0, l + u / 2 + 0.06, p - c / 2),
      n,
      0,
    ),
      t.box(`glassGrey`, n, 0, o, s, l, l + u, p - 0.05, p));
    for (let e = o; e <= s + 0.01; e += (s - o) / 20)
      t.box(N, n, 0, e - 0.05, e + 0.05, l, l + u, p - 0.02, p + 0.06);
    (t.box(
      N,
      n,
      0,
      o,
      s,
      l + u * 0.5 - 0.04,
      l + u * 0.5 + 0.04,
      p - 0.02,
      p + 0.06,
    ),
      t.box(N, n, 0, o, s, l + u - 0.1, l + u + 0.08, p - 0.12, p + 0.1));
    for (let a of [-1, 1]) {
      let o = new T([
        new y(p, l - 0.05),
        new y(p, l + u + 0.1),
        new y(p - c, l - 0.05),
      ]);
      t.add(
        e,
        new w(o, { depth: i, bevelEnabled: !1 })
          .rotateY(-Math.PI / 2)
          .translate(a > 0 ? r.W / 2 : -r.W / 2 + i, 0, 0),
        n,
        0,
      );
    }
  }
  (Mn(t, n, r.W / 2 - 3, -r.D / 2 - 2.4, 32, 1.5, 0.95, e),
    t.box(
      e,
      n,
      0,
      -r.W / 2 + 2,
      -r.W / 2 + 5.5,
      r.H,
      r.H + 4.5,
      -r.D / 2 + 1.2,
      -r.D / 2 + 4.2,
    ),
    t.box(
      `concrete`,
      n,
      0,
      -r.W / 2 + 1.85,
      -r.W / 2 + 5.65,
      r.H + 4.5,
      r.H + 4.65,
      -r.D / 2 + 1.05,
      -r.D / 2 + 4.35,
    ),
    rn(r, 33));
};
