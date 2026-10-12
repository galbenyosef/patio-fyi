// assets__server-CKjtCiO9 02 — pos
// Lines 272-581 of readable/assets__server-CKjtCiO9.pretty.js (statement-aligned).
function ve(e, t, n, r, i) {
  let a = e.time.tick,
    o = t.navigation;
  if (
    ((!o || I(o.goal, r) > 8 || I(o.last, n.pos) > 12) &&
      (o = t.navigation =
        {
          goal: r.slice(),
          last: n.pos.slice(),
          since: a,
          due: a,
          route: null,
          index: 0,
        }),
    I(n.pos, r) < 8 &&
      p(e, n.pos, r) &&
      !i([(n.pos[0] + r[0]) / 2, n.pos[1], (n.pos[2] + r[2]) / 2]))
  )
    return ((o.route = null), r);
  if (
    (I(o.last, n.pos) > 1 && ((o.last = n.pos.slice()), (o.since = a)), o.route)
  ) {
    for (; o.index < o.route.length - 1 && I(n.pos, o.route[o.index]) < 0.35;)
      o.index++;
    let t = o.route[o.index],
      r = I(n.pos, t),
      i = Math.min(1, 1.2 / Math.max(0.001, r)),
      s = [
        n.pos[0] + (t[0] - n.pos[0]) * i,
        n.pos[1],
        n.pos[2] + (t[2] - n.pos[2]) * i,
      ];
    if (a - o.since > 120 || !p(e, n.pos, s))
      ((o.route = null), (o.due = Math.min(o.due, a)));
    else if (o.index === o.route.length - 1 && r < 0.4) o.route = null;
    else return t;
  }
  let s = I(n.pos, r),
    c = Math.min(1, 1.4 / Math.max(0.001, s)),
    l = [
      n.pos[0] + (r[0] - n.pos[0]) * c,
      n.pos[1],
      n.pos[2] + (r[2] - n.pos[2]) * c,
    ];
  if (s < 1 || (p(e, n.pos, l) && !i(l) && a - o.since < 90) || a < o.due)
    return r;
  let u = t.navFail;
  if (u && a < u.until && I(u.goal, r) < 3 && I(u.pos, n.pos) < 2) return r;
  let d = me.get(e);
  if (
    ((!d || d.tick !== a) && ((d = { tick: a, left: 2 }), me.set(e, d)),
    !d.left ||
      (d.left--,
      (o.due = a + 120 + ((t.index ?? 0) % 30)),
      n.pos[1] - e.map.getHeight(n.pos[0], n.pos[2]) > 1.1))
  )
    return r;
  let f = Math.atan2(r[2] - n.pos[2], r[0] - n.pos[0]),
    m = s < 45 ? [r] : [];
  for (let t of [0, 1.4, -1.4, 2.5, -2.5, Math.PI]) {
    let r = Math.min(18, s),
      a = n.pos[0] + Math.cos(f + t) * r,
      o = n.pos[2] + Math.sin(f + t) * r,
      c = [a, e.map.getHeight(a, o), o];
    i(c) || m.push(c);
  }
  o.attempt = (o.attempt ?? -1) + 1;
  let h = [m[0], m[1 + (o.attempt % Math.max(1, m.length - 1))]].filter(
    Boolean,
  );
  for (let t of h) {
    let r = fe(e, n.pos, t, i);
    if (r?.length)
      return (
        (o.route = r),
        (o.index = 0),
        (o.last = n.pos.slice()),
        (o.since = a),
        r[0]
      );
  }
  return (
    (o.due = a + 300 + ((t.index ?? 0) % 60)),
    (t.navFail = { goal: r.slice(), pos: n.pos.slice(), until: o.due }),
    r
  );
}
function ye(e, t = !1) {
  t && e.navigation
    ? ((e.navigation.route = null), (e.navigation.due = 0))
    : (e.navigation = null);
}
function be(e) {
  return (
    e.stations ?? [
      {
        id: `east-south`,
        pos: [e.x + 3.6, e.floor, e.z + 1.5],
        yaw: -Math.PI / 2,
      },
      {
        id: `east-north`,
        pos: [e.x + 3.6, e.floor, e.z - 1.2],
        yaw: -Math.PI / 2,
      },
      { id: `north-east`, pos: [e.x + 1.7, e.floor, e.z - 2.7], yaw: 0 },
      { id: `north-west`, pos: [e.x - 1.7, e.floor, e.z - 2.7], yaw: 0 },
      {
        id: `west-north`,
        pos: [e.x - 3.6, e.floor, e.z - 1.2],
        yaw: Math.PI / 2,
      },
      {
        id: `west-south`,
        pos: [e.x - 3.6, e.floor, e.z + 1.5],
        yaw: Math.PI / 2,
      },
      ...(e.southWindows
        ? [
            {
              id: `south-west`,
              pos: [e.x - 3.1, e.floor, e.z + 2.7],
              yaw: Math.PI,
            },
            {
              id: `south-east`,
              pos: [e.x + 3.1, e.floor, e.z + 2.7],
              yaw: Math.PI,
            },
          ]
        : []),
    ]
  );
}
function xe(e, t, n, r, i, a) {
  if (!n?.pos || n.expires < r) return null;
  let o = null,
    s = 1 / 0;
  for (let r of be(t)) {
    let c = [r.pos[0], t.floor + 1.58, r.pos[2]],
      l = n.pos,
      u = l[0] - c[0],
      d = l[1] + 1.18 - c[1],
      f = l[2] - c[2],
      p = Math.hypot(u, d, f);
    if (p < 2 || p > i) continue;
    let m = e.map.raycast(c, [u / p, d / p, f / p], p);
    if (m && m.dist < p - 0.65) continue;
    let h = a ? Math.hypot(r.pos[0] - a[0], r.pos[2] - a[2]) : 0,
      g = p * 0.05 + h;
    g < s && ((s = g), (o = r));
  }
  return o;
}
var Se = new WeakMap();
function Ce(e, t) {
  if (!e?.urbanBuildings?.length) return [];
  if (Se.has(e)) return Se.get(e);
  let n = e.urbanBuildings
    .filter((e) => e.floors >= 2)
    .flatMap((e) =>
      Array.from({ length: e.floors - 1 + +!!e.roof }, (n, r) => {
        let i = r + 1,
          a = e.roof && i === e.floors,
          o = a ? e.roof.y : e.y + 3.2 * i,
          s = [],
          c = e.mirror ?? 1;
        for (let t = 0; t < i; t++) {
          let n = e.x + c * (t % 2 ? 15.3 : 12.5),
            r = e.z + c * (t % 2 ? -7 : 7),
            i = e.z + c * (t % 2 ? 7 : -7);
          s.push([n, e.y + t * 3.2, r], [n, e.y + (t + 1) * 3.2, i]);
        }
        return {
          id: e.id + `-guard-floor` + i,
          buildingId: e.id,
          floorIndex: i,
          urban: !0,
          roof: !!a,
          x: e.x,
          z: e.z,
          floor: o,
          stairRoute: s,
          stairStart: [
            e.x + c * 12.5,
            t.map.getHeight(e.x + c * 12.5, e.z + c * 8.4),
            e.z + c * 8.4,
          ],
          entry: s.at(-1),
          door: [e.x + c * 9.3, o, e.z + c * (i % 2 ? -7 : 7)],
          stations: [
            {
              id: `urban-north`,
              pos: [e.x + c * 7.7, o, e.z - c * 7.7],
              yaw: c > 0 ? 0 : Math.PI,
            },
            {
              id: `urban-south`,
              pos: [e.x + c * 7.7, o, e.z + c * 7.7],
              yaw: c > 0 ? Math.PI : 0,
            },
            {
              id: `urban-north-center`,
              pos: [e.x, o, e.z - c * 7.9],
              yaw: c > 0 ? 0 : Math.PI,
            },
            {
              id: `urban-south-center`,
              pos: [e.x, o, e.z + c * 7.9],
              yaw: c > 0 ? Math.PI : 0,
            },
          ],
        };
      }),
    );
  for (let r of e.urbanBuildings.filter((e) => e.workshop?.westAccess)) {
    let e = n.find((e) => e.buildingId === r.id && e.floorIndex === 1);
    if (!e) continue;
    let i = r.mirror ?? 1,
      a = [
        [r.x - i * 15.5, r.y, r.z + i * 7],
        [r.x - i * 15.5, r.y + 3.2, r.z - i * 7],
      ];
    n.push({
      ...e,
      id: r.id + `-west-guard-floor1`,
      accessSide: `west`,
      stairRoute: a,
      stairStart: [
        r.x - i * 15.5,
        t.map.getHeight(r.x - i * 15.5, r.z + i * 8.4),
        r.z + i * 8.4,
      ],
      entry: a.at(-1),
      door: [r.x - i * 9.5, e.floor, r.z - i * 7],
      stations: e.stations.map((e) => ({
        ...e,
        pos: [e.pos[0] === r.x ? r.x : r.x - i * 9.5, e.pos[1], e.pos[2]],
      })),
    });
  }
  return (Se.set(e, n), n);
}
function we(e, t) {
  let n = e.elevation;
  if (!n?.forward || n.shots > 0) return;
  let r = (e.overwatchAvoid ??= new Map()),
    i = n.room.buildingId ?? n.room.id;
  for (r.delete(i), r.set(i, t + 7200); r.size > 4;)
    r.delete(r.keys().next().value);
}
function Te(e, t) {
  let [n, , r] = t.pos,
    i = Math.max(12, t.radius ?? 12);
  return [
    [n, r],
    [n - i - 12, r],
    [n + i + 12, r],
    [n, r - i - 12],
    [n, r + i + 12],
  ].map(([t, n]) => [t, e.map.getHeight(t, n) + 1.18, n]);
}
function Ee(e, t, n, r) {
  return De(e, t, n, r)?.coverage ?? 0;
}
function De(e, t, n, r) {
  let i = null;
  for (let a of be(t)) {
    let o = [a.pos[0], t.floor + 1.58 * u(), a.pos[2]],
      s = 0,
      c = null,
      l = 1 / 0;
    for (let t of n) {
      let n = t.map((e, t) => e - o[t]),
        i = Math.hypot(...n);
      if (i < 2 || i > r) continue;
      let a = e.map.raycast(
        o,
        n.map((e) => e / i),
        i,
      );
      (!a || a.dist >= i - 0.65) && (s++, i < l && ((c = n), (l = i)));
    }
    s > 0 &&
      (!i || s > i.coverage) &&
      (i = { ...a, yaw: Math.atan2(-c[0], -c[2]), coverage: s });
  }
  return i;
}
var L = (e, t) => Math.hypot(e[0] - t[0], e[2] - t[2]),
  Oe = 600,
  ke = 1800;
function Ae(e, t, n, r) {
  let i = 0;
  for (let a of r) {
    if (a === n || !a.elevation) continue;
    let r = e.get(a.entityId);
    if (!r || r.hp <= 0) continue;
    let o = a.elevation.room;
    if (
      o.id === t.id ||
      (o.buildingId &&
        o.buildingId === t.buildingId &&
        o.floorIndex === t.floorIndex)
    )
      return !1;
    (o.buildingId ?? o.id) === (t.buildingId ?? t.id) && i++;
  }
  return i < 2;
}
