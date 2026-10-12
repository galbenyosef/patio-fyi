// assets__server-CKjtCiO9 05 — math
// Lines 1281-1591 of readable/assets__server-CKjtCiO9.pretty.js (statement-aligned).
function qe(e, t, n = {}) {
  let r = n.range ?? 180,
    i = n.sharedId ?? -1,
    a = Fe(t, [0, 0, 0]),
    o = -Math.sin(t.yaw),
    s = -Math.cos(t.yaw),
    c = [];
  for (let n of e.sorted()) {
    if (!B(n) || !T(e, t, n) || re(e, n)) continue;
    let a = n.pos[0] - t.pos[0],
      l = n.pos[2] - t.pos[2],
      u = a * a + l * l;
    if (u > r * r) continue;
    let d = Math.sqrt(u) || 1,
      f = (o * a + s * l) / d;
    if (n.id !== i && f < -0.15) continue;
    let p = d + (1 - f) * 22 - (n.id === i ? 18 : 0);
    c.push({ target: n, score: p });
  }
  c.sort((e, t) => e.score - t.score);
  for (let { target: t } of c) if (Re(e, a, t, r)) return t;
  return null;
}
var W = Object.freeze({
    trackLag: [0.2, 0.09],
    anticipate: [0.45, 0.85],
    flickMiss: [0.24, 0.07],
    maxTurn: [4.2, 6.5],
    approach: [9, 15],
    correct: [4, 7],
    settleTicks: [150, 80],
    settleSigma: [0.022, 0.014],
    floorSigma: [0.0065, 0.0028],
    moveSigma: 0.008,
    flinch: [0.045, 0.02],
    recoilPull: [4, 9],
    recoilCap: 0.18,
  }),
  Je = [1, -0.5, 0.35, -0.85],
  G = (e, t) => e[0] + (e[1] - e[0]) * z(t, 0, 1);
