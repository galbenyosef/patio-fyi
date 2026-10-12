// assets__sim-D8F3HPJq 02 — push
// Lines 201-540 of readable/assets__sim-D8F3HPJq.pretty.js (statement-aligned).
function C() {
  let e = [],
    t = f.crewDoor,
    n = (e, t) => (n) => (n > 0 ? [e, t] : [-t, -e]);
  (e.push(h(`belly`, `body`, [f.hold.x0, 0.6, -g, 8.4, y, g])),
    e.push(h(`nose well`, `body`, [8.4, 0.85, -g, 9.6, y, g])),
    e.push(h(`belly`, `body`, [9.6, 0.6, -g, b, y, g])),
    e.push(h(`keel`, `body`, [f.hold.x0, 0.45, -1.4, 8, 0.6, 1.4])),
    e.push(
      h(`cockpit floor`, `floor`, [f.cockpit.x0, y, -_, b, f.cockpit.floor, _]),
    ));
  let r = { x0: 8.6, x1: 9.8, y0: 2.75, y1: 3.35 },
    i = 3.6;
  for (let a of [1, -1]) {
    let [o, s] = n(_, g)(a);
    (a > 0
      ? (e.push(h(`wall`, `body`, [f.hold.x0, y, o, t.x0, i, s])),
        e.push(h(`crew door head`, `body`, [t.x0, t.y1, o, t.x1, i, s])),
        e.push(h(`wall`, `body`, [t.x1, y, o, r.x0, i, s])))
      : e.push(h(`wall`, `body`, [f.hold.x0, y, o, r.x0, i, s])),
      e.push(h(`wall`, `body`, [r.x0, y, o, b, r.y0, s])),
      e.push(h(`window post`, `body`, [r.x1, r.y0, o, b, i, s])),
      e.push(h(`window head`, `body`, [r.x0, r.y1, o, r.x1, i, s])),
      e.push(
        h(`shoulder`, `body`, [
          S,
          i,
          ...n(1.2, 1.55)(a).slice(0, 1),
          x,
          3.95,
          n(1.2, 1.55)(a)[1],
        ]),
      ));
  }
  e.push(h(`crown`, `body`, [S, v, -1.2, x, f.skin.crown, 1.2]));
  for (let [t, n] of [
    [-g, -1.35],
    [-0.5, -0.4],
    [0.4, 0.5],
    [1.35, g],
  ])
    e.push(h(`windscreen post`, `body`, [b, 2.75, t, x, 3.45, n]));
  (e.push(h(`windscreen brow`, `body`, [b, 3.45, -g, x, v, g])),
    e.push(h(`nose`, `body`, [9.7, 0.6, -1.55, 11.2, 2.75, 1.55])),
    e.push(h(`radome`, `radome`, [11.2, 1, -0.95, 12.05, 2.45, 0.95])),
    e.push(h(`nose gear`, `tyre`, [8.62, 0, -0.45, 9.38, 0.85, 0.45])));
  for (let t of [1, -1])
    (e.push(
      h(`main gear`, `tyre`, [
        -1.5,
        0,
        ...n(1.78, 2.23)(t).slice(0, 1),
        1.5,
        1.25,
        n(1.78, 2.23)(t)[1],
      ]),
    ),
      e.push(
        h(`sponson`, `body`, [
          -2.8,
          1.25,
          ...n(g, 2.45)(t).slice(0, 1),
          2.8,
          3,
          n(g, 2.45)(t)[1],
        ]),
      ));
  (e.push(h(`airstair`, `body`, [t.x0, 0.35, g, t.x1, 0.7, 2.1])),
    e.push(h(`airstair`, `body`, [t.x0, 0, 2.1, t.x1, 0.35, 2.45])));
  let a = (e) => f.ramp.hingeX - (y - e) * (p / y);
  for (let [t, n, r] of [
    [0.175, 0.525, 0.35],
    [0.525, 0.875, 0.7],
    [0.875, y, y],
  ])
    e.push(h(`ramp`, `ramp`, [a(t), 0, -_, a(n), r, _]));
  for (let t of [1, -1]) {
    let [r, i] = n(_, g)(t);
    for (let [t, n] of [
      [-10.75, f.hold.x0],
      [S, -10.75],
    ])
      e.push(h(`aft wall`, `body`, [t, ee((t + n) / 2), r, n, 3.6, i]));
  }
  (e.push(h(`tail cone`, `body`, [-15.5, 3.3, -1.3, S, 4.55, 1.3])),
    e.push(h(`tail cone`, `body`, [-17.15, 3.7, -0.7, -15.5, 4.45, 0.7])));
  let o = (e) => -11 - (e - 4.4) * (4.2 / 7.2);
  for (let [t, n] of [
    [4.4, 8],
    [8, 11.6],
  ])
    e.push(h(`fin`, `body`, [-17.15, t, -0.22, o((t + n) / 2), n, 0.22]));
  for (let t of [1, -1]) {
    let [r, i] = n(0.6, 8)(t);
    e.push(h(`tailplane`, `body`, [-17, 4.4, r, -14, 4.72, i]));
  }
  let s = f.wing,
    c = (e, t, n) => t + ((n - t) * (e - s.root)) / (f.span / 2 - s.root);
  (e.push(
    h(`wing root`, `body`, [
      s.rootTE,
      f.skin.crown,
      -s.root,
      s.rootLE,
      s.rootTop,
      s.root,
    ]),
  ),
    e.push(
      h(`fairing`, `body`, [
        s.rootLE,
        f.skin.crown,
        -1.1,
        s.rootLE + 1.5,
        5.3,
        1.1,
      ]),
    ),
    e.push(
      h(`fairing`, `body`, [
        s.rootTE - 1.8,
        f.skin.crown,
        -1.1,
        s.rootTE,
        5.3,
        1.1,
      ]),
    ));
  for (let t of [1, -1])
    for (let [n, r] of [
      [s.root, 7.7],
      [7.7, 14],
      [14, f.span / 2],
    ]) {
      let i = (n + r) / 2,
        [a, o] = t > 0 ? [n, r] : [-r, -n];
      e.push(
        h(`wing`, `body`, [
          c(i, s.rootTE, s.tipTE),
          s.under,
          a,
          c(i, s.rootLE, s.tipLE),
          c(i, s.rootTop, s.tipTop),
          o,
        ]),
      );
    }
  let l = f.nacelle;
  for (let t of f.engines)
    e.push(
      h(`nacelle`, `body`, [l.x0, l.y0, t - l.half, l.x1, l.y1, t + l.half]),
    );
  for (let t of [1, -1])
    e.push(
      h(`bench`, `bench`, [
        -6.6,
        y,
        ...n(1.05, _)(t).slice(0, 1),
        t > 0 ? 2.6 : 3.6,
        1.5,
        n(1.05, _)(t)[1],
      ]),
    );
  return e;
}
var w = () => C();
function T() {
  return [
    [b, 2.75, -1.35, 10.360000000000001, 3.45, -0.5],
    [b, 2.75, -0.4, 10.360000000000001, 3.45, 0.4],
    [b, 2.75, 0.5, 10.360000000000001, 3.45, 1.35],
    [8.6, 2.75, 1.6, 9.8, 3.35, 1.66],
    [8.6, 2.75, -1.66, 9.8, 3.35, -1.6],
  ];
}
var te = () => ({
    x0: f.ramp.hingeX - p,
    y0: 0,
    x1: f.ramp.hingeX,
    y1: f.ramp.hingeY,
    z0: -f.ramp.halfWidth,
    z1: f.ramp.halfWidth,
    angleDeg: m,
  }),
  E = Object.freeze({
    length: 4.6,
    width: 2.3,
    height: 1.9,
    hitch: Object.freeze([-2.4, 0.45, 0]),
    wheelR: 0.45,
    wheelX: 1.45,
  }),
  D = Object.freeze({ length: 5, y: 0.45 }),
  ne = f.towFitting[0] + D.length - E.hitch[0];
