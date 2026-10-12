// assets__greywater-nests-view-DL2K5mmv 01 — fillstyle
// Lines 1-272 of readable/assets__greywater-nests-view-DL2K5mmv.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  Ct as e,
  D as t,
  F as n,
  G as r,
  K as i,
  L as a,
  Mn as o,
  P as s,
  R as c,
  Rn as l,
  Rt as u,
  U as d,
  Ut as f,
  fn as p,
  lt as m,
  mn as h,
  pn as g,
  rt as _,
  v,
  wn as y,
  zn as b,
} from "./graphics-quality-BsjABS0s.js";
import { i as x, l as S } from "./map-collider-Bdq_bUeN.js";
import { o as C, p as w } from "./sim-D8F3HPJq.js";
import { n as ee, r as te } from "./static-bake-DEfkgcUk.js";
import { t as ne } from "./RoundedBoxGeometry-BodHbp3F.js";
import { n as re, t as T } from "./placement-build-C0quzNjY.js";
var E = typeof document < `u`;
function D(e) {
  let t = e >>> 0;
  return () => (t = (Math.imul(t, 1664525) + 1013904223) >>> 0) / 4294967296;
}
var O = new Map();
function k(e, t = 0.85, n = 0, r = {}) {
  let i = `${e}|${t}|${n}|${JSON.stringify(r)}`;
  return (
    O.has(i) || O.set(i, new f({ color: e, roughness: t, metalness: n, ...r })),
    O.get(i)
  );
}
function A(e, t = 2) {
  let n = `glow|${e}|${t}`;
  if (!O.has(n)) {
    let r = new f({
      color: e,
      roughness: 0.4,
      emissive: e,
      emissiveIntensity: 0,
    });
    ((r.userData.nightGlow = t), O.set(n, r));
  }
  return O.get(n);
}
var j = (e = 6125443, t = 0.5) =>
    k(e, 0.08, 0.2, { transparent: !0, opacity: t }),
  M = new Map();
