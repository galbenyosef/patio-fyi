// assets__grenade-model-r0cg2Gb_ 44 — math
// Lines 36747-37076 of readable/assets__grenade-model-r0cg2Gb_.pretty.js (statement-aligned).
function Io(e, t) {
  let n = e.points.map((e) => new c(...e)),
    r = n.length,
    i = e.radius,
    a = e.length,
    o = (e, t) => e.rotateX(Math.PI / 2).translate(0, 0, t),
    s = o(new I(i, i * 1.02, a * 0.68, 10, 1), a * 0.5 - a * 0.34),
    l = o(new I(i * 0.8, i * 0.12, a * 0.32, 10, 1), -(a * 0.5 - a * 0.16)),
    u = new d();
  {
    let e = o(new I(i * 1.3, i * 1.3, a * 0.11, 10, 1, !0), a * 0.5 - a * 0.2),
      t = o(new I(i * 1.3, i * 1.3, a * 0.11, 10, 1, !0), a * 0.5 - a * 0.5),
      n = [...e.attributes.position.array, ...t.attributes.position.array],
      r = [...e.attributes.normal.array, ...t.attributes.normal.array],
      s = e.attributes.position.count,
      c = [...e.index.array, ...t.index.array.map((e) => e + s)];
    (u.setAttribute(`position`, new E(n, 3)),
      u.setAttribute(`normal`, new E(r, 3)),
      u.setIndex(c),
      e.dispose(),
      t.dispose());
  }
  let f = r + 1,
    p = new j();
  p.name = `belt_feed`;
  let m = [
      [s, t.brass],
      [l, t.tip],
      [u, t.link],
    ].map(([e, t]) => {
      let n = new se(e, t, f);
      return ((n.frustumCulled = !1), (n.castShadow = !1), p.add(n), n);
    }),
    h = (e, t) => {
      if (e <= 0)
        return t.copy(n[0]).addScaledVector(n[0].clone().sub(n[1]), -e);
      let i = Math.min(r - 2, Math.floor(e)),
        a = Math.min(1, e - i);
      return t.copy(n[i]).lerp(n[i + 1], a);
    },
    g = 0,
    _ = 0.08,
    v = r;
  return {
    group: p,
    setInterval(e) {
      _ = Math.max(jo, e * 0.8);
    },
    feed() {
      g = 1;
    },
    update(e, t) {
      ((g = Math.max(0, g - e / _)),
        (v = Math.max(0, Math.min(r, Math.floor(t)))));
      let n = g * g * (3 - 2 * g),
        i = 0;
      for (let e = g > 0 ? -1 : 0; e < v; e++) {
        (h(e + n, No), Mo.compose(No, Po, Fo));
        for (let e of m) e.setMatrixAt(i, Mo);
        i++;
      }
      for (let e of m) ((e.count = i), (e.instanceMatrix.needsUpdate = !0));
    },
    dispose() {
      for (let e of m) e.geometry.dispose();
    },
  };
}
var Lo = 0.17,
  Ro = () => -1e9,
  zo = 0.1,
  Bo = 0.7;
