// assets__observatory-sim-BDUGU5NF 03 — math
// Lines 637-970 of readable/assets__observatory-sim-BDUGU5NF.pretty.js (statement-aligned).
function xe(e, t, n, r, i) {
  let a = W(e, t),
    { piv: o, d: s, u: c, v: l, L: u, tr: d } = a,
    f = [n[0] - o[0], n[1] - o[1], n[2] - o[2]],
    p = (e, t) => e[0] * t[0] + e[1] * t[1] + e[2] * t[2],
    m = [p(f, s), p(f, c), p(f, l)],
    h = [p(r, s), p(r, c), p(r, l)],
    g = null,
    _ = (e) => {
      e &&
        (!g || e.t < g.t) &&
        (g = {
          t: e.t,
          n: [
            s[0] * e.n[0] + c[0] * e.n[1] + l[0] * e.n[2],
            s[1] * e.n[0] + c[1] * e.n[1] + l[1] * e.n[2],
            s[2] * e.n[0] + c[2] * e.n[1] + l[2] * e.n[2],
          ],
        });
    },
    v = () => (g ? g.t : i),
    y = Math.cos(Math.PI / 24);
  _(G(m, h, 0, 0, d * y, -0.39 * u, -0.21 * u, !0, v(), d * 1.1 * y));
  for (let e of [-0.2 * u, 0.25 * u])
    _(G(m, h, 0, 0, d * 1.06, e - d * 0.07, e + d * 0.07, !1, v()));
  (_(G(m, h, 0, 0, d * 1.02 * y, 0.68 * u, 0.76 * u, !1, v())),
    _(
      G(
        m,
        h,
        0,
        0,
        d * 0.25 * Math.cos(Math.PI / 12),
        0.66 * u,
        0.78 * u,
        !0,
        v(),
      ),
    ));
  for (let e = 0; e < 8; e++) {
    let t = (e / 8) * Math.PI * 2;
    _(
      G(
        m,
        h,
        Math.cos(t) * d,
        Math.sin(t) * d,
        d * 0.035 * Math.cos(Math.PI / 5),
        -0.225 * u,
        0.725 * u,
        !0,
        v(),
      ),
    );
  }
  {
    let i = [Math.sin(t.az), 0, Math.cos(t.az)],
      o = [n[0] - a.base[0], n[1] - a.base[1], n[2] - a.base[2]],
      s = [p(o, c), o[1], p(o, i)],
      l = [p(r, c), r[1], p(r, i)],
      u = e.r * 0.06 + 0.2,
      d = e.r * 0.38,
      f = e.r * 0.14;
    for (let t of [-1, 1]) {
      let n = t * e.r * 0.25,
        r = Y(
          [
            n - u / 2,
            e.r * 0.19 - d / 2,
            -f / 2,
            n + u / 2,
            e.r * 0.19 + d / 2,
            f / 2,
          ],
          s,
          l,
          v(),
        );
      r &&
        (!g || r.t < g.t) &&
        (g = {
          t: r.t,
          n: [
            c[0] * r.n[0] + i[0] * r.n[2],
            r.n[1],
            c[2] * r.n[0] + i[2] * r.n[2],
          ],
        });
    }
  }
  if (!g) return null;
  let b = p(g.n, r) > 0 ? g.n.map((e) => -e) : g.n;
  return {
    point: [n[0] + r[0] * g.t, n[1] + r[1] * g.t, n[2] + r[2] * g.t],
    normal: b,
    dist: g.t,
    surface: `metal`,
  };
}
function Se(e, t) {
  let n = [],
    { piv: r, d: i, L: a, tr: o } = W(e, t),
    s = o * 1.08,
    c = -0.39 * a,
    l = (0.76 * a - c) / 10;
  for (let e = 0; e < 10; e++) {
    let t = c + (e + 0.5) * l,
      a = r.map((e, n) => e + i[n] * t),
      o = [0, 1, 2].map(
        (e) =>
          (Math.abs(i[e]) * l) / 2 +
          s * Math.sqrt(Math.max(0, 1 - i[e] * i[e])),
      );
    n.push([
      a[0] - o[0],
      a[1] - o[1],
      a[2] - o[2],
      a[0] + o[0],
      a[1] + o[1],
      a[2] + o[2],
    ]);
  }
  return n.concat(we(e, t).slice(5));
}
var Ce = 10;
function we(e, t) {
  let n = [],
    r = [e.x, e.y0 + (e.floorY || 0) + 0.6, e.z],
    i = [r[0], r[1] + e.r * 0.32, r[2]],
    a = [
      Math.sin(t.az) * Math.cos(t.alt),
      Math.sin(t.alt),
      Math.cos(t.az) * Math.cos(t.alt),
    ],
    o = e.r * 0.95,
    s = e.r * 0.17 * 0.85;
  for (let e = 0; e < 5; e++) {
    let t = -0.3 * o + ((e + 0.5) * 1.1 * o) / 5,
      r = i.map((e, n) => e + a[n] * t);
    n.push([r[0] - s, r[1] - s, r[2] - s, r[0] + s, r[1] + s, r[2] + s]);
  }
  let c = Math.cos(t.az),
    l = Math.sin(t.az),
    u = e.r * 0.03 + 0.1,
    d = e.r * 0.19,
    f = e.r * 0.07;
  for (let t of [-1, 1]) {
    let i = t * e.r * 0.25,
      a = r[0] + i * c,
      o = r[2] - i * l,
      s = u * Math.abs(c) + f * Math.abs(l),
      p = u * Math.abs(l) + f * Math.abs(c);
    n.push([a - s, r[1], o - p, a + s, r[1] + d * 2, o + p]);
  }
  return n;
}
var Te = 90,
  Ee = 30,
  De = 360,
  K = Object.freeze([
    Object.freeze({ name: `Quasar 3C 279`, az: 2.2, el: 0.78 }),
    Object.freeze({ name: `Sgr A*, low in the south`, az: 3.25, el: 0.24 }),
    Object.freeze({ name: `Stowed`, az: 3.25, el: Math.PI / 2 }),
    Object.freeze({ name: `Orion, low in the west`, az: 5, el: 0.33 }),
  ]),
  q = Object.freeze({ azY: 3.9, elY: 7.4, F: 4.8, R: 6, v0: 0.75 }),
  Oe = (e) => Math.atan2(Math.sin(e), Math.cos(e));
