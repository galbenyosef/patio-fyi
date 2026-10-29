// assets__animation-Bs1XLGoh 16 — weapon
// Lines 4523-5152 of readable/assets__animation-Bs1XLGoh.pretty.js (statement-aligned).
var vo = {
  name: `animation`,
  deps: [`player`, `environment`],
  api: {
    setPov(e) {
      $.povId = e ?? -1;
    },
    setLocalReplayState(e) {
      $.localReplayState = e == null ? null : e | 0;
    },
    attachSoldier(e) {
      return $.rig && e ? co($.ctx, e) : null;
    },
    detachSoldier(e) {
      $.rig && lo(e);
    },
    pose(e, t, n) {
      let r = co($.ctx, e);
      return r
        ? (t && Object.assign(r.anim, t),
          n > 0 && ho(r, e, e.pos, n, $.ctx.world.time.tick),
          dt(r.anim, r.pose))
        : null;
    },
    actorCount() {
      return $.actors.size;
    },
    setFirstPerson(e) {
      $.fpsOverride = e;
    },
    getActor(e) {
      return $.actors.get(e) ?? null;
    },
    muzzleWorld(e, t) {
      let n = $.actors.get(e),
        r = $.ctx?.world.get(e);
      if (!n?.posedAlive || !r || !$.remoteWeapons?.supports(r.weapon))
        return null;
      n.sk.weapon.updateWorldMatrix(!0, !1);
      let i =
        $.ctx.modules.get(`weapons`)?.equippedDefinition?.(r.weapon, r) ??
        Vt(r.weapon, null);
      return $.remoteWeapons.muzzle(i, n.sk.weapon.matrixWorld, t);
    },
    ejectWorld(e, t) {
      let n = $.actors.get(e),
        r = $.ctx?.world.get(e);
      if (!n?.posedAlive || !r || !$.remoteWeapons?.supports(r.weapon))
        return null;
      n.sk.weapon.updateWorldMatrix(!0, !1);
      let i =
        $.ctx.modules.get(`weapons`)?.equippedDefinition?.(r.weapon, r) ??
        Vt(r.weapon, null);
      return $.remoteWeapons.port(i, n.sk.weapon.matrixWorld, t);
    },
    prepareRender(e, t) {
      let n = $.ctx?.modules.get(`demo`)?.getDefinition?.();
      $.rig?.prepareRender?.(
        e,
        t && n?.dynamicShadows !== !1,
        n?.soldierShadowRange ?? 0,
      );
    },
    drawCalls() {
      return $.rig ? Object.keys($.rig.pools).length : 0;
    },
  },
  async init(e, t = {}) {
    (($.ctx = e),
      ($.rig = await Mi(e.scene, to, !!e.config.frost, {
        yieldTask: se,
        uniform: ce(e.config)?.uniform ?? null,
        ...t,
      })),
      await se(),
      ($.remoteWeapons = In(e.scene, an(e.assets), to)),
      ($.looseMags = Ra($.remoteWeapons)),
      ($.props = Ta(e.scene)),
      ($.glint = Xa(
        e.scene,
        e.modules.get(`environment`),
        (t, n, r) =>
          kn(
            e.world,
            [t.x, t.y, t.z],
            [t.x + n.x * r, t.y + n.y * r, t.z + n.z * r],
          ) ||
          (r > 1 &&
            e.world.map.isOccluded(
              [t.x + n.x * 0.6, t.y + n.y * 0.6, t.z + n.z * 0.6],
              [n.x, n.y, n.z],
              r - 0.6,
              0.3,
              !0,
            )),
      )),
      ($.burst = Xn(e.scene, () => e.world.map)),
      ($.chutes = qr(e.scene, to)),
      e.events.on(`world:despawn`, ({ id: e }) => {
        ($.burst?.release(e), lo(e), $.noRevive.delete(e));
      }),
      e.events.on(`player:death`, (e) => {
        e?.dir && Ut(Ht[e.weapon]) && $.burst?.push(e.victimId, e.dir);
      }),
      e.events.on(`medic:revive`, (e) => {
        e?.entityId != null && $.burst?.revive(e.playerId, e.entityId, e.pos);
      }),
      ($.defib = hr(e.scene)),
      e.events.on(`medic:pads`, (t) => {
        let n = e.world.get(t?.entityId);
        if (n?.type !== `soldier`) return;
        let r = co(e, n);
        (r && (r.anim.padsT = 0),
          t.kind === `revive` &&
            t.targetId != null &&
            $.burst?.charge(t.targetId, n.pos));
      }),
      e.events.on(`medic:norevive`, (e) => {
        e?.entityId != null && $.noRevive.add(e.entityId);
      }),
      e.events.on(`medic:shock`, (t) => {
        t?.targetId != null &&
          $.burst?.shock(t.targetId, e.world.get(t.medicId)?.pos ?? null);
      }),
      e.events.on(`player:spawn`, (e) => {
        e?.anchorId === `revive` &&
          e.entityId != null &&
          $.burst?.revive(e.playerId, e.entityId, e.pos);
      }),
      e.events.on(`grenade:windup`, (t) => {
        let n = e.world.get(t?.entityId);
        if (
          n?.type === `soldier` &&
          n.owner === t.owner &&
          n.hp > 0 &&
          !(n.state & (u.DEAD | u.IN_VEHICLE))
        ) {
          let t = co(e, n);
          t && ((t.anim.throwT = 0), (t.anim.throwHold = !0));
        }
      }),
      e.events.on(`explosion`, (t) => {
        if (t?.pos)
          for (let n of e.world.byType?.(`soldier`) ?? []) {
            if (n.hp <= 0 || n.state & (u.DEAD | u.IN_VEHICLE)) continue;
            let e = $.actors.get(n.id);
            e && Ye(e.anim, n.pos, n.yaw, t);
          }
      }),
      e.events.on(`melee:swing`, (t) => {
        let n = e.world.get(t?.entityId);
        if (
          n?.type === `soldier` &&
          n.hp > 0 &&
          !(n.state & (u.DEAD | u.IN_VEHICLE))
        ) {
          let t = co(e, n);
          t && (t.anim.knifeT = 0);
        }
      }));
    let n = (t, n) => {
        if (
          t?.type !== `soldier` ||
          t.hp <= 0 ||
          t.state & (u.DEAD | u.IN_VEHICLE)
        )
          return;
        let r = co(e, t);
        (r && ((r.anim.gesture = n), (r.anim.gestureT = 0)),
          t.id === e.modules.get(`player`)?.getLocalEntity?.()?.id &&
            e.modules.get(`weapons`)?.gesture?.(n));
      },
      r = (t) => e.world.get(e.world.players.get(t)?.entityId);
    (e.events.on(`spot:target`, (e) => {
      e?.carried || n(r(e?.spotterId), `spot`);
    }),
      e.events.on(`squad:callout`, (t) => {
        if (
          !/^squad_(attack|defend|hold|regroup)(_[A-Z])?$/.test(
            t?.line ?? ``,
          ) ||
          !/^Squad, /.test(t?.text ?? ``)
        )
          return;
        let i = e.modules.get(`player`)?.getLocalEntity?.(),
          a = i && On(e.world, i.owner);
        a && n(r(a.leaderId), `order`);
      }),
      e.events.on(`grenade:release`, (e) => {
        let t = $.actors.get(e?.entityId);
        t?.anim.throwT >= 0 &&
          ((t.anim.throwHold = !1),
          (t.anim.throwT = Math.max(t.anim.throwT, lt)));
      }),
      e.log(
        `rig ready:`,
        Object.keys($.rig.pools).length,
        `instanced parts, max`,
        to,
        `soldiers`,
      ));
  },
  tick(e, t) {
    if (!$.rig) return;
    $.showcase && (($.clock += t), $.showcase.tick(t, $.clock));
    let n = e.world.time.tick;
    for (let r of e.world.sorted()) {
      if (r.type !== `soldier`) continue;
      let i = co(e, r);
      if (!i) continue;
      ((i.prev[0] = i.cur[0]),
        (i.prev[1] = i.cur[1]),
        (i.prev[2] = i.cur[2]),
        (i.cur[0] = r.pos[0]),
        (i.cur[1] = r.pos[1]),
        (i.cur[2] = r.pos[2]));
      let a = go(r);
      (ho(i, a, i.cur, t, n), a.state & u.DEAD || (i.yaw = r.yaw));
    }
  },
  update(e, t, n) {
    if (!$.rig) return;
    let r = e.world,
      i = e.modules.get(`player`),
      a = i?.getLocalEntity?.();
    $.localId = a ? a.id : -1;
    let o = _o(),
      s = ++$.frame,
      c = ro(n, 0, 1);
    ($.camPos.copy(e.camera.position),
      e.camera.updateMatrixWorld(),
      $.frustum.setFromProjectionMatrix(
        $.viewProj.multiplyMatrices(
          e.camera.projectionMatrix,
          e.camera.matrixWorldInverse,
        ),
      ));
    let l = [0, 0, 0];
    ($.remoteWeapons.begin(),
      $.glint.begin(t),
      $.props.begin(),
      $.chutes.begin(t));
    let d = (n, r, i) => {
      r.dropMag &&
        ((r.dropMag = !1),
        !i &&
          $.remoteWeapons.supports(n.weapon) &&
          $.looseMags.drop(
            e.modules.get(`weapons`)?.equippedDefinition?.(n.weapon, n) ??
              Vt(n.weapon, null),
            r.sk.weapon.matrixWorld,
          ));
      let a =
        n.state & u.BIPOD && !(n.state & (u.DEAD | u.RELOADING | u.IN_VEHICLE))
          ? 1
          : 0;
      ((r.bipod = Math.max(
        (r.bipod ?? 0) - t * 6,
        Math.min((r.bipod ?? 0) + t / 0.35, a),
      )),
        !i &&
          r.glintDef &&
          $.glint.consider(
            n,
            r.glintDef,
            $.camPos,
            $.remoteWeapons.objective(
              r.glintDef,
              r.sk.weapon.matrixWorld,
              $.lensPos,
            ) ??
              $.lensPos
                .set(0, 0.065, -0.4)
                .applyMatrix4(r.sk.weapon.matrixWorld),
          ),
        !i &&
          $.remoteWeapons.supports(n.weapon) &&
          $.frustum.intersectsSphere(
            $.gunSphere.set(
              $.gunSphere.center.setFromMatrixPosition(r.sk.weapon.matrixWorld),
              1.6,
            ),
          ) &&
          $.remoteWeapons.present(
            e.modules.get(`weapons`)?.equippedDefinition?.(n.weapon, n) ??
              Vt(n.weapon, null),
            r.sk.weapon.matrixWorld,
            n.ammo > 0 && !(n.state & u.RELOADING),
            n.state & u.RELOADING && !(n.state & u.DEAD)
              ? r.anim.reloadProgress
              : null,
            r.bipod,
            r.anim.bolt,
          ));
    };
    for (let n of r.sorted()) {
      if (n.type !== `soldier`) continue;
      let f = co(e, n);
      if (!f) continue;
      let p = go(n);
      ((f.seen = s),
        f.owner !== p.owner &&
          ((f.owner = p.owner), $.rig.setIdentity(f.slot, p.owner)));
      let m = p.id === $.localId;
      ((f.predicted = m || ($.showcase?.isScripted(p.id) ?? !1)),
        m &&
          !$.playerBodyHidden &&
          i?.setBodyVisible &&
          (i.setBodyVisible(!1), ($.playerBodyHidden = !0)));
      let h = r.match?.mode === `ffa` ? 9 : p.team;
      (h !== f.team &&
        ((f.team = h),
        $.rig.setFaction(f.slot, h === 9 ? 1 : h),
        $.rig.setColor(f.slot, h === 9 ? $.color.set(`#6f7479`) : ao(e, h))),
        $.rig.setFriendly?.(
          f.slot,
          m || (h !== 9 && a != null && p.team === a.team),
        ));
      let g = p.state | 0;
      ((f.glintDef =
        !m &&
        g & u.ADS &&
        !(g & (u.DEAD | u.IN_VEHICLE)) &&
        (h === 9 || (a != null && p.team !== a.team))
          ? (e.modules.get(`weapons`)?.equippedDefinition?.(p.weapon, p) ??
            Vt(p.weapon, null))
          : null),
        $.rig.setHeat(
          f.slot,
          g & (u.DEAD | u.IN_VEHICLE) ? 0 : p.stance === 2 ? 0.7 : 1,
        ));
      let _ = g & u.IN_VEHICLE ? r.get(p.seat) : null;
      if (
        (g & u.DEAD && !_
          ? (!$.burst.lying(p.id) &&
              !$.burst.rebuilding(p.id) &&
              $.burst.burst(
                p.id,
                p.owner,
                f.sk,
                p.pos,
                p.vel,
                $.rig.colorsOf(f.slot),
                f.posedAlive,
              ),
            $.burst.setHidden(p.id, !1))
          : $.burst.has(p.id) &&
            ($.localReplayState == null
              ? $.burst.release(p.id)
              : $.burst.setHidden(p.id, !0)),
        g & u.CHUTE && !(g & (u.DEAD | u.IN_VEHICLE)))
      ) {
        let e = f.predicted
          ? [
              f.prev[0] + (f.cur[0] - f.prev[0]) * c,
              f.prev[1] + (f.cur[1] - f.prev[1]) * c,
              f.prev[2] + (f.cur[2] - f.prev[2]) * c,
            ]
          : p.pos;
        $.chutes.add(p.id, e, f.yaw, t, m && o);
      }
      let v = g & u.DEAD && !_ ? $.burst.has(p.id) : $.burst.rebuilding(p.id);
      if (
        (v && $.rig.hide(f.slot),
        (_ && (_.weapon === 1 || _.weapon === 2)) ||
          (m && o && (g & u.DEAD || _?.weapon >= 3 || !_)) ||
          (p.id === $.povId && !_))
      ) {
        $.rig.hide(f.slot);
        continue;
      }
      if (_) ((l[0] = p.pos[0]), (l[1] = p.pos[1]), (l[2] = p.pos[2]));
      else if (f.predicted) {
        ((l[0] = f.prev[0] + (f.cur[0] - f.prev[0]) * c),
          (l[1] = f.prev[1] + (f.cur[1] - f.prev[1]) * c),
          (l[2] = f.prev[2] + (f.cur[2] - f.prev[2]) * c));
        let e = l[0] - p.pos[0],
          t = l[1] - p.pos[1],
          n = l[2] - p.pos[2];
        e * e + t * t + n * n > 4 &&
          ((l[0] = f.prev[0] = f.cur[0] = p.pos[0]),
          (l[1] = f.prev[1] = f.cur[1] = p.pos[1]),
          (l[2] = f.prev[2] = f.cur[2] = p.pos[2]));
      } else ((l[0] = p.pos[0]), (l[1] = p.pos[1]), (l[2] = p.pos[2]));
      let y = $.camPos.distanceToSquared(f.sk.root.position),
        b =
          y > 900 &&
          !$.frustum.intersectsSphere(
            $.gunSphere.set($.gunSphere.center.copy(f.sk.root.position), 2.5),
          )
            ? 8
            : y > 62500
              ? 4
              : y > 14400
                ? 2
                : 1;
      if (
        b > 1 &&
        !($.remoteWeapons.supports(p.weapon) && g & u.RELOADING) &&
        !(f.anim.knifeT >= 0) &&
        (s + f.slot) % b !== 0
      ) {
        (d(p, f, _ || (m && o) || f.anim.padsT >= 0 || f.anim.defibOut),
          (f.defibKeep = !0));
        continue;
      }
      (_
        ? _t(f.pose, _.owner === p.owner, p.pitch, Rt[_.weapon]?.air ? Za : 0)
        : dt(f.anim, f.pose),
        f.sk.root.position.set(l[0], l[1], l[2]),
        f.sk.root.rotation.set(0, _ ? Lt(_, zt(_, p.pos)) : f.yaw, 0));
      let x =
        _ && Rt[_.weapon]?.air
          ? e.modules.get(`vehicles`)?.getHullAttitude?.(_.id)
          : null;
      if (x) {
        let e = Math.cos(_.yaw),
          t = Math.sin(_.yaw),
          n = l[0] - _.pos[0],
          r = l[2] - _.pos[2];
        ($a.setFromEuler(Qa.set(x.pitch, _.yaw, -x.roll, `YXZ`)),
          eo
            .set(e * n - t * r, l[1] - _.pos[1], t * n + e * r)
            .applyQuaternion($a),
          f.sk.root.position.set(
            _.pos[0] + eo.x,
            _.pos[1] + eo.y,
            _.pos[2] + eo.z,
          ),
          f.sk.root.rotation.set(
            x.pitch,
            f.sk.root.rotation.y,
            -x.roll,
            `YXZ`,
          ));
      }
      (!_ && !p.ext?.pl && Ft(p, r, t),
        f.sk.root.scale.setScalar(_ ? 1 : At(p).scale));
      let S = !_ && (p.stance === 2 || g & u.DEAD) ? 1 : 0;
      if (
        ((f.lie = (f.lie ?? S) + (S - (f.lie ?? S)) * Math.min(1, t * 8)),
        f.lie > 0.01)
      ) {
        let e = r.map,
          t = f.yaw,
          n = (f.lieFit ??= {
            x: NaN,
            y: 0,
            z: 0,
            yaw: 0,
            pitch: 0,
            roll: 0,
            lift: 0,
          });
        if (
          Math.abs(n.x - l[0]) + Math.abs(n.z - l[2]) + Math.abs(n.y - l[1]) >
            0.08 ||
          Math.abs(n.yaw - t) > 0.05
        ) {
          ((n.x = l[0]),
            (n.y = l[1]),
            (n.z = l[2]),
            (n.yaw = t),
            (n.pitch = n.roll = n.lift = 0));
          let r = -Math.sin(t),
            i = -Math.cos(t),
            a = Math.cos(t),
            o = -Math.sin(t),
            s = (t, n) => {
              let r = e?.raycast?.([t, l[1] + 0.35, n], [0, -1, 0], 0.95);
              return r?.point ? Math.max(l[1] - 0.6, r.point[1]) : l[1] - 0.6;
            },
            c = s(l[0], l[2]);
          if (Math.abs(c - l[1]) < 0.2) {
            let e = s(l[0] + r * 0.9, l[2] + i * 0.9),
              t = s(l[0] - r * 0.9, l[2] - i * 0.9),
              u = s(l[0] + a * 0.35, l[2] + o * 0.35),
              d = s(l[0] - a * 0.35, l[2] - o * 0.35),
              f = (e) => Math.max(-0.7, Math.min(0.7, e));
            ((n.pitch = f(Math.atan2(e - t, 1.8))),
              (n.roll = f(Math.atan2(u - d, 0.7))),
              (n.lift = Math.max(0, (e + t) / 2 - c)));
          }
        }
        (f.sk.root.rotation.set(n.pitch * f.lie, t, n.roll * f.lie, `YXZ`),
          (f.sk.root.position.y = l[1] + n.lift * f.lie));
      }
      let C = !_ && !(g & u.DEAD) ? It(f.anim.knifeT, (f.kn ??= {})) : null;
      if (
        (f.sk.weapon.scale.setScalar(Oe(p.weapon)),
        Bi(
          f.sk,
          f.pose,
          $.rig,
          f.slot,
          m && o && !_ ? `upper` : `none`,
          _ || $.remoteWeapons.supports(p.weapon)
            ? -1
            : f.anim.defibOut
              ? 31
              : p.weapon,
          oo(
            C,
            !_ &&
              !(g & u.DEAD) &&
              !(f.anim.throwT >= 0) &&
              !(f.anim.padsT >= 0 || f.anim.defibOut) &&
              $.remoteWeapons.supports(p.weapon)
              ? (t) => {
                  let n = g & u.RELOADING ? f.anim.reloadProgress : 0;
                  p.weapon === 8
                    ? vn(t, n)
                    : $.remoteWeapons.poseRifle(
                        t,
                        e.modules
                          .get(`weapons`)
                          ?.equippedDefinition?.(p.weapon, p) ??
                          Vt(p.weapon, null),
                        n,
                        Ca,
                      );
                }
              : null,
          ),
          e.modules.get(`weapons`)?.equippedClass?.(p) ??
            p.ext?.loadout?.classId ??
            e.world.players.get(p.owner)?.loadout?.classId ??
            `assault`,
          _ ? null : f.anim,
        ),
        g & u.DEAD || (f.posedAlive = !0),
        !(v && ($.rig.hide(f.slot), !(g & u.DEAD))))
      ) {
        if (
          (d(p, f, _ || (m && o) || f.anim.padsT >= 0 || f.anim.defibOut),
          !_ && !(m && o) && (f.anim.defibOut || f.anim.padsT >= 0) && y < 1600)
        ) {
          let e =
            Ct(f.anim.padsT, f.anim.pitch, $.pd) ?? Ot(f.anim.breathe, $.pd);
          ($.defib.draw(f.id, f.sk, e, l[1]), (f.defibDrawn = !0));
        }
        (C?.knife && !(m && o) && $.props.knife(f.sk),
          !(m && o) &&
            !_ &&
            pt(f.anim.throwT, (f.th ??= {}))?.grenade &&
            $.props.grenade(f.sk));
      }
    }
    for (let e of $.actors.values()) e.seen !== s && lo(e.id);
    for (let e of $.actors.values())
      (!e.defibDrawn && !e.defibKeep && $.defib.hide(e.id),
        (e.defibDrawn = e.defibKeep = !1));
    ($.burst.update(t, (e) => {
      let t = $.actors.get(e),
        n = r.get(e);
      return t?.posedAlive && n && !(n.state & u.DEAD) ? t.sk : null;
    }),
      $.rig.flush(),
      $.looseMags.step(t, (t, n) => e.world.map.getHeight(t, n)),
      $.looseMags.present(),
      $.remoteWeapons.flush(),
      $.glint.end(
        e.camera,
        e.renderer?.domElement?.clientHeight || innerHeight,
      ),
      $.props.flush(),
      $.chutes.flush());
  },
  async showcase(e, t) {
    let n = e.scene,
      r = new Set(n.children);
    e.debugGround(700);
    for (let e of Array.from(n.children))
      !r.has(e) &&
        e.type === `GridHelper` &&
        (n.remove(e), e.geometry?.dispose?.(), e.material?.dispose?.());
    ((e.renderer.shadowMap.type = e.three.PCFShadowMap),
      ($.showcase = An(e, e.rng.fork(`animation-showcase`))),
      e.setCameraFocus(null),
      e.registerCameraPreset(`lineup`, (e) => {
        (e.position.set(1.5, 1.7, 5.5),
          e.lookAt(0, 1, -3),
          (e.fov = 55),
          e.updateProjectionMatrix());
      }),
      e.registerCameraPreset(`track`, (e) => {
        (e.position.set(-18, 3.2, -8),
          e.lookAt(0, 1, -20),
          (e.fov = 55),
          e.updateProjectionMatrix());
      }),
      e.log(
        `showcase:`,
        $.showcase.count,
        `scripted soldiers + the local soldier;`,
        `presets lineup/track added`,
      ),
      e.events.emit(`ui:message`, {
        kind: `hint`,
        text: `Animation parade. Click to take control of the front soldier. WASD/Shift/Space/Ctrl/Z/Q/E.`,
        ttl: 8,
      }));
  },
  dispose(e) {
    $.showcase &&= ($.showcase.dispose(), null);
    for (let e of Array.from($.actors.keys())) lo(e);
    (($.playerBodyHidden &&=
      (e.modules.get(`player`)?.setBodyVisible?.(!0), !1)),
      ($.rig &&= ($.rig.dispose(), null)),
      $.remoteWeapons?.dispose(),
      ($.remoteWeapons = null),
      $.glint?.dispose(),
      ($.glint = null),
      $.props?.dispose(),
      ($.props = null),
      $.burst?.dispose(),
      ($.burst = null),
      $.defib?.dispose(),
      ($.defib = null),
      $.chutes?.dispose(),
      ($.chutes = null),
      ($.top = 0),
      ($.free.length = 0),
      ($.ctx = null),
      ($.localId = -1),
      ($.fpsOverride = null),
      ($.povId = -1),
      ($.localReplayState = null));
  },
};
