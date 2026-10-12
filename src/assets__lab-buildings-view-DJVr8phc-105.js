// assets__lab-buildings-view-DJVr8phc 105 — box
// Lines 33479-35703 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
(Fl.push(function () {
  [
    [`ห้างทอง RATTANA GOLD`, 11740702, 15913056],
    [`SOMCHAI MOTOR`, 2050714, 16777215],
    [`ก๋วยเตี๋ยว NOODLE 99`, 15913530, 11740702],
    [`ร้านยา PHARMACY`, 2787914, 16777215],
  ].forEach(([e, t, n], r) =>
    L(`asSignThai${r}`, e, 3.6, 0.7, {
      bg: t,
      fg: n,
      border: n,
      font: Hl,
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
          t.box(I, n, a, s - 1.72, s + 1.72, 2.95, 3.12, -0.1, 0.1),
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
            Ul(t, n, a, `awningRed`, o + 0.2, o + r.bw - 0.2, 3.05, 1.6, 0.55));
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
            (i + a) % 3 == 0 && Dl(t, n, l, s + 1.1, r.ys[a] + 0.25, 0.02),
            (i + a) % 2)
          )
            for (let e of [u + 0.3, u + 0.9])
              jl(t, n, l, e, o - 0.02, 0.18, 0.7);
        }
      }
      let a = r.grid[0][0];
      (t.add(
        `asWhite`,
        new s(0.1, 0.12, 1.3, 8).translate(0.7, 0.65, 1.6),
        n,
        a,
      ),
        t.box(`asGold`, n, a, 0.35, 1.05, 1.3, 1.36, 1.25, 1.95),
        t.box(`asRedLacquer`, n, a, 0.47, 0.93, 1.36, 1.72, 1.4, 1.8),
        t.add(
          `asTileOrange`,
          new i(0.45, 0.6, 4)
            .rotateY(Math.PI / 4)
            .scale(1, 1, 0.75)
            .translate(0.7, 2.02, 1.6),
          n,
          a,
        ),
        t.add(`asGold`, new i(0.05, 0.45, 6).translate(0.7, 2.5, 1.6), n, a));
      for (let e = 0; e < 6; e++)
        t.add(
          `asOchre`,
          new w(0.05, 6, 4).translate(0.42 + e * 0.11, 1.33, 1.97),
          n,
          a,
        );
      let o = r.grid[0][2];
      (t.box(`asStainless`, n, o, 8.6, 9.8, 0.3, 1.1, 0.5, 1.2),
        t.box(`glass`, n, o, 8.7, 9.7, 1.1, 1.6, 0.6, 0.62));
      for (let e of [8.8, 9.6])
        t.add(
          I,
          new s(0.18, 0.18, 0.06, 10)
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
        Al(t, n, o, `asPlasticRed`, e, r, 0.42);
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
      door: { w: 3.3, h: 2.95, transom: 0, frame: I, open: !0, rec: 0.12 },
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
        Ml(e, t, r, -4, n.H, 0.5, 1.1, `asStainless`, 0.9);
      (e.box(`asTinRust`, t, 0, 4.2, 7.6, n.H, n.H + 2.3, -5.6, -1.2),
        e.box(`asTinBlue`, t, 0, 4, 7.8, n.H + 2.3, n.H + 2.4, -5.8, -1));
    },
  };
}),
  Fl.push(function () {
    return (
      L(`asSignRuiFu`, `瑞福堂`, 1.6, 0.45, {
        bg: 1841688,
        fg: 14727240,
        border: 14727240,
        font: fl,
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
            pitch: 26 * Bc,
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
            style: { roof: Pl, pilaster: null },
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
                  let i = n.grid[0][Uc(n, r)];
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
                    Tl(e, t, i, r + (r < 1 ? 0.6 : -0.6), -0.6, -0.5, {
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
                  let i = n.grid[0][r];
                  e.box(
                    `asWhite`,
                    t,
                    i,
                    r * n.bw,
                    (r + 1) * n.bw,
                    n.H - 0.45,
                    n.H - 0.08,
                    0,
                    0.06,
                  );
                  for (let a = r * n.bw + 0.25; a < (r + 1) * n.bw; a += 0.5)
                    e.add(
                      `asJade`,
                      new w(0.08, 8, 6)
                        .scale(1, 1, 0.5)
                        .translate(a, n.H - 0.27, 0.07),
                      t,
                      i,
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
  Fl.push(function () {
    let e = 40 * Bc,
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
      i = (e) => (e === 0 ? `solid` : `window`),
      a = (e, t, n) => {
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
      o = (e) => (t, n, r) => {
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
      s = (t, n, r) => {
        let i = r.gableCell,
          a = r.L,
          o = r.H,
          s = (a / 2 + r.t) * Math.tan(e),
          c = o + 0.35,
          l = o + s - 0.5,
          u = (a / 2 + r.t) * (1 - 0.35 / s) - 0.5;
        (t.add(
          `asTebar`,
          new S(new C([Hc(a / 2 - u, c), Hc(a / 2 + u, c), Hc(a / 2, l)]), {
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
          D(
            t,
            `asWhite`,
            n,
            i,
            [a / 2 + e * 1.2, o + s - 1, 0.45],
            [a / 2 - e * 0.55, o + s + 0.9, 0.45],
            0.12,
          );
      },
      c = (e, t, n) => {
        let r = n.ys[1],
          i = 2.4,
          a = 1.5 * n.bw;
        for (let [o, s, c] of gl(n, -0.2, n.L + 0.2)) {
          let l = n.grid[1][c];
          e.box(`asWoodBrown`, t, l, o, s, r - 0.14, r + 0.02, 0, i);
          let u =
            a > o && a < s
              ? [
                  [o, a - 0.7],
                  [a + 0.7, s],
                ]
              : [[o, s]];
          for (let [n, i] of u)
            i - n > 0.2 &&
              (e.box(`asBaluster`, t, l, n, i, r + 0.02, r + 0.85, 2.33, 2.35, {
                planar: (e, t) => [e / 1.2, (t - r) / 0.83],
              }),
              e.box(`asWhite`, t, l, n, i, r + 0.85, r + 0.93, 2.3, 2.38));
        }
        for (let a of [-0.1, 2.5, 5, 7.6, n.L + 0.1]) {
          let o = n.grid[1][Uc(n, a)];
          (e.box(`asWhite`, t, o, a - 0.07, a + 0.07, r, r + 2.15, 2.26, i),
            e.box(
              `asTimber`,
              t,
              n.grid[0][Uc(n, a)],
              a - 0.1,
              a + 0.1,
              0.3,
              r - 0.14,
              2.23,
              2.4299999999999997,
            ),
            e.box(
              `asConcreteLight`,
              t,
              n.grid[0][Uc(n, a)],
              a - 0.18,
              a + 0.18,
              0,
              0.3,
              2.15,
              2.51,
            ));
        }
        let o = n.grid[0][1],
          s = r / 9;
        for (let n = 0; n < 9; n++) {
          let c = i + n * 0.26,
            l = r - (n + 1) * s + s;
          (e.box(
            `asConcreteLight`,
            t,
            o,
            a - 0.6,
            a + 0.6,
            0,
            l - s + 0.02,
            c,
            c + 0.26,
          ),
            e.box(
              `asPeraTile`,
              t,
              o,
              a - 0.55,
              a + 0.55,
              l - 2 * s + 0.03,
              l - s,
              c + 0.26,
              c + 0.27,
            ));
        }
        for (let n of [-1, 1])
          D(
            e,
            `asWhite`,
            t,
            o,
            [a + n * 0.62, r + 0.9, i],
            [a + n * 0.62, 0.9, 4.74],
            0.07,
          );
        e.add(
          `asOnggi`,
          new w(0.32, 10, 8).scale(1, 1.1, 1).translate(a + 1.1, 0.34, 3.8),
          t,
          o,
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
        extra: k(
          a,
          o(r),
          bl({
            y: 4.2,
            d: 2.65,
            rise: 0.45,
            a0: -0.3,
            a1: 10.3,
            mat: `asZinc`,
            trim: `asWhite`,
            step: 0,
          }),
          c,
        ),
      },
      back: { kinds: i, extra: k(a, o(i)) },
      right: { kinds: i, extra: k(a, o(i), s) },
      left: { kinds: i, extra: k(a, o(i), s) },
    };
  }),
  Fl.push(function () {
    return (
      L(`asSignVillanueva`, `CASA VILLANUEVA  1886`, 1.8, 0.4, {
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
          roof: Pl,
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
                      I,
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
                  e.box(I, t, r, i + 1.3, i + 1.36, 2.5, 2.56, 0, 0.45),
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
                  e.box(I, t, r, i + 1.18, i + 1.48, 2.5, 2.56, 0.33, 0.62));
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
                  (D(
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
          vl(e, t, {
            y: n.H,
            z: 0.45,
            a: n.W / 2,
            b: n.D / 2,
            over: 1,
            p1: 26 * Bc,
            p2: 31 * Bc,
            k: 1.1,
            mat: `asTileTerra`,
            trim: `asWoodBrown`,
            ridge: `asTileTerra`,
            hip: 0.22,
          }),
      }
    );
  }),
  Fl.push(function () {
    let e = [
      [`胡椒餅`, 13115420, 16769146, `awningRed`],
      [`珍珠奶茶`, 2763306, 8448255, `asTinBlue`],
      [`蚵仔煎`, 15913530, 13115420, `asPlasticYellow`],
      [`臭豆腐`, 2779706, 16777215, `asPlasticGreen`],
      [`大雞排`, 15235114, 16777215, `awningRed`],
    ];
    e.forEach(([e, t, n], r) =>
      L(`asSignNm${r}`, e, 3.2, 0.6, {
        bg: t,
        fg: n,
        border: n,
        glow: 0.9,
        font: fl,
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
      n = (n, i, a) => {
        for (let o = 0; o < a.nb; o++) {
          let c = a.grid[0][o],
            l = o * a.bw,
            u = l + a.bw / 2,
            [, , , d] = e[o];
          (n.box(
            `asSignNm${o}`,
            i,
            c,
            u - 1.6,
            u + 1.6,
            3.12,
            3.72,
            0.04,
            0.08,
            { planar: (e, t) => [(e - u + 1.6) / 3.2, (t - 3.12) / 0.6] },
          ),
            n.box(I, i, c, u - 1.78, u + 1.78, 2.95, 3.1, -0.1, 0.12),
            Ul(n, i, c, d, l + 0.15, l + a.bw - 0.15, 3.05, 2.2, 0.45));
          for (let e of [l + 0.3, l + a.bw - 0.3])
            n.box(I, i, c, e - 0.03, e + 0.03, 0, 2.6, 2.1, 2.16);
          (n.box(`asStainless`, i, c, u - 1.5, u + 1.5, 0, 0.9, 0.2, 0.95),
            n.box(`asStainless`, i, c, u - 1.55, u + 1.55, 0.9, 0.95, 0.15, 1));
          for (let e = 0; e < 3; e++)
            n.add(
              e % 2 ? `asStainless` : I,
              new s(0.2, 0.2, 0.25, 10).translate(
                u - 0.9 + e * 0.9,
                1.08,
                0.55,
              ),
              i,
              c,
            );
          for (let e of [u - 0.9, u + 0.9])
            n.add(`asBulb`, new w(0.07, 8, 6).translate(e, 2.55, 1.3), i, c);
          Tl(n, i, c, u, 2.62, 2, { r: 0.18 });
          for (let e = 1; e <= a.top; e++) {
            let s = a.grid[e][o],
              c = a.ys[e] + t.win.sill,
              l = c + t.win.h,
              d = u - 1.3,
              f = u + 1.3,
              p = 0.45;
            n.box(
              `asGrilleRust`,
              i,
              s,
              d,
              f,
              c - 0.1,
              l + 0.1,
              p,
              0.47000000000000003,
              { planar: (e, t) => [(e - d) / 0.65, (t - c) / 0.8] },
            );
            for (let e of [d, f - 0.02])
              n.box(`asGrilleRust`, i, s, e, e + 0.02, c - 0.1, l + 0.1, 0, p, {
                planar: (e, t, n) => [n / 0.65, (t - c) / 0.8],
              });
            (n.box(
              `asTinRust`,
              i,
              s,
              d - 0.05,
              f + 0.05,
              c - 0.14,
              c - 0.1,
              0,
              0.49,
            ),
              n.add(
                `asTinRust`,
                new r(f - d + 0.2, 0.04, 0.65)
                  .rotateX(0.25)
                  .translate(u, l + 0.2, p / 2),
                i,
                s,
              ),
              (o + e) % 2
                ? Dl(n, i, s, (o + 1) * a.bw - 0.5, a.ys[e] + 0.15, 0.02)
                : jl(n, i, s, u + 0.6, c - 0.1, 0.30000000000000004, 0.7));
          }
        }
        for (let [e, t] of [
          [3.9, 3.2],
          [12.4, 3.4],
        ]) {
          let r = a.grid[0][Uc(a, e)];
          (n.box(
            `asStainless`,
            i,
            r,
            e - 0.8,
            e + 0.8,
            0.35,
            1.2,
            t - 0.4,
            t + 0.4,
          ),
            n.box(`glass`, i, r, e - 0.7, e + 0.7, 1.2, 1.7, t - 0.3, t + 0.3),
            n.box(
              `asRedLacquer`,
              i,
              r,
              e - 0.85,
              e + 0.85,
              1.7,
              1.78,
              t - 0.45,
              t + 0.45,
            ));
          for (let a of [-1, 1])
            n.add(
              I,
              new s(0.2, 0.2, 0.08, 12)
                .rotateX(Math.PI / 2)
                .translate(e + a * 0.5, 0.2, t + 0.42),
              i,
              r,
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
        door: { w: 3.5, h: 2.95, transom: 0, frame: I, open: !0, rec: 0.12 },
        belt: { mat: `asConcreteStain`, h: 0.16, out: 0.04 },
      },
      front: { kinds: (e) => (e === 0 ? `door` : `window`), extra: n },
      back: {
        kinds: (e, t) => (e === 0 ? (t % 2 ? `door` : `solid`) : `window`),
      },
      right: { kinds: (e, t) => (e > 0 && t === 1 ? `window` : `solid`) },
      left: { kinds: (e, t) => (e > 0 && t === 0 ? `window` : `solid`) },
      extra: (e, t, n) => {
        let i = n.H;
        (e.box(`asTinBlue`, t, 0, -8.5, 6, i, i + 2.5, -4.2, 2.4),
          e.add(
            `asTinBlue`,
            new r(15.1, 0.06, 7.2)
              .rotateX(0.12)
              .translate(-1.25, i + 2.95, -0.9),
            t,
            0,
          ),
          e.box(`woodDoor`, t, 0, -2, -1.1, i, i + 2.1, 2.4, 2.44));
        for (let n of [7.2, 8.5])
          Ml(e, t, n, -2.5, i, 0.55, 1.2, `asStainless`, 0.8);
      },
    };
  }),
  Fl.push(function () {
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
        { style: { roof: Pl } },
        {
          floors: [3.4],
          style: {
            roof: Pl,
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
        let a = n.H - 3.4 - 0.2,
          o = n.H + 1.1;
        for (let [c, l] of [
          [-1, -1],
          [1, -1],
          [-1, 1],
          [1, 1],
        ]) {
          let u = c * (n.W / 2 + 0.1),
            d = l * (n.D / 2 + 0.1);
          (e.add(
            `asConcreteOld`,
            new i(0.75, 1.4, 12).rotateX(Math.PI).translate(u, a - 0.7, d),
            t,
            0,
          ),
            e.add(
              `asConcreteOld`,
              new s(0.75, 0.75, o - a, 12).translate(u, (a + o) / 2, d),
              t,
              0,
            ),
            e.add(
              `asConcreteLight`,
              new s(0.85, 0.85, 0.2, 12).translate(u, o, d),
              t,
              0,
            ),
            e.add(
              `asConcreteLight`,
              new w(0.72, 12, 6, 0, Math.PI * 2, 0, Math.PI / 2).translate(
                u,
                o + 0.1,
                d,
              ),
              t,
              0,
            ));
          for (let n of [0, Math.PI / 2, Math.PI, -Math.PI / 2])
            e.add(
              `asBlackLacquer`,
              new r(0.1, 0.5, 0.02)
                .translate(0, a + 1.6, 0.76)
                .rotateY(n)
                .translate(u, 0, d),
              t,
              0,
            );
        }
        let c = n.H,
          l = 1.6;
        e.box(`asConcreteLight`, t, 0, -1.8, 1.8, c, c + 0.3, -1.8, 1.8);
        for (let [n, r] of [
          [-1.6, -1.6],
          [l, -1.6],
          [-1.6, l],
          [l, l],
        ])
          e.add(
            `asConcreteLight`,
            new s(0.16, 0.18, 2.4, 10).translate(n, c + 1.5, r),
            t,
            0,
          );
        (e.box(
          `asConcreteLight`,
          t,
          0,
          -1.6 - 0.3,
          1.9000000000000001,
          c + 2.7,
          c + 3.1,
          -1.6 - 0.3,
          1.9000000000000001,
        ),
          e.add(
            `asConcreteOld`,
            new w(1.7, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2).translate(
              0,
              c + 3.1,
              0,
            ),
            t,
            0,
          ),
          e.add(
            `asConcreteLight`,
            new s(0.06, 0.14, 1, 8).translate(0, c + 5.2, 0),
            t,
            0,
          ),
          e.add(
            `asConcreteLight`,
            new w(0.16, 8, 6).translate(0, c + 5.8, 0),
            t,
            0,
          ));
      },
    };
  }),
  Fl.push(function () {
    return (
      L(`asSignKoban`, `KOBAN  交番`, 4.6, 0.5, {
        bg: 16053488,
        fg: 2047882,
        font: `"Arial Black", ${fl}`,
        weight: 900,
        size: 0.62,
        spacing: 0.12,
      }),
      L(`asSignPolice`, `POLICE`, 1.4, 0.4, {
        bg: 2047882,
        fg: 16777215,
        size: 0.62,
        spacing: 0.2,
        ...ml,
      }),
      L(`asSignMap`, `地域安全マップ`, 1.6, 0.35, {
        bg: 2787914,
        fg: 16777215,
        font: fl,
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
            pitch: 32 * Bc,
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
              i = n.L / 2,
              a = n.H + 0.75;
            e.add(`asGold`, new y(0.34, 20).translate(i, a, 0.02), t, r);
            let o = new C();
            for (let e = 0; e < 10; e++) {
              let t = Math.PI / 2 + (e * Math.PI) / 5,
                n = e % 2 ? 0.12 : 0.28;
              e
                ? o.lineTo(i + Math.cos(t) * n, a + Math.sin(t) * n)
                : o.moveTo(i + Math.cos(t) * n, a + Math.sin(t) * n);
            }
            (e.add(`asBronze`, new ue(o).translate(0, 0, 0.03), t, r),
              n.grid[0][1]);
            let c = n.bw * 1.5;
            (e.box(
              `aluminum`,
              t,
              r,
              c - 0.03,
              c + 0.03,
              n.H + 0.42,
              n.H + 0.47,
              0,
              0.42,
            ),
              e.add(
                `asLampRed`,
                new w(0.2, 14, 10).translate(c, n.H + 0.2, 0.42),
                t,
                r,
              ),
              e.add(
                `aluminum`,
                new s(0.07, 0.09, 0.08, 10).translate(c, n.H + 0.42, 0.42),
                t,
                r,
              ));
            let l = n.grid[0][0];
            e.box(`asSignPolice`, t, l, 0.7, 2.1, 2.1, 2.5, -0.29, -0.28, {
              planar: (e, t) => [(e - 0.7) / 1.4, (t - 2.1) / 0.4],
            });
            let d = -0.9,
              f = 1.1,
              p = l;
            for (let n of [-0.52, 0.52])
              e.add(
                `asCharcoal`,
                new u(0.33, 0.03, 6, 18).translate(d + n, 0.34, f),
                t,
                p,
              );
            (D(e, `asWhite`, t, p, [-1.42, 0.34, f], [d, 0.5, f], 0.05),
              D(e, `asWhite`, t, p, [d, 0.5, f], [-0.38, 0.34, f], 0.05),
              D(e, `asWhite`, t, p, [d, 0.5, f], [-1, 0.95, f], 0.05),
              D(
                e,
                `asWhite`,
                t,
                p,
                [-0.38, 0.34, f],
                [-0.48000000000000004, 1, f],
                0.04,
              ),
              e.box(
                `asCharcoal`,
                t,
                p,
                -1.12,
                -0.88,
                0.95,
                1,
                1.02,
                1.1800000000000002,
              ),
              e.box(
                I,
                t,
                p,
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
                p,
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
            new s(0.03, 0.03, 2, 6).translate(1.6, n.roofTop - 0.2, -1.6),
            t,
            0,
          );
        },
      }
    );
  }),
  Fl.push(function () {
    return (
      L(`asSignWingKee`, `榮記大牌檔  WING KEE NOODLES`, 5.4, 0.75, {
        bg: 16184038,
        fg: 13115420,
        border: 2779706,
        font: `"Arial Black", ${fl}`,
        weight: 900,
        size: 0.55,
        spacing: 0.04,
      }),
      L(`asSignMian`, `麵`, 0.7, 0.7, {
        bg: 13115420,
        fg: 16777215,
        font: fl,
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
            pitch: 3 * Bc,
            over: 0.25,
            mat: `asSteelGreen`,
            fascia: `asSteelGreen`,
          },
        },
        front: {
          kinds: () => `window`,
          extra: (e, t, n) => {
            let i = n.grid[0][0],
              a = n.L / 2;
            e.add(
              `asSteelGreen`,
              new r(5.3, 0.05, 1.3)
                .rotateX(-0.42)
                .translate(a, 2.5300000000000002, 0.6),
              t,
              i,
            );
            for (let n of [a - 2.4, a + 2.4])
              D(e, `asStainless`, t, i, [n, 1.85, 0.02], [n, 2.77, 1.18], 0.04);
            e.box(`asStainless`, t, i, a - 2.55, a + 2.55, 0.94, 1, -0.3, 0.38);
            for (let n = 0; n < 3; n++)
              e.add(
                `asStainless`,
                new s(0.26, 0.24, 0.45, 12).translate(
                  a - 1.4 + n * 1.1,
                  0.9,
                  -0.7,
                ),
                t,
                i,
              );
            (e.box(
              `asSignWingKee`,
              t,
              i,
              a - 2.7,
              a + 2.7,
              n.H + 0.08,
              n.H + 0.83,
              0,
              0.06,
              {
                planar: (e, t) => [
                  (e - a + 2.7) / 5.4,
                  (t - n.H - 0.08) / 0.75,
                ],
              },
            ),
              e.box(
                `asSteelGreen`,
                t,
                i,
                a - 2.75,
                a + 2.75,
                n.H,
                n.H + 0.9,
                -0.08,
                0,
              ),
              e.box(`asSignMian`, t, i, 0.15, 0.85, 1.25, 1.95, 0.01, 0.03, {
                planar: (e, t) => [(e - 0.15) / 0.7, (t - 1.25) / 0.7],
              }),
              Ul(e, t, i, `awningGreen`, -0.3, n.L + 0.3, 3.05, 3.3, 0.35));
            for (let r of [-0.2, n.L + 0.2])
              e.box(I, t, i, r - 0.03, r + 0.03, 0, 2.65, 3.2, 3.26);
            for (let [n, r] of [
              [1.5, 2.2],
              [4.5, 2.3],
            ])
              (e.add(
                `asWhite`,
                new s(0.5, 0.5, 0.04, 14).translate(n, 0.72, r),
                t,
                i,
              ),
                e.add(I, new s(0.03, 0.03, 0.7, 6).translate(n, 0.36, r), t, i),
                [
                  [-0.75, 0],
                  [0.75, 0],
                  [0, 0.75],
                  [0, -0.75],
                ].forEach(([a, o], s) =>
                  Al(
                    e,
                    t,
                    i,
                    s % 2 ? `asPlasticBlue` : `asPlasticRed`,
                    n + a,
                    r + o,
                    0.42,
                  ),
                ));
            e.add(
              `asOchre`,
              new s(0.17, 0.17, 0.75, 10).translate(n.L - 0.3, 0.375, 0.35),
              t,
              i,
            );
          },
        },
        back: { kinds: () => `solid` },
        right: { kinds: () => `solid` },
        left: { kinds: () => `door` },
      }
    );
  }),
  Fl.push(function () {
    L(
      `asSignZhonglou`,
      `鐘
樓`,
      1,
      1.8,
      { bg: 2051962, fg: 14727240, border: 14727240, font: fl, size: 0.62 },
    );
    let e = (e, t, n) => {
        let r = n.L / 2,
          i = n.grid[0][1],
          a = 2.5,
          o = 3.5,
          s = n.t;
        for (let n of [-1, 1]) {
          let c = new C();
          (c.moveTo(r + n * a, o),
            c.lineTo(r + n * a, 6.02),
            c.lineTo(r, 6.02),
            c.absarc(r, o, a, Math.PI / 2, n < 0 ? Math.PI : 0, n > 0),
            e.add(
              `asBrickGrey`,
              new S(c, {
                depth: s,
                bevelEnabled: !1,
                curveSegments: 10,
              }).translate(0, 0, -s),
              t,
              i,
            ));
        }
        let c = new C();
        (c.absarc(r, o, 2.95, 0, Math.PI, !1),
          c.absarc(r, o, a, Math.PI, 0, !0),
          e.add(
            `asGranite`,
            new S(c, { depth: 0.1, bevelEnabled: !1, curveSegments: 12 }),
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
      n = (e, t, n) => {
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
      r = (e, t, n) => {
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
      i = (e) => (t, n, r) => {
        let i = e ? r.t + 2.1 : 2.1,
          a = 2.1,
          o = [];
        for (let e = -i; e <= r.L + i + 0.001; e += (r.L + 2 * i) / 4)
          o.push(e);
        for (let i of e ? o.slice(1, -1) : o)
          Sl(
            t,
            n,
            r.grid[0][Uc(r, i)],
            `asRedLacquer`,
            i,
            a,
            0,
            2.1,
            0.2,
            `asGranite`,
          );
        for (let i of e ? o.slice(1, -1) : o)
          Cl(t, n, r.grid[0][Uc(r, i)], `asTeal`, i, 2.05, a, 0.7);
      },
      a = {
        wall: `asRedLacquer`,
        t: 0.3,
        bay: 2,
        parapet: 0,
        roof: Pl,
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
      o = (e, t) =>
        k(
          Bl(e, { win: a.win }, t, `curtain`, -0.2, -0.19, 1),
          Bl(e, { win: a.win }, t, `asFretBrown`, -0.07, -0.05, 0.5),
        ),
      s = (e, t) => (t === 2 ? `door` : `window`),
      c = () => `window`;
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
        roof: Pl,
      },
      tiers: [
        {
          front: { kinds: (e, t) => (t === 1 ? `door` : `solid`), extra: e },
          back: { kinds: (e, t) => (t === 1 ? `door` : `solid`), extra: e },
          right: { kinds: () => `solid`, extra: n },
          left: { kinds: () => `solid`, extra: n },
        },
        {
          W: 10,
          D: 10,
          floors: [4.4],
          style: a,
          front: { kinds: s, extra: k(o(s, [0]), i(!1), r) },
          back: { kinds: s, extra: k(o(s, [0]), i(!1), r) },
          right: { kinds: c, extra: k(o(c, [0]), i(!0), r) },
          left: { kinds: c, extra: k(o(c, [0]), i(!0), r) },
        },
        {
          W: 8,
          D: 8,
          floors: [3.6],
          style: a,
          front: {
            kinds: c,
            extra: k(o(c, [0]), r, (e, t, n) => {
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
                  I,
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
          back: { kinds: c, extra: k(o(c, [0]), r) },
          right: { kinds: c, extra: k(o(c, [0]), r) },
          left: { kinds: c, extra: k(o(c, [0]), r) },
        },
      ],
      extra: (e, n, r) => {
        (e.box(`asGranite`, n, 0, -7, 7, 8, 8.06, -7, 7),
          yl(e, n, {
            y: 11.35,
            a: 5,
            b: 5,
            over: 2.5,
            p: 22 * Bc,
            mat: `asTileGreen`,
            trim: `asRedLacquer`,
            horn: 0.6,
          }),
          yl(e, n, {
            y: 12.4 + 0.8,
            a: 4,
            b: 4,
            over: 1.9,
            p: 22 * Bc,
            mat: `asTileGreen`,
            trim: `asRedLacquer`,
            horn: 0.55,
          }),
          vl(e, n, {
            y: r.H,
            a: 4,
            b: 4,
            over: 1.8,
            p1: 22 * Bc,
            p2: 36 * Bc,
            k: 1.7,
            mat: `asTileGreen`,
            trim: `asRedLacquer`,
            horn: 0.8,
            finial: `asGold`,
          }));
        let i = new t(
          [
            [0.001, 1.7],
            [0.3, 1.66],
            [0.5, 1.55],
            [0.6, 1.2],
            [0.66, 0.6],
            [0.78, 0.15],
            [0.84, 0],
          ].map(([e, t]) => Hc(e, t)),
          16,
        );
        (e.add(`asBronze`, i.translate(0, 9.1, 2.4), n, 0),
          e.box(`asTimber`, n, 0, -1.2, 1.2, 11.3, 11.5, 2.3, 2.5),
          e.box(I, n, 0, -0.03, 0.03, 10.8, 11.3, 2.37, 2.43));
      },
    };
  }),
  Fl.push(function () {
    (L(`asSignYamabuki`, `山吹酒造`, 2.4, 0.6, {
      bg: 2760472,
      fg: 15784080,
      border: 11569726,
      font: pl,
      size: 0.62,
      spacing: 0.3,
    }),
      L(`asSignSakeMon`, `酒`, 1.6, 1.6, {
        bg: 1841688,
        fg: 16052714,
        font: pl,
        size: 0.72,
      }),
      L(
        `asSignTaru`,
        `山
吹`,
        0.5,
        0.7,
        { bg: 15260864, fg: 10492950, font: pl, size: 0.6 },
      ));
    let e = (e, t) =>
        e === 0 ? (t === 1 ? `door` : `solid`) : t === 1 ? `window` : `solid`,
      t = (e, t) => (e === 1 && t === 1 ? `window` : `solid`),
      n = (e) => (t, n, i) => {
        for (let a = 0; a <= i.top; a++)
          for (let o = 0; o < i.nb; o++) {
            if (e(a, o) !== `window`) continue;
            let s = i.grid[a][o],
              c = (o + 0.5) * i.bw,
              l = i.ys[a] + 0.9,
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
              t.box(I, n, s, r - 0.02, r + 0.02, l, u, -0.2, -0.16);
            }
            (t.add(
              `asKawara`,
              new r(1.5, 0.08, 0.7).rotateX(0.35).translate(c, u + 0.3, 0.3),
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
      i = (e, t, n) => {
        let r = n.grid[0][1],
          i = 1.5 * n.bw;
        for (let a of [-1, 1])
          e.box(
            `asNamako`,
            t,
            r,
            a < 0 ? n.bw : i + 0.95,
            a < 0 ? i - 0.95 : 2 * n.bw,
            0,
            1.6,
            0,
            0.05,
          );
        for (let n = 0; n < 3; n++) {
          let a = 0.95 + n * 0.12;
          e.box(
            `asPlasterWhite`,
            t,
            r,
            i - a,
            i + a,
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
              i + o * a - 0.06,
              i + o * a + 0.06,
              0,
              2.3 + n * 0.1,
              0,
              0.06 + n * 0.05,
            );
        }
        (bl({
          y: 3.1,
          d: 1,
          rise: 0.4,
          a0: i - 1.5,
          a1: i + 1.5,
          mat: `asKawara`,
          trim: `asCharWood`,
          step: 2.3,
        })(e, t, n),
          e.box(
            `asSignYamabuki`,
            t,
            r,
            i - 1.2,
            i + 1.2,
            3.2,
            3.8,
            0.02,
            0.05,
            { planar: (e, t) => [(e - i + 1.2) / 2.4, (t - 3.2) / 0.6] },
          ),
          e.box(I, t, r, i + 1.2, i + 1.24, 2.35, 2.62, 0, 1),
          e.add(
            `asPineGreen`,
            new w(0.42, 12, 10).translate(i + 1.22, 2, 0.95),
            t,
            r,
          ));
        let a = n.grid[0][0];
        [
          [0.6, 0, 0.6],
          [1.5, 0, 0.6],
          [2.4, 0, 0.6],
          [1.05, 0.72, 0.6],
          [1.95, 0.72, 0.6],
        ].forEach(([n, r, i]) => {
          (kl(e, t, a, `asStraw`, n, r, i, 0.36, 0.72, `asCharWood`),
            e.box(
              `asSignTaru`,
              t,
              a,
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
      a = (e, t, n) => {
        let r = n.gableCell,
          i = n.L / 2,
          a = n.H + 0.62;
        (e.add(`asSignSakeMon`, new y(0.42, 24).translate(i, a, 0.03), t, r, {
          planar: (e, t) => [(e - i + 0.45) / 0.9, (t - a + 0.45) / 0.9],
        }),
          e.add(
            `asPlasterWhite`,
            new u(0.46, 0.05, 6, 24).translate(i, a, 0.03),
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
          pitch: 24 * Bc,
          over: 0.7,
          mat: `asKawara`,
          fascia: `asPlasterWhite`,
          ridgeMat: `asKawara`,
        },
      },
      front: { kinds: e, extra: k(n(e), i) },
      back: { kinds: t, extra: n(t) },
      right: { kinds: t, extra: k(n(t), a) },
      left: { kinds: t, extra: k(n(t), a) },
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
