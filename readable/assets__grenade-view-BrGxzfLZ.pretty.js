/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  $t as e,
  B as t,
  Ct as n,
  E as r,
  F as i,
  Gn as a,
  Hn as o,
  I as s,
  K as c,
  L as l,
  Lt as u,
  Mn as d,
  Nn as f,
  P as p,
  Rn as m,
  Rt as h,
  U as g,
  Un as _,
  Ut as v,
  Z as y,
  an as b,
  at as x,
  dt as S,
  et as C,
  gn as w,
  lt as T,
  rt as E,
  ut as D,
  v as O,
  zn as k,
  zt as A,
} from "./graphics-quality-BsjABS0s.js";
import {
  _ as j,
  b as M,
  g as ee,
  h as N,
  v as P,
  y as F,
} from "./index-CBqjwezZ.js";
import {
  St as te,
  Tt as ne,
  lt as I,
  st as re,
  wt as L,
} from "./cube-soldier-BRpW8Tqo.js";
import { _ as R } from "./catalog-BxMwgLUT.js";
import {
  C as z,
  D as B,
  S as ie,
  T as ae,
  b as oe,
  c as V,
  d as se,
  f as H,
  g as ce,
  l as le,
  n as ue,
  p as de,
  s as fe,
  t as pe,
  u as me,
  x as U,
} from "./rifle-pose-CdM47EZt.js";
import { r as W, t as G } from "./grenade-sim-BPkr3Qs6.js";
import { r as he, t as ge } from "./car-kit-BmG7pAgW.js";
import { i as _e, n as ve, t as ye } from "./ground-textures-Bt7xe4qs.js";
import { b as be, h as xe, n as Se } from "./autumn-trees-B3HPNfpi.js";
import { t as Ce } from "./sky-TniNiCfE.js";
import { i as K } from "./input-glyphs-CoM_yJmy.js";
var we = 1.62,
  Te = new k(0, 1.28, -40),
  Ee = new k(0.42, 0.62, 0.66).normalize(),
  De = new g(0.72, 0.78, 0.84);
