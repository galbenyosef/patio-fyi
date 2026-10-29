// assets__weapons-l6nEMnye 09 — pos
// Lines 1712-1904 of readable/assets__weapons-l6nEMnye.pretty.js (statement-aligned).
function Bt(e) {
  let t = (t) => e.modules.get(t),
    n = () => t(`audio`),
    r = () => t(`player`)?.getLocalEntity?.(),
    i = (t) => e.world.players.get(t?.owner)?.name ?? `Medic`,
    a = (e) => [e.pos[0], e.pos[1] + 1.5, e.pos[2]],
    s = e.renderer?.domElement ?? null,
    c = s?.parentElement ?? document.body,
    l = document.createElement(`div`);
  l.style.cssText = `position:absolute;inset:0;pointer-events:none;z-index:4;opacity:0;background:radial-gradient(circle at 50% 55%,#fff 0%,#eaf6ff 45%,#9fc4dc 100%)`;
  let u = document.createElement(`div`);
  ((u.style.cssText = `position:absolute;left:50%;top:62%;transform:translateX(-50%);pointer-events:none;z-index:4;font:800 15px system-ui;letter-spacing:.14em;color:#e9f6ff;text-shadow:0 0 10px rgba(80,170,255,.9),0 1px 2px #000;opacity:0;transition:opacity .15s;white-space:nowrap`),
    c.append(l, u));
  let d = null,
    f = 0,
    p = 0,
    m = 0,
    h = -1,
    g = 0,
    _ = (t, n = 3) =>
      e.events.emit(`ui:message`, { kind: `squad`, text: t, ttl: n }),
    v = [
      e.events.on(`medic:pads`, (t) => {
        let a = r();
        if (!t?.pos) return;
        let o = a && t.entityId === a.id,
          s = t.kind === `revive` && a && t.targetId === a.id;
        (o || s
          ? n()?.play?.(`defib_charge`, {
              local: !0,
              volume: s ? 0.9 : 0.75,
              bus: s ? `ui` : void 0,
            })
          : n()?.play?.(`defib_charge`, { pos: t.pos, volume: 0.9 }),
          t.kind === `kill` &&
            n()?.play?.(
              `defib_zap`,
              o ? { local: !0, delay: 0.5 } : { pos: t.pos, delay: 0.5 },
            ),
          s &&
            ((d = {
              medicId: t.entityId,
              since: performance.now() / 1e3,
              name: i(e.world.get(t.entityId)),
            }),
            (u.textContent = `${d.name.toUpperCase()} · REVIVING`),
            (u.style.opacity = `1`)));
      }),
      e.events.on(`medic:shock`, (i) => {
        let a = r();
        if (!i?.pos) return;
        let o = [i.pos[0], i.pos[1] + 0.35, i.pos[2]];
        (t(`effects`)?.spawn?.(`defib`, o, [0, 1, 0]),
          (a && i.targetId === a.id) || (h >= 0 && i.playerId === h)
            ? (n()?.play?.(`defib_zap`, { local: !0, volume: 1, bus: `ui` }),
              d &&
                ((d.since = performance.now() / 1e3),
                (d.hold = i.held ? (+i.holdTicks || 0) / 60 + 1 : 0),
                (u.textContent = `${d.name.toUpperCase()} · COMING ROUND`)))
            : a && i.medicId === a.id
              ? (n()?.play?.(`defib_zap`, { local: !0, volume: 0.9 }),
                i.held &&
                  t(`weapons`)?.padsHeld?.() &&
                  ((f = (+i.holdTicks || 0) / 60),
                  (u.textContent = `RELEASE G · ${(e.world.players.get(i.playerId)?.name ?? `Soldier`).toUpperCase()} RISES BESIDE YOU`),
                  (u.style.opacity = `1`)))
              : n()?.play?.(`defib_zap`, { pos: o }));
      }),
      e.events.on(`medic:revive`, (t) => {
        let i = r();
        if (!t?.pos) return;
        f && i && t.medicId === i.id && b();
        let o = e.world.get(t.medicId),
          s = e.world.get(t.entityId);
        if ((i && t.entityId === i.id) || (h >= 0 && t.playerId === h))
          return x(o);
        let c = s ? a(s) : [t.pos[0], t.pos[1] + 1.5, t.pos[2]];
        n()?.play?.(`revive_gasp`, {
          pos: c,
          volume: i && t.medicId === i.id ? 0.85 : 0.8,
          delay: U.gaspDelay,
        });
      }),
      e.events.on(`medic:released`, () => {
        f && b();
      }),
      e.events.on(`player:death`, (e) => {
        e?.victimId === r()?.id && (y(), b());
      }),
      e.events.on(`player:local`, (e) => {
        e?.playerId != null && (h = e.playerId);
      }),
    ];
  function y() {
    ((d = null), (u.style.opacity = `0`));
  }
  function b() {
    f && ((f = 0), d || (u.style.opacity = `0`));
  }
  function x(r) {
    (y(),
      e.setCamera?.(`fps`),
      t(`player`)?.reviveRise?.({ face: r ? a(r) : null }));
    let o = n();
    (o?.play?.(`revive_ring`, { volume: 0.9, delay: U.ringDelay }),
      o?.play?.(`revive_gasp`, {
        local: !0,
        volume: 1,
        delay: U.gaspDelay,
        pitch: 0.97 + Math.random() * 0.06,
      }),
      (m = U.flash),
      (p = U.clear),
      (g = 0.12));
    let s = zt(Rt),
      c = r ? i(r) : `Medic`;
    (_(`${c}: "${s}"`, 4),
      o?.play?.(`voice_revive`, {
        local: !0,
        volume: 0.95,
        delay: U.lineDelay,
        bus: `ui`,
      }));
  }
  return {
    incoming: () => !!d,
    update(n) {
      let i = Math.max(0, n || 0);
      if ((f > 0 && (f -= i) <= 0 && ((f = 0.001), b()), d)) {
        let t = r(),
          n = e.world.get(d.medicId);
        if (
          !t ||
          !(t.state & o.DEAD) ||
          !n ||
          performance.now() / 1e3 - d.since > Math.max(U.chargeCam, d.hold ?? 0)
        )
          y();
        else {
          let r = [t.pos[0], t.pos[1] + 0.35, t.pos[2]],
            i = a(n),
            o = r[0] - i[0],
            s = r[2] - i[2],
            c = Math.hypot(o, s) || 1,
            l = [
              r[0] + (o / c) * 0.5 - (s / c) * 0.45,
              r[1],
              r[2] + (s / c) * 0.5 + (o / c) * 0.45,
            ];
          e.setCamera?.({
            pos: l,
            look: [i[0] - (s / c) * 0.9, i[1] + 0.6, i[2] + (o / c) * 0.9],
            fov: 75,
          });
        }
      }
      if (
        g > 0 &&
        (g -= i) <= 0 &&
        s &&
        !t(`player`)?.isInputActive?.() &&
        document.pointerLockElement !== s &&
        !Qe()
      )
        try {
          s.requestPointerLock?.()?.catch?.(() => {});
        } catch {}
      if (m > 0) {
        m = Math.max(0, m - i);
        let e = m / U.flash;
        l.style.opacity = (e * e * 0.92).toFixed(3);
      } else l.style.opacity !== `0` && (l.style.opacity = `0`);
      if (s && p > 0) {
        p = Math.max(0, p - i);
        let e = p / U.clear,
          t = e * e;
        ((s.dataset.reviveFx = `1`),
          (s.style.filter = `saturate(${(1 + 1.6 * t).toFixed(2)}) contrast(${(1 + 0.25 * t).toFixed(2)}) brightness(${(1 + 0.35 * t).toFixed(2)})`),
          p === 0 && ((s.style.filter = ``), delete s.dataset.reviveFx));
      }
    },
    dispose() {
      (v.forEach((e) => e?.()),
        l.remove(),
        u.remove(),
        s && p > 0 && ((s.style.filter = ``), delete s.dataset.reviveFx));
    },
  };
}
var Vt = be.reviveWindow / 60,
  Ht = 50,
  Ut = 80,
  Wt = 0.2;
