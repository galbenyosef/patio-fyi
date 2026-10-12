// assets__facade-kit-DGwo5rab 04 — math
// Lines 714-1010 of readable/assets__facade-kit-DGwo5rab.pretty.js (statement-aligned).
function U(e, t) {
  let n = e + (t ? `` : `:plain`);
  if (H.has(n)) return H.get(n);
  let r = V[e],
    i;
  if (r.glass)
    ((i = new f({
      color: r.color ?? 8229795,
      roughness: 0.06,
      metalness: 0.75,
      envMapIntensity: 1.6,
    })),
      r.lit && (i.emissive.set(r.lit), (i.emissiveIntensity = 0)));
  else if (r.clear)
    i = new f({
      color: 13623526,
      roughness: 0.05,
      metalness: 0.3,
      transparent: !0,
      opacity: 0.32,
      depthWrite: !1,
    });
  else if (r.tex)
    ((i = new f({
      map: r.tex,
      roughness: r.rough ?? 0.8,
      metalness: r.metal ?? 0,
      transparent: !!r.transparent,
      depthWrite: !r.transparent,
      polygonOffset: !!r.transparent,
      polygonOffsetFactor: -2,
      alphaTest: r.cutout ? 0.5 : 0,
    })),
      r.glow &&
        ((i.emissiveMap = r.tex),
        i.emissive.set(16777215),
        (i.emissiveIntensity = r.glow)));
  else {
    let e = _(),
      t = e ? Math.min(e.tex, r.size || 512) : r.size || 512,
      n = ie[r.pat];
    ((i = new f({
      map: B(t, t, (e) => n(e, t, !1, r.p), !0),
      roughness: r.rough ?? 0.9,
      metalness: r.metal ?? 0,
    })),
      r.bump &&
        !e &&
        ((i.bumpMap = B(t, t, (e) => n(e, t, !0, r.p), !1)),
        (i.bumpScale = r.bump)),
      r.emissive && i.emissive.set(r.emissive));
  }
  return (
    r.side && (i.side = r.side),
    t && oe(i, r.grime || 0),
    H.set(n, i),
    i
  );
}
function ue(e, t, n = {}) {
  n = { ...n };
  let r = _(),
    i = r ? Math.min(r.sign, n.width || 2048) : n.width || 2048,
    a = Math.round(i * (n.aspect || 0.2)),
    o,
    s = () =>
      B(
        i,
        a,
        (e) => {
          (n.bg != null && ((e.fillStyle = I(F(n.bg))), e.fillRect(0, 0, i, a)),
            n.border != null &&
              ((e.strokeStyle = I(F(n.border))),
              (e.lineWidth = a * 0.05),
              e.strokeRect(
                a * 0.06,
                a * 0.06,
                i - a * 0.12,
                a * 0.12 > 0 ? a - a * 0.12 : a,
              )));
          let r = t.split(`
`),
            o = (a / r.length) * (n.size || 0.55);
          if (
            ((e.font = `${n.weight || 700} ${o}px ${n.font || `Georgia, "Times New Roman", serif`}`),
            (e.textAlign = `center`),
            (e.textBaseline = `middle`),
            (e.fillStyle = I(F(n.fg))),
            `letterSpacing` in e &&
              (e.letterSpacing = `${o * (n.spacing ?? 0.08)}px`),
            n.glow && ((e.shadowColor = I(F(n.fg))), (e.shadowBlur = o * 0.35)),
            r.forEach((t, n) =>
              e.fillText(t, i / 2, (a / r.length) * (n + 0.53), i * 0.92),
            ),
            n.glow &&
              ((e.shadowBlur = o * 0.12),
              (e.lineWidth = Math.max(2, o * 0.035)),
              (e.strokeStyle = `rgba(255,250,235,0.85)`),
              r.forEach((t, n) =>
                e.strokeText(t, i / 2, (a / r.length) * (n + 0.53), i * 0.92),
              ),
              (e.shadowBlur = 0)),
            n.fade)
          ) {
            let t = P(21);
            e.globalCompositeOperation = `destination-out`;
            let r = i / 2048;
            for (let o = 0; o < 9e3 * r * r; o++)
              ((e.fillStyle = `rgba(0,0,0,${t() * n.fade})`),
                e.fillRect(
                  t() * i,
                  t() * a,
                  (2 + t() * 14) * r,
                  (1 + t() * 5) * r,
                ));
            e.globalCompositeOperation = `source-over`;
          }
          n.bg != null && R(e, i, P(22), 0.004, 0.2, a);
        },
        !0,
        !1,
      );
  return (
    (V[e] = {
      get tex() {
        return (o ??= s());
      },
      set tex(e) {
        o = e;
      },
      rough: 0.85,
      transparent: n.bg == null,
      glow: n.glow,
    }),
    e
  );
}
var W = new x(),
  G = new x(),
  K = (() => {
    let e = new t();
    return {
      position: e.attributes.position.array,
      normal: e.attributes.normal.array,
      index: e.index.array,
    };
  })();
