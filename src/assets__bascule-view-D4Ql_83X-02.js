// assets__bascule-view-D4Ql_83X 02 — math
// Lines 130-1056 of readable/assets__bascule-view-D4Ql_83X.pretty.js (statement-aligned).
function de({ tug: e = !0, brace: t = null } = {}) {
  let r = new ne();
  r.name = `tall-ship`;
  let a = [],
    o = (e) => (a.push(e), e),
    s = [],
    u = [],
    f = [],
    p = [],
    _ = [],
    y = [],
    b = (e, t, n, r, a, o, c, l = s) => {
      let u = new i(Math.abs(r - e), Math.abs(a - t), Math.abs(o - n));
      (u.translate((e + r) / 2, (t + a) / 2, (n + o) / 2), l.push(N(u, c)));
    },
    S = (e, t, n, r, i, a = 8, o = s) => {
      let l = new T(...e),
        u = new T(...t),
        d = ue.subVectors(u, l),
        f = d.length(),
        p = new c(r, n, f, a);
      (L.setFromUnitVectors(I, d.normalize()),
        p.applyQuaternion(L),
        p.translate((l.x + u.x) / 2, (l.y + u.y) / 2, (l.z + u.z) / 2),
        o.push(N(p, i)));
    },
    te = (e, t, n, r, i) => {
      let a = new se(r, 10, 8);
      (a.translate(e, t, n), s.push(N(a, i)));
    },
    C = (e, t) => p.push(...e, ...t),
    D = (e) => 3.9 + 0.5 * ((e - 2) / 34) ** 2 * (e > 2 ? 1.6 : 1),
    O = (e) => D(e) - 1.05,
    le = (e) =>
      e < -16 ? -3.4 + Math.min(1, (-16 - e) / 14) ** 1.6 * 3.3 : -3.4,
    de = (e) => 33 + 3.4 * Math.min(1, Math.max(0, (e + 3.4) / 8.2)),
    fe = (e, t) => {
      if (e > 10) {
        let n = de(t) - 10,
          r = (e - 10) / n;
        return r >= 1 ? 0 : 5.2 * Math.sqrt(1 - r * r) ** (t < 0 ? 1.25 : 1);
      }
      if (e < -12) {
        let t = Math.min(1, (-12 - e) / 18);
        return 5.2 * (1 - 0.42 * t * t);
      }
      return 5.2;
    },
    R = (e, t) => {
      let n = t - le(e),
        r = Math.min(1, Math.max(0, (-14 - e) / 16)),
        i =
          n >= 2.2
            ? 1
            : 0.08 + 0.92 * Math.sqrt(Math.max(0, 1 - ((2.2 - n) / 2.2) ** 2));
      return (
        (i **= 1 + r * 1.6),
        t > 2 && (i *= 1 - 0.022 * (t - 2)),
        fe(e, t) * i
      );
    },
    z = (e) => {
      let t = le(e),
        n = D(e),
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
    B = (e) =>
      e < 6 ? k.bottom : e === 6 ? k.boot : e === 9 ? k.band : k.hull;
  {
    let e = [];
    for (let t = -30; t < 36.6; t += 0.75) e.push(t);
    e.push(36.6);
    let t = [],
      n = [],
      r = (e, r, i, a) => {
        (t.push(...e, ...r, ...i), M.set(a));
        for (let e = 0; e < 3; e++) n.push(M.r, M.g, M.b);
      },
      i = (e) => z(e).map((t) => [R(e, t), t, e]);
    for (let t = 0; t < e.length - 1; t++) {
      let n = i(e[t]),
        a = i(e[t + 1]);
      for (let e of [-1, 1])
        for (let t = 0; t < n.length - 1; t++) {
          let i = [e * n[t][0], n[t][1], n[t][2]],
            o = [e * a[t][0], a[t][1], a[t][2]],
            s = [e * a[t + 1][0], a[t + 1][1], a[t + 1][2]],
            c = [e * n[t + 1][0], n[t + 1][1], n[t + 1][2]],
            l = B(t);
          e > 0
            ? (r(i, o, s, l), r(i, s, c, l))
            : (r(i, s, o, l), r(i, c, s, l));
        }
      (r(
        [-n[0][0], n[0][1], n[0][2]],
        [a[0][0], a[0][1], a[0][2]],
        [-a[0][0], a[0][1], a[0][2]],
        k.bottom,
      ),
        r(
          [-n[0][0], n[0][1], n[0][2]],
          [n[0][0], n[0][1], n[0][2]],
          [a[0][0], a[0][1], a[0][2]],
          k.bottom,
        ));
      let o = e[t],
        s = e[t + 1],
        c = O(o),
        l = O(s),
        u = Math.max(0, R(o, c) - 0.14),
        d = Math.max(0, R(s, l) - 0.14);
      (r([-u, c, o], [d, l, s], [-d, l, s], k.deck),
        r([-u, c, o], [u, c, o], [d, l, s], k.deck));
      let f = D(o),
        p = D(s),
        m = Math.max(0, R(o, f) - 0.13),
        h = Math.max(0, R(s, p) - 0.13),
        g = R(o, f) + 0.05,
        _ = R(s, p) + 0.05;
      for (let e of [-1, 1])
        (r([e * u, c, o], [e * h, p, s], [e * d, l, s], k.bulwark),
          r([e * u, c, o], [e * m, f, o], [e * h, p, s], k.bulwark),
          r(
            [e * m, f + 0.02, o],
            [e * _, p + 0.02, s],
            [e * h, p + 0.02, s],
            k.rail,
          ),
          r(
            [e * m, f + 0.02, o],
            [e * g, f + 0.02, o],
            [e * _, p + 0.02, s],
            k.rail,
          ));
    }
    {
      let e = i(-30),
        t = (e[0][1] + e.at(-1)[1]) / 2;
      for (let n = 0; n < e.length - 1; n++) {
        let i = k.hull;
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
        k.hull,
      );
      let n = D(-30);
      b(-2.9, n - 0.32, -30.08, 2.9, n - 0.12, -30.02, k.gold);
      for (let e = -2; e <= 2; e++)
        b(
          e * 1.05 - 0.32,
          n - 1.35,
          -30.07,
          e * 1.05 + 0.32,
          n - 0.6,
          -30.03,
          A,
          f,
        );
    }
    let a = new l();
    (a.setAttribute(`position`, new w(t, 3)),
      a.setAttribute(`color`, new w(n, 3)),
      a.computeVertexNormals(),
      s.push(a));
  }
  for (let e = -24; e <= 27; e += 2.55)
    for (let t of [-1, 1]) {
      let n = R(e, 2.15) + 0.03;
      b(t * n - 0.03, 1.93, e - 0.42, t * n + 0.03, 2.37, e + 0.42, k.port);
    }
  for (let e of [-1, 1])
    for (let t = -28; t < 33; t += 2) {
      let n = D(t) - 0.42;
      S(
        [e * (R(t, n) + 0.03), n, t],
        [e * (R(t + 2, D(t + 2) - 0.42) + 0.03), D(t + 2) - 0.42, t + 2],
        0.05,
        0.05,
        k.gold,
        4,
      );
    }
  b(-0.18, -3, -30.9, 0.18, 0.6, -30.05, k.hull);
  for (let e of [0, 0.5])
    S(
      [0, D(36) - 1.9 - e, de(D(36) - 1.9 - e) + 0.05],
      [0, D(36) - 0.3, 36.75],
      0.07,
      0.05,
      k.gold,
      5,
    );
  let V = 27.2;
  for (let e = V; e < 35.5; e += 0.75) {
    let t = Math.min(e + 0.75, 35.6),
      n = Math.max(0.2, R(e, D(e)) - 0.15),
      r = Math.max(0.2, R(t, D(t)) - 0.15);
    b(-Math.min(n, r), D(e) - 0.12, e, Math.min(n, r), D(e), t, k.deck);
  }
  for (let e = -30; e < -21; e += 0.75) {
    let t = R(e, D(e)) - 0.15;
    b(-t, D(e) - 0.12, e, t, D(e), e + 0.75, k.deck);
  }
  {
    let e = R(V, O(V)) - 0.15;
    b(-e, O(V), 27.08, e, D(V), V, k.house);
    for (let e of [-2.6, 2.6])
      b(e - 0.45, O(V) + 0.05, 27.05, e + 0.45, O(V) + 0.85, 27.07, A, f);
  }
  {
    let e = R(-21, O(-21)) - 0.15;
    b(-e, O(-21), -21, e, D(-21), -20.88, k.house);
    for (let e of [-3, -1.2, 1.2, 3])
      b(e - 0.32, O(-21) + 0.35, -20.87, e + 0.32, O(-21) + 0.85, -20.85, A, f);
  }
  let pe = (e) => {
    for (let t = 0; t < e.length - 1; t++) {
      let n = e[t],
        r = e[t + 1];
      S(
        [n[0], n[1] + 0.9, n[2]],
        [r[0], r[1] + 0.9, r[2]],
        0.035,
        0.035,
        k.house,
        4,
      );
    }
    for (let t of e) S(t, [t[0], t[1] + 0.9, t[2]], 0.03, 0.03, k.house, 4);
  };
  for (let e of [-1, 1]) {
    let t = [],
      n = [];
    for (let n = V; n <= 35; n += 1.2)
      t.push([e * (R(n, D(n)) - 0.2), D(n), n]);
    for (let t = -29.6; t <= -21; t += 1.2)
      n.push([e * (R(t, D(t)) - 0.2), D(t), t]);
    (pe(t), pe(n));
  }
  pe([
    [-R(-21, D(-21)) + 0.2, D(-21), -20.95],
    [R(-21, D(-21)) - 0.2, D(-21), -20.95],
  ]);
  {
    let e = O(4),
      t = 2.3;
    (b(-3.4, e, -1.5, 3.4, e + t, 9.5, k.house),
      b(-3.7, e + t, -1.8, 3.7, e + t + 0.14, 9.8, k.teak));
    for (let t of [-1, 1])
      for (let n = -0.6; n < 9; n += 1.6)
        b(
          t * 3.41 - 0.02,
          e + 1.1,
          n - 0.25,
          t * 3.41 + 0.02,
          e + 1.6,
          n + 0.25,
          A,
          f,
        );
    for (let t of [-1.52, 9.52])
      for (let n of [-1.6, 1.6])
        b(n - 0.35, e + 0.9, t - 0.02, n + 0.35, e + 1.6, t + 0.02, A, f);
    pe([
      [-3.6, e + t + 0.14, -1.7],
      [-3.6, e + t + 0.14, 9.7],
      [3.6, e + t + 0.14, 9.7],
      [3.6, e + t + 0.14, -1.7],
    ]);
    for (let n of [-1, 1]) {
      let r = new se(1, 14, 8, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2);
      (r.scale(1.05, 0.75, 3.6),
        r.translate(n * 2.2, e + t + 1.05, 4),
        s.push(N(r, k.boat)),
        b(
          n * 2.2 - 1.06,
          e + t + 0.98,
          0.4,
          n * 2.2 + 1.06,
          e + t + 1.08,
          7.6,
          k.teak,
        ));
      for (let r of [1.5, 6.5])
        b(
          n * 2.2 - 0.8,
          e + t + 0.14,
          r - 0.1,
          n * 2.2 + 0.8,
          e + t + 0.75,
          r + 0.1,
          k.iron,
        );
    }
  }
  {
    let e = D(-25);
    (b(-1.6, e, -27, 1.6, e + 1.9, -23.4, k.house),
      b(-1.8, e + 1.9, -27.2, 1.8, e + 2.02, -23.2, k.teak));
    for (let t of [-0.8, 0.8])
      b(t - 0.3, e + 0.9, -23.38, t + 0.3, e + 1.4, -23.36, A, f);
    let t = new d(0.75, 0.06, 6, 18);
    (t.translate(0, e + 1.25, -28.3),
      s.push(N(t, k.rail)),
      S([0, e, -28.3], [0, e + 0.6, -28.3], 0.12, 0.12, k.rail, 6),
      S([0, e, -21.9], [0, e + 1.1, -21.9], 0.18, 0.24, k.gold, 8));
  }
  for (let [e, t] of [
    [16, 3.4],
    [-11, 3],
    [-16.5, 2.4],
  ]) {
    let n = O(e);
    (b(-1.6, n, e - t / 2, 1.6, n + 0.75, e + t / 2, k.hatch),
      b(
        -1.7,
        n + 0.75,
        e - t / 2 - 0.1,
        1.7,
        n + 0.85,
        e + t / 2 + 0.1,
        k.teak,
      ));
  }
  for (let e of [13, -8.5])
    S([0, O(e), e], [0, O(e) + 0.8, e], 0.42, 0.36, k.iron, 10);
  for (let [e, t] of [
    [-2.6, 13.8],
    [2.6, 13.8],
    [-2.6, -13.5],
    [2.6, -13.5],
  ]) {
    let n = O(t);
    (S([e, n, t], [e, n + 1.7, t], 0.18, 0.18, k.house, 8),
      te(e, n + 1.9, t + 0.08, 0.38, k.house));
  }
  S([1.6, O(10.5), 10.5], [1.6, O(10.5) + 3.6, 10.5], 0.16, 0.16, k.iron, 8);
  let H = [0, D(34) - 0.2, 33.6],
    U = [0, D(34) + 2.6, 45.4],
    me = [0, D(34) + 3.5, ce.bow];
  (S(H, U, 0.46, 0.3, k.mast, 10),
    S([0, U[1] - 0.35, 42.2], me, 0.2, 0.12, k.mast, 8),
    b(-0.32, U[1] - 0.3, 45.2, 0.32, U[1] + 0.3, 45.7, k.yard));
  let he = [0, U[1] - 2.4, 44.8];
  (S([0, U[1] - 0.2, 44.9], he, 0.08, 0.07, k.yard, 6),
    C(me, he),
    C(he, [0, 0.8, 36.1]),
    C(U, [0, 0.3, 35.4]));
  for (let e of [-1, 1]) C(U, [e * 2.4, D(33) - 0.4, 33]);
  let ge = [
      { z: 21.5, top: 26.4, sq: !0, k: 0.95 },
      { z: 8.2, top: 27.6, sq: !0, k: 1 },
      { z: -4.8, top: 27, sq: !0, k: 0.97 },
      { z: -17.6, top: 23.4, sq: !1, k: 0.8 },
    ],
    _e = [
      [0.33, 17.4],
      [0.49, 15.8],
      [0.6, 14.4],
      [0.715, 12.1],
      [0.805, 10.6],
      [0.89, 8.5],
    ],
    W = [];
  for (let [e, n] of ge.entries()) {
    let r = O(n.z),
      i = n.top - r,
      a = r + 0.46 * i,
      o = r + 0.75 * i,
      s = n.z,
      c = t == null ? (e === 0 ? 0.2 : e === 1 ? 0.17 : 0.15) : t - 0.03 * e;
    (S([0, r, s], [0, a + 1.3, s], 0.44, 0.36, k.mast, 12),
      S([0, a - 1, s + 0.42], [0, o + 0.9, s + 0.42], 0.31, 0.24, k.mast, 10),
      S([0, o - 0.7, s + 0.62], [0, n.top, s + 0.62], 0.2, 0.1, k.mast, 8),
      te(0, n.top + 0.12, s + 0.62, 0.2, k.gold),
      b(-1.75, a - 0.12, s - 1, 1.75, a + 0.06, s + 1.35, k.teak),
      b(-1.25, o - 0.08, s + 0.12, 1.25, o + 0.06, s + 0.7, k.yard),
      W.push({ z: s, zt: s + 0.62, d: r, H: i, y1: a, y2: o, top: n.top }));
    for (let e of [-1, 1]) {
      let t = [];
      for (let n = 0; n < 5; n++) {
        let r = s - 1.8 + n * 0.85,
          i = D(r) - 0.3,
          o = e * (R(r, i) + 0.18);
        (t.push([
          [e * 0.4, a, s - 0.2 + n * 0.1],
          [o, i, r],
        ]),
          C(...t[n]));
      }
      for (let e = D(s) + 0.5; e < a - 0.6; e += 0.45) {
        let n = t.map(([t, n]) => {
          let r = (e - n[1]) / (t[1] - n[1]);
          return [n[0] + (t[0] - n[0]) * r, e, n[2] + (t[2] - n[2]) * r];
        });
        for (let e = 0; e < n.length - 1; e++) C(n[e], n[e + 1]);
      }
      for (let t = 0; t < 3; t++)
        (C([e * 0.3, o, s + 0.42], [e * 1.65, a + 0.06, s - 0.6 + t * 0.6]),
          C([e * 0.2, n.top - 1.2, s + 0.62], [e * 1.2, o + 0.06, s + 0.4]));
      (C(
        [e * 0.3, o + 0.5, s + 0.42],
        [e * (R(s - 5.5, D(s - 5.5)) + 0.1), D(s - 5.5), s - 5.5],
      ),
        C(
          [e * 0.2, n.top - 0.6, s + 0.62],
          [e * (R(s - 7, D(s - 7)) + 0.1), D(s - 7), s - 7],
        ));
    }
    if (!n.sq) continue;
    let l = _e.map(([e, t]) => [r + e * i, t * n.k]),
      d = (e, t, n) => {
        let r = Math.cos(c),
          i = Math.sin(c);
        return [e * r + n * i, t, s + 0.7 - e * i + n * r];
      };
    for (let [t, r] of l) {
      let i = d(-r / 2, t, 0),
        a = d(r / 2, t, 0);
      S(i, a, 0.11, 0.11, k.yard, 6);
      let o = d(0, t, 0);
      (S(
        [o[0], o[1], o[2]],
        [i[0] * 0.5 + o[0] * 0.5, t, i[2] * 0.5 + o[2] * 0.5],
        0.2,
        0.13,
        k.yard,
        6,
      ),
        S(
          o,
          [a[0] * 0.5 + o[0] * 0.5, t, a[2] * 0.5 + o[2] * 0.5],
          0.2,
          0.13,
          k.yard,
          6,
        ),
        C(i, [0, t + (n.top - t) * 0.35, s + 0.5]),
        C(a, [0, t + (n.top - t) * 0.35, s + 0.5]));
      let c = ge[e + 1];
      if (c)
        for (let e of [i, a])
          C(e, [e[0] * 0.25, O(c.z) + (c.top - O(c.z)) * 0.35, c.z + 0.3]);
    }
    {
      let [e, t] = l[0];
      S(
        d((-t / 2) * 0.96, e - 0.28, 0.28),
        d((t / 2) * 0.96, e - 0.28, 0.28),
        0.32,
        0.32,
        k.furl,
        8,
      );
    }
    for (let e = 1; e < l.length; e++) {
      let [t, n] = l[e],
        [r, i] = l[e - 1],
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
      (u.push(F(o, 12, 8, k.canvas, k.canvas2)),
        C(o[104], d((-i / 2) * 0.9, r, 0)),
        C(o[116], d((i / 2) * 0.9, r, 0)));
    }
  }
  let ve = (e, t, n = k.canvas, r = k.canvas2) => {
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
    u.push(F(c, 8, 8, n, r));
  };
  {
    let e = W[3],
      t = e.z,
      n = e.d + 2.4,
      r = e.d + 0.62 * e.H,
      i = [0, n + 0.6, t - 11.8],
      a = [0, r + 4.6, t - 8.2];
    (S([0, n, t - 0.4], i, 0.17, 0.13, k.mast, 8),
      S([0, r, t - 0.4], a, 0.15, 0.11, k.mast, 8),
      ve(
        [
          [0, r - 0.1, t - 0.5],
          a,
          [0, n + 0.75, t - 11.4],
          [0, n + 0.25, t - 0.5],
        ],
        0.7,
      ),
      ve([[0, e.top - 0.8, t + 0.5], a, [0, r + 0.3, t - 0.2]], 0.35),
      C(i, [0, D(-29), -29.4]),
      C(a, [0, e.top, t + 0.6]),
      (W.peak = a));
  }
  for (let e = 1; e < 4; e++) {
    let t = W[e],
      n = W[e - 1],
      r = [0, t.y2 + (e === 3 ? -1 : 0.4), t.z + 0.42],
      i = [0, n.y1 + 1.2, n.z + 0.5];
    C(r, i);
    let a = (e) => r.map((t, n) => t + (i[n] - t) * e);
    (ve([a(0.12), a(0.92), [0, a(0.92)[1] + 0.3, t.z + 1.2]], 0.45),
      C([0, t.top - 0.4, t.zt], [0, n.y2 + 0.6, n.zt]));
  }
  {
    let e = W[0],
      t = [
        [
          [0, e.y2 + 0.3, e.z + 0.42],
          [0, U[1] + 0.1, 44.6],
        ],
        [
          [0, e.y2 + 0.7, e.z + 0.42],
          [0, U[1] + 0.5, 47.2],
        ],
        [
          [0, e.top - 1.6, e.zt],
          [0, me[1] - 0.3, 49.8],
        ],
        [
          [0, e.top - 0.6, e.zt],
          [0, me[1], 51.3],
        ],
      ];
    for (let [n, [r, i]] of t.entries()) {
      C(r, i);
      let t = (e) => r.map((t, n) => t + (i[n] - t) * e),
        a = t(0.95),
        o = t(0.34 + n * 0.05),
        s = [0, a[1] + 1.1 + n * 0.8, e.z + 10.5 + n * 1.6];
      (ve([o, a, s], 0.9), C(s, [0, D(e.z + 6) + 0.2, e.z + 6]));
    }
  }
  {
    let e = [
      me,
      ...W.map((e) => [0, e.top + 0.1, e.zt]),
      [0, D(-30) + 0.6, -30.4],
    ];
    for (let t = 0; t < e.length - 1; t++) {
      let n = e[t],
        r = e[t + 1],
        i = Math.hypot(r[1] - n[1], r[2] - n[2]),
        a = Math.floor(i / 1.25);
      C(n, r);
      for (let e = 1; e < a; e++) {
        let o = e / a,
          s =
            n[1] + (r[1] - n[1]) * o - 0.04 * Math.sin(Math.PI * o) * i * 0.15,
          c = n[2] + (r[2] - n[2]) * o,
          [l, d] = j[(t * 7 + e * 3) % j.length];
        for (let [e, t] of [
          [0, l],
          [1, d],
        ]) {
          let n = c - 0.28 + e * 0.28,
            r = new x(0.28, 0.62);
          (r.rotateY(Math.PI / 2),
            r.translate(0, s - 0.36, n + 0.14),
            u.push(N(r, t)));
        }
        e % 2 == 0 && y.push(0, s + 0.08, c);
      }
    }
  }
  let ye = 19.5,
    be = D(ye) + 1.1,
    G = R(ye, D(ye)) + 0.25;
  _.push(
    [G, be, ye, 16722458],
    [-G, be, ye, 2817882],
    [0, W[0].y1 + 2.2, W[0].z + 0.6, 16773848],
    [0, D(-30) + 0.9, -30.4, 16773848],
  );
  for (let e of [-26, -14, -2, 10, 22, 31])
    _.push([0, O(e) + 2.8, e, 16764810]);
  let K = e ? { z: 92, len: 22 } : null;
  if (K) {
    let e = K.z - 11,
      t = K.z + 11,
      n = 3.4,
      r = (e) => 2.4 + 0.6 * Math.max(0, (e - K.z) / 11) ** 2,
      i = (e, t) => {
        let r = (e - K.z) / 11;
        return (
          (r > 0.25
            ? n * Math.sqrt(Math.max(0, 1 - ((r - 0.25) / 0.75) ** 2))
            : r < -0.8
              ? n * (1 - ((-0.8 - r) / 0.2) ** 2 * 0.35)
              : n) * (t < 0 ? 0.82 + (0.18 * (t + 1.6)) / 1.6 : 1)
        );
      },
      a = [],
      o = [],
      c = (e, t, n, r) => {
        (a.push(...e, ...t, ...n), M.set(r));
        for (let e = 0; e < 3; e++) o.push(M.r, M.g, M.b);
      },
      u = (e) => [-1.6, -0.6, 0, 0.25, 1.4, r(e)];
    for (let n = e; n < t - 0.01; n += 0.5) {
      let e = u(n),
        t = u(n + 0.5);
      for (let r of [-1, 1])
        for (let a = 0; a < e.length - 1; a++) {
          let o =
              a < 2 ? k.bottom : a === 2 ? k.boot : a === 3 ? 14209730 : k.hull,
            s = [r * i(n, e[a]), e[a], n],
            l = [r * i(n + 0.5, t[a]), t[a], n + 0.5],
            u = [r * i(n + 0.5, t[a + 1]), t[a + 1], n + 0.5],
            d = [r * i(n, e[a + 1]), e[a + 1], n];
          (c(s, l, u, o), c(s, u, d, o));
        }
      let a = r(n) - 0.9,
        o = r(n + 0.5) - 0.9,
        s = i(n, a) - 0.15,
        l = i(n + 0.5, o) - 0.15;
      (c([-s, a, n], [l, o, n + 0.5], [-l, o, n + 0.5], 7039590),
        c([-s, a, n], [s, a, n], [l, o, n + 0.5], 7039590));
    }
    {
      let t = u(e);
      for (let n = 0; n < t.length - 1; n++) {
        let r = i(e, t[n]),
          a = i(e, t[n + 1]);
        (c([-r, t[n], e], [r, t[n], e], [a, t[n + 1], e], k.hull),
          c([-r, t[n], e], [a, t[n + 1], e], [-a, t[n + 1], e], k.hull));
      }
    }
    let p = new l();
    (p.setAttribute(`position`, new w(a, 3)),
      p.setAttribute(`color`, new w(o, 3)),
      p.computeVertexNormals(),
      s.push(p));
    let m = 1.5;
    (b(-2.3, m, K.z - 2.5, 2.3, 3.7, K.z + 4.5, 15328990),
      b(-1.9, 3.7, K.z + 0.6, 1.9, 5.7, K.z + 4.2, 15328990),
      b(-2.1, 5.7, K.z + 0.4, 2.1, 5.9, K.z + 4.4, k.hull));
    for (let e of [-1, 1]) {
      for (let t = K.z + 1; t < K.z + 4; t += 0.9)
        b(e * 1.91 - 0.02, 4.4, t, e * 1.91 + 0.02, 5.2, t + 0.6, A, f);
      for (let t = K.z - 2; t < K.z + 4; t += 1.3)
        b(e * 2.31 - 0.02, 2.5, t, e * 2.31 + 0.02, 2.9, t + 0.4, A, f);
    }
    (b(-1.6, 4.4, K.z + 4.21, 1.6, 5.2, K.z + 4.25, A, f),
      S([0, 3.7, K.z - 1], [0, 7.1, K.z - 1.3], 0.55, 0.5, k.hull, 12),
      S([0, 5.9, K.z - 1.25], [0, 6.5, K.z - 1.27], 0.57, 0.57, 11740714, 12),
      S([0, 5.9, K.z + 2.6], [0, 9.1, K.z + 2.6], 0.08, 0.06, k.iron, 6),
      b(-0.7, 8.1, K.z + 2.55, 0.7, 8.18, K.z + 2.65, k.iron),
      S([0, m, e + 2], [0, 2.9, e + 2], 0.22, 0.22, k.iron, 8));
    for (let n of [-1, 1])
      for (let r = e + 2; r < t - 3; r += 1.6) {
        let e = i(r, 1) + 0.22;
        S([n * e, 0.55, r], [n * e, 0.55, r + 0.01], 0.28, 0.28, 1447446, 8);
        let t = new d(0.3, 0.13, 6, 10);
        (t.rotateY(Math.PI / 2),
          t.translate(n * e, 0.65, r),
          s.push(N(t, 1447446)));
      }
    for (let e of [8.9, 8.45, 8]) _.push([0, e, K.z + 2.75, 16773848]);
    _.push(
      [2.35, 6, K.z + 3.8, 16722458],
      [-2.35, 6, K.z + 3.8, 2817882],
      [0, 2.9, e - 0.1, 16773848],
    );
    let h = [0, 2.8, e + 2],
      g = [0, D(36) + 0.2, 36.4];
    for (let e = 0; e < 16; e++) {
      let t = e / 16,
        n = (e + 1) / 16,
        r = (e) => [
          0,
          h[1] + (g[1] - h[1]) * e - 3 * Math.sin(Math.PI * e),
          h[2] + (g[2] - h[2]) * e,
        ];
      C(r(t), r(n));
    }
  }
  let xe = o(
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
        let i = new m(e);
        return ((i.wrapS = i.wrapT = ee), (i.colorSpace = re), i);
      })(),
    ),
    Se = [],
    Ce = (e, t, n, r, i, a = 0.06) => {
      let o = new x(n, r);
      (o.rotateX(-Math.PI / 2),
        o.translate(0, 0, -r / 2),
        o.rotateY(i),
        o.translate(e, a, t),
        Se.push(o));
    };
  for (let e of [-1, 1])
    (Ce(e * 0.6, 36.4, 3.2, 18, e * 0.42), Ce(e * 5.5, 22, 1.6, 52, 0));
  if ((Ce(0, -30, 9, 70, 0, 0.05), K)) {
    for (let e of [-1, 1]) Ce(e * 0.4, K.z + 11, 1.4, 9, e * 0.5);
    Ce(0, K.z - 11, 5, 14, 0, 0.05);
  }
  let q = o(
      new E({
        map: xe,
        transparent: !0,
        depthWrite: !1,
        opacity: 0.85,
        fog: !0,
      }),
    ),
    we = new h(o(oe(Se)), q);
  (Se.forEach((e) => e.dispose()), (we.renderOrder = 1), r.add(we));
  let J = new h(
    o(P(s)),
    o(new v({ vertexColors: !0, roughness: 0.62, metalness: 0.08, side: 2 })),
  );
  ((J.castShadow = !0), (J.receiveShadow = !0), r.add(J));
  let Te = o(P(u));
  Te.computeVertexNormals();
  let Ee = new h(
    Te,
    o(
      new v({
        vertexColors: !0,
        roughness: 0.95,
        side: 2,
        emissive: 2760724,
        emissiveIntensity: 0.6,
      }),
    ),
  );
  ((Ee.castShadow = !0),
    r.add(Ee),
    r.add(new h(o(P(f)), o(new E({ vertexColors: !0 })))));
  let Y = o(new l());
  (Y.setAttribute(`position`, new w(p, 3)),
    r.add(new n(Y, o(new g({ color: 1512463 })))));
  let X = o(
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
        let r = new m(e);
        return ((r.colorSpace = re), r);
      })(),
    ),
    De = (e, t) => {
      let n = [],
        r = [];
      for (let [t, i, a, o] of e)
        (n.push(t, i, a), M.set(o), r.push(M.r, M.g, M.b));
      let i = o(new l());
      (i.setAttribute(`position`, new w(n, 3)),
        i.setAttribute(`color`, new w(r, 3)));
      let a = new ie(
        i,
        o(
          new ae({
            map: X,
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
    Oe = [];
  for (let e = 0; e < y.length; e += 3)
    Oe.push([y[e], y[e + 1], y[e + 2], 16769712]);
  (r.add(De(_, 2.4)), r.add(De(Oe, 0.8)));
  let ke = o(new v({ vertexColors: !0, roughness: 0.9, side: 2 })),
    Z = o(new x(2.9, 1.8, 10, 4));
  (Z.rotateY(Math.PI / 2), Z.translate(0, -0.9, -1.45));
  {
    let e = Z.attributes.position,
      t = [];
    for (let n = 0; n < e.count; n++) {
      let r = -e.getZ(n) / 2.9,
        i = -e.getY(n) / 1.8;
      (M.set(
        r < 0.3 && i < 0.5
          ? 16052194
          : r > 0.3 && r < 0.42
            ? 14200906
            : 10231588,
      ),
        t.push(M.r, M.g, M.b));
    }
    Z.setAttribute(`color`, new w(t, 3));
  }
  let Q = o(new x(7, 0.5, 16, 1));
  (Q.rotateY(Math.PI / 2), Q.translate(0, -0.25, -3.5));
  {
    let e = Q.attributes.position;
    for (let t = 0; t < e.count; t++)
      e.setY(t, e.getY(t) * (1 + e.getZ(t) / 7.6));
  }
  {
    let e = Q.attributes.position,
      t = [];
    for (let n = 0; n < e.count; n++)
      (M.set(-e.getZ(n) < 2.3 ? 1986480 : 16052194), t.push(M.r, M.g, M.b));
    Q.setAttribute(`color`, new w(t, 3));
  }
  let Ae = [
    [Z, W.peak],
    [Q, [0, W[1].top - 0.2, W[1].zt]],
  ].map(([e, t]) => {
    let n = new h(e, ke);
    return (
      n.position.set(...t),
      r.add(n),
      { g: e, base: e.attributes.position.array.slice() }
    );
  });
  return {
    group: r,
    update(e) {
      xe.offset.y = -e * 0.12;
      for (let t of Ae) {
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
      for (let e of a) e?.dispose?.();
    },
  };
}
