// assets__weapons-D4QomYwC 03 — pos
// Lines 593-892 of readable/assets__weapons-D4QomYwC.pretty.js (statement-aligned).
function dt(e) {
  let t = new Map(),
    n = ut(e.scene),
    a = (() => {
      let e = new s(0.042, 0.042, 0.36, 12);
      e.rotateX(Math.PI / 2);
      let t = new i(0.042, 0.18, 12);
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
        a = ee(n);
      return (n.forEach((e) => e.dispose()), a);
    })(),
    o = new m({ color: 6054214, roughness: 0.55, metalness: 0.2 }),
    c = new i(0.07, 0.7, 8, 1, !0);
  (c.rotateX(Math.PI / 2), c.translate(0, 0, 0.35));
  let l = new E({
      color: 16752704,
      transparent: !0,
      opacity: 0.65,
      blending: 2,
      depthWrite: !1,
      side: 2,
      toneMapped: !1,
    }),
    u = new w(0.06, 8, 6),
    d = new E({ color: 16773570, toneMapped: !1 }),
    p = 0,
    h = () => e.modules.get(`player`)?.getLocalEntity?.()?.id,
    g = (t) => {
      let n = e.modules.get(`player`)?.getLocalEntity?.();
      if (!n || !t?.pos || t.kind !== `rocket`) return;
      let r = Math.hypot(
        n.pos[0] - t.pos[0],
        n.pos[1] - t.pos[1],
        n.pos[2] - t.pos[2],
      );
      r < 30 &&
        (p = Math.max(p, Math.min(1.2, (t.scale ?? 1) * 0.9 * (1 - r / 30))));
    },
    _ = new w(0.22, 6, 5),
    v = new E({ color: 16773560, toneMapped: !1 }),
    y = [],
    b = [
      e.events.on(`explosion`, g),
      e.events.on(`javelin:flares`, (t) => {
        if (Array.isArray(t?.pos)) {
          e.modules
            .get(`audio`)
            ?.play(`rocket_launch`, { pos: t.pos, volume: 0.45, pitch: 2.1 });
          for (let n = 0; n < 8; n++) {
            let r = (n - 3.5) * 0.42,
              i = [Math.cos(r) * 9, -4 - (n % 3) * 2, Math.sin(r) * 9],
              a = new f(_, v);
            (a.position.fromArray(t.pos),
              e.scene.add(a),
              y.push({
                mesh: a,
                vel: [
                  (t.vel?.[0] ?? 0) * 0.4 + i[0],
                  i[1],
                  (t.vel?.[2] ?? 0) * 0.4 + i[2],
                ],
                life: 2.6,
                smoke: 0,
              }));
          }
        }
      }),
      e.events.on(`rocket:launch`, (t) => {
        (t.entityId != null &&
          t.entityId === h() &&
          (p = Math.max(p, t.weaponId === 10 ? 0.45 : 0.6)),
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
    update(r = 1 / 60) {
      (n.tick(r),
        p > 0.01
          ? (e.modules.get(`player`)?.shakeView?.(p),
            (p = Math.max(0, p - r * 2.4)))
          : (p = 0));
      for (let t = y.length - 1; t >= 0; t--) {
        let n = y[t];
        ((n.life -= r), (n.vel[1] -= 7 * r));
        for (let e = 0; e < 3; e++) n.vel[e] *= 1 - 1.2 * r;
        ((n.mesh.position.x += n.vel[0] * r),
          (n.mesh.position.y += n.vel[1] * r),
          (n.mesh.position.z += n.vel[2] * r),
          n.mesh.scale.setScalar(
            Math.max(0.05, Math.min(1, n.life)) *
              (1 + 0.35 * Math.sin(n.life * 40)),
          ),
          (n.smoke -= r) <= 0 &&
            ((n.smoke = 0.07),
            e.modules
              .get(`effects`)
              ?.spawn?.(`smoke`, n.mesh.position.toArray(), [0, 1, 0], {
                count: 1,
                scale: 0.7,
              })),
          n.life <= 0 && (e.scene.remove(n.mesh), y.splice(t, 1)));
      }
      let i = new Set();
      for (let r of e.world.sorted()) {
        if (r.type !== `projectile` || ![8, 9, 10].includes(r.weapon)) continue;
        i.add(r.id);
        let s = t.get(r.id);
        if (!s) {
          s = new f(a, o);
          let n = new f(c, l);
          ((n.position.z = 0.18),
            n.add(new f(u, d)),
            s.add(n),
            e.scene.add(s),
            t.set(r.id, s));
        }
        if (
          (s.position.fromArray(r.pos),
          s.scale.setScalar(r.weapon === 9 ? 1.35 : r.weapon === 10 ? 1.25 : 1),
          r.weapon === 10)
        ) {
          let t = Math.hypot(r.vel[0], r.vel[1], r.vel[2]) > 30,
            i = s.children[0];
          ((i.visible = t),
            n.follow(s.userData.ignitionLight, r.pos, r.vel, r.id),
            t &&
              i.scale.set(
                1.5,
                1.5,
                2.2 + 0.5 * Math.sin((e.world.time?.tick ?? 0) * 0.9),
              ),
            t &&
              !s.userData.lit &&
              ((s.userData.lit = !0),
              (s.userData.ignitionLight = n.ignite(r.pos, r.vel, r.id)),
              e.modules
                .get(`audio`)
                ?.play(`rocket_launch`, { pos: r.pos, volume: 1, pitch: 0.9 }),
              e.modules
                .get(`effects`)
                ?.spawn?.(`smoke`, [r.pos[0], r.pos[1], r.pos[2]], [0, 1, 0], {
                  count: 12,
                  scale: 2.2,
                })));
        }
        if (
          (s.lookAt(
            r.pos[0] - r.vel[0],
            r.pos[1] - r.vel[1],
            r.pos[2] - r.vel[2],
          ),
          r.weapon !== 10)
        ) {
          let t = e.world.time?.tick ?? 0,
            n = 1 + 0.25 * Math.sin(t * 1.9 + r.id) + 0.15 * Math.sin(t * 3.7);
          s.children[0].scale.set(0.9, 0.9, n * (r.weapon === 9 ? 0.95 : 0.75));
        }
        let p = e.world.time?.tick ?? 0,
          m = r.weapon === 10;
        s.userData.lt !== p &&
          (!m || s.userData.lit) &&
          ((s.userData.lt = p),
          e.modules
            .get(`effects`)
            ?.spawn?.(`smoke`, [r.pos[0], r.pos[1], r.pos[2]], [0, 1, 0], {
              count: m ? 2 : 1,
              scale: m ? 1.25 : 0.8,
            }));
      }
      for (let [r, a] of t)
        i.has(r) ||
          (n.release(a.userData.ignitionLight, r),
          e.scene.remove(a),
          t.delete(r));
    },
    dispose() {
      b.forEach((e) => e());
      for (let [r, i] of t)
        (n.release(i.userData.ignitionLight, r), e.scene.remove(i));
      for (let t of y) e.scene.remove(t.mesh);
      ((y.length = 0),
        _.dispose(),
        v.dispose(),
        t.clear(),
        n.dispose(),
        a.dispose(),
        o.dispose(),
        c.dispose(),
        l.dispose(),
        u.dispose(),
        d.dispose());
    },
  };
}
function ft(e, t, n) {
  let r = D(t, [0, 0, 0]),
    i = o(t.yaw, t.pitch),
    a = e.map.raycast(r, i, n.range)?.dist ?? null,
    s = Me(n.id).armingDistance;
  return {
    active: !0,
    distance: a,
    armingDistance: s,
    tooClose: a != null && a < s + 0.6,
  };
}
var pt = Object.freeze({ maxFov: 30, kickBraced: 0.7, kickBipod: 0.55 }),
  H = {
    clear: -0.04,
    hits: [-0.12, -0.24, -0.4],
    bipodHits: [-0.12, -0.24, -0.4, -0.6],
    reach: 0.9,
  };
function mt(e, t, n, r = !1) {
  let i = e?.map,
    a = (e, t, n) =>
      i.isOccluded ? i.isOccluded(e, t, n) : !!i.raycast(e, t, n);
  if (!i?.raycast && !i?.isOccluded) return !1;
  let o = [-Math.sin(n), 0, -Math.cos(n)];
  if (a([t[0], t[1] + H.clear, t[2]], o, H.reach)) return !1;
  for (let e of r ? H.bipodHits : H.hits)
    if (a([t[0], t[1] + e, t[2]], o, H.reach)) return !0;
  return !1;
}
function ht() {
  let e = `free`;
  return {
    reset() {
      e = `free`;
    },
    step(t, n, r) {
      let i =
        r.scoped && (r.bipod ? r.braced || r.stance === h.PRONE : r.braced);
      return ((e = r.scoped && i ? (r.bipod ? `bipod` : `braced`) : `free`), t);
    },
    kickScale() {
      return e === `bipod` ? pt.kickBipod : e === `braced` ? pt.kickBraced : 1;
    },
    status: () => ({ state: e }),
  };
}
function gt(e = document.body) {
  let t = e.appendChild(document.createElement(`div`));
  t.style.cssText = `position:fixed;left:50%;bottom:22%;transform:translateX(-50%);display:none;pointer-events:none;z-index:40;font:600 11px/1 system-ui,sans-serif;letter-spacing:.14em;color:rgba(232,224,204,.88);text-shadow:0 1px 2px #000`;
  let n = ``;
  return {
    update(e, r) {
      let i = e
        ? r.state === `bipod`
          ? `BIPOD`
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
var _t = `salient.loadout.v1`;
