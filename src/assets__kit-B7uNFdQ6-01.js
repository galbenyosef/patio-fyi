// assets__kit-B7uNFdQ6 01 — userdata
// Lines 1-290 of readable/assets__kit-B7uNFdQ6.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  F as e,
  K as t,
  Lt as n,
  P as r,
  R as i,
  Rt as a,
  St as o,
  Ut as s,
  Yt as c,
  en as l,
  fn as u,
  lt as d,
  mn as f,
  rt as p,
  v as m,
  zn as h,
} from "./graphics-quality-BsjABS0s.js";
import { t as g } from "./RoundedBoxGeometry-BodHbp3F.js";
import { r as _, t as v } from "./car-kit-BmG7pAgW.js";
var y = new Map();
function b(e, t = 0.85, n = 0, r = {}) {
  let i = `${e}|${t}|${n}|${JSON.stringify(r)}`;
  return (
    y.has(i) || y.set(i, new s({ color: e, roughness: t, metalness: n, ...r })),
    y.get(i)
  );
}
function x(e, t = 2) {
  let n = new s({
    color: e,
    roughness: 0.4,
    emissive: e,
    emissiveIntensity: 0,
  });
  return ((n.userData.nightGlow = t), n);
}
var S = (e = 6125443, t = 0.55) =>
  b(e, 0.08, 0.2, { transparent: !0, opacity: t, userData: { pen: `glass` } });
function C(e, t, n, r = 0, i = 0, o = 0, s = 0) {
  let c = new a(t, n);
  return (
    c.position.set(r, i, o),
    (c.rotation.y = s),
    (c.castShadow = c.receiveShadow = !0),
    e.add(c),
    c
  );
}
var w = (t, n, r, i, a, o = 0, s = 0, c = 0, l = 0) =>
    C(t, new e(n, r, i), a, o, s + r / 2, c, l),
  T = (e, t, n, r, i, a, o = 0, s = 0, c = 0, l = 0) =>
    C(e, new g(t, n, r, 2, i), a, o, s + n / 2, c, l),
  E = (e, n, r, i, a, o = 0, s = 0, c = 0, l = 16) =>
    C(e, new t(n, r, i, l), a, o, s + i / 2, c);
function D(e, n, r, i, o, s = 6) {
  let c = new h(...n),
    l = new h(...r),
    u = c.distanceTo(l),
    d = new a(new t(i, i, u, s), o);
  return (
    d.position.copy(c).add(l).multiplyScalar(0.5),
    d.quaternion.setFromUnitVectors(
      new h(0, 1, 0),
      l.clone().sub(c).normalize(),
    ),
    (d.castShadow = !0),
    e.add(d),
    d
  );
}
function O(t, n, r, i, o, s) {
  let c = new h(...n),
    l = new h(...r),
    u = c.distanceTo(l),
    d = new a(new e(i, u, o), s);
  return (
    d.position.copy(c).add(l).multiplyScalar(0.5),
    d.quaternion.setFromUnitVectors(
      new h(0, 1, 0),
      l.clone().sub(c).normalize(),
    ),
    (d.castShadow = d.receiveShadow = !0),
    t.add(d),
    d
  );
}
function k(e, t, n, r = !1, { opaquePanel: a = !1 } = {}) {
  let o = document.createElement(`canvas`);
  ((o.width = e), (o.height = t), n(o.getContext(`2d`), e, t));
  let s = new i(o);
  return (
    (s.colorSpace = f),
    (s.anisotropy = 8),
    r && (s.wrapS = s.wrapT = u),
    a && (s.userData.opaquePanel = !0),
    s
  );
}
function A(e, t, n, r, i, o, c, u = 0, d = 0) {
  let f = new s({
    map: r,
    roughness: 0.6,
    transparent: r.userData.opaquePanel !== !0,
    emissive: d ? 16777215 : 0,
    emissiveMap: d ? r : null,
    emissiveIntensity: 0,
  });
  d && (f.userData.nightGlow = d);
  let p = new a(new l(t, n), f);
  return (p.position.set(i, o, c), (p.rotation.y = u), e.add(p), p);
}
function j(
  e,
  {
    w: t = 1024,
    h: n = 128,
    bg: r = null,
    fg: i = `#222`,
    font: a = `600 72px Georgia, serif`,
    spacing: o = 0.12,
  } = {},
) {
  return k(t, n, (s) => {
    (r && ((s.fillStyle = r), s.fillRect(0, 0, t, n)),
      (s.fillStyle = i),
      (s.font = a),
      (s.textAlign = `center`),
      (s.textBaseline = `middle`),
      `letterSpacing` in s && (s.letterSpacing = `${o}em`),
      s.fillText(e, t / 2, n / 2 + 4));
  });
}
function M(e) {
  let t = e >>> 0;
  return () => (t = (Math.imul(t, 1664525) + 1013904223) >>> 0) / 4294967296;
}
function N(e, t, n, r, i, a, o = 0, s = 0, c = null) {
  let l = v.filter((e) => !/police|taxi|boxtruck|van/.test(e.key ?? ``)),
    u = c
      ? (v.find((e) => e.key === c) ?? l[0])
      : l[Math.floor(M(o * 7919 + 13)() * l.length)],
    d = _(u, a);
  return (
    d.position.set(t, n, r),
    (d.rotation.order = `YXZ`),
    d.rotation.set(0, i, 0),
    s && d.rotateZ(s),
    (d.userData.collideAsBox = !0),
    e.add(d),
    d
  );
}
var P = 80,
  F = 70,
  I = (e) =>
    [
      e.type,
      e.color?.getHex(),
      e.roughness,
      e.metalness,
      e.map?.uuid,
      e.normalMap?.uuid,
      e.emissiveMap?.uuid,
      e.alphaMap?.uuid,
      e.transparent,
      e.opacity,
      e.emissive?.getHex(),
      e.emissiveIntensity,
      e.alphaTest,
      e.side,
      e.depthWrite,
      e.userData?.nightGlow ?? 0,
      e.flatShading,
      e.vertexColors,
    ].join(`|`);
