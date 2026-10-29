// assets__grenade-model-r0cg2Gb_ 04 — math
// Lines 936-1285 of readable/assets__grenade-model-r0cg2Gb_.pretty.js (statement-aligned).
var W = (e) => Object.freeze({ eye: e, style: `solid` }),
  Rt = Object.freeze({
    51: W(0.12),
    53: W(0.12),
    54: W(0.12),
    55: W(0.12),
    56: W(0.11),
    57: W(0.105),
    58: W(0.105),
    74: W(0.09),
    75: W(0.095),
    76: W(0.105),
    77: W(0.105),
    80: W(0.108),
    81: W(0.105),
    82: W(0.11),
    4: W(0.13),
    44: W(0.13),
    45: W(0.13),
    46: W(0.13),
    47: W(0.13),
    50: W(0.13),
    49: W(0.13),
    48: Object.freeze({ eye: 0.17, style: `notch` }),
  }),
  zt = (e) => Rt[e] ?? null,
  Bt = {
    pupil: 0.004,
    minClear: 0.0045,
    rim: 0.0024,
    halo: 0.008,
    dark: 0.86,
    haloDark: 0.38,
    color: 1184790,
  };
function Vt(e) {
  let t = Math.max(0, Math.min(1, (e - 0.55) / 0.4));
  return t * t * (3 - 2 * t);
}
function Ht(e, t, n) {
  let r = t / 0.075,
    i = Bt.pupil * (1 - t / (t + Math.max(0.05, n))),
    a = Math.max(Bt.minClear * r, e + i * 0.8),
    o = i * 0.5,
    s = a + o + Bt.rim * r;
  return { blur: i, clear: a, edge: o, rim: s, outer: s + Bt.halo * r + i };
}
function Ut(e, t) {
  let n = (e, t, n) => {
    let r = Math.max(0, Math.min(1, (n - e) / (t - e)));
    return r * r * (3 - 2 * r);
  };
  return t <= e.clear
    ? 0
    : t < e.clear + e.edge
      ? Bt.dark * n(e.clear, e.clear + e.edge, t)
      : t < e.rim
        ? Bt.dark
        : (Bt.dark - (Bt.dark - Bt.haloDark) * n(e.rim, e.rim + 0.0015, t)) *
          (1 - n(e.rim, e.outer, t));
}
var Wt = new Map();
function Gt(e) {
  let n = [e.clear, e.edge, e.rim, e.outer].map((e) => e.toFixed(5)).join(`/`);
  if (Wt.has(n)) return Wt.get(n);
  let r = new Uint8Array(262144),
    i = new x(Bt.color);
  for (let t = 0; t < 256; t++)
    for (let n = 0; n < 256; n++) {
      let a = (Math.hypot(n + 0.5 - 128, t + 0.5 - 128) / 128) * e.outer,
        o = (t * 256 + n) * 4;
      ((r[o] = i.r * 255),
        (r[o + 1] = i.g * 255),
        (r[o + 2] = i.b * 255),
        (r[o + 3] = Math.round(Ut(e, a) * 255)));
    }
  let a = new S(r, 256, 256);
  return (
    (a.magFilter = a.minFilter = t),
    (a.needsUpdate = !0),
    Wt.set(n, a),
    a
  );
}
function Kt(e, t, r, i, a) {
  let o = Ht(r, i, a),
    s = new b({
      map: Gt(o),
      transparent: !0,
      depthTest: !1,
      depthWrite: !1,
      toneMapped: !1,
      opacity: 0,
    }),
    c = new n(new P(o.outer * 2, o.outer * 2), s);
  return (
    (c.name = `iron_peep_ring`),
    c.position.set(t.x, t.y, t.z),
    (c.renderOrder = 36),
    (c.frustumCulled = !1),
    (c.visible = !1),
    (c.userData.ring = o),
    e.add(c),
    c
  );
}
var qt = new c(),
  Jt = new c(),
  Yt = new c(),
  Xt = new c(),
  Zt = new c(),
  Qt = new c(),
  $t = new z(),
  en = new k(),
  tn = new c(),
  nn = new c(0, 0, 1),
  rn = new c(),
  an = new c();
