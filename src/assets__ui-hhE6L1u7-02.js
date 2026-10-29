// assets__ui-hhE6L1u7 02 — math
// Lines 188-356 of readable/assets__ui-hhE6L1u7.pretty.js (statement-aligned).
function an(e, t) {
  let n = document.createElement(`div`);
  ((n.className = `sl-grenades`), (n.id = `grenade-inventory`));
  let r = document.createElement(`kbd`);
  r.textContent = `G`;
  let i = document.createElement(`span`);
  i.textContent = `FRAG`;
  let a = document.createElement(`span`);
  ((a.className = `pips`), a.setAttribute(`aria-hidden`, `true`));
  let s = document.createElement(`span`);
  ((s.className = `stock`),
    s.setAttribute(`role`, `status`),
    s.setAttribute(`aria-live`, `polite`));
  let c = document.createElement(`span`);
  c.className = `state`;
  let u = document.createElement(`span`),
    d = document.createElement(`kbd`);
  ((d.textContent = `G`),
    u.append(d, ` DEFIB ·`),
    (u.hidden = !0),
    n.append(u, r, i, a, s, c));
  let f = document.createElement(`div`);
  ((f.className = `sl-grenade-back`),
    (f.id = `grenade-throwback`),
    (f.innerHTML = `<kbd>G</kbd>THROW IT BACK`),
    f.setAttribute(`role`, `status`));
  let p = [];
  for (let e = 0; e < tn; e++) {
    let n = document.createElement(`div`);
    ((n.className = `sl-grenade-danger`),
      (n.id = e ? `grenade-danger-` + e : `grenade-danger`));
    let r = document.createElement(`span`);
    ((r.className = `icon`), (r.innerHTML = nn));
    let i = document.createElement(`span`);
    ((i.className = `arrow`), i.setAttribute(`aria-hidden`, `true`));
    let a = document.createElement(`span`);
    (n.append(i, r, a),
      (n.hidden = !0),
      p.push({ danger: n, arrow: i, distance: a }),
      t.root.append(n));
  }
  (t.root.append(n, f), (n.hidden = f.hidden = !0));
  let m = new o(),
    h = new S(),
    g = [],
    _ = -1,
    v = (e = 0) => {
      for (let t = e; t < p.length; t++)
        p[t].danger.hidden || (p[t].danger.hidden = !0);
    };
  return {
    update() {
      let o = e.modules.get(`weapons`),
        y = e.modules.get(`player`)?.getLocalEntity?.(),
        b = !e.config.showcase && typeof o?.grenadeCount == `function`,
        x = b ? `active` : ``;
      t.root.dataset.grenadeHud !== x && (t.root.dataset.grenadeHud = x);
      let S =
          b &&
          y &&
          y.hp > 0 &&
          !(y.state & l.DEAD) &&
          !t.isVisible(`scoreboard`) &&
          !t.isVisible(`spawn`) &&
          t.isVisible(`ammo`),
        C = !S || !!(y?.state & l.IN_VEHICLE);
      if ((n.hidden !== C && (n.hidden = C), !S)) {
        (v(), (f.hidden ||= !0));
        return;
      }
      let w = !!o.gIsDefib?.(),
        T = o.grenadeKind?.() ?? (w ? `smoke` : `frag`),
        E = T === `smoke` ? `SMOKE` : `FRAG`,
        D = Rt(`grenade`, `G`),
        O = w ? (Ht() ? Rt(`aim`, ``) + `+` + D : `O`) : D;
      (u.hidden !== !w && (u.hidden = !w),
        i.textContent !== E && ((i.textContent = E), (_ = -1)),
        r.textContent !== O && (r.textContent = O),
        d.textContent !== D && (d.textContent = D));
      let k = Math.max(0, Math.min(2, o.grenadeCount() | 0));
      (k !== _ &&
        ((s.textContent = k + ` / 2`),
        s.setAttribute(`aria-label`, k + ` ` + T + ` grenades remaining`),
        (a.textContent = `●`.repeat(k) + `○`.repeat(2 - k)),
        (_ = k)),
        n.classList.toggle(`empty`, k === 0));
      let A = (o.grenadeThrowProgress?.() ?? -1) >= 0,
        j =
          !w && T === `frag` && !A && !(y.state & l.IN_VEHICLE)
            ? o.grenadeGrabTarget?.()
            : null,
        M = o.grenadeCooking?.()
          ? `COOKING`
          : A
            ? `THROWING`
            : j
              ? `RETURN`
              : k === 0
                ? `EMPTY`
                : `THROW`;
      (c.textContent !== M && (c.textContent = M),
        f.hidden !== !j && (f.hidden = !j),
        (g.length = 0));
      for (let t of e.world.byType?.(`projectile`) ?? e.world.sorted()) {
        if (t.type !== `projectile` || t.weapon !== lt.id) continue;
        let n = t.owner === y.owner;
        if (
          (!n && !nt(e.world, t.team, t.owner, y)) ||
          (n && Math.hypot(...t.vel) > 4)
        )
          continue;
        let r = ct(e.world, t.pos, y);
        r <= 0 ||
          g.push({
            e: t,
            d: Math.hypot(
              t.pos[0] - y.pos[0],
              t.pos[1] - y.pos[1],
              t.pos[2] - y.pos[2],
            ),
            lethal: r >= y.hp,
          });
      }
      g.sort((e, t) => e.d - t.d);
      for (let t = 0; t < Math.min(tn, g.length); t++) {
        let { e: n, d: r, lethal: i } = g[t],
          a = p[t];
        (m.fromArray(n.pos).sub(e.camera.position),
          h.copy(e.camera.quaternion).invert(),
          m.applyQuaternion(h));
        let o = Math.atan2(m.x, -m.z),
          s = 118 + t * 6;
        ((a.danger.style.transform =
          `translate(` +
          Math.round(Math.sin(o) * s) +
          `px,` +
          Math.round(-Math.cos(o) * s) +
          `px)`),
          (a.arrow.style.transform =
            `rotate(` + o.toFixed(3) + `rad) translateY(-34px)`));
        let c = Math.max(0, (n.hp | 0) / 10),
          l = Math.max(0.12, Math.min(0.6, c * 0.2)).toFixed(2) + `s`;
        (a.danger.style.getPropertyValue(`--pulse`) !== l &&
          a.danger.style.setProperty(`--pulse`, l),
          a.danger.classList.toggle(`lethal`, i));
        let u = Math.ceil(r) + ` m`,
          d = m.z > 0 ? `behind` : m.x > 0 ? `right` : `left`;
        a.distance.textContent !== u && (a.distance.textContent = u);
        let f =
          `Grenade ` +
          Math.ceil(r) +
          ` metres ` +
          d +
          `. ` +
          (i ? `Lethal range.` : `Find cover.`);
        (a.danger.getAttribute(`aria-label`) !== f &&
          a.danger.setAttribute(`aria-label`, f),
          a.danger.dataset.direction !== d && (a.danger.dataset.direction = d),
          a.danger.hidden && (a.danger.hidden = !1));
      }
      v(Math.min(tn, g.length));
    },
    dispose() {
      (n.remove(), f.remove());
      for (let e of p) e.danger.remove();
      delete t.root.dataset.grenadeHud;
    },
  };
}
