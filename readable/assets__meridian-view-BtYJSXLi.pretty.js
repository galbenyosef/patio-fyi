/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  $ as e,
  Bt as t,
  Dn as n,
  F as r,
  Gt as i,
  H as a,
  Hn as o,
  I as s,
  L as c,
  V as l,
  Vt as u,
  W as d,
  _n as f,
  at as p,
  bn as m,
  cn as h,
  dt as g,
  gt as _,
  jt as v,
  nn as y,
  nt as ee,
  q as b,
  rn as x,
  tt as S,
  v as C,
  vt as w,
  z as T,
  zt as te,
} from "./graphics-quality-CrL3qbU3.js";
import { t as E } from "./static-bake-DFe1Gx40.js";
import { t as D } from "./decor-kit-DYJAmRWC.js";
import {
  PANE_HP as O,
  craneAt as ne,
  craneBrokeAt as re,
  fabricDown as k,
  jamAt as A,
  jibSegment as j,
  paneBox as M,
  paneFracture as N,
  paneShards as ie,
  paneTorn as P,
  powerAt as F,
} from "./meridian-sim-Cefyo3f2.js";
var I = 2048,
  L = 4,
  R = 220,
  z = 24,
  ae = 512,
  B = (e, t) =>
    Math.max(0, Math.min(3, Math.floor((e + 40) / 20))) + 4 * (t < 0 ? 0 : 1);
