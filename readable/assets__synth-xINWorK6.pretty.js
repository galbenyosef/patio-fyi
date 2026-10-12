/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
var e = Object.freeze({
    longbow: {
      level: 0.44,
      cal: 1,
      pitch: 1,
      crack: 1,
      clack: 1,
      clackHz: 2100,
      blastGain: 1,
      blastHz: 900,
      blastQ: 0.6,
      blastDur: 0.06,
      bark: 0,
      barkHz: 1800,
      brake: 0,
      body: 1,
      concHz: 560,
      subGain: 1,
      subHz: 112,
      subTo: 30,
      ringGain: 0.12,
      ring: 1180,
      ringDur: 0.12,
      action: `none`,
      tail: 1,
      roll: 1,
      echo: 1,
      echoTone: 1,
    },
    harrier: {
      level: 0.55,
      cal: 0.9,
      pitch: 1.15,
      crack: 0.9,
      clack: 1,
      clackHz: 2700,
      blastGain: 1.3,
      blastHz: 1500,
      blastQ: 0.9,
      blastDur: 0.035,
      bark: 0.9,
      barkHz: 2600,
      brake: 0,
      body: 0.55,
      concHz: 950,
      subGain: 0.45,
      subHz: 140,
      subTo: 45,
      ringGain: 0.14,
      ring: 1900,
      ringDur: 0.07,
      action: `gas`,
      tail: 1,
      roll: 0.6,
      echo: 0.8,
      echoTone: 1.3,
    },
    peregrine: {
      level: 0.45,
      cal: 0.95,
      pitch: 1.07,
      crack: 1.1,
      clack: 1.1,
      clackHz: 2400,
      blastGain: 1.25,
      blastHz: 1200,
      blastQ: 0.7,
      blastDur: 0.05,
      bark: 1.4,
      barkHz: 1700,
      brake: 0,
      body: 0.7,
      concHz: 820,
      subGain: 0.65,
      subHz: 124,
      subTo: 36,
      ringGain: 0.16,
      ring: 2400,
      ringDur: 0.06,
      action: `none`,
      tail: 1,
      roll: 0.8,
      echo: 0.9,
      echoTone: 1.2,
    },
    osprey: {
      level: 0.27,
      cal: 1.5,
      pitch: 0.85,
      crack: 2.5,
      clack: 2,
      clackHz: 2100,
      blastGain: 2,
      blastHz: 900,
      blastQ: 0.6,
      blastDur: 0.06,
      bark: 0,
      barkHz: 1800,
      brake: 0,
      body: 1.3,
      concHz: 560,
      subGain: 0.9,
      subHz: 110,
      subTo: 30,
      ringGain: 0.06,
      ring: 1200,
      ringDur: 0.08,
      action: `none`,
      tail: 1.6,
      roll: 1.6,
      echo: 1,
      echoTone: 1,
    },
    condor: {
      level: 0.27,
      cal: 1.5,
      pitch: 0.85,
      crack: 2.5,
      clack: 2,
      clackHz: 2100,
      blastGain: 2,
      blastHz: 900,
      blastQ: 0.6,
      blastDur: 0.06,
      bark: 0,
      barkHz: 1800,
      brake: 0,
      body: 1.3,
      concHz: 560,
      subGain: 0.9,
      subHz: 110,
      subTo: 30,
      ringGain: 0.06,
      ring: 1200,
      ringDur: 0.08,
      action: `none`,
      tail: 1.6,
      roll: 1.6,
      echo: 1,
      echoTone: 1,
    },
    spectre: {
      level: 0.27,
      cal: 1.5,
      pitch: 0.85,
      crack: 2.5,
      clack: 2,
      clackHz: 2100,
      blastGain: 2,
      blastHz: 900,
      blastQ: 0.6,
      blastDur: 0.06,
      bark: 0,
      barkHz: 1800,
      brake: 0,
      body: 1.3,
      concHz: 560,
      subGain: 0.9,
      subHz: 110,
      subTo: 30,
      ringGain: 0.06,
      ring: 1200,
      ringDur: 0.08,
      action: `none`,
      tail: 1.6,
      roll: 1.6,
      echo: 1,
      echoTone: 1,
    },
  }),
  t = new WeakMap(),
  n = null;
function r(e) {
  n = e;
}
var i = (e) => (n && n(e), e);
function a(e) {
  let n = t.get(e);
  if (n) return n;
  let r = e.sampleRate,
    i = Math.floor(r * 2),
    a = e.createBuffer(1, i, r),
    o = e.createBuffer(1, i, r),
    s = e.createBuffer(1, i, r),
    c = e.createBuffer(1, i, r),
    l = a.getChannelData(0),
    u = o.getChannelData(0),
    d = s.getChannelData(0),
    f = c.getChannelData(0),
    p = 2654435769,
    m = () => {
      p = (p + 1831565813) >>> 0;
      let e = p;
      return (
        (e = Math.imul(e ^ (e >>> 15), e | 1)),
        (e ^= e + Math.imul(e ^ (e >>> 7), e | 61)),
        (((e ^ (e >>> 14)) >>> 0) / 4294967296) * 2 - 1
      );
    },
    h = 0,
    g = 0,
    _ = 0,
    v = 0,
    y = 0,
    b = 0,
    x = 0,
    S = 0;
  for (let e = 0; e < i; e++) {
    let t = m();
    ((l[e] = t),
      (h = 0.99886 * h + t * 0.0555179),
      (g = 0.99332 * g + t * 0.0750759),
      (_ = 0.969 * _ + t * 0.153852),
      (v = 0.8665 * v + t * 0.3104856),
      (y = 0.55 * y + t * 0.5329522),
      (b = -0.7616 * b - t * 0.016898),
      (u[e] = (h + g + _ + v + y + b + x + t * 0.5362) * 0.11),
      (x = t * 0.115926),
      (S = (S + 0.02 * t) / 1.02),
      (d[e] = S * 3.5),
      (f[e] = Math.abs(t) > 0.985 ? t * 4 : 0));
  }
  return ((n = { white: a, pink: o, brown: s, crackle: c }), t.set(e, n), n);
}
var o = (e, t, n) => (e < t ? t : e > n ? n : e),
  s = (e, t, n) => e + (t - e) * n,
  c = (e, t, n) => {
    let r = o((n - e) / (t - e), 0, 1);
    return r * r * (3 - 2 * r);
  },
  l = 4e-4;
