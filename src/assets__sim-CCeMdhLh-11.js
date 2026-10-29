// assets__sim-CCeMdhLh 11 — math
// Lines 3016-3355 of readable/assets__sim-CCeMdhLh.pretty.js (statement-aligned).
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
