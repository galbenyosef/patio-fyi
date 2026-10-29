// assets__ui-hhE6L1u7 12 — math
// Lines 3809-4739 of readable/assets__ui-hhE6L1u7.pretty.js (statement-aligned).
function yr(e, t = {}) {
  typeof e == `string` && (e = gr.find((t) => t.id === e));
  let n = !!t.bare;
  if (!e || !(n ? gr.some((t) => t.id === e.id) : gr.includes(e)))
    throw Error(`Unknown gun study`);
  let r = new w();
  ((r.name = `${e.id} — ${e.name}`), (r.userData.spec = e));
  let i = _r(e),
    a = vr(r, i, !!t.lite);
  r.userData.materials = Object.values(i);
  let {
      profile: s,
      box: l,
      cyl: u,
      ring: d,
      beam: p,
      bolt: h,
      grooves: g,
      label: _,
    } = a,
    v = e.family === `Sidearms`,
    y = e.family === `Wheelguns`,
    b = e.family === `Bullpups`,
    x = e.family === `Speculative forms`,
    S = e.body,
    C = e.barrel,
    T = v ? 0.24 : y ? 0.3 : 0.38,
    E = S * 0.5,
    D = -S * 0.5,
    O = Number(e.id),
    k = {};
  if (n && (v || y || x)) throw Error(`Armory guns use the long-gun body`);
  let A = (e) => {
    for (let t of [-1, 1]) e(t);
  };
  function j(t = -0.36, n = e.grip || `angled`, r = 1) {
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
    (s(a, o, T * 0.92),
      A((e) => {
        let n = e * T * 0.49;
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
            s = l(
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
        (h(t - 0.14, -0.41, n + e * 0.029, 0.032),
          h(t - 0.24, -0.79 * r, n + e * 0.029, 0.032));
      }),
      l(`dark`, t - 0.2, -0.98 * r, 0, 0.39, 0.07, T));
  }
  function M(e = -0.2) {
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
  function N(e, t, n) {
    l(`dark`, e, t, 0, n, 0.06, 0.23);
    for (let r = 0; r < Math.floor(n / 0.115); r++)
      l(
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
  function P(e, t = 0, n = 0.42) {
    if (e === `iron`) {
      for (let e of [D + 0.14, E + C * 0.84])
        (e > E &&
          l(
            `dark`,
            e,
            (n - 0.06 + 0.14) / 2,
            0,
            0.07,
            n - 0.06 - 0.14 + 0.03,
            0.1,
            0.009,
          ),
          l(`dark`, e, n, 0, 0.12, 0.12, 0.16),
          l(`accent`, e, n + 0.08, 0, 0.025, 0.05, 0.04, 0.003));
      return;
    }
    if (e === `bridge`) {
      for (let e of [t - 0.44, t + 0.44])
        l(`paint`, e, n + 0.14, 0, 0.11, 0.32, 0.15);
      (l(`dark`, t, n + 0.31, 0, 1.02, 0.1, 0.18),
        g(t, n + 0.31, 0.099, 0.77, 0.045, 8));
      return;
    }
    if (e === `reflex` || e === `offset`) {
      let r = e === `offset` ? 0.28 : 0;
      l(`dark`, t, n, r, 0.4, 0.075, 0.28);
      for (let e of [-1, 1])
        l(`paint`, t, n + 0.2, r + e * 0.135, 0.14, 0.32, 0.038);
      l(`paint`, t, n + 0.37, r, 0.15, 0.035, 0.3);
      let a = l(`glass`, t, n + 0.2, r, 0.028, 0.23, 0.23, 0.005);
      ((a.material = i.glass),
        u(`accent`, t + 0.04, n + 0.09, r + 0.2, 0.06, 0.07, `z`));
      return;
    }
    let r = e === `longscope` ? 1.69 : 1.02,
      a = t + 0.05;
    for (let e of [-0.25, 0.25])
      (l(`dark`, a + e, n + 0.075, 0, 0.14, 0.16, 0.22),
        d(`paint`, a + e, n + 0.24, 0, 0.127, 0.03));
    (u(`dark`, a, n + 0.24, 0, 0.105, r),
      u(`paint`, a + r / 2 - 0.05, n + 0.24, 0, 0.18, 0.29, `x`, 0.22),
      u(`glass`, a + r / 2 + 0.099, n + 0.24, 0, 0.19, 0.008),
      d(`rubber`, a + r / 2 + 0.11, n + 0.24, 0, 0.206, 0.022),
      u(`paint`, a - r / 2 + 0.05, n + 0.24, 0, 0.135, 0.25),
      u(`glass`, a - r / 2 - 0.08, n + 0.24, 0, 0.109, 0.008),
      u(`dark`, a, n + 0.41, 0, 0.085, 0.16, `y`),
      u(`accent`, a, n + 0.49, 0, 0.09, 0.03, `y`),
      u(`dark`, a, n + 0.25, 0.155, 0.075, 0.13, `z`),
      g(a, n + 0.27, 0.225, 0.08, 0.07, 4));
  }
  function F(e, t, n = 0.085, r = 0.14, i = 0) {
    (u(`dark`, e + t / 2, r, i, n, t),
      u(`steel`, e + t * 0.65, r, i, n * 1.06, 0.055),
      u(`dark`, e + t - 0.02, r, i, n * 1.42, 0.17),
      u(`inset`, e + t + 0.07, r, i, n * 0.86, 0.007),
      d(`steel`, e + t + 0.078, r, i, n * 1.09, n * 0.17));
  }
  function ee(t, n = 0.14) {
    if (e.muzzle === `hush`) {
      (u(`dark`, t + 0.3, n, 0, 0.18, 0.72),
        u(`paint`, t + 0.29, n, 0, 0.184, 0.48));
      for (let e of [-0.03, 0.08, 0.55, 0.64])
        d(`steel`, t + e, n, 0, 0.18, 0.012);
      (u(`inset`, t + 0.667, n, 0, 0.143, 0.008),
        d(`steel`, t + 0.674, n, 0, 0.14, 0.027),
        A((e) => g(t + 0.29, n, e * 0.183, 0.36, 0.04, 6)));
    } else
      e.muzzle === `brake` &&
        (l(`dark`, t + 0.16, n, 0, 0.42, 0.24, 0.26),
        A((e) => {
          for (let r = 0; r < 3; r++)
            l(
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
        u(`inset`, t + 0.383, n, 0, 0.063, 0.008),
        d(`steel`, t + 0.39, n, 0, 0.082, 0.018));
  }
  function te(e, n, a, o) {
    let s = new w();
    (s.position.set(e, n, 0),
      (s.userData.iron = o > 0 ? `front` : `rear`),
      r.add(s));
    let c = vr(s, i, !!t.lite),
      l = a - n;
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
  function I(e) {
    let t = D - 0.08,
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
        l(`rubber`, t - 0.82, -0.12, 0, 0.1, 0.69, 0.49));
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
          (l(`wood`, t - 0.56, 0.26, 0, 0.79, 0.2, 0.37),
          p(`wood`, [n + 0.1, -0.61, 0], [t + 0.28, -0.61, 0], 0.075)),
        A((e) => {
          (h(t - 0.35, -0.16, e * 0.181), h(n + 0.24, -0.31, e * 0.181, 0.03));
        }),
        l(`rubber`, n - 0.03, -0.33, 0, 0.09, 0.76, 0.37));
    else {
      (e === `wire` || e === `rails` || e === `skeleton`
        ? (p(`steel`, [t, 0.12, -0.115], [n, 0.11, -0.115], 0.042),
          p(`steel`, [t, 0.12, 0.115], [n, 0.11, 0.115], 0.042),
          e === `skeleton`
            ? p(`paint`, [t, -0.12, 0], [n, -0.57, 0], 0.075)
            : p(`dark`, [t, -0.2, 0], [n, -0.4, 0], 0.04))
        : (u(`steel`, t - 0.56, 0.05, 0, 0.08, 1.1),
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
          A((e) => {
            (g(n + 0.34, -0.13, e * 0.17, 0.33, 0.13, 4),
              h(n + 0.22, 0.03, e * 0.182));
          })),
        l(`rubber`, n, -0.2, 0, 0.12, 0.83, 0.4));
      for (let e = 0; e < 8; e++)
        l(`dark`, n - 0.068, -0.53 + e * 0.089, 0, 0.018, 0.025, 0.42, 0.003);
      if (e === `precision`) {
        l(`rubber`, t - 0.75, 0.32, 0, 0.91, 0.17, 0.32);
        for (let e of [t - 0.42, t - 0.91])
          u(`steel`, e, 0.19, 0, 0.028, 0.23, `y`);
        u(`accent`, t - 0.53, -0.23, 0.22, 0.068, 0.06, `z`);
      }
    }
    (d(`dark`, n + 0.19, -0.58, 0.19, 0.082, 0.019, `z`),
      u(`dark`, t, -0.02, 0, 0.18, 0.16),
      A((e) => h(t, -0.02, e * 0.2, 0.075)));
  }
  function ne(e, t = 0.33) {
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
          A((i) => {
            for (let a = 0; a < 3; a++) {
              let o = l(
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
            l(
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
          l(`rubber`, t + r, -n - 0.015, 0, 0.47, 0.09, 0.35));
      } else if (e === `drum` || e === `twin`) {
        let n = e === `twin` ? [-0.35, 0.35] : [0];
        for (let e of n) {
          u(`paint`, t, -0.67, e, 0.43, 0.42, `z`);
          for (let n of [-1, 1]) {
            (u(`dark`, t, -0.67, e + n * 0.225, 0.355, 0.031, `z`),
              d(`steel`, t, -0.67, e + n * 0.247, 0.29, 0.019, `z`),
              u(`accent`, t, -0.67, e + n * 0.254, 0.095, 0.023, `z`));
            for (let r = 0; r < 8; r++) {
              let i = (r * Math.PI) / 4;
              h(
                t + Math.cos(i) * 0.29,
                -0.67 + Math.sin(i) * 0.29,
                e + n * 0.27,
                0.022,
              );
            }
          }
        }
        l(`dark`, t, -0.3, 0, 0.3, 0.26, 0.26);
      } else if (e === `side` || e === `belt`) {
        (l(`paint`, t, -0.48, -0.41, 0.71, 0.65, 0.7),
          l(`rubber`, t, -0.82, -0.41, 0.77, 0.08, 0.76));
        for (let e = 0; e < 4; e++)
          l(
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
            (u(`accent`, t, r, n, 0.043, 0.29),
              l(`dark`, t - 0.03, r, n, 0.048, 0.11, 0.067, 0.008));
          }
      } else if (e === `top`) {
        (l(`dark`, -0.04, 0.52, 0, S * 0.9, 0.22, 0.43),
          l(`glass`, -0.04, 0.65, 0, S * 0.76, 0.038, 0.34));
        for (let e = 0; e < 10; e++)
          l(
            `accent`,
            -S * 0.36 + e * S * 0.075,
            0.665,
            0,
            0.035,
            0.021,
            0.24,
            0.003,
          );
      } else if (e === `pan`) {
        (u(`paint`, -0.05, 0.51, 0, 0.64, 0.18, `y`),
          u(`dark`, -0.05, 0.62, 0, 0.5, 0.055, `y`),
          u(`accent`, -0.05, 0.66, 0, 0.12, 0.03, `y`));
        for (let e = 0; e < 20; e++) {
          let t = (e * Math.PI) / 10;
          p(
            `steel`,
            [-0.05 + Math.cos(t) * 0.2, 0.665, Math.sin(t) * 0.2],
            [-0.05 + Math.cos(t) * 0.47, 0.665, Math.sin(t) * 0.47],
            0.01,
          );
        }
      } else e === `tube` && F(E - 0.35, C * 0.9, 0.07, -0.16);
    }
  }
  function L() {
    let t = C * 0.66,
      r = E + t / 2 - 0.05;
    e.fore === `wood`
      ? (s(
          `wood`,
          n
            ? [
                [E - 0.13, 0.13],
                [E + t, 0.13],
                [E + t - 0.06, -0.24],
                [E + 0.1, -0.26],
                [E - 0.13, -0.21],
              ]
            : [
                [E - 0.13, 0.13],
                [E + t, 0.13],
                [E + t - 0.1, -0.19],
                [E + 0.1, -0.32],
                [E - 0.13, -0.21],
              ],
          0.34,
        ),
        A((e) => {
          for (let n = 0; n < 4; n++)
            l(
              `grain`,
              r,
              -0.025 - n * 0.055,
              e * 0.179,
              t * 0.76,
              0.012,
              0.008,
              0.002,
            );
        }))
      : (l(`paint`, r, 0.025, 0, t, 0.41, 0.39),
        A((n) => {
          if (e.fore === `ribbed`)
            for (let e = 0; e < Math.floor(t / 0.105); e++)
              l(
                `rubber`,
                E + e * 0.105,
                0.02,
                n * 0.206,
                0.035,
                0.33,
                0.035,
                0.007,
              );
          else
            for (let e = 0; e < Math.floor(t / 0.2); e++)
              (l(
                `inset`,
                E + e * 0.2 + 0.05,
                0.07,
                n * 0.208,
                0.127,
                0.078,
                0.012,
                0.013,
              ),
                l(
                  `steel`,
                  E + e * 0.2 + 0.05,
                  -0.087,
                  n * 0.209,
                  0.127,
                  0.015,
                  0.014,
                  0.003,
                ));
          (h(E + 0.03, -0.12, n * 0.223, 0.03),
            h(E + t - 0.12, -0.12, n * 0.223, 0.03));
        }),
        N(r, 0.26, t * 0.92));
    for (let e of [E + 0.07, E + t - 0.13]) u(`dark`, e, 0.14, 0, 0.22, 0.045);
    if (
      (!n &&
        O % 3 == 0 &&
        (l(`rubber`, E + t * 0.56, -0.42, 0, 0.16, 0.49, 0.2),
        g(E + t * 0.56, -0.42, 0.11, 0.14, 0.32, 3)),
      n)
    ) {
      let n = E + 0.1,
        r = E + t - 0.12,
        i = e.fore === `wood` ? -0.26 : -0.18;
      l(`dark`, (n + r) / 2, i - 0.03, 0, r - n, 0.06, 0.2);
      for (let e = 0; e < Math.floor((r - n) / 0.115); e++)
        l(
          `steel`,
          n + e * 0.115 + 0.06,
          i - 0.065,
          0,
          0.065,
          0.03,
          0.24,
          0.005,
        );
      ((k.underbarrel = { pos: [(n + r) / 2, i - 0.08, 0], span: [n, r] }),
        (k.hands.support = [E + t * 0.42, -0.02, 0]));
    }
  }
  if (v) {
    if (
      (s(
        `dark`,
        [
          [D - 0.05, 0.02],
          [E, 0.02],
          [E, -0.22],
          [D + 0.03, -0.31],
          [D - 0.13, -0.16],
        ],
        T + 0.025,
      ),
      l(`paint`, 0.01, 0.2, 0, S, 0.34, T + 0.02),
      l(`steel`, E - 0.13, 0.381, 0, 0.31, 0.013, T * 0.74, 0.004),
      j(D + 0.29, e.grip, 0.93),
      M(D + 0.28),
      F(E - 0.08, C, 0.072, 0.2),
      ee(E + C, 0.2),
      A((t) => {
        (g(D + 0.19, 0.23, t * (T / 2 + 0.025), 0.33, 0.2, 6),
          g(E - 0.19, 0.24, t * (T / 2 + 0.025), 0.27, 0.16, 4),
          l(`inset`, 0.02, 0.27, t * (T / 2 + 0.028), 0.29, 0.09, 0.012, 0.005),
          h(D + 0.2, -0.1, t * (T / 2 + 0.024), 0.035),
          _(`C / ${e.id}`, E - 0.15, 0.1, t * (T / 2 + 0.037), 0.35, 0.075));
      }),
      e.style === `target` || e.style === `heavy`)
    )
      for (let e = 0; e < 3; e++)
        l(`inset`, E - 0.16 + e * 0.14, 0.381, 0, 0.07, 0.01, 0.13, 0.005);
    (e.light &&
      (u(`dark`, E - 0.12, -0.31, 0, 0.12, 0.47),
      u(`glass`, E + 0.122, -0.31, 0, 0.09, 0.009)),
      P(e.optic, D + 0.3, 0.43));
  } else if (y) {
    (s(
      `paint`,
      [
        [D - 0.1, 0.3],
        [E, 0.3],
        [E, -0.13],
        [0.1, -0.34],
        [D - 0.09, -0.25],
      ],
      T,
    ),
      u(`dark`, -0.02, 0.03, 0, 0.274, 0.61));
    for (let e = 0; e < 8; e++) {
      let t = (e * Math.PI) / 4;
      u(
        `steel`,
        -0.02,
        0.03 + Math.cos(t) * 0.235,
        Math.sin(t) * 0.235,
        0.038,
        0.46,
      );
    }
    for (let e of [-0.34, 0.3]) d(`accent`, e, 0.03, 0, 0.27, 0.025);
    if (
      (l(`dark`, 0.02, 0.36, 0, 0.94, 0.09, 0.17),
      j(D + 0.11, e.grip),
      M(D + 0.19),
      F(E - 0.09, C, 0.099, 0.16),
      (e.style === `shroud` || e.style === `bridge`) &&
        l(`paint`, E + C * 0.44, -0.015, 0, C * 0.95, 0.23, 0.22),
      e.style === `long`)
    )
      for (let e = 0; e < 6; e++)
        u(`accent`, E + C * 0.23 + e * 0.13, 0.16, 0, 0.12, 0.026);
    (e.style === `bridge` && p(`paint`, [D, 0.4, 0], [E + 0.46, 0.4, 0], 0.05),
      (l(`dark`, D - 0.035, 0.27, 0, 0.18, 0.22, 0.12).rotation.z = 0.4),
      A((t) => {
        (h(D + 0.1, 0.05, T * 0.56 * t),
          _(
            e.name.toUpperCase(),
            E + C * 0.4,
            0.06,
            t * 0.125,
            C * 0.5,
            0.085,
          ));
      }),
      P(e.optic, 0, 0.45));
  } else {
    let a =
      n && e.feed
        ? (() => {
            let t = (b ? 0.24 : D + 0.43) - 0.12 + e.feed.ahead;
            return { x0: t, a: t - 0.35, b: t + 0.35, tray: e.feed.tray };
          })()
        : null;
    if (
      (s(
        `paint`,
        a
          ? [
              [D, 0.31],
              [a.a, 0.31],
              [a.a, a.tray],
              [a.b, a.tray],
              [a.b, 0.31],
              [E - 0.12, 0.31],
              [E + 0.1, 0.12],
              [E - 0.04, -0.21],
              [D + 0.12, -0.29],
              [D - 0.06, -0.09],
            ]
          : [
              [D, 0.31],
              [E - 0.12, 0.31],
              [E + 0.1, 0.12],
              [E - 0.04, -0.21],
              [D + 0.12, -0.29],
              [D - 0.06, -0.09],
            ],
        T,
      ),
      a)
    ) {
      let e = -0.08 - S * 0.465,
        n = -0.08 + S * 0.465;
      (l(`dark`, (e + a.a) / 2, 0.33, 0, a.a - e, 0.1, T * 0.8),
        l(`dark`, (a.b + n) / 2, 0.33, 0, n - a.b, 0.1, T * 0.8),
        l(`steel`, a.x0, a.tray - 0.01, 0, a.b - a.a, 0.02, T * 0.7));
      let o = new w();
      (o.position.set(a.b, 0.38, 0), (o.userData.cover = !0), r.add(o));
      let s = vr(o, i, !!t.lite),
        c = -(a.b - a.a) / 2;
      (s.box(`dark`, c, -0.035, 0, a.b - a.a, 0.07, T * 0.9),
        s.box(`dark`, c, 0.05, 0, a.b - a.a, 0.06, 0.23));
      for (let e = 0; e < 6; e++)
        s.box(
          `steel`,
          -(a.b - a.a) + 0.06 + e * 0.115,
          0.085,
          0,
          0.065,
          0.035,
          0.27,
          0.005,
        );
      let u = new w();
      (u.position.set(a.x0, a.tray, 0), (u.userData.belt = !0), r.add(u));
      let d = vr(u, i, !!t.lite);
      for (let e = 0; e < 5; e++)
        (d.cyl(`accent`, -0.2 + e * 0.1, 0.045, 0, 0.04, T * 0.6, `z`),
          d.box(`dark`, -0.2 + e * 0.1, 0.02, 0, 0.05, 0.03, T * 0.5));
      k.feed = { x: a.x0, tray: a.tray, span: [a.a, a.b] };
    } else l(`dark`, -0.08, 0.33, 0, S * 0.93, 0.1, T * 0.8);
    if (e.style === `tiles`)
      for (let e = 0; e < 3; e++)
        l(`steel`, D + 0.3 + e * 0.56, 0.18, 0, 0.44, 0.35, T + 0.045);
    e.style === `wedge` &&
      s(
        `paint`,
        [
          [D, 0.31],
          [E + 0.36, 0.24],
          [E + 0.18, -0.45],
          [D, -0.34],
        ],
        T + 0.09,
      );
    let o = b ? 0.24 : D + 0.43;
    (j(o, `angled`, b ? 0.82 : 1), M(o + 0.01), I(e.stock));
    let c = b ? D + 0.32 : e.mag === `grip` ? -0.44 : 0.31,
      f = e.family === `Support studies` ? 0.115 : 0.089,
      m = E + C * 0.66 - 0.05;
    if (
      (n
        ? ((k.magwell =
            e.mag === `top`
              ? { pos: [-0.04, 0.41, 0], kind: `top`, length: S * 0.9 }
              : { pos: [c, -0.17, 0], kind: e.mag }),
          (k.hands = { trigger: [o - 0.12, -0.36, 0] }),
          u(`dark`, (E - 0.06 + m) / 2, 0.14, 0, f, m - E + 0.06),
          (k.barrel = {
            pos: [m, 0.14, 0],
            radius: f,
            length: +(E - 0.06 + C + 0.078 - m).toFixed(4),
          }))
        : (ne(e.mag, c), F(E - 0.06, C, f)),
      L(),
      n || ee(E + C),
      e.style === `double` &&
        (F(E - 0.03, C, 0.12, 0.16, -0.19),
        F(E - 0.03, C, 0.12, 0.16, 0.19),
        l(`steel`, E + C * 0.5, 0.29, 0, C, 0.035, 0.14, 0.005)),
      e.style === `overunder` && F(E - 0.03, C, 0.107, -0.14),
      e.style === `pump`)
    )
      for (let e = 0; e < 9; e++)
        d(`rubber`, E + 0.3 + e * 0.09, -0.12, 0, 0.166, 0.025);
    if (e.style === `heavy`)
      for (let e = 0; e < 9; e++)
        (!n || E + C * 0.6 + e * 0.08 < m - 0.04) &&
          u(`steel`, E + C * 0.6 + e * 0.08, 0.14, 0, 0.14, 0.025);
    if (e.family === `Support studies`) {
      if (n) {
        for (let e of [-0.38, 0.44])
          p(`dark`, [e, 0.2, -0.19], [e, 0.44, -0.36], 0.046);
        p(`rubber`, [-0.38, 0.44, -0.36], [0.44, 0.44, -0.36], 0.078);
      } else {
        for (let e of [-0.38, 0.44])
          p(`dark`, [e, 0.38, -0.12], [e, 0.88, -0.12], 0.046);
        p(`rubber`, [-0.38, 0.88, -0.12], [0.44, 0.88, -0.12], 0.078);
      }
    }
    if (n) {
      let t = e.mag === `top`,
        n = t ? -0.04 : -0.08,
        r = t ? 0.78 : 0.43,
        i = t ? S * 0.6 : S * 0.81,
        a = r + 0.0525;
      if (t)
        for (let e of [n - i * 0.36, n + i * 0.36])
          (A((t) => l(`dark`, e, 0.575, t * 0.24, 0.12, 0.42, 0.03, 0.008)),
            l(`dark`, e, 0.735, 0, 0.12, 0.03, 0.51, 0.008));
      if (k.feed) {
        let [e, t] = k.feed.span,
          a = n - i / 2,
          o = n + i / 2;
        (N((a + e) / 2, r, e - a), N((t + o) / 2, r, o - t));
      } else N(n, r, i);
      let o = n - i / 2,
        s = n + i / 2,
        c = a + 0.13;
      (te(o + 0.1, a, c, -1),
        te(s - 0.1, a, c, 1),
        (k.rail = {
          pos: [n, +a.toFixed(4), 0],
          length: +i.toFixed(4),
          zone: [+(o + 0.2).toFixed(4), +(s - 0.2).toFixed(4)],
        }),
        (k.irons = {
          eye: [+(o + 0.1).toFixed(4), +c.toFixed(4), 0],
          rear: o + 0.1,
          front: s - 0.1,
        }));
    } else
      (N(-0.08, 0.43, S * 0.81),
        P(
          e.optic,
          e.mag === `top` ? E * 0.7 : -0.15,
          e.mag === `top` ? 0.75 : 0.5,
        ));
    if (
      (A((t) => {
        (l(
          `dark`,
          -0.05,
          0.12,
          t * (T / 2 + 0.009),
          S * 0.55,
          0.15,
          0.028,
          0.011,
        ),
          l(`steel`, 0.1, 0.12, t * (T / 2 + 0.027), 0.28, 0.08, 0.018, 0.005),
          u(`dark`, -0.17, 0.09, t * (T / 2 + 0.1), 0.043, 0.19, `z`),
          (l(
            `accent`,
            D + 0.25,
            -0.05,
            t * (T / 2 + 0.027),
            0.17,
            0.055,
            0.028,
            0.004,
          ).rotation.z = 0.28));
        for (let e of [D + 0.12, E - 0.16])
          for (let n of [-0.12, 0.22]) h(e, n, t * (T / 2 + 0.028), 0.031);
        (_(
          `${e.name.toUpperCase()} / ${e.id}`,
          D + S * 0.4,
          -0.13,
          t * (T / 2 + 0.029),
          S * 0.5,
          0.082,
        ),
          _(
            `CUBIE  •  STUDY`,
            D + S * 0.41,
            0.267,
            t * (T / 2 + 0.023),
            S * 0.46,
            0.064,
          ));
        for (let e = 0; e < 3; e++)
          l(
            `accent`,
            E - 0.13 - e * 0.08,
            -0.18,
            t * (T / 2 + 0.03),
            0.036,
            0.045,
            0.014,
            0.003,
          );
      }),
      d(`dark`, E - 0.11, -0.26, 0.23, 0.068, 0.021, `z`),
      e.bipod && !n)
    ) {
      let e = E + C * 0.62;
      u(`dark`, e, -0.22, 0, 0.085, 0.41, `z`);
      for (let t of [-1, 1])
        (p(`dark`, [e, -0.21, t * 0.13], [e + 0.21, -0.86, t * 0.46], 0.043),
          p(
            `steel`,
            [e + 0.12, -0.64, t * 0.35],
            [e + 0.23, -1.02, t * 0.53],
            0.025,
          ),
          l(`rubber`, e + 0.25, -1.035, t * 0.54, 0.22, 0.06, 0.17));
    }
  }
  if (x) {
    let t = E + C * 0.6;
    if (e.style === `prongs`)
      for (let e of [-1, 1])
        (l(`dark`, t, 0.19, e * 0.3, C * 1.04, 0.2, 0.15),
          l(`glow`, t, 0.2, e * 0.385, C * 0.8, 0.043, 0.018, 0.003),
          s(
            `steel`,
            [
              [E + C * 0.9, 0.27],
              [E + C * 1.22, 0.18],
              [E + C, 0.07],
            ],
            0.17,
            e * 0.3,
          ));
    else if (e.style === `rings`)
      for (let e = 0; e < 6; e++)
        (d(
          e % 2 ? `steel` : `paint`,
          E + 0.22 + e * 0.24,
          0.14,
          0,
          0.29 + e * 0.01,
          0.065,
        ),
          d(`glow`, E + 0.24 + e * 0.24, 0.14, 0, 0.24 + e * 0.01, 0.018));
    else if (e.style === `cage`) {
      for (let e = 0; e < 3; e++) {
        let t = (e * Math.PI * 2) / 3;
        p(
          `accent`,
          [E, 0.14 + Math.cos(t) * 0.28, Math.sin(t) * 0.28],
          [E + C, 0.14 + Math.cos(t + 0.5) * 0.28, Math.sin(t + 0.5) * 0.28],
          0.065,
        );
      }
      for (let e of [0, 0.5, 1]) d(`paint`, E + C * e, 0.14, 0, 0.36, 0.058);
    } else if (e.style === `fins`)
      for (let e = 0; e < 7; e++) {
        let t = E + e * 0.2;
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
          l(`glow`, t + 0.18, 0.24, 0.065, 0.048, 0.19, 0.018, 0.004));
      }
    else if (e.style === `dish`) {
      (u(`paint`, E + C, 0.14, 0, 0.17, 0.38, `x`, 0.43),
        d(`steel`, E + C + 0.2, 0.14, 0, 0.41, 0.038),
        u(`inset`, E + C + 0.196, 0.14, 0, 0.34, 0.015),
        d(`glow`, E + C + 0.209, 0.14, 0, 0.24, 0.022));
      let e = new m([
        new o(D, -0.12, 0.24),
        new o(0, -0.73, 0.45),
        new o(E + 0.5, -0.3, 0.44),
        new o(E + 0.6, 0.15, 0.2),
      ]);
      a.mesh(new c(e, 36, 0.047, 8, !1), `accent`);
    }
    for (let e = 0; e < 4; e++)
      l(
        `glow`,
        D + 0.23 + e * 0.18,
        0.18,
        T / 2 + 0.048,
        0.085,
        0.023,
        0.025,
        0.004,
      );
  }
  if (n)
    return (
      (r.userData.sockets = k),
      (r.userData.stock = D - 0.08 - 1.32),
      r.updateMatrixWorld(!0),
      r
    );
  r.updateMatrixWorld(!0);
  let R = new f().setFromObject(r).getCenter(new o());
  for (let e of r.children) e.position.sub(R);
  return (
    r.updateMatrixWorld(!0),
    (r.userData.bounds = new f().setFromObject(r)),
    r
  );
}
