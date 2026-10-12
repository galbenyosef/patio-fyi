// assets__effects-BZzGHRRU 05 — math
// Lines 2650-2656 of readable/assets__effects-BZzGHRRU.pretty.js (statement-aligned).
var x = 1 / 60,
  S = Math.PI / 180,
  C = (e) => (e < 0 ? 0 : e > 1 ? 1 : e),
  w = (e, t, n) => {
    let r = C((n - e) / (t - e));
    return r * r * (3 - 2 * r);
  };
