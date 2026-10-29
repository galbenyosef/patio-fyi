/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  Bt as e,
  Dn as t,
  F as n,
  Fn as r,
  Gt as i,
  H as a,
  Hn as o,
  I as s,
  L as c,
  Un as l,
  W as u,
  at as d,
  bn as f,
  cn as p,
  dt as m,
  gt as h,
  in as g,
  jt as _,
  nn as v,
  nt as y,
  q as b,
  v as x,
  vt as S,
  zt as C,
} from "./graphics-quality-CrL3qbU3.js";
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
} from "./kit-C0y268hi.js";
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
var te = (e, t) => `#` + new u(e).multiplyScalar(t).getHexString();
function V(e, t, [n, r, i, a], o, { streaks: s = !0 } = {}) {
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
function ne(e, t, n) {
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
      V(e, r, z.side, t.reefer ? 0.45 : 0.6 + r() * 0.6));
  }
  {
    let [i, a, s, c] = z.door,
      l = s - i,
      u = c - a;
    ((e.fillStyle = te(o, 0.92)),
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
      V(e, r, z.door, 0.9));
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
    V(e, r, z.front, 0.8);
  }
  {
    let [t, n, i, a] = z.roof;
    ((e.fillStyle = te(o, 0.78)), e.fillRect(t, n, i - t, a - n));
    for (let o = 0; o < 90; o++)
      ((e.fillStyle = `rgba(90,50,24,${r() * 0.5})`),
        e.beginPath(),
        e.arc(t + r() * (i - t), n + r() * (a - n), 1 + r() * 5, 0, 6.283),
        e.fill());
  }
  {
    let [t, n, i, a] = z.frame;
    ((e.fillStyle = te(o, 0.72)),
      e.fillRect(t, n, i - t, a - n),
      V(e, r, z.frame, 1.2, { streaks: !1 }));
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
var H = null;
function U() {
  return (
    H ||
    ((H = O(L, L, (e) => ee.forEach((t, n) => ne(e, t, n)))),
    (H.anisotropy = 8),
    (H.generateMipmaps = !0),
    (H.minFilter = _),
    H)
  );
}
function re() {
  let e = [],
    t = [],
    n = [],
    r = (e, t, n) => {
      let [r, i, a, o] = z[e],
        s = r + 2 + t * (a - r - 4),
        c = i + 2 + (1 - n) * (o - i - 4);
      return [s / I, 1 - c / I];
    };
  function i(i, a, o, s, c, l, u) {
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
  function a(e, t, n, r, a, o, s) {
    let c = e - r / 2,
      l = e + r / 2,
      u = t,
      d = t + a,
      f = n - o / 2,
      p = n + o / 2,
      m = [
        [0, 0],
        [1, 0],
        [1, 1],
        [0, 1],
      ];
    (i([l, u, p], [l, u, f], [l, d, f], [l, d, p], [1, 0, 0], s, m),
      i([c, u, f], [c, u, p], [c, d, p], [c, d, f], [-1, 0, 0], s, m),
      i([c, d, p], [l, d, p], [l, d, f], [c, d, f], [0, 1, 0], s, m),
      i([c, u, f], [l, u, f], [l, u, p], [c, u, p], [0, -1, 0], s, m),
      i([c, u, p], [l, u, p], [l, d, p], [c, d, p], [0, 0, 1], s, m),
      i([l, u, f], [c, u, f], [c, d, f], [l, d, f], [0, 0, -1], s, m));
  }
  function o() {
    let r = new c();
    return (
      r.setAttribute(`position`, new d(e, 3)),
      r.setAttribute(`normal`, new d(t, 3)),
      r.setAttribute(`uv`, new d(n, 2)),
      r.computeBoundingBox(),
      r.computeBoundingSphere(),
      r
    );
  }
  return { quad: i, boxPart: a, geometry: o };
}
function W(
  e,
  {
    along: t,
    a0: n,
    a1: r,
    y0: i,
    y1: a,
    plane: s,
    out: c,
    pitch: l,
    depth: u,
    k: d,
    uMap: f,
  },
) {
  let p = Math.max(1, Math.round((r - n) / l)),
    m = (r - n) / p,
    h = [
      [0, 0.36, 0],
      [0.36, 0.5, 1],
      [0.5, 0.86, 2],
      [0.86, 1, 3],
    ],
    g = (e, n, r) => (t === `x` ? [e, n, s - c * r] : [s - c * r, n, e]);
  for (let r = 0; r < p; r++)
    for (let [s, l, p] of h) {
      let h = n + (r + s) * m,
        _ = n + (r + l) * m,
        v = p === 0 || p === 1 ? 0 : u,
        y = p === 0 ? 0 : p === 1 || p === 2 ? u : 0,
        b =
          t === `x`
            ? new o(_ - h, 0, -c * (y - v))
            : new o(-c * (y - v), 0, _ - h),
        x = new o(0, 1, 0).cross(b).normalize();
      (t === `x` ? x.z : x.x) * c < 0 && x.negate();
      let S = f(h),
        C = f(_),
        w = i / F.H,
        T = a / F.H,
        E = g(h, i, v),
        D = g(_, i, y),
        O = g(_, a, y),
        k = g(h, a, v);
      (t === `x`) == c < 0
        ? e.quad(D, E, k, O, x.toArray(), d, [
            [C, w],
            [S, w],
            [S, T],
            [C, T],
          ])
        : e.quad(E, D, O, k, x.toArray(), d, [
            [S, w],
            [C, w],
            [C, T],
            [S, T],
          ]);
    }
}
var G = new Map();
function K(e = `dry40`) {
  if (G.has(e)) return G.get(e);
  let t = re(),
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
    W(t, {
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
      : W(t, {
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
  return (G.set(e, u), u);
}
function ie() {
  let e = new i({ map: U(), roughness: 0.62, metalness: 0.28 });
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
function ae(e, t = ie()) {
  let n = new m();
  n.name = `ship-containers`;
  let r = new Map();
  for (let t of e) (r.has(t.kind) || r.set(t.kind, []), r.get(t.kind).push(t));
  let i = new C(),
    a = new p(),
    s = new o(),
    c = new o(1, 1, 1),
    l = new o(0, 1, 0),
    d = new u();
  for (let [e, o] of r) {
    let r = K(e).clone(),
      u = new Float32Array(o.length * 2);
    (o.forEach((e, t) => {
      ((u[t * 2] = e.liv % R), (u[t * 2 + 1] = Math.floor(e.liv / R)));
    }),
      r.setAttribute(`aLiv`, new h(u, 2)));
    let f = new S(r, t, o.length);
    ((f.name = `ship-containers-${e}`),
      o.forEach((e, t) => {
        (a.setFromAxisAngle(l, e.ry ?? 0),
          s.set(e.x, e.y, e.z),
          i.compose(s, a, c),
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
function oe(e, t) {
  let r = new m();
  r.name = `ship-lashing`;
  let i = new b(0.014, 0.014, 1, 5).translate(0, 0.5, 0),
    a = P(10133926, 0.55, 0.7),
    s = new b(0.04, 0.04, 0.42, 6).translate(0, 0.21, 0),
    c = P(11770411, 0.5, 0.5),
    l = new n(0.16, 0.06, 0.12),
    u = P(8357515, 0.6, 0.6),
    d = e.length,
    f = new S(i, a, d),
    h = new S(s, c, d),
    g = new S(l, u, Math.max(1, t.length)),
    _ = new C(),
    v = new p(),
    y = new o(),
    x = new o(),
    w = new o(),
    T = new o(0, 1, 0),
    E = new o();
  (e.forEach((e, t) => {
    (y.set(...e.a), x.set(...e.b), w.subVectors(x, y));
    let n = w.length();
    (w.normalize(),
      v.setFromUnitVectors(T, w),
      _.compose(y, v, E.set(1, n, 1)),
      f.setMatrixAt(t, _),
      _.compose(y, v, E.set(1, 1, 1)),
      h.setMatrixAt(t, _));
  }),
    t.forEach(([e, t, n], r) => {
      (_.makeTranslation(e, t, n), g.setMatrixAt(r, _));
    }),
    t.length || (g.count = 0));
  for (let e of [f, h, g])
    ((e.instanceMatrix.needsUpdate = !0),
      (e.castShadow = !1),
      (e.receiveShadow = !0),
      e.computeBoundingSphere(),
      r.add(e));
  return r;
}
var q = null;
function se() {
  return (
    q ||
    ((q = {
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
    q)
  );
}
var J = new Map();
function ce(
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
  if (J.has(o)) return J.get(o);
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
  return (J.set(o, s), s);
}
var le = new Map();
function Y(e, t) {
  let n = e + JSON.stringify(t ?? {});
  return (le.has(n) || le.set(n, ue(e, t)), le.get(n));
}
function ue(e, t) {
  return new i({
    map: ce(e, t),
    transparent: !0,
    roughness: 0.75,
    depthWrite: !1,
    polygonOffset: !0,
    polygonOffsetFactor: -2,
    polygonOffsetUnits: -2,
  });
}
var de = new Map();
function fe(e, t) {
  let n = new m(),
    r = `${e}x${t}`;
  if (!de.has(r)) {
    let n = se().hatch.clone();
    ((n.needsUpdate = !0),
      n.repeat.set(e / 4, t / 4),
      de.set(r, new i({ map: n, roughness: 0.7, metalness: 0.25 })));
  }
  let a = de.get(r),
    o = P(5907486, 0.7, 0.3),
    s = P(2763822, 0.6, 0.5);
  N(n, e, 0.06, t, a, 0, 0, 0);
  for (let r of [-1, 1])
    (N(n, e, 0.06, 0.1, o, 0, 0.06, r * (t / 2 - 0.05)),
      N(n, 0.1, 0.06, t, o, r * (e / 2 - 0.05), 0.06, 0));
  for (let r = -e / 2 + 1.5; r < e / 2 - 1; r += 3)
    N(n, 0.08, 0.05, t - 0.4, o, r, 0.06, 0);
  for (let r = -e / 2 + 1; r < e / 2; r += 2.2)
    for (let e of [-1, 1])
      N(n, 0.14, 0.12, 0.14, s, r, -0.05, e * (t / 2 + 0.06));
  return n;
}
function pe({ tilt: e = 0.6, color: t = 16760944 } = {}) {
  let n = new m(),
    r = P(2895924, 0.6, 0.5),
    i = T(t, 2.2),
    a = new m();
  ((a.position.y = 0.35),
    (a.rotation.z = -e),
    n.add(a),
    N(n, 0.08, 0.35, 0.5, r, -0.12, 0, 0),
    N(a, 0.32, 0.36, 0.5, r, 0, -0.18, 0),
    N(a, 0.03, 0.3, 0.42, i, 0.17, -0.15, 0));
  for (let e of [-1, 1]) N(a, 0.04, 0.04, 0.04, r, -0.05, -0.02, e * 0.27);
  return ((n.userData.lens = i), n);
}
var me = `
  varying float vAlong; varying vec3 vW; varying vec3 vN; varying vec2 vUv2;
  void main(){
    vAlong = 1.0 - uv.y; vUv2 = uv;
    vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * viewMatrix * w;
  }`,
  X = `
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
function he(t = 14, n = 0.42, r = 16760944, i = 0.06) {
  let a = new b(0.12, Math.tan(n) * t, t, 24, 1, !0).translate(0, -t / 2, 0),
    o = new f({
      vertexShader: me,
      fragmentShader: X,
      transparent: !0,
      depthWrite: !1,
      blending: 2,
      side: 2,
      fog: !1,
      uniforms: {
        uColor: { value: new u(r) },
        uTime: { value: 0 },
        uGain: { value: i },
        uRain: { value: 1 },
        uFar: { value: 170 },
      },
    }),
    s = new e(a, o);
  return (
    (s.renderOrder = 3),
    (s.frustumCulled = !0),
    (s.castShadow = !1),
    (s.name = `ship-beam`),
    s
  );
}
function ge(t) {
  let n = t.map((e) => {
      let t = new b(0.12, Math.tan(e.half) * e.len, e.len, 24, 1, !0).translate(
        0,
        -e.len / 2,
        0,
      );
      (t.applyQuaternion(
        new p().setFromUnitVectors(new o(0, -1, 0), new o(...e.d).normalize()),
      ),
        t.translate(...e.p));
      let n = t.attributes.position.count,
        r = new u(e.color).multiplyScalar(e.gain),
        i = new Float32Array(n * 3);
      for (let e = 0; e < n; e++) i.set([r.r, r.g, r.b], e * 3);
      return (t.setAttribute(`bcol`, new s(i, 3)), t);
    }),
    r = x(n, !1);
  n.forEach((e) => e.dispose());
  let i = new f({
      vertexShader: me
        .replace(
          `varying float vAlong;`,
          `attribute vec3 bcol; varying vec3 vCol; varying float vAlong;`,
        )
        .replace(`vAlong = 1.0 - uv.y;`, `vAlong = 1.0 - uv.y; vCol = bcol;`),
      fragmentShader: X.replace(
        `varying float vAlong;`,
        `varying vec3 vCol; varying float vAlong;`,
      ).replace(`uColor * uGain`, `vCol`),
      transparent: !0,
      depthWrite: !1,
      blending: 2,
      side: 2,
      fog: !1,
      uniforms: {
        uColor: { value: new u() },
        uTime: { value: 0 },
        uGain: { value: 1 },
        uRain: { value: 1 },
        uFar: { value: 170 },
      },
    }),
    a = new e(r, i);
  return ((a.renderOrder = 3), (a.name = `ship-beam`), (a.castShadow = !1), a);
}
function _e(e) {
  let t = { value: [...Array(12)].map(() => new l()) },
    n = { value: [...Array(12)].map(() => new l()) },
    r = { value: [...Array(12)].map(() => new o()) },
    i = { value: 1 },
    a = e.map((e) => ({
      ...e,
      dv: new o(...e.d).normalize(),
      c: new u(e.color).multiplyScalar(e.gain ?? 1),
    })),
    s = new Set();
  function c(e) {
    if (
      !e ||
      s.has(e) ||
      !(e.isMeshStandardMaterial || e.isMeshPhysicalMaterial)
    )
      return;
    s.add(e);
    let a = e.onBeforeCompile,
      o = e.customProgramCacheKey?.bind(e);
    ((e.onBeforeCompile = (o, s) => {
      (a?.call(e, o, s),
        (o.uniforms.uFloodP = t),
        (o.uniforms.uFloodD = n),
        (o.uniforms.uFloodC = r),
        (o.uniforms.uFloodK = i),
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
  let d = new o(),
    f = a.map((e, t) => t);
  function p(e, s = 1) {
    (e.getWorldPosition(d),
      (i.value = s),
      f.sort(
        (e, t) =>
          d.distanceToSquared(new o(...a[e].p)) -
          d.distanceToSquared(new o(...a[t].p)),
      ));
    for (let e = 0; e < 12; e++) {
      let i = a[f[e]];
      if (!i) {
        t.value[e].set(0, 0, 0, 0);
        continue;
      }
      (t.value[e].set(i.p[0], i.p[1], i.p[2], i.range ?? 22),
        n.value[e].set(i.dv.x, i.dv.y, i.dv.z, Math.cos(i.half ?? 0.5)),
        r.value[e].set(i.c.r, i.c.g, i.c.b));
    }
  }
  function m(e, t) {
    (a[e].dv.set(...t).normalize(), (a[e].d = t));
  }
  return { patch: c, update: p, aim: m, items: a, count: () => s.size };
}
var Z = 14277074,
  ve = 14704668,
  ye = 5593436,
  be = 12167034;
function xe({ hang: n = 3, name: r = `KESTREL STAR` } = {}) {
  let i = new m(),
    a = P(ve, 0.55, 0.05),
    o = P(2238508, 0.4, 0.2),
    s = P(Z, 0.6, 0.2),
    c = P(10133668, 0.5, 0.8),
    l = new m();
  ((l.position.y = n), i.add(l));
  let u = new e(new t(1, 20, 10, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), a);
  (u.scale.set(3.8, 1.1, 1.2),
    (u.position.y = 0.95),
    (u.castShadow = !0),
    l.add(u),
    M(l, 7, 0.5, 2.36, 0.2, a, 0, 0.75, 0),
    M(l, 6.2, 1.05, 2.1, 0.45, a, -0.2, 1.1, 0),
    N(l, 4.4, 0.22, 2.16, o, -0.2, 1.6, 0),
    M(l, 1.3, 0.55, 1, 0.2, a, 1.9, 2, 0),
    N(l, 1, 0.22, 1.04, o, 1.9, 2.2, 0),
    N(l, 7.1, 0.08, 2.42, s, 0, 0.92, 0));
  for (let t of [-1, 1]) {
    let n = new e(
      new v(3.2, 0.3),
      Y(r, {
        w: 1024,
        h: 96,
        ink: `#111`,
        font: `800 72px Arial, sans-serif`,
        alpha: 0.9,
      }),
    );
    (n.position.set(0, 0.7, t * 1.195),
      (n.rotation.y = t > 0 ? 0 : Math.PI),
      l.add(n));
  }
  for (let e of [-1, 1])
    (A(i, [e * 3, 0, -1.85], [e * 3, n + 1.6, -1.85], 0.28, 0.28, s),
      A(i, [e * 3, n + 1.6, -1.85], [e * 3, n + 2.6, -0.2], 0.24, 0.24, s),
      D(i, [e * 3, n + 2.55, -0.2], [e * 3, n + 2.1, 0], 0.02, c));
  return j(i, [7.6, n + 2.8, 4]);
}
function Se() {
  let t = new m(),
    n = P(2830124, 0.85, 0),
    i = P(4869964, 0.6, 0.1),
    a = P(1382426, 0.5, 0.3),
    o = P(2106401, 0.9, 0);
  M(t, 9.6, 0.7, 2.6, 0.3, i, 0, 0, 0);
  for (let r of [-1, 1]) {
    let i = new e(new b(0.33, 0.33, 9.4, 12), n);
    ((i.rotation.z = Math.PI / 2),
      i.position.set(-0.2, 0.75, r * 1.15),
      t.add(i));
  }
  let s = new e(new r(1.15, 0.33, 10, 16, Math.PI), n);
  (s.rotation.set(Math.PI / 2, 0, -Math.PI / 2),
    s.position.set(4.5, 0.75, 0),
    t.add(s),
    N(t, 1.2, 1, 1.2, a, -0.8, 0.6, 0),
    N(t, 0.05, 0.5, 1.1, P(5924976, 0.1, 0.3), -0.25, 1.6, 0));
  for (let e of [-2.4, 0.8, 2.2]) N(t, 0.6, 0.5, 1.5, o, e, 0.6, 0);
  for (let e of [-1, 1]) N(t, 0.7, 0.9, 0.5, a, -4.6, 0.4, e * 0.5);
  return (
    D(t, [-2.8, 1, 0], [-2.8, 3, 0], 0.04, a),
    N(t, 0.5, 0.15, 0.5, a, -2.8, 3, 0),
    j(t, [10, 3.2, 3])
  );
}
function Ce({
  drop: e = 12,
  out: t = 7,
  rail: n = 1.18,
  ropeOnly: r = !1,
} = {}) {
  let i = new m(),
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
function we(t = 11) {
  let n = new m(),
    i = P(3091494, 0.95, 0);
  D(n, [0, t, 0], [0.15, 0.25, 0.1], 0.028, i, 6);
  for (let t = 0; t < 4; t++) {
    let a = new e(new r(0.42 - t * 0.04, 0.03, 5, 18), i);
    ((a.rotation.x = Math.PI / 2),
      a.position.set(0.35, 0.04 + t * 0.05, 0.25),
      n.add(a));
  }
  return j(n, [1, t, 1]);
}
function Te(t = 0.65, n = 6) {
  let i = new m(),
    a = P(be, 0.95, 0);
  for (let o = 0; o < n; o++) {
    let n = new e(new r(t - (o % 3) * 0.1, 0.055, 6, 22), a);
    ((n.rotation.x = Math.PI / 2),
      (n.position.y = 0.05 + Math.floor(o / 3) * 0.1),
      i.add(n));
  }
  return j(i, [t * 2, 0.4, t * 2]);
}
function Ee() {
  let t = new m(),
    n = P(1843236, 0.6, 0.5);
  N(t, 1.1, 0.12, 0.6, n, 0, 0, 0);
  for (let r of [-0.35, 0.35]) {
    let i = new e(new b(0.15, 0.15, 0.5, 12), n);
    (i.position.set(r, 0.37, 0), t.add(i));
  }
  return j(t, [1.1, 0.6, 0.6]);
}
function De(t = 5, n = 0.36) {
  let i = new m(),
    a = P(2829614, 0.7, 0.6),
    o = Math.floor(t / n);
  for (let t = 0; t < o; t++) {
    let o = new e(new r(n * 0.5, 0.045, 5, 10), a);
    (o.scale.set(1, 0.6, 1),
      o.position.set(t * n, 0.06, 0),
      (o.rotation.x = t % 2 ? Math.PI / 2 : 0),
      t % 2 || (o.rotation.set(Math.PI / 2, 0, 0), o.rotateX(Math.PI / 2)),
      i.add(o));
  }
  let s = new e(new r(0.42, 0.12, 8, 18), P(1843236, 0.6, 0.5));
  return (
    (s.rotation.x = Math.PI / 2),
    s.position.set(t + 0.3, 0.06, 0),
    i.add(s),
    j(i, [t + 1, 0.3, 1])
  );
}
function Oe() {
  let t = new m(),
    n = P(ve, 0.7, 0),
    i = P(15263454, 0.7, 0),
    a = P(Z, 0.6, 0.3);
  N(t, 0.08, 0.9, 0.05, a, 0, 0, -0.06);
  let o = new e(new r(0.3, 0.07, 8, 20), n);
  (o.position.set(0, 0.62, 0), t.add(o));
  for (let n = 0; n < 4; n++) {
    let a = new e(new r(0.3, 0.075, 8, 3, 0.35), i);
    ((a.rotation.z = (n * Math.PI) / 2 + 0.6),
      a.position.copy(o.position),
      t.add(a));
  }
  return j(t, [0.8, 1, 0.3]);
}
function ke() {
  let t = new m(),
    n = P(10495516, 0.5, 0.3),
    r = P(ye, 0.5, 0.6);
  (w(t, 0.12, 0.14, 1.2, n, 0, 0, 0, 10), N(t, 0.32, 0.25, 0.32, n, 0, 1.2, 0));
  let i = new e(new b(0.06, 0.1, 0.9, 10), n);
  return (
    (i.rotation.z = -Math.PI / 2 + 0.25),
    i.position.set(0.45, 1.45, 0),
    t.add(i),
    N(t, 0.08, 0.35, 0.08, r, -0.18, 1.25, 0),
    j(t, [1.2, 1.7, 0.4])
  );
}
function Ae(e = 3, t = 2) {
  let n = new m(),
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
function je(t = 6) {
  let r = new m(),
    i = P(3817542, 0.6, 0.3),
    a = P(2238251, 0.5, 0.2),
    o = k(t * 77);
  N(r, 0.8, 0.95, t, i, 0, 0, 0);
  let s = new e(new n(0.85, 0.08, t), a);
  (s.position.set(-0.05, 1, 0), (s.rotation.z = 0.2), r.add(s));
  for (let e = -t / 2 + 0.6; e < t / 2 - 0.4; e += 0.9) {
    let t = [4169983, 4587402, 16756800, 4184319][Math.floor(o() * 4)],
      n = T(t, 0.45);
    (N(r, 0.08, 0.42, 0.62, a, 0.25, 1.05, e),
      N(r, 0.02, 0.34, 0.54, n, 0.2, 1.09, e));
  }
  return j(r, [0.9, 1.5, t]);
}
function Me() {
  let t = new m(),
    n = P(3817542, 0.6, 0.3),
    i = P(1908513, 0.5, 0.4);
  N(t, 0.5, 1, 0.6, n, 0, 0, 0);
  let a = new e(new r(0.2, 0.025, 6, 18), i);
  return (
    (a.rotation.y = Math.PI / 2),
    a.position.set(-0.3, 1, 0),
    t.add(a),
    N(t, 0.04, 0.2, 0.3, T(4587402, 1.2), -0.26, 1.05, 0),
    j(t, [0.6, 1.2, 0.6])
  );
}
function Ne() {
  let t = new m(),
    n = P(13684936, 0.6, 0.4),
    r = P(1447962, 0.95, 0),
    o = new m();
  (o.rotation.set(-Math.PI / 2 + 0.08, 0.4, 0),
    o.position.set(0, 0.09, 0),
    t.add(o),
    N(o, 0.9, 2, 0.06, n, 0, -1, 0),
    N(o, 0.3, 0.06, 0.08, r, 0.25, -0.1, 0.05));
  let s = new e(
    new a(1.4, 18),
    new i({
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
    (s.rotation.x = -Math.PI / 2),
    s.position.set(-0.6, 0.012, 0.6),
    s.scale.set(1, 0.7, 1),
    t.add(s),
    j(t, [2, 0.3, 2])
  );
}
function Pe({ run: t = 13, rise: n = 4.5, drop: r = 3.4, a: i = 3.2 } = {}) {
  let a = new m(),
    o = P(11769131, 0.55, 0.35),
    s = P(2763822, 0.5, 0.6),
    c = P(9410202, 0.4, 0.8),
    l = (e, r, i) => [r, n * e + i, t * e],
    u = 0.4,
    d = 0.4;
  for (let e of [-0.4, u])
    for (let t of [-0.4, d])
      A(a, l(0, e * 1.4, t), l(1, e * 0.6, t * 0.6), 0.1, 0.1, o);
  for (let e = 0; e < 10; e++) {
    let t = e / 10,
      n = (e + 1) / 10,
      r = 1.4 - 0.8 * t,
      i = 1.4 - 0.8 * n;
    (D(a, l(t, -0.4 * r, -0.4), l(n, u * i, -0.4), 0.035, o, 4),
      D(a, l(t, -0.4 * r, d), l(n, u * i, d), 0.035, o, 4),
      D(a, l(t, -0.4 * r, -0.4), l(n, -0.4 * i, d), 0.035, o, 4),
      D(a, l(t, u * r, -0.4), l(n, u * i, d), 0.035, o, 4));
  }
  for (let e of [-1, 1])
    A(a, [e * 1.2, -0.4, -1.2], [0, i, -0.4], 0.16, 0.16, o);
  for (let e of [-1, 1]) D(a, [e * 0.1, i, -0.4], [e * 0.2, n, t], 0.02, c);
  let f = new e(new b(0.35, 0.35, 0.3, 14), s);
  ((f.rotation.z = Math.PI / 2), f.position.set(0, n + 0.1, t + 0.1), a.add(f));
  for (let e of [-1, 1])
    D(a, [e * 0.15, n, t + 0.2], [e * 0.15, n - r + 0.6, t + 0.2], 0.018, c);
  return (
    N(a, 0.45, 0.6, 0.35, P(14196768, 0.5, 0.4), 0, n - r, t + 0.2),
    j(a, [3, n + 4, t + 2])
  );
}
var Fe = 11769131,
  Ie = 3625018,
  Q = 1843236,
  Le = 10495516;
function $(t, n, r, i, a, o, s, c = `z`, l = 16) {
  let u = new e(new b(n, n, r, l), i);
  return (
    u.position.set(a, o, s),
    c === `z` ? (u.rotation.x = Math.PI / 2) : (u.rotation.z = Math.PI / 2),
    t.add(u),
    u
  );
}
var Re = null;
function ze() {
  return (Re ??= new i({
    roughness: 0.6,
    metalness: 0.2,
    map: O(
      256,
      64,
      (e) => {
        ((e.fillStyle = `#c9a222`),
          e.fillRect(0, 0, 256, 64),
          (e.fillStyle = `#16181a`));
        for (let t = -64; t < 256; t += 48)
          (e.beginPath(),
            e.moveTo(t, 64),
            e.lineTo(t + 24, 64),
            e.lineTo(t + 88, 0),
            e.lineTo(t + 64, 0),
            e.fill());
      },
      !0,
    ),
  }));
}
function Be(e, t, n, r) {
  for (let i = 0; i < t.length - 1; i++) {
    let [a, o] = t[i],
      [s, c] = t[i + 1],
      l = Math.hypot(s - a, c - o),
      u = Math.max(1, Math.round(l / 1.2));
    for (let t = 0; t <= u; t++) {
      let i = t / u;
      D(
        e,
        [a + (s - a) * i, n, o + (c - o) * i],
        [a + (s - a) * i, n + 1, o + (c - o) * i],
        0.025,
        r,
        5,
      );
    }
    for (let t of [0.5, 1]) D(e, [a, n + t, o], [s, n + t, c], 0.022, r, 5);
  }
}
function Ve({ s: t = 1 } = {}) {
  let n = new m(),
    r = P(Fe, 0.55, 0.35),
    i = P(2763822, 0.5, 0.6),
    a = P(Q, 0.6, 0.4),
    o = P(13149736, 0.5, 0.4),
    s = P(857112, 0.05, 0.6, { emissive: 3814436, emissiveIntensity: 0.5 });
  (M(n, 3.16, 6, 3.12, 0.2, r, 0, 0, 0),
    N(n, 3.4, 0.16, 3.36, i, 0, 0, 0),
    N(n, 3.22, 0.5, 3.18, ze(), 0, 0.2, 0));
  for (let [e, t, i, a] of [
    [0.1, 0.06, 0, 1.6],
    [0.1, 0.06, 0, -1.6],
    [0.06, 0.1, 1.62, 0],
    [0.06, 0.1, -1.62, 0],
  ])
    for (let o of [-0.9, 0.9])
      N(n, e, 5.1, t, r, i + (a ? o : 0), 0.75, a + (i ? o : 0));
  (N(n, 0.04, 1.9, 0.82, i, 1.6, 0.75, 0),
    N(n, 0.03, 0.06, 0.2, a, 1.63, 1.7, 0.25));
  for (let e = 1; e < 5.6; e += 0.3) N(n, 0.05, 0.03, 0.5, a, -1.64, e, 0);
  (w(n, 1.95, 1.95, 0.4, i, 0, 5.6, 0, 28),
    w(n, 2.35, 2.35, 0.1, a, 0, 5.98, 0, 28));
  for (let e = 0; e < 16; e++) {
    let t = (e / 16) * Math.PI * 2;
    N(
      n,
      0.08,
      0.1,
      0.08,
      P(9080722, 0.4, 0.8),
      Math.cos(t) * 2.05,
      5.92,
      Math.sin(t) * 2.05,
    );
  }
  M(n, 5, 3.2, 5, 0.14, r, 0, 6.05, 0);
  for (let e of [-1, 1])
    for (let t = 0; t < 6; t++)
      N(n, 1.7, 0.05, 0.05, i, -1.2, 6.6 + t * 0.16, e * 2.52);
  (N(n, 0.05, 1.1, 1.9, s, 2.52, 7.4, t * 1.2),
    N(n, 0.08, 0.08, 2, a, 2.53, 8.5, t * 1.2),
    N(n, 0.08, 0.08, 2, a, 2.53, 7.36, t * 1.2));
  for (let e of [-1, 0, 1])
    N(n, 0.08, 1.2, 0.07, a, 2.53, 7.36, t * 1.2 + e * 0.95);
  (N(n, 1.3, 0.9, 0.05, s, 1.6, 7.55, t * 2.52),
    N(n, 1.4, 0.07, 0.07, a, 1.6, 8.45, t * 2.53),
    D(n, [2.56, 7.5, t * 0.6], [2.56, 8.3, t * 0.9], 0.012, a, 4),
    N(n, 0.05, 0.12, 2.4, o, 2.53, 6.15, 0),
    M(n, 5.2, 0.25, 5.2, 0.06, a, 0, 9.2, 0),
    Be(
      n,
      [
        [-2.45, -2.45],
        [2.45, -2.45],
        [2.45, 2.45],
        [-2.45, 2.45],
        [-2.45, -2.45],
      ],
      9.45,
      o,
    ),
    w(n, 0.14, 0.14, 1.3, i, -1.6, 9.45, -t * 1.6, 10),
    N(n, 0.4, 0.05, 0.4, i, -1.6, 10.8, -t * 1.6));
  let c = new e(
    new v(2.6, 0.5),
    Y(`SWL 40 t`, {
      w: 512,
      h: 96,
      ink: `#16181a`,
      font: `800 76px Arial, sans-serif`,
      alpha: 0.9,
    }),
  );
  return (
    c.position.set(-2.53, 8.4, 0),
    (c.rotation.y = -Math.PI / 2),
    n.add(c),
    (c.userData.keep = !0),
    j(n, [5.2, 11, 5.2])
  );
}
function He() {
  let e = new m(),
    t = P(Ie, 0.6, 0.3),
    n = P(1974820, 0.55, 0.5),
    r = P(2896438, 0.5, 0.6);
  (N(e, 2.4, 0.12, 0.9, r, 0, 0, 0),
    M(e, 2.28, 1.1, 0.82, 0.06, t, 0, 0.12, 0));
  for (let [t, n] of [
    [-1.16, -0.41],
    [1.16, -0.41],
    [-1.16, 0.41],
    [1.16, 0.41],
  ])
    N(e, 0.08, 1.23, 0.08, r, t, 0.12, n);
  for (let t of [-0.41, 0.41]) N(e, 2.4, 0.07, 0.08, r, 0, 1.28, t);
  for (let t of [-1, 1])
    for (let r = 0; r < 7; r++)
      N(e, 0.95, 0.035, 0.03, n, 0.45, 0.36 + r * 0.1, t * 0.42);
  for (let t of [-1, 1])
    (N(e, 0.7, 0.62, 0.02, n, -0.6, 0.34, t * 0.42),
      N(e, 0.05, 0.05, 0.03, P(9080722, 0.4, 0.8), -0.32, 0.6, t * 0.43));
  return (
    N(e, 0.03, 0.4, 0.34, n, -1.15, 0.6, 0),
    N(e, 0.02, 0.08, 0.1, T(16756800, 0.8), -1.17, 0.88, -0.08),
    w(e, 0.05, 0.05, 0.32, n, 0.75, 1.22, 0.2, 8),
    N(e, 0.16, 0.03, 0.16, n, 0.75, 1.54, 0.2),
    w(e, 0.06, 0.06, 0.06, n, -0.4, 1.22, -0.25, 8),
    j(e, [2.4, 1.6, 0.9])
  );
}
function Ue() {
  let t = new m(),
    n = P(Le, 0.5, 0.3),
    r = P(6953492, 0.55, 0.3),
    i = P(9080722, 0.4, 0.8);
  (N(t, 1.1, 0.12, 0.5, P(Q, 0.6, 0.4), 0, 0, 0),
    M(t, 1.06, 1.16, 0.46, 0.04, n, 0, 0.12, 0),
    N(t, 1.1, 0.05, 0.5, n, 0, 1.25, 0),
    N(t, 0.94, 0.98, 0.02, r, 0, 0.2, -0.235),
    N(t, 0.05, 0.16, 0.04, i, 0.36, 0.62, -0.25));
  for (let e of [0.32, 0.98]) N(t, 0.04, 0.12, 0.03, i, -0.46, e, -0.245);
  for (let e = 0; e < 4; e++)
    N(t, 0.5, 0.02, 0.02, P(3804426, 0.7, 0.2), 0, 0.95 + e * 0.05, -0.25);
  let a = new e(
    new v(0.8, 0.22),
    Y(`FIRE HOSE`, {
      w: 512,
      h: 96,
      ink: `#f2efe6`,
      font: `800 70px Arial, sans-serif`,
      alpha: 0.95,
    }),
  );
  return (
    a.position.set(0, 0.6, -0.252),
    (a.rotation.y = Math.PI),
    t.add(a),
    (a.userData.keep = !0),
    j(t, [1.1, 1.3, 0.5])
  );
}
function We() {
  let t = new m(),
    n = P(Ie, 0.6, 0.3),
    i = P(2303786, 0.5, 0.6),
    a = P(8225413, 0.4, 0.8),
    o = P(9054750, 0.6, 0.3);
  N(t, 2.6, 0.22, 2.2, i, 0, 0, 0);
  for (let e of [-0.78, 0.78]) M(t, 1.6, 1, 0.26, 0.06, n, 0.1, 0.22, e);
  ($(t, 0.12, 2.1, a, 0.1, 1.05, 0), $(t, 0.55, 0.5, i, 0.1, 1.05, 0, `z`, 10));
  for (let e = 0; e < 5; e++) {
    let n = (e / 5) * Math.PI * 2;
    N(
      t,
      0.14,
      0.14,
      0.52,
      a,
      0.1 + Math.cos(n) * 0.55,
      1.05 + Math.sin(n) * 0.55 - 0.07,
      0,
    );
  }
  let s = new e(new r(0.6, 0.05, 6, 20, Math.PI * 1.4), o);
  (s.position.set(0.1, 1.05, -0.36), (s.rotation.z = -0.4), t.add(s));
  for (let e of [-1, 1])
    ($(t, 0.3, 0.2, a, 0.1, 1.05, e, `z`, 14),
      $(t, 0.36, 0.04, a, 0.1, 1.05, e + Math.sign(e) * 0.1, `z`, 14));
  M(t, 0.75, 0.85, 0.7, 0.08, n, -0.85, 0.22, 0.55);
  let c = new e(new r(0.22, 0.025, 6, 16), a);
  return (
    c.position.set(-0.85, 0.95, -0.4),
    (c.rotation.y = Math.PI / 2),
    t.add(c),
    D(t, [-0.85, 0.22, -0.4], [-0.85, 0.95, -0.4], 0.03, i, 6),
    j(t, [2.6, 1.7, 2.2])
  );
}
function Ge() {
  let e = new m(),
    t = P(2303786, 0.5, 0.5),
    n = P(14277074, 0.6, 0.2);
  N(e, 0.9, 0.08, 0.5, t, 0, 0, 0);
  for (let r of [-0.24, 0.24])
    (w(e, 0.17, 0.19, 0.84, t, r, 0.08, 0, 14),
      w(e, 0.24, 0.24, 0.07, n, r, 0.92, 0, 14));
  return (N(e, 0.3, 0.12, 0.12, t, 0, 0.5, 0), j(e, [0.9, 1, 0.9]));
}
function Ke() {
  let t = new m(),
    n = P(Ie, 0.6, 0.3),
    i = P(2303786, 0.5, 0.6),
    a = P(be, 0.95, 0),
    o = P(8225413, 0.4, 0.8);
  N(t, 2.2, 0.2, 2, i, 0, 0, 0);
  for (let e of [-0.8, 0.8]) M(t, 1.3, 0.85, 0.22, 0.06, n, 0.2, 0.2, e);
  ($(t, 0.1, 1.9, o, 0.25, 0.75, 0), $(t, 0.4, 1.2, a, 0.25, 0.75, 0, `z`, 18));
  for (let e of [-0.62, 0.62]) $(t, 0.52, 0.05, i, 0.25, 0.75, e, `z`, 18);
  M(t, 0.7, 0.75, 0.9, 0.08, n, -0.7, 0.2, 0);
  let s = new e(new r(0.47, 0.04, 6, 20, Math.PI * 1.3), P(9054750, 0.6, 0.3));
  return (s.position.set(0.25, 0.75, 0.45), t.add(s), j(t, [2.2, 1.3, 2]));
}
function qe() {
  let e = new m(),
    t = P(14277074, 0.6, 0.2),
    n = P(2303786, 0.5, 0.6);
  w(e, 0.26, 0.37, 15, t, 0, 0, 0, 14);
  for (let t = 0.4; t < 8.5; t += 0.32) N(e, 0.05, 0.03, 0.42, n, -0.4, t, 0);
  for (let t of [-1, 1])
    D(e, [-0.4, 0.3, t * 0.22], [-0.38, 8.6, t * 0.22], 0.018, n, 4);
  (N(e, 1.8, 0.08, 1.8, n, 0, 8.6, 0),
    Be(
      e,
      [
        [-0.9, -0.9],
        [0.9, -0.9],
        [0.9, 0.9],
        [-0.9, 0.9],
      ],
      8.68,
      t,
    ));
  for (let n of [-1, 1])
    D(e, [0, 7.4, 0], [n * 0.85, 8.6, n * 0.85], 0.03, t, 5);
  $(e, 0.08, 6, t, 0, 11.1, 0);
  for (let [t, r] of [
    [-2.9, 16724e3],
    [2.9, 3211104],
  ])
    (N(e, 0.2, 0.25, 0.2, n, 0, 11.2, t),
      N(e, 0.16, 0.12, 0.16, T(r, 1.6), 0, 11.28, t));
  for (let t of [-2.8, 2.8]) D(e, [0, 11.1, t], [0, 14, 0], 0.012, n, 4);
  return (N(e, 0.3, 0.35, 0.3, n, 0, 15, 0), j(e, [1.8, 15.4, 6]));
}
function Je(e, t, n = []) {
  let r = new m(),
    i = P(2830388, 0.6, 0.45),
    a = P(329223, 1, 0),
    o = (e) => !n.some(([t, n]) => e > t - 0.2 && e < n + 0.2);
  for (let n = -e / 2 + 0.8; n < e / 2 - 0.3; n += 1.6)
    o(n) &&
      (N(r, 0.08, t - 0.12, 0.16, i, n, 0.02, -0.08),
      N(r, 0.08, 0.1, 0.3, i, n, t - 0.12, -0.15));
  for (let t = -e / 2 + 3; t < e / 2 - 1; t += 6)
    o(t) && N(r, 0.8, 0.2, 0.02, a, t, 0.02, -0.012);
  return j(r, [e, t, 0.4]);
}
function Ye(e, t) {
  let n = new m(),
    r = P(2830388, 0.6, 0.45),
    i = P(329223, 1, 0);
  for (let i = -e / 2 + 0.55; i < e / 2 - 0.3; i += 1.1)
    N(n, 0.1, t - 0.1, 0.07, r, -0.05, 0.02, i);
  for (let t = -e / 2 + 1.1; t < e / 2 - 0.5; t += 2.2)
    N(n, 0.02, 0.18, 0.5, i, -0.012, 0.02, t);
  return j(n, [0.2, t, e]);
}
var Xe = 9278358,
  Ze = null;
function Qe() {
  return (Ze ??= new i({
    color: Xe,
    roughness: 0.5,
    metalness: 0.7,
    side: 2,
    alphaTest: 0.5,
    map: O(
      128,
      128,
      (e) => {
        ((e.fillStyle = `#fff`), e.fillRect(0, 0, 128, 128));
        for (let t = 0; t < 128; t += 16)
          for (let n = 0; n < 128; n += 16) e.clearRect(n + 2, t + 2, 12, 12);
      },
      !0,
    ),
  }));
}
function $e(t, n, r, i, a, o, s = 0) {
  let c = new v(n, r),
    l = c.attributes.uv;
  for (let e = 0; e < l.count; e++)
    l.setXY(e, (l.getX(e) * n) / 0.64, (l.getY(e) * r) / 0.64);
  let u = new e(c, Qe());
  return (u.position.set(i, a + r / 2, o), (u.rotation.y = s), t.add(u), u);
}
function et(e, t, n, r) {
  let i = k(r),
    a = P(2829614, 0.6, 0.6),
    o = P(7304311, 0.5, 0.8),
    s = P(13214242, 0.6, 0.3);
  for (let r = 0; r < 26; r++)
    N(
      e,
      0.16,
      0.08,
      0.1,
      r % 7 ? a : s,
      (i() - 0.5) * (t - 0.3),
      Math.floor(r / 9) * 0.08,
      (i() - 0.5) * (n - 0.3),
      i() * 3,
    );
  for (let r = 0; r < 4; r++) {
    let a = i() * Math.PI,
      s = Math.min(t, n) * 0.9;
    D(
      e,
      [(Math.cos(a) * -s) / 2, 0.22 + r * 0.04, (Math.sin(a) * -s) / 2],
      [(Math.cos(a) * s) / 2, 0.26 + r * 0.04, (Math.sin(a) * s) / 2],
      0.02,
      o,
      5,
    );
  }
}
function tt(e = 1.4, t = 1.3, n = 1.3, r = 1) {
  let i = new m(),
    a = P(Xe, 0.5, 0.7);
  for (let [r, o] of [
    [-1, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
  ])
    N(i, 0.06, t, 0.06, a, r * (e / 2 - 0.03), 0, o * (n / 2 - 0.03));
  for (let r of [0, t - 0.06]) {
    for (let t of [-1, 1]) N(i, e, 0.06, 0.06, a, 0, r, t * (n / 2 - 0.03));
    for (let t of [-1, 1]) N(i, 0.06, 0.06, n, a, t * (e / 2 - 0.03), r, 0);
  }
  for (let r of [-1, 1])
    ($e(i, e - 0.06, t - 0.1, 0, 0.05, r * (n / 2 - 0.03), 0),
      $e(i, n - 0.06, t - 0.1, r * (e / 2 - 0.03), 0.05, 0, Math.PI / 2));
  let o = $e(i, e - 0.06, n - 0.06, 0, t - 0.03, 0);
  ((o.rotation.x = -Math.PI / 2), (o.position.y = t - 0.03), et(i, e, n, r));
  for (let t of [-1, 1]) N(i, 0.1, 0.06, n + 0.04, a, t * e * 0.3, 0, 0);
  return j(i, [e, t, n]);
}
function nt(t = 2.5, n = 2.45, r = 3.9) {
  let i = new m(),
    a = P(6253426, 0.6, 0.4),
    o = P(3817541, 0.55, 0.5),
    s = P(7304311, 0.5, 0.8),
    c = P(1382426, 0.9, 0);
  (M(i, t, n - 0.02, r - 0.1, 0.05, a, 0, 0, -0.05),
    N(i, t - 0.3, n - 0.35, 0.02, c, 0, 0.1, r / 2 - 0.09));
  for (let e = 0; e < 12; e++)
    D(
      i,
      [-t / 2 + 0.3 + (e * (t - 0.6)) / 11, 0.15, r / 2 - 0.35],
      [-t / 2 + 0.3 + (e * (t - 0.6)) / 11 + 0.05, n - 0.4, r / 2 - 0.3],
      0.018,
      s,
      5,
    );
  $e(i, t - 0.3, n - 0.35, 0, 0.1, r / 2 - 0.04);
  for (let e of [-1, 1])
    N(i, 0.07, n - 0.3, 0.06, o, e * (t / 2 - 0.15), 0.08, r / 2 - 0.03);
  for (let e of [0.08, n - 0.28])
    N(i, t - 0.26, 0.06, 0.06, o, 0, e, r / 2 - 0.03);
  N(i, 0.05, 0.2, 0.06, P(13214242, 0.6, 0.3), t / 2 - 0.3, 1.1, r / 2 - 0.01);
  for (let e of [-1, 1])
    for (let n = 0; n < 5; n++)
      N(i, 0.02, 0.05, 1.2, o, e * (t / 2 + 0.005), 1.4 + n * 0.12, -0.6);
  let l = new e(
    new v(1.6, 0.3),
    Y(`LASHING GEAR`, {
      w: 512,
      h: 96,
      ink: `#e9e5d8`,
      font: `800 64px Arial, sans-serif`,
      alpha: 0.9,
    }),
  );
  return (
    l.position.set(0, n - 0.17, r / 2 - 0.02),
    i.add(l),
    (l.userData.keep = !0),
    j(i, [t, n, r])
  );
}
function rt(t = 3.2, n = 1.4) {
  let r = new m(),
    i = P(3877404, 0.6, 0.05),
    a = P(3817542, 0.6, 0.3),
    o = P(11569724, 0.35, 0.8);
  (N(r, t, 0.08, n, i, 0, 0.86, 0),
    N(r, t - 0.1, 0.8, n - 0.12, a, 0, 0.04, 0));
  for (let e = 0; e < 4; e++)
    (N(
      r,
      t - 0.3,
      0.02,
      0.02,
      P(1382426, 0.9, 0),
      0,
      0.2 + e * 0.17,
      n / 2 - 0.05,
    ),
      N(r, 0.2, 0.03, 0.03, o, 0, 0.27 + e * 0.17, n / 2 - 0.04));
  let s = new e(new v(t * 0.7, n * 0.7), P(14275253, 0.9, 0));
  return (
    (s.rotation.x = -Math.PI / 2),
    s.position.set(-0.2, 0.945, 0),
    r.add(s),
    D(
      r,
      [t / 2 - 0.3, 0.94, -n / 2 + 0.2],
      [t / 2 - 0.3, 1.45, -n / 2 + 0.2],
      0.015,
      a,
      5,
    ),
    D(
      r,
      [t / 2 - 0.3, 1.45, -n / 2 + 0.2],
      [t / 2 - 0.7, 1.45, -n / 2 + 0.4],
      0.015,
      a,
      5,
    ),
    N(r, 0.28, 0.1, 0.2, a, t / 2 - 0.75, 1.32, -n / 2 + 0.4),
    N(r, 0.2, 0.02, 0.14, T(16760944, 1.6), t / 2 - 0.75, 1.31, -n / 2 + 0.4),
    N(r, 0.25, 0.02, 0.06, o, 0.6, 0.95, 0.2, 0.5),
    j(r, [t, 1.5, n])
  );
}
function it(t = 2.6, r = 0.85) {
  let i = new m(),
    a = P(3817542, 0.6, 0.3),
    o = P(2238251, 0.5, 0.2),
    s = P(1118997, 0.6, 0.2);
  N(i, t, 0.78, r, a, 0, 0, 0);
  let c = new e(new n(t, 0.06, r * 0.55), o);
  (c.position.set(0, 0.8, r * 0.18),
    (c.rotation.x = 0.18),
    i.add(c),
    N(i, t, 0.42, r * 0.45, a, 0, 0.78, -r * 0.27));
  for (let [e, n] of [
    [-t / 4, 3133546],
    [t / 4, 4169983],
  ])
    (N(i, t * 0.42, 0.44, 0.06, s, e, 0.8, -r * 0.02),
      N(i, t * 0.38, 0.38, 0.02, T(n, 0.55), e, 0.83, 0.02),
      N(i, t * 0.44, 0.04, 0.2, s, e, 1.24, -0.06),
      w(i, 0.05, 0.05, 0.03, P(5922918, 0.4, 0.6), e, 0.83, r * 0.3, 10));
  return j(i, [t, 1.3, r]);
}
function at() {
  let e = new m(),
    t = P(2830131, 0.6, 0.3),
    n = P(1776928, 0.9, 0);
  (w(e, 0.25, 0.28, 0.06, t, 0, 0, 0, 14),
    w(e, 0.06, 0.06, 0.62, t, 0, 0.06, 0, 10),
    M(e, 0.55, 0.12, 0.55, 0.04, n, 0, 0.68, 0),
    M(e, 0.12, 0.6, 0.55, 0.04, n, -0.24, 0.78, 0));
  for (let n of [-0.27, 0.27]) N(e, 0.4, 0.05, 0.06, t, -0.02, 0.98, n);
  return j(e, [0.6, 1.4, 0.6]);
}
function ot() {
  let e = new m(),
    t = P(2830131, 0.6, 0.3);
  (M(e, 0.26, 0.18, 0.1, 0.03, t, 0, 0, 0.05),
    N(e, 0.2, 0.12, 0.03, T(16765072, 2.2), 0, 0.03, 0.105));
  for (let n of [-0.05, 0.05]) N(e, 0.012, 0.13, 0.012, t, n, 0.025, 0.125);
  return j(e, [0.3, 0.2, 0.15]);
}
function st(
  t,
  { w: n = 0.9, h: r = 0.3, ink: i = `#f2f2ee`, bg: a = 2059834 } = {},
) {
  let o = new m();
  N(o, n, r, 0.012, P(a, 0.6, 0.1), 0, 0, 0);
  let s = new e(
    new v(n * 0.94, r * 0.8),
    Y(t, {
      w: 512,
      h: 128,
      ink: i,
      font: `800 80px Arial, sans-serif`,
      alpha: 1,
    }),
  );
  return (
    s.position.set(0, r / 2, 0.008),
    o.add(s),
    (s.userData.keep = !0),
    j(o, [n, r, 0.02])
  );
}
var ct = [1.05, 0.52, 0.23, 0.085],
  lt = [0.124, 0.215, -0.42, 1.18],
  ut = [0.064, -0.168, 0.52, 1.05],
  dt = [0.47, 0.7, 1.14, 1.98];
function ft(e, t, n) {
  let r = 0;
  for (let i = 0; i < 4; i++)
    r += ct[i] * Math.sin(lt[i] * e + ut[i] * t + dt[i] * n);
  return r;
}
var pt = (() => {
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
function mt(e, t) {
  let n = new Float32Array(e * 3),
    r = new Float32Array(e * 3),
    i = new Float32Array(e),
    a = new Float32Array(e),
    o = new c();
  (o.setAttribute(`position`, new s(n, 3)),
    o.setAttribute(`color`, new s(r, 3)),
    o.setAttribute(`size`, new s(i, 1)),
    o.setAttribute(`alpha`, new s(a, 1)));
  let l = new f({
      transparent: !0,
      depthWrite: !1,
      blending: t ? 2 : 1,
      fog: !1,
      uniforms: {
        map: { value: pt() },
        uScale: { value: 600 },
        uFar: { value: 170 },
      },
      vertexShader: `attribute float size; attribute float alpha; attribute vec3 color; varying vec3 vC; varying float vA; uniform float uScale, uFar;
      void main(){ vC = color; vec4 mv = modelViewMatrix * vec4(position, 1.0); float d = -mv.z; vA = alpha * (1.0 - smoothstep(uFar * 0.3, uFar, d)) * smoothstep(0.5, 2.0, d);
        gl_PointSize = size * uScale / max(d, 0.5); gl_Position = projectionMatrix * mv; }`,
      fragmentShader: `uniform sampler2D map; varying vec3 vC; varying float vA; void main(){ vec4 t = texture2D(map, gl_PointCoord); gl_FragColor = vec4(vC, t.a * vA); if (gl_FragColor.a < 0.004) discard; }`,
    }),
    u = new g(o, l);
  ((u.frustumCulled = !1),
    (u.renderOrder = 4),
    (u.name = t ? `ship-fx-glow` : `ship-fx-mist`));
  let d = [...Array(e)].map(() => ({
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
    let n = d[p];
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
  function h(t, s) {
    for (let o = 0; o < e; o++) {
      let e = d[o];
      if (e.age >= e.life) {
        ((a[o] = 0), (i[o] = 0));
        continue;
      }
      e.age += t;
      let c = e.age / e.life;
      e.v[1] -= e.g * t;
      for (let n = 0; n < 3; n++)
        ((e.v[n] *= 1 - e.drag * t),
          (e.p[n] += (e.v[n] + (s?.[n] ?? 0) * e.drag) * t));
      ((n[o * 3] = e.p[0]),
        (n[o * 3 + 1] = e.p[1]),
        (n[o * 3 + 2] = e.p[2]),
        (r[o * 3] = e.c[0]),
        (r[o * 3 + 1] = e.c[1]),
        (r[o * 3 + 2] = e.c[2]),
        (i[o] = e.s0 + (e.s1 - e.s0) * c),
        (a[o] =
          e.a *
          Math.min(1, c * 8) *
          (1 - c) *
          (e.flick ? 0.6 + 0.4 * Math.sin(e.age * 40 + o) : 1)));
    }
    for (let e of [`position`, `color`, `size`, `alpha`])
      o.attributes[e].needsUpdate = !0;
  }
  return {
    points: u,
    spawn: m,
    update: h,
    dispose() {
      (o.dispose(), l.dispose());
    },
  };
}
function ht(t, r = {}) {
  let s = t.shipDressing,
    c = s.deck,
    l = s.wl,
    u = s.house,
    d = !!r.lite,
    f = new m();
  f.name = `ship-dressing`;
  let h = [],
    g = [],
    _ = (e) =>
      e.traverse((e) => {
        if (e.isMesh)
          for (let t of [e.material].flat())
            t?.userData?.nightGlow &&
              (t.emissiveIntensity = t.userData.nightGlow);
      }),
    b = ie();
  (g.push(b), f.add(ae(s.containers, b)), f.add(oe(s.rods, s.twists)));
  let w = new m();
  w.name = `ship-gear`;
  let D = (e, t, n) => {
      let r = e.attributes.position,
        i = e.attributes.uv;
      for (let e = 0; e < r.count; e++)
        i.setXY(e, r.getX(e) / t, -r.getZ(e) / n);
      return e;
    },
    A = (t, n, r, i = 0) => {
      let a = x(t, !1);
      (t.forEach((e) => e.dispose()), h.push(a));
      let o = new e(a, n);
      return (
        (o.position.y = i),
        (o.receiveShadow = !0),
        (o.name = r),
        f.add(o),
        o
      );
    },
    M = se();
  {
    let e = new i({ map: M.plate, roughness: 0.82, metalness: 0.2 });
    (g.push(e),
      A(
        s.hull.map(([e, t, n]) =>
          D(
            new v(t - e, 2 * n)
              .rotateX(-Math.PI / 2)
              .translate((e + t) / 2, 0, 0),
            4,
            4,
          ),
        ),
        e,
        `ship-deck`,
        c + 0.03,
      ));
    let t = new i({
      map: M.walk,
      roughness: 0.92,
      metalness: 0.05,
      polygonOffset: !0,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1,
    });
    (g.push(t),
      A(
        [-1, 1].map((e) =>
          D(
            new v(184, 3.6).rotateX(-Math.PI / 2).translate(-8, 0, e * 13.78),
            2,
            2,
          ),
        ),
        t,
        `ship-walkways`,
        c + 0.034,
      ),
      A(
        [-1, 1].map((e) =>
          new v(196, 0.14).rotateX(-Math.PI / 2).translate(-14, 0, e * 11.95),
        ),
        P(13148702, 0.7, 0.05, {
          polygonOffset: !0,
          polygonOffsetFactor: -2,
          polygonOffsetUnits: -2,
        }),
        `ship-walk-lines`,
        c + 0.036,
      ));
  }
  globalThis.__setpieceRaw = !0;
  try {
    for (let [e, t] of s.bays.entries())
      for (let e of [-1, 1]) {
        let n = fe(F.L40 + 0.8, 10.4);
        (n.position.set(t, c + 0.02, e * 6.75), w.add(n));
      }
    let t = s.bays.map((e, t) => String(2 + t * 4).padStart(2, `0`)),
      n = 1 / t.length,
      r = O(256 * t.length, 160, (e) => {
        let n = k(5);
        ((e.fillStyle = `#e7e1cf`),
          (e.font = `800 130px Arial, sans-serif`),
          (e.textAlign = `center`),
          (e.textBaseline = `middle`),
          (e.globalAlpha = 0.8),
          t.forEach((t, n) => e.fillText(t, 128 + n * 256, 86)),
          (e.globalCompositeOperation = `destination-out`),
          (e.globalAlpha = 1));
        for (let r = 0; r < 4e3; r++)
          ((e.fillStyle = `rgba(0,0,0,` + n() * 0.8 + `)`),
            e.fillRect(
              n() * 256 * t.length,
              n() * 160,
              1 + n() * 4,
              1 + n() * 3,
            ));
      }),
      a = new i({
        map: r,
        transparent: !0,
        roughness: 0.75,
        depthWrite: !1,
        polygonOffset: !0,
        polygonOffsetFactor: -2,
        polygonOffsetUnits: -2,
      });
    g.push(a);
    for (let [t, r] of s.bays.entries()) {
      let i = new v(1.7, 1.06),
        o = i.attributes.uv;
      for (let e = 0; e < o.count; e++) o.setX(e, (t + o.getX(e)) * n);
      let s = new e(i, a);
      (s.rotation.set(-Math.PI / 2, 0, -Math.PI / 2),
        s.position.set(r + 4.6, c + 0.04, 0),
        w.add(s));
    }
  } finally {
    globalThis.__setpieceRaw = !1;
  }
  {
    let e = k(404),
      t = d ? 0 : 70,
      n = new a(1, 14).rotateX(-Math.PI / 2);
    h.push(n);
    let r = new i({
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
    if ((g.push(r), t)) {
      let i = new S(n, r, t),
        a = new C(),
        s = new p(),
        l = new o(0, 1, 0),
        u = new o(),
        d = new o();
      for (let n = 0; n < t; n++) {
        let t = n % 3,
          r = -100 + e() * 184,
          o =
            t === 0
              ? (e() - 0.5) * 2.4
              : (t === 1 ? -1 : 1) * (12.6 + e() * 2.6),
          f = 0.4 + e() * 1.3;
        (s.setFromAxisAngle(l, e() * 6.28),
          a.compose(d.set(r, c + 0.04, o), s, u.set(f * (1 + e()), 1, f)),
          i.setMatrixAt(n, a));
      }
      ((i.instanceMatrix.needsUpdate = !0),
        (i.receiveShadow = !1),
        (i.name = `ship-puddles`),
        f.add(i));
    }
  }
  let I = _e(s.floods),
    L = new o(0, -1, 0),
    R = [],
    z = null;
  s.floods.forEach((e, t) => {
    let n = new o(...e.d).normalize(),
      r = pe({ tilt: -Math.asin(n.y), color: e.color });
    if (
      ((r.rotation.y = Math.atan2(-n.z, n.x)),
      r.position.set(e.p[0] - n.x * 0.2, e.p[1] - 0.25, e.p[2] - n.z * 0.2),
      e.search ? (_(r), f.add(r)) : !e.fire && e.cone !== !1 && w.add(r),
      !e.cone || d)
    )
      return;
    let i = Math.min(e.range * 0.75, e.search ? 60 : 26);
    if (e.search) {
      let a = he(i, e.half * 1.6, e.color, 0.014);
      (a.position.set(...e.p),
        a.quaternion.setFromUnitVectors(L, n),
        f.add(a),
        g.push(a.material),
        h.push(a.geometry),
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
  let B = R.length ? ge(R) : null;
  B && (f.add(B), g.push(B.material), h.push(B.geometry));
  let te = [B?.material, z?.cone.material].filter(Boolean),
    V = s.floods.findIndex((e) => e.fire),
    ne = V >= 0 ? I.items[V].c.clone() : null;
  globalThis.__setpieceRaw = !0;
  try {
    let t = (e, t, n, r, i = 0) => (
      e.position.set(t, n, r),
      (e.rotation.y = i),
      w.add(e),
      e
    );
    for (let e of s.lifeboats)
      t(xe({ hang: e.hang }), e.x, c, e.z, e.s > 0 ? Math.PI : 0);
    for (let e of s.ladders) {
      let n = s.hull[0][2],
        r = 1.18,
        i = n + s.plate - (n - s.bulwark / 2) + 0.1;
      t(
        Ce({ drop: c + r - l + 0.4, out: i, rail: r, ropeOnly: !!e.rope }),
        e.x,
        c + r,
        e.s * (n - s.bulwark / 2),
        e.s > 0 ? 0 : Math.PI,
      );
    }
    for (let [e, n, r] of s.ropes) t(we(n - c), e, c, r);
    for (let [e, n] of s.coils)
      t(Te(0.6 + ((e * 7 + n) % 3) * 0.05), e, c + 0.03, n);
    for (let [e, n] of s.fairleads) {
      let r = s.hull.find(([t, n]) => e >= t && e < n) ?? s.hull[0],
        i = e > 84;
      t(Ee(), e, c + (i ? 1.58 : 1.18), n * (r[2] - s.bulwark / 2));
    }
    for (let e of s.chains) t(De(4.6), e.x, c + 0.03, e.z);
    for (let e of s.rings)
      t(
        Oe(),
        e.x,
        c + 0.15,
        e.s * (16 - s.bulwark - 0.06),
        e.s > 0 ? Math.PI : 0,
      );
    for (let [e, n] of s.monitors) t(ke(), e, c, n);
    if ((t(Ae(3.7, 2), u.x0 + 11, u.floor[3], 15.07), s.bridge)) {
      let { xi: e, fy: n } = s.bridge;
      for (let [r, i] of [
        [-6.6, -1.3],
        [1.3, 6.6],
      ])
        t(je(i - r), e - 0.45, n, (r + i) / 2);
      t(Me(), e - 2.3, n, 0);
    }
    t(Ne(), s.blownDoor[0], c + 0.03, s.blownDoor[1]);
    for (let [e, n] of s.cranes)
      t(
        Pe({ run: 13, rise: 4.5, drop: 3.4 }),
        e,
        c + 9.5,
        n * 1.5,
        n > 0 ? 0 : Math.PI,
      );
    for (let [e, n] of s.cranes) t(Ve({ s: n }), e, c, 0);
    for (let [e, n] of s.gensets ?? []) t(He(), e, c, n * 1.23);
    for (let [e, n] of s.hoses ?? [])
      t(Ue(), e, c, n * 15.05, n > 0 ? 0 : Math.PI);
    for (let [e, n] of s.windlasses ?? []) t(We(), e, c, n);
    for (let [e, n] of s.bitts ?? []) t(Ge(), e, c, n);
    for (let [e, n] of s.winches ?? []) t(Ke(), e, c, n);
    if ((s.foremast != null && t(qe(), s.foremast, c, 0), s.breakwater))
      for (let e of s.breakwater.z)
        t(Ye(s.breakwater.d, s.breakwater.h), s.breakwater.x, c, e);
    for (let [e, [n, r, i, a, o]] of (s.cages ?? []).entries())
      t(tt(i, a, o, e + 1), n, c, r);
    for (let [e, n, r, i, a, o] of s.stores ?? [])
      t(nt(r, i, a), e, c, n, o > 0 ? 0 : Math.PI);
    if (s.wheelhouse) {
      let {
        floor: e,
        console: [n, r, i, a],
        chart: [o, c, l, u],
      } = s.wheelhouse;
      (t(it(i, a), n, e, r, r < 0 ? 0 : Math.PI),
        t(rt(l, u), o, e, c),
        s.bridge && t(at(), s.bridge.xi - 3.1, s.bridge.fy, 0));
    }
    for (let [e, n, r, i] of s.piers ?? []) {
      let a = Math.round((n - u.floor[0]) / 3.2),
        o = Math.abs(e - (u.x0 + u.x1) / 2) > 10,
        s = i > 0 ? 0 : Math.PI;
      o
        ? t(ot(), e, n + 2.55, r + i * 0.005, s)
        : a === 0
          ? t(
              st(
                e < (u.x0 + u.x1) / 2
                  ? `MUSTER STATION`
                  : `LIFEBOAT ${i > 0 ? 1 : 2}`,
                { w: 0.5, h: 0.24 },
              ),
              e,
              n + 1.7,
              r + i * 0.01,
              s,
            )
          : a === 1 &&
            e < (u.x0 + u.x1) / 2 &&
            t(
              st(`FIRE STATION`, { w: 0.5, h: 0.24, bg: 10495516 }),
              e,
              n + 1.7,
              r + i * 0.01,
              s,
            );
    }
    s.gensets &&
      s.hull.forEach(([e, n, r], i) => {
        let a = (e + n) / 2,
          o = i > 0 ? 1.5 : 1.1;
        for (let i of [-1, 1]) {
          let l = s.huts
            .filter(([, e]) => e === i)
            .map(([e]) =>
              [(e - 4.2 - a) * i, (e + 4.2 - a) * i].sort((e, t) => e - t),
            );
          t(Je(n - e, o, l), a, c, i * (r - s.bulwark), i > 0 ? 0 : Math.PI);
        }
      });
    {
      let t = u.floor[3],
        n = u.x1 + 0.21,
        r = T(2767684, 0.35);
      (r.color.set(857112),
        (r.roughness = 0.05),
        (r.metalness = 0.6),
        r.emissive.set(6969914),
        N(w, 0.04, 1.3, 15.6, r, n, t + 1.15, 0));
      for (let e = -7.8; e <= 7.81; e += 1.56)
        N(w, 0.08, 1.36, 0.1, P(14277074, 0.6, 0.2), n + 0.02, t + 1.12, e);
      N(w, 0.1, 0.12, 15.8, P(14277074, 0.6, 0.2), n + 0.03, t + 2.48, 0);
      let a = new e(
        new v(7.5, 0.7),
        Y(`KESTREL STAR`, {
          w: 1024,
          h: 128,
          ink: `#1a2a3a`,
          font: `800 96px Arial, sans-serif`,
          alpha: 0.95,
        }),
      );
      ((a.rotation.y = Math.PI / 2),
        a.position.set(n + 0.04, t + 2.95, 0),
        w.add(a),
        (a.userData.keep = !0));
      let o = O(256, 256, (e) => {
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
          o,
          s.funnel.x,
          s.funnel.y + 4.6,
          e * 3.23,
          e > 0 ? 0 : Math.PI,
        );
        ((t.userData.keep = !0), (t.material.transparent = !1));
      }
      let d = null,
        f = (e) => e + s.plate + 0.03,
        p = s.hull[0];
      for (let t of [-1, 1]) {
        let n = new e(
          new v(16, 1.6),
          Y(`KESTREL STAR`, {
            w: 1024,
            h: 128,
            ink: `#e8e6dc`,
            font: `800 104px Arial, sans-serif`,
            alpha: 0.92,
          }),
        );
        (n.position.set(p[1] - 12, c - 2.2, t * f(p[2])),
          (n.rotation.y = t > 0 ? 0 : Math.PI),
          (n.userData.keep = !0),
          w.add(n));
        let r = new e(
            new v(0.9, 8),
            (d ??= new i({
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
          a = s.hull[s.hull.length - 1];
        (r.position.set(a[0] + 1.2, l + 1, t * f(a[2])),
          (r.rotation.y = t > 0 ? 0 : Math.PI),
          (r.userData.keep = !0),
          w.add(r));
      }
      for (let [t, n] of [
        [`KESTREL STAR`, c - 2.4],
        [`MONROVIA`, c - 4.4],
      ]) {
        let r = new e(
          new v(t.length * 1.05, 1.5),
          Y(t, {
            w: 1024,
            h: 128,
            ink: `#e8e6dc`,
            font: `800 104px Arial, sans-serif`,
            alpha: 0.92,
          }),
        );
        (r.position.set(s.hull[0][0] - s.plate - 0.03, n, 0),
          (r.rotation.y = -Math.PI / 2),
          (r.userData.keep = !0),
          w.add(r));
      }
    }
  } finally {
    globalThis.__setpieceRaw = !1;
  }
  (j(w, [230, 20, 40]),
    _(w),
    f.add(w),
    w.traverse((e) => {
      if (e.isLOD && e.name === `setpiece-detail`)
        for (let t of e.levels) t.distance > 0 && (t.distance = 1 / 0);
    }),
    w.traverse((e) => {
      e.isMesh && (e.castShadow = !1);
    }));
  let H = Se();
  (H.traverse((e) => {
    e.isMesh && (e.castShadow = !1);
  }),
    H.position.set(s.rhib.x, l, s.rhib.s * (s.hull[0][2] + s.plate + 1.8)),
    f.add(H));
  let U = d
    ? null
    : (() => {
        let e = k(9091),
          t = new n(1, 1, 1);
        h.push(t);
        let r = new i({ color: 2762532, roughness: 0.9, metalness: 0.1 });
        g.push(r);
        let a = new S(t, r, 46);
        return (
          (a.name = `ship-flotsam`),
          (a.frustumCulled = !1),
          {
            mesh: a,
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
  U && f.add(U.mesh);
  let re = d
      ? []
      : [
          [150, -120, 9],
          [-60, 175, 7],
          [260, 40, 11],
          [-230, -150, 8],
        ].map(([e, t, n]) => ({ x: e, z: t, r: n, t: 0 })),
    W = d ? null : mt(900, !0),
    G = d ? null : mt(700, !1);
  (W && f.add(W.points), G && f.add(G.points));
  let K = s.floods[V]?.p,
    q = !0;
  try {
    q = localStorage.getItem(`salient.shipRoll`) !== `0`;
  } catch {}
  let J = k(77),
    ce = new C(),
    le = new p(),
    ue = new y(),
    de = new o(),
    me = new o(),
    X = new o(),
    Z = { spray: 0, ember: 0, mist: 0, oil: 0 },
    ve = 0,
    ye = [2.2, 0, -1.4];
  function be(e) {
    return q
      ? [
          0.011 * Math.sin(e * 0.57) + 0.004 * Math.sin(e * 1.31 + 1),
          0.0035 * Math.sin(e * 0.43 + 2),
          0.38 * Math.sin(e * 0.69) + 0.15 * Math.sin(e * 1.7),
        ]
      : [0, 0, 0];
  }
  function Fe(
    e,
    t,
    { time: n = ve, water: r = null, naval: i = null, rain: a = 1 } = {},
  ) {
    ((e = Math.min(e || 0, 0.1)), (ve += e));
    let o = n,
      [u, d, f] = be(o);
    (r?.setMotion?.(u, d, f, 0),
      i && (i.rotation.set(u, 0, d), (i.position.y = f)));
    let p = (e, t) => l + ft(e, t, o) + f - t * Math.sin(u) + e * Math.sin(d);
    if ((I.update(t, Q.tune.flood), t.isPerspectiveCamera)) {
      let e =
        (innerHeight * Math.min(devicePixelRatio, 2) * 0.5) /
        Math.tan((t.fov * Math.PI) / 360);
      for (let t of [W, G]) t && (t.points.material.uniforms.uScale.value = e);
    }
    if (z) {
      let e = -55 + 75 * (0.5 + 0.5 * Math.sin(o * 0.11)),
        t = 9 * Math.sin(o * 0.29),
        n = z.f;
      (X.set(e - n.p[0], c - n.p[1], t - n.p[2]).normalize(),
        I.aim(z.i, X.toArray()),
        z.cone.quaternion.setFromUnitVectors(L, X),
        (z.fix.rotation.y = Math.atan2(-X.z, X.x)));
    }
    for (let e of te)
      ((e.uniforms.uTime.value = o), (e.uniforms.uRain.value = a));
    if (ne) {
      let e = 0.72 + 0.18 * Math.sin(o * 13.1) + 0.1 * Math.sin(o * 29.7 + 1.3);
      I.items[V].c.copy(ne).multiplyScalar(e);
    }
    {
      let e = H.position.x,
        t = H.position.z,
        n = p(e - 3, t),
        r = p(e + 3, t),
        i = p(e, t + 1);
      ((H.position.y = (n + r) / 2 - 0.25),
        H.rotation.set((i - (n + r) / 2) * 0.4, 0, Math.atan2(r - n, 6)));
    }
    if (
      (U &&
        (U.items.forEach((e, t) => {
          let n = p(e.x, e.z);
          (ue.set(
            Math.sin(o * 0.7 + e.ph) * 0.12,
            e.yaw,
            Math.sin(o * 0.5 + e.ph) * 0.1,
          ),
            le.setFromEuler(ue),
            ce.compose(
              de.set(e.x, n - e.sy * 0.35, e.z),
              le,
              me.set(e.sx, e.sy, e.sz),
            ),
            U.mesh.setMatrixAt(t, ce));
        }),
        (U.mesh.instanceMatrix.needsUpdate = !0)),
      W)
    ) {
      for (Z.ember += e * 26; K && Z.ember >= 1;)
        (--Z.ember,
          W.spawn({
            p: [
              K[0] + (J() - 0.5) * 9,
              K[1] - 0.4 + J(),
              K[2] + (J() - 0.5) * 1.6,
            ],
            v: [(J() - 0.5) * 1.5, 2 + J() * 3, (J() - 0.5) * 1.5],
            life: 1.6 + J() * 2.2,
            s0: 0.07,
            s1: 0.03,
            c: [1, 0.45 + J() * 0.25, 0.12],
            a: 1,
            drag: 0.6,
            flick: 1,
          }));
      for (Z.oil += e * 30; Z.oil >= 1;) {
        --Z.oil;
        let e = re[Math.floor(J() * re.length)],
          t = J() * 6.28,
          n = Math.sqrt(J()) * e.r,
          r = e.x + Math.cos(t) * n,
          i = e.z + Math.sin(t) * n;
        W.spawn({
          p: [r, p(r, i) + 0.3, i],
          v: [0, 1.5 + J() * 2.5, 0],
          life: 0.7 + J() * 0.8,
          s0: 2.2 + J() * 2,
          s1: 0.8,
          c: [1, 0.42 + J() * 0.2, 0.1],
          a: 0.55,
          drag: 0.4,
        });
      }
    }
    if (G) {
      for (Z.spray += e * 9; Z.spray >= 1;) {
        --Z.spray;
        let e = J() < 0.25,
          t = J() < 0.5 ? -1 : 1,
          n = s.hull[Math.floor(J() * s.hull.length)],
          r = e ? 110 + J() * 6 : n[0] + J() * (n[1] - n[0]),
          i = e ? (J() - 0.5) * 8 : t * (n[2] + s.plate + 0.3),
          a = p(r, i) - l - f;
        if (a < (e ? 0.9 : 1.15)) continue;
        let o = e && a > 1.5,
          c = o ? 3.2 : 1;
        for (let n = 0; n < (o ? 26 : 10); n++)
          G.spawn({
            p: [r + (J() - 0.5) * 3, p(r, i) + 0.3, i],
            v: [
              (J() - 0.4) * 2 + (e ? -2 : 0),
              (3 + J() * 4) * c,
              e ? (J() - 0.5) * 3 : t * (1 + J() * 2),
            ],
            life: 0.8 + J() * 0.7,
            s0: 0.25,
            s1: 0.9 * Math.sqrt(c),
            c: [0.55, 0.6, 0.62],
            a: 0.32,
            g: 9.8,
            drag: 0.15,
          });
      }
      for (Z.mist += e * (Q.tune.mist ?? 0); Z.mist >= 1;) {
        --Z.mist;
        let e = -110 + J() * 225;
        G.spawn({
          p: [e, c + 1.5 + J() * 7, -26 - J() * 8],
          v: [ye[0] * 0.4, 0.05, 3.2 + J()],
          life: 16 + J() * 8,
          s0: 10,
          s1: 18,
          c: [0.2, 0.23, 0.26],
          a: 0.05,
        });
      }
      for (let t of re)
        ((t.t -= e),
          t.t <= 0 &&
            ((t.t = 0.35 + J() * 0.3),
            G.spawn({
              p: [t.x + (J() - 0.5) * t.r, l + 2, t.z + (J() - 0.5) * t.r],
              v: [0, 3 + J() * 2, 0],
              life: 12 + J() * 6,
              s0: 8,
              s1: 30,
              c: [0.06, 0.06, 0.06],
              a: 0.5,
              drag: 0.08,
            })));
    }
    (W?.update(e, ye), G?.update(e, ye));
  }
  function Ie(e = f) {
    e.traverse((e) => {
      if (e.isMesh)
        for (let t of [e.material].flat())
          t &&
            !/ship-beam|ship-fx/.test(e.name) &&
            (I.patch(t), r.envCaster?.(t));
    });
  }
  Ie(f);
  let Q = {
    root: f,
    flood: I,
    patchAll: Ie,
    update: Fe,
    waveHeight: ft,
    counts: {
      containers: s.containers.length,
      floods: s.floods.length,
      beams: R.length + +!!z,
      liveries: ee.length,
    },
    tune: { flood: 1, mist: 0 },
    dispose() {
      for (let e of h) e.dispose();
      for (let e of g) e.dispose();
      (W?.dispose(), G?.dispose(), f.removeFromParent());
    },
  };
  return ((f.userData.dressing = Q), Q);
}
export { ht as createShipDressing, ft as waveHeight };
//# sourceMappingURL=ship-dressing-DTx9LFga.js.map
