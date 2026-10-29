// assets__weapons-l6nEMnye 14 — state
// Lines 2952-3624 of readable/assets__weapons-l6nEMnye.pretty.js (statement-aligned).
var $ = {
    gesture: (e) => G?.vm?.gesture?.(e),
    getAuthoredBodies: () => G?.bodies ?? null,
    ensureWeapon: (e, t) => G?.catalog?.ensure(e, t) ?? Promise.resolve(null),
    prepareLoadout: (e, t = { priority: `spawn` }) => {
      let n = Array.isArray(e) ? e : Array.isArray(e?.weapons) ? e.weapons : [];
      return G?.catalog?.ensureMany(n, t) ?? Promise.resolve(null);
    },
    isThermalActive: () => G?.thermal?.active() ?? !1,
    isThermalScoped: () => G?.thermal?.scoped() ?? !1,
    isThermalBusy: () => G?.thermal?.busy() ?? !1,
    filterThermalInput: (e) => G?.thermal?.filter(e) ?? e,
    filterGrenadeInput: (e) => {
      let t = G?.grenades?.filter(e) ?? e;
      return (Q() && (t.buttons &= ~(c.FIRE | c.ADS | c.RELOAD)), t);
    },
    isAimingSightVisible: () => G?.vm?.aimingSightVisible ?? !1,
    weaponDefs: N,
    getViewModel: () => G?.vm?.root ?? null,
    getSelected: () => q(G?.selected ?? 0),
    select: (e) => {
      G && bn(G.ctx, e);
    },
    configure: (e) => G?.equipment?.configure(e),
    equipmentStatus: () => G?.equipment?.status(),
    equippedDefinition: (e, t) => G?.equipment?.definition(e, t) ?? F[e],
    equippedClass: (e) => G?.equipment?.classId(e) ?? null,
    fireWeapon: Ae,
    damageAt: De,
    shotInterval: Oe,
    zoom: (e) => G?.vm?.zoom(e) ?? null,
    presentReplay: (e) => {
      if (!G?.vm) return;
      if (e) {
        let t = ln(e);
        (t !== G.replayKey &&
          ((G.replayKey = t), (G.presentedDef = null), G.presentGeneration++),
          (G.replay = e));
        return;
      }
      if (!G.replay) return;
      ((G.replay = null),
        (G.replayKey = ``),
        G.presentGeneration++,
        G.vm.setReload(0),
        G.vm.tickAim(10, { buttons: 0 }));
      let t = q(G.selected);
      (X(G.ctx, t, () => (!G.replay && G.selected === t.id ? q(t.id) : null)),
        G.vm.setLoaded((G.ammo[G.selected]?.mag ?? 1) > 0));
    },
    kickReplay: (e = 1) => {
      if (!G?.replay) return;
      G.vm?.kick(e);
      let t = G.replay,
        n = t ? $.equippedDefinition(t.weaponId, t.entity) : null;
      G.vm?.flash?.(Ue(n), { day: We(G.ctx) });
    },
    replayMuzzle: () =>
      G?.replay && G.vm?.muzzle
        ? G.vm.muzzle.getWorldPosition(new a()).toArray()
        : null,
    replayFov: () =>
      !G?.replay || !G.vm
        ? 75
        : 75 + ((G.vm.optic ? G.vm.opticFov : 55) - 75) * G.vm.ads,
    throwGrenade: () =>
      G ? (gn(G.ctx) ? _n(G.ctx) : G.grenades.requestThrow()) : !1,
    throwSmoke: () => (G && gn(G.ctx) && !Q() ? G.grenades.requestThrow() : !1),
    releaseSmoke: () => G?.grenades?.releaseThrow() ?? !1,
    grenadeKind: () => G?.grenades?.kind?.() ?? `frag`,
    gIsDefib: () => !!G && gn(G.ctx),
    padsHeld: () => !!G?.padsHeld,
    releaseGrenade: () => G?.grenades?.releaseThrow() ?? !1,
    grenadeFuse: () => G?.grenades?.fuse() ?? null,
    grenadeCooking: () => G?.grenades?.cooking() ?? !1,
    grenadeGrabTarget: () => G?.grenades?.grabTarget() ?? null,
    grenadeCount: () => G?.grenades?.remaining() ?? 0,
    grenadeThrowProgress: () => G?.grenades?.progress() ?? -1,
    gadgetStatus: () => G?.gadgets?.status() ?? null,
    hipCone: () => {
      if (
        !G?.prediction ||
        G.replay ||
        G.knife?.busy() ||
        G.grenades?.busy() ||
        Q()
      )
        return null;
      let e = q(G.selected),
        t = G.ctx.modules.get(`player`)?.getLocalEntity?.();
      if (
        !e ||
        !t ||
        e.class === `launcher` ||
        e.class === `defib` ||
        e.class === `tool`
      )
        return null;
      let n = G.lastButtons ?? 0,
        r = n & c.SPRINT ? 0 : R(G.prediction.state, e);
      return {
        spread: je(t, e, { buttons: n }, r, G.prediction.state),
        aim: r,
      };
    },
    isUnlimitedAmmo: () =>
      !!G?.ctx.localServer && F[G.selected]?.class === `launcher`,
    stats: () =>
      G
        ? {
            selected: G.selected,
            ammo: structuredClone(G.ammo),
            shots: G.shotSeq,
            heat: G.heat,
            inventory: G.prediction?.stats(),
            aimRecoil: G.aimRecoil.stats(),
          }
        : null,
  },
  Dn = {
    name: `weapons`,
    deps: [`player`, `ui`, `audio`, `effects`, `netcode`],
    api: $,
    async init(e) {
      ((G = {
        ctx: e,
        rng: e.rng.fork(`weapons`),
        selected: 0,
        lastInputSlot: 0,
        ammo: mn(),
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
        (G.catalog = le(e.assets)),
        await G.catalog.ensure(0, { priority: `local` }));
      let t = G.catalog.scenes;
      (e.scene.add(e.camera),
        (G.vm = he(e.camera, { bodies: t, renderer: e.renderer })),
        G.vm.setWeapon(N[0]),
        (G.bodies = t),
        (G.grenades = nt(e, {
          interruptReload: () => {
            let t = e.modules.get(`player`)?.getLocalEntity?.();
            (G.prediction?.interruptReload(),
              (G.reloadT = -1),
              G.vm?.setReload(0),
              t &&
                ((t.state &= ~o.RELOADING),
                G.prediction &&
                  e.modules.get(`netcode`)?.getClient?.() &&
                  En(e, t)));
          },
        })),
        (G.knife = St(e)),
        (G.gadgets = Mt(e, { inventory: () => G?.prediction?.state })),
        (G.beacons = Ft(e)),
        (G.drops = Lt(e, {
          bodies: t,
          catalog: G.catalog,
          inventory: () => G?.prediction?.state,
        })),
        (G.medic = Gt(e)),
        (G.kitAction = Yt(e)),
        (G.redeploy = Xt(e)),
        (G.repair = Zt(e)),
        (G.rockets = Tt(e)),
        (G.thermal = cn(e)),
        (G.prediction = ut(!!e.localServer)),
        (G.offs = []),
        (G.aimRecoil = on()),
        (G.lock = Ie()),
        (G.sway = xe()),
        (G.braced = !1),
        (G.restTick = 0),
        typeof document < `u` && !e.config?.headless && (G.steadyHud = Dt()),
        G.offs.push(
          e.events.on(`player:beforeInput`, ({ entity: t, dt: n }) => {
            if (!t || t.hp <= 0 || t.state & (o.DEAD | o.IN_VEHICLE)) {
              (G.aimRecoil.reset(),
                G.sway.reset(),
                (G.braced = !1),
                G.steadyHud?.update(!1));
              return;
            }
            let r = e.modules.get(`player`),
              i = G.aimRecoil.step(r.getLook(), n),
              a = G.vm,
              s = q(G.selected),
              c =
                !G.replay &&
                a?.optic?.type === `scope` &&
                a.ads >= 1 &&
                a.opticFov <= Ce.maxFov &&
                s.class !== `launcher`,
              l = s.attachments?.grip === `bipod`;
            (c
              ? G.restTick++ % 6 == 0 &&
                (G.braced = Pe(e.world, A(t), i.yaw, l))
              : (G.braced = !1),
              G.sway.step(i, n, {
                scoped: c,
                stance: t.stance,
                braced: G.braced,
                bipod: l,
              }),
              r.setLook(i.yaw, i.pitch));
            let u = we(s, G.prediction.state);
            G.steadyHud?.update(
              c || (s.class === `lmg` && R(G.prediction.state, s) >= 1),
              s.class === `lmg`
                ? {
                    state: u
                      ? `bipod`
                      : G.prediction.state.supportTicks > 0
                        ? `settling`
                        : `free`,
                  }
                : G.sway.status(),
            );
          }),
        ));
      let n = () => {
        let t = q(G.selected);
        G.presentedDef !== t &&
          !G.replay &&
          X(e, t, () => (!G.replay && G.selected === t.id ? q(t.id) : null));
      };
      ((G.equipment = kt(e, n)), G.offs.push(de(n), se(n)));
      let r = () =>
        e.modules
          .get(`netcode`)
          ?.sendRpc?.(`career:camos`, { ...oe(), wear: ce() });
      (G.offs.push(de(r), se(r), e.events.on(`player:local`, r)),
        e.modules
          .get(`player`)
          ?.setSlotCount?.(e.config.showcase ? 4 : ne.length),
        e.modules.get(`player`)?.setSlotAction?.((t, n) => {
          if (e.config.showcase) return !1;
          let r = (G?.prediction?.state?.loadout ?? ne)[t],
            i = F[r];
          return i?.class !== `tool` || i.tool !== `medkit`
            ? !1
            : (n === `key` && yn(e), !0);
        }));
      let i = ({ entityId: t }) => {
        (G.aimRecoil.reset(),
          G.sway?.reset(),
          (G.minEpoch =
            G.localEntityId === t ? G.prediction.stats().epoch + 1 : 0),
          (G.prediction = ut(!!e.localServer)),
          gn(e) && G.vm?.prepareKit?.(F[Z]),
          (G.localEntityId = t),
          (G.ammo = mn()),
          (G.cooldown = 0),
          (G.reloadT = -1),
          (G.prevFire = !1),
          (G.prevReload = !1),
          G.vm?.setReload(0),
          Y(e, F[G.selected], G.ammo[G.selected]));
      };
      (G.offs.push(e.events.on(`player:local`, i)),
        G.offs.push(
          e.events.on(`player:spawn`, (t) => {
            t.entityId === e.modules.get(`player`)?.getLocalEntity?.()?.id &&
              i(t);
          }),
        ),
        G.offs.push(
          e.events.on(`vehicle:enter`, ({ entityId: t }) => {
            t === e.modules.get(`player`)?.getLocalEntity?.()?.id &&
              (G.prediction.interruptHandling(),
              G.aimRecoil.reset(),
              G.sway.reset(),
              (G.braced = !1),
              G.steadyHud?.update(!1));
          }),
        ),
        G.offs.push(
          e.events.on(`weapon:inventory`, (t) => {
            let n = e.modules.get(`player`)?.getLocalEntity?.();
            !n ||
              t.entityId !== n.id ||
              t.epoch < (G.minEpoch ?? 0) ||
              (G.prediction.reconcile(t) && En(e, n));
          }),
        ));
      let a = e.modules.get(`netcode`)?.getClient?.();
      (a &&
        G.offs.push(
          a.on(`connected`, () => {
            ((G.localEntityId = null),
              (G.minEpoch = 0),
              (G.prediction = ut(!!e.localServer)));
          }),
        ),
        a &&
          G.offs.push(
            a.on(`input`, (t) => {
              if (e.config.showcase) return;
              let n = e.modules.get(`player`)?.getLocalEntity?.();
              if (!n) return;
              if (((G.lastButtons = t.buttons), n.state & o.IN_VEHICLE)) {
                G.prediction.interruptHandling();
                return;
              }
              let r = n.hp > 0 && !(n.state & o.DEAD),
                i = G.prediction.state,
                a = (i.loadout ?? ne)[t.slot],
                s = a === L.id;
              (Re(
                G.lock,
                e.world,
                n,
                s &&
                  r &&
                  i.selected === a &&
                  st(i, G.prediction.clock) &&
                  R(i, q(a)) >= 1 &&
                  i.reloadEndTick < 0 &&
                  i.ammo[a].mag > 0,
              ),
                G.knife.input(t.buttons, r, G.grenades.busy()));
              let c = G.prediction.predict(
                t,
                r,
                !s || Le(G.lock, dn),
                G.grenades.busy() || G.knife.busy() || Q(),
                Ee(e.world, n, q(a), t),
              );
              (c.shot && s && ((G.lock.targetId = null), (G.lock.ticks = 0)),
                En(e, n),
                c.firing || (n.state &= ~o.FIRING));
              let l = q(G.selected);
              (c.reload &&
                e.events.emit(`weapon:reload`, {
                  entityId: n.id,
                  weaponId: l.id,
                  duration: l.reload,
                }),
                c.shot && Cn(e, n, l, G.ammo[l.id], t, !0));
            }),
          ));
      let s = (t) => {
          if (
            t.code === `KeyX` &&
            !t.repeat &&
            e.modules.get(`player`)?.getLocalEntity?.()?.state & o.IN_VEHICLE
          ) {
            (t.preventDefault(),
              e.modules.get(`netcode`)?.sendRpc?.(`vehicle:flares`, {}));
            return;
          }
          if (
            (t.code === `KeyQ` || t.code === `KeyE`) &&
            !t.repeat &&
            e.modules.get(`player`)?.isInputActive?.() &&
            e.modules.get(`player`)?.getLocalEntity?.()?.state & o.IN_VEHICLE
          ) {
            (t.preventDefault(),
              e.modules.get(`netcode`)?.sendRpc?.(`vehicle:seat`, {
                dir: t.code === `KeyQ` ? -1 : 1,
              }));
            return;
          }
          (t.code === `KeyO` &&
            !t.repeat &&
            e.modules.get(`player`)?.isInputActive?.() &&
            (t.preventDefault(), $.throwSmoke()),
            t.code === `KeyG` &&
              !t.repeat &&
              e.modules.get(`player`)?.isInputActive?.() &&
              (t.preventDefault(), gn(e) ? _n(e, !0) : $.throwGrenade()),
            e.config.showcase === `weapons` &&
              /^Digit[1-7]$/.test(t.code) &&
              bn(e, Number(t.code.slice(5)) - 1));
        },
        c = (e) => {
          G.vm?.optic?.type === `scope` &&
            G.vm.ads > 0.5 &&
            G.vm.zoom(e.deltaY < 0 ? 1 : -1) != null &&
            (e.preventDefault(), e.stopImmediatePropagation());
        },
        l = (t) => {
          (t.code === `KeyG` && vn(e),
            (t.code === `KeyG` || t.code === `KeyO`) &&
              G.grenades.releaseThrow());
        },
        u = () => {
          (vn(e), G.grenades.releaseThrow());
        };
      (window.addEventListener(`keydown`, s),
        window.addEventListener(`keyup`, l),
        window.addEventListener(`blur`, u),
        window.addEventListener(`wheel`, c, { capture: !0, passive: !1 }),
        (G.keyOff = () => {
          (window.removeEventListener(`keydown`, s),
            window.removeEventListener(`keyup`, l),
            window.removeEventListener(`blur`, u),
            window.removeEventListener(`wheel`, c, { capture: !0 }));
        }));
      let d = e.modules.get(`player`);
      try {
        let e = localStorage.getItem(pn);
        e != null &&
          d?.setSensitivity &&
          (d.setSensitivity(+e), localStorage.removeItem(pn));
      } catch {}
      ((G.sensBase = d?.getSensitivity?.() ?? null),
        (G.sensRatio = 1),
        (G.scoped = !1),
        Y(e, N[0], G.ammo[0]));
    },
    tick(e, t) {
      if ((G?.equipment?.tick(), !G)) return;
      let n = e.modules.get(`player`),
        r = n?.getLocalEntity?.();
      if (!r) return;
      let i = n.getInput();
      if (!e.config.showcase && e.modules.get(`netcode`)?.getClient?.()) {
        ((!e.modules.get(`netcode`)?.isConnected?.() ||
          r.hp <= 0 ||
          r.state & o.DEAD) &&
          ((G.reloadT = -1),
          G.vm?.setReload(0),
          (r.state &= ~(o.FIRING | o.RELOADING))),
          (G.heat = Math.max(0, G.heat - t * 0.75)),
          G.replay ||
            G.vm?.tickAim(
              t,
              i,
              R(G.prediction.state, q(G.selected)),
              at(G.prediction.state, G.prediction.clock),
            ),
          e.events.emit(`ui:spread`, {
            spread: J((F[G.selected].spread + G.heat * 0.018) / 0.025, 0, 1),
          }));
        return;
      }
      if (r.hp <= 0 || r.state & o.DEAD) {
        ((G.reloadT = -1),
          G.vm?.setReload(0),
          (r.state &= ~(o.FIRING | o.RELOADING)),
          (G.prevFire = !!(i.buttons & c.FIRE)),
          (G.prevReload = !!(i.buttons & c.RELOAD)));
        return;
      }
      i.slot !== G.lastInputSlot &&
        re(i.slot) &&
        ((G.lastInputSlot = i.slot), bn(e, i.slot));
      let a = F[G.selected],
        s = G.ammo[a.id];
      ((G.cooldown = Math.max(0, G.cooldown - t)),
        (G.heat = Math.max(0, G.heat - t * 0.75)),
        G.replay || G.vm?.tickAim(t, i),
        (r.weapon = a.id),
        (r.ammo = s.mag));
      let l = !!(i.buttons & c.FIRE),
        u = !!(i.buttons & c.RELOAD);
      ((s.mag <= 0 || (u && !G.prevReload)) && xn(e, r, a, s),
        G.reloadT >= 0 &&
          ((G.reloadT -= t),
          G.vm?.setReload(J(1 - G.reloadT / a.reload, 0.001, 1)),
          G.reloadT <= 0 && Sn(e, r, a, s)));
      let d = a.mode === `AUTO` ? l : l && !G.prevFire;
      (d && G.cooldown <= 0 && G.reloadT < 0 && Cn(e, r, a, s, i),
        d || (r.state &= ~o.FIRING),
        (r.ammo = s.mag),
        (G.prevFire = l),
        (G.prevReload = u),
        e.events.emit(`ui:spread`, {
          spread: J((a.spread + G.heat * 0.018) / 0.025, 0, 1),
        }));
    },
    update(e, t) {
      if (!G) return;
      (G.rounds?.length && Tn(e, t),
        (G.remoteFire ??= nn()),
        G.remoteFire.update(
          e,
          t,
          e.modules.get(`player`)?.getLocalEntity?.()?.id,
        ),
        G.grenades.update(t),
        G.gadgets.update(t),
        G.beacons.update(t),
        G.drops.update(t),
        G.rockets.update(t));
      let n = e.modules.get(`player`),
        r = n?.getLocalEntity?.(),
        i = n?.getInput?.();
      if (G.replay) {
        (G.grenades.present(!1),
          G.knife.cancel(),
          G.vm?.setThrowLower(0),
          G.medic.update(t),
          G.kitAction.update(t, !1, G.vm),
          G.thermal?.lower());
        let n = G.replay,
          r = $.equippedDefinition(n.weaponId, n.entity) ?? F[0];
        if (G.presentedDef !== r) {
          let t = G.replayKey;
          (X(e, r, () =>
            un(G, t, r.id)
              ? ($.equippedDefinition(r.id, G.replay.entity) ?? F[r.id])
              : null,
          ),
            G.vm?.setLoaded(!0));
        }
        let i = { buttons: (n.ads ? c.ADS : 0) | (n.sprint ? c.SPRINT : 0) };
        (G.vm?.setBipod(
          n.ads && !n.reload && n.entity?.state & o.BIPOD ? 1 : 0,
        ),
          G.vm?.setReload(n.reload ?? 0),
          G.vm?.tickAim(t, i, 1),
          G.vm?.setVisible(!0),
          G.vm?.setSlide?.((n.entity?.state & o.SLIDE) !== 0),
          G.vm?.update(t, i, n.speed ?? 0),
          G.vm?.setCameraFov(e.camera.fov, e.renderer.domElement.clientHeight),
          G.scoped &&
            ((G.scoped = !1),
            e.events.emit(`ui:scoped`, { scoped: !1, fov: e.camera.fov })),
          e.events.emit(`ui:launcherRange`, { active: !1 }),
          fn(e, null, t, !1));
        return;
      }
      let a = !1;
      if (r) {
        me(
          +(e.world.match?.mode === `ffa` || r.team === 1),
          G.equipment?.classId(r) ?? `assault`,
          !!e.config.frost,
        );
        let t = r.pos[1] + (n?.eyeHeight?.(r) ?? 1.62),
          i = e.camera.position.x - r.pos[0],
          o = e.camera.position.y - t,
          s = e.camera.position.z - r.pos[2];
        a = i * i + o * o + s * s < 4;
      }
      G.medic.update(t);
      let s = Q() && a;
      if (s && G.presentedDef?.id !== Z)
        (X(e, F[Z], () => (Q() ? F[Z] : null)), G.vm?.setLoaded(!0));
      else if (!s && G.presentedDef?.id === Z && G.selected !== Z) {
        let t = q(G.selected);
        X(e, t, () => (!G.replay && G.selected === t.id ? q(t.id) : null));
        let n = G.ammo[t.id]?.mag;
        n != null && (G.vm?.setLoaded(n > 0), G.vm?.setAmmo?.(n));
      }
      (G.kitAction.update(
        t,
        a && r?.hp > 0 && !(r.state & (o.IN_VEHICLE | o.DEAD)),
        G.vm,
        s ? `defib` : F[G.selected]?.class,
      ),
        G.vm?.setThrowLower(Math.max(G.grenades.lower(), G.knife.lower())),
        G.vm?.setBipod(
          a &&
            r?.hp > 0 &&
            !(r.state & (o.DEAD | o.IN_VEHICLE)) &&
            !s &&
            !G.grenades.lower() &&
            !G.knife.lower()
            ? (G.prediction.state.supportTicks ?? 0) / ke.settleTicks
            : 0,
        ),
        G.vm?.setVisible(a && !G.thermal?.busy() && !(r?.state & o.IN_VEHICLE)),
        G.vm?.setSlide?.((r?.state & o.SLIDE) !== 0),
        G.vm?.update(t, i, r ? Math.hypot(r.vel[0], r.vel[2]) : 0),
        G.range?.update(t, e.world.time.sim));
      let l = G.grenades.present(a && !G.thermal?.busy());
      l && (e.camera.rotateZ(l.roll), e.camera.rotateX(l.pitch));
      let u = G.knife.present(
        t,
        a &&
          r?.hp > 0 &&
          !(r.state & (o.DEAD | o.IN_VEHICLE)) &&
          !G.thermal?.busy(),
      );
      if (
        (u &&
          (e.camera.rotateZ(u.roll),
          e.camera.rotateX(u.pitch),
          e.camera.translateZ(-u.push)),
        fn(e, r, t, a),
        (G.rangeTimer = (G.rangeTimer ?? 0) - t),
        G.rangeTimer <= 0)
      ) {
        G.rangeTimer = 0.1;
        let t = F[G.selected];
        e.events.emit(
          `ui:launcherRange`,
          a && r?.hp > 0 && t.class === `launcher`
            ? Et(e.world, r, t)
            : { active: !1 },
        );
      }
      let d = G.vm?.optic,
        f = e.camera,
        p = G.vm?.opticFov ?? 55;
      if (a && d && p !== 55) {
        let e = 1 + (p / 55 - 1) * G.vm.ads;
        Math.abs(e - 1) > 0.001 && ((f.fov *= e), f.updateProjectionMatrix());
      }
      if (
        (G.vm?.setCameraFov(f.fov, e.renderer.domElement.clientHeight),
        n?.setAimSensitivityScale)
      ) {
        let e = a ? Math.min(1, f.fov / 55) : 1;
        n.setAimSensitivityScale(e >= 0.995 ? 1 : e);
      }
      let m = !!(a && d?.type === `scope` && G.vm.ads >= 1);
      m !== G.scoped &&
        ((G.scoped = m), e.events.emit(`ui:scoped`, { scoped: m, fov: f.fov }));
      let h = e.modules.get(`environment`),
        g = p > 0 ? 55 / p : 0,
        _ = a && d?.type === `scope` && g >= 6 ? G.vm.ads * 0.2 : 0;
      (h?.setFogSightMultiplier?.(1 - _),
        G.thermal?.setScope(m && !!d?.thermal),
        G.thermal?.update(t));
    },
    async showcase(e) {
      G.range = pt(e);
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
      G &&=
        (G.thermal?.dispose(),
        G.gadgets?.dispose(),
        G.beacons?.dispose(),
        G.drops?.dispose(),
        G.medic?.dispose(),
        G.kitAction?.dispose(),
        G.redeploy?.dispose(),
        G.repair?.dispose(),
        G.equipment?.dispose(),
        G.steadyHud?.dispose(),
        e.modules.get(`player`)?.setBreathCapture?.(null),
        G.offs?.forEach((e) => e()),
        e.events.emit(`ui:launcherRange`, { active: !1 }),
        e.events.emit(`ui:javelinLock`, { active: !1 }),
        G.keyOff?.(),
        e.modules.get(`player`)?.setSlotCount?.(4),
        e.modules.get(`player`)?.setAimSensitivityScale?.(1),
        G.rockets?.dispose(),
        G.grenades?.dispose(),
        G.knife?.dispose(),
        G.range?.dispose(),
        G.vm?.dispose(),
        null);
    },
  };
