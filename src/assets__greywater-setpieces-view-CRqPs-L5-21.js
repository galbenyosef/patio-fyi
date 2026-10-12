// assets__greywater-setpieces-view-CRqPs-L5 21 — math
// Lines 8052-8248 of readable/assets__greywater-setpieces-view-CRqPs-L5.pretty.js (statement-aligned).
function Yn(e, t, n, r) {
  for (let i = 0; i < t.length - 1; i++) {
    let [a, o] = t[i],
      [s, c] = t[i + 1],
      l = Math.hypot(s - a, c - o),
      u = Math.max(1, Math.round(l / 1.2));
    (R(e, [a, n + 1.05, o], [s, n + 1.05, c], 0.025, r, 5),
      R(e, [a, n + 0.5, o], [s, n + 0.5, c], 0.018, r, 4));
    for (let t = 0; t <= u; t++) {
      let i = t / u;
      U(e, 0.05, 1.05, 0.05, r, a + (s - a) * i, n, o + (c - o) * i);
    }
  }
}
function Xn(e, t, r, i, a, o, s, c, l, d, f) {
  let { alu: m, ghGlass: h, growM: g, timber: _, soil: y, steelDk: b } = l,
    x = a * o,
    C = t - i / 2,
    T = t + i / 2,
    E = r - x / 2,
    D = r + x / 2,
    O = i / Math.round(i / 2);
  U(e, i + 0.2, 0.2, x + 0.2, K(9078656, 0.9), t, 0, r);
  for (let n of [E, D]) {
    (U(e, i, 0.6, 0.06, K(10132114, 0.6, 0.3), t, 0.2, n),
      U(e, i, s - 0.8, 0.03, h, t, 0.8, n));
    for (let t = C; t <= T + 0.01; t += O)
      U(e, 0.08, s - 0.2, 0.1, m, t, 0.2, n);
    (U(e, i, 0.08, 0.1, m, t, s - 0.08, n),
      U(e, i, 0.05, 0.08, m, t, 0.8, n),
      U(e, i, 0.05, 0.08, m, t, 2, n));
  }
  let k = [r - 0.75, r + 0.75];
  for (let t of [C, T]) {
    let n = t === T,
      i = n
        ? [
            [E, k[0]],
            [k[1], D],
          ]
        : [[E, D]];
    for (let [n, r] of i)
      (U(e, 0.06, 0.6, r - n, K(10132114, 0.6, 0.3), t, 0.2, (n + r) / 2),
        U(e, 0.03, s - 0.8, r - n, h, t, 0.8, (n + r) / 2));
    if (n) {
      (U(e, 0.03, s - 2.95, 1.5, h, t, 2.95, r),
        U(e, 0.12, 0.1, 1.6, m, t, 2.85, r));
      for (let n of [-1, 1]) U(e, 0.12, 2.85, 0.1, m, t, 0.2, r + n * 0.8);
      U(e, 0.05, 2.6, 1.5, h, t + 0.1, 0.25, r + 1.55);
    }
    for (let n = 0; n <= a; n++) U(e, 0.1, s, 0.1, m, t, 0.2, E + n * o);
    for (let n = 0; n < a; n++) {
      let r = E + n * o,
        i = new S([new u(r, 0), new u(r + o, 0), new u(r + o / 2, c)]),
        a = G(
          e,
          new w(i),
          new p({
            color: 12572374,
            transparent: !0,
            opacity: 0.28,
            roughness: 0.08,
            metalness: 0.2,
            side: 2,
          }),
          t,
          s + 0.2,
          0,
          -Math.PI / 2,
        );
      a.castShadow = !1;
    }
  }
  for (let r = 0; r < a; r++) {
    let a = E + r * o + o / 2,
      l = Math.atan2(c, o / 2),
      u = Math.hypot(c, o / 2);
    for (let r of [-1, 1]) {
      let d = a + (r * o) / 4,
        f = s + 0.2 + c / 2,
        p = G(e, new n(i, 0.03, u), h, t, f, d);
      ((p.rotation.x = r * l), (p.castShadow = !1));
      for (let t = C; t <= T + 0.01; t += O / 2) {
        let i = G(e, new n(0.05, 0.08, u), m, t, f + 0.03, d);
        ((i.rotation.x = r * l), (i.castShadow = !1));
      }
    }
    U(e, i + 0.1, 0.1, 0.12, m, t, s + 0.2 + c - 0.05, a);
    for (let t = C + O; t < T - 0.5; t += O * 2) {
      let r = G(e, new n(1.4, 0.04, 0.8), h, t, s + 0.2 + c * 0.8, a + 0.6);
      r.rotation.x = -0.6;
    }
  }
  for (let n = 0; n <= a; n++)
    U(e, i + 0.2, 0.14, 0.24, m, t, s + 0.1, E + n * o);
  for (let t = C + O; t < T - 0.1; t += O)
    for (let n = 0; n < a; n++) {
      let r = E + n * o;
      (R(e, [t, s + 0.15, r], [t, s + 0.15, r + o], 0.025, m, 4),
        R(e, [t, s + 0.15, r], [t, s + 0.2 + c, r + o / 2], 0.02, m, 4),
        R(e, [t, s + 0.2 + c, r + o / 2], [t, s + 0.15, r + o], 0.02, m, 4));
    }
  let A = 1.6,
    j = (x - A - 0.8) / 2;
  for (let n of [-1, 1]) {
    let a = r + n * (A / 2 + j / 2);
    U(e, i - 1.2, 0.08, j, K(10133667, 0.5, 0.5), t - 0.3, 0.85, a);
    for (let n of [C + 0.8, t, T - 1.6])
      for (let t of [-1, 1])
        U(e, 0.06, 0.85, 0.06, b, n, 0, a + t * (j / 2 - 0.1));
    let o = [K(5016122, 0.8), K(6987850, 0.8), K(4025908, 0.8)];
    for (let t = C + 0.9; t < T - 1; t += 0.42)
      for (let n = 0; n < Math.floor(j / 0.4); n++)
        G(
          e,
          new v(0.13 + d() * 0.06, 0),
          o[(((n + Math.floor(t * 3)) % 3) + 3) % 3],
          t,
          1.06 + d() * 0.06,
          a - j / 2 + 0.25 + n * 0.4,
        ).castShadow = !1;
    for (let t = C + 1; t < T - 1; t += 2.4) {
      let n = U(e, 1.8, 0.05, 0.16, g, t + 0.9, s - 0.35, a);
      ((n.castShadow = !1),
        R(e, [t + 0.9, s - 0.3, a], [t + 0.9, s + 0.15, a], 0.01, b, 3));
    }
  }
  f && U(e, i - 1, 0.04, A, _, t, 0.2, r);
}
var Zn = 46,
  Qn = 30,
  $n = 5,
  er = 4,
  tr = 17,
  nr = 13,
  rr = -21,
  ir = -3,
  ar = -13,
  or = 5,
  sr = -1,
  cr = 5,
  lr = -7,
  ur = 1;
