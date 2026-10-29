// assets__catalog-D58c7iOM 01 — level
// Lines 1-311 of readable/assets__catalog-D58c7iOM.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  a as e,
  c as t,
  g as n,
  i as r,
  n as i,
  r as a,
  t as o,
} from "./attachments-BlZum_KH.js";
var s = `salient.reticle.v1`,
  c = new Set(),
  l = (e, t, n, r) =>
    e.line([
      [Math.cos(t) * n, Math.sin(t) * n],
      [Math.cos(t) * r, Math.sin(t) * r],
    ]),
  u = (e, t, n, r = [0, 1, 2, 3]) => {
    for (let i of r) l(e, (i * Math.PI) / 2, t, n);
  },
  d = {
    default: { name: `Sight default`, level: 1 },
    dot: { name: `Dot`, level: 1, dot: 9 },
    cross: { name: `Cross dot`, level: 1, path: (e) => u(e, 26, 72) },
    circle: { name: `Circle dot`, level: 3, path: (e) => e.arc(100) },
    chevron: {
      name: `Chevron`,
      level: 5,
      dot: 0,
      width: 9,
      path: (e) =>
        e.line([
          [-44, 44],
          [0, 0],
          [44, 44],
        ]),
    },
    horseshoe: {
      name: `Horseshoe`,
      level: 7,
      path: (e) => e.arc(92, 2.4, Math.PI * 2 + 0.74),
    },
    tee: { name: `Tee`, level: 9, path: (e) => u(e, 26, 76, [0, 1, 2]) },
    saltire: {
      name: `Saltire`,
      level: 11,
      path: (e) => {
        for (let t = 0; t < 4; t++)
          l(e, Math.PI / 4 + (t * Math.PI) / 2, 24, 68);
      },
    },
    brackets: {
      name: `Brackets`,
      level: 13,
      path: (e) => {
        for (let t of [-1, 1])
          e.line([
            [t * 48, -44],
            [t * 68, -44],
            [t * 68, 44],
            [t * 48, 44],
          ]);
      },
    },
    diamond: {
      name: `Diamond`,
      level: 15,
      path: (e) =>
        e.line(
          [
            [0, -62],
            [62, 0],
            [0, 62],
            [-62, 0],
          ],
          !0,
        ),
    },
    triangle: {
      name: `Delta`,
      level: 18,
      path: (e) =>
        e.line(
          [
            [0, -66],
            [58, 36],
            [-58, 36],
          ],
          !0,
        ),
    },
    arrow: {
      name: `Arrowhead`,
      level: 21,
      path: (e) =>
        e.line([
          [-42, -8],
          [0, -50],
          [42, -8],
        ]),
    },
    segments: {
      name: `Split ring`,
      level: 24,
      path: (e) => {
        for (let t = 0; t < 4; t++)
          e.arc(
            94,
            (t * Math.PI) / 2 + 0.35,
            (t * Math.PI) / 2 + Math.PI / 2 - 0.35,
          );
      },
    },
    ticked: {
      name: `Ticked ring`,
      level: 28,
      path: (e) => {
        (e.arc(84), u(e, 84, 112));
      },
    },
    rings: {
      name: `Double ring`,
      level: 32,
      path: (e) => {
        (e.arc(104), e.arc(58));
      },
    },
    square: {
      name: `Box`,
      level: 36,
      path: (e) =>
        e.line(
          [
            [-58, -58],
            [58, -58],
            [58, 58],
            [-58, 58],
          ],
          !0,
        ),
    },
    post: {
      name: `Post`,
      level: 40,
      dot: 0,
      path: (e) => {
        (e.line([
          [0, 6],
          [0, 112],
        ]),
          u(e, 34, 112, [0, 2]));
      },
    },
    chevronring: {
      name: `Chevron ring`,
      level: 45,
      dot: 0,
      width: 8,
      path: (e) => {
        (e.arc(100),
          e.line([
            [-40, 40],
            [0, 0],
            [40, 40],
          ]));
      },
    },
    crossring: {
      name: `Ringed cross`,
      level: 50,
      path: (e) => {
        (e.arc(96), u(e, 26, 96));
      },
    },
    mildot: {
      name: `Mil-dot`,
      level: 60,
      width: 5,
      path: (e) => u(e, 22, 112),
      dots: [44, 78].flatMap((e) => [
        [e, 0],
        [-e, 0],
        [0, e],
        [0, -e],
      ]),
    },
    constellation: {
      name: `Constellation`,
      level: 70,
      dots: Array.from({ length: 8 }, (e, t) => [
        Math.cos((t * Math.PI) / 4) * 82,
        Math.sin((t * Math.PI) / 4) * 82,
      ]),
    },
    crown: {
      name: `Crown`,
      level: 85,
      path: (e) => {
        (e.arc(98, Math.PI + 0.5, Math.PI * 2 - 0.5),
          e.line([
            [-34, -34],
            [0, -6],
            [34, -34],
          ]));
      },
    },
  },
  f = Object.freeze(
    Object.fromEntries(
      Object.entries(d).map(([e, t]) => [
        e,
        Object.freeze({ name: t.name, level: t.level }),
      ]),
    ),
  ),
  p = Object.freeze({
    default: { name: `Sight default`, css: null },
    red: { name: `Red`, css: `#ff3b2f` },
    green: { name: `Green`, css: `#44ff5c` },
    amber: { name: `Amber`, css: `#ffb640` },
    cyan: { name: `Cyan`, css: `#3fe6ff` },
    magenta: { name: `Magenta`, css: `#ff4fd8` },
    white: { name: `White`, css: `#f4f4f0` },
  }),
  m = Object.freeze({ min: 0.3, max: 1.6, step: 0.05 }),
  ee = { small: 0.75, medium: 1, large: 1.35 },
  h = (e) => {
    let t = typeof e == `string` ? ee[e] : e;
    return Number.isFinite(t)
      ? Math.min(m.max, Math.max(m.min, Math.round(t * 100) / 100))
      : null;
  },
  g = Object.freeze({ shape: `default`, color: `default`, size: 1 }),
  _ = (e, t) =>
    !!f[e] && (t?.admin === !0 || (t?.rank?.level ?? 1) >= f[e].level),
  v = { ...g };
