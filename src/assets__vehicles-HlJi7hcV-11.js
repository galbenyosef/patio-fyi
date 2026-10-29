// assets__vehicles-HlJi7hcV 11 — camera
// Lines 2674-2964 of readable/assets__vehicles-HlJi7hcV.pretty.js (statement-aligned).
var $,
  tt = {
    name: `vehicles`,
    deps: [`player`, `weapons`, `demo`, `netcode`],
    api: {},
    async init(e) {
      (($ = {
        models: ke({ thermal: !!e.config.frost }),
        cockpit: Pe(e),
        shells: Me(e),
        views: new Map(),
        mounted: !1,
        status: null,
        aim: null,
        firing: Ae(),
      }),
        ($.crash = qe(e, $.views)),
        e.events.on(`vehicle:shot`, (t) => {
          e.world.get(t?.vehicleId)?.weapon === 2 &&
            $.firing.accept(t) &&
            e.events.emit(`vehicle:fire`, t);
        }),
        e.events.on(`vehicle:status`, (t) => {
          let n = e.modules.get(`player`)?.getLocalEntity?.();
          t.entityId === n?.id &&
            n.state & c.IN_VEHICLE &&
            t.vehicleId === n.seat &&
            (($.status?.vehicleId === t.vehicleId && t.tick < $.status.tick) ||
              ($.status = { ...t, received: performance.now() }));
        }),
        e.events.on(`net:disconnected`, () => {
          (($.status = null), ($.aim = null), $.firing.clear());
        }));
      let t = e.modules.get(`demo`),
        n = (n, r) => {
          n?.id &&
            (e.world.map.removeCollider(n.id),
            t?.hideById?.(n.id),
            !r &&
              n.pos &&
              (e.modules.get(`effects`)?.spawn?.(`collapse`, n.pos, [0, 1, 0], {
                scale: n.cls === `medium` ? 0.8 : 0.45,
              }),
              e.events.emit(
                `audio:play`,
                n.cls === `medium`
                  ? { id: `vehicle_crash`, pos: n.pos, volume: 0.7 }
                  : {
                      id:
                        n.surface === `metal` ? `impact_metal` : `impact_wood`,
                      pos: n.pos,
                      volume: 0.9,
                    },
              )));
        };
      (e.events.on(`prop:broken`, (e) => n(e, !1)),
        e.events.on(`prop:state`, (e) => {
          for (let t of e?.ids ?? []) n({ id: t }, !0);
        }));
      let r = () => e.modules.get(`netcode`)?.sendRpc?.(`prop:sync`, {});
      (e.events.on(`net:connected`, r),
        e.events.on(`player:local`, r),
        (le.crush = (e, t) => {
          let r = e.movementAabb ?? e.aabb;
          n(
            {
              id: e.id,
              cls: t,
              surface: e.surface,
              pos: r ? [(r[0] + r[3]) / 2, r[1], (r[2] + r[5]) / 2] : null,
            },
            !1,
          );
        }),
        (this.api.getMountedStatus = () => ($?.mounted ? $.status : null)),
        (this.api.getViewMode = () => $?.viewMode ?? null),
        (this.api.getAim = () => $?.aim),
        (this.api.getHullAttitude = (e) => $?.views.get(e)?.attitude ?? null));
    },
    update(e, t) {
      let n = $;
      if (!n) return;
      let r = new Set();
      (n.firing.advance(t), n.shells.update());
      let i = e.modules.get(`player`),
        a = i?.getLocalEntity?.(),
        s = a && a.state & c.IN_VEHICLE ? e.world.get(a.seat) : null,
        u = s ? i.getInput() : null;
      for (let t of e.world.byType(`vehicle`)) re(e.world, t);
      n.aim = s ? ne(s, u.yaw, u.pitch, e.world) : null;
      let d = e.modules.get(`demo`)?.getDefinition?.(),
        f = d?.vehicleMergeRange ?? 0,
        p = new Set();
      if (f > 0)
        for (let t of e.world.byType(`soldier`))
          t.state & c.IN_VEHICLE && p.add(t.seat);
      for (let i of e.world.byType(`vehicle`)) {
        let o = F[i.weapon];
        if (!o) continue;
        r.add(i.id);
        let l = n.views.get(i.id),
          u = M(i);
        if (
          (l &&
            l.pick !== u &&
            (Q(l),
            e.modules.get(`environment`)?.removeShadowProxy?.(l.root),
            e.scene.remove(l.root),
            l.dispose(),
            n.views.delete(i.id),
            (l = null)),
          !l)
        ) {
          let t = !(e.config.frost && i.weapon === 4);
          ((l = n.models.make(i.weapon, i.team, t, u)),
            (l.pick = u),
            (l.root.name = `vehicle-` + i.id),
            n.views.set(i.id, l),
            e.scene.add(l.root),
            e.modules.get(`environment`)?.addShadowProxy?.(l.root));
        }
        (l.root.position.fromArray(i.pos),
          (l.root.rotation.y = i.yaw),
          o.air &&
            ((l.attitude ??= Re()),
            ze(
              l.attitude,
              i.vel,
              i.yaw,
              t,
              i.hp <= 0 ||
                i.pos[1] - P(e.world, i.pos[0], i.pos[2], i.pos[1]) < 0.15,
            ),
            Be(l.root, i.yaw, l.attitude)),
          (l.root.visible = i.hp > 0),
          (l.root.visible = !(i.hp > 0 && i.state & c.DEAD)),
          l.setDestroyed(i.hp <= 0),
          o.air &&
            ((l.spool = l.spool == null ? L(i) : I(l.spool, i, t)),
            (l.rotor.rotation.y += t * R(l.spool, z.mainRate)),
            (l.tailRotor.rotation.x += t * R(l.spool, z.tailRate))),
          l.tracks?.update(i.pos, i.yaw, i.hp > 0),
          l.setEngineHot(
            i.hp > 0 && (i.owner >= 0 || Math.hypot(...i.vel) > 0.5),
          ));
        let m = i === s && i.owner === a.owner ? n.aim : null,
          g = m?.yaw ?? i.yaw + (i.stance / 255) * Math.PI * 2,
          _ = m?.pitch ?? i.pitch;
        ((l.turret.rotation.y = g - i.yaw), (l.elevation.rotation.x = _));
        let v = i.weapon === 2 && i.hp > 0 ? n.firing.pose(i.id) : null,
          y = v?.barrel ?? 0;
        l.recoil
          ? (l.recoil.position.z = y)
          : l.elevation.position.set(0, -Math.sin(_) * y, Math.cos(_) * y);
        let b = v?.hull ?? 0,
          x = v?.dip ?? 0,
          S = Math.cos(g - i.yaw),
          C = Math.sin(g - i.yaw);
        ((l.suspension.position.y = -x),
          l.suspension.rotation.set(-S * b, 0, C * b),
          (l.elevation.rotation.x = _ + (v?.lift ?? 0) * 0.05),
          et(
            l,
            i.hp > 0 &&
              !(i.state & c.DEAD) &&
              i.owner < 0 &&
              !p.has(i.id) &&
              i !== s &&
              !v &&
              Math.hypot(...i.vel) < 0.2 &&
              (!o.air || R(l.spool, z.mainRate) < 0.001),
            e.camera,
            f,
            d?.vehicleShadowRange ?? 0,
          ),
          (l.fireWait = Math.max(0, (l.fireWait ?? 0) - t)));
        let w = i.weapon === 2 && !!(i.state & c.ADS);
        if (
          (i.weapon !== 2 || w) &&
          i.hp > 0 &&
          i.state & c.FIRING &&
          !l.fireWait
        ) {
          l.fireWait = w ? 6 / 60 : (o.cooldown ?? 30) / 60;
          let t = h(g, _),
            n = B(i.weapon),
            r = ae(i).map((e, r) => e + t[r] * n.length);
          e.events.emit(`vehicle:fire`, {
            vehicleId: i.id,
            pos: r,
            dir: t,
            mg: w,
          });
        }
      }
      n.crash.update(t);
      for (let [t, i] of n.views)
        r.has(t) ||
          (Q(i),
          e.modules.get(`environment`)?.removeShadowProxy?.(i.root),
          e.scene.remove(i.root),
          i.dispose(),
          n.views.delete(t),
          n.firing.remove(t),
          e.world.map.removeCollider(`vehicle-` + t));
      if (
        ((n.viewMode = null),
        n.cockpit.hide(),
        s && window.__game?.camera?.current === `fps`)
      ) {
        let r =
            s.owner === a.owner &&
            !!F[s.weapon].gun &&
            !(e.config.frost && s.weapon === 4),
          i = r && !!(u.buttons & l.SPRINT);
        if (F[s.weapon].air) {
          let r = ie(a, u.yaw, u.pitch);
          e.camera.position.fromArray(r.pos);
          let i = n.views.get(s.id).attitude,
            c = Ue(i);
          (c &&
            e.camera.up
              .set(0, 1, 0)
              .applyEuler(new S(c.pitch, s.yaw, -c.roll, `YXZ`)),
            e.camera.lookAt(new o(...r.look)),
            e.camera.up.set(0, 1, 0));
          let d = n.crash.getShake();
          if (d > 0.01) {
            let t = performance.now() / 1e3;
            (e.camera.rotateX(Math.sin(t * 37) * 0.035 * d),
              e.camera.rotateZ(Math.sin(t * 29 + 1.3) * 0.05 * d),
              e.camera.rotateY(Math.sin(t * 23 + 0.4) * 0.03 * d));
          }
          ((n.views.get(s.id).root.visible = !1),
            (e.camera.fov = u.buttons & l.SPRINT ? 58 : 82),
            (n.viewMode = `cockpit`),
            n.cockpit.update(s, a, u, n.status, t, i, c));
        } else if (i) {
          let t = n.aim.sight.map((e, t) => e + n.aim.sightDir[t] * 0.4);
          (e.camera.position.fromArray(t),
            e.camera.lookAt(
              new o(...t.map((e, t) => e + n.aim.sightDir[t] * 80)),
            ),
            (n.views.get(s.id).root.visible = !1),
            (e.camera.fov = 42),
            (n.viewMode = `sight`));
        } else {
          let t = oe(n.aim, e.world.map);
          e.camera.position.fromArray(t.pos);
          let i = N(s);
          (t.pos.every((e, t) => e > i[t] - 0.35 && e < i[t + 3] + 0.35) &&
            (n.views.get(s.id).root.visible = !1),
            e.camera.lookAt(new o(...t.look)),
            (e.camera.fov = 75),
            (n.viewMode = r ? `chase` : `passenger`));
        }
        if (s.weapon === 2) {
          let t = n.firing.pose(s.id).camera;
          e.camera.rotateX(i ? t * 1.4 : t);
        }
        (e.camera.updateProjectionMatrix(),
          e.modules.get(`weapons`)?.getViewModel?.()?.setVisible?.(!1));
      }
      (s && !n.mounted && i.setSlot?.(0),
        (n.mounted = !!s),
        (!s || n.status?.vehicleId !== s.id) && (n.status = null));
    },
    showcase(e) {
      e.debugGround();
      for (let t = 0; t < 5; t++)
        e.world.spawn(`vehicle`, {
          weapon: t,
          team: t % 2,
          pos: [(t - 2) * 12, 0, 0],
          hp: F[t].hp,
        });
      e.setCameraFocus([0, 2, 0]);
    },
    dispose(e) {
      le.crush = null;
      for (let [t, n] of $?.views ?? [])
        (Q(n),
          e.scene.remove(n.root),
          e.world.map.removeCollider(`vehicle-` + t));
      ($?.cockpit.dispose(),
        $?.crash.dispose(),
        $?.shells.dispose(),
        $?.models.dispose(),
        ($ = null));
    },
  };
