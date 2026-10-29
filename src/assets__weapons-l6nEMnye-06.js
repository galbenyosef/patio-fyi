// assets__weapons-l6nEMnye 06 — math
// Lines 1075-1331 of readable/assets__weapons-l6nEMnye.pretty.js (statement-aligned).
function Mt(e, { inventory: n = () => null } = {}) {
  let a = new Map(),
    o = new Map(),
    s = new Map(),
    c = new r(0.05, 0.03, 0.035),
    l = new r(0.08, 0.045, 0.055),
    d = new i({ color: 7208858, emissive: 4063086, emissiveIntensity: 1 }),
    f = new i({ color: 16761418, emissive: 14719512, emissiveIntensity: 1 }),
    m = (t) => {
      let n = t === 213 ? `medkit` : `ammo`;
      if (!o.has(n)) {
        let t = pe(n);
        (o.set(n, t),
          s.set(
            n,
            At(e.scene, t.parts, {
              name: `placed-` + n,
              castShadow: (e) => e.material.name === `poly`,
            }),
          ));
      }
      return o.get(n);
    },
    g = new v(2.8, 2.8);
  g.rotateX(-Math.PI / 2);
  let _ = (e) => {
      let t = document.createElement(`canvas`);
      t.width = t.height = 128;
      let n = t.getContext(`2d`),
        r = n.createRadialGradient(64, 64, 0, 64, 64, 64);
      (e.forEach(([e, t]) => r.addColorStop(e, t)),
        (n.fillStyle = r),
        n.fillRect(0, 0, 128, 128));
      let i = new w(t);
      return ((i.colorSpace = p), i);
    },
    y = _([
      [0, `rgba(255,190,90,1)`],
      [0.18, `rgba(255,170,70,.75)`],
      [0.5, `rgba(255,150,50,.22)`],
      [1, `rgba(255,140,40,0)`],
    ]),
    b = _([
      [0, `rgba(120,255,150,1)`],
      [0.18, `rgba(90,240,130,.75)`],
      [0.5, `rgba(60,220,110,.22)`],
      [1, `rgba(40,200,90,0)`],
    ]),
    x = {
      transparent: !0,
      opacity: 0.55,
      blending: 2,
      depthWrite: !1,
      polygonOffset: !0,
      polygonOffsetFactor: -2,
      polygonOffsetUnits: -2,
    },
    S = new u({ map: y, ...x }),
    C = new u({ map: b, ...x }),
    T = new v(4.2, 4.2);
  T.rotateX(-Math.PI / 2);
  let E = document.createElement(`div`);
  ((E.id = `ammo-box-hint`),
    (E.hidden = !0),
    (E.style.cssText = `position:absolute;left:50%;bottom:150px;transform:translateX(-50%);padding:6px 14px;background:#14180fd9;border-left:3px solid #ffc24a;color:#ffe2a0;font:600 14px/1.4 system-ui;letter-spacing:.06em;pointer-events:none`),
    e.ui?.append?.(E));
  let D = null,
    O = e.events.on(`gadget:status`, (t) => {
      (D && t.life < D.life) ||
        ((D = t),
        [`sync`, `placed`].includes(t.reason)
          ? t.reason === `placed` &&
            jt[t.gadget] &&
            e.events.emit(`ui:message`, {
              kind: `info`,
              text: jt[t.gadget],
              ttl: 3,
            })
          : e.events.emit(`ui:message`, {
              kind: `warn`,
              text: t.reason,
              ttl: 3,
            }));
    }),
    k = { height: 0.85, time: 0.32, bounce: 0.2, dust: 0.55 },
    A = performance.now() / 1e3,
    j = _([
      [0, `rgba(190,175,150,0)`],
      [0.55, `rgba(190,175,150,.55)`],
      [0.75, `rgba(170,155,130,.3)`],
      [1, `rgba(160,145,120,0)`],
    ]),
    M = new v(1, 1);
  M.rotateX(-Math.PI / 2);
  let N = [],
    ee = (n) => {
      let r = new t(
        M,
        new u({
          map: j,
          transparent: !0,
          depthWrite: !1,
          opacity: 0.8,
          polygonOffset: !0,
          polygonOffsetFactor: -3,
          polygonOffsetUnits: -3,
        }),
      );
      (r.position.set(n[0], n[1] + 0.04, n[2]),
        (r.renderOrder = 3),
        e.scene.add(r),
        N.push({ m: r, t: 0 }));
    },
    P = (e, t) => {
      if (e < k.time) {
        let n = e / k.time;
        return (
          (t.y = k.height * (1 - n * n)),
          (t.squash = 1),
          (t.tilt = (1 - n) * 0.35),
          t
        );
      }
      let n = (e - k.time) / k.bounce;
      return (
        (t.tilt = 0),
        n >= 1
          ? ((t.y = 0), (t.squash = 1), t)
          : ((t.y = 0.06 * Math.sin(n * Math.PI) * (1 - n)),
            (t.squash =
              1 - 0.16 * Math.exp(-n * 5) * Math.cos(n * Math.PI * 2.2)),
            t)
      );
    },
    F = { y: 0, squash: 1, tilt: 0 },
    I = (t, n) => {
      (e.scene.remove(n),
        a.delete(t),
        n.traverse((e) => {
          e.name === `glow` && e.material.dispose();
        }));
    },
    te = (e, n, r, i, a, o) => {
      let s = new t(n, r);
      return (s.position.set(i, a, o), e.add(s), s);
    },
    ne = (e) => {
      let t = new h();
      ((t.name = `placed-kit-markers`), (t.userData.kind = e));
      let n = m(e),
        r = e === 213;
      te(t, r ? l : c, r ? d : f, ...n.lamp);
      let i = te(t, r ? T : g, (r ? C : S).clone(), 0, 0.03, 0);
      return ((i.name = `glow`), (i.renderOrder = 2), t);
    };
  return {
    status: () => D,
    update(t) {
      let r = Math.max(0, Math.min(0.1, t || 0)),
        i = performance.now() / 1e3 - A > 2,
        o = new Set();
      for (let t of e.world.byType(`prop`)) {
        if ((t.weapon !== 213 && t.weapon !== 214) || t.hp <= 0) continue;
        o.add(t.id);
        let n = a.get(t.id);
        (n && n.userData.kind !== t.weapon && (I(t.id, n), (n = null)),
          n ||
            ((n = ne(t.weapon)),
            e.scene.add(n),
            a.set(t.id, n),
            i && (n.userData.fall = 0)),
          n.position.fromArray(t.pos),
          n.rotation.set(0, t.yaw, 0));
        let s = n.userData.fall;
        if (s != null) {
          let e = s;
          ((n.userData.fall = s + r),
            P(n.userData.fall, F),
            (n.position.y += F.y),
            (n.rotation.x = F.tilt * 0.4),
            (n.rotation.z = -F.tilt),
            n.scale.set(
              1 + (1 - F.squash) * 0.5,
              F.squash,
              1 + (1 - F.squash) * 0.5,
            ),
            e < k.time && n.userData.fall >= k.time && ee(t.pos),
            n.userData.fall >= k.time + k.bounce &&
              ((n.userData.fall = null), n.scale.set(1, 1, 1)));
        }
      }
      let c = e.modules?.get?.(`player`)?.getLocalEntity?.(),
        l = !1,
        u = 0.85 + 0.15 * Math.sin((performance.now() / 1e3) * Math.PI * 0.8),
        p = c?.hp > 0 && Ve(n());
      for (let t = N.length - 1; t >= 0; t--) {
        let n = N[t];
        n.t += r;
        let i = n.t / k.dust;
        if (i >= 1) {
          (e.scene.remove(n.m), n.m.material.dispose(), N.splice(t, 1));
          continue;
        }
        (n.m.scale.setScalar(0.5 + 1.9 * (1 - (1 - i) * (1 - i))),
          (n.m.material.opacity = 0.8 * (1 - i)));
      }
      for (let [t, n] of a) {
        let r = n.getObjectByName(`glow`),
          i =
            n.userData.fall == null
              ? 1
              : Math.max(0, (n.userData.fall - k.time) / k.bounce);
        if (n.userData.kind !== 214) {
          r.material.opacity = 0.5 * u * i;
          continue;
        }
        let a = p && !l && Be(e.world, e.world.get(t), c);
        ((l ||= a), (r.material.opacity = (a ? 0.65 : 0.42) * u * i));
      }
      if (
        (E.hidden !== !l && (E.hidden = !l),
        l &&
          E.textContent !== `RESUPPLYING` &&
          ((E.textContent = `RESUPPLYING`),
          (E.style.borderLeftColor = `#7dff9a`)),
        a.size)
      ) {
        let e =
          0.6 +
          0.6 * Math.abs(Math.sin((performance.now() / 1e3) * Math.PI * 2));
        d.emissiveIntensity = f.emissiveIntensity = e;
      }
      for (let [e, t] of a) o.has(e) || I(e, t);
      for (let [e, t] of s)
        t.sync(
          [...a.values()].filter(
            (t) => (t.userData.kind === 213 ? `medkit` : `ammo`) === e,
          ),
        );
    },
    dispose() {
      (O(), E.remove());
      for (let [e, t] of a) I(e, t);
      for (let t of N) (e.scene.remove(t.m), t.m.material.dispose());
      N.length = 0;
      for (let e of [M, j, g, y, S, T, b, C, c, l, d, f]) e.dispose();
      for (let e of s.values()) e.dispose();
      s.clear();
      for (let e of o.values())
        (e.parts.forEach((e) => e.geometry.dispose()),
          e.materials.forEach((e) => e.dispose()));
      o.clear();
    },
  };
}
var Nt = `BEACON PLANTED · READY IN ${Ye.armTicks / 60} S · ENEMIES NEARBY BLOCK SPAWNS`,
  Pt = `BEACON MOVED · READY IN ${Ye.armTicks / 60} S · YOUR OLD ONE IS GONE`;
