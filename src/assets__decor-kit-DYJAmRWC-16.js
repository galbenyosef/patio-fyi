// assets__decor-kit-DYJAmRWC 16 — range
// Lines 4603-4946 of readable/assets__decor-kit-DYJAmRWC.pretty.js (statement-aligned).
var X = class {
    constructor() {
      this.parts = new Map();
    }
    leaf(e, t, n, r, i, o, s, c = 0, l = 0) {
      let u = jt(e).clone();
      if (l) {
        let e = u.attributes.position;
        for (let t = 0; t < e.count; t++) {
          let n = e.getX(t),
            r = e.getZ(t);
          e.setY(t, e.getY(t) - l * n * n + Math.abs(r) * l * 0.3);
        }
      }
      let f = new ee().compose(
        new a(...n),
        new d().setFromEuler(new h(c, o, s, `YZX`)),
        new a(r, 1, i),
      );
      (u.applyMatrix4(f),
        this.parts.has(t) || this.parts.set(t, []),
        this.parts.get(t).push(u));
    }
    build(t) {
      for (let [n, r] of this.parts) {
        let i = v(r, !1);
        i.computeVertexNormals();
        let a = new e(i, ie(n));
        ((a.castShadow = a.receiveShadow = !0), t.add(a));
      }
    }
  },
  Mt = [3104042, 4160058, 3500847, 5081663, 2641962, 5934917],
  Z = (e, t = e.pick(Mt), n = 0.55) => U(t, n),
  Nt = (e = 5917226) => U(e, 0.8);
function Pt(e) {
  let t = x(e),
    n = new f(),
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
    n = new f(),
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
    n = new f(),
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
function Lt(e) {
  let t = x(e),
    n = new f(),
    r = new X(),
    i = t.chance(0.5),
    o = [U(4160058, 0.45), U(5934917, 0.45), U(9414730, 0.45)],
    s;
  if (i) {
    let e = -1.3,
      r = new f();
    ((r.position.y = e),
      n.add(r),
      (s = Y(r, t, 0.13, 0.16, t.pick([`glazed`, `basket`, `terracotta`]))));
    for (let t = 0; t < 4; t++) {
      let r = (t / 4) * Math.PI * 2;
      M(
        n,
        [
          [0, 0, 0],
          [Math.cos(r) * 0.08, e * 0.5, Math.sin(r) * 0.08],
          [Math.cos(r) * 0.14, -1.1800000000000002, Math.sin(r) * 0.14],
          [Math.cos(r) * 0.1, -1.32, Math.sin(r) * 0.1],
        ],
        0.004,
        U(15327695, 0.95),
        12,
        4,
      );
    }
    s += e;
  } else s = Y(n, t, 0.13, 0.16);
  let l = t.int(5, 10);
  for (let e = 0; e < l; e++) {
    let e = t() * 7,
      l = t.range(0.3, i ? 1.1 : 0.7),
      u = [[0, s, 0]];
    for (let n = 1; n <= 6; n++) {
      let r = n / 6,
        a = 0.13 + r * 0.15;
      u.push([
        Math.cos(e + r * t.range(-0.5, 0.5)) * a,
        s + 0.05 - r * r * l * (i ? 1 : 0.8),
        Math.sin(e + r * 0.3) * a,
      ]);
    }
    M(n, u, 0.003, U(4880954, 0.6), 16, 4);
    let d = new c(u.map((e) => new a(...e)));
    for (let e = 0; e < 8; e++) {
      let n = d.getPoint(0.1 + e * 0.11);
      r.leaf(
        `heart`,
        t.pick(o),
        [n.x, n.y, n.z],
        t.range(0.06, 0.1),
        t.range(0.06, 0.09),
        t() * 7,
        t.range(-0.3, 0.4),
      );
    }
  }
  for (let e = 0; e < 10; e++)
    r.leaf(
      `heart`,
      t.pick(o),
      [t.range(-0.08, 0.08), s + 0.02, t.range(-0.08, 0.08)],
      0.09,
      0.08,
      t() * 7,
      t.range(-0.6, -0.2),
    );
  return (r.build(n), F(n, i ? { ceiling: !0 } : {}));
}
function Rt(e) {
  let t = x(e),
    n = new f(),
    r = new X(),
    i = Y(n, t, t.range(0.2, 0.26), t.range(0.34, 0.44)),
    o = [Z(t, 4160058, 0.5), Z(t, 5081663, 0.5)];
  for (let e = 0; e < t.int(4, 7); e++) {
    let e = t() * 7,
      s = t.range(0.7, 1.4),
      l = t.range(0.1, 0.35),
      u = [Math.cos(e) * l * s, i + s, Math.sin(e) * l * s],
      d = [u[0] * 0.5, i + s * 0.6, u[2] * 0.5],
      f = new c([
        new a(0, i, 0),
        new a(...d),
        new a(u[0] * 1.6, u[1] - 0.25, u[2] * 1.6),
      ]);
    M(
      n,
      f.getPoints(8).map((e) => [e.x, e.y, e.z]),
      0.006,
      U(5929530, 0.6),
      12,
      4,
    );
    for (let e = 3; e <= 20; e++) {
      let n = e / 20,
        i = f.getPoint(n),
        a = f.getTangent(n),
        s = Math.atan2(-a.z, a.x);
      for (let e of [-1, 1])
        r.leaf(
          `lance`,
          t.pick(o),
          [i.x, i.y, i.z],
          0.28 * (1 - n * 0.5),
          0.05,
          s + e * 1.2,
          -0.4 - n * 0.4,
          e * 0.3,
        );
    }
  }
  return (r.build(n), F(n));
}
function zt(e) {
  let t = x(e),
    n = new f(),
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
    n = new f(),
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
