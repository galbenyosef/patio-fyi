// assets__server-D6cVGIqJ 03 — world
// Lines 460-1369 of readable/assets__server-D6cVGIqJ.pretty.js (statement-aligned).
var $ = new WeakMap(),
  wt = {
    name: `demo`,
    deps: [`terrain`, `gamemodes`, `bots`],
    terrainDefinition(e) {
      return K(e)?.config ?? (e.urban ? T(z) : z);
    },
    api: {
      getDefinition() {
        return null;
      },
      getRoutes() {
        return fe;
      },
      stats() {
        return {};
      },
    },
    init(n) {
      let r = n.modules.get(`terrain`);
      if (!r?.generate) {
        n.warn(`terrain.generate unavailable; demo map skipped`);
        return;
      }
      let f = n.config.initialTerrain ?? this.terrainDefinition(n.config);
      r.usesDefinition?.(n.world.seed, f) || r.generate(n.world.seed, f);
      let v = mt(r.getHeight, {
        roofLinks: n.config.roofLinks !== !1,
        release: !!n.config.expandedDemolition,
        urban: !!n.config.urban,
        ...Object.fromEntries(i.map((e) => [e, !!n.config[e]])),
      });
      (v.colliderDefs.push(...te(r.getHeightfield?.())),
        v.colliderDefs.push(...ne(r.getHeightfield?.(), v)),
        (n.world.map.visibility = v.climate?.visibility ?? null),
        (n.world.map.canopy =
          v.climate?.canopy || v.canopy ? _t(r.getHeightfield?.()) : null),
        (n.world.map.roadDriving = !!(v.roadDriving ?? v.frost)),
        (n.world.mapId = v.id),
        (n.world.map.routes = v.routes),
        v.playBounds?.length === 4 &&
          (n.world.map.bounds = v.playBounds.slice()),
        v.floorNav
          ? (n.world.map.floorNav = v.floorNav)
          : delete n.world.map.floorNav,
        v.driveRoutes
          ? (n.world.map.driveRoutes = v.driveRoutes)
          : delete n.world.map.driveRoutes,
        Number.isFinite(v.laneDirect)
          ? (n.world.map.laneDirect = v.laneDirect)
          : delete n.world.map.laneDirect,
        delete n.world.map.spawnLevel,
        delete n.world.map.spawnBounds,
        Number.isFinite(v.spawnLevel)
          ? (n.world.map.spawnLevel = v.spawnLevel)
          : delete n.world.map.spawnLevel,
        v.spawnBounds?.length === 4
          ? (n.world.map.spawnBounds = v.spawnBounds.slice())
          : delete n.world.map.spawnBounds,
        v.noSpawn?.length
          ? (n.world.map.noSpawn = v.noSpawn.map((e) => e.slice()))
          : delete n.world.map.noSpawn,
        Number.isFinite(v.spawnRadius)
          ? (n.world.map.spawnRadius = v.spawnRadius)
          : delete n.world.map.spawnRadius,
        Number.isFinite(v.hqSafeDistance)
          ? (n.world.map.hqSafeDistance = v.hqSafeDistance)
          : delete n.world.map.hqSafeDistance,
        v.ziplines?.length
          ? (n.world.map.ziplines = v.ziplines)
          : delete n.world.map.ziplines,
        v.ladders?.length
          ? (n.world.map.ladders = v.ladders)
          : delete n.world.map.ladders,
        v.roofLinks?.length
          ? (n.world.map.roofLinks = v.roofLinks)
          : delete n.world.map.roofLinks,
        (n.world.map.homeBases = v.homeBases),
        (n.world.map.towerSpawns = Ct(v)));
      let w = [];
      for (let e of v.colliderDefs) {
        let t = a(e);
        (n.world.map.addCollider(t), w.push(t.id));
      }
      if (v.rush) n.modules.get(`gamemodes`)?.useRush?.(v.rush);
      else if (v.ffa) n.modules.get(`gamemodes`)?.useFfa?.(v.ffa);
      else if (v.tdm) n.modules.get(`gamemodes`)?.useTdm?.(v.tdm);
      else {
        let e = new Map((n.world.match.objectives ?? []).map((e) => [e.id, e]));
        n.world.match.objectives = b(n.world, v.objectives).map((t) =>
          Object.assign(e.get(t.id) ?? {}, t),
        );
      }
      let T = n.modules.get(`gamemodes`);
      for (let e of n.world.players.values())
        e.isBot && T?.requestSpawn?.(e.id, null);
      let E = {
        layout: v,
        ids: w,
        liftSent: new Map(),
        liftSync: new Map(),
        disposeLifts: _(n.world, v.lifts),
        sky: x(C(n.config.sky)),
        planes: [],
        skyCursor: 0,
      };
      $.set(n.world, E);
      let O = () => ({ settings: E.sky, planes: E.planes });
      ((E.banner = G(n.config.banner)),
        n.events.on(`net:hello`, ({ client: e }) => {
          e &&
            E.banner &&
            n.modules
              .get(`netcode`)
              ?.sendEvent?.(e.id, `ui:banner`, { text: E.banner });
        }),
        n.events.on(`net:hello`, ({ client: e }) => {
          e &&
            E.sky.messages.length &&
            n.modules.get(`netcode`)?.sendEvent?.(e.id, `demo:sky`, O());
        }));
      let k = new WeakMap(),
        A = (e) => {
          let t = e && k.get(e);
          t && (n.world.despawn(t.id), k.delete(e));
        };
      ((E.flySky = () => {
        let e = n.world.time.tick;
        for (let t of E.planes) {
          if (!t || t.down != null) continue;
          let r = k.get(t);
          if (!r || n.world.get(r.id) !== r.entity) {
            let e = E.sky,
              i = D(e, e.messages[t.message], e.spots[t.spot]),
              a = n.world.spawn(`prop`, {
                weapon: 220,
                pos: S(i, 0),
                team: -1,
                owner: -1,
                hp: 1,
                maxHp: 1,
              });
            ((r = { id: a.id, entity: a, plan: i }), k.set(t, r));
          }
          let i = (e - t.start) / 60,
            a = S(r.plan, i),
            o = S(r.plan, i - 1),
            s = S(r.plan, i + 1);
          ((r.entity.pos = a),
            (r.entity.vel = s.map((e, t) => (e - o[t]) / 2)),
            (r.entity.yaw = Math.atan2(-r.entity.vel[0], -r.entity.vel[2])));
        }
      }),
        n.events.on(`explosion`, (e) => {
          if (e?.weaponId === 10 && Array.isArray(e.pos))
            for (let t of E.planes) {
              let r = t && k.get(t);
              if (
                !r ||
                t.down != null ||
                (e.targetId !== r.id &&
                  Math.hypot(...r.entity.pos.map((t, n) => t - e.pos[n])) > 12)
              )
                continue;
              ((t.down = n.world.time.tick), A(t));
              let i = e.attackerId == null ? null : n.world.get(e.attackerId),
                a = i ? n.world.players.get(i.owner) : null;
              a && (a.score = (a.score | 0) + 200);
              let o = n.modules.get(`netcode`);
              (o?.broadcastEvent?.(`demo:sky`, O()),
                o?.broadcastEvent?.(`demo:skyDown`, {
                  name: a?.name ?? null,
                  pos: e.pos,
                }),
                n.events.emit(`demo:skyDown`, {
                  name: a?.name ?? null,
                  pos: e.pos,
                }));
            }
        }),
        (E.scheduleSky = (e) => {
          let t = E.sky,
            r = n.world.time.tick,
            i = t.messages.length && t.spots.length ? t.concurrent : 0,
            a = !1;
          (e && (E.planes.forEach(A), (E.planes = []), (a = !0)),
            E.planes.slice(i).forEach(A),
            (E.planes.length = Math.min(E.planes.length, i)));
          for (let e = 0; e < i; e++) {
            let i = E.planes[e];
            if (
              i &&
              (i.down == null ? r < i.start + i.total * 60 : r < i.down + 2700)
            )
              continue;
            A(i);
            let o = new Set(
                E.planes.filter((t, n) => t && n !== e).map((e) => e.message),
              ),
              s = new Set(
                E.planes.filter((t, n) => t && n !== e).map((e) => e.spot),
              ),
              c,
              l;
            if (t.shuffle) {
              let e = t.messages.map((e, t) => t).filter((e) => !o.has(e)),
                r = t.spots.map((e, t) => t).filter((e) => !s.has(e)),
                a = e.length ? e : t.messages.map((e, t) => t),
                u = r.length ? r : t.spots.map((e, t) => t),
                d = () => n.rng?.next?.() ?? Math.random();
              ((c = a[Math.floor(d() * a.length)]),
                (l = u[Math.floor(d() * u.length)]),
                i &&
                  a.length > 1 &&
                  c === i.message &&
                  (c = a[(a.indexOf(c) + 1) % a.length]));
            } else
              ((c = E.skyCursor % t.messages.length),
                (l = E.skyCursor % t.spots.length),
                E.skyCursor++);
            ((E.planes[e] = {
              message: c,
              spot: l,
              start: r,
              total: D(t, t.messages[c], t.spots[l]).total,
            }),
              (a = !0));
          }
          a && n.modules.get(`netcode`)?.broadcastEvent?.(`demo:sky`, O());
        }),
        E.scheduleSky(!1),
        n.events.on(`net:rpc`, ({ client: e, rpc: t }) => {
          t?.name !== `demo:liftSync` ||
            !e ||
            !v.lifts?.length ||
            n.world.time.tick < (E.liftSync.get(e.id) ?? -1) ||
            (E.liftSync.set(e.id, n.world.time.tick + 60),
            n.modules.get(`netcode`)?.sendEvent?.(e.id, `demo:lifts`, {
              states: v.lifts.map((e) => ({
                id: e.id,
                motion: e.motion ?? null,
              })),
            }));
        }),
        v.greywaterCentre &&
          ((E.disposeTrains = ce(n.world)),
          (E.trainStrike = () => {
            for (let t of le(n.world, n.world.time.tick)) {
              if (t.state & e.IN_VEHICLE) continue;
              ((t.hp = 0), (t.state |= e.DEAD));
              let r = {
                targetId: t.id,
                attackerId: -1,
                amount: 100,
                part: `torso`,
                weapon: `Train`,
                pos: t.pos.slice(),
                headshot: !1,
                fatal: !0,
              };
              n.events.emit(`player:damage`, r);
              for (let e of n.clients?.values?.() ?? [])
                e.entityId === t.id &&
                  n.modules
                    .get(`netcode`)
                    ?.sendEvent?.(e.id, `player:damage`, r);
            }
          })));
      let j = v.meridian ?? null;
      if (((E.meridian = j), (E.disposeMeridian = qe(n.world, j)), j)) {
        let t = () => n.modules.get(`netcode`),
          r = (e, r, i) => {
            for (let a of n.clients?.values?.() ?? [])
              a.entityId === e && t()?.sendEvent?.(a.id, r, i);
          },
          i = () => ({
            epoch: j.epoch,
            crash: j.crash,
            dark: j.dark,
            hits: [...j.hits],
            breaks: [...j.breaks],
          });
        n.events.on(`net:hello`, ({ client: e }) => {
          e && t()?.sendEvent?.(e.id, `demo:meridian`, i());
        });
        let a = new Map();
        (n.events.on(`net:rpc`, ({ client: e, rpc: r }) => {
          r?.name !== `demo:meridianSync` ||
            !e ||
            n.world.time.tick < (a.get(e.id) ?? -1) ||
            (a.set(e.id, n.world.time.tick + 60),
            t()?.sendEvent?.(e.id, `demo:meridian`, i()));
        }),
          n.events.on(`net:clientLeft`, ({ client: e }) => a.delete(e?.id)));
        let o = (e) => Math.round(e * 100) / 100,
          s = (e, r, i, a = null) => {
            let s = e.ext ? W.ext : W.int,
              c = j.hits.get(e.id) ?? 0,
              l = Math.min(99, c + r);
            j.hits.set(e.id, l);
            let u = j.breaks.get(e.id);
            (a || l >= s) &&
              (u || j.breaks.set(e.id, (u = [])),
              u.length < 30 &&
                u.push(
                  a ?? [
                    o(i.u),
                    o(i.y),
                    o(
                      u.length
                        ? 0.38 + Math.random() * 0.22
                        : (e.ext ? 1.35 : 1.1) + Math.random() * 0.5,
                    ),
                    0,
                  ],
                ));
            let d = {
              id: e.id,
              hits: l,
              point: i?.point ?? null,
              breaks: u ? u.slice() : null,
            };
            (t()?.broadcastEvent?.(`demo:meridianGlass`, d),
              n.events.emit(`demo:meridianGlass`, d));
          };
        (n.events.on(`weapon:fire`, (e) => {
          if (e?.origin && e?.dir)
            for (let t of Ye(
              j,
              e.origin,
              e.dir,
              e.dist ?? 300,
              n.world.time.tick,
            ))
              s(t.pane, t.pane.ext ? W.ext : W.int, t);
        }),
          n.events.on(`explosion`, (e) => {
            if (!Array.isArray(e?.pos)) return;
            let t = Math.max(2.5, Math.min(6, (e.radius ?? 4) * 0.8));
            for (let { pane: r, u: i, y: a, d: c } of Xe(
              j,
              e.pos,
              t,
              n.world.time.tick,
            ))
              Je(j, r, n.world.time.tick) ||
                s(r, 0, null, [
                  o(i),
                  o(a),
                  o(Math.max(0.7, Math.min(3.4, (t - c) * 1.2 + 0.6))),
                  1,
                ]);
          }),
          (E.lastHurt = new Map()),
          n.events.on(`player:damage`, (e) => {
            e?.attackerId != null &&
              e.attackerId >= 0 &&
              e.attackerId !== e.targetId &&
              e.weapon !== `Fell` &&
              E.lastHurt.set(e.targetId, {
                attackerId: e.attackerId,
                tick: n.world.time.tick,
              });
          }));
        let c = (t, i, a = -1) => {
            ((t.hp = 0), (t.state |= e.DEAD));
            let o = {
              targetId: t.id,
              attackerId: a,
              amount: 100,
              part: `torso`,
              weapon: i,
              pos: t.pos.slice(),
              headshot: !1,
              fatal: !0,
            };
            (n.events.emit(`player:damage`, o), r(t.id, `player:damage`, o));
          },
          l = (e) => {
            let t = E.lastHurt.get(e.id);
            return t && n.world.time.tick - t.tick < 600 ? t.attackerId : -1;
          };
        E.meridianTick = () => {
          let r = n.world.time.tick,
            a = n.world.match?.phase;
          if (a !== E.meridianPhase) {
            E.meridianPhase = a;
            let e = a === `live` ? r : null;
            e !== j.epoch &&
              ((j.epoch = e),
              (j.crash = null),
              (j.dark = null),
              (a === `live` || a === `warmup`) &&
                (j.hits.clear(), j.breaks.clear()),
              t()?.broadcastEvent?.(`demo:meridian`, i()),
              n.events.emit(`demo:meridian`, i()));
          }
          if (
            j.epoch != null &&
            (j.crash == null || j.dark == null) &&
            r % 15 == 0
          ) {
            let e = n.world.match?.killLimit ?? 100,
              a = (n.world.teams ?? []).reduce(
                (t, n) => t + Math.max(0, e - (n.tickets ?? e)),
                0,
              ),
              o = !1;
            (j.crash == null && a >= j.crane.kills && ((j.crash = r), (o = !0)),
              j.dark == null &&
                a >= (j.power?.kills ?? 0) &&
                ((j.dark = r), (o = !0)),
              o &&
                (t()?.broadcastEvent?.(`demo:meridian`, i()),
                n.events.emit(`demo:meridian`, i())));
          }
          for (let { entity: t, push: i } of Ke(n.world, j, r))
            t.state & e.DEAD ||
              E.swept?.has(t.id) ||
              ((E.swept ??= new Map()).set(t.id, r),
              E.lastHurt.set(t.id, { attackerId: l(t), tick: r, crane: !0 }),
              (t.vel = [i[0] * 16, 5.5, i[1] * 16]),
              (t.onGround = !1));
          if (E.swept)
            for (let [t, i] of E.swept) {
              let a = n.world.get(t);
              a &&
                a.hp > 0 &&
                !(a.state & e.DEAD) &&
                r - i === 72 &&
                a.pos[0] < j.plate.x1 &&
                a.pos[1] > j.floor - 1 &&
                c(a, `Crane`, l(a));
            }
          if (r % 3 == 0) {
            for (let t of n.world.byType(`soldier`))
              if (
                !(!(t.hp > 0) || t.state & e.DEAD || (t.seat ?? -1) >= 0) &&
                t.pos[1] < j.fallKill
              ) {
                let e = E.swept?.get(t.id);
                (c(t, e != null && r - e < 600 ? `Crane` : `Fell`, l(t)),
                  E.swept?.delete(t.id));
              }
          }
          if (r % 600 == 0 && E.swept)
            for (let [e, t] of E.swept) r - t > 900 && E.swept.delete(e);
        };
      }
      ee(n.config);
      let M = v.lindenFences ?? null;
      if (((E.disposeFences = Re(n.world, M)), M?.panels?.length)) {
        let e = Le(M),
          t = () => n.modules.get(`netcode`),
          r = () => ({ broken: [...e.broken] });
        n.events.on(`net:hello`, ({ client: e }) => {
          e && t()?.sendEvent?.(e.id, `demo:lindenFences`, r());
        });
        let i = new Map();
        (n.events.on(`net:rpc`, ({ client: e, rpc: a }) => {
          a?.name !== `demo:lindenFencesSync` ||
            !e ||
            n.world.time.tick < (i.get(e.id) ?? -1) ||
            (i.set(e.id, n.world.time.tick + 60),
            t()?.sendEvent?.(e.id, `demo:lindenFences`, r()));
        }),
          n.events.on(`net:clientLeft`, ({ client: e }) => i.delete(e?.id)));
        let a = (r, i) => {
          if (e.broken.has(r.id)) return;
          e.broken.add(r.id);
          let a = { id: r.id, why: i };
          (t()?.broadcastEvent?.(`demo:lindenFence`, a),
            n.events.emit(`demo:lindenFence`, a));
        };
        (n.events.on(`weapon:fire`, (t) => {
          if (!t?.origin || !t?.dir) return;
          let n = ze(M, t.origin, t.dir, (t.dist ?? 300) + 0.3);
          if (!n) return;
          let r = (e.hits.get(n.id) ?? 0) + 1;
          (e.hits.set(n.id, r), r >= n.hp && a(n, `shot`));
        }),
          n.events.on(`explosion`, (e) => {
            if (Array.isArray(e?.pos))
              for (let t of U(
                M,
                e.pos,
                Math.max(2.5, Math.min(6, (e.radius ?? 4) * 0.9)),
              ))
                a(t, `blast`);
          }));
        let o = new Map();
        E.fenceTick = () => {
          let i = n.world.time.tick,
            s = n.world.match?.phase;
          if (
            (s !== E.fencePhase &&
              ((E.fencePhase = s),
              (s === `live` || s === `warmup`) &&
                (e.broken.clear(),
                e.hits.clear(),
                t()?.broadcastEvent?.(`demo:lindenFences`, r()),
                n.events.emit(`demo:lindenFences`, r()))),
            !(i % 15))
          )
            for (let e of n.world.players.values()) {
              if (!e.isBot) continue;
              let t = n.world.get(e.entityId);
              if (!t || !(t.hp > 0) || (t.seat ?? -1) >= 0) {
                o.delete(e.id);
                continue;
              }
              let r = o.get(e.id);
              if (!r || Math.hypot(t.pos[0] - r.x, t.pos[2] - r.z) > 0.35) {
                o.set(e.id, { x: t.pos[0], z: t.pos[2], n: 0 });
                continue;
              }
              if (++r.n < 2) continue;
              let i = U(M, [t.pos[0], t.pos[1] + 0.9, t.pos[2]], 0.9).find(
                (e) => !e.nest,
              );
              i && (a(i, `kick`), (r.n = 0));
            }
        };
      }
      let N = v.hangar ?? null;
      if (((E.disposeHangar = g(n.world, N)), N)) {
        let e = () => n.modules.get(`netcode`),
          t = () => ({ epoch: N.epoch, broken: [...N.broken] });
        n.events.on(`net:hello`, ({ client: n }) => {
          n && e()?.sendEvent?.(n.id, `demo:hangar`, t());
        });
        let r = new Map();
        (n.events.on(`net:rpc`, ({ client: i, rpc: a }) => {
          a?.name !== `demo:hangarSync` ||
            !i ||
            n.world.time.tick < (r.get(i.id) ?? -1) ||
            (r.set(i.id, n.world.time.tick + 60),
            e()?.sendEvent?.(i.id, `demo:hangar`, t()));
        }),
          n.events.on(`net:clientLeft`, ({ client: e }) => r.delete(e?.id)));
        let i = (t, r) => {
          if (N.broken.has(t)) return;
          N.broken.add(t);
          let i = { id: t, why: r };
          (e()?.broadcastEvent?.(`demo:hangarGlass`, i),
            n.events.emit(`demo:hangarGlass`, i));
        };
        (n.events.on(`weapon:fire`, (e) => {
          if (e?.origin && e?.dir)
            for (let t of h(
              N,
              e.origin,
              e.dir,
              e.dist ?? 300,
              n.world.time.tick,
            ))
              i(t.id, `shot`);
        }),
          n.events.on(`explosion`, (e) => {
            if (Array.isArray(e?.pos))
              for (let t of d(
                N,
                e.pos,
                Math.max(2.5, Math.min(7, (e.radius ?? 4) * 0.9)),
                n.world.time.tick,
              ))
                i(t, `blast`);
          }));
        let a = () => n.world.match?.objectives?.find((e) => e.id === N.flagB);
        E.hangarTick = () => {
          let r = n.world.time.tick,
            i = n.world.match?.phase;
          if (i !== E.hangarPhase) {
            E.hangarPhase = i;
            let a = i === `live` ? r : null;
            a !== N.epoch &&
              ((N.epoch = a),
              (i === `live` || i === `warmup`) && N.broken.clear(),
              e()?.broadcastEvent?.(`demo:hangar`, t()),
              n.events.emit(`demo:hangar`, t()));
          }
          let o = a();
          if (o) {
            let e = m(N, r);
            ((o.pos[0] = e[0]), (o.pos[1] = e[1]), (o.pos[2] = e[2]));
          }
        };
      }
      let P = v.bascule ?? null;
      if (((E.disposeBascule = u(n.world, P)), P)) {
        for (let e of n.world.map.floorNav?.levels ?? []) y(n.world, e.id);
        let t = () => n.modules.get(`netcode`),
          r = () => ({ epoch: P.epoch });
        n.events.on(`net:hello`, ({ client: e }) => {
          e && t()?.sendEvent?.(e.id, `demo:bascule`, r());
        });
        let i = new Map();
        (n.events.on(`net:rpc`, ({ client: e, rpc: a }) => {
          a?.name !== `demo:basculeSync` ||
            !e ||
            n.world.time.tick < (i.get(e.id) ?? -1) ||
            (i.set(e.id, n.world.time.tick + 60),
            t()?.sendEvent?.(e.id, `demo:bascule`, r()));
        }),
          n.events.on(`net:clientLeft`, ({ client: e }) => i.delete(e?.id)));
        let a = (e, r, i) => {
            for (let a of n.clients?.values?.() ?? [])
              a.entityId === e && t()?.sendEvent?.(a.id, r, i);
          },
          o = new Map();
        n.events.on(`player:damage`, (e) => {
          e?.attackerId != null &&
            e.attackerId >= 0 &&
            e.attackerId !== e.targetId &&
            e.weapon !== `Fell` &&
            o.set(e.targetId, {
              attackerId: e.attackerId,
              tick: n.world.time.tick,
            });
        });
        let c = (t, r) => {
          ((t.hp = 0), (t.state |= e.DEAD));
          let i = {
            targetId: t.id,
            attackerId: r,
            amount: 100,
            part: `torso`,
            weapon: `Fell`,
            pos: t.pos.slice(),
            headshot: !1,
            fatal: !0,
          };
          (n.events.emit(`player:damage`, i), a(t.id, `player:damage`, i));
        };
        E.basculeTick = () => {
          let i = n.world.time.tick,
            a = n.world.match?.phase;
          if (a !== E.basculePhase) {
            E.basculePhase = a;
            let e = a === `live` ? i : null;
            e !== P.epoch &&
              ((P.epoch = e),
              t()?.broadcastEvent?.(`demo:bascule`, r()),
              n.events.emit(`demo:bascule`, r()));
          }
          if ((i % 15 == 0 && (n.world.map.routes = s(P, i)), i % 3 == 0))
            for (let t of n.world.byType(`soldier`)) {
              if (
                !(t.hp > 0) ||
                t.state & e.DEAD ||
                (t.seat ?? -1) >= 0 ||
                t.pos[1] > P.fallKill
              )
                continue;
              let n = o.get(t.id);
              c(t, n && i - n.tick < 600 ? n.attackerId : -1);
            }
        };
      }
      let F = v.mesa ?? null;
      if (((E.disposeMesa = o(n.world, F)), F)) {
        let e = () => n.modules.get(`netcode`),
          t = () => ({ epoch: F.epoch, broken: [...F.broken] }),
          r = (t, r) => {
            if (F.broken.has(t)) return;
            F.broken.add(t);
            let i = { id: t, why: r };
            (e()?.broadcastEvent?.(`demo:mesaGlass`, i),
              n.events.emit(`demo:mesaGlass`, i));
          };
        (n.events.on(`weapon:fire`, (e) => {
          if (e?.origin && e?.dir)
            for (let t of c(F, e.origin, e.dir, e.dist ?? 300)) r(t.id, `shot`);
        }),
          n.events.on(`explosion`, (e) => {
            if (Array.isArray(e?.pos))
              for (let t of l(
                F,
                e.pos,
                Math.max(2.5, Math.min(7, (e.radius ?? 4) * 0.9)),
              ))
                r(t, `blast`);
          }),
          n.events.on(`net:hello`, ({ client: n }) => {
            n && e()?.sendEvent?.(n.id, `demo:mesa`, t());
          }));
        let i = new Map();
        (n.events.on(`net:rpc`, ({ client: r, rpc: a }) => {
          a?.name !== `demo:mesaSync` ||
            !r ||
            n.world.time.tick < (i.get(r.id) ?? -1) ||
            (i.set(r.id, n.world.time.tick + 60),
            e()?.sendEvent?.(r.id, `demo:mesa`, t()));
        }),
          n.events.on(`net:clientLeft`, ({ client: e }) => i.delete(e?.id)),
          (E.mesaTick = () => {
            let r = n.world.time.tick,
              i = n.world.match?.phase;
            if (i !== E.mesaPhase) {
              E.mesaPhase = i;
              let a = i === `live` ? r : null;
              a !== F.epoch &&
                ((F.epoch = a),
                (i === `live` || i === `warmup`) && F.broken.clear(),
                e()?.broadcastEvent?.(`demo:mesa`, t()),
                n.events.emit(`demo:mesa`, t()));
            }
          }));
      }
      let I = v.kepler ?? null;
      if (((E.disposeKepler = Fe(n.world, I)), I)) {
        let e = () => n.modules.get(`netcode`),
          t = () => ({ epoch: I.epoch });
        n.events.on(`net:hello`, ({ client: n }) => {
          n && e()?.sendEvent?.(n.id, `demo:kepler`, t());
        });
        let r = new Map();
        (n.events.on(`net:rpc`, ({ client: i, rpc: a }) => {
          a?.name !== `demo:keplerSync` ||
            !i ||
            n.world.time.tick < (r.get(i.id) ?? -1) ||
            (r.set(i.id, n.world.time.tick + 60),
            e()?.sendEvent?.(i.id, `demo:kepler`, t()));
        }),
          n.events.on(`net:clientLeft`, ({ client: e }) => r.delete(e?.id)),
          (E.keplerTick = () => {
            let r = n.world.time.tick,
              i = n.world.match?.phase;
            if (i !== E.keplerPhase) {
              E.keplerPhase = i;
              let a = i === `live` ? r : null;
              a !== I.epoch &&
                ((I.epoch = a),
                e()?.broadcastEvent?.(`demo:kepler`, t()),
                n.events.emit(`demo:kepler`, t()));
            }
            r % 15 == 0 && (n.world.map.visibility = Math.round(Ie(I, r)));
          }));
      }
      let L = v.observatory ?? null;
      if (((E.disposeObservatory = ot(n.world, L)), L)) {
        let e = () => n.modules.get(`netcode`),
          t = () => ({ epoch: L.epoch, broken: [...L.broken] });
        n.events.on(`net:hello`, ({ client: n }) => {
          n && e()?.sendEvent?.(n.id, `demo:observatory`, t());
        });
        let r = new Map();
        (n.events.on(`net:rpc`, ({ client: i, rpc: a }) => {
          a?.name !== `demo:observatorySync` ||
            !i ||
            n.world.time.tick < (r.get(i.id) ?? -1) ||
            (r.set(i.id, n.world.time.tick + 60),
            e()?.sendEvent?.(i.id, `demo:observatory`, t()));
        }),
          n.events.on(`net:clientLeft`, ({ client: e }) => r.delete(e?.id)));
        let i = (t, r) => {
          if (L.broken.has(t)) return;
          L.broken.add(t);
          let i = { id: t, why: r };
          (e()?.broadcastEvent?.(`demo:observatoryGlass`, i),
            n.events.emit(`demo:observatoryGlass`, i));
        };
        (n.events.on(`weapon:fire`, (e) => {
          if (e?.origin && e?.dir)
            for (let t of st(L, e.origin, e.dir, e.dist ?? 300))
              i(t.id, `shot`);
        }),
          n.events.on(`explosion`, (e) => {
            if (Array.isArray(e?.pos))
              for (let t of ct(
                L,
                e.pos,
                Math.max(2.5, Math.min(7, (e.radius ?? 4) * 0.9)),
              ))
                i(t, `blast`);
          }),
          (E.observatoryTick = () => {
            let r = n.world.time.tick,
              i = n.world.match?.phase;
            if (i !== E.observatoryPhase) {
              E.observatoryPhase = i;
              let a = i === `live` ? r : null;
              a !== L.epoch &&
                ((L.epoch = a),
                (i === `live` || i === `warmup`) && L.broken.clear(),
                e()?.broadcastEvent?.(`demo:observatory`, t()),
                n.events.emit(`demo:observatory`, t()));
            }
          }));
      }
      ((E.disposeHouseFire = Se(
        n.world,
        v.housefire ?? null,
        () => n.world.time.tick,
        { obbCollider: a },
      )),
        (E.houseFire = v.housefire ? xt(n, v) : null));
      let R = new Set();
      (n.events.on(`net:input`, ({ entity: e, input: r }) => {
        e &&
          (r.buttons & t.INTERACT
            ? (R.has(e.id) || p(n.world, e), R.add(e.id))
            : R.delete(e.id));
      }),
        Object.assign(this.api, {
          getDefinition() {
            return v;
          },
          getRoutes() {
            return v.routes;
          },
          getHouseFire() {
            return E.houseFire;
          },
          getSky() {
            return E.sky;
          },
          getSkyPlanes() {
            return E.planes;
          },
          getBanner() {
            return E.banner;
          },
          setBanner(e) {
            return (
              (E.banner = G(e)),
              n.modules
                .get(`netcode`)
                ?.broadcastEvent?.(`ui:banner`, { text: E.banner }),
              E.banner
            );
          },
          setSky(e) {
            return ((E.sky = x(e)), E.scheduleSky(!0), E.sky);
          },
          stats() {
            return {
              name: v.name,
              size: v.size,
              colliders: w.length,
              objects: v.objects.length,
            };
          },
        }),
        n.log(
          `${v.name} authoritative map ready: ${v.size} m, ${w.length} colliders`,
        ));
    },
    tick(e) {
      {
        let t = $.get(e.world);
        (t?.scheduleSky && e.world.time.tick % 30 == 0 && t.scheduleSky(!1),
          t?.flySky?.());
      }
      {
        let t = $.get(e.world);
        t?.trainStrike && e.world.time.tick % 2 == 0 && t.trainStrike();
      }
      if (
        ($.get(e.world)?.meridianTick?.(),
        $.get(e.world)?.fenceTick?.(),
        $.get(e.world)?.hangarTick?.(),
        $.get(e.world)?.basculeTick?.(),
        $.get(e.world)?.mesaTick?.(),
        $.get(e.world)?.keplerTick?.(),
        $.get(e.world)?.observatoryTick?.(),
        $.get(e.world)?.houseFire?.tick(),
        e.world.map.lifts?.length)
      ) {
        for (let t of e.world.byType(`soldier`)) f(t, e.world);
        let t = $.get(e.world),
          n = [];
        for (let r of e.world.map.lifts)
          r.motion &&
            t.liftSent.get(r.id) !== r.motion &&
            (n.push({ id: r.id, motion: r.motion }),
            t.liftSent.set(r.id, r.motion));
        n.length &&
          e.modules
            .get(`netcode`)
            ?.broadcastEvent?.(`demo:lifts`, { states: n });
      }
    },
    dispose(e) {
      let t = $.get(e.world);
      if (t) {
        (t.disposeLifts(),
          t.disposeTrains?.(),
          t.disposeMeridian?.(),
          t.disposeFences?.(),
          t.disposeHouseFire?.(),
          t.disposeHangar?.(),
          t.disposeMesa?.(),
          t.disposeKepler?.(),
          t.disposeObservatory?.(),
          t.disposeBascule?.());
        for (let n of t.ids) e.world.map.removeCollider(n);
        (delete e.world.map.routes,
          delete e.world.map.floorNav,
          delete e.world.map.driveRoutes,
          delete e.world.map.laneDirect,
          delete e.world.map.homeBases,
          delete e.world.map.noSpawn,
          delete e.world.map.ziplines,
          delete e.world.map.ladders,
          delete e.world.map.roofLinks,
          $.delete(e.world));
      }
    },
  };
