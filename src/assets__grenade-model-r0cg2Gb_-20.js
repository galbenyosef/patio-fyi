// assets__grenade-model-r0cg2Gb_ 20 — plate
// Lines 28772-29079 of readable/assets__grenade-model-r0cg2Gb_.pretty.js (statement-aligned).
function Xr(
  e,
  {
    front: t = 0.345,
    furniture: n = `poly`,
    metal: r = `paint`,
    grip: i = !0,
  } = {},
) {
  let {
      run: a,
      loft: o,
      rbox: s,
      tube: c,
      slab: l,
      pin: u,
      side: d,
      rr: f,
      circ: p,
      S: m,
    } = e,
    h = 0.027;
  (a(
    r,
    0,
    0.215,
    (e) => {
      let t = [],
        n = h / 2 - e;
      for (let e = 0; e <= 9; e++) {
        let r = (e / 9) * Math.PI;
        t.push([0.01 + n * Math.sin(r), n * Math.cos(r)]);
      }
      return (
        t.push(
          [-0.019 + e, -n],
          [-0.021 + e, -n + 0.002],
          [-0.021 + e, n - 0.002],
          [-0.019 + e, n],
        ),
        t
      );
    },
    0.002,
  ),
    d((e) => s(r, 0.11, 0.0235, e * 0.0042, 0.19, 0.002, 0.0022, 6e-4)),
    s(`inset`, 0.118, 0.006, h / 2 - 4e-4, 0.05, 0.012, 0.002, 0.001),
    s(`bright`, 0.118, 0.006, h / 2 - 0.0016, 0.046, 0.009, 0.001, 0),
    s(r, 0.118, -0.0015, 0.014, 0.054, 0.0018, 0.0014, 5e-4),
    a(r, 0.2, t, (e) => p(0.0155, 0.0088 - e * 0.5), 0.0015),
    s(`inset`, (t + 0.23) / 2, 0.0155, -0.0086, t - 0.25, 0.0026, 0.002, 8e-4),
    c(
      `barrel`,
      (0.21 + t) / 2 - 0.002,
      0,
      0,
      0.0075,
      t - 0.214,
      `x`,
      0.0075,
      16,
    ),
    l(
      n,
      [
        [0.016, -0.019],
        [0.15, -0.019],
        [0.15, -0.03],
        [0.142, -0.038],
        [0.098, -0.04],
        [0.09, -0.034],
        [0.048, -0.034],
        [0.026, -0.031],
        [0.016, -0.026],
      ],
      0.025,
      0,
      0.0016,
    ),
    d((e) => {
      let t = e * (h / 2 - 8e-4);
      (u(0.024, -0.025, t, 0.0022, `bright`),
        u(0.138, -0.025, t, 0.0022, `bright`),
        s(`inset`, 0.085, -0.0192, t + e * 6e-4, 0.13, 8e-4, 6e-4, 0));
    }),
    s(`parker`, 0.066, -0.027, -0.027 / 2 - 0.0016, 0.016, 0.004, 0.0016, 6e-4),
    c(
      `parker`,
      0.058,
      -0.027,
      -0.027 / 2 - 0.0012,
      0.004,
      0.002,
      `z`,
      0.004,
      12,
    ));
  for (let [e, t, n] of [
    [-0.006, 0.007, `mark`],
    [0.004, 0.009, `markred`],
    [0.012, 0.006, `markred`],
  ])
    s(n, 0.058 + e, -0.027 + t, -0.027 / 2 - 6e-4, 0.0028, 0.0028, 6e-4, 0);
  return (
    a(
      r,
      0.15,
      0.188,
      (e) => f(-0.047, -0.018, 0.023 - e, 0.002, 0.002),
      0.0015,
    ),
    s(r, 0.169, -0.046, 0, 0.04, 0.003, 0.026, 0.001),
    l(
      `parker`,
      [
        [0.145, -0.035],
        [0.149, -0.035],
        [0.15, -0.05],
        [0.144, -0.052],
      ],
      0.014,
      0,
      6e-4,
    ),
    s(`parker`, 0.19, -0.03, h / 2 - 4e-4, 0.006, 0.006, 0.003, 0.001),
    (m.magwell = { pos: [0.168, -0.047, 0], kind: `sm-mp5` }),
    i &&
      e.pgrip(
        n,
        [
          [0.074, -0.034],
          [0.046, -0.034],
          [0.036, -0.046],
          [0.026, -0.09],
          [0.02, -0.12],
          [0.03, -0.126],
          [0.05, -0.124],
          [0.054, -0.104],
          [0.058, -0.07],
          [0.066, -0.05],
        ],
        0.026,
      ),
    e.tguard(n, 0.068, 0.126, -0.033, 0.03, 0.0042, 0.01),
    (m.hands = { trigger: [0.04, -0.074, 0] }),
    a(
      n,
      -0.012,
      0.002,
      (e) => f(-0.021 + e, 0.024 - e, 0.028 - 2 * e, 0.011, 0.003),
      0.003,
    ),
    d((e) =>
      a(
        r,
        0,
        0.095,
        (t) => Yr(f(-0.006 + t, 0.006 - t, 0.004, 0.0012, 0.0012), e * 0.0151),
        0.001,
      ),
    ),
    { W: h }
  );
}
var Zr = { hole: 0.0042, rim: 0.005, bevel: 35e-5 };
function Qr(e, t, n, r, { depth: i = 0.0024, blade: a = 0.0032 } = {}) {
  let { plate: o } = e;
  (o(e, t, 0, dr(0, r, Zr.rim), i, [fr(0, r, Zr.hole)], Zr.bevel, !0),
    r - Zr.rim + 4e-4 > n + 5e-4 &&
      o(e, t, 0, hr(n, r - Zr.rim + 4e-4, a + 0.0014, a), i));
}
var $r = (e, t, n, r, i, a = 0.0016, o = 0.007, s = `round`) => {
    for (let c of [-1, 1])
      e.plate(
        e,
        t,
        0,
        s === `cut` ? mr(c * i, c * (i + a), n, r, `cut`) : gr(c * i, a, n, r),
        o,
      );
  },
  ei = (e, t, n, r) => {
    let i = e.plate(e, t, 0, hr(n, r, 0.0034, 0.0017), 0.0026, [], 2e-4, !0);
    return ((i.userData.ironPost = !0), i);
  },
  ti = { r: 0.0052, len: 0.013 };
