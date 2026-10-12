// assets__animation-DTvaGqA- 06 — math
// Lines 1092-1392 of readable/assets__animation-DTvaGqA-.pretty.js (statement-aligned).
function Nn() {
  let e = [];
  for (let t = 0; t < Dn; t++) {
    let n = new O(
      On,
      3,
      6,
      (t / Dn) * Math.PI * 2,
      (Math.PI * 2) / Dn,
      0.12,
      1.25,
    ).toNonIndexed();
    (n.scale(1, 0.55, 1),
      n.translate(0, kn - On * 0.55, 0),
      e.push(Mn(n, t % 2 ? `#5d6446` : `#6b7352`)));
  }
  let t = kn - On * 0.55 + Math.cos(1.37) * On * 0.55,
    n = Math.sin(1.37) * On,
    r = new k(0, 1, 0);
  for (let i = 0; i < Dn; i++) {
    let a = (i / Dn) * Math.PI * 2,
      o = new k(Math.sin(a) * n, t, Math.cos(a) * n),
      s = new k(Math.sin(a) * 0.22, An, Math.cos(a) * 0.12),
      c = o.clone().sub(s),
      l = c.length(),
      d = new u(0.012, 0.012, l, 3, 1, !0).toNonIndexed();
    (d.applyQuaternion(new y().setFromUnitVectors(r, c.normalize())),
      d.translate((o.x + s.x) / 2, (o.y + s.y) / 2, (o.z + s.z) / 2),
      e.push(Mn(d, `#2a2c26`)));
  }
  let i = re(e);
  for (let t of e) t.dispose();
  return (i.computeVertexNormals(), i);
}
function Pn(e, t = 128) {
  let n = Nn(),
    r = new _({ vertexColors: !0, roughness: 0.9, metalness: 0, side: 2 }),
    i = new C(n, r, t);
  ((i.count = 0),
    (i.frustumCulled = !1),
    (i.castShadow = !0),
    (i.name = `parachutes`),
    e.add(i));
  let a = new Map(),
    o = new d(),
    s = new y(),
    c = new k(),
    l = new k(),
    u = new S(),
    f = 0,
    p = 0,
    m = new Set();
  return {
    begin(e) {
      ((f = 0), (p += e), m.clear());
    },
    add(e, n, r, d) {
      if (f >= t) return;
      let h = Math.min(1, (a.get(e) ?? 0) + d / jn);
      (a.set(e, h), m.add(e));
      let g = 1 - (1 - h) * (1 - h) * (1 - h),
        _ = Math.sin(p * 1.3 + e) * 0.06;
      (u.set(_, r, Math.sin(p * 0.9 + e * 2) * 0.05, `YXZ`),
        s.setFromEuler(u),
        c
          .set(0.25 + 0.75 * g, 0.6 + 0.4 * g, 0.25 + 0.75 * g)
          .multiplyScalar(bt()),
        l.set(n[0], n[1], n[2]),
        i.setMatrixAt(f++, o.compose(l, s, c)));
    },
    flush() {
      for (let e of a.keys()) m.has(e) || a.delete(e);
      ((i.count = f),
        (i.visible = f > 0),
        f && (i.instanceMatrix.needsUpdate = !0));
    },
    dispose() {
      (e.remove(i), n.dispose(), r.dispose(), i.dispose?.());
    },
  };
}
var Fn = 288,
  In = 2048 * 2 ** -24,
  Ln = () => [1 / 0, 1 / 0, 1 / 0, -1 / 0, -1 / 0, -1 / 0],
  Rn = (e, t) => {
    for (let n = 0; n < 3; n++)
      ((e[n] = Math.min(e[n], t[n])),
        (e[n + 3] = Math.max(e[n + 3], t[n + 3])));
  };
