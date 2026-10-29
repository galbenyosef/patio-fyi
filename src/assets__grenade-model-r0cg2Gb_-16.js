// assets__grenade-model-r0cg2Gb_ 16 — front
// Lines 27818-28040 of readable/assets__grenade-model-r0cg2Gb_.pretty.js (statement-aligned).
var zr = {
  ump: {
    rear: `leaf`,
    aperture: 0.0037,
    width: 0.008,
    ears: `cut`,
    front: `hood`,
    hood: 0.0061,
  },
  mpx: {
    rear: `ring`,
    aperture: 0.0035,
    width: 0.0065,
    ears: null,
    front: `fork`,
    knob: !0,
  },
  apc9: {
    rear: `leaf`,
    aperture: 0.0036,
    width: 0.0075,
    ears: null,
    front: `fork`,
  },
  mp9: { rear: `notch`, width: 0.007, ears: null, front: `fork` },
  scorpion: {
    rear: `leaf`,
    aperture: 0.0033,
    width: 0.007,
    ears: `cut`,
    front: `fork`,
  },
  stribog: { rear: `notch`, width: 0.0062, ears: null, front: `fork` },
  pmx: {
    rear: `ring`,
    aperture: 0.0036,
    width: 0.007,
    ears: null,
    front: `hood`,
    hood: 0.0058,
    knob: !0,
  },
  colt9: {
    rear: `ring`,
    aperture: 0.0034,
    width: 0.007,
    ears: `round`,
    front: `tower`,
    knob: !0,
  },
};
function Br(e, t, n, r, i, a) {
  let o = zr[t];
  if (!o) throw Error(`Unknown SMG sight ` + t);
  let { group: s, plate: c, S: l } = e,
    u = `satin`,
    d = s(`iron`, `rear`, [n, 0, 0]),
    f = s(`iron`, `front`, [r, 0, 0]);
  if (t === `ump`) {
    for (let e of [d, f])
      e.rbox(`polyg`, 0, i - 6e-4, 0, 0.009, 0.0036, 0.013, 5e-4);
    (d.rbox(u, 0, i + 0.001, 0, 0.009, 0.0016, 0.014, 4e-4),
      c(d, u, 0, hr(i + 0.0015, a - 0.0035, 0.005, 0.0034), 0.0024),
      c(
        d,
        u,
        0,
        pr(-0.0051, 0.0051, a - 0.004, a + 0.0038, 8e-4, 0.0015),
        0.0016,
        [fr(0, a, 0.0029)],
        2e-4,
        !0,
      ));
    for (let e of [-1, 1])
      (c(
        d,
        u,
        0,
        mr(e * 0.006, e * 0.0076, i + 8e-4, a + 0.0017, `cut`),
        0.006,
        [],
        2e-4,
      ),
        d.tube(
          `parker`,
          0,
          i + 0.003,
          e * 0.0078,
          0.0016,
          0.001,
          `z`,
          0.0016,
          12,
        ));
    f.rbox(u, 0, i + 0.001, 0, 0.008, 0.0016, 0.012, 4e-4);
    let e = c(f, u, 0, hr(i + 0.0015, a, 0.0024, 0.0011), 0.002, [], 15e-5, !0);
    ((e.userData.ironPost = !0),
      c(f, u, 0, dr(0, a, 0.0057), 0.0035, [fr(0, a, 0.00505)], 18e-5, !0),
      (l.irons = { eye: [n - 0.0016, a, 0], rear: n, front: r, authored: !0 }));
    return;
  }
  if (
    (d.rbox(u, 0, i + 0.001, 0, 0.011, 0.002, 0.018, 6e-4), o.rear === `notch`)
  ) {
    let e = o.width,
      t = 0.0029,
      n = a - 0.004;
    c(
      d,
      u,
      0,
      [
        [-e, i + 0.001],
        [e, i + 0.001],
        [e, a],
        [t, a],
        [t, n],
        [-0.0029, n],
        [-0.0029, a],
        [-e, a],
      ],
      0.0032,
      [],
      2e-4,
      !0,
    );
  } else {
    let e = o.aperture + 85e-5;
    (c(
      d,
      u,
      0,
      o.rear === `leaf`
        ? pr(-o.width, o.width, i + 0.0015, a + e, 0.001, 0.003)
        : dr(0, a, e),
      0.0024,
      [fr(0, a, o.aperture)],
      25e-5,
      !0,
    ),
      o.rear === `ring` &&
        a - e > i + 0.0015 &&
        c(d, u, 0, hr(i + 0.0015, a - e + 4e-4, 0.006, 0.0038), 0.003));
  }
  if (o.ears)
    for (let e of [-1, 1])
      c(
        d,
        u,
        0,
        mr(e * 0.0077, e * 0.0091, i + 0.001, a + 0.0017, o.ears),
        0.006,
        [],
        2e-4,
      );
  (o.knob &&
    (d.tube(u, 0, i + 0.0035, 0.01, 0.0026, 0.003, `z`, 0.0026, 14),
    d.tube(`parker`, 0, i + 0.0035, 0.0117, 0.0012, 5e-4, `z`, 0.0012, 10)),
    o.front === `tower`
      ? c(
          f,
          `paint`,
          0,
          [
            [-0.01, 0.003],
            [0.01, 0.003],
            [0.005, a - 0.004],
            [-0.005, a - 0.004],
          ],
          0.01,
          [
            [
              [-0.005, 0.008],
              [0.005, 0.008],
              [0.002, a - 0.009],
              [-0.002, a - 0.009],
            ],
          ],
          4e-4,
        )
      : f.rbox(u, 0, i + 0.001, 0, 0.01, 0.002, 0.017, 6e-4));
  let p = c(
    f,
    u,
    0,
    hr(o.front === `tower` ? a - 0.006 : i + 0.0015, a, 0.0031, 0.0015),
    0.0025,
    [],
    2e-4,
    !0,
  );
  if (((p.userData.ironPost = !0), o.front === `hood`))
    c(f, u, 0, dr(0, a, o.hood), 0.0045, [fr(0, a, o.hood - 7e-4)], 2e-4, !0);
  else {
    let e = o.front === `tower` ? a - 0.006 : i + 0.0015;
    for (let n of [-1, 1])
      c(
        f,
        u,
        0,
        mr(
          n * 0.0059,
          n * 0.0072,
          e,
          a + 0.0023,
          t === `scorpion` ? `cut` : `round`,
        ),
        0.0045,
        [],
        2e-4,
      );
  }
  l.irons = { eye: [n - 0.0016, a, 0], rear: n, front: r, authored: !0 };
}
Object.freeze([
  `sm-ump9-classic`,
  `sm-mp5a2-classic`,
  `sm-mpx`,
  `sm-apc9`,
  `sm-stribog`,
  `sm-pmx`,
  `sm-colt9`,
]);
