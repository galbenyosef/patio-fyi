// assets__bascule-view-BJhdmaMb 02 — math
// Lines 151-1124 of readable/assets__bascule-view-BJhdmaMb.pretty.js (statement-aligned).
function xe({
  tug: t = !0,
  brace: c = null,
  bowsprit: l = !0,
  lights: u = !0,
  dismast: f = null,
  breach: p = null,
} = {}) {
  let m = (e) => !!p && e >= p[0] && e <= p[1],
    h = u ? fe : 2896440,
    _ = new S();
  _.name = `tall-ship`;
  let x = [],
    E = (e) => (x.push(e), e),
    O = [],
    A = [],
    te = [],
    j = [],
    M = [],
    re = [],
    N = { parts: [], cloth: [], lines: [] },
    ie = O,
    ae = A,
    oe = j,
    L = (e) => {
      let t = e && f != null;
      ((ie = t ? N.parts : O), (ae = t ? N.cloth : A), (oe = t ? N.lines : j));
    },
    R = (e, t, n, r, a, o, s, c = ie) => {
      let l = new i(Math.abs(r - e), Math.abs(a - t), Math.abs(o - n));
      (l.translate((e + r) / 2, (t + a) / 2, (n + o) / 2), c.push(me(l, s)));
    },
    B = (e, t, n, r, i, a = 8, o = ie) => {
      let c = new s(...e),
        l = new s(...t),
        u = ye.subVectors(l, c),
        d = u.length(),
        f = new k(r, n, d, a);
      (be.setFromUnitVectors(ve, u.normalize()),
        f.applyQuaternion(be),
        f.translate((c.x + l.x) / 2, (c.y + l.y) / 2, (c.z + l.z) / 2),
        o.push(me(f, i)));
    },
    se = (e, t, r, i, a) => {
      let o = new n(i, 10, 8);
      (o.translate(e, t, r), ie.push(me(o, a)));
    },
    H = (e, t) => oe.push(...e, ...t),
    ce = (e) => {
      let t = F(e),
        n = m(e) ? P(e) + 0.12 : V(e),
        r = [
          t,
          t + 0.15,
          t + 0.5,
          t + 1,
          t + 1.6,
          t + 2.2,
          -0.02,
          0.28,
          1,
          1.78,
          2.52,
          3.25,
          n,
        ];
      for (let e = 1; e < r.length; e++)
        r[e] = Math.min(n, Math.max(r[e], r[e - 1]));
      return r;
    },
    le = (e) =>
      e < 6 ? W.bottom : e === 6 ? W.boot : e === 9 ? W.band : W.hull;
  {
    let e = [];
    for (let t = -30; t < 36.6; t += 0.75) e.push(t);
    e.push(36.6);
    let t = [],
      n = [],
      r = (e, r, i, a) => {
        (t.push(...e, ...r, ...i), G.set(a));
        for (let e = 0; e < 3; e++) n.push(G.r, G.g, G.b);
      },
      i = (e) => ce(e).map((t) => [I(e, t), t, e]);
    for (let t = 0; t < e.length - 1; t++) {
      let n = i(e[t]),
        a = i(e[t + 1]);
      for (let e of [-1, 1])
        for (let t = 0; t < n.length - 1; t++) {
          let i = [e * n[t][0], n[t][1], n[t][2]],
            o = [e * a[t][0], a[t][1], a[t][2]],
            s = [e * a[t + 1][0], a[t + 1][1], a[t + 1][2]],
            c = [e * n[t + 1][0], n[t + 1][1], n[t + 1][2]],
            l = le(t);
          e > 0
            ? (r(i, o, s, l), r(i, s, c, l))
            : (r(i, s, o, l), r(i, c, s, l));
        }
      (r(
        [-n[0][0], n[0][1], n[0][2]],
        [a[0][0], a[0][1], a[0][2]],
        [-a[0][0], a[0][1], a[0][2]],
        W.bottom,
      ),
        r(
          [-n[0][0], n[0][1], n[0][2]],
          [n[0][0], n[0][1], n[0][2]],
          [a[0][0], a[0][1], a[0][2]],
          W.bottom,
        ));
      let o = e[t],
        s = e[t + 1],
        c = P(o),
        l = P(s),
        u = Math.max(0, I(o, c) - 0.14),
        d = Math.max(0, I(s, l) - 0.14);
      (r([-u, c, o], [d, l, s], [-d, l, s], W.deck),
        r([-u, c, o], [u, c, o], [d, l, s], W.deck));
      let f = V(o),
        p = V(s),
        h = Math.max(0, I(o, f) - 0.13),
        g = Math.max(0, I(s, p) - 0.13),
        _ = I(o, f) + 0.05,
        v = I(s, p) + 0.05;
      if (!m((o + s) / 2))
        for (let e of [-1, 1])
          (r([e * u, c, o], [e * g, p, s], [e * d, l, s], W.bulwark),
            r([e * u, c, o], [e * h, f, o], [e * g, p, s], W.bulwark),
            r(
              [e * h, f + 0.02, o],
              [e * v, p + 0.02, s],
              [e * g, p + 0.02, s],
              W.rail,
            ),
            r(
              [e * h, f + 0.02, o],
              [e * _, f + 0.02, o],
              [e * v, p + 0.02, s],
              W.rail,
            ));
    }
    {
      let e = i(-30),
        t = (e[0][1] + e.at(-1)[1]) / 2;
      for (let n = 0; n < e.length - 1; n++) {
        let i = W.hull;
        (r(
          [0, t, -30],
          [-e[n][0], e[n][1], -30],
          [-e[n + 1][0], e[n + 1][1], -30],
          i,
        ),
          r(
            [0, t, -30],
            [e[n + 1][0], e[n + 1][1], -30],
            [e[n][0], e[n][1], -30],
            i,
          ));
      }
      r(
        [-e.at(-1)[0], e.at(-1)[1], -30],
        [e.at(-1)[0], e.at(-1)[1], -30],
        [0, t, -30],
        W.hull,
      );
      let n = V(-30);
      R(-2.9, n - 0.32, -30.08, 2.9, n - 0.12, -30.02, W.gold);
      for (let e = -2; e <= 2; e++)
        R(
          e * 1.05 - 0.32,
          n - 1.35,
          -30.07,
          e * 1.05 + 0.32,
          n - 0.6,
          -30.03,
          h,
          te,
        );
    }
    let a = new d();
    (a.setAttribute(`position`, new b(t, 3)),
      a.setAttribute(`color`, new b(n, 3)),
      a.computeVertexNormals(),
      O.push(a));
  }
  for (let e = -24; e <= 27; e += 2.55)
    for (let t of [-1, 1]) {
      let n = I(e, 2.15) + 0.03;
      R(t * n - 0.03, 1.93, e - 0.42, t * n + 0.03, 2.37, e + 0.42, W.port);
    }
  for (let e of [-1, 1])
    for (let t = -28; t < 33; t += 2) {
      let n = V(t) - 0.42;
      B(
        [e * (I(t, n) + 0.03), n, t],
        [e * (I(t + 2, V(t + 2) - 0.42) + 0.03), V(t + 2) - 0.42, t + 2],
        0.05,
        0.05,
        W.gold,
        4,
      );
    }
  R(-0.18, -3, -30.9, 0.18, 0.6, -30.05, W.hull);
  for (let e of [0, 0.5])
    B(
      [0, V(36) - 1.9 - e, z(V(36) - 1.9 - e) + 0.05],
      [0, V(36) - 0.3, 36.75],
      0.07,
      0.05,
      W.gold,
      5,
    );
  let U = 27.2;
  for (let e = U; e < 35.5; e += 0.75) {
    let t = Math.min(e + 0.75, 35.6),
      n = Math.max(0.2, I(e, V(e)) - 0.15),
      r = Math.max(0.2, I(t, V(t)) - 0.15);
    R(-Math.min(n, r), V(e) - 0.12, e, Math.min(n, r), V(e), t, W.deck);
  }
  for (let e = -30; e < -21; e += 0.75) {
    let t = I(e, V(e)) - 0.15;
    R(-t, V(e) - 0.12, e, t, V(e), e + 0.75, W.deck);
  }
  {
    let e = I(U, P(U)) - 0.15;
    R(-e, P(U), 27.08, e, V(U), U, W.house);
    for (let e of [-2.6, 2.6])
      R(e - 0.45, P(U) + 0.05, 27.05, e + 0.45, P(U) + 0.85, 27.07, h, te);
  }
  {
    let e = I(-21, P(-21)) - 0.15;
    R(-e, P(-21), -21, e, V(-21), -20.88, W.house);
    for (let e of [-3, -1.2, 1.2, 3])
      R(
        e - 0.32,
        P(-21) + 0.35,
        -20.87,
        e + 0.32,
        P(-21) + 0.85,
        -20.85,
        h,
        te,
      );
  }
  let he = (e) => {
    for (let t = 0; t < e.length - 1; t++) {
      let n = e[t],
        r = e[t + 1];
      B(
        [n[0], n[1] + 0.9, n[2]],
        [r[0], r[1] + 0.9, r[2]],
        0.035,
        0.035,
        W.house,
        4,
      );
    }
    for (let t of e) B(t, [t[0], t[1] + 0.9, t[2]], 0.03, 0.03, W.house, 4);
  };
  for (let e of [-1, 1]) {
    let t = [],
      n = [];
    for (let n = U; n <= 35; n += 1.2)
      t.push([e * (I(n, V(n)) - 0.2), V(n), n]);
    for (let t = -29.6; t <= -21; t += 1.2)
      n.push([e * (I(t, V(t)) - 0.2), V(t), t]);
    (he(t), he(n));
  }
  he([
    [-I(-21, V(-21)) + 0.2, V(-21), -20.95],
    [I(-21, V(-21)) - 0.2, V(-21), -20.95],
  ]);
  {
    let e = P(4),
      t = 2.3;
    (R(-3.4, e, -1.5, 3.4, e + t, 9.5, W.house),
      R(-3.7, e + t, -1.8, 3.7, e + t + 0.14, 9.8, W.teak));
    for (let t of [-1, 1])
      for (let n = -0.6; n < 9; n += 1.6)
        R(
          t * 3.41 - 0.02,
          e + 1.1,
          n - 0.25,
          t * 3.41 + 0.02,
          e + 1.6,
          n + 0.25,
          h,
          te,
        );
    for (let t of [-1.52, 9.52])
      for (let n of [-1.6, 1.6])
        R(n - 0.35, e + 0.9, t - 0.02, n + 0.35, e + 1.6, t + 0.02, h, te);
    he([
      [-3.6, e + t + 0.14, -1.7],
      [-3.6, e + t + 0.14, 9.7],
      [3.6, e + t + 0.14, 9.7],
      [3.6, e + t + 0.14, -1.7],
    ]);
    for (let r of [-1, 1]) {
      let i = new n(1, 14, 8, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2);
      (i.scale(1.05, 0.75, 3.6),
        i.translate(r * 2.2, e + t + 1.05, 4),
        O.push(me(i, W.boat)),
        R(
          r * 2.2 - 1.06,
          e + t + 0.98,
          0.4,
          r * 2.2 + 1.06,
          e + t + 1.08,
          7.6,
          W.teak,
        ));
      for (let n of [1.5, 6.5])
        R(
          r * 2.2 - 0.8,
          e + t + 0.14,
          n - 0.1,
          r * 2.2 + 0.8,
          e + t + 0.75,
          n + 0.1,
          W.iron,
        );
    }
  }
  {
    let e = V(-25);
    (R(-1.6, e, -27, 1.6, e + 1.9, -23.4, W.house),
      R(-1.8, e + 1.9, -27.2, 1.8, e + 2.02, -23.2, W.teak));
    for (let t of [-0.8, 0.8])
      R(t - 0.3, e + 0.9, -23.38, t + 0.3, e + 1.4, -23.36, h, te);
    let t = new a(0.75, 0.06, 6, 18);
    (t.translate(0, e + 1.25, -28.3),
      O.push(me(t, W.rail)),
      B([0, e, -28.3], [0, e + 0.6, -28.3], 0.12, 0.12, W.rail, 6),
      B([0, e, -21.9], [0, e + 1.1, -21.9], 0.18, 0.24, W.gold, 8));
  }
  for (let [e, t] of [
    [16, 3.4],
    [-11, 3],
    [-16.5, 2.4],
  ]) {
    let n = P(e);
    (R(-1.6, n, e - t / 2, 1.6, n + 0.75, e + t / 2, W.hatch),
      R(
        -1.7,
        n + 0.75,
        e - t / 2 - 0.1,
        1.7,
        n + 0.85,
        e + t / 2 + 0.1,
        W.teak,
      ));
  }
  for (let e of [13, -8.5])
    B([0, P(e), e], [0, P(e) + 0.8, e], 0.42, 0.36, W.iron, 10);
  for (let [e, t] of [
    [-2.6, 13.8],
    [2.6, 13.8],
    [-2.6, -13.5],
    [2.6, -13.5],
  ]) {
    let n = P(t);
    (B([e, n, t], [e, n + 1.7, t], 0.18, 0.18, W.house, 8),
      se(e, n + 1.9, t + 0.08, 0.38, W.house));
  }
  B([1.6, P(10.5), 10.5], [1.6, P(10.5) + 3.6, 10.5], 0.16, 0.16, W.iron, 8);
  let xe = [0, V(34) - 0.2, 33.6],
    K = [0, V(34) + 2.6, 45.4],
    q = l ? [0, V(34) + 3.5, de.bow] : [0, V(36) + 0.6, 36.4];
  if (l) {
    (B(xe, K, 0.46, 0.3, W.mast, 10),
      B([0, K[1] - 0.35, 42.2], q, 0.2, 0.12, W.mast, 8),
      R(-0.32, K[1] - 0.3, 45.2, 0.32, K[1] + 0.3, 45.7, W.yard));
    let e = [0, K[1] - 2.4, 44.8];
    (B([0, K[1] - 0.2, 44.9], e, 0.08, 0.07, W.yard, 6),
      H(q, e),
      H(e, [0, 0.8, 36.1]),
      H(K, [0, 0.3, 35.4]));
    for (let e of [-1, 1]) H(K, [e * 2.4, V(33) - 0.4, 33]);
  } else {
    let e = [0, V(34) + 0.55, 37.6];
    (B(xe, e, 0.46, 0.42, W.mast, 10),
      R(
        -0.36,
        e[1] - 0.36,
        e[2] - 0.1,
        0.36,
        e[1] + 0.36,
        e[2] + 0.12,
        12168074,
      ));
  }
  let Se = [
      [0.33, 17.4],
      [0.49, 15.8],
      [0.6, 14.4],
      [0.715, 12.1],
      [0.805, 10.6],
      [0.89, 8.5],
    ],
    J = [];
  for (let [e, t] of ue.entries()) {
    let n = P(t.z),
      r = t.top - n,
      i = n + 0.46 * r,
      a = n + 0.75 * r,
      o = t.z,
      s = c == null ? (e === 0 ? 0.2 : e === 1 ? 0.17 : 0.15) : c - 0.03 * e,
      l = e === 0 && f != null ? f : null;
    if (l != null) {
      let e = 0.44 + ((0.36 - 0.44) * (l - n)) / (i + 1.3 - n);
      (B([0, n, o], [0, l, o], 0.44, e, W.mast, 12),
        L(!0),
        B([0, l, o], [0, i + 1.3, o], e, 0.36, W.mast, 12));
    } else B([0, n, o], [0, i + 1.3, o], 0.44, 0.36, W.mast, 12);
    (B([0, i - 1, o + 0.42], [0, a + 0.9, o + 0.42], 0.31, 0.24, W.mast, 10),
      B([0, a - 0.7, o + 0.62], [0, t.top, o + 0.62], 0.2, 0.1, W.mast, 8),
      se(0, t.top + 0.12, o + 0.62, 0.2, W.gold),
      R(-1.75, i - 0.12, o - 1, 1.75, i + 0.06, o + 1.35, W.teak),
      R(-1.25, a - 0.08, o + 0.12, 1.25, a + 0.06, o + 0.7, W.yard),
      J.push({ z: o, zt: o + 0.62, d: n, H: r, y1: i, y2: a, top: t.top }));
    for (let e of [-1, 1]) {
      let n = [];
      for (let t = 0; t < 5; t++) {
        let r = o - 1.8 + t * 0.85,
          a = V(r) - 0.3,
          s = e * (I(r, a) + 0.18);
        (n.push([
          [e * 0.4, i, o - 0.2 + t * 0.1],
          [s, a, r],
        ]),
          H(...n[t]));
      }
      for (let e = V(o) + 0.5; e < i - 0.6; e += 0.45) {
        let t = n.map(([t, n]) => {
          let r = (e - n[1]) / (t[1] - n[1]);
          return [n[0] + (t[0] - n[0]) * r, e, n[2] + (t[2] - n[2]) * r];
        });
        for (let e = 0; e < t.length - 1; e++) H(t[e], t[e + 1]);
      }
      for (let n = 0; n < 3; n++)
        (H([e * 0.3, a, o + 0.42], [e * 1.65, i + 0.06, o - 0.6 + n * 0.6]),
          H([e * 0.2, t.top - 1.2, o + 0.62], [e * 1.2, a + 0.06, o + 0.4]));
      (H(
        [e * 0.3, a + 0.5, o + 0.42],
        [e * (I(o - 5.5, V(o - 5.5)) + 0.1), V(o - 5.5), o - 5.5],
      ),
        H(
          [e * 0.2, t.top - 0.6, o + 0.62],
          [e * (I(o - 7, V(o - 7)) + 0.1), V(o - 7), o - 7],
        ));
    }
    if (!t.sq) {
      L(!1);
      continue;
    }
    let u = Se.map(([e, i]) => [n + e * r, i * t.k]),
      d = (e, t, n) => {
        let r = Math.cos(s),
          i = Math.sin(s);
        return [e * r + n * i, t, o + 0.7 - e * i + n * r];
      };
    for (let [n, r] of u) {
      let i = d(-r / 2, n, 0),
        a = d(r / 2, n, 0);
      B(i, a, 0.11, 0.11, W.yard, 6);
      let s = d(0, n, 0);
      (B(
        [s[0], s[1], s[2]],
        [i[0] * 0.5 + s[0] * 0.5, n, i[2] * 0.5 + s[2] * 0.5],
        0.2,
        0.13,
        W.yard,
        6,
      ),
        B(
          s,
          [a[0] * 0.5 + s[0] * 0.5, n, a[2] * 0.5 + s[2] * 0.5],
          0.2,
          0.13,
          W.yard,
          6,
        ),
        H(i, [0, n + (t.top - n) * 0.35, o + 0.5]),
        H(a, [0, n + (t.top - n) * 0.35, o + 0.5]));
      let c = ue[e + 1];
      if (c)
        for (let e of [i, a])
          H(e, [e[0] * 0.25, P(c.z) + (c.top - P(c.z)) * 0.35, c.z + 0.3]);
    }
    {
      let [e, t] = u[0];
      B(
        d((-t / 2) * 0.96, e - 0.28, 0.28),
        d((t / 2) * 0.96, e - 0.28, 0.28),
        0.32,
        0.32,
        W.furl,
        8,
      );
    }
    for (let e = 1; e < u.length; e++) {
      let [t, n] = u[e],
        [r, i] = u[e - 1],
        a = (t - r) * 0.3 + 0.35,
        o = [];
      for (let e = 0; e <= 8; e++)
        for (let s = 0; s <= 12; s++) {
          let c = s / 12,
            l = e / 8,
            u = n * 0.95 * (1 - l) + i * 0.95 * l,
            f = 1 - (2 * c - 1) ** 2,
            p = (c - 0.5) * u,
            m = (t - 0.18) * (1 - l) + (r + 0.32 + 0.35 * f) * l;
          o.push(
            d(
              p,
              m,
              a * f * Math.sin(Math.PI * Math.min(1, l * 1.08)) ** 0.85 + 0.25,
            ),
          );
        }
      (ae.push(_e(o, 12, 8, W.canvas, W.canvas2)),
        H(o[104], d((-i / 2) * 0.9, r, 0)),
        H(o[116], d((i / 2) * 0.9, r, 0)));
    }
    L(!1);
  }
  let Ce = (e, t, n = W.canvas, r = W.canvas2) => {
    let [i, a, o, s] = e.length === 4 ? e : [e[0], e[1], e[2], e[2]],
      c = [];
    for (let e = 0; e <= 8; e++)
      for (let n = 0; n <= 8; n++) {
        let r = n / 8,
          l = e / 8,
          u = [0, 1, 2].map(
            (e) =>
              (i[e] * (1 - r) + a[e] * r) * (1 - l) +
              (s[e] * (1 - r) + o[e] * r) * l,
          );
        ((u[0] += t * Math.sin(Math.PI * r) * Math.sin(Math.PI * l)),
          c.push(u));
      }
    ae.push(_e(c, 8, 8, n, r));
  };
  {
    let e = J[3],
      t = e.z,
      n = e.d + 2.4,
      r = e.d + 0.62 * e.H,
      i = [0, n + 0.6, t - 11.8],
      a = [0, r + 4.6, t - 8.2];
    (B([0, n, t - 0.4], i, 0.17, 0.13, W.mast, 8),
      B([0, r, t - 0.4], a, 0.15, 0.11, W.mast, 8),
      Ce(
        [
          [0, r - 0.1, t - 0.5],
          a,
          [0, n + 0.75, t - 11.4],
          [0, n + 0.25, t - 0.5],
        ],
        0.7,
      ),
      Ce([[0, e.top - 0.8, t + 0.5], a, [0, r + 0.3, t - 0.2]], 0.35),
      H(i, [0, V(-29), -29.4]),
      H(a, [0, e.top, t + 0.6]),
      (J.peak = a));
  }
  for (let e = 1; e < 4; e++) {
    L(e === 1);
    let t = J[e],
      n = J[e - 1],
      r = [0, t.y2 + (e === 3 ? -1 : 0.4), t.z + 0.42],
      i = [0, n.y1 + 1.2, n.z + 0.5];
    H(r, i);
    let a = (e) => r.map((t, n) => t + (i[n] - t) * e);
    (Ce([a(0.12), a(0.92), [0, a(0.92)[1] + 0.3, t.z + 1.2]], 0.45),
      H([0, t.top - 0.4, t.zt], [0, n.y2 + 0.6, n.zt]));
  }
  if ((L(!0), l)) {
    let e = J[0],
      t = [
        [
          [0, e.y2 + 0.3, e.z + 0.42],
          [0, K[1] + 0.1, 44.6],
        ],
        [
          [0, e.y2 + 0.7, e.z + 0.42],
          [0, K[1] + 0.5, 47.2],
        ],
        [
          [0, e.top - 1.6, e.zt],
          [0, q[1] - 0.3, 49.8],
        ],
        [
          [0, e.top - 0.6, e.zt],
          [0, q[1], 51.3],
        ],
      ];
    for (let [n, [r, i]] of t.entries()) {
      H(r, i);
      let t = (e) => r.map((t, n) => t + (i[n] - t) * e),
        a = t(0.95),
        o = t(0.34 + n * 0.05),
        s = [0, a[1] + 1.1 + n * 0.8, e.z + 10.5 + n * 1.6];
      (Ce([o, a, s], 0.9), H(s, [0, V(e.z + 6) + 0.2, e.z + 6]));
    }
  } else {
    let e = J[0];
    (H([0, e.y2 + 0.3, e.z + 0.42], [0, V(36) + 0.3, 36.3]),
      H([0, e.top - 0.6, e.zt], [0, V(36) + 0.5, 36.4]));
  }
  L(!1);
  {
    let e = [
      q,
      ...J.map((e) => [0, e.top + 0.1, e.zt]),
      [0, V(-30) + 0.6, -30.4],
    ];
    for (let t = 0; t < e.length - 1; t++) {
      L(t < 2);
      let n = e[t],
        r = e[t + 1],
        i = Math.hypot(r[1] - n[1], r[2] - n[2]),
        a = Math.floor(i / 1.25);
      H(n, r);
      for (let e = 1; e < a; e++) {
        let o = e / a,
          s =
            n[1] + (r[1] - n[1]) * o - 0.04 * Math.sin(Math.PI * o) * i * 0.15,
          c = n[2] + (r[2] - n[2]) * o,
          [l, d] = pe[(t * 7 + e * 3) % pe.length];
        for (let [e, t] of [
          [0, l],
          [1, d],
        ]) {
          let n = c - 0.28 + e * 0.28,
            r = new D(0.28, 0.62);
          (r.rotateY(Math.PI / 2),
            r.translate(0, s - 0.36, n + 0.14),
            ae.push(me(r, t)));
        }
        e % 2 == 0 && u && !(t < 2 && f != null) && re.push(0, s + 0.08, c);
      }
    }
    L(!1);
  }
  let we = 19.5,
    Te = V(we) + 1.1,
    Ee = I(we, V(we)) + 0.25;
  if (
    (u &&
      M.push(
        [Ee, Te, we, 16722458],
        [-Ee, Te, we, 2817882],
        [0, J[0].y1 + 2.2, J[0].z + 0.6, 16773848],
        [0, V(-30) + 0.9, -30.4, 16773848],
      ),
    u)
  )
    for (let e of [-26, -14, -2, 10, 22, 31])
      M.push([0, P(e) + 2.8, e, 16764810]);
  let Y = t ? { z: 92, len: 22 } : null;
  if (Y) {
    let e = Y.z - 11,
      t = Y.z + 11,
      n = 3.4,
      r = (e) => 2.4 + 0.6 * Math.max(0, (e - Y.z) / 11) ** 2,
      i = (e, t) => {
        let r = (e - Y.z) / 11;
        return (
          (r > 0.25
            ? n * Math.sqrt(Math.max(0, 1 - ((r - 0.25) / 0.75) ** 2))
            : r < -0.8
              ? n * (1 - ((-0.8 - r) / 0.2) ** 2 * 0.35)
              : n) * (t < 0 ? 0.82 + (0.18 * (t + 1.6)) / 1.6 : 1)
        );
      },
      o = [],
      s = [],
      c = (e, t, n, r) => {
        (o.push(...e, ...t, ...n), G.set(r));
        for (let e = 0; e < 3; e++) s.push(G.r, G.g, G.b);
      },
      l = (e) => [-1.6, -0.6, 0, 0.25, 1.4, r(e)];
    for (let n = e; n < t - 0.01; n += 0.5) {
      let e = l(n),
        t = l(n + 0.5);
      for (let r of [-1, 1])
        for (let a = 0; a < e.length - 1; a++) {
          let o =
              a < 2 ? W.bottom : a === 2 ? W.boot : a === 3 ? 14209730 : W.hull,
            s = [r * i(n, e[a]), e[a], n],
            l = [r * i(n + 0.5, t[a]), t[a], n + 0.5],
            u = [r * i(n + 0.5, t[a + 1]), t[a + 1], n + 0.5],
            d = [r * i(n, e[a + 1]), e[a + 1], n];
          (c(s, l, u, o), c(s, u, d, o));
        }
      let a = r(n) - 0.9,
        o = r(n + 0.5) - 0.9,
        s = i(n, a) - 0.15,
        u = i(n + 0.5, o) - 0.15;
      (c([-s, a, n], [u, o, n + 0.5], [-u, o, n + 0.5], 7039590),
        c([-s, a, n], [s, a, n], [u, o, n + 0.5], 7039590));
    }
    {
      let t = l(e);
      for (let n = 0; n < t.length - 1; n++) {
        let r = i(e, t[n]),
          a = i(e, t[n + 1]);
        (c([-r, t[n], e], [r, t[n], e], [a, t[n + 1], e], W.hull),
          c([-r, t[n], e], [a, t[n + 1], e], [-a, t[n + 1], e], W.hull));
      }
    }
    let u = new d();
    (u.setAttribute(`position`, new b(o, 3)),
      u.setAttribute(`color`, new b(s, 3)),
      u.computeVertexNormals(),
      O.push(u));
    let f = 1.5;
    (R(-2.3, f, Y.z - 2.5, 2.3, 3.7, Y.z + 4.5, 15328990),
      R(-1.9, 3.7, Y.z + 0.6, 1.9, 5.7, Y.z + 4.2, 15328990),
      R(-2.1, 5.7, Y.z + 0.4, 2.1, 5.9, Y.z + 4.4, W.hull));
    for (let e of [-1, 1]) {
      for (let t = Y.z + 1; t < Y.z + 4; t += 0.9)
        R(e * 1.91 - 0.02, 4.4, t, e * 1.91 + 0.02, 5.2, t + 0.6, h, te);
      for (let t = Y.z - 2; t < Y.z + 4; t += 1.3)
        R(e * 2.31 - 0.02, 2.5, t, e * 2.31 + 0.02, 2.9, t + 0.4, h, te);
    }
    (R(-1.6, 4.4, Y.z + 4.21, 1.6, 5.2, Y.z + 4.25, h, te),
      B([0, 3.7, Y.z - 1], [0, 7.1, Y.z - 1.3], 0.55, 0.5, W.hull, 12),
      B([0, 5.9, Y.z - 1.25], [0, 6.5, Y.z - 1.27], 0.57, 0.57, 11740714, 12),
      B([0, 5.9, Y.z + 2.6], [0, 9.1, Y.z + 2.6], 0.08, 0.06, W.iron, 6),
      R(-0.7, 8.1, Y.z + 2.55, 0.7, 8.18, Y.z + 2.65, W.iron),
      B([0, f, e + 2], [0, 2.9, e + 2], 0.22, 0.22, W.iron, 8));
    for (let n of [-1, 1])
      for (let r = e + 2; r < t - 3; r += 1.6) {
        let e = i(r, 1) + 0.22;
        B([n * e, 0.55, r], [n * e, 0.55, r + 0.01], 0.28, 0.28, 1447446, 8);
        let t = new a(0.3, 0.13, 6, 10);
        (t.rotateY(Math.PI / 2),
          t.translate(n * e, 0.65, r),
          O.push(me(t, 1447446)));
      }
    for (let e of [8.9, 8.45, 8]) M.push([0, e, Y.z + 2.75, 16773848]);
    M.push(
      [2.35, 6, Y.z + 3.8, 16722458],
      [-2.35, 6, Y.z + 3.8, 2817882],
      [0, 2.9, e - 0.1, 16773848],
    );
    let p = [0, 2.8, e + 2],
      m = [0, V(36) + 0.2, 36.4];
    for (let e = 0; e < 16; e++) {
      let t = e / 16,
        n = (e + 1) / 16,
        r = (e) => [
          0,
          p[1] + (m[1] - p[1]) * e - 3 * Math.sin(Math.PI * e),
          p[2] + (m[2] - p[2]) * e,
        ];
      H(r(t), r(n));
    }
  }
  let De = E(
      (() => {
        let e = document.createElement(`canvas`);
        ((e.width = 64), (e.height = 256));
        let t = e.getContext(`2d`);
        t.clearRect(0, 0, 64, 256);
        {
          let e = t.createLinearGradient(0, 0, 0, 256);
          (e.addColorStop(0, `rgba(225,236,242,.55)`),
            e.addColorStop(0.5, `rgba(225,236,242,.22)`),
            e.addColorStop(1, `rgba(225,236,242,0)`),
            (t.fillStyle = e),
            t.fillRect(0, 0, 64, 256));
        }
        let n = 7,
          r = () =>
            (n = (Math.imul(n, 1664525) + 1013904223) >>> 0) / 4294967296;
        for (let e = 0; e < 2200; e++) {
          let e = r() * 64,
            n = r() * 256;
          ((t.fillStyle = `rgba(235,242,246,${(1 - n / 256) ** 1.4 * 0.75 * r()})`),
            t.beginPath(),
            t.arc(e, n, 1 + r() * 2.6, 0, Math.PI * 2),
            t.fill());
        }
        let i = new ne(e);
        return ((i.wrapS = i.wrapT = C), (i.colorSpace = v), i);
      })(),
    ),
    Oe = [],
    ke = (e, t, n, r, i, a = 0.06) => {
      let o = new D(n, r);
      (o.rotateX(-Math.PI / 2),
        o.translate(0, 0, -r / 2),
        o.rotateY(i),
        o.translate(e, a, t),
        Oe.push(o));
    };
  for (let e of [-1, 1])
    (ke(e * 0.6, 36.4, 3.2, 18, e * 0.42), ke(e * 5.5, 22, 1.6, 52, 0));
  if ((ke(0, -30, 9, 70, 0, 0.05), Y)) {
    for (let e of [-1, 1]) ke(e * 0.4, Y.z + 11, 1.4, 9, e * 0.5);
    ke(0, Y.z - 11, 5, 14, 0, 0.05);
  }
  let Ae = E(
      new g({
        map: De,
        transparent: !0,
        depthWrite: !1,
        opacity: 0.85,
        fog: !0,
      }),
    ),
    je = new e(E(ee(Oe)), Ae);
  (Oe.forEach((e) => e.dispose()), (je.renderOrder = 1), _.add(je));
  let Me = new e(
    E(ge(O)),
    E(new o({ vertexColors: !0, roughness: 0.62, metalness: 0.08, side: 2 })),
  );
  ((Me.castShadow = !0), (Me.receiveShadow = !0), _.add(Me));
  let Ne = E(ge(A));
  Ne.computeVertexNormals();
  let Pe = new e(
    Ne,
    E(
      new o({
        vertexColors: !0,
        roughness: 0.95,
        side: 2,
        emissive: 2760724,
        emissiveIntensity: 0.6,
      }),
    ),
  );
  ((Pe.castShadow = !0),
    _.add(Pe),
    _.add(new e(E(ge(te)), E(new g({ vertexColors: !0 })))));
  let Fe = E(new r({ color: 1512463 })),
    Ie = E(new d());
  (Ie.setAttribute(`position`, new b(j, 3)), _.add(new T(Ie, Fe)));
  let X = null;
  if (f != null) {
    let t = ue[0].z;
    ((X = new S()), (X.name = `fore-top`), X.position.set(0, f, t), _.add(X));
    let n = E(ge(N.parts));
    n.translate(0, -f, -t);
    let r = new e(n, Me.material);
    if (((r.castShadow = !0), X.add(r), N.cloth.length)) {
      let n = E(ge(N.cloth));
      (n.translate(0, -f, -t), n.computeVertexNormals());
      let r = new e(n, Pe.material);
      ((r.castShadow = !0), X.add(r));
    }
    let i = E(new d());
    (i.setAttribute(`position`, new b(N.lines, 3)),
      i.translate(0, -f, -t),
      X.add(new T(i, Fe)));
  }
  let Z = E(
      (() => {
        let e = document.createElement(`canvas`);
        e.width = e.height = 64;
        let t = e.getContext(`2d`),
          n = t.createRadialGradient(32, 32, 0, 32, 32, 32);
        (n.addColorStop(0, `rgba(255,255,255,1)`),
          n.addColorStop(0.28, `rgba(255,255,255,.5)`),
          n.addColorStop(1, `rgba(255,255,255,0)`),
          (t.fillStyle = n),
          t.fillRect(0, 0, 64, 64));
        let r = new ne(e);
        return ((r.colorSpace = v), r);
      })(),
    ),
    Q = (e, t) => {
      let n = [],
        r = [];
      for (let [t, i, a, o] of e)
        (n.push(t, i, a), G.set(o), r.push(G.r, G.g, G.b));
      let i = E(new d());
      (i.setAttribute(`position`, new b(n, 3)),
        i.setAttribute(`color`, new b(r, 3)));
      let a = new w(
        i,
        E(
          new y({
            map: Z,
            vertexColors: !0,
            size: t,
            sizeAttenuation: !0,
            transparent: !0,
            depthWrite: !1,
            blending: 2,
            fog: !1,
          }),
        ),
      );
      return ((a.frustumCulled = !1), a);
    },
    Le = [];
  for (let e = 0; e < re.length; e += 3)
    Le.push([re[e], re[e + 1], re[e + 2], 16769712]);
  (M.length && _.add(Q(M, 2.4)), Le.length && _.add(Q(Le, 0.8)));
  let Re = E(new o({ vertexColors: !0, roughness: 0.9, side: 2 })),
    ze = E(new D(2.9, 1.8, 10, 4));
  (ze.rotateY(Math.PI / 2), ze.translate(0, -0.9, -1.45));
  {
    let e = ze.attributes.position,
      t = [];
    for (let n = 0; n < e.count; n++) {
      let r = -e.getZ(n) / 2.9,
        i = -e.getY(n) / 1.8;
      (G.set(
        r < 0.3 && i < 0.5
          ? 16052194
          : r > 0.3 && r < 0.42
            ? 14200906
            : 10231588,
      ),
        t.push(G.r, G.g, G.b));
    }
    ze.setAttribute(`color`, new b(t, 3));
  }
  let Be = E(new D(7, 0.5, 16, 1));
  (Be.rotateY(Math.PI / 2), Be.translate(0, -0.25, -3.5));
  {
    let e = Be.attributes.position;
    for (let t = 0; t < e.count; t++)
      e.setY(t, e.getY(t) * (1 + e.getZ(t) / 7.6));
  }
  {
    let e = Be.attributes.position,
      t = [];
    for (let n = 0; n < e.count; n++)
      (G.set(-e.getZ(n) < 2.3 ? 1986480 : 16052194), t.push(G.r, G.g, G.b));
    Be.setAttribute(`color`, new b(t, 3));
  }
  let Ve = [
    [ze, J.peak],
    [Be, [0, J[1].top - 0.2, J[1].zt]],
  ].map(([t, n]) => {
    let r = new e(t, Re);
    return (
      r.position.set(...n),
      _.add(r),
      { g: t, base: t.attributes.position.array.slice() }
    );
  });
  return {
    group: _,
    foam: je,
    foreTop: X,
    update(e) {
      De.offset.y = -e * 0.12;
      for (let t of Ve) {
        let n = t.g.attributes.position.array,
          r = t.base;
        for (let t = 0; t < n.length; t += 3) {
          let i = Math.max(0, -r[t + 2]);
          n[t] =
            r[t] +
            Math.sin(e * 4.4 + i * 1.7) * 0.14 * i ** 0.8 +
            Math.sin(e * 2.1 + i * 0.9) * 0.06 * i;
        }
        ((t.g.attributes.position.needsUpdate = !0),
          t.g.computeVertexNormals());
      }
    },
    dispose() {
      for (let e of x) e?.dispose?.();
    },
  };
}
