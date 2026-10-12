// assets__synth-xINWorK6 09 — gain
// Lines 2478-2808 of readable/assets__synth-xINWorK6.pretty.js (statement-aligned).
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
