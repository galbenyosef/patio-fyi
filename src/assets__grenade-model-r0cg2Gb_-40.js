// assets__grenade-model-r0cg2Gb_ 40 — back
// Lines 35402-35738 of readable/assets__grenade-model-r0cg2Gb_.pretty.js (statement-aligned).
function Ka(e, { paddlesOnly: t = !1, leads: n = !0 } = {}) {
  let r = X(e, 5593437, 0.1, 0.5),
    i = X(e, 2500651, 0.05, 0.62),
    a = X(e, 2895666, 0.08, 0.55),
    o = X(e, 1645083, 0.05, 0.7),
    s = X(e, 14856199, 0.05, 0.4),
    c = X(e, 14705179, 0.05, 0.4),
    l = X(e, 14277339, 0.02, 0.6),
    u = X(e, 4063098, 0, 0.4, { emissive: 2279514, emissiveIntensity: 1 }),
    d = Ha(e, -0.12, {
      body: r,
      grip: i,
      rim: o,
      label: l,
      buttons: [[-0.1, c]],
    }),
    f = Ha(e, 0.12, {
      body: r,
      grip: i,
      rim: o,
      label: l,
      buttons: [
        [-0.085, s],
        [-0.115, c],
      ],
    });
  if (t) {
    (n &&
      Ba(
        e,
        o,
        [
          d.back,
          [d.back[0] - 0.09, -0.08, -0.13],
          [-0.24, -0.2, 0],
          [f.back[0] - 0.09, -0.08, 0.13],
          f.back,
        ],
        0.0034,
        0.007,
        22,
      ),
      Z(e.S, {
        eye: [-0.1, 0.12, 0],
        front: [0.13, 0, 0],
        top: [0, 0.06, 0],
        hands: { trigger: f.hand, support: d.hand },
      }));
    return;
  }
  let p = Ua(e, {
    d: 0.23,
    h: 0.3,
    w: 0.38,
    body: a,
    trim: o,
    screen: `glass`,
    knob: r,
    key: s,
    charge: s,
    shock: c,
    trace: [u, s],
    bags: X(e, 2303271, 0.02, 0.95),
    printer: !0,
  });
  for (let [t, n] of [
    [d, -1],
    [f, 1],
  ])
    Ba(
      e,
      o,
      [
        t.back,
        [t.back[0] - 0.1, -0.05, t.back[2] * 1.3],
        [-0.25, p.top + 0.1, n * 0.1],
        p.port(n),
      ],
      0.0034,
      0.007,
      14,
    );
  Z(e.S, {
    eye: [-0.1, 0.12, 0],
    front: [0.13, 0, 0],
    top: [-0.33, p.top, 0],
    hands: { trigger: f.hand, support: d.hand },
  });
}
function qa(e) {
  let t = X(e, 12896460, 0.05, 0.5),
    n = X(e, 9343896, 0.05, 0.55),
    r = X(e, 2763822, 0.05, 0.7),
    i = X(e, 2906784, 0.1, 0.45),
    a = X(e, 15250700, 0.05, 0.4),
    o = X(e, 14833434, 0.05, 0.4),
    s = X(e, 4849518, 0, 0.4, { emissive: 2806351, emissiveIntensity: 1 }),
    c = Ha(e, -0.12, {
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
    l = Ha(e, 0.12, {
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
    u = Ua(e, {
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
  La(e, i, -0.33 + 0.105 + 0.004, -0.3384, 0, 0.33 * 0.9, 0.012, `x`, 0.001);
  for (let [t, n] of [
    [c, -1],
    [l, 1],
  ])
    Ba(
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
function Ja(e) {
  let t = X(e, 4080713, 0.1, 0.5),
    n = X(e, 2040357, 0.05, 0.6),
    r = X(e, 2002076, 0.1, 0.45),
    i = X(e, 1447962, 0.05, 0.7),
    a = X(e, 14724368, 0.05, 0.4),
    o = X(e, 14572060, 0.05, 0.4),
    s = X(e, 14343388, 0.02, 0.6),
    c = X(e, 6288127, 0, 0.4, { emissive: 2805990, emissiveIntensity: 1 }),
    l = { body: t, grip: n, rim: r, label: s, h: 0.122, w: 0.086 },
    u = Ha(e, -0.12, { ...l, buttons: [[-0.1, o]] }),
    d = Ha(e, 0.12, {
      ...l,
      buttons: [
        [-0.08, a],
        [-0.112, o],
      ],
    });
  for (let t of [u, d])
    e.ring(r, t.hand[0] + 0.06, 0.006, t.hand[2], 0.019, 0.0022, `x`);
  let f = Ua(e, {
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
    bags: X(e, 2500908, 0.02, 0.95),
    printer: !1,
  });
  for (let [t, n] of [
    [u, -1],
    [d, 1],
  ])
    Ba(
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
function Ya(e) {
  let t = X(e, 1842463, 0.05, 0.65),
    n = X(e, 14134557, 0.05, 0.5),
    r = X(e, 15263455, 0.02, 0.85),
    i = X(e, 9414580, 0.1, 0.25),
    a = X(e, 2969482, 0.02, 0.7),
    o = X(e, 13225166, 0.05, 0.5),
    s = X(e, 12986914, 0.05, 0.45),
    c = X(e, 15132390, 0.02, 0.6),
    l = Wa(e, -0.12, { foam: r, gel: i, print: a, lead: o }),
    u = Wa(e, 0.12, { foam: r, gel: i, print: a, lead: o }),
    d = Ga(e, {
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
    Ba(
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
  (Ba(e, c, [f, [-0.2, d.top + 0.06, 0.03], d.port], 0.0034),
    Za(e, o, f),
    Z(e.S, {
      eye: [-0.08, 0.12, 0],
      front: [0.1, 0, 0],
      top: [-0.3, d.top, 0],
      hands: { trigger: u.hand, support: l.hand },
    }));
}
function Xa(e) {
  let t = X(e, 4869714, 0.08, 0.55),
    n = X(e, 2237478, 0.05, 0.65),
    r = X(e, 14922252, 0.05, 0.45),
    i = X(e, 15723748, 0.02, 0.85),
    a = X(e, 10135970, 0.1, 0.25),
    o = X(e, 12071466, 0.02, 0.7),
    s = X(e, 2763822, 0.05, 0.5),
    c = X(e, 15263976, 0.02, 0.6),
    l = Wa(e, -0.12, { foam: i, gel: a, print: o, lead: s, h: 0.125, w: 0.1 }),
    u = Wa(e, 0.12, { foam: i, gel: a, print: o, lead: s, h: 0.125, w: 0.1 }),
    d = Ga(e, {
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
    Ba(
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
  (Ba(e, n, [f, [-0.2, d.top + 0.06, 0.03], d.port], 0.0034),
    Za(e, r, f),
    Z(e.S, {
      eye: [-0.08, 0.12, 0],
      front: [0.1, 0, 0],
      top: [-0.3, d.top, 0],
      hands: { trigger: u.hand, support: l.hand },
    }));
}
var Za = (e, t, [n, r, i]) => e.rbox(t, n, r, i, 0.03, 0.02, 0.022, 0.005);
function Qa(e, t, n, r, i) {
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
      za(e, i.stencil, d, n + u * 0.6, r + t * 0.0781, c * 0.72, `z`, 3, 0.011);
}
