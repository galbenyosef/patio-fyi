// assets__lab-buildings-view-DJVr8phc 92 — box
// Lines 28264-28495 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function Ic(e, t, n, r, a, o) {
  (e.add(
    `concrete`,
    new s(a + 0.2, a + 0.2, 0.3, 20).translate(n, 0.15, r),
    t,
    0,
  ),
    e.add(
      `amTinGalv`,
      new s(a, a, o, 24, 1, !0).translate(n, o / 2 + 0.3, r),
      t,
      0,
      { swap: !0 },
    ),
    e.add(
      `amTinGalv`,
      new i(a + 0.15, a * 0.6, 24).translate(n, o + 0.3 + a * 0.3, r),
      t,
      0,
    ),
    e.add(
      `amTinGalv`,
      new s(0.35, 0.35, 0.4, 10).translate(n, o + 0.3 + a * 0.6 + 0.1, r),
      t,
      0,
    ));
  for (let i = 0.9; i < o; i += 0.4)
    e.box(Io, t, 0, n - 0.25, n + 0.25, i, i + 0.04, r + a + 0.1, r + a + 0.14);
  for (let i of [-1, 1])
    e.box(
      Io,
      t,
      0,
      n + i * 0.25 - 0.03,
      n + i * 0.25 + 0.03,
      0.6,
      o + 0.3,
      r + a,
      r + a + 0.16,
    );
}
function Lc() {
  let e = [4, 3.6, 3.6, 3.6],
    t = 40 * Fo,
    n = 14.8 + 5 * Math.tan(t);
  return {
    key: `amFeedMill`,
    name: `Farmers Co-op Feed Mill`,
    plain: 10988976,
    desc: `Co-op feed mill and grain office: four-storey corrugated-steel elevator house with a head house on the ridge, bucket-elevator leg and spouts to a steel grain bin, brick office and warehouse with a loading dock, parapet sign and truck scale.`,
    W: 10,
    D: 10,
    style: {
      wall: `amTinGalv`,
      t: 0.25,
      bay: 3.33,
      floors: e,
      win: {
        w: 0.9,
        h: 0.9,
        sill: 1.4,
        type: `grid`,
        lites: [2, 2],
        frame: F,
        rec: 0.08,
        curtains: 0,
      },
      door: {
        w: 1,
        h: 2.2,
        transom: 0,
        frame: F,
        mat: `amSteelDoor`,
        rec: 0.1,
      },
      base: { mat: `concrete`, h: 0.8, out: 0.05 },
      corners: F,
      roof: { ridge: `z`, pitch: t, over: 0.3, mat: `amRibRed`, fascia: F },
    },
    front: {
      kinds: (e, t) =>
        e === 3 && t === 1
          ? `window`
          : e === 0
            ? `solid`
            : t === 1
              ? `window`
              : `solid`,
      extra: xs({
        u: 5,
        w: 15,
        d: 8,
        S: {
          wall: `amBrickRust`,
          t: 0.3,
          bay: 3.5,
          floors: [4.4],
          parapet: 1.5,
          win: {
            w: 1.6,
            h: 1.4,
            sill: 1.1,
            type: `grid`,
            lites: [3, 2],
            frame: F,
            rec: 0.12,
            curtains: 0.4,
          },
          door: {
            w: 1.1,
            h: 2.3,
            transom: 0.4,
            frame: F,
            glazed: !0,
            mat: `amDoorGreen`,
            rec: 0.2,
            hood: F,
          },
          loading: { type: `rollup`, w: 3, h: 3.4 },
          base: { mat: `concrete`, h: 0.45, out: 0.03 },
          cornice: { type: `classic`, mat: `limestone`, h: 0.25, out: 0.1 },
        },
        front: {
          kinds: (e, t) => (t === 0 ? `door` : t === 2 ? `loading` : `window`),
          signs: [
            {
              mat: `signAmCoop`,
              rect: [0.4, 14.6, 4.5, 5.55],
              z0: 0.02,
              z1: 0.05,
            },
          ],
        },
        right: { kinds: (e, t) => (t === 1 ? `loading` : `window`) },
        left: { kinds: () => `window` },
        then: (e, t, n) => {
          for (let [r, i] of [
            [-1, n.faces.left],
            [1, n.faces.right],
          ])
            e.box(
              `amBrickRust`,
              t,
              i.grid[0][0],
              r < 0 ? -7.5 : 5,
              r < 0 ? -5 : 7.5,
              0,
              5.9,
              -4,
              -3.7,
            );
          let r = n.faces.front.grid[0][0];
          (e.box(`concrete`, t, r, -7.5, 7.5, 0, 0.08, 4, 9),
            e.box(Io, t, r, -6.8, -3.2, 0.08, 0.1, 5, 8.4));
          for (let n = -6.6; n < -3.3; n += 0.3)
            e.box(Io, t, r, n, n + 0.04, 0.1, 0.12, 5, 8.4);
        },
      }),
    },
    back: {
      kinds: (e, t) =>
        e === 0 && t === 1 ? `door` : e % 2 && t !== 1 ? `window` : `solid`,
    },
    right: {
      kinds: (e, t) => (e % 2 && t === 1 ? `window` : `solid`),
      bay: 3.2,
    },
    left: {
      kinds: (e, t) =>
        e === 0 && t === 1
          ? `door`
          : e % 2 == 0 && t === 2
            ? `window`
            : `solid`,
      bay: 3.2,
    },
    extra: (e, t) => {
      let r = n - 1.2;
      (e.box(`amTinGalv`, t, 0, -1.6, 1.6, r, r + 3, -2, 2),
        we(
          e,
          Uo(t, Vo(0, r + 3, 0)),
          {
            roof: {
              ridge: `z`,
              pitch: 35 * Fo,
              over: 0.25,
              mat: `amRibRed`,
              fascia: F,
            },
          },
          3.2,
          4,
          0,
        ),
        us(
          e,
          t,
          0,
          `amTinGalv`,
          [
            [-1.6, r + 3],
            [1.6, r + 3],
            [0, r + 3 + 1.6 * Math.tan(35 * Fo)],
          ],
          1.9,
          2,
        ),
        us(
          e,
          t,
          0,
          `amTinGalv`,
          [
            [-1.6, r + 3],
            [1.6, r + 3],
            [0, r + 3 + 1.6 * Math.tan(35 * Fo)],
          ],
          -2,
          -1.9,
        ),
        Zs(e, t, 0, 0, r + 1.2, 0.9, 0.9, 2.05, { lites: [2, 2] }),
        e.box(`amTinGalv`, t, 0, 5, 5.9, 0, r + 1, -1.5, -0.6),
        e.box(`amTinGalv`, t, 0, 1.6, 5.9, r + 0.4, r + 1, -1.5, -0.6),
        Ic(e, t, 9.2, -1.8, 2.6, 7.5),
        D(e, `amTinGalv`, t, 0, [1.6, r + 1.6, -1], [9.2, 9.66, -1.8], 0.28),
        D(e, `amTinGalv`, t, 0, [-1.6, r + 1.4, 1], [-6.2, 4.6, 3.4], 0.24));
      for (let n of [4, 7.6, 11.2])
        e.box(`amTinGalv`, t, 0, 5.9, 6.05, n - 0.03, n + 0.03, -1.6, -0.5);
    },
  };
}
