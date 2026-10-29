// assets__map-collider-0Gc3D4Vs 03 — key
// Lines 663-994 of readable/assets__map-collider-0Gc3D4Vs.pretty.js (statement-aligned).
function p(e = {}) {
  let t = e?.name ?? ``;
  return e?.userData?.pen && d[e.userData.pen] != null
    ? e.userData.pen
    : /brick/i.test(t)
      ? `brick`
      : /stone|marble|granite/i.test(t)
        ? `stone`
        : /concrete|cement|cmu|stucco|plaster|render/i.test(t)
          ? `concrete`
          : /wood|timber|pine|cedar|oak|bamboo|logs|batten|shingle|clap|^hLap|^amLap|barnRed/i.test(
                t,
              )
            ? `wood`
            : /glass/i.test(t) ||
                (e?.transparent && e.opacity < 0.7 && !e.alphaTest)
              ? `glass`
              : /iron|steel|metal|copper|brass|alumin|stainless|galvan|tin/i.test(
                    t,
                  ) || e?.metalness >= 0.5
                ? `metal`
                : `concrete`;
}
var m = new Map(),
  h = 1.5,
  g = new Map();
function _(e, t) {
  let n = g.get(e);
  (n || g.set(e, (n = new Set())), n.add(t));
}
function v(e, t) {
  g.get(e)?.delete(t);
}
var y = new Map(),
  b = (e, t) => {
    let n = e + `|` + t.join(`,`),
      r = y.get(n);
    return (r || y.set(n, (r = { box: t, n: 0 })), r);
  };
function x(e, t) {
  let n = b(e, t);
  --n.n <= 0 && ((n.n = 0), _(e, n));
}
function S(e, t) {
  let n = b(e, t);
  (n.n++, v(e, n));
}
var C = (e, t) => {
  let n = g.get(e);
  if (!n?.size) return !1;
  for (let e of n) {
    if (e.active && !e.active()) continue;
    let n = e.box ?? e;
    if (
      t[0] > n[0] - 0.05 &&
      t[0] < n[3] + 0.05 &&
      t[1] > n[1] - 0.05 &&
      t[1] < n[4] + 0.05 &&
      t[2] > n[2] - 0.05 &&
      t[2] < n[5] + 0.05
    )
      return !0;
  }
  return !1;
};
function w() {
  let e = new Set(),
    t = [],
    n = 0,
    r = 0;
  for (let [i, a] of m) {
    let o = 0;
    for (let t of [a.nodes, a.tris, a.indices, a.mats])
      t?.buffer &&
        !e.has(t.buffer) &&
        (e.add(t.buffer), (o += t.buffer.byteLength));
    let s = a.mats.length;
    ((r += s),
      (n += o),
      t.push({ key: i, triangles: s, backingBytes: o, indexed: !!a.indices }));
  }
  return {
    shapes: t.length,
    triangles: r,
    backingBytes: n,
    buffers: e.size,
    largest: t.sort((e, t) => t.backingBytes - e.backingBytes).slice(0, 20),
  };
}
function T(e, t) {
  t && t.nodes?.length && m.set(e, t);
}
function E(e) {
  return m.has(e);
}
function D(e, t, n = null) {
  e.updateMatrixWorld(!0);
  let r = n ? n.clone() : new t.Matrix4().copy(e.matrixWorld).invert(),
    i = new t.Matrix4(),
    a = new t.Vector3(),
    o = [],
    s = [],
    c = 0,
    l = (e) => {
      if (e.visible !== !1) {
        if (e.isLOD) {
          let t = e.levels?.[0]?.object;
          t && l(t);
          return;
        }
        e.isMesh &&
          !e.isSkinnedMesh &&
          e.geometry?.attributes?.position &&
          u(e);
        for (let t of e.children) l(t);
      }
    },
    u = (e) => {
      if (e.userData?.noCollide || e.userData?.blink || e.userData?.noShot)
        return;
      let n = Array.isArray(e.material) ? e.material : [e.material];
      if (
        n.every(
          (e) =>
            !e ||
            e.userData?.nightGlow ||
            e.visible === !1 ||
            (e.transparent && e.opacity < 0.15) ||
            e.colorWrite === !1,
        )
      )
        return;
      let l = e.geometry,
        u = l.attributes.position,
        f = l.index,
        m =
          l.groups?.length && Array.isArray(e.material)
            ? l.groups
            : [{ start: 0, count: f ? f.count : u.count, materialIndex: 0 }],
        h = e.isInstancedMesh ? e.count : 1;
      for (let l = 0; l < h; l++) {
        if ((i.multiplyMatrices(r, e.matrixWorld), e.isInstancedMesh)) {
          let n = new t.Matrix4();
          (e.getMatrixAt(l, n), i.multiply(n));
        }
        for (let e of m) {
          let r = n[e.materialIndex ?? 0] ?? n[0];
          if (
            !r ||
            r.userData?.nightGlow ||
            (r.transparent && r.opacity < 0.15)
          )
            continue;
          let l =
              (d[p(r)] ?? 0) |
              (r.side === 2 || r.side === t.DoubleSide ? 128 : 0),
            m = i.determinant() < 0,
            h = Math.floor(e.count / 3);
          if (!h) continue;
          let g = new Float32Array(h * 9),
            _ = new Uint8Array(h).fill(l);
          for (let t = 0; t < h; t++)
            for (let n = 0; n < 3; n++) {
              let r = e.start + t * 3 + (m && n ? 3 - n : n),
                o = f ? f.getX(r) : r;
              (a.fromBufferAttribute(u, o).applyMatrix4(i),
                (g[t * 9 + n * 3] = a.x),
                (g[t * 9 + n * 3 + 1] = a.y),
                (g[t * 9 + n * 3 + 2] = a.z));
            }
          (o.push(g), s.push(_), (c += h));
        }
      }
    };
  if ((l(e), !c)) return null;
  let f = new Float32Array(c * 9),
    m = new Uint8Array(c),
    h = 0;
  for (let e = 0; e < o.length; e++)
    (f.set(o[e], h * 9), m.set(s[e], h), (h += s[e].length));
  return { positions: f, mats: m };
}
function O(e, t, n, r = null) {
  if (m.has(e)) return m.get(e);
  let i = D(t, n, r);
  if (!i) return null;
  let a = s(i.positions, i.mats);
  return (m.set(e, a), a);
}
function k(e, t, n, r, i) {
  let a = m.get(e.key);
  if (!a) return;
  let o = Math.cos(e.yaw || 0),
    s = Math.sin(e.yaw || 0),
    c = e.pos,
    d = t[0] - c[0],
    p = t[1] - c[1],
    g = t[2] - c[2],
    _ = o * d - s * g,
    v = s * d + o * g,
    y = o * n[0] - s * n[2],
    b = s * n[0] + o * n[2],
    x = Math.max(0, r - h),
    S = null,
    w = null;
  for (let r = 0; r < 8; r++) {
    if (((S = l(a, _, p, v, y, n[1], b, x, i + h)), !S)) return null;
    if (
      ((w = [t[0] + n[0] * S.dist, t[1] + n[1] * S.dist, t[2] + n[2] * S.dist]),
      !C(e.key, w))
    )
      break;
    ((x = S.dist + 0.01), (S = null));
  }
  if (!S) return null;
  let [T, E, D] = S.normal,
    O = u[S.mat] ?? `concrete`;
  return {
    dist: S.dist,
    point: w,
    normal: [o * T + s * D, E, -s * T + o * D],
    surface: f[O] ?? `concrete`,
    pen: O,
    exact: !0,
  };
}
function A(e, t, n) {
  let r = 1 / 0;
  for (let i = 0; i < 3; i++) {
    if (Math.abs(t[i]) < 1e-12) continue;
    let a = ((t[i] > 0 ? n[i + 3] : n[i]) - e[i]) / t[i];
    a < r && (r = a);
  }
  return r;
}
var j = (e) =>
    `lab:${e.key}${e.clearRooftop ? `:clearRoof` : ``}${e.enterable ? `:e` : ``}${e.holes ? `:h:` + e.id : ``}`,
  M = (e) => `setpiece:${e}`,
  N = `gwcentre`;
