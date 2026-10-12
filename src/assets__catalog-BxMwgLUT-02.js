// assets__catalog-BxMwgLUT 02 — freeze
// Lines 312-614 of readable/assets__catalog-BxMwgLUT.pretty.js (statement-aligned).
var D = o,
  O = !(typeof process < `u` && {}.REAL_UNLOCKS === `1`),
  k = Object.freeze({ 1: 1, 2: 3, 3: 6, 4: 10, 5: 15, 6: 20 }),
  A = Object.freeze([`optic`, `muzzle`, `grip`, `mag`]),
  j = { optic: t, muzzle: n, grip: r, mag: i },
  M = Object.freeze({
    optic: Object.freeze({
      reflex: 10,
      scope4: 15,
      micro: 25,
      holo: 40,
      scope8: 40,
      acog: 75,
      thermal: 150,
      ...Object.fromEntries(
        [
          `compm4`,
          `romeo5`,
          `mro`,
          `hs510c`,
          `cmore`,
          `deltapoint`,
          `okp7`,
          `acro`,
        ].map((e) => [e, 10]),
      ),
      ...Object.fromEntries(
        [
          `exps2`,
          `exps32`,
          `xps2`,
          `e552`,
          `e512`,
          `e553`,
          `uh1`,
          `aems`,
          `kobra`,
        ].map((e) => [e, 40]),
      ),
      ...Object.fromEntries([`ta01`, `ta11`, `ta33`].map((e) => [e, 75])),
    }),
    muzzle: Object.freeze({ brake: 20, suppressor: 50, heavy: 100 }),
    grip: Object.freeze({ vertical: 30, angled: 65, bipod: 15 }),
    mag: Object.freeze({ short: 5, extended: 30 }),
  }),
  N = Object.freeze({ lpvo: 10, scope8: 25, thermal: 100 }),
  P = (t, n, r) => n === `optic` && e[t]?.class === `sniper` && N[r] != null,
  F = (e, t, n = null) =>
    t === `standard`
      ? 0
      : n != null && P(n, e, t)
        ? N[t]
        : (M[e]?.[t] ?? 1 / 0),
  I = (t, n) => Math.max(0, Number(t?.weapons?.[e[n]?.name]?.kills) || 0),
  L = o.filter((t) => e[t]?.class === `sniper`),
  R = (e) => L.reduce((t, n) => t + I(e, n), 0),
  z = (e, t, n, r) => (P(t, n, r) ? R(e) : I(e, t)),
  te =
    (e, t = !1) =>
    (n, r, i) =>
      t || O || z(e, n, r, i) >= F(r, i, n),
  ne = (e, t, n, r) =>
    r === `standard` ||
    O ||
    e?.admin === !0 ||
    (P(t, n, r) ? (e?.sniperKills ?? 0) : (e?.weapons?.[t]?.kills ?? 0)) >=
      F(n, r, t),
  B = (t) => (e[t] ? (e[t].unlockLevel ?? k[e[t].tier] ?? 1) : 1 / 0),
  V = (t, n = 1, r = !1) => !!e[t] && !e[t].retired && (r || O || n >= B(t)),
  H = (e, t) => V(t, e?.rank?.level ?? 1, e?.admin === !0),
  U = (e) => (e <= 1 ? 0 : Math.round(25 * (e - 1) ** 1.7) * 10),
  W = [
    `Recruit`,
    `Private`,
    `Lance Corporal`,
    `Corporal`,
    `Sergeant`,
    `Staff Sergeant`,
    `Master Sergeant`,
    `Warrant Officer`,
    `Lieutenant`,
    `Captain`,
    `Major`,
    `Lieutenant Colonel`,
    `Colonel`,
    `Brigadier`,
    `Major General`,
    `Lieutenant General`,
    `General`,
    `Field Marshal`,
    `Warlord`,
    `Legend`,
  ];
