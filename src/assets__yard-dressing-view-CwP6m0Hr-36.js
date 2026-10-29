// assets__yard-dressing-view-CwP6m0Hr 36 — math
// Lines 10288-10445 of readable/assets__yard-dressing-view-CwP6m0Hr.pretty.js (statement-aligned).
function Gi(e, t = {}) {
  let n = U(e),
    r = new C(),
    a = n.pick([`hook`, `hook`, `frame`]),
    o = n.chance(0.3),
    s = H(1710618, 0.5, 0.5),
    c;
  if (a === `hook`) c = Ii(r, n, n.range(1.7, 2), [1], s)[0];
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
      (c = X(0.4, t - 0.065, 0)),
      N(r, [0.4, t - 0.06, 0], [0.4, t - 0.1, 0], 0.003, Or()),
      (c.y -= 0.04));
  }
  let l = new C();
  (l.position.copy(c), r.add(l));
  let u = o
      ? H(13150312, 0.6)
      : H(
          n.pick([12633288, 2763308, 9071162, 12088115, 3824282, 5925450]),
          0.28,
          0.9,
        ),
    d = o || n.chance(0.6) ? G(n.pick([W.teak, W.cedar, W.brown]), 0.7, 12) : u,
    f = n.int(5, 8),
    p = n.range(0.07, 0.11),
    m = n.range(0.013, 0.02) * (o ? 1.4 : 1),
    h = n.range(0.5, 0.85);
  (I(l, new i(0.012, 0.0025, 5, 12), Or(), 0, -0.012, 0),
    N(l, [0, -0.02, 0], [0, -0.1, 0], 0.0012, H(2763306, 0.8), 4),
    z(l, p + 0.03, p + 0.03, 0.02, d, 0, -0.1 - 0.02, 0, 24));
  let g = [],
    _ = H(2763306, 0.8);
  for (let e = 0; e < f; e++) {
    let t = (e / f) * Er,
      r = Math.cos(t) * p,
      i = Math.sin(t) * p,
      a = h * (1 - (0.45 * e) / (f - 1)),
      s = new C();
    if (
      (s.position.set(r, -0.1 - 0.02, i),
      l.add(s),
      N(s, [0, 0, 0], [0, -0.05, 0], 8e-4, _, 3),
      z(s, m, m, a, u, 0, -0.05 - a, 0, o ? 10 : 14),
      o)
    )
      for (let e = 1; e < 3; e++)
        z(
          s,
          m * 1.12,
          m * 1.12,
          0.008,
          H(11044936, 0.6),
          0,
          -0.05 - (a * e) / 3,
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
  let v = new C();
  (v.position.set(0, -0.1 - 0.02, 0), l.add(v));
  let y = -0.05 - h * 0.35;
  (N(v, [0, 0, 0], [0, y - 0.25 - h * 0.3, 0], 9e-4, _, 3),
    z(v, p * 0.55, p * 0.55, 0.012, d, 0, y, 0, 20));
  let b = y - 0.25 - h * 0.3,
    x = o
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
    be(v, x, 0.008, d, 0, b, -0.004),
    g.push({ o: v, ax: 0.18, az: 0.22, w: 1.1, ph: n() * Er }),
    (l.userData.tick = (e) => {
      ((l.rotation.z = 0.05 * Math.sin(e * 0.9) + 0.02 * Math.sin(e * 2.3)),
        (l.rotation.x = 0.035 * Math.sin(e * 0.7 + 1)),
        (l.rotation.y = 0.2 * Math.sin(e * 0.23)));
      for (let t of g)
        ((t.o.rotation.x = t.ax * Math.sin(e * t.w + t.ph)),
          (t.o.rotation.z = t.az * Math.sin(e * t.w * 1.13 + t.ph * 2)));
    }),
    t.season === `fall` && K(r, { w: 1.2, d: 1.2 }, { count: 25, seed: e + 2 }),
    R(r, { keepGrass: !0 })
  );
}
function Ki(e, t, n, r, i) {
  let a = new C(),
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
