// assets__hangar-view--r_UA7k- 14 — gain
// Lines 12686-13033 of readable/assets__hangar-view--r_UA7k-.pretty.js (statement-aligned).
function bn(e, t, { fan: n = 1900, level: r = 1 }) {
  let i = e.gain(r);
  i.connect(t);
  let a = e.filt(`lowpass`, 400, 0.5),
    o = e.gain(0);
  e.chain(e.noise(`brown`), a, o, i);
  let s = e.filt(`bandpass`, 700, 0.5),
    c = e.gain(0);
  e.chain(e.noise(`pink`), s, c, i);
  let l = e.filt(`bandpass`, n, 0.5),
    u = e.gain(0);
  e.chain(e.noise(`white`), l, u, i);
  let d = e.osc(`sawtooth`, 90),
    f = e.filt(`bandpass`, 900, 2),
    p = e.gain(0);
  e.chain(d, f, p, i);
  let m = e.gain(0);
  e.chain(e.noise(`crackle`), e.filt(`bandpass`, 1500, 0.5), m, i);
  let h = e.gain(0);
  return (
    e.chain(e.noise(`brown`), e.filt(`lowpass`, 90), h, i),
    {
      set(e, t) {
        let r = Z(e.rpm ?? 0, 0, 1),
          i = Z(e.power ?? r, 0, 1),
          s = (Z(e.front ?? 0, -1, 1) + 1) / 2,
          f = 1 - s;
        (Q(a.frequency, 260 + 2300 * r, t, 0.3),
          Q(o.gain, 0.03 + 0.55 * r * r * (0.45 + 0.8 * f), t, 0.3),
          Q(c.gain, 0.22 * r ** 2.5 * (0.5 + 0.6 * f), t, 0.3),
          Q(l.frequency, n * (0.6 + 0.6 * r), t, 0.6),
          Q(u.gain, 0.05 * (0.3 + r) * (0.3 + 0.9 * s), t, 0.3),
          Q(d.frequency, 60 + 75 * r, t, 0.5),
          Q(p.gain, 0.12 * Math.max(0, r - 0.6) * s, t, 0.3),
          Q(
            m.gain,
            1.4 * Math.max(0, i - 0.72) ** 1.5 * (0.4 + 0.8 * f),
            t,
            0.2,
          ),
          Q(h.gain, 0.3 * r * r, t, 0.3));
      },
    }
  );
}
function xn(e, t, { bpf: n = 68, level: r = 1 }) {
  let i = e.gain(r);
  i.connect(t);
  let a = e.filt(`lowpass`, 400, 0.8),
    o = e.gain(0),
    s = [1, 1.006, 0.9955, 1.011].map((t) => {
      let r = e.osc(`sawtooth`, n * t);
      return (e.chain(r, e.gain(0.25), a), r);
    });
  e.chain(a, o, i);
  let c = e.gain(0),
    l = [4300, 6150].map((t) => {
      let n = e.osc(`sine`, t);
      return (e.chain(n, c), n);
    });
  c.connect(i);
  let u = e.gain(0);
  e.chain(e.noise(`pink`), e.filt(`bandpass`, 360, 0.6), u, i);
  let d = e.gain(0);
  return (
    e.chain(e.noise(`pink`), e.filt(`bandpass`, 230, 0.5), d, i),
    {
      set(e, t) {
        let r = Z(e.rpm ?? 0, 0, 1),
          i = Z(e.power ?? 0, 0, 1),
          f = Z(e.reverse ?? 0, 0, 1),
          p = 0.72 + 0.28 * r;
        (s.forEach((e, r) =>
          Q(e.frequency, n * [1, 1.006, 0.9955, 1.011][r] * p, t, 0.6),
        ),
          Q(a.frequency, 260 + 1900 * Math.max(i, f * 0.8), t, 0.25),
          Q(o.gain, 0.13 + 0.38 * i + 0.25 * f, t, 0.25),
          l.forEach((e, n) =>
            Q(e.frequency, [4300, 6150][n] * (0.9 + 0.1 * r), t, 0.6),
          ),
          Q(c.gain, 0.018 * (0.5 + 0.5 * r), t, 0.3),
          Q(u.gain, 0.04 + 0.16 * i, t, 0.25),
          Q(d.gain, 0.7 * f, t, 0.3));
      },
    }
  );
}
var Sn = {
  blackhawk: {
    name: `Black Hawk`,
    engine: vn,
    level: 1,
    ref: 45,
    trim: -11,
    idleTrim: -22,
  },
  chinook: {
    name: `Chinook`,
    engine: yn,
    level: 2.2,
    ref: 55,
    trim: -7,
    idleTrim: -7,
  },
  b52: {
    name: `B-52`,
    engine: bn,
    level: 1.5,
    ref: 90,
    trim: -14,
    idleTrim: -22,
  },
  c130: {
    name: `C-130`,
    engine: xn,
    level: 1.3,
    ref: 60,
    trim: 0,
    idleTrim: 0,
  },
};
function Cn(e, t, n) {
  let r = Sn[t],
    i = _n(e),
    a = i.gain(1),
    o = i.gain(1),
    s = i.filt(`lowpass`, 18e3, 0.5),
    c = e.createDelay(0.1),
    l = i.gain(0.55),
    u = i.gain(0),
    d = e.createStereoPanner(),
    f = r.engine(i, o, { level: r.level });
  return (
    i.chain(o, s, u),
    i.chain(s, c, l, u),
    i.chain(u, a, d, n),
    {
      kind: t,
      input: o,
      set: (e, t) => f.set(e, t),
      place(e, t) {
        (Q(u.gain, e.gain, t, 0.05),
          Q(s.frequency, e.cutoff, t, 0.05),
          Q(d.pan, e.pan, t, 0.05),
          Q(c.delayTime, e.bounce, t, 0.05),
          Q(i.pitch.offset, e.cents, t, 0.05),
          Q(l.gain, e.bounceGain ?? 0.55, t, 0.1));
      },
      setTrim(e, t) {
        Q(a.gain, 10 ** (e / 20), t, 0.03);
      },
      stop(e) {
        (Q(u.gain, 0, e, 0.25), i.stop(e + 2));
      },
    }
  );
}
function wn(
  e,
  t,
  {
    ear: n = [0, 1.7, 0],
    facing: r = [0, -1],
    ref: i = 50,
    level: a = 1,
    doppler: o = !0,
    heading: s = null,
  } = {},
) {
  let c = e[0] - n[0],
    l = e[1] - n[1],
    u = e[2] - n[2],
    d = Math.hypot(c, u),
    f = Math.max(1, Math.hypot(d, l)),
    p = (t[0] * c + t[1] * l + t[2] * u) / f,
    m = o ? 1200 * Math.log2(343 / (343 + Z(p, -280, 280))) : 0,
    h = Z(((c * -r[1] + u * r[0]) / f) * 0.9, -0.9, 0.9),
    g = Math.max(0.3, e[1]),
    _ = Z(
      (Math.hypot(d, g + n[1]) - Math.hypot(d, g - n[1])) / 343,
      3e-5,
      0.09,
    ),
    v = Math.hypot(t[0], t[2]),
    y = s ?? (v > 0.5 ? [t[0] / v, t[2] / v] : [1, 0]),
    b = (y[0] * -c + y[1] * -u) / Math.max(1, d);
  return {
    d: f,
    gain: a * Math.min(1.6, i / f),
    cutoff: Z(2e4 / (1 + f / 120), 500, 2e4),
    pan: h,
    cents: m,
    bounce: _,
    front: b,
    vr: p,
  };
}
function Tn(e, t, n, r = 1) {
  let i = Xe(e),
    a = e.createBufferSource(),
    o = e.createBiquadFilter(),
    s = e.createGain();
  ((a.buffer = i.white),
    (o.type = `bandpass`),
    (o.Q.value = 2.5),
    o.frequency.setValueAtTime(2200, n),
    o.frequency.exponentialRampToValueAtTime(900, n + 0.35),
    s.gain.setValueAtTime(0, n),
    s.gain.linearRampToValueAtTime(0.5 * r, n + 0.015),
    s.gain.exponentialRampToValueAtTime(0.001, n + 0.4),
    a.connect(o),
    o.connect(s),
    s.connect(t),
    a.start(n, Math.random()),
    a.stop(n + 0.45));
  let c = e.createOscillator(),
    l = e.createGain();
  (c.frequency.setValueAtTime(90, n),
    c.frequency.exponentialRampToValueAtTime(40, n + 0.25),
    l.gain.setValueAtTime(0.6 * r, n),
    l.gain.exponentialRampToValueAtTime(0.001, n + 0.3),
    c.connect(l),
    l.connect(t),
    c.start(n),
    c.stop(n + 0.32));
}
var En = 60,
  Dn = 3e3,
  On = (e, t, n) => (e < t ? t : e > n ? n : e),
  $ = (e, t, n) => On((n - e) / (t - e), 0, 1),
  kn = (e, t, n) => e + (t - e) * n,
  An = (e) => {
    let [t, n] = _e(e.x, e.z);
    return [t, e.y - D.surfaceY, n];
  },
  jn = (e, t) => (e.epoch == null || t < e.epoch ? null : (t - e.epoch) / En);
