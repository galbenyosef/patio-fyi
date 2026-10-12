// assets__animation-DTvaGqA- 13 — pos
// Lines 3073-3595 of readable/assets__animation-DTvaGqA-.pretty.js (statement-aligned).
var ci = {
  name: `animation`,
  deps: [`player`, `environment`],
  api: {
    setPov(e) {
      Q.povId = e ?? -1;
    },
    setLocalReplayState(e) {
      Q.localReplayState = e == null ? null : e | 0;
    },
    attachSoldier(e) {
      return Q.rig && e ? $(Q.ctx, e) : null;
    },
    detachSoldier(e) {
      Q.rig && ii(e);
    },
    pose(e, t, n) {
      let r = $(Q.ctx, e);
      return r
        ? (t && Object.assign(r.anim, t),
          n > 0 && ai(r, e, e.pos, n, Q.ctx.world.time.tick),
          st(r.anim, r.pose))
        : null;
    },
    actorCount() {
      return Q.actors.size;
    },
    setFirstPerson(e) {
      Q.fpsOverride = e;
    },
    getActor(e) {
      return Q.actors.get(e) ?? null;
    },
    prepareRender(e, t) {
      Q.rig?.prepareRender?.(e, t);
    },
    drawCalls() {
      return Q.rig ? Object.keys(Q.rig.pools).length : 0;
    },
  },
  async init(e, t = {}) {
    ((Q.ctx = e),
      (Q.rig = await gr(e.scene, Zr, !!e.config.frost, {
        yieldTask: A,
        uniform: j(e.config)?.uniform ?? null,
        ...t,
      })),
      await A(),
      (Q.remoteWeapons = fn(e.scene, It(e.assets), Zr)),
      (Q.knives = ni(e.scene)),
      (Q.glint = Kr(
        e.scene,
        e.modules.get(`environment`),
        (t, n, r) =>
          r > 1 &&
          e.world.map.isOccluded(
            [t.x + n.x * 0.6, t.y + n.y * 0.6, t.z + n.z * 0.6],
            [n.x, n.y, n.z],
            r - 0.6,
            0.3,
            !0,
          ),
      )),
      (Q.burst = En(e.scene, () => e.world.map)),
      (Q.chutes = Pn(e.scene, Zr)),
      e.events.on(`world:despawn`, ({ id: e }) => {
        (Q.burst?.release(e), ii(e));
      }),
      e.events.on(`player:death`, (e) => {
        e?.dir && Ot(kt[e.weapon]) && Q.burst?.push(e.victimId, e.dir);
      }),
      e.events.on(`medic:revive`, (e) => {
        e?.entityId != null && Q.burst?.revive(e.playerId, e.entityId, e.pos);
      }),
      e.events.on(`player:spawn`, (e) => {
        e?.anchorId === `revive` &&
          e.entityId != null &&
          Q.burst?.revive(e.playerId, e.entityId, e.pos);
      }),
      e.events.on(`grenade:windup`, (t) => {
        let n = e.world.get(t?.entityId);
        if (
          n?.type === `soldier` &&
          n.owner === t.owner &&
          n.hp > 0 &&
          !(n.state & (o.DEAD | o.IN_VEHICLE))
        ) {
          let t = $(e, n);
          t && ((t.anim.throwT = 0), (t.anim.throwHold = !0));
        }
      }),
      e.events.on(`melee:swing`, (t) => {
        let n = e.world.get(t?.entityId);
        if (
          n?.type === `soldier` &&
          n.hp > 0 &&
          !(n.state & (o.DEAD | o.IN_VEHICLE))
        ) {
          let t = $(e, n);
          t && (t.anim.knifeT = 0);
        }
      }));
    let n = (t, n) => {
        if (
          t?.type !== `soldier` ||
          t.hp <= 0 ||
          t.state & (o.DEAD | o.IN_VEHICLE)
        )
          return;
        let r = $(e, t);
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
          a = i && sn(e.world, i.owner);
        a && n(r(a.leaderId), `order`);
      }),
      e.events.on(`grenade:release`, (e) => {
        let t = Q.actors.get(e?.entityId);
        t?.anim.throwT >= 0 &&
          ((t.anim.throwHold = !1),
          (t.anim.throwT = Math.max(t.anim.throwT, Ne)));
      }),
      e.log(
        `rig ready:`,
        Object.keys(Q.rig.pools).length,
        `instanced parts, max`,
        Zr,
        `soldiers`,
      ));
  },
  tick(e, t) {
    if (!Q.rig) return;
    Q.showcase && ((Q.clock += t), Q.showcase.tick(t, Q.clock));
    let n = e.world.time.tick;
    for (let r of e.world.sorted()) {
      if (r.type !== `soldier`) continue;
      let i = $(e, r);
      if (!i) continue;
      ((i.prev[0] = i.cur[0]),
        (i.prev[1] = i.cur[1]),
        (i.prev[2] = i.cur[2]),
        (i.cur[0] = r.pos[0]),
        (i.cur[1] = r.pos[1]),
        (i.cur[2] = r.pos[2]));
      let a = oi(r);
      (ai(i, a, i.cur, t, n), a.state & o.DEAD || (i.yaw = r.yaw));
    }
  },
  update(e, t, n) {
    if (!Q.rig) return;
    let r = e.world,
      i = e.modules.get(`player`),
      a = i?.getLocalEntity?.();
    Q.localId = a ? a.id : -1;
    let s = si(),
      c = ++Q.frame,
      l = Z(n, 0, 1);
    (Q.camPos.copy(e.camera.position),
      e.camera.updateMatrixWorld(),
      Q.frustum.setFromProjectionMatrix(
        Q.viewProj.multiplyMatrices(
          e.camera.projectionMatrix,
          e.camera.matrixWorldInverse,
        ),
      ));
    let u = [0, 0, 0];
    (Q.remoteWeapons.begin(),
      Q.glint.begin(t),
      Q.knives.begin(),
      Q.chutes.begin(t));
    let d = (t, n, r) => {
      (!r &&
        n.glintDef &&
        Q.glint.consider(
          t,
          n.glintDef,
          Q.camPos,
          Q.remoteWeapons.objective(
            n.glintDef,
            n.sk.weapon.matrixWorld,
            Q.lensPos,
          ) ??
            Q.lensPos.set(0, 0.065, -0.4).applyMatrix4(n.sk.weapon.matrixWorld),
        ),
        !r &&
          Q.remoteWeapons.supports(t.weapon) &&
          Q.frustum.intersectsSphere(
            Q.gunSphere.set(
              Q.gunSphere.center.setFromMatrixPosition(n.sk.weapon.matrixWorld),
              1.6,
            ),
          ) &&
          Q.remoteWeapons.present(
            e.modules.get(`weapons`)?.equippedDefinition?.(t.weapon, t) ??
              Mt(t.weapon, null),
            n.sk.weapon.matrixWorld,
            t.ammo > 0 && !(t.state & o.RELOADING),
            t.state & o.RELOADING && !(t.state & o.DEAD)
              ? n.anim.reloadProgress
              : null,
          ));
    };
    for (let n of r.sorted()) {
      if (n.type !== `soldier`) continue;
      let f = $(e, n);
      if (!f) continue;
      let p = oi(n);
      ((f.seen = c),
        f.owner !== p.owner &&
          ((f.owner = p.owner), Q.rig.setIdentity(f.slot, p.owner)));
      let m = p.id === Q.localId;
      ((f.predicted = m || (Q.showcase?.isScripted(p.id) ?? !1)),
        m &&
          !Q.playerBodyHidden &&
          i?.setBodyVisible &&
          (i.setBodyVisible(!1), (Q.playerBodyHidden = !0)));
      let h = r.match?.mode === `ffa` ? 9 : p.team;
      (h !== f.team &&
        ((f.team = h),
        Q.rig.setFaction(f.slot, h === 9 ? 1 : h),
        Q.rig.setColor(f.slot, h === 9 ? Q.color.set(`#6f7479`) : ei(e, h))),
        Q.rig.setFriendly?.(
          f.slot,
          m || (h !== 9 && a != null && p.team === a.team),
        ));
      let g = p.state | 0;
      ((f.glintDef =
        !m &&
        g & o.ADS &&
        !(g & (o.DEAD | o.IN_VEHICLE)) &&
        (h === 9 || (a != null && p.team !== a.team))
          ? (e.modules.get(`weapons`)?.equippedDefinition?.(p.weapon, p) ??
            Mt(p.weapon, null))
          : null),
        Q.rig.setHeat(
          f.slot,
          g & (o.DEAD | o.IN_VEHICLE) ? 0 : p.stance === 2 ? 0.7 : 1,
        ));
      let _ = g & o.IN_VEHICLE ? r.get(p.seat) : null;
      if (
        (g & o.DEAD && !_
          ? (!Q.burst.lying(p.id) &&
              !Q.burst.rebuilding(p.id) &&
              Q.burst.burst(
                p.id,
                p.owner,
                f.sk,
                p.pos,
                p.vel,
                Q.rig.colorsOf(f.slot),
                f.posedAlive,
              ),
            Q.burst.setHidden(p.id, !1))
          : Q.burst.has(p.id) &&
            (Q.localReplayState == null
              ? Q.burst.release(p.id)
              : Q.burst.setHidden(p.id, !0)),
        g & o.CHUTE && !(g & (o.DEAD | o.IN_VEHICLE)))
      ) {
        let e = f.predicted
          ? [
              f.prev[0] + (f.cur[0] - f.prev[0]) * l,
              f.prev[1] + (f.cur[1] - f.prev[1]) * l,
              f.prev[2] + (f.cur[2] - f.prev[2]) * l,
            ]
          : p.pos;
        Q.chutes.add(p.id, e, f.yaw, t);
      }
      let v = g & o.DEAD && !_ ? Q.burst.has(p.id) : Q.burst.rebuilding(p.id);
      if (
        (v && Q.rig.hide(f.slot),
        (_ && (_.weapon === 1 || _.weapon === 2)) ||
          (m && s && (g & o.DEAD || _?.weapon >= 3 || !_)) ||
          (p.id === Q.povId && !_))
      ) {
        Q.rig.hide(f.slot);
        continue;
      }
      if (_) ((u[0] = p.pos[0]), (u[1] = p.pos[1]), (u[2] = p.pos[2]));
      else if (f.predicted) {
        ((u[0] = f.prev[0] + (f.cur[0] - f.prev[0]) * l),
          (u[1] = f.prev[1] + (f.cur[1] - f.prev[1]) * l),
          (u[2] = f.prev[2] + (f.cur[2] - f.prev[2]) * l));
        let e = u[0] - p.pos[0],
          t = u[1] - p.pos[1],
          n = u[2] - p.pos[2];
        e * e + t * t + n * n > 4 &&
          ((u[0] = f.prev[0] = f.cur[0] = p.pos[0]),
          (u[1] = f.prev[1] = f.cur[1] = p.pos[1]),
          (u[2] = f.prev[2] = f.cur[2] = p.pos[2]));
      } else ((u[0] = p.pos[0]), (u[1] = p.pos[1]), (u[2] = p.pos[2]));
      let y = Q.camPos.distanceToSquared(f.sk.root.position),
        b =
          y > 900 &&
          !Q.frustum.intersectsSphere(
            Q.gunSphere.set(Q.gunSphere.center.copy(f.sk.root.position), 2.5),
          )
            ? 8
            : y > 62500
              ? 4
              : y > 14400
                ? 2
                : 1;
      if (
        b > 1 &&
        !(Q.remoteWeapons.supports(p.weapon) && g & o.RELOADING) &&
        !(f.anim.knifeT >= 0) &&
        (c + f.slot) % b !== 0
      ) {
        d(p, f, _ || (m && s));
        continue;
      }
      (_
        ? Le(f.pose, _.owner === p.owner, p.pitch, Et[_.weapon]?.air ? qr : 0)
        : st(f.anim, f.pose),
        f.sk.root.position.set(u[0], u[1], u[2]),
        f.sk.root.rotation.set(0, _ ? Tt(_, Dt(_, p.pos)) : f.yaw, 0));
      let x =
        _ && Et[_.weapon]?.air
          ? e.modules.get(`vehicles`)?.getHullAttitude?.(_.id)
          : null;
      if (x) {
        let e = Math.cos(_.yaw),
          t = Math.sin(_.yaw),
          n = u[0] - _.pos[0],
          r = u[2] - _.pos[2];
        (Yr.setFromEuler(Jr.set(x.pitch, _.yaw, -x.roll, `YXZ`)),
          Xr.set(e * n - t * r, u[1] - _.pos[1], t * n + e * r).applyQuaternion(
            Yr,
          ),
          f.sk.root.position.set(
            _.pos[0] + Xr.x,
            _.pos[1] + Xr.y,
            _.pos[2] + Xr.z,
          ),
          f.sk.root.rotation.set(
            x.pitch,
            f.sk.root.rotation.y,
            -x.roll,
            `YXZ`,
          ));
      }
      (!_ && !p.ext?.pl && Ct(p, r, t),
        f.sk.root.scale.setScalar(_ ? 1 : vt(p).scale));
      let S = !_ && (p.stance === 2 || g & o.DEAD) ? 1 : 0;
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
          Math.abs(n.x - u[0]) + Math.abs(n.z - u[2]) + Math.abs(n.y - u[1]) >
            0.08 ||
          Math.abs(n.yaw - t) > 0.05
        ) {
          ((n.x = u[0]),
            (n.y = u[1]),
            (n.z = u[2]),
            (n.yaw = t),
            (n.pitch = n.roll = n.lift = 0));
          let r = -Math.sin(t),
            i = -Math.cos(t),
            a = Math.cos(t),
            o = -Math.sin(t),
            s = (t, n) => {
              let r = e?.raycast?.([t, u[1] + 0.35, n], [0, -1, 0], 0.95);
              return r?.point ? Math.max(u[1] - 0.6, r.point[1]) : u[1] - 0.6;
            },
            c = s(u[0], u[2]);
          if (Math.abs(c - u[1]) < 0.2) {
            let e = s(u[0] + r * 0.9, u[2] + i * 0.9),
              t = s(u[0] - r * 0.9, u[2] - i * 0.9),
              l = s(u[0] + a * 0.35, u[2] + o * 0.35),
              d = s(u[0] - a * 0.35, u[2] - o * 0.35),
              f = (e) => Math.max(-0.7, Math.min(0.7, e));
            ((n.pitch = f(Math.atan2(e - t, 1.8))),
              (n.roll = f(Math.atan2(l - d, 0.7))),
              (n.lift = Math.max(0, (e + t) / 2 - c)));
          }
        }
        (f.sk.root.rotation.set(n.pitch * f.lie, t, n.roll * f.lie, `YXZ`),
          (f.sk.root.position.y = u[1] + n.lift * f.lie));
      }
      let C = !_ && !(g & o.DEAD) ? wt(f.anim.knifeT, (f.kn ??= {})) : null;
      (Cr(
        f.sk,
        f.pose,
        Q.rig,
        f.slot,
        m && s && !_ ? `upper` : `none`,
        _ || Q.remoteWeapons.supports(p.weapon) ? -1 : p.weapon,
        ti(
          C,
          !_ &&
            !(g & o.DEAD) &&
            !(f.anim.throwT >= 0) &&
            Q.remoteWeapons.supports(p.weapon)
            ? (t) => {
                let n = g & o.RELOADING ? f.anim.reloadProgress : 0;
                p.weapon === 8
                  ? Kt(t, n)
                  : Q.remoteWeapons.poseRifle(
                      t,
                      e.modules
                        .get(`weapons`)
                        ?.equippedDefinition?.(p.weapon, p) ??
                        Mt(p.weapon, null),
                      n,
                      Pr,
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
        g & o.DEAD || (f.posedAlive = !0),
        !(v && (Q.rig.hide(f.slot), !(g & o.DEAD))) &&
          (d(p, f, _ || (m && s)),
          C?.knife && !(m && s) && Q.knives.put(f.sk)));
    }
    for (let e of Q.actors.values()) e.seen !== c && ii(e.id);
    (Q.burst.update(t, (e) => {
      let t = Q.actors.get(e),
        n = r.get(e);
      return t?.posedAlive && n && !(n.state & o.DEAD) ? t.sk : null;
    }),
      Q.rig.flush(),
      Q.remoteWeapons.flush(),
      Q.glint.end(
        e.camera,
        e.renderer?.domElement?.clientHeight || innerHeight,
      ),
      Q.knives.flush(),
      Q.chutes.flush());
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
      (Q.showcase = cn(e, e.rng.fork(`animation-showcase`))),
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
        Q.showcase.count,
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
    Q.showcase &&= (Q.showcase.dispose(), null);
    for (let e of Array.from(Q.actors.keys())) ii(e);
    ((Q.playerBodyHidden &&=
      (e.modules.get(`player`)?.setBodyVisible?.(!0), !1)),
      (Q.rig &&= (Q.rig.dispose(), null)),
      Q.remoteWeapons?.dispose(),
      (Q.remoteWeapons = null),
      Q.glint?.dispose(),
      (Q.glint = null),
      Q.knives?.dispose(),
      (Q.knives = null),
      Q.burst?.dispose(),
      (Q.burst = null),
      Q.chutes?.dispose(),
      (Q.chutes = null),
      (Q.top = 0),
      (Q.free.length = 0),
      (Q.ctx = null),
      (Q.localId = -1),
      (Q.fpsOverride = null),
      (Q.povId = -1),
      (Q.localReplayState = null));
  },
};
