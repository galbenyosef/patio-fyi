// assets__lab-buildings-view-DJVr8phc 13 — kinds
// Lines 4964-5379 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function gn() {
  return [
    {
      key: `schoolhouse`,
      name: `Alder Creek Schoolhouse`,
      plain: 14210248,
      desc: `One-room clapboard school: tall twelve-light sashes, gabled entry hood, bell cupola on the ridge, flagpole.`,
      W: 9,
      D: 14,
      style: {
        wall: `sidingWhite`,
        t: 0.22,
        bay: 3,
        floors: [4.4],
        win: {
          w: 1.1,
          h: 2.9,
          sill: 0.8,
          type: `sash`,
          lites: [2, 3],
          frame: `trimWhite`,
          casing: `trimWhite`,
          rec: 0.08,
          curtains: 0.15,
        },
        door: {
          w: 1.3,
          h: 2.3,
          transom: 0.5,
          frame: `trimWhite`,
          rec: 0.12,
          mat: `cPaintRed`,
        },
        base: { mat: `concrete`, h: 0.6, out: 0.03 },
        corners: `trimWhite`,
        eaveTrim: `trimWhite`,
        roof: {
          ridge: `z`,
          pitch: 40 * Vt,
          over: 0.5,
          mat: `shingle`,
          fascia: `trimWhite`,
          gutter: !0,
        },
      },
      front: {
        kinds: (e, t) => (t === 1 ? `door` : `window`),
        signs: [
          {
            mat: `signCvSchool`,
            rect: [2.9, 6.1, 5.3, 5.9],
            z0: 0.02,
            z1: 0.07,
          },
        ],
        extra: on,
      },
      right: { kinds: () => `window` },
      left: { kinds: () => `window` },
      back: { kinds: (e, t) => (t === 1 ? `solid` : `window`) },
      extra: sn,
    },
    {
      key: `highschool`,
      name: `Greywater High School`,
      plain: 10115656,
      desc: `1930s brick high school: symmetric three storeys of multi-pane windows, stone entrance pavilion with the carved name.`,
      W: 30,
      D: 16,
      style: {
        wall: `cBrickSchool`,
        t: 0.4,
        bay: 3,
        floors: [4.6, 4, 4],
        parapet: 1.4,
        win: {
          w: 2.1,
          h: 2.55,
          sill: 0.9,
          type: `grid`,
          lites: [3, 5],
          frame: `trimWhite`,
          sillMat: `limestone`,
          header: `limestone`,
          headerH: 0.28,
          keystone: !0,
          rec: 0.16,
          curtains: 0.2,
        },
        door: {
          w: 1.9,
          h: 2.7,
          transom: 0.8,
          frame: `bronze`,
          glazed: !0,
          rec: 0.35,
          hood: `limestone`,
        },
        base: { mat: `limestone`, h: 0.8, out: 0.05 },
        belt: { mat: `limestone`, h: 0.22, out: 0.08 },
        corners: `limestone`,
        cornice: {
          type: `classic`,
          mat: `limestone`,
          h: 0.4,
          out: 0.35,
          cap: `limestone`,
        },
      },
      front: {
        kinds: (e, t) => (e === 0 && (t === 4 || t === 5) ? `door` : `window`),
        extra: cn,
      },
      back: { kinds: (e, t) => (e === 0 && t === 5 ? `door` : `window`) },
      right: { kinds: (e, t) => (e === 0 && t === 2 ? `door` : `window`) },
      left: { kinds: (e, t) => (e === 0 && t === 2 ? `door` : `window`) },
      extra: (e, t, n) => {
        en(e, t, 0, n.H + 4.9, n.D / 2 - 0.3, 6);
        for (let r of [-9, 9])
          (e.box(`louver`, t, 0, r - 1.2, r + 1.2, n.H, n.H + 1.6, -3, -1),
            e.box(
              `aluminum`,
              t,
              0,
              r - 1.3,
              r + 1.3,
              n.H + 1.6,
              n.H + 1.72,
              -3.1,
              -0.9,
            ));
        A(e, t, `cBrickSchool`, 0, -n.D / 2 + 1.2, n.H, n.H + 4.5, 1.4, 1);
      },
    },
    {
      key: `courthouse`,
      name: `Greywater County Courthouse`,
      plain: 13222317,
      desc: `Limestone county courthouse: rusticated base, six-column giant portico and pediment, clock stage, colonnaded drum and copper dome.`,
      W: 24,
      D: 20,
      style: {
        wall: `limestone`,
        floorMat: [`rustic`, `limestone`, `limestone`],
        t: 0.45,
        bay: 3,
        floors: [1.6, 5.2, 4.6],
        parapet: 1.2,
        win0: {
          w: 1.3,
          h: 0.75,
          sill: 0.4,
          type: `grid`,
          lites: [3, 1],
          frame: M,
          rec: 0.25,
          curtains: 0,
        },
        win: {
          w: 1.4,
          h: 2.8,
          sill: 0.9,
          type: `sash`,
          lites: [2, 2],
          frame: `bronze`,
          header: `limestone`,
          keystone: !0,
          headerH: 0.3,
          sillMat: `limestone`,
          rec: 0.28,
          curtains: 0.35,
        },
        door: {
          w: 1.8,
          h: 3,
          transom: 0.9,
          frame: `bronze`,
          glazed: !0,
          rec: 0.4,
        },
        base: { mat: `granite`, h: 0.5, out: 0.05 },
        belt: { mat: `limestone`, h: 0.35, out: 0.1 },
        cornice: {
          type: `classic`,
          mat: `limestone`,
          h: 0.6,
          out: 0.6,
          dentils: !0,
          brackets: !0,
          cap: `limestone`,
        },
      },
      front: {
        kinds: (e, t) =>
          e === 1 && (t === 3 || t === 4)
            ? `door`
            : e === 0 && t >= 2 && t <= 5
              ? `solid`
              : `window`,
        extra: ln({
          u0: 5.2,
          u1: 18.8,
          n: 6,
          d: 3.6,
          y0: 1.6,
          mat: `limestone`,
          sign: `signCvCourt`,
          oculus: !0,
          ph: 2.8,
          r: 0.48,
        }),
      },
      back: { kinds: (e, t) => (e === 0 && t === 3 ? `door` : `window`) },
      right: { kinds: () => `window` },
      left: { kinds: () => `window` },
      extra: un,
    },
    {
      key: `library`,
      name: `Carnegie Free Library`,
      plain: 12889736,
      desc: `Beaux-Arts Carnegie library: rusticated basement, tall arched reading-room windows, steps up to a pedimented entrance, glass lantern.`,
      W: 20,
      D: 16,
      style: {
        wall: `brickBuff`,
        floorMat: [`rustic`, `brickBuff`],
        t: 0.42,
        bay: 4,
        floors: [1.8, 5.6],
        parapet: 1,
        win0: {
          w: 1.5,
          h: 0.8,
          sill: 0.5,
          type: `grid`,
          lites: [3, 1],
          frame: M,
          rec: 0.25,
          curtains: 0,
        },
        win: {
          w: 1.8,
          h: 3.9,
          sill: 0.9,
          type: `grid`,
          lites: [3, 4],
          frame: `bronze`,
          arch: 0.9,
          archMat: `limestone`,
          keystone: !0,
          sillMat: `limestone`,
          rec: 0.22,
          curtains: 0.2,
        },
        door: {
          w: 1.8,
          h: 2.8,
          transom: 0.9,
          frame: `bronze`,
          glazed: !0,
          rec: 0.4,
        },
        belt: { mat: `limestone`, h: 0.3, out: 0.1 },
        corners: `limestone`,
        cornice: {
          type: `classic`,
          mat: `limestone`,
          h: 0.5,
          out: 0.5,
          dentils: !0,
          cap: `limestone`,
        },
      },
      front: {
        kinds: (e, t) => (t === 2 ? (e === 1 ? `door` : `solid`) : `window`),
        extra: dn,
      },
      back: { kinds: (e, t) => (e === 0 && t === 2 ? `door` : `window`) },
      right: { kinds: () => `window` },
      left: { kinds: () => `window` },
      extra: fn,
    },
    {
      key: `whitechurch`,
      name: `First Church of Greywater`,
      plain: 14341836,
      desc: `White clapboard meeting house: round-headed twelve-light windows, slate roof, square front tower with belfry and tall octagonal spire.`,
      W: 11,
      D: 22,
      style: {
        wall: `sidingWhite`,
        t: 0.22,
        bay: 3.6,
        floors: [7.2],
        win: {
          w: 1.3,
          h: 4.4,
          sill: 1.3,
          type: `grid`,
          lites: [2, 6],
          frame: `trimWhite`,
          arch: 0.65,
          archMat: `trimWhite`,
          rec: 0.1,
          curtains: 0,
        },
        door: {
          w: 1.4,
          h: 2.4,
          transom: 0.6,
          frame: `trimWhite`,
          mat: `redPaint`,
        },
        base: { mat: `concrete`, h: 0.6, out: 0.03 },
        corners: `trimWhite`,
        eaveTrim: `trimWhite`,
        roof: {
          ridge: `z`,
          pitch: 48 * Vt,
          over: 0.5,
          mat: `cSlate`,
          fascia: `trimWhite`,
        },
      },
      front: { kinds: (e, t) => (t === 1 ? `solid` : `window`) },
      back: { kinds: () => `window` },
      right: { kinds: () => `window` },
      left: { kinds: (e, t) => (t === 1 ? `door` : `window`) },
      extra: pn,
    },
    {
      key: `hospital`,
      name: `St. Brendan Hospital`,
      plain: 13154976,
      desc: `1960s community hospital: tan-brick end walls, white ribbon-window bands, drive-through emergency canopy, red cross, rooftop plant.`,
      W: 32,
      D: 18,
      style: {
        wall: `cBrickTanHosp`,
        t: 0.35,
        bay: 3.2,
        floors: [5, 3.8, 3.8, 3.8],
        parapet: 1.2,
        parapetMat: `aluminum`,
        win: {
          w: 2.4,
          h: 2,
          sill: 1,
          type: `grid`,
          lites: [3, 2],
          frame: `aluminum`,
          rec: 0.15,
          curtains: 0.4,
        },
        ribbon: {
          glass: `glassGrey`,
          spandrel: `whiteSpandrel`,
          mullion: `aluminum`,
          module: 1.6,
          fin: 0.06,
          sill: 1,
          head: 0.6,
        },
        lobby: {
          rec: 1.2,
          frame: `aluminum`,
          glass: `glassGrey`,
          head: 0.9,
          headMat: `whiteSpandrel`,
          column: `granite`,
        },
        door: { w: 1.8, h: 2.4, transom: 0.3, frame: `aluminum`, glazed: !0 },
        base: { mat: `granite`, h: 0.5, out: 0.03 },
      },
      front: {
        kinds: (e, t, n) =>
          e === 0
            ? t === 5
              ? `lobbyDoor`
              : t === 4 || t === 6
                ? `lobby`
                : `window`
            : t === 0 || t === n - 1
              ? `solid`
              : `ribbon`,
        extra: mn,
      },
      right: {
        kinds: (e, t, n) =>
          e === 0 ? `window` : t === 0 || t === n - 1 ? `solid` : `ribbon`,
      },
      left: {
        kinds: (e, t, n) =>
          e === 0
            ? t === 2
              ? `door`
              : `window`
            : t === 0 || t === n - 1
              ? `solid`
              : `ribbon`,
      },
      back: {
        kinds: (e, t, n) =>
          e === 0
            ? t === 2
              ? `door`
              : `window`
            : t === 0 || t === n - 1
              ? `solid`
              : `ribbon`,
      },
      extra: hn,
    },
  ];
}
