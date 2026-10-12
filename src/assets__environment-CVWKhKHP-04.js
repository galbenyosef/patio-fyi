// assets__environment-CVWKhKHP 04 — math
// Lines 742-1055 of readable/assets__environment-CVWKhKHP.pretty.js (statement-aligned).
function vt(t) {
  let n = new M();
  n.name = `clouds`;
  let r = rt(t.fork(`cloudnoise`)),
    i = new v({
      color: 16777215,
      vertexColors: !0,
      flatShading: !0,
      roughness: 1,
      metalness: 0,
    }),
    a = { uFlash: { value: 0 }, uFlashDir: { value: new P(1, 0, 0) } };
  ((i.onBeforeCompile = (e) => {
    i.userData.front &&
      (Object.assign(e.uniforms, a),
      (e.vertexShader =
        `varying vec3 vFlashW;
` +
        e.vertexShader.replace(
          `#include <project_vertex>`,
          `#include <project_vertex>
#ifdef USE_INSTANCING
vFlashW = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz;
#else
vFlashW = (modelMatrix * vec4(transformed, 1.0)).xyz;
#endif`,
        )),
      (e.fragmentShader =
        `varying vec3 vFlashW;
uniform float uFlash;
uniform vec3 uFlashDir;
` +
        e.fragmentShader.replace(
          `vec3 totalEmissiveRadiance = emissive;`,
          `vec3 totalEmissiveRadiance = emissive * vColor.rgb;
if (uFlash > 0.001) { vec3 fd = normalize(vec3(vFlashW.x - cameraPosition.x, 0.0, vFlashW.z - cameraPosition.z) + 1e-5); totalEmissiveRadiance += vec3(0.82, 0.86, 1.0) * uFlash * pow(max(dot(fd, uFlashDir), 0.0), 14.0); }`,
        )));
  }),
    (i.customProgramCacheKey = () =>
      i.userData.front ? `clouds-front` : `clouds`));
  let o = [],
    s = [],
    c = [],
    l = new x(),
    u = (t, r, a) => {
      let s = new ee(t, i, r);
      return (
        s.instanceMatrix.setUsage(e),
        (s.castShadow = !1),
        (s.receiveShadow = !1),
        (s.frustumCulled = !1),
        (s.name = a),
        o.push(s),
        n.add(s),
        s
      );
    };
  for (let e = 0; e < it; e++) {
    let n = u(_t(t, r, 0), at, `cloudField${e}`);
    for (let r = 0; r < at; r++)
      s.push({
        mesh: n,
        i: r,
        bx: t.range(-3200, ct / 2),
        bz: t.range(-3200, ct / 2),
        alt: t.range(lt, ut),
        scale: t.range(85, 215),
        rotY: t.range(0, Math.PI * 2),
        squash: t.range(0.6, 0.9),
        thin: (r * 0.618034 + e * 0.381966) % 1,
      });
  }
  for (let e = 0; e < ot; e++) {
    let n = u(_t(t, r, e === 2 ? 0.6 : 0.25), st, `cloudRing${e}`);
    for (let r = 0; r < st; r++) {
      let i = (r / st) * Math.PI * 2 + t.range(-0.11, 0.11) + e * 0.81;
      c.push({
        mesh: n,
        i: r,
        ang: i,
        rad: t.range(dt, ft),
        alt: t.range(pt, mt),
        scale: t.range(150, 330),
        rotY: t.range(0, Math.PI * 2),
        squash: t.range(0.45, 0.75),
        thin: (r * 0.618034 + e * 0.381966) % 1,
      });
    }
  }
  let d = new m(1.5, 0.45),
    f = new m(),
    p = 0,
    h = 0.42,
    g = 1,
    y = 1,
    b = 1,
    S = null,
    C = new _(),
    w = new _(1, 1, 1),
    T = (e, t, n) => {
      let r = Math.min(1, Math.max(0, (n - e) / (t - e)));
      return r * r * (3 - 2 * r);
    },
    E = (e, t) => {
      let n = (e - t + ct / 2) % ct;
      return (n < 0 && (n += ct), t + n - ct / 2);
    };
  function D(e, t, n, r, i, a = 1) {
    (l.position.set(t, n, r),
      l.rotation.set(0, e.rotY + p, 0),
      l.scale.set(i, i * e.squash * b * a, i),
      l.updateMatrix(),
      e.mesh.setMatrixAt(e.i, l.matrix));
  }
  function O(e, t, n, r, i, a) {
    let o = T(0, 0.3, a + 0.5 * e.thin - 0.3);
    (D(
      e,
      t,
      n * (1 - S.lower * a),
      r,
      o < 0.02 ? 0.001 : i * (0.5 + 0.5 * o) * (1 + S.grow * a),
      1 - 0.3 * a,
    ),
      e.mesh.setColorAt(e.i, C.copy(w).lerp(S.tint, a)));
  }
  function k(e, t) {
    (f.addScaledVector(d, e), (p += e * 0.0015));
    let n = S ? at : Math.round(8 + 30 * h),
      r = S ? st : Math.round(10 + 16 * Math.min(1, h * 1.25)),
      i = 0.82 + 0.55 * h;
    for (let e of s) {
      if (e.i >= n) continue;
      let r = E(e.bx + f.x, t.x),
        a = E(e.bz + f.y, t.z);
      S
        ? O(
            e,
            r,
            e.alt * g,
            a,
            e.scale * i * y,
            S.k *
              T(-S.soft, S.soft, (r - t.x) * S.x + (a - t.z) * S.z - S.edge),
          )
        : D(e, r, e.alt * g, a, e.scale * i * y);
    }
    for (let e of c) {
      if (e.i >= r) continue;
      let n = e.ang + p * 0.6,
        a = Math.cos(n),
        o = Math.sin(n);
      S
        ? O(
            e,
            t.x + a * e.rad,
            e.alt * g,
            t.z + o * e.rad,
            e.scale * i * y,
            S.k * T(-0.15, 0.75, a * S.x + o * S.z),
          )
        : D(e, t.x + a * e.rad, e.alt * g, t.z + o * e.rad, e.scale * i * y);
    }
    for (let e of o)
      ((e.count = e.name.startsWith(`cloudRing`) ? r : n),
        (e.instanceMatrix.needsUpdate = !0),
        e.instanceColor && (e.instanceColor.needsUpdate = !0));
  }
  return {
    group: n,
    material: i,
    meshes: o,
    get instances() {
      return s.length + c.length;
    },
    setWind(e, t) {
      d.set(e, t);
    },
    setCover(e) {
      h = Math.max(0, Math.min(1, e));
    },
    setDeck(e, t, n = 1) {
      ((g = e), (y = t), (b = n));
    },
    setTint(e, t, n) {
      i.color.setRGB(e, t, n);
    },
    setAmbient(e, t, n) {
      i.emissive.setRGB(e, t, n);
    },
    setFlash(e, t, n) {
      ((a.uFlash.value = e), a.uFlashDir.value.set(t, 0, n));
    },
    setFront(e) {
      if (!e) {
        ((S = null), (i.userData.front = !1));
        for (let e of o) e.instanceColor = null;
        i.needsUpdate = !0;
        return;
      }
      let t = Math.hypot(e.dir[0], e.dir[1]) || 1;
      ((S = {
        x: e.dir[0] / t,
        z: e.dir[1] / t,
        edge: e.edge ?? 900,
        soft: e.soft ?? 1400,
        k: Math.min(1, Math.max(0, e.strength ?? 1)),
        tint: new _(e.tint ?? 4870743),
        lower: e.lower ?? 0.35,
        grow: e.grow ?? 0.6,
      }),
        (i.userData.front = !0),
        (i.needsUpdate = !0));
      for (let e of o) for (let t = 0; t < e.count; t++) e.setColorAt(t, w);
    },
    update: k,
    dispose() {
      for (let e of o) e.geometry.dispose();
      i.dispose();
    },
  };
}
var yt = 16e3,
  bt = 900,
  xt = `
uniform sampler2D uCover;
uniform vec4 uCoverBox; // x0, z0, 1 / size x, 1 / size z; z = 0: no cover map
// height of the roof over (x, z) in metres, or -1e4 in the open (a map's shelters, rasterised by setCover)
float coverAt( vec2 xz ) {
	if ( uCoverBox.z == 0.0 ) return -1e4;
	vec2 uv = ( xz - uCoverBox.xy ) * uCoverBox.zw;
	if ( any( lessThan( uv, vec2( 0.0 ) ) ) || any( greaterThan( uv, vec2( 1.0 ) ) ) ) return -1e4;
	vec4 c = texture2D( uCover, uv );
	return c.r > 0.0 ? c.g : -1e4;   // r: covered, g: the roof height (top of the sheltered volume)
}
attribute vec3 aOffset;
attribute float aSeed;
uniform float uTime;
uniform vec3 uCenter, uBox;
uniform vec2 uWind;
uniform float uLen, uWidth;
varying float vFade;
void main() {
	float speed = 9.0 + aSeed * 5.0;
	vec3 vel = vec3( uWind.x, - speed, uWind.y );
	vec3 w = aOffset * uBox + vel * uTime;
	// wrap in X, Y and Z: the column of air around the eye is always full, top to bottom
	vec3 rel = mod( w - uCenter + 0.5 * uBox, uBox ) - 0.5 * uBox;
	vec3 wp = uCenter + rel;
	vec3 axis = normalize( vel );
	vec3 toCam = cameraPosition - wp;
	float dist = length( toCam );
	vec3 side = normalize( cross( axis, toCam / max( dist, 0.001 ) ) );
	// width grows with distance => constant apparent width on screen
	float halfW = position.x * uWidth * max( dist, 1.2 );
	vec3 p = wp + axis * ( position.y * uLen * ( 0.7 + 0.7 * aSeed ) ) + side * halfW;
	vFade = ( 1.0 - abs( position.y ) * 2.0 )
		* smoothstep( 0.3, 1.3, dist )
		* ( 1.0 - 0.55 * smoothstep( 14.0, 30.0, dist ) );
	if ( wp.y < coverAt( wp.xz ) ) vFade = 0.0;   // under a roof: dry
	gl_Position = projectionMatrix * viewMatrix * vec4( p, 1.0 );
}`,
  St = `
#include <common>
uniform vec3 uColor;
uniform float uAlpha;
varying float vFade;
void main() {
	gl_FragColor = vec4( uColor, uAlpha * vFade );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  Ct = `
