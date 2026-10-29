// assets__lab-buildings-view-DY6ytqNM 43 — box
// Lines 13628-13968 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function hi() {
  let e = [`moLime`, `moOrange`, `moTeal`, `moYellow`, `moPurple`],
    t = (t) => (n, r, i) => {
      let a = _r(t);
      for (let t = 1; t <= i.top; t++)
        for (let o = 0; o < i.nb; o++) {
          let s = i.grid[t][o],
            c = i.ys[t],
            l = o * i.bw,
            u = l + i.bw / 2,
            d = e[Math.floor(a() * e.length)];
          if (a() < 0.35) continue;
          let f = a() < 0.5,
            p = f ? l + 0.15 : u + 0.6,
            m = f ? u - 0.6 : l + i.bw - 0.15;
          n.box(d, r, s, p, m, c + 0.35, c + 2.75, 0, 0.04);
        }
    },
    n = (e, t, n) => {
      let i = 2.6;
      (F(e, `moCharcoal`, t, n, 25, 35, i, 2.8000000000000003, 0.4, 2.8),
        F(
          e,
          `moFoliage`,
          t,
          n,
          25.1,
          34.9,
          2.8000000000000003,
          2.92,
          0.5,
          2.6999999999999997,
        ));
      for (let r of [25.2, 34.7])
        F(
          e,
          `moCharcoal`,
          t,
          n,
          r,
          r + 0.1,
          0,
          i,
          2.5999999999999996,
          2.6999999999999997,
        );
      for (let i = 25.8; i < 34.5; i += 0.8) {
        let a = n.grid[0][mr(n, i)];
        if (
          (e.add(
            `moSilver`,
            new o(0.35, 0.025, 4, 10, Math.PI).translate(i, 0.4, 1.7),
            t,
            a,
          ),
          Math.round(i * 10) % 3 != 0)
        ) {
          for (let n of [-0.55, 0.55])
            e.add(
              `moRubber`,
              new o(0.33, 0.035, 4, 12)
                .rotateY(Math.PI / 2)
                .translate(i + 0.1, 0.35, 1.7 + n),
              t,
              a,
            );
          e.box(r(i), t, a, i + 0.08, i + 0.12, 0.35, 0.8, 1.3, 2.1);
        }
      }
    },
    r = (t) => e[Math.floor(t) % e.length];
  return {
    key: `moStudent`,
    name: `Campus Commons`,
    plain: 9080724,
    desc: `Student housing block: grey panel walls with tall narrow windows and a random "pixel" pattern of lime, orange, teal, yellow and purple panels, glazed common room at street level, green-roofed bike shelter and a rooftop CAMPUS COMMONS sign.`,
    W: 36,
    D: 14,
    style: {
      wall: `moPanelGrey`,
      t: 0.3,
      bay: 3,
      floors: [4, ...pr(5, 3)],
      parapet: 0.8,
      parapetMat: `moCharcoal`,
      win: {
        w: 1,
        h: 2.1,
        sill: 0.55,
        type: `grid`,
        lites: [1, 1],
        frame: `moCharcoal`,
        rec: 0.12,
        curtains: 0.75,
      },
      curtain: {
        glass: `moGlassClear`,
        spandrel: `moCharcoal`,
        mullion: `moCharcoal`,
        module: 1.5,
        fin: 0.04,
        sill: 0.1,
        head: 0.7,
      },
      lobby: {
        rec: 0.8,
        frame: `moCharcoal`,
        glass: `moGlassClear`,
        head: 0.8,
        headMat: `moCharcoal`,
        column: `moLime`,
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
        e === 0 ? (t === 5 ? `lobbyDoor` : `curtain`) : `window`,
      extra: A(t(41), n),
    },
    back: {
      kinds: (e, t) => (e === 0 ? (t === 6 ? `door` : `solid`) : `window`),
      extra: t(43),
    },
    right: {
      kinds: (e, t) => (e > 0 && t !== 2 ? `window` : `solid`),
      extra: t(47),
    },
    left: {
      kinds: (e, t) => (e > 0 && t !== 2 ? `window` : `solid`),
      extra: t(53),
    },
    extra: (e, t, n) => {
      (De(e, t, n, `moSignCampus`, 14, 1.6, 1.5, 0.6),
        Gr(e, t, -15, 15, -6.5, -1, n.H, 0.3));
    },
  };
}
function gi() {
  return {
    key: `moBank`,
    name: `Summit Federal Bank`,
    plain: 5065288,
    desc: `Bank branch: dark polished granite box with a tinted glass banking hall, two lit ATMs and a night-deposit slot, granite monument sign, and a navy drive-up canopy along the side with a teller window and pneumatic-tube terminals.`,
    W: 22,
    D: 16,
    style: {
      wall: `granite`,
      t: 0.4,
      bay: 4.4,
      floors: [5.6],
      parapet: 1.1,
      parapetMat: `moSilver`,
      curtain: {
        glass: `moGlassDark`,
        spandrel: `granite`,
        mullion: `moSilver`,
        module: 1.47,
        fin: 0.06,
        sill: 0.4,
        head: 1.1,
      },
      lobby: {
        rec: 1,
        frame: `moSilver`,
        glass: `moGlassClear`,
        head: 1.1,
        headMat: `granite`,
        column: `granite`,
        canopy: `moSilver`,
      },
      win: {
        w: 1.8,
        h: 1.2,
        sill: 1,
        type: `grid`,
        lites: [2, 1],
        frame: `moSilver`,
        rec: 0.2,
        curtains: 0.3,
      },
      door: { w: 1, h: 2.2, transom: 0, frame: `moSilver`, mat: `moSilver` },
    },
    front: {
      kinds: (e, t) =>
        t === 2 ? `lobbyDoor` : t === 0 || t === 4 ? `solid` : `curtain`,
      extra: (e, t, n) => {
        let r = n.grid[0][0];
        for (let n of [1.3, 3.1])
          (e.box(`moSilver`, t, r, n - 0.6, n + 0.6, 0.7, 2.1, 0, 0.3),
            e.box(`moLedBlue`, t, r, n - 0.3, n + 0.3, 1.45, 1.8, 0.3, 0.31),
            e.box(`moBlack`, t, r, n - 0.35, n + 0.35, 1.1, 1.3, 0.3, 0.42),
            e.box(
              `moSignAtm`,
              t,
              r,
              n - 0.5,
              n + 0.5,
              2.2,
              2.55,
              0.02,
              0.05,
              vr(n - 0.5, n + 0.5, 2.2, 2.55),
            ));
        e.box(`moNavy`, t, r, 0.4, 4, 2.7, 2.95, 0, 0.9);
        let i = n.grid[0][4];
        (e.box(`brass`, t, i, 18.7, 19.5, 1.1, 1.4, 0, 0.1),
          e.box(
            `moSignDeposit`,
            t,
            i,
            18.5,
            19.7,
            1.55,
            1.85,
            0.01,
            0.03,
            vr(18.5, 19.7, 1.55, 1.85),
          ));
        let a = n.grid[0][1],
          o = 2.6;
        (e.box(`granite`, t, a, 3.9, 7.1, 0, 0.6, 2.25, 2.95),
          e.box(`moNavy`, t, a, 4.1, 6.9, 0.6, 2.2, 2.4, 2.8000000000000003));
        for (let n of [1, -1])
          e.box(
            `moSignSummit`,
            t,
            a,
            4.2,
            6.8,
            0.7,
            2.1,
            o + n * 0.2,
            o + n * 0.21,
            {
              planar: (e, t) => [
                n > 0 ? (e - 5.5 + 1.3) / 2.6 : (6.8 - e) / 2.6,
                (t - 0.7) / 1.4,
              ],
            },
          );
      },
      signs: [
        {
          mat: `moSignSummitBand`,
          rect: [3, 19, 5.75, 6.55],
          z0: 0.02,
          z1: 0.05,
        },
      ],
    },
    right: {
      kinds: (e, t) => (t === 1 || t === 2 ? `window` : `solid`),
      extra: (e, t, n) => {
        let r = 1.2,
          i = n.L - 1.2,
          a = 4.2,
          o = 4.4;
        (F(e, `moNavy`, t, n, r, i, a, 4.65, 0, o),
          F(e, `moLed`, t, n, 1.6, i - 0.4, 4.17, a, 0.6, 3.8000000000000003),
          F(
            e,
            `moSignDrive`,
            t,
            n,
            2.2,
            i - 1,
            4.24,
            4.61,
            o,
            4.42,
            vr(2.2, i - 1, 4.24, 4.61),
          ));
        for (let r of [1.6, i - 0.4])
          F(
            e,
            `moSilver`,
            t,
            n,
            r - 0.14,
            r + 0.14,
            0,
            a,
            3.8500000000000005,
            4.130000000000001,
          );
        F(e, `moConcLight`, t, n, r, i, 0, 0.18, 3.7, 4.300000000000001);
        for (let r of [5.2, 10.2]) {
          let i = n.grid[0][mr(n, r)];
          (e.box(
            `moSilver`,
            t,
            i,
            r - 0.3,
            r + 0.3,
            0.18,
            1.5,
            3.7500000000000004,
            4.2,
          ),
            e.box(
              `moLedBlue`,
              t,
              i,
              r - 0.2,
              r + 0.2,
              1.05,
              1.3,
              3.74,
              3.7500000000000004,
            ),
            e.add(
              `moSilver`,
              new C(0.08, 0.08, 2.7, 8).translate(
                r,
                5.7 / 2,
                3.9800000000000004,
              ),
              t,
              i,
            ));
        }
        F(e, `moHazard`, t, n, 0.6, r, 2.7, 2.9, 0.2, o, {
          planar: (e, t, n) => [n, t],
        });
        let s = n.grid[0][mr(n, 7.7)];
        e.box(`moSilver`, t, s, 7, 8.4, 1, 1.08, 0, 0.45);
      },
    },
    left: { kinds: (e, t) => (t === 1 ? `curtain` : `solid`) },
    back: { kinds: (e, t) => (t === 3 ? `door` : `solid`) },
    extra: (e, t, n) => {
      Wr(e, t, 2, -3, 3, 2, n.H, 1.2);
    },
  };
}
