// assets__greywater-harbor-BSIBZxXc 02 — math
// Lines 106-442 of readable/assets__greywater-harbor-BSIBZxXc.pretty.js (statement-aligned).
function y(
  e,
  {
    waterLevel: y = 8,
    far: b = 4e3,
    lite: ne = !1,
    groundHeight: re = (e, t) => ee(e, t, 24, 220),
  } = {},
) {
  let x = new l();
  ((x.name = `greywater-harbor`),
    (x.userData = {
      presentationOnly: !0,
      collision: !1,
      dynamicShadow: !0,
      sectorCount: 4,
    }));
  let S = new Set(Object.values(e)),
    C = (e) => (S.add(e), e),
    w = { far: b, from: Math.min(1800, b * 0.78), haze: 0 },
    T = (e, t, n) => {
      (C(e), C(t));
      let r = new i(e, t);
      return ((r.name = n), (r.frustumCulled = !1), x.add(r), r);
    };
  for (let t of Object.values(e))
    ((t.colorSpace = u), (t.anisotropy = ne ? 2 : 8));
  let E = `varying vec3 worldPoint;${h(w.far, w.from)}
 void main(){worldPoint=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*farCompressMV(viewMatrix*vec4(worldPoint,1.));}`,
    D = T(
      new f(12e3, 48, 24),
      new o({
        side: 1,
        depthWrite: !1,
        toneMapped: !1,
        uniforms: { skyMap: { value: e.sky } },
        vertexShader: E,
        fragmentShader: `varying vec3 worldPoint;${v}void main(){gl_FragColor=vec4(skyColor(worldPoint-cameraPosition),1.);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`,
      }),
      `skyDome`,
    );
  D.renderOrder = -100;
  let O = [];
  for (let t of [..._, ...te]) {
    let r = [],
      i = [],
      a = [];
    for (let e = 0; e < 2; e++)
      for (let n = 0; n <= 128; n++) {
        let a = n / 128,
          o = t.angle + (a - 0.5) * t.arc;
        (r.push(
          Math.sin(o) * t.radius,
          (t.grounded
            ? re(Math.sin(o) * t.radius, -Math.cos(o) * t.radius) - 18
            : y - 1.5) +
            (t.baseline - e) * t.height,
          -Math.cos(o) * t.radius,
        ),
          i.push(a, 1 - e));
      }
    for (let e = 0; e < 128; e++) {
      let t = e,
        n = e + 128 + 1;
      a.push(t, n, t + 1, t + 1, n, n + 1);
    }
    let o = new n();
    (o.setAttribute(`position`, new d(r, 3)),
      o.setAttribute(`uv`, new d(i, 2)),
      o.setIndex(a));
    let s = new m({
      map: e[t.key],
      transparent: !0,
      depthWrite: !0,
      alphaTest: 0.05,
      toneMapped: !1,
      side: 2,
      forceSinglePass: !0,
      fog: !1,
    });
    ((s.onBeforeCompile = (e) => {
      e.fragmentShader = e.fragmentShader.replace(
        `#include <alphamap_fragment>`,
        `#include <alphamap_fragment>
diffuseColor.a *= smoothstep(0.,.018,vMapUv.x)*smoothstep(0.,.018,1.-vMapUv.x);`,
      );
    }),
      (s.customProgramCacheKey = () => `greywater-harbor-layer-v1`),
      g(s, w));
    let c = T(o, s, `harbor-` + t.key);
    ((c.userData = { ...t, presentationOnly: !0, collision: !1 }), O.push(c));
    let l = C(
      g(
        new m({
          map: e[t.key],
          color: 3815994,
          alphaTest: 0.05,
          side: 2,
          fog: !1,
        }),
        w,
      ),
    );
    c.userData.thermalMaterial = () => l;
  }
  let k = [],
    A = [],
    j = [],
    M = new a();
  for (let e = 0; e <= 8; e++)
    for (let t = 0; t <= 128; t++) {
      let n = (t / 128 - 0.5) * 1.88,
        r = 901 + (e / 8) * 210;
      if (
        (k.push(Math.sin(n) * r, y + 0.3, -Math.cos(n) * r),
        M.setHex(e % 3 == 0 ? 7828844 : 4936789),
        A.push(M.r, M.g, M.b),
        e < 8 && t < 128)
      ) {
        let n = e * 129 + t;
        j.push(n, n + 1, n + 129, n + 1, n + 130, n + 129);
      }
    }
  let N = new n();
  (N.setAttribute(`position`, new d(k, 3)),
    N.setAttribute(`color`, new d(A, 3)),
    N.setIndex(j),
    T(
      N,
      g(new m({ vertexColors: !0, side: 2, fog: !1 }), w),
      `harbor-port-land`,
    ));
  let P = 519,
    F = () => (P = (Math.imul(P, 1664525) + 1013904223) >>> 0) / 4294967296,
    I = new r(),
    L = new s(),
    ie = new p(0, 1, 0),
    R = new p(),
    z = new p(),
    B = new a(),
    V = new c(
      C(new t(1, 1, 1)),
      C(g(new m({ color: 7502976, fog: !1 }), w)),
      100,
    );
  (C(V), (V.name = `harbor-port-roofs`), (V.frustumCulled = !1), x.add(V));
  for (let e = 0; e < 100; e++) {
    let t = ((e % 25) / 24 - 0.5) * 1.76,
      n = 948 + Math.floor(e / 25) * 42,
      r = 4 + F() * 8;
    (R.set(Math.sin(t) * n, y + r / 2, -Math.cos(t) * n),
      z.set(25 + F() * 25, r, 20 + F() * 12),
      L.setFromAxisAngle(ie, -t),
      I.compose(R, L, z),
      V.setMatrixAt(e, I),
      B.setHSL(
        0.055 + F() * 0.1,
        0.1 + F() * 0.12,
        0.18 + F() * 0.14,
      ).convertSRGBToLinear(),
      V.setColorAt(e, B));
  }
  let H = [],
    U = [],
    W = [],
    G = new a(`#30435a`);
  for (let e = 0; e <= 256; e++) {
    let t = (e / 256) * Math.PI * 2,
      n =
        30 +
        35 * (0.5 + 0.5 * Math.sin(t * 7)) +
        20 * (0.5 + 0.5 * Math.sin(t * 13));
    for (let e of [y - 15, y + n])
      (H.push(Math.sin(t) * 7600, e, -Math.cos(t) * 7600),
        U.push(G.r, G.g, G.b));
    if (e < 256) {
      let t = e * 2;
      W.push(t, t + 1, t + 2, t + 2, t + 1, t + 3);
    }
  }
  let K = new n();
  (K.setAttribute(`position`, new d(H, 3)),
    K.setAttribute(`color`, new d(U, 3)),
    K.setIndex(W),
    T(
      K,
      g(new m({ vertexColors: !0, side: 2, toneMapped: !1, fog: !1 }), w),
      `harbor-horizon`,
    ));
  let q = {
      skyMap: { value: e.sky },
      time: { value: 0 },
      waterLevel: { value: y },
    },
    J = ``,
    Y = ``;
  for (let t of _)
    ((q[t.key + `Map`] = { value: e[t.key] }),
      (J += `uniform sampler2D ${t.key}Map;\n`),
      (Y += `layer=shore(${t.key}Map,eye,ray,${t.radius.toFixed(1)},${t.height.toFixed(1)},${t.baseline.toFixed(9)},${t.angle.toFixed(9)},${t.arc.toFixed(9)},ripple);color=mix(color,layer.rgb*.45,layer.a*.88);\n`));
  let X = [],
    Z = [],
    Q = [0];
  for (let e = 20; e <= 2e3; e += 20) Q.push(e);
  for (let e = 2200; e < 12e3; e *= 1.12) Q.push(e);
  Q.push(12e3);
  for (let e = 0; e < Q.length; e++)
    for (let t = 0; t < 512; t++) {
      let n = t / 128,
        r = Math.floor(n),
        i = n - r,
        a = Q[e],
        o =
          r === 0 ? -a + 2 * a * i : r === 1 ? a : r === 2 ? a - 2 * a * i : -a,
        s =
          r === 0 ? -a : r === 1 ? -a + 2 * a * i : r === 2 ? a : a - 2 * a * i;
      if ((X.push(o, y, s), e < Q.length - 1)) {
        let n = e * 512 + t,
          r = e * 512 + ((t + 1) % 512);
        Z.push(n, r, r + 512, n, r + 512, n + 512);
      }
    }
  let $ = new n();
  ($.setAttribute(`position`, new d(X, 3)), $.setIndex(Z));
  let ae = T(
    $,
    new o({
      uniforms: q,
      toneMapped: !1,
      vertexShader: E,
      fragmentShader: `
 varying vec3 worldPoint;uniform float time;uniform float waterLevel;${J}${v}
 float wave(vec2 p){float pixel=length(fwidth(p));return sin(p.x*.24+p.y*.19+time*.8)*.48/(1.+pixel*.18)+sin(p.x*.71-p.y*.31-time*1.1)*.28/(1.+pixel*.55)+sin(p.x*1.41+p.y*.5+time*.5)*.12/(1.+pixel);}
 vec4 shore(sampler2D map,vec3 origin,vec3 ray,float radius,float height,float baseline,float center,float arc,vec2 ripple){
  float a=dot(ray.xz,ray.xz),b=dot(origin.xz,ray.xz),c=dot(origin.xz,origin.xz)-radius*radius;
  float t=(-b+sqrt(max(0.,b*b-a*c)))/max(.00001,a);vec3 point=origin+ray*t;
  float angle=atan(point.x,-point.z)-center;angle=atan(sin(angle),cos(angle));
  vec2 uv=vec2(.5+angle/arc,1.-baseline+(point.y-waterLevel+1.5)/height)+ripple;
  if(t<0.||uv.x<0.||uv.x>1.||uv.y<0.||uv.y>1.)return vec4(0.);
  vec4 value=texture2D(map,uv,1.2);value.a*=smoothstep(0.,.018,uv.x)*smoothstep(0.,.018,1.-uv.x);return value;
 }
 void main(){
  vec3 toEye=normalize(cameraPosition-worldPoint);float distanceToEye=length(cameraPosition-worldPoint);
  float w=wave(worldPoint.xz),w2=wave(worldPoint.zx*.73+37.);
  vec3 normal=normalize(vec3(w*.032,1.,w2*.023)),reflected=reflect(-toEye,normal);
  vec3 color=skyColor(reflected)*.57,eye=vec3(cameraPosition.x,2.*waterLevel-cameraPosition.y,cameraPosition.z),ray=normalize(worldPoint-eye);
  vec2 ripple=vec2(w*.0013,w2*.0018)*min(2.,distanceToEye/150.+.3);vec4 layer;
  ${Y}
  float fresnel=pow(1.-max(0.,dot(normal,toEye)),3.);color=mix(vec3(.012,.025,.040),color,.58+fresnel*.42);
  color+=vec3(.014,.019,.023)*pow(max(0.,w*.6+.35),5.)*(.3+.7*fresnel);
  gl_FragColor=vec4(color,1.);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`,
    }),
    `harbor-water`,
  );
  ae.material.side = 2;
  let oe = !1;
  return {
    root: x,
    layers: O,
    sky: D,
    water: ae,
    resources: [...S],
    update(e, t) {
      ((q.time.value = e % 2e3),
        t && (D.position.copy(t.position), D.updateMatrixWorld(!0)));
    },
    dispose() {
      if (!oe) {
        ((oe = !0), x.removeFromParent());
        for (let e of S) e.dispose();
        x.clear();
      }
    },
  };
}
async function b(t, n, r) {
  let i = t.modules.get(`terrain`),
    a = i?.getHeightfield?.();
  if (!a?.opts?.harborSurround) return null;
  let o = new e(),
    s = [],
    c = [
      ..._.map((e) => [e.key, e.file]),
      [`sky`, `sky.png`],
      [`nearWoods`, `near-woods.png`],
    ],
    l = await Promise.allSettled(
      c.map(async ([e, t]) => {
        let n = await o.loadAsync(`/assets/greywater-harbor/` + t);
        return (s.push(n), [e, n]);
      }),
    ),
    u = l.find((e) => e.status === `rejected`);
  if (u) throw (s.forEach((e) => e.dispose()), u.reason);
  let d = y(Object.fromEntries(l.map((e) => e.value)), {
      waterLevel: a.waterLevel,
      far: t.camera.far,
      lite: !!t.config.lite,
      groundHeight: (e, t) => i.surroundHeight(e, t),
    }),
    f = t.modules.get(`environment`)?.skyDome,
    p = f?.visible,
    m = i.getWater?.()?.mesh,
    h = m?.visible;
  return (
    f && (f.visible = !1),
    m && (m.visible = !1),
    n.add(d.root),
    d.update((r() ?? 0) / 60, t.camera),
    {
      group: d.root,
      update() {
        d.update((r() ?? 0) / 60, t.camera);
      },
      stats() {
        return {
          kind: `harbor`,
          sectors: 4,
          layers: 8,
          textures: 7,
          resources: d.resources.length,
          dam: !1,
          storm: !1,
        };
      },
      dispose() {
        (d.dispose(), f && (f.visible = p), m && (m.visible = h));
      },
    }
  );
}
