// assets__decor-kit-DeQwKaKF 07 — math
// Lines 1908-2241 of readable/assets__decor-kit-DeQwKaKF.pretty.js (statement-aligned).
function He(e) {
  let n = x(e),
    i = new m(),
    a = n.pick([`mesh`, `plastic`, `recycle`, `pedal`]);
  if (a === `mesh`) {
    let e = new o(
      new t(0.15, 0.12, 0.33, 24, 1, !0),
      new c({
        color: 2236962,
        metalness: 0.6,
        roughness: 0.5,
        side: 2,
        alphaTest: 0.4,
        alphaMap: P(64, 64, (e) => {
          ((e.fillStyle = `#000`),
            e.fillRect(0, 0, 64, 64),
            (e.fillStyle = `#fff`));
          for (let t = 0; t < 64; t += 5)
            for (let n = 0; n < 64; n += 5) e.fillRect(t, n, 3, 3);
        }),
      }),
    );
    ((e.material.alphaMap.wrapS = e.material.alphaMap.wrapT = p),
      e.material.alphaMap.repeat.set(10, 5),
      (e.position.y = 0.165),
      (e.castShadow = !0),
      i.add(e),
      L(i, 0.12, 0.12, 0.01, U(2236962, 0.5, 0.6), 0, 0, 0));
    let a = new o(new r(0.15, 0.006, 6, 32), U(2236962, 0.5, 0.6));
    ((a.rotation.x = Math.PI / 2), (a.position.y = 0.33), i.add(a));
    for (let e = 0; e < 3; e++)
      b(
        i,
        0.04,
        U(15921902, 0.95),
        n.range(-0.05, 0.05),
        0.05 + e * 0.05,
        n.range(-0.05, 0.05),
        6,
      );
  } else if (a === `recycle`)
    for (let [e, t] of [
      [-0.2, 1989567],
      [0.2, 3050298],
    ])
      (S(i, 0.38, 0.72, 0.4, 0.03, w(t), e, 0, 0),
        B(i, 0.2, 0.02, 0.05, U(1118481, 0.8), e, 0.72, 0.05));
  else
    a === `pedal`
      ? (D(
          i,
          [
            [0, 0],
            [0.13, 0],
            [0.14, 0.02],
            [0.14, 0.44],
            [0, 0.44],
          ],
          O(),
          0,
          0,
          0,
          28,
        ),
        D(
          i,
          [
            [0.142, 0],
            [0.142, 0.03],
            [0.1, 0.06],
            [0, 0.07],
          ],
          O(),
          0,
          0.44,
          0,
          28,
        ),
        B(i, 0.1, 0.02, 0.06, E(), 0, 0.02, 0.16))
      : D(
          i,
          [
            [0, 0],
            [0.12, 0],
            [0.15, 0.32],
            [0.155, 0.33],
            [0.145, 0.33],
            [0.115, 0.01],
            [0, 0.01],
          ],
          w(n.pick([2763566, 7041664, 15329249])),
          0,
          0,
          0,
          24,
        );
  return F(i);
}
function Ue(e) {
  let t = x(e),
    n = new m(),
    r = t.pick([U(1710618, 0.3), U(R.walnut, 0.5), O()]);
  z(n, 0.2, 0.02, 0.12, r, 0, 0, 0);
  for (let e of [-0.045, 0.045])
    (C(n, [-0.085, 0.02, e], [-0.085, 0.16, e], 0.003, k()),
      C(n, [0.085, 0.02, e], [0.085, 0.16, e], 0.003, k()),
      C(n, [-0.085, 0.16, e], [0.085, 0.16, e], 0.003, k()));
  let i = t.chance(0.6) ? 0.5 : 0;
  for (let e = 0; e < 5; e++) {
    let t = (e - 2) * 0.0255,
      r = e === 0 ? -i : 0,
      a = t - Math.sin(-r) * 0.09,
      o = 0.16 - Math.cos(r) * 0.09;
    for (let e of [-0.045, 0.045])
      C(n, [t, 0.16, e], [a, o, 0], 6e-4, U(13421772, 0.5), 3);
    b(n, 0.0125, k(), a, o, 0, 16);
  }
  return F(n);
}
function We(e) {
  let t = x(e),
    n = new m(),
    i = t.range(0.1, 0.16),
    a = t.chance(0.5),
    s = P(512, 256, (e, n, r) => {
      ((e.fillStyle = a ? `#c9b98a` : `#5f9ccf`),
        e.fillRect(0, 0, n, r),
        (e.fillStyle = a
          ? `#8c6d3f`
          : t.pick([`#e2d7a6`, `#9cc28a`, `#e9a97a`])));
      for (let i = 0; i < 9; i++) {
        e.beginPath();
        let i = t() * n,
          a = r * t.range(0.2, 0.8),
          o = t.range(20, 70);
        for (let n = 0; n <= 14; n++) {
          let r = (n / 14) * 7,
            s = o * t.range(0.5, 1.3);
          e[n ? `lineTo` : `moveTo`](
            i + Math.cos(r) * s * 1.3,
            a + Math.sin(r) * s,
          );
        }
        e.fill();
      }
      e.strokeStyle = a ? `rgba(80,50,20,0.4)` : `rgba(255,255,255,0.35)`;
      for (let t = 0; t < n; t += n / 12)
        (e.beginPath(), e.moveTo(t, 0), e.lineTo(t, r), e.stroke());
      for (let t = 0; t < r; t += r / 6)
        (e.beginPath(), e.moveTo(0, t), e.lineTo(n, t), e.stroke());
    }),
    l = a ? U(R.walnut, 0.5) : t.pick([O(), U(12095807, 0.3, 0.9)]);
  D(
    n,
    [
      [0, 0],
      [i * 0.7, 0],
      [i * 0.7, 0.015],
      [i * 0.25, 0.03],
      [0.012, i * 0.4],
      [0.012, i * 0.6],
    ],
    l,
    0,
    0,
    0,
    24,
  );
  let u = i * 0.6 + i + 0.02,
    d = new o(new v(i, 32, 16), new c({ map: s, roughness: a ? 0.6 : 0.3 }));
  ((d.position.y = u),
    (d.rotation.z = 0.41),
    (d.rotation.y = t() * 6),
    (d.castShadow = !0),
    n.add(d));
  let f = new o(
    new r(i + 0.01, 0.004, 6, 48, Math.PI * 1.2),
    l === O() ? k() : l,
  );
  return (
    (f.position.y = u),
    (f.rotation.z = Math.PI / 2 + 0.41 - 0.6),
    (f.rotation.y = Math.PI / 2),
    n.add(f),
    F(n)
  );
}
function Ge(e) {
  let t = x(e),
    n = new m(),
    i = t.pick([`cup`, `cup`, `star`, `plaque`, `crystal`]),
    s = U(t.pick([13938487, 12632256, 13467442]), 0.25, 0.95),
    c = t.pick([U(1710618, 0.4), U(R.walnut, 0.5), U(16052714, 0.3)]);
  if (i === `plaque`) {
    let e = new m();
    return (
      (e.rotation.x = -0.12),
      n.add(e),
      z(e, 0.18, 0.24, 0.02, U(R.walnut, 0.5), 0, 0, 0),
      z(e, 0.14, 0.16, 0.004, s, 0, 0.05, 0.012),
      z(n, 0.1, 0.02, 0.08, c, 0, 0, 0.02),
      F(n)
    );
  }
  if (
    (z(n, 0.1, 0.05, 0.1, c, 0, 0, 0),
    z(n, 0.08, 0.04, 0.08, c, 0, 0.05, 0),
    z(n, 0.05, 0.015, 0.002, s, 0, 0.02, 0.051),
    i === `cup`)
  ) {
    D(
      n,
      [
        [0, 0],
        [0.03, 0],
        [0.012, 0.02],
        [0.01, 0.06],
        [0.02, 0.08],
        [0.05, 0.11],
        [0.058, 0.17],
        [0.05, 0.17],
      ],
      s,
      0,
      0.09,
      0,
      28,
    );
    for (let e of [-1, 1]) {
      let t = new o(new r(0.025, 0.004, 6, 16, Math.PI), s);
      ((t.rotation.z = (e * -Math.PI) / 2),
        t.position.set(e * 0.055, 0.22, 0),
        n.add(t));
    }
  } else if (i === `star`) {
    L(n, 0.008, 0.008, 0.12, s, 0, 0.09, 0);
    let e = [];
    for (let t = 0; t < 10; t++) {
      let n = (t / 10) * Math.PI * 2 + Math.PI / 2,
        r = t % 2 ? 0.025 : 0.06;
      e.push([Math.cos(n) * r, Math.sin(n) * r]);
    }
    let t = new _(e.map(([e, t]) => new a(e, t))),
      r = new o(
        new h(t, {
          depth: 0.012,
          bevelEnabled: !0,
          bevelSize: 0.003,
          bevelThickness: 0.003,
        }),
        s,
      );
    (r.position.set(0, 0.26, -0.006), (r.castShadow = !0), n.add(r));
  } else {
    let e = A(n, 0.07, 0.2, 0.04, 0.01, T(14676735, 0.5, 0.02), 0, 0.19, 0);
    e.rotation.z = 0.08;
  }
  return F(n);
}
function Ke(e) {
  let t = x(e),
    n = new m(),
    i = U(t.pick([2039586, 12597547, 2899536, 15329249, 7041664]), 0.4);
  D(
    n,
    [
      [0, 0],
      [0.037, 0],
      [0.037, 0.1],
      [0.034, 0.1],
      [0.034, 0.005],
      [0, 0.005],
    ],
    t.chance(0.5) ? i : U(3355443, 0.5, 0.6),
    -0.14,
    0,
    0,
    20,
  );
  for (let e = 0; e < t.int(3, 7); e++) {
    let e = t() * 7,
      r = t.range(0.13, 0.16);
    L(
      n,
      0.004,
      0.004,
      r,
      U(t.pick([1784458, 1118481, 12597547, 15844367, 15263972]), 0.5),
      -0.14 + Math.cos(e) * 0.015,
      0.005,
      Math.sin(e) * 0.015,
      6,
    ).rotation.set(Math.sin(e) * 0.2, 0, Math.cos(e) * 0.2);
  }
  let a = new m();
  (a.position.set(0, 0, 0.02),
    (a.rotation.y = t.range(-0.5, 0.5)),
    n.add(a),
    A(a, 0.04, 0.02, 0.16, 0.008, U(2763306, 0.5), 0, 0.01, 0),
    A(a, 0.036, 0.03, 0.15, 0.012, i, 0, 0.037, -0.004));
  let s = new m();
  (s.position.set(0.14, 0, 0),
    (s.rotation.y = t.range(-0.4, 0.4)),
    n.add(s),
    A(
      s,
      0.05,
      0.05,
      0.13,
      0.015,
      t.chance(0.5) ? i : U(1710618, 0.4),
      0,
      0.025,
      0,
    ));
  let c = new o(new r(0.028, 0.008, 8, 20), T(15788752, 0.6, 0.2));
  return (
    (c.rotation.y = Math.PI / 2),
    c.position.set(0, 0.065, -0.01),
    n.add(c),
    c.position.add(s.position),
    z(
      n,
      0.075,
      0.05,
      0.075,
      U(t.pick([16773754, 16757703, 11789823]), 0.9),
      0.05,
      0,
      -0.1,
    ),
    F(n)
  );
}
