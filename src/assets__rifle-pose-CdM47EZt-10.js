// assets__rifle-pose-CdM47EZt 10 — rbox
// Lines 25869-26196 of readable/assets__rifle-pose-CdM47EZt.pretty.js (statement-aligned).
function Cn(e) {
  let t = yn();
  e.root.userData.materials.push(...Object.values(t));
  let n = (n, r = e.lite) => dn(n, t, r),
    r = n(e.root),
    i = e.S,
    a = (e) => {
      for (let t of [-1, 1]) e(t);
    },
    o = (n, r, i = e.root) => {
      let a = new _(n, t[r]);
      return ((a.castShadow = a.receiveShadow = !0), i.add(a), a);
    },
    s = (e, t, n) => o(bn(t), e, n),
    c = (e, t, n, r, i = 0.002, a) =>
      s(
        e,
        [
          [t, r(i)],
          [t + i, r(0)],
          [n - i, r(0)],
          [n, r(i)],
        ],
        a,
      );
  function l(t, r = !0, i = [0, 0, 0]) {
    let a = new M();
    (a.position.set(...i), (a.userData[t] = r), e.root.add(a));
    let o = n(a);
    return (
      (o.loft = (e, t) => s(e, t, a)),
      (o.run = (e, t, n, r, i) => c(e, t, n, r, i, a)),
      (o.group = a),
      o
    );
  }
  function u(e, t, n, r, i = `satin`) {
    let a = n - t,
      o = 0.0058;
    e.loft(i, [
      [
        t,
        [
          [r, 0.0072],
          [r + 0.002, 0.0098],
          [r + 0.0032, 0.0106],
          [r + 0.0032, -0.0106],
          [r + 0.002, -0.0098],
          [r, -0.0072],
        ].map(([e, t]) => [e, t]),
      ],
      [
        n,
        [
          [r, 0.0072],
          [r + 0.002, 0.0098],
          [r + 0.0032, 0.0106],
          [r + 0.0032, -0.0106],
          [r + 0.002, -0.0098],
          [r, -0.0072],
        ],
      ],
    ]);
    let s = Math.floor((a - 0.004) / 0.01),
      c = t + (a - (s - 1) * 0.01) / 2;
    for (let t = 0; t < s; t++) {
      let n = c + t * 0.01,
        a = 0.0024;
      e.loft(i, [
        [
          n - a,
          [
            [r + 0.0032, 0.0104],
            [r + o - 8e-4, 0.0104],
            [r + o, 0.0094],
            [r + o, -0.0094],
            [r + o - 8e-4, -0.0104],
            [r + 0.0032, -0.0104],
          ],
        ],
        [
          n + a,
          [
            [r + 0.0032, 0.0104],
            [r + o - 8e-4, 0.0104],
            [r + o, 0.0094],
            [r + o, -0.0094],
            [r + o - 8e-4, -0.0104],
            [r + 0.0032, -0.0104],
          ],
        ],
      ]);
    }
    return (e.rbox(i, (t + n) / 2, r + 0.0034, 0, a, 0.0018, 0.0186, 0), r + o);
  }
  function d(e, t, n, r, o = 0.026, s = `satin`) {
    let c = l(`mount`);
    (c.run(
      s,
      e + 0.006,
      t - 0.006,
      (e) => xn(n - 0.002, r - 0.0058 + e * 0, o - e, 0.003, 0.002),
      0.003,
    ),
      a((r) => {
        for (let i of [e + 0.016, t - 0.016])
          (c.rbox(
            s,
            i,
            n - 0.002,
            r * (o / 2 + 0.001),
            0.012,
            0.012,
            0.003,
            0.001,
          ),
            c.tube(
              `bright`,
              i,
              n - 0.004,
              r * (o / 2 + 0.003),
              0.0028,
              0.002,
              `z`,
              0.0028,
              12,
            ));
      }));
    let d = u(c, e, t, r - 0.0058, s);
    i.rail = {
      pos: [(e + t) / 2, d, 0],
      length: +(t - e).toFixed(4),
      zone: [+(e + 0.002).toFixed(4), +(t - 0.002).toFixed(4)],
      sightX: +((e + t) / 2).toFixed(4),
    };
  }
  function f(e, t, n, a = `satin`, o) {
    let c = u({ ...r, loft: (e, t) => s(e, t) }, e, t, n, a);
    return (
      (i.rail = {
        pos: [(e + t) / 2, c, 0],
        length: +(t - e).toFixed(4),
        zone: [+(e + 0.004).toFixed(4), +(t - 0.004).toFixed(4)],
        sightX: +(o ?? (e + t) / 2).toFixed(4),
      }),
      c
    );
  }
  function p(e, t, n = 0.027, i = !0) {
    if ((r.sculpt(e, t, n, 0, 0.003), !i)) return;
    let [o, s] = t[0];
    a((e) => {
      for (let t = 0; t < 7; t++) {
        let i = s - 0.03 - t * 0.009;
        r.rbox(
          `inset`,
          o - 0.026 - (s - i) * 0.2,
          i,
          e * (n / 2 - 2e-4),
          0.016,
          0.0018,
          0.001,
          0,
        ).rotation.z = -0.2;
      }
    });
  }
  function m(e, t, n, i, a, o = 0.004, s = 0.009) {
    r.slab(
      e,
      [
        [t, i],
        [n, i],
        [n, i - a + 0.006],
        [n - 0.006, i - a],
        [t + 0.004, i - a],
        [t, i - a + 0.008],
      ],
      s,
      0,
      0.0012,
      [
        [
          [t + o, i - 0.001],
          [n - o, i - 0.001],
          [n - o, i - a + o + 0.004],
          [n - 0.006 - o * 0.5, i - a + o],
          [t + 0.004 + o * 0.5, i - a + o],
          [t + o, i - a + o + 0.006],
        ],
      ],
    );
    let c = t + (n - t) * 0.42;
    r.slab(
      `bright`,
      [
        [c, i],
        [c + 0.005, i],
        [c + 0.004, i - 0.011],
        [c - 0.001, i - 0.018],
        [c - 0.003, i - 0.016],
        [c, i - 0.009],
      ],
      0.005,
      0,
      8e-4,
    );
  }
  function h(t, r, i, a, o, c = `satin`) {
    let l = new M();
    (l.position.set(0, i, a),
      e.root.add(l),
      (l.rotation.x =
        o === `down` ? Math.PI : o === `right` ? Math.PI / 2 : -Math.PI / 2),
      u({ ...n(l), loft: (e, t) => s(e, t, l) }, t, r, 0, c));
  }
  function g(
    e,
    t,
    n,
    { ears: r = 0, mat: i = `satin`, ring: o = 0.0042 } = {},
  ) {
    let s = l(`iron`, `rear`, [e, t, 0]),
      c = n - t;
    return (
      s.rbox(i, 0, (c - o) / 2, 0, 0.004, c - o, 0.012, 8e-4),
      s.ring(i, 0, c, 0, o, 0.0016, `x`),
      r &&
        a((e) =>
          s.rbox(
            i,
            0,
            (c + r) / 2 - 0.001,
            e * 0.0095,
            0.006,
            c + r,
            0.003,
            8e-4,
          ),
        ),
      s
    );
  }
  function v(
    e,
    t,
    n,
    { ears: r = 0, mat: i = `satin`, width: o = 0.016 } = {},
  ) {
    let s = l(`iron`, `rear`, [e, t, 0]),
      c = n - t;
    return (
      a((e) =>
        s.rbox(
          i,
          0,
          c / 2 + 0.001,
          e * (o / 4 + 0.0012),
          0.004,
          c + 0.002,
          o / 2 - 0.0024,
          6e-4,
        ),
      ),
      s.rbox(i, 0, c * 0.35, 0, 0.004, c * 0.7, o, 6e-4),
      r &&
        a((e) =>
          s.rbox(
            i,
            0,
            (c + r) / 2,
            e * (o / 2 + 0.002),
            0.007,
            c + r,
            0.0028,
            8e-4,
          ),
        ),
      s
    );
  }
  function y(e, t, n, { ears: r = 0, hood: i = 0, mat: o = `satin` } = {}) {
    let s = l(`iron`, `front`, [e, t, 0]),
      c = n - t;
    return (
      s.rbox(o, 0, (c - 0.004) / 2, 0, 0.006, c - 0.004, 0.0045, 8e-4),
      s.rbox(`bright`, 0, c - 0.002, 0, 0.0025, 0.004, 0.0016, 0),
      r &&
        a((e) =>
          s.rbox(
            o,
            0,
            (c + r) / 2 - 0.002,
            e * 0.0075,
            0.008,
            c + r,
            0.0026,
            8e-4,
          ),
        ),
      i && s.ring(o, 0, c - i - 0.0016 + 0.004, 0, i, 0.0016, `x`),
      s
    );
  }
  return {
    ...r,
    M: t,
    S: i,
    side: a,
    loft: s,
    run: c,
    group: l,
    rail: u,
    railAt: h,
    opticMount: d,
    integralRail: f,
    pgrip: p,
    tguard: m,
    rearAperture: g,
    rearNotch: v,
    frontPost: y,
    rr: xn,
    circ: Sn,
    root: e.root,
    g: e,
  };
}
var wn = (e, t) => e.map(([e, n]) => [e, n + t]);
