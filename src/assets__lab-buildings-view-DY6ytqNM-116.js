// assets__lab-buildings-view-DY6ytqNM 116 — mat
// Lines 38926-39160 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function gd() {
  return {
    key: `deMaltese`,
    name: `Dar il-Baħar`,
    plain: 14466946,
    desc: `Maltese town house: honey Globigerina limestone, a two-storey green timber gallarija on stone corbels, louvred shutters, moulded door with a brass knocker and name plaque, statue niche on the corner.`,
    W: 8,
    D: 10,
    style: {
      wall: `deGlobi`,
      t: 0.4,
      bay: 8 / 3,
      floors: [3.8, 3.4, 3.2],
      parapet: 0.8,
      win: ql({
        w: 0.95,
        h: 1.9,
        sill: 0.4,
        lites: [2, 4],
        frame: `deGreen`,
        shutter: `deShutGreen`,
        rec: 0.2,
        casing: `deGoldStone`,
      }),
      win0: ql({
        w: 0.9,
        h: 1.6,
        sill: 1,
        lites: [2, 3],
        frame: `deGreen`,
        rec: 0.2,
        casing: `deGoldStone`,
      }),
      door: {
        w: 1.2,
        h: 2.5,
        transom: 0.6,
        frame: `deGoldStone`,
        mat: `deDoorGreen`,
        rec: 0.3,
        step: `deGlobi`,
        hood: `deGoldStone`,
      },
      base: { mat: `deGoldStone`, h: 0.5, out: 0.03 },
      corners: `deGoldStone`,
      cornice: {
        type: `classic`,
        mat: `deGoldStone`,
        h: 0.35,
        out: 0.35,
        cap: `deGoldStone`,
      },
    },
    front: {
      kinds: (e, t) => (e === 0 && t === 1 ? `door` : `window`),
      signs: [
        { mat: `deMaltName`, rect: [4.9, 5.8, 1.6, 1.9], z0: 0, z1: 0.03 },
      ],
      extra: A(
        Le({
          bays: [1],
          floors: [1, 2],
          mat: `deDoorGreen`,
          trim: `deGreen`,
          depth: 0.8,
          sill: 0.8,
          cap: `deGreen`,
        }),
        (e, t, n) => {
          let r = n.grid[0][1],
            a = 1.5 * n.bw;
          (e.add(
            `brass`,
            new o(0.1, 0.025, 6, 12).translate(a, 1.45, -0.3),
            t,
            r,
          ),
            e.add(`brass`, new i(0.06, 8, 6).translate(a, 1.62, -0.31), t, r));
        },
      ),
    },
    back: { kinds: () => `window` },
    right: {
      kinds: (e, t) => (t === 2 ? `window` : `solid`),
      extra: hd({ u: 0.75, f: 1, y: 1 }),
    },
    left: { kinds: (e, t) => (t === 1 ? `window` : `solid`) },
    extra: (e, t, n) => {
      (Qu(e, t, 0.8, -2.5, n.H, 3, 2.4, 2.4, `deGlobi`, null, `deDoorGreen`),
        zu(e, t, -2.3, -1.5, n.H, 0.5, 1, `aluminum`));
    },
  };
}
var _d = (e) => (t, n, r) => {
  let i = e.b,
    a = e.f,
    o = r.grid[a][i],
    s = (i + 0.5) * r.bw,
    c = r.ys[a] + 0.03,
    l = e.hw,
    u = e.st,
    d = c + e.sp,
    f = c + e.h,
    p = s - e.half,
    m = s + e.half,
    h = [[p, c]];
  for (let e of [-1, 0, 1]) {
    let t = s + e * u;
    h.push([t - l, c], ...gu(`pointed`, t, d, l), [t + l, c]);
  }
  (h.push([m, c], [m, f], [p, f]), hu(t, n, o, e.mat, h, 0, 0.1));
  for (let e of [-1.5, -0.5, 0.5, 1.5]) {
    let r = s + e * u;
    (t.add(
      `deMarble`,
      V(0.07, 0.08, d - c - 0.2, 10).translate(r, c + (d - c - 0.2) / 2, 0.16),
      n,
      o,
    ),
      t.box(`deMarble`, n, o, r - 0.13, r + 0.13, d - 0.2, d, 0.03, 0.29));
  }
  for (let e of [-1, 0, 1])
    yu(t, n, o, `deGoldStone`, `pointed`, s + e * u, d, d, l, 0.08, 0.1, 0.14);
};
function vd() {
  return {
    key: `deLevant`,
    name: `Beit Haddad`,
    plain: 13610622,
    desc: `Levantine stone mansion: dressed sandstone, a central triple pointed-arch window on marble columns over an iron balcony, arched side windows with keystones and green shutters, red-tiled hip roof.`,
    W: 13,
    D: 11,
    style: {
      wall: `deSandstone`,
      t: 0.45,
      bay: 13 / 3,
      floors: [3.8, 3.9],
      win: ql({
        w: 1,
        h: 2.1,
        sill: 0.6,
        lites: [2, 3],
        frame: `deGreen`,
        rec: 0.25,
        arch: 0.5,
        archMat: `deGoldStone`,
        ringW: 0.2,
        keystone: !0,
        sillMat: `deGoldStone`,
        shutter: `deShutGreen`,
      }),
      balcony: { w: 3.6, h: 3, depth: 0.9, slab: `deGoldStone`, railMat: z },
      door: {
        w: 1.4,
        h: 2.3,
        transom: 0.5,
        frame: `deGoldStone`,
        mat: `deDoorGreen`,
        rec: 0.35,
        step: `deGoldStone`,
      },
      base: { mat: `deRubble`, h: 0.7, out: 0.05 },
      belt: { mat: `deGoldStone`, h: 0.22, out: 0.06 },
      cornice: {
        type: `classic`,
        mat: `deGoldStone`,
        h: 0.3,
        out: 0.25,
        dentils: !0,
      },
      roof: Au,
    },
    front: {
      kinds: (e, t) => (t === 1 ? (e === 0 ? `door` : `balcony`) : `window`),
      extra: A(
        _d({
          b: 1,
          f: 1,
          half: 1.86,
          hw: 0.48,
          st: 1.12,
          sp: 2,
          h: 3.05,
          mat: `deSandstone`,
        }),
        Hu({
          b: 1,
          hw: 0.7,
          sp: 2.8,
          rw: 0.18,
          ring: `deGoldStone`,
          tymp: `glass`,
          rz: 0.08,
        }),
      ),
    },
    back: { kinds: (e, t) => (e === 0 && t === 1 ? `door` : `window`) },
    right: { kinds: () => `window` },
    left: { kinds: (e, t) => (t === 1 ? `solid` : `window`) },
    extra: (e, t, n) => {
      ku(e, t, n, `deTerraRed`, 26 * Ul, 0.55, `deTerraDark`);
    },
  };
}
function yd(e, t, n, r, i, a, o) {
  for (let s = r; s < i - 0.5; s += 0.62) {
    let r = 1 + Math.floor(o() * 3),
      i = [`deCitrus`, `deSpiceGreen`, `deSpiceRed`, `deSpiceYellow`][
        Math.floor(o() * 4)
      ];
    for (let i = 0; i < r; i++)
      e.box(
        `deCedar`,
        t,
        n,
        s,
        s + 0.56,
        i * 0.32,
        i * 0.32 + 0.3,
        a,
        a + 0.42,
      );
    e.box(
      i,
      t,
      n,
      s + 0.04,
      s + 0.52,
      r * 0.32 - 0.06,
      r * 0.32 + 0.02,
      a + 0.04,
      a + 0.38,
    );
  }
}
