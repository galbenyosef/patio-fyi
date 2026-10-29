// assets__deadweight-CNacoM7d 03 — liv
// Lines 391-404 of readable/assets__deadweight-CNacoM7d.pretty.js (statement-aligned).
function V(e, t, n, r) {
  let i = t <= 1 ? `warm` : t >= 6 ? `cool` : `mixed`,
    a = z[i],
    o = a[Math.floor(B(e, t < 4 ? 0 : 1, i.length) * a.length)],
    s = (r) =>
      B(e, t, n, r) < 0.62 ? o : a[Math.floor(B(e, t, n, r + 9) * a.length)];
  return e === 6 || e === 7
    ? { kind: `reefer40`, liv: [z.reefer[Math.floor(B(e, t, n) * 2)]] }
    : n === r - 1 && B(e, t, n, 3) < 0.1
      ? { kind: `open40`, liv: [s(1)] }
      : B(e, t, n, 5) < 0.17
        ? { pair: !0, liv: [s(2), s(4)] }
        : { kind: `dry40`, liv: [s(1)] };
}
