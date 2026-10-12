// assets__cube-soldier-BRpW8Tqo 16 — bevel
// Lines 4650-4977 of readable/assets__cube-soldier-BRpW8Tqo.pretty.js (statement-aligned).
function Ji(e, t, n = `assault`, r = !1, i = 0.78) {
  let a = si[e],
    o = r ? { ...a, ...ui[e] } : a,
    s = n === `sniper` ? { ...o, cloth: ci[e] } : o,
    c = Si({
      top: 0.05,
      bottom: -0.52,
      a: [0.066 * i, 0.066 * i],
      b: [0.058 * i, 0.058 * i],
      round: 0.05 * i,
      joints: [{ y: -ve, band: 0.1, below: !0 }],
      colour: () => [Q, Pt.cloth, 0.9],
    }),
    l = null;
  try {
    l = rr(
      [`fparm`, t, n, e, r, i].join(`:`),
      c,
      { part: `arm`, side: t, cls: n, pal: s, base: 0.9 },
      (e) => e.add(new M(t * he, me, 0)).multiplyScalar(be),
    );
  } catch {
    l = null;
  }
  ir(c);
  let u = ta(a, r, !0, l);
  return (
    (u.roughness = 0.86),
    {
      geometry: c,
      material: u,
      cuff: J(0.122 * i, 0.04, 0.122 * i, 0, -0.235, 0, Y.glove),
      bend: (e) => zi(c, [e]),
    }
  );
}
var Yi = [
    [14254635, 15722194, 2829099],
    [13116458, 1842206, 13116458],
  ],
  Xi = {
    assault: 0.3,
    sniper: 0.34,
    support: 0.32,
    engineer: 0.29,
    medic: 0.28,
  };
