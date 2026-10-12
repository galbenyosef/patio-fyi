// assets__greywater-landmarks-view-BqWgNxEz 03 — math
// Lines 575-904 of readable/assets__greywater-landmarks-view-BqWgNxEz.pretty.js (statement-aligned).
function N() {
  let e = new u(),
    t = b(14275267, 0.85),
    n = b(12432547, 0.9),
    r = b(6117976, 0.55, 0.1),
    i = b(8018483, 0.35, 0.9),
    a = b(2765626, 0.15, 0.6),
    o = 1.5;
  for (let t = 0; t < 6; t++)
    C(
      e,
      27 - t * 0.2,
      o / 6,
      4.2 - t * 0.55,
      n,
      0,
      (t * o) / 6,
      9.1 - t * 0.28,
    );
  (C(e, 24, o, 16, n, 0, 0, -0.5), C(e, 24, 11.5, 13, t, 0, o, -2));
  for (let t = 2; t < 5.5; t += 0.6) C(e, 24.06, 0.05, 13.06, n, 0, t, -2);
  for (let n of [-1, 1])
    for (let r = -6.2; r < 4.5; r += 3)
      for (let i of [2.8, 7.8])
        (C(e, 0.1, 3, 1.5, a, n * 12.02, i, r - 2),
          C(e, 0.25, 0.25, 1.9, t, n * 12.08, i + 3, r - 2));
  let s = 6.8;
  for (let r = 0; r < 6; r++) {
    let i = -9.5 + (19 / 5) * r;
    (C(e, 1.5, 0.35, 1.5, t, i, o, s),
      T(e, 0.58, 0.68, 8.6, t, i, 1.85, s, 20));
    for (let t = 0; t < 10; t++) {
      let r = (t / 10) * Math.PI * 2;
      C(
        e,
        0.08,
        8.3,
        0.08,
        n,
        i + Math.cos(r) * 0.63,
        2,
        s + Math.sin(r) * 0.63,
      );
    }
    (T(e, 0.9, 0.62, 0.35, t, i, 10.45, s, 20),
      C(e, 1.7, 0.2, 1.7, t, i, 10.8, s));
  }
  (C(e, 24.6, 0.6, 3.6, t, 0, 11, 6.2),
    C(e, 24.6, 1.3, 3.4, t, 0, 11.6, 6.2),
    C(e, 25, 0.35, 3.8, n, 0, 12.9, 6.2),
    O(
      e,
      24 * 0.8,
      (24 * 0.8 * 160) / 2048,
      k(`GREYWATER  EXCHANGE`, {
        w: 2048,
        h: 160,
        fg: `#6d6454`,
        font: `600 118px "Times New Roman", serif`,
        spacing: 0.2,
      }),
      0,
      12.25,
      7.92,
    ));
  let c = new h();
  (c.moveTo(-12.5, 0),
    c.lineTo(12.5, 0),
    c.lineTo(0, 2.8),
    c.lineTo(-12.5, 0),
    S(e, new p(c, { depth: 3.6, bevelEnabled: !1 }), t, 0, 13.25, 4.4),
    C(e, 24, 0.9, 13, n, 0, 13, -2),
    C(e, 3.2, 5.2, 0.2, i, 0, o, 3.75),
    C(e, 0.08, 5.2, 0.24, b(4075034, 0.4, 0.8), 0, o, 3.8));
  for (let t of [-0.9, 0.9])
    for (let n of [1, 2.6, 4.1])
      C(e, 1.1, 1.1, 0.06, b(6177828, 0.4, 0.9), t, o + n, 3.88);
  C(e, 3.6, 1.4, 0.15, a, 0, 6.9, 3.75);
  for (let n of [-1, 1])
    (C(e, 2.2, 3.2, 0.12, a, n * 5.6, 2.7, 3.75),
      C(e, 2.6, 0.3, 0.3, t, n * 5.6, 5.9, 3.8499999999999996));
  let l = O(
    e,
    3.4,
    1.27,
    D(1024, 384, (e) => {
      ((e.fillStyle = `#121212`),
        e.fillRect(0, 0, 1024, 384),
        (e.font = `bold 52px "Courier New", monospace`),
        (e.textBaseline = `middle`),
        [
          [`GRW`, `184.20`, `+1.35`],
          [`NRL`, `62.05`, `-0.40`],
          [`STH`, `97.80`, `+0.12`],
          [`DPT`, `41.66`, `-2.08`],
          [`PLZ`, `130.4`, `+0.77`],
        ].forEach((t, n) => {
          let r = 40 + n * 72;
          t.forEach((t, n) => {
            let i = [30, 360, 740][n];
            for (let a = 0; a < t.length; a++)
              ((e.fillStyle = `#262626`),
                e.fillRect(i + a * 40, r - 30, 36, 60),
                (e.fillStyle = `#000`),
                e.fillRect(i + a * 40, r - 1, 36, 2),
                (e.fillStyle =
                  n === 2 ? (t[0] === `+` ? `#7fd36b` : `#e46a5a`) : `#f2d98a`),
                e.fillText(t[a], i + a * 40 + 4, r + 2));
          });
        }));
    }),
    -4.3,
    6.1,
    3.92,
    0,
    0.9,
  );
  l.userData.always = !0;
  let d = 15.5;
  return (
    w(e, 6.8, 1.1, 3.4, 0.08, r, 0, 0, d),
    O(
      e,
      2.8,
      0.26,
      k(`GREYWATER · MDCCCXCII`, {
        w: 1024,
        h: 96,
        fg: `#c9a86a`,
        font: `600 60px Georgia, serif`,
      }),
      0,
      0.55,
      17.21,
    ),
    e.add(P(i, 0, 1.1, d)),
    (e.userData = {
      key: `exchange`,
      name: `North Exchange`,
      size: [27, 17, 28],
    }),
    e
  );
}
function P(e, t, r, i) {
  let a = new u();
  (a.position.set(t, r, i), (a.rotation.y = -0.35), a.scale.setScalar(1.3));
  let o = (t, n, r, i, o, s, c = 0, l = 0) => {
    let u = S(a, new v(t, n, r, 3, Math.min(t, n, r) * 0.3), e, i, o, s);
    return (u.rotation.set(c, 0, l), u);
  };
  (o(3.4, 1.35, 1.35, 0, 1.55, 0, 0, 0.12),
    o(1.5, 1.65, 1.5, 1.25, 1.75, 0, 0, 0.1),
    o(1, 0.8, 0.9, 2.2, 1.35, 0, 0, -0.55),
    o(0.5, 0.45, 0.62, 2.62, 0.98, 0, 0, -0.55));
  for (let t of [-1, 1])
    (S(
      a,
      new n(0.42, 0.075, 8, 16, Math.PI * 0.8),
      e,
      2.05,
      1.85,
      t * 0.45,
    ).rotation.set(0, t * 0.3, Math.PI * 0.55),
      o(0.28, 0.9, 0.3, 1.45, 0.6, t * 0.42, 0, -0.35),
      o(0.26, 0.55, 0.28, 1.65, 0.12, t * 0.42, 0, -0.1),
      o(0.32, 1, 0.34, -1.35, 0.72, t * 0.4, 0, 0.45),
      o(0.26, 0.55, 0.28, -1.72, 0.18, t * 0.4, 0, 0.1));
  let s = S(a, new n(0.55, 0.05, 6, 16, Math.PI * 0.9), e, -1.75, 2, 0);
  return ((s.rotation.z = Math.PI * 0.9), a);
}
var F = {
  W: 27,
  D: 32,
  H: 8,
  apron: [-19.5, -23, 19.5, 35],
  fuel: !0,
  buses: [
    [9, 4, 0, `NOT IN SERVICE`],
    [0, 13, 0, `12  RIVERSIDE`],
    [5.55, 24, 0.35, `DEPOT`],
  ],
  yard: [14.7, 12],
};
function I(e = F) {
  let r = new u(),
    i = A(7),
    a = b(3951194, 0.55, 0.5),
    s = b(11120304, 0.6, 0.45),
    d = b(8144436, 0.9),
    { W: f, D: m, H: g } = e,
    _ = f / 3,
    [v, y, E, j] = e.apron;
  C(r, E - v, 0.08, j - y, b(10328722, 0.95), (v + E) / 2, 0, (y + j) / 2);
  let M = b(15258202, 0.7),
    N = Math.min(12, j - m / 2 - 0.3);
  for (let e = 1; e < 3; e++)
    C(r, 0.15, 0.02, N, M, -f / 2 + e * _, 0.08, m / 2 + N / 2);
  for (let e of [-1, 1]) {
    (C(r, 0.4, 1.4, m, d, (e * f) / 2, 0, 0),
      C(r, 0.25, g - 3.2, m, s, (e * f) / 2, 1.4, 0));
    for (let t = -m / 2 + 1; t < m / 2 - 1; t += 3)
      C(
        r,
        0.3,
        1.3,
        2.4,
        b(7309974, 0.15, 0.3),
        e * (f / 2 + 0.03),
        g - 1.8,
        t + 0.5,
      );
    C(r, 0.3, 0.5, m, a, (e * f) / 2, g - 0.5, 0);
  }
  (C(r, f, g, 0.3, s, 0, 0, -m / 2),
    S(
      r,
      new t(f * 0.62, f * 0.62, m + 1, 40, 1, !0, Math.PI - 0.95, 1.9).rotateX(
        Math.PI / 2,
      ),
      b(7106934, 0.55, 0.5, { side: 2 }),
      0,
      g - f * 0.62 * Math.cos(0.95) + 0.1,
      0,
    ));
  let P = f * 0.62,
    I = g - P * Math.cos(0.95) + 0.1,
    R = new h();
  (R.absarc(0, I, P - 0.05, Math.PI / 2 + 0.95, Math.PI / 2 - 0.95, !0),
    R.lineTo(-P * Math.sin(0.95), g - 0.05));
  for (let e of [m / 2 - 0.2, -m / 2]) {
    S(r, new p(R, { depth: 0.2, bevelEnabled: !1 }), s, 0, 0, e);
    for (let t = -2; t <= 2; t++)
      C(
        r,
        2.2,
        1.1,
        0.05,
        b(7309974, 0.15, 0.3),
        t * 3.4,
        g + 1.2,
        e + (e > 0 ? 0.22 : -0.03),
      );
  }
  for (let e = 0; e <= 3; e++) C(r, 0.5, g, 0.6, a, -f / 2 + e * _, 0, m / 2);
  C(r, f + 0.4, 1.2, 0.7, a, 0, g - 1.2, m / 2);
  let z = D(64, 256, (e) => {
    ((e.fillStyle = `#8f9496`), e.fillRect(0, 0, 64, 256));
    for (let t = 0; t < 256; t += 8)
      ((e.fillStyle = `rgba(0,0,0,.28)`), e.fillRect(0, t, 64, 2));
  });
  ((z.wrapS = z.wrapT = l),
    [1, 0.45, 0].forEach((e, t) => {
      let n = -f / 2 + _ * (t + 0.5),
        i = g - 1.2;
      if ((C(r, _ - 0.6, 0.7, 0.7, a, n, i - 0.7, m / 2 - 0.1), !e)) return;
      let s = z.clone();
      ((s.needsUpdate = !0), s.repeat.set(1, e * 4));
      let l = S(
        r,
        new c(_ - 0.6, i * e - 0.7),
        new o({ color: 16777215, roughness: 0.6, metalness: 0.4, map: s }),
        n,
        i - 0.7 - (i * e - 0.7) / 2,
        m / 2 - 0.05,
      );
      l.castShadow = !0;
    }));
  let B = k(`GREYWATER TRANSIT  ·  SOUTH DEPOT`, {
    w: 2048,
    h: 160,
    bg: `#1e3f66`,
    fg: `#f3efe4`,
    font: `bold 78px Arial, sans-serif`,
    spacing: 0.06,
  });
  O(r, f - 1, ((f - 1) * 160) / 2048, B, 0, g - 0.6, m / 2 + 0.37);
  let V = [
    [1982310, 15262418],
    [1982310, 15262418],
    [13214010, 2763824],
  ];
  e.buses.forEach(([e, t, n, i], a) => {
    let o = L(V[a % V.length], i);
    (o.position.set(e, 0.08, t), (o.rotation.y = n), r.add(o));
  });
  let H = -f / 2 - 1.5,
    U = m / 2 + 9;
  if (e.fuel) {
    C(r, 7, 0.2, 2.2, b(11973030, 0.9), H, 0.08, U);
    for (let e of [-2.6, 2.6])
      T(r, 0.16, 0.16, 5, b(14210768, 0.5, 0.5), H + e, 0.28, U, 10);
    (C(r, 8.5, 0.6, 5, b(15263456, 0.6, 0.2), H, 5.2, U),
      C(r, 8.52, 0.25, 5.02, b(1982310, 0.6), H, 5.35, U));
    for (let e of [-1.1, 1.1])
      (w(r, 0.8, 1.7, 0.55, 0.05, b(14144716, 0.6, 0.2), H + e, 0.28, U),
        C(r, 0.5, 0.3, 0.02, x(10146047, 0.6), H + e, 1.3, U + 0.28));
  }
  for (let t = 0; t < 5; t++)
    T(
      r,
      0.3,
      0.3,
      0.9,
      b([3824270, 9316906, 3815994][t % 3], 0.6, 0.4),
      e.yard[0] - 0.3 + (t % 2) * 0.65,
      0.08,
      e.yard[1] - 1 + t * 0.55,
      14,
    );
  for (let t = 0; t < 4; t++) {
    let a = S(
      r,
      new n(0.5, 0.18, 8, 18),
      b(1776411, 0.9),
      e.yard[0] + (e.yard[0] > 0 ? 0.9 : -0.9),
      0.26 + t * 0.36,
      e.yard[1] + 2.4 + i() * 0.1,
    );
    a.rotation.x = Math.PI / 2;
  }
  return (
    (r.userData = {
      key: `depot`,
      name: `South Depot`,
      size: [E - v, g + 6, j - y],
    }),
    r
  );
}
