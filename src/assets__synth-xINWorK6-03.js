// assets__synth-xINWorK6 03 — white
// Lines 650-964 of readable/assets__synth-xINWorK6.pretty.js (statement-aligned).
function O(t, n, r, i, o = e.longbow) {
  let s = a(t),
    c = i.rand,
    l = o.cal,
    y = v(i.d ?? 0, (i.layerScale ?? 1) * (0.8 + 0.25 * l)),
    b = r + y.delay,
    x = (i.pitch ?? 1) * o.pitch * (0.99 + c() * 0.02),
    S = p(t, `lowpass`, y.lp, 0.5);
  S.connect(n);
  let C = y.close,
    w = 0.55 + 0.45 * C;
  if (C > 0.02) {
    let e = o.crack * C;
    (m(
      u(t, s.white, b, 0.03, 1, c),
      p(t, `highpass`, 2e3, 0.7),
      D(t, 3),
      f(t, b, 2e-4, 2.4 * e, 0.01),
      S,
    ),
      m(
        u(t, s.white, b + 0.0011, 0.03, 1, c),
        p(t, `highpass`, 3e3, 0.7),
        f(t, b + 0.0011, 2e-4, 1.7 * e, 0.008),
        S,
      ),
      m(
        u(t, s.white, b, 0.06, x, c),
        p(t, `bandpass`, 4200 * x, 1.2),
        f(t, b, 4e-4, 0.7 * e, 0.026),
        S,
      ));
  }
  {
    let e = o.clack * (0.35 + 0.65 * C) * y.mid;
    (m(
      u(t, s.white, b, 0.05, 1, c),
      p(t, `bandpass`, o.clackHz, 1.3),
      D(t, 5),
      f(t, b, 3e-4, 2.2 * e, 0.018),
      S,
    ),
      m(
        u(t, s.pink, b, 0.05, 1, c),
        p(t, `bandpass`, o.clackHz * 0.55, 1.6),
        D(t, 4),
        f(t, b + 5e-4, 4e-4, 1.3 * e, 0.024),
        S,
      ));
  }
  (m(
    u(t, s.pink, b, 0.1 + o.blastDur * 1.6, x, c),
    p(t, `bandpass`, o.blastHz * x, o.blastQ),
    D(t, 3.2),
    f(t, b, 8e-4, 0.95 * o.blastGain * w * y.mid, o.blastDur),
    S,
  ),
    m(
      u(t, s.white, b, 0.08, x, c),
      p(t, `bandpass`, 2100 * x, 0.9),
      f(t, b, 6e-4, 0.5 * C, 0.03),
      S,
    ),
    o.bark &&
      m(
        u(t, s.pink, b, 0.12, x, c),
        p(t, `peaking`, o.barkHz * x, 1.4, 12),
        p(t, `bandpass`, o.barkHz * x, 1.1),
        D(t, 4),
        f(t, b, 6e-4, 0.75 * o.bark * w, 0.05),
        S,
      ),
    o.brake &&
      (m(
        u(t, s.white, b + 0.0015, 0.3, 1, c),
        p(t, `bandpass`, 3100, 0.55),
        D(t, 2.5),
        f(
          t,
          b + 0.0015,
          0.001,
          0.75 * o.brake * (0.3 + 0.7 * C),
          0.1 + 0.06 * o.brake,
        ),
        S,
      ),
      m(
        u(t, s.pink, b, 0.12, 1, c),
        p(t, `bandpass`, 520, 1.2),
        D(t, 5),
        f(t, b, 5e-4, 0.7 * o.brake * w, 0.035),
        S,
      )),
    m(
      u(t, s.brown, b, 0.3 * l, 1, c),
      p(t, `lowpass`, o.concHz, 0.8),
      D(t, 2.4),
      f(t, b, 0.0012, 0.85 * Math.sqrt(l) * o.body * w, 0.1 * l),
      S,
    ));
  let T = d(t, `sine`, o.subHz * 0.6, b, 0.25 * l);
  (h(T.frequency, o.subHz * 0.6, o.subTo, b, 0.025),
    m(
      T,
      f(
        t,
        b,
        0.0012,
        0.6 * o.subGain * (0.5 + 0.5 * C) * Math.min(1.25, l),
        0.09 * l,
      ),
      S,
    ),
    C > 0.05 &&
      (_(t, S, b + 0.004, {
        freq: o.ring,
        to: o.ring * 0.9,
        dur: o.ringDur,
        gain: o.ringGain * C,
        type: `triangle`,
      }),
      _(t, S, b + 0.004, {
        freq: o.ring * 2.76,
        to: o.ring * 2.6,
        dur: o.ringDur * 0.5,
        gain: o.ringGain * 0.35 * C,
        type: `sine`,
      })),
    C > 0.05 &&
      (o.action === `gas`
        ? (g(t, S, b + 0.038, i, {
            freq: 2300,
            Q: 2.5,
            dur: 0.014,
            gain: 0.32 * C,
          }),
          g(t, S, b + 0.082, i, { freq: 1500, Q: 2, dur: 0.02, gain: 0.4 * C }),
          _(t, S, b + 0.082, {
            freq: 3300,
            to: 2900,
            dur: 0.05,
            gain: 0.04 * C,
            type: `triangle`,
          }))
        : o.action === `heavy`
          ? (g(t, S, b + 0.06, i, {
              freq: 900,
              Q: 1.5,
              dur: 0.03,
              gain: 0.45 * C,
              buf: `pink`,
            }),
            g(t, S, b + 0.135, i, {
              freq: 620,
              Q: 1.2,
              dur: 0.045,
              gain: 0.6 * C,
              buf: `pink`,
            }),
            _(t, S, b + 0.135, {
              freq: 1450,
              to: 1300,
              dur: 0.08,
              gain: 0.05 * C,
              type: `triangle`,
            }))
          : g(t, S, b + 0.035, i, {
              freq: 1500 * x,
              Q: 2,
              dur: 0.018,
              gain: 0.12 * C,
            })));
  let E = (1.1 + 0.9 * y.far) * l * o.roll,
    O = o.tail ?? 1;
  (m(
    u(t, s.brown, b + 0.03, E + 0.3, 1, c),
    p(t, `lowpass`, 300 * o.echoTone, 0.7),
    f(t, b + 0.03, 0.04, (0.34 + 0.4 * y.far) * l * O, E),
    S,
  ),
    m(
      u(t, s.pink, b + 0.02, 0.9 * l, 1, c),
      p(t, `lowpass`, 1900 * o.echoTone, 0.5),
      f(t, b + 0.02, 0.012, (0.22 + 0.12 * y.mid) * O, 0.5 * l * o.roll),
      S,
    ));
  let k = b + E + 0.35;
  return (
    [0.11, 0.23, 0.39, 0.61, 0.9, 1.3].forEach((e, n) => {
      let r = b + e * o.echo * (0.85 + c() * 0.3),
        i = 0.3 * 0.72 ** n * l * O * (0.55 + 0.45 * y.far + 0.3 * y.mid);
      (m(
        u(t, s.pink, r, 0.5, 1, c),
        p(t, `lowpass`, Math.max(380, 1500 - n * 200) * o.echoTone, 0.6),
        f(t, r, 0.006, i, (0.22 + n * 0.07) * o.roll),
        S,
      ),
        (k = Math.max(k, r + 0.6 + n * 0.07)));
    }),
    k
  );
}
function k(e, t, n, r) {
  let i = a(e),
    o = r.wp ?? y.ar,
    s = r.rand,
    c = (r.pitch ?? 1) * o.pitch * (0.96 + s() * 0.08),
    l = o.size,
    g = v(r.d ?? 0, r.layerScale ?? 1),
    _ = n + g.delay,
    b = p(e, `lowpass`, g.lp, 0.5);
  b.connect(t);
  let x = _;
  if (g.close > 0.02) {
    let t = 1 * g.close * o.crack;
    (m(
      u(e, i.white, _, 0.06, c, s),
      p(e, `highpass`, 2200 * c, 0.7),
      f(e, _, 8e-4, t, 0.028),
      b,
    ),
      m(
        u(e, i.white, _, 0.08, c, s),
        p(e, `bandpass`, 5200 * c, 1.5),
        f(e, _, 8e-4, t * 0.55, 0.018),
        b,
      ));
  }
  {
    let t = (0.55 + 0.45 * g.close) * g.mid,
      n = p(e, `bandpass`, 420 * c, 1.1);
    (m(u(e, i.pink, _, 0.3 * l, c, s), n, f(e, _, 0.002, t * 1.4, 0.11 * l), b),
      m(
        u(e, i.white, _, 0.2, c, s),
        p(e, `bandpass`, 1400 * c, 2.5),
        f(e, _, 0.002, t * 0.7, 0.05 * l),
        b,
      ));
  }
  {
    let t = (0.4 + 0.6 * g.close) * l,
      n = d(e, `sine`, 150 * c, _, 0.35 * l);
    (h(n.frequency, 150 * c, 42, _, 0.09 * l),
      m(n, f(e, _, 0.003, t * 1.1, 0.17 * l), b));
  }
  {
    let t = 0.35 * g.mid * o.tail,
      n = 0.45 * l * o.tail;
    (m(
      u(e, i.pink, _ + 0.012, n + 0.1, 1, s),
      p(e, `lowpass`, 2400, 0.6),
      f(e, _ + 0.012, 0.01, t, n),
      b,
    ),
      (x = Math.max(x, _ + n + 0.15)));
  }
  if (g.far > 0.02) {
    let t = 0.9 * g.far * l * o.tail,
      n = 1.1 * l * o.tail;
    m(
      u(e, i.brown, _, n + 0.2, 1, s),
      p(e, `lowpass`, 260, 0.8),
      f(e, _, 0.018, t, n),
      b,
    );
    let r = _ + 0.09 + s() * 0.12;
    (m(
      u(e, i.brown, r, n * 0.8, 1, s),
      p(e, `lowpass`, 180, 0.8),
      f(e, r, 0.03, t * 0.45, n * 0.8),
      b,
    ),
      (x = Math.max(x, r + n * 0.8 + 0.2)));
  }
  return x;
}
function A(e, t, n, r) {
  let i = a(e),
    o = r.rand,
    s = (r.pitch ?? 1) * (0.92 + o() * 0.16);
  m(
    u(e, i.white, n, 0.01, 1, o),
    p(e, `highpass`, 4e3, 0.7),
    f(e, n, 5e-4, 0.35, 0.006),
    t,
  );
  let c = p(e, `bandpass`, 3600 * s, 7);
  (h(c.frequency, 3600 * s, 800 * s, n, 0.3),
    m(u(e, i.white, n, 0.32, 1, o), c, f(e, n + 0.005, 0.03, 0.6, 0.26), t));
  let l = p(e, `bandpass`, 7200 * s, 6);
  return (
    h(l.frequency, 7200 * s, 1600 * s, n, 0.28),
    m(u(e, i.white, n, 0.3, 1, o), l, f(e, n + 0.005, 0.02, 0.18, 0.2), t),
    n + 0.36
  );
}
function ee(e, t, n, r) {
  let i = a(e),
    o = r.rand;
  return (
    m(
      u(e, i.white, n, 0.04, 1, o),
      p(e, `highpass`, 2500, 0.7),
      f(e, n, 6e-4, 1, 0.02),
      t,
    ),
    m(
      u(e, i.pink, n + 0.01, 0.12, 1, o),
      p(e, `bandpass`, 1200, 1),
      f(e, n + 0.01, 0.004, 0.35, 0.08),
      t,
    ),
    n + 0.14
  );
}
