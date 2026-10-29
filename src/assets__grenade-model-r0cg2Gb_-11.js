// assets__grenade-model-r0cg2Gb_ 11 — math
// Lines 26169-26496 of readable/assets__grenade-model-r0cg2Gb_.pretty.js (statement-aligned).
function rr(e, t = 1) {
  return e.meshes.map((n) => {
    let r = new d();
    return (
      r.setAttribute(`position`, new E(n.positions, 3)),
      r.setAttribute(`normal`, new E(n.normals, 3)),
      r.setIndex(n.indices),
      r.translate(-e.origin[0], -e.origin[1], -e.origin[2]),
      t !== 1 && r.scale(1, t, 1),
      { geometry: r, material: n.material }
    );
  });
}
function ir(e, t) {
  return Object.fromEntries(
    Object.entries(t.materials).map(([t, n]) => {
      let r = new o({
        name: `${e}_${t}`,
        color: new x().fromArray(n.color),
        roughness: n.roughness,
        metalness: n.metalness,
      });
      return ((r.userData.smoothNormals = !0), [t, r]);
    }),
  );
}
function ar(e, t, n) {
  for (let r of n ? [0, 0.033] : [0])
    for (let { geometry: n, material: i } of rr(nr.saker, t))
      e.mesh(n, i === `rubber` ? `rubber` : `magpoly`, 0, 0, r);
  return (
    n && e.rbox(`anod`, 0.008, -0.07, 0.0165, 0.03, 0.025, 0.065, 0.001),
    {}
  );
}
function or(e) {
  let t = nr[e];
  return function (n, r, i) {
    let a = ir(e, t);
    for (let e of i ? [0, 0.045] : [0])
      for (let { geometry: i, material: o } of rr(t, r))
        n.mesh(i, a[o], 0, 0, e);
    return {};
  };
}
var sr = Object.freeze(
  Object.fromEntries(
    Object.keys(nr)
      .filter((e) => e !== `saker`)
      .map((e) => [e, or(e)]),
  ),
);
function cr(e) {
  let { rbox: t, tube: n, slab: r, side: i, run: a, rr: o, loft: s, S: c } = e,
    l = e.g.familyStyle,
    u = l === `forward` ? 0.276 : l === `folding` ? 0.165 : 0.08,
    d = l === `forward` ? 0.012 : 0.003,
    f = l === `forward` ? 0.201 : l === `folding` ? 0.059 : 0.026,
    p = l === `forward` ? 0.303 : l === `folding` ? 0.193 : 0.144;
  (t(`inset`, (f + p) / 2, d, -0.0153, p - f, 0.003, 8e-4, 8e-4),
    t(
      `satin`,
      (f + p) / 2,
      d - 0.002,
      -0.0159,
      p - f - 0.002,
      8e-4,
      0.001,
      2e-4,
    ));
  let m = e.group(`bolt`);
  if (l === `forward`) {
    (n(`polyg`, u, d, -0.017, 0.0055, 0.003, `z`, 0.0055, 16),
      m.tube(`satin`, u, d, -0.023, 0.0025, 0.015, `z`, 0.0025, 12),
      m.tube(`poly`, u, d, -0.032, 0.0045, 0.012, `z`, 0.0045, 14));
    for (let e of [-0.028, -0.032, -0.036])
      m.tube(`satin`, u, d, e, 0.0046, 0.001, `z`, 0.0046, 14);
    (t(`satin`, 0.282, -0.043, 0, 0.043, 0.007, 0.027, 0.001),
      r(
        `poly`,
        [
          [0.267, -0.045],
          [0.296, -0.045],
          [0.296, -0.054],
          [0.292, -0.093],
          [0.294, -0.101],
          [0.267, -0.101],
          [0.27, -0.091],
          [0.27, -0.054],
        ],
        0.024,
        0,
        0.0025,
      ),
      i((e) => {
        for (let n = 0; n < 5; n++)
          t(
            `polyg`,
            0.282,
            -0.06 - n * 0.006,
            e * 0.0122,
            0.018,
            0.0013,
            8e-4,
            3e-4,
          );
      }),
      (c.familySupport = [0.28, -0.066, -0.017]),
      i((e) => {
        t(`satin`, 0.304, -0.007, e * 0.0163, 0.066, 0.007, 0.004, 6e-4);
        for (let n = 0.277; n < 0.332; n += 0.01)
          t(`satin`, n, -0.007, e * 0.019, 0.004, 0.01, 0.003, 6e-4);
      }));
  } else if (l === `folding`) {
    (m.tube(`satin`, u, d, -0.019, 0.0043, 0.009, `z`, 0.0043, 16),
      m.slab(
        `poly`,
        [
          [u - 0.027, d - 0.004],
          [u + 0.004, d - 0.004],
          [u + 0.008, d],
          [u + 0.004, d + 0.004],
          [u - 0.027, d + 0.004],
          [u - 0.03, d],
        ],
        0.006,
        -0.025,
        0.001,
      ));
    for (let e = 0; e < 3; e++)
      m.rbox(
        `satin`,
        u - 0.023 + e * 0.006,
        d,
        -0.0282,
        0.0013,
        0.005,
        8e-4,
        2e-4,
      );
    (t(`satin`, 0.281, -0.042, 0, 0.084, 0.005, 0.026, 8e-4),
      r(
        `poly`,
        [
          [0.239, -0.045],
          [0.323, -0.045],
          [0.327, -0.049],
          [0.309, -0.058],
          [0.255, -0.073],
          [0.241, -0.061],
        ],
        0.027,
        0,
        0.002,
      ),
      i((e) => {
        for (let n = 0; n < 5; n++)
          t(
            `polyg`,
            0.258 + n * 0.009,
            -0.065 + n * 0.0023,
            e * 0.0136,
            0.002,
            0.005,
            8e-4,
            2e-4,
          );
      }),
      (c.familySupport = [0.282, -0.051, -0.018]),
      i((e) => {
        for (let n of [0.249, 0.306])
          t(`satin`, n, -0.004, e * 0.0146, 0.029, 8e-4, 7e-4, 2e-4);
      }));
  } else {
    (m.rbox(`satin`, u, d, -0.0185, 0.012, 0.0035, 0.007, 7e-4),
      m.slab(
        `poly`,
        [
          [u - 0.008, d - 0.003],
          [u + 0.007, d - 0.003],
          [u + 0.009, d + 0.0015],
          [u + 0.005, d + 0.005],
          [u - 0.007, d + 0.005],
        ],
        0.005,
        -0.024,
        8e-4,
      ));
    for (let e = 0; e < 3; e++)
      m.rbox(
        `satin`,
        u - 0.005 + e * 0.004,
        d + 0.001,
        -0.0268,
        0.001,
        0.005,
        6e-4,
        2e-4,
      );
    (t(`satin`, 0.31, -0.042, 0, 0.067, 0.004, 0.026, 6e-4),
      r(
        `poly`,
        [
          [0.28, -0.044],
          [0.342, -0.044],
          [0.344, -0.068],
          [0.335, -0.071],
          [0.329, -0.053],
          [0.282, -0.051],
        ],
        0.026,
        0,
        0.0015,
      ),
      i((e) => {
        for (let n = 0; n < 4; n++)
          t(
            `polyg`,
            0.289 + n * 0.009,
            -0.05,
            e * 0.0132,
            0.002,
            0.002,
            8e-4,
            2e-4,
          );
      }),
      (c.familySupport = [0.309, -0.033, -0.018]),
      t(`poly`, 0.352, -0.008, 0, 0.008, 0.029, 0.031, 0.0012),
      i((e) =>
        n(`satin`, 0.352, -0.005, e * 0.0162, 0.0022, 0.0012, `z`, 0.0022, 12),
      ));
  }
  ((c.charging = [u, d, -0.029]), (c.authoredBolt = !0));
}
function lr(e, t, n = [], r = 0) {
  let i = new ce(e.map(([e, t]) => new y(e, t)));
  for (let e of n) i.holes.push(new M(e.map(([e, t]) => new y(e, t))));
  let a = Math.min(r, t * 0.3),
    o = new ie(i, {
      depth: t - 2 * a,
      bevelEnabled: a > 0,
      bevelThickness: a,
      bevelSize: a * 0.8,
      bevelSegments: 1,
      curveSegments: 6,
      steps: 1,
    });
  return (o.translate(0, 0, -t / 2 + a), o.rotateY(-Math.PI / 2), o);
}
function ur(e, t, n, r, i, a = 6) {
  let o = [],
    s = Math.max(2, Math.round((Math.abs(i - r) / (Math.PI / 2)) * a));
  for (let a = 0; a <= s; a++) {
    let c = r + ((i - r) * a) / s;
    o.push([e + n * Math.cos(c), t + n * Math.sin(c)]);
  }
  return o;
}
var dr = (e, t, n) => ur(e, t, n, 0, Math.PI * 2, 9).slice(0, -1),
  fr = (e, t, n) => dr(e, t, n).reverse();
