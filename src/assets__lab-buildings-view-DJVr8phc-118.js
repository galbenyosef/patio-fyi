// assets__lab-buildings-view-DJVr8phc 118 — mat
// Lines 39501-39848 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function Cd(e, t, n, r, i, a, o, s) {
  e.box(s, t, 0, n - a / 2, n + a / 2, i, i + o, r - a / 2, r + a / 2);
  let c = i + o;
  Ou(t, n, r, a / 2, a / 2).forEach(([t, n]) => {
    for (let r = 0; r < 3; r++) {
      let i = -n + ((r + 0.5) * 2 * n) / 3;
      e.box(`deDark`, t, 0, i - 0.22, i + 0.22, c - 2.6, c - 0.5, -0.02, 0.01);
      for (let n of [c - 1.9, c - 1.2])
        e.box(`dePalm`, t, 0, i - 0.24, i + 0.24, n, n + 0.05, -0.1, 0.02);
    }
    for (let r = 0; r < 3; r++)
      yu(
        e,
        t,
        0,
        `deSandPlaster`,
        `pointed`,
        -n + ((r + 0.5) * 2 * n) / 3,
        c - 4.3,
        c - 3.6,
        0.25,
        0,
        0.02,
      );
    (e.box(s, t, 0, -n - 0.08, n + 0.08, c - 0.45, c - 0.3, -0.05, 0.08),
      e.box(`deChevron`, t, 0, -n, n, c - 3.2, c - 2.9, 0.01, 0.03, {
        planar: (e, t) => [(e + n) / 1.1, (t - c + 3.2) / 0.3],
      }),
      Eu(
        e,
        t,
        () => 0,
        { type: `tri`, mat: s, w: 0.4, gap: 0.2, h: 0.5 },
        -n + 0.1,
        n - 0.1,
        c,
        -0.2,
        0,
      ));
  });
  for (let i of [0, Math.PI / 2])
    for (let o of [c - 2.2, c - 0.9])
      e.add(
        `dePalm`,
        B(0.06, 0.06, a + 0.9, 6)
          .rotateZ(Math.PI / 2)
          .rotateY(i)
          .translate(n, o, r),
        t,
        0,
      );
}
var wd = (e) => (t, n, r) => {
  let i = r.H + 0.1,
    a = Math.max(1, Math.round((e.a1 - e.a0) / 1)),
    o = (e.a1 - e.a0) / a;
  for (let s = 0; s < a; s++) {
    let a = e.a0 + (s + 0.5) * o;
    yu(
      t,
      n,
      r.grid[r.top][z(r, a)],
      `deSandPlaster`,
      `pointed`,
      a,
      i,
      i + 0.3,
      0.26,
      0,
      0.02,
    );
  }
};
function Td() {
  let e = {
      wall: `deCoral`,
      t: 0.5,
      bay: 3,
      floors: [3.6, 3.4],
      parapet: 1,
      win: Jl({ w: 0.8, h: 1.3, sill: 0.8, frame: `deTeak`, rec: 0.3 }),
      win0: Jl({ w: 0.6, h: 0.8, sill: 1.6, frame: `deTeak`, rec: 0.3 }),
      door: {
        w: 1.4,
        h: 2.2,
        transom: 0,
        frame: `deTeak`,
        mat: `deStudDoor`,
        rec: 0.35,
        step: `deCoral`,
      },
      base: { mat: `deSandPlaster`, h: 0.4, out: 0.02 },
    },
    t = (e, t) =>
      e === 0
        ? t === 1
          ? `door`
          : t === 3
            ? `window`
            : `solid`
        : t === 0
          ? `solid`
          : `window`,
    n = (e, t) =>
      k(
        Du({
          type: `tri`,
          mat: `deCoral`,
          w: 0.4,
          gap: 0.25,
          h: 0.5,
          para: 1,
          a0: e,
          a1: t,
        }),
        wd({ a0: e, a1: t }),
      );
  return {
    key: `deBadgir`,
    name: `Bayt al-Hawa`,
    plain: 14931382,
    desc: `Gulf wind-tower house: coral-stone walls, a tall barjeel wind catcher with slatted slots and palm-pole ties, triangular crenellations over blind arches, teak lattice balcony, studded door with an arched gypsum fanlight.`,
    W: 12,
    D: 10,
    style: e,
    front: {
      kinds: t,
      extra: k(
        n(0.1, 11.9),
        Uu({
          b: 1,
          hw: 0.7,
          sp: 2.2,
          rw: 0.16,
          kind: `pointed`,
          ring: `deSandPlaster`,
          tymp: `deMashWhite`,
        }),
        wu({
          at: [[1, 2]],
          w: 2.2,
          h: 1.8,
          sill: 0.4,
          frame: `deTeak`,
          lat: `deMash`,
          d: 0.7,
          apron: `deTeak`,
        }),
        Cu({ kinds: t, S: e, mat: `deWoodGrille`, frame: `deTeak`, d: 0.06 }),
        Xu({ a0: 0.4, a1: 11.6, y: 6.7, step: 1.1, len: 0.45 }),
      ),
    },
    back: {
      kinds: (e, t) => (t % 2 ? `window` : `solid`),
      extra: n(0.1, 11.9),
    },
    right: {
      kinds: (e, t) => (e === 1 && t === 1 ? `window` : `solid`),
      extra: n(0.3, 8.7),
    },
    left: {
      kinds: (e, t) => (e === 1 ? `window` : `solid`),
      extra: n(0.3, 8.7),
    },
    extra: (e, t, n) => {
      (Mu(e, t, n.W, n.D, n.H, n.t, `deSandPlaster`),
        Cd(e, t, 3.8, -2.6, n.H, 2.6, 6.5, `deCoral`),
        Bu(e, t, -3.6, -2.8, n.H, 0.5, 1));
    },
  };
}
var Ed = (e) => (t, n, r) => {
  for (let i of e.floors)
    for (let a = e.a0; a <= e.a1; a += e.step ?? 1.4)
      t.box(
        `deDark`,
        n,
        r.grid[i][z(r, a)],
        a - 0.07,
        a + 0.07,
        r.ys[i] + e.y,
        r.ys[i] + e.y + 0.7,
        -0.05,
        0.02,
      );
};
function Dd() {
  let e = {
      wall: `deFortPlaster`,
      t: 0.8,
      bay: 26 / 7,
      floors: [4.5, 3.5],
      parapet: 1.1,
      win: Jl({ w: 0.6, h: 0.9, sill: 1.2, frame: `woodDark`, rec: 0.55 }),
      door: {
        w: 1.3,
        h: 2.3,
        transom: 0,
        frame: `woodDark`,
        mat: `deStudDoor`,
        rec: 0.6,
        step: `deFortPlaster`,
      },
      base: { mat: `deRubble`, h: 1, out: 0.1 },
    },
    t = {
      us: [1, 25],
      z: -1,
      r0: 2.1,
      r1: 1.9,
      rise: 3.2,
      mat: `deFortPlaster`,
      merlon: `box`,
      slits: !0,
    },
    n = (e, t) =>
      Du({
        w: 0.7,
        gap: 0.55,
        h: 0.7,
        para: 1.1,
        mat: `deFortPlaster`,
        a0: e,
        a1: t,
      });
  return {
    key: `deFort`,
    name: `Fort Saint-Rémy`,
    plain: 14203276,
    desc: `Colonial desert fort: plastered walls on a rubble plinth with rows of rifle loopholes, square crenellated corner bastions, a tall round-arched gate tower with its painted name, flagpole.`,
    W: 26,
    D: 26,
    style: e,
    front: {
      kinds: () => `solid`,
      signs: [
        { mat: `deFortSign`, rect: [10.2, 15.8, 9, 9.7], z0: 1.51, z1: 1.53 },
      ],
      extra: k(
        od({
          a: 10,
          c: 16,
          hw: 1.9,
          sp: 3.2,
          d: 1.5,
          rise: 3.6,
          kind: `round`,
          mat: `deFortPlaster`,
          frame: `deRubble`,
          ring: `deRubble`,
          tymp: `deFortPlaster`,
          doorH: 3,
          doorW: 1.9,
          door: `deStudDoor`,
          merlon: `box`,
        }),
        Zu(t),
        n(3.4, 9.8),
        n(16.2, 22.6),
        Ed({ floors: [1], a0: 3.8, a1: 9.4, y: 1.3 }),
        Ed({ floors: [1], a0: 16.6, a1: 22.2, y: 1.3 }),
      ),
    },
    back: {
      kinds: (e, t) => (e === 0 && t === 3 ? `door` : `solid`),
      extra: k(
        Zu(t),
        n(3.4, 22.6),
        Ed({ floors: [1], a0: 3.8, a1: 22.2, y: 1.3 }),
      ),
    },
    right: {
      kinds: (e, t, n) =>
        e === 1 && t > 0 && t < n - 1 && t % 2 ? `window` : `solid`,
      extra: k(
        n(2.6, 21.8),
        Ed({ floors: [0], a0: 3.2, a1: 21.2, y: 2.6, step: 2.1 }),
      ),
    },
    left: {
      kinds: () => `solid`,
      extra: k(
        n(2.6, 21.8),
        Ed({ floors: [0, 1], a0: 3.2, a1: 21.2, y: 1.8, step: 1.8 }),
      ),
    },
    extra: (e, t, n) => {
      let r = n.D / 2 + 0.75,
        i = n.H + 3.6;
      (e.add(`aluminum`, B(0.06, 0.08, 7, 8).translate(0, i + 3.5, r), t, 0),
        e.add(`brass`, new w(0.1, 8, 6).translate(0, i + 7.05, r), t, 0),
        e.box(
          `deBanner`,
          t,
          0,
          0.08,
          2.2,
          i + 5.4,
          i + 6.8,
          r - 0.02,
          r + 0.02,
          { planar: (e, t) => [((e - 0.08) / 2.12) * 0.5, 0] },
        ),
        Bu(e, t, -6, -6, n.H, 0.8, 1.6),
        $u(e, t, 5, -5, n.H, 4, 3, 2.6, `deFortPlaster`, null, `deStudDoor`));
    },
  };
}
function Od(e, t, n, i, a, o, s = 0.4, c = 1) {
  let l = ql(c),
    u = s,
    d = [i + u, o, a + u * 0.3];
  for (let r = 0; r < 4; r++) {
    let s = r / 4,
      c = (r + 1) / 4,
      l = [i + u * s * s, o * s, a + u * 0.3 * s * s],
      d = [i + u * c * c, o * c, a + u * 0.3 * c * c];
    D(e, `dePalm`, t, n, l, d, 0.34 - r * 0.04);
  }
  for (let i = 0; i < 15; i++) {
    let a = (i < 11 ? i / 11 : (i - 11) / 4 + 0.1) * Math.PI * 2 + l() * 0.3,
      o = i < 11 ? 2.4 + l() * 0.9 : 1.4,
      s = i < 11 ? 0.35 + l() * 0.55 : -1.1;
    e.add(
      `deCactus`,
      new r(0.55, 0.03, o)
        .translate(0, 0, o / 2)
        .rotateX(s)
        .rotateY(a)
        .translate(...d),
      t,
      n,
    );
  }
  for (let r = 0; r < 3; r++) {
    let r = l() * 6.3;
    e.add(
      `deSpiceOrange`,
      new w(0.22, 7, 5).translate(
        d[0] + Math.cos(r) * 0.35,
        o - 0.35,
        d[2] + Math.sin(r) * 0.35,
      ),
      t,
      n,
    );
  }
}
