// assets__weapons-l6nEMnye 02 — math
// Lines 162-424 of readable/assets__weapons-l6nEMnye.pretty.js (statement-aligned).
function pt(e) {
  let t = new h();
  ((t.name = `weapons_firing_range`), e.scene.add(t));
  let i = e.debugGround(720);
  (i.material.color.set(7303257), (i.material.roughness = 1));
  let a = e.scene.children.find((e) => e.isGridHelper);
  a?.material && ((a.material.opacity = 0.22), (a.material.transparent = !0));
  let o = z(8749429),
    s = z(5067073),
    c = z(3159608, 0.78, 0.18),
    l = z(6445124),
    u = z(4603699),
    d = z(13206823, 0.6, 0.18),
    f = z(9189676),
    p = z(14209472),
    m = e.scene.getObjectByName(`debugSun`),
    _ = e.scene.children.find((e) => e.isHemisphereLight),
    v = (t) => {
      let n = (((+t || 0) % 24) + 24) % 24,
        r = Math.max(0, Math.sin(((n - 5.5) / 14.5) * Math.PI)),
        a = 1 - r,
        o = Math.max(0, 1 - Math.abs(n - 12.5) / 7);
      if (m) {
        let e = (n / 24) * Math.PI * 2;
        (m.position.set(Math.cos(e) * 90, 28 + r * 82, Math.sin(e) * 70),
          m.color.set(r < 0.18 ? 8956372 : r < 0.45 ? 16757867 : 16773332),
          (m.intensity = 0.68 + r * 1.95));
      }
      (_ &&
        ((_.intensity = 0.88 + r * 0.2),
        _.color.set(r < 0.25 ? 9283535 : 11061480),
        _.groundColor.set(r < 0.25 ? 5593957 : 5660227)),
        d.emissive.setHex(r < 0.18 ? 4924676 : 0),
        (d.emissiveIntensity = r < 0.18 ? 1.4 : 1),
        i.material.emissive.setHex(r < 0.18 ? 1054754 : 0),
        (i.material.emissiveIntensity = a * 0.7),
        s.emissive.setHex(r < 0.18 ? 1054492 : 0),
        (s.emissiveIntensity = a * 0.75),
        l.emissive.setHex(r < 0.18 ? 1051913 : 0),
        u.emissive.setHex(r < 0.18 ? 723982 : 0),
        e.scene.background.set(
          r < 0.12 ? 3359839 : o > 0.5 ? 9021892 : 10190456,
        ));
    },
    b = e.events.on(`env:timeOfDay`, ({ tod: e }) => v(e));
  (v(e.world.time.tod), B(t, new r(44, 0.06, 330), s, [0, 0.015, -158]));
  for (let e of [-13, -6.5, 0, 6.5, 13])
    B(t, new r(0.07, 0.018, 324), u, [e, 0.058, -158]);
  for (let e of [-21.5, 21.5])
    B(t, new r(0.16, 0.04, 326), d, [e, 0.065, -158]);
  for (let e = -15, n = 0; e >= -321; e -= 21, n++)
    for (let r of [-1, 1]) {
      let i = 1.25 + ((n * 7 + (r > 0 ? 3 : 0)) % 5) * 0.15,
        a = B(t, new g(2.8 + (n % 3) * 0.35, 0), n % 2 ? l : u, [
          r * (24.2 + Math.sin(n * 2.17 + r) * 1.4),
          i * 0.35,
          e + Math.sin(n * 1.31) * 2.1,
        ]);
      (a.scale.set(1.35 + (n % 4) * 0.16, i / 2.8, 1.15 + ((n + 2) % 3) * 0.18),
        (a.rotation.y = (n * 0.73 + r) * 0.28));
    }
  B(t, new r(44, 0.2, 7), o, [0, 0.09, 3]);
  for (let e = -20; e <= 20; e += 4) {
    B(t, new r(0.09, 0.025, 6), e % 8 ? p : d, [e, 0.205, 3]);
    let n = ft(String(Math.round((e + 20) / 4 + 1)).padStart(2, `0`));
    (n.position.set(e + 1.9, 0.25, 0.55),
      n.scale.set(0.48, 0.12, 1),
      (n.material.depthTest = !1),
      t.add(n));
  }
  for (let e = -20; e >= -320; e -= 20) {
    let n = B(t, new r(40, 0.025, e % 100 ? 0.055 : 0.13), e % 100 ? o : d, [
      0,
      0.065,
      e,
    ]);
    n.receiveShadow = !1;
  }
  for (let e of [-9, 9]) B(t, new r(0.22, 3.5, 0.22), c, [e, 1.75, 5]);
  let x = B(t, new r(19, 0.22, 5.2), c, [0, 3.45, 4.6]);
  x.rotation.x = -0.045;
  let S = B(t, new r(19.2, 0.42, 0.16), d, [0, 3.25, 2.05]);
  S.castShadow = !1;
  for (let e of [-18, 0, 18]) {
    let n = B(t, new r(19, 8.5, 1.3), u, [e, 3.5, -326]);
    n.rotation.z = e / 620;
  }
  B(t, new g(14, 0), l, [0, 1.5, -339]).scale.set(3.7, 0.52, 0.82);
  for (let e of [-34, 34]) {
    let n = B(t, new r(2.4, 7.5, 2.4), c, [e, 3.75, -320]);
    (B(t, new r(4.6, 0.28, 4.6), d, [e, 7.55, -320]),
      (n.rotation.y = 0.12 * Math.sign(e)));
  }
  let C = [],
    w = [5, 25, 50, 100, 200, 300];
  for (let i = 0; i < w.length; i++) {
    let a = w[i],
      o = [-5.8, 0, -4, 6, -5, 3][i],
      s = 1.55,
      l = B(t, new r(0.12, 1.45, 0.12), c, [o, 0.72, -a]),
      u = (i > 3 ? d : p).clone(),
      m = B(t, new y(0.52, 0.72, 1.55, 10), u, [o, s, -a]);
    m.rotation.x = Math.PI / 2;
    let h = B(t, new n(0.29, 8, 6), f, [o, 2.5, -a]),
      g = ft(`${a} M`);
    (g.position.set(o, 3.42, -a),
      g.scale.multiplyScalar(a === 5 ? 0.22 : a === 25 ? 0.62 : 0.92),
      t.add(g));
    let _ = e.world.spawn(`prop`, {
        pos: [o, s, -a],
        hp: a >= 200 ? 180 : 100,
        maxHp: a >= 200 ? 180 : 100,
        ext: { target: !0, distance: a },
      }),
      v = `weapon-target-${_.id}`,
      b = {
        id: v,
        entity: _,
        x: o,
        z: -a,
        plate: m,
        head: h,
        stand: l,
        phase: i * 1.7,
        moving: i === 2 || i === 4,
        down: 0,
        flash: 0,
      },
      x = {
        id: v,
        mask: `target`,
        get aabb() {
          let e = b.plate.position.x;
          return [e - 0.75, 0.05, b.z - 0.28, e + 0.75, 2.84, b.z + 0.28];
        },
        raycast(e, t, n) {
          let r = dt(e, t, this.aabb, n);
          return r
            ? ((r.entityId = _.id),
              (r.targetId = _.id),
              (r.surface = `metal`),
              (r.part =
                r.point[1] > 2.14
                  ? `head`
                  : r.point[1] < 0.75
                    ? `limb`
                    : `torso`),
              r)
            : null;
        },
      };
    (e.world.map.addCollider(x), C.push(b));
  }
  for (let e of [-25, -50, -100, -200, -300])
    for (let n of [-18, 18]) B(t, new r(0.18, 1.7, 0.18), c, [n, 0.85, e]);
  return (
    e.setCameraFocus([0, 1.5, -35]),
    {
      targets: C,
      update(e, t) {
        for (let n of C) {
          if (n.moving && n.down <= 0) {
            let e = n.x + Math.sin(t * (n.z < -100 ? 0.45 : 0.8) + n.phase) * 4;
            ((n.plate.position.x = e),
              (n.head.position.x = e),
              (n.stand.position.x = e),
              (n.entity.pos[0] = e));
          }
          ((n.flash = Math.max(0, n.flash - e * 5)),
            n.plate.material.emissive.setHex(n.flash > 0 ? 5319176 : 0),
            n.down > 0 &&
              ((n.down -= e),
              (n.plate.rotation.z +=
                (Math.PI / 2 - n.plate.rotation.z) * Math.min(1, e * 10)),
              (n.head.visible = n.down < 0.15),
              n.down <= 0 &&
                ((n.entity.hp = n.entity.maxHp),
                (n.plate.rotation.z = 0),
                (n.head.visible = !0))));
        }
      },
      hit(e, t) {
        let n = C.find((t) => t.entity.id === e);
        if (!n || n.down > 0) return { kill: !1 };
        ((n.entity.hp -= t), (n.flash = 1));
        let r = n.entity.hp <= 0;
        return (r && (n.down = 2.4), { kill: r, hp: Math.max(0, n.entity.hp) });
      },
      dispose() {
        b?.();
        for (let t of C)
          (e.world.map.removeCollider(t.id), e.world.despawn(t.entity.id));
        (e.scene.remove(t),
          t.traverse((e) => {
            (e.geometry?.dispose?.(),
              e.material &&
                (e.material.map?.dispose?.(), e.material.dispose?.()),
              e.userData.texture?.dispose?.());
          }));
      },
    }
  );
}
var V = (e) => ((e = Math.max(0, Math.min(1, e))), e * e * (3 - 2 * e)),
  mt = { s: V, i: (e) => e * e * e, o: (e) => 1 - (1 - e) ** 3 };
