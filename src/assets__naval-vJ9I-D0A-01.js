// assets__naval-vJ9I-D0A 01 — ciws
// Lines 1-268 of readable/assets__naval-vJ9I-D0A.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  $ as e,
  Cn as t,
  Fn as n,
  Ft as r,
  G as i,
  I as a,
  L as o,
  Lt as s,
  Rn as c,
  Rt as l,
  T as u,
  U as d,
  Ut as f,
  V as p,
  _n as m,
  an as h,
  dt as g,
  et as _,
  gt as v,
  lt as y,
  nn as b,
  rt as x,
  zn as S,
  zt as ee,
} from "./graphics-quality-BsjABS0s.js";
var C = [2.6, 0, -1.1],
  w = {
    lhd: 7,
    cruiser: 9,
    destroyer: 11,
    frigate: 10,
    patrol: 16,
    landing: 5,
  },
  te = {
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
  ne = {
    lhd: 30,
    cruiser: 20,
    destroyer: 16,
    frigate: 13,
    patrol: 4,
    landing: 99,
  },
  re = {
    lhd: 34,
    cruiser: 30,
    destroyer: 26,
    frigate: 24,
    patrol: 10,
    landing: 8,
  },
  ie = {
    destroyer: [150, 17],
    frigate: [120, 14],
    cruiser: [172, 19],
    lhd: [225, 32],
    patrol: [45, 8],
    landing: [30, 9],
  },
  T = {
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
function ae() {
  let e = [],
    t = [],
    n = [],
    r = new d(),
    i = new S(),
    a = new S(),
    s = (i, a, o, s, c, l) => {
      r.setHex(l);
      for (let l of [i, a, o, i, o, s])
        (e.push(l[0], l[1], l[2]),
          t.push(c[0], c[1], c[2]),
          n.push(r.r, r.g, r.b));
    },
    c = {
      q(e, t, n, r, o) {
        return (
          i.set(t[0] - e[0], t[1] - e[1], t[2] - e[2]),
          a.set(r[0] - e[0], r[1] - e[1], r[2] - e[2]),
          i.cross(a).normalize(),
          s(e, t, n, r, [i.x || 0, i.y || 1, i.z || 0], o),
          c
        );
      },
      box(e, t, n, r, i, a, o) {
        return c.tbox(e, r, t, i, a - n, a - n, o, 0, 0, (n + a) / 2);
      },
      tbox(e, t, n, r, i, a, o, s = 0, l = 0, u = 0) {
        let d = [e, n, u - i / 2],
          f = [t, n, u - i / 2],
          p = [t, n, u + i / 2],
          m = [e, n, u + i / 2],
          h = [e + s, r, u - a / 2],
          g = [t - l, r, u - a / 2],
          _ = [t - l, r, u + a / 2],
          v = [e + s, r, u + a / 2];
        return (
          c
            .q(d, f, g, h, o)
            .q(f, p, _, g, o)
            .q(p, m, v, _, o)
            .q(m, d, h, v, o)
            .q(h, g, _, v, o)
            .q(d, m, p, f, o),
          c
        );
      },
      cyl(e, t, n, r, i, a, o, s = 8) {
        for (let l = 0; l < s; l++) {
          let u = (l / s) * Math.PI * 2,
            d = ((l + 1) / s) * Math.PI * 2,
            f = Math.cos(u) * r,
            p = Math.sin(u) * r,
            m = Math.cos(d) * r,
            h = Math.sin(d) * r;
          a === `y`
            ? c
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
            : c
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
        return c;
      },
      hull(e, t = T.deck) {
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
            (c
              .q(r.D(e), i.D(e), i.W(e), r.W(e), T.hull)
              .q(r.W(e), i.W(e), i.T(e), r.T(e), T.boot)
              .q(r.T(e), i.T(e), i.K, r.K, T.red),
              c.q(
                r.D(e),
                i.D(e),
                [i.x, i.d - 0.35, e * (i.w + 0.02)],
                [r.x, r.d - 0.35, e * (r.w + 0.02)],
                T.white,
              ));
          c.q(
            [r.x, r.d, -r.w],
            [i.x, i.d, -i.w],
            [i.x, i.d, i.w],
            [r.x, r.d, r.w],
            t,
          );
        }
        for (let e of [n[0], n[n.length - 1]])
          c.q(e.D(-1), e.D(1), e.W(1), e.W(-1), T.hull)
            .q(e.W(-1), e.W(1), e.T(1), e.T(-1), T.boot)
            .q(e.T(-1), e.T(1), e.K, e.K, T.red);
        return c;
      },
      geometry() {
        let r = new o();
        return (
          r.setAttribute(`position`, new x(e, 3)),
          r.setAttribute(`normal`, new x(t, 3)),
          r.setAttribute(`color`, new x(n, 3)),
          r.computeBoundingSphere(),
          r
        );
      },
    };
  return c;
}
function E(e, t, n, r, i, a) {
  for (let o = 0; o < 3; o++)
    for (let s of [-1, 1])
      e.box(
        t + o * a * 1.35,
        n,
        s * i - 0.22,
        t + o * a * 1.35 + a,
        r,
        s * i + 0.22,
        T.white,
      );
}
