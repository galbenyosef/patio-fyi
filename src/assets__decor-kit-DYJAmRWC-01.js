// assets__decor-kit-DYJAmRWC 01 — fillstyle
// Lines 1-340 of readable/assets__decor-kit-DYJAmRWC.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  Bt as e,
  Dn as t,
  Fn as n,
  Gt as r,
  H as i,
  Hn as a,
  In as o,
  Sn as s,
  V as c,
  Vn as l,
  W as u,
  cn as d,
  dt as f,
  hn as p,
  nn as m,
  nt as h,
  q as g,
  rt as _,
  v,
  xn as y,
  zt as ee,
} from "./graphics-quality-CrL3qbU3.js";
import {
  A as b,
  C as te,
  D as x,
  E as S,
  O as C,
  S as ne,
  T as w,
  _ as T,
  a as E,
  b as D,
  c as O,
  d as k,
  f as A,
  g as re,
  h as ie,
  i as j,
  j as M,
  k as N,
  l as P,
  m as F,
  n as I,
  o as ae,
  p as L,
  r as R,
  s as z,
  t as oe,
  u as B,
  v as V,
  w as H,
  x as U,
  y as W,
} from "./decor-util--zabBsiN.js";
var se = [
    [`#f2e8d5`, `#e07a5f`, `#3d405b`, `#81b29a`, `#f2cc8f`],
    [`#f4f1ea`, `#264653`, `#2a9d8f`, `#e9c46a`, `#e76f51`],
    [`#efe9e1`, `#1d3557`, `#457b9d`, `#a8dadc`, `#e63946`],
    [`#f6f0e6`, `#6b705c`, `#a5a58d`, `#b7b7a4`, `#cb997e`],
    [`#faf7f2`, `#22223b`, `#4a4e69`, `#9a8c98`, `#c9ada7`],
    [`#fbf5ef`, `#d4a373`, `#ccd5ae`, `#606c38`, `#283618`],
    [`#f8f4ec`, `#bc6c25`, `#dda15e`, `#283618`, `#fefae0`],
    [`#eef0f2`, `#0b132b`, `#1c2541`, `#3a506b`, `#5bc0be`],
    [`#fff8f0`, `#9e2a2b`, `#540b0e`, `#e09f3e`, `#335c67`],
    [`#f1ede4`, `#2b2d42`, `#8d99ae`, `#ef233c`, `#edf2f4`],
  ],
  ce = [
    `landscape`,
    `abstract`,
    `geometric`,
    `botanical`,
    `colourfield`,
    `seascape`,
    `lines`,
    `city`,
    `arches`,
    `dots`,
  ];
