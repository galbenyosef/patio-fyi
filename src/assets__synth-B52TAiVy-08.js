// assets__synth-B52TAiVy 08 — dur
// Lines 1617-1941 of readable/assets__synth-B52TAiVy.pretty.js (statement-aligned).
var F = {
  dirt: (e, t, n, r) => {
    let i = l(e),
      a = r.rand,
      o = r.pitch;
    return (
      v(
        m(e, i.pink, n, 0.14, o, a),
        _(e, `lowpass`, 900 * o, 0.8),
        g(e, n, 0.002, 0.9, 0.08),
        t,
      ),
      v(
        m(e, i.crackle, n + 0.01, 0.16, o, a),
        _(e, `bandpass`, 2400, 0.8),
        g(e, n + 0.01, 0.004, 0.3, 0.1),
        t,
      ),
      n + 0.2
    );
  },
  grass: (e, t, n, r) => {
    let i = l(e),
      a = r.rand,
      o = r.pitch;
    return (
      v(
        m(e, i.pink, n, 0.12, o, a),
        _(e, `lowpass`, 1200 * o, 0.8),
        g(e, n, 0.002, 0.7, 0.06),
        t,
      ),
      v(
        m(e, i.white, n + 0.005, 0.12, o, a),
        _(e, `bandpass`, 3200, 0.9),
        g(e, n + 0.005, 0.004, 0.25, 0.07),
        t,
      ),
      n + 0.16
    );
  },
  sand: (e, t, n, r) => {
    let i = l(e),
      a = r.rand,
      o = r.pitch;
    return (
      v(
        m(e, i.white, n, 0.2, o, a),
        _(e, `bandpass`, 4500 * o, 0.5),
        g(e, n, 0.004, 0.5, 0.13),
        t,
      ),
      v(
        m(e, i.pink, n, 0.1, o, a),
        _(e, `lowpass`, 500, 0.7),
        g(e, n, 0.002, 0.6, 0.05),
        t,
      ),
      n + 0.24
    );
  },
  rock: (e, t, n, r) => {
    let i = r.rand,
      a = r.pitch;
    return (
      b(e, t, n, r, { freq: 3e3 * a, Q: 1.5, dur: 0.02, gain: 0.65 }),
      b(e, t, n + 0.003, r, {
        freq: 700 * a,
        Q: 0.8,
        dur: 0.05,
        gain: 0.7,
        buf: `pink`,
      }),
      i() < 0.2 &&
        x(e, t, n + 0.01, {
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
      b(e, t, n, r, { freq: 3600 * a, Q: 1.8, dur: 0.015, gain: 0.65 }),
      b(e, t, n + 0.002, r, {
        freq: 1e3 * a,
        Q: 0.9,
        dur: 0.04,
        gain: 0.5,
        buf: `pink`,
      }),
      i() < 0.2 &&
        x(e, t, n + 0.008, {
          freq: 4200 * a,
          to: 1400 * a,
          dur: 0.18 + i() * 0.1,
          gain: 0.07,
        }),
      n + 0.5
    );
  },
  water: (e, t, n, r) => {
    let i = l(e),
      a = r.rand,
      o = r.pitch,
      s = _(e, `bandpass`, 600 * o, 1.5);
    (y(s.frequency, 500 * o, 2600 * o, n, 0.14),
      v(m(e, i.white, n, 0.3, o, a), s, g(e, n, 0.004, 0.9, 0.16), t),
      v(
        m(e, i.pink, n, 0.08, o, a),
        _(e, `lowpass`, 300, 0.7),
        g(e, n, 0.002, 0.5, 0.05),
        t,
      ));
    for (let r = 0; r < 3; r++)
      x(e, t, n + 0.05 + a() * 0.2, {
        freq: 700 + a() * 900,
        to: 1500 + a() * 1500,
        dur: 0.04,
        gain: 0.06,
      });
    return n + 0.36;
  },
  metal: (e, t, n, r) => {
    let i = r.rand,
      a = r.pitch * (0.95 + i() * 0.1);
    return (
      b(e, t, n, r, { freq: 2200 * a, Q: 1.2, dur: 0.014, gain: 0.6 }),
      b(e, t, n + 0.002, r, {
        freq: 600 * a,
        Q: 0.9,
        dur: 0.04,
        gain: 0.45,
        buf: `pink`,
      }),
      x(e, t, n, { freq: 810 * a, dur: 0.14, gain: 0.1, type: `triangle` }),
      x(e, t, n, { freq: 1370 * a, dur: 0.1, gain: 0.05 }),
      i() < 0.15 &&
        x(e, t, n + 0.012, {
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
      a = r.pitch;
    return (
      b(e, t, n, r, { freq: 520 * a, Q: 1.6, dur: 0.06, gain: 1, buf: `pink` }),
      b(e, t, n + 0.002, r, { freq: 2600 * a, Q: 1.5, dur: 0.02, gain: 0.5 }),
      v(
        m(e, l(e).crackle, n + 0.02, 0.12, a, i),
        _(e, `bandpass`, 1500, 0.8),
        g(e, n + 0.02, 0.004, 0.25, 0.09),
        t,
      ),
      n + 0.16
    );
  },
  flesh: (e, t, n, r) => {
    let i = l(e),
      a = r.rand,
      o = r.pitch;
    return (
      v(
        m(e, i.pink, n, 0.1, o, a),
        _(e, `lowpass`, 380 * o, 1),
        g(e, n, 0.003, 1, 0.07),
        t,
      ),
      v(
        m(e, i.white, n + 0.004, 0.08, o, a),
        _(e, `bandpass`, 1900, 1.5),
        g(e, n + 0.004, 0.003, 0.2, 0.04),
        t,
      ),
      n + 0.14
    );
  },
  glass: (e, t, n, r) => {
    let i = r.rand,
      a = r.pitch;
    b(e, t, n, r, { freq: 4500 * a, Q: 1, dur: 0.02, gain: 0.9 });
    for (let r = 0; r < 6; r++)
      x(e, t, n + 0.01 + i() * 0.25, {
        freq: 3e3 + i() * 5e3,
        dur: 0.08 + i() * 0.1,
        gain: 0.08,
      });
    return n + 0.4;
  },
};
((F.concrete = F.road),
  (F.stone = F.rock),
  (F.mud = F.dirt),
  (F.gravel = F.rock),
  (F.body = F.flesh));
function oe(e, t, n, r) {
  return (F[r.surface] ?? F.dirt)(e, t, n, {
    ...r,
    pitch: (r.pitch ?? 1) * (0.92 + r.rand() * 0.16),
  });
}
function I(e, t, n, r) {
  return (
    b(e, t, n, r, { freq: 2600, Q: 3, dur: 0.02, gain: 0.5 }),
    b(e, t, n + 0.05, r, {
      freq: 900,
      Q: 1,
      dur: 0.07,
      gain: 0.35,
      buf: `pink`,
    }),
    x(e, t, n + 0.05, {
      freq: 1200,
      to: 900,
      dur: 0.05,
      gain: 0.05,
      type: `triangle`,
    }),
    n + 0.16
  );
}
function L(e, t, n, r) {
  return (
    b(e, t, n, r, { freq: 600, Q: 1, dur: 0.05, gain: 0.7, buf: `pink` }),
    b(e, t, n + 0.015, r, { freq: 3200, Q: 2.5, dur: 0.015, gain: 0.5 }),
    x(e, t, n + 0.015, { freq: 2400, dur: 0.06, gain: 0.06 }),
    n + 0.12
  );
}
function se(e, t, n, r) {
  return (
    b(e, t, n, r, { freq: 1800, Q: 2, dur: 0.03, gain: 0.55 }),
    x(e, t, n, { freq: 2900, dur: 0.05, gain: 0.08, type: `triangle` }),
    b(e, t, n + 0.09, r, { freq: 2200, Q: 1.5, dur: 0.025, gain: 0.8 }),
    b(e, t, n + 0.095, r, {
      freq: 700,
      Q: 1,
      dur: 0.05,
      gain: 0.5,
      buf: `pink`,
    }),
    x(e, t, n + 0.09, { freq: 3400, to: 2600, dur: 0.07, gain: 0.07 }),
    n + 0.2
  );
}
var ce = {
  ar: { duration: 2.35, tone: 1 },
  carbine: { duration: 2.05, tone: 1.12 },
  dmr: { duration: 2.65, tone: 0.88 },
  sniper: { duration: 3.15, tone: 0.72 },
  lmg: { duration: 4.8, tone: 0.65 },
  smg: { duration: 1.9, tone: 1.2 },
  pistol: { duration: 1.65, tone: 1.35 },
  launcher: { duration: 3.8, tone: 0.55 },
};
function R(e, t, n, r, i = `ar`) {
  let a = ce[i],
    o = Number.isFinite(r.duration) ? Math.max(0.5, r.duration) : a.duration,
    s = e.createBiquadFilter();
  return (
    (s.type = `lowpass`),
    (s.frequency.value = 4200 * a.tone),
    s.connect(t),
    i === `launcher`
      ? (b(e, s, n + o * 0.06, r, {
          freq: 800,
          dur: 0.08,
          gain: 0.45,
          buf: `pink`,
        }),
        b(e, s, n + o * 0.28, r, {
          freq: 450,
          dur: 0.28,
          gain: 0.25,
          buf: `brown`,
        }),
        b(e, s, n + o * 0.58, r, {
          freq: 380,
          dur: 0.12,
          gain: 0.65,
          buf: `pink`,
        }),
        b(e, s, n + o * 0.84, r, { freq: 1200, dur: 0.06, gain: 0.55 }),
        n + o)
      : i === `lmg`
        ? (b(e, s, n + o * 0.05, r, {
            freq: 1400,
            Q: 0.6,
            dur: 0.035,
            gain: 0.4,
          }),
          I(e, s, n + o * 0.24, r),
          L(e, s, n + o * 0.68, r),
          b(e, s, n + o * 0.72, r, {
            freq: 2100,
            Q: 0.5,
            dur: 0.07,
            gain: 0.2,
          }),
          b(e, s, n + o * 0.94, r, {
            freq: 620,
            Q: 0.6,
            dur: 0.065,
            gain: 0.65,
            buf: `pink`,
          }),
          n + o)
        : (I(e, s, n + o * 0.06, r),
          L(e, s, n + o * 0.58, r),
          se(e, s, n + o * 0.84, r),
          n + o)
  );
}
function le(e, t, n, r) {
  return (b(e, t, n, r, { freq: 2800, Q: 3, dur: 0.02, gain: 0.5 }), n + 0.06);
}
