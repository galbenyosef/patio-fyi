// assets__effects-BZzGHRRU 07 — math
// Lines 3260-3608 of readable/assets__effects-BZzGHRRU.pretty.js (statement-aligned).
function E(e, t, n) {
  let r = t.getObjectByName(`debugSun`),
    i = null;
  (t.traverse((e) => {
    !i && e.isHemisphereLight && (i = e);
  }),
    (!t.background || !t.background.isColor) &&
      (t.background = new e.Color(12769772)));
  let a = t.background,
    c = {
      bg: a.clone(),
      fog: t.fog ? t.fog.color.clone() : null,
      fogD: t.fog ? t.fog.density : null,
      sunI: r?.intensity,
      sunC: r?.color.clone(),
      sunP: r?.position.clone(),
      hI: i?.intensity,
      hC: i?.color.clone(),
      hG: i?.groundColor.clone(),
    };
  r?.shadow &&
    ((c.shadow = {
      l: r.shadow.camera.left,
      r: r.shadow.camera.right,
      t: r.shadow.camera.top,
      b: r.shadow.camera.bottom,
      f: r.shadow.camera.far,
      n: r.shadow.camera.near,
      tz: r.target.position.z,
    }),
    (r.shadow.camera.left = -140),
    (r.shadow.camera.right = 140),
    (r.shadow.camera.top = 140),
    (r.shadow.camera.bottom = -140),
    (r.shadow.camera.near = 1),
    (r.shadow.camera.far = 900),
    (r.shadow.bias = -4e-4),
    (r.shadow.normalBias = 0.04),
    r.shadow.mapSize.set(4096, 4096),
    r.shadow.camera.updateProjectionMatrix(),
    r.target.position.set(0, 0, -66),
    t.add(r.target),
    r.target.updateMatrixWorld());
  let l = {
      uZenith: { value: new e.Color(4158653) },
      uHorizon: { value: new e.Color(12769772) },
      uGlow: { value: new e.Color(16773336) },
      uGround: { value: new e.Color(9674884) },
      uSunDir: { value: new e.Vector3(1, 0, 0) },
      uGlowK: { value: 0.25 },
    },
    u = new e.ShaderMaterial({
      uniforms: l,
      vertexShader: o,
      fragmentShader: s,
      side: e.BackSide,
      depthWrite: !1,
      depthTest: !1,
      fog: !1,
    }),
    d = new e.Mesh(new e.SphereGeometry(2400, 40, 20), u);
  ((d.frustumCulled = !1),
    (d.renderOrder = -1e3),
    (d.name = `fx:sky`),
    n.add(d));
  let f = {
      zenDay: new e.Color(3696822),
      zenDusk: new e.Color(2768750),
      zenNight: new e.Color(725542),
      horDay: new e.Color(11849706),
      horDusk: new e.Color(15245415),
      horNight: new e.Color(3820146),
      gloDay: new e.Color(16773336),
      gloDusk: new e.Color(16747068),
      gloNight: new e.Color(5530766),
      grdDay: new e.Color(9674884),
      grdDusk: new e.Color(6968128),
      grdNight: new e.Color(1383468),
      sunLow: new e.Color(16742958),
      sunGold: new e.Color(16756832),
      sunHigh: new e.Color(16774372),
      moon: new e.Color(9414360),
      hemDay: new e.Color(11061503),
      hemLow: new e.Color(6981312),
      hemNight: new e.Color(5336478),
      grndDay: new e.Color(6976848),
      grndLow: new e.Color(6050624),
      grndNight: new e.Color(3814952),
    },
    p = new e.Color(),
    m = new e.Color();
  return {
    apply(e) {
      let n = (e - 5.4) / 14.200000000000001,
        o = Math.sin(Math.PI * Math.max(-0.35, Math.min(1.35, n))) * 50,
        s = 0.12 * Math.PI + 0.76 * Math.PI * C(n),
        c = w(0, -7, o),
        u = w(6, 40, o),
        d = C((e - 12.5) / 5.5);
      (t.fog && (t.fog.density = 0.003 * (1 + 0.45 * d)),
        l.uZenith.value.copy(f.zenDusk).lerp(f.zenDay, u).lerp(f.zenNight, c),
        l.uHorizon.value.copy(f.horDusk).lerp(f.horDay, u).lerp(f.horNight, c),
        l.uGlow.value.copy(f.gloDusk).lerp(f.gloDay, u).lerp(f.gloNight, c),
        l.uGround.value.copy(f.grdDusk).lerp(f.grdDay, u).lerp(f.grdNight, c),
        (l.uGlowK.value = (0.95 - 0.68 * u) * (1 - 0.55 * c) * (1 + 0.3 * d)),
        l.uHorizon.value.lerp(f.horDusk, 0.1 * d * (1 - c)));
      let h = Math.cos(s),
        g = 0.12,
        _ = Math.hypot(h, g);
      if (
        (l.uSunDir.value.set(h / _, 0, g / _),
        a.copy(l.uHorizon.value),
        t.fog && t.fog.color.copy(l.uHorizon.value),
        r)
      ) {
        let e = Math.max(o, -6) * S,
          t = Math.cos(e);
        (r.position.set(
          (h / _) * t * 300,
          Math.max(Math.sin(e), 0.04) * 300,
          (g / _) * t * 300,
        ),
          p
            .copy(f.sunLow)
            .lerp(f.sunGold, w(0, 14, o))
            .lerp(f.sunHigh, w(12, 42, o)),
          p.lerp(f.sunGold, 0.2 * d),
          r.color.copy(p).lerp(f.moon, c));
        let n = 0.3 + 2.75 * C(o / 42) ** 0.8;
        r.intensity = n * (1 - c) + 0.5 * c;
      }
      i &&
        (m.copy(f.hemLow).lerp(f.hemDay, u).lerp(f.hemNight, c),
        i.color.copy(m),
        m.copy(f.grndLow).lerp(f.grndDay, u).lerp(f.grndNight, c),
        i.groundColor.copy(m),
        (i.intensity = (2.05 - 1 * u) * (1 - c) + 3.4 * c));
    },
    restore() {
      if (
        (n.remove(d),
        d.geometry.dispose(),
        u.dispose(),
        a.copy(c.bg),
        t.fog &&
          c.fog &&
          (t.fog.color.copy(c.fog), c.fogD != null && (t.fog.density = c.fogD)),
        r &&
          ((r.intensity = c.sunI),
          r.color.copy(c.sunC),
          r.position.copy(c.sunP)),
        r?.shadow && c.shadow)
      ) {
        let e = c.shadow,
          t = r.shadow.camera;
        ((t.left = e.l),
          (t.right = e.r),
          (t.top = e.t),
          (t.bottom = e.b),
          (t.far = e.f),
          (t.near = e.n),
          t.updateProjectionMatrix(),
          (r.target.position.z = e.tz),
          r.target.updateMatrixWorld());
      }
      i && ((i.intensity = c.hI), i.color.copy(c.hC), i.groundColor.copy(c.hG));
    },
  };
}
function D(e, t, n = 760, r = 304) {
  let i = new e.PlaneGeometry(n, n, r, r);
  (i.rotateX(-Math.PI / 2), i.translate(0, 0, -80));
  let a = i.attributes.position,
    o = (e, t) =>
      9.5 * Math.sin(e * 0.0072 + 1.3) * Math.cos(t * 0.0061 - 0.4) +
      5 * Math.sin(e * 0.0164 - 2.1) * Math.sin(t * 0.0129 + 0.7) +
      2.4 * Math.sin((e + t * 0.7) * 0.031 + 0.2),
    s = n / r,
    c = s * 0.4;
  for (let e = 0; e < a.count; e++) {
    let r = a.getX(e),
      i = a.getZ(e),
      l = Math.abs(r) > n / 2 - s * 0.5 || Math.abs(i + 80) > n / 2 - s * 0.5,
      u = l ? r : r + t.range(-c, c),
      d = l ? i : i + t.range(-c, c),
      f = w(250, 372, Math.hypot(u, d + 80));
    a.setXYZ(e, u, f * Math.max(0, o(u, d) + 5.5), d);
  }
  let l = i.toNonIndexed();
  i.dispose();
  let u = l.attributes.position,
    d = u.count,
    f = new Float32Array(d * 3),
    p = new e.Color(6912076),
    m = new e.Color(8160594),
    h = new e.Color(7299396),
    g = new e.Color(8023118),
    _ = new e.Color(6246968),
    v = new e.Color(8159842),
    y = new e.Color(),
    b = { h: 0, s: 0, l: 0 };
  for (let e = 0; e < d; e += 3) {
    let n = (u.getX(e) + u.getX(e + 1) + u.getX(e + 2)) / 3,
      r = (u.getY(e) + u.getY(e + 1) + u.getY(e + 2)) / 3,
      i = (u.getZ(e) + u.getZ(e + 1) + u.getZ(e + 2)) / 3,
      a = Math.sin(n * 0.021 + 1.7) * Math.cos(i * 0.0175 - 0.9),
      o =
        Math.sin((n - i * 0.8) * 0.114 + 0.4) *
        Math.cos((n * 0.6 + i) * 0.097 + 2.2),
      s = Math.sin(n * 1.17 - 1.1) * Math.sin(i * 1.31 + 0.3),
      c = Math.sin(n * 2.9 + i * 2.3 - 0.7) * Math.cos(n * 2.1 - i * 3.1 + 1.9),
      l = 0.5 * a + 0.28 * o + 0.14 * s + 0.08 * c;
    (y.copy(p).lerp(m, C(l * 0.75 + 0.5)),
      l > 0.72 && y.lerp(h, Math.min(1, (l - 0.72) * 2.1)));
    let d = (1 - Math.min(1, Math.abs(n + 2) / 13)) * (i < 8 && i > -178);
    if (d > 0) {
      y.lerp(g, d * d * 0.55);
      let e = Math.max(1 - Math.abs(Math.abs(n + 2) - 4.6) / 1.1, 0);
      e > 0 && y.lerp(_, e * 0.5 * d);
    }
    (r > 1 && y.lerp(v, Math.min(0.5, r / 22)),
      y.getHSL(b),
      y.setHSL(
        b.h +
          (o * 0.006 +
            c * 0.01 +
            Math.max(0, r) * 8e-4 +
            t.range(-0.008, 0.008)),
        C(b.s * (1 + s * 0.12 + t.range(-0.07, 0.07))),
        C(b.l * (1 + 0.1 * s + 0.06 * c) * t.range(0.945, 1.055)),
      ));
    for (let t = 0; t < 3; t++)
      ((f[(e + t) * 3] = y.r),
        (f[(e + t) * 3 + 1] = y.g),
        (f[(e + t) * 3 + 2] = y.b));
  }
  (l.setAttribute(`color`, new e.BufferAttribute(f, 3)),
    l.computeVertexNormals(),
    l.computeBoundingSphere());
  let x = new e.MeshStandardMaterial({
    vertexColors: !0,
    roughness: 1,
    metalness: 0,
    flatShading: !0,
  });
  return new e.Mesh(l, x);
}
function O(e, t, n, r = 1500) {
  let i = [],
    a = [],
    o = new e.Color(4543014),
    s = new e.Color(9346136);
  for (let e = 0; e < 6; e++) {
    let e = t.next() * 6.283,
      n = t.range(0.05, 0.24),
      r = t.range(0.16, 0.34),
      c = 0.024,
      l = Math.cos(e),
      u = Math.sin(e),
      d = Math.cos(e + Math.PI / 2) * c,
      f = Math.sin(e + Math.PI / 2) * c,
      p = l * t.range(0, 0.07),
      m = u * t.range(0, 0.07);
    (i.push(p - d, 0, m - f, p + d, 0, m + f, p + l * n, r, m + u * n),
      a.push(o.r, o.g, o.b, o.r, o.g, o.b, s.r, s.g, s.b));
  }
  let c = new e.BufferGeometry();
  (c.setAttribute(`position`, new e.Float32BufferAttribute(i, 3)),
    c.setAttribute(`color`, new e.Float32BufferAttribute(a, 3)),
    c.computeVertexNormals(),
    c.computeBoundingSphere());
  let l = new e.MeshStandardMaterial({
      vertexColors: !0,
      roughness: 1,
      metalness: 0,
      side: e.DoubleSide,
      flatShading: !0,
    }),
    u = new e.InstancedMesh(c, l, r);
  ((u.name = `fx:tufts`),
    (u.castShadow = !1),
    (u.receiveShadow = !1),
    (u.instanceColor = new e.InstancedBufferAttribute(
      new Float32Array(r * 3),
      3,
    )));
  let d = new e.Matrix4(),
    f = new e.Quaternion(),
    p = new e.Vector3(0, 1, 0),
    m = new e.Vector3(),
    h = new e.Vector3(),
    g = u.instanceColor.array,
    _ = 0,
    v = 0;
  for (; _ < r && v++ < r * 12;) {
    let e = t.range(-52, 52),
      r = t.range(-96, 22);
    if (
      (Math.abs(e + 2) < 4.2 && r < 6) ||
      (Math.abs(e - 1.35) < 3 && Math.abs(r - 0.5) < 3)
    )
      continue;
    let i = t.range(0.7, 1.9);
    (f.setFromAxisAngle(p, t.next() * 6.283),
      d.compose(m.set(e, n(e, r), r), f, h.set(i, i * t.range(0.8, 1.35), i)),
      u.setMatrixAt(_, d));
    let a = t.range(0.72, 1.2);
    ((g[_ * 3] = a),
      (g[_ * 3 + 1] = a * t.range(0.96, 1.06)),
      (g[_ * 3 + 2] = a * 0.92),
      _++);
  }
  return (
    (u.count = _),
    (u.instanceMatrix.needsUpdate = !0),
    (u.instanceColor.needsUpdate = !0),
    u
  );
}
function k(e, t) {
  let n = [];
  for (let [r, i, a, o, s] of t) {
    let t = new e.CircleGeometry(o, 12);
    t.rotateX(-Math.PI / 2);
    let c = t.attributes.position,
      l = c.count,
      u = new Float32Array(l * 3);
    for (let e = 0; e < l; e++) {
      let t = Math.min(1, Math.hypot(c.getX(e), c.getZ(e)) / o),
        n = 1 - s * (1 - t) * (1 - t * 0.35);
      ((u[e * 3] = n), (u[e * 3 + 1] = n), (u[e * 3 + 2] = n * 0.985));
    }
    (t.setAttribute(`color`, new e.BufferAttribute(u, 3)),
      t.translate(r, i + 0.015, a),
      n.push(t));
  }
  let r = new e.MeshBasicMaterial({
      vertexColors: !0,
      transparent: !0,
      blending: e.MultiplyBlending,
      premultipliedAlpha: !0,
      depthWrite: !1,
      polygonOffset: !0,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -2,
    }),
    i = new e.Mesh(M(e, n, !0), r);
  return ((i.renderOrder = 2), (i.frustumCulled = !1), i);
}
