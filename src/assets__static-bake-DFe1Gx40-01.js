// assets__static-bake-DFe1Gx40 01 — math
// Lines 1-335 of readable/assets__static-bake-DFe1Gx40.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  Bt as e,
  Gt as t,
  Hn as n,
  It as r,
  L as i,
  Nt as a,
  Rt as o,
  Vn as s,
  W as c,
  X as l,
  _n as u,
  at as d,
  dn as f,
  ot as p,
  qt as m,
  v as h,
} from "./graphics-quality-CrL3qbU3.js";
var g = 0.03,
  _ = 4,
  v = (e, t, n) =>
    `${Math.round(e * 1e3)},${Math.round(t * 1e3)},${Math.round(n * 1e3)}`;
function y(e, t, n) {
  let [r, i, a, o, s, c] = e.c,
    l = (a - r) * (n - i) - (o - i) * (t - r),
    u = (s - a) * (n - o) - (c - o) * (t - a),
    d = (r - s) * (n - c) - (i - c) * (t - s);
  return (
    (l > 1e-6 && u > 1e-6 && d > 1e-6) || (l < -1e-6 && u < -1e-6 && d < -1e-6)
  );
}
var b =
  typeof location < `u` &&
  new URLSearchParams(location.search).get(`coplanar`) === `0`;
