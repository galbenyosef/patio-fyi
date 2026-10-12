// assets__mesa-view-BpSuH7GP 01 — fillstyle
// Lines 1-331 of readable/assets__mesa-view-BpSuH7GP.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  B as e,
  Dn as t,
  En as n,
  F as r,
  G as i,
  K as a,
  L as o,
  Lt as s,
  Nn as c,
  R as l,
  Rt as u,
  Tt as d,
  U as f,
  Ut as p,
  an as m,
  en as h,
  et as g,
  fn as _,
  ft as v,
  gt as y,
  lt as b,
  mn as x,
  rt as S,
  tt as C,
  v as w,
  vn as T,
  wn as E,
  wt as D,
  yn as O,
  zn as k,
  zt as A,
} from "./graphics-quality-BsjABS0s.js";
import {
  F as j,
  G as ee,
  H as te,
  I as ne,
  K as re,
  L as ie,
  P as ae,
  R as M,
  z as oe,
} from "./sim-D8F3HPJq.js";
import {
  _ as se,
  c as ce,
  d as N,
  f as P,
  h as le,
  l as ue,
  m as F,
  n as de,
  o as I,
  p as L,
  r as fe,
  s as R,
  t as z,
  u as pe,
} from "./mesa-Cnng6RGj.js";
var B = 2067078,
  V = 13136954,
  me = 1845850,
  he = 12107980,
  H = (e) => `#` + e.toString(16).padStart(6, `0`),
  ge = 1,
  U = () => (ge = (Math.imul(ge, 1664525) + 1013904223) >>> 0) / 4294967296,
  _e = (e) => () => {
    ((e |= 0), (e = (e + 1831565813) | 0));
    let t = Math.imul(e ^ (e >>> 15), 1 | e);
    return (
      (t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t),
      ((t ^ (t >>> 14)) >>> 0) / 4294967296
    );
  };
