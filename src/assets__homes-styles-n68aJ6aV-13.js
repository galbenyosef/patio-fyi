// assets__homes-styles-n68aJ6aV 13 — extra
// Lines 4162-4453 of readable/assets__homes-styles-n68aJ6aV.pretty.js (statement-aligned).
function rt() {
  let e = 24 * F,
    t = 1.5,
    n = {
      ridge: `z`,
      pitch: e,
      over: t,
      mat: `hShingleBrown`,
      fascia: `woodDark`,
    },
    r = {
      win0: {
        w: 1,
        h: 1.3,
        sill: 0.95,
        type: `grid`,
        lites: [2, 3],
        frame: `trimWhite`,
        rec: 0.2,
        curtains: 0.7,
      },
      win: {
        w: 1.1,
        h: 2.2,
        sill: 0.05,
        type: `grid`,
        lites: [2, 4],
        frame: `trimWhite`,
        rec: 0.15,
        curtains: 0.6,
      },
    },
    i = (e, t) => (e === 0 && t === 2 ? `door` : `window`),
    a = (e, t) => (t === 1 && e === 0 ? `solid` : `window`),
    o = Pe(e, t, `woodDark`, [0.02, 0.26, 0.5, 0.74, 0.98]);
  return {
    key: `hChalet`,
    name: `Chalet Edelweiss`,
    plain: 5916214,
    desc: `Alpine chalet: white rendered ground floor, dark timber upper storey with a carved balcony and geraniums, heart-cut shutters, wide snowy gable.`,
    W: 14,
    D: 11,
    style: {
      wall: `woodDark`,
      floorMat: [`hStuccoWhite`],
      t: 0.3,
      bay: 2.8,
      floors: [3.2, 3],
      ...r,
      door: {
        w: 1.2,
        h: 2.3,
        transom: 0,
        frame: `woodDark`,
        mat: `woodDark`,
        rec: 0.25,
        hood: `woodDark`,
      },
      base: { mat: `hFieldstone`, h: 0.8, out: 0.05 },
      belt: { mat: `woodDark`, h: 0.3, out: 0.06 },
      roof: n,
    },
    front: {
      kinds: i,
      extra: T(
        q(i, r, { mat: `hHeartShutter`, flowers: !0, flowerFloors: [0] }),
        J({
          y: 3.2,
          a0: -0.4,
          a1: 14.4,
          d: 1.4,
          rail: `hCarvedPine`,
          flowers: !0,
        }),
        J({ y: 6.55, a0: 4.3, a1: 9.7, d: 1, rail: `hCarvedPine` }),
        o,
        nt,
      ),
    },
    back: { kinds: i, extra: T(q(i, r, { mat: `hHeartShutter` }), o) },
    right: {
      kinds: a,
      extra: T(
        q(a, r, { mat: `hHeartShutter`, flowers: !0, flowerFloors: [0] }),
        K(e, t, `woodDark`, 0.9),
      ),
    },
    left: {
      kinds: a,
      extra: T(q(a, r, { mat: `hHeartShutter` }), K(e, t, `woodDark`, 0.9)),
    },
    extra: (e, t, r) => {
      (Z(e, t, r, n, `hSnow`, 0, 0.16),
        N(e, t, `hFieldstone`, 2.5, -2, r.H, r.roofTop + 0.6, 0.9, 0.9));
    },
  };
}
function it(e, t, n) {
  for (let [i, a] of [
    [0.17, -1],
    [n.L - 0.17, 1],
  ])
    for (let o = 0.2, s = 0; o < n.H - 0.1; o += 0.3, s++) {
      let c = H(n, i, o);
      s % 2
        ? e.add(
            `wood`,
            new r(0.15, 0.15, 0.75, 8)
              .rotateX(Math.PI / 2)
              .translate(i, o, 0.05),
            t,
            c,
          )
        : e.add(
            `wood`,
            new r(0.15, 0.15, 0.75, 8)
              .rotateZ(Math.PI / 2)
              .translate(i + a * 0.3, o, -0.17),
            t,
            c,
          );
    }
}
function at(e, t, n) {
  let i = n.grid[0][0];
  for (let n = 0; n < 12; n++)
    for (let a = 0; a < 5; a++) {
      let o = 1 + n * 0.22 + (a % 2) * 0.11,
        s = 0.12 + a * 0.2;
      o < 3.6 &&
        e.add(
          `wood`,
          new r(0.1, 0.1, 0.45, 6).rotateX(Math.PI / 2).translate(o, s, 0.35),
          t,
          i,
        );
    }
  (e.add(`wood`, new r(0.28, 0.3, 0.5, 10).translate(4.4, 0.25, 0.9), t, i),
    O(e, `wood`, t, i, [4.4, 0.52, 0.9], [4.75, 1.05, 1.05], 0.05),
    e.box(I, t, i, 4.33, 4.47, 0.46, 0.62, 0.84, 0.97));
}
function ot() {
  let e = {
    ridge: `z`,
    pitch: 36 * F,
    over: 0.6,
    mat: `hShingleBrown`,
    fascia: `woodDark`,
  };
  return {
    key: `hLogCabin`,
    name: `Trapper’s Log Cabin`,
    plain: 7227948,
    desc: `Snowbound log cabin: round-log walls with crossed corner notches, fieldstone chimney, small log porch, woodpile under the eaves.`,
    W: 8.5,
    D: 9,
    style: {
      wall: `hLogs`,
      t: 0.35,
      bay: 2.83,
      floors: [2.9],
      win: {
        w: 1,
        h: 1.1,
        sill: 0.95,
        type: `grid`,
        lites: [2, 2],
        frame: `woodDark`,
        rec: 0.2,
        curtains: 0.7,
      },
      door: {
        w: 1,
        h: 2.1,
        transom: 0,
        frame: `woodDark`,
        mat: `woodDoor`,
        rec: 0.25,
      },
      base: { mat: `hFieldstone`, h: 0.35, out: 0.04 },
      roof: e,
    },
    front: {
      kinds: (e, t) => (t === 1 ? `door` : `window`),
      extra: T(
        G({
          d: 2,
          y: 0.35,
          top: 2.2,
          beam: 0.2,
          rise: 0.35,
          roof: `hShingleBrown`,
          trim: `wood`,
          deck: `wood`,
          col: `log`,
          cols: [0.3, 3.3, 5.2, 8.2],
          rail: `log`,
          steps: [4.25],
          stepW: 1.2,
        }),
        it,
      ),
    },
    back: { kinds: (e, t) => (t === 1 ? `solid` : `window`), extra: it },
    right: {
      kinds: (e, t) => (t === 1 ? `solid` : `window`),
      extra: Fe(4.15, 1.5, `hFieldstone`, 6.9),
    },
    left: { kinds: (e, t) => (t === 0 ? `solid` : `window`), extra: at },
    extra: (t, n, r) => Z(t, n, r, e, `hSnow`, 0, 0.2),
  };
}
function st() {
  return {
    key: `hCaribbean`,
    name: `Coral Bay Cottage`,
    plain: 9228226,
    desc: `Caribbean cottage: aqua stucco on a white plinth, red tin hip roof, louvred blue shutters, raised verandah with white fretwork and steps.`,
    W: 10,
    D: 9,
    style: {
      wall: `hStuccoAqua`,
      floorMat: [`hStuccoWhite`],
      t: 0.25,
      bay: 2.5,
      floors: [0.9, 3.1],
      win: {
        w: 1,
        h: 1.9,
        sill: 0.35,
        type: `sash`,
        lites: [2, 2],
        frame: `trimWhite`,
        shutter: `hShutterBlue`,
        rec: 0.1,
        curtains: 0.5,
      },
      door: {
        w: 1.1,
        h: 2.1,
        transom: 0.2,
        frame: `trimWhite`,
        mat: `hDoorBlue`,
        rec: 0.12,
      },
      corners: `trimWhite`,
      eaveTrim: `trimWhite`,
      roof: X,
    },
    front: {
      kinds: (e, t) => (e === 0 ? `solid` : t === 1 ? `door` : `window`),
      extra: G({
        d: 2.4,
        y: 0.9,
        top: 3.1,
        beam: 0.18,
        rise: 0.35,
        roof: `hTinRed`,
        trim: `trimWhite`,
        col: `post`,
        colW: 0.08,
        rail: !0,
        fret: !0,
        brackets: !0,
        skirt: `hLattice`,
        steps: [3.75],
        stepW: 1.4,
        gap: 2.4,
        stepMat: `hStuccoWhite`,
      }),
    },
    back: { kinds: (e) => (e === 0 ? `solid` : `window`) },
    right: { kinds: (e) => (e === 0 ? `solid` : `window`) },
    left: { kinds: (e) => (e === 0 ? `solid` : `window`) },
    extra: (e, t, n) => {
      Le(e, t, n, `hTinRed`, 36 * F, 0.35, `trimWhite`);
      let i = n.W / 2 - 0.7,
        a = -n.D / 2 - 0.9;
      (e.add(`tank`, new r(0.5, 0.5, 1.2, 14).translate(i, 0.6, a), t, 0),
        e.add(
          I,
          new r(0.05, 0.05, n.H - 1.4, 8).translate(
            i,
            (n.H + 1.2) / 2 - 0.2,
            a + 0.55,
          ),
          t,
          0,
        ));
    },
  };
}
