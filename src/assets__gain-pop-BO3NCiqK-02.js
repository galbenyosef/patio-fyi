// assets__gain-pop-BO3NCiqK 02 — math
// Lines 90-452 of readable/assets__gain-pop-BO3NCiqK.pretty.js (statement-aligned).
function Le() {
  let t = new F(),
    r = new Set(),
    a = (e) => (r.add(e), e);
  ((t.background = Ie.clone()), (t.fog = new M(Ie.clone(), 90, 900)));
  let u = je(1500);
  (a(u.mesh.geometry),
    a(u.material),
    u.uniforms.uZenith.value.setRGB(0.16, 0.33, 0.66),
    u.uniforms.uHorizon.value.copy(Ie),
    u.uniforms.uHaze.value.setRGB(0.5, 0.52, 0.5),
    u.uniforms.uGroundDeep.value.setRGB(0.3, 0.32, 0.28),
    u.uniforms.uSunDir.value.copy(Fe),
    u.uniforms.uSunColor.value.setRGB(1, 0.93, 0.82),
    t.add(u.mesh),
    t.add(new A(12900592, 6182466, 1.35)));
  let d = new e(16773336, 3.1);
  (d.position
    .copy(Fe)
    .multiplyScalar(160)
    .add(new s(0, 0, -60)),
    d.target.position.set(0, 0, -60),
    (d.castShadow = !0),
    d.shadow.mapSize.set(2048, 2048),
    Object.assign(d.shadow.camera, {
      left: -70,
      right: 70,
      top: 90,
      bottom: -90,
      near: 10,
      far: 400,
    }),
    (d.shadow.bias = -4e-4),
    (d.shadow.normalBias = 0.03),
    t.add(d, d.target));
  let f = a(new o({ vertexColors: !0, roughness: 0.86, metalness: 0 })),
    m = a(new o({ vertexColors: !0, roughness: 0.12, metalness: 0.55 })),
    h = a(new o({ vertexColors: !0, roughness: 0.5, metalness: 0.6 })),
    g = new Map([
      [f, []],
      [m, []],
      [h, []],
    ]),
    _ = new x(),
    y = new L(),
    b = new w(),
    C = new ee(),
    T = new s();
  function D(e, t, n, r, i, a, o = 0, l = 0, u = 0) {
    let d = e.index ? e.toNonIndexed() : e;
    (d !== e && e.dispose(), d.deleteAttribute(`uv`), _.set(n));
    let f = d.attributes.position.count,
      p = new Float32Array(f * 3);
    for (let e = 0; e < f; e++) _.toArray(p, e * 3);
    (d.setAttribute(`color`, new c(p, 3)),
      d.applyMatrix4(
        y.compose(
          T.set(r, i, a),
          b.setFromEuler(C.set(o, l, u)),
          new s(1, 1, 1),
        ),
      ),
      g.get(t).push(d));
  }
  let O = (e, t, n, r, a, o, s, c = f, l = 0, u = 0, d = 0) =>
      D(new i(e, t, n), c, r, a, o, s, l, u, d),
    k = (e, t, n, r, i, a, o, s = f, c = 0, l = 0, u = 0, d = 8) =>
      D(new j(e, t, n, d), s, r, i, a, o, c, l, u),
    I = (e, r, o, s, c, l = 0) => {
      let u = Te(new i(r, 0.1, o), De[e].scale),
        d = new n(a(u), Ee(e));
      return (
        d.position.set(s, l - 0.05, c),
        (d.receiveShadow = !0),
        t.add(d),
        d
      );
    };
  (I(`lawn`, 1400, 1400, 0, -300, -0.02),
    I(`asphalt`, 8.4, 520, 0, -248, 0.01));
  for (let e of [-1, 1])
    (I(`pavers`, 2.4, 520, e * 5.550000000000001, -248, 0.13),
      O(0.18, 0.16, 520, 10722964, e * 4.29, 0.08, -248));
  for (let e = 6; e > -508; e -= 9)
    O(0.14, 0.012, 4.5, 14275252, 0, 0.068, e - 2.25);
  let R = Oe(4242),
    te = [
      14208440, 13219738, 12042436, 14867661, 11049087, 13616040, 10332058,
      14074024,
    ],
    z = [4865850, 3882821, 5913136, 4540234];
  function ne(e, t, n, r, i, a) {
    let o = e * 12.1,
      c = o + (e * r) / 2,
      l = i * 3,
      u = te[a % te.length],
      d = z[(a * 3) % z.length],
      g = o + e * 0.02;
    (O(r, l, n, u, c, l / 2 + 0.3, t),
      O(r + 0.24, 0.32, n + 0.24, 7169886, c, 0.16, t));
    let _ = 0.62,
      v = r / 2 + 0.35,
      y = v / Math.cos(_),
      b = (Math.tan(_) * r) / 2;
    for (let e of [-1, 1])
      O(
        y,
        0.16,
        n + 0.6,
        d,
        c + (e * v) / 2,
        l + 0.3 + b / 2 + 0.06,
        t,
        f,
        0,
        0,
        -e * _,
      );
    let x = new p().setFromPoints([
      new s(-r / 2, 0, 0),
      new s(r / 2, 0, 0),
      new s(0, b, 0),
    ]);
    x.computeVertexNormals();
    for (let e of [-1, 1]) {
      let r = x.clone();
      (e < 0 && r.rotateY(Math.PI), D(r, f, u, c, l + 0.3, t + (e * n) / 2));
    }
    (x.dispose(),
      O(0.3, 0.18, n + 0.64, 2893862, c, l + 0.3 + b + 0.12, t),
      O(
        0.7,
        1.8,
        0.7,
        8015420,
        c - e * r * 0.18,
        l + 0.3 + b * 0.7 + 0.6,
        t + n * 0.28,
      ),
      O(
        0.82,
        0.12,
        0.82,
        5920082,
        c - e * r * 0.18,
        l + 0.3 + b * 0.7 + 1.52,
        t + n * 0.28,
      ));
    let S = Math.max(2, Math.round(n / 3.2)),
      C = n / S;
    for (let r = 0; r < i; r++)
      for (let i = 0; i < S; i++) {
        let a = t - n / 2 + C * (i + 0.5),
          s = r * 3 + 0.3 + 1.65;
        if (r === 0 && i === Math.floor(S / 2)) {
          (O(0.08, 2.15, 1.05, 3877408, g, 1.38, a),
            O(0.1, 0.12, 1.25, 15262938, g, 2.5, a),
            O(0.9, 0.18, 1.4, 9209726, o + e * -0.45, 0.31, a));
          continue;
        }
        O(0.06, 1.35, 1.15, 1844267, g, s, a, m);
        for (let e of [-0.6, 0.6]) O(0.12, 1.47, 0.1, 15526110, g, s, a + e);
        for (let e of [-0.7, 0.7]) O(0.12, 0.1, 1.3, 15526110, g, s + e, a);
        (O(0.12, 1.35, 0.06, 15526110, g, s, a),
          O(0.3, 0.08, 1.36, 14209992, g - e * 0.12, s - 0.78, a));
      }
    O(0.14, 0.12, n + 0.6, 7040882, o + e * -0.3, l + 0.24, t, h);
  }
  for (let e of [-1, 1]) {
    let t = -8 - R() * 4,
      n = e > 0 ? 3 : 0;
    for (; t > -330;) {
      let r = 9 + R() * 4,
        i = 8 + R() * 3;
      (ne(e, t - r / 2, r, i, R() < 0.55 ? 2 : 1, n++), (t -= r + 6 + R() * 6));
    }
  }
  let B = [];
  for (let e = -6; e > -330; e -= 34) B.push(e);
  for (let e of B) {
    let t = -6.25;
    (k(0.13, 0.16, 9, 5981748, t, 4.5, e),
      O(0.12, 0.14, 2.2, 5061420, t, 8.4, e, f, 0, Math.PI / 2));
    for (let n of [-0.9, 0, 0.9]) k(0.05, 0.05, 0.16, 14144712, t + n, 8.55, e);
  }
  let V = a(new o({ color: 1908513, roughness: 0.6 }));
  for (let e = 0; e + 1 < B.length; e++)
    for (let r of [-0.9, 0, 0.9]) {
      let i = -6.25 + r,
        o = [];
      for (let t = 0; t <= 12; t++) {
        let n = t / 12;
        o.push(
          new s(
            i,
            8.62 - Math.sin(Math.PI * n) * 0.75,
            B[e] + (B[e + 1] - B[e]) * n,
          ),
        );
      }
      t.add(new n(a(new l(new v(o), 12, 0.012, 3)), V));
    }
  for (let e = -6; e > -330; e -= 2.4) {
    let t = 7.8;
    (O(0.08, 0.9, 0.08, 15131350, t, 0.45, e),
      e > -328 && O(0.04, 0.08, 2.4, 15131350, t, 0.75, e - 1.2));
  }
  for (let [e, r] of g) {
    let i = a(P(r, !1));
    r.forEach((e) => e.dispose());
    let o = new n(i, e);
    ((o.castShadow = o.receiveShadow = !0), t.add(o));
  }
  let H = new p(),
    W = [],
    se = [],
    ce = Oe(9);
  for (let e = 0; e < 64; e++) {
    let t = (e / 64) * Math.PI * 2,
      n = ((e + 1) / 64) * Math.PI * 2,
      r = 30 + 60 * ce(),
      i = (e) => [Math.sin(e) * 620, 0, -Math.cos(e) * 620 - 200],
      a = [
        Math.sin((t + n) / 2) * 620 * 0.97,
        r,
        -Math.cos((t + n) / 2) * 620 * 0.97 - 200,
      ];
    (W.push(...i(t), ...a, ...i(n)),
      se.push(0.27, 0.33, 0.22, 0.34, 0.4, 0.27, 0.27, 0.33, 0.22));
  }
  (H.setAttribute(`position`, new S(W, 3)),
    H.setAttribute(`color`, new S(se, 3)),
    H.computeVertexNormals(),
    t.add(new n(a(H), a(new o({ vertexColors: !0, roughness: 1, side: 2 })))));
  let le = a(
      new o({
        map: ke(),
        vertexColors: !0,
        alphaTest: 0.5,
        side: 2,
        roughness: 0.8,
      }),
    ),
    ue = a(new o({ vertexColors: !0, roughness: 0.9 })),
    de = [`maple`, `linden`, `beech`, `birch`, `spruce`].map((e, t) => {
      let n = Ae.find((t) => t.key === e).build(11 + t, t === 0 ? 0 : 1);
      return (a(n.wood), n.leaves && a(n.leaves), n);
    }),
    fe = (e, r, i, a = 1, o = 0) => {
      let s = de[e],
        c = new E();
      (c.position.set(r, 0, i), (c.rotation.y = o), c.scale.setScalar(a));
      for (let [e, t] of [
        [s.wood, ue],
        [s.leaves, le],
      ])
        if (e) {
          let r = new n(e, t);
          ((r.castShadow = r.receiveShadow = !0), c.add(r));
        }
      t.add(c);
    };
  for (let e of [-1, 1])
    for (let t = -14 - R() * 6; t > -320; t -= 16 + R() * 10)
      fe(Math.floor(R() * 3), e * 9.2, t, 0.9 + R() * 0.3, R() * 6);
  for (let e = 0; e < 70; e++) {
    let e = R() < 0.5 ? -1 : 1;
    fe(
      Math.floor(R() * 5),
      e * (34 + R() * 60),
      -20 - R() * 360,
      0.9 + R() * 0.6,
      R() * 6,
    );
  }
  let G = we.find((e) => e.key === `sedan`) ?? we[0],
    K = we.filter((e) => e !== G);
  for (let [e, n, r, i, a] of [
    [G, 3821432, -3.1500000000000004, -24, 0],
    [K[0] ?? G, 14080218, 3.1500000000000004, -52, Math.PI],
    [K[1] ?? G, 9316906, -3.1500000000000004, -96, 0],
    [K[2] ?? G, 3421754, 3.1500000000000004, -140, Math.PI],
  ]) {
    let o = Ce(e, n);
    (o.position.set(r, 0, i),
      (o.rotation.y = a),
      o.traverse((e) => {
        e.isMesh && (e.castShadow = e.receiveShadow = !0);
      }),
      t.add(o));
  }
  let q = ie(t, 6);
  q.group.traverse((e) => {
    e.isMesh &&
      ((e.castShadow = !0), (e.receiveShadow = !0), (e.frustumCulled = !1));
  });
  let pe = ae(),
    me = U(),
    he = new x(9316906),
    ge = [
      [0, -40, 0.2, 1.8, 0],
      [-5.3, -21.5, -0.35, 1.3, 1],
      [5.6, -68, 0.5, 1.8, 1],
      [-2.2, -118, -0.2, 1.8, 1],
      [7.4, -190, 0.7, 1.8, 0],
    ];
  (q.setCount(ge.length),
    ge.forEach(([e, t, n, r, i], a) => {
      (q.setIdentity(a, 3 + a * 7),
        q.setFaction(a, 1),
        q.setColor(a, he),
        oe(
          {
            h: r,
            lean: 0,
            hspeed: 0,
            moveF: 0,
            moveR: 0,
            phase: 0,
            sprintW: 0,
            aimW: i,
            pitch: 0,
            grounded: !0,
            swim: !1,
            airT: 0,
            fireT: 99,
            reloadT: 99,
            hitT: 99,
            landT: 99,
            deadT: -1,
            deadDir: 0,
            breathe: 0,
          },
          me,
        ),
        pe.root.position.set(e, 0, t),
        pe.root.rotation.set(0, Math.PI + n, 0),
        re(
          pe,
          me,
          q,
          a,
          `none`,
          0,
          null,
          [`assault`, `support`, `assault`, `sniper`, `engineer`][a],
        ));
    }),
    q.flush());
  let J = new N(55, 1, 0.2, 2e3);
  return (
    J.position.set(0, Ne, 0),
    J.lookAt(Pe),
    t.add(J),
    {
      world: t,
      camera: J,
      dispose() {
        (q.dispose?.(), r.forEach((e) => e.dispose()));
      },
    }
  );
}
