// assets__decor-kit-DYJAmRWC 07 — math
// Lines 1908-2241 of readable/assets__decor-kit-DYJAmRWC.pretty.js (statement-aligned).
function He(t) {
  let i = x(t),
    a = new f(),
    o = i.pick([`mesh`, `plastic`, `recycle`, `pedal`]);
  if (o === `mesh`) {
    let t = new e(
      new g(0.15, 0.12, 0.33, 24, 1, !0),
      new r({
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
    ((t.material.alphaMap.wrapS = t.material.alphaMap.wrapT = p),
      t.material.alphaMap.repeat.set(10, 5),
      (t.position.y = 0.165),
      (t.castShadow = !0),
      a.add(t),
      L(a, 0.12, 0.12, 0.01, U(2236962, 0.5, 0.6), 0, 0, 0));
    let o = new e(new n(0.15, 0.006, 6, 32), U(2236962, 0.5, 0.6));
    ((o.rotation.x = Math.PI / 2), (o.position.y = 0.33), a.add(o));
    for (let e = 0; e < 3; e++)
      b(
        a,
        0.04,
        U(15921902, 0.95),
        i.range(-0.05, 0.05),
        0.05 + e * 0.05,
        i.range(-0.05, 0.05),
        6,
      );
  } else if (o === `recycle`)
    for (let [e, t] of [
      [-0.2, 1989567],
      [0.2, 3050298],
    ])
      (S(a, 0.38, 0.72, 0.4, 0.03, w(t), e, 0, 0),
        B(a, 0.2, 0.02, 0.05, U(1118481, 0.8), e, 0.72, 0.05));
  else
    o === `pedal`
      ? (D(
          a,
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
          a,
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
        B(a, 0.1, 0.02, 0.06, E(), 0, 0.02, 0.16))
      : D(
          a,
          [
            [0, 0],
            [0.12, 0],
            [0.15, 0.32],
            [0.155, 0.33],
            [0.145, 0.33],
            [0.115, 0.01],
            [0, 0.01],
          ],
          w(i.pick([2763566, 7041664, 15329249])),
          0,
          0,
          0,
          24,
        );
  return F(a);
}
function Ue(e) {
  let t = x(e),
    n = new f(),
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
function We(i) {
  let a = x(i),
    o = new f(),
    s = a.range(0.1, 0.16),
    c = a.chance(0.5),
    l = P(512, 256, (e, t, n) => {
      ((e.fillStyle = c ? `#c9b98a` : `#5f9ccf`),
        e.fillRect(0, 0, t, n),
        (e.fillStyle = c
          ? `#8c6d3f`
          : a.pick([`#e2d7a6`, `#9cc28a`, `#e9a97a`])));
      for (let r = 0; r < 9; r++) {
        e.beginPath();
        let r = a() * t,
          i = n * a.range(0.2, 0.8),
          o = a.range(20, 70);
        for (let t = 0; t <= 14; t++) {
          let n = (t / 14) * 7,
            s = o * a.range(0.5, 1.3);
          e[t ? `lineTo` : `moveTo`](
            r + Math.cos(n) * s * 1.3,
            i + Math.sin(n) * s,
          );
        }
        e.fill();
      }
      e.strokeStyle = c ? `rgba(80,50,20,0.4)` : `rgba(255,255,255,0.35)`;
      for (let r = 0; r < t; r += t / 12)
        (e.beginPath(), e.moveTo(r, 0), e.lineTo(r, n), e.stroke());
      for (let r = 0; r < n; r += n / 6)
        (e.beginPath(), e.moveTo(0, r), e.lineTo(t, r), e.stroke());
    }),
    u = c ? U(R.walnut, 0.5) : a.pick([O(), U(12095807, 0.3, 0.9)]);
  D(
    o,
    [
      [0, 0],
      [s * 0.7, 0],
      [s * 0.7, 0.015],
      [s * 0.25, 0.03],
      [0.012, s * 0.4],
      [0.012, s * 0.6],
    ],
    u,
    0,
    0,
    0,
    24,
  );
  let d = s * 0.6 + s + 0.02,
    p = new e(new t(s, 32, 16), new r({ map: l, roughness: c ? 0.6 : 0.3 }));
  ((p.position.y = d),
    (p.rotation.z = 0.41),
    (p.rotation.y = a() * 6),
    (p.castShadow = !0),
    o.add(p));
  let m = new e(
    new n(s + 0.01, 0.004, 6, 48, Math.PI * 1.2),
    u === O() ? k() : u,
  );
  return (
    (m.position.y = d),
    (m.rotation.z = Math.PI / 2 + 0.41 - 0.6),
    (m.rotation.y = Math.PI / 2),
    o.add(m),
    F(o)
  );
}
function Ge(t) {
  let r = x(t),
    i = new f(),
    a = r.pick([`cup`, `cup`, `star`, `plaque`, `crystal`]),
    o = U(r.pick([13938487, 12632256, 13467442]), 0.25, 0.95),
    s = r.pick([U(1710618, 0.4), U(R.walnut, 0.5), U(16052714, 0.3)]);
  if (a === `plaque`) {
    let e = new f();
    return (
      (e.rotation.x = -0.12),
      i.add(e),
      z(e, 0.18, 0.24, 0.02, U(R.walnut, 0.5), 0, 0, 0),
      z(e, 0.14, 0.16, 0.004, o, 0, 0.05, 0.012),
      z(i, 0.1, 0.02, 0.08, s, 0, 0, 0.02),
      F(i)
    );
  }
  if (
    (z(i, 0.1, 0.05, 0.1, s, 0, 0, 0),
    z(i, 0.08, 0.04, 0.08, s, 0, 0.05, 0),
    z(i, 0.05, 0.015, 0.002, o, 0, 0.02, 0.051),
    a === `cup`)
  ) {
    D(
      i,
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
      o,
      0,
      0.09,
      0,
      28,
    );
    for (let t of [-1, 1]) {
      let r = new e(new n(0.025, 0.004, 6, 16, Math.PI), o);
      ((r.rotation.z = (t * -Math.PI) / 2),
        r.position.set(t * 0.055, 0.22, 0),
        i.add(r));
    }
  } else if (a === `star`) {
    L(i, 0.008, 0.008, 0.12, o, 0, 0.09, 0);
    let t = [];
    for (let e = 0; e < 10; e++) {
      let n = (e / 10) * Math.PI * 2 + Math.PI / 2,
        r = e % 2 ? 0.025 : 0.06;
      t.push([Math.cos(n) * r, Math.sin(n) * r]);
    }
    let n = new y(t.map(([e, t]) => new l(e, t))),
      r = new e(
        new _(n, {
          depth: 0.012,
          bevelEnabled: !0,
          bevelSize: 0.003,
          bevelThickness: 0.003,
        }),
        o,
      );
    (r.position.set(0, 0.26, -0.006), (r.castShadow = !0), i.add(r));
  } else {
    let e = A(i, 0.07, 0.2, 0.04, 0.01, T(14676735, 0.5, 0.02), 0, 0.19, 0);
    e.rotation.z = 0.08;
  }
  return F(i);
}
function Ke(t) {
  let r = x(t),
    i = new f(),
    a = U(r.pick([2039586, 12597547, 2899536, 15329249, 7041664]), 0.4);
  D(
    i,
    [
      [0, 0],
      [0.037, 0],
      [0.037, 0.1],
      [0.034, 0.1],
      [0.034, 0.005],
      [0, 0.005],
    ],
    r.chance(0.5) ? a : U(3355443, 0.5, 0.6),
    -0.14,
    0,
    0,
    20,
  );
  for (let e = 0; e < r.int(3, 7); e++) {
    let e = r() * 7,
      t = r.range(0.13, 0.16);
    L(
      i,
      0.004,
      0.004,
      t,
      U(r.pick([1784458, 1118481, 12597547, 15844367, 15263972]), 0.5),
      -0.14 + Math.cos(e) * 0.015,
      0.005,
      Math.sin(e) * 0.015,
      6,
    ).rotation.set(Math.sin(e) * 0.2, 0, Math.cos(e) * 0.2);
  }
  let o = new f();
  (o.position.set(0, 0, 0.02),
    (o.rotation.y = r.range(-0.5, 0.5)),
    i.add(o),
    A(o, 0.04, 0.02, 0.16, 0.008, U(2763306, 0.5), 0, 0.01, 0),
    A(o, 0.036, 0.03, 0.15, 0.012, a, 0, 0.037, -0.004));
  let s = new f();
  (s.position.set(0.14, 0, 0),
    (s.rotation.y = r.range(-0.4, 0.4)),
    i.add(s),
    A(
      s,
      0.05,
      0.05,
      0.13,
      0.015,
      r.chance(0.5) ? a : U(1710618, 0.4),
      0,
      0.025,
      0,
    ));
  let c = new e(new n(0.028, 0.008, 8, 20), T(15788752, 0.6, 0.2));
  return (
    (c.rotation.y = Math.PI / 2),
    c.position.set(0, 0.065, -0.01),
    i.add(c),
    c.position.add(s.position),
    z(
      i,
      0.075,
      0.05,
      0.075,
      U(r.pick([16773754, 16757703, 11789823]), 0.9),
      0.05,
      0,
      -0.1,
    ),
    F(i)
  );
}
