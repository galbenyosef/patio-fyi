// assets__ui-D46k2G3Q 16 — standard
// Lines 6793-6878 of readable/assets__ui-D46k2G3Q.pretty.js (statement-aligned).
var Vr = { optic: xe, muzzle: Ce, grip: we, mag: Ee },
  Hr = { optic: `Sight`, muzzle: `Muzzle`, grip: `Grip`, mag: `Magazine` },
  Ur = {
    optic: {
      standard: `Original sight`,
      reflex: `Open 1.2× dot`,
      holo: `Protected 1.3× ring`,
      micro: `Small 1.1× window`,
      acog: `Fixed 3× view`,
      scope4: `Variable 2.5–6×`,
      lpvo: `Variable 1.5–6× · close and far`,
      scope8: `Variable 4–12×`,
      thermal: `Thermal 4–8× · sees body heat`,
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
  Wr = {
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
  Gr = {
    ar: `RIFLE`,
    carbine: `CARBINE`,
    smg: `SMG`,
    sniper: `SNIPER`,
    dmr: `DMR`,
    lmg: `LMG`,
    pistol: `PISTOL`,
    launcher: `LAUNCHER`,
  },
  Kr = {
    assault: `Push objectives`,
    sniper: `Watch long sightlines`,
    support: `Keep the squad firing: 3 ammo box`,
    engineer: `Kill and repair vehicles: 3 repair torch`,
    medic: `Revive and heal: G defibrillator, 3 medkit`,
  },
  J = (e, t, n) => {
    let r = document.createElement(e);
    return ((r.className = t ?? ``), n != null && (r.textContent = n), r);
  },
  qr = (e, t, n) => {
    let r = J(`button`, e, t);
    return ((r.type = `button`), (r.onclick = n), r);
  },
  Jr = (e) => J(`kbd`, `key`, e),
  Yr = (e) => Math.floor(e).toLocaleString();
function Xr(e, t, n, r, i = ``) {
  let a = J(`span`, `goal` + (r ? ` done` : ``));
  a.append(J(`em`, `goal-text`, e));
  let o = J(`b`, `goal-bar`),
    s = J(`i`, ``);
  return (
    (s.style.width = `${r ? 100 : Math.max(2, Math.min(100, n ? (t / n) * 100 : 0))}%`),
    o.append(s),
    a.append(
      o,
      J(`small`, `goal-count`, r ? `Earned` : `${Yr(t)} / ${Yr(n)}${i}`),
    ),
    a
  );
}
