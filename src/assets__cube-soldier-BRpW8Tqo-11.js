// assets__cube-soldier-BRpW8Tqo 11 — math
// Lines 2987-3328 of readable/assets__cube-soldier-BRpW8Tqo.pretty.js (statement-aligned).
function $n(e, t, n, r) {
  let { part: i, side: a, cls: o, pal: s } = n,
    c = s.cloth,
    l = Zn(
      Math.floor(e.x / 0.07 + 50),
      Math.floor(e.y / 0.045 + 50),
      Math.floor(e.z / 0.07 + 50),
    ),
    u = c,
    d = n.base * (l < 0.17 ? Yn : l < 0.3 ? 1.13 : 1),
    f = t.z < -0.6,
    p = t.x * a > 0.6;
  if (
    ((i === `waist` || i === `pants`) &&
      (e.y > 0.112 &&
        e.y < 0.162 &&
        ((u = 1974046), (d = 1), (e.y > 0.155 || e.y < 0.119) && (d = 0.75)),
      f &&
        Math.abs(e.x) < 0.03 &&
        e.y > 0.118 &&
        e.y < 0.156 &&
        ((u = 9144954),
        (d = Math.abs(e.x) < 0.018 && e.y > 0.126 && e.y < 0.148 ? 0.55 : 1))),
    (i === `leg` || i === `pants`) &&
      p &&
      (i !== `leg` || a !== 1) &&
      Qn(e.z, e.y, -0.07, 0.055, -0.35, -0.16))
  ) {
    let t = e.z < -0.062 || e.z > 0.047 || e.y < -0.342;
    ((u = o === `engineer` ? 9137997 : o === `assault` ? s.gear : c),
      (d =
        (o === `assault` ? 0.9 : o === `engineer` ? 1 : n.base * 0.8) *
        (t ? 0.7 : e.y > -0.2 ? 0.82 : 1)),
      e.y > -0.2 && e.y < -0.194 && (d *= 0.6));
  }
  if ((i === `leg` && a === 1) || i === `pants`) {
    let n = t.x > 0.6 && e.x > 0,
      r = e.x > 0,
      i = Xn.strap,
      a = e.y - 0.09;
    n &&
      e.y < 0.112 &&
      a > -0.13 &&
      e.z > 0.004 &&
      e.z < 0.032 &&
      ((u = i), (d = 1));
    let o = r && ((a < -0.188 && a > -0.214) || (a < -0.29 && a > -0.316));
    if (
      (o && ((u = i), (d = t.x < -0.6 ? 0.8 : 1)),
      n && Qn(e.z, a, -0.048, 0.056, -0.345, -0.13))
    ) {
      let t = e.z < -0.041 || e.z > 0.049 || a < -0.338;
      ((u = Xn.body),
        (d = t ? 0.6 : o ? 0.7 : 1),
        a > -0.158 && ((d = 0.72), a > -0.152 && a < -0.148 && (d = 0.5)));
    }
    let s = e.z - (a + 0.13) * 0.4;
    if (n && a >= -0.134 && a < -0.05 && s > -0.004 && s < 0.054) {
      let e = s < 0.004 || s > 0.046 || a > -0.058;
      ((u = e ? Xn.gripRim : Xn.grip),
        (d = 1),
        !e &&
          Math.round((a + 0.134) / 0.012) % 2 == 0 &&
          s > 0.012 &&
          s < 0.04 &&
          (u = Xn.gripDark));
    }
  }
  if (
    (i === `leg` &&
      r.y < -0.64 &&
      ((u = c), (d = n.base * Yn * (r.y < -0.742 ? 0.8 : 1))),
    i === `leg` && r.y >= -0.64)
  ) {
    let e = Math.abs(r.x),
      t = r.y + 0.37 - 0.06;
    (f &&
      e < 0.068 &&
      t > -0.06 &&
      t < 0.065 &&
      ((u = s.gear), (d = e > 0.056 || t < -0.05 || t > 0.055 ? 0.6 : 0.82)),
      o === `engineer` &&
        f &&
        e < 0.06 &&
        t < -0.08 &&
        t > -0.2 &&
        ((u = 5327675), (d = 1)));
  }
  return (
    i === `arm` &&
      (p &&
        Qn(r.z, r.y, -0.05, 0.05, -0.135, -0.02) &&
        ((d = n.base * (Math.abs(r.z) > 0.043 || r.y < -0.128 ? 0.66 : 0.84)),
        (u = c)),
      o === `support` &&
        r.y > -0.09 &&
        t.y > -0.2 &&
        ((u = s.gear), (d = 0.95)),
      o === `medic` &&
        r.y < -0.175 &&
        r.y > -0.23 &&
        ((u = 15658728),
        (d = 1),
        (p || f) &&
          (Math.abs(p ? r.z : r.x) < 0.009 || Math.abs(r.y + 0.2025) < 0.009) &&
          Math.abs(p ? r.z : r.x) < 0.024 &&
          (u = 13115434))),
    [u, d]
  );
}
var K = new p(),
  er = new M(),
  tr = new M(),
  nr = new M();
