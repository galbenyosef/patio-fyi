// assets__lab-buildings-view-DJVr8phc 110 — box
// Lines 37148-37415 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function Bu(e, t, n, r, i, a = 0.55, o = 1.1, s = `deTankBlack`) {
  for (let [o, s] of [
    [-1, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
  ])
    e.box(
      R,
      t,
      0,
      n + o * a * 0.7 - 0.03,
      n + o * a * 0.7 + 0.03,
      i,
      i + 0.4,
      r + s * a * 0.7 - 0.03,
      r + s * a * 0.7 + 0.03,
    );
  e.add(s, B(a, a, o, 12).translate(n, i + 0.4 + o / 2, r), t, 0);
}
function Vu(e, t, n, r, i) {
  (e.box(`trimWhite`, t, n, r - 0.4, r + 0.4, i, i + 0.55, 0.02, 0.3),
    e.add(
      R,
      B(0.19, 0.19, 0.02, 12)
        .rotateX(Math.PI / 2)
        .translate(r + 0.1, i + 0.27, 0.31),
      t,
      n,
    ));
  for (let a of [r - 0.3, r + 0.3])
    e.box(R, t, n, a - 0.02, a + 0.02, i - 0.08, i, 0, 0.32);
}
var Hu = (e) => (t, n, r) => {
    let i = e.y,
      a = e.d,
      o = e.mat || `deCedar`,
      s = e.rail || o;
    for (let [c, l] of mu(r, e.a0, e.a1)) {
      let e = fu(r, (c + l) / 2, i + 0.3);
      (t.box(o, n, e, c, l, i - 0.18, i, 0, a),
        t.box(s, n, e, c, l, i + 0.95, i + 1.02, a - 0.08, a),
        t.box(s, n, e, c, l, i + 0.1, i + 0.16, a - 0.07, a - 0.01));
      for (let r = c + 0.08; r < l - 0.04; r += 0.15)
        t.box(s, n, e, r - 0.02, r + 0.02, i, i + 0.95, a - 0.06, a - 0.02);
      for (let r = c + 0.4; r < l - 0.2; r += 1.6)
        D(t, o, n, e, [r, i - 0.9, 0.03], [r, i - 0.2, a * 0.8], 0.09);
    }
    for (let o of [e.a0, e.a1 - 0.05]) {
      let e = fu(r, o, i + 0.3);
      t.box(s, n, e, o, o + 0.05, i + 0.95, i + 1.02, 0, a);
      for (let r = 0.15; r < a - 0.1; r += 0.15)
        t.box(s, n, e, o + 0.005, o + 0.045, i, i + 0.95, r - 0.02, r + 0.02);
    }
  },
  Uu = (e) => (t, n, r) => {
    let i = e.f ?? 0,
      a = e.u ?? (e.b + 0.5) * r.bw,
      o = r.ys[i],
      s = r.grid[i][z(r, a)],
      c = e.hw,
      l = o + e.sp,
      u = e.rw ?? 0.2,
      d = e.kind || `round`,
      f = l + vu(d, c + u);
    if (e.alfiz) {
      let i = a - c - u - 0.3,
        d = a + c + u + 0.3,
        p = f + 0.18,
        m = e.frame || `deGypsum`;
      if ((t.box(e.alfiz, n, s, i, d, l - 0.1, p, 0, 0.02), e.dado))
        for (let [r, l] of [
          [i, a - c - u],
          [a + c + u, d],
        ])
          t.box(e.alfiz, n, s, r, l, o, o + e.dado, 0, 0.02);
      (t.box(m, n, s, i - 0.12, i, o, p + 0.12, 0, 0.07),
        t.box(m, n, s, d, d + 0.12, o, p + 0.12, 0, 0.07),
        t.box(m, n, s, i - 0.12, d + 0.12, p, p + 0.12, 0, 0.08),
        e.pent &&
          Lu(
            t,
            n,
            fu(r, a, p + 0.35),
            e.pent,
            i - 0.35,
            d + 0.35,
            p + 0.2,
            0.85,
            0.35,
            e.pentTrim || `deCedar`,
          ));
    }
    if (
      (e.tymp && yu(t, n, s, e.tymp, d, a, l, l, c, 0.02, 0.045, !0),
      bu(t, n, s, e.ring, d, a, o, l, c, u, 0, e.rz ?? 0.09, e.alt),
      e.lamps)
    )
      for (let r of [-1, 1]) {
        let i = a + r * (c + u + (e.alfiz ? 0.75 : 0.45)),
          l = o + 2.2;
        (t.box(R, n, s, i - 0.02, i + 0.02, l + 0.35, l + 0.4, 0, 0.3),
          t.add(
            `brass`,
            B(0.1, 0.13, 0.36, 6).translate(i, l + 0.14, 0.3),
            n,
            s,
          ),
          t.add(`bulb`, new w(0.07, 8, 6).translate(i, l + 0.12, 0.3), n, s));
      }
  },
  Wu = (e) => (t, n, r) => {
    for (let i of e.bays) {
      let a = r.grid[e.f ?? 0][i],
        o = (i + 0.5) * r.bw,
        s = r.ys[e.f ?? 0];
      (yu(t, n, a, e.fill, e.kind, o, s + e.y0, s + e.sp, e.hw, 0, 0.02),
        bu(
          t,
          n,
          a,
          e.ring,
          e.kind,
          o,
          s + e.y0,
          s + e.sp,
          e.hw,
          e.rw ?? 0.18,
          0,
          0.06,
        ));
    }
  },
  Gu = (e) => (t, n, i) => {
    let a = e.d,
      o = 0.4,
      s = e.top,
      c = e.kind || `round`;
    for (let l = e.b0; l <= e.b1; l++) {
      let u = l * i.bw,
        d = u + i.bw,
        f = i.grid[0][l],
        p = (u + d) / 2,
        m = e.hw ?? (i.bw - 0.7) / 2,
        h = e.sp;
      (gu(
        t,
        n,
        f,
        e.mat,
        [
          [u, 0],
          [p - m, 0],
          ..._u(c, p, h, m),
          [p + m, 0],
          [d, 0],
          [d, s],
          [u, s],
        ],
        a - o,
        a,
      ),
        e.ring && bu(t, n, f, e.ring, c, p, h, h, m, 0.14, a - 0.02, a + 0.04),
        t.box(e.floor || `deFlag`, n, f, u, d, 0, 0.08, 0, a),
        t.box(e.mat, n, f, u, d, s, s + 0.25, 0, a + 0.05),
        e.roof &&
          t.add(
            e.roof,
            new r(d - u + 0.02, 0.08, Math.hypot(a + 0.4, 0.5))
              .rotateX(Math.atan2(0.5, a + 0.4))
              .translate((u + d) / 2, s + 0.25 + 0.29, (a + 0.4) / 2),
            n,
            f,
          ));
    }
    for (let [r, l] of [
      [e.b0 * i.bw, 1],
      [(e.b1 + 1) * i.bw, -1],
    ]) {
      let u = i.grid[0][z(i, r + l * 0.1)],
        d = a - o,
        f = (d - 0.6) / 2,
        p = Math.min(e.sp, s - f - 0.3);
      t.add(
        e.mat,
        new S(
          new C(
            hu([
              [0, 0],
              [d / 2 - f, 0],
              ..._u(c, d / 2, p, f),
              [d / 2 + f, 0],
              [d, 0],
              [d, s],
              [0, s],
            ]),
          ),
          { depth: 0.35, bevelEnabled: !1, curveSegments: 8 },
        )
          .rotateY(-Math.PI / 2)
          .translate(l > 0 ? r + 0.35 : r, 0, 0),
        n,
        u,
      );
    }
  };
