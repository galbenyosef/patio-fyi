// assets__lab-buildings-view-DY6ytqNM 190 — box
// Lines 59839-60182 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function uv(e, t, n, r, i, a, o = 1) {
  (e.box(
    `miWhite`,
    t,
    n,
    r - 1 * o,
    r + 1 * o,
    i,
    i + 1.1 * o,
    a - 0.7 * o,
    a + 0.7 * o,
  ),
    e.box(
      `louver`,
      t,
      n,
      r - 0.95 * o,
      r + 0.95 * o,
      i + 0.15,
      i + 0.95 * o,
      a + 0.7 * o,
      a + 0.72 * o,
    ),
    X(
      e,
      `miSteelDark`,
      t,
      n,
      r,
      a,
      i + 1.1 * o,
      i + 1.16 * o,
      0.5 * o,
      0.5 * o,
      14,
    ));
}
function dv(e, t, n, r, i, a, o = 0) {
  let s = D_(t, r, a, o);
  (e.box(w_, s, n, -0.08, 0.08, i, i + 0.35, -0.08, 0.08),
    e.add(
      `miSteelDark`,
      new C(0.28, 0.24, 0.5, 12)
        .rotateX(Math.PI / 2 - 0.2)
        .translate(0, i + 0.55, 0.05),
      s,
      n,
    ),
    e.add(
      `miLamp`,
      new c(0.25, 12).rotateX(-0.2).translate(0, i + 0.6, 0.31),
      s,
      n,
    ));
}
function fv(e, t, n, r, i, a, o = 0) {
  let s = new T(
    A_([
      [-0.3, 0],
      [0.3, 0],
      [0.3, 0.08],
      [0.12, 0.3],
      [0.08, 0.81],
      [-0.08, 0.81],
      [-0.12, 0.3],
      [-0.3, 0.08],
    ]),
  );
  e.add(
    `miConcrete`,
    new w(s, { depth: a, bevelEnabled: !1 })
      .translate(0, 0, -a / 2)
      .rotateY(Math.PI / 2),
    D_(t, r, i, o),
    n,
  );
}
function pv(e, t, n, r, i, a, o = {}) {
  let s = D_(t, r, i, a),
    c = o.body || `miOlive`;
  (e.box(w_, s, n, -0.5, 0.5, 0.55, 0.85, -3.4, 3.8),
    e.box(c, s, n, -1.15, 1.15, 0.85, 2.65, 2.3, 3.9),
    e.box(`glassGrey`, s, n, -1, 1, 1.85, 2.5, 3.9, 3.92));
  for (let t of [-1, 1])
    e.box(
      `glassGrey`,
      s,
      n,
      t * 1.15 - 0.01,
      t * 1.15 + 0.01,
      1.85,
      2.45,
      2.6,
      3.6,
    );
  (e.box(c, s, n, -0.95, 0.95, 0.85, 1.85, 3.9, 4.75),
    e.box(`louver`, s, n, -0.7, 0.7, 1, 1.7, 4.75, 4.77),
    e.box(w_, s, n, -1.15, 1.15, 0.55, 0.85, 4.7, 4.95));
  for (let t of [-1, 1])
    e.box(
      `miLamp`,
      s,
      n,
      t * 0.75 - 0.12,
      t * 0.75 + 0.12,
      1.45,
      1.65,
      4.75,
      4.8,
    );
  (e.box(c, s, n, -1.2, 1.2, 0.95, 1.65, -3.6, 2.2),
    o.canvas !== !1 &&
      (e.add(
        `miCanvas`,
        new C(1.2, 1.2, 5.8, 12, 1, !1, Math.PI / 2, Math.PI)
          .rotateX(Math.PI / 2)
          .scale(1, 0.85, 1)
          .translate(0, 1.65, -0.7),
        s,
        n,
      ),
      e.box(`miCanvas`, s, n, -1.2, 1.2, 1.65, 1.9, -3.6, 2.2)));
  for (let t of [3.25, -1.5, -2.75])
    for (let r of [-1, 1])
      e.add(
        `miRubber`,
        new C(0.52, 0.52, 0.38, 14)
          .rotateZ(Math.PI / 2)
          .translate(r * 1, 0.52, t),
        s,
        n,
      );
}
function mv(e, t, n, r, i, a, o, s = 6.06) {
  let c = 1.22,
    l = 2.59,
    u = s / 2;
  e.box(
    o,
    t,
    n,
    r - c + 0.04,
    r + c - 0.04,
    i + 0.12,
    i + l - 0.08,
    a - u + 0.04,
    a + u - 0.04,
  );
  for (let s of [-1, 1])
    for (let l of [0, 1])
      e.box(
        o,
        t,
        n,
        r + s * c - (s > 0 ? 0.12 : 0),
        r + s * c + (s < 0 ? 0.12 : 0),
        i + l * 2.4499999999999997,
        i + l * 2.4499999999999997 + 0.14,
        a - u,
        a + u,
      );
  for (let s of [-1, 1])
    for (let d of [-1, 1])
      e.box(
        o,
        t,
        n,
        r + s * c - (s > 0 ? 0.14 : 0),
        r + s * c + (s < 0 ? 0.14 : 0),
        i,
        i + l,
        a + d * u - (d > 0 ? 0.14 : 0),
        a + d * u + (d < 0 ? 0.14 : 0),
      );
  for (let o of [-0.8, -0.4, 0.4, 0.8])
    e.box(
      `miSteelDark`,
      t,
      n,
      r + o - 0.025,
      r + o + 0.025,
      i + 0.2,
      i + l - 0.2,
      a + u - 0.02,
      a + u + 0.03,
    );
  e.box(
    `miSteelDark`,
    t,
    n,
    r - 0.01,
    r + 0.01,
    i + 0.15,
    i + l - 0.15,
    a + u - 0.04,
    a + u + 0.005,
  );
}
var hv = (e) => (t, n, r) => {
    let { a0: i, a1: o, d: s, h: c, hb: l } = e,
      u = e.wall,
      d = e.trim || w_,
      f = s + 0.35,
      p = ((l - c) / s) * f,
      m = Math.atan2(p, f);
    for (let [a, l] of H_(r, i, o)) {
      let i = Y(r, (a + l) / 2, 1);
      (e.open
        ? t.box(`miConcrete`, n, i, a, l, 0, 0.08, 0, s)
        : t.box(u, n, i, a, l, 0, c, s - 0.2, s),
        t.box(d, n, i, a, l, c - 0.3, c, s, s + 0.06));
    }
    for (let [s, c] of H_(r, i - 0.2, o + 0.2))
      t.add(
        e.roof,
        new a(c - s, 0.1, Math.hypot(f, p))
          .rotateX(m)
          .translate((s + c) / 2, l - p / 2 + 0.05, f / 2),
        n,
        Y(r, (s + c) / 2, 1),
      );
    for (let [e, a] of [
      [i, 1],
      [o, -1],
    ]) {
      let i = new T(
        A_([
          [0, 0],
          [s, 0],
          [s, c],
          [0, l],
        ]),
      );
      t.add(
        u,
        new w(i, { depth: 0.2, bevelEnabled: !1 })
          .rotateY(-Math.PI / 2)
          .translate(e + (a > 0 ? 0.2 : 0), 0, 0),
        n,
        Y(r, e + a * 0.3, 1),
      );
    }
    if (e.open)
      for (
        let e = i + 0.2;
        e <= o - 0.1;
        e += (o - i - 0.4) / Math.max(1, Math.round((o - i) / 3))
      )
        t.box(d, n, Y(r, e, 1), e - 0.08, e + 0.08, 0, c - 0.3, s - 0.16, s);
    for (let i of e.wins || []) {
      let e = Y(r, i, 1),
        a = c - 1.9,
        o = c - 0.7;
      t.box(`glass`, n, e, i - 0.6, i + 0.6, a, o, s, s + 0.02);
      for (let [r, c, l, u] of [
        [i - 0.66, i + 0.66, a - 0.06, a],
        [i - 0.66, i + 0.66, o, o + 0.06],
        [i - 0.66, i - 0.6, a, o],
        [i + 0.6, i + 0.66, a, o],
        [i - 0.02, i + 0.02, a, o],
      ])
        t.box(d, n, e, r, c, l, u, s, s + 0.05);
    }
    if (e.door != null) {
      let i = e.door,
        a = Y(r, i, 1);
      t.box(`miDoorSteel`, n, a, i - 0.5, i + 0.5, 0.02, 2.1, s, s + 0.05);
      for (let [e, r, o, c] of [
        [i - 0.58, i - 0.5, 0, 2.18],
        [i + 0.5, i + 0.58, 0, 2.18],
        [i - 0.58, i + 0.58, 2.1, 2.18],
      ])
        t.box(d, n, a, e, r, o, c, s, s + 0.07);
    }
  },
  gv =
    (e, t, n, r, i = `miConcrete`) =>
    (a, o, s) => {
      let c = Y(s, e, t - 0.5);
      (a.box(i, o, c, e - n / 2, e + n / 2, t, t + 0.18, -0.02, r),
        a.box(i, o, c, e - n / 2, e + n / 2, t + 0.18, t + 0.3, r - 0.1, r));
      for (let i of [-1, 1])
        k(
          a,
          w_,
          o,
          c,
          [e + i * (n / 2 - 0.25), t - 0.85, 0.03],
          [e + i * (n / 2 - 0.25), t - 0.02, r - 0.25],
          0.07,
        );
      (a.box(w_, o, c, e - 0.1, e + 0.1, t - 0.1, t, 0.45, 0.65),
        a.box(
          `miLamp`,
          o,
          c,
          e - 0.09,
          e + 0.09,
          t - 0.28,
          t - 0.1,
          0.46,
          0.64,
        ));
    },
  _v =
    (e, t = w_) =>
    (n, r, i) => {
      for (let a of e)
        V_(n, t, r, i, a - 0.05, a + 0.05, 0.05, i.H - 0.15, 0.03, 0.13);
    },
  vv =
    (e, t, n = 1.4) =>
    (r, i, a) => {
      let o = a.H + a.para;
      U_(
        r,
        t,
        i,
        a,
        -0.05,
        a.L + 0.05,
        o,
        o + 0.1,
        -a.t - 0.05,
        0.06,
        void 0,
        a.H - 0.5,
      );
      for (let t = 0.15; t < a.L - 0.4; t += n)
        r.box(
          e,
          i,
          Y(a, t, a.H - 0.5),
          t,
          t + n / 2,
          o + 0.1,
          o + 0.8,
          -a.t,
          0,
        );
    },
  yv = (e, t) => (n, r, i) => {
    ((i.para = e), t(n, r, i));
  };
