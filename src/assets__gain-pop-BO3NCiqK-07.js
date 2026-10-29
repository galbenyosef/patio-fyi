// assets__gain-pop-BO3NCiqK 07 — pos
// Lines 1362-1682 of readable/assets__gain-pop-BO3NCiqK.pretty.js (statement-aligned).
function lt(e, t = {}) {
  let n = J(),
    r = J(`smoke`),
    i = at(e.camera, n),
    a = at(e.camera, r),
    o = Ke(e),
    c = i,
    l = `frag`,
    u = new Map(),
    p = [],
    m = () => e.modules.get(`audio`),
    h = () => e.modules.get(`player`)?.getLocalEntity?.(),
    g = -1,
    _ = -1,
    v = 0,
    y = !1,
    b = !1,
    x = !1,
    S = 0,
    C = null,
    T = null,
    E = 2,
    D = null,
    O = null,
    k = -1 / 0,
    A = !1,
    j = 0,
    M = () => {
      ((g = _ = -1),
        (v = 0),
        (T = null),
        (b = !1),
        (x = !1),
        (C = null),
        c.update(-1, -1, !1, 0, !1));
    },
    N = n.spoon(),
    P = new s(),
    F = new s(),
    I = 0;
  ((N.visible = !1), N.scale.setScalar(1.2), e.scene.add(N));
  let L = new s(),
    R = new w(),
    te = new ee(),
    z = !1,
    ne = 0;
  function B() {
    (c.prop.getWorldPosition(N.position),
      c.prop.getWorldQuaternion(N.quaternion),
      P.set(2.2, 2.6, -0.6).applyQuaternion(e.camera.quaternion),
      F.set(14, 3, 22),
      (I = 1.4),
      (N.visible = !0),
      m()?.play(`grenade_spoon`, { pos: N.position.toArray(), volume: 0.75 }));
  }
  let V = (t, n = `info`, r = 2) =>
    e.events.emit(`ui:message`, { kind: n, text: t, ttl: r });
  (p.push(
    e.events.on(`grenade:status`, (e) => {
      if (!e || !Number.isInteger(e.remaining)) return;
      let t = h();
      if (
        !(t && e.entityId !== t.id) &&
        !(O === e.entityId && D != null && e.life < D)
      ) {
        if (
          (e.kind &&
            e.kind !== l &&
            (M(),
            (l = e.kind === `smoke` ? `smoke` : `frag`),
            (c = l === `smoke` ? a : i)),
          (D = e.life),
          (O = e.entityId),
          (E = e.remaining),
          e.reason === `spawned`)
        ) {
          M();
          return;
        }
        if (e.reason === `windup` || e.reason === `pickup`) {
          if (
            ((x = !0),
            Number.isFinite(e.fuse) && (T = e.fuse),
            e.reason === `pickup` &&
              !y &&
              g >= 0 &&
              ((y = !0), (g = Math.min(g, Je * 0.3))),
            e.reason === `windup` && y && (y = !1),
            g < 0)
          )
            return;
          e.reason === `pickup` && V(`THROWING IT BACK`, `warn`, 1.4);
          return;
        }
        if (e.reason === `thrown`) {
          g >= 0 && _ < 0 && ((_ = 0), (v = 0));
          return;
        }
        e.reason !== `restocked` &&
          (M(),
          e.reason === `empty`
            ? (V(`NO GRENADES LEFT`), m()?.play(`ui_error`, { volume: 0.5 }))
            : e.reason === `cancelled`
              ? V(`THROW CANCELLED`)
              : e.reason === `busy` && V(`GRENADE TEMPORARILY UNAVAILABLE`));
      }
    }),
  ),
    p.push(
      e.events.on(`player:local`, () => {
        if ((M(), (E = 2), !z && ++ne >= 2 && l === `frag`)) {
          z = !0;
          {
            let e = Me(`grenade`, `G`);
            V(
              `${e} · FRAG — HOLD ${e} TO COOK · ${e} NEXT TO A LIVE GRENADE THROWS IT BACK`,
              `hint`,
              6,
            );
          }
        }
      }),
    ),
    p.push(
      e.events.on(`explosion`, (e) => {
        e?.projectileId != null &&
          e.pos &&
          m()?.play(st(e), { pos: e.pos, volume: 0.85 });
      }),
    ));
  let re = (t) => {
    let n = e.world.get(t);
    return n && n.id !== h()?.id ? [n.pos[0], n.pos[1] + 1.4, n.pos[2]] : null;
  };
  (p.push(
    e.events.on(`grenade:windup`, (e) => {
      let t = re(e?.entityId);
      t && !e.returned && m()?.play(`grenade_pin`, { pos: t, volume: 0.8 });
    }),
  ),
    p.push(
      e.events.on(`grenade:release`, (e) => {
        let t = re(e?.entityId);
        t && m()?.play(`grenade_spoon`, { pos: t, volume: 0.7 });
      }),
    ));
  function H(t = h()) {
    if (l !== `frag` || !t || t.hp <= 0 || t.state & (d.DEAD | d.IN_VEHICLE))
      return null;
    let n = null,
      r = 1 / 0;
    for (let i of e.world.byType?.(`projectile`) ?? e.world.sorted()) {
      if (i.type !== `projectile` || i.weapon !== X.id || !Se(e.world, t, i))
        continue;
      let a = Math.hypot(i.pos[0] - t.pos[0], i.pos[2] - t.pos[2]);
      a < r && ((n = i), (r = a));
    }
    return n;
  }
  function ie() {
    if (e.modules.get(`weapons`)?.isThermalBusy?.()) return !1;
    let n = h();
    if (
      !n ||
      n.hp <= 0 ||
      n.state & (d.DEAD | d.IN_VEHICLE) ||
      e.config.showcase
    )
      return !1;
    let r = e.world.time.sim;
    if (g >= 0 || r - k < 0.4) return !1;
    let i = H(n);
    return !i && E <= 0
      ? (V(`NO GRENADES LEFT`),
        m()?.play(`ui_error`, { volume: 0.5 }),
        (k = r),
        !1)
      : D == null ||
          O !== n.id ||
          !(
            e.modules.get(`netcode`)?.sendRpc?.(`grenade:throw`, {
              entityId: n.id,
              life: D,
              id: ++j,
            }) >= 0
          )
        ? !1
        : (t.interruptReload?.(),
          (k = r),
          (g = 0),
          (_ = -1),
          (v = 0),
          (b = !1),
          (x = !1),
          (S = 0),
          (C = n.id),
          (y = !!i),
          (T = y ? null : (l === `smoke` ? Y : X).fuseTicks / 60),
          (A = !1),
          y || m()?.play(`grenade_pin`, { volume: 0.9 }),
          !0);
  }
  function ae() {
    let t = h();
    return g < 0 || b || !t || t.id !== C
      ? !1
      : ((b = !0),
        e.modules
          .get(`netcode`)
          ?.sendRpc?.(`grenade:release`, { entityId: t.id, life: D, id: j }),
        !0);
  }
  let U = new Map();
  return {
    requestThrow: ie,
    releaseThrow: ae,
    grabTarget: H,
    kind: () => l,
    remaining: () => E,
    busy: () => g >= 0,
    progress: () => g,
    fuse: () => (g >= 0 && _ < 0 && T != null ? T : null),
    cooking: () => g >= 0 && _ < 0 && g >= (y ? Je : qe),
    lower: () => (g < 0 ? 0 : c.pose.lower),
    sway: () => (g < 0 ? null : c.pose),
    filter(e) {
      return (g >= 0 && (e.buttons &= ~(f.FIRE | f.ADS | f.RELOAD)), e);
    },
    present: (e) => c.update(g, _, y, v, e),
    update(t) {
      if ((o.update(), g >= 0)) {
        let e = h();
        if (
          ((S += t),
          !e ||
            e.id !== C ||
            e.hp <= 0 ||
            e.state & (d.DEAD | d.IN_VEHICLE) ||
            (!x && S > 1.5))
        )
          M();
        else if (_ < 0) {
          ((g += t), T != null && (T = Math.max(0, T - t)));
          let e = y ? Je : qe;
          (g >= e && (v += t), b && g >= e && ((_ = 0), (v = 0)));
        } else {
          let e = _;
          ((_ += t),
            e < 0.085 && _ >= 0.085 && !y && !A && ((A = !0), B()),
            _ >= Z && M());
        }
      }
      if (I > 0) {
        ((I -= t),
          (P.y -= 9.81 * t),
          N.position.addScaledVector(P, t),
          R.setFromEuler(te.set(F.x * t, F.y * t, F.z * t)),
          N.quaternion.multiply(R));
        let n = e.world.map?.getHeight?.(N.position.x, N.position.z);
        (Number.isFinite(n) &&
          N.position.y < n + 0.01 &&
          ((N.position.y = n + 0.01),
          P.multiplyScalar(0.3),
          (P.y = Math.abs(P.y)),
          F.multiplyScalar(0.4)),
          I <= 0 && (N.visible = !1));
      }
      let i = new Set();
      for (let a of e.world.byType?.(`projectile`) ?? e.world.sorted()) {
        if (
          a.type !== `projectile` ||
          (a.weapon !== X.id && a.weapon !== Y.id) ||
          (a.weapon === Y.id && a.stance === 1)
        )
          continue;
        i.add(a.id);
        let o = u.get(a.id);
        (o ||
          ((o = (a.weapon === Y.id ? r : n).build({ spoon: !1, ring: !1 })),
          o.scale.setScalar(a.weapon === Y.id ? 1 : ct),
          o.traverse((e) => {
            e.castShadow = !0;
          }),
          e.scene.add(o),
          u.set(a.id, o),
          U.set(a.id, { vy: a.vel[1], speed: Math.hypot(...a.vel), quiet: 0 })),
          o.position.fromArray(a.pos));
        let s = Math.hypot(...a.vel);
        s > 0.05 &&
          (L.set(a.vel[2], 0, -a.vel[0]).normalize(),
          R.setFromAxisAngle(L, (-s * t) / (X.radius * 1.4)),
          o.quaternion.premultiply(R));
        let c = U.get(a.id);
        c.quiet -= t;
        let l = Math.max(
          c.vy < -1 && a.vel[1] > c.vy + 1.5 ? -c.vy : 0,
          c.speed - s > 2 ? c.speed - s : 0,
        );
        (l > 0 &&
          c.quiet <= 0 &&
          (m()?.play(`grenade_bounce`, {
            pos: a.pos,
            volume: Math.min(1, 0.25 + l / 9),
          }),
          (c.quiet = 0.08)),
          (c.vy = a.vel[1]),
          (c.speed = s));
      }
      for (let [t, n] of u)
        i.has(t) || (e.scene.remove(n), u.delete(t), U.delete(t));
    },
    dispose() {
      for (let e of p) e();
      (i.dispose(), a.dispose(), o.dispose(), e.scene.remove(N));
      for (let t of u.values()) e.scene.remove(t);
      (u.clear(), n.dispose(), r.dispose());
    },
  };
}
var ut = 0.7,
  dt = 1.1;
