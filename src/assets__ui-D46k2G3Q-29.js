// assets__ui-D46k2G3Q 29 — style
// Lines 14163-14407 of readable/assets__ui-D46k2G3Q.pretty.js (statement-aligned).
function va(e) {
  let t = document.createElement(`div`),
    n = document.createElement(`div`),
    r = document.createElement(`div`);
  ((t.id = `javelin-gate`),
    (r.id = `javelin-status`),
    (t.hidden = r.hidden = !0),
    (t.style.cssText = `position:absolute;width:64px;height:64px;margin:-32px 0 0 -32px;border:2px solid #e8d36a;box-sizing:border-box;pointer-events:none;transition:border-color .1s`),
    (n.style.cssText = `position:absolute;top:100%;left:50%;transform:translateX(-50%);margin-top:6px;white-space:nowrap;font:600 12px/1 system-ui;letter-spacing:.12em;color:inherit`),
    (r.style.cssText = `position:absolute;left:50%;top:62%;transform:translateX(-50%);padding:5px 12px;background:#141c22c0;font:600 13px/1 system-ui;letter-spacing:.16em;color:#b8c9d4;pointer-events:none`),
    t.append(n),
    e.ui.append(t, r));
  let i = e.events.on(`ui:javelinLock`, (e) => {
    if (
      ((r.hidden = !e.active), (t.hidden = !e.active || e.x == null), !e.active)
    )
      return;
    let i = e.state === `locked`,
      a = i ? `#ff5a4d` : `#e8d36a`;
    if (
      ((r.textContent = i
        ? `LOCKED · FIRE`
        : e.state === `locking`
          ? `ACQUIRING`
          : e.state === `empty`
            ? `NO MISSILE`
            : `SEEKING · HOLD ON A VEHICLE`),
      (r.style.color = i ? a : e.state === `locking` ? `#e8d36a` : `#b8c9d4`),
      e.x == null)
    )
      return;
    let o = Math.round(i ? 44 : 96 - 52 * e.progress);
    ((t.style.left = `${(e.x + 1) * 50}%`),
      (t.style.top = `${(1 - e.y) * 50}%`),
      (t.style.width = t.style.height = `${o}px`),
      (t.style.margin = `${-o / 2}px 0 0 ${-o / 2}px`),
      (t.style.borderColor = t.style.color = a),
      (t.style.borderStyle = i ? `solid` : `dashed`),
      (n.textContent = `${i ? `LOCK` : Math.round(e.progress * 100) + `%`} · ${Math.round(e.distance)} M`));
  });
  return {
    dispose() {
      (i(), t.remove(), r.remove());
    },
  };
}
function ya(e) {
  let t = document.createElement(`div`),
    n = document.createElement(`div`),
    r = document.createElement(`div`);
  ((t.id = `missile-warning`),
    (t.hidden = !0),
    (t.style.cssText = `position:absolute;left:50%;top:21%;transform:translateX(-50%);text-align:center;pointer-events:none;font:700 15px/1.2 system-ui;letter-spacing:.18em`),
    (n.style.cssText = `padding:7px 16px;border:2px solid currentColor;background:#140c0ccc`),
    (r.style.cssText = `margin-top:6px;font-weight:600;font-size:12px;color:#d7e2e8;background:#141c22c0;padding:4px 10px;display:inline-block`),
    t.append(n, r),
    e.ui.append(t));
  let a = null,
    o = 0,
    s = U.flareCharges,
    c = 1 / 0,
    l = 0,
    u = 0,
    d = [
      e.events.on(`javelin:warn`, (e) => {
        if (e?.vehicleId == null) {
          if (e?.state === `clear`) {
            a === `missile` && (a = null);
            return;
          }
          e?.state === `missile`
            ? ((a = `missile`), (o = u + 14))
            : e?.state === `lock` &&
              a !== `missile` &&
              ((a = `lock`), (o = u + 0.8));
        }
      }),
      e.events.on(`javelin:flareState`, (e) => {
        ((s = e?.charges ?? s), (c = e?.nextTick ?? 1 / 0));
      }),
      e.events.on(`player:spawn`, () => {
        ((a = null), (s = U.flareCharges), (c = 1 / 0));
      }),
    ];
  return {
    update(d) {
      u += d;
      let f = e.modules.get(`player`)?.getLocalEntity?.(),
        p = f && f.state & i.IN_VEHICLE ? e.world.get(f.seat) : null;
      if (!(p && V[p.weapon]?.air)) {
        ((t.hidden ||= !0), (a = null));
        return;
      }
      (s < U.flareCharges &&
        e.world.time.tick >= c &&
        (s++,
        (c = s < U.flareCharges ? e.world.time.tick + U.flareRecharge : 1 / 0)),
        a && u > o && (a = null),
        (t.hidden &&= !1),
        n.hidden !== !a && (n.hidden = !a));
      let m = `${kt(`flares`, `X`)} · FLARES ${`●`.repeat(s)}${`○`.repeat(U.flareCharges - s)}`;
      if ((r.textContent !== m && (r.textContent = m), !a)) return;
      let h = a === `missile`,
        g = h ? `MISSILE INBOUND` : `SEEKER LOCK`;
      (n.textContent !== g && (n.textContent = g),
        (t.style.color = h ? `#ff5a4d` : `#e8d36a`),
        (n.style.opacity = h && Math.floor(u * 6) % 2 ? `.45` : `1`),
        (l -= d) <= 0 &&
          ((l = h ? 0.16 : 0.5),
          e.modules.get(`audio`)?.play?.(h ? `ui_error` : `ui_tick`, {
            volume: h ? 0.6 : 0.5,
            pitch: h ? 1.6 : 0.8,
          })));
    },
    dispose() {
      (d.forEach((e) => e()), t.remove());
    },
  };
}
var ba = `Hit-location damage model · 144`,
  xa = (e) => (Number.isFinite(e) ? Math.round(e * 100) / 100 : null);