function P(e, { autumn: t = !1 } = {}) {
  let n = [];
  for (let t of e.nests ?? []) {
    let e = {
      key: `nest:${t.key}`,
      pos: [t.x, t.y, t.z],
      yaw: t.rotY ?? 0,
      build: { kind: `nest`, model: t.key },
    };
    n.push([`nest-${t.id}-`, e], [`demo-nest-${t.id}-`, e]);
  }
  if (t) {
    let t = new Map((e.objects ?? []).map((e) => [e.id, e]));
    for (let n of e.colliderDefs ?? []) {
      let e = /^demo-(district-tree-\d+)-trunk$/.exec(n.id),
        r = e && t.get(`${e[1]}-crown`);
      if (!r || !n.aabb) continue;
      let i = Math.max(0.55, Math.min(1.15, (r.sx + r.sz) / 2 / 7.4)),
        a = n.aabb;
      n.trunk = {
        x: (a[0] + a[3]) / 2,
        z: (a[2] + a[5]) / 2,
        y0: a[1],
        h: 3.6 * i,
        rb: 0.48 * i,
        rt: 0.3 * i,
      };
    }
  }
  for (let t of e.labBuildings ?? [])
    t.key &&
      n.push([
        `demo-${t.id}-lab-`,
        {
          key: j(t),
          pos: [t.x, t.y ?? 0, t.z],
          yaw: t.rotY ?? 0,
          build: {
            kind: `lab`,
            model: t.key,
            clearRooftop: !!t.clearRooftop,
            enterable: !!t.enterable,
            holes: t.holes ?? null,
          },
        },
      ]);
  for (let t of e.setpieces ?? [])
    n.push([
      `setpiece-${t.key}-`,
      {
        key: M(t.key),
        pos: [t.x, t.y, t.z],
        yaw: t.rotY ?? 0,
        build: { kind: `setpiece`, model: t.key },
      },
    ]);
  if (e.greywaterCentre) {
    let t = {
      key: N,
      pos: [0, 0, 0],
      yaw: 0,
      build: { kind: `gwcentre`, gc: e.greywaterCentre },
    };
    n.push([`rail-`, t], [`plaza-`, t]);
  }
  for (let t of e.advertisingSigns ?? []) {
    let e = {
      key: `sign:${t.id}`,
      pos: t.pos,
      yaw: t.yaw ?? 0,
      build: {
        kind: `sign`,
        model: t.key,
        elevation: t.elevation,
        width: t.width,
        height: t.height,
        serviceAccess: t.serviceAccess,
        panelScale: t.panelScale ?? 1,
        scale: t.scale ?? 1,
        roofStand: !!t.roofStand,
      },
    };
    n.push([`sign-${t.id}-`, e]);
  }
  if (!n.length) return e;
  for (let t of e.colliderDefs ?? []) {
    if (t.mesh || /-fill\d/.test(t.id)) continue;
    let e = String(t.id),
      r = n.find(([t]) => e.startsWith(t));
    r && (t.shotMesh = r[1]);
  }
  return e;
}
