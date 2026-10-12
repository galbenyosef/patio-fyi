// assets__vehicles-CqLF20DK 09 — pos
// Lines 2159-2581 of readable/assets__vehicles-CqLF20DK.pretty.js (statement-aligned).
function Ge(t, n) {
  let i = (e, n, r, i) => t.modules.get(`effects`)?.spawn?.(e, n, r, i),
    a = new Map(),
    o = [],
    s = [],
    l = 0,
    d = t.rng?.fork
      ? t.rng.fork(`heli-crash`)
      : { range: (e, t) => e + Math.random() * (t - e) },
    f = (e) => (d.range(0, 1) < 0.5 ? -1 : 1);
  function p(e, n, r) {
    if (!e || !e.visible) return;
    e.updateMatrixWorld(!0);
    let i = e.clone(!0),
      a = new u().setFromObject(e).getCenter(new k()),
      s = new C();
    (s.position.copy(a),
      t.scene.add(s),
      s.updateMatrixWorld(!0),
      e.matrixWorld.decompose(i.position, i.quaternion, i.scale),
      s.attach(i),
      (e.visible = !1));
    let c = (n.vel ?? [0, 0, 0]).map((e, t) => e + r.vel[t]);
    o.push({
      pivot: s,
      vel: c,
      spin: new k(...r.spin),
      age: 0,
      rest: !1,
      smoke: r.smoke ?? 0,
    });
  }
  function h(e) {
    return e.tail ?? null;
  }
  function _(e) {
    let r = t.world.get(e?.vehicleId),
      o = n.get(e?.vehicleId);
    if (!r || !o || !F[r.weapon]?.air) return;
    let s = { mode: e.mode, since: performance.now(), dir: 1 };
    if ((a.set(r.id, s), e.mode === `shatter`)) {
      A(r, o);
      return;
    }
    o.setDestroyed(!0);
    let c = f(),
      l = r.yaw,
      u = Math.cos(l),
      m = -Math.sin(l),
      g = Math.sin(l),
      _ = Math.cos(l);
    (p(h(o), r, {
      vel: [g * 4 + u * c * 3, 2.5, _ * 4 + m * c * 3],
      spin: [d.range(2, 5), d.range(-2, 2), d.range(3, 7) * c],
      smoke: 1,
    }),
      e.mode === `burst` &&
        (p(o.rotor, r, {
          vel: [u * c * 5, 7, m * c * 5],
          spin: [d.range(-1, 1), d.range(9, 14), d.range(2, 4)],
          smoke: 0,
        }),
        i(`burn`, r.pos, Q, { scale: 2.4, heavy: 1, fire: 1, count: 10 })));
  }
  let y = new c(),
    x = new v(),
    w = new k(),
    T = new k(),
    E = new b(),
    D = new m();
  function O(e) {
    let t = Array.isArray(e.material) ? e.material[0] : e.material,
      n = e.geometry?.attributes?.color;
    if ((D.set(t?.color ?? 5988178), n && n.count)) {
      let e = Math.floor(d.range(0, n.count));
      (D.setRGB(n.getX(e), n.getY(e), n.getZ(e)),
        t?.color && D.multiply(t.color));
    }
    return D.clone();
  }
  function A(n, a) {
    a.root.updateMatrixWorld(!0);
    let o = [],
      s = 0;
    if (
      (a.root.traverse((e) => {
        if (!e.isMesh || !e.visible || !e.geometry) return;
        let t = !0;
        for (let n = e; n; n = n.parent)
          if (!n.visible) {
            t = !1;
            break;
          }
        if (!t) return;
        let n = new u().setFromObject(e),
          r = n.getSize(new k()),
          i = Math.max(0.02, r.x * r.y * r.z);
        !Number.isFinite(i) ||
          r.length() > 40 ||
          (o.push({ o: e, box: n, vol: i }), (s += i));
      }),
      !o.length)
    )
      return;
    let c = Z.blocks,
      l = new S(new r(1, 1, 1), new g({ roughness: 0.7, metalness: 0.15 }), c);
    ((l.name = `heli-blocks-` + n.id),
      (l.frustumCulled = !1),
      (l.castShadow = !0),
      l.instanceMatrix.setUsage(e));
    let f = new k(n.pos[0], n.pos[1] + F[n.weapon].h * 0.5, n.pos[2]),
      p = [];
    for (let e = 0; e < c; e++) {
      let t = d.range(0, s),
        r = o[0];
      for (let e of o)
        if (((t -= e.vol), t <= 0)) {
          r = e;
          break;
        }
      let i = r.box,
        a = new k(
          d.range(i.min.x, i.max.x),
          d.range(i.min.y, i.max.y),
          d.range(i.min.z, i.max.z),
        ),
        c = a.clone().sub(f);
      ((c.y = Math.max(0, c.y)), c.normalize());
      let u = d.range(...Z.burst);
      (p.push({
        p: a,
        v: new k(
          (n.vel?.[0] ?? 0) * 0.6 + c.x * u,
          (n.vel?.[1] ?? 0) * 0.3 + d.range(...Z.lift),
          (n.vel?.[2] ?? 0) * 0.6 + c.z * u,
        ),
        q: new v().setFromEuler(
          E.set(d.range(0, 6), d.range(0, 6), d.range(0, 6)),
        ),
        w: new k(d.range(-1, 1), d.range(-1, 1), d.range(-1, 1)).multiplyScalar(
          Z.spin,
        ),
        size: d.range(...Z.size),
        rest: !1,
      }),
        l.setColorAt(e, O(r.o)));
    }
    ((l.instanceColor.needsUpdate = !0),
      t.scene.add(l),
      j.push({ mesh: l, blocks: p, age: 0 }),
      (a.shattered = !0),
      (a.root.visible = !1),
      i(`explosion`, [f.x, f.y, f.z], Q, { scale: 2.4 }),
      i(`burn`, [f.x, f.y, f.z], Q, {
        scale: 2.2,
        heavy: 1,
        fire: 1,
        count: 10,
      }),
      t.events.emit(`audio:play`, {
        id: `vehicle_crash`,
        pos: [f.x, f.y, f.z],
        volume: 1.2,
      }));
  }
  let j = [];
  function M(e) {
    for (let n = j.length - 1; n >= 0; n--) {
      let r = j[n];
      if (((r.age += e), r.age > Z.seconds)) {
        (t.scene.remove(r.mesh),
          r.mesh.geometry.dispose(),
          r.mesh.material.dispose(),
          j.splice(n, 1));
        continue;
      }
      let i = r.age > Z.seconds - 2 ? (r.age - (Z.seconds - 2)) * 0.5 : 0,
        a = 0;
      for (let n of r.blocks) {
        if (!n.rest) {
          ((n.v.y -= Z.gravity * e),
            n.p.addScaledVector(n.v, e),
            x.setFromEuler(E.set(n.w.x * e, n.w.y * e, n.w.z * e)),
            n.q.multiply(x));
          let r = P(t.world, n.p.x, n.p.z, n.p.y + 0.5) + n.size * 0.5;
          n.p.y < r &&
            ((n.p.y = r),
            (n.v.y = Math.abs(n.v.y) * Z.bounce),
            (n.v.x *= 0.5),
            (n.v.z *= 0.5),
            n.w.multiplyScalar(0.5),
            n.v.length() < 1 && (n.rest = !0));
        }
        (w.set(n.p.x, n.p.y - i, n.p.z),
          T.setScalar(n.size),
          y.compose(w, n.q, T),
          r.mesh.setMatrixAt(a++, y));
      }
      r.mesh.instanceMatrix.needsUpdate = !0;
    }
  }
  function N(e, n, r) {
    (n.setDestroyed(!0), n.root.updateMatrixWorld(!0));
    let i = n.root.clone(!0);
    i.name = `heli-wreck-` + e.id;
    let a = r === `ground` ? 0 : d.range(0.25, 0.6) * f();
    (i.position.set(e.pos[0], e.pos[1] - 0.25, e.pos[2]),
      i.rotation.set(r === `ground` ? 0 : d.range(-0.2, 0.1), e.yaw, a, `YXZ`),
      t.scene.add(i),
      s.push({
        root: i,
        pos: e.pos.slice(),
        age: 0,
        next: 0,
        h: F[e.weapon].h,
      }),
      (n.ghosted = !0));
  }
  function ee(e) {
    let r = t.world.get(e?.vehicleId),
      o = n.get(e?.vehicleId);
    if (!r || !F[r.weapon]?.air) return;
    if (e.mode === `shatter` || o?.shattered) {
      a.delete(r.id);
      return;
    }
    let s = e.pos ?? r.pos,
      c = e.mode,
      l = c === `spin` ? 3.2 : c === `burst` ? 1.6 : 2.2;
    if (o) {
      let t = f();
      (p(
        o.rotor,
        { vel: [0, 0, 0] },
        {
          vel: [Math.cos(r.yaw) * t * 6, 6, -Math.sin(r.yaw) * t * 6],
          spin: [d.range(-2, 2), d.range(10, 16), d.range(-3, 3)],
        },
      ),
        N({ ...r, pos: s.slice(), yaw: e.yaw ?? r.yaw }, o, c));
    }
    (c !== `ground` &&
      (i(`explosion`, [s[0], s[1] + 0.6, s[2]], Q, { scale: l, atImpact: !0 }),
      i(`burn`, [s[0], s[1] + 1, s[2]], Q, {
        scale: 2.2,
        heavy: 1,
        fire: 1,
        count: 8,
      }),
      i(`collapse`, s, Q, { scale: 1.4, atImpact: !0 })),
      t.events.emit(`audio:play`, { id: `vehicle_crash`, pos: s, volume: 1.2 }),
      a.delete(r.id));
  }
  function I(e) {
    let n = t.world.get(e?.vehicleId);
    if (!n || !e.pos) return;
    let r = F[n.weapon];
    if (!r?.air) return;
    let a = e.normal ?? Q,
      o = e.speed ?? 0,
      s = Math.min(1, o / 14),
      c = e.rotor ? r.rotor : Math.max(r.w, r.l) * 0.45,
      u = [
        e.pos[0] - a[0] * c,
        e.pos[1] + (e.rotor ? r.rotorY : r.h * 0.5),
        e.pos[2] - a[2] * c,
      ];
    (o >= 3 && i(`scrape`, u, a, { scale: 0.6 + s * 1.4 }),
      t.events.emit(`audio:play`, {
        id: o >= 5 ? `vehicle_crash` : `impact_metal`,
        pos: u,
        volume: Math.min(1.2, 0.35 + s),
      }));
    let d = t.modules.get(`player`)?.getLocalEntity?.();
    d && d.seat === n.id && (l = Math.max(l, 0.25 + s * 0.9));
  }
  (t.events.on(`vehicle:wreck`, _),
    t.events.on(`vehicle:crashland`, ee),
    t.events.on(`vehicle:impact`, I));
  let L = (e, t) => [
      e.pos[0] + Math.sin(e.yaw) * t.l * 0.18,
      e.pos[1] + t.h * 0.95,
      e.pos[2] + Math.cos(e.yaw) * t.l * 0.18,
    ],
    R = (e, t, n, r) => {
      if (((e[t] = (e[t] ?? Math.random()) + n * r), e[t] < 1)) return 0;
      let i = Math.min(4, Math.floor(e[t]));
      return ((e[t] -= i), i);
    },
    z = {};
  function te(e) {
    let r = t.camera.position,
      c = performance.now();
    ((l = Math.max(0, l - e * 1.6)), M(e));
    for (let o of t.world.byType(`vehicle`)) {
      let s = F[o.weapon],
        l = n.get(o.id);
      if (!s?.air || !l) continue;
      if (o.hp > 0) {
        ((l.ghosted ||
          l.shattered ||
          (l.tail && !l.tail.visible) ||
          !l.rotor.visible) &&
          ((l.ghosted = !1),
          (l.shattered = !1),
          l.tail && (l.tail.visible = !0),
          (l.rotor.visible = !0)),
          a.delete(o.id));
        let t = o.hp / s.hp;
        if (
          t >= Ue ||
          Math.hypot(o.pos[0] - r.x, o.pos[1] - r.y, o.pos[2] - r.z) > He
        )
          continue;
        let n = z[o.id] ?? (z[o.id] = {}),
          c = t < We,
          u = R(n, `smoke`, c ? 24 : 16, e);
        for (let e = 0; e < u; e++)
          i(`burn`, L(o, s), Q, {
            scale: c ? 1.25 : 1.05,
            heavy: c ? 1 : 0.2,
            fire: c ? 0.45 : 0,
          });
        continue;
      }
      if (l.ghosted || l.shattered) {
        l.root.visible = !1;
        continue;
      }
      let u = a.get(o.id);
      if (!(o.pos[1] - P(t.world, o.pos[0], o.pos[2], o.pos[1]) > 0.2))
        continue;
      let d = z[o.id] ?? (z[o.id] = {}),
        f = R(d, `trail`, 40, e);
      for (let e = 0; e < f; e++)
        i(`burn`, L(o, s), Q, { scale: 1.3, heavy: 1, fire: 0.8 });
      let p = (c - (u?.since ?? c)) / 1e3;
      (l.root.rotation.set(
        -0.28 - Math.min(0.25, p * 0.08),
        o.yaw,
        Math.sin(p * 3.1) * 0.22 + 0.18,
        `YXZ`,
      ),
        u?.mode !== `burst` && (l.rotor.rotation.y += e * 16));
    }
    for (let e of Object.keys(z)) t.world.get(+e) || delete z[e];
    for (let n = o.length - 1; n >= 0; n--) {
      let r = o[n];
      if (((r.age += e), r.age > 30)) {
        (t.scene.remove(r.pivot), o.splice(n, 1));
        continue;
      }
      if ((r.age > 28 && (r.pivot.position.y -= e * 0.8), r.rest)) continue;
      let a = r.pivot.position;
      ((r.vel[1] -= 14 * e),
        (a.x += r.vel[0] * e),
        (a.y += r.vel[1] * e),
        (a.z += r.vel[2] * e),
        r.pivot.rotateX(r.spin.x * e),
        r.pivot.rotateY(r.spin.y * e),
        r.pivot.rotateZ(r.spin.z * e),
        r.smoke &&
          (r.puff = (r.puff ?? 0) + e) > 0.06 &&
          ((r.puff = 0),
          i(`burn`, [a.x, a.y, a.z], Q, {
            scale: 0.7,
            heavy: 0.8,
            fire: 0.3,
          })));
      let s = P(t.world, a.x, a.z, a.y + 0.5) + 0.25;
      a.y < s &&
        ((a.y = s),
        (r.vel[1] = Math.abs(r.vel[1]) * 0.3),
        (r.vel[0] *= 0.55),
        (r.vel[2] *= 0.55),
        r.spin.multiplyScalar(0.5),
        Math.hypot(...r.vel) < 1.2 && ((r.rest = !0), (r.smoke = 0)));
    }
    for (let n = s.length - 1; n >= 0; n--) {
      let a = s[n];
      if (((a.age += e), a.age > 30)) {
        (t.scene.remove(a.root), s.splice(n, 1));
        continue;
      }
      if (
        (a.age > 28 && (a.root.position.y -= e * 0.9),
        Math.hypot(a.pos[0] - r.x, a.pos[1] - r.y, a.pos[2] - r.z) > He)
      )
        continue;
      let o = a.age < 20,
        c = R(a, `next`, o ? 16 : 5, e);
      for (let e = 0; e < c; e++)
        i(
          `burn`,
          [
            a.pos[0] + d.range(-1, 1),
            a.pos[1] + a.h * 0.5,
            a.pos[2] + d.range(-1, 1),
          ],
          Q,
          {
            scale: o ? 1.7 : 1.2,
            heavy: o ? 1 : 0.4,
            fire: o ? 0.9 * (1 - a.age / 20) + 0.2 : 0,
          },
        );
    }
  }
  return {
    update: te,
    getShake: () => l,
    dispose() {
      for (let e of j)
        (t.scene.remove(e.mesh),
          e.mesh.geometry.dispose(),
          e.mesh.material.dispose());
      j.length = 0;
      for (let e of o) t.scene.remove(e.pivot);
      for (let e of s) t.scene.remove(e.root);
      ((o.length = 0), (s.length = 0), a.clear());
    },
  };
}
