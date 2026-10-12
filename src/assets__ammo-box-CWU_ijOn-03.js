// assets__ammo-box-CWU_ijOn 03 — reserve
// Lines 600-681 of readable/assets__ammo-box-CWU_ijOn.pretty.js (statement-aligned).
function M(t, n, r = null) {
  let a = t.world,
    o = new Map(),
    s = new Map(),
    c = new Map(),
    l = () => t.modules?.get?.(`netcode`),
    u = (e, t) => Math.hypot(e[0] - t[0], e[2] - t[2]),
    d = {
      states: n,
      tick() {
        let t = a.time.tick;
        if (t % O.every) return;
        let d = a.byType(`prop`).filter((e) => e.weapon === 214 && e.hp > 0);
        if (d.length)
          for (let [f, p] of n) {
            let n = a.get(f);
            if (
              !n ||
              n.type !== `soldier` ||
              n.hp <= 0 ||
              n.state & (e.DEAD | e.IN_VEHICLE)
            )
              continue;
            let m = d
              .filter(
                (e) =>
                  u(e.pos, n.pos) <= O.radius &&
                  Math.abs(e.pos[1] - n.pos[1]) <= O.height,
              )
              .sort((e, t) => u(e.pos, n.pos) - u(t.pos, n.pos))[0];
            if (!m) {
              (s.delete(f), c.delete(f));
              continue;
            }
            let h = 0,
              g = c.get(f) ?? t;
            t >= g
              ? (c.set(f, t + O.fragEvery), r?.restock?.(n) && (h += 0.25))
              : c.set(f, g);
            for (let e of p.loadout) {
              let n = i[e],
                r = p.ammo[e];
              if (!n || !r || r.unlimited || r.reserve >= n.reserve) continue;
              if (n.class === `launcher`) {
                let e = s.get(f) ?? t + O.launcherEvery - O.every;
                if (t < e) {
                  s.set(f, e);
                  continue;
                }
                (s.set(f, t + O.launcherEvery),
                  r.reserve++,
                  (h += 1 / n.reserve));
                continue;
              }
              let a = Math.min(
                n.reserve - r.reserve,
                Math.ceil(n.reserve * O.share),
              );
              ((r.reserve += a), (h += a / n.reserve));
            }
            let _ = a.players.get(m.owner);
            if (!h || !_ || _.team !== n.team || m.owner === n.owner) continue;
            let v = (o.get(_.id) ?? 0) + h,
              y = Math.floor(v / O.scoreShare + 1e-9);
            if ((o.set(_.id, v - y * O.scoreShare), y)) {
              _.score = (_.score | 0) + y * O.score;
              let e = a.get(_.entityId),
                t = e && l()?.getClientByEntity?.(e.id);
              t &&
                l()?.sendEvent?.(t.id, `score:award`, {
                  points: y * O.score,
                  reason: `Resupply`,
                });
            }
          }
      },
      dispose() {
        (o.clear(), s.clear(), c.clear(), k.delete(a));
      },
    };
  return (k.set(a, d), d);
}
