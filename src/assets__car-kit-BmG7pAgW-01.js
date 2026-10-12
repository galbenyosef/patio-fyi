// assets__car-kit-BmG7pAgW 01 — roughness
// Lines 1-325 of readable/assets__car-kit-BmG7pAgW.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  F as e,
  H as t,
  Ht as n,
  K as r,
  Mn as i,
  R as a,
  Rt as o,
  Ut as s,
  fn as c,
  lt as l,
  mn as u,
  pn as d,
  tt as f,
  vn as p,
  zn as m,
} from "./graphics-quality-BsjABS0s.js";
function h(e) {
  let t = e >>> 0;
  return () => {
    t = (t + 1831565813) >>> 0;
    let e = t;
    return (
      (e = Math.imul(e ^ (e >>> 15), e | 1)),
      (e ^= e + Math.imul(e ^ (e >>> 7), e | 61)),
      ((e ^ (e >>> 14)) >>> 0) / 4294967296
    );
  };
}
function g(e, t, n, r = !0) {
  let i = document.createElement(`canvas`);
  ((i.width = e), (i.height = t), n(i.getContext(`2d`), e, t));
  let o = new a(i);
  return (
    (o.colorSpace = r ? u : ``),
    (o.anisotropy = 8),
    (o.wrapS = o.wrapT = c),
    o
  );
}
var _ = () =>
    g(512, 512, (e, t) => {
      let n = h(7);
      ((e.fillStyle = `#2a2522`), e.fillRect(0, 0, t, t));
      for (let r = 0; r < 90; r++) {
        let r = n() * t,
          i = n() * t,
          a = 10 + n() * 70,
          o = e.createRadialGradient(r, i, 0, r, i, a),
          s = n() < 0.35 ? `120,62,32` : n() < 0.6 ? `78,72,66` : `16,15,14`;
        (o.addColorStop(0, `rgba(${s},${0.25 + n() * 0.4})`),
          o.addColorStop(1, `rgba(${s},0)`),
          (e.fillStyle = o),
          e.fillRect(r - a, i - a, 2 * a, 2 * a));
      }
      for (let r = 0; r < 2e4; r++)
        ((e.fillStyle = `rgba(${n() < 0.7 ? `0,0,0` : `140,84,50`},${n() * 0.2})`),
          e.fillRect(n() * t, n() * t, 1 + n() * 2, 1 + n() * 2));
    }),
  v = () =>
    g(256, 64, (e, t, n) => {
      ((e.fillStyle = `#0d0e10`),
        e.fillRect(0, 0, t, n),
        (e.fillStyle = `#3a3d42`));
      for (let r = 4; r < n; r += 10) e.fillRect(0, r, t, 3);
      for (let r = 0; r < t; r += 22) e.fillRect(r, 0, 2, n);
    }),
  y = () =>
    g(256, 256, (e, t) => {
      ((e.fillStyle = `#e6e6e2`), e.fillRect(0, 0, t, t));
      for (let n = 0; n < t; n += 16)
        ((e.fillStyle = `rgba(0,0,0,.08)`),
          e.fillRect(n, 0, 3, t),
          (e.fillStyle = `rgba(255,255,255,.35)`),
          e.fillRect(n + 4, 0, 2, t));
      let n = h(3);
      for (let r = 0; r < 40; r++) {
        let r = n() * t,
          i = e.createLinearGradient(0, 0, 0, t);
        (i.addColorStop(0, `rgba(90,80,60,0)`),
          i.addColorStop(1, `rgba(90,80,60,${n() * 0.18})`),
          (e.fillStyle = i),
          e.fillRect(r, 0, 4 + n() * 10, t));
      }
    });
