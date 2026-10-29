// assets__helicopter-kit-DfbxSwVO 03 — skin
// Lines 542-838 of readable/assets__helicopter-kit-DfbxSwVO.pretty.js (statement-aligned).
function N(e, t) {
  let n = g(e, `apache-airframe`);
  C(n, t.skin, [
    [-5.35, 0.23, 1.56, 2.02],
    [-4.62, 0.49, 1.3, 2.03],
    [-3.7, 0.57, 1.14, 2.09],
    [-2.6, 0.63, 1.12, 2.17],
    [-0.85, 0.72, 1.12, 2.4],
    [1.45, 0.77, 1.13, 2.95],
    [2.55, 0.65, 1.18, 2.74],
    [3.5, 0.55, 1.21, 2.54],
  ]);
  let r = [
    [-4.3, 0.46, 2.07, 2.09],
    [-3.63, 0.51, 2.12, 2.9],
    [-2.64, 0.52, 2.18, 2.91],
    [-1.98, 0.55, 2.26, 3.27],
    [-0.94, 0.57, 2.33, 3.3],
    [-0.4, 0.62, 2.38, 2.83],
  ];
  for (let e = 0; e < r.length - 1; e++) {
    let [i, a, o, s] = r[e],
      [c, l, u, d] = r[e + 1];
    for (let e of [-1, 1])
      S(
        n,
        t,
        [
          [e * a, o, i],
          [e * a * 0.77, s, i],
          [e * l * 0.77, d, c],
          [e * l, u, c],
        ],
        0.035,
      );
    S(
      n,
      t,
      [
        [-a * 0.77, s, i],
        [a * 0.77, s, i],
        [l * 0.77, d, c],
        [-l * 0.77, d, c],
      ],
      0.038,
    );
  }
  for (let [e, r] of [
    [1.52, -2.98],
    [1.87, -1.28],
  ])
    (E(n, t, 0, e, r),
      D(n, t, 0, e + 0.4, r - 0.58, 0.83),
      b(n, t.dark, [0, e, r - 0.2], [0, e + 0.38, r - 0.38], 0.03));
  for (let e of [-1, 1]) {
    (v(n, t.metal, [e * 0.542, 2.22, -2.5], [0.035, 0.035, 0.22]),
      b(n, t.dark, [e * 0.72, 1.27, -2.8], [e * 0.99, 1.04, -2.8], 0.045),
      b(n, t.dark, [e * 0.99, 1.04, -3.2], [e * 0.99, 1.04, -2.1], 0.036));
    let r = C(n, t.panel, [
      [-3.6, 0.23, 1.4, 1.85],
      [-2.55, 0.32, 1.26, 2.03],
      [0.95, 0.33, 1.43, 2.15],
      [1.63, 0.16, 1.75, 2.15],
    ]);
    r.position.x = e * 0.78;
    let i = C(n, t.skin, [
      [-0.9, 0.42, 2.24, 2.98],
      [-0.48, 0.5, 2.22, 3.17],
      [1.92, 0.48, 2.32, 3.14],
      [2.72, 0.33, 2.41, 2.95],
    ]);
    ((i.position.x = e * 1.02),
      y(n, t.dark, [e * 1.02, 2.68, -0.94], [0.32, 0.3, 0.046]),
      b(
        n,
        t.metal,
        [e * 1.02, 2.68, -0.97],
        [e * 1.02, 2.68, -1],
        0.24,
        0.24,
        16,
      ),
      v(n, t.dark, [e * 1.07, 2.7, 2.72], [0.6, 0.4, 0.1]));
    for (let r = 0; r < 5; r++)
      v(n, t.metal, [e * 1.07, 2.55 + r * 0.075, 2.79], [0.53, 0.023, 0.06]);
    A(n, t, e * 1.52, 2.62, 0.1, 12);
    let a = [
      [e * 0.76, 1.95, -0.32],
      [e * 2.76, 1.78, -0.16],
      [e * 2.7, 1.72, 0.66],
      [e * 0.82, 1.91, 1.12],
    ];
    x(n, t.panel, e < 0 ? a : a.slice().reverse());
    let o = a.map(([e, t, n]) => [e, t - 0.105, n]);
    x(n, t.skin, e < 0 ? o.slice().reverse() : o);
    for (let e = 0; e < 4; e++)
      x(n, t.skin, [a[e], o[e], o[(e + 1) % 4], a[(e + 1) % 4]]);
    y(n, e < 0 ? t.red : t.green, [e * 2.73, 1.8, 0.15], [0.05, 0.045, 0.1]);
    for (let r of [1.65, 2.44])
      v(n, t.skin, [e * r, 1.52, 0.2], [0.12, 0.5, 0.48]);
    let s = g(n, `rocket-pod`, [e * 1.65, 1.05, -0.1]);
    (b(s, t.skin, [0, 0, -0.88], [0, 0, 0.9], 0.29, 0.29, 20),
      b(s, t.metal, [0, 0, -0.89], [0, 0, -0.92], 0.272, 0.272, 20));
    let c = [[0, 0]];
    for (let e = 1; e <= 2; e++)
      for (let t = 0; t < e * 6; t++) {
        let n = (t * Math.PI * 2) / (e * 6);
        c.push([Math.cos(n) * e * 0.098, Math.sin(n) * e * 0.098]);
      }
    for (let [e, n] of c)
      b(s, t.dark, [e, n, -0.925], [e, n, -0.942], 0.036, 0.036, 8);
    for (let r of [-0.17, 0.17])
      for (let i of [-0.16, 0.16]) {
        let a = g(n, `missile-exterior`, [e * 2.44 + r, 1.04 + i, 0]);
        (b(a, t.dark, [0, 0, -0.93], [0, 0, 0.74], 0.073, 0.073, 12),
          b(a, t.lens, [0, 0, -0.94], [0, 0, -1.08], 0.071, 0.025, 12),
          v(a, t.yellow, [0, 0, -0.72], [0.15, 0.015, 0.035]));
        for (let e of [0, Math.PI / 2]) {
          let n = v(a, t.skin, [0, 0, 0.5], [0.34, 0.018, 0.3]);
          n.rotation.z = e;
        }
      }
    (b(
      n,
      t.skin,
      [e * 0.7, 1.79, -1.74],
      [e * 1.55, 0.48, -1.87],
      0.095,
      0.068,
    ),
      b(n, t.metal, [e * 1.15, 1.05, -1.8], [e * 1.56, 0.42, -1.87], 0.052),
      b(n, t.skin, [e * 0.79, 1.38, -0.5], [e * 1.48, 0.46, -1.8], 0.044),
      T(n, t, e * 1.62, -1.87, 0.42),
      j(n, t, e * 0.446, 1.76, 4.8, `641`));
  }
  let i = g(e, `tail-boom`);
  (C(i, t.skin, [
    [2.35, 0.67, 1.17, 2.78],
    [4, 0.5, 1.23, 2.44],
    [5.8, 0.38, 1.32, 2.22],
    [7.6, 0.3, 1.39, 2.13],
    [8.95, 0.21, 1.49, 2.1],
  ]),
    w(i, t.skin, 0, 0.22, [
      [1.56, 7.9],
      [3.21, 8.56],
      [3.65, 9.35],
      [1.58, 9.13],
    ]));
  for (let e of [-1, 1]) {
    let n = [
      [e * 0.1, 1.96, 7.4],
      [e * 1.64, 1.9, 7.76],
      [e * 1.49, 1.92, 8.52],
      [e * 0.09, 2.03, 8.21],
    ];
    (x(i, t.panel, e > 0 ? n.slice().reverse() : n),
      x(
        i,
        t.skin,
        e > 0
          ? n.map(([e, t, n]) => [e, t - 0.05, n])
          : n.map(([e, t, n]) => [e, t - 0.05, n]).reverse(),
      ),
      b(i, t.dark, [e * 0.18, 1.43, 7.41], [e * 0.17, 0.26, 8.06], 0.07),
      b(i, t.metal, [e * 0.17, 0.83, 7.75], [e * 0.17, 0.31, 8.06], 0.039));
  }
  (T(i, t, 0, 8.06, 0.255),
    b(i, t.dark, [0, 2.4, 4.5], [0, 2.85, 4.9], 0.021, 0.008),
    b(i, t.dark, [0, 2.31, 5.22], [0, 2.6, 5.47], 0.025, 0.01),
    y(n, t.dark, [0, 1.92, -4.99], [0.49, 0.31, 0.35]),
    y(n, t.skin, [0, 2.34, -4.99], [0.27, 0.2, 0.26]));
  for (let [e, r] of [
    [-0.22, 0.16],
    [0.2, 0.12],
  ])
    b(n, t.lens, [e, 1.97, -5.24], [e, 1.97, -5.3], r, r, 16);
  v(n, t.lens, [0, 2.35, -5.245], [0.24, 0.105, 0.025]);
  let a = g(e, `chin-cannon-traverse`, [0, 1.15, -3.54]);
  b(a, t.dark, [0, 0, 0], [0, -0.26, 0], 0.17);
  let o = g(a, `chin-cannon-elevation`, [0, -0.25, 0]);
  (v(o, t.dark, [0, 0, -0.18], [0.23, 0.21, 0.62]),
    b(o, t.metal, [0, 0, -0.35], [0, 0, -1.29], 0.035),
    b(o, t.dark, [0, 0, -1.28], [0, 0, -1.37], 0.052),
    b(o, t.skin, [0.21, 0.1, 0.13], [0.21, -0.05, -0.41], 0.032));
  let s = g(o, `chin-cannon-muzzle`, [0, 0, -1.37]);
  (C(n, t.skin, [
    [-0.34, 0.37, 2.68, 3.13],
    [0.03, 0.46, 2.69, 3.5],
    [0.9, 0.45, 2.71, 3.4],
    [1.38, 0.26, 2.77, 3.08],
  ]),
    b(n, t.metal, [0, 3.38, 0.14], [0, 3.89, 0.14], 0.13));
  let c = O(e, t, 7.3, 3.95, 0.14);
  return (
    b(n, t.dark, [0, 4, 0.14], [0, 4.43, 0.14], 0.16),
    y(n, t.skin, [0, 4.48, 0.14], [0.72, 0.22, 0.64]),
    b(n, t.seam, [0, 4.39, 0.14], [0, 4.45, 0.14], 0.69, 0.69, 28),
    {
      rotor: c,
      tailRotor: k(i, t, [-0.29, 2.6, 8.85], 1.25, !1),
      tail: i,
      doors: [],
      turret: a,
      elevation: o,
      muzzle: s,
    }
  );
}
function P(e) {
  for (let t of [...e.children]) t.isGroup && P(t);
  let t = /^(main-rotor|tail-rotor|tail-boom|cabin-door-|chin-cannon-|unused-)/;
  for (let n of [...e.children])
    if (n.isGroup && !t.test(n.name)) {
      n.updateMatrix();
      for (let t of [...n.children])
        (t.updateMatrix(),
          t.matrix.premultiply(n.matrix),
          t.matrix.decompose(t.position, t.quaternion, t.scale),
          e.add(t));
      e.remove(n);
    }
  let n = new Map();
  for (let t of [...e.children])
    if (t.isMesh) {
      t.updateMatrix();
      let r = t.geometry.index ? t.geometry.toNonIndexed() : t.geometry.clone();
      for (let e of Object.keys(r.attributes))
        [`position`, `normal`].includes(e) || r.deleteAttribute(e);
      r.applyMatrix4(t.matrix);
      let i = n.get(t.material) ?? [];
      (i.push(r), n.set(t.material, i), t.geometry.dispose(), e.remove(t));
    }
  for (let [t, r] of n) {
    let n = d(r, !1);
    for (let e of r) e.dispose();
    _(e, n, t);
  }
}
var F = { 0: 13209650, 1: 5408432, [-1]: 14733201 },
  I = { uh60m: [0, 3.27, 1.6], ah64e: [0, 2.89, 1.9] };
