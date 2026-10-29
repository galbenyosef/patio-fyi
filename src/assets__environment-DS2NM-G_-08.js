// assets__environment-DS2NM-G_ 08 — math
// Lines 1978-2254 of readable/assets__environment-DS2NM-G_.pretty.js (statement-aligned).
function yn(e, t) {
  let n = it(e.fork(`ground`)),
    i = new Set(),
    a = (e) => i.add(Math.round(e * 100) / 100);
  for (let e = -6; e <= Ft; e++) {
    let t = e * V;
    for (let e of [-18.55, -17.15, 0, 17.15, 18.55]) a(t + e);
    if (e < Ft) {
      let e = t + V / 2;
      for (let t of [
        -4.4, -3.5, -2.7, -2, -1.3, -0.6, 0, 0.6, 1.3, 2, 2.7, 3.5, 4.4,
      ])
        a(e + t);
    }
  }
  for (let e of [
    305, 318, 334, 356, 384, 418, 458, 505, 560, 625, 700, 790, 895, 1020, 1170,
    1350, 1570, 1850, 2400,
  ])
    (a(-e), a(e));
  let o = Array.from(i).sort((e, t) => e - t),
    c = o.length,
    u = (e, t) => {
      let r = I(400, 950, Math.max(Math.abs(e), Math.abs(t)));
      return r <= 0.001
        ? 0
        : ((n.fbm(e * 85e-5, t * 85e-5, 0.5, 3) - 0.5) * 96 +
            (n(e * 0.0036 + 5, t * 0.0036 - 3, 1.5) - 0.5) * 15) *
            r;
    },
    f = [7897424, 6056e3, 9080663, 7174724, 9736798, 6978636],
    p = new _(),
    m = new _(),
    h = new _(),
    g = (e, t, n) => Math.exp(-((e - t) * (e - t)) / n),
    v = new Float32Array(c * c * 3),
    y = new Float32Array(c * c * 3);
  for (let e = 0; e < c; e++)
    for (let r = 0; r < c; r++) {
      let i = o[r],
        a = o[e],
        s = e * c + r,
        l = u(i, a);
      ((v[s * 3] = i), (v[s * 3 + 1] = l + zt), (v[s * 3 + 2] = a));
      let d = Math.max(Math.abs(i), Math.abs(a)),
        _ = 1 - I(292, 322, d),
        b = 1 - I(330, 560, d),
        x = d < 294.75,
        S = n(i * 0.048 + 3, a * 0.048 - 7, 0.25),
        C = n(i * 0.21 + 21, a * 0.21 + 9, 1.75),
        w = n.fbm(i * 0.0028, a * 0.0028, 3.5, 2),
        T = n(i * 0.0042 + 31, a * 0.0042 - 17, 5.5),
        E = n(i * 0.0021 + 7, a * 0.0021 + 13, 8.5),
        D = Math.abs(i - Math.round(i / V) * V),
        O = Math.abs(a - Math.round(a / V) * V),
        k = Math.max(D, O) - Lt,
        A = Math.abs(D - V / 2),
        j = Math.abs(O - V / 2),
        M = x && D > Lt,
        ee = x && O > Lt,
        N = M && ee ? 1 : 0,
        P = 0;
      (M && (P = Math.max(P, g(A, 1.15, 0.3) + g(A, 2.85, 0.34) * 0.8)),
        ee && (P = Math.max(P, g(j, 1.15, 0.3) + g(j, 2.85, 0.34) * 0.8)),
        (P *= 1 - 0.75 * N));
      let te = x ? 1 - I(0, 1.1, k) : 0,
        ne = x ? (0.6 + 0.4 * I(0, 4.2, k)) * t(i, a, 0.42, 1.9) : 1;
      p.setHex(6250332)
        .lerp(h.setHex(6973797), C)
        .multiplyScalar(
          (0.95 + 0.1 * S) *
            (1 - 0.12 * P) *
            (1 - 0.15 * te) *
            (1 + 0.06 * N) *
            ne,
        );
      let re = Math.min(f.length - 2, Math.floor(T * (f.length - 1)));
      (m.setHex(f[re]).lerp(h.setHex(f[re + 1]), w),
        m.lerp(h.setHex(8353384), I(16, 46, Math.abs(l))),
        m.lerp(h.setHex(9142114), b * 0.6),
        m.multiplyScalar(0.9 + 0.2 * E),
        h.copy(m).lerp(p, _),
        (y[s * 3] = h.r),
        (y[s * 3 + 1] = h.g),
        (y[s * 3 + 2] = h.b));
    }
  let b = new Uint32Array((c - 1) * (c - 1) * 6),
    x = 0;
  for (let e = 0; e < c - 1; e++)
    for (let t = 0; t < c - 1; t++) {
      let n = e * c + t,
        r = n + 1,
        i = n + c,
        a = i + 1;
      ((b[x++] = n),
        (b[x++] = i),
        (b[x++] = r),
        (b[x++] = r),
        (b[x++] = i),
        (b[x++] = a));
    }
  let S = new d();
  (S.setAttribute(`position`, new l(v, 3)),
    S.setAttribute(`color`, new l(y, 3)),
    S.setIndex(new l(b, 1)),
    S.computeVertexNormals());
  let C = new s({
      color: 16777215,
      vertexColors: !0,
      flatShading: !0,
      roughness: 1,
      metalness: 0,
      polygonOffset: !0,
      polygonOffsetFactor: -4,
      polygonOffsetUnits: -4,
    }),
    w = new r(S, C);
  return (
    (w.name = `envGround`),
    (w.receiveShadow = !0),
    (w.castShadow = !1),
    { mesh: w, material: C, hAt: u, verts: c * c }
  );
}
function bn(e, t, n) {
  let i = it(e.fork(`pave`)),
    a = (e, t) => {
      let n = Math.sin(e * 127.1 + t * 311.7) * 43758.5453;
      return n - Math.floor(n);
    },
    o = [],
    c = [],
    u = [],
    f = [],
    p = 0,
    m = new _(),
    h = (e, t, r, a, o) => {
      let s = i(e * 0.11 + 5, t * 0.11 - 2, 0.5) - 0.5,
        c = n(e, t, 0.46, 2.1);
      return (
        m.setHex(r).multiplyScalar((1 + 0.09 * s) * a * c * (o ? 1.06 : 1)),
        m
      );
    },
    g = (e, t, n, r, i, s, l = null) => {
      for (let d = 0; d < r.length - 1; d++)
        for (let m = 0; m < n.length - 1; m++) {
          let g = e + n[m],
            _ = e + n[m + 1],
            v = t + r[d],
            y = t + r[d + 1],
            b = 0.9 + 0.2 * a(m + s, d - s),
            x = m === 0 || d === 0 || m === n.length - 2 || d === r.length - 2,
            S = l ? l(m, d, n.length - 1, r.length - 1) : i,
            C = [
              [g, v],
              [_, v],
              [_, y],
              [g, y],
            ];
          for (let [e, t] of C) {
            let n = h(e, t, S, b, x);
            (o.push(e, Rt, t), c.push(n.r, n.g, n.b), f.push(0, 1, 0));
          }
          (u.push(p, p + 2, p + 1, p, p + 3, p + 2), (p += 4));
        }
    },
    v = (e, t, n) => {
      let r = -0.08000000000000002;
      o.push(
        e - n,
        r,
        t - n,
        e + n,
        r,
        t - n,
        e + n,
        r,
        t + n,
        e - n,
        r,
        t + n,
      );
      for (let e = 0; e < 4; e++) (c.push(0.2, 0.2, 0.2), f.push(0, -1, 0));
      (u.push(p, p + 1, p + 2, p, p + 2, p + 3), (p += 4));
      let i = [
        [
          [e - n, t - n],
          [e + n, t - n],
          [0, 0, -1],
        ],
        [
          [e + n, t + n],
          [e - n, t + n],
          [0, 0, 1],
        ],
        [
          [e + n, t - n],
          [e + n, t + n],
          [1, 0, 0],
        ],
        [
          [e - n, t + n],
          [e - n, t - n],
          [-1, 0, 0],
        ],
      ];
      for (let [[e, t], [n, a], s] of i) {
        let i = h(e, t, 10986131, 1, !1).clone(),
          l = h(n, a, 10986131, 1, !1).clone();
        (o.push(e, Rt, t, n, Rt, a, n, r, a, e, r, t),
          c.push(
            i.r,
            i.g,
            i.b,
            l.r,
            l.g,
            l.b,
            l.r * 0.7,
            l.g * 0.7,
            l.b * 0.7,
            i.r * 0.7,
            i.g * 0.7,
            i.b * 0.7,
          ));
        for (let e = 0; e < 4; e++) f.push(s[0], s[1], s[2]);
        (u.push(p, p + 2, p + 1, p, p + 3, p + 2), (p += 4));
      }
    },
    y = [-17.75, -16.9, -15.2, -11.4, -5.7, 0, 5.7, 11.4, 15.2, 16.9, Lt],
    b = [];
  for (let e = 0; e <= 16; e++) b.push(-17.75 + (It / 16) * e);
  let x = (e, t, n, r) =>
      e === 0 || t === 0 || e === n - 1 || t === r - 1 ? 11248783 : 9670275,
    S = (e, t, n) => {
      let r = Math.max(Math.abs(e - (n - 1) / 2), Math.abs(t - (n - 1) / 2));
      return r > n / 2 - 1.2
        ? 11972508
        : Math.abs(r - 5.5) < 0.6
          ? 7301984
          : Math.abs(r - 2.5) < 0.6
            ? 8157032
            : Math.floor(r) & 1
              ? 11578006
              : 9538427;
    };
  t.forEach((e, t) => {
    (e.plaza
      ? g(e.cx, e.cz, b, b, 11117718, t * 3 + 11, (e, t, n) => S(e, t, n))
      : g(e.cx, e.cz, y, y, 10130826, t * 3 + 11, x),
      v(e.cx, e.cz, Lt));
  });
  let C = new d();
  (C.setAttribute(`position`, new l(new Float32Array(o), 3)),
    C.setAttribute(`color`, new l(new Float32Array(c), 3)),
    C.setAttribute(`normal`, new l(new Float32Array(f), 3)),
    C.setIndex(
      o.length / 3 > 65535
        ? new l(new Uint32Array(u), 1)
        : new l(new Uint16Array(u), 1),
    ));
  let w = new s({
    color: 16777215,
    vertexColors: !0,
    flatShading: !0,
    roughness: 0.95,
    metalness: 0,
  });
  w.shadowSide = 1;
  let T = new r(C, w);
  return (
    (T.name = `envPavement`),
    (T.receiveShadow = !0),
    (T.castShadow = !0),
    { mesh: T, material: w, verts: o.length / 3 }
  );
}
