// assets__lab-buildings-view-DJVr8phc 114 — mat
// Lines 38330-38658 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function cd() {
  let e = {
      wall: `deSandstone`,
      t: 0.7,
      bay: 3.75,
      floors: [5, 4],
      parapet: 0.8,
      win: Jl({
        w: 0.8,
        h: 1.5,
        sill: 1.4,
        frame: `woodDark`,
        rec: 0.45,
        arch: 0.4,
        archMat: `deGoldStone`,
        ringW: 0.16,
      }),
      door: {
        w: 1.3,
        h: 2.4,
        transom: 0,
        frame: `woodDark`,
        mat: `deStudDoor`,
        rec: 0.5,
        step: `deSandstone`,
      },
      base: { mat: `deRubble`, h: 0.7, out: 0.06 },
      belt: { mat: `deGoldStone`, h: 0.22, out: 0.06 },
    },
    t = {
      us: [0.4],
      z: -0.4,
      r: 1.6,
      rise: 2.8,
      mat: `deSandstone`,
      cap: `deGoldStone`,
    },
    n = (e, t) =>
      Du({
        type: `step`,
        mat: `deSandstone`,
        w: 0.5,
        gap: 0.45,
        h: 0.6,
        para: 0.8,
        a0: e,
        a1: t,
      }),
    r = (e, t, n) => (e === 1 && t > 0 && t < n - 1 ? `window` : `solid`);
  return {
    key: `deCaravan`,
    name: `Khan al-Harir`,
    plain: 13610622,
    desc: `Caravanserai: sandstone walls with round corner bastions, a tall pishtaq gate with an ablaq pointed arch, zellige tympanum and name band, blind niches, camel trough.`,
    W: 30,
    D: 24,
    style: e,
    front: {
      kinds: (e, t, n) =>
        e === 1 && t > 0 && t < n - 1 && t !== 3 && t !== 4
          ? `window`
          : `solid`,
      signs: [
        {
          mat: `deKhanBand`,
          rect: [11.9, 18.1, 9.75, 10.3],
          z0: 1.21,
          z1: 1.24,
        },
      ],
      extra: k(
        od({
          a: 11.5,
          c: 18.5,
          hw: 2.3,
          sp: 5.6,
          d: 1.2,
          rise: 2.4,
          mat: `deSandstone`,
          frame: `deGoldStone`,
          tymp: `deZellige`,
          doorH: 4,
          ablaq: [`deMarble`, `deRedRubble`],
        }),
        Wu({
          bays: [1, 2, 5, 6],
          kind: `pointed`,
          fill: `deSandPlaster`,
          ring: `deGoldStone`,
          y0: 0.7,
          sp: 2.9,
          hw: 0.9,
        }),
        Qu({ ...t, us: [0.4, 29.6] }),
        n(1.8, 11.4),
        n(18.6, 28.2),
      ),
    },
    back: {
      kinds: (e, t, n) => (e === 0 && t === 4 ? `door` : r(e, t, n)),
      extra: k(Qu({ ...t, us: [0.4, 29.6] }), n(1.8, 28.2)),
    },
    right: { kinds: r, extra: n(1.6, 21) },
    left: { kinds: r, extra: k(n(1.6, 21), (e, t, n) => sd(e, t, n, 8, 14)) },
    extra: (e, t, n) => {
      Ru(e, t, 0, -1, n.H, 3.2, `deSandPlaster`, {
        drum: 1.4,
        drumMat: `deSandstone`,
        finial: `brass`,
        seg: 20,
      });
    },
  };
}
var ld = (e) => (t, n, r) => {
    let { u0: i, y1: a, n: o } = e,
      s = 0.28,
      c = a / o,
      l = e.w ?? 1,
      u = i + o * s,
      d = e.land ?? 1;
    for (let a = 0; a < o; a++) {
      let o = i + a * s;
      t.box(
        e.mat,
        n,
        r.grid[0][z(r, o + s / 2)],
        o,
        o + s,
        0,
        (a + 1) * c,
        0.02,
        l,
      );
    }
    t.box(e.mat, n, r.grid[0][z(r, u + d / 2)], u, u + d, 0, a, 0.02, l);
    let f = [
      [i - 0.3, 0],
      [u + d, 0],
      [u + d, a + 0.9],
      [u, a + 0.9],
      [i, 0.9],
      [i - 0.3, 0.9],
    ];
    if (
      (gu(t, n, r.grid[0][z(r, (i + u) / 2)], e.mat, f, l, l + 0.22),
      t.add(
        e.mat,
        B(0.11, 0.11, Math.hypot(u - i, a), 8)
          .rotateZ(-Math.atan2(u - i, a))
          .translate((i + u) / 2, a / 2 + 0.9, l + 0.11),
        n,
        r.grid[0][z(r, (i + u) / 2)],
      ),
      e.pots)
    )
      for (let e = 2; e < o; e += 3) {
        let a = i + e * s + 0.14,
          o = (e + 1) * c;
        (t.add(
          `deBlue`,
          B(0.12, 0.09, 0.22, 8).translate(a, o + 0.11, l - 0.2),
          n,
          r.grid[0][z(r, a)],
        ),
          t.add(
            `deGeranium`,
            new w(0.16, 8, 6).translate(a, o + 0.3, l - 0.2),
            n,
            r.grid[0][z(r, a)],
          ));
      }
  },
  ud = (e) => (t, n, r) => {
    let { u: i, a, c: o, y0: s, y1: c } = e,
      l = e.mat || `deBougain`;
    t.add(
      `woodDark`,
      B(0.05, 0.07, s, 6).translate(i, s / 2, 0.12),
      n,
      r.grid[0][z(r, i)],
    );
    for (let [e, i] of mu(r, a, o)) {
      let a = fu(r, (e + i) / 2, (s + c) / 2);
      (t.box(l, n, a, e, i, s, c, 0.06, 0.08, {
        planar: (e, t) => [e / 1.4, t / 1.4],
      }),
        t.box(l, n, a, e, i, s - 0.05, s + 0.02, 0.06, 0.5, {
          planar: (e, t, n) => [e / 1.4, n / 1.4],
        }),
        t.box(l, n, a, e, i, s + 0.02, s + 0.5, 0.48, 0.5, {
          planar: (e, t) => [e / 1.4, t / 1.4],
        }));
    }
  };