function on(e, t, n, r) {
  let i = n.getLength(),
    a = r.lead?.[0] ?? 0.04,
    o = r.lead?.[1] ?? 0.04,
    s = r.max ?? e.count - t,
    c = Math.max(1, (i - a - o) / r.pitch),
    l = Math.min(s, Math.ceil(c * r.perTurn + (a + o) / r.wire));
  (n.getTangentAt(0, Yt),
    an.set(0, 1, 0),
    Math.abs(Yt.dot(an)) > 0.9 && an.set(1, 0, 0),
    Xt.crossVectors(Yt, an).normalize());
  let u = t,
    d = !1;
  for (let c = 0; c <= l; c++) {
    let f = c / l,
      p = f * i;
    (n.getPointAt(f, qt),
      n.getTangentAt(f, Yt),
      Xt.addScaledVector(Yt, -Xt.dot(Yt)).normalize(),
      Zt.crossVectors(Yt, Xt));
    let m = Math.min(
        1,
        Math.max(0, (p - a) / 0.03),
        Math.max(0, (i - o - p) / 0.03),
      ),
      h = ((p - a) / r.pitch) * Math.PI * 2;
    if (
      (Jt.copy(qt)
        .addScaledVector(Xt, Math.cos(h) * r.radius * m)
        .addScaledVector(Zt, Math.sin(h) * r.radius * m),
      d && u < t + s)
    ) {
      Qt.subVectors(Jt, rn);
      let t = Qt.length() || 1e-4;
      (en.setFromUnitVectors(nn, Qt.divideScalar(t)),
        e.setMatrixAt(
          u++,
          $t.compose(
            tn.addVectors(rn, Jt).multiplyScalar(0.5),
            en,
            Qt.set(r.wire, r.wire, t + r.wire * 0.6),
          ),
        ));
    }
    (rn.copy(Jt), (d = !0));
  }
  return u;
}
function sn(e, t, n, r, i) {
  let a = t;
  n.getPointAt(0, rn);
  for (let t = 1; t <= i; t++) {
    (n.getPointAt(t / i, Jt), Qt.subVectors(Jt, rn));
    let o = Qt.length() || 1e-4;
    (en.setFromUnitVectors(nn, Qt.divideScalar(o)),
      e.setMatrixAt(
        a++,
        $t.compose(
          tn.addVectors(rn, Jt).multiplyScalar(0.5),
          en,
          Qt.set(r, r, o + r * 0.5),
        ),
      ),
      rn.copy(Jt));
  }
  return a;
}
var cn = pe.glove,
  ln = {};
function un(e) {
  return e.name === `bright`
    ? 1
    : (e.color.getHSL(ln), ln.s < 0.2 && ln.l < 0.5 ? 0.3 : 1);
}
var G = {
    upper: fe,
    fore: 0.255,
    shoulderR: [0.17, -0.25, 0.03],
    shoulderL: [-0.2, -0.28, -0.08],
    reach: 0.14,
    launcherR: [0.28, -0.56, 0.1],
    launcherL: [-0.46, -0.5, 0.04],
    reloadR: [0.17, -0.3, 0],
    reloadL: [-0.19, -0.31, -0.02],
    supportBack: 1,
    supportDepth: 0.82,
    supportGap: 0.2,
    poleR: [0.5, -1, 0.1],
    poleL: [-0.5, -1, 0.1],
    defibR: [0.34, -0.5, 0.05],
    defibL: [-0.34, -0.5, 0.05],
    defibGirth: 0.66,
    defibWrist: 0.045,
    defibPaddle: 1.3,
    defibGripBack: 0.04,
    defibFistSize: [0.105, 0.1, 0.11],
    lead: {
      from: 0.03,
      hip: [0.27, -0.86, 0.02],
      sag: 0.3,
      route: [
        [0.04, 0.08, 0.12],
        [0, 0.22, 0.2],
      ],
      coil: {
        radius: 0.018,
        pitch: 0.016,
        wire: 0.013,
        perTurn: 8,
        lead: [0.025, 0.03],
      },
      cable: 0.019,
      cableBlocks: 16,
      max: 1100,
      colour: 1776670,
    },
  },
  dn = {
    sleeve: 7634521,
    sleeveDark: 6121031,
    seam: 4870714,
    glove: 8023381,
    gloveHi: 9076066,
    pad: 4078129,
    cuff: 4998713,
  },
  fn = new x();
