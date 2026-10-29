// assets__effects---y_dmg- 07 — pos
// Lines 2962-3253 of readable/assets__effects---y_dmg-.pretty.js (statement-aligned).
function ee(e, r) {
  let i = e.events;
  ((I = (t) => {
    if (t.entityId == null || t.entityId < 0) return null;
    let n = e.modules.get(`animation`)?.muzzleWorld?.(t.entityId, F);
    if (n) return [n.x, n.y, n.z];
    let r = t.dir;
    return [
      t.origin[0] + r[0] * 0.55,
      t.origin[1] + r[1] * 0.55 - 0.07,
      t.origin[2] + r[2] * 0.55,
    ];
  }),
    (L = (t) => {
      if (t.entityId == null || t.entityId < 0) return null;
      let n = e.camera?.position;
      if (
        n &&
        Math.hypot(n.x - t.origin[0], n.y - t.origin[1], n.z - t.origin[2]) > R
      )
        return null;
      let r = e.modules.get(`animation`)?.ejectWorld?.(t.entityId, F);
      return r ? [r.x, r.y, r.z] : null;
    }));
  let a = (e) => {
    if (!e?.pos) return;
    let t = u(e),
      n = e.normal ?? [0, 1, 0];
    (r.spawn(`explosion`, e.pos, n, t.blast),
      r.spawn(`collapse`, e.pos, n, t.dust));
  };
  (i.on(`vehicle:fire`, (t) => {
    if (!t?.pos || !t.dir) return;
    let n = e.world.get(t.vehicleId)?.weapon;
    if (t.mg) {
      (r.spawn(`muzzle`, t.pos, t.dir, { scale: 1.05, casing: !1 }),
        r.spawn(`tracer`, t.pos, t.dir, { dist: t.dist, speed: 600 }));
      return;
    }
    A(e.world, r, t.pos, t.dir, n === 2 ? 1 : 0.55);
  }),
    i.on(`weapon:fire`, (n) => {
      if (!n || !n.origin || !n.dir) return;
      let i = n.entityId >= 0 ? e.world.get?.(n.entityId) : null,
        a =
          e.modules.get(`weapons`)?.equippedDefinition?.(n.weaponId, i) ??
          t[n.weaponId],
        o = d(a),
        s = e.world.time.tick * M,
        l = 0,
        u = !1;
      if (o && n.entityId != null) {
        let e = z.get(n.entityId);
        (e || ((e = { h: 0, last: -9, acc: 0, fp: !1 }), z.set(n.entityId, e)),
          (u = s - e.last > 1.2),
          (l = e.h),
          (e.h += o.heat),
          (e.last = s),
          (e.fp = !!n.fp),
          (e.dir = n.dir.slice()));
      }
      if (n.muzzle !== !1) {
        let e = I(n) ?? n.origin;
        if (
          (r.spawn(`muzzle`, e, n.dir, {
            profile: o ?? void 0,
            heat: l,
            cold: u,
            casing: !1,
            style: n.flashStyle ?? `third`,
          }),
          n.casing !== !1)
        ) {
          let e = L(n);
          e && r.spawn(`casing`, e, n.dir, { exact: !0, scale: c.scale });
        }
      } else
        (n.fp &&
          o &&
          r.spawn(`muzzle`, n.origin, n.dir, {
            profile: o,
            heat: l,
            cold: u,
            lightOnly: !0,
          }),
          n.casing !== !1 && r.spawn(`casing`, n.origin, n.dir, {}));
      n.tracer !== !1 &&
        r.spawn(
          `tracer`,
          n.origin,
          n.dir,
          n.dist == null ? {} : { dist: n.dist },
        );
    }),
    i.on(`weapon:hit`, (e) => {
      e &&
        e.point &&
        r.spawn(`impact`, e.point, e.normal || [0, 1, 0], {
          surface: P(e),
          sniper: n(t[e.weaponId]),
        });
    }),
    i.on(`destruction:collapse`, (e) => {
      e &&
        e.pos &&
        r.spawn(`collapse`, e.pos, [0, 1, 0], { scale: e.scale ?? 1 });
    }),
    i.on(`destruction:damage`, (e) => {
      e &&
        e.pos &&
        r.spawn(`impact`, e.pos, e.normal || [0, 1, 0], {
          surface: e.surface || `rock`,
        });
    }));
  let o = (t) => {
    if (t?.pos) return t.pos;
    let n = t?.vehicleId ?? t?.entityId,
      r = n == null ? null : e.world.get(n);
    return r ? r.pos : null;
  };
  for (let e of [`vehicle:destroyed`, `vehicle:explode`, `vehicle:death`])
    i.on(e, (e) => {
      let t = o(e);
      t && a({ pos: t, scale: e?.scale ?? 1.3 });
    });
  for (let e of [`vehicle:enter`, `vehicle:exit`])
    i.on(e, (e) => {
      let t = o(e);
      t && r.spawn(`dust`, t, [0, 0, 1], { count: 4, scale: 1.4 });
    });
  (i.on(`vehicle:damage`, (e) => {
    let t = e?.pos || o(e);
    t && r.spawn(`impact`, t, e?.normal || [0, 1, 0], { surface: `metal` });
  }),
    i.on(`explosion`, a),
    i.on(`rocket:launch`, (t) => {
      if (![8, 9, 10].includes(t?.weaponId) || !t.pos || !t.dir) return;
      let n = t.dir.map((e) => -e),
        i = t.weaponId === 10,
        a = t.pos.map((e, t) => e + n[t] * (i ? 1.6 : 1.3));
      if (i) {
        (A(e.world, r, a, n, 0.7),
          r.spawn(`smoke`, a, n, { count: 10, scale: 1.6 }),
          r.spawn(`smoke`, t.pos, t.dir, { count: 4, scale: 1 }));
        return;
      }
      (r.spawn(`muzzle`, t.pos, t.dir, { scale: 2.6, casing: !1 }),
        A(e.world, r, a, n, 0.5),
        r.spawn(`smoke`, a, n, { count: 7, scale: 1.3 }),
        r.spawn(`smoke`, t.pos, t.dir, { count: 3, scale: 0.9 }));
    }),
    i.on(`explosion`, (e) => {
      if (e?.weaponId !== 10 || e.kind !== `rocket` || !e.pos) return;
      let t = e.pos.slice();
      setTimeout(() => {
        if (!N) return;
        let e = [t[0], t[1] + 1.6, t[2]];
        (r.spawn(`explosion`, e, [0, 1, 0], { scale: 3.6, atImpact: !0 }),
          r.spawn(`smoke`, e, [0, 1, 0], { count: 14, scale: 3 }));
        for (let e = 0; e < 6; e++) {
          let n = (e * Math.PI) / 3;
          r.spawn(`dust`, t, [Math.cos(n), 0.15, Math.sin(n)], {
            count: 4,
            scale: 2.6,
          });
        }
      }, 130);
    }));
}
function B(e, t, n) {
  if (!z.size) return;
  let r = e.world.time.tick * M,
    i = Math.exp(-n * o.cool);
  for (let [a, s] of z) {
    if (((s.h *= i), s.h < 0.02 || !e.world.get?.(a))) {
      z.delete(a);
      continue;
    }
    if (
      s.fp ||
      r - s.last < o.wispAfter ||
      s.h < o.wispFrom ||
      ((s.acc += n * o.wispRate * Math.min(1.5, s.h)), s.acc < 1)
    )
      continue;
    s.acc = 0;
    let c = e.modules.get(`animation`)?.muzzleWorld?.(a, F);
    c &&
      t.spawn(`muzzleWisp`, [c.x, c.y, c.z], s.dir ?? [0, 0, -1], {
        heat: s.h,
      });
  }
}
var V = 0.8,
  H = new Map(),
  U = 32,
  W = [0, 0, 0],
  G = new Set([
    `concrete`,
    `road`,
    `rock`,
    `stone`,
    `tile`,
    `asphalt`,
    `gravel`,
  ]),
  K = new Set([`wood`, `metal`, `carpet`, `glass`]);
