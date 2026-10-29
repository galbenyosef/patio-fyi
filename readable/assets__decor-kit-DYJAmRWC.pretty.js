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
var G = [
  { key: `black`, w: 0.022, d: 0.03, m: () => U(1907999, 0.5), mat: !0 },
  { key: `white`, w: 0.025, d: 0.03, m: () => U(15789801, 0.5), mat: !0 },
  {
    key: `oak`,
    w: 0.035,
    d: 0.03,
    m: () => U(R.oak, 0.6),
    mat: (e) => e.chance(0.5),
  },
  {
    key: `walnut`,
    w: 0.045,
    d: 0.035,
    m: () => U(R.walnut, 0.55),
    mat: (e) => e.chance(0.5),
  },
  {
    key: `gilt`,
    w: 0.075,
    d: 0.05,
    m: () => U(12884549, 0.35, 0.85),
    mat: !1,
    ornate: !0,
  },
  { key: `brass`, w: 0.012, d: 0.02, m: () => U(12095807, 0.3, 0.9), mat: !0 },
  { key: `float`, w: 0, d: 0.03, m: () => U(1907999, 0.5), mat: !1 },
];
function de(t, n, r, i, a, o = 0, s = 0, c = 0, l = n.pick(G)) {
  let u = l,
    d = u.m(),
    f = u.w,
    p = u.d,
    h = (typeof u.mat == `function` ? u.mat(n) : u.mat)
      ? Math.min(r, i) * n.range(0.1, 0.18)
      : 0,
    g = r + 2 * h,
    _ = i + 2 * h;
  if (f > 0) {
    for (let e of [-1, 1])
      (B(t, g + 2 * f, f, p, d, o, s + e * (_ / 2 + f / 2), c + p / 2),
        B(t, f, _, p, d, o + e * (g / 2 + f / 2), s, c + p / 2));
    if (u.ornate)
      for (let e of [-1, 1]) {
        (B(
          t,
          g + f,
          f * 0.3,
          0.012,
          d,
          o,
          s + e * (_ / 2 + f * 0.2),
          c + p + 0.006,
        ),
          B(
            t,
            f * 0.3,
            _ + f,
            0.012,
            d,
            o + e * (g / 2 + f * 0.2),
            s,
            c + p + 0.006,
          ));
        for (let n of [-1, 1])
          A(
            t,
            f * 1.2,
            f * 1.2,
            0.02,
            0.008,
            d,
            o + e * (g / 2 + f / 2),
            s + n * (_ / 2 + f / 2),
            c + p + 0.01,
          );
      }
  }
  let v = f > 0 ? p * 0.4 : p;
  if (
    (B(t, g, _, v, U(h ? 16184300 : 2236962, 0.9), o, s, c + v / 2),
    H(t, r, i, a, o, s, c + v + 0.001, {
      rough: u.key === `float` ? 0.85 : 0.35,
    }),
    f > 0 && u.key !== `gilt`)
  ) {
    let n = new e(new m(g, _), T(16777215, 0.08, 0.02));
    (n.position.set(o, s, c + p - 0.004), t.add(n));
  }
  return { W: g + 2 * f, H: _ + 2 * f };
}
function fe(e) {
  let t = x(e),
    n = new f(),
    r = t.pick([`portrait`, `landscape`, `square`, `portrait`, `tall`, `wide`]),
    i = t.range(0.35, 0.75),
    [a, o] = {
      portrait: [i * 0.75, i],
      landscape: [i, i * 0.72],
      square: [i * 0.8, i * 0.8],
      tall: [i * 0.5, i * 1.1],
      wide: [i * 1.4, i * 0.55],
    }[r],
    s;
  return (
    de(
      n,
      t,
      a,
      o,
      P(Math.round(a * 700), Math.round(o * 700), (e, n, r) => {
        s = le(e, n, r, t);
      }),
    ),
    F(n, { mount: 1.55, note: s })
  );
}
function pe(e) {
  let t = x(e),
    n = new f(),
    r = t.pick([1, 1, 2, 3]),
    i = r === 1 ? t.range(0.8, 1.3) : t.range(1.2, 1.8),
    a = 0.06,
    o = t.range(0.55, 0.9),
    s = (i - a * (r - 1)) / r,
    c = Math.round(i * 500),
    l = Math.round(o * 500),
    u = document.createElement(`canvas`);
  ((u.width = c), (u.height = l), le(u.getContext(`2d`), c, l, t));
  for (let e = 0; e < r; e++) {
    let t = -i / 2 + s / 2 + e * (s + a),
      r = P(Math.round(s * 500), l, (t) =>
        t.drawImage(u, -Math.round((s + a) * 500 * e), 0),
      ),
      c = U(15328732, 0.9);
    (B(n, s, o, 0.035, c, t, 0, 0.0175),
      H(n, s, o, r, t, 0, 0.0355, { rough: 0.9 }));
  }
  return F(n, { mount: 1.5 });
}
function me(e) {
  let t = x(e),
    n = new f(),
    r = t.chance(0.6) ? t.pick(G.slice(0, 4)) : null,
    i = t.pick([
      [
        [0, 0, 0.5, 0.4],
        [-0.5, 0.08, 0.3, 0.4],
        [0.47, 0.1, 0.3, 0.3],
        [-0.45, -0.38, 0.35, 0.25],
        [0.05, -0.42, 0.4, 0.3],
        [0.5, -0.33, 0.25, 0.25],
      ],
      [
        [-0.33, 0.2, 0.45, 0.35],
        [0.28, 0.2, 0.45, 0.35],
        [-0.33, -0.25, 0.45, 0.35],
        [0.28, -0.25, 0.45, 0.35],
      ],
      [
        [0, 0.1, 0.4, 0.5],
        [-0.45, 0.25, 0.3, 0.25],
        [-0.45, -0.12, 0.3, 0.3],
        [0.45, 0.2, 0.3, 0.35],
        [0.45, -0.2, 0.3, 0.25],
        [0, -0.35, 0.5, 0.15],
      ],
    ]);
  for (let [e, a, o, s] of i) {
    let i = P(Math.round(o * 500), Math.round(s * 500), (e, n, r) =>
      t.chance(0.7) ? ue(e, n, r, t) : le(e, n, r, t),
    );
    de(n, t, o * 0.8, s * 0.8, i, e, a, 0, r ?? t.pick(G.slice(0, 6)));
  }
  return F(n, { mount: 1.5 });
}
function he(t) {
  let r = x(t),
    a = new f(),
    o = r.pick([`round`, `arch`, `rect`, `sunburst`, `oval`]),
    c = r.pick([
      U(12095807, 0.3, 0.9),
      U(1907999, 0.45, 0.6),
      U(R.oak, 0.6),
      U(15262940, 0.6),
    ]);
  if (o === `round` || o === `sunburst`) {
    let t = o === `sunburst` ? r.range(0.18, 0.25) : r.range(0.3, 0.45),
      s = new e(new n(t, 0.022, 10, 48), c);
    ((s.position.z = 0.025), (s.castShadow = !0), a.add(s));
    let l = new e(new i(t, 48), ne());
    if (((l.position.z = 0.02), a.add(l), o === `sunburst`)) {
      let e = r.int(18, 32),
        n = U(12884549, 0.35, 0.85);
      for (let r = 0; r < e; r++) {
        let i = (r / e) * Math.PI * 2,
          o = t * (r % 2 ? 0.9 : 1.5),
          s = B(
            a,
            0.012,
            o,
            0.012,
            n,
            Math.cos(i) * (t + o / 2 + 0.02),
            Math.sin(i) * (t + o / 2 + 0.02),
            0.02,
          );
        s.rotation.z = i - Math.PI / 2;
      }
    }
  } else if (o === `oval`) {
    let t = new e(new i(0.3, 48), ne());
    (t.scale.set(1, 1.45, 1), (t.position.z = 0.02), a.add(t));
    let r = new e(new n(0.3, 0.02, 10, 48), c);
    (r.scale.set(1, 1.45, 1), (r.position.z = 0.025), a.add(r));
  } else {
    let t = r.range(0.5, 0.8),
      n = o === `arch` ? r.range(0.9, 1.3) : r.range(0.6, 1),
      i = r.range(0.02, 0.05),
      l = new y();
    (l.moveTo(-t / 2, -n / 2),
      l.lineTo(t / 2, -n / 2),
      o === `arch`
        ? (l.lineTo(t / 2, n / 2 - t / 2),
          l.absarc(0, n / 2 - t / 2, t / 2, 0, Math.PI, !1))
        : (l.lineTo(t / 2, n / 2), l.lineTo(-t / 2, n / 2)),
      l.lineTo(-t / 2, -n / 2));
    let u = new e(
      new _(l, {
        depth: 0.025,
        bevelEnabled: !0,
        bevelSize: i,
        bevelThickness: 0.01,
        bevelSegments: 2,
      }),
      c,
    );
    ((u.castShadow = !0), a.add(u));
    let d = new e(new s(l, 24), ne());
    ((d.position.z = 0.037), a.add(d));
  }
  return F(a, { mount: 1.5 });
}
function ge(t) {
  let a = x(t),
    o = new f(),
    s = a.range(0.14, 0.24),
    c = a.pick([`office`, `station`, `modern`, `wood`]),
    l = {
      office: U(2763308, 0.5),
      station: U(1907999, 0.4, 0.6),
      modern: k(),
      wood: U(R.walnut, 0.55),
    }[c],
    u = new e(new g(s + 0.012, s + 0.012, 0.04, 48).rotateX(Math.PI / 2), l);
  ((u.position.z = 0.02), (u.castShadow = !0), o.add(u));
  let d = new e(new n(s + 0.006, 0.012, 8, 48), l);
  ((d.position.z = 0.046), o.add(d));
  let p = a.range(0, 12),
    m = a.range(0, 60),
    h = P(512, 512, (e) => {
      ((e.fillStyle = c === `wood` ? `#efe6d4` : `#f7f6f2`),
        e.beginPath(),
        e.arc(256, 256, 256, 0, 7),
        e.fill(),
        (e.fillStyle = `#1b1b1b`),
        (e.strokeStyle = `#1b1b1b`),
        (e.textAlign = `center`),
        (e.textBaseline = `middle`));
      for (let t = 0; t < 60; t++) {
        let n = (t / 60) * Math.PI * 2,
          r = t % 5 == 0,
          i = r ? 205 : 222;
        ((e.lineWidth = r ? 10 : 3),
          (c !== `modern` || r) &&
            (e.beginPath(),
            e.moveTo(256 + Math.sin(n) * i, 256 - Math.cos(n) * i),
            e.lineTo(256 + Math.sin(n) * 240, 256 - Math.cos(n) * 240),
            e.stroke()));
      }
      if (c !== `modern` && c !== `station`) {
        e.font = `600 54px ${c === `wood` ? `Georgia, serif` : `Arial, sans-serif`}`;
        for (let t = 1; t <= 12; t++) {
          let n = (t / 12) * Math.PI * 2;
          e.fillText(
            String(t),
            256 + Math.sin(n) * 165,
            256 - Math.cos(n) * 165,
          );
        }
      }
      let t = (t, n, r, i) => {
        (e.save(),
          e.translate(256, 256),
          e.rotate(t),
          (e.fillStyle = i),
          e.fillRect(-r / 2, -n, r, n + 30),
          e.restore());
      };
      (t((p / 12) * Math.PI * 2 + (m / 720) * Math.PI * 2, 130, 16, `#1b1b1b`),
        t((m / 60) * Math.PI * 2, 200, 10, `#1b1b1b`),
        c !== `wood` && t(a() * Math.PI * 2, 215, 4, `#c3302a`),
        (e.fillStyle = `#1b1b1b`),
        e.beginPath(),
        e.arc(256, 256, 14, 0, 7),
        e.fill());
    }),
    _ = new e(new i(s, 48), new r({ map: h, roughness: 0.5 }));
  ((_.position.z = 0.0405), o.add(_));
  let v = new e(new i(s, 48), T(16777215, 0.1));
  return ((v.position.z = 0.05), o.add(v), F(o, { mount: 2 }));
}
var _e = [
    `TEAMWORK`,
    `FOCUS`,
    `PERSEVERANCE`,
    `LEADERSHIP`,
    `ACHIEVE`,
    `COURAGE`,
    `INNOVATION`,
    `EXCELLENCE`,
    `COMMITMENT`,
  ],
  ve = [
    `Together we reach further.`,
    `The summit rewards the patient climber.`,
    `Every great journey starts at the trailhead.`,
    `Small steps, every day.`,
    `The view is worth the climb.`,
  ];
function ye(e) {
  let t = x(e),
    n = new f(),
    r = t.pick([`motivational`, `motivational`, `safety`, `map`, `chart`]),
    i = r === `map` ? 0.9 : 0.46,
    a = r === `map` ? 0.6 : 0.61,
    o = P(Math.round(i * 800), Math.round(a * 800), (e, n, i) => {
      if (r === `motivational`) {
        ((e.fillStyle = `#0c0c0c`), e.fillRect(0, 0, n, i));
        let r = document.createElement(`canvas`);
        ((r.width = n * 0.84),
          (r.height = i * 0.6),
          le(
            r.getContext(`2d`),
            r.width,
            r.height,
            t,
            t.pick([`landscape`, `seascape`, `city`]),
          ),
          e.drawImage(r, n * 0.08, i * 0.07),
          (e.strokeStyle = `#ddd`),
          (e.lineWidth = 2),
          e.strokeRect(n * 0.08, i * 0.07, r.width, r.height),
          (e.fillStyle = `#f2f2f2`),
          (e.textAlign = `center`),
          (e.font = `500 ${n * 0.085}px Georgia, serif`),
          `letterSpacing` in e && (e.letterSpacing = `0.15em`),
          e.fillText(t.pick(_e), n / 2, i * 0.78),
          `letterSpacing` in e && (e.letterSpacing = `0em`),
          (e.font = `italic ${n * 0.035}px Georgia, serif`),
          (e.fillStyle = `#bbb`),
          e.fillText(t.pick(ve), n / 2, i * 0.86));
      } else if (r === `safety`) {
        ((e.fillStyle = `#fafafa`),
          e.fillRect(0, 0, n, i),
          (e.fillStyle = `#1a7a3a`),
          e.fillRect(0, 0, n, i * 0.16),
          (e.fillStyle = `#fff`),
          (e.font = `bold ${n * 0.07}px Arial, sans-serif`),
          (e.textAlign = `center`),
          e.fillText(
            t.pick([
              `FIRE EXIT PLAN`,
              `FIRST AID`,
              `SAFETY FIRST`,
              `EVACUATION ROUTE`,
            ]),
            n / 2,
            i * 0.1,
          ),
          (e.strokeStyle = `#444`),
          (e.lineWidth = 3));
        for (let r = 0; r < 6; r++)
          e.strokeRect(
            n * (0.1 + t() * 0.5),
            i * (0.22 + t() * 0.45),
            n * t.range(0.1, 0.3),
            i * t.range(0.06, 0.18),
          );
        ((e.strokeStyle = `#1a7a3a`),
          (e.lineWidth = 6),
          e.beginPath(),
          e.moveTo(n * 0.2, i * 0.8),
          e.lineTo(n * 0.5, i * 0.8),
          e.lineTo(n * 0.5, i * 0.5),
          e.lineTo(n * 0.85, i * 0.5),
          e.stroke(),
          (e.fillStyle = `#555`),
          (e.font = `${n * 0.03}px Arial`));
        for (let r = 0; r < 3; r++)
          e.fillRect(n * 0.1, i * (0.88 + r * 0.03), n * t.range(0.4, 0.8), 3);
      } else if (r === `map`) {
        ((e.fillStyle = `#bcd6e6`),
          e.fillRect(0, 0, n, i),
          (e.fillStyle = `#e8dfc6`));
        for (let r = 0; r < 7; r++) {
          e.beginPath();
          let r = t() * n,
            a = t() * i,
            o = t.range(0.08, 0.22) * n;
          for (let n = 0; n <= 12; n++) {
            let i = (n / 12) * 7,
              s = o * t.range(0.5, 1.2);
            e[n ? `lineTo` : `moveTo`](
              r + Math.cos(i) * s,
              a + Math.sin(i) * s * 0.7,
            );
          }
          e.fill();
        }
        ((e.strokeStyle = `rgba(40,60,80,0.25)`), (e.lineWidth = 1));
        for (let t = 0; t < n; t += n / 12)
          (e.beginPath(), e.moveTo(t, 0), e.lineTo(t, i), e.stroke());
        for (let t = 0; t < i; t += i / 8)
          (e.beginPath(), e.moveTo(0, t), e.lineTo(n, t), e.stroke());
        for (let r = 0; r < 9; r++)
          ((e.fillStyle = t.pick([`#c62828`, `#1565c0`, `#f9a825`])),
            e.beginPath(),
            e.arc(t() * n, t() * i, 5, 0, 7),
            e.fill());
      } else {
        ((e.fillStyle = `#fff`),
          e.fillRect(0, 0, n, i),
          (e.fillStyle = `#222`),
          (e.font = `bold ${n * 0.06}px Arial`),
          e.fillText(
            t.pick([`Q3 TARGETS`, `SALES BY REGION`, `UNITS SHIPPED`]),
            n * 0.08,
            i * 0.1,
          ));
        let r = t.int(5, 9);
        for (let a = 0; a < r; a++) {
          let o = i * t.range(0.15, 0.65);
          ((e.fillStyle = t.pick([`#2e6db4`, `#e07b39`, `#3a9d5d`])),
            e.fillRect(
              n * 0.1 + (a * n * 0.8) / r,
              i * 0.88 - o,
              (n * 0.8) / r - 6,
              o,
            ));
        }
        ((e.fillStyle = `#222`), e.fillRect(n * 0.08, i * 0.88, n * 0.84, 3));
      }
    });
  if (t.chance(0.5)) de(n, t, i, a, o, 0, 0, 0, G[t.pick([0, 5])]);
  else {
    H(n, i, a, o, 0, 0, 0.003, { rough: 0.5 });
    for (let [e, t] of [
      [-1, 1],
      [1, 1],
      [-1, -1],
      [1, -1],
    ])
      L(
        n,
        0.006,
        0.006,
        0.004,
        k(),
        e * (i / 2 - 0.02),
        t * (a / 2 - 0.02),
        0.004,
      ).rotation.x = Math.PI / 2;
  }
  return F(n, { mount: 1.55 });
}
function be(e, t, n, r, i) {
  e.lineCap = `round`;
  for (let a = 0; a < r.int(4, 9); a++) {
    ((e.strokeStyle = r.pick(i)), (e.lineWidth = r.range(3, 6)));
    let a = r() * t * 0.8,
      o = r() * n * 0.85,
      s = r.int(0, 3);
    if ((e.beginPath(), s === 0))
      for (let t = 0; t < r.int(3, 8); t++) {
        let i = o + t * n * 0.05;
        e.moveTo(a, i);
        let s = a;
        for (let t = 0; t < 12; t++)
          ((s += r.range(6, 14)), e.lineTo(s, i + r.range(-4, 4)));
      }
    else if (s === 1)
      (e.rect(a, o, r.range(40, 140), r.range(30, 90)),
        e.moveTo(a + 140, o + 40),
        e.lineTo(a + 200, o + 60));
    else if (s === 2)
      e.ellipse(a + 50, o + 40, r.range(30, 70), r.range(20, 45), 0, 0, 7);
    else {
      e.moveTo(a, o + 80);
      for (let t = 0; t < 6; t++) e.lineTo(a + t * 30, o + 80 - r.range(0, 70));
    }
    e.stroke();
  }
}
function xe(e) {
  let t = x(e),
    n = new f(),
    r = t.pick([1.2, 1.5, 1.8, 2.4]),
    i = r > 1.6 ? 1.2 : 0.9,
    a = P(Math.round(r * 500), Math.round(i * 500), (e, n, r) => {
      ((e.fillStyle = `#f7f8f9`),
        e.fillRect(0, 0, n, r),
        be(e, n, r, t, [`#1b3a8a`, `#1b1b1b`, `#b3261e`, `#1e7a3c`]),
        (e.fillStyle = `rgba(120,130,140,0.07)`));
      for (let i = 0; i < 5; i++)
        e.fillRect(t() * n, t() * r, t.range(60, 200), t.range(20, 60));
    }),
    o = O();
  (B(n, r, i, 0.012, U(14541026, 0.6), 0, 0, 0.006),
    H(n, r - 0.03, i - 0.03, a, 0, 0, 0.0125, { rough: 0.15 }));
  for (let e of [-1, 1])
    (B(n, r + 0.03, 0.018, 0.022, o, 0, e * (i / 2 + 0.005), 0.011),
      B(n, 0.018, i + 0.02, 0.022, o, e * (r / 2 + 0.005), 0, 0.011));
  B(n, r * 0.6, 0.015, 0.07, o, 0, -i / 2 - 0.02, 0.04);
  for (let e = 0; e < t.int(1, 4); e++) {
    let a = L(
      n,
      0.009,
      0.009,
      0.13,
      U(t.pick([1784458, 1776411, 11740702, 1997372]), 0.5),
      -r * 0.2 + e * 0.1,
      -i / 2 - 0.004,
      0.05,
      10,
    );
    a.rotation.z = Math.PI / 2;
  }
  return (
    t.chance(0.6) &&
      A(
        n,
        0.13,
        0.05,
        0.05,
        0.01,
        U(2763306, 0.8),
        r * 0.18,
        -i / 2 - 0.012,
        0.045,
      ),
    F(n, { mount: 1.4 })
  );
}
function Se(e) {
  let t = x(e),
    n = new f(),
    i = t.range(0.6, 1.2),
    a = t.range(0.45, 0.9),
    o = P(512, 512, (e) => {
      ((e.fillStyle = `#b9895a`), e.fillRect(0, 0, 512, 512));
      for (let n = 0; n < 9e3; n++)
        ((e.fillStyle = t.pick([`#8f6338`, `#d2a878`, `#a8784a`, `#6f4a2a`])),
          e.fillRect(t() * 512, t() * 512, t.range(1, 3), t.range(1, 3)));
    });
  ((o.wrapS = o.wrapT = p),
    o.repeat.set(i, a),
    B(n, i, a, 0.012, new r({ map: o, roughness: 1 }), 0, 0, 0.006));
  let s = U(t.pick([R.oak, R.pine, 10133154]), 0.6, t.chance(0.3) ? 0.7 : 0);
  for (let e of [-1, 1])
    (B(n, i + 0.05, 0.025, 0.02, s, 0, e * (a / 2 + 0.0125), 0.01),
      B(n, 0.025, a, 0.02, s, e * (i / 2 + 0.0125), 0, 0.01));
  let c = t.int(4, 10);
  for (let e = 0; e < c; e++) {
    let r = t.range(0.08, 0.21),
      o = t.pick([r, r * 1.3, r * 0.75]),
      s = t.range(-i / 2 + r / 2 + 0.02, i / 2 - r / 2 - 0.02),
      c = t.range(-a / 2 + o / 2 + 0.02, a / 2 - o / 2 - 0.02),
      l = t.pick([`note`, `paper`, `photo`, `card`]),
      u = P(128, Math.round((128 * o) / r), (e, n, r) => {
        if (l === `photo`) ue(e, n, r, t);
        else {
          ((e.fillStyle =
            l === `note`
              ? t.pick([`#fff27a`, `#ffb3c7`, `#b3e5ff`, `#c6f7b0`])
              : l === `card`
                ? t.pick([`#f0d9b5`, `#e3eef7`])
                : `#fbfbf8`),
            e.fillRect(0, 0, n, r),
            (e.fillStyle = `rgba(30,30,60,0.6)`));
          for (let i = 16; i < r - 8; i += 11)
            e.fillRect(10, i, t.range(n * 0.3, n * 0.8), 2);
        }
      });
    u.userData.opaquePanel = !0;
    let d = H(n, r, o, u, s, c, 0.0135 + e * 6e-4, { rough: 0.8 });
    ((d.rotation.z = t.range(-0.12, 0.12)),
      b(
        n,
        0.007,
        U(t.pick([13840175, 1668818, 3706428, 16498733]), 0.4),
        s,
        c + o / 2 - 0.015,
        0.02,
        8,
      ));
  }
  return F(n, { mount: 1.45 });
}
function Ce(e) {
  let t = x(e),
    n = new f(),
    r = t.chance(0.6);
  return (
    de(
      n,
      t,
      r ? 0.36 : 0.28,
      r ? 0.28 : 0.36,
      P(r ? 560 : 440, r ? 440 : 560, (e, n, r) => {
        ((e.fillStyle = `#fbf7ec`),
          e.fillRect(0, 0, n, r),
          (e.strokeStyle = t.pick([`#1f3b63`, `#6b1f1f`, `#2d4a2d`])),
          (e.lineWidth = 8),
          e.strokeRect(18, 18, n - 36, r - 36),
          (e.lineWidth = 2),
          e.strokeRect(30, 30, n - 60, r - 60),
          (e.fillStyle = `#222`),
          (e.textAlign = `center`),
          (e.font = `600 ${n * 0.07}px Georgia, serif`),
          e.fillText(
            t.pick([`Certificate`, `Diploma`, `Award of Merit`, `Recognition`]),
            n / 2,
            r * 0.24,
          ),
          (e.font = `italic ${n * 0.04}px Georgia, serif`),
          e.fillText(`is hereby presented to`, n / 2, r * 0.36),
          (e.font = `600 ${n * 0.06}px Georgia, serif`),
          e.fillText(
            t.pick([
              `A. Cubington`,
              `R. Blockley`,
              `J. Squarewell`,
              `M. Hexley`,
              `T. Boxer`,
            ]),
            n / 2,
            r * 0.5,
          ),
          (e.fillStyle = `#777`));
        for (let t = 0; t < 3; t++)
          e.fillRect(n * 0.2, r * (0.6 + t * 0.05), n * 0.6, 2);
        ((e.fillStyle = `#c9a23a`),
          e.beginPath(),
          e.arc(n * 0.78, r * 0.8, n * 0.07, 0, 7),
          e.fill(),
          (e.fillStyle = `#9e7c22`),
          e.beginPath(),
          e.arc(n * 0.78, r * 0.8, n * 0.05, 0, 7),
          e.fill());
      }),
      0,
      0,
      0,
      t.pick([G[0], G[3], G[4], G[2]]),
    ),
    F(n, { mount: 1.6 })
  );
}
function we(e) {
  let t = x(e),
    n = new f(),
    r = 0.3,
    i = 0.46,
    a = t.pick([
      `JANUARY`,
      `MARCH`,
      `MAY`,
      `JULY`,
      `SEPTEMBER`,
      `OCTOBER`,
      `DECEMBER`,
    ]),
    o = P(360, 552, (e, n, r) => {
      ((e.fillStyle = `#fbfbf9`), e.fillRect(0, 0, n, r));
      let i = document.createElement(`canvas`);
      ((i.width = n),
        (i.height = r * 0.48),
        le(
          i.getContext(`2d`),
          i.width,
          i.height,
          t,
          t.pick([`landscape`, `seascape`, `botanical`]),
        ),
        e.drawImage(i, 0, 0),
        (e.fillStyle = `#222`),
        (e.font = `bold 26px Arial`),
        (e.textAlign = `center`),
        e.fillText(a, n / 2, r * 0.54));
      let o = t.int(0, 6);
      e.font = `16px Arial`;
      for (let i = 0; i < 31; i++) {
        let a = i + o,
          s = 26 + (a % 7) * ((n - 40) / 7),
          c = r * 0.6 + Math.floor(a / 7) * 34;
        ((e.fillStyle = a % 7 == 0 ? `#c0392b` : `#333`),
          e.fillText(String(i + 1), s + 8, c + 12),
          t.chance(0.08) &&
            ((e.strokeStyle = `#1b3a8a`),
            (e.lineWidth = 2),
            e.beginPath(),
            e.arc(s + 8, c + 7, 14, 0, 7),
            e.stroke()));
      }
    });
  return (
    H(n, r, i, o, 0, 0, 0.002, { rough: 0.7 }),
    B(n, r, 0.012, 0.006, U(3355443, 0.5, 0.5), 0, i / 2 - 0.006, 0.004),
    F(n, { mount: 1.55 })
  );
}
function Te(e) {
  let t = x(e),
    n = new f(),
    r = t.range(0.6, 1.2),
    i = 0.22,
    a = U(t.pick([R.oak, R.walnut, R.white, R.espresso]), 0.55);
  z(n, r, 0.04, i, a, 0, -0.02, i / 2);
  let o = -r / 2 + 0.03;
  for (
    t.chance(0.8) &&
    (o +=
      ae(n, t, o, 0.02, i * 0.5, r * t.range(0.25, 0.45), { depth: 0.16 }) +
      0.05);
    o < r / 2 - 0.1;
  ) {
    let e = t.pick([`vase`, `frame`, `candle`, `bowl`, `plant`]);
    if (e === `vase`) {
      let e = t.range(0.12, 0.26),
        r = U(t.pick([15328472, 2899536, 10467240, 13201226]), 0.3);
      (D(
        n,
        [
          [0, 0],
          [0.04, 0],
          [0.05, e * 0.3],
          [0.035, e * 0.8],
          [0.025, e],
          [0.02, e],
        ],
        r,
        o + 0.05,
        0.02,
        i / 2,
        20,
      ),
        (o += 0.12));
    } else if (e === `frame`) {
      let e = P(120, 150, (e, n, r) => ue(e, n, r, t)),
        r = new f();
      (de(r, t, 0.1, 0.13, e, 0, 0.09, 0, G[t.int(0, 3)]),
        (r.rotation.x = -0.18),
        r.position.set(o + 0.08, 0.02, i * 0.35),
        n.add(r),
        (o += 0.17));
    } else if (e === `candle`)
      (L(
        n,
        0.035,
        0.035,
        t.range(0.08, 0.15),
        U(15986402, 0.7),
        o + 0.04,
        0.02,
        i / 2,
      ),
        (o += 0.1));
    else if (e === `bowl`)
      (D(
        n,
        [
          [0, 0],
          [0.04, 0],
          [0.09, 0.05],
          [0.095, 0.055],
        ],
        U(t.pick([4157299, 15328472, 2039586]), 0.35),
        o + 0.1,
        0.02,
        i / 2,
      ),
        (o += 0.21));
    else {
      D(
        n,
        [
          [0, 0],
          [0.045, 0],
          [0.055, 0.1],
          [0.05, 0.1],
        ],
        U(11887934, 0.8),
        o + 0.06,
        0.02,
        i / 2,
        16,
      );
      for (let e = 0; e < 6; e++) {
        let e = t() * 7;
        b(
          n,
          0.03,
          U(4160058, 0.7),
          o + 0.06 + Math.cos(e) * 0.03,
          0.14 + t() * 0.04,
          i / 2 + Math.sin(e) * 0.03,
          8,
        );
      }
      o += 0.13;
    }
  }
  return F(n, { mount: 1.4 });
}
var Ee = [
    {
      key: `print`,
      name: `Framed print`,
      desc: `Generated art (10 styles) in black, white, oak, walnut, gilt, brass or float frames`,
      build: fe,
    },
    {
      key: `canvas`,
      name: `Canvas set`,
      desc: `Stretched canvas, single or a split diptych / triptych`,
      build: pe,
    },
    {
      key: `gallery`,
      name: `Gallery wall`,
      desc: `Family photos and prints, matched or mixed frames`,
      build: me,
    },
    {
      key: `mirror`,
      name: `Mirror`,
      desc: `Round, oval, arched, rectangular or sunburst`,
      build: he,
    },
    {
      key: `clock`,
      name: `Wall clock`,
      desc: `Office, station, modern or wooden, set to a random time`,
      build: ge,
    },
    {
      key: `poster`,
      name: `Office poster`,
      desc: `Motivational, safety plan, world map or sales chart`,
      build: ye,
    },
    {
      key: `whiteboard`,
      name: `Whiteboard`,
      desc: `1.2-2.4 m with scribbles, tray, markers and eraser`,
      build: xe,
    },
    {
      key: `cork`,
      name: `Cork board`,
      desc: `Pinned notes, photos and cards`,
      build: Se,
    },
    {
      key: `certificate`,
      name: `Certificate`,
      desc: `Diploma or award in a frame`,
      build: Ce,
    },
    {
      key: `calendar`,
      name: `Wall calendar`,
      desc: `Picture calendar with a circled date or two`,
      build: we,
    },
    {
      key: `shelf`,
      name: `Floating shelf`,
      desc: `Styled with books, vases, candles and a photo`,
      build: Te,
    },
  ].map((e) => ({ ...e, cat: `wall` })),
  De = [15131871, 13948630, 3816512, 2829359, 15921644];