function ni(e, t, n, r, i = 0.0155, a = 0.029) {
  let { group: o, plate: s, side: c, S: l } = e,
    u = ti,
    d = o(`iron`, `rear`, [t, 0, 0]);
  ((d.plate = s),
    d.rbox(`paint`, 0.002, a - 0.0022, 0, 0.018, 0.0045, 0.013, 0.0012),
    d.rbox(
      `paint`,
      0,
      (a + r - u.r) / 2,
      0,
      0.008,
      r - u.r - a + 0.002,
      0.009,
      0.001,
    ));
  let f = Zr.hole + 4e-4;
  c((e) => {
    d.tube(
      `paint`,
      0,
      r,
      e * (f + (u.len / 2 - f) / 2),
      u.r,
      u.len / 2 - f,
      `z`,
      u.r,
      20,
    );
    for (let t = 0; t < 10; t++) {
      let n = (t * Math.PI) / 5;
      d.rbox(
        `inset`,
        Math.cos(n) * u.r,
        r + Math.sin(n) * u.r,
        e * (u.len / 2 - 0.001),
        7e-4,
        7e-4,
        0.0016,
        0,
      ).rotation.z = n;
    }
  });
  let p = (e) => {
    let t = [];
    for (let n = 0; n <= 12; n++) {
      let i = (e ? 0 : Math.PI) + (n * Math.PI) / 12,
        a = Math.cos(i) * u.r,
        o = Math.sin(i) * u.r;
      Math.abs(o) >= f * 0.98 && t.push([a, r + o]);
    }
    return (
      t.push([t.at(-1)[0], r + (e ? f : -f)], [t[0][0], r + (e ? f : -f)]),
      t
    );
  };
  (d.slab(`paint`, p(!0), f * 2, 0, 3e-4),
    d.slab(`paint`, p(!1), f * 2, 0, 3e-4),
    s(
      d,
      `paint`,
      -u.r - 3e-4,
      dr(0, r, Zr.rim),
      0.0012,
      [fr(0, r, Zr.hole)],
      Zr.bevel,
      !0,
    ));
  let m = o(`iron`, `front`, [n, 0, 0]),
    h = 0.006;
  ((m.plate = s),
    m.rbox(
      `paint`,
      0,
      (i + r - h) / 2 + 0.001,
      0,
      0.005,
      r - h - i + 0.004,
      0.0045,
      0.001,
    ),
    s(m, `paint`, 0, dr(0, r, h), 0.005, [fr(0, r, 0.0052)], 2e-4, !0),
    ei(m, `paint`, r - h + 4e-4, r),
    (l.irons = {
      eye: [t - u.r - 0.001, r, 0],
      rear: t,
      front: n,
      authored: !0,
    }));
}
function ri(e, t, n, r, i) {
  let { group: a, plate: o, S: s } = e,
    c = a(`iron`, `rear`, [t, 0, 0]);
  ((c.plate = o),
    c.rbox(`satin`, 0, r + 0.0012, 0, 0.012, 0.0024, 0.021, 8e-4),
    Qr(c, `satin`, r + 0.002, i),
    $r(c, `satin`, r + 0.0016, i + 0.0025, 0.0085),
    c.tube(`satin`, 0, r + 0.006, 0.0106, 0.0024, 0.002, `z`, 0.0024, 14));
  let l = a(`iron`, `front`, [n, 0, 0]),
    u = 0.0056;
  ((l.plate = o),
    l.rbox(`satin`, 0, r + 0.0012, 0, 0.011, 0.0024, 0.021, 8e-4),
    o(l, `satin`, 0, dr(0, i, u), 0.005, [fr(0, i, 0.0048)], 2e-4, !0),
    ei(l, `satin`, i - u + 5e-4, i),
    (s.irons = { eye: [t - 0.002, i, 0], rear: t, front: n, authored: !0 }));
}
function ii(e, t, n, r, i) {
  let { group: a, plate: o, S: s } = e,
    c = a(`iron`, `rear`, [t, 0, 0]);
  ((c.plate = o),
    c.rbox(`satin`, 0, r + 0.0011, 0, 0.011, 0.0022, 0.02, 7e-4),
    c.tube(`satin`, 0.0025, r + 0.0016, 0, 0.0012, 0.013, `z`, 0.0012, 12),
    Qr(c, `satin`, r + 0.002, i, { blade: 0.0044 }),
    $r(c, `satin`, r + 0.0018, i + 0.003, 0.0088, 0.0017, 0.008, `cut`));
  let l = a(`iron`, `front`, [n, 0, 0]);
  ((l.plate = o),
    l.rbox(`satin`, 0, r + 0.0011, 0, 0.011, 0.0022, 0.02, 7e-4),
    l.tube(`satin`, -0.0025, r + 0.0016, 0, 0.0012, 0.012, `z`, 0.0012, 12),
    ei(l, `satin`, r + 0.002, i),
    $r(l, `satin`, r + 0.0018, i + 0.0018, 0.0062, 0.0015, 0.006, `cut`),
    (s.irons = { eye: [t - 0.0016, i, 0], rear: t, front: n, authored: !0 }));
}
