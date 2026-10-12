// assets__sim-D8F3HPJq 09 — math
// Lines 2349-2696 of readable/assets__sim-D8F3HPJq.pretty.js (statement-aligned).
var mn;
function hn() {
  if (mn) return mn;
  let e = pn(`c`),
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
  return ((mn = { shape: i(t, n), bounds: a }), mn);
}
function gn(e, t, n = 1, r = !1) {
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
function _n(e, t = 1) {
  let n = hn().bounds,
    r = [1 / 0, 1 / 0, 1 / 0, -1 / 0, -1 / 0, -1 / 0];
  for (let i = 0; i < 8; i++) {
    let a = gn([n[i & 1 ? 3 : 0], n[i & 2 ? 4 : 1], n[i & 4 ? 5 : 2]], e, t);
    for (let e = 0; e < 3; e++)
      ((r[e] = Math.min(r[e], a[e] - 0.01)),
        (r[e + 3] = Math.max(r[e + 3], a[e] + 0.01)));
  }
  return r;
}
function vn(e, t, n, r, i = 1) {
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
    p = a(hn().shape, ...d, ...f, 0, r);
  return p
    ? {
        dist: p.dist,
        point: t.map((e, t) => e + n[t] * p.dist),
        normal: gn(p.normal, e, 1, !0),
        surface: p.mat === 1 ? `glass` : `metal`,
        pen: `metal`,
      }
    : null;
}
var yn = 60,
  L = (e) => (e <= 0 ? 0 : e >= 1 ? 1 : e * e * (3 - 2 * e)),
  bn = Math.PI * 2,
  xn = (e, t) => (e.epoch == null || t < e.epoch ? null : (t - e.epoch) / yn),
  R = Object.freeze({
    period: 2 * wt,
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
  Sn = new WeakMap(),
  Cn = (e) => {
    let t = Sn.get(e);
    if (t) return t;
    let [n, r] = e.transport2Spot ?? [156.5, -226],
      i = N.runwayZ;
    return (
      (t = {
        out: Ze(
          Xe(
            [
              [n, r],
              [n, j.rowTaxiZ],
              [j.outLink, j.rowTaxiZ],
              [j.outLink, i - 12],
              [j.outLink - 14, i],
            ],
            14,
          ),
        ),
        back: Ze(
          Xe(
            [
              [j.inLink + 30, i],
              [j.inLink, i - 14],
              [j.inLink, j.rowTaxiZ],
              [n + 20, j.rowTaxiZ],
            ],
            14,
          ),
        ),
        rev: Ze([
          ...Qe(n + 20, j.rowTaxiZ - 20, 20, Math.PI / 2, Math.PI),
          [n, r],
        ]),
      }),
      Sn.set(e, t),
      t
    );
  };
function wn(e, t) {
  let [n, r] = e.transport2Spot ?? [156.5, -226],
    i = Cn(e),
    a = xn(e, t),
    o = {
      phase: `parked`,
      scale: j.bg,
      x: n,
      y: N.surfaceY,
      z: r,
      yaw: -Math.PI / 2,
      pitch: 0,
      visible: !0,
      gear: 1,
      propAngle: 0,
      smokeAge: -1,
    };
  if (a == null || a < R.taxiOut[0]) return o;
  let s = ((a % R.period) + R.period) % R.period,
    c = (e) => {
      let [t, n] = R[e],
        r = (((s - t) % R.period) + R.period) % R.period;
      return r < n ? r : -1;
    },
    l = N.runwayZ,
    u = (e) => {
      ((o.x = e.x), (o.z = e.z), (o.yaw = e.yaw));
    },
    d = () => {
      o.propAngle = ((a * 17) % 1) * bn;
    },
    f;
  if ((f = c(`taxiOut`)) >= 0)
    ((o.phase = `taxiOut`),
      u(i.out.at(i.out.length * L(f / R.taxiOut[1]))),
      d());
  else if ((f = c(`lineUp`)) >= 0)
    ((o.phase = `lineUp`),
      (o.x = i.out.at(i.out.length).x),
      (o.z = l),
      (o.yaw = Math.PI),
      d());
  else if ((f = c(`takeoff`)) >= 0) {
    o.phase = `takeoff`;
    let e = j.outLink - 14,
      t = R.takeoff[1];
    ((o.x = e - 820 * (f / t) ** 2), (o.z = l), (o.yaw = Math.PI), d());
    let n = t * 0.72;
    if (f > n) {
      let e = f - n;
      ((o.y += 1.6 * e * e), (o.pitch = Math.min(0.14, e * 0.06)));
    }
  } else if ((f = c(`climb`)) >= 0)
    ((o.phase = `climb`),
      (o.x = j.outLink - 14 - 820 - 71 * f - 0.8 * f * f),
      (o.z = l),
      (o.yaw = Math.PI),
      (o.y += 1.6 * (R.takeoff[1] * 0.28) ** 2 + 9 * f + 0.15 * f * f),
      (o.pitch = 0.14),
      (o.gear = 1 - L((f - 2) / 3)),
      d());
  else if ((f = c(`approach`)) >= 0) {
    o.phase = `approach`;
    let e = R.approach[1],
      t = f / e;
    ((o.x = N.approachX + (N.touchdownX - N.approachX) * t),
      (o.z = l),
      (o.yaw = Math.PI),
      (o.y += N.approachHeight * (1 - t) * (1 - t)),
      (o.pitch = 0.055),
      (o.gear = L((f - 18) / 3)),
      d());
  } else if ((f = c(`touchdown`)) >= 0 || (f = c(`rollout`)) >= 0) {
    let e = c(`rollout`),
      t = e >= 0 ? e + R.touchdown[1] : c(`touchdown`);
    o.phase = e >= 0 ? `rollout` : `touchdown`;
    let n = N.touchdownX - (j.inLink + 30),
      r = t / (R.touchdown[1] + R.rollout[1]);
    ((o.x = N.touchdownX - n * (1 - (1 - r) * (1 - r))),
      (o.z = l),
      (o.yaw = Math.PI),
      (o.pitch = 0.06 * (1 - L(t / 3))),
      (o.smokeAge = t < 4 ? t : -1),
      d());
  } else if ((f = c(`taxiBack`)) >= 0)
    ((o.phase = `taxiBack`),
      u(i.back.at(i.back.length * L(f / R.taxiBack[1]))),
      d());
  else if ((f = c(`reverse`)) >= 0) {
    o.phase = `reverse`;
    let e = i.rev.at(i.rev.length * L(f / R.reverse[1]));
    ((o.x = e.x), (o.z = e.z), (o.yaw = e.yaw + Math.PI));
  } else
    s > R.climb[0] + R.climb[1] &&
      s < R.approach[0] &&
      ((o.phase = `hidden`), (o.visible = !1));
  return o;
}
var z = Object.freeze({
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
function Tn(e, t, n) {
  let r = xn(e, n),
    i = {
      x: 0,
      y: N.surfaceY,
      z: 0,
      yaw: Math.PI,
      attitude: 0,
      visible: !1,
      prop: 0,
    };
  if (r == null) return i;
  let a = r - z.first;
  if (a < 0) return i;
  let o = a % z.period;
  if (o > (z.from - z.to) / z.speed) return i;
  let [s, c, l] = z.slots[t];
  return (
    (i.x = z.from - z.speed * o - s),
    (i.y = N.surfaceY + z.height + c),
    (i.z = z.z + l),
    (i.visible = !0),
    (i.prop = r * 45),
    (i.attitude = Ye.p51),
    i
  );
}
var En = Object.freeze([
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
        [-330, j.doorZ + 11],
        [330, j.doorZ + 11],
      ],
      wait: 34,
      speed: 8,
      first: 60,
    },
  ]),
  Dn = En.map((e) => Ze(Xe(e.pts, 12)));
function On(e, t, n) {
  let r = En[t],
    i = Dn[t],
    a = xn(e, n) ?? 0,
    o = i.length / r.speed,
    s = 2 * (o + r.wait),
    c = (((a - (r.first ?? 0)) % s) + s) % s,
    l;
  l =
    c < r.wait
      ? 0
      : c < r.wait + o
        ? i.length * L((c - r.wait) / o)
        : c < 2 * r.wait + o
          ? i.length
          : i.length * (1 - L((c - 2 * r.wait - o) / o));
  let u = i.at(l),
    d = c >= r.wait + o + r.wait;
  return {
    x: u.x,
    y: N.surfaceY,
    z: u.z,
    yaw: u.yaw + (d ? Math.PI : 0),
    moving: (c >= r.wait && c < r.wait + o) || c >= 2 * r.wait + o,
  };
}
var kn = Object.freeze({
    wait: [256, -115],
    aside: [256, 100],
    lead: 25,
    leaders: Object.freeze([0, 2, 4]),
  }),
  An = new WeakMap();
function jn(e) {
  let t = An.get(e.fighters);
  return (t || ((t = $e(e.fighters ?? [])), An.set(e.fighters, t)), t);
}
var Mn = (e) => {
    let t = 0,
      n = 1e9;
    for (let r = e.holdAt; r < e.out.length; r += 1) {
      let i = e.out.at(r),
        a = Math.abs(i.z - j.northTaxiZ) + Math.abs(i.x - j.outLink);
      a < n && ((n = a), (t = r));
    }
    return t;
  },
  Nn = new WeakMap();
function Pn(e, t) {
  let n = Nn.get(e);
  if (n && n.tick === t && n.epoch === e.epoch) return n.p;
  let r = Fn(e, t);
  return (Nn.set(e, { tick: t, epoch: e.epoch, p: r }), r);
}
