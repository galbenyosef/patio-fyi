// assets__cube-soldier-DMHrHkZL 13 — math
// Lines 3681-3978 of readable/assets__cube-soldier-DMHrHkZL.pretty.js (statement-aligned).
function ci(e, t, n) {
  let r = !1;
  ai.subVectors(e, ni.c).divide(ni.r);
  let i = ai.length(),
    a = 1 + n / ni.r.y;
  i < a &&
    (e.copy(ni.c).add(ai.multiplyScalar(a / Math.max(i, 1e-6)).multiply(ni.r)),
    (r = !0));
  for (let [n, i, a] of ri) {
    si.subVectors(i, n);
    let o = si.lengthSq()
      ? Math.max(0, Math.min(1, oi.subVectors(e, n).dot(si) / si.lengthSq()))
      : 0;
    (oi.copy(n).addScaledVector(si, o), ai.subVectors(e, oi));
    let s = ai.length();
    s < a + t &&
      (e
        .copy(oi)
        .addScaledVector(
          s > 1e-6 ? ai.divideScalar(s) : ai.set(0, 0, -1),
          a + t,
        ),
      (r = !0));
  }
  for (let n of ii) {
    (oi
      .set(
        Math.max(-n.h.x, Math.min(n.h.x, e.x - n.c.x)),
        Math.max(-n.h.y, Math.min(n.h.y, e.y - n.c.y)),
        Math.max(-n.h.z, Math.min(n.h.z, e.z - n.c.z)),
      )
      .add(n.c),
      ai.subVectors(e, oi));
    let i = ai.length();
    i < n.r + t &&
      (e
        .copy(oi)
        .addScaledVector(
          i > 1e-6 ? ai.divideScalar(i) : ai.set(0, 1, 0),
          n.r + t,
        ),
      (r = !0));
  }
  return r;
}
function li(e) {
  let t = e >>> 0 || 1;
  return () => (t = (t * 1664525 + 1013904223) >>> 0) / 4294967296;
}
var ui = new Map(),
  di = 1;
function fi(e) {
  let { nx: t, nz: n, spacing: r, centre: i } = e,
    a = [di, t, n, r, i.x, i.y, i.z, e.off, e.domeOff ?? e.off, e.steps ?? 260];
  for (let i = 0; i < n; i++)
    for (let o = 0; o < t; o++) {
      let s = (o - (t - 1) / 2) * r,
        c = (i - (n - 1) / 2) * r;
      a.push(e.keep(s, c) ? (e.pin(s, c) ?? `k`) : `-`);
    }
  a.push(
    ni.c.toArray(),
    ni.r.toArray(),
    ri.map(([e, t, n]) => [e.toArray(), t.toArray(), n]),
    ii.map((e) => [e.c.toArray(), e.h.toArray(), e.r]),
  );
  let o = JSON.stringify(a),
    s = 2166136261;
  for (let e = 0; e < o.length; e++)
    s = Math.imul(s ^ o.charCodeAt(e), 16777619);
  return (s >>> 0).toString(16);
}
function pi(e, t) {
  let n = Qr[e.key];
  if (!n || n.n !== t.length || n.fp !== fi(e)) return !1;
  let r = atob(n.p),
    i = new Float32Array(
      new Uint8Array([...r].map((e) => e.charCodeAt(0))).buffer,
    );
  return (t.forEach((e, t) => e.set(i[t * 3], i[t * 3 + 1], i[t * 3 + 2])), !0);
}
var mi = [];
function hi(e) {
  if (ui.has(e.key)) return ui.get(e.key);
  mi.push(e);
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
      let h = J(i.x + f, m ?? i.y, i.z + p);
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
  let f = J(0, 0, 0),
    p = J(0, 0, 0),
    m = !e.fresh && pi(e, o) ? 0 : (e.steps ?? 260);
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
        !l[t] && ci(o[t], e.off, e.domeOff ?? e.off) && s[t].lerp(o[t], 0.7);
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
  return (ui.set(e.key, h), h);
}
function gi(e, t) {
  let { P: n, keep: r, ij: i, nx: a, nz: o, spacing: c } = e,
    u = n.length,
    d = new Float32Array(u * 3),
    f = new Float32Array(u * 2),
    p = [];
  n.forEach((e, n) => {
    (d.set([e.x, e.y, e.z], n * 3),
      f.set([(i[n * 2] * c) / t, (i[n * 2 + 1] * c) / t], n * 2));
  });
  for (let e = 0; e < o - 1; e++)
    for (let t = 0; t < a - 1; t++) {
      let n = r[e * a + t],
        i = r[e * a + t + 1],
        o = r[(e + 1) * a + t + 1],
        s = r[(e + 1) * a + t];
      n >= 0 && i >= 0 && o >= 0 && s >= 0 && p.push(n, s, o, n, o, i);
    }
  let m = new l();
  return (
    m.setAttribute(`position`, new s(d, 3)),
    m.setAttribute(`uv`, new s(f, 2)),
    m.setIndex(p),
    m.computeVertexNormals(),
    m
  );
}
var _i = 0.019,
  vi = 0.034,
  yi = 42,
  bi = 0.215,
  xi = {},
  Si = null,
  Ci = null;
