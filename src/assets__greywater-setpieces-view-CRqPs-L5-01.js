// assets__greywater-setpieces-view-CRqPs-L5 01 — math
// Lines 1-221 of readable/assets__greywater-setpieces-view-CRqPs-L5.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  Ct as e,
  D as t,
  F as n,
  G as r,
  I as i,
  K as a,
  L as o,
  Mn as s,
  Pt as c,
  Qt as l,
  Rn as u,
  Rt as d,
  U as f,
  Ut as p,
  V as m,
  Yt as h,
  en as g,
  fn as _,
  ft as v,
  lt as y,
  pn as b,
  tt as x,
  vn as S,
  wn as C,
  yn as w,
  zt as T,
} from "./graphics-quality-BsjABS0s.js";
import { c as E, i as D, l as O } from "./map-collider-Bdq_bUeN.js";
import { n as k, r as A } from "./static-bake-DEfkgcUk.js";
import { t as j } from "./setpiece-ladders-BjER_Jg5.js";
import { n as M, t as N } from "./placement-build-C0quzNjY.js";
import {
  a as P,
  c as F,
  d as I,
  f as L,
  h as R,
  i as z,
  l as B,
  m as V,
  n as H,
  o as ee,
  p as te,
  r as U,
  s as W,
  t as G,
  u as K,
} from "./kit-B7uNFdQ6.js";
import { r as ne } from "./panel-array-Dv4Qe9B3.js";
function re(e, t, r, i, a, o) {
  let s = a[0] - i[0],
    c = a[1] - i[1],
    l = a[2] - i[2],
    u = Math.hypot(s, l),
    f = new d(new n(t, r, Math.hypot(u, c)), o);
  return (
    f.position.set((i[0] + a[0]) / 2, (i[1] + a[1]) / 2, (i[2] + a[2]) / 2),
    (f.rotation.order = `YXZ`),
    f.rotation.set(-Math.atan2(c, u), Math.atan2(s, l), 0),
    (f.castShadow = f.receiveShadow = !0),
    e.add(f),
    f
  );
}
function ie(e, t, n, r, i, { waist: a = null, stringer: o = null } = {}) {
  let s = r[0] - n[0],
    c = r[1] - n[1],
    l = r[2] - n[2],
    u = Math.hypot(s, l),
    d = Math.max(1, Math.round(c / 0.18)),
    f = Math.atan2(s, l);
  for (let r = 0; r < d; r++) {
    let a = (r + 0.5) / d;
    U(
      e,
      t,
      0.14,
      u / d + 0.03,
      i,
      n[0] + s * a,
      n[1] + (c * (r + 1)) / d - 0.14,
      n[2] + l * a,
      f,
    );
  }
  if (
    (a &&
      re(e, t, 0.22, [n[0], n[1] - 0.05, n[2]], [r[0], r[1] - 0.05, r[2]], a),
    o)
  )
    for (let i of [-1, 1]) {
      let a = Math.cos(f) * i * (t / 2 + 0.03),
        s = -Math.sin(f) * i * (t / 2 + 0.03);
      re(
        e,
        0.06,
        0.26,
        [n[0] + a, n[1] - 0.02, n[2] + s],
        [r[0] + a, r[1] - 0.02, r[2] + s],
        o,
      );
    }
}
function q(
  e,
  t,
  n,
  r,
  { h: i = 1.05, post: a = 1.8, toe: o = null, r: s = 0.025 } = {},
) {
  let c = n[0] - t[0],
    l = n[1] - t[1],
    u = n[2] - t[2],
    d = Math.max(1, Math.ceil(Math.hypot(c, u) / a));
  for (let n = 0; n <= d; n++) {
    let a = n / d;
    U(e, s * 2, i, s * 2, r, t[0] + c * a, t[1] + l * a, t[2] + u * a);
  }
  (H(e, [t[0], t[1] + i, t[2]], [n[0], n[1] + i, n[2]], s * 2, s * 2, r),
    H(
      e,
      [t[0], t[1] + i * 0.52, t[2]],
      [n[0], n[1] + i * 0.52, n[2]],
      s * 1.6,
      s * 1.6,
      r,
    ),
    o &&
      re(
        e,
        0.03,
        0.15,
        [t[0], t[1] + 0.075, t[2]],
        [n[0], n[1] + 0.075, n[2]],
        o,
      ));
}
function ae(e, t, n, r, i, a, o, s, c, l = []) {
  let u = (n, r, a, o) => {
      r - n < 0.01 ||
        o - a < 0.01 ||
        (t === `x`
          ? U(e, r - n, o - a, s, c, (n + r) / 2, a, i)
          : U(e, s, o - a, r - n, c, i, a, (n + r) / 2));
    },
    d = n;
  for (let [e, t, n, r] of [...l].sort((e, t) => e[0] - t[0]))
    (u(d, e, a, o), u(e, t, a, n), u(e, t, r, o), (d = t));
  u(d, r, a, o);
}
function oe(e, t, n, r, i, a, o, s, c) {
  let l = (t, n, r, i) => {
    n - t > 0.01 &&
      i - r > 0.01 &&
      U(e, n - t, s, i - r, c, (t + n) / 2, o - s, (r + i) / 2);
  };
  (l(t, a[0], r, i),
    l(a[1], n, r, i),
    l(a[0], a[1], r, a[2]),
    l(a[0], a[1], a[3], i));
}
function se(e, t, n, r, i, a, o, s = 0.5) {
  let c = new y();
  (c.position.set(t, 0, n), (c.rotation.y = a), e.add(c));
  for (let e of [-1, 1]) U(c, 0.06, i - r, 0.06, o, (e * s) / 2, r, 0);
  for (let e = r + 0.3; e < i; e += 0.3)
    H(c, [-s / 2, e, 0], [s / 2, e, 0], 0.035, 0.035, o);
  return c;
}
function ce(
  e,
  {
    w: t = 1024,
    h: n = 160,
    fg: r = `#222`,
    bg: i = null,
    font: a = `800 120px Arial, sans-serif`,
    spacing: o = 0.1,
    pad: s = 0.03,
  } = {},
) {
  return z(t, n, (c) => {
    (i && ((c.fillStyle = i), c.fillRect(0, 0, t, n)),
      (c.font = a),
      `letterSpacing` in c && (c.letterSpacing = `${o}em`));
    let l = c.measureText(e).width,
      u = Math.min(1, (t * (1 - 2 * s)) / l);
    ((c.fillStyle = r),
      (c.textAlign = `center`),
      (c.textBaseline = `middle`),
      c.save(),
      c.translate(t / 2, n / 2 + 4),
      c.scale(u, 1),
      c.fillText(e, 0, 0),
      c.restore());
  });
}
var le = null;
function ue() {
  if (le) return le;
  let e = z(64, 64, (e) => {
    (e.clearRect(0, 0, 64, 64),
      (e.strokeStyle = `rgba(70,74,78,1)`),
      (e.lineWidth = 3),
      e.strokeRect(0, 0, 64, 64));
  });
  return (
    (e.wrapS = e.wrapT = _),
    e.repeat.set(10, 12),
    (le = new p({
      map: e,
      alphaTest: 0.4,
      side: 2,
      metalness: 0.5,
      roughness: 0.5,
    })),
    le
  );
}
