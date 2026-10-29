// assets__grenade-model-r0cg2Gb_ 34 — rbox
// Lines 33536-34047 of readable/assets__grenade-model-r0cg2Gb_.pretty.js (statement-aligned).
var ma = Object.freeze([
    da(
      `t2`,
      `T-2 micro red dot`,
      `Aimpoint Micro T-2 on LRP mount`,
      `reflex`,
      `black`,
      { look: J.dot(13), color: `red`, extent: 0.09 },
      (e, t) => {
        let n = 0.04,
          r = 0.0152;
        pa(e, t, n, r, -0.017, 0.017, { lever: !0 });
        let { x0: i, x1: a } = fa(e, t, {
          eye: n,
          len: 0.062,
          r,
          front: 0.0162,
          hood: 0.012,
        });
        (t.turret(-0.002, 0.0532, 0, 0.0068, 0.008),
          t.turret(-0.002, 0.0295, 0.0092, 0.0058, 0.007, `z`),
          e.tube(
            `knurl`,
            -0.004,
            0.0295,
            -0.0132,
            0.0062,
            0.006,
            `z`,
            0.0062,
            18,
          ));
        for (let t of [-1, 1])
          e.rbox(`body`, a - 0.006, n, t * 0.0157, 0.01, 0.006, 0.002, 8e-4);
        return (
          t.engrave(
            `CUBIE OPTICAL · T2`,
            -0.01,
            0.036000000000000004,
            0.0148,
            0.03,
            0.0055,
          ),
          {
            eye: n,
            plane: a - 0.006,
            aperture: [0.0118, 0.0118],
            footprint: [-0.017, 0.017],
            rear: i,
            win: () => [0.013, 0.013, !0],
          }
        );
      },
    ),
    da(
      `compm4`,
      `Comp M4 red dot`,
      `Aimpoint CompM4 in a QD ring mount`,
      `reflex`,
      `grey`,
      { look: J.dot(14), color: `red`, extent: 0.09 },
      (e, t) => {
        let n = 0.046;
        (t.clamp(-0.021, 0.021, { levers: 1 }),
          t.riser(-0.017, 0.017, 0.0238, { width: 0.013, plate: 0.018 }),
          e.ring(`body`, 0, n, 0, 0.022, 0.0036));
        let { x0: r, x1: i } = fa(e, t, {
          eye: n,
          len: 0.12,
          r: 0.0192,
          front: 0.0205,
          hood: 0.022,
          wall: 0.0025,
        });
        return (
          e.tube(`body`, 0.012, 0.034, 0.016, 0.0088, 0.052, `x`, 0.0088, 22),
          e.tube(`knurl`, 0.04, 0.034, 0.016, 0.0094, 0.008, `x`, 0.0094, 22),
          t.turret(-0.012, 0.0652 - 0.003, 0, 0.0085, 0.01),
          t.turret(-0.012, 0.033, 0.011199999999999998, 0.0072, 0.009, `z`),
          t.engrave(`CUBIE OPTICAL · COMP`, -0.03, 0.048, 0.0196, 0.036, 0.006),
          {
            eye: n,
            plane: i - 0.008,
            aperture: [0.0152, 0.0152],
            footprint: [-0.021, 0.021],
            rear: r,
            win: () => [0.0167, 0.0167, !0],
          }
        );
      },
      { place: `front` },
    ),
    da(
      `rmr`,
      `RMR low mount`,
      `Trijicon RMR Type 2 on a low rail mount`,
      `reflex`,
      `fde`,
      { look: J.triangle(), color: `amber`, extent: 0.085 },
      (e, t) => {
        let n = 0.0405;
        (t.clamp(-0.022, 0.022, { levers: 1 }),
          t.riser(-0.019, 0.019, 0.0224, { width: 0.012, plate: 0.022 }),
          e.rbox(`black`, -0.002, 0.0265, 0, 0.045, 0.009, 0.026, 0.002),
          t.arch(
            `black`,
            t.trap(0.0275, 0.0262, 0.028999999999999998, 0.0555, 0.0045),
            0.002,
            0.012,
            [t.rr(-0.011, 0.011, 0.0327, 0.0483, 0.003)],
          ),
          e.rbox(`black`, -0.016, 0.0295, 0, 0.008, 0.005, 0.012, 0.0015));
        for (let e of [-1, 1])
          t.button(-0.006, 0.027999999999999997, e * 0.0133);
        return (
          t.glass(`lensAmber`, 0.008, n, 0.022, 0.015),
          t.engrave(`CUBIE · RM-06`, -0.003, 0.0255, 0.0122, 0.022, 0.0045),
          {
            eye: n,
            plane: 0.008,
            aperture: [0.0102, 0.0068],
            footprint: [-0.022, 0.022],
            win: () => [0.011, 0.0078, !1],
          }
        );
      },
      { place: `rear` },
    ),
    da(
      `romeo5`,
      `Romeo5 compact dot`,
      `SIG Romeo5 on a low rail mount`,
      `reflex`,
      `black`,
      { look: J.dot(13), color: `green`, extent: 0.09 },
      (e, t) => {
        let n = 0.04;
        (t.clamp(-0.019, 0.019),
          t.riser(-0.016, 0.016, 0.0261, { width: 0.012, plate: 0.019 }),
          t.arch(
            `body`,
            t.rr(-0.0142, 0.0142, 0.025500000000000002, 0.0535, 0.0055),
            -0.022,
            0.021,
            [t.rr(-0.0118, 0.0118, 0.0285, 0.051500000000000004, 0.0045)],
          ),
          t.arch(
            `rubber`,
            t.rr(-0.0146, 0.0146, 0.0251, 0.0539, 0.006),
            0.017,
            0.022,
            [t.rr(-0.0118, 0.0118, 0.0285, 0.051500000000000004, 0.0045)],
          ),
          e.rbox(`body`, -0.003, 0.056, 0, 0.011, 0.004, 0.011, 0.0015),
          e.rbox(`knurl`, -0.003, 0.0288, 0.0152, 0.011, 0.008, 0.003, 0.0015));
        for (let e of [-0.012, -0.003]) t.button(e, 0.029, -0.0146, 0.0022);
        return (
          t.glass(`lensRed`, 0.018, n, 0.0232, 0.0226),
          t.glass(`lens`, -0.02, n, 0.0232, 0.0226),
          t.engrave(`CUBIE · R5`, 0.006, 0.031, 0.0143, 0.014, 0.004),
          {
            eye: n,
            plane: 0.018,
            aperture: [0.0085, 0.0085],
            footprint: [-0.019, 0.019],
            rear: -0.022,
            win: () => [0.0118, 0.0115, !1],
          }
        );
      },
    ),
    da(
      `mro`,
      `MRO wide-view dot`,
      `Trijicon MRO on a low rail mount`,
      `reflex`,
      `fde`,
      { look: J.dot(13), color: `red`, extent: 0.09 },
      (e, t) => {
        let n = 0.046;
        return (
          t.clamp(-0.02, 0.02, { levers: 1 }),
          t.riser(-0.017, 0.017, 0.0327, {
            width: 0.012,
            plate: 0.018,
            cant: -0.003,
          }),
          t.shell(
            `body`,
            -0.026,
            n,
            [
              [0, 0.0134],
              [0.002, 0.014],
              [0.05, 0.014],
              [0.052, 0.0134],
            ],
            [
              [0, 0.0118],
              [0.052, 0.0118],
            ],
          ),
          e.rbox(`body`, -0.008, 0.0618, 0, 0.022, 0.006, 0.02, 0.003),
          e.tube(`knurl`, -0.008, 0.0682, 0, 0.0098, 0.0072, `y`, 0.0098, 24),
          t.turret(-0.012, 0.034, 0.011, 0.0056, 0.007, `z`),
          t.disc(`lensRed`, 0.022, n, 0.0118),
          t.disc(`lens`, -0.024, n, 0.0118),
          t.engrave(`CUBIE · MRO`, 0.006, 0.04, 0.014, 0.02, 0.005),
          {
            eye: n,
            plane: 0.022,
            aperture: [0.0115, 0.0115],
            footprint: [-0.02, 0.02],
            rear: -0.026,
            win: () => [0.0118, 0.0118, !0],
          }
        );
      },
    ),
    da(
      `hs510c`,
      `510C open reflex`,
      `Holosun HS510C`,
      `reflex`,
      `black`,
      { look: J.ringDot(92), color: `green`, extent: 0.12 },
      (e, t) => {
        let n = 0.036;
        (t.clamp(-0.033, 0.03, { levers: 1 }),
          t.riser(-0.027, 0.024, 0.0065, { width: 0.014, plate: 0.025 }),
          e.rbox(`body`, -0.001, 0.0095, 0, 0.068, 0.007, 0.032, 0.002),
          e.tube(
            `body`,
            -0.012,
            0.0095,
            0.0185,
            0.0068,
            0.036,
            `x`,
            0.0068,
            18,
          ),
          e.tube(`knurl`, 0.008, 0.0095, 0.0185, 0.007, 0.004, `x`, 0.007, 18),
          t.arch(
            `body`,
            [
              [-0.0225, 0.013],
              [0.0225, 0.013],
              ...t.trap(0.045, 0.045, 0.013, 0.061, 0.012).slice(2),
            ],
            0.016,
            0.025,
            [t.rr(-0.0178, 0.0178, 0.017, 0.0545, 0.0085)],
          ),
          e.rbox(`solar`, 0.0205, 0.0615, 0, 0.007, 0.0012, 0.022, 5e-4),
          e.rbox(`black`, -0.024, 0.0175, 0, 0.012, 0.011, 0.014, 0.002));
        for (let t of [-0.018, -0.008])
          e.rbox(`rubber`, t, 0.0138, -0.0125, 0.007, 0.0025, 0.006, 0.001);
        return (
          e.tube(`steel`, 0, 0.0095, -0.0165, 0.0026, 0.002, `z`, 0.0026, 8),
          t.glass(`lensRed`, 0.021, n, 0.035, 0.037),
          t.engrave(`CUBIE OPTICAL · HS`, -0.008, 0.0095, 0.0162, 0.03, 0.0055),
          {
            eye: n,
            plane: 0.021,
            aperture: [0.0165, 0.016],
            footprint: [-0.033, 0.03],
            win: () => [0.0178, 0.0188, !1],
          }
        );
      },
    ),
    da(
      `cmore`,
      `Railway open reflex`,
      `C-More Railway (MW3-style octagon hood)`,
      `reflex`,
      `black`,
      { look: J.dot(17), color: `red`, extent: 0.09 },
      (e, t) => {
        let n = 0.041;
        (t.clamp(-0.03, 0.03),
          t.riser(-0.025, 0.025, 0.0075, { width: 0.014, plate: 0.024 }),
          e.rbox(`body`, -0.004, 0.0125, 0, 0.056, 0.011, 0.03, 0.0035),
          e.rbox(`body`, 0.011, 0.018, 0, 0.018, 0.007, 0.044, 0.002),
          t.arch(`body`, t.oct(0.0262, 0.0218, 0.0105, n), 0.004, 0.021, [
            t.oct(0.0217, 0.0173, 0.0092, n),
          ]),
          e.rbox(`black`, -0.024, 0.0205, 0, 0.009, 0.008, 0.011, 0.002),
          e.tube(
            `knurl`,
            -0.014,
            0.012,
            0.0158,
            0.0058,
            0.005,
            `z`,
            0.0058,
            20,
          ));
        for (let t of [-0.009, 0.009])
          e.tube(`steel`, -0.026, 0.0182, t, 0.0016, 0.001, `y`, 0.0016, 8);
        let r = t.arch(
          `lensTeal`,
          t.oct(0.0221, 0.0177, 0.0092, n),
          0.0185,
          0.0195,
        );
        return (
          (r.castShadow = !1),
          t.engrave(`CUBIE · RAILWAY`, -0.006, 0.0125, 0.0151, 0.036, 0.0045),
          {
            eye: n,
            plane: 0.019,
            aperture: [0.0217 - 8e-4, 0.0165],
            footprint: [-0.03, 0.03],
            win: () => [0.0217, 0.0173, !1],
          }
        );
      },
    ),
    da(
      `deltapoint`,
      `DeltaPoint micro`,
      `Leupold DeltaPoint Pro on a low rail mount`,
      `reflex`,
      `black`,
      { look: J.dot(13), color: `red`, extent: 0.09 },
      (e, t) => {
        let n = 0.041;
        (t.clamp(-0.02, 0.02, { levers: 1 }),
          t.riser(-0.017, 0.017, 0.021400000000000002, {
            width: 0.012,
            plate: 0.021,
          }),
          e.rbox(`body`, -0.004, 0.025, 0, 0.048, 0.008, 0.026, 0.002),
          t.arch(
            `body`,
            t.trap(0.0295, 0.0245, 0.027000000000000003, 0.0555, 0.0045),
            -0.002,
            0.016,
            [t.trap(0.0235, 0.0185, 0.0315, 0.0495, 0.003)],
          ),
          e.rbox(`body`, -0.024, 0.033, 0, 0.008, 0.008, 0.014, 0.002));
        for (let t of [-1, 1])
          e.rbox(
            `body`,
            -0.024,
            0.038500000000000006,
            t * 0.0045,
            0.008,
            0.004,
            0.004,
            0.001,
          );
        return (
          e.tube(`body`, 0.004, 0.0558, 0, 0.0062, 0.002, `y`, 0.0062, 16),
          t.glass(`lensRed`, 0.012, n, 0.025, 0.018),
          t.engrave(`CUBIE · DPP`, -0.012, 0.025, 0.0132, 0.016, 0.004),
          {
            eye: n,
            plane: 0.012,
            aperture: [0.0108, 0.0078],
            footprint: [-0.02, 0.02],
            win: () => [0.0118, 0.009, !1],
          }
        );
      },
      { place: `rear` },
    ),
    da(
      `okp7`,
      `OKP-7 collimator`,
      `OKP-7 (Picatinny version)`,
      `reflex`,
      `black`,
      { look: J.dot(14), color: `red`, extent: 0.09 },
      (e, t) => {
        (t.clamp(-0.042, 0.042, { nuts: 1 }),
          t.riser(-0.035, 0.035, 0.0075, { width: 0.014, plate: 0.027 }),
          e.rbox(`body`, -0.012, 0.0145, 0, 0.066, 0.015, 0.036, 0.003),
          t.arch(
            `body`,
            t.rr(-0.0225, 0.0225, 0.008, 0.058, 0.007),
            0.02,
            0.036,
            [t.rr(-0.0188, 0.0188, 0.014, 0.0525, 0.004)],
          ));
        for (let t of [-1, 1])
          e.rbox(`body`, 0.008, 0.014, t * 0.0195, 0.03, 0.012, 0.003, 0.001);
        e.tube(`knurl`, -0.04, 0.016, 0.011, 0.0068, 0.008, `x`, 0.0068, 16);
        let n = t.glass(`lensRed`, 0.028, 0.033, 0.036, 0.037);
        return (
          (n.rotation.z = 0.18),
          t.engrave(`ОКП-7`, -0.02, 0.0145, 0.0182, 0.024, 0.0055),
          {
            eye: 0.034,
            plane: 0.028,
            aperture: [0.0172, 0.0175],
            footprint: [-0.042, 0.042],
            win: () => [0.0188, 0.0192, !1],
          }
        );
      },
    ),
    da(
      `acro`,
      `Acro enclosed dot`,
      `Aimpoint Acro P-2 on a low rail mount`,
      `reflex`,
      `black`,
      { look: J.dot(13), color: `red`, extent: 0.09 },
      (e, t) => {
        let n = 0.041;
        (t.clamp(-0.019, 0.019, { levers: 1 }),
          t.riser(-0.016, 0.016, 0.021400000000000002, {
            width: 0.012,
            plate: 0.022,
          }),
          t.arch(
            `body`,
            t.rr(-0.0148, 0.0148, 0.021, 0.057, 0.0055),
            -0.024,
            0.024,
            [t.rr(-0.0112, 0.0112, 0.0305, 0.051500000000000004, 0.0025)],
          ),
          e.rbox(
            `body`,
            -0.004,
            0.027000000000000003,
            0.0168,
            0.03,
            0.01,
            0.004,
            0.0015,
          ));
        for (let e of [-0.012, 0])
          t.button(e, 0.027000000000000003, -0.0154, 0.0024);
        return (
          t.glass(`lensRed`, 0.0235, n, 0.022, 0.021),
          t.glass(`lens`, -0.0235, n, 0.022, 0.021),
          t.engrave(
            `CUBIE · ACRO`,
            0.004,
            0.027000000000000003,
            0.0149,
            0.022,
            0.0045,
          ),
          {
            eye: n,
            plane: 0.0235,
            aperture: [0.0102, 0.0098],
            footprint: [-0.019, 0.019],
            rear: -0.024,
            win: () => [0.0112, 0.0105, !1],
          }
        );
      },
    ),
    ...ga(),
    da(
      `ta31`,
      `ACOG 4x32 chevron`,
      `Trijicon TA31 RCO on a flattop mount`,
      `prism`,
      `black`,
      { look: J.chevron(44, !0), color: `red`, extent: 0.13 },
      (e, t) =>
        va(e, t, { len: 0.147, obj: 0.021, ocu: 0.0175, fiber: `fiberR` }),
      { place: `rear` },
    ),
    da(
      `ta01`,
      `ACOG 4x32 crosshair`,
      `Trijicon TA01NSN with eye guard`,
      `prism`,
      `black`,
      { look: J.cross(), color: `amber`, extent: 0.22 },
      (e, t) => va(e, t, { len: 0.142, obj: 0.021, ocu: 0.0175, cup: !0 }),
      { place: `rear` },
    ),
    da(
      `ta11`,
      `ACOG 3.5x35 horseshoe`,
      `Trijicon TA11 in FDE`,
      `prism`,
      `fde`,
      { look: J.horseshoe(), color: `green`, extent: 0.13 },
      (e, t) =>
        va(e, t, { len: 0.16, obj: 0.0235, ocu: 0.019, fiber: `fiberG` }),
      { place: `rear` },
    ),
    da(
      `ta33`,
      `ACOG 3x30 with RMR`,
      `Trijicon TA33 with an RMR on top`,
      `prism`,
      `od`,
      { look: J.chevron(40), color: `red`, extent: 0.13 },
      (e, t) =>
        va(e, t, {
          len: 0.123,
          obj: 0.0195,
          ocu: 0.0172,
          fiber: `fiberR`,
          rmr: !0,
        }),
      { place: `rear` },
    ),
  ]),
  ha = Object.freeze(Object.fromEntries(ma.map((e) => [e.key, e])));
