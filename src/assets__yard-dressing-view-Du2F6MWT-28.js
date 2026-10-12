// assets__yard-dressing-view-Du2F6MWT 28 — math
// Lines 7947-8266 of readable/assets__yard-dressing-view-Du2F6MWT.pretty.js (statement-aligned).
function vi(t, n = {}) {
  let r = U(t),
    i = new D(),
    a = n.season === `fall`,
    o = n.oval ?? r.chance(0.4),
    s = r.pick([1.22, 1.32, 1.32]),
    c = o
      ? r.pick([3.7, 3.7, 4.6])
      : (n.diameter ?? r.pick([4.6, 5.5, 6.1, 6.7, 7.3])),
    l = o ? Math.max(c + 1.8, r.pick([5.5, 6.4, 7.3])) : c,
    u = (l - c) / 2,
    d = c / 2,
    p = Vr(l, c, 96),
    m = zr(p),
    h = 4 * u + Er * d,
    g = r.int(0, 4),
    _ = H(r.pick([15789800, 10133154, 13154458, 3820122, 5917242]), 0.5);
  Nr(
    i,
    Fr(
      p,
      () => s,
      () => 0.02,
      !0,
      1.6,
    ),
    gi(g),
  );
  let v = r.int(0, 2),
    y = Br(p, -0.025, m);
  (Nr(
    i,
    Fr(
      y,
      () => s - 0.01,
      () => 0.02,
      !0,
      1.6,
    ),
    _i(v),
    !1,
  ),
    Nr(
      i,
      Ir(y, () => 0.025, 4, 1.6),
      _i(v),
      !1,
    ));
  let b = Math.round(h / 1.25),
    x = H(Se(_.color.getHex(), 0.9), 0.5, 0.2);
  for (let e = 0; e < b; e++) {
    let t = Math.round((e * 96) / b) % 96,
      [n, r] = p[t],
      [a, c] = m[t],
      l = Math.atan2(a, c);
    (V(i, 0.1, s, 0.045, x, n + a * 0.03, s / 2, r + c * 0.03, 0, l, 0),
      F(
        i,
        0.2,
        0.035,
        0.26,
        0.012,
        _,
        n + a * 0.05,
        s + 0.03,
        r + c * 0.05,
        0,
        l,
        0,
      ),
      V(i, 0.14, 0.03, 0.12, x, n + a * 0.03, 0.015, r + c * 0.03, 0, l, 0),
      o &&
        Math.abs(n) < u - 0.2 &&
        (N(
          i,
          [n + a * 0.06, 0.95, r + c * 0.06],
          [n + a * 0.95, 0.03, r + c * 0.95],
          0.02,
          x,
          6,
        ),
        V(i, 0.18, 0.02, 0.18, x, n + a * 0.95, 0.01, r + c * 0.95, 0, l, 0)));
  }
  (Nr(
    i,
    Rr(
      p.map(([e, t]) => [e, 0, t]),
      [
        [-0.045, s + 0.005],
        [0.13, s + 0.005],
        [0.13, s + 0.024],
        [-0.045, s + 0.024],
        [-0.045, s + 0.005],
      ],
      160,
      !0,
      !0,
    ),
    _,
  ),
    Nr(
      i,
      Rr(
        p.map(([e, t]) => [e, 0, t]),
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
  let S = l / 2 + 1,
    C = fi(i, r, S, d * 0.45, -Math.PI / 2),
    ee = (e) => Math.round((((e + Math.PI / 2) * d) / h) * 96) % 96,
    w = ee(-0.3),
    T = ee(0.75),
    [E, O] = p[w],
    [te, ne] = p[T],
    [re, ie] = m[w],
    k = Math.atan2(re, ie);
  (F(
    i,
    0.3,
    0.32,
    0.2,
    0.02,
    he(15263970),
    E + re * 0.1,
    s - 0.16,
    O + ie * 0.1,
    0,
    k,
    0,
  ),
    V(
      i,
      0.22,
      0.1,
      0.02,
      H(1714746, 0.5),
      E - re * 0.002,
      s - 0.12,
      O - ie * 0.002,
      0,
      k,
      0,
    ),
    Z(
      i,
      0.03,
      0.03,
      0.09,
      he(15263970),
      X(te, s - 0.5, ne),
      X(m[T][0], 0, m[T][1]),
      12,
    ));
  let ae = (e, t, n, r, a, o, s) =>
    ei(
      i,
      [
        [e + n * 0.09, a, t + r * 0.09],
        [e + n * 0.22, a - 0.2, t + r * 0.22],
        [e + n * 0.32, 0.3, t + r * 0.32],
        [e + n * 0.45, 0.06, t + r * 0.45],
        o.clone().addScaledVector(C.dir, 0.4).setY(0.06),
        o
          .clone()
          .addScaledVector(C.dir, 0.18)
          .setY(o.y * 0.7),
        o,
      ],
      0.02,
      s,
      14,
      10,
    );
  if (a) {
    let n = H(r.pick([1976890, 1710618, 2771498, 2767466]), 0.7, 0, {
        side: Tr,
      }),
      a = Br(p, 0.1, m),
      o = r.range(0.35, 0.5),
      u = r() * Er,
      h = (e, t) => Math.min(1, Math.hypot(e / (l / 2 + 0.1), t / (d + 0.1))),
      g = (l / 2) * Math.cos(u) * 0.55,
      _ = Math.sin(u) * d * 0.55,
      v = (e, t) => {
        let n = h(e, t);
        return (
          s +
          0.06 -
          o * (1 - n ** 4) +
          0.3 * Math.exp(-((e / (l / 2)) ** 2 + (t / d) ** 2) / 0.05) -
          0.08 * Math.exp(-((e - g) ** 2 + (t - _) ** 2) / 0.5) * (1 - n)
        );
      };
    (Nr(i, Ir(a, v, 16, 1), n, !1),
      Nr(
        i,
        Fr(
          a,
          () => s + 0.06,
          () => s - 0.24,
          !0,
          1,
        ),
        n,
        !1,
      ),
      Nr(
        i,
        new f(
          new e(
            Br(p, 0.11, m).map(([e, t]) => X(e, s - 0.12, t)),
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
    let y = v(g, _) + 0.04,
      b = Gr(i, v, g, _, y),
      x = Math.max(...b.map(([e, t]) => Math.hypot(e - g, t - _)));
    (Ur(
      K(
        i,
        { w: l, d: c, inside: (e, t) => Hr(a, e, t) },
        { count: r.int(120, 240), seed: t + 5 },
      ),
      (e, t) =>
        (Math.hypot(e - g, t - _) < x ? Math.max(v(e, t), y) : v(e, t)) + 0.012,
    ),
      K(
        i,
        { w: l + 3, d: c + 3, inside: (e, t) => !Hr(Br(p, 0.25, m), e, t) },
        { count: r.int(60, 120), seed: t + 6, clump: 0.4 },
      ));
  } else {
    let e = H(r.pick([1981034, 1710618, 2775712]), 0.6);
    (ae(E, O, re, ie, s - 0.32, C.inlet, e),
      ae(te, ne, m[T][0], m[T][1], s - 0.5, C.outlet, e),
      Qe(
        i,
        Ir(y, () => 0, 4, 1),
        0,
        s - 0.2,
        Ze(r.pick([3122888, 3846336]), { opacity: 0.66, scale: 1.6 }),
      ));
    let t = new D(),
      n = he(r.pick([15263456, 10133670, 3824266]));
    (t.position.set(o ? r.range(-u, u) * 0.6 : 0, 0, d),
      i.add(t),
      F(t, 0.62, 0.05, 0.62, 0.02, n, 0, s + 0.19, 0));
    for (let e of [1, -1])
      for (let r of [-0.27, 0.27])
        (N(
          t,
          [r, s + 0.17, e * 0.28],
          [r, e > 0 ? 0 : 0.03, e * 0.95],
          0.028,
          n,
          10,
        ),
          L(
            t,
            [
              [r, s + 0.2, e * 0.28],
              [r, s + 0.75, e * 0.2],
              [r, s + 0.8, 0],
              [r, s + 0.75, -e * 0.05],
            ],
            0.02,
            n,
            16,
            8,
          ));
    for (let e of [1, -1])
      for (let r = 1; r <= 3; r++) {
        let i = r / 4,
          a = s + 0.17 - (s + 0.17) * i;
        F(t, 0.52, 0.035, 0.14, 0.01, n, 0, a, e * (0.28 + 0.67 * i));
      }
  }
  let oe = Br(p, 0.3, m);
  return R(i, {
    pool: { w: l, d: c, h: s },
    clear: (e, t) =>
      Hr(oe, e, t) || (Math.abs(e - S) < 0.6 && Math.abs(t - d * 0.45) < 0.8),
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
