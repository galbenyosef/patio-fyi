/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  $ as e,
  B as t,
  F as n,
  I as r,
  K as i,
  L as a,
  Lt as o,
  R as s,
  Rt as c,
  U as l,
  Ut as u,
  V as d,
  Z as f,
  _n as p,
  an as m,
  en as h,
  et as g,
  gt as _,
  kt as v,
  lt as y,
  mn as b,
  mt as ee,
  rt as te,
  tn as ne,
  v as x,
  wn as S,
  zn as C,
  zt as w,
} from "./graphics-quality-BsjABS0s.js";
import { t as T } from "./static-bake-DEfkgcUk.js";
import { t as E } from "./decor-kit-DeQwKaKF.js";
import {
  PANE_HP as D,
  craneAt as re,
  craneBrokeAt as ie,
  fabricDown as O,
  jamAt as k,
  jibSegment as A,
  paneBox as j,
  paneFracture as M,
  paneShards as ae,
  paneTorn as N,
  powerAt as P,
} from "./meridian-sim-Cefyo3f2.js";
var F = 2048,
  I = 4,
  L = 220,
  R = 24,
  oe = 512,
  z = (e, t) =>
    Math.max(0, Math.min(3, Math.floor((e + 40) / 20))) + 4 * (t < 0 ? 0 : 1);
function se(e) {
  return e.map
    ? `tex`
    : e.transparent && e.opacity < 0.95
      ? `glass`
      : e.side === 2
        ? `double`
        : e.metalness > 0.5 && e.roughness < 0.5
          ? `shiny`
          : `matte`;
}
function ce(e, t, n) {
  let i = e.attributes.position.count,
    a = new Float32Array(i * 4);
  for (let e = 0; e < i; e++)
    ((a[e * 4] = t.r),
      (a[e * 4 + 1] = t.g),
      (a[e * 4 + 2] = t.b),
      (a[e * 4 + 3] = n));
  e.setAttribute(`color`, new r(a, 4));
}
function B(e) {
  let t = e.index ? e.toNonIndexed() : e.clone();
  for (let e of Object.keys(t.attributes))
    [`position`, `normal`, `uv`, `color`].includes(e) || t.deleteAttribute(e);
  return (
    t.attributes.normal || t.computeVertexNormals(),
    t.attributes.uv ||
      t.setAttribute(
        `uv`,
        new r(new Float32Array(t.attributes.position.count * 2), 2),
      ),
    t.clearGroups(),
    t
  );
}
function le(e, t, n) {
  let r = n.decor ?? [];
  if (!r.length) return null;
  let i = performance.now(),
    a = new Map(),
    l = new Map(),
    d = (e) => e.k + `:` + e.s + (e.o ? `:` + JSON.stringify(e.o) : ``),
    f = (e) =>
      !!e.emissiveMap ||
      (e.emissiveIntensity >= 0.3 &&
        e.emissive &&
        e.emissive.r + e.emissive.g + e.emissive.b > 0.05),
    p = new Map();
  for (let t of r) {
    let n = d(t);
    if (a.has(n)) continue;
    let r;
    try {
      r = E(t.k, t.s, t.o);
    } catch (t) {
      (e.warn?.(`meridian decor ${n}: ${t.message}`), a.set(n, []));
      continue;
    }
    r.updateMatrixWorld(!0);
    let i = [],
      o = new Map(),
      s = /^exit/.test(t.k);
    (r.traverse((e) => {
      if (!e.isMesh || !e.visible) return;
      let t = (Array.isArray(e.material) ? e.material : [e.material])[0];
      if (t.alphaMap) return;
      if (s && f(t)) {
        let n = e.geometry.clone();
        (n.applyMatrix4(e.matrixWorld),
          (o.get(t) ?? o.set(t, []).get(t)).push(n));
        return;
      }
      let n = se(t),
        r = B(e.geometry);
      if (
        (r.applyMatrix4(e.matrixWorld),
        ce(r, t.color, n === `glass` ? t.opacity : 1),
        n === `tex`)
      ) {
        let e = t.map;
        if (!p.has(e)) {
          r.computeBoundingBox();
          let t = r.boundingBox.getSize(new C()),
            n = Math.max(t.x, t.y, t.z);
          p.set(e, {
            img: e.image,
            repeat: [e.repeat.x, e.repeat.y],
            want: Math.max(R, Math.min(oe, n * L)),
          });
        }
        i.push({ cls: n, geo: r, tex: e });
      } else i.push({ cls: n, geo: r });
    }),
      a.set(n, i),
      o.size &&
        l.set(
          n,
          [...o].map(([e, t]) => {
            let n = t.length > 1 ? x(t.map(B), !1) : t[0];
            return (
              t.length > 1 && t.forEach((e) => e.dispose()),
              { mat: e, geo: n }
            );
          }),
        ),
      r.traverse((e) => {
        e.isMesh && e.geometry.dispose();
      }));
  }
  let h = [...p.values()],
    g = 1;
  {
    let e = h.reduce((e, t) => {
      let n = t.img.width / t.img.height,
        r = n >= 1 ? t.want : t.want * n,
        i = n >= 1 ? t.want / n : t.want;
      return e + (r + 8) * (i + 8);
    }, 0);
    e > F * F * 0.82 && (g = Math.sqrt((F * F * 0.82) / e));
  }
  let ee = (e) => {
      let t = 0,
        n = 0,
        r = 0,
        i = [];
      for (let a of [...h].sort((e, t) => t.want - e.want)) {
        let o = a.img.width / a.img.height,
          s = Math.max(8, Math.round((o >= 1 ? a.want : a.want * o) * e)),
          c = Math.max(8, Math.round((o >= 1 ? a.want / o : a.want) * e));
        if ((t + s + 8 > F && ((t = 0), (n += r), (r = 0)), n + c + 8 > F))
          return null;
        (i.push([a, t + I, n + I, s, c]),
          (t += s + 8),
          (r = Math.max(r, c + 8)));
      }
      return i;
    },
    te = null;
  for (let e = 0; e < 8 && !(te = ee(g)); e++) g *= 0.9;
  let ne = document.createElement(`canvas`);
  ne.width = ne.height = F;
  let S = ne.getContext(`2d`);
  ((S.fillStyle = `#808080`), S.fillRect(0, 0, F, F));
  for (let [e, t, n, r, i] of te ?? []) {
    let a = (t, n, r, i) => {
      if (e.repeat[0] === 1 && e.repeat[1] === 1) {
        S.drawImage(e.img, t, n, r, i);
        return;
      }
      let a = r / e.repeat[0],
        o = i / e.repeat[1];
      for (let r = 0; r < Math.ceil(e.repeat[0]); r++)
        for (let i = 0; i < Math.ceil(e.repeat[1]); i++)
          S.drawImage(e.img, t + r * a, n + i * o, a, o);
    };
    (S.save(),
      S.beginPath(),
      S.rect(t - I, n - I, r + 8, i + 8),
      S.clip(),
      a(t - I, n - I, r + 8, i + 8),
      S.restore(),
      a(t, n, r, i),
      (e.rect = [
        (t + 0.5) / F,
        1 - (n + i - 0.5) / F,
        (r - 1) / F,
        (i - 1) / F,
      ]));
  }
  let w = new s(ne);
  ((w.colorSpace = b),
    (w.anisotropy = 8),
    (w.generateMipmaps = !0),
    (w.minFilter = v));
  for (let e of a.values())
    for (let t of e) {
      if (t.cls !== `tex`) continue;
      let e = p.get(t.tex).rect;
      if (!e) {
        t.cls = `matte`;
        continue;
      }
      let n = t.geo.attributes.uv;
      for (let t = 0; t < n.count; t++) {
        let r = Math.min(1, Math.max(0, n.getX(t))),
          i = Math.min(1, Math.max(0, n.getY(t)));
        n.setXY(t, e[0] + r * e[2], e[1] + i * e[3]);
      }
      delete t.tex;
    }
  let T = new Map(),
    D = new o(),
    re = new m(),
    ie = new C(0, 1, 0),
    O = new C(1, 1, 1),
    k = new C(),
    A = new C(),
    j = 0,
    M = new Map();
  for (let e of r) {
    let t = d(e),
      n = a.get(t);
    if (!n?.length && !l.has(t)) continue;
    (j++,
      D.compose(
        A.set(e.x, e.y, e.z),
        re.setFromAxisAngle(ie, e.r ?? 0),
        e.sc ? k.setScalar(e.sc) : O,
      ));
    let r = e.g ? `g:` + e.g : z(e.x, e.z);
    l.has(t) && (M.get(t) ?? M.set(t, []).get(t)).push(D.clone());
    for (let e of n) {
      let t = e.cls + `|` + r,
        n = T.get(t);
      n || ((n = []), T.set(t, n));
      let i = e.geo.clone();
      (i.applyMatrix4(D), n.push(i));
    }
  }
  let ae = e.modules?.get?.(`environment`),
    N = {
      matte: new u({ vertexColors: !0, roughness: 0.82, metalness: 0 }),
      shiny: new u({ vertexColors: !0, roughness: 0.32, metalness: 0.75 }),
      double: new u({
        vertexColors: !0,
        roughness: 0.7,
        metalness: 0,
        side: 2,
      }),
      tex: new u({ vertexColors: !0, map: w, roughness: 0.6, metalness: 0 }),
      glass: new u({
        vertexColors: !0,
        transparent: !0,
        depthWrite: !1,
        roughness: 0.08,
        metalness: 0.1,
      }),
    };
  for (let e of Object.values(N)) ae?.configureCaster?.(e);
  let P = new y();
  ((P.name = `m34-decor`), t.add(P));
  let le = [],
    ue = 0,
    de = new Map();
  for (let e of r) {
    if (!e.g) continue;
    let t = de.get(e.g);
    (t ||
      ((t = { node: new y(), x0: 1e9, z0: 1e9, x1: -1e9, z1: -1e9 }),
      (t.node.name = `m34-decor-` + e.g),
      P.add(t.node),
      de.set(e.g, t)),
      (t.x0 = Math.min(t.x0, e.x)),
      (t.x1 = Math.max(t.x1, e.x)),
      (t.z0 = Math.min(t.z0, e.z)),
      (t.z1 = Math.max(t.z1, e.z)));
  }
  for (let e of de.values())
    ((e.cx = (e.x0 + e.x1) / 2),
      (e.cz = (e.z0 + e.z1) / 2),
      (e.r = Math.hypot(e.x1 - e.x0, e.z1 - e.z0) / 2));
  for (let [e, t] of T) {
    let [n] = e.split(`|`),
      r = x(t, !1);
    if ((t.forEach((e) => e.dispose()), !r)) continue;
    (r.computeBoundingSphere(),
      le.push(r),
      (ue += r.attributes.position.count / 3));
    let i = new c(r, N[n]);
    ((i.name = `m34-decor-${e}`),
      (i.castShadow = n === `matte` || n === `shiny`),
      (i.receiveShadow = n !== `glass`));
    let a = e.split(`|`)[1];
    (a.startsWith(`g:`) ? de.get(a.slice(2)).node : P).add(i);
  }
  let fe = new y();
  ((fe.name = `m34-decor-lit`), P.add(fe));
  let V = 0;
  for (let [e, t] of l) {
    let n = M.get(e);
    if (n)
      for (let { mat: r, geo: i } of t) {
        let t = new _(i, r, n.length);
        (n.forEach((e, n) => t.setMatrixAt(n, e)),
          (t.instanceMatrix.needsUpdate = !0),
          t.computeBoundingSphere
            ? t.computeBoundingSphere()
            : (t.frustumCulled = !1),
          (t.name = `m34-decor-lit-` + e),
          fe.add(t),
          le.push(i),
          (ue +=
            (n.length *
              (i.index ? i.index.count : i.attributes.position.count)) /
            3),
          V++);
      }
  }
  for (let e of a.values()) for (let t of e) t.geo.dispose();
  return {
    root: P,
    lit: fe,
    stats: {
      pieces: j,
      variants: a.size,
      textures: p.size,
      atlasScale: +g.toFixed(2),
      draws: le.length,
      litDraws: V,
      groups: de.size,
      tris: Math.round(ue),
      ms: Math.round(performance.now() - i),
    },
    groups: de,
    dispose() {
      t.remove(P);
      for (let e of le) e.dispose();
      for (let e of Object.values(N)) e.dispose();
      w.dispose();
    },
  };
}
var ue = 60,
  de = [
    {
      name: `police`,
      body: 1911364,
      trim: 15265007,
      period: 115,
      phase: 0,
      pts: [
        [28, -47],
        [-34, -46],
        [-50, -40],
        [-56, -30],
        [-56, -5],
      ],
    },
    {
      name: `news`,
      body: 15328991,
      trim: 11740702,
      period: 105,
      phase: 0.4,
      pts: [
        [-56, 15],
        [-56, 34],
        [-49, 41],
        [-30, 42],
        [32, 42],
        [45, 39],
        [49, 31],
        [49, 21],
      ],
    },
  ];