function re() {
  let e = [],
    t = E.length / 2,
    n = E.width / 2;
  (e.push(h(`frame`, `tugDark`, [-2.2, 0.22, -0.8, 2.2, 0.5, 0.8])),
    e.push(h(`body`, `tug`, [-2.2, 0.5, -n, 2.2, 0.95, n])),
    e.push(h(`bumper`, `hazard`, [2.2, 0.3, -n, t, 0.7, n])),
    e.push(h(`bumper`, `tugDark`, [-t, 0.3, -n, -2.2, 0.7, n])),
    e.push(h(`hood`, `tug`, [0.35, 0.95, -1.05, 2.15, 1.3, 1.05])),
    e.push(h(`counterweight`, `tug`, [-2.25, 0.95, -n, -1.95, 1.45, n])),
    e.push(h(`seat`, `tugDark`, [-1.65, 0.95, -0.35, -1.05, 1.55, 0.35])),
    e.push(h(`dash`, `tugDark`, [0.05, 0.95, -0.9, 0.35, 1.45, 0.9])),
    e.push(h(`roof`, `tug`, [-2.2, 1.8, -1.12, 0.3, E.height, 1.12])));
  for (let t of [-2.15, 0.17])
    for (let n of [-1.08, 1])
      e.push(h(`roof post`, `tugDark`, [t, 0.95, n, t + 0.08, 1.8, n + 0.08]));
  for (let t of [-E.wheelX, E.wheelX])
    for (let r of [1, -1])
      e.push(
        h(`wheel`, `tyre`, [
          t - 0.45,
          0,
          r > 0 ? 0.82 : -n,
          t + 0.45,
          0.5,
          r > 0 ? n : -0.82,
        ]),
      );
  return (
    e.push(h(`hitch`, `tugDark`, [-2.5, 0.35, -0.12, -t, 0.55, 0.12])),
    e
  );
}
var ie = () => re(),
  O = () => re().map((e) => e.b.slice());
