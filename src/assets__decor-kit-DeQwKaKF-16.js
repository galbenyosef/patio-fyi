// assets__decor-kit-DeQwKaKF 16 — range
// Lines 4603-4946 of readable/assets__decor-kit-DeQwKaKF.pretty.js (statement-aligned).
var X = class {
    constructor() {
      this.parts = new Map();
    }
    leaf(e, t, r, i, a, o, s, c = 0, l = 0) {
      let d = jt(e).clone();
      if (l) {
        let e = d.attributes.position;
        for (let t = 0; t < e.count; t++) {
          let n = e.getX(t),
            r = e.getZ(t);
          e.setY(t, e.getY(t) - l * n * n + Math.abs(r) * l * 0.3);
        }
      }
      let p = new n().compose(
        new y(...r),
        new u().setFromEuler(new f(c, o, s, `YZX`)),
        new y(i, 1, a),
      );
      (d.applyMatrix4(p),
        this.parts.has(t) || this.parts.set(t, []),
        this.parts.get(t).push(d));
    }
    build(e) {
      for (let [t, n] of this.parts) {
        let r = g(n, !1);
        r.computeVertexNormals();
        let i = new o(r, ie(t));
        ((i.castShadow = i.receiveShadow = !0), e.add(i));
      }
    }
  },
  Mt = [3104042, 4160058, 3500847, 5081663, 2641962, 5934917],
  Z = (e, t = e.pick(Mt), n = 0.55) => U(t, n),
  Nt = (e = 5917226) => U(e, 0.8);
