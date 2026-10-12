// assets__continental-kit-cMnzi5gd 01 — roughness
// Lines 1-291 of readable/assets__continental-kit-cMnzi5gd.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  Ct as e,
  F as t,
  I as n,
  K as r,
  Mn as i,
  R as a,
  Rn as o,
  Rt as s,
  U as c,
  Ut as l,
  Xt as u,
  en as d,
  fn as f,
  lt as p,
  mn as m,
  tn as h,
  wn as g,
  zt as _,
} from "./graphics-quality-BsjABS0s.js";
import {
  $ as v,
  A as y,
  H as b,
  Q as x,
  U as S,
  Z as C,
  bt as w,
  j as T,
  lt as E,
  r as D,
  st as O,
  tt as k,
} from "./cube-soldier-BRpW8Tqo.js";
var A = (e) => () => (e = (e * 1664525 + 1013904223) >>> 0) / 4294967296;
function j(e, t, n, r = null, i = !0) {
  let o = document.createElement(`canvas`);
  ((o.width = e), (o.height = t), n(o.getContext(`2d`), e, t));
  let s = new a(o);
  return (
    i && (s.colorSpace = m),
    (s.anisotropy = 8),
    r && ((s.wrapS = s.wrapT = f), s.repeat.set(...r)),
    s
  );
}
function M(e, t, n) {
  ((e.fillStyle = `#5b1519`), e.fillRect(0, 0, t, n));
  let r = A(7);
  for (let i = 0; i < 9e3; i++)
    ((e.fillStyle = `rgba(${r() < 0.5 ? 0 : 120},0,0,${r() * 0.08})`),
      e.fillRect(r() * t, r() * n, 1, 2));
  let i = (t, n, r) => {
    (e.save(), e.translate(t, n));
    for (let t of [1, -1])
      (e.save(),
        e.scale(t, 1),
        (e.fillStyle = `#74202a`),
        e.beginPath(),
        e.moveTo(0, -r),
        e.bezierCurveTo(r * 0.55, -r * 0.75, r * 0.62, -r * 0.15, r * 0.16, 0),
        e.bezierCurveTo(r * 0.62, r * 0.15, r * 0.55, r * 0.75, 0, r),
        e.closePath(),
        e.fill(),
        (e.strokeStyle = `#8a3a30`),
        (e.lineWidth = r * 0.035),
        e.beginPath(),
        e.moveTo(r * 0.08, -r * 0.55),
        e.bezierCurveTo(
          r * 0.6,
          -r * 0.95,
          r * 0.95,
          -r * 0.35,
          r * 0.62,
          -r * 0.1,
        ),
        e.stroke(),
        e.beginPath(),
        e.arc(r * 0.56, -r * 0.3, r * 0.1, 0, Math.PI * 1.6),
        e.stroke(),
        e.beginPath(),
        e.moveTo(r * 0.08, r * 0.55),
        e.bezierCurveTo(
          r * 0.6,
          r * 0.95,
          r * 0.95,
          r * 0.35,
          r * 0.62,
          r * 0.1,
        ),
        e.stroke(),
        e.beginPath(),
        e.arc(r * 0.56, r * 0.3, r * 0.1, Math.PI * 0.4, Math.PI * 2),
        e.stroke(),
        (e.fillStyle = `#8f4a33`),
        e.beginPath(),
        e.ellipse(r * 0.28, 0, r * 0.08, r * 0.2, 0, 0, Math.PI * 2),
        e.fill(),
        e.restore());
    ((e.fillStyle = `#96583a`),
      e.beginPath(),
      e.moveTo(0, -r * 0.34),
      e.lineTo(r * 0.1, 0),
      e.lineTo(0, r * 0.34),
      e.lineTo(-r * 0.1, 0),
      e.closePath(),
      e.fill(),
      e.restore());
  };
  i(t / 2, n / 2, t * 0.36);
  for (let [e, r] of [
    [0, 0],
    [t, 0],
    [0, n],
    [t, n],
  ])
    i(e, r, t * 0.36);
  for (let [r, i] of [
    [0, n / 2],
    [t, n / 2],
    [t / 2, 0],
    [t / 2, n],
  ])
    ((e.fillStyle = `#6d1d24`),
      e.beginPath(),
      e.ellipse(r, i, t * 0.05, t * 0.11, 0, 0, Math.PI * 2),
      e.fill());
}
function N(e, t) {
  let n = t / (4 * Math.SQRT2),
    r = [
      `#6b4424`,
      `#5c3a1f`,
      `#74492a`,
      `#613d21`,
      `#6f4526`,
      `#553519`,
      `#7a4f2d`,
      `#64401f`,
    ];
  ((e.fillStyle = `#2a1a0e`),
    e.fillRect(0, 0, t, t),
    e.save(),
    e.rotate(-Math.PI / 4),
    e.scale(n, n));
  let i = A(3);
  for (let t = -4; t <= 4; t++)
    for (let n = -12; n <= 16; n++)
      for (let [a, o, s, c, l] of [
        [0, 0, 4, 1, 0],
        [-1, 0, 1, 4, 4],
      ]) {
        let u = n + 4 * t + a,
          d = n - 4 * t + o;
        ((e.fillStyle = r[(((n % 4) + 4) % 4) + l]),
          e.fillRect(u + 0.03, d + 0.03, s - 0.06, c - 0.06),
          (e.strokeStyle = `rgba(20,10,4,.25)`),
          (e.lineWidth = 0.02));
        for (let t = 0; t < 5; t++) {
          let n = 0.15 + t * 0.17 + i() * 0.05;
          (e.beginPath(),
            s > c
              ? (e.moveTo(u + 0.1, d + n),
                e.lineTo(u + s - 0.1, d + n + (i() - 0.5) * 0.05))
              : (e.moveTo(u + n, d + 0.1),
                e.lineTo(u + n + (i() - 0.5) * 0.05, d + c - 0.1)),
            e.stroke());
        }
      }
  e.restore();
}
function P(e, t, n, r, i) {
  ((e.fillStyle = r), e.fillRect(0, 0, t, n));
  let a = A(11);
  for (let r = 0; r < 140; r++) {
    let o = a() * t,
      s = a() * 0.35;
    ((e.strokeStyle = i.replace(`A`, s.toFixed(2))),
      (e.lineWidth = 0.6 + a() * 2.2),
      e.beginPath(),
      e.moveTo(o, 0));
    for (let t = 0; t <= n; t += 16)
      e.lineTo(o + Math.sin(t * 0.013 + r) * 6 * a(), t);
    e.stroke();
  }
}
var F = (e, n, r, i, a = 0, o = 0, c = 0, l = null) => {
    let u = new s(new t(e, n, r), i);
    return (u.position.set(a, o, c), l?.add(u), u);
  },
  I = (t, n, r = 24) =>
    new s(
      new e(
        t.map(([e, t]) => new o(e, t)),
        r,
      ),
      n,
    );
