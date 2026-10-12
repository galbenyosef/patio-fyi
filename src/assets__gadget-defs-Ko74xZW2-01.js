// assets__gadget-defs-Ko74xZW2 01 — weapons
// Lines 1-99 of readable/assets__gadget-defs-Ko74xZW2.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { f as e } from "./defs-BsSJWPNa.js";
import { d as t } from "./attachments-DZaUzy_Q.js";
var n = [8],
  r = [11, 35, 12, 37, 38, 14, 15, 42],
  i = [...e],
  a = [21, 22, 23, 24, 25],
  o = [47, 50, 44, 49, 45, 48, 46],
  s = Object.freeze([
    {
      id: `assault`,
      name: `Assault`,
      role: `Mobile frontline fighter`,
      weapons: [[0, 1, ...r, ...i], [6], n],
      defaults: [0, 6, 8],
      gadgets: [`frag`],
    },
    {
      id: `sniper`,
      name: `Sniper`,
      role: `Long-range observation and precision`,
      weapons: [[3, ...a], [...i]],
      defaults: [3, 51],
      gadgets: [`frag`],
    },
    {
      id: `support`,
      name: `Support`,
      role: `Sustained fire and ammo resupply`,
      weapons: [[4, 0, ...o], [10, 51], n],
      defaults: [4, 10, 8],
      gadgets: [`frag`, `ammo`],
    },
    {
      id: `engineer`,
      name: `Engineer`,
      role: `Anti-vehicle launchers`,
      weapons: [
        [1, 0, ...i],
        [10, 8, 9, 6],
      ],
      defaults: [1, 10],
      gadgets: [`frag`],
    },
    {
      id: `medic`,
      name: `Medic`,
      role: `Revive with G, heal with medkits`,
      weapons: [[0, 1, ...r, ...i], [6]],
      defaults: [0, 6],
      gadgets: [`defib`, `medkit`],
    },
  ]),
  c = Object.freeze({ medic: 32, support: 33, engineer: 34, sniper: 66 }),
  l = (e) => {
    let t = e?.weapons ?? [],
      n = c[e?.classId];
    return n == null || !t.length ? t : [...t, n];
  },
  u = [`Primary`, `Secondary`, `Rocket`],
  d = Object.freeze({
    frag: `Frag grenade`,
    defib: `Defibrillator (G)`,
    medkit: `Medkit`,
    ammo: `Ammo box`,
  });
function f(e, { canEquip: n = () => !0, canAttach: r = null } = {}) {
  let i = s.find((t) => t.id === e?.classId) ?? s[0],
    a = i.weapons.map((t, r) =>
      t.includes(e?.weapons?.[r]) && n(e.weapons[r])
        ? e.weapons[r]
        : i.defaults[r],
    );
  a[0] === a[1] && (a[1] = i.weapons[1].find((e) => e !== a[0]));
  let o = m(i.id),
    c = i.gadgets.map((t, n) =>
      o[n].includes(e?.gadgets?.[n]) ? e.gadgets[n] : t,
    );
  return {
    classId: i.id,
    weapons: a,
    gadgets: c,
    attachments: t(e?.attachments, r),
  };
}
var p = (e) => {
  let t = Math.floor(e / 4),
    n = e % 4;
  return t % 2 == 1 && n === 0
    ? `medic`
    : n === 1 && t % 4 != 0
      ? `assault`
      : s[n].id;
};
function m(e) {
  return (s.find((t) => t.id === e) ?? s[0]).gadgets.map((e) => [e]);
}
var h = Object.freeze({ medkit: 213, ammo: 214 }),
  g = Object.freeze({ medkit: 1, ammo: 1 });
