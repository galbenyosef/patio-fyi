// assets__audio-BO2SJEp_ 10 — pos
// Lines 2537-2991 of readable/assets__audio-BO2SJEp_.pretty.js (statement-aligned).
function qe(e, t, n = {}) {
  let r = e.world,
    i = n.now ?? (() => performance.now() / 1e3),
    a = () => e.modules.get(`player`)?.getLocalEntity?.(),
    s = () => r.byType(`soldier`),
    c = (e) => [e.pos[0], e.pos[1] + 1.5 * ee(), e.pos[2]],
    l = (e) => e && e.hp > 0 && !(e.state & o.DEAD),
    u = () => t.rand(),
    d = () => 0.96 + u() * 0.08,
    f = Ge(i),
    p = Ke(i),
    m = (e) =>
      0.93 + (((Math.imul(e.id | 0, 2654435761) >>> 0) % 1e3) / 1e3) * 0.14,
    h = (
      e,
      n,
      { volume: r = 1, allowDead: i = !1, delay: o, own: s = !1 } = {},
    ) => {
      if (!n || (!i && !l(n))) return null;
      let u = a(),
        f = u && u.id === n.id,
        p = (s ? m(n) : 1) * d();
      return t.play(
        e,
        f
          ? { local: !0, volume: r * 0.55, pitch: p, delay: o }
          : { pos: c(n), volume: r, pitch: p, delay: o },
      );
    },
    g = () => !H(r),
    _ = (e) => {
      let t = a();
      return !!t && !!e && t.id === e.id;
    },
    v = (e) => {
      let t = a();
      return !!t && !!e && g() && e.team === t.team && t.id !== e.id;
    },
    y = (e, t, n) => (v(t) ? h(e, t, { ...n, own: !0 }) : null),
    b = (e, { delay: n = 0, volume: r = 0.7 } = {}) => {
      if (!g() || !a()) return null;
      let i = /_([A-Z])$/.exec(e)?.[1];
      if (i && !re.includes(i)) {
        if (/^obj_/.test(e)) return null;
        e = e.slice(0, -2);
      }
      return f(`radioline`, 2.5)
        ? t.play(`voice_` + e, { local: !0, volume: r, delay: n })
        : null;
    },
    x = (e, t) => Math.hypot(e.pos[0] - t.pos[0], e.pos[2] - t.pos[2]),
    S = (e, t, n) => {
      let r = a(),
        i = null,
        c = t;
      for (let t of s()) {
        if (
          t.id === n ||
          !r ||
          t.id === r.id ||
          t.team !== r.team ||
          !l(t) ||
          t.state & o.IN_VEHICLE
        )
          continue;
        let a = Math.hypot(t.pos[0] - e[0], t.pos[2] - e[2]);
        a < c && ((c = a), (i = t));
      }
      return i;
    },
    C = [],
    w = -1e9,
    T = i() + 30 + u() * 40,
    E = 0,
    D = 0,
    O = null,
    k = new Set(),
    A = new Set(),
    j = new Map(),
    M = new Map(),
    N = new Map(),
    P = new Map();
  (C.push(
    e.events.on(`player:death`, (e) => {
      let t = r.get(e?.victimId);
      if (!t || e.weapon === `Redeploy`) return;
      let n = a(),
        i = n && n.id === t.id;
      if (Ue.test(String(e.weapon ?? ``)) && f(`scream`, 3))
        return h(`voice_scream`, t, { allowDead: !0, volume: 0.9 });
      u() > 0.1 ||
        (!i && !f(`death`, 1.6)) ||
        h(`voice_death`, t, { allowDead: !0 });
    }),
  ),
    C.push(
      e.events.on(`medic:call`, (e) => {
        let t = r.get(e?.entityId);
        t &&
          f(`medicCall:` + t.id, 4) &&
          (f(`medic:` + t.id, 30), y(`voice_medic`, t, { volume: 0.95 }));
      }),
    ),
    C.push(
      e.events.on(`weapon:reload`, (e) => {
        let t = r.get(e?.entityId),
          n = a();
        !t ||
          !n ||
          !l(t) ||
          t.state & o.IN_VEHICLE ||
          Math.hypot(t.pos[0] - n.pos[0], t.pos[2] - n.pos[2]) > 45 ||
          (s().some(
            (e) =>
              e.team !== t.team &&
              l(e) &&
              Math.hypot(e.pos[0] - t.pos[0], e.pos[2] - t.pos[2]) < 28,
          ) &&
            v(t) &&
            f(`cover:` + t.id, 18) &&
            f(`cover`, 6) &&
            y(`voice_cover`, t, { volume: 0.9 }));
      }),
    ),
    C.push(
      e.events.on(`match:phase`, (e) => {
        e?.phase === `live` &&
          (f(`warhorn`, 4) &&
            t.play(`voice_warhorn`, { local: !0, volume: 0.5 }),
          b(`match_start`, { delay: 1.4 }));
        let n = a();
        e?.phase === `ended` &&
          n &&
          (e.winner === 0 || e.winner === 1) &&
          b(e.winner === n.team ? `match_won` : `match_lost`, { delay: 0.6 });
      }),
    ),
    C.push(
      e.events.on(`objective:changed`, (e) => {
        let n = e?.objectiveId ?? e?.id;
        if (
          n == null ||
          !Number.isInteger(e.team) ||
          e.team < 0 ||
          (e.progress != null && e.progress < 1)
        )
          return;
        let i = N.get(n);
        if ((N.set(n, e.team), i === void 0 || i === e.team)) return;
        let c = a();
        if (!c) return;
        let d = e.team === c.team;
        f(`warhorn`, 4) &&
          t.play(`voice_warhorn`, {
            local: !0,
            volume: d ? 0.34 : 0.22,
            pitch: d ? 1 : 0.85,
          });
        let p = r.match?.objectives?.find((e) => e.id === n),
          m = p?.pos;
        if (
          (p?.letter &&
            b((d ? `obj_captured_` : `obj_lost_`) + p.letter, { delay: 0.9 }),
          !d || !m)
        )
          return;
        let h = s().filter(
          (e) =>
            e.id !== c.id &&
            e.team === c.team &&
            l(e) &&
            !(e.state & o.IN_VEHICLE) &&
            Math.hypot(e.pos[0] - m[0], e.pos[2] - m[2]) < 30,
        );
        h.length &&
          g() &&
          f(`roar`, 10) &&
          y(
            u() < 0.5 ? `voice_captured` : `voice_roar`,
            h[Math.floor(u() * h.length)],
            { volume: 0.85 },
          );
      }),
    ),
    C.push(
      e.events.on(`player:death`, (e) => {
        let t = a(),
          n = r.get(e?.victimId),
          i = r.get(e?.killerId);
        if (
          t &&
          n &&
          (i &&
            i.id !== n.id &&
            i.team !== n.team &&
            v(i) &&
            x(i, t) < 50 &&
            u() < 0.35 &&
            f(`kill:` + i.id, 10) &&
            f(`kill`, 5) &&
            y(`voice_kill`, i, { delay: 0.35 }),
          n.id !== t.id && v(n) && x(n, t) < 40 && u() < 0.5)
        ) {
          let e = S(n.pos, 25, n.id);
          e && f(`mandown`, 8) && y(`voice_man_down`, e, { delay: 0.5 });
        }
      }),
    ),
    C.push(
      e.events.on(`spot:target`, (e) => {
        if (e?.carried) return;
        let t = r.get(r.players.get(e?.spotterId)?.entityId),
          n = r.get(e?.targetId);
        t &&
          n &&
          f(`spot:` + t.id, 4) &&
          f(`spot`, 1.5) &&
          y(
            n.type === `vehicle`
              ? n.weapon >= 3
                ? `voice_spotted_air`
                : `voice_spotted_vehicle`
              : `voice_spotted`,
            t,
            { volume: 0.9 },
          );
      }),
    ),
    C.push(
      e.events.on(`medic:revive`, (e) => {
        let t = r.get(e?.medicId),
          n = r.get(e?.entityId);
        (t &&
          f(`revive:` + t.id, 6) &&
          y(`voice_revive_give`, t, { volume: 0.85 }),
          n &&
            u() < 0.6 &&
            f(`thanks:` + n.id, 6) &&
            y(`voice_revive_thanks`, n, { volume: 0.85, delay: 1.3 }));
      }),
    ),
    C.push(
      e.events.on(`player:damage`, (e) => {
        let t = a();
        t && e?.targetId === t.id && e.amount > 0 && (w = i());
      }),
    ),
    C.push(
      e.events.on(`squad:callout`, (e) => {
        let n = a(),
          i = n && te(r, n.owner),
          p = i && r.get(r.players.get(i.leaderId)?.entityId),
          m = _(p) && We.test(e?.line ?? ``);
        if (
          (typeof e?.line == `string` && !m && b(e.line, { delay: 0.25 }),
          !/^Squad, (attack|regroup)/.test(e?.text ?? ``) ||
            !p ||
            !v(p) ||
            !f(`go:` + p.id, 8) ||
            (y(`voice_go`, p, { delay: 1.8 }),
            !/attack/.test(e.text) || u() > 0.45 || !f(`roar`, 10)))
        )
          return;
        let h = s().filter(
            (e) =>
              e.id !== p.id &&
              e.team === n.team &&
              l(e) &&
              !(e.state & o.IN_VEHICLE) &&
              te(r, e.owner)?.id === i.id &&
              Math.hypot(e.pos[0] - n.pos[0], e.pos[2] - n.pos[2]) < 40,
          ),
          g = h[Math.floor(u() * h.length)];
        g &&
          g.id !== n.id &&
          t.play(`voice_roar`, {
            pos: c(g),
            volume: 0.8,
            pitch: d(),
            delay: 2.6,
          });
      }),
    ),
    C.push(
      e.events.on(`weapon:fire`, (e) => {
        if (!e?.origin || !e.dir || !(e.dist > 0) || e.replay) return;
        let t = a();
        if (!t) return;
        let n = r.get(e.entityId);
        for (let r of s()) {
          if (
            !l(r) ||
            r.state & o.IN_VEHICLE ||
            r.id === e.entityId ||
            (n && n.team === r.team)
          )
            continue;
          let i = r.pos[0] - t.pos[0],
            a = r.pos[2] - t.pos[2];
          i * i + a * a > 3600 ||
            (Re(e.origin, e.dir, e.dist, c(r)) &&
              p.pass(r.id) &&
              v(r) &&
              f(`pinned:` + r.id, 20) &&
              f(`pinned`, 5) &&
              y(`voice_pinned`, r));
        }
      }),
    ));
  function F() {
    let e = r.byType(`projectile`);
    for (let t of e) {
      if (t.weapon !== ae.id || k.has(t.id)) continue;
      k.add(t.id);
      let e = s().find((e) => e.owner === t.owner && l(e));
      !e ||
        Math.hypot(e.pos[0] - t.pos[0], e.pos[2] - t.pos[2]) >= 4 ||
        !f(`grunt:` + e.id, 2) ||
        (v(e) && u() < 0.6 && f(`fragout`, 3)
          ? y(`voice_frag_out`, e, { volume: 0.9 })
          : h(`voice_grunt`, e, { volume: 0.8 }));
    }
    let t = a();
    if (t && g())
      for (let n of e) {
        if (n.weapon !== ae.id || A.has(n.id)) continue;
        let e = r.players.get(n.owner)?.team;
        if (e == null || e === t.team) continue;
        let i = S(n.pos, 7);
        i && f(`grenade`, 3) && (A.add(n.id), y(`voice_grenade`, i));
      }
    if (k.size > 256) {
      let t = new Set(e.map((e) => e.id));
      for (let e of k) t.has(e) || k.delete(e);
      for (let e of A) t.has(e) || A.delete(e);
    }
  }
  function ne(e) {
    for (let t of r.byType(`vehicle`)) {
      let n = j.get(t.id);
      if (
        (j.set(t.id, t.hp),
        !(n > 0) ||
          t.hp > 0 ||
          t.team < 0 ||
          t.team === e.team ||
          x(t, e) > 150)
      )
        continue;
      let r = S(t.pos, 80);
      r && f(`vdown`, 6) && y(`voice_vehicle_down`, r, { delay: 0.6 });
    }
  }
  function I(e) {
    for (let t of r.byType(`vehicle`)) {
      if (t.hp <= 0 || t.team < 0 || t.team === e.team) continue;
      let n = Math.hypot(t.vel[0], t.vel[2]);
      if (!(n < 4))
        for (let r of s()) {
          if (r.team !== e.team || !l(r) || r.state & o.IN_VEHICLE) continue;
          let i = r.pos[0] - t.pos[0],
            a = r.pos[2] - t.pos[2],
            s = Math.hypot(i, a);
          s > 16 ||
            (i * t.vel[0] + a * t.vel[2]) / (s * n + 1e-6) < 0.5 ||
            (v(r) &&
              f(`lookout:` + r.id, 20) &&
              f(`lookout`, 6) &&
              y(`voice_lookout`, r));
        }
    }
  }
  function L(e) {
    let t = i();
    for (let n of s()) {
      if (!l(n) || n.state & o.IN_VEHICLE || n.hp > (n.maxHp ?? 200) * 0.25) {
        M.delete(n.id);
        continue;
      }
      let r = n.pos[0] - e.pos[0],
        i = n.pos[2] - e.pos[2];
      if (r * r + i * i > 1600) continue;
      let a = M.get(n.id);
      if (a == null) {
        (M.set(n.id, t + 4 + u() * 6),
          v(n) &&
            f(`medic:` + n.id, 30) &&
            f(`medic`, 5) &&
            y(`voice_medic`, n, { volume: 0.9 }));
        continue;
      }
      t < a ||
        (M.set(n.id, t + 9 + u() * 7), h(`voice_cough`, n, { volume: 0.8 }));
    }
  }
  function R(e) {
    let t = i();
    if (t < T || ((T = t + 45 + u() * 45), t - w < 10) || !g()) return;
    let n = s().filter(
      (t) =>
        t.id !== e.id &&
        t.team === e.team &&
        l(t) &&
        !(t.state & o.IN_VEHICLE) &&
        Math.hypot(t.vel[0], t.vel[2]) < 0.5 &&
        Math.hypot(t.pos[0] - e.pos[0], t.pos[2] - e.pos[2]) < 25,
    );
    if (!n.length) return;
    let r = n[Math.floor(u() * n.length)];
    y(r.team === 1 ? `voice_banter_cobalt` : `voice_banter_amber`, r, {
      volume: 0.7,
    });
  }
  function z(e) {
    let n = e.state & o.IN_VEHICLE ? e.seat : null,
      i = O;
    if (((O = n), n == null || n === i)) return;
    let a = r.get(n);
    !a ||
      a.type !== `vehicle` ||
      !(a.weapon >= 3) ||
      a.hp <= 0 ||
      (f(`radio`, 30) && t.play(`voice_radio`, { local: !0, volume: 0.4 }));
  }
  function B(e) {
    for (let t of s()) {
      let n = t.pos[0] - e.pos[0],
        i = t.pos[2] - e.pos[2],
        a =
          l(t) &&
          !(t.state & o.IN_VEHICLE) &&
          n * n + i * i < 12100 &&
          t.vel[1] < -9 &&
          t.pos[1] - r.map.getHeight(t.pos[0], t.pos[2]) > 6,
        s = P.get(t.id) ?? !1;
      (P.set(t.id, a),
        a &&
          !s &&
          f(`fall:` + t.id, 6) &&
          f(`scream`, 1.5) &&
          h(`voice_scream`, t, { volume: 0.8 }));
    }
  }
  return {
    update(e) {
      if (((D += e), D >= 0.1 && ((D = 0), F()), (E += e), E < 0.5)) return;
      E = 0;
      let t = a();
      t && (I(t), L(t), R(t), z(t), B(t), ne(t));
    },
    dispose() {
      for (let e of C) e?.();
    },
  };
}
