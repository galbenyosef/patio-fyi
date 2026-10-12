// assets__greywater-grounds-DtDaJ4sV 02 — math
// Lines 293-625 of readable/assets__greywater-grounds-DtDaJ4sV.pretty.js (statement-aligned).
function P(e, t) {
  let { width: n, depth: r } = E[e],
    i = m(`ground-detail:${e}:${t}`),
    a = i.int(1, 2147483647),
    o = new Uint8ClampedArray(D * D * 4),
    s = new Uint8ClampedArray(D * D * 4);
  for (let e = 0; e < s.length; e += 4)
    ((s[e] = s[e + 1] = s[e + 2] = 128), (s[e + 3] = 255));
  let c = (e, t) => {
    let n = Math.imul(e, 374761393) ^ Math.imul(t, 668265263) ^ a;
    return (
      (n = Math.imul(n ^ (n >>> 13), 1274126177)),
      (((n ^ (n >>> 16)) >>> 0) / 4294967295) * 2 - 1
    );
  };
  function l(e, t, n = 0.1) {
    let r = e / n,
      i = t / n,
      a = Math.floor(r),
      o = Math.floor(i),
      s = A(r - a),
      l = A(i - o),
      u = c(a, o),
      d = c(a + 1, o),
      f = c(a, o + 1),
      p = c(a + 1, o + 1);
    return (u + (d - u) * s) * (1 - l) + (f + (p - f) * s) * l;
  }
  let u = Math.max(n, r) / D;
  function d(e, t, n, r = 128, i = 1) {
    if (e < 3 || t < 3 || e >= 509 || t >= 509) return;
    let a = Math.min(e - 3, t - 3, 508 - e, 508 - t),
      c = k(i) * A(a / 2);
    if (c <= 0) return;
    let l = (t * D + e) * 4,
      u = o[l + 3] / 255,
      d = c + u * (1 - c);
    for (let e = 0; e < 3; e++)
      ((o[l + e] = (n[e] * c + o[l + e] * u * (1 - c)) / d),
        (s[l + e] = s[l + e] * (1 - c) + r * c));
    o[l + 3] = d * 255;
  }
  function f(e, t, i, a, o) {
    let s = Math.max(3, Math.floor((e / n + 0.5) * D)),
      c = Math.min(508, Math.ceil((i / n + 0.5) * D)),
      l = Math.max(3, Math.floor((t / r + 0.5) * D)),
      u = Math.min(508, Math.ceil((a / r + 0.5) * D));
    for (let e = l; e <= u; e++)
      for (let t = s; t <= c; t++)
        o(((t + 0.5) / D - 0.5) * n, ((e + 0.5) / D - 0.5) * r, (n, r, i) =>
          d(t, e, n, r, i),
        );
  }
  let p = (e) => f(-n / 2, -r / 2, n / 2, r / 2, e);
  function h(e, t, n, r, i, a = 128, o = 1, s = 0, c = 0.12) {
    if (n <= 0 || r <= 0) return;
    let l = Math.cos(s),
      u = Math.sin(s),
      d = Math.abs(n * l) + Math.abs(r * u),
      p = Math.abs(n * u) + Math.abs(r * l);
    f(e - d, t - p, e + d, t + p, (s, d, f) => {
      let p = s - e,
        m = d - t,
        h = Math.hypot((p * l + m * u) / n, (-p * u + m * l) / r);
      h < 1 && f(i, a, o * A((1 - h) / c));
    });
  }
  function g(e, t, n, r, i, a, o = 128, s = 1) {
    let c = n - e,
      l = r - t,
      d = c * c + l * l,
      p = i + u * 0.5;
    f(
      Math.min(e, n) - p,
      Math.min(t, r) - p,
      Math.max(e, n) + p,
      Math.max(t, r) + p,
      (n, r, i) => {
        let f = d ? k(((n - e) * c + (r - t) * l) / d) : 0,
          m = Math.hypot(n - e - c * f, r - t - l * f);
        m < p && i(a, o, s * k((p - m) / u));
      },
    );
  }
  function _() {
    for (let e = 0; e < o.length; e += 4)
      o[e + 3] === 0 &&
        ((o[e] = o[e + 1] = o[e + 2] = 0), (s[e] = s[e + 1] = s[e + 2] = 128));
    return { color: o, height: s, size: D };
  }
  return {
    w: n,
    d: r,
    aa: u,
    rng: i,
    noise: l,
    hash: c,
    field: p,
    region: f,
    ellipse: h,
    line: g,
    finish: _,
  };
}
function F(e, t, n, r, i, a = 0.22) {
  let o = t / r,
    s = n / i,
    c = Math.atan2(s, o);
  return A(
    (0.91 +
      0.07 * Math.sin(c * 3 + 0.7) +
      0.045 * Math.sin(c * 7 - 0.8) +
      e.noise(t, n, 0.15) * 0.065 -
      Math.hypot(o, s)) /
      a,
  );
}
function I(e, t, n = 0.9) {
  return A((e.d * 0.48 - Math.abs(t)) / (e.d * (1 - n)));
}
function L(e, t, n, r = !1) {
  let i = t / e.w,
    a =
      Math.sin(i * 8.3 + (n < 0 ? 0.6 : 2.1)) * 0.018 +
      e.noise(t, Math.sign(n) * e.d * 0.38, e.w * 0.23) * (r ? 0.045 : 0.025);
  return A((e.d * (0.385 + a) - Math.abs(n)) / (e.d * (r ? 0.17 : 0.105)));
}
function se(e) {
  e.field((t, n, r) => {
    let i = F(e, t, n, e.w * 0.42, e.d * 0.42, 0.17),
      a = e.noise(t, n, 0.007);
    i &&
      r(
        M([55, 58, 57], a * 4 + e.noise(t, n, 0.24) * 2),
        128 + a * 0.65,
        i * 0.87,
      );
  });
}
function R(e, t = !1) {
  let { rng: n, line: r, ellipse: i } = e,
    a = j(t ? 5000257 : 2171679),
    o = j(t ? 7566182 : 6184017),
    s = n.range(-e.w * 0.13, e.w * 0.13),
    c = -e.d * 0.43,
    l = [[s, c]],
    u = t ? 17 : 37;
  for (let d = 0; d < u; d++) {
    let d = k(
        s + n.range(-0.065, 0.065) * (t ? 0.45 : 1),
        -e.w * 0.32,
        e.w * 0.32,
      ),
      f = c + (e.d * 0.86) / u,
      p = n.range(t ? 7e-4 : 0.0016, t ? 0.002 : 0.005);
    (n.next() > 0.08 &&
      (r(s, c, d, f, p * 2, o, 124, 0.26),
      r(s, c, d, f, p, a, 92, n.range(0.62, 0.97)),
      !t &&
        n.next() < 0.4 &&
        i(d, f, p * 2, n.range(0.003, 0.012), o, 116, 0.6)),
      l.push([d, f]),
      (s = d),
      (c = f));
  }
  for (let i = 0; i < (t ? 3 : 7); i++) {
    [s, c] = l[n.int(3, u - 3)];
    let i = n.next() < 0.5 ? -1 : 1,
      o = n.int(3, 6);
    for (let l = 0; l < o; l++) {
      let u = s + i * n.range(0.018, 0.047) * (t ? 0.55 : 1),
        d = c + n.range(0.012, 0.058);
      if (Math.abs(u) > e.w * 0.44 || Math.abs(d) > e.d * 0.44) break;
      (r(
        s,
        c,
        u,
        d,
        (t ? 0.0013 : 0.0028) * (1 - l / o),
        a,
        109,
        0.8 - (l / o) * 0.4,
      ),
        (s = u),
        (c = d));
    }
  }
}
function z(e, t = !1) {
  e.field((n, r, i) => {
    let a = F(
        e,
        n + e.noise(n, r, 0.2) * e.w * 0.025,
        r,
        e.w * 0.42,
        e.d * 0.4,
        0.62,
      ),
      o = e.noise(n, r, e.w * 0.18);
    if (t) {
      let t = e.noise(n, r, 0.008);
      i(M([77, 65, 51], t * 3 + o * 4), 128 + t, a * (0.27 + o * 0.09));
    } else i(M([31, 33, 31], o * 2), 128, a * (0.23 + o * 0.07));
  });
}
function B(e, t) {
  e.field((n, r, i) => {
    let a = t === `damp-sand`,
      o = e.noise(n, r, 0.035),
      s = e.noise(n, r, 0.34),
      c = e.w * (0.025 * Math.sin(r * 1.9) + 0.022 * e.noise(0, r, 0.47)),
      l =
        e.w *
        (a
          ? 0.27 +
            0.055 * Math.sin(r * 1.45 + 0.6) +
            0.035 * e.noise(0, r, 0.57)
          : 0.34 + 0.025 * e.noise(0, r, 0.4)),
      u = (n - c) / l,
      d =
        A((l - Math.abs(n - c) + e.w * s * 0.025) / (e.w * (a ? 0.19 : 0.13))) *
        L(e, n, r, a) *
        (a ? 0.77 + s * 0.19 : 1),
      f,
      p = 127,
      m = 0.5;
    if (t === `tyre-rut`) {
      let e = Math.exp(-1 * ((Math.abs(u) - 0.72) / 0.11) ** 2);
      ((f = M([92, 89, 76], o * 13 + s * 6 + e * 12)),
        (p = 116 + o * 13),
        (m = 0.65));
    } else if (t === `mower-band`) {
      let t = e.noise(n, r * 0.22, 0.012);
      ((f = M([62, 86, 32], t * 13 + s * 7)), (p = 126 + t * 3), (m = 0.22));
    } else if (t === `dirt-wear`) {
      let e = Math.exp(-1 * ((Math.abs(u) - 0.74) / 0.075) ** 2);
      ((f = M([106, 90, 74], o * 8 + s * 7 - e * 16)),
        (p = 120 + o * 8 - e * 10),
        (m = 0.65));
    } else if (t === `damp-sand`)
      ((f = M([139, 128, 103], o * 3 + s * 8)), (p = 128), (m = 0.43));
    else if (t === `slush-rut`) {
      let e = Math.exp(-1 * ((Math.abs(u) - 0.8) / 0.08) ** 2);
      ((f = M([137, 153, 160], o * 14 + s * 13 + e * 35)),
        (p = 119 + o * 11 + e * 10),
        (m = 0.72));
    } else {
      let t = e.noise(n, r, 0.008);
      ((f = M([115, 120, 119], o * 4 + t * 8 + s * 5)),
        (p = 125 + t * 3),
        (m = 0.24));
    }
    i(f, p, d * m);
  });
}
function ce(e) {
  e.field((t, n, r) => {
    let i = e.noise(t, n, 0.05),
      a = e.noise(t, n, 0.009),
      o = F(e, t, n, 0.75, 0.6, 0.35) * A((i + 0.65) * 1.7);
    r(
      M(N([44, 51, 24], [91, 99, 42], k(i + 0.5)), a * 12),
      128 + a * 10,
      o * 0.85,
    );
  });
  for (let t = 0; t < 115; t++) {
    let n = e.rng.range(-0.68, 0.68),
      r = e.rng.range(-0.51, 0.51),
      i = F(e, n, r, 0.7, 0.57);
    if (e.rng.next() > i) continue;
    let a = e.rng.range(0.018, 0.075),
      o = e.rng.range(0, O);
    (e.line(
      n,
      r,
      n + Math.sin(o) * a,
      r + Math.cos(o) * a,
      0.0014,
      j(e.rng.pick([7623467, 9728325, 6705199])),
      132,
      0.67,
    ),
      t % 7 == 0 && e.ellipse(n, r, 0.012, 0.026, j(7557419), 134, 0.7, o));
  }
}
function le(e) {
  e.field((t, n, r) => {
    let i = 0.045 * Math.sin(n * 6) + 0.02 * Math.sin(n * 15),
      a = 0.034 * A((0.88 - n) / 1.6) + 0.006,
      o = (t - i) / (a * (1 + e.noise(t, n, 0.07) * 0.2)),
      s = 0.32 + 0.55 * A(e.noise(0, n, 0.16) + 0.65),
      c = A((1 - Math.abs(o)) / 0.22) * L(e, t, n, !0),
      l = e.noise(t, n * 0.2, 0.006),
      u = Math.abs(o);
    r(M([66, 50, 30], l * 12 - u * 10), 126 + l * 4, c * s);
  });
  for (let t of [-1, 1]) {
    let n = t * 0.22;
    e.line(
      0.045 * Math.sin(n * 6),
      n,
      t * 0.105,
      n + 0.2,
      0.003,
      j(4273441),
      126,
      0.4,
    );
  }
}
function ue(e) {
  e.field((t, n, r) => {
    let i = t / 0.55,
      a = n / 0.37,
      o = Math.atan2(a, i),
      s =
        Math.hypot(i, a) /
        (1 +
          0.075 * Math.sin(o * 3) +
          0.07 * Math.cos(o * 7) +
          e.noise(t, n, 0.1) * 0.09),
      c = e.noise(t, n, 0.018),
      l = e.noise(t, n, 0.16),
      u = Math.exp(-1 * ((s - 0.7) / 0.18) ** 2) * A(l + 0.35),
      d = A((1 - s) / 0.48);
    r(
      M(N([109, 94, 79], [93, 81, 67], u), c * 6),
      125 + c * 2 - u * 2,
      d * (0.22 + u * 0.08),
    );
  });
}
