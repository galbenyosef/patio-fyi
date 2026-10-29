// assets__server-DjKK0Hoa 05 — math
// Lines 1279-1619 of readable/assets__server-DjKK0Hoa.pretty.js (statement-aligned).
function tt(e, t, n, r = 1.2, i = 1.15) {
  let a = t.pos[0] + n[0] * r,
    o = t.pos[2] + n[1] * r,
    s = t.pos[1] + 0.2;
  return (
    Ze(e, a - n[1] * i, s, o + n[0] * i, 0.2) &&
    Ze(e, a + n[1] * i, s, o - n[0] * i, 0.2)
  );
}
function U(e, t, n) {
  return {
    mx: z(t * Math.cos(e) - n * Math.sin(e), -1, 1),
    mz: z(-t * Math.sin(e) - n * Math.cos(e), -1, 1),
  };
}
function nt(e, t, n, r = R.coverSearchRadius) {
  if (!n) return null;
  let i = [],
    a = e.map.colliders,
    o =
      a?.queryMovement?.(
        t.pos[0] - r,
        t.pos[1] - 2,
        t.pos[2] - r,
        t.pos[0] + r,
        t.pos[1] + 4,
        t.pos[2] + r,
      ) ??
      a?.values?.() ??
      [];
  for (let a of o) {
    let o = a.movementAabb ?? a.aabb;
    if (
      !o ||
      a.noPlayer ||
      a.solid === !1 ||
      o[4] - o[1] < 0.9 ||
      o[1] > t.pos[1] + 4 ||
      o[4] < t.pos[1] - 2
    )
      continue;
    let s = (o[0] + o[3]) * 0.5,
      c = (o[2] + o[5]) * 0.5,
      l = s - n.pos[0],
      u = c - n.pos[2],
      d = Math.hypot(l, u) || 1,
      f = l / d,
      p = u / d,
      m = Math.abs(f) * (o[3] - o[0]) * 0.5 + Math.abs(p) * (o[5] - o[2]) * 0.5,
      h = s + f * (m + 1.25),
      g = c + p * (m + 1.25),
      _ = h - t.pos[0],
      v = g - t.pos[2],
      y = _ * _ + v * v;
    if (y > r * r || Ze(e, h, t.pos[1], g, 0.15)) continue;
    {
      let n = te(e, [h, t.pos[1], g], 0.5);
      if (n && n !== te(e, t.pos)) continue;
    }
    let b = e.map.getHeight(h, g),
      x = Ve(n, [0, 0, 0]),
      S = [h, b + 1, g],
      C = S[0] - x[0],
      w = S[1] - x[1],
      T = S[2] - x[2],
      E = Math.hypot(C, w, T) || 1,
      D = [C / E, w / E, T / E],
      O;
    if (e.map.isOccluded) O = e.map.isOccluded(x, D, E, 0.7, !0);
    else {
      let t = e.map.raycast(x, D, E, null, null, !0);
      O = !!t && t.dist < E - 0.7;
    }
    O && i.push({ pos: [h, b, g], score: y + d * 0.08, id: String(a.id) });
  }
  return (
    i.sort((e, t) => e.score - t.score || e.id.localeCompare(t.id)),
    i[0]?.pos ?? null
  );
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
    floorSigma: [0.0105, 0.0045],
    moveSigma: 0.008,
    flinch: [0.045, 0.02],
    recoilPull: [3, 6],
    recoilCap: 0.18,
    shake: [0.0075, 0.0045],
    shakeNear: [0.1, 0.06],
  }),
  rt = [1, -0.5, 0.35, -0.85],
  it = Object.freeze({
    lmg: [
      [22, 10, 22],
      [60, 7, 14],
      [1 / 0, 4, 9],
    ],
    auto: [
      [22, 3, 7],
      [50, 3, 6],
      [1 / 0, 2, 4],
    ],
    pauseAuto: [18, 40],
    pauseSemi: [8, 18],
  });
