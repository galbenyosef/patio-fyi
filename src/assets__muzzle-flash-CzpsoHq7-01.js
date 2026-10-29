// assets__muzzle-flash-CzpsoHq7 01 — charge
// Lines 1-244 of readable/assets__muzzle-flash-CzpsoHq7.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { i as e } from "./attachments-BlZum_KH.js";
var t = Object.freeze({
    "32acp": { label: `.32 ACP`, charge: 2.3, burn: 200 },
    "9x19": { label: `9x19 mm`, charge: 5.8, burn: 280 },
    "45acp": { label: `.45 ACP`, charge: 5.5, burn: 260 },
    "50ae": { label: `.50 AE`, charge: 30, burn: 420 },
    "4.6x30": { label: `4.6x30 mm`, charge: 5, burn: 260 },
    "9x39": { label: `9x39 mm subsonic`, charge: 12, burn: 350 },
    "5.56x45": { label: `5.56x45 mm`, charge: 25, burn: 510 },
    "7.62x39": { label: `7.62x39 mm`, charge: 24, burn: 560 },
    "6.8x51": { label: `6.8x51 mm`, charge: 48, burn: 560, hot: 1.25 },
    "7.62x51": { label: `7.62x51 mm`, charge: 46, burn: 600 },
    "7.62x54R": { label: `7.62x54R`, charge: 50, burn: 640 },
    "338lm": { label: `.338 Lapua Mag`, charge: 92, burn: 720 },
    "408ct": { label: `.408 CheyTac`, charge: 120, burn: 800 },
    "50bmg": { label: `.50 BMG`, charge: 235, burn: 950 },
  }),
  n = Object.freeze({
    bare: {
      name: `Bare crown`,
      star: 1,
      cone: 1,
      bright: 1,
      smoke: 1,
      jets: [],
    },
    birdcage: {
      name: `Birdcage flash hider`,
      star: 0.72,
      cone: 0.55,
      bright: 0.6,
      smoke: 1,
      jets: [
        [-45, 0.5, 0.45, 0.35],
        [45, 0.5, 0.45, 0.35],
        [-100, 0.42, 0.4, 0.35],
        [100, 0.42, 0.4, 0.35],
      ],
    },
    prong: {
      name: `Prong flash hider`,
      star: 0.66,
      cone: 0.45,
      bright: 0.55,
      smoke: 1,
      jets: [
        [0, 0.48, 0.32, 0.45],
        [120, 0.48, 0.32, 0.45],
        [240, 0.48, 0.32, 0.45],
      ],
    },
    cone: {
      name: `Cone flash hider`,
      star: 0.74,
      cone: 0.85,
      bright: 0.65,
      smoke: 1,
      coneWidth: 0.7,
      jets: [],
    },
    slant: {
      name: `Slant compensator`,
      star: 0.85,
      cone: 0.9,
      bright: 0.95,
      smoke: 1.05,
      jets: [[18, 0.75, 0.6, 0.55]],
    },
    compensator: {
      name: `Compensator`,
      star: 0.7,
      cone: 0.7,
      bright: 1,
      smoke: 1.1,
      jets: [
        [0, 0.7, 0.5, 0.25],
        [-55, 0.62, 0.45, 0.2],
        [55, 0.62, 0.45, 0.2],
      ],
    },
    brake: {
      name: `Muzzle brake`,
      star: 0.5,
      cone: 0.45,
      bright: 1.25,
      smoke: 1.25,
      jets: [
        [-90, 1.15, 1, 0.05],
        [90, 1.15, 1, 0.05],
      ],
    },
    brake2: {
      name: `Two-chamber brake`,
      star: 0.48,
      cone: 0.4,
      bright: 1.3,
      smoke: 1.35,
      jets: [
        [-90, 1.2, 1.05, 0.1],
        [90, 1.2, 1.05, 0.1],
        [-95, 0.9, 0.85, -0.25],
        [95, 0.9, 0.85, -0.25],
      ],
    },
    suppressor: {
      name: `Suppressor`,
      star: 0,
      cone: 0,
      bright: 0.07,
      smoke: 1.3,
      firstPop: 0.3,
      jets: [],
    },
    integral: {
      name: `Integral suppressor`,
      star: 0,
      cone: 0,
      bright: 0.05,
      smoke: 1.2,
      firstPop: 0.2,
      jets: [],
    },
  }),
  r = (e, t, n, r = ``) =>
    Object.freeze({ calibre: e, barrel: t, device: n, note: r }),
  i = Object.freeze({
    0: r(`5.56x45`, 368, `birdcage`, `M4A1, 14.5 in`),
    11: r(`5.56x45`, 318, `prong`, `G36K, 12.5 in, four-prong hider`),
    35: r(`5.56x45`, 449, `birdcage`, `FN FNC, 17.7 in`),
    12: r(`7.62x39`, 415, `slant`, `AKM, 16.3 in, slant compensator`),
    37: r(`5.56x45`, 417, `prong`, `AUG A3, 16.4 in`),
    38: r(`9x39`, 200, `integral`, `AS Val, integral suppressor`),
    14: r(`7.62x51`, 419, `birdcage`, `ACR battle rifle, 16.5 in`),
    15: r(`5.56x45`, 262, `prong`, `Mk18 Mod 1, 10.3 in`),
    42: r(`5.56x45`, 368, `birdcage`, `AR-pattern, 14.5 in`),
    1: r(`5.56x45`, 292, `birdcage`, `invented carbine, 11.5 in`),
    4: r(`5.56x45`, 465, `birdcage`, `Minimi Mk3, 18.3 in`),
    47: r(`5.56x45`, 508, `birdcage`, `Ultimax 100, 20 in`),
    50: r(`5.56x45`, 508, `prong`, `Stoner 63A, 20 in`),
    44: r(`6.8x51`, 330, `prong`, `XM250, 13 in, hot 6.8 mm`),
    49: r(`7.62x51`, 470, `birdcage`, `M60E6, 18.5 in`),
    45: r(`7.62x51`, 508, `birdcage`, `7.62 belt gun, 20 in`),
    48: r(`7.62x54R`, 658, `cone`, `PKP Pecheneg, 25.9 in`),
    46: r(`7.62x51`, 550, `birdcage`, `HK MG5, 21.7 in`),
    51: r(`9x19`, 225, `bare`, `MP5A3, 8.9 in`),
    53: r(`9x19`, 148, `bare`, `MP5K-PDW, 5.8 in`),
    54: r(`9x19`, 225, `bare`, `railed MP5, 8.9 in`),
    55: r(`45acp`, 200, `bare`, `UMP45, 7.9 in`),
    56: r(`4.6x30`, 180, `bare`, `MP7A1, 7.1 in`),
    57: r(`9x19`, 260, `bare`, `Uzi, 10.2 in`),
    58: r(`9x19`, 146, `bare`, `MAC-10, 5.75 in`),
    74: r(`9x19`, 225, `bare`, `UMP9, 8.9 in`),
    75: r(`9x19`, 225, `bare`, `MP5A2, 8.9 in`),
    76: r(`9x19`, 203, `bare`, `SIG MPX, 8 in`),
    77: r(`9x19`, 175, `bare`, `B&T APC9, 6.9 in`),
    80: r(`9x19`, 203, `bare`, `Grand Power Stribog, 8 in`),
    81: r(`9x19`, 175, `bare`, `Beretta PMX, 6.9 in`),
    82: r(`9x19`, 229, `bare`, `Colt 9 mm SMG, 9 in flat-top variant`),
    3: r(`7.62x51`, 610, `bare`, `M24, 24 in`),
    21: r(`7.62x51`, 508, `birdcage`, `M110, 20 in`),
    22: r(`7.62x51`, 508, `bare`, `Steyr Scout, 19 in`),
    23: r(`338lm`, 686, `brake`, `AWM .338, 27 in`),
    24: r(`50bmg`, 737, `brake2`, `Barrett .50, 29 in`),
    25: r(`408ct`, 737, `brake`, `CheyTac M200, 29 in`),
    6: r(`9x19`, 110, `bare`, `invented 9 mm`),
    67: r(`9x19`, 114, `bare`, `Glock 17`),
    68: r(`45acp`, 127, `bare`, `1911, 5 in`),
    69: r(`9x19`, 125, `bare`, `Beretta 92FS`),
    70: r(`9x19`, 112, `bare`, `SIG P226`),
    71: r(`9x19`, 120, `bare`, `CZ 75`),
    72: r(`32acp`, 83, `bare`, `Walther PPK, .32`),
    73: r(`50ae`, 152, `bare`, `Desert Eagle .50 AE, 6 in`),
  }),
  a = Object.freeze({
    ar: r(`5.56x45`, 368, `birdcage`),
    carbine: r(`5.56x45`, 292, `birdcage`),
    dmr: r(`7.62x51`, 508, `birdcage`),
    lmg: r(`5.56x45`, 465, `birdcage`),
    smg: r(`9x19`, 225, `bare`),
    sniper: r(`7.62x51`, 610, `bare`),
    pistol: r(`9x19`, 114, `bare`),
  }),
  o = 0.21,
  s = (e, t) => 0.06 + 0.94 * Math.max(0, 1 - e / t) ** 1.2,
  c = (e, t) => e.charge * (s(t, e.burn) + 0.2) * (e.hot ?? 1),
  l = c(t[`5.56x45`], 368),
  u = (e, t, n) => Math.max(t, Math.min(n, e));