function Vo({ stage: e, muzzle: t, overlayGroup: i }) {
  let a = new Ae(r, 96, {
      additive: !0,
      renderOrder: 31,
      name: `fp-flash-glow`,
      clearCenter: !0,
    }),
    o = new Ae(r, 32, { renderOrder: 30, name: `fp-flash`, clearCenter: !0 }),
    l = new Ae(r, 192, { renderOrder: 29, name: `fp-smoke` });
  (e.holder.add(a.mesh, o.mesh), e.scene.add(l.mesh));
  let u = new re(16758903, 0, 1.6, 2);
  ((u.name = `fp_muzzle_light`), e.holder.add(u));
  let d = new s(0.86, 64),
    f = new O({
      uniforms: { uA: { value: 0 } },
      transparent: !0,
      depthTest: !1,
      depthWrite: !1,
      blending: 2,
      toneMapped: !1,
      vertexShader: `varying vec2 vP; void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      fragmentShader: `uniform float uA; varying vec2 vP; void main(){ float r = length(vP) / .86; float k = smoothstep(.42, 1.0, r) * (1.0 - .5 * vP.y / max(length(vP), 1e-3)); gl_FragColor = vec4(vec3(1.0, .62, .3) * k * uA, 1.0); }`,
    }),
    p = new n(d, f);
  ((p.renderOrder = 53),
    (p.visible = !1),
    (p.userData.thermalKeep = !0),
    (i.children[0] ?? i).add(p));
  let h = le(28026),
    g = 1,
    _ = 0,
    v = 0,
    y = -9,
    b = 0,
    x = 0,
    S = 0,
    C = {
      add: a,
      alp: o,
      rng: h,
      PAL: je,
      lit: (e, t) => {
        let n = 0.16 + 0.7 * g;
        return ((t[0] = e[0] * n), (t[1] = e[1] * n), (t[2] = e[2] * n), t);
      },
    },
    w = { ...C, alp: l },
    T = [0, 0, 0],
    E = [0, 0, 0],
    D = [0, 0, 0],
    k = [0, 0, 0],
    A = [0, 0, 0],
    j = [0, 0, 0],
    M = new c(),
    ee = new c(),
    te = new m(),
    N = new m(),
    P = (e, t, n, r) => {
      (M.set(e, t, n).applyMatrix3(te).normalize(),
        (r[0] = M.x),
        (r[1] = M.y),
        (r[2] = M.z));
    };
  function F() {
    return (
      t.updateWorldMatrix(!0, !1),
      t.getWorldPosition(M),
      (A[0] = M.x),
      (A[1] = M.y),
      (A[2] = M.z),
      e.holder.worldToLocal(M),
      (T[0] = M.x),
      (T[1] = M.y),
      (T[2] = M.z),
      te.setFromMatrix4(t.matrixWorld),
      P(0, 0, -1, j),
      te
        .setFromMatrix4(e.holder.matrixWorld)
        .invert()
        .multiply(N.setFromMatrix4(t.matrixWorld)),
      P(0, 0, -1, E),
      P(0, 1, 0, D),
      P(1, 0, 0, k),
      t.getWorldScale(ee),
      ee.x
    );
  }
  return {
    flash(e, { day: t = 1, aim: n = 0, scoped: r = !1 } = {}) {
      if (!e) return;
      g = t;
      let i = _ - y > 1.2,
        a = v;
      ((v += e.heat), (y = _));
      let o = Math.min(
          F(),
          (0.17 * Math.hypot(T[0], T[1], T[2])) / Math.max(0.05, e.radius),
        ),
        s;
      (r
        ? ((s = (e.bright + (i ? e.firstPop * 0.6 : 0)) * h.range(0.85, 1.15)),
          (S = Math.min(
            1,
            S + Math.min(1, 0.22 + 0.3 * s) * (0.35 + 0.65 * (1 - g)),
          )))
        : (s = De(C, e, T, E, D, k, {
            scale: o * Bo,
            aim: n,
            heat: a,
            cold: i,
            day: g,
            smoke: !1,
            glare: 1,
            sparks: zo,
            ticks: 3,
            lift: 0.9,
          }).light),
        Ee(w, e, A[0], A[1], A[2], j, o * 0.8, r ? 0.3 : 1),
        (x = Math.max(x, (0.6 + 5.5 * (1 - g)) * Math.min(3, s))));
    },
    update(
      e,
      { visible: t = !0, ads: n = 0, scoped: r = !1, aspect: i = 1.78 } = {},
    ) {
      _ += e;
      for (let t of [a, o, l]) (t.tick(e, Ro), t.update(0));
      let s = r ? 0 : Math.max(0, Math.min(1, (n - 0.5) / 0.4));
      for (let e of [a, o])
        (e.material.uniforms.uClear.value.set(i, Lo, s),
          (e.mesh.visible = t && e.count > 0));
      if (
        ((l.mesh.visible = l.count > 0),
        (x *= Math.exp(-e * 40)),
        x > 0.01 && t
          ? (F(),
            u.position.set(
              T[0] + E[0] * 0.12,
              T[1] + E[1] * 0.12 + 0.02,
              T[2] + E[2] * 0.12,
            ),
            (u.intensity = x),
            (u.distance = 1.2 + 0.35 * Math.sqrt(x)))
          : (u.intensity = 0),
        (S *= Math.exp(-e * 28)),
        (p.visible = r && S > 0.01),
        (f.uniforms.uA.value = S),
        (v *= Math.exp(-e * Oe.cool)),
        _ - y > Oe.wispAfter &&
          v > Oe.wispFrom &&
          ((b += e * Oe.wispRate * Math.min(1.5, v)), b >= 1))
      ) {
        b = 0;
        let e = F();
        ke(w, A, j, v, e * 0.8);
      }
    },
    get heat() {
      return v;
    },
    dispose() {
      for (let e of [a, o, l]) (e.mesh.removeFromParent(), e.dispose());
      (u.removeFromParent(), p.removeFromParent(), d.dispose(), f.dispose());
    },
  };
}
var Ho = {
    pos: new c(0.19, -0.15, -0.55),
    q: new k()
      .setFromAxisAngle(new c(0, 0, 1), 0.16)
      .multiply(new k().setFromAxisAngle(new c(0, 1, 0), -1.55))
      .multiply(new k().setFromAxisAngle(new c(1, 0, 0), 0.06)),
    cradle: new c(0.04, -0.055, -0.1),
  },
  Uo = { x: 0.11, y: -0.17, z: -0.45, yaw: -0.025, roll: 0.015 },
  Wo = 0.62,
  Go = new Set([`ar`, `carbine`, `smg`, `lmg`, `dmr`, `sniper`, `shotgun`]),
  Ko = new p(),
  qo = new c(),
  Jo = new F(),
  Yo = {
    long: {
      scale: 1.1,
      grow: 1,
      refLength: 1.1,
      reloadBack: 0,
      sight: [0.162, -0.092, -0.41],
      grip: [0.19, -0.215, -0.32],
      yaw: 0.045,
      pitch: 0.03,
      roll: 0.05,
    },
    pistol: {
      scale: 1,
      reloadBack: 0,
      grip: [0.1, -0.2, -0.5],
      yaw: 0.03,
      pitch: 0.04,
      roll: 0.03,
    },
    tool: {
      scale: 1,
      reloadBack: 0,
      grip: [0.12, -0.22, -0.6],
      yaw: 0,
      pitch: 0,
      roll: 0,
      fov: 65,
    },
    fov: 54,
    fill: 0.012,
  },
  Xo = { exposure: 1.15, env: 0.28, hemi: 0.55, key: 6.2, armTone: 0.45 },
  Zo = new WeakMap();
function Qo(t, n) {
  let r = new L(),
    i = new j();
  ((i.name = `weapons_viewmodel_stage`), (i.matrixAutoUpdate = !1), r.add(i));
  let a = Zo.get(n);
  if (!a) {
    let e = new h(n);
    ((a = e.fromScene(new B(), 0.04).texture), e.dispose(), Zo.set(n, a));
  }
  r.environment = a;
  let o = new ne(16766630, 2756104, Xo.hemi);
  (o.position.set(0, 1, 0), i.add(o));
  let s = new e(16773336, Xo.key);
  (s.position.set(0.25, 2.2, 0.15),
    s.target.position.set(0.15, -0.25, -0.55),
    i.add(s, s.target));
  let c = new F(),
    l = new k(),
    u = o.color.clone(),
    d = s.color.clone(),
    f = {
      scene: r,
      holder: i,
      sync: () => {
        (t.updateMatrixWorld(),
          i.matrix.copy(t.matrixWorld),
          (i.matrixWorldNeedsUpdate = !0),
          c.setFromQuaternion(t.getWorldQuaternion(l), `YXZ`),
          r.environmentRotation.copy(c));
        let e = Xo.exposure / Math.max(0.05, n.toneMappingExposure),
          a = t.userData.viewLight,
          f = a ? Math.max(0, Math.min(1, a.scale ?? 1)) : 1;
        ((r.environmentIntensity = Xo.env * e * f),
          (o.intensity = Xo.hemi * e * f),
          (s.intensity = Xo.key * e * f),
          o.color.copy(u),
          s.color.copy(d),
          a?.tint &&
            a.tintAmount > 0 &&
            (o.color.lerp(a.tint, a.tintAmount),
            s.color.lerp(a.tint, a.tintAmount)));
      },
    };
  return ((t.userData.viewmodelStage = f), f);
}
