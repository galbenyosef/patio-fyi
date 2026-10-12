// assets__gamemodes-Lk9D-0V6 02 — color
// Lines 284-630 of readable/assets__gamemodes-Lk9D-0V6.pretty.js (statement-aligned).
function I(e, t = {}) {
  let i = new g();
  i.name = `objective-${e.id}`;
  let o = !!t.flag,
    c = null,
    d = null,
    p = null,
    m = null;
  o ||
    ((p = new x({
      color: E,
      transparent: !0,
      opacity: 0.08,
      depthWrite: !1,
      polygonOffset: !0,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1,
      side: 2,
    })),
    (c = new s(new u(e.radius, 48), p)),
    (c.rotation.x = -Math.PI / 2),
    (c.position.y = 0.09),
    i.add(c),
    (m = new l({
      color: E,
      emissive: 1446669,
      emissiveIntensity: 0.25,
      roughness: 0.65,
      metalness: 0.12,
    })),
    (d = new s(new a(e.radius, 0.16, 5, 64), m)),
    (d.rotation.x = Math.PI / 2),
    (d.position.y = 0.08),
    (d.castShadow = !0),
    i.add(d));
  let h = new s(
    new r(0.72, 0.92, 0.24, 8),
    new l({ color: 5659216, roughness: 0.92, flatShading: !0 }),
  );
  ((h.position.y = 0.12), (h.castShadow = h.receiveShadow = !0), i.add(h));
  let _ = new s(
    new r(0.055, 0.075, 7.2, 8),
    new l({
      color: 5066829,
      roughness: 0.42,
      metalness: 0.55,
      flatShading: !0,
    }),
  );
  ((_.position.y = 3.72), (_.castShadow = !0), i.add(_));
  let v = new f(2.8, 1.35, 8, 2);
  v.translate(1.4, 0, 0);
  let y = new l({ color: E, side: 2, roughness: 0.88, flatShading: !0 }),
    b = new s(v, y);
  (b.position.set(0.08, 6.25, 0), (b.castShadow = !0), i.add(b));
  let S = L(e.letter, e.name);
  (S.position.set(0, 7.85, 0), i.add(S));
  let C = null,
    w = null;
  if (e.kind === `mcom`) {
    ((_.visible = b.visible = h.visible = !1), (S.position.y = 2.7));
    let e = new l({
      color: 3884598,
      roughness: 0.7,
      metalness: 0.3,
      flatShading: !0,
    });
    ((C = new s(new n(0.9, 1.25, 0.55), e)),
      (C.position.y = 0.62),
      (C.castShadow = C.receiveShadow = !0),
      i.add(C));
    let t = new x({ color: 4198416 });
    ((w = new s(new n(0.22, 0.12, 0.22), t)), (w.position.y = 1.31), i.add(w));
  }
  return {
    group: i,
    zone: c,
    ring: d,
    base: h,
    pole: _,
    flag: b,
    label: S,
    mcom: C,
    lamp: w,
    flagStyle: o,
    flagBase: v.attributes.position.array.slice(),
    geometries: [
      c?.geometry,
      d?.geometry,
      h.geometry,
      _.geometry,
      b.geometry,
    ].filter(Boolean),
    materials: [p, m, h.material, _.material, y].filter(Boolean),
    texture: S.material.map,
  };
}
function L(n, r) {
  let i = document.createElement(`canvas`);
  ((i.width = 512), (i.height = 256));
  let a = i.getContext(`2d`);
  (a.clearRect(0, 0, 512, 256),
    (a.fillStyle = `rgba(12,16,18,.82)`),
    a.fillRect(72, 18, 368, 188),
    (a.strokeStyle = `#e7dfc8`),
    (a.lineWidth = 6),
    a.strokeRect(72, 18, 368, 188),
    (a.fillStyle = `#f1ead8`),
    (a.font = `bold 112px Arial`),
    (a.textAlign = `center`),
    a.fillText(n, 256, 126),
    (a.font = `600 29px Arial`),
    (a.fillStyle = `#c8c1ad`),
    a.fillText(String(r).toUpperCase(), 256, 176));
  let s = new o(i);
  s.colorSpace = _;
  let c = new t(new e({ map: s, transparent: !0, depthTest: !0 }));
  return (c.scale.set(3.2, 1.6, 1), c);
}
function R(e, t) {
  for (let n of e.world.match.objectives ?? []) {
    let e = t.visuals.get(n.id);
    if (!e) continue;
    if (e.flagStyle) {
      let t = D(+n.progress || 0),
        r =
          n.team === 0 ||
          n.team === 1 ||
          n.progressTeam === 0 ||
          n.progressTeam === 1
            ? t
            : 0;
      ((e.flag.position.y = F + 5.05 * r),
        e.flag.material.color.setHex(
          n.team === 0 || n.team === 1
            ? T[n.team]
            : r > 0
              ? O(n.progressTeam)
              : E,
        ));
    } else {
      let r = K.setHex(O(n.team)),
        i = q.setHex(O(n.progressTeam));
      (n.contested
        ? e.ring.material.color.setHex(14070362)
        : e.ring.material.color.copy(r),
        e.ring.material.emissive
          .copy(i)
          .multiplyScalar(n.contested ? 0.22 : 0.08),
        e.zone.material.color.copy(i),
        (e.zone.material.opacity = n.contested
          ? 0.16 + Math.sin(t.elapsed * 7) * 0.04
          : 0.055 + D(n.progress) * 0.09));
      let a = n.contested ? 1 + Math.sin(t.elapsed * 6) * 0.012 : 1;
      (e.ring.scale.setScalar(a), e.flag.material.color.copy(r));
    }
    let r = e.flag.geometry.attributes.position,
      i = e.flagBase;
    for (let e = 0; e < r.count; e++) {
      let n = i[e * 3],
        a = i[e * 3 + 1];
      r.setXYZ(
        e,
        n,
        a + Math.sin(t.elapsed * 3.2 + n * 2.1) * 0.06 * (n / 2.8),
        Math.sin(t.elapsed * 4 + n * 1.65) * 0.12 * (n / 2.8),
      );
    }
    ((r.needsUpdate = !0),
      e.flag.geometry.computeVertexNormals(),
      e.mcom &&
        ((e.mcom.visible = e.lamp.visible = n.state !== `destroyed`),
        e.lamp.material.color.setHex(
          n.state === `armed` && Math.sin(t.elapsed * 14) > 0
            ? 16722458
            : 4198416,
        )));
  }
}
function z(e) {
  e.group.parent?.remove(e.group);
  for (let t of e.geometries) t.dispose();
  for (let t of e.materials) t.dispose();
  for (let t of [e.mcom, e.lamp])
    t && (t.geometry.dispose(), t.material.dispose());
  (e.texture?.dispose(), e.label.material.dispose());
}
function B(e, t, r) {
  let i = e.world;
  ((i.map.size = 800), (i.map.bounds = [-400, -300, 400, 300]));
  let a = C(i).map((e, t) => ({
      ...e,
      pos: [(t - 1) * 160, 0, 0],
      name: [`Signal Ridge`, `Stone Crossing`, `Orchard Line`][t],
      team: t === 0 ? 0 : t === 2 ? 1 : -1,
    })),
    o = new w({
      tickets: 40,
      warmupSeconds: 0.1,
      matchSeconds: 180,
      captureSeconds: 7,
      bleedSeconds: 3,
    });
  j(i, o.init(i, a));
  let c = e.scene.getObjectByName(`debugGround`);
  c && (c.material.color.set(6058059), (c.material.roughness = 1));
  let u = new s(
    new f(400, 18),
    new l({ color: 7367256, roughness: 1, flatShading: !0 }),
  );
  ((u.rotation.x = -Math.PI / 2),
    (u.position.y = 0.025),
    (u.receiveShadow = !0),
    e.scene.add(u));
  let d = new l({ color: 9142879, roughness: 1, flatShading: !0 }),
    p = [-10.2, 10.2].map((t) => {
      let r = new s(new n(400, 0.08, 0.25), d);
      return (r.position.set(0, 0.07, t), e.scene.add(r), r);
    }),
    m = W(e, r.seed ?? 1),
    h = H(e, 16),
    g = [];
  for (let e = 0; e < 16; e++) {
    let t = e < 8 ? 0 : 1,
      n = e % 8,
      r = t === 0 ? -1 : 1,
      a =
        n < 2
          ? r * (154 + n * 3)
          : n < 6
            ? r * (13 + (n - 2) * 0.8)
            : r * (62 + (n - 6) * 4),
      o = (n - 3.5) * 2.4,
      s = i.spawn(`soldier`, {
        pos: [a, 0, o],
        team: t,
        owner: e + 1,
        hp: 100,
        maxHp: 100,
        state: 0,
        yaw: t === 0 ? -Math.PI / 2 : Math.PI / 2,
      });
    (i.players.set(e + 1, {
      id: e + 1,
      name: `Rifle ${e + 1}`,
      team: t,
      entityId: s.id,
      isBot: !0,
      ping: 0,
      kills: 0,
      deaths: 0,
      score: 0,
    }),
      (s.ext.gm = { lane: n, originX: a }),
      g.push(s.id));
  }
  return (
    e.events.emit(`player:local`, { entityId: g[2], playerId: 3 }),
    e.events.emit(`ui:ammo`, {
      mag: 30,
      reserve: 120,
      magSize: 30,
      mode: `AUTO`,
      name: `Rook AR`,
      reloading: !1,
    }),
    {
      rules: o,
      road: u,
      edges: p,
      props: m,
      soldiers: h,
      spawned: g,
      time: 0,
      dispose() {
        for (let e of g) i.get(e) && i.despawn(e);
        for (let t of [u, ...p, ...m, ...h.meshes])
          (e.scene.remove(t), t.geometry.dispose(), t.material.dispose());
        i.players.clear();
      },
    }
  );
}
function V(e, t, n) {
  let r = t.showcase;
  r.time += n;
  let i = r.time % 32;
  for (let t of r.spawned) {
    let a = e.world.get(t);
    if (!a) continue;
    let o = a.ext.gm.lane,
      s = a.team === 0 ? -1 : 1,
      c;
    c =
      o < 2
        ? s * 160
        : o < 6
          ? i < 10
            ? s * 18
            : i < 19
              ? a.team === 0
                ? 2
                : 52
              : i < 27
                ? a.team === 0
                  ? 4
                  : 110
                : s * 160
          : -s * 55;
    let l = c - a.pos[0],
      u = Math.abs(l) > 1 ? (o >= 6 ? 5.6 : 5.2) : 0;
    ((a.vel[0] = Math.sign(l) * u),
      (a.pos[0] += a.vel[0] * n),
      (a.pos[2] =
        (o - 3.5) * 2.4 + Math.sin(r.time * 0.7 + t) * (o >= 6 ? 7 : 0.6)),
      (a.yaw =
        a.vel[0] > 0 ? -Math.PI / 2 : a.vel[0] < 0 ? Math.PI / 2 : a.yaw));
  }
  for (let t of r.rules.tick(e.world, n)) e.events.emit(t.name, t.data);
}
function H(e, t) {
  let r = new y(0.25, 0.76, 2, 6);
  r.translate(0, 1.02, 0);
  let i = new m(0.18, 1);
  i.translate(0, 1.64, 0);
  let a = new n(0.09, 0.11, 0.9);
  a.translate(0.23, 1.18, -0.34);
  let o = new h(
      r,
      new l({ color: 16777215, roughness: 0.92, flatShading: !0 }),
      t,
    ),
    s = new h(i, new l({ color: 12095856, roughness: 1, flatShading: !0 }), t),
    c = new h(
      a,
      new l({
        color: 2632231,
        roughness: 0.72,
        metalness: 0.18,
        flatShading: !0,
      }),
      t,
    );
  for (let t of [o, s, c])
    ((t.castShadow = !0), (t.receiveShadow = !0), e.scene.add(t));
  return { meshes: [o, s, c], body: o, head: s, rifle: c, max: t };
}