function b(e, n = `#f1ede2`, r = `#1f3a64`) {
  let i = g(256, 128, (t, i, a) => {
    ((t.fillStyle = n),
      t.fillRect(0, 0, i, a),
      (t.strokeStyle = r),
      (t.lineWidth = 6),
      t.strokeRect(5, 5, i - 10, a - 10),
      (t.fillStyle = r),
      (t.font = `700 64px "Arial Narrow", Arial, sans-serif`),
      (t.textAlign = `center`),
      (t.textBaseline = `middle`),
      t.fillText(e, i / 2, a / 2 + 4),
      (t.font = `600 16px Arial`),
      t.fillText(`CASCADIA`, i / 2, 20));
  });
  return ((i.wrapS = i.wrapT = t), i);
}
function x(e, n, r) {
  let i = g(512, 128, (t, i, a) => {
    ((t.fillStyle = n),
      t.fillRect(0, 0, i, a),
      (t.fillStyle = r),
      (t.font = `900 78px "Arial Black", Arial, sans-serif`),
      (t.textAlign = `center`),
      (t.textBaseline = `middle`),
      t.fillText(e, i / 2, a / 2 + 4));
  });
  return ((i.wrapS = i.wrapT = t), i);
}
var S = () =>
  g(256, 32, (e, t, n) => {
    for (let t = 0; t < 16; t++)
      for (let n = 0; n < 2; n++)
        ((e.fillStyle = (t + n) % 2 ? `#111` : `#f4f1e6`),
          e.fillRect(t * 16, n * 16, 16, 16));
  });
