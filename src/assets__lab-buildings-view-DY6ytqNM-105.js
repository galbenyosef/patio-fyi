// assets__lab-buildings-view-DY6ytqNM 105 — box
// Lines 33479-35703 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
(Pl.push(function () {
  [
    [`ห้างทอง RATTANA GOLD`, 11740702, 15913056],
    [`SOMCHAI MOTOR`, 2050714, 16777215],
    [`ก๋วยเตี๋ยว NOODLE 99`, 15913530, 11740702],
    [`ร้านยา PHARMACY`, 2787914, 16777215],
  ].forEach(([e, t, n], r) =>
    R(`asSignThai${r}`, e, 3.6, 0.7, {
      bg: t,
      fg: n,
      border: n,
      font: Vl,
      weight: 800,
      size: 0.6,
      spacing: 0.04,
    }),
  );
  let e = {
      win: {
        w: 2.8,
        h: 1.6,
        sill: 0.9,
        type: `grid`,
        lites: [4, 2],
        frame: `aluminum`,
        rec: 0.1,
        curtains: 0.5,
      },
    },
    t = (t, n, r) => {
      for (let i = 0; i < r.nb; i++) {
        let a = r.grid[0][i],
          o = i * r.bw,
          s = o + r.bw / 2;
        (t.box(
          `asSignThai${i}`,
          n,
          a,
          o + 0.3,
          o + r.bw - 0.3,
          3.15,
          3.85,
          0.04,
          0.08,
          {
            planar: (e, t) => [(e - o - 0.3) / (r.bw - 0.6), (t - 3.15) / 0.7],
          },
        ),
          t.box(L, n, a, s - 1.72, s + 1.72, 2.95, 3.12, -0.1, 0.1),
          i % 2 &&
            t.box(`rollup`, n, a, s - 1.65, s + 1.65, 2.2, 2.95, -0.12, -0.08),
          t.box(
            `asAccordion`,
            n,
            a,
            s + 0.9,
            s + 1.65,
            0.02,
            2.95,
            -0.08,
            -0.05,
            { planar: (e, t) => [(e - s) / 0.5, t / 0.5] },
          ),
          i >= 2 &&
            Hl(t, n, a, `awningRed`, o + 0.2, o + r.bw - 0.2, 3.05, 1.6, 0.55));
        for (let a = 1; a <= r.top; a++) {
          let o = r.ys[a] + e.win.sill,
            c = o + e.win.h,
            l = r.grid[a][i],
            u = s - 1.5,
            d = s + 1.5;
          t.box(
            `asConcreteLight`,
            n,
            l,
            u - 0.12,
            d + 0.12,
            c + 0.05,
            c + 0.17,
            0,
            0.62,
          );
          for (let e of [u - 0.12, d])
            t.box(
              `asConcreteLight`,
              n,
              l,
              e,
              e + 0.12,
              o - 0.1,
              c + 0.05,
              0,
              0.42,
            );
          if (
            (t.box(`asConcreteLight`, n, l, u, d, o - 0.12, o - 0.02, 0, 0.3),
            t.box(`asGrille`, n, l, u, d, o, c, 0.14, 0.16, {
              planar: (e, t) => [(e - u) / 0.75, (t - o) / 0.8],
            }),
            (i + a) % 3 == 0 && El(t, n, l, s + 1.1, r.ys[a] + 0.25, 0.02),
            (i + a) % 2)
          )
            for (let e of [u + 0.3, u + 0.9])
              Al(t, n, l, e, o - 0.02, 0.18, 0.7);
        }
      }
      let a = r.grid[0][0];
      (t.add(
        `asWhite`,
        new C(0.1, 0.12, 1.3, 8).translate(0.7, 0.65, 1.6),
        n,
        a,
      ),
        t.box(`asGold`, n, a, 0.35, 1.05, 1.3, 1.36, 1.25, 1.95),
        t.box(`asRedLacquer`, n, a, 0.47, 0.93, 1.36, 1.72, 1.4, 1.8),
        t.add(
          `asTileOrange`,
          new d(0.45, 0.6, 4)
            .rotateY(Math.PI / 4)
            .scale(1, 1, 0.75)
            .translate(0.7, 2.02, 1.6),
          n,
          a,
        ),
        t.add(`asGold`, new d(0.05, 0.45, 6).translate(0.7, 2.5, 1.6), n, a));
      for (let e = 0; e < 6; e++)
        t.add(
          `asOchre`,
          new i(0.05, 6, 4).translate(0.42 + e * 0.11, 1.33, 1.97),
          n,
          a,
        );
      let o = r.grid[0][2];
      (t.box(`asStainless`, n, o, 8.6, 9.8, 0.3, 1.1, 0.5, 1.2),
        t.box(`glass`, n, o, 8.7, 9.7, 1.1, 1.6, 0.6, 0.62));
      for (let e of [8.8, 9.6])
        t.add(
          L,
          new C(0.18, 0.18, 0.06, 10)
            .rotateX(Math.PI / 2)
            .translate(e, 0.18, 1.22),
          n,
          o,
        );
      for (let [e, r] of [
        [10.4, 1.3],
        [11, 1.8],
        [10.5, 2.2],
      ])
        kl(t, n, o, `asPlasticRed`, e, r, 0.42);
    };
  return {
    key: `asThaiRow`,
    name: `Rattana Shophouse Row`,
    plain: 13289406,
    desc: `Bangkok shophouse row: four concrete units with folding steel gates and roll shutters, bright bilingual Thai signboards, 1960s sun-hood fins and grilles round the upper windows, awnings, a noodle cart and a spirit house.`,
    W: 16,
    D: 12,
    style: {
      wall: `asConcreteLight`,
      t: 0.25,
      bay: 4,
      floors: [4, 3.2, 3.2],
      parapet: 1,
      ...e,
      door: { w: 3.3, h: 2.95, transom: 0, frame: L, open: !0, rec: 0.12 },
      pilaster: { mat: `asConcreteStain`, w: 0.34, out: 0.1, through: !0 },
      belt: { mat: `asConcreteStain`, h: 0.2, out: 0.05 },
    },
    front: { kinds: (e) => (e === 0 ? `door` : `window`), extra: t },
    back: {
      kinds: (e, t) => (e === 0 ? (t % 2 ? `door` : `solid`) : `window`),
    },
    right: { kinds: (e, t) => (e > 0 && t === 1 ? `window` : `solid`) },
    left: { kinds: () => `solid` },
    extra: (e, t, n) => {
      for (let r of [-6, -2, 2])
        jl(e, t, r, -4, n.H, 0.5, 1.1, `asStainless`, 0.9);
      (e.box(`asTinRust`, t, 0, 4.2, 7.6, n.H, n.H + 2.3, -5.6, -1.2),
        e.box(`asTinBlue`, t, 0, 4, 7.8, n.H + 2.3, n.H + 2.4, -5.8, -1));
    },
  };
}),
  Pl.push(function () {
    return (
      R(`asSignRuiFu`, `瑞福堂`, 1.6, 0.45, {
        bg: 1841688,
        fg: 14727240,
        border: 14727240,
        font: dl,
        size: 0.62,
        spacing: 0.3,
      }),
      {
        key: `asPeranakan`,
        name: `Emerald Hill Terrace`,
        plain: 10474684,
        desc: `Singapore Peranakan terrace house: mint stucco, glazed floral tile dados and pier panels, carved pintu pagar half doors, tall shuttered french windows with balustrades, rosette frieze, clay-tile eave over the five-foot way.`,
        W: 6.2,
        D: 16,
        style: {
          wall: `asStuccoMint`,
          t: 0.25,
          bay: 2.07,
          floors: [3.8],
          win0: {
            w: 1.25,
            h: 2,
            sill: 0.8,
            type: `grid`,
            lites: [2, 3],
            frame: `asTeal`,
            shutter: `asLouvreBlue`,
            rec: 0.12,
            curtains: 0.4,
          },
          win: {
            w: 1.3,
            h: 2.6,
            sill: 0.3,
            type: `grid`,
            lites: [2, 4],
            frame: `asTeal`,
            shutter: `asLouvreGreen`,
            header: `asWhite`,
            headerH: 0.2,
            rec: 0.1,
            curtains: 0.5,
          },
          door: {
            w: 1.4,
            h: 2.5,
            transom: 0.45,
            frame: `asTeal`,
            mat: `asWoodBrown`,
            rec: 0.25,
            step: `asGranite`,
          },
          pilaster: { mat: `asWhite`, w: 0.28, out: 0.08 },
          roof: {
            ridge: `x`,
            pitch: 26 * zc,
            over: 0.7,
            mat: `asTileTerra`,
            fascia: `asWhite`,
          },
        },
        tiers: [
          {
            D: 14.2,
            dz: -0.9,
            floors: [3.8],
            style: { roof: Nl, pilaster: null },
            front: {
              kinds: (e, t) => (t === 1 ? `door` : `window`),
              extra: (e, t, n) => {
                let r = n.L / 2,
                  i = n.grid[0][1];
                for (let i = 0; i < n.nb; i++) {
                  let a = n.grid[0][i],
                    o = i * n.bw,
                    s = o + n.bw;
                  i === 1
                    ? (e.box(`asPeraTile`, t, a, o, r - 0.82, 0, 1, 0, 0.02),
                      e.box(`asPeraTile`, t, a, r + 0.82, s, 0, 1, 0, 0.02))
                    : e.box(`asPeraTile`, t, a, o, s, 0, 0.62, 0, 0.02);
                }
                for (let n of [-1, 1]) {
                  let a = n < 0 ? r - 0.7 : r + 0.02,
                    o = n < 0 ? r - 0.02 : r + 0.7;
                  (e.box(`asJade`, t, i, a, o, 0.35, 1.75, 0.03, 0.08),
                    e.box(
                      `asLouvreGreen`,
                      t,
                      i,
                      a + 0.08,
                      o - 0.08,
                      0.5,
                      1.6,
                      0.08,
                      0.1,
                    ),
                    e.box(`asGold`, t, i, a, o, 1.75, 1.85, 0.03, 0.08));
                }
                e.box(
                  `asSignRuiFu`,
                  t,
                  i,
                  r - 0.8,
                  r + 0.8,
                  3.15,
                  3.6,
                  0.02,
                  0.05,
                  {
                    planar: (e, t) => [(e - r + 0.8) / 1.6, (t - 3.15) / 0.45],
                  },
                );
              },
            },
          },
          {
            floors: [3.6],
            soffit: !0,
            front: {
              kinds: () => `window`,
              extra: (e, t, n) => {
                for (let r of [0.25, n.L - 0.25]) {
                  let i = n.grid[0][Hc(n, r)];
                  (e.box(
                    `asWhite`,
                    t,
                    i,
                    r - 0.25,
                    r + 0.25,
                    -3.8,
                    -0.6,
                    -0.5,
                    0,
                  ),
                    e.box(
                      `asPeraTile`,
                      t,
                      i,
                      r - 0.2,
                      r + 0.2,
                      -3.4,
                      -1.6,
                      0,
                      0.02,
                    ),
                    e.box(
                      `asWhite`,
                      t,
                      i,
                      r - 0.32,
                      r + 0.32,
                      -0.8,
                      -0.6,
                      -0.56,
                      0.06,
                    ),
                    wl(e, t, i, r + (r < 1 ? 0.6 : -0.6), -0.6, -0.5, {
                      r: 0.22,
                    }));
                }
                for (let r = 0; r < n.nb; r++) {
                  let i = n.grid[0][r],
                    a = (r + 0.5) * n.bw,
                    o = a - 0.65,
                    s = a + 0.65;
                  (e.box(`asBalusterWhite`, t, i, o, s, 0.3, 1.2, 0.03, 0.06, {
                    planar: (e, t) => [(e - o) / 1.3, (t - 0.3) / 0.9],
                  }),
                    e.box(
                      `asWhite`,
                      t,
                      i,
                      o - 0.05,
                      s + 0.05,
                      1.2,
                      1.27,
                      0,
                      0.09,
                    ),
                    r > 0 &&
                      e.box(
                        `asPeraTile`,
                        t,
                        i,
                        r * n.bw - 0.13,
                        r * n.bw + 0.13,
                        0.6,
                        2.6,
                        0.09,
                        0.1,
                      ));
                }
                for (let r = 0; r < n.nb; r++) {
                  let a = n.grid[0][r];
                  e.box(
                    `asWhite`,
                    t,
                    a,
                    r * n.bw,
                    (r + 1) * n.bw,
                    n.H - 0.45,
                    n.H - 0.08,
                    0,
                    0.06,
                  );
                  for (let o = r * n.bw + 0.25; o < (r + 1) * n.bw; o += 0.5)
                    e.add(
                      `asJade`,
                      new i(0.08, 8, 6)
                        .scale(1, 1, 0.5)
                        .translate(o, n.H - 0.27, 0.07),
                      t,
                      a,
                    );
                }
              },
            },
          },
        ],
        front: { kinds: () => `window` },
        back: { kinds: (e, t) => (e === 0 && t === 1 ? `door` : `window`) },
        right: { kinds: () => `solid` },
        left: { kinds: () => `solid` },
      }
    );
  }),
  Pl.push(function () {
    let e = 40 * zc,
      t = { ridge: `x`, pitch: e, over: 0.8, mat: `asZinc`, fascia: `asWhite` },
      n = {
        win: {
          w: 1.2,
          h: 1.9,
          sill: 0.4,
          type: `grid`,
          lites: [2, 3],
          frame: `asTeal`,
          shutter: `asLouvreBlue`,
          rec: 0.08,
          curtains: 0.4,
        },
      },
      r = (e, t) => (e === 0 ? `solid` : t === 1 ? `door` : `window`),
      a = (e) => (e === 0 ? `solid` : `window`),
      o = (e, t, n) => {
        for (let r = 0; r <= n.nb; r++) {
          let i = Math.min(n.L - 0.12, Math.max(0.12, r * n.bw)),
            a = n.grid[0][Math.min(n.nb - 1, r)];
          (e.box(`asTimber`, t, a, i - 0.11, i + 0.11, 0.3, n.ys[1], 0, 0.2),
            e.box(
              `asConcreteLight`,
              t,
              a,
              i - 0.2,
              i + 0.2,
              0,
              0.3,
              -0.08,
              0.3,
            ));
        }
      },
      s = (e) => (t, n, r) => {
        for (let i = 0; i < r.nb; i++) {
          if (e(1, i) === `solid`) continue;
          let a = (i + 0.5) * r.bw,
            o = r.ys[1] + 2.33;
          (t.box(
            `asTebar`,
            n,
            r.grid[1][i],
            a - 0.7,
            a + 0.7,
            o,
            o + 0.32,
            0.01,
            0.03,
            { planar: (e, t) => [(e - a) / 0.7, (t - o) / 0.32] },
          ),
            t.box(
              `asWhite`,
              n,
              r.grid[1][i],
              a - 0.75,
              a + 0.75,
              o + 0.32,
              o + 0.38,
              0,
              0.05,
            ));
        }
      },
      c = (t, n, r) => {
        let i = r.gableCell,
          a = r.L,
          o = r.H,
          s = (a / 2 + r.t) * Math.tan(e),
          c = o + 0.35,
          l = o + s - 0.5,
          u = (a / 2 + r.t) * (1 - 0.35 / s) - 0.5;
        (t.add(
          `asTebar`,
          new w(new T([Vc(a / 2 - u, c), Vc(a / 2 + u, c), Vc(a / 2, l)]), {
            depth: 0.03,
            bevelEnabled: !1,
          }).translate(0, 0, 0.35),
          n,
          i,
          { planar: (e, t) => [(e - a / 2) / 0.9, (t - c) / 0.9] },
        ),
          t.box(
            `asWhite`,
            n,
            i,
            a / 2 - u - 0.1,
            a / 2 + u + 0.1,
            c - 0.12,
            c,
            0,
            0.4,
          ));
        for (let e of [-1, 1])
          k(
            t,
            `asWhite`,
            n,
            i,
            [a / 2 + e * 1.2, o + s - 1, 0.45],
            [a / 2 - e * 0.55, o + s + 0.9, 0.45],
            0.12,
          );
      },
      l = (e, t, n) => {
        let r = n.ys[1],
          a = 2.4,
          o = 1.5 * n.bw;
        for (let [i, s, c] of hl(n, -0.2, n.L + 0.2)) {
          let l = n.grid[1][c];
          e.box(`asWoodBrown`, t, l, i, s, r - 0.14, r + 0.02, 0, a);
          let u =
            o > i && o < s
              ? [
                  [i, o - 0.7],
                  [o + 0.7, s],
                ]
              : [[i, s]];
          for (let [n, i] of u)
            i - n > 0.2 &&
              (e.box(`asBaluster`, t, l, n, i, r + 0.02, r + 0.85, 2.33, 2.35, {
                planar: (e, t) => [e / 1.2, (t - r) / 0.83],
              }),
              e.box(`asWhite`, t, l, n, i, r + 0.85, r + 0.93, 2.3, 2.38));
        }
        for (let i of [-0.1, 2.5, 5, 7.6, n.L + 0.1]) {
          let o = n.grid[1][Hc(n, i)];
          (e.box(`asWhite`, t, o, i - 0.07, i + 0.07, r, r + 2.15, 2.26, a),
            e.box(
              `asTimber`,
              t,
              n.grid[0][Hc(n, i)],
              i - 0.1,
              i + 0.1,
              0.3,
              r - 0.14,
              2.23,
              2.4299999999999997,
            ),
            e.box(
              `asConcreteLight`,
              t,
              n.grid[0][Hc(n, i)],
              i - 0.18,
              i + 0.18,
              0,
              0.3,
              2.15,
              2.51,
            ));
        }
        let s = n.grid[0][1],
          c = r / 9;
        for (let n = 0; n < 9; n++) {
          let i = a + n * 0.26,
            l = r - (n + 1) * c + c;
          (e.box(
            `asConcreteLight`,
            t,
            s,
            o - 0.6,
            o + 0.6,
            0,
            l - c + 0.02,
            i,
            i + 0.26,
          ),
            e.box(
              `asPeraTile`,
              t,
              s,
              o - 0.55,
              o + 0.55,
              l - 2 * c + 0.03,
              l - c,
              i + 0.26,
              i + 0.27,
            ));
        }
        for (let n of [-1, 1])
          k(
            e,
            `asWhite`,
            t,
            s,
            [o + n * 0.62, r + 0.9, a],
            [o + n * 0.62, 0.9, 4.74],
            0.07,
          );
        e.add(
          `asOnggi`,
          new i(0.32, 10, 8).scale(1, 1.1, 1).translate(o + 1.1, 0.34, 3.8),
          t,
          s,
        );
      };
    return {
      key: `asKampung`,
      name: `Rumah Kampung Hassan`,
      plain: 7031344,
      desc: `Malay kampung house on timber stilts: planked walls with tall louvred windows and carved vent panels, steep zinc roof with a tebar layar gable screen and crossed finials, railed serambi verandah and a tiled stair.`,
      W: 10,
      D: 9,
      style: {
        wall: `asWoodBrown`,
        floorMat: [`asSlatScreen`],
        t: 0.18,
        bay: 2.5,
        floors: [1.6, 3.4],
        ...n,
        door: {
          w: 1.1,
          h: 2.2,
          transom: 0,
          frame: `asTeal`,
          mat: `asPlankBlue`,
          rec: 0.1,
        },
        eaveTrim: `asWhite`,
        roof: t,
      },
      front: {
        kinds: r,
        extra: A(
          o,
          s(r),
          yl({
            y: 4.2,
            d: 2.65,
            rise: 0.45,
            a0: -0.3,
            a1: 10.3,
            mat: `asZinc`,
            trim: `asWhite`,
            step: 0,
          }),
          l,
        ),
      },
      back: { kinds: a, extra: A(o, s(a)) },
      right: { kinds: a, extra: A(o, s(a), c) },
      left: { kinds: a, extra: A(o, s(a), c) },
    };
  }),
  Pl.push(function () {
    return (
      R(`asSignVillanueva`, `CASA VILLANUEVA  1886`, 1.8, 0.4, {
        bg: 12101762,
        fg: 3811866,
        size: 0.55,
        spacing: 0.1,
      }),
      {
        key: `asBahay`,
        name: `Casa Villanueva`,
        plain: 7031344,
        desc: `Philippine bahay na bato: volcanic-tuff ground floor with a carriage door and barred windows, overhanging timber upper floor on carved canes, runs of sliding capiz-shell windows over balustered ventanillas, clay-tile hip roof.`,
        W: 14,
        D: 12,
        style: {
          wall: `asWoodBrown`,
          t: 0.3,
          bay: 2.8,
          floors: [3.4],
          win0: {
            w: 0.9,
            h: 1.1,
            sill: 1.3,
            type: `grid`,
            lites: [1, 1],
            frame: `asWoodBrown`,
            rec: 0.2,
            curtains: 0.2,
          },
          win: {
            w: 2.36,
            h: 1.7,
            sill: 0.9,
            type: `grid`,
            lites: [2, 1],
            frame: `asWoodBrown`,
            rec: 0.06,
            curtains: 0.2,
          },
          door: {
            w: 2.4,
            h: 2.8,
            transom: 0,
            frame: `asWoodBrown`,
            mat: `asWoodBrown`,
            rec: 0.35,
            step: `asTuff`,
          },
          roof: Nl,
        },
        tiers: [
          {
            floors: [3.4],
            style: {
              wall: `asTuff`,
              base: { mat: `asTuff`, h: 0.5, out: 0.06 },
            },
            front: {
              kinds: (e, t) => (t === 2 ? `door` : `window`),
              extra: (e, t, n) => {
                for (let r = 0; r < n.nb; r++) {
                  if (r === 2) continue;
                  let i = n.grid[0][r],
                    a = (r + 0.5) * n.bw;
                  for (let n = 0; n < 5; n++) {
                    let r = a - 0.36 + n * 0.18;
                    e.box(
                      L,
                      t,
                      i,
                      r - 0.018,
                      r + 0.018,
                      1.3,
                      2.4,
                      -0.06,
                      -0.02,
                    );
                  }
                  e.box(
                    `asTuff`,
                    t,
                    i,
                    a - 0.62,
                    a + 0.62,
                    1.18,
                    1.3,
                    -0.1,
                    0.12,
                  );
                }
                let r = n.grid[0][2],
                  i = 2.5 * n.bw;
                (e.box(
                  `asSignVillanueva`,
                  t,
                  r,
                  i - 0.9,
                  i + 0.9,
                  3,
                  3.35,
                  0,
                  0.03,
                  { planar: (e, t) => [(e - i + 0.9) / 1.8, (t - 3) / 0.35] },
                ),
                  e.box(L, t, r, i + 1.3, i + 1.36, 2.5, 2.56, 0, 0.45),
                  e.box(
                    `asLanternWhite`,
                    t,
                    r,
                    i + 1.2,
                    i + 1.46,
                    2.1,
                    2.5,
                    0.35,
                    0.6,
                  ),
                  e.box(L, t, r, i + 1.18, i + 1.48, 2.5, 2.56, 0.33, 0.62));
              },
            },
          },
          {
            floors: [3.6],
            D: 12.9,
            dz: 0.45,
            soffit: !0,
            front: {
              kinds: () => `window`,
              extra: (e, t, n) => {
                for (let r = 0; r < n.nb; r++) {
                  let i = n.grid[0][r],
                    a = (r + 0.5) * n.bw,
                    o = a - 1.18,
                    s = a + 1.18,
                    c = 0.9,
                    l = 2.6;
                  (e.box(`asCapiz`, t, i, o, a + 0.05, c, l, 0.04, 0.07, {
                    planar: (e, t) => [(e - o) / 0.62, (t - c) / 0.85],
                  }),
                    r % 2 &&
                      e.box(
                        `asCapiz`,
                        t,
                        i,
                        a - 0.3,
                        a + 0.9,
                        c,
                        l,
                        0.08,
                        0.11,
                        {
                          planar: (e, t) => [
                            (e - a + 0.3) / 0.6,
                            (t - c) / 0.85,
                          ],
                        },
                      ));
                  for (let [n, r] of [
                    [0.85, 0.05],
                    [l, 0.05],
                  ])
                    e.box(
                      `asWoodBrown`,
                      t,
                      i,
                      o - 0.1,
                      s + 0.1,
                      n,
                      n + r,
                      0,
                      0.13,
                    );
                  (e.box(`asBlackLacquer`, t, i, o, s, 0.18, 0.78, 0.005, 0.01),
                    e.box(`asBaluster`, t, i, o, s, 0.18, 0.78, 0.03, 0.05, {
                      planar: (e, t) => [(e - o) / 0.8, (t - 0.18) / 0.6],
                    }),
                    e.box(
                      `asWoodBrown`,
                      t,
                      i,
                      o,
                      o + 0.8,
                      0.18,
                      0.78,
                      0.06,
                      0.08,
                    ),
                    e.box(
                      `asWoodBrown`,
                      t,
                      i,
                      o - 0.06,
                      s + 0.06,
                      0.1,
                      0.18,
                      0,
                      0.1,
                    ));
                }
                for (let r = 0; r <= n.nb; r++) {
                  let i = Math.min(n.L - 0.1, Math.max(0.1, r * n.bw)),
                    a = n.grid[0][Math.min(n.nb - 1, r)];
                  (k(
                    e,
                    `asWoodBrown`,
                    t,
                    a,
                    [i, -1.55, -0.86],
                    [i, -0.66, -0.12],
                    0.12,
                  ),
                    e.box(
                      `asWoodBrown`,
                      t,
                      a,
                      i - 0.08,
                      i + 0.08,
                      -0.75,
                      -0.6,
                      -0.9,
                      0,
                    ));
                }
              },
            },
          },
        ],
        front: { kinds: () => `window` },
        back: { kinds: (e, t) => (e === 0 && t === 2 ? `door` : `window`) },
        right: { kinds: (e, t) => (e === 0 && t % 2 ? `solid` : `window`) },
        left: { kinds: (e, t) => (e === 0 && t % 2 == 0 ? `solid` : `window`) },
        extra: (e, t, n) =>
          _l(e, t, {
            y: n.H,
            z: 0.45,
            a: n.W / 2,
            b: n.D / 2,
            over: 1,
            p1: 26 * zc,
            p2: 31 * zc,
            k: 1.1,
            mat: `asTileTerra`,
            trim: `asWoodBrown`,
            ridge: `asTileTerra`,
            hip: 0.22,
          }),
      }
    );
  }),
  Pl.push(function () {
    let e = [
      [`胡椒餅`, 13115420, 16769146, `awningRed`],
      [`珍珠奶茶`, 2763306, 8448255, `asTinBlue`],
      [`蚵仔煎`, 15913530, 13115420, `asPlasticYellow`],
      [`臭豆腐`, 2779706, 16777215, `asPlasticGreen`],
      [`大雞排`, 15235114, 16777215, `awningRed`],
    ];
    e.forEach(([e, t, n], r) =>
      R(`asSignNm${r}`, e, 3.2, 0.6, {
        bg: t,
        fg: n,
        border: n,
        glow: 0.9,
        font: dl,
        size: 0.66,
        spacing: 0.25,
      }),
    );
    let t = {
        win: {
          w: 2.4,
          h: 1.5,
          sill: 0.9,
          type: `grid`,
          lites: [3, 1],
          frame: `aluminum`,
          rec: 0.1,
          curtains: 0.6,
        },
      },
      n = (n, r, o) => {
        for (let s = 0; s < o.nb; s++) {
          let c = o.grid[0][s],
            l = s * o.bw,
            u = l + o.bw / 2,
            [, , , d] = e[s];
          (n.box(
            `asSignNm${s}`,
            r,
            c,
            u - 1.6,
            u + 1.6,
            3.12,
            3.72,
            0.04,
            0.08,
            { planar: (e, t) => [(e - u + 1.6) / 3.2, (t - 3.12) / 0.6] },
          ),
            n.box(L, r, c, u - 1.78, u + 1.78, 2.95, 3.1, -0.1, 0.12),
            Hl(n, r, c, d, l + 0.15, l + o.bw - 0.15, 3.05, 2.2, 0.45));
          for (let e of [l + 0.3, l + o.bw - 0.3])
            n.box(L, r, c, e - 0.03, e + 0.03, 0, 2.6, 2.1, 2.16);
          (n.box(`asStainless`, r, c, u - 1.5, u + 1.5, 0, 0.9, 0.2, 0.95),
            n.box(`asStainless`, r, c, u - 1.55, u + 1.55, 0.9, 0.95, 0.15, 1));
          for (let e = 0; e < 3; e++)
            n.add(
              e % 2 ? `asStainless` : L,
              new C(0.2, 0.2, 0.25, 10).translate(
                u - 0.9 + e * 0.9,
                1.08,
                0.55,
              ),
              r,
              c,
            );
          for (let e of [u - 0.9, u + 0.9])
            n.add(`asBulb`, new i(0.07, 8, 6).translate(e, 2.55, 1.3), r, c);
          wl(n, r, c, u, 2.62, 2, { r: 0.18 });
          for (let e = 1; e <= o.top; e++) {
            let i = o.grid[e][s],
              c = o.ys[e] + t.win.sill,
              l = c + t.win.h,
              d = u - 1.3,
              f = u + 1.3,
              p = 0.45;
            n.box(
              `asGrilleRust`,
              r,
              i,
              d,
              f,
              c - 0.1,
              l + 0.1,
              p,
              0.47000000000000003,
              { planar: (e, t) => [(e - d) / 0.65, (t - c) / 0.8] },
            );
            for (let e of [d, f - 0.02])
              n.box(`asGrilleRust`, r, i, e, e + 0.02, c - 0.1, l + 0.1, 0, p, {
                planar: (e, t, n) => [n / 0.65, (t - c) / 0.8],
              });
            (n.box(
              `asTinRust`,
              r,
              i,
              d - 0.05,
              f + 0.05,
              c - 0.14,
              c - 0.1,
              0,
              0.49,
            ),
              n.add(
                `asTinRust`,
                new a(f - d + 0.2, 0.04, 0.65)
                  .rotateX(0.25)
                  .translate(u, l + 0.2, p / 2),
                r,
                i,
              ),
              (s + e) % 2
                ? El(n, r, i, (s + 1) * o.bw - 0.5, o.ys[e] + 0.15, 0.02)
                : Al(n, r, i, u + 0.6, c - 0.1, 0.30000000000000004, 0.7));
          }
        }
        for (let [e, t] of [
          [3.9, 3.2],
          [12.4, 3.4],
        ]) {
          let i = o.grid[0][Hc(o, e)];
          (n.box(
            `asStainless`,
            r,
            i,
            e - 0.8,
            e + 0.8,
            0.35,
            1.2,
            t - 0.4,
            t + 0.4,
          ),
            n.box(`glass`, r, i, e - 0.7, e + 0.7, 1.2, 1.7, t - 0.3, t + 0.3),
            n.box(
              `asRedLacquer`,
              r,
              i,
              e - 0.85,
              e + 0.85,
              1.7,
              1.78,
              t - 0.45,
              t + 0.45,
            ));
          for (let a of [-1, 1])
            n.add(
              L,
              new C(0.2, 0.2, 0.08, 12)
                .rotateX(Math.PI / 2)
                .translate(e + a * 0.5, 0.2, t + 0.42),
              r,
              i,
            );
        }
      };
    return {
      key: `asNightMarket`,
      name: `Raohe Night-Market Row`,
      plain: 15131610,
      desc: `Taiwanese night-market row: white-tiled walk-ups whose open ground floors are food stalls under coloured tarps with glowing food signboards and lanterns, rusty iron window cages above, food carts, blue tin rooftop add-on.`,
      W: 20,
      D: 10,
      style: {
        wall: `asMosaicWhite`,
        t: 0.25,
        bay: 4,
        floors: [3.8, 3.2, 3.2],
        parapet: 0.8,
        ...t,
        door: { w: 3.5, h: 2.95, transom: 0, frame: L, open: !0, rec: 0.12 },
        belt: { mat: `asConcreteStain`, h: 0.16, out: 0.04 },
      },
      front: { kinds: (e) => (e === 0 ? `door` : `window`), extra: n },
      back: {
        kinds: (e, t) => (e === 0 ? (t % 2 ? `door` : `solid`) : `window`),
      },
      right: { kinds: (e, t) => (e > 0 && t === 1 ? `window` : `solid`) },
      left: { kinds: (e, t) => (e > 0 && t === 0 ? `window` : `solid`) },
      extra: (e, t, n) => {
        let r = n.H;
        (e.box(`asTinBlue`, t, 0, -8.5, 6, r, r + 2.5, -4.2, 2.4),
          e.add(
            `asTinBlue`,
            new a(15.1, 0.06, 7.2)
              .rotateX(0.12)
              .translate(-1.25, r + 2.95, -0.9),
            t,
            0,
          ),
          e.box(`woodDoor`, t, 0, -2, -1.1, r, r + 2.1, 2.4, 2.44));
        for (let n of [7.2, 8.5])
          jl(e, t, n, -2.5, r, 0.55, 1.2, `asStainless`, 0.8);
      },
    };
  }),
  Pl.push(function () {
    let e = (e, t, n) => {
        for (let r = 1; r <= n.top; r++)
          for (let i of [0, 2]) {
            let a = (i + 0.5) * n.bw,
              o = n.ys[r] + 1.1;
            (e.box(
              `asBlackLacquer`,
              t,
              n.grid[r][i],
              a - 0.07,
              a + 0.07,
              o,
              o + 0.55,
              0,
              0.01,
            ),
              e.box(
                `asConcreteLight`,
                t,
                n.grid[r][i],
                a - 0.2,
                a + 0.2,
                o - 0.08,
                o,
                0,
                0.06,
              ));
          }
      },
      t = (e, t, n) => {
        for (let r = 0; r < n.nb; r++) {
          let i = n.grid[n.top][r],
            a = r * n.bw + 0.2,
            o = (r + 1) * n.bw - 0.2,
            s = n.H + 0.15;
          e.box(`asBalusterWhite`, t, i, a, o, s, s + 0.75, 0.02, 0.05, {
            planar: (e, t) => [(e - a) / 0.8, (t - s) / 0.75],
          });
        }
      };
    return {
      key: `asDiaolou`,
      name: `Kaiping Diaolou`,
      plain: 12168334,
      desc: `Kaiping diaolou watchtower: a sheer six-storey concrete tower with small iron-shuttered windows and gun slits, an arcaded top storey with a balustraded crown, cantilevered corner turrets and a small domed pavilion.`,
      W: 8,
      D: 8,
      style: {
        wall: `asConcreteOld`,
        t: 0.45,
        bay: 2.67,
        floors: [4, 3.4, 3.4, 3.4, 3.4],
        win: {
          w: 0.8,
          h: 1.2,
          sill: 1,
          type: `grid`,
          lites: [1, 2],
          frame: `asIndigo`,
          shutter: `asSteelGreen`,
          header: `asConcreteLight`,
          headerH: 0.18,
          rec: 0.25,
          curtains: 0.3,
        },
        door: {
          w: 1.2,
          h: 2.3,
          transom: 0,
          frame: `asConcreteLight`,
          mat: `asSteelGreen`,
          rec: 0.35,
          step: `asGranite`,
        },
        base: { mat: `asGranite`, h: 0.6, out: 0.04 },
        belt: { mat: `asConcreteLight`, h: 0.16, out: 0.04 },
      },
      tiers: [
        { style: { roof: Nl } },
        {
          floors: [3.4],
          style: {
            roof: Nl,
            parapet: 1.1,
            parapetMat: `asConcreteLight`,
            win: {
              w: 1.6,
              h: 2.2,
              sill: 0.4,
              type: `grid`,
              lites: [2, 3],
              frame: `asIndigo`,
              arch: 0.8,
              archMat: `asConcreteLight`,
              keystone: !0,
              rec: 0.15,
              curtains: 0.3,
            },
            cornice: {
              type: `classic`,
              mat: `asConcreteLight`,
              h: 0.28,
              out: 0.3,
              dentils: !0,
            },
          },
          front: { kinds: () => `window`, extra: t },
          back: { kinds: () => `window`, extra: t },
          right: { kinds: () => `window`, extra: t },
          left: { kinds: () => `window`, extra: t },
        },
      ],
      front: {
        kinds: (e, t) =>
          e === 0 ? (t === 1 ? `door` : `solid`) : t === 1 ? `window` : `solid`,
        extra: e,
      },
      back: {
        kinds: (e, t) => (e > 0 && t === 1 ? `window` : `solid`),
        extra: e,
      },
      right: {
        kinds: (e, t) => (e > 0 && t === 1 ? `window` : `solid`),
        extra: e,
      },
      left: {
        kinds: (e, t) => (e > 0 && t === 1 ? `window` : `solid`),
        extra: e,
      },
      extra: (e, t, n) => {
        let r = n.H - 3.4 - 0.2,
          o = n.H + 1.1;
        for (let [s, c] of [
          [-1, -1],
          [1, -1],
          [-1, 1],
          [1, 1],
        ]) {
          let l = s * (n.W / 2 + 0.1),
            u = c * (n.D / 2 + 0.1);
          (e.add(
            `asConcreteOld`,
            new d(0.75, 1.4, 12).rotateX(Math.PI).translate(l, r - 0.7, u),
            t,
            0,
          ),
            e.add(
              `asConcreteOld`,
              new C(0.75, 0.75, o - r, 12).translate(l, (r + o) / 2, u),
              t,
              0,
            ),
            e.add(
              `asConcreteLight`,
              new C(0.85, 0.85, 0.2, 12).translate(l, o, u),
              t,
              0,
            ),
            e.add(
              `asConcreteLight`,
              new i(0.72, 12, 6, 0, Math.PI * 2, 0, Math.PI / 2).translate(
                l,
                o + 0.1,
                u,
              ),
              t,
              0,
            ));
          for (let n of [0, Math.PI / 2, Math.PI, -Math.PI / 2])
            e.add(
              `asBlackLacquer`,
              new a(0.1, 0.5, 0.02)
                .translate(0, r + 1.6, 0.76)
                .rotateY(n)
                .translate(l, 0, u),
              t,
              0,
            );
        }
        let s = n.H,
          c = 1.6;
        e.box(`asConcreteLight`, t, 0, -1.8, 1.8, s, s + 0.3, -1.8, 1.8);
        for (let [n, r] of [
          [-1.6, -1.6],
          [c, -1.6],
          [-1.6, c],
          [c, c],
        ])
          e.add(
            `asConcreteLight`,
            new C(0.16, 0.18, 2.4, 10).translate(n, s + 1.5, r),
            t,
            0,
          );
        (e.box(
          `asConcreteLight`,
          t,
          0,
          -1.6 - 0.3,
          1.9000000000000001,
          s + 2.7,
          s + 3.1,
          -1.6 - 0.3,
          1.9000000000000001,
        ),
          e.add(
            `asConcreteOld`,
            new i(1.7, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2).translate(
              0,
              s + 3.1,
              0,
            ),
            t,
            0,
          ),
          e.add(
            `asConcreteLight`,
            new C(0.06, 0.14, 1, 8).translate(0, s + 5.2, 0),
            t,
            0,
          ),
          e.add(
            `asConcreteLight`,
            new i(0.16, 8, 6).translate(0, s + 5.8, 0),
            t,
            0,
          ));
      },
    };
  }),
  Pl.push(function () {
    return (
      R(`asSignKoban`, `KOBAN  交番`, 4.6, 0.5, {
        bg: 16053488,
        fg: 2047882,
        font: `"Arial Black", ${dl}`,
        weight: 900,
        size: 0.62,
        spacing: 0.12,
      }),
      R(`asSignPolice`, `POLICE`, 1.4, 0.4, {
        bg: 2047882,
        fg: 16777215,
        size: 0.62,
        spacing: 0.2,
        ...pl,
      }),
      R(`asSignMap`, `地域安全マップ`, 1.6, 0.35, {
        bg: 2787914,
        fg: 16777215,
        font: dl,
        size: 0.6,
      }),
      {
        key: `asKoban`,
        name: `Ekimae Koban`,
        plain: 8800559,
        desc: `Japanese koban police box: tiny brown-brick booth with a tiled front gable and gold star crest, the red globe lamp over sliding glass doors, KOBAN sign band, notice board of posters and a white police bicycle.`,
        W: 5.6,
        D: 4.8,
        style: {
          wall: `asBrickBrown`,
          t: 0.25,
          bay: 2.8,
          floors: [3.4],
          store: { frame: `aluminum`, fascia: `asWhite` },
          win: {
            w: 1.4,
            h: 1.2,
            sill: 1,
            type: `grid`,
            lites: [2, 1],
            frame: `aluminum`,
            rec: 0.1,
            curtains: 0.4,
          },
          door: {
            w: 1.6,
            h: 2.3,
            transom: 0.3,
            frame: `aluminum`,
            glazed: !0,
            mat: `aluminum`,
            rec: 0.2,
            step: `asGranite`,
          },
          base: { mat: `asGranite`, h: 0.35, out: 0.03 },
          eaveTrim: `asWhite`,
          roof: {
            ridge: `z`,
            pitch: 32 * zc,
            over: 0.5,
            mat: `asKawara`,
            fascia: `asWhite`,
          },
        },
        front: {
          kinds: (e, t) => (t === 0 ? `store` : `door`),
          signs: [
            {
              mat: `asSignKoban`,
              rect: [0.5, 5.1, 2.72, 3.22],
              z0: 0.08,
              z1: 0.11,
            },
          ],
          extra: (e, t, n) => {
            let r = n.gableCell,
              a = n.L / 2,
              s = n.H + 0.75;
            e.add(`asGold`, new c(0.34, 20).translate(a, s, 0.02), t, r);
            let l = new T();
            for (let e = 0; e < 10; e++) {
              let t = Math.PI / 2 + (e * Math.PI) / 5,
                n = e % 2 ? 0.12 : 0.28;
              e
                ? l.lineTo(a + Math.cos(t) * n, s + Math.sin(t) * n)
                : l.moveTo(a + Math.cos(t) * n, s + Math.sin(t) * n);
            }
            (e.add(`asBronze`, new h(l).translate(0, 0, 0.03), t, r),
              n.grid[0][1]);
            let u = n.bw * 1.5;
            (e.box(
              `aluminum`,
              t,
              r,
              u - 0.03,
              u + 0.03,
              n.H + 0.42,
              n.H + 0.47,
              0,
              0.42,
            ),
              e.add(
                `asLampRed`,
                new i(0.2, 14, 10).translate(u, n.H + 0.2, 0.42),
                t,
                r,
              ),
              e.add(
                `aluminum`,
                new C(0.07, 0.09, 0.08, 10).translate(u, n.H + 0.42, 0.42),
                t,
                r,
              ));
            let d = n.grid[0][0];
            e.box(`asSignPolice`, t, d, 0.7, 2.1, 2.1, 2.5, -0.29, -0.28, {
              planar: (e, t) => [(e - 0.7) / 1.4, (t - 2.1) / 0.4],
            });
            let f = -0.9,
              p = 1.1,
              m = d;
            for (let n of [-0.52, 0.52])
              e.add(
                `asCharcoal`,
                new o(0.33, 0.03, 6, 18).translate(f + n, 0.34, p),
                t,
                m,
              );
            (k(e, `asWhite`, t, m, [-1.42, 0.34, p], [f, 0.5, p], 0.05),
              k(e, `asWhite`, t, m, [f, 0.5, p], [-0.38, 0.34, p], 0.05),
              k(e, `asWhite`, t, m, [f, 0.5, p], [-1, 0.95, p], 0.05),
              k(
                e,
                `asWhite`,
                t,
                m,
                [-0.38, 0.34, p],
                [-0.48000000000000004, 1, p],
                0.04,
              ),
              e.box(
                `asCharcoal`,
                t,
                m,
                -1.12,
                -0.88,
                0.95,
                1,
                1.02,
                1.1800000000000002,
              ),
              e.box(
                L,
                t,
                m,
                -0.6000000000000001,
                -0.35,
                1,
                1.02,
                0.8500000000000001,
                1.35,
              ),
              e.box(
                `asWhite`,
                t,
                m,
                -0.4,
                -0.12,
                0.85,
                1.05,
                0.9500000000000001,
                1.25,
              ));
          },
        },
        back: { kinds: () => `window` },
        right: { kinds: (e, t) => (t === 0 ? `window` : `solid`) },
        left: {
          kinds: () => `solid`,
          extra: (e, t, n) => {
            let r = n.grid[0][0],
              i = 0.5;
            (e.box(`asCharWood`, t, r, 0.42, 2.68, 0.9, 2.1, 0, 0.06),
              e.box(`asSignMap`, t, r, i, 2.1, 1.7, 2.05, 0.06, 0.07, {
                planar: (e, t) => [(e - i) / 1.6, (t - 1.7) / 0.35],
              }),
              [
                [`asWhite`, 0.55, 1, 1.2],
                [`asPlasticYellow`, 1.1, 1.55, 1.25],
                [`asNeonPink`, 1.65, 2.1, 1.3],
                [`asStuccoSky`, 2.15, 2.55, 1.2],
              ].forEach(([n, i, a, o]) =>
                e.box(n, t, r, i, a, 0.98, 0.98 + (o - 0.5), 0.06, 0.07),
              ));
          },
        },
        extra: (e, t, n) => {
          e.add(
            `aluminum`,
            new C(0.03, 0.03, 2, 6).translate(1.6, n.roofTop - 0.2, -1.6),
            t,
            0,
          );
        },
      }
    );
  }),
  Pl.push(function () {
    return (
      R(`asSignWingKee`, `榮記大牌檔  WING KEE NOODLES`, 5.4, 0.75, {
        bg: 16184038,
        fg: 13115420,
        border: 2779706,
        font: `"Arial Black", ${dl}`,
        weight: 900,
        size: 0.55,
        spacing: 0.04,
      }),
      R(`asSignMian`, `麵`, 0.7, 0.7, {
        bg: 13115420,
        fg: 16777215,
        font: dl,
        size: 0.8,
      }),
      {
        key: `asDaiPaiDong`,
        name: `Wing Kee Dai Pai Dong`,
        plain: 4160858,
        desc: `Hong Kong dai pai dong noodle stall: a green-painted steel box with a propped-up serving hatch over a stainless counter and stock pots, a big bilingual signboard, striped canopy on poles, folding tables and plastic stools.`,
        W: 6,
        D: 4.4,
        style: {
          wall: `asSteelGreen`,
          t: 0.12,
          bay: 6,
          floors: [2.9],
          win: {
            w: 5,
            h: 1.25,
            sill: 1,
            type: `grid`,
            lites: [1, 1],
            frame: `asStainless`,
            rec: 0.05,
            open: !0,
          },
          door: {
            w: 0.8,
            h: 2,
            transom: 0,
            frame: `asSteelGreen`,
            mat: `asSteelGreen`,
            rec: 0.05,
          },
          roof: {
            ridge: `x`,
            pitch: 3 * zc,
            over: 0.25,
            mat: `asSteelGreen`,
            fascia: `asSteelGreen`,
          },
        },
        front: {
          kinds: () => `window`,
          extra: (e, t, n) => {
            let r = n.grid[0][0],
              i = n.L / 2;
            e.add(
              `asSteelGreen`,
              new a(5.3, 0.05, 1.3)
                .rotateX(-0.42)
                .translate(i, 2.5300000000000002, 0.6),
              t,
              r,
            );
            for (let n of [i - 2.4, i + 2.4])
              k(e, `asStainless`, t, r, [n, 1.85, 0.02], [n, 2.77, 1.18], 0.04);
            e.box(`asStainless`, t, r, i - 2.55, i + 2.55, 0.94, 1, -0.3, 0.38);
            for (let n = 0; n < 3; n++)
              e.add(
                `asStainless`,
                new C(0.26, 0.24, 0.45, 12).translate(
                  i - 1.4 + n * 1.1,
                  0.9,
                  -0.7,
                ),
                t,
                r,
              );
            (e.box(
              `asSignWingKee`,
              t,
              r,
              i - 2.7,
              i + 2.7,
              n.H + 0.08,
              n.H + 0.83,
              0,
              0.06,
              {
                planar: (e, t) => [
                  (e - i + 2.7) / 5.4,
                  (t - n.H - 0.08) / 0.75,
                ],
              },
            ),
              e.box(
                `asSteelGreen`,
                t,
                r,
                i - 2.75,
                i + 2.75,
                n.H,
                n.H + 0.9,
                -0.08,
                0,
              ),
              e.box(`asSignMian`, t, r, 0.15, 0.85, 1.25, 1.95, 0.01, 0.03, {
                planar: (e, t) => [(e - 0.15) / 0.7, (t - 1.25) / 0.7],
              }),
              Hl(e, t, r, `awningGreen`, -0.3, n.L + 0.3, 3.05, 3.3, 0.35));
            for (let i of [-0.2, n.L + 0.2])
              e.box(L, t, r, i - 0.03, i + 0.03, 0, 2.65, 3.2, 3.26);
            for (let [n, i] of [
              [1.5, 2.2],
              [4.5, 2.3],
            ])
              (e.add(
                `asWhite`,
                new C(0.5, 0.5, 0.04, 14).translate(n, 0.72, i),
                t,
                r,
              ),
                e.add(L, new C(0.03, 0.03, 0.7, 6).translate(n, 0.36, i), t, r),
                [
                  [-0.75, 0],
                  [0.75, 0],
                  [0, 0.75],
                  [0, -0.75],
                ].forEach(([a, o], s) =>
                  kl(
                    e,
                    t,
                    r,
                    s % 2 ? `asPlasticBlue` : `asPlasticRed`,
                    n + a,
                    i + o,
                    0.42,
                  ),
                ));
            e.add(
              `asOchre`,
              new C(0.17, 0.17, 0.75, 10).translate(n.L - 0.3, 0.375, 0.35),
              t,
              r,
            );
          },
        },
        back: { kinds: () => `solid` },
        right: { kinds: () => `solid` },
        left: { kinds: () => `door` },
      }
    );
  }),
  Pl.push(function () {
    R(
      `asSignZhonglou`,
      `鐘
樓`,
      1,
      1.8,
      { bg: 2051962, fg: 14727240, border: 14727240, font: dl, size: 0.62 },
    );
    let e = (e, t, n) => {
        let r = n.L / 2,
          i = n.grid[0][1],
          a = 2.5,
          o = 3.5,
          s = n.t;
        for (let n of [-1, 1]) {
          let c = new T();
          (c.moveTo(r + n * a, o),
            c.lineTo(r + n * a, 6.02),
            c.lineTo(r, 6.02),
            c.absarc(r, o, a, Math.PI / 2, n < 0 ? Math.PI : 0, n > 0),
            e.add(
              `asBrickGrey`,
              new w(c, {
                depth: s,
                bevelEnabled: !1,
                curveSegments: 10,
              }).translate(0, 0, -s),
              t,
              i,
            ));
        }
        let c = new T();
        (c.absarc(r, o, 2.95, 0, Math.PI, !1),
          c.absarc(r, o, a, Math.PI, 0, !0),
          e.add(
            `asGranite`,
            new w(c, { depth: 0.1, bevelEnabled: !1, curveSegments: 12 }),
            t,
            i,
          ));
        for (let r = 0; r < n.nb; r++)
          for (let i = r * n.bw + 0.3; i < (r + 1) * n.bw - 0.4; i += 1.1)
            e.box(
              `asBrickGrey`,
              t,
              n.grid[0][r],
              i,
              i + 0.55,
              n.H + 1,
              n.H + 1.5,
              -n.t,
              0,
            );
      },
      t = (e, t, n) => {
        for (let r = 0; r < n.nb; r++)
          for (let i = r * n.bw + 0.3; i < (r + 1) * n.bw - 0.4; i += 1.1)
            e.box(
              `asBrickGrey`,
              t,
              n.grid[0][r],
              i,
              i + 0.55,
              n.H + 1,
              n.H + 1.5,
              -n.t,
              0,
            );
      },
      n = (e, t, n) => {
        for (let r = 0; r < n.nb; r++)
          e.box(
            `asBeam`,
            t,
            n.grid[n.top][r],
            r * n.bw,
            (r + 1) * n.bw,
            n.H - 0.55,
            n.H - 0.1,
            0,
            0.04,
            {
              planar: (e, t) => [
                (e - r * n.bw) / n.bw,
                (t - n.H + 0.55) / 0.45,
              ],
            },
          );
      },
      r = (e) => (t, n, r) => {
        let i = e ? r.t + 2.1 : 2.1,
          a = 2.1,
          o = [];
        for (let e = -i; e <= r.L + i + 0.001; e += (r.L + 2 * i) / 4)
          o.push(e);
        for (let i of e ? o.slice(1, -1) : o)
          xl(
            t,
            n,
            r.grid[0][Hc(r, i)],
            `asRedLacquer`,
            i,
            a,
            0,
            2.1,
            0.2,
            `asGranite`,
          );
        for (let i of e ? o.slice(1, -1) : o)
          Sl(t, n, r.grid[0][Hc(r, i)], `asTeal`, i, 2.05, a, 0.7);
      },
      i = {
        wall: `asRedLacquer`,
        t: 0.3,
        bay: 2,
        parapet: 0,
        roof: Nl,
        base: null,
        win: {
          w: 1.3,
          h: 2,
          sill: 1,
          type: `grid`,
          lites: [1, 1],
          frame: `asRedLacquer`,
          rec: 0.08,
          open: !0,
        },
        door: {
          w: 1.8,
          h: 2.9,
          transom: 0,
          frame: `asGold`,
          open: !0,
          rec: 0.08,
        },
      },
      a = (e, t) =>
        A(
          zl(e, { win: i.win }, t, `curtain`, -0.2, -0.19, 1),
          zl(e, { win: i.win }, t, `asFretBrown`, -0.07, -0.05, 0.5),
        ),
      o = (e, t) => (t === 2 ? `door` : `window`),
      s = () => `window`;
    return {
      key: `asBellTower`,
      name: `Drum Street Bell Tower`,
      plain: 7106676,
      desc: `Chinese bell tower: a crenellated grey-brick plinth pierced by a stone-ringed arch, carrying a red lacquer pavilion with lattice windows, a columned gallery and triple green-tiled eaves with flying corners, gold finial and a bronze bell.`,
      W: 16,
      D: 16,
      style: {
        wall: `asBrickGrey`,
        t: 1,
        bay: 5.34,
        floors: [8],
        parapet: 1,
        door: {
          w: 5,
          h: 6,
          transom: 0,
          frame: `asBrickGrey`,
          open: !0,
          rec: 0.1,
        },
        base: { mat: `asGranite`, h: 1, out: 0.08 },
        roof: Nl,
      },
      tiers: [
        {
          front: { kinds: (e, t) => (t === 1 ? `door` : `solid`), extra: e },
          back: { kinds: (e, t) => (t === 1 ? `door` : `solid`), extra: e },
          right: { kinds: () => `solid`, extra: t },
          left: { kinds: () => `solid`, extra: t },
        },
        {
          W: 10,
          D: 10,
          floors: [4.4],
          style: i,
          front: { kinds: o, extra: A(a(o, [0]), r(!1), n) },
          back: { kinds: o, extra: A(a(o, [0]), r(!1), n) },
          right: { kinds: s, extra: A(a(s, [0]), r(!0), n) },
          left: { kinds: s, extra: A(a(s, [0]), r(!0), n) },
        },
        {
          W: 8,
          D: 8,
          floors: [3.6],
          style: i,
          front: {
            kinds: s,
            extra: A(a(s, [0]), n, (e, t, n) => {
              let r = n.grid[0][2],
                i = n.L / 2;
              e.box(
                `asSignZhonglou`,
                t,
                r,
                i - 0.45,
                i + 0.45,
                1.2,
                2.9,
                0.3,
                0.34,
                { planar: (e, t) => [(e - i + 0.45) / 0.9, (t - 1.2) / 1.7] },
              );
              for (let n of [-1, 1])
                e.box(
                  L,
                  t,
                  r,
                  i + n * 0.3 - 0.02,
                  i + n * 0.3 + 0.02,
                  2.85,
                  3.2,
                  0,
                  0.32,
                );
            }),
          },
          back: { kinds: s, extra: A(a(s, [0]), n) },
          right: { kinds: s, extra: A(a(s, [0]), n) },
          left: { kinds: s, extra: A(a(s, [0]), n) },
        },
      ],
      extra: (e, t, n) => {
        (e.box(`asGranite`, t, 0, -7, 7, 8, 8.06, -7, 7),
          vl(e, t, {
            y: 11.35,
            a: 5,
            b: 5,
            over: 2.5,
            p: 22 * zc,
            mat: `asTileGreen`,
            trim: `asRedLacquer`,
            horn: 0.6,
          }),
          vl(e, t, {
            y: 12.4 + 0.8,
            a: 4,
            b: 4,
            over: 1.9,
            p: 22 * zc,
            mat: `asTileGreen`,
            trim: `asRedLacquer`,
            horn: 0.55,
          }),
          _l(e, t, {
            y: n.H,
            a: 4,
            b: 4,
            over: 1.8,
            p1: 22 * zc,
            p2: 36 * zc,
            k: 1.7,
            mat: `asTileGreen`,
            trim: `asRedLacquer`,
            horn: 0.8,
            finial: `asGold`,
          }));
        let r = new g(
          [
            [0.001, 1.7],
            [0.3, 1.66],
            [0.5, 1.55],
            [0.6, 1.2],
            [0.66, 0.6],
            [0.78, 0.15],
            [0.84, 0],
          ].map(([e, t]) => Vc(e, t)),
          16,
        );
        (e.add(`asBronze`, r.translate(0, 9.1, 2.4), t, 0),
          e.box(`asTimber`, t, 0, -1.2, 1.2, 11.3, 11.5, 2.3, 2.5),
          e.box(L, t, 0, -0.03, 0.03, 10.8, 11.3, 2.37, 2.43));
      },
    };
  }),
  Pl.push(function () {
    (R(`asSignYamabuki`, `山吹酒造`, 2.4, 0.6, {
      bg: 2760472,
      fg: 15784080,
      border: 11569726,
      font: fl,
      size: 0.62,
      spacing: 0.3,
    }),
      R(`asSignSakeMon`, `酒`, 1.6, 1.6, {
        bg: 1841688,
        fg: 16052714,
        font: fl,
        size: 0.72,
      }),
      R(
        `asSignTaru`,
        `山
吹`,
        0.5,
        0.7,
        { bg: 15260864, fg: 10492950, font: fl, size: 0.6 },
      ));
    let e = (e, t) =>
        e === 0 ? (t === 1 ? `door` : `solid`) : t === 1 ? `window` : `solid`,
      t = (e, t) => (e === 1 && t === 1 ? `window` : `solid`),
      n = (e) => (t, n, r) => {
        for (let i = 0; i <= r.top; i++)
          for (let o = 0; o < r.nb; o++) {
            if (e(i, o) !== `window`) continue;
            let s = r.grid[i][o],
              c = (o + 0.5) * r.bw,
              l = r.ys[i] + 0.9,
              u = l + 0.9;
            for (let e of [-1, 1])
              t.box(
                `asPlasterWhite`,
                n,
                s,
                c + e * 0.47 - 0.08,
                c + e * 0.47 + 0.08,
                l - 0.02,
                u + 0.02,
                0,
                0.5,
              );
            for (let e = 0; e < 4; e++) {
              let r = c - 0.3 + e * 0.2;
              t.box(L, n, s, r - 0.02, r + 0.02, l, u, -0.2, -0.16);
            }
            (t.add(
              `asKawara`,
              new a(1.5, 0.08, 0.7).rotateX(0.35).translate(c, u + 0.3, 0.3),
              n,
              s,
            ),
              t.box(
                `asPlasterWhite`,
                n,
                s,
                c - 0.75,
                c + 0.75,
                u + 0.3,
                u + 0.5,
                -0.02,
                0.12,
              ));
          }
      },
      r = (e, t, n) => {
        let r = n.grid[0][1],
          a = 1.5 * n.bw;
        for (let i of [-1, 1])
          e.box(
            `asNamako`,
            t,
            r,
            i < 0 ? n.bw : a + 0.95,
            i < 0 ? a - 0.95 : 2 * n.bw,
            0,
            1.6,
            0,
            0.05,
          );
        for (let n = 0; n < 3; n++) {
          let i = 0.95 + n * 0.12;
          e.box(
            `asPlasterWhite`,
            t,
            r,
            a - i,
            a + i,
            2.2 + n * 0.1,
            2.3 + n * 0.1,
            0,
            0.06 + n * 0.05,
          );
          for (let o of [-1, 1])
            e.box(
              `asPlasterWhite`,
              t,
              r,
              a + o * i - 0.06,
              a + o * i + 0.06,
              0,
              2.3 + n * 0.1,
              0,
              0.06 + n * 0.05,
            );
        }
        (yl({
          y: 3.1,
          d: 1,
          rise: 0.4,
          a0: a - 1.5,
          a1: a + 1.5,
          mat: `asKawara`,
          trim: `asCharWood`,
          step: 2.3,
        })(e, t, n),
          e.box(
            `asSignYamabuki`,
            t,
            r,
            a - 1.2,
            a + 1.2,
            3.2,
            3.8,
            0.02,
            0.05,
            { planar: (e, t) => [(e - a + 1.2) / 2.4, (t - 3.2) / 0.6] },
          ),
          e.box(L, t, r, a + 1.2, a + 1.24, 2.35, 2.62, 0, 1),
          e.add(
            `asPineGreen`,
            new i(0.42, 12, 10).translate(a + 1.22, 2, 0.95),
            t,
            r,
          ));
        let o = n.grid[0][0];
        [
          [0.6, 0, 0.6],
          [1.5, 0, 0.6],
          [2.4, 0, 0.6],
          [1.05, 0.72, 0.6],
          [1.95, 0.72, 0.6],
        ].forEach(([n, r, i]) => {
          (Ol(e, t, o, `asStraw`, n, r, i, 0.36, 0.72, `asCharWood`),
            e.box(
              `asSignTaru`,
              t,
              o,
              n - 0.18,
              n + 0.18,
              r + 0.14,
              r + 0.6,
              i + 0.36,
              i + 0.37,
              {
                planar: (e, t) => [
                  (e - n + 0.18) / 0.36,
                  (t - r - 0.14) / 0.46,
                ],
              },
            ));
        });
      },
      s = (e, t, n) => {
        let r = n.gableCell,
          i = n.L / 2,
          a = n.H + 0.62;
        (e.add(`asSignSakeMon`, new c(0.42, 24).translate(i, a, 0.03), t, r, {
          planar: (e, t) => [(e - i + 0.45) / 0.9, (t - a + 0.45) / 0.9],
        }),
          e.add(
            `asPlasterWhite`,
            new o(0.46, 0.05, 6, 24).translate(i, a, 0.03),
            t,
            r,
          ));
      };
    return {
      key: `asKura`,
      name: `Yamabuki Sake Kura`,
      plain: 15789282,
      desc: `Japanese kura storehouse of a sake brewery: thick white earthen walls over a namako diagonal-tile skirt, heavy stepped doorway under a tiled hood, thick swing-open plaster shutters, gable crest, sugidama cedar ball and straw sake casks.`,
      W: 9,
      D: 7,
      style: {
        wall: `asPlasterWhite`,
        t: 0.5,
        bay: 3,
        floors: [3.4, 2.8],
        win: {
          w: 0.8,
          h: 0.9,
          sill: 0.9,
          type: `grid`,
          lites: [1, 1],
          frame: `asCharWood`,
          rec: 0.3,
          curtains: 0,
        },
        door: {
          w: 1.6,
          h: 2.2,
          transom: 0,
          frame: `asCharWood`,
          mat: `asCharWood`,
          rec: 0.4,
          step: `asGranite`,
        },
        base: { mat: `asNamako`, h: 1.6, out: 0.05 },
        cornice: { type: `classic`, mat: `asPlasterWhite`, h: 0.32, out: 0.18 },
        roof: {
          ridge: `x`,
          pitch: 24 * zc,
          over: 0.7,
          mat: `asKawara`,
          fascia: `asPlasterWhite`,
          ridgeMat: `asKawara`,
        },
      },
      front: { kinds: e, extra: A(n(e), r) },
      back: { kinds: t, extra: n(t) },
      right: { kinds: t, extra: A(n(t), s) },
      left: { kinds: t, extra: A(n(t), s) },
      extra: (e, t, n) => {
        let r = n.roofTop,
          i = n.W / 2 + 0.7;
        (e.box(`asKawara`, t, 0, -i, i, r, r + 0.45, -0.22, 0.22),
          e.box(`asPlasterWhite`, t, 0, -i, i, r + 0.12, r + 0.2, -0.23, 0.23));
        for (let n of [-1, 1])
          e.box(
            `asCharcoal`,
            t,
            0,
            n * i - 0.25,
            n * i + 0.25,
            r - 0.1,
            r + 0.95,
            -0.28,
            0.28,
          );
      },
    };
  }));