function ie(e, t, n, r, i = !0) {
  if (!E) return null;
  if (!M.has(e)) {
    let a = document.createElement(`canvas`);
    ((a.width = t), (a.height = n), r(a.getContext(`2d`), t, n));
    let o = new c(a);
    ((o.colorSpace = h),
      (o.anisotropy = 8),
      i && (o.wrapS = o.wrapT = p),
      M.set(e, o));
  }
  return M.get(e);
}
function N(
  e,
  t,
  {
    w: n = 256,
    h: r = 256,
    color: i = 16777215,
    rough: a = 0.85,
    metal: o = 0,
    ...s
  } = {},
) {
  let c = `tex|${e}|${i}|${a}|${o}|${JSON.stringify(s)}`;
  return (
    O.has(c) ||
      O.set(
        c,
        new f({
          map: ie(e, n, r, t),
          color: i,
          roughness: a,
          metalness: o,
          ...s,
        }),
      ),
    O.get(c)
  );
}
function P(e, t = 2, n = 0, r = 0, i = 0) {
  let a = e.attributes.position,
    o = e.attributes.normal,
    s = e.attributes.uv;
  for (let e = 0; e < s.count; e++) {
    let c = Math.abs(o.getX(e)),
      l = Math.abs(o.getY(e)),
      u = a.getX(e) + n,
      d = a.getY(e) + r,
      f = a.getZ(e) + i;
    s.setXY(e, (c > 0.5 ? f : u) / t, (l > 0.5 ? f : d) / t);
  }
  return ((s.needsUpdate = !0), e);
}
var F = (e) => `#${e.toString(16).padStart(6, `0`)}`;
function I(
  e,
  { rough: t = 0.9, metal: n = 0, amount: r = 0.12, seed: i = 3 } = {},
) {
  return N(
    `noise${e}|${r}|${i}`,
    (t, n, a) => {
      let o = D(i);
      ((t.fillStyle = F(e)), t.fillRect(0, 0, n, a));
      for (let e = 0; e < n * a * 0.25; e++)
        ((t.fillStyle = `rgba(${o() < 0.5 ? `0,0,0` : `255,255,255`},${o() * r})`),
          t.fillRect(o() * n, o() * a, 1 + o() * 2, 1 + o() * 2));
      for (let e = 0; e < 14; e++)
        ((t.fillStyle = `rgba(0,0,0,${o() * r * 0.6})`),
          t.beginPath(),
          t.ellipse(
            o() * n,
            o() * a,
            10 + o() * 40,
            6 + o() * 26,
            o() * 3,
            0,
            7,
          ),
          t.fill());
    },
    { rough: t, metal: n },
  );
}
function L(e = 8019778, { rough: t = 0.9, boards: n = 6, seed: r = 5 } = {}) {
  return N(
    `plank${e}|${n}|${r}`,
    (t, i, a) => {
      let o = D(r),
        s = a / n;
      ((t.fillStyle = F(e)), t.fillRect(0, 0, i, a));
      for (let e = 0; e < n; e++) {
        ((t.fillStyle = `rgba(${o() < 0.5 ? `0,0,0` : `255,240,220`},${0.04 + o() * 0.1})`),
          t.fillRect(0, e * s, i, s));
        for (let n = 0; n < 40; n++) {
          ((t.strokeStyle = `rgba(30,20,10,${0.05 + o() * 0.1})`),
            t.beginPath());
          let n = e * s + o() * s;
          (t.moveTo(0, n),
            t.bezierCurveTo(
              i * 0.3,
              n + o() * 4 - 2,
              i * 0.6,
              n + o() * 4 - 2,
              i,
              n,
            ),
            t.stroke());
        }
        ((t.fillStyle = `rgba(20,12,6,0.55)`),
          t.fillRect(0, e * s, i, 2),
          (t.fillStyle = `rgba(20,12,6,0.6)`),
          t.fillRect(o() * i, e * s, 2, s));
      }
    },
    { rough: t },
  );
}
function R(
  e = 10130826,
  {
    rows: t = 8,
    cols: n = 4,
    joint: r = 7170659,
    rough: i = 0.92,
    seed: a = 11,
  } = {},
) {
  return N(
    `block${e}|${t}|${n}|${r}|${a}`,
    (i, o, s) => {
      let c = D(a),
        l = s / t,
        u = o / n;
      ((i.fillStyle = F(r)), i.fillRect(0, 0, o, s));
      for (let r = 0; r < t; r++)
        for (let t = -1; t < n; t++) {
          let n = ((r % 2) * u) / 2,
            a = 0.85 + c() * 0.3;
          ((i.fillStyle = `#${new d(e).multiplyScalar(a).getHexString()}`),
            i.fillRect(t * u + n + 1.5, r * l + 1.5, u - 3, l - 3));
        }
      for (let e = 0; e < o * s * 0.1; e++)
        ((i.fillStyle = `rgba(0,0,0,${c() * 0.08})`),
          i.fillRect(c() * o, c() * s, 1, 1));
    },
    { rough: i },
  );
}
function z(e = [4938291, 7039550, 3817513, 8088138], t = `woodland`) {
  return N(
    `net|${t}`,
    (t, n, r) => {
      let i = D(17);
      (t.clearRect(0, 0, n, r),
        (t.strokeStyle = `rgba(40,40,30,0.9)`),
        (t.lineWidth = 1.2));
      for (let e = 0; e <= n; e += 16)
        (t.beginPath(),
          t.moveTo(e, 0),
          t.lineTo(e, r),
          t.stroke(),
          t.beginPath(),
          t.moveTo(0, e),
          t.lineTo(n, e),
          t.stroke());
      for (let a = 0; a < 520; a++) {
        ((t.fillStyle = F(e[Math.floor(i() * e.length)])), t.beginPath());
        let a = i() * n,
          o = i() * r,
          s = 5 + i() * 12;
        t.moveTo(a, o);
        for (let e = 0; e < 5; e++)
          t.lineTo(a + (i() - 0.5) * s * 2, o + (i() - 0.5) * s * 2);
        t.fill();
      }
    },
    { w: 256, h: 256, rough: 0.95, side: 2, alphaTest: 0.5 },
  );
}
var B = {
    woodland: () => z([4938291, 7039550, 3817513, 8088138], `woodland`),
    desert: () => z([12033646, 10256983, 13218954, 8219208], `desert`),
    jungle: () => z([3099172, 4549420, 2373147, 5925680], `jungle`),
    shade: () =>
      N(
        `shade`,
        (e, t, n) => {
          e.fillStyle = `rgba(30,34,30,0.9)`;
          for (let r = 0; r < n; r += 4)
            for (let n = ((r / 4) % 2) * 2; n < t; n += 4)
              e.fillRect(n, r, 3, 3);
        },
        { w: 64, h: 64, color: 10133652, rough: 0.95, side: 2, alphaTest: 0.4 },
      ),
  },
  V = (e) => k(e, 0.95, 0, { side: 2 });
function ae(e, t, r, i) {
  let a = new n(e, t, r, i ? 3 : 1, 1, i ? 1 : 3),
    o = a.attributes.position,
    s = (i ? e : r) / 2;
  for (let e = 0; e < o.count; e++) {
    let t = i ? o.getX(e) : o.getZ(e),
      n = Math.abs(t) > s - 1e-4 ? 0.62 : 1;
    (o.setY(e, o.getY(e) * (Math.abs(t) > s - 1e-4 ? 0.7 : 1)),
      i ? o.setZ(e, o.getZ(e) * n) : o.setX(e, o.getX(e) * n));
  }
  return (a.computeVertexNormals(), a);
}
var oe = (e) => {
  let t = Math.round(e / (Math.PI / 2));
  return Math.abs(e - (t * Math.PI) / 2) < 0.001 ? ((t % 4) + 4) % 4 : -1;
};
