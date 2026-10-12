// assets__lab-buildings-view-DJVr8phc 112 — mat
// Lines 37667-38012 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function td() {
  let e = (e, t) =>
      e === 0
        ? t === 1
          ? `door`
          : t === 3
            ? `window`
            : `solid`
        : t === 0
          ? `solid`
          : `window`,
    t = {
      wall: `deOchre`,
      t: 0.45,
      bay: 3,
      floors: [4.4, 3.4],
      parapet: 1,
      win: Jl({
        w: 0.75,
        h: 1.1,
        sill: 1,
        frame: `deGreen`,
        rec: 0.3,
        shutter: `deShutGreen`,
      }),
      win0: Jl({ w: 0.6, h: 0.8, sill: 1.9, frame: `deGreen`, rec: 0.3 }),
      door: {
        w: 1.6,
        h: 2.3,
        transom: 0,
        frame: `deCedar`,
        mat: `deStudDoor`,
        rec: 0.3,
        step: `deFlag`,
      },
      base: { mat: `deEarth`, h: 0.45, out: 0.03 },
    },
    n = (e, t, n) => (e === 1 && t % 2 == 1 ? `window` : `solid`);
  return {
    key: `deRiad`,
    name: `Dar Zitoun Riad`,
    plain: 13208156,
    desc: `Moroccan riad: blind ochre street walls, horseshoe-arched studded door in a zellige alfiz under a green-tiled hood, cedar mashrabiya, tiled wall fountain, roof terrace pavilion.`,
    W: 12,
    D: 12,
    style: t,
    front: {
      kinds: e,
      extra: k(
        Uu({
          b: 1,
          hw: 0.8,
          sp: 2.3,
          rw: 0.2,
          kind: `horse`,
          ring: `deGypsum`,
          tymp: `deCedar`,
          alfiz: `deZellige`,
          dado: 1.1,
          frame: `deGypsum`,
          pent: `deTileGreen`,
          pentTrim: `deCedar`,
          lamps: !0,
        }),
        Cu({ kinds: e, S: t, floors: [0], mat: `deReja` }),
        wu({
          at: [[1, 2]],
          w: 1.8,
          h: 1.9,
          sill: 0.5,
          frame: `deCedar`,
          lat: `deMash`,
          apron: `deCedar`,
          d: 0.55,
        }),
        ed({ u: 7.5 }),
        Ju({ mat: `deTileGreen`, para: 1, h: 0.14, out: 0.1 }),
      ),
    },
    back: {
      kinds: (e, t) => (e === 1 && t !== 0 ? `window` : `solid`),
      extra: Ju({ mat: `deTileGreen`, para: 1, h: 0.14, out: 0.1 }),
    },
    right: {
      kinds: n,
      extra: Ju({ mat: `deTileGreen`, para: 1, h: 0.14, out: 0.1, side: !0 }),
    },
    left: {
      kinds: n,
      extra: Ju({ mat: `deTileGreen`, para: 1, h: 0.14, out: 0.1, side: !0 }),
    },
    extra: (e, t, n) => {
      (Mu(e, t, n.W, n.D, n.H, n.t, `deFlag`),
        $u(e, t, -2.6, -3.2, n.H + 0.05, 4, 3.2, 2.7, `deOchre`, `deTileGreen`),
        zu(e, t, 3.5, -4.2, n.H + 0.05, 0.6),
        Bu(e, t, 3.8, 3.4, n.H + 0.05, 0.5, 1, `aluminum`));
      for (let r of [1.2, 2.6])
        (e.add(
          `dePot`,
          B(0.3, 0.22, 0.55, 10).translate(r, n.H + 0.33, -4.6),
          t,
          0,
        ),
          e.add(
            `deCitrus`,
            new w(0.55, 10, 8).translate(r, n.H + 1.1, -4.6),
            t,
            0,
          ));
    },
  };
}
function nd() {
  let e = (e, t, n) =>
      t === 0 || t === n - 1 ? `solid` : e === 0 && t === 2 ? `door` : `window`,
    t = {
      wall: `deEarth`,
      floorMat: [`deEarth`, `deEarth`, `deRelief`],
      t: 0.5,
      bay: 3,
      floors: [3.4, 3.2, 3.2],
      parapet: 0.6,
      win: Jl({
        w: 0.55,
        h: 0.9,
        sill: 1.1,
        frame: `woodDark`,
        rec: 0.35,
        header: `dePalm`,
        headerH: 0.16,
      }),
      win0: Jl({ w: 0.4, h: 0.6, sill: 1.8, frame: `woodDark`, rec: 0.35 }),
      door: {
        w: 1.4,
        h: 2.3,
        transom: 0,
        frame: `woodDark`,
        mat: `deStudDoor`,
        rec: 0.4,
        step: `deEarth`,
      },
    },
    n = {
      us: [0.9, 14.1],
      z: -0.9,
      r0: 1.35,
      r1: 1,
      rise: 3.2,
      mat: `deEarth`,
      upper: `deRelief`,
      slits: !0,
    },
    r = (e, t) =>
      k(
        Du({
          type: `step`,
          mat: `deEarth`,
          w: 0.5,
          gap: 0.4,
          h: 0.6,
          para: 0.6,
          a0: e,
          a1: t,
        }),
        Xu({ a0: e + 0.3, a1: t - 0.3, y: 9.35, step: 0.75 }),
      );
  return {
    key: `deKasbah`,
    name: `Tighremt Aït Oudar`,
    plain: 11041877,
    desc: `Atlas kasbah: rammed-earth block with four tapering corner towers, lozenge relief on the top storey, stepped merlons, palm-log rafter ends and a studded gate.`,
    W: 15,
    D: 15,
    style: t,
    front: {
      kinds: e,
      extra: k(
        Zu(n),
        r(2.3, 12.7),
        Uu({
          b: 2,
          hw: 0.7,
          sp: 2.3,
          rw: 0.28,
          kind: `round`,
          ring: `deEarth`,
          tymp: `deRelief`,
          rz: 0.12,
        }),
        Cu({ kinds: e, S: t, mat: `deWoodGrille`, frame: `woodDark`, d: 0.06 }),
      ),
    },
    back: {
      kinds: (e, t, n) =>
        t === 0 || t === n - 1 || e === 0 ? `solid` : `window`,
      extra: k(Zu(n), r(2.3, 12.7)),
    },
    right: {
      kinds: (e, t, n) =>
        t === 0 || t === n - 1 || e === 0 ? `solid` : `window`,
      extra: r(1.8, 12.2),
    },
    left: {
      kinds: (e, t, n) =>
        t === 0 || t === n - 1 || e !== 2 ? `solid` : `window`,
      extra: r(1.8, 12.2),
    },
    extra: (e, t, n) => {
      $u(e, t, 2, -2, n.H, 3.2, 3, 2.4, `deEarth`, null, `deStudDoor`);
    },
  };
}
function rd() {
  let e = (e, t) => (e === 0 && t === 1 ? `door` : `window`),
    t = {
      wall: `deMud`,
      floorMat: [`deRubble`, `deRubble`],
      t: 0.5,
      bay: 8 / 3,
      floors: [3.2, 3, 3, 3, 3, 3.2],
      parapet: 0.5,
      parapetMat: `deLimeWash`,
      win: Jl({
        w: 0.8,
        h: 1.2,
        sill: 0.8,
        lites: [2, 2],
        frame: `deGypsum`,
        rec: 0.2,
      }),
      win0: Jl({ w: 0.35, h: 0.5, sill: 2.2, frame: `deDark`, rec: 0.35 }),
      door: {
        w: 1.1,
        h: 2.1,
        transom: 0,
        frame: `deGypsum`,
        mat: `deStudDoor`,
        rec: 0.3,
        step: `deRubble`,
      },
    },
    n = (e) =>
      k(
        Su({
          kinds: e,
          S: t,
          floors: [1, 2, 3, 4, 5],
          kind: `round`,
          fill: `deQamar`,
          ring: `deGypsum`,
          rw: 0.1,
          surround: `deGypsum`,
          sw: 0.14,
        }),
        Yu({
          floors: [2, 3, 4, 5],
          mat: `deChevron`,
          h: 0.26,
          dy: -0.36,
          tile: 1.1,
        }),
        Yu({ floors: [2, 3, 4, 5], mat: `deGypsum`, h: 0.08, dy: -0.44 }),
        Yu({ floors: [2, 3, 4, 5], mat: `deGypsum`, h: 0.08, dy: -0.1 }),
        Du({
          type: `horn`,
          mat: `deGypsum`,
          w: 0.34,
          gap: 0.42,
          h: 0.75,
          para: 0.5,
          t: 0.22,
        }),
      );
  return {
    key: `deYemen`,
    name: `Bayt al-Qamar`,
    plain: 9332294,
    desc: `Sana’a tower house: six storeys of stone base and mud brick, gypsum-framed windows crowned by stained-glass qamariya fanlights, white chevron friezes, horned merlons, a lattice kishk.`,
    W: 8,
    D: 8,
    style: t,
    front: {
      kinds: e,
      extra: k(
        n(e),
        Uu({
          b: 1,
          hw: 0.55,
          sp: 2.1,
          rw: 0.14,
          kind: `round`,
          ring: `deGypsum`,
          tymp: `deQamar`,
        }),
        wu({
          at: [[3, 1]],
          w: 1.4,
          h: 1.6,
          sill: 0.55,
          frame: `deDark`,
          lat: `deMash`,
          d: 0.55,
          apron: `deGypsum`,
        }),
        Ju({ mat: `deGypsum`, para: 0.5, h: 0.08, out: 0.05 }),
      ),
    },
    back: {
      kinds: () => `window`,
      extra: k(
        n(() => `window`),
        Ju({ mat: `deGypsum`, para: 0.5, h: 0.08, out: 0.05 }),
      ),
    },
    right: {
      kinds: (e, t) => (t === 1 || e === 5 ? `window` : `solid`),
      extra: k(
        n((e, t) => (t === 1 || e === 5 ? `window` : `solid`)),
        Ju({ mat: `deGypsum`, para: 0.5, h: 0.08, out: 0.05, side: !0 }),
      ),
    },
    left: {
      kinds: (e, t) => (t === 1 && e > 1 ? `window` : `solid`),
      extra: k(
        n((e, t) => (t === 1 && e > 1 ? `window` : `solid`)),
        Ju({ mat: `deGypsum`, para: 0.5, h: 0.08, out: 0.05, side: !0 }),
      ),
    },
    extra: (e, t, n) => {
      ($u(
        e,
        t,
        -1.2,
        -1.4,
        n.H,
        2.6,
        2.2,
        2.3,
        `deLimeWash`,
        null,
        `deStudDoor`,
      ),
        Bu(e, t, 2.1, 1.8, n.H, 0.45, 0.9));
    },
  };
}
