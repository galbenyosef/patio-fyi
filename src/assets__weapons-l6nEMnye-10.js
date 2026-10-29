// assets__weapons-l6nEMnye 10 — pos
// Lines 1905-2202 of readable/assets__weapons-l6nEMnye.pretty.js (statement-aligned).
function Gt(e) {
  let t = document.createElement(`div`);
  ((t.style.cssText = `position:absolute;inset:0;pointer-events:none;z-index:3;overflow:hidden`),
    (e.renderer?.domElement?.parentElement ?? document.body).appendChild(t));
  let n = new Map(),
    r = new Map(),
    i = new Set(),
    s = new a(),
    c = document.createElement(`div`);
  ((c.style.cssText = `position:absolute;left:50%;bottom:22%;transform:translateX(-50%);padding:3px 10px 3px 7px;border-radius:12px;background:rgba(18,40,26,.62);box-shadow:0 0 0 1px rgba(120,230,150,.55);font:800 12px system-ui;letter-spacing:.16em;color:#bff5cf;text-shadow:0 1px 2px #000;opacity:0;transition:opacity .25s;white-space:nowrap`),
    (c.textContent = `✚ HEALING`),
    t.appendChild(c));
  let l = rt(t, {
      color: `#9cf7b6`,
      suffix: ` HP`,
      style: `left:calc(50% + 66px);bottom:22%`,
    }),
    u = 0,
    d = !1,
    f = Bt(e),
    p = () => e.modules.get(`player`)?.getLocalEntity?.(),
    m = (t) =>
      (e.modules.get(`weapons`)?.equippedClass?.(t) ??
        t?.ext?.loadout?.classId) === `medic`,
    h = (e) => e && e.hp > 0 && !(e.state & o.DEAD),
    g = [
      e.events.on(`player:death`, (e) => {
        e?.victimId != null &&
          !i.has(e.victimId) &&
          r.set(e.victimId, performance.now() / 1e3);
      }),
      e.events.on(`medic:norevive`, (e) => {
        e?.entityId != null && (i.add(e.entityId), r.delete(e.entityId));
      }),
      e.events.on(`medic:call`, (e) => {
        Number.isInteger(e?.entityId) &&
          (_.set(
            e.entityId,
            performance.now() / 1e3 + (+e.durationTicks || 480) / 60,
          ),
          e.entityId === p()?.id &&
            ((b.style.opacity = `1`), (v = performance.now() / 1e3 + 1.6)));
      }),
      e.events.on(`player:death`, (e) => {
        e?.victimId != null && _.delete(e.victimId);
      }),
      e.events.on(`supply:received`, (e) => {
        e?.kind === `health` && l.pop(+e.amount);
      }),
    ],
    _ = new Map(),
    v = 0,
    y = 0,
    b = document.createElement(`div`);
  ((b.style.cssText = c.style.cssText.replace(`bottom:22%`, `bottom:26%`)),
    (b.style.opacity = `0`),
    (b.textContent = `✚ MEDIC REQUESTED`),
    t.appendChild(b));
  let x = (t) => {
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
    let n = p();
    if (!h(n) || e.world.match?.mode === `ffa`) return;
    t.preventDefault();
    let r = performance.now() / 1e3;
    r < y || ((y = r + 1), e.modules.get(`netcode`)?.sendRpc?.(`medic`, {}));
  };
  window.addEventListener(`keydown`, x);
  let S = (e) => {
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
    update(i) {
      f.update(i);
      let a = p();
      (u -= Math.max(0, i || 0)) <= 0 &&
        ((u = Wt),
        (d =
          h(a) &&
          a.hp < a.maxHp &&
          !(a.state & o.IN_VEHICLE) &&
          e.world
            .byType(`prop`)
            .some(
              (e) =>
                e.weapon === 213 &&
                e.hp > 0 &&
                Math.hypot(e.pos[0] - a.pos[0], e.pos[2] - a.pos[2]) <=
                  be.medkitRadius &&
                Math.abs(e.pos[1] - a.pos[1]) <= be.medkitHeight,
            )),
        (c.style.opacity = d ? `1` : `0`));
      let l = performance.now() / 1e3,
        g = new Set(),
        y,
        x;
      for (let [e, t] of r) l - t > Vt && r.delete(e);
      let C = e.modules.get(`weapons`)?.getSelected?.()?.class === `defib`;
      if (h(a) && m(a) && !(a.state & o.IN_VEHICLE))
        for (let [n, i] of r) {
          let r = e.world.get(n);
          if (
            !r ||
            r.type !== `soldier` ||
            !(r.state & o.DEAD) ||
            r.team !== a.team
          )
            continue;
          let c = Math.hypot(
            r.pos[0] - a.pos[0],
            r.pos[1] - a.pos[1],
            r.pos[2] - a.pos[2],
          );
          if (
            c > Ht ||
            (s.set(r.pos[0], r.pos[1] + 0.7, r.pos[2]).project(e.camera),
            s.z > 1 || Math.abs(s.x) > 1.1 || Math.abs(s.y) > 1.1) ||
            (y === void 0 && ((y = t.clientWidth), (x = t.clientHeight)),
            y <= 0)
          )
            continue;
          let u = S(n);
          (g.add(n),
            (u.style.left = `${((s.x + 1) / 2) * y}px`),
            (u.style.top = `${((1 - s.y) / 2) * x}px`));
          let d = Math.max(0, Math.ceil(Vt - (l - i))),
            f = c <= be.padsReach && ye(e.world, a, r),
            p = f
              ? `${C ? `CLICK` : `PRESS 2`} · ${d}s`
              : `${Math.round(c)} m · ${d}s`;
          (u.label.textContent !== p && (u.label.textContent = p),
            (u.icon.style.boxShadow = f
              ? `0 0 0 2px #7fe0a0,0 0 10px 2px rgba(127,224,160,.8)`
              : `0 0 0 2px rgba(0,0,0,.45)`),
            (u.style.opacity = d <= 3 ? `.6` : `1`));
        }
      l >= v && (b.style.opacity = `0`);
      for (let [e, t] of _) l >= t && _.delete(e);
      if (h(a) && m(a))
        for (let [n, r] of _) {
          let i = e.world.get(n);
          if (n === a.id || !h(i) || i.team !== a.team) continue;
          let o = Math.hypot(
            i.pos[0] - a.pos[0],
            i.pos[1] - a.pos[1],
            i.pos[2] - a.pos[2],
          );
          if (
            o > Ut ||
            (s.set(i.pos[0], i.pos[1] + 2.05 * k(), i.pos[2]).project(e.camera),
            s.z > 1 || Math.abs(s.x) > 1.1 || Math.abs(s.y) > 1.1) ||
            (y === void 0 && ((y = t.clientWidth), (x = t.clientHeight)),
            y <= 0)
          )
            continue;
          let c = `call:` + n,
            u = S(c);
          (g.add(c),
            (u.style.left = `${((s.x + 1) / 2) * y}px`),
            (u.style.top = `${((1 - s.y) / 2) * x}px`));
          let d = `MEDIC · ${Math.round(o)} m`;
          (u.label.textContent !== d && (u.label.textContent = d),
            (u.icon.style.boxShadow = `0 0 0 2px rgba(216,35,47,.85)`),
            (u.style.opacity = String(
              r - l < 1.5 ? (r - l) / 1.5 : 0.75 + 0.25 * Math.sin(l * 8),
            )));
        }
      for (let [e, t] of n) g.has(e) || (t.remove(), n.delete(e));
    },
    dispose() {
      (window.removeEventListener(`keydown`, x),
        _.clear(),
        f.dispose(),
        l.dispose(),
        g.forEach((e) => e?.()),
        t.remove(),
        n.clear(),
        r.clear(),
        i.clear());
    },
  };
}
var W = Object.freeze({ drop: 0.5, pads: D.T, discharge: 0.25, flash: 0.12 }),
  Kt = {},
  qt = (e) => (e <= 0 ? 0 : e >= 1 ? 1 : e * e * (3 - 2 * e)),
  Jt = { revive: 10479615, kill: 16761707 };