function pr(e, t, n, r, i = 0, a = i) {
  let o = [];
  return (
    i
      ? o.push(
          ...ur(e + i, n + i, i, Math.PI, Math.PI * 1.5),
          ...ur(t - i, n + i, i, Math.PI * 1.5, Math.PI * 2),
        )
      : o.push([e, n], [t, n]),
    a
      ? o.push(
          ...ur(t - a, r - a, a, 0, Math.PI / 2),
          ...ur(e + a, r - a, a, Math.PI / 2, Math.PI),
        )
      : o.push([t, r], [e, r]),
    o
  );
}
function mr(e, t, n, r, i = `round`) {
  let a = t - e,
    o = Math.sign(a),
    s = Math.abs(a);
  if (i === `round`)
    return o > 0
      ? [[e, n], [t, n], ...ur((e + t) / 2, r - s / 2, s / 2, 0, Math.PI)]
      : [[t, n], [e, n], ...ur((e + t) / 2, r - s / 2, s / 2, 0, Math.PI)];
  let c = Math.min(s * 0.9, 0.003),
    l = Math.min(e, t),
    u = Math.max(e, t);
  return o > 0
    ? [
        [l, n],
        [u, n],
        [u, r - c],
        [l + s * 0.25, r],
        [l, r],
      ]
    : [
        [l, n],
        [u, n],
        [u, r],
        [u - s * 0.25, r],
        [l, r - c],
      ];
}
var hr = (e, t, n, r) => {
    let i = Math.max(e, t - 0.0025);
    return [
      [-n / 2, e],
      [n / 2, e],
      [r / 2, i],
      [r / 2, t],
      [-r / 2, t],
      [-r / 2, i],
    ];
  },
  gr = (e, t, n, r) => {
    let i = Math.abs(e),
      a = t / 2,
      o = [
        [i, n],
        [i + t * 1.5, n],
        [i + t, r - a],
        ...ur(i + a, r - a, a, 0, Math.PI, 4),
      ];
    return e < 0 ? o.map(([e, t]) => [-e, t]) : o;
  };
