// assets__server-DZu_BY6S 04 — math
// Lines 927-1036 of readable/assets__server-DZu_BY6S.pretty.js (statement-aligned).
function he(t, r, i) {
  let a = t.world,
    o = r.rng.fork(`walkers`),
    s = r.walkerArea,
    c = Math.max(1, r.squadSize | 0),
    l = Math.max(1, Math.ceil(i / c)),
    u = Math.PI * (3 - Math.sqrt(5));
  for (let t = 0; t < i; t++) {
    let i = r.nextPlayerId++,
      d = t % 2,
      f = Math.floor(t / c),
      p = {
        id: i,
        name: `Walker ${String(t + 1).padStart(3, `0`)}`,
        team: d,
        entityId: -1,
        isBot: !0,
        ping: 0,
        kills: 0,
        deaths: 0,
        score: 0,
      };
    a.players.set(i, p);
    let m = Math.sqrt(f / Math.max(1, l - 1)) * Math.max(10, s - N * 0.6),
      h = f * u,
      g = [Math.cos(h) * m, Math.sin(h) * m],
      _ = {
        rng: o.fork(`w${t}`),
        anchor: g,
        target: [0, 0],
        pause: 0,
        sprint: !1,
        input: n(),
        yaw: 0,
      };
    _.pause = _.rng.int(0, 90);
    let v = g[0] + _.rng.range(-11, N * 0.5),
      y = g[1] + _.rng.range(-11, N * 0.5),
      b = a.spawn(`soldier`, {
        pos: [v, a.map.getHeight(v, y), y],
        yaw: _.rng.range(-Math.PI, Math.PI),
        team: d,
        owner: i,
        hp: 200,
        maxHp: 200,
        state: e.GROUNDED,
        ammo: 30,
      });
    ((p.entityId = b.id), (_.yaw = b.yaw), $(_, s), r.walkers.set(b.id, _));
  }
  t.log(
    `spawned ${i} walker soldiers (bots module absent) in ${l} squads, area +/-${s} m`,
  );
}
function $(e, t) {
  let n = e.rng.range(2, N),
    r = e.rng.range(-Math.PI, Math.PI),
    i = (e) => (e < -t ? -t : e > t ? t : e);
  ((e.target[0] = i(e.anchor[0] + Math.cos(r) * n)),
    (e.target[1] = i(e.anchor[1] + Math.sin(r) * n)),
    (e.sprint = e.rng.chance(0.25)));
}
function ge(n, r, i) {
  let a = n.world,
    o = r.walkerArea;
  for (let [s, c] of r.walkers) {
    let l = a.get(s);
    if (!l) {
      r.walkers.delete(s);
      continue;
    }
    let u = c.input;
    if ((u.seq++, (u.tick = a.time.tick), l.state & e.DEAD)) {
      ((u.mx = 0), (u.mz = 0), (u.buttons = 0), r.sim.stepPlayer(l, u, a, i));
      continue;
    }
    let d = c.target[0] - l.pos[0],
      f = c.target[1] - l.pos[2],
      p = Math.sqrt(d * d + f * f);
    if (c.pause > 0)
      (c.pause--,
        (u.mz = 0),
        (u.mx = 0),
        (u.buttons = 0),
        c.pause === 1 && (c.yaw += c.rng.range(-0.6, 0.6)));
    else if (p < 1.5)
      ($(c, o),
        (c.pause = c.rng.int(30, 240)),
        (u.mz = 0),
        (u.mx = 0),
        (u.buttons = 0));
    else {
      let e = Math.atan2(-d, -f) - c.yaw;
      for (; e > Math.PI;) e -= Math.PI * 2;
      for (; e < -Math.PI;) e += Math.PI * 2;
      let n = 2.5 * i;
      ((c.yaw += e > n ? n : e < -n ? -n : e),
        (u.mz = Math.abs(e) < 1.2 ? 1 : 0.3),
        (u.mx = 0),
        (u.buttons = c.sprint ? t.SPRINT : 0),
        c.rng.chance(0.002) && (u.buttons |= t.JUMP));
    }
    ((u.yaw = c.yaw), (u.pitch = 0));
    try {
      r.sim.stepPlayer(l, u, a, i);
    } catch (e) {
      (n.error(`walker sim threw: ${e?.message ?? e}`), r.walkers.delete(s));
    }
  }
}
