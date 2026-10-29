// assets__muzzle-flash-fx-BPzJrE2Y 03 — active
// Lines 785-1103 of readable/assets__muzzle-flash-fx-BPzJrE2Y.pretty.js (statement-aligned).
function d(e, t = {}) {
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
var f = class {
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
  spawn(e, t, n, r, i, o, s, c = 1) {
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
      (u.distance = o),
      (this.age[l] = 0),
      (this.life[l] = Math.max(s, a)),
      (this.i0[l] = i),
      (this.decay[l] = c),
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
function p(e, t, n, r) {
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
function m(e, t, n, r, i) {
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
function h(t, n) {
  let r = e(`effects-geometry`),
    i = {};
  ((i.add = new l(t, 1100, {
    additive: !0,
    renderOrder: 30,
    name: `sprites-additive`,
  })),
    (i.alp = new l(t, 800, {
      additive: !1,
      renderOrder: 20,
      name: `sprites-alpha`,
    })));
  let a = p(t, new t.IcosahedronGeometry(1, 2), 0.085, r),
    o = new t.MeshStandardMaterial({
      color: 16777215,
      roughness: 1,
      metalness: 0,
      transparent: !0,
      depthWrite: !1,
    });
  (d(o, { rim: 1.25 }),
    (i.smoke = new u(t, a, o, 900, {
      alpha: !0,
      renderOrder: 12,
      name: `smoke`,
      fadeInjected: !0,
    })),
    (i.debris = new u(
      t,
      p(t, new t.DodecahedronGeometry(1, 0), 0.22, r),
      new t.MeshStandardMaterial({
        color: 16777215,
        roughness: 0.92,
        metalness: 0,
        flatShading: !0,
      }),
      512,
      { shadow: !0, name: `debris` },
    )),
    (i.casings = new u(
      t,
      new t.CylinderGeometry(0.5, 0.5, 1, 6),
      new t.MeshStandardMaterial({
        color: 16777215,
        roughness: 0.4,
        metalness: 0.3,
        flatShading: !0,
      }),
      160,
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
  (d(c, { fade: !0 }),
    (i.decals = new u(t, s, c, 512, {
      alpha: !0,
      renderOrder: 5,
      name: `decals`,
      fadeInjected: !0,
    })));
  let h = m(t, p(t, new t.IcosahedronGeometry(1, 2), 0.11, r), 0.78, 1, r),
    g = new t.MeshStandardMaterial({
      color: 2757896,
      vertexColors: !0,
      roughness: 1,
      metalness: 0,
      transparent: !0,
      depthWrite: !1,
    });
  (d(g, { rim: 1, emissive: 1.15 }),
    (i.fire = new u(t, h, g, 64, {
      alpha: !0,
      renderOrder: 14,
      name: `fireballs`,
      fadeInjected: !0,
    })),
    (i.lights = new f(t, n, 8)),
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
var g = 1 / 60,
  _ = [0, 0, 0],
  v = {
    x: 0,
    y: 0,
    z: 0,
    vx: 0,
    vy: 0,
    vz: 0,
    ax: 0,
    ay: 0,
    az: 0,
    w0: 0.1,
    l0: 0.1,
    w1: 0.1,
    l1: 0.1,
    kind: 0,
    rot: 0,
    rotVel: 0,
    c0: null,
    c1: null,
    alpha: 1,
    life: 1,
    grav: 0,
    drag: 0,
    amode: 0,
    stretch: 0,
    bounce: 0,
    ramp: 1,
  };
function y(e, t, n) {
  return (
    (v.x = e),
    (v.y = t),
    (v.z = n),
    (v.vx = v.vy = v.vz = 0),
    (v.ax = v.ay = v.az = 0),
    (v.kind = 0),
    (v.rot = 0),
    (v.rotVel = 0),
    (v.alpha = 1),
    (v.grav = 0),
    (v.drag = 0),
    (v.amode = 0),
    (v.stretch = 0),
    (v.bounce = 0),
    (v.ramp = 1),
    v
  );
}
var b = (e, t, n, r, i) => {
    ((e.w0 = t), (e.l0 = n), (e.w1 = r), (e.l1 = i));
  },
  x = 0.05,
  S = Object.freeze({ scale: 1.4, ticks: 5, plume: 1.3, plumeAlpha: 0.65 });
