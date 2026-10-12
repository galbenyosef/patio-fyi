/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  Bn as e,
  F as t,
  I as n,
  K as r,
  L as i,
  Lt as a,
  Mn as o,
  Rt as s,
  U as c,
  Ut as l,
  V as u,
  _n as d,
  an as f,
  en as p,
  et as m,
  gt as h,
  kt as g,
  lt as _,
  mt as v,
  nn as y,
  rt as b,
  v as x,
  wn as S,
  zn as C,
} from "./graphics-quality-BsjABS0s.js";
import {
  a as w,
  c as T,
  d as E,
  h as D,
  i as O,
  m as k,
  n as A,
  o as j,
  p as M,
  r as N,
  u as P,
} from "./kit-B7uNFdQ6.js";
var F = Object.freeze({ L40: 12.19, L20: 6.06, W: 2.44, H: 2.59 }),
  ee = Object.freeze([
    {
      name: `NORDHAVN`,
      prefix: `NHVU`,
      paint: `#24507e`,
      ink: `#f2f2ee`,
      logo: `wave`,
      lane: `cool`,
    },
    {
      name: `ATLAS MERIDIAN`,
      prefix: `AMDU`,
      paint: `#8a2b24`,
      ink: `#f4f1ea`,
      logo: `globe`,
      lane: `warm`,
    },
    {
      name: `PACIFICA`,
      prefix: `PCFU`,
      paint: `#2f5a3c`,
      ink: `#f0efe6`,
      logo: `bars`,
      lane: `cool`,
    },
    {
      name: `ORIENT STAR`,
      prefix: `OSLU`,
      paint: `#b4602a`,
      ink: `#ffffff`,
      logo: `star`,
      lane: `warm`,
    },
    {
      name: `GRANITE`,
      prefix: `GRNU`,
      paint: `#6c7174`,
      ink: `#f5f5f2`,
      logo: `block`,
      lane: `mixed`,
    },
    {
      name: `HALDEN`,
      prefix: `HLDU`,
      paint: `#c3c1b8`,
      ink: `#1d3557`,
      logo: `bars`,
      lane: `mixed`,
    },
    {
      name: `SOLANO`,
      prefix: `SLNU`,
      paint: `#b3952b`,
      ink: `#20242a`,
      logo: `sun`,
      lane: `warm`,
    },
    {
      name: `TRITON`,
      prefix: `TRTU`,
      paint: `#2a6b70`,
      ink: `#f2f2ee`,
      logo: `trident`,
      lane: `cool`,
    },
    {
      name: `CARAVEL`,
      prefix: `CRVU`,
      paint: `#5a2630`,
      ink: `#e9d9b5`,
      logo: `sail`,
      lane: `warm`,
    },
    {
      name: `BOREAL`,
      prefix: `BRLU`,
      paint: `#1e3d5c`,
      ink: `#9fd3e8`,
      logo: `wave`,
      lane: `cool`,
    },
    {
      name: `MAGENTA LINE`,
      prefix: `MGLU`,
      paint: `#7a2a5c`,
      ink: `#ffffff`,
      logo: `globe`,
      lane: `warm`,
    },
    {
      name: `SEALINK`,
      prefix: `SLKU`,
      paint: `#3b6e9a`,
      ink: `#ffffff`,
      logo: `bars`,
      lane: `cool`,
    },
    {
      name: `KESTREL LINE`,
      prefix: `KSTU`,
      paint: `#14324a`,
      ink: `#f0b429`,
      logo: `bird`,
      lane: `mixed`,
    },
    {
      name: `TERRACOTTA`,
      prefix: `TRCU`,
      paint: `#9a4a2c`,
      ink: `#f6efe2`,
      logo: `block`,
      lane: `warm`,
    },
    {
      name: `POLARIS COLD`,
      prefix: `PLCU`,
      paint: `#d9dcdc`,
      ink: `#1f4f7a`,
      logo: `star`,
      lane: `mixed`,
      reefer: !0,
    },
    {
      name: `FRIGOMAR`,
      prefix: `FRMU`,
      paint: `#cfd3d2`,
      ink: `#2c6e49`,
      logo: `wave`,
      lane: `mixed`,
      reefer: !0,
    },
  ]);
ee.map((e, t) => (e.reefer ? t : -1)).filter((e) => e >= 0);
var I = 512,
  L = 2048,
  R = L / I,
  z = {
    side: [0, 0, 512, 228],
    door: [0, 236, 164, 404],
    front: [172, 236, 336, 404],
    roof: [344, 236, 512, 404],
    frame: [0, 412, 164, 512],
    galv: [172, 412, 336, 512],
    tarp: [344, 412, 512, 512],
  };
