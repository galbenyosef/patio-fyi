// assets__lab-buildings-view-DJVr8phc 189 — box
// Lines 59829-60172 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
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
  let c = D_(t, r, a, o);
  (e.box(w_, c, n, -0.08, 0.08, i, i + 0.35, -0.08, 0.08),
    e.add(
      `miSteelDark`,
      new s(0.28, 0.24, 0.5, 12)
        .rotateX(Math.PI / 2 - 0.2)
        .translate(0, i + 0.55, 0.05),
      c,
      n,
    ),
    e.add(
      `miLamp`,
      new y(0.25, 12).rotateX(-0.2).translate(0, i + 0.6, 0.31),
      c,
      n,
    ));
}
function fv(e, t, n, r, i, a, o = 0) {
  let s = new C(
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
    new S(s, { depth: a, bevelEnabled: !1 })
      .translate(0, 0, -a / 2)
      .rotateY(Math.PI / 2),
    D_(t, r, i, o),
    n,
  );
}
function pv(e, t, n, r, i, a, o = {}) {
  let c = D_(t, r, i, a),
    l = o.body || `miOlive`;
  (e.box(w_, c, n, -0.5, 0.5, 0.55, 0.85, -3.4, 3.8),
    e.box(l, c, n, -1.15, 1.15, 0.85, 2.65, 2.3, 3.9),
    e.box(`glassGrey`, c, n, -1, 1, 1.85, 2.5, 3.9, 3.92));
  for (let t of [-1, 1])
    e.box(
      `glassGrey`,
      c,
      n,
      t * 1.15 - 0.01,
      t * 1.15 + 0.01,
      1.85,
      2.45,
      2.6,
      3.6,
    );
  (e.box(l, c, n, -0.95, 0.95, 0.85, 1.85, 3.9, 4.75),
    e.box(`louver`, c, n, -0.7, 0.7, 1, 1.7, 4.75, 4.77),
    e.box(w_, c, n, -1.15, 1.15, 0.55, 0.85, 4.7, 4.95));
  for (let t of [-1, 1])
    e.box(
      `miLamp`,
      c,
      n,
      t * 0.75 - 0.12,
      t * 0.75 + 0.12,
      1.45,
      1.65,
      4.75,
      4.8,
    );
  (e.box(l, c, n, -1.2, 1.2, 0.95, 1.65, -3.6, 2.2),
    o.canvas !== !1 &&
      (e.add(
        `miCanvas`,
        new s(1.2, 1.2, 5.8, 12, 1, !1, Math.PI / 2, Math.PI)
          .rotateX(Math.PI / 2)
          .scale(1, 0.85, 1)
          .translate(0, 1.65, -0.7),
        c,
        n,
      ),
      e.box(`miCanvas`, c, n, -1.2, 1.2, 1.65, 1.9, -3.6, 2.2)));
  for (let t of [3.25, -1.5, -2.75])
    for (let r of [-1, 1])
      e.add(
        `miRubber`,
        new s(0.52, 0.52, 0.38, 14)
          .rotateZ(Math.PI / 2)
          .translate(r * 1, 0.52, t),
        c,
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
var hv = (e) => (t, n, i) => {
    let { a0: a, a1: o, d: s, h: c, hb: l } = e,
      u = e.wall,
      d = e.trim || w_,
      f = s + 0.35,
      p = ((l - c) / s) * f,
      m = Math.atan2(p, f);
    for (let [r, l] of H_(i, a, o)) {
      let a = Y(i, (r + l) / 2, 1);
      (e.open
        ? t.box(`miConcrete`, n, a, r, l, 0, 0.08, 0, s)
        : t.box(u, n, a, r, l, 0, c, s - 0.2, s),
        t.box(d, n, a, r, l, c - 0.3, c, s, s + 0.06));
    }
    for (let [s, c] of H_(i, a - 0.2, o + 0.2))
      t.add(
        e.roof,
        new r(c - s, 0.1, Math.hypot(f, p))
          .rotateX(m)
          .translate((s + c) / 2, l - p / 2 + 0.05, f / 2),
        n,
        Y(i, (s + c) / 2, 1),
      );
    for (let [e, r] of [
      [a, 1],
      [o, -1],
    ]) {
      let a = new C(
        A_([
          [0, 0],
          [s, 0],
          [s, c],
          [0, l],
        ]),
      );
      t.add(
        u,
        new S(a, { depth: 0.2, bevelEnabled: !1 })
          .rotateY(-Math.PI / 2)
          .translate(e + (r > 0 ? 0.2 : 0), 0, 0),
        n,
        Y(i, e + r * 0.3, 1),
      );
    }
    if (e.open)
      for (
        let e = a + 0.2;
        e <= o - 0.1;
        e += (o - a - 0.4) / Math.max(1, Math.round((o - a) / 3))
      )
        t.box(d, n, Y(i, e, 1), e - 0.08, e + 0.08, 0, c - 0.3, s - 0.16, s);
    for (let r of e.wins || []) {
      let e = Y(i, r, 1),
        a = c - 1.9,
        o = c - 0.7;
      t.box(`glass`, n, e, r - 0.6, r + 0.6, a, o, s, s + 0.02);
      for (let [i, c, l, u] of [
        [r - 0.66, r + 0.66, a - 0.06, a],
        [r - 0.66, r + 0.66, o, o + 0.06],
        [r - 0.66, r - 0.6, a, o],
        [r + 0.6, r + 0.66, a, o],
        [r - 0.02, r + 0.02, a, o],
      ])
        t.box(d, n, e, i, c, l, u, s, s + 0.05);
    }
    if (e.door != null) {
      let r = e.door,
        a = Y(i, r, 1);
      t.box(`miDoorSteel`, n, a, r - 0.5, r + 0.5, 0.02, 2.1, s, s + 0.05);
      for (let [e, i, o, c] of [
        [r - 0.58, r - 0.5, 0, 2.18],
        [r + 0.5, r + 0.58, 0, 2.18],
        [r - 0.58, r + 0.58, 2.1, 2.18],
      ])
        t.box(d, n, a, e, i, o, c, s, s + 0.07);
    }
  },
  gv =
    (e, t, n, r, i = `miConcrete`) =>
    (a, o, s) => {
      let c = Y(s, e, t - 0.5);
      (a.box(i, o, c, e - n / 2, e + n / 2, t, t + 0.18, -0.02, r),
        a.box(i, o, c, e - n / 2, e + n / 2, t + 0.18, t + 0.3, r - 0.1, r));
      for (let i of [-1, 1])
        D(
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
