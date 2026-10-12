// assets__weapons-D4QomYwC 08 — pos
// Lines 1784-2070 of readable/assets__weapons-D4QomYwC.pretty.js (statement-aligned).
function Pt(e) {
  let t = document.createElement(`div`);
  ((t.style.cssText = `position:absolute;inset:0;pointer-events:none;z-index:3;overflow:hidden`),
    (e.renderer?.domElement?.parentElement ?? document.body).appendChild(t));
  let n = new Map(),
    r = new Map(),
    i = new T(),
    o = document.createElement(`div`);
  ((o.style.cssText = `position:absolute;left:50%;bottom:22%;transform:translateX(-50%);padding:3px 10px 3px 7px;border-radius:12px;background:rgba(18,40,26,.62);box-shadow:0 0 0 1px rgba(120,230,150,.55);font:800 12px system-ui;letter-spacing:.16em;color:#bff5cf;text-shadow:0 1px 2px #000;opacity:0;transition:opacity .25s;white-space:nowrap`),
    (o.textContent = `✚ HEALING`),
    t.appendChild(o));
  let s = 0,
    c = !1,
    l = kt(e),
    u = () => e.modules.get(`player`)?.getLocalEntity?.(),
    d = (t) =>
      (e.modules.get(`weapons`)?.equippedClass?.(t) ??
        t?.ext?.loadout?.classId) === `medic`,
    f = (e) => e && e.hp > 0 && !(e.state & a.DEAD),
    p = [
      e.events.on(`player:death`, (e) => {
        e?.victimId != null && r.set(e.victimId, performance.now() / 1e3);
      }),
      e.events.on(`medic:call`, (e) => {
        Number.isInteger(e?.entityId) &&
          (m.set(
            e.entityId,
            performance.now() / 1e3 + (+e.durationTicks || 480) / 60,
          ),
          e.entityId === u()?.id &&
            ((_.style.opacity = `1`), (h = performance.now() / 1e3 + 1.6)));
      }),
      e.events.on(`player:death`, (e) => {
        e?.victimId != null && m.delete(e.victimId);
      }),
    ],
    m = new Map(),
    h = 0,
    g = 0,
    _ = document.createElement(`div`);
  ((_.style.cssText = o.style.cssText.replace(`bottom:22%`, `bottom:26%`)),
    (_.style.opacity = `0`),
    (_.textContent = `✚ MEDIC REQUESTED`),
    t.appendChild(_));
  let v = (t) => {
    if (
      t.code !== `KeyJ` ||
      t.repeat ||
      t.ctrlKey ||
      t.altKey ||
      t.metaKey ||
      t.target?.closest?.(`input,textarea,select,[contenteditable="true"]`) ||
      !e.modules.get(`player`)?.isInputActive?.()
    )
      return;
    let n = u();
    if (!f(n) || e.world.match?.mode === `ffa`) return;
    t.preventDefault();
    let r = performance.now() / 1e3;
    r < g || ((g = r + 1), e.modules.get(`netcode`)?.sendRpc?.(`medic`, {}));
  };
  window.addEventListener(`keydown`, v);
  let y = (e) => {
    let r = n.get(e);
    if (r) return r;
    ((r = document.createElement(`div`)),
      (r.style.cssText = `position:absolute;transform:translate(-50%,-100%);display:flex;flex-direction:column;align-items:center;gap:2px;font:700 11px system-ui;color:#fff;text-shadow:0 1px 2px #000;white-space:nowrap`));
    let i = document.createElement(`div`);
    ((i.style.cssText = `width:22px;height:22px;border-radius:50%;background:#f4f6f5;box-shadow:0 0 0 2px rgba(0,0,0,.45);display:grid;place-items:center;color:#d8232f;font:900 17px/1 system-ui`),
      (i.textContent = `✚`));
    let a = document.createElement(`div`);
    return (
      r.append(i, a),
      (r.label = a),
      (r.icon = i),
      t.appendChild(r),
      n.set(e, r),
      r
    );
  };
  return {
    update(p) {
      l.update(p);
      let g = u();
      (s -= Math.max(0, p || 0)) <= 0 &&
        ((s = Nt),
        (c =
          f(g) &&
          g.hp < g.maxHp &&
          !(g.state & a.IN_VEHICLE) &&
          e.world
            .byType(`prop`)
            .some(
              (e) =>
                e.weapon === 213 &&
                e.hp > 0 &&
                Math.hypot(e.pos[0] - g.pos[0], e.pos[2] - g.pos[2]) <=
                  I.medkitRadius &&
                Math.abs(e.pos[1] - g.pos[1]) <= I.medkitHeight,
            )),
        (o.style.opacity = c ? `1` : `0`));
      let v = performance.now() / 1e3,
        b = new Set(),
        x,
        S;
      for (let [e, t] of r) v - t > At && r.delete(e);
      let C = e.modules.get(`weapons`)?.getSelected?.()?.class === `defib`;
      if (f(g) && d(g) && !(g.state & a.IN_VEHICLE))
        for (let [n, o] of r) {
          let r = e.world.get(n);
          if (
            !r ||
            r.type !== `soldier` ||
            !(r.state & a.DEAD) ||
            r.team !== g.team
          )
            continue;
          let s = Math.hypot(
            r.pos[0] - g.pos[0],
            r.pos[1] - g.pos[1],
            r.pos[2] - g.pos[2],
          );
          if (
            s > jt ||
            (i.set(r.pos[0], r.pos[1] + 0.7, r.pos[2]).project(e.camera),
            i.z > 1 || Math.abs(i.x) > 1.1 || Math.abs(i.y) > 1.1) ||
            (x === void 0 && ((x = t.clientWidth), (S = t.clientHeight)),
            x <= 0)
          )
            continue;
          let c = y(n);
          (b.add(n),
            (c.style.left = `${((i.x + 1) / 2) * x}px`),
            (c.style.top = `${((1 - i.y) / 2) * S}px`));
          let l = Math.max(0, Math.ceil(At - (v - o))),
            u = s <= I.padsReach,
            d = u
              ? `${C ? `CLICK` : `PRESS 2`} · ${l}s`
              : `${Math.round(s)} m · ${l}s`;
          (c.label.textContent !== d && (c.label.textContent = d),
            (c.icon.style.boxShadow = u
              ? `0 0 0 2px #7fe0a0,0 0 10px 2px rgba(127,224,160,.8)`
              : `0 0 0 2px rgba(0,0,0,.45)`),
            (c.style.opacity = l <= 3 ? `.6` : `1`));
        }
      v >= h && (_.style.opacity = `0`);
      for (let [e, t] of m) v >= t && m.delete(e);
      if (f(g) && d(g))
        for (let [n, r] of m) {
          let a = e.world.get(n);
          if (n === g.id || !f(a) || a.team !== g.team) continue;
          let o = Math.hypot(
            a.pos[0] - g.pos[0],
            a.pos[1] - g.pos[1],
            a.pos[2] - g.pos[2],
          );
          if (
            o > Mt ||
            (i
              .set(a.pos[0], a.pos[1] + 2.05 * ne(), a.pos[2])
              .project(e.camera),
            i.z > 1 || Math.abs(i.x) > 1.1 || Math.abs(i.y) > 1.1) ||
            (x === void 0 && ((x = t.clientWidth), (S = t.clientHeight)),
            x <= 0)
          )
            continue;
          let s = `call:` + n,
            c = y(s);
          (b.add(s),
            (c.style.left = `${((i.x + 1) / 2) * x}px`),
            (c.style.top = `${((1 - i.y) / 2) * S}px`));
          let l = `MEDIC · ${Math.round(o)} m`;
          (c.label.textContent !== l && (c.label.textContent = l),
            (c.icon.style.boxShadow = `0 0 0 2px rgba(216,35,47,.85)`),
            (c.style.opacity = String(
              r - v < 1.5 ? (r - v) / 1.5 : 0.75 + 0.25 * Math.sin(v * 8),
            )));
        }
      for (let [e, t] of n) b.has(e) || (t.remove(), n.delete(e));
    },
    dispose() {
      (window.removeEventListener(`keydown`, v),
        m.clear(),
        l.dispose(),
        p.forEach((e) => e?.()),
        t.remove(),
        n.clear(),
        r.clear());
    },
  };
}
var W = Object.freeze({ drop: 0.95, pads: 1.2, discharge: 0.5, flash: 0.16 }),
  G = (e) => (e <= 0 ? 0 : e >= 1 ? 1 : e * e * (3 - 2 * e)),
  Ft = { revive: 10479615, kill: 16761707 };
