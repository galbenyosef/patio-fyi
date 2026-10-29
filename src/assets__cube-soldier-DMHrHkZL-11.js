// assets__cube-soldier-DMHrHkZL 11 — bevel
// Lines 3043-3349 of readable/assets__cube-soldier-DMHrHkZL.pretty.js (statement-aligned).
var kr = (e, t) => {
  for (let n of e) n.applyMatrix4(t);
  return e;
};
function Ar(e, t) {
  let n = [],
    r = [];
  for (let t = 38; t <= 114; t += 5) {
    let n = yr((t * Math.PI) / 180, e),
      i = Math.max(vr(n), 0.3) + 0.024;
    r.push({ p: br(n, i, 0.0045), n: xr(n, i) });
  }
  for (let e = 0; e < r.length - 1; e++) {
    let i = r[e],
      a = r[e + 1],
      o = a.p.clone().sub(i.p),
      s = o.length();
    o.normalize();
    let c = i.n.clone().add(a.n).normalize(),
      l = c.sub(o.clone().multiplyScalar(c.dot(o))).normalize();
    ($n
      .makeBasis(l, o.clone().cross(l).normalize(), o)
      .setPosition(i.p.clone().add(a.p).multiplyScalar(0.5)),
      n.push(
        U(0.01, 0.038, s + 0.004, 0, 0, 0, t, { bevel: 0.004 }).applyMatrix4(
          $n,
        ),
      ),
      e % 2 &&
        n.push(
          U(0.004, 0.014, s * 0.55, 0.0045, 0, 0, K.dark, {
            bevel: 0,
          }).applyMatrix4($n),
        ));
  }
  return { p: n, pts: r };
}
var jr = (e, t) => {
  e.deleteAttribute(`uv`);
  let n = e.index ? e.toNonIndexed() : e;
  n !== e && e.dispose();
  let r = n.attributes.position.count,
    i = new Float32Array(r * 3);
  nr.set(t);
  for (let e = 0; e < r; e++) i.set([nr.r, nr.g, nr.b], e * 3);
  return (
    n.setAttribute(`color`, new s(i, 3)),
    n.setAttribute(`aTag`, new s(new Float32Array(r), 1)),
    ar(n)
  );
};
function Mr(e, t, n, r, i) {
  let a = new w(e, e, t, qn.disc);
  return (
    a.applyQuaternion(new _().setFromUnitVectors(Zn, i)),
    a.translate(r.x, r.y, r.z),
    jr(a, n)
  );
}
function Nr(e, t, n) {
  return jr(new c(new d(e), qn.tube[0], t, qn.tube[1], !1), n);
}
var Pr = 0.4;
function Fr(e, t) {
  let n = e.attributes.position;
  for (let e = 0; e < n.count; e++) n.setX(e, t(n.getX(e), n.getY(e)));
  e.deleteAttribute(`normal`);
  let r = A(e, 1e-5);
  (e.dispose(), r.computeVertexNormals());
  let i = r.toNonIndexed();
  return (r.dispose(), ar(i));
}
function Ir(e, t, n, r = 0, i = 0) {
  let a = new k(),
    o = r - e / 2,
    s = i - t / 2;
  return (
    a.moveTo(o + n, s),
    a.lineTo(o + e - n, s),
    a.quadraticCurveTo(o + e, s, o + e, s + n),
    a.lineTo(o + e, s + t - n),
    a.quadraticCurveTo(o + e, s + t, o + e - n, s + t),
    a.lineTo(o + n, s + t),
    a.quadraticCurveTo(o, s + t, o, s + t - n),
    a.lineTo(o, s + n),
    a.quadraticCurveTo(o, s, o + n, s),
    a
  );
}
function Lr(e, t, n, r, i, a, o, s, c = 3) {
  let l = new D(e, {
    depth: t,
    bevelEnabled: !0,
    bevelThickness: n,
    bevelSize: n * 0.85,
    bevelSegments: Math.max(1, Math.round(c * qn.bevel)),
    curveSegments: qn.curve,
  });
  return (
    l.translate(0, 0, n),
    l.rotateY((i * Math.PI) / 2),
    l.translate(a, o, s),
    jr(l, r)
  );
}
function Rr(e, t) {
  let n = rr(e, 0.86),
    r = [],
    i = 0.24000000000000002,
    a = -0.004,
    s = 0.134;
  for (let c of [-1, 1]) {
    let l = c * 0.25,
      u = (e) => l + c * e,
      d = [
        Lr(
          Ir(0.1, 0.12200000000000001, 0.036),
          0.012,
          0.011,
          3815733,
          c,
          c * 0.152,
          i,
          a,
        ),
        Lr(
          Ir(0.116, 0.138, 0.042),
          0.004,
          0.004,
          rr(e, 0.62),
          c,
          c * 0.186,
          i,
          a,
        ),
        Lr(Ir(0.112, s, 0.042), 0.018, 0.014, n, c, c * 0.196, i, a, 4),
        Lr(
          Ir(0.078, 0.07, 0.022, 0.006, -0.02),
          0.001,
          0.002,
          rr(e, 0.92),
          c,
          u(-0.002),
          i,
          a,
        ),
        Lr(
          Ir(0.014, 0.026, 0.005),
          0.003,
          0.002,
          K.dark,
          c,
          u(0.001),
          0.21200000000000002,
          -0.034,
          2,
        ),
        Lr(
          Ir(0.019, 0.019, 0.005),
          0.003,
          0.002,
          rr(e, 1.02),
          c,
          u(0.001),
          0.21800000000000003,
          -0.01,
          2,
        ),
        Mr(
          0.0045,
          0.004,
          rr(e, 0.7),
          new o(u(0.0065), 0.21800000000000003, -0.01),
          new o(c, 0, 0),
        ),
        Lr(
          Ir(0.02, 0.03, 0.009),
          0.012,
          0.006,
          rr(e, 0.8),
          c,
          c * 0.214,
          0.252,
          -0.062,
          3,
        ),
      ],
      f = (e) => 1 - Pr * _r((e - i) / (s / 2), -0.15, 1),
      p = (e, t) => c * (0.152 + (Math.abs(e) - 0.152) * f(t));
    for (let e of d) r.push(Fr(e, p));
    let m = new o(c, 0, 0),
      h = new o(p(u(0.002), 0.278), 0.278, 0.028),
      g = br(yr((124 * Math.PI) / 180, c), 0.28600000000000003, 0.008),
      _ = g.distanceTo(h);
    ($n.lookAt(h, g, Zn).setPosition(h.clone().add(g).multiplyScalar(0.5)),
      r.push(
        U(0.012, 0.028, _ + 0.02, 0, 0, 0, t, { bevel: 0.006 }).applyMatrix4(
          $n,
        ),
        U(0.02, 0.044, 0.04, g.x, g.y, g.z, t, { bevel: 0.009 }),
        ...[0.35, 0.62, 0.9].map((e) =>
          Mr(0.0045, 0.016, K.dark, h.clone().lerp(g, e), m),
        ),
        Mr(0.02, 0.012, t, h, m),
        Mr(0.013, 0.018, rr(t, 0.78), h, m),
        Mr(0.006, 0.02, K.dark, h, m),
        Nr(
          [
            g.clone().add(new o(0, -0.02, 0.01)),
            new o(g.x + c * 0.012, g.y - 0.07, g.z + 0.006),
            new o(c * 0.222, 0.18000000000000002, 0.066),
            new o(c * 0.228, 0.20500000000000002, 0.054000000000000006),
          ],
          0.0042,
          rr(e, 1.12),
        ),
      ));
    let v = new o(c * 0.222, 0.16800000000000004, -0.036000000000000004),
      y = new o(0, -1, -0.35).normalize();
    r.push(
      Mr(0.0095, 0.03, K.dark, v, y),
      ...[-0.008, 0, 0.008].map((e) =>
        Mr(0.0105, 0.003, 2894890, v.clone().addScaledVector(y, e), y),
      ),
      Nr(
        [
          v.clone().addScaledVector(y, 0.014),
          new o(c * 0.215, 0.11000000000000001, -0.044),
          new o(c * 0.13, 0.03, 0.03),
        ],
        0.0055,
        2634298,
      ),
    );
  }
  let c = Kn(18);
  return (
    r.push(
      Or(
        [0.215, 0.21000000000000002, -0.064],
        [G.w / 2 - 0.02, c, Gn - 0.045],
        0.013,
        K.dark,
      ),
      Or(
        [G.w / 2 - 0.02, c, Gn - 0.045],
        [0.065, c, Gn - 0.045],
        0.013,
        K.dark,
      ),
      U(0.04, 0.032, 0.036, 0.055, c, Gn - 0.045, K.dark, { bevel: 0.01 }),
    ),
    r
  );
}
function zr() {
  let e = K.nvg,
    t = rr(e, 0.62),
    n = [
      U(0.075, 0.05, 0.045, 0, -0.012, -0.018, t, { bevel: 0.01 }),
      U(0.05, 0.1, 0.036, 0, -0.07, -0.03, t, { bevel: 0.01 }),
      U(0.036, 0.028, 0.05, 0, -0.03, -0.046, K.steel, { bevel: 0.006 }),
      U(0.2, 0.055, 0.09, 0, -0.1, -0.05, e, { bevel: 0.016 }),
      U(0.13, 0.014, 0.07, 0, -0.068, -0.05, rr(e, 1.12), { bevel: 0.005 }),
      ...[-1, 1].map((e) =>
        U(0.024, 0.04, 0.04, e * 0.112, -0.1, -0.05, t, { bevel: 0.008 }),
      ),
      U(0.03, 0.03, 0.03, -0.1, -0.085, 0, t, { bevel: 0.008 }),
    ];
  for (let [r, i, a, o, s] of [
    [-0.108, -0.42, 0.13, 0.05, -0.006],
    [-0.041, 0, 0.19, 0.062, 0],
    [0.041, 0, 0.19, 0.062, 0],
    [0.108, 0.42, 0.13, 0.05, -0.006],
  ]) {
    let c = o + 0.01,
      l = [
        U(o, o, a, 0, 0, -a / 2, e, { bevel: o * 0.32 }),
        ...[0.18, 0.34, 0.5].map((e) =>
          U(c, c, 0.014, 0, 0, -a * e, t, { bevel: 0.006 }),
        ),
        U(c, c, 0.03, 0, 0, -a + 0.01, t, { bevel: 0.01 }),
        U(o * 0.82, o * 0.82, 0.008, 0, 0, -a - 0.006, K.lensRim, {
          bevel: 0.004,
        }),
        U(o * 0.66, o * 0.66, 0.006, 0, 0, -a - 0.009, K.lens, {
          bevel: 0.003,
        }),
        U(
          o * 0.2,
          o * 0.2,
          0.003,
          o * 0.15,
          o * 0.15,
          -a - 0.0125,
          K.lensGlint,
          { bevel: 0 },
        ),
        U(o * 0.9, o * 0.9, 0.04, 0, 0, 0.018, K.rubber, { bevel: 0.012 }),
      ];
    ($n
      .makeRotationY(-i)
      .setPosition(r, -0.145 + s, 0.02 - (a < 0.15 ? 0.03 : 0)),
      n.push(...kr(l, $n)));
  }
  return n;
}