function pn(e, t) {
  let n = e.attributes.position.count,
    r = new Float32Array(n * 3);
  fn.setHex(t).convertSRGBToLinear();
  for (let e = 0; e < n; e++)
    ((r[e * 3] = fn.r), (r[e * 3 + 1] = fn.g), (r[e * 3 + 2] = fn.b));
  return (e.setAttribute(`color`, new l(r, 3)), e.index ? e.toNonIndexed() : e);
}
var mn = new z();
function hn(e, t, n, r) {
  let a = new i(...e);
  return (
    r && a.applyMatrix4(mn.makeRotationFromEuler(new F(...r))),
    a.translate(...t),
    pn(a, n)
  );
}
function gn(e) {
  let t = [],
    n = [],
    r = [];
  e.forEach(([e, i, a], o) => {
    fn.setHex(a).convertSRGBToLinear();
    for (let [r, a] of [
      [-i, -i],
      [i, -i],
      [i, i],
      [-i, i],
      [-i, -i],
    ])
      (t.push(r, e, a), n.push(fn.r, fn.g, fn.b));
    if (o)
      for (let e = 0; e < 4; e++) {
        let t = (o - 1) * 5 + e,
          n = o * 5 + e;
        r.push(t, n, t + 1, t + 1, n, n + 1);
      }
  });
  let i = new d();
  (i.setAttribute(`position`, new E(t, 3)),
    i.setAttribute(`color`, new E(n, 3)),
    i.setIndex(r));
  let a = i.toNonIndexed();
  return (i.dispose(), a.computeVertexNormals(), a);
}
function _n(e) {
  let t = oe(e);
  for (let t of e) t.dispose();
  return (t.computeVertexNormals(), t);
}
function vn() {
  return {
    upper: () =>
      gn([
        [0, 0.036, dn.sleeve],
        [0.9, 0.033, dn.sleeve],
        [0.9, 0.036, dn.seam],
        [1, 0.036, dn.seam],
      ]),
    fore: () =>
      gn([
        [0, 0.031, dn.sleeve],
        [0.78, 0.028, dn.sleeve],
        [0.78, 0.031, dn.sleeveDark],
        [1, 0.031, dn.sleeveDark],
      ]),
    elbow: () => hn([0.068, 0.068, 0.068], [0, 0, 0], dn.sleeve),
    cuff: () =>
      _n([
        hn([0.058, 0.05, 0.058], [0, 0, 0], dn.cuff),
        hn([0.062, 0.012, 0.062], [0, 0.02, 0], dn.pad),
      ]),
    fist: () =>
      _n([
        hn([0.066, 0.066, 0.066], [0, 0, 0], dn.glove),
        hn([0.068, 0.026, 0.068], [0, -0.024, 0], dn.gloveHi),
      ]),
    material() {
      let e = new o({
        vertexColors: !0,
        roughness: 0.93,
        metalness: 0,
        flatShading: !0,
      });
      return (
        (e.onBeforeCompile = (e) => {
          e.fragmentShader = e.fragmentShader.replace(
            `#include <emissivemap_fragment>`,
            `#include <emissivemap_fragment>
	totalEmissiveRadiance += diffuseColor.rgb * 0.26;`,
          );
        }),
        (e.customProgramCacheKey = () => `firstperson_arms_fill`),
        e
      );
    },
  };
}
var yn = { faction: 0, cls: `assault`, winter: !1 },
  bn = ``;
function xn(e, t, n) {
  let r = `${e}:${t}:${n}`;
  r !== bn && ((bn = r), (yn = { faction: e, cls: t, winter: n }));
}
xn(0, `assault`, !1);
