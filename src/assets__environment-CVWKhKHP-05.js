// assets__environment-CVWKhKHP 05 — math
// Lines 1056-1340 of readable/assets__environment-CVWKhKHP.pretty.js (statement-aligned).
function Tt(e) {
  let n = {
    tex: { value: new l(new Float32Array(4), 1, 1, w, j) },
    box: { value: new t(0, 0, 0, 0) },
    key: null,
  };
  n.tex.value.needsUpdate = !0;
  let r = new M();
  r.name = `rain`;
  let i = new D(1, 1, 1, 2),
    o = new A();
  ((o.index = i.index),
    o.setAttribute(`position`, i.attributes.position),
    o.setAttribute(`uv`, i.attributes.uv));
  let s = new Float32Array(yt * 3),
    c = new Float32Array(yt);
  for (let t = 0; t < yt; t++)
    ((s[t * 3] = e.next()),
      (s[t * 3 + 1] = e.next()),
      (s[t * 3 + 2] = e.next()),
      (c[t] = e.next()));
  (o.setAttribute(`aOffset`, new N(s, 3)),
    o.setAttribute(`aSeed`, new N(c, 1)),
    (o.instanceCount = yt));
  let u = {
      uTime: { value: 0 },
      uCenter: { value: new P() },
      uBox: { value: new P(24, 24, 24) },
      uWind: { value: new m(4.4, 1.6) },
      uLen: { value: 0.62 },
      uWidth: { value: 0.0022 },
      uColor: { value: new _(0.72, 0.76, 0.84) },
      uAlpha: { value: 0 },
      uCover: n.tex,
      uCoverBox: n.box,
    },
    d = new C({
      uniforms: u,
      vertexShader: xt,
      fragmentShader: St,
      transparent: !0,
      depthWrite: !1,
      side: 2,
      fog: !1,
    }),
    f = new h(o, d);
  ((f.name = `rainStreaks`),
    (f.frustumCulled = !1),
    (f.renderOrder = 500),
    (f.visible = !1),
    (f.castShadow = !1),
    (f.receiveShadow = !1),
    r.add(f));
  let p = new D(1, 1, 1, 1).rotateX(-Math.PI / 2),
    g = new A();
  ((g.index = p.index), g.setAttribute(`position`, p.attributes.position));
  let v = new Float32Array(bt * 2),
    y = new Float32Array(bt);
  for (let t = 0; t < bt; t++)
    ((v[t * 2] = e.next()), (v[t * 2 + 1] = e.next()), (y[t] = e.next()));
  (g.setAttribute(`aCell`, new N(v, 2)),
    g.setAttribute(`aSeed`, new N(y, 1)),
    (g.instanceCount = bt));
  let b = {
      uTime: { value: 0 },
      uCenter: { value: new P() },
      uArea: { value: 30 },
      uMaxR: { value: 0.3 },
      uGroundY: { value: 0.02 },
      uColor: { value: new _(0.85, 0.89, 0.95) },
      uAlpha: { value: 0 },
      uCover: n.tex,
      uCoverBox: n.box,
    },
    x = new C({
      uniforms: b,
      vertexShader: Ct,
      fragmentShader: wt,
      transparent: !0,
      depthWrite: !1,
      side: 2,
      fog: !1,
    }),
    S = new h(g, x);
  ((S.name = `rainSplashes`),
    (S.frustumCulled = !1),
    (S.renderOrder = 499),
    (S.visible = !1),
    (S.castShadow = !1),
    (S.receiveShadow = !1),
    r.add(S));
  let T = 0,
    E = 0,
    O = new _();
  return {
    group: r,
    mesh: f,
    splashes: S,
    uniforms: u,
    setGroundY(e) {
      E = e;
    },
    setCover(e) {
      if (e === n.key) return;
      if (((n.key = e), !e?.length)) {
        n.box.value.set(0, 0, 0, 0);
        return;
      }
      let t = Math.min(...e.map((e) => e[0])) - 1,
        r = Math.min(...e.map((e) => e[2])) - 1,
        i = Math.max(...e.map((e) => e[3])) + 1,
        o = Math.max(...e.map((e) => e[5])) + 1,
        s = Math.max(0.5, Math.max(i - t, o - r) / 2048),
        c = Math.ceil((i - t) / s),
        u = Math.ceil((o - r) / s),
        d = new Float32Array(c * u * 4);
      for (let n of e)
        for (
          let e = Math.max(0, Math.floor((n[2] - r) / s));
          e < Math.min(u, Math.ceil((n[5] - r) / s));
          e++
        )
          for (
            let r = Math.max(0, Math.floor((n[0] - t) / s));
            r < Math.min(c, Math.ceil((n[3] - t) / s));
            r++
          ) {
            let t = (e * c + r) * 4;
            ((d[t] = 1), (d[t + 1] = Math.max(d[t + 1] || -1e4, n[4])));
          }
      (n.tex.value.dispose(),
        (n.tex.value = new l(d, c, u, w, j)),
        (n.tex.value.magFilter = n.tex.value.minFilter = a),
        (n.tex.value.needsUpdate = !0),
        n.box.value.set(t, r, 1 / (c * s), 1 / (u * s)));
    },
    update(e, t, n, r = 1, i = null) {
      if (
        ((T = (T + e) % 3600),
        (u.uTime.value = T),
        u.uCenter.value.set(t.x, t.y + 4, t.z),
        (b.uTime.value = T),
        b.uCenter.value.copy(t),
        (b.uGroundY.value = E + 0.015),
        i)
      ) {
        O.setRGB(i[0], i[1], i[2]);
        let e = Math.max(0.05, O.r * 0.2126 + O.g * 0.7152 + O.b * 0.0722),
          t = Math.min(1.7, 0.55 / e + 0.55);
        (u.uColor.value.setRGB(
          Math.min(1.4, O.r * t),
          Math.min(1.4, O.g * t),
          Math.min(1.5, O.b * t + 0.04),
        ),
          b.uColor.value.copy(u.uColor.value));
      }
      let a = Math.max(0.6, r);
      ((u.uAlpha.value = (0.25 * n) / a),
        (b.uAlpha.value = (0.55 * n) / a),
        (o.instanceCount = Math.round(yt * Math.min(1, n * 1.2))),
        (g.instanceCount = Math.round(bt * Math.min(1, n * 1.2))),
        (f.visible = n > 0.01),
        (S.visible = n > 0.01 && t.y - E < 60));
    },
    dispose() {
      (o.dispose(),
        d.dispose(),
        i.dispose(),
        g.dispose(),
        x.dispose(),
        p.dispose(),
        n.tex.value.dispose());
    },
  };
}
var Et = 9e3,
  Dt = `
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
  Ot = `
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
function kt(e, t = 0) {
  let n = Math.max(0, Math.min(1, t)),
    r = new d(),
    i = new Float32Array(Et * 3),
    a = new Float32Array(Et);
  for (let t = 0; t < Et; t++)
    ((i[t * 3] = e.next()),
      (i[t * 3 + 1] = e.next()),
      (i[t * 3 + 2] = e.next()),
      (a[t] = e.next()));
  (r.setAttribute(`position`, new s(new Float32Array(Et * 3), 3)),
    r.setAttribute(`aOffset`, new s(i, 3)),
    r.setAttribute(`aSeed`, new s(a, 1)));
  let o = {
      uTime: { value: 0 },
      uStorm: { value: n },
      uCenter: { value: new P() },
      uBox: { value: new P(44 - 12 * n, 30 - 4 * n, 44 - 12 * n) },
      uWind: { value: new m(1.5 + 6 * n, 0.6 + 2 * n) },
      uSize: { value: 0.085 + 0.025 * n },
      uScale: { value: 1e3 },
      uColor: { value: new _(0.95, 0.97, 1) },
      uAlpha: { value: 0 },
    },
    c = new C({
      uniforms: o,
      vertexShader: Dt,
      fragmentShader: Ot,
      transparent: !0,
      depthWrite: !1,
      fog: !1,
    }),
    l = new te(r, c);
  ((l.name = `snowfall`),
    (l.frustumCulled = !1),
    (l.renderOrder = 500),
    (l.visible = !1));
  let u = 0;
  return {
    mesh: l,
    update(e, t, n, i = 1, a = 1080, s = 75) {
      ((u = (u + e) % 3600),
        (o.uTime.value = u),
        o.uCenter.value.set(t.x, t.y + 3, t.z),
        (o.uScale.value = a / (2 * Math.tan((s * Math.PI) / 360))),
        (o.uAlpha.value = (0.8 * n) / Math.max(0.6, i)),
        r.setDrawRange(0, Math.round(Et * Math.min(1, n))),
        (l.visible = n > 0.01));
    },
    dispose() {
      (r.dispose(), c.dispose());
    },
  };
}
function At(e, { reversedDepth: t = !1, name: n = `sunLight.shadowMap` } = {}) {
  let r = new y(e, e, f);
  return (
    (r.name = n),
    (r.format = b),
    (r.compareFunction = t ? 518 : 515),
    (r.minFilter = r.magFilter = p),
    new o(e, e, {
      format: T,
      type: c,
      depthTexture: r,
      depthBuffer: !0,
      stencilBuffer: !1,
      minFilter: a,
      magFilter: a,
      generateMipmaps: !1,
    })
  );
}
