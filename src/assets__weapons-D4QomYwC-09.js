// assets__weapons-D4QomYwC 09 — math
// Lines 2071-2413 of readable/assets__weapons-D4QomYwC.pretty.js (statement-aligned).
function Lt(e) {
  let t = document.createElement(`div`);
  t.style.cssText = `position:absolute;left:50%;bottom:30%;transform:translateX(-50%);pointer-events:none;z-index:3;display:none;flex-direction:column;align-items:center;gap:5px;font:800 12px system-ui;letter-spacing:.16em;color:#f1f4f2;text-shadow:0 1px 2px #000`;
  let n = document.createElement(`div`);
  n.textContent = `REDEPLOYING`;
  let r = document.createElement(`div`);
  r.style.cssText = `width:150px;height:4px;border-radius:2px;background:rgba(0,0,0,.5);box-shadow:0 0 0 1px rgba(255,255,255,.25);overflow:hidden`;
  let i = document.createElement(`div`);
  ((i.style.cssText = `height:100%;width:0;background:#e9f0ea`),
    r.appendChild(i),
    t.append(n, r),
    (e.renderer?.domElement?.parentElement ?? document.body).appendChild(t));
  let o = 0,
    s = !1,
    c = !1,
    l = 0,
    u = 0,
    d = () => e.modules.get(`player`)?.getLocalEntity?.(),
    f = () => {
      let t = d();
      return (
        !!t &&
        t.hp > 0 &&
        !(t.state & (a.DEAD | a.IN_VEHICLE)) &&
        e.modules.get(`player`)?.isInputActive?.() &&
        e.world.match?.phase !== `ended`
      );
    },
    p = () => {
      ((s = !1),
        (o = 0),
        cancelAnimationFrame(l),
        (l = 0),
        (t.style.display = `none`));
    },
    m = (t) => {
      if (((l = 0), s)) {
        if (!f()) return p();
        if (
          ((o += Math.min(0.1, (t - u) / 1e3)),
          (u = t),
          (i.style.width = `${Math.min(100, (o / 1) * 100)}%`),
          o >= 1 && !c)
        )
          return (
            (c = !0),
            e.modules.get(`netcode`)?.sendRpc?.(`redeploy`, {}),
            p()
          );
        l = requestAnimationFrame(m);
      }
    },
    h = (e) =>
      e.target?.closest?.(`input,textarea,select,[contenteditable="true"]`),
    g = (e) => {
      e.code !== `KeyU` ||
        e.repeat ||
        e.ctrlKey ||
        e.altKey ||
        e.metaKey ||
        h(e) ||
        !f() ||
        (e.preventDefault(),
        (s = !0),
        (c = !1),
        (o = 0),
        (u = performance.now()),
        (t.style.display = `flex`),
        (i.style.width = `0`),
        (l = requestAnimationFrame(m)));
    },
    _ = (e) => {
      e.code === `KeyU` && p();
    };
  return (
    window.addEventListener(`keydown`, g),
    window.addEventListener(`keyup`, _),
    window.addEventListener(`blur`, p),
    {
      dispose() {
        (p(),
          window.removeEventListener(`keydown`, g),
          window.removeEventListener(`keyup`, _),
          window.removeEventListener(`blur`, p),
          t.remove());
      },
    }
  );
}
function Rt(e) {
  let t = (t) => e.modules.get(t),
    n = e.events.on(`repair:spark`, (n) => {
      if (!Array.isArray(n?.pos) || !n.pos.every(Number.isFinite)) return;
      let r = n.entityId === t(`player`)?.getLocalEntity?.()?.id;
      (t(`effects`)?.spawn?.(`weld`, n.pos, [0, 1, 0]),
        t(`audio`)?.play?.(
          `repair_weld`,
          r ? { local: !0, volume: 0.55 } : { pos: n.pos, volume: 0.8 },
        ),
        r &&
          n.full &&
          e.events.emit(`ui:message`, {
            kind: `info`,
            text: `VEHICLE FULLY REPAIRED`,
            ttl: 2,
          }));
    });
  return {
    dispose() {
      n?.();
    },
  };
}
function zt() {
  let e = new Map();
  return {
    update(t, n, r) {
      if (t.modules.get(`netcode`)?.remoteHeld?.()) {
        e.clear();
        return;
      }
      let i = new Set();
      for (let s of t.world.entities.values()) {
        if (s.type !== `soldier` || s.id === r) continue;
        i.add(s.id);
        let c = j[s.weapon];
        if (
          !c ||
          c.class === `launcher` ||
          s.hp <= 0 ||
          !(s.state & a.FIRING) ||
          s.state & (a.RELOADING | a.IN_VEHICLE)
        ) {
          e.delete(s.id);
          continue;
        }
        let l = (e.get(s.id) ?? 0) - n;
        if (l <= 0) {
          let e = D(s),
            n = o(s.yaw, s.pitch),
            r = t.world.map.raycast(e, n, c.range, null, null, !0);
          (t.events.emit(`weapon:fire`, {
            entityId: s.id,
            weaponId: s.weapon,
            origin: e,
            dir: n,
            dist: r?.dist ?? c.range,
            tracer: !0,
            muzzle: !0,
            casing: !1,
          }),
            (l = 60 / c.rpm));
        }
        e.set(s.id, l);
      }
      for (let t of e.keys()) i.has(t) || e.delete(t);
    },
    dispose() {
      e.clear();
    },
  };
}
var Bt = (e, t, n) => Math.max(t, Math.min(n, e)),
  Vt = [1, -0.5, 0.35, -0.85],
  Ht = 0.04;