function Ku(e, t, n, r, i, a = `deCheck`, o = `deChairBlue`) {
  (e.add(a, B(0.45, 0.45, 0.04, 14).translate(r, 0.76, i), t, n),
    e.add(R, B(0.04, 0.04, 0.74, 6).translate(r, 0.37, i), t, n));
  for (let [a, s] of [
    [0.7, 0],
    [-0.7, 0],
    [0, 0.7],
    [0, -0.7],
  ]) {
    let c = r + a,
      l = i + s,
      u = Math.sign(a) * 0.2,
      d = Math.sign(s) * 0.2;
    e.box(o, t, n, c - 0.21, c + 0.21, 0.43, 0.47, l - 0.21, l + 0.21);
    for (let [r, i] of [
      [-0.18, -0.18],
      [0.18, -0.18],
      [-0.18, 0.18],
      [0.18, 0.18],
    ])
      e.box(
        o,
        t,
        n,
        c + r - 0.02,
        c + r + 0.02,
        0,
        0.43,
        l + i - 0.02,
        l + i + 0.02,
      );
    a
      ? e.box(o, t, n, c + u - 0.02, c + u + 0.02, 0.47, 0.95, l - 0.2, l + 0.2)
      : e.box(
          o,
          t,
          n,
          c - 0.2,
          c + 0.2,
          0.47,
          0.95,
          l + d - 0.02,
          l + d + 0.02,
        );
  }
}
function qu(e, t, n, r, i) {
  (e.add(`dePot`, B(0.32, 0.24, 0.6, 10).translate(r, 0.3, i), t, n),
    e.add(`dePalm`, B(0.07, 0.1, 1.4, 6).translate(r, 1.3, i), t, n));
  for (let a = 0; a < 7; a++) {
    let o = (a / 7) * Math.PI * 2;
    D(
      e,
      `deCactus`,
      t,
      n,
      [r, 2, i],
      [r + Math.cos(o) * 0.9, 1.6, i + Math.sin(o) * 0.9],
      0.12,
    );
  }
}
