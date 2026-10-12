// assets__vehicles-CqLF20DK 10 — camera
// Lines 2582-2848 of readable/assets__vehicles-CqLF20DK.pretty.js (statement-aligned).
var $,
  Ke = {
    name: `vehicles`,
    deps: [`player`, `weapons`, `demo`, `netcode`],
    api: {},
    async init(e) {
      (($ = {
        models: De({ thermal: !!e.config.frost }),
        cockpit: Me(e),
        shells: Ae(e),
        views: new Map(),
        mounted: !1,
        status: null,
        aim: null,
        firing: Oe(),
      }),
        ($.crash = Ge(e, $.views)),
        e.events.on(`vehicle:shot`, (t) => {
          e.world.get(t?.vehicleId)?.weapon === 2 &&
            $.firing.accept(t) &&
            e.events.emit(`vehicle:fire`, t);
        }),
        e.events.on(`vehicle:status`, (t) => {
          let n = e.modules.get(`player`)?.getLocalEntity?.();
          t.entityId === n?.id &&
            n.state & i.IN_VEHICLE &&
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
        (oe.crush = (e, t) => {
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
      let a = e.modules.get(`player`),
        s = a?.getLocalEntity?.(),
        c = s && s.state & i.IN_VEHICLE ? e.world.get(s.seat) : null,
        l = c ? a.getInput() : null;
      for (let t of e.world.byType(`vehicle`)) V(e.world, t);
      n.aim = c ? B(c, l.yaw, l.pitch, e.world) : null;
      for (let a of e.world.byType(`vehicle`)) {
        let l = F[a.weapon];
        if (!l) continue;
        r.add(a.id);
        let u = n.views.get(a.id),
          d = M(a);
        if (
          (u &&
            u.pick !== d &&
            (e.modules.get(`environment`)?.removeShadowProxy?.(u.root),
            e.scene.remove(u.root),
            u.dispose(),
            n.views.delete(a.id),
            (u = null)),
          !u)
        ) {
          let t = !(e.config.frost && a.weapon === 4);
          ((u = n.models.make(a.weapon, a.team, t, d)),
            (u.pick = d),
            (u.root.name = `vehicle-` + a.id),
            n.views.set(a.id, u),
            e.scene.add(u.root),
            e.modules.get(`environment`)?.addShadowProxy?.(u.root));
        }
        (u.root.position.fromArray(a.pos),
          (u.root.rotation.y = a.yaw),
          l.air &&
            ((u.attitude ??= Ie()),
            Le(
              u.attitude,
              a.vel,
              a.yaw,
              t,
              a.hp <= 0 ||
                a.pos[1] - P(e.world, a.pos[0], a.pos[2], a.pos[1]) < 0.15,
            ),
            Re(u.root, a.yaw, u.attitude)),
          (u.root.visible = a.hp > 0),
          (u.root.visible = !(a.hp > 0 && a.state & i.DEAD)),
          u.setDestroyed(a.hp <= 0),
          l.air &&
            ((u.spool = u.spool == null ? L(a) : I(u.spool, a, t)),
            (u.rotor.rotation.y += t * R(u.spool, z.mainRate)),
            (u.tailRotor.rotation.x += t * R(u.spool, z.tailRate))),
          u.tracks?.update(a.pos, a.yaw, a.hp > 0),
          u.setEngineHot(
            a.hp > 0 && (a.owner >= 0 || Math.hypot(...a.vel) > 0.5),
          ));
        let f = a === c && a.owner === s.owner ? n.aim : null,
          p = f?.yaw ?? a.yaw + (a.stance / 255) * Math.PI * 2,
          m = f?.pitch ?? a.pitch;
        ((u.turret.rotation.y = p - a.yaw), (u.elevation.rotation.x = m));
        let h = a.weapon === 2 && a.hp > 0 ? n.firing.pose(a.id) : null,
          g = h?.barrel ?? 0;
        u.recoil
          ? (u.recoil.position.z = g)
          : u.elevation.position.set(0, -Math.sin(m) * g, Math.cos(m) * g);
        let _ = h?.hull ?? 0,
          v = h?.dip ?? 0,
          y = Math.cos(p - a.yaw),
          b = Math.sin(p - a.yaw);
        ((u.suspension.position.y = -v),
          u.suspension.rotation.set(-y * _, 0, b * _),
          (u.elevation.rotation.x = m + (h?.lift ?? 0) * 0.05),
          (u.fireWait = Math.max(0, (u.fireWait ?? 0) - t)));
        let x = a.weapon === 2 && !!(a.state & i.ADS);
        if (
          (a.weapon !== 2 || x) &&
          a.hp > 0 &&
          a.state & i.FIRING &&
          !u.fireWait
        ) {
          u.fireWait = x ? 6 / 60 : (l.cooldown ?? 30) / 60;
          let t = o(p, m),
            n = H(a.weapon),
            r = re(a).map((e, r) => e + t[r] * n.length);
          e.events.emit(`vehicle:fire`, {
            vehicleId: a.id,
            pos: r,
            dir: t,
            mg: x,
          });
        }
      }
      n.crash.update(t);
      for (let [t, i] of n.views)
        r.has(t) ||
          (e.modules.get(`environment`)?.removeShadowProxy?.(i.root),
          e.scene.remove(i.root),
          i.dispose(),
          n.views.delete(t),
          n.firing.remove(t),
          e.world.map.removeCollider(`vehicle-` + t));
      if (
        ((n.viewMode = null),
        n.cockpit.hide(),
        c && window.__game?.camera?.current === `fps`)
      ) {
        let r =
            c.owner === s.owner &&
            !!F[c.weapon].gun &&
            !(e.config.frost && c.weapon === 4),
          i = r && !!(l.buttons & h.SPRINT);
        if (F[c.weapon].air) {
          let r = ne(s, l.yaw, l.pitch);
          e.camera.position.fromArray(r.pos);
          let i = n.views.get(c.id).attitude,
            a = Ve(i);
          (a &&
            e.camera.up
              .set(0, 1, 0)
              .applyEuler(new b(a.pitch, c.yaw, -a.roll, `YXZ`)),
            e.camera.lookAt(new k(...r.look)),
            e.camera.up.set(0, 1, 0));
          let o = n.crash.getShake();
          if (o > 0.01) {
            let t = performance.now() / 1e3;
            (e.camera.rotateX(Math.sin(t * 37) * 0.035 * o),
              e.camera.rotateZ(Math.sin(t * 29 + 1.3) * 0.05 * o),
              e.camera.rotateY(Math.sin(t * 23 + 0.4) * 0.03 * o));
          }
          ((n.views.get(c.id).root.visible = !1),
            (e.camera.fov = l.buttons & h.SPRINT ? 58 : 82),
            (n.viewMode = `cockpit`),
            n.cockpit.update(c, s, l, n.status, t, i, a));
        } else if (i) {
          let t = n.aim.sight.map((e, t) => e + n.aim.sightDir[t] * 0.4);
          (e.camera.position.fromArray(t),
            e.camera.lookAt(
              new k(...t.map((e, t) => e + n.aim.sightDir[t] * 80)),
            ),
            (n.views.get(c.id).root.visible = !1),
            (e.camera.fov = 42),
            (n.viewMode = `sight`));
        } else {
          let t = ie(n.aim, e.world.map);
          e.camera.position.fromArray(t.pos);
          let i = N(c);
          (t.pos.every((e, t) => e > i[t] - 0.35 && e < i[t + 3] + 0.35) &&
            (n.views.get(c.id).root.visible = !1),
            e.camera.lookAt(new k(...t.look)),
            (e.camera.fov = 75),
            (n.viewMode = r ? `chase` : `passenger`));
        }
        if (c.weapon === 2) {
          let t = n.firing.pose(c.id).camera;
          e.camera.rotateX(i ? t * 1.4 : t);
        }
        (e.camera.updateProjectionMatrix(),
          e.modules.get(`weapons`)?.getViewModel?.()?.setVisible?.(!1));
      }
      (c && !n.mounted && a.setSlot?.(0),
        (n.mounted = !!c),
        (!c || n.status?.vehicleId !== c.id) && (n.status = null));
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
      oe.crush = null;
      for (let [t, n] of $?.views ?? [])
        (e.scene.remove(n.root), e.world.map.removeCollider(`vehicle-` + t));
      ($?.cockpit.dispose(),
        $?.crash.dispose(),
        $?.shells.dispose(),
        $?.models.dispose(),
        ($ = null));
    },
  };
