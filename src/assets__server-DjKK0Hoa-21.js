// assets__server-DjKK0Hoa 21 — yaw
// Lines 6247-6511 of readable/assets__server-DjKK0Hoa.pretty.js (statement-aligned).
function $i(
  e,
  t,
  n,
  {
    range: r = 180,
    currentId: i = -1,
    preferId: a = -1,
    holdId: o = -1,
    danger: s = null,
  } = {},
) {
  let c = e.time.tick,
    l = Ve(n, [0, 0, 0]),
    u = -Math.sin(n.yaw),
    d = -Math.cos(n.yaw),
    f = (t.notice ??= new Map()),
    p = vn(t, c).filter((e) => e.source !== `sight` && e.confidence > 0.3),
    m = [];
  for (let t of e.sorted()) {
    if (!B(t) || !w(e, n, t) || oe(e, t)) continue;
    let c = t.pos[0] - n.pos[0],
      l = t.pos[2] - n.pos[2],
      f = c * c + l * l;
    if (f > r * r) continue;
    let p = Math.sqrt(f) || 1,
      h = (u * c + d * l) / p;
    if (h < $.cone) continue;
    let g =
      p +
      (1 - h) * 22 -
      (t.id === i || t.id === o ? 36 : t.id === a ? 18 : 0) -
      (s?.has(t.id) ? 30 : 0);
    m.push({ target: t, d: p, facing: h, score: g });
  }
  m.sort((e, t) => e.score - t.score || e.target.id - t.target.id);
  let h = new Set(),
    g = null,
    _ = null,
    v = i > 0 ? m.find((e) => e.target.id === i) : null;
  v && Ge(e, l, v.target, r) ? f.set(i, 1) : (v = null);
  let y = m.filter((e) => e.target.id !== i),
    b =
      c - (t.lastHitTick ?? -1e9) < $.shotMemory
        ? y.findIndex((e) => e.target.id === t.threatId)
        : -1;
  b > 0 && y.unshift(y.splice(b, 1)[0]);
  let x = o > 0 && b < 0 ? y.findIndex((e) => e.target.id === o) : -1;
  x > 0 && y.unshift(y.splice(x, 1)[0]);
  let S = b < 0 && x < 0 ? y.findIndex((e) => s?.has(e.target.id)) : -1;
  (S < 0 &&
    b < 0 &&
    x < 0 &&
    (S = y.findIndex((e) =>
      p.some(
        (t) => t.id === e.target.id && t.source !== `sound` && t.age < 180,
      ),
    )),
    S > 0 && y.unshift(y.splice(S, 1)[0]));
  let C = Math.min(y.length, v ? $.busyChecks : $.checks),
    T = +(S >= 0),
    E = y.length - T,
    D =
      y.length > C && b < 0 && x < 0 ? Math.floor(c / 15) % Math.max(1, E) : 0;
  for (let n = 0; n < C; n++) {
    let i = y[n < T ? n : T + ((D + n - T) % E)],
      a = i.target.id;
    if (!Ge(e, l, i.target, r)) continue;
    let o = p.some((e) => e.id === a || Zi(e.pos, i.target.pos) < $.hintRange),
      s = a === t.targetId && c - (t.lastSeenTick ?? -1e9) < 150,
      u = a === t.threatId && c - (t.lastHitTick ?? -1e9) < $.shotMemory,
      d = Math.min(
        1,
        (f.get(a) ?? 0) +
          Qi(i.target, i.d, i.facing, { hint: o, recent: s }) *
            (u ? $.shotBy : 1) *
            (v && !u ? $.busy : 1),
      );
    (f.set(a, d),
      h.add(a),
      d >= 1
        ? (!g || i.score < g.score) && (g = i)
        : d >= $.glance && (!_ || d > _.value) && (_ = { c: i, value: d }));
  }
  for (let [e, t] of f) {
    if (h.has(e)) continue;
    let n = t - $.decay;
    n <= 0 ? f.delete(e) : f.set(e, n);
  }
  return v
    ? g &&
      c - (t.acquireTick ?? -1e9) >= $.switchHold &&
      Xi(t, n, g, c, s) > Xi(t, n, v, c, s) + 1.5
      ? g.target
      : v.target
    : g &&
        o > 0 &&
        g.target.id !== o &&
        Xi(t, n, g, c, s) + g.d / 15 <= 1.4 &&
        g.d > 8
      ? null
      : g
        ? g.target
        : (_ &&
            (t.glance = {
              pos: _.c.target.pos.slice(),
              until: c + $.glanceTicks,
              id: _.c.target.id,
            }),
          null);
}
function ea(e) {
  (e.notice?.clear(), (e.glance = null));
}
var ta = Object.freeze({
  flick: 7,
  settle: 4,
  alertCooldown: 150,
  probe: 14,
  sideAngle: 1.05,
  maxOffMove: 1.6,
});
function na(e, t, n, r, i = 0) {
  e.sector = { yaw: n, width: r, pitch: i, tick: t };
}
function ra(e, t, n) {
  let r = [-Math.sin(n), 0, -Math.cos(n)],
    i = e.map.raycast?.(t, r, ta.probe, null, null, !0);
  return i ? i.dist : ta.probe;
}
function ia(e, t) {
  let n = null;
  for (let r of vn(e, t))
    r.source === `sight` ||
      r.age > 45 ||
      r.confidence < 0.3 ||
      r.observedTick <= (e.alertSeen ?? -1) ||
      ((!n || r.source === `damage` || r.observedTick > n.observedTick) &&
        (n = r));
  return n;
}
function aa(e, t, n, r, i, a) {
  let o = t.rng,
    s = t.sector?.tick === r ? t.sector : null;
  if (s) {
    let e = o.chance(0.3) ? 0 : o.range(-s.width, s.width);
    return {
      yaw: s.yaw + e,
      pitch: s.pitch + o.range(-0.05, 0.03),
      until: r + o.int(60, 160),
      kind: `sector`,
    };
  }
  if (!a) return null;
  let c = yn(t, r, n.pos, 80);
  if (c && c.confidence > 0.3 && o.chance(0.35)) {
    let e = Be(Ve(n, [0, 0, 0]), [c.pos[0], c.pos[1] + 1.3, c.pos[2]]);
    if (Math.abs(V(e.yaw - i)) < ta.maxOffMove)
      return {
        yaw: e.yaw,
        pitch: e.pitch * 0.5,
        until: r + o.int(40, 90),
        kind: `contact`,
      };
  }
  let l = Ve(n, [0, 0, 0]),
    u = [i + ta.sideAngle, i - ta.sideAngle],
    d = u.map((t) => ra(e, l, t)),
    f = t.sideDepth ?? d;
  t.sideDepth = d;
  for (let e of o.chance(0.5) ? [0, 1] : [1, 0])
    if (d[e] > 9 && f[e] < 5)
      return {
        yaw: u[e],
        pitch: -0.02,
        until: r + o.int(35, 70),
        kind: `opening`,
      };
  if (o.chance(0.3)) {
    let e = +!o.chance(0.5);
    if (d[e] > 4)
      return {
        yaw: i + (e ? -1 : 1) * o.range(0.35, 0.8),
        pitch: o.range(-0.06, 0.02),
        until: r + o.int(30, 60),
        kind: `side`,
      };
  }
  return { yaw: null, pitch: 0, until: r + o.int(70, 170), kind: `ahead` };
}
function oa(e, n, r, i, a, o) {
  let s = Math.cos(i.yaw) * i.mx - Math.sin(i.yaw) * i.mz,
    c = -Math.sin(i.yaw) * i.mx - Math.cos(i.yaw) * i.mz,
    l = Math.hypot(s, c) > 0.1,
    u = l ? ze(s, c) : i.yaw,
    d = null,
    f = ta.flick;
  if (n.glance && a < n.glance.until)
    d = Be(Ve(r, [0, 0, 0]), [
      n.glance.pos[0],
      n.glance.pos[1] + 1.2,
      n.glance.pos[2],
    ]);
  else {
    n.glance = null;
    let t =
      a >= (n.alertDue ?? 0) && (a + (n.index ?? 0)) % 6 == 0 ? ia(n, a) : null;
    if (t) {
      n.alertSeen = t.observedTick;
      let e = t.pos[1] > r.pos[1] + 3;
      ((n.alertLook = {
        pos: t.pos.slice(),
        until: a + n.rng.int(50, 95) + (e ? 45 : 0),
        source: t.source,
      }),
        (n.alertDue = a + ta.alertCooldown + n.rng.int(0, 90)));
    }
    if (n.alertLook && a < n.alertLook.until)
      d = Be(Ve(r, [0, 0, 0]), [
        n.alertLook.pos[0],
        n.alertLook.pos[1] + 1.2,
        n.alertLook.pos[2],
      ]);
    else {
      n.alertLook = null;
      let t = n.lookSeg;
      if (
        ((!t || a >= t.until || (n.sector?.tick === a) != !!t.sector) &&
          ((t = n.lookSeg = aa(e, n, r, a, u, l)),
          t && (t.sector = n.sector?.tick === a)),
        !t)
      )
        return !1;
      t.yaw == null
        ? ((d = { yaw: u, pitch: 0 }), (f = ta.settle))
        : (d = { yaw: t.yaw, pitch: t.pitch });
    }
  }
  let p = d.yaw,
    m = l && n.tripSprint === a,
    h = m ? 0.5 : ta.maxOffMove;
  if (l) {
    let e = V(p - u);
    Math.abs(e) > h && (p = u + Math.sign(e) * h);
  }
  if (
    ((i.yaw = H(r.yaw, p, f * o)),
    (i.pitch = H(r.pitch, Math.max(-0.5, Math.min(0.4, d.pitch ?? 0)), 3 * o)),
    l)
  ) {
    let e = U(i.yaw, s, c);
    ((i.mx = e.mx),
      (i.mz = e.mz),
      Math.abs(V(u - i.yaw)) > (m ? 1 : 0.55) && (i.buttons &= ~t.SPRINT));
  }
  return !0;
}
function sa(e) {
  ((e.glance = null),
    (e.alertLook = null),
    (e.lookSeg = null),
    (e.sideDepth = null),
    (e.sector = null));
}
var ca = (e, t) => Math.hypot(e[0] - t[0], e[2] - t[2]);
