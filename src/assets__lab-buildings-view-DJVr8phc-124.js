// assets__lab-buildings-view-DJVr8phc 124 — mat
// Lines 41348-41696 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function qd() {
  let e = {
      wall: `deWhite`,
      t: 0.45,
      bay: 10 / 3,
      floors: [4.2, 3.3],
      parapet: 0.6,
      win: Jl({
        w: 0.9,
        h: 1.4,
        sill: 0.8,
        lites: [2, 2],
        frame: `deBlue`,
        rec: 0.25,
        shutter: `deShutBlue`,
      }),
      win0: Jl({
        w: 0.8,
        h: 1.1,
        sill: 1.3,
        lites: [2, 2],
        frame: `deBlue`,
        rec: 0.25,
      }),
      door: {
        w: 1.4,
        h: 2.2,
        transom: 0,
        frame: `deSandstone`,
        mat: `deStudBlue`,
        rec: 0.3,
        step: `deSandstone`,
      },
    },
    t = (e, t) => (e === 0 && t === 1 ? `door` : `window`);
  return {
    key: `deTunis`,
    name: `Dar Ben Achour`,
    plain: 16118764,
    desc: `Tunisian medina house: brilliant whitewash with Sidi Bou Said blue, a studded blue horseshoe door in a carved sandstone frame, tiled dado, bowed blue window cages and a blue lattice moucharabieh, bougainvillea, vaulted roof room.`,
    W: 10,
    D: 10,
    style: e,
    front: {
      kinds: t,
      extra: k(
        Uu({
          b: 1,
          hw: 0.7,
          sp: 2.2,
          rw: 0.22,
          kind: `horse`,
          ring: `deSandstone`,
          alt: [`deSandstone`, `deBlack`],
          tymp: `deStudBlue`,
          alfiz: `deTunisTile`,
          dado: 1,
          frame: `deSandstone`,
          lamps: !1,
        }),
        Cu({
          kinds: t,
          S: e,
          mat: `deRejaBlue`,
          frame: `deBlue`,
          d: 0.32,
          crown: !0,
          floors: [0],
        }),
        wu({
          at: [[1, 1]],
          w: 2.2,
          h: 1.7,
          sill: 0.8,
          frame: `deBlue`,
          lat: `deMashBlue`,
          d: 0.65,
          apron: `deBlue`,
          dome: `deBlue`,
        }),
        ud({ u: 9.6, a: 7.5, c: 9.9, y0: 3.2, y1: 4.3 }),
        (e, t, n) => {
          for (let [r, i, a] of mu(n, 0, n.L))
            a !== 1 &&
              e.box(`deTunisTile`, t, n.grid[0][a], r, i, 0, 1, 0, 0.02);
          for (let [r, i, a] of mu(n, 0, n.L))
            a !== 1 &&
              e.box(`deSandstone`, t, n.grid[0][a], r, i, 1, 1.08, 0, 0.05);
          let r = n.grid[1][0];
          (e.box(R, t, r, 0.55, 0.6, 5.1, 5.15, 0, 0.7),
            O(e, R, t, r, 0.58, 4.6, 0.58, 5.1, 0.03, 0, 0.6),
            e.add(
              `deBlue`,
              B(0.15, 0.2, 0.45, 6).translate(0.58, 4.8, 0.7),
              t,
              r,
            ),
            e.add(`bulb`, new w(0.08, 8, 6).translate(0.58, 4.78, 0.7), t, r));
        },
        Ju({ mat: `deBlue`, para: 0.6, h: 0.08, out: 0.04 }),
      ),
    },
    back: {
      kinds: (e, t) => (e === 1 ? `window` : `solid`),
      extra: Ju({ mat: `deBlue`, para: 0.6, h: 0.08, out: 0.04 }),
    },
    right: {
      kinds: (e, t) => (t === 1 ? `window` : `solid`),
      extra: k(
        Cu({
          kinds: (e, t) => (t === 1 ? `window` : `solid`),
          S: e,
          mat: `deRejaBlue`,
          frame: `deBlue`,
          d: 0.32,
          crown: !0,
        }),
        Ju({ mat: `deBlue`, para: 0.6, h: 0.08, out: 0.04, side: !0 }),
      ),
    },
    left: {
      kinds: () => `solid`,
      extra: Ju({ mat: `deBlue`, para: 0.6, h: 0.08, out: 0.04, side: !0 }),
    },
    extra: (e, t, n) => {
      Mu(e, t, n.W, n.D, n.H, n.t, `deLimeWash`);
      let r = n.H;
      (e.box(`deWhite`, t, 0, -3.5, 0.5, r, r + 1.6, -3.8, -1),
        e.add(
          `deWhite`,
          B(1.4, 1.4, 4, 16, 1, !1, 0, Math.PI)
            .rotateZ(Math.PI / 2)
            .rotateY(0)
            .translate(-1.5, r + 1.6, -2.4),
          t,
          0,
        ),
        e.box(`deDoorBlue`, t, 0, -1.3, -0.5, r, r + 1.9, -1, -0.97),
        zu(e, t, 3, 3, r, 0.4));
    },
  };
}
var Jd = (e) => (t, n, r) => {
  let i = r.ys[e.f],
    a = e.d;
  for (let [o, s, c] of mu(r, e.a0, e.a1)) {
    let l = r.grid[e.f][c];
    (t.box(e.slab, n, l, o, s, i - 0.2, i + 0.05, 0, a),
      t.box(`deIronLace`, n, l, o, s, i + 0.05, i + 1, a - 0.05, a - 0.03, {
        planar: (e, t) => [e / 1.6, (t - i - 0.05) / 0.95],
      }),
      t.box(R, n, l, o, s, i + 1, i + 1.06, a - 0.08, a));
  }
  for (let o of [e.a0, e.a1 - 0.03]) {
    let s = r.grid[e.f][z(r, o)];
    t.box(`deIronLace`, n, s, o, o + 0.02, i + 0.05, i + 1, 0, a - 0.05, {
      planar: (e, t, n) => [n / 1.6, (t - i - 0.05) / 0.95],
    });
  }
  if (e.posts)
    for (let o = e.a0 + 0.1; o <= e.a1 - 0.05; o += r.bw) {
      let s = r.grid[e.f][z(r, o)];
      t.add(
        R,
        B(0.05, 0.05, e.posts, 8).translate(o, i + e.posts / 2, a - 0.1),
        n,
        s,
      );
    }
};
function Yd() {
  return {
    key: `deColonial`,
    name: `Grand Hotel Sabra`,
    plain: 15391928,
    desc: `Colonial grand hotel: four cream storeys over a deep round-arched arcade, continuous cast-iron lace balconies, green shutters, dentilled cornice, an attic pediment with flag, twin domed corner kiosks and a neon rooftop name.`,
    W: 26,
    D: 16,
    style: {
      wall: `deCream`,
      t: 0.45,
      bay: 26 / 8,
      floors: [5, 4, 4, 3.8],
      parapet: 1,
      win: Jl({
        w: 1.2,
        h: 2.5,
        sill: 0.1,
        lites: [2, 4],
        frame: `trimWhite`,
        rec: 0.2,
        shutter: `deShutGreen`,
        header: `deSandstone`,
        headerH: 0.25,
      }),
      win0: Jl({
        w: 1.6,
        h: 2.8,
        sill: 0.4,
        lites: [3, 4],
        frame: `trimWhite`,
        rec: 0.25,
      }),
      door: {
        w: 2.2,
        h: 3,
        transom: 0.8,
        frame: `trimWhite`,
        mat: `deTeak`,
        glazed: !0,
        rec: 0.3,
        step: `deMarble`,
      },
      base: { mat: `deSandstone`, h: 0.5, out: 0.03 },
      belt: { mat: `deSandstone`, h: 0.25, out: 0.08 },
      corners: `deSandstone`,
      cornice: {
        type: `classic`,
        mat: `deSandstone`,
        h: 0.45,
        out: 0.45,
        dentils: !0,
      },
    },
    front: {
      kinds: (e, t) => (e === 0 && (t === 3 || t === 4) ? `door` : `window`),
      signs: [
        {
          mat: `deSabraBoard`,
          rect: [10.4, 15.6, 5.12, 5.62],
          z0: 3.06,
          z1: 3.09,
        },
      ],
      extra: k(
        Gu({
          b0: 0,
          b1: 7,
          d: 3,
          top: 4.75,
          sp: 3.1,
          mat: `deCream`,
          ring: `deSandstone`,
          floor: `deFlag`,
        }),
        Jd({ f: 1, a0: 0, a1: 26, d: 3, slab: `deSandstone` }),
        Jd({ f: 2, a0: 0, a1: 26, d: 1.1, slab: `deSandstone`, posts: 3.8 }),
        Jd({ f: 3, a0: 0, a1: 26, d: 1.1, slab: `deSandstone` }),
        (e, t, n) => {
          for (let r of [9.75, 16.25]) qu(e, t, n.grid[0][z(n, r)], r, 3.6);
          let i = n.L / 2,
            a = n.grid[n.top][z(n, i - 0.1)],
            o = n.grid[n.top][z(n, i + 0.1)],
            s = n.H + 1;
          (gu(
            e,
            t,
            a,
            `deCream`,
            [
              [i - 3, s],
              [i, s],
              [i, s + 1.4],
            ],
            -n.t,
            0.1,
          ),
            gu(
              e,
              t,
              o,
              `deCream`,
              [
                [i, s],
                [i + 3, s],
                [i, s + 1.4],
              ],
              -n.t,
              0.1,
            ),
            e.add(
              `deSandstone`,
              new r(Math.hypot(3, 1.4) + 0.2, 0.18, n.t + 0.3)
                .rotateZ(Math.atan2(1.4, 3))
                .translate(i - 1.5, s + 0.75, -n.t / 2 + 0.05),
              t,
              a,
            ),
            e.add(
              `deSandstone`,
              new r(Math.hypot(3, 1.4) + 0.2, 0.18, n.t + 0.3)
                .rotateZ(-Math.atan2(1.4, 3))
                .translate(i + 1.5, s + 0.75, -n.t / 2 + 0.05),
              t,
              o,
            ),
            e.add(
              `aluminum`,
              B(0.05, 0.06, 4, 8).translate(i, s + 3.3, -0.1),
              t,
              a,
            ),
            e.box(
              `deBanner`,
              t,
              a,
              i + 0.06,
              i + 1.8,
              s + 3.9,
              s + 5,
              -0.12,
              -0.08,
              { planar: (e) => [(e - i) / 3.5, 0] },
            ));
        },
      ),
    },
    back: { kinds: (e, t) => (e === 0 && t === 4 ? `door` : `window`) },
    right: {
      kinds: () => `window`,
      extra: Jd({ f: 1, a0: 0.2, a1: 14.9, d: 1.1, slab: `deSandstone` }),
    },
    left: {
      kinds: () => `window`,
      extra: Jd({ f: 1, a0: 0.2, a1: 14.9, d: 1.1, slab: `deSandstone` }),
    },
    extra: (e, t, n) => {
      for (let r of [-11, 11])
        (e.box(
          `deCream`,
          t,
          0,
          r - 1.4,
          r + 1.4,
          n.H,
          n.H + 2.2,
          n.D / 2 - 3.8,
          n.D / 2 - 1,
        ),
          Ru(e, t, r, n.D / 2 - 2.4, n.H + 2.2, 1.35, `deTileGreen`, {
            drum: 0.3,
            drumMat: `deSandstone`,
            finial: `brass`,
            seg: 18,
          }));
      (ke(e, t, n, `deSabra`, 12, 1.8, -2, 3), Bu(e, t, 5, -5, n.H, 0.7, 1.5));
    },
  };
}