function B(e, t, n, r, i, a) {
  if (
    (e.save(),
    e.translate(n, r),
    (e.fillStyle = a),
    (e.strokeStyle = a),
    (e.lineWidth = i * 0.12),
    t === `wave`)
  )
    for (let t = 0; t < 3; t++) {
      e.beginPath();
      for (let n = 0; n <= 20; n++) {
        let r = n / 20;
        e.lineTo(
          (r - 0.5) * i * 1.6,
          (t - 1) * i * 0.32 + Math.sin(r * 6.28) * i * 0.12,
        );
      }
      e.stroke();
    }
  else if (t === `globe`)
    (e.beginPath(),
      e.arc(0, 0, i * 0.55, 0, 6.283),
      e.stroke(),
      e.beginPath(),
      e.ellipse(0, 0, i * 0.22, i * 0.55, 0, 0, 6.283),
      e.stroke(),
      e.fillRect(-i * 0.55, -i * 0.03, i * 1.1, i * 0.06));
  else if (t === `bars`)
    for (let t = 0; t < 3; t++)
      e.fillRect(
        -i * 0.6,
        -i * 0.45 + t * i * 0.34,
        i * 1.2 - t * i * 0.3,
        i * 0.2,
      );
  else if (t === `star`) {
    e.beginPath();
    for (let t = 0; t < 10; t++) {
      let n = -Math.PI / 2 + (t * Math.PI) / 5,
        r = t % 2 ? i * 0.24 : i * 0.6;
      e.lineTo(Math.cos(n) * r, Math.sin(n) * r);
    }
    e.fill();
  } else if (t === `block`)
    (e.fillRect(-i * 0.5, -i * 0.5, i, i),
      e.clearRect(-i * 0.18, -i * 0.18, i * 0.36, i * 0.36));
  else if (t === `sun`) {
    (e.beginPath(), e.arc(0, 0, i * 0.3, 0, 6.283), e.fill());
    for (let t = 0; t < 12; t++) {
      let n = (t * Math.PI) / 6;
      e.fillRect(Math.cos(n) * i * 0.42 - 2, Math.sin(n) * i * 0.42 - 2, 5, 5);
    }
  } else if (t === `trident`) {
    e.fillRect(-i * 0.04, -i * 0.6, i * 0.08, i * 1.2);
    for (let t of [-1, 0, 1])
      e.fillRect(t * i * 0.3 - i * 0.04, -i * 0.6, i * 0.08, i * 0.45);
    e.fillRect(-i * 0.34, -i * 0.2, i * 0.68, i * 0.08);
  } else
    t === `sail`
      ? (e.beginPath(),
        e.moveTo(0, -i * 0.6),
        e.lineTo(i * 0.45, i * 0.35),
        e.lineTo(0, i * 0.35),
        e.fill(),
        e.fillRect(-i * 0.5, i * 0.42, i, i * 0.1))
      : t === `bird` &&
        (e.beginPath(),
        e.moveTo(-i * 0.7, 0),
        e.quadraticCurveTo(-i * 0.2, -i * 0.5, 0, -i * 0.05),
        e.quadraticCurveTo(i * 0.2, -i * 0.5, i * 0.7, 0),
        e.quadraticCurveTo(i * 0.2, -i * 0.2, 0, i * 0.2),
        e.quadraticCurveTo(-i * 0.2, -i * 0.2, -i * 0.7, 0),
        e.fill());
  e.restore();
}
var V = (e, t) => `#` + new c(e).multiplyScalar(t).getHexString();
function H(e, t, [n, r, i, a], o, { streaks: s = !0 } = {}) {
  let c = i - n,
    l = a - r;
  if (s)
    for (let i = 0; i < 14 * o; i++) {
      let i = n + t() * c,
        a = l * (0.15 + t() * 0.6),
        o = e.createLinearGradient(0, r, 0, r + a);
      (o.addColorStop(0, `rgba(96,52,24,${0.35 + t() * 0.3})`),
        o.addColorStop(1, `rgba(96,52,24,0)`),
        (e.fillStyle = o),
        e.fillRect(i, r, 1 + t() * 3, a));
    }
  let u = e.createLinearGradient(0, a - l * 0.35, 0, a);
  (u.addColorStop(0, `rgba(30,26,20,0)`),
    u.addColorStop(1, `rgba(30,26,20,${0.32 * o})`),
    (e.fillStyle = u),
    e.fillRect(n, a - l * 0.35, c, l * 0.35));
  for (let i = 0; i < 260 * o; i++)
    ((e.fillStyle =
      t() < 0.5
        ? `rgba(70,40,20,${t() * 0.35})`
        : `rgba(255,255,255,${t() * 0.08})`),
      e.fillRect(n + t() * c, r + t() * l, 1 + t() * 4, 1 + t() * 2));
  for (let i = 0; i < 3 * o; i++) {
    let i = n + t() * c,
      a = r + t() * l,
      o = 4 + t() * 10;
    ((e.fillStyle = `rgba(0,0,0,0.18)`),
      e.beginPath(),
      e.ellipse(i, a, o, o * 0.6, t(), 0, 6.283),
      e.fill());
  }
}
function te(e, t, n) {
  let r = k(1013 + n * 7919),
    i = (n % R) * I,
    a = Math.floor(n / R) * I,
    o = t.paint;
  (e.save(), e.translate(i, a), (e.fillStyle = o), e.fillRect(0, 0, I, I));
  {
    let [n, i, a, o] = z.side;
    for (let t = n; t < a; t += 11.7)
      ((e.fillStyle = `rgba(0,0,0,0.13)`),
        e.fillRect(t + 6, i, 2.6, o - i),
        (e.fillStyle = `rgba(255,255,255,0.06)`),
        e.fillRect(t, i, 2, o - i));
    ((e.fillStyle = t.ink),
      (e.textBaseline = `middle`),
      (e.textAlign = `center`));
    let s = Math.min(230, 26 * t.name.length);
    e.font = `800 46px Arial, sans-serif`;
    let c = e.measureText(t.name).width,
      l = Math.min(1, s / c);
    (e.save(),
      e.translate(296, 120),
      e.scale(l, 1),
      e.fillText(t.name, 0, 0),
      e.restore(),
      B(e, t.logo, 152, 118, 62, t.ink),
      (e.textAlign = `left`),
      (e.font = `700 15px Arial, sans-serif`));
    let u = `${t.prefix} ${String(1e5 + Math.floor(r() * 899999))} ${Math.floor(r() * 10)}`;
    (e.fillText(u, 470 - e.measureText(u).width, 24),
      (e.font = `700 12px Arial, sans-serif`),
      e.fillText(t.reefer ? `45R1` : `45G1`, 442, 42),
      e.fillText(u, 18, 24),
      (e.fillStyle = `#d8d4c8`),
      e.fillRect(480, 180, 18, 12),
      (e.fillStyle = `rgba(0,0,0,0.6)`),
      e.fillRect(482, 183, 14, 1),
      e.fillRect(482, 187, 10, 1),
      H(e, r, z.side, t.reefer ? 0.45 : 0.6 + r() * 0.6));
  }
  {
    let [i, a, s, c] = z.door,
      l = s - i,
      u = c - a;
    ((e.fillStyle = V(o, 0.92)),
      e.fillRect(i, a, l, u),
      (e.fillStyle = `rgba(0,0,0,0.35)`),
      e.fillRect(i + l / 2 - 1, a, 2, u));
    for (let t = a + 10; t < c; t += 9)
      ((e.fillStyle = `rgba(0,0,0,0.07)`), e.fillRect(i, t, l, 3));
    ((e.fillStyle = t.ink),
      (e.font = `700 11px Arial, sans-serif`),
      (e.textAlign = `left`),
      e.fillText(
        `${t.prefix} ${String(2e5 + n * 4111).slice(0, 6)} ${n % 10}`,
        i + l / 2 + 6,
        a + 18,
      ),
      e.fillText(t.reefer ? `45R1` : `45G1`, i + l / 2 + 6, a + 32),
      (e.font = `700 8px Arial, sans-serif`),
      e.fillText(`MAX GR 32,500 KG`, i + l / 2 + 6, a + 50),
      e.fillText(`TARE  3,900 KG`, i + l / 2 + 6, a + 60),
      B(e, t.logo, i + l * 0.25, a + 40, 24, t.ink),
      (e.fillStyle = `#d8d4c8`),
      e.fillRect(i + 10, c - 34, 16, 12),
      (e.fillStyle = `#e8c840`),
      e.fillRect(i + l / 2 + 8, c - 40, 12, 12),
      H(e, r, z.door, 0.9));
  }
  {
    let [n, i, a, o] = z.front,
      s = a - n,
      c = o - i;
    if (t.reefer) {
      ((e.fillStyle = `#9ea4a6`),
        e.fillRect(n + 8, i + 8, s - 16, c - 16),
        (e.fillStyle = `#3a3f42`));
      for (let t = i + 16; t < i + c * 0.62; t += 5)
        e.fillRect(n + 14, t, s * 0.55, 2.5);
      ((e.fillStyle = `#2a2e30`),
        e.beginPath(),
        e.arc(n + s * 0.32, i + c * 0.38, 26, 0, 6.283),
        e.fill(),
        (e.fillStyle = `#4b5154`));
      for (let t = 0; t < 6; t++)
        (e.save(),
          e.translate(n + s * 0.32, i + c * 0.38),
          e.rotate(t * 1.047),
          e.fillRect(-2, 0, 4, 24),
          e.restore());
      ((e.fillStyle = `#20262a`),
        e.fillRect(n + s * 0.68, i + 24, 34, 26),
        (e.fillStyle = `#44ff7a`),
        e.fillRect(n + s * 0.68 + 5, i + 30, 10, 6),
        (e.fillStyle = `#c9cfd0`),
        e.fillRect(n + 14, i + c * 0.7, s - 28, c * 0.22));
    } else
      for (let t = n; t < a; t += 13)
        ((e.fillStyle = `rgba(0,0,0,0.14)`), e.fillRect(t + 7, i, 3, c));
    H(e, r, z.front, 0.8);
  }
  {
    let [t, n, i, a] = z.roof;
    ((e.fillStyle = V(o, 0.78)), e.fillRect(t, n, i - t, a - n));
    for (let o = 0; o < 90; o++)
      ((e.fillStyle = `rgba(90,50,24,${r() * 0.5})`),
        e.beginPath(),
        e.arc(t + r() * (i - t), n + r() * (a - n), 1 + r() * 5, 0, 6.283),
        e.fill());
  }
  {
    let [t, n, i, a] = z.frame;
    ((e.fillStyle = V(o, 0.72)),
      e.fillRect(t, n, i - t, a - n),
      H(e, r, z.frame, 1.2, { streaks: !1 }));
  }
  {
    let [t, n, i, a] = z.galv;
    ((e.fillStyle = `#8b9196`), e.fillRect(t, n, i - t, a - n));
    for (let o = 0; o < 120; o++)
      ((e.fillStyle = `rgba(${r() < 0.5 ? `60,40,30` : `200,205,210`},${r() * 0.3})`),
        e.fillRect(t + r() * (i - t), n + r() * (a - n), 2, 2));
  }
  {
    let [t, r, i, a] = z.tarp;
    ((e.fillStyle = n % 2 ? `#2f4e6e` : `#3d5a3a`),
      e.fillRect(t, r, i - t, a - r));
    for (let n = r; n < a; n += 6)
      ((e.fillStyle = `rgba(0,0,0,0.12)`), e.fillRect(t, n, i - t, 2));
    e.fillStyle = `rgba(255,255,255,0.12)`;
    for (let n = 0; n < 5; n++) e.fillRect(t + 10 + n * 33, r, 3, a - r);
  }
  e.restore();
}
var U = null;
function W() {
  return (
    U ||
    ((U = O(L, L, (e) => ee.forEach((t, n) => te(e, t, n)))),
    (U.anisotropy = 8),
    (U.generateMipmaps = !0),
    (U.minFilter = g),
    U)
  );
}
function ne() {
  let e = [],
    t = [],
    n = [],
    r = (e, t, n) => {
      let [r, i, a, o] = z[e],
        s = r + 2 + t * (a - r - 4),
        c = i + 2 + (1 - n) * (o - i - 4);
      return [s / I, 1 - c / I];
    };
  function a(i, a, o, s, c, l, u) {
    let [d, f, p, m] = u.map(([e, t]) => r(l, e, t));
    for (let [r, l] of [
      [i, d],
      [a, f],
      [o, p],
      [i, d],
      [o, p],
      [s, m],
    ])
      (e.push(...r), t.push(...c), n.push(...l));
  }
  function o(e, t, n, r, i, o, s) {
    let c = e - r / 2,
      l = e + r / 2,
      u = t,
      d = t + i,
      f = n - o / 2,
      p = n + o / 2,
      m = [
        [0, 0],
        [1, 0],
        [1, 1],
        [0, 1],
      ];
    (a([l, u, p], [l, u, f], [l, d, f], [l, d, p], [1, 0, 0], s, m),
      a([c, u, f], [c, u, p], [c, d, p], [c, d, f], [-1, 0, 0], s, m),
      a([c, d, p], [l, d, p], [l, d, f], [c, d, f], [0, 1, 0], s, m),
      a([c, u, f], [l, u, f], [l, u, p], [c, u, p], [0, -1, 0], s, m),
      a([c, u, p], [l, u, p], [l, d, p], [c, d, p], [0, 0, 1], s, m),
      a([l, u, f], [c, u, f], [c, d, f], [l, d, f], [0, 0, -1], s, m));
  }
  function s() {
    let r = new i();
    return (
      r.setAttribute(`position`, new b(e, 3)),
      r.setAttribute(`normal`, new b(t, 3)),
      r.setAttribute(`uv`, new b(n, 2)),
      r.computeBoundingBox(),
      r.computeBoundingSphere(),
      r
    );
  }
  return { quad: a, boxPart: o, geometry: s };
}
function G(
  e,
  {
    along: t,
    a0: n,
    a1: r,
    y0: i,
    y1: a,
    plane: o,
    out: s,
    pitch: c,
    depth: l,
    k: u,
    uMap: d,
  },
) {
  let f = Math.max(1, Math.round((r - n) / c)),
    p = (r - n) / f,
    m = [
      [0, 0.36, 0],
      [0.36, 0.5, 1],
      [0.5, 0.86, 2],
      [0.86, 1, 3],
    ],
    h = (e, n, r) => (t === `x` ? [e, n, o - s * r] : [o - s * r, n, e]);
  for (let r = 0; r < f; r++)
    for (let [o, c, f] of m) {
      let m = n + (r + o) * p,
        g = n + (r + c) * p,
        _ = f === 0 || f === 1 ? 0 : l,
        v = f === 0 ? 0 : f === 1 || f === 2 ? l : 0,
        y =
          t === `x`
            ? new C(g - m, 0, -s * (v - _))
            : new C(-s * (v - _), 0, g - m),
        b = new C(0, 1, 0).cross(y).normalize();
      (t === `x` ? b.z : b.x) * s < 0 && b.negate();
      let x = d(m),
        S = d(g),
        w = i / F.H,
        T = a / F.H,
        E = h(m, i, _),
        D = h(g, i, v),
        O = h(g, a, v),
        k = h(m, a, _);
      (t === `x`) == s < 0
        ? e.quad(D, E, k, O, b.toArray(), u, [
            [S, w],
            [x, w],
            [x, T],
            [S, T],
          ])
        : e.quad(E, D, O, k, b.toArray(), u, [
            [x, w],
            [S, w],
            [S, T],
            [x, T],
          ]);
    }
}
var K = new Map();
function q(e = `dry40`) {
  if (K.has(e)) return K.get(e);
  let t = ne(),
    n = e.endsWith(`20`) ? F.L20 : F.L40,
    r = F.W,
    i = F.H,
    a = n / 2,
    o = r / 2,
    s = 0.16,
    c = 0.14,
    l = (e) => (t) => {
      let r = (t + a) / n,
        i = n < 10 ? 0.25 + r * 0.5 : r;
      return e > 0 ? i : 1 - i;
    };
  for (let e of [-1, 1])
    G(t, {
      along: `x`,
      a0: -a + s,
      a1: a - s,
      y0: c,
      y1: i - c,
      plane: e * o,
      out: e,
      pitch: 0.278,
      depth: 0.036,
      k: `side`,
      uMap: l(e),
    });
  if (
    (e === `reefer40`
      ? (t.quad(
          [-a + 0.08, c, -o + s],
          [-a + 0.08, c, o - s],
          [-a + 0.08, i - c, o - s],
          [-a + 0.08, i - c, -o + s],
          [-1, 0, 0],
          `front`,
          [
            [1, 0],
            [0, 0],
            [0, 1],
            [1, 1],
          ],
        ),
        t.boxPart(-a + 0.2, 0.3, 0.55, 0.12, 0.5, 0.6, `galv`))
      : G(t, {
          along: `z`,
          a0: -o + s,
          a1: o - s,
          y0: c,
          y1: i - c,
          plane: -a,
          out: -1,
          pitch: 0.29,
          depth: 0.03,
          k: `front`,
          uMap: (e) => (e + o) / r,
        }),
    e !== `doorsOpen20`)
  ) {
    t.quad(
      [a - 0.02, c, o - s],
      [a - 0.02, c, -o + s],
      [a - 0.02, i - c, -o + s],
      [a - 0.02, i - c, o - s],
      [1, 0, 0],
      `door`,
      [
        [0, 0],
        [1, 0],
        [1, 1],
        [0, 1],
      ],
    );
    for (let e of [-0.86, -0.42, 0.42, 0.86]) {
      t.boxPart(a + 0.015, 0.2, e, 0.035, i - 2 * c - 0.12, 0.035, `galv`);
      for (let n of [0.16, i - c - 0.12])
        t.boxPart(a + 0.02, n, e, 0.06, 0.1, 0.09, `galv`);
      t.boxPart(
        a + 0.05,
        i * 0.42,
        e + (e > 0 ? -0.09 : 0.09),
        0.05,
        0.05,
        0.2,
        `galv`,
      );
    }
    for (let e of [-1, 1])
      for (let n of [0.45, 1.25, 2.05])
        t.boxPart(a + 0.01, n, e * (o - s - 0.03), 0.06, 0.16, 0.08, `galv`);
  } else {
    for (let e of [-1, 1]) {
      let n = a + 0.02,
        r = e * (o + 0.06);
      (t.quad(
        [n - 1.2, c, r],
        [n, c, r],
        [n, i - c, r],
        [n - 1.2, i - c, r],
        [0, 0, e],
        `door`,
        e > 0
          ? [
              [0.5, 0],
              [0, 0],
              [0, 1],
              [0.5, 1],
            ]
          : [
              [0.5, 0],
              [1, 0],
              [1, 1],
              [0.5, 1],
            ],
      ),
        t.quad(
          [n, c, r - e * 0.03],
          [n - 1.2, c, r - e * 0.03],
          [n - 1.2, i - c, r - e * 0.03],
          [n, i - c, r - e * 0.03],
          [0, 0, -e],
          `door`,
          [
            [0, 0],
            [0.5, 0],
            [0.5, 1],
            [0, 1],
          ],
        ));
      for (let a of [0.3, 0.75])
        t.boxPart(
          n - a,
          0.2,
          r + e * 0.03,
          0.035,
          i - 2 * c - 0.12,
          0.035,
          `galv`,
        );
    }
    t.quad(
      [-a + 0.05, 0.1, o - 0.05],
      [-a + 0.05, 0.1, -o + 0.05],
      [-a + 0.05, i - 0.05, -o + 0.05],
      [-a + 0.05, i - 0.05, o - 0.05],
      [1, 0, 0],
      `frame`,
      [
        [0, 0],
        [1, 0],
        [1, 1],
        [0, 1],
      ],
    );
    for (let e of [-1, 1])
      t.quad(
        [a, 0.1, e * (o - 0.05)],
        [-a, 0.1, e * (o - 0.05)],
        [-a, i - 0.05, e * (o - 0.05)],
        [a, i - 0.05, e * (o - 0.05)].map((e) => e),
        [0, 0, -e],
        `frame`,
        [
          [0, 0],
          [1, 0],
          [1, 1],
          [0, 1],
        ],
      );
    t.quad(
      [-a, 0.12, o - 0.05],
      [a, 0.12, o - 0.05],
      [a, 0.12, -o + 0.05],
      [-a, 0.12, -o + 0.05],
      [0, 1, 0],
      `roof`,
      [
        [0, 0],
        [1, 0],
        [1, 1],
        [0, 1],
      ],
    );
  }
  if (e === `open40`) {
    let e = (e, t) =>
      i -
      0.05 +
      0.12 * Math.sin((e / 10) * Math.PI) * Math.sin((t / 3) * Math.PI) -
      0.05 * ((e % 2) ^ (t % 2));
    for (let i = 0; i < 10; i++)
      for (let s = 0; s < 3; s++) {
        let c = -a + (i / 10) * n,
          l = -a + ((i + 1) / 10) * n,
          u = -o + (s / 3) * r,
          d = -o + ((s + 1) / 3) * r;
        t.quad(
          [c, e(i, s + 1), d],
          [l, e(i + 1, s + 1), d],
          [l, e(i + 1, s), u],
          [c, e(i, s), u],
          [0, 1, 0],
          `tarp`,
          [
            [i / 10, (s + 1) / 3],
            [(i + 1) / 10, (s + 1) / 3],
            [(i + 1) / 10, s / 3],
            [i / 10, s / 3],
          ],
        );
      }
  } else
    t.quad(
      [-a + 0.05, i - 0.02, o - 0.05],
      [a - 0.05, i - 0.02, o - 0.05],
      [a - 0.05, i - 0.02, -o + 0.05],
      [-a + 0.05, i - 0.02, -o + 0.05],
      [0, 1, 0],
      `roof`,
      [
        [0, 0],
        [1, 0],
        [1, 1],
        [0, 1],
      ],
    );
  t.quad(
    [-a, 0.005, -o],
    [a, 0.005, -o],
    [a, 0.005, o],
    [-a, 0.005, o],
    [0, -1, 0],
    `frame`,
    [
      [0, 0],
      [1, 0],
      [1, 1],
      [0, 1],
    ],
  );
  for (let e of [-1, 1])
    for (let n of [-1, 1])
      t.boxPart(e * (a - s / 2), 0, n * (o - s / 2), s, i, s, `frame`);
  for (let e of [-1, 1])
    for (let r of [0, i - c])
      t.boxPart(0, r, e * (o - 0.05), n - 2 * s, c, 0.1, `frame`);
  for (let e of [-1, 1])
    for (let n of [0, i - c - 0.04])
      t.boxPart(
        e * (a - 0.06),
        n,
        0,
        0.12,
        0.18000000000000002,
        r - 2 * s,
        `frame`,
      );
  for (let e of [-1, 1])
    for (let n of [-1, 1])
      for (let r of [0, i - 0.12])
        t.boxPart(e * (a - 0.09), r, n * (o - 0.08), 0.18, 0.12, 0.165, `galv`);
  if (n < 10)
    for (let e of [-1, 1])
      for (let n of [-1.03, 1.03])
        t.quad(
          [n - 0.18, 0.02, e * (o + 0.002)],
          [n + 0.18, 0.02, e * (o + 0.002)],
          [n + 0.18, 0.12, e * (o + 0.002)],
          [n - 0.18, 0.12, e * (o + 0.002)],
          [0, 0, e],
          `frame`,
          [
            [0, 0],
            [1, 0],
            [1, 1],
            [0, 1],
          ],
        );
  let u = t.geometry();
  return (K.set(e, u), u);
}
function re() {
  let e = new l({ map: W(), roughness: 0.62, metalness: 0.28 });
  return (
    (e.onBeforeCompile = (e) => {
      e.vertexShader = e.vertexShader
        .replace(
          `#include <common>`,
          `#include <common>
attribute vec2 aLiv;`,
        )
        .replace(
          `#include <uv_vertex>`,
          `#include <uv_vertex>\n#ifdef USE_MAP\n vMapUv = (vec2(aLiv.x, 3.0 - aLiv.y) + vMapUv) * ${(1 / R).toFixed(4)};\n#endif`,
        );
    }),
    (e.customProgramCacheKey = () => `ship-container-v1`),
    e
  );
}
function ie(e, t = re()) {
  let n = new _();
  n.name = `ship-containers`;
  let r = new Map();
  for (let t of e) (r.has(t.kind) || r.set(t.kind, []), r.get(t.kind).push(t));
  let i = new a(),
    o = new f(),
    s = new C(),
    l = new C(1, 1, 1),
    u = new C(0, 1, 0),
    d = new c();
  for (let [e, a] of r) {
    let r = q(e).clone(),
      c = new Float32Array(a.length * 2);
    (a.forEach((e, t) => {
      ((c[t * 2] = e.liv % R), (c[t * 2 + 1] = Math.floor(e.liv / R)));
    }),
      r.setAttribute(`aLiv`, new v(c, 2)));
    let f = new h(r, t, a.length);
    ((f.name = `ship-containers-${e}`),
      a.forEach((e, t) => {
        (o.setFromAxisAngle(u, e.ry ?? 0),
          s.set(e.x, e.y, e.z),
          i.compose(s, o, l),
          f.setMatrixAt(t, i));
        let n = k(Math.floor(e.x * 31 + e.z * 977 + e.y * 13))();
        f.setColorAt(t, d.setScalar(0.82 + n * 0.22));
      }),
      (f.instanceMatrix.needsUpdate = !0),
      (f.instanceColor.needsUpdate = !0),
      (f.castShadow = !1),
      (f.receiveShadow = !0),
      f.computeBoundingSphere(),
      n.add(f));
  }
  return n;
}
function ae(e, n) {
  let i = new _();
  i.name = `ship-lashing`;
  let o = new r(0.014, 0.014, 1, 5).translate(0, 0.5, 0),
    s = P(10133926, 0.55, 0.7),
    c = new r(0.04, 0.04, 0.42, 6).translate(0, 0.21, 0),
    l = P(11770411, 0.5, 0.5),
    u = new t(0.16, 0.06, 0.12),
    d = P(8357515, 0.6, 0.6),
    p = e.length,
    m = new h(o, s, p),
    g = new h(c, l, p),
    v = new h(u, d, Math.max(1, n.length)),
    y = new a(),
    b = new f(),
    x = new C(),
    S = new C(),
    w = new C(),
    T = new C(0, 1, 0),
    E = new C();
  (e.forEach((e, t) => {
    (x.set(...e.a), S.set(...e.b), w.subVectors(S, x));
    let n = w.length();
    (w.normalize(),
      b.setFromUnitVectors(T, w),
      y.compose(x, b, E.set(1, n, 1)),
      m.setMatrixAt(t, y),
      y.compose(x, b, E.set(1, 1, 1)),
      g.setMatrixAt(t, y));
  }),
    n.forEach(([e, t, n], r) => {
      (y.makeTranslation(e, t, n), v.setMatrixAt(r, y));
    }),
    n.length || (v.count = 0));
  for (let e of [m, g, v])
    ((e.instanceMatrix.needsUpdate = !0),
      (e.castShadow = !1),
      (e.receiveShadow = !0),
      e.computeBoundingSphere(),
      i.add(e));
  return i;
}
var J = null;
function oe() {
  return (
    J ||
    ((J = {
      plate: O(
        512,
        512,
        (e, t, n) => {
          let r = k(77);
          ((e.fillStyle = `#3d4c42`), e.fillRect(0, 0, t, n));
          for (let i = 0; i < 9e3; i++)
            ((e.fillStyle = `rgba(${r() < 0.5 ? `0,0,0` : `170,190,175`},${r() * 0.09})`),
              e.fillRect(r() * t, r() * n, 1 + r() * 3, 1 + r() * 2));
          ((e.strokeStyle = `rgba(20,24,22,0.7)`),
            (e.lineWidth = 3),
            e.beginPath());
          for (let n of [0, 256]) (e.moveTo(0, n + 1), e.lineTo(t, n + 1));
          (e.moveTo(1, 0),
            e.lineTo(1, 256),
            e.moveTo(257, 256),
            e.lineTo(257, 512),
            e.stroke());
          for (let t = 0; t < 70; t++) {
            let t = r() < 0.5,
              n = r() * 512,
              i = [0, 256][Math.floor(r() * 2)];
            ((e.fillStyle = `rgba(110,58,26,${0.2 + r() * 0.3})`),
              t
                ? e.fillRect(n, i - 2, 10 + r() * 30, 5 + r() * 4)
                : e.fillRect(i - 2, n, 5 + r() * 4, 10 + r() * 30));
          }
          for (let i = 0; i < 16; i++)
            ((e.fillStyle = `rgba(105,55,25,${0.25 + r() * 0.35})`),
              e.beginPath(),
              e.ellipse(
                r() * t,
                r() * n,
                3 + r() * 14,
                2 + r() * 8,
                r() * 3,
                0,
                6.283,
              ),
              e.fill());
          for (let i = 0; i < 40; i++) {
            ((e.strokeStyle = `rgba(150,160,150,${r() * 0.15})`),
              (e.lineWidth = 1 + r() * 2),
              e.beginPath());
            let i = r() * t,
              a = r() * n;
            (e.moveTo(i, a),
              e.lineTo(i + (r() - 0.5) * 60, a + (r() - 0.5) * 20),
              e.stroke());
          }
        },
        !0,
      ),
      walk: O(
        256,
        256,
        (e, t, n) => {
          let r = k(91);
          ((e.fillStyle = `#4f6a55`), e.fillRect(0, 0, t, n));
          for (let i = 0; i < 9e3; i++)
            ((e.fillStyle = `rgba(${r() < 0.5 ? `15,20,15` : `200,215,200`},${r() * 0.18})`),
              e.fillRect(r() * t, r() * n, 1, 1));
          for (let i = 0; i < 20; i++)
            ((e.fillStyle = `rgba(20,25,20,${r() * 0.2})`),
              e.fillRect(r() * t, r() * n, 6 + r() * 30, 3 + r() * 8));
        },
        !0,
      ),
      hatch: O(
        512,
        512,
        (e, t, n) => {
          let r = k(133);
          ((e.fillStyle = `#6a2b24`), e.fillRect(0, 0, t, n));
          for (let i = 0; i < 7e3; i++)
            ((e.fillStyle = `rgba(${r() < 0.6 ? `20,8,6` : `200,150,140`},${r() * 0.1})`),
              e.fillRect(r() * t, r() * n, 1 + r() * 3, 1 + r() * 2));
          e.fillStyle = `rgba(0,0,0,0.18)`;
          for (let r = 32; r < t; r += 64) e.fillRect(r, 0, 4, n);
          for (let i = 0; i < 24; i++) {
            let i = r() * t,
              a = r() * n,
              o = 20 + r() * 80,
              s = e.createLinearGradient(i, a, i + o, a);
            (s.addColorStop(0, `rgba(120,60,24,0.5)`),
              s.addColorStop(1, `rgba(120,60,24,0)`),
              (e.fillStyle = s),
              e.fillRect(i, a, o, 3 + r() * 3));
          }
        },
        !0,
      ),
    }),
    J)
  );
}
var Y = new Map();
function se(
  e,
  {
    w: t = 512,
    h: n = 256,
    ink: r = `#e9e5d8`,
    font: i = `800 180px Arial, sans-serif`,
    alpha: a = 0.8,
  } = {},
) {
  let o = [e, t, n, r, i, a].join(`|`);
  if (Y.has(o)) return Y.get(o);
  let s = O(t, n, (o) => {
    let s = k(e.length * 31 + 7);
    ((o.globalAlpha = a),
      (o.fillStyle = r),
      (o.font = i),
      (o.textAlign = `center`),
      (o.textBaseline = `middle`));
    let c = o.measureText(e).width,
      l = Math.min(1, (t * 0.94) / c);
    (o.save(),
      o.translate(t / 2, n / 2 + 6),
      o.scale(l, 1),
      o.fillText(e, 0, 0),
      o.restore(),
      (o.globalCompositeOperation = `destination-out`),
      (o.globalAlpha = 1));
    for (let e = 0; e < 900; e++)
      ((o.fillStyle = `rgba(0,0,0,${s() * 0.8})`),
        o.fillRect(s() * t, s() * n, 1 + s() * 4, 1 + s() * 3));
  });
  return (Y.set(o, s), s);
}
var X = new Map();
function ce(e, t) {
  let n = e + JSON.stringify(t ?? {});
  return (X.has(n) || X.set(n, le(e, t)), X.get(n));
}
function le(e, t) {
  return new l({
    map: se(e, t),
    transparent: !0,
    roughness: 0.75,
    depthWrite: !1,
    polygonOffset: !0,
    polygonOffsetFactor: -2,
    polygonOffsetUnits: -2,
  });
}
var ue = new Map();
function de(e, t) {
  let n = new _(),
    r = `${e}x${t}`;
  if (!ue.has(r)) {
    let n = oe().hatch.clone();
    ((n.needsUpdate = !0),
      n.repeat.set(e / 4, t / 4),
      ue.set(r, new l({ map: n, roughness: 0.7, metalness: 0.25 })));
  }
  let i = ue.get(r),
    a = P(5907486, 0.7, 0.3),
    o = P(2763822, 0.6, 0.5);
  N(n, e, 0.06, t, i, 0, 0, 0);
  for (let r of [-1, 1])
    (N(n, e, 0.06, 0.1, a, 0, 0.06, r * (t / 2 - 0.05)),
      N(n, 0.1, 0.06, t, a, r * (e / 2 - 0.05), 0.06, 0));
  for (let r = -e / 2 + 1.5; r < e / 2 - 1; r += 3)
    N(n, 0.08, 0.05, t - 0.4, a, r, 0.06, 0);
  for (let r = -e / 2 + 1; r < e / 2; r += 2.2)
    for (let e of [-1, 1])
      N(n, 0.14, 0.12, 0.14, o, r, -0.05, e * (t / 2 + 0.06));
  return n;
}
function fe({ tilt: e = 0.6, color: t = 16760944 } = {}) {
  let n = new _(),
    r = P(2895924, 0.6, 0.5),
    i = T(t, 2.2),
    a = new _();
  ((a.position.y = 0.35),
    (a.rotation.z = -e),
    n.add(a),
    N(n, 0.08, 0.35, 0.5, r, -0.12, 0, 0),
    N(a, 0.32, 0.36, 0.5, r, 0, -0.18, 0),
    N(a, 0.03, 0.3, 0.42, i, 0.17, -0.15, 0));
  for (let e of [-1, 1]) N(a, 0.04, 0.04, 0.04, r, -0.05, -0.02, e * 0.27);
  return ((n.userData.lens = i), n);
}
var pe = `
  varying float vAlong; varying vec3 vW; varying vec3 vN; varying vec2 vUv2;
  void main(){
    vAlong = 1.0 - uv.y; vUv2 = uv;
    vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * viewMatrix * w;
  }`,
  Z = `
  uniform vec3 uColor; uniform float uTime, uGain, uRain, uFar;
  varying float vAlong; varying vec3 vW; varying vec3 vN; varying vec2 vUv2;
  float h1(float n){ return fract(sin(n) * 43758.5453); }
  void main(){
    vec3 V = normalize(cameraPosition - vW);
    float edge = pow(abs(dot(normalize(vN + vec3(1e-5)), V)), 1.6);                // soft at the silhouette, full looking through it
    float va = clamp(vAlong, 0.0, 1.0); float fall = pow(1.0 - va, 1.7) * smoothstep(0.0, 0.06, va);
    // rain lit in the beam: thin streaks falling fast, a little wind slant
    float col = floor(vUv2.x * 90.0);
    float sp = 14.0 + 8.0 * h1(col);
    float streak = smoothstep(0.86, 1.0, fract(vW.y * 0.9 + uTime * sp * 0.35 + h1(col * 1.7) * 7.0 + vW.x * 0.07));
    float rain = mix(0.55, 1.0, streak * uRain);
    float dist = length(cameraPosition - vW);
    float fogK = 1.0 - smoothstep(uFar * 0.25, uFar, dist);
    float near = smoothstep(0.6, 3.0, dist);                          // no slab of light right in your face
    // MSAA can shade samples just past the cone's edge with extrapolated varyings: keep it finite and faint
    vec3 c = uColor * uGain * clamp(edge, 0.0, 1.0) * clamp(fall, 0.0, 1.0) * rain * fogK * near;
    if (any(isnan(c)) || any(isinf(c))) c = vec3(0.0);
    gl_FragColor = vec4(clamp(c, 0.0, 0.12), 1.0);
  }`;
