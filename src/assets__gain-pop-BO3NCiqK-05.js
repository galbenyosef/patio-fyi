// assets__gain-pop-BO3NCiqK 05 — dispose
// Lines 869-1209 of readable/assets__gain-pop-BO3NCiqK.pretty.js (statement-aligned).
function He(e = 48) {
  let n = (e, t, n) => {
      let r =
        Math.imul(e + 761, 374761393) ^
        Math.imul(t + 311, 668265263) ^
        Math.imul(n + 173, 2147483647);
      return (
        (r = Math.imul(r ^ (r >>> 13), 1274126177)),
        ((r ^ (r >>> 16)) >>> 0) / 4294967295
      );
    },
    r = (e, t, r, i) => {
      let a = Math.floor(e),
        o = Math.floor(t),
        s = Math.floor(r),
        c = [e - a, t - o, r - s].map((e) => e * e * (3 - 2 * e)),
        l = 0;
      for (let e = 0; e < 2; e++)
        for (let t = 0; t < 2; t++)
          for (let r = 0; r < 2; r++)
            l +=
              n((a + r) % i, (o + t) % i, (s + e) % i) *
              (r ? c[0] : 1 - c[0]) *
              (t ? c[1] : 1 - c[1]) *
              (e ? c[2] : 1 - c[2]);
      return l;
    },
    i = new Uint8Array(e ** 3 * 4),
    a = 0;
  for (let t = 0; t < e; t++)
    for (let n = 0; n < e; n++)
      for (let o = 0; o < e; o++) {
        let s = [o / e, n / e, t / e],
          c = r(...s.map((e) => e * 4), 4),
          l = r(...s.map((e) => e * 8), 8),
          u = r(...s.map((e) => e * 16), 16),
          d = r(...s.map((e) => e * 24), 24);
        ((i[a++] = Math.round(c * 255)),
          (i[a++] = Math.round((c * 0.5 + l * 0.3 + u * 0.2) * 255)),
          (i[a++] = Math.round((l * 0.5 + u * 0.3 + d * 0.2) * 255)),
          (i[a++] = 255));
      }
  let o = new u(i, e, e, e);
  return (
    (o.format = T),
    (o.type = I),
    (o.minFilter = o.magFilter = t),
    (o.wrapS = o.wrapT = o.wrapR = O),
    (o.unpackAlignment = 1),
    (o.needsUpdate = !0),
    o
  );
}
var Ue = `varying vec3 worldPoint;void main(){vec4 p=modelMatrix*vec4(position,1.);worldPoint=p.xyz;gl_Position=projectionMatrix*viewMatrix*p;}`,
  We = `precision highp sampler3D;
uniform sampler3D field;uniform sampler2D sceneDepth;
uniform vec2 resolution;uniform float nearPlane,farPlane,age,phase,optical;
uniform vec4 centers[10],radii[10];uniform vec3 boundsMin,boundsMax;
varying vec3 worldPoint;
float primitive(float s,float k,float a){return s*(k*k+s*s*(-2.*k*a/3.+s*s*a*a/5.));}
void main(){
 vec3 ray=normalize(worldPoint-cameraPosition);
 vec3 inv=1./(sign(ray+vec3(.000001))*max(abs(ray),vec3(.000001)));
 vec3 a0=(boundsMin-cameraPosition)*inv,b0=(boundsMax-cameraPosition)*inv;
 vec3 lo0=min(a0,b0),hi0=max(a0,b0);float start=max(0.,max(lo0.x,max(lo0.y,lo0.z))),end=min(hi0.x,min(hi0.y,hi0.z));
 float depth=texture2D(sceneDepth,gl_FragCoord.xy/resolution).r;
 float viewDepth=nearPlane*farPlane/(farPlane-(farPlane-nearPlane)*depth);
 end=min(end,viewDepth/max(.001,-(viewMatrix*vec4(ray,0.)).z));
 if(end<=start)discard;
 vec3 origin=cameraPosition+ray*start;float limit=end-start,total=0.,weightSum=0.;vec3 color=vec3(0.);
 vec3 sun=normalize(vec3(-.65,.9,.35));
 for(int i=0;i<10;i++){
  vec3 o=(origin-centers[i].xyz)/radii[i].xyz,d=ray/radii[i].xyz;
  float a=dot(d,d),mid=-dot(o,d)/a;vec3 closest=o+d*mid;float k=1.-dot(closest,closest);
  if(k<=0.)continue;
  float span=sqrt(k/a),entry=max(0.,mid-span),leave=min(limit,mid+span);if(leave<=entry)continue;
  float thick=max(0.,(primitive(leave-mid,k,a)-primitive(entry-mid,k,a))*centers[i].w);total+=thick;
  if(optical<.5&&thick>.0001){
   vec3 p=origin+ray*(entry+(leave-entry)*.20);
   vec3 normal=normalize((p-centers[i].xyz)/(radii[i].xyz*radii[i].xyz));
   vec3 flow=p*.25+vec3(-age*.035,-age*.10,age*.025)+phase*.17;
   vec3 noise=texture(field,flow).rgb;
   float folds=clamp((noise.g-.25)*2.,0.,1.);
   float light=.38+.37*max(0.,dot(normal,sun))+.25*folds;
   light*=.76+.24*exp(-thick*.7);
   vec3 tint=mix(vec3(.16,.18,.185),vec3(.64,.67,.65),light);
   float w=(1.-exp(-thick))*exp(-entry*.30);color+=w*tint;weightSum+=w;
  }
 }
 float trans=exp(-total);
 if(optical>.5){gl_FragColor=vec4(vec3(trans),1.);return;}
 if(total<.0005)discard;
 gl_FragColor=vec4(color/max(weightSum,.00001),1.-trans);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
}`;
function Ge({ camera: e, depth: t = null, resolution: r = new y(1, 1) }) {
  let a = He(),
    o = new i(1, 1, 1),
    c = new F(),
    l = new Map(),
    u = {
      field: { value: a },
      sceneDepth: { value: t },
      resolution: { value: r },
      nearPlane: { value: e.near },
      farPlane: { value: e.far },
      age: { value: 0 },
      phase: { value: 0 },
      optical: { value: 0 },
      centers: { value: new Float32Array(40) },
      radii: { value: new Float32Array(40) },
      boundsMin: { value: new s() },
      boundsMax: { value: new s() },
    },
    d = new C({
      uniforms: u,
      vertexShader: Ue,
      fragmentShader: We,
      side: 1,
      transparent: !0,
      depthWrite: !1,
      depthTest: !1,
    });
  return {
    scene: c,
    update(e, i = {}) {
      let s = new Set();
      for (let u of e) {
        if (!xe(u) || s.size >= Y.maxClouds) continue;
        s.add(u.id);
        let e = l.get(u.id);
        if (!e) {
          let i = d.clone();
          ((i.uniforms.field.value = a),
            (i.uniforms.sceneDepth.value = t),
            (i.uniforms.resolution.value = r),
            (e = new n(o, i)),
            (e.name = `smoke_cloud`),
            (e.userData.thermalKeep = !0),
            c.add(e),
            l.set(u.id, e));
        }
        let f = be(u, i),
          p = e.material.uniforms;
        for (let t = 0; t < 3; t++)
          (e.position.setComponent(t, (f.min[t] + f.max[t]) / 2),
            e.scale.setComponent(t, f.max[t] - f.min[t]));
        ((p.centers.value = f.centers),
          (p.radii.value = f.radii),
          p.boundsMin.value.fromArray(f.min),
          p.boundsMax.value.fromArray(f.max),
          (p.age.value = f.age),
          (p.phase.value = f.phase));
      }
      for (let [e, t] of l)
        s.has(e) || (c.remove(t), t.material.dispose(), l.delete(e));
    },
    bind(n, i, a) {
      ((t = n), r.set(i, a));
      for (let n of l.values()) {
        let r = n.material.uniforms;
        ((r.sceneDepth.value = t),
          (r.nearPlane.value = e.near),
          (r.farPlane.value = e.far));
      }
    },
    diagnostic(e) {
      for (let t of l.values()) t.material.uniforms.optical.value = +!!e;
    },
    stats: () => ({
      clouds: l.size,
      visibility: `depth-integrated`,
      lobes: 10,
      noiseBytes: a.image.data.byteLength,
    }),
    dispose() {
      for (let e of l.values()) e.material.dispose();
      (l.clear(), d.dispose(), o.dispose(), a.dispose(), c.clear());
    },
  };
}
function Ke(e) {
  let { camera: t, scene: r, renderer: i } = e,
    o = Ge({ camera: t }),
    s = new a(1, 1, { type: D, depthBuffer: !1 }),
    c = new a(1, 1, { type: D, depthTexture: new h(1, 1), samples: 4 }),
    l = new y(),
    u = new k(2, 2),
    d = new F(),
    f = new g(),
    p = `varying vec2 uv0;void main(){uv0=uv;gl_Position=vec4(position.xy,0.,1.);}`,
    m = new C({
      transparent: !0,
      depthTest: !1,
      depthWrite: !1,
      uniforms: { image: { value: s.texture } },
      vertexShader: p,
      fragmentShader: `uniform sampler2D image;varying vec2 uv0;void main(){vec4 c=texture2D(image,uv0);gl_FragColor=vec4(c.rgb/max(.00001,c.a),c.a);}`,
    }),
    _ = new C({
      depthTest: !1,
      depthWrite: !1,
      uniforms: { image: { value: c.texture } },
      vertexShader: p,
      fragmentShader: `uniform sampler2D image;varying vec2 uv0;void main(){gl_FragColor=texture2D(image,uv0);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`,
    }),
    v = new C({
      depthTest: !1,
      depthWrite: !1,
      toneMapped: !1,
      uniforms: _.uniforms,
      vertexShader: p,
      fragmentShader: `uniform sampler2D image;varying vec2 uv0;void main(){gl_FragColor=texture2D(image,uv0);}`,
    }),
    b = new n(u, m);
  ((b.frustumCulled = !1), d.add(b));
  let S = {
    volume: o,
    active: () => o.stats().clouds > 0,
    prepareTarget(e) {
      e.depthTexture ||
        ((e.depthTexture = new h(e.width, e.height)), e.dispose());
    },
    composite(e, n) {
      if (!S.active()) return;
      let r = {
        target: e.getRenderTarget(),
        auto: e.autoClear,
        color: e.getClearColor(new x()),
        alpha: e.getClearAlpha(),
      };
      try {
        (s.setSize(n.width, n.height),
          o.bind(n.depthTexture, n.width, n.height),
          (e.autoClear = !1),
          e.setRenderTarget(s),
          e.setClearColor(0, 0),
          e.clear(),
          e.render(o.scene, t),
          e.setRenderTarget(n),
          (b.material = m),
          e.render(d, f));
      } finally {
        (e.setClearColor(r.color, r.alpha),
          (e.autoClear = r.auto),
          e.setRenderTarget(r.target));
      }
    },
    renderScene(e, t = null, n = !1) {
      let r = { target: i.getRenderTarget(), auto: i.autoClear };
      (i.getDrawingBufferSize(l), c.setSize(l.x, l.y));
      try {
        (i.setRenderTarget(c),
          (i.autoClear = !0),
          e(),
          S.composite(i, c),
          t && ((i.autoClear = !1), t()),
          i.setRenderTarget(r.target),
          (i.autoClear = !0),
          (b.material = n ? v : _),
          i.render(d, f));
      } finally {
        ((i.autoClear = r.auto), i.setRenderTarget(r.target));
      }
    },
    update() {
      o.update(e.world.byType?.(`projectile`) ?? e.world.sorted());
    },
    dispose() {
      (r.userData.smokeVolume === S && delete r.userData.smokeVolume,
        o.dispose(),
        s.dispose(),
        c.depthTexture.dispose(),
        c.dispose(),
        u.dispose(),
        m.dispose(),
        _.dispose(),
        v.dispose());
    },
  };
  return ((r.userData.smokeVolume = S), S);
}
var qe = X.throwTicks / 60,
  Je = X.pickupTicks / 60,
  Ye = 0.085,
  Z = Ye + X.recoverTicks / 60 + 0.02,
  Q = (e) => ((e = Math.max(0, Math.min(1, e))), e * e * (3 - 2 * e)),
  Xe = [
    [0, 0.3, -0.5, -0.3],
    [0.3, 0.11, -0.19, -0.38],
    [0.62, 0.09, -0.17, -0.37],
    [1, 0.27, 0.01, -0.29],
  ],
  Ze = [
    [0, -0.3, -0.5, -0.3],
    [0.3, -0.03, -0.19, -0.38],
    [0.48, -0.02, -0.18, -0.37],
    [0.78, -0.21, -0.23, -0.4],
    [1, -0.15, -0.12, -0.52],
  ],
  Qe = [
    [0, 0.26, -0.5, -0.3],
    [0.42, 0.05, -0.4, -0.48],
    [0.55, 0.05, -0.37, -0.46],
    [1, 0.27, 0.01, -0.29],
  ],
  $e = [
    [0, -0.3, -0.5, -0.3],
    [0.5, -0.24, -0.34, -0.42],
    [1, -0.15, -0.12, -0.52],
  ],
  et = [
    [0, 0.27, 0.01, -0.29],
    [0.045, 0.21, 0.07, -0.36],
    [Ye, 0.06, 0.01, -0.56],
    [0.16, -0.1, -0.21, -0.5],
    [0.25, -0.04, -0.56, -0.36],
    [Z, 0.3, -0.85, -0.3],
  ],
  tt = [
    [0, -0.15, -0.12, -0.52],
    [Ye, -0.23, -0.21, -0.32],
    [0.2, -0.32, -0.62, -0.3],
    [Z, -0.32, -0.85, -0.3],
  ];
function nt(e, t, n) {
  let r = 1;
  for (; r < e.length - 1 && t > e[r][0];) r++;
  let i = e[r - 1],
    a = e[r],
    o = Q((t - i[0]) / Math.max(1e-6, a[0] - i[0]));
  return n.set(
    i[1] + (a[1] - i[1]) * o,
    i[2] + (a[2] - i[2]) * o,
    i[3] + (a[3] - i[3]) * o,
  );
}
