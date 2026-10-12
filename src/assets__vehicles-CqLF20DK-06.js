// assets__vehicles-CqLF20DK 06 — math
// Lines 1607-1730 of readable/assets__vehicles-CqLF20DK.pretty.js (statement-aligned).
function Oe() {
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
      return ke(e.get(t)?.age ?? 1 / 0);
    },
    remove(t) {
      e.delete(t);
    },
    clear() {
      e.clear();
    },
  };
}
function ke(e) {
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
function Ae(e) {
  let t = new Map(),
    n = new s(0.055, 0.055, 0.35, 6),
    r = new s(0.032, 0.008, 2.2, 6),
    i = new O(0.07, 6, 4);
  (n.rotateX(Math.PI / 2), r.rotateX(Math.PI / 2));
  let a = new g({ color: 7563607, roughness: 0.5 }),
    o = new A({ color: 16765841, toneMapped: !1 }),
    c = new C(),
    l = new p(n, a),
    u = new p(r, o),
    d = new p(i, o);
  return (
    l.add(u, d),
    c.position.set(0, -1e4, 0),
    c.add(l),
    e.scene.add(c),
    {
      update() {
        c.parent && e.scene.remove(c);
        let s = new Set();
        for (let c of e.world.byType(`projectile`)) {
          if (c.weapon !== 240) continue;
          s.add(c.id);
          let l = t.get(c.id);
          if (!l) {
            ((l = new p(n, a)), (l.name = `tank-shell-` + c.id));
            let s = new p(r, o);
            ((s.position.z = 1.25), l.add(s));
            let u = new p(i, o);
            ((u.position.z = 0.2), l.add(u), t.set(c.id, l), e.scene.add(l));
          }
          (l.position.fromArray(c.pos),
            (c.vel[0] || c.vel[1] || c.vel[2]) &&
              l.lookAt(
                c.pos[0] - c.vel[0],
                c.pos[1] - c.vel[1],
                c.pos[2] - c.vel[2],
              ));
          let u = e.world.time.tick;
          l.userData.lt !== u &&
            u % 3 == 0 &&
            ((l.userData.lt = u),
            e.modules
              ?.get(`effects`)
              ?.spawn?.(`smoke`, [c.pos[0], c.pos[1], c.pos[2]], [0, 1, 0], {
                count: 1,
                scale: 0.4,
              }));
        }
        for (let [n, r] of t) s.has(n) || (e.scene.remove(r), t.delete(n));
      },
      dispose() {
        e.scene.remove(c);
        for (let n of t.values()) e.scene.remove(n);
        (t.clear(),
          n.dispose(),
          r.dispose(),
          i.dispose(),
          a.dispose(),
          o.dispose());
      },
    }
  );
}
var X = (e, t) => {
    ((t = String(t)), e.textContent !== t && (e.textContent = t));
  },
  je = (e, t, n) => {
    e.getAttribute(t) !== n && e.setAttribute(t, n);
  };
