/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  H as e,
  R as t,
  Ut as n,
  fn as r,
  mn as i,
} from "./graphics-quality-BsjABS0s.js";
function a(e) {
  let t = e >>> 0;
  return () => {
    t = (t + 1831565813) >>> 0;
    let e = t;
    return (
      (e = Math.imul(e ^ (e >>> 15), e | 1)),
      (e ^= e + Math.imul(e ^ (e >>> 7), e | 61)),
      ((e ^ (e >>> 14)) >>> 0) / 4294967296
    );
  };
}
var o = (e) => [(e >> 16) & 255, (e >> 8) & 255, e & 255],
  s = (e, t = 1, n = 1) =>
    `rgba(${e.map((e) => Math.max(0, Math.min(255, Math.round(e * t)))).join(`,`)},${n})`,
  c = (e) => `rgb(${e | 0},${e | 0},${e | 0})`;
function l(e, t, n, r, i = 0.12) {
  for (let a = 0; a < t * t * r; a++) {
    let r = n() * i;
    ((e.fillStyle =
      n() < 0.5 ? `rgba(0,0,0,${r})` : `rgba(255,255,255,${r * 0.6})`),
      e.fillRect(n() * t, n() * t, 1 + n() * 2, 1 + n() * 2));
  }
}
function u(e, t, n, r, i) {
  for (let a = 0; a < r; a++) {
    let r = n() * t,
      a = n() * t,
      o = t * (0.04 + n() * 0.14),
      s = n() * i,
      c = n() < 0.7;
    for (let n of [-t, 0, t])
      for (let i of [-t, 0, t]) {
        let t = e.createRadialGradient(r + n, a + i, 0, r + n, a + i, o);
        (t.addColorStop(0, c ? `rgba(0,0,0,${s})` : `rgba(255,255,255,${s})`),
          t.addColorStop(1, `rgba(0,0,0,0)`),
          (e.fillStyle = t),
          e.fillRect(r + n - o, a + i - o, 2 * o, 2 * o));
      }
  }
}
var d = {
  brick(e, t, n, r) {
    let i = a(r.seed),
      d = o(r.base),
      f = t / 6,
      p = t / 16,
      m = Math.max(3, t / 150);
    ((e.fillStyle = n ? c(40) : s(o(r.mortar))),
      e.fillRect(0, 0, t, t),
      n || l(e, t, a(r.seed + 50), 0.03));
    for (let t = 0; t < 16; t++) {
      let a = ((t % 2) * f) / 2;
      for (let o = -1; o <= 6; o++) {
        let l = i(),
          u = i() < r.burnt,
          h = (1 + (l - 0.5) * r.vary) * (u ? 0.62 : 1);
        ((e.fillStyle = n ? c(185 + l * 55) : s(d, h)),
          e.fillRect(o * f + a + m / 2, t * p + m / 2, f - m, p - m));
      }
    }
    n || (l(e, t, a(r.seed + 99), 0.06, 0.16), u(e, t, a(r.seed + 7), 14, 0.1));
  },
  corrugated(e, t, n, r) {
    let i = o(r.base),
      d = a(r.seed);
    for (let r = 0; r < t; r++) {
      let a = Math.sin((r / t) * 12 * Math.PI * 2);
      ((e.fillStyle = n ? c(128 + a * 110) : s(i, 0.8 + 0.24 * a)),
        e.fillRect(r, 0, 1, t));
    }
    if (!n) {
      for (let n = 0; n < 50; n++) {
        let n = d() * t,
          r = 2 + d() * 12,
          i = d() * t,
          a = d() * t * 0.5,
          o = e.createLinearGradient(0, i, 0, i + a);
        (o.addColorStop(0, `rgba(125,62,24,${0.15 + d() * 0.3})`),
          o.addColorStop(1, `rgba(125,62,24,0)`),
          (e.fillStyle = o),
          e.fillRect(n, i, r, a));
      }
      (l(e, t, d, 0.02), u(e, t, d, 10, 0.1));
    }
  },
  stucco(e, t, n, r) {
    let i = a(r.seed),
      l = o(r.base);
    ((e.fillStyle = n ? c(128) : s(l)), e.fillRect(0, 0, t, t));
    for (let r = 0; r < t * t * 0.12; r++) {
      let r = i() > 0.5;
      ((e.fillStyle = n
        ? r
          ? `rgba(255,255,255,.25)`
          : `rgba(0,0,0,.25)`
        : r
          ? `rgba(255,255,255,.05)`
          : `rgba(0,0,0,.06)`),
        e.fillRect(i() * t, i() * t, 1 + i() * 2, 1 + i() * 2));
    }
    if ((n || u(e, t, i, r.blotch ?? 26, 0.07), r.lines)) {
      e.fillStyle = n ? c(60) : s(l, 0.8);
      for (let n = 0; n < r.lines; n++) e.fillRect(0, (n / r.lines) * t, t, 2);
    }
    r.joints &&
      ((e.fillStyle = n ? c(20) : s(l, 0.62)),
      e.fillRect(0, 0, t, 4),
      e.fillRect(0, 0, 4, t));
  },
  ashlar(e, t, n, r) {
    let i = a(r.seed),
      d = o(r.base),
      f = r.rows || 4,
      p = t / f,
      m = r.joint || 4;
    ((e.fillStyle = n ? c(20) : s(d, r.jointK || 0.72)),
      e.fillRect(0, 0, t, t));
    for (let a = 0; a < f; a++) {
      let o = -i() * t * 0.3;
      for (; o < t;) {
        let l = t * (0.24 + i() * 0.22),
          u = 0.9 + i() * 0.16,
          f = (t) => {
            ((e.fillStyle = n ? c(r.rustic ? 150 : 200) : s(d, u)),
              e.fillRect(t + m / 2, a * p + m / 2, l - m, p - m),
              r.rustic &&
                n &&
                ((e.fillStyle = c(225)),
                e.fillRect(
                  t + m * 1.6,
                  a * p + m * 1.6,
                  l - m * 3.2,
                  p - m * 3.2,
                )));
          };
        (f(o), o + l > t && f(o - t), (o += l));
      }
    }
    (l(e, t, a(r.seed + 11), n ? 0.02 : 0.05),
      n || u(e, t, a(r.seed + 12), 10, 0.08));
  },
  asphalt(e, t, n, r) {
    let i = a(r.seed),
      l = o(r.base);
    ((e.fillStyle = n ? c(128) : s(l)), e.fillRect(0, 0, t, t));
    for (let r = 0; r < t * t * 0.2; r++) {
      let r = i();
      ((e.fillStyle = n ? c(r * 255) : s(l, 0.7 + r * 0.7, 0.5)),
        e.fillRect(i() * t, i() * t, 1 + i() * 2, 1 + i() * 2));
    }
    n || u(e, t, i, 16, 0.1);
  },
};
function f(n, a, o, s, c = !0) {
  let l = document.createElement(`canvas`);
  ((l.width = n), (l.height = a), o(l.getContext(`2d`), n, a));
  let u = new t(l);
  return (
    (u.wrapS = u.wrapT = c ? r : e),
    (u.anisotropy = 8),
    (u.colorSpace = s ? i : ``),
    u
  );
}
var p = {
    asphalt: {
      pat: `asphalt`,
      p: { base: 4013632, seed: 20 },
      scale: 4,
      rough: 0.95,
      bump: 0.6,
    },
    pavers: {
      pat: `brick`,
      p: { base: 9341312, mortar: 6249300, vary: 0.16, burnt: 0.03, seed: 31 },
      scale: 3,
      rough: 0.9,
      bump: 0.8,
    },
    plazaStone: {
      pat: `ashlar`,
      p: { base: 11709600, rows: 3, joint: 5, seed: 32 },
      scale: 3.6,
      rough: 0.85,
      bump: 0.6,
    },
    setts: {
      pat: `ashlar`,
      p: { base: 7828075, rows: 7, joint: 6, jointK: 0.55, seed: 33 },
      scale: 1.6,
      rough: 0.9,
      bump: 1.2,
    },
    kerbStone: {
      pat: `ashlar`,
      p: { base: 10722964, rows: 1, joint: 5, seed: 34 },
      scale: 1.8,
      rough: 0.9,
      bump: 0.6,
    },
    lawn: {
      pat: `stucco`,
      p: { base: 7043642, seed: 36, blotch: 80 },
      scale: 3.2,
      rough: 1,
      bump: 0.5,
    },
    mulch: {
      pat: `stucco`,
      p: { base: 3811871, seed: 35, blotch: 60 },
      scale: 1.2,
      rough: 1,
      bump: 2,
    },
    grate: {
      pat: `corrugated`,
      p: { base: 2828840, seed: 38 },
      scale: 0.35,
      rough: 0.6,
      metal: 0.6,
      bump: 2,
    },
  },
  m = new Map();
