// assets__weapons-l6nEMnye 07 — pos
// Lines 1332-1483 of readable/assets__weapons-l6nEMnye.pretty.js (statement-aligned).
function Ft(r) {
  let a = new Map(),
    o = new Set(),
    s = null,
    c = null,
    l = -1,
    d = 0,
    f = new n(0.016, 10, 8),
    m = new i({ color: 5904912, roughness: 0.3 }),
    g = new u({ color: 16734778 }),
    v = document.createElement(`canvas`);
  v.width = v.height = 64;
  {
    let e = v.getContext(`2d`),
      t = e.createRadialGradient(32, 32, 0, 32, 32, 32);
    (t.addColorStop(0, `rgba(255,190,160,1)`),
      t.addColorStop(0.25, `rgba(255,90,50,.7)`),
      t.addColorStop(1, `rgba(255,60,30,0)`),
      (e.fillStyle = t),
      e.fillRect(0, 0, 64, 64));
  }
  let y = new w(v);
  y.colorSpace = p;
  let b = new e({ map: y, transparent: !0, blending: 2, depthWrite: !1 }),
    x = () => r.modules?.get?.(`audio`),
    S = () => r.modules?.get?.(`effects`),
    C = () => {
      s ||
        ((s = pe(`beacon`)),
        (c = At(r.scene, s.parts, {
          name: `placed-beacon`,
          castShadow: !0,
          receiveShadow: !0,
        })));
      let e = new h();
      e.name = `placed-beacon-markers`;
      let n = new t(f, m);
      (n.position.fromArray(s.lamp), (n.name = `lamp`), e.add(n));
      let i = new _(b.clone());
      return (
        i.position.fromArray(s.lamp),
        i.scale.setScalar(0.2),
        (i.name = `glow`),
        e.add(i),
        e
      );
    },
    T = (e, t) => {
      (r.scene.remove(t),
        t.getObjectByName(`glow`)?.material.dispose(),
        a.delete(e));
    },
    E = [
      r.events.on(`player:local`, (e) => {
        e?.playerId != null && (l = e.playerId);
      }),
      r.events.on(`net:connected`, (e) => {
        e?.playerId != null && (l = e.playerId);
      }),
      r.events.on(`beacon:status`, (e) => {
        e?.reason === `planted`
          ? r.events.emit(`ui:message`, {
              kind: `info`,
              text: e.moved ? Pt : Nt,
              ttl: 3.5,
            })
          : e?.reason === `destroyed`
            ? r.events.emit(`ui:message`, {
                kind: `warn`,
                text: `BEACON DESTROYED`,
                ttl: 4,
              })
            : e?.reason &&
              r.events.emit(`ui:message`, {
                kind: `warn`,
                text: e.reason,
                ttl: 3,
              });
      }),
      r.events.on(`beacon:planted`, (e) => {
        e?.pos && x()?.play?.(`beacon_plant`, { pos: e.pos });
      }),
      r.events.on(`beacon:destroyed`, (e) => {
        e?.pos &&
          (S()?.spawn?.(`scrape`, e.pos, [0, 1, 0], { scale: 1.5 }),
          S()?.spawn?.(`smoke`, e.pos, [0, 1, 0], { count: 4, scale: 0.7 }),
          x()?.play?.(`beacon_destroyed`, { pos: e.pos }));
      }),
    ];
  return {
    mine: () => (l >= 0 ? Je(r.world, l) : null),
    update() {
      Ke(r.world, o);
      let e = performance.now() / 1e3,
        t = new Set();
      for (let n of r.world.entities.values()) {
        if (!qe(n)) continue;
        t.add(n.id);
        let i = a.get(n.id);
        (i ||
          ((i = C()),
          r.scene.add(i),
          a.set(n.id, i),
          (i.userData.phase = (n.id * 0.37) % 1)),
          i.position.fromArray(n.pos),
          i.rotation.set(0, n.yaw ?? 0, 0));
        let o = n.maxHp > 0 && n.hp < n.maxHp * 0.5,
          s = (e + i.userData.phase) % 1 < 0.12;
        o && (s = s ? Math.random() > 0.35 : Math.random() < 0.04);
        let c = i.getObjectByName(`lamp`),
          l = i.getObjectByName(`glow`);
        ((c.material = s ? g : m),
          (l.visible = s),
          (l.material.opacity = o ? 0.6 : 0.9),
          o &&
            e > d &&
            Math.random() < 0.01 &&
            ((d = e + 1.5),
            S()?.spawn?.(
              `impact`,
              [n.pos[0], n.pos[1] + 0.3, n.pos[2]],
              [0, 1, 0],
              { surface: `metal` },
            )));
      }
      for (let [e, n] of a) t.has(e) || T(e, n);
      c?.sync([...a.values()]);
    },
    dispose() {
      E.forEach((e) => e?.());
      for (let [e, t] of a) T(e, t);
      Ge(r.world, o);
      for (let e of [f, m, g, y, b]) e.dispose();
      (c?.dispose(),
        (c = null),
        (s &&=
          (s.parts.forEach((e) => e.geometry.dispose()),
          s.materials.forEach((e) => e.dispose()),
          null)));
    },
  };
}
var It = `.sl-drop{position:absolute;left:50%;top:70%;transform:translateX(-50%);display:flex;align-items:center;gap:var(--g12);
 padding:var(--g8) var(--g14) var(--g8) var(--g8);background:var(--smoke2);border-left:var(--s3) solid var(--ink);z-index:5;
 opacity:0;transition:opacity .12s;pointer-events:none;max-width:calc(100% - 2 * var(--safe))}
.sl-drop.on{opacity:1}
.sl-drop canvas{width:calc(118px * var(--ui));height:calc(46px * var(--ui));flex:none;display:block}
.sl-drop .tx{display:flex;flex-direction:column;gap:var(--g5);min-width:0}
.sl-drop b{font-size:var(--fs-body);font-weight:700;letter-spacing:.06em;color:var(--ink);white-space:nowrap}
.sl-drop .k{font-size:var(--fs-micro);font-weight:700;letter-spacing:var(--tr-caps);text-transform:uppercase;color:var(--ink2);white-space:nowrap}
.sl-drop .k i{font-style:normal;display:inline-block;padding:1px 5px;margin-right:6px;border:1px solid var(--ink2);color:var(--ink)}
.sl-drop .r{font-size:var(--fs-micro);letter-spacing:.08em;text-transform:uppercase;color:var(--ink3);white-space:nowrap}`;
