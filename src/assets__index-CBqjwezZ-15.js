// assets__index-CBqjwezZ 15 — closed
// Lines 5284-5789 of readable/assets__index-CBqjwezZ.pretty.js (statement-aligned).
async function or() {
  let t = Bn((e) => $.pushError(`dispose`, e?.message ?? String(e)));
  $.dispose = t.dispose;
  let n = t.dispose;
  (window.addEventListener(`pagehide`, n),
    t.own(() => window.removeEventListener(`pagehide`, n)),
    window.addEventListener(`pageshow`, (e) => {
      e.persisted && location.reload();
    }),
    t.own(() => {
      (($.ready = !1),
        ($.ctx = null),
        ($.world = null),
        ($.camera = null),
        ($.modules = {}),
        ($.setCamera = $.setTimeOfDay = () => !1),
        ($.getStats = () => ({ disposed: !0 })),
        ($.step = $.input = () => {}),
        ($.getScriptedInput = () => null),
        $._frame());
    }));
  let r = ar(),
    a = document.getElementById(`app`),
    { renderer: s, graphics: c } = ce((e) => new o(e), { param: r.quality });
  ((r.graphics = c),
    (r.quality = c.quality),
    t.own(() => s.domElement.remove()),
    s.domElement.addEventListener(`webglcontextlost`, () =>
      setTimeout(() => {
        if (
          !s.domElement.isConnected ||
          document.getElementById(`sl-context-lost`)
        )
          return;
        let e = document.createElement(`div`);
        ((e.id = `sl-context-lost`),
          (e.style.cssText = `position:fixed;inset:0;z-index:99999;background:#111b23ee;color:white;display:grid;place-content:center;gap:16px;text-align:center;font:20px system-ui;padding:24px`));
        let t = document.createElement(`p`);
        t.textContent = `The browser reset the graphics device.`;
        let n = document.createElement(`button`);
        ((n.textContent = `Reload`),
          (n.style.cssText = `font:inherit;padding:8px 24px;justify-self:center;cursor:pointer`),
          (n.onclick = () => location.reload()),
          e.append(t, n),
          document.body.append(e),
          document.exitPointerLock?.());
      }, 0),
    ),
    t.own(() => s.forceContextLoss()),
    t.own(() => s.dispose()),
    (r.phone = Ae(r)),
    r.phone &&
      r.graphics.reason !== `url` &&
      !Be.has(r.quality) &&
      ((r.quality = `verylow`),
      (r.graphics = { ...r.graphics, quality: `verylow`, reason: `phone` })),
    (r.liteTier = de(r.quality, r.phone)),
    (r.lite = _e(r.liteTier)),
    s.setPixelRatio(be(r)),
    s.setSize(window.innerWidth, window.innerHeight),
    (s.outputColorSpace = R),
    (s.toneMapping = 4),
    (s.toneMappingExposure = 1),
    (s.shadowMap.enabled = !0),
    (s.shadowMap.type = 2),
    (s.info.autoReset = !1),
    a.appendChild(s.domElement));
  let l = new ve();
  ((l.matrixAutoUpdate = !1), (l.background = new N(8890568)));
  let u = new e(
    70,
    window.innerWidth / window.innerHeight,
    0.2,
    r.lite?.far ?? 4e3,
  );
  u.position.set(0, 12, 50);
  let d = !0;
  try {
    d = localStorage.getItem(`salient.bloom`) !== `0`;
  } catch {}
  let f = St(s, l, u, { enabled: r.bloom && d && r.quality === `high` });
  t.own(() => f.dispose());
  let p = () => {
    (s.setSize(window.innerWidth, window.innerHeight),
      f?.setSize(window.innerWidth, window.innerHeight),
      (u.aspect = window.innerWidth / window.innerHeight),
      u.updateProjectionMatrix());
  };
  (window.addEventListener(`resize`, p),
    t.own(() => window.removeEventListener(`resize`, p)));
  let m = Et((e, t, n) => {
    console.error(`[module:${e}] handler for '${n}' threw:`, t);
  });
  t.own(() => m.clear());
  let h = Ie({ seed: r.seed, mapId: r.map, events: m });
  h.time.tod = r.tod;
  let g = Ot(r.seed),
    _ = _t({
      events: m,
      log: console,
      onError: (e, t) => $.pushError(e, t?.message ?? String(t), t?.stack),
    }),
    v = {
      fps: 0,
      frameMs: 0,
      lowFps: 0,
      worstMs: 0,
      drawCalls: 0,
      triangles: 0,
    },
    y = { patch: null, ticksLeft: 0 },
    b;
  try {
    b = window.localStorage;
  } catch {}
  let x = null,
    S = Wn({
      storage: b,
      hasFocus: () => document.hasFocus(),
      defaultLimit: r.phone ? 30 : 120,
    }),
    C = {
      three: i,
      world: h,
      scene: l,
      camera: u,
      renderer: s,
      events: m,
      rng: g,
      config: r,
      stats: v,
      assets: In(s),
      ui: document.getElementById(`ui-root`),
      framePolicy: S,
      postfx: f,
      modules: {
        get: (e) => _.get(e),
        has: (e) => _.has(e),
        status: () => _.status(),
      },
      log: (...e) => console.log(`[core]`, ...e),
      warn: (...e) => console.warn(`[core]`, ...e),
      error: (...e) => console.error(`[core]`, ...e),
      debugGround(e = 400) {
        let t = new me(e, e, 1, 1);
        t.rotateX(-Math.PI / 2);
        let n = new P({ color: 7044954, roughness: 1, flatShading: !0 }),
          r = new k(t, n);
        ((r.receiveShadow = !0), (r.name = `debugGround`), l.add(r));
        let i = new fe(e, e / 10, 3162154, 3162154);
        if (
          ((i.position.y = 0.01),
          l.add(i),
          !l.getObjectByName(`debugSun`) && !_.has(`environment`))
        ) {
          let e = new ae(16773853, 2.5);
          ((e.name = `debugSun`),
            e.position.set(60, 100, 40),
            (e.castShadow = !0),
            e.shadow.mapSize.set(2048, 2048),
            (e.shadow.camera.left = -80),
            (e.shadow.camera.right = 80),
            (e.shadow.camera.top = 80),
            (e.shadow.camera.bottom = -80),
            (e.shadow.camera.far = 400),
            l.add(e),
            l.add(new pe(11061503, 5596740, 0.8)));
        }
        return r;
      },
      registerCameraPreset: (e, t) => w.register(e, t),
      setCamera: (e) => w.apply(e),
      setCameraFocus: (e) => w.setFocus(e),
      scopedLogger(e) {
        return {
          log: (...t) => console.log(`[${e}]`, ...t),
          warn: (...t) => console.warn(`[${e}]`, ...t),
          error: (...t) => console.error(`[module:${e}]`, ...t),
        };
      },
      localServer: null,
      transport: null,
    },
    w = Rt(C);
  if (
    (t.own(() => w.dispose()),
    ($.ctx = C),
    ($.world = h),
    t.own(() => h.map.colliders.clear()),
    t.own(() => h.players.clear()),
    t.own(() => h.clear()),
    t.own(() => h.map.setHeightfield(null)),
    t.own(() => C.ui.replaceChildren()),
    t.own(() => C.assets.dispose()),
    t.own(() => Fn(l)),
    window.__bootHold && (await t.hold(window.__bootHold), t.closed))
  )
    return;
  $.bootStage = `download`;
  let T = await Promise.all(Nt.map(Lt));
  if ((($.bootStage = `build`), t.closed)) return;
  for (let e of T)
    e.status === `loaded`
      ? (Vn(t, e.desc.api), _.add(e.desc))
      : e.status === `failed`
        ? (_.add({ name: e.name, deps: [] }), _.markFailed(e.name, e.error))
        : _.markMissing(e.name);
  let E = (e) =>
    Object.assign(Object.create(C), C.scopedLogger(e), {
      events: m.forOwner(e),
      moduleName: e,
    });
  if (!r.showcase || r.showcase === `demo`) {
    let e = _.descriptor(`demo`);
    if (
      (e?.prepareDefinition && (await t.hold(e.prepareDefinition(r))), t.closed)
    ) {
      e?.cancelPreparation?.();
      return;
    }
    (e?.terrainDefinition && (r.initialTerrain = e.terrainDefinition(r)),
      (r.climate = e?.climateDefinition?.(r) ?? null));
  }
  for (let e of _.names()) {
    let n = _.descriptor(e);
    if (!n || (!n.init && !n.showcase && !n.tick && !n.update && !n.lateUpdate))
      continue;
    let r = E(e);
    for (let e of [
      `init`,
      `tick`,
      `update`,
      `lateUpdate`,
      `dispose`,
      `showcase`,
    ])
      if (typeof n[e] == `function`) {
        let i = n[e];
        ((n[e] = (e, ...t) => i.call(n, r, ...t)),
          t.own(() => {
            n[e] = i;
          }));
      }
  }
  let D = r.showcase ? [r.showcase] : null;
  if (
    (r.showcase &&
      !_.descriptor(r.showcase) &&
      $.pushError(`core`, `showcase module '${r.showcase}' not found`),
    t.own(() => _.disposeAll(C)),
    await t.hold(_.initAll(C, D, { shouldStop: () => t.closed })),
    t.closed)
  )
    return;
  if (r.phone) {
    let e = ir(l);
    console.log(`[core] phone memory diet`, JSON.stringify(e));
  } else {
    let e = rr(l);
    console.log(`[core] desktop geometry release armed`, JSON.stringify(e));
  }
  if ((r.lite && (x = he(l, u)), !r.showcase && window.__joinGate)) {
    if (
      (($.bootStage = `graphics`),
      await t.hold(f.prepare(() => t.closed)),
      t.closed)
    )
      return;
    (($.bootStage = `signin`), ($.signinReady = !0));
    let e = C.modules.get(`demo`)?.getDefinition?.()?.vistaDeploy,
      n = C.ui?.style.visibility ?? ``;
    (C.ui && (C.ui.style.visibility = `hidden`),
      (h.time.tod = r.tod),
      C.modules.get(`environment`)?.setTimeOfDay?.(r.tod),
      m.emit(`env:timeOfDay`, { tod: r.tod }));
    let i = 0,
      a = performance.now(),
      o = a,
      c = () => {
        if (t.closed) return;
        i = requestAnimationFrame(c);
        let n = performance.now();
        if (document.hidden || n - o < 1e3 / 30) return;
        let r = Math.min(0.1, (n - o) / 1e3);
        o = n;
        for (let e of [`environment`, `demo`])
          try {
            _.invoke(e, `update`, C, r, 0);
          } catch {}
        if (e) {
          let t = (performance.now() - a) / 1e3,
            [n, r, i] = e.pos,
            [o, s, c] = e.look,
            l = o - n,
            u = c - i,
            d = Math.hypot(l, u) || 1,
            f = Math.sin((t * 2 * Math.PI) / 90) * (e.drift ?? 0);
          w.apply({
            pos: [
              n - (u / d) * f,
              r + Math.sin(t * 0.21) * 0.6,
              i + (l / d) * f,
            ],
            look: [o, s, c],
            fov: e.fov ?? 55,
          });
        }
        let l = u.userData.viewmodelStage;
        u.userData.viewmodelStage = null;
        try {
          (x?.update(),
            C.modules.get(`animation`)?.prepareRender?.(u, s.shadowMap.enabled),
            f.render());
        } finally {
          u.userData.viewmodelStage = l;
        }
      };
    c();
    let l = await t.hold(window.__joinGate);
    if (
      (cancelAnimationFrame(i), C.ui && (C.ui.style.visibility = n), t.closed)
    )
      return;
    l?.name && (r.name = l.name);
  }
  if (
    (!r.showcase &&
      (await t.hold(
        (async () => {
          let e = null;
          if (!r.offline)
            try {
              let n = new URLSearchParams(location.search).has(`server`);
              for (let i = 1; i <= (n ? 3 : 1); i++) {
                if (t.closed) return;
                ((C.connectionStatus = { phase: `connecting`, attempt: i }),
                  ($.bootStage = `connect`));
                try {
                  e = await zn(r.server, { timeoutMs: n ? 15e3 : 2e3 });
                  break;
                } catch (e) {
                  if (!n || i === 3) throw e;
                  await new Promise((e) => setTimeout(e, 1e3));
                }
              }
              ((C.connectionStatus = { phase: `connected` }),
                C.log(`connected to`, r.server));
            } catch {
              if (
                ((C.connectionStatus = { phase: `failed` }),
                new URLSearchParams(location.search).has(`server`))
              )
                throw Error(
                  `Multiplayer server unavailable. No solo fallback: return to the session lobby and reconnect.`,
                );
              C.warn(`no server at ${r.server}; starting in-page local server`);
            }
          if (!e && !t.closed)
            try {
              let { startLocalServer: t } = await G(
                async () => {
                  let { startLocalServer: e } = await import(
                    `./localserver-jBq0Ft3r.js`
                  );
                  return { startLocalServer: e };
                },
                __vite__mapDeps([71, 72, 1]),
              );
              ((C.localServer = await t(r, {
                log: C.scopedLogger(`localserver`),
              })),
                (e = C.localServer.transport));
            } catch (e) {
              console.error(`[module:core] local server failed:`, e);
            }
          if (
            ((C.transport = e),
            t.own(() => {
              ((C.transport = null), (C.localServer = null));
            }),
            t.own(() => C.localServer?.dispose()),
            t.own(() => C.transport?.close()),
            t.closed)
          )
            return;
          let n = _.get(`netcode`);
          if (n?.connect && e)
            try {
              n.connect(e, { name: r.name });
            } catch (e) {
              _.markFailed(`netcode`, e);
            }
        })(),
      ),
      t.closed)) ||
    (r.showcase &&
      _.has(r.showcase) &&
      (await t.hold(
        _.invoke(r.showcase, `showcase`, C, {
          seed: r.seed,
          tod: r.tod,
          camera: r.camera,
        }),
      ),
      t.closed))
  )
    return;
  let O = Xe({
    getFrameLimit: S.effectiveLimit,
    tick: (e) => {
      r.pause ||
        (C.localServer?.tick(e),
        h.advance(1),
        y.ticksLeft > 0 &&
          (y.ticksLeft--, y.ticksLeft === 0 && (y.patch = null)),
        _.invokeAll(`tick`, C, e));
    },
    update: (e, t) => {
      (_.invokeAll(`update`, C, e, t), _.invokeAll(`lateUpdate`, C, e, t));
    },
    render: () => {
      (s.info.reset(),
        x?.update(),
        C.modules.get(`animation`)?.prepareRender?.(u, s.shadowMap.enabled),
        f.render(),
        (v.drawCalls = s.info.render.calls),
        (v.triangles = s.info.render.triangles),
        (v.fps = O.fps),
        (v.frameMs = O.frameMs),
        (v.lowFps = O.lowFps),
        (v.worstMs = O.worstMs),
        $._frame());
    },
  });
  if (
    (t.own(() => O.stop()),
    ($.modules = _.status()),
    ($.setCamera = (e) => w.apply(e)),
    ($.setTimeOfDay = (e) => (
      (h.time.tod = e),
      _.get(`environment`)?.setTimeOfDay?.(e),
      m.emit(`env:timeOfDay`, { tod: e }),
      !0
    )),
    ($.getStats = () => ({
      fps: Math.round(v.fps * 10) / 10,
      frameMs: Math.round(v.frameMs * 100) / 100,
      lowFps: Math.round(v.lowFps * 10) / 10,
      worstMs: Math.round(v.worstMs * 10) / 10,
      drawCalls: v.drawCalls,
      triangles: v.triangles,
      geometries: s.info.memory.geometries,
      textures: s.info.memory.textures,
      programs: s.info.programs?.length ?? 0,
      entities: h.entities.size,
      tick: h.time.tick,
      tod: h.time.tod,
      camera: w.current,
      memoryMB: performance.memory
        ? Math.round(performance.memory.usedJSHeapSize / 1048576)
        : null,
      frameLimit: S.effectiveLimit(),
      tickCapHits: O.capHits,
      requestedQuality: r.quality,
      builtQuality: He(C).quality,
      graphicsReloadPending: De(C),
      renderPixels: [s.domElement.width, s.domElement.height],
      renderPixelRatio: s.getPixelRatio(),
      modules: _.status(),
      moduleErrors: _.errors(),
    })),
    ($.step = (e = 1) => O.step(e)),
    ($.input = (e, t = 60) => {
      ((y.patch = e), (y.ticksLeft = t));
    }),
    ($.getScriptedInput = () => y.patch),
    ($.BTN = ee),
    ($.camera = w),
    r.camera ? w.apply(r.camera) : r.showcase && w.apply(`mid50`),
    $.setTimeOfDay(r.tod),
    ($.bootStage = `graphics`),
    await t.hold(f.prepare(() => t.closed)),
    t.closed)
  )
    return;
  O.start();
  let A = tt(C, {
    post: location.pathname === `/play` || !!window.__joinGate,
    loop: O,
    framePolicy: S,
  });
  if ((A && t.own(() => A.finish()), !r.showcase)) {
    let e = xe(C);
    t.own(() => e.dispose());
  }
  let j = 0,
    M = () => {
      t.closed ||
        (++j >= 10
          ? (($.ready = !0),
            ($.modules = _.status()),
            console.log(`[core] ready`, $.modules))
          : requestAnimationFrame(M));
    };
  requestAnimationFrame(M);
}