function fe(e, r, a, o) {
  let s = a.floor,
    l = a.plate,
    f = a.scale ?? 1,
    p = [],
    m = (e) => (p.push(e), e),
    h = () => e.modules.get(`audio`),
    _ = {
      ell: m(new S(1, 20, 14)),
      cyl: m(new i(1, 1, 1, 12)),
      box: m(new n(1, 1, 1)),
      disc: m(new d(1, 40)),
    },
    v = m(new u({ color: 1054236, roughness: 0.08, metalness: 0.6 })),
    b = m(new u({ color: 1710877, roughness: 0.6, metalness: 0.5 })),
    ee = m(
      new w({
        color: 2763822,
        transparent: !0,
        opacity: 0.16,
        depthWrite: !1,
        side: 2,
      }),
    ),
    te = (e) => m(new w({ color: e, toneMapped: !1 })),
    ne = te(16722458),
    x = te(2817882),
    T = te(16777215),
    E = te(16724770),
    D = (e, t, n, r, i, a, o, s, l, u = 0, d = 0, f = 0) => {
      let p = new c(t, n);
      return (
        p.position.set(r, i, a),
        p.scale.set(o, s, l),
        p.rotation.set(u, d, f),
        (p.castShadow = !0),
        e.add(p),
        p
      );
    },
    re = (e) => {
      let t = new y(),
        n = m(new u({ color: e.body, roughness: 0.45, metalness: 0.3 })),
        r = m(new u({ color: e.trim, roughness: 0.5, metalness: 0.2 }));
      (D(t, _.ell, n, 0, 0, 0, 2.4, 1.05, 1.02),
        D(t, _.ell, v, 1.45, 0.28, 0, 1, 0.6, 0.8),
        D(t, _.ell, r, -0.2, -0.2, 0, 2.1, 0.5, 1.04),
        D(
          t,
          _.cyl,
          n,
          -4.2,
          0.25,
          0,
          0.26,
          4.8,
          0.26,
          0,
          0,
          Math.PI / 2,
        ).scale.set(0.28, 4.8, 0.2),
        D(t, _.box, n, -6.55, 1.05, 0, 1.1, 1.5, 0.12, 0, 0, -0.35),
        D(t, _.box, r, -5.6, 0.3, 0, 0.6, 0.06, 2.2),
        D(t, _.box, n, -0.3, 1.05, 0, 1.6, 0.4, 0.9),
        D(t, _.cyl, b, 0, 1.35, 0, 0.12, 0.4, 0.12));
      for (let e of [-1, 1]) {
        D(t, _.cyl, b, 0, -1.25, e * 0.95, 0.06, 3.6, 0.06, 0, 0, Math.PI / 2);
        for (let n of [-0.8, 0.9])
          D(t, _.cyl, b, n, -0.95, e * 0.75, 0.05, 0.7, 0.05, e * 0.45, 0, 0);
      }
      let i = new y();
      (i.position.set(0, 1.58, 0),
        t.add(i),
        (D(i, _.disc, ee, 0, 0, 0, 6.1, 6.1, 1, -Math.PI / 2).castShadow = !1));
      let a = new y();
      i.add(a);
      for (let e = 0; e < 2; e++)
        D(a, _.box, b, 0, 0.02, 0, 12, 0.04, 0.28, 0, (e * Math.PI) / 2, 0);
      let o = new y();
      (o.position.set(-6.7, 1.1, 0.18),
        t.add(o),
        (D(o, _.disc, ee, 0, 0, 0, 0.85, 0.85, 1).castShadow = !1));
      let s = D(o, _.box, b, 0, 0, 0.01, 0.12, 1.7, 0.03);
      ((D(t, _.ell, ne, 0.3, -0.1, -1.03, 0.08, 0.08, 0.08).castShadow = !1),
        (D(t, _.ell, x, 0.3, -0.1, 1.03, 0.08, 0.08, 0.08).castShadow = !1));
      let c = D(t, _.ell, T, -6.9, 1.75, 0, 0.1, 0.1, 0.1);
      c.castShadow = !1;
      let l = D(t, _.ell, E, -0.3, 1.3, 0, 0.1, 0.1, 0.1);
      l.castShadow = !1;
      let d = new y();
      return (
        d.position.set(1.6, -1, 0),
        t.add(d),
        D(d, _.cyl, b, 0, 0, 0, 0.24, 0.42, 0.24, 0, 0, Math.PI / 2),
        (D(
          d,
          _.disc,
          v,
          0.22,
          0,
          0,
          0.2,
          0.2,
          1,
          0,
          Math.PI / 2,
          0,
        ).castShadow = !1),
        t.traverse((e) => {
          e.isMesh && (e.frustumCulled = !1);
        }),
        { root: t, blades: a, tb: s, strobe: c, beacon: l, head: d }
      );
    },
    ie = new g(0, 0, 0, `YXZ`),
    O = new C(),
    k = (e) => {
      let n = new t(
        e.map(([e, t]) => new C(e, 0, t)),
        !1,
        `centripetal`,
      );
      return { c: n, len: n.getLength() };
    },
    A = de.map((e, t) => {
      let n = re(e),
        r = k(e.pts.map(([e, t]) => [e * f, t * f]));
      return { t: e, i: t, ...n, path: r, snd: null, prev: null };
    }),
    j = (e, t, n) => {
      let r = Math.max(l.x0, Math.min(l.x1, e.x)),
        i = Math.max(l.z0, Math.min(l.z1, e.z)),
        o = Math.hypot(e.x - r, e.z - i) || 1,
        c = (r - e.x) / o,
        u = (i - e.z) / o,
        d = e.y - s,
        f = a.ceil - s - 0.6,
        p = d > f ? (f * o) / (d - f) : 40,
        m = Math.min(
          p,
          Math.max(
            2.5,
            5 +
              7 * (0.5 + 0.5 * Math.sin(t * 0.23 + n * 2.1)) +
              3 * Math.sin(t * 0.61 + n),
          ),
        ),
        h = 6 * Math.sin(t * 0.17 + n * 1.3) + 2.5 * Math.sin(t * 0.53 + n * 4);
      return [r + c * m - u * h, s + 0.02, i + u * m + c * h];
    };
  return {
    update(e) {
      let t = o() / ue;
      for (let n of A) {
        let { t: r, i } = n,
          a = 0.5 - 0.5 * Math.cos(2 * Math.PI * (t / r.period + r.phase)),
          o = n.path.c
            .getPointAt(Math.min(1, Math.max(0, a)), O.set(0, 0, 0))
            .clone();
        o.y =
          s +
          7.6 * f +
          1.1 * Math.sin(t * 0.4 + i * 2) +
          0.4 * Math.sin(t * 1.3 + i);
        let c = n.prev
          ? o.clone().sub(n.prev).divideScalar(Math.max(0.001, e))
          : new C();
        n.prev = o.clone();
        let l = j(o, t, i),
          u = Math.atan2(-(l[2] - o.z), l[0] - o.x),
          d =
            u +
            Math.max(
              -0.5,
              Math.min(0.5, (c.x * Math.sin(u) + c.z * Math.cos(u)) * 0.04),
            );
        (ie.set(
          0,
          d,
          Math.max(
            -0.12,
            Math.min(0.12, -(c.x * Math.cos(u) - c.z * Math.sin(u)) * 0.012),
          ),
          `YXZ`,
        ),
          n.root.position.copy(o),
          n.root.quaternion.setFromEuler(ie),
          n.root.updateMatrixWorld(),
          (n.blades.rotation.y = t * 28),
          (n.tb.rotation.z = t * 90),
          (n.strobe.visible = (t * 1.1 + i * 0.37) % 1 < 0.07),
          (n.beacon.visible = (t * 0.9 + i * 0.2) % 1 < 0.14));
        let p = h();
        if (p) {
          if (n.snd?.alive?.()) n.snd.setPosition([o.x, o.y, o.z]);
          else
            try {
              ((n.snd = p.play(`vehicle_rotor`, {
                pos: [o.x, o.y, o.z],
                volume: 0.32,
                open: !0,
                priority: 4,
              })),
                n.snd?.setRpm?.(0.8));
            } catch {
              n.snd = null;
            }
        }
      }
    },
    dispose() {
      for (let e of A) {
        try {
          e.snd?.stop?.();
        } catch {}
        r.remove(e.root);
      }
      for (let e of p) e.dispose?.();
    },
  };
}
var V = Math.PI * 2,
  H = (e) => {
    let t = (e * 2654435761) | 0;
    return (
      (t ^= t >>> 15),
      (t = Math.imul(t, 2246822519)),
      (t ^= t >>> 13),
      ((t ^ (t >>> 16)) >>> 0) / 4294967296
    );
  },
  pe = {
    monitor: [
      [0, 0, 0, 0.22, 0.02, 0.16, 2237993],
      [0, 0.02, 0.05, 0.04, 0.16, 0.03, 2764337],
      [0, 0.13, 0, 0.56, 0.34, 0.035, 1447962],
      [0, 0.15, -0.019, 0.5, 0.29, 0.004, 16777215, `screen`],
    ],
    chair: [
      [0, 0.04, 0, 0.56, 0.04, 0.56, 2040099],
      [0, 0.08, 0, 0.05, 0.34, 0.05, 3816768],
      [0, 0.42, 0, 0.48, 0.08, 0.46, 2895668],
      [0, 0.5, 0.22, 0.46, 0.5, 0.06, 2895668],
      [-0.25, 0.5, 0, 0.04, 0.2, 0.3, 2040099],
      [0.25, 0.5, 0, 0.04, 0.2, 0.3, 2040099],
    ],
    "chair-exec": [
      [0, 0.04, 0, 0.6, 0.04, 0.6, 1710618],
      [0, 0.08, 0, 0.05, 0.36, 0.05, 3816768],
      [0, 0.44, 0, 0.52, 0.1, 0.5, 2760988],
      [0, 0.52, 0.24, 0.5, 0.72, 0.08, 2760988],
      [-0.28, 0.52, 0, 0.05, 0.22, 0.34, 2760988],
      [0.28, 0.52, 0, 0.05, 0.22, 0.34, 2760988],
    ],
    "chair-guest": [
      [-0.2, 0, -0.2, 0.03, 0.44, 0.03, 2829873],
      [0.2, 0, -0.2, 0.03, 0.44, 0.03, 2829873],
      [-0.2, 0, 0.2, 0.03, 0.9, 0.03, 2829873],
      [0.2, 0, 0.2, 0.03, 0.9, 0.03, 2829873],
      [0, 0.42, 0, 0.46, 0.06, 0.46, 3886438],
      [0, 0.55, 0.21, 0.44, 0.34, 0.04, 3886438],
    ],
    "chair-stack": [
      [-0.19, 0, -0.19, 0.025, 0.44, 0.025, 10133668],
      [0.19, 0, -0.19, 0.025, 0.44, 0.025, 10133668],
      [-0.19, 0, 0.19, 0.025, 0.82, 0.025, 10133668],
      [0.19, 0, 0.19, 0.025, 0.82, 0.025, 10133668],
      [0, 0.42, 0, 0.42, 0.04, 0.42, 12080954],
      [0, 0.58, 0.2, 0.4, 0.26, 0.03, 12080954],
    ],
    phone: [
      [0, 0, 0, 0.2, 0.06, 0.18, 1842720],
      [0, 0.06, 0.03, 0.18, 0.03, 0.05, 2500908],
    ],
    paper: [
      [0, 0, 0, 0.3, 0.035, 0.22, 15263454],
      [0.02, 0.035, 0.01, 0.3, 0.02, 0.22, 14278096],
      [-0.01, 0.055, -0.01, 0.21, 0.012, 0.3, 15855592],
    ],
    "paper-pile": [
      [0, 0, 0, 0.42, 0.3, 0.32, 10255442],
      [0.03, 0.3, -0.02, 0.42, 0.3, 0.32, 10847834],
      [0, 0.6, 0.02, 0.3, 0.04, 0.22, 15263454],
    ],
    magazines: [
      [0, 0, 0, 0.28, 0.012, 0.21, 12141370],
      [0.06, 0.012, 0.04, 0.28, 0.012, 0.21, 3828384],
      [-0.04, 0.024, -0.03, 0.28, 0.012, 0.21, 14735552],
    ],
    "lamp-desk": [
      [0, 0, 0, 0.16, 0.02, 0.16, 1842720],
      [0, 0.02, 0, 0.02, 0.36, 0.02, 2764080],
      [0, 0.36, -0.08, 0.02, 0.02, 0.2, 2764080],
      [0, 0.3, -0.18, 0.16, 0.08, 0.12, 2764080],
      [0, 0.29, -0.18, 0.13, 0.01, 0.1, 16777215, `lamp`],
    ],
    photo: [
      [0, 0, 0, 0.16, 0.2, 0.02, 4075042],
      [0, 0.02, -0.012, 0.13, 0.16, 0.004, 9084592],
    ],
    trophy: [
      [0, 0, 0, 0.12, 0.05, 0.12, 2761760],
      [0, 0.05, 0, 0.05, 0.14, 0.05, 13214266],
      [0, 0.19, 0, 0.12, 0.1, 0.08, 13214266],
    ],
    books: [
      [-0.35, 0, 0, 0.05, 0.26, 0.2, 7023142],
      [-0.28, 0, 0, 0.06, 0.24, 0.2, 2770022],
      [-0.2, 0, 0, 0.04, 0.28, 0.2, 4086328],
      [-0.12, 0, 0, 0.07, 0.23, 0.2, 9071162],
      [-0.02, 0, 0, 0.05, 0.27, 0.2, 2763306],
      [0.07, 0, 0, 0.06, 0.25, 0.2, 6961754],
      [0.16, 0, 0, 0.05, 0.24, 0.2, 3816042],
      [0.26, 0, 0, 0.08, 0.22, 0.2, 8007210],
    ],
    tv: [
      [0, 0, 0, 1.5, 0.86, 0.06, 921360],
      [0, 0.03, -0.031, 1.42, 0.8, 0.004, 16777215, `tv`],
    ],
    "coffee-pot": [
      [0, 0, 0, 0.14, 0.18, 0.14, 2761504],
      [0, 0.18, 0, 0.1, 0.04, 0.1, 1710618],
    ],
    "water-jug": [[0, 0, 0, 0.12, 0.22, 0.12, 10469584]],
    speakerphone: [[0, 0, 0, 0.26, 0.04, 0.26, 1974306]],
    mug: [
      [0, 0, 0, 0.08, 0.1, 0.08, 15262422],
      [0.055, 0.03, 0, 0.03, 0.05, 0.02, 15262422],
    ],
    "water-cooler": [
      [0, 0, 0, 0.32, 0.95, 0.32, 15131870],
      [0, 0.95, 0, 0.27, 0.44, 0.27, 8369878],
      [0, 0.6, -0.17, 0.06, 0.08, 0.04, 3894952],
      [0, 0.45, -0.16, 0.2, 0.02, 0.1, 10132122],
    ],
    microwave: [
      [0, 0, 0, 0.5, 0.3, 0.36, 14210768],
      [-0.06, 0.04, -0.181, 0.3, 0.22, 0.004, 1053204],
    ],
    "coffee-machine": [
      [0, 0, 0, 0.3, 0.42, 0.34, 1908513],
      [0, 0.08, -0.171, 0.12, 0.02, 0.004, 16777215, `led`],
    ],
    noticeboard: [
      [0, 0, 0, 1.3, 0.9, 0.03, 10122832],
      [-0.3, 0.2, -0.02, 0.2, 0.2, 0.006, 15917168],
      [0.25, 0.35, -0.02, 0.2, 0.26, 0.006, 15263454],
      [0.1, -0.1 + 0.4, -0.02, 0.18, 0.18, 0.006, 15899296],
      [-0.4, 0.55, -0.02, 0.22, 0.14, 0.006, 10146032],
    ],
    bin: [[0, 0, 0, 0.3, 0.38, 0.3, 2764080]],
    "plant-desk": [
      [0, 0, 0, 0.12, 0.1, 0.12, 12085818],
      [0, 0.1, 0, 0.2, 0.16, 0.2, 4156982],
    ],
    "planter-tall": [
      [0, 0, 0, 0.5, 0.45, 0.5, 2894376],
      [0, 0.45, 0, 0.06, 0.6, 0.06, 4930346],
      [0, 0.9, 0, 0.7, 0.45, 0.6, 3497774],
      [0.1, 1.25, -0.05, 0.55, 0.4, 0.5, 4156982],
      [-0.05, 1.55, 0.05, 0.4, 0.3, 0.4, 4880958],
    ],
    "planter-small": [
      [0, 0, 0, 0.36, 0.36, 0.36, 2894376],
      [0, 0.36, 0, 0.46, 0.38, 0.46, 4156982],
    ],
    sprinkler: [
      [0, -0.05, 0, 0.05, 0.05, 0.05, 12633286],
      [0, -0.07, 0, 0.1, 0.015, 0.1, 13217866],
    ],
    extinguisher: [
      [0, -0.5, -0.07, 0.15, 0.5, 0.15, 11739676],
      [0, 0, -0.07, 0.05, 0.08, 0.05, 1710618],
      [0, -0.62, -0.02, 0.3, 0.1, 0.02, 15263454],
    ],
    bucket: [
      [0, 0, 0, 0.34, 0.3, 0.34, 3893928],
      [0, 0.3, 0, 0.36, 0.02, 0.36, 2764080],
    ],
    whiteboard: [
      [0, 0, 0, 0.05, 1, 0.05, 10133668],
      [0, 0, 0, 1.4, 0.05, 0.4, 10133668],
      [0, 1, 0, 1.5, 1, 0.03, 15527660],
      [-0.3, 1.3, -0.02, 0.5, 0.06, 0.004, 2775728],
      [0.2, 1.55, -0.02, 0.4, 0.05, 0.004, 11549226],
    ],
    "sign-outoforder": [
      [0, 0, 0, 0.34, 0.24, 0.004, 15789798],
      [0, 0.15, -0.003, 0.26, 0.04, 0.002, 11739676],
    ],
    bucketTarp: [[0, 0, 0, 0.3, 0.3, 0.3, 2764080]],
  },
  me = {
    monitor: `screen`,
    tv: `screen`,
    phone: `pop`,
    paper: `paper`,
    "paper-pile": `paper`,
    magazines: `paper`,
    "water-cooler": `water`,
    sprinkler: `spray`,
    mug: `pop`,
    "coffee-pot": `pop`,
    "water-jug": `water`,
    photo: `pop`,
    trophy: `pop`,
    "lamp-desk": `pop`,
    "plant-desk": `pop`,
    microwave: `pop`,
    "coffee-machine": `pop`,
    noticeboard: `paper`,
    "sign-outoforder": `paper`,
    speakerphone: `pop`,
    books: `paper`,
    extinguisher: `spray`,
  };
