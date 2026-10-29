// assets__sim-CCeMdhLh 08 — math
// Lines 1920-2351 of readable/assets__sim-CCeMdhLh.pretty.js (statement-aligned).
function un(e = `b`) {
  let t = cn.find((t) => t.key === e) ?? cn[1],
    n = [],
    r = (e, t, r = `skin`) => n.push({ name: e, vertices: t, material: r }),
    i = (e, t, n, r) => e.push(...t, ...n, ...r),
    a = (e, t, n, r, a) => {
      (i(e, t, n, r), i(e, t, r, a));
    },
    o = (e, n, r, i, a = 0, o = t.sides) =>
      Array.from({ length: o }, (t, s) => {
        let c = (s * Math.PI * 2) / o;
        return [e, n + r * Math.cos(c), a + i * Math.sin(c)];
      });
  function s(e, t, n = `skin`, o = !0) {
    let s = [],
      c = t[0].length,
      l = (e) =>
        e.reduce((t, n) => t.map((t, r) => t + n[r] / e.length), [0, 0, 0]),
      u = t.map(l),
      d = (e, t, n, r) => on(e, t, n).reduce((e, t, n) => e + t * r[n], 0) >= 0;
    for (let e = 0; e < t.length - 1; e++)
      for (let n = 0; n < c; n++) {
        let r = (n + 1) % c,
          i = t[e],
          o = t[e + 1],
          f = l([i[n], i[r], o[r], o[n]]).map(
            (t, n) => t - (u[e][n] + u[e + 1][n]) / 2,
          );
        d(i[n], i[r], o[r], f)
          ? a(s, i[n], i[r], o[r], o[n])
          : a(s, i[n], o[n], o[r], i[r]);
      }
    if (o)
      for (let e of [0, t.length - 1]) {
        let n = t[e],
          r = u[e],
          a = u[e ? e - 1 : 1],
          o = r.map((e, t) => e - a[t]);
        for (let e = 0; e < c; e++)
          d(r, n[e], n[(e + 1) % c], o)
            ? i(s, r, n[e], n[(e + 1) % c])
            : i(s, r, n[(e + 1) % c], n[e]);
      }
    return (r(e, s, n), s);
  }
  function c(e, t, n, r, i, a, o, c = `skin`) {
    let l = (e) => [
      [e, n - a / 2, r - o / 2],
      [e, n + a / 2, r - o / 2],
      [e, n + a / 2, r + o / 2],
      [e, n - a / 2, r + o / 2],
    ];
    s(e, [l(t - i / 2), l(t + i / 2)], c);
  }
  let l = [
    [-37.65, 0.055, 5.72, 5.86],
    [-35, 0.75, 5.05, 6.52],
    [-31, 1.85, 3.87, 7.64],
    [-26, 2.9, 2.38, 8.52],
    [-21, 3.42, 1.82, 8.9],
    [-13, 3.63, 1.63, 9.14],
    [-3, 3.66, 1.61, 9.2],
    [8, 3.66, 1.64, 9.23],
    [19, 3.63, 1.72, 9.23],
    [24, 3.57, 1.83, 9.21],
    [27, 3.49, 2, 9.12],
    [28.7, 3.36, 2.12, 8.94],
    [30.1, 3.17, 2.24, 8.56],
    [31.3, 2.96, 2.36, 7.95],
    [32.8, 2.65, 2.55, 7.39],
    [34.2, 2.2, 2.88, 6.91],
    [35.55, 1.58, 3.3, 6.37],
    [36.65, 0.87, 3.88, 5.89],
    [37.35, 0.34, 4.36, 5.37],
    [37.65, 0.035, 4.79, 4.93],
  ].map(([e, n, r, i]) => [e, n * (e > 28 ? t.nose : 1), r, i]);
  t.key === `a` && l.splice(11, 1);
  let u = l.map(([e, t, n, r]) => o(e, (n + r) / 2, (r - n) / 2, t));
  s(`cargo-fuselage`, u);
  function d(e, t, n) {
    let a = [];
    for (let e = 1; e < t.length - 1; e++) i(a, t[0], t[e], t[e + 1]);
    r(e, a, n);
  }
  function f(e, n, a, o) {
    let s = [],
      c = (e, t, n) =>
        (t[0] - e[0]) * (n[1] - e[1]) - (t[1] - e[1]) * (n[0] - e[0]),
      d = (e, t, n, r) => {
        let i = [];
        for (let a = 0; a < e.length; a++) {
          let o = e[a],
            s = e[(a + 1) % e.length],
            l = c(t, n, o) * r,
            u = c(t, n, s) * r;
          if ((l >= -1e-9 && i.push(o), l < 0 != u < 0)) {
            let e = l / (l - u);
            i.push(o.map((t, n) => t + (s[n] - t) * e));
          }
        }
        return i;
      };
    for (let e = 0; e < l.length - 1; e++)
      for (let r = 0; r < t.sides / 2; r++) {
        let o = [
            [l[e][0], (r * Math.PI * 2) / t.sides],
            [l[e][0], ((r + 1) * Math.PI * 2) / t.sides],
            [l[e + 1][0], ((r + 1) * Math.PI * 2) / t.sides],
            [l[e + 1][0], (r * Math.PI * 2) / t.sides],
          ],
          f = [u[e][r], u[e][r + 1], u[e + 1][r + 1], u[e + 1][r]];
        for (let e of [
          [0, 1, 2],
          [0, 2, 3],
        ]) {
          let t = e.map((e) => o[e]),
            r = e.map((e) => f[e]),
            l = c(t[0], t[1], t[2]),
            u = n;
          for (let e = 0; e < 3 && u.length >= 3; e++)
            u = d(u, t[e], t[(e + 1) % 3], Math.sign(l));
          if (u.length < 3) continue;
          let p = sn(...r),
            m = u.map((e) => {
              let n = [
                  c(t[1], t[2], e) / l,
                  c(t[2], t[0], e) / l,
                  c(t[0], t[1], e) / l,
                ],
                i = [0, 1, 2].map(
                  (e) =>
                    r.reduce((t, r, i) => t + r[e] * n[i], 0) + p[e] * 0.025,
                );
              return ((i[2] *= a), i);
            });
          for (let e = 1; e < m.length - 1; e++) i(s, m[0], m[e], m[e + 1]);
        }
      }
    r(e, s, o);
  }
  for (let e of [-1, 1]) {
    for (let [t, n, r, i, a] of [
      [`front-in`, 30.05, 31.33, 0.025, 0.2],
      [`front-out`, 30, 31.24, 0.235, 0.43],
      [`side-in`, 28.85, 29.84, 0.4, 0.63],
      [`side-out`, 27.85, 28.68, 0.46, 0.67],
    ])
      f(
        `cockpit-${t}-${e}`,
        [
          [n, i],
          [r, i + 0.035],
          [r, a],
          [n, a],
        ],
        e,
        `glass`,
      );
    for (let n = 0; n < t.sides / 2; n++) {
      let r = 0.12 + (n * Math.PI * 0.84) / (t.sides / 2),
        i = 0.12 + ((n + 1) * Math.PI * 0.84) / (t.sides / 2);
      f(
        `nose-door-seam-${e}-${n}`,
        [
          [28.12, r],
          [28.16, r],
          [28.16, i],
          [28.12, i],
        ],
        e,
        `seam`,
      );
    }
    for (let [t, n, r, i] of [
      [22, 22.04, 1.04, 1.54],
      [23.18, 23.22, 1.04, 1.54],
      [22, 23.22, 1.04, 1.051],
      [22, 23.22, 1.529, 1.54],
    ])
      f(
        `crew-door-${e}-${t}-${r}`,
        [
          [t, r],
          [n, r],
          [n, i],
          [t, i],
        ],
        e,
        `seam`,
      );
    for (let t of [-17, -13, -9])
      f(
        `upper-deck-window-${e}-${t}`,
        Array.from({ length: 8 }, (e, n) => [
          t + 0.14 * Math.cos((n * Math.PI) / 4),
          1.28 + 0.04 * Math.sin((n * Math.PI) / 4),
        ]),
        e,
        `glass`,
      );
  }
  let p = [
    [2.35, 9.65, -4.2, 8.78, 1.06],
    [9.5, 6.18, -6.6, 8.48, 0.79],
    [20.4, -0.24, -9.4, 7.65, 0.46],
    [33.945, -8.1, -10.7, 6.6, 0.14],
  ];
  function m(e, t, n, r = `wing`) {
    s(
      e,
      t.map(([e, t, r, i, a]) => [
        [t, i, n * e],
        [t - 0.1 * (t - r), i + a * 0.47, n * e],
        [r + 0.24 * (t - r), i + a * 0.24, n * e],
        [r, i, n * e],
        [r + 0.24 * (t - r), i - a * 0.25, n * e],
        [t - 0.1 * (t - r), i - a * 0.36, n * e],
      ]),
      r,
    );
  }
  for (let e of [-1, 1]) {
    m(`wing-${e}`, p, e);
    for (let t = 0; t < 2; t++) {
      let n = p[t + 1],
        r = p[t + 2];
      d(
        `flap-line-${e}-${t}`,
        [
          [n[2] + 1, n[3] + n[4] * 0.2, e * n[0]],
          [r[2] + 0.4, r[3] + r[4] * 0.2, e * r[0]],
          [r[2] + 0.47, r[3] + r[4] * 0.23, e * r[0]],
          [n[2] + 1.07, n[3] + n[4] * 0.23, e * n[0]],
        ],
        `seam`,
      );
    }
    (s(
      `gear-sponson-${e}`,
      [
        [-21, 0.13, 2.6],
        [-17, 0.69, 2.35],
        [-9, 0.94, 2.25],
        [1.5, 0.96, 2.3],
        [9, 0.68, 2.63],
        [13, 0.1, 3.05],
      ].map(([n, r, i]) =>
        o(n, i, r * 0.97, r, e * 3.05, t.key === `a` ? 8 : 12),
      ),
      `belly`,
    ),
      s(
        `wing-fairing-${e}`,
        [
          [-10, 0.08, 7.72],
          [-4, 0.54, 8.2],
          [5, 0.67, 8.34],
          [11, 0.27, 7.89],
          [14, 0.04, 7.55],
        ].map(([t, n, r]) => o(t, r, n * 0.8, n, e * 2.72, 8)),
      ));
    for (let [n, r, i, a, c] of [
      [`inner`, 10.3, 5.2, 5.94, 8.48],
      [`outer`, 21.35, -1.5, 5.31, 7.58],
    ]) {
      let l = r * e,
        u = t.engine;
      if (
        (s(
          `engine-${n}-${e}`,
          [
            [-4.45, 0.77],
            [-3.45, 1.13],
            [-1.8, 1.42],
            [0.95, 1.6],
            [2.05, 1.58],
            [2.43, 1.43],
          ].map(([e, t]) => o(i + e, a, t, t, l, u)),
          `skin`,
          !1,
        ),
        s(
          `intake-lip-${n}-${e}`,
          [o(i + 2.43, a, 1.43, 1.43, l, u), o(i + 2.47, a, 1.28, 1.28, l, u)],
          `edge`,
          !1,
        ),
        s(
          `intake-throat-${n}-${e}`,
          [o(i + 1.45, a, 1.11, 1.11, l, u), o(i + 2.47, a, 1.28, 1.28, l, u)],
          `intake`,
          !1,
        ),
        s(
          `fan-disc-${n}-${e}`,
          [o(i + 1.4, a, 1.12, 1.12, l, u), o(i + 1.42, a, 1.12, 1.12, l, u)],
          `intake`,
        ),
        t.key !== `a`)
      )
        for (let t = 0; t < u; t++) {
          let r = (t * Math.PI * 2) / u,
            o = r + 0.2;
          d(
            `fan-blade-${n}-${e}-${t}`,
            [
              [i + 1.46, a + 0.27 * Math.cos(r), l + 0.27 * Math.sin(r)],
              [
                i + 1.46,
                a + 1.09 * Math.cos(r + 0.26),
                l + 1.09 * Math.sin(r + 0.26),
              ],
              [
                i + 1.46,
                a + 1.09 * Math.cos(o + 0.26),
                l + 1.09 * Math.sin(o + 0.26),
              ],
              [i + 1.46, a + 0.27 * Math.cos(o), l + 0.27 * Math.sin(o)],
            ],
            `fan`,
          );
        }
      (s(
        `fan-hub-${n}-${e}`,
        [o(i + 1.43, a, 0.3, 0.3, l, u), o(i + 1.82, a, 0.07, 0.07, l, u)],
        `fan`,
      ),
        s(
          `exhaust-${n}-${e}`,
          [o(i - 4.82, a, 0.68, 0.68, l, u), o(i - 3.6, a, 0.86, 0.86, l, u)],
          `exhaust`,
        ));
      let f = [
          [i - 2.3, a + 1.06],
          [i + 1.3, a + 1.36],
          [i - 0.4, c + 0.12],
          [i - 3.7, c - 0.16],
        ],
        p = [-0.19, 0.19].map((e) => f.map(([t, n]) => [t, n, l + e]));
      s(`pylon-${n}-${e}`, p, `belly`);
    }
  }
  let h = [
    [-20.3, 7.5],
    [-28.9, 19.48],
    [-35.6, 19.48],
    [-33.15, 5.96],
  ];
  s(
    `vertical-tail`,
    [-0.34, 0.34].map((e) => h.map(([t, n]) => [t, n, e])),
  );
  for (let e of [-1, 1])
    (m(
      `tailplane-${e}`,
      [
        [0.18, -27.7, -35.65, 19.55, 0.58],
        [10.47, -33.5, -37, 19.64, 0.25],
      ],
      e,
    ),
      d(
        `rudder-seam-${e}`,
        [
          [-34.4, 19.1, e * 0.349],
          [-34.46, 19.1, e * 0.349],
          [-31.4, 7.1, e * 0.349],
          [-31.34, 7.1, e * 0.349],
        ],
        `seam`,
      ),
      d(
        `tail-band-${e}`,
        [
          [-28.15, 16.3, e * 0.35],
          [-34.72, 16.3, e * 0.35],
          [-34.6, 15.96, e * 0.35],
          [-27.9, 15.96, e * 0.35],
        ],
        `mark`,
      ));
  function g(e, n, a, o, c) {
    let l = [],
      u = t.wheel;
    s(
      e,
      [a - c / 2, a + c / 2].map((e) =>
        Array.from({ length: u }, (t, r) => [
          n + o * Math.sin((r * Math.PI * 2) / u),
          o + o * Math.cos((r * Math.PI * 2) / u),
          e,
        ]),
      ),
      `tyre`,
    );
    for (let e of [-1, 1]) {
      let t = a + e * (c / 2 + 0.006),
        r = [n, o, t],
        s = o * 0.4;
      for (let e = 0; e < u; e++)
        i(
          l,
          r,
          [
            n + s * Math.sin((e * Math.PI * 2) / u),
            o + s * Math.cos((e * Math.PI * 2) / u),
            t,
          ],
          [
            n + s * Math.sin(((e + 1) * Math.PI * 2) / u),
            o + s * Math.cos(((e + 1) * Math.PI * 2) / u),
            t,
          ],
        );
    }
    r(`${e}-hub`, l, `hub`);
  }
  for (let e of [27.25, 28.22])
    for (let t of [-0.57, 0.57]) g(`nose-wheel-${e}-${t}`, e, t, 0.5, 0.32);
  (c(`nose-strut`, 27.73, 1.26, 0, 0.25, 1.8, 0.28, `strut`),
    c(`nose-truck`, 27.73, 0.56, 0, 1.28, 0.18, 1.3, `strut`));
  for (let e of [-10.4, -3.2])
    for (let t of [-1, 1]) {
      let n = t * 3.24;
      for (let r of [-1.26, 0, 1.26])
        for (let i of [-0.63, 0.63])
          g(`main-wheel-${e}-${t}-${r}-${i}`, e + r, n + i, 0.665, 0.46);
      (c(`main-axle-${e}-${t}`, e, 0.68, n, 3.35, 0.22, 0.26, `strut`),
        c(`main-strut-${e}-${t}`, e, 1.49, n, 0.3, 1.72, 0.3, `strut`));
    }
  return n;
}
