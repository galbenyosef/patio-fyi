// assets__demo-BF8qQ4c6 02 — math
// Lines 211-559 of readable/assets__demo-BF8qQ4c6.pretty.js (statement-aligned).
function Te(e, t = () => e.world.time.tick / 60) {
  let o = new v();
  ((o.name = `skywriter`), (o.frustumCulled = !1));
  let s = {
      body: new i({ color: 13120045, roughness: 0.7, flatShading: !0 }),
      trim: new i({ color: 15326400, roughness: 0.8, flatShading: !0 }),
      dark: new i({
        color: 2763822,
        roughness: 0.6,
        metalness: 0.3,
        flatShading: !0,
      }),
    },
    c = new r(1, 1, 1),
    l = new E(1, 1, 1, 10),
    u = new C(1, 1),
    f = { uKeyV: { value: new a(0, 1, 0) }, uRim: { value: new p(0, 0, 0) } },
    m = new p(),
    g = new p(),
    _ = new a();
  function b() {
    let e = {
        uNow: { value: 0 },
        uLife: { value: 1 },
        uR0: { value: 1 },
        uWind: { value: new a() },
        ...f,
      },
      t = new d({
        color: 16777215,
        transparent: !0,
        depthWrite: !1,
        opacity: 1,
      });
    return (
      (t.customProgramCacheKey = () => `skysmoke2`),
      (t.onBeforeCompile = (t) => {
        (Object.assign(t.uniforms, e),
          (t.vertexShader =
            `attribute vec4 aPuff;attribute float aSeed;uniform float uNow,uLife,uR0;uniform vec3 uWind;varying vec2 vQ;varying float vA,vSeed;varying vec3 vView;
` +
            t.vertexShader.replace(
              `#include <project_vertex>`,
              `
    float age=max(0.,uNow-aPuff.w),bloom=smoothstep(0.,2.5,age);
    vec3 h=fract(vec3(aSeed*12.9898,aSeed*78.233,aSeed*37.719)*43758.5453)-.5;
    float rad=uR0*(.7+.6*fract(aSeed*7.31))*(.55+.45*bloom)*(1.+age*${Se})*(1.+(1.-uLife)*.5);
    // drift on the breeze, slow per-puff dispersal, and a lazy vertical billow
    vec3 wp=aPuff.xyz+uWind*age+h*vec3(1.,.5,1.)*uR0*.045*age+vec3(0.,sin(age*.23+aSeed*6.283)*.3*uR0*bloom,0.);
    vec4 mvPosition=modelViewMatrix*vec4(wp,1.);
    mvPosition.xy+=position.xy*2.*rad;
    gl_Position=projectionMatrix*mvPosition;
    vQ=position.xy*2.;vSeed=aSeed;vView=mvPosition.xyz;
    vA=uLife/(1.+age*${Ce});`,
            )),
          (t.fragmentShader =
            `uniform vec3 uKeyV,uRim;varying vec2 vQ;varying float vA,vSeed;varying vec3 vView;
    float skyHash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
    float skyNoise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(skyHash(i),skyHash(i+vec2(1,0)),f.x),mix(skyHash(i+vec2(0,1)),skyHash(i+1.),f.x),f.y);}
` +
            t.fragmentShader
              .replace(
                `vec4 diffuseColor = vec4( diffuse, opacity );`,
                `
    float r2=dot(vQ,vQ);if(r2>1.)discard;
    float ang=vSeed*6.283;vec2 nq=mat2(cos(ang),-sin(ang),sin(ang),cos(ang))*vQ*1.6+vSeed*23.;
    float nz=skyNoise(nq)*.62+skyNoise(nq*2.4+4.1)*.38;
    float dens=smoothstep(1.,.15,sqrt(r2)+(nz-.5)*.5)*(.72+.5*nz);
    float alpha=opacity*vA*dens;if(alpha<.008)discard;
    vec4 diffuseColor=vec4(diffuse,min(1.,alpha));`,
              )
              .replace(
                `#include <normal_fragment_begin>`,
                `float faceDirection=1.;
    vec3 normal=normalize(vec3(vQ*.9+(nz-.5)*.35,sqrt(max(.06,1.-r2))));vec3 nonPerturbedNormal=normal;`,
              )
              .replace(
                `#include <aomap_fragment>`,
                `#include <aomap_fragment>
    // silver lining: light scattering forward through the thin edges when the sun sits behind the smoke
    float fw=pow(max(0.,dot(normalize(vView),uKeyV)),6.);totalEmissiveRadiance+=uRim*fw*(1.3-dens*.7);`,
              )));
      }),
      (t.userData.u = e),
      t
    );
  }
  function x() {
    let e = new v();
    o.add(e);
    let t = (t, r, i, a, o) => {
      let s = new n(t, a);
      return (
        s.scale.set(...r),
        s.position.set(...i),
        o && s.rotation.set(...o),
        e.add(s),
        s
      );
    };
    (t(c, [1.3, 1.2, 5.2], [0, 0, 0], s.body),
      t(c, [1.1, 0.9, 1.8], [0, 0.55, -1.2], s.trim));
    for (let e of [-0.7, 0.9]) t(c, [8.5, 0.14, 1.5], [0, e, -0.6], s.trim);
    for (let e of [-2.8, 2.8])
      for (let n of [-1.2, 0]) t(c, [0.12, 1.6, 0.12], [e, 0.1, n], s.dark);
    (t(c, [0.14, 1.5, 1.3], [0, 0.9, 2.4], s.body),
      t(c, [3.2, 0.12, 1.2], [0, 0.3, 2.4], s.trim));
    let r = t(l, [0.12, 3, 0.12], [0, 0, -2.72], s.dark);
    r.rotation.z = Math.PI / 2;
    let i = t(l, [0.3, 0.3, 0.3], [0, 0, -2.65], s.dark);
    i.rotation.x = Math.PI / 2;
    for (let e of [-0.8, 0.8])
      t(l, [0.35, 0.2, 0.35], [e, -1.35, -0.9], s.dark, [0, 0, Math.PI / 2]);
    let d = new h();
    ((d.index = u.index),
      d.setAttribute(`position`, u.attributes.position),
      d.setAttribute(`normal`, u.attributes.normal),
      d.setAttribute(`uv`, u.attributes.uv),
      (d.instanceCount = 0));
    let f = new y(new Float32Array(z * 4), 4),
      p = new y(new Float32Array(z), 1);
    (d.setAttribute(`aPuff`, f), d.setAttribute(`aSeed`, p));
    let m = b(),
      g = new n(d, m);
    return (
      (g.frustumCulled = !1),
      (g.name = `skysmoke`),
      (g.visible = !1),
      (g.renderOrder = 1),
      o.add(g),
      (e.visible = !1),
      {
        group: e,
        prop: r,
        smoke: g,
        geo: d,
        aPuff: f,
        aSeed: p,
        mat: m,
        births: null,
        plan: null,
        key: ``,
        start: 0,
        heading: 0,
        bank: 0,
        pos: new a(),
      }
    );
  }
  let S = Array.from({ length: be }, x),
    w = oe(null),
    T = [];
  function D(e) {
    ((e.plan = null),
      (e.key = ``),
      (e.group.visible = !1),
      (e.smoke.visible = !1),
      (e.geo.instanceCount = 0));
  }
  function O(e, t) {
    ((w = oe(e)), (T = Array.isArray(t) ? t : []), m.set(w.color));
    let [n, r] = xe[w.plane] ?? xe.red;
    (s.body.color.setHex(n), s.trim.color.setHex(r));
    let i = JSON.stringify([
      w.size,
      w.thickness,
      w.speed,
      w.hold,
      w.fade,
      w.drift,
    ]);
    for (let e = 0; e < be; e++) {
      let t = S[e],
        n = T[e],
        r = w.messages[n?.message],
        a = w.spots[n?.spot];
      if (!n || !r || !a) {
        D(t);
        continue;
      }
      let o = JSON.stringify([r, a, n.start, i]);
      if (((t.down = n.down ?? null), (t.start = n.start), o === t.key))
        continue;
      ((t.key = o), (t.plan = pe(w, r, a)));
      let s = we(t.plan, w);
      (t.aPuff.array.set(s.puff),
        t.aSeed.array.set(s.seed),
        (t.aPuff.needsUpdate = t.aSeed.needsUpdate = !0),
        (t.births = s.puff.filter((e, t) => t % 4 == 3)),
        (t.geo.instanceCount = 0));
      let c = t.mat.userData.u;
      ((c.uR0.value = s.r0),
        c.uWind.value.set(t.plan.wind[0], 0, t.plan.wind[1]),
        (t.group.visible = !0),
        (t.smoke.visible = !0),
        t.pos.fromArray(I(t.plan, 0)),
        (t.heading = Math.atan2(
          -(t.plan.nodes[0]?.x - t.pos.x || 0),
          -(t.plan.nodes[0]?.z - t.pos.z || 1),
        )));
    }
  }
  function k() {
    let t = e.modules.get(`environment`),
      n = t?.getAtmosphere?.(),
      r = t?.getSun?.(),
      i = e.camera,
      a = n?.cloudTint ?? [1, 1, 1],
      o = n?.cloudAmbient ?? [0.35, 0.38, 0.42];
    for (let e of S) {
      e.mat.color.copy(m).multiply(g.setRGB(a[0], a[1], a[2]));
      let t = r?.color ?? [1, 1, 1],
        n =
          Math.min(1.5, r?.intensity ?? 1) *
          (r?.isMoon ? 0.1 : 0.32) *
          Math.max(0, Math.min(1, ((r?.dir?.[1] ?? 1) + 0.05) * 6));
      e.mat.emissive
        .copy(m)
        .multiply(
          g.setRGB(
            o[0] * 0.9 + t[0] * n,
            o[1] * 0.9 + t[1] * n,
            o[2] * 0.9 + t[2] * n,
          ),
        );
    }
    if (r && i) {
      (_.fromArray(r.dir).transformDirection(i.matrixWorldInverse),
        f.uKeyV.value.copy(_));
      let e =
        Math.min(1.5, r.intensity ?? 1) *
        (r.isMoon ? 0.12 : 0.4) *
        Math.max(0, Math.min(1, (r.dir[1] + 0.05) * 6));
      f.uRim.value.setRGB(r.color[0] * e, r.color[1] * e, r.color[2] * e);
    }
  }
  let A = (e, t) => {
      let n = 0,
        r = e.length;
      for (; n < r;) {
        let i = (n + r) >> 1;
        e[i] <= t ? (n = i + 1) : (r = i);
      }
      return n;
    },
    j = [0, 0, 0],
    M = [0, 0, 0];
  function N(n) {
    let r = t(),
      i = !1;
    for (let t of S) {
      if (!t.plan) continue;
      i = !0;
      let a = w,
        o = Math.max(0, r - t.start / 60),
        s = t.down == null ? 1 / 0 : Math.max(0, (t.down - t.start) / 60),
        c = o > s,
        l = Math.min(o, s);
      if (c) {
        let r = o - s,
          i = I(t.plan, s),
          a = I(t.plan, s + 0.1);
        ((t.group.visible = r < 9),
          t.pos.set(
            i[0] + (a[0] - i[0]) * 10 * r * 0.7,
            i[1] - 4.9 * r * r,
            i[2] + (a[2] - i[2]) * 10 * r * 0.7,
          ),
          t.group.position.copy(t.pos),
          t.group.rotation.set(-Math.min(1.3, r * 0.5), t.heading, r * 4.5),
          t.group.visible &&
            (t.smokeT = (t.smokeT ?? 0) - n) <= 0 &&
            ((t.smokeT = 0.06),
            e.modules
              .get(`effects`)
              ?.spawn?.(`smoke`, t.pos.toArray(), [0, 1, 0], {
                count: 2,
                scale: 3,
              })));
      } else {
        t.group.visible = !0;
        let e = I(t.plan, l);
        (Object.assign(j, I(t.plan, l - 0.25)),
          Object.assign(M, I(t.plan, l + 0.25)));
        let r = M[0] - j[0],
          i = M[2] - j[2];
        if (Math.hypot(r, i) > 0.01) {
          let e = Math.atan2(-r, -i),
            a = Math.atan2(Math.sin(e - t.heading), Math.cos(e - t.heading)),
            o = Math.min(1, n * 7);
          ((t.heading += a * o),
            (t.bank +=
              (Math.max(-1.1, Math.min(1.1, a * 2.2)) - t.bank) *
              Math.min(1, n * 4)));
        }
        (t.pos.fromArray(e),
          t.group.position.copy(t.pos),
          t.group.rotation.set(
            Math.atan2(M[1] - j[1], Math.hypot(r, i) || 1),
            t.heading,
            t.bank,
            `YXZ`,
          ),
          (t.prop.rotation.x += n * 40));
      }
      let u = c ? s + 4 : t.plan.writeTime + a.hold,
        d =
          o < u
            ? 1
            : Math.max(0, 1 - (o - u) / (c ? Math.min(a.fade, 8) : a.fade)),
        f = t.mat.userData.u;
      ((f.uNow.value = o),
        (f.uLife.value = d),
        (t.geo.instanceCount = d > 0 ? A(t.births, l) : 0),
        (t.smoke.visible = t.geo.instanceCount > 0));
    }
    i && k();
  }
  e.scene.add(o);
  let P = {
    setSettings: O,
    update: N,
    get settings() {
      return w;
    },
    get assignments() {
      return T;
    },
    root: o,
    stats() {
      let e = t();
      return S.map((t) => ({
        active: !!t.plan,
        puffs: t.geo.instanceCount,
        total: t.births?.length ?? 0,
        visible: t.group.visible,
        t: t.plan ? +(e - t.start / 60).toFixed(2) : null,
        first: t.births?.[0] ?? null,
      }));
    },
    dispose() {
      e.scene.remove(o);
      for (let e of Object.values(s)) e.dispose();
      for (let e of S) (e.geo.dispose(), e.mat.dispose());
      (c.dispose(), l.dispose(), u.dispose());
    },
  };
  return ((o.userData.skywriter = P), P);
}