function ae() {
  let e = D.y;
  return [
    h(`head`, `tugDark`, [0, e - 0.13, -0.16, 0.35, e + 0.13, 0.16]),
    h(`tube`, `hazard`, [0.35, e - 0.06, -0.06, 4.6, e + 0.06, 0.06]),
    h(`lunette`, `tugDark`, [4.6, e - 0.05, -0.17, D.length, e + 0.05, 0.17]),
    h(`wheels`, `tyre`, [0.8, 0, -0.42, 1.2, 0.36, 0.42]),
  ];
}
var oe = () => ae(),
  se = () => ae().map((e) => e.b.slice()),
  ce = Object.freeze({
    width: 8,
    height: 14,
    thick: 0.4,
    opening: 48,
    panels: 6,
    skirt: 0.06,
    personnel: Object.freeze({ z0: -2.9, z1: -1.8, top: 2.3, sill: 0.1 }),
  });
function le({ personnelDoor: e = !1, leafOpen: t = !0 } = {}) {
  let n = ce.thick / 2,
    r = ce.width / 2,
    i = ce.height,
    a = ce.skirt,
    o = ce.personnel;
  return e
    ? [
        h(`panel`, `door`, [-n, a, -r, n, i, o.z0]),
        h(`panel`, `door`, [-n, a, o.z1, n, i, r]),
        h(`panel`, `door`, [-n, o.top, o.z0, n, i, o.z1]),
        h(`sill`, `doorFrame`, [-n, a, o.z0, n, o.sill, o.z1]),
        t
          ? h(`door leaf`, `doorLeaf`, [
              -n - 1.06,
              o.sill,
              o.z0,
              -n,
              o.top - 0.04,
              o.z0 + 0.05,
            ])
          : h(`door leaf`, `doorLeaf`, [
              -0.03,
              o.sill,
              o.z0 + 0.02,
              0.03,
              o.top - 0.04,
              o.z1 - 0.02,
            ]),
      ]
    : [h(`panel`, `door`, [-n, a, -r, n, i, r])];
}
var ue = (e) => le(e),
  k = (e) => le(e).map((e) => e.b.slice()),
  de = Object.freeze({
    key: `p51d`,
    name: `P-51D Mustang`,
    length: 9.83,
    span: 11.28,
    nose: 3.15,
    tail: -6.68,
    axleY: -1.5,
    mainR: 0.34,
    mainZ: 1.83,
    tailWheel: Object.freeze({ x: -5.6, y: -0.55, r: 0.15 }),
    prop: Object.freeze({ x: 2.85, radius: 1.7, blades: 4 }),
    finTop: Object.freeze([-6.2, 1.62]),
  }),
  fe = Object.freeze({
    key: `f4u`,
    name: `F4U Corsair`,
    length: 10.2,
    span: 12.5,
    nose: 3.6,
    tail: -6.6,
    axleY: -1.43,
    mainR: 0.41,
    mainZ: 2.4,
    tailWheel: Object.freeze({ x: -5.55, y: -0.62, r: 0.17 }),
    prop: Object.freeze({ x: 3.42, radius: 2.04, blades: 4 }),
    finTop: Object.freeze([-6.1, 1.78]),
  });
function pe(e) {
  let t = e.tailWheel,
    n = t.x,
    r = t.y - e.axleY,
    i = t.r - e.mainR,
    a = 0,
    o = 0.5;
  for (let e = 0; e < 50; e++) {
    let e = (a + o) / 2;
    n * Math.sin(e) + r * Math.cos(e) > i ? (a = e) : (o = e);
  }
  let s = (a + o) / 2,
    c = Math.cos(s),
    l = Math.sin(s),
    u = ([t, n, r = 0]) => [
      t * c - (n - e.axleY) * l,
      t * l + (n - e.axleY) * c + e.mainR,
      r,
    ];
  return {
    pitch: s,
    toGround: u,
    hub: u([e.prop.x, 0]),
    propTop: u([e.prop.x, 0])[1] + e.prop.radius,
    finTop: u(e.finTop)[1],
  };
}
var me = Object.freeze({ length: 9, width: 2.5, height: 3.2 });
Object.freeze({ length: 4.6, width: 1.9, height: 2.21 });