function Oe() {
  let n = new w(),
    r = new Set(),
    a = (e) => (r.add(e), e);
  ((n.background = De.clone()), (n.fog = new x(De.clone(), 90, 900)));
  let o = Ce(1500);
  (a(o.mesh.geometry),
    a(o.material),
    o.uniforms.uZenith.value.setRGB(0.16, 0.33, 0.66),
    o.uniforms.uHorizon.value.copy(De),
    o.uniforms.uHaze.value.setRGB(0.5, 0.52, 0.5),
    o.uniforms.uGroundDeep.value.setRGB(0.3, 0.32, 0.28),
    o.uniforms.uSunDir.value.copy(Ee),
    o.uniforms.uSunColor.value.setRGB(1, 0.93, 0.82),
    n.add(o.mesh),
    n.add(new S(12900592, 6182466, 1.35)));
  let d = new y(16773336, 3.1);
  (d.position
    .copy(Ee)
    .multiplyScalar(160)
    .add(new k(0, 0, -60)),
    d.target.position.set(0, 0, -60),
    (d.castShadow = !0),
    d.shadow.mapSize.set(2048, 2048),
    Object.assign(d.shadow.camera, {
      left: -70,
      right: 70,
      top: 90,
      bottom: -90,
      near: 10,
      far: 400,
    }),
    (d.shadow.bias = -4e-4),
    (d.shadow.normalBias = 0.03),
    n.add(d, d.target));
  let p = a(new v({ vertexColors: !0, roughness: 0.86, metalness: 0 })),
    m = a(new v({ vertexColors: !0, roughness: 0.12, metalness: 0.55 })),
    _ = a(new v({ vertexColors: !0, roughness: 0.5, metalness: 0.6 })),
    D = new Map([
      [p, []],
      [m, []],
      [_, []],
    ]),
    A = new g(),
    j = new u(),
    M = new b(),
    ee = new C(),
    N = new k();
  function P(e, t, n, r, i, a, o = 0, c = 0, l = 0) {
    let u = e.index ? e.toNonIndexed() : e;
    (u !== e && e.dispose(), u.deleteAttribute(`uv`), A.set(n));
    let d = u.attributes.position.count,
      f = new Float32Array(d * 3);
    for (let e = 0; e < d; e++) A.toArray(f, e * 3);
    (u.setAttribute(`color`, new s(f, 3)),
      u.applyMatrix4(
        j.compose(
          N.set(r, i, a),
          M.setFromEuler(ee.set(o, c, l)),
          new k(1, 1, 1),
        ),
      ),
      D.get(t).push(u));
  }
  let F = (e, t, n, r, a, o, s, c = p, l = 0, u = 0, d = 0) =>
      P(new i(e, t, n), c, r, a, o, s, l, u, d),
    R = (e, t, n, r, i, a, o, s = p, l = 0, u = 0, d = 0, f = 8) =>
      P(new c(e, t, n, f), s, r, i, a, o, l, u, d),
    z = (e, t, r, o, s, c = 0) => {
      let l = _e(new i(t, 0.1, r), ye[e].scale),
        u = new h(a(l), ve(e));
      return (
        u.position.set(o, c - 0.05, s),
        (u.receiveShadow = !0),
        n.add(u),
        u
      );
    };
  (z(`lawn`, 1400, 1400, 0, -300, -0.02),
    z(`asphalt`, 8.4, 520, 0, -248, 0.01));
  for (let e of [-1, 1])
    (z(`pavers`, 2.4, 520, e * 5.550000000000001, -248, 0.13),
      F(0.18, 0.16, 520, 10722964, e * 4.29, 0.08, -248));
  for (let e = 6; e > -508; e -= 9)
    F(0.14, 0.012, 4.5, 14275252, 0, 0.068, e - 2.25);
  let B = be(4242),
    ie = [
      14208440, 13219738, 12042436, 14867661, 11049087, 13616040, 10332058,
      14074024,
    ],
    ae = [4865850, 3882821, 5913136, 4540234];
  function oe(e, t, n, r, i, a) {
    let o = e * 12.1,
      s = o + (e * r) / 2,
      c = i * 3,
      u = ie[a % ie.length],
      d = ae[(a * 3) % ae.length],
      f = o + e * 0.02;
    (F(r, c, n, u, s, c / 2 + 0.3, t),
      F(r + 0.24, 0.32, n + 0.24, 7169886, s, 0.16, t));
    let h = 0.62,
      g = r / 2 + 0.35,
      v = g / Math.cos(h),
      y = (Math.tan(h) * r) / 2;
    for (let e of [-1, 1])
      F(
        v,
        0.16,
        n + 0.6,
        d,
        s + (e * g) / 2,
        c + 0.3 + y / 2 + 0.06,
        t,
        p,
        0,
        0,
        -e * h,
      );
    let b = new l().setFromPoints([
      new k(-r / 2, 0, 0),
      new k(r / 2, 0, 0),
      new k(0, y, 0),
    ]);
    b.computeVertexNormals();
    for (let e of [-1, 1]) {
      let r = b.clone();
      (e < 0 && r.rotateY(Math.PI), P(r, p, u, s, c + 0.3, t + (e * n) / 2));
    }
    (b.dispose(),
      F(0.3, 0.18, n + 0.64, 2893862, s, c + 0.3 + y + 0.12, t),
      F(
        0.7,
        1.8,
        0.7,
        8015420,
        s - e * r * 0.18,
        c + 0.3 + y * 0.7 + 0.6,
        t + n * 0.28,
      ),
      F(
        0.82,
        0.12,
        0.82,
        5920082,
        s - e * r * 0.18,
        c + 0.3 + y * 0.7 + 1.52,
        t + n * 0.28,
      ));
    let x = Math.max(2, Math.round(n / 3.2)),
      S = n / x;
    for (let r = 0; r < i; r++)
      for (let i = 0; i < x; i++) {
        let a = t - n / 2 + S * (i + 0.5),
          s = r * 3 + 0.3 + 1.65;
        if (r === 0 && i === Math.floor(x / 2)) {
          (F(0.08, 2.15, 1.05, 3877408, f, 1.38, a),
            F(0.1, 0.12, 1.25, 15262938, f, 2.5, a),
            F(0.9, 0.18, 1.4, 9209726, o + e * -0.45, 0.31, a));
          continue;
        }
        F(0.06, 1.35, 1.15, 1844267, f, s, a, m);
        for (let e of [-0.6, 0.6]) F(0.12, 1.47, 0.1, 15526110, f, s, a + e);
        for (let e of [-0.7, 0.7]) F(0.12, 0.1, 1.3, 15526110, f, s + e, a);
        (F(0.12, 1.35, 0.06, 15526110, f, s, a),
          F(0.3, 0.08, 1.36, 14209992, f - e * 0.12, s - 0.78, a));
      }
    F(0.14, 0.12, n + 0.6, 7040882, o + e * -0.3, c + 0.24, t, _);
  }
  for (let e of [-1, 1]) {
    let t = -8 - B() * 4,
      n = e > 0 ? 3 : 0;
    for (; t > -330;) {
      let r = 9 + B() * 4,
        i = 8 + B() * 3;
      (oe(e, t - r / 2, r, i, B() < 0.55 ? 2 : 1, n++), (t -= r + 6 + B() * 6));
    }
  }
  let V = [];
  for (let e = -6; e > -330; e -= 34) V.push(e);
  for (let e of V) {
    let t = -6.25;
    (R(0.13, 0.16, 9, 5981748, t, 4.5, e),
      F(0.12, 0.14, 2.2, 5061420, t, 8.4, e, p, 0, Math.PI / 2));
    for (let n of [-0.9, 0, 0.9]) R(0.05, 0.05, 0.16, 14144712, t + n, 8.55, e);
  }
  let se = a(new v({ color: 1908513, roughness: 0.6 }));
  for (let e = 0; e + 1 < V.length; e++)
    for (let r of [-0.9, 0, 0.9]) {
      let i = -6.25 + r,
        o = [];
      for (let t = 0; t <= 12; t++) {
        let n = t / 12;
        o.push(
          new k(
            i,
            8.62 - Math.sin(Math.PI * n) * 0.75,
            V[e] + (V[e + 1] - V[e]) * n,
          ),
        );
      }
      n.add(new h(a(new f(new t(o), 12, 0.012, 3)), se));
    }
  for (let e = -6; e > -330; e -= 2.4) {
    let t = 7.8;
    (F(0.08, 0.9, 0.08, 15131350, t, 0.45, e),
      e > -328 && F(0.04, 0.08, 2.4, 15131350, t, 0.75, e - 1.2));
  }
  for (let [e, t] of D) {
    let r = a(O(t, !1));
    t.forEach((e) => e.dispose());
    let i = new h(r, e);
    ((i.castShadow = i.receiveShadow = !0), n.add(i));
  }
  let H = new l(),
    ce = [],
    le = [],
    ue = be(9);
  for (let e = 0; e < 64; e++) {
    let t = (e / 64) * Math.PI * 2,
      n = ((e + 1) / 64) * Math.PI * 2,
      r = 30 + 60 * ue(),
      i = (e) => [Math.sin(e) * 620, 0, -Math.cos(e) * 620 - 200],
      a = [
        Math.sin((t + n) / 2) * 620 * 0.97,
        r,
        -Math.cos((t + n) / 2) * 620 * 0.97 - 200,
      ];
    (ce.push(...i(t), ...a, ...i(n)),
      le.push(0.27, 0.33, 0.22, 0.34, 0.4, 0.27, 0.27, 0.33, 0.22));
  }
  (H.setAttribute(`position`, new E(ce, 3)),
    H.setAttribute(`color`, new E(le, 3)),
    H.computeVertexNormals(),
    n.add(new h(a(H), a(new v({ vertexColors: !0, roughness: 1, side: 2 })))));
  let de = a(
      new v({
        map: xe(),
        vertexColors: !0,
        alphaTest: 0.5,
        side: 2,
        roughness: 0.8,
      }),
    ),
    fe = a(new v({ vertexColors: !0, roughness: 0.9 })),
    pe = [`maple`, `linden`, `beech`, `birch`, `spruce`].map((e, t) => {
      let n = Se.find((t) => t.key === e).build(11 + t, t === 0 ? 0 : 1);
      return (a(n.wood), n.leaves && a(n.leaves), n);
    }),
    me = (e, t, r, i = 1, a = 0) => {
      let o = pe[e],
        s = new T();
      (s.position.set(t, 0, r), (s.rotation.y = a), s.scale.setScalar(i));
      for (let [e, t] of [
        [o.wood, fe],
        [o.leaves, de],
      ])
        if (e) {
          let n = new h(e, t);
          ((n.castShadow = n.receiveShadow = !0), s.add(n));
        }
      n.add(s);
    };
  for (let e of [-1, 1])
    for (let t = -14 - B() * 6; t > -320; t -= 16 + B() * 10)
      me(Math.floor(B() * 3), e * 9.2, t, 0.9 + B() * 0.3, B() * 6);
  for (let e = 0; e < 70; e++) {
    let e = B() < 0.5 ? -1 : 1;
    me(
      Math.floor(B() * 5),
      e * (34 + B() * 60),
      -20 - B() * 360,
      0.9 + B() * 0.6,
      B() * 6,
    );
  }
  let U = ge.find((e) => e.key === `sedan`) ?? ge[0],
    W = ge.filter((e) => e !== U);
  for (let [e, t, r, i, a] of [
    [U, 3821432, -3.1500000000000004, -24, 0],
    [W[0] ?? U, 14080218, 3.1500000000000004, -52, Math.PI],
    [W[1] ?? U, 9316906, -3.1500000000000004, -96, 0],
    [W[2] ?? U, 3421754, 3.1500000000000004, -140, Math.PI],
  ]) {
    let o = he(e, t);
    (o.position.set(r, 0, i),
      (o.rotation.y = a),
      o.traverse((e) => {
        e.isMesh && (e.castShadow = e.receiveShadow = !0);
      }),
      n.add(o));
  }
  let G = L(n, 6);
  G.group.traverse((e) => {
    e.isMesh &&
      ((e.castShadow = !0), (e.receiveShadow = !0), (e.frustumCulled = !1));
  });
  let K = ne(),
    Oe = I(),
    q = new g(9316906),
    J = [
      [0, -40, 0.2, 1.8, 0],
      [-5.3, -21.5, -0.35, 1.3, 1],
      [5.6, -68, 0.5, 1.8, 1],
      [-2.2, -118, -0.2, 1.8, 1],
      [7.4, -190, 0.7, 1.8, 0],
    ];
  (G.setCount(J.length),
    J.forEach(([e, t, n, r, i], a) => {
      (G.setIdentity(a, 3 + a * 7),
        G.setFaction(a, 1),
        G.setColor(a, q),
        re(
          {
            h: r,
            lean: 0,
            hspeed: 0,
            moveF: 0,
            moveR: 0,
            phase: 0,
            sprintW: 0,
            aimW: i,
            pitch: 0,
            grounded: !0,
            swim: !1,
            airT: 0,
            fireT: 99,
            reloadT: 99,
            hitT: 99,
            landT: 99,
            deadT: -1,
            deadDir: 0,
            breathe: 0,
          },
          Oe,
        ),
        K.root.position.set(e, 0, t),
        K.root.rotation.set(0, Math.PI + n, 0),
        te(
          K,
          Oe,
          G,
          a,
          `none`,
          0,
          null,
          [`assault`, `support`, `assault`, `sniper`, `engineer`][a],
        ));
    }),
    G.flush());
  let Y = new e(55, 1, 0.2, 2e3);
  return (
    Y.position.set(0, we, 0),
    Y.lookAt(Te),
    n.add(Y),
    {
      world: n,
      camera: Y,
      dispose() {
        (G.dispose?.(), r.forEach((e) => e.dispose()));
      },
    }
  );
}
var q = (e) =>
  e.id + JSON.stringify(e.attachments) + (e.camo ?? ``) + JSON.stringify(R());
