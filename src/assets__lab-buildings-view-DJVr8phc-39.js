// assets__lab-buildings-view-DJVr8phc 39 — add
// Lines 12584-12786 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function li() {
  return {
    key: `moBusHub`,
    name: `Central Bus Interchange`,
    plain: 12236461,
    desc: `Bus interchange: a low glazed ticket hall under a wavy zinc canopy with a timber soffit and amber edge light, carried on branching steel tree columns over the forecourt, hanging departure board, bay signs, twin-faced clock and benches.`,
    W: 44,
    D: 14,
    style: {
      wall: `moConcLight`,
      t: 0.3,
      bay: 5.5,
      floors: [5],
      parapet: 0.4,
      curtain: {
        glass: `moGlassClear`,
        spandrel: `moCharcoal`,
        mullion: `moYellow`,
        module: 1.4,
        fin: 0.05,
        sill: 0.1,
        head: 0.6,
      },
      lobby: {
        rec: 0.8,
        frame: `moYellow`,
        glass: `moGlassClear`,
        head: 0.6,
        headMat: `moCharcoal`,
        column: `moCharcoal`,
      },
      door: {
        w: 1.1,
        h: 2.3,
        transom: 0,
        frame: `moCharcoal`,
        mat: `moCharcoal`,
      },
    },
    front: {
      kinds: (e, t) =>
        t === 3 || t === 4
          ? `lobbyDoor`
          : t === 0 || t === 7
            ? `solid`
            : `curtain`,
      extra: (e, t, n) => {
        for (let r of [3, 9, 35, 41]) {
          let i = n.grid[0][hr(n, r)];
          e.box(`moTimber`, t, i, r - 1.2, r + 1.2, 0.42, 0.48, 0.5, 0.95);
          for (let n of [r - 1, r + 1])
            e.box(`moCharcoal`, t, i, n - 0.04, n + 0.04, 0, 0.42, 0.55, 0.9);
        }
      },
      signs: [
        {
          mat: `moSignInterchange`,
          rect: [7, 37, 4.45, 5.35],
          z0: 0.02,
          z1: 0.05,
        },
      ],
    },
    back: { kinds: (e, t) => (t === 2 ? `door` : `solid`) },
    right: { kinds: () => `curtain` },
    left: { kinds: () => `curtain` },
    extra: (e, t, n) => {
      let i = -n.W / 2 - 1.5,
        a = (n.W / 2 + 1.5 - i) / 24,
        o = -n.D / 2 - 0.5,
        c = n.D / 2 + 3.6,
        l = (e) => 7.4 + 0.9 * Math.sin((e / 22) * Math.PI * 2);
      for (let n = 0; n < 24; n++) {
        let s = i + n * a,
          u = s + a,
          d = l(s),
          f = l(u),
          p = Math.hypot(a, f - d) + 0.02,
          m = Math.atan2(f - d, a),
          h = (s + u) / 2,
          g = (d + f) / 2;
        (e.add(
          `moZincLight`,
          new r(p, 0.16, c - o).rotateZ(m).translate(h, g + 0.08, (o + c) / 2),
          t,
          0,
        ),
          e.add(
            `moTimber`,
            new r(p, 0.1, c - o - 0.3)
              .rotateZ(m)
              .translate(h, g - 0.05, (o + c) / 2),
            t,
            0,
          ),
          e.add(
            `moLedAmber`,
            new r(p, 0.08, 0.06).rotateZ(m).translate(h, g + 0.04, c + 0.03),
            t,
            0,
          ));
      }
      for (let r of [-15, 0, 15]) {
        let i = n.D / 2 + 2.3,
          a = l(r) - 1.6;
        e.add(
          `moSilver`,
          new s(0.18, 0.26, a, 10).translate(r, a / 2, i),
          t,
          0,
        );
        for (let [n, o] of [
          [-2.4, -1.4],
          [2.4, -1.4],
          [-2.2, 1.1],
          [2.2, 1.1],
        ])
          D(
            e,
            `moSilver`,
            t,
            0,
            [r, a - 0.1, i],
            [r + n, l(r + n) - 0.1, i + o],
            0.12,
          );
      }
      for (let r = -18; r <= 18; r += 6)
        e.box(`moSilver`, t, 0, r - 0.1, r + 0.1, n.H, l(r) - 0.1, -1.1, -0.9);
      let u = n.D / 2 + 1.6;
      for (let n of [-5.5, 5.5])
        e.add(
          pr,
          new s(0.02, 0.02, l(n) - 5, 4).translate(n, (l(n) + 5) / 2 - 0.05, u),
          t,
          0,
        );
      e.box(`moCharcoal`, t, 0, -6, 6, 4, 5.1, u - 0.12, u + 0.12);
      for (let n of [1, -1])
        e.box(
          `moSignDepart`,
          t,
          0,
          -5.8,
          5.8,
          4.1,
          5,
          u + n * 0.12,
          u + n * 0.13,
          {
            planar: (e, t) => [
              n > 0 ? (e + 5.8) / 11.6 : (5.8 - e) / 11.6,
              (t - 4.1) / 0.9,
            ],
          },
        );
      ([`A1`, `A2`, `A3`, `A4`].forEach((n, r) => {
        let i = -16 + r * 10.6;
        (e.box(
          `moSignBay${r}`,
          t,
          0,
          i - 0.6,
          i + 0.6,
          l(i) - 1.35,
          l(i) - 0.25,
          c - 0.3,
          c - 0.28,
          { planar: (e, t) => [(e - i + 0.6) / 1.2, (t - l(i) + 1.35) / 1.1] },
        ),
          e.add(
            pr,
            new s(0.015, 0.015, 0.3, 4).translate(i, l(i) - 0.15, c - 0.29),
            t,
            0,
          ));
      }),
        e.add(
          `moCharcoal`,
          new s(0.12, 0.12, 3.4, 8).translate(-10, 1.7, n.D / 2 + 2.6),
          t,
          0,
        ));
      for (let r of [1, -1])
        e.add(
          `moClock`,
          new y(0.5, 20)
            .rotateY(r > 0 ? 0 : Math.PI)
            .translate(-10, 3.8, n.D / 2 + 2.6 + r * 0.08),
          t,
          0,
        );
      e.add(
        `moCharcoal`,
        new s(0.55, 0.55, 0.14, 20)
          .rotateX(Math.PI / 2)
          .translate(-10, 3.8, n.D / 2 + 2.6),
        t,
        0,
      );
    },
  };
}
