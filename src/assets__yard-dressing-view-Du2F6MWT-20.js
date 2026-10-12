// assets__yard-dressing-view-Du2F6MWT 20 — math
// Lines 5696-5969 of readable/assets__yard-dressing-view-Du2F6MWT.pretty.js (statement-aligned).
function xr(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = cn(t),
    o = (t.w ?? n.range(3, 3.9)) / 2,
    s = Math.cos(J / 8),
    l = Math.sin(J / 8),
    u = o / s,
    d = n.range(0.35, 0.5),
    f = n.range(2.2, 2.35),
    p = n.chance(0.55),
    m = p ? gn(bn, 0.55) : G(n.pick([W.cedar, 9067066, 10127992]), 0.82, 6),
    h = xn(n.pick([W.cedar, 10126440, 11573864, 8153688]), 0.8),
    g = { deck: h, frame: yn(), riser: m },
    _ = n
      .pick([
        [3815996, 4605514, 3026480],
        [5917246, 4865074, 6706246],
        [4872778, 4082750, 5662294],
        [7227962, 6176304, 8017478],
      ])
      .map((e) => H(e, 0.95)),
    v = (e, t) => {
      let n = J / 8 + (e * J) / 4;
      return [t * Math.sin(n), t * Math.cos(n)];
    },
    y = (e) => (e * J) / 4,
    b = 2 * o * Math.tan(J / 8),
    x = wn(p ? bn : Se(W.cedar, 0.95));
  for (let e = 0; e < 8; e++) {
    let t = y(e),
      [n, i] = [Math.sin(t), Math.cos(t)];
    (Y(
      r,
      b + 0.03,
      0.2,
      0.025,
      m,
      (o + 0.0125) * n,
      d - 0.125,
      (o + 0.0125) * i,
      0,
      0,
      t,
      0,
    ),
      I(
        r,
        mn(b, d - 0.23, 0.2, 0.2),
        x,
        (o - 0.01) * n,
        (d - 0.23) / 2 + 0.005,
        (o - 0.01) * i,
        0,
        t,
        0,
      ));
  }
  for (let e = -o + 0.07; e < o - 0.06; e += 0.145) {
    let t = Math.min(o, o * Math.SQRT2 - (Math.abs(e) + 0.07)) + 0.02;
    t > 0.05 && Y(r, 2 * t, 0.025, 0.14, n.pick(h), 0, d - 0.0125, e, 0.003);
  }
  let S = u - 0.11,
    C = d + f;
  for (let e = 0; e < 8; e++) {
    let [t, n] = v(e, S),
      i = J / 8 + (e * J) / 4;
    (dn(r, 0.14, f, 0.14, m, t, d, n, 0.006, i),
      dn(r, 0.19, 0.16, 0.19, m, t, d, n, 0.006, i),
      dn(r, 0.18, 0.06, 0.18, m, t, C - 0.26, n, 0.006, i));
  }
  let ee = { m, bm: m, round: !1, cap: !0, cm: m };
  for (let e = 0; e < 7; e++) {
    let [t, n] = v(e, S),
      [i, a] = v(e + 1, S);
    Yn(r, [t, d, n], [i, d, a], ee, 0.85, 0.07);
  }
  let w = [
    [0, 0],
    [0, -0.28],
    [0.03, -0.28],
  ];
  for (let e = 1; e < 6; e++) {
    let t = J - ((e / 6) * J) / 2;
    w.push([0.28 + 0.25 * Math.cos(t), -0.28 + 0.25 * Math.sin(t)]);
  }
  w.push([0.28, -0.03], [0.28, 0]);
  let T = fn(w, 0.038).translate(0, 0, -0.019),
    E = fn(
      w.map(([e, t]) => [-e, t]),
      0.038,
    ).translate(0, 0, -0.019),
    O = n.chance(0.4),
    te = S * l,
    ne = S * s;
  for (let e = 0; e < 8; e++) {
    let t = y(e),
      n = new D();
    if (
      (n.position.set(ne * Math.sin(t), C, ne * Math.cos(t)),
      (n.rotation.y = t),
      r.add(n),
      Y(n, 2 * te + 0.1, 0.184, 0.038, m, 0, -0.092, 0),
      I(n, T, m, -te + 0.07, -0.184, 0),
      I(n, E, m, te - 0.07, -0.184, 0),
      O)
    ) {
      Y(n, 2 * te - 0.14, 0.038, 0.038, m, 0, -0.45, 0);
      for (let e = 1; e < 10; e++)
        z(
          n,
          0.012,
          0.012,
          0.25,
          m,
          -te + 0.07 + ((2 * te - 0.14) * e) / 10,
          -0.43,
          0,
          8,
        );
    }
  }
  let re = C + 0.2,
    ie = u + 0.4,
    k = 0.42,
    ae = n.range(0.5, 0.65),
    oe = (ie - k) * s,
    A = re + oe * Math.tan(ae),
    se = Math.ceil(oe / Math.cos(ae) / 0.14),
    ce = (e) => ie - (ie - k) * e,
    le = (e) => re + (A - re) * e;
  for (let e = 0; e < se; e++) {
    let t = e / se,
      i = Math.min(1, (e + 1.4) / se);
    I(
      r,
      new c(ce(i), ce(t) + 0.012, le(i) - le(t), 8, 1, !0, J / 8),
      n.pick(_),
      0,
      (le(t) + le(i)) / 2 - 0.004,
      0,
    );
  }
  I(
    r,
    new c(k, ie, A - re, 8, 1, !0, J / 8),
    xe(p ? gn(15789540, 0.7) : G(W.cedar, 0.7, 7)),
    0,
    (re + A) / 2 - 0.035,
    0,
  );
  for (let e = 0; e < 8; e++) {
    let t = y(e),
      n = ((S - 0.08 + ie) / 2) * s;
    (Y(
      r,
      2 * ie * l + 0.02,
      0.2,
      0.025,
      m,
      ie * s * Math.sin(t),
      re - 0.1,
      ie * s * Math.cos(t),
      0,
      0,
      t,
      0,
    ),
      Y(
        r,
        2 * ie * l,
        0.012,
        (ie - S + 0.08) * s,
        m,
        n * Math.sin(t),
        re - 0.193,
        n * Math.cos(t),
        0,
        0,
        t,
        0,
      ));
  }
  for (let e = 0; e < 8; e++) {
    let [t, n] = v(e, ie),
      [i, a] = v(e, k),
      [o, s] = v(e, S),
      [c, l] = v(e, 0.15);
    (pn(r, [t, re + 0.02, n], [i, A + 0.02, a], 0.04, 0.07, _[0]),
      pn(r, [o, re - 0.12, s], [c, A - 0.22, l], 0.14, 0.038, m));
  }
  let ue = A - 0.03,
    de = k * 0.78;
  I(r, new c(k * 0.82, k * 0.86, 0.12, 8, 1, !1, J / 8), m, 0, ue + 0.06, 0);
  for (let e = 0; e < 8; e++) {
    let [t, n] = v(e, de);
    dn(r, 0.045, 0.4, 0.045, m, t, ue + 0.12, n, 0, J / 8 + (e * J) / 4);
    let i = y(e),
      a = new D();
    (a.position.set(de * s * Math.sin(i), ue + 0.12, de * s * Math.cos(i)),
      (a.rotation.y = i),
      r.add(a),
      V(a, 2 * de * l, 0.36, 0.01, H(1710618, 1), 0, 0.2, -0.03));
    for (let e = 0; e < 5; e++)
      V(a, 2 * de * l - 0.02, 0.008, 0.07, m, 0, 0.06 + e * 0.07, 0, 0.7);
  }
  let fe = n.chance(0.4) ? H(6266503, 0.5, 0.6) : _[0];
  if (
    (I(r, new c(0.49, 0.49, 0.05, 8, 1, !1, J / 8), m, 0, ue + 0.545, 0),
    I(r, new a(0.5, 0.38, 8, 1, !1, J / 8), fe, 0, ue + 0.57 + 0.19, 0),
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
      fe === _[0] ? _e() : fe,
      0,
      ue + 0.93,
      0,
      12,
    ),
    $n(r, n, g, {
      x: 0,
      z: o + 0.025,
      H: d,
      sw: Math.min(1.3, b - 0.1),
      rails: !1,
    }),
    n.chance(0.5))
  )
    for (let e of [3, 4, 5]) {
      let t = y(e),
        n = new D();
      (n.position.set((o - 0.33) * Math.sin(t), d, (o - 0.33) * Math.cos(t)),
        (n.rotation.y = t),
        r.add(n));
      let i = b - 0.35;
      for (let e = 0; e < 2; e++)
        Y(n, i, 0.038, 0.14, m, 0, 0.43, -0.075 + e * 0.15, 0.004);
      for (let e of [-1, 1])
        (dn(n, 0.089, 0.41, 0.089, m, e * (i / 2 - 0.1), 0, 0.08),
          dn(n, 0.089, 0.41, 0.089, m, e * (i / 2 - 0.1), 0, -0.08));
    }
  if (n.chance(0.5)) {
    let e = _e();
    (z(r, 0.006, 0.006, 0.9, e, 0, A - 1.2, 0, 6),
      B(r, 0.2, 0.3, 0.2, ge(16180920, 0.45), 0, A - 1.52, 0),
      B(r, 0.08, 0.14, 0.08, Ce(16767392, 1.1), 0, A - 1.45, 0),
      I(r, new a(0.17, 0.1, 4), e, 0, A - 1.17, 0, 0, J / 4, 0));
  }
  return (
    i &&
      K(
        r,
        {
          w: 2 * o,
          d: 2 * o,
          inside: (e, t) =>
            Math.abs(e) + Math.abs(t) < o * 1.3 &&
            Math.abs(e) < o - 0.1 &&
            Math.abs(t) < o - 0.1,
        },
        { count: 60, y: d + 0.012, seed: e },
      ),
    R(hn(r), { note: `${(2 * o).toFixed(1)} m octagon` })
  );
}
