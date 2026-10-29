// assets__attachments-BlZum_KH 04 — tofixed
// Lines 1480-1527 of readable/assets__attachments-BlZum_KH.pretty.js (statement-aligned).
Object.freeze(T.filter((e) => !E.includes(e)));
var oe = T.map((e, t) => Math.round(1 + (19 * t) / (T.length - 1))),
  D = (e) => {
    let t = e / (T.length - 1),
      n = (e, n, r = 0) => +(e + (n - e) * t).toFixed(r),
      r = 1 - 0.3 * t,
      i = Math.round(30 + 10 * t);
    return {
      damage: n(36, 37.8, 2),
      head: 1.7,
      limb: 0.78,
      rpm: n(660, 750),
      mag: i,
      reserve: i * 5,
      reload: n(2.35, 2.05, 2),
      ads: n(0.24, 0.2, 3),
      velocity: n(810, 890),
      drag: n(22e-5, 19e-5, 6),
      range: n(600, 700),
      spread: +(0.0012 * r).toFixed(6),
      hipSpread: +(0.02 * r).toFixed(5),
      moveSpread: +(0.011 * r).toFixed(5),
      recoil: Object.freeze([
        +(0.0028 * r).toFixed(6),
        +(0.012 * r).toFixed(6),
      ]),
      presentation: Object.freeze({ recovery: 12, lateralRecovery: 16 }),
      falloff: Object.freeze({
        near: n(50, 65),
        far: n(250, 300),
        floor: n(0.75, 0.8, 3),
      }),
      tier: e + 1,
      unlockLevel: oe[e],
    };
  },
  O = Object.fromEntries(
    T.map((e, t) => [
      e,
      {
        ...D(t),
        role: E.includes(e)
          ? `Removed 2026-10-11 at owner request`
          : `Historical rifle slot; active roles override below`,
      },
    ]),
  );
O[40] = { ...D(12), role: `Retired 2026-10-01: replaced by the Cormorant` };
