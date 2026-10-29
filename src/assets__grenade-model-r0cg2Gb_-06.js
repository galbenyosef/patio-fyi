// assets__grenade-model-r0cg2Gb_ 06 — math
// Lines 1635-1685 of readable/assets__grenade-model-r0cg2Gb_.pretty.js (statement-aligned).
function zn(e) {
  let t = Number.isFinite(e) ? Math.max(0, Math.min(1, e)) : 0;
  return {
    lift: Rn(t, 0.12, 0.26) * (1 - Rn(t, 0.8, 0.9)),
    travel: Rn(t, 0.26, 0.48) * (1 - Rn(t, 0.58, 0.8)),
    hand: Rn(t, 0, 0.12) * (1 - Rn(t, 0.9, 1)),
  };
}
var K = (e) => ((e = Math.max(0, Math.min(1, e))), e * e * (3 - 2 * e));
function Bn(e) {
  let t = Number.isFinite(e) ? Math.max(0, Math.min(1, e)) : 0,
    n = K(t / 0.16) * (1 - K((t - 0.76) / 0.2)),
    r = K((t - 0.16) / 0.18),
    i = K((t - 0.46) / 0.25);
  return {
    reach: n,
    extraction: r * (1 - i),
    exchange: t > 0.34 && t < 0.46,
    tilt: Math.sin(Math.PI * r) * (1 - i) * 0.22,
  };
}
function Vn(e, t, n) {
  return e?.buttons & 32 && !(e?.buttons & 3) && t > 4 && n <= 0 ? 1 : 0;
}
function Hn(e) {
  let t = Number.isFinite(e) ? Math.max(0, Math.min(1, e)) : 0;
  return K(t / 0.16) * (1 - K((t - 0.76) / 0.2));
}
function Un(e) {
  let t = Number.isFinite(e) ? Math.max(0, Math.min(1, e)) : 0;
  return (
    K(t / 0.05) * (1 - K((t - 0.13) / 0.07)) +
    K((t - 0.72) / 0.06) * (1 - K((t - 0.94) / 0.06))
  );
}
var Wn = 0.6;
function Gn(e) {
  let t = Number.isFinite(e) ? Math.max(0, Math.min(1, e)) : 0,
    n = K((t - 0.12) / 0.16),
    r = K((t - 0.28) / 0.14),
    i = K((t - 0.42) / 0.28);
  return {
    active: t > 0,
    turn: K(t / 0.18) * (1 - K((t - 0.8) / 0.2)),
    visible: t >= 0.12,
    x: 0.1 * (1 - r),
    y: -0.26 * (1 - n) - 0.06 * (1 - r),
    z: Wn * (1 - i),
    handWeight: K(t / 0.12) * (1 - K((t - 0.74) / 0.16)),
  };
}