function Oe(e, t) {
  return P(256, 160, (e, n, r) => {
    if (
      ((e.fillStyle = t === `copier` ? `#e8f0f7` : `#0f1720`),
      e.fillRect(0, 0, n, r),
      t === `copier`)
    ) {
      ((e.fillStyle = `#2d6db4`), e.fillRect(0, 0, n, 26));
      for (let t = 0; t < 6; t++)
        ((e.fillStyle = [
          `#4a90d9`,
          `#58b368`,
          `#e8a33d`,
          `#9b6bd1`,
          `#d95c5c`,
          `#7a8a99`,
        ][t]),
          e.fillRect(16 + (t % 3) * 80, 40 + Math.floor(t / 3) * 58, 64, 46));
    } else
      ((e.fillStyle = `#7fd1ff`),
        (e.font = `bold 30px monospace`),
        e.fillText(`READY`, 20, 60),
        (e.font = `18px monospace`),
        (e.fillStyle = `#cde`),
        e.fillText(`Tray 1  A4`, 20, 100));
  });
}
function ke(e) {
  return P(
    512,
    300,
    (t, n, r) => {
      let i = e.pick([`sheet`, `code`, `mail`, `desk`, `slides`]);
      if (i === `desk`) {
        let i = document.createElement(`canvas`);
        ((i.width = n),
          (i.height = r),
          le(i.getContext(`2d`), n, r, e, e.pick([`landscape`, `seascape`])),
          t.drawImage(i, 0, 0),
          (t.fillStyle = `rgba(20,20,30,0.8)`),
          t.fillRect(0, r - 22, n, 22));
        return;
      }
      if (
        ((t.fillStyle = i === `code` ? `#1e1f24` : `#ffffff`),
        t.fillRect(0, 0, n, r),
        (t.fillStyle = i === `code` ? `#2a2c33` : `#e9edf2`),
        t.fillRect(0, 0, n, 24),
        i === `sheet`)
      ) {
        t.strokeStyle = `#d4d9df`;
        for (let e = 40; e < n; e += 60)
          (t.beginPath(), t.moveTo(e, 24), t.lineTo(e, r), t.stroke());
        for (let e = 40; e < r; e += 16)
          (t.beginPath(), t.moveTo(0, e), t.lineTo(n, e), t.stroke());
        ((t.fillStyle = `#1e7a3c`),
          t.fillRect(0, 24, n, 16),
          (t.fillStyle = `#556`));
        for (let n = 0; n < 60; n++)
          t.fillRect(
            44 + (n % 7) * 60,
            44 + Math.floor(n / 7) * 16,
            e.range(15, 50),
            6,
          );
      } else if (i === `code`)
        for (let n = 36; n < r; n += 13) {
          let r = 12 + e.int(0, 3) * 16;
          for (let i = 0; i < e.int(1, 5); i++) {
            let i = e.range(20, 90);
            ((t.fillStyle = e.pick([
              `#c792ea`,
              `#82aaff`,
              `#c3e88d`,
              `#f78c6c`,
              `#a6accd`,
            ])),
              t.fillRect(r, n, i, 6),
              (r += i + 8));
          }
        }
      else if (i === `mail`) {
        ((t.fillStyle = `#f3f5f8`), t.fillRect(0, 24, 130, r));
        for (let n = 34; n < r; n += 34)
          ((t.fillStyle = `#334`),
            t.fillRect(140, n, e.range(80, 200), 7),
            (t.fillStyle = `#99a`),
            t.fillRect(140, n + 12, e.range(150, 340), 5));
        ((t.fillStyle = `#2d6db4`), t.fillRect(12, 34, 100, 20));
      } else {
        ((t.fillStyle = `#2d6db4`),
          t.fillRect(40, 60, n - 80, 40),
          (t.fillStyle = `#e07b39`));
        for (let n = 0; n < 5; n++) {
          let i = e.range(30, 120);
          t.fillRect(70 + n * 70, r - 30 - i, 44, i);
        }
      }
    },
    { opaquePanel: !0 },
  );
}
function Ae(e) {
  let t = x(e),
    n = new f(),
    r = t.chance(0.35),
    i = w(t.pick([15855852, 14080218, 3816512])),
    a = 0.32,
    o = 0.33,
    s = r ? 1.05 : 0.95;
  (S(n, a, s, o, 0.03, i, 0, 0, 0),
    z(n, 0.3, 0.06, 0.31, U(2763306, 0.8), 0, 0, 0),
    B(n, a * 0.72, 0.26, 0.04, U(2763566, 0.6), 0, s - 0.34, o / 2 - 0.015));
  for (let [e, t] of [
    [-0.06, 12986408],
    [0.06, 1989567],
  ])
    (A(n, 0.05, 0.045, 0.05, 0.012, w(t), e, s - 0.24, 0.17500000000000002),
      L(n, 0.008, 0.008, 0.03, w(7829367), e, s - 0.29, 0.185, 8));
  z(n, a * 0.6, 0.02, 0.07, U(5592405, 0.4, 0.6), 0, s - 0.46, 0.17);
  for (let e = 0; e < 5; e++)
    z(
      n,
      a * 0.56,
      0.004,
      0.004,
      U(2236962, 0.6),
      0,
      s - 0.437,
      o / 2 - 0.02 + e * 0.012,
    );
  if (
    (B(n, 0.05, 0.012, 0.003, V(4500223, 1.2), -0.06, s - 0.13, 0.166),
    B(n, 0.05, 0.012, 0.003, V(16733508, 1.2), 0.06, s - 0.13, 0.166),
    r)
  )
    A(n, 0.28, 0.015, 0.29000000000000004, 0.005, w(13619924), 0, s, 0);
  else {
    let e = T(8369894, 0.45, 0.08);
    (D(
      n,
      [
        [0.03, 0],
        [0.04, 0.02],
        [0.05, 0.05],
        [0.13, 0.1],
        [0.135, 0.18],
        [0.12, 0.22],
        [0.135, 0.26],
        [0.135, 0.36],
        [0.12, 0.42],
        [0.06, 0.46],
        [0, 0.465],
      ],
      e,
      0,
      s - 0.02,
      0,
      32,
    ),
      D(
        n,
        [
          [0, 0],
          [0.12, 0.08],
          [0.125, 0.3],
          [0.1, 0.38],
          [0, 0.39],
        ],
        U(10275054, 0.1, 0, { transparent: !0, opacity: 0.35, depthWrite: !1 }),
        0,
        s + 0.06,
        0,
        24,
      ));
  }
  return (
    t.chance(0.6) &&
      (L(n, 0.04, 0.04, 0.32, w(14672870), 0.20500000000000002, s - 0.5, 0),
      D(
        n,
        [
          [0.028, 0],
          [0.038, 0.06],
          [0, 0.06],
        ],
        U(16185074, 0.8),
        0.20500000000000002,
        s - 0.56,
        0,
        16,
      )),
    F(n)
  );
}
function je(e) {
  let t = x(e),
    n = new f(),
    r = De[t.int(0, 1)],
    i = U(3816512, 0.6),
    a = w(r),
    o = t.range(0.58, 0.66),
    s = 0.68,
    c = t.chance(0.6) ? 3 : 2,
    l = 0.13,
    u = 0.08;
  z(n, o - 0.04, 0.08, 0.6200000000000001, i, 0, 0, 0);
  for (let e = 0; e < c; e++)
    (S(n, o, 0.124, s, 0.01, a, 0, u, 0),
      B(n, o * 0.3, 0.025, 0.02, i, 0, u + l - 0.04, 0.34500000000000003),
      B(n, 0.04, 0.012, 0.002, U(5592405, 0.5), o * 0.38, u + l * 0.5, 0.341),
      (u += l));
  (S(n, o, 0.32, s, 0.015, a, 0, u, 0),
    B(n, o * 0.9, 0.1, 0.02, U(N(r, 0.85), 0.55), 0, u + 0.14, 0.342));
  let d = u + 0.32;
  (z(n, o * 0.85, 0.12, s * 0.9, U(2763566, 0.7), -0.02, d, 0),
    z(n, o * 0.6, 0.004, s * 0.5, U(16316661, 0.9), -0.04, d + 0.01, 0),
    S(n, o, 0.09, s, 0.012, a, 0, d + 0.12, 0));
  let p = d + 0.21;
  (S(n, o, 0.05, s * 0.95, 0.012, w(De[2]), 0, p, -0.01),
    S(n, o * 0.7, 0.07, s * 0.55, 0.02, a, -0.05, p + 0.05, -0.05),
    z(n, o * 0.4, 0.004, s * 0.4, U(16316661, 0.9), -0.05, p + 0.12, -0.05));
  let m = new f();
  return (
    m.position.set(o * 0.32, p + 0.02, s / 2 - 0.02),
    (m.rotation.x = -0.6),
    n.add(m),
    A(m, 0.26, 0.17, 0.03, 0.01, i, 0, 0, 0),
    H(m, 0.22, 0.13, Oe(t, `copier`), 0, 0, 0.016, {
      emissive: 0.8,
      rough: 0.3,
    }),
    B(n, 0.01, 0.12, 0.3, a, o / 2 + 0.005, d - 0.1, 0),
    F(n)
  );
}
function Me(e) {
  let t = x(e),
    n = new f(),
    r = t.pick(De),
    i = w(r),
    a = U(2763566, 0.6),
    o = t.range(0.38, 0.45),
    s = t.range(0.34, 0.4),
    c = t.range(0.22, 0.3);
  (S(n, o, c, s, 0.02, i, 0, 0, 0),
    z(n, o * 0.8, 0.02, s * 0.1, a, 0, c * 0.25, s / 2 - 0.02),
    B(n, o * 0.8, 0.03, 0.01, w(N(r, 0.85)), 0, c * 0.15, s / 2 + 0.004),
    z(n, o * 0.7, 0.01, s * 0.5, a, 0, c - 0.005, -s * 0.05),
    z(n, o * 0.5, 0.004, s * 0.4, U(16316661, 0.9), 0, c - 0.002, -s * 0.02));
  let l = new f();
  return (
    l.position.set(o * 0.32, c - 0.02, s / 2 - 0.04),
    (l.rotation.x = -0.5),
    n.add(l),
    A(l, 0.1, 0.06, 0.012, 0.004, a, 0, 0, 0),
    H(l, 0.08, 0.045, Oe(t, `printer`), 0, 0, 0.007, {
      emissive: 0.8,
      rough: 0.3,
    }),
    b(n, 0.005, V(4521847, 2), o * 0.43, c * 0.7, s / 2 + 0.001, 6),
    F(n)
  );
}
function Ne(e) {
  let t = x(e),
    n = new f(),
    r = t.pick(De),
    i = w(r),
    a = 0.44,
    o = 0.3,
    s = 0.07,
    c = t.chance(0.4);
  if (
    (S(n, a, s, o, 0.012, i, 0, 0, 0),
    S(n, a, 0.025, o, 0.01, w(t.chance(0.5) ? r : 2763566), 0, s, 0),
    z(n, 0.05, 0.005, 0.015, U(2763566, 0.6), a * 0.35, 0.095, o / 2 - 0.02),
    b(n, 0.004, V(4521847, 2), a * 0.43, s * 0.5, 0.151, 6),
    c)
  ) {
    S(n, a * 0.7, 0.05, o * 0.6, 0.01, i, -0.02, 0.095, -0.04);
    let e = B(n, a * 0.6, 0.005, 0.2, i, -0.02, 0.19, -0.15);
    e.rotation.x = -0.6;
  }
  return F(n);
}
function Pe(e) {
  let t = x(e),
    n = new f(),
    r = t.range(0.34, 0.42),
    i = t.range(0.55, 0.68),
    a = t.chance(0.5) ? T(10134701, 0.5, 0.2) : w(2763566);
  return (
    S(n, r, i - 0.12, 0.28, 0.02, a, 0, 0, 0),
    a.transparent &&
      z(
        n,
        r - 0.04,
        (i - 0.12) * t.range(0.3, 0.8),
        0.24000000000000002,
        U(15263454, 0.95),
        0,
        0.02,
        0,
      ),
    S(n, r + 0.01, 0.12, 0.29000000000000004, 0.02, w(2039843), 0, i - 0.12, 0),
    z(n, r * 0.8, 0.006, 0.006, U(0, 1), 0, i, 0),
    b(n, 0.006, V(4521847, 2), r * 0.4, i - 0.04, 0.14400000000000002, 6),
    a.transparent ||
      B(n, r * 0.4, 0.03, 0.01, w(3816512), 0, i - 0.25, 0.14500000000000002),
    F(n)
  );
}
function Fe(t) {
  let n = x(t),
    i = new f(),
    a = n.pick([`mesh`, `mesh`, `exec`, `task`]),
    o = n.chance(0.3) ? O() : E(),
    s = w(2039843),
    c = U(
      a === `exec`
        ? n.pick([1776413, 3877410, 2765120])
        : n.pick([2829359, 4082266, 5991246, 7305862, 9060154]),
      a === `exec` ? 0.45 : 0.9,
    );
  for (let e = 0; e < 5; e++) {
    let t = (e / 5) * Math.PI * 2 + n() * 0.2,
      r = 0.32,
      a = Math.cos(t) * r,
      c = Math.sin(t) * r;
    (C(i, [0, 0.1, 0], [a, 0.07, c], 0.022, o, 6),
      b(i, 0.03, s, a, 0.035, c, 10),
      B(i, 0.02, 0.03, 0.02, s, a, 0.07, c));
  }
  (L(i, 0.05, 0.05, 0.05, o, 0, 0.07, 0),
    L(i, 0.025, 0.025, 0.22, k(), 0, 0.12, 0, 12),
    L(i, 0.04, 0.04, 0.12, s, 0, 0.12, 0, 12));
  let l = n.range(0.44, 0.5);
  (z(i, 0.2, 0.05, 0.25, s, 0, l - 0.06, 0),
    S(i, 0.5, 0.08, 0.48, 0.035, c, 0, l, 0.01));
  let u = a === `exec` ? 0.72 : a === `task` ? 0.42 : 0.6,
    d = a === `task` ? 0.42 : 0.48,
    h = new f();
  if (
    (h.position.set(0, l + 0.1, -0.23),
    (h.rotation.x = -0.12),
    i.add(h),
    a === `mesh`)
  ) {
    let t = U(2039843, 0.5);
    for (let e of [-1, 1]) B(h, 0.03, u, 0.03, t, (e * d) / 2, u / 2, 0);
    (B(h, d, 0.03, 0.03, t, 0, u, 0), B(h, d, 0.03, 0.03, t, 0, 0.02, 0));
    let n = P(64, 64, (e) => {
      ((e.fillStyle = `#000`),
        e.fillRect(0, 0, 64, 64),
        (e.fillStyle = `#fff`));
      for (let t = 0; t < 64; t += 4)
        for (let n = 0; n < 64; n += 4) e.fillRect(t, n, 3, 3);
    });
    ((n.wrapS = n.wrapT = p), n.repeat.set(12, 16));
    let a = new e(
      new m(d, u),
      new r({
        color: c.color,
        roughness: 0.9,
        alphaMap: n,
        transparent: !0,
        side: 2,
        alphaTest: 0.3,
      }),
    );
    (a.position.set(0, u / 2, 0),
      h.add(a),
      A(h, d * 0.7, 0.1, 0.05, 0.02, s, 0, 0.2, 0.02),
      B(i, 0.05, 0.2, 0.04, o, 0, l - 0.02, -0.24));
  } else {
    if ((A(h, d, u, 0.09, 0.04, c, 0, u / 2, 0), a === `exec`)) {
      A(h, d * 0.7, 0.16, 0.06, 0.03, c, 0, u + 0.05, 0.02);
      for (let e = 1; e < 4; e++)
        B(h, d * 0.9, 0.006, 0.005, U(1118481, 0.6), 0, (e * u) / 4, 0.046);
    }
    B(i, 0.05, 0.2, 0.04, o, 0, l - 0.02, -0.25);
  }
  if (a !== `task` || n.chance(0.5))
    for (let e of [-1, 1])
      (C(
        i,
        [e * 0.24, l + 0.02, -0.02],
        [e * 0.26, l + 0.24, -0.02],
        0.016,
        s,
        6,
      ),
        A(i, 0.07, 0.03, 0.26, 0.012, s, e * 0.26, l + 0.25, 0));
  i.rotation.y = n.range(-0.3, 0.3);
  let g = new f();
  return (g.add(i), F(g));
}
function Ie(e) {
  let t = x(e),
    n = new f(),
    r = t.pick([1.2, 1.4, 1.6]),
    i = t.pick([0.7, 0.8]),
    a = 0.74,
    o = U(t.pick([15328991, R.oak, R.maple, 3815996, R.walnut]), 0.55),
    s = t.pick([U(2829359, 0.45, 0.6), U(15132387, 0.45, 0.4), O()]),
    c = t.chance(0.25);
  if ((z(n, r, 0.03, i, o, 0, 0.71, 0), c)) {
    for (let e of [-1, 1])
      (z(n, 0.07, 0.6699999999999999, 0.07, s, e * (r / 2 - 0.12), 0.02, 0),
        z(n, 0.07, 0.03, i * 0.85, s, e * (r / 2 - 0.12), 0, 0));
    z(n, r - 0.3, 0.05, 0.04, s, 0, 0.66, 0);
  } else {
    for (let e of [-1, 1])
      for (let t of [-1, 1])
        z(n, 0.05, 0.71, 0.05, s, e * (r / 2 - 0.05), 0, t * (i / 2 - 0.05));
    z(n, r - 0.1, 0.25, 0.015, s, 0, 0.42, -i / 2 + 0.06);
  }
  if (t.chance(0.5)) {
    let e = r / 2 - 0.26;
    S(n, 0.4, 0.6, 0.55, 0.01, s, e, 0.03, 0);
    for (let t = 0; t < 3; t++)
      (B(n, 0.38, 0.005, 0.005, U(1118481, 0.8), e, 0.25 + t * 0.16, 0.278),
        B(n, 0.12, 0.012, 0.012, k(), e, 0.2 + t * 0.16, 0.285));
  }
  let l = t.pick([1, 1, 2, 2, 2, 3]),
    u = l === 3 ? 0.5 : 0.56,
    d = u * 0.6,
    p = 0.02,
    m = l * u + (l - 1) * p;
  for (let e = 0; e < l; e++) {
    let r = -m / 2 + u / 2 + e * (u + p),
      o = l === 1 ? 0 : (e - (l - 1) / 2) * -0.3,
      s = new f();
    (s.position.set(
      r * (l === 3 ? 0.95 : 1),
      a,
      -i * 0.2 + Math.abs(e - (l - 1) / 2) * 0.08,
    ),
      (s.rotation.y = o),
      n.add(s),
      B(s, 0.2, 0.015, 0.16, E(), 0, 0.008, 0),
      B(s, 0.05, 0.3, 0.03, E(), 0, 0.16, -0.03),
      A(s, u, d, 0.025, 0.008, U(1381655, 0.5), 0, 0.12 + d / 2, 0),
      H(s, u - 0.02, d - 0.03, ke(t), 0, 0.125 + d / 2, 0.0131, {
        emissive: 0.9,
        rough: 0.25,
      }));
  }
  let h = new f();
  (h.position.set(0, a, i * 0.18),
    n.add(h),
    A(
      h,
      0.44,
      0.018,
      0.14,
      0.006,
      w(t.pick([2039843, 15263972])),
      0,
      0.009,
      0,
    ));
  let g = P(256, 80, (e) => {
    ((e.fillStyle = `#2a2b2e`),
      e.fillRect(0, 0, 256, 80),
      (e.fillStyle = `#44464b`));
    for (let t = 0; t < 5; t++)
      for (let n = 0; n < 16; n++) e.fillRect(3 + n * 16, 3 + t * 15.5, 13, 12);
  });
  if (
    ((H(h, 0.42, 0.12, g, 0, 0.019, 0, { rough: 0.6 }).rotation.x =
      -Math.PI / 2),
    A(n, 0.065, 0.035, 0.11, 0.02, w(2039843), 0.32, a, i * 0.2),
    t.chance(0.7) && Le(n, t, -r / 2 + 0.2, a, i * 0.2),
    t.chance(0.6))
  ) {
    let e = z(n, 0.15, 0.012, 0.21, U(16512728, 0.9), -0.36, a, i * 0.22);
    ((e.rotation.y = t.range(-0.3, 0.3)),
      (L(n, 0.004, 0.004, 0.14, w(1784458), -0.28, 0.755, i * 0.22).rotation.x =
        Math.PI / 2));
  }
  return (
    t.chance(0.5) && Re(n, t, r / 2 - 0.2, a, -i * 0.1),
    t.chance(0.3) &&
      ae(n, t, -r / 2 + 0.05, a, -i / 2 + 0.12, 0.25, { depth: 0.2 }),
    F(n)
  );
}
function Le(t, r, i, a, o) {
  let s = U(
    r.pick([16118766, 2899536, 12597547, 3046747, 15844367, 2039586]),
    0.35,
  );
  D(
    t,
    [
      [0, 0],
      [0.04, 0],
      [0.042, 0.095],
      [0.038, 0.095],
      [0.036, 0.01],
      [0, 0.01],
    ],
    s,
    i,
    a,
    o,
    20,
  );
  let c = new e(new n(0.025, 0.007, 8, 16, Math.PI), s);
  ((c.rotation.z = -Math.PI / 2),
    c.position.set(i + 0.04, a + 0.05, o),
    t.add(c),
    L(t, 0.036, 0.036, 0.002, U(3875862, 0.2), i, a + 0.08, o));
}
function Re(e, t, n, r, i) {
  let a = new f();
  (a.position.set(n, r, i), (a.rotation.y = t.range(-0.4, 0.1)), e.add(a));
  let o = w(2763566),
    s = A(a, 0.2, 0.05, 0.2, 0.015, o, 0, 0.03, 0);
  ((s.rotation.x = 0.15), A(a, 0.05, 0.035, 0.2, 0.015, o, -0.07, 0.075, 0));
  let c = P(64, 64, (e) => {
    ((e.fillStyle = `#2a2b2e`),
      e.fillRect(0, 0, 64, 64),
      (e.fillStyle = `#9aa`));
    for (let t = 0; t < 12; t++)
      e.fillRect(8 + (t % 3) * 18, 20 + Math.floor(t / 3) * 11, 12, 7);
    ((e.fillStyle = `#6fa8d8`), e.fillRect(6, 4, 52, 12));
  });
  H(a, 0.1, 0.1, c, 0.04, 0.058, 0.02, { rough: 0.5 }).rotation.x =
    -Math.PI / 2 + 0.15;
}
function ze(e) {
  let t = x(e),
    n = new f(),
    r = t.pick([2, 3, 4, 4]),
    i = t.chance(0.35),
    a = i ? 0.9 : 0.47,
    o = i ? 0.46 : 0.62,
    s = 0.33,
    c = r * s + 0.04,
    l = t.pick([14211283, 3816512, 15329249, 7041664, 3886138]),
    u = U(l, 0.45, 0.35);
  z(n, a, c, o, u, 0, 0, 0);
  for (let e = 0; e < r; e++) {
    let i = 0.03 + e * s,
      c = e === r - 1 && t.chance(0.2) ? 0.25 : 0;
    if ((z(n, a - 0.02, 0.318, 0.02, u, 0, i, o / 2 + 0.01 + c), c)) {
      z(
        n,
        a - 0.06,
        0.27,
        c,
        U(N(l, 0.8), 0.5, 0.3),
        0,
        i + 0.02,
        o / 2 + c / 2,
      );
      for (let e = 0; e < 8; e++)
        z(
          n,
          0.004,
          0.23,
          c * 0.9,
          U(t.pick([15255666, 14275240, 10469848]), 0.9),
          -a / 2 + 0.06 + e * 0.035,
          i + 0.05,
          o / 2 + c / 2,
        );
    }
    (B(n, 0.14, 0.02, 0.02, k(), 0, i + s * 0.62, o / 2 + 0.03 + c),
      B(
        n,
        0.07,
        0.035,
        0.004,
        U(16052710, 0.9),
        0,
        i + s * 0.78,
        o / 2 + 0.021 + c,
      ));
  }
  if (t.chance(0.5)) {
    let e = -a / 2 + 0.04;
    if (t.chance(0.5))
      ae(n, t, e, c, 0, Math.min(0.4, a - 0.1), { depth: 0.22 });
    else {
      let e = new f();
      (e.position.set(0, c, 0), n.add(e), Be(e, t));
    }
  }
  return F(n);
}
function Be(e, t) {
  D(
    e,
    [
      [0, 0],
      [0.05, 0],
      [0.065, 0.11],
      [0.06, 0.11],
    ],
    U(t.pick([11887934, 15328472, 2899536]), 0.7),
    0,
    0,
    0,
    16,
  );
  for (let n = 0; n < 8; n++) {
    let n = t() * 7,
      r = t.range(0.08, 0.16);
    B(
      e,
      0.025,
      r,
      0.004,
      U(4160058, 0.7),
      Math.cos(n) * 0.02,
      0.11 + r / 2,
      Math.sin(n) * 0.02,
    ).rotation.set(Math.sin(n) * 0.4, n, Math.cos(n) * 0.4);
  }
}
function Ve(e) {
  let t = x(e),
    n = new f(),
    r = t.pick([`drip`, `espresso`, `pod`]),
    i =
      r === `espresso`
        ? O()
        : w(t.pick([2039843, 2829359, 15329249, 11745850]));
  if (r === `drip`)
    (z(n, 0.24, 0.02, 0.26, i, 0, 0, 0),
      z(n, 0.24, 0.36, 0.1, i, 0, 0, -0.08),
      S(n, 0.24, 0.1, 0.26, 0.02, i, 0, 0.3, 0),
      D(
        n,
        [
          [0, 0],
          [0.07, 0],
          [0.08, 0.06],
          [0.07, 0.14],
          [0.05, 0.16],
          [0.055, 0.17],
        ],
        T(13624298, 0.35),
        0,
        0.02,
        0.04,
        24,
      ),
      L(n, 0.068, 0.07, 0.06, U(2759184, 0.1), 0, 0.02, 0.04),
      L(n, 0.055, 0.055, 0.03, w(2039843), 0, 0.17, 0.04),
      B(n, 0.06, 0.02, 0.004, V(16733491, 1.5), 0.06, 0.34, 0.131));
  else if (r === `espresso`) {
    (S(n, 0.3, 0.36, 0.3, 0.02, i, 0, 0, 0),
      z(n, 0.24, 0.02, 0.14, U(2763306, 0.4, 0.8), 0, 0.02, 0.1),
      L(n, 0.035, 0.035, 0.05, k(), 0, 0.2, 0.12),
      C(n, [0, 0.2, 0.12], [0, 0.19, 0.26], 0.01, w(1118481)),
      Le(n, t, 0, 0.04, 0.1));
    for (let e of [-0.08, 0.08])
      L(n, 0.02, 0.02, 0.012, k(), e, 0.33, 0.151).rotation.x = Math.PI / 2;
    (C(n, [0.12, 0.26, 0.1], [0.13, 0.1, 0.16], 0.005, k()),
      B(n, 0.1, 0.05, 0.004, V(5614335, 0.7), 0, 0.28, 0.151));
  } else
    (S(n, 0.15, 0.3, 0.3, 0.03, i, 0, 0, 0),
      S(n, 0.13, 0.08, 0.1, 0.02, i, 0, 0.3, 0.02),
      z(n, 0.13, 0.015, 0.1, U(3355443, 0.4, 0.6), 0, 0.02, 0.13),
      Le(n, t, 0, 0.035, 0.13),
      L(n, 0.06, 0.06, 0.3, T(12572904, 0.35), 0, 0, -0.11));
  return F(n);
}
function He(t) {
  let i = x(t),
    a = new f(),
    o = i.pick([`mesh`, `plastic`, `recycle`, `pedal`]);
  if (o === `mesh`) {
    let t = new e(
      new g(0.15, 0.12, 0.33, 24, 1, !0),
      new r({
        color: 2236962,
        metalness: 0.6,
        roughness: 0.5,
        side: 2,
        alphaTest: 0.4,
        alphaMap: P(64, 64, (e) => {
          ((e.fillStyle = `#000`),
            e.fillRect(0, 0, 64, 64),
            (e.fillStyle = `#fff`));
          for (let t = 0; t < 64; t += 5)
            for (let n = 0; n < 64; n += 5) e.fillRect(t, n, 3, 3);
        }),
      }),
    );
    ((t.material.alphaMap.wrapS = t.material.alphaMap.wrapT = p),
      t.material.alphaMap.repeat.set(10, 5),
      (t.position.y = 0.165),
      (t.castShadow = !0),
      a.add(t),
      L(a, 0.12, 0.12, 0.01, U(2236962, 0.5, 0.6), 0, 0, 0));
    let o = new e(new n(0.15, 0.006, 6, 32), U(2236962, 0.5, 0.6));
    ((o.rotation.x = Math.PI / 2), (o.position.y = 0.33), a.add(o));
    for (let e = 0; e < 3; e++)
      b(
        a,
        0.04,
        U(15921902, 0.95),
        i.range(-0.05, 0.05),
        0.05 + e * 0.05,
        i.range(-0.05, 0.05),
        6,
      );
  } else if (o === `recycle`)
    for (let [e, t] of [
      [-0.2, 1989567],
      [0.2, 3050298],
    ])
      (S(a, 0.38, 0.72, 0.4, 0.03, w(t), e, 0, 0),
        B(a, 0.2, 0.02, 0.05, U(1118481, 0.8), e, 0.72, 0.05));
  else
    o === `pedal`
      ? (D(
          a,
          [
            [0, 0],
            [0.13, 0],
            [0.14, 0.02],
            [0.14, 0.44],
            [0, 0.44],
          ],
          O(),
          0,
          0,
          0,
          28,
        ),
        D(
          a,
          [
            [0.142, 0],
            [0.142, 0.03],
            [0.1, 0.06],
            [0, 0.07],
          ],
          O(),
          0,
          0.44,
          0,
          28,
        ),
        B(a, 0.1, 0.02, 0.06, E(), 0, 0.02, 0.16))
      : D(
          a,
          [
            [0, 0],
            [0.12, 0],
            [0.15, 0.32],
            [0.155, 0.33],
            [0.145, 0.33],
            [0.115, 0.01],
            [0, 0.01],
          ],
          w(i.pick([2763566, 7041664, 15329249])),
          0,
          0,
          0,
          24,
        );
  return F(a);
}
function Ue(e) {
  let t = x(e),
    n = new f(),
    r = t.pick([U(1710618, 0.3), U(R.walnut, 0.5), O()]);
  z(n, 0.2, 0.02, 0.12, r, 0, 0, 0);
  for (let e of [-0.045, 0.045])
    (C(n, [-0.085, 0.02, e], [-0.085, 0.16, e], 0.003, k()),
      C(n, [0.085, 0.02, e], [0.085, 0.16, e], 0.003, k()),
      C(n, [-0.085, 0.16, e], [0.085, 0.16, e], 0.003, k()));
  let i = t.chance(0.6) ? 0.5 : 0;
  for (let e = 0; e < 5; e++) {
    let t = (e - 2) * 0.0255,
      r = e === 0 ? -i : 0,
      a = t - Math.sin(-r) * 0.09,
      o = 0.16 - Math.cos(r) * 0.09;
    for (let e of [-0.045, 0.045])
      C(n, [t, 0.16, e], [a, o, 0], 6e-4, U(13421772, 0.5), 3);
    b(n, 0.0125, k(), a, o, 0, 16);
  }
  return F(n);
}
function We(i) {
  let a = x(i),
    o = new f(),
    s = a.range(0.1, 0.16),
    c = a.chance(0.5),
    l = P(512, 256, (e, t, n) => {
      ((e.fillStyle = c ? `#c9b98a` : `#5f9ccf`),
        e.fillRect(0, 0, t, n),
        (e.fillStyle = c
          ? `#8c6d3f`
          : a.pick([`#e2d7a6`, `#9cc28a`, `#e9a97a`])));
      for (let r = 0; r < 9; r++) {
        e.beginPath();
        let r = a() * t,
          i = n * a.range(0.2, 0.8),
          o = a.range(20, 70);
        for (let t = 0; t <= 14; t++) {
          let n = (t / 14) * 7,
            s = o * a.range(0.5, 1.3);
          e[t ? `lineTo` : `moveTo`](
            r + Math.cos(n) * s * 1.3,
            i + Math.sin(n) * s,
          );
        }
        e.fill();
      }
      e.strokeStyle = c ? `rgba(80,50,20,0.4)` : `rgba(255,255,255,0.35)`;
      for (let r = 0; r < t; r += t / 12)
        (e.beginPath(), e.moveTo(r, 0), e.lineTo(r, n), e.stroke());
      for (let r = 0; r < n; r += n / 6)
        (e.beginPath(), e.moveTo(0, r), e.lineTo(t, r), e.stroke());
    }),
    u = c ? U(R.walnut, 0.5) : a.pick([O(), U(12095807, 0.3, 0.9)]);
  D(
    o,
    [
      [0, 0],
      [s * 0.7, 0],
      [s * 0.7, 0.015],
      [s * 0.25, 0.03],
      [0.012, s * 0.4],
      [0.012, s * 0.6],
    ],
    u,
    0,
    0,
    0,
    24,
  );
  let d = s * 0.6 + s + 0.02,
    p = new e(new t(s, 32, 16), new r({ map: l, roughness: c ? 0.6 : 0.3 }));
  ((p.position.y = d),
    (p.rotation.z = 0.41),
    (p.rotation.y = a() * 6),
    (p.castShadow = !0),
    o.add(p));
  let m = new e(
    new n(s + 0.01, 0.004, 6, 48, Math.PI * 1.2),
    u === O() ? k() : u,
  );
  return (
    (m.position.y = d),
    (m.rotation.z = Math.PI / 2 + 0.41 - 0.6),
    (m.rotation.y = Math.PI / 2),
    o.add(m),
    F(o)
  );
}
function Ge(t) {
  let r = x(t),
    i = new f(),
    a = r.pick([`cup`, `cup`, `star`, `plaque`, `crystal`]),
    o = U(r.pick([13938487, 12632256, 13467442]), 0.25, 0.95),
    s = r.pick([U(1710618, 0.4), U(R.walnut, 0.5), U(16052714, 0.3)]);
  if (a === `plaque`) {
    let e = new f();
    return (
      (e.rotation.x = -0.12),
      i.add(e),
      z(e, 0.18, 0.24, 0.02, U(R.walnut, 0.5), 0, 0, 0),
      z(e, 0.14, 0.16, 0.004, o, 0, 0.05, 0.012),
      z(i, 0.1, 0.02, 0.08, s, 0, 0, 0.02),
      F(i)
    );
  }
  if (
    (z(i, 0.1, 0.05, 0.1, s, 0, 0, 0),
    z(i, 0.08, 0.04, 0.08, s, 0, 0.05, 0),
    z(i, 0.05, 0.015, 0.002, o, 0, 0.02, 0.051),
    a === `cup`)
  ) {
    D(
      i,
      [
        [0, 0],
        [0.03, 0],
        [0.012, 0.02],
        [0.01, 0.06],
        [0.02, 0.08],
        [0.05, 0.11],
        [0.058, 0.17],
        [0.05, 0.17],
      ],
      o,
      0,
      0.09,
      0,
      28,
    );
    for (let t of [-1, 1]) {
      let r = new e(new n(0.025, 0.004, 6, 16, Math.PI), o);
      ((r.rotation.z = (t * -Math.PI) / 2),
        r.position.set(t * 0.055, 0.22, 0),
        i.add(r));
    }
  } else if (a === `star`) {
    L(i, 0.008, 0.008, 0.12, o, 0, 0.09, 0);
    let t = [];
    for (let e = 0; e < 10; e++) {
      let n = (e / 10) * Math.PI * 2 + Math.PI / 2,
        r = e % 2 ? 0.025 : 0.06;
      t.push([Math.cos(n) * r, Math.sin(n) * r]);
    }
    let n = new y(t.map(([e, t]) => new l(e, t))),
      r = new e(
        new _(n, {
          depth: 0.012,
          bevelEnabled: !0,
          bevelSize: 0.003,
          bevelThickness: 0.003,
        }),
        o,
      );
    (r.position.set(0, 0.26, -0.006), (r.castShadow = !0), i.add(r));
  } else {
    let e = A(i, 0.07, 0.2, 0.04, 0.01, T(14676735, 0.5, 0.02), 0, 0.19, 0);
    e.rotation.z = 0.08;
  }
  return F(i);
}
function Ke(t) {
  let r = x(t),
    i = new f(),
    a = U(r.pick([2039586, 12597547, 2899536, 15329249, 7041664]), 0.4);
  D(
    i,
    [
      [0, 0],
      [0.037, 0],
      [0.037, 0.1],
      [0.034, 0.1],
      [0.034, 0.005],
      [0, 0.005],
    ],
    r.chance(0.5) ? a : U(3355443, 0.5, 0.6),
    -0.14,
    0,
    0,
    20,
  );
  for (let e = 0; e < r.int(3, 7); e++) {
    let e = r() * 7,
      t = r.range(0.13, 0.16);
    L(
      i,
      0.004,
      0.004,
      t,
      U(r.pick([1784458, 1118481, 12597547, 15844367, 15263972]), 0.5),
      -0.14 + Math.cos(e) * 0.015,
      0.005,
      Math.sin(e) * 0.015,
      6,
    ).rotation.set(Math.sin(e) * 0.2, 0, Math.cos(e) * 0.2);
  }
  let o = new f();
  (o.position.set(0, 0, 0.02),
    (o.rotation.y = r.range(-0.5, 0.5)),
    i.add(o),
    A(o, 0.04, 0.02, 0.16, 0.008, U(2763306, 0.5), 0, 0.01, 0),
    A(o, 0.036, 0.03, 0.15, 0.012, a, 0, 0.037, -0.004));
  let s = new f();
  (s.position.set(0.14, 0, 0),
    (s.rotation.y = r.range(-0.4, 0.4)),
    i.add(s),
    A(
      s,
      0.05,
      0.05,
      0.13,
      0.015,
      r.chance(0.5) ? a : U(1710618, 0.4),
      0,
      0.025,
      0,
    ));
  let c = new e(new n(0.028, 0.008, 8, 20), T(15788752, 0.6, 0.2));
  return (
    (c.rotation.y = Math.PI / 2),
    c.position.set(0, 0.065, -0.01),
    i.add(c),
    c.position.add(s.position),
    z(
      i,
      0.075,
      0.05,
      0.075,
      U(r.pick([16773754, 16757703, 11789823]), 0.9),
      0.05,
      0,
      -0.1,
    ),
    F(i)
  );
}
function qe(e) {
  let t = x(e),
    n = new f(),
    r = t.pick([1, 1, 2]);
  for (let e = 0; e < r; e++) {
    let i = t.pick([0.1, 0.13, 0.15]),
      a = t.chance(0.5) ? i * 1.3 : i * 0.77,
      o = P(Math.round(i * 800), Math.round(a * 800), (e, n, r) =>
        t.chance(0.8) ? Je(e, n, r, t) : le(e, n, r, t),
      ),
      s = new f();
    (s.position.set((e - (r - 1) / 2) * 0.2, 0, 0),
      (s.rotation.y = (e - (r - 1) / 2) * -0.4),
      n.add(s));
    let c = new f();
    ((c.rotation.x = -0.18),
      (c.position.y = a / 2 + 0.04),
      s.add(c),
      de(c, t, i, a, o, 0, 0, 0),
      C(s, [0, 0.03, -0.01], [0, 0.005, -0.08], 0.003, U(2236962, 0.6)));
  }
  return F(n);
}
function Je(e, t, n, r) {
  let i = e.createLinearGradient(0, 0, 0, n);
  (i.addColorStop(0, `#9fc1de`),
    i.addColorStop(0.6, `#e9ecef`),
    i.addColorStop(0.61, `#7b9a5a`),
    i.addColorStop(1, `#4f6a3a`),
    (e.fillStyle = i),
    e.fillRect(0, 0, t, n));
  let a = r.int(1, 3);
  for (let r = 0; r < a; r++) {
    let i = (t * (r + 1)) / (a + 1),
      o = n * 0.22;
    ((e.fillStyle = [`#3d5a80`, `#ee6c4d`, `#8a5a44`][r % 3]),
      e.fillRect(i - o * 0.4, n - o * 1.8, o * 0.8, o * 1.8),
      (e.fillStyle = [`#f1c8a0`, `#a46c4a`, `#e8b894`][r % 3]),
      e.fillRect(i - o * 0.33, n - o * 2.5, o * 0.66, o * 0.66));
  }
}
function Ye(t) {
  let r = x(t),
    i = new f(),
    a = r.pick([
      `ring`,
      `cubie`,
      `bookends`,
      `hourglass`,
      `paperweight`,
      `orb`,
    ]),
    o = U(r.pick(I), 0.3, r.chance(0.3) ? 0.8 : 0);
  if (a === `ring`) {
    z(i, 0.08, 0.02, 0.06, U(1710618, 0.4), 0, 0, 0);
    let t = new e(new n(0.08, 0.018, 12, 40), o);
    ((t.position.y = 0.1), (t.castShadow = !0), i.add(t));
  } else if (a === `cubie`) {
    (z(i, 0.07, 0.02, 0.07, U(1710618, 0.4), 0, 0, 0),
      S(i, 0.05, 0.06, 0.035, 0.006, o, 0, 0.02, 0),
      S(i, 0.05, 0.05, 0.05, 0.006, o, 0, 0.08, 0));
    for (let e of [-1, 1])
      z(i, 0.008, 0.008, 0.002, U(1118481, 0.4), e * 0.012, 0.11, 0.026);
  } else if (a === `bookends`) {
    for (let e of [-1, 1])
      (z(i, 0.1, 0.012, 0.14, o, e * 0.14, 0, 0),
        z(i, 0.012, 0.16, 0.14, o, e * 0.094, 0, 0));
    ae(i, r, -0.085, 0, 0, 0.17, { depth: 0.13, lean: !1 });
  } else if (a === `hourglass`) {
    let e = U(R.walnut, 0.5);
    for (let t of [0, 0.19]) L(i, 0.045, 0.045, 0.015, e, 0, t, 0);
    for (let t = 0; t < 3; t++) {
      let n = (t / 3) * Math.PI * 2;
      C(
        i,
        [Math.cos(n) * 0.035, 0.015, Math.sin(n) * 0.035],
        [Math.cos(n) * 0.035, 0.19, Math.sin(n) * 0.035],
        0.004,
        e,
      );
    }
    (D(
      i,
      [
        [0, 0.015],
        [0.028, 0.02],
        [0.03, 0.05],
        [0.006, 0.1],
        [0.03, 0.15],
        [0.028, 0.185],
        [0, 0.19],
      ],
      T(15267071, 0.3),
      0,
      0,
      0,
      20,
    ),
      D(
        i,
        [
          [0, 0.016],
          [0.026, 0.02],
          [0.02, 0.05],
          [0, 0.055],
        ],
        U(14729344, 0.9),
        0,
        0,
        0,
        16,
      ));
  } else if (a === `paperweight`) {
    let e = b(
      i,
      0.04,
      T(r.pick([10475775, 16757721, 11796431]), 0.55, 0.02),
      0,
      0.035,
      0,
      24,
    );
    ((e.scale.y = 0.85),
      b(
        i,
        0.02,
        V(r.pick([16737945, 5614335, 16755251]), 0.4),
        0,
        0.03,
        0,
        10,
      ));
  } else
    (L(i, 0.04, 0.05, 0.03, U(1710618, 0.4), 0, 0, 0),
      b(i, 0.065, o, 0, 0.09, 0, 24));
  return F(i);
}
var Xe = [
    {
      key: `cooler`,
      name: `Water cooler`,
      desc: `Top-jug or bottom-load, hot and cold taps, cup dispenser`,
      build: Ae,
    },
    {
      key: `copier`,
      name: `Office copier`,
      desc: `Floor-standing multifunction printer with drawers, feeder and touch panel`,
      build: je,
    },
    {
      key: `printer`,
      name: `Desktop printer`,
      desc: `Laser printer with output tray and status panel`,
      build: Me,
    },
    {
      key: `scanner`,
      name: `Flatbed scanner`,
      desc: `With or without a document feeder`,
      build: Ne,
    },
    {
      key: `shredder`,
      name: `Shredder`,
      desc: `Clear or dark bin, shreds showing`,
      build: Pe,
    },
    {
      key: `chair`,
      name: `Office chair`,
      desc: `Mesh, executive or task chair on a five-star base`,
      build: Fe,
    },
    {
      key: `workstation`,
      name: `Workstation`,
      desc: `Desk (fixed or standing), 1-3 monitors, keyboard, mouse, mug, phone, pedestal`,
      build: Ie,
    },
    {
      key: `filing`,
      name: `Filing cabinet`,
      desc: `2-4 drawer vertical or lateral, sometimes a drawer open`,
      build: ze,
    },
    {
      key: `coffee`,
      name: `Coffee machine`,
      desc: `Drip, espresso or pod`,
      build: Ve,
    },
    {
      key: `bin`,
      name: `Waste bin`,
      desc: `Mesh, plastic, pedal or recycling pair`,
      build: He,
    },
  ].map((e) => ({ ...e, cat: `office` })),
  Ze = [
    {
      key: `newton`,
      name: `Newton's cradle`,
      desc: `Chrome balls, one pulled back`,
      build: Ue,
    },
    {
      key: `globe`,
      name: `Desk globe`,
      desc: `Modern or antique on a stand`,
      build: We,
    },
    {
      key: `trophy`,
      name: `Trophy`,
      desc: `Cup, star, crystal or plaque in gold, silver or bronze`,
      build: Ge,
    },
    {
      key: `deskset`,
      name: `Desk set`,
      desc: `Pen cup, stapler, tape dispenser and sticky notes`,
      build: Ke,
    },
    {
      key: `deskframe`,
      name: `Desk photo`,
      desc: `One or two framed photos on easel backs`,
      build: qe,
    },
    {
      key: `figurine`,
      name: `Ornament`,
      desc: `Sculpture ring, Cubie bust, bookends, hourglass, paperweight or orb`,
      build: Ye,
    },
  ].map((e) => ({ ...e, cat: `desk` })),
  K = (e) =>
    U(
      e.pick([
        R.oak,
        R.walnut,
        R.cherry,
        R.maple,
        R.espresso,
        R.ash,
        R.white,
        R.black,
      ]),
      0.55,
    );