try {
  let e = JSON.parse(localStorage.getItem(s));
  e &&
    typeof e == `object` &&
    (f[e.shape] && (v.shape = e.shape),
    p[e.color] && (v.color = e.color),
    h(e.size) != null && (v.size = h(e.size)));
} catch {}
var y = () => ({ ...v });
function b(e) {
  let t = { ...v };
  for (let [n, r] of [
    [`shape`, f],
    [`color`, p],
  ])
    e?.[n] && r[e[n]] && (t[n] = e[n]);
  (e?.size != null && h(e.size) != null && (t.size = h(e.size)), (v = t));
  try {
    localStorage.setItem(s, JSON.stringify(v));
  } catch {}
  for (let e of c) e(y());
}
var x = (e) => (c.add(e), () => c.delete(e)),
  S = {
    reflex: [`dot`, `#ff3b2f`],
    holo: [`circle`, `#ffb640`],
    prism: [`chevron`, `#ff3b2f`],
    scope: [`cross`, `#0c0e10`],
  },
  C = Object.freeze(Object.keys(S).filter((e) => e !== `scope`));
function w(e, t = v) {
  let [n, r] = S[e] ?? S.reflex;
  return {
    shape: d[t.shape] && t.shape !== "default" ? t.shape : n,
    css: p[t.color]?.css ?? r,
    scale: h(t.size) ?? 1,
  };
}
var T = 0.075;
function E(e, t, n) {
  let r = t / 2,
    i = t / 256,
    a = d[n.shape] ?? d.dot;
  (e.clearRect(0, 0, t, t), (e.lineCap = `round`), (e.lineJoin = `round`));
  let o = {
      line(t, n = !1) {
        (t.forEach(([t, n], a) =>
          e[a ? `lineTo` : `moveTo`](r + t * i, r + n * i),
        ),
          n && e.closePath());
      },
      arc(t, n = 0, a = Math.PI * 2) {
        (e.moveTo(r + Math.cos(n) * t * i, r + Math.sin(n) * t * i),
          e.arc(r, r, t * i, n, a));
      },
    },
    s = a.width ?? 7,
    c = a.dot ?? 6.5,
    l = a.dots ?? [];
  for (let t of [`edge`, `lit`]) {
    let u = t === `edge`;
    ((e.strokeStyle = e.fillStyle = u ? `rgba(8,10,12,.55)` : n.css),
      (e.shadowColor = u ? `transparent` : n.css),
      (e.shadowBlur = u ? 0 : 5 * i),
      (e.lineWidth = (s + (u ? 5 : 0)) * i),
      a.path && (e.beginPath(), a.path(o), e.stroke()),
      e.beginPath(),
      c > 0 && o.arc(c + (u ? 2.5 : 0)));
    for (let [t, n] of l)
      (e.moveTo(r + (t + 5.5 + (u ? 2.5 : 0)) * i, r + n * i),
        e.arc(r + t * i, r + n * i, (5.5 + (u ? 2.5 : 0)) * i, 0, Math.PI * 2));
    e.fill();
  }
  e.shadowBlur = 0;
}
