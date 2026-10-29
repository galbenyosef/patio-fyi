// assets__synth-B52TAiVy 06 — white
// Lines 1230-1449 of readable/assets__synth-B52TAiVy.pretty.js (statement-aligned).
function N(e, t, n, r, i) {
  let a = r.d ?? 0,
    o = Math.min(1, Math.max(0, (a / (r.layerScale ?? 1) - 25) / 135)),
    s = o * o * (3 - 2 * o),
    c = n;
  if (s > 0.02) {
    let a = e.createGain();
    ((a.gain.value = Math.sqrt(s) / (i.level ?? 1)),
      a.connect(t),
      (c = Math.max(c, k(e, a, n, r))));
  }
  if (s > 0.98) return c;
  let u = e.createGain();
  ((u.gain.value = Math.sqrt(1 - s)), u.connect(t), (t = u));
  let d = l(e),
    f = r.rand,
    p = S(a, r.layerScale ?? 1),
    C = n + p.delay,
    w = (r.pitch ?? 1) * (0.985 + f() * 0.03),
    T = _(e, `lowpass`, p.lp, 0.5);
  T.connect(t);
  let E = p.close,
    D = 0.55 + 0.45 * E;
  if (i.crack > 0 && E > 0.02) {
    let t = i.crack * E;
    (v(
      m(e, d.white, C, 0.03, 1, f),
      _(e, `highpass`, 2400, 0.7),
      j(e, 3),
      g(e, C, 2e-4, 1.8 * t, 0.007),
      T,
    ),
      v(
        m(e, d.white, C + 7e-4, 0.03, 1, f),
        _(e, `highpass`, 3400, 0.7),
        g(e, C + 7e-4, 2e-4, 1.1 * t, 0.005),
        T,
      ));
  }
  (v(
    m(e, d.white, C, 0.05, w, f),
    _(e, `bandpass`, i.snapHz * w, 1.2),
    j(e, 4),
    g(e, C, 3e-4, 1.5 * i.snap * (0.3 + 0.7 * E) * p.mid, 0.012),
    T,
  ),
    v(
      m(e, d.pink, C, 0.07 + i.blastDur * 1.6, w, f),
      _(e, `bandpass`, i.blastHz * w, i.blastQ),
      j(e, 3),
      g(e, C, 7e-4, 0.9 * i.blastGain * D * p.mid, i.blastDur),
      T,
    ),
    v(
      m(e, d.brown, C, 0.05 + i.blastDur * 2.5, 1, f),
      _(e, `lowpass`, i.bodyHz, 0.8),
      j(e, 2.2),
      g(e, C, 0.001, 0.8 * i.body * D, 0.04 + i.blastDur),
      T,
    ));
  let O = h(e, `sine`, i.subHz, C, 0.05 + i.blastDur * 2);
  if (
    (y(O.frequency, i.subHz, i.subTo, C, 0.02),
    v(
      O,
      g(e, C, 0.001, 0.55 * i.subGain * (0.5 + 0.5 * E), 0.035 + i.blastDur),
      T,
    ),
    E > 0.05)
  ) {
    let t = i.boltBack,
      n = i.boltHome,
      a = i.boltHz,
      o = i.boltGain;
    (b(e, T, C + t, r, {
      freq: a * 1.3,
      Q: 1.8,
      dur: 0.008,
      gain: 0.6 * o * E,
    }),
      b(e, T, C + n, r, {
        freq: a,
        Q: 1.4,
        dur: 0.012,
        gain: o * E,
        buf: a < 1500 ? `pink` : `white`,
      }),
      i.ringGain > 0 &&
        x(e, T, C + n, {
          freq: i.ring,
          to: i.ring * 0.95,
          dur: 0.045,
          gain: i.ringGain * E,
          type: `triangle`,
        }));
  }
  let A = i.roll * (1 + 0.8 * p.far);
  return (
    v(
      m(e, d.brown, C + 0.012, A + 0.1, 1, f),
      _(e, `lowpass`, i.rollHz, 0.7),
      g(e, C + 0.012, 0.01, i.rollGain * (0.6 + 0.4 * p.far), A),
      T,
    ),
    Math.max(c, C + A + 0.12, C + i.boltHome + 0.06)
  );
}
function te(e, t, n, r) {
  let i = l(e),
    a = r.wp ?? C.ar,
    o = r.rand,
    s = (r.pitch ?? 1) * a.pitch * (0.96 + o() * 0.08),
    c = a.size,
    u = S(r.d ?? 0, r.layerScale ?? 1),
    d = n + u.delay,
    f = _(e, `lowpass`, u.lp, 0.5);
  f.connect(t);
  let p = d;
  if (u.close > 0.02) {
    let t = 1 * u.close * a.crack;
    (v(
      m(e, i.white, d, 0.06, s, o),
      _(e, `highpass`, 2200 * s, 0.7),
      g(e, d, 8e-4, t, 0.028),
      f,
    ),
      v(
        m(e, i.white, d, 0.08, s, o),
        _(e, `bandpass`, 5200 * s, 1.5),
        g(e, d, 8e-4, t * 0.55, 0.018),
        f,
      ));
  }
  {
    let t = (0.55 + 0.45 * u.close) * u.mid,
      n = _(e, `bandpass`, 420 * s, 1.1);
    (v(m(e, i.pink, d, 0.3 * c, s, o), n, g(e, d, 0.002, t * 1.4, 0.11 * c), f),
      v(
        m(e, i.white, d, 0.2, s, o),
        _(e, `bandpass`, 1400 * s, 2.5),
        g(e, d, 0.002, t * 0.7, 0.05 * c),
        f,
      ));
  }
  {
    let t = (0.4 + 0.6 * u.close) * c,
      n = h(e, `sine`, 150 * s, d, 0.35 * c);
    (y(n.frequency, 150 * s, 42, d, 0.09 * c),
      v(n, g(e, d, 0.003, t * 1.1, 0.17 * c), f));
  }
  {
    let t = 0.35 * u.mid * a.tail,
      n = 0.45 * c * a.tail;
    (v(
      m(e, i.pink, d + 0.012, n + 0.1, 1, o),
      _(e, `lowpass`, 2400, 0.6),
      g(e, d + 0.012, 0.01, t, n),
      f,
    ),
      (p = Math.max(p, d + n + 0.15)));
  }
  if (u.far > 0.02) {
    let t = 0.9 * u.far * c * a.tail,
      n = 1.1 * c * a.tail;
    v(
      m(e, i.brown, d, n + 0.2, 1, o),
      _(e, `lowpass`, 260, 0.8),
      g(e, d, 0.018, t, n),
      f,
    );
    let r = d + 0.09 + o() * 0.12;
    (v(
      m(e, i.brown, r, n * 0.8, 1, o),
      _(e, `lowpass`, 180, 0.8),
      g(e, r, 0.03, t * 0.45, n * 0.8),
      f,
    ),
      (p = Math.max(p, r + n * 0.8 + 0.2)));
  }
  return p;
}
function ne(e, t, n, r) {
  let i = l(e),
    a = r.rand,
    o = (r.pitch ?? 1) * (0.92 + a() * 0.16);
  v(
    m(e, i.white, n, 0.01, 1, a),
    _(e, `highpass`, 4e3, 0.7),
    g(e, n, 5e-4, 0.35, 0.006),
    t,
  );
  let s = _(e, `bandpass`, 3600 * o, 7);
  (y(s.frequency, 3600 * o, 800 * o, n, 0.3),
    v(m(e, i.white, n, 0.32, 1, a), s, g(e, n + 0.005, 0.03, 0.6, 0.26), t));
  let c = _(e, `bandpass`, 7200 * o, 6);
  return (
    y(c.frequency, 7200 * o, 1600 * o, n, 0.28),
    v(m(e, i.white, n, 0.3, 1, a), c, g(e, n + 0.005, 0.02, 0.18, 0.2), t),
    n + 0.36
  );
}
function re(e, t, n, r) {
  let i = l(e),
    a = r.rand;
  return (
    v(
      m(e, i.white, n, 0.04, 1, a),
      _(e, `highpass`, 2500, 0.7),
      g(e, n, 6e-4, 1, 0.02),
      t,
    ),
    v(
      m(e, i.pink, n + 0.01, 0.12, 1, a),
      _(e, `bandpass`, 1200, 1),
      g(e, n + 0.01, 0.004, 0.35, 0.08),
      t,
    ),
    n + 0.14
  );
}