function q(e, t, n, r, i, a, o, s = 0.06) {
  for (let t of [-1, 1])
    for (let c of [-1, 1]) {
      let l = t * (n / 2 - s),
        u = c * (r / 2 - s);
      if (a === `taper`) {
        let n = L(e, 0.018, 0.012, i, o, l, 0, u, 10);
        (n.rotation.set(c * 0.12, 0, -t * 0.12), (n.position.x += t * 0.012));
      } else
        a === `block`
          ? z(e, 0.06, i, 0.06, o, l, 0, u)
          : a === `bun`
            ? b(e, i * 0.6, o, l, i * 0.55, u, 10)
            : a === `metal`
              ? z(e, 0.02, i, 0.02, E(), l, 0, u)
              : L(e, 0.02, 0.02, i, o, l, 0, u, 10);
    }
}
function Qe(e) {
  let t = x(e),
    n = new f(),
    r = t.pick([2, 3, 3, 3]),
    i = t.chance(0.2),
    a = U(
      i ? t.pick([5911842, 2759959, 9067066, 1842206]) : t.pick(oe),
      i ? 0.45 : 0.95,
    ),
    o = t.range(0.6, 0.7),
    s = t.pick([0.12, 0.18, 0.24]),
    c = r * o + 2 * s,
    l = t.range(0.88, 0.98),
    u = t.pick([0.04, 0.1, 0.14, 0.18]),
    d = t.pick([`taper`, `block`, `bun`, `metal`, `round`]),
    p = K(t);
  u > 0.05 && q(n, t, c - 0.04, l - 0.06, u, d, p, 0.05);
  let m = u,
    h = i ? 0.03 : 0.05;
  (S(n, c, 0.2, l, 0.03, a, 0, m, 0),
    S(n, c - 2 * s + 0.02, 0.44, 0.2, h, a, 0, m + 0.1, -l / 2 + 0.1));
  for (let e of [-1, 1])
    S(
      n,
      s,
      t.chance(0.8) ? 0.42 : 0.36,
      l,
      h,
      a,
      e * (c / 2 - s / 2),
      m + 0.05,
      0,
    );
  for (let e = 0; e < r; e++) {
    let t = -c / 2 + s + o / 2 + e * o;
    S(n, o - 0.01, 0.15, l - 0.24, 0.05, a, t, m + 0.2, 0.08);
    let r = A(
      n,
      o - 0.02,
      0.44,
      0.16,
      0.06,
      a,
      t,
      m + 0.44 + 0.14,
      -l / 2 + 0.26,
    );
    r.rotation.x = -0.14;
  }
  let g = [
    t.pick(oe),
    t.pick([14263361, 13129021, 2976335, 15854816, 2508371, 10166822]),
  ];
  for (let e of [-1, 1])
    if (t.chance(0.8)) {
      let r = t.int(1, 2);
      for (let t = 0; t < r; t++)
        A(
          n,
          0.42 - t * 0.04,
          0.42 - t * 0.04,
          0.13,
          0.06,
          U(g[t], 0.95),
          e * (c / 2 - s - 0.25 - t * 0.1),
          m + 0.53,
          -l / 2 + 0.36 + t * 0.08,
        ).rotation.set(-0.3, e * -0.35, e * 0.1);
    }
  return (
    t.chance(0.35) &&
      A(
        n,
        0.5,
        0.5,
        0.03,
        0.012,
        U(t.pick([15327695, 9083530, 11569512, 7041116]), 0.95),
        c / 2 - s - 0.1,
        m + 0.46,
        0.05,
      ).rotation.set(-1.2, 0.2, 0.1),
    F(n, { note: `${r}-seat${i ? ` leather` : ``}` })
  );
}
function $e(e) {
  let t = x(e),
    n = new f(),
    r = U(t.pick(oe), 0.95),
    i = 0.95,
    a = 0.68,
    o = t.pick([3, 3, 4]),
    s = o * a + 0.3,
    c = 0.06,
    l = t.range(1.6, 1.9),
    u = t.chance(0.5) ? 1 : -1;
  (S(n, s, 0.2, i, 0.03, r, 0, c, 0),
    S(n, s - 0.15, 0.44, 0.2, 0.05, r, -u * 0.075, 0.16, -0.375),
    S(n, 0.15, 0.4, i, 0.05, r, -u * (s / 2 - 0.075), 0.11, 0));
  let d = u * (s / 2 - i / 2);
  (S(n, i, 0.2, l, 0.03, r, d, c, -0.95 / 2 + l / 2),
    S(
      n,
      0.9299999999999999,
      0.15,
      l - 0.24,
      0.05,
      r,
      d,
      0.26,
      -0.95 / 2 + l / 2 + 0.1,
    ));
  for (let e = 0; e < o - 1; e++) {
    let t = -u * (s / 2 - 0.15 - a / 2 - e * a);
    S(n, 0.67, 0.15, 0.71, 0.05, r, t, 0.26, 0.08);
    let i = A(
      n,
      0.66,
      0.44,
      0.16,
      0.06,
      r,
      t,
      0.6399999999999999,
      -0.95 / 2 + 0.26,
    );
    i.rotation.x = -0.14;
  }
  let p = A(
    n,
    0.85,
    0.44,
    0.16,
    0.06,
    r,
    d,
    0.6399999999999999,
    -0.95 / 2 + 0.26,
  );
  p.rotation.x = -0.14;
  for (let e = 0; e < t.int(2, 4); e++)
    A(
      n,
      0.42,
      0.42,
      0.13,
      0.06,
      U(
        t.pick([14263361, 13129021, 2976335, 15854816, 2508371, t.pick(oe)]),
        0.95,
      ),
      -u * (s / 2 - 0.4) + u * e * 0.55,
      0.6100000000000001,
      -0.95 / 2 + 0.36,
    ).rotation.set(-0.3, 0, t.range(-0.15, 0.15));
  return F(n);
}
function et(e) {
  let t = x(e),
    n = new f(),
    r = t.pick([`club`, `wingback`, `midcentury`, `slipper`]),
    i = r === `club` && t.chance(0.5),
    a = U(
      i ? t.pick([5911842, 9067066, 2759959]) : t.pick(oe),
      i ? 0.45 : 0.95,
    ),
    o = K(t);
  if (r === `midcentury`) {
    let e = U(R.walnut, 0.5);
    (q(n, t, 0.66, 0.7, 0.2, `taper`, e, 0.07),
      S(n, 0.66, 0.06, 0.72, 0.01, e, 0, 0.2, 0),
      S(n, 0.6, 0.12, 0.62, 0.04, a, 0, 0.26, 0.03));
    let r = A(n, 0.6, 0.5, 0.1, 0.04, a, 0, 0.62, -0.28);
    r.rotation.x = -0.2;
    for (let t of [-1, 1])
      (z(n, 0.05, 0.035, 0.6, e, t * 0.33, 0.52, 0),
        C(n, [t * 0.33, 0.26, 0.25], [t * 0.33, 0.52, 0.25], 0.015, e));
  } else if (r === `wingback`) {
    (q(n, t, 0.76, 0.76, 0.14, t.pick([`taper`, `bun`, `round`]), o, 0.07),
      S(n, 0.8, 0.26, 0.82, 0.04, a, 0, 0.14, 0),
      S(n, 0.62, 0.12, 0.62, 0.05, a, 0, 0.4, 0.07),
      (A(n, 0.72, 0.8, 0.16, 0.05, a, 0, 0.8, -0.34).rotation.x = -0.08));
    for (let e of [-1, 1]) {
      S(n, 0.1, 0.26, 0.7, 0.05, a, e * 0.35, 0.4, 0.02);
      let t = A(n, 0.1, 0.44, 0.34, 0.05, a, e * 0.35, 0.9, -0.2);
      t.rotation.y = e * 0.25;
    }
  } else if (r === `slipper`)
    (q(n, t, 0.6, 0.66, 0.2, t.pick([`taper`, `metal`]), o, 0.06),
      S(n, 0.62, 0.22, 0.7, 0.05, a, 0, 0.2, 0),
      (A(n, 0.6, 0.6, 0.16, 0.06, a, 0, 0.68, -0.28).rotation.x = -0.15));
  else {
    (z(n, 0.84, 0.04, 0.84, U(2236962, 0.8), 0, 0, 0),
      S(n, 0.86, 0.36, 0.86, 0.06, a, 0, 0.04, 0),
      S(n, 0.58, 0.14, 0.64, 0.06, a, 0, 0.4, 0.08),
      S(n, 0.86, 0.36, 0.22, 0.08, a, 0, 0.36, -0.32));
    for (let e of [-1, 1]) S(n, 0.16, 0.26, 0.86, 0.08, a, e * 0.35, 0.36, 0);
  }
  if (t.chance(0.4)) {
    let e = A(
      n,
      0.36,
      0.36,
      0.12,
      0.06,
      U(t.pick([14263361, 13129021, 15854816, 2508371]), 0.95),
      0,
      0.62,
      -0.18,
    );
    e.rotation.x = -0.25;
  }
  return F(n, { note: r });
}
function tt(e) {
  let t = x(e),
    n = new f(),
    r = t.chance(0.6),
    i = U(
      r ? t.pick([5911842, 2759959, 3815996, 7031350]) : t.pick(oe),
      r ? 0.45 : 0.95,
    ),
    a = t.chance(0.4);
  (S(n, 0.9, 0.42, 0.9, 0.06, i, 0, 0.02, 0),
    S(n, 0.62, 0.16, 0.66, 0.07, i, 0, 0.42, 0.08));
  for (let e of [-1, 1]) S(n, 0.16, 0.24, 0.9, 0.07, i, e * 0.37, 0.42, 0);
  let o = new f();
  (o.position.set(0, 0.46, -0.3), (o.rotation.x = a ? -0.55 : -0.18), n.add(o));
  for (let e = 0; e < 3; e++)
    A(o, 0.64, 0.24, 0.2, 0.08, i, 0, 0.14 + e * 0.22, 0);
  if (a) {
    let e = A(n, 0.6, 0.12, 0.42, 0.05, i, 0, 0.38, 0.62);
    e.rotation.x = 0.15;
  } else A(n, 0.6, 0.3, 0.1, 0.04, i, 0, 0.26, 0.44);
  return (B(n, 0.02, 0.1, 0.03, E(), 0.46, 0.36, 0.2), F(n));
}
function nt(t) {
  let r = x(t),
    i = new f(),
    a = r.pick([`spindle`, `ladder`, `parsons`, `bentwood`, `metal`, `shaker`]),
    o = K(r),
    s = U(r.pick(oe), 0.95),
    c = 0.46,
    l = 0.44,
    u = 0.46;
  if (a === `parsons`) {
    for (let e of [-1, 1])
      for (let t of [-1, 1])
        z(i, 0.04, 0.38, 0.04, o, e * (l / 2 - 0.03), 0, t * (u / 2 - 0.03));
    (S(i, l, 0.1, u, 0.03, s, 0, 0.36, 0),
      S(i, l, 0.5, 0.08, 0.03, s, 0, c, -0.19));
  } else if (a === `metal`) {
    let e = r.pick([
      U(2039586, 0.5, 0.6),
      U(11745850, 0.4, 0.5),
      U(15329249, 0.4, 0.5),
      U(2976335, 0.4, 0.5),
    ]);
    for (let t of [-1, 1])
      for (let n of [-1, 1])
        z(
          i,
          0.025,
          c,
          0.025,
          e,
          t * (l / 2 - 0.03),
          0,
          n * (u / 2 - 0.03),
        ).rotation.set(n * 0.05, 0, -t * 0.05);
    z(i, l, 0.025, u, e, 0, 0.435, 0);
    let t = z(i, l, 0.3, 0.02, e, 0, 0.56, -0.22);
    t.rotation.x = -0.08;
    for (let e = 0; e < 4; e++)
      z(
        i,
        0.38,
        0.01,
        0.001,
        U(0, 1),
        0,
        0.6000000000000001 + e * 0.05,
        -0.46 / 2 + 0.025,
      );
  } else {
    let t = o;
    if (a === `bentwood`) {
      for (let e of [-1, 1])
        for (let n of [-1, 1])
          L(
            i,
            0.015,
            0.012,
            c,
            t,
            e * (l / 2 - 0.05),
            0,
            n * (u / 2 - 0.05),
            10,
          );
      let r = new e(new n(0.17, 0.008, 6, 24), t);
      ((r.rotation.x = Math.PI / 2), (r.position.y = 0.18), i.add(r));
    } else
      for (let e of [-1, 1])
        for (let n of [-1, 1])
          z(
            i,
            0.035,
            0.43000000000000005,
            0.035,
            t,
            e * (l / 2 - 0.03),
            0,
            n * (u / 2 - 0.03),
          );
    if (a !== `bentwood`)
      for (let e of [-1, 1])
        z(i, 0.02, 0.02, 0.4, t, e * (l / 2 - 0.03), 0.15, 0);
    (a === `bentwood`
      ? L(i, 0.21, 0.21, 0.03, t, 0, 0.43000000000000005, 0, 28)
      : S(i, l, 0.035, u, 0.01, t, 0, 0.42500000000000004, 0),
      r.chance(0.4) && S(i, 0.4, 0.04, 0.4, 0.018, s, 0, c, 0.01));
    for (let e of [-1, 1]) {
      let n = z(i, 0.035, 0.44, 0.035, t, e * (l / 2 - 0.03), c, -0.2);
      n.rotation.x = -0.1;
    }
    if (a === `spindle`) {
      z(i, 0.42, 0.06, 0.03, t, 0, 0.9 - 0.06, -0.225);
      for (let e = 0; e < 5; e++)
        L(
          i,
          0.008,
          0.008,
          0.36,
          t,
          -0.13 + (e * 0.26) / 4,
          c,
          -0.46 / 2 + 0.02,
          8,
        );
    } else if (a === `ladder`)
      for (let e = 0; e < 3; e++)
        z(i, 0.38, 0.05, 0.02, t, 0, 0.5900000000000001 + e * 0.1, -0.22);
    else if (a === `shaker`) {
      z(i, 0.38, 0.1, 0.02, t, 0, 0.76, -0.22);
      for (let e = 0; e < 3; e++)
        z(i, 0.04, 0.26, 0.015, t, (e - 1) * 0.1, 0.5, -0.22);
    } else A(i, 0.42, 0.2, 0.02, 0.01, t, 0, 0.78, -0.22);
  }
  return F(i, { note: a });
}
function rt(e) {
  let t = x(e),
    n = new f(),
    r = t.pick([`wood`, `glass`, `round`, `trunk`, `marble`]),
    i = t.range(0.38, 0.46),
    a = K(t);
  if (r === `round` || r === `marble`) {
    let e = t.range(0.4, 0.5),
      o = r === `marble` ? U(15526630, 0.2) : a;
    if ((L(n, e, e, 0.04, o, 0, i - 0.04, 0, 40), t.chance(0.5)))
      L(
        n,
        0.12,
        0.2,
        i - 0.04,
        r === `marble` ? U(12095807, 0.3, 0.9) : a,
        0,
        0,
        0,
        24,
      );
    else
      for (let t = 0; t < 3; t++) {
        let r = (t / 3) * Math.PI * 2;
        C(
          n,
          [Math.cos(r) * e * 0.6, 0, Math.sin(r) * e * 0.6],
          [Math.cos(r) * e * 0.4, i - 0.04, Math.sin(r) * e * 0.4],
          0.018,
          a,
        );
      }
  } else if (r === `glass`) {
    let e = t.range(1, 1.3),
      r = 0.6,
      a = t.pick([k(), E(), U(12095807, 0.3, 0.9)]);
    z(n, e, 0.012, r, T(14282480, 0.3), 0, i - 0.012, 0);
    for (let t of [-1, 1])
      (C(
        n,
        [t * (e / 2 - 0.05), 0, -0.25],
        [t * (e / 2 - 0.05), i - 0.012, -0.25],
        0.012,
        a,
      ),
        C(
          n,
          [t * (e / 2 - 0.05), 0, r / 2 - 0.05],
          [t * (e / 2 - 0.05), i - 0.012, r / 2 - 0.05],
          0.012,
          a,
        ),
        C(
          n,
          [t * (e / 2 - 0.05), 0.01, -0.25],
          [t * (e / 2 - 0.05), 0.01, r / 2 - 0.05],
          0.012,
          a,
        ));
    z(n, e - 0.1, 0.01, 0.5, T(14282480, 0.3), 0, 0.1, 0);
  } else if (r === `trunk`) {
    S(
      n,
      1,
      i,
      0.55,
      0.01,
      U(t.pick([7031350, 3811874, 9071178]), 0.75),
      0,
      0,
      0,
    );
    for (let e of [-0.35, 0.35])
      z(n, 0.04, i + 0.004, 0.554, U(2763306, 0.4, 0.8), e, -0.002, 0);
    B(n, 0.08, 0.06, 0.01, U(12095807, 0.3, 0.9), 0, i - 0.08, 0.28);
  } else {
    let e = t.range(1, 1.3),
      r = t.range(0.55, 0.65);
    (z(n, e, 0.04, r, a, 0, i - 0.04, 0),
      q(
        n,
        t,
        e,
        r,
        i - 0.04,
        t.pick([`block`, `taper`, `round`, `metal`]),
        a,
        0.06,
      ),
      t.chance(0.6) && z(n, e - 0.12, 0.02, r - 0.12, a, 0, 0.12, 0));
  }
  let o = i + 0;
  if (t.chance(0.7)) {
    let e = new f();
    (e.position.set(t.range(-0.3, 0), o, t.range(-0.1, 0.1)),
      (e.rotation.y = t.range(-0.3, 0.3)),
      n.add(e));
    let r = 0;
    for (let n = 0; n < t.int(1, 3); n++) {
      let n = t.range(0.02, 0.035);
      (z(
        e,
        t.range(0.22, 0.3),
        n,
        t.range(0.28, 0.34),
        U(t.pick([15328472, 2899536, 10697515, 3889722, 2039586]), 0.7),
        0,
        r,
        0,
      ),
        (r += n));
    }
  }
  return (
    t.chance(0.5) && L(n, 0.05, 0.05, 0.1, U(15986402, 0.7), 0.25, o, 0),
    t.chance(0.4) &&
      (A(
        n,
        0.05,
        0.02,
        0.18,
        0.008,
        w(2039586),
        -0.1,
        o + 0.01,
        0.15,
      ).rotation.y = 0.4),
    F(n, { note: r })
  );
}
function it(e) {
  let t = x(e),
    n = new f(),
    r = t.pick([`nightstand`, `drum`, `cside`, `tripod`]),
    i = K(t);
  if (r === `nightstand`) {
    let e = 0.5,
      r = 0.4;
    (q(n, t, e, r, 0.12, t.pick([`taper`, `block`, `round`]), i, 0.04),
      z(n, e, 0.45999999999999996, r, i, 0, 0.12, 0));
    for (let e = 0; e < 2; e++)
      (z(n, 0.46, 0.2, 0.01, i, 0, 0.14 + e * 0.22, r / 2),
        B(
          n,
          0.1,
          0.015,
          0.02,
          t.pick([k(), U(12095807, 0.3, 0.9)]),
          0,
          0.24 + e * 0.22,
          0.21500000000000002,
        ));
  } else if (r === `drum`)
    (L(n, 0.24, 0.24, 0.5, U(t.pick(I), 0.25), 0, 0, 0, 32),
      L(
        n,
        0.24,
        0.24,
        0.02,
        t.pick([U(12095807, 0.3, 0.9), i]),
        0,
        0.5,
        0,
        32,
      ));
  else if (r === `cside`) {
    let e = t.pick([E(), U(12095807, 0.3, 0.9), k()]);
    (z(n, 0.4, 0.015, 0.35, e, 0, 0, 0),
      z(n, 0.015, 0.6, 0.35, e, -0.19, 0, 0),
      L(n, 0.2, 0.2, 0.02, i, 0.03, 0.6, 0, 28));
  } else {
    L(n, 0.25, 0.25, 0.03, i, 0, 0.55, 0, 28);
    for (let e = 0; e < 3; e++) {
      let t = (e / 3) * Math.PI * 2;
      C(
        n,
        [Math.cos(t) * 0.25, 0, Math.sin(t) * 0.25],
        [Math.cos(t) * 0.12, 0.55, Math.sin(t) * 0.12],
        0.014,
        i,
      );
    }
  }
  return F(n, { note: r });
}
function at(e) {
  let t = x(e),
    n = new f(),
    r = t.pick([0.8, 0.9, 1.2]),
    i = t.pick([1.8, 2, 1.2]),
    a = 0.32,
    o = K(t),
    s = Math.round(i / 0.36);
  z(n, r, i, 0.015, o, 0, 0, -0.152);
  for (let e of [-1, 1]) z(n, 0.02, i, a, o, e * (r / 2 - 0.01), 0, 0);
  for (let e = 0; e <= s; e++)
    z(n, r - 0.04, 0.02, a, o, 0, e === 0 ? 0.05 : (e * (i - 0.02)) / s, 0);
  z(n, r - 0.04, 0.05, 0.02, o, 0, 0, a / 2 - 0.01);
  for (let e = 0; e < s; e++) {
    let a = e === 0 ? 0.07 : (e * (i - 0.02)) / s + 0.02,
      o = -r / 2 + 0.03,
      c = r - 0.06,
      l = t.pick([`books`, `books`, `mixed`, `bins`]);
    if (l === `bins`) {
      let e = Math.floor(c / 0.28);
      for (let r = 0; r < e; r++)
        S(
          n,
          0.26,
          0.26,
          0.28,
          0.02,
          U(t.pick([12101770, 7041116, 15328472, 4082266]), 0.95),
          o + 0.14 + r * 0.28,
          a,
          0,
        );
      continue;
    }
    let u = ae(n, t, o, a, 0, l === `books` ? c : c * t.range(0.4, 0.7), {
      depth: 0.26,
    });
    if (l === `mixed` && c - u > 0.15) {
      let e = o + u + (c - u) / 2;
      if (t.chance(0.5))
        D(
          n,
          [
            [0, 0],
            [0.04, 0],
            [0.055, 0.08],
            [0.03, 0.18],
            [0.035, 0.2],
          ],
          U(t.pick(I), 0.3),
          e,
          a,
          0,
          20,
        );
      else {
        let r = a;
        for (let i = 0; i < 3; i++)
          (z(
            n,
            0.2,
            0.03,
            0.24,
            U(t.pick([15328472, 2899536, 10697515]), 0.7),
            e,
            r,
            0,
          ),
            (r += 0.03));
        b(n, 0.04, U(t.pick(I), 0.3), e, r + 0.04, 0);
      }
    }
  }
  return F(n);
}
function ot(n) {
  let r = x(n),
    i = new f(),
    a = r.chance(0.15),
    o = K(r),
    s = r.pick([1.4, 1.6, 1.8]),
    c = r.range(0.45, 0.55),
    l = 0.42;
  (q(i, r, s, l, 0.1, r.pick([`taper`, `metal`, `block`]), o, 0.05),
    z(i, s, c - 0.1, l, o, 0, 0.1, 0));
  let u = r.pick([2, 3, 4]);
  for (let e = 0; e < u; e++) {
    let t = (s - 0.02) / u;
    z(
      i,
      t - 0.01,
      c - 0.14,
      0.012,
      e === Math.floor(u / 2) && u === 3 ? U(1710618, 0.9) : o,
      -s / 2 + 0.01 + t / 2 + e * t,
      0.12,
      l / 2,
    );
  }
  if (a) {
    let n = new f();
    (n.position.set(0, c, 0),
      i.add(n),
      S(n, 0.68, 0.55, 0.5, 0.04, w(r.pick([2763308, 9407104])), 0, 0, -0.02));
    let a = new e(
      new t(1.2, 24, 16, -0.2, 0.4, Math.PI / 2 - 0.16, 0.32),
      U(1713184, 0.2, 0, { emissive: 2243123, emissiveIntensity: 0.4 }),
    );
    (a.position.set(0, 0.28, -0.97), n.add(a));
    for (let e = 0; e < 3; e++)
      L(
        n,
        0.012,
        0.012,
        0.01,
        w(5592405),
        0.28,
        0.1 + e * 0.04,
        0.23,
      ).rotation.x = Math.PI / 2;
  } else {
    let e = r.pick([43, 50, 55, 65, 75]) * 0.0254 * 0.8716 + 0.02,
      t = (e * 9) / 16,
      n = new f();
    (n.position.set(0, c, -0.05),
      i.add(n),
      B(n, e * 0.35, 0.02, 0.22, E(), 0, 0.01, 0),
      B(n, 0.06, 0.1, 0.04, E(), 0, 0.06, -0.02),
      A(n, e, t, 0.035, 0.005, U(1118483, 0.4), 0, 0.09 + t / 2, 0));
    let a = r.chance(0.5),
      o = P(640, 360, (e, t, n) => {
        if (a) le(e, t, n, r, r.pick([`landscape`, `seascape`, `city`]));
        else {
          let r = e.createLinearGradient(0, 0, t, n);
          (r.addColorStop(0, `#1b1d22`),
            r.addColorStop(0.5, `#0b0c0f`),
            r.addColorStop(1, `#16181c`),
            (e.fillStyle = r),
            e.fillRect(0, 0, t, n));
        }
      });
    (H(n, e - 0.02, t - 0.02, o, 0, 0.09 + t / 2, 0.018, {
      emissive: a ? 0.9 : 0,
      rough: a ? 0.3 : 0.05,
      metal: a ? 0 : 0.2,
    }),
      r.chance(0.5) &&
        A(i, e * 0.7, 0.06, 0.09, 0.02, U(1710620, 0.5), 0, c, l / 2 - 0.08));
  }
  return (
    r.chance(0.6) &&
      (z(i, 0.28, 0.05, 0.2, w(1118481), -s / 2 + 0.25, c, 0),
      B(i, 0.004, 0.004, 0.001, V(4500223, 2), -s / 2 + 0.2, c + 0.025, 0.101)),
    F(i, { note: a ? `old CRT` : `flat screen` })
  );
}
function st(e) {
  let t = x(e),
    n = new f(),
    r = K(t),
    i = t.pick([1, 1.2, 1.5]),
    a = t.pick([0.8, 0.9, 1.2]),
    o = 0.46;
  (q(n, t, i, o, 0.1, t.pick([`taper`, `bun`, `block`]), r, 0.04),
    z(n, i, a - 0.1, o, r, 0, 0.1, 0),
    z(n, i + 0.02, 0.025, 0.48000000000000004, r, 0, a, 0));
  let s = Math.round((a - 0.14) / 0.22),
    c = i > 1.1 ? 2 : 1,
    l = t.pick([k(), U(12095807, 0.3, 0.9), E()]);
  for (let e = 0; e < s; e++)
    for (let t = 0; t < c; t++) {
      let u = (i - 0.04) / c,
        d = (a - 0.14) / s,
        f = -i / 2 + 0.02 + u / 2 + t * u,
        p = 0.12 + e * d;
      (z(n, u - 0.012, d - 0.012, 0.014, r, f, p, o / 2),
        B(n, 0.12, 0.014, 0.022, l, f, p + d / 2, 0.248));
    }
  if (
    (t.chance(0.5) &&
      D(
        n,
        [
          [0, 0],
          [0.05, 0],
          [0.06, 0.12],
          [0.035, 0.25],
          [0.04, 0.27],
        ],
        U(t.pick(I), 0.3),
        i / 2 - 0.15,
        a + 0.025,
        0,
        20,
      ),
    t.chance(0.5))
  ) {
    let e = new f();
    (e.position.set(-i / 2 + 0.25, a + 0.025, -0.05),
      n.add(e),
      z(e, 0.3, 0.02, 0.2, U(12095807, 0.3, 0.9), 0, 0, 0),
      L(e, 0.03, 0.03, 0.08, T(16767392, 0.5), -0.08, 0.02, 0),
      L(e, 0.02, 0.02, 0.1, U(1710618, 0.3), 0.06, 0.02, 0));
  }
  return F(n);
}
function ct(e) {
  return U(
    e.pick([15920610, 15261900, 14209732, 2763308, 12168601, 9083530]),
    0.9,
    0,
    { emissive: 16767392, emissiveIntensity: 0 },
  );
}
function J(e, t, n = 0.6) {
  (e.userData.nightMats ??= []).push([t, n]);
}
function lt(e, t, n, r, i, a, o, s, c) {
  D(
    e,
    [
      [a, 0],
      [o, s],
    ],
    c,
    n,
    r,
    i,
    32,
  );
  let l = b(e, 0.03, V(16773584, 0), n, r + s * 0.4, i, 10);
  return (J(e, l.material, 3), l);
}
function ut(n) {
  let r = x(n),
    i = new f(),
    a = r.pick([`drum`, `arc`, `tripod`, `torchiere`, `task`]),
    o = ct(r),
    s = r.pick([O(), E(), U(12095807, 0.3, 0.9), k()]);
  if (a === `arc`) {
    (B(i, 0.3, 0.05, 0.3, U(r.pick([15526630, 1710618]), 0.25), 0, 0.025, -0.9),
      M(
        i,
        [
          [0, 0.05, -0.9],
          [0, 1.2, -0.85],
          [0, 1.9, -0.45],
          [0, 2, 0],
          [0, 1.85, 0.25],
        ],
        0.014,
        s,
        40,
      ));
    let n = new e(
      new t(0.2, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2),
      s === k() ? k() : U(1710618, 0.4, 0.6),
    );
    ((n.material = n.material.clone()),
      (n.material.side = 2),
      n.position.set(0, 1.62, 0.28),
      (n.castShadow = !0),
      i.add(n),
      J(i, b(i, 0.04, V(16773584, 0), 0, 1.66, 0.28, 10).material, 3));
  } else if (a === `tripod`) {
    let e = K(r);
    for (let t = 0; t < 3; t++) {
      let n = (t / 3) * Math.PI * 2 + 0.5;
      C(i, [Math.cos(n) * 0.32, 0, Math.sin(n) * 0.32], [0, 1.15, 0], 0.014, e);
    }
    (C(i, [0, 1.1, 0], [0, 1.25, 0], 0.01, s),
      lt(i, r, 0, 1.2, 0, 0.26, 0.24, 0.32, o));
  } else if (a === `torchiere`)
    (L(i, 0.15, 0.15, 0.02, s, 0, 0, 0, 24),
      L(i, 0.012, 0.012, 1.7, s, 0, 0.02, 0, 10),
      D(
        i,
        [
          [0.02, 0],
          [0.18, 0.12],
          [0.2, 0.14],
        ],
        U(r.pick([15260872, 14075560]), 0.3, 0, {
          transparent: !0,
          opacity: 0.85,
        }),
        0,
        1.7,
        0,
        32,
      ),
      J(i, b(i, 0.04, V(16773584, 0), 0, 1.74, 0, 10).material, 3));
  else if (a === `task`) {
    (L(i, 0.14, 0.14, 0.02, s, 0, 0, 0, 24),
      C(i, [0, 0.02, 0], [0, 1.35, 0], 0.01, s),
      C(i, [0, 1.35, 0], [0, 1.45, 0.25], 0.009, s));
    let e = D(
      i,
      [
        [0.02, 0],
        [0.07, -0.05],
        [0.09, -0.14],
      ],
      s,
      0,
      1.5,
      0.28,
      24,
    );
    ((e.rotation.x = 0.5),
      J(i, b(i, 0.03, V(16773584, 0), 0, 1.41, 0.33, 10).material, 3));
  } else
    (L(i, 0.16, 0.18, 0.03, s, 0, 0, 0, 24),
      L(i, 0.012, 0.012, 1.3, s, 0, 0.03, 0, 10),
      lt(i, r, 0, 1.3, 0, 0.23, 0.2, 0.33, o));
  return (J(i, o, 0.5), F(i, { note: a, light: !0 }));
}
function dt(t) {
  let n = x(t),
    r = new f(),
    i = n.pick([`anglepoise`, `bankers`, `ledbar`, `dome`]);
  if (i === `anglepoise`) {
    let e = n.pick([
      U(2039586, 0.4, 0.4),
      U(15329249, 0.4, 0.2),
      U(11745850, 0.4, 0.3),
      U(2976335, 0.4, 0.3),
      U(14263361, 0.4, 0.3),
    ]);
    L(r, 0.075, 0.08, 0.03, e, 0, 0, 0, 24);
    let t = n.range(0.2, 0.6),
      i = n.range(0.6, 1.2),
      a = [0, 0.03, 0],
      o = [0, 0.03 + Math.cos(t) * 0.3, -Math.sin(t) * 0.3],
      s = [0, o[1] + Math.cos(i) * 0.28, o[2] + Math.sin(i) * 0.28];
    for (let t of [-0.012, 0.012])
      (C(r, [t, ...a.slice(1)], [t, ...o.slice(1)], 0.006, e),
        C(r, [t, ...o.slice(1)], [t, ...s.slice(1)], 0.006, e));
    b(r, 0.015, e, ...o, 8);
    let c = D(
      r,
      [
        [0.018, 0.06],
        [0.03, 0.03],
        [0.075, -0.05],
        [0.078, -0.06],
      ],
      e,
      s[0],
      s[1],
      s[2] + 0.02,
      24,
    );
    ((c.rotation.x = 0.6),
      J(
        r,
        b(r, 0.025, V(16773584, 0), s[0], s[1] - 0.03, s[2] + 0.05, 8).material,
        3,
      ));
  } else if (i === `bankers`) {
    let t = U(12095807, 0.3, 0.9);
    (z(r, 0.2, 0.02, 0.14, t, 0, 0, 0),
      C(r, [0, 0.02, 0], [0, 0.32, 0], 0.008, t));
    let n = new e(
      new g(0.06, 0.13, 0.09, 24, 1, !0, 0, Math.PI),
      U(2059066, 0.25, 0, { side: 2, emissive: 2059066, emissiveIntensity: 0 }),
    );
    ((n.rotation.x = Math.PI / 2),
      (n.rotation.z = Math.PI / 2),
      n.scale.set(1, 1, 0.9),
      n.position.set(0, 0.34, 0.03),
      r.add(n),
      J(r, n.material, 0.4),
      J(r, B(r, 0.18, 0.02, 0.02, V(16773584, 0), 0, 0.31, 0.03).material, 3));
  } else if (i === `ledbar`) {
    let e = n.pick([E(), O(), U(15329249, 0.4, 0.2)]);
    (L(r, 0.07, 0.07, 0.015, e, 0, 0, 0, 24),
      C(r, [0, 0.015, -0.02], [0, 0.42, -0.02], 0.008, e),
      C(r, [0, 0.42, -0.02], [0, 0.4, 0.28], 0.012, e),
      J(r, B(r, 0.02, 0.004, 0.28, V(16054527, 0), 0, 0.39, 0.14).material, 3));
  } else {
    let e = U(n.pick(I), 0.3);
    (D(
      r,
      [
        [0, 0],
        [0.07, 0],
        [0.04, 0.03],
        [0.02, 0.2],
        [0, 0.2],
      ],
      e,
      0,
      0,
      0,
      24,
    ),
      lt(r, n, 0, 0.2, 0, 0.12, 0.02, 0.12, e));
  }
  return F(r, { note: i, light: !0 });
}
function ft(e) {
  let t = x(e),
    n = new f(),
    r = ct(t),
    i = t.pick([`ginger`, `column`, `gourd`, `glass`, `metal`]),
    a =
      i === `glass`
        ? T(t.pick([13624298, 15259832, 10467240]), 0.55)
        : i === `metal`
          ? t.pick([O(), U(12095807, 0.3, 0.9)])
          : U(t.pick(I), 0.25),
    o = {
      ginger: [
        [0, 0],
        [0.08, 0],
        [0.13, 0.12],
        [0.12, 0.26],
        [0.05, 0.32],
        [0.02, 0.34],
      ],
      column: [
        [0, 0],
        [0.07, 0],
        [0.07, 0.03],
        [0.045, 0.04],
        [0.045, 0.38],
        [0.02, 0.4],
      ],
      gourd: [
        [0, 0],
        [0.07, 0],
        [0.12, 0.1],
        [0.08, 0.2],
        [0.09, 0.28],
        [0.03, 0.34],
      ],
      glass: [
        [0, 0],
        [0.1, 0],
        [0.12, 0.18],
        [0.06, 0.3],
        [0.02, 0.32],
      ],
      metal: [
        [0, 0],
        [0.09, 0],
        [0.09, 0.02],
        [0.02, 0.03],
        [0.015, 0.36],
      ],
    }[i];
  D(n, o, a, 0, 0, 0, 28);
  let s = o.at(-1)[1];
  return (
    C(n, [0, s, 0], [0, s + 0.1, 0], 0.006, O()),
    lt(
      n,
      t,
      0,
      s + 0.06,
      0,
      t.range(0.17, 0.22),
      t.range(0.12, 0.17),
      t.range(0.22, 0.28),
      r,
    ),
    J(n, r, 0.5),
    F(n, { note: i, light: !0 })
  );
}
function pt(e) {
  let t = x(e),
    n = new f(),
    r = t.pick([3, 4, 5, 5]),
    i = t.range(0.55, 0.7),
    a = t.range(0.2, 0.45),
    o = t.pick([
      U(15329249, 0.5),
      O(),
      U(3811874, 0.4, 0.5),
      E(),
      U(12095807, 0.35, 0.8),
    ]),
    s = t.pick([
      U(R.walnut, 0.6),
      U(R.oak, 0.6),
      U(15329249, 0.6),
      U(2763306, 0.5),
      U(R.maple, 0.6),
    ]);
  (D(
    n,
    [
      [0, 0],
      [0.07, 0],
      [0.07, -0.02],
      [0.03, -0.07],
      [0, -0.07],
    ],
    o,
    0,
    0,
    0,
    24,
  ),
    L(n, 0.012, 0.012, a, o, 0, -a, 0, 8));
  let c = new f();
  ((c.position.y = -a - 0.06),
    n.add(c),
    D(
      c,
      [
        [0, 0.06],
        [0.1, 0.05],
        [0.12, 0],
        [0.1, -0.04],
        [0, -0.05],
      ],
      o,
      0,
      0,
      0,
      28,
    ));
  for (let e = 0; e < r; e++) {
    let t = (e / r) * Math.PI * 2,
      n = new f();
    ((n.rotation.y = t), c.add(n), B(n, 0.14, 0.01, 0.03, o, 0.16, -0.02, 0));
    let a = A(
      n,
      i - 0.15,
      0.008,
      0.13,
      0.003,
      s,
      0.23 + (i - 0.15) / 2,
      -0.024,
      0,
    );
    a.rotation.x = 0.18;
  }
  return (
    t.chance(0.7) &&
      J(
        n,
        D(
          c,
          [
            [0.08, -0.05],
            [0.1, -0.1],
            [0.08, -0.15],
            [0, -0.17],
          ],
          U(16183780, 0.2, 0, {
            transparent: !0,
            opacity: 0.92,
            emissive: 16773324,
            emissiveIntensity: 0,
          }),
          0,
          0,
          0,
          24,
        ).material,
        1.4,
      ),
    C(
      n,
      [0.08, -a - 0.1, 0],
      [0.08, -a - 0.35, 0],
      0.002,
      U(12095807, 0.3, 0.9),
      3,
    ),
    (n.userData.spin = c),
    F(n, { ceiling: !0, light: !0 })
  );
}
function mt(e) {
  let t = x(e),
    n = new f(),
    r = t.pick([`dome`, `globe`, `cage`, `drum`, `office`]),
    i = t.range(0.5, 0.9),
    a = t.pick([
      E(),
      O(),
      U(12095807, 0.3, 0.9),
      U(15329249, 0.4, 0.3),
      U(2976335, 0.4, 0.3),
    ]);
  (L(n, 0.06, 0.06, 0.02, a, 0, -0.02, 0, 20),
    C(n, [0, 0, 0], [0, -i, 0], 0.003, U(1118481, 0.6), 4));
  let o = -i;
  if (r === `office`)
    (C(n, [0.5, 0, 0], [0.5, o, 0], 0.002, U(7829367, 0.4, 0.8), 3),
      C(n, [-0.5, 0, 0], [-0.5, o, 0], 0.002, U(7829367, 0.4, 0.8), 3),
      B(n, 1.2, 0.05, 0.08, U(2829359, 0.4, 0.6), 0, o - 0.025, 0),
      J(
        n,
        B(n, 1.18, 0.005, 0.06, V(16054527, 0), 0, o - 0.052, 0).material,
        3,
      ));
  else if (r === `globe`)
    (J(
      n,
      b(
        n,
        0.15,
        U(16183780, 0.2, 0, {
          transparent: !0,
          opacity: 0.9,
          emissive: 16773324,
          emissiveIntensity: 0,
        }),
        0,
        o - 0.15,
        0,
        24,
      ).material,
      1.6,
    ),
      L(n, 0.03, 0.03, 0.03, a, 0, o - 0.02, 0));
  else if (r === `cage`) {
    for (let e = 0; e < 8; e++) {
      let t = (e / 8) * Math.PI * 2;
      M(
        n,
        [
          [0, o, 0],
          [Math.cos(t) * 0.11, o - 0.1, Math.sin(t) * 0.11],
          [Math.cos(t) * 0.1, o - 0.2, Math.sin(t) * 0.1],
          [0, o - 0.26, 0],
        ],
        0.003,
        a,
        12,
        4,
      );
    }
    J(n, b(n, 0.045, V(16760944, 0), 0, o - 0.12, 0, 12).material, 3);
  } else
    r === `drum`
      ? lt(n, t, 0, o - 0.25, 0, 0.25, 0.25, 0.25, ct(t))
      : (D(
          n,
          [
            [0.03, 0],
            [0.05, -0.04],
            [0.16, -0.16],
            [0.2, -0.24],
          ],
          a,
          0,
          o,
          0,
          32,
        ),
        J(n, b(n, 0.04, V(16773584, 0), 0, o - 0.14, 0, 10).material, 3));
  return F(n, { ceiling: !0, light: !0, note: r });
}
var ht = [
  `six-panel`,
  `shaker`,
  `flush`,
  `two-panel`,
  `glass-office`,
  `french`,
  `louvered`,
  `barn`,
];
function gt(e) {
  let t = x(e),
    n = new f(),
    r = t.pick(ht),
    i =
      r === `french`
        ? 1.2
        : r === `barn`
          ? 1
          : t.pick([0.76, 0.81, 0.86, 0.91]),
    a = r === `glass-office` ? 2.13 : 2.03,
    o = 0.035,
    s =
      r === `glass-office`
        ? U(11120048, 0.35, 0.8)
        : t.chance(0.35)
          ? K(t)
          : U(
              t.pick([16052972, 15526628, 3095350, 4082266, 2039586, 9083530]),
              0.45,
            ),
    c =
      r === `glass-office`
        ? U(11120048, 0.35, 0.8)
        : t.chance(0.7)
          ? U(16052972, 0.45)
          : s,
    l = 0.075,
    u = 0.14;
  if (r !== `barn`) {
    for (let e of [-1, 1])
      (z(n, l, a + l, 0.018, c, e * (i / 2 + l / 2), 0, 0.079),
        z(n, l, a + l, 0.018, c, e * (i / 2 + l / 2), 0, -0.14 / 2 - 0.009),
        z(n, 0.02, a, u, c, e * (i / 2 + 0.01), 0, 0));
    (z(
      n,
      i + 2 * l + (t.chance(0.3) ? 0.04 : 0),
      l * (t.chance(0.4) ? 1.6 : 1),
      0.02,
      c,
      0,
      a,
      0.08,
    ),
      z(n, i + 2 * l, l, 0.018, c, 0, a, -0.14 / 2 - 0.009),
      z(n, i + 0.04, 0.02, u, c, 0, a, 0));
  }
  let d = r === `french` ? i / 2 : i,
    p = t.chance(0.35) ? t.range(0.3, 1.1) : 0,
    m = r === `french` ? [-1, 1] : [-1],
    h = t.pick([k(), O(), U(12095807, 0.3, 0.9), U(2762018, 0.4, 0.7)]);
  for (let e of m) {
    let c = new f();
    (n.add(c),
      r === `barn`
        ? c.position.set(p ? -i * 0.6 : 0, 0, 0.12000000000000001)
        : ((c.position.x = (e * i) / 2),
          (c.rotation.y = -e * p * (r === `french` ? 0.8 : 1))));
    let l = new f();
    ((l.position.x = r === `barn` ? 0 : (-e * d) / 2),
      c.add(l),
      _t(l, t, r, d - 0.006, a - 0.01, o, s));
    let u = -e * (d / 2 - 0.07);
    if (r === `barn`) {
      z(n, i * 2.1, 0.05, 0.02, E(), -i * 0.3, a + 0.08, 0.10500000000000001);
      for (let e of [-1, 1]) b(l, 0.04, E(), e * d * 0.35, a + 0.1, 0.05, 12);
      z(l, 0.02, 0.3, 0.03, E(), d / 2 - 0.08, 0.9, 0.0325);
    } else if (r === `glass-office`)
      for (let e of [1, -1])
        C(l, [u, 0.7, e * 0.07], [u, 1.4, e * 0.07], 0.014, h);
    else
      for (let n of [1, -1])
        if (t.chance(0.5) || r === `flush`) {
          L(
            l,
            0.028,
            0.028,
            0.01,
            h,
            u,
            0.96,
            n * 0.022500000000000003,
            16,
          ).rotation.x = Math.PI / 2;
          let e = b(l, 0.028, h, u, 0.96, n * 0.0675, 16);
          ((e.scale.z = 0.8),
            C(l, [u, 0.96, (n * o) / 2], [u, 0.96, n * 0.0575], 0.008, h));
        } else
          ((L(
            l,
            0.025,
            0.025,
            0.01,
            h,
            u,
            0.96,
            n * 0.022500000000000003,
            16,
          ).rotation.x = Math.PI / 2),
            C(
              l,
              [u, 0.96, n * 0.07250000000000001],
              [u + e * 0.12, 0.96, n * 0.07250000000000001],
              0.008,
              h,
            ),
            C(
              l,
              [u, 0.96, (n * o) / 2],
              [u, 0.96, n * 0.07250000000000001],
              0.008,
              h,
            ));
  }
  return F(n, {
    door: { w: i, h: a, style: r },
    note: r + (p ? `, ajar` : ``),
  });
}
function _t(e, t, n, r, i, a, o) {
  if (
    (z(e, r, i, a, n === `glass-office` ? T(14282480, 0.25) : o, 0, 0, 0),
    n === `glass-office`)
  ) {
    let t = o;
    for (let n of [-1, 1])
      z(e, 0.07, i, a + 0.01, t, n * (r / 2 - 0.035), 0, 0);
    (z(e, r, 0.07, a + 0.01, t, 0, i - 0.07, 0),
      z(e, r, 0.22, a + 0.01, t, 0, 0, 0),
      B(
        e,
        r - 0.14,
        0.12,
        0.001,
        U(16777215, 0.3, 0, { transparent: !0, opacity: 0.45 }),
        0,
        1.3,
        a / 2 + 0.006,
      ));
    return;
  }
  let s = o.color.getHex(),
    c = U(N(s, 0.62), 0.6),
    l = U(N(s, 0.86), 0.5),
    u = (t, n, r, i, a, o, s, c) => {
      let l = Math.sign(a);
      (B(e, r, o, 0.006, s, t, n + i / 2 - o / 2, a + l * c),
        B(e, r, o, 0.006, s, t, n - i / 2 + o / 2, a + l * c),
        B(e, o, i - 2 * o, 0.006, s, t - r / 2 + o / 2, n, a + l * c),
        B(e, o, i - 2 * o, 0.006, s, t + r / 2 - o / 2, n, a + l * c));
    },
    d = (t, n, r, i, a) => {
      (u(t, n, r, i, a, 0.01, c, 0.001),
        u(t, n, r - 0.02, i - 0.02, a, 0.025, l, 0.003),
        B(e, r - 0.07, i - 0.07, 0.008, o, t, n, a + Math.sign(a) * 0.004));
    };
  for (let t of [a / 2 + 0.004, -a / 2 - 0.004])
    if (n === `six-panel`) {
      let e = (r - 0.3) / 2;
      for (let n of [-1, 1])
        (d(n * (e / 2 + 0.05), i - 0.42, e, 0.4, t),
          d(n * (e / 2 + 0.05), i - 1.08, e, 0.72, t),
          d(n * (e / 2 + 0.05), 0.38, e, 0.52, t));
    } else if (n === `two-panel`)
      (d(0, i - 0.62, r - 0.26, 0.9, t), d(0, 0.52, r - 0.26, 0.7, t));
    else if (n === `shaker`) {
      let n = (i - 0.14 - 0.22 - 0.4) / 5;
      for (let i = 0; i < 5; i++) {
        let a = 0.22 + n / 2 + i * (n + 0.1);
        (B(e, r - 0.24, n, 0.004, U(N(s, 0.93), 0.5), 0, a, t),
          u(0, a, r - 0.24, n, t, 0.008, c, 0.002));
      }
    } else if (n === `louvered`)
      for (let n = 0; n < 24; n++) {
        let i = B(e, r - 0.18, 0.05, 0.006, o, 0, 0.2 + n * 0.07, t);
        i.rotation.x = 0.5 * Math.sign(t);
      }
    else if (n === `barn`) {
      for (let n = 0; n < 6; n++)
        B(e, 0.004, i, 0.004, U(0, 1), -r / 2 + ((n + 1) * r) / 7, i / 2, t);
      (B(e, r - 0.1, 0.12, 0.02, o, 0, i - 0.1, t),
        B(e, r - 0.1, 0.12, 0.02, o, 0, 0.1, t));
      let n = B(e, 0.1, Math.hypot(r, i - 0.3) - 0.1, 0.02, o, 0, i / 2, t);
      n.rotation.z = Math.atan2(r - 0.1, i - 0.3);
    } else if (n === `french`) {
      let t = T(14282480, 0.22);
      B(e, r - 0.16, i - 0.36, a + 0.002, t, 0, i / 2 + 0.1, 0);
      for (let t = 1; t < 5; t++)
        B(e, r - 0.16, 0.025, a + 0.004, o, 0, 0.28 + (t * (i - 0.36)) / 5, 0);
      B(e, 0.025, i - 0.36, a + 0.004, o, 0, i / 2 + 0.1, 0);
    }
  if (n === `french`) {
    e.children[0].visible = !1;
    for (let t of [-1, 1]) z(e, 0.08, i, a, o, t * (r / 2 - 0.04), 0, 0);
    (z(e, r, 0.08, a, o, 0, i - 0.08, 0), z(e, r, 0.2, a, o, 0, 0, 0));
  }
}
function vt(e, t, n, r, i) {
  let a = r.pick([
    [`#7a1f1f`, `#1f2f4a`, `#e8d9b5`, `#c49a45`, `#2d4a3a`],
    [`#2c3e50`, `#c0392b`, `#ecf0f1`, `#d4ac0d`, `#1b2631`],
    [`#8b5e3c`, `#e6d5b8`, `#4a6b5a`, `#b5563a`, `#2e2a26`],
    [`#e9e4d8`, `#3d405b`, `#81b29a`, `#e07a5f`, `#f2cc8f`],
    [`#d8d2c4`, `#6b705c`, `#a5a58d`, `#3a3a3a`, `#cb997e`],
    [`#1d3557`, `#f1faee`, `#a8dadc`, `#457b9d`, `#e63946`],
  ]);
  if (i === `persian`) {
    let r = Math.min(t, n) * 0.11;
    ((e.fillStyle = a[1]),
      e.fillRect(0, 0, t, n),
      (e.fillStyle = a[0]),
      e.fillRect(r, r, t - 2 * r, n - 2 * r),
      (e.fillStyle = a[2]));
    for (let i of [0.12, 0.88])
      (e.fillRect(r * i, r * i, t - 2 * r * i, 3),
        e.fillRect(r * i, n - r * i - 3, t - 2 * r * i, 3),
        e.fillRect(r * i, r * i, 3, n - 2 * r * i),
        e.fillRect(t - r * i - 3, r * i, 3, n - 2 * r * i));
    let i = (t, n, r, i) => {
        ((e.fillStyle = i),
          e.beginPath(),
          e.moveTo(t, n - r),
          e.lineTo(t + r, n),
          e.lineTo(t, n + r),
          e.lineTo(t - r, n),
          e.fill());
      },
      o = r * 0.7;
    for (let e = r / 2; e < t; e += o)
      (i(e, r / 2, r * 0.22, a[3]),
        i(e, n - r / 2, r * 0.22, a[3]),
        i(e, r / 2, r * 0.09, a[4]),
        i(e, n - r / 2, r * 0.09, a[4]));
    for (let e = r / 2 + o; e < n - r; e += o)
      (i(r / 2, e, r * 0.22, a[3]),
        i(t - r / 2, e, r * 0.22, a[3]),
        i(r / 2, e, r * 0.09, a[4]),
        i(t - r / 2, e, r * 0.09, a[4]));
    let s = Math.min(t, n) * 0.07;
    e.globalAlpha = 0.45;
    for (let o = r + s / 2; o < t - r; o += s)
      for (let t = r + s / 2; t < n - r; t += s)
        ((o / s) | 0) % 2 == ((t / s) | 0) % 2
          ? i(o, t, s * 0.22, a[2])
          : ((e.fillStyle = a[3]),
            e.beginPath(),
            e.arc(o, t, s * 0.1, 0, 7),
            e.fill());
    ((e.globalAlpha = 1),
      e.save(),
      e.beginPath(),
      e.rect(r, r, t - 2 * r, n - 2 * r),
      e.clip());
    for (let [i, o] of [
      [r, r],
      [t - r, r],
      [r, n - r],
      [t - r, n - r],
    ])
      ((e.fillStyle = a[1]),
        e.beginPath(),
        e.arc(i, o, Math.min(t, n) * 0.2, 0, 7),
        e.fill(),
        (e.fillStyle = a[3]),
        e.beginPath(),
        e.arc(i, o, Math.min(t, n) * 0.12, 0, 7),
        e.fill());
    (e.restore(), e.save(), e.translate(t / 2, n / 2));
    let c = t > n ? 1.5 : 1,
      l = n > t ? 1.5 : 1;
    for (let r = 5; r > 0; r--) {
      ((e.fillStyle = [a[1], a[2], a[3], a[4], a[1]][r - 1]), e.beginPath());
      let i = Math.min(t, n) * 0.065 * r;
      for (let t = 0; t <= 24; t++) {
        let n = (t / 24) * Math.PI * 2,
          r = t % 2 ? i * 0.82 : i;
        e.lineTo(Math.cos(n) * r * c, Math.sin(n) * r * l);
      }
      e.fill();
    }
    e.restore();
  } else if (i === `kilim`) {
    let i = r.int(6, 12),
      o = n / i;
    for (let n = 0; n < i; n++) {
      ((e.fillStyle = a[n % a.length]),
        e.fillRect(0, n * o, t, o),
        (e.fillStyle = a[(n + 2) % a.length]));
      for (let r = 0; r < t; r += o)
        (e.beginPath(),
          e.moveTo(r, n * o + o),
          e.lineTo(r + o / 2, n * o + o * 0.2),
          e.lineTo(r + o, n * o + o),
          e.fill());
    }
  } else if (i === `stripe`) {
    ((e.fillStyle = a[2]), e.fillRect(0, 0, t, n));
    let i = r.int(3, 9);
    for (let o = 0; o < i; o++) {
      e.fillStyle = a[r.int(0, 4)];
      let i = r.range(6, 40);
      e.fillRect(0, r() * n, t, i);
    }
  } else if (i === `modern`) {
    ((e.fillStyle = a[4]), e.fillRect(0, 0, t, n));
    for (let i = 0; i < r.int(3, 7); i++) {
      ((e.fillStyle = a[r.int(0, 3)]), (e.globalAlpha = 0.85), e.beginPath());
      let i = r() * t,
        o = r() * n,
        s = r.range(0.1, 0.35) * t;
      for (let t = 0; t <= 10; t++) {
        let n = (t / 10) * Math.PI * 2,
          a = s * r.range(0.6, 1.2);
        e.lineTo(i + Math.cos(n) * a, o + Math.sin(n) * a);
      }
      e.fill();
    }
    e.globalAlpha = 1;
  } else if (i === `office`) {
    ((e.fillStyle = r.pick([`#4b5058`, `#3e4652`, `#5a5550`])),
      e.fillRect(0, 0, t, n));
    let i = t / 6;
    for (let r = 0; r < t; r += i)
      for (let t = 0; t < n; t += i)
        ((e.fillStyle = `rgba(${((r + t) / i) % 2 ? `255,255,255` : `0,0,0`},0.03)`),
          e.fillRect(r, t, i, i));
  } else if (
    ((e.fillStyle = i === `jute` ? `#b99a6b` : a[r.int(0, 4)]),
    e.fillRect(0, 0, t, n),
    i === `jute`)
  ) {
    e.strokeStyle = `rgba(80,60,30,0.35)`;
    for (let r = 0; r < n; r += 8)
      (e.beginPath(), e.moveTo(0, r), e.lineTo(t, r), e.stroke());
  }
  for (let i = 0; i < (t * n) / 12; i++)
    ((e.fillStyle = r.chance(0.5)
      ? `rgba(0,0,0,0.08)`
      : `rgba(255,255,255,0.06)`),
      e.fillRect(r() * t, r() * n, 2, 2));
}
function yt(e) {
  let t = x(e),
    n = new f(),
    i = t.pick([
      `persian`,
      `persian`,
      `kilim`,
      `stripe`,
      `modern`,
      `jute`,
      `shag`,
      `round`,
      `runner`,
      `office`,
    ]),
    a = i === `round`,
    [o, s] =
      i === `runner`
        ? [0.76, t.pick([2.4, 3])]
        : i === `office`
          ? [2.4, 1.8]
          : a
            ? [t.pick([1.5, 1.8, 2.4]), 0]
            : t.pick([
                [1.5, 2.4],
                [1.7, 2.4],
                [2.4, 3],
                [2, 2.9],
                [1.2, 1.8],
              ]),
    c = i === `shag` ? 0.03 : 0.012,
    l = P(Math.round(o * 300), Math.round((s || o) * 300), (e, n, r) =>
      vt(e, n, r, t, a ? t.pick([`modern`, `stripe`, `persian`, `solid`]) : i),
    ),
    u = new r({ map: l, roughness: 1 });
  if (a) {
    let e = L(n, o / 2, o / 2, c, u, 0, 0, 0, 64);
    e.castShadow = !1;
  } else {
    let e = z(n, o, c, s, u, 0, 0, 0);
    if (
      ((e.castShadow = !1), i === `persian` || (i === `kilim` && t.chance(0.6)))
    ) {
      let e = U(15656658, 0.95);
      for (let r of [-1, 1])
        for (let i = 0; i < o / 0.02; i++)
          B(
            n,
            0.006,
            0.003,
            0.06,
            e,
            -o / 2 + 0.01 + i * 0.02,
            0.002,
            r * (s / 2 + 0.03),
            0,
            t.range(-0.2, 0.2),
          );
    }
  }
  return F(n, { rug: !0, note: i });
}
function bt(e) {
  let t = x(e),
    n = new f(),
    r = t.pick([1, 1, 2, 3]);
  for (let e = 0; e < r; e++) {
    let i = t.range(0.15, 0.5),
      a = t.range(0.05, 0.13),
      o = t.chance(0.2)
        ? T(t.pick([13624298, 10467240, 15259832, 7049123]), 0.5)
        : U(t.pick(I), t.pick([0.2, 0.5, 0.9])),
      s = t.pick([`bottle`, `amphora`, `cylinder`, `bulb`, `bud`]),
      c = {
        bottle: [
          [0, 0],
          [a, 0],
          [a * 1.1, i * 0.5],
          [a * 0.4, i * 0.75],
          [a * 0.3, i],
          [a * 0.35, i],
        ],
        amphora: [
          [0, 0],
          [a * 0.5, 0],
          [a * 1.1, i * 0.35],
          [a * 0.9, i * 0.7],
          [a * 0.5, i * 0.85],
          [a * 0.6, i],
        ],
        cylinder: [
          [0, 0],
          [a, 0],
          [a, i],
          [a * 0.95, i],
        ],
        bulb: [
          [0, 0],
          [a * 0.6, 0],
          [a * 1.2, i * 0.4],
          [a * 0.8, i * 0.8],
          [a * 0.4, i * 0.9],
          [a * 0.45, i],
        ],
        bud: [
          [0, 0],
          [a * 0.5, 0],
          [a * 0.7, i * 0.3],
          [a * 0.2, i * 0.8],
          [a * 0.25, i],
        ],
      }[s],
      l = (e - (r - 1) / 2) * 0.22;
    if ((D(n, c, o, l, 0, t.range(-0.05, 0.05), 28), t.chance(0.5))) {
      let e = t.pick([`grass`, `branch`, `flowers`]),
        r = c.at(-1)[0];
      for (let a = 0; a < t.int(3, 9); a++) {
        let a = t() * 7,
          o = t.range(0.05, 0.3),
          s = i * t.range(0.8, 1.6),
          c = [l + Math.cos(a) * o * s, i + s, Math.sin(a) * o * s];
        if (
          (M(
            n,
            [
              [l + Math.cos(a) * r * 0.4, i * 0.6, Math.sin(a) * r * 0.4],
              [
                l + Math.cos(a) * o * s * 0.4,
                i + s * 0.5,
                Math.sin(a) * o * s * 0.4,
              ],
              c,
            ],
            0.003,
            U(e === `grass` ? 13482122 : 5925690, 0.8),
            8,
            4,
          ),
          e === `grass`)
        )
          b(n, 0.02, U(14733216, 0.95), ...c, 8).scale.set(0.6, 2, 0.6);
        else if (e === `flowers`)
          b(
            n,
            0.03,
            U(t.pick([15921902, 14711439, 15912079, 12597547, 10190801]), 0.8),
            ...c,
            10,
          );
        else
          for (let e = 0; e < 3; e++)
            b(
              n,
              0.012,
              U(7309898, 0.8),
              c[0] + t.range(-0.03, 0.03),
              c[1] - e * 0.05,
              c[2] + t.range(-0.03, 0.03),
              6,
            );
      }
    }
  }
  return F(n);
}
function xt(e) {
  let t = x(e),
    n = new f(),
    r = t.chance(0.6),
    i = U(t.pick([15986402, 15721423, 15261910, 2763306, 10697515]), 0.7);
  r &&
    z(
      n,
      0.36,
      0.015,
      0.16,
      t.pick([U(12095807, 0.3, 0.9), U(R.walnut, 0.5), U(1710618, 0.3)]),
      0,
      0,
      0,
    );
  let a = t.int(1, 3),
    o = r ? 0.015 : 0;
  for (let e = 0; e < a; e++) {
    let r = t.range(0.07, 0.22),
      s = (e - (a - 1) / 2) * 0.11;
    t.chance(0.3)
      ? (L(n, 0.045, 0.04, 0.1, T(16767392, 0.55), s, o, 0),
        L(n, 0.038, 0.038, 0.06, i, s, o + 0.005, 0))
      : L(n, 0.035, 0.035, r, i, s, o, 0);
    let c = o + (t.chance(0.3) ? 0.065 : r);
    C(n, [s, c, 0], [s, c + 0.012, 0], 0.0012, U(1118481, 0.9), 3);
    let l = b(n, 0.007, V(16756800, 3), s, c + 0.022, 0, 8);
    ((l.scale.y = 2.2), (l.castShadow = !1));
  }
  return F(n);
}
function St(e) {
  let t = x(e),
    n = new f(),
    r = t.range(0.13, 0.18),
    i = t.pick([U(t.pick(I), 0.3), U(R.walnut, 0.5), T(13624298, 0.4), O()]);
  D(
    n,
    [
      [0, 0],
      [r * 0.4, 0],
      [r * 0.45, 0.01],
      [r, 0.07],
      [r * 1.02, 0.075],
    ],
    i,
    0,
    0,
    0,
    32,
  );
  let a = [
    [12597547, 0.038],
    [8367674, 0.038],
    [15965202, 0.04],
    [15122985, 0.035],
    [5909066, 0.012],
  ];
  for (let e = 0; e < t.int(4, 8); e++) {
    let [i, o] = t.pick(a),
      s = t() * 7,
      c = t() * r * 0.55;
    if (o < 0.02) {
      for (let e = 0; e < 8; e++)
        b(
          n,
          o,
          U(i, 0.3),
          Math.cos(s) * c + t.range(-0.02, 0.02),
          0.03 + e * 0.004 + o,
          Math.sin(s) * c + t.range(-0.02, 0.02),
          6,
        );
      continue;
    }
    let l = b(
      n,
      o,
      U(i, 0.45),
      Math.cos(s) * c,
      0.035 + o * 0.8 + (e > 4 ? o : 0),
      Math.sin(s) * c,
      14,
    );
    i === 15122985 && l.scale.set(2.2, 0.8, 0.8);
  }
  return F(n);
}
var Ct = [
    {
      key: `sofa`,
      name: `Sofa`,
      desc: `2- or 3-seat, fabric or leather, 5 leg styles, throw pillows, blanket`,
      build: Qe,
    },
    {
      key: `sectional`,
      name: `Sectional`,
      desc: `L-shaped with a chaise on either side`,
      build: $e,
    },
    {
      key: `armchair`,
      name: `Armchair`,
      desc: `Club, wingback, mid-century or slipper chair`,
      build: et,
    },
    {
      key: `recliner`,
      name: `Recliner`,
      desc: `Leather or fabric, footrest up or down`,
      build: tt,
    },
    {
      key: `dining`,
      name: `Dining chair`,
      desc: `Spindle, ladder, shaker, parsons, bentwood or metal café`,
      build: nt,
    },
    {
      key: `coffeetable`,
      name: `Coffee table`,
      desc: `Wood, glass, round, marble or trunk, styled`,
      build: rt,
    },
    {
      key: `sidetable`,
      name: `Side table`,
      desc: `Nightstand, ceramic drum, C-table or tripod`,
      build: it,
    },
    {
      key: `bookcase`,
      name: `Bookcase`,
      desc: `Full of books, bins and ornaments`,
      build: at,
    },
    {
      key: `tv`,
      name: `TV on a stand`,
      desc: `Flat screen (on or off) with soundbar and console, or an old CRT`,
      build: ot,
    },
    {
      key: `dresser`,
      name: `Dresser`,
      desc: `Chest of drawers with styling on top`,
      build: st,
    },
  ].map((e) => ({ ...e, cat: `furniture` })),
  wt = [
    {
      key: `floorlamp`,
      name: `Floor lamp`,
      desc: `Drum shade, arc, tripod, torchiere or reading lamp`,
      build: ut,
    },
    {
      key: `desklamp`,
      name: `Desk lamp`,
      desc: `Anglepoise, banker's, LED bar or dome`,
      build: dt,
    },
    {
      key: `tablelamp`,
      name: `Table lamp`,
      desc: `Ginger jar, column, gourd, glass or metal base`,
      build: ft,
    },
    {
      key: `fan`,
      name: `Ceiling fan`,
      desc: `3-5 blades, with or without a light kit; spins`,
      build: pt,
    },
    {
      key: `pendant`,
      name: `Pendant light`,
      desc: `Dome, globe, cage, drum or office LED bar`,
      build: mt,
    },
  ].map((e) => ({ ...e, cat: `lighting` })),
  Tt = [
    {
      key: `door`,
      name: `Interior door`,
      desc: `Six-panel, shaker, flush, two-panel, louvered, French, barn or glass office door; closed or ajar`,
      build: gt,
    },
  ].map((e) => ({ ...e, cat: `doors` })),
  Et = [
    {
      key: `rug`,
      name: `Rug`,
      desc: `Persian, kilim, stripe, modern, jute, shag, round, runner or office carpet`,
      build: yt,
    },
  ].map((e) => ({ ...e, cat: `rugs` })),
  Dt = [
    {
      key: `vase`,
      name: `Vases`,
      desc: `Ceramic or glass, 1-3, with dried grass, branches or flowers`,
      build: bt,
    },
    {
      key: `candles`,
      name: `Candles`,
      desc: `Pillars and jars, on a tray or not`,
      build: xt,
    },
    {
      key: `fruit`,
      name: `Fruit bowl`,
      desc: `Apples, oranges, lemons, bananas and grapes`,
      build: St,
    },
  ].map((e) => ({ ...e, cat: `decor` }));