function ke(e, t) {
  return e.epoch == null || t < e.epoch ? 0 : ((t - e.epoch) / I) % 360;
}
function Ae(e) {
  let t = ((e % 360) + 360) % 360,
    n = Math.floor(t / 90),
    r = t - n * 90,
    i = K[(n + 3) % 4],
    a = K[n],
    o = R(0, 30, r);
  return {
    az: i.az + Oe(a.az - i.az) * o,
    el: i.el + (a.el - i.el) * o,
    slewing: r < 30,
    leg: n,
    local: r,
    source: a.name,
  };
}
var je = (e, t) => {
    let n = Ae(ke(e, t)),
      r = e.meteor ? oe(e, t) : 0;
    return r <= 0
      ? n
      : {
          ...n,
          az: n.az + Oe(ae.az - n.az) * r,
          el: n.el + (ae.el - n.el) * r,
          slewing: r < 1 || n.slewing,
          tracking: r,
          source: `Tracking the incoming meteor`,
        };
  },
  J = (e, t) => b(e, t, je(e, t));
function Me(e, t) {
  return 90 - J(e, t).local;
}
function Y(e, t, n, r) {
  let i = 0,
    a = r,
    o = -1;
  for (let r = 0; r < 3; r++) {
    if (Math.abs(n[r]) < 1e-9) {
      if (t[r] < e[r] || t[r] > e[r + 3]) return null;
      continue;
    }
    let s = (e[r] - t[r]) / n[r],
      c = (e[r + 3] - t[r]) / n[r],
      l = -1;
    if (s > c) {
      let e = s;
      ((s = c), (c = e), (l = 1));
    }
    if (
      (s > i && ((i = s), (o = r), l * Math.sign(n[r]) * -1 * -1),
      c < a && (a = c),
      i > a)
    )
      return null;
  }
  if (o < 0) return null;
  let s = [0, 0, 0];
  return ((s[o] = -Math.sign(n[o])), { t: i, n: s });
}
var Ne = [
    [-3, 0, -1.1, 3, 1.05, 1.1],
    [-2.95, 0.5, -0.7, -2.15, 4, 0.7],
    [2.15, 0.5, -0.7, 2.95, 4, 0.7],
  ],
  Pe = [-1.5, -2.35, -1.5, 1.5, 0.85, 1.5];
