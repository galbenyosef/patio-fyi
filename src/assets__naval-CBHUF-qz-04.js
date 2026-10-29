// assets__naval-CBHUF-qz 04 — float32array
// Lines 832-946 of readable/assets__naval-CBHUF-qz.pretty.js (statement-aligned).
function fe(e, n, r, o = 1) {
  let c = new s(),
    d = {
      n: e,
      head: 0,
      pos: new Float32Array(e * 3),
      vel: new Float32Array(e * 3),
      size: new Float32Array(e),
      col: new Float32Array(e * 4),
      hot: new Float32Array(e),
      age: new Float32Array(e),
      life: new Float32Array(e),
      s0: new Float32Array(e),
      s1: new Float32Array(e),
      c0: new Float32Array(e * 3),
      c1: new Float32Array(e * 3),
      a0: new Float32Array(e),
      drag: new Float32Array(e),
      grav: new Float32Array(e),
      wind: new Float32Array(e),
      alive: 0,
    };
  (c.setAttribute(`position`, new a(d.pos, 3).setUsage(x)),
    c.setAttribute(`aSize`, new a(d.size, 1).setUsage(x)),
    c.setAttribute(`aColor`, new a(d.col, 4).setUsage(x)),
    c.setAttribute(`aHot`, new a(d.hot, 1).setUsage(x)),
    (c.boundingSphere = new t(new i(), 1e5)));
  let f = l.merge([
      u.fog,
      {
        uScale: { value: 1e3 },
        uMin: { value: n ? 1.6 : 0 },
        uRelief: { value: r },
      },
    ]),
    m = new h({
      uniforms: f,
      vertexShader: de,
      fragmentShader: O,
      transparent: !0,
      depthWrite: !1,
      fog: !0,
      blending: n ? 2 : 1,
    }),
    g = new v(c, m);
  ((g.frustumCulled = !1),
    (g.renderOrder = n ? 461 : 460),
    (g.name = n ? `naval-glow` : `naval-smoke`),
    (d.points = g),
    (d.geo = c),
    (d.mat = m));
  let _ = new p(),
    y = new p();
  return (
    (d.spawn = (t) => {
      let n = d.head;
      ((d.head = (d.head + 1) % e),
        (d.pos[n * 3] = t.p[0]),
        (d.pos[n * 3 + 1] = t.p[1]),
        (d.pos[n * 3 + 2] = t.p[2]));
      let r = t.v ?? [0, 0, 0];
      ((d.vel[n * 3] = r[0]),
        (d.vel[n * 3 + 1] = r[1]),
        (d.vel[n * 3 + 2] = r[2]),
        (d.age[n] = 0),
        (d.life[n] = t.life),
        (d.s0[n] = t.s0),
        (d.s1[n] = t.s1 ?? t.s0),
        (d.a0[n] = t.a ?? 1),
        _.setHex(t.c0).multiplyScalar(o),
        y.setHex(t.c1 ?? t.c0).multiplyScalar(o),
        (d.c0[n * 3] = _.r),
        (d.c0[n * 3 + 1] = _.g),
        (d.c0[n * 3 + 2] = _.b),
        (d.c1[n * 3] = y.r),
        (d.c1[n * 3 + 1] = y.g),
        (d.c1[n * 3 + 2] = y.b),
        (d.drag[n] = t.drag ?? 0),
        (d.grav[n] = t.grav ?? 0),
        (d.wind[n] = t.wind ?? 0),
        (d.hot[n] = t.hot ?? 0));
    }),
    (d.step = (t) => {
      let n = 0;
      for (let r = 0; r < e; r++) {
        if (d.life[r] <= 0) continue;
        let e = (d.age[r] += t) / d.life[r];
        if (e >= 1) {
          ((d.life[r] = 0), (d.size[r] = 0), (d.col[r * 4 + 3] = 0));
          continue;
        }
        n++;
        let i = Math.max(0, 1 - d.drag[r] * t),
          a = d.wind[r] * t,
          o = r * 3;
        ((d.vel[o] = d.vel[o] * i + S[0] * a),
          (d.vel[o + 1] = d.vel[o + 1] * i - d.grav[r] * t),
          (d.vel[o + 2] = d.vel[o + 2] * i + S[2] * a),
          (d.pos[o] += d.vel[o] * t),
          (d.pos[o + 1] += d.vel[o + 1] * t),
          (d.pos[o + 2] += d.vel[o + 2] * t));
        let s = 1 - (1 - e) * (1 - e);
        ((d.size[r] = d.s0[r] + (d.s1[r] - d.s0[r]) * s),
          (d.col[r * 4] = d.c0[o] + (d.c1[o] - d.c0[o]) * e),
          (d.col[r * 4 + 1] = d.c0[o + 1] + (d.c1[o + 1] - d.c0[o + 1]) * e),
          (d.col[r * 4 + 2] = d.c0[o + 2] + (d.c1[o + 2] - d.c0[o + 2]) * e),
          (d.col[r * 4 + 3] = d.a0[r] * Math.min(1, e * 12) * (1 - e * e)));
      }
      d.alive = n;
      for (let e of [`position`, `aSize`, `aColor`, `aHot`])
        c.attributes[e].needsUpdate = !0;
    }),
    d
  );
}
