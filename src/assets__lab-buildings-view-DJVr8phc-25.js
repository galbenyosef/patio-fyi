// assets__lab-buildings-view-DJVr8phc 25 — kinds
// Lines 8599-8924 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function sr() {
  let e = Ht(27, `cSpandrelDark`);
  return (
    (e[14] = e[26] = `louver`),
    [
      {
        key: `decotower`,
        name: `Cascadia Bell Building`,
        plain: 13352863,
        desc: `Art Deco skyscraper: warm limestone piers, black spandrel panels, three setbacks with pylons, stepped crown with four great fins and a steel spire.`,
        W: 26,
        D: 22,
        style: {
          wall: `cDecoStone`,
          floorMat: [`granite`],
          t: 0.45,
          bay: 3.25,
          floors: [7, ...Ht(11, 4)],
          parapet: 1.2,
          win: {
            w: 1.5,
            h: 2.5,
            sill: 0.8,
            type: `grid`,
            lites: [1, 2],
            frame: `brass`,
            panel: `cAnodized`,
            rec: 0.25,
            curtains: 0.3,
          },
          win0: {
            w: 1.9,
            h: 4.6,
            sill: 0.8,
            type: `grid`,
            lites: [2, 4],
            frame: `brass`,
            header: `cDecoStone`,
            rec: 0.3,
            curtains: 0.1,
          },
          door: {
            w: 2.4,
            h: 4,
            transom: 1.5,
            frame: `brass`,
            glazed: !0,
            hood: `brass`,
            step: `granite`,
            rec: 0.8,
          },
          base: { mat: `granite`, h: 1, out: 0.08 },
          pilaster: { mat: `cDecoStone`, w: 0.75, out: 0.35, through: !0 },
          cornice: {
            type: `classic`,
            mat: `cDecoStone`,
            h: 0.5,
            out: 0.3,
            cap: `brass`,
          },
        },
        tiers: [
          {
            front: {
              extra: Qn,
              signs: [
                {
                  mat: `signCvDeco`,
                  rect: [7, 19, 6.15, 6.8],
                  z0: 0.37,
                  z1: 0.41,
                },
              ],
            },
            back: { extra: Qn },
          },
          {
            W: 19,
            D: 16,
            floors: Ht(6, 4),
            front: { extra: Qn },
            back: { extra: Qn },
          },
          { W: 13, D: 11, floors: Ht(4, 4) },
        ],
        front: {
          kinds: (e, t, n) =>
            e === 0 && t === Math.floor(n / 2) ? `door` : `window`,
        },
        back: {
          kinds: (e, t, n) =>
            e === 0 && t === Math.floor(n / 2) ? `door` : `window`,
        },
        extra: $n,
      },
      {
        key: `brutaltower`,
        name: `Harbor Commerce Tower`,
        plain: 10328722,
        desc: `Brutalist office tower: board-formed concrete egg-crate facade, deep-set windows, chamfered corners, glass lobby behind heavy pilotis, concrete penthouse.`,
        W: 26,
        D: 20,
        chamfer: { l: 3.5, r: 3.5 },
        style: {
          wall: `boardConcrete`,
          t: 0.5,
          bay: 3.2,
          floors: [7.5, ...Ht(13, 3.7)],
          parapet: 1,
          win: {
            w: 1.9,
            h: 2,
            sill: 0.95,
            type: `grid`,
            lites: [1, 1],
            frame: M,
            rec: 0.75,
            curtains: 0.35,
          },
          recess: { depth: 3.4, glass: `glassGrey`, frame: M },
          belt: { mat: `boardConcrete`, h: 0.45, out: 0.65 },
          pilaster: {
            mat: `boardConcrete`,
            w: 0.4,
            out: 0.65,
            through: !0,
            floors: Ht(13, 0).map((e, t) => t + 1),
          },
        },
        front: {
          kinds: (e) => (e === 0 ? `recess` : `window`),
          signs: [
            {
              mat: `signCvBrutalBand`,
              rect: [4, 15, 6.85, 7.4],
              z0: 0.01,
              z1: 0.05,
            },
          ],
        },
        corner: { kinds: (e) => (e === 0 ? `recess` : `window`) },
        back: { kinds: (e) => (e === 0 ? `recess` : `window`) },
        right: { kinds: (e) => (e === 0 ? `recess` : `window`) },
        left: { kinds: (e) => (e === 0 ? `recess` : `window`) },
        extra: er,
      },
      {
        key: `glasscondo`,
        name: `Alder Point Residences`,
        plain: 9414579,
        desc: `Slender glass condo tower: blue curtain wall, staggered projecting balconies with glass rails on every floor, tall lobby, glass crown screen over a roof terrace.`,
        W: 18,
        D: 16,
        style: {
          wall: `whiteSpandrel`,
          t: 0.3,
          bay: 3,
          floors: [6, ...Ht(24, 3.1)],
          curtain: {
            glass: `glassBlue`,
            spandrel: `whiteSpandrel`,
            mullion: `aluminum`,
            module: 1.5,
            fin: 0.08,
            sill: 0.25,
            head: 0.35,
          },
          lobby: {
            rec: 1.2,
            frame: `aluminum`,
            glass: `glassGrey`,
            head: 1.4,
            headMat: `whiteSpandrel`,
            column: `granite`,
            canopy: `aluminum`,
          },
        },
        front: {
          kinds: (e, t) =>
            e === 0 ? (t === 2 || t === 3 ? `lobbyDoor` : `lobby`) : `curtain`,
          extra: tr((e, t) => (e + t) % 2 == 0),
          signs: [
            {
              mat: `signCvCondo`,
              rect: [4.5, 13.5, 4.75, 5.35],
              z0: 0.01,
              z1: 0.04,
            },
          ],
        },
        right: {
          kinds: (e) => (e === 0 ? `lobby` : `curtain`),
          extra: tr((e, t) => (e + t) % 2 == 1),
        },
        left: {
          kinds: (e) => (e === 0 ? `lobby` : `curtain`),
          extra: tr((e, t) => (e + t) % 2 == 1),
        },
        back: {
          kinds: (e) => (e === 0 ? `lobby` : `curtain`),
          extra: tr((e, t) => t % 2 == 0 && e % 2 == 0),
        },
        extra: nr,
      },
      {
        key: `resorttower`,
        name: `Hotel Sentinel Cay`,
        plain: 15130834,
        desc: `Island resort slab: white stucco with a balcony on every room, pastel balcony fronts, open lobby, rooftop bar, pool, neon sign and palms.`,
        W: 30,
        D: 14,
        style: {
          wall: `cStuccoWhite`,
          t: 0.35,
          bay: 3,
          floors: [5.6, ...Ht(12, 3.2)],
          parapet: 1.2,
          win: {
            w: 1.6,
            h: 1.4,
            sill: 0.9,
            type: `grid`,
            lites: [2, 1],
            frame: `aluminum`,
            rec: 0.12,
            curtains: 0.6,
          },
          balcony: {
            w: 2.2,
            h: 2.4,
            depth: 1.6,
            slab: `cStuccoWhite`,
            rail: `glass`,
            railMat: `aluminum`,
          },
          lobby: {
            rec: 2.4,
            frame: `aluminum`,
            glass: `glassGrey`,
            head: 1,
            headMat: `cStuccoWhite`,
            column: `cStuccoWhite`,
            canopy: `cStuccoAqua`,
          },
        },
        front: {
          kinds: (e, t, n) =>
            e === 0
              ? t === Math.floor(n / 2)
                ? `lobbyDoor`
                : `lobby`
              : `balcony`,
          extra: rr,
        },
        back: {
          kinds: (e, t) => (e === 0 && t === 4 ? `lobbyDoor` : `window`),
        },
        right: { kinds: (e) => (e === 0 ? `lobby` : `window`) },
        left: { kinds: (e) => (e === 0 ? `lobby` : `window`) },
        extra: ar,
      },
      {
        key: `lafayette`,
        name: `Tour Lafayette`,
        plain: 3948614,
        desc: `1970s Paris office slab: smoked dark-glass curtain wall with aluminium mullions, louvred plant floors, chamfered ends, antenna masts and a Guimard metro entrance.`,
        W: 30,
        D: 16,
        chamfer: { l: 3, r: 3 },
        style: {
          wall: `cSpandrelDark`,
          floorMat: e,
          t: 0.3,
          bay: 3.2,
          floors: [7, ...Ht(26, 3.6)],
          parapet: 1.1,
          parapetMat: `cAluLight`,
          curtain: {
            glass: `cDarkGlass`,
            spandrel: `cSpandrelDark`,
            mullion: `cAluLight`,
            module: 1.6,
            fin: 0.12,
            sill: 0.95,
            head: 0.55,
          },
          lobby: {
            rec: 2.6,
            frame: M,
            glass: `glassGrey`,
            head: 1.3,
            headMat: `cSpandrelDark`,
            column: `granite`,
          },
        },
        front: {
          kinds: (e, t) =>
            e === 0
              ? t === 4
                ? `lobbyDoor`
                : `lobby`
              : e === 14 || e === 26
                ? `solid`
                : `curtain`,
        },
        corner: {
          kinds: (e) =>
            e === 0 ? `lobby` : e === 14 || e === 26 ? `solid` : `curtain`,
        },
        back: {
          kinds: (e) =>
            e === 0 ? `lobby` : e === 14 || e === 26 ? `solid` : `curtain`,
        },
        right: {
          kinds: (e) =>
            e === 0 ? `lobby` : e === 14 || e === 26 ? `solid` : `curtain`,
        },
        left: {
          kinds: (e) =>
            e === 0 ? `lobby` : e === 14 || e === 26 ? `solid` : `curtain`,
        },
        extra: or,
      },
    ]
  );
}
