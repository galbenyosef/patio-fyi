// assets__lab-buildings-view-DY6ytqNM 42 — box
// Lines 13292-13627 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function pi() {
  return {
    key: `moLoft`,
    name: `Foundry Works`,
    plain: 9715756,
    desc: `Co-working loft conversion: a red-brick machine shop with big segmental-arched steel windows, cafe shopfronts under a new steel canopy, faded ghost sign and a black zigzag fire stair, topped by a Corten-and-glass rooftop pavilion, terrace with string lights and the old chimney.`,
    W: 28,
    D: 20,
    style: {
      wall: `brickRed`,
      t: 0.45,
      bay: 4,
      floors: [4.6, 4.2, 4.2],
      parapet: 0.9,
      win: {
        w: 2.8,
        h: 2.7,
        sill: 0.8,
        type: `grid`,
        lites: [4, 4],
        frame: fr,
        rec: 0.25,
        curtains: 0.25,
        arch: 0.35,
        archMat: `brickBrown`,
        ringW: 0.3,
        sillMat: `concrete`,
      },
      store: { frame: fr, fascia: `moCharcoal` },
      door: {
        w: 2,
        h: 2.6,
        transom: 0.5,
        frame: fr,
        glazed: !0,
        mat: `moCharcoal`,
      },
      cornice: { type: `corbel`, mat: `brickRed`, h: 0.6 },
      base: { mat: `concrete`, h: 0.5, out: 0.03 },
    },
    tiers: [
      {
        front: {
          kinds: (e, t) =>
            e === 0
              ? t === 3
                ? `door`
                : t === 0 || t === 6
                  ? `window`
                  : `store`
              : `window`,
          extra: Pr({
            a0: 9.6,
            a1: 18.4,
            y: 3.9,
            d: 2.2,
            th: 0.25,
            mat: `moCharcoal`,
            edge: `moCharcoal`,
            rods: [10, 18],
            sign: `moSignFoundry`,
            sa: 10.6,
            sb: 17.4,
          }),
        },
        back: { kinds: (e, t) => (e === 0 && t === 3 ? `door` : `window`) },
        right: {
          kinds: (e, t) => (t === 2 || e === 0 ? `solid` : `window`),
          extra: (e, t, n) => {
            let r = 5.6,
              i = 12.4,
              a = 1.45;
            for (let o = 1; o <= n.top; o++) {
              let s = n.ys[o],
                c = n.ys[o - 1] + (o === 1 ? 1.2 : 0),
                l = Mr(n, 9, s - 0.5);
              (e.box(fr, t, l, r, i, s - 0.08, s, 0.15, a),
                e.box(fr, t, l, r, i, s + 1, s + 1.05, 1.4, a));
              for (let n = 5.699999999999999; n < i; n += 0.6)
                e.box(fr, t, l, n, n + 0.03, s, s + 1, 1.41, 1.44);
              let [u, d] =
                o % 2 ? [11.8, 6.199999999999999] : [6.199999999999999, 11.8];
              (Ve(e, fr, t, l, u, c, d, s, 0.12, 0.25, 1.3499999999999999),
                Ve(e, fr, t, l, u, c + 0.95, d, s + 0.95, 0.04, 1.39, 1.43));
              for (let n of [5.6499999999999995, 12.280000000000001])
                e.box(fr, t, l, n, n + 0.07, s - 0.1, s + 0.02, 0, a);
            }
          },
        },
        left: {
          kinds: (e, t) => (e === 0 ? `solid` : t === 4 ? `window` : `solid`),
          signs: [
            {
              mat: `moSignGhost`,
              rect: [2.5, 17, 6.2, 11.8],
              z0: 0.005,
              z1: 0.012,
            },
          ],
        },
      },
      {
        W: 20,
        D: 11,
        dz: -3.8,
        floors: [3.8],
        style: {
          wall: `moCorten`,
          parapet: 0.3,
          parapetMat: `moCorten`,
          cornice: null,
          base: null,
          curtain: {
            glass: `moGlassDark`,
            spandrel: `moCorten`,
            mullion: `moCorten`,
            module: 2,
            fin: 0.12,
            sill: 0.1,
            head: 0.45,
          },
        },
        front: { kinds: () => `curtain`, extra: null },
        back: { kinds: () => `curtain` },
        right: { kinds: () => `curtain`, extra: null },
        left: { kinds: () => `curtain`, signs: [] },
      },
    ],
    extra: (e, t, n) => {
      let r = 12.8;
      (_r(5), e.box(`moTimber`, t, 0, -13.4, 13.4, 12.82, 12.9, 3.2, 9.4));
      for (let [n, r] of [
        [-9, 6],
        [-3, 7],
        [4, 6],
        [9, 7.5],
      ]) {
        (e.add(
          `woodDark`,
          new C(0.5, 0.5, 0.05, 12).translate(n, 13.620000000000001, r),
          t,
          0,
        ),
          e.add(
            fr,
            new C(0.04, 0.04, 0.72, 6).translate(n, 13.260000000000002, r),
            t,
            0,
          ));
        for (let i of [-1, 1])
          e.box(
            `woodDark`,
            t,
            0,
            n + i * 0.8 - 0.2,
            n + i * 0.8 + 0.2,
            12.9,
            13.350000000000001,
            r - 0.2,
            r + 0.2,
          );
      }
      for (let n of [-13, -4.5, 4.5, 13])
        e.box(fr, t, 0, n - 0.05, n + 0.05, r, 15.8, 9.1, 9.2);
      for (let n = -13; n < 13; n += 0.8)
        e.box(
          `moLedWarm`,
          t,
          0,
          n - 0.05,
          n + 0.05,
          15.520000000000001 -
            0.25 * Math.sin((((n + 13) % 8.5) / 8.5) * Math.PI) -
            0.05,
          15.520000000000001 -
            0.25 * Math.sin((((n + 13) % 8.5) / 8.5) * Math.PI) +
            0.05,
          9.1,
          9.2,
        );
      for (let n of [-12, -7, 7, 12])
        Br(e, t, 0, n - 0.7, n + 0.7, 12.9, 3.6, 4.6, `moCorten`, 0.6);
      e.box(`brickRed`, t, 0, 10.1, 11.9, r, 22, -8.4, -6.6);
      for (let n of [15.8, 18.8, 21.2])
        e.box(fr, t, 0, 10.05, 11.95, n, n + 0.12, -8.45, -6.55);
      e.box(`brickRed`, t, 0, 9.95, 12.05, 22, 22.4, -8.55, -6.45);
    },
  };
}
function mi() {
  let e = (e, t, n) => {
      let r = _r(29);
      for (let i = 1; i <= n.top; i++)
        for (let a = 0; a < n.nb; a++) {
          let o = n.grid[i][a],
            s = n.ys[i],
            c = a * n.bw,
            l = c + n.bw,
            u = (c + l) / 2;
          if (a % 3 == 2) {
            for (let [n, r] of [
              [c + 0.05, u - 0.82],
              [u + 0.82, l - 0.05],
            ])
              e.box(`moTimber`, t, o, n, r, s + 0.05, s + 3.05, 0, 0.05);
            continue;
          }
          (e.box(
            `moConcLight`,
            t,
            o,
            c + 0.15,
            l - 0.15,
            s - 0.2,
            s + 0.3,
            1.55,
            1.95,
          ),
            e.box(
              `moFoliage`,
              t,
              o,
              c + 0.2,
              l - 0.2,
              s + 0.25,
              s + 0.5,
              1.6,
              1.9,
            ),
            r() < 0.45 &&
              e.box(
                `moFoliage`,
                t,
                o,
                c + 0.3 + r() * 0.8,
                c + 1.2 + r() * 0.8,
                s - 0.9,
                s - 0.2,
                1.86,
                1.93,
              ),
            r() < 0.3 && zr(e, t, o, c + 0.6, s + 0.04, 0.6, 1.6, 0.45),
            e.box(
              `moSlats`,
              t,
              o,
              a % 3 == 0 ? l - 0.14 : c + 0.12,
              a % 3 == 0 ? l - 0.12 : c + 0.14,
              s + 0.04,
              s + 2.3,
              0,
              1.5,
            ));
        }
    },
    t = (e, t, n) => {
      (e.box(`moFoliage`, t, 0, -14.4, 14.4, n.H + 0.02, n.H + 0.14, -7.4, 7.4),
        Gr(e, t, -12, -2, -6.5, 6.5, n.H + 0.14, 0.3),
        qr(e, t, 4, 9, -4, 1, n.H, 3, `moTimber`));
    };
  return {
    key: `moApartments`,
    name: `Greenline Apartments`,
    plain: 15526886,
    desc: `Mid-rise apartment block: white panel walls with deep glass-railed balconies on every flat, concrete planter troughs spilling greenery, timber privacy slats and timber-clad bays, shops and a timber-headed lobby below, green roof with solar.`,
    W: 30,
    D: 16,
    style: {
      wall: `moPanelWhite`,
      t: 0.35,
      bay: 3,
      floors: [4.4, ...pr(6, 3.1)],
      parapet: 1.1,
      win: {
        w: 1.5,
        h: 1.7,
        sill: 0.8,
        type: `grid`,
        lites: [2, 1],
        frame: `moCharcoal`,
        rec: 0.15,
        curtains: 0.6,
      },
      balcony: {
        w: 2.1,
        h: 2.4,
        depth: 1.6,
        slab: `moWhite`,
        rail: `glass`,
        railMat: `aluminum`,
      },
      store: { frame: `moCharcoal`, fascia: `moTimber` },
      lobby: {
        rec: 0.8,
        frame: `moCharcoal`,
        glass: `moGlassClear`,
        head: 1.2,
        headMat: `moTimber`,
        column: `moCharcoal`,
      },
      door: {
        w: 1.1,
        h: 2.3,
        transom: 0,
        frame: `moCharcoal`,
        mat: `moTimber`,
      },
      base: { mat: `moCharcoal`, h: 0.4, out: 0.03 },
    },
    front: {
      kinds: (e, t) =>
        e === 0
          ? t === 4
            ? `lobbyDoor`
            : `store`
          : t % 3 == 2
            ? `window`
            : `balcony`,
      extra: e,
      signs: [
        {
          mat: `moSignGreenline`,
          rect: [11.5, 16.5, 3.55, 4.1],
          z0: 0.02,
          z1: 0.05,
        },
      ],
    },
    back: {
      kinds: (e, t) => (e === 0 ? (t === 3 ? `door` : `solid`) : `window`),
    },
    right: { kinds: (e, t) => (t === 2 && e > 0 ? `window` : `solid`) },
    left: { kinds: (e, t) => (t === 2 && e > 0 ? `window` : `solid`) },
    extra: t,
  };
}
