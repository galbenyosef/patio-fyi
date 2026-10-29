// assets__effects---y_dmg- 06 — math
// Lines 2656-2961 of readable/assets__effects---y_dmg-.pretty.js (statement-aligned).
function w(e, t, n, r, i, a, o, s, c, l, u, d, f) {
  let p = new e.PlaneGeometry(t, n, i, a);
  p.rotateX(-Math.PI / 2);
  let m = p.attributes.position;
  for (let e = 0; e < m.count; e++) {
    let a = Math.abs(m.getZ(e)) / (n / 2),
      s = Math.abs(m.getX(e)) / (t / 2),
      c =
        r *
        (Math.max(0, 1 - a) ** 1.35 * (1 - s ** 7)) *
        (a < 0.98 ? o.range(0.8, 1.12) : 1);
    m.setXYZ(
      e,
      m.getX(e) + (a < 0.98 && a > 0.02 ? (o.range(-0.25, 0.25) * t) / i : 0),
      c,
      m.getZ(e),
    );
  }
  let h = p.toNonIndexed();
  p.dispose();
  let g = h.attributes.position,
    _ = new Float32Array(g.count * 3),
    v = new e.Color(s),
    y = new e.Color(c),
    b = new e.Color();
  for (let e = 0; e < g.count; e += 3) {
    let t = (g.getY(e) + g.getY(e + 1) + g.getY(e + 2)) / 3;
    b.copy(v)
      .lerp(y, Math.min(1, (t / r) * 1.3))
      .multiplyScalar(o.range(0.9, 1.08));
    for (let t = 0; t < 3; t++)
      ((_[(e + t) * 3] = b.r),
        (_[(e + t) * 3 + 1] = b.g),
        (_[(e + t) * 3 + 2] = b.b));
  }
  return (
    h.setAttribute(`color`, new e.BufferAttribute(_, 3)),
    h.computeVertexNormals(),
    f && h.rotateY(f),
    h.translate(l, u, d),
    h
  );
}
function T(e, t, n, r) {
  let i = new e.Color(n),
    a = t.attributes.position.count,
    o = new Float32Array(a * 3);
  for (let e = 0; e < a; e++)
    ((o[e * 3] = i.r * r), (o[e * 3 + 1] = i.g * r), (o[e * 3 + 2] = i.b * r));
  t.setAttribute(`color`, new e.BufferAttribute(o, 3));
}
function E(e, t, n = !1) {
  let r = 0,
    i = 0,
    a = t.every((e) => e.attributes.color),
    o = t.every((e) => e.attributes.uv);
  for (let e of t)
    ((r += e.attributes.position.count),
      (i += e.index ? e.index.count : e.attributes.position.count));
  let s = new Float32Array(r * 3),
    c = new Float32Array(r * 3),
    l = a ? new Float32Array(r * 3) : null,
    u = o ? new Float32Array(r * 2) : null,
    d = new (r > 65535 ? Uint32Array : Uint16Array)(i),
    f = 0,
    p = 0;
  for (let e of t) {
    let t = e.attributes.position.count;
    if (
      (s.set(e.attributes.position.array, f * 3),
      e.attributes.normal && c.set(e.attributes.normal.array, f * 3),
      l && l.set(e.attributes.color.array, f * 3),
      u && u.set(e.attributes.uv.array, f * 2),
      e.index)
    )
      for (let t = 0; t < e.index.count; t++) d[p++] = e.index.array[t] + f;
    else for (let e = 0; e < t; e++) d[p++] = f + e;
    ((f += t), e.dispose());
  }
  let m = new e.BufferGeometry();
  return (
    m.setAttribute(`position`, new e.BufferAttribute(s, 3)),
    n || m.setAttribute(`normal`, new e.BufferAttribute(c, 3)),
    l && m.setAttribute(`color`, new e.BufferAttribute(l, 3)),
    u && m.setAttribute(`uv`, new e.BufferAttribute(u, 2)),
    m.setIndex(new e.BufferAttribute(d, 1)),
    m.computeBoundingSphere(),
    m
  );
}
function D(e, t) {
  let n = document.createElement(`canvas`);
  ((n.width = 512), (n.height = 128 * t.length));
  let r = n.getContext(`2d`);
  t.forEach((e, t) => {
    let n = t * 128;
    ((r.fillStyle = `rgba(24,22,20,0.82)`),
      O(r, 12, n + 14, 488, 100, 22),
      r.fill(),
      (r.fillStyle = `#f2ead8`),
      (r.font = `bold 72px "Segoe UI", Arial, sans-serif`),
      (r.textAlign = `center`),
      (r.textBaseline = `middle`),
      r.fillText(e, 256, n + 64 + 4));
  });
  let i = new e.CanvasTexture(n);
  return (
    (i.colorSpace = e.SRGBColorSpace),
    (i.anisotropy = 4),
    (i.generateMipmaps = !0),
    (i.minFilter = e.LinearMipmapLinearFilter),
    i
  );
}
function O(e, t, n, r, i, a) {
  (e.beginPath(),
    e.moveTo(t + a, n),
    e.arcTo(t + r, n, t + r, n + i, a),
    e.arcTo(t + r, n + i, t, n + i, a),
    e.arcTo(t, n + i, t, n, a),
    e.arcTo(t, n, t + r, n, a),
    e.closePath());
}
function k(e, t) {
  let n = new e.MeshStandardMaterial({
      vertexColors: !0,
      roughness: 0.9,
      metalness: 0,
      flatShading: !0,
    }),
    r = new e.Group();
  r.name = `fx:runner`;
  let i = 5990972,
    a = 4871729,
    o = 13081202,
    s = 3090980,
    c = 4016687,
    l = [],
    u = (e, t, n, r) => {
      (e.translate(t, n, r), l.push(e));
    };
  (u(t(0.46, 0.62, 0.28, i), 0, 1.16, 0),
    u(t(0.5, 0.2, 0.34, c), 0, 0.95, 0),
    u(t(0.34, 0.16, 0.2, c), 0, 1.25, 0.2),
    u(t(0.24, 0.26, 0.26, o), 0, 1.62, 0),
    u(t(0.3, 0.12, 0.32, a), 0, 1.79, 0),
    u(t(0.34, 0.06, 0.36, a), 0, 1.72, 0));
  let d = new e.Mesh(E(e, l), n);
  ((d.castShadow = !0), r.add(d));
  let f = (r, i, a, o, s = []) => {
      let c = [t(r, i, a, o)];
      c[0].translate(0, -i / 2, 0);
      for (let [e, n, r, i, a, o, l] of s) {
        let s = t(e, n, r, i);
        (s.translate(a, o, l), c.push(s));
      }
      let l = new e.Mesh(E(e, c), n);
      return ((l.castShadow = !0), l);
    },
    p = f(0.18, 0.78, 0.2, i, [[0.2, 0.14, 0.3, s, 0, -0.78, -0.04]]);
  p.position.set(-0.12, 0.85, 0);
  let m = f(0.18, 0.78, 0.2, i, [[0.2, 0.14, 0.3, s, 0, -0.78, -0.04]]);
  m.position.set(0.12, 0.85, 0);
  let h = f(0.13, 0.58, 0.14, i, [[0.12, 0.12, 0.12, o, 0, -0.62, 0]]);
  h.position.set(-0.31, 1.44, 0);
  let g = f(0.13, 0.58, 0.14, i, [[0.12, 0.12, 0.12, o, 0, -0.62, 0]]);
  g.position.set(0.31, 1.44, 0);
  let _ = t(0.06, 0.1, 0.8, 2829352);
  _.translate(0.12, -0.55, -0.25);
  let v = new e.Mesh(_, n);
  ((v.castShadow = !0), g.add(v), r.add(p, m, h, g));
  let y = 0,
    b = 0;
  return {
    root: r,
    set(e, t, n, i, a) {
      ((b = t), r.position.set(e, t, n), (r.rotation.y = i), (y = a));
    },
    animate() {
      let e = Math.sin(y),
        t = Math.cos(y);
      ((p.rotation.x = e * 0.9),
        (m.rotation.x = -e * 0.9),
        (h.rotation.x = -e * 0.7 - 0.3),
        (g.rotation.x = -0.9 + t * 0.1),
        (g.rotation.y = -0.4),
        (r.position.y = b + Math.abs(t) * 0.06),
        (r.rotation.x = 0.12));
    },
  };
}
function A(e, t, n, r, i = 1) {
  i >= 1
    ? t.spawn(`cannon`, n, r)
    : t.spawn(`muzzle`, n, r, { scale: 1.4, casing: !1 });
  let a = e.map.raycast(n, [0, -1, 0], i >= 1 ? 5 : 3.5);
  if (!(
    !a ||
    a.entityId != null ||
    a.surface === `water` ||
    a.point[1] <= e.map.waterLevel
  )) {
    for (let e of [-1, 1]) {
      let n = [r[2] * e, 0, -r[0] * e];
      t.spawn(`dust`, a.point, n, {
        count: Math.round(5 * i),
        scale: 1.7 * i,
        surface: a.surface,
      });
    }
    if (i >= 1) {
      let i = [n[0] + r[0] * 3, n[1], n[2] + r[2] * 3],
        a = e.map.raycast(i, [0, -1, 0], 5);
      a &&
        a.entityId == null &&
        a.surface !== `water` &&
        t.spawn(`dust`, a.point, [r[0], 0.3, r[2]], {
          count: 6,
          scale: 2.1,
          surface: a.surface,
        });
    }
  }
}
function j(e, t, n) {
  let r = n[0] - t[0],
    i = n[1] - t[1],
    a = n[2] - t[2],
    o = r * r + i * i + a * a;
  if (o < 1e-4) return !1;
  let s = 1;
  for (let n of [e.smoke, e.alp]) {
    let e = n?.s;
    if (!e) continue;
    let c = e.f,
      l = !!c.s0;
    for (let n = 0; n < e.n; n++) {
      if (!l && c.kind.a[n] !== 0) continue;
      let e = Math.min(1, c.age.a[n] / c.life.a[n]);
      if (e >= 1) continue;
      let u = c.amode.a[n],
        d = 1 - e;
      u === 1
        ? (d = e < 0.15 ? e / 0.15 : 1 - (e - 0.15) / 0.85)
        : u === 2
          ? (d = e < 0.6 ? 1 : 1 - (e - 0.6) / 0.4)
          : u === 3
            ? (d = (1 - e) ** 2)
            : u === 4 && (d = e < 0.78 ? 1 : (1 - (e - 0.78) / 0.22) ** 2);
      let f = c.alpha.a[n] * d;
      if (f < 0.02) continue;
      let p = n * 3,
        m = c.pos.a[p] - t[0],
        h = c.pos.a[p + 1] - t[1],
        g = c.pos.a[p + 2] - t[2],
        _ = Math.max(0, Math.min(1, (m * r + h * i + g * a) / o)),
        v = (m - _ * r) ** 2 + (h - _ * i) ** 2 + (g - _ * a) ** 2,
        y = l ? c.s0.a : c.size0.a,
        b = l ? c.s1.a : c.size1.a,
        x = l ? 3 : 2,
        S = 0;
      for (let t = 0; t < x; t++)
        S = Math.max(S, y[n * x + t] + (b[n * x + t] - y[n * x + t]) * e);
      if (
        (l || (S *= 0.5),
        !(S <= 0 || v >= S * S) &&
          ((s *= 1 - Math.min(0.95, f * Math.sqrt(1 - v / (S * S)))), s < 0.45))
      )
        return !0;
    }
  }
  return !1;
}
var M = 1 / 60,
  N = null;
function P(e) {
  if (!e) return `dirt`;
  if (e.targetId != null && e.targetId >= 0) return `hit`;
  let t = e.surface;
  return typeof t == `string` && t ? t.toLowerCase() : `dirt`;
}
var F = {
    x: 0,
    y: 0,
    z: 0,
    set(e, t, n) {
      return ((this.x = e), (this.y = t), (this.z = n), this);
    },
    applyMatrix4(e) {
      let t = e.elements,
        n = this.x,
        r = this.y,
        i = this.z,
        a = 1 / (t[3] * n + t[7] * r + t[11] * i + t[15]);
      return (
        (this.x = (t[0] * n + t[4] * r + t[8] * i + t[12]) * a),
        (this.y = (t[1] * n + t[5] * r + t[9] * i + t[13]) * a),
        (this.z = (t[2] * n + t[6] * r + t[10] * i + t[14]) * a),
        this
      );
    },
  },
  I = () => null,
  L = () => null,
  R = 35,
  z = new Map();
