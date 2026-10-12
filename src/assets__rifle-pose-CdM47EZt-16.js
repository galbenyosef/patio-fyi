// assets__rifle-pose-CdM47EZt 16 — math
// Lines 27572-27697 of readable/assets__rifle-pose-CdM47EZt.pretty.js (statement-aligned).
var Wn = () =>
  Object.assign(
    new b({
      color: 11981130,
      emissive: 2371594,
      metalness: 0.1,
      roughness: 0.15,
    }),
    { name: `kit_vial` },
  );
function Gn(e, t, n, r, i, a, { front: o = `cap`, level: s = !1 } = {}) {
  let { lathe: c, tube: l, rbox: u } = e,
    d = 0.0232,
    f = a ? 0.0318 : 0.0188,
    p = (e, n, r, i) => {
      let a = t.length,
        o = new w().setFromAxisAngle(r, i),
        s = new L(...n);
      e();
      for (let e of t.slice(a))
        (e.position.applyQuaternion(o).add(s), e.quaternion.premultiply(o));
    };
  if (
    (c(
      `rubber`,
      r - 0.004,
      n,
      0,
      [
        [0, 0.0214],
        [0, d],
        [0.013, d],
        [0.013, 0.0214],
      ],
      `x`,
    ),
    p(
      () => {
        (l(
          `rubber`,
          0,
          0,
          -0.0232,
          0.023799999999999998,
          0.003,
          `x`,
          0.023799999999999998,
          20,
        ),
          u(`rubber`, 0, 0, -2 * d - 0.004, 0.003, 0.008, 0.008, 8e-4),
          l(`rubber`, 0.002, 0, 0, 0.0024, 0.009, `y`, 0.0024, 8));
      },
      [r - 0.0055, n, 0.024399999999999998],
      new L(0, 1, 0),
      1.95,
    ),
    o === `ard`)
  ) {
    let e = f + 2e-4,
      t = a ? 0.03 : 0.024,
      r = a ? 6 : 5;
    c(
      `anod`,
      i - 0.002,
      n,
      0,
      [
        [0, e - 0.0016],
        [0, e],
        [t, e],
        [t, e - 0.0016],
      ],
      `x`,
    );
    for (let a = 1; a < r; a++) {
      let o = -e + (a * 2 * e) / r,
        s = Math.sqrt(Math.max(0, e * e - o * o)) - 6e-4;
      (u(`anod`, i + t - 0.007, n + o, 0, 0.009, 6e-4, s * 2, 0),
        u(`anod`, i + t - 0.007, n, o, 0.009, s * 2, 6e-4, 0));
    }
  } else
    (c(
      `rubber`,
      i - 0.012,
      n,
      0,
      [
        [0, f - 0.0016],
        [0, f],
        [0.0145, f],
        [0.0145, f - 0.0016],
      ],
      `x`,
    ),
      p(
        () => {
          (l(`rubber`, 0, -f, 0, f + 6e-4, 0.003, `x`, f + 6e-4, 20),
            u(`rubber`, 0, -2 * f - 0.004, 0, 0.003, 0.008, 0.008, 8e-4),
            l(`rubber`, -0.002, 0, 0, 0.0024, 0.01, `z`, 0.0024, 8));
        },
        [i + 0.004, n + f + 0.0012],
        new L(0, 0, 1),
        1.83,
      ));
  if (s) {
    let e = a ? -0.08 : -0.062,
      t = a ? 0.0172 : 0.015;
    (c(
      `anod`,
      e - 0.004,
      n,
      0,
      [
        [0, t],
        [0, t + 0.0022],
        [0.008, t + 0.0022],
        [0.008, t],
      ],
      `x`,
    ),
      u(`anod`, e, n, -(t + 0.0045), 0.014, 0.007, 0.005, 8e-4),
      l(Wn(), e, n + 4e-4, -(t + 0.0072), 0.0018, 0.011, `x`, 0.0018, 8));
    for (let r of [-0.0015, 0.0015])
      u(`inset`, e + r, n + 0.0023, -(t + 0.0072), 3e-4, 6e-4, 0.0012, 0);
  }
}
