// assets__effects-BZzGHRRU 03 — active
// Lines 734-998 of readable/assets__effects-BZzGHRRU.pretty.js (statement-aligned).
function m(e, t = {}) {
  let n = t.fade === !0,
    r = t.rim || 0,
    i = t.emissive || 0;
  ((e.onBeforeCompile = (e) => {
    ((e.vertexShader = e.vertexShader
      .replace(
        `#include <common>`,
        `#include <common>
attribute float aAlpha;
varying float vFxAlpha;` +
          (n
            ? `
attribute float aFade;`
            : ``),
      )
      .replace(
        `#include <begin_vertex>`,
        `#include <begin_vertex>
vFxAlpha = aAlpha` +
          (n ? ` * aFade` : ``) +
          `;`,
      )),
      (e.fragmentShader = e.fragmentShader
        .replace(
          `#include <common>`,
          `#include <common>
varying float vFxAlpha;`,
        )
        .replace(
          `#include <color_fragment>`,
          `#include <color_fragment>
diffuseColor.a *= vFxAlpha;`,
        )),
      r > 0 &&
        (e.fragmentShader = e.fragmentShader.replace(
          `#include <normal_fragment_maps>`,
          `#include <normal_fragment_maps>\n{ float fxFace = abs(dot(normalize(normal), normalize(vViewPosition)));\n  diffuseColor.a *= smoothstep(0.0, ${r.toFixed(3)}, fxFace); }`,
        )),
      i > 0 &&
        (e.fragmentShader = e.fragmentShader.replace(
          `#include <emissivemap_fragment>`,
          `#include <emissivemap_fragment>\ntotalEmissiveRadiance += vColor.rgb * ${i.toFixed(3)};`,
        )));
  }),
    (e.customProgramCacheKey = () => `fx-ia-${+!!n}-${r}-${i}`));
}
var h = class {
  constructor(e, t, n = 8) {
    ((this.lights = []),
      (this.age = new Float32Array(n)),
      (this.life = new Float32Array(n)),
      (this.i0 = new Float32Array(n)),
      (this.decay = new Float32Array(n)),
      (this.free = []));
    for (let r = 0; r < n; r++) {
      let n = new e.PointLight(16777215, 0, 10, 2);
      ((n.name = `fx:light` + r),
        n.position.set(0, -1e3, 0),
        (n.castShadow = !1),
        t.add(n),
        this.lights.push(n),
        this.free.push(r));
    }
    this.active = [];
  }
  spawn(e, t, n, r, i, a, o, s = 1) {
    let l;
    if (this.free.length) l = this.free.pop();
    else {
      let e = -1;
      for (let t of this.active) {
        let n = this.age[t] / this.life[t];
        n > e && ((e = n), (l = t));
      }
      if (l === void 0) return -1;
      this.active.splice(this.active.indexOf(l), 1);
    }
    let u = this.lights[l];
    return (
      u.position.set(e, t, n),
      u.color.setHex(r),
      (u.intensity = i),
      (u.distance = a),
      (this.age[l] = 0),
      (this.life[l] = Math.max(o, c)),
      (this.i0[l] = i),
      (this.decay[l] = s),
      this.active.push(l),
      l
    );
  }
  tick(e) {
    for (let t = this.active.length - 1; t >= 0; t--) {
      let n = this.active[t];
      this.age[n] += e;
      let r = this.age[n] / this.life[n];
      if (r >= 1) {
        let e = this.lights[n];
        ((e.intensity = 0),
          e.position.set(0, -1e3, 0),
          this.active.splice(t, 1),
          this.free.push(n));
        continue;
      }
      let i = 1 - r;
      this.lights[n].intensity =
        this.i0[n] * (this.decay[n] === 1 ? i : i ** +this.decay[n]);
    }
  }
  get count() {
    return this.active.length;
  }
};
function g(e, t, n, r) {
  let i = t.attributes.position,
    a = new Map();
  for (let e = 0; e < i.count; e++) {
    let t =
        i.getX(e).toFixed(4) +
        `,` +
        i.getY(e).toFixed(4) +
        `,` +
        i.getZ(e).toFixed(4),
      o = a.get(t);
    (o || ((o = [r.range(-n, n), r.range(-n, n), r.range(-n, n)]), a.set(t, o)),
      i.setXYZ(e, i.getX(e) + o[0], i.getY(e) + o[1], i.getZ(e) + o[2]));
  }
  return (
    (i.needsUpdate = !0),
    t.computeVertexNormals(),
    t.computeBoundingSphere(),
    t
  );
}
function _(e, t, n, r, i) {
  let a = t.index ? t.toNonIndexed() : t,
    o = a.attributes.position.count,
    s = new Float32Array(o * 3);
  for (let e = 0; e < o; e += 3) {
    let t = i.range(n, r);
    for (let n = 0; n < 3; n++)
      ((s[(e + n) * 3] = t),
        (s[(e + n) * 3 + 1] = t),
        (s[(e + n) * 3 + 2] = t));
  }
  return (a.setAttribute(`color`, new e.BufferAttribute(s, 3)), a);
}
function v(t, n) {
  let r = e(`effects-geometry`),
    i = {};
  ((i.add = new f(t, 1100, {
    additive: !0,
    renderOrder: 30,
    name: `sprites-additive`,
  })),
    (i.alp = new f(t, 800, {
      additive: !1,
      renderOrder: 20,
      name: `sprites-alpha`,
    })));
  let a = g(t, new t.IcosahedronGeometry(1, 2), 0.085, r),
    o = new t.MeshStandardMaterial({
      color: 16777215,
      roughness: 1,
      metalness: 0,
      transparent: !0,
      depthWrite: !1,
    });
  (m(o, { rim: 1.25 }),
    (i.smoke = new p(t, a, o, 900, {
      alpha: !0,
      renderOrder: 12,
      name: `smoke`,
      fadeInjected: !0,
    })),
    (i.debris = new p(
      t,
      g(t, new t.DodecahedronGeometry(1, 0), 0.22, r),
      new t.MeshStandardMaterial({
        color: 16777215,
        roughness: 0.92,
        metalness: 0,
        flatShading: !0,
      }),
      512,
      { shadow: !0, name: `debris` },
    )),
    (i.casings = new p(
      t,
      new t.CylinderGeometry(0.5, 0.5, 1, 6),
      new t.MeshStandardMaterial({
        color: 16777215,
        roughness: 0.4,
        metalness: 0.3,
        flatShading: !0,
      }),
      96,
      { name: `casings` },
    )));
  let s = new t.CircleGeometry(1, 12);
  {
    let e = s.attributes.position,
      n = new Float32Array(e.count);
    for (let t = 0; t < e.count; t++)
      if (Math.hypot(e.getX(t), e.getY(t)) > 0.5) {
        let i = r.range(0.82, 1);
        (e.setXY(t, e.getX(t) * i, e.getY(t) * i), (n[t] = 0));
      } else n[t] = 1;
    ((e.needsUpdate = !0),
      s.setAttribute(`aFade`, new t.BufferAttribute(n, 1)));
  }
  let c = new t.MeshStandardMaterial({
    color: 16777215,
    roughness: 1,
    metalness: 0,
    transparent: !0,
    depthWrite: !1,
    polygonOffset: !0,
    polygonOffsetFactor: -2,
    polygonOffsetUnits: -4,
  });
  (m(c, { fade: !0 }),
    (i.decals = new p(t, s, c, 512, {
      alpha: !0,
      renderOrder: 5,
      name: `decals`,
      fadeInjected: !0,
    })));
  let l = _(t, g(t, new t.IcosahedronGeometry(1, 2), 0.11, r), 0.78, 1, r),
    u = new t.MeshStandardMaterial({
      color: 2757896,
      vertexColors: !0,
      roughness: 1,
      metalness: 0,
      transparent: !0,
      depthWrite: !1,
    });
  (m(u, { rim: 1, emissive: 1.15 }),
    (i.fire = new p(t, l, u, 64, {
      alpha: !0,
      renderOrder: 14,
      name: `fireballs`,
      fadeInjected: !0,
    })),
    (i.lights = new h(t, n, 8)),
    (i.list = [i.add, i.alp, i.smoke, i.debris, i.casings, i.decals, i.fire]));
  for (let e of i.list) n.add(e.mesh);
  return (
    (i.tick = (e, t) => {
      for (let n of i.list) n.tick(e, t);
      i.lights.tick(e);
    }),
    (i.update = (e) => {
      for (let t of i.list) t.update(e);
    }),
    (i.total = () => i.list.reduce((e, t) => e + t.count, 0)),
    (i.dispose = () => {
      for (let e of i.list) (n.remove(e.mesh), e.dispose());
      for (let e of i.lights.lights) n.remove(e);
    }),
    i
  );
}
var y = 1 / 60;