function Pt(e) {
  let t = x(e),
    n = new m(),
    r = new X(),
    i = t.range(1.2, 1.9),
    a = Y(n, t, 0.2, 0.36),
    o = t.int(1, 3),
    s = [Z(t, 3104042, 0.35), Z(t, 3828528, 0.35)];
  for (let e = 0; e < o; e++) {
    let e = t() * 7,
      o = t.range(0.02, 0.15),
      c = i * t.range(0.8, 1),
      l = [Math.cos(e) * o * c, a + c, Math.sin(e) * o * c];
    M(
      n,
      [[0, a, 0], [l[0] * 0.4, a + c * 0.45, l[2] * 0.4], l],
      0.018,
      Nt(7035450),
      12,
      6,
    );
    let u = t.int(10, 18);
    for (let e = 0; e < u; e++) {
      let n = 0.35 + (e / u) * 0.65,
        i = [l[0] * n, a + c * n, l[2] * n],
        o = e * 2.4 + t() * 0.5,
        d = t.range(0.22, 0.34);
      r.leaf(
        `fig`,
        t.pick(s),
        i,
        d,
        d * 0.85,
        o,
        t.range(-0.5, 0.35),
        t.range(-0.3, 0.3),
        0.6,
      );
    }
  }
  return (r.build(n), F(n));
}
function Ft(e) {
  let t = x(e),
    n = new m(),
    r = new X(),
    i = Y(n, t, t.range(0.12, 0.18), t.range(0.2, 0.3)),
    a = t.chance(0.6),
    o = a ? [U(4020780, 0.5), U(2968098, 0.5)] : [U(4877110, 0.5)],
    s = U(14272858, 0.5);
  for (let e = 0; e < t.int(8, 16); e++) {
    let e = t() * 7,
      n = t() * 0.08,
      c = t.range(0.35, 0.8),
      l = t.range(0.05, 0.08),
      u = [Math.cos(e) * n, i - 0.01, Math.sin(e) * n];
    (r.leaf(
      `blade`,
      t.pick(o),
      u,
      c,
      l,
      e,
      Math.PI / 2 - t.range(0.03, 0.25),
      t() * 3,
    ),
      a &&
        t.chance(0.5) &&
        r.leaf(
          `blade`,
          s,
          [u[0] + 0.001, u[1], u[2]],
          c * 0.98,
          l * 1.08,
          e,
          Math.PI / 2 - 0.12,
          0,
        ));
  }
  return (r.build(n), F(n));
}
function It(e) {
  let t = x(e),
    n = new m(),
    r = new X(),
    i = Y(n, t, t.range(0.2, 0.26), t.range(0.3, 0.4)),
    a = [Z(t, 2382378, 0.4), Z(t, 3107632, 0.4)];
  for (let e = 0; e < t.int(7, 12); e++) {
    let o = e * 2.3 + t() * 0.4,
      s = t.range(0.25, 0.7),
      c = t.range(0.5, 1),
      l = [Math.cos(o) * c * s, i + c * t.range(0.6, 1), Math.sin(o) * c * s];
    M(
      n,
      [[0, i, 0], [l[0] * 0.3, i + (l[1] - i) * 0.7, l[2] * 0.3], l],
      0.008,
      U(4880954, 0.6),
      10,
      5,
    );
    let u = t.range(0.3, 0.5);
    r.leaf(
      `monstera`,
      t.pick(a),
      l,
      u,
      u * 1.1,
      o,
      t.range(-0.6, -0.1),
      t.range(-0.3, 0.3),
      0.3,
    );
  }
  return (r.build(n), F(n));
}
function Lt(t) {
  let n = x(t),
    r = new m(),
    i = new X(),
    a = n.chance(0.5),
    o = [U(4160058, 0.45), U(5934917, 0.45), U(9414730, 0.45)],
    s;
  if (a) {
    let e = -1.3,
      t = new m();
    ((t.position.y = e),
      r.add(t),
      (s = Y(t, n, 0.13, 0.16, n.pick([`glazed`, `basket`, `terracotta`]))));
    for (let t = 0; t < 4; t++) {
      let n = (t / 4) * Math.PI * 2;
      M(
        r,
        [
          [0, 0, 0],
          [Math.cos(n) * 0.08, e * 0.5, Math.sin(n) * 0.08],
          [Math.cos(n) * 0.14, -1.1800000000000002, Math.sin(n) * 0.14],
          [Math.cos(n) * 0.1, -1.32, Math.sin(n) * 0.1],
        ],
        0.004,
        U(15327695, 0.95),
        12,
        4,
      );
    }
    s += e;
  } else s = Y(r, n, 0.13, 0.16);
  let c = n.int(5, 10);
  for (let t = 0; t < c; t++) {
    let t = n() * 7,
      c = n.range(0.3, a ? 1.1 : 0.7),
      l = [[0, s, 0]];
    for (let e = 1; e <= 6; e++) {
      let r = e / 6,
        i = 0.13 + r * 0.15;
      l.push([
        Math.cos(t + r * n.range(-0.5, 0.5)) * i,
        s + 0.05 - r * r * c * (a ? 1 : 0.8),
        Math.sin(t + r * 0.3) * i,
      ]);
    }
    M(r, l, 0.003, U(4880954, 0.6), 16, 4);
    let u = new e(l.map((e) => new y(...e)));
    for (let e = 0; e < 8; e++) {
      let t = u.getPoint(0.1 + e * 0.11);
      i.leaf(
        `heart`,
        n.pick(o),
        [t.x, t.y, t.z],
        n.range(0.06, 0.1),
        n.range(0.06, 0.09),
        n() * 7,
        n.range(-0.3, 0.4),
      );
    }
  }
  for (let e = 0; e < 10; e++)
    i.leaf(
      `heart`,
      n.pick(o),
      [n.range(-0.08, 0.08), s + 0.02, n.range(-0.08, 0.08)],
      0.09,
      0.08,
      n() * 7,
      n.range(-0.6, -0.2),
    );
  return (i.build(r), F(r, a ? { ceiling: !0 } : {}));
}
function Rt(t) {
  let n = x(t),
    r = new m(),
    i = new X(),
    a = Y(r, n, n.range(0.2, 0.26), n.range(0.34, 0.44)),
    o = [Z(n, 4160058, 0.5), Z(n, 5081663, 0.5)];
  for (let t = 0; t < n.int(4, 7); t++) {
    let t = n() * 7,
      s = n.range(0.7, 1.4),
      c = n.range(0.1, 0.35),
      l = [Math.cos(t) * c * s, a + s, Math.sin(t) * c * s],
      u = [l[0] * 0.5, a + s * 0.6, l[2] * 0.5],
      d = new e([
        new y(0, a, 0),
        new y(...u),
        new y(l[0] * 1.6, l[1] - 0.25, l[2] * 1.6),
      ]);
    M(
      r,
      d.getPoints(8).map((e) => [e.x, e.y, e.z]),
      0.006,
      U(5929530, 0.6),
      12,
      4,
    );
    for (let e = 3; e <= 20; e++) {
      let t = e / 20,
        r = d.getPoint(t),
        a = d.getTangent(t),
        s = Math.atan2(-a.z, a.x);
      for (let e of [-1, 1])
        i.leaf(
          `lance`,
          n.pick(o),
          [r.x, r.y, r.z],
          0.28 * (1 - t * 0.5),
          0.05,
          s + e * 1.2,
          -0.4 - t * 0.4,
          e * 0.3,
        );
    }
  }
  return (i.build(r), F(r));
}
function zt(e) {
  let t = x(e),
    n = new m(),
    r = new X(),
    i = Y(n, t, 0.17, 0.3),
    a = t.chance(0.4)
      ? [U(3809060, 0.25), U(4860462, 0.25)]
      : [U(2050596, 0.25), U(2775594, 0.25)],
    o = t.range(0.7, 1.3);
  M(
    n,
    [
      [0, i, 0],
      [0.03, i + o * 0.5, 0],
      [0, i + o, 0.02],
    ],
    0.014,
    Nt(5917226),
    10,
    6,
  );
  for (let e = 0; e < t.int(10, 16); e++) {
    let n = 0.25 + (0.75 * e) / 16,
      s = e * 2.4;
    r.leaf(
      `oval`,
      t.pick(a),
      [0.02 * Math.sin(n * 3), i + o * n, 0.01],
      t.range(0.2, 0.3),
      0.14,
      s,
      t.range(-0.3, 0.4),
      0,
      0.4,
    );
  }
  return (r.build(n), F(n));
}
function Bt(e) {
  let t = x(e),
    n = new m(),
    r = new X(),
    i = Y(n, t, t.range(0.14, 0.2), 0.24),
    a = [U(2313509, 0.35), U(2972973, 0.35)];
  for (let e = 0; e < t.int(14, 22); e++) {
    let e = t() * 7,
      n = t.range(0.28, 0.42);
    r.leaf(
      `lance`,
      t.pick(a),
      [Math.cos(e) * 0.04, i + t.range(0.08, 0.2), Math.sin(e) * 0.04],
      n,
      n * 0.45,
      e,
      t.range(0.1, 0.9),
      t.range(-0.2, 0.2),
      0.8,
    );
  }
  let o = U(16185072, 0.5);
  for (let e = 0; e < t.int(2, 5); e++) {
    let e = t() * 7,
      a = t.range(0.35, 0.55),
      s = [Math.cos(e) * 0.08, i + a, Math.sin(e) * 0.08];
    (M(
      n,
      [[0, i, 0], [s[0] * 0.7, i + a * 0.6, s[2] * 0.7], s],
      0.003,
      U(4160058, 0.6),
      8,
      4,
    ),
      r.leaf(`oval`, o, s, 0.11, 0.07, e, 1.25),
      (b(n, 0.008, U(15261872, 0.8), s[0], s[1] + 0.04, s[2], 6).scale.y = 3));
  }
  return (r.build(n), F(n));
}
