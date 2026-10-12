// assets__player-vyh7zp35 02 — push
// Lines 278-986 of readable/assets__player-vyh7zp35.pretty.js (statement-aligned).
function be(t, r) {
  let d = [],
    p = [],
    m = 0,
    h = (e) => (p.push(e), t.map.addCollider(e), e),
    v = r ?? { range: (e, t) => (e + t) / 2, next: () => 0.5 },
    C = (
      e,
      t,
      r,
      i,
      a,
      o,
      s,
      {
        solid: c = !0,
        ao: l = !0,
        surface: u = `concrete`,
        aoStrength: f = 0.25,
      } = {},
    ) => {
      let p = new n(i, a, o).toNonIndexed();
      return (
        p.translate(e, t + a / 2, r),
        R(p, s, l ? { aoBase: t, aoStrength: f } : {}),
        d.push(p),
        c &&
          h(
            z(
              `course_${m++}`,
              [e - i / 2, t, r - o / 2, e + i / 2, t + a, r + o / 2],
              u,
            ),
          ),
        p
      );
    },
    w = (e, t, r, i, a, o, s = -1) => {
      let c = i / o;
      for (let l = 0; l < o; l++) {
        let o = new n(c, a, 0.02).toNonIndexed();
        (o.translate(e - i / 2 + c * (l + 0.5), t + a / 2, r + s * 0.011),
          R(o, l % 2 ? I.charcoal : I.amber),
          d.push(o));
      }
    },
    T = (e, t, n, r, i, o) => {
      let s = new a(i, i * 1.1, r, 6).toNonIndexed();
      (s.translate(e, t + r / 2, n),
        R(s, o, { aoBase: t, aoHeight: 0.4 }),
        d.push(s));
    },
    E = (e, t, n, r, a = 1) => {
      let s = new o(),
        c = new Float32Array([
          e,
          t,
          n,
          e + 0.9 * a,
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
          e + 0.9 * a,
          t - 0.18,
          n,
        ]);
      (s.setAttribute(`position`, new i(c, 3)),
        s.computeVertexNormals(),
        R(s, r),
        d.push(s));
    },
    D = 0;
  (C(0, 0, 1, 6, 0.06, 3.2, I.concreteDark, { ao: !1 }),
    C(0, 0.06, 1, 5.4, 0.02, 0.5, I.finish, { solid: !1, ao: !1 }),
    T(-2.8, 0, 1, 3.2, 0.09, I.post),
    T(2.8, 0, 1, 3.2, 0.09, I.post),
    C(0, 3.1, 1, 6, 0.22, 0.22, I.amber, { solid: !1, ao: !1 }));
  for (let e = 0; e < 6; e++)
    C(-2.5 + e * 1, 3.1, 1, 0.5, 0.222, 0.222, I.charcoal, {
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
      d.push(r),
      h(_e(`course_${m++}`, -2, 2, D, 10, e, t, 0, 0)));
    let i = D - 10 * e;
    (C(0, 0, i - 2, 4, 1.94, 4, I.concrete),
      C(0, 1.94, i - 2, 4, 0.06, 4, I.concreteLight, { ao: !1 }));
    for (let e of [-1.95, 1.95])
      (T(e, 2, i - 0.3, 1, 0.04, I.steelDark),
        T(e, 2, i - 3.7, 1, 0.04, I.steelDark),
        C(e, 2.95, i - 2, 0.06, 0.06, 3.5, I.steel, { solid: !1, ao: !1 }));
    let a = i - 4,
      o = [
        [a + 0.02, 0],
        [a + 0.02, 2],
      ];
    for (let n = 0; n < 10; n++)
      (o.push([a - n * e, 2 - n * t]), o.push([a - n * e, 2 - (n + 1) * t]));
    o.push([a - 10 * e, 0]);
    let s = B(o, 4, 0);
    (R(s, I.concrete, { aoBase: 0, aoHeight: 0.8, aoStrength: 0.2 }),
      d.push(s));
    let c = a - 10 * e,
      l = [-2, 0, c, 2, 2, a];
    (h({
      id: `course_${m++}`,
      mask: `static`,
      aabb: l,
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
      raycast: (e, t, n) => he(e, t, l, n, `concrete`),
    }),
      (D = c - 3));
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
        ge(
          `course_${m++}`,
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
        C(0, 0, l - 1, 4, t, 2, I.concreteDark, { ao: !1 }),
        o < n.length - 1 &&
          C(0, t, l - 1, 4.2, 0.08, 2.05, I.concreteLight, {
            solid: !1,
            ao: !1,
          }));
    }
    let o = D + 2,
      s = D - 1;
    (C(0, 0, (o + s) / 2, 4, t, o - s, I.concreteDark, { ao: !1 }),
      C(0, t, (o + s) / 2, 4.2, 0.08, o - s + 0.05, I.concreteLight, {
        solid: !1,
        ao: !1,
      }));
    for (let e of [-1.95, 1.95])
      (T(e, t, o - 0.2, 1, 0.04, I.steelDark),
        T(e, t, s + 0.2, 1, 0.04, I.steelDark),
        C(e, t + 0.95, (o + s) / 2, 0.06, 0.06, o - s - 0.3, I.steel, {
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
      (R(t, e.hex, { aoBase: 0, aoHeight: 1, aoStrength: 0.2 }), d.push(t));
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
        (R(n, I.amber), d.push(n));
      }
    }
    let c = t / Math.tan((60 * Math.PI) / 180),
      l = s,
      u = s - c;
    h(ge(`course_${m++}`, -2, 2, u, l, 0, t, 0, `metal`));
    let f = B(
      [
        [l, t],
        [u, 0.001],
        [u, 0],
        [l, 0],
      ],
      4,
      0,
    );
    (R(f, I.steel, { aoBase: 0, aoHeight: 1, aoStrength: 0.2 }), d.push(f));
    for (let e of [-1.92, 1.92]) {
      let n = B(
        [
          [l, t],
          [l, t + 0.3],
          [u, 0.3],
          [u, 0],
        ],
        0.16,
        e,
      );
      (R(n, I.steelDark), d.push(n));
    }
    D = u - 4;
  }
  {
    let e = [0.5, 1, 1.5, 1, 0.5],
      t = 1.8;
    for (let n = 0; n < e.length; n++) {
      let r = e[n];
      C(0, 0, D - t / 2, 4, r, t, n % 2 ? I.concreteLight : I.concrete);
      let i = n === 0 ? 0 : e[n - 1];
      (r > i && w(0, i, D, 4, r - i, 8, 1), (D -= t));
    }
    (w(0, 0, D, 4, 0.5, 8, -1), (D -= 3));
  }
  {
    let e = (e, t, n, r, i = I.crate) => {
      C(e, t, n, r, r, r, i, { surface: `wood` });
      let a = r * 0.08;
      for (let [i, o] of [
        [-1, -1],
        [1, -1],
        [-1, 1],
        [1, 1],
      ])
        C(
          e + i * (r / 2 - a / 2),
          t,
          n + o * (r / 2 - a / 2),
          a + 0.02,
          r + 0.01,
          a + 0.02,
          I.crateDark,
          { solid: !1, ao: !1 },
        );
      C(e, t + r * 0.46, n, r + 0.02, r * 0.08, r + 0.02, I.crateDark, {
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
      s = ye(
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
    (R(s, I.concreteLight, { aoBase: 0, aoHeight: 0.6, aoStrength: 0.12 }),
      o(s, e, 2),
      d.push(s),
      h(z(`course_${m++}`, [-2.3, 0, r, -2, 1.75, n])),
      h(z(`course_${m++}`, [2, 0, r, a, 1.75, n])),
      h(z(`course_${m++}`, [-2.3, e, r, a, 1.75, n])));
    let c = ye(
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
    (R(c, I.concreteLight, { aoBase: 0, aoHeight: 0.4, aoStrength: 0.1 }),
      o(c, t, 2),
      d.push(c),
      h(z(`course_${m++}`, [-2.3, 0, i, -2, 1.05, r])),
      h(z(`course_${m++}`, [2, 0, i, a, 1.05, r])),
      h(z(`course_${m++}`, [-2.3, t, i, a, 1.05, r])),
      C(0, t, r + 0.15, 2 * a, 1, 0.3, I.concreteDark),
      w(0, t, r + 0.3, 4, 0.25, 10, 1),
      w(0, 1.47, n, 4, 0.26, 10, 1),
      (D = i - 3));
  }
  {
    let e = D - 1,
      t = (e, t, r, i, a, o) => {
        let s = new n(i, 0.24, a).toNonIndexed();
        (s.translate(e, t + 0.12, r), R(s, o), d.push(s));
      },
      r = (n, r) => {
        let i = 0.62;
        for (let a = 0; a < 9; a++) {
          let o = a * 0.23,
            s = a % 2 ? i / 2 : 0;
          for (let c = n + s; c < r - 0.2; c += i) {
            let n = Math.min(0.59, r - c),
              i = v.range(0.9, 1.05);
            (L.set(I.sandbag).multiplyScalar(i),
              t(c + n / 2, o, e + (a % 2 ? 0.02 : -0.02), n, 0.42, L.getHex()));
          }
        }
        h(
          z(
            `course_${m++}`,
            [n, 0, e - 0.22, r, 9 * 0.23, e + 0.22],
            `sandbag`,
          ),
        );
      };
    (r(-3.6, -0.65), r(0.65, 3.6));
    for (let t of [-2.4, -1.4, 2]) {
      let n = e - 5;
      (T(t, 0, n, 1.1, 0.05, I.post),
        C(t, 1.1, n, 0.5, 0.7, 0.12, I.target, { solid: !1 }),
        C(t, 1.85, n, 0.24, 0.26, 0.14, I.target, { solid: !1, ao: !1 }));
      let r = new a(0.16, 0.16, 0.02, 12).toNonIndexed();
      (r.rotateX(Math.PI / 2),
        r.translate(t, 1.45, n + 0.07),
        R(r, I.targetRing),
        d.push(r),
        h(
          z(
            `course_${m++}`,
            [t - 0.25, 0, n - 0.07, t + 0.25, 2, n + 0.07],
            `wood`,
          ),
        ));
    }
    D = e - 8;
  }
  let O = { x0: -3, x1: 3, z0: D, z1: D - 9, floor: -1.7, water: -0.09 };
  {
    let { x0: e, x1: t, z0: r, z1: i, floor: a } = O,
      o = 0.3;
    (h(ve(`course_${m++}`, [e, a, i, t, 0, r], a)),
      h(z(`course_${m++}`, [e - o, a, i - o, e, 0, r + o], `tile`)),
      h(z(`course_${m++}`, [t, a, i - o, t + o, 0, r + o], `tile`)),
      h(z(`course_${m++}`, [e, a, r, t, 0, r + o], `tile`)),
      h(z(`course_${m++}`, [e, a, i - o, t, 0, i], `tile`)));
    let s = new n(t - e + 2 * o, 0.1, r - i + 2 * o).toNonIndexed();
    (s.translate(0, a - 0.05, (r + i) / 2), R(s, I.poolFloor), d.push(s));
    let c = (e, t, r, i) => {
      let o = -a - 0.03,
        s = new n(r, o, i).toNonIndexed();
      (s.translate(e, a + o / 2, t),
        R(s, I.tile, { aoBase: a, aoHeight: 1.7, aoStrength: 0.3 }),
        d.push(s));
    };
    (c(e - o / 2, (r + i) / 2, o, r - i + 2 * o),
      c(t + o / 2, (r + i) / 2, o, r - i + 2 * o),
      c(0, r + o / 2, t - e, o),
      c(0, i - o / 2, t - e, o),
      C(0, 0, r + 0.25, t - e + 1, 0.12, 0.5, I.tileDark),
      C(e - 0.25, 0, (r + i) / 2, 0.5, 0.12, r - i + 1, I.tileDark),
      C(t + 0.25, 0, (r + i) / 2, 0.5, 0.12, r - i + 1, I.tileDark),
      C(0, 0, i - 0.25, t - e + 1, 0.12, 0.5, I.tileDark));
    let l = 0.25,
      u = -a / 8,
      f = i + 8 * l,
      p = [[f, a]];
    for (let e = 0; e < 8; e++)
      (p.push([f - e * l, a + (e + 1) * u]),
        p.push([f - (e + 1) * l, a + (e + 1) * u]));
    p.push([f - 8 * l, a]);
    let g = B(p, 2.4, 0);
    (R(g, I.tileDark, { aoBase: a, aoHeight: 1, aoStrength: 0.15 }),
      d.push(g),
      h(_e(`course_${m++}`, -1.2, 1.2, f, 8, l, u, a, a, `tile`)));
    let _ = (e, t, r, i) => {
      let a = new n(r, 0.16, i).toNonIndexed();
      (a.translate(e, O.water + 0.02, t),
        R(a, I.tileWet, {
          aoBase: O.water - 0.06,
          aoHeight: 0.16,
          aoStrength: 0.3,
        }),
        d.push(a));
    };
    (_(e + 0.015, (r + i) / 2, 0.03, r - i - 0.02),
      _(t - 0.015, (r + i) / 2, 0.03, r - i - 0.02),
      _(0, r - 0.015, t - e - 0.06, 0.03),
      _(0, i + 0.015, t - e - 0.06, 0.03));
    for (let n = 0; n < 8; n++) {
      let i = r - 0.7 - n * 1.1,
        a = new x(0.09, 5, 4).toNonIndexed();
      (a.translate(e + 0.35, O.water + 0.02, i),
        R(a, n % 2 ? I.amber : I.finish),
        d.push(a));
      let o = a.clone();
      (o.translate(t - e - 0.7, 0, 0), d.push(o));
    }
    D = i - 3;
  }
  {
    let e = D - 1;
    C(0, 0, e, 6, 0.06, 3.2, I.concreteDark, { ao: !1 });
    for (let t = 0; t < 12; t++)
      for (let n = 0; n < 2; n++)
        C(
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
      C(0, 3.1, e, 6, 0.22, 0.22, I.charcoal, { solid: !1, ao: !1 }));
    for (let t = 0; t < 6; t++)
      C(-2.5 + t * 1, 3.1, e, 0.5, 0.222, 0.222, I.finish, {
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
          C((r + i) / 2, 0, (t + n) / 2, i - r, e, t - n, I.asphalt, {
            ao: !1,
            surface: `road`,
          });
      };
    (r(t, O.z0 + 0.5),
      r(O.z1 - 0.5, n),
      r(O.z0 + 0.5, O.z1 - 0.5, -4, O.x0 - 0.5),
      r(O.z0 + 0.5, O.z1 - 0.5, O.x1 + 0.5, 4));
    for (let r of [-3.8, 3.8])
      (C(r, e, (t + O.z0 + 0.5) / 2, 0.12, 0.012, t - O.z0 - 0.5, I.finish, {
        solid: !1,
        ao: !1,
      }),
        C(r, e, (O.z1 - 0.5 + n) / 2, 0.12, 0.012, O.z1 - 0.5 - n, I.finish, {
          solid: !1,
          ao: !1,
        }));
    for (let [t, r] of [
      [2, -3.5],
      [O.z1 - 1, n + 3.5],
    ])
      for (let n = t; n - 1 > r; n -= 2)
        C(0, e, n - 0.5, 0.12, 0.012, 1, I.amber, { solid: !1, ao: !1 });
  }
  {
    let t = (e, t, r) => {
      let i = ye(
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
        r,
        t + r / 2,
      );
      (i.translate(e, 0, 0),
        R(i, I.concreteLight, { aoBase: 0, aoHeight: 0.5, aoStrength: 0.25 }),
        d.push(i));
      let a = new n(0.235, 0.08, r * 0.92).toNonIndexed();
      (a.translate(e, 0.87, t),
        R(a, I.amber),
        d.push(a),
        h(
          z(
            `course_${m++}`,
            [e - 0.32, 0, t - r / 2, e + 0.32, 0.85, t + r / 2],
            `concrete`,
          ),
        ));
    };
    for (let e = -6; e > D + 4; e -= 14)
      (t(-5.2, e - v.range(0, 2.5), 3), t(5.2, e - 7 - v.range(0, 2.5), 3));
    let r = [
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
      a = (t, a, o = 0) => {
        let s = r.map(([e, t]) => new c(e, t)),
          l = new e(s, 8, o).toNonIndexed();
        l.translate(t, 0, a);
        let u = l.attributes.position,
          f = u.count,
          p = new Float32Array(f * 3);
        for (let e = 0; e < f; e++) {
          let t = u.getY(e),
            n = t > 0.225 && t < 0.335;
          L.set(n ? I.finish : I.cone);
          let r = 1 - 0.28 * Math.max(0, 1 - (t - 0.04) / 0.28);
          ((p[e * 3] = L.r * r),
            (p[e * 3 + 1] = L.g * r),
            (p[e * 3 + 2] = L.b * r));
        }
        (l.setAttribute(`color`, new i(p, 3)), d.push(l));
        let g = new n(0.42, 0.045, 0.42).toNonIndexed();
        (g.translate(t, 0.0225, a),
          R(g, I.charcoal),
          d.push(g),
          h(
            z(
              `course_${m++}`,
              [t - 0.16, 0, a - 0.16, t + 0.16, 0.6, a + 0.16],
              `plastic`,
            ),
          ));
      };
    (a(-3.4, 2.6, 0.2),
      a(3.4, 2.6, 0.7),
      a(-3.4, -1.2, 1.1),
      a(3.4, -1.2, 0.4),
      a(-3.5, D + 5.5, 0.9),
      a(3.5, D + 5.5, 0.15));
    for (let e = 0; e >= D; e -= 10)
      for (let t of [-4.4, 4.4])
        (T(t, 0, e, 0.9, 0.05, I.post),
          C(t, 0.9, e, 0.16, 0.16, 0.16, I.amber, { solid: !1, ao: !1 }));
  }
  for (let e of d)
    (e.attributes.uv && e.deleteAttribute(`uv`),
      e.attributes.normal || e.computeVertexNormals());
  let k = y(d, !1);
  for (let e of d) e.dispose();
  let A = new f({
      vertexColors: !0,
      flatShading: !0,
      roughness: 0.85,
      metalness: 0,
    }),
    j = new l(k, A);
  ((j.castShadow = !0), (j.receiveShadow = !0), (j.name = `playerCourse`));
  let M = new _();
  ((M.name = `playerCourseGroup`), M.add(j));
  let N = new g(O.x1 - O.x0 - 0.04, O.z0 - O.z1 - 0.04, 8, 14);
  (N.rotateX(-Math.PI / 2), N.translate(0, O.water, (O.z0 + O.z1) / 2));
  {
    let e = N.attributes.position,
      t = e.count,
      n = new Float32Array(t * 3),
      r = new u(I.waterShallow),
      a = new u(I.water);
    for (let i = 0; i < t; i++) {
      let t = Math.min(1, Math.max(0, (e.getZ(i) - O.z1) / (O.z0 - O.z1)));
      (L.copy(r).lerp(a, t * t * (3 - 2 * t)),
        (n[i * 3] = L.r),
        (n[i * 3 + 1] = L.g),
        (n[i * 3 + 2] = L.b));
    }
    N.setAttribute(`color`, new i(n, 3));
  }
  let P = new f({
      vertexColors: !0,
      transparent: !0,
      opacity: 0.72,
      roughness: 0.14,
      metalness: 0.1,
      flatShading: !0,
      depthWrite: !1,
      side: 2,
    }),
    ee = new l(N, P);
  ((ee.name = `playerCourseWater`),
    (ee.renderOrder = 2),
    M.add(ee),
    (t.map.waterLevel = O.water),
    (t.map.waterBounds = [O.x0, O.z1, O.x1, O.z0]));
  let te = [-4, D, 4, 3];
  return {
    group: M,
    mesh: j,
    water: ee,
    colliders: p,
    pool: O,
    waterLevel: O.water,
    bounds: te,
    endZ: D,
    spawn: { pos: [0, 0.06, 1.6], yaw: 0 },
    cutGroundHole(e, t) {
      if (!e || !e.geometry) return;
      let n = t / 2,
        r = new b();
      (r.moveTo(-n, -n),
        r.lineTo(n, -n),
        r.lineTo(n, n),
        r.lineTo(-n, n),
        r.closePath());
      let i = new s();
      (i.moveTo(O.x0, -O.z0),
        i.lineTo(O.x1, -O.z0),
        i.lineTo(O.x1, -O.z1),
        i.lineTo(O.x0, -O.z1),
        i.closePath(),
        r.holes.push(i));
      let a = new S(r);
      (a.rotateX(-Math.PI / 2), a.computeVertexNormals());
      let o = e.geometry;
      ((e.geometry = a), o.dispose());
    },
    dispose() {
      for (let e of p) t.map.removeCollider(e.id);
      (k.dispose(), A.dispose(), N.dispose(), P.dispose(), M.parent?.remove(M));
    },
  };
}
