// assets__server-BhxQgEgF 02 — pos
// Lines 140-1387 of readable/assets__server-BhxQgEgF.pretty.js (statement-aligned).
var z = (e, t) => {
    h[e.weapon].air && ((t.stance = 1), t.ext?.pl && delete t.ext.pl);
  },
  B = 10,
  V = 600,
  H = new WeakMap(),
  U = {
    name: `vehicles`,
    deps: [`demo`, `netcode`],
    api: {},
    init(d) {
      let f = new Map(),
        _ = new Map(),
        v = new Map(),
        b = new Map(),
        x = [],
        C = new WeakMap(),
        w = 6e4,
        E = d.world,
        D = d.modules.get(`netcode`),
        O = (e, t) => {
          (d.events.emit(e, t), D?.broadcastEvent?.(e, t));
        },
        k = () =>
          d.config.fixedVehicleModels ? -1 : Math.random() < 0.5 ? 0 : 1;
      function A(e, t, n = 0, r = {}) {
        let i = h[e];
        if (!i || f.size >= 48) return null;
        let a = r.yaw ?? (n > 0 ? Math.PI / 2 : -Math.PI / 2),
          o = E.spawn(`vehicle`, {
            pos: t,
            weapon: e,
            team: n,
            hp: i.hp,
            maxHp: i.hp,
            yaw: a,
            seat: k(),
            ext: r.unarmed || i.transport ? { unarmed: !0 } : {},
          });
        if (o.id > 254) return (E.despawn(o.id), null);
        let s = {
          v: o,
          seats: Array(i.seats).fill(null),
          home: t.slice(),
          homeYaw: a,
          homeTeam: n,
          neutral: n < 0,
          respawn: 0,
          nextFire: 0,
        };
        return (N(s, !!d.config.local), f.set(o.id, s), M(o), o);
      }
      function M(e) {
        S(E, e);
      }
      function P(e) {
        let t = _.get(e);
        if (t) {
          let n = f.get(t.id);
          (n &&
            ((n.seats[t.seat] = null), t.seat === 0 && (n.motionDriver = null)),
            _.delete(e));
        }
        (v.delete(e), b.delete(e), V?.delete(e));
      }
      function F(t) {
        let n = {
            ...t.v,
            pos: t.home,
            yaw: t.v.team ? Math.PI / 2 : -Math.PI / 2,
          },
          i = o(n);
        if (s(E, n, n.pos) || n.pos[1] < E.map.waterLevel) return !1;
        for (let t of E.byType(`soldier`))
          if (!(t.hp <= 0 || t.state & e.DEAD)) {
            for (let { capsule: e } of r(t))
              if (
                [0, 1, 2].every(
                  (t) =>
                    Math.min(e.a[t], e.b[t]) - e.r < i[t + 3] + 0.3 &&
                    Math.max(e.a[t], e.b[t]) + e.r > i[t] - 0.3,
                )
              )
                return !1;
          }
        return !0;
      }
      function I(t, n = !1, r = !1) {
        let i = _.get(t.id);
        if (!i) return !1;
        let a = f.get(i.id);
        if (!a)
          return (
            _.delete(t.id),
            (t.state &= ~e.IN_VEHICLE),
            (t.seat = -1),
            !0
          );
        let o = a.v,
          s = h[o.weapon],
          c = o.pos[1] - l(E, o.pos[0], o.pos[2], o.pos[1]) > 3;
        if (!n && !r && c) return !1;
        let u = (n, r, s, c = [0, 0, 0]) => (
            (a.seats[i.seat] = null),
            i.seat === 0 && (a.motionDriver = null),
            _.delete(t.id),
            (t.state &= ~e.IN_VEHICLE),
            (t.seat = -1),
            (t.stance = 0),
            (t.pos = [n, r, s]),
            (t.vel = c),
            (t.ext = {}),
            O(`vehicle:exit`, {
              entityId: t.id,
              vehicleId: o.id,
              seat: i.seat,
            }),
            !0
          ),
          d = (e, t, n) =>
            [...E.map.colliders.values()].some((r) => {
              let i = r.movementAabb ?? r.aabb;
              return (
                i &&
                r.solid !== !1 &&
                e > i[0] - 0.4 &&
                e < i[3] + 0.4 &&
                n > i[2] - 0.4 &&
                n < i[5] + 0.4 &&
                t + 1.8 > i[1] &&
                t < i[4]
              );
            }),
          p = [
            [s.w / 2 + 1.4, 0],
            [-s.w / 2 - 1.4, 0],
            [0, s.l / 2 + 1.4],
            [0, -s.l / 2 - 1.4],
          ].map(([e, t]) => [
            o.pos[0] + Math.cos(o.yaw) * e + Math.sin(o.yaw) * t,
            o.pos[2] - Math.sin(o.yaw) * e + Math.cos(o.yaw) * t,
          ]);
        if (r && c) {
          let e = o.pos[1],
            [t, n] = p.find(([t, n]) => !d(t, e, n)) ?? p[0];
          return u(t, e, n, Array.isArray(o.vel) ? o.vel.slice() : [0, 0, 0]);
        }
        for (let [e, t] of p) {
          let r = l(E, e, t, o.pos[1] + 0.6);
          if (
            !(!n && Math.abs(r - o.pos[1]) > 3) &&
            !(!n && (r < E.map.waterLevel || d(e, r, t)))
          )
            return u(e, n ? Math.max(r, o.pos[1]) : r, t);
        }
        if (!r) return !1;
        for (let [e, t] of p) {
          let n = l(E, e, t, o.pos[1] + 0.6);
          if (Math.abs(n - o.pos[1]) <= 3 && !d(e, n, t)) return u(e, n, t);
        }
        return u(o.pos[0], o.pos[1] + s.h + 0.05, o.pos[2]);
      }
      function L(t) {
        if (t.hp <= 0 || t.state & e.DEAD) return !1;
        if (_.has(t.id)) return I(t, !1, !E.players.get(t.owner)?.isBot);
        let n = [...f.values()]
            .filter(
              (e) =>
                e.v.hp > 0 &&
                e.stowed == null &&
                (e.v.team === t.team || e.seats.every((e) => e == null)) &&
                Math.hypot(...e.v.pos.map((e, n) => e - t.pos[n])) < 7,
            )
            .sort(
              (e, n) =>
                Math.hypot(...e.v.pos.map((e, n) => e - t.pos[n])) -
                Math.hypot(...n.v.pos.map((e, n) => e - t.pos[n])),
            ),
          r = !R(t);
        for (let i of n) {
          let n = r && R(E.get(i.seats[0])),
            o = i.seats.indexOf(null, +!!n),
            s = n ? 0 : o;
          if (
            s < 0 ||
            i.v.pos[1] - l(E, i.v.pos[0], i.v.pos[2], i.v.pos[1]) > 2
          )
            continue;
          let c = i.v.pos.map((e, t) => e + +(t === 1)),
            u = t.pos.map((e, t) => e + +(t === 1)),
            d = c.map((e, t) => e - u[t]),
            f = Math.hypot(...d),
            p = E.map.raycast(
              u,
              d.map((e) => e / f),
              f,
            );
          if (
            !p ||
            p.entityId === i.v.id ||
            /helipad/.test(String(p.colliderId ?? p.id ?? ``))
          ) {
            if ((i.v.team !== t.team && (i.v.team = t.team), n)) {
              let e = E.get(i.seats[0]);
              if (o > 0) B(i, e, o);
              else if ((I(e, !0), i.seats[0] != null)) continue;
            }
            return (
              (i.seats[s] = t.id),
              s === 0 && ((i.motionDriver = null), (i.motionSeq = 0)),
              _.set(t.id, { id: i.v.id, seat: s }),
              (t.state = e.IN_VEHICLE),
              (t.seat = i.v.id),
              (t.vel = [0, 0, 0]),
              (t.pos = a(i.v, s)),
              z(i.v, t),
              O(`vehicle:enter`, {
                entityId: t.id,
                vehicleId: i.v.id,
                seat: s,
              }),
              !0
            );
          }
        }
        return !1;
      }
      let R = (e) => !!e && !!E.players.get(e.owner)?.isBot;
      function B(e, t, n) {
        let r = _.get(t.id),
          i = r.seat;
        ((e.seats[n] = t.id),
          e.seats[i] === t.id && (e.seats[i] = null),
          (r.seat = n),
          (i === 0 || n === 0) && ((e.motionDriver = null), (e.motionSeq = 0)),
          (t.pos = a(e.v, n)),
          (t.vel = e.v.vel.slice()),
          z(e.v, t),
          v.delete(t.id),
          O(`vehicle:seat`, {
            entityId: t.id,
            vehicleId: e.v.id,
            seat: n,
            from: i,
          }));
      }
      let V = new Map();
      function U(t, n = 1) {
        let r = _.get(t?.id),
          i = r && f.get(r.id);
        if (
          !i ||
          t.hp <= 0 ||
          t.state & e.DEAD ||
          i.v.hp <= 0 ||
          E.time.tick < (V.get(t.id) ?? -1)
        )
          return !1;
        let o = i.seats.length,
          s = n < 0 ? -1 : 1;
        for (let e = 1; e < o; e++) {
          let n = (((r.seat + s * e) % o) + o) % o,
            c = i.seats[n],
            l = c == null ? null : E.get(c);
          if (c != null && !R(l)) continue;
          V.set(t.id, E.time.tick + 15);
          let u = r.seat;
          return (
            B(i, t, n),
            l &&
              ((i.seats[u] = l.id),
              (_.get(l.id).seat = u),
              (l.pos = a(i.v, u)),
              z(i.v, l),
              v.delete(l.id)),
            !0
          );
        }
        return !1;
      }
      function W(t, n) {
        let r = f.get(t);
        if (!r || r.v.hp <= 0 || r.v.state & e.DEAD || r.v.team !== n)
          return null;
        let i = r.seats.indexOf(null);
        return i < 0
          ? null
          : {
              vehicleId: t,
              seat: i,
              pos: a(r.v, i),
              yaw: r.v.yaw,
              name: h[r.v.weapon].name,
              free: r.seats.filter((e) => e == null).length,
            };
      }
      function te(t, n) {
        let r = W(n, t.team);
        if (!r || t.hp <= 0 || t.state & e.DEAD || _.has(t.id)) return !1;
        let i = f.get(n);
        return (
          (i.seats[r.seat] = t.id),
          _.set(t.id, { id: n, seat: r.seat }),
          r.seat === 0 && ((i.motionDriver = null), (i.motionSeq = 0)),
          (t.state = e.IN_VEHICLE),
          (t.seat = n),
          (t.pos = r.pos),
          (t.vel = i.v.vel.slice()),
          O(`vehicle:enter`, { entityId: t.id, vehicleId: n, seat: r.seat }),
          !0
        );
      }
      let G = (e, t, n) => {
          if (e != null)
            for (let r of d.clients?.values?.() ?? [])
              r.entityId === e && D?.sendEvent?.(r.id, t, n);
        },
        K = (
          t,
          n,
          {
            attackerId: r = null,
            sourceTeam: i = null,
            weapon: a = `Vehicle damage`,
            pos: o = null,
            normal: s = null,
            kind: c = null,
            weaponId: l = null,
          } = {},
        ) => {
          let u = f.get(t?.id);
          if (
            !u ||
            u.stowed != null ||
            t.hp <= 0 ||
            n <= 0 ||
            (i != null && i === t.team)
          )
            return null;
          let p = Math.min(t.hp, n);
          ((t.hp = Math.max(0, t.hp - p)), t.hp || (t.state |= e.DEAD));
          let m = {
            vehicleId: t.id,
            attackerId: r,
            targetTeam: t.team,
            amount: p,
            fatal: t.hp === 0,
            weapon: a,
            pos: Array.isArray(o) ? o.slice() : t.pos.slice(),
            normal: s,
          };
          (m.fatal &&
            (u.destroyedBy = {
              attackerId: r,
              sourceTeam: i,
              weapon: a,
              pos: m.pos,
              kind: c,
              weaponId: l,
            }),
            d.events.emit(`vehicle:damage`, m));
          for (let e of u.seats) e != null && G(e, `vehicle:damage`, m);
          return (G(r, `vehicle:damage`, m), m);
        },
        q = (t, n, r, i, a) => {
          if (t.hp <= 0 || n <= 0) return;
          ((t.hp = Math.max(0, t.hp - n)), t.hp || (t.state |= e.DEAD));
          let o = {
            targetId: t.id,
            attackerId: r,
            amount: n,
            part: `torso`,
            weapon: i,
            pos: a,
            damageBearing: j(t.pos, a),
            headshot: !1,
            fatal: t.hp === 0,
          };
          (d.events.emit(`player:damage`, o),
            G(t.id, `player:damage`, o),
            G(r, `player:damage`, o));
        };
      d.events.on(`player:damage`, (e) => {
        if (!e?.fatal) return;
        let t = _.get(e.targetId),
          n = (t && t.seat === 0 ? f.get(t.id) : null)?.v;
        if (
          !n ||
          n.hp <= 0 ||
          !h[n.weapon]?.air ||
          n.pos[1] - l(E, n.pos[0], n.pos[2], n.pos[1]) <= 2
        )
          return;
        let r = E.get(e.attackerId);
        r &&
          r.team !== n.team &&
          K(n, n.hp, {
            attackerId: r.id,
            sourceTeam: r.team,
            weapon: e.weapon ?? `Pilot killed`,
            pos: n.pos,
            kind: `pilot`,
            weaponId: e.weaponId ?? null,
          });
      });
      function J(e, t, n, r, i, a) {
        let o = E.get(t.attacker),
          s =
            o &&
            o === t.shooter &&
            o.owner === t.owner &&
            (C.get(o) ?? 0) === t.epoch
              ? o.id
              : null;
        for (let a of E.byType(`soldier`))
          a.team !== t.team &&
            q(
              a,
              g(E, e, a, { blastRadius: n, damage: r, core: t.core }),
              s,
              i === `wreck` ? `Vehicle destroyed` : `Vehicle cannon`,
              e,
            );
        O(`explosion`, {
          pos: e,
          radius: n,
          strength: t.armor ?? 1.4,
          scale: t.demolition ?? 1,
          kind: i ?? t.kind ?? `shell`,
          directVehicleId: a,
          projectileId: w++,
          weaponId: 9,
          sourceTeam: t.team,
          attackerId: s,
          weapon: i === `wreck` ? `Vehicle destroyed` : `Vehicle cannon`,
        });
      }
      let Y = 2 ** 53 - 1;
      function ne(e, t) {
        let n = h[t.weapon],
          r = e.destroyedBy,
          i = E.time.tick,
          a = () => {
            for (let n of e.seats.slice()) {
              let e = E.get(n);
              e &&
                (I(e, !0),
                q(
                  e,
                  250,
                  r?.attackerId ?? null,
                  r?.weapon ?? `Vehicle destroyed`,
                  r?.pos ?? t.pos,
                ));
            }
          };
        if (!(n.air && t.pos[1] - l(E, t.pos[0], t.pos[2], t.pos[1]) > 2)) {
          (a(),
            J(t.pos, { team: t.team, attacker: null }, 6, 100, `wreck`),
            (e.respawn = i + 600),
            n.air &&
              ((t.ext.down = { mode: `ground`, landed: !0 }),
              O(`vehicle:crashland`, {
                vehicleId: t.id,
                pos: t.pos.slice(),
                yaw: t.yaw,
                speed: 0,
                mode: `ground`,
              })));
          return;
        }
        if (r?.kind === `pilot`) {
          (a(),
            J(
              t.pos,
              { team: t.team, attacker: null, demolition: 0.6 },
              5,
              60,
              `wreck`,
            ),
            (t.ext.down = { mode: `shatter`, spin: 0.6, dir: 1 }),
            (t.ext.spin = null),
            (e.respawn = Y),
            (e.downSince = i),
            O(`vehicle:wreck`, {
              vehicleId: t.id,
              mode: `shatter`,
              pos: t.pos.slice(),
              vel: t.vel.slice(),
              yaw: t.yaw,
            }));
          return;
        }
        let o =
            r?.weaponId === 10 || r?.kind === `shell`
              ? 0.5
              : r?.kind === `rocket`
                ? 0.3
                : 0,
          s = d.rng.range(0, 1) < o,
          c = (t.ext.spin?.[1] ?? d.rng.range(-1, 1)) < 0 ? -1 : 1;
        (s
          ? (a(),
            J(
              t.pos,
              { team: t.team, attacker: null, demolition: 1.25 },
              6,
              100,
              `wreck`,
            ),
            (t.ext.down = { mode: `burst`, spin: 1.9, dir: c }))
          : (J(
              [
                t.pos[0] + Math.sin(t.yaw) * n.l * 0.45,
                t.pos[1] + n.h * 0.6,
                t.pos[2] + Math.cos(t.yaw) * n.l * 0.45,
              ],
              { team: t.team, attacker: null, demolition: 0.3, armor: 0.4 },
              3,
              25,
              `wreck`,
            ),
            (t.ext.down = { mode: `spin`, spin: 1.5, dir: c })),
          (t.ext.spin = null),
          (e.respawn = Y),
          (e.downSince = i),
          O(`vehicle:wreck`, {
            vehicleId: t.id,
            mode: t.ext.down.mode,
            pos: t.pos.slice(),
            vel: t.vel.slice(),
            yaw: t.yaw,
          }));
      }
      function re(e, t, n) {
        let r = t.ext.down?.mode,
          i = e.destroyedBy,
          a = n >= 14 ? 250 : n <= 5 ? 12 : Math.round(12 + (n - 5) * 9);
        for (let n of e.seats.slice()) {
          let e = E.get(n);
          e &&
            (I(e, !0),
            q(
              e,
              a,
              i?.attackerId ?? null,
              i?.weapon ?? `Helicopter crash`,
              t.pos,
            ));
        }
        (r === `spin`
          ? J(
              t.pos,
              { team: t.team, attacker: null, demolition: 0.35, armor: 0.6 },
              7,
              45,
              `wreck`,
            )
          : J(
              t.pos,
              { team: t.team, attacker: null, demolition: 0.15, armor: 0.3 },
              3,
              15,
              `wreck`,
            ),
          O(`vehicle:crashland`, {
            vehicleId: t.id,
            pos: t.pos.slice(),
            yaw: t.yaw,
            speed: n,
            mode: r,
          }),
          (e.respawn = E.time.tick + 600));
      }
      (d.events.on(`explosion`, (e) => {
        for (let { v: t } of f.values()) {
          let n;
          if (
            e?.directVehicleId === t.id &&
            e.kind === `shell` &&
            Array.isArray(e.pos)
          ) {
            if (t.weapon === 2) {
              let r = e.pos[0] - t.pos[0],
                i = e.pos[2] - t.pos[2];
              n =
                r * Math.sin(t.yaw) + i * Math.cos(t.yaw) > h[t.weapon].l * 0.2
                  ? 1800
                  : 950;
            } else n = 2200;
          } else
            n = ee(
              E,
              t,
              h[t.weapon].air && e?.airStrength != null
                ? { ...e, strength: e.airStrength }
                : e,
            );
          if (n > 0 && e?.kind === `rocket`) {
            let r = Array.isArray(e.pos)
              ? Math.hypot(
                  t.pos[0] - e.pos[0],
                  t.pos[1] + h[t.weapon].h * 0.5 - e.pos[1],
                  t.pos[2] - e.pos[2],
                )
              : 1 / 0;
            e.weaponId === 10 && (e.targetId === t.id || r < 5)
              ? (n = Math.max(n, t.hp))
              : h[t.weapon].air && (n = Math.min(n, t.maxHp * 0.34));
          }
          n > 0 &&
            t.hp > 0 &&
            K(t, n, {
              attackerId: e.attackerId,
              sourceTeam: e.sourceTeam,
              weapon: e.weapon ?? e.kind ?? `Explosion`,
              pos: e.pos,
              normal: e.normal,
              kind: e.kind ?? null,
              weaponId: e.weaponId ?? null,
            });
        }
      }),
        d.events.on(`net:input`, ({ entity: e, input: n }) => {
          if (!e) return;
          let r = !!(n.buttons & t.INTERACT),
            i = b.get(e.id);
          if ((b.set(e.id, r), r && !i && L(e), _.has(e.id))) {
            let r = _.get(e.id),
              i = f.get(r.id),
              a = !!(n.buttons & t.FIRE);
            (i &&
              r.seat === 0 &&
              a &&
              !(v.get(e.id)?.input.buttons & t.FIRE) &&
              T(E, i, e, O),
              v.set(e.id, { input: n, tick: E.time.tick }));
          }
        }),
        d.events.on(`player:spawn`, ({ entityId: e }) => {
          P(e);
          let t = E.get(e);
          t && C.set(t, (C.get(t) ?? 0) + 1);
        }),
        d.events.on(`net:clientLeft`, ({ client: e }) => {
          let t = E.get(e.entityId);
          (t && I(t, !0), P(e.entityId));
        }),
        d.events.on(`world:despawn`, ({ id: e }) => P(e)));
      let X = new Map();
      function ie(t, r, a) {
        let o = c(r);
        if (o <= 0) return;
        let s = h[r.weapon].air
          ? Math.hypot(r.vel[0], r.vel[2])
          : Math.abs(r.ext?.speed ?? 0);
        for (let t of E.byType(`soldier`)) {
          if (
            t.hp <= 0 ||
            t.state & (e.DEAD | e.IN_VEHICLE) ||
            t.team < 0 ||
            t.team === r.team
          )
            continue;
          let c = r.id * 65536 + t.id,
            l = X.get(c) ?? 0;
          if (!i(r, t, 0.4, n[t.stance | 0] ?? n[0])) {
            l && E.time.tick >= l && X.delete(c);
            continue;
          }
          E.time.tick < l ||
            (X.set(c, E.time.tick + 45),
            q(t, o, a?.id ?? null, `Roadkill`, r.pos.slice()),
            O(`vehicle:crash`, {
              vehicleId: r.id,
              pos: t.pos.slice(),
              speed: s,
            }));
        }
      }
      let Z = new Set(),
        Q = new Map(),
        ae = (e, t) => ({
          impact(n) {
            let r = E.time.tick,
              i = String(n.id ?? ``);
            if (i.startsWith(`vehicle-`)) {
              let a = E.get(Number(i.slice(8))),
                o = f.get(a?.id);
              if (o && h[a.weapon]?.air && a.hp > 0) {
                let i = Math.min(t.id, a.id) * 256 + Math.max(t.id, a.id);
                if (r >= (Q.get(i) ?? 0)) {
                  Q.set(i, r + 30);
                  let s = n.normal,
                    c =
                      n.speed + Math.max(0, a.vel[0] * s[0] + a.vel[2] * s[2]),
                    l = E.get(e.seats[0]),
                    d = E.get(o.seats[0]);
                  for (let [e, r, i] of [
                    [a, l, -1],
                    [t, d, 1],
                  ]) {
                    let t = u(e.maxHp, c);
                    e.hp <= 0 ||
                      !(t > 0) ||
                      (K(e, Math.min(e.hp, t), {
                        attackerId: r?.id ?? null,
                        weapon: `Mid-air collision`,
                        pos: n.pos,
                      }),
                      e.hp > 0 &&
                        p(
                          e,
                          c,
                          s.map((e) => e * i),
                        ));
                  }
                }
              }
            }
            r < (e.impactTick ?? 0) ||
              ((e.impactTick = r + 8),
              O(`vehicle:impact`, {
                vehicleId: t.id,
                pos: n.pos,
                speed: Math.round(n.speed * 10) / 10,
                normal: n.normal,
                rotor: !!n.rotor,
                hit: i || null,
              }));
          },
          crush(e, n) {
            (E.map.removeCollider(e.id), Z.add(e.id));
            let r = e.movementAabb ?? e.aabb;
            O(`prop:broken`, {
              id: e.id,
              cls: n,
              surface: e.surface ?? null,
              pos: [(r[0] + r[3]) / 2, r[1], (r[2] + r[5]) / 2],
              vehicleId: t.id,
              speed: Math.abs(t.ext?.speed ?? 0),
            });
          },
          ram(n, r) {
            let i = m(t) * r;
            i < 30 ||
              E.time.tick < (e.ramTick ?? 0) ||
              ((e.ramTick = E.time.tick + 20),
              d.modules.get(`destruction`)?.ram?.(n, Math.min(900, i * 12)),
              O(`vehicle:crash`, { vehicleId: t.id, pos: n, speed: r }));
          },
        }),
        $ = new Map();
      (d.events.on(`net:rpc`, ({ client: e, rpc: t }) => {
        if (t?.name !== `vehicle:seat` || !e) return;
        let n = E.get(e.entityId);
        n && U(n, +t.data?.dir || 1);
      }),
        d.events.on(`net:rpc`, ({ client: e, rpc: t }) => {
          t?.name === `prop:sync` &&
            e &&
            Z.size &&
            (E.time.tick < ($.get(e.id) ?? -1) ||
              ($.set(e.id, E.time.tick + 60),
              D?.sendEvent?.(e.id, `prop:state`, { ids: [...Z] })));
        }),
        d.events.on(`net:clientLeft`, ({ client: e }) => $.delete(e?.id)));
      let oe = {
        fleet: f,
        riders: _,
        inputs: v,
        lastInteract: b,
        rounds: x,
        lives: C,
        sync: M,
        exit: I,
        damage: q,
        damageVehicle: K,
        explosion: J,
        wreck: ne,
        crash: re,
        respawnClear: F,
        rollModel: k,
        sendToEntity: G,
        roadkill: ie,
        hullHooks: ae,
        broken: Z,
      };
      if (
        (H.set(E, oe),
        Object.assign(this.api, {
          spawnVehicle: A,
          enter: L,
          exit: I,
          changeSeat: U,
          deploymentSeat: W,
          deployInto: te,
          stats: () => ({ vehicles: f.size, occupied: _.size }),
          getFleet: () => f,
          getSpotView(t) {
            let n = _.get(t),
              r = n ? f.get(n.id) : null,
              i = v.get(t),
              a = E.get(t),
              o = r?.v;
            if (
              !n ||
              !o ||
              o.hp <= 0 ||
              !a ||
              a.hp <= 0 ||
              a.state & e.DEAD ||
              E.time.tick - (i?.tick ?? -999) > 20
            )
              return null;
            let s = i.input;
            return {
              origin: [
                a.pos[0],
                a.pos[1] + (h[o.weapon].air ? y : 1.25),
                a.pos[2],
              ],
              yaw: +s.yaw || 0,
              pitch: +s.pitch || 0,
              vehicleId: o.id,
              seat: n.seat,
            };
          },
          getMotion(t) {
            let n = _.get(t),
              r = n?.seat === 0 ? f.get(n.id) : null,
              i = r?.v,
              a = E.get(t);
            return !i ||
              i.hp <= 0 ||
              !a ||
              a.hp <= 0 ||
              a.state & e.DEAD ||
              r.motionDriver !== t ||
              !(r.motionSeq > 0)
              ? null
              : {
                  id: i.id,
                  weapon: i.weapon,
                  tick: r.motionTick,
                  inputSeq: r.motionSeq,
                  pos: i.pos.slice(),
                  vel: i.vel.slice(),
                  yaw: i.yaw,
                  speed: i.ext.speed ?? 0,
                  hp: i.hp,
                  spin: i.ext.spin?.[0] > 0 ? i.ext.spin.slice() : [0, 0],
                };
          },
        }),
        d.config.vehicles)
      ) {
        let e = d.modules.get(`demo`)?.getDefinition?.()?.vehicleSpawns;
        for (let t = 0; t < 2; t++) {
          let n = t ? 1 : -1,
            r = e?.filter((e) => e.team === t),
            i = e
              ? r
              : [0, 1, 2, 3, 4].map((e) => ({
                  team: t,
                  type: e,
                  x: n * (e < 3 ? 299 : 328),
                  z: e < 3 ? -28 + e * 24 : 60 + (e - 3) * 28,
                }));
          for (let e of i) {
            if (e.y != null) {
              let n = [e.x, e.y, e.z];
              A(e.type, n, t, { unarmed: e.unarmed, yaw: e.yaw });
              continue;
            }
            for (let r = 0; r < 10; r++) {
              let i = e.x + n * r * 3,
                a = [i, E.map.getHeight(i, e.z), e.z],
                o = {
                  id: -1,
                  pos: a,
                  yaw: t ? Math.PI / 2 : -Math.PI / 2,
                  weapon: e.type,
                };
              if (a[1] > E.map.waterLevel + 0.5 && !s(E, o, a)) {
                A(e.type, a, t, { unarmed: e.unarmed });
                break;
              }
            }
          }
        }
        for (let t of e?.filter((e) => e.team < 0) ?? []) {
          let e = [t.x, E.map.getHeight(t.x, t.z), t.z];
          e[1] > E.map.waterLevel + 0.5 &&
            !s(E, { id: -1, pos: e, yaw: t.yaw ?? 0, weapon: t.type }, e) &&
            A(t.type, e, -1, { yaw: t.yaw ?? 0 });
        }
      }
    },
    tick(n, r) {
      let i = H.get(n.world);
      if (!i) return;
      let o = n.world;
      for (let s of i.fleet.values()) {
        let c = s.v,
          l = h[c.weapon];
        s.neutral &&
          c.team >= 0 &&
          s.seats.every((e) => e == null) &&
          (c.team = -1);
        for (let t = 0; t < s.seats.length; t++) {
          let n = s.seats[t],
            r = o.get(n);
          n != null &&
            (!r || r.hp <= 0 || !(r.state & e.IN_VEHICLE)) &&
            (r ? i.exit(r, !0) : ((s.seats[t] = null), i.riders.delete(n)));
        }
        if (c.hp <= 0) {
          if (
            (s.respawn || ((c.state = e.DEAD), i.wreck(s, c)),
            d(c, o, r) && i.sync(c),
            l.air && s.respawn === 2 ** 53 - 1)
          ) {
            for (let e = 0; e < s.seats.length; e++) {
              let t = o.get(s.seats[e]);
              t && ((t.pos = a(c, e)), (t.vel = c.vel.slice()));
            }
            (c.ext.impact != null || o.time.tick - s.downSince > 1200) &&
              (i.crash(s, c, c.ext.impact ?? 0), (c.ext.impact = null));
          }
          o.time.tick >= s.respawn &&
            i.respawnClear(s) &&
            ((c.seat = i.rollModel()),
            R(s),
            (s.destroyedBy = null),
            N(s, !!n.config.local),
            i.sync(c));
          continue;
        }
        if (s.stowed != null) {
          (o.time.tick - s.stowed >= 30 &&
            ((c.pos = s.home.slice()), (c.yaw = s.homeYaw ?? c.yaw)),
            o.time.tick >= s.respawn &&
              i.respawnClear(s) &&
              ((c.seat = i.rollModel()),
              R(s),
              (s.destroyedBy = null),
              N(s, !!n.config.local)),
            i.sync(c));
          continue;
        }
        if (l.air && I(s, o)) {
          (L(s, o.time.tick), i.sync(c));
          continue;
        }
        if (!l.air && I(s, o) && i.respawnClear(s)) {
          (R(s), N(s, !!n.config.local), i.sync(c));
          continue;
        }
        let u = o.get(s.seats[0]),
          p = u ? i.inputs.get(u.id) : null,
          m = p && o.time.tick - p.tick < 20 ? p.input : null;
        ((c.owner = u?.owner ?? -1),
          A(s, o.time.tick, r),
          f(c, m, o, r, i.hullHooks(s, c)),
          (s.motionDriver = u?.id ?? null),
          (s.motionTick = o.time.tick),
          m && (s.motionSeq = m.seq ?? 0),
          i.sync(c),
          o.time.tick < (s.flashUntil ?? 0) && (c.state |= e.FIRING),
          i.roadkill(s, c, u),
          (s.mode =
            c.weapon === 2 &&
            u &&
            m &&
            m.slot === 1 &&
            !o.players.get(u.owner)?.isBot
              ? 1
              : 0),
          s.mode ? (c.state |= e.ADS) : (c.state &= ~e.ADS));
        let g = !!l.gun && !c.ext.unarmed,
          y = m && g ? x(c, m.yaw, m.pitch, o) : null;
        if (m) {
          c.pitch = y?.pitch ?? m.pitch;
          let e = y?.yaw ?? m.yaw;
          c.stance = Math.round(
            (((((e - c.yaw) % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2)) /
              (Math.PI * 2)) *
              255,
          );
        }
        i.sync(c);
        for (let t = 0; t < s.seats.length; t++) {
          let n = o.get(s.seats[t]);
          n &&
            ((n.pos = a(c, t)),
            (n.vel = c.vel.slice()),
            (n.state = e.IN_VEHICLE),
            (n.seat = c.id),
            z(c, n));
        }
        if (
          c.hp > 0 &&
          m &&
          u &&
          s.mode === 1 &&
          !y.hullBlocked &&
          !y.limited &&
          O(s, 1) &&
          (s.unlimited || s.mgAmmo > 0) &&
          m.buttons & t.FIRE &&
          o.time.tick >= (s.mgNextFire ?? 0)
        ) {
          ((s.mgNextFire = o.time.tick + 6),
            (s.lastShot = o.time.tick),
            s.unlimited || s.mgAmmo--,
            D(s, 1, o.time.tick));
          let t = 0.011,
            r = n.rng,
            a = [r.range(-0.011, t), r.range(-0.011, t), r.range(-0.011, t)],
            l = y.dir.map((e, t) => e + a[t]),
            d = Math.hypot(...l),
            f = l.map((e) => e / d),
            p = y.muzzle,
            m = o.map.raycast(p, f, 500, null, `vehicle-` + c.id),
            h =
              v(
                p,
                f,
                {
                  sorted: () =>
                    o
                      .sorted()
                      .filter(
                        (t) => !(t.state & e.IN_VEHICLE && t.seat === c.id),
                      ),
                },
                m?.dist ?? 500,
                u.id,
              ) ?? m;
          if (h) {
            let e = h.entityId == null ? null : o.get(h.entityId);
            if (e?.type === `soldier` && e.team !== c.team)
              i.damage(e, _(o, e, 30), u.id, `Coaxial MG`, h.point);
            else if (e?.type === `vehicle` && e.team !== c.team && e.hp > 0) {
              let t = _(o, e, 30);
              t > 0 &&
                i.damageVehicle(e, t, {
                  attackerId: u.id,
                  sourceTeam: c.team,
                  weapon: `Coaxial MG`,
                  pos: h.point,
                  normal: h.normal,
                });
            }
            n.events.emit(`weapon:hit`, {
              entityId: u.id,
              weaponId: `coax`,
              point: h.point,
              normal: h.normal,
              surface: h.surface || `dirt`,
              targetId: h.entityId,
            });
          }
          ((s.flashUntil = o.time.tick + 3),
            (c.state |= e.FIRING),
            n.events.emit(`vehicle:fire`, {
              vehicleId: c.id,
              pos: p,
              dir: f,
              mg: !0,
              dist: h?.dist ?? 500,
            }));
        } else if (
          c.hp > 0 &&
          m &&
          u &&
          g &&
          s.mode === 0 &&
          !y.hullBlocked &&
          !y.limited &&
          O(s, 0) &&
          (s.unlimited || s.ammo > 0) &&
          m.buttons & t.FIRE &&
          o.time.tick >= s.nextFire &&
          i.rounds.length < 32
        ) {
          ((s.nextFire = o.time.tick + l.cooldown),
            (s.lastShot = o.time.tick),
            s.unlimited || s.ammo--,
            D(s, 0, o.time.tick));
          let { dir: t, pivot: r, muzzle: a } = y,
            d = C(c.weapon).length,
            f = w(c.weapon),
            p = {
              ...f,
              pos: a,
              vel: t.map((e) => e * f.speed),
              team: c.team,
              attacker: u.id,
              shooter: u,
              owner: u.owner,
              epoch: i.lives.get(u) ?? 0,
              sourceVehicle: c,
              sourceCleared: !1,
              life: 180,
            },
            m = y.barrelHit,
            h =
              v(
                r,
                t,
                {
                  sorted: () =>
                    o
                      .sorted()
                      .filter(
                        (t) => !(t.state & e.IN_VEHICLE && t.seat === c.id),
                      ),
                },
                m?.dist ?? d,
                u.id,
              ) ?? m;
          if (h) {
            let e =
              h.entityId != null && o.get(h.entityId)?.type === `vehicle`
                ? h.entityId
                : void 0;
            i.explosion(
              h.point.map((e, n) => e - t[n] * 0.02),
              p,
              p.radius,
              p.power,
              void 0,
              e,
            );
          } else
            ((p.visual = o.spawn(`projectile`, {
              weapon: 240,
              pos: a.slice(),
              vel: p.vel.slice(),
              team: c.team,
              hp: 1,
              maxHp: 1,
            })),
              i.rounds.push(p));
          ((s.flashUntil = o.time.tick + 6),
            (c.state |= e.FIRING),
            n.events.emit(`vehicle:fire`, { vehicleId: c.id, pos: a, dir: t }),
            c.weapon === 2 &&
              n.modules.get(`netcode`)?.broadcastEvent?.(`vehicle:shot`, {
                vehicleId: c.id,
                tick: o.time.tick,
                pos: a,
                dir: t,
              }));
        }
        if ((P(s, o, r), o.time.tick % 30 == 0))
          for (let e of n.clients?.values?.() ?? []) {
            let t = s.seats.indexOf(e.entityId);
            t < 0 ||
              n.modules.get(`netcode`)?.sendEvent?.(e.id, `vehicle:status`, {
                entityId: e.entityId,
                vehicleId: c.id,
                tick: o.time.tick,
                seat: t,
                occupied: s.seats.filter((e) => e != null).length,
                cooldown: Math.max(0, s.nextFire - o.time.tick) / 60,
                cycle: (l.cooldown ?? 0) / 60,
                ammo: s.ammo,
                capacity: M[c.weapon],
                unlimited: s.unlimited,
                unarmed: !!c.ext.unarmed,
                servicing: s.servicing,
                mode: s.mode ?? 0,
                mgAmmo: s.mgAmmo,
                mgCapacity: 400,
                heat: E(s),
                home: s.home.slice(),
                serviceWait:
                  Math.max(
                    0,
                    300 - (o.time.tick - Math.max(s.lastShot, s.lastDamage)),
                  ) / 60,
              });
          }
      }
      for (let t = i.rounds.length - 1; t >= 0; t--) {
        let n = i.rounds[t],
          a = Math.hypot(...n.vel),
          s = n.vel.map((e) => e / a),
          c = b(o, n),
          l = o.map.raycast(n.pos, s, a * r, null, c),
          u = c
            ? {
                sorted: () =>
                  o
                    .sorted()
                    .filter(
                      (t) =>
                        !(
                          t.state & e.IN_VEHICLE &&
                          t.seat === n.sourceVehicle.id
                        ),
                    ),
              }
            : o,
          d = v(n.pos, s, u, l?.dist ?? a * r, n.attacker) ?? l;
        if ((n.life--, d || n.life <= 0)) {
          if (d) {
            let e =
              d.entityId != null && o.get(d.entityId)?.type === `vehicle`
                ? d.entityId
                : void 0;
            i.explosion(
              d.point.map((e, t) => e - s[t] * 0.02),
              n,
              n.radius,
              n.power,
              void 0,
              e,
            );
          }
          (n.visual &&
            o.get(n.visual.id) === n.visual &&
            o.despawn(n.visual.id),
            i.rounds.splice(t, 1));
        } else
          ((n.pos = n.pos.map((e, t) => e + n.vel[t] * r)),
            (n.vel[1] -= 3 * r),
            n.visual &&
              ((n.visual.pos = n.pos.slice()), (n.visual.vel = n.vel.slice())));
      }
    },
    dispose(e) {
      let t = H.get(e.world);
      if (t) {
        for (let n of t.rounds)
          n.visual &&
            e.world.get(n.visual.id) === n.visual &&
            e.world.despawn(n.visual.id);
        for (let { v: n } of t.fleet.values())
          (e.world.map.removeCollider(`vehicle-` + n.id),
            e.world.despawn(n.id));
        H.delete(e.world);
      }
    },
  };
