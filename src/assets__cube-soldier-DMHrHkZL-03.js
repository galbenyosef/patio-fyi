// assets__cube-soldier-DMHrHkZL 03 — vestdark
// Lines 651-790 of readable/assets__cube-soldier-DMHrHkZL.pretty.js (statement-aligned).
function Ie(e) {
  let t = [];
  if (e === `scarf`) {
    for (let e = 0; e < 8; e++) {
      let n = (e / 8) * Math.PI * 2,
        r = z(0.1, 0.08, 0.065, 0, 0, 0, e % 2 ? F.helmet : F.helmetRim);
      (r.rotateY(-n),
        r.translate(Math.sin(n) * 0.155, 0.575, Math.cos(n) * 0.13),
        t.push(r));
    }
    t.push(
      z(0.12, 0.19, 0.03, 0.05, 0.45, 0.17, F.helmet),
      ...[0, 1, 2].map((e) =>
        L(0.12, 0.008, 0.004, 0.05, 0.39 + e * 0.05, 0.187, F.vestDark),
      ),
      z(0.15, 0.11, 0.035, -0.02, 0.49, -0.185, F.helmet),
      ...[0, 1].map((e) =>
        L(0.13, 0.008, 0.004, -0.02, 0.47 + e * 0.04, -0.204, F.vestDark),
      ),
    );
  }
  if (
    (e === `radio` &&
      t.push(
        z(0.12, 0.17, 0.07, -0.13, 0.42, 0.175, F.vestDark),
        L(0.1, 0.02, 0.06, -0.13, 0.51, 0.175, F.weaponDark),
        L(0.008, 0.66, 0.008, -0.16, 0.84, 0.19, F.weaponDark, { rotZ: 0.1 }),
        L(0.016, 0.03, 0.016, -0.193, 1.17, 0.19, F.weaponDark),
        L(0.038, 0.075, 0.032, -0.155, 0.5, -0.185, F.weaponDark),
      ),
    e === `bandolier`)
  ) {
    t.push(
      L(0.055, 0.64, 0.014, -0.01, 0.31, -0.205, F.vestDark, { rotZ: -0.57 }),
      L(0.055, 0.6, 0.014, -0.01, 0.31, 0.2, F.vestDark, { rotZ: 0.57 }),
    );
    for (let e = 0; e < 9; e++) {
      let n = e / 8 - 0.5;
      t.push(
        L(
          0.03,
          0.042,
          0.022,
          -0.01 + n * 0.33,
          0.31 + n * 0.52,
          -0.214,
          e % 2 ? F.weaponWood : F.helmetRim,
          { rotZ: -0.57 },
        ),
      );
    }
  }
  return (
    e === `bedroll` &&
      t.push(
        Ne(0.062, 0.38, 0, 0.64, 0.17, F.uniformDark, `x`, 10),
        ...[-0.12, 0.12].map((e) =>
          Ne(0.066, 0.02, e, 0.64, 0.17, F.vestDark, `x`, 10),
        ),
        ...[-0.12, 0.12].map((e) =>
          L(0.018, 0.14, 0.012, e, 0.57, 0.21, F.vestDark),
        ),
      ),
    e === `knife` &&
      t.push(
        L(0.03, 0.16, 0.02, -0.15, 0.36, -0.198, F.boot, { rotZ: 0.15 }),
        L(0.022, 0.07, 0.022, -0.162, 0.47, -0.2, F.weaponWood, { rotZ: 0.15 }),
        L(0.04, 0.012, 0.03, -0.158, 0.435, -0.2, F.weaponDark),
        z(0.15, 0.13, 0.085, 0.13, 0.07, 0.165, F.vestDark),
        Ne(0.045, 0.105, -0.215, 0.09, 0.07, F.uniformDark, `y`, 10),
        Ne(0.02, 0.02, -0.215, 0.152, 0.07, F.weaponDark, `y`, 8),
      ),
    e === `admin` &&
      t.push(
        z(0.18, 0.13, 0.03, 0, 0.43, -0.21, F.vestDark),
        L(0.15, 0.09, 0.004, 0, 0.43, -0.227, F.helmetRim),
        Ne(0.019, 0.09, 0.13, 0.52, -0.2, F.weaponDark, `z`),
        L(0.026, 0.026, 0.006, 0.13, 0.52, -0.247, 14210240),
        ...[0, 1].map((e) =>
          L(0.012, 0.07, 0.012, -0.13 + e * 0.02, 0.47, -0.205, 9420890),
        ),
        L(0.07, 0.022, 0.006, 0.1, 0.46, -0.214, 0, { team: 1 }),
      ),
    e === `heavy` &&
      t.push(
        z(0.3, 0.06, 0.28, 0, 0.575, 0, F.vestDark, 0.95),
        ...[-1, 1].map((e) =>
          z(0.045, 0.21, 0.18, e * 0.22, 0.3, 0, F.vestDark),
        ),
        z(0.19, 0.14, 0.04, 0, -0.02, -0.16, F.vestDark, 0.9),
        L(0.12, 0.03, 0.006, 0, 0.03, -0.182, F.helmetRim),
      ),
    t.length ? R(t) : null
  );
}
function Le(e, t, n, r, i, a, o, s = !1) {
  let c = [];
  for (let u = 0; u < o; u++) {
    let o = s ? -1.3 + (((u * 53) % 97) / 97) * 2.6 : u * 2.399963,
      d = 0.88 + ((u * 7) % 11) * 0.012,
      f = r + Math.sin(o) * e * 0.5 * d,
      p = i + t * (((u * 37) % 101) / 101 - 0.5),
      m = a + Math.cos(o) * n * 0.5 * d,
      h = 0.026 + (u % 4) * 0.008,
      _ = 0.075 + (u % 5) * 0.016,
      v = new l();
    (v.setAttribute(
      `position`,
      new g(
        [
          -h,
          0,
          0,
          h,
          0,
          0,
          0,
          -_ * 0.45,
          0.025,
          h * 0.35,
          -_,
          0.014,
          -h * 0.5,
          -_ * 0.82,
          0.009,
        ],
        3,
      ),
    ),
      v.setIndex([
        0, 1, 2, 0, 2, 4, 2, 3, 4, 1, 3, 2, 2, 1, 0, 4, 2, 0, 4, 3, 2, 2, 3, 1,
      ]),
      v.rotateY(o),
      v.translate(f, p, m),
      v.computeVertexNormals(),
      I(v, [4740666, 6647882, 8749925, 3623219, 7568208][u % 5], 0, 1),
      c.push(v));
  }
  return R(c);
}
