// assets__ship-dressing-DTx9LFga 01 — ink
// Lines 1-297 of readable/assets__ship-dressing-DTx9LFga.pretty.js (statement-aligned).
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
