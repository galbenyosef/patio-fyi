/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
var e = { up: 4, down: 9, mainRate: 28, tailRate: 45, moving: 0.3 };
function t(t) {
  return t.hp > 0
    ? t.owner >= 0 || Math.hypot(t.vel[0], t.vel[1], t.vel[2]) > e.moving
    : !1;
}
var n = (e) => +!!t(e);
function r(n, r, i) {
  return r.hp > 0
    ? t(r)
      ? Math.min(1, n + i / e.up)
      : Math.max(0, n - i / e.down)
    : 0;
}
var i = (e, t) => t * e * e * (3 - 2 * e);
export { r as i, n, i as r, e as t };
//# sourceMappingURL=rotor-spool-BGBN_bun.js.map
