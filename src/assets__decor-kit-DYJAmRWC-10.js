// assets__decor-kit-DYJAmRWC 10 — pick
// Lines 2747-3046 of readable/assets__decor-kit-DYJAmRWC.pretty.js (statement-aligned).
function nt(t) {
  let r = x(t),
    i = new f(),
    a = r.pick([`spindle`, `ladder`, `parsons`, `bentwood`, `metal`, `shaker`]),
    o = K(r),
    s = U(r.pick(oe), 0.95),
    c = 0.46,
    l = 0.44,
    u = 0.46;
  if (a === `parsons`) {
    for (let e of [-1, 1])
      for (let t of [-1, 1])
        z(i, 0.04, 0.38, 0.04, o, e * (l / 2 - 0.03), 0, t * (u / 2 - 0.03));
    (S(i, l, 0.1, u, 0.03, s, 0, 0.36, 0),
      S(i, l, 0.5, 0.08, 0.03, s, 0, c, -0.19));
  } else if (a === `metal`) {
    let e = r.pick([
      U(2039586, 0.5, 0.6),
      U(11745850, 0.4, 0.5),
      U(15329249, 0.4, 0.5),
      U(2976335, 0.4, 0.5),
    ]);
    for (let t of [-1, 1])
      for (let n of [-1, 1])
        z(
          i,
          0.025,
          c,
          0.025,
          e,
          t * (l / 2 - 0.03),
          0,
          n * (u / 2 - 0.03),
        ).rotation.set(n * 0.05, 0, -t * 0.05);
    z(i, l, 0.025, u, e, 0, 0.435, 0);
    let t = z(i, l, 0.3, 0.02, e, 0, 0.56, -0.22);
    t.rotation.x = -0.08;
    for (let e = 0; e < 4; e++)
      z(
        i,
        0.38,
        0.01,
        0.001,
        U(0, 1),
        0,
        0.6000000000000001 + e * 0.05,
        -0.46 / 2 + 0.025,
      );
  } else {
    let t = o;
    if (a === `bentwood`) {
      for (let e of [-1, 1])
        for (let n of [-1, 1])
          L(
            i,
            0.015,
            0.012,
            c,
            t,
            e * (l / 2 - 0.05),
            0,
            n * (u / 2 - 0.05),
            10,
          );
      let r = new e(new n(0.17, 0.008, 6, 24), t);
      ((r.rotation.x = Math.PI / 2), (r.position.y = 0.18), i.add(r));
    } else
      for (let e of [-1, 1])
        for (let n of [-1, 1])
          z(
            i,
            0.035,
            0.43000000000000005,
            0.035,
            t,
            e * (l / 2 - 0.03),
            0,
            n * (u / 2 - 0.03),
          );
    if (a !== `bentwood`)
      for (let e of [-1, 1])
        z(i, 0.02, 0.02, 0.4, t, e * (l / 2 - 0.03), 0.15, 0);
    (a === `bentwood`
      ? L(i, 0.21, 0.21, 0.03, t, 0, 0.43000000000000005, 0, 28)
      : S(i, l, 0.035, u, 0.01, t, 0, 0.42500000000000004, 0),
      r.chance(0.4) && S(i, 0.4, 0.04, 0.4, 0.018, s, 0, c, 0.01));
    for (let e of [-1, 1]) {
      let n = z(i, 0.035, 0.44, 0.035, t, e * (l / 2 - 0.03), c, -0.2);
      n.rotation.x = -0.1;
    }
    if (a === `spindle`) {
      z(i, 0.42, 0.06, 0.03, t, 0, 0.9 - 0.06, -0.225);
      for (let e = 0; e < 5; e++)
        L(
          i,
          0.008,
          0.008,
          0.36,
          t,
          -0.13 + (e * 0.26) / 4,
          c,
          -0.46 / 2 + 0.02,
          8,
        );
    } else if (a === `ladder`)
      for (let e = 0; e < 3; e++)
        z(i, 0.38, 0.05, 0.02, t, 0, 0.5900000000000001 + e * 0.1, -0.22);
    else if (a === `shaker`) {
      z(i, 0.38, 0.1, 0.02, t, 0, 0.76, -0.22);
      for (let e = 0; e < 3; e++)
        z(i, 0.04, 0.26, 0.015, t, (e - 1) * 0.1, 0.5, -0.22);
    } else A(i, 0.42, 0.2, 0.02, 0.01, t, 0, 0.78, -0.22);
  }
  return F(i, { note: a });
}
function rt(e) {
  let t = x(e),
    n = new f(),
    r = t.pick([`wood`, `glass`, `round`, `trunk`, `marble`]),
    i = t.range(0.38, 0.46),
    a = K(t);
  if (r === `round` || r === `marble`) {
    let e = t.range(0.4, 0.5),
      o = r === `marble` ? U(15526630, 0.2) : a;
    if ((L(n, e, e, 0.04, o, 0, i - 0.04, 0, 40), t.chance(0.5)))
      L(
        n,
        0.12,
        0.2,
        i - 0.04,
        r === `marble` ? U(12095807, 0.3, 0.9) : a,
        0,
        0,
        0,
        24,
      );
    else
      for (let t = 0; t < 3; t++) {
        let r = (t / 3) * Math.PI * 2;
        C(
          n,
          [Math.cos(r) * e * 0.6, 0, Math.sin(r) * e * 0.6],
          [Math.cos(r) * e * 0.4, i - 0.04, Math.sin(r) * e * 0.4],
          0.018,
          a,
        );
      }
  } else if (r === `glass`) {
    let e = t.range(1, 1.3),
      r = 0.6,
      a = t.pick([k(), E(), U(12095807, 0.3, 0.9)]);
    z(n, e, 0.012, r, T(14282480, 0.3), 0, i - 0.012, 0);
    for (let t of [-1, 1])
      (C(
        n,
        [t * (e / 2 - 0.05), 0, -0.25],
        [t * (e / 2 - 0.05), i - 0.012, -0.25],
        0.012,
        a,
      ),
        C(
          n,
          [t * (e / 2 - 0.05), 0, r / 2 - 0.05],
          [t * (e / 2 - 0.05), i - 0.012, r / 2 - 0.05],
          0.012,
          a,
        ),
        C(
          n,
          [t * (e / 2 - 0.05), 0.01, -0.25],
          [t * (e / 2 - 0.05), 0.01, r / 2 - 0.05],
          0.012,
          a,
        ));
    z(n, e - 0.1, 0.01, 0.5, T(14282480, 0.3), 0, 0.1, 0);
  } else if (r === `trunk`) {
    S(
      n,
      1,
      i,
      0.55,
      0.01,
      U(t.pick([7031350, 3811874, 9071178]), 0.75),
      0,
      0,
      0,
    );
    for (let e of [-0.35, 0.35])
      z(n, 0.04, i + 0.004, 0.554, U(2763306, 0.4, 0.8), e, -0.002, 0);
    B(n, 0.08, 0.06, 0.01, U(12095807, 0.3, 0.9), 0, i - 0.08, 0.28);
  } else {
    let e = t.range(1, 1.3),
      r = t.range(0.55, 0.65);
    (z(n, e, 0.04, r, a, 0, i - 0.04, 0),
      q(
        n,
        t,
        e,
        r,
        i - 0.04,
        t.pick([`block`, `taper`, `round`, `metal`]),
        a,
        0.06,
      ),
      t.chance(0.6) && z(n, e - 0.12, 0.02, r - 0.12, a, 0, 0.12, 0));
  }
  let o = i + 0;
  if (t.chance(0.7)) {
    let e = new f();
    (e.position.set(t.range(-0.3, 0), o, t.range(-0.1, 0.1)),
      (e.rotation.y = t.range(-0.3, 0.3)),
      n.add(e));
    let r = 0;
    for (let n = 0; n < t.int(1, 3); n++) {
      let n = t.range(0.02, 0.035);
      (z(
        e,
        t.range(0.22, 0.3),
        n,
        t.range(0.28, 0.34),
        U(t.pick([15328472, 2899536, 10697515, 3889722, 2039586]), 0.7),
        0,
        r,
        0,
      ),
        (r += n));
    }
  }
  return (
    t.chance(0.5) && L(n, 0.05, 0.05, 0.1, U(15986402, 0.7), 0.25, o, 0),
    t.chance(0.4) &&
      (A(
        n,
        0.05,
        0.02,
        0.18,
        0.008,
        w(2039586),
        -0.1,
        o + 0.01,
        0.15,
      ).rotation.y = 0.4),
    F(n, { note: r })
  );
}
function it(e) {
  let t = x(e),
    n = new f(),
    r = t.pick([`nightstand`, `drum`, `cside`, `tripod`]),
    i = K(t);
  if (r === `nightstand`) {
    let e = 0.5,
      r = 0.4;
    (q(n, t, e, r, 0.12, t.pick([`taper`, `block`, `round`]), i, 0.04),
      z(n, e, 0.45999999999999996, r, i, 0, 0.12, 0));
    for (let e = 0; e < 2; e++)
      (z(n, 0.46, 0.2, 0.01, i, 0, 0.14 + e * 0.22, r / 2),
        B(
          n,
          0.1,
          0.015,
          0.02,
          t.pick([k(), U(12095807, 0.3, 0.9)]),
          0,
          0.24 + e * 0.22,
          0.21500000000000002,
        ));
  } else if (r === `drum`)
    (L(n, 0.24, 0.24, 0.5, U(t.pick(I), 0.25), 0, 0, 0, 32),
      L(
        n,
        0.24,
        0.24,
        0.02,
        t.pick([U(12095807, 0.3, 0.9), i]),
        0,
        0.5,
        0,
        32,
      ));
  else if (r === `cside`) {
    let e = t.pick([E(), U(12095807, 0.3, 0.9), k()]);
    (z(n, 0.4, 0.015, 0.35, e, 0, 0, 0),
      z(n, 0.015, 0.6, 0.35, e, -0.19, 0, 0),
      L(n, 0.2, 0.2, 0.02, i, 0.03, 0.6, 0, 28));
  } else {
    L(n, 0.25, 0.25, 0.03, i, 0, 0.55, 0, 28);
    for (let e = 0; e < 3; e++) {
      let t = (e / 3) * Math.PI * 2;
      C(
        n,
        [Math.cos(t) * 0.25, 0, Math.sin(t) * 0.25],
        [Math.cos(t) * 0.12, 0.55, Math.sin(t) * 0.12],
        0.014,
        i,
      );
    }
  }
  return F(n, { note: r });
}