function Ye(e) {
  return (e.next() + e.next() + e.next()) / 3;
}
function Xe(e, t, n, r) {
  return (
    (e[r] = {
      yaw: t.yaw,
      pitch: t.pitch,
      track: n.slice(),
      last: n.slice(),
      vel: [0, 0, 0],
      errYaw: 0,
      errPitch: 0,
      wantYaw: 0,
      wantPitch: 0,
      wantDue: 0,
      recoilYaw: 0,
      recoilPitch: 0,
      kicks: 0,
      flicked: !1,
      tick: -1,
    }),
    e[r]
  );
}
function Ze(e) {
  e.hand && (e.hand.flicked = !1);
}
function Qe(e, t) {
  let n = e.hand;
  n &&
    t?.recoil &&
    t.class !== `launcher` &&
    ((n.recoilPitch = Math.min(
      W.recoilCap,
      n.recoilPitch + t.recoil[1] * 0.65,
    )),
    (n.recoilYaw = z(
      n.recoilYaw + t.recoil[0] * 0.35 * Je[n.kicks++ % Je.length],
      -0.035,
      0.035,
    )));
}
function $e(e) {
  let t = e.hand;
  if (!t) return;
  let n = G(W.flinch, e.skill);
  ((t.errYaw += e.rng.gauss() * n), (t.errPitch += e.rng.gauss() * n * 0.8));
}
function et(e, t, n, r, i, a, o, s, c = {}) {
  let l = c.slot ?? `hand`,
    d = c.sigmaScale ?? 1,
    f = c.turnScale ?? 1,
    p = e[l];
  ((!p || p.tick !== i - 1) && (p = Xe(e, t, r, l)), (p.tick = i));
  let m = e.skill,
    h = Math.hypot(r[0] - p.track[0], r[1] - p.track[1], r[2] - p.track[2]),
    g = G(W.trackLag, m),
    _ = g * G(W.anticipate, m),
    v = [0, 0, 0];
  if (h > 6) for (let e = 0; e < 3; e++) ((p.track[e] = r[e]), (p.vel[e] = 0));
  else {
    let e = 1 - Math.exp(-a / g),
      t = 1 - Math.exp(-a / 0.12);
    for (let n = 0; n < 3; n++)
      ((p.track[n] += (r[n] - p.track[n]) * e),
        (p.vel[n] += ((r[n] - p.last[n]) / a - p.vel[n]) * t));
  }
  for (let e = 0; e < 3; e++)
    ((p.last[e] = r[e]), (v[e] = p.track[e] + p.vel[e] * _));
  let y = Pe(n, v),
    b = Math.exp(-G(W.recoilPull, m) * a);
  if (((p.recoilYaw *= b), (p.recoilPitch *= b), !o))
    return (
      (p.yaw = V(t.yaw - p.recoilYaw)),
      (p.pitch = t.pitch - p.recoilPitch),
      {
        yaw: t.yaw,
        pitch: t.pitch,
        onPoint: !1,
        believedError: 1 / 0,
        distance: y.distance,
      }
    );
  if (!p.flicked) {
    p.flicked = !0;
    let t = V(y.yaw - p.yaw),
      n = y.pitch - p.pitch,
      r = Math.hypot(t, n),
      a = r * G(W.flickMiss, m) * e.rng.range(0.4, 1.3),
      o = e.rng.chance(0.65) ? 1 : -1,
      s = r > 1e-4 ? t / r : 1,
      c = r > 1e-4 ? n / r : 0,
      l = e.rng.gauss() * 0.35;
    ((p.errYaw = z((s * o - c * l) * a, -0.25, 0.25)),
      (p.errPitch = z((c * o + s * l) * a * 0.7, -0.15, 0.15)),
      (p.wantDue = i));
  }
  let x = z((i - s) / G(W.settleTicks, m), 0, 1);
  if (i >= p.wantDue) {
    let n = Math.min(1, Math.hypot(t.vel[0], t.vel[2]) / 6),
      r =
        (G(W.settleSigma, m) * (1 - x) + G(W.floorSigma, m) + W.moveSigma * n) *
        d *
        u();
    ((p.wantYaw = e.rng.gauss() * r),
      (p.wantPitch = e.rng.gauss() * r * 0.72),
      (p.wantDue = i + e.rng.int(10, 22)));
  }
  let S = 1 - Math.exp(-G(W.correct, m) * a);
  ((p.errYaw += (p.wantYaw - p.errYaw) * S),
    (p.errPitch += (p.wantPitch - p.errPitch) * S));
  let C = V(y.yaw + p.errYaw + (l === `hand` ? (e.missOffset ?? 0) : 0)),
    w = y.pitch + p.errPitch,
    T = 1 - Math.exp(-G(W.approach, m) * a),
    E = G(W.maxTurn, m) * f * a,
    D = V(C - p.yaw),
    O = w - p.pitch;
  ((p.yaw = V(p.yaw + z(D * T, -E, E))),
    (p.pitch = z(p.pitch + z(O * T, -E * 0.8, E * 0.8), -1.5, 1.5)));
  let ee = Math.hypot(V(C - p.yaw), w - p.pitch);
  return {
    yaw: V(p.yaw + p.recoilYaw),
    pitch: z(p.pitch + p.recoilPitch, -1.55, 1.55),
    onPoint: ee < 0.012,
    believedError: Math.hypot(p.errYaw, p.errPitch),
    distance: y.distance,
  };
}
var K = Object.freeze({
    chance: 0.6,
    teamGap: 4500,
    idle: 480,
    humanClear: 45,
    above: 30,
    offset: 26,
    roofMin: 12,
    roofMax: 48,
    hold: [80, 160],
    kills: 4,
    flyTicks: 3600,
  }),
  tt = { stand: 1.58, crouch: 1.1, prone: 0.42 },
  nt = (e, t) => Math.hypot(e[0] - t[0], e[2] - t[2]),
  rt = new WeakMap();
