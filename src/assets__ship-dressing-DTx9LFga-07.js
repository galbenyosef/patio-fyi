// assets__ship-dressing-DTx9LFga 07 — math
// Lines 1887-2199 of readable/assets__ship-dressing-DTx9LFga.pretty.js (statement-aligned).
function qe() {
  let e = new m(),
    t = P(14277074, 0.6, 0.2),
    n = P(2303786, 0.5, 0.6);
  w(e, 0.26, 0.37, 15, t, 0, 0, 0, 14);
  for (let t = 0.4; t < 8.5; t += 0.32) N(e, 0.05, 0.03, 0.42, n, -0.4, t, 0);
  for (let t of [-1, 1])
    D(e, [-0.4, 0.3, t * 0.22], [-0.38, 8.6, t * 0.22], 0.018, n, 4);
  (N(e, 1.8, 0.08, 1.8, n, 0, 8.6, 0),
    Be(
      e,
      [
        [-0.9, -0.9],
        [0.9, -0.9],
        [0.9, 0.9],
        [-0.9, 0.9],
      ],
      8.68,
      t,
    ));
  for (let n of [-1, 1])
    D(e, [0, 7.4, 0], [n * 0.85, 8.6, n * 0.85], 0.03, t, 5);
  $(e, 0.08, 6, t, 0, 11.1, 0);
  for (let [t, r] of [
    [-2.9, 16724e3],
    [2.9, 3211104],
  ])
    (N(e, 0.2, 0.25, 0.2, n, 0, 11.2, t),
      N(e, 0.16, 0.12, 0.16, T(r, 1.6), 0, 11.28, t));
  for (let t of [-2.8, 2.8]) D(e, [0, 11.1, t], [0, 14, 0], 0.012, n, 4);
  return (N(e, 0.3, 0.35, 0.3, n, 0, 15, 0), j(e, [1.8, 15.4, 6]));
}
function Je(e, t, n = []) {
  let r = new m(),
    i = P(2830388, 0.6, 0.45),
    a = P(329223, 1, 0),
    o = (e) => !n.some(([t, n]) => e > t - 0.2 && e < n + 0.2);
  for (let n = -e / 2 + 0.8; n < e / 2 - 0.3; n += 1.6)
    o(n) &&
      (N(r, 0.08, t - 0.12, 0.16, i, n, 0.02, -0.08),
      N(r, 0.08, 0.1, 0.3, i, n, t - 0.12, -0.15));
  for (let t = -e / 2 + 3; t < e / 2 - 1; t += 6)
    o(t) && N(r, 0.8, 0.2, 0.02, a, t, 0.02, -0.012);
  return j(r, [e, t, 0.4]);
}
function Ye(e, t) {
  let n = new m(),
    r = P(2830388, 0.6, 0.45),
    i = P(329223, 1, 0);
  for (let i = -e / 2 + 0.55; i < e / 2 - 0.3; i += 1.1)
    N(n, 0.1, t - 0.1, 0.07, r, -0.05, 0.02, i);
  for (let t = -e / 2 + 1.1; t < e / 2 - 0.5; t += 2.2)
    N(n, 0.02, 0.18, 0.5, i, -0.012, 0.02, t);
  return j(n, [0.2, t, e]);
}
var Xe = 9278358,
  Ze = null;
