// assets__rifle-pose-CdM47EZt 29 — top
// Lines 31219-31563 of readable/assets__rifle-pose-CdM47EZt.pretty.js (statement-aligned).
function si(e) {
  let t = Y(e, 12896460, 0.05, 0.5),
    n = Y(e, 9343896, 0.05, 0.55),
    r = Y(e, 2763822, 0.05, 0.7),
    i = Y(e, 2906784, 0.1, 0.45),
    a = Y(e, 15250700, 0.05, 0.4),
    o = Y(e, 14833434, 0.05, 0.4),
    s = Y(e, 4849518, 0, 0.4, { emissive: 2806351, emissiveIntensity: 1 }),
    c = ni(e, -0.12, {
      body: t,
      grip: n,
      rim: r,
      label: i,
      h: 0.112,
      w: 0.078,
      buttons: [
        [-0.095, o],
        [-0.12, r, 0.005],
      ],
    }),
    l = ni(e, 0.12, {
      body: t,
      grip: n,
      rim: r,
      label: i,
      h: 0.112,
      w: 0.078,
      buttons: [
        [-0.08, a],
        [-0.105, o],
        [-0.13, r, 0.005],
      ],
    }),
    u = ri(e, {
      d: 0.21,
      h: 0.27,
      w: 0.33,
      body: t,
      trim: r,
      screen: `glass`,
      knob: i,
      key: i,
      charge: a,
      shock: o,
      trace: [s],
      bags: !1,
      printer: !0,
    });
  X(e, i, -0.33 + 0.105 + 0.004, -0.3384, 0, 0.33 * 0.9, 0.012, `x`, 0.001);
  for (let [t, n] of [
    [c, -1],
    [l, 1],
  ])
    ei(
      e,
      r,
      [
        t.back,
        [t.back[0] - 0.08, -0.08, t.back[2] * 1.2],
        [-0.24, u.top + 0.08, n * 0.09],
        u.port(n),
      ],
      0.0032,
      0.0065,
      13,
    );
  Z(e.S, {
    eye: [-0.1, 0.12, 0],
    front: [0.13, 0, 0],
    top: [-0.33, u.top, 0],
    hands: { trigger: l.hand, support: c.hand },
  });
}
function ci(e) {
  let t = Y(e, 4080713, 0.1, 0.5),
    n = Y(e, 2040357, 0.05, 0.6),
    r = Y(e, 2002076, 0.1, 0.45),
    i = Y(e, 1447962, 0.05, 0.7),
    a = Y(e, 14724368, 0.05, 0.4),
    o = Y(e, 14572060, 0.05, 0.4),
    s = Y(e, 14343388, 0.02, 0.6),
    c = Y(e, 6288127, 0, 0.4, { emissive: 2805990, emissiveIntensity: 1 }),
    l = { body: t, grip: n, rim: r, label: s, h: 0.122, w: 0.086 },
    u = ni(e, -0.12, { ...l, buttons: [[-0.1, o]] }),
    d = ni(e, 0.12, {
      ...l,
      buttons: [
        [-0.08, a],
        [-0.112, o],
      ],
    });
  for (let t of [u, d])
    e.ring(r, t.hand[0] + 0.06, 0.006, t.hand[2], 0.019, 0.0022, `x`);
  let f = ri(e, {
    d: 0.22,
    h: 0.29,
    w: 0.36,
    body: t,
    trim: i,
    screen: `glass`,
    knob: r,
    key: r,
    charge: a,
    shock: o,
    trace: [c, a],
    bags: Y(e, 2500908, 0.02, 0.95),
    printer: !1,
  });
  for (let [t, n] of [
    [u, -1],
    [d, 1],
  ])
    ei(
      e,
      i,
      [
        t.back,
        [t.back[0] - 0.1, -0.06, t.back[2] * 1.25],
        [-0.25, f.top + 0.09, n * 0.1],
        f.port(n),
      ],
      0.0034,
      0.0068,
      14,
    );
  Z(e.S, {
    eye: [-0.1, 0.12, 0],
    front: [0.13, 0, 0],
    top: [-0.33, f.top, 0],
    hands: { trigger: d.hand, support: u.hand },
  });
}
function li(e) {
  let t = Y(e, 1842463, 0.05, 0.65),
    n = Y(e, 14134557, 0.05, 0.5),
    r = Y(e, 15263455, 0.02, 0.85),
    i = Y(e, 9414580, 0.1, 0.25),
    a = Y(e, 2969482, 0.02, 0.7),
    o = Y(e, 13225166, 0.05, 0.5),
    s = Y(e, 12986914, 0.05, 0.45),
    c = Y(e, 15132390, 0.02, 0.6),
    l = ii(e, -0.12, { foam: r, gel: i, print: a, lead: o }),
    u = ii(e, 0.12, { foam: r, gel: i, print: a, lead: o }),
    d = ai(e, {
      d: 0.09,
      h: 0.29,
      w: 0.24,
      body: t,
      bumper: n,
      face: t,
      screen: `glass`,
      on: `anod`,
      shock: s,
      icon: c,
    }),
    f = [-0.12, d.top + 0.05, 0];
  for (let t of [l, u])
    ei(
      e,
      c,
      [
        t.back,
        [t.back[0] - 0.06, -0.12, t.back[2] * 0.8],
        [-0.1, d.top + 0.08, t.back[2] * 0.2],
        f,
      ],
      0.0026,
    );
  (ei(e, c, [f, [-0.2, d.top + 0.06, 0.03], d.port], 0.0034),
    di(e, o, f),
    Z(e.S, {
      eye: [-0.08, 0.12, 0],
      front: [0.1, 0, 0],
      top: [-0.3, d.top, 0],
      hands: { trigger: u.hand, support: l.hand },
    }));
}
function ui(e) {
  let t = Y(e, 4869714, 0.08, 0.55),
    n = Y(e, 2237478, 0.05, 0.65),
    r = Y(e, 14922252, 0.05, 0.45),
    i = Y(e, 15723748, 0.02, 0.85),
    a = Y(e, 10135970, 0.1, 0.25),
    o = Y(e, 12071466, 0.02, 0.7),
    s = Y(e, 2763822, 0.05, 0.5),
    c = Y(e, 15263976, 0.02, 0.6),
    l = ii(e, -0.12, { foam: i, gel: a, print: o, lead: s, h: 0.125, w: 0.1 }),
    u = ii(e, 0.12, { foam: i, gel: a, print: o, lead: s, h: 0.125, w: 0.1 }),
    d = ai(e, {
      d: 0.1,
      h: 0.27,
      w: 0.22,
      body: t,
      bumper: n,
      face: n,
      screen: `glass`,
      on: r,
      shock: r,
      icon: c,
    }),
    f = [-0.12, d.top + 0.05, 0];
  for (let t of [l, u])
    ei(
      e,
      n,
      [
        t.back,
        [t.back[0] - 0.06, -0.12, t.back[2] * 0.8],
        [-0.1, d.top + 0.08, t.back[2] * 0.2],
        f,
      ],
      0.0026,
    );
  (ei(e, n, [f, [-0.2, d.top + 0.06, 0.03], d.port], 0.0034),
    di(e, r, f),
    Z(e.S, {
      eye: [-0.08, 0.12, 0],
      front: [0.1, 0, 0],
      top: [-0.3, d.top, 0],
      hands: { trigger: u.hand, support: l.hand },
    }));
}
var di = (e, t, [n, r, i]) => e.rbox(t, n, r, i, 0.03, 0.02, 0.022, 0.005);
function fi(e, t, n, r, i) {
  let { rbox: a, tube: o, side: s } = e,
    c = 0.305,
    l = 0.155,
    u = 0.172,
    d = t + c / 2;
  a(i.body, d, n + u / 2, r, c, u, l, 0.007);
  for (let e of [0.035, 0.13699999999999998])
    a(i.body, d, n + e, r, 0.309, 0.006, 0.159, 0.002);
  if (
    (a(`inset`, d, n + u + 0.001, r, 0.301, 0.002, 0.151, 6e-4),
    a(i.body, d, n + u + 0.01, r, 0.309, 0.018, 0.159, 0.004),
    a(i.body, d, n + u + 0.02, r, 0.275, 0.004, 0.125, 0.002),
    o(`steel`, d, n + u + 0.004, r - l / 2 - 0.003, 0.004, 0.285, `x`),
    s((e) =>
      a(`steel`, d + e * 0.05, n + u + 0.022, r, 0.012, 0.006, 0.02, 0.002),
    ),
    a(`steel`, d, n + u + 0.027, r, 0.115, 0.005, 0.02, 0.002),
    a(`steel`, t + c + 0.005, n + u - 0.03, r, 0.006, 0.075, 0.052, 0.002),
    o(`steel`, t + c + 0.009, n + u + 0.004, r, 0.004, 0.05, `z`),
    i.stencil)
  )
    for (let t of [-1, 1])
      $r(e, i.stencil, d, n + u * 0.6, r + t * 0.0781, c * 0.72, `z`, 3, 0.011);
}
function pi(e) {
  let { rbox: t, ring: n, side: r } = e,
    i = 0.49,
    a = 0.17,
    o = 0.24,
    s = i / 2,
    c = 0.016,
    l = Y(e, 6179889, 0.02, 0.8),
    u = Y(e, 4601887, 0.02, 0.82),
    d = Y(e, 1315860, 0.02, 0.8),
    f = Y(e, 9147025, 0.7, 0.45),
    p = Y(e, 7304821, 0.7, 0.5),
    m = Y(e, 9075285, 0.02, 0.95),
    h = Y(e, 2964006, 0.02, 0.75);
  (t(l, s, c / 2, 0, i, c, o, 0.002),
    r((e) => {
      for (let n of [0, 1])
        t(
          l,
          s,
          c + (0.15400000000000003 * (n + 0.5)) / 2,
          e * (o / 2 - c / 2),
          i,
          0.15400000000000003 / 2 - 0.002,
          c,
          0.002,
        );
      t(`inset`, s, 0.09300000000000001, e * 0.1202, 0.48, 0.0018, 0.001, 5e-4);
    }));
  for (let e of [c / 2, i - c / 2]) t(u, e, a / 2, 0, c, a, o - 2 * c, 0.002);
  for (let e of [-0.009, 0.499])
    (t(u, e, a / 2, 0, 0.018, a, 0.05, 0.003),
      n(m, e + Math.sign(e - s) * 0.02, a * 0.6, 0, 0.032, 0.006, `y`));
  (r((e) =>
    t(
      `steel`,
      s + e * 0.16,
      0.15000000000000002,
      0.123,
      0.03,
      0.05,
      0.003,
      0.001,
    ),
  ),
    $r(e, d, 0.205, a * 0.55, 0.1206, 0.26, `z`, 3, 0.012),
    X(e, h, 0.41500000000000004, a * 0.5, 0.1206, 0.05, a * 0.9, `z`, 8e-4));
  for (let e of [0, 1]) {
    let n = 0.02 + ((i - 2 * c - 0.008) * (e + 0.5)) / 2;
    (t(
      f,
      n,
      0.08600000000000001,
      0,
      (i - 2 * c - 0.012) / 2,
      0.135,
      o - 2 * c - 0.006,
      0.004,
    ),
      t(
        p,
        n,
        0.15400000000000003,
        0,
        0.21299999999999997,
        0.003,
        o - 2 * c - 0.02,
        0.001,
      ),
      t(p, n, 0.15600000000000003, 0, 0.19299999999999998, 0.002, 0.006, 6e-4));
  }
  t(`bright`, 0.046, 0.15899999999999997, -0.06, 0.03, 0.004, 0.012, 0.001);
  let g = ti(e, a, -0.24 / 2, 1.95);
  for (let e of [0, 1])
    g.rbox(l, s, 0.008, (o * (e + 0.5)) / 2, i, c, o / 2 - 0.002, 0.002);
  for (let e of [0.06, 0.43])
    g.rbox(u, e, -0.006, o / 2, 0.05, 0.012, 0.19999999999999998, 0.002);
  ($r(g, d, s, 0.0165, o / 2, 0.3, `y`, 2, 0.014),
    Z(e.S, {
      eye: [s, 0.29000000000000004, 0],
      front: [i, a / 2, 0],
      top: [s, a, 0],
      hands: { trigger: [0.52, a * 0.6, 0], support: [-0.03, a * 0.6, 0] },
    }));
}
function mi(e) {
  let t = Y(e, 14267443, 0.05, 0.6);
  (fi(e, 0, 0, -0.082, { body: `poly`, stencil: t }),
    fi(e, 0, 0, 0.082, { body: `poly`, stencil: t }),
    fi(e, 0.01, 0.204, 0, { body: `poly`, stencil: t }),
    Z(e.S, {
      eye: [0.15, 0.52, 0],
      front: [0.32, 0.2, 0],
      top: [0.16, 0.4, 0],
      hands: { trigger: [0.165, 0.41, 0], support: [0.32, 0.35, 0] },
    }));
}
