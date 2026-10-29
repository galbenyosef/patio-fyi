// assets__synth-B52TAiVy 05 — dur
// Lines 915-1229 of readable/assets__synth-B52TAiVy.pretty.js (statement-aligned).
function M(e, n, r, i, a = t.longbow) {
  let o = l(e),
    s = i.rand,
    c = a.cal,
    u = S(i.d ?? 0, (i.layerScale ?? 1) * (0.8 + 0.25 * c)),
    d = r + u.delay,
    f = (i.pitch ?? 1) * a.pitch * (0.99 + s() * 0.02),
    p = _(e, `lowpass`, u.lp, 0.5);
  p.connect(n);
  let C = u.close,
    w = 0.55 + 0.45 * C;
  if (C > 0.02) {
    let t = a.crack * C;
    (v(
      m(e, o.white, d, 0.03, 1, s),
      _(e, `highpass`, 2e3, 0.7),
      j(e, 3),
      g(e, d, 2e-4, 2.4 * t, 0.01),
      p,
    ),
      v(
        m(e, o.white, d + 0.0011, 0.03, 1, s),
        _(e, `highpass`, 3e3, 0.7),
        g(e, d + 0.0011, 2e-4, 1.7 * t, 0.008),
        p,
      ),
      v(
        m(e, o.white, d, 0.06, f, s),
        _(e, `bandpass`, 4200 * f, 1.2),
        g(e, d, 4e-4, 0.7 * t, 0.026),
        p,
      ));
  }
  {
    let t = a.clack * (0.35 + 0.65 * C) * u.mid;
    (v(
      m(e, o.white, d, 0.05, 1, s),
      _(e, `bandpass`, a.clackHz, 1.3),
      j(e, 5),
      g(e, d, 3e-4, 2.2 * t, 0.018),
      p,
    ),
      v(
        m(e, o.pink, d, 0.05, 1, s),
        _(e, `bandpass`, a.clackHz * 0.55, 1.6),
        j(e, 4),
        g(e, d + 5e-4, 4e-4, 1.3 * t, 0.024),
        p,
      ));
  }
  (v(
    m(e, o.pink, d, 0.1 + a.blastDur * 1.6, f, s),
    _(e, `bandpass`, a.blastHz * f, a.blastQ),
    j(e, 3.2),
    g(e, d, 8e-4, 0.95 * a.blastGain * w * u.mid, a.blastDur),
    p,
  ),
    v(
      m(e, o.white, d, 0.08, f, s),
      _(e, `bandpass`, 2100 * f, 0.9),
      g(e, d, 6e-4, 0.5 * C, 0.03),
      p,
    ),
    a.bark &&
      v(
        m(e, o.pink, d, 0.12, f, s),
        _(e, `peaking`, a.barkHz * f, 1.4, 12),
        _(e, `bandpass`, a.barkHz * f, 1.1),
        j(e, 4),
        g(e, d, 6e-4, 0.75 * a.bark * w, 0.05),
        p,
      ),
    a.brake &&
      (v(
        m(e, o.white, d + 0.0015, 0.3, 1, s),
        _(e, `bandpass`, 3100, 0.55),
        j(e, 2.5),
        g(
          e,
          d + 0.0015,
          0.001,
          0.75 * a.brake * (0.3 + 0.7 * C),
          0.1 + 0.06 * a.brake,
        ),
        p,
      ),
      v(
        m(e, o.pink, d, 0.12, 1, s),
        _(e, `bandpass`, 520, 1.2),
        j(e, 5),
        g(e, d, 5e-4, 0.7 * a.brake * w, 0.035),
        p,
      )),
    v(
      m(e, o.brown, d, 0.3 * c, 1, s),
      _(e, `lowpass`, a.concHz, 0.8),
      j(e, 2.4),
      g(e, d, 0.0012, 0.85 * Math.sqrt(c) * a.body * w, 0.1 * c),
      p,
    ));
  let T = h(e, `sine`, a.subHz * 0.6, d, 0.25 * c);
  (y(T.frequency, a.subHz * 0.6, a.subTo, d, 0.025),
    v(
      T,
      g(
        e,
        d,
        0.0012,
        0.6 * a.subGain * (0.5 + 0.5 * C) * Math.min(1.25, c),
        0.09 * c,
      ),
      p,
    ),
    C > 0.05 &&
      (x(e, p, d + 0.004, {
        freq: a.ring,
        to: a.ring * 0.9,
        dur: a.ringDur,
        gain: a.ringGain * C,
        type: `triangle`,
      }),
      x(e, p, d + 0.004, {
        freq: a.ring * 2.76,
        to: a.ring * 2.6,
        dur: a.ringDur * 0.5,
        gain: a.ringGain * 0.35 * C,
        type: `sine`,
      })),
    C > 0.05 &&
      (a.action === `gas`
        ? (b(e, p, d + 0.038, i, {
            freq: 2300,
            Q: 2.5,
            dur: 0.014,
            gain: 0.32 * C,
          }),
          b(e, p, d + 0.082, i, { freq: 1500, Q: 2, dur: 0.02, gain: 0.4 * C }),
          x(e, p, d + 0.082, {
            freq: 3300,
            to: 2900,
            dur: 0.05,
            gain: 0.04 * C,
            type: `triangle`,
          }))
        : a.action === `heavy`
          ? (b(e, p, d + 0.06, i, {
              freq: 900,
              Q: 1.5,
              dur: 0.03,
              gain: 0.45 * C,
              buf: `pink`,
            }),
            b(e, p, d + 0.135, i, {
              freq: 620,
              Q: 1.2,
              dur: 0.045,
              gain: 0.6 * C,
              buf: `pink`,
            }),
            x(e, p, d + 0.135, {
              freq: 1450,
              to: 1300,
              dur: 0.08,
              gain: 0.05 * C,
              type: `triangle`,
            }))
          : b(e, p, d + 0.035, i, {
              freq: 1500 * f,
              Q: 2,
              dur: 0.018,
              gain: 0.12 * C,
            })));
  let E = (1.1 + 0.9 * u.far) * c * a.roll,
    D = a.tail ?? 1;
  (v(
    m(e, o.brown, d + 0.03, E + 0.3, 1, s),
    _(e, `lowpass`, 300 * a.echoTone, 0.7),
    g(e, d + 0.03, 0.04, (0.34 + 0.4 * u.far) * c * D, E),
    p,
  ),
    v(
      m(e, o.pink, d + 0.02, 0.9 * c, 1, s),
      _(e, `lowpass`, 1900 * a.echoTone, 0.5),
      g(e, d + 0.02, 0.012, (0.22 + 0.12 * u.mid) * D, 0.5 * c * a.roll),
      p,
    ));
  let O = d + E + 0.35;
  return (
    [0.11, 0.23, 0.39, 0.61, 0.9, 1.3].forEach((t, n) => {
      let r = d + t * a.echo * (0.85 + s() * 0.3),
        i = 0.3 * 0.72 ** n * c * D * (0.55 + 0.45 * u.far + 0.3 * u.mid);
      (v(
        m(e, o.pink, r, 0.5, 1, s),
        _(e, `lowpass`, Math.max(380, 1500 - n * 200) * a.echoTone, 0.6),
        g(e, r, 0.006, i, (0.22 + n * 0.07) * a.roll),
        p,
      ),
        (O = Math.max(O, r + 0.6 + n * 0.07)));
    }),
    O
  );
}
function ee(e, t, n, r, i) {
  let a = l(e),
    o = r.rand,
    s = S(r.d ?? 0, r.layerScale ?? 1),
    c = n + s.delay,
    u = (r.pitch ?? 1) * (0.985 + o() * 0.03),
    d = _(e, `lowpass`, s.lp, 0.5);
  d.connect(t);
  let f = s.close,
    p = 0.55 + 0.45 * f;
  if (i.crack > 0 && f > 0.02) {
    let t = i.crack * f;
    (v(
      m(e, a.white, c, 0.03, 1, o),
      _(e, `highpass`, 2200, 0.7),
      j(e, 3),
      g(e, c, 2e-4, 1.9 * t, 0.008),
      d,
    ),
      v(
        m(e, a.white, c + 8e-4, 0.03, 1, o),
        _(e, `highpass`, 3200, 0.7),
        g(e, c + 8e-4, 2e-4, 1.2 * t, 0.006),
        d,
      ));
  }
  (v(
    m(e, a.white, c, 0.05, u, o),
    _(e, `bandpass`, i.snapHz * u, 1.2),
    j(e, 4),
    g(e, c, 3e-4, 1.5 * i.snap * (0.3 + 0.7 * f) * s.mid, 0.014),
    d,
  ),
    v(
      m(e, a.pink, c, 0.08 + i.blastDur * 1.8, u, o),
      _(e, `bandpass`, i.blastHz * u, i.blastQ),
      j(e, 3),
      g(e, c, 7e-4, 0.9 * i.blastGain * p * s.mid, i.blastDur),
      d,
    ),
    v(
      m(e, a.brown, c, 0.06 + i.blastDur * 3, 1, o),
      _(e, `lowpass`, i.bodyHz, 0.8),
      j(e, 2.2),
      g(e, c, 0.001, 0.8 * i.body * p, 0.05 + i.blastDur),
      d,
    ));
  let C = h(e, `sine`, i.subHz, c, 0.06 + i.blastDur * 2);
  if (
    (y(C.frequency, i.subHz, i.subTo, c, 0.022),
    v(
      C,
      g(e, c, 0.001, 0.55 * i.subGain * (0.5 + 0.5 * f), 0.04 + i.blastDur),
      d,
    ),
    f > 0.05)
  ) {
    let t = i.slideBack,
      n = i.slideHome,
      a = i.slideHz,
      o = i.slideGain;
    (b(e, d, c + t, r, { freq: a * 1.3, Q: 1.8, dur: 0.01, gain: 0.7 * o * f }),
      b(e, d, c + n, r, {
        freq: a,
        Q: 1.4,
        dur: 0.016,
        gain: o * f,
        buf: a < 1500 ? `pink` : `white`,
      }),
      i.ringGain > 0 &&
        x(e, d, c + n, {
          freq: i.ring,
          to: i.ring * 0.94,
          dur: 0.06,
          gain: i.ringGain * f,
          type: `triangle`,
        }));
  }
  let w = (0.35 + 0.6 * s.far) * i.roll;
  (v(
    m(e, a.brown, c + 0.02, w + 0.25, 1, o),
    _(e, `lowpass`, 320 * i.echoTone, 0.7),
    g(e, c + 0.02, 0.03, (0.18 + 0.4 * s.far) * i.tail, w),
    d,
  ),
    v(
      m(e, a.pink, c + 0.015, 0.5, 1, o),
      _(e, `lowpass`, 2e3 * i.echoTone, 0.5),
      g(
        e,
        c + 0.015,
        0.008,
        (0.14 + 0.1 * s.mid) * i.tail,
        0.25 * i.roll + 0.05,
      ),
      d,
    ));
  let T = c + w + 0.3;
  return (
    [0.09, 0.2, 0.36, 0.58].forEach((t, n) => {
      let r = c + t * (0.85 + o() * 0.3),
        l = 0.2 * 0.68 ** n * i.tail * (0.55 + 0.45 * s.far + 0.3 * s.mid);
      (v(
        m(e, a.pink, r, 0.4, 1, o),
        _(e, `lowpass`, Math.max(380, 1600 - n * 250) * i.echoTone, 0.6),
        g(e, r, 0.005, l, (0.12 + n * 0.05) * i.roll),
        d,
      ),
        (T = Math.max(T, r + 0.45 + n * 0.05)));
    }),
    T
  );
}
