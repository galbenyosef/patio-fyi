// assets__sim-D8F3HPJq 03 — freeze
// Lines 541-841 of readable/assets__sim-D8F3HPJq.pretty.js (statement-aligned).
var he = Object.freeze({ height: 1.8, hip: 0.86, shoulder: 1.38 }),
  ge = Object.freeze({
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
  _e = Object.freeze({
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
  ve = Object.freeze({ length: 7, width: 2.3, height: 3.5 }),
  ye = Object.freeze({ length: 11, width: 3, height: 3.6 }),
  be = Object.freeze({ length: 15.27, height: 5.13, rotorDiameter: 16.36 }),
  xe = 10462888,
  Se = Object.freeze({
    length: 29.98,
    span: 31.39,
    height: 7.8,
    nose: 11.8,
    tail: -16.1,
  }),
  Ce = Object.freeze({
    length: 4.93,
    width: 2.3,
    height: 1.86,
    wheelX: 1.65,
    track: 1.82,
    wheelR: 0.43,
  }),
  we = te(),
  Te = f.floor,
  Ee = f.hold.halfWidth,
  De = f.skin.halfWidth,
  Oe = f.crewDoor,
  A = Object.freeze({
    length: f.length,
    span: f.span,
    tailTop: f.tailTop,
    nose: f.nose,
    tail: f.tail,
    floor: Te,
    hold: Object.freeze({
      x0: f.hold.x0,
      x1: f.hold.x1,
      hw: Ee,
      h: f.hold.ceiling - Te,
    }),
    rampFoot: we.x0,
    cockpit: Object.freeze({
      x0: f.cockpit.x0,
      x1: 10.3,
      floor: f.cockpit.floor,
    }),
    crewDoor: Object.freeze({
      x0: Oe.x0,
      x1: Oe.x1,
      top: Oe.y1,
      stepOut: 2.45,
    }),
    wingY: f.wing.under,
    towFitting: f.towFitting[0],
  }),
  ke = Object.freeze({
    length: E.length,
    width: E.width,
    height: E.height,
    hitch: E.hitch[0],
    towBar: D.length,
    offset: ne,
  }),
  Ae = Object.freeze({ w: ce.width, h: ce.height, t: ce.thick }),
  je = new Set([`keel`, `cockpit floor`, `ramp`, `airstair`]),
  Me = (e) => je.has(e.part) || (e.part === `belly` && e.b[0] === f.hold.x0),
  Ne = () =>
    w()
      .filter((e) => !Me(e))
      .map((e) => e.b.slice());
function Pe() {
  return [
    {
      id: `hold-floor`,
      box: [f.hold.x0, 0.45, -De, 8.4, Te, De],
      h: () => Te,
      thickness: Te - 0.45,
    },
    {
      id: `cockpit-floor`,
      box: [f.cockpit.x0, Te, -Ee, 10.3, f.cockpit.floor, Ee],
      h: () => f.cockpit.floor,
      thickness: f.cockpit.floor - Te,
    },
    {
      id: `ramp`,
      box: [we.x0, 0, we.z0, we.x1, we.y1, we.z1],
      h: (e) => we.y1 * Math.max(0, Math.min(1, (e - we.x0) / (we.x1 - we.x0))),
      thickness: 0.2,
    },
    {
      id: `crew-steps`,
      box: [Oe.x0, 0, Ee, Oe.x1, Te, 2.45],
      h: (e, t) => (t < De ? Te : t < 2.1 ? 0.7 : 0.35),
      thickness: 0.35,
    },
  ];
}
var Fe = () =>
    T().map((e, t) => ({ id: `plane-glass-${t}`, box: e, index: t })),
  Ie = f.towFitting[0] - ne,
  Le = () => [
    ...O(),
    ...se().map((e) => [e[0] + Ie, e[1], e[2], e[3] + Ie, e[4], e[5]]),
  ],
  Re = () => k({ personnelDoor: !1 }),
  ze = 60,
  j = Object.freeze({
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
  Be = -Math.PI / 2,
  Ve = (e, t) => [-t, e],
  He = ([e, t, n, r, i, a]) => [-a, t, e, -n, i, r],
  Ue = ([e, t, n, r]) => [-r, e, -t, n],
  We = ([e, t, n]) => [n, t, -e],
  Ge = ([e, t, n]) => [-n, t, e];
function Ke(e) {
  let t = { ...e };
  return (
    delete t.aabb,
    e.rayIndexBounds && (t.rayIndexBounds = He(e.rayIndexBounds)),
    Object.defineProperty(t, "aabb", {
      enumerable: !0,
      get() {
        return He(e.aabb);
      },
    }),
    e.raycast &&
      (t.raycast = (t, n, r, ...i) => {
        let a = e.raycast(We(t), We(n), r, ...i);
        return (
          a && {
            ...a,
            point: t.map((e, t) => e + n[t] * a.dist),
            ...(a.normal ? { normal: Ge(a.normal) } : {}),
          }
        );
      }),
    t
  );
}
var qe = (e) => ({
    ...e,
    map: {
      addCollider: (t) => e.map.addCollider(Ke(t)),
      removeCollider: (t) => e.map.removeCollider(t),
    },
  }),
  Je = { p51: de, corsair: fe },
  Ye = { p51: pe(de).pitch, corsair: pe(fe).pitch },
  M = Object.freeze({
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
function Xe(e, t) {
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
function Ze(e) {
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
var Qe = (e, t, n, r, i, a = 24) =>
  Array.from({ length: a + 1 }, (o, s) => {
    let c = r + ((i - r) * s) / a;
    return [e + n * Math.cos(c), t + n * Math.sin(c)];
  });
