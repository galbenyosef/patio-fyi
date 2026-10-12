// assets__cube-soldier-BRpW8Tqo 03 — vestdark
// Lines 649-788 of readable/assets__cube-soldier-BRpW8Tqo.pretty.js (statement-aligned).
function Pe(e) {
  let t = [];
  if (e === `scarf`) {
    for (let e = 0; e < 8; e++) {
      let n = (e / 8) * Math.PI * 2,
        r = R(0.1, 0.08, 0.065, 0, 0, 0, e % 2 ? P.helmet : P.helmetRim);
      (r.rotateY(-n),
        r.translate(Math.sin(n) * 0.155, 0.575, Math.cos(n) * 0.13),
        t.push(r));
    }
    t.push(
      R(0.12, 0.19, 0.03, 0.05, 0.45, 0.17, P.helmet),
      ...[0, 1, 2].map((e) =>
        I(0.12, 0.008, 0.004, 0.05, 0.39 + e * 0.05, 0.187, P.vestDark),
      ),
      R(0.15, 0.11, 0.035, -0.02, 0.49, -0.185, P.helmet),
      ...[0, 1].map((e) =>
        I(0.13, 0.008, 0.004, -0.02, 0.47 + e * 0.04, -0.204, P.vestDark),
      ),
    );
  }
  if (
    (e === `radio` &&
      t.push(
        R(0.12, 0.17, 0.07, -0.13, 0.42, 0.175, P.vestDark),
        I(0.1, 0.02, 0.06, -0.13, 0.51, 0.175, P.weaponDark),
        I(0.008, 0.66, 0.008, -0.16, 0.84, 0.19, P.weaponDark, { rotZ: 0.1 }),
        I(0.016, 0.03, 0.016, -0.193, 1.17, 0.19, P.weaponDark),
        I(0.038, 0.075, 0.032, -0.155, 0.5, -0.185, P.weaponDark),
      ),
    e === `bandolier`)
  ) {
    t.push(
      I(0.055, 0.64, 0.014, -0.01, 0.31, -0.205, P.vestDark, { rotZ: -0.57 }),
      I(0.055, 0.6, 0.014, -0.01, 0.31, 0.2, P.vestDark, { rotZ: 0.57 }),
    );
    for (let e = 0; e < 9; e++) {
      let n = e / 8 - 0.5;
      t.push(
        I(
          0.03,
          0.042,
          0.022,
          -0.01 + n * 0.33,
          0.31 + n * 0.52,
          -0.214,
          e % 2 ? P.weaponWood : P.helmetRim,
          { rotZ: -0.57 },
        ),
      );
    }
  }
  return (
    e === `bedroll` &&
      t.push(
        je(0.062, 0.38, 0, 0.64, 0.17, P.uniformDark, `x`, 10),
        ...[-0.12, 0.12].map((e) =>
          je(0.066, 0.02, e, 0.64, 0.17, P.vestDark, `x`, 10),
        ),
        ...[-0.12, 0.12].map((e) =>
          I(0.018, 0.14, 0.012, e, 0.57, 0.21, P.vestDark),
        ),
      ),
    e === `knife` &&
      t.push(
        I(0.03, 0.16, 0.02, -0.15, 0.36, -0.198, P.boot, { rotZ: 0.15 }),
        I(0.022, 0.07, 0.022, -0.162, 0.47, -0.2, P.weaponWood, { rotZ: 0.15 }),
        I(0.04, 0.012, 0.03, -0.158, 0.435, -0.2, P.weaponDark),
        R(0.15, 0.13, 0.085, 0.13, 0.07, 0.165, P.vestDark),
        je(0.045, 0.105, -0.215, 0.09, 0.07, P.uniformDark, `y`, 10),
        je(0.02, 0.02, -0.215, 0.152, 0.07, P.weaponDark, `y`, 8),
      ),
    e === `admin` &&
      t.push(
        R(0.18, 0.13, 0.03, 0, 0.43, -0.21, P.vestDark),
        I(0.15, 0.09, 0.004, 0, 0.43, -0.227, P.helmetRim),
        je(0.019, 0.09, 0.13, 0.52, -0.2, P.weaponDark, `z`),
        I(0.026, 0.026, 0.006, 0.13, 0.52, -0.247, 14210240),
        ...[0, 1].map((e) =>
          I(0.012, 0.07, 0.012, -0.13 + e * 0.02, 0.47, -0.205, 9420890),
        ),
        I(0.07, 0.022, 0.006, 0.1, 0.46, -0.214, 0, { team: 1 }),
      ),
    e === `heavy` &&
      t.push(
        R(0.3, 0.06, 0.28, 0, 0.575, 0, P.vestDark, 0.95),
        ...[-1, 1].map((e) =>
          R(0.045, 0.21, 0.18, e * 0.22, 0.3, 0, P.vestDark),
        ),
        R(0.19, 0.14, 0.04, 0, -0.02, -0.16, P.vestDark, 0.9),
        I(0.12, 0.03, 0.006, 0, 0.03, -0.182, P.helmetRim),
      ),
    t.length ? L(t) : null
  );
}
function Fe(e, t, n, r, i, a, o, s = !1) {
  let l = [];
  for (let u = 0; u < o; u++) {
    let o = s ? -1.3 + (((u * 53) % 97) / 97) * 2.6 : u * 2.399963,
      d = 0.88 + ((u * 7) % 11) * 0.012,
      f = r + Math.sin(o) * e * 0.5 * d,
      p = i + t * (((u * 37) % 101) / 101 - 0.5),
      m = a + Math.cos(o) * n * 0.5 * d,
      h = 0.026 + (u % 4) * 0.008,
      g = 0.075 + (u % 5) * 0.016,
      _ = new c();
    (_.setAttribute(
      `position`,
      new D(
        [
          -h,
          0,
          0,
          h,
          0,
          0,
          0,
          -g * 0.45,
          0.025,
          h * 0.35,
          -g,
          0.014,
          -h * 0.5,
          -g * 0.82,
          0.009,
        ],
        3,
      ),
    ),
      _.setIndex([
        0, 1, 2, 0, 2, 4, 2, 3, 4, 1, 3, 2, 2, 1, 0, 4, 2, 0, 4, 3, 2, 2, 3, 1,
      ]),
      _.rotateY(o),
      _.translate(f, p, m),
      _.computeVertexNormals(),
      F(_, [4740666, 6647882, 8749925, 3623219, 7568208][u % 5], 0, 1),
      l.push(_));
  }
  return L(l);
}
