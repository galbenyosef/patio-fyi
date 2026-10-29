// assets__grenade-model-r0cg2Gb_ 19 — tofixed
// Lines 28530-28771 of readable/assets__grenade-model-r0cg2Gb_.pretty.js (statement-aligned).
function Jr(e) {
  let t = Wr();
  e.root.userData.materials.push(...Object.values(t));
  let r = (n, r = e.lite) => tr(n, t, r),
    i = r(e.root),
    a = e.S,
    o = (e) => {
      for (let t of [-1, 1]) e(t);
    },
    s = (r, i, a = e.root) => {
      let o = new n(r, t[i]);
      return ((o.castShadow = o.receiveShadow = !0), a.add(o), o);
    },
    c = (e, t, n) => s(Gr(t), e, n),
    l = (e, t, n, r, i = 0.002, a) =>
      c(
        e,
        [
          [t, r(i)],
          [t + i, r(0)],
          [n - i, r(0)],
          [n, r(i)],
        ],
        a,
      );
  function u(t, n = !0, i = [0, 0, 0]) {
    let a = new j();
    (a.position.set(...i), (a.userData[t] = n), e.root.add(a));
    let o = r(a);
    return (
      (o.loft = (e, t) => c(e, t, a)),
      (o.run = (e, t, n, r, i) => l(e, t, n, r, i, a)),
      (o.group = a),
      o
    );
  }
  function d(e, t, n, r, i = `satin`) {
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
  function f(e, t, n, r, i = 0.026, s = `satin`) {
    let c = u(`mount`);
    (c.run(
      s,
      e + 0.006,
      t - 0.006,
      (e) => Kr(n - 0.002, r - 0.0058 + e * 0, i - e, 0.003, 0.002),
      0.003,
    ),
      o((r) => {
        for (let a of [e + 0.016, t - 0.016])
          (c.rbox(
            s,
            a,
            n - 0.002,
            r * (i / 2 + 0.001),
            0.012,
            0.012,
            0.003,
            0.001,
          ),
            c.tube(
              `bright`,
              a,
              n - 0.004,
              r * (i / 2 + 0.003),
              0.0028,
              0.002,
              `z`,
              0.0028,
              12,
            ));
      }));
    let l = d(c, e, t, r - 0.0058, s);
    a.rail = {
      pos: [(e + t) / 2, l, 0],
      length: +(t - e).toFixed(4),
      zone: [+(e + 0.002).toFixed(4), +(t - 0.002).toFixed(4)],
      sightX: +((e + t) / 2).toFixed(4),
    };
  }
  function p(e, t, n, r = `satin`, o) {
    let s = d({ ...i, loft: (e, t) => c(e, t) }, e, t, n, r);
    return (
      (a.rail = {
        pos: [(e + t) / 2, s, 0],
        length: +(t - e).toFixed(4),
        zone: [+(e + 0.004).toFixed(4), +(t - 0.004).toFixed(4)],
        sightX: +(o ?? (e + t) / 2).toFixed(4),
      }),
      s
    );
  }
  function m(e, t, n = 0.027, r = !0) {
    if ((i.sculpt(e, t, n, 0, 0.003), !r)) return;
    let [a, s] = t[0];
    o((e) => {
      for (let t = 0; t < 7; t++) {
        let r = s - 0.03 - t * 0.009;
        i.rbox(
          `inset`,
          a - 0.026 - (s - r) * 0.2,
          r,
          e * (n / 2 - 2e-4),
          0.016,
          0.0018,
          0.001,
          0,
        ).rotation.z = -0.2;
      }
    });
  }
  function h(e, t, n, r, a, o = 0.004, s = 0.009) {
    i.slab(
      e,
      [
        [t, r],
        [n, r],
        [n, r - a + 0.006],
        [n - 0.006, r - a],
        [t + 0.004, r - a],
        [t, r - a + 0.008],
      ],
      s,
      0,
      0.0012,
      [
        [
          [t + o, r - 0.001],
          [n - o, r - 0.001],
          [n - o, r - a + o + 0.004],
          [n - 0.006 - o * 0.5, r - a + o],
          [t + 0.004 + o * 0.5, r - a + o],
          [t + o, r - a + o + 0.006],
        ],
      ],
    );
    let c = t + (n - t) * 0.42;
    i.slab(
      `bright`,
      [
        [c, r],
        [c + 0.005, r],
        [c + 0.004, r - 0.011],
        [c - 0.001, r - 0.018],
        [c - 0.003, r - 0.016],
        [c, r - 0.009],
      ],
      0.005,
      0,
      8e-4,
    );
  }
  function g(t, n, i, a, o, s = `satin`) {
    let l = new j();
    (l.position.set(0, i, a),
      e.root.add(l),
      (l.rotation.x =
        o === `down` ? Math.PI : o === `right` ? Math.PI / 2 : -Math.PI / 2),
      d({ ...r(l), loft: (e, t) => c(e, t, l) }, t, n, 0, s));
  }
  function _(t, n, r, i, a, o = [], s = 3e-4, c = !1) {
    let l = e.lite === !0 || (e.lite && !c) ? 0 : s;
    return t.mesh(lr(i, a, o, l), n, r, 0, 0);
  }
  return {
    ...i,
    M: t,
    S: a,
    side: o,
    loft: c,
    run: l,
    group: u,
    rail: d,
    railAt: g,
    opticMount: f,
    integralRail: p,
    pgrip: m,
    tguard: h,
    plate: _,
    rr: Kr,
    circ: qr,
    root: e.root,
    g: e,
  };
}
var Yr = (e, t) => e.map(([e, n]) => [e, n + t]);
