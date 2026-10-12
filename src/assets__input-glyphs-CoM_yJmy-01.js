// assets__input-glyphs-CoM_yJmy 01 — group
// Lines 1-218 of readable/assets__input-glyphs-CoM_yJmy.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
var e = `salient.pad.v1`,
  t = () => Array.from({ length: 18 }, (e, t) => t),
  n = [
    { slot: 7, name: `Fire`, group: `Combat` },
    { slot: 6, name: `Aim down sights`, group: `Combat` },
    {
      slot: 2,
      name: `Reload`,
      hold: `Use · vehicle · pick up`,
      group: `Combat`,
    },
    { slot: 3, name: `Swap weapon`, group: `Combat` },
    { slot: 4, name: `Grenade`, hold: `Release to throw`, group: `Combat` },
    { slot: 11, name: `Melee`, group: `Combat` },
    { slot: 5, name: `Spot enemy`, group: `Combat` },
    { slot: 0, name: `Jump · parachute`, group: `Movement` },
    { slot: 1, name: `Crouch`, hold: `Prone`, group: `Movement` },
    { slot: 10, name: `Sprint`, group: `Movement` },
    { slot: 12, name: `Previous weapon`, group: `Weapons & squad` },
    { slot: 13, name: `Next weapon`, group: `Weapons & squad` },
    { slot: 14, name: `Call medic`, group: `Weapons & squad` },
    {
      slot: 15,
      name: `Squad order`,
      hold: `Command wheel`,
      group: `Weapons & squad`,
    },
    { slot: 8, name: `Scoreboard`, hold: `Show`, group: `Menus` },
    { slot: 9, name: `Settings menu`, group: `Menus` },
  ],
  r = {
    xbox: [
      `A`,
      `B`,
      `X`,
      `Y`,
      `LB`,
      `RB`,
      `LT`,
      `RT`,
      `View`,
      `Menu`,
      `L3`,
      `R3`,
      `D-pad ↑`,
      `D-pad ↓`,
      `D-pad ←`,
      `D-pad →`,
      `Guide`,
      `Share`,
    ],
    ps: [
      `✕`,
      `○`,
      `□`,
      `△`,
      `L1`,
      `R1`,
      `L2`,
      `R2`,
      `Create`,
      `Options`,
      `L3`,
      `R3`,
      `D-pad ↑`,
      `D-pad ↓`,
      `D-pad ←`,
      `D-pad →`,
      `PS`,
      `Touchpad`,
    ],
  },
  i = (e, t = `xbox`) => (r[t] ?? r.xbox)[e] ?? `Button ${e}`,
  a = { map: t(), southpaw: !1 },
  o = (e) =>
    Array.isArray(e) &&
    e.length === 18 &&
    new Set(e).size === 18 &&
    e.every((e) => Number.isInteger(e) && e >= 0 && e < 18);
try {
  let t = JSON.parse(localStorage.getItem(e));
  (o(t?.map) && (a.map = t.map), (a.southpaw = !!t?.southpaw));
} catch {}
var s = () => {
    try {
      localStorage.setItem(e, JSON.stringify(a));
    } catch {}
  },
  c = () => ({ map: a.map.slice(), southpaw: a.southpaw }),
  l = (e) => a.map[e];
function u(e, t) {
  if (!(e >= 0 && e < 18 && t >= 0 && t < 18)) return !1;
  let n = a.map.indexOf(t);
  return ((a.map[n] = a.map[e]), (a.map[e] = t), s(), !0);
}
function d(e, t) {
  if (e === `southpaw`) a.southpaw = !!t;
  else return !1;
  return (s(), !0);
}
function f() {
  ((a.map = t()), (a.southpaw = !1), s());
}
var p = () => a.map.every((e, t) => e === t) && !a.southpaw,
  m = !1,
  h = (e) => {
    m = !!e;
  },
  g = () => m;
function _(e, t) {
  let n = e.map((t, n) => !!e[a.map[n] ?? n]),
    r = [t[0] ?? 0, t[1] ?? 0, t[2] ?? 0, t[3] ?? 0];
  return { buttons: n, axes: a.southpaw ? [r[2], r[3], r[0], r[1]] : r };
}
var v = { pad: !1, brand: `xbox` },
  y = [
    `A`,
    `B`,
    `X`,
    `Y`,
    `LB`,
    `RB`,
    `LT`,
    `RT`,
    `VIEW`,
    `MENU`,
    `LS`,
    `RS`,
    `UP`,
    `DOWN`,
    `LEFT`,
    `RIGHT`,
  ],
  b = new Set([`confirm`, `back`]),
  x = {
    xbox: {
      A: `A`,
      B: `B`,
      X: `X`,
      Y: `Y`,
      LB: `LB`,
      RB: `RB`,
      LT: `LT`,
      RT: `RT`,
      LS: `L3`,
      RS: `R3`,
      VIEW: `View`,
      MENU: `Menu`,
      UP: `D-pad ↑`,
      DOWN: `D-pad ↓`,
      LEFT: `D-pad ←`,
      RIGHT: `D-pad →`,
      DPAD: `D-pad`,
      STICKS: `Sticks`,
    },
    ps: {
      A: `✕`,
      B: `○`,
      X: `□`,
      Y: `△`,
      LB: `L1`,
      RB: `R1`,
      LT: `L2`,
      RT: `R2`,
      LS: `L3`,
      RS: `R3`,
      VIEW: `Create`,
      MENU: `Options`,
      UP: `D-pad ↑`,
      DOWN: `D-pad ↓`,
      LEFT: `D-pad ←`,
      RIGHT: `D-pad →`,
      DPAD: `D-pad`,
      STICKS: `Sticks`,
    },
  },
  S = {
    fire: `RT`,
    aim: `LT`,
    jump: `A`,
    parachute: `A`,
    crouch: `B`,
    reload: `X`,
    use: `X`,
    swap: `Y`,
    grenade: `LB`,
    flares: `LB`,
    spot: `RB`,
    sprint: `LS`,
    melee: `RS`,
    weapons: `DPAD`,
    medic: `LEFT`,
    order: `RIGHT`,
    scores: `VIEW`,
    menu: `MENU`,
    confirm: `A`,
    back: `B`,
    climb: `A`,
    descend: `B`,
    focus: `LT`,
  };
function C(e, t) {
  ((v.pad = !!e), t && (v.brand = t === `ps` ? `ps` : `xbox`));
}
var w = () => v.pad,
  T = () => v.brand;
function E(e, t = v.brand) {
  let n = S[e] ?? e,
    r = y.indexOf(n);
  return (r >= 0 && !b.has(e) && (n = y[l(r)] ?? n), x[t]?.[n] ?? n);
}
function D(e, t) {
  return v.pad ? E(e) : t;
}
function O(e = ``) {
  return /054c|dualsense|dualshock|playstation/i.test(e) ? `ps` : `xbox`;
}
