// assets__ammo-box-LgYJGM2c 03 — owner
// Lines 531-771 of readable/assets__ammo-box-LgYJGM2c.pretty.js (statement-aligned).
function R(t, a, s = null) {
  let c = t.world,
    l = new Map(),
    u = new Map(),
    d = new Map(),
    f = new Map(),
    p = O(t),
    m = () => t.modules?.get?.(`netcode`),
    h = (e, t) => {
      let n = m()?.getClientByEntity?.(e?.id);
      n &&
        m()?.sendEvent?.(n.id, `ui:message`, {
          kind: `squad`,
          text: t,
          ttl: 3,
        });
    },
    g = (e, t) => Math.hypot(e[0] - t[0], e[2] - t[2]),
    _ = (t) =>
      t?.type === `soldier` &&
      c.get(t.id) === t &&
      t.hp > 0 &&
      !(t.state & (e.DEAD | e.IN_VEHICLE)) &&
      (t.seat ?? -1) < 0,
    v = (e) =>
      _(e) &&
      c.players.get(e.owner)?.entityId === e.id &&
      c.players.get(e.owner)?.team === e.team,
    y = (e, t) => {
      let n = t.map((t, n) => t - e[n]),
        r = Math.hypot(...n);
      return (
        r < 0.05 ||
        !c.map.raycast(
          e,
          n.map((e) => e / r),
          Math.max(0, r - 0.05),
        )
      );
    },
    b = (e) => {
      let t = l.get(e.id);
      return (
        (!t || t.entity !== e || t.team !== e.team) &&
          l.set(
            e.id,
            (t = {
              entity: e,
              team: e.team,
              rocket: null,
              grenade: null,
              received: 0,
            }),
          ),
        t
      );
    },
    x = (e) => {
      let t = c.players.get(e.owner);
      return t && t.team === e.team ? t : null;
    },
    S = new Map(),
    T = (e, n, r) => {
      if (!e || !(n > 0)) return;
      let i = (S.get(e.id) ?? 0) + n,
        a = Math.floor(i + 1e-9);
      if ((S.set(e.id, i - a), !a)) return;
      let o = a * k.score;
      if (((e.score = (e.score | 0) + o), !e.isBot))
        for (let n of t.clients?.values?.() ?? [])
          n.playerId === e.id &&
            m()?.sendEvent?.(n.id, `score:award`, { points: o, reason: r });
    },
    E = (e, t) => {
      let n = m()?.getClientByEntity?.(e?.id);
      n &&
        t > 0 &&
        m()?.sendEvent?.(n.id, `supply:received`, { kind: `ammo`, amount: t });
    },
    D = [
      t.events.on(`world:despawn`, ({ id: e }) => {
        (l.delete(e), u.delete(e), d.delete(e), f.delete(e));
      }),
    ],
    j = {
      states: a,
      handoff(e) {
        if (
          !v(e) ||
          !M(c, e) ||
          !Number.isFinite(e.yaw) ||
          !Number.isFinite(e.pitch) ||
          o(c) ||
          c.match.phase === `ended`
        )
          return !1;
        let t = r(e, [0, 0, 0]),
          s = n(e.yaw, e.pitch),
          l = c
            .byType(`soldier`)
            .filter(
              (t) =>
                t.owner !== e.owner &&
                t.team === e.team &&
                v(t) &&
                g(t.pos, e.pos) <= k.handoffReach &&
                Math.abs(t.pos[1] - e.pos[1]) <= k.height,
            ),
          f = null,
          m = 1 / 0;
        for (let e of l) {
          let n = r(e, [0, 0, 0]),
            i = n.map((e, n) => e - t[n]),
            a = Math.hypot(...i);
          a > k.handoffReach ||
            a < 0.01 ||
            i.reduce((e, t, n) => e + t * s[n], 0) / a < k.handoffCone ||
            !y(t, n) ||
            (a < m && ((f = e), (m = a)));
        }
        if (!f) return !1;
        let _ = c.time.tick,
          x = b(f),
          S = Math.max(u.get(e.id) ?? 0, x.received);
        if (_ < S)
          return (
            _ >= (d.get(e.id) ?? 0) &&
              (h(e, `Ammo handoff ready in ${Math.ceil((S - _) / 60)}s`),
              d.set(e.id, _ + 60)),
            !0
          );
        let D = a.get(f.id);
        for (let t of D?.loadout ?? []) {
          let n = i[t],
            r = D.ammo[t];
          if (!C(n) || !r || r.unlimited) continue;
          let a = Math.min(w(D, n), n.reserve - r.reserve);
          if (!(a <= 0))
            return (
              (r.reserve += a),
              u.set(e.id, _ + k.handoffEvery),
              (x.received = _ + k.handoffEvery),
              p.supplied(e.owner, f, a / w(D, n)),
              T(c.players.get(e.owner), a / w(D, n), `Ammo handoff`),
              h(e, `Ammo handed over · ${a} rounds`),
              h(f, `Teammate ammo · +${a} rounds`),
              E(f, a),
              !0
            );
        }
        return (
          _ >= (d.get(e.id) ?? 0) &&
            (h(e, `Teammate firearm reserves are full`), d.set(e.id, _ + 60)),
          !0
        );
      },
      tick() {
        let t = c.time.tick;
        if (t % k.every) return;
        p.tick();
        for (let [t, n] of l)
          (c.get(t) !== n.entity ||
            n.entity.hp <= 0 ||
            n.entity.state & e.DEAD ||
            c.players.get(n.entity.owner)?.entityId !== t ||
            n.entity.team !== n.team ||
            c.players.get(n.entity.owner)?.team !== n.team) &&
            l.delete(t);
        let n = c
          .byType(`prop`)
          .filter((e) => e.weapon === 214 && e.hp > 0 && x(e));
        for (let [e, r] of a) {
          let a = c.get(e);
          if (!v(a)) continue;
          let o = n
            .filter((e) => I(c, e, a))
            .sort((e, t) => g(e.pos, a.pos) - g(t.pos, a.pos))[0];
          if (!o) continue;
          let l = b(a),
            u = 0,
            m = 0,
            _ = !1;
          ((l.grenade ??= t + k.grenadeEvery),
            (l.rocket ??= t + k.launcherEvery),
            t >= l.grenade &&
              s?.restock?.(a) &&
              ((l.grenade = t + k.grenadeEvery), (_ = !0), m++));
          for (let e of r.loadout) {
            let n = i[e],
              a = r.ammo[e];
            if (!n || !a || a.unlimited || a.reserve >= n.reserve) continue;
            if (n.class === `launcher`) {
              if (t < l.rocket) continue;
              (a.reserve++, (l.rocket = t + k.launcherEvery), (_ = !0), m++);
              continue;
            }
            if (!C(n)) continue;
            let o = Math.min(
              n.reserve - a.reserve,
              Math.ceil(n.reserve * k.share),
            );
            ((a.reserve += o), (u += o), (m += o / w(r, n)));
          }
          if (!u && !_) continue;
          (p.supplied(o.owner, a, m),
            E(a, u),
            o.owner !== a.owner && T(x(o), m, `Resupply`),
            (t >= (d.get(e) ?? 0) || _) &&
              (h(
                a,
                _
                  ? `Ammo crate · equipment restocked`
                  : `Ammo crate · +${u} rounds`,
              ),
              d.set(e, t + k.feedbackEvery)));
          let y = c.get(x(o)?.entityId);
          o.owner !== a.owner &&
            y &&
            t >= (f.get(y.id) ?? 0) &&
            (h(
              y,
              _
                ? `Teammate equipment resupplied`
                : `Teammate resupplied · ${u} rounds`,
            ),
            f.set(y.id, t + k.feedbackEvery));
        }
      },
      dispose() {
        for (let e of D) e();
        (p.dispose(),
          l.clear(),
          u.clear(),
          d.clear(),
          f.clear(),
          S.clear(),
          A.delete(c));
      },
    };
  return (A.set(c, j), j);
}
