// assets__synth-B52TAiVy 07 — pitch
// Lines 1450-1616 of readable/assets__synth-B52TAiVy.pretty.js (statement-aligned).
var P = {
  grass: (e, t, n, r) => {
    let i = l(e),
      a = r.rand,
      o = r.pitch * (0.9 + a() * 0.2);
    return (
      v(
        m(e, i.white, n, 0.12, o, a),
        _(e, `bandpass`, 2600 * o, 0.9),
        g(e, n, 0.006, 0.28, 0.07),
        t,
      ),
      v(
        m(e, i.pink, n + 0.02, 0.1, o, a),
        _(e, `lowpass`, 500, 0.7),
        g(e, n + 0.02, 0.004, 0.32, 0.05),
        t,
      ),
      n + 0.14
    );
  },
  dirt: (e, t, n, r) => {
    let i = l(e),
      a = r.rand,
      o = r.pitch * (0.92 + a() * 0.16);
    return (
      v(
        m(e, i.pink, n, 0.1, o, a),
        _(e, `lowpass`, 420 * o, 0.8),
        g(e, n, 0.003, 0.6, 0.055),
        t,
      ),
      v(
        m(e, i.crackle, n + 0.008, 0.09, o, a),
        _(e, `bandpass`, 1800, 1),
        g(e, n + 0.008, 0.003, 0.14, 0.05),
        t,
      ),
      n + 0.13
    );
  },
  rock: (e, t, n, r) => {
    let i = r.rand,
      a = r.pitch * (0.9 + i() * 0.2);
    return (
      b(e, t, n, r, {
        freq: 420 * a,
        Q: 0.65,
        dur: 0.085,
        gain: 0.55,
        buf: `pink`,
      }),
      b(e, t, n + 0.015, r, {
        freq: 1500 * a,
        Q: 0.6,
        dur: 0.065,
        gain: 0.2,
        buf: `crackle`,
      }),
      n + 0.13
    );
  },
  sand: (e, t, n, r) => {
    let i = l(e),
      a = r.rand,
      o = r.pitch * (0.9 + a() * 0.2);
    return (
      v(
        m(e, i.white, n, 0.18, o, a),
        _(e, `bandpass`, 5200 * o, 0.6),
        g(e, n, 0.015, 0.22, 0.12),
        t,
      ),
      v(
        m(e, i.pink, n, 0.1, o, a),
        _(e, `lowpass`, 350, 0.7),
        g(e, n, 0.004, 0.3, 0.06),
        t,
      ),
      n + 0.2
    );
  },
  road: (e, t, n, r) => {
    let i = r.rand,
      a = r.pitch * (0.93 + i() * 0.14);
    return (
      b(e, t, n, r, {
        freq: 380 * a,
        Q: 0.7,
        dur: 0.075,
        gain: 0.55,
        buf: `pink`,
      }),
      b(e, t, n + 0.024, r, { freq: 1200 * a, Q: 0.6, dur: 0.04, gain: 0.16 }),
      n + 0.12
    );
  },
  water: (e, t, n, r) => {
    let i = l(e),
      a = r.rand,
      o = r.pitch * (0.9 + a() * 0.2),
      s = _(e, `bandpass`, 900 * o, 1.2);
    (y(s.frequency, 700 * o, 2200 * o, n, 0.18),
      v(m(e, i.white, n, 0.3, o, a), s, g(e, n, 0.01, 0.55, 0.2), t));
    for (let r = 0; r < 4; r++)
      x(e, t, n + 0.04 + a() * 0.16, {
        freq: 900 + a() * 1400,
        to: 1800 + a() * 1200,
        dur: 0.035,
        gain: 0.05,
      });
    return n + 0.34;
  },
  metal: (e, t, n, r) => {
    let i = r.rand,
      a = r.pitch * (0.95 + i() * 0.1);
    return (
      b(e, t, n, r, { freq: 2e3 * a, Q: 2, dur: 0.015, gain: 0.5 }),
      x(e, t, n, { freq: 640 * a, dur: 0.18, gain: 0.12, type: `triangle` }),
      x(e, t, n, { freq: 1730 * a, dur: 0.12, gain: 0.06 }),
      n + 0.22
    );
  },
  wood: (e, t, n, r) => {
    let i = r.rand,
      a = r.pitch * (0.92 + i() * 0.16);
    return (
      b(e, t, n, r, {
        freq: 480 * a,
        Q: 1.5,
        dur: 0.05,
        gain: 0.7,
        buf: `pink`,
      }),
      b(e, t, n + 0.002, r, { freq: 2200 * a, Q: 2, dur: 0.012, gain: 0.25 }),
      n + 0.09
    );
  },
};
((P.concrete = P.road),
  (P.stone = P.rock),
  (P.mud = P.dirt),
  (P.gravel = P.rock),
  (P.snow = P.sand));
function ie(e, t, n, r) {
  return (P[r.surface] ?? P.dirt)(e, t, n, { ...r, pitch: r.pitch ?? 1 });
}
function ae(e, t, n, r) {
  let i = l(e),
    a = r.rand,
    o = r.pitch ?? 1;
  return (
    v(
      m(e, i.pink, n, 0.15, o, a),
      _(e, `bandpass`, 520 * o, 0.8),
      g(e, n, 0.008, 0.24, 0.12),
      t,
    ),
    v(
      m(e, i.white, n + 0.035, 0.045, o, a),
      _(e, `bandpass`, 1850 * o, 1.4),
      g(e, n + 0.035, 0.003, 0.075, 0.035),
      t,
    ),
    n + 0.19
  );
}
