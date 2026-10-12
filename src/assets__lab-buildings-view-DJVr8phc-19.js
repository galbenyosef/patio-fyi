// assets__lab-buildings-view-DJVr8phc 19 — box
// Lines 6924-7202 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function zn(e, t, n) {
  let r = n.W / 2,
    a = n.H,
    o = n.D;
  for (let n = 0; n < 5; n++) {
    let i = -o / 2 + (n * o) / 5,
      c = i + o / 5,
      l = (i + c) / 2,
      d = e.cell(t, [r * 0.7, a + r * 0.7, l], `cCorrGalv`);
    (e.add(
      `cCorrHut`,
      new s(r + 0.05, r + 0.05, c - i, 36, 1, !0, Math.PI / 2, Math.PI)
        .rotateX(Math.PI / 2)
        .translate(0, a, l),
      t,
      d,
      { swap: !0 },
    ),
      e.add(
        `interior`,
        new s(r - 0.05, r - 0.05, c - i, 24, 1, !0, Math.PI / 2, Math.PI)
          .rotateX(Math.PI / 2)
          .translate(0, a, l),
        t,
        d,
      ));
    for (let n of [i + 0.05, c - 0.05])
      e.add(M, new u(r + 0.09, 0.05, 4, 36, Math.PI).translate(0, a, n), t, d);
  }
  for (let n of [-o / 2 + 3, o / 2 - 4])
    (N(e, `steel`, t, 0, 0, n, a + r - 0.1, a + r + 0.5, 0.35, 0.35, 12),
      e.add(
        `steel`,
        new i(0.55, 0.35, 12).translate(0, a + r + 0.68, n),
        t,
        0,
      ));
  (N(e, M, t, 0, r * 0.62, o / 2 - 6, a + r * 0.72, a + r + 1.4, 0.12, 0.12, 8),
    e.add(
      M,
      new i(0.25, 0.25, 8).translate(r * 0.62, a + r + 1.55, o / 2 - 6),
      t,
      0,
    ),
    an(n, a + r + 1.5));
}
var Bn = (e) => (t, n, i) => {
  let a = i.L / 2,
    o = i.H,
    s = i.L / 2 + 0.02,
    c = t.cell(n, [a, o + 2, -0.1], `cWoodGrey`),
    l = e ? 1.9 : 0.9,
    u = e ? 3.6 : 2.4,
    d = new C();
  (d.moveTo(a - s, o),
    d.lineTo(a - l, o),
    d.lineTo(a - l, o + u),
    d.lineTo(a + l, o + u),
    d.lineTo(a + l, o),
    d.lineTo(a + s, o),
    d.absarc(a, o, s, 0, Math.PI, !1),
    d.closePath());
  let f = [
    [a - 3.7, o + 1.5],
    [a + 3.7, o + 1.5],
  ];
  for (let [e, t] of f) {
    let n = new p();
    (n.moveTo(e - 0.55, t),
      n.lineTo(e + 0.55, t),
      n.lineTo(e + 0.55, t + 0.9),
      n.lineTo(e - 0.55, t + 0.9),
      n.closePath(),
      d.holes.push(n));
  }
  t.add(
    `cWoodGrey`,
    new S(d, { depth: 0.12, bevelEnabled: !1, curveSegments: 18 }).translate(
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
      a + e * l - 0.1,
      a + e * l + 0.1,
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
      a - l - 0.1,
      a + l + 0.1,
      o + u,
      o + u + 0.2,
      -0.13,
      0,
    ),
    ge(n, a, o, 2 * l - 0.2, u, 0.12),
    e)
  )
    (t.box(
      M,
      n,
      c,
      a - 2 * l - 0.4,
      a + 2 * l + 0.4,
      o + u + 0.2,
      o + u + 0.35,
      -0.05,
      0.12,
    ),
      t.box(
        `cCorrGalv`,
        n,
        c,
        a - 2 * l - 0.25,
        a - l + 0.05,
        o + 0.02,
        o + u + 0.15,
        0,
        0.08,
      ),
      t.box(
        `cCorrGalv`,
        n,
        c,
        a + l - 0.05,
        a + 2 * l + 0.25,
        o + 0.02,
        o + u + 0.15,
        0,
        0.08,
      ),
      t.box(
        `signCvQuonset`,
        n,
        c,
        a - 1.6,
        a + 1.6,
        o + u + 0.55,
        o + u + 1.25,
        -0.12,
        -0.1,
        { planar: (e, t) => [(e - a + 1.6) / 3.2, (t - o - u - 0.55) / 0.7] },
      ),
      Ve(i, 0, a - 2.2, a + 2.2, (e, i, a) =>
        t.add(
          `concrete`,
          new r(a - i, 0.14, 2.1)
            .rotateX(Math.atan2(o, 2))
            .translate((i + a) / 2, o / 2 - 0.05, 1),
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
        a - 0.9,
        a + 0.9,
        0,
        o - e * 0.2,
        0.1 + e * 0.3,
        0.4 + e * 0.3,
      );
};
function Vn(e, t, n) {
  let r = n.roofTop,
    i = n.D / 2 - 2.2;
  (e.box(`louver`, t, 0, -1.3, 1.3, r - 0.9, r + 1.4, -i, i),
    Fn(
      e,
      `cSlate`,
      t,
      0,
      -1.9,
      1.9,
      -i - 0.3,
      i + 0.3,
      r + 1.4,
      25 * Vt,
      !0,
      M,
    ));
  for (let n of [-i, i])
    Yt(
      e,
      `louver`,
      Jt(t, 0, n, 0),
      0,
      -1.3,
      1.3,
      r + 1.4,
      1.3 * Math.tan(25 * Vt),
      -0.1,
      0,
    );
  for (let r of [-5, 5]) Nn(e, t, r, -n.D / 2 - 2.6, 42, 1.6, 1, `brickRed`);
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
      N(e, `trimWhite`, t, 0, a, n + r, 2.2, 3.1, 0.12, 0.08, 8);
      for (let i = 0; i < 4; i++)
        N(
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
  an(n, 43);
}
function Hn(e, t, n) {
  let i = n.gableCell,
    a = n.L / 2,
    o = n.H + 2.2;
  (e.add(`glass`, new y(1.1, 28).translate(a, o, 0.02), t, i),
    e.add(`stone`, new se(1.1, 1.45, 28).translate(a, o, 0.05), t, i));
  for (let n = 0; n < 4; n++)
    e.add(
      M,
      new r(2.2, 0.06, 0.04).rotateZ((n * Math.PI) / 4).translate(a, o, 0.05),
      t,
      i,
    );
}
