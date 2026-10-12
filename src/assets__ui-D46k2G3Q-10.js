// assets__ui-D46k2G3Q 10 — math
// Lines 3671-4601 of readable/assets__ui-D46k2G3Q.pretty.js (statement-aligned).
function er(e, n = {}) {
  typeof e == `string` && (e = Zn.find((t) => t.id === e));
  let r = !!n.bare;
  if (!e || !(r ? Zn.some((t) => t.id === e.id) : Zn.includes(e)))
    throw Error(`Unknown gun study`);
  let i = new M();
  ((i.name = `${e.id} — ${e.name}`), (i.userData.spec = e));
  let a = Qn(e),
    o = $n(i, a, !!n.lite);
  i.userData.materials = Object.values(a);
  let {
      profile: s,
      box: c,
      cyl: l,
      ring: u,
      beam: p,
      bolt: m,
      grooves: h,
      label: g,
    } = o,
    _ = e.family === `Sidearms`,
    v = e.family === `Wheelguns`,
    y = e.family === `Bullpups`,
    b = e.family === `Speculative forms`,
    x = e.body,
    S = e.barrel,
    C = _ ? 0.24 : v ? 0.3 : 0.38,
    w = x * 0.5,
    T = -x * 0.5,
    E = Number(e.id),
    D = {};
  if (r && (_ || v || b)) throw Error(`Armory guns use the long-gun body`);
  let O = (e) => {
    for (let t of [-1, 1]) e(t);
  };
  function k(t = -0.36, n = e.grip || `angled`, r = 1) {
    let i = n === `wood`,
      a = i ? `wood` : `rubber`,
      o =
        n === `round`
          ? [
              [t - 0.2, -0.12],
              [t + 0.17, -0.18],
              [t + 0.04, -0.92 * r],
              [t - 0.29, -1.02 * r],
              [t - 0.42, -0.9 * r],
            ]
          : [
              [t - 0.22, -0.08],
              [t + 0.2, -0.2],
              [t - 0.05, -1.01 * r],
              [t - 0.43, -0.91 * r],
            ];
    (s(a, o, C * 0.92),
      O((e) => {
        let n = e * C * 0.49;
        s(
          i ? `wood` : `paint`,
          [
            [t - 0.19, -0.35],
            [t + 0.03, -0.4],
            [t - 0.1, -0.84 * r],
            [t - 0.32, -0.8 * r],
          ],
          0.035,
          n,
        );
        for (let a = 0; a < 6; a++) {
          let o = -0.41 - a * 0.065 * r,
            s = c(
              i ? `grain` : `inset`,
              t - 0.1 - a * 0.016,
              o,
              n + e * 0.024,
              0.2,
              0.014,
              0.008,
              0.002,
            );
          s.rotation.z = -0.15;
        }
        (m(t - 0.14, -0.41, n + e * 0.029, 0.032),
          m(t - 0.24, -0.79 * r, n + e * 0.029, 0.032));
      }),
      c(`dark`, t - 0.2, -0.98 * r, 0, 0.39, 0.07, C));
  }
  function A(e = -0.2) {
    (p(`dark`, [e - 0.13, -0.28, 0], [e + 0.12, -0.59, 0], 0.037),
      p(`dark`, [e + 0.12, -0.59, 0], [e + 0.5, -0.56, 0], 0.037),
      p(`dark`, [e + 0.5, -0.56, 0], [e + 0.57, -0.2, 0], 0.037),
      s(
        `steel`,
        [
          [e + 0.21, -0.2],
          [e + 0.28, -0.23],
          [e + 0.19, -0.46],
          [e + 0.12, -0.43],
        ],
        0.048,
      ));
  }
  function j(e, t, n) {
    c(`dark`, e, t, 0, n, 0.06, 0.23);
    for (let r = 0; r < Math.floor(n / 0.115); r++)
      c(
        `steel`,
        e - n / 2 + r * 0.115 + 0.045,
        t + 0.035,
        0,
        0.065,
        0.035,
        0.27,
        0.005,
      );
  }
  function ee(e, t = 0, n = 0.42) {
    if (e === `iron`) {
      for (let e of [T + 0.14, w + S * 0.84])
        (e > w &&
          c(
            `dark`,
            e,
            (n - 0.06 + 0.14) / 2,
            0,
            0.07,
            n - 0.06 - 0.14 + 0.03,
            0.1,
            0.009,
          ),
          c(`dark`, e, n, 0, 0.12, 0.12, 0.16),
          c(`accent`, e, n + 0.08, 0, 0.025, 0.05, 0.04, 0.003));
      return;
    }
    if (e === `bridge`) {
      for (let e of [t - 0.44, t + 0.44])
        c(`paint`, e, n + 0.14, 0, 0.11, 0.32, 0.15);
      (c(`dark`, t, n + 0.31, 0, 1.02, 0.1, 0.18),
        h(t, n + 0.31, 0.099, 0.77, 0.045, 8));
      return;
    }
    if (e === `reflex` || e === `offset`) {
      let r = e === `offset` ? 0.28 : 0;
      c(`dark`, t, n, r, 0.4, 0.075, 0.28);
      for (let e of [-1, 1])
        c(`paint`, t, n + 0.2, r + e * 0.135, 0.14, 0.32, 0.038);
      c(`paint`, t, n + 0.37, r, 0.15, 0.035, 0.3);
      let i = c(`glass`, t, n + 0.2, r, 0.028, 0.23, 0.23, 0.005);
      ((i.material = a.glass),
        l(`accent`, t + 0.04, n + 0.09, r + 0.2, 0.06, 0.07, `z`));
      return;
    }
    let r = e === `longscope` ? 1.69 : 1.02,
      i = t + 0.05;
    for (let e of [-0.25, 0.25])
      (c(`dark`, i + e, n + 0.075, 0, 0.14, 0.16, 0.22),
        u(`paint`, i + e, n + 0.24, 0, 0.127, 0.03));
    (l(`dark`, i, n + 0.24, 0, 0.105, r),
      l(`paint`, i + r / 2 - 0.05, n + 0.24, 0, 0.18, 0.29, `x`, 0.22),
      l(`glass`, i + r / 2 + 0.099, n + 0.24, 0, 0.19, 0.008),
      u(`rubber`, i + r / 2 + 0.11, n + 0.24, 0, 0.206, 0.022),
      l(`paint`, i - r / 2 + 0.05, n + 0.24, 0, 0.135, 0.25),
      l(`glass`, i - r / 2 - 0.08, n + 0.24, 0, 0.109, 0.008),
      l(`dark`, i, n + 0.41, 0, 0.085, 0.16, `y`),
      l(`accent`, i, n + 0.49, 0, 0.09, 0.03, `y`),
      l(`dark`, i, n + 0.25, 0.155, 0.075, 0.13, `z`),
      h(i, n + 0.27, 0.225, 0.08, 0.07, 4));
  }
  function N(e, t, n = 0.085, r = 0.14, i = 0) {
    (l(`dark`, e + t / 2, r, i, n, t),
      l(`steel`, e + t * 0.65, r, i, n * 1.06, 0.055),
      l(`dark`, e + t - 0.02, r, i, n * 1.42, 0.17),
      l(`inset`, e + t + 0.07, r, i, n * 0.86, 0.007),
      u(`steel`, e + t + 0.078, r, i, n * 1.09, n * 0.17));
  }
  function P(t, n = 0.14) {
    if (e.muzzle === `hush`) {
      (l(`dark`, t + 0.3, n, 0, 0.18, 0.72),
        l(`paint`, t + 0.29, n, 0, 0.184, 0.48));
      for (let e of [-0.03, 0.08, 0.55, 0.64])
        u(`steel`, t + e, n, 0, 0.18, 0.012);
      (l(`inset`, t + 0.667, n, 0, 0.143, 0.008),
        u(`steel`, t + 0.674, n, 0, 0.14, 0.027),
        O((e) => h(t + 0.29, n, e * 0.183, 0.36, 0.04, 6)));
    } else
      e.muzzle === `brake` &&
        (c(`dark`, t + 0.16, n, 0, 0.42, 0.24, 0.26),
        O((e) => {
          for (let r = 0; r < 3; r++)
            c(
              `inset`,
              t + 0.035 + r * 0.105,
              n,
              e * 0.139,
              0.05,
              0.15,
              0.016,
              0.005,
            );
        }),
        l(`inset`, t + 0.383, n, 0, 0.063, 0.008),
        u(`steel`, t + 0.39, n, 0, 0.082, 0.018));
  }
  function F(e, t, r, o) {
    let s = new M();
    (s.position.set(e, t, 0),
      (s.userData.iron = o > 0 ? `front` : `rear`),
      i.add(s));
    let c = $n(s, a, !!n.lite),
      l = r - t;
    if ((c.box(`dark`, 0, 0.025, 0, 0.13, 0.05, 0.2, 0.008), o < 0)) {
      for (let e of [-1, 1])
        c.box(`dark`, 0, l * 0.55, e * 0.055, 0.05, l * 0.9, 0.035, 0.006);
      c.ring(`steel`, 0, l, 0, 0.035, 0.012, `x`);
    } else {
      c.box(`dark`, 0, l * 0.5, 0, 0.045, l * 0.9, 0.05, 0.006);
      for (let e of [-1, 1])
        c.box(`dark`, 0, l * 0.62, e * 0.07, 0.035, l * 0.62, 0.025, 0.005);
      c.box(`accent`, 0, l - 0.01, 0, 0.02, 0.03, 0.03, 0.003);
    }
    return s;
  }
  function te(e) {
    let t = T - 0.08,
      n = t - 1.32;
    if (e === `integrated`) {
      (s(
        `paint`,
        [
          [t + 0.4, 0.3],
          [t - 0.72, 0.25],
          [t - 0.8, -0.42],
          [t - 0.19, -0.45],
          [t + 0.32, -0.21],
        ],
        0.48,
      ),
        c(`rubber`, t - 0.82, -0.12, 0, 0.1, 0.69, 0.49));
      return;
    }
    if (e === `wood` || e === `thumbhole`)
      (s(
        `wood`,
        [
          [t + 0.15, 0.18],
          [t - 0.45, 0.12],
          [n, 0.04],
          [n - 0.08, -0.69],
          [n + 0.16, -0.72],
          [t - 0.35, -0.36],
          [t + 0.13, -0.27],
        ],
        0.33,
      ),
        e === `thumbhole` &&
          (c(`wood`, t - 0.56, 0.26, 0, 0.79, 0.2, 0.37),
          p(`wood`, [n + 0.1, -0.61, 0], [t + 0.28, -0.61, 0], 0.075)),
        O((e) => {
          (m(t - 0.35, -0.16, e * 0.181), m(n + 0.24, -0.31, e * 0.181, 0.03));
        }),
        c(`rubber`, n - 0.03, -0.33, 0, 0.09, 0.76, 0.37));
    else {
      (e === `wire` || e === `rails` || e === `skeleton`
        ? (p(`steel`, [t, 0.12, -0.115], [n, 0.11, -0.115], 0.042),
          p(`steel`, [t, 0.12, 0.115], [n, 0.11, 0.115], 0.042),
          e === `skeleton`
            ? p(`paint`, [t, -0.12, 0], [n, -0.57, 0], 0.075)
            : p(`dark`, [t, -0.2, 0], [n, -0.4, 0], 0.04))
        : (l(`steel`, t - 0.56, 0.05, 0, 0.08, 1.1),
          s(
            `paint`,
            [
              [t - 0.34, 0.22],
              [n, 0.19],
              [n, -0.58],
              [n + 0.24, -0.56],
              [t - 0.42, -0.2],
            ],
            0.31,
          ),
          O((e) => {
            (h(n + 0.34, -0.13, e * 0.17, 0.33, 0.13, 4),
              m(n + 0.22, 0.03, e * 0.182));
          })),
        c(`rubber`, n, -0.2, 0, 0.12, 0.83, 0.4));
      for (let e = 0; e < 8; e++)
        c(`dark`, n - 0.068, -0.53 + e * 0.089, 0, 0.018, 0.025, 0.42, 0.003);
      if (e === `precision`) {
        c(`rubber`, t - 0.75, 0.32, 0, 0.91, 0.17, 0.32);
        for (let e of [t - 0.42, t - 0.91])
          l(`steel`, e, 0.19, 0, 0.028, 0.23, `y`);
        l(`accent`, t - 0.53, -0.23, 0.22, 0.068, 0.06, `z`);
      }
    }
    (u(`dark`, n + 0.19, -0.58, 0.19, 0.082, 0.019, `z`),
      l(`dark`, t, -0.02, 0, 0.18, 0.16),
      O((e) => m(t, -0.02, e * 0.2, 0.075)));
  }
  function I(e, t = 0.33) {
    if (e !== `none` && e) {
      if (
        e === `box` ||
        e === `short` ||
        e === `curve` ||
        e === `grip` ||
        e === `cell`
      ) {
        let n = e === `short` ? 0.43 : e === `cell` ? 0.75 : 1.05;
        e === `grip` && (t = -0.44);
        let r = e === `curve` ? 0.29 : 0;
        (s(
          e === `cell` ? `paint` : `dark`,
          [
            [t - 0.2, -0.17],
            [t + 0.22, -0.17],
            [t + 0.19 + r, -n],
            [t - 0.18 + r, -n - 0.04],
            [t - 0.25 + r * 0.3, -n * 0.55],
          ],
          0.29,
        ),
          O((i) => {
            for (let a = 0; a < 3; a++) {
              let o = c(
                e === `cell` ? `glow` : `steel`,
                t - 0.11 + a * 0.1 + r * 0.4,
                -n * 0.59,
                i * 0.153,
                0.022,
                n * 0.53,
                0.009,
                0.003,
              );
              o.rotation.z = r * 0.6;
            }
            c(
              `accent`,
              t + r * 0.7,
              -n + 0.08,
              i * 0.158,
              0.3,
              0.045,
              0.012,
              0.004,
            );
          }),
          c(`rubber`, t + r, -n - 0.015, 0, 0.47, 0.09, 0.35));
      } else if (e === `drum` || e === `twin`) {
        let n = e === `twin` ? [-0.35, 0.35] : [0];
        for (let e of n) {
          l(`paint`, t, -0.67, e, 0.43, 0.42, `z`);
          for (let n of [-1, 1]) {
            (l(`dark`, t, -0.67, e + n * 0.225, 0.355, 0.031, `z`),
              u(`steel`, t, -0.67, e + n * 0.247, 0.29, 0.019, `z`),
              l(`accent`, t, -0.67, e + n * 0.254, 0.095, 0.023, `z`));
            for (let r = 0; r < 8; r++) {
              let i = (r * Math.PI) / 4;
              m(
                t + Math.cos(i) * 0.29,
                -0.67 + Math.sin(i) * 0.29,
                e + n * 0.27,
                0.022,
              );
            }
          }
        }
        c(`dark`, t, -0.3, 0, 0.3, 0.26, 0.26);
      } else if (e === `side` || e === `belt`) {
        (c(`paint`, t, -0.48, -0.41, 0.71, 0.65, 0.7),
          c(`rubber`, t, -0.82, -0.41, 0.77, 0.08, 0.76));
        for (let e = 0; e < 4; e++)
          c(
            `dark`,
            t - 0.25 + e * 0.16,
            -0.5,
            -0.775,
            0.055,
            0.41,
            0.018,
            0.007,
          );
        if (e === `belt`)
          for (let e = 0; e < 7; e++) {
            let n = -0.22 - e * 0.115,
              r = 0.08 - Math.max(0, e - 3) * 0.075;
            (l(`accent`, t, r, n, 0.043, 0.29),
              c(`dark`, t - 0.03, r, n, 0.048, 0.11, 0.067, 0.008));
          }
      } else if (e === `top`) {
        (c(`dark`, -0.04, 0.52, 0, x * 0.9, 0.22, 0.43),
          c(`glass`, -0.04, 0.65, 0, x * 0.76, 0.038, 0.34));
        for (let e = 0; e < 10; e++)
          c(
            `accent`,
            -x * 0.36 + e * x * 0.075,
            0.665,
            0,
            0.035,
            0.021,
            0.24,
            0.003,
          );
      } else if (e === `pan`) {
        (l(`paint`, -0.05, 0.51, 0, 0.64, 0.18, `y`),
          l(`dark`, -0.05, 0.62, 0, 0.5, 0.055, `y`),
          l(`accent`, -0.05, 0.66, 0, 0.12, 0.03, `y`));
        for (let e = 0; e < 20; e++) {
          let t = (e * Math.PI) / 10;
          p(
            `steel`,
            [-0.05 + Math.cos(t) * 0.2, 0.665, Math.sin(t) * 0.2],
            [-0.05 + Math.cos(t) * 0.47, 0.665, Math.sin(t) * 0.47],
            0.01,
          );
        }
      } else e === `tube` && N(w - 0.35, S * 0.9, 0.07, -0.16);
    }
  }
  function ne() {
    let t = S * 0.66,
      n = w + t / 2 - 0.05;
    e.fore === `wood`
      ? (s(
          `wood`,
          r
            ? [
                [w - 0.13, 0.13],
                [w + t, 0.13],
                [w + t - 0.06, -0.24],
                [w + 0.1, -0.26],
                [w - 0.13, -0.21],
              ]
            : [
                [w - 0.13, 0.13],
                [w + t, 0.13],
                [w + t - 0.1, -0.19],
                [w + 0.1, -0.32],
                [w - 0.13, -0.21],
              ],
          0.34,
        ),
        O((e) => {
          for (let r = 0; r < 4; r++)
            c(
              `grain`,
              n,
              -0.025 - r * 0.055,
              e * 0.179,
              t * 0.76,
              0.012,
              0.008,
              0.002,
            );
        }))
      : (c(`paint`, n, 0.025, 0, t, 0.41, 0.39),
        O((n) => {
          if (e.fore === `ribbed`)
            for (let e = 0; e < Math.floor(t / 0.105); e++)
              c(
                `rubber`,
                w + e * 0.105,
                0.02,
                n * 0.206,
                0.035,
                0.33,
                0.035,
                0.007,
              );
          else
            for (let e = 0; e < Math.floor(t / 0.2); e++)
              (c(
                `inset`,
                w + e * 0.2 + 0.05,
                0.07,
                n * 0.208,
                0.127,
                0.078,
                0.012,
                0.013,
              ),
                c(
                  `steel`,
                  w + e * 0.2 + 0.05,
                  -0.087,
                  n * 0.209,
                  0.127,
                  0.015,
                  0.014,
                  0.003,
                ));
          (m(w + 0.03, -0.12, n * 0.223, 0.03),
            m(w + t - 0.12, -0.12, n * 0.223, 0.03));
        }),
        j(n, 0.26, t * 0.92));
    for (let e of [w + 0.07, w + t - 0.13]) l(`dark`, e, 0.14, 0, 0.22, 0.045);
    if (
      (!r &&
        E % 3 == 0 &&
        (c(`rubber`, w + t * 0.56, -0.42, 0, 0.16, 0.49, 0.2),
        h(w + t * 0.56, -0.42, 0.11, 0.14, 0.32, 3)),
      r)
    ) {
      let n = w + 0.1,
        r = w + t - 0.12,
        i = e.fore === `wood` ? -0.26 : -0.18;
      c(`dark`, (n + r) / 2, i - 0.03, 0, r - n, 0.06, 0.2);
      for (let e = 0; e < Math.floor((r - n) / 0.115); e++)
        c(
          `steel`,
          n + e * 0.115 + 0.06,
          i - 0.065,
          0,
          0.065,
          0.03,
          0.24,
          0.005,
        );
      ((D.underbarrel = { pos: [(n + r) / 2, i - 0.08, 0], span: [n, r] }),
        (D.hands.support = [w + t * 0.42, -0.02, 0]));
    }
  }
  if (_) {
    if (
      (s(
        `dark`,
        [
          [T - 0.05, 0.02],
          [w, 0.02],
          [w, -0.22],
          [T + 0.03, -0.31],
          [T - 0.13, -0.16],
        ],
        C + 0.025,
      ),
      c(`paint`, 0.01, 0.2, 0, x, 0.34, C + 0.02),
      c(`steel`, w - 0.13, 0.381, 0, 0.31, 0.013, C * 0.74, 0.004),
      k(T + 0.29, e.grip, 0.93),
      A(T + 0.28),
      N(w - 0.08, S, 0.072, 0.2),
      P(w + S, 0.2),
      O((t) => {
        (h(T + 0.19, 0.23, t * (C / 2 + 0.025), 0.33, 0.2, 6),
          h(w - 0.19, 0.24, t * (C / 2 + 0.025), 0.27, 0.16, 4),
          c(`inset`, 0.02, 0.27, t * (C / 2 + 0.028), 0.29, 0.09, 0.012, 0.005),
          m(T + 0.2, -0.1, t * (C / 2 + 0.024), 0.035),
          g(`C / ${e.id}`, w - 0.15, 0.1, t * (C / 2 + 0.037), 0.35, 0.075));
      }),
      e.style === `target` || e.style === `heavy`)
    )
      for (let e = 0; e < 3; e++)
        c(`inset`, w - 0.16 + e * 0.14, 0.381, 0, 0.07, 0.01, 0.13, 0.005);
    (e.light &&
      (l(`dark`, w - 0.12, -0.31, 0, 0.12, 0.47),
      l(`glass`, w + 0.122, -0.31, 0, 0.09, 0.009)),
      ee(e.optic, T + 0.3, 0.43));
  } else if (v) {
    (s(
      `paint`,
      [
        [T - 0.1, 0.3],
        [w, 0.3],
        [w, -0.13],
        [0.1, -0.34],
        [T - 0.09, -0.25],
      ],
      C,
    ),
      l(`dark`, -0.02, 0.03, 0, 0.274, 0.61));
    for (let e = 0; e < 8; e++) {
      let t = (e * Math.PI) / 4;
      l(
        `steel`,
        -0.02,
        0.03 + Math.cos(t) * 0.235,
        Math.sin(t) * 0.235,
        0.038,
        0.46,
      );
    }
    for (let e of [-0.34, 0.3]) u(`accent`, e, 0.03, 0, 0.27, 0.025);
    if (
      (c(`dark`, 0.02, 0.36, 0, 0.94, 0.09, 0.17),
      k(T + 0.11, e.grip),
      A(T + 0.19),
      N(w - 0.09, S, 0.099, 0.16),
      (e.style === `shroud` || e.style === `bridge`) &&
        c(`paint`, w + S * 0.44, -0.015, 0, S * 0.95, 0.23, 0.22),
      e.style === `long`)
    )
      for (let e = 0; e < 6; e++)
        l(`accent`, w + S * 0.23 + e * 0.13, 0.16, 0, 0.12, 0.026);
    (e.style === `bridge` && p(`paint`, [T, 0.4, 0], [w + 0.46, 0.4, 0], 0.05),
      (c(`dark`, T - 0.035, 0.27, 0, 0.18, 0.22, 0.12).rotation.z = 0.4),
      O((t) => {
        (m(T + 0.1, 0.05, C * 0.56 * t),
          g(
            e.name.toUpperCase(),
            w + S * 0.4,
            0.06,
            t * 0.125,
            S * 0.5,
            0.085,
          ));
      }),
      ee(e.optic, 0, 0.45));
  } else {
    let t =
      r && e.feed
        ? (() => {
            let t = (y ? 0.24 : T + 0.43) - 0.12 + e.feed.ahead;
            return { x0: t, a: t - 0.35, b: t + 0.35, tray: e.feed.tray };
          })()
        : null;
    if (
      (s(
        `paint`,
        t
          ? [
              [T, 0.31],
              [t.a, 0.31],
              [t.a, t.tray],
              [t.b, t.tray],
              [t.b, 0.31],
              [w - 0.12, 0.31],
              [w + 0.1, 0.12],
              [w - 0.04, -0.21],
              [T + 0.12, -0.29],
              [T - 0.06, -0.09],
            ]
          : [
              [T, 0.31],
              [w - 0.12, 0.31],
              [w + 0.1, 0.12],
              [w - 0.04, -0.21],
              [T + 0.12, -0.29],
              [T - 0.06, -0.09],
            ],
        C,
      ),
      t)
    ) {
      let e = -0.08 - x * 0.465,
        r = -0.08 + x * 0.465;
      (c(`dark`, (e + t.a) / 2, 0.33, 0, t.a - e, 0.1, C * 0.8),
        c(`dark`, (t.b + r) / 2, 0.33, 0, r - t.b, 0.1, C * 0.8),
        c(`steel`, t.x0, t.tray - 0.01, 0, t.b - t.a, 0.02, C * 0.7));
      let o = new M();
      (o.position.set(t.b, 0.38, 0), (o.userData.cover = !0), i.add(o));
      let s = $n(o, a, !!n.lite),
        l = -(t.b - t.a) / 2;
      (s.box(`dark`, l, -0.035, 0, t.b - t.a, 0.07, C * 0.9),
        s.box(`dark`, l, 0.05, 0, t.b - t.a, 0.06, 0.23));
      for (let e = 0; e < 6; e++)
        s.box(
          `steel`,
          -(t.b - t.a) + 0.06 + e * 0.115,
          0.085,
          0,
          0.065,
          0.035,
          0.27,
          0.005,
        );
      let u = new M();
      (u.position.set(t.x0, t.tray, 0), (u.userData.belt = !0), i.add(u));
      let d = $n(u, a, !!n.lite);
      for (let e = 0; e < 5; e++)
        (d.cyl(`accent`, -0.2 + e * 0.1, 0.045, 0, 0.04, C * 0.6, `z`),
          d.box(`dark`, -0.2 + e * 0.1, 0.02, 0, 0.05, 0.03, C * 0.5));
      D.feed = { x: t.x0, tray: t.tray, span: [t.a, t.b] };
    } else c(`dark`, -0.08, 0.33, 0, x * 0.93, 0.1, C * 0.8);
    if (e.style === `tiles`)
      for (let e = 0; e < 3; e++)
        c(`steel`, T + 0.3 + e * 0.56, 0.18, 0, 0.44, 0.35, C + 0.045);
    e.style === `wedge` &&
      s(
        `paint`,
        [
          [T, 0.31],
          [w + 0.36, 0.24],
          [w + 0.18, -0.45],
          [T, -0.34],
        ],
        C + 0.09,
      );
    let o = y ? 0.24 : T + 0.43;
    (k(o, `angled`, y ? 0.82 : 1), A(o + 0.01), te(e.stock));
    let d = y ? T + 0.32 : e.mag === `grip` ? -0.44 : 0.31,
      f = e.family === `Support studies` ? 0.115 : 0.089,
      h = w + S * 0.66 - 0.05;
    if (
      (r
        ? ((D.magwell =
            e.mag === `top`
              ? { pos: [-0.04, 0.41, 0], kind: `top`, length: x * 0.9 }
              : { pos: [d, -0.17, 0], kind: e.mag }),
          (D.hands = { trigger: [o - 0.12, -0.36, 0] }),
          l(`dark`, (w - 0.06 + h) / 2, 0.14, 0, f, h - w + 0.06),
          (D.barrel = {
            pos: [h, 0.14, 0],
            radius: f,
            length: +(w - 0.06 + S + 0.078 - h).toFixed(4),
          }))
        : (I(e.mag, d), N(w - 0.06, S, f)),
      ne(),
      r || P(w + S),
      e.style === `double` &&
        (N(w - 0.03, S, 0.12, 0.16, -0.19),
        N(w - 0.03, S, 0.12, 0.16, 0.19),
        c(`steel`, w + S * 0.5, 0.29, 0, S, 0.035, 0.14, 0.005)),
      e.style === `overunder` && N(w - 0.03, S, 0.107, -0.14),
      e.style === `pump`)
    )
      for (let e = 0; e < 9; e++)
        u(`rubber`, w + 0.3 + e * 0.09, -0.12, 0, 0.166, 0.025);
    if (e.style === `heavy`)
      for (let e = 0; e < 9; e++)
        (!r || w + S * 0.6 + e * 0.08 < h - 0.04) &&
          l(`steel`, w + S * 0.6 + e * 0.08, 0.14, 0, 0.14, 0.025);
    if (e.family === `Support studies`) {
      if (r) {
        for (let e of [-0.38, 0.44])
          p(`dark`, [e, 0.2, -0.19], [e, 0.44, -0.36], 0.046);
        p(`rubber`, [-0.38, 0.44, -0.36], [0.44, 0.44, -0.36], 0.078);
      } else {
        for (let e of [-0.38, 0.44])
          p(`dark`, [e, 0.38, -0.12], [e, 0.88, -0.12], 0.046);
        p(`rubber`, [-0.38, 0.88, -0.12], [0.44, 0.88, -0.12], 0.078);
      }
    }
    if (r) {
      let t = e.mag === `top`,
        n = t ? -0.04 : -0.08,
        r = t ? 0.78 : 0.43,
        i = t ? x * 0.6 : x * 0.81,
        a = r + 0.0525;
      if (t)
        for (let e of [n - i * 0.36, n + i * 0.36])
          (O((t) => c(`dark`, e, 0.575, t * 0.24, 0.12, 0.42, 0.03, 0.008)),
            c(`dark`, e, 0.735, 0, 0.12, 0.03, 0.51, 0.008));
      if (D.feed) {
        let [e, t] = D.feed.span,
          a = n - i / 2,
          o = n + i / 2;
        (j((a + e) / 2, r, e - a), j((t + o) / 2, r, o - t));
      } else j(n, r, i);
      let o = n - i / 2,
        s = n + i / 2,
        l = a + 0.13;
      (F(o + 0.1, a, l, -1),
        F(s - 0.1, a, l, 1),
        (D.rail = {
          pos: [n, +a.toFixed(4), 0],
          length: +i.toFixed(4),
          zone: [+(o + 0.2).toFixed(4), +(s - 0.2).toFixed(4)],
        }),
        (D.irons = {
          eye: [+(o + 0.1).toFixed(4), +l.toFixed(4), 0],
          rear: o + 0.1,
          front: s - 0.1,
        }));
    } else
      (j(-0.08, 0.43, x * 0.81),
        ee(
          e.optic,
          e.mag === `top` ? w * 0.7 : -0.15,
          e.mag === `top` ? 0.75 : 0.5,
        ));
    if (
      (O((t) => {
        (c(
          `dark`,
          -0.05,
          0.12,
          t * (C / 2 + 0.009),
          x * 0.55,
          0.15,
          0.028,
          0.011,
        ),
          c(`steel`, 0.1, 0.12, t * (C / 2 + 0.027), 0.28, 0.08, 0.018, 0.005),
          l(`dark`, -0.17, 0.09, t * (C / 2 + 0.1), 0.043, 0.19, `z`),
          (c(
            `accent`,
            T + 0.25,
            -0.05,
            t * (C / 2 + 0.027),
            0.17,
            0.055,
            0.028,
            0.004,
          ).rotation.z = 0.28));
        for (let e of [T + 0.12, w - 0.16])
          for (let n of [-0.12, 0.22]) m(e, n, t * (C / 2 + 0.028), 0.031);
        (g(
          `${e.name.toUpperCase()} / ${e.id}`,
          T + x * 0.4,
          -0.13,
          t * (C / 2 + 0.029),
          x * 0.5,
          0.082,
        ),
          g(
            `CUBIE  •  STUDY`,
            T + x * 0.41,
            0.267,
            t * (C / 2 + 0.023),
            x * 0.46,
            0.064,
          ));
        for (let e = 0; e < 3; e++)
          c(
            `accent`,
            w - 0.13 - e * 0.08,
            -0.18,
            t * (C / 2 + 0.03),
            0.036,
            0.045,
            0.014,
            0.003,
          );
      }),
      u(`dark`, w - 0.11, -0.26, 0.23, 0.068, 0.021, `z`),
      e.bipod && !r)
    ) {
      let e = w + S * 0.62;
      l(`dark`, e, -0.22, 0, 0.085, 0.41, `z`);
      for (let t of [-1, 1])
        (p(`dark`, [e, -0.21, t * 0.13], [e + 0.21, -0.86, t * 0.46], 0.043),
          p(
            `steel`,
            [e + 0.12, -0.64, t * 0.35],
            [e + 0.23, -1.02, t * 0.53],
            0.025,
          ),
          c(`rubber`, e + 0.25, -1.035, t * 0.54, 0.22, 0.06, 0.17));
    }
  }
  if (b) {
    let n = w + S * 0.6;
    if (e.style === `prongs`)
      for (let e of [-1, 1])
        (c(`dark`, n, 0.19, e * 0.3, S * 1.04, 0.2, 0.15),
          c(`glow`, n, 0.2, e * 0.385, S * 0.8, 0.043, 0.018, 0.003),
          s(
            `steel`,
            [
              [w + S * 0.9, 0.27],
              [w + S * 1.22, 0.18],
              [w + S, 0.07],
            ],
            0.17,
            e * 0.3,
          ));
    else if (e.style === `rings`)
      for (let e = 0; e < 6; e++)
        (u(
          e % 2 ? `steel` : `paint`,
          w + 0.22 + e * 0.24,
          0.14,
          0,
          0.29 + e * 0.01,
          0.065,
        ),
          u(`glow`, w + 0.24 + e * 0.24, 0.14, 0, 0.24 + e * 0.01, 0.018));
    else if (e.style === `cage`) {
      for (let e = 0; e < 3; e++) {
        let t = (e * Math.PI * 2) / 3;
        p(
          `accent`,
          [w, 0.14 + Math.cos(t) * 0.28, Math.sin(t) * 0.28],
          [w + S, 0.14 + Math.cos(t + 0.5) * 0.28, Math.sin(t + 0.5) * 0.28],
          0.065,
        );
      }
      for (let e of [0, 0.5, 1]) u(`paint`, w + S * e, 0.14, 0, 0.36, 0.058);
    } else if (e.style === `fins`)
      for (let e = 0; e < 7; e++) {
        let t = w + e * 0.2;
        (s(
          `paint`,
          [
            [t, 0.13],
            [t + 0.22, 0.7 - e * 0.035],
            [t + 0.32, 0.14],
            [t + 0.18, -0.31],
          ],
          0.09,
        ),
          c(`glow`, t + 0.18, 0.24, 0.065, 0.048, 0.19, 0.018, 0.004));
      }
    else if (e.style === `dish`) {
      (l(`paint`, w + S, 0.14, 0, 0.17, 0.38, `x`, 0.43),
        u(`steel`, w + S + 0.2, 0.14, 0, 0.41, 0.038),
        l(`inset`, w + S + 0.196, 0.14, 0, 0.34, 0.015),
        u(`glow`, w + S + 0.209, 0.14, 0, 0.24, 0.022));
      let e = new t([
        new L(T, -0.12, 0.24),
        new L(0, -0.73, 0.45),
        new L(w + 0.5, -0.3, 0.44),
        new L(w + 0.6, 0.15, 0.2),
      ]);
      o.mesh(new d(e, 36, 0.047, 8, !1), `accent`);
    }
    for (let e = 0; e < 4; e++)
      c(
        `glow`,
        T + 0.23 + e * 0.18,
        0.18,
        C / 2 + 0.048,
        0.085,
        0.023,
        0.025,
        0.004,
      );
  }
  if (r)
    return (
      (i.userData.sockets = D),
      (i.userData.stock = T - 0.08 - 1.32),
      i.updateMatrixWorld(!0),
      i
    );
  i.updateMatrixWorld(!0);
  let re = new f().setFromObject(i).getCenter(new L());
  for (let e of i.children) e.position.sub(re);
  return (
    i.updateMatrixWorld(!0),
    (i.userData.bounds = new f().setFromObject(i)),
    i
  );
}
