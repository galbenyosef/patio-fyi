// assets__effects---y_dmg- 03 — math
// Lines 1694-1700 of readable/assets__effects---y_dmg-.pretty.js (statement-aligned).
var h = 1 / 60,
  g = Math.PI / 180,
  _ = (e) => (e < 0 ? 0 : e > 1 ? 1 : e),
  v = (e, t, n) => {
    let r = _((n - e) / (t - e));
    return r * r * (3 - 2 * r);
  };
