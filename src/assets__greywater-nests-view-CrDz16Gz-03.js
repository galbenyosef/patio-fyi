// assets__greywater-nests-view-CrDz16Gz 03 — deco
// Lines 842-1164 of readable/assets__greywater-nests-view-CrDz16Gz.pretty.js (statement-aligned).
var U = {
  concrete: `concrete`,
  plaster: `concrete`,
  timber: `wood`,
  crate: `wood`,
  metal: `metal`,
  sandbag: `sand`,
  glass: `glass`,
};
function W(e) {
  return U[e] ?? `concrete`;
}
function G() {
  let e = H(),
    t = R(10196877, { rows: 12, cols: 4, seed: 21 }),
    n = I(9210500, { amount: 0.1 }),
    r = k(5199699, 0.55, 0.6),
    i = I(6121048, { amount: 0.08, rough: 0.6, metal: 0.5, seed: 4 }),
    a = k(3949120, 0.6, 0.7),
    o = j(4479584, 0.55);
  (e.solid(4, 4.8, 4, t, 0, 0, 0),
    e.deco(0.95, 2.05, 0.06, r, -0.9, 0, 2.02),
    e.deco(0.08, 0.04, 0.04, k(2236962, 0.4, 0.8), -0.55, 1, 2.07),
    e.deco(0.6, 0.35, 0.05, a, 1, 3.6, 2.02),
    e.solid(4.6, 0.2, 4.6, n, 0, 4.8, 0),
    e.stair(1, 2.95, 4.4, 0, 5, `-z`, a, { stringerMat: r, railMat: r }),
    e.solid(5.75, 0.2, 1.05, a, 0.575, 4.8, -2.825, { surface: `metal` }),
    e.rail(-2.3, -3.35, 3.45, -3.35, 5, r),
    e.rail(-2.3, -3.35, -2.3, -2.3, 5, r),
    e.rail(3.45, -3.35, 3.45, -2.3, 5, r, { solid: !1 }));
  for (let t of [-2.1, 3.3]) e.strut([t, 4.8, -3.3], [t, 0, -3.3], 0.06, r);
  let s = 0.35,
    c = 0.14,
    l = (t, n, r, a, l) => {
      let u = a === 0,
        d = (e, t) => {
          let i = t - e,
            a = (e + t) / 2;
          return u ? [i, n + a, r] : [i, n, r + a];
        },
        f = l
          ? [
              [-t / 2, l[0]],
              [l[1], t / 2],
            ]
          : [[-t / 2, t / 2]];
      for (let [t, n] of f) {
        let [r, a, f] = d(t, n),
          p = u ? r : c,
          m = u ? c : r;
        (e.panel(p, 1.4, m, i, a, 5, f, { material: `metal` }),
          l || e.panel(p, s, m, o, a, 6.4, f, { material: `glass` }),
          e.panel(
            p,
            0.8999999999999999 - (l ? 0 : s),
            m,
            i,
            a,
            6.4 + (l ? 0 : s),
            f,
            { material: `metal` },
          ));
      }
      if (l) {
        let [t, n, r] = d(l[0], l[1]);
        e.panel(u ? t : c, 0.25, u ? c : t, i, n, 7.05, r, {
          material: `metal`,
        });
      }
    };
  (l(4, 0, 1.93, 0),
    l(4, -1.93, 0, Math.PI / 2),
    l(4, 1.93, 0, Math.PI / 2),
    l(4, 0, -1.93, 0, [0.9, 1.85]),
    e.deco(0.06, 2, 0.92, i, 1.88, 5, -2.4),
    e.solid(4.8, 0.16, 4.8, n, 0, 7.3, 0));
  let u = e.deco(0.4, 0.28, 0.2, k(3158831, 0.5, 0.6), 1.9, 7.66, 2);
  ((u.rotation.x = 0.4),
    e.deco(0.32, 0.2, 0.02, A(16773832, 3), 1.9, 7.7, 2.12),
    e.strut([1.9, 7.46, 1.9], [1.9, 7.75, 2], 0.03, r),
    e.strut([-2, 7.46, -2], [-2, 11.5, -2], 0.015, k(2236962, 0.4, 0.7)),
    e.strut([-2.3, 7.3, -2.1], [-2.3, 0.3, -2.1], 0.02, k(1579032, 0.8)));
  let d = B.shade();
  for (let t of [-2.4, 2.4]) e.strut([t, 4.8, 2.75], [t, 7.5, 2.75], 0.04, r);
  return (
    e.strut([-2.4, 7.5, 2.75], [2.4, 7.5, 2.75], 0.04, r),
    e.strut([-2.4, 7.5, 2.75], [-1.93, 7.3 + 0.1, 1.95], 0.03, r),
    e.strut([2.4, 7.5, 2.75], [1.93, 7.3 + 0.1, 1.95], 0.03, r),
    e.sheet(
      [
        [-2.4, 7.5, 2.75],
        [2.4, 7.5, 2.75],
        [2.4, 4.9, 2.75],
        [-2.4, 4.9, 2.75],
      ],
      d,
      { sag: 0.02, rumple: 0.02, repeat: [5, 3] },
    ),
    e.deco(0.4, 0.45, 0.4, k(3029548, 0.8), -0.6, 5, 0.6, { round: 0.03 }),
    e.deco(1.2, 0.04, 0.3, k(7035460, 0.8), -1.6, 6, -0.6, { ry: Math.PI / 2 }),
    e.deco(0.32, 0.18, 0.22, k(3818034, 0.6, 0.3), -1.62, 6.04, -0.9),
    e.cyl(0.05, 0.05, 0.3, k(7305842, 0.3, 0.8), -1.6, 6.04, -0.4),
    e.deco(0.3, 0.03, 0.22, k(1911621, 0.8), 0.4, 6.4, 1.78),
    e.deco(0.4, 0.55, 0.22, k(9209464, 0.6, 0.3), 1.4, 5, -1.6),
    e.perch(0, 5, 1.4, 0, `stand`),
    e.perch(-1.4, 5, 0, -Math.PI / 2, `stand`),
    e.perch(1.4, 5, 0.4, Math.PI / 2, `stand`),
    e.finish({ name: `sangar` })
  );
}
var K = () => R(9063483, { rows: 24, cols: 8, joint: 11050122, seed: 31 }),
  q = () => k(1844264, 0.15, 0.4),
  J = () => I(12169890, { amount: 0.08, seed: 8 });
