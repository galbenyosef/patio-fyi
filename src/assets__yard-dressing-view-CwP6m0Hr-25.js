// assets__yard-dressing-view-CwP6m0Hr 25 — math
// Lines 7154-7593 of readable/assets__yard-dressing-view-CwP6m0Hr.pretty.js (statement-aligned).
function mi(e, t = {}) {
  let n = U(e),
    r = new C(),
    i = t.season === `fall`,
    a = t.w ?? n.pick([7.3, 8, 8, 8.5, 9.1]),
    o = t.d ?? n.pick([3.7, 4, 4, 4.3, 4.9]),
    s = t.board ?? n.chance(0.5),
    c = 1.05,
    l = s ? 2.45 : 1.75,
    u = [
      [a / 2, c],
      [a * 0.2, c],
      [0, s ? 1.5 : 1.35],
      [-a / 2 + a * (s ? 0.3 : 0.22), l],
      [-a * 0.46, l + 0.03],
      [-a / 2, l],
    ],
    d = u.map((e) => e[0]),
    f = (e) => {
      for (let t = 1; t < u.length; t++) {
        let [n, r] = u[t - 1],
          [i, a] = u[t];
        if (e >= i) return r + ((a - r) * (n - e)) / (n - i);
      }
      return l;
    },
    p = [
      ...d.map((e) => [e, o / 2]),
      ...d
        .slice()
        .reverse()
        .map((e) => [e, -o / 2]),
    ],
    m = Yr(n.pick(Jr)),
    h = qr(n.pick([`#dcebf0`, `#e8eef0`, `#b8d4e0`, `#9ab8c8`, `#c8d8d4`]));
  (Nr(
    r,
    Fr(
      p,
      () => 0,
      () => -0.18,
      !0,
      1.2,
    ),
    m,
    !1,
  ),
    Nr(
      r,
      Fr(
        p,
        () => -0.18,
        (e) => -f(e),
        !0,
        2,
      ),
      h,
      !1,
    ));
  let _ = [],
    v = [],
    y = [];
  (d.forEach((e, t) => {
    if (
      (_.push(e, -f(e), -o / 2, e, -f(e), o / 2),
      y.push(e / 2, -o / 4, e / 2, o / 4),
      t)
    ) {
      let e = t * 2;
      v.push(e - 2, e - 1, e, e - 1, e + 1, e);
    }
  }),
    Nr(r, Pr(_, v, y), h, !1));
  let b = H(n.pick([1714778, 1323114, 2107952]), 0.4, 0, { side: Tr });
  if (n.chance(0.6)) {
    let e = [];
    for (let t = 0; t <= 30; t++) {
      let n = a / 2 - 0.4 - ((a - 0.8) * t) / 30;
      e.push([n, -f(n) + 0.006, 0]);
    }
    Nr(
      r,
      Rr(
        e,
        [
          [-0.12, 0],
          [0.12, 0],
        ],
        40,
      ),
      b,
      !1,
    );
    for (let e of [-1, 1]) {
      let t = f((e * a) / 2);
      V(
        r,
        0.008,
        t - 0.55,
        0.24,
        b,
        e * (a / 2 - 0.006),
        -0.35 - (t - 0.55) / 2,
        0,
      );
    }
  }
  let x = n.pick([`full`, `corner`, `ladder`]),
    S = H(1849962, 0.3);
  if (x !== `ladder`) {
    let e = x === `full` ? o : n.range(1.6, 2.2),
      t = x === `full` ? 0 : (n.chance(0.5) ? 1 : -1) * (o / 2 - e / 2);
    for (let n = 1; n <= 3; n++) {
      let i = -0.26 * n + 0.02,
        o = a / 2 - 0.36 * n;
      (B(r, a / 2 - o, i + c, e, h, (a / 2 + o) / 2, -1.05, t),
        V(r, 0.05, 0.012, e, S, o + 0.025, i + 0.001, t));
    }
    if (!i && n.chance(0.75)) {
      let n = x === `full` ? 0 : t - Math.sign(t || 1) * (e / 2 - 0.25);
      L(
        r,
        [
          [a / 2 + 0.55, 0.03, n],
          [a / 2 + 0.42, 0.85, n],
          [a / 2 + 0.05, 0.95, n],
          [a / 2 - 0.5, 0.62, n],
          [a / 2 - 0.85, 0.1, n],
          [a / 2 - 0.95, -0.78, n],
        ],
        0.021,
        Or(),
        48,
        10,
      );
    }
  } else i || di(r, a / 2 - 0.8, o / 2, 0, 1);
  i || di(r, -a / 2 + 1.1, o / 2, 0, l - 0.2);
  for (let e of a > 8.2 ? [-a / 2, a / 2] : [-a / 2])
    (Z(r, 0.15, 0.15, 0.015, Or(), X(e, -0.62, 0), X(-Math.sign(e), 0, 0), 24),
      Z(
        r,
        0.12,
        0.12,
        0.004,
        Ce(16773832, 0.6),
        X(e - Math.sign(e) * 0.015, -0.62, 0),
        X(-Math.sign(e), 0, 0),
        24,
      ));
  for (let e of [a / 4, -a / 4])
    Z(r, 0.03, 0.03, 0.02, he(15263968), X(e, -0.42, o / 2), X(0, 0, -1), 12);
  for (let e of [-0.5, 0.5])
    V(r, 0.26, 0.012, 0.26, H(2765888, 0.6), -a / 2 + 0.9, -l + 0.006, e);
  V(r, 0.32, 0.13, 0.012, H(1975336, 0.7), a / 2 - 1.3, -0.12, -o / 2 + 0.006);
  let w = H(n.pick([14998212, 14208440, 12104876, 11034698, 13616818]), 0.85),
    T = 0.32,
    ee = 0.055;
  for (let e of [-1, 1])
    (F(
      r,
      a + 2 * T - 0.08,
      ee,
      T,
      0.022,
      w,
      0,
      ee / 2,
      e * (o / 2 + T / 2 - 0.04),
    ),
      F(r, T, ee, o + 0.02, 0.022, w, e * (a / 2 + T / 2 - 0.04), ee / 2, 0));
  let E = !s && n.chance(0.6),
    O = s || E ? n.range(2.5, 2.9) : n.range(1.4, 2.2),
    te = n.range(1.3, 1.9),
    k = t.deck ?? n.pick([`concrete`, `cool`, `pavers`, `travertine`]),
    ne = Xr[k](),
    re = a / 2 + T - 0.07,
    A = o / 2 + T - 0.07;
  if (
    (Lr(
      r,
      [
        [-a / 2 - O, -o / 2 - te],
        [a / 2 + O, -o / 2 - te],
        [a / 2 + O, o / 2 + te],
        [-a / 2 - O, o / 2 + te],
      ],
      0.035,
      ne,
      0,
      [
        [
          [-re, -A],
          [re, -A],
          [re, A],
          [-re, A],
        ],
      ],
      Zr[k],
    ),
    z(r, 0.2, 0.2, 0.012, he(15263970), a / 2 - 1.3, 0.035, -o / 2 - 0.55, 24),
    s)
  ) {
    let e = H(n.pick([2779840, 15261896, 3836570, 13154458]), 0.6),
      t = n.pick([2.4, 2.4, 3]),
      i = -a / 2,
      o = n.pick([0, 0, 0.6, -0.6]);
    for (let e of [-1, 1])
      be(
        r,
        [
          [0, 0],
          [1.05, 0],
          [0.95, 0.12],
          [0.3, 0.42],
          [0.05, 0.42],
          [0, 0.3],
        ],
        0.014,
        ve(),
        i - 1.15,
        0.035,
        o + e * 0.26 - 0.007,
      );
    Z(
      r,
      0.035,
      0.035,
      0.56,
      H(2763306, 0.5),
      X(i - 0.5, 0.4, o - 0.28),
      X(0, 0, 1),
      12,
    );
    let s = F(
      r,
      t,
      0.055,
      0.5,
      0.02,
      e,
      i - 1.05 + t / 2,
      0.475,
      o,
      0,
      0,
      0.018,
    );
    (V(
      r,
      t - 0.3,
      0.004,
      0.44,
      H(Se(e.color.getHex(), 0.85), 0.95),
      i - 0.9 + t / 2,
      0.505 + (t / 2 - 0.15) * 0.018,
      o,
      0,
      0,
      0.018,
    ),
      (s.castShadow = !0));
  } else if (E) {
    let e = n.chance(0.5) ? 1 : -1,
      t = e * (o / 2 - 0.9),
      s = -a / 2,
      c = H(n.pick([2779840, 14207136, 3840688, 9079432]), 0.3, 0, {
        side: Tr,
      }),
      l = new g([
        X(s - 2, 2.05, t),
        X(s - 1.45, 1.86, t),
        X(s - 0.8, 1.35, t - e * 0.25),
        X(s - 0.15, 0.8, t - e * 0.45),
        X(s + 0.45, 0.45, t - e * 0.4),
      ]);
    Nr(
      r,
      Rr(
        l,
        [
          [-0.31, 0.22],
          [-0.3, 0.06],
          [-0.22, 0],
          [-0.1, -0.03],
          [0, -0.035],
          [0.1, -0.03],
          [0.22, 0],
          [0.3, 0.06],
          [0.31, 0.22],
        ],
        60,
      ),
      c,
    );
    for (let e of [0.3, 0.62]) {
      let t = l.getPointAt(e);
      for (let e of [-1, 1])
        N(
          r,
          [t.x, t.y - 0.04, t.z + e * 0.22],
          [t.x - 0.05, 0.035, t.z + e * 0.3],
          0.024,
          Or(),
          10,
        );
    }
    for (let e of [-1, 1])
      (N(
        r,
        [s - 2, 2.05, t + e * 0.26],
        [s - 2.55, 0.035, t + e * 0.3],
        0.022,
        Or(),
        10,
      ),
        L(
          r,
          [
            [s - 2.3, 1.2, t + e * 0.28],
            [s - 2, 2.65, t + e * 0.27],
            [s - 1.7, 2.45, t + e * 0.3],
            [s - 1.45, 2.1, t + e * 0.3],
          ],
          0.018,
          Or(),
          24,
          8,
        ));
    for (let e = 0; e < 6; e++) {
      let n = (e + 0.5) / 6;
      V(
        r,
        0.1,
        0.03,
        0.5,
        H(15263968, 0.6),
        s - 2.55 + 0.55 * n,
        0.035 + 2 * n,
        t,
      );
    }
    i ||
      (ei(
        r,
        [
          [s - 2, 1.95, t - 0.3],
          [s - 2.3, 1.2, t - 0.34],
          [s - 2.5, 0.05, t - 0.36],
          [s - 2.7, 0.04, t - 0.8],
        ],
        0.008,
        H(1710618, 0.5),
      ),
      et(
        r,
        60,
        1.1,
        (e, t, n) => (
          n.copy(l.getPointAt(Math.min(t, 0.999))),
          (n.y -= 0.018),
          (n.z += (jr(e * 0.37) - 0.5) * 0.24),
          0.9
        ),
        { size: 0.018, opacity: 0.5 },
      ));
  }
  if (!i)
    Qe(
      r,
      a,
      o,
      -0.14,
      Ze(n.pick([3122888, 3846336, 2791616]), { opacity: 0.62, scale: 1.8 }),
    );
  else {
    let t = H(n.pick([3033654, 2241618, 6971464, 2500650]), 0.95, 0, {
        side: Tr,
      }),
      i = 0.36,
      s = a + 2 * i,
      c = o + 2 * i,
      l = n.range(0.14, 0.26),
      u = n.range(-a / 4, a / 4),
      d = n.range(-o / 5, o / 5),
      f = (e, t) =>
        Math.max(0, 1 - ((2 * e) / a) ** 2) *
        Math.max(0, 1 - ((2 * t) / o) ** 2),
      p = (e, t) =>
        0.068 -
        f(e, t) * (l + 0.09 * Math.exp(-((e - u) ** 2 + (t - d) ** 2) / 0.6)),
      m = new D(s, c, 60, 30).rotateX(-Math.PI / 2),
      h = m.attributes.position;
    for (let e = 0; e < h.count; e++) h.setY(e, p(h.getX(e), h.getZ(e)));
    (m.computeVertexNormals(), Me(m, 1), Nr(r, m, t, !1));
    let g = H(Se(t.color.getHex(), 0.7), 0.8, 0, { side: Tr });
    for (let e of [-1, 1])
      (V(r, s, 0.008, 0.05, g, 0, 0.072, e * (c / 2 - 0.02)),
        V(r, 0.05, 0.008, c, g, e * (s / 2 - 0.02), 0.072, 0));
    let _ = [];
    for (let e = -s / 2 + 0.3; e < s / 2 - 0.2; e += n.range(1.1, 1.4))
      _.push(e);
    pi(
      r,
      p,
      (e, t) => Math.abs(e) < s / 2 && Math.abs(t) < c / 2,
      _,
      c / 2 + 0.1,
      g,
    );
    let v = p(u, d) + n.range(0.035, 0.05),
      y = Gr(r, p, u, d, v),
      b = Math.max(...y.map(([e, t]) => Math.hypot(e - u, t - d)));
    (Ur(
      K(r, { w: s - 0.1, d: c - 0.1 }, { count: n.int(170, 320), seed: e + 5 }),
      (e, t) =>
        (Math.hypot(e - u, t - d) < b ? Math.max(p(e, t), v) : p(e, t)) + 0.012,
    ),
      K(
        r,
        {
          w: a + 2 * O,
          d: o + 2 * te,
          inside: (e, t) => Math.abs(e) > s / 2 || Math.abs(t) > c / 2,
        },
        { count: n.int(80, 160), seed: e + 6, y: 0.045, clump: 0.3 },
      ));
  }
  return R(r, {
    sunk: !0,
    hole: [
      [-a / 2, -o / 2],
      [a / 2, -o / 2],
      [a / 2, o / 2],
      [-a / 2, o / 2],
    ],
    pool: { w: a, d: o, deep: l, water: -0.14 },
    deck: [a + 2 * O, o + 2 * te],
  });
}
