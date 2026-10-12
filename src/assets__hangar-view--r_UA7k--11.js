// assets__hangar-view--r_UA7k- 11 — push
// Lines 11724-11995 of readable/assets__hangar-view--r_UA7k-.pretty.js (statement-aligned).
function nn() {
  let e = G.lightTower,
    t = [];
  t.push(
    K([-1.4, 0.45, -0.75, 1.1, 1.55, 0.75], `yellow`),
    K([-1.45, 1.55, -0.78, 1.15, 1.62, 0.78], `black`),
  );
  for (let e = -1.2; e < 0.9; e += 0.2)
    for (let n of [1, -1])
      t.push(
        K(
          [e, 0.8, n * 0.752 - 0.004, e + 0.1, 1.3, n * 0.752 + 0.004],
          `black`,
        ),
      );
  (t.push(...X([-0.2], 0.85, 0.33, 0.2)),
    t.push(
      q([1.6, 0.45, 0], 0.035, 1, `x`, `black`, 6),
      q([2.05, 0.18, 0], 0.08, 0.06, `z`, `tyre`, 8),
    ));
  for (let [e, n] of [
    [-1.3, -0.95],
    [-1.3, 0.95],
    [0.95, -0.95],
    [0.95, 0.95],
  ])
    t.push(
      K([e - 0.04, 0, n - 0.04, e + 0.04, 0.6, n + 0.04], `metalDark`),
      K([e - 0.12, 0, n - 0.12, e + 0.12, 0.03, n + 0.12], `metalDark`),
    );
  (t.push(
    q([-1.1, 3.42, 0], 0.09, 3.6, `y`, `metal`, 8),
    q([-1.1, 6.4, 0], 0.065, 2, `y`, `metal`, 8),
  ),
    t.push(
      K([-1.15, e.height - 0.62, -0.95, -1.05, e.height - 0.55, 0.95], `black`),
    ));
  let n = [];
  for (let r of [-0.75, -0.25, 0.25, 0.75])
    (t.push(
      K(
        [-1, e.height - 0.75, r - 0.2, -0.75, e.height - 0.3, r + 0.2],
        `black`,
      ),
    ),
      n.push(
        K(
          [-0.75, e.height - 0.72, r - 0.17, -0.73, e.height - 0.33, r + 0.17],
          `lamp`,
        ),
      ));
  let r = new y();
  ((r.name = `light-tower`), r.add(J(t, `light-tower-body`)));
  let i = new m({
      vertexColors: !0,
      roughness: 0.3,
      emissive: Vt.lamp,
      emissiveIntensity: 0,
    }),
    a = new d(x(n), i);
  (a.geometry.computeVertexNormals(), (a.name = `light-tower-lamps`), r.add(a));
  let o = {
    root: r,
    lamps: a,
    setLights: (e) => {
      i.emissiveIntensity = e ? 2.5 : 0;
    },
  };
  return ((r.userData = o), o);
}
function rn() {
  G.stand;
  let e = 2.4,
    t = [];
  t.push(K([-1.4, 0.15, -0.65, 1.4, 0.25, 0.65], `yellow`));
  for (let [e, n] of [
    [-1.3, -0.55],
    [-1.3, 0.55],
    [1.3, -0.55],
    [1.3, 0.55],
  ])
    t.push(q([e, 0.08, n], 0.08, 0.06, `z`, `tyre`, 8));
  t.push(K([0.2, 2.32, -0.65, 1.4, e, 0.65], `metalDark`));
  for (let [n, r] of [
    [0.25, -0.6],
    [0.25, 0.6],
    [1.35, -0.6],
    [1.35, 0.6],
  ])
    t.push(K([n - 0.04, 0.25, r - 0.04, n + 0.04, e, r + 0.04], `yellow`));
  for (let n of [1, -1]) {
    (t.push(
      Kt(
        [
          [-1.4, 0.25],
          [0.2, e],
          [0.2, 2.52],
          [-1.4, 0.37],
        ],
        n * 0.6 - 0.04,
        n * 0.6 + 0.04,
        `yellow`,
      ),
    ),
      t.push(
        Kt(
          [
            [-1.4, 1.15],
            [0.2, 3.3499999999999996],
            [0.2, 3.4],
            [-1.4, 1.2],
          ],
          n * 0.62 - 0.025,
          n * 0.62 + 0.025,
          `yellow`,
        ),
      ),
      t.push(
        K(
          [
            0.2,
            3.3499999999999996,
            n * 0.62 - 0.025,
            1.4,
            3.4,
            n * 0.62 + 0.025,
          ],
          `yellow`,
        ),
        K([0.2, 2.85, n * 0.62 - 0.02, 1.4, 2.9, n * 0.62 + 0.02], `yellow`),
      ));
    for (let r of [0.2, 1.35])
      t.push(
        K(
          [r - 0.025, e, n * 0.62 - 0.025, r + 0.025, 3.4, n * 0.62 + 0.025],
          `yellow`,
        ),
      );
  }
  t.push(K([1.35, 3.3499999999999996, -0.62, 1.4, 3.4, 0.62], `yellow`));
  for (let e = 1; e < 7; e++) {
    let n = e / 7,
      r = -1.4 + 1.6 * n,
      i = 0.25 + 2.15 * n;
    t.push(K([r - 0.1, i - 0.03, -0.56, r + 0.1, i + 0.02, 0.56], `metalDark`));
  }
  return Y(J(t, `maint-stand`), `maint-stand`);
}
function an() {
  let e = [];
  e.push(K([-1.9, 0.3, -0.55, 1.9, 0.42, 0.55], `red`));
  for (let t of [-1.2, 1])
    for (let n of [1, -1])
      e.push(
        K(
          [t - 0.05, 0.42, n * 0.4 - 0.05, t + 0.05, 0.95, n * 0.4 + 0.05],
          `red`,
        ),
      );
  return (
    e.push(...X([-1.5, 1.5], 0.6, 0.2, 0.14)),
    e.push(q([2.25, 0.35, 0], 0.03, 0.7, `x`, `black`, 6)),
    e.push(
      q([-0.2, 1.3, 0], 0.55, 3, `x`, `olive`, 14, 0.5),
      q([1.45, 1.3, 0], 0.48, 0.3, `x`, `metalDark`, 14, 0.4),
    ),
    e.push(
      q([1.75, 1.3, 0], 0.3, 0.3, `x`, `black`, 12, 0.12),
      q([-1.85, 1.3, 0], 0.3, 0.3, `x`, `metalDark`, 12, 0.4),
    ),
    e.push(
      K([0.2, 0.7, -0.2, 0.9, 0.8, 0.2], `black`),
      K([-0.6, 1.8, -0.25, 0.4, 1.9, 0.25], `metalDark`),
    ),
    Y(J(e, `engine-stand`), `engine-stand`)
  );
}
function on() {
  let e = [];
  e.push(
    K([-0.4, 0.12, -0.25, 0.4, 1, 0.25], `red`),
    K([-0.42, 1, -0.27, 0.42, 1.04, 0.27], `black`),
  );
  for (let t = 0.25; t < 0.95; t += 0.14)
    e.push(
      K([0.4, t, -0.2, 0.41, t + 0.1, 0.2], `metalDark`),
      K([0.41, t + 0.04, -0.08, 0.43, t + 0.06, 0.08], `metal`),
    );
  e.push(q([-0.45, 0.9, 0], 0.02, 0.4, `z`, `metal`, 6));
  for (let [t, n] of [
    [-0.32, -0.18],
    [-0.32, 0.18],
    [0.32, -0.18],
    [0.32, 0.18],
  ])
    e.push(q([t, 0.06, n], 0.06, 0.05, `z`, `tyre`, 8));
  return Y(J(e, `tool-cart`), `tool-cart`);
}
function sn() {
  let e = [];
  (e.push(
    q([0, 0.75, 0], 0.25, 1, `y`, `red`, 12),
    q([0, 1.3, 0], 0.25, 0.1, `y`, `red`, 12, 0.12),
    q([0, 1.42, 0], 0.05, 0.12, `y`, `metal`, 6),
  ),
    e.push(
      K([-0.28, 0.2, -0.32, 0.28, 0.26, 0.32], `black`),
      ...X([0], 0.36, 0.2, 0.08),
    ));
  for (let t of [1, -1])
    e.push(K([0.24, 0.26, t * 0.3 - 0.02, 0.3, 1.25, t * 0.3 + 0.02], `black`));
  return (
    e.push(
      K([0.24, 1.22, -0.32, 0.3, 1.27, 0.32], `black`),
      K([-0.27, 0.6, -0.03, -0.25, 1.3, 0.03], `black`),
    ),
    Y(J(e, `extinguisher`), `extinguisher`)
  );
}
function cn(e = {}) {
  let t = e.count ?? 1,
    n = G.barrier,
    r = [];
  for (let e = 0; e < t; e++) {
    let i = (e - t / 2) * (n.length + 0.05),
      a = i + n.length;
    r.push(
      qt(
        [
          [-0.3, 0],
          [0.3, 0],
          [0.3, 0.08],
          [0.2, 0.33],
          [0.1, n.height],
          [-0.1, n.height],
          [-0.2, 0.33],
          [-0.3, 0.08],
        ],
        i,
        a,
        `concrete`,
      ),
    );
  }
  return Y(J(r, `barriers`), `barriers`);
}
function ln() {
  let e = G.tent,
    t = e.length / 2,
    n = e.width / 2,
    r = [];
  return (
    r.push(K([-t, 0, -n, t, 1.7, n], `olive`)),
    r.push(
      qt(
        [
          [-n - 0.15, 1.65],
          [n + 0.15, 1.65],
          [0, e.height],
        ],
        -t - 0.15,
        t + 0.15,
        `oliveDark`,
      ),
    ),
    r.push(
      K([t, 0, -0.6, t + 0.01, 1.65, 0.6], `black`),
      K([t + 0.01, 0, 0.6, t + 0.05, 1.65, 0.9], `olive`),
    ),
    Y(J(r, `tent`), `tent`)
  );
}
