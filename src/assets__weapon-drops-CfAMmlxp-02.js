// assets__weapon-drops-CfAMmlxp 02 — weapon
// Lines 349-478 of readable/assets__weapon-drops-CfAMmlxp.pretty.js (statement-aligned).
function A(r, { state: a, changed: o = () => {} }) {
  let s = r.world,
    c = new Map(),
    l = new Map(),
    u = (e) => {
      (c.delete(e), s.get(e)?.type === `pickup` && s.despawn(e));
    };
  function d(e, t, r, i) {
    c.size >= x.max && u(c.keys().next().value);
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
        expires: s.time.tick + x.life,
      }),
      o
    );
  }
  function f(t) {
    let n = s.get(t),
      r = n && a(n);
    if (
      !r ||
      n.type !== `soldier` ||
      n.state & e.IN_VEHICLE ||
      (n.seat ?? -1) >= 0
    )
      return null;
    let o =
        S(i[r.selected]) && r.loadout.includes(r.selected)
          ? r.selected
          : r.loadout.find((e) => S(i[e])),
      c = o != null && r.ammo[o];
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
    let n = O(s, t),
      r = n && c.get(n.id),
      l = r && a(t);
    if (!l) return !1;
    let f = i[r.weapon];
    if (l.loadout.includes(r.weapon)) {
      let e = l.ammo[r.weapon],
        i = Math.min(f.reserve - e.reserve, r.mag + r.reserve);
      return e.unlimited || i <= 0
        ? (o(t, { kind: `full`, weapon: r.weapon }), !1)
        : ((e.reserve += i),
          u(n.id),
          o(t, { kind: `ammo`, weapon: r.weapon, amount: i }),
          !0);
    }
    let p = D(l, r.weapon);
    if (p < 0) return (o(t, { kind: `class`, weapon: r.weapon }), !1);
    let h = l.loadout[p],
      g = { ...l.ammo[h] };
    ((l.loadout = [...l.loadout]),
      (l.loadout[p] = r.weapon),
      (l.ammo[r.weapon] = {
        mag: Math.min(f.mag, r.mag),
        reserve: Math.min(f.reserve, r.reserve),
        unlimited: !!l.ammo[r.weapon]?.unlimited,
      }),
      (l.reloadWeapon === h || l.selected === h) &&
        (_(l), (t.state &= ~e.RELOADING)),
      l.selected === h &&
        (m(l, r.weapon, s.time.tick),
        (t.weapon = r.weapon),
        (t.ammo = l.ammo[r.weapon].mag)));
    let v = [...n.pos],
      y = n.yaw;
    return (
      u(n.id),
      S(i[h]) &&
        g.mag + g.reserve > 0 &&
        d(h, g, [v[0], v[1] + 0.05, v[2]], y + 0.6),
      o(t, { kind: `swap`, weapon: r.weapon, slot: p, dropped: h }),
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
      if (!r || !k(s, e) || s.players.get(e.owner)?.isBot) {
        l.delete(e.id);
        return;
      }
      let a = l.get(e.id);
      (a ?? l.set(e.id, (a = i)),
        a >= 0 && i - a >= x.hold && (l.set(e.id, -1), p(e)));
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
