// assets__grenade-model-r0cg2Gb_ 13 — math
// Lines 26838-27146 of readable/assets__grenade-model-r0cg2Gb_.pretty.js (statement-aligned).
function xr(e, n, r) {
  let i = yr(r),
    a = (e, n = !1) => {
      let r = new S(e, i.size, i.size, A);
      return (
        (r.wrapS = r.wrapT = te),
        (r.minFilter = N),
        (r.magFilter = t),
        (r.generateMipmaps = !0),
        (r.colorSpace = n ? T : ``),
        (r.needsUpdate = !0),
        r
      );
    };
  ((n.map = a(i.color, !0)),
    (n.normalMap = a(i.normal)),
    (n.roughnessMap = a(i.roughness)),
    n.normalScale.set(0.45, 0.45));
  let o = [n.map, n.normalMap, n.roughnessMap];
  (n.addEventListener(`dispose`, () => o.forEach((e) => e.dispose())),
    (n.userData.proceduralFinish = r),
    e.traverse((e) => {
      e.isMesh &&
        e.material === n &&
        br(e.geometry, r.startsWith(`polymer`) ? 0.024 : 0.032);
    }));
}
function Sr(e) {
  for (let [t, n, r, i] of [
    [`poly`, 2368807, 0.02, 0.89],
    [`polyg`, 3750460, 0.025, 0.82],
    [`paint`, 2895151, 0.45, 0.57],
    [`satin`, 1908513, 0.52, 0.49],
    [`parker`, 4474440, 0.65, 0.45],
    [`barrel`, 2369322, 0.72, 0.41],
    [`bright`, 6514794, 0.82, 0.32],
    [`rubber`, 1316376, 0, 0.98],
  ])
    e[t] && (e[t].color.setHex(n), (e[t].metalness = r), (e[t].roughness = i));
}
function Cr(e) {
  for (let t of e.userData.materials) {
    let n = [`smg_poly`, `smg_polyg`].includes(t.name);
    (n || [`smg_paint`, `smg_satin`, `smg_parker`].includes(t.name)) &&
      (xr(
        e,
        t,
        n
          ? `polymer-mottled`
          : t.name === `smg_paint`
            ? `anodized-mottled`
            : `anodized`,
      ),
      t.normalScale.setScalar(0.07),
      (t.userData.finishNormalScale = 0.07));
  }
}
function wr(e) {
  let { rr: t, S: n } = e,
    r = e.group(`stock`),
    i = e.g.familyStyle;
  if (
    (r.run(
      `poly`,
      -0.02,
      0.002,
      (e) => t(-0.023 + e, 0.017 - e, 0.029 - 2 * e, 0.006, 0.005),
      0.002,
    ),
    r.tube(`satin`, -0.009, -0.003, 0.012, 0.0035, 0.035, `y`, 0.0035, 12),
    i === `forward`)
  ) {
    let e = Array.from({ length: 16 }, (e, t) => {
      let n = (t * Math.PI) / 8;
      return [-0.048 + 0.012 * Math.cos(n), -0.007 + 0.006 * Math.sin(n)];
    });
    (r.slab(
      `poly`,
      [
        [-0.016, 0.011],
        [-0.151, 0.015],
        [-0.161, 0.009],
        [-0.161, -0.061],
        [-0.151, -0.068],
        [-0.067, -0.024],
        [-0.017, -0.019],
      ],
      0.021,
      0,
      0.0015,
      [
        [
          [-0.07, -0.001],
          [-0.145, 0],
          [-0.145, -0.047],
          [-0.079, -0.014],
        ],
        e,
      ],
    ),
      r.loft(`polyg`, [
        [-0.151, t(0.008, 0.016, 0.021, 0.003, 0.003)],
        [-0.083, t(0.007, 0.017, 0.023, 0.004, 0.003)],
        [-0.022, t(0.006, 0.012, 0.019, 0.002, 0.002)],
      ]),
      r.run(
        `rubber`,
        -0.169,
        -0.16,
        (e) => t(-0.069 + e, 0.014 - e, 0.027 - 2 * e, 0.005, 0.005),
        0.0015,
      ));
  } else if (i === `folding`) {
    (r.run(
      `polyg`,
      -0.161,
      -0.019,
      (e) => t(-0.018 + e, 0.014 - e, 0.029 - 2 * e, 0.006, 0.004),
      0.002,
    ),
      r.slab(
        `poly`,
        [
          [-0.037, -0.011],
          [-0.162, -0.009],
          [-0.163, -0.065],
          [-0.153, -0.073],
          [-0.091, -0.038],
          [-0.039, -0.028],
        ],
        0.023,
        0,
        0.0015,
        [
          [
            [-0.069, -0.022],
            [-0.147, -0.022],
            [-0.148, -0.052],
            [-0.096, -0.029],
            [-0.069, -0.027],
          ],
        ],
      ));
    for (let e of [-1, 1])
      (r.rbox(`poly`, -0.104, 0.002, e * 0.0146, 0.079, 0.0012, 7e-4, 2e-4),
        r.tube(
          `satin`,
          -0.058,
          -0.007,
          e * 0.015,
          0.0024,
          0.001,
          `z`,
          0.0024,
          12,
        ));
    r.run(
      `rubber`,
      -0.169,
      -0.16,
      (e) => t(-0.074 + e, 0.012 - e, 0.029 - 2 * e, 0.006, 0.006),
      0.0015,
    );
  } else {
    for (let e of [-1, 1])
      r.rbox(`parker`, -0.085, 0.001, e * 0.0105, 0.15, 0.007, 0.005, 0.001);
    (r.run(
      `poly`,
      -0.143,
      -0.067,
      (e) => t(0.001, 0.014 - e, 0.026 - 2 * e, 0.004, 0.002),
      0.002,
    ),
      r.slab(
        `poly`,
        [
          [-0.145, 0.01],
          [-0.161, 0.01],
          [-0.161, -0.059],
          [-0.151, -0.066],
          [-0.14, -0.06],
          [-0.14, -0.017],
        ],
        0.024,
        0,
        0.0015,
        [
          [
            [-0.146, -0.02],
            [-0.153, -0.02],
            [-0.153, -0.044],
            [-0.146, -0.044],
          ],
        ],
      ),
      r.run(
        `rubber`,
        -0.169,
        -0.16,
        (e) => t(-0.067 + e, 0.012 - e, 0.027 - 2 * e, 0.005, 0.005),
        0.0015,
      ),
      r.rbox(`satin`, -0.03, -0.014, 0, 0.021, 0.008, 0.031, 0.001),
      r.slab(
        `poly`,
        [
          [-0.05, -0.01],
          [-0.032, -0.009],
          [-0.023, -0.021],
          [-0.029, -0.025],
          [-0.049, -0.017],
        ],
        0.015,
        0,
        8e-4,
      ));
  }
  for (let e of [-1, 1])
    r.tube(`satin`, -0.024, -0.008, e * 0.0115, 0.002, 0.001, `z`, 0.002, 12);
  r.group.updateMatrixWorld(!0);
  let a = new p().setFromObject(r.group),
    o = 0.171,
    s = o / (a.max.x - a.min.x),
    c = new z().makeScale(s, 1, 1);
  (c.setPosition(0.002 - a.max.x * s, 0, 0), r.group.updateMatrixWorld(!0));
  for (let e of [...r.group.children]) {
    if (!e.isMesh) throw Error(`Stock builder expects mesh children`);
    (e.updateMatrix(),
      e.geometry.applyMatrix4(new z().multiplyMatrices(c, e.matrix)),
      e.position.set(0, 0, 0),
      e.rotation.set(0, 0, 0),
      e.scale.set(1, 1, 1));
  }
  ((n.stockEnd = -0.169),
    (n.familyStock = { style: i, previousLength: 0.228, targetLength: o }));
}
function Tr(e, t, n = 1) {
  Sr(t);
  let r = new j(),
    i = tr(r, t, `mid`),
    a = (7 * Math.PI) / 180,
    o = 0.037;
  (i.slab(
    `polyg`,
    [
      [-0.037 / 2, 0],
      [o / 2, 0],
      [o / 2, -0.1547],
      [-0.037 / 2, -0.1547],
    ],
    0.023,
    0,
    0.0012,
  ),
    i.rbox(`poly`, 0, -0.1567, 0, 0.040999999999999995, 0.007, 0.025, 0.001));
  for (let e of [-1, 1]) {
    for (let t of [-0.01, 0.01])
      i.rbox(`poly`, t, -0.075803, e * 0.0117, 0.002, 0.121, 0.001, 3e-4);
    i.rbox(`inset`, 0, -0.1547 * 0.51, e * 0.0119, 0.0031, 0.111, 5e-4, 3e-4);
    for (let t = 0; t < 6; t++)
      i.rbox(
        `parker`,
        0,
        -0.032 - t * 0.017,
        e * 0.01225,
        0.0017,
        0.001,
        3e-4,
        0,
      );
  }
  ((r.rotation.z = a), r.updateMatrixWorld(!0));
  let s = 0.19575588405132294,
    c = new p().setFromObject(r),
    l = c.max.y,
    u = s * 0.85,
    d = u / (c.max.y - c.min.y);
  ((r.scale.y = d),
    (r.position.y = -l * d),
    r.scale.set(1, 1, 1),
    (r.position.y = 0),
    r.updateMatrix());
  let f = r.matrix.clone(),
    m = new z().makeScale(1, d, 1);
  (m.setPosition(0, -l * d, 0),
    r.children.forEach((e) => {
      (e.updateMatrix(),
        e.geometry.applyMatrix4(
          new z().multiplyMatrices(m, new z().multiplyMatrices(f, e.matrix)),
        ),
        e.position.set(0, 0, 0),
        e.rotation.set(0, 0, 0),
        e.scale.set(1, 1, 1));
    }),
    r.rotation.set(0, 0, 0),
    (r.userData.familyMagazine = {
      previousHeight: s,
      targetHeight: u,
      angleDegrees: (Math.atan(Math.tan(a) / d) * 180) / Math.PI,
      straight: !0,
    }),
    r.children.forEach((e) => e.geometry.scale(1, n, 1)));
  for (let e of [t.poly, t.polyg])
    (xr(r, e, `polymer-mottled`),
      e.normalScale.setScalar(0.065),
      (e.userData.finishNormalScale = 0.065));
  for (let t of [...r.children]) e.mesh(t.geometry, t.material);
  return r;
}
