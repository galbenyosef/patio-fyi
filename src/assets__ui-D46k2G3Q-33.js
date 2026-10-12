// assets__ui-D46k2G3Q 33 — style
// Lines 15595-15713 of readable/assets__ui-D46k2G3Q.pretty.js (statement-aligned).
function La(e, t) {
  let n = Fa(e),
    r = document.createElement(`div`);
  (r.setAttribute(`aria-label`, `Vehicle controls`),
    (r.style.cssText = `position:absolute;z-index:4;bottom:28px;right:24px;width:300px;max-width:60vw;background:#13212bee;border:1px solid #8c9d9f;padding:12px 18px;color:#eff4f3;font:14px/1.6 system-ui;text-align:center;pointer-events:none`),
    e.ui.append(r));
  let a = document.createElement(`div`);
  r.append(a);
  let o = Ia(r),
    s = document.createElement(`div`);
  r.append(s);
  let c = (t) =>
    t.team >= 0 &&
    e.world
      .byType(`soldier`)
      .some((e) => e.seat === t.id && e.state & i.IN_VEHICLE);
  return {
    update() {
      let l = e.modules.get(`player`)?.getLocalEntity?.(),
        u = e.modules.get(`vehicles`);
      if (
        (n.set(
          l && l.hp > 0 && !t?.isVisible(`scoreboard`) && !t?.isVisible(`spawn`)
            ? u?.getViewMode?.()
            : null,
          u?.getAim?.(),
          u?.getMountedStatus?.(),
          l && l.state & i.IN_VEHICLE ? e.world.get(l.seat) : null,
        ),
        !l || l.hp <= 0)
      ) {
        Ma(r, !0);
        return;
      }
      let d = !!(l.state & i.IN_VEHICLE),
        f = d
          ? e.world.get(l.seat)
          : e.world
              .byType(`vehicle`)
              .find(
                (e) =>
                  e.hp > 0 &&
                  (e.team === l.team || !c(e)) &&
                  Math.hypot(...e.pos.map((e, t) => e - l.pos[t])) < 7,
              ),
        p = !f || t?.isVisible(`scoreboard`) || t?.isVisible(`spawn`),
        m = f && V[f.weapon];
      if (
        (!p &&
          d &&
          m.air &&
          e.modules.get(`vehicles`)?.getViewMode?.() === `cockpit` &&
          (p = !0),
        Ma(r, p),
        p)
      )
        return;
      let h = d && m.air;
      if (
        ((r.style.width = h ? `250px` : `300px`),
        (r.style.fontSize = h ? `12px` : `14px`),
        (r.style.background = h ? `#10231ecc` : `#13212bee`),
        (r.style.padding = h ? `8px 12px` : `12px 18px`),
        (r.style.bottom = d ? `28px` : `280px`),
        d)
      ) {
        let t = e.modules.get(`vehicles`),
          n = Aa(f, l, t?.getMountedStatus?.(), performance.now()),
          r = ja(n.driver && m.gun ? t?.getAim?.() : null);
        (Na(
          a,
          `${m.name} · ${n.role} · ${n.crew}\n${Math.ceil(f.hp)} HP · ${Math.round(Math.hypot(...f.vel) * 3.6)} km/h${m.air ? ` · ` + Math.round(f.pos[1] - e.world.map.getHeight(f.pos[0], f.pos[2])) + ` m terrain AGL` : ``}\n${r.inhibit || n.weapon}${
            n.ammo
              ? `
` +
                (n.heat
                  ? n.heatOnly
                    ? `∞ ammo`
                    : n.ammo.split(`
`)[0]
                  : n.ammo)
              : ``
          }`,
        ),
          o.set(n.heat, n.heatMode, n.heatNames),
          Na(
            s,
            `${r.sight}${
              r.warning
                ? `
` + r.warning
                : ``
            }${
              n.service
                ? `
` + n.service
                : ``
            }\n${n.controls}`,
          ));
      } else
        (Na(
          a,
          `${e.modules.get(`player`)?.hasTouchControls?.() ? `USE` : e.modules.get(`player`)?.isPadPlaying?.() ? `Hold ${wt(`use`)}` : `F`} · Enter ${m.name} · ${m.seats} seats`,
        ),
          o.set(null),
          Na(s, ``));
      r.style.whiteSpace = `pre-line`;
    },
    dispose() {
      (n.dispose(), r.remove());
    },
  };
}
var Ra = (e, t) => {
    e.hidden !== t && (e.hidden = t);
  },
  za = (e, t) => {
    e.textContent !== t && (e.textContent = t);
  };
