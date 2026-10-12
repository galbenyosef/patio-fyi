// assets__lab-buildings-view-DJVr8phc 83 — box
// Lines 25494-25754 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function ac() {
  let e = 6.1,
    t = 16 * Fo,
    n = {
      wall: `amBrickRoman`,
      t: 0.3,
      bay: 3,
      floors: [3.2],
      win: {
        w: 2.2,
        h: 1.6,
        sill: 0.7,
        type: `grid`,
        lites: [3, 2],
        frame: `woodDark`,
        rec: 0.1,
        curtains: 0.5,
      },
      door: {
        w: 1.1,
        h: 2.2,
        transom: 0.3,
        frame: `woodDark`,
        glazed: !0,
        mat: `amDoorOak`,
        rec: 0.2,
      },
      base: { mat: `limestone`, h: 0.35, out: 0.04 },
    },
    r = (e) =>
      Be(
        [
          [`woodDark`, 3.78, 3.92, 0.06],
          [`limestone`, 3.1, 3.3, 0.08],
        ],
        e,
      );
  return {
    key: `amPrairie`,
    name: `Hollis Prairie House`,
    plain: 13481358,
    desc: `Prairie School house: low hipped roof in red tile with 1.9 m eaves, roman-brick ground floor under sand stucco, continuous casement ribbon on a dark wood band, broad low chimney, entry wing and a terrace wall with stone urns.`,
    W: 18,
    D: 11,
    style: {
      wall: `amStuccoSand`,
      floorMat: [`amBrickRoman`],
      t: 0.3,
      bay: 3,
      floors: [3.2, 2.9],
      win0: {
        w: 2.4,
        h: 1.7,
        sill: 0.6,
        type: `grid`,
        lites: [4, 2],
        frame: `woodDark`,
        rec: 0.1,
        curtains: 0.5,
      },
      win: {
        w: 2.7,
        h: 1.15,
        sill: 0.72,
        type: `grid`,
        lites: [4, 1],
        frame: `woodDark`,
        rec: 0.1,
        curtains: 0.5,
      },
      door: {
        w: 1.1,
        h: 2.2,
        transom: 0.3,
        frame: `woodDark`,
        glazed: !0,
        mat: `amDoorOak`,
        rec: 0.2,
      },
      base: { mat: `limestone`, h: 0.35, out: 0.05 },
      roof: Ko(`x`),
    },
    front: {
      kinds: (e, t) => (e === 0 && t >= 4 ? `solid` : `window`),
      extra: k(
        r(!1),
        ic,
        xs({
          u: 13.5,
          w: 6,
          d: 3.2,
          S: n,
          front: { kinds: (e, t) => (t ? `window` : `door`) },
          right: { kinds: () => `window` },
          left: { kinds: () => `window` },
          then: (e, n) =>
            ys(e, n, {
              W: 6,
              D: 3.2,
              H: 3.2,
              pitch: t,
              over: 1.2,
              mat: `amTileRed`,
              trim: `woodDark`,
              fh: 0.3,
            }),
        }),
      ),
    },
    back: {
      kinds: (e, t) => (e === 0 && t === 2 ? `door` : `window`),
      extra: r(!1),
    },
    right: { kinds: () => `window`, bay: 3.5, extra: r(!0) },
    left: { kinds: () => `window`, bay: 3.5, extra: r(!0) },
    extra: (n, r) => {
      let i = ys(n, r, {
        W: 18,
        D: 11,
        H: e,
        pitch: t,
        over: 1.9,
        mat: `amTileRed`,
        trim: `woodDark`,
        fh: 0.35,
      });
      A(n, r, `amBrickRoman`, 0.8, -0.4, e, i + 0.9, 3.4, 1.1);
    },
  };
}
var oc = (e, t, n, r) => (i, a, o) => {
    let s = 0.08,
      c = 0.05;
    for (let l of r)
      for (let r = 0; r < o.nb; r++) {
        let u = o.ys[l],
          d = u + Ro(o, l),
          f = o.grid[l][r],
          p = r * o.bw,
          m = p + o.bw,
          h = (p + m) / 2;
        (i.box(e, a, f, p, m, u, u + 0.2, 0, c),
          i.box(e, a, f, p, m, d - 0.2, d, 0, c),
          r === 0 && i.box(e, a, f, p, p + 0.2, u, d, 0, c),
          i.box(
            e,
            a,
            f,
            m - (r === o.nb - 1 ? 0.2 : s),
            m + (r === o.nb - 1 ? 0 : s),
            u,
            d,
            0,
            c,
          ));
        let g = (l === 0 && t.win0) || t.win,
          _ = n(l, r, o.nb);
        if (_ === `window`) {
          let t = Math.min(g.w, o.bw - 0.5),
            n = u + g.sill;
          n + Math.min(g.h, d - u - g.sill - 0.35);
          let r = h - t / 2 - 0.14,
            l = h + t / 2 + 0.14;
          for (let t of [r, l]) i.box(e, a, f, t - s, t + s, u, d, 0, c);
          i.box(e, a, f, p, m, n - 0.2, n - 0.06, 0, c);
          for (let [t, o] of [
            [p + s, r - s],
            [l + s, m - s],
          ])
            o - t > 0.25 && O(i, e, a, f, t, n - 0.06, o, d - 0.2, 0.14, 0, c);
        } else if (_ === `solid`) {
          for (let t = p + 0.55; t < m - 0.3; t += 0.55)
            i.box(e, a, f, t - s, t + s, u, d, 0, c);
          O(i, e, a, f, p + 0.1, u + 0.2, m - 0.1, d - 0.2, 0.16, 0, c);
        }
      }
    if (o.gableCell && o.L > 3) {
      let n = o.gableCell,
        r = t.roofPitch ?? 1,
        l = o.H,
        u = o.L / 2,
        d = (e) => l + (u - Math.abs(e - u)) * r - 0.2;
      i.box(e, a, n, 0, o.L, l, l + 0.2, 0, c);
      for (let t = u % 0.6; t < o.L; t += 0.6)
        d(t) - l > 0.4 &&
          Math.abs(t - u) > 0.3 &&
          i.box(e, a, n, t - s, t + s, l + 0.2, d(t), 0, c);
      let f = l + u * r * 0.45,
        p = u - (f - l + 0.2) / r;
      (i.box(e, a, n, u - p, u + p, f - 0.1, f + 0.1, 0, 0.060000000000000005),
        i.box(
          e,
          a,
          n,
          u - 0.1,
          u + 0.1,
          l + 0.2,
          d(u),
          0,
          0.060000000000000005,
        ));
      for (let t of [-1, 1])
        O(
          i,
          e,
          a,
          n,
          u + t * 0.1,
          f + 0.1,
          u + t * p * 0.6,
          d(u + t * p * 0.6),
          0.16,
          0,
          0.060000000000000005,
        );
    }
  },
  sc = (e, t) => (n, r, i) => {
    let a = i.grid[0][zo(i, e)],
      o = t * 0.35,
      s = t + o,
      c = Math.acos(o / s),
      l = 2.22 - Math.sqrt(s * s - o * o),
      u = 0.3,
      d = 2.22 + 0.35,
      f = [
        ...ps(e - o, l, s, 0, c, 6),
        ...ps(e + o, l, s, Math.PI - c, Math.PI, 6),
      ];
    ((f[6] = [e, 2.22]),
      f.splice(7, 1),
      us(
        n,
        r,
        a,
        `limestone`,
        [
          [e - t - u, 0.1],
          [e - t - u, d],
          [e + t + u, d],
          [e + t + u, 0.1],
          [e + t, 0.1],
          ...f,
          [e - t, 0.1],
        ],
        -0.02,
        0.08,
      ),
      n.box(
        `limestone`,
        r,
        a,
        e - t - u - 0.08,
        e + t + u + 0.08,
        d,
        2.6900000000000004,
        -0.02,
        0.14,
      ),
      As(n, r, a, e + t + u + 0.35, 2.4, 0));
  };
