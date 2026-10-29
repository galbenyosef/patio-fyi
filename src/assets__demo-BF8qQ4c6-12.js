// assets__demo-BF8qQ4c6 12 — layout
// Lines 3074-3819 of readable/assets__demo-BF8qQ4c6.pretty.js (statement-aligned).
var fn = {
    getDefinition() {
      return Y.layout;
    },
    facadeSkin() {
      return Y.facadeSkin ?? null;
    },
    setObjectVisible(e, t) {
      Y.ctx?.modules.get(`environment`)?.invalidateStaticShadows?.();
      let n = ft.get(e);
      if (!n && Y.labPanels?.has(e)) return !0;
      if (!n && Y.decor?.has(e))
        return !!Y.ctx?.modules
          .get(`terrain`)
          ?.setDecorTreeVisible?.(Y.decor.get(e), t);
      if (!n) {
        let n = Y.root?.getObjectByName(e);
        return n ? ((n.visible = t), !0) : !1;
      }
      return (
        n.mesh.setMatrixAt(
          n.index,
          t ? tn(n.object) : new A().makeScale(0, 0, 0),
        ),
        (n.mesh.instanceMatrix.needsUpdate = !0),
        !0
      );
    },
    hideById(e) {
      let t = String(e).replace(/^demo-/, ``),
        n = fn.setObjectVisible(t, !1);
      return (
        /-trunk$/.test(t) &&
          fn.setObjectVisible(t.replace(/-trunk$/, `-crown`), !1),
        (n ||= !!Y.props?.setPropVisible?.(t, !1)),
        n
      );
    },
    setLightGroup(e, t) {
      return (
        Y.city?.setGroup(e, t),
        Y.props?.setLightGroup(e, t),
        Y.fixtureSpill?.setGroup(e, t),
        !!Y.city
      );
    },
    setDetail(e) {
      return ((Y.detail = e), Y.props?.setDetail?.(e), !0);
    },
    getRoutes() {
      return Y.layout?.routes ?? null;
    },
    getObjectives() {
      return (
        Y.layout?.objectives?.map((e) => ({ ...e, pos: e.pos.slice() })) ?? []
      );
    },
    navalStats() {
      return Y.naval?.stats() ?? null;
    },
    backdrop() {
      return Y.backdrop ?? null;
    },
    houseFireStats() {
      return Y.houseFireView
        ? {
            ...Y.houseFireView.stats(),
            state: Y.layout?.housefire ? Mt(Y.layout.housefire) : null,
          }
        : null;
    },
    keplerStats() {
      return Y.keplerView?.stats() ?? null;
    },
    hangarStats() {
      return Y.hangarView?.stats() ?? null;
    },
    basculeStats() {
      return Y.basculeView?.stats() ?? null;
    },
    mesaStats() {
      return Y.mesaView?.stats() ?? null;
    },
    observatoryStats() {
      return Y.observatoryView?.stats() ?? null;
    },
    meridianStats() {
      return Y.meridianView
        ? { ...Y.meridianView.stats(), skyline: Y.skyline?.stats ?? null }
        : null;
    },
    collisionMemory: ee,
    stats() {
      let e = Y.layout ? null : U(Y.ctx?.config ?? {});
      return {
        name: Y.layout?.name ?? e?.key ?? `Greywater Gap`,
        colliders: Y.colliders.length,
        objects: Y.layout?.objects.length ?? 0,
        size: Y.layout?.size ?? e?.config?.size ?? 0,
      };
    },
  },
  pn = {
    name: `demo`,
    deps: [`terrain`, `environment`, `gamemodes`, `ui`],
    api: fn,
    async prepareDefinition(e) {
      let t = ++$;
      try {
        let n = await Oe(e);
        return (n && (await qt(n.key, t)), n);
      } catch (e) {
        throw (t === $ && ($++, Ae()), e);
      }
    },
    cancelPreparation() {
      ($++, Ae());
    },
    terrainDefinition(e) {
      let t = U(e);
      return t.legacy && e.urban ? le(t.config) : t.config;
    },
    climateDefinition(e) {
      return U(e).climate ?? null;
    },
    async init(e) {
      ((Y.ctx = e), (Y.elapsed = 0));
      let t = e.modules.get(`terrain`);
      if (!t?.generate) {
        e.warn(`terrain.generate unavailable; demo map skipped`);
        return;
      }
      let n = e.config?.seed ?? e.world.seed ?? 1,
        r = e.config.initialTerrain ?? this.terrainDefinition(e.config);
      (t.usesDefinition?.(n, r) || t.generate(n, r),
        await M(),
        (e.world.mapId = U(e.config).key));
      let i = await ke(
        t.getHeight,
        {
          roofLinks: e.config.roofLinks !== !1,
          release: !!(e.config.offline || e.config.expandedDemolition),
          urban: !!e.config.urban,
          ...Object.fromEntries(P.map((t) => [t, !!e.config[t]])),
        },
        { yieldTask: M },
      );
      if (i) {
        if (
          ((Y.layout = i),
          Y.layout.colliderDefs.push(...me(t.getHeightfield?.())),
          Y.layout.colliderDefs.push(...ge(t.getHeightfield?.(), Y.layout)),
          (e.world.map.visibility = Y.layout.climate?.visibility ?? null),
          (e.world.mapId = Y.layout.id),
          Y.layout.ziplines?.length
            ? (e.world.map.ziplines = Y.layout.ziplines)
            : delete e.world.map.ziplines,
          Y.layout.ladders?.length
            ? (e.world.map.ladders = Y.layout.ladders)
            : delete e.world.map.ladders,
          Y.layout.roofLinks?.length
            ? (e.world.map.roofLinks = Y.layout.roofLinks)
            : delete e.world.map.roofLinks,
          (e.world.map.homeBases = Y.layout.homeBases),
          t.setScatterExclusions?.([
            ...Y.layout.buildings.map((e) => [
              e.x - e.w / 2 - 0.15,
              e.z - e.d / 2 - 0.15,
              e.x + e.w / 2 + 0.15,
              e.z + e.d / 2 + 0.15,
            ]),
            ...(Y.layout.scatterExclude ?? []),
          ]),
          await M(),
          sn(e, Y.layout),
          (Y.disposeLifts = re(e.world, Y.layout.lifts, () =>
            e.localServer
              ? e.world.time.tick
              : (e.modules.get(`netcode`)?.getServerTick?.() ??
                e.world.time.tick),
          )),
          (Y.liftView = at(e, Y.layout.lifts ?? [])),
          e.events.on(`demo:lifts`, (e) => {
            for (let t of e.states ?? []) {
              let e = Y.layout?.lifts?.find((e) => e.id === t.id);
              e && (e.motion = t.motion);
            }
          }),
          Y.layout.lifts?.length)
        ) {
          let t = () =>
            e.modules.get(`netcode`)?.sendRpc?.(`demo:liftSync`, {});
          (e.events.on(`net:connected`, t),
            e.events.on(`player:local`, t),
            t());
        }
        {
          let t = () =>
            e.localServer
              ? e.world.time.tick
              : (e.modules.get(`netcode`)?.getServerTick?.() ??
                e.world.time.tick);
          if (
            ((Y.meridianClock = t),
            (Y.disposeMeridian = Et(e.world, Y.layout.meridian, t)),
            Y.layout.meridian)
          ) {
            let t = Y.layout.meridian;
            (e.events.on(`demo:meridian`, (e) => {
              Y.layout?.meridian &&
                ((t.epoch = e?.epoch ?? null),
                (t.crash = e?.crash ?? null),
                (t.dark = e?.dark ?? null),
                (t.hits = new Map(e?.hits ?? [])),
                (t.breaks = new Map(e?.breaks ?? [])));
            }),
              e.events.on(`demo:meridianGlass`, (e) => {
                Y.layout?.meridian &&
                  e?.id &&
                  (t.hits.set(e.id, e.hits | 0),
                  Array.isArray(e.breaks) && t.breaks.set(e.id, e.breaks));
              }));
            let n = () =>
              e.modules.get(`netcode`)?.sendRpc?.(`demo:meridianSync`, {});
            (e.events.on(`net:connected`, n),
              e.events.on(`player:local`, n),
              n());
          }
        }
        if (
          (fe(e.config),
          (Y.disposeFences = Dt(e.world, Y.layout.lindenFences ?? null)),
          Y.layout.lindenFences?.panels?.length)
        ) {
          let t = Y.layout.lindenFences,
            n = Ot(t),
            r = (e, t) => {
              if (e.objects)
                for (let n of e.objects) fn.setObjectVisible(n, !t);
              else
                e.nest
                  ? Y.nests?.setPanelHidden(e.id, t)
                  : Y.yardView?.setItemHidden?.(e.id, t);
            };
          ((Y.showFences = () => {
            for (let e of t.panels) r(e, n.broken.has(e.id));
          }),
            e.events.on(`demo:lindenFences`, (e) => {
              Y.layout?.lindenFences === t &&
                ((n.broken = new Set(e?.broken ?? [])), Y.showFences());
            }),
            e.events.on(`demo:lindenFence`, (e) => {
              if (Y.layout?.lindenFences !== t || !e?.id) return;
              n.broken.add(e.id);
              let i = t.panels.find((t) => t.id === e.id);
              i && r(i, !0);
            }));
          let i = () =>
            e.modules.get(`netcode`)?.sendRpc?.(`demo:lindenFencesSync`, {});
          (e.events.on(`net:connected`, i),
            e.events.on(`player:local`, i),
            i());
        }
        {
          let t = () =>
            e.localServer
              ? e.world.time.tick
              : (e.modules.get(`netcode`)?.getServerTick?.() ??
                e.world.time.tick);
          if (
            ((Y.houseFireClock = t),
            (Y.disposeHouseFire = jt(e.world, Y.layout.housefire ?? null, t, {
              obbCollider: F,
            })),
            Y.layout.housefire)
          ) {
            let t = Y.layout.housefire;
            e.events.on(`demo:houseFire`, (e) => {
              if (!Y.layout?.housefire || !e || (t.frozen && !e.force)) return;
              let n = Mt(t);
              Object.assign(n, {
                epoch: e.epoch ?? null,
                ignite: { ...(e.ignite ?? {}) },
                car: e.car ?? null,
                engine: e.engine ?? null,
                propane: e.propane ?? null,
                hits: { ...(e.hits ?? {}) },
              });
            });
            let n = () =>
              e.modules.get(`netcode`)?.sendRpc?.(`demo:houseFireSync`, {});
            (e.events.on(`net:connected`, n),
              e.events.on(`player:local`, n),
              n());
          }
        }
        {
          let t = () =>
            e.localServer
              ? e.world.time.tick
              : (e.modules.get(`netcode`)?.getServerTick?.() ??
                e.world.time.tick);
          if (
            ((Y.hangarClock = t),
            (Y.disposeHangar = Lt(e.world, Y.layout.hangar ?? null, t)),
            Y.layout.hangar)
          ) {
            let t = Y.layout.hangar;
            (e.events.on(`demo:hangar`, (e) => {
              Y.layout?.hangar === t &&
                ((t.epoch = e?.epoch ?? null),
                (t.broken = new Set(e?.broken ?? [])));
            }),
              e.events.on(`demo:hangarGlass`, (e) => {
                Y.layout?.hangar === t && e?.id && t.broken.add(e.id);
              }));
            let n = () =>
              e.modules.get(`netcode`)?.sendRpc?.(`demo:hangarSync`, {});
            (e.events.on(`net:connected`, n),
              e.events.on(`player:local`, n),
              n());
          }
        }
        {
          let t = () =>
            e.localServer
              ? e.world.time.tick
              : (e.modules.get(`netcode`)?.getServerTick?.() ??
                e.world.time.tick);
          if (
            ((Y.basculeClock = t),
            (Y.disposeBascule = zt(e.world, Y.layout.bascule ?? null, t, F)),
            Y.layout.bascule)
          ) {
            let t = Y.layout.bascule;
            e.events.on(`demo:bascule`, (e) => {
              Y.layout?.bascule === t && (t.epoch = e?.epoch ?? null);
            });
            let n = () =>
              e.modules.get(`netcode`)?.sendRpc?.(`demo:basculeSync`, {});
            (e.events.on(`net:connected`, n),
              e.events.on(`player:local`, n),
              n());
          }
        }
        {
          let t = () =>
            e.localServer
              ? e.world.time.tick
              : (e.modules.get(`netcode`)?.getServerTick?.() ??
                e.world.time.tick);
          if (
            ((Y.mesaClock = t),
            (Y.disposeMesa = Vt(e.world, Y.layout.mesa ?? null, t)),
            Y.layout.mesa)
          ) {
            let t = Y.layout.mesa;
            (e.events.on(`demo:mesa`, (e) => {
              Y.layout?.mesa === t &&
                ((t.epoch = e?.epoch ?? null),
                (t.broken = new Set(e?.broken ?? [])));
            }),
              e.events.on(`demo:mesaGlass`, (e) => {
                Y.layout?.mesa === t && e?.id && t.broken.add(e.id);
              }));
            let n = () =>
              e.modules.get(`netcode`)?.sendRpc?.(`demo:mesaSync`, {});
            (e.events.on(`net:connected`, n),
              e.events.on(`player:local`, n),
              n());
          }
        }
        {
          let t = () =>
            e.localServer
              ? e.world.time.tick
              : (e.modules.get(`netcode`)?.getServerTick?.() ??
                e.world.time.tick);
          if (
            ((Y.keplerClock = t),
            (Y.disposeKepler = Ut(e.world, Y.layout.kepler ?? null, t)),
            Y.layout.kepler)
          ) {
            let t = Y.layout.kepler;
            e.events.on(`demo:kepler`, (e) => {
              Y.layout?.kepler === t && (t.epoch = e?.epoch ?? null);
            });
            let n = () =>
              e.modules.get(`netcode`)?.sendRpc?.(`demo:keplerSync`, {});
            (e.events.on(`net:connected`, n),
              e.events.on(`player:local`, n),
              n());
          }
        }
        {
          let t = () =>
            e.localServer
              ? e.world.time.tick
              : (e.modules.get(`netcode`)?.getServerTick?.() ??
                e.world.time.tick);
          if (
            ((Y.observatoryClock = t),
            (Y.disposeObservatory = Gt(
              e.world,
              Y.layout.observatory ?? null,
              t,
            )),
            Y.layout.observatory)
          ) {
            let t = Y.layout.observatory;
            (e.events.on(`demo:observatory`, (e) => {
              Y.layout?.observatory === t &&
                ((t.epoch = e?.epoch ?? null),
                (t.broken = new Set(e?.broken ?? [])));
            }),
              e.events.on(`demo:observatoryGlass`, (e) => {
                Y.layout?.observatory === t && e?.id && t.broken.add(e.id);
              }));
            let n = () =>
              e.modules.get(`netcode`)?.sendRpc?.(`demo:observatorySync`, {});
            (e.events.on(`net:connected`, n),
              e.events.on(`player:local`, n),
              n());
          }
        }
        if (
          (Y.layout.shelters
            ? (e.world.map.shelters = Y.layout.shelters)
            : delete e.world.map.shelters,
          await M(),
          (Y.root = await an(e, t, Y.layout)),
          Y.showFences?.(),
          await M(),
          (Y.fixtureSpill = Ue(e, Y.root, Y.layout.fixtureSpills, {
            floor: Y.layout.practicals ?? 0,
          })),
          (Y.sky = Te(
            e,
            () =>
              (e.localServer
                ? e.world.time.tick
                : (e.modules.get(`netcode`)?.getServerTick?.() ??
                  e.world.time.tick)) / 60,
          )),
          e.events.on(`demo:sky`, (e) =>
            Y.sky?.setSettings(oe(e?.settings), e?.planes),
          ),
          e.events.on(`demo:skyDown`, (t) =>
            e.events.emit(`ui:message`, {
              kind: `kill`,
              text: t?.name
                ? `SKYWRITER SHOT DOWN · ${t.name} +200`
                : `SKYWRITER SHOT DOWN`,
              ttl: 4,
            }),
          ),
          await gt(e, Y.root, Y.layout),
          Y.layout.props?.length)
        )
          try {
            Y.props = await Ye(e, Y.root, Y.layout.props, {
              cell: Y.layout.bakeCell ?? 128,
              flattenMaps: !!Y.layout.flatProps,
              fixtureCell: Y.layout.fixtureCell ?? 96,
            });
            let t = `full`;
            try {
              t = localStorage.getItem(`salient.detail`) || `full`;
            } catch {}
            (t === `reduced` || e.config.quality !== `high`) &&
              Y.props.setDetail(`reduced`);
          } catch (t) {
            e.warn(`props failed: ` + t.message);
          }
        if (Y.layout.signs?.length)
          try {
            Y.signs = Qe(e, Y.root, Y.layout.signs, {
              gain: Y.layout.signGain ?? 1,
              roofGain: Y.layout.roofSignGain ?? Y.layout.signGain ?? 1,
            });
          } catch (t) {
            e.warn(`signs failed: ` + t.message);
          }
        if (
          (Y.layout.lights?.length &&
            ((Y.city = Be(e, Y.root, Y.layout.lights, {
              floor: Y.layout.practicals ?? 0,
            })),
            e.log(
              `city lights: ${Y.city.count} emitters, ${Y.city.pools} pools`,
            )),
          Y.layout.meridian)
        ) {
          try {
            Y.meridianView = kt(e, Y.root, Y.layout, Y.meridianClock, {
              setGroup: (e, t) => Y.city?.setGroup(e, t),
            });
          } catch (t) {
            e.warn(`meridian view failed: ` + t.message);
          }
          try {
            Y.skyline = At(e, Y.root, Y.layout);
          } catch (t) {
            e.warn(`meridian skyline failed: ` + t.message);
          }
        }
        if (Y.layout.hangar)
          try {
            Y.hangarView = Rt(e, Y.root, Y.layout, Y.hangarClock);
          } catch (t) {
            e.warn(`hangar view failed: ` + t.message);
          }
        if (Y.layout.bascule)
          try {
            Y.basculeView = Bt(e, Y.root, Y.layout, Y.basculeClock);
          } catch (t) {
            e.warn(`bascule view failed: ` + t.message);
          }
        if (Y.layout.mesa)
          try {
            Y.mesaView = Ht(e, Y.root, Y.layout, Y.mesaClock);
          } catch (t) {
            e.warn(`mesa view failed: ` + t.message);
          }
        if (Y.layout.kepler)
          try {
            Y.keplerView = Wt(e, Y.root, Y.layout, Y.keplerClock);
          } catch (t) {
            e.warn(`kepler view failed: ` + t.message);
          }
        if (Y.layout.observatory)
          try {
            Y.observatoryView = Kt(e, Y.root, Y.layout, Y.observatoryClock);
          } catch (t) {
            e.warn(`observatory view failed: ` + t.message);
          }
        if (Y.layout.housefire)
          try {
            Y.houseFireView = Nt(e, Y.root, Y.layout, Y.houseFireClock);
          } catch (t) {
            e.warn(`house fire view failed: ` + t.message);
          }
        if (Y.layout.suburb)
          try {
            Y.suburbView = await Ft(e, Y.root, Y.layout);
          } catch (t) {
            e.warn(`suburb streets failed: ` + t.message);
          }
        if (Y.layout.yardProps?.length)
          try {
            ((Y.yardView = await Pt(e, Y.root, Y.layout)), Y.showFences?.());
          } catch (t) {
            e.warn(`yard dressing failed: ` + t.message);
          }
        if (Y.layout.washes?.length)
          try {
            Y.wash = $e(e, Y.root, Y.layout.washes);
          } catch (t) {
            e.warn(`neon wash failed: ` + t.message);
          }
        if (Y.layout.naval)
          try {
            Y.naval = ht(e, Y.root, Y.layout.naval, {
              waterLevel: t.getHeightfield?.()?.waterLevel ?? 8,
            });
          } catch (t) {
            e.warn(`naval battle failed: ` + t.message);
          }
        if (
          Y.layout.staticShadows &&
          new URLSearchParams(location.search).get(`shadowcache`) !== `0`
        ) {
          let t = e.modules.get(`environment`),
            n = Y.root.getObjectByName(`greywater-trains`);
          (n && (n.userData.dynamicShadow = !0),
            t?.addStaticShadowRoot?.(Y.root));
          for (let e of Y.root.children)
            e.userData.dynamicShadow ||
              (e.updateMatrixWorld(!0), (e.matrixWorldAutoUpdate = !1));
        }
        (cn(e, t),
          ln(e, Y.layout),
          e.log(
            `${Y.layout.name}: ${Y.layout.size} m, ${Y.colliders.length} solid cover pieces, 3 lanes`,
          ));
      }
    },
    tick() {},
    update(e, t) {
      if (
        ((Y.elapsed += Math.min(t || 0, 0.1)),
        Yt(e),
        Qt(e),
        Y.baseLandmarks?.update(),
        Y.setpieces?.update(),
        Y.nests?.update(),
        Y.advertising?.update(),
        Y.liftView?.update(),
        Y.sky?.update(Math.min(t || 0, 0.1)),
        Y.city?.update(t),
        Y.signs?.update(),
        Y.wash?.update(),
        Y.props?.update(t),
        Y.fixtureSpill?.update(),
        Y.naval?.update(t),
        Y.ship)
      ) {
        let n = e.modules.get(`terrain`);
        ((Y.shipNaval ??= Y.root?.getObjectByName(`naval-battle`) ?? null),
          Y.ship.update(t, e.camera, {
            time: n?.getSurfaceUniforms?.()?.uTime?.value,
            water: n?.getWater?.(),
            naval: Y.shipNaval,
          }));
      }
      (Y.centre?.update(t),
        Y.backdrop?.update(t),
        Y.meridianView?.update(t),
        Y.houseFireView?.update(t),
        Y.hangarView?.update(t),
        Y.mesaView?.update(t),
        Y.keplerView?.update(t),
        Y.observatoryView?.update(t),
        Y.basculeView?.update(t),
        Y.yardView?.update(t),
        Y.suburbView?.update(t),
        Y.skyline?.update(t, e.camera));
    },
    showcase(e, t) {
      Y.layout &&
        ((e.world.match.mode = `conquest`),
        (e.world.match.phase = `live`),
        (e.world.match.timeLeft = 720),
        (e.world.match.winner = -1),
        (e.world.teams[0].tickets = 1e3),
        (e.world.teams[1].tickets = 1e3),
        (e.world.match.objectives = Y.layout.objectives.map((e, t) => ({
          ...e,
          pos: e.pos.slice(),
          team: t === 0 ? 0 : t === 2 ? 1 : -1,
          progress: t === 1 ? 0.45 : 1,
          progressTeam: +(t === 2),
          spawnable: t !== 1,
        }))),
        (Y.soldiers = un(e)),
        e.modules.get(`ui`)?.hide?.(`spawn`),
        ln(e, Y.layout),
        e.setCamera(t?.camera ?? `mid50`),
        e.events.emit(`ui:message`, {
          kind: `hint`,
          text: `${Y.layout.name} — 16v16 Conquest. Main road, North Cut and South Track.`,
          ttl: 8,
        }));
    },
    dispose(e) {
      (this.cancelPreparation(),
        Y.baseLandmarks?.dispose(),
        (Y.baseLandmarks = null),
        Y.setpieces?.dispose(),
        (Y.setpieces = null),
        Y.nests?.dispose(),
        (Y.nests = null),
        Y.advertising?.dispose(),
        (Y.advertising = null),
        Y.roofLinks?.dispose(),
        (Y.roofLinks = null),
        Y.naval?.dispose(),
        (Y.naval = null),
        Y.ship &&
          (e.modules.get(`terrain`)?.getWater?.()?.setMotion?.(0, 0, 0, 0),
          Y.ship.dispose()),
        (Y.ship = null),
        (Y.shipNaval = null),
        Y.backdrop?.dispose(),
        (Y.backdrop = null),
        Y.meridianView?.dispose(),
        Y.disposeFences?.(),
        (Y.disposeFences = null),
        (Y.showFences = null),
        (Y.meridianView = null),
        Y.skyline?.dispose(),
        (Y.skyline = null),
        Y.disposeMeridian?.(),
        (Y.disposeMeridian = null),
        Y.houseFireView?.dispose(),
        (Y.houseFireView = null),
        Y.yardView?.dispose(),
        (Y.yardView = null),
        Y.suburbView?.dispose(),
        (Y.suburbView = null),
        Y.disposeHouseFire?.(),
        (Y.disposeHouseFire = null),
        Y.hangarView?.dispose(),
        Y.keplerView?.dispose(),
        Y.basculeView?.dispose(),
        (Y.basculeView = null),
        Y.disposeBascule?.(),
        (Y.disposeBascule = null),
        (Y.keplerView = null),
        Y.disposeKepler?.(),
        (Y.disposeKepler = null),
        (Y.hangarView = null),
        Y.disposeHangar?.(),
        Y.disposeMesa?.(),
        Y.mesaView?.dispose(),
        (Y.mesaView = null),
        (Y.disposeHangar = null),
        Y.observatoryView?.dispose(),
        (Y.observatoryView = null),
        Y.disposeObservatory?.(),
        (Y.disposeObservatory = null),
        Y.fixtureSpill?.dispose(),
        (Y.fixtureSpill = null),
        Y.grounds?.dispose(),
        (Y.grounds = null),
        Y.city?.dispose(),
        (Y.city = null),
        Y.props?.dispose(),
        (Y.props = null),
        Y.signs?.dispose(),
        (Y.signs = null),
        Y.wash?.dispose(),
        (Y.wash = null),
        Y.disposeLifts?.(),
        Y.disposeTrains?.(),
        (Y.disposeTrains = null),
        Y.liftView?.dispose(),
        delete e.world.map.shelters,
        (Y.disposeLifts = null),
        (Y.liftView = null),
        Y.sky?.dispose(),
        (Y.sky = null),
        e.modules.get(`terrain`)?.setScatterExclusions?.([]));
      for (let t of Y.colliders) e.world.map.removeCollider(t);
      ((Y.colliders.length = 0),
        delete e.world.map.routes,
        delete e.world.map.homeBases,
        delete e.world.map.ziplines,
        delete e.world.map.ladders,
        delete e.world.map.roofLinks,
        dn(e),
        (Y.layout = null),
        (Y.soldiers = null),
        (Y.ctx = null));
    },
  };
