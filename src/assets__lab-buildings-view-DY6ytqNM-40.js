// assets__lab-buildings-view-DY6ytqNM 40 — box
// Lines 12787-13111 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function li() {
  return {
    key: `moMetro`,
    name: `Line 3 Metro Pavilion`,
    plain: 10467006,
    desc: `Metro station entrance pavilion: a frameless-looking glass box under a white folded-plate roof, three escalators dropping out of sight behind a row of lit ticket gates, a tall lit M totem with the line roundel.`,
    W: 16,
    D: 10,
    style: {
      wall: `moCharcoal`,
      t: 0.25,
      bay: 4,
      floors: [4.6],
      parapet: 0,
      curtain: {
        glass: `moGlassClear`,
        spandrel: `moCharcoal`,
        mullion: `moCharcoal`,
        module: 1.33,
        fin: 0.02,
        sill: 0.05,
        head: 0.3,
      },
      lobby: {
        rec: 0.25,
        frame: `moCharcoal`,
        glass: `moGlassClear`,
        head: 0.3,
        headMat: `moCharcoal`,
        column: `moCharcoal`,
      },
    },
    front: {
      kinds: (e, t) => (t === 1 || t === 2 ? `lobbyDoor` : `curtain`),
      extra: (e, t, n) => {
        let r = 14.6,
          i = 2.4,
          a = n.grid[0][3];
        (e.box(
          `moCharcoal`,
          t,
          a,
          14.299999999999999,
          14.9,
          0,
          5.2,
          2.1,
          2.6999999999999997,
        ),
          e.box(
            `moCharcoal`,
            t,
            a,
            13.9,
            15.299999999999999,
            5.2,
            6.6,
            2.1999999999999997,
            2.6,
          ));
        for (let n of [1, -1])
          (e.box(
            `moSignM`,
            t,
            a,
            13.98,
            15.219999999999999,
            5.28,
            6.52,
            i + n * 0.2,
            i + n * 0.21,
            {
              planar: (e, t) => [
                n > 0 ? (e - r + 0.62) / 1.24 : (15.219999999999999 - e) / 1.24,
                (t - 5.28) / 1.24,
              ],
            },
          ),
            e.box(
              `moSignLine3`,
              t,
              a,
              14.35,
              14.85,
              4.3,
              4.8,
              i + n * 0.3,
              i + n * 0.31,
              {
                planar: (e, t) => [
                  n > 0 ? (e - r + 0.25) / 0.5 : (14.85 - e) / 0.5,
                  (t - 4.3) / 0.5,
                ],
              },
            ));
      },
    },
    back: { kinds: () => `solid` },
    right: { kinds: () => `curtain` },
    left: { kinds: () => `curtain` },
    extra: (e, t, n) => {
      let r = 0.035;
      e.box(`moBlack`, t, 0, -4.2, 4.2, r, 0.05500000000000001, -4.4, 1.2);
      for (let n of [-2.6, 0, 2.6]) {
        for (let r of [-1, 1])
          e.add(
            `railGlass`,
            new a(0.03, 1, 5.4)
              .rotateX(-0.2)
              .translate(n + r * 0.55, 0.45, -1.6),
            t,
            0,
          );
        (e.add(
          `moSilver`,
          new a(1.2, 0.12, 5.4).rotateX(-0.2).translate(n, -0.12, -1.6),
          t,
          0,
        ),
          e.box(`moSilver`, t, 0, n - 0.65, n + 0.65, r, 0.115, 1, 2.2));
      }
      for (let n = 0; n < 6; n++) {
        let r = -4.5 + n * 1.8;
        (e.box(`moSilver`, t, 0, r - 0.12, r + 0.12, 0, 1, 2.8, 3.8),
          e.box(`moLedLime`, t, 0, r - 0.1, r + 0.1, 1, 1.04, 3.5, 3.7));
      }
      let i = -n.W / 2 - 1.2,
        o = (n.W + 2.4) / 8,
        s = -n.D / 2 - 0.8,
        c = n.D / 2 + 2.2;
      for (let r = 0; r < 8; r++) {
        let l = n.H + (r % 2 ? 1.3 : 0.25),
          u = n.H + (r % 2 ? 0.25 : 1.3),
          d = Math.hypot(o, u - l),
          f = Math.atan2(u - l, o);
        e.add(
          `moWhite`,
          new a(d + 0.02, 0.14, c - s)
            .rotateZ(f)
            .translate(i + (r + 0.5) * o, (l + u) / 2, (s + c) / 2),
          t,
          0,
        );
      }
      for (let r = 0; r <= 8; r += 2)
        e.box(
          `moCharcoal`,
          t,
          0,
          i + r * o - 0.08,
          i + r * o + 0.08,
          n.H,
          n.H + 0.25,
          s + 0.4,
          c - 0.4,
        );
      e.box(
        `moSignMetroBand`,
        t,
        0,
        -6.5,
        6.5,
        n.H - 0.02,
        n.H + 0.2,
        n.D / 2 + 0.3,
        n.D / 2 + 0.34,
        { planar: (e, t) => [(e + 6.5) / 13, (t - n.H + 0.02) / 0.22] },
      );
    },
  };
}
function ui() {
  let e = (e) => (t, n, r) => {
    for (let i = 0; i <= r.top; i++)
      for (let a = 0; a < r.nb; a++) {
        if (e?.(i, a)) continue;
        let o = r.grid[i][a],
          s = a * r.bw,
          c = s + r.bw,
          l = r.ys[i],
          u = Nr(r, i);
        (t.box(`moCharcoal`, n, o, s + 0.7, c - 0.7, l + 1.3, u - 1.1, 0, 0.06),
          t.box(`louver`, n, o, s + 0.8, c - 0.8, l + 1.4, u - 1.2, 0.06, 0.1));
      }
    for (let e = 0; e <= r.nb; e++) {
      let i = Math.min(r.L - 0.2, Math.max(0.2, e * r.bw));
      F(t, `moCharcoal`, n, r, i - 0.2, i + 0.2, 0, r.H + 1.5, 0, 0.5);
    }
  };
  return {
    key: `moDataCentre`,
    name: `NorthPeak Data Centre`,
    plain: 13881027,
    desc: `Data centre: a near-blank precast box with inset louvre panels between deep charcoal piers, small glazed office corner with a gate canopy, bollard line, and a roof packed with twin-fan chillers, generator flues, cable tray and a satellite dish.`,
    W: 46,
    D: 32,
    style: {
      wall: `moPrecast`,
      t: 0.4,
      bay: 5.75,
      floors: [6.5, 6.5],
      parapet: 1.5,
      curtain: {
        glass: `moGlassDark`,
        spandrel: `moCharcoal`,
        mullion: `moCharcoal`,
        module: 1.44,
        fin: 0.05,
        sill: 0.1,
        head: 0.8,
      },
      lobby: {
        rec: 0.8,
        frame: `moCharcoal`,
        glass: `moGlassClear`,
        head: 2,
        headMat: `moCharcoal`,
        column: `moCharcoal`,
      },
      loading: { type: `rollup`, w: 3.6, h: 4.2 },
      door: { w: 1, h: 2.2, transom: 0, frame: `moCharcoal`, mat: `moSilver` },
    },
    front: {
      kinds: (e, t) =>
        t <= 1 ? (e === 0 && t === 0 ? `lobbyDoor` : `curtain`) : `solid`,
      extra: A(
        e((e, t) => t <= 1),
        (e, t, n) => {
          for (let r = 13; r < n.L - 1; r += 1.5)
            Rr(e, t, n.grid[0][mr(n, r)], r, 1, `moCharcoal`, 1);
          let r = n.grid[0][0];
          e.box(`moCharcoal`, t, r, 0.6, 2, 2.6, 2.75, 0.3, 2.8);
          for (let n of [0.7, 1.9])
            e.box(`moSilver`, t, r, n - 0.04, n + 0.04, 0, 2.6, 2.6, 2.7);
          e.box(
            `moSignNorthpeak`,
            t,
            r,
            0.4,
            5.4,
            5.6,
            6.2,
            0.02,
            0.05,
            vr(0.4, 5.4, 5.6, 6.2),
          );
        },
      ),
    },
    back: {
      kinds: (e, t) =>
        e === 0 && (t === 2 || t === 5)
          ? `loading`
          : e === 0 && t === 7
            ? `door`
            : `solid`,
      extra: e((e, t) => e === 0 && (t === 2 || t === 5 || t === 7)),
    },
    right: {
      kinds: (e, t) => (e === 0 && t === 2 ? `door` : `solid`),
      extra: e((e, t) => e === 0 && t === 2),
    },
    left: {
      kinds: (e, t, n) => (t === n - 1 ? `curtain` : `solid`),
      extra: e((e, t) => t === di - 1),
    },
    extra: (e, t, n) => {
      for (let r = 0; r < 5; r++)
        for (let i of [-7, 1]) {
          let a = -17 + r * 7.5;
          (e.box(
            `moWhite`,
            t,
            0,
            a - 2.8,
            a + 2.8,
            n.H,
            n.H + 2.4,
            i - 1.6,
            i + 1.6,
          ),
            e.box(
              `louver`,
              t,
              0,
              a - 2.7,
              a + 2.7,
              n.H + 0.3,
              n.H + 2,
              i - 1.62,
              i + 1.62,
            ));
          for (let r of [-1.4, 1.4])
            (e.add(
              `moCharcoal`,
              new C(1.05, 1.05, 0.5, 14).translate(a + r, n.H + 2.6, i),
              t,
              0,
            ),
              e.add(
                fr,
                new C(0.95, 0.95, 0.02, 14).translate(a + r, n.H + 2.86, i),
                t,
                0,
              ));
        }
      for (let r of [-18, -12, -6])
        e.add(
          `moSilver`,
          new C(0.35, 0.35, 5, 10).translate(r, n.H + 2.5, 11),
          t,
          0,
        );
      (e.box(fr, t, 0, -21, 20, n.H + 0.6, n.H + 0.8, 7.2, 7.8),
        e.add(
          `moWhite`,
          new C(1.4, 0.2, 0.6, 16).rotateX(-1).translate(16, n.H + 2.2, 11),
          t,
          0,
        ),
        e.box(`moCharcoal`, t, 0, 15.9, 16.1, n.H, n.H + 1.9, 10.9, 11.1));
    },
  };
}
var di = 5;
