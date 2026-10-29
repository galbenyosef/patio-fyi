// assets__grenade-model-r0cg2Gb_ 45 — dark
// Lines 37077-37416 of readable/assets__grenade-model-r0cg2Gb_.pretty.js (statement-aligned).
var $o = { x: 0.02, drop: 0.035, pitch: 0.22, yaw: 0.1, cant: 0.32 },
  es = (e) => ((e = Math.max(0, Math.min(1, e))), e * e * (3 - 2 * e)),
  ts = (e) =>
    0.5 - Math.sin(Math.asin(1 - 2 * Math.max(0, Math.min(1, e))) / 3),
  ns = {
    hold: [0, 0, 0],
    aimCurve: !1,
    aimDip: 0,
    sway: 1,
    sprint: null,
    push: 0.06,
    lift: 0.06,
    aimedPush: 1,
    recovery: null,
    cap: 2,
    shake: 0,
  },
  rs = {
    ar: { push: 0.07, lift: 0.06, recovery: 16, shake: 0.0015 },
    lmg: {
      hold: [0.022, -0.032, 0.01],
      aimCurve: !0,
      aimDip: 0.02,
      sway: 1.3,
      sprint: { x: 0.012, drop: 0.012, pitch: 0.14, yaw: 0.2, cant: 0.5 },
      push: 0.045,
      lift: 0.034,
      aimedPush: 0.35,
      recovery: 6.5,
      cap: 3.4,
      shake: 0.0045,
    },
  },
  is = (e) => ({
    ...ns,
    ...(rs[e.class] ?? {}),
    ...(e.presentation?.hold ? { hold: e.presentation.hold } : {}),
  });
function as(e, t, n, r) {
  if (n.mounts) return ea(e, t, n, r);
  if (!t.attachments?.muzzle || t.attachments.muzzle === `standard`)
    return n.muzzleZ;
  let i = t.attachments.muzzle === `suppressor`,
    a = t.class === `pistol`,
    o = a ? 0.15 : i ? 0.23 : 0.09,
    s = a ? 0.012 : i ? 0.029 : 0.025,
    c = $(e, s, s, o, 0, 0.012, n.muzzleZ - o * 0.4, r.dark);
  c.name = `attachment_` + t.attachments.muzzle;
  for (let t = 0; t < (i ? 3 : 2); t++)
    $(
      e,
      s + 0.002,
      s + 0.002,
      0.008,
      0,
      0.012,
      n.muzzleZ - o * 0.2 - t * 0.035,
      r.steel,
    );
  return n.muzzleZ - o * 0.9;
}
var os = { reflex: 0.32, holo: 0.32, scope: 0.24, irons: 0.34 },
  ss = { housing: 0.35, reflex: 2.8, holo: 2.8, irons: 2.2, scope: 1, max: 12 },
  cs = {
    on: !0,
    relief: {
      default: Ia.eyeDistance,
      ...Object.fromEntries(
        Object.entries(Fa).map(([e, t]) => [e, t.eyeDistance]),
      ),
    },
    gunFov: {},
    hipTurn: {},
    fov: null,
    bareEye: 0.04,
    depth: 6,
    kickDamp: 2.8,
  },
  ls = [0, 0, 0],
  us = Math.PI / 180,
  ds = (e) => cs.hipTurn[e] ?? Fa[e]?.hipTurn ?? ls,
  fs = { align: 1, dist: 5 };
function ps(e) {
  let t = Fa[e.id],
    n = e.optic,
    r = cs.relief[e.id] ?? cs.relief.default,
    i = e.attachments?.rail;
  if (n?.kit) {
    let a = i ?? n.rail ?? t?.rails?.[n.kit] ?? 0;
    return n.rail === a && n.relief != null
      ? e
      : { ...e, optic: { ...n, rail: a, relief: n.relief ?? r } };
  }
  return !t?.sight ||
    !n ||
    (e.attachments?.optic ?? `standard`) !== `standard` ||
    ![`reflex`, `holo`].includes(n.type)
    ? e
    : {
        ...e,
        optic: {
          ...n,
          type: `reflex`,
          kit: t.sight,
          rail: i ?? t.rail,
          relief: r,
        },
      };
}
var ms = new p(),
  hs = new p(),
  gs = (e, t = 0.7, n = 0.2) =>
    new o({ color: e, roughness: t, metalness: n, flatShading: !0 }),
  _s = (e, t = 1) =>
    new b({
      color: e,
      transparent: !0,
      opacity: t,
      depthTest: !1,
      depthWrite: !1,
      toneMapped: !1,
    });
