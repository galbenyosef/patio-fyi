// assets__greywater-landmarks-view-BqWgNxEz 02 — math
// Lines 322-574 of readable/assets__greywater-landmarks-view-BqWgNxEz.pretty.js (statement-aligned).
function M() {
  let n = new u(),
    i = A(11),
    d = b(3099199, 0.5, 0.5),
    f = b(9390646, 0.9),
    m = b(13616302, 0.85),
    _ = 10.5;
  C(n, 18, 0.25, 30, b(10130570, 0.95), 0, 0, 0);
  for (let e = -14; e <= 14.01; e += 4)
    for (let t of [-8, 8]) {
      (T(n, 0.17, 0.2, 5.7, d, t, 0.25, e, 12),
        T(n, 0.34, 0.22, 0.3, d, t, 5.9, e, 12),
        T(n, 0.3, 0.3, 0.25, d, t, 0.25, e, 12));
      let r = -Math.sign(t);
      E(n, [t, 4.5, e], [t + r * 1.4, 6.15, e], 0.06, d);
    }
  for (let e of [-8, 8]) C(n, 0.35, 0.45, 28.4, d, e, 6, 0);
  for (let e = -14; e <= 14.01; e += 4) {
    (E(n, [-8, 6.4, e], [0, _, e], 0.1, d),
      E(n, [8, 6.4, e], [0, _, e], 0.1, d),
      E(n, [-8, 6.4, e], [8, 6.4, e], 0.06, d));
    for (let t of [0.33, 0.66]) {
      let r = 8 * t,
        i = 6.4 + 4.1 * (1 - t);
      (E(n, [r, i, e], [r, 6.4, e], 0.04, d),
        E(n, [-r, i, e], [-r, 6.4, e], 0.04, d));
    }
  }
  let v = Math.hypot(8, 4.1),
    y = Math.atan2(4.1, 8),
    w = b(4935767, 0.8),
    j = b(10467524, 0.1, 0.1, { transparent: !0, opacity: 0.45 });
  for (let t of [-1, 1]) {
    let r = v * 0.62,
      i = v - r,
      o = new a(new e(r, 0.12, 29.2), w),
      s = r / 2;
    (o.position.set(t * (8 - Math.cos(y) * s), 6.4 + Math.sin(y) * s + 0.12, 0),
      (o.rotation.z = -t * y),
      (o.castShadow = o.receiveShadow = !0),
      n.add(o));
    let c = new a(new e(i, 0.05, 29.2), j),
      l = r + i / 2;
    (c.position.set(t * (8 - Math.cos(y) * l), 6.4 + Math.sin(y) * l + 0.12, 0),
      (c.rotation.z = -t * y),
      n.add(c));
  }
  C(n, 0.3, 0.3, 29.4, d, 0, 10.45, 0);
  let M = new h();
  (M.moveTo(-8.3, 0), M.lineTo(8.3, 0), M.lineTo(0, 4.9), M.lineTo(-8.3, 0));
  let N = new r();
  (N.absarc(0, 1.2, 2.2, 0, Math.PI * 2, !0), M.holes.push(N));
  let P = S(
    n,
    new p(M, { depth: 0.45, bevelEnabled: !1 }),
    f,
    0,
    6,
    14.100000000000001,
  );
  ((P.castShadow = !0),
    C(n, 16.8, 0.9, 0.55, m, 0, 5.1, 14.3),
    O(
      n,
      11.2,
      11.2 / 8,
      k(`MARKET HALL · 1908`, {
        bg: `#cfc4ae`,
        fg: `#3b2f25`,
        font: `600 70px Georgia, serif`,
      }),
      0,
      5.55,
      14.58,
    ));
  let F = D(512, 512, (e) => {
      ((e.fillStyle = `#f3efe4`),
        e.beginPath(),
        e.arc(256, 256, 250, 0, Math.PI * 2),
        e.fill(),
        (e.strokeStyle = `#1d1d1d`),
        (e.lineWidth = 12),
        e.stroke(),
        (e.fillStyle = `#1d1d1d`),
        (e.font = `600 58px Georgia, serif`),
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
          e.fillText(t, 256 + Math.cos(r) * 190, 256 + Math.sin(r) * 190);
        }),
        (e.lineCap = `round`),
        (e.lineWidth = 16),
        e.beginPath(),
        e.moveTo(256, 256),
        e.lineTo(
          256 + Math.cos(-Math.PI / 2 + 0.52) * 120,
          256 + Math.sin(-Math.PI / 2 + 0.52) * 120,
        ),
        e.stroke(),
        (e.lineWidth = 9),
        e.beginPath(),
        e.moveTo(256, 256),
        e.lineTo(
          256 + Math.cos(-Math.PI / 2 + 4.3) * 185,
          256 + Math.sin(-Math.PI / 2 + 4.3) * 185,
        ),
        e.stroke());
    }),
    I = S(n, new t(2.25, 2.25, 0.3, 40), d, 0, 7.2, 14.350000000000001);
  I.rotation.x = Math.PI / 2;
  let L = S(
    n,
    new s(2.05, 40),
    new o({
      map: F,
      roughness: 0.5,
      emissive: 16771520,
      emissiveMap: F,
      emissiveIntensity: 0,
    }),
    0,
    7.2,
    14.510000000000002,
  );
  ((L.castShadow = !1), (L.userData.nightGlow = 0.6));
  let R = P.clone();
  ((R.position.z = -14.25), n.add(R));
  let z = [
      [12071980, 15854560],
      [3041934, 15854560],
      [4094522, 15854560],
      [14129707, 8010268],
      [8007258, 15854560],
    ],
    B = [12858923, 14715422, 7250746, 15124794, 8010350, 10119738, 4160046],
    V = (e, t) =>
      D(128, 16, (n) => {
        for (let r = 0; r < 8; r++)
          ((n.fillStyle = `#` + (r % 2 ? t : e).toString(16).padStart(6, `0`)),
            n.fillRect(r * 16, 0, 16, 16));
      }),
    H = 0;
  for (let e of [-1, 1])
    for (let t = -11; t <= 11; t += 4.2) {
      let r = e * 4.8,
        a = new u();
      (a.position.set(r, 0.25, t),
        (a.rotation.y = e > 0 ? -Math.PI / 2 : Math.PI / 2),
        n.add(a));
      let s = b(8018492, 0.9);
      C(a, 3.2, 0.08, 1.4, s, 0, 0.85, 0);
      for (let [e, t] of [
        [-1.5, -0.6],
        [1.5, -0.6],
        [-1.5, 0.6],
        [1.5, 0.6],
      ])
        C(a, 0.07, 0.85, 0.07, s, e, 0, t);
      for (let [e, t] of [
        [-1.55, -0.75],
        [1.55, -0.75],
      ])
        C(a, 0.06, 2.3, 0.06, s, e, 0, t);
      let [d, f] = z[H++ % z.length],
        p = V(d, f);
      ((p.wrapS = l), p.repeat.set(2, 1));
      let m = S(
        a,
        new c(3.4, 1.9),
        new o({ map: p, side: 2, roughness: 0.9 }),
        0,
        2.15,
        0.1,
      );
      m.rotation.x = -Math.PI / 2 + 0.35;
      let h = S(
        a,
        new c(3.4, 0.25),
        new o({ map: p, side: 2, roughness: 0.9 }),
        0,
        1.72,
        0.98,
      );
      h.castShadow = !1;
      for (let e = 0; e < 4; e++) {
        let t = -1.15 + e * 0.77;
        C(a, 0.62, 0.22, 0.45, b(11569754, 0.9), t, 0.93, 0.25);
        let n = b(B[(H * 3 + e) % B.length], 0.7);
        for (let e = 0; e < 9; e++)
          S(
            a,
            new g(0.07 + i() * 0.03, 8, 6),
            n,
            t - 0.22 + (e % 3) * 0.22 + (i() - 0.5) * 0.06,
            1.2 + (e > 5 ? 0.08 : 0),
            0.12 + Math.floor(e / 3) * 0.13,
          );
      }
      for (let e = 0; e < 3; e++)
        C(
          a,
          0.55,
          0.32,
          0.4,
          b(10254924, 0.9),
          -1.2 + e * 0.7 + i() * 0.2,
          0,
          -0.9 - i() * 0.3,
          i() - 0.5,
        );
    }
  let U = x(16767392, 0),
    W = b(1776411, 0.8);
  for (let e = -14; e < 13.99; e += 4)
    for (let [t, r] of [[-8, 8]]) {
      let i = [];
      for (let n = 0; n <= 10; n++) {
        let a = n / 10,
          o = t + (r - t) * a,
          s = 5 - Math.sin(a * Math.PI) * 1.1;
        i.push([o, s, e + 2]);
      }
      for (let e = 0; e < 10; e++) E(n, i[e], i[e + 1], 0.012, W, 3);
      for (let e = 1; e < 10; e++) {
        let t = S(n, new g(0.08, 8, 6), U, i[e][0], i[e][1] - 0.12, i[e][2]);
        t.castShadow = !1;
      }
    }
  return (
    (U.userData.nightGlow = 2.5),
    (n.userData = {
      key: `market`,
      name: `South Market`,
      size: [18, 11.5, 30],
      nightMats: [U],
    }),
    n
  );
}
