// assets__greywater-map-CJ8kbtVA 11 — math
// Lines 170517-171328 of readable/assets__greywater-map-CJ8kbtVA.pretty.js (statement-aligned).
function ot(e, t) {
  ((e.highrises = []),
    (e.lifts = []),
    (e.towerRooms = []),
    (e.facadeBuildings = []));
  for (let [n, r] of J.entries()) {
    let i = it[r.id];
    if (i) {
      let { id: n, x: a, z: o } = r,
        s = t(a, o);
      (e.facadeBuildings.push({
        id: n,
        spec: i.spec,
        x: a,
        y: s,
        z: o,
        rotY: o < 0 ? 0 : Math.PI,
        w: i.w,
        d: i.d,
        h: i.h,
      }),
        i.shells.forEach(([t, r, i, c], l) =>
          e.colliderDefs.push({
            id: `demo-${n}-shell${l ? `-` + l : ``}`,
            aabb: [
              a - t / 2,
              s + (l ? i : -0.4),
              o - r / 2,
              a + t / 2,
              s + c,
              o + r / 2,
            ],
            surface: `concrete`,
          }),
        ),
        e.buildings.push({
          id: n,
          x: a,
          y: s,
          z: o,
          w: r.width + 7,
          d: r.depth + 3,
          h: i.shells.at(-1)[3],
          exteriorOnly: !0,
          tower: !0,
        }));
      continue;
    }
    let { id: a, x: o, z: s, floors: c, width: l, depth: u } = r,
      d = t(o, s),
      f = c * Y,
      p = d + f,
      m = Math.sign(s),
      h = (t, n, r, i, c, l, u, f, p = !0, h = !0) => {
        n *= m;
        let g = `${a}-${t}`;
        (e.objects.push({
          id: g,
          kind: `box`,
          x: o + n,
          y: d + r,
          z: s + i,
          sx: c,
          sy: l,
          sz: u,
          material: f,
          cast: h,
        }),
          p &&
            e.colliderDefs.push({
              id: `demo-${g}`,
              aabb: [
                o + n - c / 2,
                d + r,
                s + i - u / 2,
                o + n + c / 2,
                d + r + l,
                s + i + u / 2,
              ],
              surface: f.startsWith(`metal`) ? `metal` : `concrete`,
            }));
      },
      g = (t, n, r, i, c, l, u) => {
        let f = o + n * m,
          p = s + Math.min(i, c),
          g = s + Math.max(i, c),
          _ = Math.sign(c - i) * 0.82;
        e.colliderDefs.push({
          id: `demo-${a}-${t}`,
          aabb: [f - l / 2, d + r, p, f + l / 2, d + r + Y + 0.05, g],
          ramp: { y: d + r, start: s + i, end: s + c - _, rise: Y },
          surface: `concrete`,
        });
        let v = (c - i) / 8;
        for (let e = 0; e < 8; e++)
          h(
            `${t}-step-${e}`,
            n,
            r,
            i + v * (e + 0.5),
            l,
            (e + 1) * (Y / 8),
            Math.abs(v),
            u,
            !1,
            !1,
          );
      },
      _ = n % 3 == 0 ? `plasterRed` : n % 3 == 1 ? `plaster` : `concrete`,
      v = l - 0.8,
      y = u - 0.8,
      b = -l * 0.22,
      x = -u * 0.2,
      S = (e) => b + (e % 2 ? 1.05 : -1.05),
      C = new Set(at(r, n));
    (h(`foundation`, 0, -0.35, 0, l + 3, 0.5, u + 3, `concreteDark`),
      h(`podium`, 0, 0, 0, l, 6.4, u, `concreteDark`));
    let w = (e, t, n, r, i, a, o, s) => {
        n - t < 0.05 ||
          i - r < 0.05 ||
          h(e, (t + n) / 2, a, (r + i) / 2, n - t, o, i - r, s);
      },
      T = (e, t, n, r, i, a) => {
        let o = S(e - 1) - 1.08,
          s = S(e - 1) + 1.08,
          c = x - 2.36,
          l = x + 2.36;
        (w(`slab-${e}-n`, -i, i, -a, c, t, n, r),
          w(`slab-${e}-s`, -i, i, l, a, t, n, r),
          w(`slab-${e}-w`, -i, o, c, l, t, n, r),
          w(`slab-${e}-e`, s, i, c, l, t, n, r));
      };
    for (let e = 2; e < c; e++)
      T(e, e * Y - 0.22, 0.22, `concrete`, v / 2, y / 2);
    for (let e = 2; e < c; e++) {
      let t = e % 2 ? 1 : -1;
      g(
        `corestair-${e}`,
        S(e),
        e * Y,
        x + t * 2.36,
        x - t * 2.32,
        2.05,
        `concreteDark`,
      );
    }
    (n * 7 + 3) % 3;
    let E = ((n * 2654435761) ^ (c * 97)) >>> 0,
      D = () => (E = (Math.imul(E, 1664525) + 1013904223) >>> 0) / 4294967296,
      ee = (e, t) => Math.abs(e - b) > 3.4 || Math.abs(t - x) > 3.6,
      O = (e, t, n) => {
        for (let r = 0; r < n; r++) {
          let n = 0,
            i = 0,
            a = !1;
          for (let e = 0; e < 6 && !a; e++)
            ((n = (D() * 2 - 1) * (v / 2 - 2.3)),
              (i = (D() * 2 - 1) * (y / 2 - 2.3)),
              (a = ee(n, i) && n > -v / 2 + 2.4));
          if (!a) continue;
          let o = Math.floor(D() * 4);
          o === 0
            ? (h(
                `prop-${e}-${r}-a`,
                n,
                t,
                i,
                1.15,
                1.15,
                1.15,
                `crate`,
                !0,
                !1,
              ),
              h(
                `prop-${e}-${r}-b`,
                n + 0.95,
                t,
                i + 0.25,
                1.15,
                1.15,
                1.15,
                `crate`,
                !0,
                !1,
              ),
              h(
                `prop-${e}-${r}-c`,
                n + 0.45,
                t + 1.15,
                i + 0.1,
                0.95,
                0.95,
                0.95,
                `crate`,
                !0,
                !1,
              ))
            : o === 1
              ? (h(
                  `prop-${e}-${r}-a`,
                  n,
                  t,
                  i,
                  2.3,
                  0.18,
                  1.5,
                  `timber`,
                  !0,
                  !1,
                ),
                h(
                  `prop-${e}-${r}-b`,
                  n,
                  t + 0.18,
                  i,
                  2.1,
                  0.8,
                  1.3,
                  `timberDark`,
                  !0,
                  !1,
                ))
              : o === 2
                ? (h(
                    `prop-${e}-${r}-a`,
                    n,
                    t,
                    i,
                    1.9,
                    0.6,
                    0.7,
                    `sandbag`,
                    !0,
                    !1,
                  ),
                  h(
                    `prop-${e}-${r}-b`,
                    n + 0.6,
                    t,
                    i + 0.95,
                    0.7,
                    0.6,
                    1.4,
                    `sandbag`,
                    !0,
                    !1,
                  ))
                : (h(
                    `prop-${e}-${r}-a`,
                    n,
                    t,
                    i,
                    0.8,
                    1.1,
                    0.8,
                    `metalDark`,
                    !0,
                    !1,
                  ),
                  h(
                    `prop-${e}-${r}-b`,
                    n + 0.98,
                    t,
                    i + 0.12,
                    0.8,
                    1.1,
                    0.8,
                    `metalDark`,
                    !0,
                    !1,
                  ));
        }
      },
      te = (e, t) => {
        for (let n of [-1, 1])
          for (let r of [-1, 1])
            h(
              `col-${e}-${n}-${r}`,
              n * l * 0.3,
              t,
              r * u * 0.3,
              0.45,
              2.98,
              0.45,
              `concreteDark`,
            );
      };
    for (let e = 0; e < c; e++) {
      let t = e * Y;
      if (e < 2)
        h(`band-${e}`, 0, t + 3, 0, l + 0.2, 0.2, u + 0.2, `concreteDark`, !1);
      else {
        let n = t + 3.02 - (e === c - 1 ? 0.34 : 0),
          r = 0.5;
        for (let t of [-1, 1])
          (h(
            `band-${e}-z${t}`,
            0,
            n,
            (t * (u + 0.2 - r)) / 2,
            l + 0.2,
            0.2,
            r,
            `concreteDark`,
            !1,
            !1,
          ),
            h(
              `band-${e}-x${t}`,
              (t * (l + 0.2 - r)) / 2,
              n,
              0,
              r,
              0.2,
              u + 0.2 - 2 * r,
              `concreteDark`,
              !1,
              !1,
            ));
      }
      if (e < 2)
        for (let n of [-1, 1])
          for (let r = 0; r < 4; r++) {
            let i = ((r - 1.5) * (l - 2)) / 4,
              a = ((r - 1.5) * (u - 2)) / 4;
            (h(
              `window-z-${e}-${n}-${r}`,
              i,
              t + 0.8,
              n * (u / 2 + 0.015),
              (l - 2) / 4 - 1,
              1.65,
              0.08,
              `glass`,
              !1,
            ),
              h(
                `window-x-${e}-${n}-${r}`,
                n * (l / 2 + 0.015),
                t + 0.8,
                a,
                0.08,
                1.65,
                (u - 2) / 4 - 1,
                `glass`,
                !1,
              ));
          }
      else if (C.has(e)) {
        let n = (e, n, r, i, a) => h(e, n, t + 2.4, r, i, 0.56, a, _);
        for (let r of [-1, 1])
          (h(`nest-${e}-sill-z${r}`, 0, t, (r * y) / 2, v, 1.05, 0.24, _),
            h(
              `nest-${e}-pillar-z${r}`,
              0,
              t + 1.05,
              (r * y) / 2,
              0.55,
              1.35,
              0.24,
              _,
            ),
            n(`nest-${e}-header-z${r}`, 0, (r * y) / 2, v, 0.24));
        (h(`nest-${e}-sill-x1`, v / 2, t, 0, 0.24, 1.05, y, _),
          h(`nest-${e}-pillar-x1`, v / 2, t + 1.05, 0, 0.24, 1.35, 0.55, _),
          n(`nest-${e}-header-x1`, v / 2, 0, 0.24, y),
          n(`nest-${e}-header-x0`, -v / 2, 0, 0.24, y),
          h(`nest-${e}-sill-xm`, -v / 2, t, 0, 0.24, 1.05, 3.1, _));
        for (let n of [-1, 1])
          (h(`nest-${e}-jamb-a${n}`, -v / 2, t, n * 1.62, 0.3, 2.4, 0.3, _),
            h(`nest-${e}-jamb-b${n}`, -v / 2, t, n * 3.18, 0.3, 2.4, 0.3, _),
            w(
              `nest-${e}-sill-xo${n}`,
              -v / 2 - 0.12,
              -v / 2 + 0.12,
              n === 1 ? 3.33 : -y / 2,
              n === 1 ? y / 2 : -3.33,
              t,
              1.05,
              _,
            ));
      } else if (e >= 2) {
        e / c;
        let n = tt[rt(a)],
          r = (r, i, a) => {
            let o = i ? v : y,
              s = Math.max(1, Math.round(o / n.bay)),
              c = o / s,
              l = (e, n, r, o, s) => {
                if (r - n < 0.02 || s - o < 0.02) return;
                let c = (n + r) / 2;
                i
                  ? h(e, c, t + o, (a * y) / 2, r - n, s - o, 0.24, _)
                  : h(e, (a * v) / 2, t + o, c, 0.24, s - o, r - n, _);
              };
            for (let t = 0; t < s; t++) {
              let i = -o / 2 + t * c,
                a = i + c,
                s = (i + a) / 2,
                [u, d, f, p] = n.band
                  ? [i + 0.05, a - 0.05, n.band.sill, Y - n.band.head]
                  : [
                      s - Math.min(n.win.w, c - 0.5) / 2,
                      s + Math.min(n.win.w, c - 0.5) / 2,
                      n.win.sill,
                      n.win.sill + Math.min(n.win.h, Y - n.win.sill - 0.35),
                    ];
              (l(`fin-${e}-${r}-${t}-sill`, i, a, 0, f),
                l(`fin-${e}-${r}-${t}-head`, i, a, p, Y),
                l(`fin-${e}-${r}-${t}-l`, i, u, f, p),
                l(`fin-${e}-${r}-${t}-r`, d, a, f, p));
            }
          };
        if ((r(`z-1`, !0, -1), r(`z1`, !0, 1), r(`x1`, !1, 1), D() < 0.55)) {
          let n = l * (0.12 + D() * 0.1),
            r = (D() * 2 - 1) * u * 0.12,
            i = D() < 0.5,
            a = (i ? y : v) * 0.42;
          i
            ? h(`part-${e}`, n, t, r, 0.18, 2.98, a, _)
            : h(`part-${e}`, n, t, r, a, 2.98, 0.18, _);
        }
        (te(e, t), O(e, t, 2 + +(D() < 0.5)));
      }
      C.has(e) && (te(e, t), O(e, t, 2));
    }
    for (let e of [-1, 1]) {
      for (let t of [-1, 1])
        h(
          `pier-${e}-${t}`,
          e * (l / 2 - 0.2),
          0,
          t * (u / 2 - 0.2),
          0.55,
          f,
          0.55,
          `concreteDark`,
          !1,
        );
      h(`parapet-z-${e}`, 0, f, e * (u / 2 - 0.2), l, 1.05, 0.4, _);
    }
    {
      let e = (e) => {
        let t = Math.max(2, Math.round(e / 5.2)),
          n = [];
        for (let r = 1; r < t; r++) n.push((r / t - 0.5) * e);
        return n;
      };
      for (let t of [-1, 1])
        for (let n of e(l - 1.6))
          h(
            `pilaster-z${t}-${n.toFixed(1)}`,
            n,
            6.4,
            t * (u / 2 + 0.03),
            0.34,
            f - 6.4,
            0.26,
            `concreteDark`,
            !1,
          );
      for (let t of e(u - 1.6))
        h(
          `pilaster-x1-${t.toFixed(1)}`,
          l / 2 + 0.03,
          6.4,
          t,
          0.26,
          f - 6.4,
          0.34,
          `concreteDark`,
          !1,
        );
    }
    h(`parapet-west`, -l / 2 + 0.2, f, 0, 0.4, 1.05, u, _);
    for (let e of [-1, 1])
      h(
        `parapet-east-${e}`,
        l / 2 - 0.2,
        f,
        e * (u / 4 + 0.75),
        0.4,
        1.05,
        u / 2 - 1.5,
        _,
      );
    (T(c, f - 0.3, 0.3, `roof`, l / 2, u / 2),
      h(`roof-stairwell-z-1`, b, f, x - 2.5, 4.5, 2.8, 0.22, `concrete`),
      h(`roof-stairwell-z1`, b, f, x + 2.5, 4.5, 2.8, 0.22, `concrete`),
      h(`roof-stairwell-x0`, b - 2.25, f, x, 0.22, 2.8, 5, `concrete`),
      h(`stairwell-cap`, b, f + 2.8, x, 4.9, 0.2, 5.4, `roof`));
    for (let e = 0; e < 3; e++) {
      let t = -3 + e * 3.1;
      (h(`ac-base-${e}`, t, f, u * 0.22, 2.5, 0.25, 2, `concreteDark`),
        h(`ac-${e}`, t, f + 0.25, u * 0.22, 2.2, 1.3, 1.7, `metal`));
      for (let n = 0; n < 5; n++)
        h(
          `ac-fin-${e}-${n}`,
          t,
          f + 0.42 + n * 0.2,
          u * 0.22 + 0.86,
          1.8,
          0.05,
          0.04,
          `metalDark`,
          !1,
        );
    }
    let k = -(l / 2 + 1);
    {
      let n = -2.36,
        r = t(o + m * k, s + n - 2.6),
        i = d + 0.15 - r;
      if (i > 0.05) {
        e.colliderDefs.push({
          id: `demo-${a}-stair-approach`,
          aabb: [
            o + m * k - 0.95,
            r - 0.05,
            s + n - 2.6,
            o + m * k + 0.95,
            d + 0.4,
            s + n,
          ],
          ramp: { y: r, start: s + n - 2.6, end: s + n, rise: i },
          surface: `concrete`,
        });
        for (let e = 0; e < 4; e++)
          h(
            `stair-approach-step-${e}`,
            k,
            r - d + (i * (e + 1)) / 4 - i / 4 - 0.1,
            -4.96 + (e + 0.5) * 0.65,
            1.9,
            i / 4 + 0.12,
            0.65,
            `concrete`,
            !1,
            !1,
          );
      }
    }
    let ne = (e) => k - (e % 2 ? 1.6 : 0);
    for (let e = 0; e < c; e++) {
      let t = e % 2 ? 1 : -1;
      g(`extstair-${e}`, ne(e), e * Y, t * 2.36, -t * 2.32, 1.7, `concrete`);
      let n = (e + 1) * Y - 0.22,
        r = -t * 2.6;
      w(
        `extland-${e}`,
        -(l / 2) - 3.45,
        -(l / 2) + 0.45,
        r - 0.85,
        r + 0.85,
        n,
        0.22,
        `concrete`,
      );
    }
    let A = o + m * (l / 2 + 2),
      j = -Math.sign(s),
      M = j * (u / 2 + 0.08);
    for (let e of [-1, 1]) {
      h(
        `shop-${e}`,
        e * l * 0.29,
        0.25,
        M,
        l * 0.32,
        2.65,
        0.12,
        n % 2 ? `metal` : `glass`,
        !1,
      );
      for (let t = 0; t < 3; t++)
        h(
          `shop-frame-${e}-${t}`,
          e * l * 0.29 + (t - 1) * l * 0.105,
          0.25,
          M + j * 0.08,
          0.07,
          2.65,
          0.08,
          `metalDark`,
          !1,
        );
      (h(
        `shop-sill-${e}`,
        e * l * 0.29,
        0.2,
        M + j * 0.1,
        l * 0.34,
        0.12,
        0.25,
        `concrete`,
        !1,
      ),
        h(
          `door-${e}`,
          e * 0.55,
          0.05,
          M + j * 0.04,
          1.05,
          2.8,
          0.12,
          `glass`,
          !1,
        ),
        h(
          `door-handle-${e}`,
          e * 0.15,
          1.05,
          M + j * 0.15,
          0.06,
          0.6,
          0.08,
          `metal`,
          !1,
        ),
        h(
          `arcade-column-${e}`,
          e * (l / 2 - 1),
          0,
          j * (u / 2 + 2),
          0.32,
          3.4,
          0.32,
          `concrete`,
        ),
        h(
          `planter-${e}`,
          e * l * 0.29,
          0,
          j * (u / 2 + 2.1),
          3,
          0.65,
          1.1,
          `concrete`,
        ),
        h(
          `hedge-${e}`,
          e * l * 0.29,
          0.65,
          j * (u / 2 + 2.1),
          2.7,
          0.55,
          0.85,
          `orchard`,
          !1,
        ));
    }
    (h(`entry-lintel`, 0, 2.85, M + j * 0.1, 2.5, 0.25, 0.25, `concrete`, !1),
      h(
        `arcade-canopy`,
        0,
        3.35,
        j * (u / 2 + 1.2),
        l + 0.5,
        0.22,
        2.8,
        `roof`,
      ),
      h(
        `canopy-fascia`,
        0,
        3.18,
        j * (u / 2 + 2.62),
        l + 0.5,
        0.32,
        0.12,
        n % 2 ? `plasterRed` : `amber`,
        !1,
      ),
      e.objects.push({
        id: `${a}-lift-walk`,
        kind: `box`,
        x: A + m * 3,
        y: d + 0.012,
        z: s,
        sx: 6,
        sy: 0.018,
        sz: 8,
        material: `concrete`,
        cast: !1,
      }),
      h(`lift-landing`, l / 2 + 0.25, f - 0.3, 0, 0.5, 0.3, 3, `metal`));
    for (let e of [-1, 1])
      (h(
        `lift-shaft-wall-${e}`,
        l / 2 + 2,
        0,
        e * 1.72,
        3.6,
        f + 3,
        0.22,
        `metalDark`,
      ),
        h(
          `lift-rail-${e}`,
          l / 2 + 3.65,
          0,
          e * 1.65,
          0.18,
          f + 3,
          0.18,
          `metal`,
        ));
    (h(
      `lift-shaft-back`,
      l / 2 + 3.72,
      3.2,
      0,
      0.18,
      f - 3.2,
      3.6,
      `concreteDark`,
    ),
      h(`lift-machine-room`, l / 2 + 2, f + 3, 0, 3.8, 1.1, 3.8, `metalDark`));
    for (let n of [...C].filter((e) => e <= 8).slice(0, 2)) {
      let r = [],
        i = -1;
      for (let e = 0; e < n; e++) {
        i = e % 2 ? 1 : -1;
        let t = o + m * (k - (e % 2 ? 1.6 : 0));
        r.push(
          [t, d + e * Y, s + i * 2.36],
          [t, d + (e + 1) * Y, s - i * 2.32],
        );
      }
      let c = d + n * Y;
      r.push(
        [o + m * (-(l / 2) - 1.6), c, s - i * 2.6],
        [o + m * (-v / 2 + 0.8), c, s - i * 2.4],
      );
      let u = o + m * k;
      e.towerRooms.push({
        id: `${a}-nest-${n}`,
        buildingId: a,
        floorIndex: n,
        urban: !0,
        tower: !0,
        x: o,
        z: s,
        floor: c,
        stairRoute: r,
        entry: r.at(-1),
        door: r.at(-1).slice(),
        stairStart: [u, t(u, s - 5), s - 5],
        stations: [
          {
            id: `nest-n-a`,
            pos: [o + m * (-v * 0.22), c, s - y / 2 + 0.8],
            yaw: 0,
          },
          {
            id: `nest-n-b`,
            pos: [o + v * 0.22 * m, c, s - y / 2 + 0.8],
            yaw: 0,
          },
          {
            id: `nest-s-a`,
            pos: [o + m * (-v * 0.22), c, s + y / 2 - 0.8],
            yaw: Math.PI,
          },
          {
            id: `nest-s-b`,
            pos: [o + v * 0.22 * m, c, s + y / 2 - 0.8],
            yaw: Math.PI,
          },
          {
            id: `nest-lift-a`,
            pos: [o + m * (v / 2 - 0.8), c, s - y * 0.2],
            yaw: (-m * Math.PI) / 2,
          },
          {
            id: `nest-lift-b`,
            pos: [o + m * (v / 2 - 0.8), c, s + y * 0.2],
            yaw: (-m * Math.PI) / 2,
          },
        ],
      });
    }
    (e.highrises.push({
      ...r,
      base: d,
      roof: p,
      nestFloors: [...C],
      skin: rt(a),
    }),
      e.lifts.push({
        id: `lift-${n}`,
        bottom: [A, d, 0 + s],
        top: [A, p, s],
        width: 3,
        depth: 3,
        accessSide: m,
      }),
      e.buildings.push({
        id: a,
        x: o,
        y: d,
        z: s,
        w: l + 7,
        d: u + 3,
        h: f + 3,
        exteriorOnly: !0,
        tower: !0,
      }));
  }
  return e;
}
