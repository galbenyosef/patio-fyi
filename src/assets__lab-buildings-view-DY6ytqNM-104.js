// assets__lab-buildings-view-DY6ytqNM 104 — math
// Lines 33464-33478 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
var Vl = `"Leelawadee UI", "Leelawadee", Tahoma, "Arial Black", sans-serif`;
function Hl(e, t, n, r, i, o, s, c, l) {
  let u = Math.hypot(c, l),
    d = Math.atan2(l, c);
  (e.add(
    r,
    new a(o - i, 0.03, u).rotateX(d).translate((i + o) / 2, s - l / 2, c / 2),
    t,
    n,
    { planar: (e, t, n) => [e, n * 0.5] },
  ),
    e.box(r, t, n, i, o, s - l - 0.25, s - l, c - 0.015, c + 0.015, {
      planar: (e, t) => [e, t],
    }));
}
