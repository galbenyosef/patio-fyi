// assets__sim-Baa4KD2R 03 — math
// Lines 957-1306 of readable/assets__sim-Baa4KD2R.pretty.js (statement-aligned).
function v(e, t, n, r, i) {
  let a = Math.round(n / i) + 3,
    o = -r - i,
    s = new Float32Array(a * a).fill(t),
    c = a - 1;
  for (let n = 0; n < e.length - 1; n++) {
    let r = e[n][0],
      l = e[n][1],
      d = e[n + 1][0],
      f = e[n + 1][1],
      p = d - r,
      m = f - l,
      h = p * p + m * m || 1e-9,
      g = u(Math.floor((Math.min(r, d) - t - o) / i), 0, c),
      _ = u(Math.ceil((Math.max(r, d) + t - o) / i), 0, c),
      v = u(Math.floor((Math.min(l, f) - t - o) / i), 0, c),
      y = u(Math.ceil((Math.max(l, f) + t - o) / i), 0, c);
    for (let e = v; e <= y; e++) {
      let t = o + e * i;
      for (let n = g; n <= _; n++) {
        let c = o + n * i,
          u = ((c - r) * p + (t - l) * m) / h;
        u = u < 0 ? 0 : u > 1 ? 1 : u;
        let d = c - (r + p * u),
          f = t - (l + m * u),
          g = d * d + f * f,
          _ = e * a + n;
        g < s[_] * s[_] && (s[_] = Math.sqrt(g));
      }
    }
  }
  let l = a - 1.000001;
  return (e, t) => {
    let n = (e - o) / i,
      r = (t - o) / i;
    (n > 0 ? n > l && (n = l) : (n = 0), r > 0 ? r > l && (r = l) : (r = 0));
    let c = n | 0,
      u = r | 0,
      d = n - c,
      f = r - u,
      p = u * a + c,
      m = s[p] + (s[p + 1] - s[p]) * d;
    return m + (s[p + a] + (s[p + a + 1] - s[p + a]) * d - m) * f;
  };
}
function y(e, t, n, r) {
  let i = Math.round(e / n) + 3,
    a = -t - n,
    o = new Float32Array(i * i),
    s = new Float32Array(i * i),
    c = [0, 0];
  for (let e = 0; e < i; e++) {
    let t = a + e * n;
    for (let l = 0; l < i; l++)
      (r(a + l * n, t, c), (o[e * i + l] = c[0]), (s[e * i + l] = c[1]));
  }
  let l = i - 1.000001,
    u = (e) => (t, r) => {
      let o = (t - a) / n,
        s = (r - a) / n;
      (o > 0 ? o > l && (o = l) : (o = 0), s > 0 ? s > l && (s = l) : (s = 0));
      let c = o | 0,
        u = s | 0,
        d = o - c,
        f = s - u,
        p = u * i + c,
        m = e[p] + (e[p + 1] - e[p]) * d;
      return m + (e[p + i] + (e[p + i + 1] - e[p + i]) * d - m) * f;
    };
  return [u(o), u(s)];
}
function b(e, t, n, r, i = null) {
  let a = Math.round(e / n) + 3,
    o = -t - n,
    s = new Float32Array(a * a),
    c = i ? Math.max(0, Math.floor((i[0] - o) / n)) : 0,
    l = i ? Math.min(a - 1, Math.ceil((i[2] - o) / n)) : a - 1,
    u = i ? Math.max(0, Math.floor((i[1] - o) / n)) : 0,
    d = i ? Math.min(a - 1, Math.ceil((i[3] - o) / n)) : a - 1;
  for (let e = u; e <= d; e++) {
    let t = o + e * n;
    for (let i = c; i <= l; i++) s[e * a + i] = r(o + i * n, t);
  }
  let f = a - 1.000001;
  return (e, t) => {
    let r = (e - o) / n,
      i = (t - o) / n;
    (r > 0 ? r > f && (r = f) : (r = 0), i > 0 ? i > f && (i = f) : (i = 0));
    let c = r | 0,
      l = i | 0,
      u = r - c,
      d = i - l,
      p = l * a + c,
      m = s[p] + (s[p + 1] - s[p]) * u;
    return m + (s[p + a] + (s[p + a + 1] - s[p + a]) * u - m) * d;
  };
}
function x(e, t, n, r, i, a) {
  let o = (i + r) / n,
    s = (a + r) / n,
    c = t - 1.000001;
  (o > 0 ? o > c && (o = c) : (o = 0), s > 0 ? s > c && (s = c) : (s = 0));
  let l = o | 0,
    u = s | 0,
    d = o - l,
    f = s - u,
    p = u * t + l,
    m = e[p] + (e[p + 1] - e[p]) * d;
  return m + (e[p + t] + (e[p + t + 1] - e[p + t]) * d - m) * f;
}
function S(e, t, n) {
  let r = new Float32Array(t * t),
    i = 2 * n + 1;
  for (let a = 0; a < t; a++) {
    let o = a * t,
      s = 0;
    for (let r = -n; r <= n; r++) s += e[o + u(r, 0, t - 1)];
    for (let a = 0; a < t; a++)
      ((r[o + a] = s / i),
        (s += e[o + u(a + n + 1, 0, t - 1)] - e[o + u(a - n, 0, t - 1)]));
  }
  for (let a = 0; a < t; a++) {
    let o = 0;
    for (let e = -n; e <= n; e++) o += r[u(e, 0, t - 1) * t + a];
    for (let s = 0; s < t; s++)
      ((e[s * t + a] = o / i),
        (o +=
          r[u(s + n + 1, 0, t - 1) * t + a] - r[u(s - n, 0, t - 1) * t + a]));
  }
}
function C(e, t, n, r, i, a) {
  let o = new Float32Array(n * n).fill(1 / 0),
    s = new Float32Array(n * n),
    c = a ? new Float32Array(n * n) : null;
  for (let l = 0; l < e.length - 1; l++) {
    let d = e[l][0],
      f = e[l][1],
      p = e[l + 1][0],
      m = e[l + 1][1],
      h = p - d,
      g = m - f,
      _ = h * h + g * g || 1e-9,
      v = u(Math.floor((Math.min(d, p) - t + i) / r), 0, n - 1),
      y = u(Math.ceil((Math.max(d, p) + t + i) / r), 0, n - 1),
      b = u(Math.floor((Math.min(f, m) - t + i) / r), 0, n - 1),
      x = u(Math.ceil((Math.max(f, m) + t + i) / r), 0, n - 1);
    for (let e = b; e <= x; e++) {
      let u = -i + e * r;
      for (let p = v; p <= y; p++) {
        let m = -i + p * r,
          v = ((m - d) * h + (u - f) * g) / _;
        v = v < 0 ? 0 : v > 1 ? 1 : v;
        let y = m - (d + h * v),
          b = u - (f + g * v),
          x = Math.sqrt(y * y + b * b);
        if (x > t) continue;
        let S = e * n + p;
        x < o[S] &&
          ((o[S] = x),
          (s[S] = l + v),
          c && (c[S] = a[l] + (a[l + 1] - a[l]) * v));
      }
    }
  }
  return { dist: o, par: s, val: c };
}
function ee(e, t) {
  let n = e.map((e) => [e[0], e[1]]);
  if (n.length === 2) {
    let e = [],
      r = Math.hypot(n[1][0] - n[0][0], n[1][1] - n[0][1]),
      i = Math.max(1, Math.ceil(r / t));
    for (let t = 0; t <= i; t++)
      e.push([d(n[0][0], n[1][0], t / i), d(n[0][1], n[1][1], t / i)]);
    return e;
  }
  let r = [];
  for (let e = 0; e < n.length - 1; e++) {
    let i = n[Math.max(0, e - 1)],
      a = n[e],
      o = n[e + 1],
      s = n[Math.min(n.length - 1, e + 2)],
      c = Math.hypot(o[0] - a[0], o[1] - a[1]),
      l = Math.max(1, Math.ceil(c / t));
    for (let e = 0; e < l; e++) {
      let t = e / l,
        n = t * t,
        c = n * t,
        u =
          0.5 *
          (2 * a[0] +
            (-i[0] + o[0]) * t +
            (2 * i[0] - 5 * a[0] + 4 * o[0] - s[0]) * n +
            (-i[0] + 3 * a[0] - 3 * o[0] + s[0]) * c),
        d =
          0.5 *
          (2 * a[1] +
            (-i[1] + o[1]) * t +
            (2 * i[1] - 5 * a[1] + 4 * o[1] - s[1]) * n +
            (-i[1] + 3 * a[1] - 3 * o[1] + s[1]) * c);
      r.push([u, d]);
    }
  }
  return (r.push([n[n.length - 1][0], n[n.length - 1][1]]), r);
}
function te(e, t, n) {
  let r = e.length,
    i = new Float32Array(r);
  for (let a = 0; a < n; a++) {
    for (let n = 0; n < r; n++) {
      let a = 0,
        o = 0;
      for (let i = -t; i <= t; i++) {
        let t = n + i;
        t < 0 || t >= r || ((a += e[t]), o++);
      }
      i[n] = a / o;
    }
    e.set(i);
  }
}
function ne(e, t, n = null) {
  if (n) {
    for (let r = 0; r < 2; r++) {
      for (let r = 1; r < e.length; r++)
        n[r] || (e[r] = u(e[r], e[r - 1] - t, e[r - 1] + t));
      for (let r = e.length - 2; r >= 0; r--)
        n[r] || (e[r] = u(e[r], e[r + 1] - t, e[r + 1] + t));
    }
    return;
  }
  for (let n = 1; n < e.length; n++)
    e[n] > e[n - 1] + t
      ? (e[n] = e[n - 1] + t)
      : e[n] < e[n - 1] - t && (e[n] = e[n - 1] - t);
  for (let n = e.length - 2; n >= 0; n--)
    e[n] > e[n + 1] + t
      ? (e[n] = e[n + 1] + t)
      : e[n] < e[n + 1] - t && (e[n] = e[n + 1] - t);
}
function w(e, t, n, r, i) {
  let a = new Float32Array(t * t);
  for (let o = 0; o < n; o++) {
    a.fill(0);
    for (let n = 1; n < t - 1; n++)
      for (let o = 1; o < t - 1; o++) {
        let s = n * t + o,
          c = e[s],
          l = -1,
          u = c,
          d = e[s - 1],
          f = e[s + 1],
          p = e[s - t],
          m = e[s + t];
        (d < u && ((u = d), (l = s - 1)),
          f < u && ((u = f), (l = s + 1)),
          p < u && ((u = p), (l = s - t)),
          m < u && ((u = m), (l = s + t)));
        let h = c - u;
        if (l >= 0 && h > r) {
          let e = i * (h - r);
          ((a[s] -= e), (a[l] += e));
        }
      }
    for (let t = 0; t < a.length; t++) e[t] += a[t];
  }
}
function re(e, t, n, r, i) {
  let a = 0.06,
    o = [],
    s = [],
    c = 0;
  for (let e = -2; e <= 2; e++)
    for (let n = -2; n <= 2; n++) {
      let r = Math.sqrt(n * n + e * e);
      if (r > 2) continue;
      let i = 1 - r / 2;
      (o.push(e * t + n), s.push(i), (c += i));
    }
  for (let e = 0; e < s.length; e++) s[e] /= c;
  for (let c = 0; c < r; c++) {
    let r = n.range(1, t - 2),
      c = n.range(1, t - 2),
      l = 0,
      d = 0,
      f = 1,
      p = 1,
      m = 0;
    for (let h = 0; h < 34; h++) {
      let h = r | 0,
        g = c | 0;
      if (h < 3 || g < 3 || h >= t - 2 - 2 || g >= t - 2 - 2) break;
      let _ = r - h,
        v = c - g,
        y = g * t + h;
      i && (i[y] += p);
      let b = e[y],
        x = e[y + 1],
        S = e[y + t],
        C = e[y + t + 1],
        ee = (x - b) * (1 - v) + (C - S) * v,
        te = (S - b) * (1 - _) + (C - x) * _,
        ne =
          b * (1 - _) * (1 - v) + x * _ * (1 - v) + S * (1 - _) * v + C * _ * v;
      ((l = l * a - ee * 0.94), (d = d * a - te * 0.94));
      let w = Math.sqrt(l * l + d * d);
      if (w < 1e-6) {
        let e = n.range(0, 6.2831853);
        ((l = Math.cos(e)), (d = Math.sin(e)), (w = 1));
      }
      if (
        ((l /= w),
        (d /= w),
        (r += l),
        (c += d),
        r < 3 || c < 3 || r >= t - 2 - 2 || c >= t - 2 - 2)
      )
        break;
      let re = r | 0,
        T = c | 0,
        E = r - re,
        D = c - T,
        O = T * t + re,
        k =
          e[O] * (1 - E) * (1 - D) +
          e[O + 1] * E * (1 - D) +
          e[O + t] * (1 - E) * D +
          e[O + t + 1] * E * D -
          ne,
        ie = Math.max(-k, 0.01) * f * p * 3.2;
      if (m > ie || k > 0) {
        let n = k > 0 ? Math.min(k, m) : (m - ie) * 0.25;
        ((n *= 0.25 + 0.75 * u((p - 0.42) / 0.3, 0, 1)),
          (m -= n),
          (e[y] += n * (1 - _) * (1 - v)),
          (e[y + 1] += n * _ * (1 - v)),
          (e[y + t] += n * (1 - _) * v),
          (e[y + t + 1] += n * _ * v));
      } else {
        let t = Math.min((ie - m) * 0.28, -k);
        for (let n = 0; n < o.length; n++) {
          let r = y + o[n],
            i = t * s[n];
          ((e[r] -= i), (m += i));
        }
      }
      ((f = Math.sqrt(Math.max(0, f * f + k * 4))), (p *= 0.978));
    }
  }
}
