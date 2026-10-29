// assets__synth-B52TAiVy 14 — gain
// Lines 3501-3790 of readable/assets__synth-B52TAiVy.pretty.js (statement-aligned).
function yt(e, t, n, r) {
  let i = r.rand,
    a = l(e),
    o = (n, r) => {
      let o = h(e, `sine`, 62 + i() * 12, n, 0.6);
      (y(o.frequency, 62 + i() * 12, 36, n, 0.5),
        v(o, g(e, n, 0.003, 0.55 * r, 0.45), t),
        v(
          m(e, a.brown, n, 0.35, 1, i),
          _(e, `lowpass`, 340, 0.8),
          g(e, n, 0.002, 0.5 * r, 0.28),
          t,
        ),
        v(
          m(e, a.white, n, 0.06, 1, i),
          _(e, `bandpass`, 1300, 0.8),
          g(e, n, 0.001, 0.25 * r, 0.04),
          t,
        ));
      let s = 170 + i() * 30;
      for (let [i, a, o] of [
        [1, 1.3, 0.08],
        [1.59, 1, 0.06],
        [2.38, 0.8, 0.045],
        [3.41, 0.55, 0.03],
      ])
        x(e, t, n, { freq: s * i, dur: a, gain: o * r, type: `sine` });
    };
  o(n, 1);
  let s = n + 1.4;
  if (i() < 0.45) {
    let e = n + 0.3 + i() * 0.35;
    (o(e, 0.35), (s = e + 1.4));
  }
  return s;
}
function bt(e, t, n, r) {
  let i = r.rand,
    a = r.duration ?? 1.7 + i() * 0.7,
    o = 1050 + i() * 120,
    s = 18 + i() * 4,
    c = e.createGain(),
    u = c.gain;
  u.setValueAtTime(p, n);
  for (let e = 0, t = n; t < n + a; e++, t = n + e / s)
    (u.setValueAtTime(1, t), u.exponentialRampToValueAtTime(0.3, t + 0.9 / s));
  let d = g(e, n, 0.01, 0.22, 0.6, a);
  for (let [t, r] of [
    [1, 1],
    [2.32, 0.5],
    [4.25, 0.25],
    [6.63, 0.12],
  ]) {
    let i = h(e, `sine`, o * t, n, a + 0.7),
      s = e.createGain();
    ((s.gain.value = r), v(i, s, c));
  }
  return (
    v(
      m(e, l(e).white, n, a, 1, i, !0),
      _(e, `bandpass`, 3200, 2),
      (() => {
        let t = e.createGain();
        return ((t.gain.value = 0.12), t);
      })(),
      c,
    ),
    v(c, d, _(e, `lowpass`, 4500), t),
    n + a + 0.7
  );
}
function xt(e, t, n, r) {
  let i = l(e),
    a = r.rand,
    o = 0.6 + a() * 0.8;
  v(
    m(e, i.brown, n, o, 0.8 + a() * 0.3, a, !0),
    _(e, `lowpass`, 380),
    g(e, n, 0.15, 0.14, o * 0.5, o * 0.4),
    t,
  );
  for (let r = 0, s = 4 + Math.floor(a() * 7); r < s; r++) {
    let r = n + a() * o;
    v(
      m(e, i.crackle, r, 0.06, 1, a),
      _(e, `bandpass`, 900 + a() * 2800, 1.1),
      g(e, r, 0.002, 0.15 + a() * 0.25, 0.04),
      t,
    );
  }
  return n + o + 0.1;
}
function St(e, t, n, r) {
  return (
    v(
      m(e, l(e).white, n, 0.9, 1, r.rand),
      _(e, `highpass`, 2600),
      g(e, n, 0.01, 0.2, 0.7),
      t,
    ),
    n + 1
  );
}
function Ct(e, t, n, r) {
  return (
    b(e, t, n, r, { freq: 2200, Q: 2.5, dur: 0.018, gain: 0.55 }),
    b(e, t, n + 0.035, r, { freq: 3400, Q: 3, dur: 0.012, gain: 0.35 }),
    x(e, t, n + 0.16, { freq: 1480, dur: 0.06, gain: 0.16, type: `square` }),
    x(e, t, n + 0.25, { freq: 1980, dur: 0.08, gain: 0.14, type: `square` }),
    n + 0.4
  );
}
function wt(e, t, n, r) {
  let i = l(e),
    a = r.rand;
  (v(
    m(e, i.white, n, 0.08, 1, a),
    _(e, `bandpass`, 2600, 0.8),
    g(e, n, 0.001, 0.7, 0.07),
    t,
  ),
    v(
      m(e, i.pink, n, 0.25, 1, a),
      _(e, `lowpass`, 900),
      g(e, n, 0.003, 0.35, 0.2),
      t,
    ));
  for (let i = 0; i < 7; i++)
    b(e, t, n + 0.04 + a() * 0.45, r, {
      freq: 2500 + a() * 3500,
      Q: 2,
      dur: 0.01,
      gain: 0.25 + a() * 0.25,
    });
  let o = h(e, `square`, 1700, n + 0.05, 0.35);
  return (
    y(o.frequency, 1700, 180, n + 0.05, 0.35),
    v(o, _(e, `lowpass`, 2400), g(e, n + 0.05, 0.005, 0.08, 0.32), t),
    n + 0.6
  );
}
var Tt = new WeakMap();
function Et(e, t, n) {
  let r = Tt.get(e);
  if (!r) {
    let t = e.sampleRate,
      n = e.createBuffer(2, Math.floor(t * 4.5), t),
      i = 24301,
      a = () => (
        (i = (Math.imul(i, 1664525) + 1013904223) >>> 0),
        i / 2147483648 - 1
      );
    for (let e = 0; e < 2; e++) {
      let r = n.getChannelData(e);
      for (let e = 0; e < r.length; e++) r[e] = a() * Math.exp((-e / t) * 1.3);
      for (let [n, i] of [
        [0.72, 0.5],
        [1.65, 0.3],
        [2.6, 0.15],
      ]) {
        let o = Math.floor((n + e * 0.03) * t);
        for (let e = 0; e < 2400 && o + e < r.length; e++)
          r[o + e] += a() * i * Math.exp(-e / 500);
      }
    }
    Tt.set(e, (r = n));
  }
  let i = e.createConvolver();
  i.buffer = r;
  let a = e.createGain();
  return ((a.gain.value = n), i.connect(a), a.connect(t), i);
}
var Dt = new Map();
function U(e, t) {
  let n = e.createWaveShaper(),
    r = Dt.get(t);
  if (!r) {
    r = new Float32Array(1024);
    for (let e = 0; e < 1024; e++) {
      let n = e / 511.5 - 1;
      r[e] = Math.tanh(n * t) / Math.tanh(t);
    }
    Dt.set(t, r);
  }
  return ((n.curve = r), n);
}
function W(e, t, n, r, i) {
  return m(e, t, n, r, 1, i, r > 1.7);
}
function G(e, t, n, r) {
  if ((e.connect(t), n && r)) {
    let t = e.context.createGain();
    ((t.gain.value = r), e.connect(t), t.connect(n));
  }
}
function K(e, t, n, r, i) {
  let a = e.createGain();
  return (
    a.gain.setValueAtTime(p, t),
    a.gain.exponentialRampToValueAtTime(Math.max(r, p), t + n),
    a.gain.exponentialRampToValueAtTime(p, t + n + i),
    a
  );
}
function q(e, t, n, r, i, a) {
  e.setValueAtTime(1, t);
  for (let o = 0; o < n; o += 1 / r)
    e.linearRampToValueAtTime(1 - i + i * 2 * a(), t + o);
}
function J(e, t, n, r, i, a, o) {
  let c = e.sampleRate,
    l = Math.floor(c * (i + 0.01)),
    u = Math.floor(c * i),
    d = e.createBuffer(1, l, c),
    f = d.getChannelData(0);
  for (let e = 0; e < l; e++)
    f[e] = e < u ? (1 - (2 * e) / u) * Math.min(1, e / 40) : 0;
  let p = s(e.createBufferSource());
  ((p.buffer = d), p.start(r));
  let m = e.createGain();
  ((m.gain.value = a),
    v(p, U(e, 2.5), _(e, `lowpass`, 9e3, 0.5), m),
    G(m, t, n, o));
}
function Y(e, t, n, r, i, a, o, s, c, l = 1.2, u = Math.random) {
  let d = K(e, i, 8e-4, o, s);
  (v(W(e, t.white, i, s + 0.02, u), _(e, `bandpass`, a, l), d), G(d, n, r, c));
}
function X(e, t, n, r, i, a, o) {
  for (let s of [1, 2.76, 5.4]) {
    let c = h(e, `triangle`, i * s, r, o),
      l = K(e, r, 0.002, a / s, o / s);
    (c.connect(l), G(l, t, n, 0.4));
  }
}
function Z(e, t, n, r, i = 480) {
  let a = S(r.d ?? 0, 2.5),
    o = _(e, `lowpass`, Math.max(i, a.lp), 0.5);
  return (o.connect(t), { t: n + a.delay, dry: o, verb: Et(e, o, 0.55), L: a });
}
function Ot(e, t, n, r, i, a) {
  J(e, n.dry, n.verb, r, 0.11, i, 0.6);
  let o = K(e, r, 5e-4, i * 1.4, 0.035);
  (v(W(e, t.white, r, 0.06, a), _(e, `highpass`, 1200, 0.6), U(e, 4), o),
    G(o, n.dry, n.verb, 0.5));
  for (let o = 0; o < 5; o++)
    Y(
      e,
      t,
      n.dry,
      n.verb,
      r + 0.003 + o * 0.004 * a(),
      2500 + a() * 4e3,
      i * 0.8,
      0.008,
      0.4,
      1.2,
      a,
    );
}
function kt(e, t, n, r) {
  let i = l(e),
    a = r.rand ?? Math.random,
    o = Z(e, t, n, { d: 0 }),
    s = o.t,
    c = 0.42;
  (Ot(e, i, o, s, c * 1, a), Ot(e, i, o, s + 0.19, c * 0.95, a));
  let u = K(e, s + 0.02, 0.01, c * 0.9, 2.6);
  (v(W(e, i.brown, s + 0.02, 3, a), _(e, `lowpass`, 140, 0.8), u),
    G(u, o.dry, o.verb, 0.4));
  for (let t = 0; t < 38; t++)
    Y(
      e,
      i,
      o.dry,
      o.verb,
      s + 0.06 + a() ** 1.6 * 0.9,
      1800 + a() * 5200,
      c * (0.15 + a() * 0.35),
      0.006 + a() * 0.01,
      0.25,
      1.2,
      a,
    );
  return (
    X(e, o.dry, o.verb, s + 0.08, 620, c * 0.12, 0.6),
    X(e, o.dry, o.verb, s + 0.27, 910, c * 0.09, 0.5),
    s + 5
  );
}