function te(e, t) {
  let n = e.world.map,
    r = n.waterBounds;
  if (
    typeof n.waterLevel == `number` &&
    t[1] < n.waterLevel &&
    (!r || (t[0] >= r[0] && t[2] >= r[1] && t[0] <= r[2] && t[2] <= r[3]))
  )
    return { water: n.waterLevel };
  let i = n.raycast?.([t[0], t[1] + 0.18, t[2]], [0, -1, 0], 0.65);
  return i?.surface && i.colliderId !== `terrain` && i.colliderId !== `ground`
    ? { floor: i.surface }
    : {};
}
function ne(e, t, n, r, i) {
  let a = te(e, n.pos);
  if (a.water != null) {
    t.spawn(`splash`, [n.pos[0], a.water, n.pos[2]], r, {
      count: i ? 16 : 9,
      scale: i ? 1.4 : 1.1,
    });
    return;
  }
  if (a.floor && K.has(a.floor)) return;
  let o = a.floor && G.has(a.floor);
  t.spawn(`dust`, n.pos, r, {
    count: (i ? 9 : 5) - (o ? 3 : 0),
    scale: (i ? 1.25 : 1) * (o ? 0.7 : 1),
    surface: o ? `rock` : void 0,
    ring: i,
  });
}
function re(e, t, n) {
  let r = e.camera.position,
    i = e.world.time.tick;
  for (let a of e.world.sorted()) {
    if ((a.type !== `soldier` && a.type !== `vehicle`) || a.state & 1216)
      continue;
    let o = a.vel[0],
      s = a.vel[2],
      c = Math.hypot(o, s),
      l = a.pos[0] - r.x,
      u = a.pos[2] - r.z;
    if (l * l + u * u > 12100) continue;
    if (a.type === `soldier`) {
      let n = H.get(a.id);
      (n || ((n = { d: 0, seen: i, air: !1, vy: 0 }), H.set(a.id, n)),
        (n.seen = i));
      let r = (a.state & U) !== 0;
      if (
        (r
          ? n.air &&
            ((n.air = !1),
            n.vy < -3.5 &&
              ((W[0] = c > 0.5 ? o / c : 1),
              (W[1] = 0),
              (W[2] = c > 0.5 ? s / c : 0),
              ne(e, t, a, W, !0)),
            (n.vy = 0))
          : ((n.air = !0), (n.vy = Math.min(n.vy, a.vel[1]))),
        !r)
      )
        continue;
    }
    if (c < 2.5 || a.pos[1] - e.world.map.getHeight(a.pos[0], a.pos[2]) > 0.6)
      continue;
    let d = H.get(a.id);
    (d || ((d = { d: 0, seen: i }), H.set(a.id, d)),
      (d.seen = i),
      (d.d += c * n));
    let f = a.type === `vehicle`;
    d.d >= (f ? 0.7 : V) &&
      ((d.d = 0),
      (W[0] = o / c),
      (W[1] = 0),
      (W[2] = s / c),
      f
        ? t.spawn(`dust`, a.pos, W, {
            count: 4 + Math.min(4, (c / 8) | 0),
            scale: 1.6 + c * 0.05,
          })
        : ne(e, t, a, W, !1));
  }
  if (!(i & 255)) for (let [e, t] of H) i - t.seen > 120 && H.delete(e);
}
