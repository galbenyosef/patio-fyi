// assets__yard-dressing-view-Du2F6MWT 12 — range
// Lines 3502-3823 of readable/assets__yard-dressing-view-Du2F6MWT.pretty.js (statement-aligned).
function Bn(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = 0.089,
    { L: a, posts: o, sections: s, gate: c } = Nn(n, t, e, 2.44, 1.219),
    l = n.range(1.75, 1.9),
    u = n.pick(Object.keys(Sn)),
    d = xn(Sn[u], 0.84),
    f = yn(),
    p = d[1],
    m = n.pick([0.14, 0.14, 0.089]),
    h = 0.016,
    g = m + m * n.range(0.5, 0.75),
    _ = l - 0.038,
    v = n.chance(0.5),
    y = v ? 0.12 : 0.05,
    b = _ - 0.012 - y,
    x = 0.0605 + 0.0095;
  for (let e of o) dn(r, i, _, i, f, e, 0, 0, 0.004);
  for (let [e, t] of s)
    for (let n of [0.3, _ / 2, _ - 0.25])
      Y(r, t - e - i, 0.038, i, f, (e + t) / 2, n, 0);
  let S = (e, t, i, a, o) => {
      let s = Math.max(1, Math.floor((t - e - m) / g) + 1),
        c = (t - e - ((s - 1) * g + m)) / 2;
      for (let t = 0; t < s; t++) {
        let l = e + c + m / 2 + t * g;
        (Y(r, m, a, h, n.pick(d), l, i + a / 2, o),
          t < s - 1 && Y(r, m, a, h, n.pick(d), l + g / 2, i + a / 2, -o));
      }
    },
    C = c
      ? [
          [-a / 2 - i / 2, c[0] + i / 2],
          [c[1] - i / 2, a / 2 + i / 2],
        ]
      : [[-a / 2 - i / 2, a / 2 + i / 2]];
  for (let [e, t] of C) {
    (S(e, t, y, b, 0.0525),
      Y(r, t - e + 0.03, 0.038, 0.14, p, (e + t) / 2, l - 0.019, 0, 0.004));
    for (let n of [-1, 1])
      (Y(r, t - e, 0.089, 0.019, p, (e + t) / 2, _ - 0.0445, n * x),
        v && Y(r, t - e, 0.14, 0.019, p, (e + t) / 2, 0.07, n * x));
  }
  if (c) {
    let e = c[0] + i / 2 + 0.012,
      t = c[1] - i / 2 - 0.012,
      n = _e();
    (Pn(r, e, t, 0.3, _ - 0.3, 0, f, 0.089, 0.064),
      S(e, t, y + 0.02, b - 0.04, 0.04));
    for (let n of [-1, 1])
      Y(r, t - e, 0.089, 0.019, p, (e + t) / 2, _ - 0.07, n * 0.0575);
    for (let e of [0.35, _ - 0.35])
      On(r, c[0] + i / 2, e, 0.048, 0.35, 1, 1, n);
    (kn(r, c[1] - i / 2, 1.1, 0.048, -1, 1, n),
      An(r, t - 0.1, 0.95, 0.048, 1, n));
  }
  return (
    Fn(r, t, a, e),
    R(hn(r), { keepGrass: !0, gate: c, length: a, note: `${u} board-on-board` })
  );
}
function Vn(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = n.chance(0.5),
    a = i ? 0.064 : 0.089,
    {
      L: o,
      posts: s,
      sections: c,
      gate: l,
    } = Nn(n, t, e, 1.83, 1.05 + a + 0.03),
    u = n.pick([0.089, 0.14, 0.14]),
    d = n.chance(0.5),
    f = d ? n.range(0.004, 0.008) : n.range(0.016, 0.03),
    p = 0.019,
    m = n.range(1.5, 1.85),
    h = xn(n.pick([W.cedar, W.redwood, W.teak, 3814706, 9075304]), 0.8),
    g = H(1908256, 0.55, 0.5),
    _ = i ? g : n.chance(0.5) ? G(2893862, 0.8, 5) : h[1],
    v = [];
  for (let e = 0.05; e + u <= m + 0.001; e += u + f) v.push(e + u / 2);
  let y = v.at(-1) + u / 2,
    b = (e, t, i) => {
      for (let a of v) Y(r, t - e, u, p, n.pick(h), (e + t) / 2, a, i);
    };
  for (let e of s)
    i
      ? (B(r, a, y + 0.03, a, _, e, 0, 0),
        B(r, a + 0.012, 0.006, a + 0.012, _, e, y + 0.03, 0))
      : (dn(r, a, y, a, _, e, 0, 0, 0.004),
        Y(r, 0.089, y, 0.019, _, e, y / 2, a / 2 + p + 0.0095));
  for (let [e, t] of c)
    i
      ? (b(e + a / 2 + 0.002, t - a / 2 - 0.002, 0),
        Y(r, t - e - a, 0.03, 0.045, _, (e + t) / 2, y + 0.015, 0),
        Y(r, t - e - a, 0.03, 0.045, _, (e + t) / 2, 0.035, 0),
        V(r, 0.03, y, 0.008, _, (e + t) / 2, y / 2, -0.019 / 2 - 0.004))
      : (b(e, t, a / 2 + p / 2),
        Y(
          r,
          t - e + 0.002,
          0.019,
          a + p + 0.05,
          _,
          (e + t) / 2,
          y + 0.0095,
          p / 2,
          0.003,
        ));
  if (l) {
    let e = l[0] + a / 2 + 0.012,
      t = l[1] - a / 2 - 0.012,
      i = 0.04;
    (B(r, i, y - 0.02, i, g, e + i / 2, 0.03, 0),
      B(r, i, y - 0.02, i, g, t - i / 2, 0.03, 0),
      B(r, t - e, i, i, g, (e + t) / 2, 0.03, 0),
      B(r, t - e, i, i, g, (e + t) / 2, y - 0.03, 0));
    {
      let a = Math.max(1, Math.round((y - 0.14) / (u + f))),
        o = (y - 0.14) / a;
      for (let s = 0; s < a; s++)
        Y(
          r,
          t - e - 2 * i,
          o - f,
          p,
          n.pick(h),
          (e + t) / 2,
          0.07 + o * (s + 0.5),
          0,
        );
    }
    for (let t of [0.25, y - 0.25])
      (z(r, 0.012, 0.012, 0.12, g, l[0] + a / 2 + 0.006, t - 0.06, 0.03, 10),
        V(r, 0.03, 0.05, 0.006, g, e + 0.012, t, 0.023));
    V(r, 0.014, 0.42, 0.014, g, t - 0.1, 1, 0.05500000000000001);
    for (let e of [-1, 1])
      V(r, 0.014, 0.014, 0.035, g, t - 0.1, 1 + e * 0.2, 0.037500000000000006);
    kn(r, l[1] - a / 2, y - 0.3, -0.04 / 2, -1, -1, g);
  }
  return (
    Fn(r, t, o, e),
    R(hn(r), {
      keepGrass: !0,
      gate: l,
      length: o,
      note: `${i ? `steel` : `wood`} posts, ${d ? `tight` : `gapped`} ${u > 0.1 ? `1x6` : `1x4`} slats`,
    })
  );
}
function Hn(e, t = {}) {
  let n = U(e),
    r = new D(),
    {
      L: i,
      posts: a,
      sections: o,
      gate: s,
      parts: c,
    } = Nn(n, t, e, 3.05, 1.41),
    l = n.pick([2, 3]),
    u = l === 2 ? n.range(1, 1.15) : n.range(1.2, 1.35),
    d = xn(n.pick([W.weathered, 9075302, 8022616, 10127984]), 0.95),
    f = H(1709072, 1),
    p = (l === 2 ? [0.4, 0.82] : [0.3, 0.64, 0.98]).map(
      (e) => (e * u) / (l === 2 ? 1.1 : 1.28),
    );
  for (let e of a) {
    let t = n.range(0.15, 0.2),
      i = n.range(0.11, 0.15);
    (Y(
      r,
      t,
      u,
      i,
      n.pick(d),
      e,
      u / 2,
      0,
      0.012,
      n.range(-0.015, 0.015),
      n.range(-0.05, 0.05),
      n.range(-0.015, 0.015),
    ),
      Y(
        r,
        t * 0.7,
        0.05,
        i * 0.9,
        n.pick(d),
        e,
        u + 0.005,
        0,
        0.012,
        0,
        0,
        n.range(-0.25, 0.25),
      ));
    for (let n of p) V(r, t + 0.014, 0.14, i - 0.035, f, e, n, 0);
  }
  let m = (e) => {
    let t = n.range(0.055, 0.07),
      r = n.pick([3, 4, 5]),
      i = [];
    for (let e = 0; e < r; e++) {
      let a = (e / r) * J * 2 + n.range(-0.3, 0.3),
        o = t * n.range(0.75, 1.1);
      i.push([Math.cos(a) * o, Math.sin(a) * o * 0.9]);
    }
    return fn(i, e, [], (t, n, r) => [(r / e) * 2, t * 8 + n * 5])
      .rotateY(J / 2)
      .translate(-e / 2, 0, 0);
  };
  if (
    (o.forEach(([e, t], i) =>
      p.forEach((a, o) =>
        I(
          r,
          m(t - e + 0.22),
          n.pick(d),
          (e + t) / 2,
          a + n.range(-0.01, 0.01),
          (i + o) % 2 ? 0.018 : -0.018,
          n.range(-0.03, 0.03),
          n.range(-0.006, 0.006),
          n.range(-0.008, 0.008),
        ),
      ),
    ),
    n.chance(0.45))
  ) {
    let e = p.at(-1) + 0.02;
    for (let [t, n] of c)
      I(r, mn(n - t, e, 0.05, 0.1), En(), (t + n) / 2, e / 2 + 0.02, -0.085);
  }
  if (s) {
    let e = s[0] + 0.1,
      t = s[1] - 0.1,
      i = n.pick(d),
      a = _e(),
      o = p.at(-1) + 0.1;
    for (let n of [e + 0.045, t - 0.045])
      dn(r, 0.089, o - 0.1, 0.038, i, n, 0.1, 0);
    for (let n of p) Y(r, t - e, 0.12, 0.038, i, (e + t) / 2, n, 0.038, 0.006);
    pn(
      r,
      [e + 0.09, p[0] + 0.06, 0.038],
      [t - 0.09, p.at(-1) - 0.06, 0.038],
      0.11,
      0.036,
      i,
    );
    for (let e of [p[0], p.at(-1)]) On(r, s[0] + 0.09, e, 0.057, 0.3, 1, 1, a);
    jn(r, t - 0.08, p.at(-1), 0.057, 1, a);
  }
  return (
    Fn(r, t, i, e),
    R(hn(r), { keepGrass: !0, gate: s, length: i, note: `${l}-rail` })
  );
}
var Un = null,
  Wn = null;
