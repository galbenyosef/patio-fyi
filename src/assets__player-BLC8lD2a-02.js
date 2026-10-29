// assets__player-BLC8lD2a 02 — push
// Lines 280-988 of readable/assets__player-BLC8lD2a.pretty.js (statement-aligned).
function Se(t, a) {
  let s = [],
    c = [],
    u = 0,
    h = (e) => (c.push(e), t.map.addCollider(e), e),
    b = a ?? { range: (e, t) => (e + t) / 2, next: () => 0.5 },
    x = (
      e,
      t,
      n,
      i,
      a,
      o,
      c,
      {
        solid: l = !0,
        ao: d = !0,
        surface: f = `concrete`,
        aoStrength: p = 0.25,
      } = {},
    ) => {
      let m = new r(i, a, o).toNonIndexed();
      return (
        m.translate(e, t + a / 2, n),
        R(m, c, d ? { aoBase: t, aoStrength: p } : {}),
        s.push(m),
        l &&
          h(
            z(
              `course_${u++}`,
              [e - i / 2, t, n - o / 2, e + i / 2, t + a, n + o / 2],
              f,
            ),
          ),
        m
      );
    },
    w = (e, t, n, i, a, o, c = -1) => {
      let l = i / o;
      for (let u = 0; u < o; u++) {
        let o = new r(l, a, 0.02).toNonIndexed();
        (o.translate(e - i / 2 + l * (u + 0.5), t + a / 2, n + c * 0.011),
          R(o, u % 2 ? I.charcoal : I.amber),
          s.push(o));
      }
    },
    T = (e, t, n, r, i, a) => {
      let o = new y(i, i * 1.1, r, 6).toNonIndexed();
      (o.translate(e, t + r / 2, n),
        R(o, a, { aoBase: t, aoHeight: 0.4 }),
        s.push(o));
    },
    E = (e, t, n, r, i = 1) => {
      let a = new l(),
        c = new Float32Array([
          e,
          t,
          n,
          e + 0.9 * i,
          t - 0.18,
          n,
          e,
          t - 0.36,
          n,
          e,
          t,
          n,
          e,
          t - 0.36,
          n,
          e + 0.9 * i,
          t - 0.18,
          n,
        ]);
      (a.setAttribute(`position`, new o(c, 3)),
        a.computeVertexNormals(),
        R(a, r),
        s.push(a));
    },
    D = 0;
  (x(0, 0, 1, 6, 0.06, 3.2, I.concreteDark, { ao: !1 }),
    x(0, 0.06, 1, 5.4, 0.02, 0.5, I.finish, { solid: !1, ao: !1 }),
    T(-2.8, 0, 1, 3.2, 0.09, I.post),
    T(2.8, 0, 1, 3.2, 0.09, I.post),
    x(0, 3.1, 1, 6, 0.22, 0.22, I.amber, { solid: !1, ao: !1 }));
  for (let e = 0; e < 6; e++)
    x(-2.5 + e * 1, 3.1, 1, 0.5, 0.222, 0.222, I.charcoal, {
      solid: !1,
      ao: !1,
    });
  (E(-2.8, 3.05, 1, I.flagA, 1), E(2.8, 3.05, 1, I.flagB, -1), (D = -4));
  {
    let e = 0.3,
      t = 0.2,
      n = [[D, 0]];
    for (let r = 0; r < 10; r++)
      (n.push([D - r * e, (r + 1) * t]),
        n.push([D - (r + 1) * e, (r + 1) * t]));
    n.push([D - 10 * e, 0]);
    let r = B(n, 4, 0);
    (R(r, I.concrete, { aoBase: 0, aoHeight: 0.8, aoStrength: 0.2 }),
      s.push(r),
      h(ye(`course_${u++}`, -2, 2, D, 10, e, t, 0, 0)));
    let i = D - 10 * e;
    (x(0, 0, i - 2, 4, 1.94, 4, I.concrete),
      x(0, 1.94, i - 2, 4, 0.06, 4, I.concreteLight, { ao: !1 }));
    for (let e of [-1.95, 1.95])
      (T(e, 2, i - 0.3, 1, 0.04, I.steelDark),
        T(e, 2, i - 3.7, 1, 0.04, I.steelDark),
        x(e, 2.95, i - 2, 0.06, 0.06, 3.5, I.steel, { solid: !1, ao: !1 }));
    let a = i - 4,
      o = [
        [a + 0.02, 0],
        [a + 0.02, 2],
      ];
    for (let n = 0; n < 10; n++)
      (o.push([a - n * e, 2 - n * t]), o.push([a - n * e, 2 - (n + 1) * t]));
    o.push([a - 10 * e, 0]);
    let c = B(o, 4, 0);
    (R(c, I.concrete, { aoBase: 0, aoHeight: 0.8, aoStrength: 0.2 }),
      s.push(c));
    let l = a - 10 * e,
      d = [-2, 0, l, 2, 2, a];
    (h({
      id: `course_${u++}`,
      mask: `static`,
      aabb: d,
      solid: !0,
      surface: `concrete`,
      floorHeight: (n, r) => {
        let i = Math.floor((a - r) / e) + 1;
        return 2 - t * Math.min(10, Math.max(1, i));
      },
      floorNormal: (e, t, n = [0, 1, 0]) => (
        (n[0] = 0),
        (n[1] = 1),
        (n[2] = 0),
        n
      ),
      raycast: (e, t, n) => _e(e, t, d, n, `concrete`),
    }),
      (D = l - 3));
  }
  {
    let e = 1.5,
      t = 0,
      n = [20, 35, 50],
      r = [I.wood, I.steel, I.concrete],
      i = [[D, 0]],
      a = [];
    for (let o = 0; o < n.length; o++) {
      let s = e / Math.tan((n[o] * Math.PI) / 180),
        c = D,
        l = D - s;
      (h(
        ve(
          `course_${u++}`,
          -2,
          2,
          c,
          l,
          t,
          t + e,
          0,
          o === 0 ? `wood` : o === 1 ? `metal` : `concrete`,
        ),
      ),
        a.push({ z0: c, z1: l, y0: t, y1: t + e, hex: r[o] }),
        (t += e),
        i.push([c, t - e]),
        i.push([l, t]),
        (D = l - 2),
        i.push([D, t]),
        x(0, 0, l - 1, 4, t, 2, I.concreteDark, { ao: !1 }),
        o < n.length - 1 &&
          x(0, t, l - 1, 4.2, 0.08, 2.05, I.concreteLight, {
            solid: !1,
            ao: !1,
          }));
    }
    let o = D + 2,
      c = D - 1;
    (x(0, 0, (o + c) / 2, 4, t, o - c, I.concreteDark, { ao: !1 }),
      x(0, t, (o + c) / 2, 4.2, 0.08, o - c + 0.05, I.concreteLight, {
        solid: !1,
        ao: !1,
      }));
    for (let e of [-1.95, 1.95])
      (T(e, t, o - 0.2, 1, 0.04, I.steelDark),
        T(e, t, c + 0.2, 1, 0.04, I.steelDark),
        x(e, t + 0.95, (o + c) / 2, 0.06, 0.06, o - c - 0.3, I.steel, {
          solid: !1,
          ao: !1,
        }));
    for (let e of a) {
      let t = B(
        [
          [e.z0, e.y0 - 0.001],
          [e.z0, e.y0],
          [e.z1, e.y1],
          [e.z1, 0],
          [e.z0, 0],
        ],
        4,
        0,
      );
      (R(t, e.hex, { aoBase: 0, aoHeight: 1, aoStrength: 0.2 }), s.push(t));
      for (let t of [-1.92, 1.92]) {
        let n = B(
          [
            [e.z0, e.y0],
            [e.z0, e.y0 + 0.12],
            [e.z1, e.y1 + 0.12],
            [e.z1, e.y1],
          ],
          0.16,
          t,
        );
        (R(n, I.amber), s.push(n));
      }
    }
    let l = t / Math.tan((60 * Math.PI) / 180),
      d = c,
      f = c - l;
    h(ve(`course_${u++}`, -2, 2, f, d, 0, t, 0, `metal`));
    let p = B(
      [
        [d, t],
        [f, 0.001],
        [f, 0],
        [d, 0],
      ],
      4,
      0,
    );
    (R(p, I.steel, { aoBase: 0, aoHeight: 1, aoStrength: 0.2 }), s.push(p));
    for (let e of [-1.92, 1.92]) {
      let n = B(
        [
          [d, t],
          [d, t + 0.3],
          [f, 0.3],
          [f, 0],
        ],
        0.16,
        e,
      );
      (R(n, I.steelDark), s.push(n));
    }
    D = f - 4;
  }
  {
    let e = [0.5, 1, 1.5, 1, 0.5],
      t = 1.8;
    for (let n = 0; n < e.length; n++) {
      let r = e[n];
      x(0, 0, D - t / 2, 4, r, t, n % 2 ? I.concreteLight : I.concrete);
      let i = n === 0 ? 0 : e[n - 1];
      (r > i && w(0, i, D, 4, r - i, 8, 1), (D -= t));
    }
    (w(0, 0, D, 4, 0.5, 8, -1), (D -= 3));
  }
  {
    let e = (e, t, n, r, i = I.crate) => {
      x(e, t, n, r, r, r, i, { surface: `wood` });
      let a = r * 0.08;
      for (let [i, o] of [
        [-1, -1],
        [1, -1],
        [-1, 1],
        [1, 1],
      ])
        x(
          e + i * (r / 2 - a / 2),
          t,
          n + o * (r / 2 - a / 2),
          a + 0.02,
          r + 0.01,
          a + 0.02,
          I.crateDark,
          { solid: !1, ao: !1 },
        );
      x(e, t + r * 0.46, n, r + 0.02, r * 0.08, r + 0.02, I.crateDark, {
        solid: !1,
        ao: !1,
      });
    };
    (e(0.82, 0, D - 1.6, 1),
      e(-0.96, 0, D - 4.8, 1),
      e(0.96, 0, D - 8, 1),
      e(-0.96, 0, D - 11.2, 1, I.crateTan),
      e(-2.6, 0, D - 1, 1.2),
      e(-2.6, 1.2, D - 1, 1.2, I.crateTan),
      e(2.7, 0, D - 3.4, 1.2),
      e(2.7, 0, D - 4.6, 1.2),
      e(2.7, 1.2, D - 4, 1.2, I.crateTan),
      e(-2.6, 0, D - 6.6, 0.7, I.crateTan),
      e(-2.6, 0, D - 7.4, 0.7),
      e(2.5, 0, D - 8.6, 1.2),
      e(2.5, 1.2, D - 8.6, 0.7, I.crateTan),
      e(-2.7, 0, D - 10.6, 1.2),
      e(2.6, 0, D - 12.1, 1, I.crateTan),
      (D -= 13));
  }
  {
    let e = 1.45,
      t = 0.75,
      n = D,
      r = D - 4,
      i = r - 4,
      a = 2.3,
      o = (e, t, n, r = 0.9) => {
        let i = e.attributes.position,
          a = e.attributes.color;
        for (let e = 0; e < i.count; e++) {
          let o = i.getY(e);
          if (Math.abs(i.getX(e)) > n + 0.001 || o > t + 0.001) continue;
          let s = 1 + (o / t) * r;
          a.setXYZ(
            e,
            Math.min(1, a.getX(e) * s),
            Math.min(1, a.getY(e) * s),
            Math.min(1, a.getZ(e) * s),
          );
        }
        a.needsUpdate = !0;
      },
      c = xe(
        [
          [-2.3, 0],
          [-2.3, 1.75],
          [a, 1.75],
          [a, 0],
          [2, 0],
          [2, e],
          [-2, e],
          [-2, 0],
        ],
        4,
        n,
      );
    (R(c, I.concreteLight, { aoBase: 0, aoHeight: 0.6, aoStrength: 0.12 }),
      o(c, e, 2),
      s.push(c),
      h(z(`course_${u++}`, [-2.3, 0, r, -2, 1.75, n])),
      h(z(`course_${u++}`, [2, 0, r, a, 1.75, n])),
      h(z(`course_${u++}`, [-2.3, e, r, a, 1.75, n])));
    let l = xe(
      [
        [-2.3, 0],
        [-2.3, 1.05],
        [a, 1.05],
        [a, 0],
        [2, 0],
        [2, t],
        [-2, t],
        [-2, 0],
      ],
      4,
      r,
    );
    (R(l, I.concreteLight, { aoBase: 0, aoHeight: 0.4, aoStrength: 0.1 }),
      o(l, t, 2),
      s.push(l),
      h(z(`course_${u++}`, [-2.3, 0, i, -2, 1.05, r])),
      h(z(`course_${u++}`, [2, 0, i, a, 1.05, r])),
      h(z(`course_${u++}`, [-2.3, t, i, a, 1.05, r])),
      x(0, t, r + 0.15, 2 * a, 1, 0.3, I.concreteDark),
      w(0, t, r + 0.3, 4, 0.25, 10, 1),
      w(0, 1.47, n, 4, 0.26, 10, 1),
      (D = i - 3));
  }
  {
    let e = D - 1,
      t = (e, t, n, i, a, o) => {
        let c = new r(i, 0.24, a).toNonIndexed();
        (c.translate(e, t + 0.12, n), R(c, o), s.push(c));
      },
      n = (n, r) => {
        let i = 0.62;
        for (let a = 0; a < 9; a++) {
          let o = a * 0.23,
            s = a % 2 ? i / 2 : 0;
          for (let c = n + s; c < r - 0.2; c += i) {
            let n = Math.min(0.59, r - c),
              i = b.range(0.9, 1.05);
            (L.set(I.sandbag).multiplyScalar(i),
              t(c + n / 2, o, e + (a % 2 ? 0.02 : -0.02), n, 0.42, L.getHex()));
          }
        }
        h(
          z(
            `course_${u++}`,
            [n, 0, e - 0.22, r, 9 * 0.23, e + 0.22],
            `sandbag`,
          ),
        );
      };
    (n(-3.6, -0.65), n(0.65, 3.6));
    for (let t of [-2.4, -1.4, 2]) {
      let n = e - 5;
      (T(t, 0, n, 1.1, 0.05, I.post),
        x(t, 1.1, n, 0.5, 0.7, 0.12, I.target, { solid: !1 }),
        x(t, 1.85, n, 0.24, 0.26, 0.14, I.target, { solid: !1, ao: !1 }));
      let r = new y(0.16, 0.16, 0.02, 12).toNonIndexed();
      (r.rotateX(Math.PI / 2),
        r.translate(t, 1.45, n + 0.07),
        R(r, I.targetRing),
        s.push(r),
        h(
          z(
            `course_${u++}`,
            [t - 0.25, 0, n - 0.07, t + 0.25, 2, n + 0.07],
            `wood`,
          ),
        ));
    }
    D = e - 8;
  }
  let O = { x0: -3, x1: 3, z0: D, z1: D - 9, floor: -1.7, water: -0.09 };
  {
    let { x0: e, x1: t, z0: i, z1: a, floor: o } = O,
      c = 0.3;
    (h(be(`course_${u++}`, [e, o, a, t, 0, i], o)),
      h(z(`course_${u++}`, [e - c, o, a - c, e, 0, i + c], `tile`)),
      h(z(`course_${u++}`, [t, o, a - c, t + c, 0, i + c], `tile`)),
      h(z(`course_${u++}`, [e, o, i, t, 0, i + c], `tile`)),
      h(z(`course_${u++}`, [e, o, a - c, t, 0, a], `tile`)));
    let l = new r(t - e + 2 * c, 0.1, i - a + 2 * c).toNonIndexed();
    (l.translate(0, o - 0.05, (i + a) / 2), R(l, I.poolFloor), s.push(l));
    let d = (e, t, n, i) => {
      let a = -o - 0.03,
        c = new r(n, a, i).toNonIndexed();
      (c.translate(e, o + a / 2, t),
        R(c, I.tile, { aoBase: o, aoHeight: 1.7, aoStrength: 0.3 }),
        s.push(c));
    };
    (d(e - c / 2, (i + a) / 2, c, i - a + 2 * c),
      d(t + c / 2, (i + a) / 2, c, i - a + 2 * c),
      d(0, i + c / 2, t - e, c),
      d(0, a - c / 2, t - e, c),
      x(0, 0, i + 0.25, t - e + 1, 0.12, 0.5, I.tileDark),
      x(e - 0.25, 0, (i + a) / 2, 0.5, 0.12, i - a + 1, I.tileDark),
      x(t + 0.25, 0, (i + a) / 2, 0.5, 0.12, i - a + 1, I.tileDark),
      x(0, 0, a - 0.25, t - e + 1, 0.12, 0.5, I.tileDark));
    let f = 0.25,
      p = -o / 8,
      m = a + 8 * f,
      g = [[m, o]];
    for (let e = 0; e < 8; e++)
      (g.push([m - e * f, o + (e + 1) * p]),
        g.push([m - (e + 1) * f, o + (e + 1) * p]));
    g.push([m - 8 * f, o]);
    let _ = B(g, 2.4, 0);
    (R(_, I.tileDark, { aoBase: o, aoHeight: 1, aoStrength: 0.15 }),
      s.push(_),
      h(ye(`course_${u++}`, -1.2, 1.2, m, 8, f, p, o, o, `tile`)));
    let v = (e, t, n, i) => {
      let a = new r(n, 0.16, i).toNonIndexed();
      (a.translate(e, O.water + 0.02, t),
        R(a, I.tileWet, {
          aoBase: O.water - 0.06,
          aoHeight: 0.16,
          aoStrength: 0.3,
        }),
        s.push(a));
    };
    (v(e + 0.015, (i + a) / 2, 0.03, i - a - 0.02),
      v(t - 0.015, (i + a) / 2, 0.03, i - a - 0.02),
      v(0, i - 0.015, t - e - 0.06, 0.03),
      v(0, a + 0.015, t - e - 0.06, 0.03));
    for (let r = 0; r < 8; r++) {
      let a = i - 0.7 - r * 1.1,
        o = new n(0.09, 5, 4).toNonIndexed();
      (o.translate(e + 0.35, O.water + 0.02, a),
        R(o, r % 2 ? I.amber : I.finish),
        s.push(o));
      let c = o.clone();
      (c.translate(t - e - 0.7, 0, 0), s.push(c));
    }
    D = a - 3;
  }
  {
    let e = D - 1;
    x(0, 0, e, 6, 0.06, 3.2, I.concreteDark, { ao: !1 });
    for (let t = 0; t < 12; t++)
      for (let n = 0; n < 2; n++)
        x(
          -2.45 + t * 0.45,
          0.06,
          e + 0.5 - n * 0.45,
          0.42,
          0.02,
          0.42,
          (t + n) % 2 ? I.finish : I.charcoal,
          { solid: !1, ao: !1 },
        );
    (T(-2.8, 0, e, 3.2, 0.09, I.post),
      T(2.8, 0, e, 3.2, 0.09, I.post),
      x(0, 3.1, e, 6, 0.22, 0.22, I.charcoal, { solid: !1, ao: !1 }));
    for (let t = 0; t < 6; t++)
      x(-2.5 + t * 1, 3.1, e, 0.5, 0.222, 0.222, I.finish, {
        solid: !1,
        ao: !1,
      });
    (E(-2.8, 3.05, e, I.flagB, 1), E(2.8, 3.05, e, I.flagA, -1), (D = e - 3));
  }
  {
    let e = 0.04,
      t = 3.2,
      n = D,
      r = (t, n, r = -4, i = 4) => {
        t - n < 0.05 ||
          x((r + i) / 2, 0, (t + n) / 2, i - r, e, t - n, I.asphalt, {
            ao: !1,
            surface: `road`,
          });
      };
    (r(t, O.z0 + 0.5),
      r(O.z1 - 0.5, n),
      r(O.z0 + 0.5, O.z1 - 0.5, -4, O.x0 - 0.5),
      r(O.z0 + 0.5, O.z1 - 0.5, O.x1 + 0.5, 4));
    for (let r of [-3.8, 3.8])
      (x(r, e, (t + O.z0 + 0.5) / 2, 0.12, 0.012, t - O.z0 - 0.5, I.finish, {
        solid: !1,
        ao: !1,
      }),
        x(r, e, (O.z1 - 0.5 + n) / 2, 0.12, 0.012, O.z1 - 0.5 - n, I.finish, {
          solid: !1,
          ao: !1,
        }));
    for (let [t, r] of [
      [2, -3.5],
      [O.z1 - 1, n + 3.5],
    ])
      for (let n = t; n - 1 > r; n -= 2)
        x(0, e, n - 0.5, 0.12, 0.012, 1, I.amber, { solid: !1, ao: !1 });
  }
  {
    let e = (e, t, n) => {
      let i = xe(
        [
          [-0.32, 0],
          [-0.32, 0.12],
          [-0.2, 0.32],
          [-0.12, 0.85],
          [0.12, 0.85],
          [0.2, 0.32],
          [0.32, 0.12],
          [0.32, 0],
        ],
        n,
        t + n / 2,
      );
      (i.translate(e, 0, 0),
        R(i, I.concreteLight, { aoBase: 0, aoHeight: 0.5, aoStrength: 0.25 }),
        s.push(i));
      let a = new r(0.235, 0.08, n * 0.92).toNonIndexed();
      (a.translate(e, 0.87, t),
        R(a, I.amber),
        s.push(a),
        h(
          z(
            `course_${u++}`,
            [e - 0.32, 0, t - n / 2, e + 0.32, 0.85, t + n / 2],
            `concrete`,
          ),
        ));
    };
    for (let t = -6; t > D + 4; t -= 14)
      (e(-5.2, t - b.range(0, 2.5), 3), e(5.2, t - 7 - b.range(0, 2.5), 3));
    let t = [
        [0.004, 0.04],
        [0.2, 0.04],
        [0.2, 0.07],
        [0.168, 0.17],
        [0.15, 0.23],
        [0.15, 0.33],
        [0.132, 0.4],
        [0.052, 0.56],
        [0.045, 0.6],
        [0.004, 0.612],
      ],
      n = (e, n, i = 0) => {
        let a = t.map(([e, t]) => new p(e, t)),
          c = new f(a, 8, i).toNonIndexed();
        c.translate(e, 0, n);
        let l = c.attributes.position,
          d = l.count,
          m = new Float32Array(d * 3);
        for (let e = 0; e < d; e++) {
          let t = l.getY(e),
            n = t > 0.225 && t < 0.335;
          L.set(n ? I.finish : I.cone);
          let r = 1 - 0.28 * Math.max(0, 1 - (t - 0.04) / 0.28);
          ((m[e * 3] = L.r * r),
            (m[e * 3 + 1] = L.g * r),
            (m[e * 3 + 2] = L.b * r));
        }
        (c.setAttribute(`color`, new o(m, 3)), s.push(c));
        let g = new r(0.42, 0.045, 0.42).toNonIndexed();
        (g.translate(e, 0.0225, n),
          R(g, I.charcoal),
          s.push(g),
          h(
            z(
              `course_${u++}`,
              [e - 0.16, 0, n - 0.16, e + 0.16, 0.6, n + 0.16],
              `plastic`,
            ),
          ));
      };
    (n(-3.4, 2.6, 0.2),
      n(3.4, 2.6, 0.7),
      n(-3.4, -1.2, 1.1),
      n(3.4, -1.2, 0.4),
      n(-3.5, D + 5.5, 0.9),
      n(3.5, D + 5.5, 0.15));
    for (let e = 0; e >= D; e -= 10)
      for (let t of [-4.4, 4.4])
        (T(t, 0, e, 0.9, 0.05, I.post),
          x(t, 0.9, e, 0.16, 0.16, 0.16, I.amber, { solid: !1, ao: !1 }));
  }
  for (let e of s)
    (e.attributes.uv && e.deleteAttribute(`uv`),
      e.attributes.normal || e.computeVertexNormals());
  let k = S(s, !1);
  for (let e of s) e.dispose();
  let A = new i({
      vertexColors: !0,
      flatShading: !0,
      roughness: 0.85,
      metalness: 0,
    }),
    j = new e(k, A);
  ((j.castShadow = !0), (j.receiveShadow = !0), (j.name = `playerCourse`));
  let M = new g();
  ((M.name = `playerCourseGroup`), M.add(j));
  let N = new v(O.x1 - O.x0 - 0.04, O.z0 - O.z1 - 0.04, 8, 14);
  (N.rotateX(-Math.PI / 2), N.translate(0, O.water, (O.z0 + O.z1) / 2));
  {
    let e = N.attributes.position,
      t = e.count,
      n = new Float32Array(t * 3),
      r = new m(I.waterShallow),
      i = new m(I.water);
    for (let a = 0; a < t; a++) {
      let t = Math.min(1, Math.max(0, (e.getZ(a) - O.z1) / (O.z0 - O.z1)));
      (L.copy(r).lerp(i, t * t * (3 - 2 * t)),
        (n[a * 3] = L.r),
        (n[a * 3 + 1] = L.g),
        (n[a * 3 + 2] = L.b));
    }
    N.setAttribute(`color`, new o(n, 3));
  }
  let P = new i({
      vertexColors: !0,
      transparent: !0,
      opacity: 0.72,
      roughness: 0.14,
      metalness: 0.1,
      flatShading: !0,
      depthWrite: !1,
      side: 2,
    }),
    F = new e(N, P);
  ((F.name = `playerCourseWater`),
    (F.renderOrder = 2),
    M.add(F),
    (t.map.waterLevel = O.water),
    (t.map.waterBounds = [O.x0, O.z1, O.x1, O.z0]));
  let ee = [-4, D, 4, 3];
  return {
    group: M,
    mesh: j,
    water: F,
    colliders: c,
    pool: O,
    waterLevel: O.water,
    bounds: ee,
    endZ: D,
    spawn: { pos: [0, 0.06, 1.6], yaw: 0 },
    cutGroundHole(e, t) {
      if (!e || !e.geometry) return;
      let n = t / 2,
        r = new C();
      (r.moveTo(-n, -n),
        r.lineTo(n, -n),
        r.lineTo(n, n),
        r.lineTo(-n, n),
        r.closePath());
      let i = new _();
      (i.moveTo(O.x0, -O.z0),
        i.lineTo(O.x1, -O.z0),
        i.lineTo(O.x1, -O.z1),
        i.lineTo(O.x0, -O.z1),
        i.closePath(),
        r.holes.push(i));
      let a = new d(r);
      (a.rotateX(-Math.PI / 2), a.computeVertexNormals());
      let o = e.geometry;
      ((e.geometry = a), o.dispose());
    },
    dispose() {
      for (let e of c) t.map.removeCollider(e.id);
      (k.dispose(), A.dispose(), N.dispose(), P.dispose(), M.parent?.remove(M));
    },
  };
}
