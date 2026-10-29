// assets__sim-CCeMdhLh 13 — math
// Lines 3630-3936 of readable/assets__sim-CCeMdhLh.pretty.js (statement-aligned).
function Ir(e, t) {
  let n = Fr(e);
  if (n == null)
    return {
      phase: `sit`,
      t: 0,
      left: 1 / 0,
      x: W.dist,
      v: 0,
      doors: 1,
      warn: !1,
      moving: !1,
      cycle: -1,
    };
  if (t < n + kr * wr) {
    let e = (n + kr * wr - t) / wr;
    return {
      phase: `sit`,
      t: Math.max(0, W.open - e),
      left: e,
      x: W.dist,
      v: 0,
      doors: 1,
      warn: e < W.warnBack,
      moving: !1,
      cycle: 0,
    };
  }
  let r = (t - n) / wr,
    i = Math.floor(r / Or),
    a = r - i * Or,
    o = `parked`,
    s = 0;
  for (let [e, t] of Dr) {
    if (a < t) {
      ((o = e), (s = t));
      break;
    }
    a -= t;
  }
  let c = {
    phase: o,
    t: a,
    left: s - a,
    x: 0,
    v: 0,
    doors: 1,
    warn: !1,
    moving: !1,
    cycle: i,
  };
  switch (o) {
    case `warnDoors`:
      ((c.doors = 0), (c.warn = !0));
      break;
    case `doorsOpen`:
      ((c.doors = a / W.doors), (c.warn = !0), (c.moving = !0));
      break;
    case `warnTow`:
      c.warn = !0;
      break;
    case `towOut`:
      ((c.x = Pr(a)),
        (c.v = (Pr(a + 1 / wr) - c.x) * wr),
        (c.warn = !0),
        (c.moving = !0));
      break;
    case `sit`:
      ((c.x = W.dist), (c.warn = a > W.sit - W.warnBack));
      break;
    case `pushBack`:
      ((c.x = W.dist - Pr(a)),
        (c.v = (W.dist - Pr(a + 1 / wr) - c.x) * wr),
        (c.warn = !0),
        (c.moving = !0));
      break;
    case `warnClose`:
      c.warn = !0;
      break;
    case `doorsClose`:
      ((c.doors = 1 - a / W.doors), (c.warn = !0), (c.moving = !0));
      break;
    default:
      c.doors = 0;
  }
  return c;
}
var Lr = (e, t) => Ir(e, t).x,
  Rr = (e, t) => Ir(e, t).warn && !((t >> 4) & 1);
function zr(e, t) {
  return [e.parkX + Lr(e, t) + Mr, e.y + 0, e.z];
}
function Br(e) {
  let t = e.door,
    n = [];
  for (let e of [-1, 1])
    for (let r = 0; r < 3; r++) {
      let i = e * (t.half - De.w / 2 - De.w * (2 - r)),
        a = e * (t.half + De.w / 2);
      n.push({
        id: `door-${e < 0 ? `s` : `n`}-${r}`,
        side: e,
        k: r,
        x: t.x - De.t / 2 - 0.15 - r * 0.5,
        shut: i,
        open: a,
      });
    }
  return n;
}
var Vr = (e, t) => e.shut + (e.open - e.shut) * Math.max(0, Math.min(1, t)),
  Hr = Ae(),
  Ur = je(),
  Wr = Me(),
  Gr = Pe(),
  Kr = Fe(),
  G = (e, t, n, r) => [
    e[0] + t,
    e[1] + n,
    e[2] + r,
    e[3] + t,
    e[4] + n,
    e[5] + r,
  ],
  qr = new WeakMap();
