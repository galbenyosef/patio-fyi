// assets__weapon-drops-DbIZUUXu 02 — weapon
// Lines 276-404 of readable/assets__weapon-drops-DbIZUUXu.pretty.js (statement-aligned).
function k(i, { state: a, changed: o = () => {} }) {
  let s = i.world,
    c = new Map(),
    l = new Map(),
    u = (e) => {
      (c.delete(e), s.get(e)?.type === `pickup` && s.despawn(e));
    };
  function d(e, t, r, i) {
    c.size >= b.max && u(c.keys().next().value);
    let a = n(s, r[0], r[2], r[1] + 0.4),
      o = s.spawn(`pickup`, {
        weapon: e,
        pos: [r[0], Number.isFinite(a) && a <= r[1] + 0.4 ? a : r[1], r[2]],
        yaw: i,
        hp: 1,
        maxHp: 1,
      });
    return (
      c.set(o.id, {
        weapon: e,
        mag: t.mag | 0,
        reserve: t.reserve | 0,
        expires: s.time.tick + b.life,
      }),
      o
    );
  }
  function f(t) {
    let n = s.get(t),
      i = n && a(n);
    if (
      !i ||
      n.type !== `soldier` ||
      n.state & e.IN_VEHICLE ||
      (n.seat ?? -1) >= 0
    )
      return null;
    let o =
        x(r[i.selected]) && i.loadout.includes(i.selected)
          ? i.selected
          : i.loadout.find((e) => x(r[e])),
      c = o != null && i.ammo[o];
    return !c || c.mag + c.reserve <= 0
      ? null
      : d(
          o,
          c,
          [
            n.pos[0] + Math.cos(n.yaw) * 0.35,
            n.pos[1],
            n.pos[2] - Math.sin(n.yaw) * 0.35,
          ],
          n.yaw + 1.3,
        );
  }
  function p(t) {
    let n = D(s, t),
      i = n && c.get(n.id),
      l = i && a(t);
    if (!l) return !1;
    let f = r[i.weapon];
    if (l.loadout.includes(i.weapon)) {
      let e = l.ammo[i.weapon],
        r = Math.min(f.reserve - e.reserve, i.mag + i.reserve);
      return e.unlimited || r <= 0
        ? (o(t, { kind: `full`, weapon: i.weapon }), !1)
        : ((e.reserve += r),
          u(n.id),
          o(t, { kind: `ammo`, weapon: i.weapon, amount: r }),
          !0);
    }
    let p = E(l, i.weapon),
      h = l.loadout[p],
      _ = { ...l.ammo[h] };
    ((l.loadout = [...l.loadout]),
      (l.loadout[p] = i.weapon),
      (l.ammo[i.weapon] = {
        mag: Math.min(f.mag, i.mag),
        reserve: Math.min(f.reserve, i.reserve),
        unlimited: !!l.ammo[i.weapon]?.unlimited,
      }),
      (l.reloadWeapon === h || l.selected === h) &&
        (g(l), (t.state &= ~e.RELOADING)),
      l.selected === h &&
        (m(l, i.weapon, s.time.tick),
        (t.weapon = i.weapon),
        (t.ammo = l.ammo[i.weapon].mag)));
    let v = [...n.pos],
      y = n.yaw;
    return (
      u(n.id),
      x(r[h]) &&
        _.mag + _.reserve > 0 &&
        d(h, _, [v[0], v[1] + 0.05, v[2]], y + 0.6),
      o(t, { kind: `swap`, weapon: i.weapon, slot: p, dropped: h }),
      !0
    );
  }
  return {
    drops: c,
    death: f,
    pickUp: p,
    input(e, n) {
      if (!e) return;
      let r = !!(n?.buttons & t.INTERACT),
        i = s.time.tick;
      if (!r || !O(s, e) || s.players.get(e.owner)?.isBot) {
        l.delete(e.id);
        return;
      }
      let a = l.get(e.id);
      (a ?? l.set(e.id, (a = i)),
        a >= 0 && i - a >= b.hold && (l.set(e.id, -1), p(e)));
    },
    tick() {
      let e = s.time.tick;
      if (!(e % 30))
        for (let [t, n] of c)
          (e >= n.expires || s.get(t)?.type !== `pickup`) && u(t);
    },
    forget(e) {
      (l.delete(e), c.delete(e));
    },
    dispose() {
      for (let e of [...c.keys()]) u(e);
      l.clear();
    },
  };
}
