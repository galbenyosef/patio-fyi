// assets__yard-dressing-view-CwP6m0Hr 26 — math
// Lines 7594-7875 of readable/assets__yard-dressing-view-CwP6m0Hr.pretty.js (statement-aligned).
function hi(e, t = {}) {
  let n = U(e),
    r = new C(),
    i = t.season === `fall`,
    a = (t.w ?? n.range(8, 10.5)) / 2,
    s = (t.d ?? n.range(4.2, 5.4)) / 2,
    c = n.range(0, 0.08),
    l = n.range(0, Er),
    u = n.range(0.03, 0.09),
    d = n.range(0, Er),
    f = n.range(0.16, 0.3),
    p = Math.PI / 2 + n.range(-0.45, 0.45),
    m = (e) => {
      let t = Math.atan2(Math.sin(e - p), Math.cos(e - p));
      return (
        1 +
        c * Math.cos(2 * e + l) +
        u * Math.cos(3 * e + d) -
        f * Math.exp((-t * t) / 0.35)
      );
    },
    h = Array.from({ length: 96 }, (e, t) => {
      let n = (t / 96) * Er,
        r = m(n);
      return [a * r * Math.cos(n), s * r * Math.sin(n)];
    }),
    g = zr(h),
    _ = (e, t) => Math.hypot(e / a, t / s) / m(Math.atan2(t / s, e / a)),
    v = 0.95,
    y = n.range(1.7, 2.3),
    b = (e) => v + (y - v) * Ar((a * 0.55 - e) / (a * 1.3)),
    x = Yr(n.pick(Jr)),
    S = qr(n.pick([`#dcebf0`, `#b8d4e0`, `#9ab8c8`, `#c8d8d4`, `#a8c0c8`]));
  (Nr(
    r,
    Fr(
      h,
      () => 0,
      () => -0.16,
      !0,
      1.2,
    ),
    x,
    !1,
  ),
    Nr(
      r,
      Fr(
        h,
        () => -0.16,
        (e) => -b(e),
        !0,
        2,
      ),
      S,
      !1,
    ),
    Nr(
      r,
      Ir(h, (e, t, n) => -b(e) - 0.15 * (1 - n * n), 8, 2),
      S,
      !1,
    ));
  let w = n.range(0.35, 0.5),
    T = n.pick([
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
        ...i.map((e) => [h[e][0] - g[e][0] * 0.04, h[e][1] - g[e][1] * 0.04]),
        ...i
          .slice()
          .reverse()
          .map((e) => {
            let t = w + a + n.range(-0.02, 0.02);
            return [h[e][0] + g[e][0] * t, h[e][1] + g[e][1] * t];
          }),
      ],
      s = o.reduce((e, t) => e + t[0], 0) / o.length,
      c = o.reduce((e, t) => e + t[1], 0) / o.length;
    (Lr(
      r,
      o.map(([e, t]) => [s + (e - s) * 0.985, c + (t - c) * 0.985]),
      0.05 + n.range(0, 0.012),
      H(n.pick(T), 0.9),
      0,
      [],
      1,
    ),
      (e = t));
  }
  let ee = n.range(1.2, 2),
    E = t.deck ?? n.pick([`cool`, `concrete`, `pavers`, `travertine`]),
    D = a * 1.12 + ee,
    O = s * 1.12 + ee;
  if (
    (Lr(
      r,
      [
        [-D, -O],
        [D, -O],
        [D, O],
        [-D, O],
      ],
      0.032,
      Xr[E](),
      0,
      [Br(h, w - 0.06, g)],
      Zr[E],
    ),
    i || di(r, h[40][0], h[40][1], Math.atan2(g[40][0], g[40][1]), y - 0.3),
    Z(
      r,
      0.12,
      0.12,
      0.004,
      Ce(16773832, 0.6),
      X(h[48][0] - g[48][0] * 0.01, -0.62, h[48][1] - g[48][1] * 0.01),
      X(-g[48][0], 0, -g[48][1]),
      24,
    ),
    z(
      r,
      0.2,
      0.2,
      0.012,
      he(15263970),
      h[86][0] + g[86][0] * (w + 0.3),
      0.032,
      h[86][1] + g[86][1] * (w + 0.3),
      24,
    ),
    n.chance(0.6))
  ) {
    let e = Math.round(96 * (0.75 + n.range(-0.08, 0.08))) % 96,
      [t, a] = h[e],
      [s, c] = g[e],
      l = H(n.pick([9077368, 8024168, 10127992, 6973024]), 0.9, 0, {
        flatShading: !0,
      }),
      u = n.range(0.5, 0.85),
      d = Math.atan2(s, c);
    for (let e = 0; e < n.int(7, 11); e++) {
      let e = n.range(-1.6, 1.6),
        i = n.range(0.55, 1.3),
        o = n.range(0.25, 0.55) * (1.3 - i * 0.4);
      Kr(
        r,
        n,
        o,
        l,
        t + s * i + Math.cos(d) * e * 0.8,
        o * 0.45,
        a + c * i - Math.sin(d) * e * 0.8,
      );
    }
    if (
      (Kr(r, n, 0.42, l, t + s * 0.6, u * 0.45, a + c * 0.6),
      Kr(r, n, 0.36, l, t + s * 0.85, u * 0.7, a + c * 0.85),
      F(
        r,
        0.75,
        0.08,
        0.7,
        0.03,
        H(n.pick(T), 0.85),
        t + s * 0.12,
        u,
        a + c * 0.12,
        0,
        d,
        0,
      ),
      !i)
    ) {
      let e = X(t - s * 0.21, u + 0.02, a - c * 0.21),
        n = Math.cos(d),
        i = -Math.sin(d),
        l = Math.sqrt((u + 0.14) / 4.9),
        f = 0.75,
        p = (t, r, a) =>
          a.set(
            e.x - s * f * t + n * r,
            e.y - 4.9 * t * t,
            e.z - c * f * t + i * r,
          );
      et(
        r,
        150,
        l,
        (e, t, n) => (p(t * l, (jr(e * 0.37) - 0.5) * 0.46, n), 1.1 - t * 0.4),
        { size: 0.013, opacity: 0.55 },
      );
      let m = [];
      for (let e = 0; e <= 8; e++) m.push(p((l * e) / 8, 0, X()));
      Nr(
        r,
        Rr(
          m,
          [
            [-0.24, 0],
            [0.24, 0],
          ],
          16,
        ),
        Ze(15661307, { opacity: 0.55, scale: 0.35, speed: 5 }),
        !1,
      );
      let h = Nr(
        r,
        new o(0.3, 20).rotateX(-Math.PI / 2),
        H(16777215, 0.4, 0, { transparent: !0, opacity: 0.45, depthWrite: !1 }),
        !1,
      );
      (p(l, 0, h.position),
        (h.position.y = -0.115),
        (h.scale.z = 0.6),
        (h.rotation.y = d),
        (h.userData.tick = (e) => {
          let t = 1 + Math.sin(e * 7) * 0.08 + Math.sin(e * 11.3) * 0.05;
          h.scale.set(t, 1, 0.6 * t);
        }));
    }
  }
  if (!i)
    Qe(
      r,
      Ir(h, () => 0, 3, 1),
      0,
      -0.12,
      Ze(n.pick([3122888, 3585220, 2789560]), { opacity: 0.62, scale: 1.8 }),
    );
  else {
    let t = H(n.pick([3033654, 2241618, 6971464]), 0.95, 0, { side: Tr }),
      i = Br(h, 0.34, g),
      o = n.range(0.14, 0.24),
      c = n.range(-a / 3, a / 3),
      l = n.range(-s / 4, s / 5),
      u = (e, t) => {
        let n = _(e, t);
        return n >= 1
          ? 0.066
          : 0.066 -
              (1 - n * n) *
                (o + 0.09 * Math.exp(-((e - c) ** 2 + (t - l) ** 2) / 0.6));
      };
    Nr(r, Ir(i, u, 14, 1), t, !1);
    let d = H(Se(t.color.getHex(), 0.7), 0.8, 0, { side: Tr }),
      f = [];
    for (let e = -a + 0.4; e < a; e += n.range(1.1, 1.4)) f.push(e);
    pi(r, u, (e, t) => Hr(i, e, t), f, s * 1.6, d, 0.034);
    let p = u(c, l) + 0.04,
      m = Gr(r, u, c, l, p),
      v = Math.max(...m.map(([e, t]) => Math.hypot(e - c, t - l)));
    (Ur(
      K(
        r,
        { w: a * 2.4, d: s * 2.4, inside: (e, t) => Hr(i, e, t) },
        { count: n.int(170, 300), seed: e + 5 },
      ),
      (e, t) =>
        (Math.hypot(e - c, t - l) < v ? Math.max(u(e, t), p) : u(e, t)) + 0.012,
    ),
      K(
        r,
        { w: D * 2, d: O * 2, inside: (e, t) => !Hr(i, e, t) },
        { count: n.int(80, 150), seed: e + 6, y: 0.06, clump: 0.3 },
      ));
  }
  return R(r, {
    sunk: !0,
    hole: h,
    pool: { w: a * 2, d: s * 2, deep: y, water: -0.12 },
    deck: [D * 2, O * 2],
  });
}
