// assets__greywater-setpieces-view-CS3dCOa6 21 — math
// Lines 8052-8248 of readable/assets__greywater-setpieces-view-CS3dCOa6.pretty.js (statement-aligned).
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
function Xn(e, t, n, i, o, s, c, l, u, f, m) {
  let { alu: h, ghGlass: g, growM: _, timber: v, soil: y, steelDk: b } = u,
    S = o * s,
    C = t - i / 2,
    w = t + i / 2,
    E = n - S / 2,
    D = n + S / 2,
    O = i / Math.round(i / 2);
  U(e, i + 0.2, 0.2, S + 0.2, K(9078656, 0.9), t, 0, n);
  for (let n of [E, D]) {
    (U(e, i, 0.6, 0.06, K(10132114, 0.6, 0.3), t, 0.2, n),
      U(e, i, c - 0.8, 0.03, g, t, 0.8, n));
    for (let t = C; t <= w + 0.01; t += O)
      U(e, 0.08, c - 0.2, 0.1, h, t, 0.2, n);
    (U(e, i, 0.08, 0.1, h, t, c - 0.08, n),
      U(e, i, 0.05, 0.08, h, t, 0.8, n),
      U(e, i, 0.05, 0.08, h, t, 2, n));
  }
  let k = [n - 0.75, n + 0.75];
  for (let t of [C, w]) {
    let r = t === w,
      i = r
        ? [
            [E, k[0]],
            [k[1], D],
          ]
        : [[E, D]];
    for (let [n, r] of i)
      (U(e, 0.06, 0.6, r - n, K(10132114, 0.6, 0.3), t, 0.2, (n + r) / 2),
        U(e, 0.03, c - 0.8, r - n, g, t, 0.8, (n + r) / 2));
    if (r) {
      (U(e, 0.03, c - 2.95, 1.5, g, t, 2.95, n),
        U(e, 0.12, 0.1, 1.6, h, t, 2.85, n));
      for (let r of [-1, 1]) U(e, 0.12, 2.85, 0.1, h, t, 0.2, n + r * 0.8);
      U(e, 0.05, 2.6, 1.5, g, t + 0.1, 0.25, n + 1.55);
    }
    for (let n = 0; n <= o; n++) U(e, 0.1, c, 0.1, h, t, 0.2, E + n * s);
    for (let n = 0; n < o; n++) {
      let r = E + n * s,
        i = new T([new p(r, 0), new p(r + s, 0), new p(r + s / 2, l)]),
        o = G(
          e,
          new d(i),
          new a({
            color: 12572374,
            transparent: !0,
            opacity: 0.28,
            roughness: 0.08,
            metalness: 0.2,
            side: 2,
          }),
          t,
          c + 0.2,
          0,
          -Math.PI / 2,
        );
      o.castShadow = !1;
    }
  }
  for (let n = 0; n < o; n++) {
    let a = E + n * s + s / 2,
      o = Math.atan2(l, s / 2),
      u = Math.hypot(l, s / 2);
    for (let n of [-1, 1]) {
      let d = a + (n * s) / 4,
        f = c + 0.2 + l / 2,
        p = G(e, new r(i, 0.03, u), g, t, f, d);
      ((p.rotation.x = n * o), (p.castShadow = !1));
      for (let t = C; t <= w + 0.01; t += O / 2) {
        let i = G(e, new r(0.05, 0.08, u), h, t, f + 0.03, d);
        ((i.rotation.x = n * o), (i.castShadow = !1));
      }
    }
    U(e, i + 0.1, 0.1, 0.12, h, t, c + 0.2 + l - 0.05, a);
    for (let t = C + O; t < w - 0.5; t += O * 2) {
      let n = G(e, new r(1.4, 0.04, 0.8), g, t, c + 0.2 + l * 0.8, a + 0.6);
      n.rotation.x = -0.6;
    }
  }
  for (let n = 0; n <= o; n++)
    U(e, i + 0.2, 0.14, 0.24, h, t, c + 0.1, E + n * s);
  for (let t = C + O; t < w - 0.1; t += O)
    for (let n = 0; n < o; n++) {
      let r = E + n * s;
      (R(e, [t, c + 0.15, r], [t, c + 0.15, r + s], 0.025, h, 4),
        R(e, [t, c + 0.15, r], [t, c + 0.2 + l, r + s / 2], 0.02, h, 4),
        R(e, [t, c + 0.2 + l, r + s / 2], [t, c + 0.15, r + s], 0.02, h, 4));
    }
  let A = 1.6,
    j = (S - A - 0.8) / 2;
  for (let r of [-1, 1]) {
    let a = n + r * (A / 2 + j / 2);
    U(e, i - 1.2, 0.08, j, K(10133667, 0.5, 0.5), t - 0.3, 0.85, a);
    for (let n of [C + 0.8, t, w - 1.6])
      for (let t of [-1, 1])
        U(e, 0.06, 0.85, 0.06, b, n, 0, a + t * (j / 2 - 0.1));
    let o = [K(5016122, 0.8), K(6987850, 0.8), K(4025908, 0.8)];
    for (let t = C + 0.9; t < w - 1; t += 0.42)
      for (let n = 0; n < Math.floor(j / 0.4); n++)
        G(
          e,
          new x(0.13 + f() * 0.06, 0),
          o[(((n + Math.floor(t * 3)) % 3) + 3) % 3],
          t,
          1.06 + f() * 0.06,
          a - j / 2 + 0.25 + n * 0.4,
        ).castShadow = !1;
    for (let t = C + 1; t < w - 1; t += 2.4) {
      let n = U(e, 1.8, 0.05, 0.16, _, t + 0.9, c - 0.35, a);
      ((n.castShadow = !1),
        R(e, [t + 0.9, c - 0.3, a], [t + 0.9, c + 0.15, a], 0.01, b, 3));
    }
  }
  m && U(e, i - 1, 0.04, A, v, t, 0.2, n);
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
function dr(e, t, n, i, a) {
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
    o = z(512, 128, (e) => r(e, !0), !0),
    s = new a({
      map: i,
      emissiveMap: o,
      emissive: 16777215,
      emissiveIntensity: 0,
      roughness: 0.15,
      metalness: 0.4,
    });
  return ((s.userData.nightGlow = 0.9), s);
}
