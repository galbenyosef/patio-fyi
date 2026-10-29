// assets__yard-dressing-view-CwP6m0Hr 28 — math
// Lines 7947-8266 of readable/assets__yard-dressing-view-CwP6m0Hr.pretty.js (statement-aligned).
function vi(e, t = {}) {
  let n = U(e),
    r = new C(),
    i = t.season === `fall`,
    a = t.oval ?? n.chance(0.4),
    o = n.pick([1.22, 1.32, 1.32]),
    s = a
      ? n.pick([3.7, 3.7, 4.6])
      : (t.diameter ?? n.pick([4.6, 5.5, 6.1, 6.7, 7.3])),
    c = a ? Math.max(s + 1.8, n.pick([5.5, 6.4, 7.3])) : s,
    u = (c - s) / 2,
    d = s / 2,
    f = Vr(c, s, 96),
    p = zr(f),
    m = 4 * u + Er * d,
    h = n.int(0, 4),
    _ = H(n.pick([15789800, 10133154, 13154458, 3820122, 5917242]), 0.5);
  Nr(
    r,
    Fr(
      f,
      () => o,
      () => 0.02,
      !0,
      1.6,
    ),
    gi(h),
  );
  let v = n.int(0, 2),
    y = Br(f, -0.025, p);
  (Nr(
    r,
    Fr(
      y,
      () => o - 0.01,
      () => 0.02,
      !0,
      1.6,
    ),
    _i(v),
    !1,
  ),
    Nr(
      r,
      Ir(y, () => 0.025, 4, 1.6),
      _i(v),
      !1,
    ));
  let b = Math.round(m / 1.25),
    x = H(Se(_.color.getHex(), 0.9), 0.5, 0.2);
  for (let e = 0; e < b; e++) {
    let t = Math.round((e * 96) / b) % 96,
      [n, i] = f[t],
      [s, c] = p[t],
      l = Math.atan2(s, c);
    (V(r, 0.1, o, 0.045, x, n + s * 0.03, o / 2, i + c * 0.03, 0, l, 0),
      F(
        r,
        0.2,
        0.035,
        0.26,
        0.012,
        _,
        n + s * 0.05,
        o + 0.03,
        i + c * 0.05,
        0,
        l,
        0,
      ),
      V(r, 0.14, 0.03, 0.12, x, n + s * 0.03, 0.015, i + c * 0.03, 0, l, 0),
      a &&
        Math.abs(n) < u - 0.2 &&
        (N(
          r,
          [n + s * 0.06, 0.95, i + c * 0.06],
          [n + s * 0.95, 0.03, i + c * 0.95],
          0.02,
          x,
          6,
        ),
        V(r, 0.18, 0.02, 0.18, x, n + s * 0.95, 0.01, i + c * 0.95, 0, l, 0)));
  }
  (Nr(
    r,
    Rr(
      f.map(([e, t]) => [e, 0, t]),
      [
        [-0.045, o + 0.005],
        [0.13, o + 0.005],
        [0.13, o + 0.024],
        [-0.045, o + 0.024],
        [-0.045, o + 0.005],
      ],
      160,
      !0,
      !0,
    ),
    _,
  ),
    Nr(
      r,
      Rr(
        f.map(([e, t]) => [e, 0, t]),
        [
          [-0.005, 0],
          [0.05, 0],
          [0.05, 0.04],
          [-0.005, 0.04],
        ],
        120,
        !0,
        !0,
      ),
      x,
    ));
  let S = c / 2 + 1,
    w = fi(r, n, S, d * 0.45, -Math.PI / 2),
    T = (e) => Math.round((((e + Math.PI / 2) * d) / m) * 96) % 96,
    ee = T(-0.3),
    E = T(0.75),
    [D, O] = f[ee],
    [te, k] = f[E],
    [ne, re] = p[ee],
    A = Math.atan2(ne, re);
  (F(
    r,
    0.3,
    0.32,
    0.2,
    0.02,
    he(15263970),
    D + ne * 0.1,
    o - 0.16,
    O + re * 0.1,
    0,
    A,
    0,
  ),
    V(
      r,
      0.22,
      0.1,
      0.02,
      H(1714746, 0.5),
      D - ne * 0.002,
      o - 0.12,
      O - re * 0.002,
      0,
      A,
      0,
    ),
    Z(
      r,
      0.03,
      0.03,
      0.09,
      he(15263970),
      X(te, o - 0.5, k),
      X(p[E][0], 0, p[E][1]),
      12,
    ));
  let ie = (e, t, n, i, a, o, s) =>
    ei(
      r,
      [
        [e + n * 0.09, a, t + i * 0.09],
        [e + n * 0.22, a - 0.2, t + i * 0.22],
        [e + n * 0.32, 0.3, t + i * 0.32],
        [e + n * 0.45, 0.06, t + i * 0.45],
        o.clone().addScaledVector(w.dir, 0.4).setY(0.06),
        o
          .clone()
          .addScaledVector(w.dir, 0.18)
          .setY(o.y * 0.7),
        o,
      ],
      0.02,
      s,
      14,
      10,
    );
  if (i) {
    let t = H(n.pick([1976890, 1710618, 2771498, 2767466]), 0.7, 0, {
        side: Tr,
      }),
      i = Br(f, 0.1, p),
      a = n.range(0.35, 0.5),
      u = n() * Er,
      m = (e, t) => Math.min(1, Math.hypot(e / (c / 2 + 0.1), t / (d + 0.1))),
      h = (c / 2) * Math.cos(u) * 0.55,
      _ = Math.sin(u) * d * 0.55,
      v = (e, t) => {
        let n = m(e, t);
        return (
          o +
          0.06 -
          a * (1 - n ** 4) +
          0.3 * Math.exp(-((e / (c / 2)) ** 2 + (t / d) ** 2) / 0.05) -
          0.08 * Math.exp(-((e - h) ** 2 + (t - _) ** 2) / 0.5) * (1 - n)
        );
      };
    (Nr(r, Ir(i, v, 16, 1), t, !1),
      Nr(
        r,
        Fr(
          i,
          () => o + 0.06,
          () => o - 0.24,
          !0,
          1,
        ),
        t,
        !1,
      ),
      Nr(
        r,
        new l(
          new g(
            Br(f, 0.11, p).map(([e, t]) => X(e, o - 0.12, t)),
            !0,
          ),
          160,
          0.006,
          5,
          !0,
        ),
        Or(),
        !1,
      ));
    let y = v(h, _) + 0.04,
      b = Gr(r, v, h, _, y),
      x = Math.max(...b.map(([e, t]) => Math.hypot(e - h, t - _)));
    (Ur(
      K(
        r,
        { w: c, d: s, inside: (e, t) => Hr(i, e, t) },
        { count: n.int(120, 240), seed: e + 5 },
      ),
      (e, t) =>
        (Math.hypot(e - h, t - _) < x ? Math.max(v(e, t), y) : v(e, t)) + 0.012,
    ),
      K(
        r,
        { w: c + 3, d: s + 3, inside: (e, t) => !Hr(Br(f, 0.25, p), e, t) },
        { count: n.int(60, 120), seed: e + 6, clump: 0.4 },
      ));
  } else {
    let e = H(n.pick([1981034, 1710618, 2775712]), 0.6);
    (ie(D, O, ne, re, o - 0.32, w.inlet, e),
      ie(te, k, p[E][0], p[E][1], o - 0.5, w.outlet, e),
      Qe(
        r,
        Ir(y, () => 0, 4, 1),
        0,
        o - 0.2,
        Ze(n.pick([3122888, 3846336]), { opacity: 0.66, scale: 1.6 }),
      ));
    let t = new C(),
      i = he(n.pick([15263456, 10133670, 3824266]));
    (t.position.set(a ? n.range(-u, u) * 0.6 : 0, 0, d),
      r.add(t),
      F(t, 0.62, 0.05, 0.62, 0.02, i, 0, o + 0.19, 0));
    for (let e of [1, -1])
      for (let n of [-0.27, 0.27])
        (N(
          t,
          [n, o + 0.17, e * 0.28],
          [n, e > 0 ? 0 : 0.03, e * 0.95],
          0.028,
          i,
          10,
        ),
          L(
            t,
            [
              [n, o + 0.2, e * 0.28],
              [n, o + 0.75, e * 0.2],
              [n, o + 0.8, 0],
              [n, o + 0.75, -e * 0.05],
            ],
            0.02,
            i,
            16,
            8,
          ));
    for (let e of [1, -1])
      for (let n = 1; n <= 3; n++) {
        let r = n / 4,
          a = o + 0.17 - (o + 0.17) * r;
        F(t, 0.52, 0.035, 0.14, 0.01, i, 0, a, e * (0.28 + 0.67 * r));
      }
  }
  let ae = Br(f, 0.3, p);
  return R(r, {
    pool: { w: c, d: s, h: o },
    clear: (e, t) =>
      Hr(ae, e, t) || (Math.abs(e - S) < 0.6 && Math.abs(t - d * 0.45) < 0.8),
  });
}
var yi = (e) =>
  je(
    `tubcab` + e,
    (t, n, r) => {
      let i = U(61);
      ((t.fillStyle = e), t.fillRect(0, 0, n, r));
      for (let e = 0; e < 7; e++) {
        ((t.fillStyle = `rgba(0,0,0,0.35)`), t.fillRect(0, (e * r) / 7, n, 3));
        for (let a = 0; a < 40; a++)
          ((t.fillStyle = `rgba(${i() < 0.5 ? `0,0,0` : `255,240,220`},0.06)`),
            t.fillRect(
              i() * n,
              (e * r) / 7 + 4 + i() * (r / 7 - 8),
              40 + i() * 120,
              1 + i() * 2,
            ));
      }
    },
    { rough: 0.8 },
  );
