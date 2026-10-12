// assets__yard-dressing-view-Du2F6MWT 43 — math
// Lines 12191-12445 of readable/assets__yard-dressing-view-Du2F6MWT.pretty.js (statement-aligned).
function Na(e, t) {
  let n = U(e),
    r = new D(),
    i = Yi(t),
    a = n.chance(0.5),
    o = a
      ? H(
          n.pick([
            15789800, 11545124, 1977930, 2775610, 15253552, 2787994, 1710618,
            8018490,
          ]),
          0.55,
        )
      : G(n.pick([W.cedar, W.teak, W.weathered, W.redwood, W.white]), 0.8, 6),
    s = n.range(0.55, 0.75),
    c = n.range(0.12, 0.35);
  return (
    ja(r, o, -s - 0.2, 0, c, n.range(0.35, 0.45)),
    ja(r, o, s + 0.2, 0, -c, n.range(0.35, 0.45)),
    Ma(r, n, a ? o : G(W.cedar, 0.8, 6), 0, 0.05, i),
    !a &&
      !i &&
      n.chance(0.5) &&
      F(
        r,
        0.5,
        0.1,
        0.12,
        0.05,
        H(n.pick([15261904, 2767450, 9054754]), 0.95),
        -s - 0.23,
        0.46,
        -0.2,
      ).rotation.set(-0.5, 0.2, 0),
    ha(r, i, 3.2, 2.2, e + 3, 70),
    R(r, { note: a ? `poly` : `wood` })
  );
}
function Pa(e, t, n, r, i) {
  let a = aa(e, n, 0, r, i),
    o = H(2763306, 0.4, 0.6),
    s = ea(t, 0.9);
  for (let e of [-1, 1])
    (N(a, [e * 0.26, 0, 0.24], [e * 0.27, 0.72, -0.28], 0.01, o, 6),
      N(a, [e * 0.26, 0, -0.24], [e * 0.26, 0.44, 0.24], 0.01, o, 6),
      N(a, [e * 0.27, 0.44, 0.24], [e * 0.28, 0.6, 0.22], 0.01, o, 6),
      V(a, 0.07, 0.012, 0.42, s, e * 0.29, 0.6, 0.02));
  for (let e of [0.24, -0.24])
    (N(a, [-0.26, 0, e], [0.26, 0.42, e], 0.009, o, 6),
      N(a, [0.26, 0, e], [-0.26, 0.42, e], 0.009, o, 6));
  return (
    V(a, 0.5, 0.012, 0.46, s, 0, 0.4, 0),
    V(a, 0.5, 0.012, 0.3, s, 0, 0.385, 0),
    V(a, 0.5, 0.4, 0.012, s, 0, 0.62, -0.27, -0.22),
    I(a, new c(0.04, 0.035, 0.08, 12, 1, !0), ea(1710618), 0.33, 0.6, 0.18),
    a
  );
}
function Fa(e, t) {
  let n = U(e),
    r = new D(),
    i = Yi(t),
    a = n.pick([`stone`, `block`, `bowl`, `square`]),
    o = i ? e % 4 != 0 : e % 3 != 0,
    s = 0.03,
    l = 0.38;
  if (a === `stone`) {
    let e = ca(Qi);
    for (let t = 0; t < 2; t++)
      for (let r = 0; r < 14; r++) {
        let i = ((r + t * 0.5) / 14) * $ + n.range(-0.05, 0.05),
          a = 0.56 + n.range(-0.03, 0.03),
          o = n.range(0.11, 0.14);
        e.add(
          Math.cos(i) * a,
          0.07 + t * 0.13,
          Math.sin(i) * a,
          o,
          n.pick([9077880, 10127986, 6973022, 11049602, 8024678]),
          o * 0.62,
          o * 0.9,
        );
      }
    e.flush(r, H(16777215, 0.92));
  } else if (a === `block`) {
    let e = n.pick([12101770, 9078400, 5920852, 10119754]),
      t = 0.55;
    for (let n = 0; n < 3; n++)
      for (let i = 0; i < 12; i++) {
        let a = ((i + (n % 2) * 0.5) / 12) * $;
        V(
          r,
          0.3,
          0.1,
          0.2,
          H(Se(e, 0.9 + ((i * 7 + n * 3) % 5) * 0.04), 0.9),
          Math.cos(a) * t,
          0.05 + n * 0.1,
          Math.sin(a) * t,
          0,
          -a - Q / 2,
          0,
        );
      }
    for (let n = 0; n < 12; n++) {
      let i = ((n + 0.5) / 12) * $;
      V(
        r,
        0.31,
        0.05,
        0.27,
        H(Se(e, 0.8), 0.85),
        Math.cos(i) * t,
        0.325,
        Math.sin(i) * t,
        0,
        -i - Q / 2,
        0,
      );
    }
    I(
      r,
      new c(0.43, 0.43, 0.3, 28, 1, !0),
      H(1973274, 0.7, 0.5, { side: 2 }),
      0,
      0.16,
      0,
    );
  } else if (a === `bowl`) {
    let e = H(n.pick([1973790, 6961698, 9067066, 4868680]), 0.55, 0.6);
    P(
      r,
      [
        [0, 0.28],
        [0.25, 0.29],
        [0.42, 0.36],
        [0.5, 0.47],
        [0.54, 0.49],
        [0.55, 0.5],
      ],
      e,
      0,
      0,
      0,
      36,
    );
    for (let t = 0; t < 4; t++) {
      let n = (t / 4) * $ + Q / 4;
      L(
        r,
        [
          [Math.cos(n) * 0.3, 0.3, Math.sin(n) * 0.3],
          [Math.cos(n) * 0.46, 0.18, Math.sin(n) * 0.46],
          [Math.cos(n) * 0.5, 0, Math.sin(n) * 0.5],
        ],
        0.015,
        e,
        8,
        6,
      );
    }
    ((s = 0.3), (l = 0.3));
  } else {
    let e = H(n.pick([2762790, 5913126]), 0.6, 0.5),
      t = 0.8;
    for (let n of [-1, 1])
      (B(r, t, 0.28, 0.012, e, 0, 0.08, (n * t) / 2),
        B(r, 0.012, 0.28, t, e, (n * t) / 2, 0.08, 0),
        B(r, 1, 0.012, 0.1, e, 0, 0.36, n * 0.44),
        B(r, 0.1, 0.012, t, e, n * 0.44, 0.36, 0));
    for (let n of [-1, 1])
      for (let i of [-1, 1])
        B(r, 0.04, 0.08, 0.04, e, n * (t / 2 - 0.03), 0, i * (t / 2 - 0.03));
    (B(r, t, 0.012, t, e, 0, 0.1, 0), (s = 0.11), (l = 0.3));
  }
  z(r, l * 1.05, l * 1.1, 0.02, H(4867650, 1), 0, s, 0, 20);
  let u = ca(Xi),
    d = ca(Xi);
  for (let e = 0; e < 40; e++) {
    let e = n() * $,
      t = Math.sqrt(n()) * l * 0.9;
    (o && n.chance(0.4) ? d : u).add(
      Math.cos(e) * t,
      s + 0.02,
      Math.sin(e) * t,
      n.range(0.012, 0.03),
      n.pick([1710618, 5920338, 9078402, 2762274]),
    );
  }
  (u.flush(r), d.flush(r, Ce(16730640, 1.8)));
  let f = s + 0.04;
  if (n.chance(0.5))
    for (let e = 0; e < 5; e++) {
      let t = (e / 5) * $ + n() * 0.3;
      ma(
        r,
        [Math.cos(t) * l * 0.85, f, Math.sin(t) * l * 0.85],
        [Math.cos(t) * 0.04, f + 0.36, Math.sin(t) * 0.04],
        0.04,
        !0,
      );
    }
  else
    for (let e = 0; e < 2; e++)
      for (let t of [-1, 1]) {
        let n = t * l * 0.45;
        ma(
          r,
          e ? [n, f + 0.08, -l * 0.9] : [-l * 0.9, f, n],
          e ? [n, f + 0.08, l * 0.9] : [l * 0.9, f, n],
          0.045,
          o,
        );
      }
  o && ua(r, 0, f, 0, l * 0.45, 10, e, 0.55);
  let p = n.pick([3, 4, 4]),
    m = n.chance(0.5),
    h = n.range(1.6, 1.9),
    g = p === 3 ? 1.35 : 1.1,
    _ = m
      ? n.chance(0.5)
        ? H(n.pick([15789800, 11545124, 1977930, 2775610, 8018490]), 0.55)
        : G(n.pick([W.cedar, W.weathered, W.redwood]), 0.8, 6)
      : null;
  for (let e = 0; e < p; e++) {
    let t = Q + (e - (p - 1) / 2) * g;
    m
      ? ja(r, _, Math.sin(t) * h, Math.cos(t) * h, t + Q)
      : Pa(
          r,
          n.pick([2767450, 3824186, 9054754, 4868682, 2779786, 11557406]),
          Math.sin(t) * h,
          Math.cos(t) * h,
          t + Q,
        );
  }
  for (let e = 0, t = n.int(4, 8); e < t; e++) {
    let t = e < 4 ? 0 : 1,
      n = t ? e - 4 : e;
    ma(
      r,
      [1 + n * 0.1 + t * 0.05, 0.045 + t * 0.08, 1.05],
      [1 + n * 0.1 + t * 0.05, 0.045 + t * 0.08, 1.45],
      0.045,
    );
  }
  if (n.chance(0.45)) {
    let e = Me(new x(h + 0.6, 40).rotateX(-Q / 2), 1);
    I(r, e, q.peaGravel(), 0, 0.004, 0).castShadow = !1;
  }
  return (
    ha(r, i, h * 2 + 1, h * 2 + 1, e + 2, 90),
    R(r, { note: `${a}${o ? `, lit` : ``}` })
  );
}
