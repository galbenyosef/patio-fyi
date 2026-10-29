// assets__map-collider-0Gc3D4Vs 02 — math
// Lines 313-662 of readable/assets__map-collider-0Gc3D4Vs.pretty.js (statement-aligned).
function i(e, n, i = 0, a = 1, o = 0) {
  let s = t[e];
  if (!s) throw Error(`Missing baked collision: ` + e);
  let c = Math.cos(i),
    l = Math.sin(i),
    u = Math.cos(o),
    d = Math.sin(o),
    f = ([e, t, n]) => [
      c * e + l * (d * t + u * n),
      u * t - d * n,
      -l * e + c * (d * t + u * n),
    ],
    p = ([e, t, n]) => {
      let r = l * e + c * n;
      return [c * e - l * n, u * t + d * r, -d * t + u * r];
    },
    m = s.nodes[0],
    h = [1 / 0, 1 / 0, 1 / 0, -1 / 0, -1 / 0, -1 / 0];
  for (let e = 0; e < 8; e++) {
    let t = f([
      m[e & 1 ? 3 : 0] * a,
      m[e & 2 ? 4 : 1] * a,
      m[e & 4 ? 5 : 2] * a,
    ]);
    for (let e = 0; e < 3; e++)
      ((h[e] = Math.min(h[e], n[e] + t[e] - 1e-6)),
        (h[e + 3] = Math.max(h[e + 3], n[e] + t[e] + 1e-6)));
  }
  return {
    aabb: h,
    raycast(e, t, i) {
      let o = p(e.map((e, t) => (e - n[t]) / a)),
        c = p(t),
        l = r(s, o, c, i / a);
      return l
        ? ((l.dist *= a),
          (l.point = e.map((e, n) => e + t[n] * l.dist)),
          (l.normal = f(l.normal)),
          l)
        : null;
    },
  };
}
var a = 6;
function o(e) {
  if (e.length <= 54) return { tris: e };
  let t = new Uint32Array(e.buffer, e.byteOffset, e.length),
    n = e.length / 3,
    r = 1;
  for (; r < Math.ceil(n / 0.7);) r *= 2;
  let i = new Uint32Array(r),
    a = new Uint32Array(n),
    o = r - 1,
    s = 0;
  for (let r = 0, c = 0; r < n; r++, c += 3) {
    let n = t[c],
      l = t[c + 1],
      u = t[c + 2],
      d = Math.imul(n ^ 2654435769, 2246822507);
    ((d = Math.imul(d ^ l, 3266489909)), (d = Math.imul(d ^ u, 2246822507)));
    let f = (d ^ (d >>> 16)) & o;
    for (;;) {
      let c = i[f];
      if (!c) {
        if (
          ((i[f] = r + 1), (a[r] = s++), s * 12 + a.byteLength >= e.byteLength)
        )
          return { tris: e };
        break;
      }
      let d = c - 1,
        p = d * 3;
      if (t[p] === n && t[p + 1] === l && t[p + 2] === u) {
        a[r] = a[d];
        break;
      }
      f = (f + 1) & o;
    }
  }
  let c = new Float32Array(s * 3),
    l = new Uint32Array(c.buffer);
  for (let e = 0, r = 0; e < n && r < s; e++)
    if (a[e] === r) {
      let n = e * 3,
        i = r++ * 3;
      ((l[i] = t[n]), (l[i + 1] = t[n + 1]), (l[i + 2] = t[n + 2]));
    }
  return { tris: c, indices: s <= 65536 ? new Uint16Array(a) : a };
}
function s(e, t) {
  let n = (e.length / 9) | 0,
    r = new Uint32Array(n),
    i = new Float32Array(n),
    s = new Float32Array(n),
    c = new Float32Array(n),
    l =
      e instanceof Float32Array
        ? new Float32Array(n * 6)
        : new Float64Array(n * 6);
  for (let t = 0; t < n; t++) {
    r[t] = t;
    let n = t * 9;
    ((i[t] = (e[n] + e[n + 3] + e[n + 6]) / 3),
      (s[t] = (e[n + 1] + e[n + 4] + e[n + 7]) / 3),
      (c[t] = (e[n + 2] + e[n + 5] + e[n + 8]) / 3));
    let a = 1 / 0,
      o = 1 / 0,
      u = 1 / 0,
      d = -1 / 0,
      f = -1 / 0,
      p = -1 / 0;
    for (let t = 0; t < 9; t += 3) {
      let r = e[n + t],
        i = e[n + t + 1],
        s = e[n + t + 2];
      (r < a && (a = r),
        r > d && (d = r),
        i < o && (o = i),
        i > f && (f = i),
        s < u && (u = s),
        s > p && (p = s));
    }
    let m = t * 6;
    ((l[m] = a),
      (l[m + 1] = o),
      (l[m + 2] = u),
      (l[m + 3] = d),
      (l[m + 4] = f),
      (l[m + 5] = p));
  }
  let u = [i, s, c],
    d = new Float32Array(Math.max(16, Math.ceil(n / a) * 2 + 2) * 8),
    f = 0,
    p = () => {
      if ((f + 1) * 8 > d.length) {
        let e = new Float32Array(d.length * 2);
        (e.set(d), (d = e));
      }
      return f++;
    },
    m = [[p(), 0, n]];
  for (; m.length;) {
    let [e, t, n] = m.pop(),
      o = e * 8,
      f = 1 / 0,
      h = 1 / 0,
      g = 1 / 0,
      _ = -1 / 0,
      v = -1 / 0,
      y = -1 / 0,
      b = 1 / 0,
      x = 1 / 0,
      S = 1 / 0,
      C = -1 / 0,
      w = -1 / 0,
      T = -1 / 0;
    for (let e = t; e < n; e++) {
      let t = r[e],
        n = t * 6;
      (l[n] < f && (f = l[n]),
        l[n + 3] > _ && (_ = l[n + 3]),
        l[n + 1] < h && (h = l[n + 1]),
        l[n + 4] > v && (v = l[n + 4]),
        l[n + 2] < g && (g = l[n + 2]),
        l[n + 5] > y && (y = l[n + 5]),
        i[t] < b && (b = i[t]),
        i[t] > C && (C = i[t]),
        s[t] < x && (x = s[t]),
        s[t] > w && (w = s[t]),
        c[t] < S && (S = c[t]),
        c[t] > T && (T = c[t]));
    }
    ((d[o] = f),
      (d[o + 1] = h),
      (d[o + 2] = g),
      (d[o + 3] = _),
      (d[o + 4] = v),
      (d[o + 5] = y));
    let E = [C - b, w - x, T - S],
      D = E[0] >= E[1] && E[0] >= E[2] ? 0 : E[1] >= E[2] ? 1 : 2;
    if (n - t <= a || E[D] < 1e-6) {
      ((d[o + 6] = -t - 1), (d[o + 7] = n - t));
      continue;
    }
    let O = u[D],
      k = ([b, x, S][D] + [C, w, T][D]) / 2,
      A = t,
      j = n - 1;
    for (; A <= j;)
      if (O[r[A]] < k) A++;
      else {
        let e = r[A];
        ((r[A] = r[j]), (r[j] = e), j--);
      }
    let M = A;
    if (M === t || M === n) {
      M = (t + n) >> 1;
      let e = Array.from(r.subarray(t, n)).sort((e, t) => O[e] - O[t]);
      r.set(e, t);
    }
    let N = p(),
      P = p();
    ((d[o + 6] = N), (d[o + 7] = P), m.push([N, t, M], [P, M, n]));
  }
  let h = new Float32Array(n * 9),
    g = new Uint8Array(n);
  if (e instanceof Float32Array) {
    let i = new Uint32Array(e.buffer, e.byteOffset, e.length),
      a = new Uint32Array(h.buffer);
    for (let e = 0; e < n; e++) {
      let n = r[e],
        o = n * 9,
        s = e * 9;
      for (let e = 0; e < 9; e++) a[s + e] = i[o + e];
      g[e] = t ? t[n] : 0;
    }
  } else
    for (let i = 0; i < n; i++) {
      let n = r[i];
      (h.set(e.subarray(n * 9, n * 9 + 9), i * 9), (g[i] = t ? t[n] : 0));
    }
  return { nodes: d.slice(0, f * 8), ...o(h), mats: g };
}
var c = new Int32Array(256);
function l(e, t, n, r, i, a, o, s, l) {
  let { nodes: u, tris: d, mats: f, indices: p } = e,
    m = 1 / i,
    h = 1 / a,
    g = 1 / o,
    _ = l,
    v = -1,
    y = 0;
  for (c[y++] = 0; y;) {
    let e = c[--y] * 8,
      l = (u[e] - t) * m,
      b = (u[e + 3] - t) * m;
    if (l > b) {
      let e = l;
      ((l = b), (b = e));
    }
    let x = (u[e + 1] - n) * h,
      S = (u[e + 4] - n) * h;
    if (x > S) {
      let e = x;
      ((x = S), (S = e));
    }
    (x > l && (l = x), S < b && (b = S));
    let C = (u[e + 2] - r) * g,
      w = (u[e + 5] - r) * g;
    if (C > w) {
      let e = C;
      ((C = w), (w = e));
    }
    if (
      (C > l && (l = C), w < b && (b = w), !(b >= l) || b < s - 1e-4 || l > _)
    )
      continue;
    let T = u[e + 6],
      E = u[e + 7];
    if (T >= 0) {
      if (y + 2 > c.length) continue;
      ((c[y++] = T), (c[y++] = E));
      continue;
    }
    for (let e = -T - 1, c = -T - 1 + E; e < c; e++) {
      let c = e * 3,
        l = p ? p[c] * 3 : c * 3,
        u = p ? p[c + 1] * 3 : l + 3,
        m = p ? p[c + 2] * 3 : l + 6,
        h = d[l],
        g = d[l + 1],
        y = d[l + 2],
        b = d[u] - h,
        x = d[u + 1] - g,
        S = d[u + 2] - y,
        C = d[m] - h,
        w = d[m + 1] - g,
        T = d[m + 2] - y,
        E = a * T - o * w,
        D = o * C - i * T,
        O = i * w - a * C,
        k = b * E + x * D + S * O;
      if (k < 1e-12 && (k > -1e-12 || !(f[e] & 128))) continue;
      let A = 1 / k,
        j = t - h,
        M = n - g,
        N = r - y,
        P = (j * E + M * D + N * O) * A;
      if (P < -1e-7 || P > 1 + 1e-7) continue;
      let F = M * S - N * x,
        I = N * b - j * S,
        L = j * x - M * b,
        R = (i * F + a * I + o * L) * A;
      if (R < -1e-7 || P + R > 1 + 1e-7) continue;
      let z = (C * F + w * I + T * L) * A;
      z < s || z > _ || ((_ = z), (v = e));
    }
  }
  if (v < 0) return null;
  let b = v * 3,
    x = p ? p[b] * 3 : b * 3,
    S = p ? p[b + 1] * 3 : x + 3,
    C = p ? p[b + 2] * 3 : x + 6,
    w = d[S] - d[x],
    T = d[S + 1] - d[x + 1],
    E = d[S + 2] - d[x + 2],
    D = d[C] - d[x],
    O = d[C + 1] - d[x + 1],
    k = d[C + 2] - d[x + 2],
    A = T * k - E * O,
    j = E * D - w * k,
    M = w * O - T * D,
    N = Math.hypot(A, j, M) || 1;
  return (
    (A /= N),
    (j /= N),
    (M /= N),
    A * i + j * a + M * o > 0 && ((A = -A), (j = -j), (M = -M)),
    { dist: _, normal: [A, j, M], mat: f[v] & 127 }
  );
}
var u = Object.freeze([
    `concrete`,
    `brick`,
    `stone`,
    `wood`,
    `framed`,
    `glass`,
    `metal`,
    `fabric`,
    `bars`,
    `slats`,
    `drywall`,
    `plastic`,
  ]),
  d = Object.fromEntries(u.map((e, t) => [e, t])),
  f = {
    concrete: `concrete`,
    brick: `concrete`,
    stone: `rock`,
    wood: `wood`,
    framed: `wood`,
    glass: `glass`,
    metal: `metal`,
    fabric: `cloth`,
    bars: `metal`,
    slats: `wood`,
    drywall: `concrete`,
    plastic: `plastic`,
  };
