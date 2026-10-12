// assets__ship-dressing-y_vqKCl7 06 — age
// Lines 1563-1747 of readable/assets__ship-dressing-y_vqKCl7.pretty.js (statement-aligned).
function Me() {
  let e = new _(),
    t = P(13684936, 0.6, 0.4),
    n = P(1447962, 0.95, 0),
    r = new _();
  (r.rotation.set(-Math.PI / 2 + 0.08, 0.4, 0),
    r.position.set(0, 0.09, 0),
    e.add(r),
    N(r, 0.9, 2, 0.06, t, 0, -1, 0),
    N(r, 0.3, 0.06, 0.08, n, 0.25, -0.1, 0.05));
  let i = new s(
    new u(1.4, 18),
    new l({
      color: 789516,
      transparent: !0,
      opacity: 0.55,
      roughness: 1,
      depthWrite: !1,
      polygonOffset: !0,
      polygonOffsetFactor: -2,
    }),
  );
  return (
    (i.rotation.x = -Math.PI / 2),
    i.position.set(-0.6, 0.012, 0.6),
    i.scale.set(1, 0.7, 1),
    e.add(i),
    j(e, [2, 0.3, 2])
  );
}
function Ne({ run: e = 13, rise: t = 4.5, drop: n = 3.4, a: i = 3.2 } = {}) {
  let a = new _(),
    o = P(11769131, 0.55, 0.35),
    c = P(2763822, 0.5, 0.6),
    l = P(9410202, 0.4, 0.8),
    u = (n, r, i) => [r, t * n + i, e * n],
    d = 0.4,
    f = 0.4;
  for (let e of [-0.4, d])
    for (let t of [-0.4, f])
      A(a, u(0, e * 1.4, t), u(1, e * 0.6, t * 0.6), 0.1, 0.1, o);
  for (let e = 0; e < 10; e++) {
    let t = e / 10,
      n = (e + 1) / 10,
      r = 1.4 - 0.8 * t,
      i = 1.4 - 0.8 * n;
    (D(a, u(t, -0.4 * r, -0.4), u(n, d * i, -0.4), 0.035, o, 4),
      D(a, u(t, -0.4 * r, f), u(n, d * i, f), 0.035, o, 4),
      D(a, u(t, -0.4 * r, -0.4), u(n, -0.4 * i, f), 0.035, o, 4),
      D(a, u(t, d * r, -0.4), u(n, d * i, f), 0.035, o, 4));
  }
  for (let e of [-1, 1])
    A(a, [e * 1.2, -0.4, -1.2], [0, i, -0.4], 0.16, 0.16, o);
  for (let n of [-1, 1]) D(a, [n * 0.1, i, -0.4], [n * 0.2, t, e], 0.02, l);
  let p = new s(new r(0.35, 0.35, 0.3, 14), c);
  ((p.rotation.z = Math.PI / 2), p.position.set(0, t + 0.1, e + 0.1), a.add(p));
  for (let r of [-1, 1])
    D(a, [r * 0.15, t, e + 0.2], [r * 0.15, t - n + 0.6, e + 0.2], 0.018, l);
  return (
    N(a, 0.45, 0.6, 0.35, P(14196768, 0.5, 0.4), 0, t - n, e + 0.2),
    j(a, [3, t + 4, e + 2])
  );
}
var Pe = [1.05, 0.52, 0.23, 0.085],
  Fe = [0.124, 0.215, -0.42, 1.18],
  $ = [0.064, -0.168, 0.52, 1.05],
  Ie = [0.47, 0.7, 1.14, 1.98];
