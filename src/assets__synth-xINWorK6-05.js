// assets__synth-xINWorK6 05 — dur
// Lines 1132-1456 of readable/assets__synth-xINWorK6.pretty.js (statement-aligned).
var M = {
  dirt: (e, t, n, r) => {
    let i = a(e),
      o = r.rand,
      s = r.pitch;
    return (
      m(
        u(e, i.pink, n, 0.14, s, o),
        p(e, `lowpass`, 900 * s, 0.8),
        f(e, n, 0.002, 0.9, 0.08),
        t,
      ),
      m(
        u(e, i.crackle, n + 0.01, 0.16, s, o),
        p(e, `bandpass`, 2400, 0.8),
        f(e, n + 0.01, 0.004, 0.3, 0.1),
        t,
      ),
      n + 0.2
    );
  },
  grass: (e, t, n, r) => {
    let i = a(e),
      o = r.rand,
      s = r.pitch;
    return (
      m(
        u(e, i.pink, n, 0.12, s, o),
        p(e, `lowpass`, 1200 * s, 0.8),
        f(e, n, 0.002, 0.7, 0.06),
        t,
      ),
      m(
        u(e, i.white, n + 0.005, 0.12, s, o),
        p(e, `bandpass`, 3200, 0.9),
        f(e, n + 0.005, 0.004, 0.25, 0.07),
        t,
      ),
      n + 0.16
    );
  },
  sand: (e, t, n, r) => {
    let i = a(e),
      o = r.rand,
      s = r.pitch;
    return (
      m(
        u(e, i.white, n, 0.2, s, o),
        p(e, `bandpass`, 4500 * s, 0.5),
        f(e, n, 0.004, 0.5, 0.13),
        t,
      ),
      m(
        u(e, i.pink, n, 0.1, s, o),
        p(e, `lowpass`, 500, 0.7),
        f(e, n, 0.002, 0.6, 0.05),
        t,
      ),
      n + 0.24
    );
  },
  rock: (e, t, n, r) => {
    let i = r.rand,
      a = r.pitch;
    return (
      g(e, t, n, r, { freq: 3e3 * a, Q: 1.5, dur: 0.02, gain: 0.65 }),
      g(e, t, n + 0.003, r, {
        freq: 700 * a,
        Q: 0.8,
        dur: 0.05,
        gain: 0.7,
        buf: `pink`,
      }),
      i() < 0.2 &&
        _(e, t, n + 0.01, {
          freq: 3800 * a,
          to: 1600 * a,
          dur: 0.16 + i() * 0.1,
          gain: 0.07,
        }),
      n + 0.4
    );
  },
  road: (e, t, n, r) => {
    let i = r.rand,
      a = r.pitch;
    return (
      g(e, t, n, r, { freq: 3600 * a, Q: 1.8, dur: 0.015, gain: 0.65 }),
      g(e, t, n + 0.002, r, {
        freq: 1e3 * a,
        Q: 0.9,
        dur: 0.04,
        gain: 0.5,
        buf: `pink`,
      }),
      i() < 0.2 &&
        _(e, t, n + 0.008, {
          freq: 4200 * a,
          to: 1400 * a,
          dur: 0.18 + i() * 0.1,
          gain: 0.07,
        }),
      n + 0.5
    );
  },
  water: (e, t, n, r) => {
    let i = a(e),
      o = r.rand,
      s = r.pitch,
      c = p(e, `bandpass`, 600 * s, 1.5);
    (h(c.frequency, 500 * s, 2600 * s, n, 0.14),
      m(u(e, i.white, n, 0.3, s, o), c, f(e, n, 0.004, 0.9, 0.16), t),
      m(
        u(e, i.pink, n, 0.08, s, o),
        p(e, `lowpass`, 300, 0.7),
        f(e, n, 0.002, 0.5, 0.05),
        t,
      ));
    for (let r = 0; r < 3; r++)
      _(e, t, n + 0.05 + o() * 0.2, {
        freq: 700 + o() * 900,
        to: 1500 + o() * 1500,
        dur: 0.04,
        gain: 0.06,
      });
    return n + 0.36;
  },
  metal: (e, t, n, r) => {
    let i = r.rand,
      a = r.pitch * (0.95 + i() * 0.1);
    return (
      g(e, t, n, r, { freq: 2200 * a, Q: 1.2, dur: 0.014, gain: 0.6 }),
      g(e, t, n + 0.002, r, {
        freq: 600 * a,
        Q: 0.9,
        dur: 0.04,
        gain: 0.45,
        buf: `pink`,
      }),
      _(e, t, n, { freq: 810 * a, dur: 0.14, gain: 0.1, type: `triangle` }),
      _(e, t, n, { freq: 1370 * a, dur: 0.1, gain: 0.05 }),
      i() < 0.15 &&
        _(e, t, n + 0.012, {
          freq: 4600 * a,
          to: 1700 * a,
          dur: 0.18,
          gain: 0.05,
        }),
      n + 0.22
    );
  },
  wood: (e, t, n, r) => {
    let i = r.rand,
      o = r.pitch;
    return (
      g(e, t, n, r, { freq: 520 * o, Q: 1.6, dur: 0.06, gain: 1, buf: `pink` }),
      g(e, t, n + 0.002, r, { freq: 2600 * o, Q: 1.5, dur: 0.02, gain: 0.5 }),
      m(
        u(e, a(e).crackle, n + 0.02, 0.12, o, i),
        p(e, `bandpass`, 1500, 0.8),
        f(e, n + 0.02, 0.004, 0.25, 0.09),
        t,
      ),
      n + 0.16
    );
  },
  flesh: (e, t, n, r) => {
    let i = a(e),
      o = r.rand,
      s = r.pitch;
    return (
      m(
        u(e, i.pink, n, 0.1, s, o),
        p(e, `lowpass`, 380 * s, 1),
        f(e, n, 0.003, 1, 0.07),
        t,
      ),
      m(
        u(e, i.white, n + 0.004, 0.08, s, o),
        p(e, `bandpass`, 1900, 1.5),
        f(e, n + 0.004, 0.003, 0.2, 0.04),
        t,
      ),
      n + 0.14
    );
  },
  glass: (e, t, n, r) => {
    let i = r.rand,
      a = r.pitch;
    g(e, t, n, r, { freq: 4500 * a, Q: 1, dur: 0.02, gain: 0.9 });
    for (let r = 0; r < 6; r++)
      _(e, t, n + 0.01 + i() * 0.25, {
        freq: 3e3 + i() * 5e3,
        dur: 0.08 + i() * 0.1,
        gain: 0.08,
      });
    return n + 0.4;
  },
};
((M.concrete = M.road),
  (M.stone = M.rock),
  (M.mud = M.dirt),
  (M.gravel = M.rock),
  (M.body = M.flesh));