function it(e) {
  let t = e.map.colliders,
    n = rt.get(t);
  if (n) return n;
  n = [];
  let r = e.map.bounds ?? [-200, -200, 200, 200];
  for (let t of e.map.colliders.values()) {
    let i = t.movementAabb ?? t.aabb;
    if (
      !i ||
      t.noPlayer ||
      t.solid === !1 ||
      t.navDynamic ||
      t.floorHeight ||
      i[3] - i[0] < 9 ||
      i[5] - i[2] < 9
    )
      continue;
    let a = (i[0] + i[3]) / 2,
      o = (i[2] + i[5]) / 2,
      s = i[4],
      c = e.map.getHeight(a, o);
    if (
      s - c < K.roofMin ||
      s - c > K.roofMax ||
      a < r[0] + 30 ||
      a > r[2] - 30 ||
      o < r[1] + 30 ||
      o > r[3] - 30
    )
      continue;
    let l = 0;
    for (let [t, n] of [
      [0, 0],
      [-0.3, -0.3],
      [0.3, -0.3],
      [-0.3, 0.3],
      [0.3, 0.3],
    ]) {
      let r = a + t * (i[3] - i[0]),
        c = o + n * (i[5] - i[2]);
      Math.abs(v(e, r, c, s + 40) - s) < 0.15 && l++;
    }
    l >= 4 && n.push({ id: t.id, x: a, z: o, y: s, box: i.slice() });
  }
  return (rt.set(t, n), n);
}
function at(e, t, n) {
  let r = (t.spots ??= new Map()),
    i = n.id;
  if (r.has(i)) return r.get(i);
  let a = t.box,
    o = 1.3,
    s = Te(e, n),
    c = Math.atan2(n.pos[2] - t.z, n.pos[0] - t.x),
    l = null;
  for (let r of [0, 0.5, -0.5, 1, -1]) {
    let i = Math.cos(c + r),
      u = Math.sin(c + r),
      d = Math.min(
        Math.abs((a[3] - a[0]) / 2 - o) / (Math.abs(i) || 1e-6),
        Math.abs((a[5] - a[2]) / 2 - o) / (Math.abs(u) || 1e-6),
      ),
      f = t.x + i * d,
      p = t.z + u * d;
    if (!(Math.abs(v(e, f, p, t.y + 3) - t.y) > 0.15)) {
      for (let r of [`prone`, `crouch`, `stand`]) {
        let i = [f, t.y + tt[r], p],
          a = 0;
        for (let t of s) {
          let n = t.map((e, t) => e - i[t]),
            r = Math.hypot(...n);
          if (r < 4 || r > 230) continue;
          let o = e.map.raycast(
            i,
            n.map((e) => e / r),
            r,
          );
          (!o || o.dist >= r - 0.7) && a++;
        }
        if (a >= 2 || (a && r === `stand`)) {
          l = {
            pos: [f, t.y, p],
            stance: r,
            seen: a,
            yaw: Math.atan2(-(n.pos[0] - f), -(n.pos[2] - p)),
          };
          break;
        }
      }
      if (l) break;
    }
  }
  return (r.set(i, l), l);
}
function ot(e, t, n) {
  let r = (e.match.objectives ?? []).filter((e) => e.state !== `destroyed`);
  return r.length < 2
    ? n
    : ((t === 0 ? r : r.slice().reverse()).find(
        (e) => e.team !== t || e.contested,
      ) ?? n);
}
function st(e, t, n, r, i, a = 400) {
  let o = ot(e, t.team, r);
  if (!o) return null;
  let s = new Set();
  for (let e of i) e !== t && e.roof && s.add(e.roof.roof.id);
  let c = null;
  for (let r of it(e)) {
    if (s.has(r.id)) continue;
    let i = Math.hypot(r.x - o.pos[0], r.z - o.pos[2]);
    if (i < 25 || i > 160 || Math.hypot(r.x - n[0], r.z - n[2]) > a) continue;
    let l = at(e, r, o);
    if (!l) continue;
    let u =
      l.seen * 30 +
      (l.stance === `prone` ? 20 : l.stance === `crouch` ? 10 : 0) +
      (r.y - e.map.getHeight(r.x, r.z)) -
      Math.abs(i - 80) * 0.3 +
      t.rng.range(0, 30);
    (!c || u > c.score) &&
      (c = { roof: r, spot: l, score: u, objectiveId: o.id });
  }
  return c;
}
