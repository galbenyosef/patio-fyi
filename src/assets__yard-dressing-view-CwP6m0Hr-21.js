// assets__yard-dressing-view-CwP6m0Hr 21 — range
// Lines 5970-6250 of readable/assets__yard-dressing-view-CwP6m0Hr.pretty.js (statement-aligned).
function Sr(e, t = {}) {
  let n = U(e),
    r = new C(),
    a = cn(t),
    o = t.w ?? n.range(2.4, 3.6),
    s = t.d ?? n.range(2.4, 3),
    c = n.chance(0.45),
    l = n.pick([`t111`, `bb`, `t111`, `lap`]),
    u = n.pick([
      12167306, 9058862, 6255968, 15131350, 7307148, 10189397, 4872810,
    ]),
    d = n.pick([bn, bn, 2894892, Se(u, 0.55)]),
    f = gn(d, 0.5),
    p = G(13215863, 0.9, 8),
    m = yn(),
    h = _e(),
    g = n.chance(0.25),
    _ = n
      .pick([
        [3881789, 4868684, 3092273],
        [6049864, 4997176, 6970450],
        [4870744, 3949642, 5792362],
        [3820090, 3293234, 4478020],
      ])
      .map((e) => H(e, 0.95)),
    v = H(n.pick([3816768, 7223854, 9080464, 3099194]), 0.45, 0.3),
    y =
      o > 3 ? [-o / 2 + 0.15, 0, o / 2 - 0.15] : [-o / 2 + 0.15, o / 2 - 0.15];
  for (let e of y) {
    for (let t of [-s / 2 + 0.25, 0, s / 2 - 0.25])
      B(r, 0.2, 0.1, 0.4, vn(), e, 0, t);
    dn(r, 0.089, 0.089, s, m, e, 0.1, 0);
  }
  let b = 0.329 + 0.019;
  for (let e of [-1, 1])
    (Y(r, o, 0.14, 0.038, m, 0, 0.259, e * (s / 2 - 0.019)),
      Y(r, 0.038, 0.14, s, m, e * (o / 2 - 0.019), 0.259, 0));
  B(r, o, 0.019, s, H(12098154, 0.9), 0, 0.329, 0);
  let x = n.range(1.95, 2.15),
    S,
    w;
  if (c) {
    let e = o / 2 - o * 0.17,
      t = x + o * 0.28,
      n = t + e * 0.42;
    ((S = [
      [e, t],
      [0, n],
      [-e, t],
    ]),
      (w = [
        [0, n],
        [e, t],
        [o / 2, x],
      ]));
  } else {
    let e = (o / 2) * n.pick([0.5, 0.58, 0.67]);
    ((S = [[0, x + e]]),
      (w = [
        [0, x + e],
        [o / 2, x],
      ]));
  }
  let T = { siding: l, col: u, trim: d, inner: p, corners: !0 },
    ee = Math.min(o - 0.6, n.range(1.2, 1.6)),
    E = Math.min(x - 0.1, 1.88),
    D = lr(
      r,
      {
        ...T,
        L: o,
        h: x,
        prof: S,
        rake: !0,
        open: [{ x0: -ee / 2, x1: ee / 2, y0: 0, y1: E, kind: `door` }],
      },
      0,
      b,
      s / 2,
      0,
    );
  lr(r, { ...T, L: o, h: x, prof: S, rake: !0 }, 0, b, -s / 2, J);
  let O = n.chance(0.5) ? 1 : -1,
    te = n.chance(0.3),
    k = n.range(0.6, 0.8),
    ne = n.range(0.6, 0.9),
    re = n.range(-0.3, 0.3);
  for (let e of [-1, 1]) {
    let t = e === O || te,
      i = lr(
        r,
        {
          ...T,
          L: s,
          h: x,
          frieze: !0,
          open: t
            ? [
                {
                  x0: re - k / 2,
                  x1: re + k / 2,
                  y0: 1,
                  y1: 1 + ne,
                  kind: `win`,
                  grid: [2, n.pick([2, 3])],
                },
              ]
            : [],
        },
        (e * o) / 2,
        b,
        0,
        (e * J) / 2,
      );
    if (t && e === O) {
      let e = k + 0.25,
        t = gn(d === 2894892 ? bn : d, 0.6),
        r = n.pick(De);
      for (let n of [-1, 1])
        (Y(i, e, 0.18, 0.02, t, re, 0.8099999999999999, 0.05 + n * 0.09),
          Y(
            i,
            0.02,
            0.18,
            0.18,
            t,
            re + n * (e / 2 - 0.01),
            0.8099999999999999,
            0.05,
          ),
          pn(
            i,
            [re + n * (e / 2 - 0.1), 0.52, 0.01],
            [re + n * (e / 2 - 0.1), 0.715, 0.13],
            0.03,
            0.03,
            t,
          ));
      B(i, e - 0.04, 0.02, 0.16, q.soil(), re, 0.86, 0.05);
      for (let t = 0; t < 7; t++) {
        let a = re - e / 2 + 0.08 + ((e - 0.16) * t) / 6;
        j(
          i,
          n.range(0.06, 0.09),
          H(n.pick([4155946, 5208624, 5933624]), 0.8),
          a,
          0.9199999999999999,
          0.05 + n.range(-0.03, 0.03),
          8,
        );
        for (let e = 0; e < 3; e++)
          j(
            i,
            0.022,
            H(n.chance(0.8) ? r : 16777215, 0.6),
            a + n.range(-0.05, 0.05),
            0.96 + n() * 0.05,
            0.05 + n.range(-0.05, 0.05),
            6,
          );
      }
      if (a)
        for (let t = 0; t < 4; t++)
          j(
            i,
            0.05,
            H(n.pick([9067050, 10119722, 6965802]), 0.9),
            re - e / 2 + 0.1 + (t * (e - 0.2)) / 3,
            0.8999999999999999,
            0.05,
            6,
          );
    }
  }
  let A = gn(u, 0.72);
  for (let e of [-1, 1]) {
    let t = e < 0 ? -ee / 2 + 0.008 : 0.004,
      n = e < 0 ? -0.004 : ee / 2 - 0.008,
      r = n - t,
      i = (t + n) / 2,
      a = E - 0.014,
      o = 0.007 + a / 2;
    if ((V(D, r, a, 0.03, A, i, o, -0.04), l === `t111`))
      for (let e = t + 0.1; e < n - 0.05; e += 0.1)
        V(D, 0.008, a - 0.2, 0.002, gn(Se(u, 0.62), 0.9), e, o, -0.024);
    for (let e of [t + 0.045, n - 0.045]) Y(D, 0.09, a, 0.02, f, e, o, -0.015);
    for (let e of [0.052, o, E - 0.052])
      Y(D, r - 0.18, 0.09, 0.02, f, i, e, -0.015);
    let s = e < 0 ? t + 0.09 : n - 0.09,
      c = e < 0 ? n - 0.09 : t + 0.09;
    for (let [e, t] of [
      [0.097, o - 0.045],
      [o + 0.045, E - 0.097],
    ])
      pn(D, [s, e, -0.015], [c, t, -0.015], 0.09, 0.02, f);
    for (let t of [0.3, E - 0.3]) On(D, (e * ee) / 2, t, 0.006, 0.38, -e, 1, h);
  }
  if (
    (Y(D, 0.05, E, 0.02, f, 0.022, E / 2, 0.01),
    An(D, 0.1, 1, 0.02, 1, h),
    An(D, -0.1, 1, 0.004, 1, h),
    V(D, 0.14, 0.04, 0.004, h, 0, 1.2, 0.022),
    I(D, new i(0.018, 0.004, 6, 14, J), ye(), 0.03, 1.2, 0.035),
    B(D, 0.04, 0.035, 0.018, H(12097066, 0.35, 0.8), 0.03, 1.15, 0.035),
    D.userData.topAt(0) - x > 0.55)
  ) {
    let e = x + (D.userData.topAt(0) - x) * 0.42;
    (V(D, 0.46, 0.3, 0.02, f, 0, e, 0.01),
      V(D, 0.36, 0.2, 0.01, H(1710618, 1), 0, e, 0.021));
    for (let t = 0; t < 4; t++)
      V(D, 0.36, 0.006, 0.05, f, 0, e - 0.075 + t * 0.05, 0.03, 0.7);
  }
  let ie = 0.1,
    ae = 0.2,
    oe = s + 0.3;
  for (let t of [-1, 1])
    for (let i = 0; i < w.length - 1; i++) {
      let [s, c] = w[i],
        [l, u] = w[i + 1],
        d = Math.atan2(c - u, l - s),
        p = i === w.length - 2;
      if (
        (pr(
          r,
          n,
          {
            L: oe,
            S: Math.hypot(l - s, c - u) + (p ? ae / Math.cos(d) : 0.07),
            pitch: d,
            kind: g ? `metal` : `shingle`,
            ms: _,
            m: v,
            arch: !0,
            leaves: a && i === 0 ? e + t + 3 : 0,
          },
          t * s,
          b + c + ie,
          0,
          (t * J) / 2,
        ),
        p)
      ) {
        let e = b + u + ie - ae * Math.tan(d);
        Y(r, 0.025, 0.15, oe + 0.02, f, t * (o / 2 + ae + 0.0125), e - 0.08, 0);
      }
    }
  let se = Math.atan2(w[0][1] - w[1][1], w[1][0]);
  if ((mr(r, oe, b + w[0][1] + ie, se, g ? v : _[0], `z`, g), n.chance(0.8))) {
    let t = n.range(0.9, 1.3),
      i = ee + 0.2,
      o = Math.atan2(b, t),
      c = Math.hypot(t, b),
      l = fn(
        [
          [0, 0.328],
          [t, 0.005],
          [t * 0.55, 0.005],
          [0, 0.17800000000000002],
        ],
        0.038,
      ).rotateY(-J / 2);
    for (let e of [-i / 2 + 0.038, 0.019, i / 2])
      I(r, l, m, e, 0, s / 2 + 0.03);
    let u = new C();
    (u.position.set(0, b, s / 2 + 0.03),
      (u.rotation.x = o),
      r.add(u),
      Y(u, i, 0.019, c, H(12098154, 0.9), 0, -0.0095, c / 2));
    for (let e = 0.1; e < c - 0.05; e += 0.15)
      Y(u, i - 0.06, 0.03, 0.038, m, 0, 0.015, e);
    a &&
      K(
        u,
        { w: i - 0.1, d: c - 0.1, cx: 0, cz: c / 2 },
        { count: 12, y: 0.035, seed: e },
      );
  }
  return R(hn(r), {
    note: `${c ? `gambrel` : `gable`}, ${l === `bb` ? `board-and-batten` : l === `t111` ? `T1-11` : `lap`} ${o.toFixed(1)} x ${s.toFixed(1)} m`,
  });
}