function Le(e, t, n) {
  let r = 0;
  for (let i = 0; i < 4; i++)
    r += Pe[i] * Math.sin(Fe[i] * e + $[i] * t + Ie[i] * n);
  return r;
}
var Re = (() => {
  let e = null;
  return () =>
    (e ??= O(64, 64, (e) => {
      let t = e.createRadialGradient(32, 32, 0, 32, 32, 32);
      for (let e = 0; e <= 8; e++) {
        let n = e / 8;
        t.addColorStop(
          n,
          `rgba(255,255,255,${Math.exp(-n * n * 4.5).toFixed(3)})`,
        );
      }
      ((e.fillStyle = t), e.fillRect(0, 0, 64, 64));
    }));
})();
function ze(e, t) {
  let r = new Float32Array(e * 3),
    a = new Float32Array(e * 3),
    o = new Float32Array(e),
    s = new Float32Array(e),
    c = new i();
  (c.setAttribute(`position`, new n(r, 3)),
    c.setAttribute(`color`, new n(a, 3)),
    c.setAttribute(`size`, new n(o, 1)),
    c.setAttribute(`alpha`, new n(s, 1)));
  let l = new d({
      transparent: !0,
      depthWrite: !1,
      blending: t ? 2 : 1,
      fog: !1,
      uniforms: {
        map: { value: Re() },
        uScale: { value: 600 },
        uFar: { value: 170 },
      },
      vertexShader: `attribute float size; attribute float alpha; attribute vec3 color; varying vec3 vC; varying float vA; uniform float uScale, uFar;
      void main(){ vC = color; vec4 mv = modelViewMatrix * vec4(position, 1.0); float d = -mv.z; vA = alpha * (1.0 - smoothstep(uFar * 0.3, uFar, d)) * smoothstep(0.5, 2.0, d);
        gl_PointSize = size * uScale / max(d, 0.5); gl_Position = projectionMatrix * mv; }`,
      fragmentShader: `uniform sampler2D map; varying vec3 vC; varying float vA; void main(){ vec4 t = texture2D(map, gl_PointCoord); gl_FragColor = vec4(vC, t.a * vA); if (gl_FragColor.a < 0.004) discard; }`,
    }),
    u = new y(c, l);
  ((u.frustumCulled = !1),
    (u.renderOrder = 4),
    (u.name = t ? `ship-fx-glow` : `ship-fx-mist`));
  let f = [...Array(e)].map(() => ({
      life: 0,
      age: 0,
      p: [0, 0, 0],
      v: [0, 0, 0],
      s0: 1,
      s1: 1,
      c: [1, 1, 1],
      a: 1,
      g: 0,
      drag: 0,
    })),
    p = 0;
  function m(t) {
    let n = f[p];
    ((p = (p + 1) % e),
      Object.assign(n, {
        age: 0,
        life: t.life,
        p: [...t.p],
        v: [...(t.v ?? [0, 0, 0])],
        s0: t.s0,
        s1: t.s1 ?? t.s0,
        c: t.c,
        a: t.a ?? 1,
        g: t.g ?? 0,
        drag: t.drag ?? 0,
        flick: t.flick ?? 0,
      }));
  }
  function h(t, n) {
    for (let i = 0; i < e; i++) {
      let e = f[i];
      if (e.age >= e.life) {
        ((s[i] = 0), (o[i] = 0));
        continue;
      }
      e.age += t;
      let c = e.age / e.life;
      e.v[1] -= e.g * t;
      for (let r = 0; r < 3; r++)
        ((e.v[r] *= 1 - e.drag * t),
          (e.p[r] += (e.v[r] + (n?.[r] ?? 0) * e.drag) * t));
      ((r[i * 3] = e.p[0]),
        (r[i * 3 + 1] = e.p[1]),
        (r[i * 3 + 2] = e.p[2]),
        (a[i * 3] = e.c[0]),
        (a[i * 3 + 1] = e.c[1]),
        (a[i * 3 + 2] = e.c[2]),
        (o[i] = e.s0 + (e.s1 - e.s0) * c),
        (s[i] =
          e.a *
          Math.min(1, c * 8) *
          (1 - c) *
          (e.flick ? 0.6 + 0.4 * Math.sin(e.age * 40 + i) : 1)));
    }
    for (let e of [`position`, `color`, `size`, `alpha`])
      c.attributes[e].needsUpdate = !0;
  }
  return {
    points: u,
    spawn: m,
    update: h,
    dispose() {
      (c.dispose(), l.dispose());
    },
  };
}