function Mn(e, t, n) {
  let r = Ge(e, t, n);
  if (!r) return null;
  let i = An(xe(e, t, n));
  if (r.idle) return { p: i, rpm: 0.9, power: 0.12, turb: 1, idle: 1 };
  let a = r.t,
    o = Ie;
  if (a < o.spin)
    return {
      p: i,
      rpm: $(3, o.spin, a) ** 1.3,
      turb: $(0, 6, a),
      power: 0.05,
      idle: 0,
    };
  let s =
    a < o.lift
      ? 0.75
      : a < o.loopStart
        ? 0.6
        : a < o.loopEnd
          ? 0.45
          : a < o.land
            ? 0.4
            : a < o.down
              ? 0.8
              : 0.05;
  if (a < o.down) return { p: i, rpm: 1, turb: 1, power: s, idle: 0 };
  let c = $(o.down, o.end, a);
  return { p: i, rpm: 1 - c, turb: 1 - $(0.3, 1, c), power: s, idle: 0 };
}
function Nn(e, t, n) {
  let r = Oe(e, t, n);
  return r.visible ? { p: An(r), rpm: 1, power: 0.45, idle: 0 } : null;
}
function Pn(e, t) {
  let n = jn(e, t);
  if (n == null) return null;
  let r = ((n % Ne.period) + Ne.period) % Ne.period,
    i = Ne,
    a = (e) => (r >= i[e][0] && r < i[e][0] + i[e][1] ? r - i[e][0] : null),
    o = () => An(De(e, t)),
    s;
  if (a(`taxiOut`) != null || a(`taxiIn`) != null)
    return { p: o(), rpm: 0.28, idle: 1 };
  if ((s = a(`lineUp`)) != null)
    return {
      p: o(),
      rpm: kn(0.28, 1, $(0, i.lineUp[1], s)),
      idle: 1 - $(0, i.lineUp[1], s),
    };
  if (a(`roll`) != null || a(`climb`) != null)
    return { p: o(), rpm: 1, power: 1, idle: 0 };
  if (a(`approach`) != null)
    return { p: o(), rpm: 0.55, idle: 0, gain: 9.5, touch: !1 };
  if ((s = a(`rollout`)) != null) {
    let e = $(i.rollout[1] - 8, i.rollout[1], s);
    return {
      p: o(),
      rpm: kn(0.55, 0.28, $(0, 6, s)),
      idle: e,
      gain: 9.5 * (1 - e),
      touch: !0,
    };
  }
  return null;
}
function Fn(e, t, n, r) {
  switch (e) {
    case `taxiOut`:
    case `turnOff`:
    case `taxiBack`:
      return { p: r, rpm: 0, power: 0.15, idle: 1 };
    case `reverse`:
      return { p: r, rpm: 0, power: 0.1, idle: 1 };
    case `lineUp`: {
      let e = $(0, n, t);
      return { p: r, rpm: e, power: kn(0.15, 1, e), idle: 1 - e };
    }
    case `takeoff`:
    case `climb`:
      return { p: r, rpm: 1, power: 1, idle: 0 };
    case `approach`:
      return { p: r, rpm: 1, power: 0.4, idle: 0, touch: !1 };
    case `touchdown`:
      return {
        p: r,
        rpm: 1,
        power: 0.1,
        reverse: $(0, 1.5, t),
        idle: 0,
        touch: !0,
      };
    case `rollout`:
      return {
        p: r,
        rpm: 1 - $(10, n, t),
        power: 0.1,
        reverse: 1 - $(6, 9, t),
        idle: $(10, n, t),
        touch: !0,
      };
    default:
      return null;
  }
}
function In(e, t) {
  let n = se(t, e.epoch ?? 0);
  if (e.epoch == null || !n.visible) return null;
  let r = (((((t - e.epoch) / En) % le) + le) % le) - (E[n.phase] ?? 0);
  return Fn(n.phase, r, de[n.phase] ?? 1, An(n));
}
