// assets__lab-buildings-view-DY6ytqNM 19 — box
// Lines 6924-7202 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function Rn(e, t, n) {
  let r = n.W / 2,
    i = n.H,
    a = n.D;
  for (let n = 0; n < 5; n++) {
    let s = -a / 2 + (n * a) / 5,
      c = s + a / 5,
      l = (s + c) / 2,
      u = e.cell(t, [r * 0.7, i + r * 0.7, l], `cCorrGalv`);
    (e.add(
      `cCorrHut`,
      new C(r + 0.05, r + 0.05, c - s, 36, 1, !0, Math.PI / 2, Math.PI)
        .rotateX(Math.PI / 2)
        .translate(0, i, l),
      t,
      u,
      { swap: !0 },
    ),
      e.add(
        `interior`,
        new C(r - 0.05, r - 0.05, c - s, 24, 1, !0, Math.PI / 2, Math.PI)
          .rotateX(Math.PI / 2)
          .translate(0, i, l),
        t,
        u,
      ));
    for (let n of [s + 0.05, c - 0.05])
      e.add(N, new o(r + 0.09, 0.05, 4, 36, Math.PI).translate(0, i, n), t, u);
  }
  for (let n of [-a / 2 + 3, a / 2 - 4])
    (P(e, `steel`, t, 0, 0, n, i + r - 0.1, i + r + 0.5, 0.35, 0.35, 12),
      e.add(
        `steel`,
        new d(0.55, 0.35, 12).translate(0, i + r + 0.68, n),
        t,
        0,
      ));
  (P(e, N, t, 0, r * 0.62, a / 2 - 6, i + r * 0.72, i + r + 1.4, 0.12, 0.12, 8),
    e.add(
      N,
      new d(0.25, 0.25, 8).translate(r * 0.62, i + r + 1.55, a / 2 - 6),
      t,
      0,
    ),
    rn(n, i + r + 1.5));
}
var zn = (e) => (t, n, r) => {
  let i = r.L / 2,
    o = r.H,
    s = r.L / 2 + 0.02,
    c = t.cell(n, [i, o + 2, -0.1], `cWoodGrey`),
    l = e ? 1.9 : 0.9,
    u = e ? 3.6 : 2.4,
    d = new T();
  (d.moveTo(i - s, o),
    d.lineTo(i - l, o),
    d.lineTo(i - l, o + u),
    d.lineTo(i + l, o + u),
    d.lineTo(i + l, o),
    d.lineTo(i + s, o),
    d.absarc(i, o, s, 0, Math.PI, !1),
    d.closePath());
  let f = [
    [i - 3.7, o + 1.5],
    [i + 3.7, o + 1.5],
  ];
  for (let [e, t] of f) {
    let n = new ne();
    (n.moveTo(e - 0.55, t),
      n.lineTo(e + 0.55, t),
      n.lineTo(e + 0.55, t + 0.9),
      n.lineTo(e - 0.55, t + 0.9),
      n.closePath(),
      d.holes.push(n));
  }
  t.add(
    `cWoodGrey`,
    new w(d, { depth: 0.12, bevelEnabled: !1, curveSegments: 18 }).translate(
      0,
      0,
      -0.25,
    ),
    n,
    c,
  );
  for (let [e, r] of f)
    (t.box(`glass`, n, c, e - 0.55, e + 0.55, r, r + 0.9, -0.2, -0.18),
      t.box(`trimWhite`, n, c, e - 0.62, e + 0.62, r - 0.07, r, -0.13, -0.05),
      t.box(
        `trimWhite`,
        n,
        c,
        e - 0.62,
        e + 0.62,
        r + 0.9,
        r + 0.97,
        -0.13,
        -0.05,
      ),
      t.box(`trimWhite`, n, c, e - 0.62, e - 0.55, r, r + 0.9, -0.13, -0.05),
      t.box(`trimWhite`, n, c, e + 0.55, e + 0.62, r, r + 0.9, -0.13, -0.05),
      t.box(`trimWhite`, n, c, e - 0.02, e + 0.02, r, r + 0.9, -0.18, -0.12));
  for (let e of [-1, 1])
    t.box(
      `cWoodGrey`,
      n,
      c,
      i + e * l - 0.1,
      i + e * l + 0.1,
      o,
      o + u + 0.1,
      -0.13,
      0,
    );
  if (
    (t.box(
      `cWoodGrey`,
      n,
      c,
      i - l - 0.1,
      i + l + 0.1,
      o + u,
      o + u + 0.2,
      -0.13,
      0,
    ),
    me(n, i, o, 2 * l - 0.2, u, 0.12),
    e)
  )
    (t.box(
      N,
      n,
      c,
      i - 2 * l - 0.4,
      i + 2 * l + 0.4,
      o + u + 0.2,
      o + u + 0.35,
      -0.05,
      0.12,
    ),
      t.box(
        `cCorrGalv`,
        n,
        c,
        i - 2 * l - 0.25,
        i - l + 0.05,
        o + 0.02,
        o + u + 0.15,
        0,
        0.08,
      ),
      t.box(
        `cCorrGalv`,
        n,
        c,
        i + l - 0.05,
        i + 2 * l + 0.25,
        o + 0.02,
        o + u + 0.15,
        0,
        0.08,
      ),
      t.box(
        `signCvQuonset`,
        n,
        c,
        i - 1.6,
        i + 1.6,
        o + u + 0.55,
        o + u + 1.25,
        -0.12,
        -0.1,
        { planar: (e, t) => [(e - i + 1.6) / 3.2, (t - o - u - 0.55) / 0.7] },
      ),
      ze(r, 0, i - 2.2, i + 2.2, (e, r, i) =>
        t.add(
          `concrete`,
          new a(i - r, 0.14, 2.1)
            .rotateX(Math.atan2(o, 2))
            .translate((r + i) / 2, o / 2 - 0.05, 1),
          n,
          e,
        ),
      ));
  else
    for (let e = 0; e < 3; e++)
      t.box(
        `concrete`,
        n,
        c,
        i - 0.9,
        i + 0.9,
        0,
        o - e * 0.2,
        0.1 + e * 0.3,
        0.4 + e * 0.3,
      );
};
function Bn(e, t, n) {
  let r = n.roofTop,
    i = n.D / 2 - 2.2;
  (e.box(`louver`, t, 0, -1.3, 1.3, r - 0.9, r + 1.4, -i, i),
    Pn(
      e,
      `cSlate`,
      t,
      0,
      -1.9,
      1.9,
      -i - 0.3,
      i + 0.3,
      r + 1.4,
      25 * Bt,
      !0,
      N,
    ));
  for (let n of [-i, i])
    Jt(
      e,
      `louver`,
      qt(t, 0, n, 0),
      0,
      -1.3,
      1.3,
      r + 1.4,
      1.3 * Math.tan(25 * Bt),
      -0.1,
      0,
    );
  for (let r of [-5, 5]) Mn(e, t, r, -n.D / 2 - 2.6, 42, 1.6, 1, `brickRed`);
  let a = n.W / 2 + 1.2;
  for (let n of [-4, 0, 4]) {
    e.box(`steel`, t, 0, a - 0.6, a + 0.6, 0, 2.2, n - 0.9, n + 0.9);
    for (let r = -2; r <= 2; r++)
      e.box(
        `steel`,
        t,
        0,
        a + 0.6,
        a + 0.72,
        0.2,
        2,
        n + r * 0.32 - 0.1,
        n + r * 0.32 + 0.1,
      );
    for (let r of [-0.5, 0, 0.5]) {
      P(e, `trimWhite`, t, 0, a, n + r, 2.2, 3.1, 0.12, 0.08, 8);
      for (let i = 0; i < 4; i++)
        P(
          e,
          `trimWhite`,
          t,
          0,
          a,
          n + r,
          2.3 + i * 0.2,
          2.36 + i * 0.2,
          0.2,
          0.2,
          8,
        );
    }
  }
  rn(n, 43);
}
function Vn(e, t, n) {
  let r = n.gableCell,
    i = n.L / 2,
    o = n.H + 2.2;
  (e.add(`glass`, new c(1.1, 28).translate(i, o, 0.02), t, r),
    e.add(`stone`, new re(1.1, 1.45, 28).translate(i, o, 0.05), t, r));
  for (let n = 0; n < 4; n++)
    e.add(
      N,
      new a(2.2, 0.06, 0.04).rotateZ((n * Math.PI) / 4).translate(i, o, 0.05),
      t,
      r,
    );
}
