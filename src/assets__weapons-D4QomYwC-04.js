// assets__weapons-D4QomYwC 04 — math
// Lines 893-1226 of readable/assets__weapons-D4QomYwC.pretty.js (statement-aligned).
function vt(e, t) {
  let n = P(null),
    r = !1,
    i = !0,
    a = 0,
    o = new Map(),
    s = [];
  try {
    n = P(JSON.parse(localStorage.getItem(_t)));
  } catch {}
  let c = () => (
      (a = e.world.time.tick + 60),
      e.modules.get(`netcode`)?.sendRpc?.(`weapon:configure`, n)
    ),
    l = (i) => {
      if (!Number.isInteger(i?.entityId) || !Number.isInteger(i.revision))
        return;
      let a = o.get(i.entityId);
      (a && a.revision >= i.revision) ||
        (o.set(i.entityId, { ...i, config: P(i.config) }),
        i.entityId === e.modules.get(`player`)?.getLocalEntity?.()?.id &&
          N(P(i.config)) === N(n) &&
          (r = !1),
        t?.());
    };
  (s.push(e.events.on(`weapon:equipment`, l)),
    s.push(
      e.events.on(`weapon:inventory`, (e) => {
        e.equipment && l(e.equipment);
      }),
    ),
    s.push(
      e.events.on(`weapon:configuration`, (e) => {
        e.key === N(n) && ((i = !1), (r = !!e.pending), t?.());
      }),
    ),
    s.push(e.events.on(`world:despawn`, ({ id: e }) => o.delete(e))));
  let u = e.modules.get(`netcode`)?.getClient?.();
  return (
    u &&
      s.push(
        u.on(`connected`, () => {
          (o.clear(), (i = !0), c());
        }),
      ),
    s.push(e.events.on(`player:local`, () => c())),
    {
      classId(e) {
        let t = o.get(e?.id);
        return t?.owner === e?.owner &&
          [`assault`, `sniper`, `support`, `engineer`, `medic`].includes(
            t?.classId,
          )
          ? t.classId
          : null;
      },
      definition(t, n = e.modules.get(`player`)?.getLocalEntity?.()) {
        let r = o.get(n?.id),
          i = r && r.owner === n?.owner,
          a = oe(t, i ? r.config : null);
        return i && n.id !== e.modules.get(`player`)?.getLocalEntity?.()?.id
          ? le(a, r.camos?.[t] ?? null, r.wears?.[t] ?? null)
          : a;
      },
      tick() {
        i && e.world.time.tick >= a && c();
      },
      configure(e) {
        ((n = P(e)), (r = !0), (i = !0));
        let a = !0;
        try {
          localStorage.setItem(_t, JSON.stringify(n));
        } catch {
          a = !1;
        }
        return (c(), t?.(), { saved: a });
      },
      status() {
        let t = e.modules.get(`player`)?.getLocalEntity?.(),
          i = o.get(t?.id);
        return {
          desired: P(n),
          active: P(i?.config),
          pending: r || N(n) !== N(P(i?.config)),
        };
      },
      dispose() {
        for (let e of s) e();
        o.clear();
      },
    }
  );
}
function yt(t, n, { name: r, castShadow: i = !1, receiveShadow: a = !1 } = {}) {
  let o = new b();
  ((o.name = r), t.add(o));
  let s = n.filter((e) => !e.material.transparent && e.material.opacity === 1),
    c = n.filter((e) => !s.includes(e)),
    l = new Map(),
    u = (e) => (typeof i == `function` ? i(e) : i),
    d = [],
    p = 0,
    m = [],
    h = new Float64Array(),
    g = !1,
    _ = () => {
      for (let e of d) (e.removeFromParent(), e.dispose());
      d = [];
    },
    v = (t) => {
      (_(),
        (p = Math.max(8, 2 ** Math.ceil(Math.log2(t)))),
        (h = new Float64Array(p * 16)),
        (d = s.map((t, n) => {
          let i = new y(t.geometry, t.material, p);
          return (
            (i.name = `${r}:${n}`),
            (i.castShadow = u(t)),
            (i.receiveShadow = a),
            i.instanceMatrix.setUsage(e),
            (i.count = 0),
            o.add(i),
            i
          );
        })));
    };
  return {
    group: o,
    sync(e) {
      if (g) return;
      let t = e.filter((e) => e.visible),
        n = new Set(e);
      for (let [e, t] of l) n.has(e) || (t.removeFromParent(), l.delete(e));
      if (c.length) {
        for (let t of e)
          if (!l.has(t)) {
            let e = new b();
            e.name = r + `:individual`;
            for (let t of c) {
              let n = new f(t.geometry, t.material);
              ((n.castShadow = u(t)), (n.receiveShadow = a), e.add(n));
            }
            (t.add(e), l.set(t, e));
          }
      }
      let i = t.length !== m.length || t.length > p;
      t.length > p && v(t.length);
      for (let e = 0; e < t.length; e++) {
        let n = t[e];
        (n.updateMatrix(), n !== m[e] && (i = !0));
        for (let t = 0; t < 16; t++)
          h[e * 16 + t] !== n.matrix.elements[t] && (i = !0);
      }
      if (i) {
        for (let e = 0; e < t.length; e++) {
          h.set(t[e].matrix.elements, e * 16);
          for (let n of d) n.setMatrixAt(e, t[e].matrix);
        }
        for (let e of d)
          ((e.count = t.length),
            e.count &&
              ((e.instanceMatrix.needsUpdate = !0),
              e.computeBoundingBox(),
              e.computeBoundingSphere()));
        ((o.visible = t.length > 0), (m = t));
      }
    },
    dispose() {
      if (!g) {
        ((g = !0), _(), o.removeFromParent());
        for (let e of l.values()) e.removeFromParent();
        (l.clear(), (m = []), (h = new Float64Array()));
      }
    },
  };
}
var bt = {
  medkit: `MEDKIT DOWN · heals everyone within 4 m`,
  ammo: `AMMO BOX DOWN · resupplies everyone within 4 m`,
};
function xt(e) {
  let t = new Map(),
    n = new Map(),
    i = new Map(),
    a = new r(0.05, 0.03, 0.035),
    o = new m({ color: 7208858, emissive: 3133790, emissiveIntensity: 1 }),
    s = new m({ color: 16761418, emissive: 14719512, emissiveIntensity: 1 }),
    c = (t) => {
      let r = t === 213 ? `medkit` : `ammo`;
      if (!n.has(r)) {
        let t = ge(r);
        (n.set(r, t),
          i.set(
            r,
            yt(e.scene, t.parts, {
              name: `placed-` + r,
              castShadow: (e) => e.material.name === `poly`,
            }),
          ));
      }
      return n.get(r);
    },
    l = new v(2.8, 2.8);
  l.rotateX(-Math.PI / 2);
  let u = document.createElement(`canvas`);
  u.width = u.height = 128;
  {
    let e = u.getContext(`2d`),
      t = e.createRadialGradient(64, 64, 0, 64, 64, 64);
    (t.addColorStop(0, `rgba(255,190,90,1)`),
      t.addColorStop(0.18, `rgba(255,170,70,.75)`),
      t.addColorStop(0.5, `rgba(255,150,50,.22)`),
      t.addColorStop(1, `rgba(255,140,40,0)`),
      (e.fillStyle = t),
      e.fillRect(0, 0, 128, 128));
  }
  let p = new d(u);
  p.colorSpace = x;
  let h = new E({
      map: p,
      transparent: !0,
      opacity: 0.55,
      blending: 2,
      depthWrite: !1,
      polygonOffset: !0,
      polygonOffsetFactor: -2,
      polygonOffsetUnits: -2,
    }),
    g = document.createElement(`div`);
  ((g.id = `ammo-box-hint`),
    (g.hidden = !0),
    (g.style.cssText = `position:absolute;left:50%;bottom:150px;transform:translateX(-50%);padding:6px 14px;background:#14180fd9;border-left:3px solid #ffc24a;color:#ffe2a0;font:600 14px/1.4 system-ui;letter-spacing:.06em;pointer-events:none`),
    e.ui?.append?.(g));
  let _ = null,
    y = e.events.on(`gadget:status`, (t) => {
      (_ && t.life < _.life) ||
        ((_ = t),
        [`sync`, `placed`].includes(t.reason)
          ? t.reason === `placed` &&
            bt[t.gadget] &&
            e.events.emit(`ui:message`, {
              kind: `info`,
              text: bt[t.gadget],
              ttl: 3,
            })
          : e.events.emit(`ui:message`, {
              kind: `warn`,
              text: t.reason,
              ttl: 3,
            }));
    }),
    S = (n, r) => {
      (e.scene.remove(r),
        t.delete(n),
        r.traverse((e) => {
          e.geometry === l && e.material.dispose();
        }));
    },
    C = (e, t, n, r, i, a) => {
      let o = new f(t, n);
      return (o.position.set(r, i, a), e.add(o), o);
    },
    ee = (e) => {
      let t = new b();
      ((t.name = `placed-kit-markers`), (t.userData.kind = e));
      let n = c(e);
      if ((C(t, a, e === 213 ? o : s, ...n.lamp), e !== 213)) {
        let e = C(t, l, h.clone(), 0, 0.03, 0);
        ((e.name = `glow`), (e.renderOrder = 2));
      }
      return t;
    };
  return {
    status: () => _,
    update() {
      let n = new Set();
      for (let r of e.world.byType(`prop`)) {
        if ((r.weapon !== 213 && r.weapon !== 214) || r.hp <= 0) continue;
        n.add(r.id);
        let i = t.get(r.id);
        (i && i.userData.kind !== r.weapon && (S(r.id, i), (i = null)),
          i || ((i = ee(r.weapon)), e.scene.add(i), t.set(r.id, i)),
          i.position.fromArray(r.pos),
          i.rotation.set(0, r.yaw, 0));
      }
      let r = e.modules?.get?.(`player`)?.getLocalEntity?.(),
        a = !1,
        c = 0.85 + 0.15 * Math.sin((performance.now() / 1e3) * Math.PI * 0.8);
      for (let e of t.values()) {
        if (e.userData.kind !== 214) continue;
        let t = e.getObjectByName(`glow`),
          n =
            (r?.hp > 0
              ? Math.hypot(r.pos[0] - e.position.x, r.pos[2] - e.position.z)
              : 1 / 0) <= Ne.radius &&
            Math.abs(r.pos[1] - e.position.y) <= Ne.height;
        ((a ||= n), (t.material.opacity = (n ? 0.65 : 0.42) * c));
      }
      if (
        (g.hidden !== !a && (g.hidden = !a),
        a &&
          g.textContent !== `RESUPPLYING` &&
          ((g.textContent = `RESUPPLYING`),
          (g.style.borderLeftColor = `#7dff9a`)),
        t.size)
      ) {
        let e =
          0.6 +
          0.6 * Math.abs(Math.sin((performance.now() / 1e3) * Math.PI * 2));
        o.emissiveIntensity = s.emissiveIntensity = e;
      }
      for (let [e, r] of t) n.has(e) || S(e, r);
      for (let [e, n] of i)
        n.sync(
          [...t.values()].filter(
            (t) => (t.userData.kind === 213 ? `medkit` : `ammo`) === e,
          ),
        );
    },
    dispose() {
      (y(), g.remove());
      for (let [e, n] of t) S(e, n);
      for (let e of [l, p, h, a, o, s]) e.dispose();
      for (let e of i.values()) e.dispose();
      i.clear();
      for (let e of n.values())
        (e.parts.forEach((e) => e.geometry.dispose()),
          e.materials.forEach((e) => e.dispose()));
      n.clear();
    },
  };
}
var St = `BEACON PLANTED · YOU CAN DEPLOY ON IT WHILE IT STANDS`,
  Ct = `BEACON MOVED · YOUR OLD ONE IS GONE`;
