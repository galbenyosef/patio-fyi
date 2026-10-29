// assets__lab-buildings-view-DY6ytqNM 90 — add
// Lines 27615-27918 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function Oc() {
  return {
    key: `amBurgerStand`,
    name: `Top Hat Drive-In`,
    plain: 15790056,
    desc: `1950s drive-in burger stand: white enamel box with an orange band, walk-up windows with chrome counters and stools, deep bulb-lit car-hop canopy with a menu band, order speakers, giant root beer mug on the roof and a neon sign.`,
    W: 10,
    D: 7,
    style: {
      wall: `amWhiteEnamel`,
      t: 0.25,
      bay: 3.33,
      floors: [3.4],
      parapet: 0.7,
      parapetMat: `amEnamelOrange`,
      win: {
        w: 1.6,
        h: 1,
        sill: 1.2,
        type: `grid`,
        lites: [2, 1],
        frame: `amChrome`,
        rec: 0.08,
        curtains: 0.2,
      },
      store: { frame: `amChrome`, fascia: `amEnamelOrange` },
      door: {
        w: 0.95,
        h: 2.1,
        transom: 0,
        frame: `amChrome`,
        glazed: !0,
        mat: `amEnamelOrange`,
        rec: 0.1,
      },
      base: { mat: `amEnamelOrange`, h: 0.9, out: 0.03 },
    },
    front: { kinds: () => `store`, extra: Dc },
    back: { kinds: (e, t) => (t === 1 ? `door` : `solid`) },
    right: { kinds: (e, t) => (t === 0 ? `window` : `solid`) },
    left: { kinds: (e, t) => (t === 1 ? `door` : `window`) },
    extra: (e, t, n) => {
      (Ec(e, t, -3.2, n.H - 0.2, -1.1, 1.25, 2.6),
        De(e, t, n, `signAmTopHat`, 3.6, 1.6, -0.2, 1.1));
      let r = 1.1,
        i = n.H + 2.7;
      (e.add(
        `amBlack`,
        new C(0.55, 0.5, 0.9, 16).translate(r, i + 0.5, -0.5),
        t,
        0,
      ),
        e.add(
          `amBlack`,
          new C(0.95, 0.95, 0.08, 16).translate(r, i + 0.08, -0.5),
          t,
          0,
        ),
        e.add(
          `amNeonRed`,
          new C(0.52, 0.52, 0.16, 16).translate(r, i + 0.22, -0.5),
          t,
          0,
        ));
    },
  };
}
function kc(e, t, n, r, i, a) {
  e.add(
    `amWhiteEnamel`,
    new g(
      [
        [0, 0],
        [0.55, 0],
        [0.85, 0.8],
        [1, 1.8],
        [0.95, 2.6],
        [0.62, 3.6],
        [0.38, 4.3],
        [0.4, 4.9],
        [0.52, 5.6],
        [0.48, 6.2],
        [0.3, 6.7],
        [0, 6.85],
      ].map(([e, t]) => new y(e * a, t * a)),
      16,
    ).translate(n, r, i),
    t,
    0,
  );
  for (let o of [4.45, 4.75])
    e.add(
      `amEnamelRed`,
      new C(0.39 * a + 0.03, 0.385 * a + 0.03, 0.13 * a, 16).translate(
        n,
        r + o * a,
        i,
      ),
      t,
      0,
    );
}
function Ac() {
  let e = 5.5,
    t = 179.24 / 6.4,
    n = -19.306250000000002,
    r = {
      prof: [
        [13.3, 5.4],
        ...Array.from({ length: 9 }, (e, r) => {
          let i = 13 * (1 - r / 8);
          return [i, n + Math.sqrt(t * t - i * i)];
        }),
      ],
    },
    a = [
      [0, e],
      [26, e],
      [26, 8.7],
      [18, 8.7],
      [18, 10.3],
      [8, 10.3],
      [8, 8.7],
      [0, 8.7],
    ];
  return {
    key: `amBowling`,
    name: `Atomic Lanes`,
    plain: 11041362,
    desc: `Space-age bowling alley: long roman-brick hall under a low bowstring-truss vault, teal stepped front crown with neon lettering, recessed glass lobby under a canopy, a giant striped bowling pin and a neon atom on the roof.`,
    W: 26,
    D: 34,
    style: {
      wall: `amBrickRoman`,
      t: 0.3,
      bay: 3.25,
      floors: [e],
      lobby: {
        head: 1.2,
        rec: 1,
        glass: `glassGrey`,
        frame: `aluminum`,
        column: `amStuccoTeal`,
        canopy: `amWhiteEnamel`,
      },
      door: {
        w: 1.1,
        h: 2.2,
        transom: 0,
        frame: `aluminum`,
        glazed: !0,
        mat: `amSteelDoor`,
        rec: 0.15,
      },
      base: { mat: `amStuccoTeal`, h: 0.6, out: 0.04 },
      roof: Go(`z`),
    },
    front: {
      kinds: (e, t) =>
        t === 3 || t === 4
          ? `lobbyDoor`
          : t === 2 || t === 5
            ? `lobby`
            : `solid`,
      signs: [
        {
          mat: `signAmAtomic`,
          rect: [8.4, 17.6, 8.85, 10.15],
          z0: 0.02,
          z1: 0.06,
        },
        {
          mat: `signAmBowlBand`,
          rect: [0.6, 25.4, 6.3, 7.7],
          z0: 0.02,
          z1: 0.06,
        },
      ],
      extra: A(Ps(`amStuccoTeal`, a), (e, t, n) => {
        (e.box(`amChrome`, t, n.gableCell, -0.1, 26.1, 8.7, 8.82, -0.3, 0.12),
          e.box(
            `amChrome`,
            t,
            n.gableCell,
            7.9,
            18.1,
            10.3,
            10.42,
            -0.3,
            0.12,
          ));
        for (let r of [-1, 1])
          e.box(
            `amNeonPink`,
            t,
            n.gableCell,
            13 + r * 4.95 - 0.05,
            13 + r * 4.95 + 0.05,
            8.8,
            10.25,
            0.02,
            0.1,
          );
      }),
    },
    back: {
      kinds: (e, t) => (t === 1 ? `door` : `solid`),
      extra: gs(r, { wall: `amBrickRoman`, trim: `limestone` }),
    },
    right: {
      kinds: (e, t) => (t === 9 ? `door` : `solid`),
      bay: 3.4,
      extra: Re(
        [
          [`limestone`, 5.2, e, 0.06],
          [`amStuccoTeal`, 2.6, 2.9, 0.05],
        ],
        !0,
      ),
    },
    left: {
      kinds: (e, t) => (t === 2 ? `door` : `solid`),
      bay: 3.4,
      extra: Re(
        [
          [`limestone`, 5.2, e, 0.06],
          [`amStuccoTeal`, 2.6, 2.9, 0.05],
        ],
        !0,
      ),
    },
    extra: (e, a) => {
      ms(e, Ho(a, Bo(0, 0, -0.45)), {
        ridge: `z`,
        len: 33.6,
        over: 0.3,
        prof: r.prof,
        mat: `amRoofDark`,
        fascia: `limestone`,
        noKnee: !0,
      });
      let s = (e) => n + Math.sqrt(t * t - e * e);
      (e.box(
        `concrete`,
        a,
        0,
        7.6,
        10.4,
        s(10.4) - 0.3,
        s(7.6) + 0.35,
        11.6,
        14.4,
      ),
        kc(e, a, 9, s(7.6) + 0.35, 13, 1.1));
      let c = -8.5,
        l = s(8.5) + 5.2;
      (e.add(
        Fo,
        new C(0.1, 0.14, l - s(8.5), 8).translate(c, (l + s(8.5)) / 2, 13),
        a,
        0,
      ),
        e.add(`amNeonRed`, new i(0.7, 16, 12).translate(c, l, 13), a, 0));
      for (let t of [0, Math.PI / 3, (2 * Math.PI) / 3])
        e.add(
          `amNeonBlue`,
          new o(2, 0.07, 6, 32)
            .scale(1, 0.38, 1)
            .rotateZ(t)
            .translate(c, l, 13),
          a,
          0,
        );
    },
  };
}
function jc(e, t, n, r, i) {
  for (let a of [-1, 1])
    e.box(
      Fo,
      t,
      n,
      r + a * 0.9 - 0.03,
      r + a * 0.9 + 0.03,
      0,
      1.8,
      i - 0.03,
      i + 0.03,
    );
  for (let a of [0.55, 1.35]) {
    e.box(Fo, t, n, r - 0.95, r + 0.95, a - 0.02, a + 0.02, i - 0.03, i + 0.03);
    for (let s = 0; s < 4; s++)
      e.add(
        `amRubber`,
        new o(0.28, 0.1, 6, 14).translate(
          r - 0.66 + s * 0.44,
          a + 0.28,
          i + 0.08,
        ),
        t,
        n,
      );
  }
}