function G(e) {
  let t = Math.max(0, e | 0),
    n = 1;
  for (; n < 100 && t >= U(n + 1);) n++;
  let r = U(n),
    i = n < 100 ? U(n + 1) : null;
  return {
    level: n,
    name: W[Math.min(W.length - 1, Math.floor((n - 1) / 5))],
    xp: t,
    floor: r,
    next: i,
    fraction: i ? (t - r) / (i - r) : 1,
  };
}
var K = (e, t, n, r, i, a = null) =>
    Object.freeze({
      id: e,
      name: t,
      tier: n,
      pattern: r,
      colors: Object.freeze(i),
      finish: a,
    }),
  q = [
    [K(`olive`, `Olive Drab`, `base`, `solid`, [4870707]), `kills`, 25],
    [
      K(
        `woodland`,
        `Woodland`,
        `base`,
        `blotch`,
        [3885610, 5917230, 2041368, 7041093],
      ),
      `kills`,
      75,
    ],
    [
      K(
        `desert`,
        `Desert`,
        `base`,
        `blotch`,
        [12032616, 9072455, 13942670, 6969144],
      ),
      `kills`,
      150,
    ],
    [
      K(
        `arctic`,
        `Arctic`,
        `base`,
        `blotch`,
        [14673642, 10135472, 16185593, 6253685],
      ),
      `kills`,
      300,
    ],
    [
      K(
        `urban`,
        `Urban Digital`,
        `base`,
        `digital`,
        [7173499, 3817542, 10726320, 1908772],
      ),
      `kills`,
      500,
    ],
    [
      K(`tiger`, `Tiger`, `base`, `stripe`, [13206059, 1446412]),
      `headshots`,
      25,
    ],
    [
      K(`redtiger`, `Red Tiger`, `base`, `stripe`, [10558749, 1181704]),
      `headshots`,
      75,
    ],
    [
      K(`bloodline`, `Bloodline`, `base`, `split`, [855311, 11735578]),
      `headshots`,
      150,
    ],
  ],
  J = K(`gold`, `Gold`, `mastery`, `solid`, [14263585], {
    metalness: 1,
    roughness: 0.22,
  }),
  Y = K(`platinum`, `Platinum`, `mastery`, `solid`, [14212578], {
    metalness: 1,
    roughness: 0.16,
  }),
  X = K(
    `obsidian`,
    `Obsidian`,
    `mastery`,
    `digital`,
    [723728, 2757188, 1315868, 5974671],
    { metalness: 0.85, roughness: 0.2 },
  ),
  Z = [
    [
      K(
        `veteran`,
        `Veteran`,
        `career`,
        `blotch`,
        [3030351, 1450027, 5204614, 790807],
      ),
      `Play for 24 hours`,
      (e) => [e.seconds / 3600, 24],
    ],
    [
      K(`victor`, `Victor`, `career`, `split`, [15921902, 1925032]),
      `Win 100 rounds`,
      (e) => [e.wins, 100],
    ],
    [
      K(`reaper`, `Reaper`, `career`, `stripe`, [1052688, 8026746]),
      `Reach a 15 kill streak`,
      (e) => [e.bestStreak, 15],
    ],
    [
      K(
        `headhunter`,
        `Headhunter`,
        `career`,
        `digital`,
        [3869194, 13908522, 1508356, 9051158],
      ),
      `1,000 career headshots`,
      (e) => [e.headshots, 1e3],
    ],
    [
      K(`duelist`, `Duelist`, `career`, `split`, [1193019, 14727244]),
      `Eliminate 500 real players`,
      (e) => [e.humanKills, 500],
    ],
    [
      K(
        `officer`,
        `Officer`,
        `career`,
        `blotch`,
        [2306122, 12097082, 988710, 3952504],
      ),
      `Reach level 50`,
      (e) => [G(e.score).level, 50],
    ],
  ],
  re = Object.freeze(
    Object.fromEntries(
      [...q.map((e) => e[0]), J, Y, X, ...Z.map((e) => e[0])].map((e) => [
        e.id,
        e,
      ]),
    ),
  ),
  ie = [
    [`Rifleman`, `100 kills`, (e) => [e.kills, 100]],
    [`Hardened`, `500 kills`, (e) => [e.kills, 500]],
    [`Warfighter`, `1,000 kills`, (e) => [e.kills, 1e3]],
    [`Executioner`, `5,000 kills`, (e) => [e.kills, 5e3]],
    [`One-Man Army`, `10,000 kills`, (e) => [e.kills, 1e4]],
    [`Marksman`, `100 headshots`, (e) => [e.headshots, 100]],
    [`Deadeye`, `500 headshots`, (e) => [e.headshots, 500]],
    [`Surgeon`, `2,500 headshots`, (e) => [e.headshots, 2500]],
    [`Regular`, `Play for 1 hour`, (e) => [e.seconds / 3600, 1]],
    [`Enlisted`, `Play for 10 hours`, (e) => [e.seconds / 3600, 10]],
    [`Lifer`, `Play for 50 hours`, (e) => [e.seconds / 3600, 50]],
    [`No Life`, `Play for 100 hours`, (e) => [e.seconds / 3600, 100]],
    [`Winner`, `10 round wins`, (e) => [e.wins, 10]],
    [`Champion`, `50 round wins`, (e) => [e.wins, 50]],
    [`Unstoppable`, `10 kill streak`, (e) => [e.bestStreak, 10]],
    [`Untouchable`, `25 kill streak`, (e) => [e.bestStreak, 25]],
    [`Match MVP`, `30 kills in one round`, (e) => [e.bestRoundKills, 30]],
  ],
  Q = (e, t) => {
    let n = Math.max(0, Number(e) || 0);
    return { have: Math.min(n, t), need: t, done: n >= t };
  },
  ae = {
    kills: 0,
    deaths: 0,
    headshots: 0,
    humanKills: 0,
    seconds: 0,
    score: 0,
    rounds: 0,
    wins: 0,
    bestStreak: 0,
    bestRoundKills: 0,
    weapons: {},
  },
  $ = (t, n) => t.weapons?.[e[n]?.name] ?? { kills: 0, headshots: 0 };
function oe(t, n) {
  let r = $(t, n),
    i = e[n].class === `launcher`;
  return q.map(([e, t, n]) => {
    let a = t === `kills` || i,
      o = t === `headshots` && i ? n * 2 : n;
    return {
      ...e,
      requirement: `${o} ${a ? `kills` : `headshots`} with this weapon`,
      ...Q(a ? r.kills : r.headshots, o),
    };
  });
}
