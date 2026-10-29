// assets__synth-B52TAiVy 13 — gain
// Lines 3165-3500 of readable/assets__synth-B52TAiVy.pretty.js (statement-aligned).
var B = (e, t = {}) => ({
    build: (t, n, r, i) => te(t, n, r, { ...i, wp: i.wp ?? C[e] }),
    pri: 7,
    ref: 10,
    max: 900,
    bus: `sfx`,
    layered: !0,
    ...t,
  }),
  V = (e) => ({
    build: (t, n, r, i) => oe(t, n, r, { ...i, surface: i.surface ?? e }),
    pri: 4,
    ref: 3,
    max: 120,
    bus: `sfx`,
  }),
  H = (e) => ({
    build: (t, n, r, i) => ie(t, n, r, { ...i, surface: i.surface ?? e }),
    pri: 3,
    ref: 2.4,
    max: 60,
    bus: `sfx`,
  });
function rt(e, t, n, r) {
  let i = l(e),
    a = r.rand,
    o = r.size ?? 1;
  (v(
    m(e, i.white, n, 0.5, 1, a),
    _(e, `highpass`, 1900),
    g(e, n, 0.002, 0.8 * o, 0.36),
    t,
  ),
    v(
      m(e, i.pink, n, 0.8, 1, a),
      _(e, `bandpass`, 3600, 0.7),
      g(e, n, 0.003, 0.45 * o, 0.6),
      t,
    ),
    b(e, t, n, r, { freq: 190, Q: 0.8, dur: 0.06, gain: 0.5, buf: `pink` }));
  let s = Math.round(12 + 10 * o);
  for (let r = 0; r < s; r++) {
    let r = n + 0.03 + a() ** 1.6 * 1.3 * o;
    x(e, t, r, {
      freq: 2800 + a() * 4800,
      dur: 0.04 + a() * 0.1,
      gain: 0.09 * (1 - (r - n) / (1.5 * o)) + 0.01,
      type: a() < 0.3 ? `triangle` : `sine`,
    });
  }
  return n + 1.6 * o;
}
function it(e, t, n, r) {
  return (
    b(e, t, n, r, { freq: 1800, Q: 3, dur: 0.012, gain: 0.3 }),
    b(e, t, n + 0.16, r, { freq: 2100, Q: 3, dur: 0.01, gain: 0.22 }),
    v(
      h(e, `sawtooth`, 120, n + 0.05, 0.7),
      _(e, `lowpass`, 520),
      g(e, n + 0.05, 0.04, 0.05, 0.6),
      t,
    ),
    n + 0.8
  );
}
function at(e, t, n, r) {
  return (
    v(
      m(e, l(e).crackle, n, 0.25, 1, r.rand),
      _(e, `bandpass`, 3200, 1.2),
      g(e, n, 0.001, 0.5, 0.18),
      t,
    ),
    n + 0.3
  );
}
function ot(e, t, n, r) {
  let i = l(e),
    a = r.rand;
  v(
    m(e, i.pink, n, 0.7, 1, a),
    _(e, `bandpass`, 2600, 0.5),
    g(e, n, 0.004, 0.3, 0.55),
    t,
  );
  for (let i = 0; i < 6; i++)
    b(e, t, n + a() * 0.5, r, {
      freq: 3e3 + a() * 2500,
      Q: 1,
      dur: 0.03,
      gain: 0.1,
    });
  return n + 0.8;
}
function st(e, t, n, r) {
  return (
    v(
      m(e, l(e).white, n, 4, 1, r.rand, !0),
      _(e, `highpass`, 2800),
      g(e, n, 0.06, 0.2, 1.6, 2.2),
      t,
    ),
    n + 4
  );
}
function ct(e, t, n, r) {
  let i = l(e),
    a = r.rand;
  v(
    m(e, i.pink, n, 1.2, 1, a),
    _(e, `lowpass`, 1500),
    g(e, n, 0.01, 0.45, 0.9),
    t,
  );
  for (let r = 0; r < 5; r++)
    x(e, t, n + 0.1 + a() * 0.8, {
      freq: 280 + a() * 300,
      to: 520 + a() * 400,
      dur: 0.07,
      gain: 0.06,
    });
  return n + 1.3;
}
function lt(e, t, n, r) {
  let i = r.rand,
    a = 3.6,
    o = g(e, n, 1.1, 0.22, 1.3, 1.2),
    s = _(e, `bandpass`, 420, 5),
    c = new Float32Array(32).map(
      (e, t) => 380 + 260 * Math.sin((t / 31) * Math.PI) + (i() - 0.5) * 120,
    );
  s.frequency.setValueCurveAtTime(c, n, a);
  for (let t of [52, 77.5]) {
    let r = h(e, `sawtooth`, t, n, a),
      o = new Float32Array(24).map(() => t * (0.94 + i() * 0.12));
    (r.frequency.setValueCurveAtTime(o, n, a), r.connect(s));
  }
  v(s, o, t);
  for (let a = 0; a < 7; a++)
    b(e, t, n + 0.4 + i() * 3, r, {
      freq: 850 + i() * 700,
      Q: 9,
      dur: 0.05,
      gain: 0.12,
      buf: `pink`,
    });
  return n + a + 0.2;
}
function ut(e, t, n, r) {
  let i = l(e),
    a = r.rand;
  return (
    v(
      m(e, i.brown, n, 6.6, 1, a, !0),
      _(e, `lowpass`, 380, 0.5),
      g(e, n, 1.2, 0.35, 1.5, 3.8),
      t,
    ),
    v(
      m(e, i.pink, n, 6.6, 1, a, !0),
      _(e, `bandpass`, 1100, 0.4),
      g(e, n, 1.2, 0.05, 1.5, 3.8),
      t,
    ),
    n + 6.6
  );
}
function dt(e, t, n, r) {
  let i = r.rand,
    a = 360 * (r.pitch ?? 1),
    o = _(e, `lowpass`, 1500),
    s = (t, n) => {
      for (let r of [1, 1.26])
        v(h(e, `square`, a * r, t, n + 0.1), g(e, t, 0.01, 0.1, 0.08, n), o);
    };
  return (
    s(n, 0.22 + i() * 0.35),
    i() < 0.35 && s(n + 0.5, 0.18),
    o.connect(t),
    n + 1.1
  );
}
function ft(e, t, n, r) {
  let i = 4.6,
    a = h(e, `triangle`, 700, n, i),
    o = new Float32Array(40).map(
      (e, t) => 720 + 560 * (0.5 - 0.5 * Math.cos((t / 39) * Math.PI * 4)),
    );
  return (
    a.frequency.setValueCurveAtTime(o, n, i),
    v(a, _(e, `lowpass`, 1700), g(e, n, 0.7, 0.1, 0.9, 3), t),
    n + i
  );
}
function pt(e, t, n, r) {
  let i = l(e),
    a = r.rand,
    o = 3.2;
  v(
    m(e, i.brown, n, o, 0.8 + a() * 0.3, a, !0),
    _(e, `lowpass`, 420),
    g(e, n, 0.5, 0.32, 1.4, 1.3),
    t,
  );
  for (let r = 0; r < 16; r++) {
    let r = n + a() * 3.1;
    v(
      m(e, i.crackle, r, 0.07, 1, a),
      _(e, `bandpass`, 900 + a() * 2800, 1.1),
      g(e, r, 0.002, 0.16 + a() * 0.22, 0.05),
      t,
    );
  }
  return n + o;
}
function mt(e, t, n, r) {
  let i = 4.4,
    a = new Float32Array(48).map(
      (e, t) => 620 + 780 * (0.5 - 0.5 * Math.cos((t / 47) * Math.PI * 2)),
    );
  for (let [r, o] of [
    [1, 1],
    [2.01, 0.25],
  ]) {
    let s = h(e, r > 1 ? `sine` : `sawtooth`, 620 * r, n, i);
    (s.frequency.setValueCurveAtTime(
      a.map((e) => e * r),
      n,
      i,
    ),
      v(s, _(e, `lowpass`, 2400), g(e, n, 0.15, 0.26 * o, 0.5, 3.7), t));
  }
  return n + i;
}
function ht(e, t, n, r) {
  let i = _(e, `lowpass`, 900),
    a = 0.9;
  for (let t of [185, 233, 277])
    v(
      h(e, `sawtooth`, t * (r.pitch ?? 1), n, 1),
      g(e, n, 0.04, 0.16, 0.2, a),
      i,
    );
  return (i.connect(t), n + a + 0.3);
}
function gt(e, t, n, r) {
  let i = r.rand,
    a = (72 + i() * 34) * (r.pitch ?? 1),
    o = 3 + i() * 2,
    s = _(e, `lowpass`, 520, 0.9),
    c = g(e, n, 0.7, 0.3, 1.3, o - 0.7);
  for (let [t, r, i] of [
    [`sawtooth`, 1, 1],
    [`sawtooth`, 1.006, 0.7],
    [`square`, 2, 0.18],
    [`sine`, 0.5, 0.5],
  ]) {
    let c = h(e, t, a * r * 0.95, n, o + 1.4);
    c.frequency.linearRampToValueAtTime(a * r, n + 0.6);
    let l = e.createGain();
    ((l.gain.value = i), v(c, l, s));
  }
  return (
    v(
      m(e, l(e).pink, n, o + 1.2, 1, i, !0),
      _(e, `bandpass`, 320, 1.2),
      g(e, n, 0.5, 0.05, 1, o - 0.5),
      c,
    ),
    v(s, c, t),
    n + o + 1.4
  );
}
function _t(e, t, n, r) {
  let i = r.rand,
    a = 1.5 + i() * 1.5,
    o = g(e, n, a * 0.35, 0.3, a * 0.45, a * 0.2),
    s = _(e, `bandpass`, 220, 7);
  s.frequency.setValueCurveAtTime(
    new Float32Array(16).map(
      (e, t) =>
        170 + 120 * Math.sin((t / 15) * Math.PI + i() * 0.6) + (i() - 0.5) * 40,
    ),
    n,
    a,
  );
  for (let t of [36 + i() * 12, 61 + i() * 14]) {
    let r = h(e, `sawtooth`, t, n, a);
    (r.frequency.setValueCurveAtTime(
      new Float32Array(12).map(() => t * (0.9 + i() * 0.2)),
      n,
      a,
    ),
      r.connect(s));
  }
  for (let t of [140 + i() * 40, 233 + i() * 60]) {
    let r = h(e, `sine`, t, n, a);
    y(r.frequency, t, t * (0.82 + i() * 0.1), n, a);
    let s = e.createGain();
    ((s.gain.value = 0.25), v(r, s, o));
  }
  (v(m(e, l(e).brown, n, a, 1, i, !0), _(e, `lowpass`, 260, 0.7), o),
    v(s, o, t));
  for (let o = 0, s = 1 + Math.floor(i() * 3); o < s; o++)
    b(e, t, n + a * (0.2 + i() * 0.6), r, {
      freq: 600 + i() * 500,
      Q: 12,
      dur: 0.06,
      gain: 0.08,
      buf: `pink`,
    });
  return n + a + 0.1;
}
function vt(e, t, n, r) {
  let i = r.rand,
    a = 3 + Math.floor(i() * 6),
    o = n;
  for (let n = 0; n < a; n++) {
    let s = (0.5 + i() * 0.5) * (1 - n / (a + 2)),
      c = 900 + i() * 700;
    b(e, t, o, r, { freq: 2600 + i() * 2e3, Q: 3, dur: 0.012, gain: 0.5 * s });
    for (let [n, r, a] of [
      [1, 0.16, 0.09],
      [2.76, 0.09, 0.05],
      [5.4, 0.05, 0.03],
    ])
      x(e, t, o, {
        freq: c * n,
        dur: r * (0.7 + i() * 0.6),
        gain: a * s,
        type: `triangle`,
      });
    o += 0.05 + i() * 0.13;
  }
  return o + 0.2;
}
