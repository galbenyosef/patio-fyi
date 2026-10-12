// assets__lab-buildings-view-DJVr8phc 157 — math
// Lines 49736-49947 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function Xp(e, t, n) {
  if (n >= e.H - 0.001 && e.gableCell) return e.gableCell;
  let r = 0;
  for (; r < e.top && e.ys[r + 1] <= n;) r++;
  return e.grid[r][G(e, t)];
}
function Zp(e, t, n, r, i, a, o, s, c, l, u) {
  let d = o;
  for (let f of [...r.ys.slice(1), r.H]
    .filter((e) => e > o + 0.001 && e < s - 0.001)
    .concat([s]))
    (f > d + 0.001 &&
      e.box(t, n, Xp(r, (i + a) / 2, (d + f) / 2), i, a, d, f, c, l, u),
      (d = f));
}
function Qp(e, t, n) {
  let r = [];
  for (let i = 0; i < e.nb; i++) {
    let a = i === 0 ? t : Math.max(t, i * e.bw),
      o = i === e.nb - 1 ? n : Math.min(n, (i + 1) * e.bw);
    o - a > 0.001 && r.push([a, o, i]);
  }
  return r;
}
var K = (e, t, n, r, i, a, o, c, l, u = l, d = 12) =>
    e.add(t, new s(u, l, c - o, d).translate(i, (o + c) / 2, a), n, r),
  $p = (e, t, n, r, i, a, o, c, l, u = 10) =>
    e.add(
      t,
      new s(l, l, a - i, u).rotateZ(Math.PI / 2).translate((i + a) / 2, o, c),
      n,
      r,
    ),
  em = (e, t, n, r, i, a, o, c, l, u = 10) =>
    e.add(
      t,
      new s(l, l, c - o, u).rotateX(Math.PI / 2).translate(i, a, (o + c) / 2),
      n,
      r,
    );
function tm(e, t, n, i, a, o, s, c, l, u) {
  c[0] < s[0] && ([s, c] = [c, s]);
  let d = c[0] - s[0],
    f = c[1] - s[1],
    p = Math.hypot(d, f),
    m = d / p,
    h = -f / p;
  e.add(
    t,
    new r(o - a, l, p)
      .rotateX(Math.atan2(-f, d))
      .translate(
        (a + o) / 2,
        (s[1] + c[1]) / 2 - (m * l) / 2,
        (s[0] + c[0]) / 2 - (h * l) / 2,
      ),
    n,
    i,
    u,
  );
}
function nm(e, t, n, r, i, a, o) {
  let s = new C(i.map(([e, t]) => new h(e, t)));
  e.add(
    t,
    new S(s, { depth: o - a, bevelEnabled: !1 })
      .rotateY(-Math.PI / 2)
      .translate(o, 0, 0),
    n,
    r,
  );
}
function rm(e, t, n, r, i, a, o, s = 8) {
  let c = i instanceof C ? i : new C(i.map(([e, t]) => new h(e, t)));
  e.add(
    t,
    new S(c, { depth: o - a, bevelEnabled: !1, curveSegments: s }).translate(
      0,
      0,
      a,
    ),
    n,
    r,
  );
}
function im(e, t, n) {
  let i = n.along === `z`,
    a = n.len,
    o = n.over ?? 0.3,
    s = n.th ?? 0.14,
    c = n.cell ?? 0,
    u = n.pts,
    d = t
      .clone()
      .multiply(new l().makeTranslation(n.cx ?? 0, 0, n.cz ?? 0))
      .multiply(new l().makeRotationY(i ? Math.PI / 2 : 0)),
    f = -a / 2 - o,
    p = a / 2 + o,
    m = -1 / 0;
  for (let t = 0; t < u.length - 1; t++) {
    let [a, o] = u[t],
      [l, h] = u[t + 1],
      g = l - a,
      _ = h - o,
      v = Math.hypot(g, _),
      y = g / v,
      b = -_ / v,
      x = Math.atan2(-_, g);
    if (
      (e.add(
        n.mat,
        new r(p - f, s, v + 0.02)
          .rotateX(x)
          .translate(0, (o + h) / 2 + (y * s) / 2, (a + l) / 2 + (b * s) / 2),
        d,
        c,
        { swap: i && Math.abs(y) >= Math.abs(b) },
      ),
      n.rake)
    )
      for (let t of [f - 0.03, p + 0.03])
        e.add(
          n.rake,
          new r(0.06, s + 0.16, v)
            .rotateX(x)
            .translate(
              t,
              (o + h) / 2 + y * (s / 2 - 0.06),
              (a + l) / 2 + b * (s / 2 - 0.06),
            ),
          d,
          c,
        );
    m = Math.max(m, o + y * s, h + y * s);
  }
  if (n.cap)
    for (let t = 1; t < u.length - 1; t++)
      e.box(
        n.cap,
        d,
        c,
        f,
        p,
        u[t][1] + s * 0.4,
        u[t][1] + s + 0.07,
        u[t][0] - 0.13,
        u[t][0] + 0.13,
      );
  if (n.fascia)
    for (let t of [0, u.length - 1]) {
      let [r, i] = u[t];
      e.box(n.fascia, d, c, f, p, i - 0.18, i + s + 0.02, r - 0.04, r + 0.04);
    }
  if (n.fill) {
    let t = n.fillLen ?? a,
      r = new C(n.fillPts.map(([e, t]) => new h(-e, t)));
    e.add(
      n.fill,
      new S(r, { depth: t, bevelEnabled: !1 })
        .rotateY(Math.PI / 2)
        .translate(-t / 2, 0, 0),
      d,
      c,
    );
  }
  return m;
}
function am(e, t, n, r, i, a, o, s, l, u) {
  let d = [
      [-i, o, a],
      [i, o, a],
      [i, o, -a],
      [-i, o, -a],
    ],
    f = [
      [-s, u, l],
      [s, u, l],
      [s, u, -l],
      [-s, u, -l],
    ],
    p = [],
    m = (e, t, n, r) => p.push(e, t, n, e, n, r);
  for (let e = 0; e < 4; e++) {
    let t = (e + 1) % 4;
    m(d[e], d[t], f[t], f[e]);
  }
  (m(f[0], f[1], f[2], f[3]), m(d[0], d[3], d[2], d[1]));
  let h = new c();
  (h.setAttribute(`position`, new ce(p.flat(), 3)),
    h.computeVertexNormals(),
    e.add(r, h, t, n));
}
function om(e, t, n, r, i, a, o) {
  let s = Math.tan(i),
    c = n.W / 2 + a,
    l = n.D / 2 + a,
    u = n.H - a * s,
    d = c - l,
    f = u + l * s;
  if ((am(e, t, 0, r, c, l, u, d, 0, f), !o)) return f;
  for (let n of [-1, 1]) {
    (e.box(o, t, 0, -c, c, u - 0.2, u + 0.02, n * l - 0.03, n * l + 0.03),
      e.box(o, t, 0, n * c - 0.03, n * c + 0.03, u - 0.2, u + 0.02, -l, l));
    for (let r of [-1, 1])
      D(e, o, t, 0, [n * c, u + 0.04, r * l], [n * d, f + 0.04, 0], 0.14);
  }
  return (
    d > 0.05 &&
      e.box(o, t, 0, -d - 0.05, d + 0.05, f - 0.04, f + 0.1, -0.1, 0.1),
    f
  );
}