function me(e = 14, t = 0.42, n = 16760944, i = 0.06) {
  let a = new r(0.12, Math.tan(t) * e, e, 24, 1, !0).translate(0, -e / 2, 0),
    o = new d({
      vertexShader: pe,
      fragmentShader: Z,
      transparent: !0,
      depthWrite: !1,
      blending: 2,
      side: 2,
      fog: !1,
      uniforms: {
        uColor: { value: new c(n) },
        uTime: { value: 0 },
        uGain: { value: i },
        uRain: { value: 1 },
        uFar: { value: 170 },
      },
    }),
    l = new s(a, o);
  return (
    (l.renderOrder = 3),
    (l.frustumCulled = !0),
    (l.castShadow = !1),
    (l.name = `ship-beam`),
    l
  );
}
function he(e) {
  let t = e.map((e) => {
      let t = new r(0.12, Math.tan(e.half) * e.len, e.len, 24, 1, !0).translate(
        0,
        -e.len / 2,
        0,
      );
      (t.applyQuaternion(
        new f().setFromUnitVectors(new C(0, -1, 0), new C(...e.d).normalize()),
      ),
        t.translate(...e.p));
      let i = t.attributes.position.count,
        a = new c(e.color).multiplyScalar(e.gain),
        o = new Float32Array(i * 3);
      for (let e = 0; e < i; e++) o.set([a.r, a.g, a.b], e * 3);
      return (t.setAttribute(`bcol`, new n(o, 3)), t);
    }),
    i = x(t, !1);
  t.forEach((e) => e.dispose());
  let a = new d({
      vertexShader: pe
        .replace(
          `varying float vAlong;`,
          `attribute vec3 bcol; varying vec3 vCol; varying float vAlong;`,
        )
        .replace(`vAlong = 1.0 - uv.y;`, `vAlong = 1.0 - uv.y; vCol = bcol;`),
      fragmentShader: Z.replace(
        `varying float vAlong;`,
        `varying vec3 vCol; varying float vAlong;`,
      ).replace(`uColor * uGain`, `vCol`),
      transparent: !0,
      depthWrite: !1,
      blending: 2,
      side: 2,
      fog: !1,
      uniforms: {
        uColor: { value: new c() },
        uTime: { value: 0 },
        uGain: { value: 1 },
        uRain: { value: 1 },
        uFar: { value: 170 },
      },
    }),
    o = new s(i, a);
  return ((o.renderOrder = 3), (o.name = `ship-beam`), (o.castShadow = !1), o);
}
function ge(t) {
  let n = { value: [...Array(12)].map(() => new e()) },
    r = { value: [...Array(12)].map(() => new e()) },
    i = { value: [...Array(12)].map(() => new C()) },
    a = { value: 1 },
    o = t.map((e) => ({
      ...e,
      dv: new C(...e.d).normalize(),
      c: new c(e.color).multiplyScalar(e.gain ?? 1),
    })),
    s = new Set();
  function l(e) {
    if (
      !e ||
      s.has(e) ||
      !(e.isMeshStandardMaterial || e.isMeshPhysicalMaterial)
    )
      return;
    s.add(e);
    let t = e.onBeforeCompile,
      o = e.customProgramCacheKey?.bind(e);
    ((e.onBeforeCompile = (o, s) => {
      (t?.call(e, o, s),
        (o.uniforms.uFloodP = n),
        (o.uniforms.uFloodD = r),
        (o.uniforms.uFloodC = i),
        (o.uniforms.uFloodK = a),
        (o.vertexShader = o.vertexShader
          .replace(
            `#include <common>`,
            `#include <common>
varying vec3 vFloodW;`,
          )
          .replace(
            `#include <project_vertex>`,
            `#include <project_vertex>
          { vec4 fw = vec4(transformed, 1.0);
          #ifdef USE_INSTANCING
            fw = instanceMatrix * fw;
          #endif
          vFloodW = (modelMatrix * fw).xyz; }`,
          )),
        (o.fragmentShader = o.fragmentShader
          .replace(
            `#include <common>`,
            `#include <common>
          varying vec3 vFloodW; uniform vec4 uFloodP[12]; uniform vec4 uFloodD[12]; uniform vec3 uFloodC[12]; uniform float uFloodK;`,
          )
          .replace(
            `#include <lights_fragment_end>`,
            `#include <lights_fragment_end>
          {
            vec3 Nw = normalize(inverseTransformDirection(normal, viewMatrix));
            vec3 Vw = normalize(cameraPosition - vFloodW);
            for (int i = 0; i < 12; i++) {
              vec4 fp = uFloodP[i]; if (fp.w <= 0.0) continue;
              vec3 L = fp.xyz - vFloodW; float d = length(L); if (d > fp.w) continue; L /= d;
              float cs = dot(-L, uFloodD[i].xyz);
              float spot = smoothstep(uFloodD[i].w, uFloodD[i].w + (1.0 - uFloodD[i].w) * 0.45, cs);
              float q = d / fp.w; float fall = (1.0 - q * q) * (1.0 - q * q) / (1.0 + d * d * 0.03);
              float ndl = max(dot(Nw, L), 0.0);
              vec3 rad = uFloodC[i] * spot * fall * ndl * uFloodK;
              reflectedLight.directDiffuse += rad * BRDF_Lambert(material.diffuseColor);
              vec3 Hh = normalize(L + Vw); float rr = max(material.roughness, 0.06);
              reflectedLight.directSpecular += rad * pow(max(dot(Nw, Hh), 0.0), 2.0 / (rr * rr * rr * rr) ) * (1.0 - rr) * 0.25;
            }
          }`,
          )));
    }),
      (e.customProgramCacheKey = () => (o ? o() : ``) + `|flood12`),
      (e.needsUpdate = !0));
  }
  let u = new C(),
    d = o.map((e, t) => t);
  function f(e, t = 1) {
    (e.getWorldPosition(u),
      (a.value = t),
      d.sort(
        (e, t) =>
          u.distanceToSquared(new C(...o[e].p)) -
          u.distanceToSquared(new C(...o[t].p)),
      ));
    for (let e = 0; e < 12; e++) {
      let t = o[d[e]];
      if (!t) {
        n.value[e].set(0, 0, 0, 0);
        continue;
      }
      (n.value[e].set(t.p[0], t.p[1], t.p[2], t.range ?? 22),
        r.value[e].set(t.dv.x, t.dv.y, t.dv.z, Math.cos(t.half ?? 0.5)),
        i.value[e].set(t.c.r, t.c.g, t.c.b));
    }
  }
  function p(e, t) {
    (o[e].dv.set(...t).normalize(), (o[e].d = t));
  }
  return { patch: l, update: f, aim: p, items: o, count: () => s.size };
}
var Q = 14277074,
  _e = 14704668,
  ve = 5593436,
  ye = 12167034;
