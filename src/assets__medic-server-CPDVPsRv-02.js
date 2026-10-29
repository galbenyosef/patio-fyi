// assets__medic-server-CPDVPsRv 02 — pos
// Lines 57-446 of readable/assets__medic-server-CPDVPsRv.pretty.js (statement-aligned).
function l(c, l, u = {}) {
  let d = c.world,
    f = new Map(),
    p = new Map(),
    m = new Map(),
    h = new Map(),
    g = new Map(),
    _ = new Map(),
    v = new Map(),
    y = new Map(),
    b = new Map(),
    x = () => c.modules.get(`netcode`),
    S = (e) => x()?.getClientByEntity?.(e?.id) ?? null,
    C = (e, t, n, r = 3) => {
      let i = S(e);
      i && x()?.sendEvent?.(i.id, `ui:message`, { kind: t, text: n, ttl: r });
    },
    w = (e, t) => Math.hypot(e[0] - t[0], e[2] - t[2]),
    T = (e, t, n) => {
      if (e && t > 0 && ((e.score = (e.score | 0) + t), !e.isBot))
        for (let r of c.clients?.values?.() ?? [])
          r.playerId === e.id &&
            x()?.sendEvent?.(r.id, `score:award`, { points: t, reason: n });
    },
    E = (e, t, n = d.time.tick) => {
      let r = v.get(t);
      !r ||
        r.done ||
        n > r.until ||
        ((r.done = !0), T(e, a.callAnsweredScore, `Medic call answered`));
    },
    D = (e, t, n, r) => {
      let i = d.time.tick + n,
        a = y.get(e);
      (a && a.medic === t && a.until >= i) ||
        y.set(e, { medic: t, until: i, reason: r });
    },
    O = (e, t, n) => w(e, t) <= n && Math.abs(e[1] - t[1]) <= 2,
    k = (t) => t?.type === `soldier` && t.hp > 0 && !(t.state & e.DEAD),
    A = (e) => d.players.get(e?.owner)?.name ?? `A soldier`,
    j = (t) =>
      !n(d) &&
      f.get(t?.id)?.entity === t &&
      d.get(t.id) === t &&
      !!(t.state & e.DEAD) &&
      d.players.get(t.owner)?.entityId === t.id,
    M = (e, t) =>
      j(e) &&
      e.team === t &&
      !b.has(e.id) &&
      !f.get(e.id).locked &&
      d.time.tick - f.get(e.id).tick <= a.reviveWindow,
    N = (e, t, n) =>
      [1.1, 0.45].every(
        (r) =>
          !d.map.raycast(
            [e[0], e[1] + r, e[2]],
            [t, 0, n],
            a.riseGap + 0.35,
            null,
            null,
            !0,
          ),
      ),
    P = (e, n) => {
      let r = e.pos,
        i = r[0] - n.pos[0],
        o = r[2] - n.pos[2],
        s = Math.hypot(i, o);
      if (s < 0.2) {
        let n = t(e.yaw, 0);
        ((i = -n[0]), (o = -n[2]), (s = Math.hypot(i, o) || 1));
      }
      ((i /= s), (o /= s));
      for (let [t, n] of [
        [i, o],
        [-o, i],
        [o, -i],
        [-i, -o],
      ])
        if (N(r, t, n))
          return {
            pos: [r[0] + t * a.riseGap, r[1], r[2] + n * a.riseGap],
            yaw: e.yaw ?? 0,
          };
      return { pos: r.slice(), yaw: e.yaw ?? 0 };
    },
    F = (e) => [...f.values()].map((e) => e.entity).filter((t) => M(t, e)),
    I = (n) => {
      let o = F(n.team)
        .filter((e) => O(n.pos, e.pos, a.padsReach) && i(d, n, e))
        .sort((e, t) => w(n.pos, e.pos) - w(n.pos, t.pos))[0];
      if (o) return { kind: `revive`, target: o };
      let s = t(n.yaw, 0),
        c = d
          .byType(`soldier`)
          .filter(
            (t) =>
              k(t) &&
              r(d, n, t) &&
              !(t.state & e.IN_VEHICLE) &&
              O(n.pos, t.pos, a.enemyReach) &&
              ((t.pos[0] - n.pos[0]) * s[0] + (t.pos[2] - n.pos[2]) * s[2]) /
                Math.max(0.01, w(n.pos, t.pos)) >=
                a.enemyCone,
          )
          .sort((e, t) => w(n.pos, e.pos) - w(n.pos, t.pos))[0];
      return c ? { kind: `kill`, target: c } : null;
    },
    L = [
      c.events.on(`medic:call`, ({ playerId: e, durationTicks: t }) => {
        Number.isInteger(e) && v.set(e, { until: d.time.tick + (t | 0) });
      }),
      c.events.on(
        `player:death`,
        ({ victimId: e, weapon: t, killerPlayerId: r, victimPlayerId: i }) => {
          let s = d.players.get(r),
            l = d.players.get(i);
          if (s && l && s !== l && s.team !== l.team && !n(d)) {
            let e = y.get(s.id);
            (e &&
              d.time.tick <= e.until &&
              e.medic !== s &&
              e.medic.team === s.team &&
              T(e.medic, a.assistScore, e.reason),
              t === `Defibrillator` &&
                T(s, a.defibKillScore, `Defibrillator kill`));
          }
          i != null && y.delete(i);
          let u = d.get(e);
          if (u?.type !== `soldier` || n(d) || t === `Redeploy`) return;
          let m = p.get(i),
            h = m != null && d.time.tick - m <= a.reviveLockout;
          if ((f.set(u.id, { entity: u, tick: d.time.tick, locked: h }), h)) {
            let e = { entityId: u.id, playerId: i };
            (c.events.emit(`medic:norevive`, e),
              x()?.broadcastEvent?.(`medic:norevive`, e));
            return;
          }
          let g = d
            .byType(`soldier`)
            .filter(
              (e) =>
                e !== u &&
                k(e) &&
                e.team === u.team &&
                o(d, e) &&
                w(e.pos, u.pos) <= a.callRange,
            )
            .sort((e, t) => w(e.pos, u.pos) - w(t.pos, u.pos))[0];
          if (!g) return;
          let _ = d.players.get(u.owner);
          _?.isBot
            ? c.modules
                .get(`gamemodes`)
                ?.holdRespawn?.(_.id, d.time.tick + a.botHoldTicks)
            : C(
                u,
                `squad`,
                `${A(g)} is a medic ${Math.round(w(g.pos, u.pos))} m away · wait for a revive`,
                6,
              );
        },
      ),
      c.events.on(`net:rpc`, ({ client: e, rpc: t }) => {
        if (!e || (t?.name !== `medic:pads` && t?.name !== `medic:release`))
          return;
        let n = d.get(e.entityId);
        if (
          n &&
          n.type === `soldier` &&
          n.owner === e.playerId &&
          t.data?.entityId === n.id
        ) {
          if (t?.name === `medic:release`) return R.release(n);
          R.pads(n, { hold: t.data?.hold === !0 });
        }
      }),
      c.events.on(`world:despawn`, ({ id: e }) => {
        (f.delete(e), m.delete(e), h.delete(e), _.delete(e), b.delete(e));
      }),
    ],
    R = {
      bodies: F,
      left: (e) => {
        let t = f.get(e?.id);
        return t && M(e, e.team)
          ? Math.max(0, a.reviveWindow - (d.time.tick - t.tick))
          : 0;
      },
      inbound(e, t) {
        if (!k(e) || !R.left(t)) return;
        let n = _.get(t.id) ?? new Set();
        n.has(e.id) ||
          (n.add(e.id),
          _.set(t.id, n),
          C(
            t,
            `squad`,
            `${A(e)} is coming to revive you · ${Math.round(w(e.pos, t.pos))} m`,
            4,
          ));
      },
      busy: (e) => m.has(e),
      rising: (e) => b.get(e) ?? null,
      canPads: (t) =>
        !u.busy?.(t) &&
        k(t) &&
        o(d, t) &&
        !(t.state & e.IN_VEHICLE) &&
        !m.has(t.id) &&
        d.time.tick >= (h.get(t.id) ?? 0),
      pads(e, { hold: t = !1 } = {}) {
        if (!R.canPads(e) || d.match.phase === `ended`) return `unavailable`;
        let n = I(e);
        if (!n)
          return (
            h.set(e.id, d.time.tick + a.padsMissCooldown),
            C(
              e,
              `warn`,
              `Defibrillator: no fallen teammate or enemy within reach`,
              2,
            ),
            `none`
          );
        let r = d.time.tick;
        (m.set(e.id, { medic: e, ...n, held: !!t, due: r + a.padsCharge }),
          h.set(e.id, r + a.padsCooldown));
        let i = {
          entityId: e.id,
          targetId: n.target.id,
          kind: n.kind,
          pos: n.target.pos.slice(),
        };
        return (
          c.events.emit(`medic:pads`, i),
          x()?.broadcastEvent?.(`medic:pads`, i),
          n.kind
        );
      },
      release(e) {
        let t = d.time.tick,
          n = m.get(e?.id);
        n?.medic === e && (n.held = !1);
        for (let n of b.values())
          n.medic === e &&
            n.held &&
            ((n.held = !1), (n.due = Math.max(n.shock + a.reviveRise, t)));
      },
      tick() {
        let t = d.time.tick;
        for (let [n, r] of m) {
          if (t < r.due) continue;
          m.delete(n);
          let i = r.medic;
          if (
            d.get(n) !== i ||
            !k(i) ||
            i.state & e.IN_VEHICLE ||
            !O(i.pos, r.target.pos, a.padsReach + a.padsHold)
          )
            continue;
          if (r.kind === `kill`) {
            let t = r.target;
            if (d.get(t.id) !== t || !k(t)) continue;
            let n = t.hp;
            ((t.hp = 0),
              (t.state |= e.DEAD),
              l(c, {
                targetId: t.id,
                attackerId: i.id,
                amount: n,
                part: `torso`,
                weapon: `Defibrillator`,
                pos: t.pos.slice(),
                fatal: !0,
              }));
            continue;
          }
          let o = r.target;
          if (!M(o, i.team)) continue;
          b.set(o.id, {
            medic: i,
            body: o,
            shock: t,
            held: !!r.held,
            due: t + (r.held ? a.holdRise : a.reviveRise),
            from: i.pos.slice(),
          });
          let s = {
            medicId: i.id,
            targetId: o.id,
            playerId: o.owner,
            pos: o.pos.slice(),
            riseTicks: a.reviveRise,
            ...(r.held ? { held: !0, holdTicks: a.holdRise } : {}),
          };
          (c.events.emit(`medic:shock`, s),
            x()?.broadcastEvent?.(`medic:shock`, s));
        }
        for (let [n, r] of b) {
          if (
            (r.held &&
              (d.get(r.medic.id) !== r.medic ||
                !k(r.medic) ||
                r.medic.state & e.IN_VEHICLE) &&
              ((r.held = !1), (r.due = Math.max(r.shock + a.reviveRise, t))),
            t < r.due)
          )
            continue;
          b.delete(n);
          let i = r.body;
          if (!j(i) || d.match.phase === `ended`) continue;
          let o = r.medic,
            s = d.get(o.id) === o && !(o.state & e.IN_VEHICLE);
          s && (r.from = o.pos.slice());
          let l = P(s ? o : { pos: r.from, yaw: o.yaw }, i),
            m = f.get(i.id).tick,
            h = u.carry?.(i),
            g = i.owner,
            _ = c.modules.get(`gamemodes`)?.revivePlayer?.(g, l);
          if (!_) continue;
          (u.restore?.(_, h),
            k(o) && (o.hp = Math.min(o.maxHp, o.hp + a.reviveMedicHeal)),
            p.set(g, t));
          let v = d.players.get(o.owner);
          (T(v, a.reviveScore, `Revived ${A(_)}`),
            r.shock - m <= a.quickReviveTicks &&
              T(v, a.quickReviveScore, `Quick revive`),
            E(v, g, m),
            D(g, v, a.reviveAssistTicks, `Revive assist`));
          let y = {
            medicId: o.id,
            entityId: _.id,
            playerId: g,
            pos: _.pos.slice(),
          };
          (c.events.emit(`medic:revive`, y),
            x()?.broadcastEvent?.(`medic:revive`, y),
            C(_, `squad`, `Revived by ${A(o)}`, 4));
        }
        if (t % a.medkitEvery) return;
        let n = d.byType(`prop`).filter((e) => e.weapon === 213 && e.hp > 0);
        if (n.length)
          for (let t of d.byType(`soldier`)) {
            if (!k(t) || t.hp >= t.maxHp || t.state & e.IN_VEHICLE) continue;
            let r = n
              .filter(
                (e) =>
                  w(e.pos, t.pos) <= a.medkitRadius &&
                  Math.abs(e.pos[1] - t.pos[1]) <= a.medkitHeight,
              )
              .sort((e, n) => w(e.pos, t.pos) - w(n.pos, t.pos))[0];
            if (!r) continue;
            let i = Math.min(a.medkitHeal, t.maxHp - t.hp);
            t.hp += i;
            {
              let e = S(t);
              e &&
                x()?.sendEvent?.(e.id, `supply:received`, {
                  kind: `health`,
                  amount: i,
                });
            }
            let o = d.players.get(r.owner);
            if (!o || o.team !== t.team || r.owner === t.owner) continue;
            let s = (g.get(o.id) ?? 0) + i,
              c = Math.floor(s / a.healScoreHp);
            (g.set(o.id, s - c * a.healScoreHp), T(o, c * a.healScore, `Heal`));
            let l = d.players.get(t.owner);
            l && (E(o, l.id), D(l.id, o, a.healAssistTicks, `Heal assist`));
          }
      },
      dispose() {
        (L.forEach((e) => e?.()),
          f.clear(),
          p.clear(),
          m.clear(),
          h.clear(),
          g.clear(),
          _.clear(),
          v.clear(),
          y.clear(),
          b.clear(),
          s.delete(d));
      },
    };
  return (s.set(d, R), R);
}
