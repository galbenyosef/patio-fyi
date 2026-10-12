// assets__grenade-view-BrGxzfLZ 02 — math
// Lines 79-441 of readable/assets__grenade-view-BrGxzfLZ.pretty.js (statement-aligned).
function Oe() {
  let n = new w(),
    r = new Set(),
    a = (e) => (r.add(e), e);
  ((n.background = De.clone()), (n.fog = new x(De.clone(), 90, 900)));
  let o = Ce(1500);
  (a(o.mesh.geometry),
    a(o.material),
    o.uniforms.uZenith.value.setRGB(0.16, 0.33, 0.66),
    o.uniforms.uHorizon.value.copy(De),
    o.uniforms.uHaze.value.setRGB(0.5, 0.52, 0.5),
    o.uniforms.uGroundDeep.value.setRGB(0.3, 0.32, 0.28),
    o.uniforms.uSunDir.value.copy(Ee),
    o.uniforms.uSunColor.value.setRGB(1, 0.93, 0.82),
    n.add(o.mesh),
    n.add(new S(12900592, 6182466, 1.35)));
  let d = new y(16773336, 3.1);
  (d.position
    .copy(Ee)
    .multiplyScalar(160)
    .add(new k(0, 0, -60)),
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
    n.add(d, d.target));
  let p = a(new v({ vertexColors: !0, roughness: 0.86, metalness: 0 })),
    m = a(new v({ vertexColors: !0, roughness: 0.12, metalness: 0.55 })),
    _ = a(new v({ vertexColors: !0, roughness: 0.5, metalness: 0.6 })),
    D = new Map([
      [p, []],
      [m, []],
      [_, []],
    ]),
    A = new g(),
    j = new u(),
    M = new b(),
    ee = new C(),
    N = new k();
  function P(e, t, n, r, i, a, o = 0, c = 0, l = 0) {
    let u = e.index ? e.toNonIndexed() : e;
    (u !== e && e.dispose(), u.deleteAttribute(`uv`), A.set(n));
    let d = u.attributes.position.count,
      f = new Float32Array(d * 3);
    for (let e = 0; e < d; e++) A.toArray(f, e * 3);
    (u.setAttribute(`color`, new s(f, 3)),
      u.applyMatrix4(
        j.compose(
          N.set(r, i, a),
          M.setFromEuler(ee.set(o, c, l)),
          new k(1, 1, 1),
        ),
      ),
      D.get(t).push(u));
  }
  let F = (e, t, n, r, a, o, s, c = p, l = 0, u = 0, d = 0) =>
      P(new i(e, t, n), c, r, a, o, s, l, u, d),
    R = (e, t, n, r, i, a, o, s = p, l = 0, u = 0, d = 0, f = 8) =>
      P(new c(e, t, n, f), s, r, i, a, o, l, u, d),
    z = (e, t, r, o, s, c = 0) => {
      let l = _e(new i(t, 0.1, r), ye[e].scale),
        u = new h(a(l), ve(e));
      return (
        u.position.set(o, c - 0.05, s),
        (u.receiveShadow = !0),
        n.add(u),
        u
      );
    };
  (z(`lawn`, 1400, 1400, 0, -300, -0.02),
    z(`asphalt`, 8.4, 520, 0, -248, 0.01));
  for (let e of [-1, 1])
    (z(`pavers`, 2.4, 520, e * 5.550000000000001, -248, 0.13),
      F(0.18, 0.16, 520, 10722964, e * 4.29, 0.08, -248));
  for (let e = 6; e > -508; e -= 9)
    F(0.14, 0.012, 4.5, 14275252, 0, 0.068, e - 2.25);
  let B = be(4242),
    ie = [
      14208440, 13219738, 12042436, 14867661, 11049087, 13616040, 10332058,
      14074024,
    ],
    ae = [4865850, 3882821, 5913136, 4540234];
  function oe(e, t, n, r, i, a) {
    let o = e * 12.1,
      s = o + (e * r) / 2,
      c = i * 3,
      u = ie[a % ie.length],
      d = ae[(a * 3) % ae.length],
      f = o + e * 0.02;
    (F(r, c, n, u, s, c / 2 + 0.3, t),
      F(r + 0.24, 0.32, n + 0.24, 7169886, s, 0.16, t));
    let h = 0.62,
      g = r / 2 + 0.35,
      v = g / Math.cos(h),
      y = (Math.tan(h) * r) / 2;
    for (let e of [-1, 1])
      F(
        v,
        0.16,
        n + 0.6,
        d,
        s + (e * g) / 2,
        c + 0.3 + y / 2 + 0.06,
        t,
        p,
        0,
        0,
        -e * h,
      );
    let b = new l().setFromPoints([
      new k(-r / 2, 0, 0),
      new k(r / 2, 0, 0),
      new k(0, y, 0),
    ]);
    b.computeVertexNormals();
    for (let e of [-1, 1]) {
      let r = b.clone();
      (e < 0 && r.rotateY(Math.PI), P(r, p, u, s, c + 0.3, t + (e * n) / 2));
    }
    (b.dispose(),
      F(0.3, 0.18, n + 0.64, 2893862, s, c + 0.3 + y + 0.12, t),
      F(
        0.7,
        1.8,
        0.7,
        8015420,
        s - e * r * 0.18,
        c + 0.3 + y * 0.7 + 0.6,
        t + n * 0.28,
      ),
      F(
        0.82,
        0.12,
        0.82,
        5920082,
        s - e * r * 0.18,
        c + 0.3 + y * 0.7 + 1.52,
        t + n * 0.28,
      ));
    let x = Math.max(2, Math.round(n / 3.2)),
      S = n / x;
    for (let r = 0; r < i; r++)
      for (let i = 0; i < x; i++) {
        let a = t - n / 2 + S * (i + 0.5),
          s = r * 3 + 0.3 + 1.65;
        if (r === 0 && i === Math.floor(x / 2)) {
          (F(0.08, 2.15, 1.05, 3877408, f, 1.38, a),
            F(0.1, 0.12, 1.25, 15262938, f, 2.5, a),
            F(0.9, 0.18, 1.4, 9209726, o + e * -0.45, 0.31, a));
          continue;
        }
        F(0.06, 1.35, 1.15, 1844267, f, s, a, m);
        for (let e of [-0.6, 0.6]) F(0.12, 1.47, 0.1, 15526110, f, s, a + e);
        for (let e of [-0.7, 0.7]) F(0.12, 0.1, 1.3, 15526110, f, s + e, a);
        (F(0.12, 1.35, 0.06, 15526110, f, s, a),
          F(0.3, 0.08, 1.36, 14209992, f - e * 0.12, s - 0.78, a));
      }
    F(0.14, 0.12, n + 0.6, 7040882, o + e * -0.3, c + 0.24, t, _);
  }
  for (let e of [-1, 1]) {
    let t = -8 - B() * 4,
      n = e > 0 ? 3 : 0;
    for (; t > -330;) {
      let r = 9 + B() * 4,
        i = 8 + B() * 3;
      (oe(e, t - r / 2, r, i, B() < 0.55 ? 2 : 1, n++), (t -= r + 6 + B() * 6));
    }
  }
  let V = [];
  for (let e = -6; e > -330; e -= 34) V.push(e);
  for (let e of V) {
    let t = -6.25;
    (R(0.13, 0.16, 9, 5981748, t, 4.5, e),
      F(0.12, 0.14, 2.2, 5061420, t, 8.4, e, p, 0, Math.PI / 2));
    for (let n of [-0.9, 0, 0.9]) R(0.05, 0.05, 0.16, 14144712, t + n, 8.55, e);
  }
  let se = a(new v({ color: 1908513, roughness: 0.6 }));
  for (let e = 0; e + 1 < V.length; e++)
    for (let r of [-0.9, 0, 0.9]) {
      let i = -6.25 + r,
        o = [];
      for (let t = 0; t <= 12; t++) {
        let n = t / 12;
        o.push(
          new k(
            i,
            8.62 - Math.sin(Math.PI * n) * 0.75,
            V[e] + (V[e + 1] - V[e]) * n,
          ),
        );
      }
      n.add(new h(a(new f(new t(o), 12, 0.012, 3)), se));
    }
  for (let e = -6; e > -330; e -= 2.4) {
    let t = 7.8;
    (F(0.08, 0.9, 0.08, 15131350, t, 0.45, e),
      e > -328 && F(0.04, 0.08, 2.4, 15131350, t, 0.75, e - 1.2));
  }
  for (let [e, t] of D) {
    let r = a(O(t, !1));
    t.forEach((e) => e.dispose());
    let i = new h(r, e);
    ((i.castShadow = i.receiveShadow = !0), n.add(i));
  }
  let H = new l(),
    ce = [],
    le = [],
    ue = be(9);
  for (let e = 0; e < 64; e++) {
    let t = (e / 64) * Math.PI * 2,
      n = ((e + 1) / 64) * Math.PI * 2,
      r = 30 + 60 * ue(),
      i = (e) => [Math.sin(e) * 620, 0, -Math.cos(e) * 620 - 200],
      a = [
        Math.sin((t + n) / 2) * 620 * 0.97,
        r,
        -Math.cos((t + n) / 2) * 620 * 0.97 - 200,
      ];
    (ce.push(...i(t), ...a, ...i(n)),
      le.push(0.27, 0.33, 0.22, 0.34, 0.4, 0.27, 0.27, 0.33, 0.22));
  }
  (H.setAttribute(`position`, new E(ce, 3)),
    H.setAttribute(`color`, new E(le, 3)),
    H.computeVertexNormals(),
    n.add(new h(a(H), a(new v({ vertexColors: !0, roughness: 1, side: 2 })))));
  let de = a(
      new v({
        map: xe(),
        vertexColors: !0,
        alphaTest: 0.5,
        side: 2,
        roughness: 0.8,
      }),
    ),
    fe = a(new v({ vertexColors: !0, roughness: 0.9 })),
    pe = [`maple`, `linden`, `beech`, `birch`, `spruce`].map((e, t) => {
      let n = Se.find((t) => t.key === e).build(11 + t, t === 0 ? 0 : 1);
      return (a(n.wood), n.leaves && a(n.leaves), n);
    }),
    me = (e, t, r, i = 1, a = 0) => {
      let o = pe[e],
        s = new T();
      (s.position.set(t, 0, r), (s.rotation.y = a), s.scale.setScalar(i));
      for (let [e, t] of [
        [o.wood, fe],
        [o.leaves, de],
      ])
        if (e) {
          let n = new h(e, t);
          ((n.castShadow = n.receiveShadow = !0), s.add(n));
        }
      n.add(s);
    };
  for (let e of [-1, 1])
    for (let t = -14 - B() * 6; t > -320; t -= 16 + B() * 10)
      me(Math.floor(B() * 3), e * 9.2, t, 0.9 + B() * 0.3, B() * 6);
  for (let e = 0; e < 70; e++) {
    let e = B() < 0.5 ? -1 : 1;
    me(
      Math.floor(B() * 5),
      e * (34 + B() * 60),
      -20 - B() * 360,
      0.9 + B() * 0.6,
      B() * 6,
    );
  }
  let U = ge.find((e) => e.key === `sedan`) ?? ge[0],
    W = ge.filter((e) => e !== U);
  for (let [e, t, r, i, a] of [
    [U, 3821432, -3.1500000000000004, -24, 0],
    [W[0] ?? U, 14080218, 3.1500000000000004, -52, Math.PI],
    [W[1] ?? U, 9316906, -3.1500000000000004, -96, 0],
    [W[2] ?? U, 3421754, 3.1500000000000004, -140, Math.PI],
  ]) {
    let o = he(e, t);
    (o.position.set(r, 0, i),
      (o.rotation.y = a),
      o.traverse((e) => {
        e.isMesh && (e.castShadow = e.receiveShadow = !0);
      }),
      n.add(o));
  }
  let G = L(n, 6);
  G.group.traverse((e) => {
    e.isMesh &&
      ((e.castShadow = !0), (e.receiveShadow = !0), (e.frustumCulled = !1));
  });
  let K = ne(),
    Oe = I(),
    q = new g(9316906),
    J = [
      [0, -40, 0.2, 1.8, 0],
      [-5.3, -21.5, -0.35, 1.3, 1],
      [5.6, -68, 0.5, 1.8, 1],
      [-2.2, -118, -0.2, 1.8, 1],
      [7.4, -190, 0.7, 1.8, 0],
    ];
  (G.setCount(J.length),
    J.forEach(([e, t, n, r, i], a) => {
      (G.setIdentity(a, 3 + a * 7),
        G.setFaction(a, 1),
        G.setColor(a, q),
        re(
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
          Oe,
        ),
        K.root.position.set(e, 0, t),
        K.root.rotation.set(0, Math.PI + n, 0),
        te(
          K,
          Oe,
          G,
          a,
          `none`,
          0,
          null,
          [`assault`, `support`, `assault`, `sniper`, `engineer`][a],
        ));
    }),
    G.flush());
  let Y = new e(55, 1, 0.2, 2e3);
  return (
    Y.position.set(0, we, 0),
    Y.lookAt(Te),
    n.add(Y),
    {
      world: n,
      camera: Y,
      dispose() {
        (G.dispose?.(), r.forEach((e) => e.dispose()));
      },
    }
  );
}
