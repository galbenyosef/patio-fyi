// assets__medic-server-CPDVPsRv 01 — pos
// Lines 1-56 of readable/assets__medic-server-CPDVPsRv.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { Jn as e, Zn as t } from "./graphics-quality-CrL3qbU3.js";
import { r as n, t as r } from "./hostility-BAA0I7XB.js";
import "./gadget-defs-C7GNMdw7.js";
function i(e, t, n) {
  let r = [t.pos[0], t.pos[1] + 1.1, t.pos[2]],
    i = [n.pos[0], n.pos[1] + 0.35, n.pos[2]].map((e, t) => e - r[t]),
    a = Math.hypot(...i);
  return (
    a < 0.3 ||
    !e.map.raycast(
      r,
      i.map((e) => e / a),
      a - 0.25,
      null,
      null,
      !0,
    )
  );
}
var a = Object.freeze({
    reviveWindow: 720,
    padsReach: 7.07,
    padsCharge: 15,
    padsHold: 3,
    reviveRise: 60,
    holdRise: 300,
    riseGap: 0.9,
    padsCooldown: 60,
    reviveMedicHeal: 50,
    reviveLockout: 480,
    padsMissCooldown: 24,
    enemyReach: 2,
    enemyCone: Math.cos(Math.PI / 4),
    medkitRadius: 5,
    medkitHeight: 2.2,
    medkitEvery: 30,
    medkitHeal: 10,
    reviveScore: 200,
    quickReviveScore: 50,
    quickReviveTicks: 300,
    healScore: 20,
    healScoreHp: 20,
    callAnsweredScore: 50,
    assistScore: 30,
    reviveAssistTicks: 1800,
    healAssistTicks: 600,
    defibKillScore: 50,
    callRange: 40,
    botHoldTicks: 600,
  }),
  o = (e, t) =>
    (t?.ext?.loadout?.classId ?? e.players.get(t?.owner)?.loadout?.classId) ===
    `medic`,
  s = new WeakMap(),
  c = (e) => s.get(e) ?? null;
