// assets__observatory-sim-BDUGU5NF 04 — map
// Lines 971-1309 of readable/assets__observatory-sim-BDUGU5NF.pretty.js (statement-aligned).
function Ie(e, t, n, r) {
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
function Le(e, t, n, r) {
  let i = [];
  for (let a of e.panes) {
    if (Q(e, a.id)) continue;
    let o = Ie(a.box, t, n, r);
    o >= 0 && i.push({ id: a.id, t: o });
  }
  return i.sort((e, t) => e.t - t.t);
}
function Re(e, t, n) {
  let r = [];
  for (let i of e.panes) {
    if (Q(e, i.id)) continue;
    let a = i.box,
      o = Math.max(a[0] - t[0], 0, t[0] - a[3]),
      s = Math.max(a[1] - t[1], 0, t[1] - a[4]),
      c = Math.max(a[2] - t[2], 0, t[2] - a[5]);
    Math.hypot(o, s, c) < n && r.push(i.id);
  }
  return r;
}
var $ = Object.freeze([0, -9999, 0, 0, -9998, 0]);
function ze(e, r, i = () => e.time.tick) {
  if (!r)
    return (delete e.map.observatory, delete e.map.observatoryClock, () => {});
  ((e.map.observatory = r),
    (e.map.observatoryClock = i),
    (r.broken = r.broken ?? new Set()),
    r.epoch === void 0 && (r.epoch = null));
  let a = [],
    o = (t) => {
      (e.map.addCollider(t), a.push(t.id));
    },
    s = null,
    c = new Map(),
    l = (e) => {
      let t = i();
      t !== s && ((s = t), c.clear());
      let n = c.get(e);
      return (n || c.set(e, (n = H(r, e, t))), n);
    };
  for (let e of r.domes) {
    let t = e.y0 + e.drumH,
      r = [
        e.x - e.r - 0.5,
        t - 0.1,
        e.z - e.r - 0.5,
        e.x + e.r + 0.5,
        t + e.r + 0.3,
        e.z + e.r + 0.5,
      ];
    (U(e).forEach((r, i) =>
      o(
        n({
          id: `obs-${e.id}-shell-${i}`,
          surface: `metal`,
          noRay: !0,
          obb: {
            x: e.x + Math.sin(r.a) * r.rr,
            z: e.z + Math.cos(r.a) * r.rr,
            yaw: r.a + Math.PI / 2,
            hx: 0.18,
            hz: r.hz,
            y0: t + r.y0,
            y1: t + r.y1,
          },
        }),
      ),
    ),
      o({
        id: `obs-${e.id}-shell-sphere`,
        mask: `static`,
        solid: !1,
        shotOnly: !0,
        surface: `metal`,
        aabb: r,
        movementIndexBounds: $,
        rayIndexBounds: r,
        raycast(t, n, r) {
          return be(e, l(e), t, n, r);
        },
      }));
    let a = [
      e.x - e.r * 1.1,
      e.y0 + (e.floorY || 0) - 1.5,
      e.z - e.r * 1.1,
      e.x + e.r * 1.1,
      e.y0 + (e.floorY || 0) + 0.6 + e.r * 1.3,
      e.z + e.r * 1.1,
    ];
    o({
      id: `obs-${e.id}-scope`,
      mask: `static`,
      solid: !1,
      shotOnly: !0,
      surface: `metal`,
      aabb: a,
      movementIndexBounds: $,
      rayIndexBounds: a,
      raycast(t, n, r) {
        return xe(e, l(e), t, n, r);
      },
    });
    let s = null,
      c = null,
      u = () => {
        let t = i();
        return (t !== s && ((s = t), (c = Se(e, l(e)))), c);
      };
    for (let t = 0; t < 12; t++)
      o({
        id: `obs-${e.id}-scope-${t}`,
        mask: `static`,
        solid: !0,
        noRay: !0,
        surface: `metal`,
        movementIndexBounds: a,
        rayIndexBounds: $,
        get aabb() {
          return u()[t];
        },
        raycast: () => null,
      });
  }
  {
    let t = null,
      a = new Map(),
      s = (e) => {
        let n = i();
        n !== t && ((t = n), a.clear());
        let o = a.get(e);
        return (o === void 0 && a.set(e, (o = E(r, e, n) > 0)), o);
      };
    for (let t of r.array?.antennas ?? [])
      for (let r of t.ped ?? []) {
        e.map.removeCollider?.(r.id);
        let i = n({ id: r.id, aabb: r.aabb, surface: `metal` });
        o({
          id: r.id,
          mask: `static`,
          solid: !0,
          surface: `metal`,
          movementIndexBounds: r.aabb,
          rayIndexBounds: r.aabb,
          get aabb() {
            return s(t) ? $ : r.aabb;
          },
          raycast(e, n, r) {
            return s(t) ? null : i.raycast(e, n, r);
          },
        });
      }
  }
  let u = null,
    d = null,
    f = () => {
      let e = i();
      return (e !== u && ((u = e), (d = J(r, e))), d);
    };
  for (let e of r.array?.antennas ?? []) {
    let t = e.fixed
      ? [e.x - 7.6, e.y0 + 1.6, e.z - 7.6, e.x + 7.6, e.y0 + 15.6, e.z + 7.6]
      : [e.x - 13, e.y0 - 0.2, e.z - 13, e.x + 13, e.y0 + 15.6, e.z + 13];
    o({
      id: `obs-${e.id}-dish`,
      mask: `static`,
      solid: !1,
      shotOnly: !0,
      surface: `metal`,
      aabb: t,
      movementIndexBounds: $,
      rayIndexBounds: t,
      raycast(t, n, a) {
        if (E(r, e, i()) > 0) return null;
        let o = e.fixed ? null : F(r, e, i());
        return o ? X(o.A, o.pose, t, n, a) : X(e, e.fixed ?? f(), t, n, a);
      },
    });
  }
  let p = () => {};
  if (r.meteor) {
    let n = r.meteor.zone,
      a = [n[0] - 14, r.y - 0.2, n[1] - 14, n[2] + 14, r.y + 3, n[3] + 14];
    for (let e = 0; e < O.MAX_STRIKES; e++) {
      let n = `obs-meteor-rim-${e}`,
        s = null,
        c = $,
        l = () => {
          let t = j(r)[e];
          if (!t || i() < t.impact) return null;
          if (s !== t) {
            s = t;
            let e = O.RIM_R * 1.4;
            c = [t.x - e, t.y, t.z - e, t.x + e, t.y + O.RIM_H + 0.05, t.z + e];
          }
          return t;
        };
      o({
        id: n,
        mask: `static`,
        solid: !1,
        shotOnly: !0,
        surface: `rock`,
        movementIndexBounds: $,
        rayIndexBounds: a,
        get aabb() {
          return l() ? c : $;
        },
        raycast(e, n, r) {
          let i = l();
          if (!i) return null;
          let a = t(
            Fe(),
            e[0] - i.x,
            e[1] - i.y,
            e[2] - i.z,
            n[0],
            n[1],
            n[2],
            0,
            r,
          );
          return a
            ? {
                point: [
                  e[0] + n[0] * a.dist,
                  e[1] + n[1] * a.dist,
                  e[2] + n[2] * a.dist,
                ],
                normal: a.normal,
                dist: a.dist,
                surface: `rock`,
              }
            : null;
        },
      });
    }
    for (let e of r.array?.antennas ?? []) {
      if (e.fixed) continue;
      let t = [e.x - 14, r.y - 0.2, e.z - 14, e.x + 14, r.y + 3, e.z + 14],
        n = () => (F(r, e, i()) ? me(fe(r, e).fall, r.y) : $);
      o({
        id: `obs-meteor-fallen-${e.id}`,
        mask: `static`,
        solid: !0,
        surface: `metal`,
        navDynamic: !0,
        movementIndexBounds: t,
        rayIndexBounds: $,
        get aabb() {
          return n();
        },
        raycast: () => null,
      });
    }
    let s = e.map,
      c = {
        spawnBlocked: s.spawnBlocked,
        roamBlocked: s.roamBlocked,
        navAvoid: s.navAvoid,
      };
    ((s.spawnBlocked = (e) =>
      N(r, i(), e, O.SPAWN_CLEAR) ||
      D(r, i(), e[0], e[2], 14) ||
      !!c.spawnBlocked?.(e)),
      (s.roamBlocked = (e) =>
        N(r, i(), e, O.RIM_R + 6) ||
        D(r, i(), e[0], e[2], 6) ||
        !!c.roamBlocked?.(e)),
      (s.navAvoid = (e, t, n) =>
        ue(r, i(), e, t, n, 1.2) ||
        (t < r.y + 3 && D(r, i(), e, n, 2)) ||
        !!c.navAvoid?.(e, t, n)),
      (p = () => {
        for (let e of Object.keys(c)) c[e] ? (s[e] = c[e]) : delete s[e];
      }));
  }
  if (((e.map.steerOverDrops = !0), r.flagA && r.domes[0])) {
    let t = r.domes[0],
      n = t.r - 0.3,
      i = t.y0 + (t.floorY || 0) + 2.6;
    e.map.captureIn = (e, a) =>
      e.id === r.flagA
        ? Math.hypot(a.pos[0] - t.x, a.pos[2] - t.z) < n &&
          a.pos[1] > t.y0 - 1 &&
          a.pos[1] < i
        : void 0;
  }
  for (let e of r.panes)
    o({
      id: `obs-glass-${e.id}`,
      mask: `static`,
      solid: !0,
      surface: `glass`,
      navDynamic: !0,
      movementIndexBounds: e.box,
      rayIndexBounds: $,
      get aabb() {
        return Q(r, e.id) ? $ : e.box;
      },
      raycast: () => null,
    });
  for (let e of r.fences ?? [])
    o({
      id: `obs-${e.id}`,
      mask: `static`,
      solid: !0,
      surface: `metal`,
      aabb: e.box,
      rayIndexBounds: $,
      raycast: () => null,
    });
  return () => {
    for (let t of a) e.map.removeCollider(t);
    (p(),
      delete e.map.steerOverDrops,
      delete e.map.captureIn,
      delete e.map.observatory,
      delete e.map.observatoryClock);
  };
}
