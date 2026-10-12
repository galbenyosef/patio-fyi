// assets__ammo-box-CWU_ijOn 02 — pos
// Lines 292-599 of readable/assets__ammo-box-CWU_ijOn.pretty.js (statement-aligned).
function D(n, r) {
  let i = n.world,
    a = new Map(),
    c = new Map(),
    l = new Map(),
    u = new Map(),
    d = new Map(),
    f = new Map(),
    p = new Map(),
    m = () => n.modules.get(`netcode`),
    h = (e) => m()?.getClientByEntity?.(e?.id) ?? null,
    g = (e, t, n, r = 3) => {
      let i = h(e);
      i && m()?.sendEvent?.(i.id, `ui:message`, { kind: t, text: n, ttl: r });
    },
    _ = (e, t) => Math.hypot(e[0] - t[0], e[2] - t[2]),
    v = (e, t, r) => {
      if (e && t > 0 && ((e.score = (e.score | 0) + t), !e.isBot))
        for (let i of n.clients?.values?.() ?? [])
          i.playerId === e.id &&
            m()?.sendEvent?.(i.id, `score:award`, { points: t, reason: r });
    },
    y = (e, t, n = i.time.tick) => {
      let r = f.get(t);
      !r ||
        r.done ||
        n > r.until ||
        ((r.done = !0), v(e, C.callAnsweredScore, `Medic call answered`));
    },
    b = (e, t, n, r) => {
      let a = i.time.tick + n,
        o = p.get(e);
      (o && o.medic === t && o.until >= a) ||
        p.set(e, { medic: t, until: a, reason: r });
    },
    x = (e, t, n) => _(e, t) <= n && Math.abs(e[1] - t[1]) <= 2,
    S = (t) => t?.type === `soldier` && t.hp > 0 && !(t.state & e.DEAD),
    E = (e) => i.players.get(e?.owner)?.name ?? `A soldier`,
    D = (t, n) => {
      let r = a.get(t?.id);
      return (
        !o(i) &&
        !!r &&
        r.entity === t &&
        i.get(t.id) === t &&
        t.team === n &&
        t.state & e.DEAD &&
        i.time.tick - r.tick <= C.reviveWindow &&
        i.players.get(t.owner)?.entityId === t.id
      );
    },
    O = (e) => [...a.values()].map((e) => e.entity).filter((t) => D(t, e)),
    k = (n) => {
      let r = O(n.team)
        .filter((e) => x(n.pos, e.pos, C.padsReach))
        .sort((e, t) => _(n.pos, e.pos) - _(n.pos, t.pos))[0];
      if (r) return { kind: `revive`, target: r };
      let a = t(n.yaw, 0),
        o = i
          .byType(`soldier`)
          .filter(
            (t) =>
              S(t) &&
              s(i, n, t) &&
              !(t.state & e.IN_VEHICLE) &&
              x(n.pos, t.pos, C.enemyReach) &&
              ((t.pos[0] - n.pos[0]) * a[0] + (t.pos[2] - n.pos[2]) * a[2]) /
                Math.max(0.01, _(n.pos, t.pos)) >=
                C.enemyCone,
          )
          .sort((e, t) => _(n.pos, e.pos) - _(n.pos, t.pos))[0];
      return o ? { kind: `kill`, target: o } : null;
    },
    A = [
      n.events.on(`medic:call`, ({ playerId: e, durationTicks: t }) => {
        Number.isInteger(e) && f.set(e, { until: i.time.tick + (t | 0) });
      }),
      n.events.on(
        `player:death`,
        ({ victimId: e, weapon: t, killerPlayerId: r, victimPlayerId: s }) => {
          let c = i.players.get(r),
            l = i.players.get(s);
          if (c && l && c !== l && c.team !== l.team && !o(i)) {
            let e = p.get(c.id);
            (e &&
              i.time.tick <= e.until &&
              e.medic !== c &&
              e.medic.team === c.team &&
              v(e.medic, C.assistScore, e.reason),
              t === `Defibrillator` &&
                v(c, C.defibKillScore, `Defibrillator kill`));
          }
          s != null && p.delete(s);
          let u = i.get(e);
          if (u?.type !== `soldier` || o(i) || t === `Redeploy`) return;
          a.set(u.id, { entity: u, tick: i.time.tick });
          let d = i
            .byType(`soldier`)
            .filter(
              (e) =>
                e !== u &&
                S(e) &&
                e.team === u.team &&
                w(i, e) &&
                _(e.pos, u.pos) <= C.callRange,
            )
            .sort((e, t) => _(e.pos, u.pos) - _(t.pos, u.pos))[0];
          if (!d) return;
          let f = i.players.get(u.owner);
          f?.isBot
            ? n.modules
                .get(`gamemodes`)
                ?.holdRespawn?.(f.id, i.time.tick + C.botHoldTicks)
            : g(
                u,
                `squad`,
                `${E(d)} is a medic ${Math.round(_(d.pos, u.pos))} m away · wait for a revive`,
                6,
              );
        },
      ),
      n.events.on(`net:rpc`, ({ client: e, rpc: t }) => {
        if (!e || t?.name !== `medic:pads`) return;
        let n = i.get(e.entityId);
        n &&
          n.type === `soldier` &&
          n.owner === e.playerId &&
          t.data?.entityId === n.id &&
          j.pads(n);
      }),
      n.events.on(`world:despawn`, ({ id: e }) => {
        (a.delete(e), c.delete(e), l.delete(e), d.delete(e));
      }),
    ],
    j = {
      bodies: O,
      left: (e) => {
        let t = a.get(e?.id);
        return t && D(e, e.team)
          ? Math.max(0, C.reviveWindow - (i.time.tick - t.tick))
          : 0;
      },
      inbound(e, t) {
        if (!S(e) || !j.left(t)) return;
        let n = d.get(t.id) ?? new Set();
        n.has(e.id) ||
          (n.add(e.id),
          d.set(t.id, n),
          g(
            t,
            `squad`,
            `${E(e)} is coming to revive you · ${Math.round(_(e.pos, t.pos))} m`,
            4,
          ));
      },
      canPads: (t) =>
        S(t) &&
        w(i, t) &&
        !(t.state & e.IN_VEHICLE) &&
        !c.has(t.id) &&
        i.time.tick >= (l.get(t.id) ?? 0),
      pads(e) {
        if (!j.canPads(e) || i.match.phase === `ended`) return `unavailable`;
        let t = k(e);
        if (!t)
          return (
            l.set(e.id, i.time.tick + C.padsMissCooldown),
            g(
              e,
              `warn`,
              `Defibrillator: no fallen teammate or enemy within reach`,
              2,
            ),
            `none`
          );
        let r = i.time.tick;
        (c.set(e.id, { medic: e, ...t, due: r + C.padsCharge }),
          l.set(e.id, r + C.padsCooldown));
        let a = {
          entityId: e.id,
          targetId: t.target.id,
          kind: t.kind,
          pos: t.target.pos.slice(),
        };
        return (
          n.events.emit(`medic:pads`, a),
          m()?.broadcastEvent?.(`medic:pads`, a),
          t.kind
        );
      },
      tick() {
        let t = i.time.tick;
        for (let [o, s] of c) {
          if (t < s.due) continue;
          c.delete(o);
          let l = s.medic;
          if (
            i.get(o) !== l ||
            !S(l) ||
            l.state & e.IN_VEHICLE ||
            !x(l.pos, s.target.pos, C.padsReach + 0.5)
          )
            continue;
          if (s.kind === `kill`) {
            let t = s.target;
            if (i.get(t.id) !== t || !S(t)) continue;
            let a = t.hp;
            ((t.hp = 0),
              (t.state |= e.DEAD),
              r(n, {
                targetId: t.id,
                attackerId: l.id,
                amount: a,
                part: `torso`,
                weapon: `Defibrillator`,
                pos: t.pos.slice(),
                fatal: !0,
              }));
            continue;
          }
          let u = s.target;
          if (!D(u, l.team)) continue;
          let d = a.get(u.id).tick,
            f = u.owner,
            p = n.modules
              .get(`gamemodes`)
              ?.revivePlayer?.(f, { pos: u.pos.slice(), yaw: u.yaw });
          if (!p) continue;
          let h = i.players.get(l.owner);
          (v(h, C.reviveScore, `Revived ${E(p)}`),
            t - d <= C.quickReviveTicks &&
              v(h, C.quickReviveScore, `Quick revive`),
            y(h, f, d),
            b(f, h, C.reviveAssistTicks, `Revive assist`));
          let _ = {
            medicId: l.id,
            entityId: p.id,
            playerId: f,
            pos: p.pos.slice(),
          };
          (n.events.emit(`medic:revive`, _),
            m()?.broadcastEvent?.(`medic:revive`, _),
            g(p, `squad`, `Revived by ${E(l)}`, 4));
        }
        if (t % C.medkitEvery) return;
        let o = i.byType(`prop`).filter((e) => e.weapon === 213 && e.hp > 0);
        if (o.length)
          for (let t of i.byType(`soldier`)) {
            if (!S(t) || t.hp >= t.maxHp || t.state & e.IN_VEHICLE) continue;
            let n = o
              .filter(
                (e) =>
                  _(e.pos, t.pos) <= C.medkitRadius &&
                  Math.abs(e.pos[1] - t.pos[1]) <= C.medkitHeight,
              )
              .sort((e, n) => _(e.pos, t.pos) - _(n.pos, t.pos))[0];
            if (!n) continue;
            let r = Math.min(C.medkitHeal, t.maxHp - t.hp);
            t.hp += r;
            let a = i.players.get(n.owner);
            if (!a || a.team !== t.team || n.owner === t.owner) continue;
            let s = (u.get(a.id) ?? 0) + r,
              c = Math.floor(s / C.healScoreHp);
            (u.set(a.id, s - c * C.healScoreHp), v(a, c * C.healScore, `Heal`));
            let l = i.players.get(t.owner);
            l && (y(a, l.id), b(l.id, a, C.healAssistTicks, `Heal assist`));
          }
      },
      dispose() {
        (A.forEach((e) => e?.()),
          a.clear(),
          c.clear(),
          l.clear(),
          u.clear(),
          d.clear(),
          f.clear(),
          p.clear(),
          T.delete(i));
      },
    };
  return (T.set(i, j), j);
}
var O = Object.freeze({
    radius: 4,
    height: 2.2,
    every: 60,
    share: 0.1,
    launcherEvery: 360,
    fragEvery: 300,
    score: 10,
    scoreShare: 0.5,
  }),
  k = new WeakMap(),
  A = (e) => k.get(e) ?? null;
function j(e) {
  let t = 1;
  for (let n of e?.loadout ?? []) {
    let r = i[n],
      a = e.ammo[n];
    r &&
      a &&
      !a.unlimited &&
      r.class !== `launcher` &&
      r.reserve &&
      (t = Math.min(t, a.reserve / r.reserve));
  }
  return t;
}
