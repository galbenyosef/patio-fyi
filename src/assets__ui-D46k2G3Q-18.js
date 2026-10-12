// assets__ui-D46k2G3Q 18 — math
// Lines 8197-8259 of readable/assets__ui-D46k2G3Q.pretty.js (statement-aligned).
var Qr = new Map(),
  $r = new Set(),
  ei = (e) => Qr.get(e) ?? null;
function ti(e) {
  if (e && typeof e == `object`) {
    for (let [t, n] of Object.entries(e))
      n &&
        Number.isInteger(n.level) &&
        Qr.set(Number(t), {
          level: n.level,
          title: typeof n.title == `string` ? n.title : null,
          bot: !!n.bot,
        });
    for (let e of $r) e();
  }
}
var ni = () => Qr.clear(),
  ri = 5e3,
  ii = `salient.title.v1`,
  Y = (e, t, n) => {
    let r = document.createElement(e);
    return ((r.className = t ?? ``), n != null && (r.textContent = n), r);
  },
  ai = (e, t) => {
    let n = Y(`button`, e);
    return ((n.type = `button`), (n.onclick = t), n);
  },
  oi = (e) =>
    e >= 3600 ? `${(e / 3600).toFixed(1)} h` : `${Math.floor(e / 60)} min`,
  si = (e) =>
    (e >= 100 || Number.isInteger(e)
      ? Math.floor(e)
      : Math.floor(e * 10) / 10
    ).toLocaleString(),
  ci = {
    ar: `RIFLE`,
    carbine: `CARBINE`,
    smg: `SMG`,
    sniper: `SNIPER`,
    dmr: `DMR`,
    lmg: `LMG`,
    pistol: `PISTOL`,
    launcher: `LAUNCHER`,
  },
  li = [`#c58b52`, `#cfd6dc`, `#e9bd55`, `#e9bd55`];
function ui(e) {
  let t = Math.min(3, Math.floor(e / 5)),
    n = (e % 5) + 1,
    r = li[t],
    i = ``;
  if (t < 2)
    for (let e = 0; e < n; e++) {
      let t = 29 - n * 5 + e * 10;
      i += `<path d="M14 ${t + 9} L32 ${t} L50 ${t + 9}" fill="none" stroke="${r}" stroke-width="4.5" stroke-linejoin="miter"/>`;
    }
  else
    for (let e = 0; e < n; e++) {
      let t = 32 + (e - (n - 1) / 2) * (n > 3 ? 9.5 : 13),
        a = 30 + (n > 3 ? (e % 2 ? 6 : -4) : 0);
      i += `<path transform="translate(${t} ${a}) scale(.62)" fill="${r}" d="M0-10 2.9-3.1 10-3.1 4.2 1.2 6.2 8.1 0 4 -6.2 8.1 -4.2 1.2 -10-3.1 -2.9-3.1Z"/>`;
    }
  return `<svg viewBox="0 0 64 64" role="img" aria-hidden="true"><path d="M32 3 58 12V34C58 48 46 57 32 62 18 57 6 48 6 34V12Z" fill="#14222c" stroke="${r}" stroke-width="2"/>${t === 3 ? `<circle cx="32" cy="32" r="27" fill="none" stroke="${r}" stroke-width="2" stroke-dasharray="3 3"/>` : ``}${i}</svg>`;
}
