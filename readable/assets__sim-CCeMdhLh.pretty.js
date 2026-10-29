/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  Jn as e,
  Kn as t,
  er as n,
  qn as r,
} from "./graphics-quality-CrL3qbU3.js";
import { d as i, f as a, t as o } from "./map-collider-0Gc3D4Vs.js";
function s(e, t) {
  let n = e.motion;
  if (!n) return e.bottom[1];
  let r = Math.max(0, Math.min(1, (t - n.start) / n.duration)),
    i = r * r * (3 - 2 * r);
  return n.from + (n.to - n.from) * i;
}
function c(e, t) {
  let n = e.motion;
  return n
    ? t < n.start
      ? Math.max(0, Math.min(1, (n.start - t - 15) / 30))
      : Math.max(0, Math.min(1, (t - n.start - n.duration) / 30))
    : 1;
}
function l(e, t) {
  if (!t || t.hp <= 0 || (t.seat >= 0 && t.state & 128)) return !1;
  let n = e.time.tick;
  for (let r of e.map.lifts ?? []) {
    let e = r.bottom;
    if (Math.abs(t.pos[0] - e[0]) > 6 || Math.abs(t.pos[2] - e[2]) > 3)
      continue;
    let i =
      Math.abs(t.pos[1] - e[1]) < 2
        ? e[1]
        : Math.abs(t.pos[1] - r.top[1]) < 2
          ? r.top[1]
          : null;
    if (i == null) continue;
    let a = r.motion;
    if (a && n < a.start + a.duration + 60) return !0;
    let o = s(r, n),
      c = Math.abs(t.pos[0] - e[0]) < 1.25 && Math.abs(t.pos[2] - e[2]) < 1.25,
      l = Math.abs(o - i) > 0.1 ? i : c ? (i === e[1] ? r.top[1] : e[1]) : i;
    return (
      Math.abs(l - o) < 0.1 ||
        (r.motion = {
          from: o,
          to: l,
          start: n + 180,
          duration: Math.ceil((Math.abs(l - o) / 8) * 90),
        }),
      !0
    );
  }
  return !1;
}
function u(e, t = [], n = () => e.time.tick) {
  ((e.map.lifts = t), (e.map.liftClock = n));
  let r = [];
  for (let i of t) {
    let [t, , a] = i.bottom,
      l = [
        t - 1.6,
        Math.min(i.bottom[1], i.top[1]) - 0.23,
        a - 3.01,
        t + 1.6,
        Math.max(i.bottom[1], i.top[1]) + 2.91,
        a + 3.01,
      ];
    for (let [t, a] of [
      [`deck`, [-1.5, -0.22, -1.5, 1.5, 0, 1.5]],
      [`ceiling`, [-1.5, 2.7, -1.5, 1.5, 2.9, 1.5]],
      [`north`, [-1.5, 0, -1.5, 1.5, 2.7, -1.39]],
      [`south`, [-1.5, 0, 1.39, 1.5, 2.7, 1.5]],
    ]) {
      let c = t === `deck` ? `platform-${i.id}` : `platform-${i.id}-${t}`,
        u = () => {
          let e = s(i, n()),
            [t, , r] = i.bottom;
          return a.map((n, i) => n + [t, e, r][i % 3]);
        },
        d = {
          id: c,
          mask: `static`,
          solid: !0,
          surface: `metal`,
          rayIndexBounds: l,
          movementIndexBounds: l,
          get aabb() {
            return u();
          },
          raycast(e, t, n) {
            return o({ id: c, aabb: u(), surface: `metal` }).raycast(e, t, n);
          },
        };
      (e.map.addCollider(d), r.push(c));
    }
    for (let t of [-1, 1])
      for (let a of [-1, 1]) {
        let u = `platform-${i.id}-door-${t}-${a}`,
          d = () => {
            let e = n(),
              r = s(i, e),
              [o, , l] = i.bottom,
              u = a * (0.75 + c(i, e) * 1.5);
            return [
              o + t * 1.44 - 0.06,
              r,
              l + u - 0.75,
              o + t * 1.44 + 0.06,
              r + 2.65,
              l + u + 0.75,
            ];
          };
        (e.map.addCollider({
          id: u,
          mask: `static`,
          solid: !0,
          surface: `metal`,
          rayIndexBounds: l,
          movementIndexBounds: l,
          get aabb() {
            return d();
          },
          raycast(e, t, n) {
            return o({ id: u, aabb: d() }).raycast(e, t, n);
          },
        }),
          r.push(u));
      }
  }
  return () => {
    for (let t of r) e.map.removeCollider(t);
    (delete e.map.lifts, delete e.map.liftClock);
  };
}
function d(e, t) {
  if (!(
    !e.ext.pl?.grounded ||
    e.vel[1] > 0.01 ||
    e.ext.pl.liftTick === t.time.tick
  ))
    for (let n of t.map.lifts ?? []) {
      let [r, , i] = n.bottom;
      if (
        Math.abs(e.pos[0] - r) > n.width / 2 ||
        Math.abs(e.pos[2] - i) > n.depth / 2
      )
        continue;
      let a = t.map.liftClock?.() ?? t.time.tick,
        o = s(n, a - 1),
        c = s(n, a);
      if (!(Math.abs(e.pos[1] - o) > 0.075)) {
        ((e.pos[1] += c - o), (e.ext.pl.liftTick = t.time.tick));
        return;
      }
    }
}
var f = Object.freeze({
    length: 29.8,
    span: 40.4,
    tailTop: 11.6,
    nose: 12.5,
    tail: -17.3,
    floor: 1.05,
    hold: Object.freeze({ x0: -8, x1: 4.5, halfWidth: 1.5, ceiling: 3.75 }),
    cockpit: Object.freeze({ x0: 4.5, x1: 9.7, floor: 1.4 }),
    skin: Object.freeze({ halfWidth: 1.75, belly: 0.45, crown: 4.55 }),
    wing: Object.freeze({
      under: 5.5,
      rootTop: 6.25,
      tipTop: 5.85,
      rootLE: 3.2,
      rootTE: -1.7,
      tipLE: 2,
      tipTE: -0.5,
      root: 1.4,
    }),
    engines: Object.freeze([-9.9, -5, 5, 9.9]),
    nacelle: Object.freeze({ x0: -0.6, x1: 6, y0: 4.75, y1: 6.1, half: 0.6 }),
    prop: Object.freeze({ x: 6.15, y: 5.43, radius: 2.05, blades: 4 }),
    towFitting: Object.freeze([9, 0.4, 0]),
    crewDoor: Object.freeze({ x0: 2.9, x1: 3.8, y0: 1.05, y1: 2.95, side: 1 }),
    ramp: Object.freeze({
      hingeX: -8,
      hingeY: 1.05,
      length: 3,
      halfWidth: 1.5,
    }),
  }),
  p = Math.sqrt(f.ramp.length ** 2 - f.ramp.hingeY ** 2),
  m = (Math.asin(f.ramp.hingeY / f.ramp.length) * 180) / Math.PI,
  h = (e, t, n) => ({ part: e, m: t, b: n }),
  g = f.skin.halfWidth,
  _ = f.hold.halfWidth,
  v = f.hold.ceiling,
  y = f.floor,
  b = 10.3,
  x = 10.42,
  S = -13.5,
  C = (e) => y + (f.hold.x0 - e) * ((3.3 - y) / (f.hold.x0 - S));