function X(e, t, n, r, i) {
  let a = Math.cos(t.az),
    o = Math.sin(t.az),
    s = Math.PI / 2 - t.el,
    c = Math.cos(s),
    l = Math.sin(s),
    u = n[0] - e.x,
    d = n[1] - (e.y0 + q.azY),
    f = n[2] - e.z,
    p = [u * a - f * o, d, u * o + f * a],
    m = [r[0] * a - r[2] * o, r[1], r[0] * o + r[2] * a],
    h = null,
    g = (e, t) => {
      e < 0 || e > i || (h && e >= h.t) || (h = { t: e, nAz: t });
    };
  for (let e of Ne) {
    let t = Y(e, p, m, i);
    t && g(t.t, t.n);
  }
  let _ = p[1] - (q.elY - q.azY),
    v = [p[0], _ * c + p[2] * l, -_ * l + p[2] * c],
    y = [m[0], m[1] * c + m[2] * l, -m[1] * l + m[2] * c],
    b = (e) => [e[0], e[1] * c - e[2] * l, e[1] * l + e[2] * c];
  {
    let e = Y(Pe, v, y, i);
    e && g(e.t, b(e.n));
  }
  {
    let e = 4 * q.F,
      t = y[0] * y[0] + y[2] * y[2],
      n = 2 * (v[0] * y[0] + v[2] * y[2]) - e * y[1],
      r = v[0] * v[0] + v[2] * v[2] - e * (v[1] - q.v0),
      a =
        Math.abs(t) < 1e-9
          ? Math.abs(n) < 1e-9
            ? []
            : [-r / n]
          : (() => {
              let e = n * n - 4 * t * r;
              if (e < 0) return [];
              let i = Math.sqrt(e);
              return [(-n - i) / (2 * t), (-n + i) / (2 * t)];
            })();
    for (let t of a) {
      if (t < 0 || t > i) continue;
      let n = v[0] + y[0] * t,
        r = v[2] + y[2] * t;
      if (n * n + r * r > q.R * q.R) continue;
      let a = [2 * n, -e, 2 * r],
        o = Math.hypot(...a);
      g(t, b(a.map((e) => e / o)));
    }
  }
  if (!h) return null;
  let x = h.nAz,
    S = [x[0] * a + x[2] * o, x[1], -x[0] * o + x[2] * a],
    C = S[0] * r[0] + S[1] * r[1] + S[2] * r[2] > 0 ? S.map((e) => -e) : S;
  return {
    point: [n[0] + r[0] * h.t, n[1] + r[1] * h.t, n[2] + r[2] * h.t],
    normal: C,
    dist: h.t,
    surface: `metal`,
  };
}
var Z = null;
function Fe() {
  if (Z) return Z;
  let t = O.RIM_R,
    n = 0.6,
    r = [];
  for (let e = 0; e <= 10; e++)
    for (let i = 0; i <= 48; i++) {
      let a = (i / 48) * Math.PI * 2,
        o = (e / 10) * Math.PI * 2,
        s = (t + n * Math.cos(o)) * Math.cos(a),
        c = (t + n * Math.cos(o)) * Math.sin(a),
        l = n * Math.sin(o),
        u = s,
        d = (-l * O.RIM_H) / n,
        f = c,
        p = 1 + 0.12 * Math.sin(Math.atan2(u, f) * 5 + 1);
      r.push(u * p, Math.max(0, d), f * p);
    }
  let i = [],
    a = (e) => i.push(r[e * 3], r[e * 3 + 1], r[e * 3 + 2]);
  for (let e = 1; e <= 10; e++)
    for (let t = 1; t <= 48; t++) {
      let n = 49 * e + t - 1,
        r = 49 * (e - 1) + t - 1,
        i = 49 * (e - 1) + t,
        o = 49 * e + t;
      (a(n), a(r), a(o), a(r), a(i), a(o));
    }
  let o = new Float32Array(i);
  return (Z = e(o, new Uint8Array(o.length / 9).fill(2)));
}
var Q = (e, t) => !!e.broken?.has(t);