function dd() {
  let e = Jl({
      w: 0.8,
      h: 1.1,
      sill: 0.9,
      frame: `deBlue`,
      shutter: `deShutBlue`,
      rec: 0.25,
      sillMat: `deWhite`,
    }),
    t = {
      wall: `deWhite`,
      t: 0.35,
      bay: 2.5,
      floors: [3],
      parapet: 0,
      win: e,
      door: {
        w: 1,
        h: 2.1,
        transom: 0.35,
        frame: `deBlue`,
        mat: `deDoorBlue`,
        rec: 0.25,
        step: `deWhite`,
      },
      base: { mat: `deConcGrey`, h: 0.12, out: 0.04 },
    },
    n = (e = {}) => Nu({ h: 0.75, mat: `deWhite`, ...e });
  return {
    key: `deCyclad`,
    name: `Spiti Galazio`,
    plain: 16118764,
    desc: `Cycladic island house: stepped whitewashed cubes with bullnose parapets, blue doors and shutters, a blue-domed upper room, an outside stair to the roof terrace, reed pergola, bougainvillea.`,
    W: 10,
    D: 9,
    style: t,
    tiers: [
      {
        front: {
          kinds: (e, t) => (t === 1 ? `door` : t === 2 ? `solid` : `window`),
          extra: k(n(), ud({ u: 3.2, a: 1.6, c: 4.3, y0: 2.55, y1: 3.2 })),
        },
        right: {
          kinds: (e, t) => (t === 2 ? `window` : `solid`),
          extra: k(
            n({ gaps: [[4.2, 5.2]] }),
            ld({ u0: 0.8, y1: 3, n: 12, mat: `deWhite`, pots: !0 }),
          ),
        },
        left: { kinds: (e, t) => (t === 1 ? `window` : `solid`), extra: n() },
        back: {
          kinds: (e, t) => (t === 2 ? `door` : t === 0 ? `window` : `solid`),
          extra: n(),
        },
      },
      {
        W: 5.6,
        D: 5.2,
        dz: -1.5,
        floors: [2.8],
        style: { bay: 2.8, win: { ...e, w: 0.7, h: 1 } },
        front: { kinds: (e, t) => (t === 0 ? `door` : `window`), extra: n() },
        right: { kinds: () => `window`, extra: n() },
        left: { kinds: () => `solid`, extra: n() },
        back: { kinds: () => `window`, extra: n() },
      },
    ],
    extra: (e, t, n) => {
      (Mu(e, t, 10, 9, 3, 0.35, `deLimeWash`, 1.5),
        Mu(e, t, n.W, n.D, n.H, 0.35, `deLimeWash`),
        Ru(e, t, 0.9, -0.3, n.H, 1.25, `deBlue`, {
          drum: 0.7,
          drumMat: `deWhite`,
          finial: `deWhite`,
          seg: 20,
        }),
        A(e, t, `deWhite`, -2, 1.4, n.H, n.H + 1.3, 0.6, 0.6));
      for (let [n, r] of [
        [-4.4, 5.45],
        [-1.2, 5.45],
      ])
        e.box(
          `woodDark`,
          t,
          0,
          n - 0.07,
          n + 0.07,
          3.05,
          5.3,
          r - 0.07,
          r + 0.07,
        );
      for (let n of [-4.4, -2.8, -1.2])
        e.box(`woodDark`, t, 0, n - 0.06, n + 0.06, 5.3, 5.42, 2.6, 5.6);
      (e.box(`woodDark`, t, 0, -4.5, -1.1, 5.2, 5.3, 5.38, 5.52),
        e.box(`deReedCut`, t, 0, -4.6, -1, 5.42, 5.45, 2.6, 5.62),
        Ku(e, t, 0, -2.9, 4.2, `deCheck`, `deChairBlue`));
    },
  };
}
var fd = (e) => (t, n, r) => {
  let { a0: i, a1: a, d: o, y: s } = e,
    c = Math.max(1, Math.round((a - i) / 3));
  for (let l = 0; l <= c; l++) {
    let u = i + ((a - i) * l) / c,
      d = r.grid[0][z(r, u)];
    for (let r of [e.z0 + 0.08, o - 0.08])
      t.box(`woodDark`, n, d, u - 0.08, u + 0.08, 0, s, r - 0.08, r + 0.08);
    t.box(
      `woodDark`,
      n,
      d,
      u - 0.06,
      u + 0.06,
      s,
      s + 0.16,
      e.z0 - 0.1,
      o + 0.2,
    );
  }
  for (let [c, l, u] of mu(r, i - 0.2, a + 0.2)) {
    let i = r.grid[0][u];
    for (let r of [e.z0 + 0.08, o - 0.08])
      t.box(`woodDark`, n, i, c, l, s - 0.2, s, r - 0.08, r + 0.08);
    (t.box(`deVine`, n, i, c, l, s + 0.16, s + 0.19, e.z0 - 0.1, o + 0.3, {
      planar: (e, t, n) => [e / 1.6, n / 1.6],
    }),
      t.box(`deVine`, n, i, c, l, s - 0.7, s + 0.16, o + 0.02, o + 0.04, {
        planar: (e, t) => [e / 1.6, t / 1.6],
      }),
      t.box(`deFlag`, n, i, c, l, 0, 0.06, 0, o));
  }
};
