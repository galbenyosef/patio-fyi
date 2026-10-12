// assets__greywater-signs-view-b4Ps_Ogz 07 — math
// Lines 1856-3948 of readable/assets__greywater-signs-view-b4Ps_Ogz.pretty.js (statement-aligned).
(Object.assign(Y, {
  bowling(e) {
    let { width: t, height: n, elevation: r, palette: i } = e.spec,
      a = r + n;
    for (let t of [-1, 1])
      (H(e, t * 1.4, -0.4),
        e.beam(
          [t * 1.4, 0.1, -0.4],
          [t * 0.6, a, -0.4],
          0.25,
          `metal`,
          i.metal,
        ));
    let o = [
      [0, a + 2.1, -0.1],
      [t * 0.51, a + 0.1, -0.1],
      [0, r - 0.6, -0.1],
      [-t * 0.51, a + 0.1, -0.1],
    ];
    (e.line(o, 0.18, `metal`, i.secondary, !0),
      e.line(
        o.map((e) => [e[0], e[1], 0.04]),
        0.05,
        `neon2`,
        i.secondary,
        !0,
      ));
    for (let o = 0; o < 3; o++)
      e.line(
        [
          [t / 2 + 0.3 + o * 0.35, a - 0.2, 0],
          [t / 2 + 0.9 + o * 0.35, r + n / 2, 0],
          [t / 2 + 0.3 + o * 0.35, r + 0.2, 0],
        ],
        0.06,
        `neon`,
        i.accent,
      );
    e.arc(0, a + 0.7, 0.08, 0.32, 0.32, 0, Math.PI * 2, 0.06, `neon`, i.accent);
  },
  blade(e) {
    let { width: t, height: n, elevation: r, palette: i } = e.spec;
    K(e, 1.65);
    for (let a = 0; a < 4; a++) {
      let o = -t / 2 - 0.12 - a * 0.1,
        s = r + n / 2 + (a - 1.5) * 0.07;
      (e.box(0.06, n + 0.3 - a * 0.14, 0.24, o, s, -0.02, `metal`, i.secondary),
        e.beam(
          [o, r + 0.1 + a * 0.06, 0.15],
          [o, r + n + 0.12 - a * 0.1, 0.15],
          0.026,
          `neon2`,
          i.secondary,
          !0,
        ));
    }
    for (let a of [r + 0.4, r + n / 2, r + n - 0.4])
      e.poly(
        [
          [t / 2 + 0.08, a - 0.18],
          [t / 2 + 0.43, a],
          [t / 2 + 0.08, a + 0.18],
        ],
        0.22,
        0,
        `paint`,
        i.accent,
      );
    e.line(
      [
        [t / 2 + 0.15, r, -0.3],
        [t / 2 + 0.15, r + n, -0.3],
        [t / 2 - 0.1, r + n + 0.4, -1.6],
      ],
      0.04,
      `metal`,
      R,
    );
  },
  pagodaRoof(e) {
    let { width: t, height: n, elevation: r, palette: i } = e.spec,
      a = r + n;
    G(e, 4, 3.2);
    let o = [
      [-t / 2 - 0.8, a + 0.9],
      [-t / 2 - 0.35, a + 0.54],
      [0, a + 1.1],
      [t / 2 + 0.35, a + 0.54],
      [t / 2 + 0.8, a + 0.9],
      [t / 2 + 0.4, a + 0.26],
      [0, a + 0.72],
      [-t / 2 - 0.4, a + 0.26],
    ];
    (e.poly(o, 1.1, -0.35, `paint`, i.metal),
      e.line(
        o.slice(0, 5).map((e) => [...e, 0.26]),
        0.06,
        `neon`,
        i.accent,
      ));
    for (let n of [-t / 2 - 0.25, t / 2 + 0.25]) {
      (e.beam([n, a + 0.42, -0.15], [n, a - 0.12, -0.15], 0.045),
        e.cyl(0.18, 0.18, 0.5, n, a - 0.37, -0.15, `neon2`, i.secondary));
      for (let t of [a - 0.65, a - 0.09])
        e.cyl(0.23, 0.23, 0.07, n, t, -0.15, `metal`, R);
    }
  },
  marketLattice(e) {
    let { width: t, height: n, elevation: r, palette: i } = e.spec;
    G(e, 5, 3.8);
    for (let n of [-0.7, -2])
      W(e, -t / 2, t / 2, r - 0.6, r + 0.25, n, 12, i.metal);
    for (let n = -t / 2; n <= t / 2; n += t / 10)
      (e.beam([n, r - 0.6, -0.7], [n, r + 0.25, -2], 0.08),
        e.beam([n, r + 0.25, -0.7], [n, r - 0.6, -2], 0.08));
    e.arc(
      0,
      r + n + 0.35,
      -0.15,
      1.3,
      1.3,
      0,
      Math.PI,
      0.08,
      `neon2`,
      i.secondary,
    );
    for (let t = 0; t <= 8; t++) {
      let a = (t * Math.PI) / 8;
      e.beam(
        [Math.cos(a) * 1.55, r + n + 0.35 + Math.sin(a) * 1.55, -0.15],
        [Math.cos(a) * 1.87, r + n + 0.35 + Math.sin(a) * 1.87, -0.15],
        0.065,
        `neon2`,
        i.secondary,
        !0,
      );
    }
    e.line(
      [
        [-t / 2, r - 0.16, 0.14],
        [t / 2, r - 0.16, 0.14],
      ],
      0.05,
      `neon`,
      i.accent,
    );
  },
  cinema(e) {
    let { width: t, height: n, elevation: r, palette: i } = e.spec;
    (K(e, 2.3), e.box(t + 0.8, 0.33, 2.8, 0, r - 0.22, -0.9, `paint`, i.metal));
    for (let n = -t / 2; n < t / 2; n += 0.32)
      e.box(0.055, 0.05, 2.55, n, r - 0.41, -0.9, `metal`, i.secondary);
    for (let a = 0; a < 3; a++)
      e.line(
        [
          [-t / 2 - 0.35 + a * 0.12, r + n + 0.12 + a * 0.14, 0.22],
          [0, r + n + 0.6 + a * 0.14, 0.22],
          [t / 2 + 0.35 - a * 0.12, r + n + 0.12 + a * 0.14, 0.22],
        ],
        0.045,
        `neon`,
        i.accent,
      );
    J(e, [-t / 2, r - 0.4, 0.3], [t / 2, r - 0.4, 0.3], 0.27);
    for (let n of [-t * 0.3, 0, t * 0.3])
      (e.beam([n, r - 0.39, -1.3], [n, r - 0.6, -1.3], 0.04),
        e.ball(0.1, n, r - 0.68, -1.3));
  },
  diner(e) {
    let { width: t, height: n, elevation: r, palette: i } = e.spec;
    for (let n of [-t * 0.3, t * 0.3])
      (H(e, n, -0.35),
        e.cyl(0.105, 0.105, r + 0.4, n, (r + 0.4) / 2, -0.35, `metal`, V));
    for (let a of [-1, 1])
      (e.cyl(
        n * 0.55,
        n * 0.55,
        0.22,
        (a * t) / 2,
        r + n / 2,
        -0.02,
        `paint`,
        i.bg,
        [Math.PI / 2, 0, 0],
        32,
      ),
        e.arc(
          (a * t) / 2,
          r + n / 2,
          0.15,
          n * 0.55,
          n * 0.55,
          a < 0 ? Math.PI / 2 : -Math.PI / 2,
          a < 0 ? Math.PI * 1.5 : Math.PI / 2,
          0.05,
          `neon`,
          i.accent,
        ));
    e.arc(
      -t * 0.25,
      r + n + 0.48,
      -0.18,
      0.9,
      0.9,
      0.2,
      Math.PI * 1.72,
      0.16,
      `metal`,
      V,
    );
    for (let n = 0; n < 3; n++)
      e.box(
        t + 0.6 - n * 0.25,
        0.05,
        0.08,
        0,
        r - 0.18 - n * 0.15,
        0.1,
        `metal`,
        V,
      );
  },
  palmPylon(e) {
    let { width: t, height: n, elevation: r, palette: i } = e.spec,
      a = r + n;
    (e.poly(
      [
        [-1.25, 0.08],
        [1.25, 0.08],
        [0.35, 1.35],
        [-0.35, 1.35],
      ],
      0.9,
      -0.25,
      `concrete`,
      z,
    ),
      U(e, 0, a + 0.6, -0.3, 0.33));
    for (let n = 0; n < 3; n++)
      e.poly(
        [
          [t / 2 + 0.1 + n * 0.16, 0.8],
          [t / 2 + 0.21 + n * 0.16, 0.8],
          [t / 2 + 0.27 + n * 0.16, a + 0.65 - n * 0.27],
          [t / 2 + 0.1 + n * 0.16, a + 0.5 - n * 0.27],
        ],
        0.21,
        -0.12,
        `paint`,
        n % 2 ? i.accent : i.secondary,
      );
    let o = -0.45,
      s = a + 1;
    e.beam([-0.25, a - 0.2, -0.2], [o, s, -0.2], 0.1, `metal`, i.secondary);
    for (let t = 0; t < 7; t++) {
      let n = (t * Math.PI) / 6,
        r = o + Math.cos(n) * 1.15,
        a = s + Math.sin(n) * 0.65;
      (e.poly(
        [
          [o, s],
          [(o + r) / 2, a + 0.18],
          [r, a - 0.3],
          [(o + r) / 2, a - 0.05],
        ],
        0.05,
        -0.15,
        `paint`,
        i.secondary,
      ),
        e.line(
          [
            [o, s, -0.06],
            [(o + r) / 2, a + 0.06, -0.06],
            [r, a - 0.3, -0.06],
          ],
          0.03,
          `neon2`,
          i.secondary,
        ));
    }
  },
  orbit(e) {
    let { width: t, height: n, elevation: r, palette: i } = e.spec,
      a = r + n / 2;
    (e.cyl(0.16, 0.52, r, 0, r / 2, -0.4, `metal`, i.metal, [0, 0, 0], 12),
      H(e, 0, -0.4, 1.4, 1.4));
    for (let t = 0; t < 8; t++) {
      let n = (t * Math.PI) / 4;
      e.beam(
        [Math.cos(n) * 0.5, 0.2, -0.4 + Math.sin(n) * 0.5],
        [Math.cos(n) * 0.18, r, -0.4 + Math.sin(n) * 0.18],
        0.045,
        `metal`,
        i.secondary,
      );
    }
    for (let r of [-1, 1]) {
      let o = [];
      for (let e = 0; e <= 48; e++) {
        let i = (e * Math.PI) / 24;
        o.push([
          Math.cos(i) * (t / 2 + 0.5),
          a + Math.sin(i) * (n / 2 + 0.5) + Math.cos(i) * 0.4 * r,
          -0.25,
        ]);
      }
      (e.line(o, 0.1, `metal`, i.metal),
        e.line(
          o.map((e) => [e[0], e[1], -0.16]),
          0.04,
          r > 0 ? `neon` : `neon2`,
          r > 0 ? i.accent : i.secondary,
        ));
    }
    e.ball(0.16, t * 0.54, a + 0.4, -0.17, `neon2`, i.secondary);
  },
  record(e) {
    let { width: t, height: n, elevation: r, palette: i } = e.spec,
      a = r + n / 2,
      o = t * 0.66;
    (K(e, 1.25),
      e.cyl(o, o, 0.22, 0, a, -0.16, `paint`, R, [Math.PI / 2, 0, 0], 48));
    for (let t = 0; t < 4; t++)
      e.arc(
        0,
        a,
        -0.025,
        o - t * 0.11,
        o - t * 0.11,
        0,
        Math.PI * 2,
        0.022,
        t === 0 ? `neon` : `metal`,
        t === 0 ? i.accent : L,
      );
    (e.arc(
      0,
      a,
      -0.005,
      0.31,
      0.31,
      0,
      Math.PI * 2,
      0.035,
      `neon2`,
      i.secondary,
    ),
      e.line(
        [
          [-o * 0.8, a + o * 0.68, -0.1],
          [-o * 0.3, a + o + 0.35, -0.6],
          [o * 0.65, a + o * 0.7, -0.2],
        ],
        0.1,
        `metal`,
        i.metal,
      ));
  },
  cross(e) {
    let { width: t, height: n, elevation: r, palette: i } = e.spec,
      a = r + n / 2;
    K(e, 1.25);
    let o = [
      [-0.4, a + 1.3],
      [0.4, a + 1.3],
      [0.4, a + n / 2],
      [t / 2 + 0.42, a + n / 2],
      [t / 2 + 0.42, a - n / 2],
      [0.4, a - n / 2],
      [0.4, a - 1.3],
      [-0.4, a - 1.3],
      [-0.4, a - n / 2],
      [-t / 2 - 0.42, a - n / 2],
      [-t / 2 - 0.42, a + n / 2],
      [-0.4, a + n / 2],
    ];
    (e.poly(o, 0.28, -0.07, `paint`, i.bg),
      e.line(
        o.map((e) => [...e, 0.11]),
        0.052,
        `neon2`,
        i.secondary,
        !0,
      ));
    for (let n of [-1, 1])
      e.line(
        [
          [n * (t / 2 + 0.6), a - 0.9, -0.4],
          [n * (t / 2 + 0.6), a + 0.9, -0.4],
          [n * 0.48, a + 1.45, -0.4],
        ],
        0.09,
        `metal`,
        i.metal,
      );
  },
  comet(e) {
    let { width: t, height: n, elevation: r, palette: i } = e.spec,
      a = r + n / 2;
    G(e, 3, 3.2);
    let o = [
      [t / 2 - 0.06, r - 0.48],
      [t / 2 + 2.1, a + 0.15],
      [t / 2 - 0.06, r + n + 0.68],
    ];
    (e.poly(o, 0.28, 0, `paint`, i.secondary),
      e.line(
        o.map((e) => [...e, 0.18]),
        0.055,
        `neon2`,
        i.secondary,
        !0,
      ));
    for (let n = 0; n < 3; n++)
      e.line(
        [
          [-t / 2 - 2.1 + n * 0.22, r + 0.18 + n * 0.67, 0.08],
          [-t / 2 - 0.25, r + 0.13 + n * 0.67, 0.08],
        ],
        0.08,
        `neon`,
        i.accent,
      );
    e.beam(
      [-t / 2 - 1.8, a, -0.15],
      [-t / 2 + 1, a, -0.15],
      0.15,
      `metal`,
      i.metal,
    );
  },
  velvet(e) {
    let { width: t, height: n, elevation: r, palette: i } = e.spec,
      a = r + n;
    for (let n of [-t * 0.6, t * 0.6]) U(e, n, a + 1.1, -0.4, 0.09);
    e.arc(0, a + 0.6, -0.4, t * 0.6, 0.6, 0, Math.PI, 0.095, `metal`, R);
    for (let n of [-t * 0.33, t * 0.33])
      for (let t = a + 0.12; t < a + 0.95; t += 0.1)
        e.arc(
          n,
          t,
          -0.08,
          0.045,
          0.07,
          0,
          Math.PI * 2,
          0.02,
          `metal`,
          i.secondary,
        );
    for (let n = -t / 2 + 0.23; n < t / 2; n += 0.46)
      (e.arc(
        n,
        r - 0.1,
        0.1,
        0.23,
        0.23,
        Math.PI,
        Math.PI * 2,
        0.05,
        `neon`,
        i.accent,
      ),
        e.cyl(0.015, 0.06, 0.24, n, r - 0.47, 0.1, `metal`, i.secondary));
    for (let n of [-1, 1])
      e.arc(
        n * (t / 2 + 0.12),
        a + 0.37,
        -0.15,
        0.26,
        0.24,
        -0.5,
        Math.PI * 1.7,
        0.05,
        `metal`,
        i.secondary,
      );
  },
}),
  Object.assign(Y, {
    wheel(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec,
        a = r + n / 2,
        o = 2.45;
      for (let t of [-1.8, 1.8])
        for (let n of [-1.3, -0.3])
          (H(e, t, n),
            e.beam([t, 0.1, n], [0, a, -0.4], 0.16, `metal`, i.metal));
      (e.arc(0, a, -0.27, o, o, 0, Math.PI * 2, 0.13, `metal`, i.metal),
        e.arc(0, a, -0.16, o, o, 0, Math.PI * 2, 0.045, `neon2`, i.secondary));
      for (let t = 0; t < 16; t++) {
        let n = (t * Math.PI) / 8,
          r = Math.cos(n) * o,
          s = a + Math.sin(n) * o;
        (e.beam([0, a, -0.29], [r, s, -0.29], 0.05, `metal`, i.secondary),
          e.box(
            0.28,
            0.32,
            0.26,
            r,
            s,
            -0.17,
            `paint`,
            t % 2 ? i.accent : i.secondary,
          ),
          e.ball(0.07, r, s + 0.2, 0.02, `neon`, i.accent));
      }
    },
    letters(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec;
      G(e, 6, 3.8);
      for (let n of [-0.7, -1.5])
        W(e, -t / 2 - 0.2, t / 2 + 0.2, r - 0.45, r + 0.15, n, 10, i.metal);
      for (let i = -t / 2; i <= t / 2; i += 1.22)
        (e.beam([i, r + n * 0.85, -0.25], [i, r - 0.4, -1.8], 0.08),
          e.box(0.19, 0.25, 0.14, i, r + 0.2, -0.6, `metal`, R));
      e.line(
        [
          [-t / 2, r - 0.16, 0.19],
          [t / 2, r - 0.16, 0.19],
        ],
        0.05,
        `neon2`,
        i.secondary,
      );
      for (let a of [-t / 2 - 0.4, t / 2 + 0.4])
        (e.arc(
          a,
          r + n * 0.5,
          -0.12,
          0.23,
          0.5,
          0,
          Math.PI * 2,
          0.045,
          `neon`,
          i.accent,
        ),
          e.beam([a, r - 0.3, -0.2], [a, r + n * 0.5, -0.2], 0.065));
    },
    drivein(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec,
        a = r + n;
      for (let n of [-1, 1])
        (H(e, n * 0.75, -0.35),
          e.beam(
            [n * 0.75, 0.1, -0.35],
            [n * t * 0.3, a, -0.35],
            0.23,
            `metal`,
            i.metal,
          ));
      let o = [
        [-t / 2 - 1.4, r + 0.5],
        [-t / 2 - 0.6, a + 0.8],
        [t / 2 + 1.05, a + 0.2],
        [t / 2 + 0.1, a - 0.04],
        [-t / 2 - 0.3, a + 0.29],
        [-t / 2 - 0.65, r + 0.2],
      ];
      (e.poly(o, 0.2, -0.12, `paint`, i.secondary),
        e.line(
          o.map((e) => [...e, 0.025]),
          0.05,
          `neon2`,
          i.secondary,
          !0,
        ),
        e.line(
          [
            [-t / 2 - 0.84, r + 0.85, 0.05],
            [-t / 2 - 0.45, a + 0.58, 0.05],
            [t / 2 + 0.45, a + 0.21, 0.05],
          ],
          0.045,
          `neon`,
          i.accent,
        ),
        e.beam([t / 2 - 0.5, a - 0.1, -0.2], [t / 2 + 0.7, a + 1, -0.2], 0.085),
        fe(e, t / 2 + 0.7, a + 1.1, -0.12, 0.7));
    },
    lanternGate(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec,
        a = r + n;
      for (let n of [-t * 0.59, t * 0.59])
        (U(e, n, a + 0.45, -0.38, 0.22, `paint`, i.metal),
          e.box(0.44, 0.16, 0.44, n, 0.32, -0.38, `paint`, i.secondary));
      e.poly(
        [
          [-t / 2 - 0.8, a + 0.8],
          [-t / 2 - 0.4, a + 0.45],
          [0, a + 0.72],
          [t / 2 + 0.4, a + 0.45],
          [t / 2 + 0.8, a + 0.8],
          [t / 2 + 0.47, a + 0.13],
          [0, a + 0.4],
          [-t / 2 - 0.47, a + 0.13],
        ],
        1,
        -0.33,
        `paint`,
        i.metal,
      );
      for (let n of [-t * 0.64, t * 0.64]) {
        (e.beam([n, a + 0.24, -0.12], [n, a - 0.15, -0.12], 0.035),
          e.cyl(
            0.2,
            0.2,
            0.57,
            n,
            a - 0.44,
            -0.12,
            `neon`,
            i.accent,
            [0, 0, 0],
            16,
          ));
        for (let t = 0; t < 8; t++) {
          let r = (t * Math.PI) / 4;
          e.beam(
            [n + Math.cos(r) * 0.21, a - 0.72, -0.12 + Math.sin(r) * 0.21],
            [n + Math.cos(r) * 0.21, a - 0.16, -0.12 + Math.sin(r) * 0.21],
            0.025,
            `metal`,
            R,
          );
        }
        for (let t of [a - 0.77, a - 0.1])
          e.cyl(0.24, 0.24, 0.06, n, t, -0.12, `metal`, i.secondary);
      }
      for (let t = 0; t < 3; t++)
        e.arc(
          -0.65 + t * 0.65,
          a + 0.36,
          0.24,
          0.25,
          0.12,
          0,
          Math.PI,
          0.035,
          `neon2`,
          i.secondary,
        );
    },
    fish(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec,
        a = r + n / 2;
      for (let i of [-t * 0.37, 0, t * 0.37]) U(e, i, r + n * 0.6, -0.38, 0.13);
      let o = [
        [-t / 2 - 0.1, a],
        [-t / 2 - 1.2, a + 1.1],
        [-t / 2 - 0.9, a],
        [-t / 2 - 1.2, a - 1.1],
      ];
      (e.poly(o, 0.22, -0.1, `paint`, i.secondary),
        e.line(
          o.map((e) => [...e, 0.05]),
          0.05,
          `neon2`,
          i.secondary,
          !0,
        ),
        e.poly(
          [
            [-0.5, r + n],
            [0.25, r + n + 0.8],
            [1.2, r + n],
          ],
          0.18,
          -0.1,
          `paint`,
          i.metal,
        ),
        e.arc(
          t / 2 + 0.16,
          a,
          -0.02,
          0.44,
          n * 0.51,
          -Math.PI / 2,
          Math.PI / 2,
          0.09,
          `metal`,
          i.metal,
        ),
        e.arc(
          t / 2 + 0.16,
          a,
          0.08,
          0.44,
          n * 0.51,
          -Math.PI / 2,
          Math.PI / 2,
          0.035,
          `neon`,
          i.accent,
        ));
      for (let n = 0; n < 3; n++) {
        let a = [];
        for (let e = 0; e <= 24; e++) {
          let i = -t / 2 + (e * t) / 24;
          a.push([
            i,
            r - 0.23 - n * 0.16 + Math.sin((e * Math.PI) / 6) * 0.09,
            0.07,
          ]);
        }
        e.line(a, 0.035, `neon`, i.accent);
      }
    },
    apollo(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec,
        a = r + n;
      for (let n of [-t * 0.38, t * 0.38])
        (H(e, n, -0.4, 0.9, 1),
          e.beam([n, 0.14, -0.4], [0, a + 1.2, -0.4], 0.25, `metal`, i.metal));
      (e.poly(
        [
          [-0.65, a + 0.1],
          [0, a + 1.55],
          [0.65, a + 0.1],
        ],
        0.27,
        -0.05,
        `paint`,
        i.accent,
      ),
        e.line(
          [
            [-0.65, a + 0.1, 0.13],
            [0, a + 1.55, 0.13],
            [0.65, a + 0.1, 0.13],
          ],
          0.05,
          `neon`,
          i.accent,
        ));
      for (let n of [-1, 1])
        e.line(
          [
            [n * t * 0.4, 0.55, -0.22],
            [n * t * 0.18, r - 0.25, -0.22],
          ],
          0.07,
          `neon2`,
          i.secondary,
        );
      e.beam(
        [-t * 0.33, r * 0.55, -0.4],
        [t * 0.33, r * 0.55, -0.4],
        0.14,
        `metal`,
        V,
      );
      for (let o of [-1, 1])
        e.poly(
          [
            [o * t * 0.5, r - 0.1],
            [o * (t * 0.5 + 0.7), r + n * 0.6],
            [o * t * 0.5, a + 0.1],
          ],
          0.18,
          -0.02,
          `paint`,
          i.secondary,
        );
    },
    coin(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec,
        a = t / 2 + 0.35,
        o = r + n / 2;
      (K(e, 1.9),
        e.box(t + 0.6, 0.23, 1.8, 0, r - 0.21, -0.65, `paint`, i.metal),
        e.cyl(
          1.03,
          1.03,
          0.23,
          a,
          o,
          -0.2,
          `metal`,
          i.secondary,
          [Math.PI / 2, 0, 0],
          48,
        ),
        e.arc(
          a,
          o,
          -0.06,
          0.93,
          0.93,
          0,
          Math.PI * 2,
          0.045,
          `neon2`,
          i.secondary,
        ));
      for (let t = 0; t < 32; t++) {
        let n = (t * Math.PI) / 16;
        e.beam(
          [a + Math.cos(n) * 0.94, o + Math.sin(n) * 0.94, -0.045],
          [a + Math.cos(n) * 1.01, o + Math.sin(n) * 1.01, -0.045],
          0.025,
          `metal`,
          V,
        );
      }
      for (let n of [-t * 0.33, t * 0.33])
        e.arc(
          n,
          r - 0.18,
          -0.65,
          0.01,
          0.75,
          Math.PI,
          Math.PI * 1.5,
          0.09,
          `metal`,
          i.secondary,
        );
      e.arc(
        0,
        r + n + 0.08,
        -0.05,
        t * 0.54,
        0.44,
        0,
        Math.PI,
        0.07,
        `neon`,
        i.accent,
      );
    },
    deco(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec,
        a = r + n;
      e.poly(
        [
          [-1.25, 0.1],
          [1.25, 0.1],
          [0.55, r + 0.3],
          [-0.55, r + 0.3],
        ],
        0.88,
        -0.23,
        `paint`,
        i.metal,
      );
      for (let n of [-1, 1])
        for (let o = 0; o < 3; o++) {
          let s = n * (t / 2 + 0.13 + o * 0.13),
            c = a + 0.55 - o * 0.27;
          (e.box(
            0.1,
            c - 0.3,
            0.33,
            s,
            (c + 0.3) / 2,
            -0.06,
            `metal`,
            i.secondary,
          ),
            e.beam(
              [s, r - 0.3, 0.15],
              [s, c - 0.1, 0.15],
              0.028,
              `neon2`,
              i.secondary,
              !0,
            ));
        }
      for (let t = -1; t <= 1; t++)
        e.poly(
          [
            [t * 0.34 - 0.09, a + 0.12],
            [t * 0.54, a + 1.32 - Math.abs(t) * 0.33],
            [t * 0.34 + 0.09, a + 0.12],
          ],
          0.17,
          -0.02,
          `paint`,
          i.accent,
        );
      e.line(
        [
          [-t / 2, r - 0.2, 0.2],
          [0, r - 0.6, 0.2],
          [t / 2, r - 0.2, 0.2],
        ],
        0.05,
        `neon`,
        i.accent,
      );
    },
    speed(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec,
        a = r + n;
      (H(e, -1.3, -0.5, 1.3, 1.25),
        e.poly(
          [
            [-1.65, 0.15],
            [-0.98, 0.15],
            [0.14, r + 0.2],
            [1, a + 0.14],
            [0.52, a + 0.23],
            [-0.38, r + 0.18],
          ],
          0.43,
          -0.48,
          `paint`,
          i.metal,
        ),
        e.arc(
          -t / 2 - 0.15,
          r + n / 2,
          -0.13,
          1.05,
          1.05,
          0,
          Math.PI * 2,
          0.07,
          `neon2`,
          i.secondary,
        ));
      for (let a = 0; a < 3; a++)
        e.line(
          [
            [-t / 2 - 0.5, r - 0.15 - a * 0.14, 0.1],
            [t / 2 + 0.35 - a * 0.23, r - 0.15 - a * 0.14, 0.1],
            [t / 2 + 0.96 - a * 0.23, r + n / 2 - a * 0.14, 0.1],
          ],
          0.05,
          `neon`,
          i.accent,
        );
      e.poly(
        [
          [t / 2, r - 0.1],
          [t / 2 + 1.15, r + n / 2],
          [t / 2, a + 0.1],
        ],
        0.22,
        -0.06,
        `paint`,
        i.secondary,
      );
    },
    bottle(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec,
        a = r + n;
      U(e, 0, a + 0.8, -0.34, 0.21);
      let o = [
        [-t * 0.58, 0.6],
        [t * 0.58, 0.6],
        [t * 0.62, a - 0.15],
        [0.4, a + 0.42],
        [0.35, a + 1.15],
        [-0.35, a + 1.15],
        [-0.4, a + 0.42],
        [-t * 0.62, a - 0.15],
      ];
      (e.poly(o, 0.36, -0.14, `paint`, i.metal),
        e.line(
          o.map((e) => [...e, 0.09]),
          0.05,
          `neon`,
          i.accent,
          !0,
        ),
        e.box(0.82, 0.19, 0.44, 0, a + 1.18, -0.12, `metal`, i.secondary));
      for (let t = -0.36; t <= 0.37; t += 0.09)
        e.box(0.028, 0.2, 0.025, t, a + 1.18, 0.12, `metal`, V);
      for (let n = 0; n < 3; n++)
        e.arc(
          t * 0.65 + 0.22 + n * 0.18,
          a + 0.08 + n * 0.45,
          -0.04,
          0.13 + n * 0.04,
          0.13 + n * 0.04,
          0,
          Math.PI * 2,
          0.034,
          `neon2`,
          i.secondary,
        );
    },
    antenna(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec,
        a = r + n;
      for (let t of [-1.7, 1.7])
        for (let n of [-1.6, -0.35])
          (H(e, t, n), e.beam([t, 0.12, n], [t * 0.23, a + 1.15, -0.65], 0.12));
      for (let t = 0.6; t < a; t += 1.2) {
        let n = 3.4 * (1 - t / (a + 1.8));
        W(e, -n / 2, n / 2, t, t + 1.1, -0.45, 1, i.metal);
      }
      e.beam([0, a - 0.3, -0.65], [0, a + 3, -0.65], 0.08, `metal`, V);
      for (let t = 0; t < 4; t++)
        e.beam(
          [-0.75 + t * 0.12, a + 1 + t * 0.45, -0.65],
          [0.75 - t * 0.12, a + 1 + t * 0.45, -0.65],
          0.04,
          `metal`,
          V,
        );
      for (let a = 0; a < 3; a++)
        for (let o of [-1, 1])
          e.arc(
            o * t * 0.5,
            r + n / 2,
            -0.1,
            0.35 + a * 0.22,
            0.7 + a * 0.22,
            o < 0 ? Math.PI * 0.55 : -Math.PI * 0.45,
            o < 0 ? Math.PI * 1.45 : Math.PI * 0.45,
            0.04,
            `neon`,
            i.accent,
          );
    },
    billiards(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec,
        a = r + n;
      for (let n of [-t * 0.57, t * 0.57])
        (U(e, n, a + 0.95, -0.6, 0.075),
          e.beam([n, a + 0.95, -0.6], [n * 0.6, a, -0.08], 0.04));
      e.line(
        [
          [-t * 0.6, a + 0.95, -0.6],
          [t * 0.6, a + 0.95, -0.6],
        ],
        0.08,
        `metal`,
        R,
      );
      let o = [
        [-0.72, a + 0.14, 0],
        [0, a + 1.25, 0],
        [0.72, a + 0.14, 0],
      ];
      (e.line(o, 0.12, `metal`, i.secondary, !0),
        e.line(
          o.map((e) => [e[0], e[1], 0.08]),
          0.04,
          `neon2`,
          i.secondary,
          !0,
        ),
        e.beam(
          [-1.1, a + 0.15, -0.1],
          [1, a + 0.94, -0.1],
          0.035,
          `wood`,
          `#c8a26f`,
          !0,
        ),
        e.beam(
          [1.1, a + 0.15, -0.1],
          [-1, a + 0.94, -0.1],
          0.035,
          `wood`,
          `#c8a26f`,
          !0,
        ));
      for (let o of [-t / 2 - 0.25, t / 2 + 0.25])
        e.line(
          [
            [o, r + 0.12, 0],
            [o + 0.14, r + n / 2, 0],
            [o, a - 0.12, 0],
            [o - 0.14, r + n / 2, 0],
          ],
          0.04,
          `neon`,
          i.accent,
          !0,
        );
    },
  }),
  Object.assign(Y, {
    monopole(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec;
      (H(e, 0, -1.3, 2.7, 2.7),
        e.cyl(
          0.62,
          0.85,
          r + n * 0.63,
          0,
          (r + n * 0.63) / 2,
          -1.3,
          `metal`,
          i.metal,
          [0, 0, 0],
          20,
        ),
        e.solid([0, (r + n * 0.6) / 2, -1.3], [1.7, r + n * 0.6, 1.7]));
      for (let t of [0.45, r - 0.5, r + n * 0.65])
        e.cyl(0.87, 0.87, 0.12, 0, t, -1.3, `metal`, R, [0, 0, 0], 20);
      (e.box(t * 0.82, 0.5, 0.55, 0, r + n * 0.26, -1, `metal`, i.metal),
        e.box(t * 0.86, 0.3, 0.4, 0, r + n * 0.78, -0.8, `metal`, i.metal));
      for (let i = -t * 0.44; i <= t * 0.45; i += t / 7)
        (e.beam([i, r - 0.13, -0.4], [i, r + n + 0.1, -0.4], 0.13),
          e.beam([0, r + n * 0.1, -1.3], [i, r + n * 0.74, -0.7], 0.11));
      (q(e, 5, { top: !0, reach: 2.25 }),
        e.box(0.52, 0.75, 0.25, 0.7, 1.6, -1.5, `metal`, R),
        e.line(
          [
            [0.7, 1.6, -1.5],
            [0.65, r + 1, -1.5],
            [0, r + n * 0.28, -0.7],
          ],
          0.035,
          `metal`,
          R,
        ));
    },
    highway(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec;
      for (let a of [-t * 0.3, t * 0.3]) {
        U(e, a, r + n * 0.84, -1.2, 0.48);
        for (let t of [-1.5, -0.9])
          e.box(
            0.82,
            r + n * 0.82,
            0.09,
            a,
            (r + n * 0.82) / 2,
            t,
            `metal`,
            i.metal,
          );
      }
      for (let a of [-0.5, -1.5])
        W(e, -t / 2, t / 2, r + 0.25, r + n - 0.25, a, 10, i.metal);
      for (let i = -t / 2; i < t / 2; i += t / 8)
        for (let a of [r + 0.3, r + n - 0.3])
          e.beam([i, a, -0.5], [i + t / 8, a, -1.5], 0.1);
      q(e, 6, { top: !1, reach: 2.3 });
    },
    trestle(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec;
      G(e, 5, 4.4);
      for (let a = r + 0.3; a < r + n; a += 0.72)
        e.box(t + 0.25, 0.1, 0.16, 0, a, -0.38, `metal`, i.metal);
      for (let i = -t / 2 + 0.45; i < t / 2; i += 1.1)
        e.box(0.1, n + 0.35, 0.15, i, r + n / 2, -0.36, `metal`, L);
      q(e, 5, { goose: !0, reach: 0.95 });
    },
    awning(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec,
        a = r + n;
      K(e, 1.6);
      for (let n = 0; n < 12; n++)
        e.box(
          t / 12 + 0.003,
          0.075,
          1.9,
          -t / 2 + t / 24 + (n * t) / 12,
          a + 0.34,
          -0.8,
          `canvas`,
          n % 2 ? i.bg : i.ink,
          [0.31, 0, 0],
        );
      for (let n of [-t * 0.47, 0, t * 0.47])
        (e.beam([n, r, -1.6], [n, a - 0.04, 0.08], 0.07),
          e.beam([n, a + 0.61, -1.65], [n, a + 0.02, 0.07], 0.06));
      for (let n = -t / 2 + 0.16; n < t / 2; n += 0.32)
        e.cyl(
          0.16,
          0.16,
          0.04,
          n,
          r + 0.03,
          -0.05,
          `canvas`,
          i.bg,
          [Math.PI / 2, 0, 0],
          12,
        );
      for (let n of [-t * 0.35, 0, t * 0.35]) e.ball(0.055, n, a - 0.13, -0.65);
    },
    banner(e) {
      let { width: t, height: n, elevation: r } = e.spec,
        i = r + n;
      for (let n of [-t / 2 - 0.3, t / 2 + 0.3])
        (U(e, n, i + 0.3, -0.1, 0.12, `wood`, `#8d6946`),
          e.box(0.14, 0.11, 1.65, n, 0.12, -0.1, `wood`, B),
          e.beam([n, 0.19, -0.85], [n, 0.85, -0.1], 0.07, `wood`, B),
          e.line(
            [
              [n, i + 0.12, -0.1],
              [n + Math.sign(n) * 0.55, 0.05, -1.9],
            ],
            0.018,
            `metal`,
            `#aa9b7b`,
          ),
          e.beam(
            [n + Math.sign(n) * 0.55, 0.02, -1.9],
            [n + Math.sign(n) * 0.55, 0.25, -1.9],
            0.03,
            `metal`,
            R,
          ));
      for (let n = -t / 2 + 0.12; n < t / 2; n += 0.38)
        for (let t of [r + 0.055, i - 0.055])
          e.arc(n, t, 0.105, 0.028, 0.028, 0, Math.PI * 2, 0.009, `metal`, V);
      for (let a of [-t / 2, t / 2])
        for (let t of [r + 0.1, r + n / 2, i - 0.1])
          e.line(
            [
              [a, t, 0.1],
              [a + Math.sign(a) * 0.3, t + 0.05, -0.1],
              [a, t + 0.07, 0.1],
            ],
            0.018,
            `metal`,
            `#c3b8a4`,
          );
      q(e, 2, { top: !0, reach: 0.55 });
    },
    timberGate(e) {
      let { width: t, height: n, elevation: r } = e.spec,
        i = r + n;
      (de(e, 0.59, `wood`, 0.28),
        e.box(t + 1.1, 0.32, 0.45, 0, i + 0.28, -0.28, `wood`, B));
      for (let n of [-1, 1])
        e.beam(
          [n * t * 0.59, i - 1, -0.3],
          [n * t * 0.34, i + 0.25, -0.3],
          0.19,
          `wood`,
          `#916d46`,
        );
      pe(e, 0, i + 0.36, t + 1.35, 1.5, 0.5, `wood`, `#5c4b39`);
      for (let n of [-t * 0.59, t * 0.59])
        for (let t of [r + 0.25, i + 0.25])
          e.cyl(
            0.055,
            0.055,
            0.025,
            n,
            t,
            -0.06,
            `metal`,
            R,
            [Math.PI / 2, 0, 0],
            6,
          );
      q(e, 2, { goose: !0, reach: 1.02 });
    },
    farm(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec;
      de(e, 0.42, `wood`, 0.15);
      for (let n of [-t * 0.42, t * 0.42])
        (e.box(0.18, 0.14, 1.25, n, 0.13, -0.3, `wood`, B),
          e.beam([n, 0.15, -0.85], [n, r + 0.1, -0.3], 0.09, `wood`, B));
      for (let i = r + 0.13; i < r + n; i += 0.24)
        e.box(
          t + 0.13,
          0.2,
          0.075,
          0,
          i,
          -0.16,
          `wood`,
          i % 0.5 < 0.25 ? `#7f6040` : `#9b7950`,
        );
      for (let i of [-1, 1])
        e.box(
          0.12,
          n + 0.4,
          0.3,
          i * (t / 2 + 0.09),
          r + n / 2,
          -0.035,
          `wood`,
          B,
        );
      (J(
        e,
        [-t / 2 - 0.17, r + n + 0.45, 0.05],
        [t / 2 + 0.17, r + n + 0.45, 0.05],
        0.28,
        0.22,
      ),
        e.box(t + 0.5, 0.13, 0.45, 0, r + n + 0.29, -0.03, `paint`, i.metal));
    },
    theatre(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec,
        a = r + n;
      (K(e, 2.2),
        e.box(t + 0.8, 0.38, 2.5, 0, r - 0.26, -0.85, `paint`, i.metal));
      for (let n = 0; n < 3; n++)
        e.box(
          t + 0.85 - n * 0.25,
          0.08,
          2.55 - n * 0.2,
          0,
          r - 0.48 - n * 0.12,
          -0.85,
          `metal`,
          i.secondary,
        );
      e.poly(
        [
          [-t / 2 - 0.35, a],
          [-t * 0.4, a + 0.35],
          [-t * 0.23, a + 0.35],
          [-t * 0.23, a + 0.67],
          [0, a + 1.1],
          [t * 0.23, a + 0.67],
          [t * 0.23, a + 0.35],
          [t * 0.4, a + 0.35],
          [t / 2 + 0.35, a],
        ],
        0.24,
        -0.05,
        `metal`,
        i.secondary,
      );
      for (let t = -4; t <= 4; t++)
        e.beam(
          [t * 0.42, a + 0.08, 0.105],
          [t * 0.26, a + 0.74 - Math.abs(t) * 0.07, 0.105],
          0.035,
          `metal`,
          R,
        );
      for (let n of [r - 0.31, r - 0.49])
        J(e, [-t / 2 - 0.25, n, 0.45], [t / 2 + 0.25, n, 0.45], 0.19);
      for (let n of [-t / 2 - 0.17, t / 2 + 0.17])
        J(e, [n, r + 0.1, 0.21], [n, a - 0.1, 0.21], 0.2);
    },
    fair(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec,
        a = r + n;
      for (let n of [-t * 0.55, t * 0.55]) {
        for (let t of [-0.3, -1.1]) U(e, n, a + 0.5, t, 0.1);
        for (let t = 0.2; t < a; t += 0.8)
          (e.beam([n, t, -0.3], [n, t + 0.75, -1.1], 0.045),
            e.beam([n, t, -1.1], [n, t + 0.75, -0.3], 0.045));
        for (let t of [-2, 0.2])
          (H(e, n + Math.sign(n) * 0.65, t, 0.45, 0.5),
            e.beam(
              [n + Math.sign(n) * 0.65, 0.1, t],
              [n, r * 0.7, -0.5],
              0.09,
            ));
      }
      W(e, -t * 0.57, t * 0.57, a + 0.17, a + 0.63, -0.6, 10);
      let o = [
        [-t * 0.57, a + 0.68, -0.2],
        [0, a + 1.65, -0.2],
        [t * 0.57, a + 0.68, -0.2],
      ];
      e.line(o, 0.1, `metal`, i.metal);
      for (let n = 0; n < 15; n++) {
        let r = -t * 0.5 + (t * n) / 14,
          o = a + 1.1 + Math.abs(r) * 0.08;
        e.poly(
          [
            [r - 0.16, o],
            [r + 0.16, o],
            [r, o - 0.36],
          ],
          0.025,
          -0.03,
          `canvas`,
          n % 2 ? i.accent : i.secondary,
        );
      }
      J(e, [-t / 2, a + 1.17, 0.08], [t / 2, a + 1.17, 0.08], 0.42, 0.26);
    },
    kiosk(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec;
      e.box(t + 0.35, 0.22, 0.95, 0, 0.15, -0.08, `concrete`, z);
      for (let i of [-1, 1])
        e.cyl(
          0.1,
          0.1,
          r + n + 0.18,
          i * (t / 2 + 0.12),
          (r + n + 0.18) / 2,
          -0.08,
          `metal`,
          V,
        );
      (e.box(t + 0.44, 0.14, 0.72, 0, r + n + 0.16, -0.16, `metal`, i.metal),
        e.box(t - 0.14, n - 0.2, 0.04, 0, r + n / 2, -0.2, `metal`, i.metal));
      for (let n = r + 0.15; n < r + 0.7; n += 0.075)
        e.box(t * 0.7, 0.025, 0.028, 0, n, -0.235, `metal`, R);
      e.box(0.075, 0.14, 0.06, t * 0.33, r + n * 0.5, -0.24, `metal`, V);
    },
    totem(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec;
      (e.box(1.7, 0.34, 1.05, 0, 0.2, -0.05, `concrete`, z),
        e.poly(
          [
            [-t * 0.65, 0.3],
            [t * 0.65, 0.3],
            [t * 0.65, r + n + 0.38],
            [-t * 0.65, r + n + 0.6],
          ],
          0.46,
          -0.22,
          `metal`,
          i.metal,
        ));
      for (let n = 0; n < 4; n++)
        e.box(
          t + 0.5,
          0.055,
          0.38,
          0,
          r + 0.45 + n * 0.81,
          -0.11,
          `metal`,
          i.secondary,
        );
      e.box(t + 0.42, 0.18, 0.5, 0, r + n + 0.32, -0.1, `paint`, i.accent);
      for (let i of [-1, 1])
        e.box(
          0.025,
          n + 0.75,
          0.02,
          i * (t / 2 + 0.18),
          r + n / 2,
          0.025,
          `lamp`,
          `#ecedce`,
        );
    },
    station(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec,
        a = r + n;
      for (let n of [-t * 0.6, t * 0.6]) U(e, n, a + 1.25, -1.2, 0.12);
      e.box(t + 1.35, 0.16, 0.2, 0, a + 1.24, -1.2, `metal`, i.metal);
      for (let n of [-t * 0.34, t * 0.34])
        (e.beam([n, a + 1.2, -1.2], [n, a + 1.2, -0.05], 0.07),
          e.beam([n, a + 1.2, -0.05], [n, a + 0.04, -0.05], 0.07, `metal`, V));
      for (let i of [-1, 1]) {
        e.box(
          0.17,
          n + 0.16,
          0.33,
          i * (t / 2 + 0.13),
          r + n / 2,
          -0.01,
          `metal`,
          V,
        );
        for (let n = r + 0.1; n < a; n += 0.11)
          e.box(0.012, 0.035, 0.18, i * (t / 2 + 0.221), n, -0.01, `metal`, R);
      }
    },
  }),
  Object.assign(Y, {
    nautical(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec,
        a = r + n;
      (U(e, 0, a + 1.35, -0.6, 0.26, `wood`, B),
        e.cyl(
          0.16,
          0.21,
          t + 1.5,
          0,
          a + 0.48,
          -0.3,
          `wood`,
          `#90724c`,
          [0, 0, Math.PI / 2],
          12,
        ));
      for (let n of [-t * 0.43, t * 0.43])
        (e.arc(
          n,
          a + 0.47,
          -0.13,
          0.12,
          0.12,
          0,
          Math.PI * 2,
          0.055,
          `metal`,
          R,
        ),
          e.line(
            [
              [0, a + 1.22, -0.58],
              [n * 1.38, a + 0.5, -0.3],
              [n, a + 0.03, -0.04],
            ],
            0.023,
            `wood`,
            `#c1ac80`,
          ),
          e.line(
            [
              [n, r + 0.05, -0.18],
              [0, 0.65, -0.59],
            ],
            0.023,
            `wood`,
            `#c1ac80`,
          ),
          e.box(0.26, 0.17, 0.08, n, r + 0.05, -0.09, `metal`, R));
      (e.cyl(0.29, 0.29, 0.24, 0, 0.45, -0.6, `metal`, i.metal),
        q(e, 2, { goose: !0, reach: 0.92 }));
    },
    logs(e) {
      let { width: t, height: n, elevation: r } = e.spec,
        i = r + n;
      for (let n of [-t * 0.58, t * 0.58]) {
        (e.cyl(
          0.18,
          0.23,
          i + 0.53,
          n,
          (i + 0.53) / 2,
          -0.4,
          `wood`,
          `#826240`,
          [0, 0, 0],
          12,
        ),
          e.cyl(
            0.2,
            0.2,
            0.025,
            n,
            i + 0.548,
            -0.4,
            `wood`,
            `#b99259`,
            [0, 0, 0],
            12,
          ));
        for (let t = 0.6; t < i; t += 0.6)
          e.arc(n, t, -0.17, 0.15, 0.035, 0, Math.PI, 0.01, `wood`, `#58422c`);
        e.beam(
          [n, i - 0.85, -0.38],
          [n * 0.55, i + 0.2, -0.38],
          0.14,
          `wood`,
          B,
          !0,
        );
      }
      (e.cyl(
        0.15,
        0.15,
        t + 1.4,
        0,
        i + 0.28,
        -0.34,
        `wood`,
        B,
        [0, 0, Math.PI / 2],
        12,
      ),
        pe(e, 0, i + 0.37, t + 1.5, 1.55, 0.75, `wood`, `#554836`));
      for (let n = -t * 0.66; n < t * 0.66; n += 0.28)
        e.box(
          0.03,
          0.08,
          1.54,
          n,
          i + 0.5 + (1 - Math.abs(n) / (t * 0.66)) * 0.6,
          -0.1,
          `wood`,
          `#7f6a49`,
        );
      q(e, 2, { goose: !0, reach: 1 });
    },
    industrial(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec,
        a = r + n;
      for (let n of [-t * 0.45, t * 0.45]) {
        U(e, n, a + 0.28, -0.7, 0.32);
        for (let t of [-0.94, -0.46])
          e.box(0.55, a + 0.2, 0.07, n, (a + 0.2) / 2, t, `metal`, i.metal);
      }
      W(e, -t / 2 - 0.35, t / 2 + 0.35, a + 0.1, a + 0.72, -0.6, 7, i.metal);
      for (let n = 0; n < 5; n++) {
        let r = -t / 2 + (n * t) / 5;
        e.poly(
          [
            [r, a + 0.72],
            [r + t / 5, a + 0.72],
            [r + t / 5, a + 1.2],
          ],
          0.2,
          -0.5,
          `metal`,
          i.secondary,
        );
      }
      (W(e, -t * 0.42, t * 0.42, 0.5, r * 0.75, -0.72, 4, R),
        q(e, 3, { top: !0, reach: 1.2 }));
      for (let n of [-t * 0.4, 0, t * 0.4])
        e.line(
          [
            [n - 0.25, a + 0.45, 1.36],
            [n - 0.25, a + 0.82, 1.36],
            [n + 0.25, a + 0.82, 1.36],
            [n + 0.25, a + 0.45, 1.36],
          ],
          0.028,
          `metal`,
          R,
        );
    },
    spectacles(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec,
        a = r + n;
      U(e, 0, r + 0.2, -0.3, 0.15, `metal`, V);
      for (let n of [-1, 1])
        (e.beam(
          [0, r * 0.57, -0.3],
          [n * t * 0.38, r + 0.1, -0.25],
          0.09,
          `metal`,
          V,
        ),
          e.arc(
            n * 0.76,
            a + 0.6,
            -0.07,
            0.68,
            0.46,
            0,
            Math.PI * 2,
            0.085,
            `metal`,
            i.secondary,
          ),
          e.arc(
            n * 0.76,
            a + 0.6,
            -0.015,
            0.6,
            0.39,
            0,
            Math.PI * 2,
            0.025,
            `lamp`,
            `#fff0d4`,
          ),
          e.beam(
            [n * 1.45, a + 0.7, -0.07],
            [n * 1.8, a + 0.9, -0.7],
            0.06,
            `metal`,
            i.metal,
          ));
      (e.arc(
        0,
        a + 0.51,
        -0.07,
        0.17,
        0.14,
        0,
        Math.PI,
        0.07,
        `metal`,
        i.secondary,
      ),
        e.box(t + 0.25, 0.12, 0.45, 0, r - 0.17, -0.05, `metal`, V));
    },
    sandwich(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec,
        a = r + n;
      for (let n of [-t / 2 - 0.08, t / 2 + 0.08])
        (e.beam([n, 0.04, 0.18], [n, a + 0.08, -0.12], 0.095, `wood`, B),
          e.beam([n, 0.04, -0.96], [n, a + 0.08, -0.12], 0.095, `wood`, B),
          e.cyl(0.065, 0.065, 0.15, n, a + 0.055, -0.12, `metal`, R, [
            0,
            0,
            Math.PI / 2,
          ]),
          e.line(
            [
              [n, 0.72, 0.065],
              [n, 0.6, -0.39],
              [n, 0.72, -0.59],
            ],
            0.015,
            `metal`,
            V,
          ));
      (e.box(t + 0.2, 0.11, 0.17, 0, a + 0.04, -0.12, `wood`, B),
        e.box(t, 0.11, 0.12, 0, 0.18, -0.88, `wood`, B),
        e.box(
          t - 0.05,
          n * 0.86,
          0.055,
          0,
          r + n * 0.48,
          -0.57,
          `paint`,
          i.metal,
          [-0.4, 0, 0],
        ));
      for (let n of [-t / 2 - 0.055, t / 2 + 0.055])
        J(e, [n, r + 0.1, 0.13], [n, a - 0.1, 0.13], 0.23);
    },
    prism(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec,
        a = r + n;
      (H(e, 0, -0.52, 1.1, 1.1),
        e.cyl(0.16, 0.29, r, 0, r / 2, -0.52, `metal`, i.metal, [0, 0, 0], 12));
      for (let t = 0; t < 12; t++) {
        let n = (t * Math.PI) / 6;
        e.beam(
          [Math.cos(n) * 0.25, 0.3, -0.52 + Math.sin(n) * 0.25],
          [Math.cos(n) * 0.16, r - 0.1, -0.52 + Math.sin(n) * 0.16],
          0.025,
          `metal`,
          i.secondary,
        );
      }
      e.box(t + 0.14, n + 0.14, 1.22, 0, r + n / 2, -0.61, `paint`, i.metal);
      for (let o of [-t / 2, t / 2]) {
        e.box(0.035, n - 0.12, 1.02, o, r + n / 2, -0.61, `lamp`, `#ecdbab`);
        for (let t = r + 0.22; t < a; t += 0.42)
          e.box(0.045, 0.035, 1.06, o, t, -0.61, `metal`, i.metal);
      }
      (e.box(t + 0.48, 0.17, 1.62, 0, a + 0.18, -0.58, `metal`, i.secondary),
        e.box(t + 0.3, 0.13, 1.46, 0, r - 0.15, -0.58, `metal`, i.secondary),
        e.cyl(
          0.28,
          0.6,
          0.52,
          0,
          a + 0.54,
          -0.58,
          `metal`,
          i.metal,
          [0, 0, 0],
          4,
        ));
      for (let t = 0; t < 4; t++)
        e.box(0.8, 0.027, 0.03, 0, a + 0.29 + t * 0.095, 0.06, `metal`, R);
    },
    vboard(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec,
        a = t * 1.99;
      (H(e, 0, -1.75, 3.1, 3.1),
        e.cyl(
          0.85,
          1.04,
          r + n * 0.72,
          0,
          (r + n * 0.72) / 2,
          -1.75,
          `metal`,
          i.metal,
          [0, 0, 0],
          20,
        ),
        e.solid([0, (r + n * 0.7) / 2, -1.75], [2.08, r + n * 0.7, 2.08]),
        e.box(a * 0.8, 0.65, 0.75, 0, r + n * 0.3, -1.4, `metal`, i.metal));
      for (let t of [-1, -2.5])
        W(e, -a * 0.47, a * 0.47, r + 0.4, r + n * 0.8, t, 14, i.metal);
      for (let t of [-a * 0.43, -a * 0.22, a * 0.22, a * 0.43])
        e.beam([0, r + 0.2, -1.75], [t, r + n * 0.75, -1.3], 0.17);
      for (let n of [-1, 1])
        e.withFrame([n * (t / 2 + 0.03), 0, -0.48], [0, n * 0.075, 0], () =>
          q(e, 4, { top: !0, reach: 1.6 }),
        );
    },
    tower(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec,
        a = r + n;
      for (let t of [-1.8, 1.8])
        for (let n of [-0.6, -3.1])
          (H(e, t, n, 0.9, 1),
            e.beam(
              [t, 0.1, n],
              [t * 0.75, a, n * 0.72],
              0.2,
              `metal`,
              i.metal,
            ));
      for (let t = 0.35; t < a; t += 1.55) {
        let n = 1 - (t / a) * 0.25,
          r = 1.8 * n;
        for (let o of [-0.6, -3.1])
          W(e, -r, r, t, Math.min(a, t + 1.5), o * n, 1, i.metal);
        for (let i of [-r, r])
          (e.beam([i, t, -0.6 * n], [i, Math.min(a, t + 1.5), -3.1 * n], 0.1),
            e.beam([i, t, -3.1 * n], [i, Math.min(a, t + 1.5), -0.6 * n], 0.1));
      }
      (e.box(t + 0.15, 0.25, 0.4, 0, r + n * 0.52, -0.4, `metal`, i.metal),
        q(e, 4, { top: !1, reach: 2.2 }));
      for (let n of [-t * 0.4, -t * 0.13, t * 0.13, t * 0.4])
        e.line(
          [
            [n - 0.28, r - 0.72, 2.4],
            [n - 0.28, r - 0.24, 2.4],
            [n + 0.28, r - 0.24, 2.4],
            [n + 0.28, r - 0.72, 2.4],
          ],
          0.035,
          `metal`,
          i.secondary,
          !0,
        );
    },
    wagon(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec;
      e.box(t + 0.5, 0.18, 1.5, 0, 0.68, -0.36, `wood`, B);
      for (let n = -t / 2; n < t / 2; n += 0.25)
        e.box(0.21, 0.025, 1.46, n, 0.785, -0.36, `wood`, `#b18a55`);
      for (let a of [-t * 0.31, t * 0.31]) {
        e.beam([a, 0.45, -1.26], [a, 0.45, 0.53], 0.11, `metal`, R);
        for (let t of [-1.18, 0.46]) {
          (e.arc(a, 0.43, t, 0.42, 0.42, 0, Math.PI * 2, 0.11, `metal`, R),
            e.arc(
              a,
              0.43,
              t + 0.015,
              0.33,
              0.33,
              0,
              Math.PI * 2,
              0.055,
              `metal`,
              i.secondary,
            ));
          for (let n = 0; n < 10; n++) {
            let r = (n * Math.PI) / 5;
            e.beam(
              [a, 0.43, t],
              [a + Math.cos(r) * 0.32, 0.43 + Math.sin(r) * 0.32, t],
              0.034,
              `wood`,
              B,
            );
          }
          e.cyl(0.11, 0.11, 0.13, a, 0.43, t, `metal`, R, [Math.PI / 2, 0, 0]);
        }
        e.beam([a, 0.76, -0.4], [a, r + n + 0.2, -0.4], 0.11, `wood`, B);
      }
      (e.line(
        [
          [-t / 2, 0.65, -0.8],
          [-t / 2 - 1.2, 0.44, -0.35],
          [-t / 2, 0.65, 0.1],
        ],
        0.09,
        `metal`,
        R,
      ),
        e.cyl(
          0.09,
          0.09,
          0.1,
          -t / 2 - 1.25,
          0.44,
          -0.35,
          `metal`,
          V,
          [0, 0, 0],
        ));
      for (let n of [-t / 2, t / 2])
        (e.beam([n, 0.15, -0.96], [n, 0.72, -0.96], 0.055),
          e.box(0.24, 0.055, 0.3, n, 0.12, -0.96, `metal`, R));
      J(
        e,
        [-t / 2 - 0.13, r + n + 0.56, 0.03],
        [t / 2 + 0.13, r + n + 0.56, 0.03],
        0.28,
        0.23,
      );
    },
    concrete(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec;
      (e.box(t + 1.9, 0.28, 1.7, 0, 0.18, -0.22, `concrete`, z),
        e.box(
          t + 0.55,
          r + n - 0.14,
          0.65,
          0,
          (r + n) / 2,
          -0.4,
          `concrete`,
          `#888b85`,
        ));
      for (let i of [-1, 1])
        e.poly(
          [
            [i * (t / 2 + 0.1), 0.3],
            [i * (t / 2 + 0.86), 0.3],
            [i * (t / 2 + 0.37), r + n + 0.22],
            [i * (t / 2 + 0.12), r + n + 0.22],
          ],
          1.05,
          -0.27,
          `concrete`,
          `#aeaaa0`,
        );
      e.box(t + 0.85, 0.14, 0.91, 0, r + n + 0.15, -0.2, `metal`, i.metal);
      for (let i of [-t * 0.32, t * 0.32])
        (e.box(0.45, 0.12, 0.45, i, 0.36, 2.38, `metal`, R),
          e.beam([i, 0.38, 2.38], [i, 0.7, 2.38], 0.065),
          e.box(0.39, 0.25, 0.3, i, 0.8, 2.39, `metal`, R, [0.45, 0, 0]),
          e.box(
            0.3,
            0.03,
            0.22,
            i,
            0.91,
            2.44,
            `lamp`,
            `#fff0c4`,
            [0.45, 0, 0],
          ),
          e.fixtures.push({
            position: [i, 0.98, 2.36],
            target: [i, r + n / 2, 0.15],
            color: `#ffe6bb`,
          }));
    },
    sail(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec,
        a = r + n;
      (e.poly(
        [
          [-1.4, 0.1],
          [1.4, 0.1],
          [0.6, 0.55],
          [-0.65, 0.65],
        ],
        1.15,
        -0.25,
        `metal`,
        i.metal,
      ),
        e.poly(
          [
            [-t / 2 - 0.34, 0.5],
            [-t / 2 + 0.1, 0.5],
            [-t / 2 + 0.25, r],
            [-t / 2 - 0.05, a + 0.65],
            [-t / 2 - 0.42, a + 0.45],
          ],
          0.47,
          -0.32,
          `metal`,
          i.metal,
        ));
      for (let a = 0; a < 3; a++) {
        let o = [];
        for (let e = 0; e <= 22; e++) {
          let i = e / 22;
          o.push([
            t / 2 + 0.15 + Math.sin(i * Math.PI) * (0.58 + a * 0.13),
            r - 0.2 + i * (n + 0.6),
            -0.13 - a * 0.12,
          ]);
        }
        e.line(o, 0.075, `metal`, a === 1 ? i.secondary : i.metal);
      }
      e.poly(
        [
          [-t / 2 - 0.06, a + 0.12],
          [-t / 2 - 0.06, a + 0.65],
          [t / 2 + 0.18, a + 0.3],
          [t / 2 + 0.1, a + 0.12],
        ],
        0.23,
        -0.09,
        `paint`,
        i.accent,
      );
      for (let n = r + 0.35; n < a; n += 0.6)
        e.box(t + 0.2, 0.035, 0.075, 0, n, -0.25, `metal`, L);
    },
    bakery(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec,
        a = r + n;
      K(e, 1.35);
      for (let i of [-1, 1])
        (e.box(
          0.15,
          n + 0.45,
          0.28,
          i * (t / 2 + 0.1),
          r + n / 2,
          -0.04,
          `wood`,
          B,
        ),
          e.arc(
            i * (t / 2 - 0.25),
            r - 0.18,
            -0.5,
            0.2,
            0.42,
            0,
            Math.PI * 1.5,
            0.065,
            `metal`,
            R,
          ));
      (pe(e, 0, a + 0.16, t + 0.6, 1.6, 0.42, `metal`, `#9c7151`),
        e.cyl(
          0.47,
          0.47,
          0.15,
          0,
          a + 0.48,
          0.02,
          `wood`,
          `#9c774a`,
          [Math.PI / 2, 0, 0],
          32,
        ),
        e.arc(
          0,
          a + 0.48,
          0.11,
          0.4,
          0.4,
          0,
          Math.PI * 2,
          0.035,
          `metal`,
          i.secondary,
        ));
      for (let n of [-t * 0.34, t * 0.34])
        (e.line(
          [
            [n, a + 0.15, -0.4],
            [n, a + 0.4, -0.1],
            [n, a + 0.32, 0.45],
          ],
          0.045,
          `metal`,
          R,
        ),
          e.cyl(0.045, 0.17, 0.1, n, a + 0.25, 0.45, `metal`, `#9c7151`),
          e.ball(0.055, n, a + 0.165, 0.45));
    },
    scaffold(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec,
        a = r + n;
      for (let n of [-t / 2 - 0.24, t / 2 + 0.24])
        for (let t of [-0.35, -1.65]) {
          (H(e, n, t, 0.5, 0.5),
            e.beam([n, 0.15, t], [n, a + 0.62, t], 0.085, `metal`, V, !0));
          for (let r = 0.5; r < a + 0.5; r += 1.15)
            e.cyl(0.074, 0.074, 0.12, n, r, t, `metal`, R);
          for (let r = 0.18; r < 0.47; r += 0.07)
            e.cyl(0.055, 0.055, 0.026, n, r, t, `metal`, V);
        }
      for (let n = 0.5; n < a + 0.5; n += 1.15) {
        for (let r of [-0.35, -1.65])
          e.beam(
            [-t / 2 - 0.24, n, r],
            [t / 2 + 0.24, n, r],
            0.065,
            `metal`,
            L,
            !0,
          );
        for (let r of [-t / 2 - 0.24, t / 2 + 0.24])
          e.beam([r, n, -0.35], [r, n, -1.65], 0.065, `metal`, L, !0);
      }
      (e.beam(
        [-t / 2 - 0.24, 0.5, -1.65],
        [t / 2 + 0.24, a + 0.1, -1.65],
        0.058,
        `metal`,
        i.metal,
        !0,
      ),
        e.beam(
          [t / 2 + 0.24, 0.5, -1.65],
          [-t / 2 - 0.24, a + 0.1, -1.65],
          0.058,
          `metal`,
          i.metal,
          !0,
        ),
        q(e, 3, { top: !0, reach: 0.9 }));
    },
  }));
