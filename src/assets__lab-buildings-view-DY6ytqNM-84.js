// assets__lab-buildings-view-DY6ytqNM 84 — kinds
// Lines 25755-26066 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function sc() {
  let e = 50 * Po,
    t = 58 * Po,
    n = {
      t: 0.3,
      bay: 2.4,
      floors: [3.1, 2.8],
      win: {
        w: 1.2,
        h: 1.35,
        sill: 0.85,
        type: `grid`,
        lites: [3, 3],
        frame: `woodDark`,
        rec: 0.1,
        curtains: 0.55,
      },
      door: {
        w: 1.1,
        h: 2.2,
        transom: 0,
        frame: `woodDark`,
        mat: `amDoorOak`,
        rec: 0.3,
      },
      base: { mat: `amFieldstone`, h: 0.45, out: 0.04 },
    },
    r = {
      ...n,
      wall: `amStuccoTudor`,
      floorMat: [`amBrickClinker`],
      roof: {
        ridge: `x`,
        pitch: e,
        over: 0.35,
        mat: `amSlate`,
        fascia: `woodDark`,
      },
    },
    i = {
      ...n,
      wall: `amStuccoTudor`,
      floorMat: [`amBrickClinker`],
      bay: 4.8,
      roofPitch: Math.tan(t),
      roof: {
        ridge: `z`,
        pitch: t,
        over: 0.35,
        mat: `amSlate`,
        fascia: `woodDark`,
      },
    },
    a = (e, t) => (t === 4 ? `solid` : `window`),
    o = (e) => (e ? `window` : `door`),
    s = (e, t) => (t === 1 && e === 0 ? `solid` : `window`);
  return {
    key: `amTudor`,
    name: `Ashford Tudor Revival`,
    plain: 15327436,
    desc: `Tudor Revival: clinker-brick ground floor, half-timbered stucco above, steep slate roof with a taller front cross gable, pointed stone door arch, leaded casements and a massive front chimney breaking the eave.`,
    W: 12,
    D: 10,
    style: { ...r, roofPitch: Math.tan(e) },
    front: {
      kinds: a,
      extra: A(
        ac(`woodDark`, r, a, [1]),
        ws(9.6, 1.7, `amBrickClinker`, 12.9, 0.8),
        bs({
          u: 2.8,
          w: 4.8,
          d: 1.8,
          roofBack: 3.6,
          S: i,
          front: {
            kinds: o,
            extra: A(ac(`woodDark`, i, o, [1]), oc(2.4, 0.55)),
          },
          right: {
            kinds: () => `solid`,
            extra: ac(`woodDark`, i, () => `solid`, [1]),
          },
          left: {
            kinds: () => `solid`,
            extra: ac(`woodDark`, i, () => `solid`, [1]),
          },
        }),
      ),
    },
    back: {
      kinds: (e, t) => (e === 0 && t === 2 ? `door` : `window`),
      extra: ac(
        `woodDark`,
        r,
        (e, t) => (e === 0 && t === 2 ? `door` : `window`),
        [1],
      ),
    },
    right: {
      kinds: s,
      bay: 3.2,
      extra: ac(`woodDark`, { ...r, roofPitch: Math.tan(e) }, s, [1]),
    },
    left: {
      kinds: s,
      bay: 3.2,
      extra: ac(`woodDark`, { ...r, roofPitch: Math.tan(e) }, s, [1]),
    },
    extra: (e, t, n) =>
      j(e, t, `amBrickClinker`, -3.5, -1.8, n.H, n.roofTop + 0.4, 1, 0.8),
  };
}
function cc() {
  let e = 18 * Po;
  return {
    key: `amSplitLevel`,
    name: `Maple Heights Split-Level`,
    plain: 11097914,
    desc: `1960s split-level: two-storey bedroom wing with a garage below and olive siding over orange brick, living wing raised half a level with a picture window, stoop and red shutters, low 18° roofs.`,
    W: 9,
    D: 9,
    style: {
      wall: `amLapOlive`,
      floorMat: [`amBrickOrange`],
      t: 0.25,
      bay: 3,
      floors: [2.7, 2.7],
      win: {
        w: 1.6,
        h: 1.2,
        sill: 0.85,
        type: `grid`,
        lites: [2, 1],
        frame: I,
        shutter: `amShutterRed`,
        rec: 0.06,
        curtains: 0.6,
      },
      door: {
        w: 0.9,
        h: 2.1,
        transom: 0,
        frame: I,
        mat: `amDoorTeal`,
        rec: 0.1,
      },
      loading: { type: `rollup`, dock: !1, w: 4.8, h: 2.2 },
      base: { mat: `concrete`, h: 0.3, out: 0.02 },
      roof: {
        ridge: `x`,
        pitch: e,
        over: 0.8,
        mat: `amRoofBrown`,
        fascia: I,
        gutter: !0,
      },
    },
    front: {
      kinds: (e, t) => (e === 0 && t === 0 ? `loading` : `window`),
      bay: 4.5,
      extra: (e, t, n) => {
        for (let [r, i, a] of os(n, 0.2, 4.3))
          e.box(`asphalt`, t, n.grid[0][a], r, i, 0, 0.03, 0, 6);
      },
    },
    back: { kinds: (e, t) => (e === 0 && t === 1 ? `door` : `window`) },
    left: { kinds: (e, t) => (t === 1 ? `solid` : `window`) },
    right: {
      kinds: (e, t) => (e === 0 ? `solid` : `window`),
      extra: bs({
        u: 4.3,
        w: 7,
        d: 8,
        y0: 1.3,
        S: {
          wall: `amBrickOrange`,
          t: 0.25,
          bay: 2.3,
          floors: [2.8],
          win: {
            w: 1.6,
            h: 1.3,
            sill: 0.8,
            type: `grid`,
            lites: [2, 1],
            frame: I,
            shutter: `amShutterRed`,
            rec: 0.06,
            curtains: 0.6,
          },
          curtain: {
            glass: `glassGrey`,
            spandrel: `amLapWhite`,
            mullion: I,
            module: 1.1,
            sill: 0.45,
            head: 0.35,
            fin: 0.03,
          },
          door: {
            w: 1,
            h: 2.1,
            transom: 0,
            frame: I,
            mat: `amDoorTeal`,
            rec: 0.12,
          },
          roof: {
            ridge: `z`,
            pitch: e,
            over: 0.8,
            mat: `amRoofBrown`,
            fascia: I,
            gutter: !0,
          },
        },
        front: { kinds: () => `window` },
        right: { kinds: () => `window` },
        left: { kinds: (e, t) => (t === 0 ? `door` : `curtain`), bay: 2.5 },
        then: (e, t, n) => {
          let r = n.faces.left.grid[0][0],
            i = n.w,
            a = n.d,
            o = -a / 2 + 1.29;
          for (let [r, o, s, c] of [
            [-i / 2 - 0.06, i / 2 + 0.06, a / 2, a / 2 + 0.06],
            [-i / 2 - 0.06, -i / 2, -a / 2, a / 2],
            [i / 2, i / 2 + 0.06, -a / 2, a / 2],
          ])
            e.box(
              `amBrickOrange`,
              t,
              n.faces.front.grid[0][0],
              r,
              o,
              -1.25,
              0.02,
              s,
              c,
            );
          e.box(
            `concrete`,
            t,
            r,
            -i / 2 - 1.4,
            -i / 2,
            -1.3,
            -0.02,
            o - 0.8,
            o + 0.8,
          );
          for (let n = 1; n < 7; n++)
            e.box(
              `concrete`,
              t,
              r,
              -i / 2 - 1.4 - n * 0.3,
              -i / 2 - 1.4 - (n - 1) * 0.3,
              -1.3,
              -n * 0.18571428571428572 - 0.02,
              o - 0.7,
              o + 0.7,
            );
          for (let n of [-1, 1])
            k(
              e,
              Fo,
              t,
              r,
              [-i / 2 - 0.1, 0.85, o + n * 0.75],
              [-i / 2 - 1.4 - 6 * 0.3, -0.4, o + n * 0.75],
              0.05,
            );
          (e.add(
            Fo,
            new C(0.05, 0.06, 2.2, 8).translate(
              -i / 2 - 4.2,
              -1.3 + 1.1,
              o + 2.2,
            ),
            t,
            r,
          ),
            e.box(
              `amGlobe`,
              t,
              r,
              -i / 2 - 4.35,
              -i / 2 - 4.05,
              -1.3 + 2.2,
              -1.3 + 2.55,
              o + 2.05,
              o + 2.35,
            ));
        },
      }),
    },
    extra: (e, t, n) =>
      j(
        e,
        t,
        `amBrickOrange`,
        -2.5,
        -1.5,
        n.H - 0.5,
        n.roofTop + 0.6,
        1.2,
        0.7,
      ),
  };
}