function Y(e, t, n, r, i, a, o = 1, s = 1.6, c = J()) {
  let l = t === `x` ? 0 : Math.PI / 2,
    u = (e) => (t === `x` ? [i, n + r * e] : [n + r * e, i]),
    [d, f] = u(0.01);
  (e.deco(o, s, 0.05, q(), d, a, f, { ry: l }),
    ([d, f] = u(0.08)),
    e.deco(o + 0.2, 0.08, 0.16, c, d, a - 0.08, f, { ry: l }),
    ([d, f] = u(0.03)),
    e.deco(o + 0.2, 0.18, 0.06, c, d, a + s, f, { ry: l }));
}
function X(
  e,
  {
    xa: t,
    xb: n,
    w: r = 1,
    zs: i,
    y0: a = 0,
    y1: o,
    hf: s = 1.6,
    first: c = `-z`,
    m: l,
    landMat: u,
    ldS: d = 1,
    ldN: f = 1,
    skipS: p = !1,
    skipN: m = !1,
    rails: h = !1,
    railMat: g,
    surface: _ = `metal`,
  },
) {
  let v = Math.max(1, Math.round((o - a) / s)),
    y = (o - a) / v,
    b = i + Math.ceil(y / 0.2 - 1e-6) * 0.27,
    x = Math.min(t, n) - r / 2,
    S = Math.max(t, n) + r / 2;
  for (let o = 0; o < v; o++) {
    let s = (c === `-z`) == (o % 2 == 0),
      v = a + y * o;
    (e.stair(r, o % 2 ? n : t, s ? b : i, v, v + y, s ? `-z` : `+z`, l, {
      rails: h,
      railMat: g,
      stringerMat: g ?? l,
      surface: _,
    }),
      (s ? !p : !m) &&
        e.solid(
          S - x,
          0.15,
          s ? d : f,
          u ?? l,
          (x + S) / 2,
          v + y - 0.15,
          s ? i - d / 2 : b + f / 2,
          { surface: _ },
        ));
  }
  return { zn: b, x0: x, x1: S };
}
var Z = () =>
  N(
    `staves`,
    (e, t, n) => {
      ((e.fillStyle = `#7a6248`), e.fillRect(0, 0, t, n));
      let r = 3,
        i = () => (r = (Math.imul(r, 1664525) + 1013904223) >>> 0) / 4294967296;
      for (let r = 0; r < t; r += 8)
        ((e.fillStyle = `rgba(${i() < 0.5 ? `30,20,10` : `200,180,150`},${0.08 + i() * 0.12})`),
          e.fillRect(r, 0, 8, n),
          (e.fillStyle = `rgba(25,15,8,0.6)`),
          e.fillRect(r, 0, 1, n));
      for (let r = 0; r < 40; r++)
        ((e.fillStyle = `rgba(60,50,40,${i() * 0.25})`),
          e.fillRect(i() * t, i() * n, 2 + i() * 4, 20 + i() * 80));
    },
    { rough: 0.9 },
  );
