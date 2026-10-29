// assets__grenade-model-r0cg2Gb_ 27 — math
// Lines 31743-32068 of readable/assets__grenade-model-r0cg2Gb_.pretty.js (statement-aligned).
function Ai(e, t = !1) {
  let n = [],
    r = new Set(),
    i = { ...e };
  for (let t of [`mesh`, `rbox`, `tube`, `lathe`, `beam`])
    i[t] = (...r) => {
      let i = e[t](...r);
      return (n.push(i), i);
    };
  let { rbox: a, tube: o, lathe: s, mesh: l, beam: u } = i,
    d = t ? 0.05 : 0.042,
    f = t ? -0.17 : -0.14,
    p = t ? 0.21 : 0.12,
    m = t ? 0.0172 : 0.015,
    h = t ? 0.065 : 0.05,
    _ = e.SEG >= 20,
    v = _ ? 24 : 16;
  a(`anod`, 0, 0.004, 0, h * 2, 0.008, 0.022, 8e-4);
  for (let e of t ? [-0.045, 0.055] : [-0.03, 0.04]) {
    a(`anod`, e, 0.009, 0, 0.018, 0.008, 0.023, 8e-4);
    for (let t of [-1, 1])
      (a(`anod`, e, 0.004, t * 0.013, 0.018, 0.007, 0.004, 5e-4),
        o(`steel`, e, 0.005, t * 0.016, 0.0033, 0.003, `z`, 0.0033, 6),
        a(`inset`, e, 0.005, t * 0.0176, 0.0031, 65e-5, 2e-4, 0));
    let n = d - m - 0.003;
    a(`anod`, e, (0.012 + n) / 2, 0, 0.015, n - 0.012, 0.017, 0.001);
    let r = t ? 0.014 : 0.012,
      i = m + 0.003,
      s = [
        [-r / 2, m + 15e-5],
        [-r / 2, i],
        [r / 2, i],
        [r / 2, m + 15e-5],
        [-r / 2, m + 15e-5],
      ];
    for (let t of [0.045, Math.PI + 0.045]) {
      let n = new g(
        s.map(([e, t]) => new y(t, e)),
        _ ? 14 : 9,
        t,
        Math.PI - 0.09,
      );
      l(n, `anod`, e, d, 0).rotation.z = -Math.PI / 2;
    }
    for (let t of [-1, 1]) {
      for (let n of [-1, 1])
        a(`anod`, e, d + n * 0.002, t * (m + 0.002), r, 0.003, 0.008, 3e-4);
      for (let n of [-0.0035, 0.0035])
        (o(
          `steel`,
          e + n,
          d + 0.004,
          t * (m + 0.004),
          0.0017,
          0.001,
          `y`,
          0.0017,
          8,
        ),
          a(
            `inset`,
            e + n,
            d + 0.00455,
            t * (m + 0.004),
            0.0015,
            15e-5,
            5e-4,
            0,
          ));
    }
  }
  s(
    `anod`,
    f,
    d,
    0,
    t
      ? [
          [0, 0.019],
          [0, 0.0216],
          [0.004, 0.022],
          [0.028, 0.022],
          [0.032, 0.021],
          [0.053, 0.021],
          [0.075, m],
          [0.262, m],
          [0.282, 0.022],
          [0.321, 0.0305],
          [0.374, 0.0305],
          [0.38, 0.03],
          [0.38, 0.0283],
        ]
      : [
          [0, 0.019],
          [0, 0.0216],
          [0.004, 0.022],
          [0.027, 0.022],
          [0.031, 0.0206],
          [0.05, 0.0206],
          [0.066, m],
          [0.215, m],
          [0.236, 0.0175],
          [0.256, 0.0175],
          [0.26, 0.017],
          [0.26, 0.016],
        ],
    `x`,
  );
  let b = (e, t, n) => r.add(o(`glass`, e, d, 0, t, 0.001, `x`, t, n));
  (b(f - 5e-4, 0.019, 20), b(p - 5e-4, t ? 0.03 : 0.016, t ? 24 : 20));
  function x(e, t, n, r, i = !1) {
    if (
      (s(
        `anod`,
        e - t / 2,
        d,
        0,
        [
          [0, r],
          [0, n - 6e-4],
          [0.001, n],
          [t - 0.001, n],
          [t, n - 6e-4],
          [t, r],
        ],
        `x`,
      ),
      i)
    )
      for (let r = 0; r < v; r++) {
        let i = (r * Math.PI * 2) / v;
        a(
          `rubber`,
          e,
          d + Math.cos(i) * n,
          Math.sin(i) * n,
          t * 0.74,
          7e-4,
          0.00125,
          0,
        ).rotation.x = i;
      }
  }
  x(f + 0.012, 0.017, 0.02245, 0.0208, !0);
  let S = t ? -0.111 : -0.089,
    C = t ? 0.0216 : 0.021;
  (x(S, t ? 0.022 : 0.017, C, t ? 0.019 : 0.0178, !0),
    x(p - 0.003, 0.005, t ? 0.031 : 0.0179, t ? 0.0283 : 0.016));
  let w = -0.62,
    T = (e) => [S, d + Math.cos(w) * e, Math.sin(w) * e];
  (u(`anod`, T(C), T(C + 0.01), 0.0017),
    o(`rubber`, ...T(C + 0.01), 0.003, 0.005, `x`, 0.003, 10));
  for (let e = 0; e < 7; e++) {
    let n = -0.9 + e * 0.3;
    a(
      `bright`,
      S + (t ? 0.013 : 0.0105),
      d + Math.cos(n) * (C - 0.0014),
      Math.sin(n) * (C - 0.0014),
      0.0026,
      25e-5,
      e % 3 ? 5e-4 : 85e-5,
      0,
    ).rotation.x = n;
  }
  function E(e, t, r, i, s = !0) {
    let l = n.length,
      u = new k().setFromAxisAngle(new c(1, 0, 0), (i * Math.PI) / 2);
    (o(`anod`, 0, 0.0015, 0, t * 0.83, 0.003, `y`, t * 0.83, 18),
      o(`steel`, 0, 0.004, 0, t * 0.98, 0.002, `y`, t * 0.98, 20),
      o(`anod`, 0, (r + 0.004) / 2, 0, t, r - 0.004, `y`, t, 24),
      o(`anod`, 0, r + 4e-4, 0, t * 0.9, 8e-4, `y`, t * 0.9, 24));
    let d = _ ? 20 : 14;
    for (let e = 0; e < d; e++) {
      let n = (e * Math.PI * 2) / d,
        i = Math.sin(n),
        o = Math.cos(n);
      ((a(
        `rubber`,
        i * t,
        r - 0.003,
        o * t,
        0.0013,
        0.004,
        7e-4,
        0,
      ).rotation.y = n),
        s &&
          (a(
            `bright`,
            i * (t + 13e-5),
            0.0062,
            o * (t + 13e-5),
            42e-5,
            e % 5 ? 0.0017 : 0.0031,
            18e-5,
            0,
          ).rotation.y = n));
    }
    (o(`steel`, 0, r + 95e-5, 0, 0.0022, 3e-4, `y`, 0.0022, 8),
      a(`inset`, 0, r + 0.00115, 0, 0.0025, 12e-5, 6e-4, 0),
      s && a(`bright`, 0, r + 85e-5, t * 0.62, 7e-4, 15e-5, t * 0.33, 0));
    for (let t of n.slice(l))
      (t.position.applyQuaternion(u).add(new c(...e)),
        t.quaternion.premultiply(u));
  }
  let D = t ? 0.005 : 0.01,
    O = t ? 0.0125 : 0.0094,
    A = t ? 0.02 : 0.015;
  (E([D, d + m - 0.001, 0], O, A, 0),
    E([D, d, m - 0.001], O * 0.92, A * 0.86, 1),
    t
      ? E([D, d, -m + 0.001], 0.014, 0.014, -1)
      : o(`anod`, D, d, -m - 0.001, 0.0055, 0.004, `z`, 0.0055, 14),
    e.caps && ki(i, n, d, f, p, t, e.caps === !0 ? {} : e.caps));
  let { length: j, diameter: M } = Ei,
    ee = new c(j, M, M),
    te = new z().makeScale(j, M, M);
  for (let e of Di(n, r)) {
    e.updateMatrix();
    let t = e.matrix.clone();
    (e.position.multiply(ee),
      e.updateMatrix(),
      e.geometry.applyMatrix4(
        e.matrix.clone().invert().multiply(te).multiply(t),
      ));
  }
  return { eye: [0, d * M, 0], footprint: [-h * j, h * j] };
}
function ji(e, t, n, r, i, a = 5e-4) {
  let o = new ie(n, {
    depth: i - 2 * a,
    bevelEnabled: a > 0,
    bevelThickness: a,
    bevelSize: a,
    bevelSegments: 1,
    curveSegments: e.SEG,
    steps: 1,
  });
  return (o.rotateY(Math.PI / 2), o.translate(r + a, 0, 0), e.mesh(o, t));
}
function Mi(e, t = 0.07) {
  t *= 0.72;
  let n = t / 0.07,
    r = 0.0067,
    i = 0.012;
  function a(t, a) {
    for (let o of [-1, 1]) {
      let s = new ce();
      (s.moveTo(0, i),
        s.lineTo(a, i),
        s.lineTo(a, -0.012),
        s.lineTo(0, -0.012),
        s.lineTo(0, -0.0067),
        s.absarc(0, 0, r, -Math.PI / 2, Math.PI / 2, !1),
        s.closePath());
      let c = ji(e, `anod`, s, t * n, 0.004 * n, 25e-5),
        l = c.geometry.attributes.position;
      for (let e = 0; e < l.count; e++) {
        let t = l.getZ(e),
          n = l.getY(e);
        l.setXYZ(
          e,
          l.getX(e) - Math.abs(t) * 0.75 - Math.max(0, Math.abs(n) - r) * 0.3,
          n,
          t * o,
        );
      }
      if (o < 0) {
        if (c.geometry.index) {
          let e = c.geometry.index;
          for (let t = 0; t < e.count; t += 3) {
            let n = e.getX(t + 1);
            (e.setX(t + 1, e.getX(t + 2)), e.setX(t + 2, n));
          }
        } else
          for (let e of Object.values(c.geometry.attributes))
            for (let t = 0; t < e.count; t += 3)
              for (let n = 0; n < e.itemSize; n++) {
                let r = (t + 1) * e.itemSize + n,
                  i = (t + 2) * e.itemSize + n,
                  a = e.array[r];
                ((e.array[r] = e.array[i]), (e.array[i] = a));
              }
      }
      c.geometry.computeVertexNormals();
    }
  }
  (a(0.016, 0.012), a(0.041, 0.0145), a(0.066, 0.0145));
  let o = new ce(
    [
      [0.016 * n - 0.009, -0.012],
      [0.066 * n - 0.010875, -0.0145],
      [t, 0],
      [0.066 * n - 0.010875, 0.0145],
      [0.016 * n - 0.009, 0.012],
    ].map((e) => new y(...e)),
  );
  for (let t of [-0.012, i]) {
    let n = new ie(o, {
      depth: 0.0014,
      bevelEnabled: !0,
      bevelThickness: 25e-5,
      bevelSize: 25e-5,
      bevelSegments: 1,
      steps: 1,
    });
    (n.rotateX(Math.PI / 2), n.translate(0, t + 7e-4, 0), e.mesh(n, `anod`));
  }
  return (
    e.lathe(
      `steel`,
      0,
      0,
      0,
      [
        [0, r],
        [0, 0.0105],
        [0.014 * n, 0.0105],
        [0.014 * n, r],
      ],
      `x`,
    ),
    { tip: [t, 0, 0] }
  );
}
