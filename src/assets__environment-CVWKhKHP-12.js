// assets__environment-CVWKhKHP 12 — math
// Lines 3094-3503 of readable/assets__environment-CVWKhKHP.pretty.js (statement-aligned).
var $ = {
  name: `environment`,
  deps: [],
  async init(e) {
    ((Y.ctx = e),
      (Y.scene = e.scene),
      (Y.tod = Number.isFinite(e.config.tod)
        ? ((e.config.tod % 24) + 24) % 24
        : 14),
      (e.world.time.tod = Y.tod),
      (Y.shadowMapSize = e.config.quality === `high` ? 4096 : 2048),
      xe(),
      Ze(),
      e.config.lite && tt(),
      ke(14),
      (Y.patched = !0),
      (Y.savedShadowType = e.renderer.shadowMap.type),
      e.renderer.shadowMap.type === 2 && (e.renderer.shadowMap.type = 1),
      (e.renderer.shadowMap.enabled = !re()));
    let t = new S(16777215, 3);
    ((t.name = `sunLight`),
      (t.castShadow = !re()),
      t.shadow.mapSize.set(Y.shadowMapSize, Y.shadowMapSize),
      e.renderer.shadowMap.type === 1 &&
        (t.shadow.map = At(Y.shadowMapSize, {
          reversedDepth: e.renderer.capabilities.reversedDepthBuffer,
        })),
      (t.shadow.radius = 3.2),
      (t.shadow.bias = -12e-5),
      (t.shadow.normalBias = 0.03),
      (t.shadow.camera.near = 1),
      (t.shadow.camera.far = 1e3),
      t.position.set(100, 200, 100),
      e.scene.add(t),
      e.scene.add(t.target),
      (Y.key = t),
      t.castShadow &&
        t.shadow.map &&
        (Y.shadowCache = jt(e.renderer, t, Y.shadowMapSize, {
          reversedDepth: e.renderer.capabilities.reversedDepthBuffer,
        })),
      (Y.hemi = new E(11061503, 5596740, 0.9)),
      (Y.hemi.name = `skyLight`),
      e.scene.add(Y.hemi),
      (Y.savedFog = e.scene.fog),
      (Y.savedBackground = e.scene.background),
      (Y.fog = new ne(13162730, 0.002)),
      (e.scene.fog = Y.fog),
      (e.scene.background = null),
      (Y.sky = se(3e3)),
      e.scene.add(Y.sky.mesh));
    let n = e.rng.fork(`environment`);
    ((Y.clouds = vt(n.fork(`clouds`))),
      e.scene.add(Y.clouds.group),
      (Y.rain = Tt(n.fork(`rain`))),
      e.scene.add(Y.rain.group));
    let r = e.config.climate ?? {};
    ((Y.climate = {
      fog: r.fog > 0 ? r.fog : 1,
      nearHaze: Math.min(1, Math.max(0, r.nearHaze ?? 0)),
      nearHazeFalloff: Math.max(0, r.nearHazeFalloff ?? 0),
      heightFalloff: Math.max(0, r.heightFalloff ?? Tn),
      overcast: Math.min(1, Math.max(0, r.overcast ?? 0)),
      snow: Math.min(1, Math.max(0, r.snow ?? 0)),
      rain: Math.min(1, Math.max(0, r.rain ?? 0)),
      ...(Number.isFinite(r.clouds)
        ? { clouds: Math.min(1, Math.max(0, r.clouds)) }
        : {}),
    }),
      (Y.fogSightMultiplier = 1),
      Array.isArray(r.wind) && r.wind.length === 2
        ? Y.clouds.setWind(+r.wind[0] || 0, +r.wind[1] || 0)
        : Y.clouds.setWind(1.5, 0.45),
      Y.clouds.setFront(r.front ?? null));
    {
      let e = r.front,
        t = Y.sky.uniforms;
      if (((t.uStorm.value = e ? (e.skyStrength ?? 0.7) : 0), e)) {
        let n = Math.hypot(e.dir[0], e.dir[1]) || 1;
        (t.uStormDir.value.set(e.dir[0] / n, 0, e.dir[1] / n),
          t.uStormColor.value.set(e.sky ?? 3883591));
      }
    }
    (Ce(Y.climate.heightFalloff, 0),
      we(Y.climate.nearHaze, Y.climate.nearHazeFalloff),
      Y.climate.snow > 0 &&
        ((Y.snow = kt(n.fork(`snow`), r.blizzard ?? 0)),
        e.scene.add(Y.snow.mesh)),
      (Y.w.overcast = Y.wTarget.overcast =
        Math.max(Y.w.overcast, Y.climate.overcast)),
      (Y.w.rain = Y.wTarget.rain = Math.max(Y.w.rain, Y.climate.rain)),
      e.events.on(`env:timeOfDay`, (e) => {
        e &&
          Number.isFinite(e.tod) &&
          Math.abs(e.tod - Y.tod) > 1e-9 &&
          Bn(e.tod, !1);
      }),
      ($.api.sunLight = t),
      ($.api.hemiLight = Y.hemi),
      ($.api.fog = Y.fog),
      ($.api.setFogSightMultiplier = (e = 1) => {
        ((Y.fogSightMultiplier = Math.max(
          0.75,
          Math.min(1, Number.isFinite(e) ? e : 1),
        )),
          Y.atmo &&
            (Y.fog.density = Math.max(
              Y.atmo.fogDensity * Y.climate.fog * Y.fogSightMultiplier,
              re()?.fog ?? 0,
            )));
      }),
      ($.api.addStaticShadowRoot = (e) => Y.shadowCache?.addRoot(e)),
      ($.api.invalidateStaticShadows = () => Y.shadowCache?.invalidate()));
    let i = new URLSearchParams(location.search).get(`shadowproxy`) === `0`;
    (($.api.addShadowProxy = (e) => (i ? void 0 : Y.shadowCache?.addProxy(e))),
      ($.api.removeShadowProxy = (e) => Y.shadowCache?.removeProxy(e)),
      ($.api.staticShadowStats = () => Y.shadowCache?.stats() ?? null),
      e.events.on(`destruction:state`, () => Y.shadowCache?.invalidate()),
      ($.api.skyDome = Y.sky.mesh),
      ($.api.clouds = Y.clouds.group),
      ($.api.setCloudFront = (e) => Y.clouds.setFront(e)),
      ($.api.setDeployLook = (e) => {
        !!e != !!Y.deploy && ((Y.deploy = !!e), (Y.atmo = null));
      }),
      (Y.atmo = We(Y.tod, Y.w)),
      Vn(Y.atmo),
      Y.sky.mesh.position.copy(e.camera.position),
      Hn(e.camera),
      Y.clouds.update(0, e.camera.position),
      e.log(
        `init tod=${Y.tod} shadow=${Y.shadowMapSize} softTaps=${je().taps} clouds=${Y.clouds.instances}`,
      ));
  },
  tick() {},
  update(e, t) {
    if (!Y.key) return;
    let n = Math.min(t || 0, 0.1);
    ((Y.clock += n), Y.timeScale !== 0 && Bn(Y.tod + Y.timeScale * n, !0));
    let r = !1;
    for (let e of [`overcast`, `fog`, `rain`]) {
      let t = Y.wTarget[e],
        i = Y.w[e];
      if (i !== t) {
        if (((r = !0), Y.wFade <= 0)) Y.w[e] = t;
        else {
          let r = n / Y.wFade;
          Y.w[e] = i < t ? Math.min(t, i + r) : Math.max(t, i - r);
        }
      }
    }
    let i = Y.deploy ? e.config.climate?.deployLook : null,
      a = Y.atmo,
      o = i ? i.tod : Y.tod,
      s = i ? { overcast: i.overcast, fog: Y.w.fog, rain: 0 } : Y.w;
    (!a ||
      r ||
      a.tod !== o ||
      Y.atmoW[0] !== s.overcast ||
      Y.atmoW[1] !== s.fog ||
      Y.atmoW[2] !== s.rain) &&
      ((Y.atmo = We(o, s)),
      (Y.atmoW[0] = s.overcast),
      (Y.atmoW[1] = s.fog),
      (Y.atmoW[2] = s.rain),
      Vn(Y.atmo));
    let c = e.camera;
    if (Y.shadowCache) {
      Y.shadowCache.nextFrame();
      let t = e.postfx?.warming?.() ?? 0;
      (Y.warming > 0 && t === 0 && Y.shadowCache.invalidate(), (Y.warming = t));
    }
    (Y.sky.mesh.position.copy(c.position),
      (Y.sky.uniforms.uTime.value = Y.clock),
      Hn(c),
      Y.clouds.update(n, c.position));
    {
      let t = e.config.climate?.front;
      if (t?.lightning) {
        let e = (Y.lightning ??= {
          next: Y.clock + 4,
          pulses: [],
          dir: [1, 0],
        });
        if (Y.clock >= e.next) {
          let n = Math.hypot(t.dir[0], t.dir[1]) || 1,
            r =
              Math.atan2(t.dir[1] / n, t.dir[0] / n) +
              (Math.random() - 0.5) * 0.9;
          ((e.dir = [Math.cos(r), Math.sin(r)]), (e.pulses = []));
          let i = Y.clock;
          for (let t = 0, n = 1 + Math.floor(Math.random() * 3); t < n; t++)
            (e.pulses.push([
              i,
              0.06 + Math.random() * 0.08,
              0.55 + Math.random() * 0.45,
            ]),
              (i += 0.09 + Math.random() * 0.18));
          e.next = Y.clock + 5 + Math.random() * 13;
        }
        let n = 0;
        for (let [t, r, i] of e.pulses)
          Y.clock >= t &&
            Y.clock < t + r &&
            (n = Math.max(n, i * (1 - (Y.clock - t) / r)));
        let r = t.lightning === !0 ? 1 : +t.lightning || 0;
        ((Y.sky.uniforms.uFlash.value = n * 1.4 * r),
          Y.sky.uniforms.uFlashDir.value.set(e.dir[0], 0, e.dir[1]),
          Y.clouds.setFlash?.(n * 0.9 * r, e.dir[0], e.dir[1]));
      }
    }
    (Y.rain.setGroundY(
      Y.city
        ? Y.city.groundYAt(c.position.x, c.position.z)
        : e.world.map.getHeight(c.position.x, c.position.z),
    ),
      Y.rain.setCover(e.world.map.shelters),
      Y.rain.update(
        n,
        c.position,
        Y.atmo.rain,
        Y.atmo.exposure,
        Y.atmo.fogColor,
      ),
      Y.snow &&
        Y.snow.update(
          n,
          c.position,
          Y.climate.snow,
          Y.atmo.exposure,
          e.renderer.domElement.height,
          c.fov,
        ));
  },
  dispose(e) {
    let t = e.scene;
    (Y.shadowCache?.dispose(),
      (Y.shadowCache = null),
      (Y.qExtent = Y.qHalfL = 0),
      (Y.keyStep = null),
      Y.key &&
        (t.remove(Y.key), t.remove(Y.key.target), Y.key.shadow.dispose()),
      Y.hemi && t.remove(Y.hemi),
      Y.sky &&
        (t.remove(Y.sky.mesh),
        Y.sky.mesh.geometry.dispose(),
        Y.sky.material.dispose()),
      Y.clouds && (t.remove(Y.clouds.group), Y.clouds.dispose()),
      Y.rain && (t.remove(Y.rain.group), Y.rain.dispose()),
      Y.snow && (t.remove(Y.snow.mesh), Y.snow.dispose()),
      Y.city && (t.remove(Y.city.group), Y.city.dispose()),
      Y.savedFog !== void 0 && (t.fog = Y.savedFog),
      Y.savedBackground !== void 0 && (t.background = Y.savedBackground),
      Y.savedShadowType != null &&
        (e.renderer.shadowMap.type = Y.savedShadowType),
      (Y.patched &&= (nt(), Se(), Qe(), Ae(), !1)),
      (Y.key = Y.hemi = Y.sky = Y.clouds = Y.rain = Y.snow = Y.city = null),
      (Y.climate = {
        fog: 1,
        nearHaze: 0,
        nearHazeFalloff: 0,
        heightFalloff: Tn,
        overcast: 0,
        snow: 0,
        rain: 0,
      }),
      (Y.fogSightMultiplier = 1),
      (Y.atmo = null),
      (Y.ctx = Y.scene = Y.fog = null),
      (Y.savedFog = Y.savedBackground = void 0),
      (Y.savedShadowType = null));
    for (let e of [
      `sunLight`,
      `hemiLight`,
      `fog`,
      `skyDome`,
      `clouds`,
      `setFogSightMultiplier`,
    ])
      $.api[e] = null;
  },
  showcase(e, t = {}) {
    let n = e.debugGround(600);
    n && (n.visible = !1);
    for (let t of e.scene.children)
      (t.type === `GridHelper` || (t.isLineSegments && !t.name)) &&
        (t.visible = !1);
    ((Y.city = Sn(e, e.rng.fork(`environment-showcase`))),
      e.scene.add(Y.city.group),
      e.setCameraFocus(Y.city.focus),
      e.registerCameraPreset(`sunset`, (e) => {
        let t = Y.atmo ?? We(Y.tod, Y.w),
          n = Math.atan2(t.sunDir[0], t.sunDir[2]) + Math.PI + 0.62;
        (e.position.set(Math.sin(n) * 300, 26, Math.cos(n) * 300),
          e.lookAt(zn.set(0, 15, 0)),
          (e.fov = 50),
          e.updateProjectionMatrix());
      }),
      e.registerCameraPreset(`skyline`, (e) => {
        (e.position.set(210, 38, 260),
          e.lookAt(zn.set(-20, 30, -40)),
          (e.fov = 55),
          e.updateProjectionMatrix());
      }),
      e.registerCameraPreset(`hero`, (e) => {
        let t = Y.city.focus;
        (e.position.set(t[0] + 1.71, 1.62, t[2] + 4.7),
          e.lookAt(zn.set(t[0], t[1] + 1, t[2])),
          (e.fov = 60),
          e.updateProjectionMatrix());
      }));
    try {
      let e = new URLSearchParams(location.search).get(`weather`);
      e && $.api.setWeather(e);
    } catch {}
    t.tod != null && Bn(t.tod, !1);
  },
  api: {
    setTimeOfDay(e) {
      return Bn(e, !0);
    },
    getTimeOfDay() {
      return Y.tod;
    },
    getSun() {
      let e = Y.atmo ?? We(Y.tod, Y.w);
      return {
        dir: e.keyDir.slice(),
        color: e.keyColor.slice(),
        intensity: e.keyIntensity,
        elevation: e.elevation,
        isMoon: e.isMoon,
        sunDir: e.sunDir.slice(),
        moonDir: e.moonDir.slice(),
      };
    },
    getMoon() {
      let e = Y.atmo ?? We(Y.tod, Y.w);
      return { dir: e.moonDir.slice(), amount: e.moonAmount };
    },
    setWeather(e, t = {}) {
      return Cn.includes(e)
        ? ((Y.weather = e),
          Object.assign(Y.wTarget, wn[e]),
          (Y.wFade = Math.max(0, t.fade ?? 0)),
          Y.wFade === 0 && Object.assign(Y.w, Y.wTarget),
          !0)
        : (Y.ctx?.warn?.(`unknown weather '${e}'`), !1);
    },
    setWeatherLevels(e = {}, t = 6) {
      for (let t of [`overcast`, `fog`, `rain`])
        Number.isFinite(e[t]) &&
          (Y.wTarget[t] = Math.max(
            t === `overcast`
              ? Y.climate.overcast
              : t === `rain`
                ? Y.climate.rain
                : 0,
            Math.round(Math.min(1, Math.max(0, e[t])) * 20) / 20,
          ));
      return ((Y.wFade = Math.max(0.01, t)), !0);
    },
    getWeather() {
      return Y.weather;
    },
    weathers: Cn,
    setTimeScale(e) {
      Y.timeScale = Number(e) || 0;
    },
    getAtmosphere() {
      return Y.atmo;
    },
    getWetness() {
      return Y.atmo?.wetness ?? 0;
    },
    getPracticals() {
      return Y.atmo?.practicals ?? 0;
    },
    configureCaster(e) {
      if (!e) return !1;
      let t = Array.isArray(e) ? e : [e];
      for (let e of t) e && ((e.shadowSide = 1), (e.needsUpdate = !0));
      return !0;
    },
    getShadowBox() {
      let e = Y.key?.shadow?.camera;
      return e
        ? {
            center: Y.key.target.position.toArray(),
            extent: e.right - e.left,
            near: e.near,
            far: e.far,
            depth: e.far - e.near,
            reach: Y.shadowReach,
            radius: Y.key.shadow.radius,
            normalBias: Y.key.shadow.normalBias,
            mapSize: Y.shadowMapSize,
            softTaps: je().taps,
          }
        : null;
    },
    sunDirection: Be,
    moonDirection: Ve,
    smoothstep: L,
    sunLight: null,
    hemiLight: null,
    fog: null,
    skyDome: null,
    clouds: null,
  },
};
