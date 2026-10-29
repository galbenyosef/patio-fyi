// assets__naval-CBHUF-qz 01 — ciws
// Lines 1-268 of readable/assets__naval-CBHUF-qz.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  Bt as e,
  En as t,
  Gt as n,
  H as r,
  Hn as i,
  I as a,
  K as o,
  L as s,
  Lt as c,
  Rn as l,
  T as u,
  Vn as d,
  Vt as f,
  W as p,
  at as m,
  bn as h,
  cn as g,
  dt as _,
  in as v,
  nt as y,
  pt as b,
  tt as x,
  vt as ee,
  zt as te,
} from "./graphics-quality-CrL3qbU3.js";
var S = [2.6, 0, -1.1],
  C = {
    lhd: 7,
    cruiser: 9,
    destroyer: 11,
    frigate: 10,
    patrol: 16,
    landing: 5,
  },
  ne = {
    destroyer: {
      gun: [[62, 8.2, 0]],
      vls: [41, 6.8, 0],
      ciws: [
        [-14, 15.2, 0],
        [27.8, 18.6, 0],
      ],
    },
    frigate: {
      gun: [[49.6, 7.4, 0]],
      vls: [32.8, 6.1, 0],
      ciws: [
        [-11.2, 13.7, 0],
        [22.2, 15, 0],
      ],
    },
    cruiser: {
      gun: [
        [71.1, 9, 0],
        [-86, 7.7, 0],
      ],
      vls: [47, 7.4, 0],
      ciws: [
        [-34.4, 18.6, 0],
        [32.2, 20.4, 0],
      ],
    },
    lhd: {
      gun: [],
      vls: null,
      ciws: [
        [108, 20.3, 11],
        [-113, 20.3, -12],
      ],
    },
    patrol: { gun: [[17.1, 3.5, 0]], vls: null, ciws: [] },
    landing: { gun: [], vls: null, ciws: [] },
  },
  re = {
    lhd: 30,
    cruiser: 20,
    destroyer: 16,
    frigate: 13,
    patrol: 4,
    landing: 99,
  },
  ie = {
    lhd: 34,
    cruiser: 30,
    destroyer: 26,
    frigate: 24,
    patrol: 10,
    landing: 8,
  },
  ae = {
    destroyer: [150, 17],
    frigate: [120, 14],
    cruiser: [172, 19],
    lhd: [225, 32],
    patrol: [45, 8],
    landing: [30, 9],
  },
  w = {
    hull: 8160651,
    deck: 4212555,
    sup: 9805476,
    dark: 2764595,
    red: 8006178,
    boot: 1842977,
    white: 14079695,
    glass: 1712679,
    jet: 5660259,
    spy: 4871e3,
    orange: 13660202,
    yellow: 13150266,
    green: 5595210,
  };
function oe() {
  let e = [],
    t = [],
    n = [],
    r = new p(),
    a = new i(),
    o = new i(),
    c = (i, a, o, s, c, l) => {
      r.setHex(l);
      for (let l of [i, a, o, i, o, s])
        (e.push(l[0], l[1], l[2]),
          t.push(c[0], c[1], c[2]),
          n.push(r.r, r.g, r.b));
    },
    l = {
      q(e, t, n, r, i) {
        return (
          a.set(t[0] - e[0], t[1] - e[1], t[2] - e[2]),
          o.set(r[0] - e[0], r[1] - e[1], r[2] - e[2]),
          a.cross(o).normalize(),
          c(e, t, n, r, [a.x || 0, a.y || 1, a.z || 0], i),
          l
        );
      },
      box(e, t, n, r, i, a, o) {
        return l.tbox(e, r, t, i, a - n, a - n, o, 0, 0, (n + a) / 2);
      },
      tbox(e, t, n, r, i, a, o, s = 0, c = 0, u = 0) {
        let d = [e, n, u - i / 2],
          f = [t, n, u - i / 2],
          p = [t, n, u + i / 2],
          m = [e, n, u + i / 2],
          h = [e + s, r, u - a / 2],
          g = [t - c, r, u - a / 2],
          _ = [t - c, r, u + a / 2],
          v = [e + s, r, u + a / 2];
        return (
          l
            .q(d, f, g, h, o)
            .q(f, p, _, g, o)
            .q(p, m, v, _, o)
            .q(m, d, h, v, o)
            .q(h, g, _, v, o)
            .q(d, m, p, f, o),
          l
        );
      },
      cyl(e, t, n, r, i, a, o, s = 8) {
        for (let c = 0; c < s; c++) {
          let u = (c / s) * Math.PI * 2,
            d = ((c + 1) / s) * Math.PI * 2,
            f = Math.cos(u) * r,
            p = Math.sin(u) * r,
            m = Math.cos(d) * r,
            h = Math.sin(d) * r;
          a === `y`
            ? l
                .q(
                  [e + f, t, n + p],
                  [e + f, t + i, n + p],
                  [e + m, t + i, n + h],
                  [e + m, t, n + h],
                  o,
                )
                .q(
                  [e, t + i, n],
                  [e + m, t + i, n + h],
                  [e + f, t + i, n + p],
                  [e + f, t + i, n + p],
                  o,
                )
            : l
                .q(
                  [e, t + f, n + p],
                  [e + i, t + f, n + p],
                  [e + i, t + m, n + h],
                  [e, t + m, n + h],
                  o,
                )
                .q(
                  [e + i, t, n],
                  [e + i, t + m, n + h],
                  [e + i, t + f, n + p],
                  [e + i, t + f, n + p],
                  o,
                );
        }
        return l;
      },
      hull(e, t = w.deck) {
        let n = e.map(([e, t, n, r, i]) => ({
          x: e,
          D: (n) => [e, r, n * t],
          W: (t) => [e, 0, t * n],
          T: (t) => [e, -0.8, t * n * 0.96],
          K: [e, i, 0],
          d: r,
          w: t,
        }));
        for (let e = 0; e < n.length - 1; e++) {
          let r = n[e],
            i = n[e + 1];
          for (let e of [-1, 1])
            (l
              .q(r.D(e), i.D(e), i.W(e), r.W(e), w.hull)
              .q(r.W(e), i.W(e), i.T(e), r.T(e), w.boot)
              .q(r.T(e), i.T(e), i.K, r.K, w.red),
              l.q(
                r.D(e),
                i.D(e),
                [i.x, i.d - 0.35, e * (i.w + 0.02)],
                [r.x, r.d - 0.35, e * (r.w + 0.02)],
                w.white,
              ));
          l.q(
            [r.x, r.d, -r.w],
            [i.x, i.d, -i.w],
            [i.x, i.d, i.w],
            [r.x, r.d, r.w],
            t,
          );
        }
        for (let e of [n[0], n[n.length - 1]])
          l.q(e.D(-1), e.D(1), e.W(1), e.W(-1), w.hull)
            .q(e.W(-1), e.W(1), e.T(1), e.T(-1), w.boot)
            .q(e.T(-1), e.T(1), e.K, e.K, w.red);
        return l;
      },
      geometry() {
        let r = new s();
        return (
          r.setAttribute(`position`, new m(e, 3)),
          r.setAttribute(`normal`, new m(t, 3)),
          r.setAttribute(`color`, new m(n, 3)),
          r.computeBoundingSphere(),
          r
        );
      },
    };
  return l;
}
function T(e, t, n, r, i, a) {
  for (let o = 0; o < 3; o++)
    for (let s of [-1, 1])
      e.box(
        t + o * a * 1.35,
        n,
        s * i - 0.22,
        t + o * a * 1.35 + a,
        r,
        s * i + 0.22,
        w.white,
      );
}
