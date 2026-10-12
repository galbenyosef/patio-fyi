// assets__meridian-sim-Cefyo3f2 01 — math
// Lines 1-343 of readable/assets__meridian-sim-Cefyo3f2.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
var e = Object.freeze({ ext: 8, int: 2 }),
  t = 0.06,
  n = (e) => {
    let t = ((e + 1) * 2654435761) | 0;
    return (
      (t ^= t >>> 15),
      (t = Math.imul(t, 2246822519)),
      (t ^= t >>> 13),
      (t = Math.imul(t, 3266489917)),
      (t ^= t >>> 16),
      (t >>> 0) / 4294967296
    );
  },
  r = Math.PI / 180,
  i = (e) => (e <= 0 ? 0 : e >= 1 ? 1 : e * e * (3 - 2 * e)),
  a = (e, t, n) => e + (t - e) * n;
function o(e) {
  if (e.epoch == null || e.crash == null) return null;
  let t = e.crane,
    r = e.crash + Math.round(t.warn * 60),
    i = t.swings[0],
    a = i.in + 0.5 + i.out + 4;
  return [
    r,
    r +
      Math.round(
        (a +
          t.gap[0] +
          (t.gap[1] - t.gap[0]) * n((e.crash % 100003) + 17) +
          t.warn) *
          60,
      ),
  ];
}
function s(e, t) {
  let n = e.crane,
    s = { phase: `idle`, a: n.rest, wild: 0, k: -1, t: 0, hitting: !1 },
    c = o(e);
  if (c) {
    let e = Math.round(n.warn * 60);
    for (let r = n.swings.length - 1; r >= 0; r--) {
      let o = n.swings[r],
        l = t - c[r];
      if (l < -e) continue;
      if (((s.k = r), (s.t = l / 60), l < 0)) {
        let t = (l + e) / e;
        ((s.phase = `warn`), (s.wild = t), (s.a = a(n.rest, o.from, i(t))));
        break;
      }
      let u = l / 60;
      if (u < o.tA) {
        let e = u / o.tA;
        ((s.phase = `swing`),
          (s.wild = 0.6 + 0.4 * e),
          (s.a = a(o.from, o.enter, e * e)));
        break;
      }
      if (u < o.in) {
        let e = (u - o.tA) / o.tB;
        ((s.phase = `swing`),
          (s.wild = 1),
          (s.hitting = !0),
          (s.a = a(o.enter, o.to, 1 - (1 - e) ** 1.6)));
        break;
      }
      let d = u - o.in,
        f = d < 0.5 ? Math.sin((d / 0.5) * Math.PI) * 2.5 : 0;
      if (o.jam) {
        ((s.phase = `jammed`),
          (s.wild = Math.max(0, 1 - d / 3)),
          (s.a = o.to + f));
        break;
      }
      if (d < 0.5) {
        ((s.phase = `swing`), (s.wild = 1), (s.a = o.to + f));
        break;
      }
      let p = d - 0.5;
      if (p < o.out) {
        ((s.phase = `swing`),
          (s.wild = 1 - (0.5 * p) / o.out),
          (s.a = a(o.to, o.back, i(p / o.out))));
        break;
      }
      let m = p - o.out;
      ((s.phase = m < 4 ? `swing` : `idle`),
        (s.wild = Math.max(0, 0.5 - m / 8)),
        (s.a = a(o.back, n.rest, i(m / 4))));
      break;
    }
  }
  return (
    (s.dir = [-Math.cos(s.a * r), Math.sin(s.a * r)]),
    (s.yaw = Math.atan2(s.dir[1], s.dir[0])),
    s
  );
}
function c(e, t) {
  let n = e.crane,
    [r, i] = n.mast;
  return {
    ax: r,
    az: i,
    bx: r + t.dir[0] * n.jib,
    bz: i + t.dir[1] * n.jib,
    y: (n.armY0 + n.armY1) / 2,
    r: n.halfW,
  };
}
var l = (e, t, n) => {
  let r = n.bx - n.ax,
    i = n.bz - n.az,
    a = r * r + i * i || 1,
    o = Math.max(0, Math.min(1, ((e - n.ax) * r + (t - n.az) * i) / a)),
    s = e - (n.ax + r * o),
    c = t - (n.az + i * o);
  return s * s + c * c;
};
function u(e, t) {
  let n = e.r,
    r = [t[0] - n, t[1] - n],
    i = [t[2] + n, t[3] + n],
    a = [e.ax, e.az],
    o = [e.bx - e.ax, e.bz - e.az],
    s = 0,
    c = 1;
  for (let e = 0; e < 2; e++) {
    if (Math.abs(o[e]) < 1e-9) {
      if (a[e] < r[e] || a[e] > i[e]) return !1;
      continue;
    }
    let t = (r[e] - a[e]) / o[e],
      n = (i[e] - a[e]) / o[e];
    if (t > n) {
      let e = t;
      ((t = n), (n = e));
    }
    if (((s = Math.max(s, t)), (c = Math.min(c, n)), s > c)) return !1;
  }
  return !0;
}
var d = new WeakMap();
function f(e) {
  let t = d.get(e);
  if (t && t.crash === e.crash) return t.map;
  let n = e.crane,
    r = o(e),
    i = new Map(),
    a = [...(e.sweepables ?? [])];
  for (let t of e.panes)
    if (t.ext) {
      let e = Math.min(t.a[0], t.b[0]),
        n = Math.max(t.a[0], t.b[0]),
        r = Math.min(t.a[1], t.b[1]),
        i = Math.max(t.a[1], t.b[1]);
      a.push({ id: t.id, box: [e - 0.03, r - 0.03, n + 0.03, i + 0.03] });
    }
  for (let [t, o] of n.swings.entries()) {
    let n = r[t] + Math.round(o.tA * 0.8 * 60),
      l = r[t] + Math.round((o.in + 0.5) * 60);
    for (let t = n; t <= l; t++) {
      let n = c(e, s(e, t));
      for (let e of a) !i.has(e.id) && u(n, e.box) && i.set(e.id, t);
    }
  }
  return (d.set(e, { crash: e.crash, map: i }), i);
}
function p(e) {
  let t = o(e);
  if (!t) return 1 / 0;
  let n = e.crane,
    r = n.swings.findIndex((e) => e.jam);
  return r < 0 ? 1 / 0 : t[r] + Math.round(n.swings[r].in * 60);
}
function m(e) {
  let t = p(e);
  return t === 1 / 0 || !e.power || e.dark == null
    ? 1 / 0
    : Math.max(t, e.dark) + Math.round(e.power.after * 60);
}
var h = [
  [0.14, 0.32],
  [0.45, 0.58],
  [0.78, 0.84],
];
function g(e, t) {
  let r = m(e);
  if (t < r) return { mains: 1, emergency: 0, out: !1, t: 0 };
  let i = e.power,
    a = (t - r) / 60;
  return {
    mains: +!!h.some(([e, t]) => a >= e * i.stutter && a < t * i.stutter),
    emergency:
      a < i.emergency
        ? 0
        : Math.min(1, (a - i.emergency) / 0.35) *
          (a - i.emergency < 0.5 && n(Math.floor(a * 20) + 7) < 0.4 ? 0.3 : 1),
    out: !0,
    t: a,
  };
}
function _(e, t, n) {
  return o(e) ? (f(e).get(t) ?? 1 / 0) : 1 / 0;
}
function v(e, t, n) {
  return _(e, t.id, n) <= n;
}
function y(e, t, n) {
  return !!t.ext && _(e, t.id, n) <= n;
}
function b(e, t, n) {
  return y(e, t, n) || !!T(e, t)?.open;
}
var x = !0,
  S = (e) => {
    let t = 2166136261;
    for (let n = 0; n < e.length; n++)
      ((t ^= e.charCodeAt(n)), (t = Math.imul(t, 16777619)));
    return t >>> 0;
  },
  C = new WeakMap();
