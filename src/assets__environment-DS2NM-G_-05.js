// assets__environment-DS2NM-G_ 05 — math
// Lines 1056-1340 of readable/assets__environment-DS2NM-G_.pretty.js (statement-aligned).
function Et(e) {
  let t = {
    tex: { value: new v(new Float32Array(4), 1, 1, w, j) },
    box: { value: new m(0, 0, 0, 0) },
    key: null,
  };
  t.tex.value.needsUpdate = !0;
  let n = new T();
  n.name = `rain`;
  let i = new A(1, 1, 1, 2),
    a = new x();
  ((a.index = i.index),
    a.setAttribute(`position`, i.attributes.position),
    a.setAttribute(`uv`, i.attributes.uv));
  let o = new Float32Array(bt * 3),
    s = new Float32Array(bt);
  for (let t = 0; t < bt; t++)
    ((o[t * 3] = e.next()),
      (o[t * 3 + 1] = e.next()),
      (o[t * 3 + 2] = e.next()),
      (s[t] = e.next()));
  (a.setAttribute(`aOffset`, new E(o, 3)),
    a.setAttribute(`aSeed`, new E(s, 1)),
    (a.instanceCount = bt));
  let l = {
      uTime: { value: 0 },
      uCenter: { value: new c() },
      uBox: { value: new c(24, 24, 24) },
      uWind: { value: new h(4.4, 1.6) },
      uLen: { value: 0.62 },
      uWidth: { value: 0.0022 },
      uColor: { value: new _(0.72, 0.76, 0.84) },
      uAlpha: { value: 0 },
      uCover: t.tex,
      uCoverBox: t.box,
    },
    u = new S({
      uniforms: l,
      vertexShader: St,
      fragmentShader: Ct,
      transparent: !0,
      depthWrite: !1,
      side: 2,
      fog: !1,
    }),
    d = new r(a, u);
  ((d.name = `rainStreaks`),
    (d.frustumCulled = !1),
    (d.renderOrder = 500),
    (d.visible = !1),
    (d.castShadow = !1),
    (d.receiveShadow = !1),
    n.add(d));
  let f = new A(1, 1, 1, 1).rotateX(-Math.PI / 2),
    p = new x();
  ((p.index = f.index), p.setAttribute(`position`, f.attributes.position));
  let g = new Float32Array(xt * 2),
    y = new Float32Array(xt);
  for (let t = 0; t < xt; t++)
    ((g[t * 2] = e.next()), (g[t * 2 + 1] = e.next()), (y[t] = e.next()));
  (p.setAttribute(`aCell`, new E(g, 2)),
    p.setAttribute(`aSeed`, new E(y, 1)),
    (p.instanceCount = xt));
  let b = {
      uTime: { value: 0 },
      uCenter: { value: new c() },
      uArea: { value: 30 },
      uMaxR: { value: 0.3 },
      uGroundY: { value: 0.02 },
      uColor: { value: new _(0.85, 0.89, 0.95) },
      uAlpha: { value: 0 },
      uCover: t.tex,
      uCoverBox: t.box,
    },
    C = new S({
      uniforms: b,
      vertexShader: wt,
      fragmentShader: Tt,
      transparent: !0,
      depthWrite: !1,
      side: 2,
      fog: !1,
    }),
    D = new r(p, C);
  ((D.name = `rainSplashes`),
    (D.frustumCulled = !1),
    (D.renderOrder = 499),
    (D.visible = !1),
    (D.castShadow = !1),
    (D.receiveShadow = !1),
    n.add(D));
  let O = 0,
    k = 0,
    M = new _();
  return {
    group: n,
    mesh: d,
    splashes: D,
    uniforms: l,
    setGroundY(e) {
      k = e;
    },
    setCover(e) {
      if (e === t.key) return;
      if (((t.key = e), !e?.length)) {
        t.box.value.set(0, 0, 0, 0);
        return;
      }
      let n = Math.min(...e.map((e) => e[0])) - 1,
        r = Math.min(...e.map((e) => e[2])) - 1,
        i = Math.max(...e.map((e) => e[3])) + 1,
        a = Math.max(...e.map((e) => e[5])) + 1,
        o = Math.max(0.5, Math.max(i - n, a - r) / 2048),
        s = Math.ceil((i - n) / o),
        c = Math.ceil((a - r) / o),
        l = new Float32Array(s * c * 4);
      for (let t of e)
        for (
          let e = Math.max(0, Math.floor((t[2] - r) / o));
          e < Math.min(c, Math.ceil((t[5] - r) / o));
          e++
        )
          for (
            let r = Math.max(0, Math.floor((t[0] - n) / o));
            r < Math.min(s, Math.ceil((t[3] - n) / o));
            r++
          ) {
            let n = (e * s + r) * 4;
            ((l[n] = 1), (l[n + 1] = Math.max(l[n + 1] || -1e4, t[4])));
          }
      (t.tex.value.dispose(),
        (t.tex.value = new v(l, s, c, w, j)),
        (t.tex.value.magFilter = t.tex.value.minFilter = P),
        (t.tex.value.needsUpdate = !0),
        t.box.value.set(n, r, 1 / (s * o), 1 / (c * o)));
    },
    update(e, t, n, r = 1, i = null) {
      if (
        ((O = (O + e) % 3600),
        (l.uTime.value = O),
        l.uCenter.value.set(t.x, t.y + 4, t.z),
        (b.uTime.value = O),
        b.uCenter.value.copy(t),
        (b.uGroundY.value = k + 0.015),
        i)
      ) {
        M.setRGB(i[0], i[1], i[2]);
        let e = Math.max(0.05, M.r * 0.2126 + M.g * 0.7152 + M.b * 0.0722),
          t = Math.min(1.7, 0.55 / e + 0.55);
        (l.uColor.value.setRGB(
          Math.min(1.4, M.r * t),
          Math.min(1.4, M.g * t),
          Math.min(1.5, M.b * t + 0.04),
        ),
          b.uColor.value.copy(l.uColor.value));
      }
      let o = Math.max(0.6, r);
      ((l.uAlpha.value = (0.25 * n) / o),
        (b.uAlpha.value = (0.55 * n) / o),
        (a.instanceCount = Math.round(bt * Math.min(1, n * 1.2))),
        (p.instanceCount = Math.round(xt * Math.min(1, n * 1.2))),
        (d.visible = n > 0.01),
        (D.visible = n > 0.01 && t.y - k < 60));
    },
    dispose() {
      (a.dispose(),
        u.dispose(),
        i.dispose(),
        p.dispose(),
        C.dispose(),
        f.dispose(),
        t.tex.value.dispose());
    },
  };
}
var Dt = 9e3,
  Ot = `
attribute vec3 aOffset;
attribute float aSeed;
uniform float uTime, uSize, uScale, uStorm;
uniform vec3 uCenter, uBox;
uniform vec2 uWind;
varying float vFade;
void main() {
	float fall = 1.1 + 1.2 * aSeed;
	vec3 w = aOffset * uBox + vec3( uWind.x, - fall, uWind.y ) * uTime;
	w.x += 0.55 * sin( uTime * ( 0.6 + aSeed ) + aSeed * 40.0 );
	w.z += 0.55 * cos( uTime * ( 0.5 + 0.7 * aSeed ) + aSeed * 23.0 );
	// Integrated gust displacement stays continuous as the wind rises and falls.
	w.x += uStorm * ( 7.0 * sin( uTime * 0.8 ) + 1.5 * sin( uTime * 2.1 + aSeed * 40.0 ) );
	w.z += uStorm * ( 4.0 * sin( uTime * 0.65 ) + 1.2 * cos( uTime * 1.7 + aSeed * 23.0 ) );
	w.y += uStorm * 0.8 * sin( uTime * 1.8 + aSeed * 31.0 );
	vec3 rel = mod( w - uCenter + 0.5 * uBox, uBox ) - 0.5 * uBox;
	vec4 mv = viewMatrix * vec4( uCenter + rel, 1.0 );
	float dist = - mv.z;
	vFade = smoothstep( 0.25, 1.2, dist ) * ( 1.0 - smoothstep( 0.30, 0.5, length( rel / uBox ) ) );
	gl_PointSize = clamp( uSize * uScale * ( 0.6 + 0.8 * aSeed ) / max( dist, 0.4 ), 1.0, 22.0 );
	gl_Position = projectionMatrix * mv;
}`,
  kt = `
#include <common>
uniform vec3 uColor;
uniform float uAlpha;
varying float vFade;
void main() {
	float r = length( gl_PointCoord - 0.5 ) * 2.0;
	float a = ( 1.0 - smoothstep( 0.35, 1.0, r ) ) * uAlpha * vFade;
	if ( a < 0.004 ) discard;
	gl_FragColor = vec4( uColor, a );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`;