function de(e, n, r, a, s, c) {
  let l = n - e,
    u = a - r,
    d = c - s,
    f = (e + n) / 2,
    p = (r + a) / 2,
    m = (s + c) / 2;
  if (!Number.isFinite(l + u + d + f + p + m) || Math.max(l, u, d) > 34e37)
    return new t(l, u, d).translate(f, p, m);
  let h = new Float32Array(K.position.length),
    g = K.position;
  for (let e = 0; e < h.length; e += 3)
    ((h[e] = Math.fround(g[e] * l) + f),
      (h[e + 1] = Math.fround(g[e + 1] * u) + p),
      (h[e + 2] = Math.fround(g[e + 2] * d) + m));
  let _ = new o();
  return (
    _.setAttribute(`position`, new i(h, 3)),
    _.setAttribute(`normal`, new i(K.normal.slice(), 3)),
    _.setIndex(new i(K.index.slice(), 1)),
    _
  );
}
function fe(e) {
  let t = e.reduce((e, t) => e + t.attributes.position.count, 0),
    n =
      t <= 65536
        ? new Uint16Array(e.reduce((e, t) => e + t.index.count, 0))
        : new Uint32Array(e.reduce((e, t) => e + t.index.count, 0)),
    r = new o();
  for (let [n, a] of Object.entries(e[0].attributes)) {
    let o = new a.array.constructor(t * a.itemSize),
      s = 0;
    for (let t of e)
      (o.set(t.attributes[n].array, s), (s += t.attributes[n].array.length));
    r.setAttribute(n, new i(o, a.itemSize, a.normalized));
  }
  let a = 0,
    s = 0;
  for (let t of e) {
    let e = t.index.array;
    for (let t = 0; t < e.length; t++) n[a++] = e[t] + s;
    s += t.attributes.position.count;
  }
  return (r.setIndex(new i(n, 1)), (r.userData.coplanarSequential = !0), r);
}
var pe = class {
  constructor() {
    this.parts = new Map();
  }
  cell(e, t, n) {
    let r = new x(...t).applyMatrix4(e),
      i = new x(0, 0, 1).transformDirection(e);
    return (
      w.length === 16384 &&
        console.warn(
          `facade-kit: more cells than the alive texture holds; raise AW`,
        ),
      w.push({ center: r, normal: i, mat: n }),
      w.length - 1
    );
  }
  add(e, t, n, r, a = {}) {
    if (T.minDetail > 0) {
      (t.boundingBox || t.computeBoundingBox(),
        k.copy(t.boundingBox).applyMatrix4(n).getSize(A));
      let e = A.x,
        r = A.y,
        i = A.z;
      if (e + r + i - Math.max(e, r, i) - Math.min(e, r, i) < T.minDetail)
        return;
    }
    let s = t.index ? new o() : t;
    t.index &&
      (s.setAttribute(`position`, t.attributes.position.clone()),
      s.setAttribute(`normal`, t.attributes.normal.clone()),
      s.setIndex(t.index.clone()));
    for (let e of Object.keys(s.attributes))
      e !== `position` && e !== `normal` && s.deleteAttribute(e);
    let c = s.attributes.position,
      l = c.count,
      u = new Float32Array(l * 2);
    if (a.planar)
      for (let e = 0; e < l; e++) {
        let [t, n] = a.planar(c.getX(e), c.getY(e), c.getZ(e));
        ((u[e * 2] = t), (u[e * 2 + 1] = n));
      }
    if ((s.applyMatrix4(n), !a.planar)) {
      let t = s.attributes.normal,
        n = 1 / (V[e]?.scale || 1),
        r = a.swap ?? V[e]?.swap;
      for (let e = 0; e < l; e++) {
        (W.fromBufferAttribute(c, e), G.fromBufferAttribute(t, e));
        let i = Math.abs(G.x),
          a = Math.abs(G.y),
          o = Math.abs(G.z),
          s,
          l;
        (a >= i && a >= o
          ? ((s = W.x), (l = W.z))
          : i >= o
            ? ((s = W.z), (l = W.y))
            : ((s = W.x), (l = W.y)),
          r && ([s, l] = [l, s]),
          (u[e * 2] = s * n),
          (u[e * 2 + 1] = l * n));
      }
    }
    if (
      (s.setAttribute(`uv`, new i(u, 2)),
      s.setAttribute(`cellId`, new i(new Float32Array(l).fill(r), 1)),
      !s.index)
    ) {
      let e = l <= 65536 ? new Uint16Array(l) : new Uint32Array(l);
      for (let t = 0; t < l; t++) e[t] = t;
      s.setIndex(new i(e, 1));
    }
    (this.parts.has(e) || this.parts.set(e, []), this.parts.get(e).push(s));
  }
  box(e, t, n, r, i, a, o, s, c, l) {
    i - r < 0.001 ||
      o - a < 0.001 ||
      c - s < 0.001 ||
      this.add(e, de(r, i, a, o, s, c), t, n, l);
  }
  build() {
    let e = new h(),
      t = 0;
    for (let [n, r] of this.parts) {
      let i = fe(r),
        a = V[n],
        o = new d(i, ce(n));
      ((o.material.name ||= n),
        (o.castShadow = !a.noShadow && !a.transparent && !a.clear),
        (o.receiveShadow = !0),
        (o.customDepthMaterial = se),
        e.add(o),
        (t += i.index.count / 3));
    }
    return ((e.userData.tris = t), e);
  }
};
function q(e, t, n, r, i, a) {
  let { K: o, M: s } = e,
    { u0: c, u1: l, y0: u, y1: d, cell: f, wallMat: p, t: m } = t;
  (o.box(p, s, f, c, l, u, i, -m, 0),
    o.box(p, s, f, c, l, a, d, -m, 0),
    o.box(p, s, f, c, n, i, a, -m, 0),
    o.box(p, s, f, r, l, i, a, -m, 0));
}
