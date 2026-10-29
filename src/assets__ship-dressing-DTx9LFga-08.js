// assets__ship-dressing-DTx9LFga 08 — age
// Lines 2200-2296 of readable/assets__ship-dressing-DTx9LFga.pretty.js (statement-aligned).
function mt(e, t) {
  let n = new Float32Array(e * 3),
    r = new Float32Array(e * 3),
    i = new Float32Array(e),
    a = new Float32Array(e),
    o = new c();
  (o.setAttribute(`position`, new s(n, 3)),
    o.setAttribute(`color`, new s(r, 3)),
    o.setAttribute(`size`, new s(i, 1)),
    o.setAttribute(`alpha`, new s(a, 1)));
  let l = new f({
      transparent: !0,
      depthWrite: !1,
      blending: t ? 2 : 1,
      fog: !1,
      uniforms: {
        map: { value: pt() },
        uScale: { value: 600 },
        uFar: { value: 170 },
      },
      vertexShader: `attribute float size; attribute float alpha; attribute vec3 color; varying vec3 vC; varying float vA; uniform float uScale, uFar;
      void main(){ vC = color; vec4 mv = modelViewMatrix * vec4(position, 1.0); float d = -mv.z; vA = alpha * (1.0 - smoothstep(uFar * 0.3, uFar, d)) * smoothstep(0.5, 2.0, d);
        gl_PointSize = size * uScale / max(d, 0.5); gl_Position = projectionMatrix * mv; }`,
      fragmentShader: `uniform sampler2D map; varying vec3 vC; varying float vA; void main(){ vec4 t = texture2D(map, gl_PointCoord); gl_FragColor = vec4(vC, t.a * vA); if (gl_FragColor.a < 0.004) discard; }`,
    }),
    u = new g(o, l);
  ((u.frustumCulled = !1),
    (u.renderOrder = 4),
    (u.name = t ? `ship-fx-glow` : `ship-fx-mist`));
  let d = [...Array(e)].map(() => ({
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
    let n = d[p];
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
  function h(t, s) {
    for (let o = 0; o < e; o++) {
      let e = d[o];
      if (e.age >= e.life) {
        ((a[o] = 0), (i[o] = 0));
        continue;
      }
      e.age += t;
      let c = e.age / e.life;
      e.v[1] -= e.g * t;
      for (let n = 0; n < 3; n++)
        ((e.v[n] *= 1 - e.drag * t),
          (e.p[n] += (e.v[n] + (s?.[n] ?? 0) * e.drag) * t));
      ((n[o * 3] = e.p[0]),
        (n[o * 3 + 1] = e.p[1]),
        (n[o * 3 + 2] = e.p[2]),
        (r[o * 3] = e.c[0]),
        (r[o * 3 + 1] = e.c[1]),
        (r[o * 3 + 2] = e.c[2]),
        (i[o] = e.s0 + (e.s1 - e.s0) * c),
        (a[o] =
          e.a *
          Math.min(1, c * 8) *
          (1 - c) *
          (e.flick ? 0.6 + 0.4 * Math.sin(e.age * 40 + o) : 1)));
    }
    for (let e of [`position`, `color`, `size`, `alpha`])
      o.attributes[e].needsUpdate = !0;
  }
  return {
    points: u,
    spawn: m,
    update: h,
    dispose() {
      (o.dispose(), l.dispose());
    },
  };
}
