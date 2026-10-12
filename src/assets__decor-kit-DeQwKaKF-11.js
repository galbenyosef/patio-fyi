// assets__decor-kit-DeQwKaKF 11 — pick
// Lines 3047-3363 of readable/assets__decor-kit-DeQwKaKF.pretty.js (statement-aligned).
function at(e) {
  let t = x(e),
    n = new m(),
    r = t.pick([0.8, 0.9, 1.2]),
    i = t.pick([1.8, 2, 1.2]),
    a = 0.32,
    o = K(t),
    s = Math.round(i / 0.36);
  z(n, r, i, 0.015, o, 0, 0, -0.152);
  for (let e of [-1, 1]) z(n, 0.02, i, a, o, e * (r / 2 - 0.01), 0, 0);
  for (let e = 0; e <= s; e++)
    z(n, r - 0.04, 0.02, a, o, 0, e === 0 ? 0.05 : (e * (i - 0.02)) / s, 0);
  z(n, r - 0.04, 0.05, 0.02, o, 0, 0, a / 2 - 0.01);
  for (let e = 0; e < s; e++) {
    let a = e === 0 ? 0.07 : (e * (i - 0.02)) / s + 0.02,
      o = -r / 2 + 0.03,
      c = r - 0.06,
      l = t.pick([`books`, `books`, `mixed`, `bins`]);
    if (l === `bins`) {
      let e = Math.floor(c / 0.28);
      for (let r = 0; r < e; r++)
        S(
          n,
          0.26,
          0.26,
          0.28,
          0.02,
          U(t.pick([12101770, 7041116, 15328472, 4082266]), 0.95),
          o + 0.14 + r * 0.28,
          a,
          0,
        );
      continue;
    }
    let u = ae(n, t, o, a, 0, l === `books` ? c : c * t.range(0.4, 0.7), {
      depth: 0.26,
    });
    if (l === `mixed` && c - u > 0.15) {
      let e = o + u + (c - u) / 2;
      if (t.chance(0.5))
        D(
          n,
          [
            [0, 0],
            [0.04, 0],
            [0.055, 0.08],
            [0.03, 0.18],
            [0.035, 0.2],
          ],
          U(t.pick(I), 0.3),
          e,
          a,
          0,
          20,
        );
      else {
        let r = a;
        for (let i = 0; i < 3; i++)
          (z(
            n,
            0.2,
            0.03,
            0.24,
            U(t.pick([15328472, 2899536, 10697515]), 0.7),
            e,
            r,
            0,
          ),
            (r += 0.03));
        b(n, 0.04, U(t.pick(I), 0.3), e, r + 0.04, 0);
      }
    }
  }
  return F(n);
}
function ot(e) {
  let t = x(e),
    n = new m(),
    r = t.chance(0.15),
    i = K(t),
    a = t.pick([1.4, 1.6, 1.8]),
    s = t.range(0.45, 0.55),
    c = 0.42;
  (q(n, t, a, c, 0.1, t.pick([`taper`, `metal`, `block`]), i, 0.05),
    z(n, a, s - 0.1, c, i, 0, 0.1, 0));
  let l = t.pick([2, 3, 4]);
  for (let e = 0; e < l; e++) {
    let t = (a - 0.02) / l;
    z(
      n,
      t - 0.01,
      s - 0.14,
      0.012,
      e === Math.floor(l / 2) && l === 3 ? U(1710618, 0.9) : i,
      -a / 2 + 0.01 + t / 2 + e * t,
      0.12,
      c / 2,
    );
  }
  if (r) {
    let e = new m();
    (e.position.set(0, s, 0),
      n.add(e),
      S(e, 0.68, 0.55, 0.5, 0.04, w(t.pick([2763308, 9407104])), 0, 0, -0.02));
    let r = new o(
      new v(1.2, 24, 16, -0.2, 0.4, Math.PI / 2 - 0.16, 0.32),
      U(1713184, 0.2, 0, { emissive: 2243123, emissiveIntensity: 0.4 }),
    );
    (r.position.set(0, 0.28, -0.97), e.add(r));
    for (let t = 0; t < 3; t++)
      L(
        e,
        0.012,
        0.012,
        0.01,
        w(5592405),
        0.28,
        0.1 + t * 0.04,
        0.23,
      ).rotation.x = Math.PI / 2;
  } else {
    let e = t.pick([43, 50, 55, 65, 75]) * 0.0254 * 0.8716 + 0.02,
      r = (e * 9) / 16,
      i = new m();
    (i.position.set(0, s, -0.05),
      n.add(i),
      B(i, e * 0.35, 0.02, 0.22, E(), 0, 0.01, 0),
      B(i, 0.06, 0.1, 0.04, E(), 0, 0.06, -0.02),
      A(i, e, r, 0.035, 0.005, U(1118483, 0.4), 0, 0.09 + r / 2, 0));
    let a = t.chance(0.5),
      o = P(640, 360, (e, n, r) => {
        if (a) le(e, n, r, t, t.pick([`landscape`, `seascape`, `city`]));
        else {
          let t = e.createLinearGradient(0, 0, n, r);
          (t.addColorStop(0, `#1b1d22`),
            t.addColorStop(0.5, `#0b0c0f`),
            t.addColorStop(1, `#16181c`),
            (e.fillStyle = t),
            e.fillRect(0, 0, n, r));
        }
      });
    (H(i, e - 0.02, r - 0.02, o, 0, 0.09 + r / 2, 0.018, {
      emissive: a ? 0.9 : 0,
      rough: a ? 0.3 : 0.05,
      metal: a ? 0 : 0.2,
    }),
      t.chance(0.5) &&
        A(n, e * 0.7, 0.06, 0.09, 0.02, U(1710620, 0.5), 0, s, c / 2 - 0.08));
  }
  return (
    t.chance(0.6) &&
      (z(n, 0.28, 0.05, 0.2, w(1118481), -a / 2 + 0.25, s, 0),
      B(n, 0.004, 0.004, 0.001, V(4500223, 2), -a / 2 + 0.2, s + 0.025, 0.101)),
    F(n, { note: r ? `old CRT` : `flat screen` })
  );
}
function st(e) {
  let t = x(e),
    n = new m(),
    r = K(t),
    i = t.pick([1, 1.2, 1.5]),
    a = t.pick([0.8, 0.9, 1.2]),
    o = 0.46;
  (q(n, t, i, o, 0.1, t.pick([`taper`, `bun`, `block`]), r, 0.04),
    z(n, i, a - 0.1, o, r, 0, 0.1, 0),
    z(n, i + 0.02, 0.025, 0.48000000000000004, r, 0, a, 0));
  let s = Math.round((a - 0.14) / 0.22),
    c = i > 1.1 ? 2 : 1,
    l = t.pick([k(), U(12095807, 0.3, 0.9), E()]);
  for (let e = 0; e < s; e++)
    for (let t = 0; t < c; t++) {
      let u = (i - 0.04) / c,
        d = (a - 0.14) / s,
        f = -i / 2 + 0.02 + u / 2 + t * u,
        p = 0.12 + e * d;
      (z(n, u - 0.012, d - 0.012, 0.014, r, f, p, o / 2),
        B(n, 0.12, 0.014, 0.022, l, f, p + d / 2, 0.248));
    }
  if (
    (t.chance(0.5) &&
      D(
        n,
        [
          [0, 0],
          [0.05, 0],
          [0.06, 0.12],
          [0.035, 0.25],
          [0.04, 0.27],
        ],
        U(t.pick(I), 0.3),
        i / 2 - 0.15,
        a + 0.025,
        0,
        20,
      ),
    t.chance(0.5))
  ) {
    let e = new m();
    (e.position.set(-i / 2 + 0.25, a + 0.025, -0.05),
      n.add(e),
      z(e, 0.3, 0.02, 0.2, U(12095807, 0.3, 0.9), 0, 0, 0),
      L(e, 0.03, 0.03, 0.08, T(16767392, 0.5), -0.08, 0.02, 0),
      L(e, 0.02, 0.02, 0.1, U(1710618, 0.3), 0.06, 0.02, 0));
  }
  return F(n);
}
function ct(e) {
  return U(
    e.pick([15920610, 15261900, 14209732, 2763308, 12168601, 9083530]),
    0.9,
    0,
    { emissive: 16767392, emissiveIntensity: 0 },
  );
}
function J(e, t, n = 0.6) {
  (e.userData.nightMats ??= []).push([t, n]);
}
function lt(e, t, n, r, i, a, o, s, c) {
  D(
    e,
    [
      [a, 0],
      [o, s],
    ],
    c,
    n,
    r,
    i,
    32,
  );
  let l = b(e, 0.03, V(16773584, 0), n, r + s * 0.4, i, 10);
  return (J(e, l.material, 3), l);
}
function ut(e) {
  let t = x(e),
    n = new m(),
    r = t.pick([`drum`, `arc`, `tripod`, `torchiere`, `task`]),
    i = ct(t),
    a = t.pick([O(), E(), U(12095807, 0.3, 0.9), k()]);
  if (r === `arc`) {
    (B(n, 0.3, 0.05, 0.3, U(t.pick([15526630, 1710618]), 0.25), 0, 0.025, -0.9),
      M(
        n,
        [
          [0, 0.05, -0.9],
          [0, 1.2, -0.85],
          [0, 1.9, -0.45],
          [0, 2, 0],
          [0, 1.85, 0.25],
        ],
        0.014,
        a,
        40,
      ));
    let e = new o(
      new v(0.2, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2),
      a === k() ? k() : U(1710618, 0.4, 0.6),
    );
    ((e.material = e.material.clone()),
      (e.material.side = 2),
      e.position.set(0, 1.62, 0.28),
      (e.castShadow = !0),
      n.add(e),
      J(n, b(n, 0.04, V(16773584, 0), 0, 1.66, 0.28, 10).material, 3));
  } else if (r === `tripod`) {
    let e = K(t);
    for (let t = 0; t < 3; t++) {
      let r = (t / 3) * Math.PI * 2 + 0.5;
      C(n, [Math.cos(r) * 0.32, 0, Math.sin(r) * 0.32], [0, 1.15, 0], 0.014, e);
    }
    (C(n, [0, 1.1, 0], [0, 1.25, 0], 0.01, a),
      lt(n, t, 0, 1.2, 0, 0.26, 0.24, 0.32, i));
  } else if (r === `torchiere`)
    (L(n, 0.15, 0.15, 0.02, a, 0, 0, 0, 24),
      L(n, 0.012, 0.012, 1.7, a, 0, 0.02, 0, 10),
      D(
        n,
        [
          [0.02, 0],
          [0.18, 0.12],
          [0.2, 0.14],
        ],
        U(t.pick([15260872, 14075560]), 0.3, 0, {
          transparent: !0,
          opacity: 0.85,
        }),
        0,
        1.7,
        0,
        32,
      ),
      J(n, b(n, 0.04, V(16773584, 0), 0, 1.74, 0, 10).material, 3));
  else if (r === `task`) {
    (L(n, 0.14, 0.14, 0.02, a, 0, 0, 0, 24),
      C(n, [0, 0.02, 0], [0, 1.35, 0], 0.01, a),
      C(n, [0, 1.35, 0], [0, 1.45, 0.25], 0.009, a));
    let e = D(
      n,
      [
        [0.02, 0],
        [0.07, -0.05],
        [0.09, -0.14],
      ],
      a,
      0,
      1.5,
      0.28,
      24,
    );
    ((e.rotation.x = 0.5),
      J(n, b(n, 0.03, V(16773584, 0), 0, 1.41, 0.33, 10).material, 3));
  } else
    (L(n, 0.16, 0.18, 0.03, a, 0, 0, 0, 24),
      L(n, 0.012, 0.012, 1.3, a, 0, 0.03, 0, 10),
      lt(n, t, 0, 1.3, 0, 0.23, 0.2, 0.33, i));
  return (J(n, i, 0.5), F(n, { note: r, light: !0 }));
}
