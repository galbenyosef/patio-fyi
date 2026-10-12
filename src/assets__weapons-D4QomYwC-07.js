// assets__weapons-D4QomYwC 07 — pos
// Lines 1603-1783 of readable/assets__weapons-D4QomYwC.pretty.js (statement-aligned).
function kt(e) {
  let t = (t) => e.modules.get(t),
    n = () => t(`audio`),
    r = () => t(`player`)?.getLocalEntity?.(),
    i = (t) => e.world.players.get(t?.owner)?.name ?? `Medic`,
    o = (e) => [e.pos[0], e.pos[1] + 1.5, e.pos[2]],
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
    m = -1,
    h = 0,
    g = (t, n = 3) =>
      e.events.emit(`ui:message`, { kind: `squad`, text: t, ttl: n }),
    _ = [
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
      e.events.on(`medic:revive`, (i) => {
        let a = r();
        if (!i?.pos) return;
        let s = e.world.get(i.medicId),
          c = e.world.get(i.entityId),
          l = [i.pos[0], i.pos[1] + 0.35, i.pos[2]];
        if (
          (t(`effects`)?.spawn?.(`defib`, l, [0, 1, 0]),
          (a && i.entityId === a.id) || (m >= 0 && i.playerId === m))
        )
          return y(s);
        if (a && i.medicId === a.id) {
          (n()?.play?.(`defib_zap`, { local: !0, volume: 0.9 }),
            c &&
              n()?.play?.(`revive_gasp`, {
                pos: o(c),
                volume: 0.85,
                delay: U.gaspDelay,
              }));
          return;
        }
        (n()?.play?.(`defib_zap`, { pos: l }),
          c &&
            n()?.play?.(`revive_gasp`, {
              pos: o(c),
              volume: 0.8,
              delay: U.gaspDelay,
            }));
      }),
      e.events.on(`player:death`, (e) => {
        e?.victimId === r()?.id && v();
      }),
      e.events.on(`player:local`, (e) => {
        e?.playerId != null && (m = e.playerId);
      }),
    ];
  function v() {
    ((d = null), (u.style.opacity = `0`));
  }
  function y(r) {
    (v(),
      e.setCamera?.(`fps`),
      t(`player`)?.reviveRise?.({ face: r ? o(r) : null }));
    let a = n();
    (a?.play?.(`defib_zap`, { local: !0, volume: 1, bus: `ui` }),
      a?.play?.(`revive_ring`, { volume: 0.9, delay: U.ringDelay }),
      a?.play?.(`revive_gasp`, {
        local: !0,
        volume: 1,
        delay: U.gaspDelay,
        pitch: 0.97 + Math.random() * 0.06,
      }),
      (p = U.flash),
      (f = U.clear),
      (h = 0.12));
    let s = Ot(Dt),
      c = r ? i(r) : `Medic`;
    (g(`${c}: "${s}"`, 4),
      a?.play?.(`voice_revive`, {
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
      if (d) {
        let t = r(),
          n = e.world.get(d.medicId);
        if (
          !t ||
          !(t.state & a.DEAD) ||
          !n ||
          performance.now() / 1e3 - d.since > U.chargeCam
        )
          v();
        else {
          let r = [t.pos[0], t.pos[1] + 0.35, t.pos[2]],
            i = o(n),
            a = r[0] - i[0],
            s = r[2] - i[2],
            c = Math.hypot(a, s) || 1,
            l = [
              r[0] + (a / c) * 0.5 - (s / c) * 0.45,
              r[1],
              r[2] + (s / c) * 0.5 + (a / c) * 0.45,
            ];
          e.setCamera?.({
            pos: l,
            look: [i[0] - (s / c) * 0.9, i[1] + 0.6, i[2] + (a / c) * 0.9],
            fov: 75,
          });
        }
      }
      if (
        h > 0 &&
        (h -= i) <= 0 &&
        s &&
        !t(`player`)?.isInputActive?.() &&
        document.pointerLockElement !== s &&
        !Ve()
      )
        try {
          s.requestPointerLock?.()?.catch?.(() => {});
        } catch {}
      if (p > 0) {
        p = Math.max(0, p - i);
        let e = p / U.flash;
        l.style.opacity = (e * e * 0.92).toFixed(3);
      } else l.style.opacity !== `0` && (l.style.opacity = `0`);
      if (s && f > 0) {
        f = Math.max(0, f - i);
        let e = f / U.clear,
          t = e * e;
        ((s.dataset.reviveFx = `1`),
          (s.style.filter = `saturate(${(1 + 1.6 * t).toFixed(2)}) contrast(${(1 + 0.25 * t).toFixed(2)}) brightness(${(1 + 0.35 * t).toFixed(2)})`),
          f === 0 && ((s.style.filter = ``), delete s.dataset.reviveFx));
      }
    },
    dispose() {
      (_.forEach((e) => e?.()),
        l.remove(),
        u.remove(),
        s && f > 0 && ((s.style.filter = ``), delete s.dataset.reviveFx));
    },
  };
}
var At = I.reviveWindow / 60,
  jt = 50,
  Mt = 80,
  Nt = 0.2;
