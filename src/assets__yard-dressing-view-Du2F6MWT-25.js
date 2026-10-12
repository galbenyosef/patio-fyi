// assets__yard-dressing-view-Du2F6MWT 25 — math
// Lines 7154-7593 of readable/assets__yard-dressing-view-Du2F6MWT.pretty.js (statement-aligned).
function mi(t, n = {}) {
  let r = U(t),
    i = new D(),
    a = n.season === `fall`,
    o = n.w ?? r.pick([7.3, 8, 8, 8.5, 9.1]),
    s = n.d ?? r.pick([3.7, 4, 4, 4.3, 4.9]),
    c = n.board ?? r.chance(0.5),
    l = 1.05,
    u = c ? 2.45 : 1.75,
    d = [
      [o / 2, l],
      [o * 0.2, l],
      [0, c ? 1.5 : 1.35],
      [-o / 2 + o * (c ? 0.3 : 0.22), u],
      [-o * 0.46, u + 0.03],
      [-o / 2, u],
    ],
    f = d.map((e) => e[0]),
    p = (e) => {
      for (let t = 1; t < d.length; t++) {
        let [n, r] = d[t - 1],
          [i, a] = d[t];
        if (e >= i) return r + ((a - r) * (n - e)) / (n - i);
      }
      return u;
    },
    m = [
      ...f.map((e) => [e, s / 2]),
      ...f
        .slice()
        .reverse()
        .map((e) => [e, -s / 2]),
    ],
    h = Yr(r.pick(Jr)),
    g = qr(r.pick([`#dcebf0`, `#e8eef0`, `#b8d4e0`, `#9ab8c8`, `#c8d8d4`]));
  (Nr(
    i,
    Fr(
      m,
      () => 0,
      () => -0.18,
      !0,
      1.2,
    ),
    h,
    !1,
  ),
    Nr(
      i,
      Fr(
        m,
        () => -0.18,
        (e) => -p(e),
        !0,
        2,
      ),
      g,
      !1,
    ));
  let _ = [],
    v = [],
    y = [];
  (f.forEach((e, t) => {
    if (
      (_.push(e, -p(e), -s / 2, e, -p(e), s / 2),
      y.push(e / 2, -s / 4, e / 2, s / 4),
      t)
    ) {
      let e = t * 2;
      v.push(e - 2, e - 1, e, e - 1, e + 1, e);
    }
  }),
    Nr(i, Pr(_, v, y), g, !1));
  let b = H(r.pick([1714778, 1323114, 2107952]), 0.4, 0, { side: Tr });
  if (r.chance(0.6)) {
    let e = [];
    for (let t = 0; t <= 30; t++) {
      let n = o / 2 - 0.4 - ((o - 0.8) * t) / 30;
      e.push([n, -p(n) + 0.006, 0]);
    }
    Nr(
      i,
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
      let t = p((e * o) / 2);
      V(
        i,
        0.008,
        t - 0.55,
        0.24,
        b,
        e * (o / 2 - 0.006),
        -0.35 - (t - 0.55) / 2,
        0,
      );
    }
  }
  let x = r.pick([`full`, `corner`, `ladder`]),
    S = H(1849962, 0.3);
  if (x !== `ladder`) {
    let e = x === `full` ? s : r.range(1.6, 2.2),
      t = x === `full` ? 0 : (r.chance(0.5) ? 1 : -1) * (s / 2 - e / 2);
    for (let n = 1; n <= 3; n++) {
      let r = -0.26 * n + 0.02,
        a = o / 2 - 0.36 * n;
      (B(i, o / 2 - a, r + l, e, g, (o / 2 + a) / 2, -1.05, t),
        V(i, 0.05, 0.012, e, S, a + 0.025, r + 0.001, t));
    }
    if (!a && r.chance(0.75)) {
      let n = x === `full` ? 0 : t - Math.sign(t || 1) * (e / 2 - 0.25);
      L(
        i,
        [
          [o / 2 + 0.55, 0.03, n],
          [o / 2 + 0.42, 0.85, n],
          [o / 2 + 0.05, 0.95, n],
          [o / 2 - 0.5, 0.62, n],
          [o / 2 - 0.85, 0.1, n],
          [o / 2 - 0.95, -0.78, n],
        ],
        0.021,
        Or(),
        48,
        10,
      );
    }
  } else a || di(i, o / 2 - 0.8, s / 2, 0, 1);
  a || di(i, -o / 2 + 1.1, s / 2, 0, u - 0.2);
  for (let e of o > 8.2 ? [-o / 2, o / 2] : [-o / 2])
    (Z(i, 0.15, 0.15, 0.015, Or(), X(e, -0.62, 0), X(-Math.sign(e), 0, 0), 24),
      Z(
        i,
        0.12,
        0.12,
        0.004,
        Ce(16773832, 0.6),
        X(e - Math.sign(e) * 0.015, -0.62, 0),
        X(-Math.sign(e), 0, 0),
        24,
      ));
  for (let e of [o / 4, -o / 4])
    Z(i, 0.03, 0.03, 0.02, he(15263968), X(e, -0.42, s / 2), X(0, 0, -1), 12);
  for (let e of [-0.5, 0.5])
    V(i, 0.26, 0.012, 0.26, H(2765888, 0.6), -o / 2 + 0.9, -u + 0.006, e);
  V(i, 0.32, 0.13, 0.012, H(1975336, 0.7), o / 2 - 1.3, -0.12, -s / 2 + 0.006);
  let ee = H(r.pick([14998212, 14208440, 12104876, 11034698, 13616818]), 0.85),
    w = 0.32,
    T = 0.055;
  for (let e of [-1, 1])
    (F(
      i,
      o + 2 * w - 0.08,
      T,
      w,
      0.022,
      ee,
      0,
      T / 2,
      e * (s / 2 + w / 2 - 0.04),
    ),
      F(i, w, T, s + 0.02, 0.022, ee, e * (o / 2 + w / 2 - 0.04), T / 2, 0));
  let E = !c && r.chance(0.6),
    O = c || E ? r.range(2.5, 2.9) : r.range(1.4, 2.2),
    te = r.range(1.3, 1.9),
    ne = n.deck ?? r.pick([`concrete`, `cool`, `pavers`, `travertine`]),
    re = Xr[ne](),
    ie = o / 2 + w - 0.07,
    k = s / 2 + w - 0.07;
  if (
    (Lr(
      i,
      [
        [-o / 2 - O, -s / 2 - te],
        [o / 2 + O, -s / 2 - te],
        [o / 2 + O, s / 2 + te],
        [-o / 2 - O, s / 2 + te],
      ],
      0.035,
      re,
      0,
      [
        [
          [-ie, -k],
          [ie, -k],
          [ie, k],
          [-ie, k],
        ],
      ],
      Zr[ne],
    ),
    z(i, 0.2, 0.2, 0.012, he(15263970), o / 2 - 1.3, 0.035, -s / 2 - 0.55, 24),
    c)
  ) {
    let e = H(r.pick([2779840, 15261896, 3836570, 13154458]), 0.6),
      t = r.pick([2.4, 2.4, 3]),
      n = -o / 2,
      a = r.pick([0, 0, 0.6, -0.6]);
    for (let e of [-1, 1])
      be(
        i,
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
        n - 1.15,
        0.035,
        a + e * 0.26 - 0.007,
      );
    Z(
      i,
      0.035,
      0.035,
      0.56,
      H(2763306, 0.5),
      X(n - 0.5, 0.4, a - 0.28),
      X(0, 0, 1),
      12,
    );
    let s = F(
      i,
      t,
      0.055,
      0.5,
      0.02,
      e,
      n - 1.05 + t / 2,
      0.475,
      a,
      0,
      0,
      0.018,
    );
    (V(
      i,
      t - 0.3,
      0.004,
      0.44,
      H(Se(e.color.getHex(), 0.85), 0.95),
      n - 0.9 + t / 2,
      0.505 + (t / 2 - 0.15) * 0.018,
      a,
      0,
      0,
      0.018,
    ),
      (s.castShadow = !0));
  } else if (E) {
    let t = r.chance(0.5) ? 1 : -1,
      n = t * (s / 2 - 0.9),
      c = -o / 2,
      l = H(r.pick([2779840, 14207136, 3840688, 9079432]), 0.3, 0, {
        side: Tr,
      }),
      u = new e([
        X(c - 2, 2.05, n),
        X(c - 1.45, 1.86, n),
        X(c - 0.8, 1.35, n - t * 0.25),
        X(c - 0.15, 0.8, n - t * 0.45),
        X(c + 0.45, 0.45, n - t * 0.4),
      ]);
    Nr(
      i,
      Rr(
        u,
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
      l,
    );
    for (let e of [0.3, 0.62]) {
      let t = u.getPointAt(e);
      for (let e of [-1, 1])
        N(
          i,
          [t.x, t.y - 0.04, t.z + e * 0.22],
          [t.x - 0.05, 0.035, t.z + e * 0.3],
          0.024,
          Or(),
          10,
        );
    }
    for (let e of [-1, 1])
      (N(
        i,
        [c - 2, 2.05, n + e * 0.26],
        [c - 2.55, 0.035, n + e * 0.3],
        0.022,
        Or(),
        10,
      ),
        L(
          i,
          [
            [c - 2.3, 1.2, n + e * 0.28],
            [c - 2, 2.65, n + e * 0.27],
            [c - 1.7, 2.45, n + e * 0.3],
            [c - 1.45, 2.1, n + e * 0.3],
          ],
          0.018,
          Or(),
          24,
          8,
        ));
    for (let e = 0; e < 6; e++) {
      let t = (e + 0.5) / 6;
      V(
        i,
        0.1,
        0.03,
        0.5,
        H(15263968, 0.6),
        c - 2.55 + 0.55 * t,
        0.035 + 2 * t,
        n,
      );
    }
    a ||
      (ei(
        i,
        [
          [c - 2, 1.95, n - 0.3],
          [c - 2.3, 1.2, n - 0.34],
          [c - 2.5, 0.05, n - 0.36],
          [c - 2.7, 0.04, n - 0.8],
        ],
        0.008,
        H(1710618, 0.5),
      ),
      et(
        i,
        60,
        1.1,
        (e, t, n) => (
          n.copy(u.getPointAt(Math.min(t, 0.999))),
          (n.y -= 0.018),
          (n.z += (jr(e * 0.37) - 0.5) * 0.24),
          0.9
        ),
        { size: 0.018, opacity: 0.5 },
      ));
  }
  if (!a)
    Qe(
      i,
      o,
      s,
      -0.14,
      Ze(r.pick([3122888, 3846336, 2791616]), { opacity: 0.62, scale: 1.8 }),
    );
  else {
    let e = H(r.pick([3033654, 2241618, 6971464, 2500650]), 0.95, 0, {
        side: Tr,
      }),
      n = 0.36,
      a = o + 2 * n,
      c = s + 2 * n,
      l = r.range(0.14, 0.26),
      u = r.range(-o / 4, o / 4),
      d = r.range(-s / 5, s / 5),
      f = (e, t) =>
        Math.max(0, 1 - ((2 * e) / o) ** 2) *
        Math.max(0, 1 - ((2 * t) / s) ** 2),
      p = (e, t) =>
        0.068 -
        f(e, t) * (l + 0.09 * Math.exp(-((e - u) ** 2 + (t - d) ** 2) / 0.6)),
      m = new C(a, c, 60, 30).rotateX(-Math.PI / 2),
      h = m.attributes.position;
    for (let e = 0; e < h.count; e++) h.setY(e, p(h.getX(e), h.getZ(e)));
    (m.computeVertexNormals(), Me(m, 1), Nr(i, m, e, !1));
    let g = H(Se(e.color.getHex(), 0.7), 0.8, 0, { side: Tr });
    for (let e of [-1, 1])
      (V(i, a, 0.008, 0.05, g, 0, 0.072, e * (c / 2 - 0.02)),
        V(i, 0.05, 0.008, c, g, e * (a / 2 - 0.02), 0.072, 0));
    let _ = [];
    for (let e = -a / 2 + 0.3; e < a / 2 - 0.2; e += r.range(1.1, 1.4))
      _.push(e);
    pi(
      i,
      p,
      (e, t) => Math.abs(e) < a / 2 && Math.abs(t) < c / 2,
      _,
      c / 2 + 0.1,
      g,
    );
    let v = p(u, d) + r.range(0.035, 0.05),
      y = Gr(i, p, u, d, v),
      b = Math.max(...y.map(([e, t]) => Math.hypot(e - u, t - d)));
    (Ur(
      K(i, { w: a - 0.1, d: c - 0.1 }, { count: r.int(170, 320), seed: t + 5 }),
      (e, t) =>
        (Math.hypot(e - u, t - d) < b ? Math.max(p(e, t), v) : p(e, t)) + 0.012,
    ),
      K(
        i,
        {
          w: o + 2 * O,
          d: s + 2 * te,
          inside: (e, t) => Math.abs(e) > a / 2 || Math.abs(t) > c / 2,
        },
        { count: r.int(80, 160), seed: t + 6, y: 0.045, clump: 0.3 },
      ));
  }
  return R(i, {
    sunk: !0,
    hole: [
      [-o / 2, -s / 2],
      [o / 2, -s / 2],
      [o / 2, s / 2],
      [-o / 2, s / 2],
    ],
    pool: { w: o, d: s, deep: u, water: -0.14 },
    deck: [o + 2 * O, s + 2 * te],
  });
}