function w(e) {
  let t = C.get(e);
  if (t) return t;
  let r = Math.hypot(e.b[0] - e.a[0], e.b[1] - e.a[1]),
    i = e.y1 - e.y0,
    a = S(e.id),
    o = (e) => n((a % 100003) + e * 7919),
    s = Math.min(0.14, r / 6, i / 6),
    c = (e, t) => {
      let n = [0];
      for (let r = 0; r <= t; r++) n.push(s + ((e - 2 * s) * r) / t);
      return (n.push(e), n);
    },
    l = Math.max(2, Math.round((r - 2 * s) / 0.3)),
    u = Math.max(2, Math.round((i - 2 * s) / 0.3)),
    d = c(r, l),
    f = c(i, u),
    p = (r - 2 * s) / l,
    m = (i - 2 * s) / u,
    h = d.length,
    g = f.length,
    _ = new Float32Array(h * g * 2),
    v = (e, t) => t * h + e;
  for (let e = 0; e < g; e++)
    for (let t = 0; t < h; t++) {
      let n = d[t],
        a = f[e],
        s = v(t, e),
        c = t === 0 || e === 0 || t === h - 1 || e === g - 1,
        l = !c && (t === 1 || e === 1 || t === h - 2 || e === g - 2);
      if (c)
        t === 0 || t === h - 1
          ? e > 0 && e < g - 1 && (a += (o(s * 3) - 0.5) * m * 0.5)
          : t > 0 && t < h - 1 && (n += (o(s * 3 + 1) - 0.5) * p * 0.5);
      else if (l) {
        let c = 0.03 + o(s * 5) * 0.19;
        (t === 1
          ? (n = c)
          : t === h - 2
            ? (n = r - c)
            : (n += (o(s * 5 + 1) - 0.5) * p * 0.6),
          e === 1
            ? (a = c)
            : e === g - 2
              ? (a = i - c)
              : (a += (o(s * 5 + 2) - 0.5) * m * 0.6));
      } else
        ((n += (o(s * 7) - 0.5) * p * 0.7),
          (a += (o(s * 7 + 1) - 0.5) * m * 0.7));
      ((_[s * 2] = n), (_[s * 2 + 1] = a));
    }
  let y = [],
    b = [],
    x = (e) => {
      let t = e % h,
        n = (e / h) | 0;
      return t === 0 || n === 0 || t === h - 1 || n === g - 1;
    };
  for (let e = 0; e < g - 1; e++)
    for (let t = 0; t < h - 1; t++) {
      let n = v(t, e),
        r = v(t + 1, e),
        i = v(t + 1, e + 1),
        a = v(t, e + 1),
        s =
          o(n * 11 + 2) < 0.5
            ? [
                [n, r, i],
                [n, i, a],
              ]
            : [
                [n, r, a],
                [r, i, a],
              ];
      for (let e of s) (y.push(...e), b.push(+(e.filter(x).length >= 2)));
    }
  let w = b.length,
    T = new Float32Array(w * 2),
    E = new Int32Array(w * 3).fill(-1),
    D = new Map();
  for (let e = 0; e < w; e++) {
    let t = 0,
      n = 0;
    for (let r = 0; r < 3; r++) {
      let i = y[e * 3 + r],
        a = y[e * 3 + ((r + 1) % 3)];
      ((t += _[i * 2]), (n += _[i * 2 + 1]));
      let o = i < a ? i * 65536 + a : a * 65536 + i,
        s = D.get(o);
      s == null
        ? D.set(o, e * 3 + r)
        : ((E[e * 3 + r] = (s / 3) | 0), (E[s] = e));
    }
    ((T[e * 2] = t / 3), (T[e * 2 + 1] = n / 3));
  }
  return (
    (t = {
      w: r,
      h: i,
      verts: _,
      tris: Int32Array.from(y),
      tooth: Uint8Array.from(b),
      cen: T,
      nb: E,
      nt: w,
      seed: a,
    }),
    C.set(e, t),
    t
  );
}
function T(e, t) {
  let n = e.breaks?.get(t.id);
  if (!n || !n.length) return null;
  let r = (e._shards ??= new Map()),
    i = r.get(t.id);
  if (i && i.n === n.length && i.br === n) return i;
  let a = w(t),
    o = new Uint8Array(a.nt).fill(0);
  return ((i = { n: n.length, br: n, alive: o, open: !0 }), r.set(t.id, i), i);
}
