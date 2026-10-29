// assets__greywater-setpieces-view-CS3dCOa6 15 — math
// Lines 5383-5714 of readable/assets__greywater-setpieces-view-CS3dCOa6.pretty.js (statement-aligned).
function qt(e, t, n, r) {
  for (let i = 0; i < t.length - 1; i++) {
    let [a, o] = t[i],
      [s, c] = t[i + 1],
      l = Math.hypot(s - a, c - o),
      u = Math.max(1, Math.round(l / 1.2));
    (R(e, [a, n + 1.05, o], [s, n + 1.05, c], 0.03, r, 6),
      R(e, [a, n + 0.5, o], [s, n + 0.5, c], 0.015, r, 4));
    for (let t = 0; t <= u; t++) {
      let i = t / u;
      U(e, 0.05, 1.05, 0.05, r, a + (s - a) * i, n, o + (c - o) * i);
    }
  }
}
function Jt(e, t, n, r, i, a, o, s) {
  let c = [
      [0, Z],
      [Z, Ft],
      [Ft, Lt],
    ],
    l = (r, i, a, o, s, c = 0.04) => {
      let l = i - r,
        u = o - a,
        d = (r + i) / 2;
      l <= 0.01 ||
        u <= 0.01 ||
        (t === `x` ? U(e, c, u, l, s, n, a, d) : U(e, l, u, c, s, d, a, n));
    };
  for (let [e, t] of c) {
    let n = a
        .filter((t) => Math.abs(t[2] - e) < 0.01)
        .sort((e, t) => e[0] - t[0]),
      c = r;
    for (let r of n)
      (l(c, r[0], e, t, o), l(r[0], r[1], e + r[3], t, o), (c = r[1]));
    (l(c, i, e, t, o),
      l(r, i, t - 0.45, t, s, 0.3),
      l(r, i, e + (t - e) * 0.55, e + (t - e) * 0.55 + 0.06, s, 0.12));
    for (let t of n)
      (l(t[0] - 0.12, t[0], e, e + t[3] + 0.12, s, 0.35),
        l(t[1], t[1] + 0.12, e, e + t[3] + 0.12, s, 0.35),
        l(t[0], t[1], e + t[3], e + t[3] + 0.15, s, 0.35));
    for (let a = 1; a < 6; a++) {
      let o = r + (a / 6) * (i - r),
        c = n.find((e) => o > e[0] - 0.1 && o < e[1] + 0.1);
      l(o - 0.04, o + 0.04, c ? e + c[3] : e, t, s, 0.22);
    }
  }
}
function Yt(e, t, n, r, i, a, o, s) {
  let c = new _();
  (c.position.set(0, t, zt),
    e.add(c),
    U(c, 18, 0.3, Bt, s, 0, -0.3, 0),
    U(c, 18, 0.02, 3.4, K(6975347, 0.8), 0, 0, 0),
    U(c, 18, 0.05, 4.2, K(5922918, 0.6, 0.4), 0, -0.85, 0));
  for (let e of [-1, 1]) {
    let t = e * 2.05;
    (U(c, 18, 0.5, 0.3, n, 0, -0.85, t), U(c, 18, 0.45, 0.3, n, 0, 3.3, t));
    for (let e = 0; e <= 6; e++)
      U(
        c,
        0.28,
        4.15,
        0.3,
        n,
        -9 + e * 3 + (e === 0 ? 0.14 : e === 6 ? -0.14 : 0),
        -0.85,
        t,
      );
    for (let e = 0; e < 6; e++) {
      let r = -9 + e * 3,
        i = r + 3,
        a = r + 3 / 2 < 0;
      H(c, [a ? i : r, -0.4, t], [a ? r : i, 3.3, t], 0.2, 0.22, n);
    }
    (U(c, 18, 0.95, 0.06, K(7173499, 0.5, 0.5), 0, 0, e * 1.9),
      U(c, 18, 2.15, 0.04, i, 0, 0.95, e * 1.9),
      U(c, 18, 0.2, 0.08, n, 0, 0.95, e * 1.9));
    for (let t = -7.5; t < Rt; t += 1.5)
      U(c, 0.06, 2.15, 0.1, n, t, 0.95, e * 1.9);
    R(c, [-9, 0.95, e * 1.7], [Rt, 0.95, e * 1.7], 0.025, r, 6);
  }
  U(c, 18, 0.2, 3.8, K(14736594, 0.8), 0, 3.25, 0);
  for (let e = -7.5; e < Rt; e += 3) {
    let t = U(c, 2.2, 0.03, 0.3, o, e + 0.75, 3.22, 0);
    t.castShadow = !1;
  }
  (U(c, 18.2, 0.3, 4.6, K(4145476, 0.9), 0, 3.75, 0),
    U(c, 18.3, 0.12, 4.7, r, 0, 4.05, 0));
  for (let e of [-1, 1]) {
    let t = e * 8.85;
    (U(c, 0.3, 0.4, 4.5, r, t, 3.55, 0),
      U(c, 0.3, 4.4, 0.25, r, t, -0.85, 2.15),
      U(c, 0.3, 4.4, 0.25, r, t, -0.85, -2.15));
  }
}
function Xt(e, t, n, r, i) {
  let a = K(4864814, 0.95),
    o = [13132842, 14262330, 11025706, 12026668];
  P(e, 0.16, 0.24, 3.4, a, t, n, r, 7);
  for (let o = 0; o < 3; o++)
    R(
      e,
      [t, n + 2.6, r],
      [t + (i() - 0.5) * 2.4, n + 4.4, r + (i() - 0.5) * 2.4],
      0.08,
      a,
      5,
    );
  for (let a = 0; a < 7; a++) {
    let s = G(
      e,
      new x(1 + i() * 0.7, 1),
      K(o[a % 4], 0.85),
      t + (i() - 0.5) * 3,
      n + 4.2 + i() * 2.2,
      r + (i() - 0.5) * 3,
    );
    s.scale.y = 0.8;
  }
}
function Zt(t, n, i, a, o, s) {
  let c = o[0] - a[0],
    l = o[1] - a[1],
    u = o[2] - a[2],
    d = Math.hypot(c, u),
    f = new e(new r(n, i, Math.hypot(d, l)), s);
  return (
    f.position.set((a[0] + o[0]) / 2, (a[1] + o[1]) / 2, (a[2] + o[2]) / 2),
    (f.rotation.order = `YXZ`),
    f.rotation.set(-Math.atan2(l, d), Math.atan2(c, u), 0),
    (f.castShadow = f.receiveShadow = !0),
    t.add(f),
    f
  );
}
function Qt(e, t, n, r, i, { waist: a = null, stringer: o = null } = {}) {
  let s = r[0] - n[0],
    c = r[1] - n[1],
    l = r[2] - n[2],
    u = Math.hypot(s, l),
    d = Math.max(1, Math.round(c / 0.18)),
    f = Math.atan2(s, l);
  for (let r = 0; r < d; r++) {
    let a = (r + 0.5) / d;
    U(
      e,
      t,
      0.14,
      u / d + 0.03,
      i,
      n[0] + s * a,
      n[1] + (c * (r + 1)) / d - 0.14,
      n[2] + l * a,
      f,
    );
  }
  if (
    (a &&
      Zt(e, t, 0.22, [n[0], n[1] - 0.05, n[2]], [r[0], r[1] - 0.05, r[2]], a),
    o)
  )
    for (let i of [-1, 1]) {
      let a = Math.cos(f) * i * (t / 2 + 0.03),
        s = -Math.sin(f) * i * (t / 2 + 0.03);
      Zt(
        e,
        0.06,
        0.26,
        [n[0] + a, n[1] - 0.02, n[2] + s],
        [r[0] + a, r[1] - 0.02, r[2] + s],
        o,
      );
    }
}
function $t(
  e,
  t,
  n,
  r,
  { h: i = 1.05, post: a = 1.8, toe: o = null, r: s = 0.025 } = {},
) {
  let c = n[0] - t[0],
    l = n[1] - t[1],
    u = n[2] - t[2],
    d = Math.max(1, Math.ceil(Math.hypot(c, u) / a));
  for (let n = 0; n <= d; n++) {
    let a = n / d;
    U(e, s * 2, i, s * 2, r, t[0] + c * a, t[1] + l * a, t[2] + u * a);
  }
  (H(e, [t[0], t[1] + i, t[2]], [n[0], n[1] + i, n[2]], s * 2, s * 2, r),
    H(
      e,
      [t[0], t[1] + i * 0.52, t[2]],
      [n[0], n[1] + i * 0.52, n[2]],
      s * 1.6,
      s * 1.6,
      r,
    ),
    o &&
      Zt(
        e,
        0.03,
        0.15,
        [t[0], t[1] + 0.075, t[2]],
        [n[0], n[1] + 0.075, n[2]],
        o,
      ));
}
function en(e, t, n, i, a, o = 0, s = 0, c = 0, l = 0, u = 1) {
  let d = new r(t, n, i),
    f = d.attributes.uv,
    p = [
      [i, n],
      [i, n],
      [t, i],
      [t, i],
      [t, n],
      [t, n],
    ];
  for (let e = 0; e < 6; e++)
    for (let t = 0; t < 4; t++) {
      let n = e * 4 + t;
      f.setXY(n, (f.getX(n) * p[e][0]) / u, (f.getY(n) * p[e][1]) / u);
    }
  return G(e, d, a, o, s + n / 2, c, l);
}
function tn(e, t, n, r, i, a, o, s, c, l = [], u = 1) {
  let d = (n, r, a, o) => {
      r - n < 0.01 ||
        o - a < 0.01 ||
        (t === `x`
          ? en(e, r - n, o - a, s, c, (n + r) / 2, a, i, 0, u)
          : en(e, s, o - a, r - n, c, i, a, (n + r) / 2, 0, u));
    },
    f = [...new Set([n, r, ...l.flatMap((e) => [e[0], e[1]])])].sort(
      (e, t) => e - t,
    );
  for (let e = 0; e < f.length - 1; e++) {
    let t = f[e],
      n = f[e + 1],
      r = (t + n) / 2,
      i = l.filter((e) => e[0] <= r && e[1] >= r).sort((e, t) => e[2] - t[2]),
      s = a;
    for (let e of i) (d(t, n, s, e[2]), (s = e[3]));
    d(t, n, s, o);
  }
}
function nn(e, t, n, r, i, a, o, s = 0.45) {
  let c = new _();
  (c.position.set(t, 0, n), (c.rotation.y = a), e.add(c));
  for (let e of [-1, 1]) U(c, 0.05, i - r, 0.05, o, (e * s) / 2, r, 0);
  for (let e = r + 0.3; e < i; e += 0.3)
    H(c, [-s / 2, e, 0], [s / 2, e, 0], 0.03, 0.03, o);
  return c;
}
var rn = new Map();
function an(e, t, n, r = {}, i = null) {
  if (rn.has(e)) return rn.get(e);
  let o = z(t[0], t[1], n, !0);
  i && o.repeat.set(...i);
  let s = new a({ map: o, roughness: 0.85, ...r });
  return (rn.set(e, s), s);
}
var on = () =>
    an(`gasBrick`, [256, 256], (e, t, n) => {
      ((e.fillStyle = `#b3a99b`), e.fillRect(0, 0, t, n));
      let r = V(21),
        i = n / 12,
        a = t / 4;
      for (let t = 0; t < 12; t++)
        for (let n = -1; n < 5; n++) {
          let o = n * a + (t % 2 ? a / 2 : 0),
            s = 0.78 + r() * 0.35;
          ((e.fillStyle = `#${new h(9193010).multiplyScalar(s).getHexString()}`),
            e.fillRect(o + 1.5, t * i + 1.5, a - 3, i - 3));
        }
      for (let i = 0; i < 40; i++)
        ((e.fillStyle = `rgba(30,25,20,${r() * 0.12})`),
          e.fillRect(r() * t, 0, 3 + r() * 10, n));
    }),
  sn = () =>
    an(
      `bellRust`,
      [256, 256],
      (e, t, n) => {
        let r = V(5);
        ((e.fillStyle = `#5d5550`), e.fillRect(0, 0, t, n));
        for (let i = 0; i < 2500; i++) {
          let i = r();
          e.fillStyle =
            i < 0.4
              ? `rgba(140,72,36,${r() * 0.4})`
              : i < 0.7
                ? `rgba(60,55,50,${r() * 0.3})`
                : `rgba(110,105,95,${r() * 0.25})`;
          let a = 2 + r() * 10;
          e.fillRect(r() * t, r() * n, a, a * (0.5 + r()));
        }
        for (let i = 0; i < 30; i++)
          ((e.fillStyle = `rgba(120,60,30,${0.15 + r() * 0.2})`),
            e.fillRect(
              r() * t,
              r() * n * 0.3,
              2 + r() * 4,
              n * (0.3 + r() * 0.7),
            ));
        e.fillStyle = `rgba(40,30,25,0.6)`;
        for (let r = 0; r < n; r += 64) e.fillRect(0, r, t, 2);
        for (let r = 0; r < t; r += 128) e.fillRect(r, 0, 2, n);
      },
      { roughness: 0.9, metalness: 0.3 },
    ),
  cn = () =>
    an(
      `gasIron`,
      [128, 16],
      (e, t, n) => {
        ((e.fillStyle = `#3d5147`), e.fillRect(0, 0, t, n));
        for (let r = 0; r < 16; r++) {
          let i = (r / 16) * t,
            a = e.createLinearGradient(i, 0, i + t / 16, 0);
          (a.addColorStop(0, `#2b3a33`),
            a.addColorStop(0.5, `#4a6155`),
            a.addColorStop(1, `#2b3a33`),
            (e.fillStyle = a),
            e.fillRect(i, 0, t / 16, n));
        }
      },
      { roughness: 0.6, metalness: 0.35 },
    );