function Qe() {
  return (Ze ??= new i({
    color: Xe,
    roughness: 0.5,
    metalness: 0.7,
    side: 2,
    alphaTest: 0.5,
    map: O(
      128,
      128,
      (e) => {
        ((e.fillStyle = `#fff`), e.fillRect(0, 0, 128, 128));
        for (let t = 0; t < 128; t += 16)
          for (let n = 0; n < 128; n += 16) e.clearRect(n + 2, t + 2, 12, 12);
      },
      !0,
    ),
  }));
}
function $e(t, n, r, i, a, o, s = 0) {
  let c = new v(n, r),
    l = c.attributes.uv;
  for (let e = 0; e < l.count; e++)
    l.setXY(e, (l.getX(e) * n) / 0.64, (l.getY(e) * r) / 0.64);
  let u = new e(c, Qe());
  return (u.position.set(i, a + r / 2, o), (u.rotation.y = s), t.add(u), u);
}
function et(e, t, n, r) {
  let i = k(r),
    a = P(2829614, 0.6, 0.6),
    o = P(7304311, 0.5, 0.8),
    s = P(13214242, 0.6, 0.3);
  for (let r = 0; r < 26; r++)
    N(
      e,
      0.16,
      0.08,
      0.1,
      r % 7 ? a : s,
      (i() - 0.5) * (t - 0.3),
      Math.floor(r / 9) * 0.08,
      (i() - 0.5) * (n - 0.3),
      i() * 3,
    );
  for (let r = 0; r < 4; r++) {
    let a = i() * Math.PI,
      s = Math.min(t, n) * 0.9;
    D(
      e,
      [(Math.cos(a) * -s) / 2, 0.22 + r * 0.04, (Math.sin(a) * -s) / 2],
      [(Math.cos(a) * s) / 2, 0.26 + r * 0.04, (Math.sin(a) * s) / 2],
      0.02,
      o,
      5,
    );
  }
}
function tt(e = 1.4, t = 1.3, n = 1.3, r = 1) {
  let i = new m(),
    a = P(Xe, 0.5, 0.7);
  for (let [r, o] of [
    [-1, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
  ])
    N(i, 0.06, t, 0.06, a, r * (e / 2 - 0.03), 0, o * (n / 2 - 0.03));
  for (let r of [0, t - 0.06]) {
    for (let t of [-1, 1]) N(i, e, 0.06, 0.06, a, 0, r, t * (n / 2 - 0.03));
    for (let t of [-1, 1]) N(i, 0.06, 0.06, n, a, t * (e / 2 - 0.03), r, 0);
  }
  for (let r of [-1, 1])
    ($e(i, e - 0.06, t - 0.1, 0, 0.05, r * (n / 2 - 0.03), 0),
      $e(i, n - 0.06, t - 0.1, r * (e / 2 - 0.03), 0.05, 0, Math.PI / 2));
  let o = $e(i, e - 0.06, n - 0.06, 0, t - 0.03, 0);
  ((o.rotation.x = -Math.PI / 2), (o.position.y = t - 0.03), et(i, e, n, r));
  for (let t of [-1, 1]) N(i, 0.1, 0.06, n + 0.04, a, t * e * 0.3, 0, 0);
  return j(i, [e, t, n]);
}
function nt(t = 2.5, n = 2.45, r = 3.9) {
  let i = new m(),
    a = P(6253426, 0.6, 0.4),
    o = P(3817541, 0.55, 0.5),
    s = P(7304311, 0.5, 0.8),
    c = P(1382426, 0.9, 0);
  (M(i, t, n - 0.02, r - 0.1, 0.05, a, 0, 0, -0.05),
    N(i, t - 0.3, n - 0.35, 0.02, c, 0, 0.1, r / 2 - 0.09));
  for (let e = 0; e < 12; e++)
    D(
      i,
      [-t / 2 + 0.3 + (e * (t - 0.6)) / 11, 0.15, r / 2 - 0.35],
      [-t / 2 + 0.3 + (e * (t - 0.6)) / 11 + 0.05, n - 0.4, r / 2 - 0.3],
      0.018,
      s,
      5,
    );
  $e(i, t - 0.3, n - 0.35, 0, 0.1, r / 2 - 0.04);
  for (let e of [-1, 1])
    N(i, 0.07, n - 0.3, 0.06, o, e * (t / 2 - 0.15), 0.08, r / 2 - 0.03);
  for (let e of [0.08, n - 0.28])
    N(i, t - 0.26, 0.06, 0.06, o, 0, e, r / 2 - 0.03);
  N(i, 0.05, 0.2, 0.06, P(13214242, 0.6, 0.3), t / 2 - 0.3, 1.1, r / 2 - 0.01);
  for (let e of [-1, 1])
    for (let n = 0; n < 5; n++)
      N(i, 0.02, 0.05, 1.2, o, e * (t / 2 + 0.005), 1.4 + n * 0.12, -0.6);
  let l = new e(
    new v(1.6, 0.3),
    Y(`LASHING GEAR`, {
      w: 512,
      h: 96,
      ink: `#e9e5d8`,
      font: `800 64px Arial, sans-serif`,
      alpha: 0.9,
    }),
  );
  return (
    l.position.set(0, n - 0.17, r / 2 - 0.02),
    i.add(l),
    (l.userData.keep = !0),
    j(i, [t, n, r])
  );
}
function rt(t = 3.2, n = 1.4) {
  let r = new m(),
    i = P(3877404, 0.6, 0.05),
    a = P(3817542, 0.6, 0.3),
    o = P(11569724, 0.35, 0.8);
  (N(r, t, 0.08, n, i, 0, 0.86, 0),
    N(r, t - 0.1, 0.8, n - 0.12, a, 0, 0.04, 0));
  for (let e = 0; e < 4; e++)
    (N(
      r,
      t - 0.3,
      0.02,
      0.02,
      P(1382426, 0.9, 0),
      0,
      0.2 + e * 0.17,
      n / 2 - 0.05,
    ),
      N(r, 0.2, 0.03, 0.03, o, 0, 0.27 + e * 0.17, n / 2 - 0.04));
  let s = new e(new v(t * 0.7, n * 0.7), P(14275253, 0.9, 0));
  return (
    (s.rotation.x = -Math.PI / 2),
    s.position.set(-0.2, 0.945, 0),
    r.add(s),
    D(
      r,
      [t / 2 - 0.3, 0.94, -n / 2 + 0.2],
      [t / 2 - 0.3, 1.45, -n / 2 + 0.2],
      0.015,
      a,
      5,
    ),
    D(
      r,
      [t / 2 - 0.3, 1.45, -n / 2 + 0.2],
      [t / 2 - 0.7, 1.45, -n / 2 + 0.4],
      0.015,
      a,
      5,
    ),
    N(r, 0.28, 0.1, 0.2, a, t / 2 - 0.75, 1.32, -n / 2 + 0.4),
    N(r, 0.2, 0.02, 0.14, T(16760944, 1.6), t / 2 - 0.75, 1.31, -n / 2 + 0.4),
    N(r, 0.25, 0.02, 0.06, o, 0.6, 0.95, 0.2, 0.5),
    j(r, [t, 1.5, n])
  );
}
function it(t = 2.6, r = 0.85) {
  let i = new m(),
    a = P(3817542, 0.6, 0.3),
    o = P(2238251, 0.5, 0.2),
    s = P(1118997, 0.6, 0.2);
  N(i, t, 0.78, r, a, 0, 0, 0);
  let c = new e(new n(t, 0.06, r * 0.55), o);
  (c.position.set(0, 0.8, r * 0.18),
    (c.rotation.x = 0.18),
    i.add(c),
    N(i, t, 0.42, r * 0.45, a, 0, 0.78, -r * 0.27));
  for (let [e, n] of [
    [-t / 4, 3133546],
    [t / 4, 4169983],
  ])
    (N(i, t * 0.42, 0.44, 0.06, s, e, 0.8, -r * 0.02),
      N(i, t * 0.38, 0.38, 0.02, T(n, 0.55), e, 0.83, 0.02),
      N(i, t * 0.44, 0.04, 0.2, s, e, 1.24, -0.06),
      w(i, 0.05, 0.05, 0.03, P(5922918, 0.4, 0.6), e, 0.83, r * 0.3, 10));
  return j(i, [t, 1.3, r]);
}
function at() {
  let e = new m(),
    t = P(2830131, 0.6, 0.3),
    n = P(1776928, 0.9, 0);
  (w(e, 0.25, 0.28, 0.06, t, 0, 0, 0, 14),
    w(e, 0.06, 0.06, 0.62, t, 0, 0.06, 0, 10),
    M(e, 0.55, 0.12, 0.55, 0.04, n, 0, 0.68, 0),
    M(e, 0.12, 0.6, 0.55, 0.04, n, -0.24, 0.78, 0));
  for (let n of [-0.27, 0.27]) N(e, 0.4, 0.05, 0.06, t, -0.02, 0.98, n);
  return j(e, [0.6, 1.4, 0.6]);
}
function ot() {
  let e = new m(),
    t = P(2830131, 0.6, 0.3);
  (M(e, 0.26, 0.18, 0.1, 0.03, t, 0, 0, 0.05),
    N(e, 0.2, 0.12, 0.03, T(16765072, 2.2), 0, 0.03, 0.105));
  for (let n of [-0.05, 0.05]) N(e, 0.012, 0.13, 0.012, t, n, 0.025, 0.125);
  return j(e, [0.3, 0.2, 0.15]);
}
function st(
  t,
  { w: n = 0.9, h: r = 0.3, ink: i = `#f2f2ee`, bg: a = 2059834 } = {},
) {
  let o = new m();
  N(o, n, r, 0.012, P(a, 0.6, 0.1), 0, 0, 0);
  let s = new e(
    new v(n * 0.94, r * 0.8),
    Y(t, {
      w: 512,
      h: 128,
      ink: i,
      font: `800 80px Arial, sans-serif`,
      alpha: 1,
    }),
  );
  return (
    s.position.set(0, r / 2, 0.008),
    o.add(s),
    (s.userData.keep = !0),
    j(o, [n, r, 0.02])
  );
}
var ct = [1.05, 0.52, 0.23, 0.085],
  lt = [0.124, 0.215, -0.42, 1.18],
  ut = [0.064, -0.168, 0.52, 1.05],
  dt = [0.47, 0.7, 1.14, 1.98];
function ft(e, t, n) {
  let r = 0;
  for (let i = 0; i < 4; i++)
    r += ct[i] * Math.sin(lt[i] * e + ut[i] * t + dt[i] * n);
  return r;
}
var pt = (() => {
  let e = null;
  return () =>
    (e ??= O(64, 64, (e) => {
      let t = e.createRadialGradient(32, 32, 0, 32, 32, 32);
      for (let e = 0; e <= 8; e++) {
        let n = e / 8;
        t.addColorStop(
          n,
          `rgba(255,255,255,${Math.exp(-n * n * 4.5).toFixed(3)})`,
        );
      }
      ((e.fillStyle = t), e.fillRect(0, 0, 64, 64));
    }));
})();
