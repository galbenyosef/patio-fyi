// assets__lab-buildings-view-DY6ytqNM 103 — box
// Lines 32491-33463 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
(Pl.push(function () {
  let e = 27 * zc,
    t = {
      ridge: `x`,
      pitch: e,
      over: 0.6,
      mat: `asTileGrey`,
      fascia: `asBrickGrey`,
      ridgeMat: `asCharcoal`,
    },
    n = {
      win: {
        w: 1.3,
        h: 0.75,
        sill: 2.1,
        type: `grid`,
        lites: [1, 1],
        frame: `asRedLacquer`,
        rec: 0.12,
        open: !0,
      },
    },
    r = (e, t) => (t === 4 ? `door` : `window`);
  (R(`asSignFu`, `福`, 0.4, 0.4, {
    bg: 13115420,
    fg: 1841688,
    font: dl,
    size: 0.8,
  }),
    R(
      `asSignCoupletL`,
      `門
迎
春
夏`,
      0.3,
      1.6,
      { bg: 13115420, fg: 1841688, font: dl, size: 0.6 },
    ),
    R(
      `asSignCoupletR`,
      `家
納
吉
祥`,
      0.3,
      1.6,
      { bg: 13115420, fg: 1841688, font: dl, size: 0.6 },
    ));
  let i = (e, t, n) => {
    let r = n.grid[0][4],
      i = 4.5 * n.bw;
    for (let n of [-1, 1])
      (e.add(
        `asRedLacquer`,
        new C(0.15, 0.15, 3, 10).translate(i + n * 1.25, 1.5, 0.12),
        t,
        r,
      ),
        e.box(
          `asGranite`,
          t,
          r,
          i + n * 1.25 - 0.28,
          i + n * 1.25 + 0.28,
          0,
          0.55,
          0.1,
          0.75,
        ),
        e.add(
          `asGranite`,
          new C(0.4, 0.4, 0.3, 14)
            .rotateX(Math.PI / 2)
            .translate(i + n * 1.25, 0.95, 0.42),
          t,
          r,
        ),
        e.box(
          n < 0 ? `asSignCoupletL` : `asSignCoupletR`,
          t,
          r,
          i + n * 1.25 - 0.15,
          i + n * 1.25 + 0.15,
          1.2,
          2.8,
          0.28,
          0.29,
          {
            planar: (e, t) => [
              (e - i - n * 1.25 + 0.15) / 0.3,
              (t - 1.2) / 1.6,
            ],
          },
        ),
        wl(e, t, r, i + n * 0.8, 3.25, 0.45, { r: 0.24 }),
        e.add(
          `brass`,
          new o(0.08, 0.015, 6, 12).translate(i + n * 0.2, 1.3, -0.52),
          t,
          r,
        ),
        e.box(
          `asSignFu`,
          t,
          r,
          i + n * 0.5 - 0.2,
          i + n * 0.5 + 0.2,
          1.7,
          2.1,
          -0.55,
          -0.54,
          {
            planar: (e, t) => [(e - i - n * 0.5 + 0.2) / 0.4, (t - 1.7) / 0.4],
          },
        ));
    e.box(`asBeam`, t, r, i - 1.5, i + 1.5, 2.95, 3.4, 0, 0.3, {
      planar: (e, t) => [(e - i + 1.5) / 3, (t - 2.95) / 0.45],
    });
    for (let n = 0; n < 3; n++)
      e.box(
        `asGranite`,
        t,
        r,
        i - 1.3 + n * 0.1,
        i + 1.3 - n * 0.1,
        0,
        0.16 * (3 - n),
        0.1,
        0.4 + (2 - n) * 0.3,
      );
    for (let r = 0; r < 4; r++) {
      let i = (r + 0.5) * n.bw;
      (e.box(
        `asBrickGrey`,
        t,
        n.grid[0][r],
        i - 0.8,
        i + 0.8,
        1.2,
        1.9,
        0,
        0.06,
      ),
        e.box(
          `asGranite`,
          t,
          n.grid[0][r],
          i - 0.55,
          i + 0.55,
          1.35,
          1.75,
          0.06,
          0.09,
        ));
    }
  };
  return {
    key: `asSiheyuan`,
    name: `Hutong Courtyard Gate`,
    plain: 7106676,
    desc: `Beijing siheyuan street range: grey brick with high lattice windows, a raised corner gatehouse roof, red lacquer doors between stone drums, painted beam, red lanterns, New Year couplets and curled ridge ends.`,
    W: 18,
    D: 7,
    style: {
      wall: `asBrickGrey`,
      t: 0.45,
      bay: 3.6,
      floors: [3.6],
      ...n,
      door: {
        w: 1.9,
        h: 2.6,
        transom: 0,
        frame: `asRedLacquer`,
        mat: `asRedLacquer`,
        rec: 0.6,
        step: `asGranite`,
      },
      base: { mat: `asGranite`, h: 0.9, out: 0.03 },
      cornice: { type: `corbel`, mat: `asBrickGrey`, h: 0.3 },
      roof: t,
    },
    front: {
      kinds: r,
      extra: A(zl(r, n, [0], `asFretRed`, -0.1, -0.08, 0.5), i),
    },
    back: {
      kinds: () => `window`,
      extra: zl(() => `window`, n, [0], `asFretRed`, -0.1, -0.08, 0.5),
    },
    right: { kinds: () => `solid` },
    left: { kinds: () => `solid` },
    extra: (t, n, r) => {
      let i = Math.tan(e),
        o = r.W / 2 - 3.7,
        s = r.W / 2 + 0.1,
        c = r.H + 0.75,
        u = r.D / 2 + 0.75,
        d = c + (r.D / 2) * i,
        f = u / Math.cos(e);
      for (let r of [1, -1]) {
        let c = new l((o + s) / 2, d, 0)
          .addScaledVector(new l(0, -Math.sin(e), r * Math.cos(e)), f / 2)
          .addScaledVector(new l(0, Math.cos(e), r * Math.sin(e)), 0.07);
        (t.add(
          `asTileGrey`,
          new a(s - o + 0.5, 0.12, f).rotateX(r * e).translate(c.x, c.y, c.z),
          n,
          0,
        ),
          t.box(
            `asBrickGrey`,
            n,
            0,
            o - 0.25,
            s + 0.25,
            d - u * i - 0.2,
            d - u * i + 0.05,
            r * u - 0.06,
            r * u + 0.06,
          ));
      }
      let p = new T([
        Vc(-r.D / 2, r.H),
        Vc(r.D / 2, r.H),
        Vc(r.D / 2, c),
        Vc(0, d),
        Vc(-r.D / 2, c),
      ]);
      for (let e of [o + 0.05, s - 0.5])
        t.add(
          `asBrickGrey`,
          new w(p, { depth: 0.4, bevelEnabled: !1 })
            .rotateY(Math.PI / 2)
            .translate(e, 0, 0),
          n,
          0,
        );
      t.box(`asCharcoal`, n, 0, o - 0.25, s + 0.25, d, d + 0.32, -0.16, 0.16);
      let m = r.roofTop;
      for (let [e, i, a] of [
        [o - 0.25, d, -1],
        [s + 0.25, d, 1],
        [-r.W / 2 - 0.6, m, -1],
      ])
        k(
          t,
          `asCharcoal`,
          n,
          0,
          [e - a * 0.2, i + 0.2, 0],
          [e + a * 0.35, i + 0.85, 0],
          0.26,
        );
    },
  };
}),
  Pl.push(function () {
    let e = {
        win0: {
          w: 1.7,
          h: 2.2,
          sill: 0.6,
          type: `grid`,
          lites: [1, 1],
          frame: `asRedLacquer`,
          rec: 0.08,
          open: !0,
        },
        win: {
          w: 1.7,
          h: 1.9,
          sill: 0.6,
          type: `grid`,
          lites: [1, 1],
          frame: `asRedLacquer`,
          rec: 0.08,
          open: !0,
        },
      },
      t = (e, t) => (e === 0 && t === 2 ? `door` : `window`),
      n = (e, t) => (e === 0 && t === 2 ? `solid` : `window`);
    (R(`asSignJade`, `翠 亭  JADE PAVILION`, 3.6, 0.55, {
      bg: 1841688,
      fg: 14727240,
      border: 14727240,
      font: dl,
      size: 0.58,
      spacing: 0.1,
    }),
      R(`asSignCha`, `茶`, 0.6, 0.6, {
        bg: 15918788,
        fg: 3045980,
        font: dl,
        size: 0.8,
      }));
    let r = (t) =>
        A(
          zl(t, e, [0, 1], `curtain`, -0.16, -0.15, 1),
          zl(t, e, [0, 1], `asFretBrown`, -0.07, -0.05, 0.5),
        ),
      i = (e) => (t, n, r) => {
        let i = e ? r.t + 1.7 : 1.7,
          a = [];
        for (
          let e = -i;
          e <= r.L + i + 0.001;
          e += (r.L + 2 * i) / Math.round((r.L + 2 * i) / 2.5)
        )
          a.push(e);
        for (let i of e ? a.slice(1, -1) : a)
          xl(
            t,
            n,
            r.grid[0][Hc(r, i)],
            `asRedLacquer`,
            i,
            1.7,
            0.3,
            2.75,
            0.13,
            `asGranite`,
          );
        for (let i = 0; i < a.length - 1; i++) {
          let o = a[i] + 0.15,
            s = a[i + 1] - 0.15,
            c = (o + s) / 2;
          if (!e && Math.abs(c - r.L / 2) < 1) continue;
          let l = r.grid[0][Hc(r, c)];
          (t.box(`asRedLacquer`, n, l, o, s, 0.75, 0.82, 1.5, 1.8),
            Cl(t, n, l, `asRedLacquer`, o, s, 0.3, 1.78, 0.5, 0.25, 0.025));
        }
        if (!e) {
          let e = r.grid[0][2],
            i = r.L / 2;
          t.box(`asSignJade`, n, e, i - 1.8, i + 1.8, 2.75, 3.3, 0.02, 0.07, {
            planar: (e, t) => [(e - i + 1.8) / 3.6, (t - 2.75) / 0.55],
          });
          for (let e of [0.8, 3.6, 7.4, 10.2])
            wl(t, n, r.grid[1][Hc(r, e)], e, r.H - 0.55, 1.1, { r: 0.22 });
          t.box(`asSignCha`, n, r.grid[0][0], 0.2, 0.8, 2, 2.6, 1.84, 1.86, {
            planar: (e, t) => [(e - 0.2) / 0.6, (t - 2) / 0.6],
          });
        }
      },
      a = (e, t, n) => {
        let r = n.grid[0][2],
          i = n.L / 2;
        (e.add(`asBlackLacquer`, new c(0.95, 24).translate(i, 1.9, 0.01), t, r),
          e.add(`asFretBrown`, new c(0.95, 24).translate(i, 1.9, 0.025), t, r, {
            planar: (e, t) => [(e - i) / 0.5, (t - 1.9) / 0.5],
          }),
          e.add(
            `asRedLacquer`,
            new o(1, 0.09, 8, 28).translate(i, 1.9, 0.03),
            t,
            r,
          ));
      };
    return {
      key: `asTeahouse`,
      name: `Jade Pavilion Teahouse`,
      plain: 9314074,
      desc: `Chinese garden teahouse: red lacquer walls with carved lattice windows, a columned gallery with bench rails under green glazed eaves, railed upper balcony, pyramid roof with flying corners and a gold finial.`,
      W: 11,
      D: 11,
      style: {
        wall: `asRedLacquer`,
        t: 0.2,
        bay: 2.2,
        floors: [3.6, 3.2],
        ...e,
        door: {
          w: 1.6,
          h: 2.5,
          transom: 0,
          frame: `asRedLacquer`,
          mat: `asWoodBrown`,
          glazed: !0,
          rec: 0.12,
        },
        base: { mat: `asGranite`, h: 0.3, out: 0.03 },
        roof: Nl,
      },
      front: {
        kinds: t,
        extra: A(
          r(t),
          i(!1),
          Il({
            y: 3.6,
            a0: -0.2,
            a1: 11.2,
            d: 1.1,
            deck: `asRedLacquer`,
            rail: `asRedLacquer`,
            h: 0.85,
            step: 0.3,
            brackets: !1,
            sides: !1,
          }),
        ),
      },
      back: {
        kinds: n,
        extra: A(
          r(n),
          i(!1),
          Il({
            y: 3.6,
            a0: -0.2,
            a1: 11.2,
            d: 1.1,
            deck: `asRedLacquer`,
            rail: `asRedLacquer`,
            h: 0.85,
            step: 0.3,
            brackets: !1,
            sides: !1,
          }),
        ),
      },
      right: {
        kinds: n,
        extra: A(
          r(n),
          i(!0),
          a,
          Il({
            y: 3.61,
            a0: -1.3,
            a1: 11.9,
            d: 1.1,
            deck: `asRedLacquer`,
            rail: `asRedLacquer`,
            h: 0.85,
            step: 0.3,
            brackets: !1,
            sides: !1,
          }),
        ),
      },
      left: {
        kinds: n,
        extra: A(
          r(n),
          i(!0),
          Il({
            y: 3.61,
            a0: -1.3,
            a1: 11.9,
            d: 1.1,
            deck: `asRedLacquer`,
            rail: `asRedLacquer`,
            h: 0.85,
            step: 0.3,
            brackets: !1,
            sides: !1,
          }),
        ),
      },
      extra: (e, t, n) => {
        (e.box(
          `asGranite`,
          t,
          0,
          -n.W / 2 - 2.1,
          n.W / 2 + 2.1,
          0,
          0.3,
          -n.D / 2 - 2.1,
          n.D / 2 + 2.1,
        ),
          vl(e, t, {
            y: 3.5,
            a: n.W / 2,
            b: n.D / 2,
            over: 2,
            p: 24 * zc,
            mat: `asTileGreen`,
            trim: `asRedLacquer`,
            horn: 0.55,
          }),
          _l(e, t, {
            y: n.H,
            a: n.W / 2,
            b: n.D / 2,
            over: 1.5,
            p1: 22 * zc,
            p2: 34 * zc,
            k: 2,
            mat: `asTileGreen`,
            trim: `asRedLacquer`,
            horn: 0.85,
            finial: `asGold`,
          }));
      },
    };
  }),
  Pl.push(function () {
    let e = {
        win: {
          w: 2.2,
          h: 2.1,
          sill: 0.3,
          type: `grid`,
          lites: [1, 1],
          frame: `asTimber`,
          rec: 0.08,
          open: !0,
        },
      },
      t = (e, t) => (e === 0 ? `solid` : t === 2 ? `door` : `window`),
      n = (e) => (e === 0 ? `solid` : `window`),
      r = (e, t, n) => {
        let r = n.L / 2,
          a = n.grid[0][2];
        for (let n = 0; n < 3; n++)
          e.box(
            `asGranite`,
            t,
            a,
            r - 1.2,
            r + 1.2,
            0,
            0.27 * (n + 1),
            0.8 + (2 - n) * 0.34,
            0.8 + (3 - n) * 0.34,
          );
        for (let n of [r - 1.1, r + 1.1])
          e.box(`asGranite`, t, a, n - 0.25, n + 0.25, 0.8, 1.05, 0.2, 0.7);
        let o = n.grid[0][0];
        (e.box(`asFieldstone`, t, o, 0.1, 2.9, 0, 0.4, 1.2, 2.6),
          [
            [0.5, 1.6, 0.34],
            [1.2, 1.55, 0.3],
            [1.9, 1.6, 0.36],
            [2.55, 1.6, 0.26],
            [0.8, 2.25, 0.26],
            [1.55, 2.2, 0.3],
            [2.3, 2.25, 0.24],
          ].forEach(([n, r, a]) => {
            (e.add(
              `asOnggi`,
              new i(a, 10, 8).scale(1, 1.15, 1).translate(n, 0.4 + a * 1.05, r),
              t,
              o,
            ),
              e.add(
                `asOnggi`,
                new C(a * 0.62, a * 0.55, 0.09, 10).translate(
                  n,
                  0.4 + a * 2.2,
                  r,
                ),
                t,
                o,
              ));
          }));
      };
    return {
      key: `asHanok`,
      name: `Bukchon Hanok`,
      plain: 14472904,
      desc: `Korean hanok: white walls in a dark timber frame on a raised fieldstone platform, paper lattice doors, an open daecheong hall with stone steps, narrow toenmaru porch, strongly upswept giwa hip-and-gable roof, onggi jar terrace.`,
      W: 15,
      D: 8,
      style: {
        wall: `asPlasterWhite`,
        floorMat: [`asFieldstone`],
        t: 0.25,
        bay: 3,
        floors: [0.8, 3.1],
        ...e,
        door: {
          w: 2.6,
          h: 2.5,
          transom: 0,
          frame: `asTimber`,
          open: !0,
          rec: 0.1,
        },
        belt: { mat: `asTimber`, h: 0.26, out: 0.06 },
        pilaster: { mat: `asTimber`, w: 0.24, out: 0.05, floors: [1] },
        eaveTrim: `asTimber`,
        roof: Nl,
      },
      front: {
        kinds: t,
        extra: A(
          Ll(t, e, [1]),
          Il({
            y: 0.8,
            a0: -0.1,
            a1: 15.1,
            d: 0.85,
            deck: `asWoodPale`,
            h: 0,
            brackets: !1,
          }),
          r,
        ),
      },
      back: { kinds: n, extra: Ll(n, e, [1]) },
      right: { kinds: n, extra: Ll(n, e, [1]) },
      left: {
        kinds: (e, t) => (e === 0 || t === 1 ? `solid` : `window`),
        extra: Ll((e, t) => (e === 0 || t === 1 ? `solid` : `window`), e, [1]),
      },
      extra: (e, t, n) => {
        (_l(e, t, {
          y: n.H,
          a: n.W / 2,
          b: n.D / 2,
          over: 1.35,
          p1: 17 * zc,
          p2: 33 * zc,
          k: 1.9,
          mat: `asGiwa`,
          trim: `asTimber`,
          ridge: `asCharcoal`,
          gable: `asTimber`,
          gIn: 0.5,
          horn: 1,
          curl: 0.55,
          hip: 0.24,
        }),
          e.box(
            `asBrickBrown`,
            t,
            0,
            -n.W / 2 - 1.1,
            -n.W / 2 - 0.6,
            0,
            2.4,
            -1.5,
            -1,
          ),
          e.box(
            `asTileGrey`,
            t,
            0,
            -n.W / 2 - 1.2,
            -n.W / 2 - 0.5,
            2.4,
            2.5,
            -1.6,
            -0.9,
          ));
      },
    };
  }),
  Pl.push(function () {
    ([
      [`치킨 · 호프`, 13115420, 16769146, 0.8],
      [`약국`, 2787914, 16777215, 0.5],
      [`수학학원`, 2050714, 16777215, 0.5],
      [`필라테스`, 6961818, 16777215, 0.5],
      [`노래방`, 1707802, 16734904, 1.2],
      [`PC방`, 793130, 6351103, 1.2],
      [`한의원`, 6965806, 16182480, 0.3],
      [`부동산`, 16052972, 2050714, 0.3],
    ].forEach(([e, t, n, r], i) =>
      R(`asSignOt${i}`, e, 7.6, 0.8, {
        bg: t,
        fg: n,
        glow: r,
        border: n,
        font: dl,
        size: 0.62,
        spacing: 0.15,
      }),
    ),
      R(`asSignCafeMoment`, `CAFE MOMENT`, 3.2, 0.5, {
        bg: 2761760,
        fg: 15918788,
        size: 0.6,
        spacing: 0.2,
      }),
      R(`asSignDaehan`, `DAEHAN CITYVIEW`, 12, 1.6, {
        bg: 791584,
        fg: 16777215,
        glow: 0.9,
        size: 0.62,
        spacing: 0.12,
        ...pl,
      }));
    let e = [];
    for (let t = 1; t <= 4; t++)
      for (let n of [0, 1])
        e.push({
          mat: `asSignOt${(t - 1) * 2 + n}`,
          rect: [
            0.2 + n * 7.8,
            7.8 + n * 7.8,
            4.6 + (t - 1) * 3.1 + 0.02,
            4.6 + (t - 1) * 3.1 + 0.82,
          ],
          z0: 0.04,
          z1: 0.1,
        });
    return {
      key: `asOfficetel`,
      name: `Daehan Cityview Officetel`,
      plain: 13289406,
      desc: `Seoul officetel: twelve storeys of grey ribbon glazing, the four lower floors wrapped in glowing Hangul tenant sign bands (chicken, academy, karaoke, PC bang), cafe at street level, rooftop crown sign.`,
      W: 16,
      D: 15,
      style: {
        wall: `asConcreteLight`,
        t: 0.3,
        bay: 4,
        floors: [4.6, ...Bc(11, 3.1)],
        parapet: 1.1,
        parapetMat: `asConcreteLight`,
        ribbon: {
          glass: `glassGrey`,
          spandrel: `asWhite`,
          mullion: `aluminum`,
          module: 2,
          sill: 0.95,
          head: 0.45,
          fin: 0.04,
        },
        win: {
          w: 1.6,
          h: 1.6,
          sill: 0.9,
          type: `grid`,
          lites: [2, 1],
          frame: `aluminum`,
          rec: 0.1,
          curtains: 0.5,
        },
        store: { frame: `aluminum`, fascia: `asCharcoal` },
        door: {
          w: 2,
          h: 2.5,
          transom: 0.6,
          frame: `aluminum`,
          glazed: !0,
          mat: `aluminum`,
          rec: 0.4,
        },
        base: { mat: `asGranite`, h: 0.5, out: 0.02 },
      },
      front: {
        kinds: (e, t) => (e === 0 ? (t === 1 ? `door` : `store`) : `ribbon`),
        signs: [
          ...e,
          {
            mat: `asSignCafeMoment`,
            rect: [12.4, 15.6, 3.8, 4.3],
            z0: 0.07,
            z1: 0.1,
          },
        ],
        extra: (e, t, n) => {
          for (let r = 5; r <= n.top; r += 2)
            El(e, t, n.grid[r][0], 0.9, n.ys[r] + 0.25);
        },
      },
      back: {
        kinds: (e, t) => (e === 0 ? (t === 2 ? `door` : `solid`) : `ribbon`),
      },
      right: { kinds: (e) => (e === 0 ? `store` : `ribbon`) },
      left: {
        kinds: (e, t) => (e === 0 ? `solid` : t % 2 ? `window` : `solid`),
      },
      extra: (e, t, n) => {
        (e.box(`asConcreteLight`, t, 0, -3, 3, n.H, n.H + 3, -4.5, 0.5),
          jl(e, t, 4.5, -3.5, n.H, 0.9, 1.6, `asWhite`, 0.6),
          De(e, t, n, `asSignDaehan`, 12, 1.6, 6.9, 1.3));
      },
    };
  }),
  Pl.push(function () {
    (R(`asSignPhoLan`, `PHỞ LAN`, 3.4, 0.7, {
      bg: 13115420,
      fg: 16769146,
      size: 0.66,
      spacing: 0.12,
      ...pl,
    }),
      R(`asSignBunCom`, `BÚN · CƠM · PHỞ BÒ`, 3.4, 0.35, {
        bg: 16769146,
        fg: 13115420,
        size: 0.62,
        spacing: 0.05,
        ...pl,
      }));
    let e = [
        `asStuccoYellow`,
        `asStuccoYellow`,
        `asStuccoYellow`,
        `asStuccoYellow`,
        `asStuccoYellow`,
      ],
      t = {
        win: {
          w: 2.2,
          h: 2.2,
          sill: 0.4,
          type: `grid`,
          lites: [2, 2],
          frame: `asLouvreGreen`,
          shutter: `asLouvreGreen`,
          rec: 0.1,
          curtains: 0.5,
        },
        balcony: {
          w: 2.6,
          h: 2.4,
          depth: 1,
          slab: `asConcreteLight`,
          railMat: L,
        },
      },
      n = (t, n, r) => {
        let i = r.L;
        for (let a = 0; a <= r.top; a++) {
          let o = r.ys[a],
            s = o + Uc(r, a) + +(a === r.top),
            c = r.grid[a][0],
            l = i / 2;
          if (
            (a === 0
              ? Bl(t, n, c, e[a], 0, i, o, s, l - 1.8, l + 1.8, 0, 3)
              : a === r.top
                ? Bl(
                    t,
                    n,
                    c,
                    e[a],
                    0,
                    i,
                    o,
                    s,
                    l - 1.1,
                    l + 1.1,
                    o + 0.4,
                    o + 2.6,
                  )
                : Bl(
                    t,
                    n,
                    c,
                    e[a],
                    0,
                    i,
                    o,
                    s,
                    l - 1.3,
                    l + 1.3,
                    o + 0.03,
                    o + 2.43,
                  ),
            a > 0 && a < r.top)
          )
            for (let e of [0.55, 1.2, i - 1.2, i - 0.55])
              Al(t, n, c, e, o + 1.07, 0.92, 0.8);
        }
        let a = r.grid[0][0],
          s = i / 2;
        (t.box(`rollup`, n, a, s - 1.8, s + 1.8, 2.55, 3, -0.12, -0.05),
          t.box(L, n, a, s - 1.85, s + 1.85, 3, 3.3, -0.1, 0.12),
          t.box(
            `asSignPhoLan`,
            n,
            a,
            s - 1.7,
            s + 1.7,
            3.35,
            4.05,
            0.03,
            0.07,
            { planar: (e, t) => [(e - s + 1.7) / 3.4, (t - 3.35) / 0.7] },
          ),
          t.box(`asSignBunCom`, n, a, s - 1.7, s + 1.7, 2.55, 2.9, 0, 0.03, {
            planar: (e, t) => [(e - s + 1.7) / 3.4, (t - 2.55) / 0.35],
          }),
          t.box(`asTinRed`, n, a, -0.1, i + 0.1, 3.05, 3.1, 0, 1.6),
          t.box(`asStainless`, n, a, 0.25, 1.05, 0, 0.95, 0.3, 0.8),
          t.add(
            `asStainless`,
            new C(0.25, 0.25, 0.4, 12).translate(0.65, 1.15, 0.55),
            n,
            a,
          ),
          t.box(`asPlasticBlue`, n, a, 1.6, 2.3, 0, 0.45, 1.3, 1.9),
          [
            [1.4, 2.2, `asPlasticRed`],
            [2.5, 2.2, `asPlasticRed`],
            [1.95, 2.6, `asPlasticBlue`],
            [3.2, 1.6, `asPlasticRed`],
            [3.3, 2.4, `asPlasticBlue`],
          ].forEach(([e, r, i]) => kl(t, n, a, i, e, r, 0.32)));
        for (let e = 0; e < 3; e++)
          t.add(
            L,
            new C(0.02, 0.02, i + 0.6, 5)
              .rotateZ(Math.PI / 2)
              .translate(i / 2, 4.15 + e * 0.08, 0.25 + e * 0.06),
            n,
            a,
          );
        let l = r.grid[r.top][0],
          u = r.H + 1,
          d = bl(t, n, l, {
            u0: -0.05,
            u1: i + 0.05,
            y: u,
            d: 0.12,
            z0: -3.2,
            p: 32 * zc,
            mat: `asTileTerra`,
            trim: `asWhite`,
            gable: `asStuccoYellow`,
            over: 0.3,
          });
        (t.add(
          `asStuccoYellow`,
          new w(new T([Vc(-0.05, u), Vc(i + 0.05, u), Vc(i / 2, d - 0.05)]), {
            depth: 0.06,
            bevelEnabled: !1,
          }).translate(0, 0, -3.25),
          n,
          l,
        ),
          t.add(
            `asWhite`,
            new o(0.3, 0.05, 6, 16).translate(i / 2, (u + d) / 2 - 0.1, 0.08),
            n,
            l,
          ),
          t.add(
            `asLouvreGreen`,
            new c(0.28, 16).translate(i / 2, (u + d) / 2 - 0.1, 0.07),
            n,
            l,
          ));
      };
    return {
      key: `asTubeHouse`,
      name: `Pho Lan Tube House`,
      plain: 15123294,
      desc: `Hanoi tube house: a 4.4 m wide, 18 m deep sliver of five storeys, yellow painted front on raw concrete sides, stacked balconies with pot plants, louvred shutters, tiled mini-gable on top, open pho shop with plastic stools.`,
      W: 4.4,
      D: 18,
      style: {
        wall: `asConcreteStain`,
        t: 0.2,
        bay: 4.4,
        floors: [4.2, 3.3, 3.3, 3.3, 3.1],
        parapet: 1,
        ...t,
        door: { w: 3.6, h: 3, transom: 0, frame: L, open: !0, rec: 0.1 },
      },
      front: {
        kinds: (e) => (e === 0 ? `door` : e === 4 ? `window` : `balcony`),
        extra: n,
      },
      back: { kinds: (e) => (e === 0 ? `solid` : `window`) },
      right: {
        kinds: () => `solid`,
        extra: (e, t, n) =>
          El(e, t, n.grid[2][n.nb - 1], n.L - 1, n.ys[2] + 1.2),
      },
      left: { kinds: () => `solid` },
      extra: (e, t, n) => jl(e, t, 0.6, -6, n.H, 0.5, 1, `asStainless`, 0.9),
    };
  }));
