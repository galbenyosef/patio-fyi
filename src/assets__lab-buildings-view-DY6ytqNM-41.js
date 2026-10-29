// assets__lab-buildings-view-DY6ytqNM 41 — add
// Lines 13112-13291 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function fi() {
  let e = (e, t, n) => {
      let r = 2 * n.bw,
        i = 4 * n.bw,
        a = (r + i) / 2;
      for (let o = 1; o + 2 <= n.top + 1; o += 2) {
        let s = n.ys[o],
          c = o + 2 <= n.top ? n.ys[o + 2] : n.H;
        for (let [o, l] of [
          [
            [r, s],
            [a, c],
          ],
          [
            [a, c],
            [i, s],
          ],
          [
            [r, c],
            [a, s],
          ],
          [
            [a, s],
            [i, c],
          ],
        ])
          Ve(
            e,
            `moWhite`,
            t,
            Mr(n, (o[0] + l[0]) / 2, (o[1] + l[1]) / 2),
            o[0],
            o[1],
            l[0],
            l[1],
            0.22,
            0.1,
            0.35,
          );
        if (
          (F(e, `moWhite`, t, n, r, i, s - 0.1, s + 0.1, 0.1, 0.35), o % 4 == 3)
        )
          for (let a of [r + 2, i - 2.5])
            zr(e, t, n.grid[o][mr(n, a)], a, s, -1.8, 3.2, 1.3);
      }
    },
    t = (e, t, n) => {
      let r = n.H + 1.2,
        o = n.W - 0.8,
        s = n.D - 0.8,
        c = new T(
          [
            [s / 2, 0],
            [-s / 2, 0],
            [-s / 2, 8],
          ].map(([e, t]) => new y(e, t)),
        );
      e.add(
        `moGlassDark`,
        new w(c, { depth: o, bevelEnabled: !1 })
          .rotateY(Math.PI / 2)
          .translate(-o / 2, r, 0),
        t,
        0,
      );
      let l = Math.atan2(8, s),
        u = Math.hypot(8, s);
      for (let n = -o / 2; n <= o / 2 + 0.01; n += o / 8)
        e.add(
          `aluminum`,
          new a(0.15, 0.15, u).rotateX(l).translate(n, r + 4 + 0.08, 0),
          t,
          0,
        );
      (e.box(
        `aluminum`,
        t,
        0,
        -o / 2,
        o / 2,
        r + 8 - 0.1,
        r + 8 + 0.2,
        -s / 2 - 0.1,
        -s / 2 + 0.2,
      ),
        e.add(
          `moSilver`,
          new C(0.05, 0.12, 9, 8).translate(8, r + 8 + 4.5, -s / 2 + 0.5),
          t,
          0,
        ),
        e.add(
          `beacon`,
          new i(0.18, 8, 6).translate(8, r + 8 + 9.1, -s / 2 + 0.5),
          t,
          0,
        ));
    },
    n = (e, t, n) => {
      for (let r of [3, 8, 24, 29])
        Br(
          e,
          t,
          n.grid[0][mr(n, r)],
          r - 1.4,
          r + 1.4,
          0,
          1.2,
          2.6,
          `granite`,
          0.5,
        );
    };
  return {
    key: `moCorpHQ`,
    name: `Vantage Holdings HQ`,
    plain: 5003364,
    desc: `Corporate headquarters tower: dark curtain wall with deep aluminium fins, a full-height clear-glass atrium slot braced by a white steel diagrid with sky-garden trees behind it, tall lobby under a canopy, and a sloped glass crown with the VANTAGE logo.`,
    W: 32,
    D: 26,
    style: {
      wall: `moCharcoal`,
      t: 0.3,
      bay: 5.33,
      floors: [7.5, ...pr(13, 4)],
      parapet: 1.2,
      parapetMat: `moCharcoal`,
      curtain: {
        glass: `moGlassDark`,
        spandrel: `moCharcoal`,
        mullion: `aluminum`,
        module: 2.67,
        fin: 0.18,
        sill: 0.25,
        head: 0.65,
      },
      ribbon: {
        glass: `moGlassClear`,
        spandrel: `aluminum`,
        mullion: `aluminum`,
        module: 1.33,
        fin: 0.03,
        sill: 0.1,
        head: 0.15,
      },
      lobby: {
        rec: 2,
        frame: `moCharcoal`,
        glass: `moGlassClear`,
        head: 1.5,
        headMat: `moCharcoal`,
        column: `moSilver`,
        canopy: `moSilver`,
      },
    },
    front: {
      kinds: (e, t) =>
        e === 0
          ? t === 2 || t === 3
            ? `lobbyDoor`
            : `lobby`
          : t === 2 || t === 3
            ? `ribbon`
            : `curtain`,
      extra: A(e, n),
      signs: [
        {
          mat: `moSignVantage`,
          rect: [2.5, 29.5, 59.65, 60.6],
          z0: 0.02,
          z1: 0.06,
        },
      ],
    },
    back: { kinds: (e) => (e === 0 ? `lobby` : `curtain`) },
    right: { kinds: (e) => (e === 0 ? `lobby` : `curtain`) },
    left: { kinds: (e) => (e === 0 ? `lobby` : `curtain`) },
    extra: t,
  };
}
