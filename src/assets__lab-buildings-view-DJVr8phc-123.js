// assets__lab-buildings-view-DJVr8phc 123 — box
// Lines 41055-41347 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
var Ud = (e) => (t, n, r) => {
    for (let i of e.bays) {
      let a = e.f,
        o = r.grid[a][i],
        s = (i + 0.5) * r.bw,
        c = r.ys[a],
        l = e.w,
        u = s - l / 2,
        d = s + l / 2,
        f = e.d;
      if (
        (t.box(e.slab, n, o, u, d, c - 0.22, c + 0.05, 0, f),
        t.box(
          e.slab,
          n,
          o,
          u - 0.05,
          d + 0.05,
          c - 0.05,
          c + 0.06,
          f - 0.05,
          f + 0.05,
        ),
        !(e.skip || []).includes(i))
      )
        for (let r of [u + 0.25, s, d - 0.25]) {
          for (let i = 0; i < 3; i++)
            t.box(
              e.slab,
              n,
              o,
              r - 0.14 + i * 0.02,
              r + 0.14 - i * 0.02,
              c - 0.5 - i * 0.3,
              c - 0.22 - i * 0.3,
              0,
              f * (0.85 - i * 0.25),
            );
          t.add(
            e.slab,
            B(0.13, 0.13, 0.28, 10)
              .rotateZ(Math.PI / 2)
              .translate(r, c - 1.25, 0.2),
            n,
            o,
          );
        }
      let p = Math.round(l / 0.14),
        m = e.bulge ?? 0.28;
      for (let e = 0; e <= p; e++) {
        let r = u + (e * l) / p,
          i = Math.sin((e / p) * Math.PI) * 0.12 + 0.02;
        (D(
          t,
          R,
          n,
          o,
          [r, c + 0.05, f - 0.08 + i],
          [r, c + 0.45, f - 0.08 + m + i],
          0.03,
        ),
          D(
            t,
            R,
            n,
            o,
            [r, c + 0.45, f - 0.08 + m + i],
            [r, c + 1, f - 0.08 + i],
            0.03,
          ));
      }
      (t.box(R, n, o, u, d, c + 0.98, c + 1.04, f - 0.1, f + 0.05),
        t.box(R, n, o, u, d, c + 0.43, c + 0.47, f + m - 0.1, f + m + 0.08));
      for (let e of [u, d - 0.04])
        t.box(R, n, o, e, e + 0.04, c + 0.98, c + 1.04, 0, f);
    }
  },
  Wd = (e) => (t, n, r) =>
    xu(r, e.kinds, e.S, (r, i, a, o, s, c) => {
      if (!e.floors.includes(c)) return;
      let l = a / 2 + 0.35,
        u = s + 0.25,
        d = e.h ?? 0.55;
      (t.box(e.mat, n, r, i - l, i + l, s + 0.05, u, 0, 0.2),
        c === e.curved
          ? yu(t, n, r, e.mat, `seg`, i, u, u, l, 0, 0.18)
          : gu(
              t,
              n,
              r,
              e.mat,
              [
                [i - l, u],
                [i + l, u],
                [i, u + d],
              ],
              0,
              0.18,
            ),
        t.box(e.mat, n, r, i - 0.14, i + 0.14, s - 0.1, s + 0.3, 0, 0.24));
    }),
  Gd = (e) => (t, n, r) => {
    let i = e.b,
      a = r.grid[0][i],
      o = (i + 0.5) * r.bw,
      s = e.hw,
      c = e.sp,
      l = e.mat,
      u = c + 0.95;
    for (let e of [-1, 1])
      for (let r of [0, 0.45]) {
        let i = o + e * (s + 0.45 + r);
        (t.box(l, n, a, i - 0.24, i + 0.24, 0, 1, 0, 0.66),
          t.add(
            l,
            B(0.17, 0.21, u - 1, 14).translate(i, (u + 1) / 2, 0.36),
            n,
            a,
          ),
          t.box(l, n, a, i - 0.26, i + 0.26, u, u + 0.2, 0, 0.68));
      }
    let d = o - s - 1.2,
      f = o + s + 1.2;
    (t.box(l, n, a, d, f, u + 0.2, u + 0.55, 0, 0.75),
      t.box(l, n, a, d - 0.1, f + 0.1, u + 0.55, u + 0.68, 0, 0.85),
      bu(t, n, a, l, `round`, o, 0, c, s, 0.3, 0, 0.3),
      yu(t, n, a, `deReja`, `round`, o, c, c, s, 0.01, 0.03, !0),
      t.box(
        `deMarble`,
        n,
        a,
        o - 0.3,
        o + 0.3,
        c + s - 0.2,
        c + s + 0.12,
        0,
        0.4,
      ));
  };
