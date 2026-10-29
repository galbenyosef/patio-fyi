// assets__ui-hhE6L1u7 14 — math
// Lines 5085-5429 of readable/assets__ui-hhE6L1u7.pretty.js (statement-aligned).
function jr(e, n) {
  let r = new w(),
    { mesh: i, box: a, cyl: o, ring: s } = vr(r, e),
    c;
  if (n === `frag`) {
    let e = i(new t(0.031, 24, 16), `olive`, 0, 0.036, 0);
    e.scale.y = 1.16;
    for (let e of [0.022, 0.036, 0.05])
      s(`inset`, 0, e, 0, 0.0305 - Math.abs(e - 0.036) * 0.35, 0.0014, `y`);
    c = 0.071;
  } else {
    let e = n === `stun` ? 0.024 : 0.028,
      t = n === `flash` ? 0.1 : 0.11;
    if (
      (o(
        n === `smoke` ? `olive` : n === `stun` ? `cream` : `dark`,
        0,
        t / 2,
        0,
        e,
        t,
        `y`,
      ),
      o(`dark`, 0, t + 0.004, 0, e * 0.8, 0.008, `y`),
      s(n === `smoke` ? `cream` : `red`, 0, t * 0.72, 0, e + 5e-4, 0.0022, `y`),
      n === `flash`)
    )
      for (let t = 0; t < 2; t++)
        for (let n = 0; n < 6; n++) {
          let r = (n / 6) * Math.PI * 2 + t * 0.5,
            i = a(
              `inset`,
              Math.cos(r) * e,
              0.03 + t * 0.04,
              Math.sin(r) * e,
              0.007,
              0.012,
              0.007,
              0.001,
            );
          i.rotation.y = -r;
        }
    c = t + 0.008;
  }
  o(`dark`, 0, c + 0.008, 0, 0.009, 0.016, `y`);
  let l = a(`steel`, 0.012, c - 0.012, 0, 0.005, 0.05, 0.012, 0.0015);
  return (
    (l.rotation.z = -0.22),
    s(`steel`, -0.013, c + 0.012, 0, 0.0095, 0.0015, `z`),
    r
  );
}
function Mr(e, t = `rpg`) {
  let n = new w(),
    { cyl: r, box: i } = vr(n, e);
  if (t === `rpg`) {
    r(`olive`, 0.08, 0, 0, 0.02, 0.16);
    for (let e = 0; e < 4; e++) {
      let t = i(`dark`, 0.02, 0, 0, 0.07, 0.002, 0.045, 0.001);
      t.rotation.x = (e * Math.PI) / 4;
    }
    (r(`olive`, 0.2, 0, 0, 0.024, 0.08, `x`, 0.052),
      r(`olive`, 0.28, 0, 0, 0.052, 0.1),
      r(`olive`, 0.4, 0, 0, 0.052, 0.16, `x`, 0.012),
      r(`dark`, 0.49, 0, 0, 0.012, 0.02, `x`, 0.006),
      r(`cream`, 0.28, 0, 0, 0.0525, 0.012));
  } else {
    (r(`olive`, 0.25, 0, 0, 0.036, 0.5),
      r(`olive`, 0.55, 0, 0, 0.036, 0.12, `x`, 0.01),
      r(`red`, 0.08, 0, 0, 0.0365, 0.015));
    for (let e = 0; e < 4; e++) {
      let t = i(`dark`, -0.02, 0, 0, 0.06, 0.0025, 0.08, 0.001);
      t.rotation.x = (e * Math.PI) / 4;
    }
  }
  return n;
}
var Nr = [`rpg`, `tube`, `recoilless`];
function Pr(e, t) {
  let n = new w(),
    { cyl: r, box: i, beam: a, bolt: o, grooves: s } = vr(n, e);
  if (t === `rpg`) {
    (r(`dark`, 0, 0, 0, 0.028, 0.95), r(`wood`, 0.04, 0, 0, 0.037, 0.3));
    for (let e of [-0.11, 0.19]) r(`dark`, e, 0, 0, 0.039, 0.012);
    (r(`dark`, -0.5, 0, 0, 0.046, 0.1, `x`, 0.03),
      r(`dark`, 0.47, 0, 0, 0.032, 0.03));
    for (let e of [-0.02, 0.13])
      i(`rubber`, e, -0.07, 0, 0.03, 0.1, 0.032, 0.006);
    (a(`dark`, [-0.02, -0.04, 0], [0.06, -0.085, 0], 0.005),
      i(`dark`, 0.13, 0.05, 0.036, 0.06, 0.045, 0.02, 0.004),
      i(`glass`, 0.13, 0.05, 0.047, 0.018, 0.018, 0.003, 0.001));
    let t = Mr(e, `rpg`);
    ((t.position.x = 0.47), n.add(t));
  } else if (t === `tube`) {
    r(`olive`, 0, 0, 0, 0.043, 1);
    for (let e of [-0.5, 0.5]) r(`dark`, e, 0, 0, 0.047, 0.04);
    for (let e of [-0.25, 0.3]) r(`dark`, e, 0, 0, 0.045, 0.018);
    (i(`olive`, 0.05, -0.07, 0, 0.035, 0.1, 0.03, 0.006),
      i(`dark`, 0.18, -0.065, 0, 0.07, 0.04, 0.03, 0.006),
      i(`dark`, 0.02, 0.06, 0, 0.05, 0.035, 0.02, 0.004),
      i(`dark`, 0.24, 0.065, 0, 0.03, 0.045, 0.02, 0.004),
      a(`rubber`, [-0.42, -0.05, 0.03], [0.4, -0.05, 0.03], 0.006),
      s(0.3, 0, 0.045, 0.14, 0.02, 5));
  } else {
    (r(`dark`, 0, 0, 0, 0.05, 1.1),
      r(`dark`, -0.6, 0, 0, 0.07, 0.14, `x`, 0.05),
      r(`steel`, 0.56, 0, 0, 0.055, 0.03),
      i(`dark`, 0.05, -0.1, 0, 0.04, 0.14, 0.035, 0.006),
      i(`rubber`, -0.15, -0.1, 0, 0.035, 0.12, 0.035, 0.006),
      i(`dark`, 0.1, 0.09, 0.05, 0.16, 0.06, 0.04, 0.006));
    for (let e of [-0.3, 0, 0.3]) r(`dark`, e, 0, 0, 0.056, 0.02);
    (o(0.1, 0.09, 0.072, 0.006),
      a(`dark`, [0.35, -0.05, 0], [0.45, -0.2, 0.08], 0.008),
      a(`dark`, [0.35, -0.05, 0], [0.45, -0.2, -0.08], 0.008));
  }
  return n;
}
function Fr(e, t = `olive`) {
  let n = new w(),
    { box: r, beam: i } = vr(n, e);
  (r(t, 0, 0.085, 0, 0.28, 0.17, 0.11, 0.008),
    r(t, 0, 0.18, 0, 0.29, 0.022, 0.12, 0.006),
    r(`dark`, 0.12, 0.13, 0, 0.03, 0.07, 0.122, 0.004),
    i(`dark`, [-0.06, 0.2, 0], [0.06, 0.2, 0], 0.006));
  for (let e of [-0.06, 0.06]) i(`dark`, [e, 0.191, 0], [e, 0.2, 0], 0.006);
  return n;
}
function Ir(e, t, n, r, { open: i = !1, lidLean: a = !1 } = {}) {
  let o = new w(),
    { box: s, ring: c } = vr(o, e),
    l = Math.max(2, Math.round(n / 0.12));
  for (let e = 0; e < l; e++) {
    let i = ((e + 0.5) * n) / l;
    for (let a of [-1, 1])
      (s(
        e % 2 ? `crate` : `crateDark`,
        0,
        i,
        a * (r / 2 - 0.009),
        t - 0.02,
        n / l - 0.008,
        0.018,
        0.003,
      ),
        s(
          e % 2 ? `crateDark` : `crate`,
          a * (t / 2 - 0.009),
          i,
          0,
          0.018,
          n / l - 0.008,
          r - 0.02,
          0.003,
        ));
  }
  s(`crateDark`, 0, 0.012, 0, t - 0.02, 0.024, r - 0.02, 0.003);
  for (let e of [-1, 1])
    for (let i of [-1, 1])
      s(
        `grain`,
        e * (t / 2 - 0.02),
        n / 2,
        i * (r / 2 - 0.02),
        0.045,
        n,
        0.045,
        0.004,
      );
  for (let e of [-1, 1])
    c(`cream`, e * (t / 2 + 0.004), n * 0.7, 0, 0.035, 0.006, `x`);
  if (i) s(`felt`, 0, n - 0.03, 0, t - 0.06, 0.02, r - 0.06, 0.003);
  else
    for (let e = 0; e < 4; e++)
      s(
        e % 2 ? `crate` : `crateDark`,
        0,
        n + 0.009,
        -r / 2 + 0.01 + ((e + 0.5) * (r - 0.02)) / 4,
        t,
        0.018,
        (r - 0.02) / 4 - 0.006,
        0.003,
      );
  if (a) {
    let i = new w();
    o.add(i);
    let a = vr(i, e);
    for (let e = 0; e < 4; e++)
      a.box(
        e % 2 ? `crate` : `crateDark`,
        0,
        0,
        -r / 2 + ((e + 0.5) * r) / 4,
        t,
        0.018,
        r / 4 - 0.006,
        0.003,
      );
    (i.position.set(0, n * 0.62, -r / 2 - 0.1), (i.rotation.x = 1.25));
  }
  return o;
}
function Lr(e) {
  let t = new w(),
    { box: n } = vr(t, e),
    r = 0.62,
    i = 0.36;
  (n(`dark`, 0, 0.03, 0, r, 0.06, i, 0.006),
    n(`felt`, 0, 0.058, 0, 0.59, 0.006, 0.32999999999999996, 0.002));
  for (let e of [-0.62 / 6, r / 6])
    n(`dark`, e, 0.05, 0, 0.012, 0.04, 0.32999999999999996, 0.002);
  for (let e of [-1, 1])
    (n(`dark`, e * 0.43333333333333335, 0.02, 0, r / 3, 0.04, i, 0.006),
      n(
        `felt`,
        e * 0.43333333333333335,
        0.042,
        0,
        r / 3 - 0.03,
        0.005,
        0.32999999999999996,
        0.002,
      ),
      n(`brass`, e * 0.32, 0.03, i / 2 - 0.04, 0.03, 0.012, 0.03, 0.002));
  return {
    group: t,
    slots: [
      ...[0, 1, 2, 3].map((e) => ({
        x: -0.075 + e * 0.05,
        y: 0.062,
        z: 0,
        ry: Math.PI / 2,
        s: 0.8,
      })),
      ...[-1, 1].flatMap((e) =>
        [0, 1, 2].map((t) => ({
          x: e * 0.43333333333333335 + (t - 1) * 0.062,
          y: 0.046,
          z: 0,
          ry: Math.PI / 2,
          s: 0.72,
        })),
      ),
    ],
  };
}
function Rr(e, t = 1.4, n = 2.9, r = 0.36, i = 6) {
  let a = new w(),
    { box: o, cyl: s } = vr(a, e);
  (o(`shelf`, 0, 0.15, r / 2, t, 0.3, r, 0.01),
    o(`shelf`, 0, n + 0.07, r / 2, t + 0.08, 0.14, r + 0.06, 0.01),
    o(`brass`, 0, n, r / 2 + 0.01, t + 0.06, 0.015, r + 0.05, 0.003));
  for (let e of [-1, 1]) {
    s(
      `shelf`,
      e * (t / 2 - 0.05),
      n / 2 + 0.15,
      r - 0.02,
      0.045,
      n - 0.3,
      `y`,
      0.04,
      16,
    );
    for (let i = 0; i < 7; i++) {
      let a = (i / 7) * Math.PI;
      s(
        `grain`,
        e * (t / 2 - 0.05) + Math.cos(a) * 0.044,
        n / 2 + 0.15,
        r - 0.02 + Math.sin(a) * 0.044,
        0.004,
        n - 0.34,
        `y`,
      );
    }
  }
  o(`red`, 0, n / 2 + 0.15, 0.012, t - 0.04, n - 0.3, 0.02, 0.002);
  let c = [];
  for (let e = 0; e < i; e++) {
    let a = 0.34 + (e * (n - 0.5)) / i;
    (o(`shelf`, 0, a, r / 2, t - 0.16, 0.025, r - 0.02, 0.004),
      o(
        `glow`,
        0,
        a + (n - 0.5) / i - 0.03,
        r - 0.05,
        t - 0.2,
        0.008,
        0.01,
        0.002,
      ),
      c.push(a + 0.0125));
  }
  return { group: a, rows: c, w: t, d: r };
}
function zr(e) {
  let t = new w(),
    { box: n, bolt: r } = vr(t, e),
    i = 0.62,
    a = 1.12,
    o = 0.4;
  (n(`olive`, 0, 0.03, 0, i, 0.06, o, 0.01),
    n(`olive`, 0, 1.09, 0, i, 0.06, o, 0.01),
    n(`olive`, 0, a / 2, -0.185, i, a, 0.03, 0.01));
  for (let e of [-1, 1]) {
    n(`olive`, e * (i / 2 - 0.015), a / 2, 0, 0.03, a, o, 0.01);
    for (let t of [0.2, 0.9200000000000002]) r(e * 0.311, t, 0, 0.014);
  }
  (n(`dark`, 0, 0.16, -0.02, 0.54, 0.05, 0.28, 0.006),
    n(`dark`, 0, a * 0.62, -0.1, 0.54, 0.03, 0.08, 0.006));
  let s = new w();
  t.add(s);
  let c = vr(s, e);
  c.box(`olive`, -0.62 / 2, a / 2, 0, i, a, 0.03, 0.01);
  for (let e of [0.25, 0.55, 0.85])
    c.box(`dark`, -0.62 / 2, e, 0.02, i * 0.6, 0.03, 0.01, 0.004);
  return (
    s.position.set(i / 2, 0, o / 2),
    (s.rotation.y = -1.9),
    {
      group: t,
      slots: [-0.2, -0.1, 0, 0.1, 0.2].map((e) => ({
        x: e,
        y: 0.19,
        z: -0.02,
      })),
      w: i,
      h: a,
      d: o,
    }
  );
}
function Br(e, t = 1.5, n = 1.3) {
  let r = new w(),
    { box: i, cyl: a } = vr(r, e);
  (i(`grain`, 0, n / 2, 0.015, t, n, 0.03, 0.01),
    i(`brass`, 0, n + 0.01, 0.02, t + 0.02, 0.02, 0.04, 0.003),
    i(`brass`, 0, -0.01, 0.02, t + 0.02, 0.02, 0.04, 0.003));
  let o = [0.22, 0.62, 1.02];
  for (let e of o)
    for (let n of [-t * 0.3, t * 0.3])
      a(`brass`, n, e - 0.06, 0.08, 0.008, 0.12, `z`);
  return { group: r, rows: o };
}
