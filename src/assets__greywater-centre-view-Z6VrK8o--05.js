// assets__greywater-centre-view-Z6VrK8o- 05 — math
// Lines 1025-1368 of readable/assets__greywater-centre-view-Z6VrK8o-.pretty.js (statement-aligned).
function Fe(e, t, n, r, i = 1, a = -1, o = () => 0) {
  let c = t.clone().multiply(new A().makeScale(i, 1, -a)),
    l = Pe(e, i * -a < 0),
    u = (e, t) =>
      o(
        ...(() => {
          let n = new s(e, 0, t).applyMatrix4(c);
          return [n.x, n.z];
        })(),
      ) - n,
    d = L.platOut + 0.1,
    f = d + L.stairW,
    p = (d + f) / 2,
    m = L.platTop,
    h = 0.29,
    g = (m - u(p, -17.029999999999998)) / 60;
  (U(l, `precast`, c, d - 0.12, f, m - 0.3, m, 4, 6.8),
    U(l, `platformPave`, c, d - 0.12, f, m, m + 0.005, 4, 6.8),
    U(l, `tactile`, c, d, f, m, m + 0.006, 3.4, 4));
  let _ = 4,
    v = m,
    y = [],
    b = (e, t, n, r) =>
      Te(
        l,
        `galv`,
        new A().multiplyMatrices(c, new A().makeTranslation(e, 0, t)),
        De(r, r, 0.06),
        u(e, t),
        n,
      );
  for (let e = 0; e < 3; e++) {
    let t = _,
      n = v;
    for (let e = 1; e <= 19; e++) {
      let n = v - e * g,
        r = t - (e - 1) * h,
        i = r - h;
      (U(l, `precastDark`, c, d, f, n - g - 0.14, n, i, r),
        U(
          l,
          `trimWhite`,
          c,
          d + 0.1,
          f - 0.1,
          n - 0.02,
          n + 0.025,
          r - 0.05,
          r,
        ));
    }
    if (
      ((_ = t - 19 * h),
      (v = n - 20 * g),
      H(
        l,
        `precast`,
        c,
        [p, n - 0.42, t],
        [p, v - 0.42 + g, _],
        L.stairW,
        0.24,
      ),
      y.push([
        [t, n],
        [_, v + g],
      ]),
      e < 2)
    ) {
      (U(l, `precast`, c, d, f, v - 0.3, v, _ - 2, _),
        U(l, `platformPave`, c, d, f, v, v + 0.005, _ - 2, _));
      for (let e of [d + 0.2, f - 0.2]) b(e, _ - 1, v - 0.3, 0.26);
      (y.push([
        [_, v],
        [_ - 2, v],
      ]),
        (_ -= 2));
    }
  }
  for (let e of [d + 0.2, f - 0.2]) b(e, 5.4, m - 0.3, 0.3);
  for (let e of [d + 0.05, f - 0.05])
    for (let [[t, n], [r, i]] of y) {
      let a = Math.max(1, Math.round(Math.abs(t - r) / 1.5));
      for (let o = 0; o <= a; o++) {
        let s = o / a,
          u = t + (r - t) * s,
          d = n + (i - n) * s;
        U(l, `galv`, c, e - 0.04, e + 0.04, d, d + 1.05, u - 0.04, u + 0.04);
      }
      (H(l, `galv`, c, [e, n + 1.02, t], [e, i + 1.02, r], 0.07, 0.05),
        H(l, `railGlass`, c, [e, n + 0.55, t], [e, i + 0.55, r], 0.02, 0.85));
    }
  let x = [
    [6.8, m + 2.9],
    [4, m + 2.9],
    ...y.flatMap(([[e, t], [n, r]]) => [
      [e, t + 2.75],
      [n, r + 2.75],
    ]),
  ].filter((e, t, n) => t === 0 || Math.abs(e[0] - n[t - 1][0]) > 0.01);
  for (let e = 0; e < x.length - 1; e++) {
    let [t, n] = x[e],
      [r, i] = x[e + 1];
    if (
      (H(
        l,
        `aluminum`,
        c,
        [p + 0.1, n, t],
        [p + 0.1, i, r],
        L.stairW + 0.8,
        0.12,
      ),
      H(l, `lineAmber`, c, [f + 0.52, n, t], [f + 0.52, i, r], 0.05, 0.22),
      Math.abs(t - r) > 1)
    )
      for (let e of [0.15, 0.85]) {
        let a = t + (r - t) * e,
          o = n + (i - n) * e;
        U(l, `ironDark`, c, f + 0.3, f + 0.42, o - 2.75, o, a - 0.06, a + 0.06);
      }
  }
  let S = _ - 1.6,
    C = f + 0.7,
    w = u(C, S);
  (U(l, `signBlue`, c, C - 0.18, C + 0.18, w, w + 2.6, S - 0.18, S + 0.18),
    U(l, `lineAmber`, c, C - 0.2, C + 0.2, w + 2.6, w + 2.75, S - 0.2, S + 0.2),
    Ne(r, t, i * C, w + 3.3, -a * S, 1, pe, 1.25, 0.78));
}
Object.assign(P, {
  plazaPave: {
    pat: `ashlar`,
    p: { base: 12038306, rows: 5, joint: 3, jointK: 0.78, seed: 61 },
    scale: 3,
    rough: 0.9,
    bump: 0.7,
    grime: 0.18,
  },
  courtPave: {
    pat: `ashlar`,
    p: { base: 10459018, rows: 6, joint: 3, jointK: 0.72, seed: 62 },
    scale: 2.4,
    rough: 0.9,
    bump: 0.8,
  },
  wallStone: {
    pat: `ashlar`,
    p: { base: 13221801, rows: 3, joint: 4, jointK: 0.66, seed: 63 },
    scale: 1.8,
    rough: 0.9,
    bump: 1.2,
    grime: 0.3,
  },
  coping: {
    pat: `stucco`,
    p: { base: 14077887, seed: 64, joints: !0, blotch: 18 },
    scale: 1.2,
    rough: 0.8,
    bump: 0.5,
  },
  kioskGreen: {
    pat: `paint`,
    p: { base: 2968123, seed: 65 },
    size: 128,
    scale: 1,
    rough: 0.5,
    metal: 0.3,
  },
  kioskCream: {
    pat: `paint`,
    p: { base: 14866107, seed: 66 },
    size: 128,
    scale: 1,
    rough: 0.55,
    metal: 0.1,
  },
  boxwood: {
    pat: `stucco`,
    p: { base: 4217647, seed: 67, blotch: 40 },
    scale: 0.7,
    rough: 0.95,
    bump: 2.5,
  },
  soil: {
    pat: `stucco`,
    p: { base: 4010023, seed: 68, blotch: 30 },
    scale: 1,
    rough: 1,
    bump: 1.5,
  },
  adGlow: {
    pat: `paint`,
    p: { base: 15787988 },
    size: 32,
    scale: 1,
    rough: 0.4,
    emissive: 9076326,
  },
  reflect: {
    pat: `paint`,
    p: { base: 15261896 },
    size: 32,
    scale: 1,
    rough: 0.3,
    metal: 0.2,
    emissive: 2762264,
  },
});
var Ie = `"Barlow Condensed", "Arial Narrow", Arial, sans-serif`,
  Le = N(`plazaNews`, `NEWS · TOBACCO`, {
    bg: 2968123,
    fg: 15325608,
    aspect: 0.14,
    width: 1024,
    font: Ie,
    weight: 600,
    spacing: 0.14,
    size: 0.62,
  }),
  Re = N(`plazaCoffee`, `COFFEE`, {
    bg: 7023138,
    fg: 15852484,
    aspect: 0.14,
    width: 1024,
    font: `Georgia, serif`,
    weight: 700,
    spacing: 0.3,
    size: 0.66,
  }),
  ze = N(
    `plazaMenu`,
    `ESPRESSO  1.80
CAFE AU LAIT  2.40
TEA  1.50`,
    {
      bg: 1908510,
      fg: 15262416,
      aspect: 0.62,
      width: 512,
      font: Ie,
      weight: 500,
      spacing: 0.05,
      size: 0.62,
    },
  ),
  Be = N(
    `plazaBus`,
    `CENTRAL PLAZA
14 · 22 · 31`,
    {
      bg: 1979728,
      fg: 16052712,
      aspect: 0.5,
      width: 512,
      font: Ie,
      weight: 600,
      spacing: 0.06,
      size: 0.66,
    },
  ),
  Ve = N(
    `plazaAd`,
    `GREYWATER
RAILWAY`,
    {
      bg: 14260764,
      fg: 1976883,
      aspect: 1.55,
      width: 512,
      font: Ie,
      weight: 700,
      spacing: 0.08,
      size: 0.6,
    },
  ),
  He = N(
    `plazaInscription`,
    `TO THE PEOPLE
OF GREYWATER`,
    {
      fg: 4866612,
      aspect: 0.42,
      width: 1024,
      font: `Georgia, "Times New Roman", serif`,
      weight: 700,
      spacing: 0.18,
      size: 0.5,
    },
  ),
  W = new A(),
  Ue = (e, t, n, r = 0) => new A().makeRotationY(r).setPosition(e, t, n),
  G = (e, t, n, r, i, a, o, s, c) =>
    e.box(
      t,
      n,
      0,
      Math.min(r, i),
      Math.max(r, i),
      Math.min(a, o),
      Math.max(a, o),
      Math.min(s, c),
      Math.max(s, c),
    );
