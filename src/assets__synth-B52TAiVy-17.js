// assets__synth-B52TAiVy 17 — bus
// Lines 4498-4559 of readable/assets__synth-B52TAiVy.pretty.js (statement-aligned).
function $(e, t, n) {
  return n + 0.01;
}
for (let e of [
  `frag_out`,
  `grenade`,
  `spotted`,
  `spotted_vehicle`,
  `spotted_air`,
  `kill`,
  `man_down`,
  `revive_give`,
  `revive_thanks`,
  `captured`,
  `vehicle_down`,
])
  Q[`voice_${e}`] = {
    build: $,
    pri: e === `grenade` ? 8 : 6,
    ref: 5,
    max: 60,
    bus: `sfx`,
  };
var It = [`A`, `B`, `C`, `D`, `E`, `F`];
for (let e of [
  `squad_attack`,
  `squad_defend`,
  `squad_hold`,
  `squad_regroup`,
  `squad_cancelled`,
  `squad_ended`,
  `squad_held`,
  `squad_regrouped`,
  `match_start`,
  `match_won`,
  `match_lost`,
  ...It.flatMap((e) =>
    [
      `squad_attack`,
      `squad_defend`,
      `squad_secured`,
      `squad_defended`,
      `obj_captured`,
      `obj_lost`,
    ].map((t) => `${t}_${e}`),
  ),
])
  Q[`voice_${e}`] = { build: $, pri: 8, bus: `sfx` };
for (let [e, t] of Object.entries(Q))
  e.startsWith(`voice_`) &&
    t.bus !== `ambience` &&
    (t.level ??= e.startsWith(`voice_blast_`) ? 0.6 : 0.35);
var Lt = [`grass`, `dirt`, `rock`, `sand`, `road`, `water`];
for (let e of Object.keys(ce))
  Q[`reload_${e}`] = {
    build: (t, n, r, i) => R(t, n, r, i, e),
    pri: 7,
    ref: 2.5,
    max: 32,
    bus: `sfx`,
  };
var Rt = Object.keys(Q);
