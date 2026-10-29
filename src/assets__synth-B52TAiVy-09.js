// assets__synth-B52TAiVy 09 — dur
// Lines 1942-2288 of readable/assets__synth-B52TAiVy.pretty.js (statement-aligned).
function ue(e, t, n, r) {
  let i = l(e),
    a = S(r.d ?? 0, 1.5),
    o = n + a.delay,
    s = _(e, `lowpass`, a.lp, 0.6);
  return (
    s.connect(t),
    v(
      m(e, i.white, o, 0.07, 1, r.rand),
      _(e, `highpass`, 1100, 0.6),
      g(e, o, 0.001, 0.65 * a.close, 0.035),
      s,
    ),
    v(
      m(e, i.pink, o, 0.42, 1, r.rand, !0),
      _(e, `bandpass`, 240, 0.65),
      g(e, o, 0.004, 1.15, 0.28, 0.065),
      s,
    ),
    v(h(e, `sine`, 68, o, 0.23), g(e, o, 0.005, 0.38, 0.19), s),
    v(
      m(e, i.white, o + 0.016, 0.52, 1, r.rand, !0),
      _(e, `bandpass`, 1050, 0.45),
      g(e, o + 0.016, 0.012, 0.52 * (0.35 + 0.65 * a.close), 0.36, 0.045),
      s,
    ),
    v(
      m(e, i.brown, o + 0.045, 0.94, 1, r.rand, !0),
      _(e, `lowpass`, 390, 0.6),
      g(e, o + 0.045, 0.025, 0.62 * (0.45 + 0.55 * a.far), 0.78),
      s,
    ),
    v(
      m(e, i.pink, o + 0.13, 0.32, 1, r.rand, !0),
      _(e, `bandpass`, 470, 0.5),
      g(e, o + 0.13, 0.014, 0.24 * (0.4 + 0.6 * a.mid), 0.27),
      s,
    ),
    a.close > 0.02 &&
      b(e, s, o + 0.065, r, {
        freq: 920,
        dur: 0.022,
        gain: 0.1 * a.close,
        buf: `pink`,
      }),
    o + 1.05
  );
}
function de(e, t, n, r) {
  let i = l(e);
  (x(e, t, n, { freq: 100, to: 38, dur: 0.18, gain: 0.35 }),
    v(
      m(e, i.brown, n, 0.45, 1, r.rand),
      _(e, `lowpass`, 850),
      g(e, n, 0.008, 0.6, 0.36),
      t,
    ));
  let a = _(e, `bandpass`, 650, 0.6);
  return (
    y(a.frequency, 650, 220, n, 0.5),
    v(
      m(e, i.pink, n + 0.025, 0.65, 1, r.rand),
      a,
      g(e, n + 0.025, 0.04, 0.27, 0.5),
      t,
    ),
    n + 0.72
  );
}
var fe = {
  generic: {
    size: 1,
    crack: 1,
    sub: 1,
    crackle: 1,
    boom: 1,
    tail: 1,
    pops: 5,
    ring: 0,
    fuel: 0,
  },
  shell: {
    size: 1.15,
    crack: 1.35,
    sub: 1.25,
    crackle: 0.9,
    boom: 1.15,
    tail: 0.8,
    pops: 7,
    ring: 0.18,
    fuel: 0,
  },
  cannon: {
    size: 0.42,
    crack: 1.25,
    sub: 0.45,
    crackle: 0.8,
    boom: 0.35,
    tail: 0.35,
    pops: 3,
    ring: 0.1,
    fuel: 0,
  },
  rocket: {
    size: 0.95,
    crack: 1,
    sub: 0.9,
    crackle: 0.7,
    boom: 0.9,
    tail: 1.2,
    pops: 4,
    ring: 0,
    fuel: 0.45,
  },
  grenade: {
    size: 0.7,
    crack: 1.3,
    sub: 0.6,
    crackle: 1.5,
    boom: 0.6,
    tail: 0.6,
    pops: 6,
    ring: 0.06,
    fuel: 0,
  },
  claymore: {
    size: 0.5,
    crack: 1.4,
    sub: 0.35,
    crackle: 1.3,
    boom: 0.35,
    tail: 0.3,
    pops: 2,
    ring: 0,
    fuel: 0,
  },
  c4: {
    size: 1.45,
    crack: 1.1,
    sub: 1.5,
    crackle: 0.8,
    boom: 1.3,
    tail: 1.1,
    pops: 8,
    ring: 0,
    fuel: 0,
  },
  wreck: {
    size: 1.5,
    crack: 0.9,
    sub: 1.3,
    crackle: 1.1,
    boom: 1.2,
    tail: 1.4,
    pops: 9,
    ring: 0.3,
    fuel: 1,
  },
};
function z(e, t, n, r) {
  let i = l(e),
    a = r.rand,
    o = fe[r.kind] ?? fe.generic,
    s = (e) => 1 + (a() * 2 - 1) * e,
    c = (r.size ?? o.size) * s(0.12),
    u = s(0.1),
    d = S(r.d ?? 0, 2.2),
    f = n + d.delay,
    p = _(e, `lowpass`, d.lp, 0.5);
  p.connect(t);
  let C = 0.42,
    w = 0.3 * c,
    T = _(e, `lowpass`, 7e3 * u, 0.6);
  (y(T.frequency, 7e3 * u, 180, f, 1 * c),
    v(
      m(e, i.white, f, w + 1.2 * c, 1, a),
      T,
      g(e, f, 0.003, C * 1.6 * o.crack * (0.45 + 0.55 * d.close), 0.9 * c),
      p,
    ),
    d.close > 0.05 &&
      b(e, p, f, r, {
        freq: 2400 * u,
        Q: 0.8,
        dur: 0.012,
        gain: C * 0.9 * o.crack * d.close,
        buf: `white`,
      }));
  let E = h(e, `sine`, 68 * u, f, 0.9 * c);
  (y(E.frequency, 68 * u, 22, f, 0.55 * c),
    v(
      E,
      g(e, f, 0.005, C * 1.5 * o.sub * c * (0.35 + 0.65 * d.close), 0.65 * c),
      p,
    ));
  let D = g(e, f + 0.1, 0.04, C * 0.7 * o.crackle * d.mid, 1.3 * c);
  (v(
    m(e, i.crackle, f + 0.1, 1.5 * c, 1, a),
    _(e, `bandpass`, 1500 * u, 0.7),
    D,
    p,
  ),
    o.ring > 0 &&
      x(e, p, f + 0.02, {
        freq: 1900 * u,
        to: 700,
        dur: 0.35 * c,
        gain: C * o.ring * d.close,
        type: `triangle`,
      }));
  let O = 2 * c;
  v(
    m(e, i.brown, f, O + 0.3, 1, a),
    _(e, `lowpass`, 230, 0.9),
    g(e, f, 0.025, C * 1.3 * o.boom * (0.45 + 0.55 * d.far), O),
    p,
  );
  let k = f + 0.13 + a() * 0.22;
  v(
    m(e, i.brown, k, O, 1, a),
    _(e, `lowpass`, 150, 0.9),
    g(e, k, 0.05, C * 0.55 * o.boom * (0.25 + 0.75 * d.far), O * 0.9),
    p,
  );
  let A = 2.4 * c;
  if (
    (v(
      m(e, i.pink, f + 0.05, A + 0.2, 1, a),
      _(e, `lowpass`, 900, 0.5),
      g(e, f + 0.05, 0.08, C * 0.45 * o.tail * d.mid, A),
      p,
    ),
    o.fuel > 0)
  ) {
    let t = _(e, `bandpass`, 520, 0.5);
    (y(t.frequency, 520, 240, f + 0.1, 1.4 * c),
      v(
        m(e, i.pink, f + 0.08, 1.6 * c, 1, a),
        t,
        g(e, f + 0.08, 0.12, C * 0.55 * o.fuel * (0.4 + 0.6 * d.mid), 1.4 * c),
        p,
      ));
  }
  for (let t = 0; t < o.pops; t++)
    b(e, p, f + 0.35 + a() * 1.5 * c, r, {
      freq: 400 + a() * 1600,
      Q: 1.5,
      dur: 0.025 + a() * 0.02,
      gain: C * 0.6 * d.close,
      buf: a() < 0.5 ? `pink` : `crackle`,
    });
  if (o.fuel >= 1)
    for (let t = 0; t < 3; t++) {
      let t = f + 0.6 + a() * 2;
      v(
        m(e, i.white, t, 0.12, 1, a),
        _(e, `lowpass`, 1200),
        g(e, t, 0.002, C * 0.5 * (0.3 + 0.7 * d.mid), 0.1),
        p,
      );
    }
  return f + Math.max(O, A) + 0.3;
}
function pe(e, t, n, r) {
  let i = l(e),
    a = r.rand,
    o = S(r.d ?? 0, 2),
    s = n + o.delay,
    c = _(e, `lowpass`, o.lp, 0.5);
  c.connect(t);
  let u = h(e, `sawtooth`, 90, s, 0.5);
  (y(u.frequency, 90, 55, s, 0.45),
    v(u, _(e, `bandpass`, 500, 4), g(e, s, 0.1, 0.18, 0.4), c),
    v(
      m(e, i.brown, s + 0.2, 2.2, 1, a),
      _(e, `lowpass`, 160, 0.9),
      g(e, s + 0.2, 0.15, 1, 1.8),
      c,
    ));
  for (let t = 0; t < 9; t++) {
    let n = s + 0.3 + t * 0.11 + a() * 0.12;
    (b(e, c, n, r, {
      freq: 250 + a() * 600,
      Q: 1.2,
      dur: 0.05 + a() * 0.05,
      gain: 0.5 * o.mid,
      buf: `pink`,
    }),
      b(e, c, n + 0.01, r, {
        freq: 1500 + a() * 2e3,
        Q: 1,
        dur: 0.02,
        gain: 0.2 * o.close,
      }));
  }
  return (
    v(
      m(e, i.crackle, s + 0.3, 1.8, 1, a),
      _(e, `bandpass`, 1200, 0.7),
      g(e, s + 0.3, 0.1, 0.35 * o.mid, 1.4),
      c,
    ),
    v(
      m(e, i.pink, s + 0.8, 2, 1, a),
      _(e, `lowpass`, 1200, 0.5),
      g(e, s + 0.8, 0.3, 0.2, 1.6),
      c,
    ),
    s + 3
  );
}
function me(e, t, n, r) {
  return (
    x(e, t, n, { freq: 1760, dur: 0.045, gain: 0.32, type: `sine` }),
    b(e, t, n, r, { freq: 5e3, Q: 2, dur: 0.008, gain: 0.25 }),
    n + 0.07
  );
}
function he(e, t, n) {
  return (
    x(e, t, n, { freq: 1046, dur: 0.09, gain: 0.3, type: `triangle` }),
    x(e, t, n + 0.08, { freq: 1568, dur: 0.16, gain: 0.3, type: `triangle` }),
    n + 0.26
  );
}
function ge(e, t, n) {
  return (
    x(e, t, n, { freq: 220, dur: 0.14, gain: 0.35, type: `square` }),
    x(e, t, n + 0.12, { freq: 174, dur: 0.18, gain: 0.35, type: `square` }),
    n + 0.32
  );
}
function _e(e, t, n) {
  return (
    x(e, t, n, { freq: 1318, dur: 0.14, gain: 0.22, type: `sine` }),
    x(e, t, n + 0.05, { freq: 1976, dur: 0.22, gain: 0.16, type: `sine` }),
    n + 0.3
  );
}
function ve(e, t, n, r) {
  let i = _(e, `bandpass`, 800, 3);
  return (
    y(i.frequency, 600, 2400, n, 0.12),
    v(m(e, l(e).white, n, 0.16, 1, r.rand), i, g(e, n, 0.01, 0.3, 0.12), t),
    n + 0.18
  );
}
