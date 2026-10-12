/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  Bt as e,
  F as t,
  Gt as n,
  H as r,
  I as i,
  J as a,
  L as o,
  Lt as s,
  P as c,
  R as l,
  Rn as u,
  Rt as d,
  Ut as f,
  cn as p,
  fn as m,
  lt as h,
  mn as g,
  p as _,
  sn as v,
  tt as y,
  vn as b,
  zn as x,
} from "./graphics-quality-BsjABS0s.js";
var S = new Uint8Array(65536).fill(255),
  C = new a(S, 128, 128, p);
((C.magFilter = C.minFilter = n), (C.needsUpdate = !0));
var w = [null],
  T = { lit: 0, allWindows: !1, minDetail: 0 },
  E = { w: 1.6, h: 2.6 },
  D = { w: 1.2, h: 2.4, transom: 0.3, mat: `woodDoor` },
  O = null,
  k = new c(),
  A = new x(),
  ee = new Set([
    `window`,
    `curtain`,
    `ribbon`,
    `lobby`,
    `lobbyDoor`,
    `recess`,
    `balcony`,
    `store`,
    `door`,
    `loading`,
  ]),
  j = (e, t) =>
    T.lit
      ? t
        ? `glassShop`
        : P(e * 5 + 3)() < T.lit
          ? `glassLit`
          : `glass`
      : `glass`,
  M = (e) => e === 0 || S[e * 4] > 0;
