// assets__greywater-map-Q51CbCv- 14 — math
// Lines 171701-172185 of readable/assets__greywater-map-Q51CbCv-.pretty.js (statement-aligned).
function ut(e, t, n, r) {
  let { id: i, x: a, y: o, z: s, w: c, d: l } = t,
    u = -l / 2,
    d = (c - 3) / 2,
    f = -(1.5 + d / 2),
    p = new Set(
      e.objects
        .filter(
          (e) =>
            e.id.startsWith(i + `-`) &&
            (/^f[01]-(front-header--1$|window-(sill|jamb|frame|cap|trim)--1-|door-head--1$|centre-(sill--1$|jamb--1-))/.test(
              e.id.slice(i.length + 1),
            ) ||
              /^(loading-|service-pilaster-|entry-canopy|sign-board|roof-edge-z--1|belt--1)/.test(
                e.id.slice(i.length + 1),
              )),
        )
        .map((e) => e.id),
    );
  ((e.objects = e.objects.filter((e) => !p.has(e.id))),
    (e.colliderDefs = e.colliderDefs.filter((e) => !p.has(e.id.slice(5)))));
  for (let t of e.objects)
    t.id.startsWith(i + `-f`) &&
      /side-(header|pier|centre)/.test(t.id) &&
      (t.material = `plasterRed`);
  for (let e of [-c / 2 + 0.24, -1.5, 1.5, c / 2 - 0.24])
    (n(`service-column-` + e, e, 0.08, u + 0.05, 0.6, 6.62, 0.62, `plaster`),
      n(
        `service-foot-` + e,
        e,
        0.08,
        u - 0.08,
        0.62,
        0.45,
        0.78,
        `concreteDark`,
      ),
      n(
        `service-cap-` + e,
        e,
        6.35,
        u - 0.05,
        0.66,
        0.28,
        0.76,
        `plaster`,
        !1,
      ));
  (n(`service-spandrel`, 0, 2.73, u + 0.2, c, 0.72, 0.4, `plasterRed`),
    n(
      `service-stringcourse`,
      0,
      3.36,
      u - 0.09,
      c + 0.2,
      0.16,
      0.64,
      `plaster`,
    ),
    n(`service-cornice`, 0, 6.39, u - 0.08, c + 0.5, 0.3, 0.7, `plaster`),
    n(
      `service-coping`,
      0,
      6.69,
      u - 0.02,
      c + 0.65,
      0.16,
      0.82,
      `concreteDark`,
    ));
  for (let [e, t, r, i] of [
    [0, c * 0.74, 6.85, 0.42],
    [1, c * 0.5, 7.27, 0.38],
    [2, c * 0.3, 7.65, 0.28],
  ])
    (n(`service-parapet-` + e, 0, r, u + 0.17, t, i, 0.46, `plasterRed`),
      n(
        `service-parapet-cap-` + e,
        0,
        r + i,
        u + 0.17,
        t + 0.16,
        0.12,
        0.62,
        `plaster`,
      ));
  for (let [e, t, r] of [
    [0, f, d - 0.55],
    [1, 0, 2.45],
    [2, -f, d - 0.55],
  ]) {
    (n(`factory-apron-` + e, t, 3.52, u + 0.2, r, 0.57, 0.4, `plasterRed`),
      n(
        `factory-sill-` + e,
        t,
        4.03,
        u + 0.04,
        r + 0.25,
        0.12,
        0.64,
        `plaster`,
      ),
      n(`factory-head-` + e, t, 6.08, u + 0.2, r, 0.31, 0.4, `plasterRed`));
    for (let i of [-1, 1])
      n(
        `factory-jamb-${e}-${i}`,
        t + i * (r / 2 - 0.06),
        4.15,
        u + 0.14,
        0.12,
        1.93,
        0.22,
        `metalDark`,
      );
    (n(`factory-transom-` + e, t, 5.6, u + 0.14, r, 0.08, 0.16, `metalDark`),
      n(
        `factory-upper-glass-` + e,
        t,
        5.68,
        u + 0.25,
        r - 0.22,
        0.32,
        0.05,
        `glass`,
      ));
    for (let i of [-1, 0, 1])
      n(
        `factory-mullion-${e}-${i}`,
        t + i * r * 0.25,
        5.65,
        u + 0.1,
        0.055,
        0.42,
        0.18,
        `metalDark`,
      );
    n(`factory-top-rail-` + e, t, 6, u + 0.14, r, 0.08, 0.16, `metalDark`);
  }
  for (let e of [-1, 1])
    n(
      `bay-track-` + e,
      f + e * (d / 2 - 0.3),
      0.08,
      u + 0.03,
      0.14,
      2.65,
      0.24,
      `metalDark`,
    );
  n(`bay-roller-housing`, f, 2.45, u - 0.12, d - 0.28, 0.29, 0.48, `metal`);
  for (let e = 0; e < 3; e++)
    n(
      `bay-shutter-rib-` + e,
      f,
      2.48 + e * 0.07,
      u - 0.38,
      d - 0.36,
      0.025,
      0.035,
      `metalDark`,
      !1,
    );
  n(`bay-threshold`, f, 0.081, u + 0.15, d - 0.6, 0.025, 0.7, `metalDark`, !1);
  for (let e of [-1, 1])
    n(
      `entry-jamb-` + e,
      e * 1.11,
      0.08,
      u + 0.21,
      0.22,
      2.45,
      0.6,
      `metalDark`,
    );
  n(`entry-transom`, 0, 2.31, u + 0.21, 2.2, 0.14, 0.6, `metalDark`);
  let m = -f;
  (n(`parts-front-base`, m, 0.08, u + 0.2, d - 0.45, 0.95, 0.4, `plasterRed`),
    n(`parts-stone-sill`, m, 1.03, u + 0.02, d - 0.3, 0.13, 0.65, `plaster`),
    n(`parts-front-head`, m, 2.42, u + 0.2, d - 0.45, 0.31, 0.4, `plasterRed`));
  for (let e of [-1, 1])
    n(
      `parts-window-jamb-` + e,
      m + e * (d / 2 - 0.3),
      1.16,
      u + 0.1,
      0.1,
      1.26,
      0.2,
      `metalDark`,
    );
  (n(`service-canopy`, 0, 2.76, u - 0.58, c + 0.45, 0.12, 1.5, `metalDark`, !1),
    n(
      `service-canopy-lip`,
      0,
      2.67,
      u - 1.31,
      c + 0.45,
      0.17,
      0.09,
      `metal`,
      !1,
    ));
  for (let t of [-c / 2 + 0.24, -1.5, 1.5, c / 2 - 0.24])
    (n(
      `canopy-tie-` + t,
      t,
      2.83,
      u - 0.55,
      0.065,
      0.065,
      0.95,
      `metalDark`,
      !1,
    ),
      (e.objects.at(-1).rotX = 0.25));
  let h = e.signs.find((e) => e.id === i + `-identity`);
  Object.assign(h, {
    x: a,
    y: o + 7.23,
    z: s + u - 0.08,
    w: c * 0.68,
    h: 0.42,
    font: 1,
    col: 14865070,
  });
  let g = (t, n, r, c, l, u, d = 0.23, f = Math.PI) =>
    e.signs.unshift({
      id: i + `-` + t,
      text: n,
      x: a + r,
      y: o + c,
      z: s + l,
      w: u,
      h: d,
      ry: f,
      col: 14272416,
      style: `painted`,
      font: 1,
    });
  (g(`bay-label`, `01 / REPAIR`, f, 3.2, u - 0.015, d - 0.5, 0.2),
    g(`parts-label`, `PARTS`, m, 3.2, u - 0.015, d - 0.5, 0.2));
  for (let e of [0.08, 3.28]) {
    for (let t of [-l / 2 + 0.55, 0, l / 2 - 0.55])
      n(
        `ceiling-beam-${e}-${t}`,
        -1,
        e + 2.78,
        t,
        c - 2.7,
        0.22,
        0.18,
        `metalDark`,
        !1,
      );
    for (let t of [-1, 1])
      for (let r of [-1.51, -1.29])
        n(
          `partition-dado-${e}-${t}-${r}`,
          r,
          e + 0.08,
          (t * (l / 2 + 1.4)) / 2,
          0.035,
          0.82,
          l / 2 - 1.4,
          `concreteDark`,
          !1,
        );
  }
  let _ = new Set(
    [`workbench`, `tool-cabinet`, `office-table`, `records`].map(
      (e) => i + `-` + e,
    ),
  );
  ((e.props = e.props.filter((e) => !_.has(e.id))),
    (e.colliderDefs = e.colliderDefs.filter((e) => !_.has(e.id.slice(5)))),
    r(
      `service-bench`,
      `interior_service_bench`,
      -2.3,
      0.08,
      l * 0.26,
      Math.PI / 2,
    ),
    r(
      `parts-storage`,
      `interior_shelf`,
      -c / 2 + 0.72,
      0.08,
      l * 0.32,
      Math.PI / 2,
    ),
    r(`parts-storage-back`, `interior_cabinet`, f, 0.08, l / 2 - 0.8),
    r(`parts-service-counter`, `interior_counter`, m, 0.08, u + 1.2, Math.PI),
    g(
      `parts-counter-label`,
      `COLLECTION / PARTS`,
      m,
      2.57,
      u + 0.44,
      d - 0.65,
      0.16,
      0,
    ),
    g(
      `bay-safety-label`,
      `KEEP ACCESS CLEAR`,
      f,
      2.14,
      l / 2 - 0.24,
      d - 0.7,
      0.18,
      Math.PI,
    ),
    n(
      `dispatch-pinboard`,
      -1.505,
      4.22,
      -l * 0.29,
      0.025,
      0.72,
      1.35,
      `timberDark`,
      !1,
    ));
  for (let e of [-0.38, 0.1, 0.42])
    n(
      `dispatch-notice-` + e,
      -1.524,
      4.34,
      -l * 0.29 + e,
      0.012,
      0.38,
      0.25,
      `plaster`,
      !1,
    );
  if (
    (r(`office-desk`, `interior_table`, f, 3.28, -l * 0.26),
    r(`office-chair`, `interior_office_chair`, f, 3.28, -l * 0.26 + 0.95),
    r(`office-files`, `interior_cabinet`, -2.15, 3.28, l / 2 - 1),
    r(`office-seat`, `interior_sofa`, f, 3.28, l * 0.29),
    i === `infill-103`)
  ) {
    for (let t of e.objects) t.id.startsWith(`district-tree-7-`) && (t.x -= 2);
    for (let t of e.colliderDefs)
      t.id.startsWith(`demo-district-tree-7-`) &&
        ((t.aabb[0] -= 2), (t.aabb[3] -= 2));
  }
  let v = -c / 2 + 0.4,
    y = f;
  for (let [e, t, r] of [
    [0, v, y - 0.75],
    [1, y + 0.75, -1.49],
  ])
    if (r > t) {
      let i = (t + r) / 2,
        a = r - t;
      (n(`office-partition-` + e, i, 3.28, 1.2, a, 0.95, 0.16, `plaster`),
        n(
          `office-partition-sill-` + e,
          i,
          4.23,
          1.2,
          a + 0.04,
          0.08,
          0.24,
          `timberDark`,
        ));
      for (let [i, a] of [t + 0.045, r - 0.045].entries())
        n(
          `office-window-jamb-${e}-${i}`,
          a,
          4.31,
          1.2,
          0.09,
          1.32,
          0.16,
          `timberDark`,
        );
      (n(
        `office-window-transom-` + e,
        i,
        5.3,
        1.2,
        a,
        0.075,
        0.16,
        `timberDark`,
      ),
        n(
          `office-window-glass-` + e,
          i,
          5.375,
          1.2,
          a - 0.18,
          0.255,
          0.05,
          `glass`,
        ),
        n(
          `office-partition-head-` + e,
          i,
          5.63,
          1.2,
          a,
          0.37,
          0.16,
          `plaster`,
        ));
    }
  (n(`office-door-head`, y, 5.63, 1.2, 1.5, 0.37, 0.16, `plaster`),
    g(`office-label`, `DISPATCH`, y, 5.78, 1.105, 1.2, 0.2),
    g(
      `stairs-direction`,
      `DISPATCH / UPSTAIRS`,
      0,
      2.57,
      u + 0.44,
      2.1,
      0.16,
      0,
    ),
    g(
      `rear-exit-direction`,
      `RECEIVING / EXIT`,
      0,
      2.57,
      l / 2 - 0.24,
      2.1,
      0.16,
      Math.PI,
    ));
  let b = c / 2 - 1.4,
    x = c / 2 - 2.55;
  for (let e = 0; e < 20; e++)
    n(
      `stair-nosing-` + e,
      b,
      0.08 + (e + 1) * 0.16 + 0.003,
      -2.8 + e * 0.28 + 0.025,
      2.1,
      0.012,
      0.045,
      `plaster`,
      !1,
    );
  for (let e of [0, 0.25, 0.5, 0.75, 1])
    n(
      `flight-post-` + e,
      x,
      0.08 + e * 3.2,
      -2.8 + e * 5.6,
      0.06,
      0.95,
      0.06,
      `metalDark`,
    );
  (n(
    `flight-handrail`,
    x,
    2.63 - 0.035,
    0,
    0.075,
    0.07,
    Math.hypot(5.6, 3.2),
    `metalDark`,
    !1,
  ),
    (e.objects.at(-1).rotX = -Math.atan(3.2 / 5.6)));
  for (let e of [-1, 1])
    n(
      `service-lane-` + e,
      f + e * (d / 2 - 0.55),
      0.094,
      -l * 0.2,
      0.065,
      0.008,
      l * 0.45,
      `plaster`,
      !1,
    );
  (n(`service-stop-line`, f, 0.094, 0.4, d - 1.1, 0.008, 0.065, `plaster`, !1),
    ft(e, t, n, g),
    dt(e, t, n, r, g));
}
