// assets__server-CpSHfa52 01 — wall
// Lines 1-116 of readable/assets__server-CpSHfa52.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { n as e } from "./greywater-DsgkBTd3.js";
import { t } from "./explosion-profile-Dq6PS3Ks.js";
var n = new WeakMap(),
  r = {
    name: `destruction`,
    deps: [`demo`],
    api: {},
    init(r) {
      let i = e(
          r.world,
          r.modules.get(`demo`)?.getDefinition?.(),
          !!r.config.expandedDemolition,
        ),
        a = [],
        o = new Map(),
        s = r.modules.get(`netcode`),
        c = (e, t = {}) => ({
          id: e.id,
          state: e.wall.facade.snapshot(),
          ...t,
        }),
        l = new Map(
          i.map((e) => {
            let t = e.wall.facade.def;
            return [
              e,
              {
                c: e.toWorld([0, t.height / 2, 0]),
                r: Math.hypot(t.width / 2, t.height / 2) + 1,
              },
            ];
          }),
        ),
        u = (e, t, n) => {
          let r = l.get(e);
          return (
            (t[0] - r.c[0]) ** 2 + (t[1] - r.c[1]) ** 2 + (t[2] - r.c[2]) ** 2 <
            (r.r + n) ** 2
          );
        };
      ((this.api.panels = () => i.map((e) => e.id)),
        (this.api.ram = (e, t) => {
          let n = 0;
          for (let r of i) {
            if (r.horizontal || !u(r, e, 3)) continue;
            let i = r.toLocal(e),
              a = r.wall.facade.revision,
              o = r.wall.blast(i, { radius: 3, damage: t });
            a !== r.wall.facade.revision &&
              (n++,
              o.length && r.sync(),
              s?.broadcastEvent?.(
                `destruction:state`,
                c(r, { broken: o, pos: i }),
              ));
          }
          return n;
        }),
        i.length &&
          (a.push(
            r.events.on(`explosion`, (e) => {
              if (
                !e?.pos ||
                e.projectileId == null ||
                e.structuralDamage === !1
              )
                return;
              let n = t(e);
              for (let t of i) {
                if (!u(t, e.pos, t.horizontal ? n.floor.radius : n.wall.radius))
                  continue;
                let r = t.toLocal(e.pos),
                  i = t.wall.facade.revision,
                  a = t.wall.blast(r, t.horizontal ? n.floor : n.wall);
                i !== t.wall.facade.revision &&
                  (a.length && t.sync(),
                  s?.broadcastEvent?.(
                    `destruction:state`,
                    c(t, { broken: a, pos: r }),
                  ));
              }
            }),
          ),
          a.push(
            r.events.on(`net:rpc`, ({ client: e, rpc: t }) => {
              if (
                t?.name === `destruction:sync` &&
                e &&
                !(r.world.time.tick < (o.get(e.id) ?? -1))
              ) {
                o.set(e.id, r.world.time.tick + 60);
                for (let t of i)
                  t.wall.facade.revision > 0 &&
                    s?.sendEvent?.(
                      e.id,
                      `destruction:state`,
                      c(t, { initial: !0 }),
                    );
              }
            }),
          ),
          n.set(r.world, { rigs: i, off: a, requests: o })));
    },
    onDisconnect(e, t) {
      n.get(e.world)?.requests.delete(t.id);
    },
    dispose(e) {
      let t = n.get(e.world);
      t &&
        (t.off.forEach((e) => e()),
        t.rigs.forEach((e) => e.dispose()),
        t.rigs.restore?.(),
        n.delete(e.world));
    },
  };
