// assets__synth-B52TAiVy 11 — gain
// Lines 2604-2834 of readable/assets__synth-B52TAiVy.pretty.js (statement-aligned).
function Pe(e, t, n, r) {
  let i = l(e),
    a = r.pitch ?? 1,
    o = m(e, i.white, n, 0.5, 1, r.rand),
    s = _(e, `bandpass`, 700 * a, 3.5),
    c = _(e, `bandpass`, 1900 * a, 5);
  (y(s.frequency, 600 * a, 1100 * a, n, 0.42),
    y(c.frequency, 1500 * a, 2500 * a, n, 0.42));
  let u = e.createGain();
  (u.gain.setValueAtTime(p, n),
    u.gain.linearRampToValueAtTime(0.9, n + 0.05),
    u.gain.linearRampToValueAtTime(0.7, n + 0.34),
    u.gain.exponentialRampToValueAtTime(p, n + 0.46),
    o.connect(s),
    o.connect(c),
    s.connect(u),
    c.connect(u),
    u.connect(t));
  let d = h(e, `sawtooth`, 190 * a, n + 0.02, 0.4);
  return (
    y(d.frequency, 190 * a, 260 * a, n + 0.02, 0.36),
    v(
      d,
      _(e, `bandpass`, 900 * a, 2),
      g(e, n + 0.02, 0.06, 0.06, 0.3, 0.05),
      t,
    ),
    v(
      m(e, i.pink, n + 0.47, 0.06, 1, r.rand),
      _(e, `bandpass`, 500 * a, 1.5),
      g(e, n + 0.47, 0.002, 0.35, 0.04),
      t,
    ),
    v(
      m(e, i.white, n + 0.56, 0.5, 1, r.rand),
      _(e, `bandpass`, 800 * a, 2.2),
      g(e, n + 0.56, 0.03, 0.4, 0.4),
      t,
    ),
    n + 1.05
  );
}
function Fe(e, t, n) {
  for (let [r, i] of [
    [3900, 0.07],
    [4010, 0.045],
    [7800, 0.012],
  ]) {
    let a = h(e, `sine`, r, n, 2.4),
      o = e.createGain();
    (o.gain.setValueAtTime(p, n),
      o.gain.linearRampToValueAtTime(i, n + 0.08),
      o.gain.setValueAtTime(i, n + 0.35),
      o.gain.exponentialRampToValueAtTime(p, n + 2.4),
      v(a, o, t));
  }
  return n + 2.45;
}
function Ie(e, t, n) {
  return (
    x(e, t, n, { freq: 55, dur: 0.16, gain: 0.8, type: `sine` }),
    x(e, t, n + 0.22, { freq: 48, dur: 0.14, gain: 0.55, type: `sine` }),
    n + 0.45
  );
}
function Le(e, t, n, r) {
  let i = _(e, `bandpass`, 3800, 2.5);
  return (
    y(i.frequency, 2600, 5200, n, 0.07),
    v(m(e, l(e).white, n, 0.09, 1, r.rand), i, g(e, n, 0.004, 0.32, 0.06), t),
    b(e, t, n + 0.085, r, { freq: 5200, Q: 4, dur: 0.012, gain: 0.5 }),
    x(e, t, n + 0.09, { freq: 3100, dur: 0.06, gain: 0.05, type: `triangle` }),
    n + 0.2
  );
}
function Re(e, t, n, r) {
  b(e, t, n, r, { freq: 4400, Q: 3, dur: 0.01, gain: 0.45 });
  let i = 2300 + r.rand() * 400;
  return (
    x(e, t, n + 0.004, {
      freq: i,
      to: i * 0.96,
      dur: 0.24,
      gain: 0.16,
      type: `triangle`,
    }),
    x(e, t, n + 0.004, { freq: i * 2.71, dur: 0.12, gain: 0.05, type: `sine` }),
    n + 0.3
  );
}
function ze(e, t, n, r) {
  return (
    b(e, t, n, r, {
      freq: 900 + r.rand() * 300,
      Q: 1.4,
      dur: 0.035,
      gain: 0.8,
      buf: `pink`,
    }),
    b(e, t, n, r, { freq: 3300, Q: 3, dur: 0.012, gain: 0.35 }),
    x(e, t, n + 0.002, {
      freq: 1480 + r.rand() * 260,
      dur: 0.09,
      gain: 0.07,
      type: `triangle`,
    }),
    n + 0.14
  );
}
function Be(e, t, n, r) {
  let i = l(e),
    a = S(r.d ?? 0, 1.8),
    o = n + a.delay,
    s = _(e, `lowpass`, a.lp, 0.65);
  (s.connect(t),
    v(
      m(e, i.white, o, 0.06, 1, r.rand),
      _(e, `highpass`, 1300, 0.6),
      g(e, o, 0.001, 0.85 * a.close, 0.025),
      s,
    ),
    v(
      m(e, i.pink, o, 0.45, 1, r.rand),
      _(e, `bandpass`, 230, 0.65),
      g(e, o, 0.003, 1.65 * (0.6 + 0.4 * a.mid), 0.3),
      s,
    ),
    v(
      m(e, i.brown, o, 0.7, 1, r.rand),
      _(e, `lowpass`, 160, 0.7),
      g(e, o, 0.005, 1.1, 0.5),
      s,
    ));
  let c = h(e, `sine`, 78, o, 0.21);
  (y(c.frequency, 78, 48, o, 0.14), v(c, g(e, o, 0.002, 0.46, 0.18), s));
  let u = 0.75 + 0.6 * a.far;
  return (
    v(
      m(e, i.pink, o + 0.07, u + 0.03, 1, r.rand),
      _(e, `lowpass`, 700, 0.65),
      g(e, o + 0.07, 0.022, 0.42 + 0.25 * a.far, u),
      s,
    ),
    a.close > 0.02 &&
      (b(e, s, o + 0.055, r, {
        freq: 480,
        Q: 0.8,
        dur: 0.07,
        gain: 0.55 * a.close,
        buf: `pink`,
      }),
      b(e, s, o + 0.85, r, {
        freq: 950,
        Q: 1.4,
        dur: 0.045,
        gain: 0.2 * a.close,
      })),
    o + Math.max(u + 0.14, 1)
  );
}
function Ve(e, t, n, r) {
  return (
    b(e, t, n, r, { freq: 1800, Q: 2, dur: 0.03, gain: 0.5 }),
    b(e, t, n + 0.14, r, {
      freq: 350,
      Q: 1,
      dur: 0.07,
      gain: 0.9,
      buf: `pink`,
    }),
    x(e, t, n + 0.14, { freq: 520, dur: 0.15, gain: 0.08, type: `triangle` }),
    n + 0.35
  );
}
function He(e, t, n, r) {
  return (
    b(e, t, n, r, { freq: 2200, Q: 2, dur: 0.025, gain: 0.5 }),
    b(e, t, n + 0.1, r, { freq: 500, Q: 1, dur: 0.05, gain: 0.6, buf: `pink` }),
    n + 0.25
  );
}
function Ue(e, t, n) {
  for (let r of [392, 494])
    v(
      h(e, `sawtooth`, r, n, 0.45),
      _(e, `lowpass`, 1800, 1),
      g(e, n, 0.02, 0.25, 0.4, 0.2),
      t,
    );
  return n + 0.7;
}
function We(e, t, n) {
  for (let r = 0; r < 3; r++) {
    let i = n + r * 0.62;
    for (let [n, r, a] of [
      [`sawtooth`, 1, 0.34],
      [`square`, 0.5, 0.16],
    ]) {
      let o = h(e, n, 300 * r, i, 0.5);
      (y(o.frequency, 300 * r, 640 * r, i, 0.46, !1),
        v(o, _(e, `bandpass`, 900, 0.9), g(e, i, 0.03, a, 0.14, 0.3), t));
    }
  }
  return n + 2;
}
function Ge(e, t, n, r) {
  let i = l(e),
    a = r.rand;
  v(
    m(e, i.pink, n, 0.4, 1, a),
    _(e, `lowpass`, 500, 0.8),
    g(e, n, 0.004, 1.2, 0.3),
    t,
  );
  for (let r = 0; r < 4; r++)
    x(e, t, n + a() * 0.1, {
      freq: 500 + a() * 1500,
      dur: 0.3 + a() * 0.3,
      gain: 0.15,
      type: `triangle`,
    });
  return (
    v(
      m(e, i.crackle, n + 0.02, 0.5, 1, a),
      _(e, `bandpass`, 2500, 0.8),
      g(e, n + 0.02, 0.01, 0.4, 0.35),
      t,
    ),
    n + 0.7
  );
}
