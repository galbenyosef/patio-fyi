// assets__yard-dressing-view-Du2F6MWT 11 — math
// Lines 3206-3501 of readable/assets__yard-dressing-view-Du2F6MWT.pretty.js (statement-aligned).
function kn(e, t, n, r, i, a, o = _e()) {
  let s = 0.004,
    c = r + (a * s) / 2;
  (V(e, 0.05, 0.07, s, o, t - i * 0.03, n, c),
    V(e, 0.014, 0.05, 0.028, o, t - i * 0.03, n + 0.004, r + a * 0.016),
    V(e, 0.05, 0.05, s, o, t + i * 0.13, n, c),
    V(e, 0.2, 0.014, 0.006, o, t + i * 0.05, n + 0.012, r + a * 0.01));
  for (let r of [-0.015, 0.015])
    (Dn(e, t - i * 0.03, n + r * 2, c + a * 0.003, o),
      Dn(e, t + i * 0.13, n + r, c + a * 0.003, o));
}
function An(e, t, n, r, i, a = _e(), o = 0.16) {
  V(e, 0.013, o, 0.013, a, t, n, r + i * 0.036);
  for (let s of [-1, 1])
    V(e, 0.013, 0.013, 0.036, a, t, n + s * (o / 2 - 0.007), r + i * 0.018);
}
function jn(e, t, n, r, i, a = _e()) {
  (I(e, new c(0.03, 0.03, 0.006, 16), a, t, n, r + i * 0.003, J / 2, 0, 0),
    I(e, new d(0.04, 0.005, 6, 20), a, t, n - 0.04, r + i * 0.012));
}
function Mn(e, t, n, r, i, o, s) {
  if (o !== `none`) {
    if (o === `flat`) {
      (dn(e, i + 0.032, 0.022, i + 0.032, s, t, n, r, 0.006),
        dn(e, i + 0.012, 0.016, i + 0.012, s, t, n - 0.016, r));
      return;
    }
    (dn(e, i + 0.02, 0.02, i + 0.02, s, t, n, r, 0.004),
      o === `pyramid` || o === `copper`
        ? I(
            e,
            new a((i + 0.02) * 0.707, 0.07, 4),
            o === `copper` ? H(12088115, 0.35, 0.85) : s,
            t,
            n + 0.055,
            r,
            0,
            J / 4,
            0,
          )
        : o === `ball`
          ? (z(e, 0.017, 0.024, 0.03, s, t, n + 0.02, r, 12),
            j(e, 0.042, s, t, n + 0.09, r, 14))
          : o === `solar` &&
            (B(e, i * 0.8, 0.045, i * 0.8, Ce(16773320, 0.5), t, n + 0.02, r),
            B(
              e,
              i + 0.01,
              0.022,
              i + 0.01,
              H(1842464, 0.35, 0.5),
              t,
              n + 0.065,
              r,
            )));
  }
}
function Nn(e, t, n, r, i) {
  let a = Math.max(1.2, t.length ?? 8),
    o = t.gate ?? Math.abs(n) % 2 == 1;
  a < i + 1.2 && (o = !1);
  let s = Math.max(0, a / 2 - i / 2 - 0.9),
    c = o ? (e.chance(0.4) ? 0 : e.range(-1, 1) * s) : 0,
    l = o
      ? [
          [-a / 2, c - i / 2],
          [c + i / 2, a / 2],
        ]
      : [[-a / 2, a / 2]],
    u = [],
    d = [];
  for (let [e, t] of l) {
    let n = Math.max(1, Math.ceil((t - e) / r - 0.08));
    for (let r = 0; r <= n; r++) u.push(e + ((t - e) * r) / n);
    for (let r = 0; r < n; r++)
      d.push([e + ((t - e) * r) / n, e + ((t - e) * (r + 1)) / n]);
  }
  return (
    u.sort((e, t) => e - t),
    {
      L: a,
      posts: u.filter((e, t) => t === 0 || e - u[t - 1] > 0.01),
      sections: d,
      parts: l,
      gate: o ? [c - i / 2, c + i / 2] : null,
    }
  );
}
function Pn(e, t, n, r, i, a, o, s = 0.089, c = 0.038) {
  let l = n - t,
    u = (t + n) / 2;
  (Y(e, l, s, c, o, u, r, a), Y(e, l, s, c, o, u, i, a));
  let d = t + 0.06,
    f = n - 0.06,
    p = r + s / 2,
    m = i - s / 2;
  Y(
    e,
    Math.hypot(f - d, m - p),
    s * 0.9,
    c,
    o,
    (d + f) / 2,
    (p + m) / 2,
    a,
    0,
    0,
    0,
    Math.atan2(m - p, f - d),
  );
}
var Fn = (e, t, n, r) => {
  cn(t) &&
    K(
      e,
      { w: n, d: 0.9 },
      { count: Math.round(n * 7), y: 0.012, seed: r, clump: 0.3 },
    );
};
function In(e, t, n) {
  let r = t / 2;
  if (e === `point`)
    return [
      [-r, 0],
      [r, 0],
      [r, n - t * 0.55],
      [0, n],
      [-r, n - t * 0.55],
    ];
  if (e === `dog`) {
    let e = t * 0.28;
    return [
      [-r, 0],
      [r, 0],
      [r, n - e],
      [r - e, n],
      [-r + e, n],
      [-r, n - e],
    ];
  }
  let i = [
    [r, n - t * 1.25],
    [r * 0.72, n - t * 1.05],
    [r * 0.9, n - t * 0.8],
    [r * 0.8, n - t * 0.5],
    [r * 0.5, n - t * 0.22],
    [0, n],
  ];
  return [
    [-r, 0],
    [r, 0],
    ...i,
    ...i
      .slice(0, -1)
      .reverse()
      .map(([e, t]) => [-e, t]),
  ];
}
function Ln(e, t, n, r, i, a, o) {
  let s = Math.max(1, Math.round((r - n) / (t.pw + t.gap)));
  for (let c = 0; c < s; c++) {
    let l = n + ((r - n) * (c + 0.5)) / s,
      u = (l - (n + r) / 2) / ((r - n) / 2),
      d = Math.round(o(u) * 200) / 200;
    (t.geos.has(d) || t.geos.set(d, fn(In(t.top, t.pw, d), 0.019)),
      I(e, t.geos.get(d), t.m, l, i, a));
  }
}
function Rn(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = 0.089,
    { L: a, posts: o, sections: s, gate: c } = Nn(n, t, e, 2.44, 1.069),
    l = n.range(0.9, 1.1),
    u = gn(n.pick([16053230, 15788244, 16250610, 15327690]), 0.55),
    d = {
      top: n.pick([`point`, `dog`, `gothic`]),
      pw: n.pick([0.064, 0.07, 0.089]),
      m: u,
      geos: new Map(),
    };
  d.gap = d.pw * n.range(0.6, 0.95);
  let f = n.chance(0.3) ? n.range(0.07, 0.15) : 0,
    p = l + n.range(0.06, 0.16),
    m = n.pick([`ball`, `pyramid`, `flat`, `flat`]),
    h = i / 2 - 0.019,
    g = i / 2;
  for (let e of o) (dn(r, i, p, i, u, e, 0, 0, 0.005), Mn(r, e, p, 0, i, m, u));
  for (let [e, t] of s) {
    for (let n of [0.2, l - 0.26]) {
      Y(r, t - e - i, 0.064, 0.038, u, (e + t) / 2, n, h);
      for (let a of [-1, 1])
        Dn(
          r,
          a < 0 ? e + i / 2 + 0.02 : t - i / 2 - 0.02,
          n,
          0.005499999999999998,
          _n(),
        );
    }
    Ln(r, d, e + i / 2, t - i / 2, 0.05, g, (e) => l - 0.05 - f * (1 - e * e));
  }
  if (c) {
    let e = c[0] + i / 2 + 0.012,
      t = c[1] - i / 2 - 0.012,
      a = n.chance(0.45) ? n.range(0.05, 0.12) : 0,
      o = _e();
    (Pn(r, e, t, 0.22, l - 0.28, h, u, 0.064),
      Ln(
        r,
        d,
        e + 0.004,
        t - 0.004,
        0.08,
        g,
        (e) => l - 0.08 + a * (1 - e * e) - f * 0.4,
      ));
    for (let e of [0.22, l - 0.28])
      On(r, c[0] + i / 2, e, 0.0635, 0.24, 1, 1, o);
    (kn(r, c[1] - i / 2, l - 0.28, 0.0635, -1, 1, o),
      jn(r, t - 0.1, l - 0.42, 0.0635, 1, o));
  }
  return (
    Fn(r, t, a, e),
    R(hn(r), {
      keepGrass: !0,
      gate: c,
      length: a,
      note: `${d.top} pickets, ${l.toFixed(2)} m`,
    })
  );
}
function zn(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = 0.089,
    { L: a, posts: o, sections: s, gate: c } = Nn(n, t, e, 2.44, 1.219),
    l = n.pick([1.83, 1.83, 1.8, 1.9]),
    u = n.pick(Object.keys(Sn)),
    d = xn(Sn[u], 0.86),
    f = yn(),
    p = 0.14,
    m = n.range(0.002, 0.008),
    h = n.range(0.018, 0.03),
    g = 0.05,
    _ = i / 2 - 0.019,
    v = (e) =>
      fn(
        [
          [-0.14 / 2, 0],
          [p / 2, 0],
          [p / 2, e - h],
          [p / 2 - h, e],
          [-0.14 / 2 + h, e],
          [-0.14 / 2, e - h],
        ],
        0.016,
        [],
        (t, n, r) => [n / e, (t + p / 2) / p + r * 3],
      ),
    y = v(l - g),
    b = v(l - g - 0.03),
    x = n.chance(0.5);
  for (let e of o) dn(r, i, l - 0.1, i, f, e, 0, 0, 0.008);
  for (let [e, t] of s) {
    for (let n of [0.28, l / 2, l - 0.3])
      Y(r, t - e - i, 0.089, 0.038, f, (e + t) / 2, n, _);
    x && Y(r, t - e - i, 0.14, 0.038, f, (e + t) / 2, 0.07, _);
  }
  let S = (e, t, i, a) => {
      let o = Math.max(1, Math.round((t - e) / (p + m)));
      for (let s = 0; s < o; s++)
        I(r, a, n.pick(d), e + ((t - e) * (s + 0.5)) / o, i, 0.0445);
    },
    C = c
      ? [
          [-a / 2 - i / 2, c[0] + i / 2],
          [c[1] - i / 2, a / 2 + i / 2],
        ]
      : [[-a / 2 - i / 2, a / 2 + i / 2]];
  for (let [e, t] of C) S(e, t, g, y);
  if (c) {
    let e = c[0] + i / 2 + 0.012,
      t = c[1] - i / 2 - 0.012,
      n = _e();
    (Pn(r, e, t, 0.3, l - 0.32, _, f), S(e, t, 0.07, b));
    for (let e of [0.3, l - 0.32])
      On(r, c[0] + i / 2, e, 0.006499999999999999, 0.4, 1, -1, n);
    (kn(r, c[1] - i / 2, l - 0.75, 0.006499999999999999, -1, -1, n),
      An(r, t - 0.1, 1.05, 0.0605, 1, n));
  }
  return (
    Fn(r, t, a, e),
    R(hn(r), { keepGrass: !0, gate: c, length: a, note: `${u} dog-ear` })
  );
}