function x(e, { lift: t = g } = {}) {
  if (b && t) return { geos: e.slice(), patches: 0, conflicts: 0, lifted: 0 };
  let n = [],
    r = [];
  e.forEach((e, t) => {
    let i = e?.attributes?.position;
    if (!i) return;
    let a = e.index,
      o = !!e.userData?.coplanarSequential,
      s = a ? a.count : i.count,
      c = (e) => (a ? a.getX(e) : e),
      l = [],
      u = (e) => {
        for (; l[e] !== e;) e = l[e] = l[l[e]];
        return e;
      },
      d = new Map(),
      f = [];
    for (let e = 0; e + 2 < s; e += 3) {
      let n = [c(e), c(e + 1), c(e + 2)],
        r = i.getY(n[0]);
      if (
        Math.abs(i.getY(n[1]) - r) > 0.001 ||
        Math.abs(i.getY(n[2]) - r) > 0.001
      )
        continue;
      let s = [
          i.getX(n[0]),
          i.getZ(n[0]),
          i.getX(n[1]),
          i.getZ(n[1]),
          i.getX(n[2]),
          i.getZ(n[2]),
        ],
        p = (s[2] - s[0]) * (s[5] - s[1]) - (s[3] - s[1]) * (s[4] - s[0]);
      if (p > -1e-4) continue;
      let m = {
        g: t,
        v: o ? [e, e + 1, e + 2] : n,
        y: r,
        c: s,
        area: -p / 2,
        i: f.length,
        k: e,
        keys: n.map((e) => v(i.getX(e), i.getY(e), i.getZ(e))),
      };
      if ((l.push(m.i), f.push(m), a && !o))
        for (let e of n) {
          let t = d.get(e);
          t === void 0 ? d.set(e, m.i) : (l[u(m.i)] = u(t));
        }
      else {
        let t = f[f.length - 2];
        t &&
          t.k === e - 3 &&
          m.keys.filter((e) => t.keys.includes(e)).length >= 2 &&
          (l[u(m.i)] = u(t.i));
      }
    }
    let p = new Map();
    for (let e of f) {
      let i = u(e.i);
      p.has(i) ||
        (p.set(i, r.length),
        r.push({ g: t, area: 0, verts: new Set(), y: e.y, lift: 0 }));
      let a = r[p.get(i)];
      ((e.patch = p.get(i)), (a.area += e.area));
      for (let t of e.v) a.verts.add(t);
      n.push(e);
    }
  });
  let i = new Map(),
    a = new Set();
  for (let e of n) {
    let t = [e.c[0], e.c[2], e.c[4]],
      n = [e.c[1], e.c[3], e.c[5]];
    e.b = [Math.min(...t), Math.min(...n), Math.max(...t), Math.max(...n)];
    let r = Math.round(e.y * 500);
    for (let t = Math.floor(e.b[0] / _); t <= Math.floor(e.b[2] / _); t++)
      for (let n = Math.floor(e.b[1] / _); n <= Math.floor(e.b[3] / _); n++) {
        for (let o of [-1, 0, 1]) {
          let s = i.get(`${r + o}:${t}:${n}`);
          if (s)
            for (let t of s) {
              if (t.patch === e.patch || Math.abs(t.y - e.y) > 0.002) continue;
              let n =
                t.patch < e.patch
                  ? `${t.patch}:${e.patch}`
                  : `${e.patch}:${t.patch}`;
              if (a.has(n)) continue;
              let r = Math.max(t.b[0], e.b[0]),
                i = Math.max(t.b[1], e.b[1]),
                o = Math.min(t.b[2], e.b[2]) - r,
                s = Math.min(t.b[3], e.b[3]) - i;
              if (o < 0.05 || s < 0.05) continue;
              let c = 0;
              for (let n = 0; n < 4 && c < 2; n++)
                for (let a = 0; a < 4; a++) {
                  let l = r + (o * (n + 0.5)) / 4,
                    u = i + (s * (a + 0.5)) / 4;
                  if (y(t, l, u) && y(e, l, u) && ++c >= 2) break;
                }
              c >= 2 && a.add(n);
            }
        }
        let o = `${r}:${t}:${n}`,
          s = i.get(o);
        (s || i.set(o, (s = [])), s.push(e));
      }
  }
  for (let e of a) {
    let [t, n] = e.split(`:`).map(Number),
      i = r[t],
      a = r[n];
    (i.area < a.area || (i.area === a.area && t > n) ? i : a).lift++;
  }
  let o = e.slice(),
    s = new Map(),
    c = new Map(),
    l = 0;
  for (let n of r) {
    if (!n.lift) continue;
    if (e[n.g].index && e[n.g].userData?.coplanarSequential) {
      let r = c.get(n.g);
      r || c.set(n.g, (r = new Float64Array(e[n.g].index.count)));
      for (let e of n.verts) r[e] = n.lift * t;
      l++;
      continue;
    }
    let r = s.get(n.g);
    r || ((r = e[n.g].clone()), s.set(n.g, r), (o[n.g] = r));
    let i = r.attributes.position;
    for (let e of n.verts) i.setY(e, i.getY(e) + n.lift * t);
    l++;
  }
  for (let [t, n] of c) {
    let r = S(e[t], n);
    ((o[t] = r), s.set(t, r));
  }
  for (let e of s.values())
    ((e.attributes.position.needsUpdate = !0),
      e.computeBoundingBox(),
      e.computeBoundingSphere());
  return { geos: o, patches: r.length, conflicts: a.size, lifted: l };
}
function S(e, t) {
  let n = e.clone(),
    r = e.attributes.position.count,
    i = new Float64Array(r).fill(NaN),
    a = [],
    o = new Map(),
    s = new Uint32Array(e.index.count);
  for (let n = 0; n < s.length; n++) {
    let c = e.index.getX(n),
      l = t[n];
    if ((Number.isNaN(i[c]) && (i[c] = l), i[c] === l)) {
      s[n] = c;
      continue;
    }
    let u = `${c}:${l}`,
      d = o.get(u);
    (d === void 0 && ((d = r + a.length), o.set(u, d), a.push([c, l])),
      (s[n] = d));
  }
  for (let [e, t] of Object.entries(n.attributes)) {
    if (!a.length) break;
    let e = new t.array.constructor((r + a.length) * t.itemSize);
    e.set(t.array);
    for (let n = 0; n < a.length; n++) {
      let i = a[n][0] * t.itemSize;
      e.set(t.array.subarray(i, i + t.itemSize), (r + n) * t.itemSize);
    }
    ((t.array = e), (t.count = r + a.length));
  }
  let c = n.index;
  ((c.array = r + a.length <= 65536 ? new Uint16Array(s) : s),
    (c.count = c.array.length));
  let l = n.attributes.position;
  for (let e = 0; e < r; e++) i[e] && l.setY(e, l.getY(e) + i[e]);
  for (let e = 0; e < a.length; e++)
    a[e][1] && l.setY(r + e, l.getY(r + e) + a[e][1]);
  return n;
}
var C = [
    `map`,
    `normalMap`,
    `bumpMap`,
    `emissiveMap`,
    `alphaMap`,
    `aoMap`,
    `roughnessMap`,
    `metalnessMap`,
    `lightMap`,
  ],
  w = r.prototype.onBeforeCompile,
  T = new c(),
  E = new c();
