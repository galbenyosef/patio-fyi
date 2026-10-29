// assets__vehicles-HlJi7hcV 06 — math
// Lines 1608-1731 of readable/assets__vehicles-HlJi7hcV.pretty.js (statement-aligned).
function Ae() {
  let e = new Map();
  return {
    accept(t) {
      if (
        !Number.isInteger(t?.vehicleId) ||
        !Number.isInteger(t?.tick) ||
        t.tick < 0 ||
        ![t.pos, t.dir].every(
          (e) => Array.isArray(e) && e.length === 3 && e.every(Number.isFinite),
        )
      )
        return !1;
      let n = e.get(t.vehicleId);
      return (n && t.tick <= n.tick) || (!n && e.size >= 12)
        ? !1
        : (e.set(t.vehicleId, { tick: t.tick, age: 0 }), !0);
    },
    advance(t) {
      for (let n of e.values()) n.age += Math.max(0, t);
    },
    pose(t) {
      return je(e.get(t)?.age ?? 1 / 0);
    },
    remove(t) {
      e.delete(t);
    },
    clear() {
      e.clear();
    },
  };
}
function je(e) {
  if (!Number.isFinite(e) || e < 0 || e >= 1.6)
    return { barrel: 0, camera: 0, hull: 0, dip: 0, lift: 0 };
  let t =
      e < 0.055
        ? 0.42 * Math.sin(((e / 0.055) * Math.PI) / 2)
        : 0.42 *
          Math.exp(-(e - 0.055) * 5) *
          (1 - Math.min(1, (e - 0.055) / 1.5)),
    n = Math.sin((Math.min(1, e / 0.09) * Math.PI) / 2),
    r = 0.05 * n * Math.exp(-e * 2.6) * Math.cos(e * 7.5),
    i = 0.11 * n * Math.exp(-e * 2.2) * Math.max(0, Math.cos(e * 6)),
    a = 0.5 * n * Math.exp(-e * 4);
  return {
    barrel: t,
    camera: 0.024 * n * Math.exp(-e * 7) * Math.cos(e * 14),
    hull: r,
    dip: i,
    lift: a,
  };
}
function Me(e) {
  let r = new Map(),
    i = new C(0.055, 0.055, 0.35, 6),
    o = new C(0.032, 0.008, 2.2, 6),
    s = new n(0.07, 6, 4);
  (i.rotateX(Math.PI / 2), o.rotateX(Math.PI / 2));
  let c = new a({ color: 7563607, roughness: 0.5 }),
    l = new p({ color: 16765841, toneMapped: !1 }),
    u = new y(),
    d = new t(i, c),
    f = new t(o, l),
    m = new t(s, l);
  return (
    d.add(f, m),
    u.position.set(0, -1e4, 0),
    u.add(d),
    e.scene.add(u),
    {
      update() {
        u.parent && e.scene.remove(u);
        let n = new Set();
        for (let a of e.world.byType(`projectile`)) {
          if (a.weapon !== 240) continue;
          n.add(a.id);
          let u = r.get(a.id);
          if (!u) {
            ((u = new t(i, c)), (u.name = `tank-shell-` + a.id));
            let n = new t(o, l);
            ((n.position.z = 1.25), u.add(n));
            let d = new t(s, l);
            ((d.position.z = 0.2), u.add(d), r.set(a.id, u), e.scene.add(u));
          }
          (u.position.fromArray(a.pos),
            (a.vel[0] || a.vel[1] || a.vel[2]) &&
              u.lookAt(
                a.pos[0] - a.vel[0],
                a.pos[1] - a.vel[1],
                a.pos[2] - a.vel[2],
              ));
          let d = e.world.time.tick;
          u.userData.lt !== d &&
            d % 3 == 0 &&
            ((u.userData.lt = d),
            e.modules
              ?.get(`effects`)
              ?.spawn?.(`smoke`, [a.pos[0], a.pos[1], a.pos[2]], [0, 1, 0], {
                count: 1,
                scale: 0.4,
              }));
        }
        for (let [t, i] of r) n.has(t) || (e.scene.remove(i), r.delete(t));
      },
      dispose() {
        e.scene.remove(u);
        for (let t of r.values()) e.scene.remove(t);
        (r.clear(),
          i.dispose(),
          o.dispose(),
          s.dispose(),
          c.dispose(),
          l.dispose());
      },
    }
  );
}
var Y = (e, t) => {
    ((t = String(t)), e.textContent !== t && (e.textContent = t));
  },
  Ne = (e, t, n) => {
    e.getAttribute(t) !== n && e.setAttribute(t, n);
  };
