// assets__synth-xINWorK6 08 — gain
// Lines 2144-2477 of readable/assets__synth-xINWorK6.pretty.js (statement-aligned).
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