function K(e, t, n, r, i, a, o, s, c = s, l = 12) {
  e.add(t, new w(c, s, a - i, l).translate(r, (i + a) / 2, o), n, 0);
}
function q(e, t, n, r, a, o, c) {
  let l = new s(...r),
    u = new s(...a),
    d = u.clone().sub(l),
    f = d.length();
  if (f < 0.001) return;
  let p = new g().setFromUnitVectors(new s(0, 0, 1), d.normalize());
  e.add(
    t,
    new i(o, c, f),
    n
      .clone()
      .multiply(
        new A().compose(l.add(u).multiplyScalar(0.5), p, new s(1, 1, 1)),
      ),
    0,
  );
}
function We(e, t, n, r, i, a) {
  let o = new O(r.map(([e, t]) => new d(e, -t)));
  for (let e of i) o.holes.push(new v(e.map(([e, t]) => new d(e, -t))));
  e.add(t, new u(o).rotateX(-Math.PI / 2).translate(0, a, 0), n, 0);
}
function J(t, n, r, i, a, o, s, c, l, u = !1) {
  for (let d of u ? [0, Math.PI] : [0]) {
    let u = new e(new S(i, a), M(r));
    (u.position.set(o, s, c),
      (u.rotation.y = l + d),
      u.applyMatrix4(n),
      t.add(u));
  }
}
function Ge(e, t) {
  (K(e, `ironDark`, t, 0, 0, 0.86, 0, 0.11, 0.1, 12),
    K(e, `ironDark`, t, 0, 0.86, 0.92, 0, 0.12, 0.06, 12),
    K(e, `reflect`, t, 0, 0.66, 0.72, 0, 0.113, 0.113, 12),
    K(e, `ironDark`, t, 0, 0, 0.06, 0, 0.16, 0.16, 12));
}
