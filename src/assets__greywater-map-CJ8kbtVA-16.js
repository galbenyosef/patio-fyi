// assets__greywater-map-CJ8kbtVA 16 — objects
// Lines 172438-172687 of readable/assets__greywater-map-CJ8kbtVA.pretty.js (statement-aligned).
function pt(e, t, n, r) {
  let { id: i, x: a, y: o, z: s, w: c, d: l } = t,
    u = -l / 2,
    d = -c * 0.3,
    f = (t, n, r, c, l, u, d = 0.2, f = Math.PI) =>
      e.signs.unshift({
        id: i + `-` + t,
        text: n,
        x: a + r,
        y: o + c,
        z: s + l,
        w: u,
        h: d,
        ry: f,
        col: 14734521,
        style: `painted`,
        font: 1,
      });
  e.objects = e.objects.filter((e) => e.id !== i + `-entry-canopy`);
  let p = c - 0.55,
    m = 1.5,
    h = 0.38;
  for (let t = 0; t < 12; t++) {
    let r = -p / 2 + ((t + 0.5) * p) / 12,
      i = t % 2 ? `plaster` : `canvasGreen`;
    (n(
      `awning-panel-` + t,
      r,
      2.755,
      u - 0.72,
      p / 12,
      0.05,
      Math.hypot(m, h),
      i,
      !1,
    ),
      (e.objects.at(-1).rotX = -Math.atan(h / m)),
      n(`awning-valance-` + t, r, 2.43, u - 1.47, p / 12, 0.16, 0.045, i, !1));
  }
  n(`awning-wall-rail`, 0, 2.94, u + 0.01, p, 0.1, 0.14, `metalDark`, !1);
  for (let t of [-1, 1])
    (n(
      `awning-bracket-` + t,
      t * (p / 2 - 0.12),
      2.71,
      u - 0.65,
      0.065,
      0.065,
      1.45,
      `metalDark`,
      !1,
    ),
      (e.objects.at(-1).rotX = -Math.atan(h / m)));
  for (let e of [-c / 2 + 0.23, c / 2 - 0.23])
    (n(
      `shop-upper-pier-` + e,
      e,
      3.62,
      u - 0.015,
      0.35,
      2.75,
      0.48,
      `concreteDark`,
    ),
      n(
        `shop-upper-cap-` + e,
        e,
        6.3,
        u - 0.04,
        0.53,
        0.18,
        0.62,
        `plaster`,
        !1,
      ));
  (n(`shop-roof-crown`, 0, 6.52, u - 0.03, c + 0.6, 0.22, 0.72, `plaster`),
    n(`shop-roof-lip`, 0, 6.74, u - 0.02, c + 0.75, 0.1, 0.8, `concreteDark`));
  for (let e of [-1, 0, 1]) {
    let t = e * (1.5 + (c - 3) / 4);
    n(
      `shop-upper-window-hood-` + e,
      t,
      5.94,
      u - 0.13,
      1.95,
      0.12,
      0.58,
      `plaster`,
      !1,
    );
  }
  (f(`stockroom-label`, `STOCKROOM`, d, 2.52, 1.645, 1.2, 0.18),
    f(`exit-label`, `DELIVERIES / EXIT`, 0, 2.54, l / 2 - 0.24, 2.2, 0.17));
  let g = -c / 2 + 0.4,
    _ = d;
  for (let [e, t, r] of [
    [0, g, _ - 0.75],
    [1, _ + 0.75, -1.49],
  ])
    r > t &&
      n(
        `records-wall-` + e,
        (t + r) / 2,
        3.28,
        1.25,
        r - t,
        2.72,
        0.16,
        `plaster`,
      );
  (n(`records-door-head`, _, 5.63, 1.25, 1.5, 0.37, 0.16, `plaster`),
    f(`records-label`, `OFFICE / RECORDS`, _, 5.8, 1.15, 1.45, 0.18),
    r(`manager-chair`, `interior_office_chair`, d, 3.28, -l * 0.23 + 0.95),
    mt(e, t, n, f),
    (e.landmarks = [
      ...(e.landmarks ?? []),
      { id: i, label: `CORNER SUPPLY`, x: a, z: s, w: c, d: l },
    ]));
}
function mt(e, t, n, r) {
  let { id: i, w: a, d: o } = t,
    s = new Set(
      [`f1-side-centre--1`, `f1-side-centre-1`, `stair-guard`].map(
        (e) => i + `-` + e,
      ),
    );
  ((e.objects = e.objects.filter((e) => !s.has(e.id))),
    (e.colliderDefs = e.colliderDefs.filter((e) => !s.has(e.id.slice(5)))));
  for (let e of [-1, 1]) {
    let t = e * (a / 2 - 0.2);
    (n(`shop-side-apron-` + e, t, 3.28, 0, 0.4, 0.85, 3, `plaster`),
      n(
        `shop-side-sill-` + e,
        t + e * 0.06,
        4.1,
        0,
        0.62,
        0.12,
        3.18,
        `concreteDark`,
      ));
    for (let r of [-1, 1])
      n(
        `shop-side-jamb-${e}-${r}`,
        t,
        4.22,
        r * 1.45,
        0.22,
        1.66,
        0.1,
        `timberDark`,
      );
    (n(`shop-side-transom-` + e, t, 5.5, 0, 0.16, 0.075, 2.9, `timberDark`),
      n(
        `shop-side-glass-` + e,
        t - e * 0.07,
        5.575,
        0,
        0.05,
        0.24,
        2.82,
        `glass`,
      ),
      n(`shop-side-head-` + e, t, 5.815, 0, 0.24, 0.065, 3, `timberDark`),
      n(
        `shop-side-hood-` + e,
        t + e * 0.12,
        5.91,
        0,
        0.65,
        0.12,
        3.35,
        `plaster`,
        !1,
      ),
      n(
        `shop-side-belt-` + e,
        e * (a / 2 + 0.02),
        3.1,
        0,
        0.16,
        0.18,
        o - 0.5,
        `concreteDark`,
        !1,
      ),
      n(`shop-side-crown-` + e, (e * a) / 2, 6.52, 0, 0.66, 0.22, o, `plaster`),
      n(
        `shop-side-lip-` + e,
        (e * a) / 2,
        6.74,
        0,
        0.8,
        0.1,
        o + 0.1,
        `concreteDark`,
      ),
      n(
        `shop-rear-pier-` + e,
        e * (a / 2 - 0.23),
        0.08,
        o / 2 - 0.03,
        0.4,
        6.3,
        0.52,
        `concreteDark`,
      ));
  }
  (n(`shop-rear-crown`, 0, 6.52, o / 2, a + 0.6, 0.22, 0.66, `plaster`),
    n(`shop-rear-lip`, 0, 6.74, o / 2, a + 0.75, 0.1, 0.8, `concreteDark`),
    n(
      `delivery-canopy`,
      0,
      2.8,
      o / 2 + 0.55,
      3.6,
      0.12,
      1.4,
      `metalDark`,
      !1,
    ));
  for (let e of [-1, 1])
    n(
      `delivery-tie-` + e,
      e * 1.36,
      2.88,
      o / 2 + 0.4,
      0.065,
      0.065,
      1.05,
      `metalDark`,
      !1,
    );
  (n(`delivery-lintel`, 0, 2.5, o / 2 + 0.03, 3.25, 0.16, 0.54, `concreteDark`),
    r(
      `rear-label`,
      `DELIVERIES / RECEIVING`,
      0,
      3.56,
      o / 2 + 0.025,
      4.3,
      0.24,
      0,
    ));
  let c = a / 2 - 2.55;
  for (let e of [-2.7, -1.35, 0, 1.35, 2.7])
    n(`shop-guard-post-` + e, c, 3.28, e, 0.075, 1.05, 0.075, `metalDark`);
  for (let e of [3.72, 4.28])
    n(`shop-guard-rail-` + e, c, e, 0, 0.085, 0.065, 5.6, `metalDark`);
}
