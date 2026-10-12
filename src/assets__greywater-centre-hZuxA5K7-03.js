// assets__greywater-centre-hZuxA5K7 03 — math
// Lines 592-860 of readable/assets__greywater-centre-hZuxA5K7.pretty.js (statement-aligned).
function w(e, i, a, o, s, { side: c, dir: l }) {
  let p = +(c > 0),
    m = (e, t) => {
      let n = c * e,
        r = -l * t;
      return [a.x + a.tz * n + a.tx * r, a.z - a.tx * n + a.tz * r];
    },
    h = 20.3 / 2,
    [g, _] = m(h, -17.029999999999998),
    v = i(g, _) - s,
    y = r,
    b = (y - v) / 60,
    x = (t, r, i, a, c, d) => {
      let [p, g] = m(h, (r + a) / 2),
        _ = Math.abs(r - a) / 2,
        v = -l * Math.sign(a - r);
      f(e, t, {
        x: u(p),
        z: u(g),
        yaw: o,
        hx: n / 2,
        hz: _,
        y0: s + Math.min(i, c) - d,
        y1: s + Math.max(i, c),
        ...(i === c
          ? {}
          : { ramp: { z0: -v * _, z1: v * _, y: s + i, rise: c - i } }),
        thickness: d,
      });
    };
  x(`rail-stair-${p}-top`, 6.8, y, 4, y, 0.3);
  let S = 4,
    C = y,
    w = 0,
    T = [];
  for (let n = 0; n < 3; n++) {
    let r = S,
      i = C;
    ((S = r - 19 * t),
      (C = i - 20 * b),
      x(`rail-stair-${p}-f${n}`, r, i, S, C, 0.4),
      T.push([r, i, S, C]));
    let [a, c] = m(10.25, (r + S) / 2),
      d = Math.abs(r - S) / 2,
      h = -l * Math.sign(S - r);
    (f(
      e,
      `rail-stair-${p}-roof${n}`,
      {
        x: u(a),
        z: u(c),
        yaw: o,
        hx: 1.65,
        hz: d,
        y0: s + Math.min(i, C) + 2.6,
        y1: s + Math.max(i, C) + 2.9,
        ramp: { z0: -h * d, z1: h * d, y: s + i + 2.9, rise: C - i },
        thickness: 0.3,
      },
      { noPlayer: !0 },
    ),
      n < 2 &&
        (x(`rail-stair-${p}-l${n}`, S, C, S - 2, C, 0.3),
        T.push([S, C, S - 2, C]),
        (S -= 2)));
  }
  for (let t of [8.950000000000001, 11.35])
    for (let [n, r, i, a] of T) {
      let o = Math.max(1, Math.ceil(Math.abs(n - i) / 0.42));
      for (let c = 0; c <= o; c++) {
        let l = c / o,
          u = n + (i - n) * l,
          f = r + (a - r) * l,
          [h, g] = m(t, u);
        d(
          e,
          `rail-bal-${p}-${w++}`,
          h - 0.13,
          s + f - 0.1,
          g - 0.13,
          h + 0.13,
          s + f + 1.05,
          g + 0.13,
        );
      }
    }
}
function T(e) {
  let {
      y0: t,
      y1: n,
      y2: r,
      outer: [i, o, s, c],
      inner: [l, u, p, m],
      pad: [h, g, _, v],
    } = a,
    y = -0.1;
  (d(e, `plaza-rim-n`, h - 2, r + y, g - 2, _ + 2, t, o),
    d(e, `plaza-rim-s`, h - 2, r + y, c, _ + 2, t, v + 2),
    d(e, `plaza-rim-w`, h - 2, r + y, o, i, t, c),
    d(e, `plaza-rim-e`, s, r + y, o, _ + 2, t, c),
    d(e, `plaza-terrace-n`, i, r + y, o, s, n, u),
    d(e, `plaza-terrace-s`, i, r + y, m, s, n, c),
    d(e, `plaza-terrace-w`, i, r + y, u, l, n, m),
    d(e, `plaza-terrace-e`, p, r + y, u, s, n, m));
  let b = (t, [n, r, i, a], o, s, c, l) => {
    let u = (n + i) / 2,
      p = (r + a) / 2,
      m = r === a,
      h = Math.sign(c - u),
      g = Math.sign(l - p),
      _ = m ? (g > 0 ? 0 : Math.PI) : h > 0 ? Math.PI / 2 : -Math.PI / 2,
      v = 1.36;
    f(e, t, {
      x: u + (m ? 0 : (h * v) / 2),
      z: p + (m ? (g * v) / 2 : 0),
      yaw: _,
      hx: (m ? i - n : Math.abs(a - r)) / 2,
      hz: v / 2,
      y0: s + y,
      y1: o,
      ramp: { z0: -1.36 / 2, z1: v / 2, y: o, rise: s - o },
    });
    for (let [c, l] of (m ? [n, i] : [r, a]).entries()) {
      let i = m ? r : n,
        [a, u] =
          (m ? g : h) > 0 ? [i - 0.3, i + v - 0.17] : [i - v + 0.17, i + 0.3];
      m
        ? d(e, `${t}-cheek-${c}`, l - 0.15, s + y, a, l + 0.15, o, u)
        : d(e, `${t}-cheek-${c}`, a, s + y, l - 0.15, u, o, l + 0.15);
    }
  };
  (a.outerGaps.forEach((e, r) => b(`plaza-steps-o${r}`, e, t, n, 0, 0)),
    a.innerGaps.forEach((e, t) => b(`plaza-steps-i${t}`, e, n, r, 0, 0)),
    d(e, `plaza-monument`, -2.3, r, -2.3, 2.3, r + 0.6, 2.3),
    d(e, `plaza-monument-die`, -1.6, r, -1.6, 1.6, r + 2.45, 1.6));
  for (let [t, n] of [
    [-4.5, 2.8],
    [4.5, -2.8],
  ])
    d(
      e,
      `plaza-bench-c${+(t > 0)}`,
      t - 1.3,
      r,
      n - 0.25,
      t + 1.3,
      r + 0.46,
      n + 0.25,
    );
  d(e, `plaza-planter-t`, -12.1, n, 1.4, -10.5, n + 1, 5.4);
  for (let [n, r] of [
    [-23, -11],
    [23, 11],
  ])
    d(
      e,
      `plaza-kiosk-${+(n > 0)}`,
      n - 1.25,
      t,
      r - 1.65,
      n + 1.25,
      t + 2.72,
      r + 1.65,
    );
  for (let [n, r] of [
    [-21, 11.8],
    [21, -11.8],
  ])
    d(
      e,
      `plaza-planter-${+(n > 0)}`,
      n - 3.05,
      t,
      r - 0.85,
      n + 3.05,
      t + 1.05,
      r + 0.85,
    );
  for (let n of [-1, 1]) {
    for (let r of [-5, 0, 5])
      d(
        e,
        `plaza-end-planter-${+(n > 0)}-${r}`,
        n * 33.1 - 0.95,
        t,
        r - 1.25,
        n * 33.1 + 0.95,
        t + 0.9,
        r + 1.25,
      );
    for (let r of [-7, 7])
      d(
        e,
        `plaza-bollard-${+(n > 0)}-${r}`,
        n * 33.1 - 0.12,
        t,
        r - 0.12,
        n * 33.1 + 0.12,
        t + 0.92,
        r + 0.12,
      );
    let r = n * 38,
      i = n * 8.2,
      a = i + n * 0.75;
    d(
      e,
      `plaza-shelter-${+(n > 0)}`,
      r - 2.4,
      t,
      Math.min(a, a + n * 0.12),
      r + 2.4,
      t + 2.36,
      Math.max(a, a + n * 0.12),
    );
    for (let [a, o, s] of [
      [0, -2.36, 0.05],
      [1, 2.35, 0.09],
    ]) {
      let c = r - n * o,
        l = i - n * -0.72,
        u = i - n * 0.45;
      d(
        e,
        `plaza-shelter-${+(n > 0)}-end-${a}`,
        c - s,
        t,
        Math.min(l, u),
        c + s,
        t + 2.3,
        Math.max(l, u),
      );
    }
    d(
      e,
      `plaza-shelter-roof-${+(n > 0)}`,
      r - 2.55,
      t + 2.5,
      i - 1,
      r + 2.55,
      t + 2.7,
      i + 1,
      { noPlayer: !0 },
    );
  }
  for (let [n, r] of [
    [-30.5, -15.5],
    [30.5, 15.5],
    [-30.5, 8.5],
    [30.5, -8.5],
    [-17, 9],
    [17, -9],
  ])
    d(
      e,
      `plaza-lamp-${n}-${r}`,
      n - 0.12,
      t,
      r - 0.12,
      n + 0.12,
      t + 4.8,
      r + 0.12,
    );
  for (let [n, r, i] of [
    [-12, 14.6, 0],
    [12, -14.6, 1],
  ])
    d(e, `plaza-bench-${i}`, n - 1.2, t, r - 0.3, n + 1.2, t + 0.9, r + 0.3);
}