function se() {
  let e = H(),
    t = K(),
    n = J(),
    r = k(2237994, 0.55, 0.6),
    i = k(2961716, 0.6, 0.6),
    a = 9.6;
  e.solid(8, a, 10, t, 0, 0, 0, { tile: 2 });
  for (let t = 0; t < 3; t++) {
    for (let n of [-2.4, 0, 2.4]) (t || n) && Y(e, `x`, 5, 1, n, t * 3.2 + 0.9);
    for (let n of [-3, 3]) Y(e, `z`, -4, -1, n, t * 3.2 + 0.9);
    for (let n of [-3.6, 3.2]) Y(e, `z`, 4, 1, n, t * 3.2 + 0.9, 0.9);
    e.deco(8.1, 0.12, 10.1, n, 0, t * 3.2 + 3.05, 0);
  }
  (e.deco(1.2, 2.4, 0.06, k(3877408, 0.6), 0, 0.45, 5.02),
    e.deco(1.5, 0.25, 0.4, n, 0, 9.2, 5.1, {}));
  for (let t = 0; t < 3; t++)
    e.deco(2.2, 0.15, 0.4 + t * 0.3, n, 0, t * 0.15, 5.2 + t * 0.15);
  (e.deco(8.5, 0.35, 10.5, n, 0, 9.25, 0),
    X(e, {
      xa: 4.8,
      xb: 5.9,
      w: 1,
      zs: -3,
      y1: a,
      hf: 1.6,
      first: `-z`,
      m: i,
      railMat: r,
      rails: !0,
      ldS: 1,
      ldN: 1,
    }));
  for (let t of [3.2, 6.4])
    e.deco(0.06, 2.1, 1, k(4864556, 0.7), 4.02, t, -0.34);
  for (let t of [-4, 0.16])
    for (let n of [4.3, 6.4]) e.strut([n, 0, t], [n, a, t], 0.05, r);
  (e.rail(6.4, -4, 6.4, 0.16, a, r),
    e.rail(4.3, -4, 6.4, -4, a, r, { solid: !1 }),
    e.wall(`x`, 4.85, -4, 4, a, 10.4, 0.3, t, [], { material: `concrete` }),
    e.wall(`x`, -4.85, -4, 4, a, 10.4, 0.3, t, [], { material: `concrete` }),
    e.wall(`z`, 3.85, -4.7, 4.7, a, 10.4, 0.3, t, [[-0.84, 0.16, a, 10.4]], {
      material: `concrete`,
    }),
    e.wall(`z`, -3.85, -4.7, 4.7, a, 10.4, 0.3, t, [], {
      material: `concrete`,
    }));
  for (let t of [-4.85, 4.85]) e.deco(8.3, 0.08, 0.4, n, 0, 10.4, t);
  e.deco(0.4, 0.08, 9.3, n, -3.85, 10.4, 0);
  for (let [t, r] of [
    [-4.65, -0.84],
    [0.16, 4.65],
  ])
    e.deco(0.4, 0.08, r - t, n, 3.85, 10.4, (t + r) / 2);
  (e.solid(2.4, 2.6, 2.8, t, -2.4, a, -3.2, { tile: 2 }),
    e.deco(2.6, 0.12, 3, n, -2.4, 12.2, -3.2),
    e.deco(1, 2.05, 0.05, k(5988183, 0.5, 0.4), -2.4, a, -1.78),
    e.solid(0.9, 1.6, 0.6, t, -3.3, a, 3.6),
    e.deco(1.4, 0.4, 1.2, j(9413286, 0.6), 1.6, a, 2.8),
    e.deco(3, 0.02, 2, k(1907996, 0.95), -0.5, a, 0.8));
  let o = 1.4,
    c = -2.2,
    l = 12.6;
  for (let [t, n] of [
    [-2.3, -2.3],
    [2.3, -2.3],
    [-2.3, 2.3],
    [2.3, 2.3],
    [0, -2.3],
    [0, 2.3],
  ])
    e.strut([o + t, a, c + n], [o + t, 12.4, c + n], 0.09, r, 8);
  for (let t of [-1, 1])
    (e.strut(
      [-0.8999999999999999, 9.9, c + t * 2.3],
      [3.6999999999999997, 12.2, c + t * 2.3],
      0.03,
      r,
    ),
      e.strut(
        [o + t * 2.3, 9.9, -4.5],
        [o + t * 2.3, 12.2, 0.09999999999999964],
        0.03,
        r,
      ));
  (e.deco(5, 0.14, 5, k(6113847, 0.9), o, 12.4, c),
    e.solid(5, 0.2, 0.7, i, o, 12.4, -0.050000000000000266, {
      surface: `wood`,
    }),
    e.solid(5, 0.2, 0.7, i, o, 12.4, -4.35, { surface: `wood` }),
    e.solid(0.7, 0.2, 3.6, i, -0.75, 12.4, c, { surface: `wood` }),
    e.solid(0.7, 0.2, 3.6, i, 3.55, 12.4, c, { surface: `wood` }),
    e.cyl(1.8, 1.85, 4, Z(), o, l, c, { seg: 24, solid: `wood` }));
  for (let t = 0; t < 6; t++)
    e.cyl(1.87, 1.87, 0.05, r, o, 12.9 + t * 0.65, c, { seg: 24 });
  (e.deco(1, 1, 1, Z(), o, 16.6, c, { geo: new s(2, 1.1, 24) }),
    e.cyl(0.08, 0.08, 0.3, r, o, 17.65, c),
    e.ladder(o, -0.2500000000000002, l, 16.6, Math.PI, r, { over: 0.5 }),
    e.ladder(o, 0.5499999999999998, a, l, Math.PI, r),
    e.strut([-3.5, a, 3], [-3.5, 11.5, 3], 0.025, k(9080722, 0.4, 0.7)),
    e.strut([-1.4, a, 3], [-1.4, 11.2, 3], 0.025, k(9080722, 0.4, 0.7)),
    e.sheet(
      [
        [-3.7, 11.549999999999999, 4.6],
        [-1.2, 11.25, 4.6],
        [-1.2, 11.15, 1.6],
        [-3.7, 9.799999999999999, 1.6],
      ],
      V(3822968),
      { sag: 0.15, repeat: [1, 1] },
    ),
    e.deco(1.9, 0.18, 0.9, k(9142640, 0.95), -2.5, a, 2.9, { round: 0.06 }),
    e.deco(0.45, 0.45, 0.45, k(2972222, 0.8), -1, a, 4));
  for (let t of [-0.6, -0.5])
    e.cyl(
      0.04,
      0.04,
      0.26,
      k(10207440, 0.2, 0, { transparent: !0, opacity: 0.7 }),
      t,
      a,
      4.3,
    );
  return (
    e.perch(-0.2, a, 4.2, 0, `crouch`),
    e.perch(3.2, a, 3.8, Math.PI / 2, `crouch`),
    e.perch(-3.2, a, -0.5, -Math.PI / 2, `crouch`),
    e.perch(o, l, -0.050000000000000266, 0, `crouch`),
    e.perch(o, l, -4.35, Math.PI, `crouch`),
    e.finish({ name: `walkup` })
  );
}