function ve() {
  let e = 2048,
    t = Math.round((e * ie.hz * 2) / (ie.hx * 2)),
    n = e / (ie.hx * 2),
    r = document.createElement(`canvas`);
  ((r.width = e), (r.height = t));
  let i = r.getContext(`2d`),
    a = 0.9144 * n,
    o = 10 * a,
    s = (e - 120 * a) / 2;
  for (let e = 0; e < 26; e++)
    ((i.fillStyle = e % 2 ? `#3f7f33` : `#478b3a`),
      i.fillRect(s + (e - 1) * 5 * a, 0, 5 * a + 1, t));
  for (let n = 0; n < 3e4; n++)
    ((i.fillStyle = `rgba(${U() < 0.5 ? `0,0,0` : `255,255,255`},${U() * 0.05})`),
      i.fillRect(U() * e, U() * t, 1 + U() * 2, 1 + U() * 2));
  let c = (e, n, r, a, s) => {
    ((i.fillStyle = H(n)),
      i.fillRect(e, 0, o, t),
      i.save(),
      i.translate(e + o / 2, t / 2),
      i.rotate(s),
      (i.textAlign = `center`),
      (i.textBaseline = `middle`),
      (i.font = `bold ${o * 0.6}px system-ui`),
      (i.lineWidth = 6),
      (i.strokeStyle = H(r)),
      i.strokeText(a, 0, 0),
      (i.fillStyle = `#fff`),
      i.fillText(a, 0, 0),
      i.restore());
  };
  (c(s, B, V, `SIDEWINDERS`, -Math.PI / 2),
    c(s + 110 * a, me, he, `MARAUDERS`, Math.PI / 2),
    (i.fillStyle = `#f4f4ef`));
  for (let e = 0; e <= 20; e++) i.fillRect(s + o + e * 5 * a - 2, 4, 4, t - 8);
  for (let e = 0; e <= 100; e++) {
    let n = s + o + e * a;
    for (let e of [6, t * 0.44, t * 0.56 - 10, t - 16])
      i.fillRect(n - 1.5, e, 3, 10);
  }
  (i.fillRect(s, 0, 120 * a, 5),
    i.fillRect(s, t - 5, 120 * a, 5),
    i.fillRect(s, 0, 5, t),
    i.fillRect(s + 120 * a - 5, 0, 5, t),
    (i.font = `bold ${2 * n}px system-ui`),
    (i.textAlign = `center`),
    (i.textBaseline = `alphabetic`));
  for (let e = 1; e <= 9; e++) {
    let r = e <= 5 ? e * 10 : (10 - e) * 10,
      c = s + o + e * 10 * a;
    (i.fillText(String(r), c, t - 9 * n),
      i.save(),
      i.translate(c, 9 * n),
      i.rotate(Math.PI),
      i.fillText(String(r), 0, 0),
      i.restore());
  }
  (i.save(),
    i.translate(e / 2, t / 2),
    (i.fillStyle = H(V)),
    i.beginPath(),
    i.arc(0, 0, 6.5 * n, 0, 7),
    i.fill(),
    (i.fillStyle = H(B)),
    i.beginPath(),
    i.arc(0, 0, 5.8 * n, 0, 7),
    i.fill(),
    (i.strokeStyle = `#e9d9b0`),
    (i.lineWidth = 0.7 * n),
    (i.lineCap = `round`),
    i.beginPath());
  for (let e = 0; e < 13; e += 0.05) {
    let t = (0.6 + e * 0.33) * n;
    e
      ? i.lineTo(Math.cos(e) * t, Math.sin(e) * t)
      : i.moveTo(Math.cos(e) * t, Math.sin(e) * t);
  }
  (i.stroke(),
    (i.fillStyle = `#fff`),
    (i.font = `bold ${1.8 * n}px system-ui`),
    (i.textAlign = `center`),
    i.fillText(`MESA`, 0, 4.9 * n),
    i.restore());
  let u = new l(r);
  return ((u.colorSpace = x), (u.anisotropy = 8), u);
}
function ye() {
  let e = 4096,
    t = document.createElement(`canvas`);
  ((t.width = e), (t.height = 640));
  let n = t.getContext(`2d`),
    r = new l(t);
  ((r.colorSpace = x), (r.wrapS = _), (r.anisotropy = 4));
  let i = (e, t, r, i, a, o) => {
      let s = n.createLinearGradient(0, t, 0, t + i);
      (s.addColorStop(0, a),
        s.addColorStop(1, o),
        (n.fillStyle = s),
        n.fillRect(e, t, r, i));
    },
    a = (e, t, r) => {
      (n.save(),
        n.translate(e, t),
        (n.strokeStyle = `#f0dcae`),
        (n.lineWidth = r * 0.12),
        (n.lineCap = `round`),
        n.beginPath());
      for (let e = 0; e < 13; e += 0.05) {
        let t = r * (0.1 + e * 0.065);
        e
          ? n.lineTo(Math.cos(e) * t, Math.sin(e) * t)
          : n.moveTo(Math.cos(e) * t, Math.sin(e) * t);
      }
      (n.stroke(), n.restore());
    },
    o = (t, o) => {
      if (
        ((n.textAlign = `center`), (n.textBaseline = `middle`), t === `field`)
      )
        for (let e = 0; e < 4; e++)
          (i(e * 1024, 0, 1024, 640, `#7a1a10`, `#d8461e`),
            (n.fillStyle = `#fff`),
            (n.font = `bold 120px system-ui`),
            n.fillText(`FIELD ROLLING`, e * 1024 + 512, 130),
            (n.font = `bold 64px system-ui`),
            (n.fillStyle = `#ffe2c8`),
            n.fillText(`STAGE ON THE FIELD`, e * 1024 + 512, 236),
            (n.font = `bold 200px system-ui`),
            (n.fillStyle = `rgba(255,255,255,.9)`),
            n.fillText(`⚠`, e * 1024 + 512, 470));
      else {
        (i(0, 0, 1024, 320, `#0f5250`, `#1f8a86`),
          a(220, 160, 120),
          (n.fillStyle = `#fff`),
          (n.font = `bold 120px system-ui`),
          n.fillText(`MESA DOME`, 640, 130),
          (n.font = `bold 52px system-ui`),
          (n.fillStyle = `#f0c08a`),
          n.fillText(`HOME OF THE SIDEWINDERS`, 640, 230),
          i(1024, 0, 1024, 320, `#05070c`, `#111722`),
          (n.fillStyle = H(B)),
          n.fillRect(1024, 0, 380, 320),
          (n.fillStyle = H(me)),
          n.fillRect(1668, 0, 380, 320),
          (n.fillStyle = `#fff`),
          (n.font = `bold 60px system-ui`),
          n.fillText(`SIDEWINDERS`, 1214, 110),
          n.fillText(`MARAUDERS`, 1858, 110),
          (n.font = `bold 120px system-ui`),
          n.fillText(`0`, 1214, 225),
          n.fillText(`0`, 1858, 225),
          (n.fillStyle = `#ffd36a`),
          (n.font = `bold 44px system-ui`),
          n.fillText(`KICKOFF IN`, 1536, 90),
          (n.font = `bold 92px system-ui`));
        let e = Math.floor(o / 3600),
          t = Math.floor(o / 60) % 60,
          r = o % 60;
        (n.fillText(
          `${e}:${String(t).padStart(2, `0`)}:${String(r).padStart(2, `0`)}`,
          1536,
          190,
        ),
          (n.font = `28px system-ui`),
          (n.fillStyle = `rgba(255,255,255,.7)`),
          n.fillText(`PREGAME · WEEK 6`, 1536, 272),
          i(2048, 0, 1024, 320, `#10307a`, `#2a5ad8`),
          (n.fillStyle = `#fff`),
          (n.font = `bold 140px system-ui`),
          n.fillText(`SKYLARK`, 2560, 140),
          (n.font = `bold 54px system-ui`),
          (n.fillStyle = `#cfe0ff`),
          n.fillText(`AIR · FLY THE DESERT`, 2560, 248),
          i(3072, 0, 1024, 320, `#6a3014`, `#c8743a`),
          (n.fillStyle = `#fff`),
          (n.font = `bold 96px system-ui`),
          n.fillText(`WELCOME TO`, 3584, 110),
          (n.font = `bold 120px system-ui`),
          n.fillText(`GAME DAY`, 3584, 220),
          i(0, 320, 1365, 320, `#0b1622`, `#16304a`),
          (n.fillStyle = `#ffd36a`),
          (n.font = `bold 54px system-ui`),
          n.fillText(`SEASON LEADERS`, 682, 380),
          (n.font = `bold 44px system-ui`),
          (n.fillStyle = `#fff`),
          [
            [`PASS YDS`, `#7 VALE 2,114`],
            [`RUSH YDS`, `#22 OKAFOR 688`],
            [`SACKS`, `#91 TRAN 9.5`],
          ].forEach(([e, t], r) => {
            ((n.textAlign = `left`),
              n.fillText(e, 90, 450 + r * 62),
              (n.textAlign = `right`),
              n.fillText(t, 1280, 450 + r * 62));
          }),
          (n.textAlign = `center`));
        let s = n.createRadialGradient(2048, 480, 40, 2048, 480, 700);
        (s.addColorStop(0, `#5c8a48`),
          s.addColorStop(1, `#1d3a1a`),
          (n.fillStyle = s),
          n.fillRect(1365, 320, 1366, 320),
          (n.fillStyle = `rgba(255,255,255,.9)`),
          (n.font = `bold 40px system-ui`),
          n.fillText(`LIVE · WARM-UPS`, 2048, 370));
        for (let e = 0; e < 9; e++)
          ((n.fillStyle = e % 2 ? `#c8743a` : `#f4f4f0`),
            n.fillRect(1500 + e * 130, 470 + ((e * 37) % 60), 34, 70),
            n.fillRect(1505 + e * 130, 445 + ((e * 37) % 60), 24, 24));
        (i(2731, 320, 1365, 320, `#1b1c1e`, `#2a2c30`),
          (n.fillStyle = `#fff`),
          (n.font = `bold 46px system-ui`),
          n.fillText(`AROUND THE LEAGUE`, 3413, 380),
          (n.font = `38px system-ui`),
          [
            `RIDGE 14 · CANYON 10  Q3`,
            `HARBOR SOUTH 7 · PINE 21  HALF`,
            `LAKESHORE 0 · SUMMIT 3  Q1`,
          ].forEach((e, t) => n.fillText(e, 3413, 450 + t * 60)));
      }
      n.fillStyle = `rgba(0,0,0,.18)`;
      for (let t = 0; t < e; t += 6) n.fillRect(t, 0, 1, 640);
      for (let t = 0; t < 640; t += 6) n.fillRect(0, t, e, 1);
      r.needsUpdate = !0;
    };
  return (o(`kickoff`, 7500), { t: r, draw: o });
}
function be() {
  let e = document.createElement(`canvas`);
  ((e.width = 2048), (e.height = 64));
  let t = e.getContext(`2d`),
    n = [
      [`SIDEWINDERS`, B],
      [`SKYLARK AIR`, 2775768],
      [`MARAUDERS`, me],
      [`GAME DAY`, V],
      [`MESA DOME`, B],
      [`KICKOFF 6:25`, 1776670],
    ];
  (n.forEach(([e, r], i) => {
    let a = (i * 2048) / n.length,
      o = 2048 / n.length;
    ((t.fillStyle = H(r)),
      t.fillRect(a, 0, o, 64),
      (t.fillStyle = `#fff`),
      (t.font = `bold 40px system-ui`),
      (t.textAlign = `center`),
      (t.textBaseline = `middle`),
      t.fillText(e, a + o / 2, 34));
  }),
    (t.fillStyle = `rgba(0,0,0,.2)`));
  for (let e = 0; e < 2048; e += 4) t.fillRect(e, 0, 1, 64);
  let r = new l(e);
  return ((r.colorSpace = x), (r.wrapS = _), r);
}
