// assets__greywater-setpieces-view-CRqPs-L5 19 — math
// Lines 7099-7438 of readable/assets__greywater-setpieces-view-CRqPs-L5.pretty.js (statement-aligned).
function In(e, t, n, i, a, o) {
  U(e, 0.8, 1.6, 0.8, a, t, n, i);
  for (let [o, s] of [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ]) {
    let c = G(e, new r(0.3, 0.6, 3), a, t + o * 0.4, n + 1.6, i + s * 0.4);
    c.rotation.y = Math.atan2(o, s);
  }
  ((G(e, new r(0.5, 2.6, 4), o, t, n + 1.6 + 1.3, i).rotation.y = Math.PI / 4),
    (G(e, new C(0.12, 6, 4), o, t, n + 3, i).castShadow = !1));
}
function Ln(e, t, n, r, i, a, o) {
  let s = Math.round(a / 0.18),
    c = a / s;
  for (let a = 0; a < s; a++) U(e, i, c * (a + 1), 0.29, o, t, n, r - 0.29 * a);
}
function Rn(t, n) {
  let {
      stoneW: i,
      stone: o,
      stoneDk: s,
      stoneLt: c,
      oak: l,
      oakDk: d,
      bronze: f,
      iron: p,
    } = n,
    h = 30.6 / 2,
    g = 8 - 2 * Cn,
    _ = (e) => [
      [e - 1.55, 24.4, 1.35, 6.2],
      [e + 1.55, 24.4, 1.35, 6.2],
    ],
    v = (e) => [
      [e - 2.4, 9.5, 0.35, 1.6],
      [e + 2.4, 14.5, 0.35, 1.6],
      [e, 5.2, 0.35, 1.4],
    ],
    b = ([e, t, n, r], i = 0.9) => Dn(e, t, n, r, i),
    C = [
      [Q, Sn, bn, Sn, [[3, 5, 2.8, 0.9]], 1],
      [bn, Sn, bn, xn, [], 1],
      [bn, xn, Q, xn, [], 1],
      [Q, xn, Q, Sn, [[3, 4.6, 2.6, 0.9]], 1],
    ];
  for (let [e, n, r, s, l] of C) {
    let u = Math.hypot(r - e, s - n),
      f = u / 2,
      p = An(
        u,
        Tn,
        l,
        null,
        [..._(f), ...v(f).filter((t) => e !== Q || n !== xn || t[1] > 11)].map(
          (e) => b(e),
        ),
      ),
      h = (r - e) / u,
      g = (s - n) / u,
      y = -h;
    jn(
      t,
      e + (g * Cn) / 2,
      n + (y * Cn) / 2,
      r + (g * Cn) / 2,
      s + (y * Cn) / 2,
      Cn,
      p,
      i,
    );
    let x = Mn(t, e, n, r, s);
    for (let [e, t, n, r] of _(f)) {
      for (let i = t + 1.6; i < t + r - 0.9; i += 0.42) {
        let t = U(x, n, 0.05, 0.55, d, e, i, -0.8 / 2);
        t.rotation.x = 0.6;
      }
      (U(x, 0.16, r - 0.8, 0.9, c, e, t, -0.8 / 2),
        U(x, n + 0.5, 0.2, 1.3, c, e, t - 0.2, -0.8 / 2));
      let i = En(
        e - n / 2 - 0.15,
        e + n / 2 + 0.15,
        t + r - n * 0.9 * 0.88,
        0.9,
        5,
      );
      for (let e = 0; e < i.length - 1; e++)
        H(
          x,
          [i[e][0], i[e][1], 0.08],
          [i[e + 1][0], i[e + 1][1], 0.08],
          0.16,
          0.16,
          c,
        );
    }
    let S = zn(),
      C = G(x, new a(1.75, 1.75, 0.25, 32), c, f, 20.4, -0.1);
    C.rotation.x = Math.PI / 2;
    let w = G(x, new m(1.55, 32), S, f, 20.4, 0.24);
    w.castShadow = !1;
    for (let e of [8.6, 18.2, 23.099999999999998, 33.3])
      U(x, u + 0.5, 0.35, 0.35, c, f, e, 0.12);
    U(x, u + 0.4, 1.3, 0.5, o, f, Tn, -0.25);
    for (let e = 0; e < 7; e++)
      U(x, 0.55, 0.6, 0.5, o, 0.6 + (e * (u - 1.2)) / 6, 35.8, -0.25);
  }
  for (let [e, n] of [
    [Q, xn],
    [bn, xn],
    [bn, Sn],
    [Q, Sn],
  ]) {
    let r = e === Q ? -1 : 1,
      i = n === xn ? -1 : 1;
    for (let [a, s, c] of [
      [0, 9, 0.8],
      [9, 9.5, 0.6],
      [18.5, 16, 0.4],
    ])
      (U(t, 1.6, s, c, o, e - r * 0.5, a, n + (i * c) / 2),
        U(t, c, s, 1.6, o, e + (r * c) / 2, a, n - i * 0.5));
    In(t, e - r * 0.2, 35.8, n - i * 0.2, o, c);
  }
  let w = G(t, new r(3.5, 21, 8), n.slate, h, 45.5, 16);
  w.rotation.y = Math.PI / 8;
  for (let e = 0; e < 4; e++) {
    let r = (e / 4) * Math.PI * 2,
      i = h + Math.sin(r) * 2.4,
      a = 16 + Math.cos(r) * 2.4,
      s = new y();
    (s.position.set(i, 36.1, a),
      (s.rotation.y = r),
      t.add(s),
      U(s, 1.2, 1.8, 1.4, o, 0, 0, 0),
      U(s, 0.6, 1.2, 0.05, K(1382426, 0.8), 0, 0.3, 0.71));
    let c = new S([kn([-0.75, 0]), kn([0.75, 0]), kn([0, 1])]);
    G(s, new x(c, { depth: 1.5, bevelEnabled: !1 }), n.slate, 0, 1.8, -0.75);
  }
  (P(t, 0.15, 0.15, 1.2, n.copper, h, 55.9, 16, 6),
    U(t, 0.14, 1.8, 0.14, n.bronze, h, 56.9, 16),
    U(t, 0.9, 0.14, 0.14, n.bronze, h, 57.9, 16));
  let T = 1.2,
    E = 0.18,
    D = 0.29;
  U(t, g, 0.1, g, K(9406328, 0.8), h, 0, 16);
  let O = (e, t) => [12.100000000000001 + e, 12.8 + t],
    k = 0,
    A = Math.round(wn / (13 * E));
  for (let e = 0; e < A; e++) {
    let n = e % 4,
      r = k;
    for (let e = 0; e < 13; e++) {
      let i = T + D * (e + 0.5),
        a = r + E * (e + 1),
        o,
        c;
      n === 0
        ? ((o = i), (c = T / 2))
        : n === 1
          ? ((o = g - T / 2), (c = i))
          : n === 2
            ? ((o = g - i), (c = g - T / 2))
            : ((o = T / 2), (c = g - i));
      let [l, u] = O(o, c);
      U(t, n % 2 ? T : 0.31, 0.4, n % 2 ? 0.31 : T, s, l, a - 0.4, u);
    }
    k = r + E * 13;
    let i = n === 0 || n === 1 ? 5.2 : 0,
      a = n === 1 || n === 2 ? 5.2 : 0,
      o = g - 2 * T - D * 13,
      [c, l] = O(
        i + T / 2 + (n === 0 ? -0.23000000000000043 / 2 : n === 2 ? o / 2 : 0),
        a + T / 2 + (n === 1 ? -0.23000000000000043 / 2 : n === 3 ? o / 2 : 0),
      );
    U(t, T + (n % 2 ? 0 : o), 0.35, T + (n % 2 ? o : 0), s, c, k - 0.35, l);
    let u =
      n === 0
        ? [O(T, T), O(5.2, T)]
        : n === 1
          ? [O(5.2, T), O(5.2, 5.2)]
          : n === 2
            ? [O(5.2, 5.2), O(T, 5.2)]
            : [O(T, 5.2), O(T, T)];
    R(t, [u[0][0], r + 1, u[0][1]], [u[1][0], k + 1, u[1][1]], 0.03, p, 5);
    for (let e = 0; e <= 3; e++) {
      let n = e / 3;
      U(
        t,
        0.04,
        1,
        0.04,
        p,
        u[0][0] + (u[1][0] - u[0][0]) * n,
        r + (k - r) * n,
        u[0][1] + (u[1][1] - u[0][1]) * n,
      );
    }
  }
  let j = (e, n, r, i) => {
    let [a, o] = O(e, n),
      [s, c] = O(r, i);
    U(t, s - a, 0.3, c - o, l, (a + s) / 2, 23.099999999999998, (o + c) / 2);
  };
  (j(0, T, 5.2, g), j(0, 0, T, T));
  for (let [[e, n], [r, i]] of [
    [
      [T, T],
      [5.2, T],
    ],
    [
      [5.2, T],
      [5.2, 5.15],
    ],
    [
      [T, 0.1],
      [T, T],
    ],
  ]) {
    let [a, o] = O(e, n),
      [s, c] = O(r, i);
    R(t, [a, 24.45, o], [s, 24.45, c], 0.035, p, 5);
    for (let e = 0; e <= 4; e++) {
      let n = e / 4;
      U(t, 0.05, 1.05, 0.05, p, a + (s - a) * n, wn, o + (c - o) * n);
    }
  }
  let [M, N] = O(5.2 / 2, 3.8);
  for (let e of [-0.9, 0.9]) {
    (U(t, 4.2, 0.3, 0.3, d, M, wn, N + e),
      U(t, 4.2, 0.3, 0.3, d, M, 25.799999999999997, N + e));
    for (let n of [-2, -0.7, 0.7, 2])
      U(t, 0.25, 2.4, 0.25, d, M + n, 23.7, N + e);
    for (let n of [-1.35, 1.35])
      H(
        t,
        [M + n - 0.6, 23.7, N + e],
        [M + n + 0.6, 25.799999999999997, N + e],
        0.15,
        0.15,
        d,
      );
  }
  let F = (n, r, i) => {
    let a = [
        [0, 0],
        [n * 1, 0],
        [n * 0.95, n * 0.12],
        [n * 0.78, n * 0.35],
        [n * 0.62, n * 0.75],
        [n * 0.58, n * 1.05],
        [n * 0.45, n * 1.2],
        [0, n * 1.25],
      ],
      o = new e(
        a.map(([e, t]) => new u(e, t)),
        16,
      ),
      s = G(t, o, f, r, 26.049999999999997 - n * 1.25, i);
    ((s.rotation.z = 0), U(t, 0.35, 0.3, 2, l, r, 25.9, i));
  };
  (F(0.75, M - 1.35, N), F(0.6, M, N), F(0.5, M + 1.35, N));
}
function zn() {
  let e = z(256, 256, (e) => {
      ((e.fillStyle = `#e9e2cf`),
        e.beginPath(),
        e.arc(128, 128, 126, 0, 7),
        e.fill(),
        (e.strokeStyle = `#1d1d1d`),
        (e.lineWidth = 6),
        e.stroke(),
        (e.fillStyle = `#1d1d1d`),
        (e.font = `600 28px Georgia, serif`),
        (e.textAlign = `center`),
        (e.textBaseline = `middle`),
        [
          `XII`,
          `I`,
          `II`,
          `III`,
          `IIII`,
          `V`,
          `VI`,
          `VII`,
          `VIII`,
          `IX`,
          `X`,
          `XI`,
        ].forEach((t, n) => {
          let r = (n / 12) * Math.PI * 2 - Math.PI / 2;
          e.fillText(t, 128 + Math.cos(r) * 98, 128 + Math.sin(r) * 98);
        }),
        (e.lineCap = `round`),
        (e.lineWidth = 8),
        e.beginPath(),
        e.moveTo(128, 128),
        e.lineTo(128 + 55 * Math.cos(-1.1), 128 + 55 * Math.sin(-1.1)),
        e.stroke(),
        (e.lineWidth = 5),
        e.beginPath(),
        e.moveTo(128, 128),
        e.lineTo(128 + 85 * Math.cos(2.3), 128 + 85 * Math.sin(2.3)),
        e.stroke());
    }),
    t = new p({
      map: e,
      emissive: 16773328,
      emissiveMap: e,
      emissiveIntensity: 0,
      roughness: 0.5,
    });
  return ((t.userData.nightGlow = 0.8), t);
}
var Bn = 30,
  Vn = 20,
  Hn = 4.6,
  Un = 4,
  Wn = 5,
  Gn = 20.6;
function Kn(e, t, r, i, a) {
  let o = new n(e, t, r),
    s = o.attributes.uv,
    c = [
      [r, t],
      [r, t],
      [e, r],
      [e, r],
      [e, t],
      [e, t],
    ];
  for (let e = 0; e < 6; e++)
    for (let t = 0; t < 4; t++) {
      let n = e * 4 + t;
      s.setXY(n, (s.getX(n) * c[e][0]) / i, (s.getY(n) * c[e][1]) / a);
    }
  return o;
}
