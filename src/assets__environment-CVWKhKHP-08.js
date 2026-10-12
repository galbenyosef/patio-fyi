// assets__environment-CVWKhKHP 08 — math
// Lines 1956-2232 of readable/assets__environment-CVWKhKHP.pretty.js (statement-aligned).
function yn(e, t) {
  let n = rt(e.fork(`ground`)),
    r = new Set(),
    i = (e) => r.add(Math.round(e * 100) / 100);
  for (let e = -6; e <= Pt; e++) {
    let t = e * H;
    for (let e of [-18.55, -17.15, 0, 17.15, 18.55]) i(t + e);
    if (e < Pt) {
      let e = t + H / 2;
      for (let t of [
        -4.4, -3.5, -2.7, -2, -1.3, -0.6, 0, 0.6, 1.3, 2, 2.7, 3.5, 4.4,
      ])
        i(e + t);
    }
  }
  for (let e of [
    305, 318, 334, 356, 384, 418, 458, 505, 560, 625, 700, 790, 895, 1020, 1170,
    1350, 1570, 1850, 2400,
  ])
    (i(-e), i(e));
  let a = Array.from(r).sort((e, t) => e - t),
    o = a.length,
    c = (e, t) => {
      let r = L(400, 950, Math.max(Math.abs(e), Math.abs(t)));
      return r <= 0.001
        ? 0
        : ((n.fbm(e * 85e-5, t * 85e-5, 0.5, 3) - 0.5) * 96 +
            (n(e * 0.0036 + 5, t * 0.0036 - 3, 1.5) - 0.5) * 15) *
            r;
    },
    l = [7897424, 6056e3, 9080663, 7174724, 9736798, 6978636],
    u = new _(),
    f = new _(),
    p = new _(),
    m = (e, t, n) => Math.exp(-((e - t) * (e - t)) / n),
    g = new Float32Array(o * o * 3),
    y = new Float32Array(o * o * 3);
  for (let e = 0; e < o; e++)
    for (let r = 0; r < o; r++) {
      let i = a[r],
        s = a[e],
        d = e * o + r,
        h = c(i, s);
      ((g[d * 3] = i), (g[d * 3 + 1] = h + Rt), (g[d * 3 + 2] = s));
      let _ = Math.max(Math.abs(i), Math.abs(s)),
        v = 1 - L(292, 322, _),
        b = 1 - L(330, 560, _),
        x = _ < 294.75,
        S = n(i * 0.048 + 3, s * 0.048 - 7, 0.25),
        C = n(i * 0.21 + 21, s * 0.21 + 9, 1.75),
        w = n.fbm(i * 0.0028, s * 0.0028, 3.5, 2),
        T = n(i * 0.0042 + 31, s * 0.0042 - 17, 5.5),
        E = n(i * 0.0021 + 7, s * 0.0021 + 13, 8.5),
        D = Math.abs(i - Math.round(i / H) * H),
        O = Math.abs(s - Math.round(s / H) * H),
        k = Math.max(D, O) - It,
        ee = Math.abs(D - H / 2),
        A = Math.abs(O - H / 2),
        j = x && D > It,
        M = x && O > It,
        N = j && M ? 1 : 0,
        te = 0;
      (j && (te = Math.max(te, m(ee, 1.15, 0.3) + m(ee, 2.85, 0.34) * 0.8)),
        M && (te = Math.max(te, m(A, 1.15, 0.3) + m(A, 2.85, 0.34) * 0.8)),
        (te *= 1 - 0.75 * N));
      let ne = x ? 1 - L(0, 1.1, k) : 0,
        re = x ? (0.6 + 0.4 * L(0, 4.2, k)) * t(i, s, 0.42, 1.9) : 1;
      u.setHex(6250332)
        .lerp(p.setHex(6973797), C)
        .multiplyScalar(
          (0.95 + 0.1 * S) *
            (1 - 0.12 * te) *
            (1 - 0.15 * ne) *
            (1 + 0.06 * N) *
            re,
        );
      let ie = Math.min(l.length - 2, Math.floor(T * (l.length - 1)));
      (f.setHex(l[ie]).lerp(p.setHex(l[ie + 1]), w),
        f.lerp(p.setHex(8353384), L(16, 46, Math.abs(h))),
        f.lerp(p.setHex(9142114), b * 0.6),
        f.multiplyScalar(0.9 + 0.2 * E),
        p.copy(f).lerp(u, v),
        (y[d * 3] = p.r),
        (y[d * 3 + 1] = p.g),
        (y[d * 3 + 2] = p.b));
    }
  let b = new Uint32Array((o - 1) * (o - 1) * 6),
    x = 0;
  for (let e = 0; e < o - 1; e++)
    for (let t = 0; t < o - 1; t++) {
      let n = e * o + t,
        r = n + 1,
        i = n + o,
        a = i + 1;
      ((b[x++] = n),
        (b[x++] = i),
        (b[x++] = r),
        (b[x++] = r),
        (b[x++] = i),
        (b[x++] = a));
    }
  let S = new d();
  (S.setAttribute(`position`, new s(g, 3)),
    S.setAttribute(`color`, new s(y, 3)),
    S.setIndex(new s(b, 1)),
    S.computeVertexNormals());
  let C = new v({
      color: 16777215,
      vertexColors: !0,
      flatShading: !0,
      roughness: 1,
      metalness: 0,
      polygonOffset: !0,
      polygonOffsetFactor: -4,
      polygonOffsetUnits: -4,
    }),
    w = new h(S, C);
  return (
    (w.name = `envGround`),
    (w.receiveShadow = !0),
    (w.castShadow = !1),
    { mesh: w, material: C, hAt: c, verts: o * o }
  );
}
function bn(e, t, n) {
  let r = rt(e.fork(`pave`)),
    i = (e, t) => {
      let n = Math.sin(e * 127.1 + t * 311.7) * 43758.5453;
      return n - Math.floor(n);
    },
    a = [],
    o = [],
    c = [],
    l = [],
    u = 0,
    f = new _(),
    p = (e, t, i, a, o) => {
      let s = r(e * 0.11 + 5, t * 0.11 - 2, 0.5) - 0.5,
        c = n(e, t, 0.46, 2.1);
      return (
        f.setHex(i).multiplyScalar((1 + 0.09 * s) * a * c * (o ? 1.06 : 1)),
        f
      );
    },
    m = (e, t, n, r, s, d, f = null) => {
      for (let m = 0; m < r.length - 1; m++)
        for (let h = 0; h < n.length - 1; h++) {
          let g = e + n[h],
            _ = e + n[h + 1],
            v = t + r[m],
            y = t + r[m + 1],
            b = 0.9 + 0.2 * i(h + d, m - d),
            x = h === 0 || m === 0 || h === n.length - 2 || m === r.length - 2,
            S = f ? f(h, m, n.length - 1, r.length - 1) : s,
            C = [
              [g, v],
              [_, v],
              [_, y],
              [g, y],
            ];
          for (let [e, t] of C) {
            let n = p(e, t, S, b, x);
            (a.push(e, Lt, t), o.push(n.r, n.g, n.b), l.push(0, 1, 0));
          }
          (c.push(u, u + 2, u + 1, u, u + 3, u + 2), (u += 4));
        }
    },
    g = (e, t, n) => {
      let r = -0.08000000000000002;
      a.push(
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
      for (let e = 0; e < 4; e++) (o.push(0.2, 0.2, 0.2), l.push(0, -1, 0));
      (c.push(u, u + 1, u + 2, u, u + 2, u + 3), (u += 4));
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
      for (let [[e, t], [n, s], d] of i) {
        let i = p(e, t, 10986131, 1, !1).clone(),
          f = p(n, s, 10986131, 1, !1).clone();
        (a.push(e, Lt, t, n, Lt, s, n, r, s, e, r, t),
          o.push(
            i.r,
            i.g,
            i.b,
            f.r,
            f.g,
            f.b,
            f.r * 0.7,
            f.g * 0.7,
            f.b * 0.7,
            i.r * 0.7,
            i.g * 0.7,
            i.b * 0.7,
          ));
        for (let e = 0; e < 4; e++) l.push(d[0], d[1], d[2]);
        (c.push(u, u + 2, u + 1, u, u + 3, u + 2), (u += 4));
      }
    },
    y = [-17.75, -16.9, -15.2, -11.4, -5.7, 0, 5.7, 11.4, 15.2, 16.9, It],
    b = [];
  for (let e = 0; e <= 16; e++) b.push(-17.75 + (Ft / 16) * e);
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
      ? m(e.cx, e.cz, b, b, 11117718, t * 3 + 11, (e, t, n) => S(e, t, n))
      : m(e.cx, e.cz, y, y, 10130826, t * 3 + 11, x),
      g(e.cx, e.cz, It));
  });
  let C = new d();
  (C.setAttribute(`position`, new s(new Float32Array(a), 3)),
    C.setAttribute(`color`, new s(new Float32Array(o), 3)),
    C.setAttribute(`normal`, new s(new Float32Array(l), 3)),
    C.setIndex(
      a.length / 3 > 65535
        ? new s(new Uint32Array(c), 1)
        : new s(new Uint16Array(c), 1),
    ));
  let w = new v({
    color: 16777215,
    vertexColors: !0,
    flatShading: !0,
    roughness: 0.95,
    metalness: 0,
  });
  w.shadowSide = 1;
  let T = new h(C, w);
  return (
    (T.name = `envPavement`),
    (T.receiveShadow = !0),
    (T.castShadow = !0),
    { mesh: T, material: w, verts: a.length / 3 }
  );
}
