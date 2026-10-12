// assets__lab-buildings-view-DJVr8phc 206 — translate
// Lines 65117-65328 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function Wy(e, t, n) {
  if (n >= e.H - 0.001 && e.gableCell) return e.gableCell;
  let r = 0;
  for (; r < e.top && e.ys[r + 1] <= n;) r++;
  return e.grid[r][Q(e, t)];
}
function Gy(e, t, n) {
  let r = [];
  for (let i = 0; i < e.nb; i++) {
    let a = i === 0 ? t : Math.max(t, i * e.bw),
      o = i === e.nb - 1 ? n : Math.min(n, (i + 1) * e.bw);
    o - a > 0.001 && r.push([a, o, i]);
  }
  return r;
}
var $ = (e, t, n, r, i, a, o, c, l, u = 8, d = l) =>
    e.add(t, new s(d, l, o - a, u).translate(i, (a + o) / 2, c), n, r),
  Ky = new fe(),
  qy = new x(),
  Jy = new fe(0, 1, 0);
function Yy(e, t, n, r, i, a, o, c = 6) {
  Ky.set(a[0] - i[0], a[1] - i[1], a[2] - i[2]);
  let l = Ky.length();
  (qy.setFromUnitVectors(Jy, Ky.normalize()),
    e.add(
      t,
      new s(o, o, l, c)
        .applyQuaternion(qy)
        .translate((i[0] + a[0]) / 2, (i[1] + a[1]) / 2, (i[2] + a[2]) / 2),
      n,
      r,
    ));
}
var Xy = (e, n = 12) =>
  new t(
    e.map(([e, t]) => Dy(e, t)),
    n,
  );
function Zy(e, t, n, r, i, a, o, s = 8) {
  e.add(
    t,
    new S(i, { depth: o - a, bevelEnabled: !1, curveSegments: s }).translate(
      0,
      0,
      a,
    ),
    n,
    r,
  );
}
function Qy(e, t, n, r, i, a, o, s = 8) {
  e.add(
    t,
    new S(i, { depth: o, bevelEnabled: !1, curveSegments: s })
      .rotateY(-Math.PI / 2)
      .translate(a + o, 0, 0),
    n,
    r,
  );
}
function $y(e, t, n, r, i, a = !0) {
  return (
    e.moveTo(t - r, n),
    e.lineTo(t + r, n),
    e.lineTo(t + r, i),
    e.absarc(t, i, r, 0, Math.PI, !1),
    e.lineTo(t - r, n),
    e
  );
}
function eb(e, t, n, r, i, a, o = 1) {
  (e.add(
    `trBronze`,
    Xy(
      [
        [0.001, 0.62],
        [0.13, 0.6],
        [0.19, 0.5],
        [0.22, 0.3],
        [0.28, 0.12],
        [0.36, 0.02],
        [0.34, 0],
      ],
      12,
    )
      .scale(o, o, o)
      .translate(r, i - 0.62 * o, a),
    t,
    n,
  ),
    e.box(
      `woodDark`,
      t,
      n,
      r - 0.3 * o,
      r + 0.3 * o,
      i,
      i + 0.14 * o,
      a - 0.08,
      a + 0.08,
    ));
}
function tb(e, t, n, r, i, a, o, s = `trFlagIsland`) {
  ($(e, `trPaintWhite`, t, n, r, i, i + o, a, 0.06, 8, 0.04),
    e.add(`trGold`, new w(0.09, 8, 6).translate(r, i + o + 0.06, a), t, n));
  let c = i + o - 0.2;
  e.box(s, t, n, r + 0.05, r + 1.45, c - 0.95, c, a - 0.01, a + 0.01, {
    planar: (e, t) => [(e - r - 0.05) / 1.4, (t - c + 0.95) / 0.95],
  });
}
function nb(e, t, n, r, i, a, o = `trPaintBlue`, c = !1) {
  let l = new s(0.29, 0.29, 0.88, 12),
    u = [0.3, -0.3].map((e) =>
      new s(0.305, 0.305, 0.04, 12).translate(0, e, 0),
    ),
    d = (o, s) =>
      e.add(
        o,
        c
          ? s.rotateZ(Math.PI / 2).translate(r, i + 0.29, a)
          : s.translate(r, i + 0.44, a),
        t,
        n,
      );
  (d(o, l), u.forEach((e) => d(o, e)));
}
function rb(e, t, n, r, i, a, o = 0.5, s = `wood`) {
  (e.box(s, t, n, r - o / 2, r + o / 2, i, i + o * 0.8, a - o / 2, a + o / 2),
    e.box(
      `woodDark`,
      t,
      n,
      r - o / 2 - 0.01,
      r + o / 2 + 0.01,
      i + o * 0.35,
      i + o * 0.45,
      a - o / 2 - 0.01,
      a + o / 2 + 0.01,
    ));
}
function ib(e, t, n, r, i, a, o, s, c, l = {}) {
  let u = a - o,
    d = Math.max(2, Math.round(u / (l.rise ?? 0.18))),
    f = u / d,
    p = l.run ?? 0.28,
    m = s / 2;
  for (let s = 1; s < d; s++) {
    let u = a - s * f,
      d = i + (s - 1) * p,
      h = i + s * p;
    l.solid
      ? e.box(c, t, n, r - m, r + m, o, u, d, h)
      : e.box(c, t, n, r - m, r + m, u - 0.05, u, d, h);
  }
  if (!l.solid)
    for (let s of [-1, 1])
      D(
        e,
        l.stringer || c,
        t,
        n,
        [r + s * (m + 0.04), a - 0.08, i],
        [r + s * (m + 0.04), o + 0.05, i + (d - 1) * p + 0.1],
        0.08,
      );
  if (l.rail)
    for (let s of [-1, 1]) {
      let c = r + s * (m + 0.04),
        u = i + (d - 1) * p;
      D(e, l.rail, t, n, [c, a + 0.9, i], [c, o + 0.9 + f, u], 0.05);
      for (let [r, s] of [
        [i, a],
        [u, o + f],
      ])
        e.box(
          l.rail,
          t,
          n,
          c - 0.03,
          c + 0.03,
          s,
          s + 0.92,
          r - 0.03,
          r + 0.03,
        );
    }
}
function ab(e, t, n, r, i, a, o, c) {
  let l = r.trim || `trimWhite`,
    u = r.col || `post`;
  if (u === `turned`) {
    (e.box(l, t, n, i - 0.09, i + 0.09, o, o + 0.45, a - 0.09, a + 0.09),
      e.add(
        l,
        new s(0.055, 0.075, c - o - 0.8, 8).translate(
          i,
          (o + 0.45 + c - 0.35) / 2,
          a,
        ),
        t,
        n,
      ));
    for (let r of [o + 0.9, c - 0.6])
      e.add(l, new w(0.085, 8, 6).translate(i, r, a), t, n);
    e.box(l, t, n, i - 0.09, i + 0.09, c - 0.35, c, a - 0.09, a + 0.09);
  } else if (u === `round`)
    $(e, r.colMat || l, t, n, i, o, c, a, r.colW || 0.12, 10);
  else {
    let s = r.colW || 0.08;
    e.box(r.colMat || l, t, n, i - s, i + s, o, c, a - s, a + s);
  }
}
