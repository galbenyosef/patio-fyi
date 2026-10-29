// assets__lab-buildings-view-DY6ytqNM 132 — mat
// Lines 43979-44303 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function ap() {
  let e = 50 * H,
    t = {
      w: 1,
      h: 1.35,
      sill: 0.8,
      type: `grid`,
      lites: [2, 3],
      frame: `trimWhite`,
      rec: 0.08,
      curtains: 0.6,
    },
    n = (e, t) => (e === 0 && t === 2 ? `door` : `window`),
    r = (e, t) => (e > 0 && t === 1 ? `solid` : `window`),
    i = Hf({
      mat: `euTimberRed`,
      kinds: n,
      win: t,
      skip: (e, t) => e === 0 || (t === 5 && e > 0),
      ends: 0.3,
    }),
    a = (e) =>
      Hf({
        mat: `euTimberRed`,
        kinds: r,
        win: t,
        skip: (e) => e === 0,
        gable: e,
        gOff: 0.28,
        ends: 0.05,
      });
  return {
    key: `euGasthof`,
    name: `Gasthof zur Linde`,
    plain: 14463850,
    desc: `German village inn: rubble-stone ground floor with an arched door, two storeys of red-painted timber framing on ochre infill, timbered wall gable, corner oriel, gilt hanging sign, barrels and a bench.`,
    W: 18,
    D: 11,
    style: {
      wall: `euInfillOchre`,
      floorMat: [`euRubble`],
      t: 0.28,
      bay: 3,
      floors: [3.6, 3.1, 3],
      win: t,
      win0: {
        w: 1.1,
        h: 1.4,
        sill: 0.9,
        type: `grid`,
        lites: [2, 3],
        frame: `trimWhite`,
        arch: 0.25,
        archMat: `euSandstone`,
        ringW: 0.18,
        rec: 0.25,
        curtains: 0.6,
      },
      door: {
        w: 1.5,
        h: 2.5,
        transom: 0.4,
        frame: `euSandstone`,
        mat: `euDoorOak`,
        rec: 0.35,
        step: `euSandstone`,
      },
      base: { mat: `euSandstone`, h: 0.35, out: 0.04 },
      roof: {
        ridge: `x`,
        pitch: e,
        over: 0.5,
        mat: `euTileBrown`,
        fascia: `euTimberRed`,
        gutter: !0,
      },
    },
    front: {
      kinds: n,
      extra: A(
        i,
        Jf({
          a0: 6,
          a1: 12,
          pitch: 55 * H,
          depth: 3.8,
          wall: `euInfillOchre`,
          roof: `euTileBrown`,
          trim: `euTimberRed`,
          timber: `euTimberRed`,
          frame: `trimWhite`,
          wins: [
            [-1.45, 0.45, 0.8, 1.1],
            [1.45, 0.45, 0.8, 1.1],
            [0, 2.2, 0.6, 0.8],
          ],
        }),
        Le({
          bays: [5],
          floors: [1, 2],
          mat: `euInfillOchre`,
          trim: `euTimberRed`,
          depth: 0.7,
          cap: `euTileBrown`,
        }),
        (e, t, n) => {
          let r = n.grid[1][2];
          (e.box(`euGilt`, t, r, 6, 6.08, 3.9, 4, 0, 1.7),
            k(e, `euGilt`, t, r, [6.04, 3.3, 0.02], [6.04, 3.95, 1.25], 0.05));
          for (let n of [0.9, 1.5])
            e.add(
              `euGilt`,
              new o(0.16, 0.025, 4, 10).translate(6.04, 3.75, n).rotateY(0),
              t,
              r,
            );
          Ie(e, t, r, `euSignLinde`, 6.04, 3, 3.85, 0.7, 1.7, `euGilt`, {
            hang: !0,
          });
          let i = n.grid[0][2];
          ep(e, t, i, 7.5, 2.9, 0.75, 0.3, `euSandstone`, `euTimberRed`);
          for (let [r, i] of [
            [5.6, 0.9],
            [9.6, 0.9],
          ])
            If(e, t, n.grid[0][W(n, r)], r, i);
          e.box(`euOak`, t, n.grid[0][3], 9.9, 11.6, 0.9, 0.97, 0.4, 1.2);
          for (let r of [10, 11.5])
            e.box(
              `euOak`,
              t,
              n.grid[0][3],
              r - 0.05,
              r + 0.05,
              0,
              0.9,
              0.75,
              0.85,
            );
          for (let r of [1.5, 4.5, 10.5, 13.5, 16.5])
            Pf(e, t, n.grid[0][W(n, r)], r + 0.9, 2.9);
        },
      ),
    },
    back: {
      kinds: (e, t) => (e === 0 && t === 3 ? `door` : `window`),
      extra: Hf({
        mat: `euTimberRed`,
        kinds: (e) => `window`,
        win: t,
        skip: (e) => e === 0,
        ends: 0.3,
      }),
    },
    right: { kinds: r, extra: a(e) },
    left: { kinds: r, extra: a(e) },
    extra: (t, n, r) => {
      (Vf(t, n, r, [-6, 6], {
        pitch: e,
        w: 1.3,
        h: 1,
        inset: 1.4,
        mat: `euInfillOchre`,
        roof: `euTileBrown`,
        trim: `euTimberRed`,
        sides: [1],
      }),
        Vf(t, n, r, [-4.5, 0, 4.5], {
          pitch: e,
          w: 1.3,
          h: 1,
          inset: 1.4,
          mat: `euInfillOchre`,
          roof: `euTileBrown`,
          trim: `euTimberRed`,
          sides: [-1],
        }),
        j(t, n, `euRubble`, -3, -1.2, r.H, r.roofTop + 0.6, 0.9, 0.9));
    },
  };
}
var op = (e, t) => (n, r, i) => {
    for (let a of e)
      for (let e of t) {
        let t = xf(i, e, a);
        (n.box(U, r, t, e - 0.03, e + 0.03, a - 0.35, a + 0.35, 0, 0.05),
          n.box(U, r, t, e - 0.18, e + 0.18, a - 0.03, a + 0.03, 0, 0.06));
      }
  },
  sp = (e, t) => (n, r, i) => {
    let a = i.gableCell,
      s = t / 2;
    (n.box(`woodDark`, r, a, s - 0.1, s + 0.1, e - 0.1, e + 0.1, -0.2, 1.1),
      n.box(`woodDark`, r, a, s - 0.08, s + 0.08, e - 0.12, e - 0.05, 0, 0.15),
      n.add(U, new o(0.1, 0.025, 4, 10).translate(s, e - 0.24, 0.98), r, a),
      n.add(U, new C(0.01, 0.01, 1.2, 4).translate(s, e - 0.95, 0.98), r, a));
  };
