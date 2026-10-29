// assets__greywater-map-Q51CbCv- 17 — push
// Lines 172688-173034 of readable/assets__greywater-map-Q51CbCv-.pretty.js (statement-aligned).
function ht(e, t, n, r) {
  let { id: i, x: a, y: o, z: s, w: c, d: l } = t,
    u = -l / 2,
    d = -c * 0.3,
    f = (t, n, r, c, l, u, d = 0.18, f = Math.PI) =>
      e.signs.unshift({
        id: i + `-` + t,
        text: n,
        x: a + r,
        y: o + c,
        z: s + l,
        w: u,
        h: d,
        ry: f,
        col: 14735296,
        style: `painted`,
        font: 1,
      });
  for (let e of [-1, 1])
    (n(
      `entry-stone-jamb-` + e,
      e * 1.39,
      0.08,
      u - 0.07,
      0.24,
      2.56,
      0.62,
      `plaster`,
    ),
      n(
        `entry-stone-foot-` + e,
        e * 1.39,
        0.08,
        u - 0.1,
        0.36,
        0.36,
        0.68,
        `concreteDark`,
      ),
      n(
        `balcony-support-` + e,
        e * 1.7,
        2.62,
        u - 0.38,
        0.18,
        0.46,
        0.8,
        `concreteDark`,
        !1,
      ),
      n(
        `front-corner-quoin-` + e,
        e * (c / 2 - 0.18),
        0.08,
        u + 0.015,
        0.3,
        6.4,
        0.44,
        `plaster`,
      ));
  n(`entry-stone-head`, 0, 2.55, u - 0.07, 3.02, 0.22, 0.62, `plaster`);
  let p = new Set([
    i + `-balcony-front`,
    i + `-balcony-return--1`,
    i + `-balcony-return-1`,
  ]);
  ((e.objects = e.objects.filter((e) => !p.has(e.id))),
    (e.colliderDefs = e.colliderDefs.filter((e) => !p.has(e.id.slice(5)))),
    n(`balcony-base`, 0, 3.28, u - 1.24, 3.8, 0.55, 0.16, `plaster`));
  for (let e of [-1.8, -0.9, 0, 0.9, 1.8])
    n(`balcony-post-` + e, e, 3.83, u - 1.24, 0.065, 0.47, 0.065, `metalDark`);
  n(`balcony-toprail`, 0, 4.26, u - 1.24, 3.9, 0.07, 0.09, `metalDark`);
  for (let e of [-1, 1])
    (n(
      `balcony-side-base-` + e,
      e * 1.84,
      3.28,
      u - 0.55,
      0.14,
      0.55,
      1.5,
      `plaster`,
    ),
      n(
        `balcony-side-rail-` + e,
        e * 1.84,
        4.26,
        u - 0.55,
        0.08,
        0.07,
        1.5,
        `metalDark`,
      ));
  let m = e.signs.find((e) => e.id === i + `-identity`);
  Object.assign(m, { y: o + 3.57, z: s + u - 1.331, h: 0.24, w: 2.8 });
  for (let e = 0; e < 2; e++)
    for (let t = 0; t < 3; t++) {
      let r = u + 1.05 + t * 0.31,
        i = 0.95 + e * 0.29;
      (n(`mailbox-${e}-${t}`, -1.285, i, r, 0.05, 0.26, 0.28, `metalDark`, !1),
        n(
          `mail-slot-${e}-${t}`,
          -1.254,
          i + 0.17,
          r,
          0.015,
          0.025,
          0.19,
          `plaster`,
          !1,
        ));
    }
  (f(
    `lobby-directory`,
    `RESIDENTS / UPSTAIRS`,
    0,
    2.54,
    u + 0.44,
    2.1,
    0.16,
    0,
  ),
    f(`rear-door-label`, `COURTYARD EXIT`, 0, 2.54, l / 2 - 0.24, 2.1, 0.16));
  let h = -c / 2 + 0.4,
    g = d;
  for (let [e, t, r] of [
    [0, h, g - 0.75],
    [1, g + 0.75, -1.49],
  ])
    r > t &&
      n(
        `bedroom-wall-` + e,
        (t + r) / 2,
        3.28,
        1.05,
        r - t,
        2.72,
        0.16,
        `plaster`,
      );
  n(`bedroom-door-head`, g, 5.63, 1.05, 1.5, 0.37, 0.16, `plaster`);
  for (let e of [-1, 1])
    n(
      `bedroom-door-trim-` + e,
      g + e * 0.79,
      3.28,
      0.95,
      0.065,
      2.35,
      0.045,
      `timberDark`,
      !1,
    );
  (n(
    `bedroom-door-trim-head`,
    g,
    5.6,
    0.95,
    1.64,
    0.07,
    0.045,
    `timberDark`,
    !1,
  ),
    r(`bedroom-wardrobe`, `interior_cabinet`, -c / 2 + 1, 3.28, l / 2 - 0.85),
    gt(e, t, n, f),
    (e.landmarks = [
      ...(e.landmarks ?? []),
      { id: i, label: `ALDER HOUSE`, x: a, z: s, w: c, d: l },
    ]));
}
function gt(e, t, n, r) {
  let { id: i, w: a, d: o } = t,
    s = -a / 2 + 0.2,
    c = i + `-f1-side-centre--1`;
  ((e.objects = e.objects.filter((e) => e.id !== c)),
    (e.colliderDefs = e.colliderDefs.filter((e) => e.id !== `demo-` + c)),
    n(`living-side-apron`, s, 3.28, 0, 0.4, 0.85, 3, `plaster`),
    n(`living-side-front-pier`, s, 4.13, -1.45, 0.4, 1.75, 0.1, `plaster`),
    n(`living-side-bedroom-pier`, s, 4.13, 1.1, 0.4, 1.75, 0.8, `plaster`),
    n(
      `living-side-sill`,
      s - 0.07,
      4.1,
      -0.35,
      0.62,
      0.12,
      2.3,
      `concreteDark`,
    ));
  for (let e of [-1.35, 0.65])
    n(`living-side-frame-` + e, s, 4.22, e, 0.22, 1.66, 0.1, `timberDark`);
  (n(`living-side-transom`, s, 5.5, -0.35, 0.16, 0.075, 2.1, `timberDark`),
    n(`living-side-glass`, s + 0.07, 5.575, -0.35, 0.05, 0.24, 1.9, `glass`),
    n(`living-side-head`, s, 5.815, -0.35, 0.22, 0.065, 2.1, `timberDark`),
    n(
      `living-side-hood`,
      s - 0.13,
      5.92,
      -0.35,
      0.65,
      0.12,
      2.5,
      `plaster`,
      !1,
    ));
  for (let e of [-1, 1])
    (n(
      `residential-side-belt-` + e,
      e * (a / 2 + 0.02),
      3.1,
      0,
      0.16,
      0.18,
      o - 0.5,
      `plaster`,
      !1,
    ),
      n(
        `residential-side-cornice-` + e,
        (e * a) / 2,
        6.48,
        0,
        0.58,
        0.22,
        o,
        `plaster`,
      ),
      n(
        `residential-side-lip-` + e,
        (e * a) / 2,
        6.7,
        0,
        0.68,
        0.1,
        o + 0.1,
        `concreteDark`,
      ),
      n(
        `rear-corner-quoin-` + e,
        e * (a / 2 - 0.18),
        0.08,
        o / 2 - 0.015,
        0.3,
        6.4,
        0.44,
        `plaster`,
      ),
      n(
        `courtyard-jamb-` + e,
        e * 1.39,
        0.08,
        o / 2 + 0.04,
        0.24,
        2.56,
        0.6,
        `plaster`,
      ));
  (n(
    `residential-rear-cornice`,
    0,
    6.48,
    o / 2,
    a + 0.58,
    0.22,
    0.58,
    `plaster`,
  ),
    n(
      `residential-rear-lip`,
      0,
      6.7,
      o / 2,
      a + 0.68,
      0.1,
      0.68,
      `concreteDark`,
    ),
    n(`courtyard-head`, 0, 2.55, o / 2 + 0.04, 3.02, 0.22, 0.6, `plaster`),
    n(
      `courtyard-canopy`,
      0,
      2.82,
      o / 2 + 0.5,
      3.4,
      0.12,
      1.25,
      `concreteDark`,
      !1,
    ),
    r(
      `courtyard-exterior`,
      `RESIDENTS / COURTYARD`,
      0,
      3.48,
      o / 2 + 0.1,
      3.8,
      0.22,
      0,
    ));
}
function _t(e, t) {
  let n = t.id + `-`,
    r = [],
    i = {},
    a = [];
  for (let t of e.objects) {
    if (!t.id.startsWith(n)) continue;
    let o = t.id.slice(n.length),
      s =
        /^(shop-stock-wall-|records-wall-|bedroom-wall-|service-store-wall-)/.test(
          o,
        );
    if (
      !s &&
      !/^f[01]-(side-(pier|centre)-|window-(sill|jamb)-|centre-sill-)/.test(
        o,
      ) &&
      !/^(factory-apron-|parts-front-base$|side-upper-apron-|shop-side-apron-|living-side-(apron|bedroom-pier|front-pier)$)/.test(
        o,
      )
    )
      continue;
    (r.push(t.id), s && a.push(t.id));
    let c = [];
    (o.includes(`-window-sill-`) &&
      c.push(o.replace(`-window-sill-`, `-window-cap-`)),
      o.includes(`-window-jamb-`) &&
        c.push(o.replace(`-window-jamb-`, `-window-frame-`)),
      o.startsWith(`factory-apron-`) &&
        c.push(o.replace(`factory-apron-`, `factory-sill-`)),
      o === `parts-front-base` && c.push(`parts-stone-sill`),
      o.startsWith(`side-upper-apron-`) &&
        c.push(o.replace(`side-upper-apron-`, `side-upper-sill-`)),
      o.startsWith(`shop-side-apron-`) &&
        c.push(o.replace(`shop-side-apron-`, `shop-side-sill-`)),
      o === `living-side-apron` && c.push(`living-side-sill`),
      o.startsWith(`bedroom-wall-`) &&
        c.push(`bedroom-door-trim-` + (o.endsWith(`-0`) ? `-1` : `1`)),
      (i[t.id] = c
        .map((e) => n + e)
        .filter((t) => e.objects.some((e) => e.id === t))));
  }
  ((t.demolitionPanels = r),
    (t.demolitionAttachments = i),
    (t.interiorDemolitionPanels = a));
}
