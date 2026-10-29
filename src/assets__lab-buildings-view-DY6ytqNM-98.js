// assets__lab-buildings-view-DY6ytqNM 98 — math
// Lines 29905-30224 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function Cl(e, t, n, r, i, a, o, s, c = 0.9, l = 0.18, u = 0.03) {
  (e.box(r, t, n, i, a, o + c - 0.06, o + c, s - 0.045, s + 0.045),
    e.box(r, t, n, i, a, o + 0.05, o + 0.11, s - 0.03, s + 0.03));
  for (let d = i + l / 2; d < a; d += l)
    e.box(r, t, n, d - u, d + u, o + 0.11, o + c - 0.06, s - u, s + u);
}
function wl(e, t, n, r, a, o, s = {}) {
  let c = s.r ?? 0.2,
    l = a - 0.1 - c * 1.35,
    u = s.mat || `asLanternRed`;
  e.add(u, new i(c, 10, 8).scale(1, 1.3, 1).translate(r, l, o), t, n);
  for (let i of [-1, 1])
    e.add(
      `asBlackLacquer`,
      new C(c * 0.55, c * 0.55, 0.06, 10).translate(r, l + i * c * 1.25, o),
      t,
      n,
    );
  e.box(L, t, n, r - 0.01, r + 0.01, l + c * 1.28, a, o - 0.01, o + 0.01);
}
function Tl(e, t, n, r, i, a, o, s, c, l = 3) {
  let u = (a - i) / l,
    d = (e, t) => [(e - i) / (a - i), (t - o + s) / s];
  for (let a = 0; a < l; a++)
    e.box(
      r,
      t,
      n,
      i + a * u + 0.015,
      i + (a + 1) * u - 0.015,
      o - s,
      o,
      c,
      c + 0.015,
      { planar: d },
    );
  e.add(
    `asTimber`,
    new C(0.025, 0.025, a - i + 0.3, 6)
      .rotateZ(Math.PI / 2)
      .translate((i + a) / 2, o + 0.02, c + 0.01),
    t,
    n,
  );
  for (let r of [i - 0.12, a + 0.12])
    e.box(L, t, n, r - 0.015, r + 0.015, o - 0.02, o + 0.06, -0.02, c + 0.02);
}
function El(e, t, n, r, i, a = 0) {
  (e.box(`asWhite`, t, n, r - 0.4, r + 0.4, i, i + 0.55, a + 0.02, a + 0.32),
    e.add(
      L,
      new C(0.19, 0.19, 0.02, 12)
        .rotateX(Math.PI / 2)
        .translate(r - 0.08, i + 0.28, a + 0.33),
      t,
      n,
    ));
  for (let o of [r - 0.32, r + 0.28])
    e.box(L, t, n, o, o + 0.04, i - 0.05, i, a, a + 0.34);
  e.box(
    `asWhite`,
    t,
    n,
    r + 0.3,
    r + 0.34,
    i - 0.6,
    i + 0.1,
    a + 0.02,
    a + 0.06,
  );
}
function Dl(e, t, n, r, a, o = 1) {
  let s = `asGranite`;
  (e.add(
    s,
    new C(0.32 * o, 0.38 * o, 0.25 * o, 6).translate(r, 0.125 * o, a),
    t,
    n,
  ),
    e.add(
      s,
      new C(0.12 * o, 0.14 * o, 0.8 * o, 8).translate(r, 0.65 * o, a),
      t,
      n,
    ),
    e.box(
      s,
      t,
      n,
      r - 0.28 * o,
      r + 0.28 * o,
      1.05 * o,
      1.15 * o,
      a - 0.28 * o,
      a + 0.28 * o,
    ),
    e.box(
      s,
      t,
      n,
      r - 0.2 * o,
      r + 0.2 * o,
      1.15 * o,
      1.5 * o,
      a - 0.2 * o,
      a + 0.2 * o,
    ),
    e.box(
      `asLanternWhite`,
      t,
      n,
      r - 0.12 * o,
      r + 0.12 * o,
      1.22 * o,
      1.42 * o,
      a + 0.19 * o,
      a + 0.21 * o,
    ),
    e.add(
      s,
      new d(0.46 * o, 0.35 * o, 4)
        .rotateY(Math.PI / 4)
        .translate(r, 1.67 * o, a),
      t,
      n,
    ),
    e.add(s, new i(0.09 * o, 8, 6).translate(r, 1.9 * o, a), t, n));
}
function Ol(e, t, n, r, i, a, o, s, c, l = `asTimber`, u = !1) {
  e.add(
    r,
    ((e, t) => {
      let n = new C(e, e, t, 12);
      return u ? n.rotateZ(Math.PI / 2) : n;
    })(s, c).translate(i, a + (u ? s : c / 2), o),
    t,
    n,
  );
  for (let r of [0.2, 0.8])
    e.add(
      l,
      u
        ? new C(s + 0.015, s + 0.015, 0.05, 12)
            .rotateZ(Math.PI / 2)
            .translate(i - c / 2 + c * r, a + s, o)
        : new C(s + 0.015, s + 0.015, 0.05, 12).translate(i, a + c * r, o),
      t,
      n,
    );
}
function kl(e, t, n, r, i, a, o = 0.45) {
  (e.add(r, new C(0.17, 0.2, 0.05, 10).translate(i, o - 0.025, a), t, n),
    e.add(
      r,
      new C(0.16, 0.2, o - 0.05, 8, 1, !0).translate(i, (o - 0.05) / 2, a),
      t,
      n,
    ));
}
function Al(e, t, n, r, a, o, s = 1) {
  (e.add(
    `asOnggi`,
    new C(0.16 * s, 0.12 * s, 0.28 * s, 8).translate(r, a + 0.14 * s, o),
    t,
    n,
  ),
    e.add(
      `asLeaf`,
      new i(0.24 * s, 8, 6).scale(1, 0.8, 1).translate(r, a + 0.42 * s, o),
      t,
      n,
    ));
}
function jl(e, t, n, r, a, o, s, c = `asStainless`, l = 1.2) {
  for (let [i, s] of [
    [-1, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
  ])
    e.box(
      L,
      t,
      0,
      n + i * o * 0.7 - 0.05,
      n + i * o * 0.7 + 0.05,
      a,
      a + l,
      r + s * o * 0.7 - 0.05,
      r + s * o * 0.7 + 0.05,
    );
  (e.box(L, t, 0, n - o, n + o, a + l - 0.08, a + l, r - o, r + o),
    e.add(c, new C(o, o, s, 14).translate(n, a + l + s / 2, r), t, 0),
    e.add(
      c,
      new i(o, 14, 6, 0, Math.PI * 2, 0, Math.PI / 2)
        .scale(1, 0.35, 1)
        .translate(n, a + l + s, r),
      t,
      0,
    ));
}
function Ml(e, t, n, r, i, o, s, c = 0.12) {
  let u = r.ridge === `z`,
    d = u ? n.D : n.W,
    f = u ? n.W : n.D,
    p = r.pitch,
    m = r.over,
    h = t.clone().multiply(new E().makeRotationY(u ? Math.PI / 2 : 0)),
    g = n.H + (f / 2) * Math.tan(p),
    _ = (f / 2 + m) / Math.cos(p) - c;
  for (let t of [1, -1]) {
    let n = new l(0, -Math.sin(p), t * Math.cos(p)),
      r = new l(0, Math.cos(p), t * Math.sin(p)),
      f = new l(0, g, 0)
        .addScaledVector(n, _ / 2)
        .addScaledVector(r, 0.14 + o + s / 2);
    e.add(
      i,
      new a(d + 2 * m - 2 * c, s, _).rotateX(t * p).translate(f.x, f.y, f.z),
      h,
      0,
      { swap: u },
    );
  }
  return g;
}
var Nl = {
    ridge: `x`,
    pitch: 0.02,
    over: 0.02,
    mat: `tarRoof`,
    fascia: `tarRoof`,
  },
  Pl = [];
function Fl() {
  return (
    ul(),
    Pl.flatMap((e) => {
      try {
        return [e()];
      } catch (t) {
        return (console.error(`asia spec ${e.name} failed`, t), []);
      }
    })
  );
}
var Il = (e) => (t, n, r) => {
    let i = e.y,
      a = e.d,
      o = e.deck || `asWoodBrown`,
      s = e.rail || o,
      c = e.h ?? 0.9,
      l = e.a0 ?? 0,
      u = e.a1 ?? r.L;
    for (let [d, f] of hl(r, l, u)) {
      let u = ml(r, (d + f) / 2, i + 0.3);
      if (
        (t.box(o, n, u, d, f, i - 0.14, i + 0.03, 0, a),
        c > 0 && Cl(t, n, u, s, d, f, i + 0.03, a - 0.05, c, e.step ?? 0.2),
        e.brackets !== !1)
      )
        for (
          let e = Math.ceil((d - l - 0.4) / 1.6) * 1.6 + l + 0.4;
          e < f - 0.1;
          e += 1.6
        )
          k(t, o, n, u, [e, i - 0.9, 0.04], [e, i - 0.16, a * 0.8], 0.1);
    }
    if (c > 0 && e.sides !== !1)
      for (let [e, o] of [
        [l, 1],
        [u, -1],
      ]) {
        let l = ml(r, e + o * 0.2, i + 0.3),
          u = e + o * 0.045;
        t.box(s, n, l, u - 0.045, u + 0.045, i + c - 0.06, i + c, 0, a);
        for (let e = 0.15; e < a - 0.1; e += 0.2)
          t.box(
            s,
            n,
            l,
            u - 0.03,
            u + 0.03,
            i + 0.03,
            i + c,
            e - 0.03,
            e + 0.03,
          );
      }
  },
  Ll =
    (e, t, n, r = -0.14) =>
    (i, a, o) => {
      for (let s of n)
        for (let n = 0; n < o.nb; n++) {
          if (s > o.top || e(s, n, o.nb) !== `window`) continue;
          let c = (s === 0 && t.win0) || t.win,
            l = Uc(o, s),
            u = (n + 0.5) * o.bw,
            d = Math.min(c.w, o.bw - 0.5),
            f = Math.min(c.h, l - c.sill - 0.35),
            p = o.ys[s] + c.sill,
            m = u - d / 2,
            h = Math.max(1, Math.round(d / 0.9)),
            g = Math.max(1, Math.round(f / 0.9));
          i.box(
            `asShoji`,
            a,
            o.grid[s][n],
            m,
            u + d / 2,
            p,
            p + f,
            r - 0.02,
            r,
            { planar: (e, t) => [((e - m) * h) / d, ((t - p) * g) / f] },
          );
        }
    };
