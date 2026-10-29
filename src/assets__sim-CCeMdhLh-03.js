// assets__sim-CCeMdhLh 03 — freeze
// Lines 541-844 of readable/assets__sim-CCeMdhLh.pretty.js (statement-aligned).
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