uniform sampler2D uCover;
uniform vec4 uCoverBox; // x0, z0, 1 / size x, 1 / size z; z = 0: no cover map
// height of the roof over (x, z) in metres, or -1e4 in the open (a map's shelters, rasterised by setCover)
float coverAt( vec2 xz ) {
	if ( uCoverBox.z == 0.0 ) return -1e4;
	vec2 uv = ( xz - uCoverBox.xy ) * uCoverBox.zw;
	if ( any( lessThan( uv, vec2( 0.0 ) ) ) || any( greaterThan( uv, vec2( 1.0 ) ) ) ) return -1e4;
	vec4 c = texture2D( uCover, uv );
	return c.r > 0.0 ? c.g : -1e4;   // r: covered, g: the roof height (top of the sheltered volume)
}
attribute vec2 aCell;
attribute float aSeed;
uniform float uTime, uArea, uMaxR, uGroundY;
uniform vec3 uCenter;
varying vec2 vP;
varying float vFade;
void main() {
	float life = fract( uTime * ( 0.85 + aSeed * 0.7 ) + aSeed * 7.31 );
	float r = uMaxR * ( 0.12 + 0.88 * life );
	vec2 home = aCell * uArea;
	vec2 base = mod( home - uCenter.xz + 0.5 * uArea, uArea ) - 0.5 * uArea + uCenter.xz;
	vec3 p = vec3( base.x + position.x * r, uGroundY, base.y + position.z * r );
	vP = vec2( position.x, position.z ) * 2.0;
	float d = length( p.xz - uCenter.xz );
	vFade = ( 1.0 - life ) * ( 1.0 - life ) * smoothstep( 0.6, 1.6, d ) * ( 1.0 - smoothstep( 0.35, 0.5, d / uArea ) );
	if ( p.y < coverAt( p.xz ) ) vFade = 0.0;
	gl_Position = projectionMatrix * viewMatrix * vec4( p, 1.0 );
}`,
  wt = `
#include <common>
uniform vec3 uColor;
uniform float uAlpha;
varying vec2 vP;
varying float vFade;
void main() {
	float d = length( vP );
	float ring = smoothstep( 0.52, 0.82, d ) * ( 1.0 - smoothstep( 0.9, 1.0, d ) );
	gl_FragColor = vec4( uColor, uAlpha * vFade * ring );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`;
