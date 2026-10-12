// assets__rifle-pose-CdM47EZt 22 — math
// Lines 28989-29252 of readable/assets__rifle-pose-CdM47EZt.pretty.js (statement-aligned).
function Cr(e, t) {
  let n = {};
  ((n.shell = (t, n, r, i, a, o) => {
    (e.lathe(t, n, r, 0, i, `x`, o), e.lathe(`inner`, n, r, 0, a, `x`, o));
    for (let [s, c] of [
      [i[0], a[0]],
      [i[i.length - 1], a[a.length - 1]],
    ])
      e.lathe(
        t,
        n,
        r,
        0,
        [
          [s[0], c[1]],
          [s[0], s[1]],
        ],
        `x`,
        o,
      );
  }),
    (n.arch = (t, n, r, i, a = [], o = 8e-4) => {
      let s = e.slab(t, n, i - r, -(r + i) / 2, o, a);
      return ((s.rotation.y = -Math.PI / 2), s);
    }),
    (n.rr = (e, t, n, r, i, a = 4) => {
      let o = [],
        s = [
          [t - i, r - i, 0],
          [e + i, r - i, Math.PI / 2],
          [e + i, n + i, Math.PI],
          [t - i, n + i, Math.PI * 1.5],
        ];
      for (let [e, t, n] of s)
        for (let r = 0; r <= a; r++) {
          let s = n + ((r / a) * Math.PI) / 2;
          o.push([e + Math.cos(s) * i, t + Math.sin(s) * i]);
        }
      return o.reverse();
    }),
    (n.trap = (e, t, n, r, i) => {
      let a = [
          [-e / 2, n],
          [e / 2, n],
        ],
        o = [
          [t / 2 - i, r - i, 0],
          [-t / 2 + i, r - i, Math.PI / 2],
        ];
      for (let [e, t, n] of o)
        for (let r = 0; r <= 4; r++) {
          let o = n + ((r / 4) * Math.PI) / 2;
          a.push([e + Math.cos(o) * i, t + Math.sin(o) * i]);
        }
      return a;
    }),
    (n.oct = (e, t, n, r) => [
      [-e + n, r - t],
      [e - n, r - t],
      [e, r - t + n],
      [e, r + t - n],
      [e - n, r + t],
      [-e + n, r + t],
      [-e, r + t - n],
      [-e, r - t + n],
    ]),
    (n.circle = (e, t = 0, n = 28) =>
      Array.from({ length: n }, (r, i) => [
        Math.cos((-i / n) * Math.PI * 2) * e,
        t + Math.sin((-i / n) * Math.PI * 2) * e,
      ])),
    (n.scopeClamp = (
      t,
      n,
      {
        w: r = 0.026,
        h: i = 0.007,
        levers: a = 0,
        nuts: o = 0,
        mat: s = `body`,
      } = {},
    ) => {
      let c = n - t,
        l = (t + n) / 2;
      e.rbox(s, l, i / 2, 0, c, i, r, 0.0014);
      for (let t of [-1, 1])
        e.rbox(s, l, -0.0028, t * 0.0123, c, 0.0095, 0.0042, 0.001);
      (e.tube(`steel`, l, -0.003, -0.0151, 0.0034, 0.0016, `z`, 0.0034, 12),
        !a &&
          !o &&
          e.tube(`steel`, l, -0.003, 0.0153, 0.0046, 0.0032, `z`, 0.0046, 6));
      for (let n = 0; n < a; n++) {
        let r = a === 1 ? l : t + 0.012 + n * (c - 0.024),
          i = e.rbox(
            s,
            r + 0.009,
            -0.0015,
            0.0162,
            0.03,
            0.0062,
            0.0042,
            0.0018,
          );
        ((i.rotation.y = 0.05),
          e.tube(`steel`, r, -0.0015, 0.0158, 0.0034, 0.006, `z`, 0.0034, 10));
      }
      for (let n = 0; n < o; n++) {
        let r = o === 1 ? l : t + 0.014 + (n * (c - 0.028)) / (o - 1);
        (e.tube(`knurl`, r, -0.0025, 0.0178, 0.0082, 0.0072, `z`, 0.0082, 16),
          e.tube(`steel`, r, -0.0025, 0.0215, 0.0032, 0.0012, `z`, 0.0032, 10));
      }
    }));
  let r = (e, t) => ((e.userData.sightMount = t), e);
  return (
    (n.clamp = (t, i, { levers: a = 0, nuts: o = 0, mat: s = `body` } = {}) => {
      let c = i - t,
        l = (t + i) / 2;
      r(e.rbox(s, l, 0.0015, 0, c, 0.003, 0.0236, 6e-4), `shoe`);
      for (let e of [-1, 1])
        r(
          n.arch(
            s,
            [
              [e * 0.0108, 0.002],
              [e * 0.0127, 0.0012],
              [e * 0.0127, -0.0046],
              [e * 0.0089, -0.0046],
              [e * 0.0089, -0.003],
              [e * 0.0108, -0.0018],
            ],
            t + 5e-4,
            i - 5e-4,
            [],
            25e-5,
          ),
          `jaw`,
        );
      let u = Math.max(1, a, o);
      for (let t = 0; t < u; t++) {
        let n = u === 1 ? l : l + (t / (u - 1) - 0.5) * Math.max(0, c - 0.025);
        if (
          (r(
            e.tube(
              `steel`,
              n,
              -0.0012,
              -0.013,
              0.0025,
              0.0013,
              `z`,
              0.0025,
              10,
            ),
            `bolt`,
          ),
          a)
        ) {
          r(
            e.tube(`steel`, n, -0.0012, 0.0134, 0.003, 0.0028, `z`, 0.003, 12),
            `pivot`,
          );
          let t = Math.min(0.021, c * 0.58);
          r(
            e.rbox(
              `steel`,
              n + t * 0.28,
              -3e-4,
              0.0144,
              t,
              0.0032,
              0.0018,
              55e-5,
            ),
            `lever`,
          );
        } else {
          let t = o ? 0.0044 : 0.003;
          r(
            e.tube(
              o ? `knurl` : `steel`,
              n,
              -0.0012,
              0.0139,
              t,
              0.0032,
              `z`,
              t,
              o ? 12 : 6,
            ),
            `nut`,
          );
        }
      }
    }),
    (n.mountDrop = 0),
    (n.riser = (
      t,
      i,
      a,
      { width: o = 0.013, plate: s = 0.02, mat: c = `body`, cant: l = 0 } = {},
    ) => {
      ((n.mountDrop = Math.max(0, a - 0.0075)), (a -= n.mountDrop));
      let u = (t + i) / 2,
        d = 0.0028,
        f = a - 0.0024,
        p = Math.min(0.002, (i - t) * 0.08),
        m = t + p + l,
        h = i - p + l,
        g = [
          [t, d],
          [i, d],
          [h, f],
          [m, f],
        ];
      (r(e.slab(c, g, o, 0, 3e-4), `riser`),
        r(
          e.rbox(
            c,
            u + l,
            a - 0.0012,
            0,
            i - t - 2 * p + 0.004,
            0.0024,
            s,
            45e-5,
          ),
          `adapter`,
        ));
      for (let t of [m + 0.003, h - 0.003])
        r(
          e.tube(`steel`, t, a + 1e-4, 0, 0.0015, 8e-4, `y`, 0.0015, 8),
          `screw`,
        );
    }),
    (n.turret = (t, n, r, i, a, o = `y`, s = 1) => {
      o === `y`
        ? (e.tube(`body`, t, n + a * 0.3, r, i * 1.08, a * 0.6, `y`, i * 1.08),
          e.tube(`knurl`, t, n + a * 0.8, r, i, a * 0.45, `y`, i * 0.96))
        : (e.tube(
            `body`,
            t,
            n,
            r + s * a * 0.3,
            i * 1.08,
            a * 0.6,
            `z`,
            i * 1.08,
          ),
          e.tube(`knurl`, t, n, r + s * a * 0.8, i, a * 0.45, `z`, i * 0.96));
    }),
    (n.button = (t, n, r, i = 0.0026, a = `z`) =>
      e.tube(`rubber`, t, n, r, i, 0.0022, a, i * 0.85, 12)),
    (n.glass = (t, n, r, i, a) => e.rbox(t, n, r, 0, 0.0012, a, i, 0)),
    (n.disc = (t, n, r, i) => e.tube(t, n, r, 0, i, 0.0012, `x`, i, 28)),
    (n.engrave = (n, r, i, a, o, s, c = 1) => {
      if (typeof document > `u`) return;
      let l = Sr(n, t);
      if (!l) return;
      let u = e.mesh(new D(o, s), l, r, i, a + c * 3e-4);
      ((u.rotation.y = c > 0 ? 0 : Math.PI), (u.castShadow = !1));
    }),
    n
  );
}
