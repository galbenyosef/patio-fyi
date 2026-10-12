// assets__yard-dressing-view-Du2F6MWT 21 — range
// Lines 5970-6250 of readable/assets__yard-dressing-view-Du2F6MWT.pretty.js (statement-aligned).
function Sr(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = cn(t),
    a = t.w ?? n.range(2.4, 3.6),
    o = t.d ?? n.range(2.4, 3),
    s = n.chance(0.45),
    c = n.pick([`t111`, `bb`, `t111`, `lap`]),
    l = n.pick([
      12167306, 9058862, 6255968, 15131350, 7307148, 10189397, 4872810,
    ]),
    u = n.pick([bn, bn, 2894892, Se(l, 0.55)]),
    f = gn(u, 0.5),
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
      a > 3 ? [-a / 2 + 0.15, 0, a / 2 - 0.15] : [-a / 2 + 0.15, a / 2 - 0.15];
  for (let e of y) {
    for (let t of [-o / 2 + 0.25, 0, o / 2 - 0.25])
      B(r, 0.2, 0.1, 0.4, vn(), e, 0, t);
    dn(r, 0.089, 0.089, o, m, e, 0.1, 0);
  }
  let b = 0.329 + 0.019;
  for (let e of [-1, 1])
    (Y(r, a, 0.14, 0.038, m, 0, 0.259, e * (o / 2 - 0.019)),
      Y(r, 0.038, 0.14, o, m, e * (a / 2 - 0.019), 0.259, 0));
  B(r, a, 0.019, o, H(12098154, 0.9), 0, 0.329, 0);
  let x = n.range(1.95, 2.15),
    S,
    C;
  if (s) {
    let e = a / 2 - a * 0.17,
      t = x + a * 0.28,
      n = t + e * 0.42;
    ((S = [
      [e, t],
      [0, n],
      [-e, t],
    ]),
      (C = [
        [0, n],
        [e, t],
        [a / 2, x],
      ]));
  } else {
    let e = (a / 2) * n.pick([0.5, 0.58, 0.67]);
    ((S = [[0, x + e]]),
      (C = [
        [0, x + e],
        [a / 2, x],
      ]));
  }
  let ee = { siding: c, col: l, trim: u, inner: p, corners: !0 },
    w = Math.min(a - 0.6, n.range(1.2, 1.6)),
    T = Math.min(x - 0.1, 1.88),
    E = lr(
      r,
      {
        ...ee,
        L: a,
        h: x,
        prof: S,
        rake: !0,
        open: [{ x0: -w / 2, x1: w / 2, y0: 0, y1: T, kind: `door` }],
      },
      0,
      b,
      o / 2,
      0,
    );
  lr(r, { ...ee, L: a, h: x, prof: S, rake: !0 }, 0, b, -o / 2, J);
  let O = n.chance(0.5) ? 1 : -1,
    te = n.chance(0.3),
    ne = n.range(0.6, 0.8),
    re = n.range(0.6, 0.9),
    ie = n.range(-0.3, 0.3);
  for (let e of [-1, 1]) {
    let t = e === O || te,
      s = lr(
        r,
        {
          ...ee,
          L: o,
          h: x,
          frieze: !0,
          open: t
            ? [
                {
                  x0: ie - ne / 2,
                  x1: ie + ne / 2,
                  y0: 1,
                  y1: 1 + re,
                  kind: `win`,
                  grid: [2, n.pick([2, 3])],
                },
              ]
            : [],
        },
        (e * a) / 2,
        b,
        0,
        (e * J) / 2,
      );
    if (t && e === O) {
      let e = ne + 0.25,
        t = gn(u === 2894892 ? bn : u, 0.6),
        r = n.pick(De);
      for (let n of [-1, 1])
        (Y(s, e, 0.18, 0.02, t, ie, 0.8099999999999999, 0.05 + n * 0.09),
          Y(
            s,
            0.02,
            0.18,
            0.18,
            t,
            ie + n * (e / 2 - 0.01),
            0.8099999999999999,
            0.05,
          ),
          pn(
            s,
            [ie + n * (e / 2 - 0.1), 0.52, 0.01],
            [ie + n * (e / 2 - 0.1), 0.715, 0.13],
            0.03,
            0.03,
            t,
          ));
      B(s, e - 0.04, 0.02, 0.16, q.soil(), ie, 0.86, 0.05);
      for (let t = 0; t < 7; t++) {
        let i = ie - e / 2 + 0.08 + ((e - 0.16) * t) / 6;
        j(
          s,
          n.range(0.06, 0.09),
          H(n.pick([4155946, 5208624, 5933624]), 0.8),
          i,
          0.9199999999999999,
          0.05 + n.range(-0.03, 0.03),
          8,
        );
        for (let e = 0; e < 3; e++)
          j(
            s,
            0.022,
            H(n.chance(0.8) ? r : 16777215, 0.6),
            i + n.range(-0.05, 0.05),
            0.96 + n() * 0.05,
            0.05 + n.range(-0.05, 0.05),
            6,
          );
      }
      if (i)
        for (let t = 0; t < 4; t++)
          j(
            s,
            0.05,
            H(n.pick([9067050, 10119722, 6965802]), 0.9),
            ie - e / 2 + 0.1 + (t * (e - 0.2)) / 3,
            0.8999999999999999,
            0.05,
            6,
          );
    }
  }
  let k = gn(l, 0.72);
  for (let e of [-1, 1]) {
    let t = e < 0 ? -w / 2 + 0.008 : 0.004,
      n = e < 0 ? -0.004 : w / 2 - 0.008,
      r = n - t,
      i = (t + n) / 2,
      a = T - 0.014,
      o = 0.007 + a / 2;
    if ((V(E, r, a, 0.03, k, i, o, -0.04), c === `t111`))
      for (let e = t + 0.1; e < n - 0.05; e += 0.1)
        V(E, 0.008, a - 0.2, 0.002, gn(Se(l, 0.62), 0.9), e, o, -0.024);
    for (let e of [t + 0.045, n - 0.045]) Y(E, 0.09, a, 0.02, f, e, o, -0.015);
    for (let e of [0.052, o, T - 0.052])
      Y(E, r - 0.18, 0.09, 0.02, f, i, e, -0.015);
    let s = e < 0 ? t + 0.09 : n - 0.09,
      u = e < 0 ? n - 0.09 : t + 0.09;
    for (let [e, t] of [
      [0.097, o - 0.045],
      [o + 0.045, T - 0.097],
    ])
      pn(E, [s, e, -0.015], [u, t, -0.015], 0.09, 0.02, f);
    for (let t of [0.3, T - 0.3]) On(E, (e * w) / 2, t, 0.006, 0.38, -e, 1, h);
  }
  if (
    (Y(E, 0.05, T, 0.02, f, 0.022, T / 2, 0.01),
    An(E, 0.1, 1, 0.02, 1, h),
    An(E, -0.1, 1, 0.004, 1, h),
    V(E, 0.14, 0.04, 0.004, h, 0, 1.2, 0.022),
    I(E, new d(0.018, 0.004, 6, 14, J), ye(), 0.03, 1.2, 0.035),
    B(E, 0.04, 0.035, 0.018, H(12097066, 0.35, 0.8), 0.03, 1.15, 0.035),
    E.userData.topAt(0) - x > 0.55)
  ) {
    let e = x + (E.userData.topAt(0) - x) * 0.42;
    (V(E, 0.46, 0.3, 0.02, f, 0, e, 0.01),
      V(E, 0.36, 0.2, 0.01, H(1710618, 1), 0, e, 0.021));
    for (let t = 0; t < 4; t++)
      V(E, 0.36, 0.006, 0.05, f, 0, e - 0.075 + t * 0.05, 0.03, 0.7);
  }
  let ae = 0.1,
    oe = 0.2,
    A = o + 0.3;
  for (let t of [-1, 1])
    for (let o = 0; o < C.length - 1; o++) {
      let [s, c] = C[o],
        [l, u] = C[o + 1],
        d = Math.atan2(c - u, l - s),
        p = o === C.length - 2;
      if (
        (pr(
          r,
          n,
          {
            L: A,
            S: Math.hypot(l - s, c - u) + (p ? oe / Math.cos(d) : 0.07),
            pitch: d,
            kind: g ? `metal` : `shingle`,
            ms: _,
            m: v,
            arch: !0,
            leaves: i && o === 0 ? e + t + 3 : 0,
          },
          t * s,
          b + c + ae,
          0,
          (t * J) / 2,
        ),
        p)
      ) {
        let e = b + u + ae - oe * Math.tan(d);
        Y(r, 0.025, 0.15, A + 0.02, f, t * (a / 2 + oe + 0.0125), e - 0.08, 0);
      }
    }
  let se = Math.atan2(C[0][1] - C[1][1], C[1][0]);
  if ((mr(r, A, b + C[0][1] + ae, se, g ? v : _[0], `z`, g), n.chance(0.8))) {
    let t = n.range(0.9, 1.3),
      a = w + 0.2,
      s = Math.atan2(b, t),
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
    for (let e of [-a / 2 + 0.038, 0.019, a / 2])
      I(r, l, m, e, 0, o / 2 + 0.03);
    let u = new D();
    (u.position.set(0, b, o / 2 + 0.03),
      (u.rotation.x = s),
      r.add(u),
      Y(u, a, 0.019, c, H(12098154, 0.9), 0, -0.0095, c / 2));
    for (let e = 0.1; e < c - 0.05; e += 0.15)
      Y(u, a - 0.06, 0.03, 0.038, m, 0, 0.015, e);
    i &&
      K(
        u,
        { w: a - 0.1, d: c - 0.1, cx: 0, cz: c / 2 },
        { count: 12, y: 0.035, seed: e },
      );
  }
  return R(hn(r), {
    note: `${s ? `gambrel` : `gable`}, ${c === `bb` ? `board-and-batten` : c === `t111` ? `T1-11` : `lap`} ${a.toFixed(1)} x ${o.toFixed(1)} m`,
  });
}
