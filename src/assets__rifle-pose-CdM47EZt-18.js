// assets__rifle-pose-CdM47EZt 18 — rbox
// Lines 28024-28148 of readable/assets__rifle-pose-CdM47EZt.pretty.js (statement-aligned).
function Yn(e, t, n, r = 1) {
  let i = t.radius * r,
    a = new re();
  for (let e = 0; e < 80; e++) {
    let t = (e * Math.PI * 2) / 80,
      n = i * (1 - 0.1 * (0.5 + 0.5 * Math.cos(t * 8)) ** 4),
      r = Math.cos(t) * n,
      o = Math.sin(t) * n;
    e ? a.lineTo(r, o) : a.moveTo(r, o);
  }
  return (
    a.closePath(),
    qn(e, `steel`, a, 0.013, Math.max(0.002, n - 0.036), 25e-5),
    e.lathe(
      `steel`,
      0,
      0,
      0,
      [
        [0, i],
        [0.016, i],
      ],
      `x`,
    ),
    e.lathe(
      `steel`,
      n - 0.026,
      0,
      0,
      [
        [0, i],
        [0.012, i],
        [0.015, t.radius * 0.82],
        [0.026, t.radius * 0.82],
        [0.026, 5e-4],
      ],
      `x`,
    ),
    { tip: [n, 0, 0] }
  );
}
function Xn(e, t = 1, n = !1) {
  let r = 0.078 * t,
    i = 0.106;
  for (let t of n ? [0, 0.035] : [0]) {
    (e.slab(
      `steel`,
      [
        [-0.106 / 2, 0],
        [i / 2, 0],
        [i / 2 - 0.002, -r + 0.004],
        [i / 2 - 0.006, -r],
        [-0.049, -r],
      ],
      0.029,
      t,
      8e-4,
    ),
      e.rbox(
        `anod`,
        0,
        -r - 0.001,
        t,
        0.108,
        0.003,
        0.030500000000000003,
        45e-5,
      ));
    for (let n of [-1, 1]) {
      let i = t + n * 0.0149;
      (e.rbox(`anod`, -0.034, -r * 0.51, i, 0.004, r * 0.69, 7e-4, 25e-5),
        e.rbox(`anod`, 0.034, -r * 0.51, i, 0.004, r * 0.69, 7e-4, 25e-5),
        e.rbox(`inset`, 0, -r * 0.22, i, 0.023, 0.001, 35e-5, 1e-4));
      for (let t = 0; t < 3; t++)
        e.tube(
          `anod`,
          -0.015 + t * 0.015,
          -r * 0.82,
          i,
          0.0013,
          6e-4,
          `z`,
          0.0013,
          8,
        );
    }
  }
  return (
    n && e.rbox(`anod`, 0, -r * 0.38, 0.035 / 2, 0.023, 0.021, 0.066, 6e-4),
    {}
  );
}
var Zn = (e, t) => ({ slot: `optic`, name: e, build: t }),
  G = (e, t, n) => ({ slot: e, name: t, build: n }),
  Qn = 0.04;
function $n(e, t) {
  let { rbox: n, tube: r, lathe: i, ring: a, see: o } = e;
  if (
    (n(`anod`, 0, 0.004, 0, 0.034, 0.008, 0.026, 0.0012),
    n(`anod`, 0, 0.004, 0.016, 0.012, 0.006, 0.008, 0.0015),
    n(`anod`, 0, (t - 0.022) / 2 + 0.006, 0, 0.02, t - 0.022, 0.019, 0.002),
    i(
      `anod`,
      -0.026,
      t,
      0,
      [
        [0, 0.0158],
        [0.004, 0.0164],
        [0.048, 0.0164],
        [0.052, 0.0158],
      ],
      `x`,
    ),
    !o)
  )
    for (let e of [-0.024, 0.024]) a(`rubber`, e, t, 0, 0.0158, 0.0016);
  return (
    r(`glass`, 0.0255, t, 0, 0.0132, 0.001, `x`, 0.0132, 20),
    r(`glass`, -0.0255, t, 0, 0.0132, 0.001, `x`, 0.0132, 20),
    r(`anod`, 0.003, t + 0.017, 0, 0.0068, 0.009, `y`, 0.0068, 16),
    r(`anod`, 0.003, t, 0.0172, 0.0068, 0.009, `z`, 0.0068, 16),
    { eye: [0, t, 0], footprint: [-0.017, 0.017] }
  );
}
