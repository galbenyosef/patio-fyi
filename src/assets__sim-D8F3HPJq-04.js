// assets__sim-D8F3HPJq 04 — math
// Lines 842-1176 of readable/assets__sim-D8F3HPJq.pretty.js (statement-aligned).
function $e(e) {
  let t = j,
    n = M.turnR,
    r = t.southRunwayZ;
  return e.map((e) => {
    let [i, a] = e.spot,
      o = e.side,
      s = Ze(
        Xe(
          [
            [i, a],
            [i, t.rowTaxiZ],
            [t.outLink, t.rowTaxiZ],
            [t.outLink, t.northTaxiZ],
            [t.outCross, t.northTaxiZ],
            [t.outCross, t.southTaxiZ],
            [t.depX, t.southTaxiZ],
            [t.depX, r - 10],
            [t.depX - 12, r],
          ],
          n,
        ),
      ),
      c =
        Math.abs(a - t.rowTaxiZ) +
        Math.abs(t.outLink - i) +
        Math.abs(t.holdNorth - t.rowTaxiZ) -
        n,
      l = i + o * 2 * t.turnIn,
      u = t.spotZ - 4,
      d = Xe(
        [
          [t.exitX + 10, r],
          [t.exitX, r - 10],
          [t.exitX, t.northTaxiZ],
          [t.inLink, t.northTaxiZ],
          [t.inLink, t.rowTaxiZ],
          [l, t.rowTaxiZ],
          [l, u],
        ],
        n,
      ),
      f = (l + i) / 2,
      p =
        o > 0
          ? Qe(f, u, t.turnIn, 0, -Math.PI)
          : Qe(f, u, t.turnIn, Math.PI, 2 * Math.PI);
    return {
      out: s,
      back: Ze([...d, ...p.slice(1), [i, a]]),
      holdAt: c,
      type: e.type,
    };
  });
}
var et = (e) => (e <= 0 ? 0 : e >= 1 ? 1 : e * e * (3 - 2 * e)),
  tt = (e, t, n) => n * et(e / t);
function nt(e) {
  let t = (e) => Math.max(6, (e / M.taxi) * 1.15);
  return [
    [`taxiA`, t(e.holdAt)],
    [`holdN`, M.hold],
    [`taxiB`, t(e.out.length - e.holdAt)],
    [`lineUp`, M.lineUp],
    [`roll`, M.roll],
    [`climb`, M.climb],
    [`hidden`, M.hidden],
    [`approach`, M.approach],
    [`rollout`, M.rollout],
    [`taxiBack`, t(e.back.length)],
  ];
}
var rt = new WeakMap();
function it(e) {
  let t = rt.get(e.fighters);
  return (
    t ||
    ((t = $e(e.fighters ?? []).map((e, t) => {
      let n = nt(e),
        r = 0;
      return {
        rt: e,
        starts: n.map(([e, t]) => {
          let n = [e, r, t];
          return ((r += t), n);
        }),
        busy: r,
        offset: M.first + t * M.stagger,
      };
    })),
    rt.set(e.fighters, t),
    t)
  );
}
var at = new WeakMap(),
  ot = Object.freeze([`back`, `door`, `apron`]),
  st = (e) => {
    let t = (e | 0) ^ 2654435769;
    return (
      (t = Math.imul(t ^ (t >>> 16), 73244475)),
      (t = Math.imul(t ^ (t >>> 16), 73244475)),
      (t ^ (t >>> 16)) >>> 0
    );
  };
