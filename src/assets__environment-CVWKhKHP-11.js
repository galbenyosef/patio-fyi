// assets__environment-CVWKhKHP 11 — math
// Lines 2831-3093 of readable/assets__environment-CVWKhKHP.pretty.js (statement-aligned).
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
  Pn = new P(),
  Fn = new P(),
  X = new P(),
  Z = new P(),
  In = new P(),
  Ln = new P(),
  Rn = new P(0, 1, 0),
  zn = new P(),
  Q = [];
for (let e = 0; e < 10; e++) Q.push(new P());
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
  Xe(e);
  let { key: t, hemi: n, fog: r, sky: i, scene: a } = Y;
  (t.color.setRGB(e.keyColor[0], e.keyColor[1], e.keyColor[2]),
    (t.intensity = e.keyIntensity),
    n.color.setRGB(e.hemiSky[0], e.hemiSky[1], e.hemiSky[2]),
    n.groundColor.setRGB(e.hemiGround[0], e.hemiGround[1], e.hemiGround[2]),
    (n.intensity = e.hemiIntensity),
    r.color.setRGB(e.fogColor[0], e.fogColor[1], e.fogColor[2]),
    (r.density = e.fogDensity * Y.climate.fog * Y.fogSightMultiplier));
  let o = re();
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
    (Y.clouds.group.visible = Y.climate.clouds !== 0 && !re()),
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
        ? (Y.keyStep ??= new P()).copy(Z)
        : Z.copy(Y.keyStep)),
    In.crossVectors(Rn, Z),
    In.lengthSq() < 1e-8 && In.set(1, 0, 0),
    In.normalize(),
    Ln.crossVectors(Z, In).normalize(),
    Pn.set(0, 0, -1).applyQuaternion(e.quaternion));
  let o = Math.max(e.position.y, 0.4),
    s = Pn.y < -0.035,
    c = s ? Math.min(kn, o / -Pn.y) : 0,
    l = Math.tan((e.fov * 0.5 * Math.PI) / 180),
    u = l * (e.aspect || 1.777),
    d = Math.min(On, Math.max(150, s ? c * 1.5 : 340)),
    f = 0;
  Q[f++].set(e.position.x, 0, e.position.z);
  for (let t = 0; t < 4; t++) {
    let n = t & 1 ? 1 : -1,
      r = t & 2 ? 1 : -1;
    zn.set(n * u, r * l, -1)
      .normalize()
      .applyQuaternion(e.quaternion);
    let i = zn.y < -0.001 ? Math.min(d, o / -zn.y) : d;
    (Q[f].copy(e.position).addScaledVector(zn, i), (Q[f].y = 0), f++);
  }
  let p = f;
  for (let e = 0; e < p; e++) (Q[f].copy(Q[e]), (Q[f].y = An), f++);
  let m = 1 / 0,
    h = -1 / 0,
    g = 1 / 0,
    _ = -1 / 0,
    v = 1 / 0,
    y = -1 / 0;
  for (let e = 0; e < f; e++) {
    let t = Q[e].dot(In),
      n = Q[e].dot(Ln),
      r = Q[e].dot(Z);
    (t < m && (m = t),
      t > h && (h = t),
      n < g && (g = n),
      n > _ && (_ = n),
      r < v && (v = r),
      r > y && (y = r));
  }
  let b = Math.max(h - m, _ - g) + 24;
  b = Math.min(En, Math.max(Dn, Math.ceil(b / 16) * 16));
  let x = !!Y.shadowCache?.active;
  if (x) {
    let e = Math.min(En, b * 1.15),
      t = Y.qExtent;
    ((t && e <= t && e >= t * 0.45) ||
      (Y.qExtent = jn.find((t) => t >= e) ?? En),
      (b = Y.qExtent));
  }
  let S = b / 2;
  if (s && c > 6) {
    let t = Math.min(c, Math.max(S * 0.85 + 30, o * 1.6));
    (X.copy(e.position).addScaledVector(Pn, t), (X.y = 0));
  } else
    (Fn.set(Pn.x, 0, Pn.z),
      Fn.lengthSq() < 1e-4 ? Fn.set(0, 0, -1) : Fn.normalize(),
      X.set(e.position.x, 0, e.position.z).addScaledVector(Fn, S * 0.62));
  let C = An / Z.y;
  ((y += C), (v -= 12));
  let w = b / Y.shadowMapSize,
    T = x ? b / 8 : w,
    E = x ? Math.round(((v + y) * 0.5) / T) * T : (v + y) * 0.5;
  X.addScaledVector(Z, E - X.dot(Z));
  let D = X.dot(In),
    O = X.dot(Ln),
    k = Math.round(D / T) * T,
    ee = Math.round(O / T) * T;
  X.addScaledVector(In, k - D).addScaledVector(Ln, ee - O);
  let A = (y - v) * 0.5;
  if (x) {
    let e = A + T / 2,
      t = Y.qHalfL;
    ((t && e <= t && e >= t * 0.5) || (Y.qHalfL = Math.ceil(e / 64) * 64),
      (A = Y.qHalfL),
      Y.shadowCache.setKey(
        `${k},${ee},${E},${b},${A},${Z.x.toFixed(4)},${Z.y.toFixed(4)},${Z.z.toFixed(4)}`,
      ));
  }
  let j = A + 40;
  (t.position.copy(X).addScaledVector(Z, j), t.target.position.copy(X));
  let M = j + A,
    N = i.keySoft || 0;
  ((n.radius = Math.min(
    7,
    Math.max(1.8, Math.min(5, 0.3 / w)) * (1 + 2.4 * N),
  )),
    (n.normalBias = Math.min(0.42, Math.max(0.02, w * 0.85 + 0.012))),
    (n.bias = -12e-5),
    (Y.shadowExtent !== b || Math.abs(r.far - M) > 1) &&
      ((Y.shadowExtent = b),
      (r.left = -S),
      (r.right = S),
      (r.top = S),
      (r.bottom = -S),
      (r.near = 40),
      (r.far = M),
      r.updateProjectionMatrix()),
    (Y.shadowReach = C));
}
