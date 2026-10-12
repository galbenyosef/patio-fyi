// assets__naval-vJ9I-D0A 04 — float32array
// Lines 832-946 of readable/assets__naval-vJ9I-D0A.pretty.js (statement-aligned).
function de(r, i, s, c = 1) {
  let l = new o(),
    f = {
      n: r,
      head: 0,
      pos: new Float32Array(r * 3),
      vel: new Float32Array(r * 3),
      size: new Float32Array(r),
      col: new Float32Array(r * 4),
      hot: new Float32Array(r),
      age: new Float32Array(r),
      life: new Float32Array(r),
      s0: new Float32Array(r),
      s1: new Float32Array(r),
      c0: new Float32Array(r * 3),
      c1: new Float32Array(r * 3),
      a0: new Float32Array(r),
      drag: new Float32Array(r),
      grav: new Float32Array(r),
      wind: new Float32Array(r),
      alive: 0,
    };
  (l.setAttribute(`position`, new a(f.pos, 3).setUsage(e)),
    l.setAttribute(`aSize`, new a(f.size, 1).setUsage(e)),
    l.setAttribute(`aColor`, new a(f.col, 4).setUsage(e)),
    l.setAttribute(`aHot`, new a(f.hot, 1).setUsage(e)),
    (l.boundingSphere = new t(new S(), 1e5)));
  let p = n.merge([
      u.fog,
      {
        uScale: { value: 1e3 },
        uMin: { value: i ? 1.6 : 0 },
        uRelief: { value: s },
      },
    ]),
    h = new m({
      uniforms: p,
      vertexShader: ue,
      fragmentShader: k,
      transparent: !0,
      depthWrite: !1,
      fog: !0,
      blending: i ? 2 : 1,
    }),
    g = new b(l, h);
  ((g.frustumCulled = !1),
    (g.renderOrder = i ? 461 : 460),
    (g.name = i ? `naval-glow` : `naval-smoke`),
    (f.points = g),
    (f.geo = l),
    (f.mat = h));
  let _ = new d(),
    v = new d();
  return (
    (f.spawn = (e) => {
      let t = f.head;
      ((f.head = (f.head + 1) % r),
        (f.pos[t * 3] = e.p[0]),
        (f.pos[t * 3 + 1] = e.p[1]),
        (f.pos[t * 3 + 2] = e.p[2]));
      let n = e.v ?? [0, 0, 0];
      ((f.vel[t * 3] = n[0]),
        (f.vel[t * 3 + 1] = n[1]),
        (f.vel[t * 3 + 2] = n[2]),
        (f.age[t] = 0),
        (f.life[t] = e.life),
        (f.s0[t] = e.s0),
        (f.s1[t] = e.s1 ?? e.s0),
        (f.a0[t] = e.a ?? 1),
        _.setHex(e.c0).multiplyScalar(c),
        v.setHex(e.c1 ?? e.c0).multiplyScalar(c),
        (f.c0[t * 3] = _.r),
        (f.c0[t * 3 + 1] = _.g),
        (f.c0[t * 3 + 2] = _.b),
        (f.c1[t * 3] = v.r),
        (f.c1[t * 3 + 1] = v.g),
        (f.c1[t * 3 + 2] = v.b),
        (f.drag[t] = e.drag ?? 0),
        (f.grav[t] = e.grav ?? 0),
        (f.wind[t] = e.wind ?? 0),
        (f.hot[t] = e.hot ?? 0));
    }),
    (f.step = (e) => {
      let t = 0;
      for (let n = 0; n < r; n++) {
        if (f.life[n] <= 0) continue;
        let r = (f.age[n] += e) / f.life[n];
        if (r >= 1) {
          ((f.life[n] = 0), (f.size[n] = 0), (f.col[n * 4 + 3] = 0));
          continue;
        }
        t++;
        let i = Math.max(0, 1 - f.drag[n] * e),
          a = f.wind[n] * e,
          o = n * 3;
        ((f.vel[o] = f.vel[o] * i + C[0] * a),
          (f.vel[o + 1] = f.vel[o + 1] * i - f.grav[n] * e),
          (f.vel[o + 2] = f.vel[o + 2] * i + C[2] * a),
          (f.pos[o] += f.vel[o] * e),
          (f.pos[o + 1] += f.vel[o + 1] * e),
          (f.pos[o + 2] += f.vel[o + 2] * e));
        let s = 1 - (1 - r) * (1 - r);
        ((f.size[n] = f.s0[n] + (f.s1[n] - f.s0[n]) * s),
          (f.col[n * 4] = f.c0[o] + (f.c1[o] - f.c0[o]) * r),
          (f.col[n * 4 + 1] = f.c0[o + 1] + (f.c1[o + 1] - f.c0[o + 1]) * r),
          (f.col[n * 4 + 2] = f.c0[o + 2] + (f.c1[o + 2] - f.c0[o + 2]) * r),
          (f.col[n * 4 + 3] = f.a0[n] * Math.min(1, r * 12) * (1 - r * r)));
      }
      f.alive = t;
      for (let e of [`position`, `aSize`, `aColor`, `aHot`])
        l.attributes[e].needsUpdate = !0;
    }),
    f
  );
}
