// assets__synth-B52TAiVy 03 — close
// Lines 433-738 of readable/assets__synth-B52TAiVy.pretty.js (statement-aligned).
function o(e) {
  a = e;
}
var s = (e) => (a && a(e), e),
  c = new Map();
function l(e) {
  let t = i.get(e) ?? c.get(e.sampleRate);
  if (t) return (i.set(e, t), t);
  let n = e.sampleRate,
    r = Math.floor(n * 2),
    a = e.createBuffer(1, r, n),
    o = e.createBuffer(1, r, n),
    s = e.createBuffer(1, r, n),
    l = e.createBuffer(1, r, n),
    u = a.getChannelData(0),
    d = o.getChannelData(0),
    f = s.getChannelData(0),
    p = l.getChannelData(0),
    m = 2654435769,
    h = () => {
      m = (m + 1831565813) >>> 0;
      let e = m;
      return (
        (e = Math.imul(e ^ (e >>> 15), e | 1)),
        (e ^= e + Math.imul(e ^ (e >>> 7), e | 61)),
        (((e ^ (e >>> 14)) >>> 0) / 4294967296) * 2 - 1
      );
    },
    g = 0,
    _ = 0,
    v = 0,
    y = 0,
    b = 0,
    x = 0,
    S = 0,
    C = 0;
  for (let e = 0; e < r; e++) {
    let t = h();
    ((u[e] = t),
      (g = 0.99886 * g + t * 0.0555179),
      (_ = 0.99332 * _ + t * 0.0750759),
      (v = 0.969 * v + t * 0.153852),
      (y = 0.8665 * y + t * 0.3104856),
      (b = 0.55 * b + t * 0.5329522),
      (x = -0.7616 * x - t * 0.016898),
      (d[e] = (g + _ + v + y + b + x + S + t * 0.5362) * 0.11),
      (S = t * 0.115926),
      (C = (C + 0.02 * t) / 1.02),
      (f[e] = C * 3.5),
      (p[e] = Math.abs(t) > 0.985 ? t * 4 : 0));
  }
  return (
    (t = { white: a, pink: o, brown: s, crackle: l }),
    i.set(e, t),
    c.set(e.sampleRate, t),
    t
  );
}
var u = (e, t, n) => (e < t ? t : e > n ? n : e),
  d = (e, t, n) => e + (t - e) * n,
  f = (e, t, n) => {
    let r = u((n - e) / (t - e), 0, 1);
    return r * r * (3 - 2 * r);
  },
  p = 4e-4;
