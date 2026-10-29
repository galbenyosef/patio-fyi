// assets__lab-buildings-view-DY6ytqNM 99 — box
// Lines 30225-31408 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
(Pl.push(function () {
  return (
    R(`asSignKikuNoren`, `菊 屋`, 1.7, 0.9, {
      bg: 2043210,
      fg: 16052714,
      font: fl,
      size: 0.52,
      spacing: 0.4,
    }),
    R(
      `asSignKikuPlaque`,
      `菊
屋`,
      0.5,
      1.3,
      { bg: 5913122, fg: 15786160, border: 2759178, font: fl, size: 0.62 },
    ),
    {
      key: `asMachiya`,
      name: `Kikuya Machiya`,
      plain: 3813416,
      desc: `Kyoto machiya townhouse: dark timber front with fine koshi lattice, low plaster-slat mushiko window, tiled pent roof, udatsu firewalls, curved bamboo inuyarai and an indigo noren.`,
      W: 7.2,
      D: 12,
      style: {
        wall: `asPlasterEarth`,
        floorMat: [`asCharWood`],
        t: 0.22,
        bay: 2.4,
        floors: [3.6, 2.5],
        win0: {
          w: 2,
          h: 2.1,
          sill: 0.45,
          type: `grid`,
          lites: [1, 1],
          frame: `asCharWood`,
          rec: 0.1,
          curtains: 0.3,
        },
        win: {
          w: 1.8,
          h: 0.75,
          sill: 0.95,
          type: `grid`,
          lites: [1, 1],
          frame: `asCharWood`,
          rec: 0.12,
          curtains: 0,
        },
        door: {
          w: 1.5,
          h: 2.25,
          transom: 0,
          frame: `asCharWood`,
          mat: `asCharWood`,
          rec: 0.15,
          step: `asGranite`,
        },
        base: { mat: `asGranite`, h: 0.3, out: 0.03 },
        roof: {
          ridge: `x`,
          pitch: 20 * zc,
          over: 0.75,
          mat: `asKawara`,
          fascia: `asCharWood`,
        },
      },
      front: {
        kinds: (e, t) =>
          e === 0
            ? t === 0
              ? `door`
              : `window`
            : t === 1
              ? `window`
              : `solid`,
        signs: [
          {
            mat: `asSignKikuPlaque`,
            rect: [0.55, 1.05, 4.35, 5.65],
            z0: 0.02,
            z1: 0.07,
          },
        ],
        extra: A(
          yl({
            y: 4.05,
            d: 1,
            rise: 0.42,
            a0: -0.1,
            a1: 7.3,
            mat: `asKawara`,
            trim: `asCharWood`,
            step: 2.4,
          }),
          (e, t, n) => {
            for (let r of [1, 2]) {
              let i = n.grid[0][r],
                o = (r + 0.5) * n.bw,
                s = o - 1,
                c = o + 1;
              (e.box(`asKoshi`, t, i, s, c, 0.45, 2.55, -0.07, -0.04, {
                planar: (e, t) => [(e - s) / 0.4, t],
              }),
                e.box(
                  `asCharWood`,
                  t,
                  i,
                  s - 0.06,
                  c + 0.06,
                  2.55,
                  2.66,
                  -0.08,
                  0.04,
                ),
                e.box(
                  `asCharWood`,
                  t,
                  i,
                  s - 0.06,
                  c + 0.06,
                  0.36,
                  0.46,
                  -0.08,
                  0.06,
                ));
              let l = r * n.bw + 0.15,
                u = (r + 1) * n.bw - 0.15,
                d = { planar: (e, t) => [(e - l) / 0.5, t] };
              (e.box(`asBambooFence`, t, i, l, u, 0, 0.36, 0.52, 0.55, d),
                e.add(
                  `asBambooFence`,
                  new a(u - l, 0.78, 0.03)
                    .rotateX(-Math.atan2(0.5, 0.6))
                    .translate((l + u) / 2, 0.66, 0.3),
                  t,
                  i,
                  d,
                ),
                e.box(`asTimber`, t, i, l, u, 0, 0.06, 0.5, 0.6));
            }
            let r = n.grid[0][0],
              i = 0.5 * n.bw;
            (e.box(
              `asKoshi`,
              t,
              r,
              i - 0.6,
              i + 0.6,
              1.15,
              2.05,
              -0.15,
              -0.13,
              { planar: (e, t) => [e / 0.4, t] },
            ),
              Tl(
                e,
                t,
                r,
                `asSignKikuNoren`,
                i - 0.85,
                i + 0.85,
                2.25,
                0.9,
                0.04,
              ),
              e.box(L, t, r, n.bw - 0.02, n.bw + 0.02, 2.55, 2.6, 0, 0.35),
              wl(e, t, r, n.bw, 2.58, 0.33, {
                mat: `asLanternWhite`,
                r: 0.17,
              }));
            let o = n.grid[1][1],
              s = 1.5 * n.bw,
              c = n.ys[1] + 0.95;
            for (let n = 0; n < 9; n++) {
              let r = s - 0.9 + (n + 0.5) * 0.2;
              e.box(
                `asPlasterEarth`,
                t,
                o,
                r - 0.05,
                r + 0.05,
                c,
                c + 0.75,
                -0.1,
                0,
              );
            }
            for (let [r, i] of [
              [-0.02, n.grid[1][0]],
              [n.L - 0.26, n.grid[1][n.nb - 1]],
            ])
              (e.box(
                `asPlasterWhite`,
                t,
                i,
                r,
                r + 0.28,
                n.ys[1] + 0.5,
                n.H + 0.2,
                0,
                0.95,
              ),
                e.box(
                  `asKawara`,
                  t,
                  i,
                  r - 0.1,
                  r + 0.38,
                  n.H + 0.2,
                  n.H + 0.34,
                  -0.05,
                  1.1,
                ),
                e.box(
                  `asCharWood`,
                  t,
                  i,
                  r - 0.12,
                  r + 0.4,
                  n.H + 0.34,
                  n.H + 0.44,
                  -0.05,
                  1.1,
                ));
          },
        ),
      },
      back: {
        kinds: (e, t) =>
          e === 0 && t === 1 ? `door` : e === 1 && t !== 1 ? `solid` : `window`,
      },
      right: { kinds: (e, t, n) => (t === n - 1 ? `window` : `solid`) },
      left: { kinds: () => `solid` },
    }
  );
}),
  Pl.push(function () {
    let e = {
      win0: {
        w: 1.7,
        h: 1.3,
        sill: 0.9,
        type: `grid`,
        lites: [3, 2],
        frame: `asCharWood`,
        rec: 0.1,
        curtains: 0.6,
      },
      win: {
        w: 1.7,
        h: 1.2,
        sill: 0.7,
        type: `grid`,
        lites: [2, 1],
        frame: `asCharWood`,
        rec: 0.1,
        curtains: 0.3,
      },
    };
    (R(`asSignToriNoren`, `とりかわ`, 1.9, 0.75, {
      bg: 9051674,
      fg: 16183264,
      font: dl,
      size: 0.5,
      spacing: 0.3,
    }),
      R(
        `asSignIzakaya`,
        `居
酒
屋`,
        0.4,
        2,
        {
          bg: 15920348,
          fg: 10100246,
          border: 10100246,
          glow: 0.35,
          font: dl,
          size: 0.5,
        },
      ),
      R(
        `asSignToriBoard`,
        `鳥かわ
TORIKAWA`,
        3.2,
        1,
        {
          bg: 2760472,
          fg: 15916200,
          border: 11569726,
          font: dl,
          size: 0.62,
          spacing: 0.12,
        },
      ));
    let t = (e, t, n) => {
      let r = n.grid[0][0],
        i = n.grid[0][1],
        a = n.grid[0][2],
        o = n.L / 2;
      for (let [n, o, s] of [
        [0.7, r, 0.2],
        [1.9, r, 0.2],
        [2.95, i, 0.3],
        [5.05, i, 0.3],
        [6.1, a, 0.2],
        [7.3, a, 0.2],
      ])
        wl(e, t, o, n, 2.92, 0.92, { r: s });
      (Tl(e, t, i, `asSignToriNoren`, o - 0.95, o + 0.95, 2.2, 0.75, 0.04),
        Ie(
          e,
          t,
          n.grid[1][0],
          `asSignIzakaya`,
          0.4,
          3.75,
          5.95,
          0.15,
          0.75,
          `asCharWood`,
        ));
      for (let n = 0; n < 3; n++)
        for (let i = 0; i < 4 - n; i++)
          e.box(
            `asPlasticYellow`,
            t,
            r,
            0.3 + n * 0.52,
            0.76 + n * 0.52,
            i * 0.3,
            i * 0.3 + 0.28,
            0.15,
            0.55,
          );
      (e.box(`asCharWood`, t, a, 5.4, 6, 0, 1.05, 0.9, 0.96),
        e.box(`asBlackLacquer`, t, a, 5.45, 5.95, 0.35, 1, 0.96, 0.98),
        k(e, `asCharWood`, t, a, [5.7, 1, 0.92], [5.7, 0, 0.45], 0.05));
      for (let r = 0; r < n.nb; r++) {
        let i = (r + 0.5) * n.bw,
          a = n.ys[1] + 0.7;
        (e.box(
          `asSudare`,
          t,
          n.grid[1][r],
          i - 0.95,
          i + 0.95,
          a + 0.55,
          a + 1.35,
          0.02,
          0.035,
        ),
          e.box(
            `asTimber`,
            t,
            n.grid[1][r],
            i - 1,
            i + 1,
            a + 1.33,
            a + 1.4,
            0,
            0.06,
          ));
      }
      let s = n.gableCell;
      e.box(
        `asSignToriBoard`,
        t,
        s,
        o - 1.6,
        o + 1.6,
        n.H + 0.25,
        n.H + 1.25,
        0.02,
        0.08,
        { planar: (e, t) => [(e - o + 1.6) / 3.2, t - n.H - 0.25] },
      );
    };
    return {
      key: `asIzakaya`,
      name: `Torikawa Izakaya`,
      plain: 9069632,
      desc: `Japanese izakaya: cedar-boarded bar front under a tiled pent roof hung with red paper lanterns, split noren at the sliding door, lit vertical 居酒屋 sign, bamboo blinds, beer crates.`,
      W: 8,
      D: 11,
      style: {
        wall: `asPlasterWhite`,
        floorMat: [`asCedar`],
        t: 0.2,
        bay: 2.67,
        floors: [3.3, 2.9],
        ...e,
        door: {
          w: 1.8,
          h: 2.2,
          transom: 0,
          frame: `asCharWood`,
          mat: `asCedar`,
          glazed: !0,
          rec: 0.15,
          step: `asGranite`,
        },
        base: { mat: `asGranite`, h: 0.35, out: 0.03 },
        corners: `asCharWood`,
        roof: {
          ridge: `z`,
          pitch: 28 * zc,
          over: 0.6,
          mat: `asKawara`,
          fascia: `asCharWood`,
        },
      },
      front: {
        kinds: (e, t) => (e === 0 && t === 1 ? `door` : `window`),
        extra: A(
          yl({
            y: 3.5,
            d: 1.15,
            rise: 0.4,
            a0: -0.1,
            a1: 8.1,
            mat: `asKawara`,
            trim: `asCharWood`,
            step: 0,
          }),
          t,
        ),
      },
      back: { kinds: (e, t) => (e === 0 && t === 0 ? `door` : `window`) },
      right: {
        kinds: (e, t, n) => (e === 0 && t < n - 1 ? `solid` : `window`),
        extra: (e, t, n) => El(e, t, n.grid[0][1], n.bw * 1.5, 2.2),
      },
      left: { kinds: (e) => (e === 0 ? `solid` : `window`) },
    };
  }),
  Pl.push(function () {
    let e = {
        win0: {
          w: 2.2,
          h: 1.5,
          sill: 0.75,
          type: `grid`,
          lites: [1, 1],
          frame: `asCharWood`,
          rec: 0.08,
          open: !0,
        },
        win: {
          w: 2.4,
          h: 2,
          sill: 0.25,
          type: `grid`,
          lites: [1, 1],
          frame: `asCharWood`,
          rec: 0.08,
          open: !0,
        },
      },
      t = (e, t) => (e === 0 && t === 3 ? `door` : `window`),
      n = () => `window`;
    (R(`asSignYukimiNoren`, `雪見荘`, 2.4, 0.8, {
      bg: 2043210,
      fg: 16052714,
      font: fl,
      size: 0.5,
      spacing: 0.5,
    }),
      R(`asSignYukimiPlaque`, `YUKIMI-SO`, 1.6, 0.45, {
        bg: 2760472,
        fg: 15256704,
        border: 11569726,
        size: 0.55,
        spacing: 0.15,
      }),
      R(
        `asSignRyokanPost`,
        `旅
館
雪
見`,
        0.42,
        1.8,
        { bg: 15260864, fg: 2760472, font: fl, size: 0.62 },
      ));
    let r = (e, t, n) => {
      let r = 3.5 * n.bw,
        a = n.grid[0][3];
      for (let n of [r - 1.8, r + 1.8])
        xl(e, t, a, `asCharWood`, n, 2.8, 0, 3, 0.13);
      let o = bl(e, t, a, {
        u0: r - 1.8,
        u1: r + 1.8,
        y: 3,
        d: 2.95,
        p: 30 * zc,
        mat: `asKawara`,
        trim: `asCharWood`,
        gable: `asCharWood`,
        over: 0.45,
      });
      (e.box(
        `asSignYukimiPlaque`,
        t,
        a,
        r - 0.8,
        r + 0.8,
        3.12,
        3.57,
        2.95,
        3,
        { planar: (e, t) => [(e - r + 0.8) / 1.6, (t - 3.12) / 0.45] },
      ),
        e.box(`asGold`, t, a, r - 0.05, r + 0.05, o - 0.5, o - 0.1, 2.9, 2.98),
        Tl(e, t, a, `asSignYukimiNoren`, r - 1.2, r + 1.2, 2.3, 0.8, 0.05),
        e.box(`asGranite`, t, a, r - 2, r + 2, 0, 0.12, 0, 3.2));
      for (let i of [r - 3.1, r + 3.1]) Dl(e, t, n.grid[0][Hc(n, i)], i, 2);
      let s = n.grid[0][4],
        c = r + 2.7;
      (e.box(`asCharWood`, t, s, c - 0.06, c + 0.06, 0, 2.4, 1.55, 1.67),
        e.box(
          `asSignRyokanPost`,
          t,
          s,
          c - 0.21,
          c + 0.21,
          0.5,
          2.3,
          1.67,
          1.7,
          { planar: (e, t) => [(e - c + 0.21) / 0.42, (t - 0.5) / 1.8] },
        ));
      for (let r of [0.6, 4.3, 17.7, 21.4]) {
        let a = n.grid[0][Hc(n, r)];
        e.add(
          `asTimber`,
          new C(0.08, 0.1, 1.2, 6).translate(r, 0.6, 1.4),
          t,
          a,
        );
        for (let [n, o] of [
          [1.2, 0.6],
          [1.65, 0.45],
          [2, 0.3],
        ])
          e.add(
            `asPineGreen`,
            new i(o, 8, 5)
              .scale(1, 0.45, 1)
              .translate(r + (n - 1.6) * 0.4, n, 1.4),
            t,
            a,
          );
      }
    };
    return {
      key: `asRyokan`,
      name: `Yukimi-so Ryokan`,
      plain: 15130834,
      desc: `Traditional ryokan inn: white plaster between dark timber posts, shoji screens, a long engawa balcony, gabled entrance porch with noren and stone lanterns, big hip-and-gable irimoya roof.`,
      W: 22,
      D: 13,
      style: {
        wall: `asPlasterWhite`,
        t: 0.25,
        bay: 3.14,
        floors: [3.4, 3.2],
        ...e,
        door: {
          w: 2.4,
          h: 2.3,
          transom: 0,
          frame: `asCharWood`,
          mat: `asCedar`,
          glazed: !0,
          rec: 0.3,
          step: `asGranite`,
        },
        base: { mat: `asGranite`, h: 0.5, out: 0.05 },
        belt: { mat: `asCharWood`, h: 0.26, out: 0.06 },
        pilaster: { mat: `asCharWood`, w: 0.22, out: 0.05 },
        roof: Nl,
      },
      front: {
        kinds: t,
        extra: A(
          Ll(t, e, [0, 1]),
          Il({
            y: 3.4,
            a0: -0.3,
            a1: 8.8,
            d: 1.1,
            deck: `asCharWood`,
            h: 0.85,
          }),
          Il({
            y: 3.4,
            a0: 13.2,
            a1: 22.3,
            d: 1.1,
            deck: `asCharWood`,
            h: 0.85,
          }),
          r,
        ),
      },
      back: {
        kinds: (e, t) => (e === 0 && t === 1 ? `door` : `window`),
        extra: Ll(
          (e, t) => (e === 0 && t === 1 ? `door` : `window`),
          e,
          [0, 1],
        ),
      },
      right: { kinds: n, extra: Ll(n, e, [0, 1]) },
      left: { kinds: n, extra: Ll(n, e, [0, 1]) },
      extra: (e, t, n) =>
        _l(e, t, {
          y: n.H,
          a: n.W / 2,
          b: n.D / 2,
          over: 1.3,
          p1: 17 * zc,
          p2: 30 * zc,
          k: 2.2,
          mat: `asKawara`,
          trim: `asCharWood`,
          gable: `asPlasterWhite`,
          gIn: 0.55,
          horn: 0.35,
          curl: 0.35,
        }),
    };
  }),
  Pl.push(function () {
    let e = 55 * zc,
      t = {
        ridge: `x`,
        pitch: e,
        over: 0.8,
        mat: `asThatch`,
        fascia: `asTimber`,
      },
      n = {
        win0: {
          w: 2,
          h: 1.5,
          sill: 0.75,
          type: `grid`,
          lites: [1, 1],
          frame: `asCharWood`,
          rec: 0.08,
          open: !0,
        },
      },
      r = (e, t) => (t === 1 ? `door` : `window`),
      i = (e, t) => (t === 1 ? `window` : `solid`),
      a = (t, n, r) => {
        let i = r.gableCell,
          a = r.L,
          o = r.H,
          s = (a / 2 + r.t) * Math.tan(e),
          c = (e) => (a / 2 + r.t) * (1 - (e - o) / s) - 0.25;
        for (let e of [o + 0.05, o + 2, o + 3.8])
          t.box(
            `asCharWood`,
            n,
            i,
            a / 2 - c(e + 0.15),
            a / 2 + c(e + 0.15),
            e,
            e + 0.16,
            0,
            0.06,
          );
        for (let e of [-2.6, -1.2, 1.2, 2.6]) {
          let c = o + s * (1 - (Math.abs(e) + 0.4) / (a / 2 + r.t));
          t.box(
            `asCharWood`,
            n,
            i,
            a / 2 + e - 0.07,
            a / 2 + e + 0.07,
            o,
            c,
            0,
            0.05,
          );
        }
        let l = (e, r, a, o) => {
          t.box(`asShoji`, n, i, e - a / 2, e + a / 2, r, r + o, 0.02, 0.03, {
            planar: (t, n) => [(t - e + a / 2) / a, (n - r) / o],
          });
          for (let [s, c, l, u] of [
            [e - a / 2 - 0.07, e - a / 2, r, r + o],
            [e + a / 2, e + a / 2 + 0.07, r, r + o],
            [e - a / 2 - 0.07, e + a / 2 + 0.07, r - 0.07, r],
            [e - a / 2 - 0.07, e + a / 2 + 0.07, r + o, r + o + 0.07],
          ])
            t.box(`asCharWood`, n, i, s, c, l, u, 0, 0.07);
        };
        (l(a / 2 - 1.9, o + 0.6, 1, 1.1),
          l(a / 2, o + 0.6, 1.2, 1.1),
          l(a / 2 + 1.9, o + 0.6, 1, 1.1),
          l(a / 2 - 0.8, o + 2.5, 0.9, 1),
          l(a / 2 + 0.8, o + 2.5, 0.9, 1),
          l(a / 2, o + 4.3, 0.7, 0.7));
      },
      o = (e, t, n) => {
        for (let [r, i, a] of hl(n, 0.1, n.L - 0.1)) {
          let o = n.grid[0][a];
          e.box(`asWoodBrown`, t, o, r, i, 0.42, 0.52, 0, 0.95);
          for (let n of [r + 0.15, i - 0.15])
            e.box(`asTimber`, t, o, n - 0.06, n + 0.06, 0, 0.42, 0.8, 0.92);
        }
        for (let r of [1.6, 4.6, 7.8, 10.6])
          e.box(
            `asGranite`,
            t,
            n.grid[0][Hc(n, r)],
            r - 0.35,
            r + 0.35,
            0,
            0.22,
            1.05,
            1.55,
          );
      },
      s = (e, t, n) => {
        let r = n.grid[0][0];
        for (let n = 0; n < 10; n++)
          for (let i = 0; i < 5; i++)
            e.add(
              `asWoodBrown`,
              new C(0.08, 0.08, 0.5, 6)
                .rotateX(Math.PI / 2)
                .translate(
                  0.5 + n * 0.18 + (i % 2) * 0.09,
                  0.1 + i * 0.16,
                  0.3,
                ),
              t,
              r,
            );
      };
    return {
      key: `asMinka`,
      name: `Ogura Gassho Farmhouse`,
      plain: 7232058,
      desc: `Gassho-style minka farmhouse: a steep 55-degree thatched roof with a crossed-timber ridge, tall gable ends stacked with shoji windows in a timber grid, dark wood ground floor and engawa.`,
      W: 12,
      D: 9,
      style: {
        wall: `asPlasterEarth`,
        floorMat: [`asCharWood`],
        t: 0.25,
        bay: 3,
        floors: [3.4],
        ...n,
        door: {
          w: 1.8,
          h: 2.1,
          transom: 0,
          frame: `asCharWood`,
          mat: `asCedar`,
          rec: 0.2,
        },
        base: { mat: `asFieldstone`, h: 0.45, out: 0.05 },
        roof: t,
      },
      front: { kinds: r, extra: A(Ll(r, n, [0]), o) },
      back: { kinds: r, extra: Ll(r, n, [0]) },
      right: { kinds: i, extra: A(Ll(i, n, [0]), a) },
      left: { kinds: i, extra: A(Ll(i, n, [0]), a, s) },
      extra: (e, n, r) => {
        let i = Ml(e, n, r, t, `asThatch`, 0, 0.55, 0.02),
          a = r.W / 2 + t.over;
        (e.box(`asThatch`, n, 0, -a, a, i + 0.25, i + 0.95, -0.55, 0.55),
          e.box(
            `asTimber`,
            n,
            0,
            -a - 0.1,
            a + 0.1,
            i + 0.95,
            i + 1.1,
            -0.12,
            0.12,
          ));
        for (let t = -a + 0.5; t <= a - 0.4; t += 1.1)
          for (let r of [-1, 1])
            k(
              e,
              `asTimber`,
              n,
              0,
              [t, i + 0.3, r * 0.95],
              [t, i + 1.45, -r * 0.3],
              0.09,
            );
      },
    };
  }),
  Pl.push(function () {
    let e = (e, t) => (t === 1 ? (e === 0 ? `door` : `solid`) : `window`),
      t = (e) => (e === 0 ? `solid` : `window`),
      n = {
        win0: {
          w: 3.6,
          h: 3.6,
          sill: 0.6,
          type: `grid`,
          lites: [1, 1],
          frame: `asVermilion`,
          rec: 0.1,
          open: !0,
        },
        win: {
          w: 1.5,
          h: 2.3,
          sill: 0.7,
          type: `grid`,
          lites: [2, 3],
          frame: `asCharWood`,
          rec: 0.1,
          arch: 0.75,
          archMat: `asCharWood`,
          curtains: 0,
        },
      };
    R(
      `asSignHorin`,
      `法
輪
門`,
      1.1,
      2.1,
      { bg: 1841688, fg: 14200912, border: 14200912, font: fl, size: 0.62 },
    );
    let r = (e, t, n) => {
        for (let r = 0; r <= n.nb; r++) {
          let i = Math.min(n.L - 0.3, Math.max(0.3, r * n.bw)),
            a = Math.min(n.nb - 1, r);
          (Sl(e, t, n.grid[n.top][a], `asVermilion`, i, n.H - 0.62, 0.3, 1),
            Sl(e, t, n.grid[0][a], `asVermilion`, i, n.ys[1] - 0.62, 0.3, 0.8));
        }
      },
      i = (e, t, n) => {
        let r = n.L / 2,
          i = n.grid[0][1];
        (wl(e, t, i, r, 4.45, 0.35, { r: 0.8 }),
          e.box(
            `asSignHorin`,
            t,
            n.grid[1][1],
            r - 0.55,
            r + 0.55,
            n.ys[1] + 1.25,
            n.ys[1] + 3.35,
            0.14,
            0.2,
            {
              planar: (e, t) => [
                (e - r + 0.55) / 1.1,
                (t - n.ys[1] - 1.25) / 2.1,
              ],
            },
          ));
        for (let r of [0, 2]) {
          let i = (r + 0.5) * n.bw,
            a = n.grid[0][r];
          e.box(`asFretRed`, t, a, i - 1.8, i + 1.8, 0.6, 4.2, -0.06, -0.04, {
            planar: (e, t) => [(e - i) / 0.6, t / 0.6],
          });
        }
      },
      a = (e) => (t, n, r) => {
        let i = e ? r.t + 0.9 : 0.9;
        Il({
          y: e ? 5.36 : 5.35,
          a0: -i,
          a1: r.L + i,
          d: 0.9,
          deck: `asVermilion`,
          rail: `asVermilion`,
          h: 0.8,
          step: 0.35,
          brackets: !1,
          sides: !1,
        })(t, n, r);
      };
    return {
      key: `asSanmon`,
      name: `Horin-mon Temple Gate`,
      plain: 11814190,
      desc: `Two-storey Zen temple gate (sanmon): vermilion posts and lattice guardian niches round a passage hung with a giant red lantern, pent skirt roof, railed upper gallery, bell windows, bracket sets, huge irimoya roof.`,
      W: 16,
      D: 8,
      style: {
        wall: `asPlasterWhite`,
        floorMat: [`asVermilion`],
        t: 0.4,
        bay: 5.34,
        floors: [5.2, 3.8],
        ...n,
        door: {
          w: 4.2,
          h: 4.4,
          transom: 0,
          frame: `asVermilion`,
          open: !0,
          rec: 0.1,
        },
        base: { mat: `asGranite`, h: 0.4, out: 0.3 },
        pilaster: { mat: `asVermilion`, w: 0.42, out: 0.14 },
        roof: Nl,
      },
      front: { kinds: e, extra: A(r, i, a(!1)) },
      back: { kinds: e, extra: A(r, a(!1)) },
      right: { kinds: t, extra: A(r, a(!0)) },
      left: { kinds: t, extra: A(r, a(!0)) },
      extra: (e, t, n) => {
        (vl(e, t, {
          y: 5.25,
          a: n.W / 2,
          b: n.D / 2,
          over: 1.5,
          p: 22 * zc,
          mat: `asKawara`,
          trim: `asCharWood`,
          horn: 0.35,
        }),
          _l(e, t, {
            y: n.H,
            a: n.W / 2,
            b: n.D / 2,
            over: 1.9,
            p1: 20 * zc,
            p2: 34 * zc,
            k: 2.4,
            mat: `asKawara`,
            trim: `asCharWood`,
            gable: `asVermilion`,
            gIn: 0.5,
            horn: 0.6,
            curl: 0.7,
          }));
      },
    };
  }),
  Pl.push(function () {
    let e = [
      [
        `歯
科`,
        2776776,
        16777215,
        0,
      ],
      [
        `カ
ラ
オ
ケ`,
        15913530,
        13115420,
        0.5,
      ],
      [
        `雀
荘`,
        2787914,
        16777215,
        0.3,
      ],
      [
        `バ
ー
月`,
        4860522,
        16765168,
        0.8,
      ],
      [
        `英
会
話`,
        16184558,
        2047882,
        0,
      ],
      [
        `ス
ナ
ッ
ク`,
        14700682,
        16777215,
        0.8,
      ],
      [
        `整
体`,
        15235114,
        16777215,
        0.2,
      ],
    ];
    (e.forEach(([e, t, n, r], i) => {
      (R(`asSignPencil${i}`, e, 0.7, 2.5, {
        bg: t,
        fg: n,
        glow: r,
        font: dl,
        size: 0.55,
      }),
        R(
          `asSignPencilF${i}`,
          e
            .split(
              `
`,
            )
            .join(``),
          1.5,
          0.6,
          {
            bg: t,
            fg: n,
            glow: r,
            border: n,
            font: dl,
            size: 0.62,
            spacing: 0.1,
          },
        ));
    }),
      R(`asSignPencilShop`, `麺屋 ひかり`, 2.2, 0.5, {
        bg: 1841688,
        fg: 15784080,
        font: dl,
        size: 0.6,
        spacing: 0.2,
      }),
      R(`asSignRamenNoren`, `らーめん`, 1.8, 0.6, {
        bg: 16052194,
        fg: 1841688,
        font: dl,
        size: 0.5,
        spacing: 0.3,
      }),
      R(`asSignHikariRoof`, `HIKARI BLDG`, 4.6, 1.2, {
        bg: 1513500,
        fg: 10149119,
        glow: 0.8,
        size: 0.6,
        spacing: 0.15,
        ...pl,
      }));
    let t = (t, n, r) => {
        for (let i = 1; i <= r.top; i++) {
          let a = (i - 1) % e.length,
            o = r.ys[i] + 1.2;
          (Ie(
            t,
            n,
            r.grid[i][1],
            `asSignPencil${a}`,
            r.L - 0.35,
            r.ys[i] + 0.25,
            r.ys[i] + 2.95,
            0.2,
            1.1,
            `asWhite`,
          ),
            t.box(
              `asWhite`,
              n,
              r.grid[i][1],
              2.85,
              4.55,
              o - 0.05,
              o + 0.65,
              0,
              0.08,
            ),
            t.box(
              `asSignPencilF${a}`,
              n,
              r.grid[i][1],
              2.95,
              4.45,
              o,
              o + 0.6,
              0.08,
              0.1,
              { planar: (e, t) => [(e - 2.95) / 1.5, (t - o) / 0.6] },
            ));
        }
        let i = r.grid[0][0];
        (t.box(`asSignPencilShop`, n, i, 0.2, 2.4, 3.2, 3.7, 0.07, 0.09, {
          planar: (e, t) => [(e - 0.2) / 2.2, (t - 3.2) / 0.5],
        }),
          Tl(t, n, i, `asSignRamenNoren`, 0.4, 2.2, 3, 0.6, 0.1),
          t.box(`asPlasticRed`, n, i, 0.1, 0.5, 0, 1.1, 0.35, 0.6),
          t.box(`asBulb`, n, i, 0.15, 0.45, 0.6, 1, 0.6, 0.62),
          t.box(`asPlasticBlue`, n, i, 2, 2.45, 0, 0.6, 0.3, 0.7));
      },
      n = (e, t, n) => {
        for (let r = 1; r <= n.top; r++) {
          let i = n.ys[r],
            a = n.grid[r][0];
          (e.box(`asConcreteLight`, t, a, 0.1, 2.5, i - 0.15, i + 0.03, 0, 1),
            Cl(e, t, a, L, 0.1, 2.5, i + 0.03, 0.95, 1.05, 0.12, 0.012),
            e.box(`asStainless`, t, a, 0.6, 1.2, i - 0.16, i + 0.04, 0.2, 0.8),
            El(e, t, a, 2, i + 0.05, 0.05));
        }
      },
      r = (e, t, n) => {
        for (let r = 1; r <= n.top; r++)
          r % 2 && El(e, t, n.grid[r][0], 1.2, n.ys[r] + 0.4);
      };
    return {
      key: `asPencil`,
      name: `Hikari Pencil Building`,
      plain: 13482390,
      desc: `Tokyo pencil building: eight storeys on a 5 m lot in beige mosaic tile, a stack of lit vertical tenant signs (dentist, karaoke, mahjong, snack bar), ramen shop with noren, rear balconies, rooftop tank and sign.`,
      W: 5.2,
      D: 12,
      style: {
        wall: `asMosaicBeige`,
        t: 0.25,
        bay: 2.6,
        floors: [4, ...Bc(7, 3.2)],
        parapet: 0.9,
        parapetMat: `asConcreteLight`,
        win: {
          w: 1.9,
          h: 1.7,
          sill: 0.8,
          type: `grid`,
          lites: [2, 1],
          frame: `aluminum`,
          rec: 0.1,
          curtains: 0.6,
        },
        store: { frame: `aluminum`, fascia: `asBlackLacquer` },
        door: {
          w: 1.1,
          h: 2.3,
          transom: 0.4,
          frame: `aluminum`,
          glazed: !0,
          mat: `asStainless`,
          rec: 0.2,
        },
        base: { mat: `asGranite`, h: 0.4, out: 0.02 },
        belt: { mat: `asConcreteLight`, h: 0.18, out: 0.04 },
      },
      front: {
        kinds: (e, t) =>
          e === 0 ? (t === 0 ? `store` : `door`) : t === 0 ? `window` : `solid`,
        extra: t,
      },
      back: {
        kinds: (e, t) =>
          e === 0 ? (t === 1 ? `door` : `solid`) : t === 0 ? `door` : `window`,
        extra: n,
      },
      right: {
        kinds: (e, t) => (t % 2 && e > 0 ? `window` : `solid`),
        extra: r,
      },
      left: { kinds: () => `solid` },
      extra: (e, t, n) => {
        (jl(e, t, -1.2, -3.5, n.H, 0.75, 1.4, `asWhite`, 1),
          De(e, t, n, `asSignHikariRoof`, 4.6, 1.2, 5.4, 1));
      },
    };
  }));
