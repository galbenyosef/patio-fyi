// assets__attachments-DZaUzy_Q 02 — damage
// Lines 352-423 of readable/assets__attachments-DZaUzy_Q.pretty.js (statement-aligned).
function j(e) {
  return s
    .map(
      (t) =>
        `${e.weapons[t].optic}/${e.weapons[t].muzzle}/${e.weapons[t].grip}/${e.weapons[t].mag}${e.weapons[t].rail == null ? `` : `@` + e.weapons[t].rail}`,
    )
    .join(`|`);
}
function M(e, t = s) {
  let n = A(e),
    r = {};
  for (let e of t) {
    let t = n.weapons[e];
    t &&
      (t.optic !== `standard` ||
        t.muzzle !== `standard` ||
        t.grip !== `standard` ||
        t.mag !== `standard` ||
        t.rail != null) &&
      (r[e] = t);
  }
  return { version: 2, weapons: r };
}
var N = new Map();
function P(e, t) {
  let n = i[e];
  if (!n || !s.includes(e)) return n;
  let r = k(e, t?.version === 2 ? t.weapons?.[e] : null),
    a = `${e}/${r.optic}/${r.muzzle}/${r.grip}/${r.mag}/${r.rail ?? ``}`;
  if (N.has(a)) return N.get(a);
  let o = y[r.optic],
    c = S[r.muzzle],
    l = C[r.grip],
    d = w[r.mag],
    f = c.recoil * (l.recoil ?? 1),
    p = c.spread * (l.spread ?? 1),
    m = c.range,
    h = Object.freeze({
      ...n,
      optic: o.optic ?? n.optic,
      ...(c.damage && c.damage !== 1
        ? {
            damage: x(n, c.damage),
            unsuppressedDamage: n.damage,
            suppressorCut: c.damage,
          }
        : {}),
      ads: n.ads + c.ads + (l.ads ?? 0) + d.ads,
      ...(r.mag === `standard`
        ? {}
        : { mag: u[e][r.mag], reload: +(n.reload * d.reload).toFixed(3) }),
      spread: n.spread * p,
      hipSpread: n.hipSpread * p,
      moveSpread: n.moveSpread * p,
      recoil: Object.freeze(n.recoil.map((e) => e * f)),
      ...(n.falloff && m !== 1
        ? {
            falloff: Object.freeze({
              ...n.falloff,
              near: n.falloff.near * m,
              far: n.falloff.far * m,
            }),
          }
        : {}),
      attachments: Object.freeze(r),
      reportVolume:
        n.suppressed && r.muzzle === `standard`
          ? S.suppressor.volume
          : c.volume,
    });
  return (N.set(a, h), h);
}
