// assets__lab-buildings-view-DY6ytqNM 149 — box
// Lines 47781-47974 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function Dp() {
  let e = (e, t) => (n, r, i) => {
      for (let a of e) {
        let e = i.grid[0][W(i, a)];
        (n.box(
          `euRubble`,
          r,
          e,
          a - 0.34,
          a + 0.34,
          0,
          0.5,
          t - 0.34,
          t + 0.34,
        ),
          n.box(`euOak`, r, e, a - 0.17, a + 0.17, 0.5, 3, t - 0.17, t + 0.17));
        for (let i of [-1, 1])
          k(n, `euOak`, r, e, [a, 2.1, t], [a + i * 0.9, 2.95, t], 0.14);
      }
    },
    t = (e, t, n) => (r, i, a) => {
      for (let o = 0; o < a.nb; o++) {
        let s = o === 0 ? e : Math.max(e, o * a.bw),
          c = o === a.nb - 1 ? t : Math.min(t, (o + 1) * a.bw);
        r.box(
          `euOak`,
          i,
          a.grid[0][o],
          s,
          c,
          2.7199999999999998,
          3,
          n - 0.18,
          n + 0.18,
        );
      }
    },
    n = 9 / 2 - 0.25,
    r = Array.from({ length: 8 }, (e, t) => -4.75 + (t * 23.5) / 7),
    i = 4.75,
    o = [-1.5, 6.4 / 2, 7.9];
  return {
    key: `euMarketHall`,
    name: `La Halle de Saint-Aubert`,
    plain: 7224104,
    desc: `French covered market hall: a huge brown-tiled roof on a boarded frieze carried by braced oak posts on stone plinths, an enclosed stone core of stall fronts beneath, boarded gables, a louvred ridge lantern and trestle stalls of produce.`,
    W: 24,
    D: 16,
    style: {
      wall: `euRubble`,
      t: 0.3,
      bay: 3.5,
      floors: [3.6],
      store: { frame: `woodDark`, fascia: `woodDark` },
      awning: { mat: `euAwnOchre`, depth: 1.2, drop: 0.5 },
      door: {
        w: 1.2,
        h: 2.3,
        transom: 0,
        frame: `woodDark`,
        mat: `euDoorOak`,
        rec: 0.2,
      },
      base: { mat: `euGranite`, h: 0.3, out: 0.03 },
    },
    tiers: [
      {
        W: 14,
        D: 7,
        floors: [3.6],
        front: {
          kinds: () => `store`,
          extra: A(e(r, n), t(-4.95, 18.95, n), (e, t, n) => {
            let r = [`euApple`, `euOrange`, `euCabbage`];
            for (let i = 0; i < 3; i++) {
              let a = 1.5 + i * 4.2,
                o = n.grid[0][W(n, a)];
              e.box(`wood`, t, o, a - 1.1, a + 1.1, 0.8, 0.86, 1.5, 2.5);
              for (let n of [-1, 1])
                for (let r of [-0.4, 0.4])
                  e.box(
                    `wood`,
                    t,
                    o,
                    a + n - 0.04,
                    a + n + 0.04,
                    0,
                    0.8,
                    2 + r - 0.04,
                    2 + r + 0.04,
                  );
              for (let n = 0; n < 3; n++)
                (e.box(
                  `wood`,
                  t,
                  o,
                  a - 1 + n * 0.7,
                  a - 0.4 + n * 0.7,
                  0.86,
                  1.08,
                  1.6,
                  2.3,
                ),
                  e.box(
                    r[(i + n) % 3],
                    t,
                    o,
                    a - 0.97 + n * 0.7,
                    a - 0.43 + n * 0.7,
                    1.08,
                    1.2,
                    1.63,
                    2.27,
                  ));
              e.box(`euCanvas`, t, o, a - 1.2, a + 1.2, 2.2, 2.25, 1.3, 2.7);
              for (let n of [-1.15, 1.15])
                e.box(
                  `wood`,
                  t,
                  o,
                  a + n - 0.03,
                  a + n + 0.03,
                  0.86,
                  2.2,
                  2.62,
                  2.68,
                );
            }
          }),
        },
        back: { kinds: () => `store`, extra: A(e(r, n), t(-4.95, 18.95, n)) },
        left: { kinds: () => `door`, extra: A(e(o, i), t(-4.3, 10.7, i)) },
        right: { kinds: () => `door`, extra: A(e(o, i), t(-4.3, 10.7, i)) },
      },
      {
        floors: [0.9],
        soffit: !0,
        style: {
          wall: `euBoards`,
          base: null,
          roof: {
            ridge: `x`,
            pitch: 42 * H,
            over: 0.9,
            mat: `euTileBrown`,
            fascia: `euOak`,
            gutter: !1,
          },
        },
        front: { kinds: () => `solid` },
        back: { kinds: () => `solid` },
        left: {
          kinds: () => `solid`,
          extra: Hf({
            mat: `euOak`,
            kinds: () => `solid`,
            win: {},
            floors: [],
            skip: () => !0,
            gable: 42 * H,
            gOff: 0.3,
            gSp: 1.8,
          }),
        },
        right: {
          kinds: () => `solid`,
          extra: Hf({
            mat: `euOak`,
            kinds: () => `solid`,
            win: {},
            floors: [],
            skip: () => !0,
            gable: 42 * H,
            gOff: 0.3,
            gSp: 1.8,
          }),
        },
      },
    ],
    extra: (e, t, n) => {
      let r = n.roofTop - 0.3;
      (e.box(`euBoards`, t, 0, -2.5, 2.5, r - 0.5, r + 1.2, -0.9, 0.9),
        e.box(`louver`, t, 0, -2.4, 2.4, r + 0.1, r + 1, -0.95, 0.95));
      for (let n of [-1, 1])
        e.add(
          `euTileBrown`,
          new a(5.6, 0.1, 1.5).rotateX(n * 0.7).translate(0, r + 1.65, n * 0.5),
          t,
          0,
        );
      e.box(`euOak`, t, 0, -2.9, 2.9, r + 2.05, r + 2.2, -0.08, 0.08);
    },
  };
}
