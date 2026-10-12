// assets__yard-dressing-view-Du2F6MWT 31 — math
// Lines 8741-9087 of readable/assets__yard-dressing-view-Du2F6MWT.pretty.js (statement-aligned).
function Di(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = t.season === `fall`,
    a = n.pick([`cart`, `cart`, `post`, `hanger`]),
    o = n.pick([0.0085, 0.009]),
    s = H(n.pick(kr), 0.5),
    c = H(n.pick([2779706, 1710618, 3815994, 2771562]), 0.45, 0.4),
    l = he(n.pick([2783802, 1710618, 14209208, 3815994])),
    u = oi(r, n, n.range(1.5, 1.9), n.range(-0.6, -0.2), -Math.PI / 2),
    f = u.out.clone().addScaledVector(u.dir, 0.12),
    p,
    m,
    h;
  if (a !== `hanger`) {
    let e = a === `post`,
      t = e ? 0.85 : 0.45,
      u = e ? 0.2 : 0,
      f = 0.075,
      g = 0.34,
      _ = n.int(3, 5);
    if (e) {
      (B(r, 0.09, 1.25, 0.09, $r(), 0, 0, -0.05),
        F(r, 0.16, 0.26, 0.02, 0.01, c, 0, t, 0));
      for (let e of [-1, 1])
        N(r, [e * 0.06, t + 0.06, 0.005], [e * 0.21, t, u], 0.012, c, 8);
    } else {
      for (let e of [-1, 1]) {
        let n = e * 0.26;
        (N(r, [n, 0.02, 0.34], [n, t, 0], 0.013, c),
          N(r, [n, t, 0], [n, 0.2, -0.3], 0.013, c),
          N(r, [n, 0.2, -0.3], [n, 0.98, -0.44], 0.013, c),
          I(
            r,
            new d(0.17, 0.035, 8, 26),
            H(1710618, 0.85),
            e * 0.37,
            0.2,
            -0.3,
            0,
            Math.PI / 2,
          ),
          Z(r, 0.06, 0.06, 0.05, l, X(e * 0.345, 0.2, -0.3), X(e, 0, 0), 16));
      }
      (N(r, [-0.26, 0.02, 0.34], [0.26, 0.02, 0.34], 0.013, c),
        N(r, [-0.38, 0.2, -0.3], [0.38, 0.2, -0.3], 0.01, Or()),
        L(
          r,
          [
            [-0.26, 0.98, -0.44],
            [-0.24, 1.04, -0.46],
            [0.24, 1.04, -0.46],
            [0.26, 0.98, -0.44],
          ],
          0.016,
          c,
          16,
          8,
        ),
        Z(
          r,
          0.02,
          0.02,
          0.3,
          H(1710618, 0.8),
          X(-0.15, 1.04, -0.46),
          X(1, 0, 0),
          10,
        ),
        F(r, 0.36, 0.05, 0.14, 0.01, l, 0, 0.85, -0.38, -0.2, 0, 0));
    }
    for (let e of [-1, 1])
      (Z(r, 0.24, 0.24, 0.018, l, X(e * 0.188, t, u), X(-e, 0, 0), 28),
        I(
          r,
          new d(0.235, 0.012, 6, 32),
          l,
          e * 0.18000000000000002,
          t,
          u,
          0,
          Math.PI / 2,
        ));
    (Z(r, f, f, g, l, X(-0.34 / 2, t, u), X(1, 0, 0), 20),
      Z(
        r,
        0.012,
        0.012,
        0.48000000000000004,
        Or(),
        X(-0.34 / 2 - 0.07, t, u),
        X(1, 0, 0),
        8,
      ));
    let v = f + o;
    for (let e = 0; e < _; e++)
      ((h = Ei(
        r,
        0,
        t,
        u,
        v,
        g,
        o,
        s,
        e % 2 ? -1 : 1,
        e === _ - 1 ? n.range(0.4, 0.9) : 1,
      )),
        (v += 2 * o * 0.92));
    (N(
      r,
      [-0.34 / 2 - 0.05, t, u],
      [-0.34 / 2 - 0.05, t + 0.13, u + 0.02],
      0.009,
      c,
    ),
      Z(
        r,
        0.014,
        0.014,
        0.09,
        H(1710618, 0.7),
        X(-0.34 / 2 - 0.05, t + 0.13, u + 0.02),
        X(-1, 0, 0),
        10,
      ),
      Z(r, 0.015, 0.015, 0.06, Dr(), X(0.2, t, u), X(1, 0, 0), 10),
      (p = X(0.26, t, u)),
      (m = X(1, 0, 0)));
    let y = h.clone(),
      b =
        n.chance(0.6) && !i
          ? [
              y,
              X(y.x, y.y + 0.02, u + 0.2),
              X(y.x + 0.05, t * 0.5, u + 0.32),
              X(y.x + 0.1, Mr + o, u + 0.55),
              X(y.x - 0.3, Mr + o, u + 1),
              X(y.x - 0.55, Mr + o, u + n.range(1.3, 1.8)),
            ]
          : [
              y,
              X(y.x, y.y + 0.02, u + 0.18),
              X(y.x * 0.5, t * 0.7, u + 0.28),
              X(0.05, t * 0.35, u + 0.3),
            ],
      x = ni(ei(r, b, o, s));
    (ti(r, x.p1, x.d1, o, !0),
      ri(
        r,
        n,
        x.p1.clone().addScaledVector(x.d1, 0.01),
        x.d1,
        b.length > 4 ? 1.45 : 0.3,
      ));
  } else {
    let e = H(1973788, 0.55, 0.5);
    (N(r, [0, -0.02, 0], [0, 1.02, 0], 0.013, e),
      N(r, [-0.1, 0.12, 0], [0.1, 0.12, 0], 0.01, e),
      L(
        r,
        [
          [0, 0.98, 0],
          [0, 1.02, 0.08],
          [0, 1, 0.2],
          [0, 0.97, 0.32],
          [0, 1.03, 0.36],
        ],
        0.014,
        e,
        20,
        8,
      ));
    for (let t of [-1, 1])
      L(
        r,
        [
          [0, 0.8, 0],
          [t * 0.06, 0.86, 0.02],
          [t * 0.05, 0.94, 0.02],
          [0, 0.95, 0.01],
        ],
        0.007,
        e,
        12,
        5,
      );
    let t = n.int(5, 8),
      i = n.range(0.2, 0.26),
      a = [];
    for (let e = 0; e <= t * 14; e++) {
      let n = (e / 14) * Er,
        r = e / (t * 14),
        s = i * (1 + 0.08 * Math.sin(n * 0.5 + e * 0.07));
      a.push(
        X(
          s * Math.sin(n),
          1 - o - i + s * Math.cos(n) - 0.02 * Math.sin(n * 0.3),
          0.06 + r * t * 2.2 * o,
        ),
      );
    }
    (ei(r, a, o, s, 22, 6), (p = a[0]), (m = X(-1, -1, 0)));
    let c = a[a.length - 1],
      l = ni(
        ei(
          r,
          [
            c,
            X(c.x + 0.05, c.y - 0.2, c.z + 0.03),
            X(c.x + 0.08, 0.2, c.z + 0.06),
            X(c.x + 0.05, 0.04, c.z + 0.08),
          ],
          o,
          s,
        ),
      );
    (ti(r, l.p1, l.d1, o, !0),
      ri(r, n, l.p1.clone().addScaledVector(l.d1, 0.01), l.d1, 0.2));
  }
  let g = p.clone().addScaledVector(m.normalize(), 0.12),
    _ = X((p.x + f.x) / 2, Mr + o, (p.z + f.z) / 2 + n.range(0.05, 0.35)),
    v = ni(
      ei(
        r,
        [
          p,
          g,
          X(g.x + 0.1, Math.max(Mr + o, g.y * 0.3), g.z + 0.05),
          _,
          X(f.x - 0.25, Mr + o, f.z + 0.08),
          f,
          u.out,
        ],
        o,
        a === `hanger` ? s : H(n.pick([1710618, 3112242]), 0.5),
      ),
    );
  return (
    ti(r, v.p1, v.d1, o),
    ti(r, v.p0, v.d0, o),
    i && K(r, { w: 3, d: 2 }, { count: 50, seed: e + 2, clump: 0.3 }),
    R(r, { keepGrass: !0, sunk: !0 })
  );
}
function Oi(e, t, n, r, i = 0.6) {
  let a = -n / 2,
    o = e.range(-0.2, 0.2) * r,
    s = e.range(-0.4, 0.4),
    c = 0,
    l = 0,
    u = 0,
    d = 1,
    f = e.chance(i) ? e.range(0.3, 0.65) * t : -1,
    p = [[a, o]];
  for (; l < t;) {
    let t = 0.3;
    if (u > 0) ((s += (Er / (2.4 / t)) * d), (u -= t));
    else {
      ((c = (c + e.range(-0.25, 0.25)) * 0.8), (s += c * 0.5));
      let t = a + Math.cos(s) * 1.4,
        i = o + Math.sin(s) * 1.4;
      if (Math.abs(t) > n / 2 || Math.abs(i) > r / 2) {
        let e = Math.atan2(-o, -a);
        s += Math.atan2(Math.sin(e - s), Math.cos(e - s)) * 0.3;
      }
      f >= 0 && l >= f && ((u = 2.4), (d = e.chance(0.5) ? 1 : -1), (f = -1));
    }
    ((a += Math.cos(s) * t), (o += Math.sin(s) * t), (l += t), p.push([a, o]));
  }
  let m =
      (Math.min(...p.map((e) => e[0])) + Math.max(...p.map((e) => e[0]))) / 2,
    h = (Math.min(...p.map((e) => e[1])) + Math.max(...p.map((e) => e[1]))) / 2;
  return p.map(([e, t]) => [e - m, t - h]);
}
function ki(t, n, r = 0.05) {
  let i = new e(
      t.map(([e, t]) => X(e, 0, t)),
      !1,
      `centripetal`,
    ),
    a = Math.round(i.getLength() / r),
    o = i.getSpacedPoints(a),
    s = new Float32Array(o.length);
  for (let e = 0; e < o.length; e++)
    for (let t = 0; t < e - 24; t++)
      if (Math.hypot(o[e].x - o[t].x, o[e].z - o[t].z) < 2.1 * n) {
        s[e] = 1.9 * n;
        break;
      }
  return o.map((e, t) => {
    let r = 0;
    for (let e = Math.max(0, t - 7); e < Math.min(o.length, t + 8); e++)
      r = Math.max(r, s[e] * (1 - Math.abs(t - e) / 8));
    return X(e.x, Mr + n * 0.9 + r, e.z);
  });
}
function Ai(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = t.season === `fall`,
    a = n.pick([0.008, 0.0085, 0.0095]),
    o = H(n.pick(kr), 0.5),
    s = ki(Oi(n, n.range(9, 14), n.range(4.5, 6.5), n.range(2.6, 4)), a),
    c = s;
  if (n.chance(0.45)) {
    let e = Math.round(s.length * n.range(0.35, 0.6)),
      t = s.slice(0, e),
      i = ei(r, s.slice(e + 1), a, H(n.pick(kr), 0.5)),
      o = ni(i);
    (ti(r, o.p0, o.d0, a, !0), (c = t));
    let l = ni(i);
    ri(
      r,
      n,
      l.p1.clone().addScaledVector(l.d1, 0.01),
      l.d1,
      n.chance(0.5) ? 1.45 : -1.45,
    ).position.y = 0.034;
  }
  if (n.chance(0.5)) {
    let e = c[0],
      t = c[0].clone().sub(c[3]).setY(0).normalize(),
      i = oi(r, n, e.x + t.x * 0.55, e.z + t.z * 0.55, Math.atan2(-t.x, -t.z));
    c = [
      i.out,
      i.out.clone().addScaledVector(i.dir, 0.12),
      X(e.x + t.x * 0.3, Mr + a, e.z + t.z * 0.3),
      ...c,
    ];
  }
  let l = ni(ei(r, c, a, o));
  return (
    ti(r, l.p0, l.d0, a),
    c === s
      ? (ri(
          r,
          n,
          l.p1.clone().addScaledVector(l.d1, 0.01),
          l.d1,
          n.chance(0.5) ? 1.45 : -1.45,
        ).position.y = 0.034)
      : ti(r, l.p1, l.d1, a),
    i && K(r, { w: 6, d: 4 }, { count: 60, seed: e + 2 }),
    R(r, { keepGrass: !0 })
  );
}
