// assets__lab-buildings-view-DY6ytqNM 119 — add
// Lines 39849-40071 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function Od() {
  return {
    key: `dePump`,
    name: `Aïn Zarga Pump House`,
    plain: 9332294,
    desc: `Oasis pump house: mud-brick hut under a rusty lean-to roof, a riveted water tank on a steel stand, pipe manifold with red valve wheels, an irrigation channel and date palms.`,
    W: 6,
    D: 5,
    style: {
      wall: `deMud`,
      t: 0.4,
      bay: 3,
      floors: [3.4],
      parapet: 0,
      win: ql({ w: 0.7, h: 0.6, sill: 1.8, frame: `woodDark`, rec: 0.3 }),
      door: {
        w: 1.1,
        h: 2.2,
        transom: 0,
        frame: `woodDark`,
        mat: `deDoorTeal`,
        rec: 0.3,
        step: `deEarth`,
      },
      base: { mat: `deEarth`, h: 0.4, out: 0.03 },
      corners: `deEarth`,
      roof: Au,
    },
    front: {
      kinds: (e, t) => (t === 0 ? `door` : `solid`),
      extra: (e, t, n) => {
        let r = n.grid[0][1];
        (e.add(
          `deTankBlack`,
          V(0.1, 0.1, 1.4, 10)
            .rotateX(Math.PI / 2)
            .translate(4.8, 0.6, 0.7),
          t,
          r,
        ),
          e.add(
            `deTankBlack`,
            V(0.1, 0.1, 0.62, 10).translate(4.8, 0.3, 1.4),
            t,
            r,
          ),
          e.box(`deConcGrey`, t, r, 4.4, 5.2, 0, 0.35, 1.3, 4.5),
          e.box(`deWater`, t, r, 4.55, 5.05, 0.25, 0.3, 1.5, 4.5),
          e.box(z, t, n.grid[0][0], 2.85, 2.89, 2.6, 2.64, 0, 0.5),
          e.add(
            `bulb`,
            new i(0.1, 8, 6).translate(2.87, 2.45, 0.5),
            t,
            n.grid[0][0],
          ),
          e.box(`deDark`, t, r, 3.3, 3.8, 1.5, 2, 0, 0.03));
      },
    },
    right: {
      kinds: () => `window`,
      extra: (e, t, n) => {
        let r = n.grid[0][0];
        e.add(
          `deTankBlack`,
          V(0.12, 0.12, n.L + 1.2, 10)
            .rotateZ(Math.PI / 2)
            .translate(n.L / 2 + 0.6, 1.2, 0.3),
          t,
          r,
        );
        for (let n of [0.8, 2.6])
          (e.add(
            `deRed`,
            new o(0.2, 0.03, 6, 12).translate(n, 1.65, 0.3),
            t,
            r,
          ),
            e.add(z, V(0.03, 0.03, 0.35, 6).translate(n, 1.42, 0.3), t, r));
        for (let i of [0.4, n.L - 0.4])
          e.box(z, t, r, i - 0.03, i + 0.03, 1.05, 1.3499999999999999, 0, 0.3);
      },
    },
    left: { kinds: () => `solid` },
    back: { kinds: (e, t) => (t === 1 ? `window` : `solid`) },
    extra: (e, t, n) => {
      let r = 0.9,
        i = Math.hypot(n.D + 1, r);
      (e.add(
        `deRustTin`,
        new a(n.W + 0.8, 0.06, i)
          .rotateX(Math.atan2(r, n.D + 1))
          .translate(0, n.H + 0.35, 0),
        t,
        0,
      ),
        e.box(
          `deMud`,
          t,
          0,
          -n.W / 2,
          n.W / 2,
          n.H,
          n.H + 0.75,
          -n.D / 2 + 0.05,
          -n.D / 2 + n.t,
        ),
        e.add(
          `deTankBlack`,
          V(0.1, 0.1, 1.8, 8).translate(-1.8, n.H + 0.9, -1.2),
          t,
          0,
        ),
        e.add(
          `deTankBlack`,
          V(0.16, 0.12, 0.3, 8).translate(-1.8, n.H + 1.9, -1.2),
          t,
          0,
        ));
      let o = n.W / 2 + 2.8,
        s = -0.4,
        c = 4.2;
      for (let [n, r] of [
        [-1, -1],
        [1, -1],
        [1, 1],
        [-1, 1],
      ])
        k(
          e,
          `deRustTin`,
          t,
          0,
          [o + n * 1.3, 0, s + r * 1.3],
          [o + n * 1, c, s + r * 1],
          0.14,
        );
      for (let n of [1.4, 2.8])
        for (let [r, i] of [
          [
            [-1, -1],
            [1, -1],
          ],
          [
            [1, -1],
            [1, 1],
          ],
          [
            [1, 1],
            [-1, 1],
          ],
          [
            [-1, 1],
            [-1, -1],
          ],
        ]) {
          let a = 1.3 - (0.3 * n) / c;
          k(
            e,
            z,
            t,
            0,
            [o + r[0] * a, n, s + r[1] * a],
            [o + i[0] * a, n, s + i[1] * a],
            0.06,
          );
        }
      (e.box(
        `deRustTin`,
        t,
        0,
        o - 1.3,
        o + 1.3,
        c,
        4.3500000000000005,
        -1.7000000000000002,
        0.9,
      ),
        e.add(`deRustTin`, V(1.2, 1.2, 2.2, 16).translate(o, 5.45, s), t, 0),
        e.add(`deRustTin`, new d(1.25, 0.4, 16).translate(o, 6.75, s), t, 0),
        e.add(
          `deTankBlack`,
          V(0.1, 0.1, c, 8).translate(o - 1, c / 2, 0.5),
          t,
          0,
        ));
      for (let n = 0.5; n < 6.4; n += 0.4)
        e.box(
          z,
          t,
          0,
          o + 1.33,
          o + 1.37,
          n,
          n + 0.03,
          -0.65,
          -0.15000000000000002,
        );
      (e.box(z, t, 0, o + 1.33, o + 1.37, 0, 6.6, -0.69, -0.65),
        e.box(
          z,
          t,
          0,
          o + 1.33,
          o + 1.37,
          0,
          6.6,
          -0.15000000000000002,
          -0.11000000000000004,
        ),
        e.add(
          `deTankBlack`,
          V(0.1, 0.1, 1.5, 8)
            .rotateZ(Math.PI / 2)
            .translate(n.W / 2 + 1.05, 1.2, 0.5),
          t,
          0,
        ),
        Dd(e, t, 0, -n.W / 2 - 2.2, 1.5, 8.5, 0.8, 5),
        Dd(e, t, 0, -n.W / 2 - 1.2, -2.4, 7, -0.6, 9),
        Dd(e, t, 0, n.W / 2 + 1, -4, 9.5, 0.5, 13));
    },
  };
}