function Zi(e, t, n, r, i, a, o = `z`, s = -1) {
  return e.map((e, c) =>
    o === `z`
      ? J(t, n / 3, 0.006, r, i + n / 3 - (c * n) / 3, a + s * 0.003, e)
      : J(0.006, n / 3, t, r + s * 0.003, i + n / 3 - (c * n) / 3, a, e),
  );
}
function Qi(e, t) {
  let n = -(Xi[e] ?? 0.3) / 2 - 0.004,
    r = Yi[t];
  return [
    J(0.075, 0.052, 0.006, -0.1, 0.5, n, 2763559),
    ...Zi(r, 0.066, 0.042, -0.1, 0.5, n - 0.003),
    J(0.13, 0.024, 0.006, -0.09, 0.448, n, 7170645),
    ...[0, 1, 2, 3, 4].map((e) =>
      J(0.012, 0.008, 0.004, -0.135 + e * 0.022, 0.448, n - 0.005, 2302751),
    ),
  ];
}
function $i(e) {
  let t = [
      J(0.13, 0.27, 0.13, 0, -0.14, 0, Q, X(0.92)),
      J(0.145, 0.085, 0.145, 0, -0.01, 0, Q, X(0.84)),
      J(0.138, 0.035, 0.138, 0, -0.16, 0, Q, X(0.68)),
    ],
    n = [
      J(0.125, 0.09, 0.125, 0, -0.02, 0, Q, X(0.78)),
      J(0.115, 0.17, 0.115, 0, -0.14, 0, Q, X(0.9)),
      J(0.122, 0.04, 0.122, 0, -0.235, 0, Y.glove),
      J(0.105, 0.1, 0.11, 0, -0.3, -0.005, Y.glove, { bevel: 0.018 }),
    ],
    r = [
      J(0.19, 0.35, 0.21, 0, -fe / 2 + 0.005, 0, Q, X(0.82)),
      J(0.04, 0.12, 0.13, 0.108, -0.2, 0, Q, X(0.66)),
    ],
    i = [
      J(0.17, 0.27, 0.19, 0, -0.14, 0, Q, X(0.8)),
      J(0.13, 0.13, 0.05, 0, -0.03, -0.1, Q, Z(0.8)),
      J(0.176, 0.05, 0.196, 0, -0.26, 0, Y.boot),
    ],
    a = [
      J(0.18, 0.1, 0.29, 0, -0.01, -0.05, Y.boot, { bevel: 0.02 }),
      J(0.185, 0.03, 0.3, 0, -0.06, -0.05, Y.sole, { bevel: 0.008 }),
      J(0.12, 0.012, 0.1, 0, 0.042, -0.11, 3814702, { bevel: 0 }),
    ];
  return (
    e === `medic` &&
      t.push(
        J(0.14, 0.055, 0.14, 0, -0.2, 0, Y.white, { bevel: 0.006 }),
        J(0.144, 0.035, 0.012, 0, -0.2, 0, Y.red, { bevel: 0 }),
      ),
    e === `support` && t.push(J(0.17, 0.13, 0.17, 0, -0.03, 0, Q, Z(0.95))),
    e === `engineer` &&
      (r.push(J(0.12, 0.14, 0.08, 0.1, -0.2, -0.04, 9137997)),
      i.push(J(0.15, 0.1, 0.06, 0, -0.02, -0.11, 5327675))),
    e === `assault` &&
      r.push(J(0.09, 0.12, 0.07, 0.11, -0.12, -0.03, Q, Z(0.9))),
    { upper: t, fore: n, thigh: r, shin: i, foot: a }
  );
}
function ea() {
  return zt([
    J(0.05, 0.1, 0.2, 0, -0.02, -0.1, Y.wood),
    J(0.04, 0.05, 0.1, 0, 0.02, -0.24, Y.metal),
    J(0.06, 0.1, 0.32, 0, 0, -0.44, Y.metal, { bevel: 0.01 }),
    J(0.035, 0.035, 0.28, 0, 0.02, -0.74, Y.dark, { bevel: 0.006 }),
    J(0.058, 0.07, 0.22, 0, 0, -0.66, Y.wood, { bevel: 0.012 }),
    J(0.04, 0.15, 0.07, 0, -0.11, -0.46, Y.dark, { rot: [0.25, 0, 0] }),
    J(0.036, 0.1, 0.05, 0, -0.09, -0.3, Y.wood, { rot: [-0.3, 0, 0] }),
    J(0.04, 0.02, 0.2, 0, 0.06, -0.42, Y.dark, { bevel: 0.005 }),
    ...[-1, 1].map((e) =>
      J(0.012, 0.03, 0.016, e * 0.013, 0.083, -0.34, Y.dark, { bevel: 0.003 }),
    ),
    J(0.034, 0.012, 0.016, 0, 0.074, -0.34, Y.dark, { bevel: 0 }),
    J(0.008, 0.05, 0.01, 0, 0.065, -0.82, Y.dark, { bevel: 0 }),
    J(0.03, 0.02, 0.03, 0, 0.042, -0.82, Y.dark, { bevel: 0.004 }),
    J(0.045, 0.03, 0.03, 0, 0.02, -0.89, Y.dark, { bevel: 0.004 }),
  ]);
}
function ta(e, t, n = !1, r = null) {
  let i = t ? { ...e, ...ui[si.indexOf(e)] } : e,
    a = {
      uTeam: { value: new p(i.team) },
      uCloth: { value: new p(i.cloth) },
      uGear: { value: new p(i.gear) },
    },
    o = new m({
      vertexColors: !0,
      flatShading: !n,
      roughness: n ? 0.66 : 0.86,
      metalness: 0,
      map: r,
    });
  return (
    (o.onBeforeCompile = (e) => {
      (Object.assign(e.uniforms, a),
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
    (o.customProgramCacheKey = () => `cubie-soldier-tags`),
    (o.userData.uniforms = a),
    o
  );
}
var na = null;
function ra() {
  if (!na) {
    let e = document.createElement(`canvas`);
    e.width = e.height = 64;
    let t = e.getContext(`2d`),
      n = t.createRadialGradient(32, 32, 0, 32, 32, 32);
    (n.addColorStop(0, `rgba(255,255,255,1)`),
      n.addColorStop(0.25, `rgba(255,255,255,0.55)`),
      n.addColorStop(1, `rgba(255,255,255,0)`),
      (t.fillStyle = n),
      t.fillRect(0, 0, 64, 64),
      (na = new d(e)));
  }
  return na;
}
function ia(e) {
  ra();
  let t = [];
  for (let [i, a] of nn) {
    let o = new f(
      new y(0.05, 0.03),
      new ne({ color: new p(10354612), toneMapped: !1 }),
    );
    ((o.rotation.y = Math.PI), o.position.set(i, a + 0.004, Zt - 0.003));
    let s = new r(
      new n({
        map: na,
        color: 4063096,
        blending: 2,
        depthWrite: !1,
        transparent: !0,
        opacity: 0.85,
        toneMapped: !1,
      }),
    );
    (s.position.set(i, a, Zt - 0.022),
      s.scale.setScalar(0.17),
      e.add(o, s),
      t.push(o, s));
  }
  return t;
}
var aa = null;
function oa() {
  return (aa ??= new m({
    map: Jt().texture,
    roughness: 0.9,
    metalness: 0,
    polygonOffset: !0,
    polygonOffsetFactor: -2,
  }));
}
function sa() {
  let e = (e, t, n = 0, r = 0, i = 0, a = `XYZ`) => {
      let o = new _();
      return (
        (o.name = e),
        o.position.set(n, r, i),
        (o.rotation.order = a),
        t?.add(o),
        o
      );
    },
    t = e(`root`, null, 0, 0, 0, `YXZ`),
    n = e(`hips`, t, 0, ye, 0, `YXZ`),
    r = e(`torso`, n, 0, 0, 0, `YXZ`);
  r.scale.setScalar(be);
  let i = e(`head`, r, 0, W.neck, 0.01, `YXZ`);
  i.scale.setScalar(1 / be);
  let a = e(`armL`, r, -he, me, 0),
    o = e(`armR`, r, he, me, 0),
    s = e(`foreL`, a, 0, -ve, 0),
    c = e(`foreR`, o, 0, -ve, 0),
    l = e(`legL`, n, -ge, 0, 0),
    u = e(`legR`, n, ge, 0, 0),
    d = e(`shinL`, l, 0, -fe, 0),
    f = e(`shinR`, u, 0, -fe, 0);
  return {
    root: t,
    hips: n,
    torso: r,
    head: i,
    armL: a,
    armR: o,
    foreL: s,
    foreR: c,
    legL: l,
    legR: u,
    shinL: d,
    shinR: f,
    footL: e(`footL`, d, 0, -pe, 0),
    footR: e(`footR`, f, 0, -pe, 0),
    weapon: e(`weapon`, r, 0, 0, 0, `YXZ`),
  };
}
var ca = new M(0, -0.1, -0.3),
  la = new M(0, -0.04, -0.62),
  ua = new M(-0.02, -0.14, -0.46),
  da = new M(-0.14, -0.4, -0.3),
  fa = new M(),
  pa = new M(),
  ma = new M(),
  ha = new M(),
  ga = new v(),
  _a = new v(),
  va = {
    wpnX: 0.05,
    wpnY: 0.28,
    wpnZ: -0.12,
    wpnPitch: -0.55,
    wpnYaw: 0.35,
    wpnRoll: 0.1,
  },
  ya = {
    wpnX: 0.02,
    wpnY: 0.22,
    wpnZ: -0.14,
    wpnPitch: -0.9,
    wpnYaw: 0.5,
    wpnRoll: 0.3,
  },
  ba = {
    wpnX: 0.24,
    wpnY: 0.6,
    wpnZ: -0.19,
    wpnPitch: -0.7,
    wpnYaw: 0.95,
    wpnRoll: 0.2,
  },
  xa = 0.3,
  Sa = new M(0, -1, 0),
  Ca = {
    t: new M(),
    ax: new M(),
    pole: new M(),
    el: new M(),
    lo: new M(),
    q: new v(),
  },
  wa = new v().setFromEuler(new b(0.12, 0.12, -0.35, `YXZ`)),
  Ta = new M(),
  Ea = new _(),
  Da = new v(),
  Oa = new v(),
  ka = new v();
function Aa(e, t) {
  t.w < 0.001 ||
    (Oa.copy(e.armR.quaternion),
    ka.copy(e.foreR.quaternion),
    Na(e.armR, e.foreR, Ta.set(t.x, t.y, t.z), Ea),
    e.armR.quaternion.slerpQuaternions(Oa, e.armR.quaternion.clone(), t.w),
    e.foreR.quaternion.slerpQuaternions(ka, e.foreR.quaternion.clone(), t.w));
}
function ja(e, t) {
  return t
    .multiplyQuaternions(e.armR.quaternion, e.foreR.quaternion)
    .invert()
    .multiply(wa);
}
var Ma = { pos: new M(0, -0.3, -0.01), scale: 1.5 / be };
