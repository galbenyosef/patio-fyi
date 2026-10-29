// assets__ship-dressing-DTx9LFga 05 — math
// Lines 1231-1562 of readable/assets__ship-dressing-DTx9LFga.pretty.js (statement-aligned).
function _e(e) {
  let t = { value: [...Array(12)].map(() => new l()) },
    n = { value: [...Array(12)].map(() => new l()) },
    r = { value: [...Array(12)].map(() => new o()) },
    i = { value: 1 },
    a = e.map((e) => ({
      ...e,
      dv: new o(...e.d).normalize(),
      c: new u(e.color).multiplyScalar(e.gain ?? 1),
    })),
    s = new Set();
  function c(e) {
    if (
      !e ||
      s.has(e) ||
      !(e.isMeshStandardMaterial || e.isMeshPhysicalMaterial)
    )
      return;
    s.add(e);
    let a = e.onBeforeCompile,
      o = e.customProgramCacheKey?.bind(e);
    ((e.onBeforeCompile = (o, s) => {
      (a?.call(e, o, s),
        (o.uniforms.uFloodP = t),
        (o.uniforms.uFloodD = n),
        (o.uniforms.uFloodC = r),
        (o.uniforms.uFloodK = i),
        (o.vertexShader = o.vertexShader
          .replace(
            `#include <common>`,
            `#include <common>
varying vec3 vFloodW;`,
          )
          .replace(
            `#include <project_vertex>`,
            `#include <project_vertex>
          { vec4 fw = vec4(transformed, 1.0);
          #ifdef USE_INSTANCING
            fw = instanceMatrix * fw;
          #endif
          vFloodW = (modelMatrix * fw).xyz; }`,
          )),
        (o.fragmentShader = o.fragmentShader
          .replace(
            `#include <common>`,
            `#include <common>
          varying vec3 vFloodW; uniform vec4 uFloodP[12]; uniform vec4 uFloodD[12]; uniform vec3 uFloodC[12]; uniform float uFloodK;`,
          )
          .replace(
            `#include <lights_fragment_end>`,
            `#include <lights_fragment_end>
          {
            vec3 Nw = normalize(inverseTransformDirection(normal, viewMatrix));
            vec3 Vw = normalize(cameraPosition - vFloodW);
            for (int i = 0; i < 12; i++) {
              vec4 fp = uFloodP[i]; if (fp.w <= 0.0) continue;
              vec3 L = fp.xyz - vFloodW; float d = length(L); if (d > fp.w) continue; L /= d;
              float cs = dot(-L, uFloodD[i].xyz);
              float spot = smoothstep(uFloodD[i].w, uFloodD[i].w + (1.0 - uFloodD[i].w) * 0.45, cs);
              float q = d / fp.w; float fall = (1.0 - q * q) * (1.0 - q * q) / (1.0 + d * d * 0.03);
              float ndl = max(dot(Nw, L), 0.0);
              vec3 rad = uFloodC[i] * spot * fall * ndl * uFloodK;
              reflectedLight.directDiffuse += rad * BRDF_Lambert(material.diffuseColor);
              vec3 Hh = normalize(L + Vw); float rr = max(material.roughness, 0.06);
              reflectedLight.directSpecular += rad * pow(max(dot(Nw, Hh), 0.0), 2.0 / (rr * rr * rr * rr) ) * (1.0 - rr) * 0.25;
            }
          }`,
          )));
    }),
      (e.customProgramCacheKey = () => (o ? o() : ``) + `|flood12`),
      (e.needsUpdate = !0));
  }
  let d = new o(),
    f = a.map((e, t) => t);
  function p(e, s = 1) {
    (e.getWorldPosition(d),
      (i.value = s),
      f.sort(
        (e, t) =>
          d.distanceToSquared(new o(...a[e].p)) -
          d.distanceToSquared(new o(...a[t].p)),
      ));
    for (let e = 0; e < 12; e++) {
      let i = a[f[e]];
      if (!i) {
        t.value[e].set(0, 0, 0, 0);
        continue;
      }
      (t.value[e].set(i.p[0], i.p[1], i.p[2], i.range ?? 22),
        n.value[e].set(i.dv.x, i.dv.y, i.dv.z, Math.cos(i.half ?? 0.5)),
        r.value[e].set(i.c.r, i.c.g, i.c.b));
    }
  }
  function m(e, t) {
    (a[e].dv.set(...t).normalize(), (a[e].d = t));
  }
  return { patch: c, update: p, aim: m, items: a, count: () => s.size };
}
var Z = 14277074,
  ve = 14704668,
  ye = 5593436,
  be = 12167034;
