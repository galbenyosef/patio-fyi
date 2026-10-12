// assets__synth-xINWorK6 10 — gain
// Lines 2809-3091 of readable/assets__synth-xINWorK6.pretty.js (statement-aligned).
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
