// assets__deadweight-Db5xFjvu 03 — liv
// Lines 391-404 of readable/assets__deadweight-Db5xFjvu.pretty.js (statement-aligned).
function U(e, t, n, r) {
  let i = t <= 1 ? `warm` : t >= 6 ? `cool` : `mixed`,
    a = V[i],
    o = a[Math.floor(H(e, t < 4 ? 0 : 1, i.length) * a.length)],
    s = (r) =>
      H(e, t, n, r) < 0.62 ? o : a[Math.floor(H(e, t, n, r + 9) * a.length)];
  return e === 6 || e === 7
    ? { kind: `reefer40`, liv: [V.reefer[Math.floor(H(e, t, n) * 2)]] }
    : n === r - 1 && H(e, t, n, 3) < 0.1
      ? { kind: `open40`, liv: [s(1)] }
      : H(e, t, n, 5) < 0.17
        ? { pair: !0, liv: [s(2), s(4)] }
        : { kind: `dry40`, liv: [s(1)] };
}
