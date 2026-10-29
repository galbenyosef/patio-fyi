// assets__cube-soldier-DMHrHkZL 17 — bevel
// Lines 4978-5305 of readable/assets__cube-soldier-DMHrHkZL.pretty.js (statement-aligned).
function Ia() {
  let { top: e, bottom: t, crotch: n, X: r, g: i, D: a } = Fa,
    c = Math.round((e - t) / 0.01),
    u = Math.round((e - n) / 0.01),
    d = Array.from({ length: c + 1 }, (t, n) => e - n * 0.01),
    f = [],
    p = [],
    m = new o(),
    h = new o(),
    _ = new o(),
    v = [],
    y = (n) => 0.02 + (0.96 * (n - t)) / (e - t),
    b = (e) => (e + r) / (2 * r),
    x = (e) => (e + a) / (2 * a),
    S = `grid`,
    C = (e, t, n) =>
      S === `cap`
        ? [0.85, 0.99]
        : S === `inner`
          ? [(e < 0 ? 0.805 : 0.905) + 0.09 * x(n), y(t)]
          : S === `side`
            ? e < 0
              ? [0.605 + 0.19 * (1 - x(n)), y(t)]
              : [0.205 + 0.19 * x(n), y(t)]
            : n < 0
              ? [0.005 + 0.19 * b(e), y(t)]
              : [0.405 + 0.19 * (1 - b(e)), y(t)],
    w = (e, t, n) => (f.push(e, t, n), v.push(...C(e, t, n)), f.length / 3 - 1),
    T = (e, t, n, r, i) => {
      let a = (e) => new o(f[e * 3], f[e * 3 + 1], f[e * 3 + 2]);
      (m.subVectors(a(t), a(e)),
        h.subVectors(a(n), a(e)),
        _.crossVectors(m, h),
        _.dot(i) < 0 ? p.push(e, n, t, e, r, n) : p.push(e, t, n, e, n, r));
    },
    E = [-r, -0.06, -0.03, -i, 0, i, 0.03, 0.06, r];
  for (let e of [-1, 1]) {
    let t = d.map((t) => E.map((n) => w(n, t, e * a))),
      n = new o(0, 0, e);
    for (let e = 0; e < c; e++)
      for (let r = 0; r < E.length - 1; r++)
        (e >= u && E[r] >= -i - 1e-6 && E[r + 1] <= i + 1e-6) ||
          T(t[e][r], t[e][r + 1], t[e + 1][r + 1], t[e + 1][r], n);
  }
  let D = (e, t, n) => {
    let r = d.slice(t).map((t) => [w(e, t, -a), w(e, t, a)]);
    for (let e = 0; e < r.length - 1; e++)
      T(r[e][0], r[e][1], r[e + 1][1], r[e + 1][0], n);
  };
  ((S = `side`),
    D(-r, 0, new o(-1, 0, 0)),
    D(r, 0, new o(1, 0, 0)),
    (S = `inner`),
    D(-i, u, new o(1, 0, 0)),
    D(i, u, new o(-1, 0, 0)),
    (S = `cap`));
  let ee = [-i, 0, i].map((e) => [w(e, n, -a), w(e, n, a)]);
  for (let e = 0; e < 2; e++)
    T(ee[e][0], ee[e + 1][0], ee[e + 1][1], ee[e][1], new o(0, -1, 0));
  let te = f.length / 3,
    O = new Float32Array(te * 3),
    k = new Float32Array(te).fill(On.cloth),
    A = new Float32Array(te),
    ne = new Float32Array(te);
  _a.set(Q).multiplyScalar(0.82);
  for (let e = 0; e < te; e++) {
    O.set([_a.r, _a.g, _a.b], e * 3);
    let t = f[e * 3],
      r = f[e * 3 + 1],
      a = $((Fa.blend[0] - r) / (Fa.blend[0] - Fa.blend[1]), 0, 1),
      o = a * a * (3 - 2 * a),
      s = $(0.5 - t / (2 * (i + (0.035 - i) * $((r - n) / 0.06, 0, 1))), 0, 1);
    ((A[e] = s * o), (ne[e] = (1 - s) * o));
  }
  let j = new l();
  return (
    j.setAttribute(`position`, new g(f, 3)),
    j.setAttribute(`normal`, new g(new Float32Array(te * 3), 3)),
    j.setAttribute(`color`, new s(O, 3)),
    j.setAttribute(`aTag`, new s(k, 1)),
    j.setAttribute(`uv`, new g(v, 2)),
    j.setIndex(p),
    j.computeVertexNormals(),
    (j.userData.pants = { rest: Float32Array.from(f), wL: A, wR: ne }),
    (j.userData.smoothLimb = !0),
    j
  );
}
var La = new M(),
  Ra = new M(),
  za = new o(),
  Ba = new o();
