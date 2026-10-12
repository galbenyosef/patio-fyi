// assets__ui-D46k2G3Q 19 — appendchild
// Lines 8260-8704 of readable/assets__ui-D46k2G3Q.pretty.js (statement-aligned).
function di(e, t, n, { onChange: r } = {}) {
  let i = Be(null),
    a = null,
    o = !1,
    s = !1,
    c = null,
    l = `weapons`,
    u = Ue[0],
    d = null,
    f = null,
    p = 0,
    m = null,
    h = t.appendChild(Y(`section`, `unlocks-panel`));
  ((h.hidden = !0), h.setAttribute(`aria-label`, `Unlocks catalogue`));
  let g = h.appendChild(Y(`header`, `unlocks-summary`)),
    _ = h.appendChild(Y(`nav`, `unlocks-nav`));
  _.setAttribute(`aria-label`, `Unlock categories`);
  let v = h.appendChild(Y(`div`, `unlocks-body`)),
    y = n.appendChild(Y(`div`, `career-banners`));
  y.setAttribute(`role`, `status`);
  function b(e, t = `UNLOCKED`) {
    let n = y.appendChild(Y(`div`, `career-banner`));
    for (
      n.append(Y(`small`, ``, t), Y(`strong`, ``, e)),
        setTimeout(() => n.remove(), ri);
      y.children.length > 4;
    )
      y.firstChild.remove();
  }
  function x(
    e,
    t,
    {
      onPick: n = null,
      selected: r = !1,
      note: i = null,
      state: a = null,
      progressDone: o = e.done,
    } = {},
  ) {
    let s = n ? ai(`unlock-card`, n) : Y(`div`, `unlock-card`);
    (s.classList.toggle(`done`, e.done),
      s.classList.toggle(`selected`, r),
      n && s.setAttribute(`aria-pressed`, String(r)));
    let c = s.appendChild(Y(`div`, `unlock-art`));
    (c.append(t),
      c.append(
        Y(`span`, `unlock-state`, a ?? (e.done ? `✓ UNLOCKED` : `LOCKED`)),
      ),
      s.append(Y(`strong`, ``, e.name), Y(`p`, ``, e.requirement)));
    let l = s.appendChild(Y(`i`, `unlock-bar`));
    return (
      (l.appendChild(Y(`u`)).style.width =
        `${o ? 100 : Math.min(100, (e.have / e.need) * 100 || 0)}%`),
      s.append(
        Y(
          `small`,
          ``,
          i ??
            (e.done
              ? e.have < e.need
                ? `Unlocked · admin`
                : `Complete`
              : `${si(e.have)} / ${si(e.need)}`),
        ),
      ),
      s
    );
  }
  let S = (e) => {
      let t = Y(`div`, `camo-art`);
      return ((t.style.background = nt(e)), t);
    },
    C = (e) => {
      let t = Y(`div`, `rank-art`);
      return ((t.innerHTML = ui(e.tier)), t);
    },
    w = (e) => Y(`div`, `title-art kind-${e.kind}`, e.name),
    T = () => {
      let e = i,
        t = Object.values(e.weapons).flatMap((e) =>
          e.camos.filter((e) => e.tier === `base` || e.id === `gold`),
        ),
        n = e.weapons[Ue[0]].camos.filter(
          (e) => e.tier !== `base` && e.id !== `gold`,
        );
      return {
        weapons: e.arsenal ?? [],
        camos: [...t, ...n],
        ranks: e.ranks,
        titles: e.titles,
      };
    };
  function E(t) {
    let n = ++p,
      r = $e(ke(u, Se(null)), d === `factory` ? null : d);
    ((f ??= Bt(e)),
      (t.dataset.ready = `false`),
      f.weapon(t, r, { yaw: 0.3 }).catch((t) => {
        n === p && e.warn?.(`Unlocks preview`, String(t));
      }));
  }
  function D() {
    let e = i.weapons[u],
      t = e.camos.filter((e) => e.tier === `base` || e.id === `gold`),
      n = e.camos.filter((e) => !t.includes(e));
    e.camos.some((e) => e.id === d) ||
      (d = et(u) ?? t.find((e) => !e.done)?.id ?? t[0].id);
    let r = v.appendChild(Y(`div`, `unlocks-weapons`));
    for (let e of Ue) {
      let t = i.weapons[e].camos,
        n = r.appendChild(
          ai(e === u ? `selected` : ``, () => {
            ((u = e), (d = null), N());
          }),
        ),
        a = i.weapons[e].attachments;
      (n.append(
        Y(`strong`, ``, ye[e].name),
        Y(
          `small`,
          ``,
          `${t.filter((e) => e.done).length} / ${t.length} camos · ${a.filter((e) => e.done).length} / ${a.length} attachments · ${i.weapons[e].kills.toLocaleString()} kills`,
        ),
      ),
        n.setAttribute(`aria-pressed`, String(e === u)));
    }
    let a = v.appendChild(Y(`div`, `unlocks-stage`)),
      o = a.appendChild(Y(`canvas`));
    o.setAttribute(`role`, `img`);
    let c = e.camos.find((e) => e.id === d),
      l = a.appendChild(Y(`div`, `unlocks-caption`));
    if (
      (o.setAttribute(`aria-label`, `${ye[u].name} in ${c.name}`),
      l.append(
        Y(`small`, ``, c.done ? `UNLOCKED` : `LOCKED · PREVIEW`),
        Y(`strong`, ``, `${ye[u].name} · ${c.name}`),
        Y(
          `span`,
          ``,
          `${e.kills.toLocaleString()} kills · ${e.headshots.toLocaleString()} headshots with this weapon`,
        ),
      ),
      c.done)
    ) {
      let e = (et(u) ?? null) === c.id,
        t = l.appendChild(
          ai(`unlocks-equip`, () => {
            (Qe(u, e ? null : c.id), N());
          }),
        );
      t.textContent = e ? `Equipped · remove` : `Equip camo`;
    }
    for (let [e, r] of [
      [`This weapon`, t],
      [`Every weapon · mastery and career`, n],
    ]) {
      v.append(Y(`h3`, ``, e));
      let t = v.appendChild(Y(`div`, `unlocks-grid`));
      for (let e of r) {
        let n = t.appendChild(
          x(e, S(e), {
            selected: e.id === d,
            onPick: () => {
              ((d = e.id), N());
            },
          }),
        );
        ((n.dataset.camo = e.id),
          et(u) === e.id &&
            (n.querySelector(`.unlock-state`).textContent = `✓ EQUIPPED`));
      }
    }
    v.append(
      Y(
        `h3`,
        ``,
        `Attachments · earned with kills on this weapon, fitted in Loadout`,
      ),
    );
    let f = v.appendChild(Y(`div`, `unlocks-grid`));
    for (let t of e.attachments) {
      let e = f.appendChild(
        x(
          t,
          Y(
            `div`,
            `title-art kind-kills`,
            t.slot === `optic` ? `SIGHT` : t.slot.toUpperCase(),
          ),
        ),
      );
      e.dataset.attachment = `${t.slot}:${t.id}`;
    }
    ((m = o),
      requestAnimationFrame(() => {
        s && o.isConnected && E(o);
      }));
  }
  function O() {
    let e = i.rank,
      t = v.appendChild(Y(`div`, `unlocks-grid`));
    for (let n of i.ranks) {
      let r = n.tier === Math.floor((e.level - 1) / 5),
        i = t.appendChild(
          x(n, C(n), {
            note: n.done
              ? n.have < n.need
                ? `Unlocked · admin`
                : r
                  ? `Current rank · level ${e.level}`
                  : `Earned at level ${n.level}`
              : `${si(n.have)} / ${si(n.need)} XP`,
          }),
        );
      (i.classList.toggle(`selected`, r), (i.dataset.rank = n.tier));
    }
  }
  function k(e) {
    let t = Y(`div`, `arsenal-art`);
    return (
      t.append(
        Y(`small`, ``, `TIER ${e.tier}`),
        Y(`strong`, ``, ci[ye[e.id]?.class] ?? `WEAPON`),
        Y(`span`, ``, `LEVEL ${e.level}`),
      ),
      t
    );
  }
  function A() {
    v.append(
      Y(
        `h3`,
        ``,
        `Earn weapons with career XP. Weapons unlock at the stated level; each gun’s attachments are earned with kills on that gun.${i.testingAccess ? ` Testing access is enabled; available does not mean earned.` : ``}`,
      ),
    );
    let e = v.appendChild(Y(`div`, `unlocks-grid arsenal-grid`));
    for (let t of i.arsenal ?? []) {
      let n = Yn(t, { admin: i.admin }),
        r = e.appendChild(x(t, k(t), { ...n, progressDone: t.earned }));
      ((r.dataset.weapon = t.id),
        (r.dataset.access = t.testingAccess
          ? `testing`
          : t.earned
            ? `earned`
            : i.admin && t.done
              ? `admin`
              : `locked`));
    }
  }
  function j(e) {
    c = e;
    try {
      e ? localStorage.setItem(ii, e) : localStorage.removeItem(ii);
    } catch {}
    (M(), N());
  }
  function M() {
    e.modules.get(`netcode`)?.sendRpc?.(`career:title`, c);
  }
  function ee() {
    v.append(
      Y(
        `h3`,
        ``,
        `Pick an unlocked title to show beside your name on the scoreboard and kill cam`,
      ),
    );
    let e = v.appendChild(Y(`div`, `unlocks-grid`));
    for (let t of i.titles) {
      let n = c === t.name,
        r = e.appendChild(
          x(
            t,
            w(t),
            t.done ? { selected: n, onPick: () => j(n ? null : t.name) } : {},
          ),
        );
      ((r.dataset.title = t.name),
        n && (r.querySelector(`.unlock-state`).textContent = `✓ WORN`));
    }
  }
  function N() {
    if (!s || o) return;
    let { row: e, rank: t, golds: n } = i,
      r = T(),
      a = v.scrollTop;
    g.replaceChildren();
    let c = g.appendChild(Y(`div`, `rank-art big`));
    c.innerHTML = ui(Math.floor((t.level - 1) / 5));
    let u = g.appendChild(Y(`div`, `unlocks-rank`));
    (u.append(
      Y(
        `small`,
        ``,
        `LEVEL ${t.level}${i.admin ? ` · ADMIN ACCESS` : i.testingAccess ? ` · TESTING ACCESS` : ``}`,
      ),
      Y(`strong`, ``, t.name),
    ),
      (u.appendChild(Y(`i`, `unlock-bar`)).appendChild(Y(`u`)).style.width =
        `${Math.round(t.fraction * 100)}%`),
      u.append(
        Y(
          `span`,
          ``,
          t.next
            ? `${t.xp.toLocaleString()} / ${t.next.toLocaleString()} XP to level ${t.level + 1} · match score is XP`
            : `${t.xp.toLocaleString()} XP · maximum level`,
        ),
      ));
    let d = g.appendChild(Y(`div`, `career-tiles`));
    for (let [t, r] of [
      [`Kills`, e.kills.toLocaleString()],
      [`Headshots`, e.headshots.toLocaleString()],
      [`K/D`, e.deaths ? (e.kills / e.deaths).toFixed(2) : String(e.kills)],
      [`Time played`, oi(e.seconds)],
      [`Round wins`, `${e.wins} / ${e.rounds}`],
      [`Best streak`, e.bestStreak],
      [`Gold weapons`, `${n} / ${Ue.length}`],
    ])
      d.appendChild(Y(`div`)).append(Y(`small`, ``, t), Y(`strong`, ``, r));
    _.replaceChildren();
    for (let [e, t] of [
      [`weapons`, `Weapons`],
      [`camos`, `Camos & attachments`],
      [`ranks`, `Ranks`],
      [`titles`, `Titles`],
    ]) {
      let n = r[e],
        a = _.appendChild(
          ai(e === l ? `selected` : ``, () => {
            ((l = e), (v.scrollTop = 0), N());
          }),
        ),
        o =
          e === `weapons` && i.testingAccess
            ? `${n.filter((e) => e.earned).length} / ${n.length} earned`
            : `${n.filter((e) => e.done).length} / ${n.length} unlocked`;
      (a.append(Y(`strong`, ``, t), Y(`small`, ``, o)),
        (a.dataset.section = e),
        a.setAttribute(`aria-pressed`, String(e === l)));
    }
    (v.replaceChildren(),
      (v.dataset.section = l),
      { weapons: A, camos: D, ranks: O, titles: ee }[l](),
      (v.scrollTop = a));
  }
  function P(t, { admin: n = !1 } = {}) {
    i = Be(t, { unlockAll: n });
    let o = Ne(i);
    if (a) {
      let t = [...o].filter(([e]) => !a.has(e)),
        n = t.filter(([e]) => e.startsWith(`weapon:`)),
        r = t.filter(([e]) => e.startsWith(`attachment:`));
      for (let [n, a] of t) {
        if (n.startsWith(`camo:`)) {
          let [, t, r] = n.split(`:`),
            a = r ?? t,
            o = r == null ? Object.keys(i.weapons)[0] : t,
            s = i.weapons[o]?.camos.find((e) => e.id === a);
          if (s) {
            e.events.emit(`ui:camo-unlocked`, {
              camo: s,
              weapon: r == null ? null : (ye[o]?.name ?? null),
            });
            continue;
          }
        }
        !n.startsWith(`weapon:`) &&
          !(n.startsWith(`attachment:`) && r.length > 2) &&
          b(
            a,
            n.startsWith(`attachment:`) ? `ATTACHMENT UNLOCKED` : `UNLOCKED`,
          );
      }
      (r.length > 2 &&
        b(
          `${r.length} new attachments · fit them in Loadout`,
          `ATTACHMENTS UNLOCKED`,
        ),
        n.length &&
          b(
            n.length === 1
              ? n[0][1]
              : `${n.length} new weapons · view them in Unlocks`,
          ));
    }
    ((a = o), F === null && (F = i.rank.xp));
    for (let e of Ue) je(i, e, et(e)) || Qe(e, null);
    (c && !i.titles.find((e) => e.name === c)?.done && j(null),
      r?.(i, { ready: !0 }),
      N());
  }
  try {
    c = localStorage.getItem(ii);
  } catch {}
  let F = null,
    te = [
      e.events.on(`match:phase`, (e) => {
        if (
          ((e?.phase === `live` || F === null) && (F = i.rank.xp),
          e?.phase === `ended` && a)
        ) {
          let e = i.rank;
          b(
            `+${Math.max(0, e.xp - F).toLocaleString()} XP · Level ${e.level} ${e.name}${e.next ? ` · ${(e.next - e.xp).toLocaleString()} XP to level ${e.level + 1}` : ``}`,
            `ROUND COMPLETE`,
          );
        }
      }),
      e.events.on(`career:progress`, (e) =>
        P(e?.stats ?? null, { admin: e?.admin === !0 }),
      ),
      e.events.on(`career:cards`, ti),
      e.events.on(`player:local`, M),
    ],
    I = e.modules.get(`netcode`)?.getClient?.();
  I &&
    te.push(
      I.on(`connected`, () => {
        (ni(), M());
      }),
    );
  let ne = new ResizeObserver(() => {
    s && l === `camos` && m?.isConnected && E(m);
  });
  return (
    ne.observe(h),
    r?.(i, { ready: !1 }),
    {
      root: h,
      get: () => i,
      accept: P,
      show(e) {
        ((s = e), (h.hidden = !e), e && N());
      },
      dispose() {
        o = !0;
        for (let e of te) e();
        (ne.disconnect(), f?.dispose(), h.remove(), y.remove());
      },
    }
  );
}
