// assets__lab-buildings-view-DJVr8phc 128 — translate
// Lines 42661-42982 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function Df(e, t, n, r, i, a, o) {
  let s = Math.tan(i),
    c = n.W / 2 + a,
    l = n.D / 2 + a,
    u = n.H - a * s,
    d = c - l,
    f = u + l * s;
  if ((Ef(e, t, 0, r, c, l, u, d, 0, f), o)) {
    for (let n of [-1, 1]) {
      (e.box(o, t, 0, -c, c, u - 0.2, u + 0.02, n * l - 0.03, n * l + 0.03),
        e.box(o, t, 0, n * c - 0.03, n * c + 0.03, u - 0.2, u + 0.02, -l, l));
      for (let r of [-1, 1])
        D(e, o, t, 0, [n * c, u + 0.04, r * l], [n * d, f + 0.04, 0], 0.16);
    }
    e.box(o, t, 0, -d - 0.05, d + 0.05, f - 0.04, f + 0.1, -0.1, 0.1);
  }
  return f;
}
var Of = {
  ridge: `x`,
  pitch: 0.02,
  over: 0.02,
  mat: `tarRoof`,
  fascia: `tarRoof`,
};
function kf(e, t, n, r) {
  let i = tf(e, n),
    a = (r + 0.5) * e.bw,
    o = Math.min(t.w, e.bw - 0.5),
    s = Math.min(t.h, i - t.sill - 0.35),
    c = e.ys[n] + t.sill;
  return {
    cu: a,
    a0: a - o / 2,
    a1: a + o / 2,
    b0: c,
    b1: c + s,
    ow: o,
    oh: s,
  };
}
function Af(e, t, n, r, i, a, o, s, c = {}) {
  let l = r - a / 2,
    u = r + a / 2,
    d = 0.08;
  e.box(`glass`, t, n, l, u, i, i + o, 0.005, 0.02);
  for (let [a, c, f, p] of [
    [l - d, l, i, i + o],
    [u, u + d, i, i + o],
    [l - d, u + d, i - d, i],
    [l - d, u + d, i + o, i + o + d],
    [r - 0.025, r + 0.025, i, i + o],
  ])
    e.box(s, t, n, a, c, f, p, 0, 0.07);
  if (
    (c.cross &&
      e.box(s, t, n, l, u, i + o * 0.62 - 0.025, i + o * 0.62 + 0.025, 0, 0.06),
    c.shut)
  )
    for (let r of [-1, 1])
      e.box(
        c.shut,
        t,
        n,
        r < 0 ? l - d - a / 2 : u + d,
        r < 0 ? l - d : u + d + a / 2,
        i,
        i + o,
        0.01,
        0.05,
      );
}
function jf(e, t, n, i, a, o, s, c = 0) {
  (e.add(`glass`, new y(o, 20).translate(i, a, c + 0.02), t, n),
    e.add(s, new u(o + 0.06, 0.08, 6, 20).translate(i, a, c + 0.05), t, n));
  for (let l of [0, Math.PI / 2])
    e.add(
      s,
      new r(2 * o, 0.05, 0.04).rotateZ(l).translate(i, a, c + 0.04),
      t,
      n,
    );
}
function Mf(e, t, n, i, a, o, c) {
  (e.add(`euClockFace`, new y(o, 32).translate(i, a, c + 0.06), t, n, {
    planar: (e, t) => [(e - i) / (2 * o) + 0.5, (t - a) / (2 * o) + 0.5],
  }),
    e.add(
      `euGilt`,
      new s(o + 0.1, o + 0.1, 0.1, 32).rotateX(Math.PI / 2).translate(i, a, c),
      t,
      n,
    ),
    e.add(
      H,
      new r(0.07, o * 0.55, 0.03)
        .translate(0, o * 0.26, 0)
        .rotateZ(-0.9)
        .translate(i, a, c + 0.09),
      t,
      n,
    ),
    e.add(
      H,
      new r(0.05, o * 0.8, 0.03)
        .translate(0, o * 0.38, 0)
        .rotateZ(-4.3)
        .translate(i, a, c + 0.11),
      t,
      n,
    ));
}
function Nf(e, t, n, r, a, o, s, c = 1) {
  (e.box(
    s,
    t,
    n,
    r - 0.14 * c,
    r + 0.14 * c,
    a,
    a + 0.3 * c,
    o - 0.14 * c,
    o + 0.14 * c,
  ),
    e.add(s, new w(0.17 * c, 10, 8).translate(r, a + 0.45 * c, o), t, n),
    e.add(s, new i(0.05 * c, 0.3 * c, 6).translate(r, a + 0.72 * c, o), t, n));
}
function Pf(e, t, n, r, i, a, o, c) {
  (e.box(
    c,
    t,
    n,
    r - 0.3 * o,
    r + 0.3 * o,
    i,
    i + 0.35 * o,
    a - 0.3 * o,
    a + 0.3 * o,
  ),
    e.add(
      c,
      new s(0.16 * o, 0.26 * o, 1.1 * o, 8).translate(r, i + 0.9 * o, a),
      t,
      n,
    ),
    e.add(
      c,
      new s(0.13 * o, 0.16 * o, 0.4 * o, 8).translate(r, i + 1.62 * o, a),
      t,
      n,
    ),
    e.add(c, new w(0.12 * o, 8, 6).translate(r, i + 1.95 * o, a), t, n),
    D(
      e,
      c,
      t,
      n,
      [r + 0.14 * o, i + 1.7 * o, a],
      [r + 0.36 * o, i + 2.25 * o, a + 0.05 * o],
      0.07 * o,
    ),
    D(
      e,
      c,
      t,
      n,
      [r + 0.36 * o, i + 2 * o, a + 0.05 * o],
      [r + 0.36 * o, i + 2.7 * o, a + 0.05 * o],
      0.035 * o,
    ));
}
function Ff(e, t, n, r, a, o = 0.55) {
  (e.box(H, t, n, r - 0.08, r + 0.08, a - 0.35, a + 0.15, 0, 0.04),
    e.box(H, t, n, r - 0.025, r + 0.025, a + 0.05, a + 0.1, 0, o),
    D(e, H, t, n, [r, a - 0.3, 0.02], [r, a + 0.06, o * 0.7], 0.03),
    e.box(
      `euLamp`,
      t,
      n,
      r - 0.12,
      r + 0.12,
      a - 0.42,
      a - 0.08,
      o - 0.12,
      o + 0.12,
    ));
  for (let [i, s] of [
    [-1, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
  ])
    e.box(
      H,
      t,
      n,
      r + i * 0.13 - 0.015,
      r + i * 0.13 + 0.015,
      a - 0.44,
      a - 0.06,
      o + s * 0.13 - 0.015,
      o + s * 0.13 + 0.015,
    );
  (e.add(
    H,
    nf(new i(0.2, 0.2, 4).rotateY(Math.PI / 4).translate(r, a + 0.02, o)),
    t,
    n,
  ),
    e.add(H, new s(0.01, 0.01, 0.2, 4).translate(r, a - 0.02, o), t, n));
}
function If(e, t, n, r, i, a = 0.55, o = `euFlowers`) {
  (e.box(H, t, n, r - 0.02, r + 0.02, i - 0.02, i + 0.02, 0, a + 0.05),
    D(e, H, t, n, [r, i - 0.3, 0.01], [r, i, a * 0.6], 0.025),
    e.add(H, new s(0.008, 0.008, 0.35, 4).translate(r, i - 0.18, a), t, n),
    e.add(
      o,
      new w(0.3, 10, 7).scale(1, 0.75, 1).translate(r, i - 0.5, a),
      t,
      n,
    ));
}
function Lf(e, t, n, r, i, a = 0, o = 1) {
  (e.add(
    `euOak`,
    new s(0.28 * o, 0.28 * o, 0.85 * o, 10).translate(r, a + 0.425 * o, i),
    t,
    n,
  ),
    e.add(
      `euOak`,
      new s(0.32 * o, 0.32 * o, 0.35 * o, 10).translate(r, a + 0.425 * o, i),
      t,
      n,
    ));
  for (let c of [0.12, 0.73])
    e.add(
      H,
      new s(0.295 * o, 0.295 * o, 0.05, 10).translate(r, a + c * o, i),
      t,
      n,
    );
}
function Rf(e, t, n, r, i, a = `woodDark`) {
  (Cf(e, `euPaintCream`, t, n, r, i, 0.72, 0.75, 0.36, 0.36, 12),
    Cf(e, H, t, n, r, i, 0.02, 0.72, 0.04, 0.04, 6),
    Cf(e, H, t, n, r, i, 0, 0.04, 0.25, 0.25, 8));
  for (let o of [-1, 1]) {
    let s = r + o * 0.62;
    (e.box(a, t, n, s - 0.2, s + 0.2, 0.44, 0.48, i - 0.2, i + 0.2),
      e.box(
        a,
        t,
        n,
        o > 0 ? s + 0.16 : s - 0.2,
        o > 0 ? s + 0.2 : s - 0.16,
        0.48,
        0.92,
        i - 0.2,
        i + 0.2,
      ));
    for (let r of [-0.17, 0.17])
      for (let a of [-0.17, 0.17])
        e.box(
          H,
          t,
          n,
          s + r - 0.015,
          s + r + 0.015,
          0,
          0.44,
          i + a - 0.015,
          i + a + 0.015,
        );
  }
}
function zf(e, t, n, r, i, a, o, c, l = 0.95) {
  (e.box(c, t, n, r, i, a, a + 0.14, o - 0.14, o + 0.14),
    e.box(
      c,
      t,
      n,
      r - 0.02,
      i + 0.02,
      a + l - 0.12,
      a + l,
      o - 0.16,
      o + 0.16,
    ));
  for (let u = r + 0.14; u < i - 0.08; u += 0.26)
    e.add(
      c,
      new s(0.05, 0.08, l - 0.26, 6).translate(u, a + 0.14 + (l - 0.26) / 2, o),
      t,
      n,
    );
}
function Bf(e, t, n, r, i, a, o, c, l, u) {
  (e.box(n, t, 0, r - c / 2, r + c / 2, a, o, i - l / 2, i + l / 2),
    e.box(
      `concrete`,
      t,
      0,
      r - c / 2 - 0.08,
      r + c / 2 + 0.08,
      o,
      o + 0.14,
      i - l / 2 - 0.08,
      i + l / 2 + 0.08,
    ));
  for (let n = 0; n < u; n++)
    e.add(
      `euTileClay`,
      new s(0.1, 0.14, 0.55, 8).translate(
        r - c / 2 + (c * (n + 0.5)) / u,
        o + 0.42,
        i,
      ),
      t,
      0,
    );
}
