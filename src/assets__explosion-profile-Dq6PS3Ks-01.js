// assets__explosion-profile-Dq6PS3Ks 01 — scale
// Lines 1-10 of readable/assets__explosion-profile-Dq6PS3Ks.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
function e(e = {}) {
  let t = Number.isFinite(e.scale) ? Math.max(0, e.scale) : 1;
  return {
    wall: { radius: 7 * t, damage: 680 * t },
    floor: { radius: 4 * t, damage: 300 * t },
    blast: { scale: 2.4 * t, atImpact: !0 },
    dust: { scale: 2.2 * t, atImpact: !0 },
  };
}
