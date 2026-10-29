// assets__terrain-D4VU5r38 27 — math
// Lines 9470-9717 of readable/assets__terrain-D4VU5r38.pretty.js (statement-aligned).
function fi(t, i, a, o, c = {}) {
  let l = t.scene,
    u = new e(16773596, 3);
  ((u.name = `terrainShowcaseSun`),
    (u.castShadow = !0),
    u.shadow.mapSize.set(4096, 4096),
    (u.shadow.bias = -42e-5),
    (u.shadow.normalBias = 0.05),
    (u.shadow.camera.near = 1),
    (u.shadow.camera.far = 900));
  let d = new y();
  (l.add(d), (u.target = d), l.add(u));
  let f = new M(10405100, 6187588, 0.9);
  ((f.name = `terrainShowcaseHemi`), l.add(f));
  let p = new w(12178410, 0.00108),
    m = l.fog,
    h = l.background,
    g = t.renderer.toneMappingExposure;
  l.fog = p;
  let v = new _(12178410);
  l.background = v;
  let b = new _(),
    x = {
      uZenith: { value: new _(4161488) },
      uHorizon: { value: new _(12375790) },
      uGround: { value: new _(9414072) },
      uSunDir: { value: new s(0, 1, 0) },
      uSunColor: { value: new _(16774112) },
      uSunGlow: { value: 1 },
      uDisc: { value: 6 },
    },
    C = new S({
      uniforms: x,
      vertexShader: ri,
      fragmentShader: ii,
      side: 1,
      depthWrite: !1,
      depthTest: !1,
      fog: !1,
    }),
    T = new r(1e3, 32, 16),
    E = new n(T, C);
  ((E.name = `terrainShowcaseSky`),
    (E.renderOrder = -1e3),
    (E.frustumCulled = !1),
    l.add(E));
  let D = ai.map((e) => ({
      h: e.h,
      sunI: e.sunI,
      hi: e.hi,
      den: e.den,
      ex: e.ex,
      ni: e.ni,
      sun: new _(e.sun),
      hs: new _(e.hs),
      hg: new _(e.hg),
      zen: new _(e.zen),
      hor: new _(e.hor),
      gnd: new _(e.gnd),
      fc: new _(e.fc),
      fw: new _(e.fw),
    })),
    O = new _(),
    k = new _(),
    ee = new _(),
    A = new _(),
    j = new _(),
    te = new _(),
    N = new _(),
    ne = new _();
  function re(e) {
    let t = ((e % 24) + 24) % 24,
      n = 0;
    for (; n < D.length - 2 && D[n + 1].h < t;) n++;
    let r = D[n],
      i = D[n + 1],
      a = L((t - r.h) / Math.max(1e-4, i.h - r.h), 0, 1),
      o = a * a * (3 - 2 * a);
    return (
      O.copy(r.sun).lerp(i.sun, o),
      k.copy(r.hs).lerp(i.hs, o),
      ee.copy(r.hg).lerp(i.hg, o),
      A.copy(r.zen).lerp(i.zen, o),
      j.copy(r.hor).lerp(i.hor, o),
      te.copy(r.gnd).lerp(i.gnd, o),
      N.copy(r.fc).lerp(i.fc, o),
      ne.copy(r.fw).lerp(i.fw, o),
      {
        sunI: de(r.sunI, i.sunI, o),
        hi: de(r.hi, i.hi, o),
        den: de(r.den, i.den, o),
        ex: de(r.ex, i.ex, o),
        ni: de(r.ni, i.ni, o),
      }
    );
  }
  let ie = 14,
    ae = new s(0, 1, 0),
    oe = 45;
  function se(e) {
    ie = e;
    let n = (Math.PI * (e - oi)) / 13.8,
      r = e > 5.55 && e < 19.85 ? si * Math.max(0, Math.sin(n)) ** +ci : -12,
      i = n + li,
      s = re(e);
    if (((oe = r), r > -2)) {
      let e = (Math.max(r, 1.2) * Math.PI) / 180;
      u.position.set(
        Math.cos(i) * Math.cos(e),
        Math.sin(e),
        Math.sin(i) * Math.cos(e),
      );
    } else {
      let e = (di * Math.PI) / 180;
      u.position.set(
        Math.cos(ui) * Math.cos(e),
        Math.sin(e),
        Math.sin(ui) * Math.cos(e),
      );
    }
    return (
      u.color.copy(O),
      (u.intensity = s.sunI),
      f.color.copy(k),
      f.groundColor.copy(ee),
      (f.intensity = s.hi),
      b.copy(j),
      v.copy(b),
      p.color.copy(N),
      (p.density = 6e-4),
      x.uZenith.value.copy(A),
      x.uHorizon.value.copy(j),
      x.uGround.value.copy(te),
      ae.copy(u.position).normalize(),
      x.uSunDir.value.copy(ae),
      x.uSunColor.value.copy(O),
      (x.uSunGlow.value = de(1.8, 0.6, P(4, 40, r))),
      (x.uDisc.value = r > -2 ? de(9, 4, P(2, 30, r)) : 1.6),
      (t.renderer.toneMappingExposure = s.ex),
      a.uFogCool.value.copy(N),
      a.uFogWarm.value.copy(ne),
      a.uSunDirW.value.copy(ae),
      a.uFogSky.value.copy(A).lerp(j, 0.45),
      (a.uFogWarmMix.value = L(P(-6, 8, r), 0, 1)),
      (a.uFogDensity.value = s.den),
      (a.uFogHeight.value = de(115, 82, P(0, 40, r))),
      o &&
        ((a.uSunElev.value = r > -2 ? o.encodeElev(r) : 1),
        (a.uSunSoft.value = de(0.135, 0.062, P(2, 34, r))),
        (a.uSkyOcc.value = r > -2 ? de(0.58, 0.8, P(4, 40, r)) : 1),
        r > -2 && o.setAzimuth(i)),
      c.onNight && c.onNight(s.ni),
      s
    );
  }
  let ce = new s(),
    le = new s();
  function F() {
    let e = t.camera;
    (E.position.copy(e.position), e.getWorldDirection(ce));
    let n = [e.position.x, e.position.y, e.position.z],
      r = [ce.x, ce.y, ce.z],
      a = i.raycast(n, r, 1500),
      o;
    a
      ? (le.set(a.point[0], a.point[1], a.point[2]), (o = a.dist))
      : (le.copy(e.position).addScaledVector(ce, 140), (o = 140));
    let s = Math.min(430, Math.max(85, 40 + o * 0.45));
    (d.position.copy(le), u.position.copy(le).addScaledVector(ae, 340 + s));
    let c = u.shadow.camera;
    (c.left !== -s &&
      ((c.left = -s),
      (c.right = s),
      (c.top = s),
      (c.bottom = -s),
      (c.far = 700 + s * 2),
      c.updateProjectionMatrix()),
      d.updateMatrixWorld());
  }
  function ue() {
    (l.remove(u),
      l.remove(d),
      l.remove(f),
      l.remove(E),
      u.dispose(),
      f.dispose(),
      T.dispose(),
      C.dispose(),
      l.fog === p && (l.fog = m),
      (l.background = h),
      (t.renderer.toneMappingExposure = g));
  }
  return (
    se(t.world?.time?.tod ?? 14),
    {
      sun: u,
      hemi: f,
      fog: p,
      sky: b,
      dome: E,
      setTimeOfDay: se,
      update: F,
      dispose: ue,
      getTimeOfDay: () => ie,
      getElevation: () => oe,
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