function L() {
  let e = j(256, 256, M, [1, 1]),
    t = j(512, 512, (e, t) => N(e, t), [1, 1]),
    n = j(
      256,
      512,
      (e, t, n) => P(e, t, n, `#3a2413`, `rgba(15,7,2,A)`),
      [1, 1],
    ),
    r = j(
      256,
      512,
      (e, t, n) => P(e, t, n, `#7a5430`, `rgba(40,20,6,A)`),
      [1, 1],
    );
  return {
    damask: new l({ map: e, roughness: 0.85 }),
    floor: new l({ map: t, roughness: 0.42, metalness: 0.05 }),
    wood: new l({ map: n, roughness: 0.45, metalness: 0.05 }),
    cabinet: new l({ map: r, roughness: 0.5, metalness: 0.05 }),
    darkWood: new l({ color: 1905162, roughness: 0.5 }),
    gold: new l({ color: 13213772, roughness: 0.32, metalness: 1 }),
    brass: new l({ color: 11569732, roughness: 0.38, metalness: 1 }),
    felt: new l({ color: 1058332, roughness: 0.95 }),
    ceiling: new l({ color: 1780282, roughness: 0.8 }),
    curtain: new l({ color: 11569746, roughness: 0.7, side: 2 }),
    leather: new l({ color: 4856338, roughness: 0.55 }),
    glow: new l({ color: 16773584, emissive: 16767392, emissiveIntensity: 3 }),
    shelfGlow: new l({
      color: 16771524,
      emissive: 16764810,
      emissiveIntensity: 2.2,
    }),
    backlit: new l({
      map: e,
      emissive: 16769732,
      emissiveMap: e,
      emissiveIntensity: 0.55,
      roughness: 0.9,
    }),
    edgeGlow: new l({
      color: 15138800,
      emissive: 13172704,
      emissiveIntensity: 2.6,
    }),
    glass: new l({
      color: 13625066,
      roughness: 0.04,
      metalness: 0.1,
      transparent: !0,
      opacity: 0.1,
      depthWrite: !1,
    }),
    bottle: new l({
      color: 1323036,
      roughness: 0.12,
      metalness: 0.2,
      transparent: !0,
      opacity: 0.9,
    }),
    wine: new l({
      color: 4851218,
      roughness: 0.2,
      transparent: !0,
      opacity: 0.92,
    }),
    label: new l({ color: 15260864, roughness: 0.8 }),
    painting: new l({
      map: j(256, 192, (e, t, n) => {
        let r = e.createLinearGradient(0, 0, 0, n);
        (r.addColorStop(0, `#3b3a2c`),
          r.addColorStop(0.6, `#6b5a3a`),
          r.addColorStop(1, `#20180f`),
          (e.fillStyle = r),
          e.fillRect(0, 0, t, n),
          (e.fillStyle = `#1a140c`),
          e.beginPath(),
          e.moveTo(0, n * 0.72));
        for (let r = 0; r <= t; r += 8)
          e.lineTo(r, n * 0.66 + Math.sin(r * 0.05) * 8);
        (e.lineTo(t, n),
          e.lineTo(0, n),
          e.fill(),
          (e.fillStyle = `rgba(240,200,120,.5)`),
          e.beginPath(),
          e.arc(t * 0.7, n * 0.3, 14, 0, Math.PI * 2),
          e.fill());
      }),
      roughness: 0.8,
    }),
  };
}
