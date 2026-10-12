// assets__attachments-DZaUzy_Q 01 — freeze
// Lines 1-351 of readable/assets__attachments-DZaUzy_Q.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  a as e,
  d as t,
  l as n,
  n as r,
  o as i,
  u as a,
} from "./defs-BsSJWPNa.js";
var o = [
    ...Array.from({ length: 20 }, (e, t) => 11 + t),
    ...Array.from({ length: 16 }, (e, t) => 35 + t),
    ...a,
  ].filter((e) => !r.includes(e) && !n.includes(e)),
  s = Object.freeze([0, 1, 3, 4, 6, 8, ...o]),
  c = [...t, 35, 37, 38, 40, 44, 45, 46, 47, 48, 49, 50],
  l = { 52: [`standard`], 38: [`standard`], 40: [`standard`, `suppressor`] },
  u = Object.freeze({
    3: Object.freeze({ extended: 10 }),
    21: Object.freeze({ short: 10, extended: 25 }),
    22: Object.freeze({ short: 5, extended: 10 }),
    23: Object.freeze({ extended: 10 }),
    24: Object.freeze({ short: 5 }),
    25: Object.freeze({ short: 7 }),
  }),
  d = { ar: 0, smg: 5, sniper: 3, lmg: 4 },
  f = (e) => d[i[e].class],
  p = Object.freeze([
    [`compm4`, `Comp M4 red dot`, `Aimpoint CompM4`, `reflex`],
    [`romeo5`, `Romeo5 compact dot`, `SIG Romeo5`, `reflex`],
    [`mro`, `MRO wide-view dot`, `Trijicon MRO`, `reflex`],
    [`hs510c`, `510C open reflex`, `Holosun 510C`, `reflex`],
    [`cmore`, `Railway open reflex`, `C-More Railway, MW3-style`, `reflex`],
    [`deltapoint`, `DeltaPoint micro`, `Leupold DeltaPoint Pro`, `reflex`],
    [`okp7`, `OKP-7 collimator`, `OKP-7`, `reflex`],
    [`acro`, `Acro enclosed dot`, `Aimpoint Acro P-2`, `reflex`],
    [`exps2`, `EXPS2 holographic (FDE)`, `EOTech EXPS2`, `holo`],
    [`exps32`, `EXPS3-2 two-dot`, `EOTech EXPS3-2`, `holo`],
    [`xps2`, `XPS2 compact holo`, `EOTech XPS2 green`, `holo`],
    [`e552`, `552 holographic`, `EOTech 552`, `holo`],
    [`e512`, `512 holographic (FDE)`, `EOTech 512`, `holo`],
    [`e553`, `553 holographic`, `EOTech 553`, `holo`],
    [`uh1`, `UH-1 holographic`, `Vortex UH-1`, `holo`],
    [`aems`, `AEMS enclosed`, `Holosun AEMS`, `holo`],
    [`kobra`, `Kobra collimator`, `Kobra EKP-1S`, `holo`],
    [`ta01`, `ACOG 4x32 crosshair`, `Trijicon TA01NSN`, `prism`],
    [`ta11`, `ACOG 3.5x35 horseshoe`, `Trijicon TA11`, `prism`],
    [`ta33`, `ACOG 3x30 with RMR`, `Trijicon TA33`, `prism`],
  ]),
  m = Object.freeze([`reflex`, `micro`, `holo`, `acog`, ...p.map(([e]) => e)]),
  h = [
    [
      0,
      [`standard`, `reflex`, `holo`, `micro`, `acog`],
      [`standard`, `brake`, `suppressor`, `heavy`],
      [`standard`, `vertical`, `angled`],
    ],
    [
      1,
      [`standard`, `reflex`, `holo`, `micro`],
      [`standard`, `brake`, `suppressor`, `heavy`],
      [`standard`, `vertical`, `angled`],
    ],
    [
      2,
      [`standard`, `reflex`, `scope8`, `acog`],
      [`standard`, `brake`, `suppressor`, `heavy`],
      [`standard`, `vertical`],
    ],
    [
      3,
      [`standard`, `lpvo`, `scope8`, `thermal`],
      [`standard`, `brake`, `suppressor`, `heavy`],
      [`standard`, `bipod`],
    ],
    [
      4,
      [`standard`, `reflex`, `holo`, `acog`],
      [`standard`, `brake`, `suppressor`, `heavy`],
      [`standard`],
    ],
    [
      5,
      [`standard`, `reflex`, `holo`, `micro`],
      [`standard`, `brake`, `suppressor`, `heavy`],
      [`standard`, `vertical`, `angled`],
    ],
    [6, [`standard`, `micro`], [`standard`, `suppressor`], [`standard`]],
    [8, [`standard`, `holo`], [`standard`], [`standard`]],
  ],
  g = { 25: [`deltapoint`] },
  _ = ([e, t, ...n]) =>
    e === 8
      ? [e, t, ...n]
      : [e, [...new Set([...t, ...m])].filter((t) => !g[e]?.includes(t)), ...n],
  v = Object.freeze(
    Object.fromEntries(
      [
        ...h.filter(([e]) => !n.includes(e)).map(_),
        ...o.map((e) =>
          _([
            e,
            ...h
              .find((t) => t[0] === f(e))
              .slice(1)
              .map((t, n) =>
                n === 2 && c.includes(e)
                  ? [`standard`]
                  : n === 1 && l[e]
                    ? l[e]
                    : t,
              ),
          ]),
        ),
      ].map(([e, t, n, r]) => [
        e,
        Object.freeze({
          optic: Object.freeze(t),
          muzzle: Object.freeze(n),
          grip: Object.freeze(r),
          mag: Object.freeze([`standard`, ...Object.keys(u[e] ?? {})]),
        }),
      ]),
    ),
  ),
  y = Object.freeze({
    standard: Object.freeze({
      name: `Factory sight`,
      description: `Original weapon sight. Sights change only the sight picture, never the stats.`,
    }),
    scope4: Object.freeze({
      name: `Medium-power scope`,
      description: `Variable 2.5–6x scope. Sight picture only; no stat change.`,
      optic: Object.freeze({
        type: `scope`,
        fov: 18,
        fovs: Object.freeze([30, 18, 12]),
        reticle: `cross`,
        label: `4x`,
      }),
    }),
    lpvo: Object.freeze({
      name: `LPVO 1.5–6x`,
      description: `Low-power variable scope: nearly open sight up close, 6x at the top. No stat change.`,
      optic: Object.freeze({
        type: `scope`,
        fov: 12.5,
        fovs: Object.freeze([50, 25, 12.5]),
        reticle: `cross`,
        label: `6x`,
        model: `scope4`,
      }),
    }),
    scope8: Object.freeze({
      name: `Long-range scope`,
      description: `Variable 4–12x scope. Sight picture only; no stat change.`,
      optic: Object.freeze({
        type: `scope`,
        fov: 9,
        fovs: Object.freeze([18, 9, 6]),
        reticle: `cross`,
        label: `8x`,
      }),
    }),
    thermal: Object.freeze({
      name: `Thermal scope`,
      description: `Variable 4–8x white-hot scope that reads body heat out to 400 m and cannot see through cover. No stat change.`,
      optic: Object.freeze({
        type: `scope`,
        fov: 18,
        fovs: Object.freeze([18, 9]),
        reticle: `cross`,
        label: `4x`,
        thermal: !0,
      }),
    }),
    reflex: Object.freeze({
      name: `T-2 micro red dot`,
      description: `Aimpoint T-2 style tube, 1.2x sight picture. No stat change.`,
      optic: Object.freeze({
        type: `reflex`,
        kit: `t2`,
        fov: e(1.2),
        reticle: `dot`,
      }),
    }),
    holo: Object.freeze({
      name: `EXPS3 holographic`,
      description: `EOTech-style ring and dot, 1.3x sight picture. No stat change.`,
      optic: Object.freeze({
        type: `holo`,
        kit: `exps3`,
        fov: e(1.3),
        reticle: `ring`,
      }),
    }),
    micro: Object.freeze({
      name: `RMR on riser`,
      description: `Small open window, widest 1.1x sight picture. No stat change.`,
      optic: Object.freeze({
        type: `reflex`,
        kit: `rmr`,
        fov: e(1.1),
        reticle: `dot`,
      }),
    }),
    acog: Object.freeze({
      name: `ACOG 4x32 chevron`,
      description: `Trijicon TA31 style, looked through as a real eyepiece, 3x. No stat change.`,
      optic: Object.freeze({
        type: `prism`,
        kit: `ta31`,
        fov: e(3),
        reticle: `cross`,
      }),
    }),
    ...Object.fromEntries(
      p.map(([t, n, r, i]) => [
        t,
        Object.freeze({
          name: n,
          description: `${r}, ${i === `prism` ? `3x, looked through as a real eyepiece` : i === `holo` ? `1.25x sight picture` : `1.2x sight picture`}. No stat change.`,
          optic: Object.freeze({
            type: i === `prism` ? `prism` : i,
            kit: t,
            fov: e(i === `prism` ? 3 : i === `holo` ? 1.25 : 1.2),
            reticle: `dot`,
          }),
        }),
      ]),
    ),
  }),
  b = 200;