function w() {
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
      e.push(h(`aft wall`, `body`, [t, C((t + n) / 2), r, n, 3.6, i]));
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
var T = () => w();
function E() {
  return [
    [b, 2.75, -1.35, 10.360000000000001, 3.45, -0.5],
    [b, 2.75, -0.4, 10.360000000000001, 3.45, 0.4],
    [b, 2.75, 0.5, 10.360000000000001, 3.45, 1.35],
    [8.6, 2.75, 1.6, 9.8, 3.35, 1.66],
    [8.6, 2.75, -1.66, 9.8, 3.35, -1.6],
  ];
}
var ee = () => ({
    x0: f.ramp.hingeX - p,
    y0: 0,
    x1: f.ramp.hingeX,
    y1: f.ramp.hingeY,
    z0: -f.ramp.halfWidth,
    z1: f.ramp.halfWidth,
    angleDeg: m,
  }),
  D = Object.freeze({
    length: 4.6,
    width: 2.3,
    height: 1.9,
    hitch: Object.freeze([-2.4, 0.45, 0]),
    wheelR: 0.45,
    wheelX: 1.45,
  }),
  O = Object.freeze({ length: 5, y: 0.45 }),
  te = f.towFitting[0] + O.length - D.hitch[0];
function ne() {
  let e = [],
    t = D.length / 2,
    n = D.width / 2;
  (e.push(h(`frame`, `tugDark`, [-2.2, 0.22, -0.8, 2.2, 0.5, 0.8])),
    e.push(h(`body`, `tug`, [-2.2, 0.5, -n, 2.2, 0.95, n])),
    e.push(h(`bumper`, `hazard`, [2.2, 0.3, -n, t, 0.7, n])),
    e.push(h(`bumper`, `tugDark`, [-t, 0.3, -n, -2.2, 0.7, n])),
    e.push(h(`hood`, `tug`, [0.35, 0.95, -1.05, 2.15, 1.3, 1.05])),
    e.push(h(`counterweight`, `tug`, [-2.25, 0.95, -n, -1.95, 1.45, n])),
    e.push(h(`seat`, `tugDark`, [-1.65, 0.95, -0.35, -1.05, 1.55, 0.35])),
    e.push(h(`dash`, `tugDark`, [0.05, 0.95, -0.9, 0.35, 1.45, 0.9])),
    e.push(h(`roof`, `tug`, [-2.2, 1.8, -1.12, 0.3, D.height, 1.12])));
  for (let t of [-2.15, 0.17])
    for (let n of [-1.08, 1])
      e.push(h(`roof post`, `tugDark`, [t, 0.95, n, t + 0.08, 1.8, n + 0.08]));
  for (let t of [-D.wheelX, D.wheelX])
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
var re = () => ne(),
  ie = () => ne().map((e) => e.b.slice());
function k() {
  let e = O.y;
  return [
    h(`head`, `tugDark`, [0, e - 0.13, -0.16, 0.35, e + 0.13, 0.16]),
    h(`tube`, `hazard`, [0.35, e - 0.06, -0.06, 4.6, e + 0.06, 0.06]),
    h(`lunette`, `tugDark`, [4.6, e - 0.05, -0.17, O.length, e + 0.05, 0.17]),
    h(`wheels`, `tyre`, [0.8, 0, -0.42, 1.2, 0.36, 0.42]),
  ];
}
var ae = () => k(),
  oe = () => k().map((e) => e.b.slice()),
  A = Object.freeze({
    width: 8,
    height: 14,
    thick: 0.4,
    opening: 48,
    panels: 6,
    skirt: 0.06,
    personnel: Object.freeze({ z0: -2.9, z1: -1.8, top: 2.3, sill: 0.1 }),
  });
function se({ personnelDoor: e = !1, leafOpen: t = !0 } = {}) {
  let n = A.thick / 2,
    r = A.width / 2,
    i = A.height,
    a = A.skirt,
    o = A.personnel;
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
var ce = (e) => se(e),
  le = (e) => se(e).map((e) => e.b.slice()),
  j = Object.freeze({
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
  ue = Object.freeze({
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
function de(e) {
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
var fe = Object.freeze({ length: 9, width: 2.5, height: 3.2 });
Object.freeze({ length: 4.6, width: 1.9, height: 2.21 });
var pe = Object.freeze({ height: 1.8, hip: 0.86, shoulder: 1.38 }),
  me = Object.freeze({
    length: 48.5,
    span: 56.4,
    finTop: 12.4,
    nose: 21.5,
    tail: -27,
    gearBase: 15.48,
    wing: Object.freeze({
      root: 1.4,
      rootLE: 6,
      rootChord: 10.5,
      tipChord: 3.4,
      rootY: 4.9,
      outrigger: 21.5,
      outY: 2.9,
      tipY: 2.4,
      pods: Object.freeze([9.3, 17.8]),
    }),
  }),
  he = Object.freeze({
    length: 30.2,
    fuselage: 15.9,
    nose: 8,
    tail: -7.9,
    gearBase: 6.86,
    rotorR: 9.14,
    droop: 0.8,
    foreHub: Object.freeze([5.6, 5]),
    aftHub: Object.freeze([-6.34, 5.7]),
  }),
  M = Object.freeze({ length: 7, width: 2.3, height: 3.5 }),
  ge = Object.freeze({ length: 11, width: 3, height: 3.6 }),
  _e = Object.freeze({ length: 15.27, height: 5.13, rotorDiameter: 16.36 }),
  ve = 10462888,
  ye = Object.freeze({
    length: 29.98,
    span: 31.39,
    height: 7.8,
    nose: 11.8,
    tail: -16.1,
  }),
  be = Object.freeze({
    length: 4.93,
    width: 2.3,
    height: 1.86,
    wheelX: 1.65,
    track: 1.82,
    wheelR: 0.43,
  }),
  xe = ee(),
  Se = f.floor,
  Ce = f.hold.halfWidth,
  we = f.skin.halfWidth,
  Te = f.crewDoor,
  N = Object.freeze({
    length: f.length,
    span: f.span,
    tailTop: f.tailTop,
    nose: f.nose,
    tail: f.tail,
    floor: Se,
    hold: Object.freeze({
      x0: f.hold.x0,
      x1: f.hold.x1,
      hw: Ce,
      h: f.hold.ceiling - Se,
    }),
    rampFoot: xe.x0,
    cockpit: Object.freeze({
      x0: f.cockpit.x0,
      x1: 10.3,
      floor: f.cockpit.floor,
    }),
    crewDoor: Object.freeze({
      x0: Te.x0,
      x1: Te.x1,
      top: Te.y1,
      stepOut: 2.45,
    }),
    wingY: f.wing.under,
    towFitting: f.towFitting[0],
  }),
  Ee = Object.freeze({
    length: D.length,
    width: D.width,
    height: D.height,
    hitch: D.hitch[0],
    towBar: O.length,
    offset: te,
  }),
  De = Object.freeze({ w: A.width, h: A.height, t: A.thick }),
  Oe = new Set([`keel`, `cockpit floor`, `ramp`, `airstair`]),
  ke = (e) => Oe.has(e.part) || (e.part === `belly` && e.b[0] === f.hold.x0),
  Ae = () =>
    T()
      .filter((e) => !ke(e))
      .map((e) => e.b.slice());
function je() {
  return [
    {
      id: `hold-floor`,
      box: [f.hold.x0, 0.45, -we, 8.4, Se, we],
      h: () => Se,
      thickness: Se - 0.45,
    },
    {
      id: `cockpit-floor`,
      box: [f.cockpit.x0, Se, -Ce, 10.3, f.cockpit.floor, Ce],
      h: () => f.cockpit.floor,
      thickness: f.cockpit.floor - Se,
    },
    {
      id: `ramp`,
      box: [xe.x0, 0, xe.z0, xe.x1, xe.y1, xe.z1],
      h: (e) => xe.y1 * Math.max(0, Math.min(1, (e - xe.x0) / (xe.x1 - xe.x0))),
      thickness: 0.2,
    },
    {
      id: `crew-steps`,
      box: [Te.x0, 0, Ce, Te.x1, Se, 2.45],
      h: (e, t) => (t < we ? Se : t < 2.1 ? 0.7 : 0.35),
      thickness: 0.35,
    },
  ];
}
var Me = () =>
    E().map((e, t) => ({ id: `plane-glass-${t}`, box: e, index: t })),
  Ne = f.towFitting[0] - te,
  Pe = () => [
    ...ie(),
    ...oe().map((e) => [e[0] + Ne, e[1], e[2], e[3] + Ne, e[4], e[5]]),
  ],
  Fe = () => le({ personnelDoor: !1 }),
  Ie = 60,
  P = Object.freeze({
    bg: 1.3,
    northRunwayZ: -184,
    southRunwayZ: 177,
    southTaxiZ: 122,
    northTaxiZ: -140,
    rowTaxiZ: -237,
    taxiHalf: 15,
    crossX: Object.freeze([-360, -111, 160, 510]),
    southLinks: Object.freeze([-600, -111, 300, 600]),
    rowLinks: Object.freeze([-200, 200]),
    outLink: 200,
    inLink: -200,
    outCross: 160,
    inCross: -111,
    depX: 300,
    exitX: -111,
    doorZ: -272,
    spotZ: -281,
    holdNorth: -225,
    turnIn: 6.5 * 1.3,
  }),
  Le = -Math.PI / 2,
  Re = (e, t) => [-t, e],
  ze = ([e, t, n, r, i, a]) => [-a, t, e, -n, i, r],
  Be = ([e, t, n, r]) => [-r, e, -t, n],
  Ve = ([e, t, n]) => [n, t, -e],
  He = ([e, t, n]) => [-n, t, e];
function Ue(e) {
  let t = { ...e };
  (delete t.aabb,
    e.rayIndexBounds && (t.rayIndexBounds = ze(e.rayIndexBounds)));
  let n = Object.getOwnPropertyDescriptor(e, `aabb`);
  return (
    n && !n.get
      ? (t.aabb = ze(e.aabb))
      : Object.defineProperty(t, "aabb", {
          enumerable: !0,
          get() {
            return ze(e.aabb);
          },
        }),
    e.raycast &&
      (t.raycast = (t, n, r, ...i) => {
        let a = e.raycast(Ve(t), Ve(n), r, ...i);
        return (
          a && {
            ...a,
            point: t.map((e, t) => e + n[t] * a.dist),
            ...(a.normal ? { normal: He(a.normal) } : {}),
          }
        );
      }),
    t
  );
}
var We = (e) => ({
    ...e,
    map: {
      addCollider: (t) => e.map.addCollider(Ue(t)),
      removeCollider: (t) => e.map.removeCollider(t),
    },
  }),
  Ge = { p51: j, corsair: ue },
  Ke = { p51: de(j).pitch, corsair: de(ue).pitch },
  F = Object.freeze({
    taxi: 9,
    turnR: 9,
    lineUp: 6,
    hold: 5,
    roll: 14,
    vr: 48,
    climb: 22,
    hidden: 28,
    approach: 20,
    vApp: 46,
    touchX: 430,
    rollout: 20,
    vExit: 8,
    cycle: 420,
    stagger: 70,
    first: 20,
    climbH: 170,
    appH: 75,
    departX: -1500,
    appX: 1500,
    pitchUp: (9 * Math.PI) / 180,
  });
function qe(e, t) {
  let n = [e[0]];
  for (let r = 1; r < e.length - 1; r++) {
    let [i, a, o] = [e[r - 1], e[r], e[r + 1]],
      s = [a[0] - i[0], a[1] - i[1]],
      c = [o[0] - a[0], o[1] - a[1]],
      l = Math.hypot(...s),
      u = Math.hypot(...c);
    if (l < 1e-6 || u < 1e-6) continue;
    let d = [s[0] / l, s[1] / l],
      f = [c[0] / u, c[1] / u],
      p = Math.max(-1, Math.min(1, d[0] * f[0] + d[1] * f[1])),
      m = Math.acos(p);
    if (m < 0.001) {
      n.push(a);
      continue;
    }
    let h = Math.min(t * Math.tan(m / 2), l / 2, u / 2),
      g = [a[0] - d[0] * h, a[1] - d[1] * h],
      _ = [a[0] + f[0] * h, a[1] + f[1] * h];
    n.push(g);
    for (let e = 1; e < 12; e++) {
      let t = e / 12,
        r = 1 - t;
      n.push([
        r * r * g[0] + 2 * r * t * a[0] + t * t * _[0],
        r * r * g[1] + 2 * r * t * a[1] + t * t * _[1],
      ]);
    }
    n.push(_);
  }
  return (n.push(e[e.length - 1]), n);
}
function Je(e) {
  let t = [e[0]],
    n = [0];
  for (let r = 1; r < e.length; r++) {
    let i = t[t.length - 1],
      a = e[r],
      o = Math.hypot(a[0] - i[0], a[1] - i[1]);
    if (o < 1e-4) continue;
    let s = Math.max(1, Math.ceil(o / 0.5));
    for (let e = 1; e <= s; e++) {
      let r = e / s,
        o = [i[0] + (a[0] - i[0]) * r, i[1] + (a[1] - i[1]) * r];
      (n.push(
        n[n.length - 1] +
          Math.hypot(o[0] - t[t.length - 1][0], o[1] - t[t.length - 1][1]),
      ),
        t.push(o));
    }
  }
  let r = n[n.length - 1];
  return {
    length: r,
    at: (e) => {
      e = Math.max(0, Math.min(r, e));
      let i = 0,
        a = n.length - 1;
      for (; a - i > 1;) {
        let t = (i + a) >> 1;
        n[t] < e ? (i = t) : (a = t);
      }
      let o = n[a] > n[i] ? (e - n[i]) / (n[a] - n[i]) : 0,
        s = t[i],
        c = t[a],
        l = Math.max(0, i - 2),
        u = Math.min(t.length - 1, a + 2);
      return {
        x: s[0] + (c[0] - s[0]) * o,
        z: s[1] + (c[1] - s[1]) * o,
        yaw: Math.atan2(-(t[u][1] - t[l][1]), t[u][0] - t[l][0]),
      };
    },
  };
}
var Ye = (e, t, n, r, i, a = 24) =>
  Array.from({ length: a + 1 }, (o, s) => {
    let c = r + ((i - r) * s) / a;
    return [e + n * Math.cos(c), t + n * Math.sin(c)];
  });
function Xe(e) {
  let t = P,
    n = F.turnR,
    r = t.southRunwayZ;
  return e.map((e) => {
    let [i, a] = e.spot,
      o = e.side,
      s = Je(
        qe(
          [
            [i, a],
            [i, t.rowTaxiZ],
            [t.outLink, t.rowTaxiZ],
            [t.outLink, t.northTaxiZ],
            [t.outCross, t.northTaxiZ],
            [t.outCross, t.southTaxiZ],
            [t.depX, t.southTaxiZ],
            [t.depX, r - 10],
            [t.depX - 12, r],
          ],
          n,
        ),
      ),
      c =
        Math.abs(a - t.rowTaxiZ) +
        Math.abs(t.outLink - i) +
        Math.abs(t.holdNorth - t.rowTaxiZ) -
        n,
      l = i + o * 2 * t.turnIn,
      u = t.spotZ - 4,
      d = qe(
        [
          [t.exitX + 10, r],
          [t.exitX, r - 10],
          [t.exitX, t.northTaxiZ],
          [t.inLink, t.northTaxiZ],
          [t.inLink, t.rowTaxiZ],
          [l, t.rowTaxiZ],
          [l, u],
        ],
        n,
      ),
      f = (l + i) / 2,
      p =
        o > 0
          ? Ye(f, u, t.turnIn, 0, -Math.PI)
          : Ye(f, u, t.turnIn, Math.PI, 2 * Math.PI);
    return {
      out: s,
      back: Je([...d, ...p.slice(1), [i, a]]),
      holdAt: c,
      type: e.type,
    };
  });
}
var Ze = (e) => (e <= 0 ? 0 : e >= 1 ? 1 : e * e * (3 - 2 * e)),
  Qe = (e, t, n) => n * Ze(e / t);
function $e(e) {
  let t = (e) => Math.max(6, (e / F.taxi) * 1.15);
  return [
    [`taxiA`, t(e.holdAt)],
    [`holdN`, F.hold],
    [`taxiB`, t(e.out.length - e.holdAt)],
    [`lineUp`, F.lineUp],
    [`roll`, F.roll],
    [`climb`, F.climb],
    [`hidden`, F.hidden],
    [`approach`, F.approach],
    [`rollout`, F.rollout],
    [`taxiBack`, t(e.back.length)],
  ];
}
var et = new WeakMap();
function tt(e) {
  let t = et.get(e.fighters);
  return (
    t ||
    ((t = Xe(e.fighters ?? []).map((e, t) => {
      let n = $e(e),
        r = 0;
      return {
        rt: e,
        starts: n.map(([e, t]) => {
          let n = [e, r, t];
          return ((r += t), n);
        }),
        busy: r,
        offset: F.first + t * F.stagger,
      };
    })),
    et.set(e.fighters, t),
    t)
  );
}
var nt = new WeakMap(),
  rt = Object.freeze([`back`, `door`, `apron`]),
  it = (e) => {
    let t = (e | 0) ^ 2654435769;
    return (
      (t = Math.imul(t ^ (t >>> 16), 73244475)),
      (t = Math.imul(t ^ (t >>> 16), 73244475)),
      (t ^ (t >>> 16)) >>> 0
    );
  };
function at(e, t) {
  return e.epoch == null || !e.jets?.[t]
    ? `back`
    : rt[it(e.epoch * 31 + t * 7 + 11) % 3];
}
function ot(e, t) {
  let n = e.jets[t],
    r = at(e, t),
    i = P.doorZ;
  return {
    mode: r,
    paint: n.paint,
    yaw: -Math.PI / 2,
    ...(r === `door`
      ? { x: n.cx, z: i - 1 - 11.8 * P.bg }
      : r === `apron`
        ? { x: n.apron[0], z: n.apron[1] }
        : { x: n.cx, z: i - 41 }),
  };
}
function st(e, t, n) {
  let r = nt.get(e);
  r || nt.set(e, (r = new Map()));
  let i = t * 1e9 + n,
    a = r.get(i);
  if (a && a.epoch === e.epoch) return a.p;
  r.size > 64 && r.clear();
  let o = ct(e, t, n);
  return (r.set(i, { epoch: e.epoch, p: o }), o);
}
function ct(e, t, n) {
  let r = tt(e)[t],
    i = e.fighters[t],
    a = Ke[i.type],
    [o, s] = i.spot,
    c = {
      phase: `parked`,
      x: o,
      y: e.y,
      z: s,
      yaw: -Math.PI / 2,
      attitude: 0,
      visible: !0,
      prop: 0,
      moving: !1,
    };
  if (i.hangar != null && at(e, i.hangar) === `door`)
    return ((c.visible = !1), c);
  if (e.epoch == null || n < e.epoch) return c;
  let l = (n - e.epoch) / Ie - r.offset;
  if (l < 0) return c;
  let u = l % F.cycle,
    d = null,
    f = 0,
    p = 0;
  for (let [e, t, n] of r.starts)
    if (u >= t && u < t + n) {
      ((d = e), (f = u - t), (p = n));
      break;
    }
  if (!d) return c;
  ((c.phase = d), (c.t = f), (c.moving = !0), (c.prop = l * 45));
  let m = P.southRunwayZ,
    h = (e) => {
      ((c.x = e.x), (c.z = e.z), (c.yaw = e.yaw));
    },
    g = r.rt;
  switch (d) {
    case `taxiA`:
      h(g.out.at(Qe(f, p, g.holdAt)));
      break;
    case `holdN`:
      h(g.out.at(g.holdAt));
      break;
    case `taxiB`:
      h(g.out.at(g.holdAt + Qe(f, p, g.out.length - g.holdAt)));
      break;
    case `lineUp`: {
      let e = g.out.at(g.out.length);
      ((c.x = e.x), (c.z = e.z), (c.yaw = Math.PI));
      break;
    }
    case `roll`: {
      ((c.x =
        g.out.at(g.out.length).x - 0.5 * (700 / (F.roll * F.roll)) * f * f),
        (c.z = m),
        (c.yaw = Math.PI));
      let e = f / F.roll;
      ((c.attitude =
        a * Ze(e / 0.65) -
        (e > 0.85 ? F.pitchUp * Ze((e - 0.85) / 0.15) * 0.6 : 0)),
        e > 0.88 && (c.y += 8 * (e - 0.88) ** 2 * F.roll));
      break;
    }
    case `climb`: {
      ((c.x = g.out.at(g.out.length).x - 350 - 50 * f - 1.2 * f * f),
        (c.z = m),
        (c.yaw = Math.PI));
      let e = F.climbH * Ze(f / F.climb) + 0.12 * F.roll;
      ((c.y += e), (c.attitude = a - F.pitchUp));
      break;
    }
    case `hidden`:
      ((c.visible = !1), (c.x = F.departX), (c.z = m), (c.y += F.climbH));
      break;
    case `approach`: {
      let e = f / F.approach;
      ((c.x = F.appX + (F.touchX - F.appX) * e),
        (c.z = m),
        (c.yaw = Math.PI),
        (c.y += F.appH * (1 - e) * (1 - e)),
        (c.attitude = a - (3 * Math.PI) / 180));
      break;
    }
    case `rollout`: {
      let e = F.touchX - (P.exitX + 10),
        t = f / F.rollout,
        n = e * (1 - (1 - t) * (1 - t));
      ((c.x = F.touchX - n),
        (c.z = m),
        (c.yaw = Math.PI),
        (c.attitude = a * (1 - Ze((t - 0.25) / 0.5))));
      break;
    }
    case `taxiBack`:
      (h(g.back.at(Qe(f, p, g.back.length))),
        f > p - 1.5 && (c.prop = (l * 45 * (p - f)) / 1.5));
  }
  return (d === `taxiBack` && f > p - 0.01 && (c.moving = !1), c);
}
function lt(e) {
  let t = e.tail,
    n = e.nose,
    r = e.span / 2;
  return [
    [t, -0.5, -0.5, n, 0.55, 0.5],
    [-1.3, e.axleY + 0.75, -r, 1.2, e.axleY + 1.05, r],
    [t, 0, -2.3, t + 1.5, 0.18, 2.3],
    [t, 0, -0.12, t + 1.3, e.finTop[1], 0.12],
  ].map((e) => e.map((e) => e * P.bg));
}
var ut = { p51: lt(j), corsair: lt(ue) };
function dt(e, t, n, r) {
  let i = 0,
    a = r,
    o = -1,
    s = 0;
  for (let r = 0; r < 3; r++) {
    if (Math.abs(n[r]) < 1e-9) {
      if (t[r] < e[r] || t[r] > e[r + 3]) return null;
      continue;
    }
    let c = (e[r] - t[r]) / n[r],
      l = (e[r + 3] - t[r]) / n[r],
      u = -1;
    if (c > l) {
      let e = c;
      ((c = l), (l = e), (u = 1));
    }
    if ((c > i && ((i = c), (o = r), (s = u)), l < a && (a = l), i > a))
      return null;
  }
  return o < 0 ? null : { t: i, ax: o, sg: s };
}
function ft(e, t, n, r) {
  let i = Ge[e.type],
    a = Ke[e.type] - t.attitude,
    o = Math.cos(t.yaw),
    s = Math.sin(t.yaw),
    c = Math.cos(a),
    l = Math.sin(a),
    u = n[0] - (r ? 0 : t.x),
    d = n[1] - (r ? 0 : t.y + i.mainR * P.bg),
    f = n[2] - (r ? 0 : t.z),
    p = o * u - s * f,
    m = s * u + o * f;
  return (
    (u = p),
    (f = m),
    [c * u + l * d, -l * u + c * d + (r ? 0 : i.axleY * P.bg), f]
  );
}
function pt(e, t, n, r, i, a) {
  return mt(e.fighters[t].type, st(e, t, n), r, i, a);
}
function mt(e, t, n, r, i) {
  let a = { type: e };
  if (!t.visible || Math.hypot(n[0] - t.x, n[2] - t.z) > i + 12) return null;
  let o = ft(a, t, n, !1),
    s = ft(a, t, r, !0),
    c = null;
  for (let e of ut[a.type]) {
    let t = dt(e, o, s, c?.dist ?? i);
    t && (!c || t.t < c.dist) && (c = { dist: t.t });
  }
  return c
    ? {
        dist: c.dist,
        point: n.map((e, t) => e + r[t] * c.dist),
        normal: [0, 1, 0],
        surface: `metal`,
        pen: `metal`,
      }
    : null;
}
function ht(e, t, n) {
  if (!t?.fighters?.length) return () => {};
  let r = [];
  return (
    t.fighters.forEach((i, a) => {
      let o = `hangar-fighter-${a}`;
      (e.map.addCollider({
        id: o,
        mask: `static`,
        solid: !1,
        rayIndexBounds: [-1700, 0, -400, 1700, 320, 420],
        get aabb() {
          let e = st(t, a, n());
          return [e.x - 8, e.y - 1, e.z - 8, e.x + 8, e.y + 6, e.z + 8];
        },
        raycast(e, r, i) {
          return pt(t, a, n(), e, r, i);
        },
      }),
        r.push(o));
    }),
    () => {
      for (let t of r) e.map.removeCollider(t);
    }
  );
}
var gt = Math.PI * 2,
  _t = 60,
  vt = (e) => Math.max(0, Math.min(1, e)),
  yt = (e) => {
    let t = vt(e);
    return t * t * (3 - 2 * t);
  },
  I = Object.freeze({
    hz: _t,
    surfaceY: 12.12,
    runwayZ: -184,
    taxiZ: -140,
    scale: 1.3,
    westX: -620,
    eastX: 620,
    departureX: 510,
    touchdownX: 390,
    exitX: -360,
    standX: 360,
    standZ: -94,
    turnRadius: 22,
    approachX: 2340,
    approachHeight: 125,
    fenceZ: -108,
    playX: Object.freeze([-51, 51]),
    aircraftRadius: 28,
    smokeSeconds: 4,
  }),
  L = Object.freeze({
    taxiOut: 32,
    lineUp: 8,
    takeoff: 27,
    climb: 20,
    hidden: 15,
    approach: 30,
    touchdown: 3,
    rollout: 21,
    turnOff: 16,
    taxiBack: 67,
    parked: 12,
  }),
  bt = Object.entries(L),
  xt = bt.reduce((e, [, t]) => e + t, 0),
  St = Object.freeze(
    Object.fromEntries(
      bt.map(([e], t) => [e, bt.slice(0, t).reduce((e, [, t]) => e + t, 0)]),
    ),
  );
function Ct(e, t, n, r, i, a) {
  let o = vt(e / t),
    s = o * o,
    c = s * o;
  return (
    (2 * c - 3 * s + 1) * n +
    (c - 2 * s + o) * t * i +
    (-2 * c + 3 * s) * r +
    (c - s) * t * a
  );
}
function wt(e, t, n, r) {
  let i = n - e,
    a = r - t;
  return {
    length: Math.hypot(i, a),
    at: (n) => ({ x: e + i * n, z: t + a * n, dx: i, dz: a }),
  };
}
function Tt(e, t, n, r, i = 1) {
  return {
    length: Math.PI * n,
    at: (a) => {
      let o = r + i * Math.PI * a;
      return {
        x: e + n * Math.cos(o),
        z: t + n * Math.sin(o),
        dx: -i * Math.sin(o),
        dz: i * Math.cos(o),
      };
    },
  };
}
function Et(e, t, n, r) {
  let i = (i) => {
      let a = 1 - i;
      return {
        x:
          a ** 3 * e[0] +
          3 * a * a * i * t[0] +
          3 * a * i * i * n[0] +
          i ** 3 * r[0],
        z:
          a ** 3 * e[1] +
          3 * a * a * i * t[1] +
          3 * a * i * i * n[1] +
          i ** 3 * r[1],
        dx:
          3 * a * a * (t[0] - e[0]) +
          6 * a * i * (n[0] - t[0]) +
          3 * i * i * (r[0] - n[0]),
        dz:
          3 * a * a * (t[1] - e[1]) +
          6 * a * i * (n[1] - t[1]) +
          3 * i * i * (r[1] - n[1]),
      };
    },
    a = [0],
    o = i(0);
  for (let e = 1; e <= 256; e++) {
    let t = i(e / 256);
    (a.push(a[e - 1] + Math.hypot(t.x - o.x, t.z - o.z)), (o = t));
  }
  let s = a[256];
  return {
    length: s,
    at: (e) => {
      let t = vt(e) * s,
        n = 0,
        r = 256;
      for (; r - n > 1;) {
        let e = (n + r) >> 1;
        a[e] < t ? (n = e) : (r = e);
      }
      return i((n + (t - a[n]) / (a[r] - a[n])) / 256);
    },
  };
}
var R = I,
  Dt = [
    Et([R.standX, R.standZ], [390, R.standZ], [390, R.taxiZ], [420, R.taxiZ]),
    wt(420, R.taxiZ, R.departureX, R.taxiZ),
    Tt(R.departureX, (R.runwayZ + R.taxiZ) / 2, R.turnRadius, Math.PI / 2, -1),
  ],
  Ot = [Tt(R.exitX, (R.runwayZ + R.taxiZ) / 2, R.turnRadius, -Math.PI / 2, -1)],
  kt = [
    wt(R.exitX, R.taxiZ, 320, R.taxiZ),
    Et([320, R.taxiZ], [340, R.taxiZ], [340, R.standZ], [R.standX, R.standZ]),
  ],
  At = (e) => e.reduce((e, t) => e + t.length, 0),
  jt = At(Dt),
  Mt = At(Ot),
  Nt = At(kt);
function Pt(e, t, n) {
  let r = Math.max(0, n),
    i = t[t.length - 1];
  for (let e of t) {
    if (((i = e), r <= e.length || e === t[t.length - 1])) break;
    r -= e.length;
  }
  let a = i.at(vt(r / i.length));
  ((e.x = a.x),
    (e.z = a.z),
    (e.yaw = Math.atan2(-a.dz, a.dx)),
    e.yaw < 0 && (e.yaw += gt));
}
var Ft = R.departureX - R.westX,
  It = (2 * Ft) / L.takeoff,
  Lt = L.takeoff * Math.sqrt((R.departureX - 100) / Ft),
  Rt = 55,
  zt = 8,
  Bt = (95 - It) / L.climb,
  Vt = Math.atan2(zt, It),
  Ht = (3.5 * Math.PI) / 180,
  Ut = L.touchdown + L.rollout,
  Wt = 58,
  Gt = 4.5,
  Kt = 8;
function qt(e, t = 0) {
  let n = {
    phase: `parked`,
    scale: R.scale,
    x: R.standX,
    y: R.surfaceY,
    z: R.standZ,
    yaw: 0,
    pitch: 0,
    visible: !0,
    gear: 1,
    propAngle: 0,
    smokeAge: -1,
    cycle: -1,
  };
  if (!Number.isFinite(e) || !Number.isFinite(t) || e < t) return n;
  let r = (e - t) / _t;
  n.cycle = Math.floor(r / xt);
  let i = r - n.cycle * xt;
  for (let [e, t] of bt) {
    if (i < t) {
      n.phase = e;
      break;
    }
    i -= t;
  }
  switch (((n.propAngle = ((r * 17) % 1) * gt), n.phase)) {
    case `taxiOut`:
      Pt(n, Dt, jt * yt(i / L.taxiOut));
      break;
    case `lineUp`:
      ((n.x = R.departureX), (n.z = R.runwayZ), (n.yaw = Math.PI));
      break;
    case `takeoff`:
      ((n.x = R.departureX - Ft * (i / L.takeoff) ** 2),
        (n.z = R.runwayZ),
        (n.yaw = Math.PI),
        (n.pitch = Vt * yt((i - Lt + 2.5) / 5.5)),
        i > Lt && (n.y += Ct(i - Lt, L.takeoff - Lt, 0, Rt, 0, zt)));
      break;
    case `climb`:
    case `hidden`: {
      let e = n.phase === `hidden` ? L.climb : i;
      ((n.x = R.westX - It * e - 0.5 * Bt * e ** 2),
        (n.z = R.runwayZ),
        (n.y += Rt + zt * e + 0.05 * e ** 2),
        (n.yaw = Math.PI),
        (n.pitch = Math.atan2(zt + 0.1 * e, It + Bt * e)),
        (n.gear = 1 - yt((e - 2) / 3)),
        (n.visible = n.phase !== `hidden`));
      break;
    }
    case `approach`:
      ((n.x = Ct(i, L.approach, R.approachX, R.touchdownX, -72, -58)),
        (n.z = R.runwayZ),
        (n.y += Ct(i, L.approach, R.approachHeight, 0, -5.2, 0)),
        (n.yaw = Math.PI),
        (n.pitch = ((3 + 0.5 * yt(i / L.approach)) * Math.PI) / 180),
        (n.gear = yt((i - 18) / 3)));
      break;
    case `touchdown`:
    case `rollout`: {
      let e = i + (n.phase === `rollout` ? L.touchdown : 0);
      ((n.x = R.touchdownX - Wt * e + (26.75 / Ut) * e ** 2),
        (n.z = R.runwayZ),
        (n.yaw = Math.PI),
        (n.pitch = Ht * (1 - yt(e / L.touchdown))),
        (n.smokeAge = e <= R.smokeSeconds ? e : -1));
      break;
    }
    case `turnOff`:
      Pt(n, Ot, Ct(i, L.turnOff, 0, Mt, Gt, Kt));
      break;
    case `taxiBack`:
      Pt(n, kt, Ct(i, L.taxiBack, 0, Nt, Kt, 0));
  }
  return n;
}
var z = {
  skin: 9608344,
  dark: 5399392,
  wing: 10923946,
  navy: 2506064,
  white: 14145995,
  glass: 2373697,
  black: 2106658,
  metal: 6582379,
  yellow: 13806917,
};
function Jt() {
  let e = [],
    t = [],
    n = [],
    r = (r, i, a, o, s = 6) => {
      (e.push(...r, ...i, ...a), t.push(o, o, o), n.push(s | 128));
    },
    i = (e, t, n, i, a, o) => {
      (r(e, t, n, a, o), r(e, n, i, a, o));
    },
    a = (e, t, n, i = 6) => {
      let a = e.length,
        o = [0, 0, 0];
      for (let n of [...e, ...t])
        for (let e = 0; e < 3; e++) o[e] += n[e] / (2 * a);
      let s = (e, t, a) => {
        let s = t.map((t, n) => t - e[n]),
          c = a.map((t, n) => t - e[n]),
          l =
            [
              s[1] * c[2] - s[2] * c[1],
              s[2] * c[0] - s[0] * c[2],
              s[0] * c[1] - s[1] * c[0],
            ].reduce((t, n, r) => t + n * (e[r] - o[r]), 0) >= 0;
        r(e, l ? t : a, l ? a : t, n, i);
      };
      for (let n = 0; n < a; n++) {
        let r = (n + 1) % a;
        (s(e[n], e[r], t[r]), s(e[n], t[r], t[n]));
      }
      for (let n = 1; n < a - 1; n++)
        (s(e[0], e[n], e[n + 1]), s(t[0], t[n], t[n + 1]));
    };
  return {
    tri: r,
    quad: i,
    loft: a,
    box: (e, t, n = 6) => {
      let [r, i, o, s, c, l] = e;
      a(
        [
          [r, i, o],
          [s, i, o],
          [s, c, o],
          [r, c, o],
        ],
        [
          [r, i, l],
          [s, i, l],
          [s, c, l],
          [r, c, l],
        ],
        t,
        n,
      );
    },
    cyl: (e, t, n, r, i, o, s, c = 10) => {
      let l = [-1, 1].map((a) =>
        Array.from({ length: c }, (s, l) => {
          let u = (l * 2 * Math.PI) / c,
            d = Math.cos(u) * r,
            f = Math.sin(u) * r;
          return o === `x`
            ? [e + (a * i) / 2, t + d, n + f]
            : [e + d, t + f, n + (a * i) / 2];
        }),
      );
      a(...l, s);
    },
    finish: () => ({
      positions: new Float32Array(e),
      colours: t,
      mats: new Uint8Array(n),
    }),
  };
}
var Yt = (e, t, n, r) => [
  [e, n, t * 0.65],
  [e, n + 0.4, t],
  [e, r - 0.6, t],
  [e, r, t * 0.65],
  [e, r, -t * 0.65],
  [e, r - 0.6, -t],
  [e, n + 0.4, -t],
  [e, n, -t * 0.65],
];
function Xt() {
  let e = Jt(),
    t = Jt(),
    n = Jt(),
    r = [
      [-17.3, 0.28, 3.4, 4.4],
      [-13.5, 1.15, 2.1, 4.55],
      [-8, 1.75, 0.6, 4.55],
      [7.8, 1.75, 0.6, 4.55],
      [10.5, 1.35, 1.05, 3.8],
      [12.5, 0.18, 1.75, 2.25],
    ];
  for (let t = 1; t < r.length; t++)
    e.loft(Yt(...r[t - 1]), Yt(...r[t]), t === r.length - 1 ? z.dark : z.skin);
  for (let t of [-1, 1])
    (e.loft(
      [
        [3.2, 5.5, t * 1.4],
        [-1.7, 5.5, t * 1.4],
        [-1.7, 6.05, t * 1.4],
        [2.6, 6.25, t * 1.4],
      ],
      [
        [2, 5.5, t * 20.2],
        [-0.5, 5.5, t * 20.2],
        [-0.5, 5.75, t * 20.2],
        [1.8, 5.85, t * 20.2],
      ],
      z.wing,
    ),
      e.loft(
        [
          [-13, 4.4, t * 0.3],
          [-17, 4.4, t * 0.3],
          [-17, 4.7, t * 0.3],
          [-13, 4.7, t * 0.3],
        ],
        [
          [-15, 4.5, t * 8],
          [-17, 4.5, t * 8],
          [-17, 4.67, t * 8],
          [-15, 4.67, t * 8],
        ],
        z.wing,
      ),
      e.quad(
        [8.1, 2.65, t * 1.77],
        [9.8, 2.65, t * 1.51],
        [9.8, 3.32, t * 1.51],
        [8.1, 3.55, t * 1.77],
        z.glass,
        5,
      ),
      e.box(
        [-8, 0.9, t > 0 ? 1.6 : -2.3, 2.5, 3.1, t > 0 ? 2.3 : -1.6],
        z.dark,
      ),
      e.box(
        [-16.4, 8.6, t * 0.24 - 0.008, -14.6, 9.15, t * 0.24 + 0.008],
        z.white,
      ),
      e.box(
        [-15.7, 9.45, t * 0.24 - 0.009, -15.05, 10.7, t * 0.24 + 0.009],
        z.white,
      ));
  (e.loft(
    [
      [-11, 4.45, -0.22],
      [-15.2, 11.6, -0.22],
      [-17.3, 11.6, -0.22],
      [-17, 4.45, -0.22],
    ],
    [
      [-11, 4.45, 0.22],
      [-15.2, 11.6, 0.22],
      [-17.3, 11.6, 0.22],
      [-17, 4.45, 0.22],
    ],
    z.navy,
  ),
    e.box([-2, 4.3, -1.4, 2.8, 5.65, 1.4], z.skin));
  for (let t of f.engines)
    (e.cyl(2.7, 5.43, t, 0.67, 6.6, `x`, z.dark),
      e.cyl(6.02, 5.43, t, 0.33, 0.55, `x`, z.skin));
  for (let e of [-0.8, 0.8])
    for (let n of [-2.05, 2.05])
      (t.cyl(e, 0.55, n, 0.55, 0.48, `z`, z.black, 12),
        t.cyl(e, 0.55, n, 0.25, 0.5, `z`, z.metal));
  for (let e of [-0.26, 0.26]) t.cyl(9, 0.36, e, 0.36, 0.22, `z`, z.black);
  for (let e of [-2.05, 2.05])
    t.box([-0.12, 0.55, e - 0.07, 0.12, 1.6, e + 0.07], z.metal);
  (t.box([8.92, 0.36, -0.07, 9.08, 1.35, 0.07], z.metal),
    n.cyl(0, 0, 0, 0.3, 0.4, `x`, z.skin));
  for (let e = 0; e < 4; e++) {
    let t = (e * Math.PI) / 2,
      r = Math.cos(t),
      i = Math.sin(t),
      a = (e, t) => [
        [-0.055, e * r - t * i, e * i + t * r],
        [-0.055, e * r + t * i, e * i - t * r],
        [0.055, e * r + t * i, e * i - t * r],
        [0.055, e * r - t * i, e * i + t * r],
      ];
    (n.loft(a(0.27, 0.13), a(1.83, 0.19), z.black),
      n.loft(a(1.83, 0.19), a(2.05, 0.15), z.yellow));
  }
  return { body: e.finish(), gear: t.finish(), prop: n.finish() };
}
function Zt(e) {
  let t = Jt(),
    n = Jt(),
    r = Jt(),
    i = (n, r, i, a, o, s = e.surfaceY) => t.box([n, 12, r, i, s, a], o, 0),
    a = e.runwayZ,
    o = e.taxiZ,
    s = o + 15,
    c = a - 34;
  (i(-700, a - 34, 700, a + 34, 6580579, e.surfaceY - 0.06),
    i(-660, a - 23, 660, a + 23, 3423034),
    i(-430, o - 15, 550, s, 5002064),
    i(322, s, 410, e.standZ + 28, 6910314),
    i(467, a + 23, 553, s, 5002064),
    i(-403, a + 23, -317, s, 5002064));
  let l = (t, r, i, a, o = 14539974) =>
    n.box([t, e.surfaceY + 0.018, r, i, e.surfaceY + 0.019, a], o, 0);
  for (let e of [a - 21.5, a + 21.5]) l(-650, e - 0.12, 650, e + 0.12);
  for (let e = -610; e < 620; e += 40) l(e, a - 0.35, e + 20, a + 0.35);
  for (let e of [-613, 573])
    for (let t = a - 18; t < a + 18; t += 4.4) l(e, t, e + 22, t + 2.2);
  for (let e of [-440, 405])
    for (let t of [a - 12, a + 11]) l(e, t, e + 28, t + 3);
  (l(-350, o - 0.13, 510, o + 0.13, 12954708),
    l(509.87, a, 510.13, o, 12954708),
    l(-360.13, a, -359.87, o, 12954708),
    l(359.87, o, 360.13, e.standZ, 12954708),
    l(53.87, o, 54.13, s - 2, 12954708));
  for (let e of [-200, 200]) l(e - 0.13, c - 4, e + 0.13, a - 23, 12954708);
  for (let [e, t] of [
    [467, 553],
    [-403, -317],
  ])
    for (let n of [0, 1.2]) l(e, a + 34.4 + n, t, a + 34.7 + n, 12954708);
  let u = {
      0: [0, 1, 2, 3, 4, 5],
      1: [1, 2],
      2: [0, 1, 6, 4, 3],
      3: [0, 1, 2, 3, 6],
      6: [0, 2, 3, 4, 5, 6],
      7: [0, 1, 2],
      8: [0, 1, 2, 3, 4, 5, 6],
      9: [0, 1, 2, 3, 5, 6],
    },
    d = [
      [0, 0, 1, 5],
      [0, 4, 6, 5],
      [6, 4, 12, 5],
      [11, 0, 12, 5],
      [6, 0, 12, 1],
      [0, 0, 6, 1],
      [5.5, 0, 6.5, 5],
    ];
  for (let [e, t] of [
    [535, [3, 6]],
    [-550, [1, 8]],
  ])
    for (let n = 0; n < 2; n++)
      for (let r of u[t[n]]) {
        let [t, i, o, s] = d[r];
        l(e + t, a - 7 + n * 9 + i, e + o, a - 7 + n * 9 + s);
      }
  for (let t = -650; t <= 650; t += 50)
    for (let n of [a - 23, a + 23])
      r.box(
        [
          t - 0.3,
          e.surfaceY + 0.025,
          n - 0.3,
          t + 0.3,
          e.surfaceY + 0.055,
          n + 0.3,
        ],
        16769955,
      );
  for (let t = 680; t <= 940; t += 40)
    for (let n of [a - 5, a, a + 5])
      r.box(
        [
          t - 0.35,
          e.surfaceY + 0.025,
          n - 0.35,
          t + 0.35,
          e.surfaceY + 0.055,
          n + 0.35,
        ],
        16772545,
      );
  return { pavement: t.finish(), paint: n.finish(), lights: r.finish() };
}
function Qt(e, t, n, r = 0, i = !1) {
  let [a, o, s] = e,
    c = Math.cos(t),
    l = Math.sin(t),
    u = Math.cos(n),
    d = Math.sin(n),
    f = Math.cos(r),
    p = Math.sin(r);
  return (
    i
      ? (([a, s] = [c * a - l * s, l * a + c * s]),
        ([a, o] = [u * a + d * o, -d * a + u * o]),
        ([o, s] = [f * o + p * s, -p * o + f * s]))
      : (([o, s] = [f * o - p * s, p * o + f * s]),
        ([a, o] = [u * a - d * o, d * a + u * o]),
        ([a, s] = [c * a + l * s, -l * a + c * s])),
    [a, o, s]
  );
}
function $t(e) {
  return [
    { part: `body`, offset: [0, 0, 0], spin: 0 },
    { part: `gear`, offset: [0, (1 - e.gear) * 1.8, 0], spin: 0 },
    ...f.engines.map((t, n) => ({
      part: `prop`,
      offset: [f.prop.x, f.prop.y, t],
      spin: e.propAngle + n * 0.4,
    })),
  ];
}
var en;
function tn() {
  if (!en) {
    let e = Xt(),
      t = Zt(I);
    en = {};
    for (let [n, r] of Object.entries({ ...e, ...t })) {
      let e = i(r.positions, r.mats);
      for (let t = 0; t < e.nodes.length; t += 8)
        for (let n = 0; n < 3; n++)
          ((e.nodes[t + n] -= 2e-4), (e.nodes[t + n + 3] += 2e-4));
      en[n] = e;
    }
  }
  return en;
}
function nn(e, t, n, r) {
  if (!e.visible) return null;
  let i = tn(),
    o = [e.x, e.y, e.z],
    s = e.scale ?? 1,
    c = Qt(
      t.map((e, t) => (e - o[t]) / s),
      e.yaw,
      e.pitch,
      0,
      !0,
    ),
    l = Qt(n, e.yaw, e.pitch, 0, !0),
    u = null;
  for (let o of $t(e)) {
    let d = Qt(
        c.map((e, t) => e - o.offset[t]),
        0,
        0,
        o.spin,
        !0,
      ),
      f = Qt(l, 0, 0, o.spin, !0),
      p = a(i[o.part], ...d, ...f, 0, (u?.dist ?? r) / s);
    if (p) {
      let i = p.dist * s;
      if (i > r) continue;
      u = {
        dist: i,
        point: t.map((e, t) => e + n[t] * i),
        normal: Qt(p.normal, e.yaw, e.pitch, o.spin),
        surface: p.mat === 5 ? `glass` : `metal`,
        pen: p.mat === 5 ? `glass` : `metal`,
        exact: !0,
        part: o.part,
      };
    }
  }
  return u;
}
function rn(e, t, n) {
  let r = null;
  for (let i of [`pavement`, `lights`]) {
    let o = a(tn()[i], ...e, ...t, 0, r?.dist ?? n);
    o &&
      (r = {
        ...o,
        point: e.map((e, n) => e + t[n] * o.dist),
        surface: `concrete`,
        pen: `concrete`,
        exact: !0,
      });
  }
  return r;
}
function an(e, t, n) {
  tn();
  let r = null,
    i = null,
    a = () => {
      let e = n();
      return (
        (e !== r || i?.epoch !== t.epoch) &&
          ((r = e), (i = { ...qt(e, t.epoch), epoch: t.epoch })),
        i
      );
    },
    o = {
      id: `hangar-runway-aircraft`,
      mask: `static`,
      solid: !1,
      rayIndexBounds: [-2600, 0, -300, 2600, 900, 10],
      get aabb() {
        let e = a(),
          t = I.aircraftRadius + 1;
        return [e.x - t, e.y - t, e.z - t, e.x + t, e.y + t, e.z + t];
      },
      raycast(e, t, n) {
        return nn(a(), e, t, n);
      },
    },
    s = {
      id: `hangar-runway-pavement`,
      mask: `static`,
      solid: !1,
      aabb: [-710, 10, -300, 950, 13, 0],
      raycast: rn,
    };
  return (
    e.map.addCollider(o),
    e.map.addCollider(s),
    () => {
      (e.map.removeCollider(o.id), e.map.removeCollider(s.id));
    }
  );
}
var on = (e, t, n) => {
    let r = t.map((t, n) => t - e[n]),
      i = n.map((t, n) => t - e[n]);
    return [
      r[1] * i[2] - r[2] * i[1],
      r[2] * i[0] - r[0] * i[2],
      r[0] * i[1] - r[1] * i[0],
    ];
  },
  sn = (e, t, n) => {
    let r = on(e, t, n),
      i = 1 / (Math.sqrt(r[0] * r[0] + r[1] * r[1] + r[2] * r[2]) || 1);
    return r.map((e) => e * i);
  };
Object.freeze({ length: 75.3, span: 67.89, height: 19.84 });
var cn = Object.freeze([
    {
      key: `a`,
      name: `A · Bold facets`,
      note: `Broad planes, blunt nose, simplest engine detail`,
      sides: 12,
      engine: 10,
      wheel: 8,
      nose: 1.035,
    },
    {
      key: `b`,
      name: `B · Reference balance`,
      note: `Closer nose profile, rounded shoulders, recessed fans`,
      sides: 20,
      engine: 14,
      wheel: 10,
      nose: 1,
    },
    {
      key: `c`,
      name: `C · Refined low-poly`,
      note: `Finer nose facets, fuller fairings, more engine definition`,
      sides: 24,
      engine: 18,
      wheel: 12,
      nose: 0.985,
    },
  ]),
  ln = {
    skin: 8753045,
    belly: 7437185,
    wing: 9345182,
    edge: 10923956,
    glass: 1320754,
    seam: 5792618,
    tyre: 2106666,
    hub: 6779771,
    strut: 10463660,
    intake: 1383715,
    fan: 3753293,
    exhaust: 4608346,
    mark: 3753550,
  };
function un(e = `b`) {
  let t = cn.find((t) => t.key === e) ?? cn[1],
    n = [],
    r = (e, t, r = `skin`) => n.push({ name: e, vertices: t, material: r }),
    i = (e, t, n, r) => e.push(...t, ...n, ...r),
    a = (e, t, n, r, a) => {
      (i(e, t, n, r), i(e, t, r, a));
    },
    o = (e, n, r, i, a = 0, o = t.sides) =>
      Array.from({ length: o }, (t, s) => {
        let c = (s * Math.PI * 2) / o;
        return [e, n + r * Math.cos(c), a + i * Math.sin(c)];
      });
  function s(e, t, n = `skin`, o = !0) {
    let s = [],
      c = t[0].length,
      l = (e) =>
        e.reduce((t, n) => t.map((t, r) => t + n[r] / e.length), [0, 0, 0]),
      u = t.map(l),
      d = (e, t, n, r) => on(e, t, n).reduce((e, t, n) => e + t * r[n], 0) >= 0;
    for (let e = 0; e < t.length - 1; e++)
      for (let n = 0; n < c; n++) {
        let r = (n + 1) % c,
          i = t[e],
          o = t[e + 1],
          f = l([i[n], i[r], o[r], o[n]]).map(
            (t, n) => t - (u[e][n] + u[e + 1][n]) / 2,
          );
        d(i[n], i[r], o[r], f)
          ? a(s, i[n], i[r], o[r], o[n])
          : a(s, i[n], o[n], o[r], i[r]);
      }
    if (o)
      for (let e of [0, t.length - 1]) {
        let n = t[e],
          r = u[e],
          a = u[e ? e - 1 : 1],
          o = r.map((e, t) => e - a[t]);
        for (let e = 0; e < c; e++)
          d(r, n[e], n[(e + 1) % c], o)
            ? i(s, r, n[e], n[(e + 1) % c])
            : i(s, r, n[(e + 1) % c], n[e]);
      }
    return (r(e, s, n), s);
  }
  function c(e, t, n, r, i, a, o, c = `skin`) {
    let l = (e) => [
      [e, n - a / 2, r - o / 2],
      [e, n + a / 2, r - o / 2],
      [e, n + a / 2, r + o / 2],
      [e, n - a / 2, r + o / 2],
    ];
    s(e, [l(t - i / 2), l(t + i / 2)], c);
  }
  let l = [
    [-37.65, 0.055, 5.72, 5.86],
    [-35, 0.75, 5.05, 6.52],
    [-31, 1.85, 3.87, 7.64],
    [-26, 2.9, 2.38, 8.52],
    [-21, 3.42, 1.82, 8.9],
    [-13, 3.63, 1.63, 9.14],
    [-3, 3.66, 1.61, 9.2],
    [8, 3.66, 1.64, 9.23],
    [19, 3.63, 1.72, 9.23],
    [24, 3.57, 1.83, 9.21],
    [27, 3.49, 2, 9.12],
    [28.7, 3.36, 2.12, 8.94],
    [30.1, 3.17, 2.24, 8.56],
    [31.3, 2.96, 2.36, 7.95],
    [32.8, 2.65, 2.55, 7.39],
    [34.2, 2.2, 2.88, 6.91],
    [35.55, 1.58, 3.3, 6.37],
    [36.65, 0.87, 3.88, 5.89],
    [37.35, 0.34, 4.36, 5.37],
    [37.65, 0.035, 4.79, 4.93],
  ].map(([e, n, r, i]) => [e, n * (e > 28 ? t.nose : 1), r, i]);
  t.key === `a` && l.splice(11, 1);
  let u = l.map(([e, t, n, r]) => o(e, (n + r) / 2, (r - n) / 2, t));
  s(`cargo-fuselage`, u);
  function d(e, t, n) {
    let a = [];
    for (let e = 1; e < t.length - 1; e++) i(a, t[0], t[e], t[e + 1]);
    r(e, a, n);
  }
  function f(e, n, a, o) {
    let s = [],
      c = (e, t, n) =>
        (t[0] - e[0]) * (n[1] - e[1]) - (t[1] - e[1]) * (n[0] - e[0]),
      d = (e, t, n, r) => {
        let i = [];
        for (let a = 0; a < e.length; a++) {
          let o = e[a],
            s = e[(a + 1) % e.length],
            l = c(t, n, o) * r,
            u = c(t, n, s) * r;
          if ((l >= -1e-9 && i.push(o), l < 0 != u < 0)) {
            let e = l / (l - u);
            i.push(o.map((t, n) => t + (s[n] - t) * e));
          }
        }
        return i;
      };
    for (let e = 0; e < l.length - 1; e++)
      for (let r = 0; r < t.sides / 2; r++) {
        let o = [
            [l[e][0], (r * Math.PI * 2) / t.sides],
            [l[e][0], ((r + 1) * Math.PI * 2) / t.sides],
            [l[e + 1][0], ((r + 1) * Math.PI * 2) / t.sides],
            [l[e + 1][0], (r * Math.PI * 2) / t.sides],
          ],
          f = [u[e][r], u[e][r + 1], u[e + 1][r + 1], u[e + 1][r]];
        for (let e of [
          [0, 1, 2],
          [0, 2, 3],
        ]) {
          let t = e.map((e) => o[e]),
            r = e.map((e) => f[e]),
            l = c(t[0], t[1], t[2]),
            u = n;
          for (let e = 0; e < 3 && u.length >= 3; e++)
            u = d(u, t[e], t[(e + 1) % 3], Math.sign(l));
          if (u.length < 3) continue;
          let p = sn(...r),
            m = u.map((e) => {
              let n = [
                  c(t[1], t[2], e) / l,
                  c(t[2], t[0], e) / l,
                  c(t[0], t[1], e) / l,
                ],
                i = [0, 1, 2].map(
                  (e) =>
                    r.reduce((t, r, i) => t + r[e] * n[i], 0) + p[e] * 0.025,
                );
              return ((i[2] *= a), i);
            });
          for (let e = 1; e < m.length - 1; e++) i(s, m[0], m[e], m[e + 1]);
        }
      }
    r(e, s, o);
  }
  for (let e of [-1, 1]) {
    for (let [t, n, r, i, a] of [
      [`front-in`, 30.05, 31.33, 0.025, 0.2],
      [`front-out`, 30, 31.24, 0.235, 0.43],
      [`side-in`, 28.85, 29.84, 0.4, 0.63],
      [`side-out`, 27.85, 28.68, 0.46, 0.67],
    ])
      f(
        `cockpit-${t}-${e}`,
        [
          [n, i],
          [r, i + 0.035],
          [r, a],
          [n, a],
        ],
        e,
        `glass`,
      );
    for (let n = 0; n < t.sides / 2; n++) {
      let r = 0.12 + (n * Math.PI * 0.84) / (t.sides / 2),
        i = 0.12 + ((n + 1) * Math.PI * 0.84) / (t.sides / 2);
      f(
        `nose-door-seam-${e}-${n}`,
        [
          [28.12, r],
          [28.16, r],
          [28.16, i],
          [28.12, i],
        ],
        e,
        `seam`,
      );
    }
    for (let [t, n, r, i] of [
      [22, 22.04, 1.04, 1.54],
      [23.18, 23.22, 1.04, 1.54],
      [22, 23.22, 1.04, 1.051],
      [22, 23.22, 1.529, 1.54],
    ])
      f(
        `crew-door-${e}-${t}-${r}`,
        [
          [t, r],
          [n, r],
          [n, i],
          [t, i],
        ],
        e,
        `seam`,
      );
    for (let t of [-17, -13, -9])
      f(
        `upper-deck-window-${e}-${t}`,
        Array.from({ length: 8 }, (e, n) => [
          t + 0.14 * Math.cos((n * Math.PI) / 4),
          1.28 + 0.04 * Math.sin((n * Math.PI) / 4),
        ]),
        e,
        `glass`,
      );
  }
  let p = [
    [2.35, 9.65, -4.2, 8.78, 1.06],
    [9.5, 6.18, -6.6, 8.48, 0.79],
    [20.4, -0.24, -9.4, 7.65, 0.46],
    [33.945, -8.1, -10.7, 6.6, 0.14],
  ];
  function m(e, t, n, r = `wing`) {
    s(
      e,
      t.map(([e, t, r, i, a]) => [
        [t, i, n * e],
        [t - 0.1 * (t - r), i + a * 0.47, n * e],
        [r + 0.24 * (t - r), i + a * 0.24, n * e],
        [r, i, n * e],
        [r + 0.24 * (t - r), i - a * 0.25, n * e],
        [t - 0.1 * (t - r), i - a * 0.36, n * e],
      ]),
      r,
    );
  }
  for (let e of [-1, 1]) {
    m(`wing-${e}`, p, e);
    for (let t = 0; t < 2; t++) {
      let n = p[t + 1],
        r = p[t + 2];
      d(
        `flap-line-${e}-${t}`,
        [
          [n[2] + 1, n[3] + n[4] * 0.2, e * n[0]],
          [r[2] + 0.4, r[3] + r[4] * 0.2, e * r[0]],
          [r[2] + 0.47, r[3] + r[4] * 0.23, e * r[0]],
          [n[2] + 1.07, n[3] + n[4] * 0.23, e * n[0]],
        ],
        `seam`,
      );
    }
    (s(
      `gear-sponson-${e}`,
      [
        [-21, 0.13, 2.6],
        [-17, 0.69, 2.35],
        [-9, 0.94, 2.25],
        [1.5, 0.96, 2.3],
        [9, 0.68, 2.63],
        [13, 0.1, 3.05],
      ].map(([n, r, i]) =>
        o(n, i, r * 0.97, r, e * 3.05, t.key === `a` ? 8 : 12),
      ),
      `belly`,
    ),
      s(
        `wing-fairing-${e}`,
        [
          [-10, 0.08, 7.72],
          [-4, 0.54, 8.2],
          [5, 0.67, 8.34],
          [11, 0.27, 7.89],
          [14, 0.04, 7.55],
        ].map(([t, n, r]) => o(t, r, n * 0.8, n, e * 2.72, 8)),
      ));
    for (let [n, r, i, a, c] of [
      [`inner`, 10.3, 5.2, 5.94, 8.48],
      [`outer`, 21.35, -1.5, 5.31, 7.58],
    ]) {
      let l = r * e,
        u = t.engine;
      if (
        (s(
          `engine-${n}-${e}`,
          [
            [-4.45, 0.77],
            [-3.45, 1.13],
            [-1.8, 1.42],
            [0.95, 1.6],
            [2.05, 1.58],
            [2.43, 1.43],
          ].map(([e, t]) => o(i + e, a, t, t, l, u)),
          `skin`,
          !1,
        ),
        s(
          `intake-lip-${n}-${e}`,
          [o(i + 2.43, a, 1.43, 1.43, l, u), o(i + 2.47, a, 1.28, 1.28, l, u)],
          `edge`,
          !1,
        ),
        s(
          `intake-throat-${n}-${e}`,
          [o(i + 1.45, a, 1.11, 1.11, l, u), o(i + 2.47, a, 1.28, 1.28, l, u)],
          `intake`,
          !1,
        ),
        s(
          `fan-disc-${n}-${e}`,
          [o(i + 1.4, a, 1.12, 1.12, l, u), o(i + 1.42, a, 1.12, 1.12, l, u)],
          `intake`,
        ),
        t.key !== `a`)
      )
        for (let t = 0; t < u; t++) {
          let r = (t * Math.PI * 2) / u,
            o = r + 0.2;
          d(
            `fan-blade-${n}-${e}-${t}`,
            [
              [i + 1.46, a + 0.27 * Math.cos(r), l + 0.27 * Math.sin(r)],
              [
                i + 1.46,
                a + 1.09 * Math.cos(r + 0.26),
                l + 1.09 * Math.sin(r + 0.26),
              ],
              [
                i + 1.46,
                a + 1.09 * Math.cos(o + 0.26),
                l + 1.09 * Math.sin(o + 0.26),
              ],
              [i + 1.46, a + 0.27 * Math.cos(o), l + 0.27 * Math.sin(o)],
            ],
            `fan`,
          );
        }
      (s(
        `fan-hub-${n}-${e}`,
        [o(i + 1.43, a, 0.3, 0.3, l, u), o(i + 1.82, a, 0.07, 0.07, l, u)],
        `fan`,
      ),
        s(
          `exhaust-${n}-${e}`,
          [o(i - 4.82, a, 0.68, 0.68, l, u), o(i - 3.6, a, 0.86, 0.86, l, u)],
          `exhaust`,
        ));
      let f = [
          [i - 2.3, a + 1.06],
          [i + 1.3, a + 1.36],
          [i - 0.4, c + 0.12],
          [i - 3.7, c - 0.16],
        ],
        p = [-0.19, 0.19].map((e) => f.map(([t, n]) => [t, n, l + e]));
      s(`pylon-${n}-${e}`, p, `belly`);
    }
  }
  let h = [
    [-20.3, 7.5],
    [-28.9, 19.48],
    [-35.6, 19.48],
    [-33.15, 5.96],
  ];
  s(
    `vertical-tail`,
    [-0.34, 0.34].map((e) => h.map(([t, n]) => [t, n, e])),
  );
  for (let e of [-1, 1])
    (m(
      `tailplane-${e}`,
      [
        [0.18, -27.7, -35.65, 19.55, 0.58],
        [10.47, -33.5, -37, 19.64, 0.25],
      ],
      e,
    ),
      d(
        `rudder-seam-${e}`,
        [
          [-34.4, 19.1, e * 0.349],
          [-34.46, 19.1, e * 0.349],
          [-31.4, 7.1, e * 0.349],
          [-31.34, 7.1, e * 0.349],
        ],
        `seam`,
      ),
      d(
        `tail-band-${e}`,
        [
          [-28.15, 16.3, e * 0.35],
          [-34.72, 16.3, e * 0.35],
          [-34.6, 15.96, e * 0.35],
          [-27.9, 15.96, e * 0.35],
        ],
        `mark`,
      ));
  function g(e, n, a, o, c) {
    let l = [],
      u = t.wheel;
    s(
      e,
      [a - c / 2, a + c / 2].map((e) =>
        Array.from({ length: u }, (t, r) => [
          n + o * Math.sin((r * Math.PI * 2) / u),
          o + o * Math.cos((r * Math.PI * 2) / u),
          e,
        ]),
      ),
      `tyre`,
    );
    for (let e of [-1, 1]) {
      let t = a + e * (c / 2 + 0.006),
        r = [n, o, t],
        s = o * 0.4;
      for (let e = 0; e < u; e++)
        i(
          l,
          r,
          [
            n + s * Math.sin((e * Math.PI * 2) / u),
            o + s * Math.cos((e * Math.PI * 2) / u),
            t,
          ],
          [
            n + s * Math.sin(((e + 1) * Math.PI * 2) / u),
            o + s * Math.cos(((e + 1) * Math.PI * 2) / u),
            t,
          ],
        );
    }
    r(`${e}-hub`, l, `hub`);
  }
  for (let e of [27.25, 28.22])
    for (let t of [-0.57, 0.57]) g(`nose-wheel-${e}-${t}`, e, t, 0.5, 0.32);
  (c(`nose-strut`, 27.73, 1.26, 0, 0.25, 1.8, 0.28, `strut`),
    c(`nose-truck`, 27.73, 0.56, 0, 1.28, 0.18, 1.3, `strut`));
  for (let e of [-10.4, -3.2])
    for (let t of [-1, 1]) {
      let n = t * 3.24;
      for (let r of [-1.26, 0, 1.26])
        for (let i of [-0.63, 0.63])
          g(`main-wheel-${e}-${t}-${r}-${i}`, e + r, n + i, 0.665, 0.46);
      (c(`main-axle-${e}-${t}`, e, 0.68, n, 3.35, 0.22, 0.26, `strut`),
        c(`main-strut-${e}-${t}`, e, 1.49, n, 0.3, 1.72, 0.3, `strut`));
    }
  return n;
}
var dn;
function fn() {
  if (dn) return dn;
  let e = un(`c`),
    t = new Float32Array(e.reduce((e, t) => e + t.vertices.length, 0)),
    n = new Uint8Array(t.length / 9),
    r = 0;
  for (let i of e)
    (t.set(i.vertices, r),
      n.fill(
        128 | (i.material === `glass`),
        r / 9,
        (r + i.vertices.length) / 9,
      ),
      (r += i.vertices.length));
  let a = [1 / 0, 1 / 0, 1 / 0, -1 / 0, -1 / 0, -1 / 0];
  for (let e = 0; e < t.length; e += 3)
    for (let n = 0; n < 3; n++)
      ((a[n] = Math.min(a[n], t[e + n])),
        (a[n + 3] = Math.max(a[n + 3], t[e + n])));
  return ((dn = { shape: i(t, n), bounds: a }), dn);
}
function pn(e, t, n = 1, r = !1) {
  let i = Math.cos(t.yaw || 0),
    a = Math.sin(t.yaw || 0),
    o = Math.cos(t.pitch || 0),
    s = Math.sin(t.pitch || 0),
    c = n * (o * e[0] - s * e[1]),
    l = n * (s * e[0] + o * e[1]),
    u = n * e[2];
  return [
    i * c + a * u + (r ? 0 : t.x),
    l + (r ? 0 : t.y),
    -a * c + i * u + (r ? 0 : t.z),
  ];
}
function mn(e, t = 1) {
  let n = fn().bounds,
    r = [1 / 0, 1 / 0, 1 / 0, -1 / 0, -1 / 0, -1 / 0];
  for (let i = 0; i < 8; i++) {
    let a = pn([n[i & 1 ? 3 : 0], n[i & 2 ? 4 : 1], n[i & 4 ? 5 : 2]], e, t);
    for (let e = 0; e < 3; e++)
      ((r[e] = Math.min(r[e], a[e] - 0.01)),
        (r[e + 3] = Math.max(r[e + 3], a[e] + 0.01)));
  }
  return r;
}
function hn(e, t, n, r, i = 1) {
  if (e.visible === !1) return null;
  let o = Math.cos(e.yaw || 0),
    s = Math.sin(e.yaw || 0),
    c = Math.cos(e.pitch || 0),
    l = Math.sin(e.pitch || 0),
    u = (t, n) => {
      let r = t[0] - (n ? 0 : e.x),
        a = t[1] - (n ? 0 : e.y),
        u = t[2] - (n ? 0 : e.z),
        d = o * r - s * u,
        f = s * r + o * u;
      return [(c * d + l * a) / i, (-l * d + c * a) / i, f / i];
    },
    d = u(t, !1),
    f = u(n, !0),
    p = a(fn().shape, ...d, ...f, 0, r);
  return p
    ? {
        dist: p.dist,
        point: t.map((e, t) => e + n[t] * p.dist),
        normal: pn(p.normal, e, 1, !0),
        surface: p.mat === 1 ? `glass` : `metal`,
        pen: `metal`,
      }
    : null;
}
var gn = 60,
  B = (e) => (e <= 0 ? 0 : e >= 1 ? 1 : e * e * (3 - 2 * e)),
  _n = Math.PI * 2,
  vn = (e, t) => (e.epoch == null || t < e.epoch ? null : (t - e.epoch) / gn),
  V = Object.freeze({
    period: 2 * xt,
    taxiOut: [158, 24],
    lineUp: [182, 8],
    takeoff: [190, 23],
    climb: [213, 20],
    approach: [410, 30],
    touchdown: [440, 3],
    rollout: [443, 21],
    taxiBack: [464, 50],
    reverse: [514, 18],
  }),
  yn = new WeakMap(),
  bn = (e) => {
    let t = yn.get(e);
    if (t) return t;
    let [n, r] = e.transport2Spot ?? [156.5, -226],
      i = I.runwayZ;
    return (
      (t = {
        out: Je(
          qe(
            [
              [n, r],
              [n, P.rowTaxiZ],
              [P.outLink, P.rowTaxiZ],
              [P.outLink, i - 12],
              [P.outLink - 14, i],
            ],
            14,
          ),
        ),
        back: Je(
          qe(
            [
              [P.inLink + 30, i],
              [P.inLink, i - 14],
              [P.inLink, P.rowTaxiZ],
              [n + 20, P.rowTaxiZ],
            ],
            14,
          ),
        ),
        rev: Je([
          ...Ye(n + 20, P.rowTaxiZ - 20, 20, Math.PI / 2, Math.PI),
          [n, r],
        ]),
      }),
      yn.set(e, t),
      t
    );
  };
function xn(e, t) {
  let [n, r] = e.transport2Spot ?? [156.5, -226],
    i = bn(e),
    a = vn(e, t),
    o = {
      phase: `parked`,
      scale: P.bg,
      x: n,
      y: I.surfaceY,
      z: r,
      yaw: -Math.PI / 2,
      pitch: 0,
      visible: !0,
      gear: 1,
      propAngle: 0,
      smokeAge: -1,
    };
  if (a == null || a < V.taxiOut[0]) return o;
  let s = ((a % V.period) + V.period) % V.period,
    c = (e) => {
      let [t, n] = V[e],
        r = (((s - t) % V.period) + V.period) % V.period;
      return r < n ? r : -1;
    },
    l = I.runwayZ,
    u = (e) => {
      ((o.x = e.x), (o.z = e.z), (o.yaw = e.yaw));
    },
    d = () => {
      o.propAngle = ((a * 17) % 1) * _n;
    },
    f;
  if ((f = c(`taxiOut`)) >= 0)
    ((o.phase = `taxiOut`),
      u(i.out.at(i.out.length * B(f / V.taxiOut[1]))),
      d());
  else if ((f = c(`lineUp`)) >= 0)
    ((o.phase = `lineUp`),
      (o.x = i.out.at(i.out.length).x),
      (o.z = l),
      (o.yaw = Math.PI),
      d());
  else if ((f = c(`takeoff`)) >= 0) {
    o.phase = `takeoff`;
    let e = P.outLink - 14,
      t = V.takeoff[1];
    ((o.x = e - 820 * (f / t) ** 2), (o.z = l), (o.yaw = Math.PI), d());
    let n = t * 0.72;
    if (f > n) {
      let e = f - n;
      ((o.y += 1.6 * e * e), (o.pitch = Math.min(0.14, e * 0.06)));
    }
  } else if ((f = c(`climb`)) >= 0)
    ((o.phase = `climb`),
      (o.x = P.outLink - 14 - 820 - 71 * f - 0.8 * f * f),
      (o.z = l),
      (o.yaw = Math.PI),
      (o.y += 1.6 * (V.takeoff[1] * 0.28) ** 2 + 9 * f + 0.15 * f * f),
      (o.pitch = 0.14),
      (o.gear = 1 - B((f - 2) / 3)),
      d());
  else if ((f = c(`approach`)) >= 0) {
    o.phase = `approach`;
    let e = V.approach[1],
      t = f / e;
    ((o.x = I.approachX + (I.touchdownX - I.approachX) * t),
      (o.z = l),
      (o.yaw = Math.PI),
      (o.y += I.approachHeight * (1 - t) * (1 - t)),
      (o.pitch = 0.055),
      (o.gear = B((f - 18) / 3)),
      d());
  } else if ((f = c(`touchdown`)) >= 0 || (f = c(`rollout`)) >= 0) {
    let e = c(`rollout`),
      t = e >= 0 ? e + V.touchdown[1] : c(`touchdown`);
    o.phase = e >= 0 ? `rollout` : `touchdown`;
    let n = I.touchdownX - (P.inLink + 30),
      r = t / (V.touchdown[1] + V.rollout[1]);
    ((o.x = I.touchdownX - n * (1 - (1 - r) * (1 - r))),
      (o.z = l),
      (o.yaw = Math.PI),
      (o.pitch = 0.06 * (1 - B(t / 3))),
      (o.smokeAge = t < 4 ? t : -1),
      d());
  } else if ((f = c(`taxiBack`)) >= 0)
    ((o.phase = `taxiBack`),
      u(i.back.at(i.back.length * B(f / V.taxiBack[1]))),
      d());
  else if ((f = c(`reverse`)) >= 0) {
    o.phase = `reverse`;
    let e = i.rev.at(i.rev.length * B(f / V.reverse[1]));
    ((o.x = e.x), (o.z = e.z), (o.yaw = e.yaw + Math.PI));
  } else
    s > V.climb[0] + V.climb[1] &&
      s < V.approach[0] &&
      ((o.phase = `hidden`), (o.visible = !1));
  return o;
}
var Sn = Object.freeze({
  period: 200,
  first: 95,
  speed: 115,
  height: 55,
  z: 28,
  from: 1500,
  to: -1500,
  slots: Object.freeze([
    [0, 0, 0],
    [-16, -2, -16],
    [-16, 2, 16],
  ]),
  type: `p51`,
});
function Cn(e, t, n) {
  let r = vn(e, n),
    i = {
      x: 0,
      y: I.surfaceY,
      z: 0,
      yaw: Math.PI,
      attitude: 0,
      visible: !1,
      prop: 0,
    };
  if (r == null) return i;
  let a = r - Sn.first;
  if (a < 0) return i;
  let o = a % Sn.period;
  if (o > (Sn.from - Sn.to) / Sn.speed) return i;
  let [s, c, l] = Sn.slots[t];
  return (
    (i.x = Sn.from - Sn.speed * o - s),
    (i.y = I.surfaceY + Sn.height + c),
    (i.z = Sn.z + l),
    (i.visible = !0),
    (i.prop = r * 45),
    (i.attitude = Ke.p51),
    i
  );
}
var wn = Object.freeze([
    {
      id: `fuel-east`,
      pts: [
        [382, -6],
        [410, 22],
        [410, 98],
        [480, 98],
      ],
      wait: 28,
      speed: 9,
    },
    {
      id: `fuel-north`,
      pts: [
        [-330, P.doorZ + 11],
        [330, P.doorZ + 11],
      ],
      wait: 34,
      speed: 8,
      first: 60,
    },
  ]),
  Tn = wn.map((e) => Je(qe(e.pts, 12)));
function En(e, t, n) {
  let r = wn[t],
    i = Tn[t],
    a = vn(e, n) ?? 0,
    o = i.length / r.speed,
    s = 2 * (o + r.wait),
    c = (((a - (r.first ?? 0)) % s) + s) % s,
    l;
  l =
    c < r.wait
      ? 0
      : c < r.wait + o
        ? i.length * B((c - r.wait) / o)
        : c < 2 * r.wait + o
          ? i.length
          : i.length * (1 - B((c - 2 * r.wait - o) / o));
  let u = i.at(l),
    d = c >= r.wait + o + r.wait;
  return {
    x: u.x,
    y: I.surfaceY,
    z: u.z,
    yaw: u.yaw + (d ? Math.PI : 0),
    moving: (c >= r.wait && c < r.wait + o) || c >= 2 * r.wait + o,
  };
}
var Dn = Object.freeze({
    wait: [256, -115],
    aside: [256, 100],
    lead: 25,
    leaders: Object.freeze([0, 2, 4]),
  }),
  On = new WeakMap();
function kn(e) {
  let t = On.get(e.fighters);
  return (t || ((t = Xe(e.fighters ?? [])), On.set(e.fighters, t)), t);
}
var An = (e) => {
    let t = 0,
      n = 1e9;
    for (let r = e.holdAt; r < e.out.length; r += 1) {
      let i = e.out.at(r),
        a = Math.abs(i.z - P.northTaxiZ) + Math.abs(i.x - P.outLink);
      a < n && ((n = a), (t = r));
    }
    return t;
  },
  jn = new WeakMap();
function Mn(e, t) {
  let n = jn.get(e);
  if (n && n.tick === t && n.epoch === e.epoch) return n.p;
  let r = Nn(e, t);
  return (jn.set(e, { tick: t, epoch: e.epoch, p: r }), r);
}
function Nn(e, t) {
  let n = Dn.wait,
    r = {
      x: n[0],
      y: I.surfaceY,
      z: n[1],
      yaw: -Math.PI / 2,
      lights: !1,
      moving: !1,
    };
  if (!e.fighters?.length) return r;
  let i = kn(e);
  for (let a of Dn.leaders) {
    if (a >= e.fighters.length) continue;
    let o = st(e, a, t),
      s = i[a];
    if (
      o.phase !== `holdN` &&
      o.phase !== `taxiB` &&
      o.phase !== `lineUp` &&
      o.phase !== `roll`
    )
      continue;
    let c = An(s),
      l = s.out.length - 70,
      u =
        o.phase === `holdN`
          ? s.holdAt
          : o.phase === `taxiB`
            ? Pn(s.out, o)
            : s.out.length;
    if (((r.lights = !0), (r.moving = !0), u < c)) {
      let e = Math.max(
          0,
          Math.min(1, (u - s.holdAt) / Math.max(1, c - s.holdAt)),
        ),
        t = s.out.at(c + Dn.lead);
      return (
        (r.x = n[0] + (t.x - n[0]) * B(e)),
        (r.z = n[1] + (t.z - n[1]) * B(e)),
        (r.yaw = Math.atan2(-(t.z - n[1]), t.x - n[0])),
        r
      );
    }
    if (u + Dn.lead < l) {
      let e = s.out.at(u + Dn.lead);
      return ((r.x = e.x), (r.z = e.z), (r.yaw = e.yaw), r);
    }
    let d = s.out.at(l),
      f = Dn.aside,
      p = Math.min(
        1,
        (u + Dn.lead - l) / 60 + +(o.phase === `lineUp` || o.phase === `roll`),
      );
    return (
      (r.x = d.x + (f[0] - d.x) * B(p)),
      (r.z = d.z + (f[1] - d.z) * B(p)),
      (r.yaw = Math.atan2(-(f[1] - d.z), f[0] - d.x)),
      r
    );
  }
  for (let i of Dn.leaders) {
    if (i >= e.fighters.length) continue;
    let a = st(e, i, t);
    if (a.phase !== `climb`) continue;
    let o = B((a.t ?? 0) / F.climb),
      s = Dn.aside;
    return (
      (r.x = s[0] + (n[0] - s[0]) * o),
      (r.z = s[1] + (n[1] - s[1]) * o),
      (r.yaw = Math.atan2(-(n[1] - s[1]), n[0] - s[0])),
      (r.moving = !0),
      r
    );
  }
  return r;
}
function Pn(e, t) {
  let n = 0,
    r = 1e9;
  for (let i = 0; i <= e.length; i += 2) {
    let a = e.at(i),
      o = (a.x - t.x) ** 2 + (a.z - t.z) ** 2;
    o < r && ((r = o), (n = i));
  }
  for (let i = Math.max(0, n - 2); i <= Math.min(e.length, n + 2); i += 0.25) {
    let a = e.at(i),
      o = (a.x - t.x) ** 2 + (a.z - t.z) ** 2;
    o < r && ((r = o), (n = i));
  }
  return n;
}
function Fn(e) {
  return (e.fighterHangars ?? []).flatMap((e) =>
    [0, 1].map((t) => ({ hangar: e, k: t })),
  );
}
function In(e, t, n) {
  let r = t.hangar,
    i = t.k ? 1 : -1,
    a = P.bg,
    o = [r.cx + i * 28, P.doorZ - 14],
    s = {
      x: o[0],
      y: I.surfaceY,
      z: o[1],
      yaw: -Math.PI / 2,
      walk: 0,
      wave: !1,
      moving: !1,
    };
  for (let t of r.fighters) {
    let c = st(e, t, n),
      l = e.fighters[t].spot;
    if (c.phase === `taxiA`) {
      let e = c.z - l[1];
      if (e < 24 * a)
        return (
          (s.x = c.x + i * 7.5 * a),
          (s.z = c.z + 1),
          (s.yaw = -Math.PI / 2),
          (s.walk = e / 1.4),
          (s.moving = !0),
          s
        );
      let t = Math.min(1, (e - 24 * a) / 60),
        n = [l[0] + i * 7.5 * a, l[1] + 25 * a];
      return (
        (s.x = n[0] + (o[0] - n[0]) * t),
        (s.z = n[1] + (o[1] - n[1]) * t),
        t < 1 &&
          ((s.yaw = Math.atan2(-(o[1] - n[1]), o[0] - n[0])),
          (s.walk = t * 30),
          (s.moving = !0)),
        s
      );
    }
    if (c.phase === `taxiBack` && Math.hypot(c.x - l[0], c.z - l[1]) < 70 * a) {
      let e = [r.cx + i * 6, P.doorZ + 16];
      return (
        (s.x = e[0]),
        (s.z = e[1]),
        (s.yaw = Math.PI / 2),
        (s.wave = !0),
        s
      );
    }
  }
  return s;
}
var Ln = Object.fromEntries(
  Object.entries({
    truck: [[-4.5, 0, -1.25, 4.5, 3.2, 1.25]],
    follow: [[-2.4, 0, -1, 2.4, 1.9, 1]],
    crew: [[-0.3, 0, -0.35, 0.3, 2.2, 0.35]],
  }).map(([e, t]) => [e, t.map((e) => e.map((e) => e * P.bg))]),
);
function Rn(e, t, n, r, i) {
  if (Math.hypot(n[0] - t.x, n[2] - t.z) > i + 8) return null;
  let a = Math.cos(t.yaw),
    o = Math.sin(t.yaw),
    s = [
      a * (n[0] - t.x) - o * (n[2] - t.z),
      n[1] - t.y,
      o * (n[0] - t.x) + a * (n[2] - t.z),
    ],
    c = [a * r[0] - o * r[2], r[1], o * r[0] + a * r[2]],
    l = null;
  for (let t of e) {
    let e = dt(t, s, c, l?.t ?? i);
    e && (!l || e.t < l.t) && (l = e);
  }
  return l
    ? {
        dist: l.t,
        point: n.map((e, t) => e + r[t] * l.t),
        normal: [0, 1, 0],
        surface: `metal`,
        pen: `metal`,
      }
    : null;
}
function zn(e, t, n) {
  let r = [],
    i = (t, n, i, a) => {
      (e.map.addCollider(
        typeof i == `function`
          ? {
              id: t,
              mask: `static`,
              solid: !1,
              rayIndexBounds: n,
              get aabb() {
                return i();
              },
              raycast: a,
            }
          : {
              id: t,
              mask: `static`,
              solid: !1,
              rayIndexBounds: n,
              aabb: i,
              raycast: a,
            },
      ),
        r.push(t));
    };
  i(
    `hangar-transport2`,
    [-2600, 0, -380, 2600, 900, 10],
    () => {
      let e = xn(t, n());
      return [e.x - 27, e.y - 27, e.z - 27, e.x + 27, e.y + 27, e.z + 27];
    },
    (e, r, i) => nn(xn(t, n()), e, r, i),
  );
  for (let e = 0; e < 3; e++)
    i(
      `hangar-flyby-${e}`,
      [-1700, 0, -100, 1700, 200, 100],
      () => {
        let r = Cn(t, e, n());
        return [r.x - 8, r.y - 4, r.z - 8, r.x + 8, r.y + 4, r.z + 8];
      },
      (r, i, a) => {
        let o = Cn(t, e, n());
        return o.visible ? mt(Sn.type, o, r, i, a) : null;
      },
    );
  (wn.forEach((e, r) =>
    i(
      `hangar-${e.id}`,
      [-460, 0, -330, 460, 10, 140],
      () => {
        let e = En(t, r, n());
        return [e.x - 6, e.y, e.z - 6, e.x + 6, e.y + 4, e.z + 6];
      },
      (e, i, a) => Rn(Ln.truck, En(t, r, n()), e, i, a),
    ),
  ),
    i(
      `hangar-follow-me`,
      [-460, 0, -330, 460, 10, 140],
      () => {
        let e = Mn(t, n());
        return [e.x - 3, e.y, e.z - 3, e.x + 3, e.y + 2.5, e.z + 3];
      },
      (e, r, i) => Rn(Ln.follow, Mn(t, n()), e, r, i),
    ),
    Fn(t).forEach((e, r) =>
      i(
        `hangar-crew-${r}`,
        [-460, 0, -330, 460, 10, 140],
        () => {
          let r = In(t, e, n());
          return [r.x - 1, r.y, r.z - 1, r.x + 1, r.y + 2.4, r.z + 1];
        },
        (r, i, a) => Rn(Ln.crew, In(t, e, n()), r, i, a),
      ),
    ),
    (t.jets ?? []).forEach((e, n) => {
      let r = () => {
        let e = ot(t, n);
        return { x: e.x, y: I.surfaceY, z: e.z, yaw: e.yaw };
      };
      i(
        `hangar-jet-${n}`,
        [-350, 0, -350, 350, 16, -235],
        () => {
          let e = r(),
            t = Wn(`bizjet`);
          return [e.x - t, e.y - 1, e.z - t, e.x + t, e.y + 12, e.z + t];
        },
        (e, t, n) => Rn(Un(`bizjet`), r(), e, t, n),
      );
    }));
  for (let [e, n] of (t.parked ?? []).entries()) {
    let r = Un(n.kind);
    if (!r) continue;
    let a = {
        x: n.x,
        y: n.kind === `c5` ? t.y : I.surfaceY,
        z: n.z,
        yaw: n.yaw,
        attitude: 0,
        visible: !0,
      },
      o = Wn(n.kind),
      s =
        n.kind === `c5`
          ? mn(a, P.bg)
          : [
              n.x - o,
              I.surfaceY - 1,
              n.z - o,
              n.x + o,
              I.surfaceY + o,
              n.z + o,
            ],
      c =
        n.kind === `c5`
          ? (e, t, n) => hn(a, e, t, n, P.bg)
          : r === `warbird`
            ? (e, t, r) => mt(n.kind, a, e, t, r)
            : (e, t, n) => Rn(r, a, e, t, n);
    i(`hangar-parked-${e}`, s, s, c);
  }
  return () => {
    for (let t of r) e.map.removeCollider(t);
  };
}
var Bn = P.bg,
  H = (e) => e.map((e) => e.map((e) => e * Bn)),
  Vn = (e, t, n) => [[-e / 2, 0, -t / 2, e / 2, n, t / 2]],
  Hn = {};
function Un(e) {
  if (e in Hn) return Hn[e];
  let t = null;
  if (e === `c5`) t = `galaxy`;
  else if (e === `c130`) t = H(Ae());
  else if (e === `p51` || e === `corsair`) t = `warbird`;
  else if (e === `tug`) t = H(ie());
  else if (e === `cart`) t = H([[-1.1, 0, -0.75, 1.1, 1.25, 0.75]]);
  else if (e === `dolly`) t = H([[-2.12, 0, -1.25, 2.12, 2.33, 1.25]]);
  else if (e === `gpu`) t = H([[-1.82, 0, -0.9, 1.82, 1.58, 0.9]]);
  else if (e === `bus`) t = H([[-4.68, 0, -1.26, 4.68, 3.05, 1.26]]);
  else if (e === `forklift`) t = H([[-1.85, 0, -0.64, 1.85, 2.2, 0.64]]);
  else if (e === `lighttower`) t = H([[-1.6, 0, -0.9, 1.6, 2, 0.9]]);
  else if (e === `stand`) t = H([[-1.4, 0, -0.65, 1.4, 3.4, 0.65]]);
  else if (e === `engine`) t = H([[-2.3, 0, -0.69, 2.3, 1.9, 0.69]]);
  else if (e === `tent`) t = H([[-4.88, 0, -2.45, 4.88, 3.05, 2.45]]);
  else if (e === `pickup`) t = H([[-2.95, 0, -0.98, 2.95, 1.95, 0.98]]);
  else if (e === `barriers`) t = H([[-15, 0, -0.3, 15, 0.81, 0.3]]);
  else if (
    e === `cones` ||
    e === `chocks` ||
    e === `windsock` ||
    e === `toolcart` ||
    e === `extinguisher`
  )
    t = null;
  else {
    let n = {
      b52: me,
      chinook: he,
      blackhawk: _e,
      bizjet: ye,
      humvee: be,
      stair: M,
      fire: ge,
    }[e];
    n && e === `b52`
      ? (t = H([
          [n.tail, 0.6, -2, n.nose, 6, 2],
          [
            -14,
            n.wing.tipY,
            -n.span / 2,
            n.wing.rootLE,
            n.wing.rootY + 0.6,
            n.span / 2,
          ],
          [n.tail, 6, -0.6, n.tail + 8, n.finTop, 0.6],
        ]))
      : n && e === `bizjet`
        ? (t = H([
            [n.tail, 0.8, -1.5, n.nose, 4.2, 1.5],
            [-6, 1.4, -n.span / 2, 4, 2.6, n.span / 2],
            [n.tail, 4.2, -0.3, n.tail + 5, n.height, 0.3],
          ]))
        : n && e === `blackhawk`
          ? (t = H([
              [-9.6, 0.4, -1.2, 5.6, 3.2, 1.2],
              [-9.6, 3.2, -0.4, -8.2, 5, 0.4],
            ]))
          : n && e === `chinook`
            ? (t = H([
                [n.tail, 0.5, -1.9, n.nose, 4.2, 1.9],
                [n.tail, 4.2, -1, n.tail + 4, n.aftHub[1], 1],
              ]))
            : n && (t = H(Vn(n.length, n.width, n.height)));
  }
  return (Hn[e] = t);
}
var Wn = (e) =>
    (({
      c130: 22,
      c5: 51,
      b52: 34,
      chinook: 22,
      blackhawk: 14,
      bizjet: 25,
      humvee: 4,
      p51: 9,
      corsair: 9,
      stair: 6,
      fire: 9,
      tug: 5,
      cart: 3,
    })[e] ?? 10) * Bn,
  Gn = 60,
  Kn = P.bg,
  qn = Math.PI * 2,
  Jn = (e) => Math.max(0, Math.min(1, e)),
  Yn = (e) => {
    let t = Jn(e);
    return t * t * (3 - 2 * t);
  },
  Xn = (e, t) => (e.epoch == null || t < e.epoch ? null : (t - e.epoch) / Gn),
  Zn = (e) => {
    let t = (e | 0) ^ 625341585;
    return (
      (t = Math.imul(t ^ (t >>> 16), 73244475)),
      (t = Math.imul(t ^ (t >>> 16), 73244475)),
      (t ^ (t >>> 16)) >>> 0
    );
  },
  Qn = (e, t) => Math.atan2(-t, e),
  $n = (e, t, n) => e + (((((t - e + Math.PI) % qn) + qn) % qn) - Math.PI) * n,
  U = Object.freeze({
    period: 210,
    first: 30,
    spin: 16,
    lift: 5,
    out: 14,
    loop: 40,
    back: 14,
    land: 6,
    down: 14,
    a: 270,
    b: 200,
    cz: -10,
    alt: 52,
    hover: 9,
    rps: 4.2,
    idle: 1.6,
  }),
  er = U.spin + U.lift + U.out,
  tr = er + U.loop,
  nr = tr + U.back,
  rr = nr + U.land,
  ir = rr + U.down;
function ar(e, t) {
  let n = t - U.first;
  if (n < 0) return null;
  let r = Math.floor(n / U.period),
    i = e.helos.length,
    a = Zn(r * 13 + 5) % i,
    o = (a + 1 + (Zn(r * 29 + 3) % (i - 1))) % i;
  return { c: r, t: n - r * U.period, k: a, idle: o };
}
function or(e) {
  let t = qn * U.rps;
  if (e < U.spin) return (t * e * e) / (2 * U.spin);
  let n = (t * U.spin) / 2;
  if (e < rr) return n + t * (e - U.spin);
  let r = Math.min(e - rr, U.down);
  return n + t * (rr - U.spin) + t * (r - (r * r) / (2 * U.down));
}
var sr = (e) => [U.a * Math.cos(e), U.cz + U.b * Math.sin(e)];
function cr(e, t, n) {
  let [r, i] = e.helos[t],
    a = {
      x: r,
      y: I.surfaceY,
      z: i,
      yaw: 0,
      pitch: 0,
      bank: 0,
      rotor: 0,
      tail: 0,
      flying: !1,
    },
    o = Xn(e, n);
  if (o == null) return a;
  let s = ar(e, o);
  if (!s) return a;
  if (s.idle === t)
    return ((a.rotor = o * qn * U.idle), (a.tail = a.rotor * 4.6), a);
  if (s.k !== t) return a;
  let c = s.t;
  if (c >= ir) return a;
  ((a.rotor = or(c)), (a.tail = a.rotor * 4.6));
  let l = Math.atan2((i - U.cz) / U.b, r / U.a),
    u = sr(l),
    d = [-U.a * Math.sin(l), U.b * Math.cos(l)];
  if (c < U.spin) return a;
  a.flying = !0;
  let f = I.surfaceY;
  if (c < U.spin + U.lift)
    return (
      (a.y = f + U.hover * Yn((c - U.spin) / U.lift)),
      (a.pitch = 0.03),
      a
    );
  if (c < er) {
    let e = Yn((c - U.spin - U.lift) / U.out),
      t = Qn(u[0] - r, u[1] - i),
      n = Qn(d[0], d[1]);
    return (
      (a.x = r + (u[0] - r) * e),
      (a.z = i + (u[1] - i) * e),
      (a.y = f + U.hover + (U.alt - U.hover) * e),
      (a.yaw = e < 0.5 ? $n(0, t, Yn(e * 2)) : $n(t, n, Yn(e * 2 - 1))),
      (a.pitch = -0.14 * Math.sin(Math.PI * e)),
      a
    );
  }
  if (c < tr) {
    let e = l + (qn * (c - er)) / U.loop,
      t = sr(e);
    return (
      (a.x = t[0]),
      (a.z = t[1]),
      (a.y = f + U.alt),
      (a.yaw = Qn(-U.a * Math.sin(e), U.b * Math.cos(e))),
      (a.pitch = -0.12),
      (a.bank = -0.32),
      a
    );
  }
  if (c < nr) {
    let e = Yn((c - tr) / U.back),
      t = Qn(r - u[0], i - u[1]),
      n = Qn(d[0], d[1]);
    return (
      (a.x = u[0] + (r - u[0]) * e),
      (a.z = u[1] + (i - u[1]) * e),
      (a.y = f + U.alt + (U.hover - U.alt) * e),
      (a.yaw = e < 0.5 ? $n(n, t, Yn(e * 2)) : $n(t, 0, Yn(e * 2 - 1))),
      (a.pitch = 0.1 * Math.sin(Math.PI * e)),
      a
    );
  }
  return c < rr
    ? ((a.y = f + U.hover * (1 - Yn((c - nr) / U.land))), a)
    : ((a.flying = !1), a);
}
function lr(e, t, n) {
  let r = Xn(e, n);
  if (r == null) return null;
  let i = ar(e, r);
  return i
    ? i.idle === t
      ? { idle: !0, t: i.t }
      : i.k !== t || i.t >= ir
        ? null
        : { idle: !1, t: i.t }
    : null;
}
var ur = Object.freeze({
    spin: U.spin,
    lift: U.spin + U.lift,
    loopStart: er,
    loopEnd: tr,
    land: nr,
    down: rr,
    end: ir,
  }),
  dr = Object.freeze(
    [
      [-9.6, 0.4, -1.2, 5.6, 3.2, 1.2],
      [-9.6, 3.2, -0.4, -8.2, 5, 0.4],
    ].map((e) => e.map((e) => e * Kn)),
  ),
  fr = Object.freeze({
    period: 250,
    first: 150,
    speed: 62,
    height: 70,
    z: -20,
    from: 1700,
    to: -1700,
    slots: Object.freeze([
      [0, 0, 0],
      [-38, 5, 30],
    ]),
    rps: 3.4,
  });
function pr(e, t, n) {
  let r = Xn(e, n),
    i = {
      x: 0,
      y: I.surfaceY,
      z: 0,
      yaw: Math.PI,
      pitch: -0.08,
      visible: !1,
      rotor: 0,
    };
  if (r == null) return i;
  let a = r - fr.first;
  if (a < 0) return i;
  let o = a % fr.period;
  if (o > (fr.from - fr.to) / fr.speed) return i;
  let [s, c, l] = fr.slots[t];
  return (
    (i.x = fr.from - fr.speed * o - s),
    (i.y = I.surfaceY + fr.height + c),
    (i.z = fr.z + l),
    (i.visible = !0),
    (i.rotor = r * qn * fr.rps),
    i
  );
}
var mr = Object.freeze(
    [[he.tail, 0.5, -1.9, he.nose, 4.2, 1.9]].map((e) => e.map((e) => e * Kn)),
  ),
  hr = Object.freeze({
    period: 2 * xt,
    taxiOut: [180, 36],
    lineUp: [216, 4],
    roll: [220, 30],
    climb: [250, 30],
    approach: [292, 30],
    rollout: [322, 25],
    taxiIn: [347, 32],
    hold: Object.freeze([-640, P.rowTaxiZ]),
    entryX: -600,
    lineX: -540,
    rollA: 2.4,
    touchX: 450,
    vTouch: 65,
    vExit: 15,
  }),
  gr = I.runwayZ,
  _r = null,
  vr = () =>
    (_r ??= (() => {
      let [e, t] = hr.hold;
      return {
        out: Je(
          qe(
            [
              [e, t],
              [hr.entryX, t],
              [hr.entryX, gr],
              [hr.lineX, gr],
            ],
            24,
          ),
        ),
        in: Je(
          qe(
            [
              [hr.lineX - 10, gr],
              [-700, gr],
              [-700, t],
              [e, t],
            ],
            24,
          ),
        ),
      };
    })());
function yr(e, t) {
  let [n, r] = hr.hold,
    i = {
      x: n,
      y: I.surfaceY,
      z: r,
      yaw: 0,
      pitch: 0,
      visible: !0,
      moving: !1,
    },
    a = Xn(e, t);
  if (a == null) return i;
  let o = ((a % hr.period) + hr.period) % hr.period,
    s = vr(),
    c = hr,
    l = (e) => (o >= c[e][0] && o < c[e][0] + c[e][1] ? o - c[e][0] : null),
    u,
    d = (e) => {
      ((i.x = e.x), (i.z = e.z), (i.yaw = e.yaw));
    };
  if ((u = l(`taxiOut`)) != null)
    return (
      d(s.out.at(s.out.length * Yn(u / c.taxiOut[1]))),
      (i.moving = !0),
      i
    );
  if ((u = l(`lineUp`)) != null) return ((i.x = c.lineX), (i.z = gr), i);
  let f = c.lineX + 0.5 * c.rollA * c.roll[1] ** 2,
    p = c.rollA * c.roll[1];
  if ((u = l(`roll`)) != null) {
    ((i.x = c.lineX + 0.5 * c.rollA * u * u), (i.z = gr), (i.moving = !0));
    let e = c.rollA * u;
    if (e > 58) {
      let t = (e - 58) / (p - 58);
      ((i.y += 9 * t * t), (i.pitch = 0.11 * Math.min(1, t * 2)));
    }
    return i;
  }
  if ((u = l(`climb`)) != null)
    return (
      (i.x = f + p * u),
      (i.z = gr),
      (i.y = I.surfaceY + 9 + u * (4 + u * 0.12)),
      (i.pitch = 0.11),
      (i.moving = !0),
      i
    );
  if ((u = l(`approach`)) != null) {
    let e = u / c.approach[1],
      t = c.touchX + c.vTouch * c.approach[1];
    return (
      (i.x = t + (c.touchX - t) * e),
      (i.z = gr),
      (i.yaw = Math.PI),
      (i.y = I.surfaceY + 140 * (1 - e) ** 1.6),
      (i.pitch = 0.04 + 0.05 * e),
      (i.moving = !0),
      i
    );
  }
  if ((u = l(`rollout`)) != null) {
    let e = (c.vTouch - c.vExit) / c.rollout[1];
    return (
      (i.x = c.touchX - (c.vTouch * u - 0.5 * e * u * u)),
      (i.z = gr),
      (i.yaw = Math.PI),
      (i.pitch = 0.04 * Math.max(0, 1 - u / 3)),
      (i.moving = !0),
      i
    );
  }
  if ((u = l(`taxiIn`)) != null) {
    let e = Math.max(
      0,
      c.touchX -
        (c.vTouch * c.rollout[1] -
          0.5 * ((c.vTouch - c.vExit) / c.rollout[1]) * c.rollout[1] ** 2) -
        (c.lineX - 10),
    );
    return (
      d(s.in.at(Math.min(s.in.length, e + s.in.length * Yn(u / c.taxiIn[1])))),
      (i.moving = !0),
      i
    );
  }
  return (
    o >= c.climb[0] + c.climb[1] && o < c.approach[0] && (i.visible = !1),
    i
  );
}
function br(e, t, n, r) {
  let i = 0,
    a = r;
  for (let r = 0; r < 3; r++) {
    let o = e[r],
      s = e[r + 3];
    if (Math.abs(n[r]) < 1e-9) {
      if (t[r] < o || t[r] > s) return null;
      continue;
    }
    let c = (o - t[r]) / n[r],
      l = (s - t[r]) / n[r];
    if (
      (c > l && ([c, l] = [l, c]),
      (i = Math.max(i, c)),
      (a = Math.min(a, l)),
      i > a)
    )
      return null;
  }
  return { t: i };
}
function xr(e, t, n, r, i, a = 60) {
  if (Math.hypot(n[0] - t.x, n[2] - t.z) > i + a) return null;
  let o = Math.cos(t.yaw),
    s = Math.sin(t.yaw),
    c = Math.cos(t.pitch || 0),
    l = Math.sin(t.pitch || 0),
    u = (e, n) => {
      let r = n ? e[0] : e[0] - t.x,
        i = n ? e[1] : e[1] - t.y,
        a = n ? e[2] : e[2] - t.z,
        u = o * r - s * a,
        d = s * r + o * a;
      return [c * u + l * i, -l * u + c * i, d];
    },
    d = u(n, !1),
    f = u(r, !0),
    p = null;
  for (let t of e) {
    let e = br(t, d, f, p?.t ?? i);
    e && (!p || e.t < p.t) && (p = e);
  }
  return p
    ? {
        dist: p.t,
        point: n.map((e, t) => e + r[t] * p.t),
        normal: [0, 1, 0],
        surface: `metal`,
        pen: `metal`,
      }
    : null;
}
function Sr(e, t, n) {
  let r = [],
    i = (t, n, i, a) => {
      (e.map.addCollider({
        id: t,
        mask: `static`,
        solid: !1,
        rayIndexBounds: n,
        get aabb() {
          return i();
        },
        raycast: a,
      }),
        r.push(t));
    };
  (t.helos ?? []).forEach((e, r) =>
    i(
      `hangar-helo-${r}`,
      [-420, 0, -330, 420, 140, 320],
      () => {
        let e = cr(t, r, n());
        return [e.x - 14, e.y - 1, e.z - 14, e.x + 14, e.y + 7, e.z + 14];
      },
      (e, i, a) => xr(dr, cr(t, r, n()), e, i, a, 20),
    ),
  );
  for (let e = 0; e < 2; e++)
    i(
      `hangar-chinook-pass-${e}`,
      [-1800, 0, -80, 1800, 200, 60],
      () => {
        let r = pr(t, e, n());
        return [r.x - 26, r.y - 2, r.z - 26, r.x + 26, r.y + 10, r.z + 26];
      },
      (r, i, a) => {
        let o = pr(t, e, n());
        return o.visible ? xr(mr, o, r, i, a, 30) : null;
      },
    );
  return (
    i(
      `hangar-c5-flight`,
      [-820, 0, -340, 2820, 340, -110],
      () => mn(yr(t, n()), Kn),
      (e, r, i) => {
        let a = yr(t, n());
        return a.visible ? hn(a, e, r, i, Kn) : null;
      },
    ),
    () => {
      for (let t of r) e.map.removeCollider(t);
    }
  );
}
var Cr = n({
    CYCLE: () => Or,
    FLAG_B_X: () => Mr,
    FLAG_B_Y: () => 0,
    HOLD_CX: () => jr,
    TOW: () => W,
    TOW_TIME: () => Er,
    TUG_DX: () => Ar,
    beaconOn: () => Rr,
    cycleStart: () => Fr,
    doorPanels: () => Br,
    flagBPos: () => zr,
    hangarRide: () => ai,
    inPlane: () => Zr,
    installHangar: () => si,
    movingBoxes: () => Jr,
    paneBroken: () => $r,
    panelZ: () => Vr,
    panesAlong: () => ti,
    panesAt: () => Qr,
    panesNear: () => ni,
    planeX: () => Lr,
    towAt: () => Ir,
    walkSurfaces: () => Xr,
  }),
  wr = 60,
  W = Object.freeze({
    open: 180,
    warnDoors: 5,
    doors: 8,
    warnTow: 5,
    dist: 80,
    speed: 1.5,
    accel: 0.75,
    sit: 60,
    warnBack: 6,
    warnClose: 4,
    parked: 45,
  }),
  Tr = W.speed / W.accel,
  Er = W.dist / W.speed + Tr,
  Dr = [
    [`warnDoors`, W.warnDoors],
    [`doorsOpen`, W.doors],
    [`warnTow`, W.warnTow],
    [`towOut`, Er],
    [`sit`, W.sit],
    [`pushBack`, Er],
    [`warnClose`, W.warnClose],
    [`doorsClose`, W.doors],
    [`parked`, W.parked],
  ],
  Or = Dr.reduce((e, [, t]) => e + t, 0),
  kr = W.warnDoors + W.doors + W.warnTow + Er + W.sit,
  Ar = Ee.offset,
  jr = (N.hold.x0 + N.hold.x1) / 2,
  Mr = N.rampFoot - 0.45,
  Nr = 0;
function Pr(e) {
  let t = Er,
    n = W.accel,
    r = W.speed,
    i = W.dist;
  return e <= 0
    ? 0
    : e >= t
      ? i
      : e < Tr
        ? 0.5 * n * e * e
        : e > t - Tr
          ? i - 0.5 * n * (t - e) ** 2
          : 0.5 * n * Tr * Tr + r * (e - Tr);
}
function Fr(e) {
  return e.epoch == null ? null : e.epoch + Math.round((W.open - kr) * wr);
}
function Ir(e, t) {
  let n = Fr(e);
  if (n == null)
    return {
      phase: `sit`,
      t: 0,
      left: 1 / 0,
      x: W.dist,
      v: 0,
      doors: 1,
      warn: !1,
      moving: !1,
      cycle: -1,
    };
  if (t < n + kr * wr) {
    let e = (n + kr * wr - t) / wr;
    return {
      phase: `sit`,
      t: Math.max(0, W.open - e),
      left: e,
      x: W.dist,
      v: 0,
      doors: 1,
      warn: e < W.warnBack,
      moving: !1,
      cycle: 0,
    };
  }
  let r = (t - n) / wr,
    i = Math.floor(r / Or),
    a = r - i * Or,
    o = `parked`,
    s = 0;
  for (let [e, t] of Dr) {
    if (a < t) {
      ((o = e), (s = t));
      break;
    }
    a -= t;
  }
  let c = {
    phase: o,
    t: a,
    left: s - a,
    x: 0,
    v: 0,
    doors: 1,
    warn: !1,
    moving: !1,
    cycle: i,
  };
  switch (o) {
    case `warnDoors`:
      ((c.doors = 0), (c.warn = !0));
      break;
    case `doorsOpen`:
      ((c.doors = a / W.doors), (c.warn = !0), (c.moving = !0));
      break;
    case `warnTow`:
      c.warn = !0;
      break;
    case `towOut`:
      ((c.x = Pr(a)),
        (c.v = (Pr(a + 1 / wr) - c.x) * wr),
        (c.warn = !0),
        (c.moving = !0));
      break;
    case `sit`:
      ((c.x = W.dist), (c.warn = a > W.sit - W.warnBack));
      break;
    case `pushBack`:
      ((c.x = W.dist - Pr(a)),
        (c.v = (W.dist - Pr(a + 1 / wr) - c.x) * wr),
        (c.warn = !0),
        (c.moving = !0));
      break;
    case `warnClose`:
      c.warn = !0;
      break;
    case `doorsClose`:
      ((c.doors = 1 - a / W.doors), (c.warn = !0), (c.moving = !0));
      break;
    default:
      c.doors = 0;
  }
  return c;
}
var Lr = (e, t) => Ir(e, t).x,
  Rr = (e, t) => Ir(e, t).warn && !((t >> 4) & 1);
function zr(e, t) {
  return [e.parkX + Lr(e, t) + Mr, e.y + 0, e.z];
}
function Br(e) {
  let t = e.door,
    n = [];
  for (let e of [-1, 1])
    for (let r = 0; r < 3; r++) {
      let i = e * (t.half - De.w / 2 - De.w * (2 - r)),
        a = e * (t.half + De.w / 2);
      n.push({
        id: `door-${e < 0 ? `s` : `n`}-${r}`,
        side: e,
        k: r,
        x: t.x - De.t / 2 - 0.15 - r * 0.5,
        shut: i,
        open: a,
      });
    }
  return n;
}
var Vr = (e, t) => e.shut + (e.open - e.shut) * Math.max(0, Math.min(1, t)),
  Hr = Ae(),
  Ur = je(),
  Wr = Me(),
  Gr = Pe(),
  Kr = Fe(),
  G = (e, t, n, r) => [
    e[0] + t,
    e[1] + n,
    e[2] + r,
    e[3] + t,
    e[4] + n,
    e[5] + r,
  ],
  qr = new WeakMap();
function Jr(e, t) {
  let n = qr.get(e);
  n || qr.set(e, (n = new Map()));
  let r = n.get(t);
  if (r) return r;
  n.size > 3 && n.clear();
  let i = Yr(e, t);
  return (n.set(t, i), i);
}
function Yr(e, t) {
  let n = Ir(e, t),
    r = e.parkX + n.x,
    i = [];
  (Hr.forEach((t, n) =>
    i.push({ id: `plane-${n}`, box: G(t, r, e.y, e.z), kind: `plane` }),
  ),
    Gr.forEach((t, n) =>
      i.push({ id: `tug-${n}`, box: G(t, r + Ar, e.y, e.z), kind: `tug` }),
    ));
  for (let t of Br(e)) {
    let r = Vr(t, n.doors);
    Kr.forEach((n, a) =>
      i.push({ id: `${t.id}-${a}`, box: G(n, t.x, e.y, r), kind: `door` }),
    );
  }
  return i;
}
function Xr(e, t) {
  let n = e.parkX + Lr(e, t);
  return Ur.map((t) => ({
    id: t.id,
    box: G(t.box, n, e.y, e.z),
    top: (r, i) => e.y + t.h(r - n, i - e.z),
    thickness: t.thickness ?? t.box[4] - t.box[1],
  }));
}
function Zr(e, t, n) {
  let r = e.parkX + Lr(e, n),
    i = t[0] - r,
    a = t[1] - e.y;
  return (
    i > N.rampFoot - 0.6 &&
    i < N.cockpit.x1 &&
    Math.abs(t[2] - e.z) < N.hold.hw &&
    a < N.floor + N.hold.h - 0.5 &&
    a >
      (i >= N.hold.x0
        ? N.floor
        : Math.max(
            0,
            (N.floor * (i - N.rampFoot)) / (N.hold.x0 - N.rampFoot),
          )) -
        0.3
  );
}
function Qr(e, t) {
  let n = e.parkX + Lr(e, t);
  return [
    ...e.panes,
    ...Wr.map((t) => ({ id: t.id, box: G(t.box, n, e.y, e.z), plane: !0 })),
  ];
}
var $r = (e, t) => !!e.broken?.has(t);
function ei(e, t, n, r) {
  let i = 0,
    a = r;
  for (let r = 0; r < 3; r++) {
    if (Math.abs(n[r]) < 1e-9) {
      if (t[r] < e[r] || t[r] > e[r + 3]) return -1;
      continue;
    }
    let o = (e[r] - t[r]) / n[r],
      s = (e[r + 3] - t[r]) / n[r];
    if (o > s) {
      let e = o;
      ((o = s), (s = e));
    }
    if ((o > i && (i = o), s < a && (a = s), i > a)) return -1;
  }
  return i;
}
function ti(e, t, n, r, i) {
  let a = [];
  for (let o of Qr(e, i)) {
    if ($r(e, o.id)) continue;
    let i = ei(o.box, t, n, r);
    i >= 0 && a.push({ id: o.id, t: i, point: t.map((e, t) => e + n[t] * i) });
  }
  return a.sort((e, t) => e.t - t.t);
}
function ni(e, t, n, r) {
  let i = [];
  for (let a of Qr(e, r)) {
    if ($r(e, a.id)) continue;
    let r = a.box,
      o = Math.max(r[0] - t[0], 0, t[0] - r[3]),
      s = Math.max(r[1] - t[1], 0, t[1] - r[4]),
      c = Math.max(r[2] - t[2], 0, t[2] - r[5]);
    Math.hypot(o, s, c) < n && i.push(a.id);
  }
  return i;
}
var K = 0.4,
  ri = 1.8,
  ii = 0.08;
function ai(e, t) {
  let n = t.map.hangar;
  if (!n) return;
  let r = e.ext?.pl;
  if (!r || r.hangarTick === t.time.tick) return;
  r.hangarTick = t.time.tick;
  let i = t.map.hangarClock?.() ?? t.time.tick,
    a = Ir(n, i);
  if (!a.moving && !Ir(n, i - 1).moving) return;
  let o = a.x - Ir(n, i - 1).x,
    s = e.pos,
    c = n.parkX + a.x,
    l =
      s[0] > c + N.tail - 2 &&
      s[0] < c + Ar + Ee.length / 2 + 2 &&
      Math.abs(s[2] - n.z) < N.span / 2 + 2,
    u =
      Math.abs(s[0] - n.door.x) < 3 &&
      Math.abs(s[2] - n.z) < n.door.half + De.w + 2;
  if (!l && !u) return;
  let d = 0;
  if (o && ((r.grounded && !(e.vel[1] > 0.01)) || Zr(n, s, i - 1))) {
    let e = i - 1,
      t = Zr(n, s, e);
    for (let r of Xr(n, e)) {
      let e = r.box;
      if (
        !(s[0] < e[0] || s[0] > e[3] || s[2] < e[2] || s[2] > e[5]) &&
        Math.abs(s[1] - r.top(s[0], s[2])) < ii
      ) {
        t = !0;
        break;
      }
    }
    if (!t)
      for (let r of Jr(n, e)) {
        if (r.kind === `door`) continue;
        let e = r.box;
        if (
          !(
            s[0] < e[0] - K ||
            s[0] > e[3] + K ||
            s[2] < e[2] - K ||
            s[2] > e[5] + K
          ) &&
          Math.abs(s[1] - e[4]) < ii
        ) {
          t = !0;
          break;
        }
      }
    t && ((s[0] += o), (d = o));
  }
  let f = a.doors - Ir(n, i - 1).doors;
  for (let e of Jr(n, i)) {
    let t = e.box;
    (e.kind === `door` ? !f : !o) ||
      s[0] + K <= t[0] ||
      s[0] - K >= t[3] ||
      s[2] + K <= t[2] ||
      s[2] - K >= t[5] ||
      s[1] + ri <= t[1] ||
      s[1] >= t[4] - 0.05 ||
      (e.kind !== `door` &&
        s[0] - d + K > t[0] - o &&
        s[0] - d - K < t[3] - o) ||
      (s[0] =
        e.kind === `door`
          ? s[0] >= (t[0] + t[3]) / 2
            ? t[3] + K + 0.01
            : t[0] - K - 0.01
          : o > 0
            ? Math.max(s[0], t[3] + K + 0.01)
            : Math.min(s[0], t[0] - K - 0.01));
  }
}
var oi = Object.freeze([0, -9999, 0, 0, -9998, 0]);
function si(e, t, n = () => e.time.tick) {
  if (!t) return (delete e.map.hangar, delete e.map.hangarClock, () => {});
  ((e.map.hangar = t),
    (e.map.hangarClock = n),
    (t.broken = t.broken ?? new Set()),
    t.epoch === void 0 && (t.epoch = null));
  let r = an(We(e), t, n),
    i = [],
    a = (t) => {
      (e.map.addCollider(t), i.push(t.id));
    },
    s = (e) => [e[0], e[1], e[2], e[3] + W.dist, e[4], e[5]],
    c = null,
    l = null,
    u = () => {
      let e = n();
      return (e !== c && ((c = e), (l = Ir(t, e))), l);
    },
    d = () => t.parkX + u().x;
  (Hr.forEach((e, n) => {
    let r = `hangar-plane-${n}`,
      i = s(G(e, t.parkX, t.y, t.z)),
      c = () => G(e, d(), t.y, t.z);
    a({
      id: r,
      mask: `static`,
      solid: !0,
      surface: `metal`,
      navDynamic: !0,
      navMoves: !0,
      movementIndexBounds: i,
      rayIndexBounds: i,
      get aabb() {
        return c();
      },
      raycast(e, t, n) {
        return o({ id: r, aabb: c(), surface: `metal` }).raycast(e, t, n);
      },
    });
  }),
    Gr.forEach((e, n) => {
      let r = `hangar-tug-${n}`,
        i = s(G(e, t.parkX + Ar, t.y, t.z)),
        c = () => G(e, d() + Ar, t.y, t.z);
      a({
        id: r,
        mask: `static`,
        solid: !0,
        surface: `metal`,
        navDynamic: !0,
        navMoves: !0,
        movementIndexBounds: i,
        rayIndexBounds: i,
        get aabb() {
          return c();
        },
        raycast(e, t, n) {
          return o({ id: r, aabb: c(), surface: `metal` }).raycast(e, t, n);
        },
      });
    }));
  for (let e of Br(t))
    Kr.forEach((n, r) => {
      let i = `hangar-${e.id}-${r}`,
        s = Math.min(e.shut, e.open),
        c = Math.max(e.shut, e.open),
        l = [
          e.x + n[0],
          t.y + n[1],
          s + n[2],
          e.x + n[3],
          t.y + n[4],
          c + n[5],
        ],
        d = () => G(n, e.x, t.y, Vr(e, u().doors));
      a({
        id: i,
        mask: `static`,
        solid: !0,
        surface: `metal`,
        navDynamic: !0,
        navMoves: !0,
        movementIndexBounds: l,
        rayIndexBounds: l,
        get aabb() {
          return d();
        },
        raycast(e, t, n) {
          return o({ id: i, aabb: d(), surface: `metal` }).raycast(e, t, n);
        },
      });
    });
  Ur.forEach((e, n) => {
    let r = `hangar-walk-${e.id}`,
      i = s(G(e.box, t.parkX, t.y, t.z)),
      c = () => G(e.box, d(), t.y, t.z),
      l = e.thickness ?? e.box[4] - e.box[1],
      u = () => {
        let n = c(),
          r = d(),
          i = [];
        if (e.id === `hold-floor`) return [n];
        let a = e.id === `ramp` ? 0 : 2;
        for (let o = 0; o < 4; o++) {
          let s = n[a] + ((n[a + 3] - n[a]) * o) / 4,
            c = n[a] + ((n[a + 3] - n[a]) * (o + 1)) / 4,
            u = (s + c) / 2,
            d =
              t.y +
              e.h(
                a === 0 ? u - r : (e.box[0] + e.box[3]) / 2,
                a === 2 ? u - t.z : 0,
              ),
            f = n.slice();
          ((f[a] = s),
            (f[a + 3] = c),
            (f[1] = Math.max(n[1], d - l - 0.15)),
            (f[4] = d),
            i.push(f));
        }
        return i;
      };
    a({
      id: r,
      mask: `static`,
      solid: !0,
      surface: `metal`,
      movementIndexBounds: i,
      rayIndexBounds: i,
      floorThickness: l,
      get aabb() {
        return c();
      },
      floorHeight(n, r) {
        let i = c();
        return n < i[0] || n > i[3] || r < i[2] || r > i[5]
          ? -1e6
          : t.y + e.h(n - d(), r - t.z);
      },
      raycast(e, t, n) {
        let i = null;
        for (let a of u()) {
          let s = o({ id: r, aabb: a, surface: `metal` }).raycast(e, t, n);
          s && (!i || s.dist < i.dist) && (i = s);
        }
        return i;
      },
    });
  });
  for (let e of t.panes)
    a({
      id: `hangar-glass-${e.id}`,
      mask: `static`,
      solid: !0,
      surface: `glass`,
      navDynamic: !0,
      movementIndexBounds: e.box,
      rayIndexBounds: oi,
      get aabb() {
        return $r(t, e.id) ? oi : e.box;
      },
      raycast: () => null,
    });
  for (let e of Wr)
    a({
      id: `hangar-glass-${e.id}`,
      mask: `static`,
      solid: !0,
      surface: `glass`,
      movementIndexBounds: s(G(e.box, t.parkX, t.y, t.z)),
      rayIndexBounds: oi,
      get aabb() {
        return $r(t, e.id) ? oi : G(e.box, d(), t.y, t.z);
      },
      raycast: () => null,
    });
  e.map.captureIn = (e, r) => (e.id === t.flagB ? Zr(t, r.pos, n()) : void 0);
  for (let e of t.fences ?? [])
    a({
      id: `hangar-${e.id}`,
      mask: `static`,
      solid: !0,
      surface: `metal`,
      aabb: e.box,
      rayIndexBounds: oi,
      raycast: () => null,
    });
  let f = ht(We(e), t, n),
    p = zn(We(e), t, n),
    m = Sr(We(e), t, n);
  return () => {
    (r(), f(), p(), m());
    for (let t of i) e.map.removeCollider(t);
    (delete e.map.hangar, delete e.map.hangarClock, delete e.map.captureIn);
  };
}
var ci = n({
    CLOCK: () => ui,
    CYCLE: () => 240,
    ESC: () => fi,
    POSTS: () => hi,
    TRAY: () => q,
    cycleStart: () => di,
    escalatorRun: () => pi,
    installMesa: () => Si,
    mesaRide: () => _i,
    paneBroken: () => vi,
    panesAlong: () => bi,
    panesNear: () => xi,
    postBoxes: () => mi,
  }),
  li = 60,
  ui = Object.freeze({ first: 55 }),
  q = Object.freeze({ hx: 55, hz: 24.5, h: 0.4 });
function di(e) {
  return e.epoch == null ? null : e.epoch + Math.round(ui.first * li);
}
var fi = Object.freeze({ from: 150, stop: 45, rev: 45 });
function pi(e, t) {
  let n = di(e);
  if (n == null || t < n) return 1;
  let r = ((t - n) / li) % 240;
  return r < fi.from
    ? 1
    : r < fi.from + fi.stop
      ? 0
      : r < fi.from + fi.stop + fi.rev
        ? -1
        : 1;
}
function mi() {
  let e = [],
    t = 1.3,
    n = 2.6 * t;
  for (let r of [-1, 1]) {
    let i = r * (q.hx - 0.6),
      a = i + r * 2.4699999999999998,
      o = Math.min(i, a),
      s = Math.max(i, a);
    (e.push([a - 0.22 * t, 0, -0.22 * t, a + 0.22 * t, n, 0.22 * t]),
      e.push([
        o - 0.08 * t,
        n - 0.16 * t,
        -0.08 * t,
        s + 0.08 * t,
        n,
        0.08 * t,
      ]),
      e.push([
        i - 0.08 * t,
        n - 0.16 * t,
        -0.08 * t,
        i + 0.08 * t,
        q.h + 2.95 * t,
        0.08 * t,
      ]),
      e.push([
        i - 0.06 * t,
        q.h + 2.95 * t,
        -2.82 * t,
        i + 0.06 * t,
        q.h + 3.15 * t,
        2.82 * t,
      ]));
    for (let n of [-2.82 * t, 2.82 * t])
      e.push([
        i - 0.05 * t,
        q.h + 3.05 * t,
        n - 0.05 * t,
        i + 0.05 * t,
        q.h + 12.2 * t,
        n + 0.05 * t,
      ]);
  }
  return e;
}
var hi = mi(),
  gi = (e, t, n, r) => [
    e[0] + t,
    e[1] + n,
    e[2] + r,
    e[3] + t,
    e[4] + n,
    e[5] + r,
  ];
function _i(e, t) {
  let n = t.map.mesa;
  if (!n) return;
  let r = e.ext?.pl;
  if (
    r &&
    r.mesaTick !== t.time.tick &&
    ((r.mesaTick = t.time.tick),
    n.escalators && r.grounded && !(e.vel[1] > 0.01))
  ) {
    let r = e.pos,
      i = pi(n, t.map.mesaClock?.() ?? t.time.tick);
    if (i) {
      for (let e of n.escalators)
        if (
          !(r[2] < e.z0 || r[2] > e.z1 || r[0] < e.x0 || r[0] > e.x1) &&
          !(
            Math.abs(r[1] - (e.y + (e.rise * (r[0] - e.x0)) / (e.x1 - e.x0))) >
            0.35
          )
        ) {
          r[0] = Math.max(
            e.x0 - 0.05,
            Math.min(e.x1 + 0.05, r[0] + (i * e.dir * e.vx) / li),
          );
          break;
        }
    }
  }
}
var vi = (e, t) => !!e.broken?.has(t);
function yi(e, t, n, r) {
  let i = 0,
    a = r;
  for (let r = 0; r < 3; r++) {
    if (Math.abs(n[r]) < 1e-9) {
      if (t[r] < e[r] || t[r] > e[r + 3]) return -1;
      continue;
    }
    let o = (e[r] - t[r]) / n[r],
      s = (e[r + 3] - t[r]) / n[r];
    if (o > s) {
      let e = o;
      ((o = s), (s = e));
    }
    if ((o > i && (i = o), s < a && (a = s), i > a)) return -1;
  }
  return i;
}
function bi(e, t, n, r) {
  let i = [];
  for (let a of e.panes ?? []) {
    if (vi(e, a.id)) continue;
    let o = yi(a.box, t, n, r);
    o >= 0 && i.push({ id: a.id, t: o });
  }
  return i.sort((e, t) => e.t - t.t);
}
function xi(e, t, n) {
  let r = [];
  for (let i of e.panes ?? []) {
    if (vi(e, i.id)) continue;
    let a = i.box,
      o = Math.max(a[0] - t[0], 0, t[0] - a[3]),
      s = Math.max(a[1] - t[1], 0, t[1] - a[4]),
      c = Math.max(a[2] - t[2], 0, t[2] - a[5]);
    Math.hypot(o, s, c) < n && r.push(i.id);
  }
  return r;
}
function Si(e, t, n = () => e.time.tick) {
  if (!t) return (delete e.map.mesa, delete e.map.mesaClock, () => {});
  ((e.map.mesa = t),
    (e.map.mesaClock = n),
    t.epoch === void 0 && (t.epoch = null),
    (t.broken = t.broken ?? new Set()));
  let r = [],
    i = (t) => {
      (e.map.addCollider(t), r.push(t.id));
    };
  {
    let e = [t.x - q.hx, t.y, t.z - q.hz, t.x + q.hx, t.y + q.h, t.z + q.hz];
    i({
      id: `mesa-tray`,
      mask: `static`,
      solid: !0,
      surface: `grass`,
      aabb: e,
      floorThickness: q.h,
      floorHeight(n, r) {
        return n < e[0] || n > e[3] || r < e[2] || r > e[5] ? -1e6 : t.y + q.h;
      },
      raycast(t, n, r) {
        return o({ id: `mesa-tray`, aabb: e, surface: `grass` }).raycast(
          t,
          n,
          r,
        );
      },
    });
  }
  hi.forEach((e, n) =>
    i(
      o({ id: `mesa-post-${n}`, aabb: gi(e, t.x, t.y, t.z), surface: `metal` }),
    ),
  );
  let a = [0, -9999, 0, 0, -9998, 0];
  for (let e of t.panes ?? [])
    i({
      id: `mesa-glass-${e.id}`,
      mask: `static`,
      solid: !0,
      surface: `glass`,
      navDynamic: !0,
      movementIndexBounds: e.box,
      rayIndexBounds: a,
      get aabb() {
        return vi(t, e.id) ? a : e.box;
      },
      raycast: () => null,
    });
  for (let e of t.fences ?? [])
    i({
      id: `mesa-${e.id}`,
      mask: `static`,
      solid: !0,
      surface: `metal`,
      aabb: e.box,
      rayIndexBounds: a,
      raycast: () => null,
    });
  return () => {
    for (let t of r) e.map.removeCollider(t);
    (delete e.map.mesa, delete e.map.mesaClock);
  };
}
var Ci = 2.4,
  wi = 8.5,
  Ti = (e) =>
    Math.hypot(e.b[0] - e.a[0], e.b[1] - e.a[1], e.b[2] - e.a[2]) || 1;
function Ei(e, t) {
  let n = e.map?.ziplines;
  if (!n?.length) return null;
  let r = null,
    i = Ci;
  for (let e = 0; e < n.length; e++) {
    let a = n[e];
    for (let [n, o] of [
      [a.a, 1],
      [a.b, -1],
    ]) {
      let a = Math.hypot(t[0] - n[0], t[2] - n[2]);
      a < i &&
        Math.abs(t[1] - n[1]) < 1.7 &&
        ((i = a), (r = { index: e, dir: o }));
    }
  }
  return r;
}
function Di(e, t, n, r = [0, 0, 0]) {
  let i = e.map.ziplines[t],
    a = Math.max(0, Math.min(1, n / Ti(i)));
  return (
    (r[0] = i.a[0] + (i.b[0] - i.a[0]) * a),
    (r[1] = i.a[1] + (i.b[1] - i.a[1]) * a),
    (r[2] = i.a[2] + (i.b[2] - i.a[2]) * a),
    r
  );
}
function Oi(e, t, n, r) {
  let i = r.map.ziplines[n.index],
    a = Ti(i),
    o = n.dir > 0 ? i.a : i.b;
  ((t.zip = n.index + 1),
    (t.zipDir = n.dir),
    (t.zipS = n.dir > 0 ? 0 : a),
    (t.zipV = 3),
    (t.zipT = 0),
    (t.zipOX = e.pos[0] - o[0]),
    (t.zipOY = e.pos[1] - o[1]),
    (t.zipOZ = e.pos[2] - o[2]),
    (t.mantleT = 0),
    (t.slide = 0),
    (t.jumpBuf = 0),
    (t.coyote = 0));
}
function ki(e, t, n, r, i) {
  let a = n.map.ziplines?.[t.zip - 1];
  if (!a) return ((t.zip = 0), `drop`);
  let o = Ti(a),
    s = t.zipDir,
    c = (a.b[0] - a.a[0]) / o,
    l = (a.b[1] - a.a[1]) / o,
    u = (a.b[2] - a.a[2]) / o,
    d = l * s < 0;
  ((t.zipV = Math.min(
    d ? 16 : wi,
    t.zipV + 7 * r * (d ? 1 + Math.abs(l) * 2 : 1),
  )),
    (t.zipS += s * t.zipV * r),
    t.zipT++);
  let f = c * s * t.zipV,
    p = l * s * t.zipV,
    m = u * s * t.zipV;
  if (s > 0 ? t.zipS >= o : t.zipS <= 0) {
    let n = s > 0 ? a.b : a.a,
      r = Math.hypot(c, u) || 1;
    return (
      (e.pos[0] = n[0]),
      (e.pos[1] = n[1]),
      (e.pos[2] = n[2]),
      (e.vel[0] = (c / r) * s * 2),
      (e.vel[1] = 0),
      (e.vel[2] = (u / r) * s * 2),
      (t.zip = 0),
      `arrive`
    );
  }
  let h = Math.max(0, 1 - t.zipT / 12),
    g = Di(n, t.zip - 1, t.zipS);
  return (
    (e.pos[0] = g[0] + t.zipOX * h),
    (e.pos[1] = g[1] + t.zipOY * h),
    (e.pos[2] = g[2] + t.zipOZ * h),
    (e.vel[0] = f),
    (e.vel[1] = p),
    (e.vel[2] = m),
    i && t.zipT > 6 ? ((t.zip = 0), `drop`) : `ride`
  );
}
var Ai = 0.42,
  ji = 2.6,
  Mi = 3.6,
  Ni = (e) => [Math.sin(e.facing), Math.cos(e.facing)];
function Pi(e, t, n = [0, 0, 0]) {
  let [r, i] = Ni(e);
  return ((n[0] = e.x - r * Ai), (n[1] = t), (n[2] = e.z - i * Ai), n);
}
function Fi(e, t, n, r, i, a, o = 0) {
  let s = e.map?.ladders;
  if (!s?.length) return null;
  for (let e = 0; e < s.length; e++) {
    let c = s[e],
      [l, u] = Ni(c),
      d = t[0] - c.x,
      f = t[2] - c.z,
      p = Math.abs(d * u - f * l),
      m = d * l + f * u;
    if (p > 0.55) continue;
    let h = n * l + r * u;
    if (
      t[1] >= c.y0 - 0.45 &&
      t[1] <= c.y1 - 0.6 &&
      m <= 0.1 &&
      m >= -0.95 &&
      (i || (h > 0.5 && o > -0.6 && m >= -0.95 * 0.75))
    )
      return { index: e, top: !1 };
    if (
      a &&
      Math.abs(t[1] - c.y1) <= 0.35 &&
      m >= -0.62 &&
      m <= 1.1 &&
      (i || (h < -0.6 && m <= 0.9))
    )
      return { index: e, top: !0 };
  }
  return null;
}
function Ii(e, t, n, r) {
  let i = r.map.ladders[n.index],
    a = n.top ? i.y1 - 0.15 : Math.max(i.y0, Math.min(i.y1 - 0.6, e.pos[1])),
    o = Pi(i, a);
  ((t.lad = n.index + 1),
    (t.ladS = a),
    (t.ladT = 0),
    (t.ladOX = e.pos[0] - o[0]),
    (t.ladOY = e.pos[1] - o[1]),
    (t.ladOZ = e.pos[2] - o[2]),
    (t.mantleT = 0),
    (t.slide = 0),
    (t.jumpBuf = 0),
    (t.coyote = 0),
    (t.zip = 0),
    (t.chute = 0));
}
var Li = [0, 0, 0];
function Ri(e, t, n, r, i, a, o, s, c) {
  let l = n.map.ladders?.[t.lad - 1];
  if (!l) return ((t.lad = 0), `drop`);
  let [u, d] = Ni(l);
  if ((t.ladT++, (s || c) && t.ladT > 6))
    return (
      (t.lad = 0),
      s
        ? ((e.vel[0] = -u * 2.4), (e.vel[1] = 2.2), (e.vel[2] = -d * 2.4))
        : ((e.vel[0] = 0), (e.vel[1] = 0), (e.vel[2] = 0)),
      `drop`
    );
  let f = Math.sin(e.yaw),
    p = Math.cos(e.yaw),
    m = p * i - f * a,
    h = -f * i - p * a,
    g = m * u + h * d;
  (g > 0 && e.pitch < -0.6 && (g = -g), g > -0.2 && g < 0.2 && (g = 0));
  let _ = Math.max(-1, Math.min(1, g)) * (o ? Mi : ji);
  if (((t.ladS += _ * r), _ > 0 && t.ladS >= l.y1))
    return (
      (t.ladS = l.y1),
      Pi(l, l.y1, e.pos),
      (e.vel[0] = 0),
      (e.vel[1] = 0),
      (e.vel[2] = 0),
      `top`
    );
  if (_ < 0 && t.ladS <= l.y0)
    return (
      (t.lad = 0),
      Pi(l, l.y0, e.pos),
      (e.vel[0] = -u * 1),
      (e.vel[1] = 0),
      (e.vel[2] = -d * 1),
      `bottom`
    );
  (t.ladS > l.y1 && (t.ladS = l.y1), t.ladS < l.y0 && (t.ladS = l.y0));
  let v = Math.max(0, 1 - t.ladT / 8),
    y = Pi(l, t.ladS, Li);
  return (
    (e.pos[0] = y[0] + t.ladOX * v),
    (e.pos[1] = y[1] + t.ladOY * v),
    (e.pos[2] = y[2] + t.ladOZ * v),
    (e.vel[0] = 0),
    (e.vel[1] = _),
    (e.vel[2] = 0),
    `climb`
  );
}
var zi = n({
    AIR_CONTROL: () => Wi,
    BACKPEDAL: () => pa,
    BOT_MANTLE_MIN: () => 1,
    CHUTE_BRAKE: () => da,
    CHUTE_GLIDE: () => 7,
    CHUTE_MIN_HEIGHT: () => 9,
    CHUTE_SINK: () => ua,
    CHUTE_STEER: () => fa,
    CLIMB_REACH: () => Sa,
    CLIMB_TIME_PER_M: () => Ca,
    CONSTANTS: () => Ra,
    CORNER_ROUND: () => ra,
    COYOTE_TICKS: () => 3,
    EYE_CATCHUP_GAIN: () => ta,
    EYE_CATCHUP_RATE: () => ea,
    EYE_DROP: () => Bi,
    FRICTION: () => 9,
    GAME_BODY_SCALE: () => jo,
    GRAVITY: () => 20,
    GROUND_ACCEL: () => 40,
    GROUND_SNAP: () => $i,
    HEIGHTS: () => Y,
    HIT_BOUNDS_RADIUS: () => 2,
    JUMP_BUFFER_TICKS: () => 3,
    JUMP_SPEED: () => Gi,
    LAND_DIP_MIN: () => 3,
    LEAN_BODY_OFFSET: () => Xi,
    LEAN_OFFSET: () => Yi,
    LEAN_RATE: () => 9,
    LEAN_ROLL: () => Zi,
    MANTLE_EXIT_SPEED: () => xa,
    MANTLE_MAX: () => ga,
    MANTLE_REACH: () => _a,
    MANTLE_TIME: () => va,
    MAX_DEPEN: () => na,
    PRONE_BODY: () => po,
    PRONE_EYE_FWD: () => Vi,
    RADIUS: () => J,
    SLIDE_BOOST: () => Ma,
    SLIDE_DECEL: () => 5,
    SLIDE_END_SPEED: () => Fa,
    SLIDE_H: () => Ia,
    SLIDE_MAX: () => Na,
    SLIDE_MIN_SPEED: () => 5,
    SLIDE_STEER: () => La,
    SLIDE_TIME: () => Pa,
    SLOPE_DRAG: () => ha,
    SLOPE_LIMIT_DEG: () => 50,
    SPEEDS: () => Hi,
    STANCE_TIME: () => Ji,
    STEP_UP: () => qi,
    STOP_SPEED: () => Ui,
    SWIM_DEPTH: () => ia,
    SWIM_EXIT_DEPTH: () => aa,
    SWIM_SURFACE: () => oa,
    TERMINAL: () => 40,
    TERRAIN_MANTLE_MAX: () => ya,
    TERRAIN_MANTLE_REACH: () => ba,
    VAULT_DROP: () => Oa,
    VAULT_MAX: () => wa,
    VAULT_MIN_LEN: () => Ea,
    VAULT_REACH: () => Da,
    VAULT_THICK: () => Ta,
    VAULT_TIME: () => ka,
    VAULT_TIME_PER_M: () => Aa,
    WADE_DEPTH: () => sa,
    WALL_SLIDE_KEEP: () => ma,
    bodyScale: () => No,
    boundingBox: () => Uo,
    capsuleHeight: () => ko,
    chuteReady: () => wo,
    clonePlayerExt: () => Ha,
    duckRemote: () => Bo,
    eyeForward: () => Oo,
    eyeHeight: () => Do,
    eyePosition: () => Ao,
    hitBoundsRadius: () => Po,
    hitboxes: () => Vo,
    initPlayer: () => Va,
    playerPlacementClear: () => Za,
    presentationFromState: () => Eo,
    setBodyScale: () => Mo,
    stepPlayer: () => Co,
    walkingCorridor: () => Qa,
  }),
  J = 0.4,
  Y = Object.freeze([1.8, 1.3, 0.55]),
  Bi = 0.15,
  Vi = 0.5,
  Hi = Object.freeze({
    walk: 4.2,
    sprint: 6.6,
    ads: 2.6,
    crouch: 2.2,
    prone: 1,
    swim: 2.4,
  }),
  Ui = 1.6,
  Wi = 0.25,
  Gi = 4.8,
  Ki = 20,
  qi = 0.5,
  Ji = Object.freeze([
    [0, 0.22, 0.6],
    [0.22, 0, 0.45],
    [0.6, 0.45, 0],
  ]),
  Yi = 0.45,
  Xi = 0.3,
  Zi = 0.2,
  Qi = 9,
  $i = 0.55,
  ea = 2.6,
  ta = 5.5,
  na = 0.8,
  ra = 0.08,
  ia = 1.05,
  aa = 0.95,
  oa = 1.45,
  sa = 0.3,
  ca = 3,
  la = 9,
  ua = 4.2,
  da = 3.2,
  fa = 1.4,
  pa = 0.8,
  ma = 0.85,
  ha = 0.3,
  ga = 1.55,
  _a = 0.55,
  va = 0.4,
  ya = 1.9,
  ba = [0.55, 0.95, 1.4],
  xa = 1.6,
  Sa = 2.35,
  Ca = 0.3,
  wa = 2.5,
  Ta = 0.7,
  Ea = 0.9,
  Da = 0.6,
  Oa = 1.2,
  ka = 0.45,
  Aa = 0.3,
  ja = 5,
  Ma = 1.2,
  Na = 8.2,
  Pa = 0.95,
  Fa = 2.6,
  Ia = 0.9,
  La = 1.6,
  Ra = Object.freeze({
    TERRAIN_MANTLE_MAX: ya,
    RADIUS: J,
    HEIGHTS: Y,
    EYE_DROP: Bi,
    SPEEDS: Hi,
    GROUND_ACCEL: 40,
    FRICTION: 9,
    STOP_SPEED: Ui,
    AIR_CONTROL: Wi,
    JUMP_SPEED: Gi,
    GRAVITY: 20,
    STEP_UP: qi,
    PRONE_EYE_FWD: Vi,
    SLOPE_LIMIT_DEG: 50,
    COYOTE_TICKS: 3,
    JUMP_BUFFER_TICKS: 3,
    STANCE_TIME: Ji,
    LEAN_OFFSET: Yi,
    LEAN_BODY_OFFSET: Xi,
    LEAN_ROLL: Zi,
    LEAN_RATE: 9,
    GROUND_SNAP: $i,
    TERMINAL: 40,
    EYE_CATCHUP_RATE: ea,
    EYE_CATCHUP_GAIN: ta,
    MAX_DEPEN: na,
    CORNER_ROUND: ra,
    SWIM_DEPTH: ia,
    SWIM_EXIT_DEPTH: aa,
    SWIM_SURFACE: oa,
    WADE_DEPTH: sa,
    LAND_DIP_MIN: 3,
    BACKPEDAL: pa,
    WALL_SLIDE_KEEP: ma,
    SLOPE_DRAG: ha,
    MANTLE_MAX: ga,
    MANTLE_REACH: _a,
    MANTLE_TIME: va,
    MANTLE_EXIT_SPEED: xa,
    CLIMB_REACH: Sa,
    CLIMB_TIME_PER_M: Ca,
    VAULT_MAX: wa,
    VAULT_THICK: Ta,
    VAULT_MIN_LEN: Ea,
    VAULT_REACH: Da,
    VAULT_DROP: Oa,
    VAULT_TIME: ka,
    VAULT_TIME_PER_M: Aa,
    SLIDE_MIN_SPEED: 5,
    SLIDE_BOOST: Ma,
    SLIDE_MAX: Na,
    SLIDE_TIME: Pa,
    SLIDE_DECEL: 5,
    SLIDE_END_SPEED: Fa,
    SLIDE_H: Ia,
    SLIDE_STEER: La,
    CHUTE_MIN_HEIGHT: 9,
    CHUTE_SINK: ua,
    CHUTE_GLIDE: 7,
    CHUTE_BRAKE: da,
    CHUTE_STEER: fa,
  }),
  za = Math.cos((50 * Math.PI) / 180),
  Ba = 1.55;
function Va(e) {
  let t = e.stance | 0,
    n = Y[t] ?? Y[0];
  return (
    (e.ext.pl = {
      h: n,
      stanceFrom: t,
      coyote: 0,
      jumpBuf: 0,
      prevBtn: 0,
      lean: 0,
      stepOff: 0,
      land: -1,
      landSpeed: 0,
      grounded: 0,
      swim: 0,
      slide: 0,
      wade: 0,
      sld: 0,
      gnx: 0,
      gny: 1,
      gnz: 0,
      groundY: e.pos?.[1] ?? 0,
      mantleT: 0,
      mantleN: 0,
      mantleSX: 0,
      mantleSY: 0,
      mantleSZ: 0,
      mantleTX: 0,
      mantleTY: 0,
      mantleTZ: 0,
      vault: 0,
      vaultMX: 0,
      vaultMY: 0,
      vaultMZ: 0,
      chute: 0,
      fallTop: e.pos?.[1] ?? 0,
      landDrop: 0,
      landN: 0,
      zip: 0,
      zipS: 0,
      zipDir: 0,
      zipV: 0,
      zipT: 0,
      zipOX: 0,
      zipOY: 0,
      zipOZ: 0,
      lad: 0,
      ladS: 0,
      ladT: 0,
      ladOX: 0,
      ladOY: 0,
      ladOZ: 0,
    }),
    e.ext.pl
  );
}
function Ha(e) {
  return { ...e };
}
var X = (e, t, n) => (e < t ? t : e > n ? n : e),
  Ua = (e, t, n) => (e < t ? Math.min(e + n, t) : Math.max(e - n, t));
function Wa(e, t, n) {
  let r = X(e, n[0], n[3]),
    i = X(t, n[2], n[5]),
    a = e - r,
    o = t - i;
  return a * a + o * o;
}
var Ga = [0, 0],
  Ka = [0, 0, 0];
function qa(e, t, n, r = 0) {
  return e >= n[0] - r && e <= n[3] + r && t >= n[2] - r && t <= n[5] + r;
}
var Ja = [];
function Ya(e, t, n, r, i, a) {
  Ja.length = 0;
  let o = e.map.colliders;
  if (!o) return Ja;
  let s = t - i - 0.6,
    c = t + i + 0.6,
    l = n - 0.8,
    u = n + a + 0.8,
    d = r - i - 0.6,
    f = r + i + 0.6,
    p = (e) => {
      let t = e.movementAabb ?? e.aabb;
      return !t || e.noPlayer || (e.solid === !1 && !e.floorHeight)
        ? !1
        : !(
            t[3] < s ||
            t[0] > c ||
            t[5] < d ||
            t[2] > f ||
            t[4] < l ||
            t[1] > u
          );
    };
  if (o.queryMovement) {
    for (let e of o.queryMovement(s, l, d, c, u, f, p)) Ja.push(e);
    return Ja;
  }
  if (o.query) {
    for (let e of o.query(s, d, c, f, p)) Ja.push(e);
    return Ja;
  }
  for (let e of o.values()) p(e) && Ja.push(e);
  return Ja;
}
function Xa(e, t) {
  return e.floorThickness > 0
    ? Math.max((e.movementAabb ?? e.aabb)[1], t - e.floorThickness)
    : (e.movementAabb ?? e.aabb)[1];
}
function Z(e, t, n, r, i, a) {
  let o = a * 0.95 * (a * 0.95);
  for (let s = 0; s < e.length; s++) {
    let c = e[s];
    if (c.solid === !1) continue;
    let l = c.movementAabb ?? c.aabb;
    if (!(l[1] >= n + i - 0.001 || l[4] <= n + 0.05)) {
      if (c.floorHeight) {
        if (!qa(t, r, l, a * 0.95)) continue;
        let e;
        if (c.closestXZ) {
          if (
            (c.closestXZ(t, r, 1e-6, Ga),
            (Ga[0] - t) ** 2 + (Ga[1] - r) ** 2 >= o)
          )
            continue;
          e = c.floorHeight(Ga[0], Ga[1]);
        } else e = c.floorHeight(X(t, l[0], l[3]), X(r, l[2], l[5]));
        if (e <= n + 0.05 || Xa(c, e) >= n + i - 0.001) continue;
        return !1;
      }
      if (Wa(t, r, l) < o) return !1;
    }
  }
  return !0;
}
function Za(e, t, n = r.STAND) {
  if (!t || t.length !== 3 || !t.every(Number.isFinite)) return !1;
  let i = Y[n] ?? Y[0];
  return Z(Ya(e, ...t, J, i), ...t, i, J / 0.95);
}
function Qa(e, t, n, r = null) {
  let i = Math.hypot(n[0] - t[0], n[2] - t[2]),
    a = Math.max(1, Math.ceil(i / 0.2)),
    o = t.slice(),
    s = [0, 0, 0],
    c = e.map.colliders,
    l = 0.5,
    u = Math.min(t[0], n[0]) - l,
    d = Math.max(t[0], n[0]) + l,
    f = Math.min(t[2], n[2]) - l,
    p = Math.max(t[2], n[2]) + l,
    m = (e) => {
      let n = e.movementAabb ?? e.aabb;
      return (
        n &&
        !e.noPlayer &&
        (e.solid !== !1 || e.floorHeight) &&
        n[0] <= d &&
        n[3] >= u &&
        n[2] <= p &&
        n[5] >= f &&
        n[1] < t[1] + Y[0] + 0.5 &&
        n[4] > t[1] - 0.7
      );
    },
    h = r
      ? [...r].filter(m)
      : c.queryMovement
        ? c.queryMovement(u, t[1] - 0.7, f, d, t[1] + Y[0] + qi, p, m)
        : c.query
          ? c.query(u, f, d, p, m)
          : [...c.values()].filter(m);
  for (let r = 1; r <= a; r++) {
    let i = t[0] + ((n[0] - t[0]) * r) / a,
      c = t[2] + ((n[2] - t[2]) * r) / a,
      l = o[1];
    if (
      ((o[0] = i),
      (o[2] = c),
      fo(o, s, Y[0], J, h, !0, e),
      Math.hypot(o[0] - i, o[2] - c) > 0.025)
    )
      return null;
    let u = vo(o, J, Y[0], h, e);
    if (
      u.y - l > 0.52 ||
      l - u.y > 0.65 ||
      u.ny < 0.55 ||
      ((o[1] = u.y),
      !Z(h, ...o, Y[0], 0.4) && !Z(h, o[0], o[1] + 0.5, o[2], Y[0], 0.4))
    )
      return null;
  }
  return o;
}
function $a(e, t, n, r, i) {
  let a = i * i;
  for (let o = 0; o < e.length; o++) {
    let s = e[o];
    if (s.solid === !1) continue;
    let c = s.movementAabb ?? s.aabb;
    if (!(c[1] > n + i || c[4] < n - i)) {
      if (s.floorHeight) {
        if (qa(t, r, c) && s.floorHeight(t, r) > n - i) return !0;
        continue;
      }
      if (Wa(t, r, c) < a) return !0;
    }
  }
  return !1;
}
function eo(e, t, n, r, i) {
  let a = Math.hypot(e[0], e[2]);
  if (a < 1e-4) {
    ((e[0] = 0), (e[2] = 0));
    return;
  }
  let o = (a < 1.6 ? Ui : a) * 9 * t,
    s = (a - o > 0 ? a - o : 0) / a;
  if (i > 0) {
    let t = e[0] * n + e[2] * r;
    if (t > 0) {
      let a = t > i ? Math.max(i, t * s) : t,
        o = e[0] - n * t,
        c = e[2] - r * t;
      ((e[0] = n * a + o * s), (e[2] = r * a + c * s));
      return;
    }
  }
  ((e[0] *= s), (e[2] *= s));
}
function to(e, t, n, r, i, a) {
  if (r <= 0) return;
  let o = r - (e[0] * t + e[2] * n);
  if (o <= 0) return;
  let s = i * a,
    c = s < o ? s : o;
  ((e[0] += t * c), (e[2] += n * c));
}
var Q = [0, 1, 0];
function no(e, t, n, r) {
  if (e.floorNormal) return (e.floorNormal(t, n, r), r);
  let i = e.movementAabb ?? e.aabb,
    a = 0.05,
    o = e.floorHeight(X(t - a, i[0], i[3]), n),
    s = e.floorHeight(X(t + a, i[0], i[3]), n),
    c = e.floorHeight(t, X(n - a, i[2], i[5])),
    l = e.floorHeight(t, X(n + a, i[2], i[5])),
    u = -(s - o) / (2 * a),
    d = -(l - c) / (2 * a),
    f = 1 / Math.hypot(u, 1, d);
  return ((r[0] = u * f), (r[1] = f), (r[2] = d * f), r);
}
var ro = { x: 0, y: 0, z: 0 },
  io = [_a, 0.15];
function ao(e, t, n, r, i, a, o = ga, s = 0) {
  for (let c = 0; c < io.length; c++) {
    let l = oo(e, t, n, r, i, a, o, io[c], s);
    if (l) return l;
  }
  return null;
}
function oo(e, t, n, r, i, a, o, s, c = 0) {
  let l = e[0] + r * (n + s),
    u = e[2] + i * (n + s),
    d = e[1] + qi + 0.001,
    f = e[1] + o,
    p = null,
    m = -1 / 0;
  for (let r = 0; r < a.length; r++) {
    let i = a[r];
    if (i.solid === !1 || i.floorHeight) continue;
    let o = i.movementAabb ?? i.aabb,
      s = o[4];
    if (
      s <= d ||
      s > f ||
      s <= m ||
      (c > 0 && (o[3] - o[0] < c || o[5] - o[2] < c)) ||
      o[1] > e[1] + t * 0.5 ||
      !qa(l, u, o) ||
      qa(e[0], e[2], o)
    )
      continue;
    let h = X(
        l,
        o[0] + Math.min(n, (o[3] - o[0]) * 0.5),
        o[3] - Math.min(n, (o[3] - o[0]) * 0.5),
      ),
      g = X(
        u,
        o[2] + Math.min(n, (o[5] - o[2]) * 0.5),
        o[5] - Math.min(n, (o[5] - o[2]) * 0.5),
      );
    if (!Z(a, h, s, g, t, n)) continue;
    let _ = !1;
    for (let e = 0; e < a.length && !_; e++) {
      let r = a[e];
      r === i ||
        r.solid === !1 ||
        r.floorHeight ||
        ((r.movementAabb ?? r.aabb)[4] > s + 0.05 &&
          (r.movementAabb ?? r.aabb)[1] < s + t &&
          Wa(h, g, r.movementAabb ?? r.aabb) < n * n &&
          (_ = !0));
    }
    _ || ((m = s), (ro.x = h), (ro.y = s), (ro.z = g), (p = ro));
  }
  return p;
}
var so = { x: 0, y: 0, z: 0, mx: 0, my: 0, mz: 0, rise: 0 };
function co(e, t, n, r, i, a, o, s = e[1]) {
  let c = e[1],
    l = Math.min(c, s),
    u = n + Da,
    d = null,
    f = 1 / 0;
  for (let s = 0; s < a.length; s++) {
    let p = a[s];
    if (p.solid === !1 || p.floorHeight) continue;
    let m = p.movementAabb ?? p.aabb,
      h = m[4];
    if (
      h <= c + 0.5 + 0.001 ||
      h > l + 2.5 ||
      m[1] > l + 0.6 ||
      qa(e[0], e[2], m)
    )
      continue;
    let g = -1 / 0,
      _ = 1 / 0;
    for (let [t, n, a, o] of [
      [e[0], r, m[0], m[3]],
      [e[2], i, m[2], m[5]],
    ]) {
      if (Math.abs(n) < 1e-6) {
        if (t < a || t > o) {
          g = 1 / 0;
          break;
        }
        continue;
      }
      let e = (a - t) / n,
        r = (o - t) / n;
      (e > r && ([e, r] = [r, e]), e > g && (g = e), r < _ && (_ = r));
    }
    if (
      !(g <= _) ||
      g < 0 ||
      g > u ||
      g >= f ||
      _ - g > 0.7 ||
      (Math.abs(r) > Math.abs(i) ? m[5] - m[2] : m[3] - m[0]) < 0.9
    )
      continue;
    let v = e[0] + (r * (g + _)) / 2,
      y = e[2] + (i * (g + _)) / 2;
    if (!Z(a, v, h, y, 1, n * 0.6)) continue;
    let b = e[0] + r * (_ + n + 0.12),
      x = e[2] + i * (_ + n + 0.12),
      S = Ya(o, b, c, x, n, t);
    ((lo[0] = b), (lo[1] = Math.min(h, c + 0.45)), (lo[2] = x));
    let C = vo(lo, n, t, S, o);
    C.y < c - 1.2 ||
      C.y > c + 0.45 ||
      C.ny < za ||
      (Z(S, b, C.y, x, t, n) &&
        ((f = g),
        (so.x = b),
        (so.y = C.y),
        (so.z = x),
        (so.mx = v),
        (so.my = h + 0.05),
        (so.mz = y),
        (so.rise = h - c),
        (d = so)));
  }
  return d;
}
var lo = [0, 0, 0];
function uo(e, t, n, r, i, a, o) {
  let s = o?.map;
  if (typeof s?.getHeight != `function`) return null;
  let c = e[1],
    l = s.getHeight(e[0], e[2]);
  if (!Number.isFinite(l) || c - l > 0.6) return null;
  for (let o = 0; o < ba.length; o++) {
    let l = n + ba[o],
      u = e[0] + r * l,
      d = e[2] + i * l,
      f = s.getHeight(u, d);
    if (!Number.isFinite(f)) return null;
    let p = f - c;
    if (p > 1.9) return null;
    if (p <= 0.501) continue;
    let m = s.getHeight(e[0] + r * l * 0.5, e[2] + i * l * 0.5);
    if (Math.max(m - c, f - m) / (l * 0.5) < Math.tan((50 * Math.PI) / 180))
      continue;
    let h = s.getHeight(u + r * 0.5, d + i * 0.5);
    if (!(!Number.isFinite(h) || Math.abs(h - f) > 0.4))
      return Z(a, u, f, d, t, n)
        ? ((ro.x = u), (ro.y = f), (ro.z = d), ro)
        : null;
  }
  return null;
}
function fo(e, t, n, r, i, a, o) {
  let s = e[1],
    c = 0,
    l = 0;
  for (let o = 0; o < 4; o++) {
    let o = !1;
    for (let u = 0; u < i.length; u++) {
      let d = i[u];
      if (d.solid === !1) continue;
      let f = d.movementAabb ?? d.aabb;
      if (f[4] <= e[1] + 0.001 || f[1] >= e[1] + n - 0.001) continue;
      let p = Math.min(ra, (f[3] - f[0]) * 0.5, (f[5] - f[2]) * 0.5),
        m = r + p,
        h,
        g;
      d.closestXZ
        ? (d.closestXZ(e[0], e[2], p, Ga), (h = Ga[0]), (g = Ga[1]))
        : ((h = X(e[0], f[0] + p, f[3] - p)),
          (g = X(e[2], f[2] + p, f[5] - p)));
      let _ = e[0] - h,
        v = e[2] - g,
        y = _ * _ + v * v;
      if (y >= m * m) continue;
      let b = f[4];
      if (d.floorHeight) {
        if (((b = d.floorHeight(h, g)), b <= e[1] + 0.001)) continue;
        let r = Xa(d, b);
        if (r >= e[1] + n - 0.001 || b - e[1] <= 0.5) continue;
        if (y <= 1e-10 && d.floorThickness > 0 && e[1] < r - 0.05) {
          no(d, e[0], e[2], Q);
          let i = Math.hypot(Q[0], Q[2]);
          if (i > 1e-6 && Q[1] > 1e-6) {
            let a = i / Q[1],
              s = -Q[0] / i,
              c = -Q[2] / i,
              u = Math.min((e[1] + n - r + 0.001) / a, na - l);
            if (u > 0) {
              ((l += u), (e[0] += s * u), (e[2] += c * u));
              let n = t[0] * s + t[2] * c;
              (n < 0 && ((t[0] -= s * n), (t[2] -= c * n)), (o = !0));
            }
          }
          continue;
        }
        if (y <= 1e-10 && d.exitXZ) {
          d.exitXZ(e[0], e[2], Ka);
          let n = Math.min(Ka[2] + m, na - l);
          if (n <= 0) continue;
          ((l += n), (e[0] += Ka[0] * n), (e[2] += Ka[1] * n));
          let r = t[0] * Ka[0] + t[2] * Ka[1];
          (r < 0 && ((t[0] -= Ka[0] * r), (t[2] -= Ka[1] * r)), (o = !0));
          continue;
        }
        if (y <= 1e-10) {
          let n = b - e[1];
          (n > c && (c = n), (e[1] = b), t[1] < 0 && (t[1] = 0), (o = !0));
          continue;
        }
      } else if (
        b - s <= 0.5 &&
        a &&
        (Z(i, e[0], b, e[2], n, (r + 0.01) / 0.95) || e[1] >= b - 0.001)
      ) {
        let t = b - e[1];
        (t > c && (c = t), (e[1] = b), (o = !0));
        continue;
      }
      let x, S;
      if (y > 1e-10) {
        let t = Math.sqrt(y);
        ((x = _ / t), (S = v / t), (e[0] = h + x * m), (e[2] = g + S * m));
      } else {
        if (f[1] > e[1] + 0.35) continue;
        let t = e[0] - (f[0] + p),
          n = f[3] - p - e[0],
          r = e[2] - (f[2] + p),
          i = f[5] - p - e[2],
          a = t;
        ((x = -1),
          (S = 0),
          n < a && ((a = n), (x = 1), (S = 0)),
          r < a && ((a = r), (x = 0), (S = -1)),
          i < a && ((a = i), (x = 0), (S = 1)));
        let o = Math.min(a + m, na - l);
        if (o <= 0) continue;
        ((l += o), (e[0] += x * o), (e[2] += S * o));
      }
      let C = t[0] * x + t[2] * S;
      if (C < 0) {
        let e = Math.hypot(t[0], t[2]);
        ((t[0] -= x * C), (t[2] -= S * C));
        let n = Math.hypot(t[0], t[2]);
        if (n > 0.15 && e > n) {
          let r = (n + (e - n) * ma) / n;
          ((t[0] *= r), (t[2] *= r));
        }
      }
      o = !0;
    }
    if (!o) break;
  }
  return c;
}
var po = Object.freeze([
    { f: 0.68, r: 0.32 },
    { f: -0.5, r: 0.3 },
  ]),
  mo = 0.3;
function ho(e, t, n, r, i) {
  let a = -Math.sin(n),
    o = -Math.cos(n);
  for (let n = 0; n < 3; n++) {
    let n = !1;
    for (let s of po) {
      let c = e[0] + a * s.f,
        l = e[2] + o * s.f,
        u = s.r * s.r;
      for (let d = 0; d < i.length; d++) {
        let f = i[d];
        if (f.solid === !1 || f.floorHeight) continue;
        let p = f.movementAabb ?? f.aabb;
        if (p[4] <= e[1] + mo || p[1] >= e[1] + r - 0.001) continue;
        let m = X(c, p[0], p[3]),
          h = X(l, p[2], p[5]),
          g = c - m,
          _ = l - h,
          v = g * g + _ * _;
        if (v >= u) continue;
        let y, b, x;
        if (v > 1e-8) {
          let e = Math.sqrt(v);
          ((y = g / e), (b = _ / e), (x = s.r - e));
        } else
          ((y = -a * Math.sign(s.f)), (b = -o * Math.sign(s.f)), (x = s.r));
        ((x = Math.min(x, 0.25)), (e[0] += y * x), (e[2] += b * x));
        let S = t[0] * y + t[2] * b;
        (S < 0 && ((t[0] -= y * S), (t[2] -= b * S)), (n = !0));
      }
    }
    if (!n) return;
  }
}
function go(e, t) {
  return !t || !(e > 0.05)
    ? $i
    : $i + (J * Math.sqrt(Math.max(0, 1 - e * e))) / e;
}
var _o = { y: 0, nx: 0, ny: 1, nz: 0 };
function vo(e, t, n, r, i) {
  let a = i.map,
    o = a.getHeight(e[0], e[2]);
  ((Q[0] = 0),
    (Q[1] = 1),
    (Q[2] = 0),
    a.getNormal && a.getNormal(e[0], e[2], Q));
  let s = Q[0],
    c = Q[1],
    l = Q[2];
  c > 0 || ((s = 0), (c = 1), (l = 0));
  let u = e[1] + qi + 0.001,
    d = (t + 0.01) * (t + 0.01);
  for (let t = 0; t < r.length; t++) {
    let n = r[t];
    n.overrideGround &&
      n.floorHeight &&
      qa(e[0], e[2], n.movementAabb ?? n.aabb) &&
      ((o = n.floorHeight(e[0], e[2])), (s = 0), (c = 1), (l = 0));
  }
  for (let i = 0; i < r.length; i++) {
    let a = r[i];
    if (a.overrideGround) continue;
    let f = a.movementAabb ?? a.aabb;
    if (a.floorHeight) {
      if (!qa(e[0], e[2], f)) continue;
      let t = a.floorHeight(e[0], e[2]),
        n =
          e[1] < t - 0.001 &&
          e[1] >= f[1] - 0.05 &&
          !(a.floorThickness > 0 && e[1] < Xa(a, t) - 0.05);
      t > o &&
        (t <= u || n) &&
        ((o = t), no(a, e[0], e[2], Q), (s = Q[0]), (c = Q[1]), (l = Q[2]));
    } else if (a.solid !== !1) {
      let i = f[4];
      if (i > o && i <= u && Wa(e[0], e[2], f) < d) {
        if (i > e[1] + 0.02 && !Z(r, e[0], i, e[2], n, (t + 0.01) / 0.95))
          continue;
        ((o = i), (s = 0), (c = 1), (l = 0));
      }
    }
  }
  return ((_o.y = o), (_o.nx = s), (_o.ny = c), (_o.nz = l), _o);
}
function yo(e, t, n, r, i, a) {
  let o = r * 0.9 * (r * 0.9);
  for (let s = 0; s < i.length; s++) {
    let c = i[s];
    if (c.solid === !1) continue;
    let l = c.movementAabb ?? c.aabb;
    if (c.floorHeight) {
      if (!(c.floorThickness > 0) || !qa(e[0], e[2], l, r * 0.9)) continue;
      let i = Xa(c, c.floorHeight(X(e[0], l[0], l[3]), X(e[2], l[2], l[5])));
      if (e[1] >= i - 0.05 || e[1] + n <= i) continue;
      let o = i - n;
      (o < e[1] && (e[1] = o > a ? o : a), t[1] > 0 && (t[1] = 0));
      continue;
    }
    if (
      l[1] >= e[1] + n ||
      l[1] < e[1] + n * 0.5 ||
      l[4] <= e[1] + n * 0.5 ||
      Wa(e[0], e[2], l) >= o
    )
      continue;
    let u = l[1] - n;
    (u < e[1] && (e[1] = u > a ? u : a), t[1] > 0 && (t[1] = 0));
  }
}
var bo = [0, 0, 0],
  xo = [0, 0, 0];
function So(e, t) {
  let [n, r] = Ni(e),
    i = Y[0],
    a =
      Number.isFinite(e.landingOffset) && e.landingOffset > 0
        ? [e.landingOffset, 0.5, 0.7, 0.9, -Ai]
        : [0.5, 0.7, 0.9, -Ai];
  for (let o of a) {
    let a = e.x + n * o,
      s = e.z + r * o,
      c = Ya(t, a, e.y1, s, J, i);
    ((xo[0] = a), (xo[1] = e.y1 + 0.1), (xo[2] = s));
    let l = vo(xo, J, i, c, t);
    if (!(Math.abs(l.y - e.y1) > 0.45 || !Z(c, a, l.y, s, i, 0.4)))
      return ((bo[0] = a), (bo[1] = l.y), (bo[2] = s), bo);
  }
  return null;
}
function Co(n, i, a, o) {
  let s = n.ext.pl || Va(n);
  if (n.state & e.IN_VEHICLE) return n;
  (d(n, a), a.map.hangar && ai(n, a), a.map.mesa && _i(n, a));
  let c = n.pos,
    l = n.vel,
    u = a.map;
  ((!Number.isFinite(c[0]) ||
    !Number.isFinite(c[1]) ||
    !Number.isFinite(c[2])) &&
    ((c[0] = 0), (c[1] = u.getHeight(0, 0)), (c[2] = 0)),
    (!Number.isFinite(l[0]) ||
      !Number.isFinite(l[1]) ||
      !Number.isFinite(l[2])) &&
      ((l[0] = 0), (l[1] = 0), (l[2] = 0)));
  let f = (n.state & e.DEAD) !== 0,
    p = f ? 0 : i.buttons | 0,
    m = p & ~s.prevBtn;
  if (((s.prevBtn = p), !f)) {
    let e = +i.yaw || 0,
      t = +i.pitch || 0;
    ((n.yaw = e), (n.pitch = X(t, -1.55, Ba)));
  }
  if (f) s.zip = 0;
  else if (!s.zip && m & t.INTERACT && u.ziplines?.length) {
    let e = Ei(a, c);
    e && Oi(n, s, e, a);
  }
  if (s.zip)
    return (
      ki(n, s, a, o, (m & (t.JUMP | t.INTERACT)) !== 0),
      n.stance !== r.STAND && ((s.stanceFrom = n.stance), (n.stance = r.STAND)),
      (s.h = Ua(s.h, Y[0], 5 * o)),
      (s.grounded = 0),
      (s.swim = 0),
      (s.wade = 0),
      (s.slide = 0),
      (s.sld = 0),
      (s.coyote = 0),
      (s.lean = Ua(s.lean, 0, 9 * o)),
      (n.state =
        (n.state &
          ~(
            e.SPRINT |
            e.ADS |
            e.GROUNDED |
            e.LEAN_L |
            e.LEAN_R |
            e.SWIMMING |
            e.SLIDE
          )) |
        e.JUMPING),
      n
    );
  let h = f ? 0 : X(+i.mx || 0, -1, 1),
    g = f ? 0 : X(+i.mz || 0, -1, 1),
    _ = J;
  if (f) s.lad = 0;
  else if (
    !s.lad &&
    u.ladders?.length &&
    s.mantleT === 0 &&
    s.swim === 0 &&
    n.stance !== r.PRONE &&
    !n.ext?.noLadder
  ) {
    let e = Math.sin(n.yaw),
      r = Math.cos(n.yaw),
      i = r * h - e * g,
      o = -e * h - r * g,
      l = Math.hypot(i, o);
    l > 0.3 ? ((i /= l), (o /= l)) : ((i = 0), (o = 0));
    let u = Fi(a, c, i, o, (m & t.INTERACT) !== 0, s.grounded === 1, n.pitch);
    u && Ii(n, s, u, a);
  }
  if (s.lad) {
    let i = u.ladders[s.lad - 1],
      l = Ri(
        n,
        s,
        a,
        o,
        h,
        g,
        (p & t.SPRINT) !== 0,
        (m & t.JUMP) !== 0,
        (m & t.INTERACT) !== 0,
      );
    if (l === `top`) {
      let e = i && So(i, a);
      e &&
        ((s.lad = 0),
        (s.vault = 0),
        (s.mantleN = Math.max(1, Math.round(va / o))),
        (s.mantleT = s.mantleN),
        (s.mantleSX = c[0]),
        (s.mantleSY = c[1]),
        (s.mantleSZ = c[2]),
        (s.mantleTX = e[0]),
        (s.mantleTY = e[1]),
        (s.mantleTZ = e[2]));
    }
    if (s.lad || l === `top`)
      return (
        n.stance !== r.STAND &&
          ((s.stanceFrom = n.stance), (n.stance = r.STAND)),
        (s.h = Ua(s.h, Y[0], 5 * o)),
        (s.grounded = 0),
        (s.swim = 0),
        (s.wade = 0),
        (s.slide = 0),
        (s.sld = 0),
        (s.coyote = 0),
        (s.chute = 0),
        (s.fallTop = c[1]),
        (s.lean = Ua(s.lean, 0, 9 * o)),
        (n.state &= ~(
          e.SPRINT |
          e.ADS |
          e.GROUNDED |
          e.LEAN_L |
          e.LEAN_R |
          e.SWIMMING |
          e.JUMPING |
          e.CHUTE |
          e.SLIDE
        )),
        n
      );
    s.fallTop = c[1];
  }
  let v = u.waterBounds,
    y =
      (!v || (c[0] >= v[0] && c[0] <= v[2] && c[2] >= v[1] && c[2] <= v[3])) &&
      typeof u.waterLevel == `number`
        ? u.waterLevel
        : -1 / 0,
    b = y - c[1],
    x = s.swim === 1;
  ((!Number.isFinite(y) || b < 0.95) && (x = !1), !x && b > 1.05 && (x = !0));
  let S = s.grounded === 1,
    C = !!(p & t.ADS) && !x,
    w = !!(p & t.SPRINT) && g > 0.2 && !C,
    T = Ya(a, c[0], c[1], c[2], _, Y[0]);
  if (
    (s.sld > 0 && (f || x || s.mantleT > 0 || s.chute === 1) && (s.sld = 0),
    s.sld === 0 &&
      !f &&
      !x &&
      S &&
      s.mantleT === 0 &&
      n.stance === r.STAND &&
      n.state & e.SPRINT &&
      p & t.PRONE &&
      p & t.SPRINT)
  ) {
    let e = Math.hypot(l[0], l[2]);
    if (e >= 5) {
      let t = Math.min(Na, e + Ma) / e;
      ((l[0] *= t), (l[2] *= t), (s.sld = Math.max(1, Math.round(Pa / o))));
    }
  }
  let E = s.sld > 0,
    ee = x
      ? r.STAND
      : p & t.PRONE
        ? r.PRONE
        : p & t.CROUCH
          ? r.CROUCH
          : r.STAND;
  (w && ee !== r.STAND && (ee = r.STAND),
    E && (ee = r.CROUCH),
    ee < n.stance &&
      (Z(T, c[0], c[1], c[2], Y[ee], _) ||
        (ee =
          ee === r.STAND &&
          n.stance === r.PRONE &&
          Z(T, c[0], c[1], c[2], Y[r.CROUCH], _)
            ? r.CROUCH
            : n.stance)),
    !E &&
      ee === r.CROUCH &&
      s.h < Y[r.CROUCH] - 0.001 &&
      !Z(T, c[0], c[1], c[2], Y[r.CROUCH], _) &&
      (ee = r.PRONE),
    ee !== n.stance && ((s.stanceFrom = n.stance), (n.stance = ee)));
  let D = E ? Ia : Y[n.stance];
  if (E) s.h = Ua(s.h, D, 6.5 * o);
  else if (s.h !== D) {
    let e = Y[s.stanceFrom] ?? Y[0],
      t = Ji[s.stanceFrom]?.[n.stance] || 0.2,
      r = Math.abs(D - e) / t || 5;
    s.h = Ua(s.h, D, r * o);
  }
  let O = s.h,
    te = Math.sin(n.yaw),
    ne = Math.cos(n.yaw),
    re = ne * h - te * g,
    ie = -te * h - ne * g,
    k = Math.hypot(re, ie);
  (k > 1e-6 && ((re /= k), (ie /= k)), k > 1 && (k = 1));
  let ae = Hi.walk;
  (n.stance === r.CROUCH
    ? (ae = Hi.crouch)
    : n.stance === r.PRONE && (ae = Hi.prone),
    C && ae > Hi.ads && (ae = Hi.ads));
  let oe = w && n.stance === r.STAND && !x && !E;
  (oe && (ae = Hi.sprint), g < 0 && (ae *= pa));
  let A = 0;
  if (
    (!x &&
      b > 0.3 &&
      ((A = X((b - sa) / 0.75, 0, 1)), (ae *= 1 - 0.55 * A), (oe = !1)),
    k > 1e-6 && s.grounded === 1 && s.gny > 0.2 && s.gny < 0.999)
  ) {
    let e = -(s.gnx * re + s.gnz * ie) / s.gny;
    e > 0 && (ae /= 1 + ha * e);
  }
  let se = ae * k,
    ce = !1,
    le = l[1],
    j = !1,
    ue = !1,
    de = (m & t.JUMP) !== 0;
  if (
    (de && !x && (s.jumpBuf = 4),
    f || x || S
      ? (s.chute = 0)
      : de &&
        s.chute === 0 &&
        s.mantleT === 0 &&
        c[1] - s.groundY >= 9 &&
        ((s.chute = 1), (s.jumpBuf = 0)),
    f)
  )
    s.mantleT = 0;
  else if (
    s.mantleT === 0 &&
    !x &&
    n.stance !== r.PRONE &&
    s.slide === 0 &&
    (s.jumpBuf > 0 || (!S && n.state & e.JUMPING && k >= 0.3))
  ) {
    let t = re,
      r = ie;
    k < 0.3 && ((t = -te), (r = -ne));
    let i = T.slice(),
      l = co(c, O, _, t, r, i, a, s.groundY);
    T.length = 0;
    for (let e = 0; e < i.length; e++) T.push(i[e]);
    let u = !S && n.state & e.JUMPING ? Sa : ga,
      d =
        l ?? ao(c, O, _, t, r, T, u, +!!n.ext?.bot) ?? uo(c, O, _, t, r, T, a);
    if (
      ((s.vault = +!!l),
      l && ((s.vaultMX = l.mx), (s.vaultMY = l.my), (s.vaultMZ = l.mz)),
      d)
    ) {
      let t = l ? ka + Aa * l.rise : va + Ca * Math.max(0, d.y - c[1] - ga);
      ((s.mantleN = Math.max(1, Math.round(t / o))),
        (s.mantleT = s.mantleN),
        (s.mantleSX = c[0]),
        (s.mantleSY = c[1]),
        (s.mantleSZ = c[2]),
        (s.mantleTX = d.x),
        (s.mantleTY = d.y),
        (s.mantleTZ = d.z),
        (s.jumpBuf = 0),
        (s.coyote = 0),
        (n.state |= e.JUMPING));
    }
  }
  if (x) {
    let e = Math.cos(n.pitch),
      r = Math.sin(n.pitch),
      i = -te * e * g + ne * h,
      u = r * g,
      d = -ne * e * g - te * h;
    (p & t.JUMP && (u += 1), p & t.CROUCH && --u);
    let f = Math.hypot(i, u, d);
    f > 1 && ((i /= f), (u /= f), (d /= f));
    let m = Math.min(1, 5 * o);
    ((l[0] += (i * Hi.swim - l[0]) * m),
      (l[1] += (u * Hi.swim - l[1]) * m),
      (l[2] += (d * Hi.swim - l[2]) * m));
    let v = y - oa;
    Math.abs(u) < 0.01 && c[1] < v - 0.15 && l[1] < 1.2 && (l[1] += 3 * o);
    let b = c[1];
    ((c[0] += l[0] * o), (c[2] += l[2] * o));
    let C = fo(c, l, O, _, T, !0, a),
      w = vo(c, _, O, T, a),
      E = c[1] + l[1] * o;
    if (
      (E <= w.y && ((E = w.y), l[1] < 0 && (l[1] = 0), (j = !0)),
      E > v && w.y <= v && ((E = v), l[1] > 0 && (l[1] = 0)),
      j && S && w.ny > 0.98)
    ) {
      let e = E - b;
      (e > 0.08 || e < -0.08) && (s.stepOff -= e);
    } else C > 0.08 && (s.stepOff -= C);
    ((c[1] = E),
      yo(c, l, O, _, T, w.y),
      (s.gnx = w.nx),
      (s.gny = w.ny),
      (s.gnz = w.nz),
      (s.groundY = w.y),
      j && y - c[1] < 0.95 && (x = !1),
      (s.slide = 0),
      (s.coyote = 0),
      (s.jumpBuf = 0),
      x || (j = !0));
  } else if (s.mantleT > 0 && !f) {
    s.mantleT--;
    let e = 1 - s.mantleT / s.mantleN,
      t = (e) => ((e = X(e, 0, 1)), e * e * (3 - 2 * e));
    if (s.vault === 1) {
      let n = 0.6;
      if (e < n) {
        let r = e / n,
          i = t(r / 0.8),
          a = t((r - 0.3) / 0.7);
        ((c[0] = s.mantleSX + (s.vaultMX - s.mantleSX) * a),
          (c[2] = s.mantleSZ + (s.vaultMZ - s.mantleSZ) * a),
          (c[1] = s.mantleSY + (s.vaultMY - s.mantleSY) * i));
      } else {
        let r = (e - n) / 0.4,
          i = t(r / 0.6);
        ((c[0] = s.vaultMX + (s.mantleTX - s.vaultMX) * i),
          (c[2] = s.vaultMZ + (s.mantleTZ - s.vaultMZ) * i),
          (c[1] = s.vaultMY + (s.mantleTY - s.vaultMY) * r * r));
      }
    } else {
      let n = t(e / 0.65),
        r = t((e - 0.3) / 0.7);
      ((c[0] = s.mantleSX + (s.mantleTX - s.mantleSX) * r),
        (c[2] = s.mantleSZ + (s.mantleTZ - s.mantleSZ) * r),
        (c[1] = s.mantleSY + (s.mantleTY - s.mantleSY) * n));
    }
    if (
      ((l[0] = 0),
      (l[1] = 0),
      (l[2] = 0),
      (s.slide = 0),
      (s.coyote = 0),
      (s.jumpBuf = 0),
      s.mantleT === 0)
    ) {
      ((s.vault = 0),
        (c[0] = s.mantleTX),
        (c[1] = s.mantleTY),
        (c[2] = s.mantleTZ));
      let e = s.mantleTX - s.mantleSX,
        t = s.mantleTZ - s.mantleSZ,
        n = Math.hypot(e, t);
      n > 1e-6 && ((l[0] = (e / n) * xa), (l[2] = (t / n) * xa));
      let r = vo(c, _, O, T, a);
      ((s.gnx = r.nx),
        (s.gny = r.ny),
        (s.gnz = r.nz),
        (s.groundY = r.y),
        (j = !0),
        (s.coyote = 5));
    }
  } else {
    let t = S && s.slide === 0,
      i = s.chute === 1 && !t;
    if (i) {
      let e = Math.min(1, fa * o);
      ((l[0] += (re * 7 * k - l[0]) * e), (l[2] += (ie * 7 * k - l[2]) * e));
    } else if (E) {
      let e = Math.hypot(l[0], l[2]);
      if (t && e > 1e-4) {
        let t = l[0] / e,
          n = l[2] / e;
        if (k > 0.3) {
          let e = Math.min(1, La * o);
          ((t += (re - t) * e), (n += (ie - n) * e));
          let r = Math.hypot(t, n) || 1;
          ((t /= r), (n /= r));
        }
        let r = s.gny > 0.2 ? -(s.gnx * t + s.gnz * n) / s.gny : 0,
          i = Math.max(0, e - (5 + 12 * r) * o);
        ((l[0] = t * i), (l[2] = n * i));
      }
      (--s.sld <= 0 || (t && Math.hypot(l[0], l[2]) < 2.6)) && (s.sld = 0);
    } else (t && eo(l, o, re, ie, se), to(l, re, ie, se, t ? 40 : 40 * Wi, o));
    let u = (S || s.coyote > 0) && n.stance !== r.PRONE && s.slide === 0 && !f;
    (s.jumpBuf > 0 && u
      ? ((l[1] = Gi * (1 - 0.5 * A)),
        (ce = !0),
        (s.jumpBuf = 0),
        (s.coyote = 0),
        (s.sld = 0),
        (n.state |= e.JUMPING))
      : s.jumpBuf > 0 && !de && s.jumpBuf--,
      !S || ce || s.slide ? (l[1] -= 20 * o) : (l[1] = 0),
      l[1] < -40 && (l[1] = -40),
      i &&
        l[1] < -4.2 &&
        ((l[1] += 20 * o),
        (l[1] += (-4.2 - l[1]) * Math.min(1, da * o)),
        l[1] > -4.2 && (l[1] = -4.2)));
    let d = c[1];
    ((c[0] += l[0] * o), (c[2] += l[2] * o));
    let p = S || l[1] <= 0.01,
      m = fo(c, l, O, _, T, p, a);
    (n.stance === r.PRONE && (ho(c, l, n.yaw, O, T), fo(c, l, O, _, T, p, a)),
      m > 0.08 && (s.stepOff -= m));
    let h = vo(c, _, O, T, a),
      g = h.ny < za - 0.001,
      v = c[1] + l[1] * o;
    if (
      (v <= h.y + 1e-4
        ? ce && l[1] > 0
          ? v < h.y && (v = h.y)
          : (!S && l[1] < 0 && !(s.slide === 1 && g) && (ue = !0),
            (v = h.y),
            (j = !0),
            g || (l[1] = 0))
        : S && !ce && l[1] <= 0.01 && v - h.y <= go(h.ny, g)
          ? ((v = h.y), (j = !0), (l[1] = 0))
          : s.slide === 1 &&
            g &&
            !ce &&
            v - h.y <= go(h.ny, g) &&
            ((v = h.y), (j = !0)),
      j && S)
    ) {
      let e = v - (d + m),
        t = h.ny > 0.98 ? 0.08 : 0.25;
      (e > t || e < -t) && (s.stepOff -= e);
    }
    if (((c[1] = v), g && j)) {
      ((j = !1), (s.slide = 1));
      let e = l[0] * h.nx + l[1] * h.ny + l[2] * h.nz;
      ((l[0] -= h.nx * e), (l[1] -= h.ny * e), (l[2] -= h.nz * e));
    } else s.slide = 0;
    (yo(c, l, O, _, T, h.y),
      (s.gnx = h.nx),
      (s.gny = h.ny),
      (s.gnz = h.nz),
      (s.groundY = h.y),
      j ? (s.coyote = 5) : ce ? (s.coyote = 0) : s.coyote > 0 && s.coyote--);
  }
  if (
    (ue
      ? ((s.land = 0),
        (s.landSpeed = -le),
        (s.landDrop = Math.max(0, Math.min(s.fallTop - c[1], (le * le) / 40))),
        (s.landN = (s.landN + 1) % 65536))
      : s.land >= 0 && s.land < 1e5 && s.land++,
    (j || x || s.slide === 1 || s.mantleT > 0 || !(s.fallTop >= c[1])) &&
      (s.fallTop = c[1]),
    (j || x || f) && (s.chute = 0),
    s.stepOff > 0.9
      ? (s.stepOff = 0.9)
      : s.stepOff < -0.9 && (s.stepOff = -0.9),
    s.stepOff !== 0)
  ) {
    let e = ea + ta * (s.stepOff < 0 ? -s.stepOff : s.stepOff);
    ((s.stepOff = Ua(s.stepOff, 0, e * o)),
      s.stepOff < 1e-4 && s.stepOff > -1e-4 && (s.stepOff = 0));
  }
  let fe =
    x || oe || s.sld > 0 || n.stance === r.PRONE || f
      ? 0
      : (p & t.LEAN_R ? 1 : 0) - (p & t.LEAN_L ? 1 : 0);
  if (fe !== 0) {
    let e = c[1] + O - Bi;
    $a(T, c[0] + ne * fe * 0.45, e, c[2] - te * fe * 0.45, 0.2) &&
      ((fe *= 0.5),
      $a(T, c[0] + ne * fe * 0.45, e, c[2] - te * fe * 0.45, 0.2) && (fe = 0));
  }
  s.lean = Ua(s.lean, fe, 9 * o);
  let pe = u.bounds;
  pe &&
    (c[0] < pe[0] + _ && ((c[0] = pe[0] + _), l[0] < 0 && (l[0] = 0)),
    c[2] < pe[1] + _ && ((c[2] = pe[1] + _), l[2] < 0 && (l[2] = 0)),
    c[0] > pe[2] - _ && ((c[0] = pe[2] - _), l[0] > 0 && (l[0] = 0)),
    c[2] > pe[3] - _ && ((c[2] = pe[3] - _), l[2] > 0 && (l[2] = 0)));
  let me = u.boundsCuts;
  if (me)
    for (let e = 0; e < me.length; e++) {
      let t = me[e];
      if (
        c[0] <= t[0] - _ ||
        c[0] >= t[2] + _ ||
        c[2] <= t[1] - _ ||
        c[2] >= t[3] + _
      )
        continue;
      let n = c[0] - (t[0] - _),
        r = t[2] + _ - c[0],
        i = c[2] - (t[1] - _),
        a = t[3] + _ - c[2],
        o = Math.min(n, r, i, a);
      o === n
        ? ((c[0] = t[0] - _), l[0] > 0 && (l[0] = 0))
        : o === r
          ? ((c[0] = t[2] + _), l[0] < 0 && (l[0] = 0))
          : o === i
            ? ((c[2] = t[1] - _), l[2] > 0 && (l[2] = 0))
            : ((c[2] = t[3] + _), l[2] < 0 && (l[2] = 0));
    }
  ((s.grounded = +!!j), (s.swim = +!!x), (s.wade = A));
  let he = Math.hypot(l[0], l[2]),
    M =
      n.state &
      ~(
        e.SPRINT |
        e.ADS |
        e.GROUNDED |
        e.LEAN_L |
        e.LEAN_R |
        e.SWIMMING |
        e.SLIDE
      );
  return (
    oe && he > 1 && (M |= e.SPRINT),
    s.sld > 0 && (M |= e.SLIDE),
    C && (M |= e.ADS),
    j && ((M |= e.GROUNDED), (M &= ~e.JUMPING)),
    s.lean < -0.05 && (M |= e.LEAN_L),
    s.lean > 0.05 && (M |= e.LEAN_R),
    x && (M |= e.SWIMMING),
    s.chute === 1 ? (M |= e.CHUTE) : (M &= ~e.CHUTE),
    (n.state = M),
    $ > 1 && zo(n, s, a, O, o),
    n
  );
}
function wo(t) {
  let n = t?.ext?.pl;
  return (
    !!n &&
    !(t.state & (e.DEAD | e.IN_VEHICLE)) &&
    n.chute === 0 &&
    n.grounded === 0 &&
    n.swim === 0 &&
    n.mantleT === 0 &&
    t.pos[1] - n.groundY >= 9
  );
}
var To = { h: Y[0], lean: 0, stepOff: 0, exact: !1, scale: 1 };
function Eo(t) {
  let n = t.ext?.pl;
  if (n)
    return (
      (To.h = n.h),
      (To.lean = n.lean),
      (To.stepOff = n.stepOff),
      (To.exact = !0),
      (To.scale = n.bs ?? $),
      To
    );
  let r = t.state | 0;
  return (
    (To.h = r & e.SLIDE ? Ia : (Y[t.stance | 0] ?? Y[0])),
    (To.lean = r & e.LEAN_R ? 1 : r & e.LEAN_L ? -1 : 0),
    (To.stepOff = 0),
    (To.exact = !1),
    (To.scale = t.bs ?? $),
    To
  );
}
function Do(e) {
  let t = Eo(e);
  return (t.h - Bi) * t.scale + t.stepOff;
}
function Oo(t) {
  if ((t.state | 0) & e.SLIDE) return 0;
  let n = Eo(t).h,
    r = X((Y[1] - n) / (Y[1] - Y[2]), 0, 1);
  return r * r * Vi;
}
function ko(e) {
  return Eo(e).h;
}
function Ao(e, t = [0, 0, 0]) {
  let n = Eo(e).lean,
    r = Math.sin(e.yaw),
    i = Math.cos(e.yaw),
    a = Oo(e);
  return (
    (t[0] = e.pos[0] + i * n * Yi - r * a),
    (t[1] = e.pos[1] + Do(e)),
    (t[2] = e.pos[2] - r * n * Yi - i * a),
    t
  );
}
var jo = 1.3,
  $ = 1;
function Mo(e = 1) {
  $ = e > 0 ? e : 1;
}
function No() {
  return $;
}
function Po() {
  return 2 * Math.max(1, $);
}
var Fo = 0.06,
  Io = 2.5;
function Lo(e, t, n) {
  let r = Ya(e, t[0], t[1], t[2], J, n),
    i = t[1],
    a = 1 / 0;
  for (let e = 0; e < r.length; e++) {
    let o = r[e];
    if (o.solid === !1 && !o.floorHeight) continue;
    let s = o.movementAabb ?? o.aabb;
    if (s[4] <= i + 0.05 || s[1] >= i + n || !qa(t[0], t[2], s, 0.38)) continue;
    let c = s[1];
    if (o.floorHeight) {
      let e = o.floorHeight(X(t[0], s[0], s[3]), X(t[2], s[2], s[5]));
      if (e <= i + 0.05) continue;
      c = Xa(o, e);
    }
    c > i + 0.3 && (a = Math.min(a, c));
  }
  return a - i;
}
function Ro(e, t, n) {
  let r = n + 0.04;
  return X((Lo(e, t, r * $ + Fo) - Fo) / r, 1, $);
}
function zo(e, t, n, r, i) {
  (Math.abs((t.duckAt?.[0] ?? 1e9) - e.pos[0]) +
    Math.abs((t.duckAt?.[1] ?? 0) - e.pos[1]) +
    Math.abs((t.duckAt?.[2] ?? 0) - e.pos[2]) >
    0.04 ||
    t.duckH !== r) &&
    ((t.duckT = Ro(n, e.pos, r)),
    (t.duckAt = [e.pos[0], e.pos[1], e.pos[2]]),
    (t.duckH = r));
  let a = t.duckT ?? $;
  t.bs = a < (t.bs ?? $) ? a : Ua(t.bs ?? $, a, Io * 0.4 * i);
}
function Bo(e, t, n) {
  if ($ <= 1 || !t?.map) return ((e.bs = $), e.bs);
  let r = Y[e.stance | 0] ?? Y[0],
    i = (e.duckKey ??= [NaN, 0, 0, 0]);
  (Math.abs(i[0] - e.pos[0]) +
    Math.abs(i[1] - e.pos[1]) +
    Math.abs(i[2] - e.pos[2]) >
    0.04 ||
    i[3] !== r) &&
    ((e.duckT = Ro(t, e.pos, r)),
    (i[0] = e.pos[0]),
    (i[1] = e.pos[1]),
    (i[2] = e.pos[2]),
    (i[3] = r));
  let a = e.bs ?? $;
  return ((e.bs = e.duckT < a ? e.duckT : Ua(a, e.duckT, Io * 0.4 * n)), e.bs);
}
function Vo(e, t = []) {
  Ho(e, t);
  let n = Eo(e).scale;
  if (n !== 1) {
    let r = e.pos;
    for (let { capsule: e } of t) {
      for (let t of [e.a, e.b])
        for (let e = 0; e < 3; e++) t[e] = r[e] + (t[e] - r[e]) * n;
      e.r *= n;
    }
  }
  return t;
}
function Ho(t, n) {
  n.length = 0;
  let i = Eo(t),
    a = i.h,
    o = i.lean,
    s = Math.sin(t.yaw),
    c = Math.cos(t.yaw),
    l = t.pos[0],
    u = t.pos[1],
    d = t.pos[2],
    f = (e, t, r, i, a, o, f, p) => {
      n.push({
        part: e,
        capsule: {
          a: [l + c * t - s * i, u + r, d - s * t - c * i],
          b: [l + c * a - s * f, u + o, d - s * a - c * f],
          r: p,
        },
      });
    };
  if (t.state & e.SLIDE && t.stance !== r.PRONE)
    return (
      f(`head`, 0.05, 0.58, -0.6, 0.05, 0.72, -0.64, 0.14),
      f(`torso`, 0, 0.26, -0.08, 0.03, 0.45, -0.45, 0.22),
      f(`arm_l`, -0.25, 0.49, -0.5, -0.16, 0.35, -0.22, 0.09),
      f(`arm_r`, 0.34, 0.44, -0.45, 0.37, 0.27, -0.18, 0.09),
      f(`leg_l`, -0.13, 0.2, -0.02, -0.2, 0.13, 0.7, 0.11),
      f(`leg_r`, 0.11, 0.2, 0.02, 0.37, 0.18, 0.29, 0.11),
      n
    );
  if (t.stance === r.PRONE && a < 0.9)
    return (
      f(`head`, 0, 0.5, 0.64, 0, 0.66, 0.64, 0.14),
      f(`torso`, 0, 0.28, -0.2, 0, 0.3, 0.3, 0.2),
      f(`arm_l`, -0.3, 0.33, 0.5, -0.2, 0.21, 1.02, 0.08),
      f(`arm_r`, 0.3, 0.33, 0.5, 0.4, 0.17, 0.98, 0.08),
      f(`leg_l`, -0.13, 0.17, -0.75, -0.13, 0.19, -0.25, 0.11),
      f(`leg_r`, 0.13, 0.17, -0.75, 0.13, 0.19, -0.25, 0.11),
      n
    );
  let p = X((Y[0] - a) / (Y[0] - Y[1]), 0, 1),
    m = 0.12 * p,
    h = o * Xi,
    g = t.vel ? X(Math.hypot(t.vel[0], t.vel[2]) / 0.8, 0, 1) : 0,
    _ = (0.185 + 0.055 * g) * p,
    v = 0.2 * p,
    y = m + 0.02 + (0.04 + 0.19 * g) * p,
    b = m + 0.11 * g * p;
  return (
    f(`head`, h, a - 0.29 + _, y, h, a - 0.12 + _, y, 0.14),
    f(
      `torso`,
      h * 0.5,
      Math.min(a * 0.52, a - 0.54),
      m * 0.5,
      h,
      a - 0.54 + v,
      b,
      0.22,
    ),
    f(
      `arm_l`,
      -0.32 + h * 0.5,
      a * 0.55,
      m * 0.5,
      -0.32 + h,
      a - 0.54 + v * 0.5,
      b,
      0.09,
    ),
    f(
      `arm_r`,
      0.32 + h * 0.5,
      a * 0.55,
      m * 0.5,
      0.32 + h,
      a - 0.54 + v * 0.5,
      b,
      0.09,
    ),
    f(`leg_l`, -0.13, 0.12, 0, -0.13, a * 0.5, m * 0.3, 0.12),
    f(`leg_r`, 0.13, 0.12, 0, 0.13, a * 0.5, m * 0.3, 0.12),
    n
  );
}
function Uo(e, t = [0, 0, 0, 0, 0, 0]) {
  let n = ko(e);
  return (
    (t[0] = e.pos[0] - J),
    (t[1] = e.pos[1]),
    (t[2] = e.pos[2] - J),
    (t[3] = e.pos[0] + J),
    (t[4] = e.pos[1] + n),
    (t[5] = e.pos[2] + J),
    t
  );
}
export {
  Vr as $,
  T as $t,
  Mo as A,
  Le as At,
  ci as B,
  A as Bt,
  Do as C,
  Xt as Ct,
  Va as D,
  I as Dt,
  Vo as E,
  St as Et,
  Ei as F,
  Re as Ft,
  Nr as G,
  ve as Gt,
  bi as H,
  fe as Ht,
  hi as I,
  De as It,
  Br as J,
  M as Jt,
  Ar as K,
  j as Kt,
  q as L,
  N as Lt,
  Co as M,
  st as Mt,
  Qa as N,
  ot as Nt,
  Za as O,
  qt as Ot,
  Ni as P,
  Be as Pt,
  $r as Q,
  E as Qt,
  pi as R,
  he as Rt,
  Oo as S,
  Zt as St,
  Po as T,
  L as Tt,
  xi as U,
  pe as Ut,
  vi as V,
  ge as Vt,
  Mr as W,
  be as Wt,
  Cr as X,
  D as Xt,
  zr as Y,
  O as Yt,
  si as Z,
  ce as Zt,
  qi as _,
  xn as _t,
  Ki as a,
  c as an,
  hr as at,
  wo as b,
  un as bt,
  ca as c,
  cr as ct,
  Qi as d,
  V as dt,
  ae as en,
  ti as et,
  Zi as f,
  wn as ft,
  Hi as g,
  Mn as gt,
  ja as h,
  Cn as ht,
  jo as i,
  u as in,
  ur as it,
  zi as j,
  ze as jt,
  Eo as k,
  P as kt,
  Xi as l,
  lr as lt,
  Na as m,
  Fn as mt,
  Ra as n,
  de as nn,
  ni as nt,
  Y as o,
  s as on,
  pr as ot,
  J as p,
  In as pt,
  Rr as q,
  f as qt,
  Bi as r,
  d as rn,
  Ir as rt,
  Gi as s,
  l as sn,
  yr as st,
  la as t,
  re as tn,
  Qr as tt,
  Yi as u,
  Sn as ut,
  No as v,
  En as vt,
  Ao as w,
  xt as wt,
  Bo as x,
  $t as xt,
  ko as y,
  ln as yt,
  Si as z,
  ue as zt,
};
//# sourceMappingURL=sim-CCeMdhLh.js.map
