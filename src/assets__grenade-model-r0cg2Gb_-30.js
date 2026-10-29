// assets__grenade-model-r0cg2Gb_ 30 — kind
// Lines 32545-32893 of readable/assets__grenade-model-r0cg2Gb_.pretty.js (statement-aligned).
function zi(e, t, n, r = 1) {
  if (t.radius >= 0.016) return Ni(e, t, n, r);
  let { lathe: i, rbox: a } = e,
    o = t.radius * r;
  if (
    (t.straight
      ? i(
          `steel`,
          0,
          0,
          0,
          [
            [0, o],
            [n - 0.0015, o],
            [n, o * 0.9],
            [n, 5e-4],
          ],
          `x`,
        )
      : i(
          `steel`,
          0,
          0,
          0,
          [
            [0, o],
            [n - 0.014, o],
            [n - 0.014, t.radius * 0.82],
            [n, t.radius * 0.82],
            [n, 5e-4],
          ],
          `x`,
        ),
    r > 1)
  )
    for (let e of [0, 1.05, 2.1, 3.14, 4.19, 5.24])
      a(
        `inset`,
        (n - 0.014) / 2,
        Math.cos(e) * o,
        Math.sin(e) * o,
        n - 0.04,
        0.0016,
        0.0016,
        0,
      ).rotation.x = e;
  return { tip: [n, 0, 0] };
}
var Bi = {
  box: { L: 0.188, c: 0.036, D: 0.064, W: 0.027 },
  curve: { L: 0.205, c: 0.085, D: 0.062, W: 0.028 },
  rpk: { L: 0.27, c: 0.12, D: 0.064, W: 0.029 },
  battle: { L: 0.168, c: 0.014, D: 0.078, W: 0.031 },
  smg: { L: 0.165, c: 0.045, D: 0.036, W: 0.024 },
  smgstraight: { L: 0.17, c: 0.004, D: 0.045, W: 0.026 },
  mpx: { L: 0.16, c: 0.006, D: 0.034, W: 0.024 },
  pistol: { L: 0.13, c: 0, D: 0.03, W: 0.022 },
  short: { L: 0.075, c: 0, D: 0.09, W: 0.025 },
  grip: { L: 0.1, c: 0, D: 0.035, W: 0.024 },
  akm: { L: 0.2, c: 0.082, D: 0.06, W: 0.027, mat: `steel`, ribs: !0 },
  g36: { L: 0.19, c: 0.042, D: 0.064, W: 0.027, mat: `smoke`, lugs: !0 },
  aug: { L: 0.18, c: 0.03, D: 0.062, W: 0.028, mat: `smoke` },
  val: { L: 0.13, c: 0.026, D: 0.056, W: 0.025, mat: `steel`, ribs: !0 },
};
function Vi(e, t, n, r = !1) {
  let i = Ti(e, n, r, t.kind);
  if (i) return i;
  if (t.kind === `short50`) return Pi(e, n, r);
  if (t.kind === `saker`) return ar(e, n, r);
  if (sr[t.kind]) return sr[t.kind](e, n, r);
  if (Si(e, t, n, r)) return {};
  let { slab: a, rbox: o, beam: s, tube: c } = e;
  if (t.kind === `top`) {
    let e = (t.length ?? 0.21) * (n > 1 ? 1.2 : 1),
      i = 0.026;
    o(`smoke`, 0, i / 2, 0, e, i, 0.054, 0.006);
    for (let t of [-0.009, 0.009])
      o(`brass`, 0, i * 0.5, t, e * 0.9, i * 0.55, 0.009, 0.002);
    return (
      o(
        `magpoly`,
        -e / 2 + 0.01,
        i / 2,
        0,
        0.02,
        0.027999999999999997,
        0.056,
        0.004,
      ),
      r && o(`anod`, -e / 2 - 0.006, i / 2, 0, 0.008, 0.012, 0.03, 0.002),
      {}
    );
  }
  if (t.kind === `g11`) {
    let e = 0.25 * (n > 1 ? 1.3 : 1);
    return (
      o(`magpoly`, -e / 2 + 0.01, -0.012, 0, e, 0.024, 0.026, 0.003),
      o(`magpoly`, 0.012, -0.015, 0, 0.008, 0.03, 0.03, 0.002),
      o(`inset`, 0.0165, -0.015, 0, 8e-4, 0.012, 0.02, 0),
      r && o(`anod`, -0.02, -0.004, 0.016, 0.02, 0.008, 0.006, 0.002),
      {}
    );
  }
  if (t.kind === `belt`) {
    let e = 0.1 * (n > 1 ? 1.35 : 1);
    (o(`pouch`, 0, -e / 2 - 0.004, -0.008, 0.115, e, 0.068, 0.01),
      o(`magpoly`, 0, -0.006, -0.008, 0.118, 0.008, 0.07, 0.003));
    for (let e = 0; e < 5; e++) {
      let t = -0.004 + e * 0.007,
        n = -0.018 + e * 0.008;
      (c(`brass`, n, t, -0.04, 0.0045, 0.03, `z`, 0.0045, 8),
        o(`steel`, n, t, -0.04, 0.006, 0.003, 0.034, 0));
    }
    return (
      r &&
        s(`rubber`, [-0.05, -e * 0.6, -0.043], [0.05, -e * 0.6, -0.043], 0.003),
      {}
    );
  }
  let l = Bi[t.kind];
  if (!l) throw Error(`No realistic magazine for kind ${t.kind}`);
  let u = l.L * n,
    d = l.c * n,
    f = l.D,
    p = l.W,
    m = (e) => d * e ** 1.6,
    h = [];
  for (let e = 0; e <= 8; e++) {
    let t = e / 8;
    h.push([f / 2 + m(t), -u * t]);
  }
  for (let e = 8; e >= 0; e--) {
    let t = e / 8;
    h.push([-f / 2 + m(t) + 0.004 * t, -u * t]);
  }
  for (let e of r ? [0, p + 0.006] : [0]) {
    let t = l.mat ?? `magpoly`;
    if (
      (a(t, h, p, e, 0.0025),
      o(
        l.mat === `smoke` ? `magpoly` : t,
        d + 0.002,
        -u - 0.004,
        e,
        f + 0.006,
        0.009,
        p + 0.003,
        0.0025,
      ),
      l.mat === `smoke`)
    )
      for (let t = 0; t < 7; t++) {
        let n = 0.08 + t * 0.12;
        o(`brass`, f * 0.12 + m(n), -u * n, e, f * 0.6, 0.007, p * 0.55, 0.002);
      }
    if (l.lugs)
      for (let t of [-1, 1])
        o(
          `magpoly`,
          m(0.35) - f * 0.1,
          -u * 0.35,
          e + t * (p / 2 + 0.002),
          0.014,
          0.03,
          0.004,
          0.0012,
        );
    if (l.ribs)
      for (let n of [-1, 1])
        for (let r of [-f * 0.22, f * 0.12]) {
          let i = [];
          for (let e = 1; e <= 7; e++) {
            let t = 0.12 + e * 0.1;
            i.push([m(t) + r + 0.003, -u * t]);
          }
          for (let e = 7; e >= 1; e--) {
            let t = 0.12 + e * 0.1;
            i.push([m(t) + r - 0.003, -u * t]);
          }
          a(t, i, 0.0024, e + (n * p) / 2, 8e-4);
        }
    if (!l.ribs && l.mat !== `smoke`)
      for (let t = 0; t < 5; t++) {
        let n = 0.55 + t * 0.07;
        o(
          `inset`,
          d * n * 1.2 - 0.003,
          -u * n,
          e + p / 2 + 2e-4,
          f * 0.75,
          0.0025,
          6e-4,
          0,
        ).rotation.z = -Math.atan2(d, u) * 0.9;
      }
  }
  return (
    r &&
      o(
        `anod`,
        d * 0.3,
        -u * 0.35,
        (p + 0.006) / 2,
        0.03,
        0.03,
        p * 2 + 0.01,
        0.002,
      ),
    {}
  );
}
function Hi(e, t, n, r, i, a = !1, { see: o = !1, caps: s = !1 } = {}) {
  let c = Ri[n]?.[r];
  if (!c) throw Error(`Unknown ${n} attachment ${r}`);
  if (!c.build) return null;
  let l = tr(e, t, a);
  if (
    ((l.group = e),
    (l.caps = s),
    (l.side = (e) => {
      for (let t of [-1, 1]) e(t);
    }),
    o)
  ) {
    let e = l.lathe;
    ((l.see = !0),
      (l.lathe = (n, r, i, a, o, ...s) => {
        let c = o.filter(
            ([, e], t) => e > 0.002 || (t > 0 && t < o.length - 1),
          ),
          l = e(n, r, i, a, c, ...s);
        return (
          (l.material = t[n + `In`] ?? l.material),
          (l.userData.sightTube = !0),
          l
        );
      }));
  }
  let u = c.build(l, i, i) || {};
  if (n === `muzzle` && i.radius > 0.0095) {
    let t = i.radius / 0.0095;
    (e.scale.setScalar(t), (u.tip = u.tip.map((e) => e * t)));
  }
  return u;
}
function Ui(e, t, n, r, i = 0.018) {
  for (let a of t)
    (e.tube(`kit_tape`, a, n, 0, r + 0.0011, i, `x`, r + 0.0011, 12),
      e.tube(
        `kit_tape`,
        a + i * 0.35,
        n,
        0,
        r + 0.0016,
        0.003,
        `x`,
        r + 0.0016,
        12,
      ));
}
var Wi = Object.freeze({
    m24: {
      tape: 4935736,
      cheek: [-0.2, 0.006, -0.02],
      scope: { front: `cap`, level: !0 },
      notes: `Flip caps, anti-cant level, OD barrel tape`,
      build(e) {
        Ui(e, [0.49, 0.545], 0, 0.0125);
      },
    },
    m110: {
      tape: 9075290,
      cheek: [-0.18, 0.045, -0.012],
      scope: { front: `ard` },
      notes: `Eyepiece cap, honeycomb kill-flash, tan barrel tape`,
      build(e) {
        Ui(e, [0.585, 0.63], 0, 0.012);
      },
    },
    scout: {
      tape: 9075290,
      cheek: [-0.2, 0.004, -0.018],
      scope: { front: `cap` },
      notes: `Flip caps, tan barrel tape`,
      build(e) {
        Ui(e, [0.455, 0.5], 0, 0.011, 0.014);
      },
    },
    awm: {
      cheek: [-0.22, 0.024, -0.016],
      scope: { front: `ard`, level: !0 },
      notes: `Eyepiece cap, honeycomb kill-flash, anti-cant level`,
      build() {},
    },
    m95: {
      cheek: [0.06, 0.03, -0.012],
      scope: { front: `cap`, level: !0 },
      notes: `Flip caps, anti-cant level, new buttstock`,
      build() {},
    },
    m200: {
      cheek: [-0.27, 0.045, -0.014],
      scope: { front: `ard`, level: !0 },
      notes: `Eyepiece cap, honeycomb kill-flash, anti-cant level`,
      build() {},
    },
  }),
  Gi = `mid`,
  Ki = { brake: `compensator`, suppressor: `suppressor` },
  qi = Object.freeze({
    reflex: { eye: 0.04, plane: 0.02, aperture: [0.011, 0.011] },
    micro: { eye: 0.034, plane: 0.006, aperture: [0.009, 0.008] },
    holo: { eye: 0.04, plane: 0.036, aperture: [0.012, 0.016] },
    acog: { eye: 0.04, rear: -0.075 },
    scope4: { eye: 0.042 * Ei.diameter, rear: -0.14 * Ei.length },
    scope8: { eye: 0.05 * Ei.diameter, rear: -0.17 * Ei.length },
    thermal: { eye: 0.046, rear: -0.07 },
  });
function Ji(e) {
  if (!e || e.type === `irons` || e.type === `none`) return null;
  if (e.thermal) return `thermal`;
  let t = Object.entries(he).find(([, t]) => t.optic === e)?.[0];
  return t && qi[t]
    ? t
    : e.type === `reflex`
      ? e.windowScale
        ? `micro`
        : `reflex`
      : e.type === `holo`
        ? `holo`
        : e.type === `scope`
          ? e.model && qi[e.model]
            ? e.model
            : e.fov <= 12
              ? `scope8`
              : e.fovs
                ? `scope4`
                : `acog`
          : null;
}
var Yi = new WeakMap();
function Xi(e) {
  let t = er(),
    n = Object.values(t);
  (t.glass.dispose(), n.splice(n.indexOf(t.glass), 1), (t.glass = e.glass));
  for (let e of [`anod`, `rubber`])
    ((t[e + `In`] = t[e].clone()), (t[e + `In`].side = 2), n.push(t[e + `In`]));
  return (e.disposables.push(...n), t);
}
