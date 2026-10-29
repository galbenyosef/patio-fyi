// assets__lab-buildings-view-DY6ytqNM 101 — box
// Lines 31453-32467 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
(Pl.push(function () {
  return (
    Rl(`asBandPoppoFront`, `POPPO MART`, 12, 1.8),
    Rl(`asBandPoppoCorner`, `24h`, 4.24, 1.8, !1),
    Rl(`asBandPoppoSide`, `POPPO MART`, 9.7, 1.8),
    R(
      `asSignPoppoPole`,
      `POPPO
MART`,
      1.5,
      1.5,
      {
        bg: 16250351,
        fg: 14168186,
        border: 15909402,
        glow: 0.6,
        size: 0.62,
        ...pl,
      },
    ),
    R(`asSignPoppoSale`, `おにぎり 100円`, 2, 0.5, {
      bg: 14168186,
      fg: 16777215,
      font: dl,
      size: 0.6,
    }),
    R(`asSignPoppoATM`, `ATM 24h`, 1.2, 0.4, {
      bg: 2050714,
      fg: 16777215,
      size: 0.6,
      ...pl,
    }),
    {
      key: `asKonbini`,
      name: `Poppo Mart Konbini`,
      plain: 15658730,
      desc: `Corner convenience store: white panel box with a glowing striped POPPO MART fascia on three faces, chamfered corner entrance, full-height glazing with posters, recycling bins, bike hoops and a lit pole sign.`,
      W: 15,
      D: 13,
      chamfer: { r: 3 },
      style: {
        wall: `asPanelWhite`,
        t: 0.3,
        bay: 3,
        floors: [4.3],
        parapet: 1.3,
        store: { frame: `aluminum`, fascia: `asPanelWhite` },
        door: {
          w: 1.8,
          h: 2.3,
          transom: 0.5,
          frame: `aluminum`,
          glazed: !0,
          mat: `aluminum`,
          rec: 0.3,
          step: `asConcreteLight`,
        },
        base: { mat: `asGranite`, h: 0.3, out: 0.02 },
        loading: { type: `rollup`, dock: !1, w: 2.6, h: 2.8 },
      },
      front: {
        kinds: () => `store`,
        signs: [
          {
            mat: `asBandPoppoFront`,
            rect: [0, 12, 3.75, 5.55],
            z0: 0.02,
            z1: 0.06,
          },
        ],
        extra: (e, t, n) => {
          let r = n.grid[0][0];
          ([2776776, 3842122, 15253536, 13642276].forEach((n, i) => {
            let a = [
                `asPlasticBlue`,
                `asPlasticGreen`,
                `asPlasticYellow`,
                `asPlasticRed`,
              ][i],
              o = 0.4 + i * 0.62;
            (e.box(`asWhite`, t, r, o, o + 0.55, 0, 1.05, 0.25, 0.8),
              e.box(a, t, r, o + 0.05, o + 0.5, 0.75, 0.95, 0.8, 0.82),
              e.add(
                L,
                new C(0.1, 0.1, 0.02, 10)
                  .rotateX(Math.PI / 2)
                  .translate(o + 0.275, 0.85, 0.83),
                t,
                r,
              ));
          }),
            e.box(
              `asSignPoppoSale`,
              t,
              n.grid[0][2],
              6.6,
              8.6,
              2.2,
              2.7,
              -0.3,
              -0.29,
              { planar: (e, t) => [(e - 6.6) / 2, (t - 2.2) / 0.5] },
            ),
            e.box(
              `asSignPoppoATM`,
              t,
              n.grid[0][3],
              9.7,
              10.9,
              2.5,
              2.9,
              -0.3,
              -0.29,
              { planar: (e, t) => [(e - 9.7) / 1.2, (t - 2.5) / 0.4] },
            ));
          for (let r = 0; r < 4; r++) {
            let i = 3.8 + r * 0.7,
              a = n.grid[0][Hc(n, i)];
            e.add(
              L,
              new o(0.35, 0.025, 6, 14, Math.PI).translate(i, 0.05, 1.6),
              t,
              a,
            );
          }
        },
      },
      corner: {
        kinds: () => `door`,
        signs: [
          {
            mat: `asBandPoppoCorner`,
            rect: [0, 4.24, 3.75, 5.55],
            z0: 0.02,
            z1: 0.06,
          },
        ],
        extra: (e, t, n) => {
          let r = n.grid[0][0],
            i = n.L / 2,
            a = 2.6;
          (e.box(`asConcreteLight`, t, r, i - 0.4, i + 0.4, 0, 0.5, 2.2, 3),
            e.add(
              `asWhite`,
              new C(0.15, 0.18, 6.2, 10).translate(i, 3.1, a),
              t,
              r,
            ),
            e.box(
              `asWhite`,
              t,
              r,
              i - 0.85,
              i + 0.85,
              5.6,
              7.4,
              2.4,
              2.8000000000000003,
            ));
          for (let n of [1, -1])
            e.box(
              `asSignPoppoPole`,
              t,
              r,
              i - 0.75,
              i + 0.75,
              5.75,
              7.25,
              a + n * 0.2,
              a + n * 0.22,
              {
                planar: (e, t) => [
                  n > 0 ? (e - i + 0.75) / 1.5 : (i + 0.75 - e) / 1.5,
                  (t - 5.75) / 1.5,
                ],
              },
            );
        },
      },
      right: {
        kinds: (e, t) => (t < 2 ? `store` : `solid`),
        signs: [
          {
            mat: `asBandPoppoSide`,
            rect: [0, 9.7, 3.75, 5.55],
            z0: 0.02,
            z1: 0.06,
          },
        ],
      },
      left: { kinds: () => `solid` },
      back: {
        kinds: (e, t) => (t === 1 ? `loading` : t === 3 ? `door` : `solid`),
      },
      extra: (e, t, n) => {
        for (let [r, i] of [
          [-4, -3],
          [-2.6, -3],
          [-1.2, -3],
        ])
          (e.box(
            `asWhite`,
            t,
            0,
            r - 0.5,
            r + 0.5,
            n.H,
            n.H + 0.9,
            i - 0.35,
            i + 0.35,
          ),
            e.add(
              L,
              new C(0.3, 0.3, 0.03, 12).translate(r, n.H + 0.91, i),
              t,
              0,
            ));
        e.box(`aluminum`, t, 0, 2, 4, n.H, n.H + 1.1, -4, -3);
      },
    }
  );
}),
  Pl.push(function () {
    return (
      R(`asSignYuNoren`, `ゆ`, 2.4, 0.9, {
        bg: 2043210,
        fg: 16052714,
        font: dl,
        size: 0.8,
      }),
      R(`asSignMatsuPlaque`, `松の湯`, 1.8, 0.55, {
        bg: 2760472,
        fg: 15784080,
        border: 11569726,
        font: fl,
        size: 0.62,
        spacing: 0.3,
      }),
      R(
        `asSignMatsuChimney`,
        `松
の
湯`,
        0.9,
        3.2,
        { bg: 15920608, fg: 1841688, font: fl, size: 0.6 },
      ),
      {
        key: `asSento`,
        name: `Matsu-no-yu Bathhouse`,
        plain: 15262422,
        desc: `Showa-era sento bathhouse: temple-like irimoya gable facing the street, curved karahafu entrance porch with a 松の湯 plaque, ゆ noren, high bath-hall windows, tall boiler chimney with its own sign.`,
        W: 14,
        D: 18,
        style: {
          wall: `asPlasterWhite`,
          t: 0.3,
          bay: 4.67,
          floors: [5.6],
          win: {
            w: 3,
            h: 1.1,
            sill: 3.8,
            type: `grid`,
            lites: [5, 1],
            frame: `asCharWood`,
            rec: 0.1,
            curtains: 0,
          },
          door: {
            w: 2.6,
            h: 2.3,
            transom: 0,
            frame: `asCharWood`,
            mat: `asCedar`,
            glazed: !0,
            rec: 0.3,
          },
          base: { mat: `asCharWood`, h: 1.3, out: 0.02 },
          corners: `asCharWood`,
          eaveTrim: `asCharWood`,
          roof: Nl,
        },
        front: {
          kinds: (e, t) => (t === 1 ? `door` : `window`),
          extra: (e, t, n) => {
            let r = n.L / 2,
              o = n.grid[0][1],
              s = 2.9,
              c = 7.1525 / 1.9,
              l = 0.7355263157894734,
              u = Math.asin(2.5 / c);
            for (let n of [r - 1.9, r + 1.9])
              xl(e, t, o, `asCharWood`, n, 2.45, 0, 3.4, 0.14);
            e.box(`asCharWood`, t, o, r - 2.05, r + 2.05, 3.25, 3.5, 2.3, 2.6);
            let d = new T();
            (d.absarc(
              r,
              l,
              3.9044736842105268,
              Math.PI / 2 + u,
              Math.PI / 2 - u,
              !0,
            ),
              d.absarc(r, l, c, Math.PI / 2 - u, Math.PI / 2 + u, !1),
              e.add(
                `asKawara`,
                new w(d, { depth: s, bevelEnabled: !1, curveSegments: 16 }),
                t,
                o,
              ));
            let f = new T();
            (f.absarc(
              r,
              l,
              3.9344736842105266,
              Math.PI / 2 + u,
              Math.PI / 2 - u,
              !0,
            ),
              f.absarc(
                r,
                l,
                3.5644736842105265,
                Math.PI / 2 - u,
                Math.PI / 2 + u,
                !1,
              ),
              e.add(
                `asCharWood`,
                new w(f, {
                  depth: 0.12,
                  bevelEnabled: !1,
                  curveSegments: 16,
                }).translate(0, 0, s),
                t,
                o,
              ));
            for (let n of [-1, 1])
              e.add(
                `asKawara`,
                new a(0.7, 0.12, 3.02)
                  .rotateZ(n * 0.28)
                  .translate(r + n * 2.8, 3.67, 1.51),
                t,
                o,
              );
            let p = 3.5,
              m = Math.asin(2.7644736842105266 / 3.5644736842105265),
              h = new T();
            (h.moveTo(r + 3.5644736842105265 * Math.cos(m), p),
              h.lineTo(r - 3.5644736842105265 * Math.cos(m), p),
              h.absarc(r, l, 3.5644736842105265, Math.PI - m, m, !0),
              e.add(
                `asCharWood`,
                new w(h, {
                  depth: 0.06,
                  bevelEnabled: !1,
                  curveSegments: 12,
                }).translate(0, 0, 2.8),
                t,
                o,
              ),
              e.box(
                `asSignMatsuPlaque`,
                t,
                o,
                r - 0.9,
                r + 0.9,
                3.58,
                4.13,
                2.86,
                2.88,
                { planar: (e, t) => [(e - r + 0.9) / 1.8, (t - 3.58) / 0.55] },
              ),
              e.box(`asGold`, t, o, r - 0.12, r + 0.12, 4.2, 4.4, 2.84, s),
              Tl(e, t, o, `asSignYuNoren`, r - 1.2, r + 1.2, 2.3, 0.9, 0.05),
              e.box(`asGranite`, t, o, r - 2.2, r + 2.2, 0, 0.14, 0, 3.2));
            for (let a of [r - 3.3, r + 3.3]) {
              let r = n.grid[0][Hc(n, a)];
              e.add(
                `asOnggi`,
                new C(0.35, 0.28, 0.5, 10).translate(a, 0.25, 0.8),
                t,
                r,
              );
              for (let [n, o] of [
                [0.9, 0.45],
                [1.3, 0.34],
                [1.6, 0.22],
              ])
                e.add(
                  `asPineGreen`,
                  new i(o, 8, 5).scale(1, 0.5, 1).translate(a, n, 0.8),
                  t,
                  r,
                );
            }
          },
        },
        back: { kinds: () => `window` },
        right: { kinds: () => `window` },
        left: { kinds: (e, t) => (t === 0 ? `door` : `window`) },
        extra: (e, t, n) => {
          _l(e, t, {
            y: n.H,
            a: n.W / 2,
            b: n.D / 2,
            over: 1.4,
            p1: 20 * zc,
            p2: 38 * zc,
            k: 2,
            mat: `asKawara`,
            trim: `asCharWood`,
            gable: `asPlasterWhite`,
            gIn: 0.62,
            horn: 0.3,
            curl: 0.55,
          });
          let r = 3.6,
            i = -n.D / 2 - 1.3;
          (e.box(`asConcreteLight`, t, 0, 2.1, 5.1, 0, 2.6, i - 1.2, i + 1.2),
            e.add(
              `asBrickBrown`,
              new C(0.62, 1, 18, 14).translate(r, 9, i),
              t,
              0,
            ));
          for (let n of [6, 11, 16, 17.9])
            e.add(
              L,
              new C(
                1.08 - (n / 18) * 0.38,
                1.08 - (n / 18) * 0.38,
                0.14,
                14,
              ).translate(r, n, i),
              t,
              0,
            );
          e.box(
            `asSignMatsuChimney`,
            t,
            0,
            3.15,
            4.05,
            11.4,
            14.6,
            i + 0.82,
            i + 0.86,
            { planar: (e, t) => [(e - r + 0.45) / 0.9, (t - 11.4) / 3.2] },
          );
        },
      }
    );
  }),
  Pl.push(function () {
    return (
      R(`asSignHockSeng`, `HOCK SENG KOPITIAM   福成茶室`, 11.6, 0.8, {
        bg: 1315860,
        fg: 14727240,
        border: 14727240,
        font: `"Georgia", ${dl}`,
        size: 0.6,
        spacing: 0.08,
      }),
      R(`asSign1938`, `1938`, 1.6, 0.6, {
        bg: 15655100,
        fg: 2916230,
        size: 0.7,
        spacing: 0.2,
        ...pl,
      }),
      R(
        `asSignKopi`,
        `咖
啡`,
        0.4,
        1,
        { bg: 10492950, fg: 15782e3, font: dl, size: 0.62 },
      ),
      R(
        `asSignTeh`,
        `茶
室`,
        0.4,
        1,
        { bg: 10492950, fg: 15782e3, font: dl, size: 0.62 },
      ),
      {
        key: `asKopitiam`,
        name: `Hock Seng Kopitiam`,
        plain: 15655100,
        desc: `1930s Straits corner shophouse and coffee shop: cream Art Deco front with a stepped 1938 pediment and fins, green louvred shutters, gold-on-black signboard over a tiled five-foot way with marble tables.`,
        W: 13,
        D: 15,
        style: {
          wall: `asStuccoCream`,
          t: 0.3,
          bay: 3.25,
          floors: [4.2],
          parapet: 1.2,
          win: {
            w: 1.4,
            h: 1.9,
            sill: 1.15,
            type: `grid`,
            lites: [2, 3],
            frame: `asTeal`,
            shutter: `asLouvreGreen`,
            header: `asWhite`,
            headerH: 0.2,
            rec: 0.12,
            curtains: 0.3,
          },
          store: { frame: `asTeal`, fascia: `asStuccoCream` },
          door: {
            w: 1.2,
            h: 2.4,
            transom: 0.5,
            frame: `asTeal`,
            mat: `asWoodBrown`,
            rec: 0.2,
          },
          base: { mat: `asMosaicMint`, h: 0.9, out: 0.02 },
          pilaster: { mat: `asWhite`, w: 0.32, out: 0.07, through: !0 },
        },
        tiers: [
          {
            D: 12.6,
            dz: -1.2,
            floors: [4.2],
            style: { roof: Nl, parapet: 0, pilaster: null },
            front: { kinds: () => `store` },
            right: { kinds: (e, t, n) => (t === n - 1 ? `door` : `window`) },
          },
          {
            floors: [3.6, 3.4],
            soffit: !0,
            front: {
              kinds: () => `window`,
              signs: [
                {
                  mat: `asSignHockSeng`,
                  rect: [0.7, 12.3, 0.2, 1],
                  z0: 0.08,
                  z1: 0.12,
                },
              ],
              extra: A(
                (e, t, n) => {
                  for (let r = 0; r <= n.nb; r++) {
                    let i = r === 0 ? 0.28 : r === n.nb ? n.L - 0.28 : r * n.bw,
                      a = n.grid[0][Math.min(n.nb - 1, r)];
                    (e.box(
                      `asStuccoCream`,
                      t,
                      a,
                      i - 0.28,
                      i + 0.28,
                      -4.2,
                      -0.6,
                      -0.56,
                      0,
                    ),
                      e.box(
                        `asMosaicMint`,
                        t,
                        a,
                        i - 0.3,
                        i + 0.3,
                        -4.2,
                        -3.1,
                        -0.58,
                        0.02,
                      ),
                      e.box(
                        `asWhite`,
                        t,
                        a,
                        i - 0.36,
                        i + 0.36,
                        -0.85,
                        -0.6,
                        -0.64,
                        0.06,
                      ),
                      (r === 1 || r === 3) &&
                        e.box(
                          r === 1 ? `asSignKopi` : `asSignTeh`,
                          t,
                          a,
                          i - 0.2,
                          i + 0.2,
                          -2.6,
                          -1.6,
                          0,
                          0.02,
                          { planar: (e, t) => [(e - i + 0.2) / 0.4, t + 2.6] },
                        ));
                  }
                  for (let r of [2.2, 5.4, 8.6]) {
                    let i = n.grid[0][Hc(n, r)];
                    (e.add(
                      `asWhite`,
                      new C(0.4, 0.4, 0.04, 14).translate(r, -3.46, -1.3),
                      t,
                      i,
                    ),
                      e.add(
                        L,
                        new C(0.04, 0.12, 0.72, 8).translate(
                          r,
                          -4.2 + 0.36,
                          -1.3,
                        ),
                        t,
                        i,
                      ));
                    for (let n of [-1, 1])
                      e.add(
                        `asWoodBrown`,
                        new C(0.16, 0.16, 0.45, 8).translate(
                          r + n * 0.62,
                          -3.975,
                          -1.3,
                        ),
                        t,
                        i,
                      );
                  }
                  for (let r of [3.3, 9.7])
                    wl(e, t, n.grid[0][Hc(n, r)], r, -0.6, -1.2, { r: 0.24 });
                },
                (e, t, n) => {
                  let r = n.L / 2,
                    i = n.H + 1.2,
                    a = n.grid[n.top][Hc(n, r)];
                  for (let [n, o] of [
                    [3, 0.5],
                    [2, 1.1],
                    [1.1, 1.8],
                  ])
                    e.box(
                      `asStuccoCream`,
                      t,
                      a,
                      r - n,
                      r + n,
                      i - 0.05,
                      i + o,
                      -0.3,
                      0.02,
                    );
                  for (let [n, o] of [
                    [3, 0.5],
                    [2, 1.1],
                    [1.1, 1.8],
                  ])
                    e.box(
                      `asWhite`,
                      t,
                      a,
                      r - n - 0.05,
                      r + n + 0.05,
                      i + o,
                      i + o + 0.1,
                      -0.32,
                      0.06,
                    );
                  for (let n of [-0.7, 0, 0.7])
                    e.box(
                      `asTeal`,
                      t,
                      a,
                      r + n - 0.07,
                      r + n + 0.07,
                      i + 0.1,
                      i + 1.7,
                      0.02,
                      0.1,
                    );
                  (e.box(
                    `asSign1938`,
                    t,
                    a,
                    r - 1.9,
                    r - 1.05,
                    i + 0.52,
                    i + 0.95,
                    0.02,
                    0.04,
                    {
                      planar: (e, t) => [
                        (e - r + 1.9) / 0.85,
                        (t - i - 0.52) / 0.43,
                      ],
                    },
                  ),
                    e.box(
                      `asSign1938`,
                      t,
                      a,
                      r + 1.05,
                      r + 1.9,
                      i + 0.52,
                      i + 0.95,
                      0.02,
                      0.04,
                      {
                        planar: (e, t) => [
                          (e - r - 1.05) / 0.85,
                          (t - i - 0.52) / 0.43,
                        ],
                      },
                    ));
                },
              ),
            },
          },
        ],
        front: { kinds: () => `window` },
        back: { kinds: (e, t) => (e === 0 && t === 1 ? `door` : `window`) },
        right: { kinds: () => `window` },
        left: { kinds: (e) => (e === 0 ? `solid` : `window`) },
      }
    );
  }),
  Pl.push(function () {
    (R(
      `asSignGoldCrane`,
      `金鶴酒家
GOLDEN CRANE`,
      3.3,
      2.2,
      {
        bg: 1707788,
        fg: 16760896,
        glow: 1.2,
        font: dl,
        size: 0.5,
        spacing: 0.06,
      },
    ),
      R(
        `asSignPawn`,
        `大
押`,
        1,
        2.4,
        { bg: 1707788, fg: 16728112, glow: 1.2, font: dl, size: 0.6 },
      ),
      R(
        `asSignMahjong`,
        `麻
雀`,
        1,
        2.2,
        { bg: 793106, fg: 6356880, glow: 1.2, font: dl, size: 0.6 },
      ),
      R(`asSignWingFat`, `永發 WING FAT`, 2.4, 0.5, {
        bg: 9314074,
        fg: 16180912,
        font: dl,
        size: 0.6,
      }),
      R(`asSignLuckyTea`, `好運茶餐廳`, 2.4, 0.5, {
        bg: 15918788,
        fg: 2050698,
        font: dl,
        size: 0.6,
      }),
      R(
        `asSignBalm`,
        `龍油 DRAGON BALM
止痛 · 驅風`,
        7,
        4.4,
        { bg: 15251498, fg: 9051670, font: dl, size: 0.5, fade: 0.6 },
      ));
    let e = (e, t, n) => {
        for (let r = 1; r <= n.top; r++) {
          let i = n.ys[r],
            a = Uc(n, r),
            o = r >= 3;
          for (let [s, c, l] of hl(n, 0, n.L)) {
            let u = n.grid[r][l];
            (e.box(`asConcreteStain`, t, u, s, c, i - 0.18, i + 0.04, 0, 1.1),
              e.box(`asConcreteStain`, t, u, s, c, i + 0.04, i + 0.95, 1, 1.1),
              o
                ? e.box(
                    `asGrille`,
                    t,
                    u,
                    s,
                    c,
                    i + 0.95,
                    i + a - 0.2,
                    1.03,
                    1.05,
                    { planar: (e, t) => [e / 0.8, (t - i) / 0.8] },
                  )
                : Cl(e, t, u, L, s, c, i + 0.95, 1.05, 0.35, 0.15, 0.012));
            for (let [r, l] of [
              [s, s === 0],
              [c - 0.1, c === n.L],
            ])
              l &&
                (e.box(
                  `asConcreteStain`,
                  t,
                  u,
                  r,
                  r + 0.1,
                  i + 0.04,
                  i + 0.95,
                  0,
                  1,
                ),
                o &&
                  e.box(
                    `asGrille`,
                    t,
                    u,
                    r + 0.04,
                    r + 0.06,
                    i + 0.95,
                    i + a - 0.2,
                    0,
                    1.03,
                    { planar: (e, t, n) => [n / 0.8, (t - i) / 0.8] },
                  ));
          }
          if (o)
            El(
              e,
              t,
              n.grid[r][(r * 2) % n.nb],
              (((r * 2) % n.nb) + 0.5) * n.bw,
              i + 1.2,
              1.1,
            );
          else
            for (let a of [1.2, 4.2, 7.4]) {
              let o = n.grid[r][Hc(n, a)];
              (e.add(
                `asWoodPale`,
                new C(0.025, 0.025, 1.7, 6)
                  .rotateX(Math.PI / 2)
                  .translate(a, i + 2.3, 1.6),
                t,
                o,
              ),
                [`asPlasticBlue`, `asWhite`, `asPlasticRed`].forEach((n, r) =>
                  e.box(
                    n,
                    t,
                    o,
                    a - 0.25,
                    a + 0.25,
                    i + 1.6 + r * 0.1,
                    i + 2.28,
                    1.3 + r * 0.4,
                    1.32 + r * 0.4,
                  ),
                ));
            }
        }
        let r = n.ys[n.top] + Uc(n, n.top);
        for (let [i, o, s] of hl(n, 0, n.L))
          e.add(
            `asTinRust`,
            new a(o - i, 0.05, 1.3)
              .rotateX(0.2)
              .translate((i + o) / 2, r - 0.25, 0.62),
            t,
            n.grid[n.top][s],
          );
      },
      t = (e, t, n) => {
        let r = n.grid[0][0],
          i = n.grid[0][2];
        (e.box(`asSignWingFat`, t, r, 0.3, 2.7, 3.33, 3.83, 0.07, 0.09, {
          planar: (e, t) => [(e - 0.3) / 2.4, (t - 3.33) / 0.5],
        }),
          e.box(`asSignLuckyTea`, t, i, 6.3, 8.7, 3.33, 3.83, 0.07, 0.09, {
            planar: (e, t) => [(e - 6.3) / 2.4, (t - 3.33) / 0.5],
          }),
          Ie(
            e,
            t,
            n.grid[1][1],
            `asSignGoldCrane`,
            4.5,
            n.ys[1] + 0.35,
            n.ys[1] + 2.75,
            1.3,
            4.8,
            L,
          ),
          Ie(
            e,
            t,
            n.grid[2][0],
            `asSignPawn`,
            0.6,
            n.ys[2] + 0.25,
            n.ys[2] + 2.85,
            1.3,
            2.5,
            L,
          ),
          Ie(
            e,
            t,
            n.grid[4][2],
            `asSignMahjong`,
            8.4,
            n.ys[4] + 0.3,
            n.ys[4] + 2.7,
            1.3,
            2.5,
            L,
          ));
        for (let [n, a] of [
          [r, 0.3],
          [i, 6.3],
        ])
          e.box(`rollup`, t, n, a, a + 2.4, 2.75, 3.2, -0.05, 0.12);
      };
    return {
      key: `asTongLau`,
      name: `Wing Fat Tong Lau`,
      plain: 10931131,
      desc: `Hong Kong tong lau tenement: mint mosaic tile, stacked concrete verandas turning into grilled cages with AC units, laundry poles, huge glowing projecting signs, faded painted ad on the side, rooftop hut.`,
      W: 9,
      D: 13,
      style: {
        wall: `asMosaicMint`,
        t: 0.25,
        bay: 3,
        floors: [4.2, ...Bc(5, 3)],
        parapet: 1,
        parapetMat: `asConcreteStain`,
        win: {
          w: 2,
          h: 2,
          sill: 0.5,
          type: `grid`,
          lites: [3, 2],
          frame: `aluminum`,
          rec: 0.1,
          curtains: 0.6,
        },
        store: { frame: `aluminum`, fascia: `asRedLacquer` },
        door: {
          w: 1.1,
          h: 2.3,
          transom: 0.4,
          frame: L,
          mat: `asPlasticGreen`,
          rec: 0.3,
        },
        base: { mat: `asGranite`, h: 0.4, out: 0.02 },
      },
      front: {
        kinds: (e, t) => (e === 0 ? (t === 1 ? `door` : `store`) : `window`),
        extra: A(e, t),
      },
      back: {
        kinds: (e, t) => (e === 0 ? (t === 1 ? `door` : `solid`) : `window`),
        extra: (e, t, n) => {
          for (let r = 1; r <= n.top; r++)
            El(e, t, n.grid[r][r % 3], (r % 3) * n.bw + 0.6, n.ys[r] + 0.3);
        },
      },
      right: {
        kinds: () => `solid`,
        signs: [
          { mat: `asSignBalm`, rect: [2.5, 9.5, 8.6, 13], z0: 0.01, z1: 0.02 },
        ],
      },
      left: { kinds: () => `solid` },
      extra: (e, t, n) => {
        let r = n.H;
        (e.box(`asTinBlue`, t, 0, -3.6, -0.6, r, r + 2.3, -5.6, -2.6),
          e.box(`asTinRust`, t, 0, -3.8, -0.4, r + 2.3, r + 2.4, -5.8, -2.4),
          e.box(`woodDoor`, t, 0, -1.6, -0.8, r, r + 2, -2.62, -2.58),
          jl(e, t, 2.2, -4.2, r, 0.65, 1.3, `asStainless`, 0.8),
          jl(e, t, 2.2, -2.4, r, 0.55, 1.1, `asPlasticBlue`, 0.8));
        for (let [n, i] of [
          [3.3, 4.8],
          [0.5, 5.4],
        ]) {
          e.box(L, t, 0, n - 0.03, n + 0.03, r, r + 3.2, i - 0.03, i + 0.03);
          for (let [a, o] of [
            [2.4, 1.2],
            [2.8, 0.9],
            [3.1, 0.6],
          ])
            e.box(
              L,
              t,
              0,
              n - o / 2,
              n + o / 2,
              r + a,
              r + a + 0.03,
              i - 0.015,
              i + 0.015,
            );
        }
      },
    };
  }));
