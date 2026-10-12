// assets__cube-soldier-BRpW8Tqo 12 — math
// Lines 3329-3661 of readable/assets__cube-soldier-BRpW8Tqo.pretty.js (statement-aligned).
function Sr(e) {
  if (_r.has(e.key)) return _r.get(e.key);
  xr.push(e);
  let { nx: t, nz: n, spacing: r, centre: i } = e,
    a = new Int32Array(t * n).fill(-1),
    o = [],
    s = [],
    c = [],
    l = [];
  for (let u = 0; u < n; u++)
    for (let d = 0; d < t; d++) {
      let f = (d - (t - 1) / 2) * r,
        p = (u - (n - 1) / 2) * r;
      if (!e.keep(f, p)) continue;
      let m = e.pin(f, p);
      ((a[u * t + d] = o.length), c.push(d, u), l.push(m !== null));
      let h = q(i.x + f, m ?? i.y, i.z + p);
      (o.push(h), s.push(h.clone()));
    }
  let u = [],
    d = (e, r, i, s, c) => {
      if (i >= t || s >= n || i < 0) return;
      let l = a[r * t + e],
        d = a[s * t + i];
      l >= 0 && d >= 0 && u.push([l, d, o[l].distanceTo(o[d]), c]);
    };
  for (let e = 0; e < n; e++)
    for (let n = 0; n < t; n++)
      (d(n, e, n + 1, e, 1),
        d(n, e, n, e + 1, 1),
        d(n, e, n + 1, e + 1, 0.6),
        d(n, e, n - 1, e + 1, 0.6),
        d(n, e, n + 2, e, 0.08),
        d(n, e, n, e + 2, 0.08));
  let f = q(0, 0, 0),
    p = q(0, 0, 0),
    m = !e.fresh && br(e, o) ? 0 : (e.steps ?? 260);
  for (let t = 0; t < m; t++) {
    for (let e = 0; e < o.length; e++) {
      if (l[e]) continue;
      let t = o[e],
        n = s[e];
      (p.subVectors(t, n).multiplyScalar(0.98),
        n.copy(t),
        t.add(p),
        (t.y += -0.0012098765432098767));
    }
    for (let t = 0; t < 6; t++) {
      for (let [e, t, n, r] of u) {
        f.subVectors(o[t], o[e]);
        let i = f.length();
        if (i < 1e-9) continue;
        let a = ((i - n) / i) * r,
          s = l[e],
          c = l[t];
        if (s && c) continue;
        let u = s ? 0 : c ? 1 : 0.5;
        (o[e].addScaledVector(f, a * u), o[t].addScaledVector(f, -a * (1 - u)));
      }
      for (let t = 0; t < o.length; t++)
        !l[t] && hr(o[t], e.off, e.domeOff ?? e.off) && s[t].lerp(o[t], 0.7);
    }
  }
  let h = {
    P: o.map((e) => e.clone()),
    keep: a,
    ij: c,
    nx: t,
    nz: n,
    spacing: r,
  };
  return (_r.set(e.key, h), h);
}
function Cr(e, t) {
  let { P: n, keep: r, ij: i, nx: a, nz: s, spacing: l } = e,
    u = n.length,
    d = new Float32Array(u * 3),
    f = new Float32Array(u * 2),
    p = [];
  n.forEach((e, n) => {
    (d.set([e.x, e.y, e.z], n * 3),
      f.set([(i[n * 2] * l) / t, (i[n * 2 + 1] * l) / t], n * 2));
  });
  for (let e = 0; e < s - 1; e++)
    for (let t = 0; t < a - 1; t++) {
      let n = r[e * a + t],
        i = r[e * a + t + 1],
        o = r[(e + 1) * a + t + 1],
        s = r[(e + 1) * a + t];
      n >= 0 && i >= 0 && o >= 0 && s >= 0 && p.push(n, s, o, n, o, i);
    }
  let m = new c();
  return (
    m.setAttribute(`position`, new o(d, 3)),
    m.setAttribute(`uv`, new o(f, 2)),
    m.setIndex(p),
    m.computeVertexNormals(),
    m
  );
}
var wr = 0.019,
  Tr = 0.034,
  Er = 42,
  Dr = 0.215,
  Or = {},
  kr = null,
  Ar = null;
