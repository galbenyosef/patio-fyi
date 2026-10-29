// assets__synth-B52TAiVy 10 — rand
// Lines 2289-2603 of readable/assets__synth-B52TAiVy.pretty.js (statement-aligned).
function ye(e, t, n, r) {
  let i = _(e, `bandpass`, 2e3, 3);
  return (
    y(i.frequency, 2400, 500, n, 0.12),
    v(m(e, l(e).white, n, 0.16, 1, r.rand), i, g(e, n, 0.01, 0.3, 0.12), t),
    n + 0.18
  );
}
function be(e, t, n, r) {
  let i = l(e);
  return (
    x(e, t, n, { freq: 150, to: 72, dur: 0.09, gain: 0.95, type: `sine` }),
    v(
      m(e, i.pink, n, 0.07, 1, r.rand),
      _(e, `lowpass`, 900, 0.9),
      g(e, n, 0.002, 0.8, 0.05),
      t,
    ),
    v(
      m(e, i.white, n, 0.03, 1, r.rand),
      _(e, `bandpass`, 1700, 1.2),
      g(e, n, 0.001, 0.22, 0.02),
      t,
    ),
    n + 0.12
  );
}
var xe = new WeakMap();
function Se(e) {
  let t = xe.get(e);
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
  return (xe.set(e, t), t);
}
function Ce(e, t, n, r) {
  let i = e.createConvolver();
  i.buffer = Se(e);
  let a = e.createGain();
  ((a.gain.value = 0.5), v(i, a, t));
  let o = [1, 1.48, 2.17, 2.9, 3.99],
    s = [0.34, 0.27, 0.2, 0.13, 0.08],
    c = [0.24, 0.18, 0.13, 0.09, 0.06];
  for (let [a, l] of [
    [t, 1],
    [i, 0.6],
  ])
    (b(e, a, n, r, { freq: 5e3, Q: 1.2, dur: 0.012, gain: 0.6 * l }),
      o.forEach((t, r) =>
        x(e, a, n + 0.002, {
          freq: 1650 * t,
          to: 1650 * t * 0.985,
          dur: c[r],
          gain: s[r] * l,
          type: `triangle`,
        }),
      ));
  return (
    v(
      m(e, l(e).white, n, 0.04, 1, r.rand),
      _(e, `bandpass`, 2200, 2),
      g(e, n, 0.001, 0.4, 0.04),
      t,
    ),
    x(e, t, n, { freq: 520, to: 440, dur: 0.08, gain: 0.3, type: `triangle` }),
    x(e, t, n, { freq: 150, to: 65, dur: 0.09, gain: 0.6, type: `sine` }),
    n + 0.65
  );
}
function we(e, t, n, r) {
  let i = l(e);
  return (
    v(
      m(e, i.pink, n, 0.15, 1, r.rand),
      _(e, `bandpass`, 190, 0.65),
      g(e, n, 0.002, 1.05, 0.12),
      t,
    ),
    v(
      m(e, i.white, n + 0.006, 0.075, 1, r.rand),
      _(e, `bandpass`, 1300, 0.55),
      g(e, n + 0.006, 0.003, 0.19, 0.055),
      t,
    ),
    v(
      m(e, i.pink, n + 0.035, 0.16, 1, r.rand),
      _(e, `bandpass`, 850, 0.7),
      g(e, n + 0.035, 0.012, 0.24, 0.13),
      t,
    ),
    v(
      m(e, i.white, n + 0.06, 0.24, 1, r.rand),
      _(e, `bandpass`, 620, 0.6),
      g(e, n + 0.06, 0.035, 0.13, 0.19),
      t,
    ),
    n + 0.34
  );
}
function Te(e, t, n, r) {
  let i = l(e),
    a = h(e, `sine`, 240, n, 1.2);
  return (
    y(a.frequency, 240, 60, n, 1),
    v(a, g(e, n, 0.03, 0.4, 1), t),
    v(
      m(e, i.brown, n + 0.1, 1.2, 1, r.rand),
      _(e, `lowpass`, 200, 0.8),
      g(e, n + 0.1, 0.02, 0.8, 0.9),
      t,
    ),
    v(
      m(e, i.pink, n + 0.35, 0.3, 1, r.rand),
      _(e, `lowpass`, 500, 0.8),
      g(e, n + 0.35, 0.005, 0.45, 0.15),
      t,
    ),
    n + 1.3
  );
}
function Ee(e, t, n, r) {
  let i = l(e),
    a = r.rand;
  return (
    v(
      m(e, i.pink, n, 0.2, 1, a),
      _(e, `lowpass`, 350, 0.9),
      g(e, n, 0.004, 0.7, 0.12),
      t,
    ),
    v(
      m(e, i.crackle, n + 0.03, 0.2, 1, a),
      _(e, `bandpass`, 1400, 0.8),
      g(e, n + 0.03, 0.004, 0.18, 0.12),
      t,
    ),
    b(e, t, n + 0.16, r, {
      freq: 400,
      Q: 1,
      dur: 0.05,
      gain: 0.35,
      buf: `pink`,
    }),
    n + 0.3
  );
}
function De(e, t, n, r) {
  return (
    v(
      m(e, l(e).pink, n, 0.12, 1, r.rand),
      _(e, `bandpass`, 900, 0.8),
      g(e, n, 0.01, 0.3, 0.08),
      t,
    ),
    n + 0.14
  );
}
function Oe(e, t, n, r) {
  let i = P[r.surface ?? `dirt`] ?? P.dirt;
  return (
    i(e, t, n, { ...r, pitch: 0.8 }),
    i(e, t, n + 0.05, { ...r, pitch: 0.75 }),
    n + 0.25
  );
}
function ke(e) {
  let t = +!!e?.roof,
    n = (1 - t) * u(((e?.enc ?? 0) - 0.25) / 0.5, 0, 1);
  return { room: t, street: n, open: (1 - t) * (1 - n) };
}
function Ae(e, t, n, r) {
  let i = l(e),
    a = r.rand ?? Math.random,
    o = r.space ?? {},
    s = ke(o),
    c = r.size ?? 1,
    d = n + S(r.d ?? 0, r.layerScale ?? 1).delay,
    f = u(o.near ?? 15, 2.5, 40),
    p = d + 0.05;
  if (s.room > 0) {
    let n = 0.22 + 0.4 * u(f / 14, 0, 1);
    for (let [n, r] of [
      [7, 0.34],
      [15, 0.26],
      [26, 0.2],
    ])
      v(
        m(e, i.pink, d + n / 1e3, 0.05, 1, a),
        _(e, `bandpass`, 1300 + a() * 500, 0.9),
        g(e, d + n / 1e3, 0.002, r * c * s.room, 0.04),
        t,
      );
    (v(
      m(e, i.pink, d + 0.01, n + 0.2, 1, a),
      _(e, `lowpass`, 2600, 0.7),
      _(e, `highpass`, 180, 0.7),
      g(e, d + 0.01, 0.006, 0.3 * c * s.room, n),
      t,
    ),
      (p = Math.max(p, d + n + 0.25)));
  }
  if (s.street > 0)
    for (let n = 0; n < 3; n++) {
      let r = d + (2 * (f * (1 + n * 0.85) * (0.85 + a() * 0.3))) / 343,
        o = 0.26 * c * s.street * 0.62 ** n;
      (v(
        m(e, i.pink, r, 0.12, 1, a),
        _(e, `bandpass`, 1500 - n * 350, 0.8),
        g(e, r, 0.003, o, 0.09 + n * 0.03),
        t,
      ),
        (p = Math.max(p, r + 0.2)));
    }
  return p;
}
function je(e, t, n, r) {
  let i = 0.48,
    a = l(e);
  for (let [r, a, o, s] of [
    [`sine`, 700, 3400, 0.16],
    [`triangle`, 350, 1700, 0.05],
  ]) {
    let c = h(e, r, a, n, i);
    y(c.frequency, a, o, n, i);
    let l = e.createGain();
    (l.gain.setValueAtTime(p, n),
      l.gain.linearRampToValueAtTime(s, n + i * 0.8),
      l.gain.exponentialRampToValueAtTime(p, n + i + 0.03),
      v(c, l, t));
  }
  let o = h(e, `sawtooth`, 100, n, i),
    s = e.createGain();
  return (
    s.gain.setValueAtTime(p, n),
    s.gain.linearRampToValueAtTime(0.05, n + i * 0.9),
    s.gain.exponentialRampToValueAtTime(p, n + i + 0.02),
    v(o, _(e, `bandpass`, 400, 1.2), s, t),
    v(
      m(e, a.white, n, i, 1, r.rand),
      _(e, `highpass`, 5e3, 0.7),
      g(e, n, i * 0.8, 0.03, 0.08),
      t,
    ),
    x(e, t, n + i - 0.06, {
      freq: 2600,
      dur: 0.07,
      gain: 0.12,
      type: `square`,
    }),
    n + i + 0.1
  );
}
function Me(e, t, n, r) {
  let i = l(e);
  (v(
    m(e, i.white, n, 0.12, 1, r.rand),
    _(e, `highpass`, 1800, 0.6),
    g(e, n, 0.001, 0.75, 0.08),
    t,
  ),
    v(
      m(e, i.crackle, n, 0.3, 1.4, r.rand),
      _(e, `bandpass`, 3200, 0.7),
      g(e, n, 0.002, 0.32, 0.22),
      t,
    ),
    v(
      h(e, `sawtooth`, 120, n, 0.34),
      _(e, `bandpass`, 900, 0.9),
      g(e, n, 0.003, 0.3, 0.3),
      t,
    ));
  let a = h(e, `sine`, 95, n + 0.01, 0.24);
  return (
    y(a.frequency, 95, 42, n + 0.01, 0.2),
    v(a, g(e, n + 0.01, 0.003, 0.9, 0.2), t),
    v(
      m(e, i.pink, n + 0.02, 0.18, 1, r.rand),
      _(e, `lowpass`, 300, 0.8),
      g(e, n + 0.02, 0.003, 0.55, 0.14),
      t,
    ),
    n + 0.42
  );
}
function Ne(e, t, n, r) {
  let i = l(e);
  return (
    v(
      m(e, i.white, n, 0.26, 1, r.rand),
      _(e, `bandpass`, 4200, 0.9),
      g(e, n, 0.02, 0.22, 0.12),
      t,
    ),
    v(
      m(e, i.crackle, n, 0.22, 1.2, r.rand),
      _(e, `highpass`, 2500, 0.7),
      g(e, n, 0.005, 0.2, 0.14),
      t,
    ),
    x(e, t, n + 0.03 + r.rand() * 0.08, {
      freq: 1900 + r.rand() * 900,
      dur: 0.05,
      gain: 0.04,
    }),
    n + 0.3
  );
}