function at(e, t, n) {
  let r = (
      t.class === `lmg` ? it.lmg : t.mode === `AUTO` ? it.auto : null
    )?.find((e) => n < e[0]),
    i = t.mode === `AUTO` ? it.pauseAuto : it.pauseSemi,
    a = r ? e.int(r[1], r[2]) : 1;
  return {
    count: a,
    pause:
      (t.mode === `AUTO` ? (a - 1) * Math.ceil(3600 / (t.rpm || 600)) : 0) +
      e.int(i[0], i[1]),
  };
}
var ot = (e, t) => e[0] + (e[1] - e[0]) * z(t, 0, 1);
function st(e) {
  return (e.next() + e.next() + e.next()) / 3;
}
function ct(e, t, n, r) {
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
      shakeYaw: 0,
      shakePitch: 0,
      shakeWantYaw: 0,
      shakeWantPitch: 0,
      shakeDue: 0,
    }),
    e[r]
  );
}
function lt(e) {
  e.hand && (e.hand.flicked = !1);
}
function ut(e, t) {
  let n = e.hand;
  n &&
    t?.recoil &&
    t.class !== `launcher` &&
    ((n.recoilPitch = Math.min(
      W.recoilCap,
      n.recoilPitch + t.recoil[1] * 0.65,
    )),
    (n.recoilYaw = z(
      n.recoilYaw + t.recoil[0] * 0.35 * rt[n.kicks++ % rt.length],
      -0.035,
      0.035,
    )));
}
function dt(e) {
  let t = e.hand;
  if (!t) return;
  let n = ot(W.flinch, e.skill);
  ((t.errYaw += e.rng.gauss() * n), (t.errPitch += e.rng.gauss() * n * 0.8));
}
function ft(e, t, n, r, i, a, o, s, c = {}) {
  let l = c.slot ?? `hand`,
    u = c.sigmaScale ?? 1,
    d = c.turnScale ?? 1,
    f = e[l];
  ((!f || f.tick !== i - 1) && (f = ct(e, t, r, l)), (f.tick = i));
  let p = e.skill,
    m = Math.hypot(r[0] - f.track[0], r[1] - f.track[1], r[2] - f.track[2]),
    g = ot(W.trackLag, p),
    _ = g * ot(W.anticipate, p),
    v = [0, 0, 0];
  if (m > 6) for (let e = 0; e < 3; e++) ((f.track[e] = r[e]), (f.vel[e] = 0));
  else {
    let e = 1 - Math.exp(-a / g),
      t = 1 - Math.exp(-a / 0.12);
    for (let n = 0; n < 3; n++)
      ((f.track[n] += (r[n] - f.track[n]) * e),
        (f.vel[n] += ((r[n] - f.last[n]) / a - f.vel[n]) * t));
  }
  for (let e = 0; e < 3; e++)
    ((f.last[e] = r[e]), (v[e] = f.track[e] + f.vel[e] * _));
  let y = Be(n, v),
    b = Math.exp(-ot(W.recoilPull, p) * a);
  if (((f.recoilYaw *= b), (f.recoilPitch *= b), !o))
    return (
      (f.yaw = V(t.yaw - f.recoilYaw)),
      (f.pitch = t.pitch - f.recoilPitch),
      {
        yaw: t.yaw,
        pitch: t.pitch,
        onPoint: !1,
        believedError: 1 / 0,
        aimOff: 1 / 0,
        goalOff: 1 / 0,
        distance: y.distance,
      }
    );
  if (!f.flicked) {
    f.flicked = !0;
    let t = V(y.yaw - f.yaw),
      n = y.pitch - f.pitch,
      r = Math.hypot(t, n),
      a = r * ot(W.flickMiss, p) * e.rng.range(0.4, 1.3),
      o = e.rng.chance(0.65) ? 1 : -1,
      s = r > 1e-4 ? t / r : 1,
      c = r > 1e-4 ? n / r : 0,
      l = e.rng.gauss() * 0.35;
    ((f.errYaw = z((s * o - c * l) * a, -0.25, 0.25)),
      (f.errPitch = z((c * o + s * l) * a * 0.7, -0.15, 0.15)),
      (f.wantDue = i));
  }
  let x = z((i - s) / ot(W.settleTicks, p), 0, 1);
  if (i >= f.wantDue) {
    let n = Math.min(1, Math.hypot(t.vel[0], t.vel[2]) / 6),
      r =
        (ot(W.settleSigma, p) * (1 - x) +
          ot(W.floorSigma, p) +
          W.moveSigma * n) *
        u *
        h();
    ((f.wantYaw = e.rng.gauss() * r),
      (f.wantPitch = e.rng.gauss() * r * 0.72),
      (f.wantDue = i + e.rng.int(10, 22)));
  }
  let S = 1 - Math.exp(-ot(W.correct, p) * a);
  ((f.errYaw += (f.wantYaw - f.errYaw) * S),
    (f.errPitch += (f.wantPitch - f.errPitch) * S));
  let C = V(y.yaw + f.errYaw + (l === `hand` ? (e.missOffset ?? 0) : 0)),
    w = y.pitch + f.errPitch,
    T = 1 - Math.exp(-ot(W.approach, p) * a),
    E = ot(W.maxTurn, p) * d * a,
    D = V(C - f.yaw),
    O = w - f.pitch;
  if (
    ((f.yaw = V(f.yaw + z(D * T, -E, E))),
    (f.pitch = z(f.pitch + z(O * T, -E * 0.8, E * 0.8), -1.5, 1.5)),
    i >= f.shakeDue)
  ) {
    let t =
      (ot(W.shake, p) + ot(W.shakeNear, p) / Math.max(4, y.distance)) * u * h();
    ((f.shakeWantYaw = e.rng.gauss() * t),
      (f.shakeWantPitch = e.rng.gauss() * t * 0.8),
      (f.shakeDue = i + e.rng.int(8, 16)));
  }
  let k = 1 - Math.exp(-12 * a);
  ((f.shakeYaw += (f.shakeWantYaw - f.shakeYaw) * k),
    (f.shakePitch += (f.shakeWantPitch - f.shakePitch) * k));
  let A = Math.hypot(V(C - f.yaw), w - f.pitch);
  return {
    yaw: V(f.yaw + f.recoilYaw + f.shakeYaw),
    pitch: z(f.pitch + f.recoilPitch + f.shakePitch, -1.55, 1.55),
    onPoint: A < 0.012,
    believedError: Math.hypot(f.errYaw, f.errPitch),
    distance: y.distance,
    aimOff: Math.hypot(V(y.yaw - f.yaw), y.pitch - f.pitch),
    goalOff: A,
  };
}
var G = Object.freeze({
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
  pt = { stand: 1.58, crouch: 1.1, prone: 0.42 },
  mt = (e, t) => Math.hypot(e[0] - t[0], e[2] - t[2]),
  ht = new WeakMap();
function gt(e) {
  let t = e.map.colliders,
    n = ht.get(t);
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
      s - c < G.roofMin ||
      s - c > G.roofMax ||
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
  return (ht.set(t, n), n);
}
