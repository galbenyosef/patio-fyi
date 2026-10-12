// assets__catalog-BxMwgLUT 03 — done
// Lines 615-755 of readable/assets__catalog-BxMwgLUT.pretty.js (statement-aligned).
function se(t, { unlockAll: n = !1 } = {}) {
  let r = n;
  n ||= O;
  let i = { ...ae, ...(t && typeof t == `object` ? t : null) },
    o = Object.fromEntries(D.map((e) => [e, oe(i, e)])),
    s = D.filter((e) => o[e].every((e) => e.done)).length,
    c = Z.map(([e, t, n]) => ({ ...e, requirement: t, ...Q(...n(i)) })),
    l = {};
  for (let e of D) {
    let t = o[e].filter((e) => e.done).length;
    ((l[e] = {
      ...$(i, e),
      camos: [
        ...o[e],
        {
          ...J,
          requirement: `Unlock every base camo on this weapon`,
          ...Q(t, q.length),
        },
        { ...Y, requirement: `Gold on 3 weapons`, ...Q(s, 3) },
        {
          ...X,
          requirement: `Gold on all ${D.length} weapons`,
          ...Q(s, D.length),
        },
        ...c,
      ],
    }),
      (l[e].attachments = A.flatMap((t) =>
        a(e, t)
          .filter((e) => e !== `standard`)
          .map((n) => {
            let r = F(t, n, e),
              a = P(e, t, n);
            return {
              id: n,
              slot: t,
              name: j[t][n].name,
              requirement: `${r} kills with ${a ? `any sniper rifle` : `this weapon`}`,
              ...Q(z(i, e, t, n), r),
            };
          }),
      ).sort((e, t) => e.need - t.need)));
  }
  let u = (e) =>
      /headshot/.test(e)
        ? `headshots`
        : /streak|one round/.test(e)
          ? `streak`
          : /^Play/.test(e)
            ? `time`
            : /wins/.test(e)
              ? `wins`
              : `kills`,
    d = ie.map(([e, t, n]) => ({
      name: e,
      kind: u(t),
      requirement: t,
      ...Q(...n(i)),
    })),
    f = G(i.score),
    p = W.map((e, t) => ({
      name: e,
      tier: t,
      level: t * 5 + 1,
      requirement: t ? `Reach level ${t * 5 + 1}` : `Starting rank`,
      ...Q(f.xp, U(t * 5 + 1)),
      done: f.level >= t * 5 + 1,
    }));
  if (n)
    for (let e of [
      ...Object.values(l).flatMap((e) => [
        ...(r ? e.camos : []),
        ...e.attachments,
      ]),
      ...d,
      ...p,
    ])
      e.done = !0;
  let m = O && !r;
  return {
    row: i,
    rank: f,
    ranks: p,
    weapons: l,
    titles: d,
    golds: s,
    arsenal: Object.values(e)
      .filter((e) => e.tier && !e.retired)
      .map((e) => {
        let t = B(e.id),
          r = U(t),
          i = f.level >= t;
        return {
          id: e.id,
          name: e.name,
          tier: e.tier,
          level: t,
          requirement:
            t === 1 ? `Available from the start` : `Reach level ${t}`,
          ...Q(f.xp, r),
          earned: i,
          testingAccess: m && !i,
          done: V(e.id, f.level, n),
        };
      }),
    admin: r,
    testingAccess: m,
    sniperKills: R(i),
  };
}
var ce = (e, t, n) =>
  !n || !!e?.weapons?.[t]?.camos.find((e) => e.id === n)?.done;
function le(t) {
  let n = new Map();
  for (let e of t.arsenal ?? [])
    e.done && n.set(`weapon:${e.id}`, `Weapon · ${e.name}`);
  for (let [r, i] of Object.entries(t.weapons))
    for (let t of i.camos)
      t.done &&
        n.set(
          t.tier === `base` || t.id === `gold`
            ? `camo:${r}:${t.id}`
            : `camo:${t.id}`,
          t.tier === `base` || t.id === `gold`
            ? `${e[r].name} · ${t.name} camo`
            : `${t.name} camo`,
        );
  for (let [r, i] of Object.entries(t.weapons))
    for (let t of i.attachments ?? [])
      t.done &&
        n.set(`attachment:${r}:${t.slot}:${t.id}`, `${e[r].name} · ${t.name}`);
  for (let e of t.titles)
    e.done && n.set(`title:${e.name}`, `Title · ${e.name}`);
  for (let [e, r] of Object.entries(f))
    _(e, t) && n.set(`reticle:${e}`, `Reticle · ${r.name}`);
  return (
    n.set(`level:${t.rank.level}`, `Level ${t.rank.level} · ${t.rank.name}`),
    n
  );
}
