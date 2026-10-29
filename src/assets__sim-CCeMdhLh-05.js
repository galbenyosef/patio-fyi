// assets__sim-CCeMdhLh 05 — math
// Lines 1180-1520 of readable/assets__sim-CCeMdhLh.pretty.js (statement-aligned).
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
