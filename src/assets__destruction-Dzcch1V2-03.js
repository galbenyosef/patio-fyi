// assets__destruction-Dzcch1V2 03 — root
// Lines 528-685 of readable/assets__destruction-Dzcch1V2.pretty.js (statement-aligned).
var A = [],
  j = null,
  M = null,
  N = {
    name: `destruction`,
    deps: [`demo`],
    api: { getPanels: () => A.map((e) => e.rig.id) },
    init(t) {
      if (t.config.showcase) return;
      let n = t.modules.get(`demo`),
        r = y(
          t.world,
          n?.getDefinition?.(),
          !!t.config.offline || !!t.config.expandedDemolition,
        );
      j = { rigs: r, demo: n };
      for (let e of r.hidden ?? []) n.setObjectVisible(e, !1);
      let a = { active: 0, max: 384 };
      t.events.on(`net:connected`, () => {
        for (let e of A) e.replica.beginSession();
      });
      let o = n?.getDefinition?.().urbanBuildings?.find((e) => e.workshop);
      M = k(t.scene, {
        configureMaterial: (e) => (
          v(e, o),
          t.modules.get(`environment`)?.configureCaster?.(e),
          e
        ),
      });
      let s = n?.facadeSkin?.() ?? null;
      for (let o of r) {
        let r = !!s?.owns(o.id),
          l = !r && !!o.lazy;
        l || n.setObjectVisible(o.id, !1);
        let d = new i(...o.origin),
          p = () => {
            let e = E(t.scene, o.wall, {
              color: _[o.object.material],
              horizontal: o.horizontal,
              masonryFrame: o.masonryFrame,
              floorAt: o.debrisFloor,
              debrisBudget: a,
              shouldEmitDebris: () =>
                t.camera.position.distanceToSquared(d) < 122500,
              ghost: r,
              ...(r ? { color: s.colorOf(o.id) ?? _[o.object.material] } : {}),
            });
            return (
              e.root.position.copy(d),
              (e.root.rotation.y = o.rotated ? Math.PI / 2 : o.yaw || 0),
              (e.root.rotation.x = o.horizontal ? -Math.PI / 2 : 0),
              e.root.updateMatrix(),
              (e.root.matrixAutoUpdate = !1),
              e
            );
          },
          m = r || l ? null : p(),
          h = () => (
            m ||
              (l && n.setObjectVisible(o.id, !1),
              (m = p()),
              m.root.updateMatrixWorld(!0),
              (T.view = m)),
            m
          );
        o.id !== `hq0-ops-east` && m && m.attachBatch(M);
        let v = o.wall.facade.def.cells.reduce((e, t) =>
            Math.hypot(...e.center.map((e, t) => e - (t ? 1.8 : 0))) <
            Math.hypot(...t.center.map((e, t) => e - (t ? 1.8 : 0)))
              ? e
              : t,
          ),
          y = null,
          x = null;
        if (o.id === `hq0-ops-east`) {
          ((y = new e(
            new u(0.42, 0.55, 32),
            new c({ color: 16760130, side: 2 }),
          )),
            y.position.set(0, 1.8, o.wall.facade.def.thickness / 2 + 0.012),
            m.root.add(y),
            (y.visible = o.id === b));
          let t = document.createElement(`canvas`);
          ((t.width = 512), (t.height = 80));
          let n = t.getContext(`2d`);
          ((n.fillStyle = `#18242b`),
            n.fillRect(0, 0, 512, 80),
            (n.fillStyle = `#ffca64`),
            (n.font = `bold 32px sans-serif`),
            (n.textAlign = `center`),
            n.fillText(`ROCKET TEST WALL`, 256, 52),
            (x = new g(t)));
          let r = new e(new f(5, 0.78), new c({ map: x, side: 2 }));
          (r.position.set(0, o.wall.facade.def.height + 0.75, 0),
            m.root.add(r),
            (r.visible = o.id === b));
        }
        let S = [],
          C = D(o, ({ broken: e, pos: t, initial: i }) => {
            for (let e of o.attachments)
              n.setObjectVisible(
                e,
                o.wall.facade.hp.every((e) => e > 0),
              );
            if (
              (r && s.damage(o),
              y && (y.visible = o.wall.facade.hp[v.id] > 0),
              (!r && !l) || m || !o.wall.facade.hp.every((e) => e > 0))
            ) {
              if ((h(), !i && t)) {
                m.fracture(e, t);
                let r = o.id.match(/^(urban-\d+)-f(\d+)/);
                r && n.setLightGroup?.(`${r[1]}-f${r[2]}`, !1);
              } else m.sync();
            }
          });
        S.push(
          t.events.on(`destruction:state`, (e) => {
            e?.id === o.id && C.apply(e);
          }),
        );
        let w = () =>
          t.modules.get(`netcode`)?.sendRpc?.(`destruction:sync`, {});
        o.id === `hq0-ops-east` &&
          (S.push(t.events.on(`player:local`, w)),
          S.push(t.events.on(`net:connected`, w)),
          w());
        let T = {
          rig: o,
          view: m,
          replica: C,
          off: S,
          demo: n,
          labelTexture: x,
        };
        A.push(T);
      }
      M.build();
      for (let e of A) e.view?.root.updateMatrixWorld(!0);
    },
    update(e, t) {
      for (let e of A) e.view?.update(Math.min(0.05, t));
    },
    dispose() {
      (M?.dispose(), (M = null));
      for (let e of A) {
        (e.off.forEach((e) => e()),
          e.labelTexture?.dispose(),
          e.view?.dispose(),
          e.rig.dispose(),
          e.demo?.setObjectVisible(e.rig.id, !0));
        for (let t of e.rig.attachments) e.demo?.setObjectVisible(t, !0);
      }
      j?.rigs.restore?.();
      for (let e of j?.rigs.hidden ?? []) j.demo.setObjectVisible(e, !0);
      ((j = null), (A = []));
    },
  };