function L(t, i) {
  if (((t.userData.size = i), globalThis.__setpieceRaw)) return t;
  t.updateMatrixWorld(!0);
  let s = new Map(),
    l = (e) => {
      let t = I(e);
      return (s.has(t) || s.set(t, e), s.get(t));
    },
    u = new Map(),
    f = new Map(),
    g = new Map(),
    _ = new Map(),
    v = [],
    y = [],
    b = new h(),
    x = new h(),
    S = (e) => {
      for (let n = e.parent; n && n !== t; n = n.parent)
        if (n.userData.collideAsBox) return n;
      return null;
    };
  (t.traverse((t) => {
    if (!t.userData.collideAsBox || !t.userData.paint) return;
    let i = new r();
    t.traverse((e) => {
      e.isMesh &&
        (e.geometry.computeBoundingBox(),
        i.union(
          e.geometry.boundingBox
            .clone()
            .applyMatrix4(
              new n().copy(t.matrixWorld).invert().multiply(e.matrixWorld),
            ),
        ));
    });
    let a = i.getSize(new h()),
      o = i.getCenter(new h()),
      s = new e(a.x * 0.96, a.y * 0.82, a.z * 0.96)
        .translate(o.x, i.min.y + a.y * 0.41, o.z)
        .applyMatrix4(t.matrixWorld)
        .toNonIndexed(),
      c = l(t.userData.paint);
    (_.has(c.uuid) || _.set(c.uuid, { m: c, cast: !1, list: [] }),
      _.get(c.uuid).list.push(s));
  }),
    t.traverse((e) => {
      if (!e.isMesh) return;
      if (e.userData.blink || e.userData.keep || Array.isArray(e.material)) {
        v.push(e);
        return;
      }
      let t = l(e.material);
      (t.alphaTest > 0 && (t.alphaToCoverage = !0),
        e.geometry.computeBoundingBox(),
        e.geometry.boundingBox.getSize(b).multiply(e.getWorldScale(x)));
      let n = [b.x, b.y, b.z].sort((e, t) => e - t),
        r = (n[1] < 0.12 && n[2] < 2.5) || n[2] < 0.3,
        i = e.geometry.index ? e.geometry.toNonIndexed() : e.geometry.clone();
      i.applyMatrix4(e.matrixWorld);
      for (let e of Object.keys(i.attributes))
        [`position`, `normal`, `uv`].includes(e) || i.deleteAttribute(e);
      (i.attributes.normal || i.computeVertexNormals(),
        i.attributes.uv ||
          i.setAttribute(
            `uv`,
            new p(new Float32Array(i.attributes.position.count * 2), 2),
          ),
        (i.morphAttributes = {}));
      let a = !!S(e),
        o = a ? g : r ? f : u,
        s = t.uuid + (e.castShadow && !r && !a ? `|c` : `|n`);
      (o.has(s) ||
        o.set(s, {
          m: t,
          cast: e.castShadow && !r && !a && !t.transparent,
          list: [],
        }),
        o.get(s).list.push(i),
        y.push(e));
    }));
  for (let e of v)
    ((e.material = Array.isArray(e.material) ? e.material : l(e.material)),
      t.attach(e));
  for (let e of y) e.geometry.dispose();
  for (let e of [...t.children]) v.includes(e) || t.remove(e);
  let C = (e, t) => {
    let n = new d();
    n.name = t;
    for (let { m: r, cast: i, list: o } of e.values()) {
      let e = m(o, !1);
      for (let e of o) e.dispose();
      if (!e) continue;
      let s = new a(e, r);
      ((s.castShadow = i), (s.receiveShadow = !0), (s.name = t), n.add(s));
    }
    return n;
  };
  if ((t.add(C(u, `setpiece-body`)), g.size)) {
    let e = new o();
    ((e.name = `setpiece-cars`),
      e.addLevel(C(g, `setpiece-cars`), 0),
      e.addLevel(C(_, `setpiece-car-blocks`), F),
      t.add(e));
  }
  if (f.size) {
    let e = new o();
    ((e.name = `setpiece-detail`),
      e.addLevel(C(f, `setpiece-detail`), 0),
      e.addLevel(new c(), P),
      t.add(e));
  }
  return ((t.userData.merged = !0), t);
}