function Ut() {
  let e = { yaw: 0, pitch: 0 },
    t = null,
    n = 1,
    r = 0,
    i = 0.14;
  function a(n) {
    if (t)
      for (let r of [`yaw`, `pitch`]) {
        let i = n[r] - t[r];
        (r === `yaw` && (i = Math.atan2(Math.sin(i), Math.cos(i))),
          i * e[r] < 0 &&
            (e[r] =
              Math.sign(e[r]) * Math.max(0, Math.abs(e[r]) - Math.abs(i))));
      }
    t = { ...n };
  }
  return {
    reset() {
      ((e = { yaw: 0, pitch: 0 }), (t = null), (n = 1), (r = 0));
    },
    step(o, s) {
      a(o);
      let c = n;
      n += Math.max(0, s);
      let l = Math.max(0, n - Math.max(i, c)),
        u = 1 - Math.exp(-10 * l),
        d = { ...o };
      for (let t of [`yaw`, `pitch`]) {
        let n = e[t] * u;
        ((d[t] -= n), (e[t] -= n));
      }
      return (
        n > 0.3 &&
          Math.abs(e.pitch) + Math.abs(e.yaw) < 1e-5 &&
          ((d.yaw -= e.yaw),
          (d.pitch -= e.pitch),
          (e = { yaw: 0, pitch: 0 }),
          (r = 0)),
        (t = { ...d }),
        d
      );
    },
    kick(o, s) {
      if ((a(o), s.class === `launcher`)) return { ...o };
      i = s.class === `ar` ? Ht : 0.14;
      let c = Math.min(0.18 - e.pitch, (s.recoil?.[1] ?? 0) * 0.65),
        l =
          Bt(
            e.yaw + (s.recoil?.[0] ?? 0) * 0.35 * Vt[r++ % Vt.length],
            -0.035,
            0.035,
          ) - e.yaw,
        u = { yaw: o.yaw + l, pitch: Bt(o.pitch + c, -1.55, 1.55) },
        d = s.recoilReturn ?? 1;
      return (
        (e.yaw += l * d),
        (e.pitch += (u.pitch - o.pitch) * d),
        (n = 0),
        (t = { ...u }),
        u
      );
    },
    stats: () => ({ ...e, quiet: n, index: r }),
  };
}
var Wt = (2 * Math.atan(Math.tan((75 * Math.PI) / 360) / 2) * 180) / Math.PI;
function Gt(e) {
  let t = !1,
    n = !1,
    r = 0,
    i = 0,
    o = () => e.modules.get(`player`),
    s = () => {
      let t = o()?.getLocalEntity?.();
      return (
        !e.config.showcase &&
        t?.hp > 0 &&
        !(t.state & (a.DEAD | a.IN_VEHICLE)) &&
        !e.modules.get(`ui`)?.isVisible?.(`spawn`)
      );
    },
    c = () => !!e.config.frost && s(),
    l = () => t || n,
    u = () => e.postfx.setThermal(l(), i, !n || t);
  function d(n) {
    let i = !!n && c();
    i !== t &&
      ((t = i),
      t || (r = e.world.time.sim + 0.35),
      u(),
      e.events.emit(`ui:thermal`, { active: t }));
  }
  function f(e) {
    e.repeat ||
      Be(e.target) ||
      (e.code === `KeyH` && o()?.isInputActive?.()
        ? (e.preventDefault(), d(!t))
        : t &&
          [
            `Escape`,
            `ShiftLeft`,
            `ShiftRight`,
            `KeyG`,
            `KeyT`,
            `KeyX`,
            `KeyR`,
            `KeyF`,
          ].includes(e.code) &&
          d(!1));
  }
  let m = () => d(!1);
  (window.addEventListener(`keydown`, f), window.addEventListener(`blur`, m));
  let h = [
    e.events.on(`net:disconnected`, m),
    e.events.on(`player:local`, m),
    e.events.on(`explosion`, (t) => {
      if (!l() || !t?.pos) return;
      let n = e.camera.position.toArray(),
        r = t.pos.map((e, t) => e - n[t]),
        a = Math.hypot(...r);
      if (a < 1 || a > 100) return;
      let o = r.map((e) => e / a),
        s = [
          -Math.sin(e.camera.rotation.y) * Math.cos(e.camera.rotation.x),
          Math.sin(e.camera.rotation.x),
          -Math.cos(e.camera.rotation.y) * Math.cos(e.camera.rotation.x),
        ];
      o.reduce((e, t, n) => e + t * s[n], 0) < 0.75 ||
        e.world.map.isOccluded(n, o, a, 0.5) ||
        (i = Math.max(i, 0.85 * (1 - a / 120)));
    }),
  ];
  return {
    lower: () => {
      ((n = !1), d(!1), u());
    },
    active: () => t,
    scoped: () => n,
    busy: () => t || e.world.time.sim < r,
    setScope(e) {
      n = !!e && s();
    },
    filter(n) {
      return (
        t && (!c() || n.buttons & p.SPRINT) && d(!1),
        (t || e.world.time.sim < r) &&
          (n.buttons &= ~(p.FIRE | p.ADS | p.MELEE | p.RELOAD)),
        n
      );
    },
    update(n) {
      (t && (!c() || !o()?.isInputActive?.()) && d(!1),
        (i = Math.max(0, i - n * 0.9)),
        u(),
        t &&
          ((e.camera.fov = Wt),
          e.camera.updateProjectionMatrix(),
          o()?.setAimSensitivityScale?.(0.5)));
    },
    dispose() {
      ((n = !1),
        d(!1),
        u(),
        window.removeEventListener(`keydown`, f),
        window.removeEventListener(`blur`, m),
        h.forEach((e) => e?.()));
    },
  };
}
var Kt = (e) =>
    e
      ? `${e.weaponId}/${e.entity?.id ?? e.entityId ?? e.entity?.owner ?? ``}`
      : ``,
  qt = (e, t, n) => !!e.replay && e.replayKey === t && e.replay.weaponId === n,
  K = null,
  Jt = 12,
  q = new T();