function Va(e, t, n) {
  let r = e.userData.pants,
    i = e.attributes.position.array;
  (t.updateMatrix(),
    n.updateMatrix(),
    La.copy(t.matrix).multiply(xa.makeTranslation(ge, 0, 0)),
    Ra.copy(n.matrix).multiply(xa.makeTranslation(-ge, 0, 0)));
  for (let e = 0; e < r.wL.length; e++)
    (ya.set(r.rest[e * 3], r.rest[e * 3 + 1], r.rest[e * 3 + 2]),
      za.copy(ya).applyMatrix4(La).sub(ya).multiplyScalar(r.wL[e]),
      Ba.copy(ya).applyMatrix4(Ra).sub(ya).multiplyScalar(r.wR[e]),
      (i[e * 3] = ya.x + za.x + Ba.x),
      (i[e * 3 + 1] = ya.y + za.y + Ba.y),
      (i[e * 3 + 2] = ya.z + za.z + Ba.z));
  ((e.attributes.position.needsUpdate = !0), e.computeVertexNormals());
}
function Ha(e, t, n = `assault`, r = !1, i = 0.78) {
  let a = ea[e],
    s = r ? { ...a, ...ra[e] } : a,
    c = n === `sniper` ? { ...s, cloth: ta[e] } : s,
    l = ga({
      top: 0.05,
      bottom: -0.52,
      a: [0.066 * i, 0.066 * i],
      b: [0.058 * i, 0.058 * i],
      round: 0.05 * i,
      joints: [{ y: -ve, band: 0.1, below: !0 }],
      colour: () => [Q, On.cloth, 0.9],
    }),
    u = null;
  try {
    u = Xr(
      [`fparm`, t, n, e, r, i].join(`:`),
      l,
      { part: `arm`, side: t, cls: n, pal: c, base: 0.9 },
      (e) => e.add(new o(t * he, me, 0)).multiplyScalar(be),
    );
  } catch {
    u = null;
  }
  Zr(l);
  let d = Ya(a, r, !0, u);
  return (
    (d.roughness = 0.86),
    {
      geometry: l,
      material: d,
      cuff: Y(0.122 * i, 0.04, 0.122 * i, 0, -0.235, 0, X.glove),
      bend: (e) => Na(l, [e]),
    }
  );
}
var Ua = [
    [14254635, 15722194, 2829099],
    [13116458, 1842206, 13116458],
  ],
  Wa = {
    assault: 0.3,
    sniper: 0.34,
    support: 0.32,
    engineer: 0.29,
    medic: 0.28,
  };
