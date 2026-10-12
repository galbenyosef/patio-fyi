// assets__yard-dressing-view-Du2F6MWT 26 — math
// Lines 7594-7875 of readable/assets__yard-dressing-view-Du2F6MWT.pretty.js (statement-aligned).
function hi(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = t.season === `fall`,
    a = (t.w ?? n.range(8, 10.5)) / 2,
    o = (t.d ?? n.range(4.2, 5.4)) / 2,
    s = n.range(0, 0.08),
    c = n.range(0, Er),
    l = n.range(0.03, 0.09),
    u = n.range(0, Er),
    d = n.range(0.16, 0.3),
    f = Math.PI / 2 + n.range(-0.45, 0.45),
    p = (e) => {
      let t = Math.atan2(Math.sin(e - f), Math.cos(e - f));
      return (
        1 +
        s * Math.cos(2 * e + c) +
        l * Math.cos(3 * e + u) -
        d * Math.exp((-t * t) / 0.35)
      );
    },
    m = Array.from({ length: 96 }, (e, t) => {
      let n = (t / 96) * Er,
        r = p(n);
      return [a * r * Math.cos(n), o * r * Math.sin(n)];
    }),
    h = zr(m),
    g = (e, t) => Math.hypot(e / a, t / o) / p(Math.atan2(t / o, e / a)),
    _ = 0.95,
    v = n.range(1.7, 2.3),
    y = (e) => _ + (v - _) * Ar((a * 0.55 - e) / (a * 1.3)),
    b = Yr(n.pick(Jr)),
    S = qr(n.pick([`#dcebf0`, `#b8d4e0`, `#9ab8c8`, `#c8d8d4`, `#a8c0c8`]));
  (Nr(
    r,
    Fr(
      m,
      () => 0,
      () => -0.16,
      !0,
      1.2,
    ),
    b,
    !1,
  ),
    Nr(
      r,
      Fr(
        m,
        () => -0.16,
        (e) => -y(e),
        !0,
        2,
      ),
      S,
      !1,
    ),
    Nr(
      r,
      Ir(m, (e, t, n) => -y(e) - 0.15 * (1 - n * n), 8, 2),
      S,
      !1,
    ));
  let C = n.range(0.35, 0.5),
    ee = n.pick([
      [13150328, 12097640, 14204048, 11045474],
      [9080984, 8028296, 10133668, 7239294],
      [11565656, 13146736, 10119754, 13674624],
    ]);
  for (let e = 0; e < 96;) {
    let t = Math.min(96, e + n.int(3, 5)),
      i = [];
    for (let n = e; n <= t; n++) i.push(n % 96);
    let a = n.range(-0.05, 0.07),
      o = [
        ...i.map((e) => [m[e][0] - h[e][0] * 0.04, m[e][1] - h[e][1] * 0.04]),
        ...i
          .slice()
          .reverse()
          .map((e) => {
            let t = C + a + n.range(-0.02, 0.02);
            return [m[e][0] + h[e][0] * t, m[e][1] + h[e][1] * t];
          }),
      ],
      s = o.reduce((e, t) => e + t[0], 0) / o.length,
      c = o.reduce((e, t) => e + t[1], 0) / o.length;
    (Lr(
      r,
      o.map(([e, t]) => [s + (e - s) * 0.985, c + (t - c) * 0.985]),
      0.05 + n.range(0, 0.012),
      H(n.pick(ee), 0.9),
      0,
      [],
      1,
    ),
      (e = t));
  }
  let w = n.range(1.2, 2),
    T = t.deck ?? n.pick([`cool`, `concrete`, `pavers`, `travertine`]),
    E = a * 1.12 + w,
    O = o * 1.12 + w;
  if (
    (Lr(
      r,
      [
        [-E, -O],
        [E, -O],
        [E, O],
        [-E, O],
      ],
      0.032,
      Xr[T](),
      0,
      [Br(m, C - 0.06, h)],
      Zr[T],
    ),
    i || di(r, m[40][0], m[40][1], Math.atan2(h[40][0], h[40][1]), v - 0.3),
    Z(
      r,
      0.12,
      0.12,
      0.004,
      Ce(16773832, 0.6),
      X(m[48][0] - h[48][0] * 0.01, -0.62, m[48][1] - h[48][1] * 0.01),
      X(-h[48][0], 0, -h[48][1]),
      24,
    ),
    z(
      r,
      0.2,
      0.2,
      0.012,
      he(15263970),
      m[86][0] + h[86][0] * (C + 0.3),
      0.032,
      m[86][1] + h[86][1] * (C + 0.3),
      24,
    ),
    n.chance(0.6))
  ) {
    let e = Math.round(96 * (0.75 + n.range(-0.08, 0.08))) % 96,
      [t, a] = m[e],
      [o, s] = h[e],
      c = H(n.pick([9077368, 8024168, 10127992, 6973024]), 0.9, 0, {
        flatShading: !0,
      }),
      l = n.range(0.5, 0.85),
      u = Math.atan2(o, s);
    for (let e = 0; e < n.int(7, 11); e++) {
      let e = n.range(-1.6, 1.6),
        i = n.range(0.55, 1.3),
        l = n.range(0.25, 0.55) * (1.3 - i * 0.4);
      Kr(
        r,
        n,
        l,
        c,
        t + o * i + Math.cos(u) * e * 0.8,
        l * 0.45,
        a + s * i - Math.sin(u) * e * 0.8,
      );
    }
    if (
      (Kr(r, n, 0.42, c, t + o * 0.6, l * 0.45, a + s * 0.6),
      Kr(r, n, 0.36, c, t + o * 0.85, l * 0.7, a + s * 0.85),
      F(
        r,
        0.75,
        0.08,
        0.7,
        0.03,
        H(n.pick(ee), 0.85),
        t + o * 0.12,
        l,
        a + s * 0.12,
        0,
        u,
        0,
      ),
      !i)
    ) {
      let e = X(t - o * 0.21, l + 0.02, a - s * 0.21),
        n = Math.cos(u),
        i = -Math.sin(u),
        c = Math.sqrt((l + 0.14) / 4.9),
        d = 0.75,
        f = (t, r, a) =>
          a.set(
            e.x - o * d * t + n * r,
            e.y - 4.9 * t * t,
            e.z - s * d * t + i * r,
          );
      et(
        r,
        150,
        c,
        (e, t, n) => (f(t * c, (jr(e * 0.37) - 0.5) * 0.46, n), 1.1 - t * 0.4),
        { size: 0.013, opacity: 0.55 },
      );
      let p = [];
      for (let e = 0; e <= 8; e++) p.push(f((c * e) / 8, 0, X()));
      Nr(
        r,
        Rr(
          p,
          [
            [-0.24, 0],
            [0.24, 0],
          ],
          16,
        ),
        Ze(15661307, { opacity: 0.55, scale: 0.35, speed: 5 }),
        !1,
      );
      let m = Nr(
        r,
        new x(0.3, 20).rotateX(-Math.PI / 2),
        H(16777215, 0.4, 0, { transparent: !0, opacity: 0.45, depthWrite: !1 }),
        !1,
      );
      (f(c, 0, m.position),
        (m.position.y = -0.115),
        (m.scale.z = 0.6),
        (m.rotation.y = u),
        (m.userData.tick = (e) => {
          let t = 1 + Math.sin(e * 7) * 0.08 + Math.sin(e * 11.3) * 0.05;
          m.scale.set(t, 1, 0.6 * t);
        }));
    }
  }
  if (!i)
    Qe(
      r,
      Ir(m, () => 0, 3, 1),
      0,
      -0.12,
      Ze(n.pick([3122888, 3585220, 2789560]), { opacity: 0.62, scale: 1.8 }),
    );
  else {
    let t = H(n.pick([3033654, 2241618, 6971464]), 0.95, 0, { side: Tr }),
      i = Br(m, 0.34, h),
      s = n.range(0.14, 0.24),
      c = n.range(-a / 3, a / 3),
      l = n.range(-o / 4, o / 5),
      u = (e, t) => {
        let n = g(e, t);
        return n >= 1
          ? 0.066
          : 0.066 -
              (1 - n * n) *
                (s + 0.09 * Math.exp(-((e - c) ** 2 + (t - l) ** 2) / 0.6));
      };
    Nr(r, Ir(i, u, 14, 1), t, !1);
    let d = H(Se(t.color.getHex(), 0.7), 0.8, 0, { side: Tr }),
      f = [];
    for (let e = -a + 0.4; e < a; e += n.range(1.1, 1.4)) f.push(e);
    pi(r, u, (e, t) => Hr(i, e, t), f, o * 1.6, d, 0.034);
    let p = u(c, l) + 0.04,
      _ = Gr(r, u, c, l, p),
      v = Math.max(..._.map(([e, t]) => Math.hypot(e - c, t - l)));
    (Ur(
      K(
        r,
        { w: a * 2.4, d: o * 2.4, inside: (e, t) => Hr(i, e, t) },
        { count: n.int(170, 300), seed: e + 5 },
      ),
      (e, t) =>
        (Math.hypot(e - c, t - l) < v ? Math.max(u(e, t), p) : u(e, t)) + 0.012,
    ),
      K(
        r,
        { w: E * 2, d: O * 2, inside: (e, t) => !Hr(i, e, t) },
        { count: n.int(80, 150), seed: e + 6, y: 0.06, clump: 0.3 },
      ));
  }
  return R(r, {
    sunk: !0,
    hole: m,
    pool: { w: a * 2, d: o * 2, deep: v, water: -0.12 },
    deck: [E * 2, O * 2],
  });
}
