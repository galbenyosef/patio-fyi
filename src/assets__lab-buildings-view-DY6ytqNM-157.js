// assets__lab-buildings-view-DY6ytqNM 157 — math
// Lines 49736-49947 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function Yp(e, t, n) {
  if (n >= e.H - 0.001 && e.gableCell) return e.gableCell;
  let r = 0;
  for (; r < e.top && e.ys[r + 1] <= n;) r++;
  return e.grid[r][K(e, t)];
}
function Xp(e, t, n, r, i, a, o, s, c, l, u) {
  let d = o;
  for (let f of [...r.ys.slice(1), r.H]
    .filter((e) => e > o + 0.001 && e < s - 0.001)
    .concat([s]))
    (f > d + 0.001 &&
      e.box(t, n, Yp(r, (i + a) / 2, (d + f) / 2), i, a, d, f, c, l, u),
      (d = f));
}
function Zp(e, t, n) {
  let r = [];
  for (let i = 0; i < e.nb; i++) {
    let a = i === 0 ? t : Math.max(t, i * e.bw),
      o = i === e.nb - 1 ? n : Math.min(n, (i + 1) * e.bw);
    o - a > 0.001 && r.push([a, o, i]);
  }
  return r;
}
var q = (e, t, n, r, i, a, o, s, c, l = c, u = 12) =>
    e.add(t, new C(l, c, s - o, u).translate(i, (o + s) / 2, a), n, r),
  Qp = (e, t, n, r, i, a, o, s, c, l = 10) =>
    e.add(
      t,
      new C(c, c, a - i, l).rotateZ(Math.PI / 2).translate((i + a) / 2, o, s),
      n,
      r,
    ),
  $p = (e, t, n, r, i, a, o, s, c, l = 10) =>
    e.add(
      t,
      new C(c, c, s - o, l).rotateX(Math.PI / 2).translate(i, a, (o + s) / 2),
      n,
      r,
    );
function em(e, t, n, r, i, o, s, c, l, u) {
  c[0] < s[0] && ([s, c] = [c, s]);
  let d = c[0] - s[0],
    f = c[1] - s[1],
    p = Math.hypot(d, f),
    m = d / p,
    h = -f / p;
  e.add(
    t,
    new a(o - i, l, p)
      .rotateX(Math.atan2(-f, d))
      .translate(
        (i + o) / 2,
        (s[1] + c[1]) / 2 - (m * l) / 2,
        (s[0] + c[0]) / 2 - (h * l) / 2,
      ),
    n,
    r,
    u,
  );
}
function tm(e, t, n, r, i, a, o) {
  let s = new T(i.map(([e, t]) => new y(e, t)));
  e.add(
    t,
    new w(s, { depth: o - a, bevelEnabled: !1 })
      .rotateY(-Math.PI / 2)
      .translate(o, 0, 0),
    n,
    r,
  );
}
function nm(e, t, n, r, i, a, o, s = 8) {
  let c = i instanceof T ? i : new T(i.map(([e, t]) => new y(e, t)));
  e.add(
    t,
    new w(c, { depth: o - a, bevelEnabled: !1, curveSegments: s }).translate(
      0,
      0,
      a,
    ),
    n,
    r,
  );
}
function rm(e, t, n) {
  let r = n.along === `z`,
    i = n.len,
    o = n.over ?? 0.3,
    s = n.th ?? 0.14,
    c = n.cell ?? 0,
    l = n.pts,
    u = t
      .clone()
      .multiply(new E().makeTranslation(n.cx ?? 0, 0, n.cz ?? 0))
      .multiply(new E().makeRotationY(r ? Math.PI / 2 : 0)),
    d = -i / 2 - o,
    f = i / 2 + o,
    p = -1 / 0;
  for (let t = 0; t < l.length - 1; t++) {
    let [i, o] = l[t],
      [m, h] = l[t + 1],
      g = m - i,
      _ = h - o,
      v = Math.hypot(g, _),
      y = g / v,
      b = -_ / v,
      x = Math.atan2(-_, g);
    if (
      (e.add(
        n.mat,
        new a(f - d, s, v + 0.02)
          .rotateX(x)
          .translate(0, (o + h) / 2 + (y * s) / 2, (i + m) / 2 + (b * s) / 2),
        u,
        c,
        { swap: r && Math.abs(y) >= Math.abs(b) },
      ),
      n.rake)
    )
      for (let t of [d - 0.03, f + 0.03])
        e.add(
          n.rake,
          new a(0.06, s + 0.16, v)
            .rotateX(x)
            .translate(
              t,
              (o + h) / 2 + y * (s / 2 - 0.06),
              (i + m) / 2 + b * (s / 2 - 0.06),
            ),
          u,
          c,
        );
    p = Math.max(p, o + y * s, h + y * s);
  }
  if (n.cap)
    for (let t = 1; t < l.length - 1; t++)
      e.box(
        n.cap,
        u,
        c,
        d,
        f,
        l[t][1] + s * 0.4,
        l[t][1] + s + 0.07,
        l[t][0] - 0.13,
        l[t][0] + 0.13,
      );
  if (n.fascia)
    for (let t of [0, l.length - 1]) {
      let [r, i] = l[t];
      e.box(n.fascia, u, c, d, f, i - 0.18, i + s + 0.02, r - 0.04, r + 0.04);
    }
  if (n.fill) {
    let t = n.fillLen ?? i,
      r = new T(n.fillPts.map(([e, t]) => new y(-e, t)));
    e.add(
      n.fill,
      new w(r, { depth: t, bevelEnabled: !1 })
        .rotateY(Math.PI / 2)
        .translate(-t / 2, 0, 0),
      u,
      c,
    );
  }
  return p;
}
function im(e, t, n, r, i, a, o, s, c, l) {
  let u = [
      [-i, o, a],
      [i, o, a],
      [i, o, -a],
      [-i, o, -a],
    ],
    d = [
      [-s, l, c],
      [s, l, c],
      [s, l, -c],
      [-s, l, -c],
    ],
    p = [],
    m = (e, t, n, r) => p.push(e, t, n, e, n, r);
  for (let e = 0; e < 4; e++) {
    let t = (e + 1) % 4;
    m(u[e], u[t], d[t], d[e]);
  }
  (m(d[0], d[1], d[2], d[3]), m(u[0], u[3], u[2], u[1]));
  let h = new f();
  (h.setAttribute(`position`, new S(p.flat(), 3)),
    h.computeVertexNormals(),
    e.add(r, h, t, n));
}
function am(e, t, n, r, i, a, o) {
  let s = Math.tan(i),
    c = n.W / 2 + a,
    l = n.D / 2 + a,
    u = n.H - a * s,
    d = c - l,
    f = u + l * s;
  if ((im(e, t, 0, r, c, l, u, d, 0, f), !o)) return f;
  for (let n of [-1, 1]) {
    (e.box(o, t, 0, -c, c, u - 0.2, u + 0.02, n * l - 0.03, n * l + 0.03),
      e.box(o, t, 0, n * c - 0.03, n * c + 0.03, u - 0.2, u + 0.02, -l, l));
    for (let r of [-1, 1])
      k(e, o, t, 0, [n * c, u + 0.04, r * l], [n * d, f + 0.04, 0], 0.14);
  }
  return (
    d > 0.05 &&
      e.box(o, t, 0, -d - 0.05, d + 0.05, f - 0.04, f + 0.1, -0.1, 0.1),
    f
  );
}
