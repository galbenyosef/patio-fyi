// assets__terrain-C3lt_eD1 16 — addscaledvector
// Lines 5793-6119 of readable/assets__terrain-C3lt_eD1.pretty.js (statement-aligned).
function tr(e, t, n, r = null) {
  let i = [],
    a = Te(t * 977 + 5),
    o = e.barkColor,
    s = Ne(
      {
        ...Zn,
        ...e,
        barkColor: (e, t, n, r) => {
          (o(e, t, n, r), a() < 0.12 && i.push(new K(t, n, r)));
        },
      },
      t,
      n,
    );
  if (!r) return jn(s.wood, s.leaves);
  let c = X(t * 31 + 1, n);
  r(c, i, s);
  let l = c.wood.length ? Ie([s.wood, ...c.wood]) : s.wood,
    u = c.sink.pos.length ? Oe(c.sink) : null;
  return jn(l, s.leaves && u ? Ie([s.leaves, u]) : (s.leaves ?? u));
}
var nr = (e) => (t) => {
  let n = mn(t / e.trunkH, 0, 1);
  return e.trunkR * (1 - 0.45 * n) * (1 + 0.55 * Math.exp(-n * 14));
};
function rr(e, t, n, r) {
  let i = [];
  if (!e) return i;
  let a = e.attributes.position;
  for (let e = 0; e < t * 60 && i.length < t; e++) {
    let e = (n() * a.count) | 0,
      t = new K(a.getX(e), a.getY(e), a.getZ(e));
    (!r || r(t)) && i.push(t);
  }
  return i;
}
function ir(e, t, n, r, i, a, o = 0.2, s = 0.72) {
  let c = t.crown.c,
    l = t.crown.r;
  for (let u of rr(
    t.leaves,
    Math.round(n * (e.lod ? 0.5 : 1)),
    e.r,
    (e) =>
      Math.hypot(e.x - c.x, e.z - c.z) > l * s &&
      e.y < c.y + l * 0.2 &&
      e.y > 1.2,
  )) {
    let t = u.clone().addScaledVector(V, -o);
    (e.wood.push(z(u, t, 0.012, 0.01, 3, J(5921322))),
      e.wood.push(
        xn(
          t.clone().addScaledVector(V, -r * i * 0.9),
          r,
          vn(e.r, a),
          +!e.lod,
          i,
        ),
      ));
  }
}
function ar(e, t, n, r, i, a, o) {
  for (let s = 0; s < t; s++)
    e.wood.push(
      Cn(
        (s / t) * Math.PI * 2 + e.r() * 0.5,
        n,
        r * (0.75 + 0.5 * e.r()),
        i * (0.8 + 0.4 * e.r()),
        a,
        o,
        e.lod ? 3 : 6,
      ),
    );
}
function or(e, t, n, r, i, a) {
  t = { ...Zn, ...t };
  let o = nr(t),
    s = Y(t.leanA);
  for (let c = 0; c < n; c++) {
    let l = [],
      u = (c / n) * Math.PI * 2,
      d = c % 2 ? 1 : -1,
      f = r * (0.6 + 0.4 * e.r());
    for (let e = 0; e <= 18; e++) {
      let n = f * (1 - e / 18),
        r = u + d * n * 0.45,
        a = n / t.trunkH;
      l.push(
        Y(r)
          .multiplyScalar(o(n) * 0.98 + i * 0.6)
          .addScaledVector(s, t.lean * a * a)
          .setY(n - (e === 18 ? 0.1 : 0)),
      );
    }
    e.wood.push(
      bn(
        l,
        (e) => i * (0.8 + 0.5 * e),
        e.lod ? 4 : 6,
        (e, t, n, r) => a(e, r.x, r.y, r.z),
      ),
    );
  }
}
function sr(e, t, n = 1, r = !0, i = 9) {
  let { r: a, lod: o, wood: s, sink: c } = e,
    l = 2.5 * n,
    u = Y(a() * 6).multiplyScalar(0.12 * n),
    d = [];
  for (let e = 0; e <= 6; e++)
    d.push(
      t
        .clone()
        .addScaledVector(V, (l * e) / 6)
        .addScaledVector(u, (e / 6) ** 2),
    );
  s.push(
    bn(
      d,
      (e) => 0.16 * n * (1 - 0.35 * e) * (1 + 0.3 * Math.exp(-e * 10)),
      o ? 6 : 10,
      (e, n, r, i) =>
        e
          .set(6982202)
          .lerp(
            fn.set(5913130),
            mn(Math.sin(r * 3 + i.y * 4) * Math.sin(i.y * 7 - r) - 0.2, 0, 1) *
              0.8,
          )
          .lerp(fn.set(6969914), mn(1 - (i.y - t.y) / 0.5, 0, 1) * 0.6),
    ),
  );
  let f = d[6];
  if (
    (Nn(
      e,
      {
        n: i,
        len: 2.6 * n,
        w: 0.72 * n,
        tile: q.PADDLE,
        segs: 7,
        eTop: 1.4,
        eBot: 0.05,
        droop: 0.75,
        keel: 0.15,
        twist: 0.25,
        stops: [8038458, 5935152, 4618792],
        dead: 0.15,
        deadStops: [9072186, 723e4],
        drop: 0.35 * n,
        cy: 0.2,
      },
      f,
      0.08 * n,
    ),
    !r)
  )
    return;
  let p = Y(a() * 6),
    m = f.clone().addScaledVector(V, 0.05),
    h = m.clone().addScaledVector(p, 0.45).addScaledVector(V, 0.12),
    g = h.clone().addScaledVector(p, 0.2).addScaledVector(V, -0.55),
    _ = g.clone().addScaledVector(p, 0.03).addScaledVector(V, -0.6);
  (Dn(s, [m, h, g, _], 0.04, 0.03, o ? 4 : 6, J(8030778)),
    s.push(
      z(
        _,
        _.clone().addScaledVector(V, -0.3),
        0.08,
        0.01,
        o ? 5 : 8,
        J(5904938),
      ),
    ));
  let v = o ? 3 : 6;
  for (let e = 0; e < v; e++) {
    let t = e / v,
      n = h
        .clone()
        .lerp(g, Math.min(1, t * 1.4))
        .lerp(_, Math.max(0, t * 1.4 - 1) * 0.6),
      r = new K().subVectors(g, h).normalize(),
      i = new K().crossVectors(r, V).normalize(),
      o = new K().crossVectors(i, r);
    for (let t = 0; t < 9; t++) {
      let r = (t / 9) * Math.PI * 2 + e * 0.3,
        c = i
          .clone()
          .multiplyScalar(Math.cos(r))
          .addScaledVector(o, Math.sin(r)),
        l = n.clone().addScaledVector(c, 0.05),
        u = l.clone().addScaledVector(c, 0.08).addScaledVector(V, 0.08);
      Dn(
        s,
        [l, u, u.clone().addScaledVector(V, 0.09).addScaledVector(c, 0.02)],
        0.026,
        0.018,
        4,
        J(8823346, 0.85 + 0.25 * a()),
      );
    }
  }
}
function cr(e, t) {
  let { r: n, lod: r, wood: i, sink: a } = e,
    o = new v(),
    s = _n(t.stops),
    c = Math.round(t.n * (r ? 0.6 : 1)),
    l = On(new K(0, t.cy ?? 0.6, 0), 0.5);
  for (let e = 0; e < c; e++) {
    let c = Y(e * 2.39996 + n() * 0.3),
      u = c.clone().multiplyScalar(Math.sqrt(n()) * t.rad),
      d = t.lean[0] + (t.lean[1] - t.lean[0]) * n(),
      f = t.pet[0] + (t.pet[1] - t.pet[0]) * n(),
      p = En(u, An(c, Math.PI / 2 - d), f, 3, t.petDroop ?? 0.05);
    Dn(
      i,
      p.pts,
      t.petR,
      t.petR * 0.6,
      r ? 3 : 5,
      J(t.petCol, 0.85 + 0.2 * n()),
    );
    let m = p.pts[3],
      h = s(n(), new v()).multiplyScalar(0.85 + 0.25 * n());
    if (t.card) {
      let e = c
          .clone()
          .multiplyScalar(0.65)
          .addScaledVector(V, -0.75)
          .normalize(),
        r = V.clone().multiplyScalar(0.75).addScaledVector(c, 0.65).normalize(),
        i = t.size * (0.75 + 0.4 * n());
      Le(
        a,
        m.clone().addScaledVector(e, i * 0.22),
        r,
        e,
        i * 0.85,
        i,
        t.tile,
        h,
        l,
        0.12,
      );
    } else {
      let { pts: e } = En(
        m,
        p.d,
        t.len * (0.8 + 0.35 * n()),
        r ? 3 : 5,
        t.droop,
      );
      Tn(
        a,
        e,
        kn(c),
        t.w,
        t.tile,
        (e) => o.copy(h).multiplyScalar(0.8 + 0.3 * e),
        l,
        t.keel ?? 0.2,
        (n() - 0.5) * 0.8,
      );
    }
  }
}
function lr(e) {
  let { r: t, lod: n, wood: r } = e;
  for (let e = 0; e < (n ? 3 : 6); e++) {
    let n = Y(e * 2.2 + t()),
      i = n.clone().multiplyScalar(0.1 + t() * 0.3),
      a = i
        .clone()
        .addScaledVector(n, 0.1)
        .setY(1 + t() * 0.35);
    r.push(z(i, a, 0.018, 0.014, 5, J(5929562)));
    let o = n.clone().addScaledVector(V, 0.08).normalize(),
      s = kn(n);
    r.push(
      z(a, a.clone().addScaledVector(o, 0.24), 0.034, 0.005, 6, (e, t, n, r) =>
        e
          .set(4876882)
          .lerp(
            fn.set(10498122),
            mn(Math.hypot(t - a.x, r - a.z) / 0.24, 0, 1),
          ),
      ),
    );
    let c = a.clone().addScaledVector(o, 0.08).addScaledVector(V, 0.03);
    for (let e = 0; e < 3; e++)
      r.push(
        z(
          c,
          c.clone().addScaledVector(
            V.clone()
              .addScaledVector(o, 0.1 + e * 0.14)
              .addScaledVector(s, (e - 1) * 0.3)
              .normalize(),
            0.17,
          ),
          0.02,
          0.003,
          4,
          J(16747028),
        ),
      );
    r.push(
      z(
        c,
        c
          .clone()
          .addScaledVector(
            o.clone().multiplyScalar(0.8).addScaledVector(V, 0.6).normalize(),
            0.13,
          ),
        0.013,
        0.002,
        4,
        J(2768584),
      ),
    );
  }
}