function L(e, { paint: t = `olive`, team: n = null, doors: i = !1 } = {}) {
  let a = f.find((t) => t.key === e);
  if (!a) throw Error(`Unknown helicopter: ${e}`);
  let s = new l();
  s.name = a.name;
  let c = h(t),
    u = e === `uh60m` ? M(s, c) : N(s, c);
  if (n != null) {
    let t = F[n] ?? F[0];
    ((c.team = new r({
      color: t,
      emissive: t,
      emissiveIntensity: 0.12,
      roughness: 0.6,
      metalness: 0.1,
    })),
      v(s, c.team, I[e], [0.5, 0.03, 0.45]));
  }
  ((u.turret ??= g(s, `unused-turret`)),
    (u.elevation ??= g(u.turret, `unused-elevation`)),
    (u.muzzle ??= g(u.elevation, `unused-muzzle`)),
    P(s));
  let d = new Set([c.skin, c.panel, c.seam, c.rubber, c.metal, c.team]);
  (s.traverse((e) => {
    e.isMesh && !d.has(e.material) && (e.userData.seeThrough = !0);
  }),
    (s.userData = {
      modelKey: e,
      paint: t,
      units: `metres`,
      rotorDiameter: a.rotorDiameter,
    }));
  let p = new o().setFromObject(s);
  s.userData.bounds = { min: p.min.toArray(), max: p.max.toArray() };
  let m = (e) => {
    for (let t of u.doors)
      ((t.position.z = e ? 3.18 : 0),
        (t.position.x = Math.sign(t.position.x) * (e ? 1.35 : 1.27)));
  };
  return (
    i && m(!0),
    {
      root: s,
      ...u,
      setDoors: m,
      materials: c,
      dispose() {
        s.traverse((e) => {
          e.isMesh && e.geometry.dispose();
        });
        for (let e of Object.values(c)) e.dispose();
        s.removeFromParent();
      },
    }
  );
}
