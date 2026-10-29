// assets__environment-DS2NM-G_ 11 — math
// Lines 2853-3115 of readable/assets__environment-DS2NM-G_.pretty.js (statement-aligned).
var Cn = [`clear`, `overcast`, `fog`, `rain`],
  wn = {
    clear: { overcast: 0, fog: 0, rain: 0 },
    overcast: { overcast: 1, fog: 0, rain: 0 },
    fog: { overcast: 0.35, fog: 1, rain: 0 },
    rain: { overcast: 1, fog: 0, rain: 1 },
  },
  Tn = 0.0072,
  En = 1100,
  Dn = 112,
  On = 1e3,
  kn = 1400,
  An = 85,
  jn = [128, 192, 256, 384, 512, 640, 768, 896, 1024],
  Mn = 0.0872,
  Nn = Math.cos((0.5 * Math.PI) / 180),
  Y = {
    ctx: null,
    scene: null,
    tod: 14,
    timeScale: 0,
    weather: `clear`,
    w: { overcast: 0, fog: 0, rain: 0 },
    wTarget: { overcast: 0, fog: 0, rain: 0 },
    wFade: 0,
    key: null,
    hemi: null,
    fog: null,
    sky: null,
    clouds: null,
    rain: null,
    snow: null,
    climate: {
      fog: 1,
      nearHaze: 0,
      nearHazeFalloff: 0,
      heightFalloff: Tn,
      overcast: 0,
      snow: 0,
    },
    fogSightMultiplier: 1,
    atmo: null,
    atmoW: [-1, -1, -1],
    clock: 0,
    city: null,
    savedBackground: void 0,
    savedFog: void 0,
    savedShadowType: null,
    shadowMapSize: 4096,
    shadowExtent: 0,
    shadowReach: 0,
    patched: !1,
  },
  Pn = new c(),
  Fn = new c(),
  X = new c(),
  Z = new c(),
  In = new c(),
  Ln = new c(),
  Rn = new c(0, 1, 0),
  zn = new c(),
  Q = [];