function rr(e, t, n, r, i = 256) {
  if (((e += `:` + i), Jn.has(e))) return Jn.get(e);
  let a = document.createElement(`canvas`);
  a.width = a.height = i;
  let o = a.getContext(`2d`),
    s = o.createImageData(i, i),
    c = s.data;
  K.set(n.pal.cloth).multiplyScalar(n.base).convertLinearToSRGB();
  for (let e = 0; e < c.length; e += 4)
    ((c[e] = K.r * 255),
      (c[e + 1] = K.g * 255),
      (c[e + 2] = K.b * 255),
      (c[e + 3] = 255));
  if (n.part === `leg`) {
    K.set(n.pal.cloth)
      .multiplyScalar(n.base * Yn * 0.8)
      .convertLinearToSRGB();
    for (let e = 0; e < i; e++)
      for (let t = Math.floor(i * 0.8); t < i; t++) {
        let n = (e * i + t) * 4;
        ((c[n] = K.r * 255), (c[n + 1] = K.g * 255), (c[n + 2] = K.b * 255));
      }
  }
  let l = t.attributes.position,
    u = t.attributes.uv,
    f = t.index.array,
    p = (e) => new M(l.getX(e), l.getY(e), l.getZ(e)),
    m = new M(),
    h = new M(),
    _ = new Map(),
    v = new Uint8ClampedArray(3),
    y = 0,
    b = g.enabled,
    x = g.workingColorSpace,
    S = (e, t) => {
      (b !== g.enabled || x !== g.workingColorSpace) &&
        (_.clear(), (y = 0), (b = g.enabled), (x = g.workingColorSpace));
      let n = Number.isFinite(e) && Number.isFinite(t),
        r = n ? _.get(e) : null,
        i = r?.get(t);
      if (i) return ((K.r = i.r), (K.g = i.g), (K.b = i.b), i.bytes);
      if (
        (K.set(e).multiplyScalar(t).convertLinearToSRGB(),
        (v[0] = Math.min(255, K.r * 255)),
        (v[1] = Math.min(255, K.g * 255)),
        (v[2] = Math.min(255, K.b * 255)),
        n && y < 256)
      ) {
        let n = { r: K.r, g: K.g, b: K.b, bytes: v.slice() };
        return (r ? r.set(t, n) : _.set(e, new Map([[t, n]])), y++, n.bytes);
      }
      return v;
    };
  for (let e = 0; e < f.length; e += 3) {
    let t = [f[e], f[e + 1], f[e + 2]],
      a = t.map((e) => [u.getX(e) * i, (1 - u.getY(e)) * i]),
      o = t.map(p),
      s =
        (a[1][0] - a[0][0]) * (a[2][1] - a[0][1]) -
        (a[2][0] - a[0][0]) * (a[1][1] - a[0][1]);
    if (Math.abs(s) < 0.5) continue;
    nr.crossVectors(
      er.subVectors(o[1], o[0]),
      tr.subVectors(o[2], o[0]),
    ).normalize();
    let l = o.map((e) => r(e.clone())),
      d = Math.max(0, Math.floor(Math.min(a[0][0], a[1][0], a[2][0]) - 1)),
      g = Math.min(i - 1, Math.ceil(Math.max(a[0][0], a[1][0], a[2][0]) + 1)),
      _ = Math.max(0, Math.floor(Math.min(a[0][1], a[1][1], a[2][1]) - 1)),
      v = Math.min(i - 1, Math.ceil(Math.max(a[0][1], a[1][1], a[2][1]) + 1));
    for (let e = _; e <= v; e++)
      for (let t = d; t <= g; t++) {
        let r = t + 0.5,
          u = e + 0.5,
          d =
            ((r - a[0][0]) * (a[2][1] - a[0][1]) -
              (a[2][0] - a[0][0]) * (u - a[0][1])) /
            s,
          f =
            ((a[1][0] - a[0][0]) * (u - a[0][1]) -
              (r - a[0][0]) * (a[1][1] - a[0][1])) /
            s,
          p = 1 - d - f;
        if (p < -0.08 || d < -0.08 || f < -0.08) continue;
        (m
          .set(0, 0, 0)
          .addScaledVector(o[0], p)
          .addScaledVector(o[1], d)
          .addScaledVector(o[2], f),
          h
            .set(0, 0, 0)
            .addScaledVector(l[0], p)
            .addScaledVector(l[1], d)
            .addScaledVector(l[2], f));
        let [g, _] = $n(h, nr, n, m),
          v = S(g, _),
          y = (e * i + t) * 4;
        ((c[y] = v[0]), (c[y + 1] = v[1]), (c[y + 2] = v[2]));
      }
  }
  o.putImageData(s, 0, 0);
  let C = new d(a);
  return ((C.colorSpace = T), (C.anisotropy = 4), Jn.set(e, C), C);
}
function ir(e) {
  let t = e.attributes.position.count;
  (e.setAttribute(`color`, new o(new Float32Array(t * 3).fill(1), 3)),
    e.setAttribute(`aTag`, new o(new Float32Array(t), 1)));
}
var ar = {
    veil0: {
      fp: `7912eb04`,
      n: 862,
      p: `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`,
    },
    poncho0: {
      fp: `c9417eb3`,
      n: 1476,
      p: `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`,
    },
  },
  q = (e, t, n) => new M(e, t, n),
  or = 0.6,
  sr = 0.01,
  cr = 1 / 1.08,
  lr = {
    c: q(0, 0.8037037037037037, 0.01925925925925926),
    r: q(0.21, 0.23, 0.21).multiplyScalar(cr),
  },
  ur = [
    [q(0, 0.55, 0), q(0, 0.75, 0), 0.09],
    [q(0.022, 0.662, 0.2), q(0.158, 0.058, 0.2), 0.06],
    ...[-1, 1].flatMap((e) => [
      [q(e * 0.275, 0.52, 0), q(e * 0.275, 0.52, 0), 0.085],
      [q(e * 0.275, 0.5, 0), q(e * 0.275, 0.2, 0), 0.075],
      [q(e * 0.28, 0.2, -0.02), q(e * 0.28, -0.08, -0.04), 0.07],
      [q(e * 0.116, 0.02, 0), q(e * 0.116, -0.62, 0), 0.105],
    ]),
  ],
  dr = [
    { c: q(0, 0.41, 0.01), h: q(0.195, 0.14, 0.11), r: 0.04 },
    { c: q(0, 0.08, 0), h: q(0.19, 0.16, 0.08), r: 0.03 },
  ],
  fr = new M(),
  pr = new M(),
  mr = new M();
