// assets__weapons-l6nEMnye 04 — pos
// Lines 630-896 of readable/assets__weapons-l6nEMnye.pretty.js (statement-aligned).
function Tt(e) {
  let a = new Map(),
    o = wt(e.scene),
    c = (() => {
      let e = new y(0.042, 0.042, 0.36, 12);
      e.rotateX(Math.PI / 2);
      let t = new s(0.042, 0.18, 12);
      (t.rotateX(-Math.PI / 2), t.translate(0, 0, -0.27));
      let n = [
          e,
          t,
          ...[0, 1, 2, 3].map((e) => {
            let t = new r(0.006, 0.055, 0.08);
            return (
              t.translate(0, 0.062, 0.15),
              t.rotateZ((e * Math.PI) / 2 + Math.PI / 4),
              t
            );
          }),
        ].map((e) => {
          let t = e.index ? e.toNonIndexed() : e;
          return (t !== e && e.dispose(), t.deleteAttribute(`uv`), t);
        }),
        i = S(n);
      return (n.forEach((e) => e.dispose()), i);
    })(),
    l = new i({ color: 6054214, roughness: 0.55, metalness: 0.2 }),
    d = new s(0.07, 0.7, 8, 1, !0);
  (d.rotateX(Math.PI / 2), d.translate(0, 0, 0.35));
  let f = new u({
      color: 16752704,
      transparent: !0,
      opacity: 0.65,
      blending: 2,
      depthWrite: !1,
      side: 2,
      toneMapped: !1,
    }),
    p = new n(0.06, 8, 6),
    m = new u({ color: 16773570, toneMapped: !1 }),
    h = 0,
    g = () => e.modules.get(`player`)?.getLocalEntity?.()?.id,
    _ = (t) => {
      let n = e.modules.get(`player`)?.getLocalEntity?.();
      if (!n || !t?.pos || t.kind !== `rocket`) return;
      let r = Math.hypot(
        n.pos[0] - t.pos[0],
        n.pos[1] - t.pos[1],
        n.pos[2] - t.pos[2],
      );
      r < 30 &&
        (h = Math.max(h, Math.min(1.2, (t.scale ?? 1) * 0.9 * (1 - r / 30))));
    },
    v = new n(0.22, 6, 5),
    b = new u({ color: 16773560, toneMapped: !1 }),
    x = [],
    C = [
      e.events.on(`explosion`, _),
      e.events.on(`javelin:flares`, (n) => {
        if (Array.isArray(n?.pos)) {
          e.modules
            .get(`audio`)
            ?.play(`rocket_launch`, { pos: n.pos, volume: 0.45, pitch: 2.1 });
          for (let r = 0; r < 8; r++) {
            let i = (r - 3.5) * 0.42,
              a = [Math.cos(i) * 9, -4 - (r % 3) * 2, Math.sin(i) * 9],
              o = new t(v, b);
            (o.position.fromArray(n.pos),
              e.scene.add(o),
              x.push({
                mesh: o,
                vel: [
                  (n.vel?.[0] ?? 0) * 0.4 + a[0],
                  a[1],
                  (n.vel?.[2] ?? 0) * 0.4 + a[2],
                ],
                life: 2.6,
                smoke: 0,
              }));
          }
        }
      }),
      e.events.on(`rocket:launch`, (t) => {
        (t.entityId != null &&
          t.entityId === g() &&
          (h = Math.max(h, t.weaponId === 10 ? 0.45 : 0.6)),
          t.weaponId === 10 &&
            e.modules
              .get(`audio`)
              ?.play(`tank_cannon`, { pos: t.pos, volume: 0.5, pitch: 1.7 }),
          e.modules
            .get(`audio`)
            ?.play(t.weaponId === 8 ? `kite_launch` : `rocket_launch`, {
              pos: t.pos,
              volume: t.weaponId === 10 ? 0.5 : 0.85,
              pitch: t.weaponId === 9 ? 0.78 : t.weaponId === 10 ? 1.5 : 1,
            }));
      }),
      e.events.on(`rocket:dud`, (t) => {
        let n = e.modules.get(`player`)?.getLocalEntity?.();
        n &&
          Math.hypot(...n.pos.map((e, n) => e - t.pos[n])) < 10 &&
          e.events.emit(`ui:message`, {
            kind: `warning`,
            text: `ROCKET UNARMED · ${t.armingDistance ?? 5} M MINIMUM`,
            ttl: 2,
          });
      }),
    ];
  return {
    update(n = 1 / 60) {
      (o.tick(n),
        h > 0.01
          ? (e.modules.get(`player`)?.shakeView?.(h),
            (h = Math.max(0, h - n * 2.4)))
          : (h = 0));
      for (let t = x.length - 1; t >= 0; t--) {
        let r = x[t];
        ((r.life -= n), (r.vel[1] -= 7 * n));
        for (let e = 0; e < 3; e++) r.vel[e] *= 1 - 1.2 * n;
        ((r.mesh.position.x += r.vel[0] * n),
          (r.mesh.position.y += r.vel[1] * n),
          (r.mesh.position.z += r.vel[2] * n),
          r.mesh.scale.setScalar(
            Math.max(0.05, Math.min(1, r.life)) *
              (1 + 0.35 * Math.sin(r.life * 40)),
          ),
          (r.smoke -= n) <= 0 &&
            ((r.smoke = 0.07),
            e.modules
              .get(`effects`)
              ?.spawn?.(`smoke`, r.mesh.position.toArray(), [0, 1, 0], {
                count: 1,
                scale: 0.7,
              })),
          r.life <= 0 && (e.scene.remove(r.mesh), x.splice(t, 1)));
      }
      let r = new Set();
      for (let n of e.world.sorted()) {
        if (n.type !== `projectile` || ![8, 9, 10].includes(n.weapon)) continue;
        r.add(n.id);
        let i = a.get(n.id);
        if (!i) {
          i = new t(c, l);
          let r = new t(d, f);
          ((r.position.z = 0.18),
            r.add(new t(p, m)),
            i.add(r),
            e.scene.add(i),
            a.set(n.id, i));
        }
        if (
          (i.position.fromArray(n.pos),
          i.scale.setScalar(n.weapon === 9 ? 1.35 : n.weapon === 10 ? 1.25 : 1),
          n.weapon === 10)
        ) {
          let t = Math.hypot(n.vel[0], n.vel[1], n.vel[2]) > 30,
            r = i.children[0];
          ((r.visible = t),
            o.follow(i.userData.ignitionLight, n.pos, n.vel, n.id),
            t &&
              r.scale.set(
                1.5,
                1.5,
                2.2 + 0.5 * Math.sin((e.world.time?.tick ?? 0) * 0.9),
              ),
            t &&
              !i.userData.lit &&
              ((i.userData.lit = !0),
              (i.userData.ignitionLight = o.ignite(n.pos, n.vel, n.id)),
              e.modules
                .get(`audio`)
                ?.play(`rocket_launch`, { pos: n.pos, volume: 1, pitch: 0.9 }),
              e.modules
                .get(`effects`)
                ?.spawn?.(`smoke`, [n.pos[0], n.pos[1], n.pos[2]], [0, 1, 0], {
                  count: 12,
                  scale: 2.2,
                })));
        }
        if (
          (i.lookAt(
            n.pos[0] - n.vel[0],
            n.pos[1] - n.vel[1],
            n.pos[2] - n.vel[2],
          ),
          n.weapon !== 10)
        ) {
          let t = e.world.time?.tick ?? 0,
            r = 1 + 0.25 * Math.sin(t * 1.9 + n.id) + 0.15 * Math.sin(t * 3.7);
          i.children[0].scale.set(0.9, 0.9, r * (n.weapon === 9 ? 0.95 : 0.75));
        }
        let s = e.world.time?.tick ?? 0,
          u = n.weapon === 10;
        i.userData.lt !== s &&
          (!u || i.userData.lit) &&
          ((i.userData.lt = s),
          e.modules
            .get(`effects`)
            ?.spawn?.(`smoke`, [n.pos[0], n.pos[1], n.pos[2]], [0, 1, 0], {
              count: u ? 2 : 1,
              scale: u ? 1.25 : 0.8,
            }));
      }
      for (let [t, n] of a)
        r.has(t) ||
          (o.release(n.userData.ignitionLight, t),
          e.scene.remove(n),
          a.delete(t));
    },
    dispose() {
      C.forEach((e) => e());
      for (let [t, n] of a)
        (o.release(n.userData.ignitionLight, t), e.scene.remove(n));
      for (let t of x) e.scene.remove(t.mesh);
      ((x.length = 0),
        v.dispose(),
        b.dispose(),
        a.clear(),
        o.dispose(),
        c.dispose(),
        l.dispose(),
        d.dispose(),
        f.dispose(),
        p.dispose(),
        m.dispose());
    },
  };
}
function Et(e, t, n) {
  let r = A(t, [0, 0, 0]),
    i = d(t.yaw, t.pitch),
    a = e.map.raycast(r, i, n.range)?.dist ?? null,
    o = ze(n.id).armingDistance;
  return {
    active: !0,
    distance: a,
    armingDistance: o,
    tooClose: a != null && a < o + 0.6,
  };
}
function Dt(e = document.body) {
  let t = e.appendChild(document.createElement(`div`));
  t.style.cssText = `position:fixed;left:50%;bottom:22%;transform:translateX(-50%);display:none;pointer-events:none;z-index:40;font:600 11px/1 system-ui,sans-serif;letter-spacing:.14em;color:rgba(232,224,204,.88);text-shadow:0 1px 2px #000`;
  let n = ``;
  return {
    update(e, r) {
      let i = e
        ? r.state === `bipod`
          ? `BIPOD READY`
          : r.state === `settling`
            ? `SETTING BIPOD`
            : r.state === `braced`
              ? `BRACED`
              : ``
        : ``;
      i !== n &&
        ((n = i),
        (t.textContent = i),
        (t.style.display = i ? `block` : `none`));
    },
    dispose() {
      t.remove();
    },
  };
}
var Ot = `salient.loadout.v1`;
