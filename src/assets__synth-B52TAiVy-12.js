// assets__synth-B52TAiVy 12 — gain
// Lines 2835-3164 of readable/assets__synth-B52TAiVy.pretty.js (statement-aligned).
function Ke(e, t, n, r) {
  let i = l(e),
    a = e.createGain();
  (a.gain.setValueAtTime(1e-4, n), a.gain.linearRampToValueAtTime(1, n + 0.8));
  let o = _(e, `lowpass`, 900, 0.5);
  (o.connect(a), a.connect(t));
  let s = e.createGain();
  ((s.gain.value = 0), s.connect(a));
  let c = [],
    u = [],
    d = (t, i) => {
      let a = m(e, t, n, 0, i, r.rand, !0);
      return (c.push([a, i]), a);
    },
    f = e.createGain();
  f.gain.value = 0.55;
  let p = h(e, `sine`, 41, n, 3600),
    g = h(e, `sine`, 58, n, 3600);
  u.push([p, 41], [g, 58]);
  let y = h(e, `sine`, 3.1, n, 3600),
    b = e.createGain();
  ((b.gain.value = 0.35),
    y.connect(b),
    b.connect(f.gain),
    p.connect(f),
    g.connect(f),
    f.connect(o),
    v(
      d(i.brown, 1),
      _(e, `lowpass`, 160, 0.7),
      (() => {
        let t = e.createGain();
        return ((t.gain.value = 1.1), t);
      })(),
      o,
    ),
    v(
      d(i.pink, 1),
      _(e, `bandpass`, 420, 0.6),
      (() => {
        let t = e.createGain();
        return ((t.gain.value = 0.9), t);
      })(),
      o,
    ),
    v(
      d(i.pink, 1.2),
      _(e, `bandpass`, 1500, 0.5),
      (() => {
        let t = e.createGain();
        return ((t.gain.value = 0.35), t);
      })(),
      o,
    ));
  let x = e.createGain();
  x.gain.value = 0;
  let S = h(e, `square`, 7.6, n, 3600),
    C = e.createGain();
  ((C.gain.value = 0.5),
    S.connect(C),
    C.connect(x.gain),
    u.push([S, 7.6]),
    v(d(i.crackle, 0.9), _(e, `bandpass`, 1300, 1.2), x, s),
    v(
      d(i.pink, 0.8),
      _(e, `bandpass`, 700, 2),
      (() => {
        let t = e.createGain();
        return ((t.gain.value = 0.25), t);
      })(),
      x,
    ));
  let w = e.createGain();
  ((w.gain.value = 0), w.connect(s));
  let T = h(e, `sine`, 2870, n, 3600),
    E = h(e, `sine`, 3390, n, 3600);
  u.push([T, 2870], [E, 3390]);
  let D = h(e, `sine`, 5.5, n, 3600),
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
    v(
      d(i.white, 1),
      _(e, `bandpass`, 3100, 9),
      (() => {
        let t = e.createGain();
        return ((t.gain.value = 0.7), t);
      })(),
      w,
    ),
    v(
      d(i.white, 1),
      _(e, `highpass`, 5200, 0.7),
      (() => {
        let t = e.createGain();
        return ((t.gain.value = 0.06), t);
      })(),
      s,
    ),
    r.handle &&
      (r.handle.setParam = (e, t, n) => {
        if (e === `near`)
          (o.frequency.setTargetAtTime(260 + 7e3 * t * t, n, 0.08),
            s.gain.setTargetAtTime(t * t, n, 0.08));
        else if (e === `dop`) {
          for (let [e, r] of c) e.playbackRate.setTargetAtTime(r * t, n, 0.05);
          for (let [e, r] of u) e.frequency.setTargetAtTime(r * t, n, 0.05);
        } else e === `curve` && w.gain.setTargetAtTime(t, n, 0.15);
      }),
    1 / 0
  );
}
function qe(e, t, n, r) {
  let i = l(e),
    a = r.size ?? 1,
    o = _(e, `lowpass`, 3200, 0.8);
  (o.frequency.setValueAtTime(3200, n),
    o.frequency.exponentialRampToValueAtTime(110, n + 0.7),
    v(m(e, i.pink, n, 1, 1, r.rand), o, g(e, n, 0.035, 1.4 * a, 0.8), t));
  let s = h(e, `sine`, 55, n, 0.6);
  return (
    s.frequency.exponentialRampToValueAtTime(28, n + 0.5),
    v(s, g(e, n, 0.01, 0.9 * a, 0.45), t),
    n + 1.1
  );
}
function Je(e, t, n, r) {
  let i = l(e),
    a = r.duration ?? 7,
    o = e.createGain();
  (o.gain.setValueAtTime(0.001, n),
    o.gain.exponentialRampToValueAtTime(0.7, n + a),
    o.gain.linearRampToValueAtTime(1e-4, n + a + 0.25),
    o.connect(t));
  for (let [t, s, c] of [
    [2250, 14, 0.8],
    [3650, 16, 0.6],
    [5100, 10, 0.3],
  ])
    v(
      m(e, i.white, n, a + 0.3, 1, r.rand, !0),
      _(e, `bandpass`, t, s),
      (() => {
        let t = e.createGain();
        return ((t.gain.value = c), t);
      })(),
      o,
    );
  for (let [t, r] of [
    [1870, 0.05],
    [2630, 0.04],
    [3410, 0.03],
  ]) {
    let i = h(e, `sine`, t, n, a + 0.3),
      s = e.createGain();
    ((s.gain.value = r), i.connect(s), s.connect(o));
  }
  return (
    v(
      m(e, i.brown, n, a + 0.3, 1, r.rand, !0),
      _(e, `lowpass`, 90, 0.7),
      (() => {
        let t = e.createGain();
        return ((t.gain.value = 0.5), t);
      })(),
      o,
    ),
    n + a + 0.3
  );
}
function Ye(e, t, n, r) {
  let i = l(e);
  return (
    v(
      m(e, i.crackle, n, 0.35, 1.6, r.rand),
      _(e, `highpass`, 1800, 0.7),
      g(e, n, 0.002, 1.6, 0.3),
      t,
    ),
    v(
      m(e, i.white, n, 0.12, 1, r.rand),
      _(e, `bandpass`, 4200, 2),
      g(e, n, 0.001, 0.9, 0.08),
      t,
    ),
    v(
      h(e, `sawtooth`, 100, n, 0.25),
      _(e, `lowpass`, 600, 1),
      g(e, n, 0.005, 0.2, 0.2),
      t,
    ),
    n + 0.4
  );
}
function Xe(e, t, n, r) {
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
      v(
        h(e, `sawtooth`, n, r, a + 0.3),
        _(e, `lowpass`, 1500, 1.2),
        g(e, r, 0.04, i, 0.2, a - 0.1),
        t,
      );
  return n + (i ? 3.4 : 2);
}
function Ze(e, t, n, r) {
  let i = r.rpm ?? 0.3,
    a = 28 + i * 70,
    o = h(e, `sawtooth`, a, n, 3600),
    s = h(e, `square`, a * 0.5, n, 3600),
    c = h(e, `sawtooth`, a * 2.02, n, 3600),
    u = _(e, `lowpass`, 400 + i * 900, 1.2),
    d = e.createGain();
  (d.gain.setValueAtTime(1e-4, n),
    d.gain.linearRampToValueAtTime(0.35, n + 0.3),
    o.connect(u),
    s.connect(u),
    c.connect(u),
    u.connect(d),
    d.connect(t));
  let f = l(e),
    p = e.createGain();
  return (
    (p.gain.value = 0.12),
    v(
      m(e, f.pink, n, 0, 1, r.rand, !0),
      _(e, `bandpass`, 600 + i * 800, 0.8),
      p,
      d,
    ),
    r.handle &&
      (r.handle.setRpm = (e, t) => {
        let n = 28 + e * 70,
          r = 0.15;
        (o.frequency.setTargetAtTime(n, t, r),
          s.frequency.setTargetAtTime(n * 0.5, t, r),
          c.frequency.setTargetAtTime(n * 2.02, t, r),
          u.frequency.setTargetAtTime(400 + e * 900, t, r));
      }),
    1 / 0
  );
}
function Qe(e, t, n, r) {
  let i = h(e, `sine`, 18, n, 3600),
    a = h(e, `triangle`, 72, n, 3600),
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
function $e(e, t, n, r) {
  let i = r.rand,
    a = 2400 + i() * 1800,
    o = 2 + Math.floor(i() * 4),
    s = n;
  for (let n = 0; n < o; n++) {
    let n = 0.04 + i() * 0.06,
      r = h(e, `sine`, a, s, n),
      o = i() < 0.5;
    (y(r.frequency, a * (o ? 0.85 : 1.2), a * (o ? 1.25 : 0.9), s, n),
      v(r, g(e, s, 0.008, 0.16, n), t),
      (s += n + 0.03 + i() * 0.08));
  }
  return s + 0.05;
}
function et(e, t, n, r) {
  let i = r.rand,
    a = 3900 + i() * 900,
    o = 0.5 + i() * 0.9,
    s = h(e, `sine`, a, n, o),
    c = h(e, `square`, 13 + i() * 6, n, o),
    l = e.createGain();
  l.gain.value = 0.5;
  let u = e.createGain();
  return (
    (u.gain.value = 0.5),
    c.connect(l),
    l.connect(u.gain),
    v(s, u, _(e, `bandpass`, a, 8), g(e, n, 0.08, 0.12, o, 0), t),
    n + o + 0.05
  );
}
var tt = { auto: N, sniper: M, pistol: ee };
function nt(e) {
  let t = tt[e.anatomy] ?? N,
    n = e.anatomy === `sniper`,
    r = n ? 16 : e.anatomy === `pistol` ? 7 : 8;
  return {
    build: (n, r, i, a) => t(n, r, i, a, e),
    pri: n ? 8 : 7,
    ref: r,
    max: n ? 1600 : 900,
    bus: `sfx`,
    layered: !0,
    level: e.level ?? 1,
  };
}