function Sa(e) {
  let t = e.modules.get(`player`)?.getLocalEntity?.(),
    n = e.modules.get(`netcode`)?.stats?.() ?? {},
    r = e.world.map,
    a = r.waterBounds,
    o = t?.pos,
    s =
      o &&
      (!a || (o[0] >= a[0] && o[0] <= a[2] && o[2] >= a[1] && o[2] <= a[3]));
  return {
    build: ba,
    mode: e.config.offline ? `offline demo` : `friends multiplayer`,
    connected: !!e.transport?.isOpen?.(),
    tick: e.world.time.tick,
    phase: e.world.match.phase,
    player: t
      ? {
          entity: t.id,
          hp: t.hp,
          position: t.pos.map(xa),
          velocity: t.vel.map(xa),
          dead: !!(t.state & i.DEAD),
          swimming: !!(t.state & i.SWIMMING),
          stance: t.stance,
          waterDepth:
            s && Number.isFinite(r.waterLevel)
              ? xa(r.waterLevel - t.pos[1])
              : null,
          weapon: t.weapon,
          ammo: t.ammo,
        }
      : null,
    network: { rtt: xa(n.rtt), snapshotsPerSec: xa(n.snapshotsPerSec) },
    render: {
      fps: xa(e.stats?.fps),
      drawCalls: e.stats?.drawCalls ?? null,
      frameLimit: e.framePolicy?.effectiveLimit?.() ?? null,
      requestedFrameLimit: e.framePolicy?.get?.().limit ?? null,
      limitWhenUnfocused: e.framePolicy?.get?.().background ?? null,
    },
    modules: e.modules.status?.() ?? {},
    serverErrors: e.localServer?.match?.errors?.length ?? null,
  };
}
function Ca(e, t) {
  let n = document.createElement(`fieldset`);
  n.style.cssText = `margin:20px 0;padding:12px;border:1px solid #617784`;
  let r = document.createElement(`legend`);
  ((r.textContent = `Weapon customization · prototype`), n.append(r));
  let i = document.createElement(`p`);
  ((i.textContent = `Changes save on this device. Warmup: apply now. Live match: apply on next spawn. Damage and ammunition stay unchanged.`),
    (i.style.fontSize = `13px`),
    n.append(i));
  let a = [],
    o = !1,
    s = !1;
  for (let e of Oe) {
    let t = document.createElement(`h3`);
    ((t.textContent = ye[e].name), (t.style.fontSize = `15px`), n.append(t));
    for (let [t, r] of [
      [`optic`, xe],
      [`muzzle`, Ce],
      [`grip`, we],
    ]) {
      let i = document.createElement(`label`);
      ((i.style.cssText = `display:block;margin:8px 0`),
        (i.textContent =
          t === `optic` ? `Sight ` : t === `muzzle` ? `Muzzle ` : `Grip `));
      let o = document.createElement(`select`);
      (o.setAttribute(`aria-label`, `${ye[e].key} ${t}`),
        (o.style.cssText = `font:inherit;max-width:100%;padding:5px`));
      for (let [e, t] of Object.entries(r)) {
        let n = document.createElement(`option`);
        ((n.value = e), (n.textContent = t.name), o.append(n));
      }
      let s = document.createElement(`p`);
      s.style.cssText = `font-size:12px;color:#b8c9d4;margin:4px 0 10px`;
      let c = () => (s.textContent = r[o.value].description);
      ((o.onchange = c),
        c(),
        i.append(o),
        n.append(i, s),
        a.push({ id: e, kind: t, select: o, refresh: c }));
    }
  }
  let c = document.createElement(`button`);
  ((c.textContent = `Save loadout`),
    (c.type = `button`),
    (c.style.cssText = `font:inherit;padding:8px 12px`));
  let l = document.createElement(`p`);
  return (
    l.setAttribute(`role`, `status`),
    (l.style.fontSize = `13px`),
    (c.onclick = () => {
      let t = Se(null);
      for (let e of a) t.weapons[e.id][e.kind] = e.select.value;
      s = e.modules.get(`weapons`)?.configure?.(t)?.saved === !1;
    }),
    n.append(c, l),
    t.append(n),
    {
      update() {
        let t = e.modules.get(`weapons`)?.equipmentStatus?.();
        if (((c.disabled = !t), !t)) {
          l.textContent = `Waiting for weapons…`;
          return;
        }
        if (!o) {
          for (let e of a)
            ((e.select.value = t.desired.weapons[e.id][e.kind]), e.refresh());
          o = !0;
        }
        l.textContent =
          (s ? `Device storage unavailable. ` : ``) +
          (t.pending
            ? `Saved selection pending server application / next spawn.`
            : `Server equipment matches saved selection.`);
      },
      dispose() {
        n.remove();
      },
    }
  );
}