new o();
function D(e) {
  return (
    !!e &&
    e.type === `MeshStandardMaterial` &&
    e.onBeforeCompile === w &&
    !e.userData?.nightGlow &&
    !e.userData?.noBake &&
    !e.wireframe &&
    e.blending === 1
  );
}
function O(e, t, n = !1) {
  return [
    C.map((t) => (n ? `` : (e[t]?.uuid ?? ``))).join(`,`),
    e.transparent ? `T` : `O`,
    e.side,
    e.alphaTest,
    e.flatShading ? `F` : ``,
    e.depthWrite ? `W` : ``,
    e.alphaToCoverage ? `A` : ``,
    e.fog ? `f` : ``,
    e.toneMapped ? `t` : ``,
    e.normalMap ? e.normalScale.x.toFixed(2) + e.normalScale.y.toFixed(2) : ``,
    e.bumpMap ? e.bumpScale : ``,
    (e.emissiveMap, ``),
    t ? `C` : ``,
  ].join(`|`);
}
var k = new WeakMap();
function A(e) {
  if (k.has(e)) return k.get(e);
  let t = null;
  try {
    let n = e.image,
      r = n?.width,
      i = n?.height;
    if (r && i) {
      let e = Math.min(128, r),
        a = Math.min(128, i);
      if (n.data && n.data.length >= r * i * 4 && e === r && a === i)
        t = { w: e, h: a, d: n.data };
      else if (!n.data && typeof OffscreenCanvas == `function`) {
        let r = new OffscreenCanvas(e, a).getContext(`2d`, {
          willReadFrequently: !0,
        });
        (r.drawImage(n, 0, 0, e, a),
          (t = { w: e, h: a, d: r.getImageData(0, 0, e, a).data }));
      }
    }
  } catch {
    t = null;
  }
  return (k.set(e, t), t);
}
var j = (e) =>
    !!e.map &&
    !e.transparent &&
    !e.alphaTest &&
    !e.alphaMap &&
    !(e.emissiveMap && e.emissive.getHex() !== 0) &&
    !!A(e.map),
  M = new s(),
  N = new c();
function P(e, t, n, r) {
  let i = A(e);
  e.transformUv(M.set(t, n));
  let o = Math.min(i.w - 1, Math.max(0, Math.floor(M.x * i.w))),
    s = (Math.min(i.h - 1, Math.max(0, Math.floor(M.y * i.h))) * i.w + o) * 4;
  return (
    r.setRGB(
      i.d[s] / 255,
      i.d[s + 1] / 255,
      i.d[s + 2] / 255,
      e.colorSpace === `srgb` ? u : a,
    ),
    r
  );
}
function F(e) {
  let t = [],
    n = new Map(),
    r = new Map();
  for (let i of e) {
    E.copy(i.emissive).multiplyScalar(i.emissiveIntensity ?? 1);
    let e = new Float32Array([i.roughness, i.metalness, E.r, E.g, E.b]),
      a = new Uint32Array(e.buffer).join(`,`),
      o = n.get(a);
    (o === void 0 && ((o = t.length), n.set(a, o), t.push(e)), r.set(i, o));
  }
  let i = Math.max(1, Math.ceil(t.length / 1024)),
    a = Math.max(1, Math.ceil(t.length / i)),
    o = new Float32Array(i * a * 8);
  t.forEach((e, t) => o.set(e, t * 8));
  let s = new l(o, i * 2, a, f, p);
  return (
    (s.name = `static-bake material palette`),
    (s.minFilter = s.magFilter = m),
    (s.generateMipmaps = !1),
    (s.needsUpdate = !0),
    { texture: s, ids: r }
  );
}
