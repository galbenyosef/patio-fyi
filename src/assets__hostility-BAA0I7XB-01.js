// assets__hostility-BAA0I7XB 01 — owner
// Lines 1-12 of readable/assets__hostility-BAA0I7XB.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
var e = (e) => e?.match?.mode === `ffa`;
function t(t, n, r) {
  return !n || !r || n === r || n.id === r.id
    ? !1
    : e(t)
      ? !(n.owner > 0 && n.owner === r.owner)
      : n.team !== r.team;
}
function n(t, n, r, i) {
  return i ? (e(t) ? !(r > 0 && i.owner === r) : i.team !== n) : !1;
}