function Y(
  t,
  r,
  i,
  a,
  o = r.pick([
    `terracotta`,
    `glazed`,
    `glazed`,
    `concrete`,
    `basket`,
    `metal`,
    `cylinder`,
  ]),
) {
  let s = {
      terracotta: U(11887934, 0.85),
      glazed: U(r.pick(I), 0.3),
      concrete: U(10328724, 0.95),
      basket: U(12755050, 0.95),
      metal: r.pick([O(), U(12095807, 0.3, 0.9), U(2039586, 0.4, 0.6)]),
      cylinder: U(r.pick([15855593, 2039586, 10467240]), 0.5),
    }[o],
    c =
      o === `terracotta`
        ? [
            [0, 0],
            [i * 0.72, 0],
            [i * 0.95, a * 0.82],
            [i, a * 0.82],
            [i, a],
            [i * 0.93, a],
          ]
        : o === `cylinder` || o === `metal`
          ? [
              [0, 0],
              [i * 0.95, 0],
              [i, 0.01],
              [i, a],
              [i * 0.94, a],
            ]
          : o === `basket`
            ? [
                [0, 0],
                [i * 0.8, 0],
                [i, a * 0.9],
                [i * 1.02, a],
                [i * 0.95, a],
              ]
            : o === `concrete`
              ? [
                  [0, 0],
                  [i * 0.85, 0],
                  [i, a * 0.3],
                  [i, a],
                  [i * 0.88, a],
                ]
              : [
                  [0, 0],
                  [i * 0.55, 0],
                  [i * 0.9, a * 0.35],
                  [i, a * 0.8],
                  [i * 0.9, a],
                  [i * 0.84, a],
                ];
  if ((D(t, c, s, 0, 0, 0, 28), o === `basket`))
    for (let r = 1; r < 6; r++) {
      let o = new e(
        new n(i * (0.8 + (0.2 * r) / 6) + 0.003, 0.004, 4, 32),
        U(10255434, 0.95),
      );
      ((o.rotation.x = Math.PI / 2), (o.position.y = (a * r) / 6), t.add(o));
    }
  return (
    L(t, i * 0.9, i * 0.9, 0.01, U(3877406, 1), 0, a * 0.88, 0),
    o === `terracotta` &&
      r.chance(0.5) &&
      L(t, i * 1.05, i * 0.9, 0.025, U(11887934, 0.85), 0, 0, 0),
    a * 0.9
  );
}
function Ot(e, t, n, r) {
  let i = U(t.pick([6176555, 11897432, 2039586]), 0.55);
  for (let t = 0; t < 4; t++) {
    let a = (t / 4) * Math.PI * 2 + Math.PI / 4;
    L(
      e,
      0.012,
      0.009,
      r,
      i,
      Math.cos(a) * n * 0.8,
      0,
      Math.sin(a) * n * 0.8,
      8,
    ).rotation.set(Math.sin(a) * 0.12, 0, -Math.cos(a) * 0.12);
  }
  return (L(e, n, n, 0.02, i, 0, r - 0.02, 0, 20), r);
}
var kt = {
    fig: (e) => {
      (e.moveTo(0, 0),
        e.bezierCurveTo(0.55, 0.15, 0.6, 0.85, 0.08, 1),
        e.lineTo(-0.08, 1),
        e.bezierCurveTo(-0.6, 0.85, -0.55, 0.15, 0, 0));
    },
    oval: (e) => {
      (e.moveTo(0, 0),
        e.bezierCurveTo(0.45, 0.2, 0.4, 0.8, 0, 1),
        e.bezierCurveTo(-0.4, 0.8, -0.45, 0.2, 0, 0));
    },
    heart: (e) => {
      (e.moveTo(0, 1),
        e.bezierCurveTo(0.35, 0.7, 0.6, 0.35, 0.3, 0.05),
        e.quadraticCurveTo(0.15, -0.05, 0, 0.08),
        e.quadraticCurveTo(-0.15, -0.05, -0.3, 0.05),
        e.bezierCurveTo(-0.6, 0.35, -0.35, 0.7, 0, 1));
    },
    blade: (e) => {
      (e.moveTo(-0.5, 0),
        e.lineTo(0.5, 0),
        e.bezierCurveTo(0.6, 0.5, 0.4, 0.85, 0, 1),
        e.bezierCurveTo(-0.4, 0.85, -0.6, 0.5, -0.5, 0));
    },
    lance: (e) => {
      (e.moveTo(0, 0),
        e.bezierCurveTo(0.3, 0.2, 0.3, 0.7, 0, 1),
        e.bezierCurveTo(-0.3, 0.7, -0.3, 0.2, 0, 0));
    },
    monstera: (e) => {
      let t = [];
      for (let e = 0; e <= 28; e++) {
        let n = e / 28,
          r = Math.PI * (0.5 - n) * 1.9,
          i = 0.55 * (1 - 0.25 * Math.abs(Math.cos(r)));
        (Math.abs(Math.sin(n * Math.PI * 7)) < 0.25 &&
          n > 0.08 &&
          n < 0.92 &&
          (i *= 0.45),
          t.push([Math.cos(r) * i, 0.5 + Math.sin(r) * i * 0.9]));
      }
      e.moveTo(0, 0.05);
      for (let [n, r] of t) e.lineTo(n, r);
      e.lineTo(0, 0.05);
    },
  },
  At = {};
