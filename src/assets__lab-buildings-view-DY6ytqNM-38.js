// assets__lab-buildings-view-DY6ytqNM 38 — math
// Lines 12280-12583 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function oi() {
  return {
    key: `moUniLab`,
    name: `Maxwell Science Building`,
    plain: 12414022,
    desc: `University lab building: glass floors screened by a close rhythm of terracotta baguettes on aluminium rails, glazed ground floor with a timber-lined entrance canopy, louvred plant penthouse crowned by six tall fume-exhaust stacks.`,
    W: 38,
    D: 22,
    style: {
      wall: `moTerracotta`,
      t: 0.35,
      bay: 4.75,
      floors: [5, 4.2, 4.2, 4.2],
      parapet: 0.6,
      parapetMat: `moCharcoal`,
      curtain: {
        glass: `glass`,
        spandrel: `moCharcoal`,
        mullion: `moCharcoal`,
        module: 1.6,
        fin: 0.04,
        sill: 0.1,
        head: 0.7,
      },
      lobby: {
        rec: 1,
        frame: `moCharcoal`,
        glass: `moGlassClear`,
        head: 0.8,
        headMat: `moTerracotta`,
        column: `moCharcoal`,
      },
      win: {
        w: 2.4,
        h: 2.2,
        sill: 0.9,
        type: `grid`,
        lites: [2, 1],
        frame: `moCharcoal`,
        rec: 0.25,
        curtains: 0.5,
      },
      door: {
        w: 1.2,
        h: 2.3,
        transom: 0,
        frame: `moCharcoal`,
        glazed: !0,
        mat: `moCharcoal`,
      },
    },
    front: {
      kinds: (e, t) =>
        e === 0 ? (t === 3 ? `lobbyDoor` : `lobby`) : `curtain`,
      extra: A(
        (e, t, n) => {
          for (let r = 1; r <= n.top; r++) {
            let i = n.ys[r],
              a = Nr(n, r);
            F(e, `aluminum`, t, n, 0, n.L, i - 0.08, i + 0.08, 0, 0.62);
            for (let o = 0.3; o < n.L - 0.1; o += 0.48)
              e.box(
                `moTerracotta`,
                t,
                n.grid[r][mr(n, o)],
                o - 0.07,
                o + 0.07,
                i + 0.08,
                a - 0.08,
                0.42,
                0.56,
              );
          }
          F(e, `aluminum`, t, n, 0, n.L, n.H - 0.08, n.H + 0.08, 0, 0.62);
        },
        Pr({
          a0: 9,
          a1: 24,
          y: 4.1,
          d: 3,
          mat: `moCharcoal`,
          soffit: `moTimber`,
          edge: `moCharcoal`,
          rods: [9.5, 23.5],
          sign: `moSignMaxwell`,
          sa: 11,
          sb: 22,
        }),
      ),
    },
    back: { kinds: (e, t) => (e === 0 && t === 4 ? `door` : `window`) },
    right: { kinds: (e) => (e === 0 ? `lobby` : `window`) },
    left: { kinds: (e) => (e === 0 ? `lobby` : `window`) },
    extra: (e, t, n) => {
      let r = n.H;
      (e.box(`louver`, t, 0, -12, 10, r, r + 4, -8, 2),
        e.box(`moCharcoal`, t, 0, -12.2, 10.2, r + 4, r + 4.2, -8.2, 2.2));
      for (let n = 0; n < 6; n++) {
        let i = -10 + n * 3.6;
        (e.add(
          `moSilver`,
          new C(0.42, 0.5, 6.5, 12).translate(i, r + 4.2 + 3.25, -3),
          t,
          0,
        ),
          e.add(
            `moCharcoal`,
            new C(0.52, 0.52, 0.5, 12).translate(i, r + 4.4, -3),
            t,
            0,
          ),
          e.add(
            `moSilver`,
            new C(0.58, 0.42, 0.3, 12).translate(i, r + 10.85, -3),
            t,
            0,
          ));
      }
      for (let n of [-8, 0, 8])
        e.box(`moSilver`, t, 0, n - 1, n + 1, r + 4.2, r + 5, 0, 1.8);
    },
  };
}
function si() {
  return {
    key: `moArena`,
    name: `Harbor Sportsplex`,
    plain: 3432588,
    desc: `Sports arena and gym: blue profiled-metal hall under a shallow zinc barrel roof with arched end walls and glazed lunettes, a double-height glass entrance under a canopy on posts, clerestory ribbons, team graphics and big SPORTSPLEX letters.`,
    W: 42,
    D: 34,
    style: {
      wall: `moRibbedBlue`,
      t: 0.35,
      bay: 5.25,
      floors: [6, 6],
      parapet: 0,
      floorMat: [`moPrecast`, `moRibbedBlue`],
      curtain: {
        glass: `moGlassClear`,
        spandrel: `moCharcoal`,
        mullion: `moCharcoal`,
        module: 1.75,
        fin: 0.05,
        sill: 0.05,
        head: 0.5,
      },
      ribbon: {
        glass: `moGlassDark`,
        spandrel: `moRibbedBlue`,
        mullion: `aluminum`,
        module: 1.75,
        fin: 0.04,
        sill: 3.4,
        head: 0.8,
      },
      lobby: {
        rec: 1.2,
        frame: `moCharcoal`,
        glass: `moGlassClear`,
        head: 1.2,
        headMat: `moCharcoal`,
        column: `moYellow`,
      },
      door: {
        w: 1.8,
        h: 2.3,
        transom: 0,
        frame: `moCharcoal`,
        mat: `moCharcoal`,
      },
      base: { mat: `moCharcoal`, h: 0.4, out: 0.03 },
    },
    front: {
      kinds: (e, t) =>
        t >= 2 && t <= 5
          ? e === 0 && (t === 3 || t === 4)
            ? `lobbyDoor`
            : `curtain`
          : `solid`,
      extra: Pr({
        a0: 9.5,
        a1: 32.5,
        y: 4.6,
        d: 3.4,
        mat: `moWhite`,
        edge: `moYellow`,
        lights: 2.3,
        posts: [10.2, 16.2, 21, 25.8, 31.8],
      }),
      signs: [
        { mat: `moSignHawks`, rect: [0.8, 9.6, 6.6, 11.4], z0: 0.02, z1: 0.04 },
        {
          mat: `moSignHawks2`,
          rect: [32.4, 41.2, 6.6, 11.4],
          z0: 0.02,
          z1: 0.04,
        },
      ],
    },
    back: {
      kinds: (e, t) => (e === 1 ? `ribbon` : t === 3 ? `door` : `solid`),
    },
    right: {
      kinds: (e, t) =>
        e === 1 ? `ribbon` : t === 2 || t === 4 ? `door` : `solid`,
    },
    left: {
      kinds: (e, t) => (e === 1 ? `ribbon` : t === 3 ? `door` : `solid`),
    },
    extra: (e, t, n) => {
      let r = n.W / 2,
        i = (r * r + 36) / 12,
        a = Math.asin(r / i),
        s = n.H,
        c = s + 6 - i;
      e.add(
        `moZincLight`,
        new C(i, i, n.D + 1.2, 28, 1, !0, -a, 2 * a)
          .rotateX(-Math.PI / 2)
          .translate(0, c, 0),
        t,
        0,
      );
      for (let i of [-1, 1])
        e.box(
          `moCharcoal`,
          t,
          0,
          i * r - 0.2,
          i * r + 0.2,
          s - 0.3,
          s + 0.1,
          -n.D / 2 - 0.6,
          n.D / 2 + 0.6,
        );
      for (let l of [1, -1]) {
        let u = l * (n.D / 2) - (l > 0 ? n.t : 0),
          d = new T();
        (d.moveTo(-r, s),
          d.lineTo(r, s),
          d.absarc(0, c, i, Math.PI / 2 - a, Math.PI / 2 + a, !1),
          e.add(
            `moRibbedBlue`,
            new w(d, {
              depth: n.t,
              bevelEnabled: !1,
              curveSegments: 20,
            }).translate(0, 0, u),
            t,
            0,
          ));
        let f = i - 1.2,
          p = Math.asin((r - 7) / f),
          m = new T();
        (m.moveTo(-(r - 7), s + 0.8),
          m.lineTo(r - 7, s + 0.8),
          m.absarc(0, c, f, Math.PI / 2 - p, Math.PI / 2 + p, !1),
          e.add(
            `moGlassClear`,
            new w(m, {
              depth: 0.04,
              bevelEnabled: !1,
              curveSegments: 16,
            }).translate(0, 0, l > 0 ? n.D / 2 + 0.01 : -n.D / 2 - 0.05),
            t,
            0,
          ));
        for (let i = -(r - 7) + 2; i < r - 7; i += 2.5)
          e.box(
            `moCharcoal`,
            t,
            0,
            i - 0.05,
            i + 0.05,
            s + 0.8,
            c + Math.sqrt(f * f - i * i) - 0.05,
            (l * n.D) / 2 - 0.02,
            (l * n.D) / 2 + 0.08,
          );
        e.add(
          `moCharcoal`,
          new o(i + 0.05, 0.14, 4, 28, 2 * a)
            .rotateZ(Math.PI / 2 - a)
            .translate(0, c, l * (n.D / 2 + 0.6)),
          t,
          0,
        );
      }
      e.box(
        `moSignSportsplex`,
        t,
        0,
        -12,
        12,
        s + 0.9,
        s + 2.9,
        n.D / 2 + 0.06,
        n.D / 2 + 0.1,
        { planar: (e, t) => [(e + 12) / 24, (t - s - 0.9) / 2] },
      );
    },
  };
}
