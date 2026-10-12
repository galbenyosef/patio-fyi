// assets__sim-D8F3HPJq 13 — math
// Lines 3691-3904 of readable/assets__sim-D8F3HPJq.pretty.js (statement-aligned).
function Vr(e, t) {
  return [e.parkX + zr(e, t) + Pr, e.y + 0, e.z];
}
function Hr(e) {
  let t = e.door,
    n = [];
  for (let e of [-1, 1])
    for (let r = 0; r < 3; r++) {
      let i = e * (t.half - Ae.w / 2 - Ae.w * (2 - r)),
        a = e * (t.half + Ae.w / 2);
      n.push({
        id: `door-${e < 0 ? `s` : `n`}-${r}`,
        side: e,
        k: r,
        x: t.x - Ae.t / 2 - 0.15 - r * 0.5,
        shut: i,
        open: a,
      });
    }
  return n;
}
var Ur = (e, t) => e.shut + (e.open - e.shut) * Math.max(0, Math.min(1, t)),
  Wr = Ne(),
  Gr = Pe(),
  Kr = Fe(),
  qr = Le(),
  Jr = Re(),
  U = (e, t, n, r) => [
    e[0] + t,
    e[1] + n,
    e[2] + r,
    e[3] + t,
    e[4] + n,
    e[5] + r,
  ],
  Yr = new WeakMap();
function Xr(e, t) {
  let n = Yr.get(e);
  n || Yr.set(e, (n = new Map()));
  let r = n.get(t);
  if (r) return r;
  n.size > 3 && n.clear();
  let i = Zr(e, t);
  return (n.set(t, i), i);
}
function Zr(e, t) {
  let n = Rr(e, t),
    r = e.parkX + n.x,
    i = [];
  (Wr.forEach((t, n) =>
    i.push({ id: `plane-${n}`, box: U(t, r, e.y, e.z), kind: `plane` }),
  ),
    qr.forEach((t, n) =>
      i.push({ id: `tug-${n}`, box: U(t, r + Mr, e.y, e.z), kind: `tug` }),
    ));
  for (let t of Hr(e)) {
    let r = Ur(t, n.doors);
    Jr.forEach((n, a) =>
      i.push({ id: `${t.id}-${a}`, box: U(n, t.x, e.y, r), kind: `door` }),
    );
  }
  return i;
}
function Qr(e, t) {
  let n = e.parkX + zr(e, t);
  return Gr.map((t) => ({
    id: t.id,
    box: U(t.box, n, e.y, e.z),
    top: (r, i) => e.y + t.h(r - n, i - e.z),
    thickness: t.thickness ?? t.box[4] - t.box[1],
  }));
}
function $r(e, t, n) {
  let r = e.parkX + zr(e, n),
    i = t[0] - r,
    a = t[1] - e.y;
  return (
    i > A.rampFoot - 0.6 &&
    i < A.cockpit.x1 &&
    Math.abs(t[2] - e.z) < A.hold.hw &&
    a < A.floor + A.hold.h - 0.5 &&
    a >
      (i >= A.hold.x0
        ? A.floor
        : Math.max(
            0,
            (A.floor * (i - A.rampFoot)) / (A.hold.x0 - A.rampFoot),
          )) -
        0.3
  );
}
function ei(e, t) {
  let n = e.parkX + zr(e, t);
  return [
    ...e.panes,
    ...Kr.map((t) => ({ id: t.id, box: U(t.box, n, e.y, e.z), plane: !0 })),
  ];
}
var ti = (e, t) => !!e.broken?.has(t);
function ni(e, t, n, r) {
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
function ri(e, t, n, r, i) {
  let a = [];
  for (let o of ei(e, i)) {
    if (ti(e, o.id)) continue;
    let i = ni(o.box, t, n, r);
    i >= 0 && a.push({ id: o.id, t: i, point: t.map((e, t) => e + n[t] * i) });
  }
  return a.sort((e, t) => e.t - t.t);
}
function ii(e, t, n, r) {
  let i = [];
  for (let a of ei(e, r)) {
    if (ti(e, a.id)) continue;
    let r = a.box,
      o = Math.max(r[0] - t[0], 0, t[0] - r[3]),
      s = Math.max(r[1] - t[1], 0, t[1] - r[4]),
      c = Math.max(r[2] - t[2], 0, t[2] - r[5]);
    Math.hypot(o, s, c) < n && i.push(a.id);
  }
  return i;
}
var W = 0.4,
  ai = 1.8,
  oi = 0.08;
function si(e, t) {
  let n = t.map.hangar;
  if (!n) return;
  let r = e.ext?.pl;
  if (!r || r.hangarTick === t.time.tick) return;
  r.hangarTick = t.time.tick;
  let i = t.map.hangarClock?.() ?? t.time.tick,
    a = Rr(n, i);
  if (!a.moving && !Rr(n, i - 1).moving) return;
  let o = a.x - Rr(n, i - 1).x,
    s = e.pos,
    c = n.parkX + a.x,
    l =
      s[0] > c + A.tail - 2 &&
      s[0] < c + Mr + ke.length / 2 + 2 &&
      Math.abs(s[2] - n.z) < A.span / 2 + 2,
    u =
      Math.abs(s[0] - n.door.x) < 3 &&
      Math.abs(s[2] - n.z) < n.door.half + Ae.w + 2;
  if (!l && !u) return;
  if (o && r.grounded && !(e.vel[1] > 0.01)) {
    let e = i - 1,
      t = !1;
    for (let r of Qr(n, e)) {
      let e = r.box;
      if (
        !(s[0] < e[0] || s[0] > e[3] || s[2] < e[2] || s[2] > e[5]) &&
        Math.abs(s[1] - r.top(s[0], s[2])) < oi
      ) {
        t = !0;
        break;
      }
    }
    if (!t)
      for (let r of Xr(n, e)) {
        if (r.kind === `door`) continue;
        let e = r.box;
        if (
          !(
            s[0] < e[0] - W ||
            s[0] > e[3] + W ||
            s[2] < e[2] - W ||
            s[2] > e[5] + W
          ) &&
          Math.abs(s[1] - e[4]) < oi
        ) {
          t = !0;
          break;
        }
      }
    t && (s[0] += o);
  }
  let d = a.doors - Rr(n, i - 1).doors;
  for (let e of Xr(n, i)) {
    let t = e.box;
    (e.kind === `door` ? !d : !o) ||
      s[0] + W <= t[0] ||
      s[0] - W >= t[3] ||
      s[2] + W <= t[2] ||
      s[2] - W >= t[5] ||
      s[1] + ai <= t[1] ||
      s[1] >= t[4] - 0.05 ||
      (s[0] =
        e.kind === `door`
          ? s[0] >= (t[0] + t[3]) / 2
            ? t[3] + W + 0.01
            : t[0] - W - 0.01
          : o > 0
            ? Math.max(s[0], t[3] + W + 0.01)
            : Math.min(s[0], t[0] - W - 0.01));
  }
}
var ci = Object.freeze([0, -9999, 0, 0, -9998, 0]);