function be({ hang: e = 3, name: t = `KESTREL STAR` } = {}) {
  let n = new _(),
    r = P(_e, 0.55, 0.05),
    i = P(2238508, 0.4, 0.2),
    a = P(Q, 0.6, 0.2),
    o = P(10133668, 0.5, 0.8),
    c = new _();
  ((c.position.y = e), n.add(c));
  let l = new s(new S(1, 20, 10, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), r);
  (l.scale.set(3.8, 1.1, 1.2),
    (l.position.y = 0.95),
    (l.castShadow = !0),
    c.add(l),
    M(c, 7, 0.5, 2.36, 0.2, r, 0, 0.75, 0),
    M(c, 6.2, 1.05, 2.1, 0.45, r, -0.2, 1.1, 0),
    N(c, 4.4, 0.22, 2.16, i, -0.2, 1.6, 0),
    M(c, 1.3, 0.55, 1, 0.2, r, 1.9, 2, 0),
    N(c, 1, 0.22, 1.04, i, 1.9, 2.2, 0),
    N(c, 7.1, 0.08, 2.42, a, 0, 0.92, 0));
  for (let e of [-1, 1]) {
    let n = new s(
      new p(3.2, 0.3),
      ce(t, {
        w: 1024,
        h: 96,
        ink: `#111`,
        font: `800 72px Arial, sans-serif`,
        alpha: 0.9,
      }),
    );
    (n.position.set(0, 0.7, e * 1.195),
      (n.rotation.y = e > 0 ? 0 : Math.PI),
      c.add(n));
  }
  for (let t of [-1, 1])
    (A(n, [t * 3, 0, -1.85], [t * 3, e + 1.6, -1.85], 0.28, 0.28, a),
      A(n, [t * 3, e + 1.6, -1.85], [t * 3, e + 2.6, -0.2], 0.24, 0.24, a),
      D(n, [t * 3, e + 2.55, -0.2], [t * 3, e + 2.1, 0], 0.02, o));
  return j(n, [7.6, e + 2.8, 4]);
}
function xe() {
  let e = new _(),
    t = P(2830124, 0.85, 0),
    n = P(4869964, 0.6, 0.1),
    i = P(1382426, 0.5, 0.3),
    a = P(2106401, 0.9, 0);
  M(e, 9.6, 0.7, 2.6, 0.3, n, 0, 0, 0);
  for (let n of [-1, 1]) {
    let i = new s(new r(0.33, 0.33, 9.4, 12), t);
    ((i.rotation.z = Math.PI / 2),
      i.position.set(-0.2, 0.75, n * 1.15),
      e.add(i));
  }
  let c = new s(new o(1.15, 0.33, 10, 16, Math.PI), t);
  (c.rotation.set(Math.PI / 2, 0, -Math.PI / 2),
    c.position.set(4.5, 0.75, 0),
    e.add(c),
    N(e, 1.2, 1, 1.2, i, -0.8, 0.6, 0),
    N(e, 0.05, 0.5, 1.1, P(5924976, 0.1, 0.3), -0.25, 1.6, 0));
  for (let t of [-2.4, 0.8, 2.2]) N(e, 0.6, 0.5, 1.5, a, t, 0.6, 0);
  for (let t of [-1, 1]) N(e, 0.7, 0.9, 0.5, i, -4.6, 0.4, t * 0.5);
  return (
    D(e, [-2.8, 1, 0], [-2.8, 3, 0], 0.04, i),
    N(e, 0.5, 0.15, 0.5, i, -2.8, 3, 0),
    j(e, [10, 3.2, 3])
  );
}
function Se({
  drop: e = 12,
  out: t = 7,
  rail: n = 1.18,
  ropeOnly: r = !1,
} = {}) {
  let i = new _(),
    a = P(3817025, 0.5, 0.7),
    o = P(2763302, 0.9, 0),
    s = P(8027512, 0.6, 0.4);
  N(i, 0.05, 0.4, 0.05, a, 0, -0.1, -0.15);
  for (let e of [-0.6, 0, 0.6])
    D(i, [0, 0.25, -0.15], [Math.sin(e) * 0.25, 0.1, -0.35], 0.022, a);
  for (let a of r ? [0] : [-1, 1]) {
    let s = a * 0.22,
      c = [
        [s, 0.25, -0.1],
        [s, 0.22, 0.3],
        [s, -n + 0.08, 0.55],
        [s, -n + 0.08, t],
        [s, -e, t + 0.15],
      ];
    for (let e = 0; e < c.length - 1; e++)
      D(i, c[e], c[e + 1], r ? 0.018 : 0.014, o);
  }
  if (!r)
    for (let r = -n - 0.3; r > -e + 0.2; r -= 0.35)
      N(i, 0.44, 0.03, 0.04, s, 0, r, t + 0.15 * ((-n - r) / (e - n)));
  return j(i, [0.6, e, t]);
}
function Ce(e = 11) {
  let t = new _(),
    n = P(3091494, 0.95, 0);
  D(t, [0, e, 0], [0.15, 0.25, 0.1], 0.028, n, 6);
  for (let e = 0; e < 4; e++) {
    let r = new s(new o(0.42 - e * 0.04, 0.03, 5, 18), n);
    ((r.rotation.x = Math.PI / 2),
      r.position.set(0.35, 0.04 + e * 0.05, 0.25),
      t.add(r));
  }
  return j(t, [1, e, 1]);
}
function we(e = 0.65, t = 6) {
  let n = new _(),
    r = P(ye, 0.95, 0);
  for (let i = 0; i < t; i++) {
    let t = new s(new o(e - (i % 3) * 0.1, 0.055, 6, 22), r);
    ((t.rotation.x = Math.PI / 2),
      (t.position.y = 0.05 + Math.floor(i / 3) * 0.1),
      n.add(t));
  }
  return j(n, [e * 2, 0.4, e * 2]);
}
function Te() {
  let e = new _(),
    t = P(1843236, 0.6, 0.5);
  N(e, 1.1, 0.12, 0.6, t, 0, 0, 0);
  for (let n of [-0.35, 0.35]) {
    let i = new s(new r(0.15, 0.15, 0.5, 12), t);
    (i.position.set(n, 0.37, 0), e.add(i));
  }
  return j(e, [1.1, 0.6, 0.6]);
}
function Ee(e = 5, t = 0.36) {
  let n = new _(),
    r = P(2829614, 0.7, 0.6),
    i = Math.floor(e / t);
  for (let e = 0; e < i; e++) {
    let i = new s(new o(t * 0.5, 0.045, 5, 10), r);
    (i.scale.set(1, 0.6, 1),
      i.position.set(e * t, 0.06, 0),
      (i.rotation.x = e % 2 ? Math.PI / 2 : 0),
      e % 2 || (i.rotation.set(Math.PI / 2, 0, 0), i.rotateX(Math.PI / 2)),
      n.add(i));
  }
  let a = new s(new o(0.42, 0.12, 8, 18), P(1843236, 0.6, 0.5));
  return (
    (a.rotation.x = Math.PI / 2),
    a.position.set(e + 0.3, 0.06, 0),
    n.add(a),
    j(n, [e + 1, 0.3, 1])
  );
}
function De() {
  let e = new _(),
    t = P(_e, 0.7, 0),
    n = P(15263454, 0.7, 0),
    r = P(Q, 0.6, 0.3);
  N(e, 0.08, 0.9, 0.05, r, 0, 0, -0.06);
  let i = new s(new o(0.3, 0.07, 8, 20), t);
  (i.position.set(0, 0.62, 0), e.add(i));
  for (let t = 0; t < 4; t++) {
    let r = new s(new o(0.3, 0.075, 8, 3, 0.35), n);
    ((r.rotation.z = (t * Math.PI) / 2 + 0.6),
      r.position.copy(i.position),
      e.add(r));
  }
  return j(e, [0.8, 1, 0.3]);
}
function Oe() {
  let e = new _(),
    t = P(10495516, 0.5, 0.3),
    n = P(ve, 0.5, 0.6);
  (w(e, 0.12, 0.14, 1.2, t, 0, 0, 0, 10), N(e, 0.32, 0.25, 0.32, t, 0, 1.2, 0));
  let i = new s(new r(0.06, 0.1, 0.9, 10), t);
  return (
    (i.rotation.z = -Math.PI / 2 + 0.25),
    i.position.set(0.45, 1.45, 0),
    e.add(i),
    N(e, 0.08, 0.35, 0.08, n, -0.18, 1.25, 0),
    j(e, [1.2, 1.7, 0.4])
  );
}
function ke(e = 3, t = 2) {
  let n = new _(),
    r = k(e * 1e3 + t),
    i = [P(8023119, 0.95, 0), P(7102534, 0.95, 0), P(8746581, 0.95, 0)];
  for (let a = 0; a < t; a++)
    for (let t = -e / 2 + 0.3 + (a % 2) * 0.3; t < e / 2 - 0.2; t += 0.6)
      M(
        n,
        0.58,
        0.26,
        0.4,
        0.1,
        i[Math.floor(r() * 3)],
        t + (r() - 0.5) * 0.05,
        a * 0.24,
        (r() - 0.5) * 0.06,
        (r() - 0.5) * 0.2,
      );
  return j(n, [e, t * 0.26, 0.45]);
}
function Ae(e = 6) {
  let n = new _(),
    r = P(3817542, 0.6, 0.3),
    i = P(2238251, 0.5, 0.2),
    a = k(e * 77);
  N(n, 0.8, 0.95, e, r, 0, 0, 0);
  let o = new s(new t(0.85, 0.08, e), i);
  (o.position.set(-0.05, 1, 0), (o.rotation.z = 0.2), n.add(o));
  for (let t = -e / 2 + 0.6; t < e / 2 - 0.4; t += 0.9) {
    let e = [4169983, 4587402, 16756800, 4184319][Math.floor(a() * 4)],
      r = T(e, 0.45);
    (N(n, 0.08, 0.42, 0.62, i, 0.25, 1.05, t),
      N(n, 0.02, 0.34, 0.54, r, 0.2, 1.09, t));
  }
  return j(n, [0.9, 1.5, e]);
}
function je() {
  let e = new _(),
    t = P(3817542, 0.6, 0.3),
    n = P(1908513, 0.5, 0.4);
  N(e, 0.5, 1, 0.6, t, 0, 0, 0);
  let r = new s(new o(0.2, 0.025, 6, 18), n);
  return (
    (r.rotation.y = Math.PI / 2),
    r.position.set(-0.3, 1, 0),
    e.add(r),
    N(e, 0.04, 0.2, 0.3, T(4587402, 1.2), -0.26, 1.05, 0),
    j(e, [0.6, 1.2, 0.6])
  );
}
function Me() {
  let e = new _(),
    t = P(13684936, 0.6, 0.4),
    n = P(1447962, 0.95, 0),
    r = new _();
  (r.rotation.set(-Math.PI / 2 + 0.08, 0.4, 0),
    r.position.set(0, 0.09, 0),
    e.add(r),
    N(r, 0.9, 2, 0.06, t, 0, -1, 0),
    N(r, 0.3, 0.06, 0.08, n, 0.25, -0.1, 0.05));
  let i = new s(
    new u(1.4, 18),
    new l({
      color: 789516,
      transparent: !0,
      opacity: 0.55,
      roughness: 1,
      depthWrite: !1,
      polygonOffset: !0,
      polygonOffsetFactor: -2,
    }),
  );
  return (
    (i.rotation.x = -Math.PI / 2),
    i.position.set(-0.6, 0.012, 0.6),
    i.scale.set(1, 0.7, 1),
    e.add(i),
    j(e, [2, 0.3, 2])
  );
}
function Ne({ run: e = 13, rise: t = 4.5, drop: n = 3.4, a: i = 3.2 } = {}) {
  let a = new _(),
    o = P(11769131, 0.55, 0.35),
    c = P(2763822, 0.5, 0.6),
    l = P(9410202, 0.4, 0.8),
    u = (n, r, i) => [r, t * n + i, e * n],
    d = 0.4,
    f = 0.4;
  for (let e of [-0.4, d])
    for (let t of [-0.4, f])
      A(a, u(0, e * 1.4, t), u(1, e * 0.6, t * 0.6), 0.1, 0.1, o);
  for (let e = 0; e < 10; e++) {
    let t = e / 10,
      n = (e + 1) / 10,
      r = 1.4 - 0.8 * t,
      i = 1.4 - 0.8 * n;
    (D(a, u(t, -0.4 * r, -0.4), u(n, d * i, -0.4), 0.035, o, 4),
      D(a, u(t, -0.4 * r, f), u(n, d * i, f), 0.035, o, 4),
      D(a, u(t, -0.4 * r, -0.4), u(n, -0.4 * i, f), 0.035, o, 4),
      D(a, u(t, d * r, -0.4), u(n, d * i, f), 0.035, o, 4));
  }
  for (let e of [-1, 1])
    A(a, [e * 1.2, -0.4, -1.2], [0, i, -0.4], 0.16, 0.16, o);
  for (let n of [-1, 1]) D(a, [n * 0.1, i, -0.4], [n * 0.2, t, e], 0.02, l);
  let p = new s(new r(0.35, 0.35, 0.3, 14), c);
  ((p.rotation.z = Math.PI / 2), p.position.set(0, t + 0.1, e + 0.1), a.add(p));
  for (let r of [-1, 1])
    D(a, [r * 0.15, t, e + 0.2], [r * 0.15, t - n + 0.6, e + 0.2], 0.018, l);
  return (
    N(a, 0.45, 0.6, 0.35, P(14196768, 0.5, 0.4), 0, t - n, e + 0.2),
    j(a, [3, t + 4, e + 2])
  );
}
var Pe = [1.05, 0.52, 0.23, 0.085],
  Fe = [0.124, 0.215, -0.42, 1.18],
  $ = [0.064, -0.168, 0.52, 1.05],
  Ie = [0.47, 0.7, 1.14, 1.98];