function dr(e, t, r, i, a) {
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
var $ = (e, t, n, r, i, a, o, s) =>
  U(e, Math.abs(r - t), o - a, Math.abs(i - n), s, (t + r) / 2, a, (n + i) / 2);
function fr(e) {
  let t = V(e),
    n = Array.from({ length: 8 }, () => t() < 0.45),
    r = (e, r) => {
      ((e.fillStyle = r ? `#000` : `#2c3d47`), e.fillRect(0, 0, 512, 128));
      for (let i = 0; i < 8; i++) {
        let a = i * 64;
        if (r) {
          n[i] && ((e.fillStyle = `#e8f0f4`), e.fillRect(a + 3, 10, 58, 110));
          continue;
        }
        let o = e.createLinearGradient(0, 0, 0, 128);
        (o.addColorStop(0, n[i] ? `#a7b6bd` : `#3f5560`),
          o.addColorStop(1, n[i] ? `#7c8c92` : `#26343c`),
          (e.fillStyle = o),
          e.fillRect(a + 3, 4, 58, 120),
          (e.fillStyle = `rgba(230,236,238,0.5)`));
        for (let n = 10; n < 40; n += 4)
          t() < 0.7 && e.fillRect(a + 4, n, 56, 2);
        ((e.fillStyle = `#c9cfd2`), e.fillRect(a, 0, 3, 128));
      }
    },
    i = z(512, 128, (e) => r(e, !1), !0),
    a = z(512, 128, (e) => r(e, !0), !0),
    o = new p({
      map: i,
      emissiveMap: a,
      emissive: 16777215,
      emissiveIntensity: 0,
      roughness: 0.15,
      metalness: 0.4,
    });
  return ((o.userData.nightGlow = 0.9), o);
}
