// assets__synth-xINWorK6 01 — crack
// Lines 1-342 of readable/assets__synth-xINWorK6.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
var e = Object.freeze({
    longbow: {
      level: 0.44,
      cal: 1,
      pitch: 1,
      crack: 1,
      clack: 1,
      clackHz: 2100,
      blastGain: 1,
      blastHz: 900,
      blastQ: 0.6,
      blastDur: 0.06,
      bark: 0,
      barkHz: 1800,
      brake: 0,
      body: 1,
      concHz: 560,
      subGain: 1,
      subHz: 112,
      subTo: 30,
      ringGain: 0.12,
      ring: 1180,
      ringDur: 0.12,
      action: `none`,
      tail: 1,
      roll: 1,
      echo: 1,
      echoTone: 1,
    },
    harrier: {
      level: 0.55,
      cal: 0.9,
      pitch: 1.15,
      crack: 0.9,
      clack: 1,
      clackHz: 2700,
      blastGain: 1.3,
      blastHz: 1500,
      blastQ: 0.9,
      blastDur: 0.035,
      bark: 0.9,
      barkHz: 2600,
      brake: 0,
      body: 0.55,
      concHz: 950,
      subGain: 0.45,
      subHz: 140,
      subTo: 45,
      ringGain: 0.14,
      ring: 1900,
      ringDur: 0.07,
      action: `gas`,
      tail: 1,
      roll: 0.6,
      echo: 0.8,
      echoTone: 1.3,
    },
    peregrine: {
      level: 0.45,
      cal: 0.95,
      pitch: 1.07,
      crack: 1.1,
      clack: 1.1,
      clackHz: 2400,
      blastGain: 1.25,
      blastHz: 1200,
      blastQ: 0.7,
      blastDur: 0.05,
      bark: 1.4,
      barkHz: 1700,
      brake: 0,
      body: 0.7,
      concHz: 820,
      subGain: 0.65,
      subHz: 124,
      subTo: 36,
      ringGain: 0.16,
      ring: 2400,
      ringDur: 0.06,
      action: `none`,
      tail: 1,
      roll: 0.8,
      echo: 0.9,
      echoTone: 1.2,
    },
    osprey: {
      level: 0.27,
      cal: 1.5,
      pitch: 0.85,
      crack: 2.5,
      clack: 2,
      clackHz: 2100,
      blastGain: 2,
      blastHz: 900,
      blastQ: 0.6,
      blastDur: 0.06,
      bark: 0,
      barkHz: 1800,
      brake: 0,
      body: 1.3,
      concHz: 560,
      subGain: 0.9,
      subHz: 110,
      subTo: 30,
      ringGain: 0.06,
      ring: 1200,
      ringDur: 0.08,
      action: `none`,
      tail: 1.6,
      roll: 1.6,
      echo: 1,
      echoTone: 1,
    },
    condor: {
      level: 0.27,
      cal: 1.5,
      pitch: 0.85,
      crack: 2.5,
      clack: 2,
      clackHz: 2100,
      blastGain: 2,
      blastHz: 900,
      blastQ: 0.6,
      blastDur: 0.06,
      bark: 0,
      barkHz: 1800,
      brake: 0,
      body: 1.3,
      concHz: 560,
      subGain: 0.9,
      subHz: 110,
      subTo: 30,
      ringGain: 0.06,
      ring: 1200,
      ringDur: 0.08,
      action: `none`,
      tail: 1.6,
      roll: 1.6,
      echo: 1,
      echoTone: 1,
    },
    spectre: {
      level: 0.27,
      cal: 1.5,
      pitch: 0.85,
      crack: 2.5,
      clack: 2,
      clackHz: 2100,
      blastGain: 2,
      blastHz: 900,
      blastQ: 0.6,
      blastDur: 0.06,
      bark: 0,
      barkHz: 1800,
      brake: 0,
      body: 1.3,
      concHz: 560,
      subGain: 0.9,
      subHz: 110,
      subTo: 30,
      ringGain: 0.06,
      ring: 1200,
      ringDur: 0.08,
      action: `none`,
      tail: 1.6,
      roll: 1.6,
      echo: 1,
      echoTone: 1,
    },
  }),
  t = new WeakMap(),
  n = null;
