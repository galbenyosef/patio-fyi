// assets__yard-dressing-view-Du2F6MWT 32 — math
// Lines 9088-9385 of readable/assets__yard-dressing-view-Du2F6MWT.pretty.js (statement-aligned).
function ji(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = t.season === `fall`,
    a = n.pick([0.008, 0.0085, 0.0095]),
    o = H(n.pick(kr), 0.5),
    s = n.chance(0.4),
    c = [],
    l,
    u;
  if (s) {
    let e = n.range(0.22, 0.27),
      t = n.range(0.34, 0.42),
      i = H(n.pick([2771562, 6961706, 3824202, 9075290, 2763306]), 0.25);
    (P(
      r,
      [
        [0.001, 0],
        [e * 0.75, 0],
        [e * 0.8, 0.02],
        [e, t * 0.35],
        [e + 0.02, t],
        [e + 0.035, t + 0.01],
        [e + 0.03, t + 0.025],
        [e + 0.005, t + 0.02],
        [e - 0.015, t * 0.4],
        [e * 0.7, 0.04],
        [0.001, 0.04],
      ],
      i,
      0,
      0,
      0,
      36,
    ),
      I(r, new d(e + 0.02, 0.012, 6, 36), i, 0, t + 0.012, 0, Math.PI / 2));
    let s = e - 0.03 - a,
      f = Math.floor((t - 0.08) / (2 * a * 0.95));
    for (let e = 0; e <= f * 14; e++) {
      let t = (e / 14) * Er,
        n = e / (f * 14);
      c.push(
        X(
          Math.cos(t) * s * (0.97 + 0.03 * Math.sin(t * 3)),
          0.05 + a + n * f * 2 * a * 0.95,
          Math.sin(t) * s,
        ),
      );
    }
    (ei(r, c, a, o, 24, 7),
      (l = c[c.length - 1]),
      (u = null),
      Z(
        r,
        0.025,
        0.025,
        0.02,
        H(1710618, 0.5),
        X(e * 0.87, 0.07, 0),
        X(1, 0.2, 0),
        12,
      ));
    let p = ni(
      ei(
        r,
        [
          c[0],
          X(e * 0.6, 0.06, 0.02),
          X(e + 0.05, 0.06, 0.02),
          X(e + 0.3, Mr + a, 0.1),
          X(e + 0.8, Mr + a, n.range(-0.4, 0.4)),
          X(e + 1.4, Mr + a, n.range(-0.6, 0.6)),
        ],
        a,
        o,
      ),
    );
    ti(r, p.p1, p.d1, a);
  } else {
    let e = n.int(5, 8),
      t = n.range(0.26, 0.38),
      i = n() * Er,
      s = n() * Er;
    for (let n = 0; n <= e * 20; n++) {
      let e = (n / 20) * Er,
        r = n / 20,
        o =
          t * (1 + 0.12 * Math.sin(e * 0.5 + i) + 0.06 * Math.sin(e * 1.7 + s));
      c.push(
        X(
          0.09 * Math.sin(r * 1.3 + i) + Math.cos(e) * o,
          Mr +
            a * 0.9 +
            r * a * 1.5 +
            a * Math.max(0, Math.sin(e * 2 + r)) * 0.8,
          0.09 * Math.cos(r * 0.9 + s) + Math.sin(e) * o,
        ),
      );
    }
    (ei(r, c, a, o, 24, 7), (l = c[c.length - 1]), (u = c[0]));
  }
  let f = X(l.x, 0, l.z).normalize(),
    p = ni(
      ei(
        r,
        s
          ? [
              l,
              l
                .clone()
                .add(X(0, 0.04, 0))
                .addScaledVector(f, 0.02),
              l
                .clone()
                .addScaledVector(f, 0.12)
                .setY(l.y + 0.07),
              l
                .clone()
                .addScaledVector(f, 0.2)
                .setY(l.y - 0.02),
              l
                .clone()
                .addScaledVector(f, 0.24)
                .setY(l.y - 0.14),
            ]
          : [
              l,
              l
                .clone()
                .addScaledVector(f, -0.08)
                .setY(l.y + a),
              l
                .clone()
                .addScaledVector(f, -0.2)
                .add(X(0.05, 0, 0.05))
                .setY(l.y + a * 0.5),
            ],
        a,
        o,
      ),
    );
  if (
    (ti(r, p.p1, p.d1, a, !0),
    ri(r, n, p.p1.clone().addScaledVector(p.d1, 0.01), p.d1, s ? 0.3 : 1.45),
    u)
  ) {
    let e = oi(r, n, u.x + n.range(1.3, 1.8), u.z - 0.3, -Math.PI / 2),
      t = e.out.clone().addScaledVector(e.dir, 0.12),
      i = ni(
        ei(
          r,
          [
            u,
            X(u.x + 0.3, Mr + a, u.z + 0.05),
            X(t.x - 0.3, Mr + a, t.z + 0.1),
            t,
            e.out,
          ],
          a,
          o,
        ),
      );
    ti(r, i.p1, i.d1, a);
  }
  return (
    i && K(r, { w: 2, d: 2 }, { count: 40, seed: e + 2, clump: 0.3 }),
    R(r, { keepGrass: !0 })
  );
}
function Mi(e, t, n, r, i, a, o = 3) {
  let s = [[n.x, n.z]],
    c = Math.atan2(r.z, r.x),
    l = n.x,
    u = n.z;
  for (let e = 0; e < o; e += 0.4)
    ((c += t.range(-0.4, 0.4)),
      (l += Math.cos(c) * 0.4),
      (u += Math.sin(c) * 0.4),
      s.push([l, u]));
  let d = ei(
      e,
      [
        n,
        n
          .clone()
          .addScaledVector(r, 0.06)
          .setY(Math.max(Mr + i, n.y - 0.02)),
        ...s.slice(2).map(([e, t]) => X(e, Mr + i * 0.9, t)),
      ],
      i,
      a,
    ),
    f = ni(d);
  return (ti(e, f.p0, f.d0, i), ti(e, f.p1, f.d1, i, !0), d);
}
function Ni(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = t.season === `fall`,
    a = he(n.pick([2783802, 3815994, 1723018, 14209208, 14721056])),
    o = n.range(0.42, 0.5),
    s = 0.1;
  for (let e of [-1, 1])
    (F(r, o + 0.06, 0.02, 0.03, 0.008, a, 0, 0.01, e * 0.09),
      F(r, 0.04, 0.02, 0.22, 0.008, a, e * (o / 2 + 0.01), 0.01, 0));
  (M(r, 0.1, 0.13, 0.1, 0.02, a, o / 2 - 0.02, 0.01, 0),
    F(r, 0.08, 0.05, 0.03, 0.01, H(1710618, 0.5), o / 2 - 0.02, 0.15, 0.03),
    M(r, 0.035, 0.11, 0.05, 0.01, a, -o / 2 + 0.03, 0.01, 0),
    Z(r, 0.014, 0.014, 0.05, a, X(o / 2 + 0.03, 0.05, 0), X(1, 0, 0), 10),
    Z(r, 0.017, 0.017, 0.024, Dr(), X(o / 2 + 0.07, 0.05, 0), X(1, 0, 0), 6));
  let c = new D();
  (c.position.set(0, s, 0), r.add(c));
  let l = o - 0.1,
    u = n.pick([16, 18, 20]),
    d = 0.025,
    f = H(13159632, 0.3, 0.9),
    p = [];
  L(
    c,
    Array.from({ length: 9 }, (e, t) => {
      let n = t / 8 - 0.5;
      return [n * l, d * (1 - 4 * n * n), 0];
    }),
    0.011,
    f,
    24,
    10,
  );
  for (let e = 0; e < u; e++) {
    let t = e / (u - 1) - 0.5,
      n = t * l * 0.92,
      r = d * (1 - 4 * t * t) + 0.011;
    (Z(
      c,
      0.0035,
      0.003,
      0.008,
      H(1710618, 0.5),
      X(n, r - 0.002, 0),
      X(0, 1, 0),
      6,
    ),
      p.push([n, r + 0.006, X(t * 1.1, 1, 0).normalize()]));
  }
  let m = n.range(0.85, 1.15),
    h = Er / n.range(10, 16),
    g = n() * Er,
    _ = (e) => m * Math.sin(e * h + g);
  if (i) c.rotation.x = n.range(-0.9, 0.9);
  else {
    c.userData.tick = (e) => {
      c.rotation.x = _(e);
    };
    let e = 1.35;
    (et(
      r,
      u * 24,
      e,
      (t, n, r, i) => {
        let [a, o, c] = p[t % u],
          l = n * e,
          d = _(i - l),
          f = Math.cos(d),
          m = Math.sin(d),
          h = 6.4 * (0.96 + 0.08 * jr(t * 0.618)),
          g = a,
          v = s + o * f,
          y = o * m,
          b = c.x,
          x = c.y * f,
          S = c.y * m;
        return (
          r.set(
            g + b * h * l * 0.7,
            v + x * h * l - 4.9 * l * l,
            y + S * h * l,
          ),
          r.y < 0 ? ((r.y = 0.01), 0) : 1.2 - n * 0.5
        );
      },
      { size: 0.019, opacity: 0.72 },
    ),
      (c.rotation.x = _(0)));
  }
  return (
    Mi(
      r,
      n,
      X(o / 2 + 0.1, 0.05, 0),
      X(1, 0, n.range(-0.5, 0.5)).normalize(),
      0.0085,
      H(n.pick(kr), 0.5),
      n.range(2.5, 4),
    ),
    i && K(r, { w: 1.6, d: 1.2 }, { count: 30, seed: e + 2 }),
    R(r, { keepGrass: !0 })
  );
}
