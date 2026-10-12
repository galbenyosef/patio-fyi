/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
function e(e, t) {
  if (!e?.every(Number.isFinite) || !t?.every(Number.isFinite)) return null;
  let n = t[0] - e[0],
    r = t[2] - e[2];
  return n * n + r * r < 0.01
    ? null
    : (Math.round((Math.atan2(n, -r) * 180) / Math.PI / 22.5) * 22.5 + 360) %
        360;
}
function t(t, n) {
  let r = t.get(n.targetId),
    i = typeof n.weapon == `number` ? t.get(n.attackerId)?.pos : n.pos;
  return { ...n, damageBearing: e(r?.pos, i) };
}
export { t as n, e as t };
//# sourceMappingURL=damage-direction-Bh_T3kaX.js.map
