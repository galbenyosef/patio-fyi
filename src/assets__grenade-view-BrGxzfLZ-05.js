// assets__grenade-view-BrGxzfLZ 05 — pos
// Lines 1106-1407 of readable/assets__grenade-view-BrGxzfLZ.pretty.js (statement-aligned).
function Ze(e, t = {}) {
  let n = Pe(),
    r = qe(e.camera, n),
    i = new Map(),
    o = [],
    s = () => e.modules.get(`audio`),
    c = () => e.modules.get(`player`)?.getLocalEntity?.(),
    l = -1,
    u = -1,
    d = 0,
    f = !1,
    p = !1,
    m = !1,
    h = 0,
    g = null,
    v = null,
    y = 2,
    x = null,
    S = null,
    w = -1 / 0,
    T = !1,
    E = 0,
    D = () => {
      ((l = u = -1),
        (d = 0),
        (v = null),
        (p = !1),
        (m = !1),
        (g = null),
        r.update(-1, -1, !1, 0, !1));
    },
    O = n.spoon(),
    A = new k(),
    j = new k(),
    M = 0;
  ((O.visible = !1), O.scale.setScalar(1.2), e.scene.add(O));
  let ee = new k(),
    N = new b(),
    P = new C(),
    F = !1,
    te = 0;
  function ne() {
    (r.prop.getWorldPosition(O.position),
      r.prop.getWorldQuaternion(O.quaternion),
      A.set(2.2, 2.6, -0.6).applyQuaternion(e.camera.quaternion),
      j.set(14, 3, 22),
      (M = 1.4),
      (O.visible = !0),
      s()?.play(`grenade_spoon`, { pos: O.position.toArray(), volume: 0.75 }));
  }
  let I = (t, n = `info`, r = 2) =>
    e.events.emit(`ui:message`, { kind: n, text: t, ttl: r });
  (o.push(
    e.events.on(`grenade:status`, (e) => {
      if (!e || !Number.isInteger(e.remaining)) return;
      let t = c();
      if (
        !(t && e.entityId !== t.id) &&
        !(S === e.entityId && x != null && e.life < x)
      ) {
        if (
          ((x = e.life),
          (S = e.entityId),
          (y = e.remaining),
          e.reason === `spawned`)
        ) {
          D();
          return;
        }
        if (e.reason === `windup` || e.reason === `pickup`) {
          if (
            ((m = !0),
            Number.isFinite(e.fuse) && (v = e.fuse),
            e.reason === `pickup` &&
              !f &&
              l >= 0 &&
              ((f = !0), (l = Math.min(l, Ie * 0.3))),
            e.reason === `windup` && f && (f = !1),
            l < 0)
          )
            return;
          e.reason === `pickup` && I(`THROWING IT BACK`, `warn`, 1.4);
          return;
        }
        if (e.reason === `thrown`) {
          l >= 0 && u < 0 && ((u = 0), (d = 0));
          return;
        }
        e.reason !== `restocked` &&
          (D(),
          e.reason === `empty`
            ? (I(`NO GRENADES LEFT`), s()?.play(`ui_error`, { volume: 0.5 }))
            : e.reason === `cancelled`
              ? I(`THROW CANCELLED`)
              : e.reason === `busy` && I(`GRENADE TEMPORARILY UNAVAILABLE`));
      }
    }),
  ),
    o.push(
      e.events.on(`player:local`, () => {
        if ((D(), (y = 2), !F && ++te >= 2)) {
          F = !0;
          {
            let e = K(`grenade`, `G`);
            I(
              `${e} · FRAG — HOLD ${e} TO COOK · ${e} NEXT TO A LIVE GRENADE THROWS IT BACK`,
              `hint`,
              6,
            );
          }
        }
      }),
    ),
    o.push(
      e.events.on(`explosion`, (e) => {
        e?.projectileId != null &&
          e.pos &&
          s()?.play(Ye(e), { pos: e.pos, volume: 0.85 });
      }),
    ));
  let re = (t) => {
    let n = e.world.get(t);
    return n && n.id !== c()?.id ? [n.pos[0], n.pos[1] + 1.4, n.pos[2]] : null;
  };
  (o.push(
    e.events.on(`grenade:windup`, (e) => {
      let t = re(e?.entityId);
      t && !e.returned && s()?.play(`grenade_pin`, { pos: t, volume: 0.8 });
    }),
  ),
    o.push(
      e.events.on(`grenade:release`, (e) => {
        let t = re(e?.entityId);
        t && s()?.play(`grenade_spoon`, { pos: t, volume: 0.7 });
      }),
    ));
  function L(t = c()) {
    if (!t || t.hp <= 0 || t.state & (a.DEAD | a.IN_VEHICLE)) return null;
    let n = null,
      r = 1 / 0;
    for (let i of e.world.byType?.(`projectile`) ?? e.world.sorted()) {
      if (i.type !== `projectile` || i.weapon !== G.id || !W(e.world, t, i))
        continue;
      let a = Math.hypot(i.pos[0] - t.pos[0], i.pos[2] - t.pos[2]);
      a < r && ((n = i), (r = a));
    }
    return n;
  }
  function R() {
    if (e.modules.get(`weapons`)?.isThermalBusy?.()) return !1;
    let n = c();
    if (
      !n ||
      n.hp <= 0 ||
      n.state & (a.DEAD | a.IN_VEHICLE) ||
      e.config.showcase
    )
      return !1;
    let r = e.world.time.sim;
    if (l >= 0 || r - w < 0.4) return !1;
    let i = L(n);
    return !i && y <= 0
      ? (I(`NO GRENADES LEFT`),
        s()?.play(`ui_error`, { volume: 0.5 }),
        (w = r),
        !1)
      : x == null ||
          S !== n.id ||
          !(
            e.modules.get(`netcode`)?.sendRpc?.(`grenade:throw`, {
              entityId: n.id,
              life: x,
              id: ++E,
            }) >= 0
          )
        ? !1
        : (t.interruptReload?.(),
          (w = r),
          (l = 0),
          (u = -1),
          (d = 0),
          (p = !1),
          (m = !1),
          (h = 0),
          (g = n.id),
          (f = !!i),
          (v = f ? null : G.fuseTicks / 60),
          (T = !1),
          f || s()?.play(`grenade_pin`, { volume: 0.9 }),
          !0);
  }
  function z() {
    let t = c();
    return l < 0 || p || !t || t.id !== g
      ? !1
      : ((p = !0),
        e.modules
          .get(`netcode`)
          ?.sendRpc?.(`grenade:release`, { entityId: t.id, life: x, id: E }),
        !0);
  }
  let B = new Map();
  return {
    requestThrow: R,
    releaseThrow: z,
    grabTarget: L,
    remaining: () => y,
    busy: () => l >= 0,
    progress: () => l,
    fuse: () => (l >= 0 && u < 0 && v != null ? v : null),
    cooking: () => l >= 0 && u < 0 && l >= (f ? Ie : Fe),
    lower: () => (l < 0 ? 0 : r.pose.lower),
    sway: () => (l < 0 ? null : r.pose),
    filter(e) {
      return (l >= 0 && (e.buttons &= ~(_.FIRE | _.ADS | _.RELOAD)), e);
    },
    present: (e) => r.update(l, u, f, d, e),
    update(t) {
      if (l >= 0) {
        let e = c();
        if (
          ((h += t),
          !e ||
            e.id !== g ||
            e.hp <= 0 ||
            e.state & (a.DEAD | a.IN_VEHICLE) ||
            (!m && h > 1.5))
        )
          D();
        else if (u < 0) {
          ((l += t), v != null && (v = Math.max(0, v - t)));
          let e = f ? Ie : Fe;
          (l >= e && (d += t), p && l >= e && ((u = 0), (d = 0)));
        } else {
          let e = u;
          ((u += t),
            e < 0.085 && u >= 0.085 && !f && !T && ((T = !0), ne()),
            u >= Z && D());
        }
      }
      if (M > 0) {
        ((M -= t),
          (A.y -= 9.81 * t),
          O.position.addScaledVector(A, t),
          N.setFromEuler(P.set(j.x * t, j.y * t, j.z * t)),
          O.quaternion.multiply(N));
        let n = e.world.map?.getHeight?.(O.position.x, O.position.z);
        (Number.isFinite(n) &&
          O.position.y < n + 0.01 &&
          ((O.position.y = n + 0.01),
          A.multiplyScalar(0.3),
          (A.y = Math.abs(A.y)),
          j.multiplyScalar(0.4)),
          M <= 0 && (O.visible = !1));
      }
      let r = new Set();
      for (let a of e.world.byType?.(`projectile`) ?? e.world.sorted()) {
        if (a.type !== `projectile` || a.weapon !== G.id) continue;
        r.add(a.id);
        let o = i.get(a.id);
        (o ||
          ((o = n.build({ spoon: !1, ring: !1 })),
          o.scale.setScalar(Xe),
          o.traverse((e) => {
            e.castShadow = !0;
          }),
          e.scene.add(o),
          i.set(a.id, o),
          B.set(a.id, { vy: a.vel[1], speed: Math.hypot(...a.vel), quiet: 0 })),
          o.position.fromArray(a.pos));
        let c = Math.hypot(...a.vel);
        c > 0.05 &&
          (ee.set(a.vel[2], 0, -a.vel[0]).normalize(),
          N.setFromAxisAngle(ee, (-c * t) / (G.radius * 1.4)),
          o.quaternion.premultiply(N));
        let l = B.get(a.id);
        l.quiet -= t;
        let u = Math.max(
          l.vy < -1 && a.vel[1] > l.vy + 1.5 ? -l.vy : 0,
          l.speed - c > 2 ? l.speed - c : 0,
        );
        (u > 0 &&
          l.quiet <= 0 &&
          (s()?.play(`grenade_bounce`, {
            pos: a.pos,
            volume: Math.min(1, 0.25 + u / 9),
          }),
          (l.quiet = 0.08)),
          (l.vy = a.vel[1]),
          (l.speed = c));
      }
      for (let [t, n] of i)
        r.has(t) || (e.scene.remove(n), i.delete(t), B.delete(t));
    },
    dispose() {
      for (let e of o) e();
      (r.dispose(), e.scene.remove(O));
      for (let t of i.values()) e.scene.remove(t);
      (i.clear(), n.dispose());
    },
  };
}