function ct(e, t) {
  return e.epoch == null || !e.jets?.[t]
    ? `back`
    : ot[st(e.epoch * 31 + t * 7 + 11) % 3];
}
function lt(e, t) {
  let n = e.jets[t],
    r = ct(e, t),
    i = j.doorZ;
  return {
    mode: r,
    paint: n.paint,
    yaw: -Math.PI / 2,
    ...(r === `door`
      ? { x: n.cx, z: i - 1 - 11.8 * j.bg }
      : r === `apron`
        ? { x: n.apron[0], z: n.apron[1] }
        : { x: n.cx, z: i - 41 }),
  };
}
function ut(e, t, n) {
  let r = at.get(e);
  r || at.set(e, (r = new Map()));
  let i = t * 1e9 + n,
    a = r.get(i);
  if (a && a.epoch === e.epoch) return a.p;
  r.size > 64 && r.clear();
  let o = dt(e, t, n);
  return (r.set(i, { epoch: e.epoch, p: o }), o);
}
function dt(e, t, n) {
  let r = it(e)[t],
    i = e.fighters[t],
    a = Ye[i.type],
    [o, s] = i.spot,
    c = {
      phase: `parked`,
      x: o,
      y: e.y,
      z: s,
      yaw: -Math.PI / 2,
      attitude: 0,
      visible: !0,
      prop: 0,
      moving: !1,
    };
  if (i.hangar != null && ct(e, i.hangar) === `door`)
    return ((c.visible = !1), c);
  if (e.epoch == null || n < e.epoch) return c;
  let l = (n - e.epoch) / ze - r.offset;
  if (l < 0) return c;
  let u = l % M.cycle,
    d = null,
    f = 0,
    p = 0;
  for (let [e, t, n] of r.starts)
    if (u >= t && u < t + n) {
      ((d = e), (f = u - t), (p = n));
      break;
    }
  if (!d) return c;
  ((c.phase = d), (c.t = f), (c.moving = !0), (c.prop = l * 45));
  let m = j.southRunwayZ,
    h = (e) => {
      ((c.x = e.x), (c.z = e.z), (c.yaw = e.yaw));
    },
    g = r.rt;
  switch (d) {
    case `taxiA`:
      h(g.out.at(tt(f, p, g.holdAt)));
      break;
    case `holdN`:
      h(g.out.at(g.holdAt));
      break;
    case `taxiB`:
      h(g.out.at(g.holdAt + tt(f, p, g.out.length - g.holdAt)));
      break;
    case `lineUp`: {
      let e = g.out.at(g.out.length);
      ((c.x = e.x), (c.z = e.z), (c.yaw = Math.PI));
      break;
    }
    case `roll`: {
      ((c.x =
        g.out.at(g.out.length).x - 0.5 * (700 / (M.roll * M.roll)) * f * f),
        (c.z = m),
        (c.yaw = Math.PI));
      let e = f / M.roll;
      ((c.attitude =
        a * et(e / 0.65) -
        (e > 0.85 ? M.pitchUp * et((e - 0.85) / 0.15) * 0.6 : 0)),
        e > 0.88 && (c.y += 8 * (e - 0.88) ** 2 * M.roll));
      break;
    }
    case `climb`: {
      ((c.x = g.out.at(g.out.length).x - 350 - 50 * f - 1.2 * f * f),
        (c.z = m),
        (c.yaw = Math.PI));
      let e = M.climbH * et(f / M.climb) + 0.12 * M.roll;
      ((c.y += e), (c.attitude = a - M.pitchUp));
      break;
    }
    case `hidden`:
      ((c.visible = !1), (c.x = M.departX), (c.z = m), (c.y += M.climbH));
      break;
    case `approach`: {
      let e = f / M.approach;
      ((c.x = M.appX + (M.touchX - M.appX) * e),
        (c.z = m),
        (c.yaw = Math.PI),
        (c.y += M.appH * (1 - e) * (1 - e)),
        (c.attitude = a - (3 * Math.PI) / 180));
      break;
    }
    case `rollout`: {
      let e = M.touchX - (j.exitX + 10),
        t = f / M.rollout,
        n = e * (1 - (1 - t) * (1 - t));
      ((c.x = M.touchX - n),
        (c.z = m),
        (c.yaw = Math.PI),
        (c.attitude = a * (1 - et((t - 0.25) / 0.5))));
      break;
    }
    case `taxiBack`:
      (h(g.back.at(tt(f, p, g.back.length))),
        f > p - 1.5 && (c.prop = (l * 45 * (p - f)) / 1.5));
  }
  return (d === `taxiBack` && f > p - 0.01 && (c.moving = !1), c);
}
function ft(e) {
  let t = e.tail,
    n = e.nose,
    r = e.span / 2;
  return [
    [t, -0.5, -0.5, n, 0.55, 0.5],
    [-1.3, e.axleY + 0.75, -r, 1.2, e.axleY + 1.05, r],
    [t, 0, -2.3, t + 1.5, 0.18, 2.3],
    [t, 0, -0.12, t + 1.3, e.finTop[1], 0.12],
  ].map((e) => e.map((e) => e * j.bg));
}
var pt = { p51: ft(de), corsair: ft(fe) };
function mt(e, t, n, r) {
  let i = 0,
    a = r,
    o = -1,
    s = 0;
  for (let r = 0; r < 3; r++) {
    if (Math.abs(n[r]) < 1e-9) {
      if (t[r] < e[r] || t[r] > e[r + 3]) return null;
      continue;
    }
    let c = (e[r] - t[r]) / n[r],
      l = (e[r + 3] - t[r]) / n[r],
      u = -1;
    if (c > l) {
      let e = c;
      ((c = l), (l = e), (u = 1));
    }
    if ((c > i && ((i = c), (o = r), (s = u)), l < a && (a = l), i > a))
      return null;
  }
  return o < 0 ? null : { t: i, ax: o, sg: s };
}
function ht(e, t, n, r) {
  let i = Je[e.type],
    a = Ye[e.type] - t.attitude,
    o = Math.cos(t.yaw),
    s = Math.sin(t.yaw),
    c = Math.cos(a),
    l = Math.sin(a),
    u = n[0] - (r ? 0 : t.x),
    d = n[1] - (r ? 0 : t.y + i.mainR * j.bg),
    f = n[2] - (r ? 0 : t.z),
    p = o * u - s * f,
    m = s * u + o * f;
  return (
    (u = p),
    (f = m),
    [c * u + l * d, -l * u + c * d + (r ? 0 : i.axleY * j.bg), f]
  );
}
function gt(e, t, n, r, i, a) {
  return _t(e.fighters[t].type, ut(e, t, n), r, i, a);
}
function _t(e, t, n, r, i) {
  let a = { type: e };
  if (!t.visible || Math.hypot(n[0] - t.x, n[2] - t.z) > i + 12) return null;
  let o = ht(a, t, n, !1),
    s = ht(a, t, r, !0),
    c = null;
  for (let e of pt[a.type]) {
    let t = mt(e, o, s, c?.dist ?? i);
    t && (!c || t.t < c.dist) && (c = { dist: t.t });
  }
  return c
    ? {
        dist: c.dist,
        point: n.map((e, t) => e + r[t] * c.dist),
        normal: [0, 1, 0],
        surface: `metal`,
        pen: `metal`,
      }
    : null;
}
function vt(e, t, n) {
  if (!t?.fighters?.length) return () => {};
  let r = [];
  return (
    t.fighters.forEach((i, a) => {
      let o = `hangar-fighter-${a}`;
      (e.map.addCollider({
        id: o,
        mask: `static`,
        solid: !1,
        rayIndexBounds: [-1700, 0, -400, 1700, 320, 420],
        get aabb() {
          let e = ut(t, a, n());
          return [e.x - 8, e.y - 1, e.z - 8, e.x + 8, e.y + 6, e.z + 8];
        },
        raycast(e, r, i) {
          return gt(t, a, n(), e, r, i);
        },
      }),
        r.push(o));
    }),
    () => {
      for (let t of r) e.map.removeCollider(t);
    }
  );
}
