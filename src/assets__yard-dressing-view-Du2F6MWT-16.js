// assets__yard-dressing-view-Du2F6MWT 16 — math
// Lines 4777-5115 of readable/assets__yard-dressing-view-Du2F6MWT.pretty.js (statement-aligned).
function lr(e, t, n, r, i, a) {
  let o = new D();
  (o.position.set(n, r, i), (o.rotation.y = a), e.add(o));
  let { L: s, h: c } = t,
    l = t.prof ?? [],
    u = t.open ?? [],
    d = gn(t.col, 0.72),
    f = gn(t.trim, 0.5),
    p = [[-s / 2, 0], [s / 2, 0], [s / 2, c], ...l, [-s / 2, c]],
    m = u.map((e) => [
      [e.x0, Math.max(e.y0, 0.004)],
      [e.x1, Math.max(e.y0, 0.004)],
      [e.x1, e.y1],
      [e.x0, e.y1],
    ]);
  (I(o, fn(p, 0.1, m), t.inner, 0, 0, -0.125),
    I(o, fn(p, 0.006, m), d, 0, 0, -0.025));
  let h = [[s / 2, c], ...l.filter(([e]) => e >= 0)],
    g = Math.max(c, ...l.map((e) => e[1])),
    _ = (e) => {
      if (e <= c) return s / 2;
      for (let t = 0; t < h.length - 1; t++) {
        let [n, r] = h[t],
          [i, a] = h[t + 1];
        if (a - r > 1e-6 && e <= a) return n + ((i - n) * (e - r)) / (a - r);
      }
      return 0;
    },
    v = (e) => {
      let t = Math.abs(e);
      for (let e = 0; e < h.length - 1; e++) {
        let [n, r] = h[e],
          [i, a] = h[e + 1];
        if (t >= i && n - i > 1e-6) return r + ((a - r) * (n - t)) / (n - i);
      }
      return h.at(-1)[1];
    },
    y = 0.09,
    b = (e, t, n) =>
      e.flatMap(([e, r]) =>
        n <= e || t >= r
          ? [[e, r]]
          : [
              [e, t],
              [n, r],
            ].filter(([e, t]) => t - e > 0.015),
      ),
    x = (e, t, n, r) =>
      u.reduce(
        (n, r) =>
          r.y0 - (r.kind === `win` ? y : 0) >= t || r.y1 + y <= e
            ? n
            : b(n, r.x0 - y, r.x1 + y),
        [[n, r]],
      ),
    S = (e, t, n, r) =>
      u.reduce(
        (n, r) =>
          r.x0 - y >= t || r.x1 + y <= e
            ? n
            : b(n, r.y0 - (r.kind === `win` ? y : 0), r.y1 + y),
        [[n, r]],
      );
  if (t.siding === `lap`) {
    let e = 0.12;
    for (let t = 0; t < g - 0.02; t += e) {
      let n = _(t + e);
      if (n < 0.04) break;
      for (let [r, i] of x(t, t + e, -n, n))
        Y(
          o,
          i - r,
          0.13999999999999999,
          0.012,
          d,
          (r + i) / 2,
          t + 0.13999999999999999 / 2,
          -0.014,
          0,
          -0.1,
        );
    }
  } else {
    let e = t.siding === `bb`,
      n = e ? 0.4 : 0.2,
      r = gn(Se(t.col, 0.62), 0.9);
    for (let t = -s / 2 + n; t < s / 2 - 0.05; t += n) {
      let n = v(t) - 0.015;
      for (let [i, a] of S(t - 0.03, t + 0.03, 0, n))
        e
          ? Y(o, 0.06, a - i, 0.02, d, t, (i + a) / 2, -0.009)
          : V(o, 0.01, a - i, 0.002, r, t, (i + a) / 2, -0.0185);
    }
  }
  for (let e of u) {
    let t = 0.09,
      n = 0.022,
      r = e.x1 - e.x0,
      i = (e.x0 + e.x1) / 2,
      a = e.kind === `win`,
      s = a ? e.y0 - 0.02 : 0;
    for (let r of [-1, 1])
      Y(
        o,
        t,
        e.y1 + t - s,
        n,
        f,
        r < 0 ? e.x0 - t / 2 : e.x1 + t / 2,
        (e.y1 + t + s) / 2,
        0.005,
      );
    (Y(o, r + 2 * t + 0.02, t, n, f, i, e.y1 + t / 2, 0.005),
      Y(o, r + 2 * t + 0.04, 0.018, 0.04, f, i, e.y1 + t + 0.009, 0.01));
    for (let t of [-1, 1])
      V(
        o,
        0.02,
        e.y1 - e.y0,
        0.125,
        f,
        t < 0 ? e.x0 + 0.01 : e.x1 - 0.01,
        (e.y0 + e.y1) / 2,
        -0.0625,
      );
    (V(o, r, 0.02, 0.125, f, i, e.y1 - 0.01, -0.0625),
      a &&
        (Y(o, r + 2 * t + 0.06, 0.03, 0.08, f, i, e.y0 - 0.015, 0.02),
        Y(o, r + 2 * t, 0.07, n, f, i, e.y0 - 0.065, 0.005),
        V(o, r, 0.02, 0.125, f, i, e.y0 + 0.01, -0.0625),
        dr(o, e, f, e.grid)));
  }
  if (t.corners)
    for (let e of [-1, 1])
      Y(o, 0.09, c, 0.022, f, e * (s / 2 - 0.045), c / 2, 0.005);
  if (t.rake) {
    let e = [[s / 2, c], ...l, [-s / 2, c]];
    for (let t = 0; t < e.length - 1; t++) {
      let [n, r] = e[t],
        [i, a] = e[t + 1];
      Math.abs(a - r) < 0.001 ||
        pn(
          o,
          [
            n + Math.sign(n) * 0.12,
            r + 0.02 - Math.abs((a - r) / (i - n)) * 0.12,
            0.012,
          ],
          [i - Math.sign(i) * (i ? 0.001 : 0), a + 0.02, 0.012],
          0.16,
          0.024,
          f,
        );
    }
  }
  return (
    t.frieze && Y(o, s, 0.13, 0.022, f, 0, c + 0.03, 0.005),
    (o.userData.topAt = v),
    o
  );
}
function ur(e, t, n, r, i, a, o, s, c, l, u = 0.05) {
  let d = r - t,
    f = i - n,
    p = (t + r) / 2,
    m = 0.035,
    h = d - 2 * u,
    g = f - 2.2 * u,
    _ = n + 1.2 * u;
  (V(e, u, f, m, o, t + u / 2, n + f / 2, a),
    V(e, u, f, m, o, r - u / 2, n + f / 2, a),
    V(e, h, u, m, o, p, i - u / 2, a),
    V(e, h, u * 1.2, m, o, p, n + u * 0.6, a),
    V(e, h, g, 0.006, s, p, _ + g / 2, a));
  for (let n = 1; n < c; n++)
    V(e, 0.018, g, 0.02, o, t + u + (h * n) / c, _ + g / 2, a + 0.004);
  for (let t = 1; t < l; t++)
    V(e, h, 0.018, 0.02, o, p, _ + (g * t) / l, a + 0.004);
}
function dr(e, t, n, r = [2, 2]) {
  let i = (t.y0 + t.y1) / 2,
    a = ge(11125964, 0.3);
  (ur(
    e,
    t.x0 + 0.02,
    t.y0 + 0.02,
    t.x1 - 0.02,
    i + 0.02,
    -0.05,
    n,
    a,
    r[0],
    r[1],
  ),
    ur(
      e,
      t.x0 + 0.02,
      i - 0.02,
      t.x1 - 0.02,
      t.y1 - 0.02,
      -0.088,
      n,
      a,
      r[0],
      r[1],
    ));
}
function fr(e, t, n, r, i, a, o, s, l, u, d = 2, f = 5) {
  let p = n - t,
    m = i - r,
    h = (t + n) / 2,
    g = 0.1,
    _ = 0.042;
  (V(e, g, m, _, o, t + g / 2, r + m / 2, a),
    V(e, g, m, _, o, n - g / 2, r + m / 2, a),
    V(e, p - 2 * g, 0.1, _, o, h, i - 0.05, a),
    V(e, p - 2 * g, 0.24, _, o, h, r + 0.12, a));
  let v = t + g,
    y = n - g,
    b = r + 0.24,
    x = i - 0.1;
  V(e, y - v, x - b, 0.006, s, h, (b + x) / 2, a);
  for (let t of [-1, 1]) {
    for (let n = 1; n < d; n++)
      V(
        e,
        0.02,
        x - b,
        0.012,
        o,
        v + ((y - v) * n) / d,
        (b + x) / 2,
        a + t * 0.01,
      );
    for (let n = 1; n < f; n++)
      V(e, y - v, 0.02, 0.012, o, h, b + ((x - b) * n) / f, a + t * 0.01);
  }
  let S = u > 0 ? n - 0.06 : t + 0.06;
  for (let t of [-1, 1])
    (I(e, new c(0.026, 0.026, 0.012, 14), l, S, 1, a + t * 0.027, J / 2, 0, 0),
      V(e, 0.016, 0.016, 0.03, l, S, 1, a + t * 0.045),
      V(e, 0.11, 0.016, 0.016, l, S - u * 0.05, 1, a + t * 0.06));
  let C = u > 0 ? t : n;
  for (let t of [r + 0.25, r + m / 2, i - 0.25])
    z(e, 0.008, 0.008, 0.09, l, C, t - 0.045, a + 0.022, 8);
}
function pr(e, t, n, r, i, a, o) {
  let s = new D();
  (s.position.set(r, i, a),
    (s.rotation.order = `YXZ`),
    s.rotation.set(n.pitch, o, 0),
    e.add(s));
  let { L: c, S: l } = n;
  if (
    (V(s, c, 0.016, l, H(10127978, 0.9), 0, -0.008, l / 2), n.kind === `metal`)
  ) {
    V(s, c, 0.005, l + 0.02, n.m, 0, 0.0025, l / 2 + 0.01);
    for (let e = -c / 2 + 0.06; e <= c / 2 - 0.02; e += 0.406)
      V(s, 0.014, 0.028, l + 0.02, n.m, e, 0.014, l / 2 + 0.01);
    V(s, c, 0.03, 0.008, n.m, 0, -0.01, l + 0.022);
  } else {
    let e = 0;
    for (let r = l; r > 0.03; r -= 0.14, e++) {
      let i = Math.min(0.2, r),
        a = r - i / 2,
        o = -c / 2 - 0.015,
        l = !0;
      for (; o < c / 2 + 0.014;) {
        let r = n.arch ? t.range(0.16, 0.34) : 0.333;
        (l && !n.arch && e % 2 && (r = 0.167), (l = !1));
        let u = Math.min(o + r, c / 2 + 0.015);
        (u - o > 0.01 &&
          V(
            s,
            u - o - 0.005,
            0.008,
            i,
            t.pick(n.ms),
            (o + u) / 2,
            0.006,
            a,
            -0.035,
          ),
          (o = u));
      }
    }
    V(s, c + 0.02, 0.02, 0.01, H(3815994, 0.5, 0.5), 0, -0.012, l + 0.005);
  }
  return (
    n.leaves &&
      K(
        s,
        { w: c - 0.3, d: l - 0.3, cx: 0, cz: l / 2 },
        { count: Math.round(c * l * 5), y: 0.03, seed: n.leaves },
      ),
    s
  );
}
function mr(e, t, n, r, i, a = `x`, o = !1) {
  let s = (e, t) =>
    a === `x` ? [e, t * 0.075 * Math.cos(r)] : [t * 0.075 * Math.cos(r), e];
  if (o) {
    for (let o of [-1, 1]) {
      let [c, l] = s(0, o);
      V(
        e,
        a === `x` ? t : 0.17,
        0.006,
        a === `x` ? 0.17 : t,
        i,
        c,
        n + 0.02 - 0.075 * Math.sin(r),
        l,
        a === `x` ? o * r : 0,
        0,
        a === `x` ? 0 : -o * r,
      );
    }
    return;
  }
  for (let o = -t / 2; o < t / 2 - 0.05; o += 0.2)
    for (let c of [-1, 1]) {
      let [l, u] = s(o + 0.1, c),
        d = Math.min(0.2, t / 2 - o) - 0.004;
      V(
        e,
        a === `x` ? d : 0.17,
        0.012,
        a === `x` ? 0.17 : d,
        i,
        l,
        n + 0.022 - 0.075 * Math.sin(r),
        u,
        a === `x` ? c * r - 0.03 : 0,
        0,
        a === `x` ? 0 : -c * r,
      );
    }
}
