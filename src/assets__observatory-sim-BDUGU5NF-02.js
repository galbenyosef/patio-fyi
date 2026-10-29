// assets__observatory-sim-BDUGU5NF 02 — math
// Lines 320-636 of readable/assets__observatory-sim-BDUGU5NF.pretty.js (statement-aligned).
function j(e) {
  let t = e.meteor;
  if (!O.ON || !t?.spots?.length || e.epoch == null) return [];
  if (t._strikes && t._epoch === e.epoch) return t._strikes;
  let n = [],
    r = new Set(),
    i = t.firstAt ?? O.EVERY,
    a = t.every ?? O.EVERY;
  for (let o = 0; o < O.MAX_STRIKES; o++) {
    let s = ie(e.epoch * 31 + o * 7919 + 101),
      c = t.spots.length,
      l = 0,
      u = 0;
    for (
      let e = 0;
      e < c &&
      (([l, u] = t.spots[(Math.floor(s * c) + e * 17) % c]),
      n.some((e) => Math.hypot(e.x - l, e.z - u) < O.APART));
      e++
    );
    let d = null,
      f = O.DISH_REACH;
    for (let t of e.array?.antennas ?? []) {
      if (t.fixed || r.has(t)) continue;
      let e = Math.hypot(t.x - l, t.z - u);
      e < f && ((f = e), (d = t));
    }
    let p = null;
    if (d) {
      r.add(d);
      let e = d.x - l,
        t = d.z - u,
        n = Math.hypot(e, t) || 1,
        i = e / n,
        a = t / n;
      p = {
        x: d.x + i * O.SHIFT,
        y0: d.y0 - O.DROP,
        z: d.z + a * O.SHIFT,
        az: Math.atan2(i, a),
        el: Math.PI / 2 - O.TILT,
      };
    }
    n.push(
      Object.freeze({
        k: o,
        impact: e.epoch + Math.round((i + o * a) * re),
        x: l,
        y: e.y,
        z: u,
        dish: d,
        fall: p,
      }),
    );
  }
  return ((t._epoch = e.epoch), (t._strikes = n));
}
var ae = Object.freeze({ az: Math.atan2(A[0], A[2]), el: Math.asin(A[1]) });
function oe(e, t) {
  let n = 0;
  for (let r of j(e)) {
    let e = M(r, t);
    if (e < -O.WARN || e > O.TRACK_OUT[1]) continue;
    let i = Math.min(1, Math.max(0, (e + O.WARN) / O.TRACK_IN)),
      a = Math.min(
        1,
        Math.max(0, (e - O.TRACK_OUT[0]) / (O.TRACK_OUT[1] - O.TRACK_OUT[0])),
      ),
      o = (e) => e * e * (3 - 2 * e);
    n = Math.max(n, o(i) * (1 - o(a)));
  }
  return n;
}
var M = (e, t) => (t - e.impact) / re;
function se(e, t) {
  let n = Math.max(O.INBOUND, O.ALARM, ...k.map((e) => e.t)) + 1;
  return j(e).filter((e) => {
    let r = M(e, t);
    return r > -n && r < O.SMOKE;
  });
}
function ce(e, t) {
  let n = M(e, t);
  return n < 0
    ? 0
    : Math.max(
        0,
        n < O.BURN
          ? Math.min(1, n / 3)
          : 1 - Math.min(1, (n - O.BURN) / O.EMBER),
      );
}
function le(e, t) {
  let n = e.meteor;
  if (n._hotTick === t && n._hotEpoch === e.epoch) return n._hot;
  let r = [],
    i = [];
  for (let n of j(e)) {
    let e = M(n, t);
    (e > -12 && e < O.BURN + O.EMBER && r.push(n),
      ce(n, t) > 0.05 && i.push(n));
  }
  return (
    (n._hotTick = t),
    (n._hotEpoch = e.epoch),
    (n._hot = { hot: r, burning: i })
  );
}
function N(e, t, n, r) {
  for (let i of le(e, t).hot)
    if (Math.hypot(n[0] - i.x, n[2] - i.z) < r) return !0;
  return !1;
}
function ue(e, t, n, r, i, a = 0) {
  if (r >= e.y + 2) return !1;
  for (let r of le(e, t).burning)
    if (Math.hypot(n - r.x, i - r.z) < O.FIRE_R + a) return !0;
  return !1;
}
var P = (e, t) => {
  if (!t) return null;
  let n = j(e),
    r = e.meteor;
  return (
    r._byDishFor !== n &&
      ((r._byDishFor = n),
      (r._byDish = new Map(n.filter((e) => e.dish).map((e) => [e.dish, e])))),
    r._byDish.get(t) ?? null
  );
};
function F(e, t, n) {
  let r = P(e, t);
  if (!r || M(r, n) < O.FALL) return null;
  let i = r.fall;
  return { A: { x: i.x, y0: i.y0, z: i.z }, pose: { az: i.az, el: i.el } };
}
function de(e, t, n) {
  let r = P(e, t);
  if (!r) return 0;
  let i = M(r, n);
  if (i <= 0) return 0;
  let a = Math.min(1, i / O.FALL);
  return a * a;
}
function fe(e, t) {
  return P(e, t);
}
function pe({
  zone: e,
  spawns: t,
  antennas: n,
  keepOut: r = [],
  domes: i = [],
}) {
  let a = [];
  for (let o = e[0] + 5; o <= e[2] - 5; o += 3)
    for (let s = e[1] + 5; s <= e[3] - 5; s += 3)
      t.some((e) => Math.hypot(o - e.pos[0], s - e.pos[2]) < 12) ||
        n.some((e) => Math.hypot(o - e.x, s - e.z) < 4.6) ||
        r.some(
          (e) =>
            o > e[0] - O.RIM_R - 1 &&
            o < e[2] + O.RIM_R + 1 &&
            s > e[1] - O.RIM_R - 1 &&
            s < e[3] + O.RIM_R + 1,
        ) ||
        i.some((e) => Math.hypot(o - e.x, s - e.z) < e.r + 8) ||
        a.push([o, s]);
  return a;
}
function me(e, t) {
  let n = e.x + Math.sin(e.az) * 1.2,
    r = e.z + Math.cos(e.az) * 1.2;
  return [n - 3.6, t, r - 3.6, n + 3.6, t + 2.4, r + 3.6];
}
var I = 60,
  he = 240,
  L = Math.PI / 2 / 4,
  R = (e, t, n) => {
    let r = Math.max(0, Math.min(1, (n - e) / (t - e)));
    return r * r * (3 - 2 * r);
  };