function Ga(e, t, n, r, i, a, o = `z`, s = -1) {
  return e.map((e, c) =>
    o === `z`
      ? Y(t, n / 3, 0.006, r, i + n / 3 - (c * n) / 3, a + s * 0.003, e)
      : Y(0.006, n / 3, t, r + s * 0.003, i + n / 3 - (c * n) / 3, a, e),
  );
}
function Ka(e, t) {
  let n = -(Wa[e] ?? 0.3) / 2 - 0.004,
    r = Ua[t];
  return [
    Y(0.075, 0.052, 0.006, -0.1, 0.5, n, 2763559),
    ...Ga(r, 0.066, 0.042, -0.1, 0.5, n - 0.003),
    Y(0.13, 0.024, 0.006, -0.09, 0.448, n, 7170645),
    ...[0, 1, 2, 3, 4].map((e) =>
      Y(0.012, 0.008, 0.004, -0.135 + e * 0.022, 0.448, n - 0.005, 2302751),
    ),
  ];
}
function qa(e) {
  let t = [
      Y(0.13, 0.27, 0.13, 0, -0.14, 0, Q, ia(0.92)),
      Y(0.145, 0.085, 0.145, 0, -0.01, 0, Q, ia(0.84)),
      Y(0.138, 0.035, 0.138, 0, -0.16, 0, Q, ia(0.68)),
    ],
    n = [
      Y(0.125, 0.09, 0.125, 0, -0.02, 0, Q, ia(0.78)),
      Y(0.115, 0.17, 0.115, 0, -0.14, 0, Q, ia(0.9)),
      Y(0.122, 0.04, 0.122, 0, -0.235, 0, X.glove),
      Y(0.105, 0.1, 0.11, 0, -0.3, -0.005, X.glove, { bevel: 0.018 }),
    ],
    r = [
      Y(0.19, 0.35, 0.21, 0, -fe / 2 + 0.005, 0, Q, ia(0.82)),
      Y(0.04, 0.12, 0.13, 0.108, -0.2, 0, Q, ia(0.66)),
    ],
    i = [
      Y(0.17, 0.27, 0.19, 0, -0.14, 0, Q, ia(0.8)),
      Y(0.13, 0.13, 0.05, 0, -0.03, -0.1, Q, Z(0.8)),
      Y(0.176, 0.05, 0.196, 0, -0.26, 0, X.boot),
    ],
    a = [
      Y(0.18, 0.1, 0.29, 0, -0.01, -0.05, X.boot, { bevel: 0.02 }),
      Y(0.185, 0.03, 0.3, 0, -0.06, -0.05, X.sole, { bevel: 0.008 }),
      Y(0.12, 0.012, 0.1, 0, 0.042, -0.11, 3814702, { bevel: 0 }),
    ];
  return (
    e === `medic` &&
      t.push(
        Y(0.14, 0.055, 0.14, 0, -0.2, 0, X.white, { bevel: 0.006 }),
        Y(0.144, 0.035, 0.012, 0, -0.2, 0, X.red, { bevel: 0 }),
      ),
    e === `support` && t.push(Y(0.17, 0.13, 0.17, 0, -0.03, 0, Q, Z(0.95))),
    e === `engineer` &&
      (r.push(Y(0.12, 0.14, 0.08, 0.1, -0.2, -0.04, 9137997)),
      i.push(Y(0.15, 0.1, 0.06, 0, -0.02, -0.11, 5327675))),
    e === `assault` &&
      r.push(Y(0.09, 0.12, 0.07, 0.11, -0.12, -0.03, Q, Z(0.9))),
    { upper: t, fore: n, thigh: r, shin: i, foot: a }
  );
}
function Ja() {
  return Nn([
    Y(0.05, 0.1, 0.2, 0, -0.02, -0.1, X.wood),
    Y(0.04, 0.05, 0.1, 0, 0.02, -0.24, X.metal),
    Y(0.06, 0.1, 0.32, 0, 0, -0.44, X.metal, { bevel: 0.01 }),
    Y(0.035, 0.035, 0.28, 0, 0.02, -0.74, X.dark, { bevel: 0.006 }),
    Y(0.058, 0.07, 0.22, 0, 0, -0.66, X.wood, { bevel: 0.012 }),
    Y(0.04, 0.15, 0.07, 0, -0.11, -0.46, X.dark, { rot: [0.25, 0, 0] }),
    Y(0.036, 0.1, 0.05, 0, -0.09, -0.3, X.wood, { rot: [-0.3, 0, 0] }),
    Y(0.04, 0.02, 0.2, 0, 0.06, -0.42, X.dark, { bevel: 0.005 }),
    ...[-1, 1].map((e) =>
      Y(0.012, 0.03, 0.016, e * 0.013, 0.083, -0.34, X.dark, { bevel: 0.003 }),
    ),
    Y(0.034, 0.012, 0.016, 0, 0.074, -0.34, X.dark, { bevel: 0 }),
    Y(0.008, 0.05, 0.01, 0, 0.065, -0.82, X.dark, { bevel: 0 }),
    Y(0.03, 0.02, 0.03, 0, 0.042, -0.82, X.dark, { bevel: 0.004 }),
    Y(0.045, 0.03, 0.03, 0, 0.02, -0.89, X.dark, { bevel: 0.004 }),
  ]);
}
function Ya(e, t, n = !1, r = null) {
  let i = t ? { ...e, ...ra[ea.indexOf(e)] } : e,
    o = {
      uTeam: { value: new p(i.team) },
      uCloth: { value: new p(i.cloth) },
      uGear: { value: new p(i.gear) },
    },
    s = new a({
      vertexColors: !0,
      flatShading: !n,
      roughness: n ? 0.66 : 0.86,
      metalness: 0,
      map: r,
    });
  return (
    (s.onBeforeCompile = (e) => {
      (Object.assign(e.uniforms, o),
        (e.vertexShader = e.vertexShader
          .replace(
            `#include <common>`,
            `#include <common>
attribute float aTag;
uniform vec3 uTeam, uCloth, uGear;`,
          )
          .replace(
            `#include <color_vertex>`,
            `#include <color_vertex>
float lum = color.r;
if (aTag > 2.5) vColor.rgb = uGear * lum; else if (aTag > 1.5) vColor.rgb = uCloth * lum; else if (aTag > 0.5) vColor.rgb = uTeam * lum;`,
          )),
        (e.fragmentShader = e.fragmentShader.replace(
          `#include <opaque_fragment>`,
          `outgoingLight = max(outgoingLight, diffuseColor.rgb * 0.12);
#include <opaque_fragment>`,
        )));
    }),
    (s.customProgramCacheKey = () => `cubie-soldier-tags`),
    (s.userData.uniforms = o),
    s
  );
}
var Xa = null;
function Za() {
  if (!Xa) {
    let e = document.createElement(`canvas`);
    e.width = e.height = 64;
    let t = e.getContext(`2d`),
      n = t.createRadialGradient(32, 32, 0, 32, 32, 32);
    (n.addColorStop(0, `rgba(255,255,255,1)`),
      n.addColorStop(0.25, `rgba(255,255,255,0.55)`),
      n.addColorStop(1, `rgba(255,255,255,0)`),
      (t.fillStyle = n),
      t.fillRect(0, 0, 64, 64),
      (Xa = new j(e)));
  }
  return Xa;
}
function Qa(n) {
  Za();
  let r = [];
  for (let [i, a] of Xn) {
    let o = new t(
      new S(0.05, 0.03),
      new f({ color: new p(10354612), toneMapped: !1 }),
    );
    ((o.rotation.y = Math.PI), o.position.set(i, a + 0.004, Gn - 0.003));
    let s = new x(
      new e({
        map: Xa,
        color: 4063096,
        blending: 2,
        depthWrite: !1,
        transparent: !0,
        opacity: 0.85,
        toneMapped: !1,
      }),
    );
    (s.position.set(i, a, Gn - 0.022),
      s.scale.setScalar(0.17),
      n.add(o, s),
      r.push(o, s));
  }
  return r;
}
var $a = null;
function eo() {
  return ($a ??= new a({
    map: Hn().texture,
    roughness: 0.9,
    metalness: 0,
    polygonOffset: !0,
    polygonOffsetFactor: -2,
  }));
}
