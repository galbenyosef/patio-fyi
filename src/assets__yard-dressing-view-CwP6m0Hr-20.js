// assets__yard-dressing-view-CwP6m0Hr 20 — math
// Lines 5696-5969 of readable/assets__yard-dressing-view-CwP6m0Hr.pretty.js (statement-aligned).
function xr(e, t = {}) {
  let n = U(e),
    r = new C(),
    i = cn(t),
    a = (t.w ?? n.range(3, 3.9)) / 2,
    o = Math.cos(J / 8),
    s = Math.sin(J / 8),
    c = a / o,
    l = n.range(0.35, 0.5),
    d = n.range(2.2, 2.35),
    f = n.chance(0.55),
    p = f ? gn(bn, 0.55) : G(n.pick([W.cedar, 9067066, 10127992]), 0.82, 6),
    m = xn(n.pick([W.cedar, 10126440, 11573864, 8153688]), 0.8),
    h = { deck: m, frame: yn(), riser: p },
    g = n
      .pick([
        [3815996, 4605514, 3026480],
        [5917246, 4865074, 6706246],
        [4872778, 4082750, 5662294],
        [7227962, 6176304, 8017478],
      ])
      .map((e) => H(e, 0.95)),
    _ = (e, t) => {
      let n = J / 8 + (e * J) / 4;
      return [t * Math.sin(n), t * Math.cos(n)];
    },
    v = (e) => (e * J) / 4,
    y = 2 * a * Math.tan(J / 8),
    b = wn(f ? bn : Se(W.cedar, 0.95));
  for (let e = 0; e < 8; e++) {
    let t = v(e),
      [n, i] = [Math.sin(t), Math.cos(t)];
    (Y(
      r,
      y + 0.03,
      0.2,
      0.025,
      p,
      (a + 0.0125) * n,
      l - 0.125,
      (a + 0.0125) * i,
      0,
      0,
      t,
      0,
    ),
      I(
        r,
        mn(y, l - 0.23, 0.2, 0.2),
        b,
        (a - 0.01) * n,
        (l - 0.23) / 2 + 0.005,
        (a - 0.01) * i,
        0,
        t,
        0,
      ));
  }
  for (let e = -a + 0.07; e < a - 0.06; e += 0.145) {
    let t = Math.min(a, a * Math.SQRT2 - (Math.abs(e) + 0.07)) + 0.02;
    t > 0.05 && Y(r, 2 * t, 0.025, 0.14, n.pick(m), 0, l - 0.0125, e, 0.003);
  }
  let x = c - 0.11,
    S = l + d;
  for (let e = 0; e < 8; e++) {
    let [t, n] = _(e, x),
      i = J / 8 + (e * J) / 4;
    (dn(r, 0.14, d, 0.14, p, t, l, n, 0.006, i),
      dn(r, 0.19, 0.16, 0.19, p, t, l, n, 0.006, i),
      dn(r, 0.18, 0.06, 0.18, p, t, S - 0.26, n, 0.006, i));
  }
  let w = { m: p, bm: p, round: !1, cap: !0, cm: p };
  for (let e = 0; e < 7; e++) {
    let [t, n] = _(e, x),
      [i, a] = _(e + 1, x);
    Yn(r, [t, l, n], [i, l, a], w, 0.85, 0.07);
  }
  let T = [
    [0, 0],
    [0, -0.28],
    [0.03, -0.28],
  ];
  for (let e = 1; e < 6; e++) {
    let t = J - ((e / 6) * J) / 2;
    T.push([0.28 + 0.25 * Math.cos(t), -0.28 + 0.25 * Math.sin(t)]);
  }
  T.push([0.28, -0.03], [0.28, 0]);
  let ee = fn(T, 0.038).translate(0, 0, -0.019),
    E = fn(
      T.map(([e, t]) => [-e, t]),
      0.038,
    ).translate(0, 0, -0.019),
    D = n.chance(0.4),
    O = x * s,
    te = x * o;
  for (let e = 0; e < 8; e++) {
    let t = v(e),
      n = new C();
    if (
      (n.position.set(te * Math.sin(t), S, te * Math.cos(t)),
      (n.rotation.y = t),
      r.add(n),
      Y(n, 2 * O + 0.1, 0.184, 0.038, p, 0, -0.092, 0),
      I(n, ee, p, -O + 0.07, -0.184, 0),
      I(n, E, p, O - 0.07, -0.184, 0),
      D)
    ) {
      Y(n, 2 * O - 0.14, 0.038, 0.038, p, 0, -0.45, 0);
      for (let e = 1; e < 10; e++)
        z(
          n,
          0.012,
          0.012,
          0.25,
          p,
          -O + 0.07 + ((2 * O - 0.14) * e) / 10,
          -0.43,
          0,
          8,
        );
    }
  }
  let ne = S + 0.2,
    re = c + 0.4,
    A = 0.42,
    ie = n.range(0.5, 0.65),
    ae = (re - A) * o,
    oe = ne + ae * Math.tan(ie),
    se = Math.ceil(ae / Math.cos(ie) / 0.14),
    ce = (e) => re - (re - A) * e,
    le = (e) => ne + (oe - ne) * e;
  for (let e = 0; e < se; e++) {
    let t = e / se,
      i = Math.min(1, (e + 1.4) / se);
    I(
      r,
      new k(ce(i), ce(t) + 0.012, le(i) - le(t), 8, 1, !0, J / 8),
      n.pick(g),
      0,
      (le(t) + le(i)) / 2 - 0.004,
      0,
    );
  }
  I(
    r,
    new k(A, re, oe - ne, 8, 1, !0, J / 8),
    xe(f ? gn(15789540, 0.7) : G(W.cedar, 0.7, 7)),
    0,
    (ne + oe) / 2 - 0.035,
    0,
  );
  for (let e = 0; e < 8; e++) {
    let t = v(e),
      n = ((x - 0.08 + re) / 2) * o;
    (Y(
      r,
      2 * re * s + 0.02,
      0.2,
      0.025,
      p,
      re * o * Math.sin(t),
      ne - 0.1,
      re * o * Math.cos(t),
      0,
      0,
      t,
      0,
    ),
      Y(
        r,
        2 * re * s,
        0.012,
        (re - x + 0.08) * o,
        p,
        n * Math.sin(t),
        ne - 0.193,
        n * Math.cos(t),
        0,
        0,
        t,
        0,
      ));
  }
  for (let e = 0; e < 8; e++) {
    let [t, n] = _(e, re),
      [i, a] = _(e, A),
      [o, s] = _(e, x),
      [c, l] = _(e, 0.15);
    (pn(r, [t, ne + 0.02, n], [i, oe + 0.02, a], 0.04, 0.07, g[0]),
      pn(r, [o, ne - 0.12, s], [c, oe - 0.22, l], 0.14, 0.038, p));
  }
  let ue = oe - 0.03,
    de = A * 0.78;
  I(r, new k(A * 0.82, A * 0.86, 0.12, 8, 1, !1, J / 8), p, 0, ue + 0.06, 0);
  for (let e = 0; e < 8; e++) {
    let [t, n] = _(e, de);
    dn(r, 0.045, 0.4, 0.045, p, t, ue + 0.12, n, 0, J / 8 + (e * J) / 4);
    let i = v(e),
      a = new C();
    (a.position.set(de * o * Math.sin(i), ue + 0.12, de * o * Math.cos(i)),
      (a.rotation.y = i),
      r.add(a),
      V(a, 2 * de * s, 0.36, 0.01, H(1710618, 1), 0, 0.2, -0.03));
    for (let e = 0; e < 5; e++)
      V(a, 2 * de * s - 0.02, 0.008, 0.07, p, 0, 0.06 + e * 0.07, 0, 0.7);
  }
  let fe = n.chance(0.4) ? H(6266503, 0.5, 0.6) : g[0];
  if (
    (I(r, new k(0.49, 0.49, 0.05, 8, 1, !1, J / 8), p, 0, ue + 0.545, 0),
    I(r, new u(0.5, 0.38, 8, 1, !1, J / 8), fe, 0, ue + 0.57 + 0.19, 0),
    P(
      r,
      [
        [0, 0],
        [0.03, 0],
        [0.03, 0.04],
        [0.045, 0.07],
        [0.02, 0.1],
        [0.012, 0.24],
        [0.026, 0.27],
        [0, 0.33],
      ],
      fe === g[0] ? _e() : fe,
      0,
      ue + 0.93,
      0,
      12,
    ),
    $n(r, n, h, {
      x: 0,
      z: a + 0.025,
      H: l,
      sw: Math.min(1.3, y - 0.1),
      rails: !1,
    }),
    n.chance(0.5))
  )
    for (let e of [3, 4, 5]) {
      let t = v(e),
        n = new C();
      (n.position.set((a - 0.33) * Math.sin(t), l, (a - 0.33) * Math.cos(t)),
        (n.rotation.y = t),
        r.add(n));
      let i = y - 0.35;
      for (let e = 0; e < 2; e++)
        Y(n, i, 0.038, 0.14, p, 0, 0.43, -0.075 + e * 0.15, 0.004);
      for (let e of [-1, 1])
        (dn(n, 0.089, 0.41, 0.089, p, e * (i / 2 - 0.1), 0, 0.08),
          dn(n, 0.089, 0.41, 0.089, p, e * (i / 2 - 0.1), 0, -0.08));
    }
  if (n.chance(0.5)) {
    let e = _e();
    (z(r, 0.006, 0.006, 0.9, e, 0, oe - 1.2, 0, 6),
      B(r, 0.2, 0.3, 0.2, ge(16180920, 0.45), 0, oe - 1.52, 0),
      B(r, 0.08, 0.14, 0.08, Ce(16767392, 1.1), 0, oe - 1.45, 0),
      I(r, new u(0.17, 0.1, 4), e, 0, oe - 1.17, 0, 0, J / 4, 0));
  }
  return (
    i &&
      K(
        r,
        {
          w: 2 * a,
          d: 2 * a,
          inside: (e, t) =>
            Math.abs(e) + Math.abs(t) < a * 1.3 &&
            Math.abs(e) < a - 0.1 &&
            Math.abs(t) < a - 0.1,
        },
        { count: 60, y: l + 0.012, seed: e },
      ),
    R(hn(r), { note: `${(2 * a).toFixed(1)} m octagon` })
  );
}