function oe(e) {
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
function se(e, t, n) {
  let r = e.attributes.position.count,
    i = new Float32Array(r * 4);
  for (let e = 0; e < r; e++)
    ((i[e * 4] = t.r),
      (i[e * 4 + 1] = t.g),
      (i[e * 4 + 2] = t.b),
      (i[e * 4 + 3] = n));
  e.setAttribute(`color`, new s(i, 4));
}
function V(e) {
  let t = e.index ? e.toNonIndexed() : e.clone();
  for (let e of Object.keys(t.attributes))
    [`position`, `normal`, `uv`, `color`].includes(e) || t.deleteAttribute(e);
  return (
    t.attributes.normal || t.computeVertexNormals(),
    t.attributes.uv ||
      t.setAttribute(
        `uv`,
        new s(new Float32Array(t.attributes.position.count * 2), 2),
      ),
    t.clearGroups(),
    t
  );
}
function ce(e, n, r) {
  let a = r.decor ?? [];
  if (!a.length) return null;
  let s = performance.now(),
    c = new Map(),
    l = new Map(),
    u = (e) => e.k + `:` + e.s + (e.o ? `:` + JSON.stringify(e.o) : ``),
    d = (e) =>
      !!e.emissiveMap ||
      (e.emissiveIntensity >= 0.3 &&
        e.emissive &&
        e.emissive.r + e.emissive.g + e.emissive.b > 0.05),
    p = new Map();
  for (let t of a) {
    let n = u(t);
    if (c.has(n)) continue;
    let r;
    try {
      r = D(t.k, t.s, t.o);
    } catch (t) {
      (e.warn?.(`meridian decor ${n}: ${t.message}`), c.set(n, []));
      continue;
    }
    r.updateMatrixWorld(!0);
    let i = [],
      a = new Map(),
      s = /^exit/.test(t.k);
    (r.traverse((e) => {
      if (!e.isMesh || !e.visible) return;
      let t = (Array.isArray(e.material) ? e.material : [e.material])[0];
      if (t.alphaMap) return;
      if (s && d(t)) {
        let n = e.geometry.clone();
        (n.applyMatrix4(e.matrixWorld),
          (a.get(t) ?? a.set(t, []).get(t)).push(n));
        return;
      }
      let n = oe(t),
        r = V(e.geometry);
      if (
        (r.applyMatrix4(e.matrixWorld),
        se(r, t.color, n === `glass` ? t.opacity : 1),
        n === `tex`)
      ) {
        let e = t.map;
        if (!p.has(e)) {
          r.computeBoundingBox();
          let t = r.boundingBox.getSize(new o()),
            n = Math.max(t.x, t.y, t.z);
          p.set(e, {
            img: e.image,
            repeat: [e.repeat.x, e.repeat.y],
            want: Math.max(z, Math.min(ae, n * R)),
          });
        }
        i.push({ cls: n, geo: r, tex: e });
      } else i.push({ cls: n, geo: r });
    }),
      c.set(n, i),
      a.size &&
        l.set(
          n,
          [...a].map(([e, t]) => {
            let n = t.length > 1 ? C(t.map(V), !1) : t[0];
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
  let m = [...p.values()],
    _ = 1;
  {
    let e = m.reduce((e, t) => {
      let n = t.img.width / t.img.height,
        r = n >= 1 ? t.want : t.want * n,
        i = n >= 1 ? t.want / n : t.want;
      return e + (r + 8) * (i + 8);
    }, 0);
    e > I * I * 0.82 && (_ = Math.sqrt((I * I * 0.82) / e));
  }
  let y = (e) => {
      let t = 0,
        n = 0,
        r = 0,
        i = [];
      for (let a of [...m].sort((e, t) => t.want - e.want)) {
        let o = a.img.width / a.img.height,
          s = Math.max(8, Math.round((o >= 1 ? a.want : a.want * o) * e)),
          c = Math.max(8, Math.round((o >= 1 ? a.want / o : a.want) * e));
        if ((t + s + 8 > I && ((t = 0), (n += r), (r = 0)), n + c + 8 > I))
          return null;
        (i.push([a, t + L, n + L, s, c]),
          (t += s + 8),
          (r = Math.max(r, c + 8)));
      }
      return i;
    },
    ee = null;
  for (let e = 0; e < 8 && !(ee = y(_)); e++) _ *= 0.9;
  let b = document.createElement(`canvas`);
  b.width = b.height = I;
  let x = b.getContext(`2d`);
  ((x.fillStyle = `#808080`), x.fillRect(0, 0, I, I));
  for (let [e, t, n, r, i] of ee ?? []) {
    let a = (t, n, r, i) => {
      if (e.repeat[0] === 1 && e.repeat[1] === 1) {
        x.drawImage(e.img, t, n, r, i);
        return;
      }
      let a = r / e.repeat[0],
        o = i / e.repeat[1];
      for (let r = 0; r < Math.ceil(e.repeat[0]); r++)
        for (let i = 0; i < Math.ceil(e.repeat[1]); i++)
          x.drawImage(e.img, t + r * a, n + i * o, a, o);
    };
    (x.save(),
      x.beginPath(),
      x.rect(t - L, n - L, r + 8, i + 8),
      x.clip(),
      a(t - L, n - L, r + 8, i + 8),
      x.restore(),
      a(t, n, r, i),
      (e.rect = [
        (t + 0.5) / I,
        1 - (n + i - 0.5) / I,
        (r - 1) / I,
        (i - 1) / I,
      ]));
  }
  let S = new T(b);
  ((S.colorSpace = f),
    (S.anisotropy = 8),
    (S.generateMipmaps = !0),
    (S.minFilter = v));
  for (let e of c.values())
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
  let E = new Map(),
    O = new te(),
    ne = new h(),
    re = new o(0, 1, 0),
    k = new o(1, 1, 1),
    A = new o(),
    j = new o(),
    M = 0,
    N = new Map();
  for (let e of a) {
    let t = u(e),
      n = c.get(t);
    if (!n?.length && !l.has(t)) continue;
    (M++,
      O.compose(
        j.set(e.x, e.y, e.z),
        ne.setFromAxisAngle(re, e.r ?? 0),
        e.sc ? A.setScalar(e.sc) : k,
      ));
    let r = e.g ? `g:` + e.g : B(e.x, e.z);
    l.has(t) && (N.get(t) ?? N.set(t, []).get(t)).push(O.clone());
    for (let e of n) {
      let t = e.cls + `|` + r,
        n = E.get(t);
      n || ((n = []), E.set(t, n));
      let i = e.geo.clone();
      (i.applyMatrix4(O), n.push(i));
    }
  }
  let ie = e.modules?.get?.(`environment`),
    P = {
      matte: new i({ vertexColors: !0, roughness: 0.82, metalness: 0 }),
      shiny: new i({ vertexColors: !0, roughness: 0.32, metalness: 0.75 }),
      double: new i({
        vertexColors: !0,
        roughness: 0.7,
        metalness: 0,
        side: 2,
      }),
      tex: new i({ vertexColors: !0, map: S, roughness: 0.6, metalness: 0 }),
      glass: new i({
        vertexColors: !0,
        transparent: !0,
        depthWrite: !1,
        roughness: 0.08,
        metalness: 0.1,
      }),
    };
  for (let e of Object.values(P)) ie?.configureCaster?.(e);
  let F = new g();
  ((F.name = `m34-decor`), n.add(F));
  let ce = [],
    le = 0,
    ue = new Map();
  for (let e of a) {
    if (!e.g) continue;
    let t = ue.get(e.g);
    (t ||
      ((t = { node: new g(), x0: 1e9, z0: 1e9, x1: -1e9, z1: -1e9 }),
      (t.node.name = `m34-decor-` + e.g),
      F.add(t.node),
      ue.set(e.g, t)),
      (t.x0 = Math.min(t.x0, e.x)),
      (t.x1 = Math.max(t.x1, e.x)),
      (t.z0 = Math.min(t.z0, e.z)),
      (t.z1 = Math.max(t.z1, e.z)));
  }
  for (let e of ue.values())
    ((e.cx = (e.x0 + e.x1) / 2),
      (e.cz = (e.z0 + e.z1) / 2),
      (e.r = Math.hypot(e.x1 - e.x0, e.z1 - e.z0) / 2));
  for (let [e, n] of E) {
    let [r] = e.split(`|`),
      i = C(n, !1);
    if ((n.forEach((e) => e.dispose()), !i)) continue;
    (i.computeBoundingSphere(),
      ce.push(i),
      (le += i.attributes.position.count / 3));
    let a = new t(i, P[r]);
    ((a.name = `m34-decor-${e}`),
      (a.castShadow = r === `matte` || r === `shiny`),
      (a.receiveShadow = r !== `glass`));
    let o = e.split(`|`)[1];
    (o.startsWith(`g:`) ? ue.get(o.slice(2)).node : F).add(a);
  }
  let de = new g();
  ((de.name = `m34-decor-lit`), F.add(de));
  let H = 0;
  for (let [e, t] of l) {
    let n = N.get(e);
    if (n)
      for (let { mat: r, geo: i } of t) {
        let t = new w(i, r, n.length);
        (n.forEach((e, n) => t.setMatrixAt(n, e)),
          (t.instanceMatrix.needsUpdate = !0),
          t.computeBoundingSphere
            ? t.computeBoundingSphere()
            : (t.frustumCulled = !1),
          (t.name = `m34-decor-lit-` + e),
          de.add(t),
          ce.push(i),
          (le +=
            (n.length *
              (i.index ? i.index.count : i.attributes.position.count)) /
            3),
          H++);
      }
  }
  for (let e of c.values()) for (let t of e) t.geo.dispose();
  return {
    root: F,
    lit: de,
    stats: {
      pieces: M,
      variants: c.size,
      textures: p.size,
      atlasScale: +_.toFixed(2),
      draws: ce.length,
      litDraws: H,
      groups: ue.size,
      tris: Math.round(le),
      ms: Math.round(performance.now() - s),
    },
    groups: ue,
    dispose() {
      n.remove(F);
      for (let e of ce) e.dispose();
      for (let e of Object.values(P)) e.dispose();
      S.dispose();
    },
  };
}
var le = 60,
  ue = [
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
function de(e, s, c, d) {
  let f = c.floor,
    p = c.plate,
    m = c.scale ?? 1,
    h = [],
    _ = (e) => (h.push(e), e),
    v = () => e.modules.get(`audio`),
    y = {
      ell: _(new n(1, 20, 14)),
      cyl: _(new b(1, 1, 1, 12)),
      box: _(new r(1, 1, 1)),
      disc: _(new a(1, 40)),
    },
    x = _(new i({ color: 1054236, roughness: 0.08, metalness: 0.6 })),
    S = _(new i({ color: 1710877, roughness: 0.6, metalness: 0.5 })),
    C = _(
      new u({
        color: 2763822,
        transparent: !0,
        opacity: 0.16,
        depthWrite: !1,
        side: 2,
      }),
    ),
    w = (e) => _(new u({ color: e, toneMapped: !1 })),
    T = w(16722458),
    te = w(2817882),
    E = w(16777215),
    D = w(16724770),
    O = (e, n, r, i, a, o, s, c, l, u = 0, d = 0, f = 0) => {
      let p = new t(n, r);
      return (
        p.position.set(i, a, o),
        p.scale.set(s, c, l),
        p.rotation.set(u, d, f),
        (p.castShadow = !0),
        e.add(p),
        p
      );
    },
    ne = (e) => {
      let t = new g(),
        n = _(new i({ color: e.body, roughness: 0.45, metalness: 0.3 })),
        r = _(new i({ color: e.trim, roughness: 0.5, metalness: 0.2 }));
      (O(t, y.ell, n, 0, 0, 0, 2.4, 1.05, 1.02),
        O(t, y.ell, x, 1.45, 0.28, 0, 1, 0.6, 0.8),
        O(t, y.ell, r, -0.2, -0.2, 0, 2.1, 0.5, 1.04),
        O(
          t,
          y.cyl,
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
        O(t, y.box, n, -6.55, 1.05, 0, 1.1, 1.5, 0.12, 0, 0, -0.35),
        O(t, y.box, r, -5.6, 0.3, 0, 0.6, 0.06, 2.2),
        O(t, y.box, n, -0.3, 1.05, 0, 1.6, 0.4, 0.9),
        O(t, y.cyl, S, 0, 1.35, 0, 0.12, 0.4, 0.12));
      for (let e of [-1, 1]) {
        O(t, y.cyl, S, 0, -1.25, e * 0.95, 0.06, 3.6, 0.06, 0, 0, Math.PI / 2);
        for (let n of [-0.8, 0.9])
          O(t, y.cyl, S, n, -0.95, e * 0.75, 0.05, 0.7, 0.05, e * 0.45, 0, 0);
      }
      let a = new g();
      (a.position.set(0, 1.58, 0),
        t.add(a),
        (O(a, y.disc, C, 0, 0, 0, 6.1, 6.1, 1, -Math.PI / 2).castShadow = !1));
      let o = new g();
      a.add(o);
      for (let e = 0; e < 2; e++)
        O(o, y.box, S, 0, 0.02, 0, 12, 0.04, 0.28, 0, (e * Math.PI) / 2, 0);
      let s = new g();
      (s.position.set(-6.7, 1.1, 0.18),
        t.add(s),
        (O(s, y.disc, C, 0, 0, 0, 0.85, 0.85, 1).castShadow = !1));
      let c = O(s, y.box, S, 0, 0, 0.01, 0.12, 1.7, 0.03);
      ((O(t, y.ell, T, 0.3, -0.1, -1.03, 0.08, 0.08, 0.08).castShadow = !1),
        (O(t, y.ell, te, 0.3, -0.1, 1.03, 0.08, 0.08, 0.08).castShadow = !1));
      let l = O(t, y.ell, E, -6.9, 1.75, 0, 0.1, 0.1, 0.1);
      l.castShadow = !1;
      let u = O(t, y.ell, D, -0.3, 1.3, 0, 0.1, 0.1, 0.1);
      u.castShadow = !1;
      let d = new g();
      return (
        d.position.set(1.6, -1, 0),
        t.add(d),
        O(d, y.cyl, S, 0, 0, 0, 0.24, 0.42, 0.24, 0, 0, Math.PI / 2),
        (O(
          d,
          y.disc,
          x,
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
        { root: t, blades: o, tb: c, strobe: l, beacon: u, head: d }
      );
    },
    re = new ee(0, 0, 0, `YXZ`),
    k = new o(),
    A = (e) => {
      let t = new l(
        e.map(([e, t]) => new o(e, 0, t)),
        !1,
        `centripetal`,
      );
      return { c: t, len: t.getLength() };
    },
    j = ue.map((e, t) => {
      let n = ne(e),
        r = A(e.pts.map(([e, t]) => [e * m, t * m]));
      return { t: e, i: t, ...n, path: r, snd: null, prev: null };
    }),
    M = (e, t, n) => {
      let r = Math.max(p.x0, Math.min(p.x1, e.x)),
        i = Math.max(p.z0, Math.min(p.z1, e.z)),
        a = Math.hypot(e.x - r, e.z - i) || 1,
        o = (r - e.x) / a,
        s = (i - e.z) / a,
        l = e.y - f,
        u = c.ceil - f - 0.6,
        d = l > u ? (u * a) / (l - u) : 40,
        m = Math.min(
          d,
          Math.max(
            2.5,
            5 +
              7 * (0.5 + 0.5 * Math.sin(t * 0.23 + n * 2.1)) +
              3 * Math.sin(t * 0.61 + n),
          ),
        ),
        h = 6 * Math.sin(t * 0.17 + n * 1.3) + 2.5 * Math.sin(t * 0.53 + n * 4);
      return [r + o * m - s * h, f + 0.02, i + s * m + o * h];
    };
  return {
    update(e) {
      let t = d() / le;
      for (let n of j) {
        let { t: r, i } = n,
          a = 0.5 - 0.5 * Math.cos(2 * Math.PI * (t / r.period + r.phase)),
          s = n.path.c
            .getPointAt(Math.min(1, Math.max(0, a)), k.set(0, 0, 0))
            .clone();
        s.y =
          f +
          7.6 * m +
          1.1 * Math.sin(t * 0.4 + i * 2) +
          0.4 * Math.sin(t * 1.3 + i);
        let c = n.prev
          ? s.clone().sub(n.prev).divideScalar(Math.max(0.001, e))
          : new o();
        n.prev = s.clone();
        let l = M(s, t, i),
          u = Math.atan2(-(l[2] - s.z), l[0] - s.x),
          d =
            u +
            Math.max(
              -0.5,
              Math.min(0.5, (c.x * Math.sin(u) + c.z * Math.cos(u)) * 0.04),
            );
        (re.set(
          0,
          d,
          Math.max(
            -0.12,
            Math.min(0.12, -(c.x * Math.cos(u) - c.z * Math.sin(u)) * 0.012),
          ),
          `YXZ`,
        ),
          n.root.position.copy(s),
          n.root.quaternion.setFromEuler(re),
          n.root.updateMatrixWorld(),
          (n.blades.rotation.y = t * 28),
          (n.tb.rotation.z = t * 90),
          (n.strobe.visible = (t * 1.1 + i * 0.37) % 1 < 0.07),
          (n.beacon.visible = (t * 0.9 + i * 0.2) % 1 < 0.14));
        let p = v();
        if (p) {
          if (n.snd?.alive?.()) n.snd.setPosition([s.x, s.y, s.z]);
          else
            try {
              ((n.snd = p.play(`vehicle_rotor`, {
                pos: [s.x, s.y, s.z],
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
      for (let e of j) {
        try {
          e.snd?.stop?.();
        } catch {}
        s.remove(e.root);
      }
      for (let e of h) e.dispose?.();
    },
  };
}
var H = Math.PI * 2,
  U = (e) => {
    let t = (e * 2654435761) | 0;
    return (
      (t ^= t >>> 15),
      (t = Math.imul(t, 2246822519)),
      (t ^= t >>> 13),
      ((t ^ (t >>> 16)) >>> 0) / 4294967296
    );
  },
  fe = {
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
  pe = {
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
function me(e, t) {
  let n = [];
  for (let [i, a, o, c, l, u, f, p] of e) {
    if (t) continue;
    let e = p ? 1184790 : f,
      m = new r(c, l, u);
    m.translate(i, a + l / 2, o);
    let h = new d(e),
      g = m.attributes.position.count,
      _ = new Float32Array(g * 3);
    for (let e = 0; e < g; e++)
      ((_[e * 3] = h.r), (_[e * 3 + 1] = h.g), (_[e * 3 + 2] = h.b));
    (m.setAttribute(`color`, new s(_, 3)), n.push(m));
  }
  if (!n.length) return null;
  let i = C(n);
  return (n.forEach((e) => e.dispose()), i.computeBoundingBox(), i);
}
function he(e, t = 1024) {
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
    s = t / 2;
  ((r.lineCap = `round`), (r.lineJoin = `round`));
  let c = r.createRadialGradient(o, s, 0, o, s, t * 0.16);
  (c.addColorStop(0, `rgba(255,255,255,.62)`),
    c.addColorStop(0.35, `rgba(255,255,255,.3)`),
    c.addColorStop(0.7, `rgba(255,255,255,.08)`),
    c.addColorStop(1, `rgba(255,255,255,0)`),
    (r.fillStyle = c),
    r.beginPath(),
    r.arc(o, s, t * 0.16, 0, H),
    r.fill());
  for (let e = 0; e < 1400; e++) {
    let e = a() * H,
      n = a() ** 1.7 * t * 0.13,
      i = 0.4 + a() * 1.6;
    ((r.fillStyle =
      `rgba(255,255,255,` +
      ((0.15 + a() * 0.55) * Math.max(0, 1 - n / (t * 0.14))).toFixed(3) +
      `)`),
      r.fillRect(o + Math.cos(e) * n, s + Math.sin(e) * n, i, i));
  }
  let l = (e, t, n) => {
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
    u = (e, n, r, i, o, s) => {
      let c = [[e, n]],
        d = Math.max(4, Math.round(i / (t * 0.018))),
        f = 0;
      for (let t = 0; t < d; t++) {
        r += (a() - 0.5) * 0.34 + (a() < 0.08 ? (a() - 0.5) * 1.1 : 0);
        let l = (i / d) * (0.65 + a() * 0.7);
        if (
          ((e += Math.cos(r) * l),
          (n += Math.sin(r) * l),
          (f += l),
          c.push([e, n]),
          s < 2 && t > 1 && a() < 0.13)
        ) {
          let c = a() < 0.5 ? -1 : 1;
          u(
            e,
            n,
            r + c * (0.35 + a() * 0.55),
            (i - f) * (0.35 + a() * 0.35),
            o * (1 - t / d) * 0.6,
            s + 1,
          );
        }
      }
      return (l(c, o, 0.45), c);
    },
    d = 14 + Math.floor(a() * 10),
    f = [];
  for (let e = 0; e < d; e++) {
    let n = (e / d) * H + (a() - 0.5) * (H / d) * 0.7,
      r = t * (0.18 + a() * 0.3);
    f.push({
      a: n,
      len: r,
      pts: u(
        o + Math.cos(n) * t * 0.012,
        s + Math.sin(n) * t * 0.012,
        n,
        r,
        3.4 + a() * 2.4,
        0,
      ),
    });
  }
  let p = (e, t) => {
    for (let n = 1; n < e.length; n++) {
      let r = Math.hypot(e[n - 1][0] - o, e[n - 1][1] - s),
        i = Math.hypot(e[n][0] - o, e[n][1] - s);
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
    for (let n = 0; n < d; n++) {
      if (a() > 0.82 - e * 0.07) continue;
      let i = r * (0.9 + a() * 0.2),
        c = p(f[n].pts, i),
        u = p(f[(n + 1) % d].pts, i * (0.92 + a() * 0.16));
      if (!c || !u) continue;
      let m = [(c[0] + u[0]) / 2, (c[1] + u[1]) / 2],
        h = (a() - 0.3) * t * 0.012,
        g = m[0] - o,
        _ = m[1] - s,
        v = Math.hypot(g, _) || 1,
        y = [m[0] + (g / v) * h, m[1] + (_ / v) * h],
        ee = [c];
      for (let e = 1; e < 4; e++) {
        let n = e / 4,
          r =
            n < 0.5
              ? [c[0] + (y[0] - c[0]) * n * 2, c[1] + (y[1] - c[1]) * n * 2]
              : [
                  y[0] + (u[0] - y[0]) * (n - 0.5) * 2,
                  y[1] + (u[1] - y[1]) * (n - 0.5) * 2,
                ];
        ee.push([
          r[0] + (a() - 0.5) * t * 0.005,
          r[1] + (a() - 0.5) * t * 0.005,
        ]);
      }
      (ee.push(u), l(ee, 2.3 - e * 0.22, 1.2 - e * 0.1));
    }
  }
  for (let e = 0; e < 90; e++) {
    let e = a() * H,
      n = t * (0.012 + a() * 0.06),
      r = o + Math.cos(e) * n,
      i = s + Math.sin(e) * n,
      c = e + (a() - 0.5) * 2.4,
      u = t * (0.006 + a() * 0.02);
    l(
      [
        [r, i],
        [
          r + Math.cos(c) * u * 0.5 + (a() - 0.5) * 2,
          i + Math.sin(c) * u * 0.5 + (a() - 0.5) * 2,
        ],
        [r + Math.cos(c) * u, i + Math.sin(c) * u],
      ],
      1.1,
      0.4,
    );
  }
  let m = (e, t, n) => {
    r.beginPath();
    for (let i = 0; i <= n; i++) {
      let c = (i / n) * H,
        l = e + a() * (t - e);
      i
        ? r.lineTo(o + Math.cos(c) * l, s + Math.sin(c) * l)
        : r.moveTo(o + Math.cos(c) * l, s + Math.sin(c) * l);
    }
    r.fill();
  };
  ((r.fillStyle = `rgba(255,255,255,.92)`),
    m(t * 0.012, t * 0.022, 18),
    (r.globalCompositeOperation = `destination-out`),
    (r.fillStyle = `#fff`),
    m(t * 0.0055, t * 0.0085, 14),
    (r.globalCompositeOperation = `source-over`));
  let h = new T(n);
  return ((h.anisotropy = 8), (h.generateMipmaps = !0), (h.minFilter = v), h);
}
function ge(e, t) {
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
  let i = new T(n);
  return ((i.colorSpace = f), i);
}
function _e(n, a, s, l, { setGroup: f } = {}) {
  let v = s.meridian;
  if (!v) return null;
  let b = new g();
  ((b.name = `meridian`), a.add(b));
  let C = [],
    T = (...e) => (C.push(...e), e[0]),
    E = v.floor,
    D = v.scale ?? 1,
    I = new te(),
    L = new h(),
    R = new o(),
    z = new o(),
    ae = new o(0, 1, 0),
    B = new te().makeScale(0, 0, 0),
    oe = () => null,
    se = () => n.modules.get(`audio`),
    V = 0,
    le = T(
      new i({
        vertexColors: !0,
        roughness: 0.78,
        metalness: 0.05,
        flatShading: !0,
      }),
    ),
    ue = T(new u({ vertexColors: !0, toneMapped: !0 })),
    _e = new Map();
  for (let [e, t] of v.props.entries()) {
    let n = _e.get(t.kind);
    (n || ((n = { list: [] }), _e.set(t.kind, n)), n.list.push(e));
  }
  let ye = v.props.map(() => ({ alive: !0 })),
    be = [];
  for (let [e, t] of _e) {
    let n = fe[e];
    if (!n) continue;
    let r = me(n, !1),
      i = me(n, !0);
    if (!r) continue;
    (T(r),
      (t.mesh = new w(r, le, t.list.length)),
      (t.mesh.castShadow = e !== `sprinkler`),
      (t.mesh.receiveShadow = !0),
      (t.mesh.name = `m34-${e}`),
      i &&
        (T(i),
        (t.glow = new w(i, ue, t.list.length)),
        (t.glow.name = `m34-${e}-glow`)),
      (t.glow = null));
    let a = r.boundingBox;
    (t.list.forEach((n, r) => {
      let i = v.props[n];
      (L.setFromAxisAngle(ae, i.yaw),
        I.compose(R.set(i.x, i.y, i.z), L, z.set(i.s, i.s, i.s)),
        t.mesh.setMatrixAt(r, I),
        (ye[n].kind = e),
        (ye[n].k = t),
        (ye[n].j = r));
      let o = (Math.max(a.max.x - a.min.x, a.max.z - a.min.z) / 2) * i.s,
        s = (a.max.y - a.min.y) * i.s;
      be[n] = [
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
  let W = null;
  try {
    W = ce(n, b, v);
  } catch (e) {
    n.warn?.(`meridian decor failed: ` + e.message);
  }
  let xe = n.modules.get(`environment`);
  W &&
    new URLSearchParams(globalThis.location?.search ?? ``).get(
      `shadowcache`,
    ) !== `0` &&
    xe?.addStaticShadowRoot?.(W.root);
  let Se = () => xe?.invalidateStaticShadows?.(!0);
  {
    let e = T(ge(`MERIDIAN MUTUAL`, `INSURANCE  ·  SINCE 1921`)),
      n = T(
        new u({ map: e, transparent: !0, toneMapped: !0, color: 13617336 }),
      ),
      r = T(new y(1, 1));
    for (let e of v.props.filter(
      (e) => e.kind === `logo` || e.kind === `logo-lobby`,
    )) {
      let i = new t(r, n);
      (i.position.set(e.x, e.y, e.z), (i.rotation.y = e.yaw + Math.PI));
      let a = e.kind === `logo` ? 3.8 : 2.2;
      (i.scale.set(a * e.s, (a * e.s) / 4, 1), b.add(i));
    }
  }
  let G = v.plate,
    K = G.x1 - G.x0,
    q = G.z1 - G.z0,
    Ce = Math.round(K / 0.6),
    we = Math.round(q / 1.2),
    Te = K / Ce,
    Ee = q / we,
    De = T(new r(Te - 0.025, 0.018, Ee - 0.025)),
    Oe = T(new i({ color: 14276300, roughness: 0.95 })),
    ke = new w(De, Oe, Ce * we);
  ((ke.name = `m34-ceiling-tiles`), (ke.receiveShadow = !0));
  let Ae = new Uint8Array(Ce * we),
    je = (e, t) => {
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
    for (let t = 0; t < we; t++) {
      let n = G.x0 + Te * (e + 0.5),
        r = G.z0 + Ee * (t + 0.5),
        i = e * we + t;
      if (je(n, r)) {
        ke.setMatrixAt(i, B);
        continue;
      }
      ((Ae[i] = 1),
        I.makeTranslation(n, v.ceil - 0.009, r),
        ke.setMatrixAt(i, I));
    }
  ((ke.instanceMatrix.needsUpdate = !0), b.add(ke));
  {
    let e = T(new r(1, 0.012, 1)),
      t = T(new i({ color: 12170926, roughness: 0.7, metalness: 0.3 })),
      n = [],
      a = [];
    for (let e = 0; e <= Ce; e += 2) n.push(G.x0 + Te * e);
    for (let e = 0; e <= we; e++) a.push(G.z0 + Ee * e);
    let o = new w(e, t, n.length + a.length),
      s = 0;
    for (let e of n)
      (I.compose(R.set(e, v.ceil - 0.02, 0), L.identity(), z.set(0.024, 1, q)),
        o.setMatrixAt(s++, I));
    for (let e of a)
      (I.compose(R.set(0, v.ceil - 0.02, e), L.identity(), z.set(K, 1, 0.024)),
        o.setMatrixAt(s++, I));
    ((o.instanceMatrix.needsUpdate = !0), b.add(o));
  }
  {
    let e = [];
    for (let t = G.x0 + 2.1; t < G.x1 - 1; t += 3.6)
      for (let n = G.z0 + 1.8; n < G.z1 - 1; n += 3.6) {
        let r = v.core;
        (t > r.x0 - 0.5 &&
          t < r.x1 + 0.5 &&
          n > r.z0 - 0.5 &&
          n < r.z1 + 0.5 &&
          !(Math.abs(n) < 2)) ||
          e.push({ x: t, z: n });
      }
    let t = T(new r(0.6, 0.03, 1.2)),
      n = T(new i({ color: 13225168, roughness: 0.35, metalness: 0.2 })),
      a = new w(t, n, e.length);
    (e.forEach((e, t) => {
      (I.makeTranslation(e.x, v.ceil - 0.012, e.z), a.setMatrixAt(t, I));
    }),
      (a.instanceMatrix.needsUpdate = !0),
      (a.name = `m34-troffers`),
      b.add(a));
  }
  {
    let e = (e, n, a, o, s, c, l, u = 0.6, d = 0.4) => {
      let f = new t(
        T(new r(o, s, c)),
        T(new i({ color: l, roughness: u, metalness: d })),
      );
      return (f.position.set(e, n + s / 2, a), b.add(f), f);
    };
    e(0, v.slab - 0.28, 0, K + 4, 0.28, q + 4, 4869198, 0.95, 0);
    for (let t of [-q * 0.3, q * 0.3])
      e(0, v.ceil + 0.35, t, K - 2, 0.55, 1.1, 10396840, 0.45, 0.6);
    for (let t of [-K * 0.3, K * 0.3])
      e(t, v.ceil + 0.3, 0, 0.8, 0.45, q - 4, 10396840, 0.45, 0.6);
    for (let t of [-8 * D, 8 * D])
      e(0, v.ceil + 0.95, t, K - 2, 0.1, 0.1, 10697258, 0.6, 0.2);
    for (let t of [-q * 0.42, q * 0.42])
      e(0, v.ceil + 1.05, t, K - 2, 0.08, 0.5, 6975088, 0.6, 0.4);
  }
  let J = v.panes,
    Me = new Map(J.map((e, t) => [e.id, t])),
    Ne = T(new r(1, 1, 1)),
    Pe = T(
      new i({
        color: 10466239,
        transparent: !0,
        opacity: 0.1,
        roughness: 0.3,
        metalness: 0,
        depthWrite: !1,
        side: 2,
      }),
    ),
    Fe = T(
      new i({
        color: 12176598,
        transparent: !0,
        opacity: 0.075,
        roughness: 0.3,
        metalness: 0,
        depthWrite: !1,
        side: 2,
      }),
    ),
    Ie = T(new y(1, 1)),
    Le = J.filter((e) => e.ext),
    Re = J.filter((e) => !e.ext),
    ze = new w(Ne, Pe, Le.length),
    Be = new w(Ne, Fe, Re.length);
  ((ze.renderOrder = 3), (Be.renderOrder = 3));
  let Ve = [],
    He = new Map(),
    Ue = 0;
  for (let e = 0; e < 4; e++) {
    let t = T(he(e * 977 + 13)),
      n = T(
        new i({
          color: 16054522,
          alphaMap: t,
          transparent: !0,
          depthWrite: !1,
          side: 2,
          roughness: 0.12,
          metalness: 0,
        }),
      ),
      r = new w(Ie, n, 160);
    ((r.renderOrder = 4), (r.frustumCulled = !1));
    for (let e = 0; e < 160; e++) r.setMatrixAt(e, B);
    Ve.push(r);
  }
  let We = Array(640).fill(null),
    Ge = new h(),
    Ke = new h(),
    qe = new o(0, 0, 1),
    Je = (e) => {
      for (let t of He.get(e) ?? []) {
        if (We[t] !== e) continue;
        We[t] = null;
        let n = Ve[(t / 160) | 0];
        (n.setMatrixAt(t % 160, B), (n.instanceMatrix.needsUpdate = !0));
      }
      He.delete(e);
    },
    Ye = (e, t, n) => {
      let r = M(e),
        i = r[3] - r[0] > r[5] - r[2],
        a = i ? r[0] : r[2],
        o = i ? r[3] : r[5],
        s = Math.min(o - 0.05, Math.max(a + 0.05, i ? t[0] : t[2])),
        c = Math.min(r[4] - 0.05, Math.max(r[1] + 0.05, t[1])),
        l = (e.ext ? 0.85 : 0.62) + U(n) * 0.45;
      l = Math.min(l, 2 * Math.min(s - a, o - s, c - r[1], r[4] - c) + 0.35);
      let u = Ue++ % 640;
      if (We[u]) {
        let e = He.get(We[u]);
        e && e.splice(e.indexOf(u), 1);
      }
      ((We[u] = e.id),
        He.has(e.id) || He.set(e.id, []),
        He.get(e.id).push(u),
        Ge.setFromAxisAngle(ae, i ? 0 : Math.PI / 2),
        Ke.setFromAxisAngle(qe, U(n * 3 + 1) * H),
        Ge.multiply(Ke));
      let d = i ? (r[2] + r[5]) / 2 : (r[0] + r[3]) / 2,
        f = U(n * 5) < 0.5 ? -1 : 1;
      I.compose(R.set(i ? s : d, c, i ? d : s), Ge, z.set(l * f, l, 1));
      let p = Ve[(u / 160) | 0];
      (p.setMatrixAt(u % 160, I), (p.instanceMatrix.needsUpdate = !0));
    },
    Xe = [
      T(
        new i({
          color: 11124682,
          transparent: !0,
          opacity: 0.3,
          roughness: 0.12,
          metalness: 0.15,
          depthWrite: !1,
          side: 2,
        }),
      ),
      T(
        new i({
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
    Ze = T(
      new i({
        color: 14083822,
        transparent: !0,
        opacity: 0.55,
        roughness: 0.1,
        metalness: 0.2,
        depthWrite: !1,
        side: 2,
      }),
    ),
    Qe = [],
    $e = (e) => {
      let t = Math.hypot(e.b[0] - e.a[0], e.b[1] - e.a[1]) || 1;
      return {
        ax: e.a[0],
        az: e.a[1],
        dx: (e.b[0] - e.a[0]) / t,
        dz: (e.b[1] - e.a[1]) / t,
        y0: e.y0,
      };
    },
    et = (e) => {
      let n = Qe[e];
      if (n) {
        for (let e of n) (b.remove(e), e.geometry.dispose());
        Qe[e] = null;
      }
      let r = [[], []],
        i = [],
        a = l();
      for (let t = e * 16; t < Math.min(J.length, (e + 1) * 16); t++) {
        let e = J[t];
        if (P(v, e, a)) continue;
        let n = ie(v, e);
        if (!n) continue;
        let o = N(e),
          s = $e(e),
          c = o.verts,
          l = r[+!e.ext],
          u = (e) => [
            s.ax + s.dx * c[e * 2],
            s.y0 + c[e * 2 + 1],
            s.az + s.dz * c[e * 2],
          ];
        for (let e = 0; e < o.nt; e++) {
          if (!n.alive[e]) continue;
          let t = o.tris[e * 3],
            r = o.tris[e * 3 + 1],
            a = o.tris[e * 3 + 2];
          l.push(...u(t), ...u(r), ...u(a));
          let d = o.cen[e * 2],
            f = o.cen[e * 2 + 1];
          for (let t = 0; t < 3; t++) {
            let r = o.nb[e * 3 + t];
            if (r < 0 || n.alive[r]) continue;
            let a = o.tris[e * 3 + t],
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
              m = u(a),
              h = u(l),
              g = p(l),
              _ = p(a);
            i.push(...m, ...h, ...g, ...m, ...g, ..._);
          }
        }
      }
      let o = [];
      if (
        (r.forEach((e, n) => {
          if (!e.length) return;
          let r = new c();
          (r.setAttribute(`position`, new p(e, 3)), r.computeVertexNormals());
          let i = new t(r, Xe[n]);
          ((i.renderOrder = 3), o.push(i));
        }),
        i.length)
      ) {
        let e = new c();
        (e.setAttribute(`position`, new p(i, 3)), e.computeVertexNormals());
        let n = new t(e, Ze);
        ((n.renderOrder = 4), o.push(n));
      }
      for (let e of o) ((e.name = `m34-broken-glass`), b.add(e));
      Qe[e] = o.length ? o : null;
    };
  C.push({
    dispose() {
      for (let e of Qe) if (e) for (let t of e) t.geometry.dispose();
    },
  });
  let tt = (e, t = 1, n = 0) => {
      let r = M(e),
        i = (r[0] + r[3]) / 2,
        a = (r[1] + r[4]) / 2 - 0.0075,
        o = (r[2] + r[5]) / 2,
        s = r[3] - r[0],
        c = r[4] - r[1] + 0.015,
        l = r[5] - r[2];
      return (
        I.compose(
          R.set(i, a, o),
          L.identity(),
          z.set(Math.max(s, 0.012 * t), c, Math.max(l, 0.012 * t)),
        ),
        I
      );
    },
    nt = J.map(() => ({ stage: 0, nb: 0, torn: !1 }));
  (Le.forEach((e, t) => ze.setMatrixAt(t, tt(e))),
    Re.forEach((e, t) => Be.setMatrixAt(t, tt(e))),
    Le.forEach((e, t) => ze.setColorAt(t, new d(1, 1, 1))),
    Re.forEach((e, t) => Be.setColorAt(t, new d(1, 1, 1))));
  let rt = new Map([
    ...Le.map((e, t) => [e.id, t]),
    ...Re.map((e, t) => [e.id, t]),
  ]);
  b.add(ze, Be, ...Ve);
  let it = null,
    at = [];
  {
    let e = T(new r(1, 1, 1)),
      t = T(new i({ color: 2830131, roughness: 0.5, metalness: 0.6 })),
      n = [];
    for (let e of Le) {
      let t = M(e),
        r = t[3] - t[0] > t[5] - t[2];
      n.push(
        r
          ? [t[0], E, t[2] + 0.03, 0.07, v.ceil - E, 0.14]
          : [t[0] + 0.03, E, t[2], 0.14, v.ceil - E, 0.07],
      );
    }
    for (let [e, t, r, i] of [
      [0, v.plate.z0, K, 0.16],
      [0, v.plate.z1, K, 0.16],
      [v.plate.x0, 0, 0.16, q],
      [v.plate.x1, 0, 0.16, q],
    ])
      (n.push([e, E, t, r, 0.08, i]),
        n.push([e, v.ceil - 0.08, t, r, 0.16, i]));
    let a = new w(e, t, n.length);
    (n.forEach(([e, t, n, r, i, o], s) => {
      (I.compose(R.set(e, t + i / 2, n), L.identity(), z.set(r, i, o)),
        s < Le.length && Le[s].id.split(`-`).pop() % 2 && I.copy(B),
        a.setMatrixAt(s, I),
        s < Le.length && at.push(I.clone()));
    }),
      (a.instanceMatrix.needsUpdate = !0),
      (a.castShadow = !0),
      b.add(a),
      (it = a));
  }
  let ot = new Map(Le.map((e, t) => [e.id, t])),
    st = (e, t) => {
      let n = ot.get(e.id);
      n != null &&
        (it.setMatrixAt(n, t ? B : at[n]),
        (it.instanceMatrix.needsUpdate = !0));
    },
    ct = 2400,
    lt = T(new y(1, 1)),
    ut = T(
      new u({
        vertexColors: !1,
        side: 2,
        transparent: !0,
        depthWrite: !1,
        toneMapped: !0,
      }),
    ),
    Y = new w(lt, ut, ct);
  ((Y.frustumCulled = !1), (Y.renderOrder = 5), Y.instanceMatrix.setUsage(S));
  let dt = [];
  for (let e = 0; e < ct; e++) (Y.setMatrixAt(e, B), Y.setColorAt(e, new d(0)));
  b.add(Y);
  let ft = 0,
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
        floorY: l = E,
        stretch: u = 1,
      } = {},
    ) => {
      let f = ft++ % ct;
      ((dt[f] = {
        p: e.slice(),
        v: t.slice(),
        size: n,
        life: r,
        age: 0,
        drag: a,
        grav: o,
        flutter: s,
        spin: c,
        rot: [U(f) * H, U(f + 1) * H, 0],
        floorY: l,
        stretch: u,
        col: new d(i),
      }),
        Y.setColorAt(f, dt[f].col));
    },
    pt = new ee(),
    mt = (e) => {
      let t = !1;
      for (let n = 0; n < ct; n++) {
        let r = dt[n];
        if (!r) continue;
        if (((t = !0), (r.age += e), r.age > r.life)) {
          (Y.setMatrixAt(n, B), (dt[n] = null));
          continue;
        }
        let i = Math.exp(-r.drag * e);
        ((r.v[0] *= i),
          (r.v[2] *= i),
          (r.v[1] = r.v[1] * i - r.grav * e),
          r.flutter &&
            ((r.v[0] += Math.sin(V * 3 + n) * r.flutter * e),
            (r.v[2] += Math.cos(V * 2.3 + n * 1.7) * r.flutter * e)));
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
          pt.set(r.rot[0], r.rot[1], r.rot[2]),
          L.setFromEuler(pt));
        let a = Math.min(1, (r.life - r.age) / 0.4);
        (I.compose(
          R.fromArray(r.p),
          L,
          z.set(r.size * a, r.size * r.stretch * a, 1),
        ),
          Y.setMatrixAt(n, I));
      }
      t &&
        ((Y.instanceMatrix.needsUpdate = !0),
        Y.instanceColor && (Y.instanceColor.needsUpdate = !0));
    },
    ht = (e, t, n, r) => {
      let i = M(e),
        a = i[3] - i[0] > i[5] - i[2],
        o = a ? [0, 0, 1] : [1, 0, 0];
      for (let e = 0; e < n; e++) {
        let s = U(e * 3 + V * 100),
          c = U(e * 7 + 1 + V * 50),
          l =
            t && e < n * 0.4
              ? [
                  t[0] + (U(e) - 0.5) * 0.5,
                  t[1] + (U(e + 9) - 0.5) * 0.5,
                  t[2] + (U(e + 5) - 0.5) * 0.5,
                ]
              : [
                  a ? i[0] + (i[3] - i[0]) * s : i[0],
                  i[1] + (i[4] - i[1]) * c,
                  a ? i[2] : i[2] + (i[5] - i[2]) * s,
                ],
          u = r ?? (U(e + 2) > 0.5 ? 1 : -1),
          d = 1.2 + U(e * 11) * 3.2;
        X(
          l,
          [
            o[0] * u * d + (U(e * 13) - 0.5),
            U(e * 17) * 1.5 - 0.5,
            o[2] * u * d + (U(e * 19) - 0.5),
          ],
          {
            size: 0.015 + U(e * 23) * 0.045,
            life: r ? 6 : 2.5 + U(e) * 1.5,
            color: 6124674,
            drag: 0.15,
            spin: 8 + U(e) * 10,
            stretch: 0.6 + U(e * 29),
          },
        );
      }
    },
    gt = (e) =>
      e.face === `north`
        ? -1
        : e.face === `south`
          ? 1
          : e.face === `west`
            ? -1
            : e.face === `east`
              ? 1
              : null,
    _t = (e) => {
      let t = Math.hypot(e.b[0] - e.a[0], e.b[1] - e.a[1]),
        n = e.y1 - e.y0;
      return [[t / 2, n / 2, Math.hypot(t, n) / 2, 0]];
    },
    vt = (e, t) => {
      let n = J[e],
        r = $e(n);
      for (let e of t) {
        let t = [r.ax + r.dx * e[0], r.y0 + e[1], r.az + r.dz * e[0]],
          i = Math.round(
            Math.min(110, 18 + e[2] * e[2] * 22) * (n.ext ? 1 : 0.7),
          ),
          a = M(n),
          o = a[3] - a[0] > a[5] - a[2] ? [0, 0, 1] : [1, 0, 0],
          s = n.ext ? gt(n) : null;
        for (let n = 0; n < i; n++) {
          let i = U(n * 3 + V * 100) * H,
            a = e[2] * Math.sqrt(U(n * 7 + 1 + V * 50)) * 0.8,
            c = s ?? (U(n + 2) > 0.5 ? 1 : -1),
            l = 0.8 + U(n * 11) * 2.8,
            u = [
              t[0] + r.dx * Math.cos(i) * a,
              t[1] + Math.sin(i) * a,
              t[2] + r.dz * Math.cos(i) * a,
            ];
          X(
            u,
            [
              o[0] * c * l + (U(n * 13) - 0.5),
              U(n * 17) * 1.2 - 0.6,
              o[2] * c * l + (U(n * 19) - 0.5),
            ],
            {
              size: 0.02 + U(n * 23) * 0.07,
              life: s ? 6 : 2.5 + U(n) * 1.5,
              color: 6124674,
              drag: 0.15,
              spin: 8 + U(n) * 10,
              stretch: 0.6 + U(n * 29),
            },
          );
        }
        oe()?.play(`glass_shatter`, {
          pos: t,
          volume: Math.min(1, (n.ext ? 0.7 : 0.5) + e[2] * 0.25),
          size: Math.min(1.6, 0.6 + e[2] * 0.5),
        });
      }
    },
    yt = ve(v, T);
  b.add(yt.root);
  let bt = (e) => {
      let t = J[e],
        n = M(t),
        r = [
          (n[0] + n[3]) / 2,
          (v.crane.armY0 + v.crane.armY1) / 2,
          (n[2] + n[5]) / 2,
        ],
        i = gt(t),
        a = n[3] - n[0] > n[5] - n[2],
        o = a ? 0 : -i,
        s = a ? -i : 0;
      ht(t, null, 150, -i);
      for (let e = 0; e < 30; e++)
        X(
          [r[0] + o * 0.1, E + 0.2 + U(e + V) * 3.5, r[2] + s * 0.1],
          [
            o * (3 + U(e * 7 + V) * 5) + (U(e * 3 + V) - 0.5) * 2,
            U(e * 5 + V) * 2,
            s * (3 + U(e * 11 + V) * 5) + (U(e * 9 + V) - 0.5) * 2,
          ],
          {
            size: 0.06 + U(e) * 0.1,
            life: 5,
            color: 7177104,
            drag: 0.2,
            spin: 9,
            stretch: 0.7,
          },
        );
      se()?.play(`glass_shatter`, { pos: r, volume: 1.25, size: 1.6 });
    },
    xt = (e, t, n) => {
      let r = n.bx - n.ax,
        i = n.bz - n.az,
        a = r * r + i * i || 1,
        o = Math.max(0, Math.min(1, ((e - n.ax) * r + (t - n.az) * i) / a));
      return Math.hypot(e - (n.ax + r * o), t - (n.az + i * o));
    },
    St = -1,
    Ct = -99,
    wt = 2,
    Tt = 0,
    Et = 0,
    Dt = 0,
    Ot = 0,
    kt = 0,
    Z = null;
  v.plate.x1;
  let At = 20 * D;
  new d(9209210);
  let jt = T(new y(1, 1)),
    Mt = new _(new Float32Array(280), 1);
  jt.setAttribute(`aAlpha`, Mt);
  let Nt = T(
      new m({
        transparent: !0,
        depthWrite: !1,
        uniforms: { uColor: { value: new d(9077624) } },
        vertexShader: `attribute float aAlpha;varying float vA;varying vec2 vUv;void main(){vUv=uv;vA=aAlpha;vec4 c=modelViewMatrix*instanceMatrix*vec4(0.,0.,0.,1.);float s=length(instanceMatrix[0].xyz);c.xy+=position.xy*s;gl_Position=projectionMatrix*c;}`,
        fragmentShader: `uniform vec3 uColor;varying float vA;varying vec2 vUv;void main(){float d=length(vUv-.5)*2.;float a=1.-smoothstep(.15,1.,d);gl_FragColor=vec4(uColor,a*a*vA);}`,
      }),
    ),
    Pt = new w(jt, Nt, 280);
  ((Pt.frustumCulled = !1), (Pt.renderOrder = 6), (Pt.name = `m34-crane-dust`));
  for (let e = 0; e < 280; e++) Pt.setMatrixAt(e, B);
  b.add(Pt);
  let Ft = [],
    It = 0,
    Lt = (e, t, n, r, i) => {
      Ft[It++ % 280] = {
        p: e.slice(),
        v: t.slice(),
        size: n,
        life: r,
        age: 0,
        alpha: i,
      };
    },
    Rt = (e, t) => {
      let n = !1;
      for (let t = 0; t < 280; t++) {
        let r = Ft[t];
        if (!r) continue;
        if (((n = !0), (r.age += e), r.age > r.life)) {
          ((Ft[t] = null), Pt.setMatrixAt(t, B), (Mt.array[t] = 0));
          continue;
        }
        let i = Math.exp(-0.12 * e);
        ((r.v[0] *= i), (r.v[2] *= i), (r.v[1] *= Math.exp(-0.6 * e)));
        for (let t = 0; t < 3; t++) r.p[t] += r.v[t] * e;
        r.p[1] = Math.min(v.ceil - 0.8, Math.max(E + 0.6, r.p[1]));
        let a = r.size * (1 + (r.age / r.life) * 1.6);
        (I.makeScale(a, a, a).setPosition(r.p[0], r.p[1], r.p[2]),
          Pt.setMatrixAt(t, I),
          (Mt.array[t] =
            r.alpha *
            Math.min(1, r.age / 1.2) *
            Math.min(1, (r.life - r.age) / 8)));
      }
      (n && ((Pt.instanceMatrix.needsUpdate = !0), (Mt.needsUpdate = !0)),
        Nt.uniforms.uColor.value.setHex(9077624).multiplyScalar(1 - 0.75 * t));
    },
    zt = T(
      new u({
        color: 8222572,
        transparent: !0,
        opacity: 0,
        depthTest: !1,
        depthWrite: !1,
        toneMapped: !1,
      }),
    ),
    Bt = new t(T(new y(1, 1)), zt);
  ((Bt.renderOrder = 999),
    (Bt.frustumCulled = !1),
    (Bt.visible = !1),
    b.add(Bt));
  let Vt = new o(),
    Ht = new h(),
    Ut = (e, t) => {
      ((Bt.visible = e > 0.005),
        Bt.visible &&
          (n.camera.getWorldQuaternion(Ht),
          Vt.set(0, 0, -0.25).applyQuaternion(Ht),
          Bt.position.copy($).add(Vt),
          Bt.quaternion.copy(Ht),
          Bt.scale.set(4, 4, 1),
          (zt.opacity = e),
          zt.color.setHex(8222572).multiplyScalar(1 - 0.7 * t)));
    },
    Wt = v.fabric ?? [],
    Gt = new Uint8Array(Wt.length),
    Kt = new w(
      T(new r(1, 1, 1)),
      T(new i({ color: 9078653, roughness: 0.95, flatShading: !0 })),
      Math.max(1, Wt.length),
    );
  ((Kt.name = `m34-fallen-partitions`),
    (Kt.castShadow = !0),
    (Kt.receiveShadow = !0));
  for (let e = 0; e < Wt.length; e++) Kt.setMatrixAt(e, B);
  ((Kt.instanceMatrix.needsUpdate = !0), b.add(Kt));
  let qt = () => {
      let e = l(),
        t = n.modules.get(`demo`),
        r = !1;
      for (let n = 0; n < Wt.length; n++) {
        let i = Wt[n],
          a = +!!k(v, i, e);
        if (a === Gt[n]) continue;
        if (((Gt[n] = a), (r = !0), t?.setObjectVisible?.(i.object, !a), !a)) {
          Kt.setMatrixAt(n, B);
          continue;
        }
        let [o, s, c, l] = i.box,
          u = c - o > l - s,
          d = u ? c - o : l - s,
          f = U(n * 7 + e) < 0.5 ? -1 : 1,
          p = (o + c) / 2 + (u ? 0 : f * 0.72 * D),
          m = (s + l) / 2 + (u ? f * 0.72 * D : 0);
        if (
          (L.setFromAxisAngle(ae, (U(n * 3 + e) - 0.5) * 0.35),
          I.compose(
            R.set(p, E + 0.05, m),
            L,
            z.set(u ? d : 1.45 * D, 0.07, u ? 1.45 * D : d),
          ),
          Kt.setMatrixAt(n, I),
          V > 1)
        ) {
          for (let e = 0; e < 12; e++)
            X(
              [
                p + (U(e + n) - 0.5) * d * (u ? 1 : 0.2),
                E + 0.3 + U(e * 3 + n) * 0.9,
                m + (U(e * 5 + n) - 0.5) * d * (u ? 0.2 : 1),
              ],
              [
                (U(e * 7 + n) - 0.5) * 3,
                0.6 + U(e * 11 + n) * 1.4,
                (U(e * 13 + n) - 0.5) * 3,
              ],
              {
                size: 0.05 + U(e) * 0.09,
                life: 2.5,
                color: 6249042,
                drag: 0.5,
                grav: 9.8,
                spin: 8,
              },
            );
          for (let e = 0; e < 3; e++)
            Lt(
              [p, E + 1 + U(e + n) * 0.8, m],
              [(U(e * 3 + n) - 0.5) * 1.6, 0.3, (U(e * 5 + n) - 0.5) * 1.6],
              2 + U(e) * 1.5,
              22 + U(e * 7 + n) * 10,
              0.3,
            );
          if (V > Ot) {
            Ot = V + 0.12;
            let e = se();
            (e?.play(`impact_wood`, {
              pos: [p, E + 0.8, m],
              volume: 1,
              pitch: 0.7 + U(n) * 0.2,
            }),
              e?.play(`impact_metal`, {
                pos: [p, E + 0.8, m],
                volume: 0.7,
                pitch: 0.45,
              }));
          }
        }
      }
      r && (Kt.instanceMatrix.needsUpdate = !0);
    },
    Jt = (v.sweepables ?? []).filter((e) => !Wt.some((t) => t.id === e.id)),
    Yt = new Uint8Array(Jt.length),
    Xt = () => {
      let e = l(),
        t = n.modules.get(`demo`);
      for (let n = 0; n < Jt.length; n++) {
        let r = Jt[n],
          i = +(re(v, r.id, e) <= e);
        if (
          i === Yt[n] ||
          ((Yt[n] = i), t?.setObjectVisible?.(r.object, !i), !i || V <= 1)
        )
          continue;
        let [a, o, s, c] = r.box,
          l = (a + s) / 2,
          u = (o + c) / 2;
        for (let e = 0; e < 22; e++)
          X(
            [
              l + (U(e + n) - 0.5) * (s - a),
              E + 0.3 + U(e * 3 + n) * 2.4,
              u + (U(e * 5 + n) - 0.5) * (c - o),
            ],
            [
              (U(e * 7 + n) - 0.5) * 6,
              1 + U(e * 11 + n) * 2.5,
              (U(e * 13 + n) - 0.5) * 6,
            ],
            {
              size: 0.07 + U(e) * 0.18,
              life: 3,
              color: 10130570,
              drag: 0.3,
              grav: 9.8,
              spin: 9,
            },
          );
        for (let e = 0; e < 3; e++)
          Lt(
            [l, E + 1.2, u],
            [(U(e + n) - 0.5) * 2, 0.3, (U(e * 3 + n) - 0.5) * 2],
            2.6,
            26,
            0.36,
          );
        if (V > Ot) {
          Ot = V + 0.1;
          let e = se();
          (e?.play(`collapse`, { pos: [l, E + 1, u], volume: 0.8 }),
            e?.play(`impact_metal`, {
              pos: [l, E + 1, u],
              volume: 0.8,
              pitch: 0.4,
            }));
        }
      }
    },
    Zt = (e) => T(new u({ color: e, toneMapped: !1 }));
  W?.lit ?? new g();
  let Qt = [];
  for (let e of [-34, -22, -10, 2, 14, 26, 36])
    for (let t of [-24, -13, 0, 13, 24])
      (Math.abs(e) < 12 && Math.abs(t) < 6) || Qt.push([e * D, t * D]);
  let $t = Zt(16726566),
    en = new w(Ne, $t, Qt.length);
  ((en.name = `m34-emergency-lights`),
    (en.visible = !1),
    (en.frustumCulled = !1),
    Qt.forEach(([e, t], n) => {
      (I.compose(
        R.set(e, v.ceil - 0.03, t),
        L.identity(),
        z.set(0.5, 0.05, 0.22),
      ),
        en.setMatrixAt(n, I));
    }),
    b.add(en));
  let tn = [
      [-34, 0],
      [-22, -13],
      [-22, 13],
      [2, -13],
      [2, 13],
      [14, -24],
      [26, 0],
      [36, 24],
    ].map(([e, t]) => {
      let n = new x(16726562, 0, 17 * D, 2);
      return (
        n.position.set(e * D, v.ceil - 0.35, t * D),
        (n.castShadow = !1),
        b.add(n),
        n
      );
    }),
    nn = new d(16726566),
    rn = new d(16732726),
    an = { mains: 1, emergency: 0, out: !1 },
    on,
    sn = (e) => {
      ((an = F(v, e)),
        (en.visible = an.emergency > 0),
        en.visible && $t.color.copy(nn).multiplyScalar(an.emergency));
      for (let e = 0; e < tn.length; e++)
        tn[e].intensity =
          an.emergency > 0
            ? 16 * an.emergency * (0.94 + 0.06 * Math.sin(V * 7.3 + e * 1.9))
            : 0;
      if (v.epoch !== on && ((on = v.epoch), W)) {
        let t = e >= A(v) ? j(v, ne(v, e)) : null;
        for (let e of W.groups.values())
          e.node.visible = !(t && xt(e.cx, e.cz, t) < t.r + e.r * 0.7 + 0.6);
        Se();
      }
    },
    cn = (e, t) => {
      ((Tt = Math.max(0, Tt - e * 1.1)), (kt = Math.max(0, kt - e / 28)));
      let r = null,
        i = v.plate;
      n.camera.getWorldPosition($);
      let a =
          $.x > i.x0 - 6 &&
          $.x < i.x1 + 6 &&
          $.z > i.z0 - 6 &&
          $.z < i.z1 + 6 &&
          $.y > E - 1 &&
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
      if (t.phase === `warn` && V > Et) {
        Et = V + 0.45 + U(Math.floor(V * 9)) * 0.4;
        let e = se(),
          n = [v.crane.mast[0], E + 1, v.crane.mast[1]];
        (e?.play(`impact_metal`, {
          pos: n,
          volume: 0.9,
          pitch: 0.25 + U(Math.floor(V * 17)) * 0.25,
          open: !0,
        }),
          t.t > -2.6 &&
            t.t < -2.4 &&
            e?.play(`crane_groan`, {
              pos: n,
              volume: 1,
              open: !0,
              pitch: 0.8,
            }));
      }
      if (
        t.phase === `swing` ||
        (t.phase === `jammed` && t.t < v.crane.swings[t.k].in + 0.6)
      ) {
        let e = o(j(v, t));
        if (e) {
          let n = [e.ax, e.y, e.az],
            i = t.dir;
          if (St !== t.k) {
            ((St = t.k), (Ct = V));
            let e = Math.hypot($.x - n[0], $.z - n[2]);
            ((wt = e < 16 ? 0 : e < 36 ? 1 : 2),
              a &&
                ((Tt = [1.5, 1.1, 0.7][wt]),
                (kt = Math.max(kt, [1, 0.65, 0.4][wt]))));
            let r = se();
            (r?.play(`collapse`, { pos: n, volume: 1 }),
              r?.play(`explosion_wreck`, { pos: n, volume: 1 }),
              r?.play(`impact_metal`, { pos: n, volume: 1, pitch: 0.45 }));
            for (let e = 0; e < 80; e++)
              X(
                [n[0], E + 0.3 + U(e + V) * 4, n[2] + (U(e * 3 + V) - 0.5) * 3],
                [
                  i[0] * (3 + U(e * 5 + V) * 9) + (U(e * 7 + V) - 0.5) * 4,
                  U(e * 7 + V) * 3.5,
                  i[1] * (3 + U(e * 5 + V) * 9) + (U(e * 9 + V) - 0.5) * 4,
                ],
                {
                  size: 0.06 + U(e) * 0.14,
                  life: 3,
                  color: 6249042,
                  drag: 0.4,
                  grav: 9.8,
                  spin: 9,
                },
              );
            for (let e = 0; e < 40; e++)
              Lt(
                [
                  n[0] + i[0] * U(e + V) * 6,
                  E + 0.8 + U(e * 3 + V) * 3,
                  n[2] + i[1] * U(e + V) * 6 + (U(e * 5 + V) - 0.5) * 4,
                ],
                [
                  i[0] * (1.5 + U(e * 7 + V) * 3),
                  0.2 + U(e * 9 + V) * 0.4,
                  i[1] * (1.5 + U(e * 7 + V) * 3) + (U(e * 11 + V) - 0.5) * 3,
                ],
                2.6 + U(e) * 2,
                26 + U(e * 13 + V) * 10,
                0.42,
              );
          }
          for (let t = 0; t < v.props.length; t++) {
            let n = ye[t],
              r = be[t];
            if (
              !n.alive ||
              !r ||
              !n.k ||
              r[3] < At ||
              r[1] > E + 2.9 * D ||
              r[4] < E + 0.5 * D
            )
              continue;
            let a = (r[0] + r[3]) / 2,
              o = (r[2] + r[5]) / 2;
            xt(a, o, e) < e.r + 0.9 &&
              mn(
                t,
                [a, (r[1] + r[4]) / 2, o],
                [i[0] * 0.4, 0.5, i[1] * 0.4],
                `pop`,
              );
          }
          if (W)
            for (let t of W.groups.values())
              t.node.visible &&
                xt(t.cx, t.cz, e) < e.r + t.r * 0.7 + 0.6 &&
                ((t.node.visible = !1), Se());
          for (let t = Math.max(0, Math.floor((At - G.x0) / Te)); t < Ce; t++)
            for (let n = 0; n < we; n++) {
              let r = t * we + n;
              if (!Ae[r]) continue;
              let i = G.x0 + Te * (t + 0.5),
                a = G.z0 + Ee * (n + 0.5);
              if (xt(i, a, e) < 1.6 + U(r) * 1.1) {
                ((Ae[r] = 0),
                  ke.setMatrixAt(r, B),
                  (ke.instanceMatrix.needsUpdate = !0),
                  X(
                    [i, v.ceil - 0.02, a],
                    [(U(r) - 0.5) * 1.5, -0.8, (U(r + 1) - 0.5) * 1.5],
                    {
                      size: 0.55,
                      life: 6,
                      color: 12434098,
                      drag: 0.4,
                      grav: 9.8,
                      spin: 2 + U(r) * 3,
                      stretch: 2,
                      floorY: E + 0.02,
                    },
                  ));
                for (let e = 0; e < 5; e++)
                  X(
                    [i, v.ceil, a],
                    [(U(e + r) - 0.5) * 0.8, -0.2, (U(e * 3 + r) - 0.5) * 0.8],
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
          if (V > Dt) {
            Dt = V + 0.06;
            for (let t = 0; t < 3; t++) {
              let n = U(t + V * 61);
              Lt(
                [
                  e.ax + (e.bx - e.ax) * n,
                  e.y + 0.3 + U(t * 5 + V),
                  e.az + (e.bz - e.az) * n,
                ],
                [(U(t * 7 + V) - 0.5) * 2.6, 0.25, (U(t * 13 + V) - 0.5) * 2.6],
                2.4 + U(t * 3 + V) * 1.5,
                24 + U(t * 9 + V) * 10,
                0.36,
              );
            }
            for (let t = 0; t < 5; t++) {
              let n = U(t + V * 37);
              X(
                [e.ax + (e.bx - e.ax) * n, e.y, e.az + (e.bz - e.az) * n],
                [
                  (U(t * 7 + V) - 0.5) * 5,
                  1 + U(t * 3 + V) * 2,
                  (U(t * 13 + V) - 0.5) * 5,
                ],
                {
                  size: 0.05 + U(t) * 0.1,
                  life: 2,
                  color: 6249042,
                  drag: 0.4,
                  grav: 9.8,
                  spin: 9,
                },
              );
            }
            for (let t = 0; t < 9; t++)
              X(
                [n[0], e.y + (U(t * 3 + V) - 0.5) * 1.6, n[2]],
                [
                  i[0] * (1 + U(t + V * 7) * 3) + (U(t * 5 + V) - 0.5) * 3,
                  U(t * 3 + V) * 2,
                  i[1] * (1 + U(t + V * 7) * 3) + (U(t * 9 + V) - 0.5) * 3,
                ],
                {
                  size: 0.025,
                  life: 0.5 + U(t) * 0.4,
                  color: 16760928,
                  drag: 0.6,
                  grav: 9.8,
                  spin: 0,
                  stretch: 3.5,
                },
              );
          }
          if (V > Et) {
            Et = V + 0.18;
            let e = se();
            (e?.play(`impact_metal`, {
              pos: n,
              volume: 1,
              pitch: 0.4 + U(Math.floor(V * 50)) * 0.3,
            }),
              U(Math.floor(V * 31)) < 0.4 &&
                e?.play(`spark_zap`, { pos: n, volume: 0.8 }));
          }
          r = e;
        }
      }
      let s = V - Ct,
        c = U(Math.floor(V * 13)) < 0.5 ? 1 : 0.15,
        l = 0;
      if (
        (a &&
          ((l =
            wt === 0
              ? s < 2.8
                ? 1
                : s < 3.8
                  ? c
                  : 0
              : wt === 1
                ? s < 1.7
                  ? c * 0.8
                  : 0
                : s < 0.7
                  ? c * 0.6
                  : 0),
          r && xt($.x, $.z, r) < 9 && (l = Math.max(l, c * 0.7))),
        r && a)
      ) {
        let e = xt($.x, $.z, r);
        e < 10 ? (kt = Math.max(kt, 0.9)) : e < 22 && (kt = Math.max(kt, 0.55));
      }
      let u = 0,
        d = 0;
      (a && an.out && ((d = 1 - an.mains), (u = an.emergency)),
        ln(l, u, d),
        Rt(e, Math.max(l, d)),
        Ut(a ? 0.42 * Math.min(1, kt) ** 1.3 : 0, Math.max(l, d)));
      let f = n.modules.get(`player`);
      if (!f?.shakeView || !a) return;
      let p = Tt;
      if (r) {
        let e = xt($.x, $.z, r);
        p += e < 10 ? 1.1 : e < 24 ? 0.55 : 0.22;
      } else t.phase === `warn` && (p += 0.1 * t.wild);
      p > 0.01 && f.shakeView(Math.min(1.5, p));
    },
    ln = (e, t = 0, r = 0) => {
      let i = n.modules.get(`environment`),
        a = i?.hemiLight,
        o = i?.sunLight,
        s = n.camera?.userData;
      if (e < 0.001 && t < 0.001 && r < 0.001) {
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
          sky: a?.color.clone() ?? new d(),
          sun: o?.intensity ?? 0,
          fill: Q.intensity,
          fillCol: Q.color.clone(),
        }),
        a &&
          ((a.intensity = Z.hemi * (1 - Math.max(0.88 * e, 0.95 * r))),
          a.color.copy(Z.sky).lerp(rn, t * 0.35)),
        o && (o.intensity = Z.sun * (1 - Math.max(0.9 * e, 0.97 * r))),
        (Q.intensity = Z.fill * (1 - Math.max(0.93 * e, 0.99 * r))),
        Q.color.copy(Z.fillCol).lerp(rn, t * 0.5),
        s)
      ) {
        let n = (s.viewLight ??= { scale: 1, tint: rn, tintAmount: 0 });
        ((n.scale = Math.max(1 - Math.max(0.88 * e, 0.95 * r), 0.14 * t * r)),
          (n.tintAmount = t * r * 0.8));
      }
    },
    Q = new e(16774890, 1.1);
  (Q.position.set(12, E + 40, 8),
    Q.target.position.set(0, E, 0),
    (Q.castShadow = !1),
    b.add(Q, Q.target));
  let $ = new o(),
    un = [],
    dn = (e, t) => un.push(n.events.on(e, t)),
    fn = () => {
      let e = l(),
        t = 0,
        n = new Set();
      for (let r = 0; r < J.length; r++) {
        let i = J[r],
          a = nt[r],
          o = i.ext ? O.ext : O.int,
          s = v.hits.get(i.id) ?? 0,
          c = v.breaks?.get(i.id),
          l = c?.length ?? 0,
          u = P(v, i, e),
          f = s <= 0 ? 0 : Math.min(3, 1 + Math.floor((s / o) * 3));
        if (a.stage === f && a.nb === l && a.torn === u) continue;
        let p = i.ext ? ze : Be,
          m = rt.get(i.id),
          h = u || l > 0;
        (p.setMatrixAt(m, h ? B : tt(i)),
          (p.instanceMatrix.needsUpdate = !0),
          h ||
            (p.setColorAt(m, new d().setScalar(1 + f * 0.16)),
            p.instanceColor && (p.instanceColor.needsUpdate = !0)),
          (h || f <= 0) && Je(i.id),
          i.ext && u !== a.torn && st(i, u),
          (l !== a.nb || u !== a.torn) && n.add((r / 16) | 0),
          V > 1 && u && !a.torn
            ? (bt(r), t++)
            : V > 1 &&
              !u &&
              l > a.nb &&
              (vt(r, a.nb === 0 ? _t(i) : c.slice(a.nb)), t++),
          (a.stage = f),
          (a.nb = l),
          (a.torn = u));
      }
      for (let e of n) et(e);
      return t;
    };
  (dn(`demo:meridian`, () => {
    (fn(), qt());
  }),
    dn(`demo:meridianGlass`, (e) => {
      let t = Me.get(e?.id);
      if (t == null) return;
      let n = J[t];
      if (e.point) {
        oe()?.play(`impact_glass`, { pos: e.point, volume: 0.7 });
        for (let t = 0; t < 5; t++)
          X(
            e.point,
            [
              (U(t + V) - 0.5) * 2,
              U(t * 3 + V) * 1.4,
              (U(t * 7 + V) - 0.5) * 2,
            ],
            { size: 0.025, life: 0.8, color: 14741759, spin: 12 },
          );
      }
      (e.point &&
        !e.breaks?.length &&
        !P(v, n, l()) &&
        Ye(n, e.point, (e.hits | 0) * 131 + t * 7 + Math.floor(V * 10)),
        fn());
    }));
  let pn = (e, t, n, r) => {
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
  (dn(`weapon:fire`, (e) => {
    if (!e?.origin || !e?.dir) return;
    let t = (e.dist ?? 200) + 0.3;
    (e.origin[0], e.origin[2]);
    for (let n = 0; n < v.props.length; n++) {
      let r = ye[n];
      if (!r.alive || !pe[r.kind] || !be[n]) continue;
      let i = pn(e.origin, e.dir, t, be[n]);
      i < 0 ||
        mn(
          n,
          e.origin.map((t, n) => t + e.dir[n] * i),
          e.dir,
        );
    }
  }),
    dn(`explosion`, (e) => {
      if (!Array.isArray(e?.pos)) return;
      let t = e.pos,
        n = Math.max(3, Math.min(7, e.radius ?? 4));
      (t[0], t[2]);
      for (let e = 0; e < v.props.length; e++) {
        let r = ye[e];
        if (!r.alive || !pe[r.kind]) continue;
        let i = be[e],
          a = [(i[0] + i[3]) / 2, (i[1] + i[4]) / 2, (i[2] + i[5]) / 2];
        Math.hypot(a[0] - t[0], a[1] - t[1], a[2] - t[2]) < n * 0.7 &&
          mn(e, a, [a[0] - t[0], 0.5, a[2] - t[2]]);
      }
      if (t[1] > E - 1 && t[1] < v.slab + 1)
        for (let e = 0; e < Ce; e++)
          for (let r = 0; r < we; r++) {
            let i = e * we + r;
            if (!Ae[i]) continue;
            let a = G.x0 + Te * (e + 0.5),
              o = G.z0 + Ee * (r + 0.5);
            if (
              Math.hypot(a - t[0], o - t[2], (v.ceil - t[1]) * 0.6) <
                n * (0.55 + U(i) * 0.45) &&
              ((Ae[i] = 0),
              ke.setMatrixAt(i, B),
              (ke.instanceMatrix.needsUpdate = !0),
              X(
                [a, v.ceil - 0.02, o],
                [
                  (a - t[0]) * 0.3 + (U(i) - 0.5),
                  -0.5,
                  (o - t[2]) * 0.3 + (U(i + 1) - 0.5),
                ],
                {
                  size: 0.55,
                  life: 5,
                  color: 12434098,
                  drag: 0.4,
                  grav: 9.8,
                  spin: 2 + U(i) * 3,
                  stretch: 2,
                  floorY: E + 0.02,
                },
              ),
              U(i * 7) < 0.3)
            )
              for (let e = 0; e < 4; e++)
                X(
                  [a, v.ceil, o],
                  [(U(e + i) - 0.5) * 0.6, -0.2, (U(e * 3 + i) - 0.5) * 0.6],
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
  function mn(e, t, n, r) {
    let i = ye[e],
      a = v.props[e],
      o = pe[i.kind] ?? r;
    i.alive = !1;
    let { k: s, j: c } = i,
      l = Math.hypot(n[0], n[2]) || 1,
      u = n[0] / l,
      d = n[2] / l;
    if (o === `screen` || o === `pop`) {
      if (
        (L.setFromEuler(new ee(o === `screen` ? -1.2 : -1.5, a.yaw, 0, `YXZ`)),
        I.compose(
          R.set(a.x + u * 0.15, a.y, a.z + d * 0.15),
          L,
          z.set(a.s, a.s, a.s),
        ),
        s.mesh.setMatrixAt(c, I),
        (s.mesh.instanceMatrix.needsUpdate = !0),
        s.glow &&
          (s.glow.setMatrixAt(c, B), (s.glow.instanceMatrix.needsUpdate = !0)),
        o === `screen`)
      ) {
        for (let n = 0; n < 14; n++)
          X(
            t,
            [
              u * 0.5 + (U(n + e) - 0.5) * 2.5,
              1 + U(n * 3 + e) * 2,
              d * 0.5 + (U(n * 5 + e) - 0.5) * 2.5,
            ],
            {
              size: 0.02,
              life: 0.5 + U(n) * 0.4,
              color: 16762976,
              drag: 0.8,
              grav: 9.8,
              spin: 0,
              stretch: 3,
            },
          );
        (oe()?.play(`impact_glass`, { pos: t, volume: 0.5, pitch: 0.7 }),
          oe()?.play(`spark_zap`, { pos: t, volume: 0.5 }));
      } else (r ? se : oe)()?.play(`impact_wood`, { pos: t, volume: 0.5 });
    } else
      (s.mesh.setMatrixAt(c, B),
        (s.mesh.instanceMatrix.needsUpdate = !0),
        s.glow &&
          (s.glow.setMatrixAt(c, B), (s.glow.instanceMatrix.needsUpdate = !0)));
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
            t[0] + (U(r) - 0.5) * 0.3,
            t[1] + U(r + 1) * 0.2,
            t[2] + (U(r + 2) - 0.5) * 0.3,
          ],
          [
            u * 1.5 + (U(r * 3 + e) - 0.5) * 2.6,
            1.2 + U(r * 7 + e) * 2.2,
            d * 1.5 + (U(r * 11 + e) - 0.5) * 2.6,
          ],
          {
            size: i.kind === `books` ? 0.14 : 0.2,
            life: 9 + U(r) * 6,
            color:
              i.kind === `books`
                ? [7023142, 2770022, 4086328][r % 3]
                : U(r * 13) < 0.1
                  ? 15917168
                  : 16052970,
            drag: 2.2,
            grav: 1.6,
            flutter: 2.2,
            spin: 2 + U(r) * 3,
            stretch: 1.3,
          },
        );
      oe()?.play(`paper_burst`, { pos: t, volume: 0.6 });
    }
    if (o === `water` || o === `spray`) {
      let n = {
        i: e,
        pos: t.slice(),
        dir: o === `spray` ? [0, -1, 0] : [-u, 0, -d],
        until: V + (o === `spray` ? 9 : 6),
        kind: o,
        col: i.kind === `extinguisher` ? 16053492 : 12574964,
      };
      (hn.push(n),
        oe()?.play(o === `spray` ? `water_spray` : `water_burst`, {
          pos: t,
          volume: 0.6,
        }));
    }
  }
  let hn = [],
    gn = (e) => {
      for (let t = hn.length - 1; t >= 0; t--) {
        let n = hn[t];
        if (V > n.until) {
          hn.splice(t, 1);
          continue;
        }
        let r = n.kind === `spray` ? 55 : 35,
          i = Math.ceil(r * e);
        for (let e = 0; e < i; e++) {
          let t = U(e + V * 977),
            r =
              n.kind === `spray`
                ? [
                    (U(e * 3 + V * 13) - 0.5) * 3.4,
                    -1.5 - t * 2,
                    (U(e * 5 + V * 7) - 0.5) * 3.4,
                  ]
                : [
                    n.dir[0] * 2.2 + (t - 0.5) * 0.6,
                    0.6 + U(e * 9 + V) * 0.6,
                    n.dir[2] * 2.2 + (U(e * 2 + V) - 0.5) * 0.6,
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
    _n = 2,
    vn = 0,
    yn = () => {
      n.camera.getWorldPosition($);
      let e = v.plate;
      if ($.x < e.x0 || $.x > e.x1 || $.z < e.z0 || $.z > e.z1) return 1;
      let t = 0;
      for (let e = 0; e < J.length; e++) {
        if (!J[e].ext || !nt[e].broken) continue;
        let n = M(J[e]),
          r = Math.max(n[0] - $.x, 0, $.x - n[3]),
          i = Math.max(n[2] - $.z, 0, $.z - n[5]);
        t = Math.max(t, Math.max(0, 1 - Math.hypot(r, i) / 14) ** 1.6 * 0.75);
      }
      return Math.max(0.035, t);
    },
    bn = () => {
      let e = yn(),
        t = oe();
      if (
        t &&
        (V > vn &&
          ((vn = V + 5.2),
          t.play(`city_traffic`, { local: !0, volume: 0.5 * e })),
        V > _n)
      ) {
        let n = U(Math.floor(V * 10));
        _n = V + 1.4 + U(Math.floor(V * 7)) * 4.5;
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
          pitch: 0.9 + U(Math.floor(V * 3)) * 0.25,
        });
      }
    },
    xn = null;
  try {
    xn = de(n, b, v, l);
  } catch (e) {
    n.warn?.(`meridian helicopters failed: ` + e.message);
  }
  let Sn = 0,
    Cn = -1,
    wn = 0;
  return {
    group: b,
    update(e) {
      ((e = Math.min(e || 0, 0.1)), (V += e));
      let t = l();
      sn(t);
      let n = ne(v, t);
      (yt.update(n, V),
        cn(e, n),
        n.phase === `warn` &&
          n.k !== Cn &&
          ((Cn = n.k),
          se()?.play(`crane_groan`, {
            pos: [v.crane.mast[0], E + 2, v.crane.mast[1]],
            volume: 1,
            open: !0,
          })),
        V > Sn && ((Sn = V + 0.1), fn(), qt(), Xt()),
        V > wn && ((wn = V + 0.25), bn()),
        xn?.update(e),
        gn(e),
        mt(e));
    },
    stats() {
      return {
        props: v.props.length,
        panes: J.length,
        broken: nt.filter((e) => e.broken).length,
        particles: dt.filter(Boolean).length,
        tiles: Ae.reduce((e, t) => e + t, 0),
        decor: W?.stats ?? null,
      };
    },
    dispose() {
      (ln(0), W?.dispose(), xn?.dispose());
      for (let e of un) e?.();
      a.remove(b);
      for (let e of C) e.dispose?.();
      (yt.dispose(), Q.dispose());
    },
  };
}
function ve(e, n) {
  let a = e.crane,
    s = new g();
  s.name = `m34-crane`;
  let c = n(
      new i({
        color: 14197528,
        emissive: 3811846,
        roughness: 0.55,
        metalness: 0.3,
        flatShading: !0,
      }),
    ),
    l = n(new i({ color: 2764080, roughness: 0.6, metalness: 0.4 })),
    d = n(new i({ color: 9276036, roughness: 0.95 })),
    f = n(new i({ color: 14276301, roughness: 0.6 })),
    p = (e) => n(new u({ color: e, toneMapped: !0 })),
    m = n(new r(1, 1, 1)),
    _ = new te(),
    v = new h(),
    y = new o(),
    ee = new o(),
    b = new o(0, 1, 0),
    x = (e, t, n) => {
      let r = y.set(t[0] - e[0], t[1] - e[1], t[2] - e[2]),
        i = r.length();
      return (
        v.setFromUnitVectors(b, r.clone().normalize()),
        _.clone().compose(
          new o((e[0] + t[0]) / 2, (e[1] + t[1]) / 2, (e[2] + t[2]) / 2),
          v,
          ee.set(n, i, n),
        )
      );
    },
    S = (e, t, n) => {
      let r = new w(m, n, e.length);
      return (
        e.forEach(([e, n], i) => r.setMatrixAt(i, x(e, n, t))),
        (r.instanceMatrix.needsUpdate = !0),
        (r.castShadow = !0),
        r
      );
    },
    [C, T] = a.mast,
    D = a.top,
    O = 1.3,
    ne = [],
    re = [
      [-1.3, -1.3],
      [O, -1.3],
      [O, O],
      [-1.3, O],
    ];
  for (let [e, t] of re)
    ne.push([
      [C + e, 0, T + t],
      [C + e, D, T + t],
    ]);
  for (let e = 0; e < D - 3; e += 3.1)
    for (let t = 0; t < 4; t++) {
      let [n, r] = re[t],
        [i, a] = re[(t + 1) % 4];
      (ne.push([
        [C + n, e, T + r],
        [C + i, e + 3.1, T + a],
      ]),
        ne.push([
          [C + n, e, T + r],
          [C + i, e, T + a],
        ]));
    }
  s.add(S(ne, 0.24, c));
  for (let e = D - 30; e < D - 1; e += 6) {
    let n = new t(m, p(16773320));
    (n.position.set(C - O - 0.15, e, T + O * 0.6),
      n.scale.set(0.12, 0.35, 0.5),
      s.add(n));
  }
  let k = new g();
  (k.position.set(C, D, T), s.add(k));
  let A = (e, t, n, r, i, a, o) => (
    e.position.set(t, n + a / 2, r),
    e.scale.set(i, a, o),
    (e.castShadow = !0),
    k.add(e),
    e
  );
  A(new t(m, l), 0, 0, 0, 3.2, 0.8, 3.2);
  let j = a.jib,
    M = a.counter,
    N = [];
  for (let e of [-1, 1])
    for (let t of [-1, 1])
      N.push([
        [e * O, 0.8, t * O],
        [0, 7.8, 0],
      ]);
  let ie = a.halfW,
    P = a.armY1 - a.armY0,
    F = a.armY0 - D;
  for (let e = 0; e < j; e += 2.4) {
    let t = Math.min(j, e + 2.4);
    for (let n of [-1, 1])
      (N.push([
        [e, F, n * ie],
        [t, F, n * ie],
      ]),
        N.push([
          [e, F, n * ie],
          [t, F + P, 0],
        ]));
    (N.push([
      [e, F + P, 0],
      [t, F + P, 0],
    ]),
      N.push([
        [t, F, -ie],
        [t, F, ie],
      ]));
  }
  for (let e = 0; e > -M; e -= 2.4) {
    for (let t of [-1, 1])
      N.push([
        [e, F, t * 1.1],
        [e - 2.4, F, t * 1.1],
      ]);
    N.push([
      [e - 2.4, F, -1.1],
      [e - 2.4, F, 1.1],
    ]);
  }
  for (let e of [j * 0.42, j * 0.84])
    N.push([
      [0, 7.8, 0],
      [e, F + P, 0],
    ]);
  (N.push([
    [0, 7.8, 0],
    [-M + 1, F, 0],
  ]),
    k.add(S(N, 0.18, c)));
  {
    let e = a.halfW,
      r = F - 0.4,
      o = -(e + 1.5),
      s = n(
        new i({
          color: 1714739,
          emissive: 793122,
          roughness: 0.1,
          metalness: 0.6,
        }),
      );
    (A(new t(m, f), 0.6, r, o, 2.6, 2.5, 2.2),
      A(new t(m, s), 1.93, r + 0.9, o, 0.04, 1.3, 1.9),
      A(new t(m, s), 0.6, r + 0.9, o - 1.12, 2.2, 1.3, 0.04),
      A(new t(m, s), 0.6, r + 0.9, o + 1.12, 2.2, 1.3, 0.04),
      A(new t(m, p(16771256)), 0.6, r + 1.9, o, 1.4, 0.06, 1.2),
      A(new t(m, l), 0.6, r - 0.12, o, 3.4, 0.12, 3));
    for (let [e, n, i, a] of [
      [0.6, o - 1.5, 3.4, 0.05],
      [0.6, o + 1.5, 3.4, 0.05],
      [2.3, o, 0.05, 3],
    ])
      A(new t(m, c), e, r + 0.9, n, i, 0.05, a);
    for (let e = -D + 1; e < -0.5; e += 0.4)
      e > -40 && A(new t(m, l), 1.55, e, 0, 0.05, 0.04, 0.6);
  }
  for (let e = 0; e < 4; e++)
    A(new t(m, d), -M + 1.2 + e * 0.9, F - 2.4, 0, 0.8, 2.6, 2.6);
  A(new t(m, l), -M + 6, F, 0, 3.4, 1.6, 1.9);
  let I = p(16722458),
    L = [
      A(new t(m, I), j, F + P, 0, 0.3, 0.3, 0.3),
      A(new t(m, I), 0, 7.8, 0, 0.3, 0.3, 0.3),
      A(new t(m, I), -M, F, 0, 0.3, 0.3, 0.3),
    ];
  (A(new t(m, l), j - 2.5, F - 0.35, 0, 1.6, 0.3, 1.9),
    A(new t(m, p(16773848)), 4, F - 0.2, 0, 0.6, 0.2, 0.6));
  let R = [
    E(k, { skip: new Set(L), name: `m34-crane-slew` }),
    E(s, { skip: new Set([k]), name: `m34-crane-mast` }),
  ];
  return {
    root: s,
    update(e, t) {
      let n = e.wild,
        r = (Math.sin(t * 23.7) * 0.6 + Math.sin(t * 37.1) * 0.4) * 0.006 * n;
      ((k.rotation.y = -e.yaw + r),
        (k.rotation.z =
          Math.sin(t * 17.3) * 0.004 * n -
          (e.phase === `warn` ? 0.006 * n : 0)),
        (k.position.y = D + Math.sin(t * 29) * 0.03 * n));
      let i = t % 1.5 < 0.2;
      for (let e of L) e.visible = i;
    },
    dispose() {
      for (let e of R) e?.dispose();
    },
  };
}
export { _e as createMeridianView };
//# sourceMappingURL=meridian-view-BtYJSXLi.js.map
