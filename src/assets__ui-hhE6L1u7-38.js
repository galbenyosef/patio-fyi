// assets__ui-hhE6L1u7 38 — style
// Lines 17308-17448 of readable/assets__ui-hhE6L1u7.pretty.js (statement-aligned).
function Jo(e, t) {
  let n = Ko(e),
    r = document.createElement(`div`);
  (r.setAttribute(`aria-label`, `Vehicle controls`),
    (r.style.cssText = `position:absolute;z-index:4;bottom:28px;right:24px;width:300px;max-width:60vw;background:#13212bee;border:1px solid #8c9d9f;padding:12px 18px;color:#eff4f3;font:14px/1.6 system-ui;text-align:center;pointer-events:none`),
    e.ui.append(r));
  let i = document.createElement(`div`);
  r.append(i);
  let a = qo(r),
    o = document.createElement(`div`);
  r.append(o);
  let s = (t) =>
    t.team >= 0 &&
    e.world
      .byType(`soldier`)
      .some((e) => e.seat === t.id && e.state & l.IN_VEHICLE);
  return {
    update() {
      let c = e.modules.get(`player`)?.getLocalEntity?.(),
        u = e.modules.get(`vehicles`);
      if (
        (n.set(
          c && c.hp > 0 && !t?.isVisible(`scoreboard`) && !t?.isVisible(`spawn`)
            ? u?.getViewMode?.()
            : null,
          u?.getAim?.(),
          u?.getMountedStatus?.(),
          c && c.state & l.IN_VEHICLE ? e.world.get(c.seat) : null,
        ),
        !c || c.hp <= 0)
      ) {
        Uo(r, !0);
        return;
      }
      let d = !!(c.state & l.IN_VEHICLE),
        f = d
          ? e.world.get(c.seat)
          : e.world
              .byType(`vehicle`)
              .find(
                (e) =>
                  e.hp > 0 &&
                  (e.team === c.team || !s(e)) &&
                  Math.hypot(...e.pos.map((e, t) => e - c.pos[t])) < 7,
              ),
        p = !f || t?.isVisible(`scoreboard`) || t?.isVisible(`spawn`),
        m = f && ge[f.weapon];
      if (
        (!p &&
          d &&
          m.air &&
          e.modules.get(`vehicles`)?.getViewMode?.() === `cockpit` &&
          (p = !0),
        Uo(r, p),
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
          n = Vo(f, c, t?.getMountedStatus?.(), performance.now()),
          r = Ho(n.driver && m.gun ? t?.getAim?.() : null);
        (Wo(
          i,
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
          a.set(n.heat, n.heatMode, n.heatNames),
          Wo(
            o,
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
        (Wo(
          i,
          `${e.modules.get(`player`)?.hasTouchControls?.() ? `USE` : e.modules.get(`player`)?.isPadPlaying?.() ? `Hold ${Nt(`use`)}` : `F`} · Enter ${m.name} · ${m.seats} seats`,
        ),
          a.set(null),
          Wo(o, ``));
      r.style.whiteSpace = `pre-line`;
    },
    dispose() {
      (n.dispose(), r.remove());
    },
  };
}
var Yo = (e, t) => {
    e.hidden !== t && (e.hidden = t);
  },
  Xo = (e, t) => {
    e.textContent !== t && (e.textContent = t);
  },
  Zo = (e, t, n) => (e < t ? t : e > n ? n : e),
  Qo = {
    ally: `<circle cx="7" cy="7" r="4.2"/>`,
    squad: `<path d="M7 1.6 12.4 7 7 12.4 1.6 7Z"/>`,
    enemy: `<path d="M1.8 3h10.4L7 11.6Z"/>`,
  },
  $o = `.combat-identification{forced-color-adjust:none}
.iff-marker[hidden],.iff-name[hidden],.iff-confirm[hidden]{display:none}
.iff-marker{position:absolute;left:0;top:0;will-change:transform,opacity;display:flex;align-items:center;flex-direction:column;gap:2px;opacity:0;transition:opacity .16s linear}
.iff-sym{display:block;width:14px;height:14px;overflow:visible;transform-origin:50% 100%;filter:drop-shadow(0 1px 1.5px rgba(0,0,0,.7))}
.iff-sym *{fill:currentColor;stroke:rgba(8,13,19,.92);stroke-width:1.6px;paint-order:stroke;stroke-linejoin:round}
.iff-name{font:650 11px/1.1 system-ui,sans-serif;letter-spacing:.07em;text-transform:uppercase;white-space:nowrap;text-shadow:0 1px 2px #000,0 0 5px rgba(0,0,0,.75)}
.iff-name b{font-weight:800;margin-right:.35em;opacity:.85}
.iff-confirm{position:absolute;left:50%;top:56%;transform:translateX(-50%);display:flex;align-items:center;gap:6px;font:700 11px/1 system-ui,sans-serif;letter-spacing:.16em;text-transform:uppercase;white-space:nowrap;text-shadow:0 1px 2px #000,0 0 6px rgba(0,0,0,.8)}
.iff-confirm .iff-sym{width:11px;height:11px}`,
  es = 170;
function ts(e, t = !1) {
  return {
    size: Zo(1.08 - e / 190, 0.6, 1.08) * (t ? 1.12 : 1),
    alpha: e < 35 ? 1 : Zo(1 - (e - 35) / 210, 0.5, 1),
  };
}
