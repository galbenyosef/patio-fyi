// assets__lab-buildings-view-DJVr8phc 44 — add
// Lines 13969-14085 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function vi() {
  return {
    key: `moCarDealer`,
    name: `Apex Motors`,
    plain: 9080724,
    desc: `Car dealership: a double-height glass showroom with cars on turntables inside, a bold red portal frame around the entrance carrying the APEX logo, a display car on a lit podium out front, flag banners, and service bays with roll-up doors along the side.`,
    W: 38,
    D: 24,
    style: {
      wall: `moPanelGrey`,
      t: 0.3,
      bay: 4.75,
      floors: [7.5],
      parapet: 1,
      parapetMat: `moSilver`,
      curtain: {
        glass: `moGlassClear`,
        spandrel: `moCharcoal`,
        mullion: `moSilver`,
        module: 2.4,
        fin: 0.1,
        sill: 0.05,
        head: 0.5,
      },
      lobby: {
        rec: 0.6,
        frame: `moSilver`,
        glass: `moGlassClear`,
        head: 0.5,
        headMat: `moCharcoal`,
        column: `moSilver`,
      },
      loading: { type: `rollup`, dock: !1, w: 3.6, h: 4.2 },
      door: { w: 1, h: 2.2, transom: 0, frame: `moCharcoal`, mat: `moSilver` },
    },
    front: {
      kinds: (e, t) => (t === 3 || t === 4 ? `lobbyDoor` : `curtain`),
      extra: (e, t, n) => {
        let r = 11.2;
        for (let [i, a] of [
          [12.9, 13.8],
          [24.2, 25.099999999999998],
        ])
          P(e, `moRed`, t, n, i, a, 0, r, -0.1, 1.4);
        (P(e, `moRed`, t, n, 12.9, 25.099999999999998, 9.7, r, -0.1, 1.4),
          P(
            e,
            `moSignApex`,
            t,
            n,
            14.200000000000001,
            23.8,
            9.85,
            11.049999999999999,
            1.4,
            1.43,
            yr(14.200000000000001, 23.8, 9.85, 11.049999999999999),
          ));
        let i = n.grid[0][hr(n, 5)],
          a = 2.3;
        (e.add(
          `moSilver`,
          new s(2.7, 2.8, 0.3, 24).translate(5, 0.15, a),
          t,
          i,
        ),
          e.add(
            `moLed`,
            new s(2.82, 2.82, 0.04, 24).translate(5, 0.05, a),
            t,
            i,
          ),
          Hr(e, t, i, 5, 0.3, a, 0.12, `moRed`));
        for (let [r, i] of [
          [29, `moRed`],
          [32, `moWhite`],
          [35, `moRed`],
        ]) {
          let a = n.grid[0][hr(n, r)];
          (e.add(
            `moSilver`,
            new s(0.05, 0.06, 7, 8).translate(r, 3.5, 2.8),
            t,
            a,
          ),
            e.box(i, t, a, r + 0.06, r + 0.9, 3.2, 6.8, 2.79, 2.81),
            e.box(`moSilver`, t, a, r, r + 0.95, 6.8, 6.85, 2.77, 2.83));
        }
      },
    },
    right: {
      kinds: (e, t) => (t >= 1 && t <= 3 ? `loading` : `solid`),
      signs: [
        { mat: `moSignService`, rect: [5, 18, 5.4, 6.4], z0: 0.02, z1: 0.05 },
      ],
    },
    left: { kinds: (e, t) => (t === 0 ? `curtain` : `solid`) },
    back: { kinds: (e, t) => (t === 2 ? `door` : `solid`) },
    extra: (e, t, n) => {
      ([
        [-12, `moBlue`],
        [-5, `moWhite`],
        [8, `moCharcoal`],
        [14, `moYellow`],
      ].forEach(([r, i], a) => {
        (e.add(
          `moSilver`,
          new s(2.6, 2.6, 0.1, 20).translate(r, 0.05, n.D / 2 - 5),
          t,
          0,
        ),
          Hr(e, t, 0, r, 0.1, n.D / 2 - 5, 0.4 - a * 0.35, i));
      }),
        ke(e, t, n, `moSignApexRoof`, 12, 2, n.D / 2 - 2.5, 0.8));
    },
  };
}
