// assets__vehicles-HlJi7hcV 09 — pos
// Lines 2160-2582 of readable/assets__vehicles-HlJi7hcV.pretty.js (statement-aligned).
function qe(e, t) {
  let n = (t, n, r, i) => e.modules.get(`effects`)?.spawn?.(t, n, r, i),
    r = new Map(),
    s = [],
    c = [],
    l = 0,
    d = e.rng?.fork
      ? e.rng.fork(`heli-crash`)
      : { range: (e, t) => e + Math.random() * (t - e) },
    f = (e) => (d.range(0, 1) < 0.5 ? -1 : 1);
  function p(t, n, r) {
    if (!t || !t.visible) return;
    t.updateMatrixWorld(!0);
    let i = t.clone(!0),
      a = new u().setFromObject(t).getCenter(new o()),
      c = new y();
    (c.position.copy(a),
      e.scene.add(c),
      c.updateMatrixWorld(!0),
      t.matrixWorld.decompose(i.position, i.quaternion, i.scale),
      c.attach(i),
      (t.visible = !1));
    let l = (n.vel ?? [0, 0, 0]).map((e, t) => e + r.vel[t]);
    s.push({
      pivot: c,
      vel: l,
      spin: new o(...r.spin),
      age: 0,
      rest: !1,
      smoke: r.smoke ?? 0,
    });
  }
  function h(e) {
    return e.tail ?? null;
  }
  function g(i) {
    let a = e.world.get(i?.vehicleId),
      o = t.get(i?.vehicleId);
    if (!a || !o || !F[a.weapon]?.air) return;
    let s = { mode: i.mode, since: performance.now(), dir: 1 };
    if ((r.set(a.id, s), i.mode === `shatter`)) {
      k(a, o);
      return;
    }
    o.setDestroyed(!0);
    let c = f(),
      l = a.yaw,
      u = Math.cos(l),
      m = -Math.sin(l),
      g = Math.sin(l),
      _ = Math.cos(l);
    (p(h(o), a, {
      vel: [g * 4 + u * c * 3, 2.5, _ * 4 + m * c * 3],
      spin: [d.range(2, 5), d.range(-2, 2), d.range(3, 7) * c],
      smoke: 1,
    }),
      i.mode === `burst` &&
        (p(o.rotor, a, {
          vel: [u * c * 5, 7, m * c * 5],
          spin: [d.range(-1, 1), d.range(9, 14), d.range(2, 4)],
          smoke: 0,
        }),
        n(`burn`, a.pos, Z, { scale: 2.4, heavy: 1, fire: 1, count: 10 })));
  }
  let _ = new A(),
    b = new v(),
    x = new o(),
    C = new o(),
    w = new S(),
    E = new m();
  function O(e) {
    let t = Array.isArray(e.material) ? e.material[0] : e.material,
      n = e.geometry?.attributes?.color;
    if ((E.set(t?.color ?? 5988178), n && n.count)) {
      let e = Math.floor(d.range(0, n.count));
      (E.setRGB(n.getX(e), n.getY(e), n.getZ(e)),
        t?.color && E.multiply(t.color));
    }
    return E.clone();
  }
  function k(t, r) {
    r.root.updateMatrixWorld(!0);
    let s = [],
      c = 0;
    if (
      (r.root.traverse((e) => {
        if (!e.isMesh || !e.visible || !e.geometry) return;
        let t = !0;
        for (let n = e; n; n = n.parent)
          if (!n.visible) {
            t = !1;
            break;
          }
        if (!t) return;
        let n = new u().setFromObject(e),
          r = n.getSize(new o()),
          i = Math.max(0.02, r.x * r.y * r.z);
        !Number.isFinite(i) ||
          r.length() > 40 ||
          (s.push({ o: e, box: n, vol: i }), (c += i));
      }),
      !s.length)
    )
      return;
    let l = X.blocks,
      f = new D(new i(1, 1, 1), new a({ roughness: 0.7, metalness: 0.15 }), l);
    ((f.name = `heli-blocks-` + t.id),
      (f.frustumCulled = !1),
      (f.castShadow = !0),
      f.instanceMatrix.setUsage(T));
    let p = new o(t.pos[0], t.pos[1] + F[t.weapon].h * 0.5, t.pos[2]),
      m = [];
    for (let e = 0; e < l; e++) {
      let n = d.range(0, c),
        r = s[0];
      for (let e of s)
        if (((n -= e.vol), n <= 0)) {
          r = e;
          break;
        }
      let i = r.box,
        a = new o(
          d.range(i.min.x, i.max.x),
          d.range(i.min.y, i.max.y),
          d.range(i.min.z, i.max.z),
        ),
        l = a.clone().sub(p);
      ((l.y = Math.max(0, l.y)), l.normalize());
      let u = d.range(...X.burst);
      (m.push({
        p: a,
        v: new o(
          (t.vel?.[0] ?? 0) * 0.6 + l.x * u,
          (t.vel?.[1] ?? 0) * 0.3 + d.range(...X.lift),
          (t.vel?.[2] ?? 0) * 0.6 + l.z * u,
        ),
        q: new v().setFromEuler(
          w.set(d.range(0, 6), d.range(0, 6), d.range(0, 6)),
        ),
        w: new o(d.range(-1, 1), d.range(-1, 1), d.range(-1, 1)).multiplyScalar(
          X.spin,
        ),
        size: d.range(...X.size),
        rest: !1,
      }),
        f.setColorAt(e, O(r.o)));
    }
    ((f.instanceColor.needsUpdate = !0),
      e.scene.add(f),
      j.push({ mesh: f, blocks: m, age: 0 }),
      (r.shattered = !0),
      (r.root.visible = !1),
      n(`explosion`, [p.x, p.y, p.z], Z, { scale: 2.4 }),
      n(`burn`, [p.x, p.y, p.z], Z, {
        scale: 2.2,
        heavy: 1,
        fire: 1,
        count: 10,
      }),
      e.events.emit(`audio:play`, {
        id: `vehicle_crash`,
        pos: [p.x, p.y, p.z],
        volume: 1.2,
      }));
  }
  let j = [];
  function M(t) {
    for (let n = j.length - 1; n >= 0; n--) {
      let r = j[n];
      if (((r.age += t), r.age > X.seconds)) {
        (e.scene.remove(r.mesh),
          r.mesh.geometry.dispose(),
          r.mesh.material.dispose(),
          j.splice(n, 1));
        continue;
      }
      let i = r.age > X.seconds - 2 ? (r.age - (X.seconds - 2)) * 0.5 : 0,
        a = 0;
      for (let n of r.blocks) {
        if (!n.rest) {
          ((n.v.y -= X.gravity * t),
            n.p.addScaledVector(n.v, t),
            b.setFromEuler(w.set(n.w.x * t, n.w.y * t, n.w.z * t)),
            n.q.multiply(b));
          let r = P(e.world, n.p.x, n.p.z, n.p.y + 0.5) + n.size * 0.5;
          n.p.y < r &&
            ((n.p.y = r),
            (n.v.y = Math.abs(n.v.y) * X.bounce),
            (n.v.x *= 0.5),
            (n.v.z *= 0.5),
            n.w.multiplyScalar(0.5),
            n.v.length() < 1 && (n.rest = !0));
        }
        (x.set(n.p.x, n.p.y - i, n.p.z),
          C.setScalar(n.size),
          _.compose(x, n.q, C),
          r.mesh.setMatrixAt(a++, _));
      }
      r.mesh.instanceMatrix.needsUpdate = !0;
    }
  }
  function N(t, n, r) {
    (n.setDestroyed(!0), n.root.updateMatrixWorld(!0));
    let i = n.root.clone(!0);
    i.name = `heli-wreck-` + t.id;
    let a = r === `ground` ? 0 : d.range(0.25, 0.6) * f();
    (i.position.set(t.pos[0], t.pos[1] - 0.25, t.pos[2]),
      i.rotation.set(r === `ground` ? 0 : d.range(-0.2, 0.1), t.yaw, a, `YXZ`),
      e.scene.add(i),
      c.push({
        root: i,
        pos: t.pos.slice(),
        age: 0,
        next: 0,
        h: F[t.weapon].h,
      }),
      (n.ghosted = !0));
  }
  function ee(i) {
    let a = e.world.get(i?.vehicleId),
      o = t.get(i?.vehicleId);
    if (!a || !F[a.weapon]?.air) return;
    if (i.mode === `shatter` || o?.shattered) {
      r.delete(a.id);
      return;
    }
    let s = i.pos ?? a.pos,
      c = i.mode,
      l = c === `spin` ? 3.2 : c === `burst` ? 1.6 : 2.2;
    if (o) {
      let e = f();
      (p(
        o.rotor,
        { vel: [0, 0, 0] },
        {
          vel: [Math.cos(a.yaw) * e * 6, 6, -Math.sin(a.yaw) * e * 6],
          spin: [d.range(-2, 2), d.range(10, 16), d.range(-3, 3)],
        },
      ),
        N({ ...a, pos: s.slice(), yaw: i.yaw ?? a.yaw }, o, c));
    }
    (c !== `ground` &&
      (n(`explosion`, [s[0], s[1] + 0.6, s[2]], Z, { scale: l, atImpact: !0 }),
      n(`burn`, [s[0], s[1] + 1, s[2]], Z, {
        scale: 2.2,
        heavy: 1,
        fire: 1,
        count: 8,
      }),
      n(`collapse`, s, Z, { scale: 1.4, atImpact: !0 })),
      e.events.emit(`audio:play`, { id: `vehicle_crash`, pos: s, volume: 1.2 }),
      r.delete(a.id));
  }
  function I(t) {
    let r = e.world.get(t?.vehicleId);
    if (!r || !t.pos) return;
    let i = F[r.weapon];
    if (!i?.air) return;
    let a = t.normal ?? Z,
      o = t.speed ?? 0,
      s = Math.min(1, o / 14),
      c = t.rotor ? i.rotor : Math.max(i.w, i.l) * 0.45,
      u = [
        t.pos[0] - a[0] * c,
        t.pos[1] + (t.rotor ? i.rotorY : i.h * 0.5),
        t.pos[2] - a[2] * c,
      ];
    (o >= 3 && n(`scrape`, u, a, { scale: 0.6 + s * 1.4 }),
      e.events.emit(`audio:play`, {
        id: o >= 5 ? `vehicle_crash` : `impact_metal`,
        pos: u,
        volume: Math.min(1.2, 0.35 + s),
      }));
    let d = e.modules.get(`player`)?.getLocalEntity?.();
    d && d.seat === r.id && (l = Math.max(l, 0.25 + s * 0.9));
  }
  (e.events.on(`vehicle:wreck`, g),
    e.events.on(`vehicle:crashland`, ee),
    e.events.on(`vehicle:impact`, I));
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
  function te(i) {
    let a = e.camera.position,
      o = performance.now();
    ((l = Math.max(0, l - i * 1.6)), M(i));
    for (let s of e.world.byType(`vehicle`)) {
      let c = F[s.weapon],
        l = t.get(s.id);
      if (!c?.air || !l) continue;
      if (s.hp > 0) {
        ((l.ghosted ||
          l.shattered ||
          (l.tail && !l.tail.visible) ||
          !l.rotor.visible) &&
          ((l.ghosted = !1),
          (l.shattered = !1),
          l.tail && (l.tail.visible = !0),
          (l.rotor.visible = !0)),
          r.delete(s.id));
        let e = s.hp / c.hp;
        if (
          e >= Ge ||
          Math.hypot(s.pos[0] - a.x, s.pos[1] - a.y, s.pos[2] - a.z) > We
        )
          continue;
        let t = z[s.id] ?? (z[s.id] = {}),
          o = e < Ke,
          u = R(t, `smoke`, o ? 24 : 16, i);
        for (let e = 0; e < u; e++)
          n(`burn`, L(s, c), Z, {
            scale: o ? 1.25 : 1.05,
            heavy: o ? 1 : 0.2,
            fire: o ? 0.45 : 0,
          });
        continue;
      }
      if (l.ghosted || l.shattered) {
        l.root.visible = !1;
        continue;
      }
      let u = r.get(s.id);
      if (!(s.pos[1] - P(e.world, s.pos[0], s.pos[2], s.pos[1]) > 0.2))
        continue;
      let d = z[s.id] ?? (z[s.id] = {}),
        f = R(d, `trail`, 40, i);
      for (let e = 0; e < f; e++)
        n(`burn`, L(s, c), Z, { scale: 1.3, heavy: 1, fire: 0.8 });
      let p = (o - (u?.since ?? o)) / 1e3;
      (l.root.rotation.set(
        -0.28 - Math.min(0.25, p * 0.08),
        s.yaw,
        Math.sin(p * 3.1) * 0.22 + 0.18,
        `YXZ`,
      ),
        u?.mode !== `burst` && (l.rotor.rotation.y += i * 16));
    }
    for (let t of Object.keys(z)) e.world.get(+t) || delete z[t];
    for (let t = s.length - 1; t >= 0; t--) {
      let r = s[t];
      if (((r.age += i), r.age > 30)) {
        (e.scene.remove(r.pivot), s.splice(t, 1));
        continue;
      }
      if ((r.age > 28 && (r.pivot.position.y -= i * 0.8), r.rest)) continue;
      let a = r.pivot.position;
      ((r.vel[1] -= 14 * i),
        (a.x += r.vel[0] * i),
        (a.y += r.vel[1] * i),
        (a.z += r.vel[2] * i),
        r.pivot.rotateX(r.spin.x * i),
        r.pivot.rotateY(r.spin.y * i),
        r.pivot.rotateZ(r.spin.z * i),
        r.smoke &&
          (r.puff = (r.puff ?? 0) + i) > 0.06 &&
          ((r.puff = 0),
          n(`burn`, [a.x, a.y, a.z], Z, {
            scale: 0.7,
            heavy: 0.8,
            fire: 0.3,
          })));
      let o = P(e.world, a.x, a.z, a.y + 0.5) + 0.25;
      a.y < o &&
        ((a.y = o),
        (r.vel[1] = Math.abs(r.vel[1]) * 0.3),
        (r.vel[0] *= 0.55),
        (r.vel[2] *= 0.55),
        r.spin.multiplyScalar(0.5),
        Math.hypot(...r.vel) < 1.2 && ((r.rest = !0), (r.smoke = 0)));
    }
    for (let t = c.length - 1; t >= 0; t--) {
      let r = c[t];
      if (((r.age += i), r.age > 30)) {
        (e.scene.remove(r.root), c.splice(t, 1));
        continue;
      }
      if (
        (r.age > 28 && (r.root.position.y -= i * 0.9),
        Math.hypot(r.pos[0] - a.x, r.pos[1] - a.y, r.pos[2] - a.z) > We)
      )
        continue;
      let o = r.age < 20,
        s = R(r, `next`, o ? 16 : 5, i);
      for (let e = 0; e < s; e++)
        n(
          `burn`,
          [
            r.pos[0] + d.range(-1, 1),
            r.pos[1] + r.h * 0.5,
            r.pos[2] + d.range(-1, 1),
          ],
          Z,
          {
            scale: o ? 1.7 : 1.2,
            heavy: o ? 1 : 0.4,
            fire: o ? 0.9 * (1 - r.age / 20) + 0.2 : 0,
          },
        );
    }
  }
  return {
    update: te,
    getShake: () => l,
    dispose() {
      for (let t of j)
        (e.scene.remove(t.mesh),
          t.mesh.geometry.dispose(),
          t.mesh.material.dispose());
      j.length = 0;
      for (let t of s) e.scene.remove(t.pivot);
      for (let t of c) e.scene.remove(t.root);
      ((s.length = 0), (c.length = 0), r.clear());
    },
  };
}
