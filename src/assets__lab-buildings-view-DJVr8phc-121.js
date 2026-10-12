// assets__lab-buildings-view-DJVr8phc 121 — box
// Lines 40420-40732 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function Pd() {
  return {
    key: `deMotel`,
    name: `Sands Motor Lodge Office`,
    plain: 15517602,
    desc: `Route 66 adobe motel office: peach stucco with a stepped Pueblo-deco crest, turquoise trim and vigas, big lobby windows, neon OFFICE blade, drive-through porte-cochère, and a tall star-topped pylon with VACANCY and an arrow.`,
    W: 12,
    D: 9,
    style: {
      wall: `deMotelPeach`,
      t: 0.35,
      bay: 3,
      floors: [3.6],
      parapet: 0.8,
      win: Jl({
        w: 1.6,
        h: 1.4,
        sill: 0.8,
        lites: [2, 1],
        frame: `deTurq`,
        rec: 0.15,
        header: `woodDark`,
        headerH: 0.2,
      }),
      store: { frame: `deTurq`, fascia: `deTurq` },
      door: {
        w: 1.1,
        h: 2.3,
        transom: 0.4,
        frame: `deTurq`,
        mat: `deDoorTeal`,
        glazed: !0,
        rec: 0.25,
      },
      base: { mat: `dePueblo`, h: 0.45, out: 0.04 },
    },
    front: {
      kinds: (e, t) => (t === 1 ? `door` : t === 2 ? `store` : `window`),
      extra: k(
        (e, t, n) => {
          let r = n.grid[0][1];
          Re(e, t, r, `deOffice`, 3.55, 2.4, 3.35, 0.25, 1.2, `deTurq`, {
            bulbs: !0,
          });
          let i = n.L / 2,
            a = n.grid[0][z(n, i)],
            o = n.H + 0.8;
          (Tu(e, t, a, `step`, `deMotelPeach`, i, 4.6, o, 1.3, -n.t, 0),
            e.add(
              `deTurq`,
              new se(0.35, 0.5, 16).translate(i, o + 0.7, 0.01),
              t,
              a,
            ));
          let s = n.grid[0][3];
          (e.box(`deRed`, t, s, 9.5, 10.4, 0, 1.9, 0.1, 0.85),
            e.box(`deNeonRed`, t, s, 9.6, 10.3, 1.2, 1.75, 0.85, 0.87),
            e.box(`trimWhite`, t, s, 10.6, 11.6, 0, 1.6, 0.1, 0.85),
            e.box(`deChairBlue`, t, s, 10.7, 11.5, 1.1, 1.45, 0.85, 0.87));
          for (let r of [0.6, 5.9]) {
            e.box(
              `woodDark`,
              t,
              n.grid[0][z(n, r)],
              r,
              r + 1.6,
              0.42,
              0.48,
              0.3,
              0.75,
            );
            for (let i of [r + 0.1, r + 1.45])
              e.box(R, t, n.grid[0][z(n, r)], i, i + 0.05, 0, 0.42, 0.35, 0.7);
          }
        },
        Pu({ para: 0.8, mat: `deMotelPeach`, vigas: !0, vigaStep: 1 }),
      ),
    },
    right: {
      kinds: (e, t) => (t === 1 ? `door` : `window`),
      extra: k(
        (e, t, n) => {
          let r = 3.4,
            i = n.L - 1;
          for (let [a, o, s] of mu(n, 1, i)) {
            let i = n.grid[0][s];
            (e.box(`deMotelPeach`, t, i, a, o, r, 3.9, 0, 6),
              e.box(`deTurq`, t, i, a, o, 3.9, 3.98, 0, 6.05),
              e.box(`deTurq`, t, i, a, o, 3.32, r, 5.6, 6));
          }
          for (let a of [1.4, i - 0.4]) {
            let i = n.grid[0][z(n, a)];
            e.box(`dePueblo`, t, i, a - 0.35, a + 0.35, 0, r, 5.25, 5.95);
          }
          for (let r = 1.3; r < i; r += 0.9)
            e.add(
              `woodDark`,
              B(0.08, 0.09, 0.5, 7)
                .rotateX(Math.PI / 2)
                .translate(r, 3.65, 6.2),
              t,
              n.grid[0][z(n, r)],
            );
        },
        Pu({ para: 0.8, mat: `deMotelPeach` }),
      ),
    },
    left: {
      kinds: () => `window`,
      extra: Pu({ para: 0.8, mat: `deMotelPeach` }),
    },
    back: {
      kinds: (e, t) => (t === 3 ? `door` : `window`),
      extra: Pu({ para: 0.8, mat: `deMotelPeach` }),
    },
    extra: (e, t, n) => {
      (Nd(e, t, -n.W / 2 - 1.8, n.D / 2 + 2.4),
        e.box(`aluminum`, t, 0, 1, 2.3, n.H, n.H + 1, -2, -0.8));
    },
  };
}
function Fd(e, t, n, r, i) {
  for (let a of [-0.28, 0.28])
    e.box(R, t, n, r - 2.2, r + 2.2, 0, 0.08, i + a - 0.03, i + a + 0.03);
  for (let a = r - 2; a <= r + 2; a += 0.5)
    e.box(`woodDark`, t, n, a - 0.08, a + 0.08, 0, 0.04, i - 0.45, i + 0.45);
  (e.add(
    `deRustTin`,
    new s(0.62, 0.42, 0.6, 4, 1)
      .rotateY(Math.PI / 4)
      .scale(1.1, 1, 0.7)
      .translate(r, 0.62, i),
    t,
    n,
  ),
    e.add(
      `deOre`,
      new w(0.5, 8, 5, 0, Math.PI * 2, 0, Math.PI / 2)
        .scale(1.3, 0.5, 0.8)
        .translate(r, 0.9, i),
      t,
      n,
    ));
  for (let a of [-0.35, 0.35])
    for (let o of [-0.32, 0.32])
      e.add(
        R,
        B(0.15, 0.15, 0.06, 10)
          .rotateX(Math.PI / 2)
          .translate(r + a, 0.2, i + o),
        t,
        n,
      );
}
function Id() {
  return {
    key: `deAssay`,
    name: `Silver Queen Assay Office`,
    plain: 10323046,
    desc: `Mining-town assay office: rough fieldstone with red-stone quoins and corbelled cornice, cast-iron shopfront, iron-shuttered sash windows, projecting ASSAYER sign, faded ghost sign on the side, ore cart on rails and furnace chimney.`,
    W: 9,
    D: 13,
    style: {
      wall: `deRubble`,
      t: 0.5,
      bay: 3,
      floors: [4, 3.4],
      win: Jl({
        w: 0.9,
        h: 1.8,
        sill: 0.8,
        type: `sash`,
        lites: [1, 2],
        frame: `trimWhite`,
        rec: 0.25,
        shutter: `deIronShut`,
        header: `deRedRubble`,
        headerH: 0.3,
        keystone: !0,
      }),
      store: { frame: R, fascia: R },
      door: {
        w: 1.3,
        h: 2.5,
        transom: 0.6,
        frame: R,
        mat: `deIronShut`,
        rec: 0.3,
        step: `granite`,
      },
      cornice: {
        type: `corbel`,
        mat: `deRedRubble`,
        h: 0.6,
        cap: `deRedRubble`,
      },
      base: { mat: `granite`, h: 0.4, out: 0.04 },
      corners: `deRedRubble`,
    },
    front: {
      kinds: (e, t) => (e === 0 ? (t === 1 ? `door` : `store`) : `window`),
      signs: [
        { mat: `deAssay`, rect: [0.4, 8.6, 3.28, 3.82], z0: 0.08, z1: 0.1 },
      ],
      extra: (e, t, n) => {
        for (let [r, i, a] of mu(n, 0.3, 8.7))
          e.box(R, t, n.grid[0][a], r, i, 3.2, 3.9, 0, 0.08);
        (Re(e, t, n.grid[1][2], `deAssayer`, 8.7, 4.6, 5.7, 0.25, 1.35, R),
          Fd(e, t, n.grid[0][0], 2.2, 2.4));
        let r = n.grid[0][2];
        (e.box(`woodDark`, t, r, 6.6, 8.6, 0, 0.9, 0.3, 1.2),
          e.box(`deOre`, t, r, 6.7, 8.5, 0.75, 0.95, 0.4, 1.1),
          e.box(R, t, r, 7.9, 7.95, 0.9, 1.9, 0.75, 0.8),
          e.box(R, t, r, 7.5, 8.35, 1.85, 1.9, 0.75, 0.8));
        for (let n of [7.55, 8.3])
          e.add(`brass`, B(0.14, 0.1, 0.05, 10).translate(n, 1.5, 0.78), t, r);
        for (let [r, i, a] of mu(n, 0, n.L))
          e.box(`woodDark`, t, n.grid[0][a], r, i, 0, 0.12, 0, 1.6);
      },
    },
    left: {
      kinds: (e, t) => (e === 1 ? `solid` : t % 2 ? `window` : `solid`),
      signs: [
        {
          mat: `deAssayGhost`,
          rect: [1.4, 10.8, 4.4, 7],
          z0: 0.005,
          z1: 0.012,
        },
      ],
    },
    right: { kinds: (e, t) => (t === 1 ? `solid` : `window`) },
    back: { kinds: (e, t) => (e === 0 && t === 1 ? `door` : `window`) },
    extra: (e, t, n) => {
      (A(e, t, `brickRed`, 2.4, -4.8, n.H - 1, n.H + 2.6, 1, 1),
        e.add(R, B(0.25, 0.25, 1.2, 10).translate(2.4, n.H + 3.3, -4.8), t, 0),
        e.add(R, new i(0.45, 0.35, 10).translate(2.4, n.H + 4.1, -4.8), t, 0));
    },
  };
}
var Ld = (e) => (t, n, i) => {
    let a = e.u ?? i.L / 2,
      o = i.H,
      s = [
        [3.8, 0],
        [3.8, 0.7],
        [3.3, 0.75],
        [3.1, 0.95],
        [2.95, 1.25],
        [2.55, 1.35],
        [2.3, 1.55],
        [2.25, 1.9],
        [1.8, 2],
        [1.45, 2.2],
        [1.2, 2.7],
        [0.7, 3.05],
        [0, 3.15],
      ],
      c = [
        ...s.map(([e, t]) => [a - e, o + t]),
        ...s
          .slice(0, -1)
          .reverse()
          .map(([e, t]) => [a + e, o + t]),
      ],
      l = i.grid[i.top][z(i, a)];
    gu(t, n, l, e.mat, c, -i.t, 0.08);
    for (let a = 1; a < c.length - 2; a++) {
      let [o, s] = [c[a], c[a + 1]];
      t.add(
        e.cap,
        new r(Math.hypot(s[0] - o[0], s[1] - o[1]) + 0.1, 0.1, i.t + 0.26)
          .rotateZ(Math.atan2(s[1] - o[1], s[0] - o[0]))
          .translate(
            (o[0] + s[0]) / 2,
            (o[1] + s[1]) / 2 + 0.05,
            -i.t / 2 + 0.04,
          ),
        n,
        l,
      );
    }
    (t.add(e.cap, new se(0.42, 0.6, 20).translate(a, o + 2.1, 0.095), n, l),
      t.add(`glass`, new y(0.42, 20).translate(a, o + 2.1, 0.085), n, l));
    for (let i of [0, Math.PI / 2])
      t.add(
        e.cap,
        new r(0.84, 0.06, 0.04).rotateZ(i).translate(a, o + 2.1, 0.1),
        n,
        l,
      );
    e.sign &&
      t.box(e.sign, n, l, a - 1.8, a + 1.8, o + 0.85, o + 1.45, 0.08, 0.1, {
        planar: (e, t) => [(e - a + 1.8) / 3.6, (t - o - 0.85) / 0.6],
      });
  },
  Rd = (e) => (t, n, r) => {
    for (let i = e.a0 ?? 0.6; i <= r.L - (e.a0 ?? 0.6) + 0.001; i += e.step) {
      let a = r.grid[r.top][z(r, i)];
      (D(t, e.mat, n, a, [i, r.H - 1.5, 0.05], [i, r.H - 0.65, e.d], 0.16),
        t.box(
          e.mat,
          n,
          a,
          i - 0.08,
          i + 0.08,
          r.H - 0.7,
          r.H - 0.52,
          0,
          e.d + 0.1,
        ));
    }
  };
