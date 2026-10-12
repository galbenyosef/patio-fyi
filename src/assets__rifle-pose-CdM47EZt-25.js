// assets__rifle-pose-CdM47EZt 25 — buttons
// Lines 29968-30277 of readable/assets__rifle-pose-CdM47EZt.pretty.js (statement-aligned).
Object.freeze([
  { key: `reflex`, name: `Red dots` },
  { key: `holo`, name: `Holographic` },
  { key: `prism`, name: `ACOGs` },
]);
function jr() {
  let e = (e, t, n, r, i, a) =>
      q(e, t, n, `holo`, r, i, (e, t) => Mr(e, t, a), {
        place: a.place ?? `mid`,
      }),
    t = (e) => ({ look: K.ringDot(96, e), color: `red`, extent: 0.12 });
  return [
    e(`exps3`, `EXPS3 holographic`, `EOTech EXPS3-0`, `black`, t(), {
      eye: 0.046,
      len: 0.074,
      battery: `front`,
      buttons: `left`,
      levers: 2,
      riser: !0,
    }),
    e(`exps2`, `EXPS2 holographic (FDE)`, `EOTech EXPS2-0 Tan`, `fde`, t(), {
      eye: 0.046,
      len: 0.074,
      battery: `front`,
      buttons: `left`,
      levers: 1,
      riser: !0,
    }),
    e(
      `exps32`,
      `EXPS3-2 two-dot`,
      `EOTech EXPS3-2 in OD green`,
      `od`,
      t([[0, 54]]),
      {
        eye: 0.046,
        len: 0.074,
        battery: `front`,
        buttons: `left`,
        levers: 2,
        riser: !0,
      },
    ),
    e(
      `xps2`,
      `XPS2 compact holo`,
      `EOTech XPS2-0 Green`,
      `grey`,
      { look: K.ringDot(96), color: `green`, extent: 0.12 },
      { eye: 0.04, len: 0.066, battery: `front`, buttons: `left`, levers: 0 },
    ),
    e(`e552`, `552 holographic`, `EOTech 552 (AA)`, `black`, t(), {
      eye: 0.041,
      len: 0.062,
      battery: `aa`,
      buttons: `rear`,
      nuts: 1,
      place: `front`,
    }),
    e(`e512`, `512 holographic (FDE)`, `EOTech 512 Tan (AA)`, `fde`, t(), {
      eye: 0.041,
      len: 0.062,
      battery: `aa`,
      buttons: `rear2`,
      nuts: 1,
      place: `front`,
    }),
    e(`e553`, `553 holographic`, `EOTech 553 (CR123)`, `grey`, t(), {
      eye: 0.041,
      len: 0.066,
      battery: `front`,
      buttons: `rear`,
      nuts: 1,
      rubber: !0,
    }),
    e(
      `uh1`,
      `UH-1 holographic`,
      `Vortex Razor AMG UH-1 Gen II`,
      `black`,
      { look: K.cqb(), color: `red`, extent: 0.12 },
      {
        eye: 0.045,
        len: 0.06,
        shape: `uh1`,
        battery: `side`,
        buttons: `top`,
        levers: 1,
      },
    ),
    e(
      `aems`,
      `AEMS enclosed`,
      `Holosun AEMS`,
      `fde`,
      { look: K.ticked(), color: `red`, extent: 0.12 },
      {
        eye: 0.04,
        len: 0.046,
        shape: `box`,
        battery: `side`,
        buttons: `left`,
        levers: 0,
      },
    ),
    e(
      `kobra`,
      `Kobra collimator`,
      `Axion Kobra EKP-1S-03 (Picatinny)`,
      `black`,
      { look: K.kobra(), color: `red`, extent: 0.12 },
      {
        eye: 0.05,
        len: 0.05,
        shape: `kobra`,
        battery: `kobra`,
        buttons: `none`,
        nuts: 1,
      },
    ),
  ];
}
function Mr(e, t, n) {
  let { eye: r, len: i, shape: a = `eotech` } = n,
    o = -i / 2 - 0.006,
    s = i / 2,
    c = 0.0152,
    l = 0.0112,
    u,
    d;
  a === `uh1`
    ? ((c = 0.0158),
      (l = 0.0135),
      (d = [t.trap(0.034, 0.027, r - l, r + l, 0.003)]),
      (u = t.trap(0.046, 0.036, r - l - 0.005, r + l + 0.006, 0.007)))
    : a === `box`
      ? ((c = 0.013),
        (l = 0.012),
        (d = [t.rr(-c, c, r - l, r + l, 0.003)]),
        (u = t.rr(-c - 0.0042, c + 0.0042, 0.016, r + l + 0.0046, 0.006)))
      : a === `kobra`
        ? ((c = 0.0162),
          (l = 0.013),
          (d = [t.rr(-c, c, r - l, r + l, 0.002)]),
          (u = t.rr(-c - 0.0045, c + 0.0045, 0.022, r + l + 0.006, 0.004)))
        : ((d = [t.rr(-c, c, r - l, r + l, 0.0035)]),
          (u = t.rr(
            -c - 0.0042,
            c + 0.0042,
            r - l - 0.003,
            r + l + 0.0048,
            0.0075,
          )));
  let f = r - l - (a === `box` ? 0 : 0.003),
    p = a === `kobra` ? -0.06 : -i / 2 - 0.008,
    m = a === `kobra` ? 0.03 : i / 2 + (n.battery === `aa` ? 0.028 : 0.006);
  t.clamp(-Math.min(0.034, i / 2), Math.min(0.03, i / 2), {
    levers: n.levers ?? 0,
    nuts: n.nuts ?? 0,
    w: 0.03,
  });
  let h = a === `kobra` ? 0.01 : 0.0105,
    g = a === `kobra` ? 0.026 : 2 * c - 0.003,
    _ = f - h;
  (t.riser(-Math.min(0.031, i * 0.43), Math.min(0.027, i * 0.4), _ + 0.001, {
    width: 0.016,
    plate: g - 0.002,
  }),
    e.rbox(
      `body`,
      (p + m) / 2,
      _ + h / 2 + 5e-4,
      0,
      m - p,
      h + 0.001,
      g,
      0.0016,
    ),
    t.arch(`body`, u, o, s, d));
  let v = a === `kobra` ? 0.005 : 0.0035;
  (t.arch(
    n.rubber ? `rubber` : `body`,
    u.map(([e, t]) => [e * 1.04, (t - r) * 1.04 + r]),
    s - v,
    s + 0.001,
    d,
  ),
    n.battery === `front` &&
      (e.tube(
        `body`,
        m - 0.004,
        _ + h * 0.55,
        0,
        0.0062,
        g + 0.005,
        `z`,
        0.0062,
        22,
      ),
      e.tube(
        `knurl`,
        m - 0.004,
        _ + h * 0.55,
        -(g / 2 + 0.0032),
        0.0065,
        0.0026,
        `z`,
        0.0065,
        22,
      )),
    n.battery === `aa` &&
      (e.rbox(
        `body`,
        m - 0.018,
        _ + h * 0.5 + 0.001,
        0,
        0.036,
        h + 0.002,
        g + 0.002,
        0.002,
      ),
      e.rbox(
        `knurl`,
        m + 0.001,
        _ + h * 0.5 + 0.001,
        0,
        0.003,
        h - 0.001,
        g,
        0.001,
      )),
    n.battery === `side` &&
      (e.tube(
        `body`,
        -0.004,
        _ + h * 0.55,
        g / 2 + 0.003,
        0.0055,
        i * 0.7,
        `x`,
        0.0055,
        20,
      ),
      e.tube(
        `knurl`,
        i * 0.35 - 0.002,
        _ + h * 0.55,
        g / 2 + 0.003,
        0.0058,
        0.003,
        `x`,
        0.0058,
        20,
      )),
    n.battery === `kobra` &&
      e.tube(
        `knurl`,
        p + 0.004,
        _ + h * 0.6,
        0.011,
        0.006,
        0.004,
        `x`,
        0.006,
        20,
      ));
  let y = _ + h * 0.55;
  if (n.buttons === `left`)
    for (let e = 0; e < 3; e++)
      t.button(p + 0.012 + e * 0.009, y, -(g / 2 + 8e-4), 0.0028);
  if (n.buttons === `rear` || n.buttons === `rear2`)
    for (let e = 0; e < (n.buttons === `rear` ? 3 : 2); e++)
      t.button(
        p - 8e-4,
        y,
        (e - (n.buttons === `rear` ? 1 : 0.5)) * 0.009,
        0.0032,
        `x`,
      );
  if (n.buttons === `top`)
    for (let e = 0; e < 3; e++)
      t.button(p + 0.008 + e * 0.008, _ + h + 0.001, 0, 0.0028, `y`);
  let b = t.glass(
    a === `kobra` ? `lensAmber` : `lensRed`,
    s - 0.004,
    r,
    2 * c,
    2 * l,
  );
  return (
    (b.rotation.z = a === `box` ? 0 : -0.12),
    t.glass(`lens`, o + 0.002, r, 2 * c, 2 * l),
    t.engrave(
      a === `kobra` ? `КОБРА` : `CUBIE HOLOGRAPHIC`,
      (p + m) / 2,
      _ + h * 0.5,
      g / 2 + 2e-4,
      0.035,
      0.0036,
    ),
    {
      eye: r,
      plane: s - 0.004,
      aperture: [c * 0.92, l * 0.92],
      footprint: [-Math.min(0.034, i / 2), Math.min(0.03, i / 2)],
      rear: o,
      win: () => [c, l, !1],
    }
  );
}
