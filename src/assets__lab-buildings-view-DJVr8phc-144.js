// assets__lab-buildings-view-DJVr8phc 144 — mat
// Lines 46585-46797 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function Sp() {
  return {
    key: `euMairie`,
    name: `Mairie de Saint-Aubert`,
    plain: 14471086,
    desc: `French provincial town hall: symmetrical limestone front with rusticated arched ground floor and grey shutters, quoined centre with the mayor’s balcony, tricolours, pediment clock, lettered frieze, slate hip roof with oeil-de-boeuf dormers and a bell campanile.`,
    W: 22,
    D: 12,
    style: {
      wall: `euLimeWarm`,
      floorMat: [`euLimeRust`],
      t: 0.5,
      bay: 3.142857142857143,
      floors: [4.6, 4.2],
      win: {
        w: 1.3,
        h: 2.5,
        sill: 0.6,
        type: `grid`,
        lites: [2, 4],
        frame: `trimWhite`,
        shutter: `euShutterGrey`,
        header: `euLimeWarm`,
        headerH: 0.3,
        keystone: !0,
        rec: 0.18,
        curtains: 0.5,
      },
      win0: {
        w: 1.4,
        h: 2.6,
        sill: 0.6,
        type: `grid`,
        lites: [2, 3],
        frame: `trimWhite`,
        arch: 0.7,
        archMat: `euLimeWarm`,
        keystone: !0,
        rec: 0.25,
        curtains: 0.3,
      },
      door: {
        w: 1.9,
        h: 3,
        transom: 0.6,
        frame: `euLimeWarm`,
        mat: `euDoorBlue`,
        rec: 0.4,
        step: `euLimeWarm`,
      },
      balcony: { w: 1.5, h: 2.9, depth: 1.1, slab: `euLimeWarm` },
      base: { mat: `euGranite`, h: 0.4, out: 0.04 },
      belt: { mat: `euLimeWarm`, h: 0.3, out: 0.1 },
      cornice: {
        type: `classic`,
        mat: `euLimeWarm`,
        h: 0.4,
        out: 0.4,
        dentils: !0,
      },
      roof: Of,
    },
    front: {
      kinds: (e, t) => (t === 3 ? (e === 0 ? `door` : `balcony`) : `window`),
      extra: (e, t, n) => {
        for (let r of [2 * n.bw, 5 * n.bw])
          for (let i = 0; i < n.H - 0.1; i += 0.6) {
            let a = Math.round(i / 0.6) % 2 ? 0.45 : 0.7;
            e.box(
              `euLimeWarm`,
              t,
              Sf(n, r, i + 0.3),
              r - a / 2,
              r + a / 2,
              i,
              i + 0.54,
              0,
              0.12,
            );
          }
        let i = n.H,
          a = 2 * n.bw,
          o = 5 * n.bw,
          s = 3.5 * n.bw,
          c = 2.1;
        for (let r of [2, 3, 4])
          e.box(
            `euLimeWarm`,
            t,
            n.grid[1][r],
            Math.max(a, r * n.bw),
            Math.min(o, (r + 1) * n.bw),
            i + 0.1,
            i + 0.35,
            -0.2,
            0.5,
          );
        let u = n.grid[1][3];
        xf(
          e,
          `euLimeWarm`,
          t,
          u,
          [
            [a - 0.1, i + 0.35],
            [o + 0.1, i + 0.35],
            [s, i + 0.35 + c],
          ],
          -0.3,
          0.2,
        );
        for (let n of [-1, 1])
          D(
            e,
            `euLimeWarm`,
            t,
            u,
            [s + (n * (o - a)) / 2 + n * 0.2, i + 0.42, 0.32],
            [s, i + 0.5 + c, 0.32],
            0.22,
          );
        Mf(e, t, u, s, i + 1.1, 0.55, 0.2);
        for (let n of [-1, 1]) {
          D(
            e,
            `euGilt`,
            t,
            u,
            [s + n * 0.9, 4.9, 1],
            [s + n * 2.2, 6.9, 2],
            0.05,
          );
          let i = new l()
            .makeTranslation(s + n * 1.75, 5.55, 1.85)
            .multiply(new l().makeRotationZ(n * -0.1));
          e.add(`euFlagFR`, new r(0.02, 0.95, 1.4).applyMatrix4(i), t, u, {
            planar: (e, t, n) => [(n - 1.15) / 1.4, (t - 5.1) / 0.95],
          });
        }
      },
      signs: [
        { mat: `euSignMairie`, rect: [7, 15, 8, 8.55], z0: 0.02, z1: 0.05 },
        { mat: `euSignLiberte`, rect: [7.6, 14.4, 4, 4.4], z0: 0.1, z1: 0.13 },
      ],
    },
    back: { kinds: (e, t) => (e === 0 && t === 3 ? `door` : `window`) },
    right: { kinds: () => `window` },
    left: { kinds: () => `window` },
    extra: (e, t, n) => {
      let r = n.H,
        i = Df(e, t, n, `euSlate`, 45 * V, 0.5, `euZinc`);
      for (let i of [-6.3, 6.3])
        Vf(e, t, {
          x: i,
          w: 1.2,
          h: 0.9,
          H: r,
          span: n.D,
          pitch: 45 * V,
          rt: 0,
          zf: n.D / 2 - 0.7,
          mat: `euLimeWarm`,
          roof: `euZinc`,
          trim: `trimWhite`,
          type: `round`,
        });
      for (let n of [-3.2, 3.2])
        A(e, t, `euLimeWarm`, n, -1.5, r, i + 0.6, 0.9, 0.7);
      let a = i + 0.1,
        o = 0.9;
      e.box(`euSlate`, t, 0, -1, 1, i - 1.5, a, -1, 1);
      for (let [n, r] of [
        [-0.9, -0.9],
        [o, -0.9],
        [-0.9, o],
        [o, o],
      ])
        e.box(
          `euLimeWarm`,
          t,
          0,
          n - 0.12,
          n + 0.12,
          a,
          a + 1.8,
          r - 0.12,
          r + 0.12,
        );
      (e.add(
        `bronze`,
        new s(0.18, 0.42, 0.7, 12, 1, !0).translate(0, a + 1.1, 0),
        t,
        0,
      ),
        e.box(`euLimeWarm`, t, 0, -1.1, 1.1, a + 1.8, a + 2.05, -1.1, 1.1),
        e.add(
          `euSlate`,
          new w(1.1, 12, 6, 0, Math.PI * 2, 0, Math.PI / 2)
            .scale(1, 1.2, 1)
            .translate(0, a + 2.05, 0),
          t,
          0,
        ),
        e.add(
          `euLead`,
          new s(0.03, 0.05, 1.4, 6).translate(0, a + 3.9, 0),
          t,
          0,
        ),
        e.box(H, t, 0, 0, 0.55, a + 4.2, a + 4.45, -0.01, 0.01));
    },
  };
}
