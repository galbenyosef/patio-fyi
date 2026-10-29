// assets__weapons-l6nEMnye 05 — config
// Lines 897-1074 of readable/assets__weapons-l6nEMnye.pretty.js (statement-aligned).
function kt(e, t) {
  let n = P(null),
    r = !1,
    i = !0,
    a = 0,
    o = new Map(),
    s = [];
  try {
    n = P(JSON.parse(localStorage.getItem(Ot)));
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
          I(P(i.config)) === I(n) &&
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
        e.key === I(n) && ((i = !1), (r = !!e.pending), t?.());
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
          [`assault`, `sniper`, `support`, `medic`].includes(t?.classId)
          ? t.classId
          : null;
      },
      definition(t, n = e.modules.get(`player`)?.getLocalEntity?.()) {
        let r = o.get(n?.id),
          i = r && r.owner === n?.owner,
          a = ee(t, i ? r.config : null);
        return i && n.id !== e.modules.get(`player`)?.getLocalEntity?.()?.id
          ? fe(a, r.camos?.[t] ?? null, r.wears?.[t] ?? null)
          : a;
      },
      tick() {
        i && e.world.time.tick >= a && c();
      },
      configure(e) {
        ((n = P(e)), (r = !0), (i = !0));
        let a = !0;
        try {
          localStorage.setItem(Ot, JSON.stringify(n));
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
          pending: r || I(n) !== I(P(i?.config)),
        };
      },
      dispose() {
        for (let e of s) e();
        o.clear();
      },
    }
  );
}
function At(e, n, { name: r, castShadow: i = !1, receiveShadow: a = !1 } = {}) {
  let o = new h();
  ((o.name = r), e.add(o));
  let s = n.filter((e) => !e.material.transparent && e.material.opacity === 1),
    c = n.filter((e) => !s.includes(e)),
    l = new Map(),
    u = (e) => (typeof i == `function` ? i(e) : i),
    d = [],
    f = 0,
    p = [],
    m = new Float64Array(),
    g = !1,
    _ = () => {
      for (let e of d) (e.removeFromParent(), e.dispose());
      d = [];
    },
    v = (e) => {
      (_(),
        (f = Math.max(8, 2 ** Math.ceil(Math.log2(e)))),
        (m = new Float64Array(f * 16)),
        (d = s.map((e, t) => {
          let n = new C(e.geometry, e.material, f);
          return (
            (n.name = `${r}:${t}`),
            (n.castShadow = u(e)),
            (n.receiveShadow = a),
            n.instanceMatrix.setUsage(x),
            (n.count = 0),
            o.add(n),
            n
          );
        })));
    };
  return {
    group: o,
    sync(e) {
      if (g) return;
      let n = e.filter((e) => e.visible),
        i = new Set(e);
      for (let [e, t] of l) i.has(e) || (t.removeFromParent(), l.delete(e));
      if (c.length) {
        for (let n of e)
          if (!l.has(n)) {
            let e = new h();
            e.name = r + `:individual`;
            for (let n of c) {
              let r = new t(n.geometry, n.material);
              ((r.castShadow = u(n)), (r.receiveShadow = a), e.add(r));
            }
            (n.add(e), l.set(n, e));
          }
      }
      let s = n.length !== p.length || n.length > f;
      n.length > f && v(n.length);
      for (let e = 0; e < n.length; e++) {
        let t = n[e];
        (t.updateMatrix(), t !== p[e] && (s = !0));
        for (let n = 0; n < 16; n++)
          m[e * 16 + n] !== t.matrix.elements[n] && (s = !0);
      }
      if (s) {
        for (let e = 0; e < n.length; e++) {
          m.set(n[e].matrix.elements, e * 16);
          for (let t of d) t.setMatrixAt(e, n[e].matrix);
        }
        for (let e of d)
          ((e.count = n.length),
            e.count &&
              ((e.instanceMatrix.needsUpdate = !0),
              e.computeBoundingBox(),
              e.computeBoundingSphere()));
        ((o.visible = n.length > 0), (p = n));
      }
    },
    dispose() {
      if (!g) {
        ((g = !0), _(), o.removeFromParent());
        for (let e of l.values()) e.removeFromParent();
        (l.clear(), (p = []), (m = new Float64Array()));
      }
    },
  };
}
var jt = {
  medkit: `MEDKIT DOWN · heals everyone within 5 m`,
  ammo: `AMMO BOX DOWN · resupplies everyone within 4 m`,
};
