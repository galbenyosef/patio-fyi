// assets__meridian-view-BtYJSXLi 07 — push
// Lines 2783-2984 of readable/assets__meridian-view-BtYJSXLi.pretty.js (statement-aligned).
function ve(e, n) {
  let a = e.crane,
    s = new g();
  s.name = `m34-crane`;
  let c = n(
      new i({
        color: 14197528,
        emissive: 3811846,
        roughness: 0.55,
        metalness: 0.3,
        flatShading: !0,
      }),
    ),
    l = n(new i({ color: 2764080, roughness: 0.6, metalness: 0.4 })),
    d = n(new i({ color: 9276036, roughness: 0.95 })),
    f = n(new i({ color: 14276301, roughness: 0.6 })),
    p = (e) => n(new u({ color: e, toneMapped: !0 })),
    m = n(new r(1, 1, 1)),
    _ = new te(),
    v = new h(),
    y = new o(),
    ee = new o(),
    b = new o(0, 1, 0),
    x = (e, t, n) => {
      let r = y.set(t[0] - e[0], t[1] - e[1], t[2] - e[2]),
        i = r.length();
      return (
        v.setFromUnitVectors(b, r.clone().normalize()),
        _.clone().compose(
          new o((e[0] + t[0]) / 2, (e[1] + t[1]) / 2, (e[2] + t[2]) / 2),
          v,
          ee.set(n, i, n),
        )
      );
    },
    S = (e, t, n) => {
      let r = new w(m, n, e.length);
      return (
        e.forEach(([e, n], i) => r.setMatrixAt(i, x(e, n, t))),
        (r.instanceMatrix.needsUpdate = !0),
        (r.castShadow = !0),
        r
      );
    },
    [C, T] = a.mast,
    D = a.top,
    O = 1.3,
    ne = [],
    re = [
      [-1.3, -1.3],
      [O, -1.3],
      [O, O],
      [-1.3, O],
    ];
  for (let [e, t] of re)
    ne.push([
      [C + e, 0, T + t],
      [C + e, D, T + t],
    ]);
  for (let e = 0; e < D - 3; e += 3.1)
    for (let t = 0; t < 4; t++) {
      let [n, r] = re[t],
        [i, a] = re[(t + 1) % 4];
      (ne.push([
        [C + n, e, T + r],
        [C + i, e + 3.1, T + a],
      ]),
        ne.push([
          [C + n, e, T + r],
          [C + i, e, T + a],
        ]));
    }
  s.add(S(ne, 0.24, c));
  for (let e = D - 30; e < D - 1; e += 6) {
    let n = new t(m, p(16773320));
    (n.position.set(C - O - 0.15, e, T + O * 0.6),
      n.scale.set(0.12, 0.35, 0.5),
      s.add(n));
  }
  let k = new g();
  (k.position.set(C, D, T), s.add(k));
  let A = (e, t, n, r, i, a, o) => (
    e.position.set(t, n + a / 2, r),
    e.scale.set(i, a, o),
    (e.castShadow = !0),
    k.add(e),
    e
  );
  A(new t(m, l), 0, 0, 0, 3.2, 0.8, 3.2);
  let j = a.jib,
    M = a.counter,
    N = [];
  for (let e of [-1, 1])
    for (let t of [-1, 1])
      N.push([
        [e * O, 0.8, t * O],
        [0, 7.8, 0],
      ]);
  let ie = a.halfW,
    P = a.armY1 - a.armY0,
    F = a.armY0 - D;
  for (let e = 0; e < j; e += 2.4) {
    let t = Math.min(j, e + 2.4);
    for (let n of [-1, 1])
      (N.push([
        [e, F, n * ie],
        [t, F, n * ie],
      ]),
        N.push([
          [e, F, n * ie],
          [t, F + P, 0],
        ]));
    (N.push([
      [e, F + P, 0],
      [t, F + P, 0],
    ]),
      N.push([
        [t, F, -ie],
        [t, F, ie],
      ]));
  }
  for (let e = 0; e > -M; e -= 2.4) {
    for (let t of [-1, 1])
      N.push([
        [e, F, t * 1.1],
        [e - 2.4, F, t * 1.1],
      ]);
    N.push([
      [e - 2.4, F, -1.1],
      [e - 2.4, F, 1.1],
    ]);
  }
  for (let e of [j * 0.42, j * 0.84])
    N.push([
      [0, 7.8, 0],
      [e, F + P, 0],
    ]);
  (N.push([
    [0, 7.8, 0],
    [-M + 1, F, 0],
  ]),
    k.add(S(N, 0.18, c)));
  {
    let e = a.halfW,
      r = F - 0.4,
      o = -(e + 1.5),
      s = n(
        new i({
          color: 1714739,
          emissive: 793122,
          roughness: 0.1,
          metalness: 0.6,
        }),
      );
    (A(new t(m, f), 0.6, r, o, 2.6, 2.5, 2.2),
      A(new t(m, s), 1.93, r + 0.9, o, 0.04, 1.3, 1.9),
      A(new t(m, s), 0.6, r + 0.9, o - 1.12, 2.2, 1.3, 0.04),
      A(new t(m, s), 0.6, r + 0.9, o + 1.12, 2.2, 1.3, 0.04),
      A(new t(m, p(16771256)), 0.6, r + 1.9, o, 1.4, 0.06, 1.2),
      A(new t(m, l), 0.6, r - 0.12, o, 3.4, 0.12, 3));
    for (let [e, n, i, a] of [
      [0.6, o - 1.5, 3.4, 0.05],
      [0.6, o + 1.5, 3.4, 0.05],
      [2.3, o, 0.05, 3],
    ])
      A(new t(m, c), e, r + 0.9, n, i, 0.05, a);
    for (let e = -D + 1; e < -0.5; e += 0.4)
      e > -40 && A(new t(m, l), 1.55, e, 0, 0.05, 0.04, 0.6);
  }
  for (let e = 0; e < 4; e++)
    A(new t(m, d), -M + 1.2 + e * 0.9, F - 2.4, 0, 0.8, 2.6, 2.6);
  A(new t(m, l), -M + 6, F, 0, 3.4, 1.6, 1.9);
  let I = p(16722458),
    L = [
      A(new t(m, I), j, F + P, 0, 0.3, 0.3, 0.3),
      A(new t(m, I), 0, 7.8, 0, 0.3, 0.3, 0.3),
      A(new t(m, I), -M, F, 0, 0.3, 0.3, 0.3),
    ];
  (A(new t(m, l), j - 2.5, F - 0.35, 0, 1.6, 0.3, 1.9),
    A(new t(m, p(16773848)), 4, F - 0.2, 0, 0.6, 0.2, 0.6));
  let R = [
    E(k, { skip: new Set(L), name: `m34-crane-slew` }),
    E(s, { skip: new Set([k]), name: `m34-crane-mast` }),
  ];
  return {
    root: s,
    update(e, t) {
      let n = e.wild,
        r = (Math.sin(t * 23.7) * 0.6 + Math.sin(t * 37.1) * 0.4) * 0.006 * n;
      ((k.rotation.y = -e.yaw + r),
        (k.rotation.z =
          Math.sin(t * 17.3) * 0.004 * n -
          (e.phase === `warn` ? 0.006 * n : 0)),
        (k.position.y = D + Math.sin(t * 29) * 0.03 * n));
      let i = t % 1.5 < 0.2;
      for (let e of L) e.visible = i;
    },
    dispose() {
      for (let e of R) e?.dispose();
    },
  };
}
