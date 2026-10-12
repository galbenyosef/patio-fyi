// assets__destruction-BbHyhMIq 03 — root
// Lines 528-685 of readable/assets__destruction-BbHyhMIq.pretty.js (statement-aligned).
var A = [],
  j = null,
  M = null,
  N = {
    name: `destruction`,
    deps: [`demo`],
    api: { getPanels: () => A.map((e) => e.rig.id) },
    init(e) {
      if (e.config.showcase) return;
      let t = e.modules.get(`demo`),
        n = y(
          e.world,
          t?.getDefinition?.(),
          !!e.config.offline || !!e.config.expandedDemolition,
        );
      j = { rigs: n, demo: t };
      for (let e of n.hidden ?? []) t.setObjectVisible(e, !1);
      let r = { active: 0, max: 384 };
      e.events.on(`net:connected`, () => {
        for (let e of A) e.replica.beginSession();
      });
      let a = t?.getDefinition?.().urbanBuildings?.find((e) => e.workshop);
      M = k(e.scene, {
        configureMaterial: (t) => (
          v(t, a),
          e.modules.get(`environment`)?.configureCaster?.(t),
          t
        ),
      });
      let s = t?.facadeSkin?.() ?? null;
      for (let a of n) {
        let n = !!s?.owns(a.id),
          c = !n && !!a.lazy;
        c || t.setObjectVisible(a.id, !1);
        let u = new h(...a.origin),
          f = () => {
            let t = E(e.scene, a.wall, {
              color: _[a.object.material],
              horizontal: a.horizontal,
              masonryFrame: a.masonryFrame,
              floorAt: a.debrisFloor,
              debrisBudget: r,
              shouldEmitDebris: () =>
                e.camera.position.distanceToSquared(u) < 122500,
              ghost: n,
              ...(n ? { color: s.colorOf(a.id) ?? _[a.object.material] } : {}),
            });
            return (
              t.root.position.copy(u),
              (t.root.rotation.y = a.rotated ? Math.PI / 2 : a.yaw || 0),
              (t.root.rotation.x = a.horizontal ? -Math.PI / 2 : 0),
              t.root.updateMatrix(),
              (t.root.matrixAutoUpdate = !1),
              t
            );
          },
          p = n || c ? null : f(),
          m = () => (
            p ||
              (c && t.setObjectVisible(a.id, !1),
              (p = f()),
              p.root.updateMatrixWorld(!0),
              (T.view = p)),
            p
          );
        a.id !== `hq0-ops-east` && p && p.attachBatch(M);
        let v = a.wall.facade.def.cells.reduce((e, t) =>
            Math.hypot(...e.center.map((e, t) => e - (t ? 1.8 : 0))) <
            Math.hypot(...t.center.map((e, t) => e - (t ? 1.8 : 0)))
              ? e
              : t,
          ),
          y = null,
          x = null;
        if (a.id === `hq0-ops-east`) {
          ((y = new o(
            new d(0.42, 0.55, 32),
            new g({ color: 16760130, side: 2 }),
          )),
            y.position.set(0, 1.8, a.wall.facade.def.thickness / 2 + 0.012),
            p.root.add(y),
            (y.visible = a.id === b));
          let e = document.createElement(`canvas`);
          ((e.width = 512), (e.height = 80));
          let t = e.getContext(`2d`);
          ((t.fillStyle = `#18242b`),
            t.fillRect(0, 0, 512, 80),
            (t.fillStyle = `#ffca64`),
            (t.font = `bold 32px sans-serif`),
            (t.textAlign = `center`),
            t.fillText(`ROCKET TEST WALL`, 256, 52),
            (x = new i(e)));
          let n = new o(new l(5, 0.78), new g({ map: x, side: 2 }));
          (n.position.set(0, a.wall.facade.def.height + 0.75, 0),
            p.root.add(n),
            (n.visible = a.id === b));
        }
        let S = [],
          C = D(a, ({ broken: e, pos: r, initial: i }) => {
            for (let e of a.attachments)
              t.setObjectVisible(
                e,
                a.wall.facade.hp.every((e) => e > 0),
              );
            if (
              (n && s.damage(a),
              y && (y.visible = a.wall.facade.hp[v.id] > 0),
              (!n && !c) || p || !a.wall.facade.hp.every((e) => e > 0))
            ) {
              if ((m(), !i && r)) {
                p.fracture(e, r);
                let n = a.id.match(/^(urban-\d+)-f(\d+)/);
                n && t.setLightGroup?.(`${n[1]}-f${n[2]}`, !1);
              } else p.sync();
            }
          });
        S.push(
          e.events.on(`destruction:state`, (e) => {
            e?.id === a.id && C.apply(e);
          }),
        );
        let w = () =>
          e.modules.get(`netcode`)?.sendRpc?.(`destruction:sync`, {});
        a.id === `hq0-ops-east` &&
          (S.push(e.events.on(`player:local`, w)),
          S.push(e.events.on(`net:connected`, w)),
          w());
        let T = {
          rig: a,
          view: p,
          replica: C,
          off: S,
          demo: t,
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
