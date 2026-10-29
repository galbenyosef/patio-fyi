// assets__gamemodes-CXbD6WoW 03 — math
// Lines 611-875 of readable/assets__gamemodes-CXbD6WoW.pretty.js (statement-aligned).
function X(e, t, i) {
  let o = e.world;
  ((o.map.size = 800), (o.map.bounds = [-400, -300, 400, 300]));
  let s = E(o).map((e, t) => ({
      ...e,
      pos: [(t - 1) * 160, 0, 0],
      name: [`Signal Ridge`, `Stone Crossing`, `Orchard Line`][t],
      team: t === 0 ? 0 : t === 2 ? 1 : -1,
    })),
    c = new D({
      tickets: 40,
      warmupSeconds: 0.1,
      matchSeconds: 180,
      captureSeconds: 7,
      bleedSeconds: 3,
    });
  V(o, c.init(o, s));
  let l = e.scene.getObjectByName(`debugGround`);
  l && (l.material.color.set(6058059), (l.material.roughness = 1));
  let u = new n(
    new b(400, 18),
    new a({ color: 7367256, roughness: 1, flatShading: !0 }),
  );
  ((u.rotation.x = -Math.PI / 2),
    (u.position.y = 0.025),
    (u.receiveShadow = !0),
    e.scene.add(u));
  let d = new a({ color: 9142879, roughness: 1, flatShading: !0 }),
    f = [-10.2, 10.2].map((t) => {
      let i = new n(new r(400, 0.08, 0.25), d);
      return (i.position.set(0, 0.07, t), e.scene.add(i), i);
    }),
    p = oe(e, i.seed ?? 1),
    m = ie(e, 16),
    h = [];
  for (let e = 0; e < 16; e++) {
    let t = e < 8 ? 0 : 1,
      n = e % 8,
      r = t === 0 ? -1 : 1,
      i =
        n < 2
          ? r * (154 + n * 3)
          : n < 6
            ? r * (13 + (n - 2) * 0.8)
            : r * (62 + (n - 6) * 4),
      a = (n - 3.5) * 2.4,
      s = o.spawn(`soldier`, {
        pos: [i, 0, a],
        team: t,
        owner: e + 1,
        hp: 100,
        maxHp: 100,
        state: 0,
        yaw: t === 0 ? -Math.PI / 2 : Math.PI / 2,
      });
    (o.players.set(e + 1, {
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
      (s.ext.gm = { lane: n, originX: i }),
      h.push(s.id));
  }
  return (
    e.events.emit(`player:local`, { entityId: h[2], playerId: 3 }),
    e.events.emit(`ui:ammo`, {
      mag: 30,
      reserve: 120,
      magSize: 30,
      mode: `AUTO`,
      name: `Rook AR`,
      reloading: !1,
    }),
    {
      rules: c,
      road: u,
      edges: f,
      props: p,
      soldiers: m,
      spawned: h,
      time: 0,
      dispose() {
        for (let e of h) o.get(e) && o.despawn(e);
        for (let t of [u, ...f, ...p, ...m.meshes])
          (e.scene.remove(t), t.geometry.dispose(), t.material.dispose());
        o.players.clear();
      },
    }
  );
}
function re(e, t, n) {
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
function ie(e, n) {
  let i = new t(0.25, 0.76, 2, 6);
  i.translate(0, 1.02, 0);
  let o = new y(0.18, 1);
  o.translate(0, 1.64, 0);
  let s = new r(0.09, 0.11, 0.9);
  s.translate(0.23, 1.18, -0.34);
  let c = new C(
      i,
      new a({ color: 16777215, roughness: 0.92, flatShading: !0 }),
      n,
    ),
    l = new C(o, new a({ color: 12095856, roughness: 1, flatShading: !0 }), n),
    u = new C(
      s,
      new a({
        color: 2632231,
        roughness: 0.72,
        metalness: 0.18,
        flatShading: !0,
      }),
      n,
    );
  for (let t of [c, l, u])
    ((t.castShadow = !0), (t.receiveShadow = !0), e.scene.add(t));
  return { meshes: [c, l, u], body: c, head: l, rifle: u, max: n };
}
function ae(e, t) {
  let n = t.showcase,
    r = ce,
    i = le,
    a = ue,
    o = de,
    s = fe,
    c = 0;
  for (let l of n.spawned) {
    let u = e.world.get(l);
    if (!u || c >= n.soldiers.max) continue;
    let d = Math.hypot(u.vel[0], u.vel[2]);
    (a.set(
      u.pos[0],
      u.pos[1] + Math.sin(t.elapsed * 10 + l) * Math.min(0.035, d * 0.008),
      u.pos[2],
    ),
      i.setFromEuler(pe.set(0, u.yaw, 0)),
      o.set(1, 1, 1),
      r.compose(a, i, o));
    for (let e of n.soldiers.meshes) e.setMatrixAt(c, r);
    (n.soldiers.body.setColorAt(
      c,
      s.set(F[u.team]).multiplyScalar(0.9 + (l % 3) * 0.06),
    ),
      c++);
  }
  for (let e of n.soldiers.meshes)
    ((e.count = c), (e.instanceMatrix.needsUpdate = !0));
  n.soldiers.body.instanceColor.needsUpdate = !0;
}
function oe(e, t) {
  let n = new r(1.5, 0.65, 0.75),
    i = new a({ color: 9273436, roughness: 1, flatShading: !0 }),
    o = new C(n, i, 42);
  o.castShadow = o.receiveShadow = !0;
  let c = new T(),
    l = new m(),
    u = new s(),
    d = new s(1, 1, 1),
    f = 0;
  for (let e = -1; e <= 1; e++)
    for (let n = 0; n < 14; n++) {
      let r = (n / 14) * Math.PI * 2 + e * 0.7 + t * 0.01,
        i = 17 + (n % 2) * 2;
      (u.set(
        e * 160 + Math.cos(r) * i,
        0.34 + (n % 3 == 0 ? 0.34 : 0),
        Math.sin(r) * i,
      ),
        l.setFromAxisAngle($, -r),
        c.compose(u, l, d),
        o.setMatrixAt(f++, c));
    }
  e.scene.add(o);
  let p = new C(
    new r(1.5, 1.2, 1.5),
    new a({ color: 7298109, roughness: 0.95, flatShading: !0 }),
    18,
  );
  for (let e = 0; e < 18; e++) {
    let t = (e % 3) - 1,
      n = e % 2 ? 1 : -1;
    (u.set(t * 160 + n * (23 + (e % 4) * 2), 0.6, ((e % 6) - 2.5) * 4.1),
      l.setFromAxisAngle($, e * 0.71),
      c.compose(u, l, d),
      p.setMatrixAt(e, c));
  }
  return ((p.castShadow = p.receiveShadow = !0), e.scene.add(p), [o, p]);
}
function Z(e, t) {
  let n = ((t % 24) + 24) % 24,
    r = L(Math.sin(((n - 6) / 12) * Math.PI) * 0.8 + 0.25),
    i = e.scene.getObjectByName(`debugSun`);
  (i &&
    (i.color.set(r > 0.35 ? 16770757 : 10402029),
    (i.intensity = 0.75 + r * 2.3),
    i.position.set(
      Math.cos((n / 24) * Math.PI * 2) * 180,
      35 + r * 120,
      Math.sin((n / 24) * Math.PI * 2) * 180,
    )),
    e.scene.traverse((e) => {
      e.isHemisphereLight &&
        (e.color.set(r > 0.25 ? 12178413 : 9546720),
        e.groundColor.set(r > 0.25 ? 5134652 : 3557218),
        (e.intensity = 1.75 - r * 0.35));
    }));
  let a = e.scene.getObjectByName(`debugGround`);
  (a?.material?.emissive &&
    (a.material.emissive.set(r > 0.2 ? 0 : 1582653),
    (a.material.emissiveIntensity = r > 0.2 ? 0 : 0.55)),
    (e.scene.background = new d(2439776).lerp(new d(8890309), r)),
    (e.scene.fog = new h(new d(4215924).lerp(new d(11124167), r), 0.00105)),
    (e.renderer.shadowMap.type = 1));
}
var se = new d(),
  Q = new d(),
  ce = new T(),
  le = new m(),
  ue = new s(),
  de = new s(),
  fe = new d(),
  pe = new x(),
  $ = new s(0, 1, 0);
