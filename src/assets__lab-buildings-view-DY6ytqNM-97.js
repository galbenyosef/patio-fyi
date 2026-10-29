// assets__lab-buildings-view-DY6ytqNM 97 — math
// Lines 29557-29904 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function _l(e, t, n) {
  let r = t.clone().multiply(new E().makeTranslation(n.x || 0, 0, n.z || 0)),
    o = n.a,
    s = n.b,
    c = s > o;
  c &&
    ((r = r.multiply(new E().makeRotationY(Math.PI / 2))), ([o, s] = [s, o]));
  let u = n.cell ?? 0,
    f = Math.tan(n.p1),
    p = Math.tan(n.p2),
    m = n.over,
    h = n.trim,
    g = n.hip ?? 0.2,
    _ = o + m,
    v = s + m,
    y = n.y - m * f,
    b = Math.min(n.k ?? m + 0.8, v - 0.3),
    x = _ - b,
    S = v - b,
    ee = y + b * f,
    te = x - S,
    ne = ee + S * p;
  (gl(e, r, u, n.mat, _, v, y, x, S, ee, c, !0, !1),
    gl(e, r, u, n.mat, x, S, ee, te, 0, ne, c, !1));
  for (let t of [-1, 1])
    (e.box(
      h,
      r,
      u,
      -_ - 0.05,
      _ + 0.05,
      y - 0.24,
      y + 0.03,
      t * v - 0.07,
      t * v + 0.07,
    ),
      e.box(h, r, u, t * _ - 0.07, t * _ + 0.07, y - 0.24, y + 0.03, -v, v));
  let re = !!n.gable,
    ie = re ? te + S * (n.gIn ?? 0.45) : te,
    ae = ie - te,
    oe = ee + (x - ie) * p;
  for (let t of [-1, 1])
    for (let i of [-1, 1])
      if (
        (k(e, h, r, u, [t * _, y + 0.05, i * v], [t * x, ee + 0.06, i * S], g),
        k(
          e,
          h,
          r,
          u,
          [t * x, ee + 0.06, i * S],
          [t * ie, (re ? oe : ne) + 0.06, i * ae],
          g,
        ),
        n.horn)
      ) {
        let a = n.horn;
        k(
          e,
          h,
          r,
          u,
          [t * (_ - a * 0.7), y + 0.06, i * (v - a * 0.7)],
          [t * (_ + a * 0.3), y + a * 0.6, i * (v + a * 0.3)],
          g * 1.25,
        );
      }
  let se = te;
  if (re) {
    let t = ae / Math.cos(n.p2),
      i = 2 * (ie + 0.35);
    se = ie + 0.35;
    for (let o of [1, -1]) {
      let s = new l(0, -Math.sin(n.p2), o * Math.cos(n.p2)),
        d = new l(0, Math.cos(n.p2), o * Math.sin(n.p2)),
        f = new l(0, ne, 0)
          .addScaledVector(s, t / 2 + 0.15)
          .addScaledVector(d, 0.08);
      (e.add(
        n.mat,
        new a(i, 0.1, t + 0.3).rotateX(o * n.p2).translate(f.x, f.y, f.z),
        r,
        u,
        { swap: c },
      ),
        k(
          e,
          h,
          r,
          u,
          [o * se, oe + 0.02, ae + 0.25],
          [o * se, ne + 0.14, 0],
          0.14,
        ),
        k(
          e,
          h,
          r,
          u,
          [o * se, oe + 0.02, -ae - 0.25],
          [o * se, ne + 0.14, 0],
          0.14,
        ));
    }
    let o = new T([Vc(-ae + 0.05, oe), Vc(ae - 0.05, oe), Vc(0, ne + 0.05)]);
    for (let t of [-1, 1])
      e.add(
        n.gable,
        new w(o, { depth: 0.08, bevelEnabled: !1 })
          .rotateY(Math.PI / 2)
          .translate(t * ie - 0.04, 0, 0),
        r,
        u,
      );
  }
  if (
    se > 0.05 &&
    (e.box(n.ridge || h, r, u, -se, se, ne - 0.05, ne + 0.34, -0.17, 0.17),
    n.curl)
  )
    for (let t of [-1, 1])
      k(
        e,
        n.ridge || h,
        r,
        u,
        [t * (se - 0.1), ne + 0.2, 0],
        [t * (se + n.curl * 0.45), ne + 0.2 + n.curl, 0],
        0.28,
      );
  return (
    n.finial &&
      (e.add(
        n.finial,
        new C(0.12, 0.28, 1.2, 10).translate(0, ne + 0.5, 0),
        r,
        u,
      ),
      e.add(n.finial, new i(0.34, 12, 10).translate(0, ne + 1.3, 0), r, u),
      e.add(n.finial, new d(0.14, 0.8, 10).translate(0, ne + 1.95, 0), r, u)),
    ne
  );
}
function vl(e, t, n) {
  let r = t.clone().multiply(new E().makeTranslation(n.x || 0, 0, n.z || 0)),
    i = n.a,
    a = n.b,
    o = a > i;
  o &&
    ((r = r.multiply(new E().makeRotationY(Math.PI / 2))), ([i, a] = [a, i]));
  let s = n.cell ?? 0,
    c = Math.tan(n.p),
    l = n.over,
    u = i + l,
    d = a + l,
    f = n.y - l * c,
    p = n.trim;
  gl(e, r, s, n.mat, u, d, f, i - 0.05, a - 0.05, n.y + 0.05 * c, o, !0, !1);
  for (let t of [-1, 1])
    (e.box(
      p,
      r,
      s,
      -u - 0.05,
      u + 0.05,
      f - 0.22,
      f + 0.03,
      t * d - 0.07,
      t * d + 0.07,
    ),
      e.box(p, r, s, t * u - 0.07, t * u + 0.07, f - 0.22, f + 0.03, -d, d));
  for (let t of [-1, 1])
    for (let o of [-1, 1])
      if (
        (k(
          e,
          p,
          r,
          s,
          [t * u, f + 0.05, o * d],
          [t * i, n.y + 0.05, o * a],
          n.hip ?? 0.18,
        ),
        n.horn)
      ) {
        let i = n.horn;
        k(
          e,
          p,
          r,
          s,
          [t * (u - i * 0.7), f + 0.05, o * (d - i * 0.7)],
          [t * (u + i * 0.3), f + i * 0.6, o * (d + i * 0.3)],
          0.22,
        );
      }
}
var yl = (e) => (t, n, r) => {
  let i = e.a0 ?? 0,
    o = e.a1 ?? r.L,
    s = e.d,
    c = e.rise ?? s * 0.42,
    l = Math.hypot(s, c) + 0.04,
    u = Math.atan2(c, s),
    d = e.trim,
    f = Kc(n),
    p = e.y;
  for (let [m, h] of hl(r, i, o)) {
    let i = ml(r, (m + h) / 2, p - 0.3);
    (t.add(
      e.mat,
      new a(h - m, 0.08, l)
        .rotateX(u)
        .translate((m + h) / 2, p - c / 2 + 0.04, s / 2),
      n,
      i,
      { swap: f },
    ),
      t.box(d, n, i, m, h, p - c - 0.14, p - c + 0.05, s - 0.06, s + 0.02),
      t.box(d, n, i, m, h, p - 0.06, p + 0.1, 0, 0.08));
  }
  if (e.step !== 0)
    for (let a = i + 0.35; a < o - 0.2; a += e.step ?? 1.8) {
      let e = ml(r, a, p - 0.3),
        i = p - c - 0.1;
      (t.box(d, n, e, a - 0.06, a + 0.06, i - 0.12, i, 0, s - 0.1),
        k(t, d, n, e, [a, i - 0.75, 0.04], [a, i - 0.1, s * 0.7], 0.09));
    }
};
function bl(e, t, n, r) {
  let i = (r.u0 + r.u1) / 2,
    o = (r.u1 - r.u0) / 2,
    s = r.over ?? 0.4,
    c = Math.tan(r.p),
    l = r.y + o * c,
    u = o + s,
    d = u / Math.cos(r.p),
    f = r.z0 ?? 0,
    p = r.d + s - f,
    m = 0.1,
    h = !Kc(t);
  for (let o of [-1, 1]) {
    let s = i + (d / 2) * o * Math.cos(r.p) + (o * Math.sin(r.p) * m) / 2,
      g = l - (d / 2) * Math.sin(r.p) + (Math.cos(r.p) * m) / 2;
    (e.add(
      r.mat,
      new a(d, m, p).rotateZ(-o * r.p).translate(s, g, f + p / 2),
      t,
      n,
      { swap: h },
    ),
      Ve(
        e,
        r.trim,
        t,
        n,
        i + o * (u + 0.02),
        l - u * c - 0.05,
        i,
        l + 0.02,
        0.26,
        f + p - 0.04,
        f + p + 0.03,
      ));
  }
  if (
    (e.box(
      r.ridge || r.trim,
      t,
      n,
      i - 0.13,
      i + 0.13,
      l - 0.02,
      l + 0.26,
      f,
      f + p + 0.05,
    ),
    r.gable)
  ) {
    let a = new T([Vc(i - o, r.y), Vc(i + o, r.y), Vc(i, l - 0.05)]);
    e.add(
      r.gable,
      new w(a, { depth: 0.06, bevelEnabled: !1 }).translate(0, 0, r.d - 0.12),
      t,
      n,
    );
  }
  return (
    e.box(
      r.trim,
      t,
      n,
      i - o - 0.1,
      i + o + 0.1,
      r.y - 0.3,
      r.y + 0.02,
      r.d - 0.2,
      r.d - 0.02,
    ),
    l
  );
}
function xl(e, t, n, r, i, a, o, s, c = 0.16, l = `asGranite`) {
  (e.add(r, new C(c, c * 1.04, s - o, 10).translate(i, (o + s) / 2, a), t, n),
    l &&
      e.add(
        l,
        new C(c * 1.45, c * 1.6, 0.22, 10).translate(i, o + 0.11, a),
        t,
        n,
      ));
}
function Sl(e, t, n, r, i, a, o, s = 0.9) {
  (e.box(r, t, n, i - 0.2, i + 0.2, a, a + 0.18, o - 0.2, o + 0.2),
    e.box(
      r,
      t,
      n,
      i - s * 0.5,
      i + s * 0.5,
      a + 0.18,
      a + 0.32,
      o - 0.12,
      o + 0.12,
    ),
    e.box(
      r,
      t,
      n,
      i - 0.12,
      i + 0.12,
      a + 0.18,
      a + 0.32,
      o - s * 0.5,
      o + s * 0.5,
    ),
    e.box(
      r,
      t,
      n,
      i - s * 0.7,
      i + s * 0.7,
      a + 0.32,
      a + 0.46,
      o - 0.14,
      o + 0.14,
    ));
}