function At(e, t = 0) {
  let n = Math.max(0, Math.min(1, t)),
    r = new d(),
    i = new Float32Array(Dt * 3),
    a = new Float32Array(Dt);
  for (let t = 0; t < Dt; t++)
    ((i[t * 3] = e.next()),
      (i[t * 3 + 1] = e.next()),
      (i[t * 3 + 2] = e.next()),
      (a[t] = e.next()));
  (r.setAttribute(`position`, new l(new Float32Array(Dt * 3), 3)),
    r.setAttribute(`aOffset`, new l(i, 3)),
    r.setAttribute(`aSeed`, new l(a, 1)));
  let o = {
      uTime: { value: 0 },
      uStorm: { value: n },
      uCenter: { value: new c() },
      uBox: { value: new c(44 - 12 * n, 30 - 4 * n, 44 - 12 * n) },
      uWind: { value: new h(1.5 + 6 * n, 0.6 + 2 * n) },
      uSize: { value: 0.085 + 0.025 * n },
      uScale: { value: 1e3 },
      uColor: { value: new _(0.95, 0.97, 1) },
      uAlpha: { value: 0 },
    },
    s = new S({
      uniforms: o,
      vertexShader: Ot,
      fragmentShader: kt,
      transparent: !0,
      depthWrite: !1,
      fog: !1,
    }),
    u = new D(r, s);
  ((u.name = `snowfall`),
    (u.frustumCulled = !1),
    (u.renderOrder = 500),
    (u.visible = !1));
  let f = 0;
  return {
    mesh: u,
    update(e, t, n, i = 1, a = 1080, s = 75) {
      ((f = (f + e) % 3600),
        (o.uTime.value = f),
        o.uCenter.value.set(t.x, t.y + 3, t.z),
        (o.uScale.value = a / (2 * Math.tan((s * Math.PI) / 360))),
        (o.uAlpha.value = (0.8 * n) / Math.max(0.6, i)),
        r.setDrawRange(0, Math.round(Dt * Math.min(1, n))),
        (u.visible = n > 0.01));
    },
    dispose() {
      (r.dispose(), s.dispose());
    },
  };
}
function jt(e, { reversedDepth: r = !1, name: i = `sunLight.shadowMap` } = {}) {
  let a = new f(e, e, n);
  return (
    (a.name = i),
    (a.format = y),
    (a.compareFunction = r ? 518 : 515),
    (a.minFilter = a.magFilter = t),
    new o(e, e, {
      format: O,
      type: oe,
      depthTexture: a,
      depthBuffer: !0,
      stencilBuffer: !1,
      minFilter: P,
      magFilter: P,
      generateMipmaps: !1,
    })
  );
}
