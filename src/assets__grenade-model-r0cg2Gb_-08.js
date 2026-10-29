// assets__grenade-model-r0cg2Gb_ 08 — math
// Lines 9899-10180 of readable/assets__grenade-model-r0cg2Gb_.pretty.js (statement-aligned).
function Jn(e, t) {
  let r = new d();
  return (
    r.setAttribute(`position`, new E(e.position, 3)),
    r.setAttribute(`normal`, new E(e.normal, 3)),
    r.setAttribute(`uv`, new E(e.uv, 2)),
    r.setIndex(e.index),
    new n(r, t)
  );
}
function Yn(e, t) {
  let n =
    typeof document > `u` || !document.createElementNS ? null : new f().load(e);
  n && ((n.colorSpace = T), (n.anisotropy = 4));
  let r = new o({ map: n, color: 16777215, roughness: 0.78, metalness: 0.18 });
  return (
    (r.onBeforeCompile = (e) => {
      e.fragmentShader = e.fragmentShader.replace(
        `#include <map_fragment>`,
        `#include <map_fragment>
    float fieldTone=dot(diffuseColor.rgb,vec3(.2126,.7152,.0722));
    diffuseColor.rgb=mix(diffuseColor.rgb,fieldTone*vec3(.72,.81,.56),.82);`,
      );
    }),
    r.addEventListener(`dispose`, () => n?.dispose()),
    t.disposables.push(r),
    r
  );
}
function Xn(e, t, n, r, i) {
  let a = new j();
  if (((a.name = `imported_launcher_body`), e.add(a), t.id === 8)) {
    let e = Jn(
      Kn.launcher,
      Yn(
        new URL(`/assets/launcher_diffuse-DKGqmXqV.png`, `` + import.meta.url)
          .href,
        n,
      ),
    );
    ((e.rotation.y = -Math.PI / 2),
      e.scale.setScalar(0.2),
      (e.position.z = -0.705),
      a.add(e));
    let t = Jn(
      Kn.rocket,
      Yn(
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
    let e = new o({
        color: t.color ?? 4938300,
        roughness: 0.85,
        metalness: 0.05,
        flatShading: !0,
      }),
      s = new o({
        color: 5922889,
        roughness: 0.8,
        metalness: 0.1,
        flatShading: !0,
      });
    (n.disposables.push(e, s),
      i(a, 0.068, 0.068, 1.2, 0, 0, -0.2, e),
      i(a, 0.086, 0.086, 0.1, 0, 0, 0.36, n.dark),
      i(a, 0.098, 0.098, 0.14, 0, 0, -0.76, n.dark));
    for (let e of [0.14, -0.46]) i(a, 0.073, 0.073, 0.03, 0, 0, e, n.steel);
    r(a, 0.03, 0.012, 0.5, 0, -0.072, -0.2, n.dark);
    let c = -0.145;
    return (
      r(a, 0.14, 0.12, 0.28, c, 0.02, 0.1, s),
      r(a, 0.11, 0.03, 0.22, c, 0.09, 0.11, s),
      r(a, 0.11, 0.08, 0.012, c, 0.02, -0.045, n.dark),
      i(a, 0.028, 0.028, 0.06, c, 0.03, 0.27, n.dark),
      i(a, 0.034, 0.034, 0.025, c, 0.03, 0.305, n.dark),
      r(a, 0.05, 0.05, 0.12, -0.075, 0, 0.08, n.steel),
      r(a, 0.035, 0.025, 0.04, -0.10499999999999998, 0.095, 0.02, n.steel),
      r(a, 0.035, 0.11, 0.045, -0.232, -0.075, 0.04, n.dark, [0.25, 0, 0]),
      r(a, 0.035, 0.11, 0.045, -0.082, -0.105, 0.04, n.dark, [0.25, 0, 0]),
      {
        top: -0.002,
        muzzleZ: -0.84,
        sightX: c,
        sightZ: 0.17,
        adsDist: 0.24,
        hip: { x: 0.3, y: -0.2, z: -0.62, yaw: 0.06, roll: -0.03 },
        grip: [-0.082, -0.14, 0.03],
        support: [-0.232, -0.11, 0.03],
      }
    );
  }
  let s = Jn(
    qn,
    Yn(new URL(`/assets/diffuse-CCPvaCze.jpg`, `` + import.meta.url).href, n),
  );
  (s.scale.set(36, 60, 36),
    (s.rotation.z = Math.PI / 2),
    s.position.set(0, 0.03329, -0.65),
    a.add(s),
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
var Zn = {
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
function Qn(e) {
  let t = new k(),
    n = new k(),
    r = new k(),
    i = new c(),
    a = !1,
    o = 0,
    s = 0,
    l = { x: 0, v: 0 },
    u = { x: 0, v: 0 },
    d = { x: 0, v: 0 },
    f = 0,
    p = 0,
    m = 0,
    h = { x: 0, y: 0, z: 0, pitch: 0, yaw: 0, roll: 0 },
    g = (e, t, n, r, i) => {
      ((e.v += (t - e.x) * n * i), (e.v *= Math.exp(-r * i)), (e.x += e.v * i));
    };
  return {
    reset() {
      ((a = !1), (l.x = l.v = u.x = u.v = d.x = d.v = 0));
    },
    update(c, _, v, y) {
      if (!(c > 0)) return h;
      ((c = Math.min(c, 0.05)),
        (m += c),
        e.getWorldQuaternion(t),
        e.getWorldPosition(i));
      let b = 0,
        x = 0,
        S = 0;
      if (a) {
        (r.copy(n).invert().multiply(t),
          r.w < 0 && ((r.x = -r.x), (r.y = -r.y), (r.z = -r.z), (r.w = -r.w)),
          r.w > 0.97 && ((b = (2 * r.y) / c), (x = (2 * r.x) / c)));
        let e = i.y - o;
        Math.abs(e) < 0.6 && (S = e / c);
      }
      ((a = !0), n.copy(t), (o = i.y));
      let C = 1 - y * 0.8,
        w = Zn,
        T = (e) => Math.max(-w.lookMax, Math.min(w.lookMax, e));
      (g(l, T(-b * w.lookLag) * C, w.lookSpring, w.lookDamp, c),
        g(u, T(-x * w.lookLag) * C, w.lookSpring, w.lookDamp, c),
        s < -2.5 &&
          S > s + 2 &&
          (d.v -= w.landKick * Math.min(1.6, -s / 6) * 30 * C),
        (s = S),
        g(
          d,
          Math.max(-w.fallMax, Math.min(w.fallMax, -S * w.fallLag)) * C,
          w.heaveSpring,
          w.heaveDamp,
          c,
        ));
      let E =
        Math.min(1, _ / 5.5) * (1 - y * 0.85) * (1 + v * (w.sprintGain - 1));
      ((p += (E - p) * (1 - Math.exp(-c * 8))),
        (f += c * (w.stepRate + Math.min(_, 8) * 0.62 + v * 1.2)));
      let D = Math.sin(f),
        O = Math.cos(2 * f),
        k = Math.sin(m * w.breathe) * (1 - y * 0.85) * (1 - Math.min(1, p * 2));
      return (
        (h.x = D * w.stepX * p - l.x * 0.09),
        (h.y = (O - 1) * 0.5 * w.stepY * p + k * w.breatheY + d.x - u.x * 0.05),
        (h.z = Math.abs(D) * 0.004 * p),
        (h.pitch =
          O * 0.006 * p +
          Math.sin(m * w.breathe - 0.7) * w.breathePitch * (1 - y * 0.85) +
          u.x +
          d.x * 0.8),
        (h.yaw = D * 0.01 * p + l.x),
        (h.roll =
          D * w.stepRoll * p +
          l.x * 0.55 +
          Math.sin(m * w.breathe * 0.5) * 0.003 * (1 - y)),
        h
      );
    },
  };
}
var $n = Object.freeze({
  black: 987153,
  tan: 8021319,
  od: 3554092,
  grey: 3948611,
  wood: 4138005,
  prestige: 1184533,
});
function er(e = $n.black, t = 11831370) {
  let n = (e, t, n, r, i = {}) =>
      Object.assign(new o({ color: t, metalness: n, roughness: r, ...i }), {
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
    e === $n.wood && (r.poly.roughness = 0.58),
    r
  );
}
