// assets__terrain-C3lt_eD1 27 — math
// Lines 9470-9717 of readable/assets__terrain-C3lt_eD1.pretty.js (statement-aligned).
function fi(e, t, n, r, i = {}) {
  let a = e.scene,
    o = new x(16773596, 3);
  ((o.name = `terrainShowcaseSun`),
    (o.castShadow = !0),
    o.shadow.mapSize.set(4096, 4096),
    (o.shadow.bias = -42e-5),
    (o.shadow.normalBias = 0.05),
    (o.shadow.camera.near = 1),
    (o.shadow.camera.far = 900));
  let s = new b();
  (a.add(s), (o.target = s), a.add(o));
  let c = new T(10405100, 6187588, 0.9);
  ((c.name = `terrainShowcaseHemi`), a.add(c));
  let l = new ne(12178410, 0.00108),
    u = a.fog,
    d = a.background,
    f = e.renderer.toneMappingExposure;
  a.fog = l;
  let p = new v(12178410);
  a.background = p;
  let m = new v(),
    h = {
      uZenith: { value: new v(4161488) },
      uHorizon: { value: new v(12375790) },
      uGround: { value: new v(9414072) },
      uSunDir: { value: new oe(0, 1, 0) },
      uSunColor: { value: new v(16774112) },
      uSunGlow: { value: 1 },
      uDisc: { value: 6 },
    },
    g = new S({
      uniforms: h,
      vertexShader: ri,
      fragmentShader: ii,
      side: 1,
      depthWrite: !1,
      depthTest: !1,
      fog: !1,
    }),
    y = new ae(1e3, 32, 16),
    C = new _(y, g);
  ((C.name = `terrainShowcaseSky`),
    (C.renderOrder = -1e3),
    (C.frustumCulled = !1),
    a.add(C));
  let w = ai.map((e) => ({
      h: e.h,
      sunI: e.sunI,
      hi: e.hi,
      den: e.den,
      ex: e.ex,
      ni: e.ni,
      sun: new v(e.sun),
      hs: new v(e.hs),
      hg: new v(e.hg),
      zen: new v(e.zen),
      hor: new v(e.hor),
      gnd: new v(e.gnd),
      fc: new v(e.fc),
      fw: new v(e.fw),
    })),
    E = new v(),
    D = new v(),
    O = new v(),
    ee = new v(),
    te = new v(),
    k = new v(),
    A = new v(),
    re = new v();
  function j(e) {
    let t = ((e % 24) + 24) % 24,
      n = 0;
    for (; n < w.length - 2 && w[n + 1].h < t;) n++;
    let r = w[n],
      i = w[n + 1],
      a = I((t - r.h) / Math.max(1e-4, i.h - r.h), 0, 1),
      o = a * a * (3 - 2 * a);
    return (
      E.copy(r.sun).lerp(i.sun, o),
      D.copy(r.hs).lerp(i.hs, o),
      O.copy(r.hg).lerp(i.hg, o),
      ee.copy(r.zen).lerp(i.zen, o),
      te.copy(r.hor).lerp(i.hor, o),
      k.copy(r.gnd).lerp(i.gnd, o),
      A.copy(r.fc).lerp(i.fc, o),
      re.copy(r.fw).lerp(i.fw, o),
      {
        sunI: fe(r.sunI, i.sunI, o),
        hi: fe(r.hi, i.hi, o),
        den: fe(r.den, i.den, o),
        ex: fe(r.ex, i.ex, o),
        ni: fe(r.ni, i.ni, o),
      }
    );
  }
  let M = 14,
    ie = new oe(0, 1, 0),
    se = 45;
  function ce(t) {
    M = t;
    let a = (Math.PI * (t - oi)) / 13.8,
      s = t > 5.55 && t < 19.85 ? si * Math.max(0, Math.sin(a)) ** +ci : -12,
      u = a + li,
      d = j(t);
    if (((se = s), s > -2)) {
      let e = (Math.max(s, 1.2) * Math.PI) / 180;
      o.position.set(
        Math.cos(u) * Math.cos(e),
        Math.sin(e),
        Math.sin(u) * Math.cos(e),
      );
    } else {
      let e = (di * Math.PI) / 180;
      o.position.set(
        Math.cos(ui) * Math.cos(e),
        Math.sin(e),
        Math.sin(ui) * Math.cos(e),
      );
    }
    return (
      o.color.copy(E),
      (o.intensity = d.sunI),
      c.color.copy(D),
      c.groundColor.copy(O),
      (c.intensity = d.hi),
      m.copy(te),
      p.copy(m),
      l.color.copy(A),
      (l.density = 6e-4),
      h.uZenith.value.copy(ee),
      h.uHorizon.value.copy(te),
      h.uGround.value.copy(k),
      ie.copy(o.position).normalize(),
      h.uSunDir.value.copy(ie),
      h.uSunColor.value.copy(E),
      (h.uSunGlow.value = fe(1.8, 0.6, N(4, 40, s))),
      (h.uDisc.value = s > -2 ? fe(9, 4, N(2, 30, s)) : 1.6),
      (e.renderer.toneMappingExposure = d.ex),
      n.uFogCool.value.copy(A),
      n.uFogWarm.value.copy(re),
      n.uSunDirW.value.copy(ie),
      n.uFogSky.value.copy(ee).lerp(te, 0.45),
      (n.uFogWarmMix.value = I(N(-6, 8, s), 0, 1)),
      (n.uFogDensity.value = d.den),
      (n.uFogHeight.value = fe(115, 82, N(0, 40, s))),
      r &&
        ((n.uSunElev.value = s > -2 ? r.encodeElev(s) : 1),
        (n.uSunSoft.value = fe(0.135, 0.062, N(2, 34, s))),
        (n.uSkyOcc.value = s > -2 ? fe(0.58, 0.8, N(4, 40, s)) : 1),
        s > -2 && r.setAzimuth(u)),
      i.onNight && i.onNight(d.ni),
      d
    );
  }
  let le = new oe(),
    ue = new oe();
  function P() {
    let n = e.camera;
    (C.position.copy(n.position), n.getWorldDirection(le));
    let r = [n.position.x, n.position.y, n.position.z],
      i = [le.x, le.y, le.z],
      a = t.raycast(r, i, 1500),
      c;
    a
      ? (ue.set(a.point[0], a.point[1], a.point[2]), (c = a.dist))
      : (ue.copy(n.position).addScaledVector(le, 140), (c = 140));
    let l = Math.min(430, Math.max(85, 40 + c * 0.45));
    (s.position.copy(ue), o.position.copy(ue).addScaledVector(ie, 340 + l));
    let u = o.shadow.camera;
    (u.left !== -l &&
      ((u.left = -l),
      (u.right = l),
      (u.top = l),
      (u.bottom = -l),
      (u.far = 700 + l * 2),
      u.updateProjectionMatrix()),
      s.updateMatrixWorld());
  }
  function de() {
    (a.remove(o),
      a.remove(s),
      a.remove(c),
      a.remove(C),
      o.dispose(),
      c.dispose(),
      y.dispose(),
      g.dispose(),
      a.fog === l && (a.fog = u),
      (a.background = d),
      (e.renderer.toneMappingExposure = f));
  }
  return (
    ce(e.world?.time?.tod ?? 14),
    {
      sun: o,
      hemi: c,
      fog: l,
      sky: m,
      dome: C,
      setTimeOfDay: ce,
      update: P,
      dispose: de,
      getTimeOfDay: () => M,
      getElevation: () => se,
    }
  );
}
function pi(e, t) {
  let { n, heights: r } = e,
    i = (n - 1) / t,
    a = (e, t) => {
      ((e = Math.max(0, Math.min(n - 1, e))),
        (t = Math.max(0, Math.min(n - 1, t))));
      let i = Math.min(n - 2, Math.floor(e)),
        a = Math.min(n - 2, Math.floor(t)),
        o = e - i,
        s = t - a,
        c = a * n + i;
      return (
        (r[c] + (r[c + 1] - r[c]) * o) * (1 - s) +
        (r[c + n] + (r[c + n + 1] - r[c + n]) * o) * s
      );
    },
    o = new Float32Array(t * t);
  for (let e = 0; e < t; e++)
    for (let n = 0; n < t; n++) {
      let r = n * i,
        s = (n + 1) * i,
        c = e * i,
        l = (e + 1) * i,
        u = -1 / 0;
      for (let e = Math.floor(c); e <= Math.ceil(l); e++)
        for (let t = Math.floor(r); t <= Math.ceil(s); t++)
          u = Math.max(
            u,
            a(Math.max(r, Math.min(s, t)), Math.max(c, Math.min(l, e))),
          );
      o[e * t + n] = u;
    }
  return {
    maxHeights: o,
    receiverHeight: (e, t) => a((e + 0.5) * i, (t + 0.5) * i),
  };
}
var Q = 768,
  mi = -10,
  hi = 80;