function jr() {
  if (kr) return kr;
  let e = document.createElement(`canvas`);
  e.width = e.height = 32;
  let t = e.getContext(`2d`);
  return (
    (t.fillStyle = `#000`),
    t.fillRect(0, 0, 32, 32),
    (t.fillStyle = `#fff`),
    t.fillRect(0, 0, 32, 11),
    t.fillRect(0, 0, 11, 32),
    (kr = new d(e)),
    (kr.wrapS = kr.wrapT = x),
    (kr.anisotropy = 4),
    kr
  );
}
var Mr = [
  [3883824, 9411218],
  [3809828, 9073782],
];
function Nr(e, t = 0) {
  let n = +(t === 1),
    r = (e ? `w` : `s`) + n;
  if (Or[r]) return Or[r];
  let i = new m({ color: e ? 2896430 : 1316623, side: 2, roughness: 1 });
  return (
    (i.onBeforeCompile = (e) => {
      e.vertexShader = e.vertexShader.replace(
        `#include <begin_vertex>`,
        `#include <begin_vertex>
transformed -= objectNormal * 0.009;`,
      );
    }),
    (i.customProgramCacheKey = () => `veil-inner`),
    (Or[r] = {
      inner: i,
      net: new m({
        color: Mr[n][+!!e],
        alphaMap: jr(),
        alphaTest: 0.5,
        alphaToCoverage: !0,
        side: 2,
        roughness: 1,
      }),
    })
  );
}
function Pr(e) {
  let t = gr(e * 7919 + 13),
    n = [t() * 6, t() * 6, t() * 6],
    r = (e, t) => {
      let r = Math.atan2(e, t);
      return (
        0.56 +
        0.05 * Math.sin(3 * r + n[0]) +
        0.03 * Math.sin(7 * r + n[1]) +
        0.02 * Math.sin(13 * r + n[2]) +
        0.05 * Math.cos(r)
      );
    };
  return Sr({
    key: `veil` + e,
    nx: Er,
    nz: Er,
    spacing: Tr,
    centre: q(0, lr.c.y + lr.r.y + 0.03, lr.c.z),
    off: 0.05,
    domeOff: 0.012,
    keep: (e, t) => Math.hypot(e, t) <= r(e, t),
    pin: (e, t) =>
      Math.hypot(e, t) < 0.14
        ? lr.c.y +
          lr.r.y * Math.sqrt(1 - (e / lr.r.x) ** 2 - (t / lr.r.z) ** 2) +
          0.012
        : null,
  });
}
function Fr(e = 0) {
  let t = Pr(e % 4),
    n = t.P,
    r = Cr(t, wr),
    i = new Float32Array(n.length);
  return (
    n.forEach((e, t) => {
      let n = Math.max(0, Math.min(1, (e.y - 0.64) / 0.12));
      i[t] = n * n * (3 - 2 * n);
    }),
    {
      geometry: r,
      weights: i,
      eyes: [-1, 1].map((e) => {
        let t = e * 0.052 * cr,
          r = or + Dr * cr,
          i = 0;
        for (let e of n)
          Math.abs(e.x - t) < 0.03 &&
            Math.abs(e.y - r) < 0.03 &&
            (i = Math.min(i, e.z));
        return {
          x: e * 0.052,
          y: Dr,
          z: (i + 0.005 - sr) / cr,
          rotZ: e * 0.28,
        };
      }),
    }
  );
}
function Ir(e = !1, t = 1, i = 0) {
  let a = Pr(t % 4),
    o = a.P,
    s = o.length,
    c = Cr(a, wr),
    u = c.attributes.position.array,
    p = new Float32Array(s);
  o.forEach((e, t) => {
    let n = Math.max(0, Math.min(1, (e.y - 0.64) / 0.12));
    p[t] = n * n * (3 - 2 * n);
  });
  let m = Float32Array.from(u),
    h = Nr(e, i),
    g = [new f(c, h.inner), new f(c, h.net)];
  if (!Ar) {
    let e = document.createElement(`canvas`);
    e.width = e.height = 64;
    let t = e.getContext(`2d`),
      n = t.createRadialGradient(32, 32, 0, 32, 32, 32);
    (n.addColorStop(0, `rgba(255,255,255,0.9)`),
      n.addColorStop(1, `rgba(255,255,255,0)`),
      (t.fillStyle = n),
      t.fillRect(0, 0, 64, 64),
      (Ar = new d(e)));
  }
  let _ = [];
  for (let e of [-1, 1]) {
    let t = e * 0.052 * cr,
      i = or + Dr * cr,
      a = 0;
    for (let e of o)
      Math.abs(e.x - t) < 0.03 &&
        Math.abs(e.y - i) < 0.03 &&
        (a = Math.min(a, e.z));
    let s = (a + 0.005 - sr) / cr,
      c = new f(
        new y(0.044, 0.009),
        new ne({ color: 15331810, toneMapped: !1, side: 2 }),
      );
    (c.position.set(e * 0.052, Dr, s), (c.rotation.z = e * 0.28));
    let l = new r(
      new n({
        map: Ar,
        color: 13625544,
        blending: 2,
        depthWrite: !1,
        transparent: !0,
        opacity: 0.35,
        toneMapped: !1,
      }),
    );
    (l.position.set(e * 0.052, Dr, s - 0.03),
      l.scale.set(0.065, 0.032, 1),
      _.push(c, l));
  }
  let b = new l().compose(q(0, or, sr), new v(), q(cr, cr, cr)).invert(),
    x = new l(),
    S = q(0, 0, 0),
    C = c.attributes.position.array;
  return {
    meshes: g,
    eyes: _,
    update: (e) => {
      (e.updateMatrix(), x.multiplyMatrices(e.matrix, b));
      for (let e = 0; e < s; e++) {
        let t = p[e],
          n = e * 3;
        if (t === 0) {
          ((C[n] = m[n]), (C[n + 1] = m[n + 1]), (C[n + 2] = m[n + 2]));
          continue;
        }
        (S.set(m[n], m[n + 1], m[n + 2]).applyMatrix4(x),
          (C[n] = m[n] + (S.x - m[n]) * t),
          (C[n + 1] = m[n + 1] + (S.y - m[n + 1]) * t),
          (C[n + 2] = m[n + 2] + (S.z - m[n + 2]) * t));
      }
      ((c.attributes.position.needsUpdate = !0), c.computeVertexNormals());
    },
  };
}
var Lr = [
    [
      `#9d927e`,
      `#857b69`,
      `#b3a791`,
      `#6f6757`,
      `#a89c86`,
      `#c1b59d`,
      `#8f8573`,
      `#a1967f`,
    ],
    [
      `#4a4749`,
      `#6e3a35`,
      `#3b393c`,
      `#5c3533`,
      `#55524f`,
      `#2f2e31`,
      `#7a4038`,
      `#434044`,
    ],
  ],
  Rr = [`#6c6353`, `#2c2b2e`],
  zr = [],
  Br = [],
  Vr = [];
function Hr(e, t, n, r, i, a = 0) {
  (e.save(), e.translate(t, n), e.rotate(a), e.beginPath());
  for (let t = 0; t <= 64; t++) {
    let n = (t / 64) * Math.PI * 2,
      a = 0.78 + 0.22 * Math.cos(9 * n) * Math.sin(n / 2) ** 0.5,
      o = (Math.sin(n) * a * r) / 2,
      s = i * 0.12 + ((1 - Math.cos(n)) / 2) * i * 0.88 * (0.9 + 0.1 * a);
    t ? e.lineTo(o, s) : e.moveTo(o, s);
  }
  (e.closePath(), e.restore());
}
