// assets__attachments-BlZum_KH 06 — freeze
// Lines 2385-2576 of readable/assets__attachments-BlZum_KH.pretty.js (statement-aligned).
function ge(e, t) {
  let n = (t) =>
    t > 0 ? U / (Math.ceil(U / (e.damage * t) - 1e-9) * t) + 1e-6 : 0;
  return Math.min(e.damage, Math.max(e.damage * t, n(1), n(e.head), n(e.limb)));
}
var W = Object.freeze({
    standard: Object.freeze({
      name: `Factory muzzle`,
      description: `Standard length and report.`,
      recoil: 1,
      spread: 1,
      range: 1,
      ads: 0,
      volume: 1,
    }),
    brake: Object.freeze({
      name: `Compensator`,
      description: `15% less recoil; +30 ms aim time.`,
      recoil: 0.85,
      spread: 1,
      range: 1,
      ads: 0.03,
      volume: 1,
      flash: Object.freeze({ device: `compensator` }),
    }),
    suppressor: Object.freeze({
      name: `Suppressor`,
      description: `Quiet report; up to 5% less damage. Same head, body or limb hit count at every range.`,
      recoil: 1,
      spread: 1,
      range: 1,
      damage: 0.95,
      ads: 0,
      volume: 0.55,
      flash: Object.freeze({ device: `suppressor` }),
    }),
    heavy: Object.freeze({
      name: `Heavy barrel`,
      description: `15% tighter spread and 15% longer range; +60 ms aim time.`,
      recoil: 1,
      spread: 0.85,
      range: 1.15,
      ads: 0.06,
      volume: 1,
      flash: Object.freeze({ barrel: 1.25 }),
    }),
  }),
  G = Object.freeze({
    standard: Object.freeze({
      name: `Factory grip`,
      description: `Original handling.`,
    }),
    vertical: Object.freeze({
      name: `Vertical grip`,
      description: `15% less recoil and 5% tighter spread; +40 ms aim time.`,
      recoil: 0.85,
      spread: 0.95,
      ads: 0.04,
    }),
    angled: Object.freeze({
      name: `Angled grip`,
      description: `40 ms faster aim time; 10% more recoil.`,
      recoil: 1.1,
      ads: -0.04,
    }),
    bipod: Object.freeze({
      name: `Bipod`,
      description: `Rests on any ledge, sill or the ground, and always when prone: 45% less kick while rested. +60 ms aim time.`,
      ads: 0.06,
    }),
  }),
  K = Object.freeze({
    standard: Object.freeze({
      name: `Factory magazine`,
      description: `Standard capacity and handling.`,
      reload: 1,
      ads: 0,
    }),
    short: Object.freeze({
      name: `Short magazine`,
      description: `Fewer rounds; 15% faster reload and 20 ms faster aim time.`,
      reload: 0.85,
      ads: -0.02,
    }),
    extended: Object.freeze({
      name: `Extended magazine`,
      description: `More rounds; 15% slower reload and +40 ms aim time.`,
      reload: 1.15,
      ads: 0.04,
    }),
  }),
  q = (e, t) => he[e]?.[t] ?? [],
  J = (e, t, n, r) => {
    let i = n?.[t],
      a = t === `optic` && Object.hasOwn(z, i) ? z[i] : i;
    return a !== `standard` && q(e, t).includes(a) && (!r || r(e, t, a))
      ? a
      : `standard`;
  },
  Y = 0.6,
  _e = (e) => {
    let t = e?.rail;
    return typeof t == `number` && Number.isFinite(t)
      ? Math.max(-0.6, Math.min(Y, Math.round(t * 200) / 200))
      : null;
  },
  X = (e, t, n = null) => {
    let r = {
        optic: J(e, `optic`, t, n),
        muzzle: J(e, `muzzle`, t, n),
        grip: J(e, `grip`, t, n),
        mag: J(e, `mag`, t, n),
      },
      i = _e(t);
    return (i != null && (r.rail = i), r);
  };
function Z(e, t = null) {
  let n = e && typeof e == `object` && !Array.isArray(e) ? e : {},
    r = {};
  for (let e of F) r[e] = X(e, n.version === 2 ? n.weapons?.[e] : null, t);
  return { version: 2, weapons: r };
}
function Q(e) {
  return F.map(
    (t) =>
      `${e.weapons[t].optic}/${e.weapons[t].muzzle}/${e.weapons[t].grip}/${e.weapons[t].mag}${e.weapons[t].rail == null ? `` : `@` + e.weapons[t].rail}`,
  ).join(`|`);
}
function ve(e, t = F) {
  let n = Z(e),
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
var $ = new Map();
function ye(e, t) {
  let n = j[e];
  if (!n || !F.includes(e)) return n;
  let r = X(e, t?.version === 2 ? t.weapons?.[e] : null),
    i = `${e}/${r.optic}/${r.muzzle}/${r.grip}/${r.mag}/${r.rail ?? ``}`;
  if ($.has(i)) return $.get(i);
  let a = H[r.optic],
    o = W[r.muzzle],
    s = G[r.grip],
    c = K[r.mag],
    l = o.recoil * (s.recoil ?? 1),
    u = o.spread * (s.spread ?? 1),
    d = o.range,
    f = Object.freeze({
      ...n,
      optic: a.optic ?? n.optic,
      ...(o.damage && o.damage !== 1
        ? {
            damage: ge(n, o.damage),
            unsuppressedDamage: n.damage,
            suppressorCut: o.damage,
          }
        : {}),
      ads: n.ads + (a.ads ?? 0) + o.ads + (s.ads ?? 0) + c.ads,
      ...(r.mag === `standard`
        ? {}
        : { mag: L[e][r.mag], reload: +(n.reload * c.reload).toFixed(3) }),
      spread: n.spread * u,
      hipSpread: n.hipSpread * u,
      moveSpread: n.moveSpread * u,
      recoil: Object.freeze(n.recoil.map((e) => e * l)),
      ...(n.falloff && d !== 1
        ? {
            falloff: Object.freeze({
              ...n.falloff,
              near: n.falloff.near * d,
              far: n.falloff.far * d,
            }),
          }
        : {}),
      attachments: Object.freeze(r),
      reportVolume:
        n.suppressed && r.muzzle === `standard`
          ? W.suppressor.volume
          : o.volume,
    });
  return ($.set(i, f), f);
}
