// assets__car-kit-C4kBe5xO 01 — roughness
// Lines 1-325 of readable/assets__car-kit-C4kBe5xO.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  Bt as e,
  F as t,
  Fn as n,
  Gt as r,
  Hn as i,
  U as a,
  Wt as o,
  _n as s,
  dt as c,
  gn as l,
  hn as u,
  q as d,
  rt as f,
  xn as p,
  z as m,
} from "./graphics-quality-CrL3qbU3.js";
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
  let a = new m(i);
  return (
    (a.colorSpace = r ? s : ``),
    (a.anisotropy = 8),
    (a.wrapS = a.wrapT = u),
    a
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
function b(e, t = `#f1ede2`, n = `#1f3a64`) {
  let r = g(256, 128, (r, i, a) => {
    ((r.fillStyle = t),
      r.fillRect(0, 0, i, a),
      (r.strokeStyle = n),
      (r.lineWidth = 6),
      r.strokeRect(5, 5, i - 10, a - 10),
      (r.fillStyle = n),
      (r.font = `700 64px "Arial Narrow", Arial, sans-serif`),
      (r.textAlign = `center`),
      (r.textBaseline = `middle`),
      r.fillText(e, i / 2, a / 2 + 4),
      (r.font = `600 16px Arial`),
      r.fillText(`CASCADIA`, i / 2, 20));
  });
  return ((r.wrapS = r.wrapT = a), r);
}
function x(e, t, n) {
  let r = g(512, 128, (r, i, a) => {
    ((r.fillStyle = t),
      r.fillRect(0, 0, i, a),
      (r.fillStyle = n),
      (r.font = `900 78px "Arial Black", Arial, sans-serif`),
      (r.textAlign = `center`),
      (r.textBaseline = `middle`),
      r.fillText(e, i / 2, a / 2 + 4));
  });
  return ((r.wrapS = r.wrapT = a), r);
}
var S = () =>
  g(256, 32, (e, t, n) => {
    for (let t = 0; t < 16; t++)
      for (let n = 0; n < 2; n++)
        ((e.fillStyle = (t + n) % 2 ? `#111` : `#f4f1e6`),
          e.fillRect(t * 16, n * 16, 16, 16));
  });
function C(e) {
  let t = new o({
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
    : ((w.glass = new o({
        color: 1844782,
        roughness: 0.04,
        metalness: 0.1,
        transparent: !0,
        opacity: 0.62,
        clearcoat: 1,
      })),
      (w.rubber = new r({ color: 1710619, roughness: 0.92 })),
      (w.rim = new r({ color: 12172480, roughness: 0.25, metalness: 0.9 })),
      (w.chrome = new r({ color: 15001322, roughness: 0.1, metalness: 1 })),
      (w.trim = new r({ color: 1513498, roughness: 0.55 })),
      (w.head = new r({
        color: 15922421,
        roughness: 0.1,
        metalness: 0.4,
        emissive: 16774876,
        emissiveIntensity: 0.35,
      })),
      (w.tail = new r({
        color: 7998476,
        roughness: 0.2,
        emissive: 16718352,
        emissiveIntensity: 0.35,
      })),
      (w.amber = new r({
        color: 13928986,
        roughness: 0.2,
        emissive: 16751136,
        emissiveIntensity: 0.3,
      })),
      (w.interior = new r({ color: 2828841, roughness: 0.9 })),
      (w.seat = new r({ color: 3881012, roughness: 0.85 })),
      (w.grille = new r({ map: v(), roughness: 0.5, metalness: 0.4 })),
      (w.cargo = new r({ map: y(), roughness: 0.6 })),
      (w.white = new r({ color: 15790058, roughness: 0.4, metalness: 0.1 })),
      (w.checker = new r({ map: S(), roughness: 0.5 })),
      (w.bed = new r({ color: 1381911, roughness: 0.95 })),
      (w.lightRed = new r({
        color: 12589080,
        emissive: 16719904,
        emissiveIntensity: 1.2,
      })),
      (w.lightBlue = new r({
        color: 1720272,
        emissive: 2117887,
        emissiveIntensity: 1.2,
      })),
      (w.burnt = new r({ map: _(), roughness: 0.95, metalness: 0.2 })),
      (w.soot = new r({ color: 986637, roughness: 1 })),
      w);
}
var E = (e, t, n) => new i(e, t, n);
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
function O(t, n, r, i) {
  let a = new e(n, r);
  return (
    (a.castShadow = a.receiveShadow = !0),
    i && (a.name = i),
    t.add(a),
    a
  );
}
function k(e, n, r, i, a, o, s, c, l) {
  return O(e, new t(o, s, c).translate(r, i, a), n, l);
}
function A(e, t, n, r, i, a, o, s, c) {
  (k(e, t, n, r, i, a, o, s, c), k(e, t, -n, r, i, a, o, s, c));
}
function j(e, n, r, i, a, o, s) {
  let c = r.distanceTo(i),
    l = O(e, new t(a, c, o), n, s);
  return (
    l.position.copy(r).add(i).multiplyScalar(0.5),
    l.quaternion.setFromUnitVectors(E(0, 1, 0), i.clone().sub(r).normalize()),
    l
  );
}
function M(e, t, r, i, a, o = !1) {
  let s = new c();
  ((s.name = `wheel`), s.position.set(t, i, r), e.add(s));
  let u = Math.sign(t);
  (O(s, new d(i, i, a, 28).rotateZ(Math.PI / 2), w.rubber, `tyre`),
    O(
      s,
      new n(i * 0.86, i * 0.1, 8, 28)
        .rotateY(Math.PI / 2)
        .translate(u * a * 0.42, 0, 0),
      w.rubber,
      `tyre`,
    ),
    o &&
      O(
        s,
        new l(i * 0.66, i * 0.84, 28)
          .rotateY((u * Math.PI) / 2)
          .translate(u * (a / 2 + 0.004), 0, 0),
        w.white,
        `tyre`,
      ));
  let f = new c();
  ((f.name = `rim`),
    s.add(f),
    O(
      f,
      new d(i * 0.64, i * 0.6, 0.03, 24)
        .rotateZ((u * Math.PI) / 2)
        .translate(u * (a / 2 + 0.005), 0, 0),
      w.rim,
    ),
    O(
      f,
      new n(i * 0.64, 0.018, 6, 24)
        .rotateY(Math.PI / 2)
        .translate(u * (a / 2 + 0.012), 0, 0),
      w.chrome,
    ),
    O(
      f,
      new d(i * 0.16, i * 0.2, 0.05, 12)
        .rotateZ(Math.PI / 2)
        .translate(u * (a / 2 + 0.03), 0, 0),
      w.chrome,
    ));
  for (let e = 0; e < 5; e++) {
    let t = (e / 5) * Math.PI * 2;
    k(
      f,
      w.trim,
      u * (a / 2 + 0.024),
      0,
      i * 0.4,
      0.012,
      i * 0.14,
      i * 0.34,
    ).rotation.x = t;
  }
  return s;
}
