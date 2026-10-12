// assets__rifle-pose-CdM47EZt 19 — rbox
// Lines 28149-28480 of readable/assets__rifle-pose-CdM47EZt.pretty.js (statement-aligned).
var er = Object.freeze({
  optic: {
    irons: Zn(`Iron sights`, null),
    reflex: Zn(`T-2 red dot`, (e) => $n(e, Qn)),
    micro: Zn(`Micro dot on riser`, ({ rbox: e, slab: t, tube: n, see: r }) => {
      if ((e(`anod`, 0, 0.01, 0, 0.044, 0.02, 0.024, 0.0015), r)) {
        e(`anod`, 0.008, 0.0225, 0, 0.022, 0.005, 0.028, 0.0012);
        for (let t of [-1, 1])
          e(`anod`, 0.008, 0.033, t * 0.0122, 0.014, 0.026, 0.0022, 6e-4);
        e(`anod`, 0.008, 0.0445, 0, 0.014, 0.0018, 0.0266, 5e-4);
      } else
        t(
          `anod`,
          [
            [-0.022, 0.02],
            [0.022, 0.02],
            [0.022, 0.026],
            [0.016, 0.046],
            [-0.016, 0.046],
            [-0.022, 0.03],
          ],
          0.03,
          0,
          0.002,
        );
      return (
        e(`glass`, 0.006, 0.034, 0, 0.002, 0.018, 0.022, 4e-4),
        n(`anod`, -0.004, 0.03, 0.017, 0.004, 0.004, `z`, 0.004, 12),
        { eye: [0, 0.034, 0], footprint: [-0.022, 0.022] }
      );
    }),
    holo: Zn(`Holographic (EXPS)`, ({ rbox: e, tube: t, see: n }) => {
      (e(`anod`, 0, 0.005, 0, 0.09, 0.01, 0.033, 0.0015),
        e(`anod`, 0.02, 0.004, 0.02, 0.018, 0.006, 0.01, 0.002),
        e(`anod`, -0.028, 0.0145, 0, 0.036, 0.011, 0.034, 0.003));
      let r = n ? 0.0025 : 0.004;
      for (let t of [-1, 1])
        e(`anod`, 0.012, 0.038, t * (0.0185 - r / 2), 0.056, 0.052, r, 0.001);
      (e(`anod`, 0.012, 0.064 - (0.004 - r) / 2, 0, 0.058, r, 0.037, 0.001),
        e(`glass`, 0.036, 0.04, 0, 0.0018, 0.036, 0.029, 3e-4),
        e(`glass`, -0.008, 0.04, 0, 0.0018, 0.036, 0.029, 3e-4));
      for (let e of [0.011, 0.0165])
        t(`rubber`, -0.047, e, 0, 0.0027, 0.003, `x`, 0.0027, 10);
      return { eye: [0, Qn, 0], footprint: [-0.045, 0.045] };
    }),
    acog: Zn(`Fixed 3x (ACOG)`, ({ rbox: e, lathe: t, tube: n }) => {
      e(`anod`, 0, 0.006, 0, 0.07, 0.012, 0.024, 0.0015);
      for (let e of [-0.022, 0.022])
        n(`anod`, e, 0.004, 0.016, 0.005, 0.006, `z`, 0.005, 12);
      return (
        e(`anod`, 0, 0.02, 0, 0.05, 0.018, 0.02, 0.003),
        t(
          `anod`,
          -0.075,
          Qn,
          0,
          [
            [0, 0.0185],
            [0.03, 0.0185],
            [0.04, 0.0152],
            [0.105, 0.0152],
            [0.125, 0.021],
            [0.15, 0.021],
            [0.15, 5e-4],
          ],
          `x`,
        ),
        n(`glass`, -0.0752, Qn, 0, 0.0155, 0.001, `x`, 0.0155, 20),
        n(`glass`, 0.0742, Qn, 0, 0.0185, 0.001, `x`, 0.0185, 20),
        n(`fiber`, 0, 0.059, 0, 0.0035, 0.06, `x`, 0.0035, 10),
        n(`anod`, 0.02, 0.056, 0, 0.006, 0.008, `y`, 0.006, 14),
        n(`anod`, 0.02, Qn, 0.016, 0.006, 0.008, `z`, 0.006, 14),
        { eye: [0, Qn, 0], footprint: [-0.035, 0.035] }
      );
    }),
    scope4: Zn(`LPVO 1-6x`, (e) => Kn(e)),
    scope8: Zn(`Long scope 5-25x`, (e) => Kn(e, !0)),
    thermal: Zn(`Thermal scope`, ({ rbox: e, lathe: t, tube: n, see: r }) => {
      let i = 0.046;
      if ((e(`anod`, 0, 0.006, 0, 0.08, 0.012, 0.026, 0.0015), r))
        for (let t of [-1, 1])
          (e(`anod`, 0.005, i + t * 0.024, 0, 0.15, 0.004, 0.056, 0.0015),
            e(`anod`, 0.005, i, t * 0.026, 0.15, 0.052, 0.004, 0.0015));
      else e(`anod`, 0.005, i, 0, 0.15, 0.052, 0.056, 0.006);
      (t(
        `rubber`,
        -0.07,
        i,
        0,
        [
          [0, 0.016],
          [0.025, 0.016],
          [0.025, 5e-4],
        ],
        `x`,
        20,
      ),
        t(
          `anod`,
          0.075,
          i,
          0,
          [
            [0, 0.024],
            [0.03, 0.024],
            [0.03, 5e-4],
          ],
          `x`,
          20,
        ),
        n(`glass`, 0.1052, i, 0, 0.021, 0.001, `x`, 0.021, 20));
      for (let e = 0; e < 3; e++)
        n(`rubber`, -0.03 + e * 0.018, 0.073, 0, 0.005, 0.004, `y`, 0.005, 10);
      return { eye: [0, i, 0], footprint: [-0.04, 0.04] };
    }),
  },
  muzzle: {
    standard: G(`muzzle`, `Factory crown`, null),
    flash: G(`muzzle`, `Flash hider`, ({ lathe: e, rbox: t }) => {
      e(
        `steel`,
        0,
        0,
        0,
        [
          [0, 5e-4],
          [0, 0.0105],
          [0.054, 0.0112],
          [0.054, 5e-4],
        ],
        `x`,
      );
      for (let e of [0, Math.PI / 2, -Math.PI / 2])
        t(
          `inset`,
          0.036,
          Math.cos(e) * 0.0108,
          Math.sin(e) * 0.0108,
          0.03,
          0.003,
          0.003,
          5e-4,
        ).rotation.x = e;
      return { tip: [0.054, 0, 0] };
    }),
    compensator: G(`muzzle`, `Compensator`, (e, t) => {
      if (t.radius >= 0.016) return Jn(e, 0.062);
      let { lathe: n, rbox: r } = e;
      n(
        `steel`,
        0,
        0,
        0,
        [
          [0, 5e-4],
          [0, 0.0115],
          [0.058, 0.0115],
          [0.062, 0.0095],
          [0.062, 5e-4],
        ],
        `x`,
      );
      for (let e = 0; e < 3; e++)
        r(`inset`, 0.02 + e * 0.013, 0.0112, 0, 0.007, 0.002, 0.01, 6e-4);
      return { tip: [0.062, 0, 0] };
    }),
    brake: G(`muzzle`, `Muzzle brake`, (e, t) => {
      if (t.radius >= 0.016) return Jn(e);
      let { lathe: n, rbox: r } = e;
      n(
        `steel`,
        0,
        0,
        0,
        [
          [0, 5e-4],
          [0, 0.013],
          [0.066, 0.013],
          [0.07, 0.011],
          [0.07, 5e-4],
        ],
        `x`,
      );
      for (let e of [-1, 1])
        for (let t = 0; t < 3; t++)
          r(
            `inset`,
            0.016 + t * 0.018,
            0,
            e * 0.0126,
            0.01,
            0.014,
            0.002,
            8e-4,
          );
      return { tip: [0.07, 0, 0] };
    }),
    suppressor: G(`muzzle`, `Suppressor`, ({ tube: e, lathe: t }) => {
      (e(`suppressor`, 0.09375, 0, 0, 0.0185, 0.1615, `x`),
        t(
          `suppressor`,
          0,
          0,
          0,
          [
            [0, 5e-4],
            [0, 0.0176],
            [0.001, 0.019],
            [0.01, 0.019],
            [0.012, 0.018],
            [0.013, 0.0185],
          ],
          `x`,
        ));
      let n = t(
          `suppressor`,
          0,
          0,
          0,
          [
            [0.1745, 0.0185],
            [0.176, 0.0176],
            [0.176, 0.0163],
            [0.175, 0.0156],
            [0.175, 0.006],
            [0.1758, 0.0052],
            [0.1758, 0.0048],
            [0.1748, 0.0041],
          ],
          `x`,
        ),
        r = n.geometry;
      return (
        (n.geometry = r.toNonIndexed()),
        n.geometry.computeVertexNormals(),
        r.dispose(),
        e(`inset`, 0.17465, 0, 0, 0.0041, 3e-4, `x`),
        { tip: [0.176, 0, 0] }
      );
    }),
  },
  barrel: {
    standard: G(`barrel`, `Factory barrel`, (e, t) => tr(e, t, t.length)),
    short: G(`barrel`, `Short barrel`, (e, t) =>
      tr(e, t, Math.max(0.025, t.length * 0.5)),
    ),
    long: G(`barrel`, `Long barrel`, (e, t) => tr(e, t, t.length * 1.6 + 0.02)),
    heavy: G(`barrel`, `Heavy barrel`, (e, t) =>
      tr(e, t, t.length * 1.1, 1.35),
    ),
  },
  underbarrel: {
    none: G(`underbarrel`, `None`, null),
    vertical: G(
      `underbarrel`,
      `Vertical grip`,
      ({ rbox: e, lathe: t }) => (
        e(`anod`, 0, -0.006, 0, 0.046, 0.012, 0.03, 0.0015),
        (t(
          `poly`,
          0,
          -0.012,
          0,
          [
            [0, 0.0145],
            [0.02, 0.0152],
            [0.035, 0.0142],
            [0.05, 0.0155],
            [0.07, 0.0145],
            [0.09, 0.016],
            [0.095, 0.0145],
            [0.097, 5e-4],
          ],
          `y`,
          20,
        ).rotation.x = Math.PI),
        { hold: [0, -0.055, 0] }
      ),
    ),
    angled: G(
      `underbarrel`,
      `Angled grip`,
      ({ sculpt: e, rbox: t }) => (
        t(`anod`, 0, -0.004, 0, 0.08, 0.008, 0.026, 0.0015),
        e(
          `poly`,
          [
            [-0.04, -0.0105],
            [0.044, -0.0105],
            [0.05, -0.015],
            [0.016, -0.03],
            [-0.028, -0.036],
            [-0.043, -0.02],
          ],
          0.026,
          0,
          0.004,
        ),
        { hold: [0.01, -0.022, 0] }
      ),
    ),
    bipod: G(`underbarrel`, `Bipod`, ({ rbox: e, tube: t, beam: n }, r, i) => {
      let a = i.span[1] - i.pos[0] - 0.025;
      (e(`anod`, a, -0.008, 0, 0.04, 0.016, 0.03, 0.002),
        t(`anod`, a, -0.022, 0, 0.01, 0.05, `z`, 0.01, 14));
      for (let t of [-1, 1])
        (n(`anod`, [a, -0.022, t * 0.02], [a + 0.03, -0.13, t * 0.07], 0.0045),
          n(
            `steel`,
            [a + 0.026, -0.115, t * 0.064],
            [a + 0.04, -0.2, t * 0.085],
            0.003,
          ),
          e(
            `rubber`,
            a + 0.041,
            -0.204,
            t * 0.086,
            0.014,
            0.008,
            0.014,
            0.003,
          ));
      return { hold: null };
    }),
  },
  magazine: {
    standard: G(`magazine`, `Factory magazine`, (e, t) => rr(e, t, 1)),
    extended: G(`magazine`, `Extended magazine`, (e, t) => rr(e, t, 1.3)),
    fast: G(`magazine`, `Fast magazine (coupled)`, (e, t) => rr(e, t, 1, !0)),
  },
});
