// assets__yard-dressing-view-Du2F6MWT 17 — rotation
// Lines 5116-5171 of readable/assets__yard-dressing-view-Du2F6MWT.pretty.js (statement-aligned).
function hr(e, t, n, r, i) {
  let a = t.chance(0.6) ? H(2762276, 0.45, 0.6) : H(15263456, 0.5, 0.2),
    o = t.chance(0.5) ? G(t.pick([6965812, 10121288, 3811874]), 0.6, 9) : a;
  (z(e, 0.06, 0.06, 0.03, a, n, r - 0.03, i, 16),
    z(e, 0.011, 0.011, 0.26, a, n, r - 0.29, i, 8),
    P(
      e,
      [
        [0, 0],
        [0.09, 0.005],
        [0.11, 0.04],
        [0.095, 0.08],
        [0.04, 0.1],
        [0, 0.1],
      ],
      a,
      n,
      r - 0.4,
      i,
      20,
    ),
    j(
      e,
      0.06,
      H(16051416, 0.3, 0, { transparent: !0, opacity: 0.9 }),
      n,
      r - 0.42,
      i,
      12,
    ));
  let s = new D();
  (s.position.set(n, r - 0.36, i), e.add(s));
  for (let e = 0; e < 5; e++) {
    let t = new D();
    ((t.rotation.y = (e * J * 2) / 5),
      s.add(t),
      V(t, 0.12, 0.012, 0.03, a, 0.14, 0, 0),
      gr(t, 0.5, 0.009, 0.13, o, 0.44, -0.008, 0));
  }
  s.userData.tick = (e) => {
    s.rotation.y = e * 2.4;
  };
}
var gr = (e, t, n, r, i, a, o, s) => {
  let c = I(e, ln(t, n, r, 0.004), i, a, o, s);
  return ((c.rotation.x = 0.12), c);
};
function _r(e, t, n, r, i = 1) {
  let o = H(1973532, 0.5, 0.6);
  (V(e, 0.1, 0.2, 0.012, o, t, n, r + i * 0.006),
    V(e, 0.02, 0.02, 0.1, o, t, n + 0.05, r + i * 0.05),
    B(e, 0.13, 0.2, 0.13, ge(16180920, 0.45), t, n - 0.1, r + i * 0.12),
    B(e, 0.06, 0.1, 0.06, Ce(16767392, 1.2), t, n - 0.06, r + i * 0.12),
    I(e, new a(0.11, 0.08, 4), o, t, n + 0.14, r + i * 0.12, 0, J / 4, 0),
    B(e, 0.15, 0.015, 0.15, o, t, n - 0.11, r + i * 0.12));
}