function xe({ hang: n = 3, name: r = `KESTREL STAR` } = {}) {
  let i = new m(),
    a = P(ve, 0.55, 0.05),
    o = P(2238508, 0.4, 0.2),
    s = P(Z, 0.6, 0.2),
    c = P(10133668, 0.5, 0.8),
    l = new m();
  ((l.position.y = n), i.add(l));
  let u = new e(new t(1, 20, 10, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), a);
  (u.scale.set(3.8, 1.1, 1.2),
    (u.position.y = 0.95),
    (u.castShadow = !0),
    l.add(u),
    M(l, 7, 0.5, 2.36, 0.2, a, 0, 0.75, 0),
    M(l, 6.2, 1.05, 2.1, 0.45, a, -0.2, 1.1, 0),
    N(l, 4.4, 0.22, 2.16, o, -0.2, 1.6, 0),
    M(l, 1.3, 0.55, 1, 0.2, a, 1.9, 2, 0),
    N(l, 1, 0.22, 1.04, o, 1.9, 2.2, 0),
    N(l, 7.1, 0.08, 2.42, s, 0, 0.92, 0));
  for (let t of [-1, 1]) {
    let n = new e(
      new v(3.2, 0.3),
      Y(r, {
        w: 1024,
        h: 96,
        ink: `#111`,
        font: `800 72px Arial, sans-serif`,
        alpha: 0.9,
      }),
    );
    (n.position.set(0, 0.7, t * 1.195),
      (n.rotation.y = t > 0 ? 0 : Math.PI),
      l.add(n));
  }
  for (let e of [-1, 1])
    (A(i, [e * 3, 0, -1.85], [e * 3, n + 1.6, -1.85], 0.28, 0.28, s),
      A(i, [e * 3, n + 1.6, -1.85], [e * 3, n + 2.6, -0.2], 0.24, 0.24, s),
      D(i, [e * 3, n + 2.55, -0.2], [e * 3, n + 2.1, 0], 0.02, c));
  return j(i, [7.6, n + 2.8, 4]);
}
function Se() {
  let t = new m(),
    n = P(2830124, 0.85, 0),
    i = P(4869964, 0.6, 0.1),
    a = P(1382426, 0.5, 0.3),
    o = P(2106401, 0.9, 0);
  M(t, 9.6, 0.7, 2.6, 0.3, i, 0, 0, 0);
  for (let r of [-1, 1]) {
    let i = new e(new b(0.33, 0.33, 9.4, 12), n);
    ((i.rotation.z = Math.PI / 2),
      i.position.set(-0.2, 0.75, r * 1.15),
      t.add(i));
  }
  let s = new e(new r(1.15, 0.33, 10, 16, Math.PI), n);
  (s.rotation.set(Math.PI / 2, 0, -Math.PI / 2),
    s.position.set(4.5, 0.75, 0),
    t.add(s),
    N(t, 1.2, 1, 1.2, a, -0.8, 0.6, 0),
    N(t, 0.05, 0.5, 1.1, P(5924976, 0.1, 0.3), -0.25, 1.6, 0));
  for (let e of [-2.4, 0.8, 2.2]) N(t, 0.6, 0.5, 1.5, o, e, 0.6, 0);
  for (let e of [-1, 1]) N(t, 0.7, 0.9, 0.5, a, -4.6, 0.4, e * 0.5);
  return (
    D(t, [-2.8, 1, 0], [-2.8, 3, 0], 0.04, a),
    N(t, 0.5, 0.15, 0.5, a, -2.8, 3, 0),
    j(t, [10, 3.2, 3])
  );
}
function Ce({
  drop: e = 12,
  out: t = 7,
  rail: n = 1.18,
  ropeOnly: r = !1,
} = {}) {
  let i = new m(),
    a = P(3817025, 0.5, 0.7),
    o = P(2763302, 0.9, 0),
    s = P(8027512, 0.6, 0.4);
  N(i, 0.05, 0.4, 0.05, a, 0, -0.1, -0.15);
  for (let e of [-0.6, 0, 0.6])
    D(i, [0, 0.25, -0.15], [Math.sin(e) * 0.25, 0.1, -0.35], 0.022, a);
  for (let a of r ? [0] : [-1, 1]) {
    let s = a * 0.22,
      c = [
        [s, 0.25, -0.1],
        [s, 0.22, 0.3],
        [s, -n + 0.08, 0.55],
        [s, -n + 0.08, t],
        [s, -e, t + 0.15],
      ];
    for (let e = 0; e < c.length - 1; e++)
      D(i, c[e], c[e + 1], r ? 0.018 : 0.014, o);
  }
  if (!r)
    for (let r = -n - 0.3; r > -e + 0.2; r -= 0.35)
      N(i, 0.44, 0.03, 0.04, s, 0, r, t + 0.15 * ((-n - r) / (e - n)));
  return j(i, [0.6, e, t]);
}
function we(t = 11) {
  let n = new m(),
    i = P(3091494, 0.95, 0);
  D(n, [0, t, 0], [0.15, 0.25, 0.1], 0.028, i, 6);
  for (let t = 0; t < 4; t++) {
    let a = new e(new r(0.42 - t * 0.04, 0.03, 5, 18), i);
    ((a.rotation.x = Math.PI / 2),
      a.position.set(0.35, 0.04 + t * 0.05, 0.25),
      n.add(a));
  }
  return j(n, [1, t, 1]);
}
function Te(t = 0.65, n = 6) {
  let i = new m(),
    a = P(be, 0.95, 0);
  for (let o = 0; o < n; o++) {
    let n = new e(new r(t - (o % 3) * 0.1, 0.055, 6, 22), a);
    ((n.rotation.x = Math.PI / 2),
      (n.position.y = 0.05 + Math.floor(o / 3) * 0.1),
      i.add(n));
  }
  return j(i, [t * 2, 0.4, t * 2]);
}
function Ee() {
  let t = new m(),
    n = P(1843236, 0.6, 0.5);
  N(t, 1.1, 0.12, 0.6, n, 0, 0, 0);
  for (let r of [-0.35, 0.35]) {
    let i = new e(new b(0.15, 0.15, 0.5, 12), n);
    (i.position.set(r, 0.37, 0), t.add(i));
  }
  return j(t, [1.1, 0.6, 0.6]);
}
function De(t = 5, n = 0.36) {
  let i = new m(),
    a = P(2829614, 0.7, 0.6),
    o = Math.floor(t / n);
  for (let t = 0; t < o; t++) {
    let o = new e(new r(n * 0.5, 0.045, 5, 10), a);
    (o.scale.set(1, 0.6, 1),
      o.position.set(t * n, 0.06, 0),
      (o.rotation.x = t % 2 ? Math.PI / 2 : 0),
      t % 2 || (o.rotation.set(Math.PI / 2, 0, 0), o.rotateX(Math.PI / 2)),
      i.add(o));
  }
  let s = new e(new r(0.42, 0.12, 8, 18), P(1843236, 0.6, 0.5));
  return (
    (s.rotation.x = Math.PI / 2),
    s.position.set(t + 0.3, 0.06, 0),
    i.add(s),
    j(i, [t + 1, 0.3, 1])
  );
}
function Oe() {
  let t = new m(),
    n = P(ve, 0.7, 0),
    i = P(15263454, 0.7, 0),
    a = P(Z, 0.6, 0.3);
  N(t, 0.08, 0.9, 0.05, a, 0, 0, -0.06);
  let o = new e(new r(0.3, 0.07, 8, 20), n);
  (o.position.set(0, 0.62, 0), t.add(o));
  for (let n = 0; n < 4; n++) {
    let a = new e(new r(0.3, 0.075, 8, 3, 0.35), i);
    ((a.rotation.z = (n * Math.PI) / 2 + 0.6),
      a.position.copy(o.position),
      t.add(a));
  }
  return j(t, [0.8, 1, 0.3]);
}
function ke() {
  let t = new m(),
    n = P(10495516, 0.5, 0.3),
    r = P(ye, 0.5, 0.6);
  (w(t, 0.12, 0.14, 1.2, n, 0, 0, 0, 10), N(t, 0.32, 0.25, 0.32, n, 0, 1.2, 0));
  let i = new e(new b(0.06, 0.1, 0.9, 10), n);
  return (
    (i.rotation.z = -Math.PI / 2 + 0.25),
    i.position.set(0.45, 1.45, 0),
    t.add(i),
    N(t, 0.08, 0.35, 0.08, r, -0.18, 1.25, 0),
    j(t, [1.2, 1.7, 0.4])
  );
}
function Ae(e = 3, t = 2) {
  let n = new m(),
    r = k(e * 1e3 + t),
    i = [P(8023119, 0.95, 0), P(7102534, 0.95, 0), P(8746581, 0.95, 0)];
  for (let a = 0; a < t; a++)
    for (let t = -e / 2 + 0.3 + (a % 2) * 0.3; t < e / 2 - 0.2; t += 0.6)
      M(
        n,
        0.58,
        0.26,
        0.4,
        0.1,
        i[Math.floor(r() * 3)],
        t + (r() - 0.5) * 0.05,
        a * 0.24,
        (r() - 0.5) * 0.06,
        (r() - 0.5) * 0.2,
      );
  return j(n, [e, t * 0.26, 0.45]);
}
function je(t = 6) {
  let r = new m(),
    i = P(3817542, 0.6, 0.3),
    a = P(2238251, 0.5, 0.2),
    o = k(t * 77);
  N(r, 0.8, 0.95, t, i, 0, 0, 0);
  let s = new e(new n(0.85, 0.08, t), a);
  (s.position.set(-0.05, 1, 0), (s.rotation.z = 0.2), r.add(s));
  for (let e = -t / 2 + 0.6; e < t / 2 - 0.4; e += 0.9) {
    let t = [4169983, 4587402, 16756800, 4184319][Math.floor(o() * 4)],
      n = T(t, 0.45);
    (N(r, 0.08, 0.42, 0.62, a, 0.25, 1.05, e),
      N(r, 0.02, 0.34, 0.54, n, 0.2, 1.09, e));
  }
  return j(r, [0.9, 1.5, t]);
}
function Me() {
  let t = new m(),
    n = P(3817542, 0.6, 0.3),
    i = P(1908513, 0.5, 0.4);
  N(t, 0.5, 1, 0.6, n, 0, 0, 0);
  let a = new e(new r(0.2, 0.025, 6, 18), i);
  return (
    (a.rotation.y = Math.PI / 2),
    a.position.set(-0.3, 1, 0),
    t.add(a),
    N(t, 0.04, 0.2, 0.3, T(4587402, 1.2), -0.26, 1.05, 0),
    j(t, [0.6, 1.2, 0.6])
  );
}