function Jr(e, t) {
  let n = qr.get(e);
  n || qr.set(e, (n = new Map()));
  let r = n.get(t);
  if (r) return r;
  n.size > 3 && n.clear();
  let i = Yr(e, t);
  return (n.set(t, i), i);
}
function Yr(e, t) {
  let n = Ir(e, t),
    r = e.parkX + n.x,
    i = [];
  (Hr.forEach((t, n) =>
    i.push({ id: `plane-${n}`, box: G(t, r, e.y, e.z), kind: `plane` }),
  ),
    Gr.forEach((t, n) =>
      i.push({ id: `tug-${n}`, box: G(t, r + Ar, e.y, e.z), kind: `tug` }),
    ));
  for (let t of Br(e)) {
    let r = Vr(t, n.doors);
    Kr.forEach((n, a) =>
      i.push({ id: `${t.id}-${a}`, box: G(n, t.x, e.y, r), kind: `door` }),
    );
  }
  return i;
}
function Xr(e, t) {
  let n = e.parkX + Lr(e, t);
  return Ur.map((t) => ({
    id: t.id,
    box: G(t.box, n, e.y, e.z),
    top: (r, i) => e.y + t.h(r - n, i - e.z),
    thickness: t.thickness ?? t.box[4] - t.box[1],
  }));
}
function Zr(e, t, n) {
  let r = e.parkX + Lr(e, n),
    i = t[0] - r,
    a = t[1] - e.y;
  return (
    i > N.rampFoot - 0.6 &&
    i < N.cockpit.x1 &&
    Math.abs(t[2] - e.z) < N.hold.hw &&
    a < N.floor + N.hold.h - 0.5 &&
    a >
      (i >= N.hold.x0
        ? N.floor
        : Math.max(
            0,
            (N.floor * (i - N.rampFoot)) / (N.hold.x0 - N.rampFoot),
          )) -
        0.3
  );
}
function Qr(e, t) {
  let n = e.parkX + Lr(e, t);
  return [
    ...e.panes,
    ...Wr.map((t) => ({ id: t.id, box: G(t.box, n, e.y, e.z), plane: !0 })),
  ];
}
var $r = (e, t) => !!e.broken?.has(t);
function ei(e, t, n, r) {
  let i = 0,
    a = r;
  for (let r = 0; r < 3; r++) {
    if (Math.abs(n[r]) < 1e-9) {
      if (t[r] < e[r] || t[r] > e[r + 3]) return -1;
      continue;
    }
    let o = (e[r] - t[r]) / n[r],
      s = (e[r + 3] - t[r]) / n[r];
    if (o > s) {
      let e = o;
      ((o = s), (s = e));
    }
    if ((o > i && (i = o), s < a && (a = s), i > a)) return -1;
  }
  return i;
}
function ti(e, t, n, r, i) {
  let a = [];
  for (let o of Qr(e, i)) {
    if ($r(e, o.id)) continue;
    let i = ei(o.box, t, n, r);
    i >= 0 && a.push({ id: o.id, t: i, point: t.map((e, t) => e + n[t] * i) });
  }
  return a.sort((e, t) => e.t - t.t);
}
function ni(e, t, n, r) {
  let i = [];
  for (let a of Qr(e, r)) {
    if ($r(e, a.id)) continue;
    let r = a.box,
      o = Math.max(r[0] - t[0], 0, t[0] - r[3]),
      s = Math.max(r[1] - t[1], 0, t[1] - r[4]),
      c = Math.max(r[2] - t[2], 0, t[2] - r[5]);
    Math.hypot(o, s, c) < n && i.push(a.id);
  }
  return i;
}
var K = 0.4,
  ri = 1.8,
  ii = 0.08;
function ai(e, t) {
  let n = t.map.hangar;
  if (!n) return;
  let r = e.ext?.pl;
  if (!r || r.hangarTick === t.time.tick) return;
  r.hangarTick = t.time.tick;
  let i = t.map.hangarClock?.() ?? t.time.tick,
    a = Ir(n, i);
  if (!a.moving && !Ir(n, i - 1).moving) return;
  let o = a.x - Ir(n, i - 1).x,
    s = e.pos,
    c = n.parkX + a.x,
    l =
      s[0] > c + N.tail - 2 &&
      s[0] < c + Ar + Ee.length / 2 + 2 &&
      Math.abs(s[2] - n.z) < N.span / 2 + 2,
    u =
      Math.abs(s[0] - n.door.x) < 3 &&
      Math.abs(s[2] - n.z) < n.door.half + De.w + 2;
  if (!l && !u) return;
  let d = 0;
  if (o && ((r.grounded && !(e.vel[1] > 0.01)) || Zr(n, s, i - 1))) {
    let e = i - 1,
      t = Zr(n, s, e);
    for (let r of Xr(n, e)) {
      let e = r.box;
      if (
        !(s[0] < e[0] || s[0] > e[3] || s[2] < e[2] || s[2] > e[5]) &&
        Math.abs(s[1] - r.top(s[0], s[2])) < ii
      ) {
        t = !0;
        break;
      }
    }
    if (!t)
      for (let r of Jr(n, e)) {
        if (r.kind === `door`) continue;
        let e = r.box;
        if (
          !(
            s[0] < e[0] - K ||
            s[0] > e[3] + K ||
            s[2] < e[2] - K ||
            s[2] > e[5] + K
          ) &&
          Math.abs(s[1] - e[4]) < ii
        ) {
          t = !0;
          break;
        }
      }
    t && ((s[0] += o), (d = o));
  }
  let f = a.doors - Ir(n, i - 1).doors;
  for (let e of Jr(n, i)) {
    let t = e.box;
    (e.kind === `door` ? !f : !o) ||
      s[0] + K <= t[0] ||
      s[0] - K >= t[3] ||
      s[2] + K <= t[2] ||
      s[2] - K >= t[5] ||
      s[1] + ri <= t[1] ||
      s[1] >= t[4] - 0.05 ||
      (e.kind !== `door` &&
        s[0] - d + K > t[0] - o &&
        s[0] - d - K < t[3] - o) ||
      (s[0] =
        e.kind === `door`
          ? s[0] >= (t[0] + t[3]) / 2
            ? t[3] + K + 0.01
            : t[0] - K - 0.01
          : o > 0
            ? Math.max(s[0], t[3] + K + 0.01)
            : Math.min(s[0], t[0] - K - 0.01));
  }
}
var oi = Object.freeze([0, -9999, 0, 0, -9998, 0]);