function m(e, t, n, r, i = 1, a = Math.random, o = !1) {
  let c = e.createBufferSource();
  ((c.buffer = t), (c.loop = o), (c.playbackRate.value = i));
  let l = o ? 0 : a() * (t.duration - 0.25);
  return (c.start(n, l), r > 0 && c.stop(n + r + 0.02), s(c));
}
function h(e, t, n, r, i) {
  let a = e.createOscillator();
  return (
    (a.type = t),
    a.frequency.setValueAtTime(n, r),
    a.start(r),
    a.stop(r + i + 0.02),
    s(a)
  );
}
function g(e, t, n, r, i, a = 0) {
  let o = e.createGain(),
    s = o.gain;
  return (
    s.setValueAtTime(p, t),
    s.linearRampToValueAtTime(Math.max(r, p), t + Math.max(n, 8e-4)),
    a > 0 && s.setValueAtTime(Math.max(r, p), t + n + a),
    s.exponentialRampToValueAtTime(p, t + n + a + i),
    o
  );
}
function _(e, t, n, r = 1, i = 0) {
  let a = e.createBiquadFilter();
  return (
    (a.type = t),
    (a.frequency.value = u(n, 10, 2e4)),
    (a.Q.value = r),
    (a.gain.value = i),
    a
  );
}
function v(...e) {
  for (let t = 0; t < e.length - 1; t++) e[t].connect(e[t + 1]);
  return e[e.length - 1];
}
function y(e, t, n, r, i, a = !0) {
  (e.setValueAtTime(Math.max(t, 1), r),
    a
      ? e.exponentialRampToValueAtTime(Math.max(n, 1), r + i)
      : e.linearRampToValueAtTime(n, r + i));
}
function b(
  e,
  t,
  n,
  r,
  {
    freq: i = 3e3,
    Q: a = 2,
    dur: o = 0.02,
    gain: s = 1,
    buf: c = `white`,
  } = {},
) {
  return (
    v(
      m(e, l(e)[c], n, o + 0.05, 1, r.rand),
      _(e, `bandpass`, i, a),
      g(e, n, 0.001, s, o),
      t,
    ),
    n + o + 0.05
  );
}
function x(
  e,
  t,
  n,
  {
    freq: r = 2e3,
    to: i = null,
    dur: a = 0.15,
    gain: o = 0.5,
    type: s = `sine`,
  } = {},
) {
  let c = h(e, s, r, n, a);
  return (
    i && y(c.frequency, r, i, n, a),
    v(c, g(e, n, 0.002, o, a), t),
    n + a + 0.02
  );
}
function S(e, t = 1) {
  let n = e / t;
  return {
    close: 1 - f(8, 110, n),
    mid: 0.25 + 0.75 * (1 - Math.abs(u((n - 70) / 110, -1, 1))),
    far: f(30, 320, n),
    lp: d(18e3, 480, f(15, 600, n)),
    delay: Math.min(e / 343, 2.5),
  };
}
var C = {
  ar: { size: 1, pitch: 1, tail: 1, crack: 1 },
  carbine: { size: 0.9, pitch: 1.08, tail: 0.9, crack: 1 },
  dmr: { size: 1.25, pitch: 0.92, tail: 1.2, crack: 1.1 },
  sniper: { size: 1.6, pitch: 0.8, tail: 1.6, crack: 1.25 },
  lmg: { size: 1.2, pitch: 0.9, tail: 1.1, crack: 0.95 },
  smg: { size: 0.7, pitch: 1.25, tail: 0.7, crack: 0.85 },
  pistol: { size: 0.65, pitch: 1.35, tail: 0.6, crack: 0.8 },
  shotgun: { size: 1.5, pitch: 0.75, tail: 1.3, crack: 0.9 },
  suppressed: { size: 0.5, pitch: 1.1, tail: 0.4, crack: 0.15 },
};
function w(e, t, n, r) {
  let i = l(e),
    a = S(r.d ?? 0, r.layerScale ?? 1),
    o = n + a.delay,
    s = (r.pitch ?? 1) * (0.985 + r.rand() * 0.03),
    c = _(e, `lowpass`, a.lp, 0.6);
  (c.connect(t),
    v(
      m(e, i.white, o, 0.07, s, r.rand),
      _(e, `highpass`, 1900, 0.65),
      g(e, o, 0.001, 0.65 * a.close, 0.021),
      c,
    ),
    v(
      m(e, i.pink, o, 0.19, s, r.rand),
      _(e, `bandpass`, 620 * s, 0.85),
      g(e, o, 0.002, 0.95 * (0.45 + a.mid * 0.55), 0.105),
      c,
    ),
    v(
      m(e, i.brown, o, 0.22, 1, r.rand),
      _(e, `lowpass`, 330, 0.7),
      g(e, o, 0.003, 0.52, 0.16),
      c,
    ));
  let u = h(e, `sine`, 135 * s, o, 0.11);
  (y(u.frequency, 135 * s, 85, o, 0.035),
    v(u, g(e, o, 0.001, 0.28 * (0.4 + 0.6 * a.close), 0.072), c),
    a.close > 0.02 &&
      (b(e, c, o + 0.022, r, { freq: 2100, dur: 0.011, gain: 0.24 * a.close }),
      b(e, c, o + 0.074, r, {
        freq: 860,
        dur: 0.023,
        gain: 0.31 * a.close,
        buf: `pink`,
      })));
  let d = 0.28 + a.far * 0.42;
  return (
    v(
      m(e, i.pink, o + 0.032, d + 0.04, 1, r.rand),
      _(e, `lowpass`, 1600, 0.5),
      g(e, o + 0.032, 0.006, 0.19 + 0.22 * a.far, d),
      c,
    ),
    o + d + 0.1
  );
}
function T(e, t, n, r) {
  let i = l(e),
    a = S(r.d ?? 0, r.layerScale ?? 1),
    o = n + a.delay,
    s = (r.pitch ?? 1) * (0.98 + r.rand() * 0.04),
    c = _(e, `lowpass`, a.lp, 0.6);
  (c.connect(t),
    v(
      m(e, i.white, o, 0.04, s, r.rand),
      _(e, `bandpass`, 3400 * s, 0.7),
      g(e, o, 8e-4, 0.95 * a.close, 0.013),
      c,
    ),
    v(
      m(e, i.white, o + 0.002, 0.09, s, r.rand),
      _(e, `bandpass`, 1120 * s, 1.4),
      g(e, o + 0.002, 0.001, 0.8 * (0.5 + 0.5 * a.mid), 0.045),
      c,
    ),
    v(
      m(e, i.pink, o, 0.13, s, r.rand),
      _(e, `bandpass`, 480 * s, 0.8),
      g(e, o, 0.002, 0.45, 0.068),
      c,
    ),
    a.close > 0.02 &&
      (b(e, c, o + 0.009, r, { freq: 3600, dur: 0.007, gain: 0.21 * a.close }),
      b(e, c, o + 0.048, r, { freq: 1650, dur: 0.014, gain: 0.36 * a.close })));
  let u = 0.14 + a.far * 0.28;
  return (
    v(
      m(e, i.white, o + 0.018, u + 0.03, 1, r.rand),
      _(e, `lowpass`, 1900, 0.5),
      g(e, o + 0.018, 0.004, 0.11 + 0.17 * a.far, u),
      c,
    ),
    o + u + 0.08
  );
}
function E(e, t, n, r, i = !1) {
  let a = l(e),
    o = S(r.d ?? 0, r.layerScale ?? 1),
    s = n + o.delay,
    c = r.pitch ?? 1,
    u = _(e, `lowpass`, Math.min(o.lp, 6500), 0.7);
  u.connect(t);
  let d = i ? 760 : 430,
    f = i ? 0.0015 : 0.003,
    p = i ? 0.035 : 0.06;
  (v(
    m(e, a.pink, s, 0.12, c, r.rand),
    _(e, `bandpass`, d * c, 1.1),
    g(e, s, f, 0.64 * (0.45 + 0.55 * o.close), p),
    u,
  ),
    v(
      m(e, a.white, s + 0.003, 0.09, 1, r.rand),
      _(e, `bandpass`, i ? 2350 : 1650, 0.65),
      g(e, s + 0.003, 0.004, 0.24 * o.close, 0.035),
      u,
    ),
    o.close > 0.02 &&
      (b(e, u, s + (i ? 0.009 : 0.022), r, {
        freq: i ? 3600 : 2100,
        dur: 0.009,
        gain: 0.36 * o.close,
      }),
      b(e, u, s + (i ? 0.048 : 0.074), r, {
        freq: i ? 1650 : 860,
        dur: 0.02,
        gain: 0.46 * o.close,
        buf: i ? `white` : `pink`,
      })));
  let h = 0.1 + 0.16 * o.far;
  return (
    v(
      m(e, a.pink, s + 0.025, h + 0.03, 1, r.rand),
      _(e, `lowpass`, 1100, 0.6),
      g(e, s + 0.025, 0.006, 0.08 + 0.06 * o.far, h),
      u,
    ),
    s + h + 0.1
  );
}
