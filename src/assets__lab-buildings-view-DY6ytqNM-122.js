// assets__lab-buildings-view-DY6ytqNM 122 — box
// Lines 40733-41054 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function Rd() {
  let e = {
      wall: `deCream`,
      t: 0.35,
      bay: 28 / 8,
      floors: [4.6],
      win: ql({
        w: 1.3,
        h: 2.2,
        sill: 0.8,
        lites: [2, 3],
        frame: `deGreen`,
        rec: 0.2,
        arch: 0.65,
        archMat: `dePueblo`,
        ringW: 0.18,
      }),
      door: {
        w: 1.6,
        h: 2.5,
        transom: 0.7,
        frame: `deGreen`,
        mat: `deDoorGreen`,
        glazed: !0,
        rec: 0.25,
        step: `deConcGrey`,
      },
      base: { mat: `dePueblo`, h: 0.5, out: 0.03 },
      roof: Au,
    },
    t = (e, t) => (t === 2 || t === 5 ? `door` : `window`);
  return {
    key: `deDepot`,
    name: `Santa Inés Depot`,
    plain: 15391928,
    desc: `Mission Revival railway depot: long cream stucco hall under a red-tiled hip roof on heavy timber brackets, a scrolled curvilinear gable with a quatrefoil window and name board, arched windows, station clock, baggage cart, track-side platform canopy.`,
    W: 28,
    D: 9,
    style: e,
    front: {
      kinds: t,
      extra: A(
        Id({ mat: `deCream`, cap: `dePueblo`, sign: `deDepot` }),
        Ld({ mat: `woodDark`, d: 1, step: 3.5, a0: 0.9 }),
        (e, t, n) => {
          let r = n.grid[0][3];
          (e.box(z, t, r, 12.2, 12.26, 3.5, 3.56, 0, 0.7),
            e.add(
              `trimWhite`,
              V(0.32, 0.32, 0.12, 20)
                .rotateZ(Math.PI / 2)
                .translate(12.23, 3.2, 0.7),
              t,
              r,
            ),
            e.add(
              z,
              V(0.35, 0.35, 0.1, 20)
                .rotateZ(Math.PI / 2)
                .translate(12.23, 3.2, 0.7),
              t,
              r,
            ));
          let i = n.grid[0][6];
          for (let n of [21.7, 23.6])
            (e.add(
              z,
              V(0.3, 0.3, 0.08, 12)
                .rotateX(Math.PI / 2)
                .translate(n, 0.3, 1.2),
              t,
              i,
            ),
              e.add(
                z,
                V(0.3, 0.3, 0.08, 12)
                  .rotateX(Math.PI / 2)
                  .translate(n, 0.3, 2.2),
                t,
                i,
              ));
          (e.box(`wood`, t, i, 21.3, 24, 0.55, 0.65, 1.1, 2.3),
            k(e, z, t, i, [21.3, 0.6, 1.7], [20.3, 1.1, 1.7], 0.05),
            e.box(`deDoorRed`, t, i, 21.6, 22.6, 0.65, 1.2, 1.25, 1.9),
            e.box(`deTeak`, t, i, 22.8, 23.7, 0.65, 1.35, 1.3, 2.1),
            e.box(`deCanvas`, t, i, 21.8, 22.5, 1.2, 1.55, 1.3, 1.8));
          for (let r of [4.3, 16.8]) {
            let i = n.grid[0][B(n, r)];
            (e.box(`deGreen`, t, i, r, r + 1.8, 0.42, 0.48, 0.25, 0.75),
              e.box(`deGreen`, t, i, r, r + 1.8, 0.5, 0.95, 0.2, 0.26));
            for (let n of [r + 0.1, r + 1.65])
              e.box(z, t, i, n, n + 0.05, 0, 0.45, 0.3, 0.7);
          }
        },
      ),
    },
    back: {
      kinds: t,
      extra: A(Id({ mat: `deCream`, cap: `dePueblo` }), (e, t, n) => {
        let r = 3.3;
        for (let [r, i, o] of pu(n, -1, n.L + 1)) {
          let s = n.grid[0][o];
          (e.add(
            `deTerraRed`,
            new a(i - r, 0.08, Math.hypot(4.9, 0.6))
              .rotateX(Math.atan2(0.6, 4.9))
              .translate((r + i) / 2, 3.5999999999999996, 4.9 / 2),
            t,
            s,
          ),
            e.box(`deConcGrey`, t, s, r, i, 0, 0.35, 0, 5.7),
            e.box(`trimWhite`, t, s, r, i, 0.35, 0.36, 5.4, 5.7));
        }
        for (let i = 0.5; i < n.L; i += 3.5) {
          let a = n.grid[0][B(n, i)];
          (e.box(`woodDark`, t, a, i - 0.1, i + 0.1, 0.35, r, 4.4, 4.6),
            k(e, `woodDark`, t, a, [i, 2.4, 4.5], [i, r, 3.5], 0.1),
            k(e, `woodDark`, t, a, [i, 1.9, 0.02], [i, 3.65, 1.2], 0.12),
            e.box(`woodDark`, t, a, i - 0.08, i + 0.08, 3.25, 3.4, 0, 4.8));
        }
      }),
    },
    right: {
      kinds: (e, t) => (t === 1 ? `door` : `window`),
      extra: Ld({ mat: `woodDark`, d: 1, step: 2.8, a0: 1.3 }),
    },
    left: {
      kinds: () => `window`,
      extra: Ld({ mat: `woodDark`, d: 1, step: 2.8, a0: 1.3 }),
    },
    extra: (e, t, n) => {
      (ku(e, t, n, `deTerraRed`, 22 * Ul, 1.2, `deTerraDark`),
        j(e, t, `deCream`, 8, -1.5, n.H, n.H + 3.2, 0.8, 0.6));
    },
  };
}
var zd = (e) => (t, n, r) => {
    for (let [i, a] of pu(r, e.u0, e.u1))
      t.box(
        e.mat,
        n,
        du(r, (i + a) / 2, Math.min(e.y0, r.H - 0.1)),
        i,
        a,
        e.y0,
        e.y1,
        e.z0,
        e.z1,
        {
          planar: (t, n) => [
            (t - e.u0) / (e.u1 - e.u0),
            (n - e.y0) / (e.y1 - e.y0),
          ],
        },
      );
  },
  Bd = (e) => (t, n, r) => {
    let i = r.ys[e.f] + e.y,
      a = Kl(e.seed || 7),
      o = [`deRed`, `deBlue`, `trimWhite`, `deSpiceYellow`, `deTurq`, `dePink`];
    for (let [s, c, l] of pu(r, e.a0, e.a1)) {
      let u = r.grid[e.f][l];
      t.box(z, n, u, s, c, i - 0.01, i + 0.01, e.z - 0.01, e.z + 0.01);
      for (let r = s + 0.1; r < c - 0.3; r += 0.35 + a() * 0.3) {
        let s = 0.25 + a() * 0.35,
          c = 0.3 + a() * 0.5;
        t.box(
          o[Math.floor(a() * o.length)],
          n,
          u,
          r,
          r + s,
          i - c,
          i,
          e.z - 0.01,
          e.z + 0.01,
        );
      }
    }
    for (let a of [e.a0, e.a1])
      t.box(
        z,
        n,
        r.grid[e.f][B(r, a)],
        a - 0.02,
        a + 0.02,
        i - 0.02,
        i + 0.02,
        0,
        e.z + 0.02,
      );
  };
