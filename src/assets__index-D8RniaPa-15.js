// assets__index-D8RniaPa 15 — closed
// Lines 5326-5834 of readable/assets__index-D8RniaPa.pretty.js (statement-aligned).
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
  let i = ar(),
    o = document.getElementById(`app`),
    { renderer: c, graphics: l } = ce((e) => new s(e), { param: i.quality });
  ((i.graphics = l),
    (i.quality = l.quality),
    t.own(() => c.domElement.remove()),
    c.domElement.addEventListener(`webglcontextlost`, () =>
      setTimeout(() => {
        if (
          !c.domElement.isConnected ||
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
    t.own(() => c.forceContextLoss()),
    t.own(() => c.dispose()),
    (i.phone = Me(i)),
    i.phone &&
      i.graphics.reason !== `url` &&
      !Re.has(i.quality) &&
      ((i.quality = `verylow`),
      (i.graphics = { ...i.graphics, quality: `verylow`, reason: `phone` })),
    (i.liteTier = fe(i.quality, i.phone)),
    (i.lite = ye(i.liteTier)),
    c.setPixelRatio(xe(i)),
    c.setSize(window.innerWidth, window.innerHeight),
    (c.outputColorSpace = B),
    (c.toneMapping = 4),
    (c.toneMappingExposure = 1),
    (c.shadowMap.enabled = !0),
    (c.shadowMap.type = 2),
    (c.info.autoReset = !1),
    o.appendChild(c.domElement));
  let u = new Ke();
  ((u.matrixAutoUpdate = !1), (u.background = new L(8890568)));
  let d = new ze(
    70,
    window.innerWidth / window.innerHeight,
    0.2,
    i.lite?.far ?? 4e3,
  );
  d.position.set(0, 12, 50);
  let f = !0;
  try {
    f = localStorage.getItem(`salient.bloom`) !== `0`;
  } catch {}
  let m = St(c, u, d, { enabled: i.bloom && f && i.quality === `high` });
  t.own(() => m.dispose());
  let h = () => {
    (c.setSize(window.innerWidth, window.innerHeight),
      m?.setSize(window.innerWidth, window.innerHeight),
      (d.aspect = window.innerWidth / window.innerHeight),
      d.updateProjectionMatrix());
  };
  (window.addEventListener(`resize`, h),
    t.own(() => window.removeEventListener(`resize`, h)));
  let g = Et((e, t, n) => {
    console.error(`[module:${e}] handler for '${n}' threw:`, t);
  });
  t.own(() => g.clear());
  let _ = ie({ seed: i.seed, mapId: i.map, events: g });
  _.time.tod = i.tod;
  let v = Ot(i.seed),
    b = _t({
      events: g,
      log: console,
      onError: (e, t) => $.pushError(e, t?.message ?? String(t), t?.stack),
    }),
    x = {
      fps: 0,
      frameMs: 0,
      lowFps: 0,
      worstMs: 0,
      drawCalls: 0,
      triangles: 0,
    },
    S = { patch: null, ticksLeft: 0 },
    C;
  try {
    C = window.localStorage;
  } catch {}
  let w = null,
    T = Wn({
      storage: C,
      hasFocus: () => document.hasFocus(),
      defaultLimit: i.phone ? 30 : 120,
    }),
    E = {
      three: a,
      world: _,
      scene: u,
      camera: d,
      renderer: c,
      events: g,
      rng: v,
      config: i,
      stats: x,
      assets: In(c),
      ui: document.getElementById(`ui-root`),
      framePolicy: T,
      postfx: m,
      modules: {
        get: (e) => b.get(e),
        has: (e) => b.has(e),
        status: () => b.status(),
      },
      log: (...e) => console.log(`[core]`, ...e),
      warn: (...e) => console.warn(`[core]`, ...e),
      error: (...e) => console.error(`[core]`, ...e),
      debugGround(t = 400) {
        let n = new Ne(t, t, 1, 1);
        n.rotateX(-Math.PI / 2);
        let i = new p({ color: 7044954, roughness: 1, flatShading: !0 }),
          a = new r(n, i);
        ((a.receiveShadow = !0), (a.name = `debugGround`), u.add(a));
        let o = new Ve(t, t / 10, 3162154, 3162154);
        if (
          ((o.position.y = 0.01),
          u.add(o),
          !u.getObjectByName(`debugSun`) && !b.has(`environment`))
        ) {
          let t = new e(16773853, 2.5);
          ((t.name = `debugSun`),
            t.position.set(60, 100, 40),
            (t.castShadow = !0),
            t.shadow.mapSize.set(2048, 2048),
            (t.shadow.camera.left = -80),
            (t.shadow.camera.right = 80),
            (t.shadow.camera.top = 80),
            (t.shadow.camera.bottom = -80),
            (t.shadow.camera.far = 400),
            u.add(t),
            u.add(new Fe(11061503, 5596740, 0.8)));
        }
        return a;
      },
      registerCameraPreset: (e, t) => D.register(e, t),
      setCamera: (e) => D.apply(e),
      setCameraFocus: (e) => D.setFocus(e),
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
    D = Rt(E);
  if (
    (t.own(() => D.dispose()),
    ($.ctx = E),
    ($.world = _),
    t.own(() => _.map.colliders.clear()),
    t.own(() => _.players.clear()),
    t.own(() => _.clear()),
    t.own(() => _.map.setHeightfield(null)),
    t.own(() => E.ui.replaceChildren()),
    t.own(() => E.assets.dispose()),
    t.own(() => Fn(u)),
    window.__bootHold && (await t.hold(window.__bootHold), t.closed))
  )
    return;
  $.bootStage = `download`;
  let O = await Promise.all(Nt.map(Lt));
  if ((($.bootStage = `build`), t.closed)) return;
  for (let e of O)
    e.status === `loaded`
      ? (Vn(t, e.desc.api), b.add(e.desc))
      : e.status === `failed`
        ? (b.add({ name: e.name, deps: [] }), b.markFailed(e.name, e.error))
        : b.markMissing(e.name);
  let k = (e) =>
    Object.assign(Object.create(E), E.scopedLogger(e), {
      events: g.forOwner(e),
      moduleName: e,
    });
  if (!i.showcase || i.showcase === `demo`) {
    let e = b.descriptor(`demo`);
    if (
      (e?.prepareDefinition && (await t.hold(e.prepareDefinition(i))), t.closed)
    ) {
      e?.cancelPreparation?.();
      return;
    }
    (e?.terrainDefinition && (i.initialTerrain = e.terrainDefinition(i)),
      (i.climate = e?.climateDefinition?.(i) ?? null));
  }
  for (let e of b.names()) {
    let n = b.descriptor(e);
    if (!n || (!n.init && !n.showcase && !n.tick && !n.update && !n.lateUpdate))
      continue;
    let r = k(e);
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
  let A = i.showcase ? [i.showcase] : null;
  if (
    (i.showcase &&
      !b.descriptor(i.showcase) &&
      $.pushError(`core`, `showcase module '${i.showcase}' not found`),
    t.own(() => b.disposeAll(E)),
    await t.hold(b.initAll(E, A, { shouldStop: () => t.closed })),
    t.closed)
  )
    return;
  if (i.phone) {
    let e = ir(u);
    console.log(`[core] phone memory diet`, JSON.stringify(e));
  } else {
    let e = rr(u);
    console.log(`[core] desktop geometry release armed`, JSON.stringify(e));
  }
  if ((i.lite && (w = ge(u, d)), !i.showcase && window.__joinGate)) {
    if (
      (($.bootStage = `graphics`),
      await t.hold(m.prepare(() => t.closed)),
      t.closed)
    )
      return;
    (($.bootStage = `signin`), ($.signinReady = !0));
    let e = E.modules.get(`demo`)?.getDefinition?.()?.vistaDeploy,
      n = E.ui?.style.visibility ?? ``;
    (E.ui && (E.ui.style.visibility = `hidden`),
      (_.time.tod = i.tod),
      E.modules.get(`environment`)?.setTimeOfDay?.(i.tod),
      g.emit(`env:timeOfDay`, { tod: i.tod }));
    let r = 0,
      a = performance.now(),
      o = a,
      s = () => {
        if (t.closed) return;
        r = requestAnimationFrame(s);
        let n = performance.now();
        if (document.hidden || n - o < 1e3 / 30) return;
        let i = Math.min(0.1, (n - o) / 1e3);
        o = n;
        for (let e of [`environment`, `demo`])
          try {
            b.invoke(e, `update`, E, i, 0);
          } catch {}
        if (e) {
          let t = (performance.now() - a) / 1e3,
            [n, r, i] = e.pos,
            [o, s, c] = e.look,
            l = o - n,
            u = c - i,
            d = Math.hypot(l, u) || 1,
            f = Math.sin((t * 2 * Math.PI) / 90) * (e.drift ?? 0);
          D.apply({
            pos: [
              n - (u / d) * f,
              r + Math.sin(t * 0.21) * 0.6,
              i + (l / d) * f,
            ],
            look: [o, s, c],
            fov: e.fov ?? 55,
          });
        }
        let l = d.userData.viewmodelStage;
        d.userData.viewmodelStage = null;
        try {
          (w?.update(),
            E.modules.get(`animation`)?.prepareRender?.(d, c.shadowMap.enabled),
            m.render());
        } finally {
          d.userData.viewmodelStage = l;
        }
      };
    s();
    let l = await t.hold(window.__joinGate);
    if (
      (cancelAnimationFrame(r), E.ui && (E.ui.style.visibility = n), t.closed)
    )
      return;
    l?.name && (i.name = l.name);
  }
  if (
    (!i.showcase &&
      (await t.hold(
        (async () => {
          let e = null;
          if (!i.offline)
            try {
              let n = new URLSearchParams(location.search).has(`server`);
              for (let r = 1; r <= (n ? 3 : 1); r++) {
                if (t.closed) return;
                ((E.connectionStatus = { phase: `connecting`, attempt: r }),
                  ($.bootStage = `connect`));
                try {
                  e = await zn(i.server, { timeoutMs: n ? 15e3 : 2e3 });
                  break;
                } catch (e) {
                  if (!n || r === 3) throw e;
                  await new Promise((e) => setTimeout(e, 1e3));
                }
              }
              ((E.connectionStatus = { phase: `connected` }),
                E.log(`connected to`, i.server));
            } catch {
              if (
                ((E.connectionStatus = { phase: `failed` }),
                new URLSearchParams(location.search).has(`server`))
              )
                throw Error(
                  `Multiplayer server unavailable. No solo fallback: return to the session lobby and reconnect.`,
                );
              E.warn(`no server at ${i.server}; starting in-page local server`);
            }
          if (!e && !t.closed)
            try {
              let { startLocalServer: t } = await G(
                async () => {
                  let { startLocalServer: e } = await import(
                    `./localserver-B_EdbxkH.js`
                  );
                  return { startLocalServer: e };
                },
                __vite__mapDeps([76, 77, 1]),
              );
              ((E.localServer = await t(i, {
                log: E.scopedLogger(`localserver`),
              })),
                (e = E.localServer.transport));
            } catch (e) {
              console.error(`[module:core] local server failed:`, e);
            }
          if (
            ((E.transport = e),
            t.own(() => {
              ((E.transport = null), (E.localServer = null));
            }),
            t.own(() => E.localServer?.dispose()),
            t.own(() => E.transport?.close()),
            t.closed)
          )
            return;
          let n = b.get(`netcode`);
          if (n?.connect && e)
            try {
              n.connect(e, { name: i.name });
            } catch (e) {
              b.markFailed(`netcode`, e);
            }
        })(),
      ),
      t.closed)) ||
    (i.showcase &&
      b.has(i.showcase) &&
      (await t.hold(
        b.invoke(i.showcase, `showcase`, E, {
          seed: i.seed,
          tod: i.tod,
          camera: i.camera,
        }),
      ),
      t.closed))
  )
    return;
  let j = Ye({
    getFrameLimit: T.effectiveLimit,
    tick: (e) => {
      i.pause ||
        (E.localServer?.tick(e),
        _.advance(1),
        S.ticksLeft > 0 &&
          (S.ticksLeft--, S.ticksLeft === 0 && (S.patch = null)),
        b.invokeAll(`tick`, E, e));
    },
    update: (e, t) => {
      (b.invokeAll(`update`, E, e, t), b.invokeAll(`lateUpdate`, E, e, t));
    },
    render: () => {
      (c.info.reset(),
        w?.update(),
        E.modules.get(`animation`)?.prepareRender?.(d, c.shadowMap.enabled),
        m.render(),
        (x.drawCalls = c.info.render.calls),
        (x.triangles = c.info.render.triangles),
        (x.fps = j.fps),
        (x.frameMs = j.frameMs),
        (x.lowFps = j.lowFps),
        (x.worstMs = j.worstMs),
        $._frame());
    },
  });
  if (
    (t.own(() => j.stop()),
    ($.modules = b.status()),
    ($.setCamera = (e) => D.apply(e)),
    ($.setTimeOfDay = (e) => (
      (_.time.tod = e),
      b.get(`environment`)?.setTimeOfDay?.(e),
      g.emit(`env:timeOfDay`, { tod: e }),
      !0
    )),
    ($.getStats = () => ({
      fps: Math.round(x.fps * 10) / 10,
      frameMs: Math.round(x.frameMs * 100) / 100,
      lowFps: Math.round(x.lowFps * 10) / 10,
      worstMs: Math.round(x.worstMs * 10) / 10,
      drawCalls: x.drawCalls,
      triangles: x.triangles,
      geometries: c.info.memory.geometries,
      textures: c.info.memory.textures,
      programs: c.info.programs?.length ?? 0,
      entities: _.entities.size,
      tick: _.time.tick,
      tod: _.time.tod,
      camera: D.current,
      memoryMB: performance.memory
        ? Math.round(performance.memory.usedJSHeapSize / 1048576)
        : null,
      frameLimit: T.effectiveLimit(),
      tickCapHits: j.capHits,
      requestedQuality: i.quality,
      builtQuality: Be(E).quality,
      graphicsReloadPending: Ae(E),
      renderPixels: [c.domElement.width, c.domElement.height],
      renderPixelRatio: c.getPixelRatio(),
      modules: b.status(),
      moduleErrors: b.errors(),
    })),
    ($.step = (e = 1) => j.step(e)),
    ($.input = (e, t = 60) => {
      ((S.patch = e), (S.ticksLeft = t));
    }),
    ($.getScriptedInput = () => S.patch),
    ($.BTN = y),
    ($.camera = D),
    i.camera ? D.apply(i.camera) : i.showcase && D.apply(`mid50`),
    $.setTimeOfDay(i.tod),
    ($.bootStage = `graphics`),
    await t.hold(m.prepare(() => t.closed)),
    t.closed)
  )
    return;
  j.start();
  let M = et(E, {
    post:
      location.pathname === `/play` ||
      !!window.__joinGate ||
      !!window.__hostedSession,
    loop: j,
    framePolicy: T,
  });
  if ((M && t.own(() => M.finish()), !i.showcase)) {
    let e = we(E);
    t.own(() => e.dispose());
  }
  let N = 0,
    P = () => {
      t.closed ||
        (++N >= 10
          ? (($.ready = !0),
            ($.modules = b.status()),
            console.log(`[core] ready`, $.modules))
          : requestAnimationFrame(P));
    };
  requestAnimationFrame(P);
}
