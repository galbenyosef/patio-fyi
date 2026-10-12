// assets__sim-D8F3HPJq 10 — math
// Lines 2697-3001 of readable/assets__sim-D8F3HPJq.pretty.js (statement-aligned).
function Fn(e, t) {
  let n = kn.wait,
    r = {
      x: n[0],
      y: N.surfaceY,
      z: n[1],
      yaw: -Math.PI / 2,
      lights: !1,
      moving: !1,
    };
  if (!e.fighters?.length) return r;
  let i = jn(e);
  for (let a of kn.leaders) {
    if (a >= e.fighters.length) continue;
    let o = ut(e, a, t),
      s = i[a];
    if (
      o.phase !== `holdN` &&
      o.phase !== `taxiB` &&
      o.phase !== `lineUp` &&
      o.phase !== `roll`
    )
      continue;
    let c = Mn(s),
      l = s.out.length - 70,
      u =
        o.phase === `holdN`
          ? s.holdAt
          : o.phase === `taxiB`
            ? In(s.out, o)
            : s.out.length;
    if (((r.lights = !0), (r.moving = !0), u < c)) {
      let e = Math.max(
          0,
          Math.min(1, (u - s.holdAt) / Math.max(1, c - s.holdAt)),
        ),
        t = s.out.at(c + kn.lead);
      return (
        (r.x = n[0] + (t.x - n[0]) * L(e)),
        (r.z = n[1] + (t.z - n[1]) * L(e)),
        (r.yaw = Math.atan2(-(t.z - n[1]), t.x - n[0])),
        r
      );
    }
    if (u + kn.lead < l) {
      let e = s.out.at(u + kn.lead);
      return ((r.x = e.x), (r.z = e.z), (r.yaw = e.yaw), r);
    }
    let d = s.out.at(l),
      f = kn.aside,
      p = Math.min(
        1,
        (u + kn.lead - l) / 60 + +(o.phase === `lineUp` || o.phase === `roll`),
      );
    return (
      (r.x = d.x + (f[0] - d.x) * L(p)),
      (r.z = d.z + (f[1] - d.z) * L(p)),
      (r.yaw = Math.atan2(-(f[1] - d.z), f[0] - d.x)),
      r
    );
  }
  for (let i of kn.leaders) {
    if (i >= e.fighters.length) continue;
    let a = ut(e, i, t);
    if (a.phase !== `climb`) continue;
    let o = L((a.t ?? 0) / M.climb),
      s = kn.aside;
    return (
      (r.x = s[0] + (n[0] - s[0]) * o),
      (r.z = s[1] + (n[1] - s[1]) * o),
      (r.yaw = Math.atan2(-(n[1] - s[1]), n[0] - s[0])),
      (r.moving = !0),
      r
    );
  }
  return r;
}
function In(e, t) {
  let n = 0,
    r = 1e9;
  for (let i = 0; i <= e.length; i += 2) {
    let a = e.at(i),
      o = (a.x - t.x) ** 2 + (a.z - t.z) ** 2;
    o < r && ((r = o), (n = i));
  }
  for (let i = Math.max(0, n - 2); i <= Math.min(e.length, n + 2); i += 0.25) {
    let a = e.at(i),
      o = (a.x - t.x) ** 2 + (a.z - t.z) ** 2;
    o < r && ((r = o), (n = i));
  }
  return n;
}
function Ln(e) {
  return (e.fighterHangars ?? []).flatMap((e) =>
    [0, 1].map((t) => ({ hangar: e, k: t })),
  );
}
function Rn(e, t, n) {
  let r = t.hangar,
    i = t.k ? 1 : -1,
    a = j.bg,
    o = [r.cx + i * 28, j.doorZ - 14],
    s = {
      x: o[0],
      y: N.surfaceY,
      z: o[1],
      yaw: -Math.PI / 2,
      walk: 0,
      wave: !1,
      moving: !1,
    };
  for (let t of r.fighters) {
    let c = ut(e, t, n),
      l = e.fighters[t].spot;
    if (c.phase === `taxiA`) {
      let e = c.z - l[1];
      if (e < 24 * a)
        return (
          (s.x = c.x + i * 7.5 * a),
          (s.z = c.z + 1),
          (s.yaw = -Math.PI / 2),
          (s.walk = e / 1.4),
          (s.moving = !0),
          s
        );
      let t = Math.min(1, (e - 24 * a) / 60),
        n = [l[0] + i * 7.5 * a, l[1] + 25 * a];
      return (
        (s.x = n[0] + (o[0] - n[0]) * t),
        (s.z = n[1] + (o[1] - n[1]) * t),
        t < 1 &&
          ((s.yaw = Math.atan2(-(o[1] - n[1]), o[0] - n[0])),
          (s.walk = t * 30),
          (s.moving = !0)),
        s
      );
    }
    if (c.phase === `taxiBack` && Math.hypot(c.x - l[0], c.z - l[1]) < 70 * a) {
      let e = [r.cx + i * 6, j.doorZ + 16];
      return (
        (s.x = e[0]),
        (s.z = e[1]),
        (s.yaw = Math.PI / 2),
        (s.wave = !0),
        s
      );
    }
  }
  return s;
}
var zn = Object.fromEntries(
  Object.entries({
    truck: [[-4.5, 0, -1.25, 4.5, 3.2, 1.25]],
    follow: [[-2.4, 0, -1, 2.4, 1.9, 1]],
    crew: [[-0.3, 0, -0.35, 0.3, 2.2, 0.35]],
  }).map(([e, t]) => [e, t.map((e) => e.map((e) => e * j.bg))]),
);
function Bn(e, t, n, r, i) {
  if (Math.hypot(n[0] - t.x, n[2] - t.z) > i + 8) return null;
  let a = Math.cos(t.yaw),
    o = Math.sin(t.yaw),
    s = [
      a * (n[0] - t.x) - o * (n[2] - t.z),
      n[1] - t.y,
      o * (n[0] - t.x) + a * (n[2] - t.z),
    ],
    c = [a * r[0] - o * r[2], r[1], o * r[0] + a * r[2]],
    l = null;
  for (let t of e) {
    let e = mt(t, s, c, l?.t ?? i);
    e && (!l || e.t < l.t) && (l = e);
  }
  return l
    ? {
        dist: l.t,
        point: n.map((e, t) => e + r[t] * l.t),
        normal: [0, 1, 0],
        surface: `metal`,
        pen: `metal`,
      }
    : null;
}
function Vn(e, t, n) {
  let r = [],
    i = (t, n, i, a) => {
      (e.map.addCollider({
        id: t,
        mask: `static`,
        solid: !1,
        rayIndexBounds: n,
        get aabb() {
          return i();
        },
        raycast: a,
      }),
        r.push(t));
    };
  i(
    `hangar-transport2`,
    [-2600, 0, -380, 2600, 900, 10],
    () => {
      let e = wn(t, n());
      return [e.x - 27, e.y - 27, e.z - 27, e.x + 27, e.y + 27, e.z + 27];
    },
    (e, r, i) => on(wn(t, n()), e, r, i),
  );
  for (let e = 0; e < 3; e++)
    i(
      `hangar-flyby-${e}`,
      [-1700, 0, -100, 1700, 200, 100],
      () => {
        let r = Tn(t, e, n());
        return [r.x - 8, r.y - 4, r.z - 8, r.x + 8, r.y + 4, r.z + 8];
      },
      (r, i, a) => {
        let o = Tn(t, e, n());
        return o.visible ? _t(z.type, o, r, i, a) : null;
      },
    );
  (En.forEach((e, r) =>
    i(
      `hangar-${e.id}`,
      [-460, 0, -330, 460, 10, 140],
      () => {
        let e = On(t, r, n());
        return [e.x - 6, e.y, e.z - 6, e.x + 6, e.y + 4, e.z + 6];
      },
      (e, i, a) => Bn(zn.truck, On(t, r, n()), e, i, a),
    ),
  ),
    i(
      `hangar-follow-me`,
      [-460, 0, -330, 460, 10, 140],
      () => {
        let e = Pn(t, n());
        return [e.x - 3, e.y, e.z - 3, e.x + 3, e.y + 2.5, e.z + 3];
      },
      (e, r, i) => Bn(zn.follow, Pn(t, n()), e, r, i),
    ),
    Ln(t).forEach((e, r) =>
      i(
        `hangar-crew-${r}`,
        [-460, 0, -330, 460, 10, 140],
        () => {
          let r = Rn(t, e, n());
          return [r.x - 1, r.y, r.z - 1, r.x + 1, r.y + 2.4, r.z + 1];
        },
        (r, i, a) => Bn(zn.crew, Rn(t, e, n()), r, i, a),
      ),
    ),
    (t.jets ?? []).forEach((e, n) => {
      let r = () => {
        let e = lt(t, n);
        return { x: e.x, y: N.surfaceY, z: e.z, yaw: e.yaw };
      };
      i(
        `hangar-jet-${n}`,
        [-350, 0, -350, 350, 16, -235],
        () => {
          let e = r(),
            t = Kn(`bizjet`);
          return [e.x - t, e.y - 1, e.z - t, e.x + t, e.y + 12, e.z + t];
        },
        (e, t, n) => Bn(Gn(`bizjet`), r(), e, t, n),
      );
    }));
  for (let [e, n] of (t.parked ?? []).entries()) {
    let r = Gn(n.kind);
    if (!r) continue;
    let a = {
        x: n.x,
        y: n.kind === `c5` ? t.y : N.surfaceY,
        z: n.z,
        yaw: n.yaw,
        attitude: 0,
        visible: !0,
      },
      o = Kn(n.kind),
      s =
        n.kind === `c5`
          ? _n(a, j.bg)
          : [
              n.x - o,
              N.surfaceY - 1,
              n.z - o,
              n.x + o,
              N.surfaceY + o,
              n.z + o,
            ],
      c =
        n.kind === `c5`
          ? (e, t, n) => vn(a, e, t, n, j.bg)
          : r === `warbird`
            ? (e, t, r) => _t(n.kind, a, e, t, r)
            : (e, t, n) => Bn(r, a, e, t, n);
    i(`hangar-parked-${e}`, s, () => s, c);
  }
  return () => {
    for (let t of r) e.map.removeCollider(t);
  };
}
var Hn = j.bg,
  B = (e) => e.map((e) => e.map((e) => e * Hn)),
  Un = (e, t, n) => [[-e / 2, 0, -t / 2, e / 2, n, t / 2]],
  Wn = {};