function jt(e) {
  let t = `f_` + e;
  if (!At[t]) {
    let n = new y();
    kt[e](n);
    let r = new s(n, 8);
    (r.applyMatrix4(
      new ee().set(0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1),
    ),
      (At[t] = r));
  }
  return At[t];
}
var X = class {
    constructor() {
      this.parts = new Map();
    }
    leaf(e, t, n, r, i, o, s, c = 0, l = 0) {
      let u = jt(e).clone();
      if (l) {
        let e = u.attributes.position;
        for (let t = 0; t < e.count; t++) {
          let n = e.getX(t),
            r = e.getZ(t);
          e.setY(t, e.getY(t) - l * n * n + Math.abs(r) * l * 0.3);
        }
      }
      let f = new ee().compose(
        new a(...n),
        new d().setFromEuler(new h(c, o, s, `YZX`)),
        new a(r, 1, i),
      );
      (u.applyMatrix4(f),
        this.parts.has(t) || this.parts.set(t, []),
        this.parts.get(t).push(u));
    }
    build(t) {
      for (let [n, r] of this.parts) {
        let i = v(r, !1);
        i.computeVertexNormals();
        let a = new e(i, ie(n));
        ((a.castShadow = a.receiveShadow = !0), t.add(a));
      }
    }
  },
  Mt = [3104042, 4160058, 3500847, 5081663, 2641962, 5934917],
  Z = (e, t = e.pick(Mt), n = 0.55) => U(t, n),
  Nt = (e = 5917226) => U(e, 0.8);
