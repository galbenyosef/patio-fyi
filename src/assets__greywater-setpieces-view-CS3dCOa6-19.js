// assets__greywater-setpieces-view-CS3dCOa6 19 — math
// Lines 7099-7438 of readable/assets__greywater-setpieces-view-CS3dCOa6.pretty.js (statement-aligned).
function In(e, t, r, i, a, o) {
  U(e, 0.8, 1.6, 0.8, a, t, r, i);
  for (let [n, o] of [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ]) {
    let s = G(e, new l(0.3, 0.6, 3), a, t + n * 0.4, r + 1.6, i + o * 0.4);
    s.rotation.y = Math.atan2(n, o);
  }
  ((G(e, new l(0.5, 2.6, 4), o, t, r + 1.6 + 1.3, i).rotation.y = Math.PI / 4),
    (G(e, new n(0.12, 6, 4), o, t, r + 3, i).castShadow = !1));
}
function Ln(e, t, n, r, i, a, o) {
  let s = Math.round(a / 0.18),
    c = a / s;
  for (let a = 0; a < s; a++) U(e, i, c * (a + 1), 0.29, o, t, n, r - 0.29 * a);
}
function Rn(e, t) {
  let {
      stoneW: n,
      stone: r,
      stoneDk: i,
      stoneLt: a,
      oak: s,
      oakDk: c,
      bronze: u,
      iron: d,
    } = t,
    m = 30.6 / 2,
    h = 8 - 2 * Cn,
    g = (e) => [
      [e - 1.55, 24.4, 1.35, 6.2],
      [e + 1.55, 24.4, 1.35, 6.2],
    ],
    v = (e) => [
      [e - 2.4, 9.5, 0.35, 1.6],
      [e + 2.4, 14.5, 0.35, 1.6],
      [e, 5.2, 0.35, 1.4],
    ],
    y = ([e, t, n, r], i = 0.9) => Dn(e, t, n, r, i),
    b = [
      [Q, Sn, bn, Sn, [[3, 5, 2.8, 0.9]], 1],
      [bn, Sn, bn, xn, [], 1],
      [bn, xn, Q, xn, [], 1],
      [Q, xn, Q, Sn, [[3, 4.6, 2.6, 0.9]], 1],
    ];
  for (let [t, i, s, l, u] of b) {
    let d = Math.hypot(s - t, l - i),
      f = d / 2,
      p = An(
        d,
        Tn,
        u,
        null,
        [...g(f), ...v(f).filter((e) => t !== Q || i !== xn || e[1] > 11)].map(
          (e) => y(e),
        ),
      ),
      m = (s - t) / d,
      h = (l - i) / d,
      _ = -m;
    jn(
      e,
      t + (h * Cn) / 2,
      i + (_ * Cn) / 2,
      s + (h * Cn) / 2,
      l + (_ * Cn) / 2,
      Cn,
      p,
      n,
    );
    let b = Mn(e, t, i, s, l);
    for (let [e, t, n, r] of g(f)) {
      for (let i = t + 1.6; i < t + r - 0.9; i += 0.42) {
        let t = U(b, n, 0.05, 0.55, c, e, i, -0.8 / 2);
        t.rotation.x = 0.6;
      }
      (U(b, 0.16, r - 0.8, 0.9, a, e, t, -0.8 / 2),
        U(b, n + 0.5, 0.2, 1.3, a, e, t - 0.2, -0.8 / 2));
      let i = En(
        e - n / 2 - 0.15,
        e + n / 2 + 0.15,
        t + r - n * 0.9 * 0.88,
        0.9,
        5,
      );
      for (let e = 0; e < i.length - 1; e++)
        H(
          b,
          [i[e][0], i[e][1], 0.08],
          [i[e + 1][0], i[e + 1][1], 0.08],
          0.16,
          0.16,
          a,
        );
    }
    let x = zn(),
      S = G(b, new C(1.75, 1.75, 0.25, 32), a, f, 20.4, -0.1);
    S.rotation.x = Math.PI / 2;
    let w = G(b, new o(1.55, 32), x, f, 20.4, 0.24);
    w.castShadow = !1;
    for (let e of [8.6, 18.2, 23.099999999999998, 33.3])
      U(b, d + 0.5, 0.35, 0.35, a, f, e, 0.12);
    U(b, d + 0.4, 1.3, 0.5, r, f, Tn, -0.25);
    for (let e = 0; e < 7; e++)
      U(b, 0.55, 0.6, 0.5, r, 0.6 + (e * (d - 1.2)) / 6, 35.8, -0.25);
  }
  for (let [t, n] of [
    [Q, xn],
    [bn, xn],
    [bn, Sn],
    [Q, Sn],
  ]) {
    let i = t === Q ? -1 : 1,
      o = n === xn ? -1 : 1;
    for (let [a, s, c] of [
      [0, 9, 0.8],
      [9, 9.5, 0.6],
      [18.5, 16, 0.4],
    ])
      (U(e, 1.6, s, c, r, t - i * 0.5, a, n + (o * c) / 2),
        U(e, c, s, 1.6, r, t + (i * c) / 2, a, n - o * 0.5));
    In(e, t - i * 0.2, 35.8, n - o * 0.2, r, a);
  }
  let x = G(e, new l(3.5, 21, 8), t.slate, m, 45.5, 16);
  x.rotation.y = Math.PI / 8;
  for (let n = 0; n < 4; n++) {
    let i = (n / 4) * Math.PI * 2,
      a = m + Math.sin(i) * 2.4,
      o = 16 + Math.cos(i) * 2.4,
      s = new _();
    (s.position.set(a, 36.1, o),
      (s.rotation.y = i),
      e.add(s),
      U(s, 1.2, 1.8, 1.4, r, 0, 0, 0),
      U(s, 0.6, 1.2, 0.05, K(1382426, 0.8), 0, 0.3, 0.71));
    let c = new T([kn([-0.75, 0]), kn([0.75, 0]), kn([0, 1])]);
    G(s, new w(c, { depth: 1.5, bevelEnabled: !1 }), t.slate, 0, 1.8, -0.75);
  }
  (P(e, 0.15, 0.15, 1.2, t.copper, m, 55.9, 16, 6),
    U(e, 0.14, 1.8, 0.14, t.bronze, m, 56.9, 16),
    U(e, 0.9, 0.14, 0.14, t.bronze, m, 57.9, 16));
  let S = 1.2,
    E = 0.18,
    D = 0.29;
  U(e, h, 0.1, h, K(9406328, 0.8), m, 0, 16);
  let O = (e, t) => [12.100000000000001 + e, 12.8 + t],
    k = 0,
    A = Math.round(wn / (13 * E));
  for (let t = 0; t < A; t++) {
    let n = t % 4,
      r = k;
    for (let t = 0; t < 13; t++) {
      let a = S + D * (t + 0.5),
        o = r + E * (t + 1),
        s,
        c;
      n === 0
        ? ((s = a), (c = S / 2))
        : n === 1
          ? ((s = h - S / 2), (c = a))
          : n === 2
            ? ((s = h - a), (c = h - S / 2))
            : ((s = S / 2), (c = h - a));
      let [l, u] = O(s, c);
      U(e, n % 2 ? S : 0.31, 0.4, n % 2 ? 0.31 : S, i, l, o - 0.4, u);
    }
    k = r + E * 13;
    let a = n === 0 || n === 1 ? 5.2 : 0,
      o = n === 1 || n === 2 ? 5.2 : 0,
      s = h - 2 * S - D * 13,
      [c, l] = O(
        a + S / 2 + (n === 0 ? -0.23000000000000043 / 2 : n === 2 ? s / 2 : 0),
        o + S / 2 + (n === 1 ? -0.23000000000000043 / 2 : n === 3 ? s / 2 : 0),
      );
    U(e, S + (n % 2 ? 0 : s), 0.35, S + (n % 2 ? s : 0), i, c, k - 0.35, l);
    let u =
      n === 0
        ? [O(S, S), O(5.2, S)]
        : n === 1
          ? [O(5.2, S), O(5.2, 5.2)]
          : n === 2
            ? [O(5.2, 5.2), O(S, 5.2)]
            : [O(S, 5.2), O(S, S)];
    R(e, [u[0][0], r + 1, u[0][1]], [u[1][0], k + 1, u[1][1]], 0.03, d, 5);
    for (let t = 0; t <= 3; t++) {
      let n = t / 3;
      U(
        e,
        0.04,
        1,
        0.04,
        d,
        u[0][0] + (u[1][0] - u[0][0]) * n,
        r + (k - r) * n,
        u[0][1] + (u[1][1] - u[0][1]) * n,
      );
    }
  }
  let j = (t, n, r, i) => {
    let [a, o] = O(t, n),
      [c, l] = O(r, i);
    U(e, c - a, 0.3, l - o, s, (a + c) / 2, 23.099999999999998, (o + l) / 2);
  };
  (j(0, S, 5.2, h), j(0, 0, S, S));
  for (let [[t, n], [r, i]] of [
    [
      [S, S],
      [5.2, S],
    ],
    [
      [5.2, S],
      [5.2, 5.15],
    ],
    [
      [S, 0.1],
      [S, S],
    ],
  ]) {
    let [a, o] = O(t, n),
      [s, c] = O(r, i);
    R(e, [a, 24.45, o], [s, 24.45, c], 0.035, d, 5);
    for (let t = 0; t <= 4; t++) {
      let n = t / 4;
      U(e, 0.05, 1.05, 0.05, d, a + (s - a) * n, wn, o + (c - o) * n);
    }
  }
  let [M, N] = O(5.2 / 2, 3.8);
  for (let t of [-0.9, 0.9]) {
    (U(e, 4.2, 0.3, 0.3, c, M, wn, N + t),
      U(e, 4.2, 0.3, 0.3, c, M, 25.799999999999997, N + t));
    for (let n of [-2, -0.7, 0.7, 2])
      U(e, 0.25, 2.4, 0.25, c, M + n, 23.7, N + t);
    for (let n of [-1.35, 1.35])
      H(
        e,
        [M + n - 0.6, 23.7, N + t],
        [M + n + 0.6, 25.799999999999997, N + t],
        0.15,
        0.15,
        c,
      );
  }
  let F = (t, n, r) => {
    let i = [
        [0, 0],
        [t * 1, 0],
        [t * 0.95, t * 0.12],
        [t * 0.78, t * 0.35],
        [t * 0.62, t * 0.75],
        [t * 0.58, t * 1.05],
        [t * 0.45, t * 1.2],
        [0, t * 1.25],
      ],
      a = new f(
        i.map(([e, t]) => new p(e, t)),
        16,
      ),
      o = G(e, a, u, n, 26.049999999999997 - t * 1.25, r);
    ((o.rotation.z = 0), U(e, 0.35, 0.3, 2, s, n, 25.9, r));
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
    t = new a({
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
function Kn(e, t, n, i, a) {
  let o = new r(e, t, n),
    s = o.attributes.uv,
    c = [
      [n, t],
      [n, t],
      [e, n],
      [e, n],
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
