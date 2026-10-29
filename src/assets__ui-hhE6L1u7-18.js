// assets__ui-hhE6L1u7 18 — map
// Lines 6987-7138 of readable/assets__ui-hhE6L1u7.pretty.js (statement-aligned).
var oi = { optic: ve, muzzle: we, grip: Te, mag: Ee },
  si = { optic: `Sight`, muzzle: `Muzzle`, grip: `Grip`, mag: `Magazine` },
  ci = {
    optic: {
      standard: `Original sight`,
      reflex: `1.2× dot`,
      romeo5: `1.15× compact dot`,
      micro: `1.1× open window`,
      deltapoint: `1.05× tiny window`,
      mro: `1.25× wide dot`,
      holo: `1.3× ring`,
      e553: `1.35× ring`,
      acog: `3× prism`,
      ta11: `3.5× prism`,
      ta01: `4× prism`,
      lpvo: `1.5–6× scope`,
      scope8: `4–12× scope`,
      thermal: `Thermal 4–8×`,
    },
    muzzle: {
      standard: `Balanced handling`,
      brake: `Less recoil`,
      suppressor: `Quiet · slightly less damage`,
      heavy: `Tighter spread · more range`,
    },
    grip: {
      standard: `Balanced handling`,
      vertical: `Less recoil · tighter spread`,
      angled: `Faster aiming`,
      bipod: `Rest anywhere · less kick`,
    },
    mag: {
      standard: `Factory capacity`,
      short: `Fewer rounds · quicker reload and aim`,
      extended: `More rounds · slower reload and aim`,
    },
  },
  li = {
    ar: `Rifles`,
    carbine: `Rifles`,
    smg: `SMGs`,
    lmg: `LMGs`,
    sniper: `Snipers`,
    dmr: `Snipers`,
    pistol: `Pistols`,
    launcher: `Launchers`,
    defib: `Medical`,
    tool: `Class tool`,
  },
  ui = {
    ar: `RIFLE`,
    carbine: `CARBINE`,
    smg: `SMG`,
    sniper: `SNIPER`,
    dmr: `DMR`,
    lmg: `LMG`,
    pistol: `PISTOL`,
    launcher: `LAUNCHER`,
  },
  di = new Set([`ar`, `carbine`, `smg`, `lmg`, `sniper`, `dmr`, `pistol`]),
  fi = [`DAMAGE`, `RATE`, `HANDLING`],
  pi = {
    DAMAGE: `Hardest hitting`,
    RATE: `Fastest firing`,
    HANDLING: `Best handling`,
  },
  mi = {
    DAMAGE: [`Hits harder`, `lighter hitting`],
    RATE: [`Fires faster`, `slower firing`],
    HANDLING: [`Handles quicker`, `heavier handling`],
  },
  hi = null;
function gi() {
  if (hi) return hi;
  let e = _e.filter((e) => di.has(e.class) && !e.retired),
    t = (t, n) => {
      let r = e.map(t);
      return (e) => {
        let i = t(e),
          a = 0,
          o = 0;
        for (let e of r) e < i ? a++ : e === i && o++;
        let s = (a + (o - 1) / 2) / Math.max(1, r.length - 1);
        return n ? 1 - s : s;
      };
    },
    n = t((e) => e.damage ?? 0),
    r = t((e) => Xn(e) ?? 0),
    i = t((e) => e.ads ?? 0, !0),
    a = t((e) => e.recoil?.[1] ?? 0, !0),
    o = (e) => Math.max(1, Math.min(10, 1 + Math.round(e * 9)));
  hi = new Map(
    e.map((e) => [
      e.id,
      { DAMAGE: o(n(e)), RATE: o(r(e)), HANDLING: o((i(e) + a(e)) / 2) },
    ]),
  );
  for (let t of e) {
    let n = hi.get(t.id),
      r = e
        .filter((e) => e.class === t.class && e.id !== t.id)
        .map((e) => hi.get(e.id)),
      i = r.length > 1 && fi.find((e) => r.every((t) => t[e] < n[e])),
      a = (ui[t.class] ?? t.class)
        .toLowerCase()
        .replace(/^(smg|lmg|dmr)$/, (e) => e.toUpperCase()),
      o = r.length < 2,
      s = o ? `guns` : a + `s`,
      c = (e) => (o ? 5.5 : r.reduce((t, n) => t + n[e], 0) / r.length),
      l = fi.map((e) => [e, n[e] - c(e)]).sort((e, t) => t[1] - e[1]),
      [u, d] = [l[0], l.at(-1)];
    n.line = i
      ? `${pi[i]} ${a}`
      : u[1] >= 0.75
        ? `${mi[u[0]][0]} than most ${s}${d[1] <= -0.75 ? ` · ${mi[d[0]][1]}` : ``}`
        : d[1] <= -0.75
          ? `${mi[d[0]][1].replace(/^./, (e) => e.toUpperCase())} than most ${s}`
          : `Standard ${a}`;
  }
  return hi;
}
var _i = {
    assault: `Take ground: ARs or SMGs, frag and limited Kite`,
    sniper: `Overwatch and squad flanks: 3 respawn beacon`,
    support: `Hold ground: aim prone or on cover for bipod · 4 ammo box / teammate handoff · 5 repair torch`,
    medic: `Keep the push alive: G revive · O smoke · 3 medkit`,
  },
  J = (e, t, n) => {
    let r = document.createElement(e);
    return ((r.className = t ?? ``), n != null && (r.textContent = n), r);
  },
  vi = (e, t, n) => {
    let r = J(`button`, e, t);
    return ((r.type = `button`), (r.onclick = n), r);
  },
  yi = (e) => J(`kbd`, `key`, e),
  bi = (e) => Math.floor(e).toLocaleString();
function xi(e, t, n, r, i = ``) {
  let a = J(`span`, `goal` + (r ? ` done` : ``));
  a.append(J(`em`, `goal-text`, e));
  let o = J(`b`, `goal-bar`),
    s = J(`i`, ``);
  return (
    (s.style.width = `${r ? 100 : Math.max(2, Math.min(100, n ? (t / n) * 100 : 0))}%`),
    o.append(s),
    a.append(
      o,
      J(`small`, `goal-count`, r ? `Earned` : `${bi(t)} / ${bi(n)}${i}`),
    ),
    a
  );
}
