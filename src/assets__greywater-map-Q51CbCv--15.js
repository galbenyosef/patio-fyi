// assets__greywater-map-Q51CbCv- 15 — colliderdefs
// Lines 172186-172437 of readable/assets__greywater-map-Q51CbCv-.pretty.js (statement-aligned).
function dt(e, t, n, r, i) {
  let { id: a, w: o, d: s } = t,
    c = -(1.5 + (o - 3) / 4),
    l = s > 13.5 ? 2.05 : 1.75,
    u = a === `infill-103`,
    d = u ? 1.3 : 1.8,
    f = c + 0.2,
    p = u ? 1.8 : Math.min(o * 0.22, o / 2 - 3.5),
    m = [`infill-109`, `infill-120`].includes(a),
    h = e.props.find((e) => e.id === a + `-service-bench`);
  h.z += 1.3;
  let g = e.colliderDefs.find((e) => e.id === `demo-` + a + `-service-bench`);
  ((g.aabb[2] += 1.3), (g.aabb[5] += 1.3));
  for (let [e, t, r] of [
    [0, -o / 2 + 0.21, f - d / 2],
    [1, f + d / 2, -1.49],
  ])
    n(
      `service-store-wall-` + e,
      (t + r) / 2,
      0.08,
      l,
      r - t,
      2.65,
      0.18,
      `plasterRed`,
    );
  (n(`service-store-header`, f, 2.43, l, d, 0.3, 0.18, `concreteDark`),
    i(
      `store-label`,
      m ? `SORTING / STORES` : `PARTS / RECEIVING`,
      c,
      2.56,
      l - 0.105,
      2.5,
      0.18,
    ),
    r(
      `pilot-repair-counter`,
      `interior_counter`,
      -o / 2 + 0.85,
      0.08,
      -3.3,
      Math.PI / 2,
    ),
    r(`pilot-receiving-counter`, `interior_counter`, p, 0.08, s / 2 - 1),
    i(
      `repair-internal-label`,
      `01 / SERVICE BAY`,
      c,
      2.55,
      -s / 2 + 0.45,
      2.5,
      0.19,
      0,
    ),
    i(
      `receiving-internal-label`,
      m ? `02 / DISPATCH` : `02 / RECEIVING`,
      p,
      2.52,
      s / 2 - 0.24,
      2.5,
      0.18,
    ));
  for (let e of [-1, 1])
    n(
      `pilot-receiving-line-` + e,
      p + e * 0.85,
      0.094,
      s / 2 - 2.4,
      0.06,
      0.008,
      1.7,
      `amber`,
      !1,
    );
  for (let e = 0; e < 4; e++)
    n(
      `pilot-crossing-` + e,
      c,
      0.094,
      0.3 + e * 0.24,
      1.15,
      0.008,
      0.1,
      `plaster`,
      !1,
    );
  let _ = a + `-office-seat`;
  ((e.props = e.props.filter((e) => e.id !== _)),
    (e.colliderDefs = e.colliderDefs.filter((e) => e.id !== `demo-` + _)),
    r(
      `pilot-archive-shelf`,
      `interior_shelf`,
      -o / 2 + 0.7,
      3.28,
      s / 2 - 1.25,
      Math.PI / 2,
    ),
    i(`archive-label`, `JOB RECORDS`, c, 5.8, s / 2 - 0.24, 2.2, 0.18),
    (t.interiorPilot = {
      revision: 2,
      rooms: [
        `repair bay`,
        m ? `sorting stores` : `parts receiving`,
        `dispatch archive`,
      ],
      breachWallZ: l,
      doorX: f,
      doorWidth: d,
    }));
}
function ft(e, t, n, r) {
  let { id: i, w: a, d: o, x: s, z: c } = t,
    l = new Set([
      i + `-f1-side-centre--1`,
      i + `-f1-side-centre-1`,
      i + `-stair-guard`,
    ]);
  ((e.objects = e.objects.filter((e) => !l.has(e.id))),
    (e.colliderDefs = e.colliderDefs.filter((e) => !l.has(e.id.slice(5)))));
  for (let e of [-1, 1]) {
    let t = e * (a / 2 - 0.2);
    (n(`side-upper-apron-` + e, t, 3.28, 0, 0.4, 0.85, 3, `plasterRed`),
      n(
        `side-upper-sill-` + e,
        t + e * 0.06,
        4.1,
        0,
        0.64,
        0.13,
        3.18,
        `plaster`,
      ));
    for (let r of [-1, 1])
      n(
        `side-upper-frame-${e}-${r}`,
        t,
        4.23,
        r * 1.45,
        0.22,
        1.65,
        0.1,
        `metalDark`,
      );
    (n(`side-upper-transom-` + e, t, 5.5, 0, 0.16, 0.075, 2.9, `metalDark`),
      n(
        `side-upper-glass-` + e,
        t - e * 0.07,
        5.575,
        0,
        0.05,
        0.24,
        2.82,
        `glass`,
      ),
      n(`side-upper-top-` + e, t, 5.815, 0, 0.18, 0.065, 2.9, `metalDark`));
    for (let t of [o / 2 - 0.27])
      (n(
        `rear-corner-` + e,
        e * (a / 2 - 0.22),
        0.08,
        t,
        0.58,
        6.62,
        0.6,
        `plaster`,
      ),
        n(
          `rear-corner-foot-` + e,
          e * (a / 2 - 0.22),
          0.08,
          t + 0.07,
          0.72,
          0.42,
          0.7,
          `concreteDark`,
        ));
    (n(
      `side-belt-` + e,
      e * (a / 2 + 0.015),
      3.1,
      0,
      0.14,
      0.18,
      o - 0.7,
      `plaster`,
      !1,
    ),
      n(
        `side-cornice-` + e,
        e * (a / 2 + 0.04),
        6.4,
        0,
        0.3,
        0.28,
        o,
        `plaster`,
        !1,
      ));
  }
  for (let t of e.objects)
    t.id.startsWith(i + `-`) &&
      /^f[01]-(front-header-1|window-(sill|jamb)-1-|centre-(sill-1|jamb-1-))/.test(
        t.id.slice(i.length + 1),
      ) &&
      (t.material = `plasterRed`);
  for (let e of [-1.5, 1.5])
    n(`rear-pier-` + e, e, 0.08, o / 2 - 0.1, 0.34, 6.31, 0.56, `plaster`);
  (n(`rear-cornice`, 0, 6.4, o / 2, a + 0.4, 0.28, 0.58, `plaster`),
    n(
      `rear-entrance-lintel`,
      0,
      2.53,
      o / 2 + 0.06,
      3.35,
      0.18,
      0.56,
      `plaster`,
    ),
    n(
      `rear-threshold`,
      0,
      0.083,
      o / 2 - 0.04,
      2.7,
      0.025,
      0.56,
      `metalDark`,
      !1,
    ),
    r(
      `rear-label`,
      `NORTH SERVICE / RECEIVING`,
      0,
      3.48,
      o / 2 + 0.015,
      4.3,
      0.28,
      0,
    ));
  let u = a / 2 - 2.55;
  for (let e of [-2.7, -1.35, 0, 1.35, 2.7])
    n(`guard-post-` + e, u, 3.28, e, 0.075, 1.05, 0.075, `metalDark`);
  for (let e of [3.72, 4.28])
    n(`guard-rail-` + e, u, e, 0, 0.085, 0.065, 5.6, `metalDark`);
  e.landmarks = [
    ...(e.landmarks ?? []),
    { id: i, label: `NORTH SERVICE`, x: s, z: c, w: a, d: o },
  ];
}
