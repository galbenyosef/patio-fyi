// assets__models-CPhSKjCU 03 — base
// Lines 368-486 of readable/assets__models-CPhSKjCU.pretty.js (statement-aligned).
function N(e = 0) {
  let t =
      [
        {
          blades: 5,
          w: 0.03,
          wm: 0.02,
          h: [0.19, 0.29],
          lean: [0.09, 0.19],
          base: [0.6, 0.72, 0.42],
          tip: [1.1, 1.22, 0.72],
        },
        {
          blades: 3,
          w: 0.062,
          wm: 0.048,
          h: [0.14, 0.22],
          lean: [0.12, 0.21],
          base: [0.52, 0.68, 0.38],
          tip: [0.96, 1.16, 0.6],
        },
        {
          blades: 6,
          w: 0.032,
          wm: 0.017,
          h: [0.13, 0.24],
          lean: [0.16, 0.27],
          base: [0.72, 0.66, 0.44],
          tip: [1.2, 1.06, 0.62],
        },
        {
          blades: 4,
          w: 0.04,
          wm: 0.026,
          h: [0.22, 0.33],
          lean: [0.05, 0.13],
          base: [0.54, 0.66, 0.4],
          tip: [0.88, 1.1, 0.58],
        },
      ][e] || null,
    n = 9 + e * 31;
  if (!t) throw Error(`grass variant`);
  let r = [],
    i = [],
    o = [],
    s = (e, t, n, a, s, c, l, u) => {
      (r.push(...e, ...t, ...n),
        o.push(...a, ...s, ...c),
        i.push(...l, ...l, ...u),
        r.push(...t, ...e, ...n),
        o.push(...s, ...a, ...c),
        i.push(...l, ...l, ...u));
    };
  for (let e = 0; e < t.blades; e++) {
    let r = (e / t.blades) * Math.PI * 2 + u(e, 3, n) * 1.1,
      i = Math.cos(r),
      a = Math.sin(r),
      o = -a,
      c = i,
      l = t.lean[0] + (t.lean[1] - t.lean[0]) * u(e, 5, n),
      d = t.h[0] + (t.h[1] - t.h[0]) * u(e, 7, n),
      f = i * 0.028,
      p = a * 0.028,
      m = t.w,
      h = t.wm,
      g = [o * 0.28, 0.72, c * 0.28],
      _ = Math.hypot(g[0], g[1], g[2]),
      v = [g[0] / _, g[1] / _, g[2] / _],
      y = [-o * 0.28, 0.72, -c * 0.28],
      b = Math.hypot(y[0], y[1], y[2]),
      x = [y[0] / b, y[1] / b, y[2] / b],
      S = [f - o * m, 0, p - c * m],
      C = [f + o * m, 0, p + c * m],
      w = f + i * l * 0.42,
      T = p + a * l * 0.42,
      E = d * 0.52,
      D = [w - o * h, E, T - c * h],
      O = [w + o * h, E, T + c * h],
      k = [f + i * l, d, p + a * l],
      A = t.base,
      j = [
        (t.base[0] + t.tip[0]) / 2,
        (t.base[1] + t.tip[1]) / 2,
        (t.base[2] + t.tip[2]) / 2,
      ];
    (s(S, C, O, v, v, x, A, j),
      s(S, O, D, v, x, v, A, j),
      s(D, O, k, v, x, v, j, t.tip));
  }
  let l = new a();
  return (
    l.setAttribute(`position`, new c(r, 3)),
    l.setAttribute(`color`, new c(i, 3)),
    l.setAttribute(`normal`, new c(o, 3)),
    l.computeBoundingSphere(),
    l
  );
}
function P() {
  let e = [],
    n = (e, n, r) => {
      e.setRGB(0.19, 0.3, 0.13).lerp(
        new o(0.42, 0.5, 0.2),
        t.clamp(r / 1.2, 0, 1),
      );
    };
  for (let t = 0; t < 9; t++) {
    let r = u(t, 1, 55) * 6.2831,
      a = 0.12 + 0.5 * u(t, 2, 55),
      o = 0.55 + 0.6 * u(t, 3, 55),
      s = new i(0.012, 0.03, o, 3, 1, !1);
    (s.translate(0, o / 2, 0),
      s.rotateZ((u(t, 4, 55) - 0.5) * 0.5),
      s.rotateY(r),
      s.translate(Math.cos(r) * a, 0, Math.sin(r) * a),
      e.push(f(s, n)));
  }
  return m(e);
}