function d(e, r, i, a = 1) {
  let s = n[i] ?? n.bare,
    d = t[r.calibre] ?? t[`5.56x45`],
    f = r.barrel * a,
    p = c(d, f) / l,
    m = u(Math.sqrt(p), 0.3, 3),
    h = u(p ** 0.7, 0.15, 5);
  return Object.freeze({
    id: e,
    calibre: r.calibre,
    calibreLabel: d.label,
    barrel: f,
    device: i,
    deviceName: s.name,
    note: r.note ?? ``,
    power: +p.toFixed(3),
    radius: o * m * s.star,
    cone: o * m * s.cone,
    coneWidth: s.coneWidth ?? 1,
    jets: Object.freeze(
      s.jets.map(([e, t, n, r]) =>
        Object.freeze({
          angle: (e * Math.PI) / 180,
          len: o * m * t * 0.62,
          width: o * m * n * 0.42,
          tilt: r,
        }),
      ),
    ),
    bright: h * s.bright,
    firstPop: s.firstPop ?? 0,
    smoke: u((d.charge / 25) ** 0.4, 0.45, 2.6) * s.smoke,
    heat: (d.charge / 25) * 0.05 * (s.firstPop ? 1.4 : 1),
  });
}
var f = d(-1, r(`5.56x45`, 368, `bare`), `bare`),
  p = new Map();
function m(t) {
  if (!t || t.class === `launcher` || t.class === `tool` || t.class === `defib`)
    return null;
  let n = t.attachments?.muzzle ?? `standard`,
    r = `${t.id}/${n}`;
  if (p.has(r)) return p.get(r);
  let o = i[t.id] ?? a[t.class] ?? a.ar,
    s = e[n]?.flash ?? null,
    c = o.device === `integral` ? `integral` : (s?.device ?? o.device),
    l = d(t.id, o, c, s?.barrel ?? 1);
  return (p.set(r, l), l);
}
function h(e) {
  try {
    let t = e?.modules?.get?.(`environment`)?.getSun?.();
    if (t && Number.isFinite(t.intensity)) return u(t.intensity / 2.9, 0, 1);
  } catch {}
  return 1;
}