function Le(e, t, n) {
  let r = 0;
  for (let i = 0; i < 4; i++)
    r += Pe[i] * Math.sin(Fe[i] * e + $[i] * t + Ie[i] * n);
  return r;
}
var Re = (() => {
  let e = null;
  return () =>
    (e ??= O(64, 64, (e) => {
      let t = e.createRadialGradient(32, 32, 0, 32, 32, 32);
      for (let e = 0; e <= 8; e++) {
        let n = e / 8;
        t.addColorStop(
          n,
          `rgba(255,255,255,${Math.exp(-n * n * 4.5).toFixed(3)})`,
        );
      }
      ((e.fillStyle = t), e.fillRect(0, 0, 64, 64));
    }));
})();
function ze(e, t) {
  let r = new Float32Array(e * 3),
    a = new Float32Array(e * 3),
    o = new Float32Array(e),
    s = new Float32Array(e),
    c = new i();
  (c.setAttribute(`position`, new n(r, 3)),
    c.setAttribute(`color`, new n(a, 3)),
    c.setAttribute(`size`, new n(o, 1)),
    c.setAttribute(`alpha`, new n(s, 1)));
  let l = new d({
      transparent: !0,
      depthWrite: !1,
      blending: t ? 2 : 1,
      fog: !1,
      uniforms: {
        map: { value: Re() },
        uScale: { value: 600 },
        uFar: { value: 170 },
      },
      vertexShader: `attribute float size; attribute float alpha; attribute vec3 color; varying vec3 vC; varying float vA; uniform float uScale, uFar;
      void main(){ vC = color; vec4 mv = modelViewMatrix * vec4(position, 1.0); float d = -mv.z; vA = alpha * (1.0 - smoothstep(uFar * 0.3, uFar, d)) * smoothstep(0.5, 2.0, d);
        gl_PointSize = size * uScale / max(d, 0.5); gl_Position = projectionMatrix * mv; }`,
      fragmentShader: `uniform sampler2D map; varying vec3 vC; varying float vA; void main(){ vec4 t = texture2D(map, gl_PointCoord); gl_FragColor = vec4(vC, t.a * vA); if (gl_FragColor.a < 0.004) discard; }`,
    }),
    u = new y(c, l);
  ((u.frustumCulled = !1),
    (u.renderOrder = 4),
    (u.name = t ? `ship-fx-glow` : `ship-fx-mist`));
  let f = [...Array(e)].map(() => ({
      life: 0,
      age: 0,
      p: [0, 0, 0],
      v: [0, 0, 0],
      s0: 1,
      s1: 1,
      c: [1, 1, 1],
      a: 1,
      g: 0,
      drag: 0,
    })),
    p = 0;
  function m(t) {
    let n = f[p];
    ((p = (p + 1) % e),
      Object.assign(n, {
        age: 0,
        life: t.life,
        p: [...t.p],
        v: [...(t.v ?? [0, 0, 0])],
        s0: t.s0,
        s1: t.s1 ?? t.s0,
        c: t.c,
        a: t.a ?? 1,
        g: t.g ?? 0,
        drag: t.drag ?? 0,
        flick: t.flick ?? 0,
      }));
  }
  function h(t, n) {
    for (let i = 0; i < e; i++) {
      let e = f[i];
      if (e.age >= e.life) {
        ((s[i] = 0), (o[i] = 0));
        continue;
      }
      e.age += t;
      let c = e.age / e.life;
      e.v[1] -= e.g * t;
      for (let r = 0; r < 3; r++)
        ((e.v[r] *= 1 - e.drag * t),
          (e.p[r] += (e.v[r] + (n?.[r] ?? 0) * e.drag) * t));
      ((r[i * 3] = e.p[0]),
        (r[i * 3 + 1] = e.p[1]),
        (r[i * 3 + 2] = e.p[2]),
        (a[i * 3] = e.c[0]),
        (a[i * 3 + 1] = e.c[1]),
        (a[i * 3 + 2] = e.c[2]),
        (o[i] = e.s0 + (e.s1 - e.s0) * c),
        (s[i] =
          e.a *
          Math.min(1, c * 8) *
          (1 - c) *
          (e.flick ? 0.6 + 0.4 * Math.sin(e.age * 40 + i) : 1)));
    }
    for (let e of [`position`, `color`, `size`, `alpha`])
      c.attributes[e].needsUpdate = !0;
  }
  return {
    points: u,
    spawn: m,
    update: h,
    dispose() {
      (c.dispose(), l.dispose());
    },
  };
}
function Be(e, n = {}) {
  let r = e.shipDressing,
    i = r.deck,
    o = r.wl,
    c = r.house,
    d = !!n.lite,
    g = new _();
  g.name = `ship-dressing`;
  let v = [],
    y = [],
    b = (e) =>
      e.traverse((e) => {
        if (e.isMesh)
          for (let t of [e.material].flat())
            t?.userData?.nightGlow &&
              (t.emissiveIntensity = t.userData.nightGlow);
      }),
    S = re();
  (y.push(S), g.add(ie(r.containers, S)), g.add(ae(r.rods, r.twists)));
  let w = new _();
  w.name = `ship-gear`;
  let D = (e, t, n) => {
      let r = e.attributes.position,
        i = e.attributes.uv;
      for (let e = 0; e < r.count; e++)
        i.setXY(e, r.getX(e) / t, -r.getZ(e) / n);
      return e;
    },
    A = (e, t, n, r = 0) => {
      let i = x(e, !1);
      (e.forEach((e) => e.dispose()), v.push(i));
      let a = new s(i, t);
      return (
        (a.position.y = r),
        (a.receiveShadow = !0),
        (a.name = n),
        g.add(a),
        a
      );
    },
    M = oe();
  {
    let e = new l({ map: M.plate, roughness: 0.82, metalness: 0.2 });
    (y.push(e),
      A(
        r.hull.map(([e, t, n]) =>
          D(
            new p(t - e, 2 * n)
              .rotateX(-Math.PI / 2)
              .translate((e + t) / 2, 0, 0),
            4,
            4,
          ),
        ),
        e,
        `ship-deck`,
        i + 0.03,
      ));
    let t = new l({
      map: M.walk,
      roughness: 0.92,
      metalness: 0.05,
      polygonOffset: !0,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1,
    });
    (y.push(t),
      A(
        [-1, 1].map((e) =>
          D(
            new p(184, 3.6).rotateX(-Math.PI / 2).translate(-8, 0, e * 13.78),
            2,
            2,
          ),
        ),
        t,
        `ship-walkways`,
        i + 0.034,
      ),
      A(
        [-1, 1].map((e) =>
          new p(196, 0.14).rotateX(-Math.PI / 2).translate(-14, 0, e * 11.95),
        ),
        P(13148702, 0.7, 0.05, {
          polygonOffset: !0,
          polygonOffsetFactor: -2,
          polygonOffsetUnits: -2,
        }),
        `ship-walk-lines`,
        i + 0.036,
      ));
  }
  globalThis.__setpieceRaw = !0;
  try {
    for (let [e, t] of r.bays.entries())
      for (let e of [-1, 1]) {
        let n = de(F.L40 + 0.8, 10.4);
        (n.position.set(t, i + 0.02, e * 6.75), w.add(n));
      }
    let e = r.bays.map((e, t) => String(2 + t * 4).padStart(2, `0`)),
      t = 1 / e.length,
      n = O(256 * e.length, 160, (t) => {
        let n = k(5);
        ((t.fillStyle = `#e7e1cf`),
          (t.font = `800 130px Arial, sans-serif`),
          (t.textAlign = `center`),
          (t.textBaseline = `middle`),
          (t.globalAlpha = 0.8),
          e.forEach((e, n) => t.fillText(e, 128 + n * 256, 86)),
          (t.globalCompositeOperation = `destination-out`),
          (t.globalAlpha = 1));
        for (let r = 0; r < 4e3; r++)
          ((t.fillStyle = `rgba(0,0,0,` + n() * 0.8 + `)`),
            t.fillRect(
              n() * 256 * e.length,
              n() * 160,
              1 + n() * 4,
              1 + n() * 3,
            ));
      }),
      a = new l({
        map: n,
        transparent: !0,
        roughness: 0.75,
        depthWrite: !1,
        polygonOffset: !0,
        polygonOffsetFactor: -2,
        polygonOffsetUnits: -2,
      });
    y.push(a);
    for (let [e, n] of r.bays.entries()) {
      let r = new p(1.7, 1.06),
        o = r.attributes.uv;
      for (let n = 0; n < o.count; n++) o.setX(n, (e + o.getX(n)) * t);
      let c = new s(r, a);
      (c.rotation.set(-Math.PI / 2, 0, -Math.PI / 2),
        c.position.set(n + 4.6, i + 0.04, 0),
        w.add(c));
    }
  } finally {
    globalThis.__setpieceRaw = !1;
  }
  {
    let e = k(404),
      t = d ? 0 : 70,
      n = new u(1, 14).rotateX(-Math.PI / 2);
    v.push(n);
    let r = new l({
      color: 1712678,
      roughness: 0.04,
      metalness: 0,
      transparent: !0,
      opacity: 0.38,
      depthWrite: !1,
      polygonOffset: !0,
      polygonOffsetFactor: -3,
      polygonOffsetUnits: -3,
    });
    if ((y.push(r), t)) {
      let o = new h(n, r, t),
        s = new a(),
        c = new f(),
        l = new C(0, 1, 0),
        u = new C(),
        d = new C();
      for (let n = 0; n < t; n++) {
        let t = n % 3,
          r = -100 + e() * 184,
          a =
            t === 0
              ? (e() - 0.5) * 2.4
              : (t === 1 ? -1 : 1) * (12.6 + e() * 2.6),
          f = 0.4 + e() * 1.3;
        (c.setFromAxisAngle(l, e() * 6.28),
          s.compose(d.set(r, i + 0.04, a), c, u.set(f * (1 + e()), 1, f)),
          o.setMatrixAt(n, s));
      }
      ((o.instanceMatrix.needsUpdate = !0),
        (o.receiveShadow = !1),
        (o.name = `ship-puddles`),
        g.add(o));
    }
  }
  let I = ge(r.floods),
    L = new C(0, -1, 0),
    R = [],
    z = null;
  r.floods.forEach((e, t) => {
    let n = new C(...e.d).normalize(),
      r = fe({ tilt: -Math.asin(n.y), color: e.color });
    if (
      ((r.rotation.y = Math.atan2(-n.z, n.x)),
      r.position.set(e.p[0] - n.x * 0.2, e.p[1] - 0.25, e.p[2] - n.z * 0.2),
      e.search ? (b(r), g.add(r)) : !e.fire && e.cone !== !1 && w.add(r),
      !e.cone || d)
    )
      return;
    let i = Math.min(e.range * 0.75, e.search ? 60 : 26);
    if (e.search) {
      let a = me(i, e.half * 1.6, e.color, 0.014);
      (a.position.set(...e.p),
        a.quaternion.setFromUnitVectors(L, n),
        g.add(a),
        y.push(a.material),
        v.push(a.geometry),
        (z = { i: t, cone: a, fix: r, f: e }));
    } else
      R.push({
        p: e.p,
        d: e.d,
        len: i,
        half: e.half,
        color: e.color,
        gain: 0.035,
      });
  });
  let B = R.length ? he(R) : null;
  B && (g.add(B), y.push(B.material), v.push(B.geometry));
  let V = [B?.material, z?.cone.material].filter(Boolean),
    H = r.floods.findIndex((e) => e.fire),
    te = H >= 0 ? I.items[H].c.clone() : null;
  globalThis.__setpieceRaw = !0;
  try {
    let e = (e, t, n, r, i = 0) => (
      e.position.set(t, n, r),
      (e.rotation.y = i),
      w.add(e),
      e
    );
    for (let t of r.lifeboats)
      e(be({ hang: t.hang }), t.x, i, t.z, t.s > 0 ? Math.PI : 0);
    for (let t of r.ladders) {
      let n = r.hull[0][2],
        a = 1.18,
        s = n + r.plate - (n - r.bulwark / 2) + 0.1;
      e(
        Se({ drop: i + a - o + 0.4, out: s, rail: a, ropeOnly: !!t.rope }),
        t.x,
        i + a,
        t.s * (n - r.bulwark / 2),
        t.s > 0 ? 0 : Math.PI,
      );
    }
    for (let [t, n, a] of r.ropes) e(Ce(n - i), t, i, a);
    for (let [t, n] of r.coils)
      e(we(0.6 + ((t * 7 + n) % 3) * 0.05), t, i + 0.03, n);
    for (let [t, n] of r.fairleads) {
      let a = r.hull.find(([e, n]) => t >= e && t < n) ?? r.hull[0],
        o = t > 84;
      e(Te(), t, i + (o ? 1.58 : 1.18), n * (a[2] - r.bulwark / 2));
    }
    for (let t of r.chains) e(Ee(4.6), t.x, i + 0.03, t.z);
    for (let t of r.rings)
      e(
        De(),
        t.x,
        i + 0.15,
        t.s * (16 - r.bulwark - 0.06),
        t.s > 0 ? Math.PI : 0,
      );
    for (let [t, n] of r.monitors) e(Oe(), t, i, n);
    if ((e(ke(3.7, 2), c.x0 + 11, c.floor[3], 15.07), r.bridge)) {
      let { xi: t, fy: n } = r.bridge;
      for (let [r, i] of [
        [-6.6, -1.3],
        [1.3, 6.6],
      ])
        e(Ae(i - r), t - 0.45, n, (r + i) / 2);
      e(je(), t - 2.3, n, 0);
    }
    e(Me(), r.blownDoor[0], i + 0.03, r.blownDoor[1]);
    for (let [t, n] of r.cranes)
      e(
        Ne({ run: 13, rise: 4.5, drop: 3.4 }),
        t,
        i + 9.5,
        n * 1.5,
        n > 0 ? 0 : Math.PI,
      );
    {
      let e = c.floor[3],
        t = c.x1 + 0.21,
        n = T(2767684, 0.35);
      (n.color.set(857112),
        (n.roughness = 0.05),
        (n.metalness = 0.6),
        n.emissive.set(6969914),
        N(w, 0.04, 1.3, 15.6, n, t, e + 1.15, 0));
      for (let n = -7.8; n <= 7.81; n += 1.56)
        N(w, 0.08, 1.36, 0.1, P(14277074, 0.6, 0.2), t + 0.02, e + 1.12, n);
      N(w, 0.1, 0.12, 15.8, P(14277074, 0.6, 0.2), t + 0.03, e + 2.48, 0);
      let a = new s(
        new p(7.5, 0.7),
        ce(`KESTREL STAR`, {
          w: 1024,
          h: 128,
          ink: `#1a2a3a`,
          font: `800 96px Arial, sans-serif`,
          alpha: 0.95,
        }),
      );
      ((a.rotation.y = Math.PI / 2),
        a.position.set(t + 0.04, e + 2.95, 0),
        w.add(a),
        (a.userData.keep = !0));
      let u = O(256, 256, (e) => {
        ((e.fillStyle = `#14324a`),
          e.beginPath(),
          e.arc(128, 128, 120, 0, 6.283),
          e.fill(),
          (e.fillStyle = `#f0b429`),
          e.beginPath(),
          e.moveTo(18, 138),
          e.quadraticCurveTo(90, 50, 128, 122),
          e.quadraticCurveTo(166, 50, 238, 138),
          e.quadraticCurveTo(166, 104, 128, 168),
          e.quadraticCurveTo(90, 104, 18, 138),
          e.fill());
      });
      for (let e of [-1, 1]) {
        let t = E(
          w,
          2.3,
          2.3,
          u,
          r.funnel.x,
          r.funnel.y + 4.6,
          e * 3.23,
          e > 0 ? 0 : Math.PI,
        );
        ((t.userData.keep = !0), (t.material.transparent = !1));
      }
      let d = null,
        f = (e) => e + r.plate + 0.03,
        m = r.hull[0];
      for (let e of [-1, 1]) {
        let t = new s(
          new p(16, 1.6),
          ce(`KESTREL STAR`, {
            w: 1024,
            h: 128,
            ink: `#e8e6dc`,
            font: `800 104px Arial, sans-serif`,
            alpha: 0.92,
          }),
        );
        (t.position.set(m[1] - 12, i - 2.2, e * f(m[2])),
          (t.rotation.y = e > 0 ? 0 : Math.PI),
          (t.userData.keep = !0),
          w.add(t));
        let n = new s(
            new p(0.9, 8),
            (d ??= new l({
              transparent: !0,
              roughness: 0.7,
              polygonOffset: !0,
              polygonOffsetFactor: -2,
              map: O(128, 1024, (e) => {
                ((e.fillStyle = `#e8e6dc`),
                  (e.font = `800 54px Arial, sans-serif`),
                  (e.textAlign = `center`),
                  [`16M`, `14M`, `12M`, `10M`, `8M`].forEach((t, n) => {
                    (e.fillText(t, 64, 70 + n * 200),
                      e.fillRect(20, 90 + n * 200 + 40, 88, 10));
                  }));
              }),
            })),
          ),
          a = r.hull[r.hull.length - 1];
        (n.position.set(a[0] + 1.2, o + 1, e * f(a[2])),
          (n.rotation.y = e > 0 ? 0 : Math.PI),
          (n.userData.keep = !0),
          w.add(n));
      }
      for (let [e, t] of [
        [`KESTREL STAR`, i - 2.4],
        [`MONROVIA`, i - 4.4],
      ]) {
        let n = new s(
          new p(e.length * 1.05, 1.5),
          ce(e, {
            w: 1024,
            h: 128,
            ink: `#e8e6dc`,
            font: `800 104px Arial, sans-serif`,
            alpha: 0.92,
          }),
        );
        (n.position.set(r.hull[0][0] - r.plate - 0.03, t, 0),
          (n.rotation.y = -Math.PI / 2),
          (n.userData.keep = !0),
          w.add(n));
      }
    }
  } finally {
    globalThis.__setpieceRaw = !1;
  }
  (j(w, [230, 20, 40]),
    b(w),
    g.add(w),
    w.traverse((e) => {
      e.isMesh && (e.castShadow = !1);
    }));
  let U = xe();
  (U.traverse((e) => {
    e.isMesh && (e.castShadow = !1);
  }),
    U.position.set(r.rhib.x, o, r.rhib.s * (r.hull[0][2] + r.plate + 1.8)),
    g.add(U));
  let W = d
    ? null
    : (() => {
        let e = k(9091),
          n = new t(1, 1, 1);
        v.push(n);
        let r = new l({ color: 2762532, roughness: 0.9, metalness: 0.1 });
        y.push(r);
        let i = new h(n, r, 46);
        return (
          (i.name = `ship-flotsam`),
          (i.frustumCulled = !1),
          {
            mesh: i,
            items: [...Array(46)].map(() => {
              let t = e() * 6.28,
                n = 40 + e() * 160;
              return {
                x: Math.cos(t) * n * 1.4,
                z: Math.sin(t) * n,
                sx: 0.4 + e() * 2.6,
                sy: 0.15 + e() * 0.4,
                sz: 0.3 + e() * 1.4,
                yaw: e() * 6.28,
                ph: e() * 9,
              };
            }),
          }
        );
      })();
  W && g.add(W.mesh);
  let ne = d
      ? []
      : [
          [150, -120, 9],
          [-60, 175, 7],
          [260, 40, 11],
          [-230, -150, 8],
        ].map(([e, t, n]) => ({ x: e, z: t, r: n, t: 0 })),
    G = d ? null : ze(900, !0),
    K = d ? null : ze(700, !1);
  (G && g.add(G.points), K && g.add(K.points));
  let q = r.floods[H]?.p,
    J = !0;
  try {
    J = localStorage.getItem(`salient.shipRoll`) !== `0`;
  } catch {}
  let Y = k(77),
    se = new a(),
    X = new f(),
    le = new m(),
    ue = new C(),
    pe = new C(),
    Z = new C(),
    Q = { spray: 0, ember: 0, mist: 0, oil: 0 },
    _e = 0,
    ve = [2.2, 0, -1.4];
  function ye(e) {
    return J
      ? [
          0.011 * Math.sin(e * 0.57) + 0.004 * Math.sin(e * 1.31 + 1),
          0.0035 * Math.sin(e * 0.43 + 2),
          0.38 * Math.sin(e * 0.69) + 0.15 * Math.sin(e * 1.7),
        ]
      : [0, 0, 0];
  }
  function Pe(
    e,
    t,
    { time: n = _e, water: a = null, naval: s = null, rain: c = 1 } = {},
  ) {
    ((e = Math.min(e || 0, 0.1)), (_e += e));
    let l = n,
      [u, d, f] = ye(l);
    (a?.setMotion?.(u, d, f, 0),
      s && (s.rotation.set(u, 0, d), (s.position.y = f)));
    let p = (e, t) => o + Le(e, t, l) + f - t * Math.sin(u) + e * Math.sin(d);
    if ((I.update(t, $.tune.flood), t.isPerspectiveCamera)) {
      let e =
        (innerHeight * Math.min(devicePixelRatio, 2) * 0.5) /
        Math.tan((t.fov * Math.PI) / 360);
      for (let t of [G, K]) t && (t.points.material.uniforms.uScale.value = e);
    }
    if (z) {
      let e = -55 + 75 * (0.5 + 0.5 * Math.sin(l * 0.11)),
        t = 9 * Math.sin(l * 0.29),
        n = z.f;
      (Z.set(e - n.p[0], i - n.p[1], t - n.p[2]).normalize(),
        I.aim(z.i, Z.toArray()),
        z.cone.quaternion.setFromUnitVectors(L, Z),
        (z.fix.rotation.y = Math.atan2(-Z.z, Z.x)));
    }
    for (let e of V)
      ((e.uniforms.uTime.value = l), (e.uniforms.uRain.value = c));
    if (te) {
      let e = 0.72 + 0.18 * Math.sin(l * 13.1) + 0.1 * Math.sin(l * 29.7 + 1.3);
      I.items[H].c.copy(te).multiplyScalar(e);
    }
    {
      let e = U.position.x,
        t = U.position.z,
        n = p(e - 3, t),
        r = p(e + 3, t),
        i = p(e, t + 1);
      ((U.position.y = (n + r) / 2 - 0.25),
        U.rotation.set((i - (n + r) / 2) * 0.4, 0, Math.atan2(r - n, 6)));
    }
    if (
      (W &&
        (W.items.forEach((e, t) => {
          let n = p(e.x, e.z);
          (le.set(
            Math.sin(l * 0.7 + e.ph) * 0.12,
            e.yaw,
            Math.sin(l * 0.5 + e.ph) * 0.1,
          ),
            X.setFromEuler(le),
            se.compose(
              ue.set(e.x, n - e.sy * 0.35, e.z),
              X,
              pe.set(e.sx, e.sy, e.sz),
            ),
            W.mesh.setMatrixAt(t, se));
        }),
        (W.mesh.instanceMatrix.needsUpdate = !0)),
      G)
    ) {
      for (Q.ember += e * 26; q && Q.ember >= 1;)
        (--Q.ember,
          G.spawn({
            p: [
              q[0] + (Y() - 0.5) * 9,
              q[1] - 0.4 + Y(),
              q[2] + (Y() - 0.5) * 1.6,
            ],
            v: [(Y() - 0.5) * 1.5, 2 + Y() * 3, (Y() - 0.5) * 1.5],
            life: 1.6 + Y() * 2.2,
            s0: 0.07,
            s1: 0.03,
            c: [1, 0.45 + Y() * 0.25, 0.12],
            a: 1,
            drag: 0.6,
            flick: 1,
          }));
      for (Q.oil += e * 30; Q.oil >= 1;) {
        --Q.oil;
        let e = ne[Math.floor(Y() * ne.length)],
          t = Y() * 6.28,
          n = Math.sqrt(Y()) * e.r,
          r = e.x + Math.cos(t) * n,
          i = e.z + Math.sin(t) * n;
        G.spawn({
          p: [r, p(r, i) + 0.3, i],
          v: [0, 1.5 + Y() * 2.5, 0],
          life: 0.7 + Y() * 0.8,
          s0: 2.2 + Y() * 2,
          s1: 0.8,
          c: [1, 0.42 + Y() * 0.2, 0.1],
          a: 0.55,
          drag: 0.4,
        });
      }
    }
    if (K) {
      for (Q.spray += e * 9; Q.spray >= 1;) {
        --Q.spray;
        let e = Y() < 0.25,
          t = Y() < 0.5 ? -1 : 1,
          n = r.hull[Math.floor(Y() * r.hull.length)],
          i = e ? 110 + Y() * 6 : n[0] + Y() * (n[1] - n[0]),
          a = e ? (Y() - 0.5) * 8 : t * (n[2] + r.plate + 0.3),
          s = p(i, a) - o - f;
        if (s < (e ? 0.9 : 1.15)) continue;
        let c = e && s > 1.5,
          l = c ? 3.2 : 1;
        for (let n = 0; n < (c ? 26 : 10); n++)
          K.spawn({
            p: [i + (Y() - 0.5) * 3, p(i, a) + 0.3, a],
            v: [
              (Y() - 0.4) * 2 + (e ? -2 : 0),
              (3 + Y() * 4) * l,
              e ? (Y() - 0.5) * 3 : t * (1 + Y() * 2),
            ],
            life: 0.8 + Y() * 0.7,
            s0: 0.25,
            s1: 0.9 * Math.sqrt(l),
            c: [0.55, 0.6, 0.62],
            a: 0.32,
            g: 9.8,
            drag: 0.15,
          });
      }
      for (Q.mist += e * ($.tune.mist ?? 0); Q.mist >= 1;) {
        --Q.mist;
        let e = -110 + Y() * 225;
        K.spawn({
          p: [e, i + 1.5 + Y() * 7, -26 - Y() * 8],
          v: [ve[0] * 0.4, 0.05, 3.2 + Y()],
          life: 16 + Y() * 8,
          s0: 10,
          s1: 18,
          c: [0.2, 0.23, 0.26],
          a: 0.05,
        });
      }
      for (let t of ne)
        ((t.t -= e),
          t.t <= 0 &&
            ((t.t = 0.35 + Y() * 0.3),
            K.spawn({
              p: [t.x + (Y() - 0.5) * t.r, o + 2, t.z + (Y() - 0.5) * t.r],
              v: [0, 3 + Y() * 2, 0],
              life: 12 + Y() * 6,
              s0: 8,
              s1: 30,
              c: [0.06, 0.06, 0.06],
              a: 0.5,
              drag: 0.08,
            })));
    }
    (G?.update(e, ve), K?.update(e, ve));
  }
  function Fe(e = g) {
    e.traverse((e) => {
      if (e.isMesh)
        for (let t of [e.material].flat())
          t &&
            !/ship-beam|ship-fx/.test(e.name) &&
            (I.patch(t), n.envCaster?.(t));
    });
  }
  Fe(g);
  let $ = {
    root: g,
    flood: I,
    patchAll: Fe,
    update: Pe,
    waveHeight: Le,
    counts: {
      containers: r.containers.length,
      floods: r.floods.length,
      beams: R.length + +!!z,
      liveries: ee.length,
    },
    tune: { flood: 1, mist: 0 },
    dispose() {
      for (let e of v) e.dispose();
      for (let e of y) e.dispose();
      (G?.dispose(), K?.dispose(), g.removeFromParent());
    },
  };
  return ((g.userData.dressing = $), $);
}
export { Be as createShipDressing, Le as waveHeight };
//# sourceMappingURL=ship-dressing-y_vqKCl7.js.map