function Q(e, t, r, a, o, s, c, l, u) {
  let d = new n(new i(t, r, a), l);
  return (
    d.position.set(o, s, c),
    u && d.rotation.set(u[0] || 0, u[1] || 0, u[2] || 0),
    (d.castShadow = !0),
    e.add(d),
    d
  );
}
function $(e, t, r, i, a, o, s, c, l = `z`, u = !1) {
  let d = new n(new I(t, r, i, 10, 1, u), c);
  return (
    u && (d.name = `scope_open_tube`),
    l === `z`
      ? (d.rotation.x = Math.PI / 2)
      : l === `x` && (d.rotation.z = Math.PI / 2),
    d.position.set(a, o, s),
    (d.castShadow = !0),
    e.add(d),
    d
  );
}
function vs(e, t, n) {
  let r = t.class,
    i = gs(t.color ?? 3882806, 0.8, 0.08);
  if ((n.disposables.push(i), r === `launcher`)) return Xn(e, t, n, Q, $);
  if (r === `tool`) {
    let r = gs(t.color, 0.8, 0.05),
      i = gs(2303519, 0.85, 0.1);
    if ((n.disposables.push(r, i), t.tool === `repair`)) {
      let a = gs(12093742, 0.35, 0.7),
        o = gs(10134182, 0.3, 0.8),
        s = new b({ color: 9426175 });
      return (
        n.disposables.push(a, o, s),
        Q(e, 0.05, 0.13, 0.05, 0.02, -0.06, 0, i, [0.25, 0, 0]),
        $(e, 0.032, 0.032, 0.2, 0.02, 0, -0.06, a),
        $(e, 0.012, 0.009, 0.16, 0.02, 0, -0.24, o),
        Q(e, 0.03, 0.02, 0.02, 0.02, -0.035, -0.08, t.color ? r : i),
        $(e, 0.008, 0.002, 0.03, 0.02, 0, -0.335, s),
        {
          top: 0.05,
          muzzleZ: -0.34,
          sightZ: -0.1,
          grip: [0.02, -0.06, 0],
          support: [0.02, -0.02, -0.12],
          adsDist: 0.42,
        }
      );
    }
    return wo(e, t, n);
  }
  if (r === `defib`) return wo(e, t, n);
  if (r === `pistol`)
    return (
      Q(e, 0.03, 0.038, 0.19, 0, 0.012, -0.075, n.steel),
      Q(e, 0.028, 0.03, 0.17, 0, -0.018, -0.065, n.dark),
      Q(e, 0.026, 0.09, 0.036, 0, -0.07, 0, i, [0.18, 0, 0]),
      Q(e, 0.008, 0.018, 0.012, 0, -0.03, -0.09, n.dark),
      $(e, 0.006, 0.006, 0.03, 0, 0.012, -0.18, n.steel),
      {
        top: 0.031,
        muzzleZ: -0.19,
        sightZ: -0.03,
        magazine: Q(
          e,
          0.022,
          0.065,
          0.028,
          0,
          -0.083,
          0.002,
          n.dark,
          [0.18, 0, 0],
        ),
      }
    );
  let a = r === `dmr` || r === `sniper`,
    o = r === `lmg`,
    s = r === `smg` || r === `carbine`,
    c = o ? 0.36 : a ? 0.34 : r === `smg` ? 0.26 : 0.3,
    l = o ? 0.085 : 0.072,
    u = o ? 0.075 : r === `smg` ? 0.052 : 0.062;
  (Q(e, u, l, c, 0, 0, -c / 2, n.dark),
    Q(e, u * 0.7, 0.014, c * 0.8, 0, l / 2 + 0.007, -c / 2, n.steel));
  let d = r === `smg` ? 0.1 : s ? 0.18 : o ? 0.24 : a ? 0.26 : 0.22,
    f = -c - d / 2;
  Q(e, u * 0.82, l * 0.8, d, 0, -0.004, f, i);
  for (let t of [f - d * 0.3, f, f + d * 0.3])
    Q(e, u * 0.9, 0.006, 0.012, 0, l * 0.36, t, n.dark);
  let p =
      r === `sniper`
        ? 0.5
        : r === `dmr`
          ? 0.38
          : o
            ? 0.34
            : r === `smg`
              ? 0.08
              : s
                ? 0.2
                : 0.26,
    m = -c - d;
  $(e, o ? 0.011 : 0.0095, o ? 0.013 : 0.011, p, 0, 0.012, m - p / 2, n.steel);
  let h = m - p - 0.03;
  ($(e, 0.014, 0.014, 0.05, 0, 0.012, h + 0.02, n.dark),
    Q(e, 0.022, 0.07, 0.03, 0, -l / 2 - 0.03, -0.06, i, [0.25, 0, 0]));
  let g;
  g = o
    ? Q(e, 0.09, 0.11, 0.12, 0, -l / 2 - 0.05, -0.22, n.dark)
    : r === `sniper`
      ? Q(e, 0.03, 0.05, 0.07, 0, -l / 2 - 0.02, -0.2, n.dark)
      : Q(
          e,
          0.026,
          r === `smg` ? 0.2 : 0.15,
          r === `smg` ? 0.045 : 0.065,
          0,
          -l / 2 - (r === `smg` ? 0.09 : 0.065),
          -0.19,
          n.dark,
          [r === `smg` ? 0 : -0.16, 0, 0],
        );
  let _ = g.geometry.parameters.height,
    v = g.geometry.parameters.width,
    y = g.geometry.parameters.depth;
  Q(g, v * 1.15, 0.012, y * 1.08, 0, -_ / 2, 0, n.steel);
  for (let e of [-y * 0.25, y * 0.25])
    Q(g, 0.004, _ * 0.65, 0.006, v * 0.5, 0, e, n.steel);
  if (
    (r === `sniper` || r === `dmr`
      ? (Q(e, 0.05, 0.085, 0.24, 0, -0.012, 0.12, i),
        Q(e, 0.05, 0.03, 0.1, 0, 0.045, 0.12, i))
      : r === `smg`
        ? ($(e, 0.006, 0.006, 0.18, 0, 0.012, 0.09, n.steel),
          Q(e, 0.04, 0.05, 0.02, 0, 0, 0.18, n.dark))
        : s
          ? (Q(e, 0.02, 0.028, 0.16, 0, 0, 0.08, n.steel),
            Q(e, 0.05, 0.075, 0.05, 0, -0.01, 0.16, i))
          : Q(e, 0.045, 0.075, 0.2, 0, -0.01, 0.1, i),
    o)
  ) {
    Q(e, 0.016, 0.02, 0.1, 0, l / 2 + 0.03, -0.14, n.dark);
    for (let t of [-0.02, 0.02])
      Q(e, 0.006, 0.09, 0.006, t, -0.05, m - 0.06, n.steel, [
        -0.3,
        0,
        t > 0 ? -0.35 : 0.35,
      ]);
  }
  let x =
    r === `sniper`
      ? Q(e, 0.035, 0.012, 0.012, 0.03, 0, -0.05, n.steel, [0, 0, 0.6])
      : null;
  return (
    Q(e, 0.002, 0.018, 0.068, u / 2 + 0.001, 0.007, -0.11, n.steel),
    Q(e, 0.003, 0.012, 0.052, u / 2 + 0.0025, 0.007, -0.11, n.dark),
    Q(
      e,
      0.005,
      0.009,
      0.023,
      -u / 2 - 0.002,
      -0.018,
      -0.075,
      n.steel,
      [0, 0.25, 0],
    ),
    Q(e, 0.004, 0.018, 0.005, 0, l / 2 + 0.018, m + 0.01, n.dark),
    {
      top: l / 2 + 0.014,
      muzzleZ: h,
      sightZ: -c * 0.55,
      magazine: g,
      bolt: x,
      gripZ: f + d * 0.22,
      gripY: -l / 2 - 0.015,
    }
  );
}
function ys(e, t, n, r) {
  if (n.mounts) return ta(e, t, n, r);
  if (
    !t.attachments?.grip ||
    t.attachments.grip === `standard` ||
    n.gripZ == null
  )
    return;
  let i = t.attachments.grip === `angled`,
    a = n.gripZ,
    o = n.gripY ?? -0.05,
    s = Q(
      e,
      0.018,
      0.055,
      0.024,
      0,
      o - 0.026,
      a,
      r.dark,
      i ? [-0.35, 0, 0] : 0,
    );
  ((s.name = `attachment_grip_` + t.attachments.grip),
    Q(e, 0.02, 0.01, 0.028, 0, o - 0.05, a + (i ? 0.012 : 0), r.steel));
}
function bs(e, t) {
  let r = new n(
    new s(e.geometry.parameters.radius, 16),
    t.reticleEdge ?? t.dark,
  );
  return (
    (r.name = `reticle_contrast_edge`),
    (r.renderOrder = 39),
    e.add(r),
    e
  );
}