function wi() {
  if (Si) return Si;
  let e = document.createElement(`canvas`);
  e.width = e.height = 32;
  let t = e.getContext(`2d`);
  return (
    (t.fillStyle = `#000`),
    t.fillRect(0, 0, 32, 32),
    (t.fillStyle = `#fff`),
    t.fillRect(0, 0, 32, 11),
    t.fillRect(0, 0, 11, 32),
    (Si = new j(e)),
    (Si.wrapS = Si.wrapT = b),
    (Si.anisotropy = 4),
    Si
  );
}
var Ti = [
  [3883824, 9411218],
  [3809828, 9073782],
];
function Ei(e, t = 0) {
  let n = +(t === 1),
    r = (e ? `w` : `s`) + n;
  if (xi[r]) return xi[r];
  let i = new a({ color: e ? 2896430 : 1316623, side: 2, roughness: 1 });
  return (
    (i.onBeforeCompile = (e) => {
      e.vertexShader = e.vertexShader.replace(
        `#include <begin_vertex>`,
        `#include <begin_vertex>
transformed -= objectNormal * 0.009;`,
      );
    }),
    (i.customProgramCacheKey = () => `veil-inner`),
    (xi[r] = {
      inner: i,
      net: new a({
        color: Ti[n][+!!e],
        alphaMap: wi(),
        alphaTest: 0.5,
        alphaToCoverage: !0,
        side: 2,
        roughness: 1,
      }),
    })
  );
}
function Di(e) {
  let t = li(e * 7919 + 13),
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
  return hi({
    key: `veil` + e,
    nx: yi,
    nz: yi,
    spacing: vi,
    centre: J(0, ni.c.y + ni.r.y + 0.03, ni.c.z),
    off: 0.05,
    domeOff: 0.012,
    keep: (e, t) => Math.hypot(e, t) <= r(e, t),
    pin: (e, t) =>
      Math.hypot(e, t) < 0.14
        ? ni.c.y +
          ni.r.y * Math.sqrt(1 - (e / ni.r.x) ** 2 - (t / ni.r.z) ** 2) +
          0.012
        : null,
  });
}
function Oi(e = 0) {
  let t = Di(e % 4),
    n = t.P,
    r = gi(t, _i),
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
        let t = e * 0.052 * ti,
          r = $r + bi * ti,
          i = 0;
        for (let e of n)
          Math.abs(e.x - t) < 0.03 &&
            Math.abs(e.y - r) < 0.03 &&
            (i = Math.min(i, e.z));
        return {
          x: e * 0.052,
          y: bi,
          z: (i + 0.005 - ei) / ti,
          rotZ: e * 0.28,
        };
      }),
    }
  );
}
