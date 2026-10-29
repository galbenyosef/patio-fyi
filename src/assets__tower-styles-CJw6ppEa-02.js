// assets__tower-styles-CJw6ppEa 02 — kinds
// Lines 117-521 of readable/assets__tower-styles-CJw6ppEa.pretty.js (statement-aligned).
function u() {
  return (
    r(`signMeridian`, `MERIDIAN`, {
      fg: 1977396,
      aspect: 0.6 / 6,
      size: 0.82,
      font: `"Helvetica Neue", Arial, sans-serif`,
      weight: 300,
      spacing: 0.45,
    }),
    r(`signSound`, `PUGET SOUND BUILDING`, {
      bg: 14077110,
      fg: 4865843,
      aspect: 0.55 / 10,
      size: 0.7,
      spacing: 0.2,
    }),
    r(`signHarborview`, `HARBORVIEW`, {
      fg: 14172207,
      aspect: 1.6 / 9,
      size: 0.95,
      font: `"Arial Black", Impact, sans-serif`,
      weight: 900,
      spacing: 0.05,
    }),
    r(`signCivic`, `CASCADIA CIVIC CENTER`, {
      bg: 10460050,
      fg: 4930088,
      aspect: 0.45 / 14,
      size: 0.75,
      font: `"Helvetica Neue", Arial, sans-serif`,
      weight: 700,
      spacing: 0.3,
    }),
    r(`signTrust`, `CASCADE TRUST`, {
      fg: 16053487,
      aspect: 1.6 / 12,
      size: 0.9,
      font: `"Helvetica Neue", Arial, sans-serif`,
      weight: 700,
      spacing: 0.12,
    }),
    [
      {
        key: `meridian`,
        name: `Meridian Tower`,
        plain: 10134440,
        desc: `Glass office tower: blue-green curtain wall, aluminium mullions, tall lobby, rooftop plant screen and mast.`,
        W: 24,
        D: 20,
        style: {
          wall: `spandrelBlue`,
          t: 0.3,
          bay: 3,
          floors: [6.5, ...a(14, 3.8)],
          parapet: 1.4,
          curtain: {
            glass: `glassBlue`,
            spandrel: `spandrelBlue`,
            mullion: `aluminum`,
            module: 1.5,
            fin: 0.1,
            sill: 0.9,
            head: 0.6,
          },
          lobby: {
            rec: 0.8,
            frame: `aluminum`,
            glass: `glassGrey`,
            head: 1.3,
            headMat: `aluminum`,
            column: `granite`,
            canopy: `aluminum`,
          },
          cornice: { type: `classic`, mat: `aluminum`, h: 0.3, out: 0.12 },
        },
        front: {
          kinds: (e, t) =>
            e === 0 ? (t === 3 || t === 4 ? `lobbyDoor` : `lobby`) : `curtain`,
          signs: [
            {
              mat: `signMeridian`,
              rect: [9, 15, 5.45, 6.05],
              z0: 0.01,
              z1: 0.04,
            },
          ],
        },
        right: { kinds: (e) => (e === 0 ? `lobby` : `curtain`) },
        left: { kinds: (e) => (e === 0 ? `lobby` : `curtain`) },
        back: { kinds: (e) => (e === 0 ? `lobby` : `curtain`) },
        extra: (e, t, n) => {
          (n.clearRooftop || s(e, t, n, 3, 5),
            c(e, t, n.H + (n.clearRooftop ? 0.15 : 5.15), 2, -2, 20));
        },
      },
      {
        key: `sound`,
        name: `Puget Sound Building`,
        plain: 11117459,
        desc: `Art Deco setback tower: limestone piers, bronze window strips, three setbacks, fluted crown and spire.`,
        W: 24,
        D: 20,
        style: {
          wall: `limestone`,
          floorMat: [`granite`],
          t: 0.45,
          bay: 2.7,
          floors: [6, ...a(9, 3.7)],
          parapet: 1.2,
          win: {
            w: 1.3,
            h: 2.3,
            sill: 0.8,
            type: `grid`,
            lites: [2, 3],
            frame: `bronze`,
            panel: `bronze`,
            rec: 0.25,
            curtains: 0.35,
          },
          win0: {
            w: 1.6,
            h: 4.2,
            sill: 0.7,
            type: `grid`,
            lites: [2, 5],
            frame: `bronze`,
            header: `limestone`,
            rec: 0.3,
            curtains: 0.2,
          },
          door: {
            w: 1.8,
            h: 3.4,
            transom: 1.2,
            frame: `bronze`,
            glazed: !0,
            hood: `bronze`,
            step: `granite`,
            rec: 0.6,
          },
          base: { mat: `granite`, h: 0.8, out: 0.08 },
          pilaster: { mat: `limestone`, w: 0.7, out: 0.3, through: !0 },
          cornice: {
            type: `classic`,
            mat: `limestone`,
            h: 0.6,
            out: 0.4,
            cap: `limestone`,
          },
        },
        tiers: [
          {
            front: {
              signs: [
                {
                  mat: `signSound`,
                  rect: [6.5, 17.5, 5.1, 5.65],
                  z0: 0.31,
                  z1: 0.35,
                },
              ],
            },
          },
          { W: 17.5, D: 14.5, floors: a(4, 3.7) },
          { W: 11.5, D: 9.5, floors: a(2, 3.7), style: { parapet: 0.6 } },
        ],
        front: {
          kinds: (e, t, n) =>
            e === 0 && t === Math.floor(n / 2) ? `door` : `window`,
        },
        extra: l,
      },
      {
        key: `harborview`,
        name: `Harborview Apartments`,
        plain: 10194562,
        desc: `Brick apartment tower: stacked iron balconies, shops and awnings at street level, rooftop sign.`,
        W: 20,
        D: 16,
        style: {
          wall: `brickBrown`,
          t: 0.35,
          bay: 2.9,
          floors: [4.6, ...a(10, 3)],
          parapet: 1,
          win: {
            w: 1.3,
            h: 1.5,
            sill: 0.85,
            type: `sash`,
            lites: [1, 1],
            frame: `trimWhite`,
            sillMat: `concrete`,
            header: `concrete`,
            headerH: 0.15,
            rec: 0.1,
            curtains: 0.6,
          },
          balcony: {
            w: 1.9,
            h: 2.25,
            depth: 1.35,
            slab: `concrete`,
            rail: `iron`,
          },
          store: { frame: i, fascia: i },
          awning: { mat: `awningRed` },
          door: {
            w: 1.6,
            h: 2.5,
            transom: 0.5,
            frame: i,
            glazed: !0,
            hood: `concrete`,
          },
          base: { mat: `concrete`, h: 0.6, out: 0.04 },
          cornice: {
            type: `corbel`,
            mat: `brickBrown`,
            h: 0.45,
            cap: `concrete`,
          },
        },
        front: {
          kinds: (e, t) =>
            e === 0
              ? t === 3
                ? `door`
                : `store`
              : t % 3 == 1
                ? `balcony`
                : `window`,
        },
        right: {
          kinds: (e, t) =>
            e === 0 ? `window` : t % 2 == 0 ? `balcony` : `window`,
        },
        left: {
          kinds: (e, t) =>
            e === 0 ? `window` : t % 2 == 0 ? `balcony` : `window`,
        },
        back: { kinds: (e) => (e === 0 ? `solid` : `window`) },
        extra: (e, t, n) => {
          (e.box(
            `brickBrown`,
            t,
            0,
            -3,
            4,
            n.H,
            n.H + 3.2,
            -n.D / 2 + 2,
            -n.D / 2 + 6,
          ),
            e.box(
              `concrete`,
              t,
              0,
              -3.2,
              4.2,
              n.H + 3.2,
              n.H + 3.4,
              -n.D / 2 + 1.8,
              -n.D / 2 + 6.2,
            ),
            o(e, t, n, `signHarborview`, 9, 1.6, n.D / 2 - 1.5));
        },
      },
      {
        key: `civic`,
        name: `Cascadia Civic Center`,
        plain: 10591379,
        desc: `Brutalist civic block: board-formed concrete fins, glass lobby behind columns, cantilevered top floors.`,
        W: 22,
        D: 18,
        style: {
          wall: `boardConcrete`,
          t: 0.5,
          bay: 3.2,
          floors: [6, ...a(6, 3.8)],
          parapet: 0,
          win: {
            w: 1.6,
            h: 2.1,
            sill: 1,
            type: `grid`,
            lites: [2, 1],
            frame: i,
            rec: 0.5,
            curtains: 0.3,
          },
          recess: { depth: 3.2, glass: `glassGrey`, frame: i },
          pilaster: {
            mat: `boardConcrete`,
            w: 0.3,
            out: 0.75,
            through: !0,
            floors: [1, 2, 3, 4, 5, 6],
          },
        },
        tiers: [
          {
            front: {
              signs: [
                {
                  mat: `signCivic`,
                  rect: [3.5, 18.5, 5.47, 5.93],
                  z0: 0.01,
                  z1: 0.04,
                },
              ],
            },
          },
          {
            W: 27,
            D: 22,
            floors: a(2, 4.4),
            soffit: !0,
            style: {
              bay: 3.4,
              parapet: 1.6,
              win: {
                w: 2.4,
                h: 1,
                sill: 1.9,
                type: `grid`,
                lites: [4, 1],
                frame: i,
                rec: 0.7,
                curtains: 0.2,
              },
              pilaster: {
                mat: `boardConcrete`,
                w: 1.2,
                out: 0.45,
                through: !0,
              },
            },
          },
        ],
        front: { kinds: (e) => (e === 0 ? `recess` : `window`) },
        extra: (e, t, n) => {
          (e.box(`boardConcrete`, t, 0, -5, 5, n.H, n.H + 4.2, -4, 3),
            e.box(i, t, 0, 6, 8, n.H, n.H + 2.2, -6, -2));
        },
      },
      {
        key: `trust`,
        name: `Cascade Trust`,
        plain: 11579821,
        desc: `1960s bank tower: white spandrel bands and continuous ribbon windows over a deep dark-granite lobby.`,
        W: 22,
        D: 18,
        style: {
          wall: `whiteSpandrel`,
          t: 0.3,
          bay: 3,
          floors: [5.2, ...a(13, 3.6)],
          parapet: 1.6,
          parapetMat: `aluminum`,
          ribbon: {
            glass: `glassGrey`,
            spandrel: `whiteSpandrel`,
            mullion: `aluminum`,
            module: 1.5,
            fin: 0.06,
            sill: 1,
            head: 0.55,
          },
          lobby: {
            rec: 1.8,
            frame: i,
            glass: `glassGrey`,
            head: 0.9,
            headMat: `whiteSpandrel`,
            column: `granite`,
          },
        },
        front: {
          kinds: (e, t) =>
            e === 0 ? (t === 3 ? `lobbyDoor` : `lobby`) : `ribbon`,
        },
        right: { kinds: (e) => (e === 0 ? `lobby` : `ribbon`) },
        left: { kinds: (e) => (e === 0 ? `lobby` : `ribbon`) },
        back: { kinds: (e) => (e === 0 ? `lobby` : `ribbon`) },
        extra: (e, t, n) => {
          (e.box(
            `aluminum`,
            t,
            0,
            -4,
            4,
            n.H,
            n.H + 3.5,
            -n.D / 2 + 3,
            -n.D / 2 + 8,
          ),
            o(e, t, n, `signTrust`, 12, 1.6, n.D / 2 - 1.5, 1.8));
        },
      },
    ]
  );
}
