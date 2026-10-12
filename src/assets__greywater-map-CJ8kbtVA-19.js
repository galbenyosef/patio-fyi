// assets__greywater-map-CJ8kbtVA 19 — math
// Lines 173060-173671 of readable/assets__greywater-map-CJ8kbtVA.pretty.js (statement-aligned).
function bt(e, t) {
  let n = [...vt, ...yt],
    r = new Set(n.map((e) => e[0])),
    i = (e) => r.has(e?.match(/(?:^|-)(infill-\d+)(?:-|$)/)?.[1]);
  ((e.objects = e.objects.filter((e) => !i(e.id))),
    (e.colliderDefs = e.colliderDefs.filter((e) => !i(e.id))),
    (e.props = e.props.filter((e) => !i(e.id))),
    (e.signs = e.signs.filter((e) => !i(e.id))),
    (e.reviewBlock = []));
  for (let [t, r, i, a = 1] of n) {
    let n = e.buildings.find((e) => e.id === t),
      { x: o, y: s, z: l, w: u, d } = n,
      f =
        i === `shop`
          ? `plaster`
          : i === `apartments`
            ? `plasterRed`
            : `concrete`;
    e.lights = e.lights.filter(
      (e) =>
        !(Math.abs(e.x - o) < u / 2 + 0.5 && Math.abs(e.z - l) < d / 2 + 0.5),
    );
    let p = (n, r, i, a, c, u, d, p = f, m = !0) => {
        let h = t + `-` + n;
        (e.objects.push({
          id: h,
          kind: `box`,
          x: o + r,
          y: s + i,
          z: l + a,
          sx: c,
          sy: u,
          sz: d,
          material: p,
          cast: !0,
        }),
          m &&
            e.colliderDefs.push({
              id: `demo-` + h,
              aabb: [
                o + r - c / 2,
                s + i,
                l + a - d / 2,
                o + r + c / 2,
                s + i + u,
                l + a + d / 2,
              ],
              surface: p === `timber` ? `wood` : `concrete`,
            }));
      },
      m = (n, r, i, a, u, d = 0) => {
        let f = c[r],
          p = Math.abs(Math.sin(d)) > 0.5,
          m = f.size[p ? 2 : 0],
          h = f.size[p ? 0 : 2];
        (e.props.push({
          id: t + `-` + n,
          model: r,
          x: o + i,
          y: s + a,
          z: l + u,
          yaw: d,
        }),
          e.colliderDefs.push({
            id: `demo-` + t + `-` + n,
            aabb: [
              o + i - m / 2,
              s + a,
              l + u - h / 2,
              o + i + m / 2,
              s + a + f.size[1],
              l + u + h / 2,
            ],
            surface: `wood`,
          }));
      };
    p(`demo-floor`, 0, -0.25, 0, u, 0.33, d, `concrete`);
    let h = u / 2 - 1.4,
      g = -2.8,
      _ = 2.8;
    p(`upper-main`, -1.05, 3.08, 0, u - 2.9, 0.2, d - 0.8, `concrete`);
    for (let e of [-1, 1])
      p(
        `upper-landing-` + e,
        u / 2 - 1.45,
        3.08,
        (e * (d / 2 + 2.4)) / 2,
        2.1,
        0.2,
        d / 2 - 3.2,
        `concrete`,
      );
    for (let e = 0; e < 20; e++)
      p(
        `stair-tread-` + e,
        h,
        0.08 + e * 0.16,
        g + ((e + 0.5) * 5.6) / 20,
        1.9,
        0.16,
        5.6 / 20,
        `concrete`,
        !1,
      );
    (e.colliderDefs.push({
      id: `demo-` + t + `-stair-ramp`,
      aabb: [o + h - 0.95, s + 0.08, l + g, o + h + 0.95, s + 3.28, l + _],
      ramp: {
        y: s + 0.08,
        start: l + g,
        end: l + _,
        rise: 3.2,
        thickness: 0.16,
      },
      surface: `concrete`,
    }),
      p(`stair-guard`, u / 2 - 2.55, 3.28, 0, 0.12, 1, 5.6, `metalDark`));
    for (let e = 0; e < 2; e++) {
      let t = 0.08 + e * 3.2;
      for (let n of [-1, 1]) {
        let r = n * (d / 2 - 0.2),
          a = (u - 3) / 2;
        p(`f${e}-front-header-${n}`, 0, t + 2.65, r, u, 0.55, 0.4);
        for (let o of [-1, 1]) {
          let s = o * (1.5 + a / 2);
          if (i === `workshop` && e === 0 && n === -1 && o === -1) {
            for (let e of [-1, 1])
              p(
                `loading-jamb-${e}`,
                s + e * (a / 2 - 0.18),
                t,
                r,
                0.36,
                2.65,
                0.5,
                `concreteDark`,
              );
            p(`loading-header`, s, t + 2.45, r, a, 0.2, 0.5, `metalDark`);
            continue;
          }
          let c = e === 0 && i === `shop` ? 0.5 : 0.85,
            l = e === 0 && i === `shop` ? Math.min(3, a - 0.6) : 1.65,
            u = (a - l) / 2;
          p(`f${e}-window-sill-${n}-${o}`, s, t, r, a, c, 0.4);
          for (let i of [-1, 1])
            (p(
              `f${e}-window-jamb-${n}-${o}-${i}`,
              s + i * (l / 2 + u / 2),
              t,
              r,
              u,
              2.65,
              0.4,
            ),
              p(
                `f${e}-window-frame-${n}-${o}-${i}`,
                s + i * (l / 2 - 0.045),
                t + c,
                r,
                0.09,
                2.65 - c,
                0.24,
                `metalDark`,
              ));
          (p(
            `f${e}-window-cap-${n}-${o}`,
            s,
            t + c,
            r + n * 0.08,
            l + 0.25,
            0.08,
            0.55,
            `concreteDark`,
            !1,
          ),
            p(
              `f${e}-window-trim-${n}-${o}`,
              s,
              t + 2.58,
              r,
              l,
              0.07,
              0.24,
              `metalDark`,
              !1,
            ));
        }
        if (
          (p(
            `f${e}-door-head-${n}`,
            0,
            t + 2.45,
            r,
            3,
            0.2,
            0.4,
            `concreteDark`,
          ),
          e)
        ) {
          (i !== `apartments` || n !== -1) &&
            p(`f${e}-centre-sill-${n}`, 0, t, r, 3, 0.85, 0.4);
          for (let i of [-1, 1])
            p(`f${e}-centre-jamb-${n}-${i}`, i * 1.175, t, r, 0.65, 2.45, 0.4);
        }
      }
      for (let n of [-1, 1]) {
        let r = n * (u / 2 - 0.2),
          i = (d - 0.8 - 3) / 2;
        p(`f${e}-side-header-${n}`, r, t + 2.6, 0, 0.4, 0.6, d - 0.8);
        for (let a of [-1, 1])
          p(`f${e}-side-pier-${n}-${a}`, r, t, a * (1.5 + i / 2), 0.4, 2.6, i);
        (e || n === 1) && p(`f${e}-side-centre-${n}`, r, t, 0, 0.4, 2.6, 3);
      }
      for (let n of [-1, 1])
        p(
          `f${e}-room-partition-${n}`,
          -1.4,
          t,
          (n * (d / 2 + 1.4)) / 2,
          0.18,
          2.65,
          d / 2 - 1.4,
          `plaster`,
        );
      p(`f${e}-partition-head`, -1.4, t + 2.35, 0, 0.18, 0.3, 2.8, `plaster`);
    }
    n.breachPanels = [];
    for (let r of [-1, 1]) {
      let i = `f0-side-pier-${r}--1`,
        a = e.objects.find((e) => e.id === t + `-` + i);
      n.breachPanels.push(a.id);
    }
    p(`roof`, 0, 6.48, 0, u + 0.35, 0.22, d + 0.35, `roof`);
    for (let e of [-1, 1])
      (p(
        `roof-edge-z-` + e,
        0,
        6.7,
        (e * d) / 2,
        u + 0.35,
        0.5,
        0.22,
        `concreteDark`,
      ),
        p(
          `roof-edge-x-` + e,
          (e * u) / 2,
          6.7,
          0,
          0.22,
          0.5,
          d,
          `concreteDark`,
        ),
        p(
          `belt-` + e,
          0,
          3.1,
          e * (d / 2 + 0.05),
          u + 0.2,
          0.18,
          0.16,
          `concreteDark`,
          !1,
        ));
    if (
      (p(
        `entry-canopy`,
        0,
        2.8,
        -d / 2 - 0.6,
        i === `shop` ? u - 1 : 3.6,
        0.16,
        1.4,
        `metalDark`,
        !1,
      ),
      i !== `apartments` &&
        p(
          `sign-board`,
          0,
          2.96,
          -d / 2 - 0.24,
          Math.min(u - 1, 8),
          0.6,
          0.12,
          `metalDark`,
          !1,
        ),
      e.signs.unshift({
        id: t + `-identity`,
        text: r,
        x: o,
        y: s + (i === `apartments` ? 3.75 : 3.25),
        z: l - d / 2 - (i === `apartments` ? 1.31 : 0.31),
        ry: Math.PI,
        w: i === `apartments` ? 3.5 : Math.min(u - 1, 7.8),
        h: i === `apartments` ? 0.35 : 0.5,
        col: 14075814,
        style: `painted`,
        font: +(i === `shop`),
      }),
      i === `apartments` &&
        p(`raised-cornice`, 0, 6.95, -d / 2, u + 0.5, 0.22, 0.55, `plaster`),
      i === `apartments`)
    ) {
      (p(`balcony-floor`, 0, 3.08, -d / 2 - 0.55, 3.8, 0.2, 1.5, `concrete`),
        p(
          `balcony-front`,
          0,
          3.28,
          -d / 2 - 1.24,
          3.8,
          0.95,
          0.12,
          `metalDark`,
        ));
      for (let e of [-1, 1])
        p(
          `balcony-return-` + e,
          e * 1.84,
          3.28,
          -d / 2 - 0.55,
          0.12,
          0.95,
          1.5,
          `metalDark`,
        );
    }
    if (i === `workshop`)
      for (let e of [-u / 2 + 0.4, u / 2 - 0.4])
        p(
          `service-pilaster-` + e,
          e,
          0.08,
          -d / 2 - 0.08,
          0.48,
          6.4,
          0.22,
          `concreteDark`,
          !1,
        );
    for (let e of [0, 1]) {
      let t = 0.08 + e * 3.2;
      p(
        `room-floor-` + e,
        -u / 4 - 0.7,
        t + 0.002,
        0,
        u / 2 - 1.4,
        0.009,
        d - 0.5,
        i === `apartments` ? `timber` : `concreteDark`,
        !1,
      );
      for (let n of [-1, 1])
        p(
          `skirting-${e}-${n}`,
          -u / 4 - 0.7,
          t + 0.01,
          n * (d / 2 - 0.24),
          u / 2 - 1.6,
          0.12,
          0.06,
          `timberDark`,
          !1,
        );
    }
    let v = -u * 0.3;
    if (i === `shop`) {
      for (let e of [-1, 1]) {
        for (let t of [e * (u / 2 - 0.32), e * 1.62])
          (p(
            `shop-pilaster-` + t,
            t,
            0.08,
            -d / 2 - 0.12,
            0.26,
            2.72,
            0.26,
            `timberDark`,
          ),
            p(
              `shop-plinth-` + t,
              t,
              0.08,
              -d / 2 - 0.16,
              0.38,
              0.28,
              0.34,
              `concreteDark`,
            ),
            p(
              `shop-capital-` + t,
              t,
              2.6,
              -d / 2 - 0.16,
              0.38,
              0.18,
              0.34,
              `timberDark`,
              !1,
            ));
        let t = (u - 3) / 2,
          n = e * (1.5 + t / 2);
        (p(
          `shop-stall-panel-` + e,
          n,
          0.16,
          -d / 2 - 0.025,
          t - 0.55,
          0.31,
          0.08,
          `timberDark`,
          !1,
        ),
          p(
            `shop-stall-inset-` + e,
            n,
            0.22,
            -d / 2 - 0.071,
            t - 0.77,
            0.18,
            0.024,
            `timber`,
            !1,
          ),
          p(
            `shop-entry-reveal-` + e,
            e * 1.32,
            0.08,
            -d / 2 + 0.1,
            0.36,
            2.45,
            0.6,
            `timberDark`,
          ));
      }
      (p(
        `shop-door-transom`,
        0,
        2.28,
        -d / 2 - 0.01,
        2.3,
        0.12,
        0.24,
        `timberDark`,
      ),
        p(
          `shop-cornice-lower`,
          0,
          2.76,
          -d / 2 - 0.2,
          u - 0.25,
          0.12,
          0.46,
          `timberDark`,
          !1,
        ),
        p(
          `shop-cornice-crown`,
          0,
          3.57,
          -d / 2 - 0.25,
          u - 0.1,
          0.12,
          0.56,
          `concreteDark`,
          !1,
        ));
      let e = -u / 2 + 0.4,
        t = v,
        n = 1.3;
      for (let [r, i] of [
        [e, t - n / 2],
        [t + n / 2, -1.49],
      ])
        p(
          `shop-stock-wall-` + r,
          (r + i) / 2,
          0.08,
          1.75,
          i - r,
          2.65,
          0.18,
          `plaster`,
        );
      (p(`shop-stock-lintel`, t, 2.33, 1.75, n, 0.4, 0.18, `plaster`),
        m(`sales-counter`, `interior_counter`, v, 0.08, -d * 0.22, Math.PI / 2),
        m(
          `stock-shelf`,
          `interior_shelf`,
          -u / 2 + 0.7,
          0.08,
          d / 2 - 1.3,
          Math.PI / 2,
        ),
        m(
          `stock-shelf-east`,
          `interior_shelf`,
          -2.1,
          0.08,
          d / 2 - 1.3,
          -Math.PI / 2,
        ),
        m(
          `shop-display`,
          `interior_shelf`,
          -u / 2 + 0.7,
          0.08,
          0.2,
          Math.PI / 2,
        ),
        m(`upstairs-desk`, `interior_table`, v, 3.28, -d * 0.23),
        m(`upstairs-storage`, `interior_cabinet`, v, 3.28, d * 0.28));
    } else
      i === `apartments`
        ? (m(`lobby-bench`, `interior_sofa`, v, 0.08, d * 0.24),
          m(`lobby-shelf`, `interior_shelf`, v, 0.08, -d * 0.25),
          m(`bedroom`, `interior_bed`, v, 3.28, Math.max(3.3, d * 0.22)),
          m(`living-sofa`, `interior_sofa`, v, 3.28, -d * 0.3),
          m(`living-table`, `interior_table`, v, 3.28, -d * 0.12))
        : (m(`workbench`, `interior_counter`, v, 0.08, -d * 0.2, Math.PI / 2),
          m(`tool-cabinet`, `interior_cabinet`, v, 0.08, d * 0.28),
          m(`office-table`, `interior_table`, v, 3.28, -d * 0.22),
          m(`records`, `interior_shelf`, v, 3.28, d * 0.28));
    if (
      (i === `workshop` && ut(e, n, p, m),
      i === `shop` && pt(e, n, p, m),
      i === `apartments` && ht(e, n, p, m),
      Object.assign(n, {
        h: i === `workshop` ? 8.05 : 6.7,
        floors: 2,
        reviewUse: i,
        stair: {
          x: o + h,
          start: l + g,
          end: l + _,
          bottom: s + 0.08,
          top: s + 3.28,
        },
        infillInterior: !0,
      }),
      Object.assign(
        e.infill.find((e) => e.id === t),
        { floors: 2, reviewUse: i },
      ),
      e.reviewBlock.push({
        id: t,
        label: r,
        use: i,
        x: o,
        y: s,
        z: l,
        w: u,
        d,
      }),
      (n.reviewMirror = a),
      a === -1)
    ) {
      for (let n of e.objects.filter((e) => e.id.startsWith(t + `-`)))
        ((n.x = 2 * o - n.x),
          (n.z = 2 * l - n.z),
          (n.rotX &&= -n.rotX),
          n.ry && (n.ry += Math.PI));
      for (let n of e.props.filter((e) => e.id.startsWith(t + `-`)))
        ((n.x = 2 * o - n.x),
          (n.z = 2 * l - n.z),
          (n.yaw = (n.yaw ?? 0) + Math.PI));
      for (let n of e.signs.filter((e) => e.id.startsWith(t + `-`)))
        ((n.x = 2 * o - n.x),
          (n.z = 2 * l - n.z),
          (n.ry = (n.ry ?? 0) + Math.PI));
      for (let n of e.colliderDefs.filter((e) =>
        e.id.startsWith(`demo-` + t + `-`),
      )) {
        let e = n.aabb;
        ((n.aabb = [
          2 * o - e[3],
          e[1],
          2 * l - e[5],
          2 * o - e[0],
          e[4],
          2 * l - e[2],
        ]),
          n.ramp &&
            ((n.ramp.start = 2 * l - n.ramp.start),
            (n.ramp.end = 2 * l - n.ramp.end)));
      }
      ((n.stair.x = 2 * o - n.stair.x),
        (n.stair.start = 2 * l - n.stair.start),
        (n.stair.end = 2 * l - n.stair.end));
    }
    _t(e, n);
    for (let n of e.landmarks ?? []) n.id === t && (n.label = r);
    for (let n of e.signs)
      n.id === t + `-rear-label` && (n.text = r + ` / RECEIVING`);
    if (yt.some((e) => e[0] === t))
      for (let n of e.objects.filter((e) => e.id.startsWith(t + `-`)))
        (i === `shop` &&
          n.material === `canvasGreen` &&
          (n.material = `timberDark`),
          i === `apartments` &&
            n.material === `plasterRed` &&
            (n.material = `concrete`));
  }
  for (let t of e.objects)
    [`district-tree-9-crown`, `district-tree-16-crown`].includes(t.id) &&
      ((t.sx = 3), (t.sz = 3));
  return e;
}
