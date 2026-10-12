// assets__effects-BZzGHRRU 06 — math
// Lines 2657-3259 of readable/assets__effects-BZzGHRRU.pretty.js (statement-aligned).
function T(t, n, r, i = {}) {
  let a = n.scene,
    o = e(i.seed ?? n.config?.seed ?? 1).fork(`effects-showcase`),
    s = new t.Group();
  ((s.name = `fx:showcase`), a.add(s));
  let c = n.debugGround(900);
  (a.remove(c), c.geometry.dispose(), c.material.dispose());
  let l = null;
  (a.traverse((e) => {
    !l && e.type === `GridHelper` && (l = e);
  }),
    l &&
      (a.remove(l),
      l.geometry.dispose(),
      l.material.dispose && l.material.dispose()));
  let u = D(t, o);
  ((u.receiveShadow = !0), (u.name = `fx:ground`), s.add(u));
  let d = !!a.fog;
  d || (a.fog = new t.FogExp2(12769772, 0.003));
  let f = E(t, a, s);
  f.apply(i.tod ?? n.world.time.tod ?? 14);
  let p = n.events.on(`env:timeOfDay`, (e) => {
      e && typeof e.tod == `number` && f.apply(e.tod);
    }),
    m = [1.35, 1.56, 0.35],
    h = [-5.4, 1, -2.55],
    g = [0.9, 1.54, -0.4],
    _ = (e, t) => n.world.map.getHeight(e, t),
    v = [],
    y = [
      {
        surface: `dirt`,
        label: `DIRT`,
        color: 8017462,
        x: -14,
        z: -30,
        w: 3.2,
        h: 2.4,
        d: 1.2,
      },
      {
        surface: `rock`,
        label: `ROCK`,
        color: 9144190,
        x: 10,
        z: -48,
        w: 3,
        h: 2.8,
        d: 1.4,
      },
      {
        surface: `metal`,
        label: `METAL`,
        color: 6122360,
        x: -6,
        z: -70,
        w: 3.4,
        h: 2.6,
        d: 0.8,
      },
      {
        surface: `wood`,
        label: `WOOD`,
        color: 12159573,
        x: 18,
        z: -95,
        w: 3.2,
        h: 2.6,
        d: 1,
      },
      {
        surface: `sand`,
        label: `SAND`,
        color: 14271631,
        x: -20,
        z: -120,
        w: 3.6,
        h: 2.2,
        d: 1.6,
      },
      {
        surface: `water`,
        label: `WATER`,
        color: 5211821,
        x: 4,
        z: -150,
        w: 5,
        h: 0.35,
        d: 5,
        pool: !0,
      },
    ],
    b = [],
    S = (e, n, r, i, a = 1) => {
      let o = new t.BoxGeometry(e, n, r),
        s = new t.Color(i),
        c = o.attributes.position.count,
        l = new Float32Array(c * 3),
        u = o.attributes.normal;
      for (let e = 0; e < c; e++) {
        let t =
          0.82 + 0.18 * Math.max(0, u.getY(e)) + 0.06 * Math.max(0, u.getX(e));
        ((l[e * 3] = s.r * t * a),
          (l[e * 3 + 1] = s.g * t * a),
          (l[e * 3 + 2] = s.b * t * a));
      }
      return (o.setAttribute(`color`, new t.BufferAttribute(l, 3)), o);
    };
  for (let e of y) {
    let t = _(e.x, e.z);
    if (e.pool) {
      let n = S(e.w + 0.8, 0.4, e.d + 0.8, 7236192);
      (n.translate(e.x, t + 0.2, e.z), b.push(n));
      let r = S(e.w, 0.3, e.d, e.color);
      (r.translate(e.x, t + 0.32, e.z),
        b.push(r),
        (e.top = t + 0.47),
        (e.face = null),
        v.push([e.x, t, e.z, e.w * 0.95, 0.3]));
    } else {
      let n = S(e.w + 0.6, 0.3, e.d + 0.6, 6972504);
      (n.translate(e.x, t + 0.15, e.z), b.push(n));
      let r = S(e.w, e.h, e.d, e.color);
      (r.translate(e.x, t + 0.3 + e.h / 2, e.z),
        b.push(r),
        (e.face = t + 0.3 + e.h / 2));
      let i = S(0.25, 4.5, 0.25, e.color, 1.1);
      (i.translate(e.x + e.w / 2 + 0.9, t + 2.25, e.z), b.push(i));
      let a = S(1.4, 0.8, 0.08, e.color, 1.2);
      (a.translate(e.x + e.w / 2 + 0.9 + 0.8, t + 4.1, e.z),
        b.push(a),
        v.push([e.x, t, e.z, Math.max(e.w, e.d) * 0.78, 0.44]),
        v.push([e.x + e.w / 2 + 0.9, t, e.z, 0.34, 0.42]));
    }
  }
  let C = new t.Mesh(
    M(t, b),
    new t.MeshStandardMaterial({
      vertexColors: !0,
      roughness: 0.9,
      metalness: 0,
      flatShading: !0,
    }),
  );
  ((C.castShadow = !0),
    (C.receiveShadow = !0),
    (C.name = `fx:targets`),
    s.add(C));
  let w = [25, 50, 75, 100, 125, 150],
    T = [];
  (T.push(
    A(
      t,
      110,
      26,
      7.5,
      26,
      7,
      o,
      6969920,
      6253632,
      0,
      _(0, -172) - 0.05,
      -172,
      0,
    ),
  ),
    T.push(
      A(
        t,
        150,
        14,
        3.2,
        30,
        4,
        o,
        6969920,
        6253632,
        -41,
        -0.05,
        -92,
        Math.PI / 2,
      ),
    ),
    T.push(
      A(
        t,
        150,
        14,
        3.2,
        30,
        4,
        o,
        6969920,
        6253632,
        39,
        -0.05,
        -92,
        Math.PI / 2,
      ),
    ));
  for (let e of w) {
    let t = -e,
      n = S(0.14, 1.5, 0.14, 4866102);
    (n.translate(-27, _(-27, t) + 0.75, t), T.push(n));
    let r = S(1.7, 0.6, 0.06, 15262418);
    (r.translate(-27, _(-27, t) + 1.55, t),
      T.push(r),
      v.push([-27, _(-27, t), t, 0.3, 0.38]));
  }
  let ee = new t.DodecahedronGeometry(1, 0),
    P = (e, n, r) => {
      let i = ee.clone();
      (i.scale(
        r * o.range(0.8, 1.3),
        r * o.range(0.55, 0.9),
        r * o.range(0.8, 1.3),
      ),
        i.rotateY(o.next() * 6.283));
      let a = i.attributes.position;
      for (let e = 0; e < a.count; e++)
        a.setXYZ(
          e,
          a.getX(e) + o.range(-0.08, 0.08) * r,
          a.getY(e) + o.range(-0.08, 0.08) * r,
          a.getZ(e) + o.range(-0.08, 0.08) * r,
        );
      (i.computeVertexNormals(),
        j(t, i, o.chance(0.5) ? 8222312 : 6971986, o.range(0.85, 1.1)),
        i.translate(e, _(e, n) + r * 0.35, n),
        T.push(i),
        r > 0.4 && v.push([e, _(e, n), n, r * 1.1, 0.34]));
    };
  for (let e = 0; e < 34; e++) {
    let e, t;
    do ((e = o.range(-46, 46)), (t = o.range(-168, -6)));
    while (Math.abs(e) < 24 && t > -160);
    P(e, t, o.range(0.25, 0.95));
  }
  for (let e = 0; e < 90; e++) {
    let e, t;
    do ((e = o.range(-34, 34)), (t = o.range(-62, 16)));
    while (Math.abs(e + 2) < 5.5 && t < 6);
    P(e, t, o.range(0.07, 0.3));
  }
  ee.dispose();
  let F = [10127970, 9272664, 10720108],
    I = (e, t, n, r, i, a) => {
      let o = S(1.1, 0.34, 0.55, F[a % 3]);
      (o.rotateY(i), o.translate(t, n, r), e.push(o));
    };
  for (let [e, t] of [
    [-30, -40],
    [28, -75],
    [-34, -135],
    [30, -150],
  ]) {
    let n = _(e, t);
    (I(T, e - 0.55, n + 0.17, t, o.range(-0.1, 0.1), 0),
      I(T, e + 0.55, n + 0.17, t, o.range(-0.1, 0.1), 1),
      I(T, e, n + 0.51, t, o.range(-0.1, 0.1), 2),
      I(T, e - 0.5, n + 0.85, t + 0.05, o.range(-0.1, 0.1), 0),
      v.push([e, n, t, 1.5, 0.42]));
  }
  let L = new t.Mesh(
    M(t, T),
    new t.MeshStandardMaterial({
      vertexColors: !0,
      roughness: 0.95,
      metalness: 0,
      flatShading: !0,
    }),
  );
  ((L.castShadow = !0),
    (L.receiveShadow = !0),
    (L.name = `fx:dressing`),
    s.add(L));
  let R = y.map((e) => e.label).concat(w.map((e) => e + ` m`)),
    z = N(t, R),
    B = [],
    V = (e, n, r, i, a, o) => {
      let s = new t.PlaneGeometry(n, r),
        c = s.attributes.uv,
        l = 1 - (e + 1) / R.length,
        u = 1 - e / R.length;
      for (let e = 0; e < c.count; e++) c.setY(e, l + c.getY(e) * (u - l));
      (s.translate(i, a, o), B.push(s));
    };
  (y.forEach((e, t) =>
    V(
      t,
      4.2,
      1.05,
      e.x,
      _(e.x, e.z) + (e.pool ? 1.6 : e.h + 1.2),
      e.z + (e.pool ? 0 : e.d / 2 + 0.05),
    ),
  ),
    w.forEach((e, t) =>
      V(y.length + t, 1.6, 0.4, -27, _(-27, -e) + 1.55, -e + 0.04),
    ));
  let H = new t.Mesh(
    M(t, B),
    new t.MeshBasicMaterial({
      map: z,
      transparent: !0,
      side: t.DoubleSide,
      depthWrite: !1,
    }),
  );
  ((H.name = `fx:labels`), s.add(H));
  let U = [],
    W = _(1.3, 0.5);
  (I(U, 0.8, W + 0.17, 0.5, 0.05, 0),
    I(U, 1.9, W + 0.17, 0.45, -0.08, 1),
    I(U, 1.35, W + 0.51, 0.5, 0.02, 2),
    I(U, 0.75, W + 0.85, 0.55, -0.06, 1),
    I(U, 1.95, W + 0.85, 0.5, 0.07, 0),
    I(U, 1.35, W + 1.19, 0.55, -0.03, 2),
    v.push([1.35, W, 0.5, 1.6, 0.46]));
  for (let [e, t, n, r, i, a, o] of [
    [0.07, 0.12, 0.5, 4540223, 1.35, 1.56, 1.05],
    [0.045, 0.045, 0.75, 5000773, 1.35, 1.585, 0.72],
    [0.06, 0.1, 0.42, 7165497, 1.35, 1.52, 1.5],
    [0.05, 0.2, 0.12, 4079674, 1.35, 1.44, 1.02],
    [0.03, 0.06, 0.16, 4079674, 1.35, 1.66, 1],
  ]) {
    let s = S(e, t, n, r);
    (s.translate(i, W + a, o), U.push(s));
  }
  let G = h[0],
    K = _(G, -1.2);
  for (let e = 0; e < 3; e++)
    (I(U, G - 1.1 + e * 1.1, K + 0.17, -2.5, o.range(-0.08, 0.08), e),
      I(
        U,
        G - 0.55 + e * 1.1 - 0.55,
        K + 0.51,
        -2.48,
        o.range(-0.08, 0.08),
        e + 1,
      ));
  for (let e of [-1.9, 1.9])
    for (let t = 0; t < 2; t++) {
      let n = S(1.1, 0.34, 0.55, F[(t + 1) % 3]);
      (n.rotateY(Math.PI / 2 + o.range(-0.08, 0.08)),
        n.translate(
          G + e,
          K + 0.17 + t * 0.34,
          -1.7999999999999998 + (t ? 0.02 : 0),
        ),
        U.push(n));
    }
  v.push([G, K, -2.3, 2.4, 0.44]);
  let q = [
    [0.13, 0.17, 0.72, 4474431, G, 1, -1.75],
    [0.055, 0.055, 0.85, 5000773, G, 1.02, -2.5],
    [0.09, 0.09, 0.2, 5461323, G, 1.02, -2.95],
    [0.28, 0.05, 0.05, 4474431, G, 0.97, -1.3499999999999999],
    [0.3, 0.2, 0.16, 5069370, G - 0.28, 0.9, -1.7],
    [0.05, 0.05, 0.25, 13213770, G - 0.13, 0.98, -1.7],
  ];
  for (let [e, t, n, r, i, a, o] of q) {
    let s = S(e, t, n, r);
    (s.translate(i, K + a, o), U.push(s));
  }
  for (let [e, t] of [
    [-0.42, 0.3],
    [0.42, 0.3],
    [0, -0.55],
  ]) {
    let n = S(0.075, 1, 0.075, 4474431);
    (n.rotateX(Math.atan2(t, 0.9) * 0.9),
      n.rotateZ(-Math.atan2(e, 0.9) * 0.9),
      n.translate(G + e * 0.55, K + 0.48, -1.75 + t * 0.55),
      U.push(n));
  }
  let J = new t.Mesh(
    M(t, U),
    new t.MeshStandardMaterial({
      vertexColors: !0,
      roughness: 0.85,
      metalness: 0.05,
      flatShading: !0,
    }),
  );
  ((J.castShadow = !0), (J.receiveShadow = !0), (J.name = `fx:post`), s.add(J));
  let ne = O(t, o, _);
  s.add(ne);
  let re = k(t, v);
  ((re.name = `fx:contacts`), s.add(re));
  let Y = te(t, S);
  (s.add(Y.root),
    n.setCameraFocus(g),
    n.registerCameraPreset(`range`, (e) => {
      (e.position.set(4.6, 3.2, 7.5),
        e.lookAt(-3, 1.6, -60),
        (e.fov = 62),
        e.updateProjectionMatrix());
    }),
    n.registerCameraPreset(`close5`, (e) => {
      (e.position.set(2.42, 2.06, 3.15),
        e.lookAt(0.78, 1.52, -19),
        (e.fov = 44),
        e.updateProjectionMatrix());
    }),
    n.registerCameraPreset(`mid50`, (e) => {
      (e.position.set(9.4, 4.3, 12),
        e.lookAt(-4.6, 2.3, -52),
        (e.fov = 44),
        e.updateProjectionMatrix());
    }),
    n.registerCameraPreset(`far300`, (e) => {
      (e.position.set(17, 11, 62),
        e.lookAt(-1, 6, -158),
        (e.fov = 30),
        e.updateProjectionMatrix());
    }),
    n.registerCameraPreset(`downrange`, (e) => {
      (e.position.set(6.5, 2.4, 5),
        e.lookAt(0, 2, -80),
        (e.fov = 45),
        e.updateProjectionMatrix());
    }));
  let X = [0, 5, 1, 4, 2, 3],
    ie = [5, 3, 4, 5, 4, 3],
    Z = {
      tick: 0,
      pendingHits: [],
      expIdx: 0,
      colIdx: 0,
      farIdx: 0,
      runnerPhase: 0,
      lastFoot: 0,
    },
    Q = [
      [-8, -36],
      [26, -58],
      [12, -30],
      [-30, -70],
      [20, -105],
      [-12, -140],
      [32, -125],
      [-26, -45],
      [6, -82],
      [-18, -160],
    ],
    ae = [
      [30, -52],
      [-33, -98],
    ],
    oe = [
      [-70, -196],
      [78, -214],
      [-34, -262],
      [58, -252],
      [-88, -232],
      [26, -236],
    ],
    se = [
      [-72, -200],
      [80, -220],
      [-36, -266],
    ],
    $ = [0, 0, -1];
  function ce(e) {
    ((e.gn === void 0 || e.gn <= 0) &&
      ((e.gn = 8 + o.int(0, 6)),
      (e.gx = o.range(-0.26, 0.26)),
      (e.gy = o.range(-0.2, 0.2))),
      e.gn--);
    let t = Math.max(-0.42, Math.min(0.42, e.gx + o.gauss() * 0.075)),
      n = Math.max(-0.36, Math.min(0.36, e.gy + o.gauss() * 0.065)),
      r = e.x + t * e.w,
      i,
      a,
      s;
    return (
      e.pool
        ? ((i = e.top), (a = e.z + n * e.d), (s = [0, 1, 0]))
        : ((i = e.face + n * e.h), (a = e.z + e.d / 2), (s = [0, 0, 1])),
      { point: [r, i, a], normal: s, surface: e.surface }
    );
  }
  function le(e, t, r, i) {
    let a = ce(t);
    (($[0] = a.point[0] - e[0]),
      ($[1] = a.point[1] - e[1]),
      ($[2] = a.point[2] - e[2]));
    let o = Math.hypot($[0], $[1], $[2]);
    (($[0] /= o),
      ($[1] /= o),
      ($[2] /= o),
      n.events.emit(`weapon:fire`, {
        entityId: -1,
        weaponId: r,
        origin: e.slice(),
        dir: $.slice(),
        seq: Z.tick,
        dist: o,
        scale: i,
      }));
    let s = Math.max(1, Math.round(o / 300 / x));
    Z.pendingHits.push({
      at: Z.tick + s,
      point: a.point,
      normal: a.normal,
      surface: a.surface,
    });
  }
  function ue() {
    Z.tick++;
    let e = Z.tick;
    e % 5 == 0 && le(m, y[X[Math.floor(e / 5) % X.length]], `range-rifle`, 1);
    let t = e % 60;
    t < 32 &&
      t % 4 == 0 &&
      le(
        h,
        y[ie[(Math.floor(e / 60) * 8 + t / 4) % ie.length]],
        `range-mg`,
        1.5,
      );
    for (let t = Z.pendingHits.length - 1; t >= 0; t--) {
      let n = Z.pendingHits[t];
      e >= n.at &&
        (r.spawn(`impact`, n.point, n.normal, { surface: n.surface }),
        Z.pendingHits.splice(t, 1));
    }
    if (e % 180 == 60) {
      let e = Q[Z.expIdx % Q.length];
      (Z.expIdx++,
        r.spawn(`explosion`, [e[0], _(e[0], e[1]), e[1]], [0, 1, 0], {
          scale: 1.15 + o.range(0, 0.45),
        }));
    }
    if (e % 150 == 25) {
      let e = oe[Z.farIdx % oe.length];
      (Z.farIdx++,
        r.spawn(
          `explosion`,
          [e[0], _(e[0], e[1]) + (Z.farIdx % 3 == 0 ? 9 : 0), e[1]],
          [0, 1, 0],
          { scale: 1.5 + o.range(0, 0.6) },
        ));
    }
    if (e % 900 == 1)
      for (let e of se)
        r.spawn(`smokeColumn`, [e[0], _(e[0], e[1]), e[1]], [0, 1, 0], {
          scale: 1.8,
          ticks: 960,
          every: 5,
        });
    if (e % 540 == 400) {
      let e = ae[Z.colIdx % ae.length];
      (Z.colIdx++,
        r.spawn(`collapse`, [e[0], _(e[0], e[1]), e[1]], [0, 1, 0], {
          scale: 1.4,
        }));
    }
    let n = 5.6,
      i = 2 * Math.PI * Math.sqrt(125);
    Z.runnerPhase += (n / i) * 2 * Math.PI * x;
    let a = Z.runnerPhase,
      s = -6 + Math.cos(a) * 13,
      c = -22 + Math.sin(a) * 9,
      l = -Math.sin(a) * 13,
      u = Math.cos(a) * 9,
      d = _(s, c);
    Y.set(s, d, c, Math.atan2(-l, -u), e * x * n * 1.9);
    let f = Math.floor((e * x * n) / 0.8),
      p = Math.hypot(l, u) || 1;
    f === Z.lastFoot
      ? e % 4 == 0 &&
        r.spawn(`dust`, [s, d, c], [l / p, 0, u / p], {
          count: 2,
          scale: 0.9,
          surface: `grass`,
        })
      : ((Z.lastFoot = f),
        r.spawn(`dust`, [s, d, c], [l / p, 0, u / p], {
          count: 6,
          scale: 1.15,
          surface: `grass`,
        }));
  }
  function de(e) {
    Y.animate();
  }
  function fe() {
    (p(), a.remove(s), z.dispose(), f.restore());
    for (let e of [C, L, H, J, u, ne, re])
      (e.geometry.dispose(), e.material.dispose());
    d || (a.fog = null);
  }
  for (let e = 0; e < 600; e++) (ue(), r.tickAll());
  try {
    n.renderer.compile(a, n.camera);
  } catch (e) {
    n.warn(`precompile skipped`, e);
  }
  return { tick: ue, update: de, dispose: fe, targets: y, muzzle: m };
}
