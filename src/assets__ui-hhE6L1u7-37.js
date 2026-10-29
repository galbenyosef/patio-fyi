// assets__ui-hhE6L1u7 37 — style
// Lines 17060-17307 of readable/assets__ui-hhE6L1u7.pretty.js (statement-aligned).
function Bo(e, t, n, r) {
  return n
    ? `${Nt(`STICKS`)} ${e.air ? `fly · ${Nt(`climb`)} climb · Hold ${Nt(`descend`)} descend · ${Nt(`flares`)} flares` : `drive · ${Nt(`climb`)} brake`}${e.air ? ` · Hold ${Nt(`focus`)} · focus` : r ? ` · Hold ${Nt(`focus`)} · gun sight · ${Nt(`fire`)} fire` : ``}${t.weapon === 2 ? ` · ${Nt(`swap`)} cannon / coax MG` : ``}${
        t.weapon === 0
          ? `
${Nt(`fire`)} · Horn / call bots aboard`
          : ``
      }
Hold ${Nt(`use`)} exit${e.air ? ` (land first)` : ``}`
    : `Look around${e.air ? ` · Hold ${Nt(`focus`)} · focus` : ``} · Hold ${Nt(`use`)} exit${e.air ? ` (land first)` : ``}`;
}
function Vo(e, t, n, r) {
  let i = ge[e.weapon],
    a = e.owner === t.owner,
    o = n?.vehicleId === e.id && n.entityId === t.id && r - n.received < 1e3,
    s = o ? Math.max(0, n.cooldown - (r - n.received) / 1e3) : null,
    c = a ? (i.air ? `Pilot` : `Driver`) : `Passenger`,
    l = Qt(e.weapon),
    u = e.weapon === 2,
    d = !!i.gun && !n?.unarmed,
    f = o && l ? n.heat : null,
    p = (l?.[0].name ?? `Cannon`).toUpperCase(),
    m = !u && o && n.ammo === 0 && !n.unlimited,
    h = o && n.mode === 1,
    g = !u && o && n.mgAmmo === 0 && !n.unlimited,
    _ = a
      ? d
        ? s === null || (l && !f)
          ? `Weapon status syncing…`
          : f?.[+!!h]?.locked
            ? `${h ? `COAX MG` : p} OVERHEATED · cooling to 40%`
            : h
              ? g
                ? `Coax MG empty · return to home pad`
                : `COAX MG · Mouse fire`
              : m
                ? `Empty · return to home pad`
                : s > 0
                  ? `Cycling · ${s.toFixed(1)} s`
                  : `${p} ready · Mouse fire`
        : `Unarmed transport`
      : `Personal weapons stowed`,
    v = (e, t) =>
      `${t} heat ${Math.round(e.value * 100)}%${e.locked ? ` · LOCKED` : ``}`,
    y =
      !a || !d
        ? ``
        : u
          ? f
            ? `∞ ammo\n${v(f[0], `Cannon`)}\n${v(f[1], `Coax`)}`
            : `Heat syncing…`
          : !o || n.ammo == null
            ? `Ammo syncing…`
            : (n.unlimited
                ? `∞ ammo · SOLO TEST`
                : `${n.ammo}/${n.capacity} rounds`) +
              (f ? `\n${v(f[0], l[0].name)}` : ``),
    b = ``;
  if (o && n.home && e.pos) {
    let t = n.home[0] - e.pos[0],
      r = n.home[2] - e.pos[2],
      a = Math.hypot(t, r),
      o = ((Math.atan2(t, -r) * 180) / Math.PI + 360) % 360;
    b = n.servicing
      ? u
        ? `HOME PAD · Repairing`
        : `HOME PAD · Repairing / resupplying`
      : a > 10
        ? `Home pad · ${Math.round(a)} m · ${Math.round(o)}°`
        : n.serviceWait > 0
          ? `Service in ${Math.ceil(n.serviceWait)} s · stop firing`
          : `Home pad · ${i.air ? `land and ` : ``}stop to service`;
  }
  return {
    driver: a,
    remaining: s,
    role: c,
    weapon: _,
    ammo: y,
    service: b,
    heat: a ? f : null,
    heatMode: +!!h,
    heatNames: l?.map((e) => e.name) ?? null,
    heatOnly: u,
    crew: o ? `${n.occupied}/${i.seats} aboard` : `${i.seats} seats`,
    controls: Ht()
      ? Bo(i, e, a, d)
      : a
        ? `WASD ${i.air ? `fly · Space climb · C descend` : `drive · Space brake`}${i.air ? ` · Hold Shift · focus` : d ? ` · Hold Shift · gun sight` : ``}${e.weapon === 2 ? ` · 1 cannon / 2 coax MG` : ``}${
            e.weapon === 0
              ? `
Left click · Horn / call bots aboard`
              : ``
          }\nQ / E change seat · F exit${i.air ? ` (land first)` : ``}`
        : `Look around${i.air ? ` · Hold Shift · focus` : ``}
Q / E change seat · F exit${i.air ? ` (land first)` : ``}`,
  };
}
function Ho(e) {
  return e
    ? {
        inhibit: e.hullBlocked
          ? `Firing inhibited · own hull blocks gun`
          : e.limited
            ? `Firing inhibited · outside gun arc`
            : ``,
        sight: `${e.limited ? `Turn aircraft / adjust aim` : e.zeroed ? `Range zero` : `Out of range`} · ${Math.round(e.distance)} m${e.surface ? `` : ` (estimated)`}`,
        warning:
          e.barrelHit && !e.hullBlocked
            ? `BARREL OBSTRUCTED · shot will impact nearby`
            : ``,
      }
    : { inhibit: ``, sight: ``, warning: `` };
}
var Uo = (e, t) => {
    ((t = !!t), e.hidden !== t && (e.hidden = t));
  },
  Wo = (e, t) => {
    e.textContent !== t && (e.textContent = t);
  },
  Go = (e, t, n) => {
    ((n = String(n)), e.getAttribute(t) !== n && e.setAttribute(t, n));
  };