function Pt(e) {
  let t = x(e),
    n = new f(),
    r = new X(),
    i = t.range(1.2, 1.9),
    a = Y(n, t, 0.2, 0.36),
    o = t.int(1, 3),
    s = [Z(t, 3104042, 0.35), Z(t, 3828528, 0.35)];
  for (let e = 0; e < o; e++) {
    let e = t() * 7,
      o = t.range(0.02, 0.15),
      c = i * t.range(0.8, 1),
      l = [Math.cos(e) * o * c, a + c, Math.sin(e) * o * c];
    M(
      n,
      [[0, a, 0], [l[0] * 0.4, a + c * 0.45, l[2] * 0.4], l],
      0.018,
      Nt(7035450),
      12,
      6,
    );
    let u = t.int(10, 18);
    for (let e = 0; e < u; e++) {
      let n = 0.35 + (e / u) * 0.65,
        i = [l[0] * n, a + c * n, l[2] * n],
        o = e * 2.4 + t() * 0.5,
        d = t.range(0.22, 0.34);
      r.leaf(
        `fig`,
        t.pick(s),
        i,
        d,
        d * 0.85,
        o,
        t.range(-0.5, 0.35),
        t.range(-0.3, 0.3),
        0.6,
      );
    }
  }
  return (r.build(n), F(n));
}
function Ft(e) {
  let t = x(e),
    n = new f(),
    r = new X(),
    i = Y(n, t, t.range(0.12, 0.18), t.range(0.2, 0.3)),
    a = t.chance(0.6),
    o = a ? [U(4020780, 0.5), U(2968098, 0.5)] : [U(4877110, 0.5)],
    s = U(14272858, 0.5);
  for (let e = 0; e < t.int(8, 16); e++) {
    let e = t() * 7,
      n = t() * 0.08,
      c = t.range(0.35, 0.8),
      l = t.range(0.05, 0.08),
      u = [Math.cos(e) * n, i - 0.01, Math.sin(e) * n];
    (r.leaf(
      `blade`,
      t.pick(o),
      u,
      c,
      l,
      e,
      Math.PI / 2 - t.range(0.03, 0.25),
      t() * 3,
    ),
      a &&
        t.chance(0.5) &&
        r.leaf(
          `blade`,
          s,
          [u[0] + 0.001, u[1], u[2]],
          c * 0.98,
          l * 1.08,
          e,
          Math.PI / 2 - 0.12,
          0,
        ));
  }
  return (r.build(n), F(n));
}
function It(e) {
  let t = x(e),
    n = new f(),
    r = new X(),
    i = Y(n, t, t.range(0.2, 0.26), t.range(0.3, 0.4)),
    a = [Z(t, 2382378, 0.4), Z(t, 3107632, 0.4)];
  for (let e = 0; e < t.int(7, 12); e++) {
    let o = e * 2.3 + t() * 0.4,
      s = t.range(0.25, 0.7),
      c = t.range(0.5, 1),
      l = [Math.cos(o) * c * s, i + c * t.range(0.6, 1), Math.sin(o) * c * s];
    M(
      n,
      [[0, i, 0], [l[0] * 0.3, i + (l[1] - i) * 0.7, l[2] * 0.3], l],
      0.008,
      U(4880954, 0.6),
      10,
      5,
    );
    let u = t.range(0.3, 0.5);
    r.leaf(
      `monstera`,
      t.pick(a),
      l,
      u,
      u * 1.1,
      o,
      t.range(-0.6, -0.1),
      t.range(-0.3, 0.3),
      0.3,
    );
  }
  return (r.build(n), F(n));
}
function Lt(e) {
  let t = x(e),
    n = new f(),
    r = new X(),
    i = t.chance(0.5),
    o = [U(4160058, 0.45), U(5934917, 0.45), U(9414730, 0.45)],
    s;
  if (i) {
    let e = -1.3,
      r = new f();
    ((r.position.y = e),
      n.add(r),
      (s = Y(r, t, 0.13, 0.16, t.pick([`glazed`, `basket`, `terracotta`]))));
    for (let t = 0; t < 4; t++) {
      let r = (t / 4) * Math.PI * 2;
      M(
        n,
        [
          [0, 0, 0],
          [Math.cos(r) * 0.08, e * 0.5, Math.sin(r) * 0.08],
          [Math.cos(r) * 0.14, -1.1800000000000002, Math.sin(r) * 0.14],
          [Math.cos(r) * 0.1, -1.32, Math.sin(r) * 0.1],
        ],
        0.004,
        U(15327695, 0.95),
        12,
        4,
      );
    }
    s += e;
  } else s = Y(n, t, 0.13, 0.16);
  let l = t.int(5, 10);
  for (let e = 0; e < l; e++) {
    let e = t() * 7,
      l = t.range(0.3, i ? 1.1 : 0.7),
      u = [[0, s, 0]];
    for (let n = 1; n <= 6; n++) {
      let r = n / 6,
        a = 0.13 + r * 0.15;
      u.push([
        Math.cos(e + r * t.range(-0.5, 0.5)) * a,
        s + 0.05 - r * r * l * (i ? 1 : 0.8),
        Math.sin(e + r * 0.3) * a,
      ]);
    }
    M(n, u, 0.003, U(4880954, 0.6), 16, 4);
    let d = new c(u.map((e) => new a(...e)));
    for (let e = 0; e < 8; e++) {
      let n = d.getPoint(0.1 + e * 0.11);
      r.leaf(
        `heart`,
        t.pick(o),
        [n.x, n.y, n.z],
        t.range(0.06, 0.1),
        t.range(0.06, 0.09),
        t() * 7,
        t.range(-0.3, 0.4),
      );
    }
  }
  for (let e = 0; e < 10; e++)
    r.leaf(
      `heart`,
      t.pick(o),
      [t.range(-0.08, 0.08), s + 0.02, t.range(-0.08, 0.08)],
      0.09,
      0.08,
      t() * 7,
      t.range(-0.6, -0.2),
    );
  return (r.build(n), F(n, i ? { ceiling: !0 } : {}));
}
function Rt(e) {
  let t = x(e),
    n = new f(),
    r = new X(),
    i = Y(n, t, t.range(0.2, 0.26), t.range(0.34, 0.44)),
    o = [Z(t, 4160058, 0.5), Z(t, 5081663, 0.5)];
  for (let e = 0; e < t.int(4, 7); e++) {
    let e = t() * 7,
      s = t.range(0.7, 1.4),
      l = t.range(0.1, 0.35),
      u = [Math.cos(e) * l * s, i + s, Math.sin(e) * l * s],
      d = [u[0] * 0.5, i + s * 0.6, u[2] * 0.5],
      f = new c([
        new a(0, i, 0),
        new a(...d),
        new a(u[0] * 1.6, u[1] - 0.25, u[2] * 1.6),
      ]);
    M(
      n,
      f.getPoints(8).map((e) => [e.x, e.y, e.z]),
      0.006,
      U(5929530, 0.6),
      12,
      4,
    );
    for (let e = 3; e <= 20; e++) {
      let n = e / 20,
        i = f.getPoint(n),
        a = f.getTangent(n),
        s = Math.atan2(-a.z, a.x);
      for (let e of [-1, 1])
        r.leaf(
          `lance`,
          t.pick(o),
          [i.x, i.y, i.z],
          0.28 * (1 - n * 0.5),
          0.05,
          s + e * 1.2,
          -0.4 - n * 0.4,
          e * 0.3,
        );
    }
  }
  return (r.build(n), F(n));
}
function zt(e) {
  let t = x(e),
    n = new f(),
    r = new X(),
    i = Y(n, t, 0.17, 0.3),
    a = t.chance(0.4)
      ? [U(3809060, 0.25), U(4860462, 0.25)]
      : [U(2050596, 0.25), U(2775594, 0.25)],
    o = t.range(0.7, 1.3);
  M(
    n,
    [
      [0, i, 0],
      [0.03, i + o * 0.5, 0],
      [0, i + o, 0.02],
    ],
    0.014,
    Nt(5917226),
    10,
    6,
  );
  for (let e = 0; e < t.int(10, 16); e++) {
    let n = 0.25 + (0.75 * e) / 16,
      s = e * 2.4;
    r.leaf(
      `oval`,
      t.pick(a),
      [0.02 * Math.sin(n * 3), i + o * n, 0.01],
      t.range(0.2, 0.3),
      0.14,
      s,
      t.range(-0.3, 0.4),
      0,
      0.4,
    );
  }
  return (r.build(n), F(n));
}
function Bt(e) {
  let t = x(e),
    n = new f(),
    r = new X(),
    i = Y(n, t, t.range(0.14, 0.2), 0.24),
    a = [U(2313509, 0.35), U(2972973, 0.35)];
  for (let e = 0; e < t.int(14, 22); e++) {
    let e = t() * 7,
      n = t.range(0.28, 0.42);
    r.leaf(
      `lance`,
      t.pick(a),
      [Math.cos(e) * 0.04, i + t.range(0.08, 0.2), Math.sin(e) * 0.04],
      n,
      n * 0.45,
      e,
      t.range(0.1, 0.9),
      t.range(-0.2, 0.2),
      0.8,
    );
  }
  let o = U(16185072, 0.5);
  for (let e = 0; e < t.int(2, 5); e++) {
    let e = t() * 7,
      a = t.range(0.35, 0.55),
      s = [Math.cos(e) * 0.08, i + a, Math.sin(e) * 0.08];
    (M(
      n,
      [[0, i, 0], [s[0] * 0.7, i + a * 0.6, s[2] * 0.7], s],
      0.003,
      U(4160058, 0.6),
      8,
      4,
    ),
      r.leaf(`oval`, o, s, 0.11, 0.07, e, 1.25),
      (b(n, 0.008, U(15261872, 0.8), s[0], s[1] + 0.04, s[2], 6).scale.y = 3));
  }
  return (r.build(n), F(n));
}
function Vt(e) {
  let t = x(e),
    n = new f(),
    r = t.pick([1, 3, 3]);
  for (let e = 0; e < r; e++) {
    let i = new f();
    (i.position.set((e - (r - 1) / 2) * 0.17, 0, t.range(-0.03, 0.03)),
      n.add(i));
    let a = new X(),
      o = Y(
        i,
        t,
        t.range(0.05, 0.075),
        t.range(0.07, 0.11),
        t.pick([`terracotta`, `glazed`, `concrete`, `cylinder`]),
      ),
      s = t.pick([`rosette`, `rosette`, `cactus`, `jade`]);
    if (s === `rosette`) {
      let e = t.pick([8366218, 10467240, 7049050, 10850224]);
      for (let t = 0; t < 26; t++) {
        let n = Math.floor(t / 7),
          r = t * 2.4;
        a.leaf(
          `lance`,
          U(e, 0.6),
          [0, o + 0.01, 0],
          0.07 - n * 0.012,
          0.035,
          r,
          0.25 + n * 0.35,
          0,
          0.8,
        );
      }
    } else if (s === `cactus`) {
      let e = U(4156218, 0.7),
        n = b(i, 0.045, e, 0, o + 0.06, 0, 12);
      if (((n.scale.y = 1.8), t.chance(0.5))) {
        let t = b(i, 0.025, e, 0.04, o + 0.08, 0, 10);
        t.scale.y = 1.6;
      }
      t.chance(0.4) && b(i, 0.012, U(14704762, 0.6), 0, o + 0.145, 0, 8);
    } else {
      for (let e = 0; e < 12; e++) {
        let e = t() * 7;
        a.leaf(
          `oval`,
          U(4880954, 0.35),
          [Math.cos(e) * 0.02, o + t.range(0.02, 0.1), Math.sin(e) * 0.02],
          0.04,
          0.03,
          e,
          t.range(-0.5, 0.5),
        );
      }
      M(
        i,
        [
          [0, o, 0],
          [0.01, o + 0.08, 0],
        ],
        0.006,
        Nt(7035450),
        4,
        5,
      );
    }
    a.build(i);
  }
  return F(n);
}
function Ht(e) {
  let t = x(e),
    n = new f(),
    r = new X(),
    i = Y(
      n,
      t,
      t.range(0.2, 0.25),
      t.range(0.34, 0.4),
      t.pick([`cylinder`, `concrete`, `basket`, `metal`]),
    ),
    a = t.range(1.4, 1.9),
    o = [Z(t, 3104042, 0.45), Z(t, 4160058, 0.45), Z(t, 5081663, 0.45)];
  for (let e = 0; e < 3; e++) {
    let t = [];
    for (let n = 0; n <= 8; n++) {
      let r = i + (a * 0.55 * n) / 8,
        o = e * 2.1 + n * 0.9;
      t.push([Math.cos(o) * 0.02, r, Math.sin(o) * 0.02]);
    }
    M(n, t, 0.01, Nt(9075290), 20, 5);
  }
  let s = i + a * 0.72,
    c = a * 0.25;
  for (let e = 0; e < 220; e++) {
    let e = t() * 2 - 1,
      n = t() * 7,
      i = c * Math.cbrt(t.range(0.4, 1)),
      a = Math.sqrt(1 - e * e);
    r.leaf(
      `oval`,
      t.pick(o),
      [Math.cos(n) * a * i, s + e * i * 0.85, Math.sin(n) * a * i],
      0.07,
      0.04,
      t() * 7,
      t.range(-0.8, 0.8),
      t.range(-0.5, 0.5),
    );
  }
  return (r.build(n), F(n));
}
function Ut(e) {
  let t = x(e),
    n = new f(),
    r = new X(),
    i = t.range(0.14, 0.18),
    a = t.range(0.35, 0.55);
  Ot(n, t, i, a);
  let o = new f();
  ((o.position.y = a), n.add(o));
  let s = Y(
      o,
      t,
      i * 0.9,
      i * 1.2,
      t.pick([`glazed`, `cylinder`, `terracotta`]),
    ),
    c = [Z(t), Z(t)];
  if (t.pick([`calathea`, `fern`]) === `fern`)
    for (let e = 0; e < 18; e++) {
      let e = t() * 7,
        n = t.range(0.3, 0.45);
      for (let i = 1; i < 10; i++) {
        let a = i / 10;
        (r.leaf(
          `lance`,
          t.pick(c),
          [
            Math.cos(e) * n * a,
            s + 0.05 + Math.sin(a * 2.5) * n * 0.4 - a * a * n * 0.4,
            Math.sin(e) * n * a,
          ],
          0.06 * (1 - a * 0.5),
          0.02,
          -e + 1.3,
          -0.3,
        ),
          r.leaf(
            `lance`,
            t.pick(c),
            [
              Math.cos(e) * n * a,
              s + 0.05 + Math.sin(a * 2.5) * n * 0.4 - a * a * n * 0.4,
              Math.sin(e) * n * a,
            ],
            0.06 * (1 - a * 0.5),
            0.02,
            -e - 1.3,
            -0.3,
          ));
      }
    }
  else {
    let e = [U(2972218, 0.4), U(5909050, 0.4)];
    for (let n = 0; n < 14; n++) {
      let n = t() * 7,
        i = t.range(0.12, 0.3),
        a = [Math.cos(n) * 0.1, s + i, Math.sin(n) * 0.1];
      (M(o, [[0, s, 0], a], 0.003, U(5909050, 0.6), 4, 4),
        r.leaf(
          `oval`,
          t.chance(0.3) ? e[1] : t.pick(c),
          a,
          0.16,
          0.1,
          n,
          t.range(-0.2, 0.6),
        ));
    }
  }
  return (r.build(o), F(n));
}
var Wt = [
    {
      key: `fiddle`,
      name: `Fiddle-leaf fig`,
      desc: `1.2-1.9 m, one to three stems, big glossy leaves`,
      build: Pt,
    },
    {
      key: `snake`,
      name: `Snake plant`,
      desc: `Upright blades, plain or with yellow edges`,
      build: Ft,
    },
    {
      key: `monstera`,
      name: `Monstera`,
      desc: `Split leaves on long stems`,
      build: It,
    },
    {
      key: `pothos`,
      name: `Pothos`,
      desc: `Trailing vines, on a shelf or hanging in a macramé`,
      build: Lt,
    },
    {
      key: `palm`,
      name: `Kentia palm`,
      desc: `Arching fronds, 4-7 stems`,
      build: Rt,
    },
    {
      key: `rubber`,
      name: `Rubber plant`,
      desc: `Glossy green or burgundy leaves`,
      build: zt,
    },
    {
      key: `lily`,
      name: `Peace lily`,
      desc: `Dark leaves and white spathes`,
      build: Bt,
    },
    {
      key: `succulent`,
      name: `Succulents`,
      desc: `Rosettes, cacti and jade in little pots`,
      build: Vt,
    },
    {
      key: `ficus`,
      name: `Office ficus`,
      desc: `Braided trunk, clipped ball of leaves`,
      build: Ht,
    },
    {
      key: `standplant`,
      name: `Plant on a stand`,
      desc: `Fern or calathea on a mid-century stand`,
      build: Ut,
    },
  ].map((e) => ({ ...e, cat: `plants` })),
  Gt = { key: `red`, face: `#c9231c`, glow: `#ff1c0c`, led: 16724770 },
  Kt = { key: `green`, face: `#1c9a47`, glow: `#12f05a`, led: 3407718 },
  qt = `#0b8a4a`,
  Jt = 0.152;
