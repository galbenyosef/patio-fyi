// assets__synth-xINWorK6 12 — bus
// Lines 3440-3498 of readable/assets__synth-xINWorK6.pretty.js (statement-aligned).
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
  Z[`voice_${e}`] = {
    build: Q,
    pri: e === `grenade` ? 8 : 6,
    ref: 5,
    max: 60,
    bus: `sfx`,
  };
var $ = [`A`, `B`, `C`, `D`, `E`, `F`];
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
  ...$.flatMap((e) =>
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
  Z[`voice_${e}`] = { build: Q, pri: 8, bus: `sfx` };
for (let [e, t] of Object.entries(Z))
  e.startsWith(`voice_`) &&
    t.bus !== `ambience` &&
    (t.level ??= e.startsWith(`voice_blast_`) ? 0.6 : 0.35);
var st = [`grass`, `dirt`, `rock`, `sand`, `road`, `water`];
for (let e of Object.keys(I))
  Z[`reload_${e}`] = {
    build: (t, n, r, i) => L(t, n, r, i, e),
    pri: 7,
    ref: 2.5,
    max: 32,
    bus: `sfx`,
  };
var ct = Object.keys(Z);
