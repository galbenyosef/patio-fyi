// assets__synth-xINWorK6 07 — gain
// Lines 1804-2143 of readable/assets__synth-xINWorK6.pretty.js (statement-aligned).
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
