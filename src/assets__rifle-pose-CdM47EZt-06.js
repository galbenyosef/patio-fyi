// assets__rifle-pose-CdM47EZt 06 — math
// Lines 9438-9719 of readable/assets__rifle-pose-CdM47EZt.pretty.js (statement-aligned).
function rn(e, t) {
  let n = new c();
  return (
    n.setAttribute(`position`, new P(e.position, 3)),
    n.setAttribute(`normal`, new P(e.normal, 3)),
    n.setAttribute(`uv`, new P(e.uv, 2)),
    n.setIndex(e.index),
    new _(n, t)
  );
}
function an(t, n) {
  let r =
    typeof document > `u` || !document.createElementNS ? null : new e().load(t);
  r && ((r.colorSpace = N), (r.anisotropy = 4));
  let i = new b({ map: r, color: 16777215, roughness: 0.78, metalness: 0.18 });
  return (
    (i.onBeforeCompile = (e) => {
      e.fragmentShader = e.fragmentShader.replace(
        `#include <map_fragment>`,
        `#include <map_fragment>
    float fieldTone=dot(diffuseColor.rgb,vec3(.2126,.7152,.0722));
    diffuseColor.rgb=mix(diffuseColor.rgb,fieldTone*vec3(.72,.81,.56),.82);`,
      );
    }),
    i.addEventListener(`dispose`, () => r?.dispose()),
    n.disposables.push(i),
    i
  );
}
function on(e, t, n, r, i) {
  let a = new M();
  if (((a.name = `imported_launcher_body`), e.add(a), t.id === 8)) {
    let e = rn(
      tn.launcher,
      an(
        new URL(`/assets/launcher_diffuse-DKGqmXqV.png`, `` + import.meta.url)
          .href,
        n,
      ),
    );
    ((e.rotation.y = -Math.PI / 2),
      e.scale.setScalar(0.2),
      (e.position.z = -0.705),
      a.add(e));
    let t = rn(
      tn.rocket,
      an(
        new URL(`/assets/rocket_diffuse-CON9c9TI.png`, `` + import.meta.url)
          .href,
        n,
      ),
    );
    return (
      (t.rotation.y = -Math.PI / 2),
      t.scale.setScalar(0.2),
      (t.position.z = -0.939),
      a.add(t),
      (t.name = `loaded_launcher_round`),
      r(a, 0.036, 0.018, 0.14, 0, 0.105, -0.14, n.steel),
      r(a, 0.045, 0.055, 0.055, 0, 0.07, -0.14, n.dark),
      {
        top: 0.12,
        muzzleZ: -1.49,
        sightZ: -0.14,
        grip: [0.018, -0.16, -0.535],
        support: [-0.025, -0.16, -0.725],
        loadedRound: t,
      }
    );
  }
  if (t.id === 10) {
    let e = new b({
        color: t.color ?? 4938300,
        roughness: 0.85,
        metalness: 0.05,
        flatShading: !0,
      }),
      o = new b({
        color: 5922889,
        roughness: 0.8,
        metalness: 0.1,
        flatShading: !0,
      });
    (n.disposables.push(e, o),
      i(a, 0.068, 0.068, 1.2, 0, 0, -0.2, e),
      i(a, 0.086, 0.086, 0.1, 0, 0, 0.36, n.dark),
      i(a, 0.098, 0.098, 0.14, 0, 0, -0.76, n.dark));
    for (let e of [0.14, -0.46]) i(a, 0.073, 0.073, 0.03, 0, 0, e, n.steel);
    r(a, 0.03, 0.012, 0.5, 0, -0.072, -0.2, n.dark);
    let s = -0.145;
    return (
      r(a, 0.14, 0.12, 0.28, s, 0.02, 0.1, o),
      r(a, 0.11, 0.03, 0.22, s, 0.09, 0.11, o),
      r(a, 0.11, 0.08, 0.012, s, 0.02, -0.045, n.dark),
      i(a, 0.028, 0.028, 0.06, s, 0.03, 0.27, n.dark),
      i(a, 0.034, 0.034, 0.025, s, 0.03, 0.305, n.dark),
      r(a, 0.05, 0.05, 0.12, -0.075, 0, 0.08, n.steel),
      r(a, 0.035, 0.025, 0.04, -0.10499999999999998, 0.095, 0.02, n.steel),
      r(a, 0.035, 0.11, 0.045, -0.232, -0.075, 0.04, n.dark, [0.25, 0, 0]),
      r(a, 0.035, 0.11, 0.045, -0.082, -0.105, 0.04, n.dark, [0.25, 0, 0]),
      {
        top: -0.002,
        muzzleZ: -0.84,
        sightX: s,
        sightZ: 0.17,
        adsDist: 0.24,
        hip: { x: 0.3, y: -0.2, z: -0.62, yaw: 0.06, roll: -0.03 },
        grip: [-0.082, -0.14, 0.03],
        support: [-0.232, -0.11, 0.03],
      }
    );
  }
  let o = rn(
    nn,
    an(new URL(`/assets/diffuse-CCPvaCze.jpg`, `` + import.meta.url).href, n),
  );
  (o.scale.set(36, 60, 36),
    (o.rotation.z = Math.PI / 2),
    o.position.set(0, 0.03329, -0.65),
    a.add(o),
    r(a, 0.105, 0.045, 0.24, 0, -0.08, -0.3, n.dark),
    r(a, 0.045, 0.145, 0.065, 0, -0.15, -0.22, n.dark, [0.15, 0, 0]),
    r(a, 0.046, 0.13, 0.07, 0, -0.14, -0.65, n.dark),
    r(a, 0.045, 0.022, 0.29, 0, 0.1, -0.32, n.steel));
  for (let e of [-0.23, -0.43]) r(a, 0.038, 0.07, 0.04, 0, 0.055, e, n.dark);
  r(a, 0.008, 0.072, 0.1, 0.031, -0.117, -0.29, n.steel);
  for (let e of [-0.42, -0.9]) i(a, 0.055, 0.055, 0.024, 0, 0, e, n.steel);
  return {
    top: 0.12,
    muzzleZ: -1.22,
    sightZ: -0.24,
    grip: [0.018, -0.18, -0.22],
    support: [-0.025, -0.17, -0.65],
  };
}
var sn = {
  lookLag: 0.016,
  lookMax: 0.075,
  lookSpring: 170,
  lookDamp: 17,
  fallLag: 0.0045,
  fallMax: 0.045,
  landKick: 0.045,
  heaveSpring: 110,
  heaveDamp: 9,
  stepRate: 1.45,
  stepX: 0.011,
  stepY: 0.007,
  stepRoll: 0.02,
  sprintGain: 1.7,
  breathe: 1.5,
  breatheY: 0.0016,
  breathePitch: 0.0045,
};
function cn(e) {
  let t = new w(),
    n = new w(),
    r = new w(),
    i = new L(),
    a = !1,
    o = 0,
    s = 0,
    c = { x: 0, v: 0 },
    l = { x: 0, v: 0 },
    u = { x: 0, v: 0 },
    d = 0,
    f = 0,
    p = 0,
    m = { x: 0, y: 0, z: 0, pitch: 0, yaw: 0, roll: 0 },
    h = (e, t, n, r, i) => {
      ((e.v += (t - e.x) * n * i), (e.v *= Math.exp(-r * i)), (e.x += e.v * i));
    };
  return {
    reset() {
      ((a = !1), (c.x = c.v = l.x = l.v = u.x = u.v = 0));
    },
    update(g, _, v, y) {
      if (!(g > 0)) return m;
      ((g = Math.min(g, 0.05)),
        (p += g),
        e.getWorldQuaternion(t),
        e.getWorldPosition(i));
      let b = 0,
        x = 0,
        S = 0;
      if (a) {
        (r.copy(n).invert().multiply(t),
          r.w < 0 && ((r.x = -r.x), (r.y = -r.y), (r.z = -r.z), (r.w = -r.w)),
          r.w > 0.97 && ((b = (2 * r.y) / g), (x = (2 * r.x) / g)));
        let e = i.y - o;
        Math.abs(e) < 0.6 && (S = e / g);
      }
      ((a = !0), n.copy(t), (o = i.y));
      let C = 1 - y * 0.8,
        w = sn,
        T = (e) => Math.max(-w.lookMax, Math.min(w.lookMax, e));
      (h(c, T(-b * w.lookLag) * C, w.lookSpring, w.lookDamp, g),
        h(l, T(-x * w.lookLag) * C, w.lookSpring, w.lookDamp, g),
        s < -2.5 &&
          S > s + 2 &&
          (u.v -= w.landKick * Math.min(1.6, -s / 6) * 30 * C),
        (s = S),
        h(
          u,
          Math.max(-w.fallMax, Math.min(w.fallMax, -S * w.fallLag)) * C,
          w.heaveSpring,
          w.heaveDamp,
          g,
        ));
      let E =
        Math.min(1, _ / 5.5) * (1 - y * 0.85) * (1 + v * (w.sprintGain - 1));
      ((f += (E - f) * (1 - Math.exp(-g * 8))),
        (d += g * (w.stepRate + Math.min(_, 8) * 0.62 + v * 1.2)));
      let D = Math.sin(d),
        O = Math.cos(2 * d),
        k = Math.sin(p * w.breathe) * (1 - y * 0.85) * (1 - Math.min(1, f * 2));
      return (
        (m.x = D * w.stepX * f - c.x * 0.09),
        (m.y = (O - 1) * 0.5 * w.stepY * f + k * w.breatheY + u.x - l.x * 0.05),
        (m.z = Math.abs(D) * 0.004 * f),
        (m.pitch =
          O * 0.006 * f +
          Math.sin(p * w.breathe - 0.7) * w.breathePitch * (1 - y * 0.85) +
          l.x +
          u.x * 0.8),
        (m.yaw = D * 0.01 * f + c.x),
        (m.roll =
          D * w.stepRoll * f +
          c.x * 0.55 +
          Math.sin(p * w.breathe * 0.5) * 0.003 * (1 - y)),
        m
      );
    },
  };
}
var ln = Object.freeze({
  black: 987153,
  tan: 8021319,
  od: 3554092,
  grey: 3948611,
  wood: 4138005,
  prestige: 1184533,
});
function un(e = ln.black, t = 11831370) {
  let n = (e, t, n, r, i = {}) =>
      Object.assign(new b({ color: t, metalness: n, roughness: r, ...i }), {
        name: e,
      }),
    r = {
      anod: n(`anod`, 1776670, 0.55, 0.42),
      poly: n(`poly`, e, 0.05, 0.66),
      anodf: n(`anodf`, e, 0.42, 0.46),
      suppressor: n(`suppressor`, 9666656, 0.22, 0.68),
      steel: n(`steel`, 2895149, 0.75, 0.46),
      bright: n(`bright`, 10132895, 0.9, 0.28),
      rubber: n(`rubber`, 1250325, 0.02, 0.9),
      wood: n(`wood`, 7028777, 0.02, 0.62),
      accent: n(`accent`, t, 0.85, 0.3),
      glass: n(`glass`, 1454138, 0.3, 0.06, {
        emissive: 662048,
        emissiveIntensity: 0.4,
      }),
      dot: n(`dot`, 16726831, 0, 0.4, {
        emissive: 16722462,
        emissiveIntensity: 2,
      }),
      fiber: n(`fiber`, 8257370, 0, 0.4, {
        emissive: 5046058,
        emissiveIntensity: 1.2,
      }),
      inset: n(`inset`, 723981, 0.3, 0.7),
      magpoly: n(`magpoly`, 987153, 0.05, 0.7),
      smoke: n(`smoke`, 3093289, 0.1, 0.18, { transparent: !0, opacity: 0.62 }),
      brass: n(`brass`, 11570519, 0.85, 0.32),
      pouch: n(`pouch`, 4869946, 0.02, 0.95),
    };
  return (
    (r.suppressor.userData.smoothNormals = !0),
    e === ln.wood && (r.poly.roughness = 0.58),
    r
  );
}