function u(e, t, n, r, a = 1, o = Math.random, s = !1) {
  let c = e.createBufferSource();
  ((c.buffer = t), (c.loop = s), (c.playbackRate.value = a));
  let l = s ? 0 : o() * (t.duration - 0.25);
  return (c.start(n, l), r > 0 && c.stop(n + r + 0.02), i(c));
}
function d(e, t, n, r, a) {
  let o = e.createOscillator();
  return (
    (o.type = t),
    o.frequency.setValueAtTime(n, r),
    o.start(r),
    o.stop(r + a + 0.02),
    i(o)
  );
}
function f(e, t, n, r, i, a = 0) {
  let o = e.createGain(),
    s = o.gain;
  return (
    s.setValueAtTime(l, t),
    s.linearRampToValueAtTime(Math.max(r, l), t + Math.max(n, 8e-4)),
    a > 0 && s.setValueAtTime(Math.max(r, l), t + n + a),
    s.exponentialRampToValueAtTime(l, t + n + a + i),
    o
  );
}
function p(e, t, n, r = 1, i = 0) {
  let a = e.createBiquadFilter();
  return (
    (a.type = t),
    (a.frequency.value = o(n, 10, 2e4)),
    (a.Q.value = r),
    (a.gain.value = i),
    a
  );
}
function m(...e) {
  for (let t = 0; t < e.length - 1; t++) e[t].connect(e[t + 1]);
  return e[e.length - 1];
}
function h(e, t, n, r, i, a = !0) {
  (e.setValueAtTime(Math.max(t, 1), r),
    a
      ? e.exponentialRampToValueAtTime(Math.max(n, 1), r + i)
      : e.linearRampToValueAtTime(n, r + i));
}
function g(
  e,
  t,
  n,
  r,
  {
    freq: i = 3e3,
    Q: o = 2,
    dur: s = 0.02,
    gain: c = 1,
    buf: l = `white`,
  } = {},
) {
  return (
    m(
      u(e, a(e)[l], n, s + 0.05, 1, r.rand),
      p(e, `bandpass`, i, o),
      f(e, n, 0.001, c, s),
      t,
    ),
    n + s + 0.05
  );
}
function _(
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
  let c = d(e, s, r, n, a);
  return (
    i && h(c.frequency, r, i, n, a),
    m(c, f(e, n, 0.002, o, a), t),
    n + a + 0.02
  );
}
function v(e, t = 1) {
  let n = e / t;
  return {
    close: 1 - c(8, 110, n),
    mid: 0.25 + 0.75 * (1 - Math.abs(o((n - 70) / 110, -1, 1))),
    far: c(30, 320, n),
    lp: s(18e3, 480, c(15, 600, n)),
    delay: Math.min(e / 343, 2.5),
  };
}
var y = {
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
function b(e, t, n, r) {
  let i = a(e),
    o = v(r.d ?? 0, r.layerScale ?? 1),
    s = n + o.delay,
    c = (r.pitch ?? 1) * (0.985 + r.rand() * 0.03),
    l = p(e, `lowpass`, o.lp, 0.6);
  (l.connect(t),
    m(
      u(e, i.white, s, 0.07, c, r.rand),
      p(e, `highpass`, 1900, 0.65),
      f(e, s, 0.001, 0.65 * o.close, 0.021),
      l,
    ),
    m(
      u(e, i.pink, s, 0.19, c, r.rand),
      p(e, `bandpass`, 620 * c, 0.85),
      f(e, s, 0.002, 0.95 * (0.45 + o.mid * 0.55), 0.105),
      l,
    ),
    m(
      u(e, i.brown, s, 0.22, 1, r.rand),
      p(e, `lowpass`, 330, 0.7),
      f(e, s, 0.003, 0.52, 0.16),
      l,
    ));
  let _ = d(e, `sine`, 135 * c, s, 0.11);
  (h(_.frequency, 135 * c, 85, s, 0.035),
    m(_, f(e, s, 0.001, 0.28 * (0.4 + 0.6 * o.close), 0.072), l),
    o.close > 0.02 &&
      (g(e, l, s + 0.022, r, { freq: 2100, dur: 0.011, gain: 0.24 * o.close }),
      g(e, l, s + 0.074, r, {
        freq: 860,
        dur: 0.023,
        gain: 0.31 * o.close,
        buf: `pink`,
      })));
  let y = 0.28 + o.far * 0.42;
  return (
    m(
      u(e, i.pink, s + 0.032, y + 0.04, 1, r.rand),
      p(e, `lowpass`, 1600, 0.5),
      f(e, s + 0.032, 0.006, 0.19 + 0.22 * o.far, y),
      l,
    ),
    s + y + 0.1
  );
}
function x(e, t, n, r) {
  let i = a(e),
    o = v(r.d ?? 0, r.layerScale ?? 1),
    s = n + o.delay,
    c = (r.pitch ?? 1) * (0.98 + r.rand() * 0.04),
    l = p(e, `lowpass`, o.lp, 0.6);
  (l.connect(t),
    m(
      u(e, i.white, s, 0.04, c, r.rand),
      p(e, `bandpass`, 3400 * c, 0.7),
      f(e, s, 8e-4, 0.95 * o.close, 0.013),
      l,
    ),
    m(
      u(e, i.white, s + 0.002, 0.09, c, r.rand),
      p(e, `bandpass`, 1120 * c, 1.4),
      f(e, s + 0.002, 0.001, 0.8 * (0.5 + 0.5 * o.mid), 0.045),
      l,
    ),
    m(
      u(e, i.pink, s, 0.13, c, r.rand),
      p(e, `bandpass`, 480 * c, 0.8),
      f(e, s, 0.002, 0.45, 0.068),
      l,
    ),
    o.close > 0.02 &&
      (g(e, l, s + 0.009, r, { freq: 3600, dur: 0.007, gain: 0.21 * o.close }),
      g(e, l, s + 0.048, r, { freq: 1650, dur: 0.014, gain: 0.36 * o.close })));
  let d = 0.14 + o.far * 0.28;
  return (
    m(
      u(e, i.white, s + 0.018, d + 0.03, 1, r.rand),
      p(e, `lowpass`, 1900, 0.5),
      f(e, s + 0.018, 0.004, 0.11 + 0.17 * o.far, d),
      l,
    ),
    s + d + 0.08
  );
}
function S(e, t, n, r, i = !1) {
  let o = a(e),
    s = v(r.d ?? 0, r.layerScale ?? 1),
    c = n + s.delay,
    l = r.pitch ?? 1,
    d = p(e, `lowpass`, Math.min(s.lp, 6500), 0.7);
  d.connect(t);
  let h = i ? 760 : 430,
    _ = i ? 0.0015 : 0.003,
    y = i ? 0.035 : 0.06;
  (m(
    u(e, o.pink, c, 0.12, l, r.rand),
    p(e, `bandpass`, h * l, 1.1),
    f(e, c, _, 0.64 * (0.45 + 0.55 * s.close), y),
    d,
  ),
    m(
      u(e, o.white, c + 0.003, 0.09, 1, r.rand),
      p(e, `bandpass`, i ? 2350 : 1650, 0.65),
      f(e, c + 0.003, 0.004, 0.24 * s.close, 0.035),
      d,
    ),
    s.close > 0.02 &&
      (g(e, d, c + (i ? 0.009 : 0.022), r, {
        freq: i ? 3600 : 2100,
        dur: 0.009,
        gain: 0.36 * s.close,
      }),
      g(e, d, c + (i ? 0.048 : 0.074), r, {
        freq: i ? 1650 : 860,
        dur: 0.02,
        gain: 0.46 * s.close,
        buf: i ? `white` : `pink`,
      })));
  let b = 0.1 + 0.16 * s.far;
  return (
    m(
      u(e, o.pink, c + 0.025, b + 0.03, 1, r.rand),
      p(e, `lowpass`, 1100, 0.6),
      f(e, c + 0.025, 0.006, 0.08 + 0.06 * s.far, b),
      d,
    ),
    c + b + 0.1
  );
}
function C(e, t, n, r, i = !1) {
  let o = a(e),
    s = v(r.d ?? 0, r.layerScale ?? 1),
    c = n + s.delay,
    l = (r.pitch ?? 1) * (0.99 + r.rand() * 0.02),
    d = p(e, `lowpass`, Math.min(s.lp, i ? 6200 : 18e3), 0.6);
  (d.connect(t),
    i
      ? (m(
          u(e, o.pink, c, 0.14, l, r.rand),
          p(e, `bandpass`, 560 * l, 0.7),
          f(e, c, 0.002, 0.8 * (0.4 + 0.6 * s.close), 0.075),
          d,
        ),
        m(
          u(e, o.white, c + 0.004, 0.085, l, r.rand),
          p(e, `bandpass`, 1850, 0.6),
          f(e, c + 0.004, 0.003, 0.2 * s.close, 0.04),
          d,
        ))
      : (m(
          u(e, o.white, c, 0.055, l, r.rand),
          p(e, `highpass`, 2600, 0.6),
          f(e, c, 8e-4, 0.8 * s.close, 0.018),
          d,
        ),
        m(
          u(e, o.pink, c, 0.18, l, r.rand),
          p(e, `bandpass`, 780 * l, 0.65),
          f(e, c, 0.0015, 1.15 * (0.45 + 0.55 * s.mid), 0.095),
          d,
        ),
        m(
          u(e, o.brown, c, 0.24, 1, r.rand),
          p(e, `lowpass`, 420, 0.6),
          f(e, c, 0.002, 0.65, 0.145),
          d,
        )),
    s.close > 0.02 &&
      (g(e, d, c + 0.018, r, {
        freq: 2400,
        Q: 0.7,
        dur: 0.012,
        gain: 0.2 * s.close,
      }),
      g(e, d, c + 0.11, r, {
        freq: 1050,
        Q: 0.6,
        dur: 0.018,
        gain: 0.28 * s.close,
        buf: `pink`,
      })));
  let h = i ? 0.12 + 0.16 * s.far : 0.24 + 0.38 * s.far;
  return (
    m(
      u(e, o.pink, c + 0.026, h + 0.04, 1, r.rand),
      p(e, `lowpass`, i ? 1200 : 2100, 0.55),
      f(e, c + 0.026, 0.004, (i ? 0.06 : 0.17) + (i ? 0.05 : 0.2) * s.far, h),
      d,
    ),
    Math.max(c + h + 0.09, c + 0.2)
  );
}
function w(e, t, n, r, i = !1) {
  let o = a(e),
    s = v(r.d ?? 0, r.layerScale ?? 1),
    c = n + s.delay,
    l = p(e, `lowpass`, Math.min(s.lp, i ? 5800 : 15e3), 0.6);
  (l.connect(t),
    m(
      u(e, o.pink, c, 0.17, 1, r.rand),
      p(e, `bandpass`, i ? 390 : 510, 0.8),
      f(e, c, 0.0015, i ? 0.66 : 1.05, 0.083),
      l,
    ),
    m(
      u(e, o.white, c, 0.06, 1, r.rand),
      p(e, `bandpass`, i ? 1600 : 2100, 0.7),
      f(e, c, 8e-4, (i ? 0.18 : 0.92) * s.close, 0.023),
      l,
    ),
    i ||
      m(
        u(e, o.brown, c, 0.16, 1, r.rand),
        p(e, `lowpass`, 290, 0.6),
        f(e, c, 0.002, 0.65, 0.095),
        l,
      ),
    s.close > 0.02 &&
      (g(e, l, c + 0.012, r, {
        freq: 1750,
        Q: 0.6,
        dur: 0.014,
        gain: 0.28 * s.close,
      }),
      g(e, l, c + 0.058, r, {
        freq: 780,
        Q: 0.7,
        dur: 0.022,
        gain: 0.34 * s.close,
        buf: `pink`,
      }),
      g(e, l, c + 0.084, r, {
        freq: 2800,
        Q: 0.5,
        dur: 0.008,
        gain: 0.14 * s.close,
      })));
  let d = i ? 0.1 + 0.13 * s.far : 0.19 + 0.3 * s.far;
  return (
    m(
      u(e, o.pink, c + 0.03, d + 0.04, 1, r.rand),
      p(e, `lowpass`, i ? 950 : 1400, 0.5),
      f(e, c + 0.03, 0.004, (i ? 0.05 : 0.13) + s.far * (i ? 0.04 : 0.18), d),
      l,
    ),
    Math.max(c + 0.19, c + d + 0.09)
  );
}
function T(e, t, n, r, i = !1) {
  let o = a(e),
    s = v(r.d ?? 0, r.layerScale ?? 1),
    c = n + s.delay,
    l = p(e, `lowpass`, Math.min(s.lp, i ? 4400 : 12e3), 0.55);
  (l.connect(t),
    m(
      u(e, o.pink, c, 0.09, 1, r.rand),
      p(e, `bandpass`, i ? 580 : 850, 0.65),
      f(e, c, 0.001, i ? 0.38 : 0.75, 0.037),
      l,
    ),
    i ||
      m(
        u(e, o.white, c, 0.025, 1, r.rand),
        p(e, `highpass`, 1800, 0.5),
        f(e, c, 6e-4, 0.53 * s.close, 0.012),
        l,
      ),
    g(e, l, c + 0.011, r, {
      freq: 1350,
      Q: 0.5,
      dur: 0.012,
      gain: 0.24 * s.close,
      buf: `pink`,
    }),
    g(e, l, c + 0.042, r, {
      freq: 2400,
      Q: 0.5,
      dur: 0.009,
      gain: 0.17 * s.close,
    }));
  let d = 0.075 + s.far * 0.18;
  return (
    m(
      u(e, o.pink, c + 0.024, d + 0.04, 1, r.rand),
      p(e, `lowpass`, 1100, 0.5),
      f(e, c + 0.024, 0.003, (i ? 0.035 : 0.09) * (1 + s.far), d),
      l,
    ),
    c + d + 0.08
  );
}
var E = new Map();
function D(e, t) {
  let n = E.get(t);
  if (!n) {
    n = new Float32Array(1024);
    for (let e = 0; e < n.length; e++) {
      let r = e / 511.5 - 1;
      n[e] = Math.tanh(r * t) / Math.tanh(t);
    }
    E.set(t, n);
  }
  let r = e.createWaveShaper();
  return ((r.curve = n), (r.oversample = `2x`), r);
}
function O(t, n, r, i, o = e.longbow) {
  let s = a(t),
    c = i.rand,
    l = o.cal,
    y = v(i.d ?? 0, (i.layerScale ?? 1) * (0.8 + 0.25 * l)),
    b = r + y.delay,
    x = (i.pitch ?? 1) * o.pitch * (0.99 + c() * 0.02),
    S = p(t, `lowpass`, y.lp, 0.5);
  S.connect(n);
  let C = y.close,
    w = 0.55 + 0.45 * C;
  if (C > 0.02) {
    let e = o.crack * C;
    (m(
      u(t, s.white, b, 0.03, 1, c),
      p(t, `highpass`, 2e3, 0.7),
      D(t, 3),
      f(t, b, 2e-4, 2.4 * e, 0.01),
      S,
    ),
      m(
        u(t, s.white, b + 0.0011, 0.03, 1, c),
        p(t, `highpass`, 3e3, 0.7),
        f(t, b + 0.0011, 2e-4, 1.7 * e, 0.008),
        S,
      ),
      m(
        u(t, s.white, b, 0.06, x, c),
        p(t, `bandpass`, 4200 * x, 1.2),
        f(t, b, 4e-4, 0.7 * e, 0.026),
        S,
      ));
  }
  {
    let e = o.clack * (0.35 + 0.65 * C) * y.mid;
    (m(
      u(t, s.white, b, 0.05, 1, c),
      p(t, `bandpass`, o.clackHz, 1.3),
      D(t, 5),
      f(t, b, 3e-4, 2.2 * e, 0.018),
      S,
    ),
      m(
        u(t, s.pink, b, 0.05, 1, c),
        p(t, `bandpass`, o.clackHz * 0.55, 1.6),
        D(t, 4),
        f(t, b + 5e-4, 4e-4, 1.3 * e, 0.024),
        S,
      ));
  }
  (m(
    u(t, s.pink, b, 0.1 + o.blastDur * 1.6, x, c),
    p(t, `bandpass`, o.blastHz * x, o.blastQ),
    D(t, 3.2),
    f(t, b, 8e-4, 0.95 * o.blastGain * w * y.mid, o.blastDur),
    S,
  ),
    m(
      u(t, s.white, b, 0.08, x, c),
      p(t, `bandpass`, 2100 * x, 0.9),
      f(t, b, 6e-4, 0.5 * C, 0.03),
      S,
    ),
    o.bark &&
      m(
        u(t, s.pink, b, 0.12, x, c),
        p(t, `peaking`, o.barkHz * x, 1.4, 12),
        p(t, `bandpass`, o.barkHz * x, 1.1),
        D(t, 4),
        f(t, b, 6e-4, 0.75 * o.bark * w, 0.05),
        S,
      ),
    o.brake &&
      (m(
        u(t, s.white, b + 0.0015, 0.3, 1, c),
        p(t, `bandpass`, 3100, 0.55),
        D(t, 2.5),
        f(
          t,
          b + 0.0015,
          0.001,
          0.75 * o.brake * (0.3 + 0.7 * C),
          0.1 + 0.06 * o.brake,
        ),
        S,
      ),
      m(
        u(t, s.pink, b, 0.12, 1, c),
        p(t, `bandpass`, 520, 1.2),
        D(t, 5),
        f(t, b, 5e-4, 0.7 * o.brake * w, 0.035),
        S,
      )),
    m(
      u(t, s.brown, b, 0.3 * l, 1, c),
      p(t, `lowpass`, o.concHz, 0.8),
      D(t, 2.4),
      f(t, b, 0.0012, 0.85 * Math.sqrt(l) * o.body * w, 0.1 * l),
      S,
    ));
  let T = d(t, `sine`, o.subHz * 0.6, b, 0.25 * l);
  (h(T.frequency, o.subHz * 0.6, o.subTo, b, 0.025),
    m(
      T,
      f(
        t,
        b,
        0.0012,
        0.6 * o.subGain * (0.5 + 0.5 * C) * Math.min(1.25, l),
        0.09 * l,
      ),
      S,
    ),
    C > 0.05 &&
      (_(t, S, b + 0.004, {
        freq: o.ring,
        to: o.ring * 0.9,
        dur: o.ringDur,
        gain: o.ringGain * C,
        type: `triangle`,
      }),
      _(t, S, b + 0.004, {
        freq: o.ring * 2.76,
        to: o.ring * 2.6,
        dur: o.ringDur * 0.5,
        gain: o.ringGain * 0.35 * C,
        type: `sine`,
      })),
    C > 0.05 &&
      (o.action === `gas`
        ? (g(t, S, b + 0.038, i, {
            freq: 2300,
            Q: 2.5,
            dur: 0.014,
            gain: 0.32 * C,
          }),
          g(t, S, b + 0.082, i, { freq: 1500, Q: 2, dur: 0.02, gain: 0.4 * C }),
          _(t, S, b + 0.082, {
            freq: 3300,
            to: 2900,
            dur: 0.05,
            gain: 0.04 * C,
            type: `triangle`,
          }))
        : o.action === `heavy`
          ? (g(t, S, b + 0.06, i, {
              freq: 900,
              Q: 1.5,
              dur: 0.03,
              gain: 0.45 * C,
              buf: `pink`,
            }),
            g(t, S, b + 0.135, i, {
              freq: 620,
              Q: 1.2,
              dur: 0.045,
              gain: 0.6 * C,
              buf: `pink`,
            }),
            _(t, S, b + 0.135, {
              freq: 1450,
              to: 1300,
              dur: 0.08,
              gain: 0.05 * C,
              type: `triangle`,
            }))
          : g(t, S, b + 0.035, i, {
              freq: 1500 * x,
              Q: 2,
              dur: 0.018,
              gain: 0.12 * C,
            })));
  let E = (1.1 + 0.9 * y.far) * l * o.roll,
    O = o.tail ?? 1;
  (m(
    u(t, s.brown, b + 0.03, E + 0.3, 1, c),
    p(t, `lowpass`, 300 * o.echoTone, 0.7),
    f(t, b + 0.03, 0.04, (0.34 + 0.4 * y.far) * l * O, E),
    S,
  ),
    m(
      u(t, s.pink, b + 0.02, 0.9 * l, 1, c),
      p(t, `lowpass`, 1900 * o.echoTone, 0.5),
      f(t, b + 0.02, 0.012, (0.22 + 0.12 * y.mid) * O, 0.5 * l * o.roll),
      S,
    ));
  let k = b + E + 0.35;
  return (
    [0.11, 0.23, 0.39, 0.61, 0.9, 1.3].forEach((e, n) => {
      let r = b + e * o.echo * (0.85 + c() * 0.3),
        i = 0.3 * 0.72 ** n * l * O * (0.55 + 0.45 * y.far + 0.3 * y.mid);
      (m(
        u(t, s.pink, r, 0.5, 1, c),
        p(t, `lowpass`, Math.max(380, 1500 - n * 200) * o.echoTone, 0.6),
        f(t, r, 0.006, i, (0.22 + n * 0.07) * o.roll),
        S,
      ),
        (k = Math.max(k, r + 0.6 + n * 0.07)));
    }),
    k
  );
}
function k(e, t, n, r) {
  let i = a(e),
    o = r.wp ?? y.ar,
    s = r.rand,
    c = (r.pitch ?? 1) * o.pitch * (0.96 + s() * 0.08),
    l = o.size,
    g = v(r.d ?? 0, r.layerScale ?? 1),
    _ = n + g.delay,
    b = p(e, `lowpass`, g.lp, 0.5);
  b.connect(t);
  let x = _;
  if (g.close > 0.02) {
    let t = 1 * g.close * o.crack;
    (m(
      u(e, i.white, _, 0.06, c, s),
      p(e, `highpass`, 2200 * c, 0.7),
      f(e, _, 8e-4, t, 0.028),
      b,
    ),
      m(
        u(e, i.white, _, 0.08, c, s),
        p(e, `bandpass`, 5200 * c, 1.5),
        f(e, _, 8e-4, t * 0.55, 0.018),
        b,
      ));
  }
  {
    let t = (0.55 + 0.45 * g.close) * g.mid,
      n = p(e, `bandpass`, 420 * c, 1.1);
    (m(u(e, i.pink, _, 0.3 * l, c, s), n, f(e, _, 0.002, t * 1.4, 0.11 * l), b),
      m(
        u(e, i.white, _, 0.2, c, s),
        p(e, `bandpass`, 1400 * c, 2.5),
        f(e, _, 0.002, t * 0.7, 0.05 * l),
        b,
      ));
  }
  {
    let t = (0.4 + 0.6 * g.close) * l,
      n = d(e, `sine`, 150 * c, _, 0.35 * l);
    (h(n.frequency, 150 * c, 42, _, 0.09 * l),
      m(n, f(e, _, 0.003, t * 1.1, 0.17 * l), b));
  }
  {
    let t = 0.35 * g.mid * o.tail,
      n = 0.45 * l * o.tail;
    (m(
      u(e, i.pink, _ + 0.012, n + 0.1, 1, s),
      p(e, `lowpass`, 2400, 0.6),
      f(e, _ + 0.012, 0.01, t, n),
      b,
    ),
      (x = Math.max(x, _ + n + 0.15)));
  }
  if (g.far > 0.02) {
    let t = 0.9 * g.far * l * o.tail,
      n = 1.1 * l * o.tail;
    m(
      u(e, i.brown, _, n + 0.2, 1, s),
      p(e, `lowpass`, 260, 0.8),
      f(e, _, 0.018, t, n),
      b,
    );
    let r = _ + 0.09 + s() * 0.12;
    (m(
      u(e, i.brown, r, n * 0.8, 1, s),
      p(e, `lowpass`, 180, 0.8),
      f(e, r, 0.03, t * 0.45, n * 0.8),
      b,
    ),
      (x = Math.max(x, r + n * 0.8 + 0.2)));
  }
  return x;
}
function A(e, t, n, r) {
  let i = a(e),
    o = r.rand,
    s = (r.pitch ?? 1) * (0.92 + o() * 0.16);
  m(
    u(e, i.white, n, 0.01, 1, o),
    p(e, `highpass`, 4e3, 0.7),
    f(e, n, 5e-4, 0.35, 0.006),
    t,
  );
  let c = p(e, `bandpass`, 3600 * s, 7);
  (h(c.frequency, 3600 * s, 800 * s, n, 0.3),
    m(u(e, i.white, n, 0.32, 1, o), c, f(e, n + 0.005, 0.03, 0.6, 0.26), t));
  let l = p(e, `bandpass`, 7200 * s, 6);
  return (
    h(l.frequency, 7200 * s, 1600 * s, n, 0.28),
    m(u(e, i.white, n, 0.3, 1, o), l, f(e, n + 0.005, 0.02, 0.18, 0.2), t),
    n + 0.36
  );
}
function ee(e, t, n, r) {
  let i = a(e),
    o = r.rand;
  return (
    m(
      u(e, i.white, n, 0.04, 1, o),
      p(e, `highpass`, 2500, 0.7),
      f(e, n, 6e-4, 1, 0.02),
      t,
    ),
    m(
      u(e, i.pink, n + 0.01, 0.12, 1, o),
      p(e, `bandpass`, 1200, 1),
      f(e, n + 0.01, 0.004, 0.35, 0.08),
      t,
    ),
    n + 0.14
  );
}
var j = {
  grass: (e, t, n, r) => {
    let i = a(e),
      o = r.rand,
      s = r.pitch * (0.9 + o() * 0.2);
    return (
      m(
        u(e, i.white, n, 0.12, s, o),
        p(e, `bandpass`, 2600 * s, 0.9),
        f(e, n, 0.006, 0.28, 0.07),
        t,
      ),
      m(
        u(e, i.pink, n + 0.02, 0.1, s, o),
        p(e, `lowpass`, 500, 0.7),
        f(e, n + 0.02, 0.004, 0.32, 0.05),
        t,
      ),
      n + 0.14
    );
  },
  dirt: (e, t, n, r) => {
    let i = a(e),
      o = r.rand,
      s = r.pitch * (0.92 + o() * 0.16);
    return (
      m(
        u(e, i.pink, n, 0.1, s, o),
        p(e, `lowpass`, 420 * s, 0.8),
        f(e, n, 0.003, 0.6, 0.055),
        t,
      ),
      m(
        u(e, i.crackle, n + 0.008, 0.09, s, o),
        p(e, `bandpass`, 1800, 1),
        f(e, n + 0.008, 0.003, 0.14, 0.05),
        t,
      ),
      n + 0.13
    );
  },
  rock: (e, t, n, r) => {
    let i = r.rand,
      a = r.pitch * (0.9 + i() * 0.2);
    return (
      g(e, t, n, r, {
        freq: 420 * a,
        Q: 0.65,
        dur: 0.085,
        gain: 0.55,
        buf: `pink`,
      }),
      g(e, t, n + 0.015, r, {
        freq: 1500 * a,
        Q: 0.6,
        dur: 0.065,
        gain: 0.2,
        buf: `crackle`,
      }),
      n + 0.13
    );
  },
  sand: (e, t, n, r) => {
    let i = a(e),
      o = r.rand,
      s = r.pitch * (0.9 + o() * 0.2);
    return (
      m(
        u(e, i.white, n, 0.18, s, o),
        p(e, `bandpass`, 5200 * s, 0.6),
        f(e, n, 0.015, 0.22, 0.12),
        t,
      ),
      m(
        u(e, i.pink, n, 0.1, s, o),
        p(e, `lowpass`, 350, 0.7),
        f(e, n, 0.004, 0.3, 0.06),
        t,
      ),
      n + 0.2
    );
  },
  road: (e, t, n, r) => {
    let i = r.rand,
      a = r.pitch * (0.93 + i() * 0.14);
    return (
      g(e, t, n, r, {
        freq: 380 * a,
        Q: 0.7,
        dur: 0.075,
        gain: 0.55,
        buf: `pink`,
      }),
      g(e, t, n + 0.024, r, { freq: 1200 * a, Q: 0.6, dur: 0.04, gain: 0.16 }),
      n + 0.12
    );
  },
  water: (e, t, n, r) => {
    let i = a(e),
      o = r.rand,
      s = r.pitch * (0.9 + o() * 0.2),
      c = p(e, `bandpass`, 900 * s, 1.2);
    (h(c.frequency, 700 * s, 2200 * s, n, 0.18),
      m(u(e, i.white, n, 0.3, s, o), c, f(e, n, 0.01, 0.55, 0.2), t));
    for (let r = 0; r < 4; r++)
      _(e, t, n + 0.04 + o() * 0.16, {
        freq: 900 + o() * 1400,
        to: 1800 + o() * 1200,
        dur: 0.035,
        gain: 0.05,
      });
    return n + 0.34;
  },
  metal: (e, t, n, r) => {
    let i = r.rand,
      a = r.pitch * (0.95 + i() * 0.1);
    return (
      g(e, t, n, r, { freq: 2e3 * a, Q: 2, dur: 0.015, gain: 0.5 }),
      _(e, t, n, { freq: 640 * a, dur: 0.18, gain: 0.12, type: `triangle` }),
      _(e, t, n, { freq: 1730 * a, dur: 0.12, gain: 0.06 }),
      n + 0.22
    );
  },
  wood: (e, t, n, r) => {
    let i = r.rand,
      a = r.pitch * (0.92 + i() * 0.16);
    return (
      g(e, t, n, r, {
        freq: 480 * a,
        Q: 1.5,
        dur: 0.05,
        gain: 0.7,
        buf: `pink`,
      }),
      g(e, t, n + 0.002, r, { freq: 2200 * a, Q: 2, dur: 0.012, gain: 0.25 }),
      n + 0.09
    );
  },
};
((j.concrete = j.road),
  (j.stone = j.rock),
  (j.mud = j.dirt),
  (j.gravel = j.rock),
  (j.snow = j.sand));
function te(e, t, n, r) {
  return (j[r.surface] ?? j.dirt)(e, t, n, { ...r, pitch: r.pitch ?? 1 });
}
function ne(e, t, n, r) {
  let i = a(e),
    o = r.rand,
    s = r.pitch ?? 1;
  return (
    m(
      u(e, i.pink, n, 0.15, s, o),
      p(e, `bandpass`, 520 * s, 0.8),
      f(e, n, 0.008, 0.24, 0.12),
      t,
    ),
    m(
      u(e, i.white, n + 0.035, 0.045, s, o),
      p(e, `bandpass`, 1850 * s, 1.4),
      f(e, n + 0.035, 0.003, 0.075, 0.035),
      t,
    ),
    n + 0.19
  );
}
var M = {
  dirt: (e, t, n, r) => {
    let i = a(e),
      o = r.rand,
      s = r.pitch;
    return (
      m(
        u(e, i.pink, n, 0.14, s, o),
        p(e, `lowpass`, 900 * s, 0.8),
        f(e, n, 0.002, 0.9, 0.08),
        t,
      ),
      m(
        u(e, i.crackle, n + 0.01, 0.16, s, o),
        p(e, `bandpass`, 2400, 0.8),
        f(e, n + 0.01, 0.004, 0.3, 0.1),
        t,
      ),
      n + 0.2
    );
  },
  grass: (e, t, n, r) => {
    let i = a(e),
      o = r.rand,
      s = r.pitch;
    return (
      m(
        u(e, i.pink, n, 0.12, s, o),
        p(e, `lowpass`, 1200 * s, 0.8),
        f(e, n, 0.002, 0.7, 0.06),
        t,
      ),
      m(
        u(e, i.white, n + 0.005, 0.12, s, o),
        p(e, `bandpass`, 3200, 0.9),
        f(e, n + 0.005, 0.004, 0.25, 0.07),
        t,
      ),
      n + 0.16
    );
  },
  sand: (e, t, n, r) => {
    let i = a(e),
      o = r.rand,
      s = r.pitch;
    return (
      m(
        u(e, i.white, n, 0.2, s, o),
        p(e, `bandpass`, 4500 * s, 0.5),
        f(e, n, 0.004, 0.5, 0.13),
        t,
      ),
      m(
        u(e, i.pink, n, 0.1, s, o),
        p(e, `lowpass`, 500, 0.7),
        f(e, n, 0.002, 0.6, 0.05),
        t,
      ),
      n + 0.24
    );
  },
  rock: (e, t, n, r) => {
    let i = r.rand,
      a = r.pitch;
    return (
      g(e, t, n, r, { freq: 3e3 * a, Q: 1.5, dur: 0.02, gain: 0.65 }),
      g(e, t, n + 0.003, r, {
        freq: 700 * a,
        Q: 0.8,
        dur: 0.05,
        gain: 0.7,
        buf: `pink`,
      }),
      i() < 0.2 &&
        _(e, t, n + 0.01, {
          freq: 3800 * a,
          to: 1600 * a,
          dur: 0.16 + i() * 0.1,
          gain: 0.07,
        }),
      n + 0.4
    );
  },
  road: (e, t, n, r) => {
    let i = r.rand,
      a = r.pitch;
    return (
      g(e, t, n, r, { freq: 3600 * a, Q: 1.8, dur: 0.015, gain: 0.65 }),
      g(e, t, n + 0.002, r, {
        freq: 1e3 * a,
        Q: 0.9,
        dur: 0.04,
        gain: 0.5,
        buf: `pink`,
      }),
      i() < 0.2 &&
        _(e, t, n + 0.008, {
          freq: 4200 * a,
          to: 1400 * a,
          dur: 0.18 + i() * 0.1,
          gain: 0.07,
        }),
      n + 0.5
    );
  },
  water: (e, t, n, r) => {
    let i = a(e),
      o = r.rand,
      s = r.pitch,
      c = p(e, `bandpass`, 600 * s, 1.5);
    (h(c.frequency, 500 * s, 2600 * s, n, 0.14),
      m(u(e, i.white, n, 0.3, s, o), c, f(e, n, 0.004, 0.9, 0.16), t),
      m(
        u(e, i.pink, n, 0.08, s, o),
        p(e, `lowpass`, 300, 0.7),
        f(e, n, 0.002, 0.5, 0.05),
        t,
      ));
    for (let r = 0; r < 3; r++)
      _(e, t, n + 0.05 + o() * 0.2, {
        freq: 700 + o() * 900,
        to: 1500 + o() * 1500,
        dur: 0.04,
        gain: 0.06,
      });
    return n + 0.36;
  },
  metal: (e, t, n, r) => {
    let i = r.rand,
      a = r.pitch * (0.95 + i() * 0.1);
    return (
      g(e, t, n, r, { freq: 2200 * a, Q: 1.2, dur: 0.014, gain: 0.6 }),
      g(e, t, n + 0.002, r, {
        freq: 600 * a,
        Q: 0.9,
        dur: 0.04,
        gain: 0.45,
        buf: `pink`,
      }),
      _(e, t, n, { freq: 810 * a, dur: 0.14, gain: 0.1, type: `triangle` }),
      _(e, t, n, { freq: 1370 * a, dur: 0.1, gain: 0.05 }),
      i() < 0.15 &&
        _(e, t, n + 0.012, {
          freq: 4600 * a,
          to: 1700 * a,
          dur: 0.18,
          gain: 0.05,
        }),
      n + 0.22
    );
  },
  wood: (e, t, n, r) => {
    let i = r.rand,
      o = r.pitch;
    return (
      g(e, t, n, r, { freq: 520 * o, Q: 1.6, dur: 0.06, gain: 1, buf: `pink` }),
      g(e, t, n + 0.002, r, { freq: 2600 * o, Q: 1.5, dur: 0.02, gain: 0.5 }),
      m(
        u(e, a(e).crackle, n + 0.02, 0.12, o, i),
        p(e, `bandpass`, 1500, 0.8),
        f(e, n + 0.02, 0.004, 0.25, 0.09),
        t,
      ),
      n + 0.16
    );
  },
  flesh: (e, t, n, r) => {
    let i = a(e),
      o = r.rand,
      s = r.pitch;
    return (
      m(
        u(e, i.pink, n, 0.1, s, o),
        p(e, `lowpass`, 380 * s, 1),
        f(e, n, 0.003, 1, 0.07),
        t,
      ),
      m(
        u(e, i.white, n + 0.004, 0.08, s, o),
        p(e, `bandpass`, 1900, 1.5),
        f(e, n + 0.004, 0.003, 0.2, 0.04),
        t,
      ),
      n + 0.14
    );
  },
  glass: (e, t, n, r) => {
    let i = r.rand,
      a = r.pitch;
    g(e, t, n, r, { freq: 4500 * a, Q: 1, dur: 0.02, gain: 0.9 });
    for (let r = 0; r < 6; r++)
      _(e, t, n + 0.01 + i() * 0.25, {
        freq: 3e3 + i() * 5e3,
        dur: 0.08 + i() * 0.1,
        gain: 0.08,
      });
    return n + 0.4;
  },
};
((M.concrete = M.road),
  (M.stone = M.rock),
  (M.mud = M.dirt),
  (M.gravel = M.rock),
  (M.body = M.flesh));
function re(e, t, n, r) {
  return (M[r.surface] ?? M.dirt)(e, t, n, {
    ...r,
    pitch: (r.pitch ?? 1) * (0.92 + r.rand() * 0.16),
  });
}
function N(e, t, n, r) {
  return (
    g(e, t, n, r, { freq: 2600, Q: 3, dur: 0.02, gain: 0.5 }),
    g(e, t, n + 0.05, r, {
      freq: 900,
      Q: 1,
      dur: 0.07,
      gain: 0.35,
      buf: `pink`,
    }),
    _(e, t, n + 0.05, {
      freq: 1200,
      to: 900,
      dur: 0.05,
      gain: 0.05,
      type: `triangle`,
    }),
    n + 0.16
  );
}
function P(e, t, n, r) {
  return (
    g(e, t, n, r, { freq: 600, Q: 1, dur: 0.05, gain: 0.7, buf: `pink` }),
    g(e, t, n + 0.015, r, { freq: 3200, Q: 2.5, dur: 0.015, gain: 0.5 }),
    _(e, t, n + 0.015, { freq: 2400, dur: 0.06, gain: 0.06 }),
    n + 0.12
  );
}
function F(e, t, n, r) {
  return (
    g(e, t, n, r, { freq: 1800, Q: 2, dur: 0.03, gain: 0.55 }),
    _(e, t, n, { freq: 2900, dur: 0.05, gain: 0.08, type: `triangle` }),
    g(e, t, n + 0.09, r, { freq: 2200, Q: 1.5, dur: 0.025, gain: 0.8 }),
    g(e, t, n + 0.095, r, {
      freq: 700,
      Q: 1,
      dur: 0.05,
      gain: 0.5,
      buf: `pink`,
    }),
    _(e, t, n + 0.09, { freq: 3400, to: 2600, dur: 0.07, gain: 0.07 }),
    n + 0.2
  );
}
var I = {
  ar: { duration: 2.35, tone: 1 },
  carbine: { duration: 2.05, tone: 1.12 },
  dmr: { duration: 2.65, tone: 0.88 },
  sniper: { duration: 3.15, tone: 0.72 },
  lmg: { duration: 4.8, tone: 0.65 },
  smg: { duration: 1.9, tone: 1.2 },
  pistol: { duration: 1.65, tone: 1.35 },
  launcher: { duration: 3.8, tone: 0.55 },
};
function L(e, t, n, r, i = `ar`) {
  let a = I[i],
    o = Number.isFinite(r.duration) ? Math.max(0.5, r.duration) : a.duration,
    s = e.createBiquadFilter();
  return (
    (s.type = `lowpass`),
    (s.frequency.value = 4200 * a.tone),
    s.connect(t),
    i === `launcher`
      ? (g(e, s, n + o * 0.06, r, {
          freq: 800,
          dur: 0.08,
          gain: 0.45,
          buf: `pink`,
        }),
        g(e, s, n + o * 0.28, r, {
          freq: 450,
          dur: 0.28,
          gain: 0.25,
          buf: `brown`,
        }),
        g(e, s, n + o * 0.58, r, {
          freq: 380,
          dur: 0.12,
          gain: 0.65,
          buf: `pink`,
        }),
        g(e, s, n + o * 0.84, r, { freq: 1200, dur: 0.06, gain: 0.55 }),
        n + o)
      : i === `lmg`
        ? (g(e, s, n + o * 0.05, r, {
            freq: 1400,
            Q: 0.6,
            dur: 0.035,
            gain: 0.4,
          }),
          N(e, s, n + o * 0.24, r),
          P(e, s, n + o * 0.68, r),
          g(e, s, n + o * 0.72, r, {
            freq: 2100,
            Q: 0.5,
            dur: 0.07,
            gain: 0.2,
          }),
          g(e, s, n + o * 0.94, r, {
            freq: 620,
            Q: 0.6,
            dur: 0.065,
            gain: 0.65,
            buf: `pink`,
          }),
          n + o)
        : (N(e, s, n + o * 0.06, r),
          P(e, s, n + o * 0.58, r),
          F(e, s, n + o * 0.84, r),
          n + o)
  );
}
function ie(e, t, n, r) {
  return (g(e, t, n, r, { freq: 2800, Q: 3, dur: 0.02, gain: 0.5 }), n + 0.06);
}
function ae(e, t, n, r) {
  let i = a(e),
    o = v(r.d ?? 0, 1.5),
    s = n + o.delay,
    c = p(e, `lowpass`, o.lp, 0.6);
  return (
    c.connect(t),
    m(
      u(e, i.white, s, 0.07, 1, r.rand),
      p(e, `highpass`, 1100, 0.6),
      f(e, s, 0.001, 0.65 * o.close, 0.035),
      c,
    ),
    m(
      u(e, i.pink, s, 0.42, 1, r.rand, !0),
      p(e, `bandpass`, 240, 0.65),
      f(e, s, 0.004, 1.15, 0.28, 0.065),
      c,
    ),
    m(d(e, `sine`, 68, s, 0.23), f(e, s, 0.005, 0.38, 0.19), c),
    m(
      u(e, i.white, s + 0.016, 0.52, 1, r.rand, !0),
      p(e, `bandpass`, 1050, 0.45),
      f(e, s + 0.016, 0.012, 0.52 * (0.35 + 0.65 * o.close), 0.36, 0.045),
      c,
    ),
    m(
      u(e, i.brown, s + 0.045, 0.94, 1, r.rand, !0),
      p(e, `lowpass`, 390, 0.6),
      f(e, s + 0.045, 0.025, 0.62 * (0.45 + 0.55 * o.far), 0.78),
      c,
    ),
    m(
      u(e, i.pink, s + 0.13, 0.32, 1, r.rand, !0),
      p(e, `bandpass`, 470, 0.5),
      f(e, s + 0.13, 0.014, 0.24 * (0.4 + 0.6 * o.mid), 0.27),
      c,
    ),
    o.close > 0.02 &&
      g(e, c, s + 0.065, r, {
        freq: 920,
        dur: 0.022,
        gain: 0.1 * o.close,
        buf: `pink`,
      }),
    s + 1.05
  );
}
function oe(e, t, n, r) {
  let i = a(e);
  (_(e, t, n, { freq: 100, to: 38, dur: 0.18, gain: 0.35 }),
    m(
      u(e, i.brown, n, 0.45, 1, r.rand),
      p(e, `lowpass`, 850),
      f(e, n, 0.008, 0.6, 0.36),
      t,
    ));
  let o = p(e, `bandpass`, 650, 0.6);
  return (
    h(o.frequency, 650, 220, n, 0.5),
    m(
      u(e, i.pink, n + 0.025, 0.65, 1, r.rand),
      o,
      f(e, n + 0.025, 0.04, 0.27, 0.5),
      t,
    ),
    n + 0.72
  );
}
var R = {
  generic: {
    size: 1,
    crack: 1,
    sub: 1,
    crackle: 1,
    boom: 1,
    tail: 1,
    pops: 5,
    ring: 0,
    fuel: 0,
  },
  shell: {
    size: 1.15,
    crack: 1.35,
    sub: 1.25,
    crackle: 0.9,
    boom: 1.15,
    tail: 0.8,
    pops: 7,
    ring: 0.18,
    fuel: 0,
  },
  cannon: {
    size: 0.42,
    crack: 1.25,
    sub: 0.45,
    crackle: 0.8,
    boom: 0.35,
    tail: 0.35,
    pops: 3,
    ring: 0.1,
    fuel: 0,
  },
  rocket: {
    size: 0.95,
    crack: 1,
    sub: 0.9,
    crackle: 0.7,
    boom: 0.9,
    tail: 1.2,
    pops: 4,
    ring: 0,
    fuel: 0.45,
  },
  grenade: {
    size: 0.7,
    crack: 1.3,
    sub: 0.6,
    crackle: 1.5,
    boom: 0.6,
    tail: 0.6,
    pops: 6,
    ring: 0.06,
    fuel: 0,
  },
  claymore: {
    size: 0.5,
    crack: 1.4,
    sub: 0.35,
    crackle: 1.3,
    boom: 0.35,
    tail: 0.3,
    pops: 2,
    ring: 0,
    fuel: 0,
  },
  c4: {
    size: 1.45,
    crack: 1.1,
    sub: 1.5,
    crackle: 0.8,
    boom: 1.3,
    tail: 1.1,
    pops: 8,
    ring: 0,
    fuel: 0,
  },
  wreck: {
    size: 1.5,
    crack: 0.9,
    sub: 1.3,
    crackle: 1.1,
    boom: 1.2,
    tail: 1.4,
    pops: 9,
    ring: 0.3,
    fuel: 1,
  },
};
function z(e, t, n, r) {
  let i = a(e),
    o = r.rand,
    s = R[r.kind] ?? R.generic,
    c = (e) => 1 + (o() * 2 - 1) * e,
    l = (r.size ?? s.size) * c(0.12),
    y = c(0.1),
    b = v(r.d ?? 0, 2.2),
    x = n + b.delay,
    S = p(e, `lowpass`, b.lp, 0.5);
  S.connect(t);
  let C = 0.42,
    w = 0.3 * l,
    T = p(e, `lowpass`, 7e3 * y, 0.6);
  (h(T.frequency, 7e3 * y, 180, x, 1 * l),
    m(
      u(e, i.white, x, w + 1.2 * l, 1, o),
      T,
      f(e, x, 0.003, C * 1.6 * s.crack * (0.45 + 0.55 * b.close), 0.9 * l),
      S,
    ),
    b.close > 0.05 &&
      g(e, S, x, r, {
        freq: 2400 * y,
        Q: 0.8,
        dur: 0.012,
        gain: C * 0.9 * s.crack * b.close,
        buf: `white`,
      }));
  let E = d(e, `sine`, 68 * y, x, 0.9 * l);
  (h(E.frequency, 68 * y, 22, x, 0.55 * l),
    m(
      E,
      f(e, x, 0.005, C * 1.5 * s.sub * l * (0.35 + 0.65 * b.close), 0.65 * l),
      S,
    ));
  let D = f(e, x + 0.1, 0.04, C * 0.7 * s.crackle * b.mid, 1.3 * l);
  (m(
    u(e, i.crackle, x + 0.1, 1.5 * l, 1, o),
    p(e, `bandpass`, 1500 * y, 0.7),
    D,
    S,
  ),
    s.ring > 0 &&
      _(e, S, x + 0.02, {
        freq: 1900 * y,
        to: 700,
        dur: 0.35 * l,
        gain: C * s.ring * b.close,
        type: `triangle`,
      }));
  let O = 2 * l;
  m(
    u(e, i.brown, x, O + 0.3, 1, o),
    p(e, `lowpass`, 230, 0.9),
    f(e, x, 0.025, C * 1.3 * s.boom * (0.45 + 0.55 * b.far), O),
    S,
  );
  let k = x + 0.13 + o() * 0.22;
  m(
    u(e, i.brown, k, O, 1, o),
    p(e, `lowpass`, 150, 0.9),
    f(e, k, 0.05, C * 0.55 * s.boom * (0.25 + 0.75 * b.far), O * 0.9),
    S,
  );
  let A = 2.4 * l;
  if (
    (m(
      u(e, i.pink, x + 0.05, A + 0.2, 1, o),
      p(e, `lowpass`, 900, 0.5),
      f(e, x + 0.05, 0.08, C * 0.45 * s.tail * b.mid, A),
      S,
    ),
    s.fuel > 0)
  ) {
    let t = p(e, `bandpass`, 520, 0.5);
    (h(t.frequency, 520, 240, x + 0.1, 1.4 * l),
      m(
        u(e, i.pink, x + 0.08, 1.6 * l, 1, o),
        t,
        f(e, x + 0.08, 0.12, C * 0.55 * s.fuel * (0.4 + 0.6 * b.mid), 1.4 * l),
        S,
      ));
  }
  for (let t = 0; t < s.pops; t++)
    g(e, S, x + 0.35 + o() * 1.5 * l, r, {
      freq: 400 + o() * 1600,
      Q: 1.5,
      dur: 0.025 + o() * 0.02,
      gain: C * 0.6 * b.close,
      buf: o() < 0.5 ? `pink` : `crackle`,
    });
  if (s.fuel >= 1)
    for (let t = 0; t < 3; t++) {
      let t = x + 0.6 + o() * 2;
      m(
        u(e, i.white, t, 0.12, 1, o),
        p(e, `lowpass`, 1200),
        f(e, t, 0.002, C * 0.5 * (0.3 + 0.7 * b.mid), 0.1),
        S,
      );
    }
  return x + Math.max(O, A) + 0.3;
}
function se(e, t, n, r) {
  let i = a(e),
    o = r.rand,
    s = v(r.d ?? 0, 2),
    c = n + s.delay,
    l = p(e, `lowpass`, s.lp, 0.5);
  l.connect(t);
  let _ = d(e, `sawtooth`, 90, c, 0.5);
  (h(_.frequency, 90, 55, c, 0.45),
    m(_, p(e, `bandpass`, 500, 4), f(e, c, 0.1, 0.18, 0.4), l),
    m(
      u(e, i.brown, c + 0.2, 2.2, 1, o),
      p(e, `lowpass`, 160, 0.9),
      f(e, c + 0.2, 0.15, 1, 1.8),
      l,
    ));
  for (let t = 0; t < 9; t++) {
    let n = c + 0.3 + t * 0.11 + o() * 0.12;
    (g(e, l, n, r, {
      freq: 250 + o() * 600,
      Q: 1.2,
      dur: 0.05 + o() * 0.05,
      gain: 0.5 * s.mid,
      buf: `pink`,
    }),
      g(e, l, n + 0.01, r, {
        freq: 1500 + o() * 2e3,
        Q: 1,
        dur: 0.02,
        gain: 0.2 * s.close,
      }));
  }
  return (
    m(
      u(e, i.crackle, c + 0.3, 1.8, 1, o),
      p(e, `bandpass`, 1200, 0.7),
      f(e, c + 0.3, 0.1, 0.35 * s.mid, 1.4),
      l,
    ),
    m(
      u(e, i.pink, c + 0.8, 2, 1, o),
      p(e, `lowpass`, 1200, 0.5),
      f(e, c + 0.8, 0.3, 0.2, 1.6),
      l,
    ),
    c + 3
  );
}
function ce(e, t, n, r) {
  return (
    _(e, t, n, { freq: 1760, dur: 0.045, gain: 0.32, type: `sine` }),
    g(e, t, n, r, { freq: 5e3, Q: 2, dur: 0.008, gain: 0.25 }),
    n + 0.07
  );
}
function B(e, t, n) {
  return (
    _(e, t, n, { freq: 1046, dur: 0.09, gain: 0.3, type: `triangle` }),
    _(e, t, n + 0.08, { freq: 1568, dur: 0.16, gain: 0.3, type: `triangle` }),
    n + 0.26
  );
}
function V(e, t, n) {
  return (
    _(e, t, n, { freq: 220, dur: 0.14, gain: 0.35, type: `square` }),
    _(e, t, n + 0.12, { freq: 174, dur: 0.18, gain: 0.35, type: `square` }),
    n + 0.32
  );
}
function H(e, t, n) {
  return (
    _(e, t, n, { freq: 1318, dur: 0.14, gain: 0.22, type: `sine` }),
    _(e, t, n + 0.05, { freq: 1976, dur: 0.22, gain: 0.16, type: `sine` }),
    n + 0.3
  );
}
function U(e, t, n, r) {
  let i = p(e, `bandpass`, 800, 3);
  return (
    h(i.frequency, 600, 2400, n, 0.12),
    m(u(e, a(e).white, n, 0.16, 1, r.rand), i, f(e, n, 0.01, 0.3, 0.12), t),
    n + 0.18
  );
}
function W(e, t, n, r) {
  let i = p(e, `bandpass`, 2e3, 3);
  return (
    h(i.frequency, 2400, 500, n, 0.12),
    m(u(e, a(e).white, n, 0.16, 1, r.rand), i, f(e, n, 0.01, 0.3, 0.12), t),
    n + 0.18
  );
}
function G(e, t, n, r) {
  let i = a(e);
  return (
    _(e, t, n, { freq: 150, to: 72, dur: 0.09, gain: 0.95, type: `sine` }),
    m(
      u(e, i.pink, n, 0.07, 1, r.rand),
      p(e, `lowpass`, 900, 0.9),
      f(e, n, 0.002, 0.8, 0.05),
      t,
    ),
    m(
      u(e, i.white, n, 0.03, 1, r.rand),
      p(e, `bandpass`, 1700, 1.2),
      f(e, n, 0.001, 0.22, 0.02),
      t,
    ),
    n + 0.12
  );
}
var K = new WeakMap();
function le(e) {
  let t = K.get(e);
  if (t) return t;
  let n = e.sampleRate;
  t = e.createBuffer(2, Math.floor(n * 0.35), n);
  let r = 625341585;
  for (let e = 0; e < 2; e++) {
    let n = t.getChannelData(e);
    for (let e = 0; e < n.length; e++)
      ((r = (Math.imul(r, 1664525) + 1013904223) >>> 0),
        (n[e] = (r / 2147483648 - 1) * (1 - e / n.length) ** 4));
  }
  return (K.set(e, t), t);
}
function ue(e, t, n, r) {
  let i = e.createConvolver();
  i.buffer = le(e);
  let o = e.createGain();
  ((o.gain.value = 0.5), m(i, o, t));
  let s = [1, 1.48, 2.17, 2.9, 3.99],
    c = [0.34, 0.27, 0.2, 0.13, 0.08],
    l = [0.24, 0.18, 0.13, 0.09, 0.06];
  for (let [a, o] of [
    [t, 1],
    [i, 0.6],
  ])
    (g(e, a, n, r, { freq: 5e3, Q: 1.2, dur: 0.012, gain: 0.6 * o }),
      s.forEach((t, r) =>
        _(e, a, n + 0.002, {
          freq: 1650 * t,
          to: 1650 * t * 0.985,
          dur: l[r],
          gain: c[r] * o,
          type: `triangle`,
        }),
      ));
  return (
    m(
      u(e, a(e).white, n, 0.04, 1, r.rand),
      p(e, `bandpass`, 2200, 2),
      f(e, n, 0.001, 0.4, 0.04),
      t,
    ),
    _(e, t, n, { freq: 520, to: 440, dur: 0.08, gain: 0.3, type: `triangle` }),
    _(e, t, n, { freq: 150, to: 65, dur: 0.09, gain: 0.6, type: `sine` }),
    n + 0.65
  );
}
function de(e, t, n, r) {
  let i = a(e);
  return (
    m(
      u(e, i.pink, n, 0.15, 1, r.rand),
      p(e, `bandpass`, 190, 0.65),
      f(e, n, 0.002, 1.05, 0.12),
      t,
    ),
    m(
      u(e, i.white, n + 0.006, 0.075, 1, r.rand),
      p(e, `bandpass`, 1300, 0.55),
      f(e, n + 0.006, 0.003, 0.19, 0.055),
      t,
    ),
    m(
      u(e, i.pink, n + 0.035, 0.16, 1, r.rand),
      p(e, `bandpass`, 850, 0.7),
      f(e, n + 0.035, 0.012, 0.24, 0.13),
      t,
    ),
    m(
      u(e, i.white, n + 0.06, 0.24, 1, r.rand),
      p(e, `bandpass`, 620, 0.6),
      f(e, n + 0.06, 0.035, 0.13, 0.19),
      t,
    ),
    n + 0.34
  );
}
function fe(e, t, n, r) {
  let i = a(e),
    o = d(e, `sine`, 240, n, 1.2);
  return (
    h(o.frequency, 240, 60, n, 1),
    m(o, f(e, n, 0.03, 0.4, 1), t),
    m(
      u(e, i.brown, n + 0.1, 1.2, 1, r.rand),
      p(e, `lowpass`, 200, 0.8),
      f(e, n + 0.1, 0.02, 0.8, 0.9),
      t,
    ),
    m(
      u(e, i.pink, n + 0.35, 0.3, 1, r.rand),
      p(e, `lowpass`, 500, 0.8),
      f(e, n + 0.35, 0.005, 0.45, 0.15),
      t,
    ),
    n + 1.3
  );
}
function pe(e, t, n, r) {
  let i = a(e),
    o = r.rand;
  return (
    m(
      u(e, i.pink, n, 0.2, 1, o),
      p(e, `lowpass`, 350, 0.9),
      f(e, n, 0.004, 0.7, 0.12),
      t,
    ),
    m(
      u(e, i.crackle, n + 0.03, 0.2, 1, o),
      p(e, `bandpass`, 1400, 0.8),
      f(e, n + 0.03, 0.004, 0.18, 0.12),
      t,
    ),
    g(e, t, n + 0.16, r, {
      freq: 400,
      Q: 1,
      dur: 0.05,
      gain: 0.35,
      buf: `pink`,
    }),
    n + 0.3
  );
}
function me(e, t, n, r) {
  return (
    m(
      u(e, a(e).pink, n, 0.12, 1, r.rand),
      p(e, `bandpass`, 900, 0.8),
      f(e, n, 0.01, 0.3, 0.08),
      t,
    ),
    n + 0.14
  );
}
function he(e, t, n, r) {
  let i = j[r.surface ?? `dirt`] ?? j.dirt;
  return (
    i(e, t, n, { ...r, pitch: 0.8 }),
    i(e, t, n + 0.05, { ...r, pitch: 0.75 }),
    n + 0.25
  );
}
function ge(e, t, n, r) {
  let i = 0.48,
    o = a(e);
  for (let [r, a, o, s] of [
    [`sine`, 700, 3400, 0.16],
    [`triangle`, 350, 1700, 0.05],
  ]) {
    let c = d(e, r, a, n, i);
    h(c.frequency, a, o, n, i);
    let u = e.createGain();
    (u.gain.setValueAtTime(l, n),
      u.gain.linearRampToValueAtTime(s, n + i * 0.8),
      u.gain.exponentialRampToValueAtTime(l, n + i + 0.03),
      m(c, u, t));
  }
  let s = d(e, `sawtooth`, 100, n, i),
    c = e.createGain();
  return (
    c.gain.setValueAtTime(l, n),
    c.gain.linearRampToValueAtTime(0.05, n + i * 0.9),
    c.gain.exponentialRampToValueAtTime(l, n + i + 0.02),
    m(s, p(e, `bandpass`, 400, 1.2), c, t),
    m(
      u(e, o.white, n, i, 1, r.rand),
      p(e, `highpass`, 5e3, 0.7),
      f(e, n, i * 0.8, 0.03, 0.08),
      t,
    ),
    _(e, t, n + i - 0.06, {
      freq: 2600,
      dur: 0.07,
      gain: 0.12,
      type: `square`,
    }),
    n + i + 0.1
  );
}
function _e(e, t, n, r) {
  let i = a(e);
  (m(
    u(e, i.white, n, 0.12, 1, r.rand),
    p(e, `highpass`, 1800, 0.6),
    f(e, n, 0.001, 0.75, 0.08),
    t,
  ),
    m(
      u(e, i.crackle, n, 0.3, 1.4, r.rand),
      p(e, `bandpass`, 3200, 0.7),
      f(e, n, 0.002, 0.32, 0.22),
      t,
    ),
    m(
      d(e, `sawtooth`, 120, n, 0.34),
      p(e, `bandpass`, 900, 0.9),
      f(e, n, 0.003, 0.3, 0.3),
      t,
    ));
  let o = d(e, `sine`, 95, n + 0.01, 0.24);
  return (
    h(o.frequency, 95, 42, n + 0.01, 0.2),
    m(o, f(e, n + 0.01, 0.003, 0.9, 0.2), t),
    m(
      u(e, i.pink, n + 0.02, 0.18, 1, r.rand),
      p(e, `lowpass`, 300, 0.8),
      f(e, n + 0.02, 0.003, 0.55, 0.14),
      t,
    ),
    n + 0.42
  );
}
function ve(e, t, n, r) {
  let i = a(e);
  return (
    m(
      u(e, i.white, n, 0.26, 1, r.rand),
      p(e, `bandpass`, 4200, 0.9),
      f(e, n, 0.02, 0.22, 0.12),
      t,
    ),
    m(
      u(e, i.crackle, n, 0.22, 1.2, r.rand),
      p(e, `highpass`, 2500, 0.7),
      f(e, n, 0.005, 0.2, 0.14),
      t,
    ),
    _(e, t, n + 0.03 + r.rand() * 0.08, {
      freq: 1900 + r.rand() * 900,
      dur: 0.05,
      gain: 0.04,
    }),
    n + 0.3
  );
}
function ye(e, t, n, r) {
  let i = a(e),
    o = r.pitch ?? 1,
    s = u(e, i.white, n, 0.5, 1, r.rand),
    c = p(e, `bandpass`, 700 * o, 3.5),
    g = p(e, `bandpass`, 1900 * o, 5);
  (h(c.frequency, 600 * o, 1100 * o, n, 0.42),
    h(g.frequency, 1500 * o, 2500 * o, n, 0.42));
  let _ = e.createGain();
  (_.gain.setValueAtTime(l, n),
    _.gain.linearRampToValueAtTime(0.9, n + 0.05),
    _.gain.linearRampToValueAtTime(0.7, n + 0.34),
    _.gain.exponentialRampToValueAtTime(l, n + 0.46),
    s.connect(c),
    s.connect(g),
    c.connect(_),
    g.connect(_),
    _.connect(t));
  let v = d(e, `sawtooth`, 190 * o, n + 0.02, 0.4);
  return (
    h(v.frequency, 190 * o, 260 * o, n + 0.02, 0.36),
    m(
      v,
      p(e, `bandpass`, 900 * o, 2),
      f(e, n + 0.02, 0.06, 0.06, 0.3, 0.05),
      t,
    ),
    m(
      u(e, i.pink, n + 0.47, 0.06, 1, r.rand),
      p(e, `bandpass`, 500 * o, 1.5),
      f(e, n + 0.47, 0.002, 0.35, 0.04),
      t,
    ),
    m(
      u(e, i.white, n + 0.56, 0.5, 1, r.rand),
      p(e, `bandpass`, 800 * o, 2.2),
      f(e, n + 0.56, 0.03, 0.4, 0.4),
      t,
    ),
    n + 1.05
  );
}
function be(e, t, n) {
  for (let [r, i] of [
    [3900, 0.07],
    [4010, 0.045],
    [7800, 0.012],
  ]) {
    let a = d(e, `sine`, r, n, 2.4),
      o = e.createGain();
    (o.gain.setValueAtTime(l, n),
      o.gain.linearRampToValueAtTime(i, n + 0.08),
      o.gain.setValueAtTime(i, n + 0.35),
      o.gain.exponentialRampToValueAtTime(l, n + 2.4),
      m(a, o, t));
  }
  return n + 2.45;
}
function xe(e, t, n) {
  return (
    _(e, t, n, { freq: 55, dur: 0.16, gain: 0.8, type: `sine` }),
    _(e, t, n + 0.22, { freq: 48, dur: 0.14, gain: 0.55, type: `sine` }),
    n + 0.45
  );
}
function Se(e, t, n, r) {
  let i = p(e, `bandpass`, 3800, 2.5);
  return (
    h(i.frequency, 2600, 5200, n, 0.07),
    m(u(e, a(e).white, n, 0.09, 1, r.rand), i, f(e, n, 0.004, 0.32, 0.06), t),
    g(e, t, n + 0.085, r, { freq: 5200, Q: 4, dur: 0.012, gain: 0.5 }),
    _(e, t, n + 0.09, { freq: 3100, dur: 0.06, gain: 0.05, type: `triangle` }),
    n + 0.2
  );
}
function Ce(e, t, n, r) {
  g(e, t, n, r, { freq: 4400, Q: 3, dur: 0.01, gain: 0.45 });
  let i = 2300 + r.rand() * 400;
  return (
    _(e, t, n + 0.004, {
      freq: i,
      to: i * 0.96,
      dur: 0.24,
      gain: 0.16,
      type: `triangle`,
    }),
    _(e, t, n + 0.004, { freq: i * 2.71, dur: 0.12, gain: 0.05, type: `sine` }),
    n + 0.3
  );
}
function we(e, t, n, r) {
  return (
    g(e, t, n, r, {
      freq: 900 + r.rand() * 300,
      Q: 1.4,
      dur: 0.035,
      gain: 0.8,
      buf: `pink`,
    }),
    g(e, t, n, r, { freq: 3300, Q: 3, dur: 0.012, gain: 0.35 }),
    _(e, t, n + 0.002, {
      freq: 1480 + r.rand() * 260,
      dur: 0.09,
      gain: 0.07,
      type: `triangle`,
    }),
    n + 0.14
  );
}
function Te(e, t, n, r) {
  let i = a(e),
    o = v(r.d ?? 0, 1.8),
    s = n + o.delay,
    c = p(e, `lowpass`, o.lp, 0.65);
  (c.connect(t),
    m(
      u(e, i.white, s, 0.06, 1, r.rand),
      p(e, `highpass`, 1300, 0.6),
      f(e, s, 0.001, 0.85 * o.close, 0.025),
      c,
    ),
    m(
      u(e, i.pink, s, 0.45, 1, r.rand),
      p(e, `bandpass`, 230, 0.65),
      f(e, s, 0.003, 1.65 * (0.6 + 0.4 * o.mid), 0.3),
      c,
    ),
    m(
      u(e, i.brown, s, 0.7, 1, r.rand),
      p(e, `lowpass`, 160, 0.7),
      f(e, s, 0.005, 1.1, 0.5),
      c,
    ));
  let l = d(e, `sine`, 78, s, 0.21);
  (h(l.frequency, 78, 48, s, 0.14), m(l, f(e, s, 0.002, 0.46, 0.18), c));
  let _ = 0.75 + 0.6 * o.far;
  return (
    m(
      u(e, i.pink, s + 0.07, _ + 0.03, 1, r.rand),
      p(e, `lowpass`, 700, 0.65),
      f(e, s + 0.07, 0.022, 0.42 + 0.25 * o.far, _),
      c,
    ),
    o.close > 0.02 &&
      (g(e, c, s + 0.055, r, {
        freq: 480,
        Q: 0.8,
        dur: 0.07,
        gain: 0.55 * o.close,
        buf: `pink`,
      }),
      g(e, c, s + 0.85, r, {
        freq: 950,
        Q: 1.4,
        dur: 0.045,
        gain: 0.2 * o.close,
      })),
    s + Math.max(_ + 0.14, 1)
  );
}
function Ee(e, t, n, r) {
  return (
    g(e, t, n, r, { freq: 1800, Q: 2, dur: 0.03, gain: 0.5 }),
    g(e, t, n + 0.14, r, {
      freq: 350,
      Q: 1,
      dur: 0.07,
      gain: 0.9,
      buf: `pink`,
    }),
    _(e, t, n + 0.14, { freq: 520, dur: 0.15, gain: 0.08, type: `triangle` }),
    n + 0.35
  );
}
function De(e, t, n, r) {
  return (
    g(e, t, n, r, { freq: 2200, Q: 2, dur: 0.025, gain: 0.5 }),
    g(e, t, n + 0.1, r, { freq: 500, Q: 1, dur: 0.05, gain: 0.6, buf: `pink` }),
    n + 0.25
  );
}
function Oe(e, t, n) {
  for (let r of [392, 494])
    m(
      d(e, `sawtooth`, r, n, 0.45),
      p(e, `lowpass`, 1800, 1),
      f(e, n, 0.02, 0.25, 0.4, 0.2),
      t,
    );
  return n + 0.7;
}
function ke(e, t, n) {
  for (let r = 0; r < 3; r++) {
    let i = n + r * 0.62;
    for (let [n, r, a] of [
      [`sawtooth`, 1, 0.34],
      [`square`, 0.5, 0.16],
    ]) {
      let o = d(e, n, 300 * r, i, 0.5);
      (h(o.frequency, 300 * r, 640 * r, i, 0.46, !1),
        m(o, p(e, `bandpass`, 900, 0.9), f(e, i, 0.03, a, 0.14, 0.3), t));
    }
  }
  return n + 2;
}
function Ae(e, t, n, r) {
  let i = a(e),
    o = r.rand;
  m(
    u(e, i.pink, n, 0.4, 1, o),
    p(e, `lowpass`, 500, 0.8),
    f(e, n, 0.004, 1.2, 0.3),
    t,
  );
  for (let r = 0; r < 4; r++)
    _(e, t, n + o() * 0.1, {
      freq: 500 + o() * 1500,
      dur: 0.3 + o() * 0.3,
      gain: 0.15,
      type: `triangle`,
    });
  return (
    m(
      u(e, i.crackle, n + 0.02, 0.5, 1, o),
      p(e, `bandpass`, 2500, 0.8),
      f(e, n + 0.02, 0.01, 0.4, 0.35),
      t,
    ),
    n + 0.7
  );
}
function je(e, t, n, r) {
  let i = a(e),
    o = e.createGain();
  (o.gain.setValueAtTime(1e-4, n), o.gain.linearRampToValueAtTime(1, n + 0.8));
  let s = p(e, `lowpass`, 900, 0.5);
  (s.connect(o), o.connect(t));
  let c = e.createGain();
  ((c.gain.value = 0), c.connect(o));
  let l = [],
    f = [],
    h = (t, i) => {
      let a = u(e, t, n, 0, i, r.rand, !0);
      return (l.push([a, i]), a);
    },
    g = e.createGain();
  g.gain.value = 0.55;
  let _ = d(e, `sine`, 41, n, 3600),
    v = d(e, `sine`, 58, n, 3600);
  f.push([_, 41], [v, 58]);
  let y = d(e, `sine`, 3.1, n, 3600),
    b = e.createGain();
  ((b.gain.value = 0.35),
    y.connect(b),
    b.connect(g.gain),
    _.connect(g),
    v.connect(g),
    g.connect(s),
    m(
      h(i.brown, 1),
      p(e, `lowpass`, 160, 0.7),
      (() => {
        let t = e.createGain();
        return ((t.gain.value = 1.1), t);
      })(),
      s,
    ),
    m(
      h(i.pink, 1),
      p(e, `bandpass`, 420, 0.6),
      (() => {
        let t = e.createGain();
        return ((t.gain.value = 0.9), t);
      })(),
      s,
    ),
    m(
      h(i.pink, 1.2),
      p(e, `bandpass`, 1500, 0.5),
      (() => {
        let t = e.createGain();
        return ((t.gain.value = 0.35), t);
      })(),
      s,
    ));
  let x = e.createGain();
  x.gain.value = 0;
  let S = d(e, `square`, 7.6, n, 3600),
    C = e.createGain();
  ((C.gain.value = 0.5),
    S.connect(C),
    C.connect(x.gain),
    f.push([S, 7.6]),
    m(h(i.crackle, 0.9), p(e, `bandpass`, 1300, 1.2), x, c),
    m(
      h(i.pink, 0.8),
      p(e, `bandpass`, 700, 2),
      (() => {
        let t = e.createGain();
        return ((t.gain.value = 0.25), t);
      })(),
      x,
    ));
  let w = e.createGain();
  ((w.gain.value = 0), w.connect(c));
  let T = d(e, `sine`, 2870, n, 3600),
    E = d(e, `sine`, 3390, n, 3600);
  f.push([T, 2870], [E, 3390]);
  let D = d(e, `sine`, 5.5, n, 3600),
    O = e.createGain();
  ((O.gain.value = 40),
    D.connect(O),
    O.connect(T.frequency),
    O.connect(E.frequency));
  let k = e.createGain();
  return (
    (k.gain.value = 0.18),
    T.connect(k),
    E.connect(k),
    k.connect(w),
    m(
      h(i.white, 1),
      p(e, `bandpass`, 3100, 9),
      (() => {
        let t = e.createGain();
        return ((t.gain.value = 0.7), t);
      })(),
      w,
    ),
    m(
      h(i.white, 1),
      p(e, `highpass`, 5200, 0.7),
      (() => {
        let t = e.createGain();
        return ((t.gain.value = 0.06), t);
      })(),
      c,
    ),
    r.handle &&
      (r.handle.setParam = (e, t, n) => {
        if (e === `near`)
          (s.frequency.setTargetAtTime(260 + 7e3 * t * t, n, 0.08),
            c.gain.setTargetAtTime(t * t, n, 0.08));
        else if (e === `dop`) {
          for (let [e, r] of l) e.playbackRate.setTargetAtTime(r * t, n, 0.05);
          for (let [e, r] of f) e.frequency.setTargetAtTime(r * t, n, 0.05);
        } else e === `curve` && w.gain.setTargetAtTime(t, n, 0.15);
      }),
    1 / 0
  );
}
function Me(e, t, n, r) {
  let i = a(e),
    o = r.size ?? 1,
    s = p(e, `lowpass`, 3200, 0.8);
  (s.frequency.setValueAtTime(3200, n),
    s.frequency.exponentialRampToValueAtTime(110, n + 0.7),
    m(u(e, i.pink, n, 1, 1, r.rand), s, f(e, n, 0.035, 1.4 * o, 0.8), t));
  let c = d(e, `sine`, 55, n, 0.6);
  return (
    c.frequency.exponentialRampToValueAtTime(28, n + 0.5),
    m(c, f(e, n, 0.01, 0.9 * o, 0.45), t),
    n + 1.1
  );
}
function Ne(e, t, n, r) {
  let i = a(e),
    o = r.duration ?? 7,
    s = e.createGain();
  (s.gain.setValueAtTime(0.001, n),
    s.gain.exponentialRampToValueAtTime(0.7, n + o),
    s.gain.linearRampToValueAtTime(1e-4, n + o + 0.25),
    s.connect(t));
  for (let [t, a, c] of [
    [2250, 14, 0.8],
    [3650, 16, 0.6],
    [5100, 10, 0.3],
  ])
    m(
      u(e, i.white, n, o + 0.3, 1, r.rand, !0),
      p(e, `bandpass`, t, a),
      (() => {
        let t = e.createGain();
        return ((t.gain.value = c), t);
      })(),
      s,
    );
  for (let [t, r] of [
    [1870, 0.05],
    [2630, 0.04],
    [3410, 0.03],
  ]) {
    let i = d(e, `sine`, t, n, o + 0.3),
      a = e.createGain();
    ((a.gain.value = r), i.connect(a), a.connect(s));
  }
  return (
    m(
      u(e, i.brown, n, o + 0.3, 1, r.rand, !0),
      p(e, `lowpass`, 90, 0.7),
      (() => {
        let t = e.createGain();
        return ((t.gain.value = 0.5), t);
      })(),
      s,
    ),
    n + o + 0.3
  );
}
function Pe(e, t, n, r) {
  let i = a(e);
  return (
    m(
      u(e, i.crackle, n, 0.35, 1.6, r.rand),
      p(e, `highpass`, 1800, 0.7),
      f(e, n, 0.002, 1.6, 0.3),
      t,
    ),
    m(
      u(e, i.white, n, 0.12, 1, r.rand),
      p(e, `bandpass`, 4200, 2),
      f(e, n, 0.001, 0.9, 0.08),
      t,
    ),
    m(
      d(e, `sawtooth`, 100, n, 0.25),
      p(e, `lowpass`, 600, 1),
      f(e, n, 0.005, 0.2, 0.2),
      t,
    ),
    n + 0.4
  );
}
function Fe(e, t, n, r) {
  let i = (r?.size ?? 1) > 1;
  for (let [r, a] of i
    ? [
        [n, 2.4],
        [n + 2.6, 0.5],
      ]
    : [
        [n, 0.9],
        [n + 1.05, 0.45],
      ])
    for (let [n, i] of [
      [311, 0.3],
      [370, 0.26],
      [622, 0.08],
    ])
      m(
        d(e, `sawtooth`, n, r, a + 0.3),
        p(e, `lowpass`, 1500, 1.2),
        f(e, r, 0.04, i, 0.2, a - 0.1),
        t,
      );
  return n + (i ? 3.4 : 2);
}
function Ie(e, t, n, r) {
  let i = r.rpm ?? 0.3,
    o = 28 + i * 70,
    s = d(e, `sawtooth`, o, n, 3600),
    c = d(e, `square`, o * 0.5, n, 3600),
    l = d(e, `sawtooth`, o * 2.02, n, 3600),
    f = p(e, `lowpass`, 400 + i * 900, 1.2),
    h = e.createGain();
  (h.gain.setValueAtTime(1e-4, n),
    h.gain.linearRampToValueAtTime(0.35, n + 0.3),
    s.connect(f),
    c.connect(f),
    l.connect(f),
    f.connect(h),
    h.connect(t));
  let g = a(e),
    _ = e.createGain();
  return (
    (_.gain.value = 0.12),
    m(
      u(e, g.pink, n, 0, 1, r.rand, !0),
      p(e, `bandpass`, 600 + i * 800, 0.8),
      _,
      h,
    ),
    r.handle &&
      (r.handle.setRpm = (e, t) => {
        let n = 28 + e * 70,
          r = 0.15;
        (s.frequency.setTargetAtTime(n, t, r),
          c.frequency.setTargetAtTime(n * 0.5, t, r),
          l.frequency.setTargetAtTime(n * 2.02, t, r),
          f.frequency.setTargetAtTime(400 + e * 900, t, r));
      }),
    1 / 0
  );
}
function Le(e, t, n, r) {
  let i = d(e, `sine`, 18, n, 3600),
    a = d(e, `triangle`, 72, n, 3600),
    o = e.createGain(),
    s = e.createGain();
  return (
    (o.gain.value = 0.16),
    (s.gain.value = 0.12),
    i.connect(s),
    s.connect(o.gain),
    a.connect(o),
    o.connect(t),
    r.handle &&
      (r.handle.setRpm = (e, t) => {
        (i.frequency.setTargetAtTime(16 + e * 7, t, 0.3),
          a.frequency.setTargetAtTime(62 + e * 35, t, 0.3));
      }),
    1 / 0
  );
}
function Re(e, t, n, r) {
  let i = r.rand,
    a = 2400 + i() * 1800,
    o = 2 + Math.floor(i() * 4),
    s = n;
  for (let n = 0; n < o; n++) {
    let n = 0.04 + i() * 0.06,
      r = d(e, `sine`, a, s, n),
      o = i() < 0.5;
    (h(r.frequency, a * (o ? 0.85 : 1.2), a * (o ? 1.25 : 0.9), s, n),
      m(r, f(e, s, 0.008, 0.16, n), t),
      (s += n + 0.03 + i() * 0.08));
  }
  return s + 0.05;
}
function ze(e, t, n, r) {
  let i = r.rand,
    a = 3900 + i() * 900,
    o = 0.5 + i() * 0.9,
    s = d(e, `sine`, a, n, o),
    c = d(e, `square`, 13 + i() * 6, n, o),
    l = e.createGain();
  l.gain.value = 0.5;
  let u = e.createGain();
  return (
    (u.gain.value = 0.5),
    c.connect(l),
    l.connect(u.gain),
    m(s, u, p(e, `bandpass`, a, 8), f(e, n, 0.08, 0.12, o, 0), t),
    n + o + 0.05
  );
}
var q = (e, t = {}) => ({
    build: (t, n, r, i) => k(t, n, r, { ...i, wp: i.wp ?? y[e] }),
    pri: 7,
    ref: 10,
    max: 900,
    bus: `sfx`,
    layered: !0,
    ...t,
  }),
  J = (e) => ({
    build: (t, n, r, i) => re(t, n, r, { ...i, surface: i.surface ?? e }),
    pri: 4,
    ref: 3,
    max: 120,
    bus: `sfx`,
  }),
  Y = (e) => ({
    build: (t, n, r, i) => te(t, n, r, { ...i, surface: i.surface ?? e }),
    pri: 3,
    ref: 2.4,
    max: 60,
    bus: `sfx`,
  });
function Be(e, t, n, r) {
  let i = a(e),
    o = r.rand,
    s = r.size ?? 1;
  (m(
    u(e, i.white, n, 0.5, 1, o),
    p(e, `highpass`, 1900),
    f(e, n, 0.002, 0.8 * s, 0.36),
    t,
  ),
    m(
      u(e, i.pink, n, 0.8, 1, o),
      p(e, `bandpass`, 3600, 0.7),
      f(e, n, 0.003, 0.45 * s, 0.6),
      t,
    ),
    g(e, t, n, r, { freq: 190, Q: 0.8, dur: 0.06, gain: 0.5, buf: `pink` }));
  let c = Math.round(12 + 10 * s);
  for (let r = 0; r < c; r++) {
    let r = n + 0.03 + o() ** 1.6 * 1.3 * s;
    _(e, t, r, {
      freq: 2800 + o() * 4800,
      dur: 0.04 + o() * 0.1,
      gain: 0.09 * (1 - (r - n) / (1.5 * s)) + 0.01,
      type: o() < 0.3 ? `triangle` : `sine`,
    });
  }
  return n + 1.6 * s;
}
function Ve(e, t, n, r) {
  return (
    g(e, t, n, r, { freq: 1800, Q: 3, dur: 0.012, gain: 0.3 }),
    g(e, t, n + 0.16, r, { freq: 2100, Q: 3, dur: 0.01, gain: 0.22 }),
    m(
      d(e, `sawtooth`, 120, n + 0.05, 0.7),
      p(e, `lowpass`, 520),
      f(e, n + 0.05, 0.04, 0.05, 0.6),
      t,
    ),
    n + 0.8
  );
}
function He(e, t, n, r) {
  return (
    m(
      u(e, a(e).crackle, n, 0.25, 1, r.rand),
      p(e, `bandpass`, 3200, 1.2),
      f(e, n, 0.001, 0.5, 0.18),
      t,
    ),
    n + 0.3
  );
}
function Ue(e, t, n, r) {
  let i = a(e),
    o = r.rand;
  m(
    u(e, i.pink, n, 0.7, 1, o),
    p(e, `bandpass`, 2600, 0.5),
    f(e, n, 0.004, 0.3, 0.55),
    t,
  );
  for (let i = 0; i < 6; i++)
    g(e, t, n + o() * 0.5, r, {
      freq: 3e3 + o() * 2500,
      Q: 1,
      dur: 0.03,
      gain: 0.1,
    });
  return n + 0.8;
}
function We(e, t, n, r) {
  return (
    m(
      u(e, a(e).white, n, 4, 1, r.rand, !0),
      p(e, `highpass`, 2800),
      f(e, n, 0.06, 0.2, 1.6, 2.2),
      t,
    ),
    n + 4
  );
}
function Ge(e, t, n, r) {
  let i = a(e),
    o = r.rand;
  m(
    u(e, i.pink, n, 1.2, 1, o),
    p(e, `lowpass`, 1500),
    f(e, n, 0.01, 0.45, 0.9),
    t,
  );
  for (let r = 0; r < 5; r++)
    _(e, t, n + 0.1 + o() * 0.8, {
      freq: 280 + o() * 300,
      to: 520 + o() * 400,
      dur: 0.07,
      gain: 0.06,
    });
  return n + 1.3;
}
function Ke(e, t, n, r) {
  let i = r.rand,
    a = 3.6,
    o = f(e, n, 1.1, 0.22, 1.3, 1.2),
    s = p(e, `bandpass`, 420, 5),
    c = new Float32Array(32).map(
      (e, t) => 380 + 260 * Math.sin((t / 31) * Math.PI) + (i() - 0.5) * 120,
    );
  s.frequency.setValueCurveAtTime(c, n, a);
  for (let t of [52, 77.5]) {
    let r = d(e, `sawtooth`, t, n, a),
      o = new Float32Array(24).map(() => t * (0.94 + i() * 0.12));
    (r.frequency.setValueCurveAtTime(o, n, a), r.connect(s));
  }
  m(s, o, t);
  for (let a = 0; a < 7; a++)
    g(e, t, n + 0.4 + i() * 3, r, {
      freq: 850 + i() * 700,
      Q: 9,
      dur: 0.05,
      gain: 0.12,
      buf: `pink`,
    });
  return n + a + 0.2;
}
function qe(e, t, n, r) {
  let i = a(e),
    o = r.rand;
  return (
    m(
      u(e, i.brown, n, 6.6, 1, o, !0),
      p(e, `lowpass`, 380, 0.5),
      f(e, n, 1.2, 0.35, 1.5, 3.8),
      t,
    ),
    m(
      u(e, i.pink, n, 6.6, 1, o, !0),
      p(e, `bandpass`, 1100, 0.4),
      f(e, n, 1.2, 0.05, 1.5, 3.8),
      t,
    ),
    n + 6.6
  );
}
function Je(e, t, n, r) {
  let i = r.rand,
    a = 360 * (r.pitch ?? 1),
    o = p(e, `lowpass`, 1500),
    s = (t, n) => {
      for (let r of [1, 1.26])
        m(d(e, `square`, a * r, t, n + 0.1), f(e, t, 0.01, 0.1, 0.08, n), o);
    };
  return (
    s(n, 0.22 + i() * 0.35),
    i() < 0.35 && s(n + 0.5, 0.18),
    o.connect(t),
    n + 1.1
  );
}
function Ye(e, t, n, r) {
  let i = 4.6,
    a = d(e, `triangle`, 700, n, i),
    o = new Float32Array(40).map(
      (e, t) => 720 + 560 * (0.5 - 0.5 * Math.cos((t / 39) * Math.PI * 4)),
    );
  return (
    a.frequency.setValueCurveAtTime(o, n, i),
    m(a, p(e, `lowpass`, 1700), f(e, n, 0.7, 0.1, 0.9, 3), t),
    n + i
  );
}
function Xe(e, t, n, r) {
  let i = a(e),
    o = r.rand,
    s = 3.2;
  m(
    u(e, i.brown, n, s, 0.8 + o() * 0.3, o, !0),
    p(e, `lowpass`, 420),
    f(e, n, 0.5, 0.32, 1.4, 1.3),
    t,
  );
  for (let r = 0; r < 16; r++) {
    let r = n + o() * 3.1;
    m(
      u(e, i.crackle, r, 0.07, 1, o),
      p(e, `bandpass`, 900 + o() * 2800, 1.1),
      f(e, r, 0.002, 0.16 + o() * 0.22, 0.05),
      t,
    );
  }
  return n + s;
}
function Ze(e, t, n, r) {
  let i = 4.4,
    a = new Float32Array(48).map(
      (e, t) => 620 + 780 * (0.5 - 0.5 * Math.cos((t / 47) * Math.PI * 2)),
    );
  for (let [r, o] of [
    [1, 1],
    [2.01, 0.25],
  ]) {
    let s = d(e, r > 1 ? `sine` : `sawtooth`, 620 * r, n, i);
    (s.frequency.setValueCurveAtTime(
      a.map((e) => e * r),
      n,
      i,
    ),
      m(s, p(e, `lowpass`, 2400), f(e, n, 0.15, 0.26 * o, 0.5, 3.7), t));
  }
  return n + i;
}
function X(e, t, n, r) {
  let i = p(e, `lowpass`, 900),
    a = 0.9;
  for (let t of [185, 233, 277])
    m(
      d(e, `sawtooth`, t * (r.pitch ?? 1), n, 1),
      f(e, n, 0.04, 0.16, 0.2, a),
      i,
    );
  return (i.connect(t), n + a + 0.3);
}
function Qe(e, t, n, r) {
  let i = r.rand,
    o = (72 + i() * 34) * (r.pitch ?? 1),
    s = 3 + i() * 2,
    c = p(e, `lowpass`, 520, 0.9),
    l = f(e, n, 0.7, 0.3, 1.3, s - 0.7);
  for (let [t, r, i] of [
    [`sawtooth`, 1, 1],
    [`sawtooth`, 1.006, 0.7],
    [`square`, 2, 0.18],
    [`sine`, 0.5, 0.5],
  ]) {
    let a = d(e, t, o * r * 0.95, n, s + 1.4);
    a.frequency.linearRampToValueAtTime(o * r, n + 0.6);
    let l = e.createGain();
    ((l.gain.value = i), m(a, l, c));
  }
  return (
    m(
      u(e, a(e).pink, n, s + 1.2, 1, i, !0),
      p(e, `bandpass`, 320, 1.2),
      f(e, n, 0.5, 0.05, 1, s - 0.5),
      l,
    ),
    m(c, l, t),
    n + s + 1.4
  );
}
function $e(e, t, n, r) {
  let i = r.rand,
    o = 1.5 + i() * 1.5,
    s = f(e, n, o * 0.35, 0.3, o * 0.45, o * 0.2),
    c = p(e, `bandpass`, 220, 7);
  c.frequency.setValueCurveAtTime(
    new Float32Array(16).map(
      (e, t) =>
        170 + 120 * Math.sin((t / 15) * Math.PI + i() * 0.6) + (i() - 0.5) * 40,
    ),
    n,
    o,
  );
  for (let t of [36 + i() * 12, 61 + i() * 14]) {
    let r = d(e, `sawtooth`, t, n, o);
    (r.frequency.setValueCurveAtTime(
      new Float32Array(12).map(() => t * (0.9 + i() * 0.2)),
      n,
      o,
    ),
      r.connect(c));
  }
  for (let t of [140 + i() * 40, 233 + i() * 60]) {
    let r = d(e, `sine`, t, n, o);
    h(r.frequency, t, t * (0.82 + i() * 0.1), n, o);
    let a = e.createGain();
    ((a.gain.value = 0.25), m(r, a, s));
  }
  (m(u(e, a(e).brown, n, o, 1, i, !0), p(e, `lowpass`, 260, 0.7), s),
    m(c, s, t));
  for (let a = 0, s = 1 + Math.floor(i() * 3); a < s; a++)
    g(e, t, n + o * (0.2 + i() * 0.6), r, {
      freq: 600 + i() * 500,
      Q: 12,
      dur: 0.06,
      gain: 0.08,
      buf: `pink`,
    });
  return n + o + 0.1;
}
function et(e, t, n, r) {
  let i = r.rand,
    a = 3 + Math.floor(i() * 6),
    o = n;
  for (let n = 0; n < a; n++) {
    let s = (0.5 + i() * 0.5) * (1 - n / (a + 2)),
      c = 900 + i() * 700;
    g(e, t, o, r, { freq: 2600 + i() * 2e3, Q: 3, dur: 0.012, gain: 0.5 * s });
    for (let [n, r, a] of [
      [1, 0.16, 0.09],
      [2.76, 0.09, 0.05],
      [5.4, 0.05, 0.03],
    ])
      _(e, t, o, {
        freq: c * n,
        dur: r * (0.7 + i() * 0.6),
        gain: a * s,
        type: `triangle`,
      });
    o += 0.05 + i() * 0.13;
  }
  return o + 0.2;
}
function tt(e, t, n, r) {
  let i = r.rand,
    o = a(e),
    s = (n, r) => {
      let a = d(e, `sine`, 62 + i() * 12, n, 0.6);
      (h(a.frequency, 62 + i() * 12, 36, n, 0.5),
        m(a, f(e, n, 0.003, 0.55 * r, 0.45), t),
        m(
          u(e, o.brown, n, 0.35, 1, i),
          p(e, `lowpass`, 340, 0.8),
          f(e, n, 0.002, 0.5 * r, 0.28),
          t,
        ),
        m(
          u(e, o.white, n, 0.06, 1, i),
          p(e, `bandpass`, 1300, 0.8),
          f(e, n, 0.001, 0.25 * r, 0.04),
          t,
        ));
      let s = 170 + i() * 30;
      for (let [i, a, o] of [
        [1, 1.3, 0.08],
        [1.59, 1, 0.06],
        [2.38, 0.8, 0.045],
        [3.41, 0.55, 0.03],
      ])
        _(e, t, n, { freq: s * i, dur: a, gain: o * r, type: `sine` });
    };
  s(n, 1);
  let c = n + 1.4;
  if (i() < 0.45) {
    let e = n + 0.3 + i() * 0.35;
    (s(e, 0.35), (c = e + 1.4));
  }
  return c;
}
function nt(e, t, n, r) {
  let i = r.rand,
    o = r.duration ?? 1.7 + i() * 0.7,
    s = 1050 + i() * 120,
    c = 18 + i() * 4,
    h = e.createGain(),
    g = h.gain;
  g.setValueAtTime(l, n);
  for (let e = 0, t = n; t < n + o; e++, t = n + e / c)
    (g.setValueAtTime(1, t), g.exponentialRampToValueAtTime(0.3, t + 0.9 / c));
  let _ = f(e, n, 0.01, 0.22, 0.6, o);
  for (let [t, r] of [
    [1, 1],
    [2.32, 0.5],
    [4.25, 0.25],
    [6.63, 0.12],
  ]) {
    let i = d(e, `sine`, s * t, n, o + 0.7),
      a = e.createGain();
    ((a.gain.value = r), m(i, a, h));
  }
  return (
    m(
      u(e, a(e).white, n, o, 1, i, !0),
      p(e, `bandpass`, 3200, 2),
      (() => {
        let t = e.createGain();
        return ((t.gain.value = 0.12), t);
      })(),
      h,
    ),
    m(h, _, p(e, `lowpass`, 4500), t),
    n + o + 0.7
  );
}
function rt(e, t, n, r) {
  let i = a(e),
    o = r.rand,
    s = 0.6 + o() * 0.8;
  m(
    u(e, i.brown, n, s, 0.8 + o() * 0.3, o, !0),
    p(e, `lowpass`, 380),
    f(e, n, 0.15, 0.14, s * 0.5, s * 0.4),
    t,
  );
  for (let r = 0, a = 4 + Math.floor(o() * 7); r < a; r++) {
    let r = n + o() * s;
    m(
      u(e, i.crackle, r, 0.06, 1, o),
      p(e, `bandpass`, 900 + o() * 2800, 1.1),
      f(e, r, 0.002, 0.15 + o() * 0.25, 0.04),
      t,
    );
  }
  return n + s + 0.1;
}
function it(e, t, n, r) {
  return (
    m(
      u(e, a(e).white, n, 0.9, 1, r.rand),
      p(e, `highpass`, 2600),
      f(e, n, 0.01, 0.2, 0.7),
      t,
    ),
    n + 1
  );
}
function at(e, t, n, r) {
  return (
    g(e, t, n, r, { freq: 2200, Q: 2.5, dur: 0.018, gain: 0.55 }),
    g(e, t, n + 0.035, r, { freq: 3400, Q: 3, dur: 0.012, gain: 0.35 }),
    _(e, t, n + 0.16, { freq: 1480, dur: 0.06, gain: 0.16, type: `square` }),
    _(e, t, n + 0.25, { freq: 1980, dur: 0.08, gain: 0.14, type: `square` }),
    n + 0.4
  );
}
function ot(e, t, n, r) {
  let i = a(e),
    o = r.rand;
  (m(
    u(e, i.white, n, 0.08, 1, o),
    p(e, `bandpass`, 2600, 0.8),
    f(e, n, 0.001, 0.7, 0.07),
    t,
  ),
    m(
      u(e, i.pink, n, 0.25, 1, o),
      p(e, `lowpass`, 900),
      f(e, n, 0.003, 0.35, 0.2),
      t,
    ));
  for (let i = 0; i < 7; i++)
    g(e, t, n + 0.04 + o() * 0.45, r, {
      freq: 2500 + o() * 3500,
      Q: 2,
      dur: 0.01,
      gain: 0.25 + o() * 0.25,
    });
  let s = d(e, `square`, 1700, n + 0.05, 0.35);
  return (
    h(s.frequency, 1700, 180, n + 0.05, 0.35),
    m(s, p(e, `lowpass`, 2400), f(e, n + 0.05, 0.005, 0.08, 0.32), t),
    n + 0.6
  );
}
var Z = {
  gunshot: q(`ar`, { level: 0.645 }),
  gun_ar: q(`ar`, { build: b, level: 0.645 }),
  gun_carbine: q(`carbine`, { build: x, level: 0.92 }),
  gun_ar_suppressed: q(`ar`, { build: (e, t, n, r) => S(e, t, n, r, !1) }),
  gun_carbine_suppressed: q(`carbine`, {
    build: (e, t, n, r) => S(e, t, n, r, !0),
  }),
  gun_dmr: q(`dmr`, { build: C, pri: 7.5, ref: 12, level: 0.71 }),
  gun_dmr_suppressed: q(`dmr`, {
    build: (e, t, n, r) => C(e, t, n, r, !0),
    pri: 7.5,
    ref: 12,
  }),
  gun_sniper: q(`sniper`, {
    build: (t, n, r, i) => O(t, n, r, i, e.longbow),
    pri: 8,
    ref: 14,
    max: 1400,
    level: e.longbow.level,
  }),
  gun_sniper_longbow: q(`sniper`, {
    build: (t, n, r, i) => O(t, n, r, i, e.longbow),
    pri: 8,
    ref: 16,
    max: 1600,
    level: e.longbow.level,
  }),
  gun_sniper_harrier: q(`sniper`, {
    build: (t, n, r, i) => O(t, n, r, i, e.harrier),
    pri: 8,
    ref: 16,
    max: 1550,
    level: e.harrier.level,
  }),
  gun_sniper_peregrine: q(`sniper`, {
    build: (t, n, r, i) => O(t, n, r, i, e.peregrine),
    pri: 8,
    ref: 16,
    max: 1575,
    level: e.peregrine.level,
  }),
  gun_sniper_osprey: q(`sniper`, {
    build: (t, n, r, i) => O(t, n, r, i, e.osprey),
    pri: 8,
    ref: 17,
    max: 1750,
    level: e.osprey.level,
  }),
  gun_sniper_condor: q(`sniper`, {
    build: (t, n, r, i) => O(t, n, r, i, e.condor),
    pri: 8.5,
    ref: 19,
    max: 1975,
    level: e.condor.level,
  }),
  gun_sniper_spectre: q(`sniper`, {
    build: (t, n, r, i) => O(t, n, r, i, e.spectre),
    pri: 8.5,
    ref: 19,
    max: 1925,
    level: e.spectre.level,
  }),
  gun_lmg: q(`lmg`, { build: w, ref: 11, level: 0.85 }),
  gun_lmg_suppressed: q(`lmg`, {
    build: (e, t, n, r) => w(e, t, n, r, !0),
    ref: 11,
  }),
  gun_smg: q(`smg`, { build: T, ref: 8 }),
  gun_smg_suppressed: q(`smg`, {
    build: (e, t, n, r) => T(e, t, n, r, !0),
    ref: 8,
  }),
  gun_pistol: q(`pistol`, { ref: 7, max: 600, level: 0.3 }),
  gun_shotgun: q(`shotgun`, { ref: 12, level: 0.21 }),
  gun_suppressed: q(`suppressed`, { pri: 5, ref: 4, max: 120 }),
  whizz: { build: A, pri: 6, ref: 2, max: 12, bus: `sfx` },
  crack: { build: ee, pri: 6, ref: 3, max: 20, bus: `sfx` },
  footstep: Y(`dirt`),
  footstep_grass: Y(`grass`),
  footstep_dirt: Y(`dirt`),
  footstep_rock: Y(`rock`),
  footstep_sand: Y(`sand`),
  footstep_road: Y(`road`),
  footstep_water: Y(`water`),
  footstep_metal: Y(`metal`),
  footstep_wood: Y(`wood`),
  movement_gear: { build: ne, pri: 2, ref: 1.8, max: 30, bus: `sfx` },
  jump: { build: me, pri: 3, ref: 2, max: 40, bus: `sfx` },
  land: { build: he, pri: 4, ref: 2.5, max: 50, bus: `sfx` },
  reload: { build: L, pri: 5, ref: 2.5, max: 40, bus: `sfx` },
  reload_pistol: {
    build: (e, t, n, r) => L(e, t, n, { ...r, wp: y.pistol }),
    pri: 5,
    ref: 2.5,
    max: 40,
    bus: `sfx`,
  },
  mag_out: { build: N, pri: 5, ref: 2.5, max: 40, bus: `sfx` },
  mag_in: { build: P, pri: 5, ref: 2.5, max: 40, bus: `sfx` },
  bolt: { build: F, pri: 5, ref: 2.5, max: 40, bus: `sfx` },
  dry_fire: { build: ie, pri: 5, ref: 2, max: 30, bus: `sfx` },
  rocket_launch: { build: oe, pri: 8, ref: 12, max: 900, bus: `sfx` },
  kite_launch: {
    build: ae,
    pri: 8,
    ref: 12,
    max: 900,
    bus: `sfx`,
    layered: !0,
  },
  tank_cannon: {
    build: Te,
    pri: 8,
    ref: 18,
    max: 1200,
    bus: `sfx`,
    layered: !0,
  },
  explosion: {
    build: z,
    pri: 10,
    ref: 11,
    max: 2500,
    bus: `sfx`,
    rangeFalloff: !0,
  },
  explosion_small: {
    build: (e, t, n, r) => z(e, t, n, { ...r, size: 0.55 }),
    pri: 9,
    ref: 7,
    max: 1200,
    bus: `sfx`,
    rangeFalloff: !0,
  },
  explosion_large: {
    build: (e, t, n, r) => z(e, t, n, { ...r, size: 1.6 }),
    pri: 10,
    ref: 16,
    max: 4e3,
    bus: `sfx`,
    rangeFalloff: !0,
  },
  explosion_shell: {
    build: (e, t, n, r) => z(e, t, n, { ...r, kind: `shell` }),
    pri: 10,
    ref: 15,
    max: 3500,
    bus: `sfx`,
    rangeFalloff: !0,
  },
  explosion_cannon: {
    build: (e, t, n, r) => z(e, t, n, { ...r, kind: `cannon` }),
    pri: 9,
    ref: 6,
    max: 900,
    bus: `sfx`,
    rangeFalloff: !0,
  },
  explosion_rocket: {
    build: (e, t, n, r) => z(e, t, n, { ...r, kind: `rocket` }),
    pri: 10,
    ref: 11,
    max: 2500,
    bus: `sfx`,
    rangeFalloff: !0,
  },
  explosion_grenade: {
    build: (e, t, n, r) => z(e, t, n, { ...r, kind: `grenade` }),
    pri: 9,
    ref: 9,
    max: 1800,
    bus: `sfx`,
    rangeFalloff: !0,
  },
  explosion_claymore: {
    build: (e, t, n, r) => z(e, t, n, { ...r, kind: `claymore` }),
    pri: 9,
    ref: 7,
    max: 1200,
    bus: `sfx`,
    rangeFalloff: !0,
  },
  explosion_c4: {
    build: (e, t, n, r) => z(e, t, n, { ...r, kind: `c4` }),
    pri: 10,
    ref: 17,
    max: 4e3,
    bus: `sfx`,
    rangeFalloff: !0,
  },
  explosion_wreck: {
    build: (e, t, n, r) => z(e, t, n, { ...r, kind: `wreck` }),
    pri: 10,
    ref: 17,
    max: 4e3,
    bus: `sfx`,
    rangeFalloff: !0,
  },
  collapse: { build: se, pri: 9, ref: 20, max: 1200, bus: `sfx`, layered: !0 },
  impact: J(`dirt`),
  impact_grass: J(`grass`),
  impact_dirt: J(`dirt`),
  impact_rock: J(`rock`),
  impact_sand: J(`sand`),
  impact_road: J(`road`),
  impact_water: J(`water`),
  impact_metal: J(`metal`),
  impact_wood: J(`wood`),
  impact_flesh: J(`flesh`),
  impact_glass: J(`glass`),
  glass_shatter: { build: Be, pri: 6, ref: 4, max: 160, bus: `sfx` },
  fluoro_start: { build: Ve, pri: 2, ref: 3, max: 30, bus: `sfx` },
  spark_zap: { build: He, pri: 3, ref: 2.5, max: 40, bus: `sfx` },
  paper_burst: { build: Ue, pri: 3, ref: 3, max: 40, bus: `sfx` },
  water_spray: { build: We, pri: 3, ref: 3, max: 40, bus: `sfx` },
  water_burst: { build: Ge, pri: 3, ref: 3, max: 40, bus: `sfx` },
  crane_groan: { build: Ke, pri: 6, ref: 30, max: 420, bus: `sfx` },
  city_traffic: { build: qe, pri: 2, bus: `ambience` },
  city_horn: { build: Je, pri: 2, bus: `ambience` },
  city_siren: { build: Ye, pri: 2, bus: `ambience` },
  city_brake: { build: it, pri: 2, bus: `ambience` },
  fire_crackle: { build: Xe, pri: 3, ref: 4, max: 60, bus: `sfx` },
  fire_siren: { build: Ze, pri: 6, ref: 40, max: 1200, bus: `sfx` },
  air_horn: { build: X, pri: 6, ref: 30, max: 800, bus: `sfx` },
  ship_horn: { build: Qe, pri: 1, ref: 90, max: 1500, bus: `ambience` },
  hull_groan: { build: $e, pri: 1, ref: 6, max: 80, bus: `ambience` },
  chain_clank: { build: et, pri: 1, ref: 4, max: 60, bus: `ambience` },
  door_bang: { build: tt, pri: 1.5, ref: 10, max: 160, bus: `ambience` },
  alarm_bell: { build: nt, pri: 1.5, ref: 6, max: 90, bus: `ambience` },
  ship_fire: { build: rt, pri: 1, ref: 5, max: 50, fade: 50, bus: `ambience` },
  ricochet: {
    build: (e, t, n, r) => (
      _(e, t, n, {
        freq: 4200 * (r.pitch ?? 1),
        to: 1500,
        dur: 0.3 + r.rand() * 0.2,
        gain: 0.3,
      }),
      n + 0.55
    ),
    pri: 4,
    ref: 4,
    max: 80,
    bus: `sfx`,
  },
  beacon_plant: { build: at, pri: 5, ref: 3, max: 45, bus: `sfx` },
  beacon_destroyed: { build: ot, pri: 6, ref: 5, max: 90, bus: `sfx` },
  ui_tick: { build: ce, pri: 8, bus: `ui` },
  ui_confirm: { build: B, pri: 8, bus: `ui` },
  ui_error: { build: V, pri: 8, bus: `ui` },
  ui_message: { build: H, pri: 8, bus: `ui` },
  ui_open: { build: U, pri: 8, bus: `ui` },
  ui_close: { build: W, pri: 8, bus: `ui` },
  hit_confirm: { build: G, pri: 8.5, bus: `ui`, level: 0.28 },
  kill_headshot: { build: ue, pri: 9, bus: `ui`, level: 0.15 },
  damage: { build: de, pri: 8.5, bus: `sfx` },
  death: { build: fe, pri: 9.5, bus: `sfx` },
  body_fall: { build: pe, pri: 4, ref: 3, max: 60, bus: `sfx` },
  heartbeat: { build: xe, pri: 6, bus: `sfx` },
  grenade_pin: { build: Se, pri: 6, ref: 2, max: 30, bus: `sfx` },
  grenade_spoon: { build: Ce, pri: 6, ref: 2.5, max: 40, bus: `sfx` },
  grenade_bounce: { build: we, pri: 6, ref: 3, max: 60, bus: `sfx` },
  defib_charge: { build: ge, pri: 8, ref: 3, max: 50, bus: `sfx` },
  defib_zap: { build: _e, pri: 8.5, ref: 5, max: 90, bus: `sfx` },
  repair_weld: { build: ve, pri: 5, ref: 3, max: 40, bus: `sfx` },
  revive_gasp: { build: ye, pri: 8, ref: 3, max: 30, bus: `sfx` },
  revive_ring: { build: be, pri: 9, bus: `ui` },
  vehicle_enter: { build: Ee, pri: 5, ref: 4, max: 80, bus: `sfx` },
  vehicle_exit: { build: De, pri: 5, ref: 4, max: 80, bus: `sfx` },
  vehicle_horn: { build: Oe, pri: 6, ref: 15, max: 400, bus: `sfx` },
  klaxon: { build: ke, pri: 8, ref: 30, max: 700, bus: `sfx` },
  vehicle_crash: { build: Ae, pri: 8, ref: 15, max: 400, bus: `sfx` },
  train_roar: { build: je, pri: 8, ref: 40, max: 1400, bus: `sfx`, loop: !0 },
  train_whoosh: { build: Me, pri: 8, ref: 14, max: 160, bus: `sfx` },
  train_rails: { build: Ne, pri: 6, ref: 10, max: 140, bus: `sfx` },
  train_arc: { build: Pe, pri: 5, ref: 14, max: 260, air: !0, bus: `sfx` },
  train_horn: { build: Fe, pri: 8, ref: 90, max: 1600, air: !0, bus: `sfx` },
  vehicle_engine: {
    build: Ie,
    pri: 5,
    ref: 8,
    max: 170,
    falloff: 1.5,
    fade: 170,
    air: !0,
    hrtf: !0,
    bus: `sfx`,
    loop: !0,
  },
  vehicle_rotor: {
    build: Le,
    pri: 5,
    ref: 12,
    max: 280,
    falloff: 1.3,
    fade: 280,
    air: !0,
    hrtf: !0,
    bus: `sfx`,
    loop: !0,
  },
  bird_chirp: { build: Re, pri: 1, ref: 15, max: 300, bus: `ambience` },
  cricket: { build: ze, pri: 1, ref: 6, max: 120, bus: `ambience` },
  voice_go: { build: Q, pri: 7, ref: 5, max: 60, bus: `sfx` },
  voice_pinned: { build: Q, pri: 7, ref: 5, max: 60, bus: `sfx` },
  voice_lookout: { build: Q, pri: 7, ref: 5, max: 60, bus: `sfx` },
  voice_grunt: { build: Q, pri: 4, ref: 3, max: 30, bus: `sfx` },
  voice_death: { build: Q, pri: 8, ref: 4, max: 80, bus: `sfx` },
  voice_cough: { build: Q, pri: 4, ref: 3, max: 35, bus: `sfx` },
  voice_banter_amber: { build: Q, pri: 3, ref: 3, max: 30, bus: `sfx` },
  voice_banter_cobalt: { build: Q, pri: 3, ref: 3, max: 30, bus: `sfx` },
  voice_scream: { build: Q, pri: 8, ref: 5, max: 110, bus: `sfx` },
  voice_medic: { build: Q, pri: 7, ref: 5, max: 60, bus: `sfx` },
  voice_cover: { build: Q, pri: 6, ref: 5, max: 50, bus: `sfx` },
  voice_roar: { build: Q, pri: 6, ref: 5, max: 70, bus: `sfx` },
  voice_warhorn: { build: Q, pri: 6, bus: `sfx` },
  voice_radio: { build: Q, pri: 6, bus: `sfx` },
  voice_revive: { build: Q, pri: 9, bus: `ui` },
  voice_war_ambience: { build: Q, pri: 3, bus: `ambience`, loop: !0 },
  voice_war_distant: {
    build: Q,
    pri: 2,
    ref: 90,
    max: 3200,
    bus: `ambience`,
    rangeFalloff: !0,
  },
  voice_blast_sharp: {
    build: Q,
    pri: 9,
    ref: 9,
    max: 700,
    bus: `sfx`,
    rangeFalloff: !0,
  },
  voice_blast_heavy: {
    build: Q,
    pri: 10,
    ref: 14,
    max: 1100,
    bus: `sfx`,
    rangeFalloff: !0,
  },
};
function Q(e, t, n) {
  return n + 0.01;
}
for (let e of [
  `frag_out`,
  `grenade`,
  `spotted`,
  `spotted_vehicle`,
  `spotted_air`,
  `kill`,
  `man_down`,
  `revive_give`,
  `revive_thanks`,
  `captured`,
  `vehicle_down`,
])
  Z[`voice_${e}`] = {
    build: Q,
    pri: e === `grenade` ? 8 : 6,
    ref: 5,
    max: 60,
    bus: `sfx`,
  };
var $ = [`A`, `B`, `C`, `D`, `E`, `F`];
for (let e of [
  `squad_attack`,
  `squad_defend`,
  `squad_hold`,
  `squad_regroup`,
  `squad_cancelled`,
  `squad_ended`,
  `squad_held`,
  `squad_regrouped`,
  `match_start`,
  `match_won`,
  `match_lost`,
  ...$.flatMap((e) =>
    [
      `squad_attack`,
      `squad_defend`,
      `squad_secured`,
      `squad_defended`,
      `obj_captured`,
      `obj_lost`,
    ].map((t) => `${t}_${e}`),
  ),
])
  Z[`voice_${e}`] = { build: Q, pri: 8, bus: `sfx` };
for (let [e, t] of Object.entries(Z))
  e.startsWith(`voice_`) &&
    t.bus !== `ambience` &&
    (t.level ??= e.startsWith(`voice_blast_`) ? 0.6 : 0.35);
var st = [`grass`, `dirt`, `rock`, `sand`, `road`, `water`];
for (let e of Object.keys(I))
  Z[`reload_${e}`] = {
    build: (t, n, r, i) => L(t, n, r, i, e),
    pri: 7,
    ref: 2.5,
    max: 32,
    bus: `sfx`,
  };
var ct = Object.keys(Z);
export {
  y as a,
  s as c,
  st as i,
  r as l,
  Z as n,
  o,
  ct as r,
  a as s,
  $ as t,
  c as u,
};
//# sourceMappingURL=synth-xINWorK6.js.map
