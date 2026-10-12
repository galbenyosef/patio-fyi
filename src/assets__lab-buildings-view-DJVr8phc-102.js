// assets__lab-buildings-view-DJVr8phc 102 — box
// Lines 32468-32490 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
var Bl =
  (e, t, n, r, i, a, o = 0.6) =>
  (s, c, l) => {
    for (let u of n)
      for (let n = 0; n < l.nb; n++) {
        if (u > l.top || e(u, n, l.nb) !== `window`) continue;
        let d = (u === 0 && t.win0) || t.win,
          f = Wc(l, u),
          p = (n + 0.5) * l.bw,
          m = Math.min(d.w, l.bw - 0.5),
          h = Math.min(d.h, f - d.sill - 0.35),
          g = l.ys[u] + d.sill;
        s.box(r, c, l.grid[u][n], p - m / 2, p + m / 2, g, g + h, i, a, {
          planar: (e, t) => [(e - p) / o, (t - g) / o],
        });
      }
  };
function Vl(e, t, n, r, i, a, o, s, c, l, u, d, f = 0.015) {
  (e.box(r, t, n, i, a, o, u, 0, f),
    e.box(r, t, n, i, a, d, s, 0, f),
    e.box(r, t, n, i, c, u, d, 0, f),
    e.box(r, t, n, l, a, u, d, 0, f));
}
