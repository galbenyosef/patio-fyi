// assets__synth-xINWorK6 02 — close
// Lines 343-649 of readable/assets__synth-xINWorK6.pretty.js (statement-aligned).
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
