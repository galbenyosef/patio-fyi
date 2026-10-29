// assets__lab-buildings-view-DY6ytqNM 148 — add
// Lines 47575-47780 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function Ep() {
  let e = 50 * H,
    t = Math.tan(e),
    n = {
      w: 1.3,
      h: 2.5,
      sill: 1,
      type: `grid`,
      lites: [2, 4],
      frame: `euPaintBlack`,
      rec: 0.3,
      curtains: 0.2,
    },
    r = (e, t) => (e === 0 && t === 4 ? `door` : `window`),
    a = (e, t, n) => {
      let r = n.H,
        a = n.L / 5,
        s = n.t;
      for (let i = 0; i < n.nb; i++)
        e.box(
          `euBrickGothic`,
          t,
          n.grid[1][i],
          i * n.bw,
          (i + 1) * n.bw,
          r,
          r + 5.2,
          -s,
          0.4,
        );
      for (let i = 0; i < 5; i++) {
        let l = i * a,
          u = l + a,
          d = (l + u) / 2,
          f = n.grid[1][W(n, d)];
        bf(
          e,
          `euBrickGothic`,
          t,
          f,
          [
            [l, r + 5.2],
            [u, r + 5.2],
            [d, r + 7.8],
          ],
          -s,
          0.4,
        );
        for (let n of [-1, 1])
          bf(
            e,
            `euPlaster`,
            t,
            f,
            tp(d + n * 1.25, r + 3.4, 0.45).concat([
              [d + n * 1.25 + 0.45, r + 0.6],
              [d + n * 1.25 - 0.45, r + 0.6],
            ]),
            0.4,
            0.42,
          );
        (e.add(`euHole`, new c(0.5, 16).translate(d, r + 5.9, 0.41), t, f),
          e.add(
            `euBrickGlazed`,
            new o(0.58, 0.1, 4, 16).translate(d, r + 5.9, 0.42),
            t,
            f,
          ),
          e.box(`euBrickGlazed`, t, f, l, u, r + 5.05, r + 5.25, -s, 0.5));
      }
      for (let o = 0; o <= 5; o++) {
        let s = Math.min(n.L - 0.3, Math.max(0.3, o * a)),
          c = n.grid[1][W(n, s)];
        (e.add(
          `euBrickGothic`,
          new C(0.42, 0.42, 9.3, 8).translate(s, r - 1.5 + 4.65, 0.3),
          t,
          c,
        ),
          e.add(
            `euBrickGlazed`,
            new C(0.5, 0.5, 0.2, 8).translate(s, r + 5.2, 0.3),
            t,
            c,
          ),
          e.add(`euCopper`, new d(0.5, 2, 8).translate(s, r + 8.8, 0.3), t, c),
          e.add(`euGilt`, new i(0.1, 8, 6).translate(s, r + 9.9, 0.3), t, c));
      }
      let l = n.grid[0][4];
      np(e, t, l, 4.5 * n.bw, 3.1, 1, 0.35, `euPlaster`, null, `euBrickGlazed`);
    },
    s = Wf({
      pitch: e,
      prof: Gf(4, t, 0.6),
      mat: `euBrickGothic`,
      rim: `euBrickGlazed`,
      off: 0.4,
      z: 0.1,
    });
  return {
    key: `euGothicHall`,
    name: `Wendemark Town Hall`,
    plain: 7089184,
    desc: `Hanseatic brick-Gothic town hall: dark red brick with glazed-brick trims and buttresses, tall pointed windows with tracery, a pointed portal, a great show-front screen of five gablets with white blind lancets, wind-holes and copper-spired turrets, stepped side gables and a ridge flèche.`,
    W: 28,
    D: 14,
    style: {
      wall: `euBrickGothic`,
      t: 0.4,
      bay: 3.111111111111111,
      floors: [5, 5],
      win: n,
      door: {
        w: 2,
        h: 3.1,
        transom: 0,
        frame: `euBrickGlazed`,
        mat: `euDoorOak`,
        rec: 0.5,
        step: `euGranite`,
      },
      base: { mat: `euGranite`, h: 0.5, out: 0.05 },
      belt: { mat: `euBrickGlazed`, h: 0.25, out: 0.08 },
      pilaster: { mat: `euBrickGothic`, w: 0.5, out: 0.22 },
      roof: {
        ridge: `x`,
        pitch: e,
        over: 0.3,
        mat: `euGlazedTile`,
        fascia: `euBrickGothic`,
      },
    },
    front: {
      kinds: r,
      extra: A(
        rp({
          kinds: r,
          win: n,
          ring: 0.2,
          frame: `euPaintBlack`,
          ringMat: `euBrickGlazed`,
        }),
        a,
      ),
    },
    back: {
      kinds: () => `window`,
      extra: rp({
        kinds: () => `window`,
        win: n,
        ring: 0.2,
        frame: `euPaintBlack`,
        ringMat: `euBrickGlazed`,
      }),
    },
    right: {
      kinds: (e, t) => (t === 1 ? `window` : `solid`),
      noPilaster: !0,
      extra: A(
        s,
        rp({
          kinds: (e, t) => (t === 1 ? `window` : `solid`),
          win: n,
          ring: 0.2,
          frame: `euPaintBlack`,
          ringMat: `euBrickGlazed`,
        }),
      ),
    },
    left: {
      kinds: (e, t) => (t === 1 ? `window` : `solid`),
      noPilaster: !0,
      extra: A(
        s,
        rp({
          kinds: (e, t) => (t === 1 ? `window` : `solid`),
          win: n,
          ring: 0.2,
          frame: `euPaintBlack`,
          ringMat: `euBrickGlazed`,
        }),
      ),
    },
    extra: (e, t, n) => {
      let r = n.roofTop - 0.6;
      e.add(`euCopper`, new C(0.8, 0.8, 2.6, 8).translate(0, r + 1.3, 0), t, 0);
      for (let n = 0; n < 8; n++) {
        let i = (n / 8) * Math.PI * 2 + Math.PI / 8;
        e.box(
          `euHole`,
          af(t, 0, 0, i),
          0,
          -0.18,
          0.18,
          r + 1,
          r + 2.2,
          0.74,
          0.78,
        );
      }
      (e.add(`euCopper`, new d(0.9, 7, 8).translate(0, r + 2.6 + 3.5, 0), t, 0),
        e.add(`euGilt`, new i(0.2, 10, 8).translate(0, r + 9.4, 0), t, 0),
        e.add(`euGilt`, new d(0.05, 0.9, 6).translate(0, r + 10, 0), t, 0));
    },
  };
}
