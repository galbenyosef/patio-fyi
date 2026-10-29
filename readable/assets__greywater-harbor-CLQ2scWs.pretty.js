/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  Bt as e,
  Dn as t,
  F as n,
  Hn as r,
  L as i,
  Nn as a,
  Vt as o,
  W as s,
  _n as c,
  at as l,
  bn as u,
  cn as d,
  dt as f,
  vt as p,
  zt as m,
} from "./graphics-quality-CrL3qbU3.js";
import { n as h, r as g, t as ee } from "./harbor-land-d1AqIq2I.js";
var _ = [
    {
      key: `city`,
      file: `skyline.png`,
      radius: 2900,
      angle: 0,
      arc: 1.95,
      height: 1767,
      baseline: 477 / 724,
    },
    {
      key: `working`,
      file: `working-harbor.png`,
      radius: 3300,
      angle: 1.64,
      arc: 1.9,
      height: 1900,
      baseline: 477 / 724,
    },
    {
      key: `outer`,
      file: `outer-bay.png`,
      radius: 3700,
      angle: -1.64,
      arc: 1.9,
      height: 1820,
      baseline: 477 / 724,
    },
    {
      key: `woods`,
      file: `wooded-headland.png`,
      radius: 2850,
      angle: Math.PI,
      arc: 2,
      height: 1730,
      baseline: 477 / 724,
    },
    {
      key: `port`,
      file: `port.png`,
      radius: 900,
      angle: 0,
      arc: 1.95,
      height: 548,
      baseline: 525 / 724,
    },
  ],
  te = [
    {
      key: `nearWoods`,
      radius: 520,
      angle: 2.22,
      arc: 1.1,
      height: 191,
      baseline: 0.74,
      grounded: !0,
    },
    {
      key: `nearWoods`,
      radius: 740,
      angle: 3.14,
      arc: 1.24,
      height: 306,
      baseline: 0.74,
      grounded: !0,
    },
    {
      key: `nearWoods`,
      radius: 560,
      angle: 4.06,
      arc: 1.1,
      height: 205,
      baseline: 0.74,
      grounded: !0,
    },
  ],
  v = `
uniform sampler2D skyMap;
vec3 skyColor(vec3 direction){
 vec3 d=normalize(direction);float u=.5+atan(d.x,-d.z)/6.2831853;
 float v=clamp(.42+asin(clamp(d.y,-1.,1.))/3.14159265,.001,.999);
 vec3 c=texture2D(skyMap,vec2(u,v)).rgb;
 float blend=.5*(1.-smoothstep(0.,.14,min(u,1.-u)));
 c=mix(c,texture2D(skyMap,vec2(1.-u,v)).rgb,blend);
 return mix(c*vec3(.65,.78,.93),vec3(.035,.060,.11),.12);
}`;
function y(
  a,
  {
    waterLevel: y = 8,
    far: b = 4e3,
    lite: ne = !1,
    groundHeight: re = (e, t) => ee(e, t, 24, 220),
  } = {},
) {
  let x = new f();
  ((x.name = `greywater-harbor`),
    (x.userData = {
      presentationOnly: !0,
      collision: !1,
      dynamicShadow: !0,
      sectorCount: 4,
    }));
  let S = new Set(Object.values(a)),
    C = (e) => (S.add(e), e),
    w = { far: b, from: Math.min(1800, b * 0.78), haze: 0 },
    T = (t, n, r) => {
      (C(t), C(n));
      let i = new e(t, n);
      return ((i.name = r), (i.frustumCulled = !1), x.add(i), i);
    };
  for (let e of Object.values(a))
    ((e.colorSpace = c), (e.anisotropy = ne ? 2 : 8));
  let E = `varying vec3 worldPoint;${h(w.far, w.from)}
 void main(){worldPoint=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*farCompressMV(viewMatrix*vec4(worldPoint,1.));}`,
    D = T(
      new t(12e3, 48, 24),
      new u({
        side: 1,
        depthWrite: !1,
        toneMapped: !1,
        uniforms: { skyMap: { value: a.sky } },
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
  for (let e of [..._, ...te]) {
    let t = [],
      n = [],
      r = [];
    for (let r = 0; r < 2; r++)
      for (let i = 0; i <= 128; i++) {
        let a = i / 128,
          o = e.angle + (a - 0.5) * e.arc;
        (t.push(
          Math.sin(o) * e.radius,
          (e.grounded
            ? re(Math.sin(o) * e.radius, -Math.cos(o) * e.radius) - 18
            : y - 1.5) +
            (e.baseline - r) * e.height,
          -Math.cos(o) * e.radius,
        ),
          n.push(a, 1 - r));
      }
    for (let e = 0; e < 128; e++) {
      let t = e,
        n = e + 128 + 1;
      r.push(t, n, t + 1, t + 1, n, n + 1);
    }
    let s = new i();
    (s.setAttribute(`position`, new l(t, 3)),
      s.setAttribute(`uv`, new l(n, 2)),
      s.setIndex(r));
    let c = new o({
      map: a[e.key],
      transparent: !0,
      depthWrite: !0,
      alphaTest: 0.05,
      toneMapped: !1,
      side: 2,
      forceSinglePass: !0,
      fog: !1,
    });
    ((c.onBeforeCompile = (e) => {
      e.fragmentShader = e.fragmentShader.replace(
        `#include <alphamap_fragment>`,
        `#include <alphamap_fragment>
diffuseColor.a *= smoothstep(0.,.018,vMapUv.x)*smoothstep(0.,.018,1.-vMapUv.x);`,
      );
    }),
      (c.customProgramCacheKey = () => `greywater-harbor-layer-v1`),
      g(c, w));
    let u = T(s, c, `harbor-` + e.key);
    ((u.userData = { ...e, presentationOnly: !0, collision: !1 }), O.push(u));
    let d = C(
      g(
        new o({
          map: a[e.key],
          color: 3815994,
          alphaTest: 0.05,
          side: 2,
          fog: !1,
        }),
        w,
      ),
    );
    u.userData.thermalMaterial = () => d;
  }
  let k = [],
    A = [],
    j = [],
    M = new s();
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
  let N = new i();
  (N.setAttribute(`position`, new l(k, 3)),
    N.setAttribute(`color`, new l(A, 3)),
    N.setIndex(j),
    T(
      N,
      g(new o({ vertexColors: !0, side: 2, fog: !1 }), w),
      `harbor-port-land`,
    ));
  let P = 519,
    F = () => (P = (Math.imul(P, 1664525) + 1013904223) >>> 0) / 4294967296,
    I = new m(),
    L = new d(),
    ie = new r(0, 1, 0),
    R = new r(),
    z = new r(),
    B = new s(),
    V = new p(
      C(new n(1, 1, 1)),
      C(g(new o({ color: 7502976, fog: !1 }), w)),
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
    G = new s(`#30435a`);
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
  let K = new i();
  (K.setAttribute(`position`, new l(H, 3)),
    K.setAttribute(`color`, new l(U, 3)),
    K.setIndex(W),
    T(
      K,
      g(new o({ vertexColors: !0, side: 2, toneMapped: !1, fog: !1 }), w),
      `harbor-horizon`,
    ));
  let q = {
      skyMap: { value: a.sky },
      time: { value: 0 },
      waterLevel: { value: y },
    },
    J = ``,
    Y = ``;
  for (let e of _)
    ((q[e.key + `Map`] = { value: a[e.key] }),
      (J += `uniform sampler2D ${e.key}Map;\n`),
      (Y += `layer=shore(${e.key}Map,eye,ray,${e.radius.toFixed(1)},${e.height.toFixed(1)},${e.baseline.toFixed(9)},${e.angle.toFixed(9)},${e.arc.toFixed(9)},ripple);color=mix(color,layer.rgb*.45,layer.a*.88);\n`));
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
  let $ = new i();
  ($.setAttribute(`position`, new l(X, 3)), $.setIndex(Z));
  let ae = T(
    $,
    new u({
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
async function b(e, t, n) {
  let r = e.modules.get(`terrain`),
    i = r?.getHeightfield?.();
  if (!i?.opts?.harborSurround) return null;
  let o = new a(),
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
      waterLevel: i.waterLevel,
      far: e.camera.far,
      lite: !!e.config.lite,
      groundHeight: (e, t) => r.surroundHeight(e, t),
    }),
    f = e.modules.get(`environment`)?.skyDome,
    p = f?.visible,
    m = r.getWater?.()?.mesh,
    h = m?.visible;
  return (
    f && (f.visible = !1),
    m && (m.visible = !1),
    t.add(d.root),
    d.update((n() ?? 0) / 60, e.camera),
    {
      group: d.root,
      update() {
        d.update((n() ?? 0) / 60, e.camera);
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
export {
  _ as HARBOR_SECTORS,
  b as addGreywaterHarbor,
  y as buildHarborSurround,
};
//# sourceMappingURL=greywater-harbor-CLQ2scWs.js.map
