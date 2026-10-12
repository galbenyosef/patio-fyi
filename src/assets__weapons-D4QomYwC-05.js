// assets__weapons-D4QomYwC 05 — pos
// Lines 1227-1378 of readable/assets__weapons-D4QomYwC.pretty.js (statement-aligned).
function wt(e) {
  let r = new Map(),
    i = new Set(),
    a = null,
    o = null,
    s = -1,
    c = 0,
    l = new w(0.016, 10, 8),
    u = new m({ color: 5904912, roughness: 0.3 }),
    p = new E({ color: 16734778 }),
    h = document.createElement(`canvas`);
  h.width = h.height = 64;
  {
    let e = h.getContext(`2d`),
      t = e.createRadialGradient(32, 32, 0, 32, 32, 32);
    (t.addColorStop(0, `rgba(255,190,160,1)`),
      t.addColorStop(0.25, `rgba(255,90,50,.7)`),
      t.addColorStop(1, `rgba(255,60,30,0)`),
      (e.fillStyle = t),
      e.fillRect(0, 0, 64, 64));
  }
  let g = new d(h);
  g.colorSpace = x;
  let _ = new t({ map: g, transparent: !0, blending: 2, depthWrite: !1 }),
    v = () => e.modules?.get?.(`audio`),
    y = () => e.modules?.get?.(`effects`),
    S = () => {
      a ||
        ((a = ge(`beacon`)),
        (o = yt(e.scene, a.parts, {
          name: `placed-beacon`,
          castShadow: !0,
          receiveShadow: !0,
        })));
      let t = new b();
      t.name = `placed-beacon-markers`;
      let r = new f(l, u);
      (r.position.fromArray(a.lamp), (r.name = `lamp`), t.add(r));
      let i = new n(_.clone());
      return (
        i.position.fromArray(a.lamp),
        i.scale.setScalar(0.2),
        (i.name = `glow`),
        t.add(i),
        t
      );
    },
    C = (t, n) => {
      (e.scene.remove(n),
        n.getObjectByName(`glow`)?.material.dispose(),
        r.delete(t));
    },
    ee = [
      e.events.on(`player:local`, (e) => {
        e?.playerId != null && (s = e.playerId);
      }),
      e.events.on(`net:connected`, (e) => {
        e?.playerId != null && (s = e.playerId);
      }),
      e.events.on(`beacon:status`, (t) => {
        t?.reason === `planted`
          ? e.events.emit(`ui:message`, {
              kind: `info`,
              text: t.moved ? Ct : St,
              ttl: 3.5,
            })
          : t?.reason === `destroyed`
            ? e.events.emit(`ui:message`, {
                kind: `warn`,
                text: `BEACON DESTROYED`,
                ttl: 4,
              })
            : t?.reason &&
              e.events.emit(`ui:message`, {
                kind: `warn`,
                text: t.reason,
                ttl: 3,
              });
      }),
      e.events.on(`beacon:planted`, (e) => {
        e?.pos && v()?.play?.(`beacon_plant`, { pos: e.pos });
      }),
      e.events.on(`beacon:destroyed`, (e) => {
        e?.pos &&
          (y()?.spawn?.(`scrape`, e.pos, [0, 1, 0], { scale: 1.5 }),
          y()?.spawn?.(`smoke`, e.pos, [0, 1, 0], { count: 4, scale: 0.7 }),
          v()?.play?.(`beacon_destroyed`, { pos: e.pos }));
      }),
    ];
  return {
    mine: () => (s >= 0 ? Le(e.world, s) : null),
    update() {
      Fe(e.world, i);
      let t = performance.now() / 1e3,
        n = new Set();
      for (let i of e.world.entities.values()) {
        if (!Ie(i)) continue;
        n.add(i.id);
        let a = r.get(i.id);
        (a ||
          ((a = S()),
          e.scene.add(a),
          r.set(i.id, a),
          (a.userData.phase = (i.id * 0.37) % 1)),
          a.position.fromArray(i.pos),
          a.rotation.set(0, i.yaw ?? 0, 0));
        let o = i.maxHp > 0 && i.hp < i.maxHp * 0.5,
          s = (t + a.userData.phase) % 1 < 0.12;
        o && (s = s ? Math.random() > 0.35 : Math.random() < 0.04);
        let l = a.getObjectByName(`lamp`),
          d = a.getObjectByName(`glow`);
        ((l.material = s ? p : u),
          (d.visible = s),
          (d.material.opacity = o ? 0.6 : 0.9),
          o &&
            t > c &&
            Math.random() < 0.01 &&
            ((c = t + 1.5),
            y()?.spawn?.(
              `impact`,
              [i.pos[0], i.pos[1] + 0.3, i.pos[2]],
              [0, 1, 0],
              { surface: `metal` },
            )));
      }
      for (let [e, t] of r) n.has(e) || C(e, t);
      o?.sync([...r.values()]);
    },
    dispose() {
      ee.forEach((e) => e?.());
      for (let [e, t] of r) C(e, t);
      Re(e.world, i);
      for (let e of [l, u, p, g, _]) e.dispose();
      (o?.dispose(),
        (o = null),
        (a &&=
          (a.parts.forEach((e) => e.geometry.dispose()),
          a.materials.forEach((e) => e.dispose()),
          null)));
    },
  };
}
var Tt = `.sl-drop{position:absolute;left:50%;top:70%;transform:translateX(-50%);display:flex;align-items:center;gap:var(--g12);
 padding:var(--g8) var(--g14) var(--g8) var(--g8);background:var(--smoke2);border-left:var(--s3) solid var(--ink);z-index:5;
 opacity:0;transition:opacity .12s;pointer-events:none;max-width:calc(100% - 2 * var(--safe))}
.sl-drop.on{opacity:1}
.sl-drop canvas{width:calc(118px * var(--ui));height:calc(46px * var(--ui));flex:none;display:block}
.sl-drop .tx{display:flex;flex-direction:column;gap:var(--g5);min-width:0}
.sl-drop b{font-size:var(--fs-body);font-weight:700;letter-spacing:.06em;color:var(--ink);white-space:nowrap}
.sl-drop .k{font-size:var(--fs-micro);font-weight:700;letter-spacing:var(--tr-caps);text-transform:uppercase;color:var(--ink2);white-space:nowrap}
.sl-drop .k i{font-style:normal;display:inline-block;padding:1px 5px;margin-right:6px;border:1px solid var(--ink2);color:var(--ink)}
.sl-drop .r{font-size:var(--fs-micro);letter-spacing:.08em;text-transform:uppercase;color:var(--ink3);white-space:nowrap}`;
