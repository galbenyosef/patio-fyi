// assets__lab-buildings-view-DJVr8phc 91 — translate
// Lines 27919-28263 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function Nc() {
  let e = 4.8,
    t = [
      [0, e],
      [16, e],
      [16, 5.8],
      [13.6, 5.8],
      ...Array.from({ length: 13 }, (e, t) => {
        let n = (t / 12) * Math.PI;
        return [8 + 5.6 * Math.cos(n), 5.8 + 1.9 * Math.sin(n)];
      }),
      [0, 5.8],
    ];
  return {
    key: `amAutoRepair`,
    name: `Dutch's Auto Repair`,
    plain: 14605008,
    desc: `Pre-war auto repair garage: whitewashed block with a curved mission parapet carrying the painted shop name, red stripe, three roll-up service bays and a glazed office, tire rack, oil drums, air post and a pole sign.`,
    W: 16,
    D: 14,
    style: {
      wall: `amCMUWhite`,
      t: 0.3,
      bay: 4,
      floors: [e],
      win: {
        w: 1.6,
        h: 1.4,
        sill: 1.1,
        type: `grid`,
        lites: [3, 2],
        frame: `amEnamelRed`,
        rec: 0.12,
        curtains: 0.1,
      },
      store: { frame: `amEnamelRed`, fascia: `amEnamelRed` },
      door: {
        w: 1,
        h: 2.2,
        transom: 0.3,
        frame: `amEnamelRed`,
        glazed: !0,
        mat: `amSteelDoor`,
        rec: 0.15,
      },
      loading: { type: `rollup`, dock: !1, w: 3.2, h: 3.5 },
      base: { mat: `amEnamelRed`, h: 0.5, out: 0.03 },
    },
    front: {
      kinds: (e, t) => (t === 0 ? `store` : `loading`),
      signs: [
        {
          mat: `signAmAuto`,
          rect: [3.7, 12.3, 5.949999999999999, 7.25],
          z0: 0.02,
          z1: 0.05,
        },
      ],
      extra: k(
        Fs(`amCMUWhite`, t, `amEnamelRed`),
        Be([[`amEnamelRed`, 4.1, 4.35, 0.04]], !1),
        (e, t, n) => {
          Mc(e, t, n.grid[0][0], 2, 0.6);
          for (let [r, i, a] of [
            [0.5, 1.6, `amEnamelRed`],
            [0.5, 2.3, `amSteelBlue`],
            [1.2, 2, `amEnamelRed`],
          ])
            e.add(
              a,
              new s(0.3, 0.3, 0.9, 12).translate(r, 0.45, i),
              t,
              n.grid[0][0],
            );
          let r = n.grid[0][2];
          (e.box(`amEnamelRed`, t, r, 7.8, 8.2, 0, 1.4, 4, 4.3),
            e.add(`amGlobe`, new w(0.15, 10, 8).translate(8, 1.55, 4.15), t, r),
            D(e, `amRubber`, t, r, [8.2, 1.2, 4.15], [8.5, 0.2, 4.6], 0.04));
          for (let r = 1; r < n.nb; r++)
            e.box(
              `concrete`,
              t,
              n.grid[0][r],
              r * n.bw + 0.2,
              (r + 1) * n.bw - 0.2,
              0,
              0.05,
              0,
              3.5,
            );
        },
      ),
    },
    back: { kinds: (e, t) => (t === 2 ? `loading` : `window`) },
    right: { kinds: (e, t) => (t === 1 ? `door` : `window`), bay: 4.5 },
    left: { kinds: () => `window`, bay: 4.5 },
    extra: (e, t) => {
      let n = 9.3,
        r = 8.5;
      (e.add(
        `amSteelDoor`,
        new s(0.12, 0.14, 7.2, 10).translate(n, 3.6, r),
        t,
        0,
      ),
        e.add(
          `amEnamelRed`,
          new s(0.9, 0.9, 0.35, 24).rotateX(Math.PI / 2).translate(n, 7.6, r),
          t,
          0,
        ),
        ls(
          e,
          t,
          0,
          `signAmAutoPole`,
          7.700000000000001,
          10.9,
          5.3,
          6.9,
          r,
          0.14,
          `amEnamelRed`,
        ),
        us(e, t, 0, `amWhiteEnamel`, Ns(n, 7.58, 0.7, 0.3), 8.3, 8.7));
    },
  };
}
function Pc(t, n, r, i, a) {
  let o = (e, t, n) => [r + e * a, t * a, i + n * a],
    c = (e, r, i, o = 1, s = 1, c = 1) =>
      t.add(e, new w(i * a, 14, 10).scale(o, s, c).translate(...r), n, 0);
  (c(`amDinoGreen`, o(0, 3, 0), 1, 3.1, 1.75, 1.55),
    c(`amDinoBelly`, o(0, 2.55, 0.25), 1, 2.6, 1.2, 1.3));
  for (let [e, r] of [
    [-1.8, -0.8],
    [-1.8, 0.8],
    [1.7, -0.8],
    [1.7, 0.8],
  ])
    t.add(
      `amDinoGreen`,
      new s(0.42 * a, 0.5 * a, 2.3 * a, 10).translate(...o(e, 1.15, r)),
      n,
      0,
    );
  let l = new e(
    [o(2.5, 3.6, 0), o(3.4, 5, 0.4), o(3.6, 6.4, 1.3), o(3.5, 7.1, 2.3)].map(
      (e) => new fe(...e),
    ),
  );
  for (let e = 0; e <= 10; e++) {
    let r = l.getPoint(e / 10);
    t.add(
      `amDinoGreen`,
      new w((0.75 - e * 0.042) * a, 10, 8).translate(r.x, r.y, r.z),
      n,
      0,
    );
  }
  c(`amDinoGreen`, o(3.5, 7.25, 2.75), 0.55, 1, 0.8, 1.45);
  for (let e of [-0.25, 0.25])
    (c(`amWhiteEnamel`, o(3.5 + e, 7.5, 3), 0.12),
      c(`amBlack`, o(3.5 + e * 1.2, 7.52, 3.08), 0.06));
  let u = new e(
    [
      o(-2.8, 3.3, 0),
      o(-4.4, 2.6, -0.4),
      o(-5.8, 1.6, -1.2),
      o(-6.8, 0.7, -2.4),
    ].map((e) => new fe(...e)),
  );
  for (let e = 0; e <= 12; e++) {
    let r = u.getPoint(e / 12);
    t.add(
      `amDinoGreen`,
      new w((0.85 - e * 0.062) * a, 10, 8).translate(r.x, r.y, r.z),
      n,
      0,
    );
  }
  t.box(
    `concrete`,
    n,
    0,
    r - 3 * a,
    r + 3 * a,
    0,
    0.12,
    i - 1.5 * a,
    i + 1.5 * a,
  );
}
function Fc() {
  return {
    key: `amSouvenir`,
    name: `Dino Land Souvenirs`,
    plain: 15255648,
    desc: `Roadside souvenir stand: bright yellow shack with a striped awning and painted wall signs, postcard racks and fireworks crates out front, a towering pole billboard with a neon arrow and a fibreglass brontosaurus looking over the roof.`,
    W: 9,
    D: 6,
    style: {
      wall: `amStuccoYellow`,
      t: 0.2,
      bay: 3,
      floors: [3],
      win: {
        w: 1.9,
        h: 1.3,
        sill: 0.8,
        type: `grid`,
        lites: [2, 1],
        frame: `amEnamelRed`,
        rec: 0.08,
        curtains: 0.1,
      },
      store: { frame: `amEnamelRed`, fascia: `amEnamelRed` },
      awning: { mat: `awningRed`, depth: 1.4, drop: 0.55 },
      door: {
        w: 1,
        h: 2.1,
        transom: 0,
        frame: `amEnamelRed`,
        glazed: !0,
        mat: `amEnamelRed`,
        rec: 0.1,
      },
      base: { mat: `amEnamelRed`, h: 0.4, out: 0.03 },
      roof: {
        ridge: `x`,
        pitch: 24 * Fo,
        over: 0.45,
        mat: `amTinRed`,
        fascia: `amEnamelRed`,
      },
    },
    front: {
      kinds: (e, t) => (t === 1 ? `door` : `store`),
      extra: (e, t, n) => {
        let i = n.grid[0][0],
          a = n.grid[0][2];
        for (let [n, o] of [
          [i, 1.5],
          [a, 7.5],
        ]) {
          e.add(
            `amChrome`,
            new s(0.04, 0.04, 1.8, 6).translate(o, 0.9, 1.8),
            t,
            n,
          );
          for (let i = 0; i < 4; i++)
            for (let a = 0; a < 3; a++) {
              let s = (i / 4) * Math.PI * 2;
              e.add(
                [`amCoral`, `amTurq`, `amYellow`, `amMint`][(i + a) % 4],
                new r(0.28, 0.2, 0.02)
                  .translate(0, 0, 0.22)
                  .rotateY(s)
                  .translate(o, 0.9 + a * 0.3, 1.8),
                t,
                n,
              );
            }
          e.add(
            `amChrome`,
            new s(0.3, 0.3, 0.04, 12).translate(o, 0.05, 1.8),
            t,
            n,
          );
        }
        for (let n = 0; n < 3; n++)
          e.box(
            n % 2 ? `amEnamelRed` : `amYellow`,
            t,
            a,
            5.9 + n * 0.1,
            6.7 + n * 0.1,
            n * 0.4,
            n * 0.4 + 0.4,
            0.3,
            1,
          );
        e.box(`signAmFireworks`, t, a, 5.95, 6.65, 0.05, 0.35, 1, 1.01, {
          planar: (e, t) => [(e - 5.95) / 0.7, (t - 0.05) / 0.3],
        });
      },
      signs: [
        { mat: `signAmGifts`, rect: [0.2, 8.8, 2.2, 2.68], z0: 0.08, z1: 0.1 },
      ],
    },
    back: { kinds: (e, t) => (t === 1 ? `door` : `solid`) },
    right: {
      kinds: () => `solid`,
      signs: [
        { mat: `signAmFudge`, rect: [0.4, 5.2, 0.9, 2.4], z0: 0.005, z1: 0.01 },
      ],
    },
    left: { kinds: () => `window` },
    extra: (e, t) => {
      Pc(e, t, -0.8, -6.3, 1.25);
      for (let n of [-1.4, 1.4])
        e.add(
          `amSteelDoor`,
          new s(0.14, 0.16, 9.6, 10).translate(
            6.1 + n,
            4.8,
            3.3000000000000003,
          ),
          t,
          0,
        );
      (ls(
        e,
        t,
        0,
        `signAmDino`,
        3.0999999999999996,
        9.1,
        6.6,
        9.4,
        3.6,
        0.18,
        `amDinoGreen`,
      ),
        us(
          e,
          t,
          0,
          `amNeonYellow`,
          [
            [8.5, 5.4],
            [4.8999999999999995, 5.4],
            [4.8999999999999995, 4.9],
            [3.4999999999999996, 5.8],
            [4.8999999999999995, 6.5],
            [4.8999999999999995, 6.2],
            [8.5, 6.2],
          ],
          3.52,
          3.68,
        ));
    },
  };
}