function re(e, t, n, r) {
  return (M[r.surface] ?? M.dirt)(e, t, n, {
    ...r,
    pitch: (r.pitch ?? 1) * (0.92 + r.rand() * 0.16),
  });
}
function N(e, t, n, r) {
  return (
    g(e, t, n, r, { freq: 2600, Q: 3, dur: 0.02, gain: 0.5 }),
    g(e, t, n + 0.05, r, {
      freq: 900,
      Q: 1,
      dur: 0.07,
      gain: 0.35,
      buf: `pink`,
    }),
    _(e, t, n + 0.05, {
      freq: 1200,
      to: 900,
      dur: 0.05,
      gain: 0.05,
      type: `triangle`,
    }),
    n + 0.16
  );
}
function P(e, t, n, r) {
  return (
    g(e, t, n, r, { freq: 600, Q: 1, dur: 0.05, gain: 0.7, buf: `pink` }),
    g(e, t, n + 0.015, r, { freq: 3200, Q: 2.5, dur: 0.015, gain: 0.5 }),
    _(e, t, n + 0.015, { freq: 2400, dur: 0.06, gain: 0.06 }),
    n + 0.12
  );
}
function F(e, t, n, r) {
  return (
    g(e, t, n, r, { freq: 1800, Q: 2, dur: 0.03, gain: 0.55 }),
    _(e, t, n, { freq: 2900, dur: 0.05, gain: 0.08, type: `triangle` }),
    g(e, t, n + 0.09, r, { freq: 2200, Q: 1.5, dur: 0.025, gain: 0.8 }),
    g(e, t, n + 0.095, r, {
      freq: 700,
      Q: 1,
      dur: 0.05,
      gain: 0.5,
      buf: `pink`,
    }),
    _(e, t, n + 0.09, { freq: 3400, to: 2600, dur: 0.07, gain: 0.07 }),
    n + 0.2
  );
}
var I = {
  ar: { duration: 2.35, tone: 1 },
  carbine: { duration: 2.05, tone: 1.12 },
  dmr: { duration: 2.65, tone: 0.88 },
  sniper: { duration: 3.15, tone: 0.72 },
  lmg: { duration: 4.8, tone: 0.65 },
  smg: { duration: 1.9, tone: 1.2 },
  pistol: { duration: 1.65, tone: 1.35 },
  launcher: { duration: 3.8, tone: 0.55 },
};
function L(e, t, n, r, i = `ar`) {
  let a = I[i],
    o = Number.isFinite(r.duration) ? Math.max(0.5, r.duration) : a.duration,
    s = e.createBiquadFilter();
  return (
    (s.type = `lowpass`),
    (s.frequency.value = 4200 * a.tone),
    s.connect(t),
    i === `launcher`
      ? (g(e, s, n + o * 0.06, r, {
          freq: 800,
          dur: 0.08,
          gain: 0.45,
          buf: `pink`,
        }),
        g(e, s, n + o * 0.28, r, {
          freq: 450,
          dur: 0.28,
          gain: 0.25,
          buf: `brown`,
        }),
        g(e, s, n + o * 0.58, r, {
          freq: 380,
          dur: 0.12,
          gain: 0.65,
          buf: `pink`,
        }),
        g(e, s, n + o * 0.84, r, { freq: 1200, dur: 0.06, gain: 0.55 }),
        n + o)
      : i === `lmg`
        ? (g(e, s, n + o * 0.05, r, {
            freq: 1400,
            Q: 0.6,
            dur: 0.035,
            gain: 0.4,
          }),
          N(e, s, n + o * 0.24, r),
          P(e, s, n + o * 0.68, r),
          g(e, s, n + o * 0.72, r, {
            freq: 2100,
            Q: 0.5,
            dur: 0.07,
            gain: 0.2,
          }),
          g(e, s, n + o * 0.94, r, {
            freq: 620,
            Q: 0.6,
            dur: 0.065,
            gain: 0.65,
            buf: `pink`,
          }),
          n + o)
        : (N(e, s, n + o * 0.06, r),
          P(e, s, n + o * 0.58, r),
          F(e, s, n + o * 0.84, r),
          n + o)
  );
}
function ie(e, t, n, r) {
  return (g(e, t, n, r, { freq: 2800, Q: 3, dur: 0.02, gain: 0.5 }), n + 0.06);
}
