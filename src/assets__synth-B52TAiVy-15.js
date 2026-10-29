// assets__synth-B52TAiVy 15 — gain
// Lines 3791-4062 of readable/assets__synth-B52TAiVy.pretty.js (statement-aligned).
function At(e, t, n, r) {
  let i = l(e),
    a = r.rand ?? Math.random,
    o = Z(e, t, n, r, 700),
    s = o.t,
    c = 0.42,
    u = 0.35 + 0.65 * o.L.close;
  {
    let t = K(e, s, 4e-4, c * 1.6 * u, 0.04);
    (v(W(e, i.white, s, 0.05, a), _(e, `highpass`, 900, 0.5), U(e, 5), t),
      G(t, o.dry, o.verb, 0.6));
  }
  J(e, o.dry, o.verb, s, 0.26, c * 1.3, 0.7);
  {
    let t = h(e, `sine`, 58, s, 2);
    t.frequency.exponentialRampToValueAtTime(17, s + 1.6);
    let n = K(e, s, 0.004, c * 1.5, 1.8);
    (v(t, U(e, 3), n), G(n, o.dry, o.verb, 0.3));
  }
  {
    let t = _(e, `lowpass`, 9e3, 0.6);
    (t.frequency.setValueAtTime(9e3, s),
      t.frequency.exponentialRampToValueAtTime(140, s + 2.2));
    let n = K(e, s, 0.002, c * 1.2, 2.6);
    (v(W(e, i.white, s, 3, a), t, U(e, 2), n), G(n, o.dry, o.verb, 0.7));
  }
  {
    let t = K(e, s + 0.03, 0.01, c * 0.6 * u, 0.9);
    (v(W(e, i.white, s + 0.03, 1.2, a), _(e, `bandpass`, 800, 0.8), U(e, 3), t),
      G(t, o.dry, o.verb, 0.4));
  }
  {
    let t = K(e, s + 0.05, 0.15, c * 1, 6.5);
    (v(W(e, i.brown, s + 0.05, 7, a), _(e, `lowpass`, 110, 0.9), t),
      G(t, o.dry, o.verb, 0.5));
  }
  if (o.L.close > 0.15) {
    for (let t = 0; t < 160; t++) {
      let t = s + 0.45 + a() ** 1.8 * 3.8;
      Y(
        e,
        i,
        o.dry,
        o.verb,
        t,
        700 + a() * 4500,
        c * o.L.close * (0.06 + a() * 0.22 * (1 - (t - s) / 5)),
        0.01 + a() * 0.03,
        0.2,
        1.2,
        a,
      );
    }
    for (let t = 0; t < 5; t++)
      X(
        e,
        o.dry,
        o.verb,
        s + 0.6 + a() * 2,
        300 + a() * 700,
        c * 0.14 * o.L.close,
        0.9,
      );
  }
  return s + 7.5;
}
function jt(e, t, n, r) {
  let i = l(e),
    a = r.rand ?? Math.random,
    o = 0.42,
    s = Z(e, t, n, { d: 0 }),
    c = e.createStereoPanner();
  (c.pan.setValueAtTime(0.85, n),
    c.pan.linearRampToValueAtTime(-0.6, n + 7),
    c.connect(s.dry));
  let u = (e, t) => {
    (e.gain.setValueAtTime(p, n),
      e.gain.exponentialRampToValueAtTime(t * 0.12, n + 2.5),
      e.gain.exponentialRampToValueAtTime(t, n + 7 - 0.15),
      e.gain.linearRampToValueAtTime(p, n + 7));
  };
  {
    let t = _(e, `lowpass`, 90, 0.9);
    (t.frequency.setValueAtTime(90, n),
      t.frequency.exponentialRampToValueAtTime(380, n + 7));
    let r = e.createGain();
    q(r.gain, n, 7, 9, 0.45, a);
    let l = e.createGain();
    (u(l, o * 1.3), v(W(e, i.brown, n, 7, a), t, r, l), G(l, c, s.verb, 0.35));
  }
  {
    let t = _(e, `bandpass`, 260, 1.6);
    (t.frequency.setValueAtTime(260, n),
      t.frequency.exponentialRampToValueAtTime(900, n + 7));
    let r = e.createGain();
    q(r.gain, n, 7, 38, 0.85, a);
    let l = e.createGain();
    (u(l, o * 0.55),
      v(W(e, i.white, n, 7, a), t, U(e, 2), r, l),
      G(l, c, s.verb, 0.3));
  }
  {
    let t = h(e, `sawtooth`, 31, n, 7.1);
    t.frequency.exponentialRampToValueAtTime(52, n + 7);
    let r = e.createGain();
    q(r.gain, n, 7, 6, 0.3, a);
    let i = e.createGain();
    (u(i, o * 0.6),
      v(t, _(e, `lowpass`, 90, 0.7), U(e, 2), r, i),
      G(i, c, s.verb, 0.15));
  }
  {
    let t = e.createGain();
    (t.gain.setValueAtTime(p, n + 3),
      t.gain.exponentialRampToValueAtTime(o * 0.09, n + 7 - 0.2),
      t.gain.linearRampToValueAtTime(p, n + 7),
      v(W(e, i.white, n + 3, 4, a), _(e, `highpass`, 3500, 0.5), t),
      G(t, c, s.verb, 0.2));
  }
  for (let t = 0; t < 70; t++) {
    let t = a() ** 0.45;
    Y(
      e,
      i,
      c,
      s.verb,
      n + 1.5 + t * 5.4,
      900 + a() * 2500,
      o * (0.04 + 0.3 * t * t * a()),
      0.006 + a() * 0.012,
      0.35,
      2,
      a,
    );
  }
  return n + 7 + 0.3;
}
function Mt(e, t, n, r) {
  let i = l(e),
    a = r.rand ?? Math.random,
    o = 0.42,
    s = Z(e, t, n, r),
    c = (e, t) => {
      (e.gain.setValueAtTime(p, n),
        e.gain.exponentialRampToValueAtTime(t, n + 0.8),
        e.gain.setValueAtTime(t, n + 6 - 0.6),
        e.gain.exponentialRampToValueAtTime(p, n + 6));
    };
  {
    let t = e.createGain();
    q(t.gain, n, 6, 3, 0.55, a);
    let r = e.createGain();
    (c(r, o * 0.9),
      v(W(e, i.brown, n, 6, a), _(e, `lowpass`, 260, 0.8), t, r),
      G(r, s.dry, s.verb, 0.15));
  }
  {
    let t = e.createGain();
    q(t.gain, n, 6, 14, 0.9, a);
    let r = e.createGain();
    (c(r, o * 0.05),
      v(W(e, i.white, n, 6, a), _(e, `bandpass`, 900, 0.9), t, r),
      G(r, s.dry, s.verb, 0.1));
  }
  let u = n + 0.2;
  for (; u < n + 6 - 0.2;) {
    let t = 1 + Math.floor(a() * a() * 7);
    for (let n = 0; n < t; n++) {
      let t = u + n * (0.008 + a() * 0.05),
        r = K(e, t, 3e-4, o * (0.12 + a() * 0.5), 0.002 + a() * 0.004);
      (v(
        W(e, i.white, t, 0.006, a),
        _(e, `highpass`, 1600 + a() * 4500, 0.7),
        r,
      ),
        G(r, s.dry, s.verb, 0.08));
    }
    u += 0.03 + a() * a() * 0.35;
  }
  for (let t = 0; t < 6 * 1.3; t++) {
    let t = n + 0.3 + a() * 5.4,
      r = 500 + a() * 900;
    (Y(e, i, s.dry, s.verb, t, r, o * (0.5 + a() * 0.5), 0.035, 0.25, 5, a),
      Y(e, i, s.dry, s.verb, t + 0.004, r * 3.1, o * 0.3, 0.012, 0.2, 2, a));
  }
  return n + 6 + 0.2;
}
function Nt(e, t, n, r) {
  let i = l(e),
    a = r.rand ?? Math.random,
    o = 0.42,
    s = Z(e, t, n, { d: 0 }),
    c = (e, t) => {
      (e.gain.setValueAtTime(p, n),
        e.gain.exponentialRampToValueAtTime(t, n + 1.6),
        e.gain.setValueAtTime(t, n + 8 - 1.6),
        e.gain.exponentialRampToValueAtTime(p, n + 8));
    };
  for (let [t, r] of [
    [31, 1],
    [32.3, 0.9],
    [46.5, 0.45],
  ]) {
    let i = h(e, `sawtooth`, t, n, 8),
      a = e.createGain();
    (c(a, o * 0.5 * r),
      v(i, _(e, `lowpass`, 150, 0.8), U(e, 1.6), a),
      G(a, s.dry, s.verb, 0.25));
  }
  {
    let t = e.createGain();
    q(t.gain, n, 8, 4, 0.4, a);
    let r = e.createGain();
    (c(r, o * 0.5),
      v(W(e, i.brown, n, 8, a), _(e, `bandpass`, 90, 1.4), t, r),
      G(r, s.dry, s.verb, 0.3));
  }
  {
    let t = h(e, `sine`, 1180, n, 8),
      r = h(e, `sine`, 0.4 + a() * 0.3, n, 8),
      i = e.createGain();
    ((i.gain.value = 18), r.connect(i), i.connect(t.frequency));
    let l = e.createGain();
    (c(l, o * 0.025), v(t, l), G(l, s.dry, s.verb, 0.5));
  }
  return n + 8 + 0.1;
}
function Pt(e, t, n, r) {
  let i = l(e),
    a = r.rand ?? Math.random,
    o = Z(e, t, n, { d: 0 }),
    s = o.t,
    c = 0.42;
  J(e, o.dry, o.verb, s, 0.45, c * 1.2, 0.7);
  {
    let t = h(e, `sine`, 44, s, 3.5);
    t.frequency.exponentialRampToValueAtTime(16, s + 3);
    let n = K(e, s, 0.02, c * 1.6, 3.2);
    (v(t, U(e, 2.5), n), G(n, o.dry, o.verb, 0.35));
  }
  {
    let t = _(e, `lowpass`, 2400, 0.6);
    (t.frequency.setValueAtTime(2400, s),
      t.frequency.exponentialRampToValueAtTime(120, s + 3));
    let n = K(e, s, 0.05, c * 0.9, 3.4);
    (v(W(e, i.pink, s, 3.6, a), t, n), G(n, o.dry, o.verb, 0.6));
  }
  {
    let t = K(e, s + 0.1, 0.3, c * 0.9, 6);
    (v(W(e, i.brown, s + 0.1, 6.5, a), _(e, `lowpass`, 90, 0.9), t),
      G(t, o.dry, o.verb, 0.5));
  }
  return s + 7;
}
function Ft(e, t, n, r) {
  let i = _(e, `lowpass`, 3200, 0.6);
  i.connect(t);
  let a = h(e, `sawtooth`, 620, n, 14);
  for (let e = 0; e < 14 / 1.6; e++)
    (a.frequency.setValueAtTime(620, n + e * 1.6),
      a.frequency.linearRampToValueAtTime(880, n + e * 1.6 + 0.8),
      a.frequency.linearRampToValueAtTime(620, n + e * 1.6 + 1.6));
  let o = e.createGain();
  return (
    o.gain.setValueAtTime(p, n),
    o.gain.linearRampToValueAtTime(0.18, n + 0.3),
    o.gain.setValueAtTime(0.18, n + 14 - 0.5),
    o.gain.linearRampToValueAtTime(p, n + 14),
    v(a, _(e, `bandpass`, 900, 0.7), o, i),
    n + 14
  );
}