function z(e, t) {
  return e.epoch == null || t < e.epoch ? 0 : ((t - e.epoch) / I) % 240;
}
var B = (e) => 14 + e.index * 26,
  ge = (e) => (e.laser ? 30 : 20);
function V(e, t) {
  let n = B(e),
    r = ge(e),
    i = R(n, n + r, t) - R(n + 120, n + 120 + r, t),
    a = R(n + r, n + r + 9, t) - R(n + 120 + r, n + 129 + r, t),
    o = e.open0 ? 1 - a : a,
    s = (t > n && t < n + r) || (t > n + 120 && t < n + 120 + r),
    c = (t > n + r && t < n + r + 9) || (t > n + 120 + r && t < n + 129 + r);
  return {
    az: e.azA + (e.azB - e.azA) * i,
    alt: e.altA + (e.altB - e.altA) * i,
    open: o,
    slewing: s,
    rolling: c,
  };
}
var H = (e, t, n) => x(e, t, n, V(t, z(e, n)));
function _e(e, t) {
  let n = e.domes.find((e) => e.laser);
  if (!n) return 0;
  let r = H(e, n, t);
  return r.slewing ? 0 : R(0.92, 1, r.open);
}
function ve(e, t) {
  let n = z(e, t),
    r = 1 / 0,
    i = null;
  for (let t of e.domes)
    for (let e of [B(t), B(t) + 120, B(t) + 240])
      e > n && e - n < r && ((r = e - n), (i = t.name));
  return { in: r, dome: i };
}
function U(e) {
  let t = [],
    n = Math.max(20, Math.round(e.r * 2.2)),
    r = e.r * Math.cos(L / 2),
    i = e.r * Math.sin(L) + 0.05,
    a = r * Math.tan(Math.PI / n) + 0.06;
  for (let e = 0; e < n; e++)
    t.push({ a: ((e + 0.5) / n) * Math.PI * 2, rr: r, y0: 0, y1: i, hz: a });
  return t;
}
function ye(e, t, n) {
  let r = n[0] - e.x,
    i = n[2] - e.z,
    a = Math.atan2(r, i) - t.az,
    o = Math.hypot(r, i),
    s = o * Math.sin(a),
    c = o * Math.cos(a);
  return (
    n[1] - (e.y0 + e.drumH) > e.r * Math.sin(L) &&
    Math.abs(s) < e.slotW / 2 &&
    c > -0.28 * e.r
  );
}
function be(e, t, n, r, i) {
  let a = [e.x, e.y0 + e.drumH, e.z],
    o = [n[0] - a[0], n[1] - a[1], n[2] - a[2]],
    s = o[0] * r[0] + o[1] * r[1] + o[2] * r[2],
    c = o[0] * o[0] + o[1] * o[1] + o[2] * o[2] - e.r * e.r,
    l = s * s - c;
  if (l < 0) return null;
  let u = Math.sqrt(l);
  for (let o of [-s - u, -s + u]) {
    if (o < 0 || o > i) continue;
    let s = [n[0] + r[0] * o, n[1] + r[1] * o, n[2] + r[2] * o];
    if (!(s[1] < a[1]) && !(t.open >= 0.5 && ye(e, t, s)))
      return {
        point: s,
        normal: [(s[0] - a[0]) / e.r, (s[1] - a[1]) / e.r, (s[2] - a[2]) / e.r],
        dist: o,
        surface: `metal`,
      };
  }
  return null;
}
function W(e, t) {
  let n = [e.x, e.y0 + (e.floorY || 0) + 0.6, e.z],
    r = Math.cos(t.alt),
    i = Math.sin(t.alt),
    a = Math.cos(t.az),
    o = Math.sin(t.az);
  return {
    base: n,
    piv: [n[0], n[1] + e.r * 0.32, n[2]],
    d: [o * r, i, a * r],
    u: [a, 0, -o],
    v: [o * i, -r, a * i],
    L: e.r * 0.95,
    tr: e.r * 0.17,
  };
}
function G(e, t, n, r, i, a, o, s, c, l = i) {
  let u = null,
    d = e[1] - n,
    f = e[2] - r,
    p = (l - i) / (o - a),
    m = i + p * (e[0] - a),
    h = t[1] * t[1] + t[2] * t[2] - p * p * t[0] * t[0],
    g = 2 * (d * t[1] + f * t[2] - m * p * t[0]),
    _ = d * d + f * f - m * m;
  if (Math.abs(h) > 1e-12) {
    let n = g * g - 4 * h * _;
    if (n >= 0) {
      let r = Math.sqrt(n);
      for (let n of [(-g - r) / (2 * h), (-g + r) / (2 * h)]) {
        if (n < 0 || n > c || (u && n >= u.t)) continue;
        let r = e[0] + t[0] * n;
        if (r < a || r > o) continue;
        let i = d + t[1] * n,
          s = f + t[2] * n,
          l = Math.hypot(i, s) || 1,
          m = Math.hypot(1, p);
        u = { t: n, n: [-p / m, i / l / m, s / l / m] };
      }
    }
  }
  if (s && Math.abs(t[0]) > 1e-12)
    for (let [n, r, s] of [
      [a, -1, i],
      [o, 1, l],
    ]) {
      let i = (n - e[0]) / t[0];
      if (i < 0 || i > c || (u && i >= u.t)) continue;
      let a = d + t[1] * i,
        o = f + t[2] * i;
      a * a + o * o > s * s || (u = { t: i, n: [r, 0, 0] });
    }
  return u;
}
