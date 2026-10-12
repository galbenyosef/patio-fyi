// assets__synth-xINWorK6 04 — pitch
// Lines 965-1131 of readable/assets__synth-xINWorK6.pretty.js (statement-aligned).
var j = {
  grass: (e, t, n, r) => {
    let i = a(e),
      o = r.rand,
      s = r.pitch * (0.9 + o() * 0.2);
    return (
      m(
        u(e, i.white, n, 0.12, s, o),
        p(e, `bandpass`, 2600 * s, 0.9),
        f(e, n, 0.006, 0.28, 0.07),
        t,
      ),
      m(
        u(e, i.pink, n + 0.02, 0.1, s, o),
        p(e, `lowpass`, 500, 0.7),
        f(e, n + 0.02, 0.004, 0.32, 0.05),
        t,
      ),
      n + 0.14
    );
  },
  dirt: (e, t, n, r) => {
    let i = a(e),
      o = r.rand,
      s = r.pitch * (0.92 + o() * 0.16);
    return (
      m(
        u(e, i.pink, n, 0.1, s, o),
        p(e, `lowpass`, 420 * s, 0.8),
        f(e, n, 0.003, 0.6, 0.055),
        t,
      ),
      m(
        u(e, i.crackle, n + 0.008, 0.09, s, o),
        p(e, `bandpass`, 1800, 1),
        f(e, n + 0.008, 0.003, 0.14, 0.05),
        t,
      ),
      n + 0.13
    );
  },
  rock: (e, t, n, r) => {
    let i = r.rand,
      a = r.pitch * (0.9 + i() * 0.2);
    return (
      g(e, t, n, r, {
        freq: 420 * a,
        Q: 0.65,
        dur: 0.085,
        gain: 0.55,
        buf: `pink`,
      }),
      g(e, t, n + 0.015, r, {
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
    let i = a(e),
      o = r.rand,
      s = r.pitch * (0.9 + o() * 0.2);
    return (
      m(
        u(e, i.white, n, 0.18, s, o),
        p(e, `bandpass`, 5200 * s, 0.6),
        f(e, n, 0.015, 0.22, 0.12),
        t,
      ),
      m(
        u(e, i.pink, n, 0.1, s, o),
        p(e, `lowpass`, 350, 0.7),
        f(e, n, 0.004, 0.3, 0.06),
        t,
      ),
      n + 0.2
    );
  },
  road: (e, t, n, r) => {
    let i = r.rand,
      a = r.pitch * (0.93 + i() * 0.14);
    return (
      g(e, t, n, r, {
        freq: 380 * a,
        Q: 0.7,
        dur: 0.075,
        gain: 0.55,
        buf: `pink`,
      }),
      g(e, t, n + 0.024, r, { freq: 1200 * a, Q: 0.6, dur: 0.04, gain: 0.16 }),
      n + 0.12
    );
  },
  water: (e, t, n, r) => {
    let i = a(e),
      o = r.rand,
      s = r.pitch * (0.9 + o() * 0.2),
      c = p(e, `bandpass`, 900 * s, 1.2);
    (h(c.frequency, 700 * s, 2200 * s, n, 0.18),
      m(u(e, i.white, n, 0.3, s, o), c, f(e, n, 0.01, 0.55, 0.2), t));
    for (let r = 0; r < 4; r++)
      _(e, t, n + 0.04 + o() * 0.16, {
        freq: 900 + o() * 1400,
        to: 1800 + o() * 1200,
        dur: 0.035,
        gain: 0.05,
      });
    return n + 0.34;
  },
  metal: (e, t, n, r) => {
    let i = r.rand,
      a = r.pitch * (0.95 + i() * 0.1);
    return (
      g(e, t, n, r, { freq: 2e3 * a, Q: 2, dur: 0.015, gain: 0.5 }),
      _(e, t, n, { freq: 640 * a, dur: 0.18, gain: 0.12, type: `triangle` }),
      _(e, t, n, { freq: 1730 * a, dur: 0.12, gain: 0.06 }),
      n + 0.22
    );
  },
  wood: (e, t, n, r) => {
    let i = r.rand,
      a = r.pitch * (0.92 + i() * 0.16);
    return (
      g(e, t, n, r, {
        freq: 480 * a,
        Q: 1.5,
        dur: 0.05,
        gain: 0.7,
        buf: `pink`,
      }),
      g(e, t, n + 0.002, r, { freq: 2200 * a, Q: 2, dur: 0.012, gain: 0.25 }),
      n + 0.09
    );
  },
};
((j.concrete = j.road),
  (j.stone = j.rock),
  (j.mud = j.dirt),
  (j.gravel = j.rock),
  (j.snow = j.sand));
function te(e, t, n, r) {
  return (j[r.surface] ?? j.dirt)(e, t, n, { ...r, pitch: r.pitch ?? 1 });
}
function ne(e, t, n, r) {
  let i = a(e),
    o = r.rand,
    s = r.pitch ?? 1;
  return (
    m(
      u(e, i.pink, n, 0.15, s, o),
      p(e, `bandpass`, 520 * s, 0.8),
      f(e, n, 0.008, 0.24, 0.12),
      t,
    ),
    m(
      u(e, i.white, n + 0.035, 0.045, s, o),
      p(e, `bandpass`, 1850 * s, 1.4),
      f(e, n + 0.035, 0.003, 0.075, 0.035),
      t,
    ),
    n + 0.19
  );
}
