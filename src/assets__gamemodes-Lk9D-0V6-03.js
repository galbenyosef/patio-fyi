// assets__gamemodes-Lk9D-0V6 03 — math
// Lines 631-735 of readable/assets__gamemodes-Lk9D-0V6.pretty.js (statement-aligned).
function U(e, t) {
  let n = t.showcase,
    r = J,
    i = Y,
    a = X,
    o = Z,
    s = Q,
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
      i.setFromEuler(ee.set(0, u.yaw, 0)),
      o.set(1, 1, 1),
      r.compose(a, i, o));
    for (let e of n.soldiers.meshes) e.setMatrixAt(c, r);
    (n.soldiers.body.setColorAt(
      c,
      s.set(T[u.team]).multiplyScalar(0.9 + (l % 3) * 0.06),
    ),
      c++);
  }
  for (let e of n.soldiers.meshes)
    ((e.count = c), (e.instanceMatrix.needsUpdate = !0));
  n.soldiers.body.instanceColor.needsUpdate = !0;
}
function W(e, t) {
  let r = new n(1.5, 0.65, 0.75),
    a = new l({ color: 9273436, roughness: 1, flatShading: !0 }),
    o = new h(r, a, 42);
  o.castShadow = o.receiveShadow = !0;
  let s = new i(),
    c = new d(),
    u = new b(),
    f = new b(1, 1, 1),
    p = 0;
  for (let e = -1; e <= 1; e++)
    for (let n = 0; n < 14; n++) {
      let r = (n / 14) * Math.PI * 2 + e * 0.7 + t * 0.01,
        i = 17 + (n % 2) * 2;
      (u.set(
        e * 160 + Math.cos(r) * i,
        0.34 + (n % 3 == 0 ? 0.34 : 0),
        Math.sin(r) * i,
      ),
        c.setFromAxisAngle($, -r),
        s.compose(u, c, f),
        o.setMatrixAt(p++, s));
    }
  e.scene.add(o);
  let m = new h(
    new n(1.5, 1.2, 1.5),
    new l({ color: 7298109, roughness: 0.95, flatShading: !0 }),
    18,
  );
  for (let e = 0; e < 18; e++) {
    let t = (e % 3) - 1,
      n = e % 2 ? 1 : -1;
    (u.set(t * 160 + n * (23 + (e % 4) * 2), 0.6, ((e % 6) - 2.5) * 4.1),
      c.setFromAxisAngle($, e * 0.71),
      s.compose(u, c, f),
      m.setMatrixAt(e, s));
  }
  return ((m.castShadow = m.receiveShadow = !0), e.scene.add(m), [o, m]);
}
function G(e, t) {
  let n = ((t % 24) + 24) % 24,
    r = D(Math.sin(((n - 6) / 12) * Math.PI) * 0.8 + 0.25),
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
    (e.scene.background = new c(2439776).lerp(new c(8890309), r)),
    (e.scene.fog = new v(new c(4215924).lerp(new c(11124167), r), 0.00105)),
    (e.renderer.shadowMap.type = 1));
}
var K = new c(),
  q = new c(),
  J = new i(),
  Y = new d(),
  X = new b(),
  Z = new b(),
  Q = new c(),
  ee = new p(),
  $ = new b(0, 1, 0);