function h(e) {
  if (m.has(e)) return m.get(e);
  let t = p[e],
    n = t.size || 512,
    r = d[t.pat],
    i = {
      map: f(n, n, (e) => r(e, n, !1, t.p), !0),
      bumpMap: t.bump ? f(n, n, (e) => r(e, n, !0, t.p), !1) : null,
    };
  return (m.set(e, i), i);
}
function g(e, t = null) {
  let r = p[e],
    i = h(e),
    a = new n({
      map: i.map,
      roughness: r.rough ?? 0.9,
      metalness: r.metal ?? 0,
    });
  return (
    i.bumpMap && ((a.bumpMap = i.bumpMap), (a.bumpScale = r.bump)),
    t && t(a, `ground-${e}-v1`),
    a
  );
}
function _(e, t) {
  let n = e.attributes.position,
    r = e.attributes.normal,
    i = e.attributes.uv;
  for (let e = 0; e < n.count; e++) {
    let a = Math.abs(r.getX(e)),
      [o, s] =
        Math.abs(r.getY(e)) > 0.5
          ? [n.getX(e), n.getZ(e)]
          : a > 0.5
            ? [n.getZ(e), n.getY(e)]
            : [n.getX(e), n.getY(e)];
    i.setXY(e, o / t, s / t);
  }
  return e;
}
export { _ as i, g as n, h as r, p as t };
//# sourceMappingURL=ground-textures-Bt7xe4qs.js.map
