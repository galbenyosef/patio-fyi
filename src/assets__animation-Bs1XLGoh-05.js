// assets__animation-Bs1XLGoh 05 — math
// Lines 993-1430 of readable/assets__animation-Bs1XLGoh.pretty.js (statement-aligned).
function Xn(e, t) {
  let n = z.maxBodies * zn,
    r = new o({ roughness: 0.82, metalness: 0 }),
    i = new ie(new a(1, 1, 1), r, n);
  ((i.name = `cube_bodies`),
    (i.count = 0),
    (i.frustumCulled = !1),
    (i.castShadow = !0),
    (i.receiveShadow = !0),
    i.instanceMatrix.setUsage(ne),
    i.setColorAt(0, Kn.set(16777215)),
    e.add(i));
  let c = new Map(),
    l = new Map(),
    u = 0,
    d = !0;
  function f(e, t, n) {
    let r = Math.hypot(t[0], t[2]) || 1,
      i = t[0] / r,
      a = t[2] / r;
    for (let r = 0; r < zn; r++) {
      let o = e.cubes[r],
        s = V(...z.shove) * n * (Vn[Rn[r][0]] ?? 1);
      ((o.v.x += i * s + V(-0.8, 0.8)),
        (o.v.z += a * s + V(-0.8, 0.8)),
        (o.v.y +=
          V(...z.shoveLift) * (Vn[Rn[r][0]] ?? 1) +
          Math.max(0, t[1]) * s * 0.3),
        o.w.multiplyScalar(z.shoveSpin),
        (o.rest = !1));
    }
    ((e.shoved = !0), (e.awake = !0), (d = !0));
  }
  let p = [0, -1, 0],
    m = (e, n, r) => {
      let i = t?.();
      if (!i) return null;
      let a = [e, n + 0.6, r],
        o = i.colliders?.queryRay?.(a, p, 80);
      if (!o) {
        let e = i.raycast?.(a, p, 80, null, null, !0);
        return e?.point ? e.point[1] : null;
      }
      let s = i.getHeight?.(e, r),
        c = Number.isFinite(s) && s <= a[1] ? s : null;
      for (let e of o) {
        if (e.solid === !1 || typeof e.raycast != `function`) continue;
        let t = e.raycast(a, p, 80, !0);
        if (!t || !(t.dist > 0.02)) continue;
        let n = a[1] - t.dist;
        (c == null || n > c) && (c = n);
      }
      return c;
    };
  function h(e, t) {
    let [, , , , n, r] = Rn[e],
      i = t?.[r] ?? t?.team ?? [0.5, 0.5, 0.5];
    return {
      p: new s(),
      v: new s(),
      q: new b(),
      w: new s(),
      size: n,
      color: i,
      floor: 0,
      floorAt: null,
      rest: !1,
      from: new s(),
      fromQ: new b(),
      home: null,
      jy: 0,
      lie: null,
    };
  }
  function g(e, t) {
    t.set(0, 0, 0);
    let n = 0;
    for (let r = 0; r < zn; r++)
      Rn[r][0] === `torso` && (t.add(e.cubes[r].p), n++);
    return t.divideScalar(n || 1);
  }
  let _ = (e, t) => Math.min(1, Math.max(0.45, 1.2 - e.p.distanceTo(t) / 3));
  function v(e) {
    if (!e.cubes.every((e) => e.home)) {
      for (let t of e.cubes) t.lie = null;
      return;
    }
    let t = e.fx.chest,
      n = e.fx.from
        ? B.set(e.fx.from[0] - t.x, 0, e.fx.from[2] - t.z)
        : B.set(V(-1, 1), 0, V(-1, 1));
    (n.lengthSq() < 1e-4 && n.set(1, 0, 0), n.normalize());
    let r = new s(-n.z, 0, n.x);
    for (let i of e.cubes) {
      let e = i.home[1] - 1.15;
      ((i.lie = new s(
        t.x + r.x * e - n.x * i.home[0],
        0,
        t.z + r.z * e - n.z * i.home[0],
      )),
        (i.lie.x += n.x * i.home[2] * 0.5),
        (i.lie.z += n.z * i.home[2] * 0.5));
    }
  }
  function y() {
    for (; c.size >= z.maxBodies;) {
      let e = null;
      for (let t of c.values()) (!e || t.order < e.order) && (e = t);
      c.delete(e.id);
    }
  }
  function x(e, t) {
    ((e.floor = (m(e.p.x, Math.max(e.p.y, t), e.p.z) ?? t) + e.size * 0.5),
      (e.floorAt = e.p.clone()));
  }
  let S = {
    mesh: i,
    has: (e) => c.has(e),
    lying(e) {
      let t = c.get(e);
      return !!t && !t.released && t.removing < 0 && t.target < 0;
    },
    rebuilding(e) {
      for (let t of c.values()) if (t.target === e) return !0;
      return !1;
    },
    burst(e, t, n, r, i, a, o) {
      if (S.lying(e)) return;
      (c.delete(e), y());
      let p = m(r[0], r[1], r[2]) ?? r[1],
        g = {
          id: e,
          owner: t,
          order: u++,
          cubes: [],
          age: 0,
          awake: !0,
          removing: -1,
          target: -1,
          gatherT: -1,
          waitT: 0,
          hidden: !1,
          base: p,
        },
        _ = new s(r[0], r[1] + 0.9, r[2]);
      for (let e = 0; e < zn; e++) {
        let [t, s, c, l] = Rn[e],
          u = h(e, a);
        if (
          o &&
          n?.[t] &&
          u.p.set(s, c, l).applyMatrix4(n[t].matrixWorld).distanceToSquared(_) <
            9
        ) {
          n[t].matrixWorld.decompose(B, u.q, Wn);
          let e = u.p.clone().sub(_);
          ((e.y = 0),
            e.lengthSq() < 1e-4 && e.set(V(-1, 1), 0, V(-1, 1)),
            e.normalize());
          let r = V(...z.burst);
          (u.v.set(
            e.x * r + V(-0.6, 0.6) + (i?.[0] ?? 0) * 0.6,
            V(...z.lift) + Math.max(0, i?.[1] ?? 0) * 0.3,
            e.z * r + V(-0.6, 0.6) + (i?.[2] ?? 0) * 0.6,
          ),
            u.w.set(V(-1, 1), V(-1, 1), V(-1, 1)).multiplyScalar(z.spin),
            x(u, p));
        } else {
          let e = Math.random() * Math.PI * 2,
            t = 0.15 + Math.random() * 1.1;
          (u.p.set(r[0] + Math.cos(e) * t, 0, r[2] + Math.sin(e) * t),
            x(u, p),
            (u.p.y = u.floor),
            u.q.setFromAxisAngle(qn, Math.random() * Math.PI * 2),
            (u.rest = !0));
        }
        g.cubes.push(u);
      }
      let v = B.copy(g.cubes[1].p).sub(g.cubes[0].p).setY(0),
        b = o && v.lengthSq() > 1e-4 && g.cubes.every((e) => !e.rest);
      b && v.normalize();
      for (let e = 0; e < zn; e++) {
        let t = g.cubes[e],
          [n, i, a, o] = Rn[e],
          s = Bn[n];
        if (b) {
          let e = t.p.x - r[0],
            n = t.p.z - r[2];
          t.home = [e * v.x + n * v.z, t.p.y - r[1], e * v.z - n * v.x];
        } else t.home = [s[0] + i, s[1] + a, o];
      }
      ((g.fx = null), (g.awake = !!o), c.set(e, g), (d = !0));
      let C = l.get(e);
      (l.delete(e),
        C && o && performance.now() - C.at < 1e3 && f(g, C.dir, C.strength));
    },
    push(e, t, n = 1) {
      if (!Array.isArray(t) || t.length < 3) return;
      let r = c.get(e);
      if (r && !r.released && r.removing < 0 && r.target < 0) {
        r.age < z.shoveWindow && !r.shoved && f(r, t, n);
        return;
      }
      (l.set(e, { dir: t, strength: n, at: performance.now() }),
        l.size > 64 && l.delete(l.keys().next().value));
    },
    reviveStyle: `blocks`,
    charge(e, t) {
      let n = c.get(e);
      !n ||
        S.reviveStyle !== `blocks` ||
        n.target >= 0 ||
        n.removing >= 0 ||
        ((n.fx = {
          chargeT: 0,
          shockT: -1,
          beats: 0,
          from: t ? [t[0], t[1], t[2]] : null,
          chest: g(n, new s()),
        }),
        (d = !0));
    },
    shock(e, t) {
      let n = c.get(e);
      if (!n || S.reviveStyle !== `blocks` || n.target >= 0 || n.removing >= 0)
        return;
      n.fx || S.charge(e, t);
      let r = n.fx;
      ((r.chargeT = -1),
        (r.shockT = 0),
        (r.beats = 0),
        t && !r.from && (r.from = [t[0], t[1], t[2]]),
        g(n, r.chest),
        v(n));
      for (let e of n.cubes) {
        let t = _(e, r.chest),
          n = B.copy(e.p).sub(r.chest).setY(0);
        (n.lengthSq() < 1e-4 && n.set(V(-1, 1), 0, V(-1, 1)),
          n.normalize(),
          e.v.set(n.x * 0.6 * t, V(...z.shockLift) * t + 0.5, n.z * 0.6 * t),
          e.w.set(V(-1, 1), V(-1, 1), V(-1, 1)).multiplyScalar(9 * t),
          (e.rest = !1),
          (e.jy = 0));
      }
      ((n.awake = !0), (n.age = 0), (d = !0));
    },
    setHidden(e, t) {
      let n = c.get(e);
      n && n.hidden !== t && ((n.hidden = t), (d = !0));
    },
    release(e) {
      let t = c.get(e);
      t &&
        ((t.released = !0), t.target < 0 && t.removing < 0 && (t.removing = 0));
    },
    revive(e, t, n) {
      let r = null;
      for (let e of c.values()) if (e.target === t) return !0;
      for (let t of c.values())
        t.owner === e && t.target < 0 && (!r || t.order > r.order) && (r = t);
      if (!r && n)
        for (let e of c.values()) {
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
          (d = !0),
          !0)
        : !1;
    },
    clear() {
      (c.clear(), (d = !0));
    },
    update(e, t) {
      e = Math.min(0.05, Math.max(0, e || 0));
      let n = z.gravity;
      for (let r of Array.from(c.values())) {
        if (((r.age += e), r.target >= 0)) {
          let n = t(r.target);
          if (n) {
            if (r.gatherT < 0) {
              r.gatherT = 0;
              for (let e of r.cubes)
                (e.from.copy(e.p), e.fromQ.copy(e.q), (e.jy = 0));
            }
            ((r.gatherT += e), (d = !0));
            for (let e = 0; e < zn; e++) {
              let t = r.cubes[e],
                [i, a, o, s] = Rn[e],
                c = n[i] ?? n.torso,
                l = (z.stagger * (e % 7)) / 6,
                u = Math.min(1, Math.max(0, (r.gatherT - l) / z.gather)),
                d = u < 0.5 ? 4 * u * u * u : 1 - (-2 * u + 2) ** 3 / 2;
              (B.set(a, o, s).applyMatrix4(c.matrixWorld),
                c.matrixWorld.decompose(Wn, Yn, Wn),
                t.p.lerpVectors(t.from, B, d),
                (t.p.y += Math.sin(Math.PI * u) * 0.55),
                t.q.slerpQuaternions(t.fromQ, Yn, d));
            }
            r.gatherT >= z.gather + z.stagger && c.delete(r.id);
            continue;
          }
          if ((r.waitT += e) > z.waitSpawn)
            ((r.target = -1), r.released && (r.removing = 0));
          else continue;
        }
        if (r.removing >= 0) {
          ((r.removing += e),
            (d = !0),
            r.removing >= z.hold + z.fade && c.delete(r.id));
          continue;
        }
        if (r.fx) {
          let t = r.fx;
          if (((d = !0), t.chargeT >= 0)) {
            t.chargeT += e;
            let n = Math.min(1, t.chargeT / z.charge);
            for (let e of r.cubes) {
              let r = _(e, t.chest);
              e.jy =
                z.rattle *
                n *
                r *
                Math.abs(Math.sin(t.chargeT * 70 + e.size * 400 + e.p.x * 9));
            }
            if (t.chargeT > 1.5) {
              r.fx = null;
              for (let e of r.cubes) e.jy = 0;
            }
          } else if (t.shockT >= 0) {
            t.shockT += e;
            let n = Math.floor((t.shockT - z.firstBeat) / z.beat) + 1;
            if (n > t.beats) {
              t.beats = n;
              for (let e of r.cubes)
                ((e.v.y = z.beatHop * V(0.8, 1.1)),
                  e.lie &&
                    ((e.v.x = (e.lie.x - e.p.x) * z.beatPull),
                    (e.v.z = (e.lie.z - e.p.z) * z.beatPull)),
                  e.w.set(V(-1, 1), V(-1, 1), V(-1, 1)).multiplyScalar(2.5),
                  (e.rest = !1));
              ((r.awake = !0), (r.age = 0));
            }
            t.shockT > 8 && (r.fx = null);
          }
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
              x(t, r.base),
            t.p.y <= t.floor)
          ) {
            ((t.p.y = t.floor),
              t.v.y < -1.2
                ? ((t.v.y = -t.v.y * z.bounce), t.w.multiplyScalar(0.6))
                : (t.v.y = 0));
            let n = Math.max(0, 1 - z.friction * e);
            if (
              ((t.v.x *= n),
              (t.v.z *= n),
              t.w.multiplyScalar(n),
              Gn.setFromQuaternion(t.q, `YXZ`),
              Jn.setFromAxisAngle(qn, Gn.y),
              t.q.slerp(Jn, Math.min(1, e * 7)),
              t.v.y === 0 &&
                t.v.x * t.v.x + t.v.z * t.v.z < 0.01 &&
                t.w.lengthSq() < 0.05 &&
                (x(t, r.base), t.p.y <= t.floor + 0.01))
            ) {
              ((t.p.y = t.floor), (t.rest = !0), t.q.copy(Jn));
              continue;
            }
          }
          let a = t.w.length();
          (a > 1e-4 &&
            (Un.setFromAxisAngle(B.copy(t.w).divideScalar(a), a * e),
            t.q.premultiply(Un)),
            (i = !0));
        }
        if (((d = !0), !i || r.age > z.sleepAfter)) {
          r.awake = !1;
          for (let e of r.cubes)
            e.rest ||=
              (x(e, r.base),
              (e.p.y = e.floor),
              Gn.setFromQuaternion(e.q, `YXZ`),
              e.q.setFromAxisAngle(qn, Gn.y),
              !0);
        }
      }
      if (!d) return;
      d = !1;
      let r = 0;
      for (let e of c.values()) {
        if (e.hidden) continue;
        let t =
          e.removing >= 0
            ? Math.min(1, Math.max(0, 1 - (e.removing - z.hold) / z.fade))
            : 1;
        for (let n of e.cubes)
          (B.copy(n.p),
            (B.y += n.jy),
            Hn.compose(B, n.q, Wn.setScalar(n.size * t)),
            i.setMatrixAt(r, Hn),
            i.setColorAt(r, Kn.setRGB(n.color[0], n.color[1], n.color[2])),
            r++);
      }
      ((i.count = r),
        (i.instanceMatrix.needsUpdate = !0),
        i.instanceColor && (i.instanceColor.needsUpdate = !0));
    },
    count: () => c.size,
    dispose() {
      (e.remove(i),
        i.geometry.dispose(),
        r.dispose(),
        i.dispose?.(),
        c.clear());
    },
  };
  return S;
}
