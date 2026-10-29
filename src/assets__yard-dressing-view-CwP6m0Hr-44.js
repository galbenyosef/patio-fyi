// assets__yard-dressing-view-CwP6m0Hr 44 — math
// Lines 12446-12688 of readable/assets__yard-dressing-view-CwP6m0Hr.pretty.js (statement-aligned).
function Ia(e, t) {
  let n = U(e),
    r = new C(),
    i = Yi(t),
    a = n.pick([`steel`, `arc`, `arc`]),
    o = a === `steel` ? n.chance(0.75) : n.chance(0.4),
    s = n.chance(0.35),
    c = a === `steel` ? 1.95 : 2.05,
    l = H(10132122, 0.4, 0.8);
  if (a === `steel`) {
    let e = H(n.pick([1710618, 2767402, 5917242, 3815996]), 0.45, 0.6);
    V(r, 2.8, 0.06, 0.06, e, 0, 0.05, 0);
    for (let t of [-1, 1]) {
      V(r, 0.07, 0.05, 0.95, e, t * 1.3, 0.03, 0);
      for (let e of [-1, 1])
        z(r, 0.03, 0.03, 0.02, H(1710618, 0.8), t * 1.3, 0, e * 0.44, 10);
    }
    for (let t of [-1, 1])
      (N(r, [t * 1.3, 0.06, 0], [t * c, 1.28, 0], 0.03, e, 10),
        ia(r, 0.03, 0.006, l, t * (c - 0.02), 1.24, 0, 0, 0, 0, 12, 4));
  } else {
    let e = G(n.pick([W.cedar, W.teak, W.redwood]), 0.6, 7),
      t = [];
    for (let e = 0; e <= 18; e++) {
      let n = -c - 0.05 + (e / 18) * (2 * c + 0.1);
      t.push([n, 0.14 + 1.1 * (Math.abs(n) / c) ** 2.2, 0]);
    }
    L(r, t, 0.05, e, 48, 8);
    for (let t of [-1, 1])
      (B(r, 0.12, 0.1, 1, e, t * 0.55, 0, 0),
        N(r, [t * 0.55, 0.1, 0], [t * 0.45, 0.14, 0], 0.04, e, 6),
        ia(r, 0.03, 0.006, l, t * (c - 0.03), 1.24, 0, 0, 0, 0, 12, 4));
  }
  let u = aa(r, 0, 1.22, 0),
    d = o ? 2 : 2.3,
    f = o ? 1.2 : 1.4,
    p = o ? -0.42 : -0.3,
    m = o ? 0.26 : 0.5,
    h = n.pick([
      [`#c83a2a`, `#e8c040`, `#2a6a9a`, `#f0e8d8`],
      [`#2a4a6a`, `#f0e8d8`, `#6a8aa8`],
      [`#3a6a3a`, `#d8c8a0`, `#8a6a3a`],
      [`#e8e0d0`, `#e8e0d0`, `#b8a888`],
      [`#8a2a4a`, `#e87a2a`, `#f5d23a`, `#2a8a7a`],
    ]),
    g = s
      ? Da(15789280, 40, 5)
      : je(
          `hamstripe` + h.join(``),
          (e, t, n) => {
            for (let r = 0; r < 16; r++)
              ((e.fillStyle = h[r % h.length]),
                e.fillRect(0, (r * n) / 16, t, n / 16 + 1));
          },
          { rough: 0.9, extra: { side: 2 } },
        ),
    _ = new D(d, f, 28, 10).rotateX(-Q / 2),
    v = _.attributes.position,
    y = (e) => p - m * (1 - e * e);
  for (let e = 0; e < v.count; e++) {
    let t = v.getX(e) / (d / 2),
      n = v.getZ(e) / (f / 2),
      r = Math.sqrt(Math.max(0, 1 - t * t)),
      i = o ? 1 : 0.12 + 0.88 * r;
    v.setXYZ(
      e,
      v.getX(e),
      y(t) + 0.16 * n * n * (o ? 0.8 : r),
      v.getZ(e) * i * (1 - 0.12 * n * n * r),
    );
  }
  (_.computeVertexNormals(), I(u, _, g));
  let b = H(15261900, 0.9);
  for (let e of [-1, 1]) {
    let t = (e * d) / 2,
      n = o ? 7 : 5;
    for (let r = 0; r < n; r++) {
      let i = (r / (n - 1) - 0.5) * f * (o ? 1 : 0.12);
      N(
        u,
        [e * (c - 0.25), -0.02, 0],
        [t, p + (o ? 0.128 * (i / (f / 2)) ** 2 : 0), i],
        0.004,
        b,
        4,
      );
    }
    (N(u, [e * (c - 0.02), 0, 0], [e * (c - 0.25), -0.02, 0], 0.008, l, 5),
      o && ra(u, 0.018, f + 0.08, G(W.teak, 0.6, 7), t, p + 0.12, 0, 10));
  }
  if (!i && n.chance(0.6)) {
    let e = 0.72;
    F(
      u,
      0.28,
      0.1,
      0.46,
      0.05,
      H(n.pick([15788248, 2771562, 13122090, 3828282]), 0.95),
      (d / 2) * e,
      y(e) + 0.07,
      0,
      0,
      0,
      0.35,
    );
  }
  let x = n() * 6;
  return (
    (u.userData.tick = (e) => {
      u.rotation.x =
        Math.sin(e * 1.1 + x) * 0.05 + Math.sin(e * 0.43 + x) * 0.02;
    }),
    ha(r, i, 4.4, 2.2, e + 1, 70),
    i &&
      K(
        u,
        { w: d * 0.5, d: f * 0.3 },
        { count: 12, y: p - m + 0.02, seed: e + 8 },
      ),
    R(r, {
      note: `${a} stand, ${s ? `rope` : `fabric`}${o ? `, spreader bars` : ``}`,
    })
  );
}
function La(e, t) {
  let r = U(e),
    i = new C(),
    a = Yi(t),
    o = r.range(4.5, 6.5),
    s = r.range(3.5, 5),
    c = r.range(2.6, 3),
    l = r.pick([`wood`, `steel`, `planter`]),
    u = o > 5.4 ? 3 : 2,
    d = Array.from({ length: u }, (e, t) => -o / 2 + (t / (u - 1)) * o),
    f = c - 0.1,
    p = [];
  for (let e of [-s / 2, s / 2]) for (let t of d) p.push([t, e]);
  let m = G(r.pick([W.cedar, W.treated, W.weathered, W.brown]), 0.8, 8),
    h = H(1710618, 0.45, 0.6);
  for (let [e, t] of p)
    if (l === `wood`)
      (B(i, 0.09, c, 0.09, m, e, 0, t), B(i, 0.12, 0.03, 0.12, m, e, c, t));
    else {
      let n = 0;
      if (l === `planter`) {
        if (
          (P(
            i,
            [
              [0.2, 0],
              [0.26, 0.42],
              [0.28, 0.44],
              [0.27, 0.45],
            ],
            H(r.pick([2763306, 9062954, 5921370]), 0.7),
            e,
            0,
            t,
            20,
          ),
          z(i, 0.25, 0.25, 0.02, a ? q.soil() : q.mulch(), e, 0.4, t, 20),
          !a)
        ) {
          let n = ca();
          for (let i = 0; i < 22; i++) {
            let i = r() * $;
            n.add(
              e + Math.cos(i) * 0.17 * r(),
              0.44 + r() * 0.12,
              t + Math.sin(i) * 0.17 * r(),
              0.035,
              r.pick([3828266, 4880944, r.pick(De)]),
            );
          }
          n.flush(i);
        }
        n = 0.4;
      }
      (z(i, 0.022, 0.022, c - n, h, e, n, t, 10),
        L(
          i,
          [
            [e, c, t],
            [e, c + 0.1, t - 0.05 * Math.sign(t)],
            [e, c + 0.04, t - 0.12 * Math.sign(t)],
          ],
          0.01,
          h,
          8,
          5,
        ));
    }
  let g = (e, t) => [e, f, t],
    _ = [];
  for (let e of [-s / 2, s / 2])
    for (let t = 0; t < u - 1; t++) _.push([g(d[t], e), g(d[t + 1], e)]);
  let v = r.pick([`across`, `zigzag`, `perimeter`]);
  if (v !== `zigzag`)
    for (let e of v === `across` ? d : [d[0], d[u - 1]])
      _.push([g(e, -s / 2), g(e, s / 2)]);
  else
    for (let e = 0; e < u - 1; e++)
      (_.push([g(d[e], -s / 2), g(d[e + 1], s / 2)]),
        _.push([g(d[e], s / 2), g(d[e + 1], -s / 2)]));
  let y = ca(new k(0.012, 0.015, 0.05, 8)),
    b = ca(new n(1, 10, 8)),
    x = H(1315860, 0.6);
  for (let [e, t] of _) {
    let n = Math.hypot(t[0] - e[0], t[2] - e[2]),
      a = n * r.range(0.045, 0.07),
      o = (n) => [
        ta(e[0], t[0], n),
        ta(e[1], t[1], n) - 4 * a * n * (1 - n),
        ta(e[2], t[2], n),
      ],
      s = Math.ceil(n / 0.25);
    L(
      i,
      Array.from({ length: s + 1 }, (e, t) => o(t / s)),
      0.004,
      x,
      s * 2,
      4,
    );
    let c = Math.floor(n / 0.6);
    for (let e = 1; e < c; e++) {
      let [t, n, r] = o(e / c);
      (y.add(t, n - 0.03, r, 1, 1315860, 1.0001),
        b.add(t, n - 0.085, r, 0.028, 16777215, 0.04));
    }
  }
  y.flush(i, H(16777215, 0.6));
  let S = b.flush(
    i,
    H(16773328, 0.3, 0, { emissive: 16760944, emissiveIntensity: 1.3 }),
  );
  return (
    S && (S.castShadow = !1),
    ha(i, a, o + 0.6, s + 0.6, e + 2, 90),
    R(i, { keepGrass: !0, note: `${l} posts, ${v}` })
  );
}
