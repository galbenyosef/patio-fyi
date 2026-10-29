// assets__server-hTWD3yzF 05 — pos
// Lines 880-1224 of readable/assets__server-hTWD3yzF.pretty.js (statement-aligned).
function Ge(t) {
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
    if (!r || r.isBot || !xe[n]) return;
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
          T = ze(a.pos, i.pos),
          E = a.hp <= 0 || !!(a.state & e.DEAD);
        (m.kills++,
          t.headshot && m.heads++,
          (m.recent = m.recent.filter((e) => o - e < We)),
          m.recent.push(o));
        let D = (e, t) =>
          m.recent.length >= e && o - m.recent[m.recent.length - e] < t;
        if (
          (n.match?.phase === `live` && !p && ((p = !0), b(a, `firstblood`)),
          m.sameTick?.tick === o && m.sameTick.w === _)
        ) {
          let e = ++m.sameTick.n;
          (e === 2 && b(a, Le(_) ? `twobirds` : W(_) ? `collateral` : null),
            e === 3 && W(_) && b(a, `kebab`));
        } else m.sameTick = { tick: o, w: _, n: 1 };
        (w(i)
          ? b(a, `grounded`)
          : !S(i) && !(i.ext?.pl?.lad > 0) && x(i) > F.clayAir && b(a, `clay`),
          !S(i) && i.ext?.pl?.lad > 0 && b(a, `offladder`),
          i.state & e.SWIMMING && b(a, `fishbarrel`),
          W(_) &&
            (T >= F.longshot && b(a, `longshot`),
            T >= F.marathon && b(a, `marathon`),
            t.headshot && T >= F.bullseye && b(a, `bullseye`),
            t.headshot && T >= F.sharpshooter && b(a, `sharpshooter`),
            T < F.pointblank && b(a, `pointblank`),
            G(_) === `sniper` &&
              !(a.state & e.ADS) &&
              T >= F.noscopeMin &&
              b(a, `noscope`),
            G(_) === `sniper` &&
              G(i.weapon) === `sniper` &&
              T >= F.duelist &&
              b(a, `duelist`),
            a.pos[1] - i.pos[1] >= F.highground && b(a, `highground`),
            a.stance === r.PRONE && T >= F.snake && b(a, `snake`),
            G(_) === `pistol` && ++m.pistols === F.sidearm && b(a, `sidearm`),
            G(_) === `lmg` && ++m.lmgs === F.suppressor && b(a, `suppressor`)),
          _ === `Knife` &&
            (b(a, `knife`), ++m.knives === F.silent && b(a, `silent`)),
          _ === `Roadkill` &&
            (b(a, `roadrage`), ++m.roadkills === F.bowling && b(a, `bowling`)),
          _ === `Defibrillator` && b(a, `clear`),
          Le(_) &&
            (E && b(a, `grave`),
            t.impact && b(a, `bonk`),
            /RETURNED/i.test(_) && b(a, `sender`)),
          Re(_) && b(a, `overkill`));
        let O = S(a);
        if (
          (!O &&
            !E &&
            (a.state & e.CHUTE
              ? b(a, `deathfromabove`)
              : !(a.ext?.pl?.lad > 0) && x(a) > F.jump && b(a, `jumpshot`)),
          O?.weapon === Be && b(a, `driveby`),
          O?.weapon === Ue &&
            C()?.get(O.id)?.seats?.[0] !== a.id &&
            b(a, `doorgunner`),
          O?.weapon === He
            ? (m.tank?.v !== O.id && (m.tank = { v: O.id, n: 0 }),
              ++m.tank.n === F.steelfist && b(a, `steelfist`))
            : (m.tank = null),
          O && s[O.weapon]?.air
            ? (m.ace?.v !== O.id && (m.ace = { v: O.id, n: 0 }),
              ++m.ace.n === F.ace && b(a, `ace`))
            : (m.ace = null),
          D(F.double[0], F.double[1]) &&
            !D(F.double[0] + 1, F.double[1]) &&
            b(a, `double`),
          m.recent.filter((e) => o - e < F.triple[1]).length === F.triple[0] &&
            b(a, `triple`),
          m.recent.filter((e) => o - e < F.quad[1]).length === F.quad[0] &&
            b(a, `quad`),
          m.recent.filter((e) => o - e < F.five[1]).length === F.five[0] &&
            b(a, `five`),
          m.kills === F.unstoppable && b(a, `unstoppable`),
          m.kills === F.rampage && b(a, `rampage`),
          m.kills === F.legend && b(a, `legend`),
          m.kills === F.untouchable && !m.hurt && b(a, `untouchable`),
          t.headshot && m.heads === F.headhunter && b(a, `headhunter`),
          t.headshot && m.heads === F.brainiac && b(a, `brainiac`),
          c &&
            m.lastKiller === c.id &&
            (b(a, `payback`), (m.lastKiller = null)),
          c)
        ) {
          let e = (m.victims.get(c.id) ?? 0) + 1;
          (m.victims.set(c.id, e), e === F.nemesis && b(a, `nemesis`));
        }
        (o - m.spawnTick <= F.quickdraw && b(a, `quickdraw`),
          !E && a.hp <= (a.maxHp || 100) * F.lastbreath && b(a, `lastbreath`));
        let k = !1;
        for (let [e, t] of u) {
          if (o - t.tick > 600) {
            u.delete(e);
            continue;
          }
          !k &&
            t.attackerId === i.id &&
            o - t.tick <= F.bodyguard &&
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
          (t.weapon === He && b(r, `tankbuster`),
          t.weapon === Ve && b(r, `canopener`),
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
          i.revives === F.angel && b(t, `angel`),
          i.revives === F.surgeon && b(t, `surgeon`));
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
var K = Object.freeze({ safe: 4.5, lethal: 16, weapon: `Fall` });
function Ke(e, t = 100) {
  if (!(e > K.safe)) return 0;
  let n = Math.min(1, (e - K.safe) / (K.lethal - K.safe));
  return Math.round(t * n);
}
function qe(t, n) {
  let r = new WeakMap();
  return {
    tick() {
      for (let i of t.byType(`soldier`)) {
        let t = i.ext?.pl;
        if (
          !t ||
          (r.get(t) ?? 0) === t.landN ||
          (r.set(t, t.landN), i.hp <= 0 || i.state & (e.DEAD | e.IN_VEHICLE))
        )
          continue;
        let a = Math.min(i.hp, Ke(t.landDrop, i.maxHp || 100));
        a >= 1 && n(i, a, [i.pos[0], i.pos[1] - 1, i.pos[2]]);
      }
    },
  };
}
var q = new WeakMap();
function J(e, t, n, r, i) {
  let a = e.get(t.id);
  if (!a) {
    let o = t.ext?.loadout ? j(t.ext.loadout) : void 0,
      s = i
        ? we((o ?? I().loadout).map((e) => i.definition(t, e)).filter(Boolean))
        : {};
    ((a = { ...I(r, o, s, t.ext?.loadout?.classId), lastInputTick: n }),
      e.set(t.id, a));
  }
  return a;
}
function Y(t, n) {
  (Ce(n), (t.state &= ~e.RELOADING));
}