for (let e = 0; e < 10; e++) Q.push(new c());
function Bn(e, t = !0) {
  let n = Number(e);
  if (!Number.isFinite(n)) return !1;
  n = ((n % 24) + 24) % 24;
  let r = Math.abs(n - Y.tod) > 1e-9;
  return (
    (Y.tod = n),
    Y.ctx && (Y.ctx.world.time.tod = n),
    r && t && Y.ctx && Y.ctx.events.emit(`env:timeOfDay`, { tod: n }),
    !0
  );
}
function Vn(e) {
  Ze(e);
  let { key: t, hemi: n, fog: r, sky: i, scene: a } = Y;
  (t.color.setRGB(e.keyColor[0], e.keyColor[1], e.keyColor[2]),
    (t.intensity = e.keyIntensity),
    n.color.setRGB(e.hemiSky[0], e.hemiSky[1], e.hemiSky[2]),
    n.groundColor.setRGB(e.hemiGround[0], e.hemiGround[1], e.hemiGround[2]),
    (n.intensity = e.hemiIntensity),
    r.color.setRGB(e.fogColor[0], e.fogColor[1], e.fogColor[2]),
    (r.density = e.fogDensity * Y.climate.fog * Y.fogSightMultiplier));
  let o = M();
  (o && (r.density = Math.max(r.density, o.fog)),
    Te(e),
    (Y.ctx.renderer.toneMappingExposure =
      e.exposure * (Y.ctx.config.climate?.exposure ?? 1)));
  let s = Y.deploy ? Y.ctx.config.climate?.deployLook : null;
  s
    ? ((Y.ctx.renderer.toneMappingExposure = e.exposure * (s.exposure ?? 1)),
      (Y.sky.uniforms.uStorm.value = 0))
    : Y.ctx.config.climate?.front &&
      (Y.sky.uniforms.uStorm.value =
        Y.ctx.config.climate.front.skyStrength ?? 0.7);
  let c = s ? null : Y.ctx.config.climate?.grade;
  c &&
    (c.key && (t.color.set(c.key.color), (t.intensity = c.key.intensity)),
    c.hemi &&
      (n.color.set(c.hemi.sky),
      n.groundColor.set(c.hemi.ground),
      (n.intensity = c.hemi.intensity)),
    Number.isFinite(c.exposure) &&
      (Y.ctx.renderer.toneMappingExposure = c.exposure));
  let l = i.uniforms;
  (l.uZenith.value.setRGB(e.zenith[0], e.zenith[1], e.zenith[2]),
    l.uHorizon.value.setRGB(e.horizon[0], e.horizon[1], e.horizon[2]),
    l.uHaze.value.setRGB(e.haze[0], e.haze[1], e.haze[2]),
    l.uGroundDeep.value.setRGB(
      e.belowColor[0],
      e.belowColor[1],
      e.belowColor[2],
    ),
    l.uSunDir.value.set(e.sunDir[0], e.sunDir[1], e.sunDir[2]),
    l.uMoonDir.value.set(e.moonDir[0], e.moonDir[1], e.moonDir[2]),
    l.uSunColor.value.setRGB(e.sunColor[0], e.sunColor[1], e.sunColor[2]),
    (l.uSunDisc.value = e.sunDisc),
    (l.uSunGlow.value = e.sunGlow),
    (l.uMoonAmount.value = e.moonAmount),
    (l.uStars.value = e.stars * (Y.ctx.config.climate?.stars ?? 1)),
    Y.clouds.setCover(
      Number.isFinite(Y.climate.clouds) ? Y.climate.clouds : e.cloudCover,
    ),
    (Y.clouds.group.visible = Y.climate.clouds !== 0 && !M()),
    Y.clouds.setDeck(
      1 - 0.3 * e.overcast,
      1 + 0.35 * e.overcast,
      1 - 0.32 * e.overcast,
    ),
    Y.clouds.setTint(e.cloudTint[0], e.cloudTint[1], e.cloudTint[2]),
    Y.clouds.setAmbient(
      e.cloudAmbient[0] * e.cloudTint[0],
      e.cloudAmbient[1] * e.cloudTint[1],
      e.cloudAmbient[2] * e.cloudTint[2],
    ),
    a.background && a.background.isColor && a.background.copy(r.color),
    Y.city?.setWetness?.(e.wetness),
    Y.city?.setPracticals?.(e.practicals, e.exposure),
    Y.ctx.events.emit(`env:weather`, {
      id: Y.weather,
      rain: e.rain,
      overcast: e.overcast,
      fog: Y.w.fog,
      wetness: e.wetness,
    }));
}
function Hn(e) {
  let t = Y.key,
    n = t.shadow,
    r = n.camera,
    i = Y.atmo;
  if (!i) return;
  let a = Y.ctx?.config.climate?.keyDir ?? i.keyDir;
  (Z.set(a[0], a[1], a[2]),
    Z.y < Mn && (Z.y = Mn),
    Z.normalize(),
    Y.shadowCache?.active &&
      (!Y.keyStep || Y.keyStep.dot(Z) < Nn
        ? (Y.keyStep ??= new c()).copy(Z)
        : Z.copy(Y.keyStep)),
    In.crossVectors(Rn, Z),
    In.lengthSq() < 1e-8 && In.set(1, 0, 0),
    In.normalize(),
    Ln.crossVectors(Z, In).normalize(),
    Pn.set(0, 0, -1).applyQuaternion(e.quaternion));
  let o = Math.max(e.position.y, 0.4),
    s = Pn.y < -0.035,
    l = s ? Math.min(kn, o / -Pn.y) : 0,
    u = Math.tan((e.fov * 0.5 * Math.PI) / 180),
    d = u * (e.aspect || 1.777),
    f = Math.min(On, Math.max(150, s ? l * 1.5 : 340)),
    p = 0;
  Q[p++].set(e.position.x, 0, e.position.z);
  for (let t = 0; t < 4; t++) {
    let n = t & 1 ? 1 : -1,
      r = t & 2 ? 1 : -1;
    zn.set(n * d, r * u, -1)
      .normalize()
      .applyQuaternion(e.quaternion);
    let i = zn.y < -0.001 ? Math.min(f, o / -zn.y) : f;
    (Q[p].copy(e.position).addScaledVector(zn, i), (Q[p].y = 0), p++);
  }
  let m = p;
  for (let e = 0; e < m; e++) (Q[p].copy(Q[e]), (Q[p].y = An), p++);
  let h = 1 / 0,
    g = -1 / 0,
    _ = 1 / 0,
    v = -1 / 0,
    y = 1 / 0,
    b = -1 / 0;
  for (let e = 0; e < p; e++) {
    let t = Q[e].dot(In),
      n = Q[e].dot(Ln),
      r = Q[e].dot(Z);
    (t < h && (h = t),
      t > g && (g = t),
      n < _ && (_ = n),
      n > v && (v = n),
      r < y && (y = r),
      r > b && (b = r));
  }
  let x = Math.max(g - h, v - _) + 24;
  x = Math.min(En, Math.max(Dn, Math.ceil(x / 16) * 16));
  let S = !!Y.shadowCache?.active;
  if (S) {
    let e = Math.min(En, x * 1.15),
      t = Y.qExtent;
    ((t && e <= t && e >= t * 0.45) ||
      (Y.qExtent = jn.find((t) => t >= e) ?? En),
      (x = Y.qExtent));
  }
  let C = x / 2;
  if (s && l > 6) {
    let t = Math.min(l, Math.max(C * 0.85 + 30, o * 1.6));
    (X.copy(e.position).addScaledVector(Pn, t), (X.y = 0));
  } else
    (Fn.set(Pn.x, 0, Pn.z),
      Fn.lengthSq() < 1e-4 ? Fn.set(0, 0, -1) : Fn.normalize(),
      X.set(e.position.x, 0, e.position.z).addScaledVector(Fn, C * 0.62));
  let w = An / Z.y;
  ((b += w), (y -= 12));
  let T = x / Y.shadowMapSize,
    E = S ? x / 8 : T,
    D = S ? Math.round(((y + b) * 0.5) / E) * E : (y + b) * 0.5;
  X.addScaledVector(Z, D - X.dot(Z));
  let O = X.dot(In),
    k = X.dot(Ln),
    A = Math.round(O / E) * E,
    j = Math.round(k / E) * E;
  X.addScaledVector(In, A - O).addScaledVector(Ln, j - k);
  let M = (b - y) * 0.5;
  if (S) {
    let e = M + E / 2,
      t = Y.qHalfL;
    ((t && e <= t && e >= t * 0.5) || (Y.qHalfL = Math.ceil(e / 64) * 64),
      (M = Y.qHalfL),
      Y.shadowCache.setKey(
        `${A},${j},${D},${x},${M},${Z.x.toFixed(4)},${Z.y.toFixed(4)},${Z.z.toFixed(4)}`,
      ));
  }
  let ee = M + 40;
  (t.position.copy(X).addScaledVector(Z, ee), t.target.position.copy(X));
  let N = ee + M,
    P = i.keySoft || 0;
  ((n.radius = Math.min(
    7,
    Math.max(1.8, Math.min(5, 0.3 / T)) * (1 + 2.4 * P),
  )),
    (n.normalBias = Math.min(0.42, Math.max(0.02, T * 0.85 + 0.012))),
    (n.bias = -12e-5),
    (Y.shadowExtent !== x || Math.abs(r.far - N) > 1) &&
      ((Y.shadowExtent = x),
      (r.left = -C),
      (r.right = C),
      (r.top = C),
      (r.bottom = -C),
      (r.near = 40),
      (r.far = N),
      r.updateProjectionMatrix()),
    (Y.shadowReach = w));
}
