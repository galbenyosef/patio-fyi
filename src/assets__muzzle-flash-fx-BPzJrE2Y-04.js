// assets__muzzle-flash-fx-BPzJrE2Y 04 — math
// Lines 1104-1385 of readable/assets__muzzle-flash-fx-BPzJrE2Y.pretty.js (statement-aligned).
function C(e, t, n, r, i, a, o = {}) {
  let { add: s, alp: c, rng: l, PAL: u } = e,
    d = o.style === `third`,
    f = o.scale ?? 1,
    p = o.aim ?? 0,
    m = Math.min(1, o.heat ?? 0),
    h = o.day ?? 1,
    v = l.range(0.82, 1.18) * (l.next() < 0.11 ? 1.25 : 1) * (1 + 0.3 * m),
    x = t.radius > 0 ? 0 : o.cold ? t.firstPop : 0,
    C = (t.radius > 0 ? t.radius : 0.21 * x) * v * f * (1 - 0.55 * p),
    T = Math.max(0.055 * f, (o.lift ?? 0) * C),
    E = n[0] + r[0] * T,
    D = n[1] + r[1] * T,
    O = n[2] + r[2] * T,
    k = (o.ticks ?? (d ? S.ticks : 3)) * g,
    A;
  if (C > 0.004) {
    ((A = y(E, D, O)),
      (A.kind = 7),
      (A.ax = r[0]),
      (A.ay = r[1]),
      (A.az = r[2]));
    let e = C * 1.1;
    (b(A, e, e, e * 1.3, e * 1.3),
      (A.rot = l.next() * 6.283),
      (A.c0 = u.flash),
      (A.c1 = u.flashLate),
      (A.alpha = 1),
      (A.life = k),
      (A.amode = 5),
      (A.ramp = 1.2),
      c.emit(A),
      (A = y(E, D, O)),
      (A.kind = 4),
      b(A, C * 0.55, C * 0.55, C * 0.3, C * 0.3),
      (A.c0 = u.coreHot),
      (A.c1 = u.flashOut),
      (A.alpha = 1),
      (A.life = k * 0.45),
      (A.amode = 3),
      s.emit(A));
  }
  let j = t.cone * v * f * (1 - 0.35 * p) * (d ? S.plume : 1);
  j > 0.004 &&
    ((A = y(n[0] + r[0] * j, n[1] + r[1] * j, n[2] + r[2] * j)),
    (A.kind = 5),
    (A.ax = r[0]),
    (A.ay = r[1]),
    (A.az = r[2]),
    b(A, 0.42 * j * t.coneWidth, j, 0.26 * j * t.coneWidth, j * 1.15),
    (A.c0 = u.cone),
    (A.c1 = u.flashOut),
    (A.alpha = d ? S.plumeAlpha : 0.38),
    (A.life = k),
    (A.amode = 5),
    (A.ramp = 0.6),
    s.emit(A));
  for (let e of t.jets) {
    let t = Math.cos(e.angle),
      o = Math.sin(e.angle),
      m = l.range(0.75, 1.2) * v * f * (1 - 0.35 * p);
    ((_[0] = i[0] * t + a[0] * o + r[0] * e.tilt),
      (_[1] = i[1] * t + a[1] * o + r[1] * e.tilt),
      (_[2] = i[2] * t + a[2] * o + r[2] * e.tilt));
    let h = Math.hypot(_[0], _[1], _[2]) || 1;
    ((_[0] /= h), (_[1] /= h), (_[2] /= h));
    let g = e.len * m * 0.6,
      x = e.width * m,
      S = n[0] - r[0] * 0.01 * f,
      C = n[1] - r[1] * 0.01 * f,
      w = n[2] - r[2] * 0.01 * f;
    if (d) {
      ((A = y(S + _[0] * g * 0.5, C + _[1] * g * 0.5, w + _[2] * g * 0.5)),
        (A.kind = 5),
        (A.ax = _[0]),
        (A.ay = _[1]),
        (A.az = _[2]),
        b(
          A,
          Math.max(x * 0.8, 0.012 * f),
          g * 0.55,
          Math.max(x * 0.5, 0.008 * f),
          g * 0.65,
        ),
        (A.c0 = u.cone),
        (A.c1 = u.flashOut),
        (A.alpha = 0.75),
        (A.life = k),
        (A.amode = 5),
        (A.ramp = 0.6),
        s.emit(A));
      continue;
    }
    for (let [e, t] of [
      [0.42, 1.45],
      [0.85, 1.05],
    ]) {
      let n = Math.max(x * t, 0.012 * f);
      ((A = y(S + _[0] * g * e, C + _[1] * g * e, w + _[2] * g * e)),
        (A.kind = 7),
        (A.ax = _[0]),
        (A.ay = _[1]),
        (A.az = _[2]),
        b(A, n, n, n * 1.35, n * 1.35),
        (A.rot = l.next() * 6.283),
        (A.c0 = u.flash),
        (A.c1 = u.flashLate),
        (A.alpha = e < 0.5 ? 0.85 : 0.6),
        (A.life = k),
        (A.amode = 5),
        (A.ramp = 1.2),
        c.emit(A));
    }
  }
  let M = Math.max(C, 0.02 * f) * 1.5;
  if (
    (t.bright > 0.1 || x
      ? ((A = y(E, D, O)),
        (A.kind = 4),
        b(A, M, M, M * 0.6, M * 0.6),
        (A.c0 = u.flashOut),
        (A.c1 = u.flashLate),
        (A.alpha = 0.18),
        (A.life = k * 1.4),
        (A.amode = 0),
        s.emit(A))
      : ((A = y(E, D, O)),
        (A.kind = 4),
        b(A, 0.03 * f, 0.03 * f, 0.02 * f, 0.02 * f),
        (A.c0 = u.flashLate),
        (A.c1 = u.flashLate),
        (A.alpha = 0.35),
        (A.life = k),
        (A.amode = 5),
        s.emit(A)),
    o.eye && t.bright > 0.1)
  ) {
    let e = o.eye[0] - E,
      n = o.eye[1] - D,
      i = o.eye[2] - O,
      a = Math.hypot(e, n, i) || 1,
      s = Math.max(0, (r[0] * e + r[1] * n + r[2] * i) / a);
    if (a > 6) {
      let e =
        Math.max(C * 0.7, a * 0.0042) *
        (1 + 0.7 * s) *
        Math.min(1.4, 0.75 + 0.35 * t.bright);
      ((A = y(E, D, O)),
        (A.kind = 4),
        b(A, e, e, e * 0.8, e * 0.8),
        (A.c0 = u.coreHot),
        (A.c1 = u.flash),
        (A.alpha = Math.min(
          1,
          (0.55 + 0.45 * s) * (0.7 + 0.3 * Math.min(1, t.bright)),
        )),
        (A.life = k),
        (A.amode = 5),
        c.emit(A));
    }
  }
  if (o.sparks !== !1 && !d && C > 0.004) {
    let e = Math.min(6, 1 + Math.round(t.bright * 2 * l.range(0.6, 1.2))),
      n = typeof o.sparks == `number` ? o.sparks : 1;
    for (let t = 0; t < e; t++) {
      if (n < 1 && l.next() >= n) continue;
      let e = l.range(5, 10) * Math.sqrt(f);
      ((_[0] = r[0] + (l.next() * 2 - 1) * 0.26),
        (_[1] = r[1] + (l.next() * 2 - 1) * 0.26),
        (_[2] = r[2] + (l.next() * 2 - 1) * 0.26));
      let t = Math.hypot(_[0], _[1], _[2]) || 1;
      ((A = y(E + r[0] * 0.3 * f, D + r[1] * 0.3 * f, O + r[2] * 0.3 * f)),
        (A.vx = (_[0] / t) * e),
        (A.vy = (_[1] / t) * e),
        (A.vz = (_[2] / t) * e),
        (A.kind = 2),
        (A.stretch = 1),
        b(A, 0.01 * f, 0.09 * f, 0.005 * f, 0.04 * f),
        (A.c0 = u.sparkWarm),
        (A.c1 = u.sparkEnd),
        (A.life = l.range(0.08, 0.16)),
        (A.grav = 9.8),
        (A.drag = 2),
        (A.amode = 0),
        s.emit(A));
    }
  }
  o.smoke !== !1 && w(e, t, E, D, O, r, f);
  let N = (t.bright + x * 0.6) * v;
  if ((o.glare ?? 0) > 0 && N > 0.05) {
    let e = Math.min(1, N * 0.45) * (1 - h * 0.75) * o.glare,
      t = (0.18 + 0.16 * Math.sqrt(N)) * f;
    ((A = y(E, D, O)),
      (A.kind = 4),
      b(A, t, t, t * 1.3, t * 1.3),
      (A.c0 = u.glow),
      (A.c1 = u.flashLate),
      (A.alpha = 0.32 * e),
      (A.life = 3 * g),
      (A.amode = 3),
      s.emit(A));
  }
  return { light: N };
}
function w(e, t, n, r, i, a, o = 1, s = 1) {
  let { alp: c, rng: l, PAL: u } = e,
    d = t.smoke > 1.6 ? 3 : 2,
    f = t.smoke * o;
  for (let p = 0; p < d; p++) {
    let d = l.range(1.2, 2.6) * Math.sqrt(t.smoke);
    ((_[0] = a[0] + (l.next() * 2 - 1) * 0.35),
      (_[1] = a[1] + (l.next() * 2 - 1) * 0.35),
      (_[2] = a[2] + (l.next() * 2 - 1) * 0.35));
    let m = Math.hypot(_[0], _[1], _[2]) || 1,
      h = (0.25 + p * 0.18) * o,
      g = y(n + a[0] * h, r + a[1] * h, i + a[2] * h);
    ((g.vx = (_[0] / m) * d),
      (g.vy = (_[1] / m) * d + 0.45),
      (g.vz = (_[2] / m) * d),
      (g.kind = 0),
      b(g, 0.05 * f, 0.05 * f, 0.22 * f, 0.22 * f),
      (g.rot = l.next() * 6.283),
      (g.rotVel = l.range(-1, 1)),
      (g.c0 = e.lit(u.smokeMid, [0, 0, 0])),
      (g.c1 = e.lit(u.smokeLight, [0, 0, 0])),
      (g.alpha = Math.min(0.42, 0.2 + 0.06 * t.smoke) * s * x),
      (g.life = l.range(0.55, 0.95)),
      (g.drag = 3.5),
      (g.amode = 1),
      c.emit(g));
  }
}
function T(e, t, n, r, i = 1) {
  let { alp: a, rng: o, PAL: s } = e,
    c = Math.min(1.5, r),
    l = y(t[0] + n[0] * 0.02 * i, t[1] + 0.01 * i, t[2] + n[2] * 0.02 * i);
  ((l.vx = n[0] * o.range(0.02, 0.12) + o.range(-0.05, 0.05)),
    (l.vy = o.range(0.22, 0.45)),
    (l.vz = n[2] * o.range(0.02, 0.12) + o.range(-0.05, 0.05)),
    (l.kind = 0),
    b(
      l,
      0.016 * i,
      0.016 * i,
      o.range(0.08, 0.14) * i * (1 + c * 0.5),
      o.range(0.12, 0.2) * i * (1 + c * 0.5),
    ),
    (l.rot = o.next() * 6.283),
    (l.rotVel = o.range(-1.6, 1.6)),
    (l.c0 = e.lit(s.smokeLight, [0, 0, 0])),
    (l.c1 = e.lit(s.smokeWisp, [0, 0, 0])),
    (l.alpha = Math.min(0.3, 0.1 + 0.12 * c) * x),
    (l.life = o.range(1.2, 2.2)),
    (l.drag = 0.9),
    (l.amode = 1),
    (l.ramp = 0.7),
    a.emit(l));
}
var E = (e) => [
    ((e >> 16) & 255) / 255,
    ((e >> 8) & 255) / 255,
    (e & 255) / 255,
  ],
  D = Object.freeze({
    flash: E(16747550),
    flashOut: E(16730632),
    flashLate: E(12598278),
    cone: E(16751672),
    coreHot: E(16764040),
    glow: E(16747578),
    sparkWarm: E(16764794),
    sparkEnd: E(16734740),
    smokeMid: E(8749178),
    smokeLight: E(9407363),
    smokeWisp: E(10131604),
  }),
  O = Object.freeze({
    cool: 1 / 5,
    wispAfter: 0.15,
    wispFrom: 0.22,
    wispRate: 8,
  });
