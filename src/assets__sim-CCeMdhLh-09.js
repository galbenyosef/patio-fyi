// assets__sim-CCeMdhLh 09 — math
// Lines 2352-2699 of readable/assets__sim-CCeMdhLh.pretty.js (statement-aligned).
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
