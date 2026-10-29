// assets__greywater-landmarks-view-CXEhzPvV 02 — math
// Lines 322-574 of readable/assets__greywater-landmarks-view-CXEhzPvV.pretty.js (statement-aligned).
function M() {
  let r = new l(),
    o = A(11),
    s = b(3099199, 0.5, 0.5),
    c = b(9390646, 0.9),
    h = b(13616302, 0.85),
    _ = 10.5;
  C(r, 18, 0.25, 30, b(10130570, 0.95), 0, 0, 0);
  for (let e = -14; e <= 14.01; e += 4)
    for (let t of [-8, 8]) {
      (T(r, 0.17, 0.2, 5.7, s, t, 0.25, e, 12),
        T(r, 0.34, 0.22, 0.3, s, t, 5.9, e, 12),
        T(r, 0.3, 0.3, 0.25, s, t, 0.25, e, 12));
      let n = -Math.sign(t);
      E(r, [t, 4.5, e], [t + n * 1.4, 6.15, e], 0.06, s);
    }
  for (let e of [-8, 8]) C(r, 0.35, 0.45, 28.4, s, e, 6, 0);
  for (let e = -14; e <= 14.01; e += 4) {
    (E(r, [-8, 6.4, e], [0, _, e], 0.1, s),
      E(r, [8, 6.4, e], [0, _, e], 0.1, s),
      E(r, [-8, 6.4, e], [8, 6.4, e], 0.06, s));
    for (let t of [0.33, 0.66]) {
      let n = 8 * t,
        i = 6.4 + 4.1 * (1 - t);
      (E(r, [n, i, e], [n, 6.4, e], 0.04, s),
        E(r, [-n, i, e], [-n, 6.4, e], 0.04, s));
    }
  }
  let v = Math.hypot(8, 4.1),
    y = Math.atan2(4.1, 8),
    w = b(4935767, 0.8),
    j = b(10467524, 0.1, 0.1, { transparent: !0, opacity: 0.45 });
  for (let t of [-1, 1]) {
    let i = v * 0.62,
      a = v - i,
      o = new e(new n(i, 0.12, 29.2), w),
      s = i / 2;
    (o.position.set(t * (8 - Math.cos(y) * s), 6.4 + Math.sin(y) * s + 0.12, 0),
      (o.rotation.z = -t * y),
      (o.castShadow = o.receiveShadow = !0),
      r.add(o));
    let c = new e(new n(a, 0.05, 29.2), j),
      l = i + a / 2;
    (c.position.set(t * (8 - Math.cos(y) * l), 6.4 + Math.sin(y) * l + 0.12, 0),
      (c.rotation.z = -t * y),
      r.add(c));
  }
  C(r, 0.3, 0.3, 29.4, s, 0, 10.45, 0);
  let M = new g();
  (M.moveTo(-8.3, 0), M.lineTo(8.3, 0), M.lineTo(0, 4.9), M.lineTo(-8.3, 0));
  let N = new u();
  (N.absarc(0, 1.2, 2.2, 0, Math.PI * 2, !0), M.holes.push(N));
  let P = S(
    r,
    new m(M, { depth: 0.45, bevelEnabled: !1 }),
    c,
    0,
    6,
    14.100000000000001,
  );
  ((P.castShadow = !0),
    C(r, 16.8, 0.9, 0.55, h, 0, 5.1, 14.3),
    O(
      r,
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
    I = S(r, new p(2.25, 2.25, 0.3, 40), s, 0, 7.2, 14.350000000000001);
  I.rotation.x = Math.PI / 2;
  let L = S(
    r,
    new a(2.05, 40),
    new i({
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
  ((R.position.z = -14.25), r.add(R));
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
    for (let n = -11; n <= 11; n += 4.2) {
      let a = e * 4.8,
        s = new l();
      (s.position.set(a, 0.25, n),
        (s.rotation.y = e > 0 ? -Math.PI / 2 : Math.PI / 2),
        r.add(s));
      let c = b(8018492, 0.9);
      C(s, 3.2, 0.08, 1.4, c, 0, 0.85, 0);
      for (let [e, t] of [
        [-1.5, -0.6],
        [1.5, -0.6],
        [-1.5, 0.6],
        [1.5, 0.6],
      ])
        C(s, 0.07, 0.85, 0.07, c, e, 0, t);
      for (let [e, t] of [
        [-1.55, -0.75],
        [1.55, -0.75],
      ])
        C(s, 0.06, 2.3, 0.06, c, e, 0, t);
      let [u, p] = z[H++ % z.length],
        m = V(u, p);
      ((m.wrapS = d), m.repeat.set(2, 1));
      let h = S(
        s,
        new f(3.4, 1.9),
        new i({ map: m, side: 2, roughness: 0.9 }),
        0,
        2.15,
        0.1,
      );
      h.rotation.x = -Math.PI / 2 + 0.35;
      let g = S(
        s,
        new f(3.4, 0.25),
        new i({ map: m, side: 2, roughness: 0.9 }),
        0,
        1.72,
        0.98,
      );
      g.castShadow = !1;
      for (let e = 0; e < 4; e++) {
        let n = -1.15 + e * 0.77;
        C(s, 0.62, 0.22, 0.45, b(11569754, 0.9), n, 0.93, 0.25);
        let r = b(B[(H * 3 + e) % B.length], 0.7);
        for (let e = 0; e < 9; e++)
          S(
            s,
            new t(0.07 + o() * 0.03, 8, 6),
            r,
            n - 0.22 + (e % 3) * 0.22 + (o() - 0.5) * 0.06,
            1.2 + (e > 5 ? 0.08 : 0),
            0.12 + Math.floor(e / 3) * 0.13,
          );
      }
      for (let e = 0; e < 3; e++)
        C(
          s,
          0.55,
          0.32,
          0.4,
          b(10254924, 0.9),
          -1.2 + e * 0.7 + o() * 0.2,
          0,
          -0.9 - o() * 0.3,
          o() - 0.5,
        );
    }
  let U = x(16767392, 0),
    W = b(1776411, 0.8);
  for (let e = -14; e < 13.99; e += 4)
    for (let [n, i] of [[-8, 8]]) {
      let a = [];
      for (let t = 0; t <= 10; t++) {
        let r = t / 10,
          o = n + (i - n) * r,
          s = 5 - Math.sin(r * Math.PI) * 1.1;
        a.push([o, s, e + 2]);
      }
      for (let e = 0; e < 10; e++) E(r, a[e], a[e + 1], 0.012, W, 3);
      for (let e = 1; e < 10; e++) {
        let n = S(r, new t(0.08, 8, 6), U, a[e][0], a[e][1] - 0.12, a[e][2]);
        n.castShadow = !1;
      }
    }
  return (
    (U.userData.nightGlow = 2.5),
    (r.userData = {
      key: `market`,
      name: `South Market`,
      size: [18, 11.5, 30],
      nightMats: [U],
    }),
    r
  );
}