function he(e, t) {
  let i = [];
  for (let [a, o, s, c, u, d, f, p] of e) {
    if (t) continue;
    let e = p ? 1184790 : f,
      m = new n(c, u, d);
    m.translate(a, o + u / 2, s);
    let h = new l(e),
      g = m.attributes.position.count,
      _ = new Float32Array(g * 3);
    for (let e = 0; e < g; e++)
      ((_[e * 3] = h.r), (_[e * 3 + 1] = h.g), (_[e * 3 + 2] = h.b));
    (m.setAttribute(`color`, new r(_, 3)), i.push(m));
  }
  if (!i.length) return null;
  let a = x(i);
  return (i.forEach((e) => e.dispose()), a.computeBoundingBox(), a);
}
function ge(e, t = 1024) {
  let n = document.createElement(`canvas`);
  n.width = n.height = t;
  let r = n.getContext(`2d`);
  ((r.fillStyle = `#000`), r.fillRect(0, 0, t, t));
  let i = (e * 2654435761) >>> 0,
    a = () => {
      i = (i + 1831565813) >>> 0;
      let e = i;
      return (
        (e = Math.imul(e ^ (e >>> 15), e | 1)),
        (e ^= e + Math.imul(e ^ (e >>> 7), e | 61)),
        ((e ^ (e >>> 14)) >>> 0) / 4294967296
      );
    },
    o = t / 2,
    c = t / 2;
  ((r.lineCap = `round`), (r.lineJoin = `round`));
  let l = r.createRadialGradient(o, c, 0, o, c, t * 0.16);
  (l.addColorStop(0, `rgba(255,255,255,.62)`),
    l.addColorStop(0.35, `rgba(255,255,255,.3)`),
    l.addColorStop(0.7, `rgba(255,255,255,.08)`),
    l.addColorStop(1, `rgba(255,255,255,0)`),
    (r.fillStyle = l),
    r.beginPath(),
    r.arc(o, c, t * 0.16, 0, V),
    r.fill());
  for (let e = 0; e < 1400; e++) {
    let e = a() * V,
      n = a() ** 1.7 * t * 0.13,
      i = 0.4 + a() * 1.6;
    ((r.fillStyle =
      `rgba(255,255,255,` +
      ((0.15 + a() * 0.55) * Math.max(0, 1 - n / (t * 0.14))).toFixed(3) +
      `)`),
      r.fillRect(o + Math.cos(e) * n, c + Math.sin(e) * n, i, i));
  }
  let u = (e, t, n) => {
      for (let [i, a] of [
        [3.2, 0.14],
        [1, 0.95],
      ])
        for (let o = 1; o < e.length; o++) {
          let s = o / (e.length - 1),
            c = (t + (n - t) * s) * i;
          ((r.strokeStyle =
            `rgba(255,255,255,` + (a * (1 - s * 0.35)).toFixed(3) + `)`),
            (r.lineWidth = Math.max(0.5, c)),
            r.beginPath(),
            r.moveTo(e[o - 1][0], e[o - 1][1]),
            r.lineTo(e[o][0], e[o][1]),
            r.stroke());
        }
    },
    d = (e, n, r, i, o, s) => {
      let c = [[e, n]],
        l = Math.max(4, Math.round(i / (t * 0.018))),
        f = 0;
      for (let t = 0; t < l; t++) {
        r += (a() - 0.5) * 0.34 + (a() < 0.08 ? (a() - 0.5) * 1.1 : 0);
        let u = (i / l) * (0.65 + a() * 0.7);
        if (
          ((e += Math.cos(r) * u),
          (n += Math.sin(r) * u),
          (f += u),
          c.push([e, n]),
          s < 2 && t > 1 && a() < 0.13)
        ) {
          let c = a() < 0.5 ? -1 : 1;
          d(
            e,
            n,
            r + c * (0.35 + a() * 0.55),
            (i - f) * (0.35 + a() * 0.35),
            o * (1 - t / l) * 0.6,
            s + 1,
          );
        }
      }
      return (u(c, o, 0.45), c);
    },
    f = 14 + Math.floor(a() * 10),
    p = [];
  for (let e = 0; e < f; e++) {
    let n = (e / f) * V + (a() - 0.5) * (V / f) * 0.7,
      r = t * (0.18 + a() * 0.3);
    p.push({
      a: n,
      len: r,
      pts: d(
        o + Math.cos(n) * t * 0.012,
        c + Math.sin(n) * t * 0.012,
        n,
        r,
        3.4 + a() * 2.4,
        0,
      ),
    });
  }
  let m = (e, t) => {
    for (let n = 1; n < e.length; n++) {
      let r = Math.hypot(e[n - 1][0] - o, e[n - 1][1] - c),
        i = Math.hypot(e[n][0] - o, e[n][1] - c);
      if ((r - t) * (i - t) <= 0) {
        let a = (t - r) / (i - r || 1);
        return [
          e[n - 1][0] + (e[n][0] - e[n - 1][0]) * a,
          e[n - 1][1] + (e[n][1] - e[n - 1][1]) * a,
        ];
      }
    }
    return null;
  };
  for (let [e, n] of [0.045, 0.075, 0.11, 0.155, 0.21, 0.27, 0.34].entries()) {
    let r = t * n;
    for (let n = 0; n < f; n++) {
      if (a() > 0.82 - e * 0.07) continue;
      let i = r * (0.9 + a() * 0.2),
        s = m(p[n].pts, i),
        l = m(p[(n + 1) % f].pts, i * (0.92 + a() * 0.16));
      if (!s || !l) continue;
      let d = [(s[0] + l[0]) / 2, (s[1] + l[1]) / 2],
        h = (a() - 0.3) * t * 0.012,
        g = d[0] - o,
        _ = d[1] - c,
        v = Math.hypot(g, _) || 1,
        y = [d[0] + (g / v) * h, d[1] + (_ / v) * h],
        b = [s];
      for (let e = 1; e < 4; e++) {
        let n = e / 4,
          r =
            n < 0.5
              ? [s[0] + (y[0] - s[0]) * n * 2, s[1] + (y[1] - s[1]) * n * 2]
              : [
                  y[0] + (l[0] - y[0]) * (n - 0.5) * 2,
                  y[1] + (l[1] - y[1]) * (n - 0.5) * 2,
                ];
        b.push([
          r[0] + (a() - 0.5) * t * 0.005,
          r[1] + (a() - 0.5) * t * 0.005,
        ]);
      }
      (b.push(l), u(b, 2.3 - e * 0.22, 1.2 - e * 0.1));
    }
  }
  for (let e = 0; e < 90; e++) {
    let e = a() * V,
      n = t * (0.012 + a() * 0.06),
      r = o + Math.cos(e) * n,
      i = c + Math.sin(e) * n,
      s = e + (a() - 0.5) * 2.4,
      l = t * (0.006 + a() * 0.02);
    u(
      [
        [r, i],
        [
          r + Math.cos(s) * l * 0.5 + (a() - 0.5) * 2,
          i + Math.sin(s) * l * 0.5 + (a() - 0.5) * 2,
        ],
        [r + Math.cos(s) * l, i + Math.sin(s) * l],
      ],
      1.1,
      0.4,
    );
  }
  let h = (e, t, n) => {
    r.beginPath();
    for (let i = 0; i <= n; i++) {
      let s = (i / n) * V,
        l = e + a() * (t - e);
      i
        ? r.lineTo(o + Math.cos(s) * l, c + Math.sin(s) * l)
        : r.moveTo(o + Math.cos(s) * l, c + Math.sin(s) * l);
    }
    r.fill();
  };
  ((r.fillStyle = `rgba(255,255,255,.92)`),
    h(t * 0.012, t * 0.022, 18),
    (r.globalCompositeOperation = `destination-out`),
    (r.fillStyle = `#fff`),
    h(t * 0.0055, t * 0.0085, 14),
    (r.globalCompositeOperation = `source-over`));
  let g = new s(n);
  return ((g.anisotropy = 8), (g.generateMipmaps = !0), (g.minFilter = v), g);
}
function _e(e, t) {
  let n = document.createElement(`canvas`);
  ((n.width = 1024), (n.height = 256));
  let r = n.getContext(`2d`);
  (r.clearRect(0, 0, 1024, 256),
    (r.fillStyle = `#e9e2cf`),
    (r.font = `600 82px Georgia, serif`),
    (r.textAlign = `center`),
    (r.textBaseline = `middle`),
    r.fillText(e, 512, 110),
    (r.font = `400 38px Arial`),
    (r.fillStyle = `#b9b1a0`),
    r.fillText(t, 512, 200));
  let i = new s(n);
  return ((i.colorSpace = b), i);
}
function ve(t, r, i, s, { setGroup: d } = {}) {
  let v = i.meridian;
  if (!v) return null;
  let b = new y();
  ((b.name = `meridian`), r.add(b));
  let x = [],
    S = (...e) => (x.push(...e), e[0]),
    T = v.floor,
    E = v.scale ?? 1,
    F = new o(),
    I = new m(),
    L = new C(),
    R = new C(),
    oe = new C(0, 1, 0),
    z = new o().makeScale(0, 0, 0),
    se = () => null,
    ce = () => t.modules.get(`audio`),
    B = 0,
    ue = S(
      new u({
        vertexColors: !0,
        roughness: 0.78,
        metalness: 0.05,
        flatShading: !0,
      }),
    ),
    de = S(new w({ vertexColors: !0, toneMapped: !0 })),
    ve = new Map();
  for (let [e, t] of v.props.entries()) {
    let n = ve.get(t.kind);
    (n || ((n = { list: [] }), ve.set(t.kind, n)), n.list.push(e));
  }
  let be = v.props.map(() => ({ alive: !0 })),
    xe = [];
  for (let [e, t] of ve) {
    let n = pe[e];
    if (!n) continue;
    let r = he(n, !1),
      i = he(n, !0);
    if (!r) continue;
    (S(r),
      (t.mesh = new _(r, ue, t.list.length)),
      (t.mesh.castShadow = e !== `sprinkler`),
      (t.mesh.receiveShadow = !0),
      (t.mesh.name = `m34-${e}`),
      i &&
        (S(i),
        (t.glow = new _(i, de, t.list.length)),
        (t.glow.name = `m34-${e}-glow`)),
      (t.glow = null));
    let a = r.boundingBox;
    (t.list.forEach((n, r) => {
      let i = v.props[n];
      (I.setFromAxisAngle(oe, i.yaw),
        F.compose(L.set(i.x, i.y, i.z), I, R.set(i.s, i.s, i.s)),
        t.mesh.setMatrixAt(r, F),
        (be[n].kind = e),
        (be[n].k = t),
        (be[n].j = r));
      let o = (Math.max(a.max.x - a.min.x, a.max.z - a.min.z) / 2) * i.s,
        s = (a.max.y - a.min.y) * i.s;
      xe[n] = [
        i.x - o,
        i.y + a.min.y * i.s,
        i.z - o,
        i.x + o,
        i.y + a.min.y * i.s + s,
        i.z + o,
      ];
    }),
      (t.mesh.instanceMatrix.needsUpdate = !0),
      b.add(t.mesh),
      t.glow &&
        ((t.glow.instanceMatrix.needsUpdate = !0),
        t.glow.instanceColor && (t.glow.instanceColor.needsUpdate = !0),
        b.add(t.glow)));
  }
  let Se = null;
  try {
    Se = le(t, b, v);
  } catch (e) {
    t.warn?.(`meridian decor failed: ` + e.message);
  }
  {
    let e = S(_e(`MERIDIAN MUTUAL`, `INSURANCE  ·  SINCE 1921`)),
      t = S(
        new w({ map: e, transparent: !0, toneMapped: !0, color: 13617336 }),
      ),
      n = S(new h(1, 1));
    for (let e of v.props.filter(
      (e) => e.kind === `logo` || e.kind === `logo-lobby`,
    )) {
      let r = new c(n, t);
      (r.position.set(e.x, e.y, e.z), (r.rotation.y = e.yaw + Math.PI));
      let i = e.kind === `logo` ? 3.8 : 2.2;
      (r.scale.set(i * e.s, (i * e.s) / 4, 1), b.add(r));
    }
  }
  let U = v.plate,
    W = U.x1 - U.x0,
    G = U.z1 - U.z0,
    Ce = Math.round(W / 0.6),
    K = Math.round(G / 1.2),
    we = W / Ce,
    Te = G / K,
    Ee = S(new n(we - 0.025, 0.018, Te - 0.025)),
    De = S(new u({ color: 14276300, roughness: 0.95 })),
    q = new _(Ee, De, Ce * K);
  ((q.name = `m34-ceiling-tiles`), (q.receiveShadow = !0));
  let Oe = new Uint8Array(Ce * K),
    ke = (e, t) => {
      let n = v.core;
      return (
        e > n.x0 &&
        e < n.x1 &&
        t > n.z0 &&
        t < n.z1 &&
        !(Math.abs(t) < 2) &&
        !(Math.abs(e) < 1)
      );
    };
  for (let e = 0; e < Ce; e++)
    for (let t = 0; t < K; t++) {
      let n = U.x0 + we * (e + 0.5),
        r = U.z0 + Te * (t + 0.5),
        i = e * K + t;
      if (ke(n, r)) {
        q.setMatrixAt(i, z);
        continue;
      }
      ((Oe[i] = 1),
        F.makeTranslation(n, v.ceil - 0.009, r),
        q.setMatrixAt(i, F));
    }
  ((q.instanceMatrix.needsUpdate = !0), b.add(q));
  {
    let e = S(new n(1, 0.012, 1)),
      t = S(new u({ color: 12170926, roughness: 0.7, metalness: 0.3 })),
      r = [],
      i = [];
    for (let e = 0; e <= Ce; e += 2) r.push(U.x0 + we * e);
    for (let e = 0; e <= K; e++) i.push(U.z0 + Te * e);
    let a = new _(e, t, r.length + i.length),
      o = 0;
    for (let e of r)
      (F.compose(L.set(e, v.ceil - 0.02, 0), I.identity(), R.set(0.024, 1, G)),
        a.setMatrixAt(o++, F));
    for (let e of i)
      (F.compose(L.set(0, v.ceil - 0.02, e), I.identity(), R.set(W, 1, 0.024)),
        a.setMatrixAt(o++, F));
    ((a.instanceMatrix.needsUpdate = !0), b.add(a));
  }
  {
    let e = [];
    for (let t = U.x0 + 2.1; t < U.x1 - 1; t += 3.6)
      for (let n = U.z0 + 1.8; n < U.z1 - 1; n += 3.6) {
        let r = v.core;
        (t > r.x0 - 0.5 &&
          t < r.x1 + 0.5 &&
          n > r.z0 - 0.5 &&
          n < r.z1 + 0.5 &&
          !(Math.abs(n) < 2)) ||
          e.push({ x: t, z: n });
      }
    let t = S(new n(0.6, 0.03, 1.2)),
      r = S(new u({ color: 13225168, roughness: 0.35, metalness: 0.2 })),
      i = new _(t, r, e.length);
    (e.forEach((e, t) => {
      (F.makeTranslation(e.x, v.ceil - 0.012, e.z), i.setMatrixAt(t, F));
    }),
      (i.instanceMatrix.needsUpdate = !0),
      (i.name = `m34-troffers`),
      b.add(i));
  }
  {
    let e = (e, t, r, i, a, o, s, l = 0.6, d = 0.4) => {
      let f = new c(
        S(new n(i, a, o)),
        S(new u({ color: s, roughness: l, metalness: d })),
      );
      return (f.position.set(e, t + a / 2, r), b.add(f), f);
    };
    e(0, v.slab - 0.28, 0, W + 4, 0.28, G + 4, 4869198, 0.95, 0);
    for (let t of [-G * 0.3, G * 0.3])
      e(0, v.ceil + 0.35, t, W - 2, 0.55, 1.1, 10396840, 0.45, 0.6);
    for (let t of [-W * 0.3, W * 0.3])
      e(t, v.ceil + 0.3, 0, 0.8, 0.45, G - 4, 10396840, 0.45, 0.6);
    for (let t of [-8 * E, 8 * E])
      e(0, v.ceil + 0.95, t, W - 2, 0.1, 0.1, 10697258, 0.6, 0.2);
    for (let t of [-G * 0.42, G * 0.42])
      e(0, v.ceil + 1.05, t, W - 2, 0.08, 0.5, 6975088, 0.6, 0.4);
  }
  let J = v.panes,
    Ae = new Map(J.map((e, t) => [e.id, t])),
    je = S(new n(1, 1, 1)),
    Me = S(
      new u({
        color: 10466239,
        transparent: !0,
        opacity: 0.1,
        roughness: 0.3,
        metalness: 0,
        depthWrite: !1,
        side: 2,
      }),
    ),
    Ne = S(
      new u({
        color: 12176598,
        transparent: !0,
        opacity: 0.075,
        roughness: 0.3,
        metalness: 0,
        depthWrite: !1,
        side: 2,
      }),
    ),
    Pe = S(new h(1, 1)),
    Fe = J.filter((e) => e.ext),
    Ie = J.filter((e) => !e.ext),
    Le = new _(je, Me, Fe.length),
    Re = new _(je, Ne, Ie.length);
  ((Le.renderOrder = 3), (Re.renderOrder = 3));
  let ze = [],
    Be = new Map(),
    Ve = 0;
  for (let e = 0; e < 4; e++) {
    let t = S(ge(e * 977 + 13)),
      n = S(
        new u({
          color: 16054522,
          alphaMap: t,
          transparent: !0,
          depthWrite: !1,
          side: 2,
          roughness: 0.12,
          metalness: 0,
        }),
      ),
      r = new _(Pe, n, 160);
    ((r.renderOrder = 4), (r.frustumCulled = !1));
    for (let e = 0; e < 160; e++) r.setMatrixAt(e, z);
    ze.push(r);
  }
  let He = Array(640).fill(null),
    Ue = new m(),
    We = new m(),
    Ge = new C(0, 0, 1),
    Ke = (e) => {
      for (let t of Be.get(e) ?? []) {
        if (He[t] !== e) continue;
        He[t] = null;
        let n = ze[(t / 160) | 0];
        (n.setMatrixAt(t % 160, z), (n.instanceMatrix.needsUpdate = !0));
      }
      Be.delete(e);
    },
    qe = (e, t, n) => {
      let r = j(e),
        i = r[3] - r[0] > r[5] - r[2],
        a = i ? r[0] : r[2],
        o = i ? r[3] : r[5],
        s = Math.min(o - 0.05, Math.max(a + 0.05, i ? t[0] : t[2])),
        c = Math.min(r[4] - 0.05, Math.max(r[1] + 0.05, t[1])),
        l = (e.ext ? 0.85 : 0.62) + H(n) * 0.45;
      l = Math.min(l, 2 * Math.min(s - a, o - s, c - r[1], r[4] - c) + 0.35);
      let u = Ve++ % 640;
      if (He[u]) {
        let e = Be.get(He[u]);
        e && e.splice(e.indexOf(u), 1);
      }
      ((He[u] = e.id),
        Be.has(e.id) || Be.set(e.id, []),
        Be.get(e.id).push(u),
        Ue.setFromAxisAngle(oe, i ? 0 : Math.PI / 2),
        We.setFromAxisAngle(Ge, H(n * 3 + 1) * V),
        Ue.multiply(We));
      let d = i ? (r[2] + r[5]) / 2 : (r[0] + r[3]) / 2,
        f = H(n * 5) < 0.5 ? -1 : 1;
      F.compose(L.set(i ? s : d, c, i ? d : s), Ue, R.set(l * f, l, 1));
      let p = ze[(u / 160) | 0];
      (p.setMatrixAt(u % 160, F), (p.instanceMatrix.needsUpdate = !0));
    },
    Je = [
      S(
        new u({
          color: 11124682,
          transparent: !0,
          opacity: 0.3,
          roughness: 0.12,
          metalness: 0.15,
          depthWrite: !1,
          side: 2,
        }),
      ),
      S(
        new u({
          color: 12768476,
          transparent: !0,
          opacity: 0.26,
          roughness: 0.12,
          metalness: 0.15,
          depthWrite: !1,
          side: 2,
        }),
      ),
    ],
    Ye = S(
      new u({
        color: 14083822,
        transparent: !0,
        opacity: 0.55,
        roughness: 0.1,
        metalness: 0.2,
        depthWrite: !1,
        side: 2,
      }),
    ),
    Xe = [],
    Ze = (e) => {
      let t = Math.hypot(e.b[0] - e.a[0], e.b[1] - e.a[1]) || 1;
      return {
        ax: e.a[0],
        az: e.a[1],
        dx: (e.b[0] - e.a[0]) / t,
        dz: (e.b[1] - e.a[1]) / t,
        y0: e.y0,
      };
    },
    Qe = (e) => {
      let t = Xe[e];
      if (t) {
        for (let e of t) (b.remove(e), e.geometry.dispose());
        Xe[e] = null;
      }
      let n = [[], []],
        r = [],
        i = s();
      for (let t = e * 16; t < Math.min(J.length, (e + 1) * 16); t++) {
        let e = J[t];
        if (N(v, e, i)) continue;
        let a = ae(v, e);
        if (!a) continue;
        let o = M(e),
          s = Ze(e),
          c = o.verts,
          l = n[+!e.ext],
          u = (e) => [
            s.ax + s.dx * c[e * 2],
            s.y0 + c[e * 2 + 1],
            s.az + s.dz * c[e * 2],
          ];
        for (let e = 0; e < o.nt; e++) {
          if (!a.alive[e]) continue;
          let t = o.tris[e * 3],
            n = o.tris[e * 3 + 1],
            i = o.tris[e * 3 + 2];
          l.push(...u(t), ...u(n), ...u(i));
          let d = o.cen[e * 2],
            f = o.cen[e * 2 + 1];
          for (let t = 0; t < 3; t++) {
            let n = o.nb[e * 3 + t];
            if (n < 0 || a.alive[n]) continue;
            let i = o.tris[e * 3 + t],
              l = o.tris[e * 3 + ((t + 1) % 3)],
              p = (e) => {
                let t = d - c[e * 2],
                  n = f - c[e * 2 + 1],
                  r = Math.hypot(t, n) || 1,
                  i = Math.min(0.015, r * 0.4) / r,
                  a = c[e * 2] + t * i,
                  o = c[e * 2 + 1] + n * i;
                return [s.ax + s.dx * a, s.y0 + o, s.az + s.dz * a];
              },
              m = u(i),
              h = u(l),
              g = p(l),
              _ = p(i);
            r.push(...m, ...h, ...g, ...m, ...g, ..._);
          }
        }
      }
      let o = [];
      if (
        (n.forEach((e, t) => {
          if (!e.length) return;
          let n = new a();
          (n.setAttribute(`position`, new te(e, 3)), n.computeVertexNormals());
          let r = new c(n, Je[t]);
          ((r.renderOrder = 3), o.push(r));
        }),
        r.length)
      ) {
        let e = new a();
        (e.setAttribute(`position`, new te(r, 3)), e.computeVertexNormals());
        let t = new c(e, Ye);
        ((t.renderOrder = 4), o.push(t));
      }
      for (let e of o) ((e.name = `m34-broken-glass`), b.add(e));
      Xe[e] = o.length ? o : null;
    };
  x.push({
    dispose() {
      for (let e of Xe) if (e) for (let t of e) t.geometry.dispose();
    },
  });
  let $e = (e, t = 1, n = 0) => {
      let r = j(e),
        i = (r[0] + r[3]) / 2,
        a = (r[1] + r[4]) / 2 - 0.0075,
        o = (r[2] + r[5]) / 2,
        s = r[3] - r[0],
        c = r[4] - r[1] + 0.015,
        l = r[5] - r[2];
      return (
        F.compose(
          L.set(i, a, o),
          I.identity(),
          R.set(Math.max(s, 0.012 * t), c, Math.max(l, 0.012 * t)),
        ),
        F
      );
    },
    et = J.map(() => ({ stage: 0, nb: 0, torn: !1 }));
  (Fe.forEach((e, t) => Le.setMatrixAt(t, $e(e))),
    Ie.forEach((e, t) => Re.setMatrixAt(t, $e(e))),
    Fe.forEach((e, t) => Le.setColorAt(t, new l(1, 1, 1))),
    Ie.forEach((e, t) => Re.setColorAt(t, new l(1, 1, 1))));
  let tt = new Map([
    ...Fe.map((e, t) => [e.id, t]),
    ...Ie.map((e, t) => [e.id, t]),
  ]);
  b.add(Le, Re, ...ze);
  let nt = null,
    rt = [];
  {
    let e = S(new n(1, 1, 1)),
      t = S(new u({ color: 2830131, roughness: 0.5, metalness: 0.6 })),
      r = [];
    for (let e of Fe) {
      let t = j(e),
        n = t[3] - t[0] > t[5] - t[2];
      r.push(
        n
          ? [t[0], T, t[2] + 0.03, 0.07, v.ceil - T, 0.14]
          : [t[0] + 0.03, T, t[2], 0.14, v.ceil - T, 0.07],
      );
    }
    for (let [e, t, n, i] of [
      [0, v.plate.z0, W, 0.16],
      [0, v.plate.z1, W, 0.16],
      [v.plate.x0, 0, 0.16, G],
      [v.plate.x1, 0, 0.16, G],
    ])
      (r.push([e, T, t, n, 0.08, i]),
        r.push([e, v.ceil - 0.08, t, n, 0.16, i]));
    let i = new _(e, t, r.length);
    (r.forEach(([e, t, n, r, a, o], s) => {
      (F.compose(L.set(e, t + a / 2, n), I.identity(), R.set(r, a, o)),
        s < Fe.length && Fe[s].id.split(`-`).pop() % 2 && F.copy(z),
        i.setMatrixAt(s, F),
        s < Fe.length && rt.push(F.clone()));
    }),
      (i.instanceMatrix.needsUpdate = !0),
      (i.castShadow = !0),
      b.add(i),
      (nt = i));
  }
  let it = new Map(Fe.map((e, t) => [e.id, t])),
    at = (e, t) => {
      let n = it.get(e.id);
      n != null &&
        (nt.setMatrixAt(n, t ? z : rt[n]),
        (nt.instanceMatrix.needsUpdate = !0));
    },
    ot = 2400,
    st = S(new h(1, 1)),
    ct = S(
      new w({
        vertexColors: !1,
        side: 2,
        transparent: !0,
        depthWrite: !1,
        toneMapped: !0,
      }),
    ),
    Y = new _(st, ct, ot);
  ((Y.frustumCulled = !1), (Y.renderOrder = 5), Y.instanceMatrix.setUsage(e));
  let lt = [];
  for (let e = 0; e < ot; e++) (Y.setMatrixAt(e, z), Y.setColorAt(e, new l(0)));
  b.add(Y);
  let ut = 0,
    X = (
      e,
      t,
      {
        size: n = 0.05,
        life: r = 2,
        color: i = 16777215,
        drag: a = 0.3,
        grav: o = 9.8,
        flutter: s = 0,
        spin: c = 6,
        floorY: u = T,
        stretch: d = 1,
      } = {},
    ) => {
      let f = ut++ % ot;
      ((lt[f] = {
        p: e.slice(),
        v: t.slice(),
        size: n,
        life: r,
        age: 0,
        drag: a,
        grav: o,
        flutter: s,
        spin: c,
        rot: [H(f) * V, H(f + 1) * V, 0],
        floorY: u,
        stretch: d,
        col: new l(i),
      }),
        Y.setColorAt(f, lt[f].col));
    },
    dt = new g(),
    ft = (e) => {
      let t = !1;
      for (let n = 0; n < ot; n++) {
        let r = lt[n];
        if (!r) continue;
        if (((t = !0), (r.age += e), r.age > r.life)) {
          (Y.setMatrixAt(n, z), (lt[n] = null));
          continue;
        }
        let i = Math.exp(-r.drag * e);
        ((r.v[0] *= i),
          (r.v[2] *= i),
          (r.v[1] = r.v[1] * i - r.grav * e),
          r.flutter &&
            ((r.v[0] += Math.sin(B * 3 + n) * r.flutter * e),
            (r.v[2] += Math.cos(B * 2.3 + n * 1.7) * r.flutter * e)));
        for (let t = 0; t < 3; t++) r.p[t] += r.v[t] * e;
        (r.p[1] < r.floorY + 0.01 &&
          r.p[0] > v.plate.x0 &&
          r.p[0] < v.plate.x1 &&
          r.p[2] > v.plate.z0 &&
          r.p[2] < v.plate.z1 &&
          ((r.p[1] = r.floorY + 0.01),
          (r.v = [0, 0, 0]),
          (r.flutter = 0),
          (r.spin = 0),
          (r.rot[0] = -Math.PI / 2)),
          (r.rot[0] += r.spin * e),
          (r.rot[1] += r.spin * 0.7 * e),
          dt.set(r.rot[0], r.rot[1], r.rot[2]),
          I.setFromEuler(dt));
        let a = Math.min(1, (r.life - r.age) / 0.4);
        (F.compose(
          L.fromArray(r.p),
          I,
          R.set(r.size * a, r.size * r.stretch * a, 1),
        ),
          Y.setMatrixAt(n, F));
      }
      t &&
        ((Y.instanceMatrix.needsUpdate = !0),
        Y.instanceColor && (Y.instanceColor.needsUpdate = !0));
    },
    pt = (e, t, n, r) => {
      let i = j(e),
        a = i[3] - i[0] > i[5] - i[2],
        o = a ? [0, 0, 1] : [1, 0, 0];
      for (let e = 0; e < n; e++) {
        let s = H(e * 3 + B * 100),
          c = H(e * 7 + 1 + B * 50),
          l =
            t && e < n * 0.4
              ? [
                  t[0] + (H(e) - 0.5) * 0.5,
                  t[1] + (H(e + 9) - 0.5) * 0.5,
                  t[2] + (H(e + 5) - 0.5) * 0.5,
                ]
              : [
                  a ? i[0] + (i[3] - i[0]) * s : i[0],
                  i[1] + (i[4] - i[1]) * c,
                  a ? i[2] : i[2] + (i[5] - i[2]) * s,
                ],
          u = r ?? (H(e + 2) > 0.5 ? 1 : -1),
          d = 1.2 + H(e * 11) * 3.2;
        X(
          l,
          [
            o[0] * u * d + (H(e * 13) - 0.5),
            H(e * 17) * 1.5 - 0.5,
            o[2] * u * d + (H(e * 19) - 0.5),
          ],
          {
            size: 0.015 + H(e * 23) * 0.045,
            life: r ? 6 : 2.5 + H(e) * 1.5,
            color: 6124674,
            drag: 0.15,
            spin: 8 + H(e) * 10,
            stretch: 0.6 + H(e * 29),
          },
        );
      }
    },
    mt = (e) =>
      e.face === `north`
        ? -1
        : e.face === `south`
          ? 1
          : e.face === `west`
            ? -1
            : e.face === `east`
              ? 1
              : null,
    ht = (e) => {
      let t = Math.hypot(e.b[0] - e.a[0], e.b[1] - e.a[1]),
        n = e.y1 - e.y0;
      return [[t / 2, n / 2, Math.hypot(t, n) / 2, 0]];
    },
    gt = (e, t) => {
      let n = J[e],
        r = Ze(n);
      for (let e of t) {
        let t = [r.ax + r.dx * e[0], r.y0 + e[1], r.az + r.dz * e[0]],
          i = Math.round(
            Math.min(110, 18 + e[2] * e[2] * 22) * (n.ext ? 1 : 0.7),
          ),
          a = j(n),
          o = a[3] - a[0] > a[5] - a[2] ? [0, 0, 1] : [1, 0, 0],
          s = n.ext ? mt(n) : null;
        for (let n = 0; n < i; n++) {
          let i = H(n * 3 + B * 100) * V,
            a = e[2] * Math.sqrt(H(n * 7 + 1 + B * 50)) * 0.8,
            c = s ?? (H(n + 2) > 0.5 ? 1 : -1),
            l = 0.8 + H(n * 11) * 2.8,
            u = [
              t[0] + r.dx * Math.cos(i) * a,
              t[1] + Math.sin(i) * a,
              t[2] + r.dz * Math.cos(i) * a,
            ];
          X(
            u,
            [
              o[0] * c * l + (H(n * 13) - 0.5),
              H(n * 17) * 1.2 - 0.6,
              o[2] * c * l + (H(n * 19) - 0.5),
            ],
            {
              size: 0.02 + H(n * 23) * 0.07,
              life: s ? 6 : 2.5 + H(n) * 1.5,
              color: 6124674,
              drag: 0.15,
              spin: 8 + H(n) * 10,
              stretch: 0.6 + H(n * 29),
            },
          );
        }
        se()?.play(`glass_shatter`, {
          pos: t,
          volume: Math.min(1, (n.ext ? 0.7 : 0.5) + e[2] * 0.25),
          size: Math.min(1.6, 0.6 + e[2] * 0.5),
        });
      }
    },
    _t = ye(v, S);
  b.add(_t.root);
  let vt = (e) => {
      let t = J[e],
        n = j(t),
        r = [
          (n[0] + n[3]) / 2,
          (v.crane.armY0 + v.crane.armY1) / 2,
          (n[2] + n[5]) / 2,
        ],
        i = mt(t),
        a = n[3] - n[0] > n[5] - n[2],
        o = a ? 0 : -i,
        s = a ? -i : 0;
      pt(t, null, 150, -i);
      for (let e = 0; e < 30; e++)
        X(
          [r[0] + o * 0.1, T + 0.2 + H(e + B) * 3.5, r[2] + s * 0.1],
          [
            o * (3 + H(e * 7 + B) * 5) + (H(e * 3 + B) - 0.5) * 2,
            H(e * 5 + B) * 2,
            s * (3 + H(e * 11 + B) * 5) + (H(e * 9 + B) - 0.5) * 2,
          ],
          {
            size: 0.06 + H(e) * 0.1,
            life: 5,
            color: 7177104,
            drag: 0.2,
            spin: 9,
            stretch: 0.7,
          },
        );
      ce()?.play(`glass_shatter`, { pos: r, volume: 1.25, size: 1.6 });
    },
    yt = (e, t, n) => {
      let r = n.bx - n.ax,
        i = n.bz - n.az,
        a = r * r + i * i || 1,
        o = Math.max(0, Math.min(1, ((e - n.ax) * r + (t - n.az) * i) / a));
      return Math.hypot(e - (n.ax + r * o), t - (n.az + i * o));
    },
    bt = -1,
    xt = -99,
    St = 2,
    Ct = 0,
    wt = 0,
    Tt = 0,
    Et = 0,
    Dt = 0,
    Z = null;
  v.plate.x1;
  let Ot = 20 * E;
  new l(9209210);
  let kt = S(new h(1, 1)),
    At = new ee(new Float32Array(280), 1);
  kt.setAttribute(`aAlpha`, At);
  let jt = S(
      new p({
        transparent: !0,
        depthWrite: !1,
        uniforms: { uColor: { value: new l(9077624) } },
        vertexShader: `attribute float aAlpha;varying float vA;varying vec2 vUv;void main(){vUv=uv;vA=aAlpha;vec4 c=modelViewMatrix*instanceMatrix*vec4(0.,0.,0.,1.);float s=length(instanceMatrix[0].xyz);c.xy+=position.xy*s;gl_Position=projectionMatrix*c;}`,
        fragmentShader: `uniform vec3 uColor;varying float vA;varying vec2 vUv;void main(){float d=length(vUv-.5)*2.;float a=1.-smoothstep(.15,1.,d);gl_FragColor=vec4(uColor,a*a*vA);}`,
      }),
    ),
    Mt = new _(kt, jt, 280);
  ((Mt.frustumCulled = !1), (Mt.renderOrder = 6), (Mt.name = `m34-crane-dust`));
  for (let e = 0; e < 280; e++) Mt.setMatrixAt(e, z);
  b.add(Mt);
  let Nt = [],
    Pt = 0,
    Ft = (e, t, n, r, i) => {
      Nt[Pt++ % 280] = {
        p: e.slice(),
        v: t.slice(),
        size: n,
        life: r,
        age: 0,
        alpha: i,
      };
    },
    It = (e, t) => {
      let n = !1;
      for (let t = 0; t < 280; t++) {
        let r = Nt[t];
        if (!r) continue;
        if (((n = !0), (r.age += e), r.age > r.life)) {
          ((Nt[t] = null), Mt.setMatrixAt(t, z), (At.array[t] = 0));
          continue;
        }
        let i = Math.exp(-0.12 * e);
        ((r.v[0] *= i), (r.v[2] *= i), (r.v[1] *= Math.exp(-0.6 * e)));
        for (let t = 0; t < 3; t++) r.p[t] += r.v[t] * e;
        r.p[1] = Math.min(v.ceil - 0.8, Math.max(T + 0.6, r.p[1]));
        let a = r.size * (1 + (r.age / r.life) * 1.6);
        (F.makeScale(a, a, a).setPosition(r.p[0], r.p[1], r.p[2]),
          Mt.setMatrixAt(t, F),
          (At.array[t] =
            r.alpha *
            Math.min(1, r.age / 1.2) *
            Math.min(1, (r.life - r.age) / 8)));
      }
      (n && ((Mt.instanceMatrix.needsUpdate = !0), (At.needsUpdate = !0)),
        jt.uniforms.uColor.value.setHex(9077624).multiplyScalar(1 - 0.75 * t));
    },
    Lt = S(
      new w({
        color: 8222572,
        transparent: !0,
        opacity: 0,
        depthTest: !1,
        depthWrite: !1,
        toneMapped: !1,
      }),
    ),
    Rt = new c(S(new h(1, 1)), Lt);
  ((Rt.renderOrder = 999),
    (Rt.frustumCulled = !1),
    (Rt.visible = !1),
    b.add(Rt));
  let zt = new C(),
    Bt = new m(),
    Vt = (e, n) => {
      ((Rt.visible = e > 0.005),
        Rt.visible &&
          (t.camera.getWorldQuaternion(Bt),
          zt.set(0, 0, -0.25).applyQuaternion(Bt),
          Rt.position.copy($).add(zt),
          Rt.quaternion.copy(Bt),
          Rt.scale.set(4, 4, 1),
          (Lt.opacity = e),
          Lt.color.setHex(8222572).multiplyScalar(1 - 0.7 * n)));
    },
    Ht = v.fabric ?? [],
    Ut = new Uint8Array(Ht.length),
    Wt = new _(
      S(new n(1, 1, 1)),
      S(new u({ color: 9078653, roughness: 0.95, flatShading: !0 })),
      Math.max(1, Ht.length),
    );
  ((Wt.name = `m34-fallen-partitions`),
    (Wt.castShadow = !0),
    (Wt.receiveShadow = !0));
  for (let e = 0; e < Ht.length; e++) Wt.setMatrixAt(e, z);
  ((Wt.instanceMatrix.needsUpdate = !0), b.add(Wt));
  let Gt = () => {
      let e = s(),
        n = t.modules.get(`demo`),
        r = !1;
      for (let t = 0; t < Ht.length; t++) {
        let i = Ht[t],
          a = +!!O(v, i, e);
        if (a === Ut[t]) continue;
        if (((Ut[t] = a), (r = !0), n?.setObjectVisible?.(i.object, !a), !a)) {
          Wt.setMatrixAt(t, z);
          continue;
        }
        let [o, s, c, l] = i.box,
          u = c - o > l - s,
          d = u ? c - o : l - s,
          f = H(t * 7 + e) < 0.5 ? -1 : 1,
          p = (o + c) / 2 + (u ? 0 : f * 0.72 * E),
          m = (s + l) / 2 + (u ? f * 0.72 * E : 0);
        if (
          (I.setFromAxisAngle(oe, (H(t * 3 + e) - 0.5) * 0.35),
          F.compose(
            L.set(p, T + 0.05, m),
            I,
            R.set(u ? d : 1.45 * E, 0.07, u ? 1.45 * E : d),
          ),
          Wt.setMatrixAt(t, F),
          B > 1)
        ) {
          for (let e = 0; e < 12; e++)
            X(
              [
                p + (H(e + t) - 0.5) * d * (u ? 1 : 0.2),
                T + 0.3 + H(e * 3 + t) * 0.9,
                m + (H(e * 5 + t) - 0.5) * d * (u ? 0.2 : 1),
              ],
              [
                (H(e * 7 + t) - 0.5) * 3,
                0.6 + H(e * 11 + t) * 1.4,
                (H(e * 13 + t) - 0.5) * 3,
              ],
              {
                size: 0.05 + H(e) * 0.09,
                life: 2.5,
                color: 6249042,
                drag: 0.5,
                grav: 9.8,
                spin: 8,
              },
            );
          for (let e = 0; e < 3; e++)
            Ft(
              [p, T + 1 + H(e + t) * 0.8, m],
              [(H(e * 3 + t) - 0.5) * 1.6, 0.3, (H(e * 5 + t) - 0.5) * 1.6],
              2 + H(e) * 1.5,
              22 + H(e * 7 + t) * 10,
              0.3,
            );
          if (B > Et) {
            Et = B + 0.12;
            let e = ce();
            (e?.play(`impact_wood`, {
              pos: [p, T + 0.8, m],
              volume: 1,
              pitch: 0.7 + H(t) * 0.2,
            }),
              e?.play(`impact_metal`, {
                pos: [p, T + 0.8, m],
                volume: 0.7,
                pitch: 0.45,
              }));
          }
        }
      }
      r && (Wt.instanceMatrix.needsUpdate = !0);
    },
    Kt = (v.sweepables ?? []).filter((e) => !Ht.some((t) => t.id === e.id)),
    qt = new Uint8Array(Kt.length),
    Jt = () => {
      let e = s(),
        n = t.modules.get(`demo`);
      for (let t = 0; t < Kt.length; t++) {
        let r = Kt[t],
          i = +(ie(v, r.id, e) <= e);
        if (
          i === qt[t] ||
          ((qt[t] = i), n?.setObjectVisible?.(r.object, !i), !i || B <= 1)
        )
          continue;
        let [a, o, s, c] = r.box,
          l = (a + s) / 2,
          u = (o + c) / 2;
        for (let e = 0; e < 22; e++)
          X(
            [
              l + (H(e + t) - 0.5) * (s - a),
              T + 0.3 + H(e * 3 + t) * 2.4,
              u + (H(e * 5 + t) - 0.5) * (c - o),
            ],
            [
              (H(e * 7 + t) - 0.5) * 6,
              1 + H(e * 11 + t) * 2.5,
              (H(e * 13 + t) - 0.5) * 6,
            ],
            {
              size: 0.07 + H(e) * 0.18,
              life: 3,
              color: 10130570,
              drag: 0.3,
              grav: 9.8,
              spin: 9,
            },
          );
        for (let e = 0; e < 3; e++)
          Ft(
            [l, T + 1.2, u],
            [(H(e + t) - 0.5) * 2, 0.3, (H(e * 3 + t) - 0.5) * 2],
            2.6,
            26,
            0.36,
          );
        if (B > Et) {
          Et = B + 0.1;
          let e = ce();
          (e?.play(`collapse`, { pos: [l, T + 1, u], volume: 0.8 }),
            e?.play(`impact_metal`, {
              pos: [l, T + 1, u],
              volume: 0.8,
              pitch: 0.4,
            }));
        }
      }
    },
    Yt = (e) => S(new w({ color: e, toneMapped: !1 }));
  Se?.lit ?? new y();
  let Xt = [];
  for (let e of [-34, -22, -10, 2, 14, 26, 36])
    for (let t of [-24, -13, 0, 13, 24])
      (Math.abs(e) < 12 && Math.abs(t) < 6) || Xt.push([e * E, t * E]);
  let Zt = Yt(16726566),
    Qt = new _(je, Zt, Xt.length);
  ((Qt.name = `m34-emergency-lights`),
    (Qt.visible = !1),
    (Qt.frustumCulled = !1),
    Xt.forEach(([e, t], n) => {
      (F.compose(
        L.set(e, v.ceil - 0.03, t),
        I.identity(),
        R.set(0.5, 0.05, 0.22),
      ),
        Qt.setMatrixAt(n, F));
    }),
    b.add(Qt));
  let $t = [
      [-34, 0],
      [-22, -13],
      [-22, 13],
      [2, -13],
      [2, 13],
      [14, -24],
      [26, 0],
      [36, 24],
    ].map(([e, t]) => {
      let n = new ne(16726562, 0, 17 * E, 2);
      return (
        n.position.set(e * E, v.ceil - 0.35, t * E),
        (n.castShadow = !1),
        b.add(n),
        n
      );
    }),
    en = new l(16726566),
    tn = new l(16732726),
    nn = { mains: 1, emergency: 0, out: !1 },
    rn,
    an = (e) => {
      ((nn = P(v, e)),
        (Qt.visible = nn.emergency > 0),
        Qt.visible && Zt.color.copy(en).multiplyScalar(nn.emergency));
      for (let e = 0; e < $t.length; e++)
        $t[e].intensity =
          nn.emergency > 0
            ? 16 * nn.emergency * (0.94 + 0.06 * Math.sin(B * 7.3 + e * 1.9))
            : 0;
      if (v.epoch !== rn && ((rn = v.epoch), Se)) {
        let t = e >= k(v) ? A(v, re(v, e)) : null;
        for (let e of Se.groups.values())
          e.node.visible = !(t && yt(e.cx, e.cz, t) < t.r + e.r * 0.7 + 0.6);
      }
    },
    on = (e, n) => {
      ((Ct = Math.max(0, Ct - e * 1.1)), (Dt = Math.max(0, Dt - e / 28)));
      let r = null,
        i = v.plate;
      t.camera.getWorldPosition($);
      let a =
          $.x > i.x0 - 6 &&
          $.x < i.x1 + 6 &&
          $.z > i.z0 - 6 &&
          $.z < i.z1 + 6 &&
          $.y > T - 1 &&
          $.y < v.ceil + 0.5,
        o = (e) => {
          let t = 0,
            n = 1,
            r = [e.ax, e.az],
            a = [e.bx - e.ax, e.bz - e.az],
            o = [i.x0 - 0.3, i.z0 - 0.3],
            s = [i.x1 + 0.3, i.z1 + 0.3];
          for (let e = 0; e < 2; e++) {
            if (Math.abs(a[e]) < 1e-9) {
              if (r[e] < o[e] || r[e] > s[e]) return null;
              continue;
            }
            let i = (o[e] - r[e]) / a[e],
              c = (s[e] - r[e]) / a[e];
            if (i > c) {
              let e = i;
              ((i = c), (c = e));
            }
            if (((t = Math.max(t, i)), (n = Math.min(n, c)), t > n))
              return null;
          }
          return {
            ax: r[0] + a[0] * t,
            az: r[1] + a[1] * t,
            bx: r[0] + a[0] * n,
            bz: r[1] + a[1] * n,
            y: e.y,
            r: e.r,
          };
        };
      if (n.phase === `warn` && B > wt) {
        wt = B + 0.45 + H(Math.floor(B * 9)) * 0.4;
        let e = ce(),
          t = [v.crane.mast[0], T + 1, v.crane.mast[1]];
        (e?.play(`impact_metal`, {
          pos: t,
          volume: 0.9,
          pitch: 0.25 + H(Math.floor(B * 17)) * 0.25,
          open: !0,
        }),
          n.t > -2.6 &&
            n.t < -2.4 &&
            e?.play(`crane_groan`, {
              pos: t,
              volume: 1,
              open: !0,
              pitch: 0.8,
            }));
      }
      if (
        n.phase === `swing` ||
        (n.phase === `jammed` && n.t < v.crane.swings[n.k].in + 0.6)
      ) {
        let e = o(A(v, n));
        if (e) {
          let t = [e.ax, e.y, e.az],
            i = n.dir;
          if (bt !== n.k) {
            ((bt = n.k), (xt = B));
            let e = Math.hypot($.x - t[0], $.z - t[2]);
            ((St = e < 16 ? 0 : e < 36 ? 1 : 2),
              a &&
                ((Ct = [1.5, 1.1, 0.7][St]),
                (Dt = Math.max(Dt, [1, 0.65, 0.4][St]))));
            let r = ce();
            (r?.play(`collapse`, { pos: t, volume: 1 }),
              r?.play(`explosion_wreck`, { pos: t, volume: 1 }),
              r?.play(`impact_metal`, { pos: t, volume: 1, pitch: 0.45 }));
            for (let e = 0; e < 80; e++)
              X(
                [t[0], T + 0.3 + H(e + B) * 4, t[2] + (H(e * 3 + B) - 0.5) * 3],
                [
                  i[0] * (3 + H(e * 5 + B) * 9) + (H(e * 7 + B) - 0.5) * 4,
                  H(e * 7 + B) * 3.5,
                  i[1] * (3 + H(e * 5 + B) * 9) + (H(e * 9 + B) - 0.5) * 4,
                ],
                {
                  size: 0.06 + H(e) * 0.14,
                  life: 3,
                  color: 6249042,
                  drag: 0.4,
                  grav: 9.8,
                  spin: 9,
                },
              );
            for (let e = 0; e < 40; e++)
              Ft(
                [
                  t[0] + i[0] * H(e + B) * 6,
                  T + 0.8 + H(e * 3 + B) * 3,
                  t[2] + i[1] * H(e + B) * 6 + (H(e * 5 + B) - 0.5) * 4,
                ],
                [
                  i[0] * (1.5 + H(e * 7 + B) * 3),
                  0.2 + H(e * 9 + B) * 0.4,
                  i[1] * (1.5 + H(e * 7 + B) * 3) + (H(e * 11 + B) - 0.5) * 3,
                ],
                2.6 + H(e) * 2,
                26 + H(e * 13 + B) * 10,
                0.42,
              );
          }
          for (let t = 0; t < v.props.length; t++) {
            let n = be[t],
              r = xe[t];
            if (
              !n.alive ||
              !r ||
              !n.k ||
              r[3] < Ot ||
              r[1] > T + 2.9 * E ||
              r[4] < T + 0.5 * E
            )
              continue;
            let a = (r[0] + r[3]) / 2,
              o = (r[2] + r[5]) / 2;
            yt(a, o, e) < e.r + 0.9 &&
              fn(
                t,
                [a, (r[1] + r[4]) / 2, o],
                [i[0] * 0.4, 0.5, i[1] * 0.4],
                `pop`,
              );
          }
          if (Se)
            for (let t of Se.groups.values())
              t.node.visible &&
                yt(t.cx, t.cz, e) < e.r + t.r * 0.7 + 0.6 &&
                (t.node.visible = !1);
          for (let t = Math.max(0, Math.floor((Ot - U.x0) / we)); t < Ce; t++)
            for (let n = 0; n < K; n++) {
              let r = t * K + n;
              if (!Oe[r]) continue;
              let i = U.x0 + we * (t + 0.5),
                a = U.z0 + Te * (n + 0.5);
              if (yt(i, a, e) < 1.6 + H(r) * 1.1) {
                ((Oe[r] = 0),
                  q.setMatrixAt(r, z),
                  (q.instanceMatrix.needsUpdate = !0),
                  X(
                    [i, v.ceil - 0.02, a],
                    [(H(r) - 0.5) * 1.5, -0.8, (H(r + 1) - 0.5) * 1.5],
                    {
                      size: 0.55,
                      life: 6,
                      color: 12434098,
                      drag: 0.4,
                      grav: 9.8,
                      spin: 2 + H(r) * 3,
                      stretch: 2,
                      floorY: T + 0.02,
                    },
                  ));
                for (let e = 0; e < 5; e++)
                  X(
                    [i, v.ceil, a],
                    [(H(e + r) - 0.5) * 0.8, -0.2, (H(e * 3 + r) - 0.5) * 0.8],
                    {
                      size: 0.12,
                      life: 4,
                      color: 14209992,
                      drag: 1.6,
                      grav: 0.5,
                      flutter: 0.6,
                      spin: 1,
                    },
                  );
              }
            }
          if (B > Tt) {
            Tt = B + 0.06;
            for (let t = 0; t < 3; t++) {
              let n = H(t + B * 61);
              Ft(
                [
                  e.ax + (e.bx - e.ax) * n,
                  e.y + 0.3 + H(t * 5 + B),
                  e.az + (e.bz - e.az) * n,
                ],
                [(H(t * 7 + B) - 0.5) * 2.6, 0.25, (H(t * 13 + B) - 0.5) * 2.6],
                2.4 + H(t * 3 + B) * 1.5,
                24 + H(t * 9 + B) * 10,
                0.36,
              );
            }
            for (let t = 0; t < 5; t++) {
              let n = H(t + B * 37);
              X(
                [e.ax + (e.bx - e.ax) * n, e.y, e.az + (e.bz - e.az) * n],
                [
                  (H(t * 7 + B) - 0.5) * 5,
                  1 + H(t * 3 + B) * 2,
                  (H(t * 13 + B) - 0.5) * 5,
                ],
                {
                  size: 0.05 + H(t) * 0.1,
                  life: 2,
                  color: 6249042,
                  drag: 0.4,
                  grav: 9.8,
                  spin: 9,
                },
              );
            }
            for (let n = 0; n < 9; n++)
              X(
                [t[0], e.y + (H(n * 3 + B) - 0.5) * 1.6, t[2]],
                [
                  i[0] * (1 + H(n + B * 7) * 3) + (H(n * 5 + B) - 0.5) * 3,
                  H(n * 3 + B) * 2,
                  i[1] * (1 + H(n + B * 7) * 3) + (H(n * 9 + B) - 0.5) * 3,
                ],
                {
                  size: 0.025,
                  life: 0.5 + H(n) * 0.4,
                  color: 16760928,
                  drag: 0.6,
                  grav: 9.8,
                  spin: 0,
                  stretch: 3.5,
                },
              );
          }
          if (B > wt) {
            wt = B + 0.18;
            let e = ce();
            (e?.play(`impact_metal`, {
              pos: t,
              volume: 1,
              pitch: 0.4 + H(Math.floor(B * 50)) * 0.3,
            }),
              H(Math.floor(B * 31)) < 0.4 &&
                e?.play(`spark_zap`, { pos: t, volume: 0.8 }));
          }
          r = e;
        }
      }
      let s = B - xt,
        c = H(Math.floor(B * 13)) < 0.5 ? 1 : 0.15,
        l = 0;
      if (
        (a &&
          ((l =
            St === 0
              ? s < 2.8
                ? 1
                : s < 3.8
                  ? c
                  : 0
              : St === 1
                ? s < 1.7
                  ? c * 0.8
                  : 0
                : s < 0.7
                  ? c * 0.6
                  : 0),
          r && yt($.x, $.z, r) < 9 && (l = Math.max(l, c * 0.7))),
        r && a)
      ) {
        let e = yt($.x, $.z, r);
        e < 10 ? (Dt = Math.max(Dt, 0.9)) : e < 22 && (Dt = Math.max(Dt, 0.55));
      }
      let u = 0,
        d = 0;
      (a && nn.out && ((d = 1 - nn.mains), (u = nn.emergency)),
        sn(l, u, d),
        It(e, Math.max(l, d)),
        Vt(a ? 0.42 * Math.min(1, Dt) ** 1.3 : 0, Math.max(l, d)));
      let f = t.modules.get(`player`);
      if (!f?.shakeView || !a) return;
      let p = Ct;
      if (r) {
        let e = yt($.x, $.z, r);
        p += e < 10 ? 1.1 : e < 24 ? 0.55 : 0.22;
      } else n.phase === `warn` && (p += 0.1 * n.wild);
      p > 0.01 && f.shakeView(Math.min(1.5, p));
    },
    sn = (e, n = 0, r = 0) => {
      let i = t.modules.get(`environment`),
        a = i?.hemiLight,
        o = i?.sunLight,
        s = t.camera?.userData;
      if (e < 0.001 && n < 0.001 && r < 0.001) {
        (s?.viewLight && delete s.viewLight,
          (Z &&=
            (a && ((a.intensity = Z.hemi), a.color.copy(Z.sky)),
            o && (o.intensity = Z.sun),
            (Q.intensity = Z.fill),
            Q.color.copy(Z.fillCol),
            null)));
        return;
      }
      if (
        ((Z ||= {
          hemi: a?.intensity ?? 0,
          sky: a?.color.clone() ?? new l(),
          sun: o?.intensity ?? 0,
          fill: Q.intensity,
          fillCol: Q.color.clone(),
        }),
        a &&
          ((a.intensity = Z.hemi * (1 - Math.max(0.88 * e, 0.95 * r))),
          a.color.copy(Z.sky).lerp(tn, n * 0.35)),
        o && (o.intensity = Z.sun * (1 - Math.max(0.9 * e, 0.97 * r))),
        (Q.intensity = Z.fill * (1 - Math.max(0.93 * e, 0.99 * r))),
        Q.color.copy(Z.fillCol).lerp(tn, n * 0.5),
        s)
      ) {
        let t = (s.viewLight ??= { scale: 1, tint: tn, tintAmount: 0 });
        ((t.scale = Math.max(1 - Math.max(0.88 * e, 0.95 * r), 0.14 * n * r)),
          (t.tintAmount = n * r * 0.8));
      }
    },
    Q = new f(16774890, 1.1);
  (Q.position.set(12, T + 40, 8),
    Q.target.position.set(0, T, 0),
    (Q.castShadow = !1),
    b.add(Q, Q.target));
  let $ = new C(),
    cn = [],
    ln = (e, n) => cn.push(t.events.on(e, n)),
    un = () => {
      let e = s(),
        t = 0,
        n = new Set();
      for (let r = 0; r < J.length; r++) {
        let i = J[r],
          a = et[r],
          o = i.ext ? D.ext : D.int,
          s = v.hits.get(i.id) ?? 0,
          c = v.breaks?.get(i.id),
          u = c?.length ?? 0,
          d = N(v, i, e),
          f = s <= 0 ? 0 : Math.min(3, 1 + Math.floor((s / o) * 3));
        if (a.stage === f && a.nb === u && a.torn === d) continue;
        let p = i.ext ? Le : Re,
          m = tt.get(i.id),
          h = d || u > 0;
        (p.setMatrixAt(m, h ? z : $e(i)),
          (p.instanceMatrix.needsUpdate = !0),
          h ||
            (p.setColorAt(m, new l().setScalar(1 + f * 0.16)),
            p.instanceColor && (p.instanceColor.needsUpdate = !0)),
          (h || f <= 0) && Ke(i.id),
          i.ext && d !== a.torn && at(i, d),
          (u !== a.nb || d !== a.torn) && n.add((r / 16) | 0),
          B > 1 && d && !a.torn
            ? (vt(r), t++)
            : B > 1 &&
              !d &&
              u > a.nb &&
              (gt(r, a.nb === 0 ? ht(i) : c.slice(a.nb)), t++),
          (a.stage = f),
          (a.nb = u),
          (a.torn = d));
      }
      for (let e of n) Qe(e);
      return t;
    };
  (ln(`demo:meridian`, () => {
    (un(), Gt());
  }),
    ln(`demo:meridianGlass`, (e) => {
      let t = Ae.get(e?.id);
      if (t == null) return;
      let n = J[t];
      if (e.point) {
        se()?.play(`impact_glass`, { pos: e.point, volume: 0.7 });
        for (let t = 0; t < 5; t++)
          X(
            e.point,
            [
              (H(t + B) - 0.5) * 2,
              H(t * 3 + B) * 1.4,
              (H(t * 7 + B) - 0.5) * 2,
            ],
            { size: 0.025, life: 0.8, color: 14741759, spin: 12 },
          );
      }
      (e.point &&
        !e.breaks?.length &&
        !N(v, n, s()) &&
        qe(n, e.point, (e.hits | 0) * 131 + t * 7 + Math.floor(B * 10)),
        un());
    }));
  let dn = (e, t, n, r) => {
    let i = 0,
      a = n;
    for (let n = 0; n < 3; n++) {
      if (Math.abs(t[n]) < 1e-9) {
        if (e[n] < r[n] || e[n] > r[n + 3]) return -1;
        continue;
      }
      let o = (r[n] - e[n]) / t[n],
        s = (r[n + 3] - e[n]) / t[n];
      if (o > s) {
        let e = o;
        ((o = s), (s = e));
      }
      if (((i = Math.max(i, o)), (a = Math.min(a, s)), i > a)) return -1;
    }
    return i;
  };
  (ln(`weapon:fire`, (e) => {
    if (!e?.origin || !e?.dir) return;
    let t = (e.dist ?? 200) + 0.3;
    (e.origin[0], e.origin[2]);
    for (let n = 0; n < v.props.length; n++) {
      let r = be[n];
      if (!r.alive || !me[r.kind] || !xe[n]) continue;
      let i = dn(e.origin, e.dir, t, xe[n]);
      i < 0 ||
        fn(
          n,
          e.origin.map((t, n) => t + e.dir[n] * i),
          e.dir,
        );
    }
  }),
    ln(`explosion`, (e) => {
      if (!Array.isArray(e?.pos)) return;
      let t = e.pos,
        n = Math.max(3, Math.min(7, e.radius ?? 4));
      (t[0], t[2]);
      for (let e = 0; e < v.props.length; e++) {
        let r = be[e];
        if (!r.alive || !me[r.kind]) continue;
        let i = xe[e],
          a = [(i[0] + i[3]) / 2, (i[1] + i[4]) / 2, (i[2] + i[5]) / 2];
        Math.hypot(a[0] - t[0], a[1] - t[1], a[2] - t[2]) < n * 0.7 &&
          fn(e, a, [a[0] - t[0], 0.5, a[2] - t[2]]);
      }
      if (t[1] > T - 1 && t[1] < v.slab + 1)
        for (let e = 0; e < Ce; e++)
          for (let r = 0; r < K; r++) {
            let i = e * K + r;
            if (!Oe[i]) continue;
            let a = U.x0 + we * (e + 0.5),
              o = U.z0 + Te * (r + 0.5);
            if (
              Math.hypot(a - t[0], o - t[2], (v.ceil - t[1]) * 0.6) <
                n * (0.55 + H(i) * 0.45) &&
              ((Oe[i] = 0),
              q.setMatrixAt(i, z),
              (q.instanceMatrix.needsUpdate = !0),
              X(
                [a, v.ceil - 0.02, o],
                [
                  (a - t[0]) * 0.3 + (H(i) - 0.5),
                  -0.5,
                  (o - t[2]) * 0.3 + (H(i + 1) - 0.5),
                ],
                {
                  size: 0.55,
                  life: 5,
                  color: 12434098,
                  drag: 0.4,
                  grav: 9.8,
                  spin: 2 + H(i) * 3,
                  stretch: 2,
                  floorY: T + 0.02,
                },
              ),
              H(i * 7) < 0.3)
            )
              for (let e = 0; e < 4; e++)
                X(
                  [a, v.ceil, o],
                  [(H(e + i) - 0.5) * 0.6, -0.2, (H(e * 3 + i) - 0.5) * 0.6],
                  {
                    size: 0.04,
                    life: 3,
                    color: 15262936,
                    drag: 1.5,
                    grav: 1.2,
                    flutter: 0.8,
                    spin: 1,
                  },
                );
          }
    }));
  function fn(e, t, n, r) {
    let i = be[e],
      a = v.props[e],
      o = me[i.kind] ?? r;
    i.alive = !1;
    let { k: s, j: c } = i,
      l = Math.hypot(n[0], n[2]) || 1,
      u = n[0] / l,
      d = n[2] / l;
    if (o === `screen` || o === `pop`) {
      if (
        (I.setFromEuler(new g(o === `screen` ? -1.2 : -1.5, a.yaw, 0, `YXZ`)),
        F.compose(
          L.set(a.x + u * 0.15, a.y, a.z + d * 0.15),
          I,
          R.set(a.s, a.s, a.s),
        ),
        s.mesh.setMatrixAt(c, F),
        (s.mesh.instanceMatrix.needsUpdate = !0),
        s.glow &&
          (s.glow.setMatrixAt(c, z), (s.glow.instanceMatrix.needsUpdate = !0)),
        o === `screen`)
      ) {
        for (let n = 0; n < 14; n++)
          X(
            t,
            [
              u * 0.5 + (H(n + e) - 0.5) * 2.5,
              1 + H(n * 3 + e) * 2,
              d * 0.5 + (H(n * 5 + e) - 0.5) * 2.5,
            ],
            {
              size: 0.02,
              life: 0.5 + H(n) * 0.4,
              color: 16762976,
              drag: 0.8,
              grav: 9.8,
              spin: 0,
              stretch: 3,
            },
          );
        (se()?.play(`impact_glass`, { pos: t, volume: 0.5, pitch: 0.7 }),
          se()?.play(`spark_zap`, { pos: t, volume: 0.5 }));
      } else (r ? ce : se)()?.play(`impact_wood`, { pos: t, volume: 0.5 });
    } else
      (s.mesh.setMatrixAt(c, z),
        (s.mesh.instanceMatrix.needsUpdate = !0),
        s.glow &&
          (s.glow.setMatrixAt(c, z), (s.glow.instanceMatrix.needsUpdate = !0)));
    if (o === `paper`) {
      let n =
        i.kind === `paper-pile`
          ? 110
          : i.kind === `books`
            ? 30
            : i.kind === `magazines`
              ? 45
              : 60;
      for (let r = 0; r < n; r++)
        X(
          [
            t[0] + (H(r) - 0.5) * 0.3,
            t[1] + H(r + 1) * 0.2,
            t[2] + (H(r + 2) - 0.5) * 0.3,
          ],
          [
            u * 1.5 + (H(r * 3 + e) - 0.5) * 2.6,
            1.2 + H(r * 7 + e) * 2.2,
            d * 1.5 + (H(r * 11 + e) - 0.5) * 2.6,
          ],
          {
            size: i.kind === `books` ? 0.14 : 0.2,
            life: 9 + H(r) * 6,
            color:
              i.kind === `books`
                ? [7023142, 2770022, 4086328][r % 3]
                : H(r * 13) < 0.1
                  ? 15917168
                  : 16052970,
            drag: 2.2,
            grav: 1.6,
            flutter: 2.2,
            spin: 2 + H(r) * 3,
            stretch: 1.3,
          },
        );
      se()?.play(`paper_burst`, { pos: t, volume: 0.6 });
    }
    if (o === `water` || o === `spray`) {
      let n = {
        i: e,
        pos: t.slice(),
        dir: o === `spray` ? [0, -1, 0] : [-u, 0, -d],
        until: B + (o === `spray` ? 9 : 6),
        kind: o,
        col: i.kind === `extinguisher` ? 16053492 : 12574964,
      };
      (pn.push(n),
        se()?.play(o === `spray` ? `water_spray` : `water_burst`, {
          pos: t,
          volume: 0.6,
        }));
    }
  }
  let pn = [],
    mn = (e) => {
      for (let t = pn.length - 1; t >= 0; t--) {
        let n = pn[t];
        if (B > n.until) {
          pn.splice(t, 1);
          continue;
        }
        let r = n.kind === `spray` ? 55 : 35,
          i = Math.ceil(r * e);
        for (let e = 0; e < i; e++) {
          let t = H(e + B * 977),
            r =
              n.kind === `spray`
                ? [
                    (H(e * 3 + B * 13) - 0.5) * 3.4,
                    -1.5 - t * 2,
                    (H(e * 5 + B * 7) - 0.5) * 3.4,
                  ]
                : [
                    n.dir[0] * 2.2 + (t - 0.5) * 0.6,
                    0.6 + H(e * 9 + B) * 0.6,
                    n.dir[2] * 2.2 + (H(e * 2 + B) - 0.5) * 0.6,
                  ];
          X(n.pos, r, {
            size: 0.025 + t * 0.02,
            life: 1.2,
            color: n.col,
            drag: 0.2,
            grav: 9.8,
            spin: 0,
            stretch: 2.5,
          });
        }
      }
    },
    hn = 2,
    gn = 0,
    _n = () => {
      t.camera.getWorldPosition($);
      let e = v.plate;
      if ($.x < e.x0 || $.x > e.x1 || $.z < e.z0 || $.z > e.z1) return 1;
      let n = 0;
      for (let e = 0; e < J.length; e++) {
        if (!J[e].ext || !et[e].broken) continue;
        let t = j(J[e]),
          r = Math.max(t[0] - $.x, 0, $.x - t[3]),
          i = Math.max(t[2] - $.z, 0, $.z - t[5]);
        n = Math.max(n, Math.max(0, 1 - Math.hypot(r, i) / 14) ** 1.6 * 0.75);
      }
      return Math.max(0.035, n);
    },
    vn = () => {
      let e = _n(),
        t = se();
      if (
        t &&
        (B > gn &&
          ((gn = B + 5.2),
          t.play(`city_traffic`, { local: !0, volume: 0.5 * e })),
        B > hn)
      ) {
        let n = H(Math.floor(B * 10));
        hn = B + 1.4 + H(Math.floor(B * 7)) * 4.5;
        let r =
          n < 0.55
            ? `city_horn`
            : n < 0.72
              ? `city_siren`
              : n < 0.86
                ? `city_brake`
                : `city_horn`;
        t.play(r, {
          local: !0,
          volume: (r === `city_siren` ? 0.55 : 0.8) * e,
          pitch: 0.9 + H(Math.floor(B * 3)) * 0.25,
        });
      }
    },
    yn = null;
  try {
    yn = fe(t, b, v, s);
  } catch (e) {
    t.warn?.(`meridian helicopters failed: ` + e.message);
  }
  let bn = 0,
    xn = -1,
    Sn = 0;
  return {
    group: b,
    update(e) {
      ((e = Math.min(e || 0, 0.1)), (B += e));
      let t = s();
      an(t);
      let n = re(v, t);
      (_t.update(n, B),
        on(e, n),
        n.phase === `warn` &&
          n.k !== xn &&
          ((xn = n.k),
          ce()?.play(`crane_groan`, {
            pos: [v.crane.mast[0], T + 2, v.crane.mast[1]],
            volume: 1,
            open: !0,
          })),
        B > bn && ((bn = B + 0.1), un(), Gt(), Jt()),
        B > Sn && ((Sn = B + 0.25), vn()),
        yn?.update(e),
        mn(e),
        ft(e));
    },
    stats() {
      return {
        props: v.props.length,
        panes: J.length,
        broken: et.filter((e) => e.broken).length,
        particles: lt.filter(Boolean).length,
        tiles: Oe.reduce((e, t) => e + t, 0),
        decor: Se?.stats ?? null,
      };
    },
    dispose() {
      (sn(0), Se?.dispose(), yn?.dispose());
      for (let e of cn) e?.();
      r.remove(b);
      for (let e of x) e.dispose?.();
      (_t.dispose(), Q.dispose());
    },
  };
}
function ye(e, t) {
  let r = e.crane,
    i = new y();
  i.name = `m34-crane`;
  let a = t(
      new u({
        color: 14197528,
        emissive: 3811846,
        roughness: 0.55,
        metalness: 0.3,
        flatShading: !0,
      }),
    ),
    s = t(new u({ color: 2764080, roughness: 0.6, metalness: 0.4 })),
    l = t(new u({ color: 9276036, roughness: 0.95 })),
    d = t(new u({ color: 14276301, roughness: 0.6 })),
    f = (e) => t(new w({ color: e, toneMapped: !0 })),
    p = t(new n(1, 1, 1)),
    h = new o(),
    g = new m(),
    v = new C(),
    b = new C(),
    ee = new C(0, 1, 0),
    te = (e, t, n) => {
      let r = v.set(t[0] - e[0], t[1] - e[1], t[2] - e[2]),
        i = r.length();
      return (
        g.setFromUnitVectors(ee, r.clone().normalize()),
        h
          .clone()
          .compose(
            new C((e[0] + t[0]) / 2, (e[1] + t[1]) / 2, (e[2] + t[2]) / 2),
            g,
            b.set(n, i, n),
          )
      );
    },
    ne = (e, t, n) => {
      let r = new _(p, n, e.length);
      return (
        e.forEach(([e, n], i) => r.setMatrixAt(i, te(e, n, t))),
        (r.instanceMatrix.needsUpdate = !0),
        (r.castShadow = !0),
        r
      );
    },
    [x, S] = r.mast,
    E = r.top,
    D = 1.3,
    re = [],
    ie = [
      [-1.3, -1.3],
      [D, -1.3],
      [D, D],
      [-1.3, D],
    ];
  for (let [e, t] of ie)
    re.push([
      [x + e, 0, S + t],
      [x + e, E, S + t],
    ]);
  for (let e = 0; e < E - 3; e += 3.1)
    for (let t = 0; t < 4; t++) {
      let [n, r] = ie[t],
        [i, a] = ie[(t + 1) % 4];
      (re.push([
        [x + n, e, S + r],
        [x + i, e + 3.1, S + a],
      ]),
        re.push([
          [x + n, e, S + r],
          [x + i, e, S + a],
        ]));
    }
  i.add(ne(re, 0.24, a));
  for (let e = E - 30; e < E - 1; e += 6) {
    let t = new c(p, f(16773320));
    (t.position.set(x - D - 0.15, e, S + D * 0.6),
      t.scale.set(0.12, 0.35, 0.5),
      i.add(t));
  }
  let O = new y();
  (O.position.set(x, E, S), i.add(O));
  let k = (e, t, n, r, i, a, o) => (
    e.position.set(t, n + a / 2, r),
    e.scale.set(i, a, o),
    (e.castShadow = !0),
    O.add(e),
    e
  );
  k(new c(p, s), 0, 0, 0, 3.2, 0.8, 3.2);
  let A = r.jib,
    j = r.counter,
    M = [];
  for (let e of [-1, 1])
    for (let t of [-1, 1])
      M.push([
        [e * D, 0.8, t * D],
        [0, 7.8, 0],
      ]);
  let ae = r.halfW,
    N = r.armY1 - r.armY0,
    P = r.armY0 - E;
  for (let e = 0; e < A; e += 2.4) {
    let t = Math.min(A, e + 2.4);
    for (let n of [-1, 1])
      (M.push([
        [e, P, n * ae],
        [t, P, n * ae],
      ]),
        M.push([
          [e, P, n * ae],
          [t, P + N, 0],
        ]));
    (M.push([
      [e, P + N, 0],
      [t, P + N, 0],
    ]),
      M.push([
        [t, P, -ae],
        [t, P, ae],
      ]));
  }
  for (let e = 0; e > -j; e -= 2.4) {
    for (let t of [-1, 1])
      M.push([
        [e, P, t * 1.1],
        [e - 2.4, P, t * 1.1],
      ]);
    M.push([
      [e - 2.4, P, -1.1],
      [e - 2.4, P, 1.1],
    ]);
  }
  for (let e of [A * 0.42, A * 0.84])
    M.push([
      [0, 7.8, 0],
      [e, P + N, 0],
    ]);
  (M.push([
    [0, 7.8, 0],
    [-j + 1, P, 0],
  ]),
    O.add(ne(M, 0.18, a)));
  {
    let e = r.halfW,
      n = P - 0.4,
      i = -(e + 1.5),
      o = t(
        new u({
          color: 1714739,
          emissive: 793122,
          roughness: 0.1,
          metalness: 0.6,
        }),
      );
    (k(new c(p, d), 0.6, n, i, 2.6, 2.5, 2.2),
      k(new c(p, o), 1.93, n + 0.9, i, 0.04, 1.3, 1.9),
      k(new c(p, o), 0.6, n + 0.9, i - 1.12, 2.2, 1.3, 0.04),
      k(new c(p, o), 0.6, n + 0.9, i + 1.12, 2.2, 1.3, 0.04),
      k(new c(p, f(16771256)), 0.6, n + 1.9, i, 1.4, 0.06, 1.2),
      k(new c(p, s), 0.6, n - 0.12, i, 3.4, 0.12, 3));
    for (let [e, t, r, o] of [
      [0.6, i - 1.5, 3.4, 0.05],
      [0.6, i + 1.5, 3.4, 0.05],
      [2.3, i, 0.05, 3],
    ])
      k(new c(p, a), e, n + 0.9, t, r, 0.05, o);
    for (let e = -E + 1; e < -0.5; e += 0.4)
      e > -40 && k(new c(p, s), 1.55, e, 0, 0.05, 0.04, 0.6);
  }
  for (let e = 0; e < 4; e++)
    k(new c(p, l), -j + 1.2 + e * 0.9, P - 2.4, 0, 0.8, 2.6, 2.6);
  k(new c(p, s), -j + 6, P, 0, 3.4, 1.6, 1.9);
  let F = f(16722458),
    I = [
      k(new c(p, F), A, P + N, 0, 0.3, 0.3, 0.3),
      k(new c(p, F), 0, 7.8, 0, 0.3, 0.3, 0.3),
      k(new c(p, F), -j, P, 0, 0.3, 0.3, 0.3),
    ];
  (k(new c(p, s), A - 2.5, P - 0.35, 0, 1.6, 0.3, 1.9),
    k(new c(p, f(16773848)), 4, P - 0.2, 0, 0.6, 0.2, 0.6));
  let L = [
    T(O, { skip: new Set(I), name: `m34-crane-slew` }),
    T(i, { skip: new Set([O]), name: `m34-crane-mast` }),
  ];
  return {
    root: i,
    update(e, t) {
      let n = e.wild,
        r = (Math.sin(t * 23.7) * 0.6 + Math.sin(t * 37.1) * 0.4) * 0.006 * n;
      ((O.rotation.y = -e.yaw + r),
        (O.rotation.z =
          Math.sin(t * 17.3) * 0.004 * n -
          (e.phase === `warn` ? 0.006 * n : 0)),
        (O.position.y = E + Math.sin(t * 29) * 0.03 * n));
      let i = t % 1.5 < 0.2;
      for (let e of I) e.visible = i;
    },
    dispose() {
      for (let e of L) e?.dispose();
    },
  };
}
export { ve as createMeridianView };
//# sourceMappingURL=meridian-view-8PfXs4Ea.js.map
