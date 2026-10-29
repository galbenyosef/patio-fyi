// assets__lab-buildings-view-DY6ytqNM 189 — math
// Lines 59523-59838 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function V_(e, t, n, r, i, a, o, s, c, l, u) {
  let d = o;
  for (let f of [...r.ys.slice(1), r.H]
    .filter((e) => e > o + 0.001 && e < s - 0.001)
    .concat([s]))
    (f > d + 0.001 &&
      e.box(t, n, Y(r, (i + a) / 2, (d + f) / 2), i, a, d, f, c, l, u),
      (d = f));
}
function H_(e, t, n) {
  let r = [];
  for (let i = 0; i < e.nb; i++) {
    let a = i === 0 ? t : Math.max(t, i * e.bw),
      o = i === e.nb - 1 ? n : Math.min(n, (i + 1) * e.bw);
    o - a > 0.001 && r.push([a, o, i]);
  }
  return r;
}
function U_(e, t, n, r, i, a, o, s, c, l, u, d) {
  for (let [f, p] of H_(r, i, a))
    e.box(t, n, Y(r, (f + p) / 2, d ?? (o + s) / 2), f, p, o, s, c, l, u);
}
var W_ = (e, t, n, r) => ({
    planar: (i, a) => [(i - e) / (t - e), (a - n) / (r - n)],
  }),
  G_ = (e, t, n, r, i, a, o, s, c, l) =>
    e.box(t, n, r, i, a, o, s, c, l, W_(i, a, o, s));
function X(e, t, n, r, i, a, o, s, c, l = c, u = 16, d = !1) {
  e.add(t, new C(l, c, s - o, u, 1, d).translate(i, (o + s) / 2, a), n, r);
}
function K_(e, t, n, r, i, a, o, s, c, l) {
  e.add(
    t,
    new w(
      new T(
        A_([
          [i, o],
          [a, o],
          [(i + a) / 2, o + s],
        ]),
      ),
      { depth: l - c, bevelEnabled: !1 },
    ).translate(0, 0, c),
    n,
    r,
  );
}
var q_ = new l(),
  J_ = new ee(),
  Y_ = new l(0, 1, 0);
