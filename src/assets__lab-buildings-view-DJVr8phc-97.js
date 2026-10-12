// assets__lab-buildings-view-DJVr8phc 97 — math
// Lines 29557-29904 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function vl(e, t, n) {
  let a = t.clone().multiply(new l().makeTranslation(n.x || 0, 0, n.z || 0)),
    o = n.a,
    c = n.b,
    u = c > o;
  u &&
    ((a = a.multiply(new l().makeRotationY(Math.PI / 2))), ([o, c] = [c, o]));
  let d = n.cell ?? 0,
    f = Math.tan(n.p1),
    p = Math.tan(n.p2),
    m = n.over,
    h = n.trim,
    g = n.hip ?? 0.2,
    _ = o + m,
    v = c + m,
    y = n.y - m * f,
    b = Math.min(n.k ?? m + 0.8, v - 0.3),
    x = _ - b,
    ee = v - b,
    te = y + b * f,
    ne = x - ee,
    re = te + ee * p;
  (_l(e, a, d, n.mat, _, v, y, x, ee, te, u, !0, !1),
    _l(e, a, d, n.mat, x, ee, te, ne, 0, re, u, !1));
  for (let t of [-1, 1])
    (e.box(
      h,
      a,
      d,
      -_ - 0.05,
      _ + 0.05,
      y - 0.24,
      y + 0.03,
      t * v - 0.07,
      t * v + 0.07,
    ),
      e.box(h, a, d, t * _ - 0.07, t * _ + 0.07, y - 0.24, y + 0.03, -v, v));
  let ie = !!n.gable,
    ae = ie ? ne + ee * (n.gIn ?? 0.45) : ne,
    oe = ae - ne,
    se = te + (x - ae) * p;
  for (let t of [-1, 1])
    for (let r of [-1, 1])
      if (
        (D(e, h, a, d, [t * _, y + 0.05, r * v], [t * x, te + 0.06, r * ee], g),
        D(
          e,
          h,
          a,
          d,
          [t * x, te + 0.06, r * ee],
          [t * ae, (ie ? se : re) + 0.06, r * oe],
          g,
        ),
        n.horn)
      ) {
        let i = n.horn;
        D(
          e,
          h,
          a,
          d,
          [t * (_ - i * 0.7), y + 0.06, r * (v - i * 0.7)],
          [t * (_ + i * 0.3), y + i * 0.6, r * (v + i * 0.3)],
          g * 1.25,
        );
      }
  let ce = ne;
  if (ie) {
    let t = oe / Math.cos(n.p2),
      i = 2 * (ae + 0.35);
    ce = ae + 0.35;
    for (let o of [1, -1]) {
      let s = new fe(0, -Math.sin(n.p2), o * Math.cos(n.p2)),
        c = new fe(0, Math.cos(n.p2), o * Math.sin(n.p2)),
        l = new fe(0, re, 0)
          .addScaledVector(s, t / 2 + 0.15)
          .addScaledVector(c, 0.08);
      (e.add(
        n.mat,
        new r(i, 0.1, t + 0.3).rotateX(o * n.p2).translate(l.x, l.y, l.z),
        a,
        d,
        { swap: u },
      ),
        D(
          e,
          h,
          a,
          d,
          [o * ce, se + 0.02, oe + 0.25],
          [o * ce, re + 0.14, 0],
          0.14,
        ),
        D(
          e,
          h,
          a,
          d,
          [o * ce, se + 0.02, -oe - 0.25],
          [o * ce, re + 0.14, 0],
          0.14,
        ));
    }
    let o = new C([Hc(-oe + 0.05, se), Hc(oe - 0.05, se), Hc(0, re + 0.05)]);
    for (let t of [-1, 1])
      e.add(
        n.gable,
        new S(o, { depth: 0.08, bevelEnabled: !1 })
          .rotateY(Math.PI / 2)
          .translate(t * ae - 0.04, 0, 0),
        a,
        d,
      );
  }
  if (
    ce > 0.05 &&
    (e.box(n.ridge || h, a, d, -ce, ce, re - 0.05, re + 0.34, -0.17, 0.17),
    n.curl)
  )
    for (let t of [-1, 1])
      D(
        e,
        n.ridge || h,
        a,
        d,
        [t * (ce - 0.1), re + 0.2, 0],
        [t * (ce + n.curl * 0.45), re + 0.2 + n.curl, 0],
        0.28,
      );
  return (
    n.finial &&
      (e.add(
        n.finial,
        new s(0.12, 0.28, 1.2, 10).translate(0, re + 0.5, 0),
        a,
        d,
      ),
      e.add(n.finial, new w(0.34, 12, 10).translate(0, re + 1.3, 0), a, d),
      e.add(n.finial, new i(0.14, 0.8, 10).translate(0, re + 1.95, 0), a, d)),
    re
  );
}
function yl(e, t, n) {
  let r = t.clone().multiply(new l().makeTranslation(n.x || 0, 0, n.z || 0)),
    i = n.a,
    a = n.b,
    o = a > i;
  o &&
    ((r = r.multiply(new l().makeRotationY(Math.PI / 2))), ([i, a] = [a, i]));
  let s = n.cell ?? 0,
    c = Math.tan(n.p),
    u = n.over,
    d = i + u,
    f = a + u,
    p = n.y - u * c,
    m = n.trim;
  _l(e, r, s, n.mat, d, f, p, i - 0.05, a - 0.05, n.y + 0.05 * c, o, !0, !1);
  for (let t of [-1, 1])
    (e.box(
      m,
      r,
      s,
      -d - 0.05,
      d + 0.05,
      p - 0.22,
      p + 0.03,
      t * f - 0.07,
      t * f + 0.07,
    ),
      e.box(m, r, s, t * d - 0.07, t * d + 0.07, p - 0.22, p + 0.03, -f, f));
  for (let t of [-1, 1])
    for (let o of [-1, 1])
      if (
        (D(
          e,
          m,
          r,
          s,
          [t * d, p + 0.05, o * f],
          [t * i, n.y + 0.05, o * a],
          n.hip ?? 0.18,
        ),
        n.horn)
      ) {
        let i = n.horn;
        D(
          e,
          m,
          r,
          s,
          [t * (d - i * 0.7), p + 0.05, o * (f - i * 0.7)],
          [t * (d + i * 0.3), p + i * 0.6, o * (f + i * 0.3)],
          0.22,
        );
      }
}
var bl = (e) => (t, n, i) => {
  let a = e.a0 ?? 0,
    o = e.a1 ?? i.L,
    s = e.d,
    c = e.rise ?? s * 0.42,
    l = Math.hypot(s, c) + 0.04,
    u = Math.atan2(c, s),
    d = e.trim,
    f = qc(n),
    p = e.y;
  for (let [m, h] of gl(i, a, o)) {
    let a = hl(i, (m + h) / 2, p - 0.3);
    (t.add(
      e.mat,
      new r(h - m, 0.08, l)
        .rotateX(u)
        .translate((m + h) / 2, p - c / 2 + 0.04, s / 2),
      n,
      a,
      { swap: f },
    ),
      t.box(d, n, a, m, h, p - c - 0.14, p - c + 0.05, s - 0.06, s + 0.02),
      t.box(d, n, a, m, h, p - 0.06, p + 0.1, 0, 0.08));
  }
  if (e.step !== 0)
    for (let r = a + 0.35; r < o - 0.2; r += e.step ?? 1.8) {
      let e = hl(i, r, p - 0.3),
        a = p - c - 0.1;
      (t.box(d, n, e, r - 0.06, r + 0.06, a - 0.12, a, 0, s - 0.1),
        D(t, d, n, e, [r, a - 0.75, 0.04], [r, a - 0.1, s * 0.7], 0.09));
    }
};
function xl(e, t, n, i) {
  let a = (i.u0 + i.u1) / 2,
    o = (i.u1 - i.u0) / 2,
    s = i.over ?? 0.4,
    c = Math.tan(i.p),
    l = i.y + o * c,
    u = o + s,
    d = u / Math.cos(i.p),
    f = i.z0 ?? 0,
    p = i.d + s - f,
    m = 0.1,
    h = !qc(t);
  for (let o of [-1, 1]) {
    let s = a + (d / 2) * o * Math.cos(i.p) + (o * Math.sin(i.p) * m) / 2,
      g = l - (d / 2) * Math.sin(i.p) + (Math.cos(i.p) * m) / 2;
    (e.add(
      i.mat,
      new r(d, m, p).rotateZ(-o * i.p).translate(s, g, f + p / 2),
      t,
      n,
      { swap: h },
    ),
      O(
        e,
        i.trim,
        t,
        n,
        a + o * (u + 0.02),
        l - u * c - 0.05,
        a,
        l + 0.02,
        0.26,
        f + p - 0.04,
        f + p + 0.03,
      ));
  }
  if (
    (e.box(
      i.ridge || i.trim,
      t,
      n,
      a - 0.13,
      a + 0.13,
      l - 0.02,
      l + 0.26,
      f,
      f + p + 0.05,
    ),
    i.gable)
  ) {
    let r = new C([Hc(a - o, i.y), Hc(a + o, i.y), Hc(a, l - 0.05)]);
    e.add(
      i.gable,
      new S(r, { depth: 0.06, bevelEnabled: !1 }).translate(0, 0, i.d - 0.12),
      t,
      n,
    );
  }
  return (
    e.box(
      i.trim,
      t,
      n,
      a - o - 0.1,
      a + o + 0.1,
      i.y - 0.3,
      i.y + 0.02,
      i.d - 0.2,
      i.d - 0.02,
    ),
    l
  );
}
function Sl(e, t, n, r, i, a, o, c, l = 0.16, u = `asGranite`) {
  (e.add(r, new s(l, l * 1.04, c - o, 10).translate(i, (o + c) / 2, a), t, n),
    u &&
      e.add(
        u,
        new s(l * 1.45, l * 1.6, 0.22, 10).translate(i, o + 0.11, a),
        t,
        n,
      ));
}
function Cl(e, t, n, r, i, a, o, s = 0.9) {
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