function r(e) {
  n = e;
}
var i = (e) => (n && n(e), e);
function a(e) {
  let n = t.get(e);
  if (n) return n;
  let r = e.sampleRate,
    i = Math.floor(r * 2),
    a = e.createBuffer(1, i, r),
    o = e.createBuffer(1, i, r),
    s = e.createBuffer(1, i, r),
    c = e.createBuffer(1, i, r),
    l = a.getChannelData(0),
    u = o.getChannelData(0),
    d = s.getChannelData(0),
    f = c.getChannelData(0),
    p = 2654435769,
    m = () => {
      p = (p + 1831565813) >>> 0;
      let e = p;
      return (
        (e = Math.imul(e ^ (e >>> 15), e | 1)),
        (e ^= e + Math.imul(e ^ (e >>> 7), e | 61)),
        (((e ^ (e >>> 14)) >>> 0) / 4294967296) * 2 - 1
      );
    },
    h = 0,
    g = 0,
    _ = 0,
    v = 0,
    y = 0,
    b = 0,
    x = 0,
    S = 0;
  for (let e = 0; e < i; e++) {
    let t = m();
    ((l[e] = t),
      (h = 0.99886 * h + t * 0.0555179),
      (g = 0.99332 * g + t * 0.0750759),
      (_ = 0.969 * _ + t * 0.153852),
      (v = 0.8665 * v + t * 0.3104856),
      (y = 0.55 * y + t * 0.5329522),
      (b = -0.7616 * b - t * 0.016898),
      (u[e] = (h + g + _ + v + y + b + x + t * 0.5362) * 0.11),
      (x = t * 0.115926),
      (S = (S + 0.02 * t) / 1.02),
      (d[e] = S * 3.5),
      (f[e] = Math.abs(t) > 0.985 ? t * 4 : 0));
  }
  return ((n = { white: a, pink: o, brown: s, crackle: c }), t.set(e, n), n);
}
var o = (e, t, n) => (e < t ? t : e > n ? n : e),
  s = (e, t, n) => e + (t - e) * n,
  c = (e, t, n) => {
    let r = o((n - e) / (t - e), 0, 1);
    return r * r * (3 - 2 * r);
  },
  l = 4e-4;
function u(e, t, n, r, a = 1, o = Math.random, s = !1) {
  let c = e.createBufferSource();
  ((c.buffer = t), (c.loop = s), (c.playbackRate.value = a));
  let l = s ? 0 : o() * (t.duration - 0.25);
  return (c.start(n, l), r > 0 && c.stop(n + r + 0.02), i(c));
}
function d(e, t, n, r, a) {
  let o = e.createOscillator();
  return (
    (o.type = t),
    o.frequency.setValueAtTime(n, r),
    o.start(r),
    o.stop(r + a + 0.02),
    i(o)
  );
}
function f(e, t, n, r, i, a = 0) {
  let o = e.createGain(),
    s = o.gain;
  return (
    s.setValueAtTime(l, t),
    s.linearRampToValueAtTime(Math.max(r, l), t + Math.max(n, 8e-4)),
    a > 0 && s.setValueAtTime(Math.max(r, l), t + n + a),
    s.exponentialRampToValueAtTime(l, t + n + a + i),
    o
  );
}
function p(e, t, n, r = 1, i = 0) {
  let a = e.createBiquadFilter();
  return (
    (a.type = t),
    (a.frequency.value = o(n, 10, 2e4)),
    (a.Q.value = r),
    (a.gain.value = i),
    a
  );
}
function m(...e) {
  for (let t = 0; t < e.length - 1; t++) e[t].connect(e[t + 1]);
  return e[e.length - 1];
}
function h(e, t, n, r, i, a = !0) {
  (e.setValueAtTime(Math.max(t, 1), r),
    a
      ? e.exponentialRampToValueAtTime(Math.max(n, 1), r + i)
      : e.linearRampToValueAtTime(n, r + i));
}
function g(
  e,
  t,
  n,
  r,
  {
    freq: i = 3e3,
    Q: o = 2,
    dur: s = 0.02,
    gain: c = 1,
    buf: l = `white`,
  } = {},
) {
  return (
    m(
      u(e, a(e)[l], n, s + 0.05, 1, r.rand),
      p(e, `bandpass`, i, o),
      f(e, n, 0.001, c, s),
      t,
    ),
    n + s + 0.05
  );
}
function _(
  e,
  t,
  n,
  {
    freq: r = 2e3,
    to: i = null,
    dur: a = 0.15,
    gain: o = 0.5,
    type: s = `sine`,
  } = {},
) {
  let c = d(e, s, r, n, a);
  return (
    i && h(c.frequency, r, i, n, a),
    m(c, f(e, n, 0.002, o, a), t),
    n + a + 0.02
  );
}
function v(e, t = 1) {
  let n = e / t;
  return {
    close: 1 - c(8, 110, n),
    mid: 0.25 + 0.75 * (1 - Math.abs(o((n - 70) / 110, -1, 1))),
    far: c(30, 320, n),
    lp: s(18e3, 480, c(15, 600, n)),
    delay: Math.min(e / 343, 2.5),
  };
}
var y = {
  ar: { size: 1, pitch: 1, tail: 1, crack: 1 },
  carbine: { size: 0.9, pitch: 1.08, tail: 0.9, crack: 1 },
  dmr: { size: 1.25, pitch: 0.92, tail: 1.2, crack: 1.1 },
  sniper: { size: 1.6, pitch: 0.8, tail: 1.6, crack: 1.25 },
  lmg: { size: 1.2, pitch: 0.9, tail: 1.1, crack: 0.95 },
  smg: { size: 0.7, pitch: 1.25, tail: 0.7, crack: 0.85 },
  pistol: { size: 0.65, pitch: 1.35, tail: 0.6, crack: 0.8 },
  shotgun: { size: 1.5, pitch: 0.75, tail: 1.3, crack: 0.9 },
  suppressed: { size: 0.5, pitch: 1.1, tail: 0.4, crack: 0.15 },
};
