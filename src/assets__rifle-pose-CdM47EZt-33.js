// assets__rifle-pose-CdM47EZt 33 — dark
// Lines 32573-32888 of readable/assets__rifle-pose-CdM47EZt.pretty.js (statement-aligned).
var ra = { x: 0.02, drop: 0.035, pitch: 0.22, yaw: 0.1, cant: 0.32 },
  ia = (e) => ((e = Math.max(0, Math.min(1, e))), e * e * (3 - 2 * e));
function aa(e, t, n, r) {
  if (n.mounts) return gr(e, t, n, r);
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
var oa = { reflex: 0.32, holo: 0.32, scope: 0.24, irons: 0.34 },
  sa = { housing: 0.35, reflex: 2.8, holo: 2.8, irons: 2.2, scope: 1, max: 12 },
  ca = {
    on: !0,
    relief: {
      default: Zr.eyeDistance,
      ...Object.fromEntries(
        Object.entries(Xr).map(([e, t]) => [e, t.eyeDistance]),
      ),
    },
    gunFov: {},
    hipTurn: {},
    fov: null,
    bareEye: 0.04,
    depth: 6,
    kickDamp: 2.8,
  },
  la = [0, 0, 0],
  ua = Math.PI / 180,
  da = (e) => ca.hipTurn[e] ?? Xr[e]?.hipTurn ?? la;
function fa(e) {
  let t = Xr[e.id],
    n = e.optic,
    r = ca.relief[e.id] ?? ca.relief.default,
    i = e.attachments?.rail;
  if (n?.kit) {
    let a = i ?? n.rail ?? t?.rails?.[n.kit] ?? 0;
    return n.rail === a && n.relief != null
      ? e
      : { ...e, optic: { ...n, rail: a, relief: n.relief ?? r } };
  }
  return !t ||
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
var pa = new p(),
  ma = new p(),
  ha = (e, t = 0.7, n = 0.2) =>
    new b({ color: e, roughness: t, metalness: n, flatShading: !0 }),
  ga = (e, t = 1) =>
    new ie({
      color: e,
      transparent: !0,
      opacity: t,
      depthTest: !1,
      depthWrite: !1,
      toneMapped: !1,
    });
function Q(e, t, n, r, a, o, s, c, l) {
  let u = new _(new i(t, n, r), c);
  return (
    u.position.set(a, o, s),
    l && u.rotation.set(l[0] || 0, l[1] || 0, l[2] || 0),
    (u.castShadow = !0),
    e.add(u),
    u
  );
}
function $(e, t, n, r, i, a, o, c, l = `z`, u = !1) {
  let d = new _(new s(t, n, r, 10, 1, u), c);
  return (
    u && (d.name = `scope_open_tube`),
    l === `z`
      ? (d.rotation.x = Math.PI / 2)
      : l === `x` && (d.rotation.z = Math.PI / 2),
    d.position.set(i, a, o),
    (d.castShadow = !0),
    e.add(d),
    d
  );
}
function _a(e, t, n) {
  let r = t.class,
    i = ha(t.color ?? 3882806, 0.8, 0.08);
  if ((n.disposables.push(i), r === `launcher`)) return on(e, t, n, Q, $);
  if (r === `tool`) {
    let r = ha(t.color, 0.8, 0.05),
      i = ha(2303519, 0.85, 0.1);
    if ((n.disposables.push(r, i), t.tool === `repair`)) {
      let a = ha(12093742, 0.35, 0.7),
        o = ha(10134182, 0.3, 0.8),
        s = new ie({ color: 9426175 });
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
    return Li(e, t, n);
  }
  if (r === `defib`) return Li(e, t, n);
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
  let b =
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
      bolt: b,
      gripZ: f + d * 0.22,
      gripY: -l / 2 - 0.015,
    }
  );
}
function va(e, t, n, r) {
  if (n.mounts) return _r(e, t, n, r);
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
function ya(e, t) {
  let n = new _(
    new x(e.geometry.parameters.radius, 16),
    t.reticleEdge ?? t.dark,
  );
  return (
    (n.name = `reticle_contrast_edge`),
    (n.renderOrder = 39),
    e.add(n),
    e
  );
}
function ba(e, t, n, r) {
  let i = new _(new D(1, 1), r.reticle.material);
  return (
    (i.name = `sight_reticle`),
    (i.userData.reticleType = n),
    i.position.copy(t),
    (i.renderOrder = 40),
    e.add(i),
    r.reticle.draw(n),
    i.scale.setScalar(0.03 * r.reticle.scale),
    { aim: t.clone(), reticle: i, reticles: [i] }
  );
}
