// assets__ui-hhE6L1u7 21 — appendchild
// Lines 8552-9078 of readable/assets__ui-hhE6L1u7.pretty.js (statement-aligned).
function Ri(e, t, n, { onChange: r } = {}) {
  let i = ze(null),
    a = null,
    o = !1,
    s = !1,
    c = null,
    l = `weapons`,
    u = He[0],
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
        setTimeout(() => n.remove(), Oi);
      y.children.length > 4;
    )
      y.firstChild.remove();
  }
  let x = [],
    S = !1;
  function C(
    e,
    {
      art: t = null,
      tag: n = null,
      kicker: r,
      title: i,
      sub: a,
      foot: o = null,
    },
  ) {
    (x.push({ kind: e, art: t, tag: n, kicker: r, title: i, sub: a, foot: o }),
      S || w());
  }
  function w() {
    let e = x.shift();
    if (((S = !!e), !e || o)) {
      y.style.top = ``;
      return;
    }
    let t = n.appendChild(Y(`div`, `career-showcase ${e.kind}`));
    if ((t.setAttribute(`role`, `status`), e.art)) {
      let n = t.appendChild(Y(`div`, `showcase-art`));
      n.innerHTML = e.art;
    }
    (t.append(Y(`small`, `showcase-kicker`, e.kicker)),
      e.tag && t.append(Y(`span`, `showcase-tag`, e.tag)),
      t.append(Y(`strong`, `showcase-title`, e.title), Y(`i`, `showcase-rule`)),
      e.sub && t.append(Y(`span`, `showcase-sub`, e.sub)),
      e.foot && t.append(Y(`span`, `showcase-foot`, e.foot)),
      (y.style.top = `calc(13vh + ${t.offsetHeight + 14}px)`),
      setTimeout(() => t.classList.add(`out`), 4200),
      setTimeout(() => {
        (t.remove(), w());
      }, ki));
  }
  function T(
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
    let s = n ? ji(`unlock-card`, n) : Y(`div`, `unlock-card`);
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
              : `${Ni(e.have)} / ${Ni(e.need)}`),
        ),
      ),
      s
    );
  }
  let E = (e) => {
      let t = Y(`div`, `camo-art`);
      return ((t.style.background = Xe(e)), t);
    },
    D = (e) => {
      let t = Y(`div`, `rank-art`);
      return ((t.innerHTML = Li(e.tier)), t);
    },
    O = (e) => Y(`div`, `title-art kind-${e.kind}`, e.name),
    k = () => {
      let e = i,
        t = Object.values(e.weapons).flatMap((e) =>
          e.camos.filter((e) => e.tier === `base` || e.id === `gold`),
        ),
        n = e.weapons[He[0]].camos.filter(
          (e) => e.tier !== `base` && e.id !== `gold`,
        );
      return {
        weapons: e.arsenal ?? [],
        camos: [...t, ...n],
        ranks: e.ranks,
        titles: e.titles,
      };
    };
  function A(t) {
    let n = ++p,
      r = Qe(be(u, xe(null)), d === `factory` ? null : d);
    ((f ??= qt(e)),
      (t.dataset.ready = `false`),
      f.weapon(t, r, { yaw: 0.3 }).catch((t) => {
        n === p && e.warn?.(`Unlocks preview`, String(t));
      }));
  }
  function j() {
    let e = i.weapons[u],
      t = e.camos.filter((e) => e.tier === `base` || e.id === `gold`),
      n = e.camos.filter((e) => !t.includes(e));
    e.camos.some((e) => e.id === d) ||
      (d = tt(u) ?? t.find((e) => !e.done)?.id ?? t[0].id);
    let r = v.appendChild(Y(`div`, `unlocks-weapons`));
    for (let e of He) {
      let t = i.weapons[e].camos,
        n = r.appendChild(
          ji(e === u ? `selected` : ``, () => {
            ((u = e), (d = null), I());
          }),
        ),
        a = i.weapons[e].attachments;
      (n.append(
        Y(`strong`, ``, Se[e].name),
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
      (o.setAttribute(`aria-label`, `${Se[u].name} in ${c.name}`),
      l.append(
        Y(`small`, ``, c.done ? `UNLOCKED` : `LOCKED · PREVIEW`),
        Y(`strong`, ``, `${Se[u].name} · ${c.name}`),
        Y(
          `span`,
          ``,
          `${e.kills.toLocaleString()} kills · ${e.headshots.toLocaleString()} headshots with this weapon`,
        ),
      ),
      c.done)
    ) {
      let e = (tt(u) ?? null) === c.id,
        t = l.appendChild(
          ji(`unlocks-equip`, () => {
            (Ze(u, e ? null : c.id), I());
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
          T(e, E(e), {
            selected: e.id === d,
            onPick: () => {
              ((d = e.id), I());
            },
          }),
        );
        ((n.dataset.camo = e.id),
          tt(u) === e.id &&
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
        T(
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
        s && o.isConnected && A(o);
      }));
  }
  function M() {
    let e = i.rank,
      t = v.appendChild(Y(`div`, `unlocks-grid`));
    for (let n of i.ranks) {
      let r = n.tier === Math.floor((e.level - 1) / 5),
        i = t.appendChild(
          T(n, D(n), {
            note: n.done
              ? n.have < n.need
                ? `Unlocked · admin`
                : r
                  ? `Current rank · level ${e.level}`
                  : `Earned at level ${n.level}`
              : `${Ni(n.have)} / ${Ni(n.need)} XP`,
          }),
        );
      (i.classList.toggle(`selected`, r), (i.dataset.rank = n.tier));
    }
  }
  function N(e) {
    let t = Y(`div`, `arsenal-art`);
    return (
      t.append(
        Y(`small`, ``, `TIER ${e.tier}`),
        Y(`strong`, ``, Fi[Se[e.id]?.class] ?? `WEAPON`),
        Y(`span`, ``, `LEVEL ${e.level}`),
      ),
      t
    );
  }
  function P() {
    v.append(
      Y(
        `h3`,
        ``,
        `Earn weapons with career XP. Weapons unlock at the stated level; each gun’s attachments are earned with kills on that gun.${i.testingAccess ? ` Testing access is enabled; available does not mean earned.` : ``}`,
      ),
    );
    let e = v.appendChild(Y(`div`, `unlocks-grid arsenal-grid`));
    for (let t of i.arsenal ?? []) {
      let n = mr(t, { admin: i.admin }),
        r = e.appendChild(T(t, N(t), { ...n, progressDone: t.earned }));
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
  function F(e) {
    c = e;
    try {
      e ? localStorage.setItem(Ai, e) : localStorage.removeItem(Ai);
    } catch {}
    (ee(), I());
  }
  function ee() {
    e.modules.get(`netcode`)?.sendRpc?.(`career:title`, c);
  }
  function te() {
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
          T(
            t,
            O(t),
            t.done ? { selected: n, onPick: () => F(n ? null : t.name) } : {},
          ),
        );
      ((r.dataset.title = t.name),
        n && (r.querySelector(`.unlock-state`).textContent = `✓ WORN`));
    }
  }
  function I() {
    if (!s || o) return;
    let { row: e, rank: t, golds: n } = i,
      r = k(),
      a = v.scrollTop;
    g.replaceChildren();
    let c = g.appendChild(Y(`div`, `rank-art big`));
    c.innerHTML = Li(Math.floor((t.level - 1) / 5));
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
      [`Time played`, Mi(e.seconds)],
      [`Round wins`, `${e.wins} / ${e.rounds}`],
      [`Best streak`, e.bestStreak],
      [`Gold weapons`, `${n} / ${He.length}`],
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
          ji(e === l ? `selected` : ``, () => {
            ((l = e), (v.scrollTop = 0), I());
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
      { weapons: P, camos: j, ranks: M, titles: te }[l](),
      (v.scrollTop = a));
  }
  function ne(t, { admin: n = !1 } = {}) {
    i = ze(t, { unlockAll: n });
    let o = Me(i);
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
              weapon: r == null ? null : (Se[o]?.name ?? null),
            });
            continue;
          }
        }
        if (n.startsWith(`level:`)) {
          let e = i.rank,
            t = e.level > 1 && (e.level - 1) % 5 == 0,
            n = Li(Math.min(i.ranks.length - 1, Math.floor((e.level - 1) / 5))),
            r = e.next
              ? `${(e.next - e.xp).toLocaleString()} XP to level ${e.level + 1}`
              : `Top level reached`;
          C(
            t ? `level rank` : `level`,
            t
              ? {
                  art: n,
                  kicker: `NEW RANK`,
                  title: e.name.toUpperCase(),
                  sub: `Level ${e.level}`,
                  foot: r,
                }
              : {
                  art: n,
                  kicker: `LEVEL UP`,
                  title: `LEVEL ${e.level}`,
                  sub: e.name,
                  foot: r,
                },
          );
          continue;
        }
        !n.startsWith(`weapon:`) &&
          !(n.startsWith(`attachment:`) && r.length > 2) &&
          b(
            a,
            n.startsWith(`attachment:`) ? `ATTACHMENT UNLOCKED` : `UNLOCKED`,
          );
      }
      if (
        (r.length > 2 &&
          b(
            `${r.length} new attachments · fit them in Loadout`,
            `ATTACHMENTS UNLOCKED`,
          ),
        n.length === 1)
      ) {
        let e = Se[n[0][0].slice(7)];
        C(`weapon`, {
          art: Pi,
          kicker: `NEW WEAPON UNLOCKED`,
          tag: Fi[e?.class] ?? `WEAPON`,
          title: e?.name ?? n[0][1],
          sub: `Equip it in Loadout`,
        });
      } else
        n.length &&
          C(`weapon`, {
            art: Pi,
            kicker: `NEW WEAPONS UNLOCKED`,
            title:
              n.length < 4
                ? n.map(([e, t]) => Se[e.slice(7)]?.name ?? t).join(`
`)
                : `${n.length} WEAPONS`,
            sub: `view them in Unlocks`,
          });
    }
    ((a = o), L === null && (L = i.rank.xp));
    for (let e of He) Ae(i, e, tt(e)) || Ze(e, null);
    (c && !i.titles.find((e) => e.name === c)?.done && F(null),
      r?.(i, { ready: !0 }),
      I());
  }
  try {
    c = localStorage.getItem(Ai);
  } catch {}
  let L = null,
    R = [
      e.events.on(`match:phase`, (e) => {
        if (
          ((e?.phase === `live` || L === null) && (L = i.rank.xp),
          e?.phase === `ended` && a)
        ) {
          let e = i.rank;
          b(
            `+${Math.max(0, e.xp - L).toLocaleString()} XP · Level ${e.level} ${e.name}${e.next ? ` · ${(e.next - e.xp).toLocaleString()} XP to level ${e.level + 1}` : ``}`,
            `ROUND COMPLETE`,
          );
        }
      }),
      e.events.on(`career:progress`, (e) =>
        ne(e?.stats ?? null, { admin: e?.admin === !0 }),
      ),
      e.events.on(`career:cards`, Ei),
      e.events.on(`player:local`, ee),
    ],
    z = e.modules.get(`netcode`)?.getClient?.();
  z &&
    R.push(
      z.on(`connected`, () => {
        (Di(), ee());
      }),
    );
  let re = new ResizeObserver(() => {
    s && l === `camos` && m?.isConnected && A(m);
  });
  return (
    re.observe(h),
    r?.(i, { ready: !1 }),
    {
      root: h,
      get: () => i,
      accept: ne,
      show(e) {
        ((s = e), (h.hidden = !e), e && I());
      },
      dispose() {
        o = !0;
        for (let e of R) e();
        (re.disconnect(), f?.dispose(), h.remove(), y.remove());
      },
    }
  );
}
