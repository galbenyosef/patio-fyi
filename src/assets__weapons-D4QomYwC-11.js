// assets__weapons-D4QomYwC 11 — modules
// Lines 2741-3320 of readable/assets__weapons-D4QomYwC.pretty.js (statement-aligned).
var $ = {
    gesture: (e) => K?.vm?.gesture?.(e),
    getAuthoredBodies: () => K?.bodies ?? null,
    ensureWeapon: (e, t) => K?.catalog?.ensure(e, t) ?? Promise.resolve(null),
    prepareLoadout: (e, t = { priority: `spawn` }) => {
      let n = Array.isArray(e) ? e : Array.isArray(e?.weapons) ? e.weapons : [];
      return K?.catalog?.ensureMany(n, t) ?? Promise.resolve(null);
    },
    isThermalActive: () => K?.thermal?.active() ?? !1,
    isThermalScoped: () => K?.thermal?.scoped() ?? !1,
    isThermalBusy: () => K?.thermal?.busy() ?? !1,
    filterThermalInput: (e) => K?.thermal?.filter(e) ?? e,
    filterGrenadeInput: (e) => {
      let t = K?.grenades?.filter(e) ?? e;
      return (tn() && (t.buttons &= ~(p.FIRE | p.ADS | p.RELOAD)), t);
    },
    isAimingSightVisible: () => K?.vm?.aimingSightVisible ?? !1,
    weaponDefs: M,
    getViewModel: () => K?.vm?.root ?? null,
    getSelected: () => J(K?.selected ?? 0),
    select: (e) => {
      K && nn(K.ctx, e);
    },
    configure: (e) => K?.equipment?.configure(e),
    equipmentStatus: () => K?.equipment?.status(),
    equippedDefinition: (e, t) => K?.equipment?.definition(e, t) ?? j[e],
    equippedClass: (e) => K?.equipment?.classId(e) ?? null,
    fireWeapon: Te,
    damageAt: Ce,
    shotInterval: we,
    zoom: (e) => K?.vm?.zoom(e) ?? null,
    presentReplay: (e) => {
      if (!K?.vm) return;
      if (e) {
        let t = Kt(e);
        (t !== K.replayKey &&
          ((K.replayKey = t), (K.presentedDef = null), K.presentGeneration++),
          (K.replay = e));
        return;
      }
      if (!K.replay) return;
      ((K.replay = null),
        (K.replayKey = ``),
        K.presentGeneration++,
        K.vm.setReload(0),
        K.vm.tickAim(10, { buttons: 0 }));
      let t = J(K.selected);
      (Z(K.ctx, t, () => (!K.replay && K.selected === t.id ? J(t.id) : null)),
        K.vm.setLoaded((K.ammo[K.selected]?.mag ?? 1) > 0));
    },
    kickReplay: (e = 1) => {
      K?.replay && K.vm?.kick(e);
    },
    replayMuzzle: () =>
      K?.replay && K.vm?.muzzle
        ? K.vm.muzzle.getWorldPosition(new T()).toArray()
        : null,
    replayFov: () =>
      !K?.replay || !K.vm
        ? 75
        : 75 + ((K.vm.optic ? K.vm.opticFov : 55) - 75) * K.vm.ads,
    throwGrenade: () =>
      K ? ($t(K.ctx) ? en(K.ctx) : K.grenades.requestThrow()) : !1,
    gIsDefib: () => !!K && $t(K.ctx),
    releaseGrenade: () => K?.grenades?.releaseThrow() ?? !1,
    grenadeFuse: () => K?.grenades?.fuse() ?? null,
    grenadeCooking: () => K?.grenades?.cooking() ?? !1,
    grenadeGrabTarget: () => K?.grenades?.grabTarget() ?? null,
    grenadeCount: () => K?.grenades?.remaining() ?? 0,
    grenadeThrowProgress: () => K?.grenades?.progress() ?? -1,
    gadgetStatus: () => K?.gadgets?.status() ?? null,
    isUnlimitedAmmo: () =>
      !!K?.ctx.localServer && j[K.selected]?.class === `launcher`,
    stats: () =>
      K
        ? {
            selected: K.selected,
            ammo: structuredClone(K.ammo),
            shots: K.shotSeq,
            heat: K.heat,
            inventory: K.prediction?.stats(),
            aimRecoil: K.aimRecoil.stats(),
          }
        : null,
  },
  un = {
    name: `weapons`,
    deps: [`player`, `ui`, `audio`, `effects`, `netcode`],
    api: $,
    async init(e) {
      ((K = {
        ctx: e,
        rng: e.rng.fork(`weapons`),
        selected: 0,
        lastInputSlot: 0,
        ammo: Zt(),
        cooldown: 0,
        reloadT: -1,
        heat: 0,
        shotSeq: 0,
        prevFire: !1,
        prevReload: !1,
        range: null,
        vm: null,
        keyOff: null,
        presentGeneration: 0,
      }),
        (K.catalog = ce(e.assets)),
        await K.catalog.ensure(0, { priority: `local` }));
      let t = K.catalog.scenes;
      (e.scene.add(e.camera),
        (K.vm = me(e.camera, { bodies: t, renderer: e.renderer })),
        K.vm.setWeapon(M[0]),
        (K.bodies = t),
        (K.grenades = Ge(e, {
          interruptReload: () => {
            let t = e.modules.get(`player`)?.getLocalEntity?.();
            (K.prediction?.interruptReload(),
              (K.reloadT = -1),
              K.vm?.setReload(0),
              t &&
                ((t.state &= ~a.RELOADING),
                K.prediction &&
                  e.modules.get(`netcode`)?.getClient?.() &&
                  ln(e, t)));
          },
        })),
        (K.knife = ct(e)),
        (K.gadgets = xt(e)),
        (K.beacons = wt(e)),
        (K.drops = Et(e, {
          bodies: t,
          catalog: K.catalog,
          inventory: () => K?.prediction?.state,
        })),
        (K.medic = Pt(e)),
        (K.kitAction = It(e)),
        (K.redeploy = Lt(e)),
        (K.repair = Rt(e)),
        (K.rockets = dt(e)),
        (K.thermal = Gt(e)),
        (K.prediction = $e(!!e.localServer)),
        (K.offs = []),
        (K.aimRecoil = Ut()),
        (K.lock = ke()),
        (K.sway = ht()),
        (K.braced = !1),
        (K.restTick = 0),
        typeof document < `u` && !e.config?.headless && (K.steadyHud = gt()),
        K.offs.push(
          e.events.on(`player:beforeInput`, ({ entity: t, dt: n }) => {
            if (!t || t.hp <= 0 || t.state & (a.DEAD | a.IN_VEHICLE)) {
              (K.aimRecoil.reset(),
                K.sway.reset(),
                (K.braced = !1),
                K.steadyHud?.update(!1));
              return;
            }
            let r = e.modules.get(`player`),
              i = K.aimRecoil.step(r.getLook(), n),
              o = K.vm,
              s = J(K.selected),
              c =
                !K.replay &&
                o?.optic?.type === `scope` &&
                o.ads >= 1 &&
                o.opticFov <= pt.maxFov &&
                s.class !== `launcher`,
              l = s.attachments?.grip === `bipod`;
            (c
              ? K.restTick++ % 6 == 0 &&
                (K.braced = mt(e.world, D(t), i.yaw, l))
              : (K.braced = !1),
              K.sway.step(i, n, {
                scoped: c,
                stance: t.stance,
                braced: K.braced,
                bipod: l,
              }),
              r.setLook(i.yaw, i.pitch),
              K.steadyHud?.update(c, K.sway.status()));
          }),
        ));
      let n = () => {
        let t = J(K.selected);
        K.presentedDef !== t &&
          !K.replay &&
          Z(e, t, () => (!K.replay && K.selected === t.id ? J(t.id) : null));
      };
      ((K.equipment = vt(e, n)), K.offs.push(ue(n), fe(n)));
      let r = () =>
        e.modules
          .get(`netcode`)
          ?.sendRpc?.(`career:camos`, { ...he(), wear: ye() });
      (K.offs.push(ue(r), fe(r), e.events.on(`player:local`, r)),
        e.modules
          .get(`player`)
          ?.setSlotCount?.(e.config.showcase ? 4 : ae.length));
      let i = ({ entityId: t }) => {
        (K.aimRecoil.reset(),
          K.sway?.reset(),
          (K.minEpoch =
            K.localEntityId === t ? K.prediction.stats().epoch + 1 : 0),
          (K.prediction = $e(!!e.localServer)),
          (K.localEntityId = t),
          (K.ammo = Zt()),
          (K.cooldown = 0),
          (K.reloadT = -1),
          (K.prevFire = !1),
          (K.prevReload = !1),
          K.vm?.setReload(0),
          X(e, j[K.selected], K.ammo[K.selected]));
      };
      (K.offs.push(e.events.on(`player:local`, i)),
        K.offs.push(
          e.events.on(`player:spawn`, (t) => {
            t.entityId === e.modules.get(`player`)?.getLocalEntity?.()?.id &&
              i(t);
          }),
        ),
        K.offs.push(
          e.events.on(`weapon:inventory`, (t) => {
            let n = e.modules.get(`player`)?.getLocalEntity?.();
            !n ||
              t.entityId !== n.id ||
              t.epoch < (K.minEpoch ?? 0) ||
              (K.prediction.reconcile(t) && ln(e, n));
          }),
        ));
      let o = e.modules.get(`netcode`)?.getClient?.();
      (o &&
        K.offs.push(
          o.on(`connected`, () => {
            ((K.localEntityId = null),
              (K.minEpoch = 0),
              (K.prediction = $e(!!e.localServer)));
          }),
        ),
        o &&
          K.offs.push(
            o.on(`input`, (t) => {
              if (e.config.showcase) return;
              let n = e.modules.get(`player`)?.getLocalEntity?.();
              if (!n || n.state & a.IN_VEHICLE) return;
              let r = n.hp > 0 && !(n.state & a.DEAD),
                i = K.prediction.state,
                o = (i.loadout ?? ae)[t.slot],
                s = o === F.id;
              (je(
                K.lock,
                e.world,
                n,
                s &&
                  r &&
                  i.selected === o &&
                  Ye(i, K.prediction.clock) &&
                  Ze(i, J(o)) >= 1 &&
                  i.reloadEndTick < 0 &&
                  i.ammo[o].mag > 0,
              ),
                K.knife.input(t.buttons, r, K.grenades.busy()));
              let c = K.prediction.predict(
                t,
                r,
                !s || Ae(K.lock, Jt),
                K.grenades.busy() || K.knife.busy() || tn(),
              );
              (c.shot && s && ((K.lock.targetId = null), (K.lock.ticks = 0)),
                ln(e, n),
                c.firing || (n.state &= ~a.FIRING));
              let l = J(K.selected);
              (c.reload &&
                e.events.emit(`weapon:reload`, {
                  entityId: n.id,
                  weaponId: l.id,
                  duration: l.reload,
                }),
                c.shot && on(e, n, l, K.ammo[l.id], t, !0));
            }),
          ));
      let s = (t) => {
          if (
            t.code === `KeyX` &&
            !t.repeat &&
            e.modules.get(`player`)?.getLocalEntity?.()?.state & a.IN_VEHICLE
          ) {
            (t.preventDefault(),
              e.modules.get(`netcode`)?.sendRpc?.(`vehicle:flares`, {}));
            return;
          }
          if (
            (t.code === `KeyQ` || t.code === `KeyE`) &&
            !t.repeat &&
            e.modules.get(`player`)?.isInputActive?.() &&
            e.modules.get(`player`)?.getLocalEntity?.()?.state & a.IN_VEHICLE
          ) {
            (t.preventDefault(),
              e.modules.get(`netcode`)?.sendRpc?.(`vehicle:seat`, {
                dir: t.code === `KeyQ` ? -1 : 1,
              }));
            return;
          }
          (t.code === `KeyG` &&
            !t.repeat &&
            e.modules.get(`player`)?.isInputActive?.() &&
            (t.preventDefault(), $.throwGrenade()),
            e.config.showcase === `weapons` &&
              /^Digit[1-7]$/.test(t.code) &&
              nn(e, Number(t.code.slice(5)) - 1));
        },
        c = (e) => {
          K.vm?.optic?.type === `scope` &&
            K.vm.ads > 0.5 &&
            K.vm.zoom(e.deltaY < 0 ? 1 : -1) != null &&
            (e.preventDefault(), e.stopImmediatePropagation());
        },
        l = (e) => {
          e.code === `KeyG` && K.grenades.releaseThrow();
        },
        u = () => K.grenades.releaseThrow();
      (window.addEventListener(`keydown`, s),
        window.addEventListener(`keyup`, l),
        window.addEventListener(`blur`, u),
        window.addEventListener(`wheel`, c, { capture: !0, passive: !1 }),
        (K.keyOff = () => {
          (window.removeEventListener(`keydown`, s),
            window.removeEventListener(`keyup`, l),
            window.removeEventListener(`blur`, u),
            window.removeEventListener(`wheel`, c, { capture: !0 }));
        }));
      let d = e.modules.get(`player`);
      try {
        let e = localStorage.getItem(Xt);
        e != null &&
          d?.setSensitivity &&
          (d.setSensitivity(+e), localStorage.removeItem(Xt));
      } catch {}
      ((K.sensBase = d?.getSensitivity?.() ?? null),
        (K.sensRatio = 1),
        (K.scoped = !1),
        X(e, M[0], K.ammo[0]));
    },
    tick(e, t) {
      if ((K?.equipment?.tick(), !K)) return;
      let n = e.modules.get(`player`),
        r = n?.getLocalEntity?.();
      if (!r) return;
      let i = n.getInput();
      if (!e.config.showcase && e.modules.get(`netcode`)?.getClient?.()) {
        ((!e.modules.get(`netcode`)?.isConnected?.() ||
          r.hp <= 0 ||
          r.state & a.DEAD) &&
          ((K.reloadT = -1),
          K.vm?.setReload(0),
          (r.state &= ~(a.FIRING | a.RELOADING))),
          (K.heat = Math.max(0, K.heat - t * 0.75)),
          K.replay ||
            K.vm?.tickAim(
              t,
              i,
              Ze(K.prediction.state, J(K.selected)),
              qe(K.prediction.state, K.prediction.clock),
            ),
          e.events.emit(`ui:spread`, {
            spread: Y((j[K.selected].spread + K.heat * 0.018) / 0.025, 0, 1),
          }));
        return;
      }
      if (r.hp <= 0 || r.state & a.DEAD) {
        ((K.reloadT = -1),
          K.vm?.setReload(0),
          (r.state &= ~(a.FIRING | a.RELOADING)),
          (K.prevFire = !!(i.buttons & p.FIRE)),
          (K.prevReload = !!(i.buttons & p.RELOAD)));
        return;
      }
      i.slot !== K.lastInputSlot &&
        re(i.slot) &&
        ((K.lastInputSlot = i.slot), nn(e, i.slot));
      let o = j[K.selected],
        s = K.ammo[o.id];
      ((K.cooldown = Math.max(0, K.cooldown - t)),
        (K.heat = Math.max(0, K.heat - t * 0.75)),
        K.replay || K.vm?.tickAim(t, i),
        (r.weapon = o.id),
        (r.ammo = s.mag));
      let c = !!(i.buttons & p.FIRE),
        l = !!(i.buttons & p.RELOAD);
      ((s.mag <= 0 || (l && !K.prevReload)) && rn(e, r, o, s),
        K.reloadT >= 0 &&
          ((K.reloadT -= t),
          K.vm?.setReload(Y(1 - K.reloadT / o.reload, 0.001, 1)),
          K.reloadT <= 0 && an(e, r, o, s)));
      let u = o.mode === `AUTO` ? c : c && !K.prevFire;
      (u && K.cooldown <= 0 && K.reloadT < 0 && on(e, r, o, s, i),
        u || (r.state &= ~a.FIRING),
        (r.ammo = s.mag),
        (K.prevFire = c),
        (K.prevReload = l),
        e.events.emit(`ui:spread`, {
          spread: Y((o.spread + K.heat * 0.018) / 0.025, 0, 1),
        }));
    },
    update(e, t) {
      if (!K) return;
      (K.rounds?.length && cn(e, t),
        (K.remoteFire ??= zt()),
        K.remoteFire.update(
          e,
          t,
          e.modules.get(`player`)?.getLocalEntity?.()?.id,
        ),
        K.grenades.update(t),
        K.gadgets.update(t),
        K.beacons.update(t),
        K.drops.update(t),
        K.rockets.update(t));
      let n = e.modules.get(`player`),
        r = n?.getLocalEntity?.(),
        i = n?.getInput?.();
      if (K.replay) {
        (K.grenades.present(!1),
          K.knife.cancel(),
          K.vm?.setThrowLower(0),
          K.medic.update(t),
          K.kitAction.update(t, !1, K.vm),
          K.thermal?.lower());
        let n = K.replay,
          r = $.equippedDefinition(n.weaponId, n.entity) ?? j[0];
        if (K.presentedDef !== r) {
          let t = K.replayKey;
          (Z(e, r, () =>
            qt(K, t, r.id)
              ? ($.equippedDefinition(r.id, K.replay.entity) ?? j[r.id])
              : null,
          ),
            K.vm?.setLoaded(!0));
        }
        let i = { buttons: (n.ads ? p.ADS : 0) | (n.sprint ? p.SPRINT : 0) };
        (K.vm?.setReload(n.reload ?? 0),
          K.vm?.tickAim(t, i, 1),
          K.vm?.setVisible(!0),
          K.vm?.update(t, i, n.speed ?? 0),
          K.vm?.setCameraFov(e.camera.fov, e.renderer.domElement.clientHeight),
          K.scoped &&
            ((K.scoped = !1),
            e.events.emit(`ui:scoped`, { scoped: !1, fov: e.camera.fov })),
          e.events.emit(`ui:launcherRange`, { active: !1 }),
          Yt(e, null, t, !1));
        return;
      }
      let o = !1;
      if (r) {
        _e(
          +(e.world.match?.mode === `ffa` || r.team === 1),
          K.equipment?.classId(r) ?? `assault`,
          !!e.config.frost,
        );
        let t = r.pos[1] + (n?.eyeHeight?.(r) ?? 1.62),
          i = e.camera.position.x - r.pos[0],
          a = e.camera.position.y - t,
          s = e.camera.position.z - r.pos[2];
        o = i * i + a * a + s * s < 4;
      }
      K.medic.update(t);
      let s = tn() && o;
      if (s && K.presentedDef?.id !== Q)
        (Z(e, j[Q], () => (tn() ? j[Q] : null)), K.vm?.setLoaded(!0));
      else if (!s && K.presentedDef?.id === Q && K.selected !== Q) {
        let t = J(K.selected);
        Z(e, t, () => (!K.replay && K.selected === t.id ? J(t.id) : null));
        let n = K.ammo[t.id]?.mag;
        n != null && (K.vm?.setLoaded(n > 0), K.vm?.setAmmo?.(n));
      }
      (K.kitAction.update(
        t,
        o && r?.hp > 0 && !(r.state & (a.IN_VEHICLE | a.DEAD)),
        K.vm,
        s ? `defib` : j[K.selected]?.class,
      ),
        K.vm?.setThrowLower(Math.max(K.grenades.lower(), K.knife.lower())),
        K.vm?.setVisible(o && !K.thermal?.busy() && !(r?.state & a.IN_VEHICLE)),
        K.vm?.update(t, i, r ? Math.hypot(r.vel[0], r.vel[2]) : 0),
        K.range?.update(t, e.world.time.sim));
      let c = K.grenades.present(o && !K.thermal?.busy());
      c && (e.camera.rotateZ(c.roll), e.camera.rotateX(c.pitch));
      let l = K.knife.present(
        t,
        o &&
          r?.hp > 0 &&
          !(r.state & (a.DEAD | a.IN_VEHICLE)) &&
          !K.thermal?.busy(),
      );
      if (
        (l &&
          (e.camera.rotateZ(l.roll),
          e.camera.rotateX(l.pitch),
          e.camera.translateZ(-l.push)),
        Yt(e, r, t, o),
        (K.rangeTimer = (K.rangeTimer ?? 0) - t),
        K.rangeTimer <= 0)
      ) {
        K.rangeTimer = 0.1;
        let t = j[K.selected];
        e.events.emit(
          `ui:launcherRange`,
          o && r?.hp > 0 && t.class === `launcher`
            ? ft(e.world, r, t)
            : { active: !1 },
        );
      }
      let u = K.vm?.optic,
        d = e.camera,
        f = K.vm?.opticFov ?? 55;
      if (o && u && f !== 55) {
        let e = 1 + (f / 55 - 1) * K.vm.ads;
        Math.abs(e - 1) > 0.001 && ((d.fov *= e), d.updateProjectionMatrix());
      }
      if (
        (K.vm?.setCameraFov(d.fov, e.renderer.domElement.clientHeight),
        n?.setAimSensitivityScale)
      ) {
        let e = o ? Math.min(1, d.fov / 55) : 1;
        n.setAimSensitivityScale(e >= 0.995 ? 1 : e);
      }
      let m = !!(o && u?.type === `scope` && K.vm.ads >= 1);
      m !== K.scoped &&
        ((K.scoped = m), e.events.emit(`ui:scoped`, { scoped: m, fov: d.fov }));
      let h = e.modules.get(`environment`),
        g = f > 0 ? 55 / f : 0,
        _ = o && u?.type === `scope` && g >= 6 ? K.vm.ads * 0.2 : 0;
      (h?.setFogSightMultiplier?.(1 - _),
        K.thermal?.setScope(m && !!u?.thermal),
        K.thermal?.update(t));
    },
    async showcase(e) {
      K.range = nt(e);
      let t = e.modules.get(`player`),
        n = t?.getLocalEntity?.();
      (n &&
        ((n.pos[0] = 0),
        (n.pos[1] = e.world.map.getHeight(0, 7)),
        (n.pos[2] = 7),
        (n.yaw = 0),
        (n.pitch = 0),
        t.setLook?.(0, 0)),
        e.setCamera(`fps`),
        e.events.emit(`ui:message`, {
          kind: `hint`,
          text: `CLICK TO DEPLOY • LMB FIRE • RMB AIM • R RELOAD • 1–7 WEAPONS`,
          ttl: 0.6,
        }));
    },
    dispose(e) {
      K &&=
        (K.thermal?.dispose(),
        K.gadgets?.dispose(),
        K.beacons?.dispose(),
        K.drops?.dispose(),
        K.medic?.dispose(),
        K.kitAction?.dispose(),
        K.redeploy?.dispose(),
        K.repair?.dispose(),
        K.equipment?.dispose(),
        K.steadyHud?.dispose(),
        e.modules.get(`player`)?.setBreathCapture?.(null),
        K.offs?.forEach((e) => e()),
        e.events.emit(`ui:launcherRange`, { active: !1 }),
        e.events.emit(`ui:javelinLock`, { active: !1 }),
        K.keyOff?.(),
        e.modules.get(`player`)?.setSlotCount?.(4),
        e.modules.get(`player`)?.setAimSensitivityScale?.(1),
        K.rockets?.dispose(),
        K.grenades?.dispose(),
        K.knife?.dispose(),
        K.range?.dispose(),
        K.vm?.dispose(),
        null);
    },
  };
