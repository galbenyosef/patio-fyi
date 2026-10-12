// assets__animation-DTvaGqA- 05 — math
// Lines 764-1091 of readable/assets__animation-DTvaGqA-.pretty.js (statement-aligned).
function En(t, n) {
  let r = R.maxBodies * hn,
    i = new _({ roughness: 0.82, metalness: 0 }),
    o = new C(new a(1, 1, 1), i, r);
  ((o.name = `cube_bodies`),
    (o.count = 0),
    (o.frustumCulled = !1),
    (o.castShadow = !0),
    (o.receiveShadow = !0),
    o.instanceMatrix.setUsage(e),
    o.setColorAt(0, Sn.set(16777215)),
    t.add(o));
  let s = new Map(),
    c = new Map(),
    l = 0,
    u = !0;
  function d(e, t, n) {
    let r = Math.hypot(t[0], t[2]) || 1,
      i = t[0] / r,
      a = t[2] / r;
    for (let r = 0; r < hn; r++) {
      let o = e.cubes[r],
        s = z(...R.shove) * n * (gn[mn[r][0]] ?? 1);
      ((o.v.x += i * s + z(-0.8, 0.8)),
        (o.v.z += a * s + z(-0.8, 0.8)),
        (o.v.y +=
          z(...R.shoveLift) * (gn[mn[r][0]] ?? 1) +
          Math.max(0, t[1]) * s * 0.3),
        o.w.multiplyScalar(R.shoveSpin),
        (o.rest = !1));
    }
    ((e.shoved = !0), (e.awake = !0), (u = !0));
  }
  let f = [0, -1, 0],
    p = (e, t, r) => {
      let i = n?.();
      if (!i) return null;
      let a = [e, t + 0.6, r],
        o = i.colliders?.queryRay?.(a, f, 80);
      if (!o) {
        let e = i.raycast?.(a, f, 80, null, null, !0);
        return e?.point ? e.point[1] : null;
      }
      let s = i.getHeight?.(e, r),
        c = Number.isFinite(s) && s <= a[1] ? s : null;
      for (let e of o) {
        if (e.solid === !1 || typeof e.raycast != `function`) continue;
        let t = e.raycast(a, f, 80, !0);
        if (!t || !(t.dist > 0.02)) continue;
        let n = a[1] - t.dist;
        (c == null || n > c) && (c = n);
      }
      return c;
    };
  function m(e, t) {
    let [, , , , n, r] = mn[e],
      i = t?.[r] ?? t?.team ?? [0.5, 0.5, 0.5];
    return {
      p: new k(),
      v: new k(),
      q: new y(),
      w: new k(),
      size: n,
      color: i,
      floor: 0,
      floorAt: null,
      rest: !1,
      from: new k(),
      fromQ: new y(),
    };
  }
  function h() {
    for (; s.size >= R.maxBodies;) {
      let e = null;
      for (let t of s.values()) (!e || t.order < e.order) && (e = t);
      s.delete(e.id);
    }
  }
  function g(e, t) {
    ((e.floor = (p(e.p.x, Math.max(e.p.y, t), e.p.z) ?? t) + e.size * 0.5),
      (e.floorAt = e.p.clone()));
  }
  let v = {
    mesh: o,
    has: (e) => s.has(e),
    lying(e) {
      let t = s.get(e);
      return !!t && !t.released && t.removing < 0 && t.target < 0;
    },
    rebuilding(e) {
      for (let t of s.values()) if (t.target === e) return !0;
      return !1;
    },
    burst(e, t, n, r, i, a, o) {
      if (v.lying(e)) return;
      (s.delete(e), h());
      let f = p(r[0], r[1], r[2]) ?? r[1],
        _ = {
          id: e,
          owner: t,
          order: l++,
          cubes: [],
          age: 0,
          awake: !0,
          removing: -1,
          target: -1,
          gatherT: -1,
          waitT: 0,
          hidden: !1,
          base: f,
        },
        y = new k(r[0], r[1] + 0.9, r[2]);
      for (let e = 0; e < hn; e++) {
        let [t, s, c, l] = mn[e],
          u = m(e, a);
        if (
          o &&
          n?.[t] &&
          u.p.set(s, c, l).applyMatrix4(n[t].matrixWorld).distanceToSquared(y) <
            9
        ) {
          n[t].matrixWorld.decompose(vn, u.q, bn);
          let e = u.p.clone().sub(y);
          ((e.y = 0),
            e.lengthSq() < 1e-4 && e.set(z(-1, 1), 0, z(-1, 1)),
            e.normalize());
          let r = z(...R.burst);
          (u.v.set(
            e.x * r + z(-0.6, 0.6) + (i?.[0] ?? 0) * 0.6,
            z(...R.lift) + Math.max(0, i?.[1] ?? 0) * 0.3,
            e.z * r + z(-0.6, 0.6) + (i?.[2] ?? 0) * 0.6,
          ),
            u.w.set(z(-1, 1), z(-1, 1), z(-1, 1)).multiplyScalar(R.spin),
            g(u, f));
        } else {
          let e = Math.random() * Math.PI * 2,
            t = 0.15 + Math.random() * 1.1;
          (u.p.set(r[0] + Math.cos(e) * t, 0, r[2] + Math.sin(e) * t),
            g(u, f),
            (u.p.y = u.floor),
            u.q.setFromAxisAngle(Cn, Math.random() * Math.PI * 2),
            (u.rest = !0));
        }
        _.cubes.push(u);
      }
      ((_.awake = !!o), s.set(e, _), (u = !0));
      let b = c.get(e);
      (c.delete(e),
        b && o && performance.now() - b.at < 1e3 && d(_, b.dir, b.strength));
    },
    push(e, t, n = 1) {
      if (!Array.isArray(t) || t.length < 3) return;
      let r = s.get(e);
      if (r && !r.released && r.removing < 0 && r.target < 0) {
        r.age < R.shoveWindow && !r.shoved && d(r, t, n);
        return;
      }
      (c.set(e, { dir: t, strength: n, at: performance.now() }),
        c.size > 64 && c.delete(c.keys().next().value));
    },
    setHidden(e, t) {
      let n = s.get(e);
      n && n.hidden !== t && ((n.hidden = t), (u = !0));
    },
    release(e) {
      let t = s.get(e);
      t &&
        ((t.released = !0), t.target < 0 && t.removing < 0 && (t.removing = 0));
    },
    revive(e, t, n) {
      let r = null;
      for (let e of s.values()) if (e.target === t) return !0;
      for (let t of s.values())
        t.owner === e && t.target < 0 && (!r || t.order > r.order) && (r = t);
      if (!r && n)
        for (let e of s.values()) {
          let t = e.cubes[0];
          e.target < 0 &&
            Math.hypot(t.p.x - n[0], t.p.z - n[2]) < 3 &&
            (!r || e.order > r.order) &&
            (r = e);
        }
      return r
        ? ((r.target = t),
          (r.removing = -1),
          (r.gatherT = -1),
          (r.waitT = 0),
          (r.awake = !0),
          (r.hidden = !1),
          (u = !0),
          !0)
        : !1;
    },
    clear() {
      (s.clear(), (u = !0));
    },
    update(e, t) {
      e = Math.min(0.05, Math.max(0, e || 0));
      let n = R.gravity;
      for (let r of Array.from(s.values())) {
        if (((r.age += e), r.target >= 0)) {
          let n = t(r.target);
          if (n) {
            if (r.gatherT < 0) {
              r.gatherT = 0;
              for (let e of r.cubes) (e.from.copy(e.p), e.fromQ.copy(e.q));
            }
            ((r.gatherT += e), (u = !0));
            for (let e = 0; e < hn; e++) {
              let t = r.cubes[e],
                [i, a, o, s] = mn[e],
                c = n[i] ?? n.torso,
                l = (R.stagger * (e % 7)) / 6,
                u = Math.min(1, Math.max(0, (r.gatherT - l) / R.gather)),
                d = u < 0.5 ? 4 * u * u * u : 1 - (-2 * u + 2) ** 3 / 2;
              (vn.set(a, o, s).applyMatrix4(c.matrixWorld),
                c.matrixWorld.decompose(bn, Tn, bn),
                t.p.lerpVectors(t.from, vn, d),
                (t.p.y += Math.sin(Math.PI * u) * 0.55),
                t.q.slerpQuaternions(t.fromQ, Tn, d));
            }
            r.gatherT >= R.gather + R.stagger && s.delete(r.id);
            continue;
          }
          if ((r.waitT += e) > R.waitSpawn)
            ((r.target = -1), r.released && (r.removing = 0));
          else continue;
        }
        if (r.removing >= 0) {
          ((r.removing += e),
            (u = !0),
            r.removing >= R.hold + R.fade && s.delete(r.id));
          continue;
        }
        if (!r.awake) continue;
        let i = !1;
        for (let t of r.cubes) {
          if (t.rest) continue;
          if (
            ((t.v.y -= n * e),
            t.p.addScaledVector(t.v, e),
            t.floorAt &&
              Math.abs(t.p.x - t.floorAt.x) + Math.abs(t.p.z - t.floorAt.z) >
                0.4 &&
              g(t, r.base),
            t.p.y <= t.floor)
          ) {
            ((t.p.y = t.floor),
              t.v.y < -1.2
                ? ((t.v.y = -t.v.y * R.bounce), t.w.multiplyScalar(0.6))
                : (t.v.y = 0));
            let n = Math.max(0, 1 - R.friction * e);
            if (
              ((t.v.x *= n),
              (t.v.z *= n),
              t.w.multiplyScalar(n),
              xn.setFromQuaternion(t.q, `YXZ`),
              wn.setFromAxisAngle(Cn, xn.y),
              t.q.slerp(wn, Math.min(1, e * 7)),
              t.v.y === 0 &&
                t.v.x * t.v.x + t.v.z * t.v.z < 0.01 &&
                t.w.lengthSq() < 0.05 &&
                (g(t, r.base), t.p.y <= t.floor + 0.01))
            ) {
              ((t.p.y = t.floor), (t.rest = !0), t.q.copy(wn));
              continue;
            }
          }
          let a = t.w.length();
          (a > 1e-4 &&
            (yn.setFromAxisAngle(vn.copy(t.w).divideScalar(a), a * e),
            t.q.premultiply(yn)),
            (i = !0));
        }
        if (((u = !0), !i || r.age > R.sleepAfter)) {
          r.awake = !1;
          for (let e of r.cubes)
            e.rest ||=
              (g(e, r.base),
              (e.p.y = e.floor),
              xn.setFromQuaternion(e.q, `YXZ`),
              e.q.setFromAxisAngle(Cn, xn.y),
              !0);
        }
      }
      if (!u) return;
      u = !1;
      let r = 0;
      for (let e of s.values()) {
        if (e.hidden) continue;
        let t =
          e.removing >= 0
            ? Math.min(1, Math.max(0, 1 - (e.removing - R.hold) / R.fade))
            : 1;
        for (let n of e.cubes)
          (_n.compose(n.p, n.q, bn.setScalar(n.size * t)),
            o.setMatrixAt(r, _n),
            o.setColorAt(r, Sn.setRGB(n.color[0], n.color[1], n.color[2])),
            r++);
      }
      ((o.count = r),
        (o.instanceMatrix.needsUpdate = !0),
        o.instanceColor && (o.instanceColor.needsUpdate = !0));
    },
    count: () => s.size,
    dispose() {
      (t.remove(o),
        o.geometry.dispose(),
        i.dispose(),
        o.dispose?.(),
        s.clear());
    },
  };
  return v;
}
var Dn = 12,
  On = 3.3,
  kn = 5.6,
  An = 1.45,
  jn = 0.5;
function Mn(e, t) {
  let n = new g(t),
    r = e.attributes.position.count,
    i = new Float32Array(r * 3);
  for (let e = 0; e < r; e++)
    ((i[e * 3] = n.r), (i[e * 3 + 1] = n.g), (i[e * 3 + 2] = n.b));
  return (e.setAttribute(`color`, new c(i, 3)), e);
}
