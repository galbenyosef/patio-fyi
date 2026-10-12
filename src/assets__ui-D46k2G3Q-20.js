// assets__ui-D46k2G3Q 20 — append
// Lines 8705-8991 of readable/assets__ui-D46k2G3Q.pretty.js (statement-aligned).
function fi(
  e,
  { world: t, thumb: n, classes: r = [], open: i, tab: a, visible: o } = {},
) {
  e.classList.add(`simple-deployment`, `tactical-deployment`);
  let s = (e, t, n) => {
      let r = document.createElement(e);
      return ((r.className = t), n && (r.textContent = n), r);
    },
    c = (e, t) => {
      let n = s(`button`, ``, e);
      return ((n.type = `button`), (n.onclick = t), n);
    },
    l = e.querySelector(`.spawn-head`),
    u = s(`div`, `deployment-identity`);
  (u.append(
    s(`span`, `deployment-brand`, `DEPLOYMENT`),
    s(`h1`, `deployment-map`, `Greywater District`),
    s(`span`, `deployment-mode`, `CONQUEST`),
  ),
    l.prepend(u));
  let d = s(`button`, `deploy-rank`);
  ((d.type = `button`),
    (d.title = `Career · ranks, unlocks, camos, titles (K)`));
  let f = s(`i`, `deploy-rank-art`),
    p = s(`span`, `deploy-rank-copy`),
    m = s(`strong`, ``, `LEVEL 1 · RECRUIT`),
    h = s(`i`, `deploy-rank-bar`),
    g = s(`u`, ``),
    _ = s(`small`, ``, `Career`);
  (h.append(g),
    p.append(m, h, _),
    d.append(f, p, s(`kbd`, `key`, `K`)),
    (d.onclick = () => i?.(`unlocks`)),
    u.append(d));
  let v = s(`button`, `deploy-return`);
  ((v.type = `button`),
    v.append(s(`i`, ``, `‹`), s(`span`, ``, `Back to deploy`)),
    (v.onclick = () => i?.(`deploy`)));
  let y = e.querySelectorAll(`.deployment-tabs button`);
  [`Deploy`, `Loadout`, `Career`].forEach(
    (e, t) => (y[t].querySelector(`strong`).textContent = e),
  );
  let b = s(`div`, `deployment-population`);
  (b.setAttribute(`aria-live`, `polite`), l.append(b, v));
  let x = e.querySelector(`.mapw`);
  x.querySelector(`.map-readout`).textContent =
    `Select a spawn · Drag map · Scroll to zoom`;
  let S = e.querySelector(`.class-deck`);
  S.querySelector(`.sec`).remove();
  let C = S.appendChild(s(`button`, `deploy-kit-row`));
  ((C.type = `button`),
    (C.title = `Edit loadout (L)`),
    C.setAttribute(`aria-label`, `Selected loadout · edit (L)`),
    (C.onclick = () => i?.(`loadout`)));
  let w = s(`section`, `deploy-class-card`);
  w.setAttribute(`aria-label`, `Selected class loadout`);
  let T = w
      .appendChild(s(`div`, `deploy-class-head`))
      .appendChild(s(`strong`, ``, `ASSAULT`)),
    E = w.appendChild(s(`div`, `deployment-equipment`));
  E.setAttribute(`aria-label`, `Selected class equipment`);
  let D = w.appendChild(s(`button`, `edit-loadout`));
  ((D.type = `button`),
    D.append(s(`span`, ``, `Edit loadout`), s(`kbd`, `key`, `L`)),
    (D.onclick = () => i?.(`loadout`)));
  let O = e.querySelector(`.spawn-column`),
    k = O.querySelector(`.side`),
    A = O.querySelector(`.foot`),
    j = s(`section`, `deployment-score`);
  j.setAttribute(`aria-label`, `Team scores and captured bases`);
  let M = s(`div`, `deployment-flags`);
  (j.append(M, e.querySelector(`.teams`)), O.prepend(j));
  let ee = s(`div`, `deployment-source-tabs`),
    N = e.querySelector(`.squad-quick`),
    P = (t) => {
      (e.classList.toggle(`show-squad`, t),
        F.setAttribute(`aria-pressed`, String(!t)),
        te.setAttribute(`aria-pressed`, String(t)));
    },
    F = c(`Bases`, () => P(!1)),
    te = c(`Squad`, () => P(!0));
  (F.setAttribute(`aria-pressed`, `true`),
    te.setAttribute(`aria-pressed`, `false`),
    ee.append(F, te),
    j.after(ee),
    O.insertBefore(N, A),
    (k.querySelector(`.sec`).textContent = `SELECT SPAWN`));
  let I = s(`div`, `deployment-destination`);
  (I.append(s(`small`, ``, `SELECTED SPAWN`), s(`strong`, ``, `Headquarters`)),
    A.prepend(w, I));
  let ne = (e) => {
    if (
      !o?.() ||
      e.ctrlKey ||
      e.altKey ||
      e.metaKey ||
      e.repeat ||
      e.target?.closest?.(`input,textarea,select,[contenteditable]`)
    )
      return;
    let t = e.key.toLowerCase(),
      n = a?.();
    n !== `squads` &&
      (t === `l`
        ? (e.preventDefault(), i?.(`loadout`))
        : t === `k`
          ? (e.preventDefault(), i?.(`unlocks`))
          : t === `escape` &&
            (n === `loadout` || n === `unlocks`) &&
            (e.preventDefault(), i?.(`deploy`)));
  };
  window.addEventListener(`keydown`, ne);
  let re = e
      .querySelector(`.equipment-workbench`)
      .querySelector(`.equipment-back`),
    ie = re.onclick;
  ((re.textContent = `Deploy`),
    (re.onclick = () => {
      (ie?.(), A.querySelector(`.btn`)?.click());
    }));
  let ae = null,
    oe = null,
    L = ``,
    se = ``,
    ce = new AbortController();
  fetch(`/assets/maps/deployment/manifest-v4.json`, { signal: ce.signal })
    .then((e) => {
      if (!e.ok) throw Error(`Map imagery unavailable`);
      return e.json();
    })
    .then((e) => {
      ae = e.maps ?? e;
    })
    .catch(() => {});
  let le = () =>
    ue.find(
      (e) => t?.mapId?.startsWith(e.info.id) || t?.mapId?.includes(e.key),
    ) ?? null;
  function de() {
    let e = le()?.key ?? `compact`;
    if (!ae || L === e) return;
    L = e;
    let t = ae[e];
    if (!t) return;
    let n = new Image();
    ((n.onload = () => {
      L === e &&
        ((oe = { image: n, bounds: t.bounds, previews: t.previews }),
        (x.dataset.imagery = `ready`));
    }),
      (n.src = t.image));
  }
  return {
    get aerial() {
      return (de(), oe);
    },
    update({ label: e, loadout: i, objectives: a }) {
      (de(),
        (I.querySelector(`strong`).textContent = e),
        (u.querySelector(`h1`).textContent =
          le()?.info.name ?? `Greywater District`),
        (u.querySelector(`.deployment-mode`).textContent =
          { ffa: `FREE-FOR-ALL`, rush: `RUSH`, tdm: `TEAM DEATHMATCH` }[
            t?.match?.mode
          ] ?? `CONQUEST`));
      let o = [...(t?.players?.values?.() ?? [])];
      ((b.textContent = `${o.length} ${o.length === 1 ? `PLAYER` : `PLAYERS`} PRESENT`),
        M.replaceChildren());
      for (let e of a) {
        let n = s(`span`, ``, e.letter);
        ((n.style.color = t.teams?.[e.team]?.color ?? `#c2c8cb`),
          (n.title = `${e.name}: ${t.teams?.[e.team]?.name ?? `Neutral`}`),
          M.append(n));
      }
      let c = JSON.stringify(i);
      if (c !== se) {
        ((se = c),
          E.replaceChildren(),
          (T.textContent = (
            r.find((e) => e.id === i.classId)?.name ??
            i.classId ??
            ``
          ).toUpperCase()));
        let e = ke(i.weapons[0], i.attachments).attachments ?? {},
          t = [
            [xe, e.optic],
            [Ce, e.muzzle],
            [we, e.grip],
          ]
            .filter(([, e]) => e && e !== `standard`)
            .map(([e, t]) => e[t]?.name)
            .filter(Boolean);
        i.weapons.forEach((e, r) => {
          let a = s(`div`, `deploy-weapon`),
            o = s(`canvas`, `deploy-weapon-thumb`),
            c = s(`span`, `deploy-weapon-copy`);
          (c.append(
            s(`small`, ``, (ut[r] ?? `Weapon`).toUpperCase()),
            s(`span`, ``, ye[e]?.name ?? `Weapon`),
          ),
            !r && t.length && c.append(s(`em`, ``, t.join(` · `))),
            a.append(o, c),
            E.append(a),
            requestAnimationFrame(() => {
              try {
                n?.(o, $e(ke(e, i.attachments)));
              } catch {}
            }));
        });
        let a = s(`div`, `deploy-kit`);
        (i.gadgets.forEach((e, t) => {
          let n = s(`div`, ``);
          (n.append(
            s(`small`, ``, t ? `EQUIPMENT` : `GRENADE`),
            s(`span`, ``, dt[e] ?? e),
          ),
            a.append(n));
        }),
          E.append(a),
          C.replaceChildren());
        let o = (e, t, r, a) => {
          let o = s(`span`, `kr-cell`);
          if (a != null) {
            let e = s(`canvas`, `kr-thumb`);
            ((e._def = $e(ke(a, i.attachments))),
              o.append(e),
              requestAnimationFrame(() => {
                try {
                  n?.(e, e._def);
                } catch {}
              }));
          }
          let c = s(`span`, `kr-copy`);
          (c.append(s(`small`, ``, e), s(`strong`, ``, t)),
            (c.title = r ? `${t} · ${r}` : t),
            r && c.append(s(`em`, ``, r)),
            o.append(c),
            C.append(o));
        };
        (i.weapons.forEach((e, n) =>
          o(
            ut[n] ?? `Weapon`,
            ye[e]?.name ?? `Weapon`,
            !n && t.length ? t.join(` · `) : ``,
            e,
          ),
        ),
          i.gadgets.forEach((e, t) =>
            o(t ? `Equipment` : `Grenade`, dt[e] ?? e),
          ));
      }
      for (let e of C.querySelectorAll(`canvas:not([data-ready])`))
        if (e.clientWidth)
          try {
            n?.(e, e._def);
          } catch {}
    },
    setRank(e) {
      let t = e?.rank;
      t &&
        ((f.innerHTML = ui(Math.floor((t.level - 1) / 5))),
        (m.textContent = `LEVEL ${t.level} · ${t.name}`.toUpperCase()),
        (g.style.width = `${Math.round((t.fraction ?? 0) * 100)}%`),
        (_.textContent = t.next
          ? `${t.xp.toLocaleString()} / ${t.next.toLocaleString()} XP`
          : `${t.xp.toLocaleString()} XP · MAX`));
    },
    dispose() {
      (ce.abort(), window.removeEventListener(`keydown`, ne));
    },
  };
}
var pi = (e, t, n) => {
    if (!t?.order) return `Awaiting squad orders`;
    let r = at(e, t),
      i = e.get(e.players.get(n)?.entityId),
      a =
        r && i
          ? ` · ${Math.round(Math.hypot(r.pos[0] - i.pos[0], r.pos[2] - i.pos[2]))} m`
          : ``;
    return `${t.order.kind === `regroup` ? (r ? `REGROUP ON LEADER` : `REGROUP · Leader deploying`) : t.order.kind === `hold` ? `HOLD POSITION` : `${t.order.kind.toUpperCase()} ${r?.letter ?? ``} · ${r?.name ?? ``}`}${a} · ${t.order.acknowledged?.length ?? 0}/${t.members.length} ✓`;
  },
  X = (e, t, n) => {
    let r = document.createElement(e);
    return ((r.className = t ?? ``), n != null && (r.textContent = n), r);
  };