function le(e, t, n, r, i = r.pick(ce)) {
  let a = r.pick(se),
    o = a[0],
    s = a.slice(1);
  ((e.fillStyle = o), e.fillRect(0, 0, t, n));
  let c = () => r.pick(s);
  if (i === `landscape`) {
    let i = e.createLinearGradient(0, 0, 0, n * 0.6);
    (i.addColorStop(0, s[2]),
      i.addColorStop(1, o),
      (e.fillStyle = i),
      e.fillRect(0, 0, t, n),
      (e.fillStyle = s[3]),
      e.beginPath(),
      e.arc(
        t * r.range(0.2, 0.8),
        n * r.range(0.18, 0.4),
        Math.min(t, n) * r.range(0.07, 0.13),
        0,
        7,
      ),
      e.fill());
    let a = r.int(3, 5);
    for (let i = 0; i < a; i++) {
      let o = n * (0.45 + i * 0.13),
        c = n * r.range(0.04, 0.14);
      ((e.fillStyle = W(te(s[1], s[0], i / (a - 1 || 1)))),
        e.beginPath(),
        e.moveTo(0, n));
      let l = r.range(1.5, 4),
        u = r.range(4, 9),
        d = r() * 6,
        f = r() * 6;
      for (let n = 0; n <= t; n += 4)
        e.lineTo(
          n,
          o -
            c *
              (0.6 * Math.sin((n / t) * l + d) +
                0.4 * Math.sin((n / t) * u + f)),
        );
      (e.lineTo(t, n), e.fill());
    }
  } else if (i === `seascape`) {
    let i = e.createLinearGradient(0, 0, 0, n * 0.55);
    (i.addColorStop(0, s[1]),
      i.addColorStop(1, s[3]),
      (e.fillStyle = i),
      e.fillRect(0, 0, t, n * 0.56),
      (e.fillStyle = s[2]),
      e.fillRect(0, n * 0.55, t, n),
      (e.globalAlpha = 0.5),
      (e.fillStyle = o));
    for (let i = 0; i < 60; i++)
      e.fillRect(r() * t, n * 0.56 + r() * n * 0.44, r.range(10, 50), 2);
    if (
      ((e.globalAlpha = 1),
      (e.fillStyle = o),
      e.beginPath(),
      e.arc(t * r.range(0.3, 0.7), n * 0.55, t * 0.08, Math.PI, 0),
      e.fill(),
      r.chance(0.6))
    ) {
      let i = t * r.range(0.2, 0.8),
        a = n * 0.55;
      ((e.fillStyle = s[0]),
        e.beginPath(),
        e.moveTo(i, a - 4),
        e.lineTo(i + 26, a - 60),
        e.lineTo(i + 30, a - 4),
        e.fill(),
        e.fillRect(i - 14, a - 6, 54, 6));
    }
  } else if (i === `abstract`) {
    for (let i = 0; i < r.int(4, 9); i++) {
      ((e.fillStyle = c()), (e.globalAlpha = r.range(0.6, 1)), e.beginPath());
      let i = r() * t,
        a = r() * n,
        o = Math.min(t, n) * r.range(0.1, 0.35);
      for (let t = 0; t <= 8; t++) {
        let n = (t / 8) * Math.PI * 2,
          s = o * r.range(0.7, 1.2);
        e[t ? `lineTo` : `moveTo`](i + Math.cos(n) * s, a + Math.sin(n) * s);
      }
      e.fill();
    }
    ((e.globalAlpha = 1),
      (e.strokeStyle = s[0]),
      (e.lineWidth = r.range(3, 8)),
      e.beginPath(),
      e.moveTo(r() * t, r() * n));
    for (let i = 0; i < 3; i++)
      e.bezierCurveTo(r() * t, r() * n, r() * t, r() * n, r() * t, r() * n);
    e.stroke();
  } else if (i === `geometric`) {
    let i = r.int(3, 6),
      a = t / i,
      o = n / Math.max(2, Math.round((i * n) / t));
    for (let i = 0; i < t; i += a)
      for (let t = 0; t < n; t += o) {
        ((e.fillStyle = c()), e.fillRect(i, t, a, o), (e.fillStyle = c()));
        let n = r.int(0, 3);
        n === 0
          ? (e.beginPath(),
            e.arc(i + a / 2, t + o / 2, Math.min(a, o) * 0.4, 0, 7),
            e.fill())
          : n === 1
            ? (e.beginPath(),
              e.moveTo(i, t),
              e.lineTo(i + a, t),
              e.lineTo(i, t + o),
              e.fill())
            : n === 2 &&
              (e.beginPath(),
              e.arc(i, t + o, Math.min(a, o), -Math.PI / 2, 0),
              e.lineTo(i, t + o),
              e.fill());
      }
  } else if (i === `botanical`) {
    ((e.strokeStyle = s[3] ?? s[0]), (e.fillStyle = r.pick([s[0], s[2]])));
    let i = r.int(1, 3);
    for (let a = 0; a < i; a++) {
      let o = t * (0.3 + 0.4 * (i > 1 ? a / (i - 1) : 0.5)),
        s = n * r.range(0.6, 0.8),
        c = r.range(-0.2, 0.2) * t;
      ((e.lineWidth = 4),
        e.beginPath(),
        e.moveTo(o, n * 0.92),
        e.quadraticCurveTo(o + c, n * 0.92 - s / 2, o + c * 0.5, n * 0.92 - s),
        e.stroke());
      for (let i = 0; i < 9; i++) {
        let a = 0.15 + i * 0.09,
          l = o + c * (2 * a * (1 - a)) + c * 0.5 * a * a,
          u = n * 0.92 - s * a,
          d = i % 2 ? 1 : -1,
          f = t * r.range(0.07, 0.13) * (1.2 - a * 0.6);
        (e.save(),
          e.translate(l, u),
          e.rotate(d * r.range(0.6, 1.1) - 0.2),
          e.beginPath(),
          e.ellipse(0, -f, f * 0.35, f, 0, 0, 7),
          e.fill(),
          e.restore());
      }
    }
  } else if (i === `colourfield`) {
    let i = r.int(2, 3),
      a = n * 0.08;
    for (let o = 0; o < i; o++) {
      let o = ((n * 0.84 - (i - 1) * n * 0.04) / i) * r.range(0.8, 1.2);
      ((e.fillStyle = c()),
        (e.globalAlpha = 0.92),
        e.fillRect(t * 0.1, a, t * 0.8, Math.min(o, n * 0.92 - a)),
        (a += o + n * 0.04));
    }
    e.globalAlpha = 1;
  } else if (i === `lines`) {
    ((e.strokeStyle = s[0]), (e.lineWidth = 3));
    let i = r.int(12, 30),
      a = r.range(1, 4),
      o = r.range(0.02, 0.08);
    for (let r = 0; r < i; r++) {
      e.beginPath();
      let s = n * (0.1 + (0.8 * r) / i);
      for (let i = 0; i <= t; i += 6)
        e.lineTo(i, s + Math.sin((i / t) * a * 6 + r * 0.3) * n * o);
      e.stroke();
    }
    ((e.fillStyle = s[3]),
      e.beginPath(),
      e.arc(
        t * r.range(0.25, 0.75),
        n * r.range(0.25, 0.6),
        Math.min(t, n) * 0.14,
        0,
        7,
      ),
      e.fill());
  } else if (i === `city`) {
    let i = e.createLinearGradient(0, 0, 0, n);
    (i.addColorStop(0, s[1]),
      i.addColorStop(1, s[3]),
      (e.fillStyle = i),
      e.fillRect(0, 0, t, n));
    for (let i = 0; i < 2; i++) {
      e.fillStyle = i ? s[0] : W(N(new u(s[0]).getHex(), 1.6));
      let a = 0;
      for (; a < t;) {
        let o = r.range(0.05, 0.14) * t,
          s = n * r.range(0.25, 0.7) * (i ? 0.8 : 1);
        (e.fillRect(a, n - s, o, s), (a += o + (i ? 3 : 0)));
      }
    }
    e.fillStyle = s[3];
    for (let i = 0; i < 90; i++)
      e.fillRect(r() * t, n * (0.45 + r() * 0.5), 3, 4);
  } else if (i === `arches`) {
    let i = r.int(3, 6),
      a = t / 2,
      o = n * 0.8;
    for (let n = 0; n < i; n++) {
      let r = t * 0.42 * (1 - n / i);
      ((e.fillStyle = s[n % s.length]),
        e.beginPath(),
        e.arc(a, o, r, Math.PI, 0),
        e.lineTo(a + r, o),
        e.fill());
    }
    ((e.fillStyle = s[0]), e.fillRect(0, o, t, n - o));
  } else {
    let i = r.int(5, 9),
      a = t / i;
    for (let t = 0; t < i; t++)
      for (let i = 0; i < Math.ceil(n / a); i++)
        ((e.fillStyle = c()),
          e.beginPath(),
          e.arc((t + 0.5) * a, (i + 0.5) * a, a * r.range(0.15, 0.42), 0, 7),
          e.fill());
  }
  e.globalAlpha = 0.05;
  for (let i = 0; i < (t * n) / 60; i++)
    ((e.fillStyle = r.chance(0.5) ? `#000` : `#fff`),
      e.fillRect(r() * t, r() * n, 1, 1));
  return ((e.globalAlpha = 1), i);
}
function ue(e, t, n, r) {
  let i = r.chance(0.6),
    a = e.createLinearGradient(0, 0, 0, n);
  (i
    ? (a.addColorStop(0, W(r.pick([9418976, 12046310, 15778970]))),
      a.addColorStop(0.55, `#d9e2dd`),
      a.addColorStop(0.56, W(r.pick([7179087, 14272416, 6195112]))),
      a.addColorStop(1, `#4f5f3a`))
    : (a.addColorStop(0, `#c9b69a`), a.addColorStop(1, `#6b5846`)),
    (e.fillStyle = a),
    e.fillRect(0, 0, t, n));
  let o = r.int(1, 5),
    s = t / (o + 1);
  for (let t = 0; t < o; t++) {
    let i = s * (t + 1) + r.range(-8, 8),
      a = r.range(0.7, 1.05) * n * 0.32,
      o = n * 0.95 - a * 1.7;
    ((e.fillStyle = W(
      r.pick([
        4020864, 15625293, 2699841, 14744572, 10011097, 9067076, 15912079,
        6000253,
      ]),
    )),
      e.fillRect(i - a * 0.34, o + a * 0.62, a * 0.68, a * 1.2),
      (e.fillStyle = W(
        r.pick([15845536, 14262906, 10775626, 7226928, 15251604]),
      )),
      e.fillRect(i - a * 0.3, o, a * 0.6, a * 0.6),
      (e.fillStyle = `#222`),
      e.fillRect(i - a * 0.14, o + a * 0.24, a * 0.06, a * 0.06),
      e.fillRect(i + a * 0.08, o + a * 0.24, a * 0.06, a * 0.06));
  }
  ((e.fillStyle = `rgba(255,240,210,0.12)`), e.fillRect(0, 0, t, n));
}
