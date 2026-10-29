// assets__greywater-setpieces-view-CS3dCOa6 16 — math
// Lines 5715-6291 of readable/assets__greywater-setpieces-view-CS3dCOa6.pretty.js (statement-aligned).
function ln() {
  let e = new _(),
    t = V(18),
    a = 12.6,
    o = 25.2,
    s = 1.4,
    c = K(4018503, 0.6, 0.35),
    l = K(2898483, 0.6, 0.4),
    u = K(12037788, 0.9),
    d = K(9801085, 0.92),
    f = cn(),
    p = K(4869964, 0.7, 0.5),
    m = K(3095862, 0.6, 0.4),
    h = K(10262413, 0.93),
    g = K(5264986, 0.6, 0.5),
    y = K(13213738, 0.6, 0.25),
    b = K(5791073, 0.7, 0.5),
    x = sn(),
    S = K(5916210, 0.95, 0, { userData: { pen: `wood` } }),
    E = (e) => (e / 16) * Math.PI * 2,
    D = (e, t, n = 0) => [Math.cos(e) * t, n, Math.sin(e) * t];
  G(e, new C(20.5, 20.5, 0.04, 48), K(7104610, 0.95), 0, 0.02, 0);
  for (let t = 0; t < 16; t++) {
    let r = E(t),
      [i, , p] = D(r, 16),
      m = -r;
    (U(e, 1.6, 0.9, 1.6, u, i, 0, p, m),
      U(e, 1.3, 0.25, 1.3, d, i, 0.9, p, m),
      P(e, 0.62, 0.66, 0.35, c, i, 1.15, p, 16),
      P(e, 0.5, 0.56, 0.25, c, i, 1.5, p, 16),
      G(e, new C(0.4, 0.45, 8.75, 16), f, i, 6.125, p),
      P(e, 0.6, 0.42, 0.45, c, i, 10.5, p, 16),
      U(e, 1.3, 0.25, 1.3, c, i, 10.95, p, m),
      U(e, 1, s, 1, l, i, 11.2, p, m),
      P(e, 0.5, 0.54, 0.3, c, i, a, p, 16),
      G(e, new C(0.32, 0.37, 10.15, 16), f, i, 17.975, p),
      P(e, 0.5, 0.34, 0.4, c, i, 23.05, p, 16),
      U(e, 1.1, 0.22, 1.1, c, i, 23.45, p, m),
      U(e, 0.9, 1.52, 0.9, l, i, 23.68, p, m),
      U(e, 0.7, 0.35, 0.7, c, i, o, p, m),
      P(e, 0.18, 0.28, 0.6, c, i, 25.55, p, 10),
      G(e, new n(0.3, 12, 8), c, i, 26.4, p),
      P(e, 0.05, 0.05, 0.5, c, i, 26.599999999999998, p, 6));
    for (let [t, n] of [
      [1.2, 11.2],
      [a, 23.8],
    ])
      U(
        e,
        0.24,
        n - t,
        0.14,
        g,
        Math.cos(r) * 15.48,
        t,
        Math.sin(r) * 15.48,
        m,
      );
  }
  for (let t = 0; t < 16; t++) {
    let r = E(t),
      i = E(t + 1),
      [u, , d] = D(r, 16),
      [f, , p] = D(i, 16),
      m = Math.hypot(f - u, p - d),
      h = (f - u) / m,
      g = (p - d) / m,
      _ = 0.5,
      v = [u + h * _, d + g * _],
      y = [f - h * _, p - g * _],
      b = m - 2 * _;
    for (let t of [a, o]) {
      let n = t - s;
      for (let r of [t - 0.1, n + 0.1])
        H(e, [v[0], r, v[1]], [y[0], r, y[1]], 0.3, 0.2, c);
      let r = b / 8;
      for (let i = 0; i < 8; i++) {
        let a = [v[0] + h * r * i, v[1] + g * r * i],
          o = [v[0] + h * r * (i + 1), v[1] + g * r * (i + 1)];
        (H(e, [a[0], n + 0.2, a[1]], [o[0], t - 0.2, o[1]], 0.1, 0.03, l),
          H(e, [a[0], t - 0.2, a[1]], [o[0], n + 0.2, o[1]], 0.1, 0.03, l));
      }
      for (let r of [0, 1]) {
        let i = [v[0] + h * b * r, v[1] + g * b * r];
        H(e, [i[0], n + 0.2, i[1]], [i[0], t - 0.2, i[1]], 0.12, 0.05, c);
      }
    }
    for (let [t, r] of [
      [1.9, 11.2 - 0.3],
      [13.1, 23.5],
    ]) {
      (R(e, [u, t, d], [f, r, p], 0.045, l, 5),
        R(e, [f, t, p], [u, r, d], 0.045, l, 5));
      let i = [(u + f) / 2, (t + r) / 2, (d + p) / 2];
      G(e, new n(0.14, 8, 6), c, ...i);
    }
  }
  let O = 16.6,
    k = Math.cos(Math.PI / 16),
    A = (t) => {
      let n = new T(),
        r = new v();
      for (let e = 0; e < 16; e++) {
        let t = E(e);
        (e
          ? n.lineTo(Math.cos(t) * 18, Math.sin(t) * 18)
          : n.moveTo(Math.cos(t) * 18, Math.sin(t) * 18),
          e
            ? r.lineTo(Math.cos(t) * O, Math.sin(t) * O)
            : r.moveTo(Math.cos(t) * O, Math.sin(t) * O));
      }
      (n.closePath(), r.closePath(), n.holes.push(r));
      let i = new w(n, {
        depth: 0.1,
        bevelEnabled: !1,
        curveSegments: 1,
      }).rotateX(Math.PI / 2);
      G(e, i, p, 0, t, 0);
    };
  for (let t of [a, o]) {
    A(t);
    for (let n = 0; n < 16; n++) {
      let r = E(n),
        [i, , a] = D(r, 17.3);
      (U(
        e,
        0.25,
        0.25,
        1.6,
        l,
        Math.cos(r) * 17,
        t - 0.38,
        Math.sin(r) * 17,
        -r + Math.PI / 2,
      ),
        R(
          e,
          [Math.cos(r) * 16.5, t - 1.2, Math.sin(r) * 16.5],
          [i, t - 0.3, a],
          0.05,
          l,
          5,
        ));
      let o = E(n + 1),
        s = (e, n) => [Math.cos(e) * n, t, Math.sin(e) * n];
      n !== 0 && $t(e, s(r, 17.95), s(o, 17.95), m, { post: 1.8, toe: m });
      let c = 0.55 / 16;
      $t(e, s(r + c, 16.650000000000002), s(o - c, 16.650000000000002), m, {
        post: 1.8,
      });
    }
    for (let n = 1; n < 16; n += 4) {
      let r = E(n);
      (U(
        e,
        0.25,
        0.3,
        0.2,
        g,
        Math.cos(r) * 16.45,
        t + 1.6,
        Math.sin(r) * 16.45,
        -r + Math.PI / 2,
      ),
        U(
          e,
          0.2,
          0.22,
          0.04,
          F(16760944, 3),
          Math.cos(r) * 16.56,
          t + 1.64,
          Math.sin(r) * 16.56,
          -r + Math.PI / 2,
        ));
    }
  }
  {
    let t = E(10) + 0.12;
    nn(
      e,
      Math.cos(t) * 17.85,
      Math.sin(t) * 17.85,
      a,
      26.2,
      -t + Math.PI / 2,
      m,
      0.45,
    );
  }
  let j = 15.4,
    M = 14.4,
    N = [101.25, 281.25].map((e) => (e * Math.PI) / 180),
    L = [11.25, 101.25, 191.25, 281.25].map((e) => (e * Math.PI) / 180),
    B = (e, t, n) =>
      t.some((t) => Math.abs(Math.atan2(Math.sin(e - t), Math.cos(e - t))) < n),
    te = on();
  for (let t = 0; t < 48; t++) {
    let n = ((t + 0.5) / 48) * Math.PI * 2;
    if (B(n, N, 0.07)) continue;
    let r = 2 * j * Math.sin(Math.PI / 48) + 0.04;
    (en(
      e,
      r,
      1.15,
      0.5,
      te,
      Math.cos(n) * j,
      0,
      Math.sin(n) * j,
      -n + Math.PI / 2,
      0.9,
    ),
      U(
        e,
        r + 0.02,
        0.14,
        0.62,
        u,
        Math.cos(n) * j,
        1.15,
        Math.sin(n) * j,
        -n + Math.PI / 2,
      ));
  }
  for (let t = 0; t < 48; t++) {
    let n = ((t + 0.5) / 48) * Math.PI * 2;
    if (B(n, L, 0.07)) {
      U(
        e,
        2 * M * Math.sin(Math.PI / 48),
        0.25,
        0.3,
        x,
        Math.cos(n) * M,
        3,
        Math.sin(n) * M,
        -n + Math.PI / 2,
      );
      continue;
    }
    let r = 2 * M * Math.sin(Math.PI / 48) + 0.02;
    (en(
      e,
      r,
      3.2,
      0.06,
      x,
      Math.cos(n) * M,
      0,
      Math.sin(n) * M,
      -n + Math.PI / 2,
      2,
    ),
      U(
        e,
        0.1,
        3.2,
        0.18,
        x,
        Math.cos(n + Math.PI / 48) * 14.5,
        0,
        Math.sin(n + Math.PI / 48) * 14.5,
        -n + Math.PI / 2,
      ),
      U(
        e,
        r,
        0.18,
        0.26,
        x,
        Math.cos(n) * 14.48,
        3.02,
        Math.sin(n) * 14.48,
        -n + Math.PI / 2,
      ),
      U(
        e,
        r,
        0.3,
        0.3,
        K(3814189, 0.9, 0.3),
        Math.cos(n) * 14.5,
        0,
        Math.sin(n) * 14.5,
        -n + Math.PI / 2,
      ));
  }
  for (let t = 0; t < 16; t++) {
    let n = E(t);
    H(
      e,
      [Math.cos(n) * M, 3.1, Math.sin(n) * M],
      [Math.cos(n) * 15.25, 3.1, Math.sin(n) * 15.25],
      0.3,
      0.35,
      x,
    );
    let r = G(
      e,
      new C(0.28, 0.28, 0.16, 12),
      K(3814189, 0.7, 0.5),
      Math.cos(n) * 15.25,
      3.1,
      Math.sin(n) * 15.25,
    );
    (r.rotation.set(Math.PI / 2, 0, 0),
      (r.rotation.order = `YXZ`),
      (r.rotation.y = -n));
  }
  (G(e, new C(15.15, 15.15, 0.05, 48), K(6117972, 0.98), 0, 0.03, 0),
    G(
      e,
      new n(13, 40, 6, 0, Math.PI * 2, 0, 0.42),
      h,
      0,
      -13 * Math.cos(0.42),
      0,
    ));
  for (let n = 0; n < 14; n++) {
    let r = (n / 14) * Math.PI * 2 + 0.1,
      i = 9.2;
    U(
      e,
      0.45,
      1.1 + t() * 0.3,
      0.45,
      S,
      Math.cos(r) * i,
      0,
      Math.sin(r) * i,
      -r,
    );
  }
  let ne = K(3951171, 0.55, 0.5),
    re = [
      [2.5, 0],
      [-2.5, 0],
    ];
  {
    let t = [-16, 16],
      r = Math.atan2(16, -16);
    for (let [i, a] of [
      [0, 1.7],
      [1, -1.7],
    ]) {
      let o = -Math.sin(r) * a,
        s = Math.cos(r) * a,
        c = [t[0] + 2.6 + o * 0.5, 0.75, t[1] - 3.3 + s * 0.5],
        l = [Math.cos(r) * 13.9 + o, 0.75, Math.sin(r) * 13.9 + s];
      (R(e, c, l, 0.42, ne, 14),
        P(e, 0.42, 0.42, 3.4, ne, l[0], 0.75, l[2], 14),
        G(e, new n(0.43, 12, 8), ne, l[0], 0.75, l[2]),
        P(e, 0.55, 0.55, 0.18, ne, l[0], 4.1, l[2], 14));
      for (let t = 0.2; t < 1; t += 0.25) {
        let n = c[0] + (l[0] - c[0]) * t,
          i = c[2] + (l[2] - c[2]) * t;
        U(e, 1, 0.35, 0.5, h, n, 0, i, -r);
      }
      re[i] = l;
    }
  }
  {
    let t = 6.5,
      n = 4.8,
      a = 0.4,
      o = -16 - 9 / 2,
      s = -11.5,
      c = 16 - t / 2,
      l = 19.25;
    U(e, 9.4, 0.45, 6.9, d, -16, 0, 16);
    let f = [
      [-18.6, -17.4, 1.3, 3.7],
      [-14.6, -13.4, 1.3, 3.7],
    ];
    (tn(
      e,
      `x`,
      o,
      s,
      l - a / 2,
      0.45,
      n,
      a,
      te,
      [[-16.8, -15.2, 0.45, 3.3], ...f],
      0.9,
    ),
      tn(e, `x`, o, s, 12.95, 0.45, n, a, te, f, 0.9),
      tn(e, `z`, c, l, -20.3, 0.45, n, a, te, [[15.4, 16.6, 1.3, 3.7]], 0.9),
      tn(
        e,
        `z`,
        c,
        l,
        s - a / 2,
        0.45,
        n,
        a,
        te,
        [[15.4, 16.6, 1.3, 3.7]],
        0.9,
      ));
    let p = W(2898496, 0.6),
      m = K(15130834, 0.6),
      h = (t, n, r) => {
        let a = new _();
        (a.position.set(t, 0, n),
          (a.rotation.y = r),
          e.add(a),
          U(a, 1.2, 2.4, 0.04, p, 0, 1.3, 0));
        for (let e of [-0.3, 0.3]) U(a, 0.04, 2.4, 0.07, m, e, 1.3, 0);
        for (let e = 1.9; e < 3.7; e += 0.6) U(a, 1.2, 0.04, 0.07, m, 0, e, 0);
        let o = G(
          a,
          new C(0.6, 0.6, 0.04, 16, 1, !1, 0, Math.PI)
            .rotateX(Math.PI / 2)
            .rotateZ(Math.PI / 2),
          p,
          0,
          3.7,
          0,
        );
        ((o.castShadow = !1),
          G(a, new i(0.72, 0.14, 4, 14, Math.PI), u, 0, 3.7, 0.18),
          U(a, 1.5, 0.15, 0.55, u, 0, 1.15, 0.12));
      };
    for (let [e, t] of f)
      (h((e + t) / 2, l - a / 2, 0), h((e + t) / 2, 12.95, Math.PI));
    (h(-20.3, 16, -Math.PI / 2),
      h(s - a / 2, 16, Math.PI / 2),
      G(e, new i(0.95, 0.18, 4, 14, Math.PI), u, -16, 3.3, 19.3));
    for (let t of [-1, 1]) U(e, 0.35, 2.85, 0.5, u, -16 + t * 0.97, 0.45, l);
    U(e, 1.5, 2.7, 0.08, K(3095347, 0.6, 0.2), -15.05, 0.45, 19.75, 0.9);
    for (let [t, n] of [
      [o, c],
      [s, c],
      [o, l],
      [s, l],
    ])
      for (let r = 0.45, i = 0; r < 4.6; r += 0.38, i++)
        U(e, i % 2 ? 0.55 : 0.75, 0.34, i % 2 ? 0.75 : 0.55, u, t, r, n);
    (U(e, 9.2, 0.18, 6.7, u, -16, 3.95, 16), U(e, 9.5, 0.3, 7, u, -16, n, 16));
    let v = z(1024, 220, (e, t, n) => {
      ((e.fillStyle = `#c2b8a4`),
        e.fillRect(0, 0, t, n),
        (e.strokeStyle = `#8d8472`),
        (e.lineWidth = 8),
        e.strokeRect(10, 10, t - 20, n - 20),
        (e.fillStyle = `#4a4438`),
        (e.textAlign = `center`),
        (e.textBaseline = `middle`),
        (e.font = `700 64px Georgia, serif`),
        e.fillText(`GREYWATER GAS LIGHT & COKE Co.`, t / 2, n * 0.38),
        (e.font = `italic 600 54px Georgia, serif`),
        e.fillText(`No. 2 Holder · 1889`, t / 2, n * 0.72));
    });
    I(e, 4.2, 0.9, v, -16, 4.15, 19.29).userData.keep = !0;
    let y = 2.4,
      b = K(4014663, 0.7, 0.2);
    for (let t of [-1, 1]) {
      let n = G(
        e,
        new r(9.8, 0.12, Math.hypot(3.7, y)),
        b,
        -16,
        6.3,
        16 + t * 1.845,
      );
      n.rotation.x = t * Math.atan2(y, 3.7);
    }
    U(e, 9.8, 0.16, 0.3, K(2830131, 0.6), -16, 7.5, 16);
    let x = new T();
    (x.moveTo(-6.5 / 2, 0), x.lineTo(t / 2, 0), x.lineTo(0, y), x.closePath());
    let S = new w(x, { depth: a, bevelEnabled: !1 }),
      E = S.attributes.uv;
    for (let e = 0; e < E.count; e++)
      E.setXY(e, E.getX(e) / 0.9, E.getY(e) / 0.9);
    for (let t of [o, -11.9]) G(e, S, te, t, 5.1, 16).rotation.y = Math.PI / 2;
    (en(e, 0.9, 3.2, 0.9, te, -12.7, 5.3999999999999995, 14.8, 0, 0.9),
      U(e, 1.1, 0.2, 1.1, u, -12.7, 8.6, 14.8));
    for (let t of [-0.2, 0.2])
      P(e, 0.13, 0.13, 0.45, K(9067068, 0.8), -12.7 + t, 8.8, 14.8, 8);
    U(e, 8, 0.1, 5.5, d, -16, 0.45, 16);
    for (let t of [-1.2, 1.2]) {
      P(e, 0.45, 0.45, 2, ne, -16 + t, 0.55, 15.4, 14);
      let n = G(
        e,
        new i(0.42, 0.04, 6, 16),
        K(9318181, 0.6, 0.4),
        -16 + t,
        2.9,
        15.4,
      );
      ((n.rotation.x = Math.PI / 2),
        P(e, 0.05, 0.05, 0.4, g, -16 + t, 2.55, 15.4, 6));
    }
    (U(e, 1.4, 1.5, 1, K(5595226, 0.5, 0.5), -13, 0.55, 17.5),
      U(e, 0.3, 0.4, 0.25, g, -17.2, 3.1, 19.47),
      U(e, 0.22, 0.3, 0.04, F(16757850, 3), -17.2, 3.15, 19.61),
      U(e, 0.5, 0.1, 0.5, F(16773320, 2), -16, 4.6499999999999995, 16));
  }
  {
    let t = (E(0) + E(1)) / 2,
      n = 18 * k + 1.5,
      r = new _();
    (r.position.set(Math.cos(t) * n, 0, Math.sin(t) * n),
      (r.rotation.y = Math.PI / 2 - t),
      e.add(r));
    let i = 1.45,
      s = 2.95,
      c = -2.95,
      l = -1.45,
      u = 1.4;
    for (let e of [c, l, i, s])
      for (let t of [-1.39, u]) U(r, 0.18, 26.3, 0.18, g, e, 0, t);
    for (let e of [c, s]) U(r, 0.9, 0.3, 3.2, h, e, 0, 0);
    for (let e = 0; e < 7; e++) {
      let t = 3.6 * e,
        n = t + 1.8,
        o = t + 3.6;
      (e > 0 &&
        U(
          r,
          1.5000000000000002,
          0.1,
          2.84,
          b,
          4.4 / 2,
          t - 0.1,
          -0.040000000000000036 / 2,
        ),
        Qt(r, 1.3, [i, t, -0.73], [l, n, -0.73], b, { stringer: g }),
        U(
          r,
          1.5000000000000002,
          0.1,
          2.84,
          b,
          -4.4 / 2,
          n - 0.1,
          -0.040000000000000036 / 2,
        ),
        Qt(r, 1.3, [l, n, 0.69], [i, o, 0.69], b, { stringer: g }),
        $t(r, [l, n, u], [i, o, u], y, { post: 3.2 }),
        $t(r, [i, t, -0.02], [l, n, -0.02], m, { post: 3.2 }),
        $t(r, [c, n, -1.39], [c, n, u], y),
        Math.abs(n - a) > 0.01 && $t(r, [c, n, -1.39], [l, n, -1.39], y),
        $t(r, [c, n, u], [l, n, u], y),
        e > 0 &&
          ($t(r, [s, t, -1.39], [s, t, u], y),
          $t(r, [i, t, u], [s, t, u], y),
          $t(r, [i, t, -1.39], [s, t, -1.39], y)));
      for (let e of [-1, 1]) R(r, [c, t, e * 1.4], [s, o, e * 1.4], 0.03, g, 5);
      U(r, 0.3, 0.12, 0.2, F(16767392, 2), 2.75, t + 2.6, 1.25);
    }
    (U(
      r,
      1.5000000000000002,
      0.1,
      2.84,
      b,
      4.4 / 2,
      25.099999999999998,
      -0.040000000000000036 / 2,
    ),
      $t(r, [s, o, -1.39], [s, o, u], y),
      $t(r, [i, o, u], [s, o, u], y));
    let d = 18 * Math.sin(Math.PI / 16),
      f = -1.47;
    ($t(r, [-d, a, f], [c, a, f], m, { toe: m }),
      $t(r, [l, a, f], [d, a, f], m, { toe: m }),
      $t(r, [-d, o, f], [i, o, f], m, { toe: m }),
      $t(r, [s, o, f], [d, o, f], m, { toe: m }));
  }
  return ee(e, [40, 26.8, 40]);
}
