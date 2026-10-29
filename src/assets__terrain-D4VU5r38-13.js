// assets__terrain-D4VU5r38 13 — clone
// Lines 4541-4875 of readable/assets__terrain-D4VU5r38.pretty.js (statement-aligned).
function Un(e, t) {
  let { r: n, wood: r, sink: i } = e;
  r.push(xn(t.clone().add(new K(0, 0.15, 0)), 0.2, 8016432, 1, 0.8));
  for (let e = 0; e < 4; e++) {
    let i = Y(e * 1.7 + n());
    r.push(
      z(
        t
          .clone()
          .add(new K(0, 0.08, 0))
          .addScaledVector(i, 0.12),
        t
          .clone()
          .addScaledVector(i, 0.35)
          .add(new K(0, -0.04, 0)),
        0.018,
        0.008,
        4,
        J(9072720),
      ),
    );
  }
  let a = t.clone().add(new K(0.02, 0.3, 0));
  (r.push(z(t.clone().add(new K(0, 0.22, 0)), a, 0.05, 0.04, 6, J(8030778))),
    Nn(
      e,
      {
        n: 5,
        len: 1.35,
        w: 0.38,
        tile: q.PADDLE,
        eTop: 1.5,
        eBot: 0.95,
        droop: 0.4,
        keel: 0.5,
        stops: [10140218, 7248426],
        drop: 0.05,
        even: !0,
      },
      a,
      0.03,
    ));
}
function Wn(e) {
  let { r: t, lod: n, wood: r } = e,
    i = Mn(e, {
      ...Hn,
      h: 6.4,
      lean: 1.1,
      leanA: 2,
      crown: null,
      coconuts: null,
      rings: 60,
    }),
    a = i.top,
    o = i.topR;
  for (let e = 0; e < 8; e++) {
    let n = Y(e * 0.8 + t() * 0.4),
      i = a
        .clone()
        .addScaledVector(n, o * 0.6)
        .addScaledVector(V, -0.05);
    r.push(
      z(
        i,
        i
          .clone()
          .addScaledVector(
            n.clone().multiplyScalar(0.35).addScaledVector(V, 1).normalize(),
            0.18 + t() * 0.45,
          ),
        0.06,
        0.004,
        3,
        J(e % 2 ? 13152392 : 11047016),
      ),
    );
  }
  (r.push(xn(a.clone().addScaledVector(V, 0.02), o * 0.95, 11836010, 1, 0.25)),
    Nn(
      e,
      {
        n: 4,
        len: 3.2,
        w: 1.1,
        tile: q.PINNATE,
        eTop: -0.2,
        eBot: -0.6,
        droop: 1.8,
        keel: 0.4,
        stops: [10123844, 8018480],
        drop: 0.2,
      },
      a.clone().addScaledVector(V, -0.35),
      o,
    ));
  let s = Y(0.9),
    c = new K(1.2, 0.17, -1.6),
    l = c.clone().addScaledVector(s, 2.6),
    u = [];
  for (let e = 0; e <= 10; e++) u.push(c.clone().lerp(l, e / 10));
  (r.push(
    bn(
      u,
      () => 0.16,
      n ? 6 : 8,
      (e, t, n, r) => Vn(e, t, n, (r.x - c.x) * 3 + 2),
    ),
  ),
    r.push(xn(c, 0.155, 12625016, 0, 1)));
  let d = l.clone().addScaledVector(s, 0.1);
  Nn(
    e,
    {
      n: 10,
      len: 3.6,
      w: 1.4,
      tile: q.PINNATE,
      eTop: 0.35,
      eBot: -0.05,
      droop: 0.2,
      keel: 0.35,
      stops: [11049022, 9075254, 8020528],
      cy: 0,
    },
    d,
    0.15,
  );
  for (let e = 0; e < 3; e++)
    r.push(
      xn(
        d
          .clone()
          .add(new K(t() * 1.4 - 0.7, -0.03, t() * 1.4 - 0.7))
          .setY(0.13),
        0.14,
        vn(t, [6965796, 8018474]),
        1,
        1.1,
      ),
    );
}
function Gn(e) {
  let { r: t, lod: n, wood: r } = e;
  for (let i = 0; i < 6; i++) {
    let a = Y(i * 1.05 + t() * 0.5),
      o = 0.6 + t() * 0.8,
      s = a.clone().multiplyScalar(0.2 + t() * 0.9),
      c = [
        s.clone().setY(0.06),
        s
          .clone()
          .addScaledVector(a, o * 0.5)
          .setY(0.1),
        s.clone().addScaledVector(a, o).setY(0.38),
      ],
      l = zn(8021064, 11045472);
    (r.push(
      bn(
        c,
        () => 0.09,
        n ? 5 : 7,
        (e, t, n, r) => l(e, t, n, r.y),
      ),
    ),
      Nn(
        e,
        {
          n: 9,
          len: 0.95,
          w: 0.95,
          tile: q.FAN,
          segs: 3,
          eTop: 1.1,
          eBot: 0.25,
          droop: 0.3,
          keel: 0.35,
          petiole: 0.9,
          petR: 0.016,
          petCol: 8030794,
          stops: [9087072, 7246424, 8034922],
          dead: 0.12,
        },
        c[2],
        0.06,
      ));
  }
}
function Kn(e) {
  let { r: t, lod: n, wood: r, sink: i } = e,
    a = [];
  for (let e = 0; e <= 14; e++)
    a.push(new K(0.03 * Math.sin(e), (1.5 * e) / 14, 0));
  r.push(
    bn(
      a,
      (e, t) =>
        (0.1 + 0.52 * (1 - e) ** 2.4) * (1 + 0.04 * Math.sin(t * 7 + e * 20)),
      n ? 7 : 14,
      (e, t, n, r) =>
        e
          .set(8023650)
          .lerp(fn.set(10129024), 0.5 + 0.5 * Math.sin(n * 7 + r.y * 20))
          .lerp(fn.set(4866104), mn(1 - r.y / 0.3, 0, 1) * 0.4),
    ),
  );
  let o = a[14],
    s = _n([5929520, 4876842, 6982202]),
    c = new _();
  for (let e = 0; e < 3; e++) {
    let a = Y(e * 2.2 + 0.3),
      l = o.clone().addScaledVector(An(a, 1.05 + t() * 0.2), 0.7 + t() * 0.8);
    r.push(z(o, l, 0.1, 0.07, n ? 5 : 8, J(8812906)));
    let u = On(l.clone().addScaledVector(V, -0.3), 0.4),
      d = n ? 20 : 46;
    for (let e = 0; e < d; e++) {
      let r = Y(e * 2.39996),
        { pts: a } = En(
          l,
          An(r, 1.2 - (e / d) * 1.3),
          1 + t() * 0.5,
          n ? 3 : 6,
          1.2 + t() * 0.6,
        ),
        o = s(t(), new _()).multiplyScalar(0.85 + 0.25 * t());
      Tn(
        i,
        a,
        kn(r),
        0.06,
        q.STRAP,
        (e) => c.copy(o).multiplyScalar(0.8 + 0.3 * e),
        u,
        0.3,
        1.2,
      );
    }
  }
}
function qn(e) {
  let { r: t, lod: n, wood: r, sink: i } = e,
    a = Mn(e, {
      h: 3,
      r0: 0.14,
      r1: 0.12,
      flare: 0.1,
      lean: 0.8,
      leanA: 1,
      rings: 40,
      radial: 9,
      bump: Bn(0.06),
      bark: In(9075296, 13154452, 0.18, 5917242, 0.7),
    }),
    o = J(8285782);
  for (let e = 0; e < 8; e++) {
    let i = Y(e * 0.8 + t() * 0.3),
      s = 0.15 + t() * 0.3,
      c = a.pts[Math.round(s * (a.pts.length - 1))],
      l = c.clone().addScaledVector(i, 0.1),
      u = c
        .clone()
        .setY(-0.05)
        .addScaledVector(i, 0.7 + t() * 0.7);
    Dn(
      r,
      [
        l,
        l
          .clone()
          .lerp(u, 0.5)
          .addScaledVector(i, 0.15)
          .addScaledVector(V, 0.12),
        u,
      ],
      0.045,
      0.055,
      n ? 4 : 6,
      o,
    );
  }
  let s = [],
    c = (e, i, a, l, u) => {
      let d = e.clone().addScaledVector(i, a);
      if ((r.push(z(e, d, l, l * 0.8, n ? 5 : 7, o)), u === 2)) {
        s.push({ p: d, d: i });
        return;
      }
      for (let e = 0; e < 2; e++)
        c(
          d,
          i
            .clone()
            .addScaledVector(Y(t() * 6.28), 0.7)
            .addScaledVector(V, 0.35)
            .normalize(),
          a * 0.75,
          l * 0.78,
          u + 1,
        );
    };
  for (let e = 0; e < 3; e++) c(a.top, An(Y(e * 2.1 + 0.5), 0.8), 1, 0.1, 1);
  let l = _n([4877872, 5930552, 7244346]),
    u = new _();
  s.forEach((e, a) => {
    let o = On(e.p, 0.45),
      s = n ? 10 : 22;
    for (let r = 0; r < s; r++) {
      let c = Y(r * 2.39996 + a),
        d = r / s,
        { pts: f } = En(
          e.p,
          An(c, 1.3 - d * 1.4).addScaledVector(e.d, 0.3),
          1.3 + 0.3 * t(),
          n ? 3 : 6,
          0.5,
        ),
        p = l(d + 0.2 * t(), new _()).multiplyScalar(0.85 + 0.2 * t());
      Tn(
        i,
        f,
        kn(c),
        0.14,
        q.STRAP,
        (e) => u.copy(p).multiplyScalar(0.8 + 0.3 * e),
        o,
        0.6,
        0.5,
      );
    }
    a % 3 == 0 &&
      r.push(
        xn(e.p.clone().addScaledVector(V, -0.3), 0.19, 14181406, +!n, 1.15),
      );
  });
}
