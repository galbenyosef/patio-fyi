// assets__ship-dressing-y_vqKCl7 05 — math
// Lines 1231-1562 of readable/assets__ship-dressing-y_vqKCl7.pretty.js (statement-aligned).
function ge(t) {
  let n = { value: [...Array(12)].map(() => new e()) },
    r = { value: [...Array(12)].map(() => new e()) },
    i = { value: [...Array(12)].map(() => new C()) },
    a = { value: 1 },
    o = t.map((e) => ({
      ...e,
      dv: new C(...e.d).normalize(),
      c: new c(e.color).multiplyScalar(e.gain ?? 1),
    })),
    s = new Set();
  function l(e) {
    if (
      !e ||
      s.has(e) ||
      !(e.isMeshStandardMaterial || e.isMeshPhysicalMaterial)
    )
      return;
    s.add(e);
    let t = e.onBeforeCompile,
      o = e.customProgramCacheKey?.bind(e);
    ((e.onBeforeCompile = (o, s) => {
      (t?.call(e, o, s),
        (o.uniforms.uFloodP = n),
        (o.uniforms.uFloodD = r),
        (o.uniforms.uFloodC = i),
        (o.uniforms.uFloodK = a),
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
  let u = new C(),
    d = o.map((e, t) => t);
  function f(e, t = 1) {
    (e.getWorldPosition(u),
      (a.value = t),
      d.sort(
        (e, t) =>
          u.distanceToSquared(new C(...o[e].p)) -
          u.distanceToSquared(new C(...o[t].p)),
      ));
    for (let e = 0; e < 12; e++) {
      let t = o[d[e]];
      if (!t) {
        n.value[e].set(0, 0, 0, 0);
        continue;
      }
      (n.value[e].set(t.p[0], t.p[1], t.p[2], t.range ?? 22),
        r.value[e].set(t.dv.x, t.dv.y, t.dv.z, Math.cos(t.half ?? 0.5)),
        i.value[e].set(t.c.r, t.c.g, t.c.b));
    }
  }
  function p(e, t) {
    (o[e].dv.set(...t).normalize(), (o[e].d = t));
  }
  return { patch: l, update: f, aim: p, items: o, count: () => s.size };
}
var Q = 14277074,
  _e = 14704668,
  ve = 5593436,
  ye = 12167034;
function be({ hang: e = 3, name: t = `KESTREL STAR` } = {}) {
  let n = new _(),
    r = P(_e, 0.55, 0.05),
    i = P(2238508, 0.4, 0.2),
    a = P(Q, 0.6, 0.2),
    o = P(10133668, 0.5, 0.8),
    c = new _();
  ((c.position.y = e), n.add(c));
  let l = new s(new S(1, 20, 10, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), r);
  (l.scale.set(3.8, 1.1, 1.2),
    (l.position.y = 0.95),
    (l.castShadow = !0),
    c.add(l),
    M(c, 7, 0.5, 2.36, 0.2, r, 0, 0.75, 0),
    M(c, 6.2, 1.05, 2.1, 0.45, r, -0.2, 1.1, 0),
    N(c, 4.4, 0.22, 2.16, i, -0.2, 1.6, 0),
    M(c, 1.3, 0.55, 1, 0.2, r, 1.9, 2, 0),
    N(c, 1, 0.22, 1.04, i, 1.9, 2.2, 0),
    N(c, 7.1, 0.08, 2.42, a, 0, 0.92, 0));
  for (let e of [-1, 1]) {
    let n = new s(
      new p(3.2, 0.3),
      ce(t, {
        w: 1024,
        h: 96,
        ink: `#111`,
        font: `800 72px Arial, sans-serif`,
        alpha: 0.9,
      }),
    );
    (n.position.set(0, 0.7, e * 1.195),
      (n.rotation.y = e > 0 ? 0 : Math.PI),
      c.add(n));
  }
  for (let t of [-1, 1])
    (A(n, [t * 3, 0, -1.85], [t * 3, e + 1.6, -1.85], 0.28, 0.28, a),
      A(n, [t * 3, e + 1.6, -1.85], [t * 3, e + 2.6, -0.2], 0.24, 0.24, a),
      D(n, [t * 3, e + 2.55, -0.2], [t * 3, e + 2.1, 0], 0.02, o));
  return j(n, [7.6, e + 2.8, 4]);
}
function xe() {
  let e = new _(),
    t = P(2830124, 0.85, 0),
    n = P(4869964, 0.6, 0.1),
    i = P(1382426, 0.5, 0.3),
    a = P(2106401, 0.9, 0);
  M(e, 9.6, 0.7, 2.6, 0.3, n, 0, 0, 0);
  for (let n of [-1, 1]) {
    let i = new s(new r(0.33, 0.33, 9.4, 12), t);
    ((i.rotation.z = Math.PI / 2),
      i.position.set(-0.2, 0.75, n * 1.15),
      e.add(i));
  }
  let c = new s(new o(1.15, 0.33, 10, 16, Math.PI), t);
  (c.rotation.set(Math.PI / 2, 0, -Math.PI / 2),
    c.position.set(4.5, 0.75, 0),
    e.add(c),
    N(e, 1.2, 1, 1.2, i, -0.8, 0.6, 0),
    N(e, 0.05, 0.5, 1.1, P(5924976, 0.1, 0.3), -0.25, 1.6, 0));
  for (let t of [-2.4, 0.8, 2.2]) N(e, 0.6, 0.5, 1.5, a, t, 0.6, 0);
  for (let t of [-1, 1]) N(e, 0.7, 0.9, 0.5, i, -4.6, 0.4, t * 0.5);
  return (
    D(e, [-2.8, 1, 0], [-2.8, 3, 0], 0.04, i),
    N(e, 0.5, 0.15, 0.5, i, -2.8, 3, 0),
    j(e, [10, 3.2, 3])
  );
}
function Se({
  drop: e = 12,
  out: t = 7,
  rail: n = 1.18,
  ropeOnly: r = !1,
} = {}) {
  let i = new _(),
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
function Ce(e = 11) {
  let t = new _(),
    n = P(3091494, 0.95, 0);
  D(t, [0, e, 0], [0.15, 0.25, 0.1], 0.028, n, 6);
  for (let e = 0; e < 4; e++) {
    let r = new s(new o(0.42 - e * 0.04, 0.03, 5, 18), n);
    ((r.rotation.x = Math.PI / 2),
      r.position.set(0.35, 0.04 + e * 0.05, 0.25),
      t.add(r));
  }
  return j(t, [1, e, 1]);
}
function we(e = 0.65, t = 6) {
  let n = new _(),
    r = P(ye, 0.95, 0);
  for (let i = 0; i < t; i++) {
    let t = new s(new o(e - (i % 3) * 0.1, 0.055, 6, 22), r);
    ((t.rotation.x = Math.PI / 2),
      (t.position.y = 0.05 + Math.floor(i / 3) * 0.1),
      n.add(t));
  }
  return j(n, [e * 2, 0.4, e * 2]);
}
function Te() {
  let e = new _(),
    t = P(1843236, 0.6, 0.5);
  N(e, 1.1, 0.12, 0.6, t, 0, 0, 0);
  for (let n of [-0.35, 0.35]) {
    let i = new s(new r(0.15, 0.15, 0.5, 12), t);
    (i.position.set(n, 0.37, 0), e.add(i));
  }
  return j(e, [1.1, 0.6, 0.6]);
}
function Ee(e = 5, t = 0.36) {
  let n = new _(),
    r = P(2829614, 0.7, 0.6),
    i = Math.floor(e / t);
  for (let e = 0; e < i; e++) {
    let i = new s(new o(t * 0.5, 0.045, 5, 10), r);
    (i.scale.set(1, 0.6, 1),
      i.position.set(e * t, 0.06, 0),
      (i.rotation.x = e % 2 ? Math.PI / 2 : 0),
      e % 2 || (i.rotation.set(Math.PI / 2, 0, 0), i.rotateX(Math.PI / 2)),
      n.add(i));
  }
  let a = new s(new o(0.42, 0.12, 8, 18), P(1843236, 0.6, 0.5));
  return (
    (a.rotation.x = Math.PI / 2),
    a.position.set(e + 0.3, 0.06, 0),
    n.add(a),
    j(n, [e + 1, 0.3, 1])
  );
}
function De() {
  let e = new _(),
    t = P(_e, 0.7, 0),
    n = P(15263454, 0.7, 0),
    r = P(Q, 0.6, 0.3);
  N(e, 0.08, 0.9, 0.05, r, 0, 0, -0.06);
  let i = new s(new o(0.3, 0.07, 8, 20), t);
  (i.position.set(0, 0.62, 0), e.add(i));
  for (let t = 0; t < 4; t++) {
    let r = new s(new o(0.3, 0.075, 8, 3, 0.35), n);
    ((r.rotation.z = (t * Math.PI) / 2 + 0.6),
      r.position.copy(i.position),
      e.add(r));
  }
  return j(e, [0.8, 1, 0.3]);
}
function Oe() {
  let e = new _(),
    t = P(10495516, 0.5, 0.3),
    n = P(ve, 0.5, 0.6);
  (w(e, 0.12, 0.14, 1.2, t, 0, 0, 0, 10), N(e, 0.32, 0.25, 0.32, t, 0, 1.2, 0));
  let i = new s(new r(0.06, 0.1, 0.9, 10), t);
  return (
    (i.rotation.z = -Math.PI / 2 + 0.25),
    i.position.set(0.45, 1.45, 0),
    e.add(i),
    N(e, 0.08, 0.35, 0.08, n, -0.18, 1.25, 0),
    j(e, [1.2, 1.7, 0.4])
  );
}
function ke(e = 3, t = 2) {
  let n = new _(),
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
function Ae(e = 6) {
  let n = new _(),
    r = P(3817542, 0.6, 0.3),
    i = P(2238251, 0.5, 0.2),
    a = k(e * 77);
  N(n, 0.8, 0.95, e, r, 0, 0, 0);
  let o = new s(new t(0.85, 0.08, e), i);
  (o.position.set(-0.05, 1, 0), (o.rotation.z = 0.2), n.add(o));
  for (let t = -e / 2 + 0.6; t < e / 2 - 0.4; t += 0.9) {
    let e = [4169983, 4587402, 16756800, 4184319][Math.floor(a() * 4)],
      r = T(e, 0.45);
    (N(n, 0.08, 0.42, 0.62, i, 0.25, 1.05, t),
      N(n, 0.02, 0.34, 0.54, r, 0.2, 1.09, t));
  }
  return j(n, [0.9, 1.5, e]);
}
function je() {
  let e = new _(),
    t = P(3817542, 0.6, 0.3),
    n = P(1908513, 0.5, 0.4);
  N(e, 0.5, 1, 0.6, t, 0, 0, 0);
  let r = new s(new o(0.2, 0.025, 6, 18), n);
  return (
    (r.rotation.y = Math.PI / 2),
    r.position.set(-0.3, 1, 0),
    e.add(r),
    N(e, 0.04, 0.2, 0.3, T(4587402, 1.2), -0.26, 1.05, 0),
    j(e, [0.6, 1.2, 0.6])
  );
}