function X_(e, t, n, r, i, a, o, s = 10, c = !0) {
  q_.set(a[0] - i[0], a[1] - i[1], a[2] - i[2]);
  let l = q_.length();
  (J_.setFromUnitVectors(Y_, q_.normalize()),
    e.add(
      t,
      new C(o, o, l, s, 1, c)
        .applyQuaternion(J_)
        .translate((i[0] + a[0]) / 2, (i[1] + a[1]) / 2, (i[2] + a[2]) / 2),
      n,
      r,
    ));
}
function Z_(e, t, n, r, a, o, s = 10) {
  for (let i = 0; i < a.length - 1; i++) X_(e, t, n, r, a[i], a[i + 1], o, s);
  for (let c = 1; c < a.length - 1; c++)
    e.add(t, new i(o * 1.02, s, 6).translate(...a[c]), n, r);
}
function Q_(e, t, n, r, i, a, o = `miYellow`, s = 1.05) {
  let c = Math.hypot(i[0] - r[0], i[1] - r[1]),
    l = Math.max(1, Math.round(c / 1.4));
  (k(e, o, t, n, [r[0], a + s, r[1]], [i[0], a + s, i[1]], 0.05),
    k(e, o, t, n, [r[0], a + s * 0.5, r[1]], [i[0], a + s * 0.5, i[1]], 0.04));
  for (let c = 0; c <= l; c++) {
    let u = c / l,
      d = r[0] + (i[0] - r[0]) * u,
      f = r[1] + (i[1] - r[1]) * u;
    e.box(o, t, n, d - 0.025, d + 0.025, a, a + s, f - 0.025, f + 0.025);
  }
}
function $_(e, t, n, r, i, a, o, s, c, l = `miSteel`, u = `miYellow`) {
  let d = Math.max(2, Math.round((o - a) / 0.19)),
    f = (o - a) / d,
    p = 0.26,
    m = r + i * d * p;
  for (let o = 0; o < d; o++) {
    let u = r + i * o * p,
      d = u + i * p,
      m = a + (o + 1) * f;
    e.box(
      l,
      t,
      Y(n, (u + d) / 2, m - 0.1),
      Math.min(u, d),
      Math.max(u, d),
      m - 0.05,
      m,
      s + 0.06,
      c - 0.06,
    );
  }
  let h = Y(n, (r + m) / 2, (a + o) / 2);
  for (let i of [s + 0.03, c - 0.03]) {
    (k(e, l, t, h, [r, a - 0.12, i], [m, o - 0.12, i], 0.07),
      (i > s + 0.05 || !n.noInnerRail) &&
        k(e, u, t, h, [r, a + 0.95, i], [m, o + 0.95, i], 0.05));
    for (let n of [0.12, 0.5, 0.88]) {
      let s = r + (m - r) * n,
        c = a + (o - a) * n;
      e.box(
        u,
        t,
        h,
        s - 0.025,
        s + 0.025,
        c - 0.1,
        c + 0.95,
        i - 0.025,
        i + 0.025,
      );
    }
  }
  return m;
}
function ev(e, t, n, r, i, a, o, s, c = !0, l = `miSteel`) {
  let u = Y(n, (r + i) / 2, a - 0.2);
  if ((e.box(l, t, u, r, i, a - 0.08, a, o, s), c))
    for (let n of [r + 0.05, i - 0.05])
      e.box(l, t, u, n - 0.05, n + 0.05, 0, a - 0.08, s - 0.1, s);
}
function tv(e, t, n, r, i, a, o = 3, s = 0) {
  for (let c = 0; c < o; c++) {
    let o = s + c * 0.2,
      l = (c % 2) * 0.3,
      u = c * 0.03;
    for (let s = r + l; s < i - 0.25; s += 0.6)
      e.box(
        `miSandbag`,
        t,
        Y(n, s + 0.3, o + 0.3),
        s + 0.02,
        Math.min(i, s + 0.58),
        o,
        o + 0.19,
        a - 0.2 + u,
        a + 0.2 - u,
      );
  }
}
function nv(e, t, n, r, i, a, o, s = 0) {
  for (let c = 0; c < o; c++) {
    let o = s + c * 0.2,
      l = (c % 2) * 0.3,
      u = c * 0.03;
    for (let s = r + l; s < i - 0.25; s += 0.6)
      e.box(
        `miSandbag`,
        t,
        n,
        s + 0.02,
        Math.min(i, s + 0.58),
        o,
        o + 0.19,
        a - 0.2 + u,
        a + 0.2 - u,
      );
  }
}
function rv(e, t, n, r, a, o, s, c, l, u = {}) {
  let f = u.seg || 20;
  (X(e, l, t, n, r, a, o, o + s, c, c, f),
    u.cone
      ? e.add(
          l,
          new d(c + 0.05, u.cone, f).translate(r, o + s + u.cone / 2, a),
          t,
          n,
        )
      : e.add(
          l,
          new i(c, f, 5, 0, Math.PI * 2, 0, Math.PI / 2)
            .scale(1, u.dome ?? 0.35, 1)
            .translate(r, o + s, a),
          t,
          n,
        ));
  for (let i of u.bands || [])
    X(e, w_, t, n, r, a, o + s * i, o + s * i + 0.1, c + 0.03, c + 0.03, f, !0);
  if (u.ladder != null) {
    let i = u.ladder,
      l = Math.cos(i),
      d = Math.sin(i);
    iv(
      e,
      t,
      n,
      r + l * (c + 0.2),
      a + d * (c + 0.2),
      o + 0.3,
      o + s + 0.3,
      -d,
      l,
    );
  }
}
function iv(e, t, n, r, i, a, o, s, c, l = `miSteel`) {
  for (let u of [-0.22, 0.22])
    e.box(
      l,
      t,
      n,
      r + s * u - 0.025,
      r + s * u + 0.025,
      a,
      o,
      i + c * u - 0.025,
      i + c * u + 0.025,
    );
  for (let u = a + 0.3; u < o; u += 0.3)
    k(
      e,
      l,
      t,
      n,
      [r - s * 0.22, u, i - c * 0.22],
      [r + s * 0.22, u, i + c * 0.22],
      0.03,
    );
}
function av(e, t, n, r, a, o, s, c, u, d = !1) {
  let f = new E().makeRotationY(d ? Math.PI / 2 : 0),
    p = new E().makeTranslation(r, a, o);
  e.add(
    u,
    new C(s, s, c, 20, 1, !0)
      .rotateZ(Math.PI / 2)
      .applyMatrix4(f)
      .applyMatrix4(p),
    t,
    n,
  );
  for (let r of [-1, 1])
    e.add(
      u,
      new i(s, 20, 5, 0, Math.PI * 2, 0, Math.PI / 2)
        .scale(1, 0.4, 1)
        .rotateZ((-r * Math.PI) / 2)
        .translate((r * c) / 2, 0, 0)
        .applyMatrix4(f)
        .applyMatrix4(p),
      t,
      n,
    );
  for (let i of [-0.3, 0.3]) {
    let u = new l(i * c, 0, 0).applyMatrix4(f),
      p = d ? [s * 0.9, 0.3] : [0.3, s * 0.9];
    e.box(
      `miConcrete`,
      t,
      n,
      r + u.x - p[0],
      r + u.x + p[0],
      0,
      a - s * 0.6,
      o + u.z - p[1],
      o + u.z + p[1],
    );
  }
}
function ov(e, t, n, r, i, a, o, s, c, l, u, d = 0.1) {
  let f = [
      [-1, -1],
      [1, -1],
      [1, 1],
      [-1, 1],
    ],
    p = (e, t) => {
      let n = (s + (c - s) * t) / 2;
      return [r + f[e][0] * n, a + o * t, i + f[e][1] * n];
    };
  for (let r = 0; r < 4; r++) k(e, l, t, n, p(r, 0), p(r, 1), d);
  for (let r = 0; r < u; r++) {
    let i = r / u,
      a = (r + 1) / u;
    for (let r = 0; r < 4; r++) {
      let o = (r + 1) % 4;
      (k(e, l, t, n, p(r, a), p(o, a), d * 0.6),
        k(e, l, t, n, p(r, i), p(o, a), d * 0.45));
    }
  }
}
function sv(e, t, n, r, a, o, s) {
  (X(e, `miSilver`, t, n, r, o, a, a + s, 0.07, 0.045, 8),
    e.add(`brass`, new i(0.11, 10, 8).translate(r, a + s + 0.08, o), t, n),
    G_(
      e,
      `miSgFlag`,
      t,
      n,
      r + 0.06,
      r + 1.9,
      a + s - 1.25,
      a + s - 0.1,
      o - 0.01,
      o + 0.01,
    ));
}
function cv(e, t, n, r, i, a = 0) {
  (X(e, `miYellow`, t, n, r, i, a, a + 1, 0.13, 0.13, 10),
    X(e, `miRubber`, t, n, r, i, a + 0.72, a + 0.82, 0.135, 0.135, 10, !0));
}
function lv(e, t, n, r, i, a, o = 0) {
  X(e, a, t, n, r, i, o, o + 0.88, 0.29, 0.29, 12);
  for (let a of [0.3, 0.6])
    X(e, w_, t, n, r, i, o + 0.88 * a, o + 0.88 * a + 0.03, 0.3, 0.3, 12, !0);
}
