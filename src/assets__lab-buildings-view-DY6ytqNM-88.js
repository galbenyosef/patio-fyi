// assets__lab-buildings-view-DY6ytqNM 88 — add
// Lines 26953-27289 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function bc() {
  let e = 1.2,
    t = {
      prof: [
        [6.12, 1.05],
        ...Array.from({ length: 13 }, (t, n) => {
          let r = (n / 12) * (Math.PI / 2);
          return [n === 12 ? 0 : 6 * Math.cos(r), e + 6 * Math.sin(r)];
        }),
      ],
    };
  t.yr = 7.2;
  let n = {
      wall: `amBrickRust`,
      t: 0.3,
      bay: 2.8,
      floors: [3],
      parapet: 1,
      win: {
        w: 0.9,
        h: 1.2,
        sill: 1,
        type: `grid`,
        lites: [2, 2],
        frame: `aluminum`,
        rec: 0.1,
        curtains: 0.3,
      },
      door: {
        w: 1.7,
        h: 2.2,
        transom: 0.3,
        frame: `aluminum`,
        glazed: !0,
        mat: `amSteelBlue`,
        rec: 0.3,
        hood: `limestone`,
      },
      base: { mat: `concrete`, h: 0.3, out: 0.03 },
      cornice: { type: `classic`, mat: `limestone`, h: 0.2, out: 0.08 },
    },
    r = (e, n, r, i, a) => {
      for (let t of [-1, 1])
        Xs(e, n, i, a + t * 4.2, 1.8, 1, 1.3, 0.05, {
          frame: I,
          lites: [2, 2],
        });
      (e.add(`louver`, new c(0.6, 16).translate(a, t.yr - 1.3, 0.04), n, i),
        e.add(
          I,
          new o(0.62, 0.06, 4, 16).translate(a, t.yr - 1.3, 0.05),
          n,
          i,
        ));
    };
  return {
    key: `amQuonset`,
    name: `Veterans Memorial Hall`,
    plain: 10988976,
    shellRoof: !0,
    desc: `Quonset-hut veterans hall: half-round corrugated steel shell on a block knee wall, clapboard end walls with a round vent, brick entrance vestibule with the post sign, dormer windows along the arch, flagpole and a field gun on a plinth.`,
    W: 12,
    D: 24,
    style: { wall: `concrete`, t: 0.25, bay: 3, floors: [e], roof: Go(`z`) },
    front: {
      kinds: () => `solid`,
      gableDoor: { w: 1.6, h: 2.3 },
      extra: A(
        gs(t, {
          wall: `amLapWhite`,
          trim: I,
          extra: r,
          door: { w: 1.6, h: 2.3 },
        }),
        bs({
          u: 6,
          w: 5.6,
          d: 3.2,
          S: n,
          open: !0,
          front: {
            kinds: () => `door`,
            bay: 5.6,
            gableDoor: { w: 1.7, h: 2.3, record: !1 },
            signs: [
              {
                mat: `signAmPost`,
                rect: [0.25, 5.35, 3.1, 3.75],
                z0: 0.02,
                z1: 0.05,
              },
            ],
          },
          right: { kinds: () => `window` },
          left: { kinds: () => `window` },
        }),
      ),
    },
    back: {
      kinds: () => `solid`,
      gableDoor: { w: 1.6, h: 2.3 },
      extra: gs(t, {
        wall: `amLapWhite`,
        trim: I,
        extra: r,
        door: { w: 1.6, h: 2.3 },
      }),
    },
    right: { kinds: () => `solid` },
    left: { kinds: () => `solid` },
    extra: (e, n, r) => {
      ms(e, n, {
        ridge: `z`,
        len: 24,
        over: 0.15,
        prof: t.prof,
        mat: `amTinGalv`,
        fascia: `amTinGalv`,
        noKnee: !0,
        th: 0.1,
      });
      let i = 6 * Math.cos(Math.asin(2.3 / 6));
      for (let t of [-1, 1])
        for (let r of [-7, 0, 7]) {
          let o = Ho(n, Bo(t * i, 0, r), Vo((t * Math.PI) / 2));
          (e.box(`amTinGalv`, o, 0, -0.8, 0.8, 2.8, 3.9, -1.4, 0.35),
            Xs(e, o, 0, 0, 3, 1.1, 0.7, 0.37, { frame: I, lites: [2, 1] }),
            e.add(
              `amTinGalv`,
              new a(1.8, 0.08, 1.9).rotateX(0.25).translate(0, 4.05, -0.45),
              o,
              0,
            ));
        }
      (yc(e, n, 4.6, 14.3, 9.5), vc(e, n, -4.2, 13.9));
    },
  };
}
function xc(e, t, n, r, i) {
  (e.box(
    `amBrickPaleYellow`,
    t,
    n,
    r - 0.55,
    r + 0.55,
    0,
    1.2,
    i - 0.55,
    i + 0.55,
  ),
    e.box(
      `limestone`,
      t,
      n,
      r - 0.65,
      r + 0.65,
      1.2,
      1.32,
      i - 0.65,
      i + 0.65,
    ));
  for (let a of [-1, 1])
    e.box(
      Fo,
      t,
      n,
      r + a * 0.45 - 0.05,
      r + a * 0.45 + 0.05,
      1.32,
      2.5,
      i - 0.05,
      i + 0.05,
    );
  (e.box(Fo, t, n, r - 0.5, r + 0.5, 2.42, 2.52, i - 0.06, i + 0.06),
    e.add(
      `bronze`,
      new g(
        [
          [0, 0],
          [0.34, 0],
          [0.33, 0.08],
          [0.25, 0.3],
          [0.2, 0.55],
          [0.12, 0.64],
          [0, 0.66],
        ].map(([e, t]) => new y(e, t)),
        12,
      ).translate(r, 1.72, i),
      t,
      n,
    ),
    e.box(`bronze`, t, n, r - 0.3, r + 0.3, 1.25, 1.31, i + 0.65, i + 0.67));
}
function Sc() {
  let e = 4.6,
    t = 22 * Po,
    n = e + 8 * Math.tan(t);
  return {
    key: `amFireStation`,
    name: `Millbrook Volunteer Fire Co.`,
    plain: 13218426,
    desc: `1950s volunteer fire station: pale yellow brick, three red panelled apparatus doors under red FIRE lamps, low ribbed red roof with a name board in the gable, rooftop siren on a steel mast, the old bell on a brick plinth.`,
    W: 16,
    D: 18,
    style: {
      wall: `amBrickPaleYellow`,
      t: 0.3,
      bay: 5.33,
      floors: [e],
      win: {
        w: 1.4,
        h: 1.2,
        sill: 1.4,
        type: `grid`,
        lites: [2, 2],
        frame: I,
        sillMat: `limestone`,
        rec: 0.12,
        curtains: 0.4,
      },
      door: {
        w: 1,
        h: 2.2,
        transom: 0.3,
        frame: I,
        glazed: !0,
        mat: `amEnamelRed`,
        rec: 0.2,
        hood: I,
      },
      loading: { type: `fire`, mat: `amEnamelRed`, trim: I, w: 3.7, h: 3.9 },
      base: { mat: `concrete`, h: 0.45, out: 0.03 },
      eaveTrim: I,
      roof: {
        ridge: `z`,
        pitch: t,
        over: 0.5,
        mat: `amRibRed`,
        fascia: I,
        gutter: !0,
      },
    },
    front: {
      kinds: () => `loading`,
      signs: [
        {
          mat: `signAmFire`,
          rect: [4.4, 11.6, 4.949999999999999, 6.05],
          z0: 0.02,
          z1: 0.06,
        },
      ],
      extra: (e, t, n) => {
        for (let r = 0; r < n.nb; r++) {
          let a = n.grid[0][r],
            o = (r + 0.5) * n.bw;
          (e.box(Fo, t, a, o - 0.04, o + 0.04, 4.28, 4.34, 0, 0.35),
            e.add(
              `amNeonRed`,
              new i(0.16, 10, 8).translate(o, 4.18, 0.38),
              t,
              a,
            ),
            e.box(`concrete`, t, a, r * n.bw, (r + 1) * n.bw, 0, 0.06, 0, 5.5));
          for (let i = 0; i < 2; i++)
            e.box(
              `amYellow`,
              t,
              a,
              r * n.bw + (i ? n.bw - 0.2 : 0.1),
              r * n.bw + (i ? n.bw - 0.1 : 0.2),
              0.06,
              0.07,
              0.5,
              5.3,
            );
        }
      },
    },
    back: { kinds: (e, t) => (t === 1 ? `loading` : `window`) },
    right: {
      kinds: (e, t) => (t === 0 ? `door` : `window`),
      bay: 3.5,
      extra: (e, t, n) => {
        (xc(e, t, n.grid[0][1], 5, 2.2),
          e.add(
            `amEnamelRed`,
            new C(0.16, 0.18, 0.7, 10).translate(0.6, 0.35, 1.2),
            t,
            n.grid[0][0],
          ),
          e.add(
            `amEnamelRed`,
            new i(0.17, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2).translate(
              0.6,
              0.7,
              1.2,
            ),
            t,
            n.grid[0][0],
          ));
      },
    },
    left: { kinds: (e, t) => (t === 3 ? `door` : `window`), bay: 3.5 },
    extra: (t, r) => {
      let i = n - 0.3;
      (t.add(
        `amSteelDoor`,
        new C(0.08, 0.12, 4.2, 8).translate(0, i + 2.1, -4),
        r,
        0,
      ),
        t.add(
          `amSteelDoor`,
          new C(0.4, 0.4, 0.5, 12).translate(0, i + 4.4, -4),
          r,
          0,
        ));
      for (let e of [-1, 1])
        t.add(
          `amSteelDoor`,
          new C(0.28, 0.12, 0.8, 10)
            .rotateZ((e * Math.PI) / 2)
            .translate(e * 0.6, i + 4.4, -4),
          r,
          0,
        );
      (t.add(
        `amSteelDoor`,
        new d(0.4, 0.3, 12).translate(0, i + 4.8, -4),
        r,
        0,
      ),
        j(t, r, `amBrickPaleYellow`, 3.5, 6, e, n - 0.6, 0.8, 0.8));
    },
  };
}