function Yt(e) {
  let t = 0,
    n = 0,
    r = `revive`,
    i = 0,
    a = 0,
    o = () => e.modules.get(`player`)?.getLocalEntity?.(),
    s = [
      e.events.on(`gadget:status`, (e) => {
        e?.reason === `placed` && (t = W.drop);
      }),
      e.events.on(`beacon:status`, (e) => {
        e?.reason === `planted` && (t = W.drop);
      }),
      e.events.on(`medic:pads`, (e) => {
        e?.entityId != null &&
          e.entityId === o()?.id &&
          e.pos &&
          ((n = W.pads),
          (r = e.kind === `kill` ? `kill` : `revive`),
          e.pos.slice(),
          (i = Math.random() * 6),
          (t = 0));
      }),
      e.events.on(`player:death`, (e) => {
        e?.victimId === o()?.id && (t = n = 0);
      }),
    ];
  return {
    active: () => t > 0 || n > 0,
    padsActive: () => n > 0,
    update(o, s, c, l) {
      let u = Math.max(0, o || 0);
      ((t = Math.max(0, t - u)), (n = Math.max(0, n - u)), (a += u));
      let d = e.camera,
        f = s && l === `defib`;
      if (
        (f && !t
          ? c?.setPaddles?.(E(n > 0 ? W.pads - n : -1, a, Kt))
          : c?.setPaddles?.(null),
        !s || !d || (!t && !n))
      ) {
        (c?.setAction(null), c?.setGlow(0, 0));
        return;
      }
      if (n > 0) {
        let e = W.pads - n,
          t = W.discharge,
          a = e - t,
          o = a >= 0 ? Math.exp(-a * 13) : 0;
        c?.setAction(f ? Kt.action : null);
        let s = a >= 0 && a < W.flash;
        (c?.setGlow(Jt[r], s ? 3 : a < 0 ? 0.15 + 0.9 * qt(e / t) : 0),
          (d.position.y -=
            f && r === `revive`
              ? Kt.crouch
              : 0.04 * qt(e / 0.12) * (1 - qt((e - 0.3) / 0.2))),
          o > 0.02 &&
            (d.rotateX(0.03 * o), d.rotateZ(0.025 * o * Math.sin(i + a * 70))));
      } else {
        c?.setGlow(0, 0);
        let e = ((W.drop - t) * 0.95) / W.drop,
          n = qt(e / 0.34) * (1 - qt((e - 0.52) / 0.42)),
          r = e > 0.34 && e < 0.54 ? Math.sin(((e - 0.34) / 0.2) * Math.PI) : 0;
        (l === `tool`
          ? c?.setAction({
              x: -0.03 * n,
              y: -0.1 * n + 0.015 * r,
              z: -0.2 * n,
              pitch: -0.3 * n,
              roll: 0.08 * n,
            })
          : c?.setAction({
              x: 0.07 * n,
              y: -0.16 * n + 0.01 * r,
              z: 0.05 * n,
              pitch: -0.42 * n,
              roll: -0.32 * n,
            }),
          (d.position.y -= 0.08 * n),
          d.rotateX(-0.12 * n - 0.01 * r));
      }
      d.updateMatrixWorld();
    },
    dispose() {
      s.forEach((e) => e?.());
    },
  };
}