function x(e, t) {
  let n = (t) =>
    t > 0 ? b / (Math.ceil(b / (e.damage * t) - 1e-9) * t) + 1e-6 : 0;
  return Math.min(e.damage, Math.max(e.damage * t, n(1), n(e.head), n(e.limb)));
}
var S = Object.freeze({
    standard: Object.freeze({
      name: `Factory muzzle`,
      description: `Standard length and report.`,
      recoil: 1,
      spread: 1,
      range: 1,
      ads: 0,
      volume: 1,
    }),
    brake: Object.freeze({
      name: `Compensator`,
      description: `15% less recoil; +30 ms aim time.`,
      recoil: 0.85,
      spread: 1,
      range: 1,
      ads: 0.03,
      volume: 1,
    }),
    suppressor: Object.freeze({
      name: `Suppressor`,
      description: `Quiet report; up to 5% less damage. Same head, body or limb hit count at every range.`,
      recoil: 1,
      spread: 1,
      range: 1,
      damage: 0.95,
      ads: 0,
      volume: 0.55,
    }),
    heavy: Object.freeze({
      name: `Heavy barrel`,
      description: `15% tighter spread and 15% longer range; +60 ms aim time.`,
      recoil: 1,
      spread: 0.85,
      range: 1.15,
      ads: 0.06,
      volume: 1,
    }),
  }),
  C = Object.freeze({
    standard: Object.freeze({
      name: `Factory grip`,
      description: `Original handling.`,
    }),
    vertical: Object.freeze({
      name: `Vertical grip`,
      description: `15% less recoil and 5% tighter spread; +40 ms aim time.`,
      recoil: 0.85,
      spread: 0.95,
      ads: 0.04,
    }),
    angled: Object.freeze({
      name: `Angled grip`,
      description: `40 ms faster aim time; 10% more recoil.`,
      recoil: 1.1,
      ads: -0.04,
    }),
    bipod: Object.freeze({
      name: `Bipod`,
      description: `Rests on any ledge, sill or the ground, and always when prone: 45% less kick while rested. +60 ms aim time.`,
      ads: 0.06,
    }),
  }),
  w = Object.freeze({
    standard: Object.freeze({
      name: `Factory magazine`,
      description: `Standard capacity and handling.`,
      reload: 1,
      ads: 0,
    }),
    short: Object.freeze({
      name: `Short magazine`,
      description: `Fewer rounds; 15% faster reload and 20 ms faster aim time.`,
      reload: 0.85,
      ads: -0.02,
    }),
    extended: Object.freeze({
      name: `Extended magazine`,
      description: `More rounds; 15% slower reload and +40 ms aim time.`,
      reload: 1.15,
      ads: 0.04,
    }),
  }),
  T = (e, t) => v[e]?.[t] ?? [],
  E = (e, t, n, r) => {
    let i = n?.[t];
    return i !== `standard` && T(e, t).includes(i) && (!r || r(e, t, i))
      ? i
      : `standard`;
  },
  D = 0.6,
  O = (e) => {
    let t = e?.rail;
    return typeof t == `number` && Number.isFinite(t)
      ? Math.max(-0.6, Math.min(D, Math.round(t * 200) / 200))
      : null;
  },
  k = (e, t, n = null) => {
    let r = {
        optic: E(e, `optic`, t, n),
        muzzle: E(e, `muzzle`, t, n),
        grip: E(e, `grip`, t, n),
        mag: E(e, `mag`, t, n),
      },
      i = O(t);
    return (i != null && (r.rail = i), r);
  };
function A(e, t = null) {
  let n = e && typeof e == `object` && !Array.isArray(e) ? e : {},
    r = {};
  for (let e of s) r[e] = k(e, n.version === 2 ? n.weapons?.[e] : null, t);
  return { version: 2, weapons: r };
}
