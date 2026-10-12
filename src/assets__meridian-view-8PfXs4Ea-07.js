// assets__meridian-view-8PfXs4Ea 07 — push
// Lines 2775-2978 of readable/assets__meridian-view-8PfXs4Ea.pretty.js (statement-aligned).
function ye(e, t) {
  let r = e.crane,
    i = new y();
  i.name = `m34-crane`;
  let a = t(
      new u({
        color: 14197528,
        emissive: 3811846,
        roughness: 0.55,
        metalness: 0.3,
        flatShading: !0,
      }),
    ),
    s = t(new u({ color: 2764080, roughness: 0.6, metalness: 0.4 })),
    l = t(new u({ color: 9276036, roughness: 0.95 })),
    d = t(new u({ color: 14276301, roughness: 0.6 })),
    f = (e) => t(new w({ color: e, toneMapped: !0 })),
    p = t(new n(1, 1, 1)),
    h = new o(),
    g = new m(),
    v = new C(),
    b = new C(),
    ee = new C(0, 1, 0),
    te = (e, t, n) => {
      let r = v.set(t[0] - e[0], t[1] - e[1], t[2] - e[2]),
        i = r.length();
      return (
        g.setFromUnitVectors(ee, r.clone().normalize()),
        h
          .clone()
          .compose(
            new C((e[0] + t[0]) / 2, (e[1] + t[1]) / 2, (e[2] + t[2]) / 2),
            g,
            b.set(n, i, n),
          )
      );
    },
    ne = (e, t, n) => {
      let r = new _(p, n, e.length);
      return (
        e.forEach(([e, n], i) => r.setMatrixAt(i, te(e, n, t))),
        (r.instanceMatrix.needsUpdate = !0),
        (r.castShadow = !0),
        r
      );
    },
    [x, S] = r.mast,
    E = r.top,
    D = 1.3,
    re = [],
    ie = [
      [-1.3, -1.3],
      [D, -1.3],
      [D, D],
      [-1.3, D],
    ];
  for (let [e, t] of ie)
    re.push([
      [x + e, 0, S + t],
      [x + e, E, S + t],
    ]);
  for (let e = 0; e < E - 3; e += 3.1)
    for (let t = 0; t < 4; t++) {
      let [n, r] = ie[t],
        [i, a] = ie[(t + 1) % 4];
      (re.push([
        [x + n, e, S + r],
        [x + i, e + 3.1, S + a],
      ]),
        re.push([
          [x + n, e, S + r],
          [x + i, e, S + a],
        ]));
    }
  i.add(ne(re, 0.24, a));
  for (let e = E - 30; e < E - 1; e += 6) {
    let t = new c(p, f(16773320));
    (t.position.set(x - D - 0.15, e, S + D * 0.6),
      t.scale.set(0.12, 0.35, 0.5),
      i.add(t));
  }
  let O = new y();
  (O.position.set(x, E, S), i.add(O));
  let k = (e, t, n, r, i, a, o) => (
    e.position.set(t, n + a / 2, r),
    e.scale.set(i, a, o),
    (e.castShadow = !0),
    O.add(e),
    e
  );
  k(new c(p, s), 0, 0, 0, 3.2, 0.8, 3.2);
  let A = r.jib,
    j = r.counter,
    M = [];
  for (let e of [-1, 1])
    for (let t of [-1, 1])
      M.push([
        [e * D, 0.8, t * D],
        [0, 7.8, 0],
      ]);
  let ae = r.halfW,
    N = r.armY1 - r.armY0,
    P = r.armY0 - E;
  for (let e = 0; e < A; e += 2.4) {
    let t = Math.min(A, e + 2.4);
    for (let n of [-1, 1])
      (M.push([
        [e, P, n * ae],
        [t, P, n * ae],
      ]),
        M.push([
          [e, P, n * ae],
          [t, P + N, 0],
        ]));
    (M.push([
      [e, P + N, 0],
      [t, P + N, 0],
    ]),
      M.push([
        [t, P, -ae],
        [t, P, ae],
      ]));
  }
  for (let e = 0; e > -j; e -= 2.4) {
    for (let t of [-1, 1])
      M.push([
        [e, P, t * 1.1],
        [e - 2.4, P, t * 1.1],
      ]);
    M.push([
      [e - 2.4, P, -1.1],
      [e - 2.4, P, 1.1],
    ]);
  }
  for (let e of [A * 0.42, A * 0.84])
    M.push([
      [0, 7.8, 0],
      [e, P + N, 0],
    ]);
  (M.push([
    [0, 7.8, 0],
    [-j + 1, P, 0],
  ]),
    O.add(ne(M, 0.18, a)));
  {
    let e = r.halfW,
      n = P - 0.4,
      i = -(e + 1.5),
      o = t(
        new u({
          color: 1714739,
          emissive: 793122,
          roughness: 0.1,
          metalness: 0.6,
        }),
      );
    (k(new c(p, d), 0.6, n, i, 2.6, 2.5, 2.2),
      k(new c(p, o), 1.93, n + 0.9, i, 0.04, 1.3, 1.9),
      k(new c(p, o), 0.6, n + 0.9, i - 1.12, 2.2, 1.3, 0.04),
      k(new c(p, o), 0.6, n + 0.9, i + 1.12, 2.2, 1.3, 0.04),
      k(new c(p, f(16771256)), 0.6, n + 1.9, i, 1.4, 0.06, 1.2),
      k(new c(p, s), 0.6, n - 0.12, i, 3.4, 0.12, 3));
    for (let [e, t, r, o] of [
      [0.6, i - 1.5, 3.4, 0.05],
      [0.6, i + 1.5, 3.4, 0.05],
      [2.3, i, 0.05, 3],
    ])
      k(new c(p, a), e, n + 0.9, t, r, 0.05, o);
    for (let e = -E + 1; e < -0.5; e += 0.4)
      e > -40 && k(new c(p, s), 1.55, e, 0, 0.05, 0.04, 0.6);
  }
  for (let e = 0; e < 4; e++)
    k(new c(p, l), -j + 1.2 + e * 0.9, P - 2.4, 0, 0.8, 2.6, 2.6);
  k(new c(p, s), -j + 6, P, 0, 3.4, 1.6, 1.9);
  let F = f(16722458),
    I = [
      k(new c(p, F), A, P + N, 0, 0.3, 0.3, 0.3),
      k(new c(p, F), 0, 7.8, 0, 0.3, 0.3, 0.3),
      k(new c(p, F), -j, P, 0, 0.3, 0.3, 0.3),
    ];
  (k(new c(p, s), A - 2.5, P - 0.35, 0, 1.6, 0.3, 1.9),
    k(new c(p, f(16773848)), 4, P - 0.2, 0, 0.6, 0.2, 0.6));
  let L = [
    T(O, { skip: new Set(I), name: `m34-crane-slew` }),
    T(i, { skip: new Set([O]), name: `m34-crane-mast` }),
  ];
  return {
    root: i,
    update(e, t) {
      let n = e.wild,
        r = (Math.sin(t * 23.7) * 0.6 + Math.sin(t * 37.1) * 0.4) * 0.006 * n;
      ((O.rotation.y = -e.yaw + r),
        (O.rotation.z =
          Math.sin(t * 17.3) * 0.004 * n -
          (e.phase === `warn` ? 0.006 * n : 0)),
        (O.position.y = E + Math.sin(t * 29) * 0.03 * n));
      let i = t % 1.5 < 0.2;
      for (let e of I) e.visible = i;
    },
    dispose() {
      for (let e of L) e?.dispose();
    },
  };
}
