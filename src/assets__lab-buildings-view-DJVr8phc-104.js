// assets__lab-buildings-view-DJVr8phc 104 — math
// Lines 33464-33478 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
var Hl = `"Leelawadee UI", "Leelawadee", Tahoma, "Arial Black", sans-serif`;
function Ul(e, t, n, i, a, o, s, c, l) {
  let u = Math.hypot(c, l),
    d = Math.atan2(l, c);
  (e.add(
    i,
    new r(o - a, 0.03, u).rotateX(d).translate((a + o) / 2, s - l / 2, c / 2),
    t,
    n,
    { planar: (e, t, n) => [e, n * 0.5] },
  ),
    e.box(i, t, n, a, o, s - l - 0.25, s - l, c - 0.015, c + 0.015, {
      planar: (e, t) => [e, t],
    }));
}