function zn(e) {
  let t = new Map(),
    n = 0,
    r = 0,
    i = 0;
  for (let { mesh: a } of e) {
    let e = a.geometry.attributes,
      o = a.material;
    if (
      !e.position ||
      !e.aRig ||
      !e.aDef ||
      e.position.count !== e.aRig.count ||
      e.position.count !== e.aDef.count
    )
      return null;
    let s = Number(o.defines?.CUBIE_INSET ?? 0);
    if (!Number.isFinite(s) || s < 0) return null;
    i = Math.max(i, s);
    for (let i = 0; i < e.position.count; i++) {
      let a = e.position.getX(i),
        s = e.position.getY(i),
        c = e.position.getZ(i),
        l = e.aRig.getX(i),
        u = e.aRig.getY(i),
        d = e.aRig.getZ(i),
        f = e.aDef.getX(i),
        p = e.aDef.getY(i),
        m = e.aDef.getZ(i),
        h = e.aDef.getW(i);
      if (
        ![a, s, c, l, u, d, f, p, m, h].every(Number.isFinite) ||
        !Number.isInteger(l) ||
        l < 0 ||
        l >= 12 ||
        ![0, 1, 2].includes(d)
      )
        return null;
      if (
        (o.defines?.CUBIE_BILLBOARD &&
          ((n = Math.max(n, Math.abs(f))), (r = Math.max(r, Math.abs(p)))),
        d === 0 && u)
      ) {
        if (!Number.isInteger(u) || u < 60 || u > 64 || !(m > 0)) return null;
        let e = 2 * m,
          n = h > 0.5 ? -1 : 1,
          r = p - n * m,
          i = Math.max(0, Math.min(1, (h > 0.5 ? p + m - s : s - (p - m)) / e)),
          o = Math.hypot(a, c),
          d =
            i <= 0 || i >= 1
              ? Math.hypot(s - f, o)
              : (1 - i) * Math.abs(r - f) +
                i * Math.abs(r + n * e - f) +
                2 * e * i * (1 - i) +
                o,
          g = `j/${l}/${f}`,
          _ = t.get(g);
        _
          ? (_.radius = Math.max(_.radius, d))
          : t.set(g, { bone: l, mode: 0, center: [0, f, 0], radius: d });
      } else {
        if (
          u !== 0 ||
          (d === 1 && (f < 0 || p < 0)) ||
          (d === 2 && (f < 0 || f > 1))
        )
          return null;
        let e = `b/${l}/${d}`,
          n = t.get(e);
        n || t.set(e, (n = { bone: l, mode: d, box: Ln(), negativeMass: 0 }));
        let r = n.box;
        ((r[0] = Math.min(r[0], a)),
          (r[1] = Math.min(r[1], s)),
          (r[2] = Math.min(r[2], c)),
          (r[3] = Math.max(r[3], a)),
          (r[4] = Math.max(r[4], s)),
          (r[5] = Math.max(r[5], c)),
          d === 1 && (n.negativeMass = Math.max(n.negativeMass, f + p - 1)));
      }
    }
  }
  for (let e of t.values())
    e.box &&
      ((e.center = [0, 1, 2].map((t) => (e.box[t] + e.box[t + 3]) / 2)),
      (e.extent = [0, 1, 2].map((t) => (e.box[t + 3] - e.box[t]) / 2)),
      delete e.box);
  return { groups: [...t.values()], haloX: n, haloY: r, inset: i };
}
function Bn(e, t, n, r, i) {
  for (let a = 0; a < 3; a++) {
    let o =
        e[t + a] * n[0] +
        e[t + a + 4] * n[1] +
        e[t + a + 8] * n[2] +
        e[t + a + 12],
      s =
        Math.abs(e[t + a]) * r[0] +
        Math.abs(e[t + a + 4]) * r[1] +
        Math.abs(e[t + a + 8]) * r[2];
    ((i[a] = o - s), (i[a + 3] = o + s));
  }
}
function Vn(e, t, n) {
  let r = zn(e),
    i = new Uint8Array(n).fill(1),
    a = new Uint8Array(n),
    o = new Uint8Array(n),
    s = new Float64Array(n * 6),
    c = new Float64Array(6),
    l = new Float64Array(6),
    u = new Float64Array(16),
    f = new Float64Array(6),
    m = new D(),
    h = new d(),
    g = new p();
  function _(e, n) {
    for (let r = 0; r < 4; r++)
      for (let i = 0; i < 3; i++)
        u[r * 4 + i] =
          t[e + i] * t[n + r * 4] +
          t[e + 4 + i] * t[n + r * 4 + 1] +
          t[e + 8 + i] * t[n + r * 4 + 2] +
          (r === 3 ? t[e + 12 + i] : 0);
  }
  function v(e) {
    let n = e * Fn;
    ((i[e] = 0), (a[e] = 0));
    for (let e = 60; e <= 64; e++) {
      let r = n + e * 4,
        i = t[r] ** 2 + t[r + 1] ** 2 + t[r + 2] ** 2 + t[r + 3] ** 2;
      if (!Number.isFinite(i) || Math.abs(i - 1) > 1e-5) return;
    }
    for (let e = 0; e < 3; e++) ((f[e] = 1 / 0), (f[e + 3] = -1 / 0));
    for (let e of r.groups) {
      let r = n + e.bone * 16;
      if (e.radius !== void 0)
        for (let n = 0; n < 3; n++) {
          let i =
              t[r + n] * e.center[0] +
              t[r + n + 4] * e.center[1] +
              t[r + n + 8] * e.center[2] +
              t[r + n + 12],
            a = e.radius * Math.hypot(t[r + n], t[r + n + 4], t[r + n + 8]);
          ((c[n] = i - a), (c[n + 3] = i + a));
        }
      else {
        if ((Bn(t, r, e.center, e.extent, c), e.mode))
          for (
            let t = e.mode === 1 ? 12 : 14;
            t <= (e.mode === 1 ? 13 : 14);
            t++
          )
            (_(r, n + t * 16), Bn(u, 0, e.center, e.extent, l), Rn(c, l));
        for (let t = 0; t < 3; t++) {
          let n = e.negativeMass * (c[t + 3] - c[t]);
          ((c[t] -= n), (c[t + 3] += n));
        }
      }
      Rn(f, c);
    }
    for (let t = 0; t < 3; t++) {
      let n = In * (1 + Math.max(Math.abs(f[t]), Math.abs(f[t + 3]))) + r.inset;
      if (!Number.isFinite(n)) return;
      ((s[e * 6 + t] = f[t] - n), (s[e * 6 + t + 3] = f[t + 3] + n));
    }
    a[e] = 1;
  }
  return {
    invalidate(e) {
      i[e] = 1;
    },
    mask(e, t, n, c) {
      if (
        !r ||
        n !== !1 ||
        !e?.isPerspectiveCamera ||
        e.isArrayCamera ||
        e.reversedDepth
      )
        return null;
      t.updateWorldMatrix(!0, !1);
      let l = t.matrixWorld.elements;
      for (let e = 0; e < 16; e++) if (l[e] !== +(e % 5 == 0)) return null;
      e.updateWorldMatrix(!0, !1);
      let u = e.projectionMatrix.elements,
        d = e.matrixWorldInverse.elements,
        f = e.matrixWorld.elements;
      for (let e = 0; e < 16; e++)
        if (
          !Number.isFinite(u[e]) ||
          !Number.isFinite(d[e]) ||
          !Number.isFinite(f[e])
        )
          return null;
      m.setFromProjectionMatrix(
        h.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
      );
      for (let e = 0; e < c; e++) {
        if ((i[e] && v(e), (o[e] = 1), !a[e])) continue;
        let t = e * 6,
          n = Math.abs(f[0]) * r.haloX + Math.abs(f[4]) * r.haloY,
          c = Math.abs(f[1]) * r.haloX + Math.abs(f[5]) * r.haloY,
          l = Math.abs(f[2]) * r.haloX + Math.abs(f[6]) * r.haloY;
        (g.min.set(s[t] - n, s[t + 1] - c, s[t + 2] - l),
          g.max.set(s[t + 3] + n, s[t + 4] + c, s[t + 5] + l),
          (o[e] = +!!m.intersectsBox(g)));
      }
      return o;
    },
  };
}
