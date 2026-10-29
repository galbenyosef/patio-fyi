// assets__greywater-map-Q51CbCv- 09 — objects
// Lines 170100-170445 of readable/assets__greywater-map-Q51CbCv-.pretty.js (statement-aligned).
function et(e) {
  let t = e.urbanBuildings.find((e) => e.id === `urban-6`);
  if (!t) return e;
  let { id: n, x: r, y: i, z: a } = t,
    o = new Set([
      n + `-f0-sill-1-1`,
      n + `-awning-1`,
      n + `-roof-plant`,
      n + `-f0-west`,
      n + `-f1-west`,
    ]);
  for (let t of e.objects)
    t.id.startsWith(n + `-f0-interior-`) &&
      !t.id.includes(`-interior-wall-`) &&
      o.add(t.id);
  ((e.objects = e.objects.filter((e) => !o.has(e.id))),
    (e.colliderDefs = e.colliderDefs.filter((e) => !o.has(e.id.slice(5)))));
  for (let t of e.objects)
    t.id.startsWith(n + `-`) &&
      t.material === `plaster` &&
      (t.material = t.id.includes(`-f1-`) ? `plaster` : `concreteDark`);
  let s = (t, o, s, c, l, u, d, f = `metalDark`, p = !1, m = `box`) => {
    let h = n + `-workshop-` + t;
    (e.objects.push({
      id: h,
      kind: m,
      x: r + o,
      y: i + s,
      z: a + c,
      sx: l,
      sy: u,
      sz: d,
      material: f,
      cast: !0,
    }),
      p &&
        e.colliderDefs.push({
          id: `demo-` + h,
          aabb: [
            r + o - l / 2,
            i + s,
            a + c - d / 2,
            r + o + l / 2,
            i + s + u,
            a + c + d / 2,
          ],
          surface: f.startsWith(`metal`)
            ? `metal`
            : f.startsWith(`timber`)
              ? `wood`
              : `concrete`,
        }));
  };
  for (let t = 0; t < 2; t++) {
    for (let [r, i, a, o, c] of [
      [`west-mid`, t ? 1.4 : -1.4, t * 3.2, 14.4, 3.2],
      [`west-doorhead`, t ? -7 : 7, t * 3.2 + 2.5, 2.8, 0.7],
      [`west-corner`, t ? -8.8 : 8.8, t * 3.2, 0.4, 3.2],
    ]) {
      s(
        r + `-` + t,
        -10.8,
        a,
        i,
        0.4,
        c,
        o,
        t ? `plaster` : `concreteDark`,
        !0,
      );
      let l = n + `-f` + t + `-` + r;
      ((e.objects.at(-1).id = l), (e.colliderDefs.at(-1).id = `demo-` + l));
    }
    s(
      `west-landing-` + t,
      -13.8,
      t * 3.2 - 0.18,
      t ? -7 : 7,
      6.4,
      0.18,
      3,
      `concrete`,
      !0,
    );
  }
  for (let e = 0; e < 20; e++)
    s(
      `west-step-` + e,
      -15.5,
      e * 0.16,
      7 - (e + 0.5) * 0.7,
      2.5,
      0.16,
      0.7,
      `concrete`,
    );
  e.colliderDefs.push({
    id: `demo-` + n + `-workshop-west-ramp`,
    aabb: [r - 16.8, i, a - 7.4, r - 14.2, i + 3.2, a + 7.4],
    ramp: { y: i, start: a + 7, end: a - 7, rise: 3.2, thickness: 0.16 },
    surface: `concrete`,
  });
  for (let t of [-16.9, -14.1]) {
    (s(`west-stringer-` + t, t, 1.35, 0, 0.12, 0.16, Math.hypot(14, 3.2)),
      (e.objects.at(-1).rotX = Math.atan(3.2 / 14)),
      s(`west-handrail-` + t, t, 2.55, 0, 0.08, 0.08, Math.hypot(14, 3.2)),
      (e.objects.at(-1).rotX = Math.atan(3.2 / 14)));
    for (let e of [-7, 0, 7])
      s(
        `west-rail-post-` + t + `-` + e,
        t,
        (3.2 * (7 - e)) / 14,
        e,
        0.1,
        1,
        0.1,
      );
  }
  s(`apron-slab`, 0, -0.15, 16, 26, 0.15, 14, `concrete`, !0);
  for (let e of [12.5, 21])
    s(`west-kerb-` + e, -12.85, 0, e, 0.3, 0.16, 5, `concreteDark`, !0);
  let c = (t, n, r, i, a, o = `plaster`) => {
    (s(t, n, 0.003, r, i, 0.004, a, o), (e.objects.at(-1).cast = !1));
  };
  for (let [e, t, n] of [
    [`west`, -50, 25],
    [`east`, 28, 27],
  ]) {
    (s(`receiving-` + e + `-slab`, t, -0.15, n, 16, 0.15, 8, `concrete`, !0),
      s(`receiving-` + e + `-roof`, t, 3.1, n, 16.6, 0.18, 8.6, `roofRed`, !0),
      s(
        `receiving-` + e + `-fascia`,
        t,
        2.88,
        n + 4.2,
        16.6,
        0.24,
        0.16,
        `roofRed`,
      ));
    for (let r of [-7.7, 0, 7.7]) {
      for (let i of [-3.7, 3.7])
        s(
          `receiving-` + e + `-post-` + r + `-` + i,
          t + r,
          0,
          n + i,
          0.2,
          3.1,
          0.2,
          `metalDark`,
          !0,
        );
      s(`receiving-` + e + `-rafter-` + r, t + r, 2.9, n, 0.16, 0.2, 8.1);
    }
    let r = `receiving-` + e + `-screen`;
    (s(r, t, 0, n + 3.7, 14.8, 2.2, 0.35, `concrete`, !0),
      s(r + `-cap`, t, 2.2, n + 3.7, 15, 0.12, 0.5, `concreteDark`));
    for (let r of [-5, 5]) {
      s(
        `receiving-` + e + `-stack-` + r,
        t + r,
        0,
        n - 2,
        2.8,
        0.75,
        1.6,
        `timberDark`,
        !0,
      );
      for (let i = 0; i < 3; i++)
        s(
          `receiving-` + e + `-stock-` + r + `-` + i,
          t + r,
          0.76 + i * 0.14,
          n - 2,
          3.2,
          0.1,
          1.4,
          `metal`,
        );
    }
  }
  (s(`receiving-transfer-wall`, -30, 0, 20, 10, 1.2, 0.45, `concrete`, !0),
    s(
      `receiving-transfer-wall-cap`,
      -30,
      1.2,
      20,
      10.2,
      0.12,
      0.6,
      `concreteDark`,
    ));
  for (let e of [3.5, 8.3]) {
    for (let t of [-1, 1])
      c(`bay-line-` + e + `-` + t, e + t * 1.75, 17, 0.09, 9);
    c(`bay-stop-` + e, e, 21.5, 3.6, 0.09);
  }
  for (let e of [-1.25, 1.25]) c(`walk-line-` + e, e, 18, 0.1, 9, `amber`);
  for (let e = 0; e < 6; e++)
    c(`walk-crossing-` + e, 0, 20 + e * 0.42, 2.4, 0.18);
  c(`drain`, 0, 22.7, 24, 0.22, `metalDark`);
  for (let e = 0; e < 24; e++)
    c(`drain-slot-` + e, -11.5 + e, 22.7, 0.06, 0.18, `metal`);
  for (let e of [-10, -5, 0, 5, 10])
    c(`apron-joint-` + e, e, 16, 0.018, 13.5, `concreteDark`);
  for (let e of [-9.5, -6.5]) {
    (s(`freight-pallet-` + e, e, 0, 19, 2.5, 0.18, 2.2, `timberDark`, !0),
      s(`freight-crate-` + e, e, 0.18, 19, 2.2, 1.05, 1.9, `timber`, !0));
    for (let t of [-1, 1])
      s(
        `freight-band-` + e + `-` + t,
        e + t * 0.75,
        0.18,
        19.96,
        0.1,
        1.05,
        0.025,
        `metalDark`,
      );
  }
  e.objects = e.objects.filter(
    (e) => !e.id.startsWith(n + `-workshop-freight-`),
  );
  for (let e of [3.5, 8.3]) {
    for (let t of [-1, 1])
      s(`bay-jamb-` + e + `-` + t, e + t * 1.9, 0, 9.04, 0.1, 2.65, 0.12);
    s(`shutter-box-` + e, e, 2.66, 9.14, 3.9, 0.36, 0.42, `metal`);
    for (let t = 0; t < 3; t++)
      s(
        `rolled-shutter-` + e + `-` + t,
        e,
        2.67 + t * 0.095,
        9.37,
        3.7,
        0.04,
        0.035,
        `metal`,
      );
    s(`bay-threshold-` + e, e, -0.025, 9, 3.6, 0.05, 0.6, `metal`, !0);
  }
  s(`service-canopy`, 7.6, 2.94, 12, 6.1, 0.18, 6.2, `roofRed`, !0);
  for (let e of [4.75, 10.45])
    s(`canopy-post-` + e, e, 0, 14.8, 0.18, 2.94, 0.18, `metalDark`, !0);
  s(`canopy-fascia`, 7.6, 2.72, 15.12, 6.1, 0.22, 0.16, `roofRed`);
  for (let e of [5, 7.6, 10.2])
    s(`canopy-beam-` + e, e, 2.74, 12, 0.12, 0.2, 5.8);
  for (let t of $e.colliders)
    e.colliderDefs.push({
      id: `demo-` + n + `-roof-metal-` + t.id,
      aabb: t.aabb.map((e, t) => e + [r, i, a][t % 3]),
      surface: t.surface,
    });
  (t.demolitionAttachments ??= {})[n + `-roof`] = [
    ...$e.colliders.map((e) => n + `-roof-metal-` + e.id),
    n + `-ventilation-roof`,
  ];
  for (let e of [-1, 1]) {
    s(`eaves-` + e, 0, 6.34, e * 9.35, 22.7, 0.2, 0.2, `metalDark`);
    for (let t of [-9, -7, -4, 4, 7, 9])
      s(
        `window-mullion-` + e + `-` + t,
        t,
        4.12,
        e * 8.88,
        0.07,
        1.73,
        0.08,
        `metalDark`,
      );
  }
  for (let e of [-10.45, 10.45])
    s(`downpipe-` + e, e, 0.05, 9.12, 0.12, 6.28, 0.12, `metal`);
  (s(`electrical-cabinet`, -8.8, 0.45, 9.16, 1.2, 1.55, 0.32, `metal`, !0),
    s(`cabinet-handle`, -8.4, 1.1, 9.34, 0.04, 0.32, 0.05),
    s(`parts-bin`, -6, 0.02, 14, 3.1, 1.05, 1.8, `metal`, !0));
  for (let e of [-7.2, -6, -4.8])
    s(`bin-rib-` + e, e, 0.08, 14.92, 0.09, 0.92, 0.1);
  (s(`apron-pallet`, -3, 0, 12, 1.8, 0.18, 1.4, `timberDark`, !0),
    s(`dispatch-board`, -8.7, 4.25, 5.8, 0.12, 1.35, 2.4, `timberDark`, !0));
  for (let e of [-0.95, 0.95])
    s(
      `dispatch-board-leg-` + e,
      -8.7,
      3.2,
      5.8 + e,
      0.16,
      1.05,
      0.16,
      `metalDark`,
      !0,
    );
  for (let e = 0; e < 3; e++)
    for (let t = 0; t < 3; t++)
      s(
        `dispatch-job-` + e + `-` + t,
        -8.62,
        4.4 + e * 0.34,
        5.05 + t * 0.65,
        0.025,
        0.23,
        0.42,
        e === 0 ? `amber` : `plaster`,
      );
  for (let e of [2, 3, 4])
    s(`dispatch-folder-` + e, e, 4.14, -3.7, 0.5, 0.12, 0.55, `timberDark`);
  for (let t of Qe.colliders)
    e.colliderDefs.push({
      id: `demo-` + n + `-equipment-` + t.id,
      aabb: t.aabb.map((e, t) => e + [r, i, a][t % 3]),
      surface: t.surface,
    });
  return (
    (t.workshop = {
      revision: 4,
      use: `repair bays, ventilated industrial roof, service court and dual-access dispatch room`,
      westAccess: !0,
      westRoute: [
        [-18, 9],
        [-15.5, 7],
        [-15.5, -7],
        [-9.5, -7],
        [-9.5, 0],
        [0, 0],
        [0, 7.7],
      ].map(([e, t], n) => [r + e, i + (n >= 2 ? 3.2 : 0), a + t]),
      route: [
        [8, 17],
        [8, 10],
        [8, 7.7],
        [7.7, 0],
        [0, 0],
        [0, -10],
        [18, -10],
        [18, 7],
        [12.5, 7],
        [12.5, -7],
        [7.7, -7],
        [7.7, 0],
      ].map(([e, t], n) => [r + e, i + (n >= 9 ? 3.2 : 0), a + t]),
      note: `Open service bays, central through-door and east/west stair counter-routes; protected structural frame retained. Ventilation roof has shared solid main volumes, no new stair route to its top.`,
    }),
    e
  );
}
