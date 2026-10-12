// assets__sim-D8F3HPJq 11 — math
// Lines 3002-3341 of readable/assets__sim-D8F3HPJq.pretty.js (statement-aligned).
function Gn(e) {
  if (e in Wn) return Wn[e];
  let t = null;
  if (e === `c5`) t = `galaxy`;
  else if (e === `c130`) t = B(Ne());
  else if (e === `p51` || e === `corsair`) t = `warbird`;
  else if (e === `tug`) t = B(O());
  else if (e === `cart`) t = B([[-1.1, 0, -0.75, 1.1, 1.25, 0.75]]);
  else if (e === `dolly`) t = B([[-2.12, 0, -1.25, 2.12, 2.33, 1.25]]);
  else if (e === `gpu`) t = B([[-1.82, 0, -0.9, 1.82, 1.58, 0.9]]);
  else if (e === `bus`) t = B([[-4.68, 0, -1.26, 4.68, 3.05, 1.26]]);
  else if (e === `forklift`) t = B([[-1.85, 0, -0.64, 1.85, 2.2, 0.64]]);
  else if (e === `lighttower`) t = B([[-1.6, 0, -0.9, 1.6, 2, 0.9]]);
  else if (e === `stand`) t = B([[-1.4, 0, -0.65, 1.4, 3.4, 0.65]]);
  else if (e === `engine`) t = B([[-2.3, 0, -0.69, 2.3, 1.9, 0.69]]);
  else if (e === `tent`) t = B([[-4.88, 0, -2.45, 4.88, 3.05, 2.45]]);
  else if (e === `pickup`) t = B([[-2.95, 0, -0.98, 2.95, 1.95, 0.98]]);
  else if (e === `barriers`) t = B([[-15, 0, -0.3, 15, 0.81, 0.3]]);
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
      b52: ge,
      chinook: _e,
      blackhawk: be,
      bizjet: Se,
      humvee: Ce,
      stair: ve,
      fire: ye,
    }[e];
    n && e === `b52`
      ? (t = B([
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
        ? (t = B([
            [n.tail, 0.8, -1.5, n.nose, 4.2, 1.5],
            [-6, 1.4, -n.span / 2, 4, 2.6, n.span / 2],
            [n.tail, 4.2, -0.3, n.tail + 5, n.height, 0.3],
          ]))
        : n && e === `blackhawk`
          ? (t = B([
              [-9.6, 0.4, -1.2, 5.6, 3.2, 1.2],
              [-9.6, 3.2, -0.4, -8.2, 5, 0.4],
            ]))
          : n && e === `chinook`
            ? (t = B([
                [n.tail, 0.5, -1.9, n.nose, 4.2, 1.9],
                [n.tail, 4.2, -1, n.tail + 4, n.aftHub[1], 1],
              ]))
            : n && (t = B(Un(n.length, n.width, n.height)));
  }
  return (Wn[e] = t);
}
var Kn = (e) =>
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
    })[e] ?? 10) * Hn,
  qn = 60,
  Jn = j.bg,
  Yn = Math.PI * 2,
  Xn = (e) => Math.max(0, Math.min(1, e)),
  Zn = (e) => {
    let t = Xn(e);
    return t * t * (3 - 2 * t);
  },
  Qn = (e, t) => (e.epoch == null || t < e.epoch ? null : (t - e.epoch) / qn),
  $n = (e) => {
    let t = (e | 0) ^ 625341585;
    return (
      (t = Math.imul(t ^ (t >>> 16), 73244475)),
      (t = Math.imul(t ^ (t >>> 16), 73244475)),
      (t ^ (t >>> 16)) >>> 0
    );
  },
  er = (e, t) => Math.atan2(-t, e),
  tr = (e, t, n) => e + (((((t - e + Math.PI) % Yn) + Yn) % Yn) - Math.PI) * n,
  V = Object.freeze({
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
  nr = V.spin + V.lift + V.out,
  rr = nr + V.loop,
  ir = rr + V.back,
  ar = ir + V.land,
  or = ar + V.down;
function sr(e, t) {
  let n = t - V.first;
  if (n < 0) return null;
  let r = Math.floor(n / V.period),
    i = e.helos.length,
    a = $n(r * 13 + 5) % i,
    o = (a + 1 + ($n(r * 29 + 3) % (i - 1))) % i;
  return { c: r, t: n - r * V.period, k: a, idle: o };
}
function cr(e) {
  let t = Yn * V.rps;
  if (e < V.spin) return (t * e * e) / (2 * V.spin);
  let n = (t * V.spin) / 2;
  if (e < ar) return n + t * (e - V.spin);
  let r = Math.min(e - ar, V.down);
  return n + t * (ar - V.spin) + t * (r - (r * r) / (2 * V.down));
}
var lr = (e) => [V.a * Math.cos(e), V.cz + V.b * Math.sin(e)];
function ur(e, t, n) {
  let [r, i] = e.helos[t],
    a = {
      x: r,
      y: N.surfaceY,
      z: i,
      yaw: 0,
      pitch: 0,
      bank: 0,
      rotor: 0,
      tail: 0,
      flying: !1,
    },
    o = Qn(e, n);
  if (o == null) return a;
  let s = sr(e, o);
  if (!s) return a;
  if (s.idle === t)
    return ((a.rotor = o * Yn * V.idle), (a.tail = a.rotor * 4.6), a);
  if (s.k !== t) return a;
  let c = s.t;
  if (c >= or) return a;
  ((a.rotor = cr(c)), (a.tail = a.rotor * 4.6));
  let l = Math.atan2((i - V.cz) / V.b, r / V.a),
    u = lr(l),
    d = [-V.a * Math.sin(l), V.b * Math.cos(l)];
  if (c < V.spin) return a;
  a.flying = !0;
  let f = N.surfaceY;
  if (c < V.spin + V.lift)
    return (
      (a.y = f + V.hover * Zn((c - V.spin) / V.lift)),
      (a.pitch = 0.03),
      a
    );
  if (c < nr) {
    let e = Zn((c - V.spin - V.lift) / V.out),
      t = er(u[0] - r, u[1] - i),
      n = er(d[0], d[1]);
    return (
      (a.x = r + (u[0] - r) * e),
      (a.z = i + (u[1] - i) * e),
      (a.y = f + V.hover + (V.alt - V.hover) * e),
      (a.yaw = e < 0.5 ? tr(0, t, Zn(e * 2)) : tr(t, n, Zn(e * 2 - 1))),
      (a.pitch = -0.14 * Math.sin(Math.PI * e)),
      a
    );
  }
  if (c < rr) {
    let e = l + (Yn * (c - nr)) / V.loop,
      t = lr(e);
    return (
      (a.x = t[0]),
      (a.z = t[1]),
      (a.y = f + V.alt),
      (a.yaw = er(-V.a * Math.sin(e), V.b * Math.cos(e))),
      (a.pitch = -0.12),
      (a.bank = -0.32),
      a
    );
  }
  if (c < ir) {
    let e = Zn((c - rr) / V.back),
      t = er(r - u[0], i - u[1]),
      n = er(d[0], d[1]);
    return (
      (a.x = u[0] + (r - u[0]) * e),
      (a.z = u[1] + (i - u[1]) * e),
      (a.y = f + V.alt + (V.hover - V.alt) * e),
      (a.yaw = e < 0.5 ? tr(n, t, Zn(e * 2)) : tr(t, 0, Zn(e * 2 - 1))),
      (a.pitch = 0.1 * Math.sin(Math.PI * e)),
      a
    );
  }
  return c < ar
    ? ((a.y = f + V.hover * (1 - Zn((c - ir) / V.land))), a)
    : ((a.flying = !1), a);
}
function dr(e, t, n) {
  let r = Qn(e, n);
  if (r == null) return null;
  let i = sr(e, r);
  return i
    ? i.idle === t
      ? { idle: !0, t: i.t }
      : i.k !== t || i.t >= or
        ? null
        : { idle: !1, t: i.t }
    : null;
}
var fr = Object.freeze({
    spin: V.spin,
    lift: V.spin + V.lift,
    loopStart: nr,
    loopEnd: rr,
    land: ir,
    down: ar,
    end: or,
  }),
  pr = Object.freeze(
    [
      [-9.6, 0.4, -1.2, 5.6, 3.2, 1.2],
      [-9.6, 3.2, -0.4, -8.2, 5, 0.4],
    ].map((e) => e.map((e) => e * Jn)),
  ),
  mr = Object.freeze({
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
function hr(e, t, n) {
  let r = Qn(e, n),
    i = {
      x: 0,
      y: N.surfaceY,
      z: 0,
      yaw: Math.PI,
      pitch: -0.08,
      visible: !1,
      rotor: 0,
    };
  if (r == null) return i;
  let a = r - mr.first;
  if (a < 0) return i;
  let o = a % mr.period;
  if (o > (mr.from - mr.to) / mr.speed) return i;
  let [s, c, l] = mr.slots[t];
  return (
    (i.x = mr.from - mr.speed * o - s),
    (i.y = N.surfaceY + mr.height + c),
    (i.z = mr.z + l),
    (i.visible = !0),
    (i.rotor = r * Yn * mr.rps),
    i
  );
}
var gr = Object.freeze(
    [[_e.tail, 0.5, -1.9, _e.nose, 4.2, 1.9]].map((e) => e.map((e) => e * Jn)),
  ),
  _r = Object.freeze({
    period: 2 * wt,
    taxiOut: [180, 36],
    lineUp: [216, 4],
    roll: [220, 30],
    climb: [250, 30],
    approach: [292, 30],
    rollout: [322, 25],
    taxiIn: [347, 32],
    hold: Object.freeze([-640, j.rowTaxiZ]),
    entryX: -600,
    lineX: -540,
    rollA: 2.4,
    touchX: 450,
    vTouch: 65,
    vExit: 15,
  }),
  vr = N.runwayZ,
  yr = null,
  br = () =>
    (yr ??= (() => {
      let [e, t] = _r.hold;
      return {
        out: Ze(
          Xe(
            [
              [e, t],
              [_r.entryX, t],
              [_r.entryX, vr],
              [_r.lineX, vr],
            ],
            24,
          ),
        ),
        in: Ze(
          Xe(
            [
              [_r.lineX - 10, vr],
              [-700, vr],
              [-700, t],
              [e, t],
            ],
            24,
          ),
        ),
      };
    })());