function ht(e, t, n) {
  let r = 1;
  for (; r < e.length - 1 && t > e[r][0];) r++;
  let i = e[r - 1],
    a = e[r],
    o = mt[a[1]](
      Math.max(0, Math.min(1, (t - i[0]) / Math.max(1e-6, a[0] - i[0]))),
    );
  for (let e = 2; e < i.length; e++) n[e - 2] = i[e] + (a[e] - i[e]) * o;
  return n;
}
var gt = [
    [0, `s`, 0.32, -0.66, -0.32],
    [0.06, `s`, 0.27, -0.34, -0.3],
    [0.12, `o`, 0.25, -0.15, -0.27],
    [M, `i`, 0.14, -0.19, -0.42],
    [0.25, `o`, 0.125, -0.2, -0.43],
    [0.33, `o`, 0.24, -0.25, -0.3],
    [0.47, `s`, 0.32, -0.66, -0.3],
    [j, `s`, 0.32, -0.72, -0.3],
  ],
  _t = [
    [0, `s`, -0.32, -0.66, -0.32],
    [0.08, `o`, -0.2, -0.2, -0.44],
    [0.13, `o`, -0.15, -0.06, -0.48],
    [M, `s`, -0.17, -0.1, -0.42],
    [0.29, `s`, -0.18, -0.12, -0.41],
    [0.43, `s`, -0.32, -0.66, -0.32],
    [j, `s`, -0.32, -0.72, -0.32],
  ],
  vt = [
    [0, `s`, 1, 0.9, -0.3],
    [0.06, `s`, 0.9, 0.6, -0.3],
    [0.12, `o`, 0.75, 0.42, -0.35],
    [M, `i`, 0.62, 0.3, -0.2],
    [0.25, `o`, 0.6, 0.28, -0.55],
    [0.33, `o`, 0.7, 0.1, -0.3],
    [0.47, `s`, 0.8, -0.3, -0.4],
    [j, `s`, 0.8, -0.4, -0.4],
  ];
function yt(e, t) {
  (ht(gt, e, t.r),
    ht(_t, e, t.l),
    ht(vt, e, t.b),
    t.right.fromArray(t.r),
    t.left.fromArray(t.l),
    (t.lower = V(e / 0.05) * (1 - V((e - 0.42) / (j - 0.42)))));
  let n = V((e - 0.1) / 0.1) * (1 - V((e - 0.26) / 0.24)),
    r = Math.max(0, 1 - Math.abs(e - M - 0.02) / 0.05);
  return (
    (t.pitch = -0.02 * n - 0.014 * r),
    (t.roll = 0.02 * n - 0.012 * Math.sin(Math.PI * V(e / 0.13))),
    (t.push = 0.07 * n),
    t
  );
}
var H = ge.upper,
  bt = ue;