function Gn(t, n, r, { n: i = 90, bloom: a = null, spread: o = 0.1 } = {}) {
  ((Un ??= new oe(
    new k(
      [
        [0, 0],
        [0.018, 0.012],
        [0.04, 0.02],
        [0.07, 0],
        [0.04, -0.02],
        [0.018, -0.012],
      ].map(([e, t]) => new _(e, t)),
    ),
  )),
    (Wn ??= new T(0.022, 0)));
  let s = H(4864552, 0.9),
    c = r.map(
      (n) => (
        L(t, n, 0.007, s, n.length * 6, 5),
        new e(n.map((e) => new A(...e)))
      ),
    ),
    l = new u(),
    d = new S(),
    f = new ee(),
    p = new A(),
    m = new A(),
    h = new y(),
    g = (e, r, i, a, s) => {
      let u = new E(e, r, i);
      for (let e = 0; e < i; e++)
        (c[e % c.length].getPointAt(n(), m),
          (m.x += (n() - 0.5) * o),
          (m.y = Math.max(0.08, m.y + (n() - 0.5) * o)),
          (m.z += (n() - 0.5) * o),
          f.set(n() * 6.28, n() * 6.28, n() * 6.28),
          d.setFromEuler(f),
          p.setScalar(s * (0.7 + n() * 0.7)),
          l.compose(m, d, p),
          u.setMatrixAt(e, l),
          u.setColorAt(e, h.set(n.pick(a)).multiplyScalar(0.85 + n() * 0.3)));
      ((u.castShadow = u.receiveShadow = !0), t.add(u));
    };
  (g(
    Un,
    H(16777215, 0.75, 0, { side: 2 }),
    i * r.length,
    [4155946, 5208624, 3497508, 5933624],
    1,
  ),
    a != null &&
      g(
        Wn,
        H(16777215, 0.6),
        Math.round(i * r.length * 0.25),
        [a, Se(a, 0.85), 16777215],
        1,
      ));
}