function It(e) {
  let t = 0,
    n = 0,
    r = `revive`,
    i = null,
    a = 0,
    o = new _(),
    s = new c(),
    l = new T(),
    u = new T(0, 1, 0),
    d = () => e.modules.get(`player`)?.getLocalEntity?.(),
    f = [
      e.events.on(`gadget:status`, (e) => {
        e?.reason === `placed` && (t = W.drop);
      }),
      e.events.on(`beacon:status`, (e) => {
        e?.reason === `planted` && (t = W.drop);
      }),
      e.events.on(`medic:pads`, (e) => {
        e?.entityId != null &&
          e.entityId === d()?.id &&
          e.pos &&
          ((n = W.pads),
          (r = e.kind === `kill` ? `kill` : `revive`),
          (i = e.pos.slice()),
          (a = Math.random() * 6),
          (t = 0));
      }),
      e.events.on(`player:death`, (e) => {
        e?.victimId === d()?.id && (t = n = 0);
      }),
    ];
  return {
    active: () => t > 0 || n > 0,
    padsActive: () => n > 0,
    update(c, d, f, p) {
      let m = Math.max(0, c || 0);
      ((t = Math.max(0, t - m)), (n = Math.max(0, n - m)));
      let h = e.camera;
      if (!d || !h || (!t && !n)) {
        (f?.setAction(null), f?.setGlow(0, 0));
        return;
      }
      if (n > 0) {
        let e = W.pads - n,
          t = W.discharge,
          c = e - t,
          d = G(e / 0.2) * (1 - G((e - 0.85) / 0.35)),
          m = G((e - 0.16) / 0.26) * (1 - G((e - 0.66) / 0.3)),
          g = c >= 0 ? Math.exp(-c * 13) : 0;
        p === `defib`
          ? f?.setAction({
              x: 0,
              y: 0.03 * d - 0.15 * m + 0.045 * g,
              z: -0.05 * d - 0.12 * m,
              pitch: -0.2 * d - 0.55 * m + 0.2 * g,
              roll: 0,
            })
          : f?.setAction(null);
        let _ = c >= 0 && c < W.flash;
        f?.setGlow(Ft[r], _ ? 3 : c < 0 ? 0.15 + 0.9 * G(e / t) : 0);
        let v = 0.6 * G(e / 0.3) * (1 - G((e - 0.78) / 0.4));
        ((h.position.y -= ((r === `revive` ? 0.38 : 0.08) * v) / 0.6),
          l.set(i[0], i[1] + (r === `revive` ? 0.3 : 1.15), i[2]),
          s.lookAt(h.position, l, u),
          o.setFromRotationMatrix(s),
          h.quaternion.slerp(o, v),
          g > 0.02 &&
            (h.rotateX(0.03 * g), h.rotateZ(0.025 * g * Math.sin(a + c * 70))));
      } else {
        f?.setGlow(0, 0);
        let e = W.drop - t,
          n = G(e / 0.34) * (1 - G((e - 0.52) / 0.42)),
          r = e > 0.34 && e < 0.54 ? Math.sin(((e - 0.34) / 0.2) * Math.PI) : 0;
        (p === `tool`
          ? f?.setAction({
              x: -0.03 * n,
              y: -0.1 * n + 0.015 * r,
              z: -0.2 * n,
              pitch: -0.3 * n,
              roll: 0.08 * n,
            })
          : f?.setAction(null),
          (h.position.y -= 0.3 * n),
          h.rotateX(-0.55 * n - 0.015 * r));
      }
      h.updateMatrixWorld();
    },
    dispose() {
      f.forEach((e) => e?.());
    },
  };
}
