// assets__weapons-l6nEMnye 11 — math
// Lines 2203-2479 of readable/assets__weapons-l6nEMnye.pretty.js (statement-aligned).
function Xt(e) {
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
  let a = 0,
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
        !(t.state & (o.DEAD | o.IN_VEHICLE)) &&
        e.modules.get(`player`)?.isInputActive?.() &&
        e.world.match?.phase !== `ended`
      );
    },
    p = () => {
      ((s = !1),
        (a = 0),
        cancelAnimationFrame(l),
        (l = 0),
        (t.style.display = `none`));
    },
    m = (t) => {
      if (((l = 0), s)) {
        if (!f()) return p();
        if (
          ((a += Math.min(0.1, (t - u) / 1e3)),
          (u = t),
          (i.style.width = `${Math.min(100, (a / 1) * 100)}%`),
          a >= 1 && !c)
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
        (a = 0),
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
function Zt(e) {
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
var Qt = 12,
  $t = 330,
  en = { next: Math.random };
function tn(e, t, n, r, i) {
  let a = t[0] * t[0] + t[2] * t[2];
  if (a < 1e-6) return !1;
  let o = ((r.pos[0] - e[0]) * t[0] + (r.pos[2] - e[2]) * t[2]) / a;
  if (o <= 0 || o >= n) return !1;
  let s = e[0] + t[0] * o - r.pos[0],
    c = e[2] + t[2] * o - r.pos[2],
    l = e[1] + t[1] * o;
  return s * s + c * c < 0.35 * 0.35 && l > r.pos[1] - 0.1 && l < i[1] + 0.2;
}
function nn() {
  let e = new Map(),
    t = [];
  return {
    update(n, r, i) {
      if (n.modules.get(`netcode`)?.remoteHeld?.()) {
        (e.clear(), (t.length = 0));
        return;
      }
      for (let e = t.length - 1; e >= 0; e--)
        (t[e].t -= r) <= 0 &&
          (n.events.emit(`weapon:hit`, t[e].hit), t.splice(e, 1));
      let a = i == null ? null : n.world.get(i),
        s = a && a.hp > 0 ? A(a) : null,
        l = new Set();
      for (let u of n.world.entities.values()) {
        if (u.type !== `soldier` || u.id === i) continue;
        l.add(u.id);
        let f = F[u.weapon];
        if (
          !f ||
          f.class === `launcher` ||
          u.hp <= 0 ||
          !(u.state & o.FIRING) ||
          u.state & (o.RELOADING | o.IN_VEHICLE)
        ) {
          e.delete(u.id);
          continue;
        }
        let p = (e.get(u.id) ?? 0) - r;
        if (p <= 0) {
          let e = A(u),
            r = Te(
              d(u.yaw, u.pitch),
              je(u, f, { buttons: u.state & o.ADS ? c.ADS : 0 }),
              en,
            ),
            i = n.world.map.raycast(e, r, f.range, null, null, !0),
            l = i?.dist ?? f.range;
          (n.events.emit(`weapon:fire`, {
            entityId: u.id,
            weaponId: u.weapon,
            origin: e,
            dir: r,
            dist: l,
            tracer: !0,
            muzzle: !0,
          }),
            i &&
              s &&
              ve(n.world, u, a) &&
              Math.hypot(
                i.point[0] - s[0],
                i.point[1] - s[1],
                i.point[2] - s[2],
              ) < Qt &&
              !tn(e, r, l, a, s) &&
              t.push({
                t: Math.max(l - 2, 0) / $t,
                hit: {
                  entityId: u.id,
                  weaponId: u.weapon,
                  point: i.point,
                  normal: i.normal,
                  surface: i.surface || `dirt`,
                  targetId: null,
                  part: null,
                  damage: 0,
                  presentation: !0,
                },
              }),
            (p = 60 / f.rpm));
        }
        e.set(u.id, p);
      }
      for (let t of e.keys()) l.has(t) || e.delete(t);
    },
    dispose() {
      (e.clear(), (t.length = 0));
    },
  };
}
var rn = (e, t, n) => Math.max(t, Math.min(n, e)),
  an = [1, -0.5, 0.35, -0.85];
function on() {
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
      i = s.recoveryHold ?? (s.class === `ar` ? 0.11 : 0.14);
      let c = Math.min(0.18 - e.pitch, (s.recoil?.[1] ?? 0) * 0.65),
        l =
          rn(
            e.yaw + (s.recoil?.[0] ?? 0) * 0.35 * an[r++ % an.length],
            -0.035,
            0.035,
          ) - e.yaw,
        u = { yaw: o.yaw + l, pitch: rn(o.pitch + c, -1.55, 1.55) },
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
var sn = (2 * Math.atan(Math.tan((75 * Math.PI) / 360) / 2) * 180) / Math.PI;