function Kd() {
  let e = {
      wall: `deGoldStone`,
      floorMat: [`deRustGold`],
      t: 0.55,
      bay: 22 / 7,
      floors: [5, 4.6, 4.2],
      win: Jl({
        w: 1.25,
        h: 2.7,
        sill: 0.1,
        lites: [2, 4],
        frame: `deGreen`,
        rec: 0.3,
        casing: `deSandstone`,
      }),
      win0: Jl({
        w: 1.1,
        h: 1.6,
        sill: 1.6,
        lites: [2, 2],
        frame: `deGreen`,
        rec: 0.35,
        header: `deSandstone`,
        keystone: !0,
        headerH: 0.35,
      }),
      door: {
        w: 2.2,
        h: 3.2,
        transom: 0,
        frame: `woodDark`,
        mat: `deStudDoor`,
        rec: 0.5,
        step: `deMarble`,
      },
      base: { mat: `deSandstone`, h: 0.6, out: 0.08 },
      belt: { mat: `deSandstone`, h: 0.35, out: 0.12 },
      pilaster: { mat: `deSandstone`, w: 0.55, out: 0.12, floors: [1, 2] },
      cornice: {
        type: `classic`,
        mat: `deSandstone`,
        h: 0.55,
        out: 0.6,
        dentils: !0,
        brackets: !0,
        cap: `deSandstone`,
      },
      roof: ju,
    },
    t = (e, t) => (e === 0 && t === 3 ? `door` : `window`);
  return {
    key: `dePalazzo`,
    name: `Palazzo Ferla`,
    plain: 14069098,
    desc: `Sicilian Baroque palazzo: honey limestone over a rusticated base, giant pilasters, a column-framed portal with a broken pediment, bowed goose-breast iron balconies on carved corbels, pedimented windows, balustrade with urns.`,
    W: 22,
    D: 16,
    style: e,
    front: {
      kinds: t,
      extra: k(
        Gd({ b: 3, hw: 1.2, sp: 3.2, mat: `deSandstone` }),
        Ud({
          f: 1,
          bays: [0, 1, 2, 3, 4, 5, 6],
          skip: [3],
          w: 2,
          d: 0.75,
          slab: `deSandstone`,
        }),
        Wd({ kinds: t, S: e, floors: [1, 2], curved: 2, mat: `deSandstone` }),
        (e, t, n) => {
          let r = n.H + 0.45;
          for (let [i, a, o] of mu(n, 0, n.L)) {
            let s = n.grid[n.top][o];
            (e.box(`deSandstone`, t, s, i, a, n.H, n.H + 0.2, -n.t, 0.05),
              e.box(`deSandstone`, t, s, i, a, r + 0.7, r + 0.85, -n.t, 0.05));
            for (let r = i + 0.18; r < a - 0.05; r += 0.36)
              (e.add(
                `deSandstone`,
                B(0.07, 0.1, 0.35, 6).translate(r, n.H + 0.37, -n.t / 2),
                t,
                s,
              ),
                e.add(
                  `deSandstone`,
                  B(0.1, 0.07, 0.35, 6).translate(r, n.H + 0.72, -n.t / 2),
                  t,
                  s,
                ));
          }
          for (let i = 0; i <= n.nb; i++) {
            let a = Math.min(n.L - 0.3, Math.max(0.3, i * n.bw)),
              o = n.grid[n.top][z(n, a)];
            (e.box(
              `deSandstone`,
              t,
              o,
              a - 0.3,
              a + 0.3,
              n.H,
              r + 0.85,
              -n.t,
              0.1,
            ),
              e.add(
                `deSandstone`,
                new w(0.25, 8, 6)
                  .scale(1, 1.4, 1)
                  .translate(a, r + 1.2, -n.t / 2 + 0.05),
                t,
                o,
              ),
              e.add(
                `deSandstone`,
                B(0.12, 0.2, 0.2, 10).translate(a, r + 0.95, -n.t / 2 + 0.05),
                t,
                o,
              ));
          }
        },
      ),
    },
    back: {
      kinds: (e, t) => (e === 0 && t === 3 ? `door` : `window`),
      extra: Ju({ mat: `deSandstone`, h: 0.9, out: 0.05 }),
    },
    right: {
      kinds: () => `window`,
      extra: k(
        Ud({ f: 1, bays: [2], w: 2, d: 0.75, slab: `deSandstone` }),
        Ju({ mat: `deSandstone`, h: 0.9, out: 0.05, side: !0 }),
      ),
    },
    left: {
      kinds: () => `window`,
      extra: Ju({ mat: `deSandstone`, h: 0.9, out: 0.05, side: !0 }),
    },
    extra: (e, t, n) => {
      Au(
        e,
        t,
        { ...n, W: n.W - 1.6, D: n.D - 1.6 },
        `deTerra`,
        20 * Wl,
        0.2,
        null,
      );
      for (let r of [-6, 6])
        A(e, t, `deGoldStone`, r, -3, n.H, n.H + 3.6, 1, 0.7);
    },
  };
}
