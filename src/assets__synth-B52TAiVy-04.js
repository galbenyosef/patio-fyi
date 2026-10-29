// assets__synth-B52TAiVy 04 — close
// Lines 739-914 of readable/assets__synth-B52TAiVy.pretty.js (statement-aligned).
function D(e, t, n, r, i = !1) {
  let a = l(e),
    o = S(r.d ?? 0, r.layerScale ?? 1),
    s = n + o.delay,
    c = (r.pitch ?? 1) * (0.99 + r.rand() * 0.02),
    u = _(e, `lowpass`, Math.min(o.lp, i ? 6200 : 18e3), 0.6);
  (u.connect(t),
    i
      ? (v(
          m(e, a.pink, s, 0.14, c, r.rand),
          _(e, `bandpass`, 560 * c, 0.7),
          g(e, s, 0.002, 0.8 * (0.4 + 0.6 * o.close), 0.075),
          u,
        ),
        v(
          m(e, a.white, s + 0.004, 0.085, c, r.rand),
          _(e, `bandpass`, 1850, 0.6),
          g(e, s + 0.004, 0.003, 0.2 * o.close, 0.04),
          u,
        ))
      : (v(
          m(e, a.white, s, 0.055, c, r.rand),
          _(e, `highpass`, 2600, 0.6),
          g(e, s, 8e-4, 0.8 * o.close, 0.018),
          u,
        ),
        v(
          m(e, a.pink, s, 0.18, c, r.rand),
          _(e, `bandpass`, 780 * c, 0.65),
          g(e, s, 0.0015, 1.15 * (0.45 + 0.55 * o.mid), 0.095),
          u,
        ),
        v(
          m(e, a.brown, s, 0.24, 1, r.rand),
          _(e, `lowpass`, 420, 0.6),
          g(e, s, 0.002, 0.65, 0.145),
          u,
        )),
    o.close > 0.02 &&
      (b(e, u, s + 0.018, r, {
        freq: 2400,
        Q: 0.7,
        dur: 0.012,
        gain: 0.2 * o.close,
      }),
      b(e, u, s + 0.11, r, {
        freq: 1050,
        Q: 0.6,
        dur: 0.018,
        gain: 0.28 * o.close,
        buf: `pink`,
      })));
  let d = i ? 0.12 + 0.16 * o.far : 0.24 + 0.38 * o.far;
  return (
    v(
      m(e, a.pink, s + 0.026, d + 0.04, 1, r.rand),
      _(e, `lowpass`, i ? 1200 : 2100, 0.55),
      g(e, s + 0.026, 0.004, (i ? 0.06 : 0.17) + (i ? 0.05 : 0.2) * o.far, d),
      u,
    ),
    Math.max(s + d + 0.09, s + 0.2)
  );
}
function O(e, t, n, r, i = !1) {
  let a = l(e),
    o = S(r.d ?? 0, r.layerScale ?? 1),
    s = n + o.delay,
    c = _(e, `lowpass`, Math.min(o.lp, i ? 5800 : 15e3), 0.6);
  (c.connect(t),
    v(
      m(e, a.pink, s, 0.17, 1, r.rand),
      _(e, `bandpass`, i ? 390 : 510, 0.8),
      g(e, s, 0.0015, i ? 0.66 : 1.05, 0.083),
      c,
    ),
    v(
      m(e, a.white, s, 0.06, 1, r.rand),
      _(e, `bandpass`, i ? 1600 : 2100, 0.7),
      g(e, s, 8e-4, (i ? 0.18 : 0.92) * o.close, 0.023),
      c,
    ),
    i ||
      v(
        m(e, a.brown, s, 0.16, 1, r.rand),
        _(e, `lowpass`, 290, 0.6),
        g(e, s, 0.002, 0.65, 0.095),
        c,
      ),
    o.close > 0.02 &&
      (b(e, c, s + 0.012, r, {
        freq: 1750,
        Q: 0.6,
        dur: 0.014,
        gain: 0.28 * o.close,
      }),
      b(e, c, s + 0.058, r, {
        freq: 780,
        Q: 0.7,
        dur: 0.022,
        gain: 0.34 * o.close,
        buf: `pink`,
      }),
      b(e, c, s + 0.084, r, {
        freq: 2800,
        Q: 0.5,
        dur: 0.008,
        gain: 0.14 * o.close,
      })));
  let u = i ? 0.1 + 0.13 * o.far : 0.19 + 0.3 * o.far;
  return (
    v(
      m(e, a.pink, s + 0.03, u + 0.04, 1, r.rand),
      _(e, `lowpass`, i ? 950 : 1400, 0.5),
      g(e, s + 0.03, 0.004, (i ? 0.05 : 0.13) + o.far * (i ? 0.04 : 0.18), u),
      c,
    ),
    Math.max(s + 0.19, s + u + 0.09)
  );
}
function k(e, t, n, r, i = !1) {
  let a = l(e),
    o = S(r.d ?? 0, r.layerScale ?? 1),
    s = n + o.delay,
    c = _(e, `lowpass`, Math.min(o.lp, i ? 4400 : 12e3), 0.55);
  (c.connect(t),
    v(
      m(e, a.pink, s, 0.09, 1, r.rand),
      _(e, `bandpass`, i ? 580 : 850, 0.65),
      g(e, s, 0.001, i ? 0.38 : 0.75, 0.037),
      c,
    ),
    i ||
      v(
        m(e, a.white, s, 0.025, 1, r.rand),
        _(e, `highpass`, 1800, 0.5),
        g(e, s, 6e-4, 0.53 * o.close, 0.012),
        c,
      ),
    b(e, c, s + 0.011, r, {
      freq: 1350,
      Q: 0.5,
      dur: 0.012,
      gain: 0.24 * o.close,
      buf: `pink`,
    }),
    b(e, c, s + 0.042, r, {
      freq: 2400,
      Q: 0.5,
      dur: 0.009,
      gain: 0.17 * o.close,
    }));
  let u = 0.075 + o.far * 0.18;
  return (
    v(
      m(e, a.pink, s + 0.024, u + 0.04, 1, r.rand),
      _(e, `lowpass`, 1100, 0.5),
      g(e, s + 0.024, 0.003, (i ? 0.035 : 0.09) * (1 + o.far), u),
      c,
    ),
    s + u + 0.08
  );
}
var A = new Map();
function j(e, t) {
  let n = A.get(t);
  if (!n) {
    n = new Float32Array(1024);
    for (let e = 0; e < n.length; e++) {
      let r = e / 511.5 - 1;
      n[e] = Math.tanh(r * t) / Math.tanh(t);
    }
    A.set(t, n);
  }
  let r = e.createWaveShaper();
  return ((r.curve = n), (r.oversample = `2x`), r);
}
