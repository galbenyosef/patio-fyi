// assets__lab-buildings-view-DY6ytqNM 115 — box
// Lines 38659-38925 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function fd() {
  return {
    key: `deTaverna`,
    name: `Taverna O Glaros`,
    plain: 15196626,
    desc: `Greek island taverna: limewashed walls with blue shutters and folding shopfronts, a vine-covered pergola over checked-cloth tables, blue timber balcony, terracotta hip roof.`,
    W: 12,
    D: 10,
    style: {
      wall: `deLimeWash`,
      t: 0.3,
      bay: 3,
      floors: [3.4, 3],
      win: ql({
        w: 0.9,
        h: 1.4,
        sill: 0.8,
        lites: [2, 2],
        frame: `deBlue`,
        shutter: `deShutBlue`,
        rec: 0.15,
      }),
      store: { frame: `deBlue`, fascia: `deBlue` },
      balcony: {
        w: 1.1,
        h: 2.2,
        depth: 0.2,
        slab: `deLimeWash`,
        railMat: `deBlue`,
      },
      door: {
        w: 1,
        h: 2.2,
        transom: 0.3,
        frame: `deBlue`,
        mat: `deDoorBlue`,
        glazed: !0,
        rec: 0.2,
      },
      base: { mat: `deFlag`, h: 0.3, out: 0.03 },
      roof: Au,
    },
    front: {
      kinds: (e, t) =>
        e === 0
          ? t === 2
            ? `door`
            : `store`
          : t === 0 || t === 3
            ? `window`
            : `door`,
      signs: [
        {
          mat: `deTavernaSign`,
          rect: [0.6, 5.4, 2.62, 3.02],
          z0: 0.07,
          z1: 0.1,
        },
      ],
      extra: A(
        dd({ a0: 0.3, a1: 11.7, d: 3.8, z0: 1.15, y: 2.75 }),
        Vu({
          a0: 0.15,
          a1: 11.85,
          y: 3.4,
          d: 1,
          mat: `deCedar`,
          rail: `deBlue`,
        }),
        (e, t, n) => {
          for (let r of [1.8, 6, 10.2]) Gu(e, t, n.grid[0][B(n, r)], r, 2.3);
          for (let r of [0.35, 11.65]) {
            let a = n.grid[0][B(n, r)];
            (e.add(
              `dePot`,
              V(0.3, 0.22, 0.6, 10).translate(r, 0.3, 0.45),
              t,
              a,
            ),
              e.add(
                `deGeranium`,
                new i(0.42, 10, 8).translate(r, 0.85, 0.45),
                t,
                a,
              ));
          }
          let r = n.grid[0][2];
          (e.box(`woodDark`, t, r, 9.2, 9.9, 0.1, 1.2, 0.6, 0.66),
            e.box(`deBlack`, t, r, 9.27, 9.83, 0.4, 1.12, 0.66, 0.68));
        },
      ),
    },
    back: { kinds: (e, t) => (e === 0 && t === 1 ? `door` : `window`) },
    right: { kinds: (e, t) => (e === 0 && t === 1 ? `door` : `window`) },
    left: { kinds: (e, t) => (t === 1 ? `solid` : `window`) },
    extra: (e, t, n) => {
      (ku(e, t, n, `deTerra`, 24 * Ul, 0.5, `deTerraDark`),
        j(e, t, `deLimeWash`, 3.5, -2.5, n.H, n.H + 3.2, 0.8, 0.6));
    },
  };
}
var pd = (e) => (t, n, r) => {
  for (let [a, o, s] of e.at) {
    let e = r.grid[a][B(r, o)],
      c = r.ys[a] + s;
    (t.box(z, n, e, o - 0.02, o + 0.02, c + 0.15, c + 0.3, 0, 0.18),
      t.add(`deBlue`, V(0.12, 0.09, 0.22, 8).translate(o, c, 0.16), n, e),
      t.add(
        `deGeranium`,
        new i(0.18, 8, 6).translate(o, c + 0.18, 0.18),
        n,
        e,
      ));
  }
};
function md() {
  let e = {
      wall: `deWhite`,
      t: 0.4,
      bay: 11 / 3,
      floors: [3.6, 3.3],
      win: ql({
        w: 1,
        h: 1.6,
        sill: 0.8,
        lites: [2, 3],
        frame: `woodDark`,
        rec: 0.2,
      }),
      balcony: { w: 1.2, h: 2.4, depth: 0.55, slab: `deMarble`, railMat: z },
      door: {
        w: 1.5,
        h: 2.4,
        transom: 0,
        frame: `woodDark`,
        mat: `deStudDoor`,
        rec: 0.3,
        step: `deMarble`,
      },
      base: { mat: `deAlbero`, h: 0.6, out: 0.02 },
      corners: `deAlbero`,
      belt: { mat: `deAlbero`, h: 0.2, out: 0.04 },
      eaveTrim: `deAlbero`,
      roof: {
        ridge: `x`,
        pitch: 24 * Ul,
        over: 0.45,
        mat: `deTerra`,
        fascia: `deWhite`,
      },
    },
    t = (e, t) => (e === 0 ? (t === 1 ? `door` : `window`) : `balcony`),
    n = (e, t) => (t === 1 ? `solid` : `window`),
    r = (t) =>
      A(
        xu({ kinds: t, S: e, surround: `deAlbero`, sw: 0.18 }),
        Su({ kinds: t, S: e, floors: [0], d: 0.28, pots: !0, crown: !0 }),
      );
  return {
    key: `deAndalus`,
    name: `Casa de las Rejas`,
    plain: 16118764,
    desc: `Andalusian town house: whitewash picked out in albero yellow, projecting iron rejas hung with geranium pots, marble-floored iron balconies, azulejo panel and lantern over a studded zaguán door, tiled gable roof.`,
    W: 11,
    D: 10,
    style: e,
    front: {
      kinds: t,
      extra: A(r(t), (e, t, n) => {
        for (let r = 0; r < n.nb; r++) {
          let i = (r + 0.5) * n.bw,
            a = n.grid[1][r],
            o = n.ys[1];
          for (let n of [-1, 1])
            e.box(
              `deAlbero`,
              t,
              a,
              i + n * 0.6 - (n < 0 ? 0.18 : 0),
              i + n * 0.6 + (n > 0 ? 0.18 : 0),
              o,
              o + 2.61,
              0,
              0.04,
            );
          e.box(
            `deAlbero`,
            t,
            a,
            i - 0.78,
            i + 0.78,
            o + 2.43,
            o + 2.61,
            0,
            0.05,
          );
        }
        let r = n.grid[0][1],
          a = 1.5 * n.bw;
        (e.box(`deAzulejo`, t, r, a - 0.95, a + 0.95, 2.6, 3.15, 0, 0.02),
          e.box(`deAlbero`, t, r, a - 1.05, a + 1.05, 2.5, 2.6, 0, 0.05),
          e.box(`deAlbero`, t, r, a - 1.05, a + 1.05, 3.15, 3.25, 0, 0.05));
        let o = a + 1.35;
        (e.box(z, t, r, o - 0.03, o + 0.03, 2.5, 2.55, 0, 0.4),
          e.add(`brass`, V(0.12, 0.16, 0.4, 6).translate(o, 2.3, 0.4), t, r),
          e.add(`bulb`, new i(0.08, 8, 6).translate(o, 2.28, 0.4), t, r));
      }),
    },
    back: {
      kinds: (e, t) => (e === 0 && t === 1 ? `door` : `window`),
      extra: r((e, t) => (e === 0 && t === 1 ? `door` : `window`)),
    },
    right: {
      kinds: n,
      extra: A(
        r(n),
        pd({
          at: [
            [0, 4.6, 2.4],
            [0, 5.3, 2.7],
            [1, 4.8, 1.2],
          ],
        }),
      ),
    },
    left: {
      kinds: n,
      extra: A(
        r(n),
        pd({
          at: [
            [0, 4.4, 2.5],
            [0, 5.1, 2.2],
            [0, 5.8, 2.6],
          ],
        }),
      ),
    },
    extra: (e, t, n) =>
      j(e, t, `deWhite`, -3.4, -1.6, n.H, n.roofTop + 0.6, 0.8, 0.6),
  };
}
var hd = (e) => (t, n, r) => {
  let a = e.u,
    o = r.grid[e.f][B(r, a)],
    s = r.ys[e.f] + e.y,
    c = 0.4;
  t.box(`deGlobi`, n, o, a - 0.65, a + 0.65, s - 0.4, s - 0.15, 0, 0.35);
  for (let e = 0; e < 3; e++)
    t.box(
      `deGlobi`,
      n,
      o,
      a - 0.45 + e * 0.1,
      a + 0.45 - e * 0.1,
      s - 0.8 + e * 0.13,
      s - 0.67 + e * 0.13,
      0,
      0.3 - e * 0.07,
    );
  (vu(t, n, o, `deBlue`, `round`, a, s - 0.15, s + 1.3, c, 0, 0.02),
    yu(t, n, o, `deGlobi`, `round`, a, s - 0.15, s + 1.3, c, 0.15, 0, 0.2),
    t.add(`deMarble`, V(0.12, 0.17, 1, 10).translate(a, s + 0.35, 0.14), n, o),
    t.add(`deMarble`, new i(0.11, 10, 8).translate(a, s + 0.95, 0.14), n, o),
    t.box(z, n, o, a - 0.02, a + 0.02, s + 1.95, s + 2, 0, 0.5),
    t.add(`bulb`, new i(0.09, 8, 6).translate(a, s + 1.85, 0.5), n, o));
};