function hr(e, t, n) {
  let r = !1;
  fr.subVectors(e, lr.c).divide(lr.r);
  let i = fr.length(),
    a = 1 + n / lr.r.y;
  i < a &&
    (e.copy(lr.c).add(fr.multiplyScalar(a / Math.max(i, 1e-6)).multiply(lr.r)),
    (r = !0));
  for (let [n, i, a] of ur) {
    mr.subVectors(i, n);
    let o = mr.lengthSq()
      ? Math.max(0, Math.min(1, pr.subVectors(e, n).dot(mr) / mr.lengthSq()))
      : 0;
    (pr.copy(n).addScaledVector(mr, o), fr.subVectors(e, pr));
    let s = fr.length();
    s < a + t &&
      (e
        .copy(pr)
        .addScaledVector(
          s > 1e-6 ? fr.divideScalar(s) : fr.set(0, 0, -1),
          a + t,
        ),
      (r = !0));
  }
  for (let n of dr) {
    (pr
      .set(
        Math.max(-n.h.x, Math.min(n.h.x, e.x - n.c.x)),
        Math.max(-n.h.y, Math.min(n.h.y, e.y - n.c.y)),
        Math.max(-n.h.z, Math.min(n.h.z, e.z - n.c.z)),
      )
      .add(n.c),
      fr.subVectors(e, pr));
    let i = fr.length();
    i < n.r + t &&
      (e
        .copy(pr)
        .addScaledVector(
          i > 1e-6 ? fr.divideScalar(i) : fr.set(0, 1, 0),
          n.r + t,
        ),
      (r = !0));
  }
  return r;
}
function gr(e) {
  let t = e >>> 0 || 1;
  return () => (t = (t * 1664525 + 1013904223) >>> 0) / 4294967296;
}
var _r = new Map(),
  vr = 1;
function yr(e) {
  let { nx: t, nz: n, spacing: r, centre: i } = e,
    a = [vr, t, n, r, i.x, i.y, i.z, e.off, e.domeOff ?? e.off, e.steps ?? 260];
  for (let i = 0; i < n; i++)
    for (let o = 0; o < t; o++) {
      let s = (o - (t - 1) / 2) * r,
        c = (i - (n - 1) / 2) * r;
      a.push(e.keep(s, c) ? (e.pin(s, c) ?? `k`) : `-`);
    }
  a.push(
    lr.c.toArray(),
    lr.r.toArray(),
    ur.map(([e, t, n]) => [e.toArray(), t.toArray(), n]),
    dr.map((e) => [e.c.toArray(), e.h.toArray(), e.r]),
  );
  let o = JSON.stringify(a),
    s = 2166136261;
  for (let e = 0; e < o.length; e++)
    s = Math.imul(s ^ o.charCodeAt(e), 16777619);
  return (s >>> 0).toString(16);
}
function br(e, t) {
  let n = ar[e.key];
  if (!n || n.n !== t.length || n.fp !== yr(e)) return !1;
  let r = atob(n.p),
    i = new Float32Array(
      new Uint8Array([...r].map((e) => e.charCodeAt(0))).buffer,
    );
  return (t.forEach((e, t) => e.set(i[t * 3], i[t * 3 + 1], i[t * 3 + 2])), !0);
}
var xr = [];