function C(e) {
  let t = new n({
    color: e,
    roughness: 0.38,
    metalness: 0.35,
    clearcoat: 1,
    clearcoatRoughness: 0.08,
  });
  return (
    (t.userData.dust = { value: 0 }),
    (t.onBeforeCompile = (e) => {
      ((e.uniforms.uDust = t.userData.dust),
        (e.vertexShader =
          `varying float vCarY;
` +
          e.vertexShader.replace(
            `#include <begin_vertex>`,
            `#include <begin_vertex>
 vCarY = position.y;`,
          )),
        (e.fragmentShader =
          `uniform float uDust; varying float vCarY;
` +
          e.fragmentShader
            .replace(
              `#include <color_fragment>`,
              `#include <color_fragment>
      float dirt = uDust * (0.35 + 0.65 * (1.0 - smoothstep(0.1, 0.9, vCarY)));
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.42, 0.37, 0.3), dirt * 0.75);`,
            )
            .replace(
              `#include <roughnessmap_fragment>`,
              `#include <roughnessmap_fragment>
 roughnessFactor = mix(roughnessFactor, 0.85, uDust);`,
            )));
    }),
    t
  );
}
var w = {};
function T() {
  return w.glass
    ? w
    : ((w.glass = new n({
        color: 1844782,
        roughness: 0.04,
        metalness: 0.1,
        transparent: !0,
        opacity: 0.62,
        clearcoat: 1,
      })),
      (w.rubber = new s({ color: 1710619, roughness: 0.92 })),
      (w.rim = new s({ color: 12172480, roughness: 0.25, metalness: 0.9 })),
      (w.chrome = new s({ color: 15001322, roughness: 0.1, metalness: 1 })),
      (w.trim = new s({ color: 1513498, roughness: 0.55 })),
      (w.head = new s({
        color: 15922421,
        roughness: 0.1,
        metalness: 0.4,
        emissive: 16774876,
        emissiveIntensity: 0.35,
      })),
      (w.tail = new s({
        color: 7998476,
        roughness: 0.2,
        emissive: 16718352,
        emissiveIntensity: 0.35,
      })),
      (w.amber = new s({
        color: 13928986,
        roughness: 0.2,
        emissive: 16751136,
        emissiveIntensity: 0.3,
      })),
      (w.interior = new s({ color: 2828841, roughness: 0.9 })),
      (w.seat = new s({ color: 3881012, roughness: 0.85 })),
      (w.grille = new s({ map: v(), roughness: 0.5, metalness: 0.4 })),
      (w.cargo = new s({ map: y(), roughness: 0.6 })),
      (w.white = new s({ color: 15790058, roughness: 0.4, metalness: 0.1 })),
      (w.checker = new s({ map: S(), roughness: 0.5 })),
      (w.bed = new s({ color: 1381911, roughness: 0.95 })),
      (w.lightRed = new s({
        color: 12589080,
        emissive: 16719904,
        emissiveIntensity: 1.2,
      })),
      (w.lightBlue = new s({
        color: 1720272,
        emissive: 2117887,
        emissiveIntensity: 1.2,
      })),
      (w.burnt = new s({ map: _(), roughness: 0.95, metalness: 0.2 })),
      (w.soot = new s({ color: 986637, roughness: 1 })),
      w);
}
var E = (e, t, n) => new m(e, t, n);
function D(e, t, n = 0.05, r = null) {
  let i = new p();
  if ((e.forEach(([e, t], n) => (n ? i.lineTo(e, t) : i.moveTo(e, t))), r)) {
    let { clr: e, list: t, zRear: n } = r;
    for (let n of t) {
      let t = Math.asin(Math.max(-1, Math.min(1, (e - n.cy) / n.r)));
      (i.lineTo(n.z + Math.cos(t) * n.r, e),
        i.absarc(n.z, n.cy, n.r, t, Math.PI - t, !1));
    }
    i.lineTo(n, e);
  }
  i.closePath();
  let a = new f(i, {
    depth: t - 2 * n,
    bevelEnabled: n > 0,
    bevelThickness: n,
    bevelSize: n * 0.8,
    bevelSegments: 3,
    curveSegments: 18,
  });
  return (a.rotateY(-Math.PI / 2).translate(t / 2 - n, 0, 0), a);
}
function O(e, t, n, r) {
  let i = new o(t, n);
  return (
    (i.castShadow = i.receiveShadow = !0),
    r && (i.name = r),
    e.add(i),
    i
  );
}
function k(t, n, r, i, a, o, s, c, l) {
  return O(t, new e(o, s, c).translate(r, i, a), n, l);
}
function A(e, t, n, r, i, a, o, s, c) {
  (k(e, t, n, r, i, a, o, s, c), k(e, t, -n, r, i, a, o, s, c));
}
function j(t, n, r, i, a, o, s) {
  let c = r.distanceTo(i),
    l = O(t, new e(a, c, o), n, s);
  return (
    l.position.copy(r).add(i).multiplyScalar(0.5),
    l.quaternion.setFromUnitVectors(E(0, 1, 0), i.clone().sub(r).normalize()),
    l
  );
}
function M(e, t, n, a, o, s = !1) {
  let c = new l();
  ((c.name = `wheel`), c.position.set(t, a, n), e.add(c));
  let u = Math.sign(t);
  (O(c, new r(a, a, o, 28).rotateZ(Math.PI / 2), w.rubber, `tyre`),
    O(
      c,
      new i(a * 0.86, a * 0.1, 8, 28)
        .rotateY(Math.PI / 2)
        .translate(u * o * 0.42, 0, 0),
      w.rubber,
      `tyre`,
    ),
    s &&
      O(
        c,
        new d(a * 0.66, a * 0.84, 28)
          .rotateY((u * Math.PI) / 2)
          .translate(u * (o / 2 + 0.004), 0, 0),
        w.white,
        `tyre`,
      ));
  let f = new l();
  ((f.name = `rim`),
    c.add(f),
    O(
      f,
      new r(a * 0.64, a * 0.6, 0.03, 24)
        .rotateZ((u * Math.PI) / 2)
        .translate(u * (o / 2 + 0.005), 0, 0),
      w.rim,
    ),
    O(
      f,
      new i(a * 0.64, 0.018, 6, 24)
        .rotateY(Math.PI / 2)
        .translate(u * (o / 2 + 0.012), 0, 0),
      w.chrome,
    ),
    O(
      f,
      new r(a * 0.16, a * 0.2, 0.05, 12)
        .rotateZ(Math.PI / 2)
        .translate(u * (o / 2 + 0.03), 0, 0),
      w.chrome,
    ));
  for (let e = 0; e < 5; e++) {
    let t = (e / 5) * Math.PI * 2;
    k(
      f,
      w.trim,
      u * (o / 2 + 0.024),
      0,
      a * 0.4,
      0.012,
      a * 0.14,
      a * 0.34,
    ).rotation.x = t;
  }
  return c;
}
