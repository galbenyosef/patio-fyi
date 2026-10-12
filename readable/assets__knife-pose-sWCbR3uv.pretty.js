/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
var e = 0.62,
  t = 0.2,
  n = (e) => ((e = e < 0 ? 0 : e > 1 ? 1 : e), e * e * (3 - 2 * e));
function r(e, t, r) {
  let i = 1;
  for (; i < e.length - 1 && t > e[i][0];) i++;
  let a = e[i - 1],
    o = e[i],
    s = n((t - a[0]) / Math.max(1e-6, o[0] - a[0]));
  for (let e = 1; e < a.length; e++) r[e - 1] = a[e] + (o[e] - a[e]) * s;
  return r;
}
var i = [
    [0, 0.06, -0.08, -0.34],
    [0.09, 0.4, 0.56, 0.1],
    [t, 0.03, 0.44, -0.62],
    [0.28, 0.04, 0.42, -0.6],
    [0.44, 0.26, 0.12, -0.28],
    [e, 0.06, -0.08, -0.34],
  ],
  a = [
    [0, 0, 0],
    [0.09, -0.32, 0.25],
    [t, 0.3, 1],
    [0.3, 0.22, 0.9],
    [0.5, 0, 0.2],
    [e, 0, 0],
  ],
  o = [0, 0, 0],
  s = [0, 0];
function c(e, t = {}) {
  return e >= 0 && e < 0.62
    ? (r(i, e, o),
      r(a, e, s),
      (t.x = o[0]),
      (t.y = o[1]),
      (t.z = o[2]),
      (t.yaw = s[0]),
      (t.lunge = s[1]),
      (t.w = n(e / 0.05) * (1 - n((e - 0.46) / 0.15))),
      (t.knife = e > 0.03 && e < 0.5),
      t)
    : null;
}
export { r as i, e as n, c as r, t };
//# sourceMappingURL=knife-pose-sWCbR3uv.js.map
