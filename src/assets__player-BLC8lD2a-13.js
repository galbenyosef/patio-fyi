// assets__player-BLC8lD2a 13 — pos
// Lines 3698-3922 of readable/assets__player-BLC8lD2a.pretty.js (statement-aligned).
var Wt = {
  name: `player`,
  deps: [],
  api: $,
  async init(e) {
    ((Y.ctx = e),
      Ut(),
      Pt(),
      St(e),
      typeof navigator < `u` &&
        navigator.getGamepads &&
        ((Y.gp = ge()), (Y.padNav = nt()), kt(e)),
      e.events.on(`player:local`, (t) => {
        if (!t || t.entityId == null) return;
        (Y.ownEntity &&
          Y.localId >= 0 &&
          Y.localId !== t.entityId &&
          e.world.despawn(Y.localId),
          Y.localId !== t.entityId &&
            ((Y.toggles.crouch = Y.toggles.prone = !1), (Y.slot = 0)),
          (Y.localId = t.entityId),
          (Y.ownEntity = !1));
        let n = e.world.get(t.entityId);
        n &&
          (n.ext.pl || T(n),
          (Y.look.yaw = n.yaw),
          (Y.look.pitch = n.pitch),
          (Y.prevPos[0] = n.pos[0]),
          (Y.prevPos[1] = n.pos[1]),
          (Y.prevPos[2] = n.pos[2]),
          (Y.prevId = n.id));
      }),
      e.events.on(`world:despawn`, ({ id: e }) => {
        e === Y.localId && ((Y.localId = -1), (Y.ownEntity = !1));
      }),
      e.events.on(`player:spawn`, (t) => {
        if (t && t.entityId === Y.localId) {
          ((Y.toggles.crouch = Y.toggles.prone = !1), (Y.slot = 0));
          let t = e.world.get(Y.localId);
          t &&
            ((Y.prevPos[0] = t.pos[0]),
            (Y.prevPos[1] = t.pos[1]),
            (Y.prevPos[2] = t.pos[2]),
            (Y.look.yaw = t.yaw),
            (Y.look.pitch = t.pitch));
        }
      }),
      e.registerCameraPreset(`course`, (e) => {
        let t = Y.course,
          n = t ? t.endZ : -100;
        (e.position.set(26, 17, 12),
          e.lookAt(-2, 0.5, n * 0.42),
          (e.fov = 60),
          e.updateProjectionMatrix());
      }));
  },
  tick(e, t) {
    Y.deployLockUntil &&
      !yt() &&
      ((Y.deployLockUntil = 0),
      Y.locked &&
        (e.modules.get(`ui`)?.isVisible?.(`spawn`) ||
          $.getLocalEntity()?.state & s.DEAD) &&
        $.setPointerLock(!1));
    let n = It(e);
    (Ft(e),
      Ot(e, t),
      e.events.emit(`player:beforeInput`, { entity: n, dt: t }));
    let r = xt(e.world.time.tick);
    n &&
      ((Y.prevId = n.id),
      (Y.prevPos[0] = n.pos[0]),
      (Y.prevPos[1] = n.pos[1]),
      (Y.prevPos[2] = n.pos[2]),
      (Y.prevEyeH = w(n)),
      Y.ownEntity ? D(n, r, e.world, t) : n.ext.pl || T(n),
      k(n)
        ? Y.chuteHinted ||
          ((Y.chuteHinted = !0),
          e.events.emit(`ui:message`, {
            kind: `hint`,
            text: `${fe(`parachute`, `SPACE`)}  Open parachute`,
            ttl: 3,
          }))
        : n.state & (s.GROUNDED | s.SWIMMING | s.CHUTE | s.DEAD) &&
          (Y.chuteHinted = !1));
  },
  update(e, t, n) {
    At(e, t);
    let r = $.getLocalEntity();
    if (
      (Y.sky &&
        Y.sky.update(
          e.camera,
          Y.focus || (r ? [r.pos[0], r.pos[1] + 1, r.pos[2]] : null),
        ),
      !r)
    ) {
      Y.body && (Y.body.group.visible = !1);
      return;
    }
    (Y.body ||
      ((Y.body = Oe(Lt(e, r), !!e.config.frost)), e.scene.add(Y.body.group)),
      (Y.body.group.visible =
        Y.bodyVisible && !(r.state & s.DEAD) && !(r.state & s.IN_VEHICLE)),
      Y.body.setTeam(Lt(e, r)));
    let i = X(n, 0, 1),
      a = [
        Y.prevPos[0] + (r.pos[0] - Y.prevPos[0]) * i,
        Y.prevPos[1] + (r.pos[1] - Y.prevPos[1]) * i,
        Y.prevPos[2] + (r.pos[2] - Y.prevPos[2]) * i,
      ];
    Math.hypot(a[0] - r.pos[0], a[1] - r.pos[1], a[2] - r.pos[2]) > 2 &&
      ((a[0] = Y.prevPos[0] = r.pos[0]),
      (a[1] = Y.prevPos[1] = r.pos[1]),
      (a[2] = Y.prevPos[2] = r.pos[2]),
      (Y.prevEyeH = w(r)));
    let o = ft(),
      c = null;
    o && (c = Vt(e, r, a, t, Y.prevEyeH + (w(r) - Y.prevEyeH) * i));
    let l = r.ext.pl,
      u = Math.hypot(r.vel[0], r.vel[2]),
      d = (r.state & s.GROUNDED) !== 0,
      f = (r.state & s.SWIMMING) !== 0;
    (o || (u > 0.4 && (d || f) && (Y.cam.bobPhase += t * u * 1.5)),
      Y.body.update({
        pos: a,
        yaw: o ? Y.look.yaw : r.yaw,
        pitch: o ? Y.look.pitch : r.pitch,
        height: re(r),
        lean: l ? l.lean : 0,
        grounded: d,
        swimming: f,
        phase: Y.cam.bobPhase,
        moveAmt: X(u / 3.5, 0, 1),
        sprint: r.state & s.SPRINT ? 1 : 0,
        fps: o,
        camPos: c,
      }));
  },
  dispose(e) {
    (Q(),
      window.removeEventListener(`devicemotion`, jt),
      (Y.padPlaying = !1),
      Y.touch?.dispose(),
      (Y.touch = null),
      (Y.touchPlaying = !1));
    for (let e of Y.listeners)
      try {
        e();
      } catch {}
    ((Y.listeners.length = 0),
      (Y.body &&= (Y.body.dispose(), null)),
      (Y.course &&= (Y.course.dispose(), null)),
      (Y.field &&= (Y.field.dispose(), null)),
      (Y.sky &&= (Y.sky.dispose(), null)),
      (Y.focus = null),
      Y.ownEntity && Y.localId >= 0 && e.world.despawn(Y.localId),
      (Y.localId = -1),
      (Y.ownEntity = !1),
      (Y.ctx = Y.canvas = Y.spawnHint = null));
  },
  async showcase(e, n) {
    let r = e.three ?? t,
      i = e.scene,
      a = new Set(i.children),
      o = e.debugGround(300);
    for (let e of Array.from(i.children))
      a.has(e) ||
        ((e === o || e.isLight || e.type === `GridHelper`) &&
          (i.remove(e), e.geometry?.dispose?.(), e.material?.dispose?.()));
    ((e.renderer.shadowMap.enabled = !0),
      (e.renderer.shadowMap.type = r.PCFShadowMap));
    let s = Se(e.world, e.rng.fork(`player-course`));
    (i.add(s.group), (Y.course = s));
    let c = s.endZ * 0.5;
    ((Y.field = Re(r, e.rng.fork(`player-field`), {
      hole: [s.pool.x0, s.pool.z0, s.pool.x1, s.pool.z1],
      ribbon: { x: 8, z0: 6, z1: s.endZ - 4 },
    })),
      i.add(Y.field.group),
      (Y.focus = [0, 1.5, c]),
      (Y.sky = Pe(r, {
        scene: i,
        renderer: e.renderer,
        rng: e.rng.fork(`player-sky`),
        centre: Y.focus,
      })),
      Y.sky.apply(e.world?.time?.tod ?? n?.tod ?? 14),
      e.events.on(`env:timeOfDay`, (e) => {
        Y.sky && e && Number.isFinite(e.tod) && Y.sky.apply(e.tod);
      }));
    let l = (e, t, n, i) => {
      (e.position.set(t[0], t[1], t[2]),
        e.lookAt(new r.Vector3(n[0], n[1], n[2])),
        (e.fov = i),
        e.updateProjectionMatrix());
    };
    (e.registerCameraPreset(`mid50`, (e) =>
      l(e, [23, 14, c * 0.5 + 42], [0, 1, c * 0.6], 60),
    ),
      e.registerCameraPreset(`far300`, (e) =>
        l(e, [112, 58, c + 268], [0, 2, c - 2], 42),
      ),
      e.registerCameraPreset(`overview`, (e) =>
        l(e, [120, 320, c + 320], [0, 0, c], 50),
      ),
      e.registerCameraPreset(`course`, (e) =>
        l(e, [26, 17, 12], [-2, 0.5, s.endZ * 0.42], 60),
      ),
      (Y.spawnHint = { pos: s.spawn.pos.slice(), yaw: s.spawn.yaw }),
      It(e) && e.setCameraFocus(null),
      e.log(
        `showcase: obstacle course,`,
        s.colliders.length,
        `colliders; end at z =`,
        s.endZ.toFixed(1),
      ),
      e.events.emit(`ui:message`, {
        kind: `hint`,
        text: `Click to take control. WASD move, Shift sprint, Space jump, C crouch, Z prone, Q/E lean, RMB aim.`,
        ttl: 8,
      }));
  },
};