function N(e, t) {
  e > 0 && ((S[e * 4] = t ? 255 : 0), (C.needsUpdate = !0));
}
function te() {
  (S.fill(255), (C.needsUpdate = !0));
}
function ne(e, t, n, r, i, a) {
  let o = new x(t, n, 0).applyMatrix4(e).applyMatrix4(O.inv),
    s = new x(0, 0, 1).transformDirection(e).transformDirection(O.inv);
  O.doors.push({
    x: +o.x.toFixed(3),
    y: +o.y.toFixed(3),
    z: +o.z.toFixed(3),
    nx: Math.round(s.x),
    nz: Math.round(s.z),
    w: +r.toFixed(3),
    h: +i.toFixed(3),
    t: +a.toFixed(3),
  });
}
function re(e, t, n, r, i, a) {
  O && ne(e, t, n, r, i, a);
}
function P(e) {
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
var F = (e) => [(e >> 16) & 255, (e >> 8) & 255, e & 255],
  I = (e, t = 1, n = 1) =>
    `rgba(${e.map((e) => Math.max(0, Math.min(255, Math.round(e * t)))).join(`,`)},${n})`,
  L = (e) => `rgb(${e | 0},${e | 0},${e | 0})`;
function R(e, t, n, r, i = 0.12, a = t) {
  for (let o = 0; o < t * a * r; o++) {
    let r = n() * i;
    ((e.fillStyle =
      n() < 0.5 ? `rgba(0,0,0,${r})` : `rgba(255,255,255,${r * 0.6})`),
      e.fillRect(n() * t, n() * a, 1 + n() * 2, 1 + n() * 2));
  }
}
function z(e, t, n, r, i) {
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
var ie = {
  brick(e, t, n, r) {
    let i = P(r.seed),
      a = F(r.base),
      o = t / 6,
      s = t / 16,
      c = Math.max(3, t / 150);
    ((e.fillStyle = n ? L(40) : I(F(r.mortar))),
      e.fillRect(0, 0, t, t),
      n || R(e, t, P(r.seed + 50), 0.03));
    for (let t = 0; t < 16; t++) {
      let l = ((t % 2) * o) / 2;
      for (let u = -1; u <= 6; u++) {
        let d = i(),
          f = i() < r.burnt,
          p = (1 + (d - 0.5) * r.vary) * (f ? 0.62 : 1);
        ((e.fillStyle = n ? L(185 + d * 55) : I(a, p)),
          e.fillRect(u * o + l + c / 2, t * s + c / 2, o - c, s - c));
      }
    }
    n || (R(e, t, P(r.seed + 99), 0.06, 0.16), z(e, t, P(r.seed + 7), 14, 0.1));
  },
  lap(e, t, n, r) {
    let i = P(r.seed),
      a = r.rows || 8,
      o = t / a,
      s = F(r.base);
    for (let r = 0; r < a; r++) {
      let a = r * o,
        c = e.createLinearGradient(0, a, 0, a + o),
        l = 1 + (i() - 0.5) * 0.05;
      (n
        ? (c.addColorStop(0, L(50)),
          c.addColorStop(0.93, L(225)),
          c.addColorStop(1, L(40)))
        : (c.addColorStop(0, I(s, l * 0.68)),
          c.addColorStop(0.14, I(s, l * 0.96)),
          c.addColorStop(0.9, I(s, l * 1.05)),
          c.addColorStop(0.96, I(s, l * 0.8)),
          c.addColorStop(1, I(s, l * 0.5))),
        (e.fillStyle = c),
        e.fillRect(0, a, t, o));
    }
    if (!n) {
      let n = P(r.seed + 3);
      for (let r = 0; r < 220; r++)
        ((e.fillStyle = `rgba(0,0,0,${n() * 0.05})`),
          e.fillRect(n() * t, n() * t, 20 + n() * 90, 1));
      (R(e, t, n, 0.02), z(e, t, n, 8, 0.06));
    }
  },
  batten(e, t, n, r) {
    let i = F(r.base),
      a = t / 4,
      o = a * 0.16,
      s = P(r.seed);
    if (((e.fillStyle = n ? L(90) : I(i)), e.fillRect(0, 0, t, t), !n))
      for (let n = 0; n < t / 2; n++)
        ((e.fillStyle = `rgba(0,0,0,${s() * 0.07})`),
          e.fillRect(s() * t, s() * t, 1, 30 + s() * 140));
    for (let r = 0; r < 4; r++) {
      let s = r * a;
      ((e.fillStyle = n ? L(30) : I(i, 0.55)),
        e.fillRect(s + a / 2, 0, 2, t),
        (e.fillStyle = n ? L(230) : I(i, 1.1)),
        e.fillRect(s, 0, o, t),
        n ||
          ((e.fillStyle = I(i, 0.5)),
          e.fillRect(s + o, 0, 3, t),
          (e.fillStyle = I(i, 1.28)),
          e.fillRect(s, 0, 2, t)));
    }
    n || (R(e, t, s, 0.02), z(e, t, s, 10, 0.08));
  },
  shingle(e, t, n, r) {
    let i = P(r.seed),
      a = F(r.base),
      o = t / 10;
    ((e.fillStyle = n ? L(20) : I(a, 0.35)), e.fillRect(0, 0, t, t));
    for (let r = 0; r < 10; r++) {
      let s = -i() * t * 0.08;
      for (; s < t;) {
        let c = t * (0.05 + i() * 0.06),
          l = i(),
          u = (t) => {
            let i = e.createLinearGradient(0, r * o, 0, (r + 1) * o);
            if (n) (i.addColorStop(0, L(70)), i.addColorStop(1, L(235)));
            else {
              let e = 0.78 + l * 0.42;
              (i.addColorStop(0, I(a, e * 0.72)),
                i.addColorStop(1, I(a, e * 1.04)));
            }
            ((e.fillStyle = i), e.fillRect(t + 1.5, r * o, c - 3, o - 2));
          };
        (u(s), s + c > t && u(s - t), s < 0 && u(s + t), (s += c));
      }
    }
    n || (R(e, t, P(r.seed + 9), 0.05), z(e, t, P(r.seed + 4), 10, 0.12));
  },
  corrugated(e, t, n, r) {
    let i = F(r.base),
      a = P(r.seed);
    for (let r = 0; r < t; r++) {
      let a = Math.sin((r / t) * 12 * Math.PI * 2);
      ((e.fillStyle = n ? L(128 + a * 110) : I(i, 0.8 + 0.24 * a)),
        e.fillRect(r, 0, 1, t));
    }
    if (!n) {
      for (let n = 0; n < 50; n++) {
        let n = a() * t,
          r = 2 + a() * 12,
          i = a() * t,
          o = a() * t * 0.5,
          s = e.createLinearGradient(0, i, 0, i + o);
        (s.addColorStop(0, `rgba(125,62,24,${0.15 + a() * 0.3})`),
          s.addColorStop(1, `rgba(125,62,24,0)`),
          (e.fillStyle = s),
          e.fillRect(n, i, r, o));
      }
      (R(e, t, a, 0.02), z(e, t, a, 10, 0.1));
    }
  },
  stucco(e, t, n, r) {
    let i = P(r.seed),
      a = F(r.base);
    ((e.fillStyle = n ? L(128) : I(a)), e.fillRect(0, 0, t, t));
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
    if ((n || z(e, t, i, r.blotch ?? 26, 0.07), r.lines)) {
      e.fillStyle = n ? L(60) : I(a, 0.8);
      for (let n = 0; n < r.lines; n++) e.fillRect(0, (n / r.lines) * t, t, 2);
    }
    r.joints &&
      ((e.fillStyle = n ? L(20) : I(a, 0.62)),
      e.fillRect(0, 0, t, 4),
      e.fillRect(0, 0, 4, t));
  },
  ashlar(e, t, n, r) {
    let i = P(r.seed),
      a = F(r.base),
      o = r.rows || 4,
      s = t / o,
      c = r.joint || 4;
    ((e.fillStyle = n ? L(20) : I(a, r.jointK || 0.72)),
      e.fillRect(0, 0, t, t));
    for (let l = 0; l < o; l++) {
      let o = -i() * t * 0.3;
      for (; o < t;) {
        let u = t * (0.24 + i() * 0.22),
          d = 0.9 + i() * 0.16,
          f = (t) => {
            ((e.fillStyle = n ? L(r.rustic ? 150 : 200) : I(a, d)),
              e.fillRect(t + c / 2, l * s + c / 2, u - c, s - c),
              r.rustic &&
                n &&
                ((e.fillStyle = L(225)),
                e.fillRect(
                  t + c * 1.6,
                  l * s + c * 1.6,
                  u - c * 3.2,
                  s - c * 3.2,
                )));
          };
        (f(o), o + u > t && f(o - t), (o += u));
      }
    }
    (R(e, t, P(r.seed + 11), n ? 0.02 : 0.05),
      n || z(e, t, P(r.seed + 12), 10, 0.08));
  },
  planks(e, t, n, r) {
    let i = P(r.seed),
      a = F(r.base),
      o = r.n || 6,
      s = t / o;
    for (let r = 0; r < o; r++) {
      if (
        ((e.fillStyle = n ? L(190) : I(a, 0.85 + i() * 0.25)),
        e.fillRect(r * s, 0, s, t),
        !n)
      )
        for (let n = 0; n < 26; n++)
          ((e.fillStyle = `rgba(0,0,0,${i() * 0.09})`),
            e.fillRect(r * s + i() * s, 0, 1, t));
      ((e.fillStyle = n ? L(20) : I(a, 0.42)),
        e.fillRect(r * s, 0, Math.max(2, t / 200), t));
    }
    n || R(e, t, P(r.seed + 5), 0.02);
  },
  boardform(e, t, n, r) {
    ie.stucco(e, t, n, { ...r, blotch: 20 });
    let i = P(r.seed + 1),
      a = t / r.n;
    for (let o = 0; o < r.n; o++)
      if (
        ((e.fillStyle = n ? `rgba(0,0,0,.5)` : I(F(r.base), 0.8, 0.8)),
        e.fillRect(o * a, 0, 2, t),
        !n)
      ) {
        ((e.fillStyle = `rgba(0,0,0,${i() * 0.05})`),
          e.fillRect(o * a, 0, a, t));
        for (let n = 0; n < 14; n++)
          ((e.fillStyle = `rgba(0,0,0,${i() * 0.05})`),
            e.fillRect(o * a + i() * a, 0, 1, t));
      }
  },
  paint(e, t, n, r) {
    ((e.fillStyle = n ? L(128) : I(F(r.base))),
      e.fillRect(0, 0, t, t),
      R(e, t, P(r.seed || 3), 0.04, n ? 0.2 : 0.05));
  },
  stripes(e, t, n, r) {
    let i = F(r.base),
      a = F(r.alt);
    for (let n = 0; n < 4; n++)
      ((e.fillStyle = I(n % 2 ? a : i)), e.fillRect((n / 4) * t, 0, t / 4, t));
    (R(e, t, P(5), 0.04, 0.08), z(e, t, P(6), 8, 0.08));
  },
  asphalt(e, t, n, r) {
    let i = P(r.seed),
      a = F(r.base);
    ((e.fillStyle = n ? L(128) : I(a)), e.fillRect(0, 0, t, t));
    for (let r = 0; r < t * t * 0.2; r++) {
      let r = i();
      ((e.fillStyle = n ? L(r * 255) : I(a, 0.7 + r * 0.7, 0.5)),
        e.fillRect(i() * t, i() * t, 1 + i() * 2, 1 + i() * 2));
    }
    n || z(e, t, i, 16, 0.1);
  },
};
function B(e, t, n, i, a = !0) {
  let o = document.createElement(`canvas`);
  ((o.width = e), (o.height = t), n(o.getContext(`2d`), e, t));
  let s = new l(o);
  return (
    (s.wrapS = s.wrapT = a ? m : r),
    (s.anisotropy = 8),
    (s.colorSpace = i ? g : ``),
    s
  );
}
var V = {
    brickRed: {
      pat: `brick`,
      p: { base: 9715756, mortar: 12168602, vary: 0.3, burnt: 0.09, seed: 1 },
      scale: 1.2,
      rough: 0.92,
      bump: 1.6,
      grime: 0.32,
    },
    brickTan: {
      pat: `brick`,
      p: { base: 12095328, mortar: 9405554, vary: 0.2, burnt: 0.06, seed: 2 },
      scale: 1.2,
      rough: 0.92,
      bump: 1.6,
      grime: 0.38,
    },
    sidingSage: {
      pat: `lap`,
      p: { base: 8427386, seed: 3 },
      scale: 1.44,
      rough: 0.72,
      bump: 2.5,
      grime: 0.16,
    },
    battenRed: {
      pat: `batten`,
      p: { base: 8138532, seed: 4 },
      scale: 1.6,
      rough: 0.85,
      bump: 2.2,
      grime: 0.28,
    },
    stucco: {
      pat: `stucco`,
      p: { base: 14471090, seed: 5 },
      scale: 2.2,
      rough: 0.95,
      bump: 0.8,
      grime: 0.36,
    },
    stone: {
      pat: `ashlar`,
      p: { base: 12433062, rows: 4, seed: 6 },
      scale: 1.6,
      rough: 0.9,
      bump: 1.2,
      grime: 0.3,
    },
    rustic: {
      pat: `ashlar`,
      p: {
        base: 13089695,
        rows: 3,
        joint: 16,
        rustic: !0,
        jointK: 0.55,
        seed: 7,
      },
      scale: 1.8,
      rough: 0.95,
      bump: 3,
      grime: 0.42,
    },
    concrete: {
      pat: `stucco`,
      p: { base: 11117980, seed: 8, lines: 2 },
      scale: 2.4,
      rough: 0.95,
      bump: 0.6,
      grime: 0.3,
    },
    trimWhite: {
      pat: `paint`,
      p: { base: 15460058 },
      size: 128,
      scale: 1,
      rough: 0.55,
    },
    trimCream: {
      pat: `paint`,
      p: { base: 14206364 },
      size: 128,
      scale: 1,
      rough: 0.6,
    },
    ironGreen: {
      pat: `paint`,
      p: { base: 2902586 },
      size: 128,
      scale: 1,
      rough: 0.45,
      metal: 0.25,
    },
    ironDark: {
      pat: `paint`,
      p: { base: 2763823 },
      size: 128,
      scale: 1,
      rough: 0.5,
      metal: 0.45,
    },
    brass: {
      pat: `paint`,
      p: { base: 11569726 },
      size: 64,
      scale: 1,
      rough: 0.3,
      metal: 0.9,
    },
    curtain: {
      pat: `paint`,
      p: { base: 14931640 },
      size: 64,
      scale: 1,
      rough: 0.9,
      emissive: 2760722,
    },
    shutterGreen: {
      pat: `lap`,
      p: { base: 3100992, rows: 16, seed: 9 },
      scale: 1,
      rough: 0.7,
      bump: 1.2,
    },
    shingle: {
      pat: `shingle`,
      p: { base: 6182994, seed: 10 },
      scale: 1.5,
      rough: 0.95,
      bump: 3,
    },
    corrugated: {
      pat: `corrugated`,
      p: { base: 9277580, seed: 11 },
      scale: 1.2,
      rough: 0.5,
      metal: 0.55,
      bump: 2.5,
    },
    rollup: {
      pat: `corrugated`,
      p: { base: 6253940, seed: 12 },
      scale: 0.6,
      rough: 0.5,
      metal: 0.4,
      bump: 2,
      swap: !0,
    },
    tarRoof: {
      pat: `stucco`,
      p: { base: 4078650, seed: 13, joints: !0 },
      scale: 3,
      rough: 1,
    },
    wood: {
      pat: `planks`,
      p: { base: 9268298, seed: 14 },
      scale: 1.2,
      rough: 0.85,
      bump: 1.2,
    },
    woodDoor: {
      pat: `planks`,
      p: { base: 5912612, n: 5, seed: 15 },
      scale: 1.2,
      rough: 0.65,
      bump: 1.2,
    },
    tank: {
      pat: `planks`,
      p: { base: 7232068, n: 10, seed: 16 },
      scale: 2,
      rough: 0.9,
      bump: 1.5,
    },
    awningGreen: {
      pat: `stripes`,
      p: { base: 3103300, alt: 14866102 },
      size: 256,
      scale: 1,
      rough: 0.95,
    },
    awningRed: {
      pat: `stripes`,
      p: { base: 9054756, alt: 14866102 },
      size: 256,
      scale: 1,
      rough: 0.95,
    },
    sidewalk: {
      pat: `stucco`,
      p: { base: 10986136, seed: 19, joints: !0, blotch: 30 },
      scale: 1.6,
      rough: 0.95,
      bump: 0.8,
    },
    asphalt: {
      pat: `asphalt`,
      p: { base: 4013632, seed: 20 },
      scale: 4,
      rough: 0.95,
      bump: 0.6,
    },
    interior: {
      pat: `stucco`,
      p: { base: 7827551, seed: 17, blotch: 6 },
      scale: 3,
      rough: 1,
      side: 1,
      noShadow: !0,
    },
    floorSlab: {
      pat: `planks`,
      p: { base: 6968897, n: 8, seed: 18 },
      scale: 2,
      rough: 0.9,
    },
    glass: { glass: !0 },
    glassBlue: { glass: !0, color: 7116966 },
    glassGrey: { glass: !0, color: 8885920 },
    glassBronze: { glass: !0, color: 9206366 },
    glassLit: { glass: !0, lit: 16758122 },
    glassShop: { glass: !0, lit: 16769712 },
    railGlass: { clear: !0 },
    spandrelBlue: {
      pat: `paint`,
      p: { base: 2902357 },
      size: 128,
      scale: 1,
      rough: 0.18,
      metal: 0.65,
    },
    whiteSpandrel: {
      pat: `paint`,
      p: { base: 15132384 },
      size: 128,
      scale: 1,
      rough: 0.4,
      metal: 0.1,
      grime: 0.15,
    },
    aluminum: {
      pat: `paint`,
      p: { base: 12830667 },
      size: 128,
      scale: 1,
      rough: 0.32,
      metal: 0.85,
    },
    bronze: {
      pat: `paint`,
      p: { base: 6047280 },
      size: 128,
      scale: 1,
      rough: 0.38,
      metal: 0.8,
    },
    beacon: {
      pat: `paint`,
      p: { base: 16726564 },
      size: 64,
      scale: 1,
      rough: 0.5,
      emissive: 16720912,
    },
    limestone: {
      pat: `ashlar`,
      p: { base: 14274748, rows: 3, joint: 3, seed: 23 },
      scale: 2.4,
      rough: 0.9,
      bump: 0.8,
      grime: 0.3,
    },
    granite: {
      pat: `ashlar`,
      p: { base: 5065288, rows: 2, joint: 3, jointK: 0.6, seed: 24 },
      scale: 2.4,
      rough: 0.35,
      bump: 0.5,
    },
    boardConcrete: {
      pat: `boardform`,
      p: { base: 10723222, n: 10, seed: 25 },
      scale: 2.4,
      rough: 0.95,
      bump: 1,
      grime: 0.35,
      swap: !0,
    },
    brickBrown: {
      pat: `brick`,
      p: { base: 7618605, mortar: 10195589, vary: 0.24, burnt: 0.1, seed: 26 },
      scale: 1.2,
      rough: 0.92,
      bump: 1.6,
      grime: 0.3,
    },
    louver: {
      pat: `lap`,
      p: { base: 9343894, rows: 24, seed: 27 },
      scale: 1.2,
      rough: 0.5,
      metal: 0.5,
      bump: 1.5,
    },
  },
  ae = { uAlive: { value: C } };
function oe(e, t = 0, n = !1) {
  return (
    (e.onBeforeCompile = (e) => {
      ((e.uniforms.uAlive = ae.uAlive),
        (e.vertexShader =
          `attribute float cellId;
uniform sampler2D uAlive;
varying float vWY;
` +
          e.vertexShader.replace(
            `#include <begin_vertex>`,
            `#include <begin_vertex>
      {
        vec2 cuv = vec2((mod(cellId, 128.0) + 0.5) / 128.0, (floor(cellId / 128.0) + 0.5) / 128.0);
        if (texture2D(uAlive, cuv).r < 0.5) transformed = vec3(0.0);
      }
      ${n ? `` : `vWY = (modelMatrix * vec4(transformed, 1.0)).y;`}`,
          )),
        n ||
          (e.fragmentShader =
            `varying float vWY;
` +
            e.fragmentShader.replace(
              `#include <map_fragment>`,
              `#include <map_fragment>
      diffuseColor.rgb *= mix(${(1 - t).toFixed(3)}, 1.0, smoothstep(0.05, 1.7, vWY));`,
            )));
    }),
    (e.customProgramCacheKey = () => `facade-${t}-${n}`),
    e
  );
}
var se = oe(new e({ depthPacking: v }), 0, !0),
  H = new Map(),
  ce = (e) => U(e, !0),
  le = (e) => U(e, !1);
function U(e, t) {
  let n = e + (t ? `` : `:plain`);
  if (H.has(n)) return H.get(n);
  let r = V[e],
    i;
  if (r.glass)
    ((i = new f({
      color: r.color ?? 8229795,
      roughness: 0.06,
      metalness: 0.75,
      envMapIntensity: 1.6,
    })),
      r.lit && (i.emissive.set(r.lit), (i.emissiveIntensity = 0)));
  else if (r.clear)
    i = new f({
      color: 13623526,
      roughness: 0.05,
      metalness: 0.3,
      transparent: !0,
      opacity: 0.32,
      depthWrite: !1,
    });
  else if (r.tex)
    ((i = new f({
      map: r.tex,
      roughness: r.rough ?? 0.8,
      metalness: r.metal ?? 0,
      transparent: !!r.transparent,
      depthWrite: !r.transparent,
      polygonOffset: !!r.transparent,
      polygonOffsetFactor: -2,
      alphaTest: r.cutout ? 0.5 : 0,
    })),
      r.glow &&
        ((i.emissiveMap = r.tex),
        i.emissive.set(16777215),
        (i.emissiveIntensity = r.glow)));
  else {
    let e = _(),
      t = e ? Math.min(e.tex, r.size || 512) : r.size || 512,
      n = ie[r.pat];
    ((i = new f({
      map: B(t, t, (e) => n(e, t, !1, r.p), !0),
      roughness: r.rough ?? 0.9,
      metalness: r.metal ?? 0,
    })),
      r.bump &&
        !e &&
        ((i.bumpMap = B(t, t, (e) => n(e, t, !0, r.p), !1)),
        (i.bumpScale = r.bump)),
      r.emissive && i.emissive.set(r.emissive));
  }
  return (
    r.side && (i.side = r.side),
    t && oe(i, r.grime || 0),
    H.set(n, i),
    i
  );
}
function ue(e, t, n = {}) {
  n = { ...n };
  let r = _(),
    i = r ? Math.min(r.sign, n.width || 2048) : n.width || 2048,
    a = Math.round(i * (n.aspect || 0.2)),
    o,
    s = () =>
      B(
        i,
        a,
        (e) => {
          (n.bg != null && ((e.fillStyle = I(F(n.bg))), e.fillRect(0, 0, i, a)),
            n.border != null &&
              ((e.strokeStyle = I(F(n.border))),
              (e.lineWidth = a * 0.05),
              e.strokeRect(
                a * 0.06,
                a * 0.06,
                i - a * 0.12,
                a * 0.12 > 0 ? a - a * 0.12 : a,
              )));
          let r = t.split(`
`),
            o = (a / r.length) * (n.size || 0.55);
          if (
            ((e.font = `${n.weight || 700} ${o}px ${n.font || `Georgia, "Times New Roman", serif`}`),
            (e.textAlign = `center`),
            (e.textBaseline = `middle`),
            (e.fillStyle = I(F(n.fg))),
            `letterSpacing` in e &&
              (e.letterSpacing = `${o * (n.spacing ?? 0.08)}px`),
            n.glow && ((e.shadowColor = I(F(n.fg))), (e.shadowBlur = o * 0.35)),
            r.forEach((t, n) =>
              e.fillText(t, i / 2, (a / r.length) * (n + 0.53), i * 0.92),
            ),
            n.glow &&
              ((e.shadowBlur = o * 0.12),
              (e.lineWidth = Math.max(2, o * 0.035)),
              (e.strokeStyle = `rgba(255,250,235,0.85)`),
              r.forEach((t, n) =>
                e.strokeText(t, i / 2, (a / r.length) * (n + 0.53), i * 0.92),
              ),
              (e.shadowBlur = 0)),
            n.fade)
          ) {
            let t = P(21);
            e.globalCompositeOperation = `destination-out`;
            let r = i / 2048;
            for (let o = 0; o < 9e3 * r * r; o++)
              ((e.fillStyle = `rgba(0,0,0,${t() * n.fade})`),
                e.fillRect(
                  t() * i,
                  t() * a,
                  (2 + t() * 14) * r,
                  (1 + t() * 5) * r,
                ));
            e.globalCompositeOperation = `source-over`;
          }
          n.bg != null && R(e, i, P(22), 0.004, 0.2, a);
        },
        !0,
        !1,
      );
  return (
    (V[e] = {
      get tex() {
        return (o ??= s());
      },
      set tex(e) {
        o = e;
      },
      rough: 0.85,
      transparent: n.bg == null,
      glow: n.glow,
    }),
    e
  );
}
var W = new x(),
  G = new x(),
  K = (() => {
    let e = new t();
    return {
      position: e.attributes.position.array,
      normal: e.attributes.normal.array,
      index: e.index.array,
    };
  })();
function de(e, n, r, a, s, c) {
  let l = n - e,
    u = a - r,
    d = c - s,
    f = (e + n) / 2,
    p = (r + a) / 2,
    m = (s + c) / 2;
  if (!Number.isFinite(l + u + d + f + p + m) || Math.max(l, u, d) > 34e37)
    return new t(l, u, d).translate(f, p, m);
  let h = new Float32Array(K.position.length),
    g = K.position;
  for (let e = 0; e < h.length; e += 3)
    ((h[e] = Math.fround(g[e] * l) + f),
      (h[e + 1] = Math.fround(g[e + 1] * u) + p),
      (h[e + 2] = Math.fround(g[e + 2] * d) + m));
  let _ = new o();
  return (
    _.setAttribute(`position`, new i(h, 3)),
    _.setAttribute(`normal`, new i(K.normal.slice(), 3)),
    _.setIndex(new i(K.index.slice(), 1)),
    _
  );
}
function fe(e) {
  let t = e.reduce((e, t) => e + t.attributes.position.count, 0),
    n =
      t <= 65536
        ? new Uint16Array(e.reduce((e, t) => e + t.index.count, 0))
        : new Uint32Array(e.reduce((e, t) => e + t.index.count, 0)),
    r = new o();
  for (let [n, a] of Object.entries(e[0].attributes)) {
    let o = new a.array.constructor(t * a.itemSize),
      s = 0;
    for (let t of e)
      (o.set(t.attributes[n].array, s), (s += t.attributes[n].array.length));
    r.setAttribute(n, new i(o, a.itemSize, a.normalized));
  }
  let a = 0,
    s = 0;
  for (let t of e) {
    let e = t.index.array;
    for (let t = 0; t < e.length; t++) n[a++] = e[t] + s;
    s += t.attributes.position.count;
  }
  return (r.setIndex(new i(n, 1)), (r.userData.coplanarSequential = !0), r);
}
var pe = class {
  constructor() {
    this.parts = new Map();
  }
  cell(e, t, n) {
    let r = new x(...t).applyMatrix4(e),
      i = new x(0, 0, 1).transformDirection(e);
    return (
      w.length === 16384 &&
        console.warn(
          `facade-kit: more cells than the alive texture holds; raise AW`,
        ),
      w.push({ center: r, normal: i, mat: n }),
      w.length - 1
    );
  }
  add(e, t, n, r, a = {}) {
    if (T.minDetail > 0) {
      (t.boundingBox || t.computeBoundingBox(),
        k.copy(t.boundingBox).applyMatrix4(n).getSize(A));
      let e = A.x,
        r = A.y,
        i = A.z;
      if (e + r + i - Math.max(e, r, i) - Math.min(e, r, i) < T.minDetail)
        return;
    }
    let s = t.index ? new o() : t;
    t.index &&
      (s.setAttribute(`position`, t.attributes.position.clone()),
      s.setAttribute(`normal`, t.attributes.normal.clone()),
      s.setIndex(t.index.clone()));
    for (let e of Object.keys(s.attributes))
      e !== `position` && e !== `normal` && s.deleteAttribute(e);
    let c = s.attributes.position,
      l = c.count,
      u = new Float32Array(l * 2);
    if (a.planar)
      for (let e = 0; e < l; e++) {
        let [t, n] = a.planar(c.getX(e), c.getY(e), c.getZ(e));
        ((u[e * 2] = t), (u[e * 2 + 1] = n));
      }
    if ((s.applyMatrix4(n), !a.planar)) {
      let t = s.attributes.normal,
        n = 1 / (V[e]?.scale || 1),
        r = a.swap ?? V[e]?.swap;
      for (let e = 0; e < l; e++) {
        (W.fromBufferAttribute(c, e), G.fromBufferAttribute(t, e));
        let i = Math.abs(G.x),
          a = Math.abs(G.y),
          o = Math.abs(G.z),
          s,
          l;
        (a >= i && a >= o
          ? ((s = W.x), (l = W.z))
          : i >= o
            ? ((s = W.z), (l = W.y))
            : ((s = W.x), (l = W.y)),
          r && ([s, l] = [l, s]),
          (u[e * 2] = s * n),
          (u[e * 2 + 1] = l * n));
      }
    }
    if (
      (s.setAttribute(`uv`, new i(u, 2)),
      s.setAttribute(`cellId`, new i(new Float32Array(l).fill(r), 1)),
      !s.index)
    ) {
      let e = l <= 65536 ? new Uint16Array(l) : new Uint32Array(l);
      for (let t = 0; t < l; t++) e[t] = t;
      s.setIndex(new i(e, 1));
    }
    (this.parts.has(e) || this.parts.set(e, []), this.parts.get(e).push(s));
  }
  box(e, t, n, r, i, a, o, s, c, l) {
    i - r < 0.001 ||
      o - a < 0.001 ||
      c - s < 0.001 ||
      this.add(e, de(r, i, a, o, s, c), t, n, l);
  }
  build() {
    let e = new h(),
      t = 0;
    for (let [n, r] of this.parts) {
      let i = fe(r),
        a = V[n],
        o = new d(i, ce(n));
      ((o.material.name ||= n),
        (o.castShadow = !a.noShadow && !a.transparent && !a.clear),
        (o.receiveShadow = !0),
        (o.customDepthMaterial = se),
        e.add(o),
        (t += i.index.count / 3));
    }
    return ((e.userData.tris = t), e);
  }
};
function q(e, t, n, r, i, a) {
  let { K: o, M: s } = e,
    { u0: c, u1: l, y0: u, y1: d, cell: f, wallMat: p, t: m } = t;
  (o.box(p, s, f, c, l, u, i, -m, 0),
    o.box(p, s, f, c, l, a, d, -m, 0),
    o.box(p, s, f, c, n, i, a, -m, 0),
    o.box(p, s, f, r, l, i, a, -m, 0));
}
function J(e, t, n, r, i, a, o) {
  let { K: s, M: c } = e,
    l = o.frameW || 0.07,
    u = o.rec ?? 0.12,
    d = o.frame,
    f = -u - 0.07,
    p = -u,
    m = o.muntin || 0.03;
  (s.box(d, c, t, n, r, i, i + l, f, p),
    s.box(d, c, t, n, r, a - l, a, f, p),
    s.box(d, c, t, n, n + l, i, a, f, p),
    s.box(d, c, t, r - l, r, i, a, f, p),
    o.open ||
      s.box(j(t), c, t, n + l, r - l, i + l, a - l, f + 0.02, f + 0.035));
  let [h, g] = o.open ? [1, 1] : o.lites || [1, 1],
    _ = P(t * 7 + 1),
    v = (e, i) => {
      for (let a = 1; a < h; a++) {
        let o = n + ((r - n) * a) / h;
        s.box(d, c, t, o - m / 2, o + m / 2, e, i, f, p - 0.02);
      }
    },
    y = (e, i, a) => {
      for (let o = 1; o < a; o++) {
        let l = e + ((i - e) * o) / a;
        s.box(d, c, t, n, r, l - m / 2, l + m / 2, f, p - 0.02);
      }
    };
  if (!o.open) {
    if (o.type === `sash`) {
      let e = (i + a) / 2 + (_() < 0.25 ? -(a - i) * 0.18 : 0);
      (s.box(d, c, t, n, r, e - l * 0.6, e + l * 0.6, f - 0.02, p - 0.01),
        v(i, a),
        y(i, e, g),
        y(e, a, g));
    } else (v(i, a), y(i, a, g));
  }
  if (!o.open && _() < (o.curtains ?? 0.45)) {
    let e = (a - i) * (0.2 + _() * 0.6);
    s.box(`curtain`, c, t, n + l, r - l, a - e, a - l, f - 0.05, f - 0.04);
  }
  if (
    (o.sillMat &&
      s.box(o.sillMat, c, t, n - 0.08, r + 0.08, i - 0.07, i, -u, 0.07),
    o.header)
  ) {
    let e = o.headerH || 0.24;
    (s.box(o.header, c, t, n - 0.12, r + 0.12, a, a + e, -0.02, 0.04),
      o.keystone &&
        s.box(
          o.header,
          c,
          t,
          (n + r) / 2 - 0.11,
          (n + r) / 2 + 0.11,
          a - 0.06,
          a + e + 0.07,
          -0.02,
          0.08,
        ));
  }
  if (o.casing) {
    let e = 0.11,
      l = 0.035;
    (s.box(o.casing, c, t, n - e, n, i, a, -0.01, l),
      s.box(o.casing, c, t, r, r + e, i, a, -0.01, l),
      s.box(
        o.casing,
        c,
        t,
        n - e - 0.04,
        r + e + 0.04,
        a,
        a + 0.17,
        -0.01,
        0.05,
      ),
      s.box(
        o.casing,
        c,
        t,
        n - e - 0.05,
        r + e + 0.05,
        a + 0.17,
        a + 0.21,
        -0.01,
        0.085,
      ),
      s.box(
        o.casing,
        c,
        t,
        n - e - 0.05,
        r + e + 0.05,
        i - 0.06,
        i,
        -u,
        0.085,
      ));
  }
  if (o.shutter) {
    let e = (r - n) / 2 - 0.02;
    (s.box(o.shutter, c, t, n - 0.13 - e, n - 0.13, i, a, 0.01, 0.045),
      s.box(o.shutter, c, t, r + 0.13, r + 0.13 + e, i, a, 0.01, 0.045));
  }
}
function me(e, t, n, r, i, a) {
  let { K: o, M: s, S: c } = e,
    l = c.store.frame,
    u = -0.28,
    d = -0.2,
    f = 0.55,
    p = a - 0.6,
    m = (n + r) / 2;
  (o.box(l, s, t, n, r, i, i + f, -0.32, d),
    o.box(
      l,
      s,
      t,
      n + 0.12,
      r - 0.12,
      i + 0.12,
      i + f - 0.12,
      d,
      -0.18000000000000002,
    ),
    o.box(l, s, t, n, r, i + f, i + f + 0.08, u, -0.19),
    o.box(l, s, t, n, r, p - 0.05, p + 0.05, u, d),
    o.box(l, s, t, n, r, a - 0.07, a, u, d),
    o.box(l, s, t, n, n + 0.09, i, a, u, d),
    o.box(l, s, t, r - 0.09, r, i, a, u, d),
    o.box(l, s, t, m - 0.04, m + 0.04, i + f, p, u, d),
    o.box(j(t, !0), s, t, n, r, i + f, a, -0.25, -0.23500000000000004));
  for (let e = 1; e < 4; e++) {
    let i = n + ((r - n) * e) / 4;
    o.box(l, s, t, i - 0.025, i + 0.025, p, a, u, -0.21000000000000002);
  }
  let h = P(t * 13 + 5);
  o.box(
    `wood`,
    s,
    t,
    n + 0.1,
    r - 0.1,
    i + f - 0.02,
    i + f + 0.03,
    -0.98,
    -0.30000000000000004,
  );
  for (let e = n + 0.25; e < r - 0.35; e += 0.25 + h() * 0.35) {
    let n = 0.15 + h() * 0.2,
      r = 0.15 + h() * 0.45;
    o.box(
      h() < 0.5 ? `curtain` : `woodDoor`,
      s,
      t,
      e,
      e + n,
      i + f + 0.03,
      i + f + 0.03 + r,
      -0.78,
      -0.48000000000000004,
    );
  }
  o.box(
    c.store.fascia || l,
    s,
    t,
    n - 0.2,
    r + 0.2,
    a + 0.12,
    a + 0.68,
    -0.01,
    0.07,
  );
}
function he(e, n, r, i, a) {
  let { K: o, M: s, S: c } = e,
    l = c.awning,
    u = l.depth || 1.4,
    d = l.drop || 0.7,
    f = Math.hypot(u, d),
    p = Math.atan2(d, u);
  (o.add(
    l.mat,
    new t(i - r, 0.03, f).rotateX(p).translate((r + i) / 2, a - d / 2, u / 2),
    s,
    n,
    { planar: (e, t, n) => [e, n * 0.5] },
  ),
    o.box(l.mat, s, n, r, i, a - d - 0.28, a - d + 0.01, u - 0.015, u + 0.015, {
      planar: (e, t) => [e, t],
    }));
  for (let e of [r + 0.03, i - 0.03])
    o.add(
      `ironDark`,
      new t(0.035, 0.035, f).rotateX(p).translate(e, a - d / 2 - 0.035, u / 2),
      s,
      n,
    );
}
function ge(e, t, n, r, i, a, o, s = !1) {
  let { K: c, M: l, S: u } = e,
    d = u.door || D,
    f = s ? { ...d, open: !0, step: null } : d,
    p = f.frame || u.win?.frame || `trimWhite`,
    m = f.rec ?? 0.2,
    h = a - o,
    g = -m - 0.1,
    _ = -m + 0.02;
  (c.box(p, l, t, n, n + 0.08, i, a, g, _),
    c.box(p, l, t, r - 0.08, r, i, a, g, _),
    c.box(p, l, t, n, r, a - 0.07, a, g, _),
    o > 0 &&
      !f.open &&
      (c.box(p, l, t, n, r, h - 0.05, h + 0.05, g, _),
      c.box(`glass`, l, t, n, r, h, a, -m - 0.06, -m - 0.045)));
  let v = f.mat || `woodDoor`,
    y = f.open ? 0 : r - n > 1.5 ? 2 : 1,
    b = (r - n - 0.16) / Math.max(1, y);
  for (let e = 0; e < y; e++) {
    let r = n + 0.08 + e * b,
      a = r + b,
      o = h - 0.05 - i;
    (c.box(v, l, t, r, a, i, h - 0.05, -m - 0.08, -m - 0.03),
      f.glazed
        ? c.box(
            `glass`,
            l,
            t,
            r + 0.12,
            a - 0.12,
            i + o * 0.45,
            h - 0.2,
            -m - 0.036,
            -m - 0.02,
          )
        : c.box(
            v,
            l,
            t,
            r + 0.12,
            a - 0.12,
            i + o * 0.52,
            h - 0.2,
            -m - 0.03,
            -m - 0.005,
          ),
      c.box(
        v,
        l,
        t,
        r + 0.12,
        a - 0.12,
        i + 0.2,
        i + o * 0.42,
        -m - 0.03,
        -m - 0.005,
      ));
    let s = y === 1 ? a - 0.14 : e === 0 ? a - 0.1 : r + 0.06;
    c.box(`brass`, l, t, s, s + 0.045, i + 1, i + 1.07, -m - 0.03, -m + 0.03);
  }
  if (
    (i < 0.01 &&
      !f.open &&
      !s &&
      c.box(f.step || `concrete`, l, t, n - 0.3, r + 0.3, 0, 0.16, -m, 0.5),
    f.hood)
  ) {
    c.box(f.hood, l, t, n - 0.3, r + 0.3, a + 0.08, a + 0.34, -0.02, 0.28);
    for (let e of [n - 0.2, r + 0.2])
      c.box(f.hood, l, t, e - 0.07, e + 0.07, a - 0.4, a + 0.08, -0.02, 0.22);
  }
}
function _e(e, n, r, i, a, o) {
  let { K: s, M: c, S: l } = e,
    u = l.loading;
  if (u.type === `rollup`) {
    (s.box(`rollup`, c, n, r, i, a, o, -0.25, -0.2),
      s.box(
        `ironDark`,
        c,
        n,
        r - 0.05,
        i + 0.05,
        o - 0.05,
        o + 0.45,
        -0.1,
        0.25,
      ));
    for (let e of [r, i - 0.08])
      s.box(`ironDark`, c, n, e, e + 0.08, a, o, -0.3, -0.12);
    if (u.dock !== !1) {
      s.box(`concrete`, c, n, r - 0.4, i + 0.4, 0, 0.9, 0, 1.6);
      for (let e of [r - 0.3, i + 0.1])
        s.box(`ironDark`, c, n, e, e + 0.2, 0.2, 0.85, 1.6, 1.75);
    }
    return;
  }
  if (u.type === `fire`) {
    let e = (i - r) / 2,
      t = o - a,
      l = u.mat,
      d = u.trim;
    (s.box(d, c, n, r - 0.12, r, a, o + 0.12, -0.05, 0.05),
      s.box(d, c, n, i, i + 0.12, a, o + 0.12, -0.05, 0.05),
      s.box(d, c, n, r - 0.12, i + 0.12, o, o + 0.12, -0.05, 0.05));
    for (let i = 0; i < 2; i++) {
      let u = r + i * e,
        d = u + e,
        f = a + t * 0.62,
        p = a + t * 0.88;
      (s.box(l, c, n, u + 0.01, d - 0.01, a, f, -0.12, -0.06),
        s.box(l, c, n, u + 0.01, d - 0.01, p, o, -0.12, -0.06),
        s.box(l, c, n, u + 0.01, u + 0.1, f, p, -0.12, -0.06),
        s.box(l, c, n, d - 0.1, d - 0.01, f, p, -0.12, -0.06),
        s.box(`glass`, c, n, u + 0.1, d - 0.1, f, p, -0.1, -0.09));
      for (let t = 1; t < 3; t++) {
        let r = u + 0.1 + ((e - 0.2) * t) / 3;
        s.box(l, c, n, r - 0.03, r + 0.03, f, p, -0.11, -0.07);
      }
      for (let [e, r] of [
        [a + 0.2, a + t * 0.3],
        [a + t * 0.34, f - 0.15],
      ])
        s.box(l, c, n, u + 0.18, d - 0.18, e, r, -0.06, -0.03);
      s.box(
        `brass`,
        c,
        n,
        i ? u + 0.08 : d - 0.12,
        i ? u + 0.12 : d - 0.08,
        a + 1,
        a + 1.4,
        -0.06,
        -0.01,
      );
    }
    return;
  }
  let d = (i - r) / 2,
    f = o - a,
    p = u.mat,
    m = u.trim;
  for (let e = 0; e < 2; e++) {
    let i = r + e * d,
      l = i + d,
      u = -0.02;
    (s.box(p, c, n, i + 0.01, l - 0.01, a, o, -0.08, u),
      s.box(m, c, n, i, i + 0.14, a, o, u, 0.02),
      s.box(m, c, n, l - 0.14, l, a, o, u, 0.02),
      s.box(m, c, n, i, l, o - 0.14, o, u, 0.02),
      s.box(m, c, n, i, l, a, a + 0.14, u, 0.02),
      s.box(m, c, n, i, l, a + f / 2 - 0.07, a + f / 2 + 0.07, u, 0.02));
    for (let [r, u] of [
      [a + 0.14, a + f / 2 - 0.07],
      [a + f / 2 + 0.07, o - 0.14],
    ]) {
      let a = d - 0.28,
        o = u - r,
        f = Math.hypot(a, o),
        p = Math.atan2(o, a) * (e ? -1 : 1);
      s.add(
        m,
        new t(f - 0.05, 0.13, 0.035)
          .rotateZ(p)
          .translate((i + l) / 2, (r + u) / 2, 0),
        c,
        n,
      );
    }
  }
  s.box(`ironDark`, c, n, r - 0.4, i + 0.4, o + 0.06, o + 0.16, 0, 0.09);
  for (let e of [r + 0.3, i - 0.35])
    s.box(`ironDark`, c, n, e, e + 0.05, o - 0.12, o + 0.1, 0.02, 0.07);
}
function ve(e, t) {
  let { K: n, M: r, S: i } = e,
    { u0: a, u1: o, y0: s, y1: c, kind: l, cell: u, wallMat: d, f } = t,
    p = o - a,
    m = c - s,
    h = (a + o) / 2,
    g = (f === 0 && i.win0) || i.win;
  if (l === `window`) {
    let i = Math.min(g.w, p - 0.5),
      a = Math.min(g.h, m - g.sill - 0.35),
      o = s + g.sill,
      l = h - i / 2,
      d = h + i / 2;
    if (g.panel) {
      q(e, t, l, d, s, c);
      let i = g.rec ?? 0.12;
      (n.box(g.panel, r, u, l, d, s, o, -i - 0.05, -i + 0.02),
        n.box(g.panel, r, u, l, d, o + a, c, -i - 0.05, -i + 0.02),
        n.box(
          g.panel,
          r,
          u,
          l + 0.12,
          d - 0.12,
          s + 0.15,
          o - 0.15,
          -i + 0.02,
          -i + 0.05,
        ));
    } else q(e, t, l, d, o, o + a);
    g.arch ? ye(e, t, l, d, o, o + a, g) : J(e, u, l, d, o, o + a, g);
  } else if (l === `curtain` || l === `ribbon`) be(e, t, l === `ribbon`);
  else if (l === `lobby` || l === `lobbyDoor`) xe(e, t, l === `lobbyDoor`);
  else if (l === `recess`) Se(e, t);
  else if (l === `balcony`) {
    let n = i.balcony,
      r = Math.min(n.w, p - 0.6),
      c = h - r / 2,
      l = h + r / 2,
      d = s + 0.03,
      f = d + n.h;
    (q(e, t, c, l, d, f),
      J(e, u, c, l, d, f, {
        ...g,
        type: `grid`,
        lites: [2, 1],
        sillMat: null,
        header: null,
        casing: null,
        shutter: null,
        curtains: 0.7,
      }),
      Ce(e, u, a, o, s, n));
  } else if (l === `store`) {
    let n = 0.3,
      r = c - 0.95;
    (q(e, t, a + n, o - n, s, r),
      me(e, u, a + n, o - n, s, r),
      i.awning && he(e, u, a + n - 0.05, o - n + 0.05, r + 0.1));
  } else if (l === `door`) {
    let n = i.door || D,
      r = O && t.walk,
      a = n.w || 1.2,
      o = n.transom ?? 0.5,
      c = Math.min((n.h || 2.4) + o, m - 0.5);
    (r &&
      ((a = Math.min(Math.max(a, E.w), p - 0.3)),
      (c = Math.min(Math.max(c, E.h + o * 0.5), m - 0.2)),
      (o = Math.min(o, c - E.h)),
      ne(t.M, h, s, a, c - Math.max(0, o), t.t)),
      q(e, t, h - a / 2, h + a / 2, s, s + c),
      ge(e, u, h - a / 2, h + a / 2, s, s + c, o, r));
  } else if (l === `loading`) {
    let n = Math.min(p - 0.6, i.loading.w || 3.4),
      r = Math.min(m - 0.5, i.loading.h || 3.6);
    (q(e, t, h - n / 2, h + n / 2, s, s + r),
      _e(e, u, h - n / 2, h + n / 2, s, s + r));
  } else n.box(d, r, u, a, o, s, c, -t.t, 0);
}
function ye(e, n, r, i, a, o, s) {
  let { K: c, M: l } = e,
    { cell: u, wallMat: d, t: f } = n,
    p = (i - r) / 2,
    m = (r + i) / 2,
    h = Math.min(s.arch, p),
    g = o - h,
    _ = (p * p + h * h) / (2 * h),
    v = o - _,
    x = Math.atan2(g - v, p),
    S = s.rec ?? 0.12,
    C = s.ringW ?? 0.22;
  J(e, u, r, i, a, g, {
    ...s,
    header: null,
    keystone: !1,
    casing: null,
    sillMat: null,
  });
  let w = (e, t, n, r) =>
    c.add(
      t,
      new y(e, { depth: r - n, bevelEnabled: !1, curveSegments: 8 }).translate(
        0,
        0,
        n,
      ),
      l,
      u,
    );
  for (let e of [-1, 1]) {
    let t = new b();
    (t.moveTo(m + e * p, g),
      t.lineTo(m + e * p, o),
      t.lineTo(m, o),
      e > 0
        ? t.absarc(m, v, _, Math.PI / 2, x, !0)
        : t.absarc(m, v, _, Math.PI / 2, Math.PI - x, !1),
      w(t, d, -f, 0));
  }
  let T = new b();
  (T.moveTo(r, g),
    T.lineTo(i, g),
    T.absarc(m, v, _, x, Math.PI - x, !1),
    w(T, `glass`, -S - 0.055, -S - 0.04));
  let E = s.frame,
    D = s.frameW || 0.07;
  c.box(E, l, u, r, i, g - D / 2, g + D / 2, -S - 0.07, -S);
  for (let e of [-1, 0, 1]) {
    let n = e * (Math.PI / 2 - x) * 0.55,
      r = _ - 0.03,
      i = Math.max(0, g - v);
    c.add(
      E,
      new t(0.035, r - i, 0.05)
        .translate(0, (r + i) / 2, 0)
        .rotateZ(n)
        .translate(m, v, -S - 0.035),
      l,
      u,
    );
  }
  if (s.archMat) {
    let e = Math.atan2(g - v, p + C),
      t = new b();
    (t.moveTo(m + p, g),
      t.absarc(m, v, _, x, Math.PI - x, !1),
      t.lineTo(m - p - C, g),
      t.absarc(m, v, _ + C, Math.PI - e, e, !0),
      w(t, s.archMat, -0.02, 0.05),
      s.keystone &&
        c.box(
          s.archMat,
          l,
          u,
          m - 0.13,
          m + 0.13,
          o - 0.05,
          o + C + 0.08,
          -0.02,
          0.09,
        ));
  }
  s.sillMat &&
    c.box(s.sillMat, l, u, r - 0.08, i + 0.08, a - 0.07, a, -S, 0.07);
}
function be(e, t, n) {
  let { K: r, M: i, S: a } = e,
    { u0: o, u1: s, y0: c, y1: l, cell: u, t: d, b: f, nb: p } = t,
    m = n ? a.ribbon : a.curtain,
    h = Math.max(1, Math.round((s - o) / (m.module || 1.5))),
    g = m.mw || 0.06,
    _ = n ? -0.14 : -0.1,
    v = m.sill ?? 0.9,
    y = m.head ?? 0.5;
  (n
    ? (r.box(m.spandrel, i, u, o, s, c, c + v, -d, 0),
      r.box(m.spandrel, i, u, o, s, l - y, l, -d, 0))
    : (r.box(m.spandrel, i, u, o, s, c, c + v, _ - 0.12, _),
      r.box(m.spandrel, i, u, o, s, l - y, l, _ - 0.12, _)),
    r.box(m.glass, i, u, o, s, c + v, l - y, _ - 0.12, _ - 0.1));
  let b = P(u * 3 + 11);
  b() < 0.55 &&
    r.box(
      `curtain`,
      i,
      u,
      o + 0.05,
      s - 0.05,
      l - y - (l - y - c - v) * (0.15 + b() * 0.7),
      l - y,
      _ - 0.2,
      _ - 0.19,
    );
  for (let e = 0; e <= h; e++) {
    if (e === h && f !== p - 1) continue;
    let t = o + ((s - o) * e) / h,
      a = e === 0 || e === h ? g : g * 0.75;
    r.box(
      m.mullion,
      i,
      u,
      t - a / 2,
      t + a / 2,
      n ? c + v : c,
      n ? l - y : l,
      _ - 0.12,
      m.fin ?? 0.08,
    );
  }
  for (let e of [c + v, l - y])
    r.box(
      m.mullion,
      i,
      u,
      o,
      s,
      e - 0.03,
      e + 0.03,
      _ - 0.12,
      n ? 0.01 : (m.transomOut ?? 0.02),
    );
}
function xe(e, n, r) {
  let { K: i, M: a, S: o } = e,
    { u0: s, u1: c, y0: l, y1: u, cell: d, t: f, b: p, nb: m } = n,
    h = o.lobby,
    g = u - (h.head ?? 1),
    _ = -(h.rec ?? 0.6);
  (i.box(h.headMat || o.wall, a, d, s, c, g, u, -f, 0),
    i.box(
      h.headMat || o.wall,
      a,
      d,
      s,
      c,
      g - 0.03,
      g,
      Math.min(_, -f) - 0.1,
      0,
    ),
    i.box(h.glass, a, d, s, c, l, g, _ - 0.02, _));
  let v = Math.max(1, Math.round((c - s) / 1.5));
  for (let e = 0; e <= v; e++) {
    let t = s + ((c - s) * e) / v;
    i.box(h.frame, a, d, t - 0.04, t + 0.04, l, g, _ - 0.05, _ + 0.08);
  }
  if (
    (i.box(h.frame, a, d, s, c, l, l + 0.15, _ - 0.05, _ + 0.05),
    i.box(h.frame, a, d, s, c, l + 3.2, l + 3.28, _ - 0.05, _ + 0.06),
    i.box(h.column, a, d, p === 0 ? s : s - 0.3, s + 0.3, l, g, -f - 0.2, 0.06),
    p === m - 1 && i.box(h.column, a, d, c - 0.3, c, l, g, -f - 0.2, 0.06),
    r)
  ) {
    let e = (s + c) / 2;
    (i.box(h.frame, a, d, e - 1.1, e + 1.1, l, l + 2.5, _ + 0.02, _ + 0.1),
      i.box(
        `glass`,
        a,
        d,
        e - 1,
        e - 0.04,
        l + 0.1,
        l + 2.4,
        _ + 0.1,
        _ + 0.12,
      ),
      i.box(
        `glass`,
        a,
        d,
        e + 0.04,
        e + 1,
        l + 0.1,
        l + 2.4,
        _ + 0.1,
        _ + 0.12,
      ));
    for (let t of [e - 0.15, e + 0.12])
      i.box(
        `aluminum`,
        a,
        d,
        t,
        t + 0.03,
        l + 0.8,
        l + 1.6,
        _ + 0.12,
        _ + 0.17,
      );
    if (h.canopy) {
      i.box(h.canopy, a, d, s - 0.2, c + 0.2, l + 3.6, l + 3.85, _, 3.2);
      for (let e of [s + 0.3, c - 0.3])
        i.add(
          h.frame,
          new t(0.04, 0.04, 3.6).rotateX(-0.42).translate(e, l + 4.6, 1.6),
          a,
          d,
        );
    }
  }
}
function Se(e, t) {
  let { K: n, M: r, S: i } = e,
    { u0: a, u1: o, y0: s, y1: c, cell: l, b: u, nb: d } = t,
    f = i.recess,
    p = f.depth,
    m = c - 0.6;
  (n.box(i.wall, r, l, a, o, m, c, -p, 0),
    n.box(f.glass, r, l, a, o, s, m, -p - 0.02, -p));
  let h = Math.max(1, Math.round((o - a) / 1.5));
  for (let e = 0; e <= h; e++) {
    let t = a + ((o - a) * e) / h;
    n.box(f.frame, r, l, t - 0.04, t + 0.04, s, m, -p, -p + 0.1);
  }
  (n.box(
    i.wall,
    r,
    l,
    u === 0 ? a : a - 0.4,
    u === 0 ? a + 0.8 : a + 0.4,
    s,
    m,
    -0.9,
    0,
  ),
    u === d - 1 && n.box(i.wall, r, l, o - 0.8, o, s, m, -0.9, 0),
    u === 0 && n.box(i.wall, r, l, a, a + 0.3, s, m, -p, 0),
    u === d - 1 && n.box(i.wall, r, l, o - 0.3, o, s, m, -p, 0));
}
function Ce(e, t, n, r, i, a) {
  let { K: o, M: s } = e,
    c = n + 0.12,
    l = r - 0.12,
    u = a.depth,
    d = a.railMat || `ironDark`;
  (o.box(a.slab, s, t, c, l, i - 0.2, i + 0.04, 0, u),
    o.box(d, s, t, c, l, i + 1.02, i + 1.07, u - 0.06, u));
  for (let e of [c, l - 0.05])
    o.box(d, s, t, e, e + 0.05, i + 1.02, i + 1.07, 0, u);
  if (a.rail === `glass`) {
    o.box(
      `railGlass`,
      s,
      t,
      c + 0.03,
      l - 0.03,
      i + 0.1,
      i + 1.02,
      u - 0.05,
      u - 0.03,
    );
    for (let e of [c + 0.02, l - 0.04])
      o.box(`railGlass`, s, t, e, e + 0.02, i + 0.1, i + 1.02, 0, u - 0.05);
  } else {
    for (let e = c + 0.1; e < l - 0.06; e += 0.19)
      o.box(
        d,
        s,
        t,
        e - 0.015,
        e + 0.015,
        i + 0.04,
        i + 1.02,
        u - 0.045,
        u - 0.015,
      );
    for (let e of [c, l - 0.05])
      for (let n = 0.2; n < u - 0.08; n += 0.19)
        o.box(
          d,
          s,
          t,
          e + 0.01,
          e + 0.04,
          i + 0.04,
          i + 1.02,
          n - 0.015,
          n + 0.015,
        );
  }
}
function we(e, t, n, r, i, a) {
  let { K: o, M: s, S: c } = e,
    l = c.cornice,
    u = c.t;
  if (l.type === `corbel`) {
    for (let e = 0; e < 3; e++) {
      let c = 0.05 + e * 0.06,
        [d, f] = a(t, n, c);
      o.box(
        l.mat,
        s,
        i,
        d,
        f,
        r - l.h + (e * l.h) / 3,
        r - l.h + ((e + 1) * l.h) / 3,
        -u,
        c,
      );
    }
    let e = Math.max(1, Math.round((n - t) / 0.5)),
      c = (n - t) / e;
    for (let n = 0; n < e; n++)
      o.box(
        l.mat,
        s,
        i,
        t + n * c + c * 0.3,
        t + (n + 1) * c - c * 0.3,
        r - l.h - 0.3,
        r - l.h,
        -u,
        0.08,
      );
  } else {
    let [e, c] = a(t, n, l.out);
    if (
      (o.box(l.mat, s, i, e, c, r - l.h, r, -u, l.out),
      ([e, c] = a(t, n, l.out * 0.5)),
      o.box(l.mat, s, i, e, c, r - l.h - 0.14, r - l.h, -u, l.out * 0.5),
      l.dentils)
    ) {
      let e = Math.max(1, Math.round((n - t) / 0.26)),
        a = (n - t) / e;
      for (let n = 0; n < e; n++)
        o.box(
          l.mat,
          s,
          i,
          t + n * a + 0.045,
          t + (n + 1) * a - 0.045,
          r - l.h - 0.34,
          r - l.h - 0.14,
          -u,
          l.out * 0.36,
        );
    }
    if (l.brackets)
      for (let e of [t + 0.35, n - 0.35])
        o.box(
          l.mat,
          s,
          i,
          e - 0.1,
          e + 0.1,
          r - l.h - 0.62,
          r - l.h,
          -u,
          l.out * 0.85,
        );
  }
  if (l.cap) {
    let e = (l.type === `corbel` ? 0.2 : l.out) + 0.04,
      [c, d] = a(t, n, e);
    o.box(l.cap, s, i, c, d, r, r + 0.1, -u - 0.02, e);
  }
}
function Y(e, t, n, r, i = {}) {
  let a = i.fo || 0,
    o = r.t,
    s = Math.max(1, Math.round(n / (i.bay || r.bay))),
    c = n / s,
    l = r.floors,
    d = l.length - 1,
    f = { K: e, M: t, S: r },
    [p, m] = Array.isArray(i.ends) ? i.ends : [i.ends, i.ends],
    h = (e, t) => (n, r, i) => [
      e === 0 && p ? n - i : n,
      e === t - 1 && m ? r + i : r,
    ],
    g = [],
    _ = [],
    v = 0,
    x = O && (i.side === `front` || i.side === `back`),
    S = !1;
  for (let u = 0; u < l.length; u++) {
    let p = l[u],
      m = r.floorMat?.[a + u] || r.wall,
      y = [],
      b = (u === d && r.parapet) || 0;
    _.push(v);
    let C = (e) =>
        i.kinds ? i.kinds(a + u, e, s) : a + u === 0 ? `solid` : `window`,
      w = -1;
    if (x && a + u === O.floor) {
      for (let e = 0; e < s && w < 0; e++)
        C(e) === `door` && c >= E.w + 0.3 && (w = e);
      w < 0 && c >= E.w + 0.3 && (w = Math.floor(s / 2));
    }
    for (let l = 0; l < s; l++) {
      let g = l * c,
        _ = g + c,
        E = h(l, s),
        D = l === w ? `door` : C(l);
      (x && a + u === O.floor && D === `door` && l !== w && (D = `solid`),
        T.allWindows &&
          !ee.has(D) &&
          ((a + u === 0 && r.win0) || r.win) &&
          c >= 1.4 &&
          p >= 2.4 &&
          (D = `window`));
      let k = e.cell(t, [(g + _) / 2, v + p / 2, -o / 2], m);
      y.push(k);
      let A = i.gableDoor,
        j = A && n / 2 - A.w / 2,
        M = A && n / 2 + A.w / 2;
      if (A && v < A.h && g < M && _ > j) {
        (S || ((S = !0), A.record !== !1 && re(t, n / 2, 0, A.w, A.h, o)),
          g < j && e.box(m, t, k, g, j, v, v + p, -o, 0),
          _ > M && e.box(m, t, k, M, _, v, v + p, -o, 0));
        continue;
      }
      if (
        (ve(f, {
          u0: g,
          u1: _,
          y0: v,
          y1: v + p,
          f: a + u,
          kind: D,
          cell: k,
          wallMat: m,
          t: o,
          b: l,
          nb: s,
          M: t,
          walk: l === w,
        }),
        b && e.box(r.parapetMat || m, t, k, g, _, v + p, v + p + b, -o, 0),
        a + u === 0 && r.base && (D === `window` || D === `solid`))
      ) {
        let [n, i] = E(g, _, r.base.out);
        e.box(r.base.mat, t, k, n, i, 0, r.base.h, -o, r.base.out);
      }
      if (u > 0 && r.belt) {
        let [n, i] = E(g, _, r.belt.out);
        e.box(
          r.belt.mat,
          t,
          k,
          n,
          i,
          v - r.belt.h / 2,
          v + r.belt.h / 2,
          -o,
          r.belt.out,
        );
      }
      let N = r.pilaster;
      if (N && !i.noPilaster && (!N.floors || N.floors.includes(a + u))) {
        let n = v + p + (N.through ? b : 0),
          r = N.w,
          [i, a] = E(g, _, N.out);
        (e.box(
          N.mat,
          t,
          k,
          l === 0 ? i : g - r / 2,
          l === 0 ? g + r : g + r / 2,
          v,
          n,
          -o,
          N.out,
        ),
          l === s - 1 && e.box(N.mat, t, k, _ - r, a, v, n, -o, N.out));
      }
      if (r.corners && (l === 0 || l === s - 1)) {
        let n = 0.17;
        e.box(
          r.corners,
          t,
          k,
          l === 0 ? g : _ - n,
          l === 0 ? g + n : _,
          v,
          v + p,
          -o,
          0.035,
        );
      }
      (u === d && r.cornice && we(f, g, _, v + p + b, k, E),
        u === d &&
          r.eaveTrim &&
          e.box(r.eaveTrim, t, k, g, _, v + p - 0.28, v + p, -o, 0.04));
    }
    (g.push(y), (v += p));
  }
  let C = v,
    w = { L: n, nb: s, bw: c, grid: g, ys: _, H: C, t: o, top: d };
  if (i.gable?.h) {
    let { h: a, lip: s = 0 } = i.gable,
      c = i.gableDoor,
      l = c && n / 2 - c.w / 2,
      d = c && n / 2 + c.w / 2,
      f = (e) => C + s + (a - s) * (1 - Math.abs(e - n / 2) / (n / 2)),
      p = (e) => e.map(([e, t]) => new u(e, t)),
      m =
        c && c.h > C
          ? c.h < f(l)
            ? [
                p([
                  [0, C],
                  [l, C],
                  [l, c.h],
                  [d, c.h],
                  [d, C],
                  [n, C],
                  [n, C + s],
                  [n / 2, C + a],
                  [0, C + s],
                ]),
              ]
            : [
                p([
                  [0, C],
                  [l, C],
                  [l, f(l)],
                  [0, C + s],
                ]),
                p([
                  [d, C],
                  [n, C],
                  [n, C + s],
                  [d, f(d)],
                ]),
              ]
          : [
              p([
                [0, C],
                [n, C],
                [n, C + s],
                [n / 2, C + a],
                [0, C + s],
              ]),
            ],
      h = e.cell(t, [n / 2, C + a / 3, -o / 2], r.wall);
    if (c) {
      for (let n of [l - 0.1, d])
        e.box(
          r.gableDoorTrim || r.wall,
          t,
          h,
          n,
          n + 0.1,
          0,
          c.h + 0.1,
          -o - 0.02,
          0.06,
        );
      e.box(
        r.gableDoorTrim || r.wall,
        t,
        h,
        l - 0.1,
        d + 0.1,
        c.h,
        c.h + 0.12,
        -o - 0.02,
        0.06,
      );
    }
    for (let n of m)
      e.add(
        r.wall,
        new y(new b(n), { depth: o, bevelEnabled: !1 }).translate(0, 0, -o),
        t,
        h,
      );
    w.gableCell = h;
  }
  for (let n of i.signs || []) Te(e, t, w, r, n);
  return (i.extra?.(e, t, w), w);
}
function Te(e, t, n, r, i) {
  let [a, o, s, c] = i.rect,
    l = r.parapet || 0;
  for (let u = 0; u < n.grid.length; u++) {
    let d = n.ys[u],
      f = u === n.top ? 1 / 0 : n.ys[u] + r.floors[u];
    for (let r = 0; r < n.nb; r++) {
      let p = Math.max(r * n.bw, a),
        m = Math.min((r + 1) * n.bw, o),
        h = Math.max(d, s),
        g = Math.min(f, c);
      if (m - p < 0.001 || g - h < 0.001) continue;
      let _ = h >= n.H + l - 0.001 && n.gableCell ? n.gableCell : n.grid[u][r];
      e.box(i.mat, t, _, p, m, h, g, i.z0 ?? 0, i.z1 ?? 0.05, {
        planar: (e, t) => [(e - a) / (o - a), (t - s) / (c - s)],
      });
    }
  }
}
var X = (e, t, n, r) =>
  e
    .clone()
    .multiply(new s().makeTranslation(t, 0, n))
    .multiply(new s().makeRotationY(r));
function Z(e, n, r, i, a, o, c = !1) {
  let l = r.roof,
    u = l.ridge === `z`,
    d = u ? a : i,
    f = u ? i : a,
    p = l.pitch,
    m = l.over,
    h = 0.14,
    g = n.clone().multiply(new s().makeRotationY(u ? Math.PI / 2 : 0)),
    _ = o + (f / 2) * Math.tan(p),
    v = (f / 2 + m) / Math.cos(p),
    y = u;
  for (let n of [1, -1]) {
    let r = new x(0, -Math.sin(p), n * Math.cos(p)),
      i = new x(0, Math.cos(p), n * Math.sin(p)),
      a = new x(0, _, 0).addScaledVector(r, v / 2).addScaledVector(i, h / 2);
    if (!c)
      e.add(
        l.mat,
        new t(d + 2 * m, h, v).rotateX(n * p).translate(a.x, a.y, a.z),
        g,
        0,
        { swap: y },
      );
    else {
      let a = Math.max(1, Math.round((d + 2 * m) / Q)),
        s = Math.max(1, Math.round(v / Q)),
        c = (d + 2 * m) / a,
        u = v / s,
        f = new x(0, o, 0).applyMatrix4(g).y;
      for (let o = 0; o < a; o++)
        for (let a = 0; a < s; a++) {
          let s = -d / 2 - m + (o + 0.5) * c,
            v = new x(0, _, 0)
              .addScaledVector(r, (a + 0.5) * u)
              .addScaledVector(i, h / 2),
            b = e.cell(g, [s, v.y, v.z], l.mat);
          ((w[b].deckY = f),
            e.add(
              l.mat,
              new t(c, h, u).rotateX(n * p).translate(s, v.y, v.z),
              g,
              b,
              { swap: y },
            ));
        }
    }
    let s = o - m * Math.tan(p),
      u = n * (f / 2 + m);
    e.box(
      l.fascia,
      g,
      0,
      -d / 2 - m,
      d / 2 + m,
      s - 0.2,
      s + 0.06,
      u - 0.03,
      u + 0.04,
    );
    for (let a of [-d / 2 - m, d / 2 + m]) {
      let o = new x(a, _, 0)
        .addScaledVector(r, v / 2)
        .addScaledVector(i, -0.02);
      e.add(
        l.fascia,
        new t(0.05, 0.26, v).rotateX(n * p).translate(o.x, o.y, o.z),
        g,
        0,
      );
    }
    l.gutter &&
      e.box(
        `ironDark`,
        g,
        0,
        -d / 2 - m,
        d / 2 + m,
        s - 0.16,
        s - 0.04,
        u + 0.04,
        u + 0.16,
      );
  }
  return (
    e.box(
      l.ridgeMat || l.fascia,
      g,
      0,
      -d / 2 - m,
      d / 2 + m,
      _ + 0.02,
      _ + 0.2,
      -0.12,
      0.12,
    ),
    _
  );
}
function Ee(e, t, n, r, i, a, o = !1, s = null) {
  let c = n.t,
    l = o
      ? $(
          e,
          `tarRoof`,
          t,
          -r / 2 + c,
          r / 2 - c,
          -i / 2 + c,
          i / 2 - c,
          a - 0.25,
          a + 0.02,
          a,
          null,
          s,
        )
      : (e.box(
          `tarRoof`,
          t,
          0,
          -r / 2 + c,
          r / 2 - c,
          a - 0.25,
          a + 0.02,
          -i / 2 + c,
          i / 2 - c,
        ),
        () => 0),
    u = P(r * 13 + i);
  for (let n = 0; n < 3; n++) {
    let o = (u() - 0.5) * (r - 3),
      s = (u() - 0.5) * (i - 3),
      c = 0.4 + u() * 0.5;
    e.box(
      n ? `ironDark` : `concrete`,
      t,
      l(o, s),
      o - c,
      o + c,
      a,
      a + 0.5 + u() * 0.5,
      s - c,
      s + c,
    );
  }
}
var Q = 3;
function $(e, t, n, r, i, a, o, s, c, l, d = null, f = null) {
  let p = Math.max(1, Math.round((i - r) / Q)),
    m = Math.max(1, Math.round((o - a) / Q)),
    h = (i - r) / p,
    g = (o - a) / m,
    _ = [],
    v = new x(0, l, 0).applyMatrix4(n).y;
  if (f?.length && !d) return De(e, t, n, r, i, a, o, s, c, v, f, p, m);
  for (let i = 0; i < p; i++)
    for (let o = 0; o < m; o++) {
      let l = r + i * h,
        f = l + h,
        p = a + o * g,
        m = p + g,
        x = [
          [l, p],
          [f, p],
          [f, m],
          [l, m],
        ];
      if ((d && (x = Oe(x, d)), x.length < 3)) {
        _.push(0);
        continue;
      }
      let S = x.reduce((e, t) => e + t[0], 0) / x.length,
        C = x.reduce((e, t) => e + t[1], 0) / x.length,
        T = e.cell(n, [S, c, C], t);
      ((w[T].deckY = v),
        d
          ? e.add(
              t,
              new y(new b(x.map(([e, t]) => new u(e, -t))), {
                depth: c - s,
                bevelEnabled: !1,
              })
                .rotateX(-Math.PI / 2)
                .translate(0, s, 0),
              n,
              T,
            )
          : e.box(t, n, T, l, f, s, c, p, m),
        _.push(T));
    }
  return (e, t) =>
    _[
      Math.min(p - 1, Math.max(0, Math.floor((e - r) / h))) * m +
        Math.min(m - 1, Math.max(0, Math.floor((t - a) / g)))
    ] ?? 0;
}
function De(e, t, n, r, i, a, o, s, c, l, u, d, f) {
  let p = (e, t, n, r) =>
      [
        ...new Set([
          ...Array.from({ length: n + 1 }, (r, i) => e + ((t - e) * i) / n),
          ...r.filter((n) => n > e + 0.05 && n < t - 0.05),
        ]),
      ].sort((e, t) => e - t),
    m = p(
      r,
      i,
      d,
      u.flatMap((e) => [e[0], e[2]]),
    ),
    h = p(
      a,
      o,
      f,
      u.flatMap((e) => [e[1], e[3]]),
    ),
    g = [];
  for (let r = 0; r < m.length - 1; r++)
    for (let i = 0; i < h.length - 1; i++) {
      let a = m[r],
        o = m[r + 1],
        d = h[i],
        f = h[i + 1],
        p = (a + o) / 2,
        _ = (d + f) / 2;
      if (u.some((e) => p > e[0] && p < e[2] && _ > e[1] && _ < e[3])) continue;
      let v = e.cell(n, [p, c, _], t);
      ((w[v].deckY = l),
        e.box(t, n, v, a, o, s, c, d, f),
        g.push([a, o, d, f, v]));
    }
  return (e, t) =>
    g.find(([n, r, i, a]) => e >= n && e <= r && t >= i && t <= a)?.[4] ?? 0;
}
function Oe(e, t) {
  let n = t.reduce((e, n, r) => {
      let i = t[(r + 1) % t.length];
      return e + n[0] * i[1] - i[0] * n[1];
    }, 0),
    r = Math.sign(n) || 1;
  for (let n = 0; n < t.length && e.length; n++) {
    let i = t[n],
      a = t[(n + 1) % t.length],
      o = (e) =>
        r * ((a[0] - i[0]) * (e[1] - i[1]) - (a[1] - i[1]) * (e[0] - i[0])),
      s = [];
    for (let t = 0; t < e.length; t++) {
      let n = e[t],
        r = e[(t + 1) % e.length],
        i = o(n),
        a = o(r);
      if ((i >= 0 && s.push(n), i >= 0 != a >= 0)) {
        let e = i / (i - a);
        s.push([n[0] + (r[0] - n[0]) * e, n[1] + (r[1] - n[1]) * e]);
      }
    }
    e = s;
  }
  return e;
}
function ke(
  e,
  t,
  n,
  {
    y: r = 0,
    rotY: i = 0,
    interior: a = !0,
    roofTop: o = null,
    decks: c = !1,
    enterable: l = !1,
    holes: u = null,
    clearRooftop: d = !1,
  } = {},
) {
  let f = new pe(),
    p = w.length,
    m = e.tiers || [{}],
    h = m.flatMap((t) => t.floors || { ...e.style, ...(t.style || {}) }.floors),
    g = h.findIndex((e) => e >= E.h + 0.3),
    _ =
      g >= 0
        ? g
        : h.reduce((e, t, n) => (t >= 2.3 && (e < 0 || t > h[e]) ? n : e), -1);
  O = l
    ? {
        floor: _,
        doors: [],
        inv: new s()
          .makeTranslation(t, r, n)
          .multiply(new s().makeRotationY(i))
          .invert(),
      }
    : null;
  let v = (e, a) =>
      new s()
        .makeTranslation(t, r, n)
        .multiply(new s().makeRotationY(i))
        .multiply(new s().makeTranslation(0, e, a)),
    y = 0,
    b = 0,
    x = null,
    S = [];
  for (let t = 0; t < m.length; t++) {
    let n = m[t],
      r = { ...e.style, ...(n.style || {}) };
    n.floors && (r.floors = n.floors);
    let i = n.W ?? e.W,
      s = n.D ?? e.D,
      d = v(y, n.dz || 0),
      p = u?.map((e) => ({
        y: e.y - y,
        rect: [
          e.rect[0],
          e.rect[1] - (n.dz || 0),
          e.rect[2],
          e.rect[3] - (n.dz || 0),
        ],
      })),
      h = m[t + 1],
      g =
        l &&
        h &&
        (h.W ?? e.W) >= i - 0.01 &&
        (h.D ?? e.D) >= s - 0.01 &&
        Math.abs((h.dz || 0) - (n.dz || 0)) < 0.01,
      _ = Ae(f, e, n, r, i, s, d, b, {
        interior: a,
        gameRoof: t === m.length - 1 ? o : null,
        decks: c,
        holes: p,
        noRoof: g || (e.shellRoof && t === m.length - 1),
      });
    (S.push({
      W: i,
      D: s,
      H: _.H,
      M: d,
      wall: r.wall,
      bay: r.bay,
      storey: _.H / Math.max(1, r.floors.length),
      roof: r.roof
        ? { pitch: r.roof.pitch, ridge: r.roof.ridge, mat: r.roof.mat }
        : null,
    }),
      n.soffit && f.box(r.wall, d, 0, -i / 2, i / 2, -0.6, 0.02, -s / 2, s / 2),
      (x = {
        W: i,
        D: s,
        t: r.t,
        faces: _.faces,
        H: y + _.H,
        roofTop: y + _.roofTop,
        BM: v(0, n.dz || 0),
      }),
      (y += _.H),
      (b += r.floors.length));
  }
  e.extra?.(f, x.BM, { ...x, clearRooftop: d });
  let C = f.build();
  return (
    (C.userData = {
      ...C.userData,
      spec: e,
      first: p,
      last: w.length - 1,
      H: x.roofTop,
      vols: S,
      base: r,
      ...(O ? { doors: O.doors } : {}),
    }),
    (O = null),
    C
  );
}
function Ae(e, t, n, r, i, a, o, s, c = {}) {
  let l = (e) =>
      (c.holes ?? [])
        .filter((t) => Math.abs(t.y - e) < 0.06)
        .map((e) => e.rect),
    d = r.t,
    f = (e) => ({ ...t[e], ...(n[e] || {}), fo: s, side: e }),
    p = r.roof?.ridge === `z`,
    m = r.roof?.pitch || 0,
    h = Math.tan(m),
    g = r.roof && p ? { h: (i / 2) * h } : null,
    _ = r.roof && !p ? { h: (a / 2) * h, lip: d * h } : null,
    v = n.chamfer?.l ?? t.chamfer?.l ?? 0,
    x = n.chamfer?.r ?? t.chamfer?.r ?? 0,
    S = v > 0 || x > 0,
    C = {
      front: Y(e, X(o, -i / 2 + v, a / 2, 0), i - v - x, r, {
        ends: [!v, !x],
        gable: g,
        ...f(`front`),
      }),
      right: Y(
        e,
        X(o, i / 2, a / 2 - (x || d), Math.PI / 2),
        a - d - (x || d),
        r,
        { gable: _, ...f(`right`) },
      ),
      back: Y(e, X(o, i / 2, -a / 2, Math.PI), i, r, {
        ends: !0,
        gable: g,
        ...f(`back`),
      }),
      left: Y(e, X(o, -i / 2, -a / 2 + d, -Math.PI / 2), a - d - (v || d), r, {
        gable: _,
        ...f(`left`),
      }),
    };
  (x &&
    (C.cornerR = Y(e, X(o, i / 2 - x, a / 2, Math.PI / 4), x * Math.SQRT2, r, {
      ends: !1,
      bay: x * Math.SQRT2,
      ...f(`corner`),
    })),
    v &&
      (C.cornerL = Y(
        e,
        X(o, -i / 2, a / 2 - v, -Math.PI / 4),
        v * Math.SQRT2,
        r,
        { ends: !1, bay: v * Math.SQRT2, ...f(`corner`) },
      )));
  let w = (e) => [
      [-i / 2 + e, -a / 2 + e],
      [i / 2 - e, -a / 2 + e],
      [i / 2 - e, a / 2 - x - e * 0.41],
      [i / 2 - x - e * 0.41, a / 2 - e],
      [-i / 2 + v + e * 0.41, a / 2 - e],
      [-i / 2 + e, a / 2 - v - e * 0.41],
    ],
    T = (t, n, r, i) => {
      let a = new b(w(i).map(([e, t]) => new u(e, -t)));
      e.add(
        t,
        new y(a, { depth: r - n, bevelEnabled: !1 })
          .rotateX(-Math.PI / 2)
          .translate(0, n, 0),
        o,
        0,
      );
    },
    E = C.front.H,
    D = d + 0.02;
  if (c.decks) {
    let t = 0;
    for (let n of r.floors)
      (s === 0 && t === 0
        ? S
          ? T(`floorSlab`, 0, 0.03, D)
          : e.box(
              `floorSlab`,
              o,
              0,
              -i / 2 + D,
              i / 2 - D,
              0,
              0.03,
              -a / 2 + D,
              a / 2 - D,
            )
        : $(
            e,
            `floorSlab`,
            o,
            -i / 2 + D,
            i / 2 - D,
            -a / 2 + D,
            a / 2 - D,
            t,
            t + 0.03,
            t,
            S ? w(D) : null,
            l(t),
          ),
        (t += n));
  } else if (c.interior !== !1) {
    S
      ? T(`interior`, 0.01, E, D)
      : e.box(
          `interior`,
          o,
          0,
          -i / 2 + D,
          i / 2 - D,
          0.01,
          E,
          -a / 2 + D,
          a / 2 - D,
        );
    let t = 0;
    for (let n of r.floors)
      (S
        ? T(`floorSlab`, t, t + 0.03, D)
        : e.box(
            `floorSlab`,
            o,
            0,
            -i / 2 + D,
            i / 2 - D,
            t,
            t + 0.03,
            -a / 2 + D,
            a / 2 - D,
          ),
        (t += n));
  }
  return (
    s === 0 &&
      (S
        ? T(`concrete`, -0.4, 0.06, -0.02)
        : e.box(
            `concrete`,
            o,
            0,
            -i / 2 - 0.02,
            i / 2 + 0.02,
            -0.4,
            0.06,
            -a / 2 - 0.02,
            a / 2 + 0.02,
          )),
    c.noRoof
      ? { faces: C, H: E, roofTop: E }
      : S && !r.roof && c.decks
        ? ($(
            e,
            `tarRoof`,
            o,
            -i / 2 + d,
            i / 2 - d,
            -a / 2 + d,
            a / 2 - d,
            E - 0.25,
            E + 0.02,
            E,
            w(d),
          ),
          { faces: C, H: E, roofTop: E + (r.parapet || 0) })
        : S && !r.roof
          ? (T(`tarRoof`, E - 0.25, E + 0.02, d),
            { faces: C, H: E, roofTop: E + (r.parapet || 0) })
          : c.gameRoof != null && !r.roof
            ? (e.box(
                `tarRoof`,
                o,
                0,
                -i / 2 + d,
                i / 2 - d,
                E - 0.05,
                E + c.gameRoof,
                -a / 2 + d,
                a / 2 - d,
              ),
              { faces: C, H: E, roofTop: E + (r.parapet || 0) })
            : {
                faces: C,
                H: E,
                roofTop: r.roof
                  ? Z(e, o, r, i, a, E, c.decks)
                  : (Ee(e, o, r, i, a, E, c.decks, l(E)), E + (r.parapet || 0)),
              }
  );
}
export {
  re as _,
  ke as a,
  Y as c,
  M as d,
  T as f,
  Te as g,
  N as h,
  he as i,
  Z as l,
  te as m,
  pe as n,
  w as o,
  le as p,
  C as r,
  ue as s,
  V as t,
  ce as u,
  X as v,
};
//# sourceMappingURL=facade-kit-DGwo5rab.js.map
