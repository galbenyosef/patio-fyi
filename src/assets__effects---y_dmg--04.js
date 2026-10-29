// assets__effects---y_dmg- 04 — math
// Lines 1701-2306 of readable/assets__effects---y_dmg-.pretty.js (statement-aligned).
function y(t, n, r, i = {}) {
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
  let u = x(t, o);
  ((u.receiveShadow = !0), (u.name = `fx:ground`), s.add(u));
  let d = !!a.fog;
  d || (a.fog = new t.FogExp2(12769772, 0.003));
  let f = b(t, a, s);
  f.apply(i.tod ?? n.world.time.tod ?? 14);
  let p = n.events.on(`env:timeOfDay`, (e) => {
      e && typeof e.tod == `number` && f.apply(e.tod);
    }),
    m = [1.35, 1.56, 0.35],
    g = [-5.4, 1, -2.55],
    _ = [0.9, 1.54, -0.4],
    v = (e, t) => n.world.map.getHeight(e, t),
    y = [],
    O = [
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
    A = [],
    j = (e, n, r, i, a = 1) => {
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
  for (let e of O) {
    let t = v(e.x, e.z);
    if (e.pool) {
      let n = j(e.w + 0.8, 0.4, e.d + 0.8, 7236192);
      (n.translate(e.x, t + 0.2, e.z), A.push(n));
      let r = j(e.w, 0.3, e.d, e.color);
      (r.translate(e.x, t + 0.32, e.z),
        A.push(r),
        (e.top = t + 0.47),
        (e.face = null),
        y.push([e.x, t, e.z, e.w * 0.95, 0.3]));
    } else {
      let n = j(e.w + 0.6, 0.3, e.d + 0.6, 6972504);
      (n.translate(e.x, t + 0.15, e.z), A.push(n));
      let r = j(e.w, e.h, e.d, e.color);
      (r.translate(e.x, t + 0.3 + e.h / 2, e.z),
        A.push(r),
        (e.face = t + 0.3 + e.h / 2));
      let i = j(0.25, 4.5, 0.25, e.color, 1.1);
      (i.translate(e.x + e.w / 2 + 0.9, t + 2.25, e.z), A.push(i));
      let a = j(1.4, 0.8, 0.08, e.color, 1.2);
      (a.translate(e.x + e.w / 2 + 0.9 + 0.8, t + 4.1, e.z),
        A.push(a),
        y.push([e.x, t, e.z, Math.max(e.w, e.d) * 0.78, 0.44]),
        y.push([e.x + e.w / 2 + 0.9, t, e.z, 0.34, 0.42]));
    }
  }
  let M = new t.Mesh(
    E(t, A),
    new t.MeshStandardMaterial({
      vertexColors: !0,
      roughness: 0.9,
      metalness: 0,
      flatShading: !0,
    }),
  );
  ((M.castShadow = !0),
    (M.receiveShadow = !0),
    (M.name = `fx:targets`),
    s.add(M));
  let N = [25, 50, 75, 100, 125, 150],
    P = [];
  (P.push(
    w(
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
      v(0, -172) - 0.05,
      -172,
      0,
    ),
  ),
    P.push(
      w(
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
    P.push(
      w(
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
  for (let e of N) {
    let t = -e,
      n = j(0.14, 1.5, 0.14, 4866102);
    (n.translate(-27, v(-27, t) + 0.75, t), P.push(n));
    let r = j(1.7, 0.6, 0.06, 15262418);
    (r.translate(-27, v(-27, t) + 1.55, t),
      P.push(r),
      y.push([-27, v(-27, t), t, 0.3, 0.38]));
  }
  let F = new t.DodecahedronGeometry(1, 0),
    I = (e, n, r) => {
      let i = F.clone();
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
        T(t, i, o.chance(0.5) ? 8222312 : 6971986, o.range(0.85, 1.1)),
        i.translate(e, v(e, n) + r * 0.35, n),
        P.push(i),
        r > 0.4 && y.push([e, v(e, n), n, r * 1.1, 0.34]));
    };
  for (let e = 0; e < 34; e++) {
    let e, t;
    do ((e = o.range(-46, 46)), (t = o.range(-168, -6)));
    while (Math.abs(e) < 24 && t > -160);
    I(e, t, o.range(0.25, 0.95));
  }
  for (let e = 0; e < 90; e++) {
    let e, t;
    do ((e = o.range(-34, 34)), (t = o.range(-62, 16)));
    while (Math.abs(e + 2) < 5.5 && t < 6);
    I(e, t, o.range(0.07, 0.3));
  }
  F.dispose();
  let L = [10127970, 9272664, 10720108],
    R = (e, t, n, r, i, a) => {
      let o = j(1.1, 0.34, 0.55, L[a % 3]);
      (o.rotateY(i), o.translate(t, n, r), e.push(o));
    };
  for (let [e, t] of [
    [-30, -40],
    [28, -75],
    [-34, -135],
    [30, -150],
  ]) {
    let n = v(e, t);
    (R(P, e - 0.55, n + 0.17, t, o.range(-0.1, 0.1), 0),
      R(P, e + 0.55, n + 0.17, t, o.range(-0.1, 0.1), 1),
      R(P, e, n + 0.51, t, o.range(-0.1, 0.1), 2),
      R(P, e - 0.5, n + 0.85, t + 0.05, o.range(-0.1, 0.1), 0),
      y.push([e, n, t, 1.5, 0.42]));
  }
  let z = new t.Mesh(
    E(t, P),
    new t.MeshStandardMaterial({
      vertexColors: !0,
      roughness: 0.95,
      metalness: 0,
      flatShading: !0,
    }),
  );
  ((z.castShadow = !0),
    (z.receiveShadow = !0),
    (z.name = `fx:dressing`),
    s.add(z));
  let ee = O.map((e) => e.label).concat(N.map((e) => e + ` m`)),
    B = D(t, ee),
    V = [],
    H = (e, n, r, i, a, o) => {
      let s = new t.PlaneGeometry(n, r),
        c = s.attributes.uv,
        l = 1 - (e + 1) / ee.length,
        u = 1 - e / ee.length;
      for (let e = 0; e < c.count; e++) c.setY(e, l + c.getY(e) * (u - l));
      (s.translate(i, a, o), V.push(s));
    };
  (O.forEach((e, t) =>
    H(
      t,
      4.2,
      1.05,
      e.x,
      v(e.x, e.z) + (e.pool ? 1.6 : e.h + 1.2),
      e.z + (e.pool ? 0 : e.d / 2 + 0.05),
    ),
  ),
    N.forEach((e, t) =>
      H(O.length + t, 1.6, 0.4, -27, v(-27, -e) + 1.55, -e + 0.04),
    ));
  let U = new t.Mesh(
    E(t, V),
    new t.MeshBasicMaterial({
      map: B,
      transparent: !0,
      side: t.DoubleSide,
      depthWrite: !1,
    }),
  );
  ((U.name = `fx:labels`), s.add(U));
  let W = [],
    G = v(1.3, 0.5);
  (R(W, 0.8, G + 0.17, 0.5, 0.05, 0),
    R(W, 1.9, G + 0.17, 0.45, -0.08, 1),
    R(W, 1.35, G + 0.51, 0.5, 0.02, 2),
    R(W, 0.75, G + 0.85, 0.55, -0.06, 1),
    R(W, 1.95, G + 0.85, 0.5, 0.07, 0),
    R(W, 1.35, G + 1.19, 0.55, -0.03, 2),
    y.push([1.35, G, 0.5, 1.6, 0.46]));
  for (let [e, t, n, r, i, a, o] of [
    [0.07, 0.12, 0.5, 4540223, 1.35, 1.56, 1.05],
    [0.045, 0.045, 0.75, 5000773, 1.35, 1.585, 0.72],
    [0.06, 0.1, 0.42, 7165497, 1.35, 1.52, 1.5],
    [0.05, 0.2, 0.12, 4079674, 1.35, 1.44, 1.02],
    [0.03, 0.06, 0.16, 4079674, 1.35, 1.66, 1],
  ]) {
    let s = j(e, t, n, r);
    (s.translate(i, G + a, o), W.push(s));
  }
  let K = g[0],
    te = v(K, -1.2);
  for (let e = 0; e < 3; e++)
    (R(W, K - 1.1 + e * 1.1, te + 0.17, -2.5, o.range(-0.08, 0.08), e),
      R(
        W,
        K - 0.55 + e * 1.1 - 0.55,
        te + 0.51,
        -2.48,
        o.range(-0.08, 0.08),
        e + 1,
      ));
  for (let e of [-1.9, 1.9])
    for (let t = 0; t < 2; t++) {
      let n = j(1.1, 0.34, 0.55, L[(t + 1) % 3]);
      (n.rotateY(Math.PI / 2 + o.range(-0.08, 0.08)),
        n.translate(
          K + e,
          te + 0.17 + t * 0.34,
          -1.7999999999999998 + (t ? 0.02 : 0),
        ),
        W.push(n));
    }
  y.push([K, te, -2.3, 2.4, 0.44]);
  let ne = [
    [0.13, 0.17, 0.72, 4474431, K, 1, -1.75],
    [0.055, 0.055, 0.85, 5000773, K, 1.02, -2.5],
    [0.09, 0.09, 0.2, 5461323, K, 1.02, -2.95],
    [0.28, 0.05, 0.05, 4474431, K, 0.97, -1.3499999999999999],
    [0.3, 0.2, 0.16, 5069370, K - 0.28, 0.9, -1.7],
    [0.05, 0.05, 0.25, 13213770, K - 0.13, 0.98, -1.7],
  ];
  for (let [e, t, n, r, i, a, o] of ne) {
    let s = j(e, t, n, r);
    (s.translate(i, te + a, o), W.push(s));
  }
  for (let [e, t] of [
    [-0.42, 0.3],
    [0.42, 0.3],
    [0, -0.55],
  ]) {
    let n = j(0.075, 1, 0.075, 4474431);
    (n.rotateX(Math.atan2(t, 0.9) * 0.9),
      n.rotateZ(-Math.atan2(e, 0.9) * 0.9),
      n.translate(K + e * 0.55, te + 0.48, -1.75 + t * 0.55),
      W.push(n));
  }
  let re = new t.Mesh(
    E(t, W),
    new t.MeshStandardMaterial({
      vertexColors: !0,
      roughness: 0.85,
      metalness: 0.05,
      flatShading: !0,
    }),
  );
  ((re.castShadow = !0),
    (re.receiveShadow = !0),
    (re.name = `fx:post`),
    s.add(re));
  let ie = S(t, o, v);
  s.add(ie);
  let ae = C(t, y);
  ((ae.name = `fx:contacts`), s.add(ae));
  let oe = k(t, j);
  (s.add(oe.root),
    n.setCameraFocus(_),
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
  let q = [0, 5, 1, 4, 2, 3],
    se = [5, 3, 4, 5, 4, 3],
    J = {
      tick: 0,
      pendingHits: [],
      expIdx: 0,
      colIdx: 0,
      farIdx: 0,
      runnerPhase: 0,
      lastFoot: 0,
    },
    Y = [
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
    ce = [
      [30, -52],
      [-33, -98],
    ],
    X = [
      [-70, -196],
      [78, -214],
      [-34, -262],
      [58, -252],
      [-88, -232],
      [26, -236],
    ],
    Z = [
      [-72, -200],
      [80, -220],
      [-36, -266],
    ],
    Q = [0, 0, -1];
  function le(e) {
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
  function ue(e, t, r, i) {
    let a = le(t);
    ((Q[0] = a.point[0] - e[0]),
      (Q[1] = a.point[1] - e[1]),
      (Q[2] = a.point[2] - e[2]));
    let o = Math.hypot(Q[0], Q[1], Q[2]);
    ((Q[0] /= o),
      (Q[1] /= o),
      (Q[2] /= o),
      n.events.emit(`weapon:fire`, {
        entityId: -1,
        weaponId: r,
        origin: e.slice(),
        dir: Q.slice(),
        seq: J.tick,
        dist: o,
        scale: i,
      }));
    let s = Math.max(1, Math.round(o / 300 / h));
    J.pendingHits.push({
      at: J.tick + s,
      point: a.point,
      normal: a.normal,
      surface: a.surface,
    });
  }
  function $() {
    J.tick++;
    let e = J.tick;
    e % 5 == 0 && ue(m, O[q[Math.floor(e / 5) % q.length]], `range-rifle`, 1);
    let t = e % 60;
    t < 32 &&
      t % 4 == 0 &&
      ue(
        g,
        O[se[(Math.floor(e / 60) * 8 + t / 4) % se.length]],
        `range-mg`,
        1.5,
      );
    for (let t = J.pendingHits.length - 1; t >= 0; t--) {
      let n = J.pendingHits[t];
      e >= n.at &&
        (r.spawn(`impact`, n.point, n.normal, { surface: n.surface }),
        J.pendingHits.splice(t, 1));
    }
    if (e % 180 == 60) {
      let e = Y[J.expIdx % Y.length];
      (J.expIdx++,
        r.spawn(`explosion`, [e[0], v(e[0], e[1]), e[1]], [0, 1, 0], {
          scale: 1.15 + o.range(0, 0.45),
        }));
    }
    if (e % 150 == 25) {
      let e = X[J.farIdx % X.length];
      (J.farIdx++,
        r.spawn(
          `explosion`,
          [e[0], v(e[0], e[1]) + (J.farIdx % 3 == 0 ? 9 : 0), e[1]],
          [0, 1, 0],
          { scale: 1.5 + o.range(0, 0.6) },
        ));
    }
    if (e % 900 == 1)
      for (let e of Z)
        r.spawn(`smokeColumn`, [e[0], v(e[0], e[1]), e[1]], [0, 1, 0], {
          scale: 1.8,
          ticks: 960,
          every: 5,
        });
    if (e % 540 == 400) {
      let e = ce[J.colIdx % ce.length];
      (J.colIdx++,
        r.spawn(`collapse`, [e[0], v(e[0], e[1]), e[1]], [0, 1, 0], {
          scale: 1.4,
        }));
    }
    let n = 5.6,
      i = 2 * Math.PI * Math.sqrt(125);
    J.runnerPhase += (n / i) * 2 * Math.PI * h;
    let a = J.runnerPhase,
      s = -6 + Math.cos(a) * 13,
      c = -22 + Math.sin(a) * 9,
      l = -Math.sin(a) * 13,
      u = Math.cos(a) * 9,
      d = v(s, c);
    oe.set(s, d, c, Math.atan2(-l, -u), e * h * n * 1.9);
    let f = Math.floor((e * h * n) / 0.8),
      p = Math.hypot(l, u) || 1;
    f === J.lastFoot
      ? e % 4 == 0 &&
        r.spawn(`dust`, [s, d, c], [l / p, 0, u / p], {
          count: 2,
          scale: 0.9,
          surface: `grass`,
        })
      : ((J.lastFoot = f),
        r.spawn(`dust`, [s, d, c], [l / p, 0, u / p], {
          count: 6,
          scale: 1.15,
          surface: `grass`,
        }));
  }
  function de(e) {
    oe.animate();
  }
  function fe() {
    (p(), a.remove(s), B.dispose(), f.restore());
    for (let e of [M, z, U, re, u, ie, ae])
      (e.geometry.dispose(), e.material.dispose());
    d || (a.fog = null);
  }
  for (let e = 0; e < 600; e++) ($(), r.tickAll());
  try {
    n.renderer.compile(a, n.camera);
  } catch (e) {
    n.warn(`precompile skipped`, e);
  }
  return { tick: $, update: de, dispose: fe, targets: O, muzzle: m };
}