function cp() {
  let e = 56 * H,
    t = Math.tan(e),
    n = 6.4,
    r = {
      w: 1.05,
      h: 1.95,
      sill: 0.6,
      type: `sash`,
      lites: [2, 3],
      frame: `trimWhite`,
      header: `euSandstone`,
      headerH: 0.22,
      keystone: !0,
      sillMat: `euSandstone`,
      rec: 0.1,
      curtains: 0.5,
    },
    a = { ...r, w: 1.15, h: 2.2, sill: 0.9 };
  return {
    key: `euCanalStep`,
    name: `Lindengracht House`,
    plain: 8272424,
    desc: `Dutch canal house: narrow and deep, dark red brick, tall white sash windows under sandstone arches, stepped gable with stone coping, hoist beam, wall anchors, red shutters and street bollards.`,
    W: n,
    D: 13,
    style: {
      wall: `euBrickDutch`,
      t: 0.3,
      bay: n / 3,
      floors: [3.8, 3.4, 3.1, 2.9],
      win: r,
      win0: a,
      door: {
        w: 1.15,
        h: 2.4,
        transom: 0.6,
        frame: `trimWhite`,
        mat: `euDoorGreen`,
        rec: 0.25,
        step: `euSandstone`,
      },
      base: { mat: `euSandstone`, h: 0.5, out: 0.04 },
      belt: { mat: `euSandstone`, h: 0.14, out: 0.04 },
      roof: {
        ridge: `z`,
        pitch: e,
        over: 0.1,
        mat: `euTileBrown`,
        fascia: `euBrickDutch`,
      },
    },
    front: {
      kinds: (e, t) => (e === 0 && t === 0 ? `door` : `window`),
      extra: A(
        Wf({
          pitch: e,
          prof: Gf(4, t),
          mat: `euBrickDutch`,
          rim: `euSandstone`,
          z: 0.16,
        }),
        sp(13.2 + (n / 2) * t - 0.3, n),
        op([3.8, 7.2, 10.3], [0.35, 6.050000000000001]),
        (e, t, n) => {
          let r = n.grid[0][0];
          for (let [r, a] of [
            [2.4, 2.4],
            [4.2, 2.4],
            [6, 2.4],
          ]) {
            let o = n.grid[0][W(n, r)];
            (Sf(e, `euPaintOxblood`, t, o, r, a, 0, 0.8, 0.08, 0.06, 8),
              e.add(
                `euPaintOxblood`,
                new i(0.08, 8, 6).translate(r, 0.82, a),
                t,
                o,
              ));
          }
          (e.box(`euSandstone`, t, r, 0.2, 2, 0, 0.3, 0.3, 1.5),
            e.box(`euSandstone`, t, r, 0.35, 1.85, 0.3, 0.45, 0.3, 1.1));
          for (let n of [0.25, 1.95])
            (e.box(U, t, r, n - 0.03, n + 0.03, 0.3, 1.2, 1.4, 1.46),
              e.box(U, t, r, n - 0.02, n + 0.02, 1.15, 1.2, 0.3, 1.46));
          for (let r of [1, 2]) {
            let { a0: i, a1: o, b0: s, b1: c } = Of(n, a, 0, r);
            for (let a of [-1, 1])
              e.box(
                `euShutterRed`,
                t,
                n.grid[0][r],
                a < 0 ? i - 0.6 : o + 0.08,
                a < 0 ? i - 0.08 : o + 0.6,
                s,
                c,
                0.01,
                0.05,
              );
          }
          Pf(e, t, r, 1.7, 2.9, 0.45);
        },
        (e, t, r) =>
          kf(e, t, r.gableCell, n / 2, r.H + 1.1, 1, 1.6, `trimWhite`, {
            cross: !0,
            shut: `euShutterRed`,
          }),
      ),
    },
    back: {
      kinds: () => `window`,
      extra: Wf({
        pitch: e,
        prof: Gf(4, t),
        mat: `euBrickDutch`,
        rim: `euSandstone`,
        z: 0.16,
      }),
    },
    right: {
      kinds: (e, t, n) => (t === n - 1 && e > 0 ? `window` : `solid`),
      extra: op([3.8, 7.2, 10.3], [2, 6, 10]),
    },
    left: { kinds: () => `solid`, extra: op([3.8, 7.2, 10.3], [2, 6, 10]) },
    extra: (e, t, n) =>
      j(e, t, `euBrickDutch`, 0.9, -3.5, n.H, n.roofTop - 1.4, 0.8, 0.6),
  };
}
