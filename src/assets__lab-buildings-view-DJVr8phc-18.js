// assets__lab-buildings-view-DJVr8phc 18 — box
// Lines 6617-6923 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
Object.assign(E, {
  cEarth: {
    pat: `stucco`,
    p: { base: 7170634, seed: 123, blotch: 50 },
    scale: 3,
    rough: 1,
    bump: 1.5,
  },
});
function Nn(e, t, n, r, i, a, o, s) {
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
  N(e, s, t, c, n, r, 3.3, i, a, o, 24);
  let l = (e) => a + ((o - a) * (e - 3.3)) / (i - 3.3);
  for (let a of [0.3, 0.55, 0.8]) {
    let o = 3.3 + (i - 3.3) * a;
    N(e, M, t, c, n, r, o, o + 0.18, l(o) + 0.06, l(o) + 0.06, 24, !0);
  }
  for (let a = 0; a < 3; a++)
    N(
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
  N(e, M, t, 0, n, r, i - 0.15 + 0.9, i + 1, o + 0.3, o + 0.3, 24, !0);
  for (let a of [i * 0.4, i * 0.7])
    N(e, M, t, 0, n, r, a, a + 0.2, l(a) + 0.08, l(a) + 0.08, 24, !0);
}
function Pn(e, t, n, r, i, a, o, s, c, l) {
  let u = new C();
  (u.moveTo(i + o, a),
    u.absarc(i, a, o, 0, Math.PI, !1),
    u.lineTo(i - o - s, a),
    u.absarc(i, a, o + s, Math.PI, 0, !0),
    u.closePath(),
    e.add(
      t,
      new S(u, { depth: l - c, bevelEnabled: !1, curveSegments: 14 }).translate(
        0,
        0,
        c,
      ),
      n,
      r,
    ));
}
function Fn(e, t, n, i, a, o, s, c, l, u, d, f) {
  let p = d ? c - s : o - a,
    m = d ? o - a : c - s,
    h = (a + o) / 2,
    g = (s + c) / 2,
    _ = (m / 2) * Math.tan(u),
    v = m / 2 / Math.cos(u) + 0.1;
  for (let a of [-1, 1]) {
    let o = new r(p, 0.12, v)
      .rotateX(a * u)
      .translate(0, l + _ / 2 + 0.06, (a * m) / 4);
    (d && o.rotateY(Math.PI / 2), e.add(t, o.translate(h, 0, g), n, i));
  }
  if (f) {
    let t = new r(p + 0.1, 0.16, 0.24).translate(0, l + _ + 0.1, 0);
    (d && t.rotateY(Math.PI / 2), e.add(f, t.translate(h, 0, g), n, i));
  }
  return l + _;
}
function In(e, t, n) {
  let i = 5.5;
  Ve(n, 0, 0, n.L, (n, a, o) => {
    (e.add(
      `cCorrGalv`,
      new r(o - a, 0.08, 5.7).rotateX(0.12).translate((a + o) / 2, 4.9, i / 2),
      t,
      n,
    ),
      e.box(M, t, n, a, o, 4.2, 4.5, 5.35, i),
      e.box(`concrete`, t, n, a, o, 0, 0.12, 0, 6.5),
      e.box(`steel`, t, n, a + 0.3, o - 0.3, 0.12, 0.16, 1.2, 3.6));
  });
  for (let r of [0.25, n.L - 0.25]) {
    let i = qt(n, r, 1);
    (e.box(M, t, i, r - 0.12, r + 0.12, 0, 4.5, 5.2, 5.44),
      D(e, M, t, i, [r, 3, 5.32], [r, 4.3, 3.9], 0.08));
  }
}
function Ln(e, t, n) {
  let r = [];
  for (let i = 0; i < 4; i++) {
    let a = -n.D / 2 - 3 - 0.4 - i * 6.1;
    r.push(a);
    let o = e.cell(t, [0, 7.5, a + 3], `cSilo`),
      s = e.cell(t, [0, 22.5, a + 3], `cSilo`);
    (N(e, `concrete`, t, o, 0, a, -0.2, 0.8, 3.3, 3.3, 32),
      N(e, `cSilo`, t, o, 0, a, 0.8, 15, 3, 3, 32),
      N(e, `cSilo`, t, s, 0, a, 15, 30, 3, 3, 32),
      N(e, `concrete`, t, 0, 0, a, 30, 30.35, 3.18, 3.18, 32),
      i && e.box(`cSilo`, t, o, -1, 1, 0.8, 30, a + 3 - 0.6, a + 3 + 0.7));
    let c = Jt(t, 0, a, Math.PI / 4);
    e.box(`steel`, c, o, -0.5, 0.5, 0.8, 2.2, 2.9, 3.5);
  }
  let a = Jt(t, 0, r[0], Math.PI / 2 - 0.35);
  for (let t of [-0.25, 0.25])
    e.box(M, a, 0, t - 0.03, t + 0.03, 2.5, 31.2, 3.08, 3.14);
  for (let t = 2.8; t < 31; t += 0.9)
    e.add(
      M,
      new u(0.42, 0.025, 4, 12, Math.PI)
        .translate(0, 0, 3.12)
        .rotateX(Math.PI / 2)
        .translate(0, t, 0),
      a,
      0,
    );
  let o = -n.D / 2 + 0.8,
    s = n.D / 2 - 4,
    c = n.roofTop - 1.5,
    l = n.roofTop + 5.8;
  e.box(`cCorrGalv`, t, 0, -2.6, 2.6, c, l, o, s);
  for (let n = o + 1.2; n < s - 0.8; n += 2.2)
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
  let d = Fn(
    e,
    `corrugated`,
    t,
    0,
    -2.8,
    2.8,
    o - 0.2,
    s + 0.2,
    l,
    30 * Vt,
    !0,
    M,
  );
  for (let n of [o, s])
    Yt(
      e,
      `cCorrGalv`,
      Jt(t, 0, n, 0),
      0,
      -2.6,
      2.6,
      l,
      2.6 * Math.tan(30 * Vt),
      -0.05,
      0,
    );
  let f = r[3] - 1.5;
  (e.box(`cCorrGalv`, t, 0, -1.6, 1.6, 30.35, 33.15, f, o + 0.5),
    e.box(
      `corrugated`,
      t,
      0,
      -1.75,
      1.75,
      33.15,
      33.300000000000004,
      f - 0.15,
      o + 0.5,
    ));
  for (let n = f + 1; n < o - 0.5; n += 1.8)
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
    D(e, `steel`, t, 0, [1.9, l - 0.5, o + 0.4], [0.8, 30.55, n], 0.28);
  (N(e, M, t, 0, 0, (o + s) / 2, d, d + 2.2, 0.35, 0.25, 12),
    e.add(
      `steel`,
      new i(0.9, 1.2, 14).rotateX(Math.PI).translate(0, d + 2.8, (o + s) / 2),
      t,
      0,
    ),
    an(n, d + 3.5));
}
var Rn = (e) => (t, n, i) => {
  let a = i.t,
    o = -i.W / 2 + a,
    s = i.W / 2 - a,
    c = (i.D - 1.2) / 4,
    l = i.H + 0.05,
    u = 2.6,
    d = Math.atan2(u, c);
  for (let f = 0; f < 4; f++) {
    let p = i.D / 2 - 0.6 - f * c;
    (t.add(
      `corrugated`,
      new r(s - o, 0.12, Math.hypot(c, u) + 0.1)
        .rotateX(-d)
        .translate(0, l + u / 2 + 0.06, p - c / 2),
      n,
      0,
    ),
      t.box(`glassGrey`, n, 0, o, s, l, l + u, p - 0.05, p));
    for (let e = o; e <= s + 0.01; e += (s - o) / 20)
      t.box(M, n, 0, e - 0.05, e + 0.05, l, l + u, p - 0.02, p + 0.06);
    (t.box(
      M,
      n,
      0,
      o,
      s,
      l + u * 0.5 - 0.04,
      l + u * 0.5 + 0.04,
      p - 0.02,
      p + 0.06,
    ),
      t.box(M, n, 0, o, s, l + u - 0.1, l + u + 0.08, p - 0.12, p + 0.1));
    for (let r of [-1, 1]) {
      let o = new C([
        new h(p, l - 0.05),
        new h(p, l + u + 0.1),
        new h(p - c, l - 0.05),
      ]);
      t.add(
        e,
        new S(o, { depth: a, bevelEnabled: !1 })
          .rotateY(-Math.PI / 2)
          .translate(r > 0 ? i.W / 2 : -i.W / 2 + a, 0, 0),
        n,
        0,
      );
    }
  }
  (Nn(t, n, i.W / 2 - 3, -i.D / 2 - 2.4, 32, 1.5, 0.95, e),
    t.box(
      e,
      n,
      0,
      -i.W / 2 + 2,
      -i.W / 2 + 5.5,
      i.H,
      i.H + 4.5,
      -i.D / 2 + 1.2,
      -i.D / 2 + 4.2,
    ),
    t.box(
      `concrete`,
      n,
      0,
      -i.W / 2 + 1.85,
      -i.W / 2 + 5.65,
      i.H + 4.5,
      i.H + 4.65,
      -i.D / 2 + 1.05,
      -i.D / 2 + 4.35,
    ),
    an(i, 33));
};
