// assets__yard-dressing-view-CwP6m0Hr 54 — math
// Lines 14978-15324 of readable/assets__yard-dressing-view-CwP6m0Hr.pretty.js (statement-aligned).
function po(e, t, n, r, i, a) {
  let o = a / 2,
    s = q.soil(),
    c,
    l;
  if (i === `terracotta`) {
    c = a * 0.9;
    let i = H(t.pick([12083258, 12611658, 11033144]), 0.9);
    (P(
      e,
      [
        [o * 0.7, 0],
        [o * 0.92, c * 0.82],
        [o, c * 0.83],
        [o, c],
        [o * 0.94, c],
        [o * 0.88, c * 0.85],
      ],
      i,
      n,
      0,
      r,
      24,
    ),
      (l = c * 0.88),
      z(e, o * 0.86, o * 0.86, 0.01, s, n, l - 0.01, r, 20));
  } else if (i === `glazed`) {
    c = a * t.range(0.8, 1.1);
    let i = H(
      t.pick([1981050, 2787978, 15261904, 1710618, 3828298, 9058858, 4868714]),
      0.25,
      0.1,
    );
    (P(
      e,
      [
        [o * 0.55, 0],
        [o * 0.9, c * 0.25],
        [o, c * 0.55],
        [o * 0.85, c * 0.92],
        [o * 0.82, c],
        [o * 0.76, c],
      ],
      i,
      n,
      0,
      r,
      28,
    ),
      (l = c * 0.94),
      z(e, o * 0.76, o * 0.76, 0.01, s, n, l - 0.01, r, 20));
  } else if (i === `square`) {
    c = a * 1.05;
    let i = H(t.pick([3815994, 15263456, 6971992, 2763306]), 0.6);
    M(e, a, c - 0.02, a, 0.02, i, n, 0, r);
    for (let t of [-1, 1])
      (B(e, a + 0.03, 0.03, 0.04, i, n, c - 0.03, r + t * (a / 2 - 0.005)),
        B(e, 0.04, 0.03, a + 0.03, i, n + t * (a / 2 - 0.005), c - 0.03, r));
    ((l = c - 0.02), B(e, a - 0.04, 0.012, a - 0.04, s, n, l - 0.008, r));
  } else {
    c = a * 0.62;
    let t = G(W.brown, 0.85, 17);
    P(
      e,
      [
        [o * 0.9, 0],
        [o, c * 0.5],
        [o * 0.95, c],
        [o * 0.9, c],
      ],
      t,
      n,
      0,
      r,
      24,
    );
    for (let t of [0.15, 0.8])
      ia(
        e,
        o * (0.94 + 0.04 * Math.sin(t * Q)),
        0.01,
        H(2763306, 0.5, 0.6),
        n,
        c * t,
        r,
        Q / 2,
        0,
        0,
        28,
        4,
      );
    ((l = c * 0.95), z(e, o * 0.88, o * 0.88, 0.01, s, n, l - 0.01, r, 20));
  }
  return { h: l, R: i === `square` ? o * 0.9 : o * 0.85 };
}
function mo(e, t) {
  let n = U(e),
    r = new C(),
    i = Yi(t),
    a = n.int(3, 7),
    o = ca(Zi),
    c = ca(Xi),
    l = [];
  for (let e = 0; e < a && l.length < a; e++) {
    let e = n.pick([
        `terracotta`,
        `terracotta`,
        `glazed`,
        `glazed`,
        `square`,
        `barrel`,
      ]),
      t = e === `barrel` ? n.range(0.55, 0.7) : n.range(0.22, 0.5),
      a = 0,
      u = 0,
      d = !1;
    for (let e = 0; e < 40 && !d; e++)
      ((a = n.range(-0.9, 0.9)),
        (u = n.range(-0.6, 0.6) - t * 0.3),
        (d = l.every(
          (e) => Math.hypot(e.x - a, e.z - u) > (e.D + t) / 2 + 0.04,
        )));
    if (!d) continue;
    l.push({ x: a, z: u, D: t });
    let { h: f, R: p } = po(r, n, a, u, e, t),
      m = i
        ? n.pick([`mum`, `mum`, `kale`, `grass`, `box`])
        : n.pick([`flowers`, `flowers`, `herb`, `grass`, `box`, `spike`]);
    if (m === `flowers` || m === `mum`) {
      let e =
          m === `mum`
            ? [
                n.pick([
                  15237146, 15777824, 9050666, 15789280, 13127722, 10107530,
                ]),
              ]
            : [n.pick(De), n.pick(De)],
        i = m === `mum` ? p * 1.25 : p * 1.1;
      for (let e = 0; e < (m === `mum` ? 34 : 30); e++) {
        let e = n() * $,
          t = Math.sqrt(n()) * i * 0.85;
        o.add(
          a + Math.cos(e) * t,
          f + i * 0.5 * Math.sqrt(1 - (t / i) ** 2),
          u + Math.sin(e) * t,
          i * 0.2,
          n.pick(to),
        );
      }
      for (let t = 0; t < (m === `mum` ? 110 : 45); t++) {
        let t = n() * $,
          r = n(),
          o = Math.sqrt(r) * i;
        c.add(
          a + Math.cos(t) * o,
          f + i * 0.62 * Math.sqrt(Math.max(0, 1 - r)) + 0.02,
          u + Math.sin(t) * o,
          m === `mum` ? 0.022 : 0.025,
          n.pick(e),
        );
      }
      if (m === `flowers` && t > 0.3)
        for (let t = 0; t < 6; t++) {
          let t = n() * $;
          (L(
            r,
            [
              [a + Math.cos(t) * p * 0.8, f, u + Math.sin(t) * p * 0.8],
              [a + Math.cos(t) * p * 1.1, f - 0.08, u + Math.sin(t) * p * 1.1],
              [a + Math.cos(t) * p * 1.2, f - 0.25, u + Math.sin(t) * p * 1.2],
            ],
            0.006,
            H(4880944, 0.8),
            6,
            3,
          ),
            c.add(
              a + Math.cos(t) * p * 1.2,
              f - 0.25,
              u + Math.sin(t) * p * 1.2,
              0.03,
              n.pick(e),
            ));
        }
    } else if (m === `kale`) {
      let e = n.pick([
        [9054826, 4876906],
        [15261928, 5929578],
      ]);
      for (let t = 0; t < 18; t++) {
        let n = (t / 6) * $ + t * 0.3,
          r = (1 - Math.floor(t / 6) / 3) * p * 0.9;
        o.add(
          a + Math.cos(n) * r,
          f + 0.05 + Math.floor(t / 6) * 0.04,
          u + Math.sin(n) * r,
          p * 0.35,
          t >= 12 ? e[0] : e[1],
          p * 0.12,
        );
      }
    } else if (m === `grass`) {
      let e = H(
          i
            ? n.pick([12099680, 13150320])
            : n.pick([6986314, 9087066, 5929530, 9062986]),
          0.8,
        ),
        t = n.range(0.5, 0.9);
      for (let i = 0; i < 40; i++) {
        let i = n() * $,
          o = n() * p * 0.5,
          s = n.range(0.1, 0.6);
        N(
          r,
          [a + Math.cos(i) * o, f, u + Math.sin(i) * o],
          [
            a + Math.cos(i) * (o + s * t * 0.5),
            f + t * n.range(0.7, 1),
            u + Math.sin(i) * (o + s * t * 0.5),
          ],
          0.004,
          e,
          3,
        );
      }
      if (i)
        for (let e = 0; e < 8; e++) {
          let e = n() * $;
          c.add(
            a + Math.cos(e) * p * 0.5,
            f + t * 1.05,
            u + Math.sin(e) * p * 0.5,
            0.04,
            14207136,
            0.08,
          );
        }
    } else if (m === `box`) {
      let e = p * n.range(1, 1.3);
      for (let t = 0; t < 70; t++) {
        let t = new s(n() - 0.5, n() - 0.5, n() - 0.5)
          .normalize()
          .multiplyScalar(e * n.range(0.7, 0.95));
        o.add(
          a + t.x,
          f + e * 0.9 + t.y,
          u + t.z,
          e * 0.2,
          n.pick([2771486, 3430948, 3824170]),
        );
      }
    } else if (m === `herb`) {
      if (n.chance(0.5))
        for (let e = 0; e < 26; e++) {
          let e = n() * $,
            t = n() * p * 0.6;
          N(
            r,
            [a + Math.cos(e) * t, f, u + Math.sin(e) * t],
            [
              a + Math.cos(e) * t * 1.4,
              f + n.range(0.2, 0.35),
              u + Math.sin(e) * t * 1.4,
            ],
            0.008,
            H(3824186, 0.9),
            4,
          );
        }
      else
        for (let e = 0; e < 18; e++) {
          let e = n() * $,
            t = Math.sqrt(n()) * p * 0.8;
          o.add(
            a + Math.cos(e) * t,
            f + 0.06 + n() * 0.15,
            u + Math.sin(e) * t,
            0.035,
            n.pick([5941306, 6993984, 4889130]),
          );
        }
    } else {
      let e = H(n.pick([3828266, 6957626, 4880954]), 0.7);
      for (let t = 0; t < 18; t++) {
        let t = n() * $,
          i = n.range(0.1, 0.7),
          o = n.range(0.35, 0.6),
          s = V(
            r,
            0.03,
            o,
            0.004,
            e,
            a + Math.cos(t) * Math.sin(i) * o * 0.5,
            f + Math.cos(i) * o * 0.5,
            u + Math.sin(t) * Math.sin(i) * o * 0.5,
          );
        (s.rotation.set(0, -t, 0), s.rotateZ(-i));
      }
    }
  }
  if ((o.flush(r, H(16777215, 0.8)), c.flush(r, H(16777215, 0.6)), i))
    for (let e = 0; e < n.int(1, 3); e++)
      io(
        r,
        n.range(-1, 1),
        0,
        n.range(0.55, 0.85),
        n.range(0.1, 0.17),
        n.pick([14708762, 14180378, 15261896, 14195242, 3828298]),
      );
  if (!i && n.chance(0.4)) {
    let e = n.range(-0.9, 0.9);
    (P(
      r,
      [
        [0.1, 0],
        [0.12, 0.2],
        [0.08, 0.22],
      ],
      H(n.pick([2783802, 10132122, 14166554]), 0.4, 0.3),
      e,
      0,
      0.75,
      16,
    ),
      N(r, [e, 0.2, 0.75], [e + 0.28, 0.28, 0.75], 0.01, H(2783802, 0.4), 6));
  }
  return (ha(r, i, 2.4, 2, e + 1, 40), R(r, { note: `${l.length} pots` }));
}
function ho(e, t, n, i, a, o, s, c, l = 1) {
  let u = new r(t, n, i),
    d = u.attributes.position,
    f = u.attributes.normal,
    p = u.attributes.uv;
  for (let e = 0; e < d.count; e++) {
    let t = Math.abs(f.getX(e)),
      r = Math.abs(f.getY(e));
    p.setXY(
      e,
      (t > 0.5 ? d.getZ(e) + c : d.getX(e) + o) / l,
      (r > 0.5 ? d.getZ(e) + c : d.getY(e) + s + n / 2) / l,
    );
  }
  return I(e, u, a, o, s + n / 2, c);
}