function J(e, t, { reticle: n = !1 } = {}) {
  let r = new T(),
    i = (e) => new v({ color: e, roughness: 0.55, metalness: 0.35 }),
    a = {
      dark: i(3160384),
      steel: i(7832972),
      glass: new A({ color: 10079470, transparent: !0, opacity: 0.25 }),
      red: new A({ color: 16737616 }),
      amber: i(16759654),
      reticleEdge: i(1382685),
      disposables: [],
    };
  n && (a.reticle = se({ depthTest: !0 }));
  let o = () => {
    r.removeFromParent();
    let e = new Set();
    (r.traverse((t) => {
      t.geometry && e.add(t.geometry);
    }),
      e.forEach((e) => e.dispose()),
      new Set([
        ...Object.values(a).filter((e) => e?.isMaterial),
        ...a.disposables,
      ]).forEach((e) => e.dispose()),
      a.reticle?.dispose());
  };
  try {
    let n = t?.[e.id] ? ae(r, e, a, t) : fe(r, e, a),
      i = me(r, de(e).optic, n, a),
      s = le(r, e, n, a);
    return (
      V(r, e, n, a),
      { group: r, body: n, muzzle: s, sight: i, dispose: o }
    );
  } catch (e) {
    throw (o(), e);
  }
}
function Y(t) {
  let n = B(t.assets),
    i = n.scenes,
    a,
    s,
    c = !1,
    l = null,
    d = ``,
    f = new WeakMap(),
    h = new w();
  h.add(new S(14478591, 6445896, 3));
  for (let [e, t, n] of [
    [16777215, 4, [2, 4, 3]],
    [11390975, 3, [-3, 2, -2]],
  ]) {
    let r = new y(e, t);
    (r.position.fromArray(n), h.add(r));
  }
  let _ = new e(32, 1, 0.01, 100),
    v = () =>
      !c &&
      (a ||
        ((a = new r({ alpha: !0, antialias: !0 })),
        a.setPixelRatio(1),
        (a.toneMapping = 4),
        (a.toneMappingExposure = 1.15)),
      !0),
    b = async (e) => (await n.ensure(e.id, { priority: `visible` }), v()),
    x = async (e, t) => {
      let n = (f.get(e) ?? 0) + 1;
      return (f.set(e, n), (await b(t)) && !c && f.get(e) === n);
    };
  function C(e, t, n, r = !1, i = null, o = {}) {
    let s = Math.min(devicePixelRatio, 1.5),
      c = Math.max(1, Math.round(e.clientWidth * s)),
      l = Math.max(1, Math.round(e.clientHeight * s));
    (a.setSize(c, l, !1), (_.aspect = c / l), h.updateMatrixWorld(!0));
    let u =
        i ??
        (r
          ? new p(new k(-0.5, 0, -0.35), new k(0.5, 1.9, 0.35))
          : new p().setFromObject(t)),
      d = u.getCenter(new k()),
      f = u.getSize(new k());
    o.center && d.copy(o.center);
    let m = Math.max(1, Math.min(8, o.zoom ?? 1));
    ((d.x += ((o.panX ?? 0) * f.x) / m), (d.y += ((o.panY ?? 0) * f.x) / m));
    let g =
      (Math.max(f.y, f.x / _.aspect, f.z / _.aspect) *
        (o.frame ?? (r ? 0.65 : 0.75))) /
      Math.tan((_.fov * Math.PI) / 360) /
      m;
    (_.position.copy(d).addScaledVector(new k(...n).normalize(), g),
      _.lookAt(d),
      _.updateProjectionMatrix(),
      a.render(h, _),
      (e.width = c),
      (e.height = l),
      e.getContext(`2d`).drawImage(a.domElement, 0, 0),
      (e.dataset.ready = `true`));
  }
  let E = (e) => J(e, i),
    O = null,
    A = ``;
  function R() {
    let e = Oe(),
      { camera: t } = e,
      n = H(t, { bodies: i, renderer: a }),
      r = new P(a, new o(1, 1, { type: D, samples: 4 }));
    r.addPass(new j(e.world, t));
    let s = new M();
    return (
      (s.needsSwap = !1),
      (s.render = (e, n, r) => {
        let i = t.userData.viewmodelStage;
        if (!i) return;
        (i.sync(), e.setRenderTarget(r));
        let a = e.autoClear;
        e.autoClear = !1;
        try {
          (e.clearDepth(), e.render(i.scene, t));
        } finally {
          e.autoClear = a;
        }
      }),
      r.addPass(s),
      r.addPass(
        new F({
          uniforms: { tDiffuse: { value: null } },
          vertexShader: `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
          fragmentShader: `uniform sampler2D tDiffuse; varying vec2 vUv; void main() { vec4 c = texture2D(tDiffuse, vUv); if (any(isnan(c)) || any(isinf(c))) c = vec4(0.0, 0.0, 0.0, 1.0); gl_FragColor = vec4(min(c.rgb, vec3(256.0)), c.a); }`,
        }),
      ),
      r.addPass(new ee(new m(256, 256), 0.42, 0.3, 1.05)),
      r.addPass(new N()),
      {
        camera: t,
        vm: n,
        composer: r,
        dispose() {
          n.dispose?.();
          for (let e of r.passes) e.dispose?.();
          (r.dispose(), e.dispose());
        },
      }
    );
  }
  return {
    async weapon(
      e,
      t,
      {
        yaw: n = 0,
        pitch: r = 0,
        zoom: a = 1,
        focus: o = null,
        panX: c = 0,
        panY: u = 0,
        sightView: f = !1,
        frame: m,
      } = {},
    ) {
      if (!(await x(e, t))) return;
      let g = q(t);
      if (g !== d) {
        (l?.dispose(), (l = J(t, i, { reticle: !0 })), (d = g));
        let e = l.group,
          n = new T(),
          r = new p().setFromObject(e).getCenter(new k());
        (e.position.sub(r),
          n.add(e),
          (n.rotation.y = -Math.PI / 2),
          (l.pivot = n),
          (l.bounds = new p().setFromObject(n)));
      }
      let { pivot: v, group: y, body: b, muzzle: S, bounds: w, sight: E } = l;
      (v.rotation.set(r, -Math.PI / 2 + n, 0),
        h.add(v),
        s && (s.group.visible = !1));
      let D = {
        optic: E.aim.toArray(),
        muzzle: [0, 0.012, S],
        grip: [
          0,
          b.mounts?.under?.y ?? b.gripY ?? -0.08,
          b.mounts?.under?.z ?? b.gripZ ?? b.sightZ,
        ],
      };
      h.updateMatrixWorld(!0);
      let O = o && D[o] ? y.localToWorld(new k(...D[o])) : null;
      C(e, v, f ? [0, 0, 1] : [0.08, 0.24, 1], !1, w, {
        center: O,
        zoom: a,
        panX: c,
        panY: u,
        frame: m,
      });
      for (let e of Object.keys(D)) {
        let t = y.localToWorld(new k(...D[e])).project(_);
        D[e] = [(t.x + 1) / 2, (1 - t.y) / 2];
      }
      return (h.remove(v), D);
    },
    async aim(e, t) {
      if (!(await x(e, t))) return;
      O ??= R();
      let { camera: n, vm: r, composer: i } = O,
        o = q(t),
        s = { buttons: 2 };
      o !== A && (r.setWeapon(t), r.setLoaded(!0), r.setVisible(!0), (A = o));
      let c = Math.min(devicePixelRatio, 1.5),
        l = Math.max(1, Math.round(e.clientWidth * c)),
        u = Math.max(1, Math.round(e.clientHeight * c));
      (a.setSize(l, u, !1),
        i.setPixelRatio(1),
        i.setSize(l, u),
        (n.aspect = l / u),
        n.position.set(0, we, 0),
        n.lookAt(Te));
      let d = r.optic?.type,
        f = d === `scope` ? 1 : d === `prism` ? 1.4 : 2.4,
        p = Math.round(u * f),
        m = Math.round(l * f);
      n.setViewOffset(m, p, (m - l) / 2, (p - u) / 2, l, u);
      for (let e = 0; e < 90; e++)
        (r.tickAim(1 / 60, s),
          r.update(1 / 60, s, 0),
          (n.fov = r.optic ? 55 + (r.opticFov - 55) * r.ads : 55),
          n.updateProjectionMatrix(),
          r.setCameraFov(n.fov, p),
          r.setVisible(!0));
      n.updateMatrixWorld(!0);
      let h = a.toneMappingExposure,
        g = a.shadowMap.enabled;
      ((a.toneMappingExposure = 1),
        (a.shadowMap.enabled = !0),
        (a.shadowMap.type = 2),
        (a.shadowMap.needsUpdate = !0));
      try {
        i.render();
      } finally {
        ((a.toneMappingExposure = h), (a.shadowMap.enabled = g));
      }
      ((e.width = l),
        (e.height = u),
        e.getContext(`2d`).drawImage(a.domElement, 0, 0),
        (e.dataset.ready = `true`));
    },
    async railSpan(e) {
      if (!(await b(e))) return null;
      let t = de(e).optic,
        n = null;
      if (
        (i?.[e.id]?.traverse((e) => {
          e.userData.metrics && (n = JSON.parse(e.userData.metrics));
        }),
        !t?.kit || !n)
      )
        return null;
      let r = ce(n, t.kit);
      return [r.lo - r.home, r.hi - r.home];
    },
    async thumb(e, t, { exact: n = !1 } = {}) {
      if (n ? !(await x(e, t)) : !v()) return;
      let r = E(t),
        i = new T(),
        a = new p().setFromObject(r.group).getCenter(new k());
      (r.group.position.sub(a),
        i.add(r.group),
        i.rotation.set(0, -Math.PI / 2, 0),
        h.add(i),
        s && (s.group.visible = !1));
      try {
        C(e, i, [0, 0.06, 1], !1, new p().setFromObject(i), { zoom: 1.3 });
      } finally {
        (h.remove(i), r.dispose());
      }
    },
    async soldier(e, t, n, r) {
      if (!(await x(e, r))) return;
      ((s ||= L(h, 1)),
        (s.group.visible = !0),
        s.setCount(1),
        s.setIdentity(0, 1),
        s.setColor(0, new g(n)));
      let i = new g(n);
      s.setFaction(0, +(i.b > i.r || i.g < i.r * 0.3));
      let a = ne(),
        o = I();
      re(
        {
          h: 1.8,
          lean: 0,
          hspeed: 0,
          moveF: 0,
          moveR: 0,
          phase: 0,
          sprintW: 0,
          aimW: 0,
          pitch: 0,
          grounded: !0,
          swim: !1,
          airT: 0,
          fireT: 99,
          reloadT: 99,
          hitT: 99,
          landT: 99,
          deadT: -1,
          deadDir: 0,
          breathe: 0,
        },
        o,
      );
      let c;
      try {
        r && (c = E(r));
        let n = c?.body,
          i =
            n?.grip && n?.support
              ? {
                  ...n,
                  magazineHome: n.magazine.position.toArray(),
                  magazineRotation: n.magazine.rotation.toArray().slice(0, 3),
                }
              : null;
        (te(a, o, s, 0, `none`, -1, i ? (e) => ue(e, i) : null, t),
          s.flush(),
          c &&
            ((c.group.matrixAutoUpdate = !1),
            c.group.matrix
              .copy(a.weapon.matrixWorld)
              .multiply(new u().makeTranslation(...pe.toArray())),
            h.add(c.group)),
          C(e, s.group, [0.35, 0.04, -1], !0));
      } finally {
        (c?.dispose(), (s.group.visible = !1));
      }
    },
    dispose() {
      ((c = !0),
        l?.dispose(),
        O?.dispose(),
        s?.dispose(),
        a?.dispose(),
        a?.forceContextLoss());
    },
  };
}
var ke = 16;
function Ae() {
  let e = [
      [0.004, -0.046],
      [0.017, -0.043],
      [0.026, -0.035],
      [0.03, -0.024],
      [0.031, -0.012],
      [0.031, 0],
      [0.031, 0.012],
      [0.03, 0.022],
      [0.027, 0.031],
      [0.021, 0.038],
      [0.013, 0.042],
      [0.011, 0.043],
    ].map(([e, t]) => new m(e, t)),
    t = new n(e, ke),
    r = t.attributes.position,
    i = e.length;
  for (let e = 0; e < r.count; e++) {
    let t = Math.floor(e / i) % ke,
      n = e % i;
    if (n < 2 || n > i - 3) continue;
    let a = t % 2 == 1 || (n % 2 == 0 && n > 1 && n < 11) ? 0.86 : 1;
    (r.setX(e, r.getX(e) * a), r.setZ(e, r.getZ(e) * a));
  }
  return (t.computeVertexNormals(), t);
}
function X(e, t, n, r, a, o, s = 0, c = 0) {
  let l = new i(e, t, n);
  return (s && l.rotateX(s), c && l.rotateZ(c), l.translate(r, a, o), l);
}
function je() {
  let e = [
      new c(0.012, 0.013, 0.012, 8).translate(0, 0.048, 0),
      X(0.026, 0.016, 0.02, 0.002, 0.06, 0),
      new c(0.0045, 0.0045, 0.024, 6)
        .rotateX(Math.PI / 2)
        .translate(-0.004, 0.061, 0),
    ],
    t = O(e);
  return (e.forEach((e) => e.dispose()), t);
}
function Me() {
  let e = [
      X(0.03, 0.004, 0.016, 0.012, 0.07, 0),
      X(0.004, 0.018, 0.016, 0.028, 0.062, 0),
      X(0.004, 0.07, 0.014, 0.033, 0.02, 0, 0, -0.12),
    ],
    t = O(e);
  return (e.forEach((e) => e.dispose()), t);
}
function Ne() {
  let e = [
      new d(0.013, 0.0022, 5, 14)
        .rotateY(Math.PI / 2)
        .translate(-0.026, 0.058, 0),
      new c(0.0016, 0.0016, 0.03, 5)
        .rotateZ(Math.PI / 2)
        .translate(-0.009, 0.06, 0),
    ],
    t = O(e);
  return (e.forEach((e) => e.dispose()), t);
}
function Pe() {
  let e = { body: Ae(), fuse: je(), spoon: Me(), ring: Ne() },
    t = {
      body: new v({
        color: 5200430,
        roughness: 0.78,
        metalness: 0.15,
        flatShading: !0,
      }),
      metal: new v({ color: 9145474, roughness: 0.42, metalness: 0.75 }),
      ring: new v({ color: 12757082, roughness: 0.35, metalness: 0.85 }),
    };
  function n({ spoon: n = !0, ring: r = !0 } = {}) {
    let i = new T();
    i.name = `frag_grenade`;
    let a = (e, t, n) => {
      let r = new h(e, t);
      return ((r.name = n), i.add(r), r);
    };
    return (
      a(e.body, t.body, `frag_body`),
      a(e.fuse, t.metal, `frag_fuse`),
      n && a(e.spoon, t.metal, `frag_spoon`),
      r && a(e.ring, t.ring, `frag_ring`),
      i
    );
  }
  return {
    geometry: e,
    material: t,
    build: n,
    ring: () => {
      let n = new h(e.ring, t.ring);
      return ((n.name = `frag_pull_ring`), n);
    },
    spoon: () => {
      let n = new h(e.spoon, t.metal);
      return ((n.name = `frag_loose_spoon`), n);
    },
    dispose() {
      for (let t of Object.values(e)) t.dispose();
      for (let e of Object.values(t)) e.dispose();
    },
  };
}
var Fe = G.throwTicks / 60,
  Ie = G.pickupTicks / 60,
  Le = 0.085,
  Z = Le + G.recoverTicks / 60 + 0.02,
  Q = (e) => ((e = Math.max(0, Math.min(1, e))), e * e * (3 - 2 * e)),
  Re = [
    [0, 0.3, -0.5, -0.3],
    [0.3, 0.11, -0.19, -0.38],
    [0.62, 0.09, -0.17, -0.37],
    [1, 0.27, 0.01, -0.29],
  ],
  ze = [
    [0, -0.3, -0.5, -0.3],
    [0.3, -0.03, -0.19, -0.38],
    [0.48, -0.02, -0.18, -0.37],
    [0.78, -0.21, -0.23, -0.4],
    [1, -0.15, -0.12, -0.52],
  ],
  Be = [
    [0, 0.26, -0.5, -0.3],
    [0.42, 0.05, -0.4, -0.48],
    [0.55, 0.05, -0.37, -0.46],
    [1, 0.27, 0.01, -0.29],
  ],
  Ve = [
    [0, -0.3, -0.5, -0.3],
    [0.5, -0.24, -0.34, -0.42],
    [1, -0.15, -0.12, -0.52],
  ],
  He = [
    [0, 0.27, 0.01, -0.29],
    [0.045, 0.21, 0.07, -0.36],
    [Le, 0.06, 0.01, -0.56],
    [0.16, -0.1, -0.21, -0.5],
    [0.25, -0.04, -0.56, -0.36],
    [Z, 0.3, -0.85, -0.3],
  ],
  Ue = [
    [0, -0.15, -0.12, -0.52],
    [Le, -0.23, -0.21, -0.32],
    [0.2, -0.32, -0.62, -0.3],
    [Z, -0.32, -0.85, -0.3],
  ];
function We(e, t, n) {
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
function Ge(e, t, n, r, i) {
  let a = n ? Ie : Fe;
  if (t < 0) {
    let t = Math.max(0, Math.min(1, e / a));
    (We(n ? Be : Re, t, i.right), We(n ? Ve : ze, t, i.left));
    let o = t >= 1 ? Math.min(1, r / 1.5) : 0;
    ((i.right.x += Math.sin(r * 23) * 0.0022 * o),
      (i.right.y +=
        Math.sin(r * 3.1) * 0.004 * (t >= 1) + Math.sin(r * 31) * 0.0018 * o),
      (i.held = !n || t > 0.45),
      (i.ring = !n && t > 0.44),
      (i.pinned = !n && t <= 0.44),
      (i.lower = Q(e / 0.09)));
    let s = Q((t - 0.62) / 0.38);
    ((i.roll = -0.018 * s), (i.pitch = 0.012 * s));
  } else {
    (We(He, t, i.right),
      We(Ue, t, i.left),
      (i.held = t < Le),
      (i.ring = !n && t < 0.2),
      (i.pinned = !1),
      (i.lower = 1 - Q((t - 0.24) / (Z - 0.26))));
    let e = Math.sin(Math.PI * Math.min(1, t / 0.22));
    ((i.roll = -0.018 * (1 - Q(t / 0.06)) + 0.034 * e),
      (i.pitch = 0.012 * (1 - Q(t / 0.06)) - 0.02 * e));
  }
  return i;
}
var $ = oe.upper,
  Ke = U;
function qe(e, t) {
  let n = new T();
  ((n.name = `grenade_throw_hands`), (n.visible = !1), e.add(n));
  let r = ie(),
    i = r.material(),
    a = { skin: i },
    o = { fist: r.fist().translate(0, 0.036, 0) };
  function s(e) {
    let t = z(n, e > 0 ? `right` : `left`),
      r = new T(),
      a = new h(o.fist, i);
    return (
      (a.frustumCulled = !1),
      (a.renderOrder = 20),
      r.add(a),
      n.add(r),
      {
        side: e,
        sleeve: t,
        hand: r,
        shoulder: new k(0.27 * e, -0.4, 0.05),
        pole: new k(e * 0.9, -1, 0.25).normalize(),
        back: new k(e * 0.55, 0.35, 0.75).normalize(),
      }
    );
  }
  let c = s(1),
    l = s(-1),
    d = t.build({ spoon: !0, ring: !0 });
  ((d.name = `held_frag`),
    d.position.set(0, 0.082, -0.045),
    d.rotation.set(-0.35, 0, 0.15),
    c.hand.add(d));
  let f = d.getObjectByName(`frag_ring`),
    p = t.ring();
  (p.position.set(0, 0.078, -0.03),
    p.rotation.set(0.3, 0, 0),
    l.hand.add(p),
    n.traverse((e) => {
      e.isMesh &&
        ((e.frustumCulled = !1), (e.renderOrder = 20), (e.castShadow = !1));
    }));
  let m = new k(),
    g = new k(),
    _ = new k(),
    v = new k(),
    y = new k(),
    b = new k(),
    x = new u();
  function S(e, t) {
    m.subVectors(t, e.shoulder);
    let n = Math.min(
      $ + Ke - 0.002,
      Math.max(Math.abs($ - Ke) + 0.01, m.length()),
    );
    m.normalize();
    let r = ($ * $ - Ke * Ke + n * n) / (2 * n),
      i = Math.sqrt(Math.max(0, $ * $ - r * r));
    (g.copy(e.pole).addScaledVector(m, -e.pole.dot(m)).normalize(),
      _.copy(e.shoulder).addScaledVector(m, r).addScaledVector(g, i));
    let a = b.copy(e.shoulder).addScaledVector(m, n);
    e.sleeve.pose(e.shoulder, _, a);
    let o = m.subVectors(a, _).normalize();
    (y.copy(e.back).addScaledVector(o, -e.back.dot(o)).normalize(),
      v.crossVectors(o, y),
      x.makeBasis(v, o, y),
      e.hand.quaternion.setFromRotationMatrix(x),
      e.hand.position.copy(a));
  }
  let C = {
    right: new k(),
    left: new k(),
    held: !1,
    ring: !1,
    pinned: !1,
    lower: 0,
    roll: 0,
    pitch: 0,
  };
  return {
    root: n,
    prop: d,
    pose: C,
    update(e, t, r, i, a) {
      return (
        (n.visible = a && e >= 0 && t < Z),
        n.visible
          ? (Ge(e, t, r, i, C),
            S(c, C.right),
            S(l, C.left),
            (d.visible = C.held),
            (f.visible = C.pinned),
            (p.visible = C.ring),
            n.updateMatrixWorld(!0),
            C)
          : null
      );
    },
    dispose() {
      e.remove(n);
      for (let e of Object.values(o)) e.dispose();
      for (let e of Object.values(a)) e.dispose();
    },
  };
}
var Je = {
    shell: `explosion_shell`,
    cannon: `explosion_cannon`,
    rocket: `explosion_rocket`,
    grenade: `explosion_grenade`,
    claymore: `explosion_claymore`,
    c4: `explosion_c4`,
    wreck: `explosion_wreck`,
  },
  Ye = (e) =>
    Je[e.kind] ??
    (e.scale >= 1.3
      ? `explosion_large`
      : e.scale <= 0.7
        ? `explosion_small`
        : `explosion`),
  Xe = 1.35;
function Ze(e, t = {}) {
  let n = Pe(),
    r = qe(e.camera, n),
    i = new Map(),
    o = [],
    s = () => e.modules.get(`audio`),
    c = () => e.modules.get(`player`)?.getLocalEntity?.(),
    l = -1,
    u = -1,
    d = 0,
    f = !1,
    p = !1,
    m = !1,
    h = 0,
    g = null,
    v = null,
    y = 2,
    x = null,
    S = null,
    w = -1 / 0,
    T = !1,
    E = 0,
    D = () => {
      ((l = u = -1),
        (d = 0),
        (v = null),
        (p = !1),
        (m = !1),
        (g = null),
        r.update(-1, -1, !1, 0, !1));
    },
    O = n.spoon(),
    A = new k(),
    j = new k(),
    M = 0;
  ((O.visible = !1), O.scale.setScalar(1.2), e.scene.add(O));
  let ee = new k(),
    N = new b(),
    P = new C(),
    F = !1,
    te = 0;
  function ne() {
    (r.prop.getWorldPosition(O.position),
      r.prop.getWorldQuaternion(O.quaternion),
      A.set(2.2, 2.6, -0.6).applyQuaternion(e.camera.quaternion),
      j.set(14, 3, 22),
      (M = 1.4),
      (O.visible = !0),
      s()?.play(`grenade_spoon`, { pos: O.position.toArray(), volume: 0.75 }));
  }
  let I = (t, n = `info`, r = 2) =>
    e.events.emit(`ui:message`, { kind: n, text: t, ttl: r });
  (o.push(
    e.events.on(`grenade:status`, (e) => {
      if (!e || !Number.isInteger(e.remaining)) return;
      let t = c();
      if (
        !(t && e.entityId !== t.id) &&
        !(S === e.entityId && x != null && e.life < x)
      ) {
        if (
          ((x = e.life),
          (S = e.entityId),
          (y = e.remaining),
          e.reason === `spawned`)
        ) {
          D();
          return;
        }
        if (e.reason === `windup` || e.reason === `pickup`) {
          if (
            ((m = !0),
            Number.isFinite(e.fuse) && (v = e.fuse),
            e.reason === `pickup` &&
              !f &&
              l >= 0 &&
              ((f = !0), (l = Math.min(l, Ie * 0.3))),
            e.reason === `windup` && f && (f = !1),
            l < 0)
          )
            return;
          e.reason === `pickup` && I(`THROWING IT BACK`, `warn`, 1.4);
          return;
        }
        if (e.reason === `thrown`) {
          l >= 0 && u < 0 && ((u = 0), (d = 0));
          return;
        }
        e.reason !== `restocked` &&
          (D(),
          e.reason === `empty`
            ? (I(`NO GRENADES LEFT`), s()?.play(`ui_error`, { volume: 0.5 }))
            : e.reason === `cancelled`
              ? I(`THROW CANCELLED`)
              : e.reason === `busy` && I(`GRENADE TEMPORARILY UNAVAILABLE`));
      }
    }),
  ),
    o.push(
      e.events.on(`player:local`, () => {
        if ((D(), (y = 2), !F && ++te >= 2)) {
          F = !0;
          {
            let e = K(`grenade`, `G`);
            I(
              `${e} · FRAG — HOLD ${e} TO COOK · ${e} NEXT TO A LIVE GRENADE THROWS IT BACK`,
              `hint`,
              6,
            );
          }
        }
      }),
    ),
    o.push(
      e.events.on(`explosion`, (e) => {
        e?.projectileId != null &&
          e.pos &&
          s()?.play(Ye(e), { pos: e.pos, volume: 0.85 });
      }),
    ));
  let re = (t) => {
    let n = e.world.get(t);
    return n && n.id !== c()?.id ? [n.pos[0], n.pos[1] + 1.4, n.pos[2]] : null;
  };
  (o.push(
    e.events.on(`grenade:windup`, (e) => {
      let t = re(e?.entityId);
      t && !e.returned && s()?.play(`grenade_pin`, { pos: t, volume: 0.8 });
    }),
  ),
    o.push(
      e.events.on(`grenade:release`, (e) => {
        let t = re(e?.entityId);
        t && s()?.play(`grenade_spoon`, { pos: t, volume: 0.7 });
      }),
    ));
  function L(t = c()) {
    if (!t || t.hp <= 0 || t.state & (a.DEAD | a.IN_VEHICLE)) return null;
    let n = null,
      r = 1 / 0;
    for (let i of e.world.byType?.(`projectile`) ?? e.world.sorted()) {
      if (i.type !== `projectile` || i.weapon !== G.id || !W(e.world, t, i))
        continue;
      let a = Math.hypot(i.pos[0] - t.pos[0], i.pos[2] - t.pos[2]);
      a < r && ((n = i), (r = a));
    }
    return n;
  }
  function R() {
    if (e.modules.get(`weapons`)?.isThermalBusy?.()) return !1;
    let n = c();
    if (
      !n ||
      n.hp <= 0 ||
      n.state & (a.DEAD | a.IN_VEHICLE) ||
      e.config.showcase
    )
      return !1;
    let r = e.world.time.sim;
    if (l >= 0 || r - w < 0.4) return !1;
    let i = L(n);
    return !i && y <= 0
      ? (I(`NO GRENADES LEFT`),
        s()?.play(`ui_error`, { volume: 0.5 }),
        (w = r),
        !1)
      : x == null ||
          S !== n.id ||
          !(
            e.modules.get(`netcode`)?.sendRpc?.(`grenade:throw`, {
              entityId: n.id,
              life: x,
              id: ++E,
            }) >= 0
          )
        ? !1
        : (t.interruptReload?.(),
          (w = r),
          (l = 0),
          (u = -1),
          (d = 0),
          (p = !1),
          (m = !1),
          (h = 0),
          (g = n.id),
          (f = !!i),
          (v = f ? null : G.fuseTicks / 60),
          (T = !1),
          f || s()?.play(`grenade_pin`, { volume: 0.9 }),
          !0);
  }
  function z() {
    let t = c();
    return l < 0 || p || !t || t.id !== g
      ? !1
      : ((p = !0),
        e.modules
          .get(`netcode`)
          ?.sendRpc?.(`grenade:release`, { entityId: t.id, life: x, id: E }),
        !0);
  }
  let B = new Map();
  return {
    requestThrow: R,
    releaseThrow: z,
    grabTarget: L,
    remaining: () => y,
    busy: () => l >= 0,
    progress: () => l,
    fuse: () => (l >= 0 && u < 0 && v != null ? v : null),
    cooking: () => l >= 0 && u < 0 && l >= (f ? Ie : Fe),
    lower: () => (l < 0 ? 0 : r.pose.lower),
    sway: () => (l < 0 ? null : r.pose),
    filter(e) {
      return (l >= 0 && (e.buttons &= ~(_.FIRE | _.ADS | _.RELOAD)), e);
    },
    present: (e) => r.update(l, u, f, d, e),
    update(t) {
      if (l >= 0) {
        let e = c();
        if (
          ((h += t),
          !e ||
            e.id !== g ||
            e.hp <= 0 ||
            e.state & (a.DEAD | a.IN_VEHICLE) ||
            (!m && h > 1.5))
        )
          D();
        else if (u < 0) {
          ((l += t), v != null && (v = Math.max(0, v - t)));
          let e = f ? Ie : Fe;
          (l >= e && (d += t), p && l >= e && ((u = 0), (d = 0)));
        } else {
          let e = u;
          ((u += t),
            e < 0.085 && u >= 0.085 && !f && !T && ((T = !0), ne()),
            u >= Z && D());
        }
      }
      if (M > 0) {
        ((M -= t),
          (A.y -= 9.81 * t),
          O.position.addScaledVector(A, t),
          N.setFromEuler(P.set(j.x * t, j.y * t, j.z * t)),
          O.quaternion.multiply(N));
        let n = e.world.map?.getHeight?.(O.position.x, O.position.z);
        (Number.isFinite(n) &&
          O.position.y < n + 0.01 &&
          ((O.position.y = n + 0.01),
          A.multiplyScalar(0.3),
          (A.y = Math.abs(A.y)),
          j.multiplyScalar(0.4)),
          M <= 0 && (O.visible = !1));
      }
      let r = new Set();
      for (let a of e.world.byType?.(`projectile`) ?? e.world.sorted()) {
        if (a.type !== `projectile` || a.weapon !== G.id) continue;
        r.add(a.id);
        let o = i.get(a.id);
        (o ||
          ((o = n.build({ spoon: !1, ring: !1 })),
          o.scale.setScalar(Xe),
          o.traverse((e) => {
            e.castShadow = !0;
          }),
          e.scene.add(o),
          i.set(a.id, o),
          B.set(a.id, { vy: a.vel[1], speed: Math.hypot(...a.vel), quiet: 0 })),
          o.position.fromArray(a.pos));
        let c = Math.hypot(...a.vel);
        c > 0.05 &&
          (ee.set(a.vel[2], 0, -a.vel[0]).normalize(),
          N.setFromAxisAngle(ee, (-c * t) / (G.radius * 1.4)),
          o.quaternion.premultiply(N));
        let l = B.get(a.id);
        l.quiet -= t;
        let u = Math.max(
          l.vy < -1 && a.vel[1] > l.vy + 1.5 ? -l.vy : 0,
          l.speed - c > 2 ? l.speed - c : 0,
        );
        (u > 0 &&
          l.quiet <= 0 &&
          (s()?.play(`grenade_bounce`, {
            pos: a.pos,
            volume: Math.min(1, 0.25 + u / 9),
          }),
          (l.quiet = 0.08)),
          (l.vy = a.vel[1]),
          (l.speed = c));
      }
      for (let [t, n] of i)
        r.has(t) || (e.scene.remove(n), i.delete(t), B.delete(t));
    },
    dispose() {
      for (let e of o) e();
      (r.dispose(), e.scene.remove(O));
      for (let t of i.values()) e.scene.remove(t);
      (i.clear(), n.dispose());
    },
  };
}
export { q as a, Y as i, Ye as n, J as r, Ze as t };
//# sourceMappingURL=grenade-view-BrGxzfLZ.js.map