function Yt(e, t) {
  (e.beginPath(),
    t.forEach(([t, n], r) => (r ? e.lineTo(t, n) : e.moveTo(t, n))),
    e.closePath(),
    e.fill());
}
function Xt(e, t, n, r) {
  ((e.strokeStyle = r),
    (e.lineWidth = n),
    (e.lineCap = e.lineJoin = `round`),
    e.beginPath(),
    t.forEach(([t, n], r) => (r ? e.lineTo(t, n) : e.moveTo(t, n))),
    e.stroke());
}
function Q(e, t, n, r, i, a, o, s = 800) {
  ((e.font = `${s} ${a}px "Arial Narrow", "Helvetica Neue", Arial, sans-serif`),
    (e.fillStyle = o),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`));
  let c = e.measureText(t).width;
  (e.save(),
    e.translate(n, r),
    c > i && e.scale(i / c, 1),
    e.fillText(t, 0, 0),
    e.restore());
}
var Zt = 1.885;
function Qt(e, t, n, r, i, a = null) {
  let o = r / 8,
    s = 0.46 * r,
    c = 0.5 * r,
    l = 0.5 * r,
    u = 0.1 * r,
    d = n - r / 2,
    f = t - (Zt * r) / 2,
    p = (t, n, r, i) => e.fillRect(t, n, r, i);
  e.fillStyle = i;
  let m = f;
  (p(f, d, o, r),
    p(f, d, s, o),
    p(f, n - o / 2, s * 0.82, o),
    p(f, d + r - o, s, o),
    (f += s + u));
  let h = f,
    g = o * 1.25;
  (Yt(e, [
    [f, d],
    [f + g, d],
    [f + c, d + r],
    [f + c - g, d + r],
  ]),
    Yt(e, [
      [f + c - g, d],
      [f + c, d],
      [f + g, d + r],
      [f, d + r],
    ]),
    (f += c + u),
    p(f, d, o, r),
    (f += o + u));
  let _ = f;
  if ((p(f, d, l, o), p(f + l / 2 - o / 2, d, o, r), a)) {
    let t = Math.max(1.5, o * 0.32);
    ((e.fillStyle = a),
      p(m + o, d, t, r),
      p(_ + l / 2 - o / 2 - 1, d + o, o + 2, t),
      p(h + c / 2 - o, n - t / 2, 2 * o, t));
  }
}
function $t(e, t, n, r, i, a) {
  ((e.strokeStyle = a),
    (e.lineWidth = r / 4.2),
    (e.lineJoin = `miter`),
    (e.lineCap = `butt`),
    e.beginPath(),
    e.moveTo(t - i * r * 0.24, n - r / 2),
    e.lineTo(t + i * r * 0.24, n),
    e.lineTo(t - i * r * 0.24, n + r / 2),
    e.stroke());
}
var en = (e) => ((e & 1) << 1) | ((e & 2) >> 1);
function tn(
  e,
  t,
  {
    base: n,
    letters: r,
    glow: i,
    arrows: a = 0,
    stencil: o = !1,
    decorate: s = null,
    px: c = 512,
  },
) {
  let l = Math.max(64, Math.round((c * t) / e)),
    u = 0.6,
    d = (Jt * c) / e,
    f = (Zt + (a & 1 ? u : 0) + (a & 2 ? u : 0)) * d;
  (f > c * 0.92 && (d *= (c * 0.92) / f), (d = Math.min(d, l * 0.8)));
  let p = (e, t, n, r) => {
    (t ? ((e.fillStyle = t), e.fillRect(0, 0, c, l)) : e.clearRect(0, 0, c, l),
      r && s && s(e, c, l));
    let i = a & 1 ? u * d : 0,
      f = a & 2 ? u * d : 0,
      p = c / 2 + (i - f) / 2,
      m = l / 2,
      h = (Zt * d) / 2;
    (Qt(e, p, m, d, n, o ? t : null),
      i && $t(e, p - h - i * 0.55, m, d * 0.62, -1, n),
      f && $t(e, p + h + f * 0.55, m, d * 0.62, 1, n));
  };
  return {
    map: P(c, l, (e) => p(e, n, r, !0)),
    glow: P(c, l, (e) => p(e, n ? `#000` : null, i, !1)),
  };
}
function nn(
  t,
  n,
  i,
  a,
  o,
  s,
  c,
  l = 0,
  {
    intensity: u = 1.5,
    rough: d = 0.35,
    metal: f = 0,
    transparent: p = !1,
  } = {},
) {
  let h = new r({
      map: a.map,
      emissive: 16777215,
      emissiveMap: a.glow,
      emissiveIntensity: u,
      roughness: d,
      metalness: f,
      transparent: p,
      depthWrite: !p,
    }),
    g = new e(new m(n, i), h);
  return (
    g.position.set(o, s, c),
    (g.rotation.y = l),
    (g.receiveShadow = !0),
    t.add(g),
    g
  );
}
function rn(e, t, n, r, i, a, o, s = 1, c = 0.006) {
  for (let [l, u, d, f] of [
    [t + 2 * c, c, 0, n / 2 + c / 2],
    [t + 2 * c, c, 0, -n / 2 - c / 2],
    [c, n, t / 2 + c / 2, 0],
    [c, n, -t / 2 - c / 2, 0],
  ])
    B(e, l, u, 0.004, r, i + d, a + f, o - s * 0.001);
}
var an = (e) => [``, ` ◀`, ` ▶`, ` ◀▶`][e];
function on(e) {
  let t = x(e),
    n = new f(),
    r = t.chance(0.7) ? Gt : Kt,
    i = t.chance(0.25),
    a = t.chance(0.4),
    o = t.pick([0, 0, 1, 2, 3]),
    s = i ? 2763565 : 15855851,
    c = w(s),
    l = w(N(s, i ? 1.5 : 0.92)),
    u = 0.195,
    d = 0.045,
    p = 0.28400000000000003,
    m = 0.159,
    h = a ? -0.075 - u / 2 : 0,
    g = a ? 0 : d / 2;
  A(n, 0.32, u, d, 0.014, c, 0, h, g);
  for (let e of a ? [1, -1] : [1]) {
    let t = g + e * 0.024;
    (nn(
      n,
      p,
      m,
      tn(p, m, {
        base: i ? `#17181a` : `#f5f4ef`,
        letters: r.face,
        glow: r.glow,
        arrows: e > 0 ? o : en(o),
      }),
      0,
      h,
      t,
      e > 0 ? 0 : Math.PI,
    ),
      rn(n, p, m, l, 0, h, t, e));
  }
  (L(n, 0.006, 0.006, 0.004, w(13619151), -0.05, h - u / 2 - 0.004, g, 12),
    b(n, 0.0032, V(r.led, 2.5), 0.05, h - u / 2 - 5e-4, g, 8),
    B(n, 0.321, 0.002, 0.046, U(N(s, 0.8), 0.6), 0, h - u / 2 + 0.012, g),
    a &&
      (L(n, 0.065, 0.065, 0.018, c, 0, -0.018, 0, 28),
      L(n, 0.011, 0.011, 0.058, c, 0, -0.075, 0, 12)));
  let _ = `${r.key}${i ? ` black` : ``}${a ? ` ceiling` : ``}${an(o)}`;
  return F(n, a ? { ceiling: !0, note: _ } : { mount: 2.25, note: _ });
}
function sn(e, t, n, r, i, a, o) {
  (e.save(),
    e.translate(i > 0 ? t + r : t, n),
    e.scale(i > 0 ? -r : r, r),
    (e.strokeStyle = a),
    (e.lineWidth = 0.05),
    e.strokeRect(0.07, 0.07, 0.36, 0.86));
  let s = [
    [
      [0.575, 0.34],
      [0.64, 0.58],
    ],
    [
      [0.58, 0.37],
      [0.47, 0.45],
      [0.39, 0.37],
    ],
    [
      [0.58, 0.37],
      [0.7, 0.44],
      [0.75, 0.55],
    ],
    [
      [0.64, 0.58],
      [0.5, 0.67],
      [0.41, 0.82],
      [0.33, 0.82],
    ],
    [
      [0.64, 0.58],
      [0.73, 0.73],
      [0.86, 0.71],
      [0.9, 0.79],
    ],
  ];
  for (let t of s) Xt(e, t, 0.15, o);
  for (let t of s) Xt(e, t, 0.09, a);
  ((e.fillStyle = o),
    e.beginPath(),
    e.arc(0.6, 0.2, 0.1, 0, Math.PI * 2),
    e.fill(),
    (e.fillStyle = a),
    e.beginPath(),
    e.arc(0.6, 0.2, 0.075, 0, Math.PI * 2),
    e.fill(),
    e.restore());
}
function cn(e, t, n, r, i, a) {
  let o = { right: 0, down: Math.PI / 2, left: Math.PI, up: -Math.PI / 2 }[i];
  (e.save(),
    e.translate(t + r / 2, n + r / 2),
    e.rotate(o),
    e.scale(r, r),
    (e.fillStyle = a),
    Yt(e, [
      [-0.36, -0.09],
      [0.06, -0.09],
      [0.06, -0.27],
      [0.38, 0],
      [0.06, 0.27],
      [0.06, 0.09],
      [-0.36, 0.09],
    ]),
    e.restore());
}
function ln(e, t, n, r, i) {
  let a = Math.round((768 * t) / e),
    o = a * 0.84,
    s = a * 0.08,
    c = r === `left` ? [`arrow`, `man`] : [`man`, `arrow`];
  i && (r === `left` ? c.push(`text`) : c.unshift(`text`));
  let l = 768 - 2 * o - (c.length + 1) * s,
    u = (e, t, u) => {
      ((e.fillStyle = t), e.fillRect(0, 0, 768, a));
      let d = s;
      for (let f of c)
        if (f === `man`) (sn(e, d, s, o, n, u, t), (d += o + s));
        else if (f === `arrow`) (cn(e, d, s, o, r, u), (d += o + s));
        else {
          let t = i.split(`
`);
          (t.forEach((n, r) =>
            Q(
              e,
              n,
              d + l / 2,
              a / 2 + (r - (t.length - 1) / 2) * a * 0.36,
              l * 0.94,
              a * (t.length > 1 ? 0.32 : 0.42),
              u,
            ),
          ),
            (d += l + s));
        }
    };
  return {
    map: P(768, a, (e) => u(e, qt, `#ffffff`)),
    glow: P(768, a, (e) => u(e, `#0a5c33`, `#ffffff`)),
  };
}
function un(e) {
  let t = x(e),
    n = new f(),
    r = t.chance(0.45),
    i = t.pick([
      null,
      null,
      `EXIT`,
      `FIRE EXIT`,
      `FIRE
EXIT`,
      `SORTIE`,
      `AUSGANG`,
      `SALIDA`,
    ]),
    a = t.pick([`left`, `right`, `up`, `down`]),
    o = a === `right` ? 1 : a === `left` ? -1 : t.chance(0.5) ? 1 : -1,
    s = 0.19,
    c = i ? 0.57 : 0.38,
    l = c + 0.024,
    u = 0.214,
    d = 0.03,
    p = t.chance(0.7) ? O() : w(15921903),
    m = r ? -t.range(0.35, 0.7) - u / 2 : 0,
    h = r ? 0 : d / 2;
  A(n, l, u, d, 0.004, p, 0, m, h);
  for (let e of r ? [1, -1] : [1]) {
    let t = e < 0;
    nn(
      n,
      c,
      s,
      ln(
        c,
        s,
        t ? -o : o,
        t ? { left: `right`, right: `left`, up: `up`, down: `down` }[a] : a,
        i,
      ),
      0,
      m,
      h + e * 0.016,
      t ? Math.PI : 0,
      { intensity: 1.35 },
    );
  }
  if (r)
    for (let e of [-1, 1]) {
      let t = e * l * 0.38;
      (C(n, [t, -0.012, 0], [t, m + u / 2, 0], 8e-4, k(), 5),
        L(n, 0.012, 0.012, 0.012, k(), t, -0.012, 0, 12),
        L(n, 0.004, 0.004, 0.02, k(), t, m + u / 2, 0, 8));
    }
  let g = `${a}${
    i
      ? ` ` +
        i.replace(
          `
`,
          ` `,
        )
      : ``
  }${r ? ` hung` : ``}`;
  return F(n, r ? { ceiling: !0, note: g } : { mount: 2.3, note: g });
}
function dn(e) {
  let t = x(e),
    r = new f(),
    i = t.chance(0.75) ? Gt : Kt,
    a = t.chance(0.2),
    o = t.pick([0, 0, 1, 2, 3]),
    s = a ? 2763565 : 15855851,
    c = w(s),
    l = 0.37,
    u = 0.24,
    d = 0.062,
    p = 0.33,
    m = 0.158,
    h = u / 2 - 0.02 - m / 2;
  (A(r, l, u, d, 0.018, c, 0, 0, d / 2),
    nn(
      r,
      p,
      m,
      tn(p, m, {
        base: a ? `#17181a` : `#f5f4ef`,
        letters: i.face,
        glow: i.glow,
        arrows: o,
      }),
      0,
      h,
      0.0635,
    ),
    rn(r, p, m, w(N(s, a ? 1.5 : 0.92)), 0, h, 0.0635));
  let _ = -0.092;
  ((L(
    r,
    0.008,
    0.008,
    0.006,
    w(a ? 5592405 : 14145490),
    -0.05,
    _,
    d,
    14,
  ).rotation.x = Math.PI / 2),
    b(r, 0.0035, V(3997546, 2.5), 0.05, _, 0.0625, 8));
  for (let e = 0; e < 6; e++)
    B(
      r,
      0.012,
      0.003,
      0.002,
      U(N(s, 0.6), 0.7),
      -0.02 + e * 0.008 - 0.02 + 0.02,
      _,
      0.0625,
    );
  let v = T(16054264, 0.45, 0.04),
    y = k(),
    ee = U(16774876, 0.3, 0, { emissive: 16773840, emissiveIntensity: 0.15 });
  for (let e of [-1, 1]) {
    let t = e * l * 0.33;
    L(r, 0.009, 0.009, 0.03, c, t, u / 2 - 0.004, d * 0.55, 10);
    let i = new f();
    (i.position.set(t, 0.16499999999999998, d * 0.55),
      i.rotation.set(0.38, e * 0.5, 0),
      r.add(i),
      j(i, new g(0.042, 0.035, 0.058, 24), c, 0, 0, 0, Math.PI / 2),
      j(i, new g(0.036, 0.022, 0.012, 24, 1, !0), y, 0, 0, 0.024, Math.PI / 2));
    for (let e = 0; e < 3; e++) {
      let t = (e * Math.PI * 2) / 3;
      b(i, 0.004, ee, Math.cos(t) * 0.009, Math.sin(t) * 0.009, 0.022, 8);
    }
    (j(i, new g(0.038, 0.038, 0.004, 24), v, 0, 0, 0.03, Math.PI / 2),
      j(i, new n(0.039, 0.003, 6, 24), c, 0, 0, 0.03));
  }
  return F(r, { mount: 2.25, note: `${i.key}${a ? ` black` : ``}${an(o)}` });
}
function fn(e, t = {}) {
  let n = x(e),
    r = new f(),
    i = n.chance(0.6) ? Gt : Kt,
    a = n.pick([`brushed`, `white`, `black`]),
    o = n.pick([0, 0, 1, 2, 3]),
    s = a === `brushed` ? O() : a === `white` ? w(15921644) : E(),
    c = n.chance(0.35),
    l = n.chance(0.5) ? 0 : n.range(0.2, 0.55),
    u = t.drop ?? l,
    d = 0.36,
    p = 0.335,
    m = 0.2,
    h = 0.034;
  if (u)
    for (let e of [-1, 1])
      (L(r, 0.035, 0.035, 0.012, s, e * d * 0.34, -0.012, 0, 20),
        L(r, 0.0035, 0.0035, u, s, e * d * 0.34, -u - 0.012, 0, 8));
  else A(r, d * 0.94, 0.012, 0.07, 0.004, s, 0, -0.006, 0);
  let g = -(u + 0.012 + h / 2);
  A(r, d, h, 0.03, 0.006, s, 0, g, 0);
  let _ = g - h / 2 - m / 2 + 0.004;
  B(r, p, m, 0.008, c ? ne() : T(14085356, 0.16, 0.02), 0, _, 0);
  for (let e of [1, -1])
    nn(
      r,
      0.315,
      0.18000000000000002,
      tn(0.315, 0.18000000000000002, {
        base: null,
        letters: i.face,
        glow: i.glow,
        arrows: e > 0 ? o : en(o),
      }),
      0,
      _,
      e * 0.0046,
      e > 0 ? 0 : Math.PI,
      { transparent: !0, intensity: 1.7, rough: 0.2 },
    );
  let v = V(i.led, 0.7);
  B(r, p, 0.003, 0.0085, v, 0, _ - m / 2 + 0.0015, 0);
  for (let e of [-1, 1])
    B(r, 0.003, 0.196, 0.0085, v, e * (p / 2 - 0.0015), _, 0);
  return F(r, {
    ceiling: !0,
    note: `${i.key} ${a}${c ? ` mirror` : ``}${u ? ` pendant` : ``}${an(o)}`,
  });
}
function pn(e) {
  let t = x(e),
    n = new f(),
    r = t.chance(0.65) ? Gt : Kt,
    i = t.pick([0, 0, 1, 2, 3]),
    [a, o, s, c] = t.pick([
      [`brushed`, 12172479, 0.38, 0.85],
      [`black`, 1974049, 0.5, 0.4],
      [`white`, 15658730, 0.45, 0.1],
      [`bronze`, 5193003, 0.42, 0.65],
    ]),
    l = U(o, s, c),
    u = t.chance(0.5),
    d = 0.215,
    p = 0.31000000000000005,
    m = 0.185,
    h = (t, n, r) => {
      if (a === `brushed` || a === `bronze`) {
        let i = x(e + 5);
        for (let e = 0; e < 500; e++)
          ((t.fillStyle = `rgba(${i() < 0.5 ? `0,0,0` : `255,255,255`},${i() * 0.06})`),
            t.fillRect(i() * n, i() * r, 30 + i() * 140, 1));
      }
      ((t.strokeStyle = `rgba(0,0,0,0.35)`),
        (t.lineWidth = 3),
        t.strokeRect(8, 8, n - 16, r - 16),
        (t.fillStyle = `rgba(0,0,0,0.4)`));
      for (let [e, i] of [
        [20, 20],
        [n - 20, 20],
        [20, r - 20],
        [n - 20, r - 20],
      ])
        (t.beginPath(), t.arc(e, i, 4, 0, 7), t.fill());
    },
    g = new f();
  (n.add(g), A(g, 0.34, d, 0.058, 0.008, l, 0, 0, 0));
  for (let e of [1, -1])
    (nn(
      g,
      p,
      m,
      tn(p, m, {
        base: W(o),
        letters: r.face,
        glow: r.glow,
        arrows: e > 0 ? i : en(i),
        stencil: !0,
        decorate: h,
      }),
      0,
      0,
      e * 0.0302,
      e > 0 ? 0 : Math.PI,
      { rough: s, metal: c * 0.6, intensity: 1.7 },
    ),
      rn(g, p, m, l, 0, 0, e * 0.0302, e, 0.008));
  return u
    ? ((g.rotation.y = Math.PI / 2),
      g.position.set(0, 0, 0.20600000000000002),
      A(n, 0.075, 0.15, 0.028, 0.006, l, 0, 0, 0.014),
      B(n, 0.03, 0.06, 0.01, l, 0, 0, 0.032),
      F(n, { mount: 2.3, note: `${r.key} ${a} end-mount${an(i)}` }))
    : ((g.position.y = -0.1 - d / 2),
      A(n, 0.14, 0.024, 0.075, 0.006, l, 0, -0.012, 0),
      L(n, 0.013, 0.013, 0.078, l, 0, -0.1, 0, 14),
      F(n, { ceiling: !0, note: `${r.key} ${a}${an(i)}` }));
}
function mn(e, t, n, i, a, o) {
  let s = a ? 0.066 : 0.056,
    c = a ? 0.44 : 0.36,
    l = U(o.pick([11867164, 11014682, 12588574]), 0.28, 0.1);
  D(
    e,
    [
      [0, 0],
      [s * 0.9, 0],
      [s, 0.012],
      [s, c - s * 0.9],
      [s * 0.82, c - s * 0.35],
      [s * 0.45, c - s * 0.05],
      [0.017, c],
      [0, c],
    ],
    l,
    t,
    n,
    i,
    28,
  );
  let u = o.pick([`ABC`, `ABC`, `CO2`, `WATER`]),
    d = P(256, 256, (e, t, n) => {
      ((e.fillStyle = `#f4f2ea`),
        e.fillRect(0, 0, t, n),
        (e.fillStyle = `#b5141c`),
        e.fillRect(0, 0, t, 40),
        Q(e, `FIRE EXTINGUISHER`, t / 2, 21, t * 0.9, 24, `#fff`),
        Q(e, u, t / 2, 72, t * 0.6, 40, `#1b1b1b`, 900),
        [
          [`#1f9a47`, `tri`],
          [`#c9231c`, `sq`],
          [`#1f5bbf`, `circ`],
        ].forEach(([t, n], r) => {
          let i = 58 + r * 70;
          ((e.fillStyle = u === `WATER` && r > 0 ? `#bbb` : t),
            n === `tri`
              ? Yt(e, [
                  [i, 106],
                  [i + 24, 148],
                  [i - 24, 148],
                ])
              : n === `sq`
                ? e.fillRect(i - 21, 107, 42, 42)
                : (e.beginPath(), e.arc(i, 128, 22, 0, 7), e.fill()));
        }),
        (e.fillStyle = `#555`));
      for (let t = 0; t < 8; t++)
        e.fillRect(24, 170 + t * 10, 80 + ((t * 53) % 120), 4);
    });
  j(
    e,
    new g(s + 0.0012, s + 0.0012, c * 0.44, 24, 1, !0, -0.95, 1.9),
    new r({ map: d, roughness: 0.5 }),
    t,
    n + c * 0.47,
    i,
  );
  let f = n + c,
    p = o.chance(0.6) ? k() : U(1907999, 0.5);
  (L(e, 0.018, 0.02, 0.022, O(), t, f - 0.004, i, 14),
    B(e, 0.034, 0.036, 0.03, O(), t, f + 0.034, i),
    B(e, 0.13, 0.007, 0.024, p, t - 0.05, f + 0.066, i, 0, 0, 0.22),
    B(e, 0.12, 0.007, 0.024, p, t - 0.05, f + 0.038, i, 0, 0, 0.03),
    u !== `CO2` &&
      ((L(e, 0.014, 0.014, 0.01, O(), t, f + 0.035, i + 0.02, 16).rotation.x =
        Math.PI / 2),
      (L(
        e,
        0.012,
        0.012,
        0.002,
        U(16053486, 0.4),
        t,
        f + 0.035,
        i + 0.026,
        16,
      ).rotation.x = Math.PI / 2)),
    C(
      e,
      [t + 0.005, f + 0.052, i - 0.03],
      [t + 0.005, f + 0.052, i + 0.03],
      0.0022,
      U(13225168, 0.3, 1),
      6,
    ),
    B(e, 0.012, 0.02, 0.002, w(15911966), t + 0.005, f + 0.036, i + 0.034));
  let m = U(1447447, 0.7);
  return (
    u === `CO2`
      ? (M(
          e,
          [
            [t + 0.02, f + 0.03, i],
            [t + 0.07, f + 0, i + 0.02],
            [t + s + 0.02, n + c * 0.55, i + 0.03],
          ],
          0.008,
          m,
          20,
          6,
        ),
        L(
          e,
          0.018,
          0.045,
          0.11,
          U(1907999, 0.5),
          t + s + 0.02,
          n + c * 0.28,
          i + 0.03,
          14,
        ))
      : (M(
          e,
          [
            [t + 0.02, f + 0.028, i],
            [t + 0.06, f - 0.02, i + 0.015],
            [t + s + 0.012, n + c * 0.6, i + 0.02],
            [t + s + 0.01, n + c * 0.28, i + 0.02],
          ],
          0.0065,
          m,
          24,
          6,
        ),
        L(e, 0.008, 0.012, 0.05, m, t + s + 0.01, n + c * 0.2, i + 0.02, 10)),
    { R: s, H: c + 0.08, kind: u }
  );
}
function hn(e, t, n, r, i, a, o, s = `#c9231c`) {
  return H(
    e,
    t,
    n,
    P(256, Math.round((256 * n) / t), (e, t, n) => {
      ((e.fillStyle = s), e.fillRect(0, 0, t, n), r(e, t, n));
    }),
    i,
    a,
    o,
    { rough: 0.45 },
  );
}
function gn(e, t, n) {
  ((e.fillStyle = `#fff`),
    e.beginPath(),
    e.roundRect(t * 0.52, n * 0.34, t * 0.2, n * 0.52, t * 0.07),
    e.fill(),
    e.fillRect(t * 0.58, n * 0.22, t * 0.08, n * 0.14),
    Xt(
      e,
      [
        [t * 0.6, n * 0.24],
        [t * 0.4, n * 0.2],
        [t * 0.3, n * 0.3],
      ],
      t * 0.035,
      `#fff`,
    ),
    Yt(e, [
      [t * 0.14, n * 0.86],
      [t * 0.18, n * 0.56],
      [t * 0.26, n * 0.66],
      [t * 0.3, n * 0.44],
      [t * 0.38, n * 0.62],
      [t * 0.42, n * 0.86],
    ]));
}
function _n(t) {
  let n = x(t),
    i = new f(),
    a = n.pick([`hook`, `hook`, `cabinet`, `floor`]),
    o = n.chance(0.55);
  if (a === `floor`) {
    L(i, 0.11, 0.115, 0.03, U(1842206, 0.7), 0, 0, 0, 24);
    let e = mn(i, 0, 0.03, 0, o, n);
    return F(i, { note: `${e.kind} on a stand` });
  }
  if (a === `hook`) {
    let e = (o ? 0.066 : 0.056) + 0.02,
      t = -0.3,
      r = mn(i, 0, t, e, o, n);
    return (
      B(i, 0.05, 0.16, 0.004, E(), 0, t + r.H * 0.6, 0.002),
      j(
        i,
        new g(r.R + 0.004, r.R + 0.004, 0.02, 24, 1, !0),
        E(),
        0,
        t + r.H * 0.52,
        e,
      ),
      B(i, 0.03, 0.01, e, E(), 0, t + r.H * 0.52, e / 2),
      B(i, 0.02, 0.05, 0.03, E(), 0, t + r.H - 0.07, 0.02),
      n.chance(0.6) && hn(i, 0.2, 0.2, gn, 0, t + r.H + 0.28, 0.002),
      F(i, { mount: 1.05, note: `${r.kind} on a hook` })
    );
  }
  let s = n.chance(0.5),
    c = s ? O() : U(15855852, 0.4, 0.2),
    l = 0.3,
    u = 0.72,
    d = 0.2;
  (z(i, l, 0.012, d, c, 0, -0.72 / 2, d / 2),
    z(i, l, 0.012, d, c, 0, u / 2 - 0.012, d / 2));
  for (let e of [-1, 1]) B(i, 0.012, u, d, c, e * (l / 2 - 0.006), 0, d / 2);
  B(i, l, u, 0.01, U(14605526, 0.8), 0, 0, 0.005);
  let p = mn(i, -0.01, -0.348, d * 0.45, o, n),
    h = 0.21000000000000002,
    _ = c;
  for (let [e, t, n, r] of [
    [l, 0.03, 0, u / 2 - 0.015],
    [l, 0.03, 0, -0.345],
    [0.03, u, -0.135, 0],
    [0.03, u, l / 2 - 0.015, 0],
  ])
    B(i, e, t, 0.02, _, n, r, h);
  B(i, 0.25, 0.6699999999999999, 0.004, T(14675696, 0.2), 0, 0, h);
  let v = P(64, 512, (e, t, n) => {
      (e.clearRect(0, 0, t, n),
        e.save(),
        e.translate(t / 2, n / 2),
        e.rotate(-Math.PI / 2),
        Q(e, `FIRE EXTINGUISHER`, 0, 0, n * 0.92, 44, `#c9231c`, 900),
        e.restore());
    }),
    y = new e(
      new m(0.05, 0.6),
      new r({ map: v, transparent: !0, roughness: 0.4, depthWrite: !1 }),
    );
  return (
    y.position.set(l / 2 - 0.06, 0, 0.21300000000000002),
    i.add(y),
    B(i, 0.012, 0.08, 0.02, k(), -0.3 / 2 + 0.04, 0, 0.22500000000000003),
    F(i, {
      mount: 1.2,
      note: `${p.kind} in a ${s ? `steel` : `white`} cabinet`,
    })
  );
}
function vn(e) {
  let t = x(e),
    n = new f(),
    r = t.chance(0.35),
    i = w(12719645);
  if (r) {
    let e = 0.088;
    (A(n, 0.096, 0.096, 0.012, 0.004, w(11014680), 0, 0, 0.006),
      A(n, e, e, 0.045, 0.008, i, 0, 0, 0.0225),
      hn(
        n,
        0.056,
        0.056,
        (e, t, n) => {
          ((e.fillStyle = `#1b1b1b`),
            Yt(e, [
              [t * 0.5, n * 0.18],
              [t * 0.78, n * 0.4],
              [t * 0.78, n * 0.78],
              [t * 0.22, n * 0.78],
              [t * 0.22, n * 0.4],
            ]),
            (e.fillStyle = `#f4f4f0`),
            Yt(e, [
              [t * 0.5, n * 0.44],
              [t * 0.6, n * 0.6],
              [t * 0.56, n * 0.72],
              [t * 0.44, n * 0.72],
              [t * 0.4, n * 0.6],
            ]));
        },
        0,
        0.004,
        0.0455,
        `#f4f4f0`,
      ));
    let t = P(256, 48, (e, t, n) => {
      ((e.fillStyle = `#c2161d`),
        e.fillRect(0, 0, t, n),
        Q(e, `FIRE`, t / 2, n / 2, t * 0.9, 36, `#fff`, 900));
    });
    return (
      H(n, 0.05, 0.01, t, 0, e / 2 - 0.009, 0.0455),
      B(n, 0.008, 0.004, 0.003, U(3355443, 0.6), 0.03, -0.036, 0.046),
      F(n, { mount: 1.4, note: `EU call point` })
    );
  }
  let a = 0.05;
  (A(n, 0.125, 0.155, 0.012, 0.004, w(11014680), 0, 0, 0.006),
    A(n, 0.105, 0.135, a, 0.01, i, 0, 0, a / 2));
  let o = P(256, 330, (e, t, n) => {
    ((e.fillStyle = `#c2161d`),
      e.fillRect(0, 0, t, n),
      Q(e, `FIRE`, t / 2, n * 0.13, t * 0.8, 64, `#fff`, 900),
      Q(e, `ALARM`, t / 2, n * 0.27, t * 0.8, 40, `#fff`, 800),
      Q(e, `PULL DOWN`, t / 2, n * 0.86, t * 0.8, 34, `#fff`, 800),
      (e.strokeStyle = `rgba(255,255,255,0.8)`),
      (e.lineWidth = 4),
      e.strokeRect(t * 0.12, n * 0.4, t * 0.76, n * 0.3));
  });
  (H(n, 0.093, 0.12300000000000001, o, 0, 0, 0.051000000000000004, {
    rough: 0.35,
  }),
    A(n, 0.07, 0.024, 0.022, 0.006, w(13900322), 0, -0.004, 0.061));
  let s = P(128, 40, (e, t, n) => {
    ((e.fillStyle = `#d41a22`),
      e.fillRect(0, 0, t, n),
      Q(e, `PULL`, t / 2, n / 2, t * 0.8, 30, `#fff`, 900));
  });
  if ((H(n, 0.05, 0.015, s, 0, -0.004, 0.07250000000000001), t.chance(0.4))) {
    let e = T(15134962, 0.22);
    B(n, 0.145, 0.17500000000000002, 0.004, e, 0, -0.01, 0.095);
    for (let t of [-1, 1])
      B(
        n,
        0.004,
        0.17500000000000002,
        0.045,
        e,
        t * 0.0725,
        -0.01,
        0.07400000000000001,
      );
    (B(n, 0.145, 0.004, 0.045, e, 0, -0.135 / 2 - 0.03, 0.07400000000000001),
      A(n, 0.155, 0.035, 0.07, 0.006, i, 0, 0.0955, 0.035));
    for (let e = 0; e < 5; e++)
      B(n, 0.06, 0.002, 0.002, U(3803660, 0.7), 0, 0.0855 + e * 0.005, 0.071);
    return F(n, { mount: 1.2, note: `with tamper cover` });
  }
  return F(n, { mount: 1.2, note: `dual action` });
}
function yn(e) {
  let t = x(e),
    n = new f(),
    i = t.chance(0.3),
    a = t.chance(0.6),
    o = a ? 12719645 : 15855852,
    s = w(o),
    c = T(16185074, 0.55, 0.05),
    l = a ? `#ffffff` : `#c2161d`;
  if (i) {
    (L(n, 0.09, 0.085, 0.035, s, 0, -0.035, 0, 32),
      L(n, 0.032, 0.03, 0.034, c, 0, -0.069, 0, 20),
      L(
        n,
        0.012,
        0.012,
        0.02,
        U(16448244, 0.2, 0, { emissive: 16777215, emissiveIntensity: 0.1 }),
        0,
        -0.063,
        0,
        10,
      ));
    let e = P(512, 48, (e, t, n) => {
      ((e.fillStyle = W(o)), e.fillRect(0, 0, t, n));
      for (let r = 0; r < 2; r++)
        Q(e, `FIRE`, t * (0.25 + r * 0.5), n / 2, t * 0.2, 34, l, 900);
    });
    return (
      j(
        n,
        new g(0.0875, 0.0875, 0.02, 32, 1, !0),
        new r({ map: e, roughness: 0.5 }),
        0,
        -0.0175,
        0,
      ),
      F(n, { ceiling: !0, note: `${a ? `red` : `white`} ceiling strobe` })
    );
  }
  let u = 0.125,
    d = 0.055;
  (A(n, 0.15200000000000002, 0.137, 0.01, 0.004, w(N(o, 0.9)), 0, 0, 0.005),
    A(n, 0.14, u, d, 0.012, s, 0, 0, d / 2));
  let p = P(256, 228, (e, t, n) => {
    ((e.fillStyle = W(o)),
      e.fillRect(0, 0, t, n),
      (e.fillStyle = a ? `#8a0f14` : `#b8b8b2`));
    for (let r = 0; r < 7; r++)
      e.fillRect(t * 0.12, n * 0.46 + r * 12, t * 0.76, 5);
    Q(e, `FIRE`, t / 2, n * 0.87, t * 0.6, 40, l, 900);
  });
  return (
    H(n, 0.13, 0.115, p, 0, 0, 0.056, { rough: 0.45 }),
    A(n, 0.07, 0.036, 0.03, 0.006, c, 0, u / 2 - 0.028, 0.067),
    B(
      n,
      0.05,
      0.008,
      0.004,
      U(16448244, 0.2, 0, { emissive: 16777215, emissiveIntensity: 0.1 }),
      0,
      u / 2 - 0.028,
      0.063,
    ),
    F(n, { mount: 2.1, note: `${a ? `red` : `white`} wall horn strobe` })
  );
}
function bn(e, t, n, r, i) {
  ((e.fillStyle = i),
    e.beginPath(),
    e.moveTo(t, n + r * 0.45),
    e.bezierCurveTo(
      t - r * 0.9,
      n - r * 0.1,
      t - r * 0.45,
      n - r * 0.75,
      t,
      n - r * 0.3,
    ),
    e.bezierCurveTo(
      t + r * 0.45,
      n - r * 0.75,
      t + r * 0.9,
      n - r * 0.1,
      t,
      n + r * 0.45,
    ),
    e.fill());
}
function xn(e, t, n, r, i) {
  ((e.fillStyle = i),
    Yt(e, [
      [t + r * 0.08, n - r * 0.5],
      [t - r * 0.2, n + r * 0.05],
      [t - r * 0.02, n + r * 0.05],
      [t - r * 0.1, n + r * 0.5],
      [t + r * 0.2, n - r * 0.08],
      [t + r * 0.02, n - r * 0.08],
    ]));
}
function Sn(e) {
  let t = x(e),
    n = new f(),
    r = t.chance(0.7) ? U(15855852, 0.4, 0.2) : O(),
    i = 0.38,
    a = 0.44,
    o = 0.17;
  (z(n, i, 0.012, o, r, 0, -0.44 / 2, o / 2),
    z(n, i, 0.012, o, r, 0, a / 2 - 0.012, o / 2));
  for (let e of [-1, 1]) B(n, 0.012, a, o, r, e * (i / 2 - 0.006), 0, o / 2);
  B(n, i, a, 0.01, r, 0, 0, 0.005);
  let s = t.pick([15909403, 3116878, 14708767, 7304313, 14211542]),
    c = w(s);
  (A(n, 0.24, 0.27, 0.085, 0.02, c, 0, -0.04, 0.06),
    M(
      n,
      [
        [-0.07, 0.095, 0.06],
        [-0.05, 0.13, 0.06],
        [0.05, 0.13, 0.06],
        [0.07, 0.095, 0.06],
      ],
      0.009,
      c,
      16,
      6,
    ),
    A(n, 0.18, 0.16, 0.006, 0.01, U(2763824, 0.5), 0, -0.05, 0.103),
    (L(
      n,
      0.017,
      0.017,
      0.008,
      w(3125324),
      -0.045,
      -0.02,
      0.105,
      18,
    ).rotation.x = Math.PI / 2),
    (L(n, 0.022, 0.022, 0.008, w(15231514), 0.04, -0.08, 0.105, 18).rotation.x =
      Math.PI / 2),
    B(n, 0.06, 0.04, 0.003, U(16053486, 0.5), -0.04, -0.09, 0.106),
    B(n, 0.02, 0.03, 0.05, k(), 0, 0.14, 0.025));
  let l = 0.18000000000000002,
    u = t.pick([`#0b8a4a`, `#c9231c`]);
  for (let [e, t, o, s] of [
    [i, 0.03, 0, a / 2 - 0.015],
    [i, 0.03, 0, -0.44 / 2 + 0.015],
    [0.03, a, -0.175, 0],
    [0.03, a, i / 2 - 0.015, 0],
  ])
    B(n, e, t, 0.02, r, o, s, l);
  B(n, 0.33, 0.39, 0.004, T(14675696, 0.18), 0, 0, l);
  let d = P(512, 96, (e, t, n) => {
    ((e.fillStyle = u),
      e.fillRect(0, 0, t, n),
      bn(e, 70, 50, 70, `#fff`),
      xn(e, 70, 48, 48, u),
      Q(e, `AED`, t * 0.58, n / 2 + 2, t * 0.6, 70, `#fff`, 900));
  });
  return (
    H(n, 0.32, 30.72 / 512, d, 0, a / 2 - 0.06, 0.18300000000000002),
    B(n, 0.012, 0.07, 0.02, k(), i / 2 - 0.04, -0.02, 0.195),
    t.chance(0.5) &&
      (L(n, 0.022, 0.022, 0.012, r, 0, a / 2, o / 2, 16),
      L(n, 0.018, 0.016, 0.03, T(16724e3, 0.7, 0.1), 0, 0.232, o / 2, 16)),
    t.chance(0.65) &&
      hn(
        n,
        0.22,
        0.22,
        (e, t, n) => {
          (bn(e, t * 0.44, n * 0.55, t * 0.62, `#fff`),
            xn(e, t * 0.44, n * 0.52, t * 0.42, `#0b8a4a`),
            (e.fillStyle = `#fff`),
            e.fillRect(t * 0.74, n * 0.12, t * 0.05, n * 0.17),
            e.fillRect(t * 0.68, n * 0.18, t * 0.17, n * 0.05));
        },
        0,
        0.42000000000000004,
        0.002,
        `#0b8a4a`,
      ),
    F(n, { mount: 1.3, note: `${r === O() ? `steel` : `white`} cabinet` })
  );
}
function Cn(e) {
  let t = x(e),
    n = new f(),
    r = t.pick([`iso`, `us`, `green`]),
    i = r === `green` ? 1935944 : 15921644,
    a = r === `us` ? U(i, 0.4, 0.3) : w(i),
    o = t.range(0.3, 0.36),
    s = t.range(0.24, 0.3),
    c = 0.1;
  (A(n, o, s, c, 0.012, a, 0, 0, c / 2),
    B(n, o + 0.001, 0.003, c * 0.9, U(N(i, 0.75), 0.6), 0, s * 0.3, c / 2));
  let l = P(512, Math.round((512 * s) / o), (e, t, n) => {
    ((e.fillStyle = W(i)), e.fillRect(0, 0, t, n));
    let a = r === `iso` ? `#0b8a4a` : r === `us` ? `#c9231c` : `#ffffff`,
      o = t / 2,
      s = n * (r === `us` ? 0.42 : 0.5),
      c = n * 0.38;
    (r === `iso`
      ? ((e.fillStyle = `#0b8a4a`),
        e.fillRect(o - c * 0.75, s - c * 0.75, c * 1.5, c * 1.5),
        (e.fillStyle = `#fff`))
      : (e.fillStyle = a),
      e.fillRect(o - c * 0.2, s - c * 0.6, c * 0.4, c * 1.2),
      e.fillRect(o - c * 0.6, s - c * 0.2, c * 1.2, c * 0.4),
      r === `us` &&
        Q(e, `FIRST AID`, o, n * 0.82, t * 0.7, n * 0.14, `#c9231c`, 900));
  });
  H(n, o - 0.02, s - 0.02, l, 0, 0, 0.101, { rough: 0.45 });
  for (let e of [-1, 1])
    A(
      n,
      0.03,
      0.02,
      0.012,
      0.004,
      r === `us` ? k() : w(N(i, 0.85)),
      e * o * 0.32,
      s * 0.3,
      0.10500000000000001,
    );
  return (
    M(
      n,
      [
        [-0.06, s / 2 - 0.004, c * 0.55],
        [-0.045, s / 2 + 0.025, c * 0.55],
        [0.045, s / 2 + 0.025, c * 0.55],
        [0.06, s / 2 - 0.004, c * 0.55],
      ],
      0.007,
      r === `us` ? k() : w(N(i, 0.85)),
      16,
      6,
    ),
    F(n, {
      mount: 1.45,
      note: {
        iso: `ISO green cross`,
        us: `metal, red cross`,
        green: `green case`,
      }[r],
    })
  );
}
var wn = [
  {
    key: `exitled`,
    name: `Exit sign, LED`,
    desc: `US thermoplastic box sign: red or green 6" letters, white or black, wall or ceiling, chevrons`,
    build: on,
  },
  {
    key: `exitiso`,
    name: `Exit sign, running man`,
    desc: `ISO 7010 green light box: figure, doorway, arrow, optional EXIT / FIRE EXIT / SORTIE text; wall or wire-hung`,
    build: un,
  },
  {
    key: `exitcombo`,
    name: `Exit + emergency lights`,
    desc: `Exit sign with two swivel lamp heads, test button and charge LED`,
    build: dn,
  },
  {
    key: `exitedge`,
    name: `Exit sign, edge-lit`,
    desc: `Clear or mirror acrylic blade under a slim housing, flush canopy or pendant rods`,
    build: fn,
  },
  {
    key: `exitdiecast`,
    name: `Exit sign, die-cast`,
    desc: `Cast aluminium with stencil letters, brushed / black / white / bronze, ceiling or end mount`,
    build: pn,
  },
  {
    key: `extinguisher`,
    name: `Fire extinguisher`,
    desc: `ABC, CO2 or water on a wall hook (with sign), in a glass cabinet or on a floor stand`,
    build: _n,
  },
  {
    key: `pullstation`,
    name: `Fire alarm pull`,
    desc: `US dual-action pull station (sometimes under a tamper cover) or EU call point`,
    build: vn,
  },
  {
    key: `hornstrobe`,
    name: `Horn strobe`,
    desc: `Red or white wall horn / strobe, or a round ceiling strobe`,
    build: yn,
  },
  {
    key: `aed`,
    name: `AED cabinet`,
    desc: `Glass-front cabinet with a defibrillator, alarm light and the green AED sign`,
    build: Sn,
  },
  {
    key: `firstaid`,
    name: `First-aid kit`,
    desc: `Wall box: ISO green cross, metal with a red cross, or a green case`,
    build: Cn,
  },
].map((e) => ({ ...e, cat: `safety` }));
function Tn(e, t, n = 0.6) {
  (e.userData.nightMats ??= []).push([t, n]);
}
function $(e, t, n, r, i, a, o, s = 800) {
  ((e.font = `${s} ${a}px "Helvetica Neue", Arial, sans-serif`),
    (e.fillStyle = o),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`));
  let c = e.measureText(t).width;
  (e.save(),
    e.translate(n, r),
    c > i && e.scale(i / c, 1),
    e.fillText(t, 0, 0),
    e.restore());
}
var En = (e, t = 0.8, n = 0.3) =>
  new r({
    map: e,
    emissive: 16777215,
    emissiveMap: e,
    emissiveIntensity: t,
    roughness: n,
  });
function Dn(t, n, r, i, a, o, s, c = 0) {
  let l = new e(new m(n, r), i);
  return (
    l.position.set(a, o, s),
    (l.rotation.y = c),
    (l.receiveShadow = !0),
    t.add(l),
    l
  );
}
var On = null;
function kn() {
  if (!On) {
    let e = [];
    for (let t = 0; t <= 42; t++) {
      let n = (t / 42) * Math.PI * 2 * 7;
      e.push(
        new a(
          Math.cos(n) * 0.028,
          Math.sin(n) * 0.028,
          -0.135 + (t / 42) * 0.27,
        ),
      );
    }
    On = new o(new c(e), 42, 0.002, 3, !1);
  }
  return On;
}
var An = [
  14169131, 15909403, 2777801, 2071111, 15234090, 8011696, 2829099, 15788248,
  13214315, 1745848,
];
function jn(e) {
  let t = x(e),
    n = new f(),
    i = t.chance(0.55),
    a = 1.83;
  if (i) {
    let e = 0.94,
      i = U(t.pick([2040358, 2829875, 6119783]), 0.45, 0.35),
      o = 0.23,
      s = 0.52,
      c = 1.16,
      l = 0.71 - 0.03,
      u = -0.11499999999999999;
    (z(n, e, a, 0.56, i, 0, 0, -0.15),
      z(n, 0.015, a, 0.3, i, -0.94 / 2 + 0.0075, 0, 0.28),
      z(n, e, 0.15000000000000013, 0.3, i, 0, 1.68, 0.28),
      z(n, e, s, 0.3, i, 0, 0, 0.28),
      z(
        n,
        o,
        c,
        0.3,
        U(N(i.color.getHex(), 1.3), 0.45, 0.35),
        e / 2 - o / 2,
        s,
        0.28,
      ),
      B(
        n,
        l,
        c,
        0.01,
        U(14278112, 0.6, 0, { emissive: 15660031, emissiveIntensity: 0.25 }),
        u,
        1.1,
        0.135,
      ),
      B(n, l, 0.012, 0.02, V(16054527, 1.2), u, 1.665, 0.4));
    let d = t.int(5, 7),
      f = l / d;
    for (let e = 0; e < 6; e++) {
      let i = s + e * 0.19333333333333333 + 0.01;
      z(n, l, 0.008, 0.28, U(10133155, 0.4, 0.7), u, i, 0.28);
      let a = P(512, 24, (n, r, i) => {
        ((n.fillStyle = `#10151b`), n.fillRect(0, 0, r, i));
        for (let a = 0; a < d; a++)
          ($(
            n,
            `${String.fromCharCode(70 - e)}${a + 1}`,
            ((a + 0.3) * r) / d,
            i / 2,
            30,
            18,
            `#fff`,
            700,
          ),
            $(
              n,
              `$${(t.int(3, 9) * 0.25).toFixed(2)}`,
              ((a + 0.68) * r) / d,
              i / 2,
              44,
              16,
              `#9fe6a0`,
              600,
            ));
      });
      ((a.userData.opaquePanel = !0),
        Dn(
          n,
          l,
          0.022,
          new r({ map: a, roughness: 0.5 }),
          u,
          i - 0.004,
          0.421,
        ));
      for (let e = 0; e < d; e++) {
        let r = u - l / 2 + (e + 0.5) * f,
          a = t.pick(An),
          o = t.chance(0.12) ? 0 : t.int(1, 3);
        j(n, kn(), k(), r, i + 0.035, 0.28);
        let s = Math.min(f * 0.8, t.range(0.07, 0.11)),
          c = Math.min(0.1433333333333333, t.range(0.1, 0.16)),
          d = U(a, t.pick([0.3, 0.55]), t.chance(0.3) ? 0.4 : 0);
        for (let e = 0; e < o; e++)
          A(n, s, c, 0.03, 0.008, d, r, i + 0.012 + c / 2, 0.395 - e * 0.07);
      }
    }
    B(n, 0.69, c, 0.006, T(14478322, 0.16), u, 1.1, 0.426);
    let p = P(256, 640, (e, t, n) => {
      ((e.fillStyle = `#2a2d31`),
        e.fillRect(0, 0, t, n),
        (e.fillStyle = `#0c1a10`),
        e.fillRect(30, 40, t - 60, 60),
        $(e, `MAKE SELECTION`, t / 2, 70, t - 80, 22, `#5dff7a`, 600));
      for (let t = 0; t < 12; t++) {
        let n = 50 + (t % 3) * 60,
          r = 140 + Math.floor(t / 3) * 58;
        ((e.fillStyle = `#cfd3d6`),
          e.beginPath(),
          e.roundRect(n, r, 44, 42, 6),
          e.fill(),
          $(
            e,
            `123456789*0#`[t] === `*` ? `CLR` : `1234567890ABCDEF`[t],
            n + 22,
            r + 22,
            36,
            22,
            `#222`,
            700,
          ));
      }
      ((e.fillStyle = `#111`),
        e.fillRect(60, 400, t - 120, 14),
        e.fillRect(t / 2 - 5, 440, 10, 40),
        (e.fillStyle = `#16181b`),
        e.beginPath(),
        e.roundRect(50, 510, t - 100, 90, 10),
        e.fill(),
        $(e, `TAP · INSERT · SWIPE`, t / 2, 555, t - 120, 16, `#9ab`, 600));
    });
    (Dn(
      n,
      0.21000000000000002,
      c * 0.9,
      En(p, 0.35, 0.4),
      e / 2 - o / 2,
      1.1,
      0.431,
    ),
      B(n, l * 0.78, 0.17, 0.02, U(855568, 0.5, 0.2), u, 0.24, 0.435));
    let m = P(256, 48, (e, t, n) => {
      ((e.fillStyle = `#0d0e10`),
        e.fillRect(0, 0, t, n),
        $(e, `PUSH`, t / 2, n / 2, t * 0.4, 30, `#ddd`, 800));
    });
    (Dn(n, 0.18, 0.034, new r({ map: m, roughness: 0.5 }), u, 0.29, 0.446),
      Dn(
        n,
        0.86,
        0.08,
        En(
          P(512, 64, (e, n, r) => {
            ((e.fillStyle = `#16181b`),
              e.fillRect(0, 0, n, r),
              $(
                e,
                t.pick([`SNACKS`, `FRESH SNACKS`, `REFRESHMENTS`, `GRAB & GO`]),
                n / 2,
                r / 2,
                n * 0.8,
                44,
                `#f2c21b`,
                900,
              ));
          }),
          0.9,
        ),
        0,
        1.755,
        0.431,
      ));
    for (let t of [-1, 1])
      L(n, 0.02, 0.02, 0.03, U(1118481, 0.8), t * (e / 2 - 0.06), 0, 0.37, 8);
    return F(n, { note: `snack machine` });
  }
  let o = 0.99,
    s = t.pick([
      [`#b81c22`, `#e84a3a`, 12065826],
      [`#1f4fa0`, `#3f8ae0`, 2052e3],
      [`#1d6b3a`, `#3fbf6a`, 1927994],
      [`#202225`, `#52565c`, 2105893],
      [`#e0701f`, `#f7b23a`, 14708767],
    ]),
    c = U(s[2], 0.4, 0.3);
  z(n, o, a, 0.86, c, 0, 0, 0);
  let l = P(512, 1024, (t, n, r) => {
    let i = t.createLinearGradient(0, 0, n, r);
    (i.addColorStop(0, s[1]),
      i.addColorStop(1, s[0]),
      (t.fillStyle = i),
      t.fillRect(0, 0, n, r));
    let a = x(e + 3);
    for (let e = 0; e < 60; e++)
      ((t.fillStyle = `rgba(255,255,255,${a() * 0.25})`),
        t.beginPath(),
        t.arc(a() * n, a() * r, 3 + a() * 16, 0, 7),
        t.fill());
    (t.save(),
      t.translate(n * 0.5, r * 0.46),
      t.rotate(-0.12),
      (t.fillStyle = `rgba(255,255,255,0.92)`),
      t.beginPath(),
      t.roundRect(-90, -250, 180, 470, 70),
      t.fill(),
      (t.fillStyle = s[0]),
      t.fillRect(-90, -120, 180, 170),
      (t.fillStyle = `rgba(0,0,0,0.25)`),
      t.fillRect(-60, -265, 120, 20),
      t.restore(),
      $(t, `ICE COLD`, n / 2, r * 0.12, n * 0.8, 90, `#ffffff`, 900),
      $(t, `DRINKS`, n / 2, r * 0.86, n * 0.8, 110, `#ffffff`, 900));
  });
  Dn(n, o * 0.72, a * 0.8, En(l, 0.9), -0.99 * 0.12, a * 0.55, 0.431);
  let u = P(128, 640, (t, n, r) => {
    ((t.fillStyle = `#1b1c1f`),
      t.fillRect(0, 0, n, r),
      (t.fillStyle = `#0c1a10`),
      t.fillRect(14, 20, n - 28, 36),
      $(t, `$1.75`, n / 2, 38, n - 40, 22, `#5dff7a`, 600));
    for (let r = 0; r < 8; r++) {
      let i = 80 + r * 52;
      ((t.fillStyle = `#e8e8e4`),
        t.beginPath(),
        t.roundRect(18, i, n - 36, 42, 6),
        t.fill(),
        (t.fillStyle = W(An[(r * 3 + e) % An.length])),
        t.fillRect(26, i + 6, 20, 30),
        (t.fillStyle = `#444`),
        t.fillRect(54, i + 16, 40, 8));
    }
    ((t.fillStyle = `#111`),
      t.fillRect(30, 520, n - 60, 10),
      t.fillRect(n / 2 - 4, 548, 8, 30));
  });
  return (
    Dn(n, o * 0.2, a * 0.55, En(u, 0.4, 0.4), o * 0.37, a * 0.62, 0.431),
    B(n, o * 0.5, 0.16, 0.02, U(855568, 0.5, 0.2), -0.99 * 0.12, 0.22, 0.435),
    B(
      n,
      o * 0.02,
      a * 0.84,
      0.02,
      U(N(s[2], 0.6), 0.4, 0.4),
      o * 0.25,
      a * 0.55,
      0.438,
    ),
    F(n, { note: `drink machine` })
  );
}
function Mn(t) {
  let n = x(t),
    r = new f(),
    i = n.pick([2.4, 3, 3.6, 4.2]),
    a = i > 3 ? 1.22 : 1.07,
    o = n.range(0.035, 0.05),
    s = 0.74,
    c = n.pick([`rect`, `boat`, `racetrack`]),
    l = n.pick([
      R.walnut,
      R.oak,
      R.espresso,
      R.cherry,
      R.maple,
      15526628,
      2763565,
    ]),
    u = U(l, l === 15526628 ? 0.35 : 0.45),
    d = U(N(l, 0.8), 0.5),
    p = [],
    m = (e) =>
      c === `boat` ? (a / 2) * (1 - 0.3 * ((2 * e) / i) ** 2) : a / 2;
  if (c === `racetrack`) {
    let e = a / 2,
      t = i / 2 - e;
    for (let n = 0; n <= 24; n++) {
      let r = -Math.PI / 2 + (n / 24) * Math.PI;
      p.push([t + Math.cos(r) * e, Math.sin(r) * e]);
    }
    for (let n = 0; n <= 24; n++) {
      let r = Math.PI / 2 + (n / 24) * Math.PI;
      p.push([-t + Math.cos(r) * e, Math.sin(r) * e]);
    }
  } else {
    let e = 0.06,
      t = i / 2;
    for (let n = 0; n <= 24; n++) {
      let r = -t + e + (n / 24) * (i - 2 * e);
      p.push([r, -m(r)]);
    }
    for (let n = 0; n <= 24; n++) {
      let r = t - e - (n / 24) * (i - 2 * e);
      p.push([r, m(r)]);
    }
  }
  let h = re(r, p, o, u, 0, s - o, 0, 0.004);
  ((h.rotation.x = Math.PI / 2), (h.position.y = s));
  let _ = n.pick([`slab`, `drum`, `trestle`]),
    v =
      _ === `trestle`
        ? n.pick([E(), O()])
        : n.chance(0.5)
          ? d
          : U(2763565, 0.4, 0.4),
    y = i >= 3.6 ? [-i * 0.3, 0, i * 0.3] : [-i * 0.28, i * 0.28];
  for (let e of y)
    if (_ === `slab`)
      (z(r, 0.06, s - o, a * 0.55, v, e, 0, 0),
        z(r, 0.1, 0.02, a * 0.62, v, e, 0, 0));
    else if (_ === `drum`)
      (L(r, 0.16, 0.16, s - o - 0.02, v, e, 0.02, 0, 28),
        L(r, 0.3, 0.3, 0.02, v, e, 0, 0, 28));
    else {
      for (let t of [-1, 1]) z(r, 0.05, s - o, 0.05, v, e, 0, t * a * 0.34);
      (z(r, 0.05, 0.05, a * 0.72, v, e, s - o - 0.05, 0),
        z(r, 0.06, 0.02, 0.1, v, e, 0, a * 0.34),
        z(r, 0.06, 0.02, 0.1, v, e, 0, -a * 0.34));
    }
  _ === `trestle` && z(r, i * 0.6, 0.05, 0.04, v, 0, s - o - 0.05, 0);
  let ee = U(1908256, 0.45, 0.5);
  for (let e of y.length === 3 ? [-i * 0.22, i * 0.22] : [0]) {
    B(r, 0.24, 0.004, 0.1, ee, e, 0.742, 0);
    for (let t = 0; t < 3; t++)
      B(
        r,
        0.03,
        0.001,
        0.018,
        U(1118481, 0.6),
        e - 0.06 + t * 0.06,
        0.7444999999999999,
        0.02,
      );
  }
  let te = new e(new g(0.13, 0.15, 0.03, 3), U(2763566, 0.45));
  (te.position.set(y.length === 3 ? 0 : i * 0.18, 0.755, 0),
    (te.rotation.y = n.range(0, 2)),
    (te.castShadow = !0),
    r.add(te),
    b(r, 0.02, V(4436223, 0.9), te.position.x, 0.77, 0, 10));
  let S = Math.floor(i / 0.75);
  for (let e = 0; e < S; e++)
    for (let t of [-1, 1]) {
      if (!n.chance(0.45)) continue;
      let a = -i / 2 + ((e + 0.5) * i) / S,
        o = t * (m(a) - 0.2);
      (z(
        r,
        0.21,
        0.008,
        0.28,
        U(n.pick([16184556, 15917690, 16053488]), 0.9),
        a,
        s,
        o,
        n.range(-0.2, 0.2),
      ),
        C(
          r,
          [a + 0.12, 0.744, o - 0.06],
          [a + 0.13, 0.744, o + 0.08],
          0.004,
          w(n.pick([1907999, 2052e3, 13181724])),
          6,
        ),
        n.chance(0.4) &&
          D(
            r,
            [
              [0, 0],
              [0.03, 0],
              [0.036, 0.11],
              [0, 0.11],
            ],
            U(14675698, 0.05, 0, {
              transparent: !0,
              opacity: 0.35,
              depthWrite: !1,
            }),
            a - 0.2,
            s,
            o * 0.8,
            16,
          ));
    }
  return F(r, { note: `${i} m ${c}, ${_} base` });
}
function Nn(t) {
  let n = x(t),
    i = new f(),
    a = n.pick([`flat`, `parabolic`, `prismatic`, `basket`]),
    o = a === `parabolic` || n.chance(0.6),
    s = 0.6,
    c = o ? 1.2 : 0.6,
    l = U(16053490, 0.45, 0.1);
  for (let e of [-1, 1])
    (B(i, 0.65, 0.008, 0.024, l, 0, -0.004, e * (c / 2 + 0.012)),
      B(i, 0.024, 0.008, c, l, e * 0.312, -0.004, 0));
  z(i, s, 0.02, c, l, 0, -0.02, 0);
  let u = V(16054527, 0);
  if (a === `flat`)
    Tn(i, B(i, 0.57, 0.004, c - 0.03, u, 0, -0.021, 0).material, 1.6);
  else if (a === `prismatic`) {
    let e = P(128, 256, (e, t, n) => {
        ((e.fillStyle = `#e9edf2`),
          e.fillRect(0, 0, t, n),
          (e.fillStyle = `rgba(160,170,185,0.5)`));
        for (let r = 0; r < n; r += 6)
          for (let n = (r / 6) % 2 ? 3 : 0; n < t; n += 6)
            e.fillRect(n, r, 2, 2);
      }),
      t = new r({
        map: e,
        color: 16054527,
        emissive: 16054527,
        emissiveMap: e,
        emissiveIntensity: 0,
        roughness: 0.4,
      }),
      n = Dn(i, 0.5599999999999999, c - 0.04, t, 0, -0.021, 0);
    ((n.rotation.x = Math.PI / 2), Tn(i, t, 1.6));
    for (let e of [-1, 1])
      B(i, 0.02, 0.012, c - 0.02, l, e * (s / 2 - 0.02), -0.02 - 0.006, 0);
  } else if (a === `basket`) {
    Tn(i, B(i, 0.52, 0.004, c - 0.03, u, 0, -0.021, 0).material, 1.6);
    let t = new e(
      new g(0.2, 0.2, c - 0.04, 24, 1, !0, Math.PI / 2 + 0.6, Math.PI - 1.2),
      U(16185336, 0.35, 0, { transparent: !0, opacity: 0.85, side: 2 }),
    );
    ((t.rotation.x = Math.PI / 2),
      t.position.set(0, -0.02 + 0.14, 0),
      i.add(t));
    for (let e of [-1, 1])
      B(i, 0.06, 0.004, c - 0.03, l, e * (s / 2 - 0.04), -0.022, 0);
  } else {
    Tn(i, B(i, 0.57, 0.004, c - 0.03, u, 0, -0.012, 0).material, 1.6);
    let e = U(14212578, 0.15, 1),
      t = 0.045;
    for (let n = 0; n <= 3; n++)
      B(
        i,
        0.004,
        t,
        c - 0.02,
        e,
        -0.29 + (n * 0.58) / 3,
        -0.032499999999999994,
        0,
      );
    for (let n = 0; n <= 6; n++)
      B(
        i,
        0.58,
        t,
        0.004,
        e,
        0,
        -0.032499999999999994,
        -c / 2 + 0.01 + (n * (c - 0.02)) / 6,
      );
  }
  return F(i, { ceiling: !0, light: !0, note: `${o ? `2x4` : `2x2`} ${a}` });
}
function Pn(e) {
  let t = x(e),
    r = new f(),
    a = t.pick([`updown`, `halfdrum`, `swingarm`, `candle`, `cage`]),
    o = t.pick([E(), O(), U(12095807, 0.3, 0.9), k(), U(7031342, 0.4, 0.7)]),
    s = (e = 3) => {
      let t = V(16773584, 0);
      return (Tn(r, t, e), t);
    };
  if (a === `updown`) {
    (B(r, 0.06, 0.12, 0.012, o, 0, 0, 0.006),
      B(r, 0.02, 0.02, 0.05, o, 0, 0, 0.035),
      j(
        r,
        new g(0.045, 0.045, 0.18, 24, 1, !0),
        o === k() ? k() : o,
        0,
        0,
        0.1,
      ));
    for (let e of [-1, 1])
      j(r, new i(0.043, 24), s(1.6), 0, e * 0.085, 0.1, (e * -Math.PI) / 2);
  } else if (a === `halfdrum`) {
    B(r, 0.1, 0.16, 0.012, o, 0, 0, 0.006);
    let e = U(t.pick([15920610, 15261900, 14209732]), 0.9, 0, {
      emissive: 16767392,
      emissiveIntensity: 0,
      side: 2,
    });
    (Tn(r, e, 0.5),
      j(
        r,
        new g(0.15, 0.15, 0.2, 24, 1, !0, -Math.PI / 2, Math.PI),
        e,
        0,
        0,
        0.012,
      ),
      b(r, 0.025, s(), 0, 0, 0.06, 10));
  } else if (a === `swingarm`) {
    ((L(r, 0.045, 0.045, 0.014, o, 0, -0.1, 0.007, 20).rotation.x =
      Math.PI / 2),
      B(r, 0.02, 0.2, 0.02, o, 0, -0.1, 0.02),
      M(
        r,
        [
          [0, -0.02, 0.02],
          [0, 0.03, 0.15],
          [0, 0.03, 0.4],
        ],
        0.006,
        o,
        16,
        6,
      ));
    let e = U(t.pick([15920610, 2763308, 15261900]), 0.9, 0, {
      emissive: 16767392,
      emissiveIntensity: 0,
    });
    (Tn(r, e, 0.5),
      D(
        r,
        [
          [0.12, -0.1],
          [0.08, 0.06],
        ],
        e,
        0,
        -0.06,
        0.4,
        28,
      ),
      b(r, 0.025, s(), 0, -0.02, 0.4, 10));
  } else if (a === `candle`) {
    let e = t.chance(0.6);
    ((D(
      r,
      [
        [0, 0],
        [0.05, 0.01],
        [0.055, 0.06],
        [0.03, 0.13],
        [0, 0.14],
      ],
      o,
      0,
      -0.1,
      0.004,
      20,
    ).rotation.x = 0),
      B(r, 0.08, 0.2, 0.01, o, 0, -0.03, 0.005));
    for (let n of e ? [-1, 1] : [0]) {
      let e = n * 0.13;
      if (
        (M(
          r,
          [
            [0, -0.05, 0.01],
            [e * 0.5, -0.07, 0.08],
            [e, -0.03, 0.12],
          ],
          0.006,
          o,
          16,
          6,
        ),
        L(r, 0.025, 0.02, 0.02, o, e, -0.03, 0.12, 14),
        L(r, 0.011, 0.011, 0.08, U(16052196, 0.6), e, -0.01, 0.12, 12),
        b(r, 0.012, s(2), e, 0.085, 0.12, 8).scale.set(1, 1.6, 1),
        t.chance(0.6))
      ) {
        let t = U(15920610, 0.9, 0, {
          emissive: 16767392,
          emissiveIntensity: 0,
        });
        (Tn(r, t, 0.5),
          D(
            r,
            [
              [0.06, 0],
              [0.035, 0.09],
            ],
            t,
            e,
            0.04,
            0.12,
            24,
          ));
      }
    }
  } else {
    ((L(r, 0.055, 0.055, 0.012, o, 0, 0, 0.006, 20).rotation.x = Math.PI / 2),
      (L(r, 0.02, 0.02, 0.06, o, 0, 0, 0.04, 12).rotation.x = Math.PI / 2),
      b(r, 0.04, s(3), 0, 0, 0.12, 14).scale.set(1, 1, 1.35));
    for (let e = 0; e < 6; e++) {
      let t = (e / 6) * Math.PI * 2;
      M(
        r,
        [
          [Math.cos(t) * 0.035, Math.sin(t) * 0.035, 0.07],
          [Math.cos(t) * 0.055, Math.sin(t) * 0.055, 0.12],
          [Math.cos(t) * 0.035, Math.sin(t) * 0.035, 0.18],
          [0, 0, 0.19],
        ],
        0.0025,
        o,
        12,
        4,
      );
    }
    j(r, new n(0.056, 0.003, 4, 24), o, 0, 0, 0.12);
  }
  return F(r, { mount: 1.7, light: !0, note: a });
}
function Fn(t) {
  let r = x(t),
    i = new f(),
    a = r.pick([`wood`, `swivel`, `saddle`, `industrial`]),
    o = r.chance(0.5) ? 0.66 : 0.76,
    s = U(r.pick([R.oak, R.walnut, R.espresso, R.maple, R.black]), 0.55),
    c = r.pick([E(), O(), k()]);
  if (a === `wood` || a === `saddle`) {
    let e = a === `wood` ? s : c,
      t = 0.17;
    for (let [n, r] of [
      [-1, -1],
      [1, -1],
      [1, 1],
      [-1, 1],
    ])
      C(
        i,
        [n * t * 1.25, 0, r * t * 1.25],
        [n * t * 0.75, o - 0.04, r * t * 0.75],
        a === `wood` ? 0.016 : 0.012,
        e,
        10,
      );
    let n = o * 0.33;
    for (let r = 0; r < 4; r++) {
      let a = [
          [-1, -1],
          [1, -1],
          [1, 1],
          [-1, 1],
        ][r],
        s = [
          [-1, -1],
          [1, -1],
          [1, 1],
          [-1, 1],
        ][(r + 1) % 4],
        c = 1.25 - (0.5 * n) / o;
      C(
        i,
        [a[0] * t * c, n, a[1] * t * c],
        [s[0] * t * c, n, s[1] * t * c],
        0.01,
        e,
        8,
      );
    }
    a === `wood`
      ? L(i, 0.19, 0.18, 0.04, s, 0, o - 0.04, 0, 32)
      : (A(i, 0.38, 0.05, 0.36, 0.022, s, 0, o - 0.025, 0).scale.set(1, 1, 1),
        A(i, 0.16, 0.04, 0.12, 0.02, s, 0, o - 0.005, -0.12));
  } else if (a === `swivel`) {
    (L(i, 0.24, 0.25, 0.025, c, 0, 0, 0, 32),
      L(i, 0.03, 0.03, o - 0.12, c, 0, 0.025, 0, 14),
      j(i, new n(0.19, 0.01, 8, 32), c, 0, o * 0.35, 0, Math.PI / 2));
    for (let e = 0; e < 3; e++) {
      let t = (e * Math.PI * 2) / 3;
      C(
        i,
        [0, o * 0.33, 0],
        [Math.cos(t) * 0.19, o * 0.35, Math.sin(t) * 0.19],
        0.006,
        c,
        6,
      );
    }
    let t = U(r.pick([1907999, 7027238, 9080726, 12168601, 9060154]), 0.6);
    if ((L(i, 0.19, 0.2, 0.08, t, 0, o - 0.08, 0, 32), r.chance(0.6))) {
      let n = new e(
        new g(0.2, 0.2, 0.2, 24, 1, !0, Math.PI * 0.65, Math.PI * 0.7),
        t.clone(),
      );
      ((n.material.side = 2),
        n.position.set(0, o + 0.1, 0),
        (n.castShadow = !0),
        i.add(n),
        C(i, [0, o - 0.02, -0.15], [0, o + 0.05, -0.19], 0.012, c, 8));
    }
  } else {
    for (let [e, t] of [
      [-1, -1],
      [1, -1],
      [1, 1],
      [-1, 1],
    ])
      C(i, [e * 0.2, 0, t * 0.2], [e * 0.15, o - 0.03, t * 0.15], 0.012, c, 8);
    for (let e = 0; e < 4; e++) {
      let t = [
          [-1, -1],
          [1, -1],
          [1, 1],
          [-1, 1],
        ][e],
        n = [
          [-1, -1],
          [1, -1],
          [1, 1],
          [-1, 1],
        ][(e + 1) % 4];
      C(
        i,
        [t[0] * 0.185, o * 0.3, t[1] * 0.185],
        [n[0] * 0.185, o * 0.3, n[1] * 0.185],
        0.008,
        c,
        6,
      );
    }
    let e = U(
      r.pick([2829359, 13181724, 4090762, 14211542, 5991246]),
      0.4,
      0.6,
    );
    A(i, 0.34, 0.03, 0.34, 0.012, e, 0, o - 0.03, 0);
  }
  return F(i, { note: `${a}, ${o === 0.66 ? `counter` : `bar`} height` });
}
function In(e) {
  let t = x(e),
    n = new f(),
    [r, i, a] = t.pick([
      [`twin`, 0.99, 1.91],
      [`full`, 1.37, 1.91],
      [`queen`, 1.52, 2.03],
      [`queen`, 1.52, 2.03],
      [`king`, 1.93, 2.03],
    ]),
    o = t.pick([`platform`, `upholstered`, `panel`, `metal`]),
    s = U(t.pick([R.walnut, R.oak, R.espresso, R.white, R.cherry]), 0.5),
    c = U(t.pick(oe), 0.95),
    l = o === `platform` ? 0.26 : 0.34,
    u = -a / 2;
  if (o === `platform`)
    (z(n, i + 0.1, l - 0.08, a + 0.08, s, 0, 0.08, 0.02),
      z(n, i - 0.1, 0.08, a - 0.2, U(1907999, 0.8), 0, 0, 0.02),
      A(n, i + 0.14, 0.62, 0.05, 0.01, s, 0, 0.55, u - 0.04));
  else if (o === `upholstered`) {
    z(n, i + 0.08, l - 0.1, a + 0.04, c, 0, 0.1, 0.01);
    for (let [e, t] of [
      [-1, -1],
      [1, -1],
      [1, 1],
      [-1, 1],
    ])
      L(
        n,
        0.02,
        0.016,
        0.1,
        U(R.walnut, 0.5),
        e * (i / 2 - 0.02),
        0,
        t * (a / 2 - 0.05) + 0.01,
        10,
      );
    if (
      (A(n, i + 0.16, 1.15, 0.1, 0.04, c, 0, 0.1 + 1.15 / 2, u - 0.05),
      t.chance(0.5))
    )
      for (let e = 0; e < 3; e++)
        for (let t = 0; t < Math.floor(i / 0.2); t++)
          b(
            n,
            0.008,
            U(N(c.color.getHex(), 0.7), 0.8),
            -i / 2 + 0.1 + t * 0.2 + (e % 2) * 0.1,
            0.75 + e * 0.13,
            u + 0.001,
            6,
          );
  } else if (o === `panel`) {
    z(n, i + 0.06, 0.22, a, s, 0, l - 0.22, 0);
    for (let [e, t] of [
      [-1, -1],
      [1, -1],
      [1, 1],
      [-1, 1],
    ])
      z(
        n,
        0.07,
        t < 0 ? 1.15 : 0.62,
        0.07,
        s,
        e * (i / 2 + 0.035),
        0,
        t * (a / 2 + 0.035),
      );
    (z(n, i, 0.62, 0.03, s, 0, 0.45, u - 0.035),
      z(n, i + 0.2, 0.05, 0.1, s, 0, 1.12, u - 0.035),
      z(n, i, 0.3, 0.03, s, 0, 0.3, a / 2 + 0.035),
      z(n, i + 0.2, 0.04, 0.09, s, 0, 0.6, a / 2 + 0.035));
  } else {
    let e = t.pick([E(), U(15329249, 0.4, 0.4), U(12095807, 0.35, 0.8)]);
    z(n, i + 0.04, 0.06, a, e, 0, l - 0.2, 0);
    for (let t of [-1, 1]) {
      let r = t < 0 ? 1.2 : 0.8,
        o = t * (a / 2 + 0.02);
      for (let t of [-1, 1])
        L(n, 0.018, 0.018, r, e, t * (i / 2 + 0.02), 0, o, 10);
      (C(
        n,
        [-i / 2 - 0.02, r - 0.02, o],
        [i / 2 + 0.02, r - 0.02, o],
        0.014,
        e,
        8,
      ),
        C(n, [-i / 2, r * 0.55, o], [i / 2, r * 0.55, o], 0.01, e, 8));
      for (let t = -i / 2 + 0.12; t < i / 2 - 0.06; t += 0.12)
        C(n, [t, r * 0.55, o], [t, r - 0.02, o], 0.006, e, 6);
    }
  }
  let d = l + (o === `metal` ? -0.14 : 0);
  S(n, i - 0.02, 0.26, a - 0.03, 0.05, U(15921386, 0.9), 0, d, 0.005);
  let p = t.pick([
      16052972, 15196630, 10134446, 5069683, 13157046, 7305862, 14076853,
      3095350, 15722976,
    ]),
    m = U(p, 0.95),
    h = a * 0.78;
  S(n, i + 0.07, 0.07, h, 0.035, m, 0, d + 0.23, a / 2 - h / 2 + 0.04);
  for (let e of [-1, 1])
    S(
      n,
      0.03,
      0.3,
      h,
      0.015,
      m,
      e * (i / 2 + 0.03),
      d + 0.02,
      a / 2 - h / 2 + 0.04,
    );
  (S(n, i + 0.07, 0.3, 0.03, 0.015, m, 0, d + 0.02, a / 2 + 0.05),
    S(
      n,
      i + 0.075,
      0.075,
      0.28,
      0.035,
      U(t.pick([16052972, 16777215, N(p, 0.85)]), 0.95),
      0,
      d + 0.235,
      a / 2 - h + 0.18,
    ));
  let g = U(t.pick([16052972, 16777215, p]), 0.95),
    _ = i > 1.2 ? 2 : 1,
    v = Math.min(0.66, (i - 0.08) / _);
  for (let e = 0; e < _; e++) {
    let t = -i / 2 + 0.04 + v * (e + 0.5),
      r = A(n, v - 0.03, 0.14, 0.46, 0.06, g, t, d + 0.33, u + 0.3, -0.35);
    r.position.y = d + 0.36;
  }
  if (t.chance(0.7)) {
    let e = U(t.pick([9060154, 13082698, 3960442, 5991246, 12168601]), 0.95);
    for (let t = 0; t < (_ > 1 ? 2 : 1); t++)
      A(
        n,
        0.42,
        0.14,
        0.14,
        0.05,
        e,
        _ > 1 ? (t ? 0.24 : -0.24) : 0,
        d + 0.38,
        u + 0.55,
        -0.25,
      );
  }
  if (t.chance(0.6)) {
    let e = U(t.pick([12168601, 4082266, 9060154, 7305862, 14076853]), 0.98);
    S(n, i + 0.12, 0.03, 0.45, 0.012, e, 0, d + 0.3, a / 2 - 0.3);
    for (let t of [-1, 1])
      S(n, 0.02, 0.2, 0.45, 0.01, e, t * (i / 2 + 0.07), d + 0.12, a / 2 - 0.3);
  }
  return F(n, { note: `${r} ${o}` });
}
var Ln = [
    {
      key: `vending`,
      name: `Vending machine`,
      desc: `Snack machine with spirals, prices and keypad, or a lit cold-drink machine`,
      build: jn,
    },
    {
      key: `conftable`,
      name: `Conference table`,
      desc: `2.4-4.2 m rectangle, boat or racetrack; slab, drum or trestle base; speakerphone, notepads`,
      build: Mn,
    },
  ].map((e) => ({ ...e, cat: `office` })),
  Rn = [
    {
      key: `troffer`,
      name: `Ceiling troffer`,
      desc: `2x4 or 2x2 lay-in: flat LED panel, parabolic louvre, prismatic lens or centre basket`,
      build: Nn,
    },
    {
      key: `sconce`,
      name: `Wall sconce`,
      desc: `Up/down cylinder, half drum, swing arm, candle arms or industrial cage`,
      build: Pn,
    },
  ].map((e) => ({ ...e, cat: `lighting` })),
  zn = [
    {
      key: `barstool`,
      name: `Bar stool`,
      desc: `Wood, swivel, saddle or metal café, counter or bar height`,
      build: Fn,
    },
    {
      key: `bed`,
      name: `Bed`,
      desc: `Twin to king: platform, upholstered, panel or iron frame, made up with pillows and a throw`,
      build: In,
    },
  ].map((e) => ({ ...e, cat: `furniture` })),
  Bn = [
    ...wn,
    ...Ee,
    ...Ct,
    ...zn,
    ...Xe,
    ...Ln,
    ...wt,
    ...Rn,
    ...Wt,
    ...Ze,
    ...Dt,
    ...Tt,
    ...Et,
  ];
function Vn(e, t = 1, n = void 0) {
  let r = Bn.find((t) => t.key === e);
  if (!r) throw Error(`unknown decor item ${e}`);
  let i = r.build(t, n);
  return ((i.name = `decor:${e}:${t}`), i);
}
export { Vn as t };
//# sourceMappingURL=decor-kit-DYJAmRWC.js.map
