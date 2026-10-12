// assets__sim-D8F3HPJq 05 — math
// Lines 1177-1517 of readable/assets__sim-D8F3HPJq.pretty.js (statement-aligned).
var yt = Math.PI * 2,
  bt = 60,
  xt = (e) => Math.max(0, Math.min(1, e)),
  St = (e) => {
    let t = xt(e);
    return t * t * (3 - 2 * t);
  },
  N = Object.freeze({
    hz: bt,
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
  P = Object.freeze({
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
  Ct = Object.entries(P),
  wt = Ct.reduce((e, [, t]) => e + t, 0),
  Tt = Object.freeze(
    Object.fromEntries(
      Ct.map(([e], t) => [e, Ct.slice(0, t).reduce((e, [, t]) => e + t, 0)]),
    ),
  );
function Et(e, t, n, r, i, a) {
  let o = xt(e / t),
    s = o * o,
    c = s * o;
  return (
    (2 * c - 3 * s + 1) * n +
    (c - 2 * s + o) * t * i +
    (-2 * c + 3 * s) * r +
    (c - s) * t * a
  );
}
function Dt(e, t, n, r) {
  let i = n - e,
    a = r - t;
  return {
    length: Math.hypot(i, a),
    at: (n) => ({ x: e + i * n, z: t + a * n, dx: i, dz: a }),
  };
}
function Ot(e, t, n, r, i = 1) {
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
function kt(e, t, n, r) {
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
      let t = xt(e) * s,
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
var F = N,
  At = [
    kt([F.standX, F.standZ], [390, F.standZ], [390, F.taxiZ], [420, F.taxiZ]),
    Dt(420, F.taxiZ, F.departureX, F.taxiZ),
    Ot(F.departureX, (F.runwayZ + F.taxiZ) / 2, F.turnRadius, Math.PI / 2, -1),
  ],
  jt = [Ot(F.exitX, (F.runwayZ + F.taxiZ) / 2, F.turnRadius, -Math.PI / 2, -1)],
  Mt = [
    Dt(F.exitX, F.taxiZ, 320, F.taxiZ),
    kt([320, F.taxiZ], [340, F.taxiZ], [340, F.standZ], [F.standX, F.standZ]),
  ],
  Nt = (e) => e.reduce((e, t) => e + t.length, 0),
  Pt = Nt(At),
  Ft = Nt(jt),
  It = Nt(Mt);
function Lt(e, t, n) {
  let r = Math.max(0, n),
    i = t[t.length - 1];
  for (let e of t) {
    if (((i = e), r <= e.length || e === t[t.length - 1])) break;
    r -= e.length;
  }
  let a = i.at(xt(r / i.length));
  ((e.x = a.x),
    (e.z = a.z),
    (e.yaw = Math.atan2(-a.dz, a.dx)),
    e.yaw < 0 && (e.yaw += yt));
}
var Rt = F.departureX - F.westX,
  zt = (2 * Rt) / P.takeoff,
  Bt = P.takeoff * Math.sqrt((F.departureX - 100) / Rt),
  Vt = 55,
  Ht = 8,
  Ut = (95 - zt) / P.climb,
  Wt = Math.atan2(Ht, zt),
  Gt = (3.5 * Math.PI) / 180,
  Kt = P.touchdown + P.rollout,
  qt = 58,
  Jt = 4.5,
  Yt = 8;
function Xt(e, t = 0) {
  let n = {
    phase: `parked`,
    scale: F.scale,
    x: F.standX,
    y: F.surfaceY,
    z: F.standZ,
    yaw: 0,
    pitch: 0,
    visible: !0,
    gear: 1,
    propAngle: 0,
    smokeAge: -1,
    cycle: -1,
  };
  if (!Number.isFinite(e) || !Number.isFinite(t) || e < t) return n;
  let r = (e - t) / bt;
  n.cycle = Math.floor(r / wt);
  let i = r - n.cycle * wt;
  for (let [e, t] of Ct) {
    if (i < t) {
      n.phase = e;
      break;
    }
    i -= t;
  }
  switch (((n.propAngle = ((r * 17) % 1) * yt), n.phase)) {
    case `taxiOut`:
      Lt(n, At, Pt * St(i / P.taxiOut));
      break;
    case `lineUp`:
      ((n.x = F.departureX), (n.z = F.runwayZ), (n.yaw = Math.PI));
      break;
    case `takeoff`:
      ((n.x = F.departureX - Rt * (i / P.takeoff) ** 2),
        (n.z = F.runwayZ),
        (n.yaw = Math.PI),
        (n.pitch = Wt * St((i - Bt + 2.5) / 5.5)),
        i > Bt && (n.y += Et(i - Bt, P.takeoff - Bt, 0, Vt, 0, Ht)));
      break;
    case `climb`:
    case `hidden`: {
      let e = n.phase === `hidden` ? P.climb : i;
      ((n.x = F.westX - zt * e - 0.5 * Ut * e ** 2),
        (n.z = F.runwayZ),
        (n.y += Vt + Ht * e + 0.05 * e ** 2),
        (n.yaw = Math.PI),
        (n.pitch = Math.atan2(Ht + 0.1 * e, zt + Ut * e)),
        (n.gear = 1 - St((e - 2) / 3)),
        (n.visible = n.phase !== `hidden`));
      break;
    }
    case `approach`:
      ((n.x = Et(i, P.approach, F.approachX, F.touchdownX, -72, -58)),
        (n.z = F.runwayZ),
        (n.y += Et(i, P.approach, F.approachHeight, 0, -5.2, 0)),
        (n.yaw = Math.PI),
        (n.pitch = ((3 + 0.5 * St(i / P.approach)) * Math.PI) / 180),
        (n.gear = St((i - 18) / 3)));
      break;
    case `touchdown`:
    case `rollout`: {
      let e = i + (n.phase === `rollout` ? P.touchdown : 0);
      ((n.x = F.touchdownX - qt * e + (26.75 / Kt) * e ** 2),
        (n.z = F.runwayZ),
        (n.yaw = Math.PI),
        (n.pitch = Gt * (1 - St(e / P.touchdown))),
        (n.smokeAge = e <= F.smokeSeconds ? e : -1));
      break;
    }
    case `turnOff`:
      Lt(n, jt, Et(i, P.turnOff, 0, Ft, Jt, Yt));
      break;
    case `taxiBack`:
      Lt(n, Mt, Et(i, P.taxiBack, 0, It, Yt, 0));
  }
  return n;
}
var I = {
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
function Zt() {
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
var Qt = (e, t, n, r) => [
  [e, n, t * 0.65],
  [e, n + 0.4, t],
  [e, r - 0.6, t],
  [e, r, t * 0.65],
  [e, r, -t * 0.65],
  [e, r - 0.6, -t],
  [e, n + 0.4, -t],
  [e, n, -t * 0.65],
];
