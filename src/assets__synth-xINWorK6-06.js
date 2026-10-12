// assets__synth-xINWorK6 06 — dur
// Lines 1457-1803 of readable/assets__synth-xINWorK6.pretty.js (statement-aligned).
function ae(e, t, n, r) {
  let i = a(e),
    o = v(r.d ?? 0, 1.5),
    s = n + o.delay,
    c = p(e, `lowpass`, o.lp, 0.6);
  return (
    c.connect(t),
    m(
      u(e, i.white, s, 0.07, 1, r.rand),
      p(e, `highpass`, 1100, 0.6),
      f(e, s, 0.001, 0.65 * o.close, 0.035),
      c,
    ),
    m(
      u(e, i.pink, s, 0.42, 1, r.rand, !0),
      p(e, `bandpass`, 240, 0.65),
      f(e, s, 0.004, 1.15, 0.28, 0.065),
      c,
    ),
    m(d(e, `sine`, 68, s, 0.23), f(e, s, 0.005, 0.38, 0.19), c),
    m(
      u(e, i.white, s + 0.016, 0.52, 1, r.rand, !0),
      p(e, `bandpass`, 1050, 0.45),
      f(e, s + 0.016, 0.012, 0.52 * (0.35 + 0.65 * o.close), 0.36, 0.045),
      c,
    ),
    m(
      u(e, i.brown, s + 0.045, 0.94, 1, r.rand, !0),
      p(e, `lowpass`, 390, 0.6),
      f(e, s + 0.045, 0.025, 0.62 * (0.45 + 0.55 * o.far), 0.78),
      c,
    ),
    m(
      u(e, i.pink, s + 0.13, 0.32, 1, r.rand, !0),
      p(e, `bandpass`, 470, 0.5),
      f(e, s + 0.13, 0.014, 0.24 * (0.4 + 0.6 * o.mid), 0.27),
      c,
    ),
    o.close > 0.02 &&
      g(e, c, s + 0.065, r, {
        freq: 920,
        dur: 0.022,
        gain: 0.1 * o.close,
        buf: `pink`,
      }),
    s + 1.05
  );
}
function oe(e, t, n, r) {
  let i = a(e);
  (_(e, t, n, { freq: 100, to: 38, dur: 0.18, gain: 0.35 }),
    m(
      u(e, i.brown, n, 0.45, 1, r.rand),
      p(e, `lowpass`, 850),
      f(e, n, 0.008, 0.6, 0.36),
      t,
    ));
  let o = p(e, `bandpass`, 650, 0.6);
  return (
    h(o.frequency, 650, 220, n, 0.5),
    m(
      u(e, i.pink, n + 0.025, 0.65, 1, r.rand),
      o,
      f(e, n + 0.025, 0.04, 0.27, 0.5),
      t,
    ),
    n + 0.72
  );
}
var R = {
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
  let i = a(e),
    o = r.rand,
    s = R[r.kind] ?? R.generic,
    c = (e) => 1 + (o() * 2 - 1) * e,
    l = (r.size ?? s.size) * c(0.12),
    y = c(0.1),
    b = v(r.d ?? 0, 2.2),
    x = n + b.delay,
    S = p(e, `lowpass`, b.lp, 0.5);
  S.connect(t);
  let C = 0.42,
    w = 0.3 * l,
    T = p(e, `lowpass`, 7e3 * y, 0.6);
  (h(T.frequency, 7e3 * y, 180, x, 1 * l),
    m(
      u(e, i.white, x, w + 1.2 * l, 1, o),
      T,
      f(e, x, 0.003, C * 1.6 * s.crack * (0.45 + 0.55 * b.close), 0.9 * l),
      S,
    ),
    b.close > 0.05 &&
      g(e, S, x, r, {
        freq: 2400 * y,
        Q: 0.8,
        dur: 0.012,
        gain: C * 0.9 * s.crack * b.close,
        buf: `white`,
      }));
  let E = d(e, `sine`, 68 * y, x, 0.9 * l);
  (h(E.frequency, 68 * y, 22, x, 0.55 * l),
    m(
      E,
      f(e, x, 0.005, C * 1.5 * s.sub * l * (0.35 + 0.65 * b.close), 0.65 * l),
      S,
    ));
  let D = f(e, x + 0.1, 0.04, C * 0.7 * s.crackle * b.mid, 1.3 * l);
  (m(
    u(e, i.crackle, x + 0.1, 1.5 * l, 1, o),
    p(e, `bandpass`, 1500 * y, 0.7),
    D,
    S,
  ),
    s.ring > 0 &&
      _(e, S, x + 0.02, {
        freq: 1900 * y,
        to: 700,
        dur: 0.35 * l,
        gain: C * s.ring * b.close,
        type: `triangle`,
      }));
  let O = 2 * l;
  m(
    u(e, i.brown, x, O + 0.3, 1, o),
    p(e, `lowpass`, 230, 0.9),
    f(e, x, 0.025, C * 1.3 * s.boom * (0.45 + 0.55 * b.far), O),
    S,
  );
  let k = x + 0.13 + o() * 0.22;
  m(
    u(e, i.brown, k, O, 1, o),
    p(e, `lowpass`, 150, 0.9),
    f(e, k, 0.05, C * 0.55 * s.boom * (0.25 + 0.75 * b.far), O * 0.9),
    S,
  );
  let A = 2.4 * l;
  if (
    (m(
      u(e, i.pink, x + 0.05, A + 0.2, 1, o),
      p(e, `lowpass`, 900, 0.5),
      f(e, x + 0.05, 0.08, C * 0.45 * s.tail * b.mid, A),
      S,
    ),
    s.fuel > 0)
  ) {
    let t = p(e, `bandpass`, 520, 0.5);
    (h(t.frequency, 520, 240, x + 0.1, 1.4 * l),
      m(
        u(e, i.pink, x + 0.08, 1.6 * l, 1, o),
        t,
        f(e, x + 0.08, 0.12, C * 0.55 * s.fuel * (0.4 + 0.6 * b.mid), 1.4 * l),
        S,
      ));
  }
  for (let t = 0; t < s.pops; t++)
    g(e, S, x + 0.35 + o() * 1.5 * l, r, {
      freq: 400 + o() * 1600,
      Q: 1.5,
      dur: 0.025 + o() * 0.02,
      gain: C * 0.6 * b.close,
      buf: o() < 0.5 ? `pink` : `crackle`,
    });
  if (s.fuel >= 1)
    for (let t = 0; t < 3; t++) {
      let t = x + 0.6 + o() * 2;
      m(
        u(e, i.white, t, 0.12, 1, o),
        p(e, `lowpass`, 1200),
        f(e, t, 0.002, C * 0.5 * (0.3 + 0.7 * b.mid), 0.1),
        S,
      );
    }
  return x + Math.max(O, A) + 0.3;
}
function se(e, t, n, r) {
  let i = a(e),
    o = r.rand,
    s = v(r.d ?? 0, 2),
    c = n + s.delay,
    l = p(e, `lowpass`, s.lp, 0.5);
  l.connect(t);
  let _ = d(e, `sawtooth`, 90, c, 0.5);
  (h(_.frequency, 90, 55, c, 0.45),
    m(_, p(e, `bandpass`, 500, 4), f(e, c, 0.1, 0.18, 0.4), l),
    m(
      u(e, i.brown, c + 0.2, 2.2, 1, o),
      p(e, `lowpass`, 160, 0.9),
      f(e, c + 0.2, 0.15, 1, 1.8),
      l,
    ));
  for (let t = 0; t < 9; t++) {
    let n = c + 0.3 + t * 0.11 + o() * 0.12;
    (g(e, l, n, r, {
      freq: 250 + o() * 600,
      Q: 1.2,
      dur: 0.05 + o() * 0.05,
      gain: 0.5 * s.mid,
      buf: `pink`,
    }),
      g(e, l, n + 0.01, r, {
        freq: 1500 + o() * 2e3,
        Q: 1,
        dur: 0.02,
        gain: 0.2 * s.close,
      }));
  }
  return (
    m(
      u(e, i.crackle, c + 0.3, 1.8, 1, o),
      p(e, `bandpass`, 1200, 0.7),
      f(e, c + 0.3, 0.1, 0.35 * s.mid, 1.4),
      l,
    ),
    m(
      u(e, i.pink, c + 0.8, 2, 1, o),
      p(e, `lowpass`, 1200, 0.5),
      f(e, c + 0.8, 0.3, 0.2, 1.6),
      l,
    ),
    c + 3
  );
}
function ce(e, t, n, r) {
  return (
    _(e, t, n, { freq: 1760, dur: 0.045, gain: 0.32, type: `sine` }),
    g(e, t, n, r, { freq: 5e3, Q: 2, dur: 0.008, gain: 0.25 }),
    n + 0.07
  );
}
function B(e, t, n) {
  return (
    _(e, t, n, { freq: 1046, dur: 0.09, gain: 0.3, type: `triangle` }),
    _(e, t, n + 0.08, { freq: 1568, dur: 0.16, gain: 0.3, type: `triangle` }),
    n + 0.26
  );
}
function V(e, t, n) {
  return (
    _(e, t, n, { freq: 220, dur: 0.14, gain: 0.35, type: `square` }),
    _(e, t, n + 0.12, { freq: 174, dur: 0.18, gain: 0.35, type: `square` }),
    n + 0.32
  );
}
function H(e, t, n) {
  return (
    _(e, t, n, { freq: 1318, dur: 0.14, gain: 0.22, type: `sine` }),
    _(e, t, n + 0.05, { freq: 1976, dur: 0.22, gain: 0.16, type: `sine` }),
    n + 0.3
  );
}
function U(e, t, n, r) {
  let i = p(e, `bandpass`, 800, 3);
  return (
    h(i.frequency, 600, 2400, n, 0.12),
    m(u(e, a(e).white, n, 0.16, 1, r.rand), i, f(e, n, 0.01, 0.3, 0.12), t),
    n + 0.18
  );
}