function Ko(e) {
  let t = document.createElement(`div`);
  (t.setAttribute(`aria-label`, `Gun sight`),
    (t.style.cssText = `position:absolute;z-index:3;left:50%;top:50%;width:0;height:0;pointer-events:none;color:#e8f0ec`),
    (t.innerHTML = `<svg viewBox="-100 -100 200 200" style="position:absolute;left:-100px;top:-100px;width:200px;height:200px;overflow:visible"><g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle data-ring r="26" opacity=".85"/><circle data-outer r="72" opacity=".35" stroke-dasharray="6 10"/><path data-cross d="M-40 0H-12M12 0H40M0 -40V-12M0 12V40" opacity=".9"/><path data-stadia d="M-60 26H-52M52 26H60M-60 44H-52M52 44H60M-24 60V52M24 60V52" opacity=".55"/><circle r="1.6" fill="currentColor" stroke="none"/></g></svg><div data-text style="position:absolute;left:-160px;top:82px;width:320px;text-align:center;font:600 13px/1.4 system-ui;letter-spacing:.08em;text-shadow:0 1px 2px #000c"></div>`),
    e.ui.append(t));
  let n = t.querySelector(`[data-ring]`),
    r = t.querySelector(`[data-outer]`),
    i = t.querySelector(`[data-cross]`),
    a = t.querySelector(`[data-stadia]`),
    o = t.querySelector(`[data-text]`);
  return (
    (o.style.whiteSpace = `pre-line`),
    {
      el: t,
      set(s, c, u, d) {
        let f = s === `cockpit`,
          p =
            s === `sight` ||
            s === `chase` ||
            (f &&
              d?.owner === e.modules.get(`player`)?.getLocalEntity?.()?.owner &&
              !(e.config.frost && d.weapon === 4));
        if ((Uo(t, !p), !p)) return;
        let m = s === `sight`;
        (Go(n, `r`, m ? 30 : 16),
          (i.style.display = m ? `` : `none`),
          (a.style.display = m ? `` : `none`),
          (r.style.display = m ? `` : `none`));
        let h = !!(d && d.state & l.ADS),
          g =
            d?.weapon === 2
              ? h
                ? `COAX MG`
                : `CANNON`
              : d?.weapon === 3
                ? `CHAIN GUN`
                : `CANNON`,
          _ =
            u?.vehicleId === d?.id &&
            performance.now() - u.received < 1e3 &&
            u.heat?.[+!!h]?.locked;
        ((t.style.color =
          _ || c?.hullBlocked || c?.limited
            ? `#e88b6a`
            : c?.barrelHit
              ? `#e6c95c`
              : f
                ? `#8df577`
                : `#e8f0ec`),
          Wo(
            o,
            (c
              ? `${g} · ${Math.round(c.distance)} m${m || f ? (c.limited ? ` · OUT OF ARC` : c.zeroed || h ? `` : ` · OUT OF RANGE`) : ``}`
              : g) +
              (_
                ? `
OVERHEATED · COOLING`
                : ``),
          ));
      },
      dispose() {
        t.remove();
      },
    }
  );
}
function qo(e) {
  let t = document.createElement(`div`);
  ((t.style.cssText = `margin:8px 0;text-align:left`), e.append(t));
  let n = [`Cannon`, `Coax`].map((e) => {
    let n = document.createElement(`div`);
    ((n.style.cssText = `padding:4px 6px;border-left:2px solid transparent`),
      t.append(n));
    let r = document.createElement(`div`);
    ((r.style.cssText = `font:600 12px/1.6 system-ui`), n.append(r));
    let i = document.createElement(`div`);
    (i.setAttribute(`role`, `progressbar`),
      i.setAttribute(`aria-label`, `${e} heat`),
      i.setAttribute(`aria-valuemin`, `0`),
      i.setAttribute(`aria-valuemax`, `100`),
      (i.style.cssText = `height:7px;position:relative;background:#ffffff18`),
      n.append(i));
    let a = document.createElement(`div`);
    ((a.style.cssText = `height:100%`), i.append(a));
    let o = document.createElement(`div`);
    return (
      (o.style.cssText = `position:absolute;left:40%;top:-2px;height:11px;width:1px;background:#eff4f399`),
      i.append(o),
      { name: e, row: n, label: r, track: i, fill: a }
    );
  });
  return {
    set(e, r, i) {
      (Uo(t, !e),
        e &&
          n.forEach((t, n) => {
            if ((Uo(t.row, !e[n]), !e[n])) return;
            ((t.name = i?.[n] ?? t.name),
              Go(t.track, `aria-label`, `${t.name} heat`));
            let a = e[n],
              o = Math.round(a.value * 100),
              s = a.locked
                ? `#ee977a`
                : a.value >= 0.75
                  ? `#e6c95c`
                  : `#86cfb5`;
            ((t.row.style.borderLeftColor =
              n === r ? `#eff4f3` : `transparent`),
              Wo(
                t.label,
                `${n === r ? `▸ ` : ``}${t.name} · ${o}%${a.locked ? ` · cool to 40%` : ``}`,
              ),
              Go(t.track, `aria-valuenow`, String(o)),
              Go(
                t.track,
                `aria-valuetext`,
                `${o}%${a.locked ? `, overheated; unlocks at 40%` : ``}`,
              ),
              (t.fill.style.width = `${o}%`),
              (t.fill.style.background = s));
          }));
    },
  };
}
