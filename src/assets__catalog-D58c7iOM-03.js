// assets__catalog-D58c7iOM 03 — done
// Lines 595-735 of readable/assets__catalog-D58c7iOM.pretty.js (statement-aligned).
function se(e, { unlockAll: r = !1 } = {}) {
  let i = r;
  r ||= O;
  let a = { ...ae, ...(e && typeof e == `object` ? e : null) },
    o = Object.fromEntries(D.map((e) => [e, oe(a, e)])),
    s = D.filter((e) => o[e].every((e) => e.done)).length,
    c = Z.map(([e, t, n]) => ({ ...e, requirement: t, ...Q(...n(a)) })),
    l = {};
  for (let e of D) {
    let n = o[e].filter((e) => e.done).length;
    ((l[e] = {
      ...$(a, e),
      camos: [
        ...o[e],
        {
          ...J,
          requirement: `Unlock every base camo on this weapon`,
          ...Q(n, q.length),
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
      (l[e].attachments = A.flatMap((n) =>
        t(e, n)
          .filter((e) => e !== `standard`)
          .map((t) => {
            let r = F(n, t, e),
              i = P(e, n, t);
            return {
              id: t,
              slot: n,
              name: j[n][t].name,
              requirement: `${r} kills with ${i ? `any sniper rifle` : `this weapon`}`,
              ...Q(z(a, e, n, t), r),
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
      ...Q(...n(a)),
    })),
    f = G(a.score),
    p = W.map((e, t) => ({
      name: e,
      tier: t,
      level: t * 5 + 1,
      requirement: t ? `Reach level ${t * 5 + 1}` : `Starting rank`,
      ...Q(f.xp, U(t * 5 + 1)),
      done: f.level >= t * 5 + 1,
    }));
  if (r)
    for (let e of [
      ...Object.values(l).flatMap((e) => [
        ...(i ? e.camos : []),
        ...e.attachments,
      ]),
      ...d,
      ...p,
    ])
      e.done = !0;
  let m = O && !i;
  return {
    row: a,
    rank: f,
    ranks: p,
    weapons: l,
    titles: d,
    golds: s,
    arsenal: Object.values(n)
      .filter((e) => e.tier && !e.retired)
      .map((e) => {
        let t = B(e.id),
          n = U(t),
          i = f.level >= t;
        return {
          id: e.id,
          name: e.name,
          tier: e.tier,
          level: t,
          requirement:
            t === 1 ? `Available from the start` : `Reach level ${t}`,
          ...Q(f.xp, n),
          earned: i,
          testingAccess: m && !i,
          done: V(e.id, f.level, r),
        };
      }),
    admin: i,
    testingAccess: m,
    sniperKills: R(a),
  };
}
var ce = (e, t, n) =>
  !n || !!e?.weapons?.[t]?.camos.find((e) => e.id === n)?.done;
function le(e) {
  let t = new Map();
  for (let n of e.arsenal ?? [])
    n.done && t.set(`weapon:${n.id}`, `Weapon · ${n.name}`);
  for (let [r, i] of Object.entries(e.weapons))
    for (let e of i.camos)
      e.done &&
        t.set(
          e.tier === `base` || e.id === `gold`
            ? `camo:${r}:${e.id}`
            : `camo:${e.id}`,
          e.tier === `base` || e.id === `gold`
            ? `${n[r].name} · ${e.name} camo`
            : `${e.name} camo`,
        );
  for (let [r, i] of Object.entries(e.weapons))
    for (let e of i.attachments ?? [])
      e.done &&
        t.set(`attachment:${r}:${e.slot}:${e.id}`, `${n[r].name} · ${e.name}`);
  for (let n of e.titles)
    n.done && t.set(`title:${n.name}`, `Title · ${n.name}`);
  for (let [n, r] of Object.entries(f))
    _(n, e) && t.set(`reticle:${n}`, `Reticle · ${r.name}`);
  return (
    t.set(`level:${e.rank.level}`, `Level ${e.rank.level} · ${e.rank.name}`),
    t
  );
}