function Vd() {
  let e = {
      wall: `dePink`,
      floorMat: [`deOchre`],
      t: 0.35,
      bay: 3.25,
      floors: [3.8, 3.1, 3.1, 3],
      win: ql({
        w: 0.9,
        h: 1.6,
        sill: 0.7,
        lites: [2, 3],
        frame: `trimWhite`,
        shutter: `deShutGreen`,
        rec: 0.15,
      }),
      balcony: { w: 1.1, h: 2.3, depth: 0.5, slab: `deMarble`, railMat: z },
      loading: { w: 2.3, h: 2.8, mat: `deDoorGreen`, trim: `deCedar` },
      door: {
        w: 1,
        h: 2.3,
        transom: 0.4,
        frame: `trimWhite`,
        mat: `deDoorGreen`,
        rec: 0.2,
        step: `deFlag`,
      },
      base: { mat: `deFlag`, h: 0.35, out: 0.03 },
      belt: { mat: `deCream`, h: 0.18, out: 0.03 },
      corners: `deCream`,
      eaveTrim: `deCream`,
      roof: {
        ridge: `x`,
        pitch: 20 * Ul,
        over: 0.45,
        mat: `deTerraDark`,
        fascia: `deCream`,
      },
    },
    t = (e, t) =>
      e === 0
        ? t === 0
          ? `loading`
          : `door`
        : e === 2 && t === 1
          ? `balcony`
          : `window`,
    n = (e, t, n) => {
      let r = n.grid[0][0],
        a = n.grid[0][1];
      (e.box(`deNet`, t, r, 0.1, 0.35, 0.3, 3.2, 0.02, 0.05, {
        planar: (e, t) => [e, t],
      }),
        e.box(`deNet`, t, a, 6.1, 6.4, 0.2, 3.3, 0.02, 0.05, {
          planar: (e, t) => [e, t],
        }),
        e.add(
          `deRed`,
          new o(0.32, 0.08, 8, 16).translate(3.75, 2.4, 0.1),
          t,
          a,
        ));
      for (let n of [0, 1])
        (e.box(
          `deCedar`,
          t,
          a,
          5.55 + n * 0.1,
          6.15 + n * 0.1,
          n * 0.45,
          0.45 + n * 0.45,
          0.4,
          1,
        ),
          e.box(
            `deNet`,
            t,
            a,
            5.57 + n * 0.1,
            6.13 + n * 0.1,
            0.05 + n * 0.45,
            0.42 + n * 0.45,
            1,
            1.02,
            { planar: (e, t) => [e, t] },
          ));
      for (let n of [2.9, 3.05])
        k(e, `deCedar`, t, r, [n, 0, 0.7], [n - 0.15, 3, 0.08], 0.06);
      (e.add(z, V(0.2, 0.25, 0.7, 10).translate(1.3, 0.35, 1.6), t, r),
        e.add(z, new i(0.24, 10, 6).translate(1.3, 0.7, 1.6), t, r));
    },
    r = (t) =>
      xu({
        kinds: t,
        S: e,
        floors: [1, 2, 3],
        surround: `deCream`,
        sw: 0.1,
        kind: `seg`,
        fill: `deCream`,
        pad: 0.02,
      });
  return {
    key: `deHarbour`,
    name: `Casa del Porto`,
    plain: 14986132,
    desc: `Mediterranean harbour house: tall narrow pink stucco over an ochre boat-store, cream painted window frames, green louvred shutters, a small iron balcony, washing lines, fishing nets, lobster pots and a bollard.`,
    W: 6.5,
    D: 9,
    style: e,
    front: {
      kinds: t,
      extra: A(r(t), n, Bd({ f: 3, y: 0.45, a0: 0.2, a1: 6.3, z: 0.7 })),
    },
    back: {
      kinds: (e, t) => (e === 0 ? `solid` : `window`),
      extra: r((e, t) => (e === 0 ? `solid` : `window`)),
    },
    right: {
      kinds: (e, t, n) => (e > 0 && t === 1 ? `window` : `solid`),
      extra: A(
        r((e, t) => (e > 0 && t === 1 ? `window` : `solid`)),
        Bd({ f: 2, y: 0.4, a0: 0.3, a1: 8, z: 0.6, seed: 9 }),
      ),
    },
    left: { kinds: () => `solid` },
    extra: (e, t, n) =>
      j(e, t, `dePink`, 1.4, -2.5, n.H, n.roofTop + 0.3, 0.7, 0.6),
  };
}
