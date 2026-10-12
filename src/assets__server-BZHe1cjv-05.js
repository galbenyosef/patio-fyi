// assets__server-BZHe1cjv 05 — team
// Lines 812-1116 of readable/assets__server-BZHe1cjv.pretty.js (statement-aligned).
function ze(t) {
  let n = t.world,
    i = t.config?.career ?? null,
    a = new Map(),
    c = new Map(),
    l = [],
    u = new Map(),
    d = new Map(),
    f = new Map(),
    p = !1,
    m = () => t.modules.get(`netcode`),
    h = (e) => (e ? n.players.get(e.owner) : null),
    g = (e) => n.get(n.players.get(e)?.entityId),
    _ = () => ({
      kills: 0,
      heads: 0,
      revives: 0,
      recent: [],
      hurt: !1,
      knives: 0,
      pistols: 0,
      lmgs: 0,
      roadkills: 0,
      ace: null,
      tank: null,
    }),
    v = (e) => {
      let t = c.get(e);
      return (
        t ||
          c.set(
            e,
            (t = {
              ..._(),
              spawnTick: -1e9,
              lastKiller: null,
              sameTick: null,
              victims: new Map(),
            }),
          ),
        t
      );
    },
    y = (e) => Object.assign(e, _());
  function b(e, n) {
    let r = h(e);
    if (!r || r.isBot || !_e[n]) return;
    let o = i?.achieve?.(r.name, n);
    if (!Number.isFinite(o)) {
      let e = `${String(r.name).toLowerCase()}|${n}`;
      a.set(e, (o = (a.get(e) ?? 0) + 1));
    }
    let s = m()?.getClientByEntity?.(e.id);
    (s && m()?.sendEvent?.(s.id, `achievement:earned`, { id: n, count: o }),
      t.events.emit(`achievement:earned`, {
        playerId: r.id,
        entityId: e.id,
        id: n,
        count: o,
      }));
  }
  let x = (e) => e.pos[1] - o(n, e.pos[0], e.pos[2], e.pos[1]),
    S = (t) => (t.state & e.IN_VEHICLE ? n.get(t.seat) : null),
    C = () => t.modules.get(`vehicles`)?.getFleet?.(),
    w = (e) => {
      let t = S(e);
      return (
        !!t &&
        !!s[t.weapon]?.air &&
        C()?.get(t.id)?.seats?.[0] === e.id &&
        x(t) > 2
      );
    };
  return (
    l.push(
      t.events.on(`match:phase`, (e) => {
        if (e?.phase === `live`) {
          p = !1;
          for (let e of c.values()) e.victims.clear();
          f.clear();
        }
      }),
    ),
    l.push(
      t.events.on(`player:spawn`, ({ entityId: e }) => {
        let t = h(n.get(e));
        if (!t) return;
        let r = y(v(t.id));
        r.spawnTick = n.time.tick;
      }),
    ),
    l.push(
      t.events.on(`spot:target`, (e) => {
        Number.isInteger(e?.targetId) &&
          e.spotterId != null &&
          d.set(e.targetId, {
            spotter: e.spotterId,
            team: e.team,
            until: e.expiresTick ?? n.time.tick + 900,
          });
      }),
    ),
    l.push(
      t.events.on(`player:damage`, (t) => {
        let i = n.get(t?.targetId),
          a = t?.attackerId == null ? null : n.get(t.attackerId),
          o = n.time.tick;
        if (!i) return;
        if (a && a.id !== i.id) {
          u.set(i.id, { attackerId: a.id, tick: o });
          let e = h(i);
          e && (t.amount ?? 0) > 0 && (v(e.id).hurt = !0);
        }
        if (!t.fatal) return;
        let c = h(i),
          l = h(a);
        if (c) {
          let e = v(c.id);
          ((e.lastKiller = l && l.id !== c.id ? l.id : null), y(e));
        }
        let f = d.get(i.id);
        if ((d.delete(i.id), !a || a.id === i.id || !l || a.team === i.team))
          return;
        if (
          f &&
          f.until >= o &&
          f.spotter !== l.id &&
          n.players.get(f.spotter)?.team === a.team
        ) {
          let e = g(f.spotter);
          e && b(e, `eagleeye`);
        }
        if (l.isBot) return;
        let m = v(l.id),
          _ = t.weapon,
          T = Pe(a.pos, i.pos),
          E = a.hp <= 0 || !!(a.state & e.DEAD);
        (m.kills++,
          t.headshot && m.heads++,
          (m.recent = m.recent.filter((e) => o - e < Re)),
          m.recent.push(o));
        let D = (e, t) =>
          m.recent.length >= e && o - m.recent[m.recent.length - e] < t;
        if (
          (n.match?.phase === `live` && !p && ((p = !0), b(a, `firstblood`)),
          m.sameTick?.tick === o && m.sameTick.w === _)
        ) {
          let e = ++m.sameTick.n;
          (e === 2 && b(a, K(_) ? `twobirds` : W(_) ? `collateral` : null),
            e === 3 && W(_) && b(a, `kebab`));
        } else m.sameTick = { tick: o, w: _, n: 1 };
        (w(i)
          ? b(a, `grounded`)
          : !S(i) && !(i.ext?.pl?.lad > 0) && x(i) > I.clayAir && b(a, `clay`),
          !S(i) && i.ext?.pl?.lad > 0 && b(a, `offladder`),
          i.state & e.SWIMMING && b(a, `fishbarrel`),
          W(_) &&
            (T >= I.longshot && b(a, `longshot`),
            T >= I.marathon && b(a, `marathon`),
            t.headshot && T >= I.bullseye && b(a, `bullseye`),
            t.headshot && T >= I.sharpshooter && b(a, `sharpshooter`),
            T < I.pointblank && b(a, `pointblank`),
            G(_) === `sniper` &&
              !(a.state & e.ADS) &&
              T >= I.noscopeMin &&
              b(a, `noscope`),
            G(_) === `sniper` &&
              G(i.weapon) === `sniper` &&
              T >= I.duelist &&
              b(a, `duelist`),
            a.pos[1] - i.pos[1] >= I.highground && b(a, `highground`),
            a.stance === r.PRONE && T >= I.snake && b(a, `snake`),
            G(_) === `pistol` && ++m.pistols === I.sidearm && b(a, `sidearm`),
            G(_) === `lmg` && ++m.lmgs === I.suppressor && b(a, `suppressor`)),
          _ === `Knife` &&
            (b(a, `knife`), ++m.knives === I.silent && b(a, `silent`)),
          _ === `Roadkill` &&
            (b(a, `roadrage`), ++m.roadkills === I.bowling && b(a, `bowling`)),
          _ === `Defibrillator` && b(a, `clear`),
          K(_) &&
            (E && b(a, `grave`),
            t.impact && b(a, `bonk`),
            /RETURNED/i.test(_) && b(a, `sender`)),
          Ne(_) && b(a, `overkill`));
        let O = S(a);
        if (
          (!O &&
            !E &&
            (a.state & e.CHUTE
              ? b(a, `deathfromabove`)
              : !(a.ext?.pl?.lad > 0) && x(a) > I.jump && b(a, `jumpshot`)),
          O?.weapon === Fe && b(a, `driveby`),
          O?.weapon === Le &&
            C()?.get(O.id)?.seats?.[0] !== a.id &&
            b(a, `doorgunner`),
          O?.weapon === q
            ? (m.tank?.v !== O.id && (m.tank = { v: O.id, n: 0 }),
              ++m.tank.n === I.steelfist && b(a, `steelfist`))
            : (m.tank = null),
          O && s[O.weapon]?.air
            ? (m.ace?.v !== O.id && (m.ace = { v: O.id, n: 0 }),
              ++m.ace.n === I.ace && b(a, `ace`))
            : (m.ace = null),
          D(I.double[0], I.double[1]) &&
            !D(I.double[0] + 1, I.double[1]) &&
            b(a, `double`),
          m.recent.filter((e) => o - e < I.triple[1]).length === I.triple[0] &&
            b(a, `triple`),
          m.recent.filter((e) => o - e < I.quad[1]).length === I.quad[0] &&
            b(a, `quad`),
          m.recent.filter((e) => o - e < I.five[1]).length === I.five[0] &&
            b(a, `five`),
          m.kills === I.unstoppable && b(a, `unstoppable`),
          m.kills === I.rampage && b(a, `rampage`),
          m.kills === I.legend && b(a, `legend`),
          m.kills === I.untouchable && !m.hurt && b(a, `untouchable`),
          t.headshot && m.heads === I.headhunter && b(a, `headhunter`),
          t.headshot && m.heads === I.brainiac && b(a, `brainiac`),
          c &&
            m.lastKiller === c.id &&
            (b(a, `payback`), (m.lastKiller = null)),
          c)
        ) {
          let e = (m.victims.get(c.id) ?? 0) + 1;
          (m.victims.set(c.id, e), e === I.nemesis && b(a, `nemesis`));
        }
        (o - m.spawnTick <= I.quickdraw && b(a, `quickdraw`),
          !E && a.hp <= (a.maxHp || 100) * I.lastbreath && b(a, `lastbreath`));
        let k = !1;
        for (let [e, t] of u) {
          if (o - t.tick > 600) {
            u.delete(e);
            continue;
          }
          !k &&
            t.attackerId === i.id &&
            o - t.tick <= I.bodyguard &&
            e !== a.id &&
            n.get(e)?.team === a.team &&
            ((k = !0), b(a, `bodyguard`));
        }
      }),
    ),
    l.push(
      t.events.on(`vehicle:damage`, (e) => {
        if (!e?.fatal || e.attackerId == null) return;
        let t = n.get(e.vehicleId),
          r = n.get(e.attackerId);
        if (
          t &&
          r &&
          r.team !== t.team &&
          (t.weapon === q && b(r, `tankbuster`),
          t.weapon === Ie && b(r, `canopener`),
          s[t.weapon]?.air)
        ) {
          (b(r, `skyfall`),
            (e.weapon === 10 || /JAVELIN/i.test(String(e.weapon))) &&
              b(r, `lockon`));
          let t = S(r);
          t && s[t.weapon]?.air && b(r, `dogfight`);
        }
      }),
    ),
    l.push(
      t.events.on(`medic:revive`, (e) => {
        let t = n.get(e?.medicId),
          r = h(t);
        if (!r) return;
        let i = v(r.id);
        (i.revives++,
          i.revives === I.angel && b(t, `angel`),
          i.revives === I.surgeon && b(t, `surgeon`));
      }),
    ),
    l.push(
      t.events.on(`objective:changed`, (t) => {
        let r = n.match?.objectives?.find((e) => e.id === t?.objectiveId);
        if (!r) return;
        let i = f.get(r.id);
        if (
          (f.set(r.id, t.team),
          i === void 0 || t.team < 0 || t.team === i || !t.spawnable)
        )
          return;
        let a = [...n.byType(`soldier`)].filter(
          (n) =>
            n.team === t.team &&
            n.hp > 0 &&
            !(n.state & e.DEAD) &&
            Math.hypot(n.pos[0] - r.pos[0], n.pos[2] - r.pos[2]) <=
              (r.radius ?? 10) &&
            Math.abs(n.pos[1] - r.pos[1]) <= 8,
        );
        for (let e of a) (b(e, `flag`), a.length === 1 && b(e, `lonewolf`));
      }),
    ),
    {
      award: b,
      dispose() {
        for (let e of l) e?.();
      },
    }
  );
}
