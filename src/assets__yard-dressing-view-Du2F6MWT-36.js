// assets__yard-dressing-view-Du2F6MWT 36 — math
// Lines 10288-10445 of readable/assets__yard-dressing-view-Du2F6MWT.pretty.js (statement-aligned).
function Gi(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = n.pick([`hook`, `hook`, `frame`]),
    a = n.chance(0.3),
    o = H(1710618, 0.5, 0.5),
    s;
  if (i === `hook`) s = Ii(r, n, n.range(1.7, 2), [1], o)[0];
  else {
    let e = G(n.pick([W.cedar, W.teak, W.brown]), 0.8, 11),
      t = n.range(1.6, 1.9);
    B(r, 0.07, t, 0.07, e, 0, 0, 0);
    for (let t = 0; t < 4; t++)
      V(
        r,
        0.5,
        0.04,
        0.06,
        e,
        Math.cos((t * Math.PI) / 2) * 0.22,
        0.02,
        Math.sin((t * Math.PI) / 2) * 0.22,
        0,
        (t * Math.PI) / 2,
        0,
      );
    V(r, 0.5, 0.06, 0.06, e, 0.22, t - 0.03, 0);
    let i = V(r, 0.04, 0.2, 0.03, e, 0.06, t - 0.13, 0, 0, 0, 0.7);
    ((i.castShadow = !0),
      (s = X(0.4, t - 0.065, 0)),
      N(r, [0.4, t - 0.06, 0], [0.4, t - 0.1, 0], 0.003, Or()),
      (s.y -= 0.04));
  }
  let c = new D();
  (c.position.copy(s), r.add(c));
  let l = a
      ? H(13150312, 0.6)
      : H(
          n.pick([12633288, 2763308, 9071162, 12088115, 3824282, 5925450]),
          0.28,
          0.9,
        ),
    u = a || n.chance(0.6) ? G(n.pick([W.teak, W.cedar, W.brown]), 0.7, 12) : l,
    f = n.int(5, 8),
    p = n.range(0.07, 0.11),
    m = n.range(0.013, 0.02) * (a ? 1.4 : 1),
    h = n.range(0.5, 0.85);
  (I(c, new d(0.012, 0.0025, 5, 12), Or(), 0, -0.012, 0),
    N(c, [0, -0.02, 0], [0, -0.1, 0], 0.0012, H(2763306, 0.8), 4),
    z(c, p + 0.03, p + 0.03, 0.02, u, 0, -0.1 - 0.02, 0, 24));
  let g = [],
    _ = H(2763306, 0.8);
  for (let e = 0; e < f; e++) {
    let t = (e / f) * Er,
      r = Math.cos(t) * p,
      i = Math.sin(t) * p,
      o = h * (1 - (0.45 * e) / (f - 1)),
      s = new D();
    if (
      (s.position.set(r, -0.1 - 0.02, i),
      c.add(s),
      N(s, [0, 0, 0], [0, -0.05, 0], 8e-4, _, 3),
      z(s, m, m, o, l, 0, -0.05 - o, 0, a ? 10 : 14),
      a)
    )
      for (let e = 1; e < 3; e++)
        z(
          s,
          m * 1.12,
          m * 1.12,
          0.008,
          H(11044936, 0.6),
          0,
          -0.05 - (o * e) / 3,
          0,
          10,
        );
    g.push({
      o: s,
      ax: n.range(0.04, 0.09),
      az: n.range(0.04, 0.09),
      w: n.range(1.5, 2.6),
      ph: n() * Er,
    });
  }
  let v = new D();
  (v.position.set(0, -0.1 - 0.02, 0), c.add(v));
  let y = -0.05 - h * 0.35;
  (N(v, [0, 0, 0], [0, y - 0.25 - h * 0.3, 0], 9e-4, _, 3),
    z(v, p * 0.55, p * 0.55, 0.012, u, 0, y, 0, 20));
  let b = y - 0.25 - h * 0.3,
    x = a
      ? [
          [-0.05, 0],
          [0.05, 0],
          [0.06, -0.2],
          [-0.06, -0.2],
        ]
      : n.pick([
          [
            [0, 0],
            [0.06, -0.06],
            [0.05, -0.16],
            [0, -0.22],
            [-0.05, -0.16],
            [-0.06, -0.06],
          ],
          [
            [0, 0],
            [0.07, -0.11],
            [0, -0.22],
            [-0.07, -0.11],
          ],
          [
            [-0.03, 0],
            [0.03, 0],
            [0.07, -0.18],
            [-0.07, -0.18],
          ],
        ]);
  return (
    be(v, x, 0.008, u, 0, b, -0.004),
    g.push({ o: v, ax: 0.18, az: 0.22, w: 1.1, ph: n() * Er }),
    (c.userData.tick = (e) => {
      ((c.rotation.z = 0.05 * Math.sin(e * 0.9) + 0.02 * Math.sin(e * 2.3)),
        (c.rotation.x = 0.035 * Math.sin(e * 0.7 + 1)),
        (c.rotation.y = 0.2 * Math.sin(e * 0.23)));
      for (let t of g)
        ((t.o.rotation.x = t.ax * Math.sin(e * t.w + t.ph)),
          (t.o.rotation.z = t.az * Math.sin(e * t.w * 1.13 + t.ph * 2)));
    }),
    t.season === `fall` && K(r, { w: 1.2, d: 1.2 }, { count: 25, seed: e + 2 }),
    R(r, { keepGrass: !0 })
  );
}
function Ki(e, t, n, r, i) {
  let a = new D(),
    o = je(
      `cinder`,
      (e, t, n) =>
        Ne(
          e,
          t,
          n,
          `#9a9890`,
          [`#8a887e`, `#aaa89e`, `#7a786e`, `#b4b2a8`],
          42,
          2e4,
          [1, 3],
        ),
      { rough: 1 },
    );
  (a.position.set(t, n, r), (a.rotation.y = i), e.add(a));
  for (let e of [-1, 1])
    (B(a, 0.4, 0.2, 0.035, o, 0, 0, e * 0.0825),
      B(a, 0.035, 0.2, 0.13, o, e * 0.1825, 0, 0));
  return (B(a, 0.03, 0.2, 0.13, o, 0, 0, 0), a);
}
